#!/usr/bin/python
#
# Copyright 2018-2022 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
import pytest

from polyaxon.auxiliaries import V1PolyaxonInitContainer, get_init_resources
from polyaxon.connections.kinds import V1ConnectionKind
from polyaxon.connections.schemas import (
    V1BucketConnection,
    V1ClaimConnection,
    V1HostPathConnection,
    V1K8sResourceSchema,
)
from polyaxon.containers.names import (
    INIT_ARTIFACTS_CONTAINER_PREFIX,
    generate_container_name,
)
from polyaxon.contexts import paths as ctx_paths
from polyaxon.exceptions import PolypodException
from polyaxon.k8s import k8s_schemas
from polyaxon.polypod.common import constants
from polyaxon.polypod.common.env_vars import (
    get_connection_env_var,
    get_env_var,
    get_items_from_secret,
)
from polyaxon.polypod.common.mounts import (
    get_connections_context_mount,
    get_mount_from_resource,
    get_mount_from_store,
)
from polyaxon.polypod.common.volumes import get_volume_name
from polyaxon.polypod.init.store import (
    cp_mount_args,
    cp_store_args,
    get_base_store_container,
    get_or_create_args,
    get_store_container,
    get_volume_args,
)
from polyaxon.schemas.types import V1ArtifactsType, V1ConnectionType, V1K8sResourceType
from polyaxon.utils.test_utils import BaseTestCase


@pytest.mark.polypod_mark
class TestInitStore(BaseTestCase):
    def test_get_or_create_args(self):
        assert (
            get_or_create_args(path="/foo")
            == 'if [ ! -d "/foo" ]; then mkdir -m 0777 -p /foo; fi;'
        )

    def test_cp_store_args(self):
        assert (
            cp_mount_args(
                path_from="/foo",
                path_to="/bar",
                is_file=True,
                sync_fw=False,
            )
            == "if [ -f /foo ]; then cp /foo /bar;  fi;"
        )
        assert (
            cp_mount_args(
                path_from="/foo",
                path_to="/bar",
                is_file=False,
                sync_fw=False,
            )
            == 'if [ -d /foo ] && [ "$(ls -A /foo)" ]; then cp -R /foo/* /bar;  fi;'
        )
        assert cp_store_args(
            backend="host_path",
            path_from="/foo",
            path_to="/bar",
            is_file=False,
            sync_fw=False,
            check_path=True,
        ) == (
            "polyaxon initializer path --connection-kind=host_path "
            "--path-from=/foo --path-to=/bar --check-path;"
        )

    def test_files_cp_gcs_args(self):
        assert cp_store_args(
            backend="gcs",
            path_from="gcs://foo",
            path_to="/local",
            is_file=True,
            sync_fw=False,
            check_path=False,
        ) == (
            "polyaxon initializer path --connection-kind=gcs "
            "--path-from=gcs://foo --path-to=/local --is-file;"
        )

    def test_dirs_cp_gcs_args(self):
        assert cp_store_args(
            backend="gcs",
            path_from="gcs://foo",
            path_to="/local",
            is_file=False,
            sync_fw=False,
            check_path=True,
        ) == (
            "polyaxon initializer path --connection-kind=gcs "
            "--path-from=gcs://foo --path-to=/local --check-path;"
        )

    def test_files_cp_wasb_args(self):
        assert cp_store_args(
            backend="wasb",
            path_from="wasb://foo",
            path_to="/local",
            is_file=True,
            sync_fw=False,
            check_path=False,
        ) == (
            "polyaxon initializer path --connection-kind=wasb "
            "--path-from=wasb://foo --path-to=/local --is-file;"
        )

    def test_cp_wasb_args(self):
        assert cp_store_args(
            backend="wasb",
            path_from="wasb://foo",
            path_to="/local",
            is_file=False,
            sync_fw=False,
            check_path=True,
        ) == (
            "polyaxon initializer path --connection-kind=wasb "
            "--path-from=wasb://foo --path-to=/local --check-path;"
        )

    def test_get_volume_args_s3(self):
        s3_store = V1ConnectionType(
            name="test_s3",
            kind=V1ConnectionKind.S3,
            schema=V1BucketConnection(bucket="s3//:foo"),
        )
        path_to = "/path-to/"
        path_from = os.path.join(s3_store.store_path, "")
        assert get_volume_args(s3_store, path_to, None, None) == " ".join(
            [
                get_or_create_args(path=path_to),
                cp_store_args(
                    backend="s3",
                    path_from=path_from,
                    path_to=path_to,
                    is_file=False,
                    sync_fw=False,
                    check_path=False,
                ),
            ]
        )

        s3_store = V1ConnectionType(
            name="test_s3",
            kind=V1ConnectionKind.S3,
            schema=V1BucketConnection(bucket="s3//:foo"),
        )
        base_path = "/path/to/"
        path_to1 = "/path/to/path1"
        path_to2 = "/path/to/path2"
        path_from1 = os.path.join(s3_store.store_path, "path1")
        path_from2 = os.path.join(s3_store.store_path, "path2")
        assert get_volume_args(
            s3_store,
            "/path/to",
            artifacts=V1ArtifactsType(files=["path1", "path2"]),
            paths=None,
        ) == " ".join(
            [
                get_or_create_args(path=base_path),
                cp_store_args(
                    backend="s3",
                    path_from=path_from1,
                    path_to=path_to1,
                    is_file=True,
                    sync_fw=False,
                    check_path=False,
                ),
                get_or_create_args(path=base_path),
                cp_store_args(
                    backend="s3",
                    path_from=path_from2,
                    path_to=path_to2,
                    is_file=True,
                    sync_fw=False,
                    check_path=False,
                ),
            ]
        )

        base_path = "/path/to/"
        path_to1 = "/path/to/path1"
        path_to2 = "/path/to/path2"
        path_from1 = os.path.join(s3_store.store_path, "path1")
        path_from2 = os.path.join(s3_store.store_path, "path2")
        assert get_volume_args(
            s3_store,
            "/path/to",
            artifacts=None,
            paths=["path1", "path2"],
        ) == " ".join(
            [
                get_or_create_args(path=base_path),
                cp_store_args(
                    backend="s3",
                    path_from=path_from1,
                    path_to=path_to1,
                    is_file=False,
                    sync_fw=False,
                    check_path=True,
                ),
                get_or_create_args(path=base_path),
                cp_store_args(
                    backend="s3",
                    path_from=path_from2,
                    path_to=path_to2,
                    is_file=False,
                    sync_fw=False,
                    check_path=True,
                ),
            ]
        )

    def test_get_volume_args_gcs(self):
        gcs_store = V1ConnectionType(
            name="test_gcs",
            kind=V1ConnectionKind.GCS,
            schema=V1BucketConnection(bucket="gs//:foo"),
        )
        path_to = "/path/to/"
        path_from = os.path.join(gcs_store.store_path, "")
        assert get_volume_args(gcs_store, path_to, None, None) == " ".join(
            [
                get_or_create_args(path=path_to),
                cp_store_args(
                    backend="gcs",
                    path_from=path_from,
                    path_to=path_to,
                    is_file=False,
                    sync_fw=False,
                    check_path=False,
                ),
            ]
        )

        gcs_store = V1ConnectionType(
            name="test_gcs",
            kind=V1ConnectionKind.GCS,
            schema=V1BucketConnection(bucket="Congs//:foo"),
        )

        path_to1 = "/path/to/path1"
        path_to2 = "/path/to/path2"
        path_from1 = os.path.join(gcs_store.store_path, "path1")
        path_from2 = os.path.join(gcs_store.store_path, "path2")
        assert get_volume_args(
            gcs_store,
            "/path/to",
            artifacts=V1ArtifactsType(dirs=["path1", "path2"]),
            paths=None,
        ) == " ".join(
            [
                get_or_create_args(path=path_to1),
                cp_store_args(
                    backend="gcs",
                    path_from=path_from1,
                    path_to=path_to1,
                    is_file=False,
                    sync_fw=False,
                    check_path=False,
                ),
                get_or_create_args(path=path_to2),
                cp_store_args(
                    backend="gcs",
                    path_from=path_from2,
                    path_to=path_to2,
                    is_file=False,
                    sync_fw=False,
                    check_path=False,
                ),
            ]
        )

    def test_get_volume_args_az(self):
        az_store = V1ConnectionType(
            name="test_az",
            kind=V1ConnectionKind.WASB,
            schema=V1BucketConnection(bucket="wasb://x@y.blob.core.windows.net"),
        )
        path_to = "/path/to/"
        path_from = os.path.join(az_store.store_path, "")
        assert get_volume_args(az_store, path_to, None, None) == " ".join(
            [
                get_or_create_args(path=path_to),
                cp_store_args(
                    backend="wasb",
                    path_from=path_from,
                    path_to=path_to,
                    is_file=False,
                    sync_fw=False,
                    check_path=False,
                ),
            ]
        )

        az_store = V1ConnectionType(
            name="test_az",
            kind=V1ConnectionKind.WASB,
            schema=V1BucketConnection(bucket="wasb://x@y.blob.core.windows.net"),
        )
        base_path = "/path/to/"
        path_to1 = "/path/to/path1"
        path_to2 = "/path/to/path2"
        path_from1 = os.path.join(az_store.store_path, "path1")
        path_from2 = os.path.join(az_store.store_path, "path2")
        assert get_volume_args(
            az_store,
            "/path/to",
            artifacts=V1ArtifactsType(files=["path1"], dirs=["path2"]),
            paths=None,
        ) == " ".join(
            [
                get_or_create_args(path=base_path),
                cp_store_args(
                    backend="wasb",
                    path_from=path_from1,
                    path_to=path_to1,
                    is_file=True,
                    sync_fw=False,
                    check_path=False,
                ),
                get_or_create_args(path=path_to2),
                cp_store_args(
                    backend="wasb",
                    path_from=path_from2,
                    path_to=path_to2,
                    is_file=False,
                    sync_fw=False,
                    check_path=False,
                ),
            ]
        )

    def test_get_volume_args_claim(self):
        claim_store = V1ConnectionType(
            name="test_claim",
            kind=V1ConnectionKind.VOLUME_CLAIM,
            schema=V1ClaimConnection(
                mount_path="/tmp", volume_claim="test", read_only=True
            ),
        )
        path_to = "/path/to/"
        path_from = os.path.join(claim_store.store_path, "")
        assert get_volume_args(claim_store, path_to, None, None) == " ".join(
            [
                get_or_create_args(path=path_to),
                cp_mount_args(
                    path_from=path_from,
                    path_to=path_to,
                    is_file=False,
                    sync_fw=False,
                ),
            ]
        )

        claim_store = V1ConnectionType(
            name="test_claim",
            kind=V1ConnectionKind.VOLUME_CLAIM,
            schema=V1ClaimConnection(
                mount_path="/tmp", volume_claim="test", read_only=True
            ),
        )
        base_path = "/path/to/"
        path_to1 = "/path/to/path1"
        path_to2 = "/path/to/path2"
        path_from1 = os.path.join(claim_store.store_path, "path1")
        path_from2 = os.path.join(claim_store.store_path, "path2")
        assert get_volume_args(
            claim_store,
            "/path/to",
            artifacts=V1ArtifactsType(files=["path1", "path2"]),
            paths=None,
        ) == " ".join(
            [
                get_or_create_args(path=base_path),
                cp_mount_args(
                    path_from=path_from1,
                    path_to=path_to1,
                    is_file=True,
                    sync_fw=False,
                ),
                get_or_create_args(path=base_path),
                cp_mount_args(
                    path_from=path_from2,
                    path_to=path_to2,
                    is_file=True,
                    sync_fw=False,
                ),
            ]
        )

        base_path = "/path/to/"
        path_to1 = "/path/to/path1"
        path_to2 = "/path/to/path2"
        path_to3 = "/path/to/path3"
        path_to4 = "/path/to/path4"
        path_from1 = os.path.join(claim_store.store_path, "path1")
        path_from2 = os.path.join(claim_store.store_path, "path2")
        path_from3 = os.path.join(claim_store.store_path, "path3")
        path_from4 = os.path.join(claim_store.store_path, "path4")
        assert get_volume_args(
            claim_store,
            "/path/to",
            artifacts=V1ArtifactsType(dirs=["path1", "path2"]),
            paths=["path3", "path4"],
        ) == " ".join(
            [
                get_or_create_args(path=path_to1),
                cp_mount_args(
                    path_from=path_from1,
                    path_to=path_to1,
                    is_file=False,
                    sync_fw=False,
                ),
                get_or_create_args(path=path_to2),
                cp_mount_args(
                    path_from=path_from2,
                    path_to=path_to2,
                    is_file=False,
                    sync_fw=False,
                ),
                get_or_create_args(path=base_path),
                cp_store_args(
                    backend=V1ConnectionKind.VOLUME_CLAIM,
                    path_from=path_from3,
                    path_to=path_to3,
                    is_file=False,
                    sync_fw=False,
                    check_path=True,
                ),
                get_or_create_args(path=base_path),
                cp_store_args(
                    backend=V1ConnectionKind.VOLUME_CLAIM,
                    path_from=path_from4,
                    path_to=path_to4,
                    is_file=False,
                    sync_fw=False,
                    check_path=True,
                ),
            ]
        )

    def test_get_volume_args_host(self):
        host_path_store = V1ConnectionType(
            name="test_path",
            kind=V1ConnectionKind.HOST_PATH,
            schema=V1HostPathConnection(
                mount_path="/tmp", host_path="/tmp", read_only=True
            ),
        )
        path_to = "/path/to/"
        path_from = os.path.join(host_path_store.store_path, "")
        assert get_volume_args(host_path_store, path_to, None, None) == " ".join(
            [
                get_or_create_args(path=path_to),
                cp_mount_args(
                    path_from=path_from,
                    path_to=path_to,
                    is_file=False,
                    sync_fw=False,
                ),
            ]
        )

        host_path_store = V1ConnectionType(
            name="test_claim",
            kind=V1ConnectionKind.HOST_PATH,
            schema=V1HostPathConnection(
                mount_path="/tmp", host_path="/tmp", read_only=True
            ),
        )
        path_to1 = "/path/to/path1"
        path_to2 = "/path/to/path2"
        path_from1 = os.path.join(host_path_store.store_path, "path1")
        path_from2 = os.path.join(host_path_store.store_path, "path2")
        assert get_volume_args(
            host_path_store,
            "/path/to",
            artifacts=V1ArtifactsType(dirs=["path1", "path2"]),
            paths=None,
        ) == " ".join(
            [
                get_or_create_args(path=path_to1),
                cp_mount_args(
                    path_from=path_from1,
                    path_to=path_to1,
                    is_file=False,
                    sync_fw=False,
                ),
                get_or_create_args(path=path_to2),
                cp_mount_args(
                    path_from=path_from2,
                    path_to=path_to2,
                    is_file=False,
                    sync_fw=False,
                ),
            ]
        )

    def test_get_base_store_container_with_none_values(self):
        with self.assertRaises(PolypodException):
            get_base_store_container(
                container=k8s_schemas.V1Container(name="init"),
                container_name=None,
                polyaxon_init=V1PolyaxonInitContainer(),
                store=None,
                env=None,
                env_from=None,
                volume_mounts=None,
                args=None,
            )

    def test_get_base_store_container_with_store_without_secret(self):
        bucket_store_without_secret = V1ConnectionType(
            name="test_gcs",
            kind=V1ConnectionKind.GCS,
            schema=V1BucketConnection(bucket="gs//:foo"),
        )
        container = get_base_store_container(
            container=k8s_schemas.V1Container(name="test"),
            container_name="init",
            polyaxon_init=V1PolyaxonInitContainer(image_tag=""),
            store=bucket_store_without_secret,
            env=None,
            env_from=None,
            volume_mounts=None,
            args=None,
        )

        assert container.name == "init"
        assert container.image == "polyaxon/polyaxon-init"
        assert container.image_pull_policy is None
        assert container.command == ["/bin/sh", "-c"]
        assert container.args is None
        assert container.env == get_connection_env_var(
            connection=bucket_store_without_secret, secret=None
        )
        assert container.env_from == []
        assert container.resources is not None
        assert container.volume_mounts == []

    def test_get_base_store_container_with_store_with_secret(self):
        non_mount_resource1 = V1K8sResourceType(
            name="resource",
            schema=V1K8sResourceSchema(name="ref", items=["item1", "item2"]),
            is_requested=False,
        )
        bucket_store_with_secret = V1ConnectionType(
            name="test_gcs",
            kind=V1ConnectionKind.GCS,
            schema=V1BucketConnection(bucket="gs//:foo"),
            secret=non_mount_resource1.schema,
        )
        container = get_base_store_container(
            container=k8s_schemas.V1Container(name="init"),
            container_name="init",
            polyaxon_init=V1PolyaxonInitContainer(image_tag=""),
            store=bucket_store_with_secret,
            env=None,
            env_from=None,
            volume_mounts=None,
            args=None,
        )
        assert container.name == "init"
        assert container.image == "polyaxon/polyaxon-init"
        assert container.image_pull_policy is None
        assert container.command == ["/bin/sh", "-c"]
        assert container.args is None
        env = get_items_from_secret(
            secret=non_mount_resource1
        ) + get_connection_env_var(
            connection=bucket_store_with_secret, secret=non_mount_resource1
        )
        assert container.env == env
        assert container.env_from == []
        assert container.resources is not None
        assert container.volume_mounts == []

        mount_resource1 = V1K8sResourceType(
            name="resource",
            schema=V1K8sResourceSchema(
                name="resource", items=["item1", "item2"], mount_path="/tmp1"
            ),
            is_requested=False,
        )
        bucket_store_with_secret.secret = mount_resource1.schema
        container = get_base_store_container(
            container=k8s_schemas.V1Container(name="init"),
            container_name="init",
            polyaxon_init=V1PolyaxonInitContainer(image_tag=""),
            store=bucket_store_with_secret,
            env=None,
            env_from=None,
            volume_mounts=None,
            args=None,
        )
        assert container.name == "init"
        assert container.image == "polyaxon/polyaxon-init"
        assert container.image_pull_policy is None
        assert container.command == ["/bin/sh", "-c"]
        assert container.args is None
        assert container.env == get_connection_env_var(
            connection=bucket_store_with_secret, secret=mount_resource1
        )
        assert container.env_from == []
        assert container.resources is not None
        assert container.volume_mounts == [
            get_mount_from_resource(resource=mount_resource1)
        ]

    def test_get_base_store_container_with_mount_store(self):
        claim_store = V1ConnectionType(
            name="test_claim",
            kind=V1ConnectionKind.VOLUME_CLAIM,
            schema=V1ClaimConnection(
                mount_path="/tmp", volume_claim="test", read_only=True
            ),
        )

        container = get_base_store_container(
            container=k8s_schemas.V1Container(name="init"),
            container_name="init",
            polyaxon_init=V1PolyaxonInitContainer(image_tag=""),
            store=claim_store,
            env=None,
            env_from=None,
            volume_mounts=None,
            args=None,
        )
        assert container.name == "init"
        assert container.image == "polyaxon/polyaxon-init"
        assert container.image_pull_policy is None
        assert container.command == ["/bin/sh", "-c"]
        assert container.args is None
        assert container.env == get_connection_env_var(
            connection=claim_store, secret=None
        )
        assert container.env_from == []
        assert container.resources is not None
        assert container.volume_mounts == [get_mount_from_store(store=claim_store)]

    def test_get_base_container(self):
        store = V1ConnectionType(
            name="test_claim",
            kind=V1ConnectionKind.VOLUME_CLAIM,
            schema=V1ClaimConnection(
                mount_path="/tmp", volume_claim="test", read_only=True
            ),
        )
        env = [get_env_var(name="key", value="value")]
        env_from = [k8s_schemas.V1EnvFromSource(secret_ref={"name": "ref"})]
        mounts = [k8s_schemas.V1VolumeMount(name="test", mount_path="/test")]
        container = get_base_store_container(
            container=k8s_schemas.V1Container(name="init"),
            container_name="init",
            polyaxon_init=V1PolyaxonInitContainer(
                image="foo/foo", image_tag="", image_pull_policy="IfNotPresent"
            ),
            store=store,
            env=env,
            env_from=env_from,
            volume_mounts=mounts,
            args=["test"],
        )
        assert container.name == "init"
        assert container.image == "foo/foo"
        assert container.image_pull_policy == "IfNotPresent"
        assert container.command == ["/bin/sh", "-c"]
        assert container.args == ["test"]
        assert container.env == env
        assert container.env_from == env_from
        assert container.resources is not None
        assert container.volume_mounts == mounts + [get_mount_from_store(store=store)]

    def test_get_store_container_mount_stores(self):
        # Managed store
        store = V1ConnectionType(
            name="test_claim",
            kind=V1ConnectionKind.VOLUME_CLAIM,
            schema=V1ClaimConnection(
                mount_path="/tmp", volume_claim="test", read_only=True
            ),
        )
        container = get_store_container(
            polyaxon_init=V1PolyaxonInitContainer(
                image="foo/foo", image_tag="foo", image_pull_policy="IfNotPresent"
            ),
            connection=store,
            artifacts=None,
            paths=None,
        )
        mount_path = ctx_paths.CONTEXT_MOUNT_ARTIFACTS_FORMAT.format(store.name)
        assert (
            generate_container_name(INIT_ARTIFACTS_CONTAINER_PREFIX, store.name, False)
            in container.name
        )
        assert container.image == "foo/foo:foo"
        assert container.image_pull_policy == "IfNotPresent"
        assert container.command == ["/bin/sh", "-c"]
        assert container.args == [
            get_volume_args(
                store=store, mount_path=mount_path, artifacts=None, paths=None
            )
        ]
        assert container.env == get_connection_env_var(connection=store, secret=None)
        assert container.env_from == []
        assert container.resources is not None
        assert container.volume_mounts == [
            get_connections_context_mount(
                name=constants.VOLUME_MOUNT_ARTIFACTS,
                mount_path=ctx_paths.CONTEXT_MOUNT_ARTIFACTS,
            ),
            get_mount_from_store(store=store),
        ]

    def test_get_store_container_bucket_stores(self):
        mount_path = "/test-path"
        resource1 = V1K8sResourceType(
            name="non_mount_test1",
            schema=V1K8sResourceSchema(name="ref", items=["item1", "item2"]),
            is_requested=False,
        )
        store = V1ConnectionType(
            name="test_gcs",
            kind=V1ConnectionKind.GCS,
            schema=V1BucketConnection(bucket="gs//:foo"),
            secret=resource1.schema,
        )
        container = get_store_container(
            polyaxon_init=V1PolyaxonInitContainer(
                image="foo/foo", image_tag="", image_pull_policy="IfNotPresent"
            ),
            connection=store,
            artifacts=None,
            paths=None,
            mount_path=mount_path,
        )
        assert (
            generate_container_name(INIT_ARTIFACTS_CONTAINER_PREFIX, store.name, False)
            in container.name
        )
        assert container.image == "foo/foo"
        assert container.image_pull_policy == "IfNotPresent"
        assert container.command == ["/bin/sh", "-c"]
        assert container.args == [
            get_volume_args(
                store=store,
                mount_path=mount_path,
                artifacts=None,
                paths=None,
            )
        ]
        assert container.env is not None
        assert container.env_from == []
        assert container.resources == get_init_resources()
        assert container.volume_mounts == [
            get_connections_context_mount(
                name=get_volume_name(mount_path), mount_path=mount_path
            )
        ]

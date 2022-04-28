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

from polyaxon.api import STREAMS_V1_LOCATION
from polyaxon.utils.path_utils import create_path
from polyaxon.utils.test_utils import BaseTestCase, create_tmp_files, set_store
from tests.base import get_streams_client


@pytest.mark.artifacts_mark
class TestArtifactsTreeEndpoints(BaseTestCase):
    def setUp(self):
        super().setUp()
        self.store_root = set_store()
        self.run_path = os.path.join(self.store_root, "uuid")
        # Create run artifacts path and some files
        create_path(self.run_path)
        create_tmp_files(self.run_path)

        self.client = get_streams_client()
        self.base_url = (
            STREAMS_V1_LOCATION + "namespace/owner/project/runs/uuid/artifacts/tree"
        )

    def test_get_artifacts_tree_non_existing_path(self):
        response = self.client.get(self.base_url + "?path=foo")
        assert response.status_code == 200
        results = response.json()
        assert results.pop("error") is not None
        assert results == {"dirs": [], "files": {}}

    def test_get_artifacts_tree(self):
        response = self.client.get(self.base_url)
        assert response.status_code == 200
        assert response.json() == {
            "dirs": [],
            "files": {"0": 0, "1": 0, "2": 0, "3": 0},
        }

        # add nested
        nested_path = os.path.join(self.run_path, "foo")
        create_path(nested_path)
        create_tmp_files(nested_path)

        response = self.client.get(self.base_url)
        assert response.status_code == 200
        assert response.json() == {
            "dirs": ["foo"],
            "files": {"0": 0, "1": 0, "2": 0, "3": 0},
        }

        response = self.client.get(self.base_url + "?path=foo")
        assert response.status_code == 200
        assert response.json() == {
            "dirs": [],
            "files": {"0": 0, "1": 0, "2": 0, "3": 0},
        }

        response = self.client.get(self.base_url + "?path=foo/1")
        assert response.status_code == 200
        results = response.json()
        assert results.pop("error") is not None
        assert results == {"dirs": [], "files": {}}
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

from polyaxon.env_vars.getters import get_component_info
from polyaxon.exceptions import PolyaxonSchemaError
from polyaxon.utils.test_utils import BaseTestCase


class TestComponentEnvVars(BaseTestCase):
    def test_get_component_info(self):
        with self.assertRaises(PolyaxonSchemaError):
            get_component_info(None)

        with self.assertRaises(PolyaxonSchemaError):
            get_component_info("")

        assert get_component_info("hub") == ("polyaxon", "hub", "latest")
        assert get_component_info("hub:ver") == ("polyaxon", "hub", "ver")
        assert get_component_info("owner.hub") == ("owner", "hub", "latest")
        assert get_component_info("owner/hub") == ("owner", "hub", "latest")
        assert get_component_info("owner.hub:ver") == ("owner", "hub", "ver")
        assert get_component_info("owner/hub:ver") == ("owner", "hub", "ver")

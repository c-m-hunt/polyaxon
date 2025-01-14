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

import pytest

from polyaxon.managers.user import UserConfigManager
from polyaxon.utils.test_utils import BaseTestCase
from polyaxon_sdk import V1User


@pytest.mark.managers_mark
class TestUserConfigManager(BaseTestCase):
    def test_default_props(self):
        assert UserConfigManager.is_global() is True
        assert UserConfigManager.IS_POLYAXON_DIR is True
        assert UserConfigManager.CONFIG_FILE_NAME == ".user"
        assert UserConfigManager.CONFIG == V1User

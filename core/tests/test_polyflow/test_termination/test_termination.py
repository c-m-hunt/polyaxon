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

from polyaxon.polyflow.termination import V1Termination
from polyaxon.utils.test_utils import BaseTestCase, assert_equal_dict


@pytest.mark.termination_mark
class TestV1Terminations(BaseTestCase):
    def test_termination_config(self):
        config_dict = {}
        config = V1Termination.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        config_dict["maxRetries"] = "{{ fs }}"
        config = V1Termination.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Add max_retries
        config_dict["maxRetries"] = 4
        config = V1Termination.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Add timeout
        config_dict["timeout"] = 4
        config = V1Termination.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Add ttl
        config_dict["ttl"] = 40
        config = V1Termination.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

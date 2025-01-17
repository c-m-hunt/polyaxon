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

try:
    from rest_framework.exceptions import ValidationError
except ImportError:
    raise ImportError("This module depends on django.")


NAME_BLACKLIST = {
    "user",
    "profile",
    "preset",
    "admin",
    "root",
    "abstract",
    "experiment",
    "gateway",
    "stream",
    "service",
    "project",
    "health",
    "50x",
    "404",
    "rewrite-service",
    "permission",
    "healthz",
    "api",
    "polyaxon",
    "dashboard",
    "index",
    "log",
    "metric",
    "portfolio",
    "public",
    "revision",
    "version",
    "support",
    "tryout",
    "output",
    "artifact",
    "data",
    "dataset",
    "secret",
    "config_map",
    "pod",
    "deployment",
    "model",
    "management",
    "dependency",
    "dependencie",
    "repo",
    "cluster",
    "event",
    "manage",
    "login",
    "account",
    "register",
    "accept",
    "organization",
    "org",
    "team",
    "help",
    "doc",
    "logout",
    "404",
    "500",
    "static",
    "_static",
    "statusz",
    "status",
    "statuses",
    "_status",
    "out",
    "debug",
    "remote",
    "cli",
    "blog",
    "welcome",
    "feature",
    "customer",
    "integration",
    "signup",
    "pricing",
    "subscribe",
    "enterprise",
    "about",
    "job",
    "run",
    "thank",
    "guide",
    "privacy",
    "security",
    "term",
    "from",
    "sponsorship",
    "for",
    "at",
    "vs",
    "_admin",
    "support",
    "contact",
    "bookmark",
    "pipeline",
    "dag",
    "operation",
    "component",
    "action",
    "hook",
    "monitor",
    "setting",
    "hub",
    "registry",
    "registrie",
    "legal",
    "avatar",
    "self",
    "this",
    "name",
    "list",
    "detail",
    "update",
    "create",
    "delete",
    "get",
    "fetch",
    "query",
    "put",
    "patch",
    "member",
    "team",
    "new",
    "archive",
    "restore",
    "catalog",
    "setting",
    "auth",
    "activity",
    "activitie",
    "history",
    "analytic",
}
NAME_BLACKLIST |= {"{}s".format(b) for b in NAME_BLACKLIST}


def validate_blacklist_name(name: str) -> None:
    """Validates slug name against a blacklist"""
    if name is None:
        raise ValidationError("A short name must be supplied.")

    if name.lower() in NAME_BLACKLIST:
        raise ValidationError("The name is a reserved word or already taken.")

// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.11.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum V1EventKind {
    RunStatusCreated = 'run_status_created',
    RunStatusResuming = 'run_status_resuming',
    RunStatusCompiled = 'run_status_compiled',
    RunStatusOnSchedule = 'run_status_on_schedule',
    RunStatusQueued = 'run_status_queued',
    RunStatusScheduled = 'run_status_scheduled',
    RunStatusStarting = 'run_status_starting',
    RunStatusRunning = 'run_status_running',
    RunStatusProcessing = 'run_status_processing',
    RunStatusStopping = 'run_status_stopping',
    RunStatusFailed = 'run_status_failed',
    RunStatusStopped = 'run_status_stopped',
    RunStatusSucceeded = 'run_status_succeeded',
    RunStatusSkipped = 'run_status_skipped',
    RunStatusWarning = 'run_status_warning',
    RunStatusUnschedulable = 'run_status_unschedulable',
    RunStatusUpstreamFailed = 'run_status_upstream_failed',
    RunStatusRetrying = 'run_status_retrying',
    RunStatusUnknown = 'run_status_unknown',
    RunStatusDone = 'run_status_done',
    RunApprovedActor = 'run_approved_actor',
    RunInvalidatedActor = 'run_invalidated_actor',
    RunNewArtifacts = 'run_new_artifacts',
    ConnectionGitCommit = 'connection_git_commit',
    ConnectionDatasetVersion = 'connection_dataset_version',
    ConnectionRegistryImage = 'connection_registry_image',
    AlertInfo = 'alert_info',
    AlertWarning = 'alert_warning',
    AlertCritical = 'alert_critical',
    ModelVersionNewMetric = 'model_version_new_metric',
    ProjectCustomEvent = 'project_custom_event',
    OrgCustomEvent = 'org_custom_event'
}

export function V1EventKindFromJSON(json: any): V1EventKind {
    return V1EventKindFromJSONTyped(json, false);
}

export function V1EventKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventKind {
    return json as V1EventKind;
}

export function V1EventKindToJSON(value?: V1EventKind | null): any {
    return value as any;
}


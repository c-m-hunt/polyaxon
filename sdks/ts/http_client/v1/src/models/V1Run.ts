// Copyright 2018-2020 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.2.1-rc4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1Cloning,
    V1CloningFromJSON,
    V1CloningFromJSONTyped,
    V1CloningToJSON,
    V1Pipeline,
    V1PipelineFromJSON,
    V1PipelineFromJSONTyped,
    V1PipelineToJSON,
    V1RunKind,
    V1RunKindFromJSON,
    V1RunKindFromJSONTyped,
    V1RunKindToJSON,
    V1RunSettings,
    V1RunSettingsFromJSON,
    V1RunSettingsFromJSONTyped,
    V1RunSettingsToJSON,
    V1StatusCondition,
    V1StatusConditionFromJSON,
    V1StatusConditionFromJSONTyped,
    V1StatusConditionToJSON,
    V1Statuses,
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Run
 */
export interface V1Run {
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Run
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    project?: string;
    /**
     * 
     * @type {Date}
     * @memberof V1Run
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Run
     */
    updated_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Run
     */
    started_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Run
     */
    finished_at?: Date;
    /**
     * 
     * @type {number}
     * @memberof V1Run
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    is_managed?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    raw_content?: string;
    /**
     * 
     * @type {V1Statuses}
     * @memberof V1Run
     */
    status?: V1Statuses;
    /**
     * 
     * @type {boolean}
     * @memberof V1Run
     */
    bookmarked?: boolean;
    /**
     * 
     * @type {object}
     * @memberof V1Run
     */
    meta_info?: object;
    /**
     * 
     * @type {boolean}
     * @memberof V1Run
     */
    is_helper?: boolean;
    /**
     * 
     * @type {V1RunKind}
     * @memberof V1Run
     */
    kind?: V1RunKind;
    /**
     * 
     * @type {V1RunKind}
     * @memberof V1Run
     */
    runtime?: V1RunKind;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    hub?: string;
    /**
     * 
     * @type {object}
     * @memberof V1Run
     */
    inputs?: object;
    /**
     * 
     * @type {object}
     * @memberof V1Run
     */
    outputs?: object;
    /**
     * 
     * @type {V1Cloning}
     * @memberof V1Run
     */
    original?: V1Cloning;
    /**
     * 
     * @type {V1Pipeline}
     * @memberof V1Run
     */
    pipeline?: V1Pipeline;
    /**
     * 
     * @type {Array<V1StatusCondition>}
     * @memberof V1Run
     */
    status_conditions?: Array<V1StatusCondition>;
    /**
     * 
     * @type {V1RunSettings}
     * @memberof V1Run
     */
    settings?: V1RunSettings;
    /**
     * 
     * @type {string}
     * @memberof V1Run
     */
    role?: string;
}

export function V1RunFromJSON(json: any): V1Run {
    return V1RunFromJSONTyped(json, false);
}

export function V1RunFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Run {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'started_at': !exists(json, 'started_at') ? undefined : (new Date(json['started_at'])),
        'finished_at': !exists(json, 'finished_at') ? undefined : (new Date(json['finished_at'])),
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'is_managed': !exists(json, 'is_managed') ? undefined : json['is_managed'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'raw_content': !exists(json, 'raw_content') ? undefined : json['raw_content'],
        'status': !exists(json, 'status') ? undefined : V1StatusesFromJSON(json['status']),
        'bookmarked': !exists(json, 'bookmarked') ? undefined : json['bookmarked'],
        'meta_info': !exists(json, 'meta_info') ? undefined : json['meta_info'],
        'is_helper': !exists(json, 'is_helper') ? undefined : json['is_helper'],
        'kind': !exists(json, 'kind') ? undefined : V1RunKindFromJSON(json['kind']),
        'runtime': !exists(json, 'runtime') ? undefined : V1RunKindFromJSON(json['runtime']),
        'hub': !exists(json, 'hub') ? undefined : json['hub'],
        'inputs': !exists(json, 'inputs') ? undefined : json['inputs'],
        'outputs': !exists(json, 'outputs') ? undefined : json['outputs'],
        'original': !exists(json, 'original') ? undefined : V1CloningFromJSON(json['original']),
        'pipeline': !exists(json, 'pipeline') ? undefined : V1PipelineFromJSON(json['pipeline']),
        'status_conditions': !exists(json, 'status_conditions') ? undefined : ((json['status_conditions'] as Array<any>).map(V1StatusConditionFromJSON)),
        'settings': !exists(json, 'settings') ? undefined : V1RunSettingsFromJSON(json['settings']),
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function V1RunToJSON(value?: V1Run | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'user': value.user,
        'owner': value.owner,
        'project': value.project,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'started_at': value.started_at === undefined ? undefined : (value.started_at.toISOString()),
        'finished_at': value.finished_at === undefined ? undefined : (value.finished_at.toISOString()),
        'duration': value.duration,
        'is_managed': value.is_managed,
        'content': value.content,
        'raw_content': value.raw_content,
        'status': V1StatusesToJSON(value.status),
        'bookmarked': value.bookmarked,
        'meta_info': value.meta_info,
        'is_helper': value.is_helper,
        'kind': V1RunKindToJSON(value.kind),
        'runtime': V1RunKindToJSON(value.runtime),
        'hub': value.hub,
        'inputs': value.inputs,
        'outputs': value.outputs,
        'original': V1CloningToJSON(value.original),
        'pipeline': V1PipelineToJSON(value.pipeline),
        'status_conditions': value.status_conditions === undefined ? undefined : ((value.status_conditions as Array<any>).map(V1StatusConditionToJSON)),
        'settings': V1RunSettingsToJSON(value.settings),
        'role': value.role,
    };
}



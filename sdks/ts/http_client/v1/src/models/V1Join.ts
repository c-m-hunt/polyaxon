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
 * The version of the OpenAPI document: 1.9.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1JoinParam,
    V1JoinParamFromJSON,
    V1JoinParamFromJSONTyped,
    V1JoinParamToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Join
 */
export interface V1Join {
    /**
     * 
     * @type {string}
     * @memberof V1Join
     */
    ref?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Join
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Join
     */
    sort?: string;
    /**
     * 
     * @type {number}
     * @memberof V1Join
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Join
     */
    offset?: number;
    /**
     * 
     * @type {{ [key: string]: V1JoinParam; }}
     * @memberof V1Join
     */
    params?: { [key: string]: V1JoinParam; };
}

export function V1JoinFromJSON(json: any): V1Join {
    return V1JoinFromJSONTyped(json, false);
}

export function V1JoinFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Join {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ref': !exists(json, 'ref') ? undefined : json['ref'],
        'query': !exists(json, 'query') ? undefined : json['query'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'params': !exists(json, 'params') ? undefined : (mapValues(json['params'], V1JoinParamFromJSON)),
    };
}

export function V1JoinToJSON(value?: V1Join | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ref': value.ref,
        'query': value.query,
        'sort': value.sort,
        'limit': value.limit,
        'offset': value.offset,
        'params': value.params === undefined ? undefined : (mapValues(value.params, V1JoinParamToJSON)),
    };
}



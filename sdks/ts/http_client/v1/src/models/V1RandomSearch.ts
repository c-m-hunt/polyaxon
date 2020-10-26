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
/**
 * 
 * @export
 * @interface V1RandomSearch
 */
export interface V1RandomSearch {
    /**
     * 
     * @type {string}
     * @memberof V1RandomSearch
     */
    kind?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof V1RandomSearch
     */
    params?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof V1RandomSearch
     */
    num_runs?: number;
    /**
     * 
     * @type {number}
     * @memberof V1RandomSearch
     */
    seed?: number;
    /**
     * 
     * @type {number}
     * @memberof V1RandomSearch
     */
    concurrency?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1RandomSearch
     */
    early_stopping?: Array<object>;
}

export function V1RandomSearchFromJSON(json: any): V1RandomSearch {
    return V1RandomSearchFromJSONTyped(json, false);
}

export function V1RandomSearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RandomSearch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'num_runs': !exists(json, 'num_runs') ? undefined : json['num_runs'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'early_stopping': !exists(json, 'early_stopping') ? undefined : json['early_stopping'],
    };
}

export function V1RandomSearchToJSON(value?: V1RandomSearch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'params': value.params,
        'num_runs': value.num_runs,
        'seed': value.seed,
        'concurrency': value.concurrency,
        'early_stopping': value.early_stopping,
    };
}



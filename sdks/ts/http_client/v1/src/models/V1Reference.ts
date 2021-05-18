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
    V1DagRef,
    V1DagRefFromJSON,
    V1DagRefFromJSONTyped,
    V1DagRefToJSON,
    V1HubRef,
    V1HubRefFromJSON,
    V1HubRefFromJSONTyped,
    V1HubRefToJSON,
    V1PathRef,
    V1PathRefFromJSON,
    V1PathRefFromJSONTyped,
    V1PathRefToJSON,
    V1UrlRef,
    V1UrlRefFromJSON,
    V1UrlRefFromJSONTyped,
    V1UrlRefToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Reference
 */
export interface V1Reference {
    /**
     * 
     * @type {V1HubRef}
     * @memberof V1Reference
     */
    hubRef?: V1HubRef;
    /**
     * 
     * @type {V1DagRef}
     * @memberof V1Reference
     */
    dagRef?: V1DagRef;
    /**
     * 
     * @type {V1UrlRef}
     * @memberof V1Reference
     */
    urlRef?: V1UrlRef;
    /**
     * 
     * @type {V1PathRef}
     * @memberof V1Reference
     */
    pathRef?: V1PathRef;
}

export function V1ReferenceFromJSON(json: any): V1Reference {
    return V1ReferenceFromJSONTyped(json, false);
}

export function V1ReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Reference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hubRef': !exists(json, 'hubRef') ? undefined : V1HubRefFromJSON(json['hubRef']),
        'dagRef': !exists(json, 'dagRef') ? undefined : V1DagRefFromJSON(json['dagRef']),
        'urlRef': !exists(json, 'urlRef') ? undefined : V1UrlRefFromJSON(json['urlRef']),
        'pathRef': !exists(json, 'pathRef') ? undefined : V1PathRefFromJSON(json['pathRef']),
    };
}

export function V1ReferenceToJSON(value?: V1Reference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hubRef': V1HubRefToJSON(value.hubRef),
        'dagRef': V1DagRefToJSON(value.dagRef),
        'urlRef': V1UrlRefToJSON(value.urlRef),
        'pathRef': V1PathRefToJSON(value.pathRef),
    };
}



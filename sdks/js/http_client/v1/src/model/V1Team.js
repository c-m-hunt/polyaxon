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
 *
 */

import ApiClient from '../ApiClient';
import V1TeamSettings from './V1TeamSettings';

/**
 * The V1Team model module.
 * @module model/V1Team
 * @version 1.11.3
 */
class V1Team {
    /**
     * Constructs a new <code>V1Team</code>.
     * @alias module:model/V1Team
     */
    constructor() { 
        
        V1Team.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Team</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Team} obj Optional instance to populate.
     * @return {module:model/V1Team} The populated <code>V1Team</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Team();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], ['String']);
            }
            if (data.hasOwnProperty('component_hubs')) {
                obj['component_hubs'] = ApiClient.convertToType(data['component_hubs'], ['String']);
            }
            if (data.hasOwnProperty('model_registries')) {
                obj['model_registries'] = ApiClient.convertToType(data['model_registries'], ['String']);
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = V1TeamSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
V1Team.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1Team.prototype['name'] = undefined;

/**
 * @member {Array.<String>} projects
 */
V1Team.prototype['projects'] = undefined;

/**
 * @member {Array.<String>} component_hubs
 */
V1Team.prototype['component_hubs'] = undefined;

/**
 * @member {Array.<String>} model_registries
 */
V1Team.prototype['model_registries'] = undefined;

/**
 * @member {module:model/V1TeamSettings} settings
 */
V1Team.prototype['settings'] = undefined;

/**
 * @member {Date} created_at
 */
V1Team.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Team.prototype['updated_at'] = undefined;






export default V1Team;


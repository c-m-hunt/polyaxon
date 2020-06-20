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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.0.99-rc5
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1StatusCondition from './V1StatusCondition';
import V1Statuses from './V1Statuses';

/**
 * The V1Status model module.
 * @module model/V1Status
 * @version 1.0.99-rc5
 */
class V1Status {
    /**
     * Constructs a new <code>V1Status</code>.
     * @alias module:model/V1Status
     */
    constructor() { 
        
        V1Status.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Status} obj Optional instance to populate.
     * @return {module:model/V1Status} The populated <code>V1Status</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Status();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1Statuses.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('status_conditions')) {
                obj['status_conditions'] = ApiClient.convertToType(data['status_conditions'], [V1StatusCondition]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
V1Status.prototype['uuid'] = undefined;

/**
 * @member {module:model/V1Statuses} status
 */
V1Status.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/V1StatusCondition>} status_conditions
 */
V1Status.prototype['status_conditions'] = undefined;






export default V1Status;


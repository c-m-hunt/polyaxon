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
 * The version of the OpenAPI document: 1.0.99-rc5
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ListRunProfilesResponse,
    V1ListRunProfilesResponseFromJSON,
    V1ListRunProfilesResponseToJSON,
    V1RunProfile,
    V1RunProfileFromJSON,
    V1RunProfileToJSON,
} from '../models';

export interface CreateRunProfileRequest {
    owner: string;
    body: V1RunProfile;
}

export interface DeleteRunProfileRequest {
    owner: string;
    uuid: string;
}

export interface GetRunProfileRequest {
    owner: string;
    uuid: string;
}

export interface ListRunProfileNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListRunProfilesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface PatchRunProfileRequest {
    owner: string;
    runProfileUuid: string;
    body: V1RunProfile;
}

export interface UpdateRunProfileRequest {
    owner: string;
    runProfileUuid: string;
    body: V1RunProfile;
}

/**
 * 
 */
export class RunProfilesV1Api extends runtime.BaseAPI {

    /**
     * Create run profile
     */
    async createRunProfileRaw(requestParameters: CreateRunProfileRequest): Promise<runtime.ApiResponse<V1RunProfile>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createRunProfile.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createRunProfile.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/run_profiles`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1RunProfileToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RunProfileFromJSON(jsonValue));
    }

    /**
     * Create run profile
     */
    async createRunProfile(requestParameters: CreateRunProfileRequest): Promise<V1RunProfile> {
        const response = await this.createRunProfileRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete run profile
     */
    async deleteRunProfileRaw(requestParameters: DeleteRunProfileRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteRunProfile.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteRunProfile.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/run_profiles/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete run profile
     */
    async deleteRunProfile(requestParameters: DeleteRunProfileRequest): Promise<void> {
        await this.deleteRunProfileRaw(requestParameters);
    }

    /**
     * Get run profile
     */
    async getRunProfileRaw(requestParameters: GetRunProfileRequest): Promise<runtime.ApiResponse<V1RunProfile>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getRunProfile.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getRunProfile.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/run_profiles/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RunProfileFromJSON(jsonValue));
    }

    /**
     * Get run profile
     */
    async getRunProfile(requestParameters: GetRunProfileRequest): Promise<V1RunProfile> {
        const response = await this.getRunProfileRaw(requestParameters);
        return await response.value();
    }

    /**
     * List run profiles names
     */
    async listRunProfileNamesRaw(requestParameters: ListRunProfileNamesRequest): Promise<runtime.ApiResponse<V1ListRunProfilesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listRunProfileNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/run_profiles/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListRunProfilesResponseFromJSON(jsonValue));
    }

    /**
     * List run profiles names
     */
    async listRunProfileNames(requestParameters: ListRunProfileNamesRequest): Promise<V1ListRunProfilesResponse> {
        const response = await this.listRunProfileNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List run profiles
     */
    async listRunProfilesRaw(requestParameters: ListRunProfilesRequest): Promise<runtime.ApiResponse<V1ListRunProfilesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listRunProfiles.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/run_profiles`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListRunProfilesResponseFromJSON(jsonValue));
    }

    /**
     * List run profiles
     */
    async listRunProfiles(requestParameters: ListRunProfilesRequest): Promise<V1ListRunProfilesResponse> {
        const response = await this.listRunProfilesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch run profile
     */
    async patchRunProfileRaw(requestParameters: PatchRunProfileRequest): Promise<runtime.ApiResponse<V1RunProfile>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchRunProfile.');
        }

        if (requestParameters.runProfileUuid === null || requestParameters.runProfileUuid === undefined) {
            throw new runtime.RequiredError('runProfileUuid','Required parameter requestParameters.runProfileUuid was null or undefined when calling patchRunProfile.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchRunProfile.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/run_profiles/{run_profile.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"run_profile.uuid"}}`, encodeURIComponent(String(requestParameters.runProfileUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1RunProfileToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RunProfileFromJSON(jsonValue));
    }

    /**
     * Patch run profile
     */
    async patchRunProfile(requestParameters: PatchRunProfileRequest): Promise<V1RunProfile> {
        const response = await this.patchRunProfileRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update run profile
     */
    async updateRunProfileRaw(requestParameters: UpdateRunProfileRequest): Promise<runtime.ApiResponse<V1RunProfile>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateRunProfile.');
        }

        if (requestParameters.runProfileUuid === null || requestParameters.runProfileUuid === undefined) {
            throw new runtime.RequiredError('runProfileUuid','Required parameter requestParameters.runProfileUuid was null or undefined when calling updateRunProfile.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateRunProfile.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/run_profiles/{run_profile.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"run_profile.uuid"}}`, encodeURIComponent(String(requestParameters.runProfileUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1RunProfileToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RunProfileFromJSON(jsonValue));
    }

    /**
     * Update run profile
     */
    async updateRunProfile(requestParameters: UpdateRunProfileRequest): Promise<V1RunProfile> {
        const response = await this.updateRunProfileRaw(requestParameters);
        return await response.value();
    }

}

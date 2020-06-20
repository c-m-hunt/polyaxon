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
    V1ListOrganizationMembersResponse,
    V1ListOrganizationMembersResponseFromJSON,
    V1ListOrganizationMembersResponseToJSON,
    V1ListOrganizationsResponse,
    V1ListOrganizationsResponseFromJSON,
    V1ListOrganizationsResponseToJSON,
    V1Organization,
    V1OrganizationFromJSON,
    V1OrganizationToJSON,
    V1OrganizationMember,
    V1OrganizationMemberFromJSON,
    V1OrganizationMemberToJSON,
} from '../models';

export interface CreateOrganizationRequest {
    body: V1Organization;
}

export interface CreateOrganizationMemberRequest {
    owner: string;
    body: V1OrganizationMember;
}

export interface DeleteOrganizationRequest {
    owner: string;
}

export interface DeleteOrganizationMemberRequest {
    owner: string;
    user: string;
}

export interface GetOrganizationRequest {
    owner: string;
}

export interface GetOrganizationMemberRequest {
    owner: string;
    user: string;
}

export interface GetOrganizationSettingsRequest {
    owner: string;
    organizationUser?: string;
    organizationUserEmail?: string;
    organizationName?: string;
    organizationIsPublic?: boolean;
    organizationCreatedAt?: Date;
    organizationUpdatedAt?: Date;
    organizationRole?: string;
}

export interface ListOrganizationMembersRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface PatchOrganizationRequest {
    owner: string;
    body: V1Organization;
}

export interface PatchOrganizationMemberRequest {
    owner: string;
    memberUser: string;
    body: V1OrganizationMember;
}

export interface PatchOrganizationSettingsRequest {
    owner: string;
    body: V1Organization;
}

export interface UpdateOrganizationRequest {
    owner: string;
    body: V1Organization;
}

export interface UpdateOrganizationMemberRequest {
    owner: string;
    memberUser: string;
    body: V1OrganizationMember;
}

export interface UpdateOrganizationSettingsRequest {
    owner: string;
    body: V1Organization;
}

/**
 * 
 */
export class OrganizationsV1Api extends runtime.BaseAPI {

    /**
     * Create organization
     */
    async createOrganizationRaw(requestParameters: CreateOrganizationRequest): Promise<runtime.ApiResponse<V1Organization>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createOrganization.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1OrganizationToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationFromJSON(jsonValue));
    }

    /**
     * Create organization
     */
    async createOrganization(requestParameters: CreateOrganizationRequest): Promise<V1Organization> {
        const response = await this.createOrganizationRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create organization member
     */
    async createOrganizationMemberRaw(requestParameters: CreateOrganizationMemberRequest): Promise<runtime.ApiResponse<V1OrganizationMember>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createOrganizationMember.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createOrganizationMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/members`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1OrganizationMemberToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationMemberFromJSON(jsonValue));
    }

    /**
     * Create organization member
     */
    async createOrganizationMember(requestParameters: CreateOrganizationMemberRequest): Promise<V1OrganizationMember> {
        const response = await this.createOrganizationMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete organization
     */
    async deleteOrganizationRaw(requestParameters: DeleteOrganizationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteOrganization.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete organization
     */
    async deleteOrganization(requestParameters: DeleteOrganizationRequest): Promise<void> {
        await this.deleteOrganizationRaw(requestParameters);
    }

    /**
     * Delete organization member details
     */
    async deleteOrganizationMemberRaw(requestParameters: DeleteOrganizationMemberRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteOrganizationMember.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling deleteOrganizationMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/members/{user}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete organization member details
     */
    async deleteOrganizationMember(requestParameters: DeleteOrganizationMemberRequest): Promise<void> {
        await this.deleteOrganizationMemberRaw(requestParameters);
    }

    /**
     * Get organization
     */
    async getOrganizationRaw(requestParameters: GetOrganizationRequest): Promise<runtime.ApiResponse<V1Organization>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getOrganization.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationFromJSON(jsonValue));
    }

    /**
     * Get organization
     */
    async getOrganization(requestParameters: GetOrganizationRequest): Promise<V1Organization> {
        const response = await this.getOrganizationRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get organization member details
     */
    async getOrganizationMemberRaw(requestParameters: GetOrganizationMemberRequest): Promise<runtime.ApiResponse<V1OrganizationMember>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getOrganizationMember.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling getOrganizationMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/members/{user}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationMemberFromJSON(jsonValue));
    }

    /**
     * Get organization member details
     */
    async getOrganizationMember(requestParameters: GetOrganizationMemberRequest): Promise<V1OrganizationMember> {
        const response = await this.getOrganizationMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get organization settings
     */
    async getOrganizationSettingsRaw(requestParameters: GetOrganizationSettingsRequest): Promise<runtime.ApiResponse<V1Organization>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getOrganizationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.organizationUser !== undefined) {
            queryParameters['organization.user'] = requestParameters.organizationUser;
        }

        if (requestParameters.organizationUserEmail !== undefined) {
            queryParameters['organization.user_email'] = requestParameters.organizationUserEmail;
        }

        if (requestParameters.organizationName !== undefined) {
            queryParameters['organization.name'] = requestParameters.organizationName;
        }

        if (requestParameters.organizationIsPublic !== undefined) {
            queryParameters['organization.is_public'] = requestParameters.organizationIsPublic;
        }

        if (requestParameters.organizationCreatedAt !== undefined) {
            queryParameters['organization.created_at'] = (requestParameters.organizationCreatedAt as any).toISOString();
        }

        if (requestParameters.organizationUpdatedAt !== undefined) {
            queryParameters['organization.updated_at'] = (requestParameters.organizationUpdatedAt as any).toISOString();
        }

        if (requestParameters.organizationRole !== undefined) {
            queryParameters['organization.role'] = requestParameters.organizationRole;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/settings`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationFromJSON(jsonValue));
    }

    /**
     * Get organization settings
     */
    async getOrganizationSettings(requestParameters: GetOrganizationSettingsRequest): Promise<V1Organization> {
        const response = await this.getOrganizationSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get organization members
     */
    async listOrganizationMembersRaw(requestParameters: ListOrganizationMembersRequest): Promise<runtime.ApiResponse<V1ListOrganizationMembersResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listOrganizationMembers.');
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
            path: `/api/v1/orgs/{owner}/members`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListOrganizationMembersResponseFromJSON(jsonValue));
    }

    /**
     * Get organization members
     */
    async listOrganizationMembers(requestParameters: ListOrganizationMembersRequest): Promise<V1ListOrganizationMembersResponse> {
        const response = await this.listOrganizationMembersRaw(requestParameters);
        return await response.value();
    }

    /**
     * List organizations names
     */
    async listOrganizationNamesRaw(): Promise<runtime.ApiResponse<V1ListOrganizationsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/names`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListOrganizationsResponseFromJSON(jsonValue));
    }

    /**
     * List organizations names
     */
    async listOrganizationNames(): Promise<V1ListOrganizationsResponse> {
        const response = await this.listOrganizationNamesRaw();
        return await response.value();
    }

    /**
     * List organizations
     */
    async listOrganizationsRaw(): Promise<runtime.ApiResponse<V1ListOrganizationsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListOrganizationsResponseFromJSON(jsonValue));
    }

    /**
     * List organizations
     */
    async listOrganizations(): Promise<V1ListOrganizationsResponse> {
        const response = await this.listOrganizationsRaw();
        return await response.value();
    }

    /**
     * Patch organization
     */
    async patchOrganizationRaw(requestParameters: PatchOrganizationRequest): Promise<runtime.ApiResponse<V1Organization>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchOrganization.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchOrganization.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1OrganizationToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationFromJSON(jsonValue));
    }

    /**
     * Patch organization
     */
    async patchOrganization(requestParameters: PatchOrganizationRequest): Promise<V1Organization> {
        const response = await this.patchOrganizationRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch organization member
     */
    async patchOrganizationMemberRaw(requestParameters: PatchOrganizationMemberRequest): Promise<runtime.ApiResponse<V1OrganizationMember>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchOrganizationMember.');
        }

        if (requestParameters.memberUser === null || requestParameters.memberUser === undefined) {
            throw new runtime.RequiredError('memberUser','Required parameter requestParameters.memberUser was null or undefined when calling patchOrganizationMember.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchOrganizationMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/members/{member.user}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"member.user"}}`, encodeURIComponent(String(requestParameters.memberUser))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1OrganizationMemberToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationMemberFromJSON(jsonValue));
    }

    /**
     * Patch organization member
     */
    async patchOrganizationMember(requestParameters: PatchOrganizationMemberRequest): Promise<V1OrganizationMember> {
        const response = await this.patchOrganizationMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch oranization settings
     */
    async patchOrganizationSettingsRaw(requestParameters: PatchOrganizationSettingsRequest): Promise<runtime.ApiResponse<V1Organization>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchOrganizationSettings.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchOrganizationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/settings`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1OrganizationToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationFromJSON(jsonValue));
    }

    /**
     * Patch oranization settings
     */
    async patchOrganizationSettings(requestParameters: PatchOrganizationSettingsRequest): Promise<V1Organization> {
        const response = await this.patchOrganizationSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update organization
     */
    async updateOrganizationRaw(requestParameters: UpdateOrganizationRequest): Promise<runtime.ApiResponse<V1Organization>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateOrganization.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateOrganization.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1OrganizationToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationFromJSON(jsonValue));
    }

    /**
     * Update organization
     */
    async updateOrganization(requestParameters: UpdateOrganizationRequest): Promise<V1Organization> {
        const response = await this.updateOrganizationRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update organization member
     */
    async updateOrganizationMemberRaw(requestParameters: UpdateOrganizationMemberRequest): Promise<runtime.ApiResponse<V1OrganizationMember>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateOrganizationMember.');
        }

        if (requestParameters.memberUser === null || requestParameters.memberUser === undefined) {
            throw new runtime.RequiredError('memberUser','Required parameter requestParameters.memberUser was null or undefined when calling updateOrganizationMember.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateOrganizationMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/members/{member.user}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"member.user"}}`, encodeURIComponent(String(requestParameters.memberUser))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1OrganizationMemberToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationMemberFromJSON(jsonValue));
    }

    /**
     * Update organization member
     */
    async updateOrganizationMember(requestParameters: UpdateOrganizationMemberRequest): Promise<V1OrganizationMember> {
        const response = await this.updateOrganizationMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update organization settings
     */
    async updateOrganizationSettingsRaw(requestParameters: UpdateOrganizationSettingsRequest): Promise<runtime.ApiResponse<V1Organization>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateOrganizationSettings.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateOrganizationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/settings`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1OrganizationToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1OrganizationFromJSON(jsonValue));
    }

    /**
     * Update organization settings
     */
    async updateOrganizationSettings(requestParameters: UpdateOrganizationSettingsRequest): Promise<V1Organization> {
        const response = await this.updateOrganizationSettingsRaw(requestParameters);
        return await response.value();
    }

}

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

/*
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


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ComponentHub;
import org.openapitools.client.model.V1ListComponentHubsResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ComponentHubV1Api
 */
@Ignore
public class ComponentHubV1ApiTest {

    private final ComponentHubV1Api api = new ComponentHubV1Api();

    
    /**
     * Create hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createComponentHubTest() throws ApiException {
        String owner = null;
        V1ComponentHub body = null;
        V1ComponentHub response = api.createComponentHub(owner, body);

        // TODO: test validations
    }
    
    /**
     * Delete hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteComponentHubTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteComponentHub(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * Get hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getComponentHubTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1ComponentHub response = api.getComponentHub(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * List hub component names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listComponentHubNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListComponentHubsResponse response = api.listComponentHubNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List hub components
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listComponentHubsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListComponentHubsResponse response = api.listComponentHubs(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchComponentHubTest() throws ApiException {
        String owner = null;
        String componentUuid = null;
        V1ComponentHub body = null;
        V1ComponentHub response = api.patchComponentHub(owner, componentUuid, body);

        // TODO: test validations
    }
    
    /**
     * Update hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateComponentHubTest() throws ApiException {
        String owner = null;
        String componentUuid = null;
        V1ComponentHub body = null;
        V1ComponentHub response = api.updateComponentHub(owner, componentUuid, body);

        // TODO: test validations
    }
    
}

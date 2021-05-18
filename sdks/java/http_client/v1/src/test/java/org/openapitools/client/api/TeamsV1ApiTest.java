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

/*
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


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ListTeamMembersResponse;
import org.openapitools.client.model.V1ListTeamsResponse;
import org.openapitools.client.model.V1Team;
import org.openapitools.client.model.V1TeamMember;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TeamsV1Api
 */
@Ignore
public class TeamsV1ApiTest {

    private final TeamsV1Api api = new TeamsV1Api();

    
    /**
     * Create team
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createTeamTest() throws ApiException {
        String owner = null;
        V1Team body = null;
        V1Team response = api.createTeam(owner, body);

        // TODO: test validations
    }
    
    /**
     * Create team member
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        V1TeamMember body = null;
        V1TeamMember response = api.createTeamMember(owner, team, body);

        // TODO: test validations
    }
    
    /**
     * Delete team
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteTeamTest() throws ApiException {
        String owner = null;
        String name = null;
        api.deleteTeam(owner, name);

        // TODO: test validations
    }
    
    /**
     * Delete team member details
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String user = null;
        api.deleteTeamMember(owner, team, user);

        // TODO: test validations
    }
    
    /**
     * Get team
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getTeamTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Team response = api.getTeam(owner, name);

        // TODO: test validations
    }
    
    /**
     * Get team member details
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String user = null;
        V1TeamMember response = api.getTeamMember(owner, team, user);

        // TODO: test validations
    }
    
    /**
     * Get team members
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listTeamMembersTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        String mode = null;
        V1ListTeamMembersResponse response = api.listTeamMembers(owner, name, offset, limit, sort, query, mode);

        // TODO: test validations
    }
    
    /**
     * List teams names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listTeamNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListTeamsResponse response = api.listTeamNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List teams
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listTeamsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListTeamsResponse response = api.listTeams(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch team
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchTeamTest() throws ApiException {
        String owner = null;
        String teamName = null;
        V1Team body = null;
        V1Team response = api.patchTeam(owner, teamName, body);

        // TODO: test validations
    }
    
    /**
     * Patch team member
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String memberUser = null;
        V1TeamMember body = null;
        V1TeamMember response = api.patchTeamMember(owner, team, memberUser, body);

        // TODO: test validations
    }
    
    /**
     * Update team
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateTeamTest() throws ApiException {
        String owner = null;
        String teamName = null;
        V1Team body = null;
        V1Team response = api.updateTeam(owner, teamName, body);

        // TODO: test validations
    }
    
    /**
     * Update team member
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String memberUser = null;
        V1TeamMember body = null;
        V1TeamMember response = api.updateTeamMember(owner, team, memberUser, body);

        // TODO: test validations
    }
    
}

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


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1StageCondition;
import org.openapitools.client.model.V1Stages;
import org.threeten.bp.OffsetDateTime;

/**
 * V1ModelVersion
 */

public class V1ModelVersion {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags = null;

  public static final String SERIALIZED_NAME_LIVE_STATE = "live_state";
  @SerializedName(SERIALIZED_NAME_LIVE_STATE)
  private Integer liveState;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_STAGE = "stage";
  @SerializedName(SERIALIZED_NAME_STAGE)
  private V1Stages stage = V1Stages.TESTING;

  public static final String SERIALIZED_NAME_STAGE_CONDITIONS = "stage_conditions";
  @SerializedName(SERIALIZED_NAME_STAGE_CONDITIONS)
  private List<V1StageCondition> stageConditions = null;

  public static final String SERIALIZED_NAME_RUN = "run";
  @SerializedName(SERIALIZED_NAME_RUN)
  private String run;

  public static final String SERIALIZED_NAME_RUN_INFO = "run_info";
  @SerializedName(SERIALIZED_NAME_RUN_INFO)
  private Object runInfo;

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private String metadata;

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private String role;


  public V1ModelVersion uuid(String uuid) {
    
    this.uuid = uuid;
    return this;
  }

   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUuid() {
    return uuid;
  }


  public void setUuid(String uuid) {
    this.uuid = uuid;
  }


  public V1ModelVersion name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public V1ModelVersion description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public V1ModelVersion tags(List<String> tags) {
    
    this.tags = tags;
    return this;
  }

  public V1ModelVersion addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<String>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getTags() {
    return tags;
  }


  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  public V1ModelVersion liveState(Integer liveState) {
    
    this.liveState = liveState;
    return this;
  }

   /**
   * Get liveState
   * @return liveState
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getLiveState() {
    return liveState;
  }


  public void setLiveState(Integer liveState) {
    this.liveState = liveState;
  }


  public V1ModelVersion createdAt(OffsetDateTime createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public V1ModelVersion updatedAt(OffsetDateTime updatedAt) {
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  public V1ModelVersion stage(V1Stages stage) {
    
    this.stage = stage;
    return this;
  }

   /**
   * Get stage
   * @return stage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Stages getStage() {
    return stage;
  }


  public void setStage(V1Stages stage) {
    this.stage = stage;
  }


  public V1ModelVersion stageConditions(List<V1StageCondition> stageConditions) {
    
    this.stageConditions = stageConditions;
    return this;
  }

  public V1ModelVersion addStageConditionsItem(V1StageCondition stageConditionsItem) {
    if (this.stageConditions == null) {
      this.stageConditions = new ArrayList<V1StageCondition>();
    }
    this.stageConditions.add(stageConditionsItem);
    return this;
  }

   /**
   * Get stageConditions
   * @return stageConditions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1StageCondition> getStageConditions() {
    return stageConditions;
  }


  public void setStageConditions(List<V1StageCondition> stageConditions) {
    this.stageConditions = stageConditions;
  }


  public V1ModelVersion run(String run) {
    
    this.run = run;
    return this;
  }

   /**
   * Get run
   * @return run
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getRun() {
    return run;
  }


  public void setRun(String run) {
    this.run = run;
  }


  public V1ModelVersion runInfo(Object runInfo) {
    
    this.runInfo = runInfo;
    return this;
  }

   /**
   * Get runInfo
   * @return runInfo
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getRunInfo() {
    return runInfo;
  }


  public void setRunInfo(Object runInfo) {
    this.runInfo = runInfo;
  }


  public V1ModelVersion metadata(String metadata) {
    
    this.metadata = metadata;
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getMetadata() {
    return metadata;
  }


  public void setMetadata(String metadata) {
    this.metadata = metadata;
  }


  public V1ModelVersion role(String role) {
    
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getRole() {
    return role;
  }


  public void setRole(String role) {
    this.role = role;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ModelVersion v1ModelVersion = (V1ModelVersion) o;
    return Objects.equals(this.uuid, v1ModelVersion.uuid) &&
        Objects.equals(this.name, v1ModelVersion.name) &&
        Objects.equals(this.description, v1ModelVersion.description) &&
        Objects.equals(this.tags, v1ModelVersion.tags) &&
        Objects.equals(this.liveState, v1ModelVersion.liveState) &&
        Objects.equals(this.createdAt, v1ModelVersion.createdAt) &&
        Objects.equals(this.updatedAt, v1ModelVersion.updatedAt) &&
        Objects.equals(this.stage, v1ModelVersion.stage) &&
        Objects.equals(this.stageConditions, v1ModelVersion.stageConditions) &&
        Objects.equals(this.run, v1ModelVersion.run) &&
        Objects.equals(this.runInfo, v1ModelVersion.runInfo) &&
        Objects.equals(this.metadata, v1ModelVersion.metadata) &&
        Objects.equals(this.role, v1ModelVersion.role);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, name, description, tags, liveState, createdAt, updatedAt, stage, stageConditions, run, runInfo, metadata, role);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ModelVersion {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    liveState: ").append(toIndentedString(liveState)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    stage: ").append(toIndentedString(stage)).append("\n");
    sb.append("    stageConditions: ").append(toIndentedString(stageConditions)).append("\n");
    sb.append("    run: ").append(toIndentedString(run)).append("\n");
    sb.append("    runInfo: ").append(toIndentedString(runInfo)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}


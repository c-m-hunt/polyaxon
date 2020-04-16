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
 * The version of the OpenAPI document: 1.0.79
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
import org.openapitools.client.model.V1RunSettingsCatalog;

/**
 * V1RunSettings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-04-15T17:06:22.074+02:00[Europe/Berlin]")
public class V1RunSettings {
  public static final String SERIALIZED_NAME_NAMESPACE = "namespace";
  @SerializedName(SERIALIZED_NAME_NAMESPACE)
  private String namespace;

  public static final String SERIALIZED_NAME_AGENT = "agent";
  @SerializedName(SERIALIZED_NAME_AGENT)
  private V1RunSettingsCatalog agent;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private V1RunSettingsCatalog queue;

  public static final String SERIALIZED_NAME_ARTIFACTS_STORE = "artifacts_store";
  @SerializedName(SERIALIZED_NAME_ARTIFACTS_STORE)
  private V1RunSettingsCatalog artifactsStore;

  public static final String SERIALIZED_NAME_CONNECTIONS = "connections";
  @SerializedName(SERIALIZED_NAME_CONNECTIONS)
  private List<V1RunSettingsCatalog> connections = null;


  public V1RunSettings namespace(String namespace) {
    
    this.namespace = namespace;
    return this;
  }

   /**
   * Get namespace
   * @return namespace
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNamespace() {
    return namespace;
  }


  public void setNamespace(String namespace) {
    this.namespace = namespace;
  }


  public V1RunSettings agent(V1RunSettingsCatalog agent) {
    
    this.agent = agent;
    return this;
  }

   /**
   * Get agent
   * @return agent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunSettingsCatalog getAgent() {
    return agent;
  }


  public void setAgent(V1RunSettingsCatalog agent) {
    this.agent = agent;
  }


  public V1RunSettings queue(V1RunSettingsCatalog queue) {
    
    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunSettingsCatalog getQueue() {
    return queue;
  }


  public void setQueue(V1RunSettingsCatalog queue) {
    this.queue = queue;
  }


  public V1RunSettings artifactsStore(V1RunSettingsCatalog artifactsStore) {
    
    this.artifactsStore = artifactsStore;
    return this;
  }

   /**
   * Get artifactsStore
   * @return artifactsStore
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunSettingsCatalog getArtifactsStore() {
    return artifactsStore;
  }


  public void setArtifactsStore(V1RunSettingsCatalog artifactsStore) {
    this.artifactsStore = artifactsStore;
  }


  public V1RunSettings connections(List<V1RunSettingsCatalog> connections) {
    
    this.connections = connections;
    return this;
  }

  public V1RunSettings addConnectionsItem(V1RunSettingsCatalog connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<V1RunSettingsCatalog>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1RunSettingsCatalog> getConnections() {
    return connections;
  }


  public void setConnections(List<V1RunSettingsCatalog> connections) {
    this.connections = connections;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunSettings v1RunSettings = (V1RunSettings) o;
    return Objects.equals(this.namespace, v1RunSettings.namespace) &&
        Objects.equals(this.agent, v1RunSettings.agent) &&
        Objects.equals(this.queue, v1RunSettings.queue) &&
        Objects.equals(this.artifactsStore, v1RunSettings.artifactsStore) &&
        Objects.equals(this.connections, v1RunSettings.connections);
  }

  @Override
  public int hashCode() {
    return Objects.hash(namespace, agent, queue, artifactsStore, connections);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunSettings {\n");
    sb.append("    namespace: ").append(toIndentedString(namespace)).append("\n");
    sb.append("    agent: ").append(toIndentedString(agent)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    artifactsStore: ").append(toIndentedString(artifactsStore)).append("\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
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

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
 * The version of the OpenAPI document: 1.11.3
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

/**
 * V1AnalyticsSpec
 */

public class V1AnalyticsSpec {
  public static final String SERIALIZED_NAME_VIEW = "view";
  @SerializedName(SERIALIZED_NAME_VIEW)
  private String view;

  public static final String SERIALIZED_NAME_TRUNC = "trunc";
  @SerializedName(SERIALIZED_NAME_TRUNC)
  private String trunc;

  public static final String SERIALIZED_NAME_GROUPBY = "groupby";
  @SerializedName(SERIALIZED_NAME_GROUPBY)
  private String groupby;

  public static final String SERIALIZED_NAME_FREQUENCY = "frequency";
  @SerializedName(SERIALIZED_NAME_FREQUENCY)
  private String frequency;


  public V1AnalyticsSpec view(String view) {
    
    this.view = view;
    return this;
  }

   /**
   * Get view
   * @return view
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getView() {
    return view;
  }


  public void setView(String view) {
    this.view = view;
  }


  public V1AnalyticsSpec trunc(String trunc) {
    
    this.trunc = trunc;
    return this;
  }

   /**
   * Get trunc
   * @return trunc
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getTrunc() {
    return trunc;
  }


  public void setTrunc(String trunc) {
    this.trunc = trunc;
  }


  public V1AnalyticsSpec groupby(String groupby) {
    
    this.groupby = groupby;
    return this;
  }

   /**
   * Get groupby
   * @return groupby
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getGroupby() {
    return groupby;
  }


  public void setGroupby(String groupby) {
    this.groupby = groupby;
  }


  public V1AnalyticsSpec frequency(String frequency) {
    
    this.frequency = frequency;
    return this;
  }

   /**
   * Get frequency
   * @return frequency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getFrequency() {
    return frequency;
  }


  public void setFrequency(String frequency) {
    this.frequency = frequency;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1AnalyticsSpec v1AnalyticsSpec = (V1AnalyticsSpec) o;
    return Objects.equals(this.view, v1AnalyticsSpec.view) &&
        Objects.equals(this.trunc, v1AnalyticsSpec.trunc) &&
        Objects.equals(this.groupby, v1AnalyticsSpec.groupby) &&
        Objects.equals(this.frequency, v1AnalyticsSpec.frequency);
  }

  @Override
  public int hashCode() {
    return Objects.hash(view, trunc, groupby, frequency);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1AnalyticsSpec {\n");
    sb.append("    view: ").append(toIndentedString(view)).append("\n");
    sb.append("    trunc: ").append(toIndentedString(trunc)).append("\n");
    sb.append("    groupby: ").append(toIndentedString(groupby)).append("\n");
    sb.append("    frequency: ").append(toIndentedString(frequency)).append("\n");
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


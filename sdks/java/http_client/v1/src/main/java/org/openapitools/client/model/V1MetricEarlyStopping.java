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
import org.openapitools.client.model.V1Optimization;

/**
 * MetricEarlyStoppingSchema specification Early stopping based on metric config.
 */
@ApiModel(description = "MetricEarlyStoppingSchema specification Early stopping based on metric config.")

public class V1MetricEarlyStopping {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "metric_early_stopping";

  public static final String SERIALIZED_NAME_METRIC = "metric";
  @SerializedName(SERIALIZED_NAME_METRIC)
  private String metric;

  public static final String SERIALIZED_NAME_VALUE = "value";
  @SerializedName(SERIALIZED_NAME_VALUE)
  private String value;

  public static final String SERIALIZED_NAME_OPTIMIZATION = "optimization";
  @SerializedName(SERIALIZED_NAME_OPTIMIZATION)
  private V1Optimization optimization = V1Optimization.MAXIMIZE;

  public static final String SERIALIZED_NAME_POLICY = "policy";
  @SerializedName(SERIALIZED_NAME_POLICY)
  private Object policy;


  public V1MetricEarlyStopping kind(String kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1MetricEarlyStopping metric(String metric) {
    
    this.metric = metric;
    return this;
  }

   /**
   * Metric name to use for early stopping.
   * @return metric
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Metric name to use for early stopping.")

  public String getMetric() {
    return metric;
  }


  public void setMetric(String metric) {
    this.metric = metric;
  }


  public V1MetricEarlyStopping value(String value) {
    
    this.value = value;
    return this;
  }

   /**
   * Metric value to use for the condition.
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Metric value to use for the condition.")

  public String getValue() {
    return value;
  }


  public void setValue(String value) {
    this.value = value;
  }


  public V1MetricEarlyStopping optimization(V1Optimization optimization) {
    
    this.optimization = optimization;
    return this;
  }

   /**
   * Get optimization
   * @return optimization
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Optimization getOptimization() {
    return optimization;
  }


  public void setOptimization(V1Optimization optimization) {
    this.optimization = optimization;
  }


  public V1MetricEarlyStopping policy(Object policy) {
    
    this.policy = policy;
    return this;
  }

   /**
   * Get policy
   * @return policy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getPolicy() {
    return policy;
  }


  public void setPolicy(Object policy) {
    this.policy = policy;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1MetricEarlyStopping v1MetricEarlyStopping = (V1MetricEarlyStopping) o;
    return Objects.equals(this.kind, v1MetricEarlyStopping.kind) &&
        Objects.equals(this.metric, v1MetricEarlyStopping.metric) &&
        Objects.equals(this.value, v1MetricEarlyStopping.value) &&
        Objects.equals(this.optimization, v1MetricEarlyStopping.optimization) &&
        Objects.equals(this.policy, v1MetricEarlyStopping.policy);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, metric, value, optimization, policy);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1MetricEarlyStopping {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    optimization: ").append(toIndentedString(optimization)).append("\n");
    sb.append("    policy: ").append(toIndentedString(policy)).append("\n");
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


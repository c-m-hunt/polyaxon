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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.V1Event();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Event', function() {
    it('should create an instance of V1Event', function() {
      // uncomment below and update the code to test V1Event
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be.a(PolyaxonSdk.V1Event);
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property step (base name: "step")', function() {
      // uncomment below and update the code to test the property step
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property metric (base name: "metric")', function() {
      // uncomment below and update the code to test the property metric
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property histogram (base name: "histogram")', function() {
      // uncomment below and update the code to test the property histogram
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property audio (base name: "audio")', function() {
      // uncomment below and update the code to test the property audio
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property video (base name: "video")', function() {
      // uncomment below and update the code to test the property video
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property html (base name: "html")', function() {
      // uncomment below and update the code to test the property html
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property chart (base name: "chart")', function() {
      // uncomment below and update the code to test the property chart
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property artifact (base name: "artifact")', function() {
      // uncomment below and update the code to test the property artifact
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property dataframe (base name: "dataframe")', function() {
      // uncomment below and update the code to test the property dataframe
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

    it('should have the property curve (base name: "curve")', function() {
      // uncomment below and update the code to test the property curve
      //var instane = new PolyaxonSdk.V1Event();
      //expect(instance).to.be();
    });

  });

}));

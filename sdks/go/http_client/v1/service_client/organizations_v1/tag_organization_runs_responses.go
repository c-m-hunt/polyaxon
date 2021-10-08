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

// Code generated by go-swagger; DO NOT EDIT.

package organizations_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// TagOrganizationRunsReader is a Reader for the TagOrganizationRuns structure.
type TagOrganizationRunsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *TagOrganizationRunsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewTagOrganizationRunsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewTagOrganizationRunsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewTagOrganizationRunsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewTagOrganizationRunsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewTagOrganizationRunsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewTagOrganizationRunsOK creates a TagOrganizationRunsOK with default headers values
func NewTagOrganizationRunsOK() *TagOrganizationRunsOK {
	return &TagOrganizationRunsOK{}
}

/* TagOrganizationRunsOK describes a response with status code 200, with default header values.

A successful response.
*/
type TagOrganizationRunsOK struct {
}

func (o *TagOrganizationRunsOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/tag][%d] tagOrganizationRunsOK ", 200)
}

func (o *TagOrganizationRunsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewTagOrganizationRunsNoContent creates a TagOrganizationRunsNoContent with default headers values
func NewTagOrganizationRunsNoContent() *TagOrganizationRunsNoContent {
	return &TagOrganizationRunsNoContent{}
}

/* TagOrganizationRunsNoContent describes a response with status code 204, with default header values.

No content.
*/
type TagOrganizationRunsNoContent struct {
	Payload interface{}
}

func (o *TagOrganizationRunsNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/tag][%d] tagOrganizationRunsNoContent  %+v", 204, o.Payload)
}
func (o *TagOrganizationRunsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *TagOrganizationRunsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTagOrganizationRunsForbidden creates a TagOrganizationRunsForbidden with default headers values
func NewTagOrganizationRunsForbidden() *TagOrganizationRunsForbidden {
	return &TagOrganizationRunsForbidden{}
}

/* TagOrganizationRunsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type TagOrganizationRunsForbidden struct {
	Payload interface{}
}

func (o *TagOrganizationRunsForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/tag][%d] tagOrganizationRunsForbidden  %+v", 403, o.Payload)
}
func (o *TagOrganizationRunsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *TagOrganizationRunsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTagOrganizationRunsNotFound creates a TagOrganizationRunsNotFound with default headers values
func NewTagOrganizationRunsNotFound() *TagOrganizationRunsNotFound {
	return &TagOrganizationRunsNotFound{}
}

/* TagOrganizationRunsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type TagOrganizationRunsNotFound struct {
	Payload interface{}
}

func (o *TagOrganizationRunsNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/tag][%d] tagOrganizationRunsNotFound  %+v", 404, o.Payload)
}
func (o *TagOrganizationRunsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *TagOrganizationRunsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTagOrganizationRunsDefault creates a TagOrganizationRunsDefault with default headers values
func NewTagOrganizationRunsDefault(code int) *TagOrganizationRunsDefault {
	return &TagOrganizationRunsDefault{
		_statusCode: code,
	}
}

/* TagOrganizationRunsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type TagOrganizationRunsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the tag organization runs default response
func (o *TagOrganizationRunsDefault) Code() int {
	return o._statusCode
}

func (o *TagOrganizationRunsDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/tag][%d] TagOrganizationRuns default  %+v", o._statusCode, o.Payload)
}
func (o *TagOrganizationRunsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *TagOrganizationRunsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

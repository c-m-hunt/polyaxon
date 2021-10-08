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

// BookmarkOrganizationRunsReader is a Reader for the BookmarkOrganizationRuns structure.
type BookmarkOrganizationRunsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *BookmarkOrganizationRunsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewBookmarkOrganizationRunsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewBookmarkOrganizationRunsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewBookmarkOrganizationRunsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewBookmarkOrganizationRunsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewBookmarkOrganizationRunsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewBookmarkOrganizationRunsOK creates a BookmarkOrganizationRunsOK with default headers values
func NewBookmarkOrganizationRunsOK() *BookmarkOrganizationRunsOK {
	return &BookmarkOrganizationRunsOK{}
}

/* BookmarkOrganizationRunsOK describes a response with status code 200, with default header values.

A successful response.
*/
type BookmarkOrganizationRunsOK struct {
}

func (o *BookmarkOrganizationRunsOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/bookmark][%d] bookmarkOrganizationRunsOK ", 200)
}

func (o *BookmarkOrganizationRunsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewBookmarkOrganizationRunsNoContent creates a BookmarkOrganizationRunsNoContent with default headers values
func NewBookmarkOrganizationRunsNoContent() *BookmarkOrganizationRunsNoContent {
	return &BookmarkOrganizationRunsNoContent{}
}

/* BookmarkOrganizationRunsNoContent describes a response with status code 204, with default header values.

No content.
*/
type BookmarkOrganizationRunsNoContent struct {
	Payload interface{}
}

func (o *BookmarkOrganizationRunsNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/bookmark][%d] bookmarkOrganizationRunsNoContent  %+v", 204, o.Payload)
}
func (o *BookmarkOrganizationRunsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *BookmarkOrganizationRunsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBookmarkOrganizationRunsForbidden creates a BookmarkOrganizationRunsForbidden with default headers values
func NewBookmarkOrganizationRunsForbidden() *BookmarkOrganizationRunsForbidden {
	return &BookmarkOrganizationRunsForbidden{}
}

/* BookmarkOrganizationRunsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type BookmarkOrganizationRunsForbidden struct {
	Payload interface{}
}

func (o *BookmarkOrganizationRunsForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/bookmark][%d] bookmarkOrganizationRunsForbidden  %+v", 403, o.Payload)
}
func (o *BookmarkOrganizationRunsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *BookmarkOrganizationRunsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBookmarkOrganizationRunsNotFound creates a BookmarkOrganizationRunsNotFound with default headers values
func NewBookmarkOrganizationRunsNotFound() *BookmarkOrganizationRunsNotFound {
	return &BookmarkOrganizationRunsNotFound{}
}

/* BookmarkOrganizationRunsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type BookmarkOrganizationRunsNotFound struct {
	Payload interface{}
}

func (o *BookmarkOrganizationRunsNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/bookmark][%d] bookmarkOrganizationRunsNotFound  %+v", 404, o.Payload)
}
func (o *BookmarkOrganizationRunsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *BookmarkOrganizationRunsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewBookmarkOrganizationRunsDefault creates a BookmarkOrganizationRunsDefault with default headers values
func NewBookmarkOrganizationRunsDefault(code int) *BookmarkOrganizationRunsDefault {
	return &BookmarkOrganizationRunsDefault{
		_statusCode: code,
	}
}

/* BookmarkOrganizationRunsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type BookmarkOrganizationRunsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the bookmark organization runs default response
func (o *BookmarkOrganizationRunsDefault) Code() int {
	return o._statusCode
}

func (o *BookmarkOrganizationRunsDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/bookmark][%d] BookmarkOrganizationRuns default  %+v", o._statusCode, o.Payload)
}
func (o *BookmarkOrganizationRunsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *BookmarkOrganizationRunsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

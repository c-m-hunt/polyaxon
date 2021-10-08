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

// TransferOrganizationRunsReader is a Reader for the TransferOrganizationRuns structure.
type TransferOrganizationRunsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *TransferOrganizationRunsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewTransferOrganizationRunsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewTransferOrganizationRunsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewTransferOrganizationRunsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewTransferOrganizationRunsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewTransferOrganizationRunsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewTransferOrganizationRunsOK creates a TransferOrganizationRunsOK with default headers values
func NewTransferOrganizationRunsOK() *TransferOrganizationRunsOK {
	return &TransferOrganizationRunsOK{}
}

/* TransferOrganizationRunsOK describes a response with status code 200, with default header values.

A successful response.
*/
type TransferOrganizationRunsOK struct {
}

func (o *TransferOrganizationRunsOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/transfer][%d] transferOrganizationRunsOK ", 200)
}

func (o *TransferOrganizationRunsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewTransferOrganizationRunsNoContent creates a TransferOrganizationRunsNoContent with default headers values
func NewTransferOrganizationRunsNoContent() *TransferOrganizationRunsNoContent {
	return &TransferOrganizationRunsNoContent{}
}

/* TransferOrganizationRunsNoContent describes a response with status code 204, with default header values.

No content.
*/
type TransferOrganizationRunsNoContent struct {
	Payload interface{}
}

func (o *TransferOrganizationRunsNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/transfer][%d] transferOrganizationRunsNoContent  %+v", 204, o.Payload)
}
func (o *TransferOrganizationRunsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferOrganizationRunsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferOrganizationRunsForbidden creates a TransferOrganizationRunsForbidden with default headers values
func NewTransferOrganizationRunsForbidden() *TransferOrganizationRunsForbidden {
	return &TransferOrganizationRunsForbidden{}
}

/* TransferOrganizationRunsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type TransferOrganizationRunsForbidden struct {
	Payload interface{}
}

func (o *TransferOrganizationRunsForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/transfer][%d] transferOrganizationRunsForbidden  %+v", 403, o.Payload)
}
func (o *TransferOrganizationRunsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferOrganizationRunsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferOrganizationRunsNotFound creates a TransferOrganizationRunsNotFound with default headers values
func NewTransferOrganizationRunsNotFound() *TransferOrganizationRunsNotFound {
	return &TransferOrganizationRunsNotFound{}
}

/* TransferOrganizationRunsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type TransferOrganizationRunsNotFound struct {
	Payload interface{}
}

func (o *TransferOrganizationRunsNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/transfer][%d] transferOrganizationRunsNotFound  %+v", 404, o.Payload)
}
func (o *TransferOrganizationRunsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferOrganizationRunsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferOrganizationRunsDefault creates a TransferOrganizationRunsDefault with default headers values
func NewTransferOrganizationRunsDefault(code int) *TransferOrganizationRunsDefault {
	return &TransferOrganizationRunsDefault{
		_statusCode: code,
	}
}

/* TransferOrganizationRunsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type TransferOrganizationRunsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the transfer organization runs default response
func (o *TransferOrganizationRunsDefault) Code() int {
	return o._statusCode
}

func (o *TransferOrganizationRunsDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/runs/transfer][%d] TransferOrganizationRuns default  %+v", o._statusCode, o.Payload)
}
func (o *TransferOrganizationRunsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *TransferOrganizationRunsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

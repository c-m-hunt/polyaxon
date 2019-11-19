// Copyright 2019 Polyaxon, Inc.
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

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	service_model "github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// UpdateAgentReader is a Reader for the UpdateAgent structure.
type UpdateAgentReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateAgentReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateAgentOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateAgentNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateAgentForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateAgentNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewUpdateAgentOK creates a UpdateAgentOK with default headers values
func NewUpdateAgentOK() *UpdateAgentOK {
	return &UpdateAgentOK{}
}

/*UpdateAgentOK handles this case with default header values.

A successful response.
*/
type UpdateAgentOK struct {
	Payload *service_model.V1Agent
}

func (o *UpdateAgentOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/agents/{agent.uuid}][%d] updateAgentOK  %+v", 200, o.Payload)
}

func (o *UpdateAgentOK) GetPayload() *service_model.V1Agent {
	return o.Payload
}

func (o *UpdateAgentOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Agent)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentNoContent creates a UpdateAgentNoContent with default headers values
func NewUpdateAgentNoContent() *UpdateAgentNoContent {
	return &UpdateAgentNoContent{}
}

/*UpdateAgentNoContent handles this case with default header values.

No content.
*/
type UpdateAgentNoContent struct {
	Payload interface{}
}

func (o *UpdateAgentNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/agents/{agent.uuid}][%d] updateAgentNoContent  %+v", 204, o.Payload)
}

func (o *UpdateAgentNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentForbidden creates a UpdateAgentForbidden with default headers values
func NewUpdateAgentForbidden() *UpdateAgentForbidden {
	return &UpdateAgentForbidden{}
}

/*UpdateAgentForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type UpdateAgentForbidden struct {
	Payload interface{}
}

func (o *UpdateAgentForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/agents/{agent.uuid}][%d] updateAgentForbidden  %+v", 403, o.Payload)
}

func (o *UpdateAgentForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateAgentNotFound creates a UpdateAgentNotFound with default headers values
func NewUpdateAgentNotFound() *UpdateAgentNotFound {
	return &UpdateAgentNotFound{}
}

/*UpdateAgentNotFound handles this case with default header values.

Resource does not exist.
*/
type UpdateAgentNotFound struct {
	Payload interface{}
}

func (o *UpdateAgentNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/agents/{agent.uuid}][%d] updateAgentNotFound  %+v", 404, o.Payload)
}

func (o *UpdateAgentNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateAgentNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
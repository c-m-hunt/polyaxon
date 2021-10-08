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

package queues_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// NewListQueueNamesParams creates a new ListQueueNamesParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewListQueueNamesParams() *ListQueueNamesParams {
	return &ListQueueNamesParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewListQueueNamesParamsWithTimeout creates a new ListQueueNamesParams object
// with the ability to set a timeout on a request.
func NewListQueueNamesParamsWithTimeout(timeout time.Duration) *ListQueueNamesParams {
	return &ListQueueNamesParams{
		timeout: timeout,
	}
}

// NewListQueueNamesParamsWithContext creates a new ListQueueNamesParams object
// with the ability to set a context for a request.
func NewListQueueNamesParamsWithContext(ctx context.Context) *ListQueueNamesParams {
	return &ListQueueNamesParams{
		Context: ctx,
	}
}

// NewListQueueNamesParamsWithHTTPClient creates a new ListQueueNamesParams object
// with the ability to set a custom HTTPClient for a request.
func NewListQueueNamesParamsWithHTTPClient(client *http.Client) *ListQueueNamesParams {
	return &ListQueueNamesParams{
		HTTPClient: client,
	}
}

/* ListQueueNamesParams contains all the parameters to send to the API endpoint
   for the list queue names operation.

   Typically these are written to a http.Request.
*/
type ListQueueNamesParams struct {

	/* Bookmarks.

	   Filter by bookmarks.
	*/
	Bookmarks *bool

	/* Limit.

	   Limit size.

	   Format: int32
	*/
	Limit *int32

	/* Mode.

	   Mode of the search.
	*/
	Mode *string

	/* Name.

	   Entity managing the resource
	*/
	Name string

	/* NoPage.

	   No pagination.
	*/
	NoPage *bool

	/* Offset.

	   Pagination offset.

	   Format: int32
	*/
	Offset *int32

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Pins.

	   Pinned entities.
	*/
	Pins *string

	/* Query.

	   Query filter the search.
	*/
	Query *string

	/* Sort.

	   Sort to order the search.
	*/
	Sort *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the list queue names params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListQueueNamesParams) WithDefaults() *ListQueueNamesParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the list queue names params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListQueueNamesParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the list queue names params
func (o *ListQueueNamesParams) WithTimeout(timeout time.Duration) *ListQueueNamesParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the list queue names params
func (o *ListQueueNamesParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the list queue names params
func (o *ListQueueNamesParams) WithContext(ctx context.Context) *ListQueueNamesParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the list queue names params
func (o *ListQueueNamesParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the list queue names params
func (o *ListQueueNamesParams) WithHTTPClient(client *http.Client) *ListQueueNamesParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the list queue names params
func (o *ListQueueNamesParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBookmarks adds the bookmarks to the list queue names params
func (o *ListQueueNamesParams) WithBookmarks(bookmarks *bool) *ListQueueNamesParams {
	o.SetBookmarks(bookmarks)
	return o
}

// SetBookmarks adds the bookmarks to the list queue names params
func (o *ListQueueNamesParams) SetBookmarks(bookmarks *bool) {
	o.Bookmarks = bookmarks
}

// WithLimit adds the limit to the list queue names params
func (o *ListQueueNamesParams) WithLimit(limit *int32) *ListQueueNamesParams {
	o.SetLimit(limit)
	return o
}

// SetLimit adds the limit to the list queue names params
func (o *ListQueueNamesParams) SetLimit(limit *int32) {
	o.Limit = limit
}

// WithMode adds the mode to the list queue names params
func (o *ListQueueNamesParams) WithMode(mode *string) *ListQueueNamesParams {
	o.SetMode(mode)
	return o
}

// SetMode adds the mode to the list queue names params
func (o *ListQueueNamesParams) SetMode(mode *string) {
	o.Mode = mode
}

// WithName adds the name to the list queue names params
func (o *ListQueueNamesParams) WithName(name string) *ListQueueNamesParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the list queue names params
func (o *ListQueueNamesParams) SetName(name string) {
	o.Name = name
}

// WithNoPage adds the noPage to the list queue names params
func (o *ListQueueNamesParams) WithNoPage(noPage *bool) *ListQueueNamesParams {
	o.SetNoPage(noPage)
	return o
}

// SetNoPage adds the noPage to the list queue names params
func (o *ListQueueNamesParams) SetNoPage(noPage *bool) {
	o.NoPage = noPage
}

// WithOffset adds the offset to the list queue names params
func (o *ListQueueNamesParams) WithOffset(offset *int32) *ListQueueNamesParams {
	o.SetOffset(offset)
	return o
}

// SetOffset adds the offset to the list queue names params
func (o *ListQueueNamesParams) SetOffset(offset *int32) {
	o.Offset = offset
}

// WithOwner adds the owner to the list queue names params
func (o *ListQueueNamesParams) WithOwner(owner string) *ListQueueNamesParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the list queue names params
func (o *ListQueueNamesParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithPins adds the pins to the list queue names params
func (o *ListQueueNamesParams) WithPins(pins *string) *ListQueueNamesParams {
	o.SetPins(pins)
	return o
}

// SetPins adds the pins to the list queue names params
func (o *ListQueueNamesParams) SetPins(pins *string) {
	o.Pins = pins
}

// WithQuery adds the query to the list queue names params
func (o *ListQueueNamesParams) WithQuery(query *string) *ListQueueNamesParams {
	o.SetQuery(query)
	return o
}

// SetQuery adds the query to the list queue names params
func (o *ListQueueNamesParams) SetQuery(query *string) {
	o.Query = query
}

// WithSort adds the sort to the list queue names params
func (o *ListQueueNamesParams) WithSort(sort *string) *ListQueueNamesParams {
	o.SetSort(sort)
	return o
}

// SetSort adds the sort to the list queue names params
func (o *ListQueueNamesParams) SetSort(sort *string) {
	o.Sort = sort
}

// WriteToRequest writes these params to a swagger request
func (o *ListQueueNamesParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Bookmarks != nil {

		// query param bookmarks
		var qrBookmarks bool

		if o.Bookmarks != nil {
			qrBookmarks = *o.Bookmarks
		}
		qBookmarks := swag.FormatBool(qrBookmarks)
		if qBookmarks != "" {

			if err := r.SetQueryParam("bookmarks", qBookmarks); err != nil {
				return err
			}
		}
	}

	if o.Limit != nil {

		// query param limit
		var qrLimit int32

		if o.Limit != nil {
			qrLimit = *o.Limit
		}
		qLimit := swag.FormatInt32(qrLimit)
		if qLimit != "" {

			if err := r.SetQueryParam("limit", qLimit); err != nil {
				return err
			}
		}
	}

	if o.Mode != nil {

		// query param mode
		var qrMode string

		if o.Mode != nil {
			qrMode = *o.Mode
		}
		qMode := qrMode
		if qMode != "" {

			if err := r.SetQueryParam("mode", qMode); err != nil {
				return err
			}
		}
	}

	// path param name
	if err := r.SetPathParam("name", o.Name); err != nil {
		return err
	}

	if o.NoPage != nil {

		// query param no_page
		var qrNoPage bool

		if o.NoPage != nil {
			qrNoPage = *o.NoPage
		}
		qNoPage := swag.FormatBool(qrNoPage)
		if qNoPage != "" {

			if err := r.SetQueryParam("no_page", qNoPage); err != nil {
				return err
			}
		}
	}

	if o.Offset != nil {

		// query param offset
		var qrOffset int32

		if o.Offset != nil {
			qrOffset = *o.Offset
		}
		qOffset := swag.FormatInt32(qrOffset)
		if qOffset != "" {

			if err := r.SetQueryParam("offset", qOffset); err != nil {
				return err
			}
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if o.Pins != nil {

		// query param pins
		var qrPins string

		if o.Pins != nil {
			qrPins = *o.Pins
		}
		qPins := qrPins
		if qPins != "" {

			if err := r.SetQueryParam("pins", qPins); err != nil {
				return err
			}
		}
	}

	if o.Query != nil {

		// query param query
		var qrQuery string

		if o.Query != nil {
			qrQuery = *o.Query
		}
		qQuery := qrQuery
		if qQuery != "" {

			if err := r.SetQueryParam("query", qQuery); err != nil {
				return err
			}
		}
	}

	if o.Sort != nil {

		// query param sort
		var qrSort string

		if o.Sort != nil {
			qrSort = *o.Sort
		}
		qSort := qrSort
		if qSort != "" {

			if err := r.SetQueryParam("sort", qSort); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

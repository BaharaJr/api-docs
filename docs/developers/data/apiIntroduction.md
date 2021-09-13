---
id: employeerecords
title: Employee Records Module
sidebar_label: Records
---

## Introduction to HRHIS APIs 

The HRHIS API is organized around. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

## Authenticationss 
The HRHIS API uses API keys to authenticate requests. You can view and manage your API keys in the HRHIS Dashboard.

Test mode secret keys have the prefix sk_test_ and live mode secret keys have the prefix sk_live_. Alternatively, you can use restricted API keys for granular permissions.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via HTTP Basic Auth. Provide your API key as the basic auth username value. You will also need to provide a password.

If you need to authenticate via bearer auth (e.g., for a cross-origin request), use -H "Authorization: Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc" instead of -u sk_test_4eC39HqLyjWDarjtT1zdp7dc.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

## Errors
HRHIS uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Stripe's servers (these are rare).

Some 4xx errors that could be handled programmatically (e.g., ) include an error code that briefly explains the error reported.

### Attributes
#### type
string
The type of error returned. One of api_error, or invalid_request_error

#### code
string
For some errors that could be handled programmatically, a short string indicating the error code reported.

#### decline_code
string


#### message
string
A human-readable message providing more details about the error. For ..., these messages can be shown to your users.

#### param
string
If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.

### Handling errors
Our Client libraries raise exceptions for many reasons, such as a failed charge, invalid parameters, authentication errors, and network unavailability. We recommend writing code that gracefully handles all possible API exceptions.

### Expanding Responses
Many objects allow you to request additional information as an expanded response by using the expand request parameter. This parameter is available on all API requests, and applies to the response of that request only. Responses can be expanded in two ways.

### Metadata
Updateable HRHIS objects—including Account, Forms, Fields, Field options, Organization units have a metadata parameter. You can use this parameter to attach key-value data to these Stripe objects.

You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long.

Metadata is useful for storing additional, structured information on an object. As an example, you could assign fields in a form and corresponding unique identifier from your system on a Stripe Customer object. Metadata is not used by HRHIS—for example, not used to authorize or decline a charge—and won't be seen by your users unless you choose to show it to them.

Some of the objects listed above also support a description parameter. You can use the description parameter to annotate a charge—with, for example, a human-readable description like 2 shirts for test@example.com. Unlike metadata, description is a single string, and your users may see it (e.g., in email receipts Stripe sends on your behalf).

Do not store any sensitive information (bank account numbers, card details, etc.) as metadata or in the description parameter.

### Pagination
All top-level API resources have support for bulk fetches via "list" API methods. For instance, you can list records, list something , and list something. These list API methods share a common structure, taking at least these three parameters: limit, starting_after, and ending_before.

HRHIS utilizes cursor-based pagination via the starting_after and ending_before parameters. Both parameters take an existing object ID value (see below) and return objects in reverse chronological order. The ending_before parameter returns objects listed before the named object. The starting_after parameter returns objects listed after the named object. These parameters are mutually exclusive -- only one of starting_after orending_before may be used.

Parameters
limit
optional, default is 10
A limit on the number of objects to be returned, between 1 and 100.

starting_after
optional
A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

ending_before
optional
A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.

List Response Format
object
string, value is "list"
A string describing the object type returned.

data
array
An array containing the actual response elements, paginated by any request parameters.

has_more
boolean
Whether or not there are more elements available after this set. If false, this set comprises the end of the list.

url
string
The URL for accessing this list.

### Request IDs

Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.

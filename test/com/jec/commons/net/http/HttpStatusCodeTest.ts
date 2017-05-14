//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import "mocha";
import {expect} from "chai";

// Class to test:
import {HttpStatusCode} from "../../../../../../src/com/jec/commons/net/http/HttpStatusCode";

// Test:
describe("HttpStatusCode", ()=> {

  describe("#CONTINUE", ()=> {
    it("CONTINUE should return 100", function() {
      expect(HttpStatusCode.CONTINUE).to.equal(CONTINUE);
    });
  });

  describe("#SWITCHING_PROTOCOLS", ()=> {
    it("SWITCHING_PROTOCOLS should return 101", function() {
      expect(HttpStatusCode.SWITCHING_PROTOCOLS).to.equal(SWITCHING_PROTOCOLS);
    });
  });

  describe("#PROCESSING", ()=> {
    it("PROCESSING should return 102", function() {
      expect(HttpStatusCode.PROCESSING).to.equal(PROCESSING);
    });
  });

  describe("#OK", ()=> {
    it("OK should return 200", function() {
      expect(HttpStatusCode.OK).to.equal(OK);
    });
  });

  describe("#CREATED", ()=> {
    it("CREATED should return 201", function() {
      expect(HttpStatusCode.CREATED).to.equal(CREATED);
    });
  });
  
  describe("#ACCEPTED", ()=> {
    it("ACCEPTED should return 202", function() {
      expect(HttpStatusCode.ACCEPTED).to.equal(ACCEPTED);
    });
  });

  describe("#NON_AUTHORITATIVE_INFORMATION", ()=> {
    it("NON_AUTHORITATIVE_INFORMATION should return 203", function() {
      expect(HttpStatusCode.NON_AUTHORITATIVE_INFORMATION).to.equal(NON_AUTHORITATIVE_INFORMATION);
    });
  });

  describe("#NO_CONTENT", ()=> {
    it("NO_CONTENT should return 204", function() {
      expect(HttpStatusCode.NO_CONTENT).to.equal(NO_CONTENT);
    });
  });
  
  describe("#RESET_CONTENT", ()=> {
    it("RESET_CONTENT should return 205", function() {
      expect(HttpStatusCode.RESET_CONTENT).to.equal(RESET_CONTENT);
    });
  });
  
  describe("#PARTIAL_CONTENT", ()=> {
    it("PARTIAL_CONTENT should return 206", function() {
      expect(HttpStatusCode.PARTIAL_CONTENT).to.equal(PARTIAL_CONTENT);
    });
  });
  
  describe("#MULTI_STATUS", ()=> {
    it("MULTI_STATUS should return 207", function() {
      expect(HttpStatusCode.MULTI_STATUS).to.equal(MULTI_STATUS);
    });
  });
  
  describe("#ALREADY_REPORTED", ()=> {
    it("ALREADY_REPORTED should return 208", function() {
      expect(HttpStatusCode.ALREADY_REPORTED).to.equal(ALREADY_REPORTED);
    });
  });
  
  describe("#IM_USED", ()=> {
    it("IM_USED should return 226", function() {
      expect(HttpStatusCode.IM_USED).to.equal(IM_USED);
    });
  });
  
  describe("#MULTIPLE_CHOICES", ()=> {
    it("MULTIPLE_CHOICES should return 300", function() {
      expect(HttpStatusCode.MULTIPLE_CHOICES).to.equal(MULTIPLE_CHOICES);
    });
  });
  
  describe("#MOVED_PERMANENTLY", ()=> {
    it("MOVED_PERMANENTLY should return 301", function() {
      expect(HttpStatusCode.MOVED_PERMANENTLY).to.equal(MOVED_PERMANENTLY);
    });
  });
  
  describe("#FOUND", ()=> {
    it("FOUND should return 302", function() {
      expect(HttpStatusCode.FOUND).to.equal(FOUND);
    });
  });
  
  describe("#SEE_OTHER", ()=> {
    it("SEE_OTHER should return 303", function() {
      expect(HttpStatusCode.SEE_OTHER).to.equal(SEE_OTHER);
    });
  });
  
  describe("#NOT_MODIFIED", ()=> {
    it("NOT_MODIFIED should return 304", function() {
      expect(HttpStatusCode.NOT_MODIFIED).to.equal(NOT_MODIFIED);
    });
  });
  
  describe("#USE_PROXY", ()=> {
    it("USE_PROXY should return 305", function() {
      expect(HttpStatusCode.USE_PROXY).to.equal(USE_PROXY);
    });
  });
  
  describe("#TEMPORARY_REDIRECT", ()=> {
    it("TEMPORARY_REDIRECT should return 307", function() {
      expect(HttpStatusCode.TEMPORARY_REDIRECT).to.equal(TEMPORARY_REDIRECT);
    });
  });
  
  describe("#PERMANENT_REDIRECT", ()=> {
    it("PERMANENT_REDIRECT should return 308", function() {
      expect(HttpStatusCode.PERMANENT_REDIRECT).to.equal(PERMANENT_REDIRECT);
    });
  });
  
  describe("#BAD_REQUEST", ()=> {
    it("BAD_REQUEST should return 400", function() {
      expect(HttpStatusCode.BAD_REQUEST).to.equal(BAD_REQUEST);
    });
  });

  describe("#UNAUTHORIZED", ()=> {
    it("UNAUTHORIZED should return 401", function() {
      expect(HttpStatusCode.UNAUTHORIZED).to.equal(UNAUTHORIZED);
    });
  });

  describe("#PAYMENT_REQUIRED", ()=> {
    it("PAYMENT_REQUIRED should return 402", function() {
      expect(HttpStatusCode.PAYMENT_REQUIRED).to.equal(PAYMENT_REQUIRED);
    });
  });

  describe("#FORBIDEN", ()=> {
    it("FORBIDEN should return 403", function() {
      expect(HttpStatusCode.FORBIDEN).to.equal(FORBIDEN);
    });
  });

  describe("#NOT_FOUND", ()=> {
    it("NOT_FOUND should return 404", function() {
      expect(HttpStatusCode.NOT_FOUND).to.equal(NOT_FOUND);
    });
  });

  describe("#METHOD_NOT_ALLOWED", ()=> {
    it("METHOD_NOT_ALLOWED should return 405", function() {
      expect(HttpStatusCode.METHOD_NOT_ALLOWED).to.equal(METHOD_NOT_ALLOWED);
    });
  });

  describe("#NOT_ACCEPTABLE", ()=> {
    it("NOT_ACCEPTABLE should return 406", function() {
      expect(HttpStatusCode.NOT_ACCEPTABLE).to.equal(NOT_ACCEPTABLE);
    });
  });

  describe("#PROXY_AUTHENTICATION_REQUIRED", ()=> {
    it("PROXY_AUTHENTICATION_REQUIRED should return 407", function() {
      expect(HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED).to.equal(PROXY_AUTHENTICATION_REQUIRED);
    });
  });

  describe("#REQUEST_TIMEOUT", ()=> {
    it("REQUEST_TIMEOUT should return 408", function() {
      expect(HttpStatusCode.REQUEST_TIMEOUT).to.equal(REQUEST_TIMEOUT);
    });
  });
  
  describe("#CONFLICT", ()=> {
    it("REQUEST_TIMEOUT should return 409", function() {
      expect(HttpStatusCode.CONFLICT).to.equal(CONFLICT);
    });
  });
  
  describe("#GONE", ()=> {
    it("GONE should return 410", function() {
      expect(HttpStatusCode.GONE).to.equal(GONE);
    });
  });

  describe("#LENGTH_REQUIRED", ()=> {
    it("LENGTH_REQUIRED should return 411", function() {
      expect(HttpStatusCode.LENGTH_REQUIRED).to.equal(LENGTH_REQUIRED);
    });
  });
  
  describe("#PRECONDITION_FAILED", ()=> {
    it("PRECONDITION_FAILED should return 412", function() {
      expect(HttpStatusCode.PRECONDITION_FAILED).to.equal(PRECONDITION_FAILED);
    });
  });
  
  describe("#PAYLOAD_TOO_LARGE", ()=> {
    it("PAYLOAD_TOO_LARGE should return 413", function() {
      expect(HttpStatusCode.PAYLOAD_TOO_LARGE).to.equal(PAYLOAD_TOO_LARGE);
    });
  });
  
  describe("#URI_TOO_LONG", ()=> {
    it("URI_TOO_LONG should return 414", function() {
      expect(HttpStatusCode.URI_TOO_LONG).to.equal(URI_TOO_LONG);
    });
  });
  
  describe("#UNSUPPORTED_MEDIA_TYPE", ()=> {
    it("UNSUPPORTED_MEDIA_TYPE should return 415", function() {
      expect(HttpStatusCode.UNSUPPORTED_MEDIA_TYPE).to.equal(UNSUPPORTED_MEDIA_TYPE);
    });
  });
  
  describe("#REQUESTED_RANGE_NOT_SATISFIABLE", ()=> {
    it("REQUESTED_RANGE_NOT_SATISFIABLE should return 416", function() {
      expect(HttpStatusCode.REQUESTED_RANGE_NOT_SATISFIABLE).to.equal(REQUESTED_RANGE_NOT_SATISFIABLE);
    });
  });
  
  describe("#EXPECTATION_FAILED", ()=> {
    it("EXPECTATION_FAILED should return 417", function() {
      expect(HttpStatusCode.EXPECTATION_FAILED).to.equal(EXPECTATION_FAILED);
    });
  });
  
  describe("#I_AM_A_TEAPOT", ()=> {
    it("I_AM_A_TEAPOT should return 418", function() {
      expect(HttpStatusCode.I_AM_A_TEAPOT).to.equal(I_AM_A_TEAPOT);
    });
  });

  describe("#DESTINATION_LOCKED", ()=> {
    it("DESTINATION_LOCKED should return 421", function() {
      expect(HttpStatusCode.DESTINATION_LOCKED).to.equal(DESTINATION_LOCKED);
    });
  });
  
  describe("#UNPROCESSABLE_ENTITY", ()=> {
    it("UNPROCESSABLE_ENTITY should return 422", function() {
      expect(HttpStatusCode.UNPROCESSABLE_ENTITY).to.equal(UNPROCESSABLE_ENTITY);
    });
  });
  
  describe("#LOCKED", ()=> {
    it("LOCKED should return 423", function() {
      expect(HttpStatusCode.LOCKED).to.equal(LOCKED);
    });
  });
  
  describe("#FAILED_DEPENDENCY", ()=> {
    it("FAILED_DEPENDENCY should return 424", function() {
      expect(HttpStatusCode.FAILED_DEPENDENCY).to.equal(FAILED_DEPENDENCY);
    });
  });
  
  describe("#UPGRADE_REQUIRED", ()=> {
    it("UPGRADE_REQUIRED should return 426", function() {
      expect(HttpStatusCode.UPGRADE_REQUIRED).to.equal(UPGRADE_REQUIRED);
    });
  });
  
  describe("#PRECONDITION_REQUIRED", ()=> {
    it("PRECONDITION_REQUIRED should return 428", function() {
      expect(HttpStatusCode.PRECONDITION_REQUIRED).to.equal(PRECONDITION_REQUIRED);
    });
  });
  
  describe("#TOO_MANY_REQUESTS", ()=> {
    it("TOO_MANY_REQUESTS should return 429", function() {
      expect(HttpStatusCode.TOO_MANY_REQUESTS).to.equal(TOO_MANY_REQUESTS);
    });
  });
  
  describe("#REQUEST_HEADER_FIELDS_TOO_LARGE", ()=> {
    it("REQUEST_HEADER_FIELDS_TOO_LARGE should return 431", function() {
      expect(HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE).to.equal(REQUEST_HEADER_FIELDS_TOO_LARGE);
    });
  });
  
  describe("#UNAVAILABLE_FOR_LEGAL_REASONS", ()=> {
    it("UNAVAILABLE_FOR_LEGAL_REASONS should return 451", function() {
      expect(HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS).to.equal(UNAVAILABLE_FOR_LEGAL_REASONS);
    });
  });
  
  describe("#INTERNAL_SERVER_ERROR", ()=> {
    it("INTERNAL_SERVER_ERROR should return 500", function() {
      expect(HttpStatusCode.INTERNAL_SERVER_ERROR).to.equal(INTERNAL_SERVER_ERROR);
    });
  });
  
  describe("#NOT_IMPLEMENTED", ()=> {
    it("NOT_IMPLEMENTED should return 501", function() {
      expect(HttpStatusCode.NOT_IMPLEMENTED).to.equal(NOT_IMPLEMENTED);
    });
  });
  
  describe("#BAD_GATEWAY", ()=> {
    it("BAD_GATEWAY should return 502", function() {
      expect(HttpStatusCode.BAD_GATEWAY).to.equal(BAD_GATEWAY);
    });
  });
  
  describe("#SERVICE_UNAVAILABLE", ()=> {
    it("SERVICE_UNAVAILABLE should return 503", function() {
      expect(HttpStatusCode.SERVICE_UNAVAILABLE).to.equal(SERVICE_UNAVAILABLE);
    });
  });
  
  describe("#GATEWAY_TIMEOUT", ()=> {
    it("GATEWAY_TIMEOUT should return 504", function() {
      expect(HttpStatusCode.GATEWAY_TIMEOUT).to.equal(GATEWAY_TIMEOUT);
    });
  });
  
  describe("#HTTP_VERSION_NOT_SUPPORTED", ()=> {
    it("HTTP_VERSION_NOT_SUPPORTED should return 505", function() {
      expect(HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED).to.equal(HTTP_VERSION_NOT_SUPPORTED);
    });
  });
  
  describe("#VARIANT_ALSO_NEGOTIATES", ()=> {
    it("VARIANT_ALSO_NEGOTIATES should return 506", function() {
      expect(HttpStatusCode.VARIANT_ALSO_NEGOTIATES).to.equal(VARIANT_ALSO_NEGOTIATES);
    });
  });
  
  describe("#INSUFFICIENT_STORAGE", ()=> {
    it("INSUFFICIENT_STORAGE should return 507", function() {
      expect(HttpStatusCode.INSUFFICIENT_STORAGE).to.equal(INSUFFICIENT_STORAGE);
    });
  });
  
  describe("#LOOP_DETECTED", ()=> {
    it("LOOP_DETECTED should return 500", function() {
      expect(HttpStatusCode.LOOP_DETECTED).to.equal(LOOP_DETECTED);
    });
  });
  
  describe("#NOT_EXTENDED", ()=> {
    it("NOT_EXTENDED should return 510", function() {
      expect(HttpStatusCode.NOT_EXTENDED).to.equal(NOT_EXTENDED);
    });
  });
  
  describe("#NETWORK_AUTHENTICATION_REQUIRED", ()=> {
    it("NETWORK_AUTHENTICATION_REQUIRED should return 500", function() {
      expect(HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED).to.equal(NETWORK_AUTHENTICATION_REQUIRED);
    });
  });
});

// Utilities:
// We store constants that should be defined by the HttpStatusCode class:
const CONTINUE:number = 100;
const SWITCHING_PROTOCOLS:number = 101;
const PROCESSING:number = 102;
const OK:number = 200;
const CREATED:number = 201;
const ACCEPTED:number = 202;
const NON_AUTHORITATIVE_INFORMATION:number = 203;
const NO_CONTENT:number = 204;
const RESET_CONTENT:number = 205;
const PARTIAL_CONTENT:number = 206;
const MULTI_STATUS:number = 207;
const ALREADY_REPORTED:number = 208;
const IM_USED:number = 226;
const MULTIPLE_CHOICES:number = 300;
const MOVED_PERMANENTLY:number = 301;
const FOUND:number = 302;
const SEE_OTHER:number = 303;
const NOT_MODIFIED:number = 304;
const USE_PROXY:number = 305;
const TEMPORARY_REDIRECT:number = 307;
const PERMANENT_REDIRECT:number = 308;
const BAD_REQUEST:number = 400;
const UNAUTHORIZED:number = 401;
const PAYMENT_REQUIRED:number = 402;
const FORBIDEN:number = 403;
const NOT_FOUND:number = 404;
const METHOD_NOT_ALLOWED:number = 405;
const NOT_ACCEPTABLE:number = 406;
const PROXY_AUTHENTICATION_REQUIRED:number = 407;
const REQUEST_TIMEOUT:number = 408;
const CONFLICT:number = 409;
const GONE:number = 410;
const LENGTH_REQUIRED:number = 411;
const PRECONDITION_FAILED:number = 412;
const PAYLOAD_TOO_LARGE:number = 413;
const URI_TOO_LONG:number = 414;
const UNSUPPORTED_MEDIA_TYPE:number = 415;
const REQUESTED_RANGE_NOT_SATISFIABLE:number = 416;
const EXPECTATION_FAILED:number = 417;
const I_AM_A_TEAPOT:number = 418;
const DESTINATION_LOCKED:number = 421;
const UNPROCESSABLE_ENTITY:number = 422;
const LOCKED:number = 423;
const FAILED_DEPENDENCY:number = 424;
const UPGRADE_REQUIRED:number = 426;
const PRECONDITION_REQUIRED:number = 428;
const TOO_MANY_REQUESTS:number = 429;
const REQUEST_HEADER_FIELDS_TOO_LARGE:number = 431;
const UNAVAILABLE_FOR_LEGAL_REASONS:number = 451;
const INTERNAL_SERVER_ERROR:number = 500;
const NOT_IMPLEMENTED:number = 501;
const BAD_GATEWAY:number = 502;
const SERVICE_UNAVAILABLE:number = 503;
const GATEWAY_TIMEOUT:number = 504;
const HTTP_VERSION_NOT_SUPPORTED:number = 505;
const VARIANT_ALSO_NEGOTIATES:number = 506;
const INSUFFICIENT_STORAGE:number = 507;
const LOOP_DETECTED:number = 508;
const NOT_EXTENDED:number = 510;
const NETWORK_AUTHENTICATION_REQUIRED:number = 511;
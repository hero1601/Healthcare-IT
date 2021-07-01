/**
 * @fileoverview gRPC-Web generated client stub for valuesets
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var terminology_src_protos_code_pb = require('../../../terminology/src/protos/code_pb.js')
const proto = {};
proto.valuesets = require('./valueset_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.valuesets.ServiceForValueSetClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.valuesets.ServiceForValueSetPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.valuesets.ValueSetURIVersionProvide,
 *   !proto.valuesets.AllValueSetinfoProvide>}
 */
const methodDescriptor_ServiceForValueSet_SearchValueSet = new grpc.web.MethodDescriptor(
  '/valuesets.ServiceForValueSet/SearchValueSet',
  grpc.web.MethodType.UNARY,
  proto.valuesets.ValueSetURIVersionProvide,
  proto.valuesets.AllValueSetinfoProvide,
  /**
   * @param {!proto.valuesets.ValueSetURIVersionProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.valuesets.AllValueSetinfoProvide.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.valuesets.ValueSetURIVersionProvide,
 *   !proto.valuesets.AllValueSetinfoProvide>}
 */
const methodInfo_ServiceForValueSet_SearchValueSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.valuesets.AllValueSetinfoProvide,
  /**
   * @param {!proto.valuesets.ValueSetURIVersionProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.valuesets.AllValueSetinfoProvide.deserializeBinary
);


/**
 * @param {!proto.valuesets.ValueSetURIVersionProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.valuesets.AllValueSetinfoProvide)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.valuesets.AllValueSetinfoProvide>|undefined}
 *     The XHR Node Readable Stream
 */
proto.valuesets.ServiceForValueSetClient.prototype.searchValueSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/valuesets.ServiceForValueSet/SearchValueSet',
      request,
      metadata || {},
      methodDescriptor_ServiceForValueSet_SearchValueSet,
      callback);
};


/**
 * @param {!proto.valuesets.ValueSetURIVersionProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.valuesets.AllValueSetinfoProvide>}
 *     Promise that resolves to the response
 */
proto.valuesets.ServiceForValueSetPromiseClient.prototype.searchValueSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/valuesets.ServiceForValueSet/SearchValueSet',
      request,
      metadata || {},
      methodDescriptor_ServiceForValueSet_SearchValueSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.valuesets.AllValueSetinfoProvide,
 *   !proto.valuesets.AllValueSetinfoProvide>}
 */
const methodDescriptor_ServiceForValueSet_AddValueSet = new grpc.web.MethodDescriptor(
  '/valuesets.ServiceForValueSet/AddValueSet',
  grpc.web.MethodType.UNARY,
  proto.valuesets.AllValueSetinfoProvide,
  proto.valuesets.AllValueSetinfoProvide,
  /**
   * @param {!proto.valuesets.AllValueSetinfoProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.valuesets.AllValueSetinfoProvide.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.valuesets.AllValueSetinfoProvide,
 *   !proto.valuesets.AllValueSetinfoProvide>}
 */
const methodInfo_ServiceForValueSet_AddValueSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.valuesets.AllValueSetinfoProvide,
  /**
   * @param {!proto.valuesets.AllValueSetinfoProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.valuesets.AllValueSetinfoProvide.deserializeBinary
);


/**
 * @param {!proto.valuesets.AllValueSetinfoProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.valuesets.AllValueSetinfoProvide)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.valuesets.AllValueSetinfoProvide>|undefined}
 *     The XHR Node Readable Stream
 */
proto.valuesets.ServiceForValueSetClient.prototype.addValueSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/valuesets.ServiceForValueSet/AddValueSet',
      request,
      metadata || {},
      methodDescriptor_ServiceForValueSet_AddValueSet,
      callback);
};


/**
 * @param {!proto.valuesets.AllValueSetinfoProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.valuesets.AllValueSetinfoProvide>}
 *     Promise that resolves to the response
 */
proto.valuesets.ServiceForValueSetPromiseClient.prototype.addValueSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/valuesets.ServiceForValueSet/AddValueSet',
      request,
      metadata || {},
      methodDescriptor_ServiceForValueSet_AddValueSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.valuesets.ValueSetURIVersionProvide,
 *   !proto.valuesets.ValueSetToCodes>}
 */
const methodDescriptor_ServiceForValueSet_FindCodesFromValueSet = new grpc.web.MethodDescriptor(
  '/valuesets.ServiceForValueSet/FindCodesFromValueSet',
  grpc.web.MethodType.UNARY,
  proto.valuesets.ValueSetURIVersionProvide,
  proto.valuesets.ValueSetToCodes,
  /**
   * @param {!proto.valuesets.ValueSetURIVersionProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.valuesets.ValueSetToCodes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.valuesets.ValueSetURIVersionProvide,
 *   !proto.valuesets.ValueSetToCodes>}
 */
const methodInfo_ServiceForValueSet_FindCodesFromValueSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.valuesets.ValueSetToCodes,
  /**
   * @param {!proto.valuesets.ValueSetURIVersionProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.valuesets.ValueSetToCodes.deserializeBinary
);


/**
 * @param {!proto.valuesets.ValueSetURIVersionProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.valuesets.ValueSetToCodes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.valuesets.ValueSetToCodes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.valuesets.ServiceForValueSetClient.prototype.findCodesFromValueSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/valuesets.ServiceForValueSet/FindCodesFromValueSet',
      request,
      metadata || {},
      methodDescriptor_ServiceForValueSet_FindCodesFromValueSet,
      callback);
};


/**
 * @param {!proto.valuesets.ValueSetURIVersionProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.valuesets.ValueSetToCodes>}
 *     Promise that resolves to the response
 */
proto.valuesets.ServiceForValueSetPromiseClient.prototype.findCodesFromValueSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/valuesets.ServiceForValueSet/FindCodesFromValueSet',
      request,
      metadata || {},
      methodDescriptor_ServiceForValueSet_FindCodesFromValueSet);
};


module.exports = proto.valuesets;


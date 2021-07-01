/**
 * @fileoverview gRPC-Web generated client stub for codes
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.codes = require('./code_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.codes.ServiceForCodeClient =
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
proto.codes.ServiceForCodePromiseClient =
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
 *   !proto.codes.CodeSystemProvide,
 *   !proto.codes.AllinfoProvide>}
 */
const methodDescriptor_ServiceForCode_AllCode = new grpc.web.MethodDescriptor(
  '/codes.ServiceForCode/AllCode',
  grpc.web.MethodType.UNARY,
  proto.codes.CodeSystemProvide,
  proto.codes.AllinfoProvide,
  /**
   * @param {!proto.codes.CodeSystemProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.AllinfoProvide.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.codes.CodeSystemProvide,
 *   !proto.codes.AllinfoProvide>}
 */
const methodInfo_ServiceForCode_AllCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.codes.AllinfoProvide,
  /**
   * @param {!proto.codes.CodeSystemProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.AllinfoProvide.deserializeBinary
);


/**
 * @param {!proto.codes.CodeSystemProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.codes.AllinfoProvide)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.codes.AllinfoProvide>|undefined}
 *     The XHR Node Readable Stream
 */
proto.codes.ServiceForCodeClient.prototype.allCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/codes.ServiceForCode/AllCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_AllCode,
      callback);
};


/**
 * @param {!proto.codes.CodeSystemProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.codes.AllinfoProvide>}
 *     Promise that resolves to the response
 */
proto.codes.ServiceForCodePromiseClient.prototype.allCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/codes.ServiceForCode/AllCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_AllCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.codes.InfoProvide,
 *   !proto.codes.InfoProvide>}
 */
const methodDescriptor_ServiceForCode_AddCode = new grpc.web.MethodDescriptor(
  '/codes.ServiceForCode/AddCode',
  grpc.web.MethodType.UNARY,
  proto.codes.InfoProvide,
  proto.codes.InfoProvide,
  /**
   * @param {!proto.codes.InfoProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.InfoProvide.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.codes.InfoProvide,
 *   !proto.codes.InfoProvide>}
 */
const methodInfo_ServiceForCode_AddCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.codes.InfoProvide,
  /**
   * @param {!proto.codes.InfoProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.InfoProvide.deserializeBinary
);


/**
 * @param {!proto.codes.InfoProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.codes.InfoProvide)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.codes.InfoProvide>|undefined}
 *     The XHR Node Readable Stream
 */
proto.codes.ServiceForCodeClient.prototype.addCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/codes.ServiceForCode/AddCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_AddCode,
      callback);
};


/**
 * @param {!proto.codes.InfoProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.codes.InfoProvide>}
 *     Promise that resolves to the response
 */
proto.codes.ServiceForCodePromiseClient.prototype.addCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/codes.ServiceForCode/AddCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_AddCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.codes.CodeProvide,
 *   !proto.codes.AllinfoProvide>}
 */
const methodDescriptor_ServiceForCode_SearchCode = new grpc.web.MethodDescriptor(
  '/codes.ServiceForCode/SearchCode',
  grpc.web.MethodType.UNARY,
  proto.codes.CodeProvide,
  proto.codes.AllinfoProvide,
  /**
   * @param {!proto.codes.CodeProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.AllinfoProvide.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.codes.CodeProvide,
 *   !proto.codes.AllinfoProvide>}
 */
const methodInfo_ServiceForCode_SearchCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.codes.AllinfoProvide,
  /**
   * @param {!proto.codes.CodeProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.AllinfoProvide.deserializeBinary
);


/**
 * @param {!proto.codes.CodeProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.codes.AllinfoProvide)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.codes.AllinfoProvide>|undefined}
 *     The XHR Node Readable Stream
 */
proto.codes.ServiceForCodeClient.prototype.searchCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/codes.ServiceForCode/SearchCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_SearchCode,
      callback);
};


/**
 * @param {!proto.codes.CodeProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.codes.AllinfoProvide>}
 *     Promise that resolves to the response
 */
proto.codes.ServiceForCodePromiseClient.prototype.searchCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/codes.ServiceForCode/SearchCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_SearchCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.codes.InfoProvide,
 *   !proto.codes.InfoProvide>}
 */
const methodDescriptor_ServiceForCode_UpdateCode = new grpc.web.MethodDescriptor(
  '/codes.ServiceForCode/UpdateCode',
  grpc.web.MethodType.UNARY,
  proto.codes.InfoProvide,
  proto.codes.InfoProvide,
  /**
   * @param {!proto.codes.InfoProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.InfoProvide.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.codes.InfoProvide,
 *   !proto.codes.InfoProvide>}
 */
const methodInfo_ServiceForCode_UpdateCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.codes.InfoProvide,
  /**
   * @param {!proto.codes.InfoProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.InfoProvide.deserializeBinary
);


/**
 * @param {!proto.codes.InfoProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.codes.InfoProvide)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.codes.InfoProvide>|undefined}
 *     The XHR Node Readable Stream
 */
proto.codes.ServiceForCodeClient.prototype.updateCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/codes.ServiceForCode/UpdateCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_UpdateCode,
      callback);
};


/**
 * @param {!proto.codes.InfoProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.codes.InfoProvide>}
 *     Promise that resolves to the response
 */
proto.codes.ServiceForCodePromiseClient.prototype.updateCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/codes.ServiceForCode/UpdateCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_UpdateCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.codes.CodeProvide,
 *   !proto.codes.InfoProvide>}
 */
const methodDescriptor_ServiceForCode_DeleteCode = new grpc.web.MethodDescriptor(
  '/codes.ServiceForCode/DeleteCode',
  grpc.web.MethodType.UNARY,
  proto.codes.CodeProvide,
  proto.codes.InfoProvide,
  /**
   * @param {!proto.codes.CodeProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.InfoProvide.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.codes.CodeProvide,
 *   !proto.codes.InfoProvide>}
 */
const methodInfo_ServiceForCode_DeleteCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.codes.InfoProvide,
  /**
   * @param {!proto.codes.CodeProvide} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.codes.InfoProvide.deserializeBinary
);


/**
 * @param {!proto.codes.CodeProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.codes.InfoProvide)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.codes.InfoProvide>|undefined}
 *     The XHR Node Readable Stream
 */
proto.codes.ServiceForCodeClient.prototype.deleteCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/codes.ServiceForCode/DeleteCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_DeleteCode,
      callback);
};


/**
 * @param {!proto.codes.CodeProvide} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.codes.InfoProvide>}
 *     Promise that resolves to the response
 */
proto.codes.ServiceForCodePromiseClient.prototype.deleteCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/codes.ServiceForCode/DeleteCode',
      request,
      metadata || {},
      methodDescriptor_ServiceForCode_DeleteCode);
};


module.exports = proto.codes;


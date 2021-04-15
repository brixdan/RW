import { c as createCommonjsModule } from './client.ad9afb00.js';

var browser = createCommonjsModule(function (module, exports) {

  var getGlobal = function getGlobal() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    throw new Error('unable to locate global object');
  };

  var global = getGlobal();
  module.exports = exports = global.fetch; // Needed for TypeScript and Webpack.

  if (global.fetch) {
    exports.default = global.fetch.bind(global);
  }

  exports.Headers = global.Headers;
  exports.Request = global.Request;
  exports.Response = global.Response;
});
var browser_1 = browser.Headers;
var browser_2 = browser.Request;
var browser_3 = browser.Response;

var base = 'https://my-rw-api.herokuapp.com/api'; //const base = 'http://localhost:3000/api';

function send(_ref) {
  var method = _ref.method,
      path = _ref.path,
      data = _ref.data,
      token = _ref.token;
  var fetch =  browser.default;
  var opts = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };

  if (data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  if (token) {
    opts.headers['Authorization'] = "Token ".concat(token);
  }

  return fetch("".concat(base, "/").concat(path), opts).then(function (r) {
    return r.text();
  }).then(function (json) {
    try {
      return JSON.parse(json);
    } catch (err) {
      return json;
    }
  });
}

function get(path, token) {
  return send({
    method: 'GET',
    path: path,
    token: token
  });
}
function del(path, token) {
  return send({
    method: 'DELETE',
    path: path,
    token: token
  });
}
function post(path, data, token) {
  return send({
    method: 'POST',
    path: path,
    data: data,
    token: token
  });
}
function put(path, data, token) {
  return send({
    method: 'PUT',
    path: path,
    data: data,
    token: token
  });
}

var api = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get,
	del: del,
	post: post,
	put: put
});

export { api as a, put as b, del as d, get as g, post as p };

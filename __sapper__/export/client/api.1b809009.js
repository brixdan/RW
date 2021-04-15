function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var browser = createCommonjsModule(function (module, exports) {

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
};

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
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

//const base = 'https://conduit.productionready.io/api';
const base = 'https://my-rw-api.herokuapp.com/api';
//const base = 'http://localhost:3000/api';

function send({ method, path, data, token }) {
	const fetch =  browser.default;

	const opts = { method,         headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		}};

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then(r => r.text())
		.then(json => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

function get(path, token) {
	return send({ method: 'GET', path, token });
}

function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}

var api = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get,
	del: del,
	post: post,
	put: put
});

export { api as a, put as b, createCommonjsModule as c, del as d, get as g, post as p };

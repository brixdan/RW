'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dotenv = _interopDefault(require('dotenv'));
var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
require('axios');
var nodeFetch = _interopDefault(require('node-fetch'));
var marked = _interopDefault(require('marked'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));
var bodyParser = _interopDefault(require('body-parser'));
var session = _interopDefault(require('express-session'));
var sessionFileStore = _interopDefault(require('session-file-store'));

//const base = 'https://conduit.productionready.io/api';
const base = 'https://my-rw-api.herokuapp.com/api';
// const base = 'http://localhost:3000/api';


function send({ method, path, data, token }) {
	const fetch =  nodeFetch.default;

	const opts = { method,         headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Control-Allow-Origin':'true'
		}};

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
		console.log("opt.body=",opts.body);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then(function(response) {
			if (!response.ok) {
				throw new Error("HTTP error, status = " + response.status);
			}
			return response.text();
		})
		.then(json => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		})
		.catch(function(error) {
			console.log("error.message=",error.message);
			return error.message;
		});
// No good
// 	return   axios(`${base}/${path}`, opts)
// 		.then(function (response) {
// 			console.log(JSON.stringify(response.data));
// 			return JSON.stringify(response.data);
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 		});
}

function get(path, token) {
	return send({ method: 'GET', path, token });
}

function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}

function post$1(req, res) {
	const user = req.body;

	post('users', { user }).then(response => {
		if (response.user) {
			req.session.user = response.user;
		}

		res.setHeader('Content-Type', 'application/json');

		res.end(JSON.stringify(response));
	});
}

var route_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	post: post$1
});

function post$2(req, res) {
	delete req.session.user;
	res.end(JSON.stringify({ ok: true }));
}

var route_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	post: post$2
});

function post$3(req, res) {
	const user = req.body;

	post('users/login', { user }).then(response => {
		if (response.user) req.session.user = response.user;
		res.setHeader('Content-Type', 'application/json');

		res.end(JSON.stringify(response));
	});
}

var route_2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	post: post$3
});

function post$4(req, res) {
	const user = req.body;

	put('user', { user }, req.session.user && req.session.user.token).then(response => {
		if (response.user) {
			req.session.user = response.user;
		}

		res.setHeader('Content-Type', 'application/json');

		res.end(JSON.stringify(response));
	});
}

var route_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	post: post$4
});

function get$1(req, res) {
	res.setHeader('Content-Type', 'application/json');

	res.end(JSON.stringify({ user: req.session.user || null }));
}

var route_4 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$1
});

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get$2(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_5 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$2
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get$3(req, res, next) {
	console.log('res = ', res);
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$3
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : context || []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src\components\Nav.svelte generated by Svelte v3.37.0 */

const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	let $session, $$unsubscribe_session;
	const { page, session } = stores$1();
	validate_store(page, "page");
	$$unsubscribe_page = subscribe(page, value => $page = value);
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$unsubscribe_page();
	$$unsubscribe_session();

	return `<div class="${"ui medium top menu transition visible"}"><div class="${"ui container"}"><a class="${"item " + escape($page.path === "/" ? "active" : "")}" href="${"/"}"><i class="${"home icon"}"></i>Home</a>
	<a class="${"item " + escape(segment === "about" ? "active" : undefined)}" href="${"/about"}"><i class="${"info icon"}"></i>About</a>
	<a rel="${"prefetch"}" class="${"item " + escape(segment === "blog" ? "active" : undefined)}" href="${"/blog"}"><i class="${"blog icon"}"></i>Blog</a>
	${$session.user
	? `<div class="${"right menu"}"><a rel="${"prefetch"}" class="${"item " + escape(segment === "editor" ? "active" : undefined)}" href="${"/editor"}"><i class="${"edit icon"}"></i> New Post
		</a>

		<a rel="${"prefetch"}" class="${"item " + escape(segment === "settings" ? "active" : undefined)}" href="${"/settings"}"><i class="${"settings icon"}"></i> Settings
		</a>

		<a rel="${"prefetch"}" class="${"item " + escape(segment === "profile" ? "active" : undefined)}" href="${"/profile/@" + escape($session.user.username)}"><i class="${"user icon"}"></i> ${escape($session.user.username)}</a></div>`
	: `<div class="${"right menu"}"><div class="${"item"}"><a class="${["ui button", $page.path === "/login" ? "active" : ""].join(" ").trim()}" rel="${"prefetch"}" href="${"login"}">Sign in
				</a></div>
			<div class="${"item"}"><a class="${["ui primary button", $page.path === "/register" ? "active" : ""].join(" ").trim()}" rel="${"prefetch"}" href="${"register"}">Sign up
				</a></div></div>`}</div></div>`;
});

/* src\routes\_layout.svelte generated by Svelte v3.37.0 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main class="${"ui container centered"}">${slots.default ? slots.default({}) : ``}</main>`;
});

/* src\routes\_error.svelte generated by Svelte v3.37.0 */

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<div class="${"ui header large red"}">${escape(status)}</div>

<div class="${"ui label large"}">${escape(error.message)}</div>

${ error.stack
	? `<pre>${escape(error.stack)}</pre>`
	: ``}`;
});

/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.37.0 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/** Callback to inform of a value updates. */



















function page_store(value) {
	const store = writable(value);
	let ready = true;

	function notify() {
		ready = true;
		store.update(val => val);
	}

	function set(new_value) {
		ready = false;
		store.set(new_value);
	}

	function subscribe(run) {
		let old_value;
		return store.subscribe((value) => {
			if (old_value === undefined || (ready && value !== old_value)) {
				run(old_value = value);
			}
		});
	}

	return { notify, set, subscribe };
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

const stores = {
	page: page_store({}),
	preloading: writable(null),
	session: writable(initial_data && initial_data.session)
};

stores.session.subscribe(async value => {

	return;
});

const stores$1 = () => getContext(CONTEXT_KEY);

/* src\components\ArticleList\ArticlePreview.svelte generated by Svelte v3.37.0 */

const ArticlePreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { article } = $$props;
	let { user } = $$props;

	if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);

	return `<div class="${"ui red card compact"}"><div class="${"ui padded content"}"><div class="${"ui one column grid"}"><div class="${"column"}"><img class="${"ui top aligned mini circular image"}"${add_attribute("src", article.author.image, 0)}${add_attribute("alt", article.author.username, 0)}>

				<a class="${"ui top aligned header user green"}" href="${"/profile/@" + escape(article.author.username)}">${escape(article.author.username)}</a>

			 <div class="${"date mini"}">${escape(new Date(article.createdAt).toDateString())}</div></div></div>

		${user
	? `<button class="${"ui right floated button small " + escape(article.favorited ? "primary" : "")}"><i class="${"icon heart"}"></i> ${escape(article.favoritesCount)}</button>`
	: ``}


		<div class="${"ui header green"}">${escape(article.title)}</div>
		<div class="${"ui small text"}">${escape(article.description)}</div>
		<a href="${"/article/" + escape(article.slug)}" rel="${"prefetch"}"><span>Read more...</span></a>
	<div class="${"ui right floated horizontal list"}">${each(article.tagList, tag => `<div class="${"item"}"><div class="${"ui tag label"}">${escape(tag)}</div>
		</div>`)}</div></div></div>`;
});

/* src\components\ArticleList\ListPagination.svelte generated by Svelte v3.37.0 */

const ListPagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { articlesCount } = $$props;
	let { page = 0 } = $$props;
	let range;
	if ($$props.articlesCount === void 0 && $$bindings.articlesCount && articlesCount !== void 0) $$bindings.articlesCount(articlesCount);
	if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);

	 {
		{
			range = [];

			for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
				range.push(i);
			}
		}
	}

	return `<div>${articlesCount > 10
	? `<div class="${"ui horizontal list"}">${each(range, v => `<div class="${"item"}"><div class="${"content"}"><a class="${"ui label " + escape(v + 1 === page ? "active" : "")}" href="${"/" + escape(v ? v + 1 : "")}">${escape(v + 1)}</a></div>
				</div>`)}</div>`
	: ``}</div>`;
});

/* src\components\ArticleList\index.svelte generated by Svelte v3.37.0 */

const ArticleList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $session, $$unsubscribe_session;
	let { tab } = $$props, { username = false } = $$props;
	let { favorites = false } = $$props;
	let { tag } = $$props;
	let { p } = $$props;
	const { session, page } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);
	let query;
	let articles;
	let articlesCount;

	async function getData() {
		articles = null;

		// TODO do we need some error handling here?
		({ articles, articlesCount } = await get(query, $session.user && $session.user.token));
	}

	if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0) $$bindings.tab(tab);
	if ($$props.username === void 0 && $$bindings.username && username !== void 0) $$bindings.username(username);
	if ($$props.favorites === void 0 && $$bindings.favorites && favorites !== void 0) $$bindings.favorites(favorites);
	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.p === void 0 && $$bindings.p && p !== void 0) $$bindings.p(p);

	 {
		{
			const endpoint = tab === "feed" ? "articles/feed" : "articles";
			const page_size = tab === "feed" ? 5 : 10;
			let params = `limit=${page_size}&offset=${(p - 1) * page_size}`;
			if (tab === "tag") params += `&tag=${tag}`;
			if (tab === "profile") params += `&${favorites ? "favorited" : "author"}=${encodeURIComponent(username)}`;
			query = `${endpoint}?${params}`;
		}
	}

	query && getData();
	$$unsubscribe_session();

	return `<div class="${"ui relaxed divided list"}">${articles
	? `${articles.length === 0
		? `<div class="${"ui label warning"}">No articles are here... yet.
		</div>`
		: `<div class="${"ui three stackable cards"}">${each(articles, article => `${validate_component(ArticlePreview, "ArticlePreview").$$render($$result, { article, user: $session.user }, {}, {})}`)}</div>
			${validate_component(ListPagination, "ListPagination").$$render($$result, { articlesCount, page: p }, {}, {})}`}`
	: `<div class="${"ui active centered inline loader"}"></div>`}</div>`;
});

/* src\components\MainView.svelte generated by Svelte v3.37.0 */

const MainView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $session, $$unsubscribe_session;
	let { tab = "all" } = $$props;
	let { tag = null } = $$props;
	let { p } = $$props;
	const { session } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);

	if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0) $$bindings.tab(tab);
	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.p === void 0 && $$bindings.p && p !== void 0) $$bindings.p(p);
	$$unsubscribe_session();

	return `<div class="${"ui tabular menu"}">${$session.user
	? `<a href="${"."}" class="${"item " + escape(tab === "feed" ? "active" : "")}">Your feed
        </a>`
	: `<a href="${"/login"}" class="${"item"}">Your Feed
        </a>`}

        <a href="${"."}" class="${"item " + escape(tab === "all" ? "active" : "")}">Global Feed
        </a>
        <a href="${"."}" class="${"item " + escape(tag === "all" ? "active" : "")}">Popular tags
        </a>
    ${tag
	? `<a href="${"."}" class="${"item " + escape(tab === "tag" ? "active" : "")}"><i class="${"ui tag icon"}"></i> ${escape(tag)}</a>`
	: ``}</div>
    ${validate_component(ArticleList, "ArticleList").$$render($$result, { p, tab, tag }, {}, {})}`;
});

/* src\components\Tags.svelte generated by Svelte v3.37.0 */

const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { tags } = $$props;
	const dispatch = createEventDispatcher();
	if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);

	return `${tags
	? `<div class="${"ui horizontal list"}">${each(tags, tag => `<div class="${"item"}"><div class="${"ui tag label"}"><a href="${"."}" class="${""}">${escape(tag)}
					</a></div>
			</div>`)}</div>`
	: `<div>Loading Tags...</div>`}`;
});

/* src\components\Home.svelte generated by Svelte v3.37.0 */

const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { p = 1 } = $$props;
	let tab;
	let tag;
	let tags;

	onMount(async () => {
		({ tags } = await get("tags"));
	});

	if ($$props.p === void 0 && $$bindings.p && p !== void 0) $$bindings.p(p);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${($$result.head += `${($$result.title = `<title>Conduit</title>`, "")}`, "")}

<div class="${"ui grid"}"><div class="${"fifteen wide column"}">${validate_component(MainView, "MainView").$$render(
			$$result,
			{ p, tag, tab },
			{
				tab: $$value => {
					tab = $$value;
					$$settled = false;
				}
			},
			{}
		)}</div>
        <div class="${"column"}"><p>Popular Tags</p>
            ${validate_component(Tags, "Tags").$$render($$result, { tags }, {}, {})}</div></div>`;
	} while (!$$settled);

	return $$rendered;
});

/* src\routes\index.svelte generated by Svelte v3.37.0 */

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Home, "Home").$$render($$result, { p: 1 }, {}, {})}`;
});

/* src\components\ListErrors.svelte generated by Svelte v3.37.0 */

const ListErrors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { errors } = $$props;
	if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0) $$bindings.errors(errors);

	return `${errors
	? `<div class="${"ui error message"}">${each(Object.keys(errors), key => `<div class="${"item"}">${escape(key)} ${escape(errors[key])}</div>`)}</div>`
	: ``}`;
});

/* src\routes\register.svelte generated by Svelte v3.37.0 */

const css = {
	code: ".image.svelte-il2o5g{margin-top:-100px}.column.svelte-il2o5g{max-width:450px}",
	map: "{\"version\":3,\"file\":\"register.svelte\",\"sources\":[\"register.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    import { goto, stores } from '@sapper/app';\\r\\n    import ListErrors from '../components/ListErrors.svelte';\\r\\n    import { post } from 'utils.js';\\r\\n\\r\\n    const { session } = stores();\\r\\n\\r\\n    let username = '';\\r\\n    let email = '';\\r\\n    let password = '';\\r\\n    let errors = null;\\r\\n\\r\\n    async function submit(event) {\\r\\n        const response = await post(`auth/register`, { username, email, password });\\r\\n\\r\\n        // TODO handle network errors\\r\\n        errors = response.errors;\\r\\n\\r\\n        if (response.user) {\\r\\n            $session.user = response.user;\\r\\n            goto('/');\\r\\n        }\\r\\n    }\\r\\n\\r\\n    jQuery(document)\\r\\n            .ready(function() {\\r\\n                jQuery('.ui.form')\\r\\n                        .form({\\r\\n                            fields: {\\r\\n                                username: {\\r\\n                                    identifier  : 'username',\\r\\n                                    rules: [\\r\\n                                        {\\r\\n                                            type   : 'empty',\\r\\n                                            prompt : 'Please enter your username'\\r\\n                                        },\\r\\n                                        {\\r\\n                                            type   : 'length[3]',\\r\\n                                            prompt : 'Please enter a valid username'\\r\\n                                        }\\r\\n                                    ]\\r\\n                                },\\r\\n                                email: {\\r\\n                                    identifier  : 'email',\\r\\n                                    rules: [\\r\\n                                        {\\r\\n                                            type   : 'empty',\\r\\n                                            prompt : 'Please enter your e-mail'\\r\\n                                        },\\r\\n                                        {\\r\\n                                            type   : 'email',\\r\\n                                            prompt : 'Please enter a valid e-mail'\\r\\n                                        }\\r\\n                                    ]\\r\\n                                },\\r\\n                                password: {\\r\\n                                    identifier  : 'password',\\r\\n                                    rules: [\\r\\n                                        {\\r\\n                                            type   : 'empty',\\r\\n                                            prompt : 'Please enter your password'\\r\\n                                        },\\r\\n                                        {\\r\\n                                            type   : 'length[6]',\\r\\n                                            prompt : 'Your password must be at least 6 characters'\\r\\n                                        }\\r\\n                                    ]\\r\\n                                }\\r\\n                            }\\r\\n                        })\\r\\n                ;\\r\\n            })\\r\\n    ;\\r\\n</script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title>Sign up • Conduit</title>\\r\\n</svelte:head>\\r\\n\\r\\n<style type=\\\"text/css\\\">\\r\\n    .image {\\r\\n        margin-top: -100px;\\r\\n    }\\r\\n    .column {\\r\\n        max-width: 450px;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<div class=\\\"ui middle aligned center aligned grid\\\">\\r\\n    <div class=\\\"column\\\">\\r\\n        <h2 class=\\\"ui teal image header\\\">\\r\\n            <img src=\\\"logo.png\\\" class=\\\"image\\\" alt=\\\"logo\\\">\\r\\n            <div class=\\\"content\\\">\\r\\n                Sign up\\r\\n            </div>\\r\\n        </h2>\\r\\n\\r\\n        <div class=\\\"ui message\\\">\\r\\n            Have an account? <a href=\\\"/login\\\">Sign In</a>\\r\\n        </div>\\r\\n\\r\\n        <ListErrors {errors}/>\\r\\n\\r\\n        <form on:submit|preventDefault={submit} class=\\\"ui large form\\\">\\r\\n            <div class=\\\"ui stacked segment\\\">\\r\\n                <div class=\\\"field\\\">\\r\\n                    <div class=\\\"ui left icon input\\\">\\r\\n                        <i class=\\\"ui user icon\\\"></i>\\r\\n                        <input type=\\\"text\\\" name=\\\"username\\\" placeholder=\\\"Your Name\\\" bind:value={username}>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"field\\\">\\r\\n                    <div class=\\\"ui left icon input\\\">\\r\\n                        <i class=\\\"ui mail icon\\\"></i>\\r\\n                        <input type=\\\"text\\\" name=\\\"email\\\" placeholder=\\\"E-mail address\\\" bind:value={email}>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"field\\\">\\r\\n                    <div class=\\\"ui left icon input\\\">\\r\\n                        <i class=\\\"lock icon\\\"></i>\\r\\n                        <input type=\\\"password\\\" name=\\\"password\\\" placeholder=\\\"Password\\\" bind:value={password}>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <button class=\\\"ui fluid large teal submit button\\\" type=\\\"submit\\\" disabled='{!email || !password}'>Sign Up</button>\\r\\n            </div>\\r\\n\\r\\n            <div class=\\\"ui error message\\\"></div>\\r\\n\\r\\n        </form>\\r\\n\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n\\r\\n\"],\"names\":[],\"mappings\":\"AAgFI,MAAM,cAAC,CAAC,AACJ,UAAU,CAAE,MAAM,AACtB,CAAC,AACD,OAAO,cAAC,CAAC,AACL,SAAS,CAAE,KAAK,AACpB,CAAC\"}"
};

const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $session, $$unsubscribe_session;
	const { session } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);
	let username = "";
	let email = "";
	let password = "";
	let errors = null;

	jQuery(document).ready(function () {
		jQuery(".ui.form").form({
			fields: {
				username: {
					identifier: "username",
					rules: [
						{
							type: "empty",
							prompt: "Please enter your username"
						},
						{
							type: "length[3]",
							prompt: "Please enter a valid username"
						}
					]
				},
				email: {
					identifier: "email",
					rules: [
						{
							type: "empty",
							prompt: "Please enter your e-mail"
						},
						{
							type: "email",
							prompt: "Please enter a valid e-mail"
						}
					]
				},
				password: {
					identifier: "password",
					rules: [
						{
							type: "empty",
							prompt: "Please enter your password"
						},
						{
							type: "length[6]",
							prompt: "Your password must be at least 6 characters"
						}
					]
				}
			}
		});
	});

	$$result.css.add(css);
	$$unsubscribe_session();

	return `${($$result.head += `${($$result.title = `<title>Sign up • Conduit</title>`, "")}`, "")}



<div class="${"ui middle aligned center aligned grid"}"><div class="${"column svelte-il2o5g"}"><h2 class="${"ui teal image header svelte-il2o5g"}"><img src="${"logo.png"}" class="${"image svelte-il2o5g"}" alt="${"logo"}">
            <div class="${"content"}">Sign up
            </div></h2>

        <div class="${"ui message"}">Have an account? <a href="${"/login"}">Sign In</a></div>

        ${validate_component(ListErrors, "ListErrors").$$render($$result, { errors }, {}, {})}

        <form class="${"ui large form"}"><div class="${"ui stacked segment"}"><div class="${"field"}"><div class="${"ui left icon input"}"><i class="${"ui user icon"}"></i>
                        <input type="${"text"}" name="${"username"}" placeholder="${"Your Name"}"${add_attribute("value", username, 1)}></div></div>
                <div class="${"field"}"><div class="${"ui left icon input"}"><i class="${"ui mail icon"}"></i>
                        <input type="${"text"}" name="${"email"}" placeholder="${"E-mail address"}"${add_attribute("value", email, 1)}></div></div>
                <div class="${"field"}"><div class="${"ui left icon input"}"><i class="${"lock icon"}"></i>
                        <input type="${"password"}" name="${"password"}" placeholder="${"Password"}"${add_attribute("value", password, 1)}></div></div>
                <button class="${"ui fluid large teal submit button"}" type="${"submit"}" ${ "disabled" }>Sign Up</button></div>

            <div class="${"ui error message"}"></div></form></div></div>`;
});

/* src\routes\_SettingsForm.svelte generated by Svelte v3.37.0 */

const SettingsForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { inProgress } = $$props,
		{ image } = $$props,
		{ username } = $$props,
		{ bio } = $$props,
		{ email } = $$props,
		{ password = "" } = $$props;

	const dispatch = createEventDispatcher();

	if ($$props.inProgress === void 0 && $$bindings.inProgress && inProgress !== void 0) $$bindings.inProgress(inProgress);
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.username === void 0 && $$bindings.username && username !== void 0) $$bindings.username(username);
	if ($$props.bio === void 0 && $$bindings.bio && bio !== void 0) $$bindings.bio(bio);
	if ($$props.email === void 0 && $$bindings.email && email !== void 0) $$bindings.email(email);
	if ($$props.password === void 0 && $$bindings.password && password !== void 0) $$bindings.password(password);

	return `<form class="${"ui large form"}"><div class="${"ui clearing segment"}"><div class="${"field"}"><input name="${"image"}" type="${"text"}" placeholder="${"URL of profile picture"}"${add_attribute("value", image, 1)}></div>

        <div class="${"field"}"><input name="${"username"}" type="${"text"}" placeholder="${"Username"}"${add_attribute("value", username, 1)}></div>

        <div class="${"field"}"><textarea name="${"bio"}" class="${"form large"}" rows="${"8"}" placeholder="${"Short bio about you"}">${bio || ""}</textarea></div>

        <div class="${"field"}"><input name="${"email"}" type="${"email"}" placeholder="${"Email"}"${add_attribute("value", email, 1)}></div>

        <div class="${"field"}"><input name="${"password"}" type="${"password"}" placeholder="${"New Password"}"${add_attribute("value", password, 1)}></div>

        <button class="${"ui right floated primary button"}" type="${"submit"}" ${inProgress ? "disabled" : ""}>Update Settings
        </button></div></form>`;
});

/* src\routes\settings.svelte generated by Svelte v3.37.0 */

const css$1 = {
	code: ".column.svelte-18h4jma{max-width:450px}",
	map: "{\"version\":3,\"file\":\"settings.svelte\",\"sources\":[\"settings.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    import { goto, stores } from '@sapper/app';\\r\\n    import ListErrors from '../components/ListErrors.svelte';\\r\\n    import SettingsForm from './_SettingsForm.svelte';\\r\\n    import { post } from 'utils.js';\\r\\n\\r\\n    let inProgress;\\r\\n    let errors;\\r\\n\\r\\n    const { session } = stores();\\r\\n\\r\\n    async function logout() {\\r\\n        await post(`auth/logout`);\\r\\n        $session.user = null;\\r\\n        goto('/');\\r\\n    }\\r\\n\\r\\n    async function save(event) {\\r\\n        inProgress = true;\\r\\n\\r\\n        const response = await post(`auth/save`, event.detail);\\r\\n\\r\\n        errors = response.errors;\\r\\n        if (response.user) $session.user = response.user;\\r\\n\\r\\n        inProgress = false;\\r\\n    }\\r\\n</script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title>Settings • Conduit</title>\\r\\n</svelte:head>\\r\\n\\r\\n<style type=\\\"text/css\\\">\\r\\n    .column {\\r\\n        max-width: 450px;\\r\\n    }\\r\\n</style>\\r\\n    <div class=\\\"ui container medium one column\\\">\\r\\n        <div class=\\\"ui center aligned row\\\">\\r\\n            <div class=\\\"row\\\">\\r\\n\\r\\n                <h1 class=\\\"ui text centered\\\">Your Settings</h1>\\r\\n\\r\\n                <ListErrors {errors}/>\\r\\n\\r\\n                <SettingsForm on:save={save} {...$session.user} {inProgress}/>\\r\\n\\r\\n                <hr />\\r\\n\\r\\n            </div>\\r\\n        </div>\\r\\n            <div class=\\\"right attached row\\\">\\r\\n\\r\\n                <div class=\\\"ui negative basic button right aligned\\\" on:click={logout}>\\r\\n                    Or click here to logout.\\r\\n                </div>\\r\\n            </div>\\r\\n        <br />\\r\\n    </div>\\r\\n\"],\"names\":[],\"mappings\":\"AAkCI,OAAO,eAAC,CAAC,AACL,SAAS,CAAE,KAAK,AACpB,CAAC\"}"
};

const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $session, $$unsubscribe_session;
	let inProgress;
	let errors;
	const { session } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);

	$$result.css.add(css$1);
	$$unsubscribe_session();

	return `${($$result.head += `${($$result.title = `<title>Settings • Conduit</title>`, "")}`, "")}


    <div class="${"ui container medium one column svelte-18h4jma"}"><div class="${"ui center aligned row"}"><div class="${"row"}"><h1 class="${"ui text centered"}">Your Settings</h1>

                ${validate_component(ListErrors, "ListErrors").$$render($$result, { errors }, {}, {})}

                ${validate_component(SettingsForm, "SettingsForm").$$render($$result, Object.assign($session.user, { inProgress }), {}, {})}

                <hr></div></div>
            <div class="${"right attached row"}"><div class="${"ui negative basic button right aligned"}">Or click here to logout.
                </div></div>
        <br></div>`;
});

/* src\routes\article\_ArticleMeta.svelte generated by Svelte v3.37.0 */

const ArticleMeta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let canModify;
	let { article } = $$props;
	let { user } = $$props;

	if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);
	canModify = user && article.author.username === user.username;

	return `<div class="${"ui horizontal list"}"><div class="${"item top aligned"}"><a href="${"/profile/@" + escape(article.author.username)}"><img class="${"ui top aligned mini circular image"}"${add_attribute("src", article.author.image, 0)}${add_attribute("alt", article.author.username, 0)}></a></div>
	<div class="${"item top aligned"}"><a href="${"/profile/@" + escape(article.author.username)}" class="${"ui sub header"}">${escape(article.author.username)}</a>
		${escape(new Date(article.createdAt).toDateString())}</div>

	${canModify
	? `<div class="${"item"}"><a href="${"/editor/" + escape(article.slug)}" class="${"ui secondary button"}"><i class="${"ui icon edit"}"></i> Edit Article
			</a></div>
		<div class="${"item"}"><button class="${"ui button warning"}"><i class="${"ui icon trash"}"></i> Delete Article
			</button></div>`
	: ``}</div>`;
});

/* src\routes\article\_CommentInput.svelte generated by Svelte v3.37.0 */

const CommentInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { slug } = $$props;
	let { user } = $$props;
	const dispatch = createEventDispatcher();

	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);

	return `<form class="${"ui form"}"><div class="${"field"}"><textarea placeholder="${"Write a comment..."}" rows="${"2"}">${ ""}</textarea></div>
	<button type="${"submit"}" class="${"ui green middle aligned labeled submit icon button"}"><i class="${"icon edit"}"></i> Post Comment
	</button></form>`;
});

/* src\routes\article\_Comment.svelte generated by Svelte v3.37.0 */

const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { comment } = $$props;
	let { slug } = $$props;
	let { user } = $$props;
	const dispatch = createEventDispatcher();

	if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0) $$bindings.comment(comment);
	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);

	return `<div class="${"comment"}"><a href="${"@" + escape(comment.author.username)}" class="${"avatar"}"><img${add_attribute("src", comment.author.image, 0)}${add_attribute("alt", comment.author.username, 0)}></a>

	<div class="${"content"}"><a class="${"author"}" href="${"/@" + escape(comment.author.username)}">${escape(comment.author.username)}</a>
		<div class="${"metadata"}"><span class="${"date"}">${escape(new Date(comment.createdAt).toDateString())}</span></div>
		<div class="${"text"}">${escape(comment.body)}</div>
		${user && comment.author.username === user.username
	? `<i class="${"icon trash"}"></i>
				<i class="${"icon reply"}"></i>`
	: ``}</div></div>`;
});

/* src\routes\article\_CommentContainer.svelte generated by Svelte v3.37.0 */

const CommentContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { comments } = $$props;
	let { errors } = $$props;
	let { slug } = $$props;
	let { user } = $$props;
	if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0) $$bindings.comments(comments);
	if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0) $$bindings.errors(errors);
	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);

	return `<div class="${"ui comments"}">${user
	? `<div>${validate_component(ListErrors, "ListErrors").$$render($$result, { errors }, {}, {})}
			${validate_component(CommentInput, "CommentInput").$$render($$result, { slug, user }, {}, {})}</div>`
	: `<p><a href="${"/login"}">Sign in</a> or <a href="${"/register"}">sign up</a> to add comments on this article.
		</p>`}

	${each(comments, (comment, i) => `${validate_component(Comment, "Comment").$$render($$result, { comment, slug, user }, {}, {})}`)}</div>`;
});

/* src\routes\article\[slug].svelte generated by Svelte v3.37.0 */

async function preload({ params }) {
	const { slug } = params;
	const { article } = await get(`articles/${params.slug}`, null);
	return { article, slug };
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let markup;
	let $session, $$unsubscribe_session;
	let { article } = $$props;
	let { slug } = $$props;
	const { session } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);
	let commentErrors, comments = []; // we'll lazy-load these in onMount

	onMount(() => {
		get(`articles/${slug}/comments`).then(res => {
			comments = res.comments;
		});
	});

	if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	markup = marked(article.body);
	$$unsubscribe_session();

	return `${($$result.head += `${($$result.title = `<title>${escape(article.title)}</title>`, "")}`, "")}

<div class="${"ui one column grid container"}"><div class="${"ui column"}"><div class="${"ui header huge"}">${escape(article.title)}</div>
			${validate_component(ArticleMeta, "ArticleMeta").$$render($$result, { article, user: $session.user }, {}, {})}</div>

	<div class="${"ui container"}"><div class="${"row"}">${markup}</div>

		<div class="${"row"}"><div class="${"ui horizontal list"}">${each(article.tagList, tag => `<div class="${"item"}"><div class="${"ui tag label"}">${escape(tag)}</div>
				</div>`)}</div></div>

		<hr>

		<div class="${"article-actions"}"></div>

		<div class="${"row"}">${validate_component(CommentContainer, "CommentContainer").$$render(
		$$result,
		{
			slug,
			comments,
			user: $session.user,
			errors: commentErrors
		},
		{},
		{}
	)}</div></div></div>`;
});

/* src\routes\profile\index.svelte generated by Svelte v3.37.0 */

function preload$1({ params }, { user }) {
	if (user) {
		this.redirect(302, `/profile/@${user.username}`);
	} else {
		this.redirect(302, `/`);
	}
}

const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return ``;
});

/* src\routes\profile\[user]\_Profile.svelte generated by Svelte v3.37.0 */

const Profile$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let isUser;
	let { profile } = $$props;
	let { favorites } = $$props;
	let { user } = $$props;

	if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0) $$bindings.profile(profile);
	if ($$props.favorites === void 0 && $$bindings.favorites && favorites !== void 0) $$bindings.favorites(favorites);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);
	isUser = user && profile.username === user.username;

	return `${($$result.head += `${($$result.title = `<title>${escape(profile.username)} • Conduit</title>`, "")}`, "")}

<div class="${"ui one column grid"}"><div class="${"inverted grey column centered"}"><img${add_attribute("src", profile.image, 0)} class="${"ui image tiny centered"}"${add_attribute("alt", profile.username, 0)}>
					<div class="${"ui header medium centered"}">${escape(profile.username)}</div>
					<div class="${"ui header small centered"}">${escape(profile.bio)}</div>
		            <div class="${"right floated column"}">
					${isUser
	? `<a href="${"/settings"}" class="${"ui small button right floated"}"><i class="${"ui icon cog"}"></i> Edit Profile Settings
						</a>`
	: `<button class="${"ui small button right floated " + escape(profile.following ? "secondary" : "")}"><i class="${"icon plus"}"></i>
							${escape(profile.following ? "Unfollow" : "Follow")} ${escape(profile.username)}</button>`}</div></div>

	<div class="${"column"}"><div class="${"ui tabular menu"}"><a href="${"/profile/@" + escape(profile.username)}" class="${"item " + escape(favorites ? "" : "active")}">My Articles</a>
		<a class="${"item " + escape(favorites ? "active" : "")}" href="${"/profile/@" + escape(profile.username) + "/favorites"}">Favorited Articles</a></div>
	${validate_component(ArticleList, "ArticleList").$$render(
		$$result,
		{
			tab: "profile",
			username: profile.username,
			favorites
		},
		{},
		{}
	)}</div></div>`;
});

/* src\routes\profile\[user]\index.svelte generated by Svelte v3.37.0 */

async function preload$2({ params }, { user }) {
	const username = params.user.slice(1);
	const { profile } = await get(`profiles/${username}`, user && user.token);

	return {
		profile,
		favorites: params.view === "favorites"
	};
}

const U5Buseru5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $session, $$unsubscribe_session;
	let { profile } = $$props;
	let { favorites } = $$props;
	const { session } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);
	if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0) $$bindings.profile(profile);
	if ($$props.favorites === void 0 && $$bindings.favorites && favorites !== void 0) $$bindings.favorites(favorites);
	$$unsubscribe_session();

	return `${($$result.head += `${($$result.title = `<title>${escape(profile.username)} • Conduit</title>`, "")}`, "")}

${validate_component(Profile$1, "Profile").$$render($$result, { profile, favorites, user: $session.user }, {}, {})}`;
});

/* src\routes\profile\[user]\[view].svelte generated by Svelte v3.37.0 */

async function preload$3({ params }, { user }) {
	const username = params.user.slice(1);
	const { profile } = await get(`profiles/${username}`, user && user.token);

	return {
		profile,
		favorites: params.view === "favorites"
	};
}

const U5Bviewu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $session, $$unsubscribe_session;
	let { profile } = $$props, { favorites } = $$props;
	const { session } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);
	if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0) $$bindings.profile(profile);
	if ($$props.favorites === void 0 && $$bindings.favorites && favorites !== void 0) $$bindings.favorites(favorites);
	$$unsubscribe_session();

	return `${($$result.head += `${($$result.title = `<title>${escape(profile.username)} • Conduit</title>`, "")}`, "")}

${validate_component(Profile$1, "Profile").$$render($$result, { profile, favorites, user: $session.user }, {}, {})}`;
});

/* src\routes\editor\_Editor.svelte generated by Svelte v3.37.0 */

const css$2 = {
	code: ".ui.container.svelte-11j5l9g{max-width:500px}",
	map: "{\"version\":3,\"file\":\"_Editor.svelte\",\"sources\":[\"_Editor.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\timport { goto, stores } from '@sapper/app';\\r\\n\\timport ListErrors from '../../components/ListErrors.svelte';\\r\\n\\timport * as api from 'api.js';\\r\\n\\r\\n\\texport let article;\\r\\n\\texport let slug;\\r\\n\\r\\n\\tlet inProgress = false;\\r\\n\\tlet errors;\\r\\n\\r\\n\\tconst { session } = stores();\\r\\n\\r\\n\\tfunction addTag(input) {\\r\\n\\t\\tarticle.tagList = [...article.tagList, input.value];\\r\\n\\t\\tinput.value = '';\\r\\n\\t}\\r\\n\\r\\n\\tfunction remove(index) {\\r\\n\\t\\tarticle.tagList = [...article.tagList.slice(0, index), ...article.tagList.slice(index + 1)];\\r\\n\\t}\\r\\n\\r\\n\\tasync function publish() {\\r\\n\\t\\tinProgress = true;\\r\\n\\r\\n\\t\\tconst response = await (slug\\r\\n\\t\\t\\t? api.put(`articles/${slug}`, { article }, $session.user && $session.user.token)\\r\\n\\t\\t\\t: api.post('articles', { article }, $session.user && $session.user.token));\\r\\n\\r\\n\\t\\tif (response.article) {\\r\\n\\t\\t\\tgoto(`/article/${response.article.slug}`);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tinProgress = false;\\r\\n\\t}\\r\\n\\r\\n\\tfunction enter(node, callback) {\\r\\n\\t\\tfunction onkeydown(event) {\\r\\n\\t\\t\\tif (event.which === 13) callback(node);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\tnode.addEventListener('keydown', onkeydown);\\r\\n\\r\\n\\t\\treturn {\\r\\n\\t\\t\\tdestroy() {\\r\\n\\t\\t\\t\\tnode.removeEventListener('keydown', onkeydown);\\r\\n\\t\\t\\t}\\r\\n\\t\\t};\\r\\n\\t}\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n.ui.container {\\r\\n\\tmax-width: 500px;\\r\\n}\\r\\n</style>\\r\\n\\r\\n\\t<div class=\\\"ui container\\\">\\r\\n\\t\\t<div class=\\\"row\\\">\\r\\n\\t\\t\\t\\t<ListErrors {errors}/>\\r\\n\\r\\n\\t\\t\\t\\t<div class=\\\"ui form\\\">\\r\\n\\t\\t\\t\\t\\t<div class=\\\"field\\\">\\r\\n\\t\\t\\t\\t\\t\\t<div class=\\\"field\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<input class=\\\"ui input\\\" type=\\\"text\\\" placeholder=\\\"Article Title\\\" bind:value={article.title}>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t<div class=\\\"field\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<input class=\\\"ui input\\\" type=\\\"text\\\" placeholder=\\\"Gist\\\" bind:value={article.description}>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t<div class=\\\"field\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<textarea class=\\\"\\\" rows=\\\"8\\\" placeholder=\\\"Body in markdown\\\" bind:value={article.body}/>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t<div class=\\\"field\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<input class=\\\"input\\\" type=\\\"text\\\" placeholder=\\\"Enter tags\\\" use:enter={(value) => addTag(value)} />\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t<div class=\\\"field\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"ui horizontal list\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{#each article.tagList as tag, i}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"item\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"ui tag label\\\"  on:click='{() => remove(i)}'>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{tag}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t<button class=\\\"ui button primary\\\" type=\\\"submit\\\" disabled={inProgress} on:click={publish}>\\r\\n\\t\\t\\t\\t\\t\\t\\tPublish Article\\r\\n\\t\\t\\t\\t\\t\\t</button>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\"],\"names\":[],\"mappings\":\"AAoDA,GAAG,UAAU,eAAC,CAAC,AACd,SAAS,CAAE,KAAK,AACjB,CAAC\"}"
};

const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $session, $$unsubscribe_session;
	let { article } = $$props;
	let { slug } = $$props;
	let errors;
	const { session } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);

	if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	$$result.css.add(css$2);
	$$unsubscribe_session();

	return `<div class="${"ui container svelte-11j5l9g"}"><div class="${"row"}">${validate_component(ListErrors, "ListErrors").$$render($$result, { errors }, {}, {})}

				<div class="${"ui form"}"><div class="${"field"}"><div class="${"field"}"><input class="${"ui input"}" type="${"text"}" placeholder="${"Article Title"}"${add_attribute("value", article.title, 1)}></div>

						<div class="${"field"}"><input class="${"ui input"}" type="${"text"}" placeholder="${"Gist"}"${add_attribute("value", article.description, 1)}></div>

						<div class="${"field"}"><textarea class="${""}" rows="${"8"}" placeholder="${"Body in markdown"}">${article.body || ""}</textarea></div>

						<div class="${"field"}"><input class="${"input"}" type="${"text"}" placeholder="${"Enter tags"}"></div>

						<div class="${"field"}"><div class="${"ui horizontal list"}">${each(article.tagList, (tag, i) => `<div class="${"item"}"><div class="${"ui tag label"}">${escape(tag)}</div>
									</div>`)}</div></div>

						<button class="${"ui button primary"}" type="${"submit"}" ${ ""}>Publish Article
						</button></div></div></div></div>`;
});

/* src\routes\editor\index.svelte generated by Svelte v3.37.0 */

const Editor_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let article = {
		title: "",
		description: "",
		body: "",
		tagList: []
	};

	return `${validate_component(Editor, "Editor").$$render($$result, { article }, {}, {})}`;
});

/* src\routes\editor\[slug].svelte generated by Svelte v3.37.0 */

async function preload$4({ params }) {
	const { slug } = params;
	const { article } = await get(`articles/${slug}`, null);
	return { article, slug };
}

const U5Bslugu5D$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { slug } = $$props;
	let { article } = $$props;
	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
	return `${validate_component(Editor, "Editor").$$render($$result, { article, slug }, {}, {})}`;
});

/* src\routes\about.svelte generated by Svelte v3.37.0 */

const css$3 = {
	code: ".my.svelte-1651u6z{color:blue}.ui.header.red.my.svelte-1651u6z{color:yellow}",
	map: "{\"version\":3,\"file\":\"about.svelte\",\"sources\":[\"about.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { onMount } from 'svelte';\\n\\tonMount(() => {\\n\\t\\tjQuery('.selection').dropdown();\\n\\t});\\n\\n\\tconst toggleRed = () => {\\n\\t\\tjQuery('.header').toggleClass('my');\\n\\t}\\n\\n</script>\\n\\n<style>\\n\\t.my {\\n\\t\\tcolor: blue;\\n\\t}\\n\\t.ui.header.red.my {\\n\\t\\tcolor: yellow;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>About</title>\\n</svelte:head>\\n<div class=\\\"ui header red my\\\" >Great success!</div>\\n<div class='ui button centered' on:click={toggleRed}>Click Me</div>\\n\\n<figure>\\n\\t<img class=\\\"ui image small\\\" alt='Borat' src='great-success.png'>\\n\\t<figcaption>HIGH FIVE!</figcaption>\\n</figure>\\n<figure>\\n\\t<img class=\\\"ui image large\\\" alt='Tech' src='./images/about2.png'>\\n\\t<figcaption>Graph</figcaption>\\n</figure>\\n<figure>\\n\\t<img class=\\\"ui image large\\\" alt='Tech' src='./images/about3.png'>\\n\\t<figcaption>Stack</figcaption>\\n</figure>\\n\\n<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>\\n\\n\\n<div class=\\\"ui multiple search selection dropdown\\\">\\n\\t<input type=\\\"hidden\\\" name=\\\"country\\\" />\\n\\t<i class=\\\"dropdown icon\\\"></i>\\n\\t<div class=\\\"default text\\\">Select Country</div>\\n\\t<div class=\\\"menu\\\">\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"af\\\"><i class=\\\"af flag\\\"></i>Afghanistan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ax\\\"><i class=\\\"ax flag\\\"></i>Aland Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"al\\\"><i class=\\\"al flag\\\"></i>Albania</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"dz\\\"><i class=\\\"dz flag\\\"></i>Algeria</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"as\\\"><i class=\\\"as flag\\\"></i>American Samoa</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ad\\\"><i class=\\\"ad flag\\\"></i>Andorra</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ao\\\"><i class=\\\"ao flag\\\"></i>Angola</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ai\\\"><i class=\\\"ai flag\\\"></i>Anguilla</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ag\\\"><i class=\\\"ag flag\\\"></i>Antigua</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ar\\\"><i class=\\\"ar flag\\\"></i>Argentina</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"am\\\"><i class=\\\"am flag\\\"></i>Armenia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"aw\\\"><i class=\\\"aw flag\\\"></i>Aruba</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"au\\\"><i class=\\\"au flag\\\"></i>Australia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"at\\\"><i class=\\\"at flag\\\"></i>Austria</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"az\\\"><i class=\\\"az flag\\\"></i>Azerbaijan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bs\\\"><i class=\\\"bs flag\\\"></i>Bahamas</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bh\\\"><i class=\\\"bh flag\\\"></i>Bahrain</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bd\\\"><i class=\\\"bd flag\\\"></i>Bangladesh</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bb\\\"><i class=\\\"bb flag\\\"></i>Barbados</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"by\\\"><i class=\\\"by flag\\\"></i>Belarus</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"be\\\"><i class=\\\"be flag\\\"></i>Belgium</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bz\\\"><i class=\\\"bz flag\\\"></i>Belize</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bj\\\"><i class=\\\"bj flag\\\"></i>Benin</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bm\\\"><i class=\\\"bm flag\\\"></i>Bermuda</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bt\\\"><i class=\\\"bt flag\\\"></i>Bhutan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bo\\\"><i class=\\\"bo flag\\\"></i>Bolivia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ba\\\"><i class=\\\"ba flag\\\"></i>Bosnia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bw\\\"><i class=\\\"bw flag\\\"></i>Botswana</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bv\\\"><i class=\\\"bv flag\\\"></i>Bouvet Island</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"br\\\"><i class=\\\"br flag\\\"></i>Brazil</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"vg\\\"><i class=\\\"vg flag\\\"></i>British Virgin Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bn\\\"><i class=\\\"bn flag\\\"></i>Brunei</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bg\\\"><i class=\\\"bg flag\\\"></i>Bulgaria</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bf\\\"><i class=\\\"bf flag\\\"></i>Burkina Faso</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mm\\\"><i class=\\\"mm flag\\\"></i>Burma</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"bi\\\"><i class=\\\"bi flag\\\"></i>Burundi</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tc\\\"><i class=\\\"tc flag\\\"></i>Caicos Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"kh\\\"><i class=\\\"kh flag\\\"></i>Cambodia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cm\\\"><i class=\\\"cm flag\\\"></i>Cameroon</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ca\\\"><i class=\\\"ca flag\\\"></i>Canada</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cv\\\"><i class=\\\"cv flag\\\"></i>Cape Verde</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ky\\\"><i class=\\\"ky flag\\\"></i>Cayman Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cf\\\"><i class=\\\"cf flag\\\"></i>Central African Republic</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"td\\\"><i class=\\\"td flag\\\"></i>Chad</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cl\\\"><i class=\\\"cl flag\\\"></i>Chile</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cn\\\"><i class=\\\"cn flag\\\"></i>China</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cx\\\"><i class=\\\"cx flag\\\"></i>Christmas Island</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cc\\\"><i class=\\\"cc flag\\\"></i>Cocos Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"co\\\"><i class=\\\"co flag\\\"></i>Colombia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"km\\\"><i class=\\\"km flag\\\"></i>Comoros</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cg\\\"><i class=\\\"cg flag\\\"></i>Congo Brazzaville</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cd\\\"><i class=\\\"cd flag\\\"></i>Congo</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ck\\\"><i class=\\\"ck flag\\\"></i>Cook Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cr\\\"><i class=\\\"cr flag\\\"></i>Costa Rica</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ci\\\"><i class=\\\"ci flag\\\"></i>Cote Divoire</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"hr\\\"><i class=\\\"hr flag\\\"></i>Croatia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cu\\\"><i class=\\\"cu flag\\\"></i>Cuba</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cy\\\"><i class=\\\"cy flag\\\"></i>Cyprus</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cz\\\"><i class=\\\"cz flag\\\"></i>Czech Republic</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"dk\\\"><i class=\\\"dk flag\\\"></i>Denmark</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"dj\\\"><i class=\\\"dj flag\\\"></i>Djibouti</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"dm\\\"><i class=\\\"dm flag\\\"></i>Dominica</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"do\\\"><i class=\\\"do flag\\\"></i>Dominican Republic</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ec\\\"><i class=\\\"ec flag\\\"></i>Ecuador</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"eg\\\"><i class=\\\"eg flag\\\"></i>Egypt</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sv\\\"><i class=\\\"sv flag\\\"></i>El Salvador</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gb\\\"><i class=\\\"gb flag\\\"></i>England</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gq\\\"><i class=\\\"gq flag\\\"></i>Equatorial Guinea</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"er\\\"><i class=\\\"er flag\\\"></i>Eritrea</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ee\\\"><i class=\\\"ee flag\\\"></i>Estonia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"et\\\"><i class=\\\"et flag\\\"></i>Ethiopia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"eu\\\"><i class=\\\"eu flag\\\"></i>European Union</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"fk\\\"><i class=\\\"fk flag\\\"></i>Falkland Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"fo\\\"><i class=\\\"fo flag\\\"></i>Faroe Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"fj\\\"><i class=\\\"fj flag\\\"></i>Fiji</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"fi\\\"><i class=\\\"fi flag\\\"></i>Finland</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"fr\\\"><i class=\\\"fr flag\\\"></i>France</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gf\\\"><i class=\\\"gf flag\\\"></i>French Guiana</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pf\\\"><i class=\\\"pf flag\\\"></i>French Polynesia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tf\\\"><i class=\\\"tf flag\\\"></i>French Territories</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ga\\\"><i class=\\\"ga flag\\\"></i>Gabon</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gm\\\"><i class=\\\"gm flag\\\"></i>Gambia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ge\\\"><i class=\\\"ge flag\\\"></i>Georgia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"de\\\"><i class=\\\"de flag\\\"></i>Germany</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gh\\\"><i class=\\\"gh flag\\\"></i>Ghana</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gi\\\"><i class=\\\"gi flag\\\"></i>Gibraltar</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gr\\\"><i class=\\\"gr flag\\\"></i>Greece</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gl\\\"><i class=\\\"gl flag\\\"></i>Greenland</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gd\\\"><i class=\\\"gd flag\\\"></i>Grenada</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gp\\\"><i class=\\\"gp flag\\\"></i>Guadeloupe</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gu\\\"><i class=\\\"gu flag\\\"></i>Guam</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gt\\\"><i class=\\\"gt flag\\\"></i>Guatemala</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gw\\\"><i class=\\\"gw flag\\\"></i>Guinea-Bissau</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gn\\\"><i class=\\\"gn flag\\\"></i>Guinea</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gy\\\"><i class=\\\"gy flag\\\"></i>Guyana</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ht\\\"><i class=\\\"ht flag\\\"></i>Haiti</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"hm\\\"><i class=\\\"hm flag\\\"></i>Heard Island</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"hn\\\"><i class=\\\"hn flag\\\"></i>Honduras</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"hk\\\"><i class=\\\"hk flag\\\"></i>Hong Kong</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"hu\\\"><i class=\\\"hu flag\\\"></i>Hungary</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"is\\\"><i class=\\\"is flag\\\"></i>Iceland</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"in\\\"><i class=\\\"in flag\\\"></i>India</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"io\\\"><i class=\\\"io flag\\\"></i>Indian Ocean Territory</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"id\\\"><i class=\\\"id flag\\\"></i>Indonesia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ir\\\"><i class=\\\"ir flag\\\"></i>Iran</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"iq\\\"><i class=\\\"iq flag\\\"></i>Iraq</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ie\\\"><i class=\\\"ie flag\\\"></i>Ireland</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"il\\\"><i class=\\\"il flag\\\"></i>Israel</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"it\\\"><i class=\\\"it flag\\\"></i>Italy</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"jm\\\"><i class=\\\"jm flag\\\"></i>Jamaica</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"jp\\\"><i class=\\\"jp flag\\\"></i>Japan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"jo\\\"><i class=\\\"jo flag\\\"></i>Jordan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"kz\\\"><i class=\\\"kz flag\\\"></i>Kazakhstan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ke\\\"><i class=\\\"ke flag\\\"></i>Kenya</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ki\\\"><i class=\\\"ki flag\\\"></i>Kiribati</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"kw\\\"><i class=\\\"kw flag\\\"></i>Kuwait</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"kg\\\"><i class=\\\"kg flag\\\"></i>Kyrgyzstan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"la\\\"><i class=\\\"la flag\\\"></i>Laos</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"lv\\\"><i class=\\\"lv flag\\\"></i>Latvia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"lb\\\"><i class=\\\"lb flag\\\"></i>Lebanon</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ls\\\"><i class=\\\"ls flag\\\"></i>Lesotho</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"lr\\\"><i class=\\\"lr flag\\\"></i>Liberia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ly\\\"><i class=\\\"ly flag\\\"></i>Libya</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"li\\\"><i class=\\\"li flag\\\"></i>Liechtenstein</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"lt\\\"><i class=\\\"lt flag\\\"></i>Lithuania</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"lu\\\"><i class=\\\"lu flag\\\"></i>Luxembourg</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mo\\\"><i class=\\\"mo flag\\\"></i>Macau</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mk\\\"><i class=\\\"mk flag\\\"></i>Macedonia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mg\\\"><i class=\\\"mg flag\\\"></i>Madagascar</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mw\\\"><i class=\\\"mw flag\\\"></i>Malawi</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"my\\\"><i class=\\\"my flag\\\"></i>Malaysia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mv\\\"><i class=\\\"mv flag\\\"></i>Maldives</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ml\\\"><i class=\\\"ml flag\\\"></i>Mali</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mt\\\"><i class=\\\"mt flag\\\"></i>Malta</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mh\\\"><i class=\\\"mh flag\\\"></i>Marshall Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mq\\\"><i class=\\\"mq flag\\\"></i>Martinique</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mr\\\"><i class=\\\"mr flag\\\"></i>Mauritania</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mu\\\"><i class=\\\"mu flag\\\"></i>Mauritius</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"yt\\\"><i class=\\\"yt flag\\\"></i>Mayotte</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mx\\\"><i class=\\\"mx flag\\\"></i>Mexico</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"fm\\\"><i class=\\\"fm flag\\\"></i>Micronesia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"md\\\"><i class=\\\"md flag\\\"></i>Moldova</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mc\\\"><i class=\\\"mc flag\\\"></i>Monaco</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mn\\\"><i class=\\\"mn flag\\\"></i>Mongolia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"me\\\"><i class=\\\"me flag\\\"></i>Montenegro</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ms\\\"><i class=\\\"ms flag\\\"></i>Montserrat</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ma\\\"><i class=\\\"ma flag\\\"></i>Morocco</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mz\\\"><i class=\\\"mz flag\\\"></i>Mozambique</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"na\\\"><i class=\\\"na flag\\\"></i>Namibia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"nr\\\"><i class=\\\"nr flag\\\"></i>Nauru</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"np\\\"><i class=\\\"np flag\\\"></i>Nepal</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"an\\\"><i class=\\\"an flag\\\"></i>Netherlands Antilles</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"nl\\\"><i class=\\\"nl flag\\\"></i>Netherlands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"nc\\\"><i class=\\\"nc flag\\\"></i>New Caledonia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pg\\\"><i class=\\\"pg flag\\\"></i>New Guinea</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"nz\\\"><i class=\\\"nz flag\\\"></i>New Zealand</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ni\\\"><i class=\\\"ni flag\\\"></i>Nicaragua</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ne\\\"><i class=\\\"ne flag\\\"></i>Niger</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ng\\\"><i class=\\\"ng flag\\\"></i>Nigeria</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"nu\\\"><i class=\\\"nu flag\\\"></i>Niue</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"nf\\\"><i class=\\\"nf flag\\\"></i>Norfolk Island</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"kp\\\"><i class=\\\"kp flag\\\"></i>North Korea</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"mp\\\"><i class=\\\"mp flag\\\"></i>Northern Mariana Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"no\\\"><i class=\\\"no flag\\\"></i>Norway</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"om\\\"><i class=\\\"om flag\\\"></i>Oman</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pk\\\"><i class=\\\"pk flag\\\"></i>Pakistan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pw\\\"><i class=\\\"pw flag\\\"></i>Palau</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ps\\\"><i class=\\\"ps flag\\\"></i>Palestine</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pa\\\"><i class=\\\"pa flag\\\"></i>Panama</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"py\\\"><i class=\\\"py flag\\\"></i>Paraguay</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pe\\\"><i class=\\\"pe flag\\\"></i>Peru</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ph\\\"><i class=\\\"ph flag\\\"></i>Philippines</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pn\\\"><i class=\\\"pn flag\\\"></i>Pitcairn Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pl\\\"><i class=\\\"pl flag\\\"></i>Poland</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pt\\\"><i class=\\\"pt flag\\\"></i>Portugal</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pr\\\"><i class=\\\"pr flag\\\"></i>Puerto Rico</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"qa\\\"><i class=\\\"qa flag\\\"></i>Qatar</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"re\\\"><i class=\\\"re flag\\\"></i>Reunion</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ro\\\"><i class=\\\"ro flag\\\"></i>Romania</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ru\\\"><i class=\\\"ru flag\\\"></i>Russia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"rw\\\"><i class=\\\"rw flag\\\"></i>Rwanda</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sh\\\"><i class=\\\"sh flag\\\"></i>Saint Helena</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"kn\\\"><i class=\\\"kn flag\\\"></i>Saint Kitts and Nevis</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"lc\\\"><i class=\\\"lc flag\\\"></i>Saint Lucia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"pm\\\"><i class=\\\"pm flag\\\"></i>Saint Pierre</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"vc\\\"><i class=\\\"vc flag\\\"></i>Saint Vincent</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ws\\\"><i class=\\\"ws flag\\\"></i>Samoa</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sm\\\"><i class=\\\"sm flag\\\"></i>San Marino</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"gs\\\"><i class=\\\"gs flag\\\"></i>Sandwich Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"st\\\"><i class=\\\"st flag\\\"></i>Sao Tome</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sa\\\"><i class=\\\"sa flag\\\"></i>Saudi Arabia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sn\\\"><i class=\\\"sn flag\\\"></i>Senegal</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"cs\\\"><i class=\\\"cs flag\\\"></i>Serbia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"rs\\\"><i class=\\\"rs flag\\\"></i>Serbia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sc\\\"><i class=\\\"sc flag\\\"></i>Seychelles</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sl\\\"><i class=\\\"sl flag\\\"></i>Sierra Leone</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sg\\\"><i class=\\\"sg flag\\\"></i>Singapore</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sk\\\"><i class=\\\"sk flag\\\"></i>Slovakia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"si\\\"><i class=\\\"si flag\\\"></i>Slovenia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sb\\\"><i class=\\\"sb flag\\\"></i>Solomon Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"so\\\"><i class=\\\"so flag\\\"></i>Somalia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"za\\\"><i class=\\\"za flag\\\"></i>South Africa</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"kr\\\"><i class=\\\"kr flag\\\"></i>South Korea</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"es\\\"><i class=\\\"es flag\\\"></i>Spain</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"lk\\\"><i class=\\\"lk flag\\\"></i>Sri Lanka</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sd\\\"><i class=\\\"sd flag\\\"></i>Sudan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sr\\\"><i class=\\\"sr flag\\\"></i>Suriname</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sj\\\"><i class=\\\"sj flag\\\"></i>Svalbard</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sz\\\"><i class=\\\"sz flag\\\"></i>Swaziland</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"se\\\"><i class=\\\"se flag\\\"></i>Sweden</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ch\\\"><i class=\\\"ch flag\\\"></i>Switzerland</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"sy\\\"><i class=\\\"sy flag\\\"></i>Syria</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tw\\\"><i class=\\\"tw flag\\\"></i>Taiwan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tj\\\"><i class=\\\"tj flag\\\"></i>Tajikistan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tz\\\"><i class=\\\"tz flag\\\"></i>Tanzania</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"th\\\"><i class=\\\"th flag\\\"></i>Thailand</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tl\\\"><i class=\\\"tl flag\\\"></i>Timorleste</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tg\\\"><i class=\\\"tg flag\\\"></i>Togo</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tk\\\"><i class=\\\"tk flag\\\"></i>Tokelau</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"to\\\"><i class=\\\"to flag\\\"></i>Tonga</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tt\\\"><i class=\\\"tt flag\\\"></i>Trinidad</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tn\\\"><i class=\\\"tn flag\\\"></i>Tunisia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tr\\\"><i class=\\\"tr flag\\\"></i>Turkey</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tm\\\"><i class=\\\"tm flag\\\"></i>Turkmenistan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"tv\\\"><i class=\\\"tv flag\\\"></i>Tuvalu</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ug\\\"><i class=\\\"ug flag\\\"></i>Uganda</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ua\\\"><i class=\\\"ua flag\\\"></i>Ukraine</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ae\\\"><i class=\\\"ae flag\\\"></i>United Arab Emirates</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"us\\\"><i class=\\\"us flag\\\"></i>United States</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"uy\\\"><i class=\\\"uy flag\\\"></i>Uruguay</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"um\\\"><i class=\\\"um flag\\\"></i>Us Minor Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"vi\\\"><i class=\\\"vi flag\\\"></i>Us Virgin Islands</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"uz\\\"><i class=\\\"uz flag\\\"></i>Uzbekistan</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"vu\\\"><i class=\\\"vu flag\\\"></i>Vanuatu</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"va\\\"><i class=\\\"va flag\\\"></i>Vatican City</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ve\\\"><i class=\\\"ve flag\\\"></i>Venezuela</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"vn\\\"><i class=\\\"vn flag\\\"></i>Vietnam</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"wf\\\"><i class=\\\"wf flag\\\"></i>Wallis and Futuna</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"eh\\\"><i class=\\\"eh flag\\\"></i>Western Sahara</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"ye\\\"><i class=\\\"ye flag\\\"></i>Yemen</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"zm\\\"><i class=\\\"zm flag\\\"></i>Zambia</div>\\n\\t\\t<div class=\\\"item\\\" data-value=\\\"zw\\\"><i class=\\\"zw flag\\\"></i>Zimbabwe</div>\\n\\t</div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAaC,GAAG,eAAC,CAAC,AACJ,KAAK,CAAE,IAAI,AACZ,CAAC,AACD,GAAG,OAAO,IAAI,GAAG,eAAC,CAAC,AAClB,KAAK,CAAE,MAAM,AACd,CAAC\"}"
};

const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	onMount(() => {
		jQuery(".selection").dropdown();
	});

	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>About</title>`, "")}`, "")}
<div class="${"ui header red my svelte-1651u6z"}">Great success!</div>
<div class="${"ui button centered"}">Click Me</div>

<figure><img class="${"ui image small"}" alt="${"Borat"}" src="${"great-success.png"}">
	<figcaption>HIGH FIVE!</figcaption></figure>
<figure><img class="${"ui image large"}" alt="${"Tech"}" src="${"./images/about2.png"}">
	<figcaption>Graph</figcaption></figure>
<figure><img class="${"ui image large"}" alt="${"Tech"}" src="${"./images/about3.png"}">
	<figcaption>Stack</figcaption></figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>


<div class="${"ui multiple search selection dropdown"}"><input type="${"hidden"}" name="${"country"}">
	<i class="${"dropdown icon"}"></i>
	<div class="${"default text"}">Select Country</div>
	<div class="${"menu"}"><div class="${"item"}" data-value="${"af"}"><i class="${"af flag"}"></i>Afghanistan</div>
		<div class="${"item"}" data-value="${"ax"}"><i class="${"ax flag"}"></i>Aland Islands</div>
		<div class="${"item"}" data-value="${"al"}"><i class="${"al flag"}"></i>Albania</div>
		<div class="${"item"}" data-value="${"dz"}"><i class="${"dz flag"}"></i>Algeria</div>
		<div class="${"item"}" data-value="${"as"}"><i class="${"as flag"}"></i>American Samoa</div>
		<div class="${"item"}" data-value="${"ad"}"><i class="${"ad flag"}"></i>Andorra</div>
		<div class="${"item"}" data-value="${"ao"}"><i class="${"ao flag"}"></i>Angola</div>
		<div class="${"item"}" data-value="${"ai"}"><i class="${"ai flag"}"></i>Anguilla</div>
		<div class="${"item"}" data-value="${"ag"}"><i class="${"ag flag"}"></i>Antigua</div>
		<div class="${"item"}" data-value="${"ar"}"><i class="${"ar flag"}"></i>Argentina</div>
		<div class="${"item"}" data-value="${"am"}"><i class="${"am flag"}"></i>Armenia</div>
		<div class="${"item"}" data-value="${"aw"}"><i class="${"aw flag"}"></i>Aruba</div>
		<div class="${"item"}" data-value="${"au"}"><i class="${"au flag"}"></i>Australia</div>
		<div class="${"item"}" data-value="${"at"}"><i class="${"at flag"}"></i>Austria</div>
		<div class="${"item"}" data-value="${"az"}"><i class="${"az flag"}"></i>Azerbaijan</div>
		<div class="${"item"}" data-value="${"bs"}"><i class="${"bs flag"}"></i>Bahamas</div>
		<div class="${"item"}" data-value="${"bh"}"><i class="${"bh flag"}"></i>Bahrain</div>
		<div class="${"item"}" data-value="${"bd"}"><i class="${"bd flag"}"></i>Bangladesh</div>
		<div class="${"item"}" data-value="${"bb"}"><i class="${"bb flag"}"></i>Barbados</div>
		<div class="${"item"}" data-value="${"by"}"><i class="${"by flag"}"></i>Belarus</div>
		<div class="${"item"}" data-value="${"be"}"><i class="${"be flag"}"></i>Belgium</div>
		<div class="${"item"}" data-value="${"bz"}"><i class="${"bz flag"}"></i>Belize</div>
		<div class="${"item"}" data-value="${"bj"}"><i class="${"bj flag"}"></i>Benin</div>
		<div class="${"item"}" data-value="${"bm"}"><i class="${"bm flag"}"></i>Bermuda</div>
		<div class="${"item"}" data-value="${"bt"}"><i class="${"bt flag"}"></i>Bhutan</div>
		<div class="${"item"}" data-value="${"bo"}"><i class="${"bo flag"}"></i>Bolivia</div>
		<div class="${"item"}" data-value="${"ba"}"><i class="${"ba flag"}"></i>Bosnia</div>
		<div class="${"item"}" data-value="${"bw"}"><i class="${"bw flag"}"></i>Botswana</div>
		<div class="${"item"}" data-value="${"bv"}"><i class="${"bv flag"}"></i>Bouvet Island</div>
		<div class="${"item"}" data-value="${"br"}"><i class="${"br flag"}"></i>Brazil</div>
		<div class="${"item"}" data-value="${"vg"}"><i class="${"vg flag"}"></i>British Virgin Islands</div>
		<div class="${"item"}" data-value="${"bn"}"><i class="${"bn flag"}"></i>Brunei</div>
		<div class="${"item"}" data-value="${"bg"}"><i class="${"bg flag"}"></i>Bulgaria</div>
		<div class="${"item"}" data-value="${"bf"}"><i class="${"bf flag"}"></i>Burkina Faso</div>
		<div class="${"item"}" data-value="${"mm"}"><i class="${"mm flag"}"></i>Burma</div>
		<div class="${"item"}" data-value="${"bi"}"><i class="${"bi flag"}"></i>Burundi</div>
		<div class="${"item"}" data-value="${"tc"}"><i class="${"tc flag"}"></i>Caicos Islands</div>
		<div class="${"item"}" data-value="${"kh"}"><i class="${"kh flag"}"></i>Cambodia</div>
		<div class="${"item"}" data-value="${"cm"}"><i class="${"cm flag"}"></i>Cameroon</div>
		<div class="${"item"}" data-value="${"ca"}"><i class="${"ca flag"}"></i>Canada</div>
		<div class="${"item"}" data-value="${"cv"}"><i class="${"cv flag"}"></i>Cape Verde</div>
		<div class="${"item"}" data-value="${"ky"}"><i class="${"ky flag"}"></i>Cayman Islands</div>
		<div class="${"item"}" data-value="${"cf"}"><i class="${"cf flag"}"></i>Central African Republic</div>
		<div class="${"item"}" data-value="${"td"}"><i class="${"td flag"}"></i>Chad</div>
		<div class="${"item"}" data-value="${"cl"}"><i class="${"cl flag"}"></i>Chile</div>
		<div class="${"item"}" data-value="${"cn"}"><i class="${"cn flag"}"></i>China</div>
		<div class="${"item"}" data-value="${"cx"}"><i class="${"cx flag"}"></i>Christmas Island</div>
		<div class="${"item"}" data-value="${"cc"}"><i class="${"cc flag"}"></i>Cocos Islands</div>
		<div class="${"item"}" data-value="${"co"}"><i class="${"co flag"}"></i>Colombia</div>
		<div class="${"item"}" data-value="${"km"}"><i class="${"km flag"}"></i>Comoros</div>
		<div class="${"item"}" data-value="${"cg"}"><i class="${"cg flag"}"></i>Congo Brazzaville</div>
		<div class="${"item"}" data-value="${"cd"}"><i class="${"cd flag"}"></i>Congo</div>
		<div class="${"item"}" data-value="${"ck"}"><i class="${"ck flag"}"></i>Cook Islands</div>
		<div class="${"item"}" data-value="${"cr"}"><i class="${"cr flag"}"></i>Costa Rica</div>
		<div class="${"item"}" data-value="${"ci"}"><i class="${"ci flag"}"></i>Cote Divoire</div>
		<div class="${"item"}" data-value="${"hr"}"><i class="${"hr flag"}"></i>Croatia</div>
		<div class="${"item"}" data-value="${"cu"}"><i class="${"cu flag"}"></i>Cuba</div>
		<div class="${"item"}" data-value="${"cy"}"><i class="${"cy flag"}"></i>Cyprus</div>
		<div class="${"item"}" data-value="${"cz"}"><i class="${"cz flag"}"></i>Czech Republic</div>
		<div class="${"item"}" data-value="${"dk"}"><i class="${"dk flag"}"></i>Denmark</div>
		<div class="${"item"}" data-value="${"dj"}"><i class="${"dj flag"}"></i>Djibouti</div>
		<div class="${"item"}" data-value="${"dm"}"><i class="${"dm flag"}"></i>Dominica</div>
		<div class="${"item"}" data-value="${"do"}"><i class="${"do flag"}"></i>Dominican Republic</div>
		<div class="${"item"}" data-value="${"ec"}"><i class="${"ec flag"}"></i>Ecuador</div>
		<div class="${"item"}" data-value="${"eg"}"><i class="${"eg flag"}"></i>Egypt</div>
		<div class="${"item"}" data-value="${"sv"}"><i class="${"sv flag"}"></i>El Salvador</div>
		<div class="${"item"}" data-value="${"gb"}"><i class="${"gb flag"}"></i>England</div>
		<div class="${"item"}" data-value="${"gq"}"><i class="${"gq flag"}"></i>Equatorial Guinea</div>
		<div class="${"item"}" data-value="${"er"}"><i class="${"er flag"}"></i>Eritrea</div>
		<div class="${"item"}" data-value="${"ee"}"><i class="${"ee flag"}"></i>Estonia</div>
		<div class="${"item"}" data-value="${"et"}"><i class="${"et flag"}"></i>Ethiopia</div>
		<div class="${"item"}" data-value="${"eu"}"><i class="${"eu flag"}"></i>European Union</div>
		<div class="${"item"}" data-value="${"fk"}"><i class="${"fk flag"}"></i>Falkland Islands</div>
		<div class="${"item"}" data-value="${"fo"}"><i class="${"fo flag"}"></i>Faroe Islands</div>
		<div class="${"item"}" data-value="${"fj"}"><i class="${"fj flag"}"></i>Fiji</div>
		<div class="${"item"}" data-value="${"fi"}"><i class="${"fi flag"}"></i>Finland</div>
		<div class="${"item"}" data-value="${"fr"}"><i class="${"fr flag"}"></i>France</div>
		<div class="${"item"}" data-value="${"gf"}"><i class="${"gf flag"}"></i>French Guiana</div>
		<div class="${"item"}" data-value="${"pf"}"><i class="${"pf flag"}"></i>French Polynesia</div>
		<div class="${"item"}" data-value="${"tf"}"><i class="${"tf flag"}"></i>French Territories</div>
		<div class="${"item"}" data-value="${"ga"}"><i class="${"ga flag"}"></i>Gabon</div>
		<div class="${"item"}" data-value="${"gm"}"><i class="${"gm flag"}"></i>Gambia</div>
		<div class="${"item"}" data-value="${"ge"}"><i class="${"ge flag"}"></i>Georgia</div>
		<div class="${"item"}" data-value="${"de"}"><i class="${"de flag"}"></i>Germany</div>
		<div class="${"item"}" data-value="${"gh"}"><i class="${"gh flag"}"></i>Ghana</div>
		<div class="${"item"}" data-value="${"gi"}"><i class="${"gi flag"}"></i>Gibraltar</div>
		<div class="${"item"}" data-value="${"gr"}"><i class="${"gr flag"}"></i>Greece</div>
		<div class="${"item"}" data-value="${"gl"}"><i class="${"gl flag"}"></i>Greenland</div>
		<div class="${"item"}" data-value="${"gd"}"><i class="${"gd flag"}"></i>Grenada</div>
		<div class="${"item"}" data-value="${"gp"}"><i class="${"gp flag"}"></i>Guadeloupe</div>
		<div class="${"item"}" data-value="${"gu"}"><i class="${"gu flag"}"></i>Guam</div>
		<div class="${"item"}" data-value="${"gt"}"><i class="${"gt flag"}"></i>Guatemala</div>
		<div class="${"item"}" data-value="${"gw"}"><i class="${"gw flag"}"></i>Guinea-Bissau</div>
		<div class="${"item"}" data-value="${"gn"}"><i class="${"gn flag"}"></i>Guinea</div>
		<div class="${"item"}" data-value="${"gy"}"><i class="${"gy flag"}"></i>Guyana</div>
		<div class="${"item"}" data-value="${"ht"}"><i class="${"ht flag"}"></i>Haiti</div>
		<div class="${"item"}" data-value="${"hm"}"><i class="${"hm flag"}"></i>Heard Island</div>
		<div class="${"item"}" data-value="${"hn"}"><i class="${"hn flag"}"></i>Honduras</div>
		<div class="${"item"}" data-value="${"hk"}"><i class="${"hk flag"}"></i>Hong Kong</div>
		<div class="${"item"}" data-value="${"hu"}"><i class="${"hu flag"}"></i>Hungary</div>
		<div class="${"item"}" data-value="${"is"}"><i class="${"is flag"}"></i>Iceland</div>
		<div class="${"item"}" data-value="${"in"}"><i class="${"in flag"}"></i>India</div>
		<div class="${"item"}" data-value="${"io"}"><i class="${"io flag"}"></i>Indian Ocean Territory</div>
		<div class="${"item"}" data-value="${"id"}"><i class="${"id flag"}"></i>Indonesia</div>
		<div class="${"item"}" data-value="${"ir"}"><i class="${"ir flag"}"></i>Iran</div>
		<div class="${"item"}" data-value="${"iq"}"><i class="${"iq flag"}"></i>Iraq</div>
		<div class="${"item"}" data-value="${"ie"}"><i class="${"ie flag"}"></i>Ireland</div>
		<div class="${"item"}" data-value="${"il"}"><i class="${"il flag"}"></i>Israel</div>
		<div class="${"item"}" data-value="${"it"}"><i class="${"it flag"}"></i>Italy</div>
		<div class="${"item"}" data-value="${"jm"}"><i class="${"jm flag"}"></i>Jamaica</div>
		<div class="${"item"}" data-value="${"jp"}"><i class="${"jp flag"}"></i>Japan</div>
		<div class="${"item"}" data-value="${"jo"}"><i class="${"jo flag"}"></i>Jordan</div>
		<div class="${"item"}" data-value="${"kz"}"><i class="${"kz flag"}"></i>Kazakhstan</div>
		<div class="${"item"}" data-value="${"ke"}"><i class="${"ke flag"}"></i>Kenya</div>
		<div class="${"item"}" data-value="${"ki"}"><i class="${"ki flag"}"></i>Kiribati</div>
		<div class="${"item"}" data-value="${"kw"}"><i class="${"kw flag"}"></i>Kuwait</div>
		<div class="${"item"}" data-value="${"kg"}"><i class="${"kg flag"}"></i>Kyrgyzstan</div>
		<div class="${"item"}" data-value="${"la"}"><i class="${"la flag"}"></i>Laos</div>
		<div class="${"item"}" data-value="${"lv"}"><i class="${"lv flag"}"></i>Latvia</div>
		<div class="${"item"}" data-value="${"lb"}"><i class="${"lb flag"}"></i>Lebanon</div>
		<div class="${"item"}" data-value="${"ls"}"><i class="${"ls flag"}"></i>Lesotho</div>
		<div class="${"item"}" data-value="${"lr"}"><i class="${"lr flag"}"></i>Liberia</div>
		<div class="${"item"}" data-value="${"ly"}"><i class="${"ly flag"}"></i>Libya</div>
		<div class="${"item"}" data-value="${"li"}"><i class="${"li flag"}"></i>Liechtenstein</div>
		<div class="${"item"}" data-value="${"lt"}"><i class="${"lt flag"}"></i>Lithuania</div>
		<div class="${"item"}" data-value="${"lu"}"><i class="${"lu flag"}"></i>Luxembourg</div>
		<div class="${"item"}" data-value="${"mo"}"><i class="${"mo flag"}"></i>Macau</div>
		<div class="${"item"}" data-value="${"mk"}"><i class="${"mk flag"}"></i>Macedonia</div>
		<div class="${"item"}" data-value="${"mg"}"><i class="${"mg flag"}"></i>Madagascar</div>
		<div class="${"item"}" data-value="${"mw"}"><i class="${"mw flag"}"></i>Malawi</div>
		<div class="${"item"}" data-value="${"my"}"><i class="${"my flag svelte-1651u6z"}"></i>Malaysia</div>
		<div class="${"item"}" data-value="${"mv"}"><i class="${"mv flag"}"></i>Maldives</div>
		<div class="${"item"}" data-value="${"ml"}"><i class="${"ml flag"}"></i>Mali</div>
		<div class="${"item"}" data-value="${"mt"}"><i class="${"mt flag"}"></i>Malta</div>
		<div class="${"item"}" data-value="${"mh"}"><i class="${"mh flag"}"></i>Marshall Islands</div>
		<div class="${"item"}" data-value="${"mq"}"><i class="${"mq flag"}"></i>Martinique</div>
		<div class="${"item"}" data-value="${"mr"}"><i class="${"mr flag"}"></i>Mauritania</div>
		<div class="${"item"}" data-value="${"mu"}"><i class="${"mu flag"}"></i>Mauritius</div>
		<div class="${"item"}" data-value="${"yt"}"><i class="${"yt flag"}"></i>Mayotte</div>
		<div class="${"item"}" data-value="${"mx"}"><i class="${"mx flag"}"></i>Mexico</div>
		<div class="${"item"}" data-value="${"fm"}"><i class="${"fm flag"}"></i>Micronesia</div>
		<div class="${"item"}" data-value="${"md"}"><i class="${"md flag"}"></i>Moldova</div>
		<div class="${"item"}" data-value="${"mc"}"><i class="${"mc flag"}"></i>Monaco</div>
		<div class="${"item"}" data-value="${"mn"}"><i class="${"mn flag"}"></i>Mongolia</div>
		<div class="${"item"}" data-value="${"me"}"><i class="${"me flag"}"></i>Montenegro</div>
		<div class="${"item"}" data-value="${"ms"}"><i class="${"ms flag"}"></i>Montserrat</div>
		<div class="${"item"}" data-value="${"ma"}"><i class="${"ma flag"}"></i>Morocco</div>
		<div class="${"item"}" data-value="${"mz"}"><i class="${"mz flag"}"></i>Mozambique</div>
		<div class="${"item"}" data-value="${"na"}"><i class="${"na flag"}"></i>Namibia</div>
		<div class="${"item"}" data-value="${"nr"}"><i class="${"nr flag"}"></i>Nauru</div>
		<div class="${"item"}" data-value="${"np"}"><i class="${"np flag"}"></i>Nepal</div>
		<div class="${"item"}" data-value="${"an"}"><i class="${"an flag"}"></i>Netherlands Antilles</div>
		<div class="${"item"}" data-value="${"nl"}"><i class="${"nl flag"}"></i>Netherlands</div>
		<div class="${"item"}" data-value="${"nc"}"><i class="${"nc flag"}"></i>New Caledonia</div>
		<div class="${"item"}" data-value="${"pg"}"><i class="${"pg flag"}"></i>New Guinea</div>
		<div class="${"item"}" data-value="${"nz"}"><i class="${"nz flag"}"></i>New Zealand</div>
		<div class="${"item"}" data-value="${"ni"}"><i class="${"ni flag"}"></i>Nicaragua</div>
		<div class="${"item"}" data-value="${"ne"}"><i class="${"ne flag"}"></i>Niger</div>
		<div class="${"item"}" data-value="${"ng"}"><i class="${"ng flag"}"></i>Nigeria</div>
		<div class="${"item"}" data-value="${"nu"}"><i class="${"nu flag"}"></i>Niue</div>
		<div class="${"item"}" data-value="${"nf"}"><i class="${"nf flag"}"></i>Norfolk Island</div>
		<div class="${"item"}" data-value="${"kp"}"><i class="${"kp flag"}"></i>North Korea</div>
		<div class="${"item"}" data-value="${"mp"}"><i class="${"mp flag"}"></i>Northern Mariana Islands</div>
		<div class="${"item"}" data-value="${"no"}"><i class="${"no flag"}"></i>Norway</div>
		<div class="${"item"}" data-value="${"om"}"><i class="${"om flag"}"></i>Oman</div>
		<div class="${"item"}" data-value="${"pk"}"><i class="${"pk flag"}"></i>Pakistan</div>
		<div class="${"item"}" data-value="${"pw"}"><i class="${"pw flag"}"></i>Palau</div>
		<div class="${"item"}" data-value="${"ps"}"><i class="${"ps flag"}"></i>Palestine</div>
		<div class="${"item"}" data-value="${"pa"}"><i class="${"pa flag"}"></i>Panama</div>
		<div class="${"item"}" data-value="${"py"}"><i class="${"py flag"}"></i>Paraguay</div>
		<div class="${"item"}" data-value="${"pe"}"><i class="${"pe flag"}"></i>Peru</div>
		<div class="${"item"}" data-value="${"ph"}"><i class="${"ph flag"}"></i>Philippines</div>
		<div class="${"item"}" data-value="${"pn"}"><i class="${"pn flag"}"></i>Pitcairn Islands</div>
		<div class="${"item"}" data-value="${"pl"}"><i class="${"pl flag"}"></i>Poland</div>
		<div class="${"item"}" data-value="${"pt"}"><i class="${"pt flag"}"></i>Portugal</div>
		<div class="${"item"}" data-value="${"pr"}"><i class="${"pr flag"}"></i>Puerto Rico</div>
		<div class="${"item"}" data-value="${"qa"}"><i class="${"qa flag"}"></i>Qatar</div>
		<div class="${"item"}" data-value="${"re"}"><i class="${"re flag"}"></i>Reunion</div>
		<div class="${"item"}" data-value="${"ro"}"><i class="${"ro flag"}"></i>Romania</div>
		<div class="${"item"}" data-value="${"ru"}"><i class="${"ru flag"}"></i>Russia</div>
		<div class="${"item"}" data-value="${"rw"}"><i class="${"rw flag"}"></i>Rwanda</div>
		<div class="${"item"}" data-value="${"sh"}"><i class="${"sh flag"}"></i>Saint Helena</div>
		<div class="${"item"}" data-value="${"kn"}"><i class="${"kn flag"}"></i>Saint Kitts and Nevis</div>
		<div class="${"item"}" data-value="${"lc"}"><i class="${"lc flag"}"></i>Saint Lucia</div>
		<div class="${"item"}" data-value="${"pm"}"><i class="${"pm flag"}"></i>Saint Pierre</div>
		<div class="${"item"}" data-value="${"vc"}"><i class="${"vc flag"}"></i>Saint Vincent</div>
		<div class="${"item"}" data-value="${"ws"}"><i class="${"ws flag"}"></i>Samoa</div>
		<div class="${"item"}" data-value="${"sm"}"><i class="${"sm flag"}"></i>San Marino</div>
		<div class="${"item"}" data-value="${"gs"}"><i class="${"gs flag"}"></i>Sandwich Islands</div>
		<div class="${"item"}" data-value="${"st"}"><i class="${"st flag"}"></i>Sao Tome</div>
		<div class="${"item"}" data-value="${"sa"}"><i class="${"sa flag"}"></i>Saudi Arabia</div>
		<div class="${"item"}" data-value="${"sn"}"><i class="${"sn flag"}"></i>Senegal</div>
		<div class="${"item"}" data-value="${"cs"}"><i class="${"cs flag"}"></i>Serbia</div>
		<div class="${"item"}" data-value="${"rs"}"><i class="${"rs flag"}"></i>Serbia</div>
		<div class="${"item"}" data-value="${"sc"}"><i class="${"sc flag"}"></i>Seychelles</div>
		<div class="${"item"}" data-value="${"sl"}"><i class="${"sl flag"}"></i>Sierra Leone</div>
		<div class="${"item"}" data-value="${"sg"}"><i class="${"sg flag"}"></i>Singapore</div>
		<div class="${"item"}" data-value="${"sk"}"><i class="${"sk flag"}"></i>Slovakia</div>
		<div class="${"item"}" data-value="${"si"}"><i class="${"si flag"}"></i>Slovenia</div>
		<div class="${"item"}" data-value="${"sb"}"><i class="${"sb flag"}"></i>Solomon Islands</div>
		<div class="${"item"}" data-value="${"so"}"><i class="${"so flag"}"></i>Somalia</div>
		<div class="${"item"}" data-value="${"za"}"><i class="${"za flag"}"></i>South Africa</div>
		<div class="${"item"}" data-value="${"kr"}"><i class="${"kr flag"}"></i>South Korea</div>
		<div class="${"item"}" data-value="${"es"}"><i class="${"es flag"}"></i>Spain</div>
		<div class="${"item"}" data-value="${"lk"}"><i class="${"lk flag"}"></i>Sri Lanka</div>
		<div class="${"item"}" data-value="${"sd"}"><i class="${"sd flag"}"></i>Sudan</div>
		<div class="${"item"}" data-value="${"sr"}"><i class="${"sr flag"}"></i>Suriname</div>
		<div class="${"item"}" data-value="${"sj"}"><i class="${"sj flag"}"></i>Svalbard</div>
		<div class="${"item"}" data-value="${"sz"}"><i class="${"sz flag"}"></i>Swaziland</div>
		<div class="${"item"}" data-value="${"se"}"><i class="${"se flag"}"></i>Sweden</div>
		<div class="${"item"}" data-value="${"ch"}"><i class="${"ch flag"}"></i>Switzerland</div>
		<div class="${"item"}" data-value="${"sy"}"><i class="${"sy flag"}"></i>Syria</div>
		<div class="${"item"}" data-value="${"tw"}"><i class="${"tw flag"}"></i>Taiwan</div>
		<div class="${"item"}" data-value="${"tj"}"><i class="${"tj flag"}"></i>Tajikistan</div>
		<div class="${"item"}" data-value="${"tz"}"><i class="${"tz flag"}"></i>Tanzania</div>
		<div class="${"item"}" data-value="${"th"}"><i class="${"th flag"}"></i>Thailand</div>
		<div class="${"item"}" data-value="${"tl"}"><i class="${"tl flag"}"></i>Timorleste</div>
		<div class="${"item"}" data-value="${"tg"}"><i class="${"tg flag"}"></i>Togo</div>
		<div class="${"item"}" data-value="${"tk"}"><i class="${"tk flag"}"></i>Tokelau</div>
		<div class="${"item"}" data-value="${"to"}"><i class="${"to flag"}"></i>Tonga</div>
		<div class="${"item"}" data-value="${"tt"}"><i class="${"tt flag"}"></i>Trinidad</div>
		<div class="${"item"}" data-value="${"tn"}"><i class="${"tn flag"}"></i>Tunisia</div>
		<div class="${"item"}" data-value="${"tr"}"><i class="${"tr flag"}"></i>Turkey</div>
		<div class="${"item"}" data-value="${"tm"}"><i class="${"tm flag"}"></i>Turkmenistan</div>
		<div class="${"item"}" data-value="${"tv"}"><i class="${"tv flag"}"></i>Tuvalu</div>
		<div class="${"item"}" data-value="${"ug"}"><i class="${"ug flag"}"></i>Uganda</div>
		<div class="${"item"}" data-value="${"ua"}"><i class="${"ua flag"}"></i>Ukraine</div>
		<div class="${"item"}" data-value="${"ae"}"><i class="${"ae flag"}"></i>United Arab Emirates</div>
		<div class="${"item"}" data-value="${"us"}"><i class="${"us flag"}"></i>United States</div>
		<div class="${"item"}" data-value="${"uy"}"><i class="${"uy flag"}"></i>Uruguay</div>
		<div class="${"item"}" data-value="${"um"}"><i class="${"um flag"}"></i>Us Minor Islands</div>
		<div class="${"item"}" data-value="${"vi"}"><i class="${"vi flag"}"></i>Us Virgin Islands</div>
		<div class="${"item"}" data-value="${"uz"}"><i class="${"uz flag"}"></i>Uzbekistan</div>
		<div class="${"item"}" data-value="${"vu"}"><i class="${"vu flag"}"></i>Vanuatu</div>
		<div class="${"item"}" data-value="${"va"}"><i class="${"va flag"}"></i>Vatican City</div>
		<div class="${"item"}" data-value="${"ve"}"><i class="${"ve flag"}"></i>Venezuela</div>
		<div class="${"item"}" data-value="${"vn"}"><i class="${"vn flag"}"></i>Vietnam</div>
		<div class="${"item"}" data-value="${"wf"}"><i class="${"wf flag"}"></i>Wallis and Futuna</div>
		<div class="${"item"}" data-value="${"eh"}"><i class="${"eh flag"}"></i>Western Sahara</div>
		<div class="${"item"}" data-value="${"ye"}"><i class="${"ye flag"}"></i>Yemen</div>
		<div class="${"item"}" data-value="${"zm"}"><i class="${"zm flag"}"></i>Zambia</div>
		<div class="${"item"}" data-value="${"zw"}"><i class="${"zw flag"}"></i>Zimbabwe</div></div></div>`;
});

/* src\routes\login.svelte generated by Svelte v3.37.0 */

const css$4 = {
	code: ".image.svelte-il2o5g{margin-top:-100px}.column.svelte-il2o5g{max-width:450px}",
	map: "{\"version\":3,\"file\":\"login.svelte\",\"sources\":[\"login.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    import { goto, stores } from '@sapper/app';\\r\\n    import ListErrors from '../components/ListErrors.svelte';\\r\\n    import { post } from 'utils.js';\\r\\n\\r\\n    const { session } = stores();\\r\\n\\r\\n    let email = '';\\r\\n    let password = '';\\r\\n    let errors = null;\\r\\n\\r\\n    async function submit(event) {\\r\\n        const response = await post(`/auth/login`, { email, password });\\r\\n\\r\\n        // TODO handle network errors\\r\\n        errors = {};\\r\\n        if (response.errors) errors = response.errors;\\r\\n        if (errors||true) errors[\\\"my\\\"] = \\\"Another my error.\\\"\\r\\n\\r\\n        if (response.user) {\\r\\n            $session.user = response.user;\\r\\n            goto('/');\\r\\n        }\\r\\n    }\\r\\n    jQuery(document)\\r\\n            .ready(function() {\\r\\n                jQuery('.ui.form')\\r\\n                        .form({\\r\\n                            fields: {\\r\\n                                email: {\\r\\n                                    identifier  : 'email',\\r\\n                                    rules: [\\r\\n                                        {\\r\\n                                            type   : 'empty',\\r\\n                                            prompt : 'Please enter your e-mail'\\r\\n                                        },\\r\\n                                        {\\r\\n                                            type   : 'email',\\r\\n                                            prompt : 'Please enter a valid e-mail'\\r\\n                                        }\\r\\n                                    ]\\r\\n                                },\\r\\n                                password: {\\r\\n                                    identifier  : 'password',\\r\\n                                    rules: [\\r\\n                                        {\\r\\n                                            type   : 'empty',\\r\\n                                            prompt : 'Please enter your password'\\r\\n                                        },\\r\\n                                        {\\r\\n                                            type   : 'length[6]',\\r\\n                                            prompt : 'Your password must be at least 6 characters'\\r\\n                                        }\\r\\n                                    ]\\r\\n                                }\\r\\n                            }\\r\\n                        })\\r\\n                ;\\r\\n            })\\r\\n    ;\\r\\n\\r\\n</script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title>Sign in • Conduit</title>\\r\\n</svelte:head>\\r\\n\\r\\n<style type=\\\"text/css\\\">\\r\\n    .image {\\r\\n        margin-top: -100px;\\r\\n    }\\r\\n    .column {\\r\\n        max-width: 450px;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<div class=\\\"ui middle aligned center aligned grid\\\">\\r\\n    <div class=\\\"column\\\">\\r\\n        <h2 class=\\\"ui teal image header\\\">\\r\\n            <img src=\\\"logo.png\\\" class=\\\"image\\\" alt=\\\"logo\\\">\\r\\n            <div class=\\\"content\\\">\\r\\n                Log-in to your account\\r\\n            </div>\\r\\n        </h2>\\r\\n\\r\\n        <ListErrors {errors}/>\\r\\n\\r\\n        <form on:submit|preventDefault={submit} class=\\\"ui large form\\\">\\r\\n            <div class=\\\"ui stacked segment\\\">\\r\\n                <div class=\\\"field\\\">\\r\\n                    <div class=\\\"ui left icon input\\\">\\r\\n                        <i class=\\\"ui mail icon\\\"></i>\\r\\n                        <input type=\\\"text\\\" name=\\\"email\\\" placeholder=\\\"E-mail address\\\" bind:value={email}>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"field\\\">\\r\\n                    <div class=\\\"ui left icon input\\\">\\r\\n                        <i class=\\\"lock icon\\\"></i>\\r\\n                        <input type=\\\"password\\\" name=\\\"password\\\" placeholder=\\\"Password\\\" bind:value={password}>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <button class=\\\"ui fluid large teal submit button\\\" type=\\\"submit\\\" disabled='{!email || !password}'>Log In</button>\\r\\n            </div>\\r\\n\\r\\n            <div class=\\\"ui error message\\\"></div>\\r\\n\\r\\n        </form>\\r\\n\\r\\n        <div class=\\\"ui message\\\">\\r\\n            New to us? <a href=\\\"register\\\">Sign Up</a>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n\\r\\n\"],\"names\":[],\"mappings\":\"AAoEI,MAAM,cAAC,CAAC,AACJ,UAAU,CAAE,MAAM,AACtB,CAAC,AACD,OAAO,cAAC,CAAC,AACL,SAAS,CAAE,KAAK,AACpB,CAAC\"}"
};

const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $session, $$unsubscribe_session;
	const { session } = stores$1();
	validate_store(session, "session");
	$$unsubscribe_session = subscribe(session, value => $session = value);
	let email = "";
	let password = "";
	let errors = null;

	jQuery(document).ready(function () {
		jQuery(".ui.form").form({
			fields: {
				email: {
					identifier: "email",
					rules: [
						{
							type: "empty",
							prompt: "Please enter your e-mail"
						},
						{
							type: "email",
							prompt: "Please enter a valid e-mail"
						}
					]
				},
				password: {
					identifier: "password",
					rules: [
						{
							type: "empty",
							prompt: "Please enter your password"
						},
						{
							type: "length[6]",
							prompt: "Your password must be at least 6 characters"
						}
					]
				}
			}
		});
	});

	$$result.css.add(css$4);
	$$unsubscribe_session();

	return `${($$result.head += `${($$result.title = `<title>Sign in • Conduit</title>`, "")}`, "")}



<div class="${"ui middle aligned center aligned grid"}"><div class="${"column svelte-il2o5g"}"><h2 class="${"ui teal image header svelte-il2o5g"}"><img src="${"logo.png"}" class="${"image svelte-il2o5g"}" alt="${"logo"}">
            <div class="${"content"}">Log-in to your account
            </div></h2>

        ${validate_component(ListErrors, "ListErrors").$$render($$result, { errors }, {}, {})}

        <form class="${"ui large form"}"><div class="${"ui stacked segment"}"><div class="${"field"}"><div class="${"ui left icon input"}"><i class="${"ui mail icon"}"></i>
                        <input type="${"text"}" name="${"email"}" placeholder="${"E-mail address"}"${add_attribute("value", email, 1)}></div></div>
                <div class="${"field"}"><div class="${"ui left icon input"}"><i class="${"lock icon"}"></i>
                        <input type="${"password"}" name="${"password"}" placeholder="${"Password"}"${add_attribute("value", password, 1)}></div></div>
                <button class="${"ui fluid large teal submit button"}" type="${"submit"}" ${ "disabled" }>Log In</button></div>

            <div class="${"ui error message"}"></div></form>

        <div class="${"ui message"}">New to us? <a href="${"register"}">Sign Up</a></div></div></div>`;
});

/* src\routes\blog\index.svelte generated by Svelte v3.37.0 */

function preload$5({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);

	return `${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}

<div class="${"ui header medium"}">Recent posts</div>

<div class="${"ui grid stackable two column"}">${each(posts, post => `
		<div class="${"ui column"}"><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></div>`)}</div>`;
});

/* src\routes\blog\[slug].svelte generated by Svelte v3.37.0 */

const css$5 = {
	code: ".content.svelte-p14cnj h2{font-size:1.4em;font-weight:500}.content.svelte-p14cnj pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-p14cnj pre code{background-color:transparent;padding:0}.content.svelte-p14cnj ul{line-height:1.5}.content.svelte-p14cnj li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload({ params, query }) {\\n\\t\\t// the `slug` parameter is available because\\n\\t\\t// this file is called [slug].svelte\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\n\\t\\tconst data = await res.json();\\n\\n\\t\\tif (res.status === 200) {\\n\\t\\t\\treturn { post: data };\\n\\t\\t} else {\\n\\t\\t\\tthis.error(res.status, data.message);\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let post;\\n</script>\\n\\n<style>\\n\\t/*\\n\\t\\tBy default, CSS is locally scoped to the component,\\n\\t\\tand any unused styles are dead-code-eliminated.\\n\\t\\tIn this page, Svelte can't know which elements are\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\n\\t\\tso we have to use the :global(...) modifier to target\\n\\t\\tall elements inside .content\\n\\n\\t\\tLeave as is: don't know how done in sui.\\n\\t*/\\n\\t.content :global(h2) {\\n\\t\\tfont-size: 1.4em;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.content :global(pre) {\\n\\t\\tbackground-color: #f9f9f9;\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\n\\t\\tpadding: 0.5em;\\n\\t\\tborder-radius: 2px;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.content :global(pre) :global(code) {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.content :global(ul) {\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n\\t.content :global(li) {\\n\\t\\t\\t margin: 0 0 0.5em 0;\\n\\t\\t }\\n</style>\\n\\n<svelte:head>\\n\\t<title>{post.title}</title>\\n</svelte:head>\\n\\n<div class=\\\"ui card\\\">\\n<div class=\\\"ui header centered vertically padded\\\">{post.title}</div>\\n\\n<div class='content'>\\n\\t{@html post.html}\\n</div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA8BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACnB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload$6({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$5);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<div class="${"ui card"}"><div class="${"ui header centered vertically padded"}">${escape(post.title)}</div>

<div class="${"content svelte-p14cnj"}">${post.html}</div></div>`;
});

/* src\routes\[p].svelte generated by Svelte v3.37.0 */

function preload$7({ params }) {
	return { p: +params.p };
}

const U5Bpu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { p } = $$props;
	if ($$props.p === void 0 && $$bindings.p && p !== void 0) $$bindings.p(p);
	return `${validate_component(Home, "Home").$$render($$result, { p }, {}, {})}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// auth/register.js
			pattern: /^\/auth\/register\/?$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// auth/logout.js
			pattern: /^\/auth\/logout\/?$/,
			handlers: route_1,
			params: () => ({})
		},

		{
			// auth/login.js
			pattern: /^\/auth\/login\/?$/,
			handlers: route_2,
			params: () => ({})
		},

		{
			// auth/save.js
			pattern: /^\/auth\/save\/?$/,
			handlers: route_3,
			params: () => ({})
		},

		{
			// auth/user.js
			pattern: /^\/auth\/user\/?$/,
			handlers: route_4,
			params: () => ({})
		},

		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_5,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?)\.json$/,
			handlers: route_6,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes }
			]
		},

		{
			// register.svelte
			pattern: /^\/register\/?$/,
			parts: [
				{ name: "register", file: "register.svelte", component: Register }
			]
		},

		{
			// settings.svelte
			pattern: /^\/settings\/?$/,
			parts: [
				{ name: "settings", file: "settings.svelte", component: Settings }
			]
		},

		{
			// article/[slug].svelte
			pattern: /^\/article\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "article_$slug", file: "article/[slug].svelte", component: U5Bslugu5D, preload: preload, params: match => ({ slug: d(match[1]) }) }
			]
		},

		{
			// profile/index.svelte
			pattern: /^\/profile\/?$/,
			parts: [
				{ name: "profile", file: "profile/index.svelte", component: Profile, preload: preload$1 }
			]
		},

		{
			// profile/[user]/index.svelte
			pattern: /^\/profile\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "profile_$user", file: "profile/[user]/index.svelte", component: U5Buseru5D, preload: preload$2, params: match => ({ user: d(match[1]) }) }
			]
		},

		{
			// profile/[user]/[view].svelte
			pattern: /^\/profile\/([^\/]+?)\/([^\/]+?)\/?$/,
			parts: [
				null,
				null,
				{ name: "profile_$user$93_$91view", file: "profile/[user]/[view].svelte", component: U5Bviewu5D, preload: preload$3, params: match => ({ user: d(match[1]), view: d(match[2]) }) }
			]
		},

		{
			// editor/index.svelte
			pattern: /^\/editor\/?$/,
			parts: [
				{ name: "editor", file: "editor/index.svelte", component: Editor_1 }
			]
		},

		{
			// editor/[slug].svelte
			pattern: /^\/editor\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "editor_$slug", file: "editor/[slug].svelte", component: U5Bslugu5D$1, preload: preload$4, params: match => ({ slug: d(match[1]) }) }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// login.svelte
			pattern: /^\/login\/?$/,
			parts: [
				{ name: "login", file: "login.svelte", component: Login }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Blog, preload: preload$5 }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: U5Bslugu5D$2, preload: preload$6, params: match => ({ slug: d(match[1]) }) }
			]
		},

		{
			// [p].svelte
			pattern: /^\/([^\/]+?)\/?$/,
			parts: [
				{ name: "$p", file: "[p].svelte", component: U5Bpu5D, preload: preload$7, params: match => ({ p: d(match[1]) }) }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/build";

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  (assets => () => assets)(JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8')));

	const template =  (str => () => str)(read_template(build_dir));

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  'Internal server error';

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'max-age=600');

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		let session;
		try {
			session = await session_getter(req, res);
		} catch (err) {
			return bail(req, res, err);
		}

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				opts = Object.assign({}, opts);

				const include_credentials = (
					opts.credentials === 'include' ||
					opts.credentials !== 'omit' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
				);

				if (include_credentials) {
					opts.headers = Object.assign({}, opts.headers);

					const cookies = Object.assign(
						{},
						cookie.parse(req.headers.cookie || ''),
						cookie.parse(opts.headers.cookie || '')
					);

					const set_cookie = res.getHeader('Set-Cookie');
					(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
						const match = /([^=]+)=([^;]+)/.exec(str);
						if (match) cookies[match[1]] = match[2];
					});

					const str = Object.keys(cookies)
						.map(key => `${key}=${cookies[key]}`)
						.join('; ');

					opts.headers.cookie = str;

					if (!opts.headers.authorization && req.headers.authorization) {
						opts.headers.authorization = req.headers.authorization;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && serialize_error(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
	if (!error) return null;
	let serialized = try_serialize(error);
	if (!serialized) {
		const { name, message, stack } = error ;
		serialized = try_serialize({ name, message, stack });
	}
	if (!serialized) {
		serialized = '{}';
	}
	return serialized;
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'max-age=31536000, immutable'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const cache = new Map();

	const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs.readFileSync(path.join(build_dir, file)))).get(file);

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

dotenv.config();
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
console.log("dev=",dev,"PORT=",PORT);

const FileStore = sessionFileStore(session);

// polka() // You can also use Express
// 	.use(
// 		compression({ threshold: 0 }),
// 		sirv('static', { dev }),
// 		sapper.middleware()
// 	)
// 	.listen(PORT, err => {
// 		if (err) console.log('error', err);
// 	});

polka()
	.use(bodyParser.json())
	.use(session({
		secret: 'conduit',
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 315360000
		},
		store: new FileStore({
			path: process.env.NOW ? `/tmp/sessions` : `.sessions`
		})
	}))
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware({
			session: req => ({
				user: req.session && req.session.user
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

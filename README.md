# sapper-template

The default [Sapper](https://github.com/sveltejs/sapper) template, available for Rollup and webpack.


## Getting started


### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository. Use either the `rollup` or `webpack` branch in `sapper-template`:

```bash
# for Rollup
npx degit "sveltejs/sapper-template#rollup" my-app
# for webpack
npx degit "sveltejs/sapper-template#webpack" my-app
```


### Using GitHub templates

Alternatively, you can use GitHub's template feature with the [sapper-template-rollup](https://github.com/sveltejs/sapper-template-rollup) or [sapper-template-webpack](https://github.com/sveltejs/sapper-template-webpack) repositories.


### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.


### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.


#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route


### static

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

In your [service-worker.js](src/service-worker.js) file, you can import these as `files` from the generated manifest...

```js
import { files } from '@sapper/service-worker';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).


## Bundler config

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.


## Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 10 or above. As an example, to deploy to [ZEIT Now](https://zeit.co/now) when using `sapper export`, run these commands:

```bash
npm install -g now
now
```

If your app can't be exported to a static site, you can use the [now-sapper](https://github.com/thgh/now-sapper) builder. You can find instructions on how to do so in its [README](https://github.com/thgh/now-sapper#basic-usage).


## Using external components

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an *external dependency*. You can either modify the `external` option under `server` in [rollup.config.js](rollup.config.js) or the `externals` option in [webpack.config.js](webpack.config.js), or simply install the package to `devDependencies` rather than `dependencies`, which will cause it to get bundled (and therefore compiled) with your app:

```bash
npm install -D @sveltejs/svelte-virtual-list
```


## Bugs and feedback

Sapper is in early development, and may have the odd rough edge here and there. Please be vocal over on the [Sapper issue tracker](https://github.com/sveltejs/sapper/issues).

## Create mockup RealWorld with SemanticUI

- Import SemanticUI statically, check it. Scaffolded and installed working initial sapper template is all of 27.7 mb. In simplest possible way, knowing that proper SemanticUI can be sure done, based on Sevlte Todolist sample application.
https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
asa well as https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js 
and https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
Performance with cdn semantic:

            30 / 31 requests
            65.8 KB / 65.8 KB transferred
            2.1 MB / 2.1 MB resources
            Finish: 4.72 s
            DOMContentLoaded: 389 ms
 
 after cdn semantic-ui importing:
 
            32 / 33 requests
            67.5 KB / 67.5 KB transferred
            2.2 MB / 2.2 MB resources
            Finish: 7.28 s
            DOMContentLoaded: 475 ms
            Load: 642 ms
 - Note: semantic-ui css tag preference works quite different from CDN include than from local include from static directory. See, video. Though resources bunch gets quite a little bigger:
 
            29 / 30 requests
            67.5 KB / 67.5 KB transferred
            3.6 MB / 3.6 MB resources
            Finish: 17.74 s
            DOMContentLoaded: 501 ms
            Load: 778 ms
            
 - Note: my toggle class gives error log but works, o'contraire to .my wich doesn't. Better to put in class with dot and in toggle with no dot - still works.
 - Note: npm version - 6.13.6, nodejs version 13.7.0
 - Project folder size with local semantic - 37.7 - 113 mb with fully installed semantic-ui.
 - Note: reinstall polka package after semantic-ui.
 - Note: though template is in src it can load resources as if it's it static folder! 

## First step with sapper - MVC pattern [this article](https://blog.logrocket.com/exploring-sapper-svelte-a-quick-tutorial/)

- The MVP of Sapper app is routes - an idea to map requests to directories. MVC is a proud centralized system, conforming to theory, not practice. It first deciphers request URI, chooses handler, than finds next redirect. Why is it necessary to act from one single controller location is not explained. Handler of request belongs to that request (URI). So, it's even more rational and practical to have many controllers and handlers for every request as Sapper does. MVC is toothache bore, wheres next and sapper approached is cool, much like ban on pointer arithmetic and garbage collecting. 
- Sure sapper is opinionated, but no more than JavaScript itself. Makes full sense to limit a little full freedom of algorithm to achieve convention looking grace.
- React's MVVM data driven approach is centralized by nature. It handles  requests by index file and chooses appropriate action by deciphering URI either. But wy do we have to decipher in the first hand?
- Application is a historical request/response interaction of homo with computer. Computer has far exceeding freedom of actions than enough. The whole power of scripting. The only requirement is mappish relation between state and view - you can't get different views with the same backend/model state: Many-to-One. Must be refreshable by state only. View must be honest - exact snippet of computer mind for homo. All about importance of being data honest. No different homo/view representations for the same computer memory. So, it must be data/model driven, model first. One way to insure that is one place to deal with request and one-to-one URI encoding of requests.
- To separate view of model by file types in code for developer is simple. Not so simple for model first. MVC solves the problem by allowing only one place for URI deciphering - even one file, named controller. But it's clearly overkill. By attaching personal controller to every request/URI one can skip encipher/decipher step which makes things way simpler. Controller's sole single responsibility is to map handler to request and that handler makes PPC job and identifies next redirect. 
- Better solution is to multiply controllers by one-to-one map to URI. Doesn't matter that controller is spread between different files as far as it still does it's job - provides appropriate handle to every URI/request. Doesn't matter in which particular file that magic happens. That way a little opinionated framework does a great job to exclude the whole difficult step from developer. Many handlers for one request are excluded automatically by matching URI, still enforcing model first architecture - handler first updates model and than calls appropriate view, presenting that model state to homo. That is what Sapper routing does - exclude exceeding, unnecessary step from developer mind flow. Same as excluding VDOM. That is just another charming manifestation of main Linux belief - "everything is directory", tree multiplicity has adequate power to solve in natural way every opposite, mapping task.
   
Second step is sapper auth architecture, starting with [this article](https://www.nielsvandermolen.com/authentication-example-svelte-sapper/) 
- 

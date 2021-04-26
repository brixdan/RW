import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

import bodyParser from 'body-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
const PORT = 3000
const NODE_ENV = "development"
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
		sapper.middleware({
			session: req => ({
				user: req.session && req.session.user
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

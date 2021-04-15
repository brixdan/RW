import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, E as create_component, F as claim_component, G as mount_component, B as transition_in, z as transition_out, H as destroy_component } from './client.94090096.js';
import { g as get, a as api } from './api.1b809009.js';
import './ListErrors.e42d8991.js';
import { E as Editor } from './_Editor.592e10db.js';

/* src\routes\editor\[slug].svelte generated by Svelte v3.36.0 */

function create_fragment(ctx) {
	let editor;
	let current;

	editor = new Editor({
			props: {
				article: /*article*/ ctx[1],
				slug: /*slug*/ ctx[0]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(editor.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(editor.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(editor, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const editor_changes = {};
			if (dirty & /*article*/ 2) editor_changes.article = /*article*/ ctx[1];
			if (dirty & /*slug*/ 1) editor_changes.slug = /*slug*/ ctx[0];
			editor.$set(editor_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(editor.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(editor.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(editor, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params }) {
	const { slug } = params;
	const { article } = await get(`articles/${slug}`, null);
	return { article, slug };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", slots, []);
	let { slug } = $$props;
	let { article } = $$props;
	const writable_props = ["slug", "article"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
		if ("article" in $$props) $$invalidate(1, article = $$props.article);
	};

	$$self.$capture_state = () => ({ api, preload, Editor, slug, article });

	$$self.$inject_state = $$props => {
		if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
		if ("article" in $$props) $$invalidate(1, article = $$props.article);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [slug, article];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { slug: 0, article: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*slug*/ ctx[0] === undefined && !("slug" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'slug'");
		}

		if (/*article*/ ctx[1] === undefined && !("article" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'article'");
		}
	}

	get slug() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get article() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set article(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };

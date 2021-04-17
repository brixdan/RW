import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, E as create_component, F as claim_component, G as mount_component, q as noop, B as transition_in, z as transition_out, H as destroy_component } from './client.94090096.js';
import './api.1b809009.js';
import './ListErrors.e42d8991.js';
import { E as Editor } from './_Editor.592e10db.js';

/* src\routes\editor\index.svelte generated by Svelte v3.36.0 */

function create_fragment(ctx) {
	let editor;
	let current;

	editor = new Editor({
			props: { article: /*article*/ ctx[0] },
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
		p: noop,
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Editor", slots, []);

	let article = {
		title: "",
		description: "",
		body: "",
		tagList: []
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Editor> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Editor, article });

	$$self.$inject_state = $$props => {
		if ("article" in $$props) $$invalidate(0, article = $$props.article);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [article];
}

class Editor_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Editor_1",
			options,
			id: create_fragment.name
		});
	}
}

export default Editor_1;
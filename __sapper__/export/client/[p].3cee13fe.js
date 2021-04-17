import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, E as create_component, F as claim_component, G as mount_component, B as transition_in, z as transition_out, H as destroy_component } from './client.94090096.js';
import './api.1b809009.js';
import './index.02a81e5d.js';
import { H as Home } from './Home.7da87063.js';

/* src\routes\[p].svelte generated by Svelte v3.36.0 */

function create_fragment(ctx) {
	let home;
	let current;

	home = new Home({
			props: { p: /*p*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(home.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(home.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(home, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const home_changes = {};
			if (dirty & /*p*/ 1) home_changes.p = /*p*/ ctx[0];
			home.$set(home_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(home.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(home.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(home, detaching);
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

function preload({ params }) {
	return { p: +params.p };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bpu5D", slots, []);
	let { p } = $$props;
	const writable_props = ["p"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bpu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("p" in $$props) $$invalidate(0, p = $$props.p);
	};

	$$self.$capture_state = () => ({ preload, Home, p });

	$$self.$inject_state = $$props => {
		if ("p" in $$props) $$invalidate(0, p = $$props.p);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [p];
}

class U5Bpu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { p: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*p*/ ctx[0] === undefined && !("p" in props)) {
			console.warn("<U5Bpu5D> was created without expected prop 'p'");
		}
	}

	get p() {
		throw new Error("<U5Bpu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set p(value) {
		throw new Error("<U5Bpu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bpu5D;
export { preload };
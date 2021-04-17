import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, E as create_component, F as claim_component, G as mount_component, q as noop, B as transition_in, z as transition_out, H as destroy_component } from './client.94090096.js';
import './api.1b809009.js';
import './index.02a81e5d.js';
import { H as Home } from './Home.7da87063.js';

/* src\routes\index.svelte generated by Svelte v3.36.0 */

function create_fragment(ctx) {
	let home;
	let current;
	home = new Home({ props: { p: 1 }, $$inline: true });

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
		p: noop,
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Home });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
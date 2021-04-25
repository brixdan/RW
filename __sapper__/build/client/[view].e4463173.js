import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, u as stores$1, w as validate_store, x as component_subscribe, T as goto, b as space, E as create_component, P as query_selector_all, g as detach_dev, h as claim_space, F as claim_component, m as insert_dev, G as mount_component, B as transition_in, z as transition_out, H as destroy_component } from './client.93e48d96.js';
import { g as get, a as api } from './api.d2dd6678.js';
import './index.a9437c77.js';
import { P as Profile } from './_Profile.6af065bb.js';

/* src\routes\profile\[user]\[view].svelte generated by Svelte v3.36.0 */

function create_fragment(ctx) {
	let title_value;
	let t;
	let profile_1;
	let current;
	document.title = title_value = "" + (/*profile*/ ctx[0].username + " • Conduit");

	profile_1 = new Profile({
			props: {
				profile: /*profile*/ ctx[0],
				favorites: /*favorites*/ ctx[1],
				user: /*$session*/ ctx[2].user
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t = space();
			create_component(profile_1.$$.fragment);
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1f42o3r\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(profile_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(profile_1, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*profile*/ 1) && title_value !== (title_value = "" + (/*profile*/ ctx[0].username + " • Conduit"))) {
				document.title = title_value;
			}

			const profile_1_changes = {};
			if (dirty & /*profile*/ 1) profile_1_changes.profile = /*profile*/ ctx[0];
			if (dirty & /*favorites*/ 2) profile_1_changes.favorites = /*favorites*/ ctx[1];
			if (dirty & /*$session*/ 4) profile_1_changes.user = /*$session*/ ctx[2].user;
			profile_1.$set(profile_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(profile_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(profile_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_component(profile_1, detaching);
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

async function preload({ params }, { user }) {
	const username = params.user.slice(1);
	const { profile } = await get(`profiles/${username}`, user && user.token);

	return {
		profile,
		favorites: params.view === "favorites"
	};
}

function instance($$self, $$props, $$invalidate) {
	let $session;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bviewu5D", slots, []);
	let { profile } = $$props, { favorites } = $$props;
	const { session } = stores$1();
	validate_store(session, "session");
	component_subscribe($$self, session, value => $$invalidate(2, $session = value));
	const writable_props = ["profile", "favorites"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bviewu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
		if ("favorites" in $$props) $$invalidate(1, favorites = $$props.favorites);
	};

	$$self.$capture_state = () => ({
		api,
		preload,
		stores: stores$1,
		goto,
		Profile,
		profile,
		favorites,
		session,
		$session
	});

	$$self.$inject_state = $$props => {
		if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
		if ("favorites" in $$props) $$invalidate(1, favorites = $$props.favorites);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [profile, favorites, $session, session];
}

class U5Bviewu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { profile: 0, favorites: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bviewu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*profile*/ ctx[0] === undefined && !("profile" in props)) {
			console.warn("<U5Bviewu5D> was created without expected prop 'profile'");
		}

		if (/*favorites*/ ctx[1] === undefined && !("favorites" in props)) {
			console.warn("<U5Bviewu5D> was created without expected prop 'favorites'");
		}
	}

	get profile() {
		throw new Error("<U5Bviewu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set profile(value) {
		throw new Error("<U5Bviewu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get favorites() {
		throw new Error("<U5Bviewu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set favorites(value) {
		throw new Error("<U5Bviewu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bviewu5D;
export { preload };
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, R as globals, v as validate_each_argument, e as element, c as claim_element, f as children, g as detach_dev, k as attr_dev, l as add_location, m as insert_dev, r as destroy_each, t as text, b as space, j as claim_text, h as claim_space, n as append_dev, p as set_data_dev, C as empty, q as noop } from './client.93e48d96.js';

/* src\components\ListErrors.svelte generated by Svelte v3.36.0 */

const { Object: Object_1 } = globals;
const file = "src\\components\\ListErrors.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (5:0) {#if errors}
function create_if_block(ctx) {
	let div;
	let each_value = Object.keys(/*errors*/ ctx[0]);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "ui error message");
			add_location(div, file, 5, 4, 65);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*errors, Object*/ 1) {
				each_value = Object.keys(/*errors*/ ctx[0]);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(5:0) {#if errors}",
		ctx
	});

	return block;
}

// (7:8) {#each Object.keys(errors) as key}
function create_each_block(ctx) {
	let div;
	let t0_value = /*key*/ ctx[1] + "";
	let t0;
	let t1;
	let t2_value = /*errors*/ ctx[0][/*key*/ ctx[1]] + "";
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text(t0_value);
			t1 = space();
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, t0_value);
			t1 = claim_space(div_nodes);
			t2 = claim_text(div_nodes, t2_value);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "item");
			add_location(div, file, 7, 12, 153);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t0);
			append_dev(div, t1);
			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*errors*/ 1 && t0_value !== (t0_value = /*key*/ ctx[1] + "")) set_data_dev(t0, t0_value);
			if (dirty & /*errors*/ 1 && t2_value !== (t2_value = /*errors*/ ctx[0][/*key*/ ctx[1]] + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(7:8) {#each Object.keys(errors) as key}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*errors*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (/*errors*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	validate_slots("ListErrors", slots, []);
	let { errors } = $$props;
	const writable_props = ["errors"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ListErrors> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("errors" in $$props) $$invalidate(0, errors = $$props.errors);
	};

	$$self.$capture_state = () => ({ errors });

	$$self.$inject_state = $$props => {
		if ("errors" in $$props) $$invalidate(0, errors = $$props.errors);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [errors];
}

class ListErrors extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { errors: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ListErrors",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*errors*/ ctx[0] === undefined && !("errors" in props)) {
			console.warn("<ListErrors> was created without expected prop 'errors'");
		}
	}

	get errors() {
		throw new Error("<ListErrors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set errors(value) {
		throw new Error("<ListErrors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ListErrors as L };

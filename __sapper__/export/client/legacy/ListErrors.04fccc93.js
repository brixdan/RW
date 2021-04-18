import { a as _inherits, b as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, g as dispatch_dev, h as _createClass, S as SvelteComponentDev, j as validate_slots, a1 as globals, v as validate_each_argument, k as element, m as claim_element, n as children, o as detach_dev, r as attr_dev, u as add_location, w as insert_dev, C as destroy_each, t as text, l as space, q as claim_text, p as claim_space, x as append_dev, z as set_data_dev, M as empty, A as _slicedToArray, B as noop } from './client.0f9ac560.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Object_1 = globals.Object;
var file = "src\\components\\ListErrors.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (5:0) {#if errors}


function create_if_block(ctx) {
  var div;
  var each_value = Object.keys(
  /*errors*/
  ctx[0]);
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div_nodes);
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

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*errors, Object*/
      1) {
        each_value = Object.keys(
        /*errors*/
        ctx[0]);
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(div, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
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
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(5:0) {#if errors}",
    ctx: ctx
  });
  return block;
} // (7:8) {#each Object.keys(errors) as key}


function create_each_block(ctx) {
  var div;
  var t0_value =
  /*key*/
  ctx[1] + "";
  var t0;
  var t1;
  var t2_value =
  /*errors*/
  ctx[0][
  /*key*/
  ctx[1]] + "";
  var t2;
  var block = {
    c: function create() {
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
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
      if (dirty &
      /*errors*/
      1 && t0_value !== (t0_value =
      /*key*/
      ctx[1] + "")) set_data_dev(t0, t0_value);
      if (dirty &
      /*errors*/
      1 && t2_value !== (t2_value =
      /*errors*/
      ctx[0][
      /*key*/
      ctx[1]] + "")) set_data_dev(t2, t2_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(7:8) {#each Object.keys(errors) as key}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var if_block_anchor;
  var if_block =
  /*errors*/
  ctx[0] && create_if_block(ctx);
  var block = {
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
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*errors*/
      ctx[0]) {
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
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("ListErrors", slots, []);
  var errors = $$props.errors;
  var writable_props = ["errors"];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ListErrors> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("errors" in $$props) $$invalidate(0, errors = $$props.errors);
  };

  $$self.$capture_state = function () {
    return {
      errors: errors
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("errors" in $$props) $$invalidate(0, errors = $$props.errors);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [errors];
}

var ListErrors = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ListErrors, _SvelteComponentDev);

  var _super = _createSuper(ListErrors);

  function ListErrors(options) {
    var _this;

    _classCallCheck(this, ListErrors);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      errors: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ListErrors",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*errors*/
    ctx[0] === undefined && !("errors" in props)) {
      console.warn("<ListErrors> was created without expected prop 'errors'");
    }

    return _this;
  }

  _createClass(ListErrors, [{
    key: "errors",
    get: function get() {
      throw new Error("<ListErrors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ListErrors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ListErrors;
}(SvelteComponentDev);

export { ListErrors as L };

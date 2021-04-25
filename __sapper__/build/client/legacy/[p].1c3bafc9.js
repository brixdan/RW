import { a as _inherits, b as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, g as dispatch_dev, h as _createClass, S as SvelteComponentDev, j as validate_slots, O as create_component, P as claim_component, Q as mount_component, A as _slicedToArray, L as transition_in, J as transition_out, R as destroy_component } from './client.44519a2a.js';
import './api.e3c94137.js';
import './index.45027b20.js';
import { H as Home } from './Home.d9e5db66.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var home;
  var current;
  home = new Home({
    props: {
      p:
      /*p*/
      ctx[0]
    },
    $$inline: true
  });
  var block = {
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
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var home_changes = {};
      if (dirty &
      /*p*/
      1) home_changes.p =
      /*p*/
      ctx[0];
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
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_ref3) {
  var params = _ref3.params;
  return {
    p: +params.p
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bpu5D", slots, []);
  var p = $$props.p;
  var writable_props = ["p"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bpu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("p" in $$props) $$invalidate(0, p = $$props.p);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      Home: Home,
      p: p
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("p" in $$props) $$invalidate(0, p = $$props.p);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [p];
}

var U5Bpu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bpu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bpu5D);

  function U5Bpu5D(options) {
    var _this;

    _classCallCheck(this, U5Bpu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      p: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bpu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*p*/
    ctx[0] === undefined && !("p" in props)) {
      console.warn("<U5Bpu5D> was created without expected prop 'p'");
    }

    return _this;
  }

  _createClass(U5Bpu5D, [{
    key: "p",
    get: function get() {
      throw new Error("<U5Bpu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bpu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bpu5D;
}(SvelteComponentDev);

export default U5Bpu5D;
export { preload };

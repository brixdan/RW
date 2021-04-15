import { C as _asyncToGenerator, D as _regeneratorRuntime, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_slots, E as stores$1, F as validate_store, G as component_subscribe, a1 as goto, k as space, N as create_component, Z as query_selector_all, n as detach_dev, o as claim_space, O as claim_component, u as insert_dev, P as mount_component, z as _slicedToArray, K as transition_in, I as transition_out, Q as destroy_component } from './client.ad9afb00.js';
import { g as get, a as api } from './api.4fa24d87.js';
import './index.6d5b7a68.js';
import { P as Profile } from './_Profile.1c81eeda.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var title_value;
  var t;
  var profile_1;
  var current;
  document.title = title_value = "" + (
  /*profile*/
  ctx[0].username + " • Conduit");
  profile_1 = new Profile({
    props: {
      profile:
      /*profile*/
      ctx[0],
      favorites:
      /*favorites*/
      ctx[1],
      user:
      /*$session*/
      ctx[2].user
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t = space();
      create_component(profile_1.$$.fragment);
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1f42o3r\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      claim_component(profile_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      mount_component(profile_1, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*profile*/
      1) && title_value !== (title_value = "" + (
      /*profile*/
      ctx[0].username + " • Conduit"))) {
        document.title = title_value;
      }

      var profile_1_changes = {};
      if (dirty &
      /*profile*/
      1) profile_1_changes.profile =
      /*profile*/
      ctx[0];
      if (dirty &
      /*favorites*/
      2) profile_1_changes.favorites =
      /*favorites*/
      ctx[1];
      if (dirty &
      /*$session*/
      4) profile_1_changes.user =
      /*$session*/
      ctx[2].user;
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
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x, _x2) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref3, _ref4) {
    var params, user, username, _yield$api$get, profile;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params;
            user = _ref4.user;
            username = params.user.slice(1);
            _context.next = 5;
            return get("profiles/".concat(username), user && user.token);

          case 5:
            _yield$api$get = _context.sent;
            profile = _yield$api$get.profile;
            return _context.abrupt("return", {
              profile: profile,
              favorites: params.view === "favorites"
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var $session;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bviewu5D", slots, []);
  var profile = $$props.profile,
      favorites = $$props.favorites;

  var _stores = stores$1(),
      session = _stores.session;

  validate_store(session, "session");
  component_subscribe($$self, session, function (value) {
    return $$invalidate(2, $session = value);
  });
  var writable_props = ["profile", "favorites"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bviewu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
    if ("favorites" in $$props) $$invalidate(1, favorites = $$props.favorites);
  };

  $$self.$capture_state = function () {
    return {
      api: api,
      preload: preload,
      stores: stores$1,
      goto: goto,
      Profile: Profile,
      profile: profile,
      favorites: favorites,
      session: session,
      $session: $session
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
    if ("favorites" in $$props) $$invalidate(1, favorites = $$props.favorites);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [profile, favorites, $session, session];
}

var U5Bviewu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bviewu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bviewu5D);

  function U5Bviewu5D(options) {
    var _this;

    _classCallCheck(this, U5Bviewu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      profile: 0,
      favorites: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bviewu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*profile*/
    ctx[0] === undefined && !("profile" in props)) {
      console.warn("<U5Bviewu5D> was created without expected prop 'profile'");
    }

    if (
    /*favorites*/
    ctx[1] === undefined && !("favorites" in props)) {
      console.warn("<U5Bviewu5D> was created without expected prop 'favorites'");
    }

    return _this;
  }

  _createClass(U5Bviewu5D, [{
    key: "profile",
    get: function get() {
      throw new Error("<U5Bviewu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bviewu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "favorites",
    get: function get() {
      throw new Error("<U5Bviewu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bviewu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bviewu5D;
}(SvelteComponentDev);

export default U5Bviewu5D;
export { preload };

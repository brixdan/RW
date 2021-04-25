import { D as _asyncToGenerator, E as _regeneratorRuntime, a as _inherits, b as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, g as dispatch_dev, h as _createClass, S as SvelteComponentDev, j as validate_slots, O as create_component, P as claim_component, Q as mount_component, A as _slicedToArray, L as transition_in, J as transition_out, R as destroy_component } from './client.44519a2a.js';
import { g as get, a as api } from './api.e3c94137.js';
import './ListErrors.e8a95000.js';
import { E as Editor } from './_Editor.06dcd6d6.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var editor;
  var current;
  editor = new Editor({
    props: {
      article:
      /*article*/
      ctx[1],
      slug:
      /*slug*/
      ctx[0]
    },
    $$inline: true
  });
  var block = {
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
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var editor_changes = {};
      if (dirty &
      /*article*/
      2) editor_changes.article =
      /*article*/
      ctx[1];
      if (dirty &
      /*slug*/
      1) editor_changes.slug =
      /*slug*/
      ctx[0];
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
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref3) {
    var params, slug, _yield$api$get, article;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params;
            slug = params.slug;
            _context.next = 4;
            return get("articles/".concat(slug), null);

          case 4:
            _yield$api$get = _context.sent;
            article = _yield$api$get.article;
            return _context.abrupt("return", {
              article: article,
              slug: slug
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bslugu5D", slots, []);
  var slug = $$props.slug;
  var article = $$props.article;
  var writable_props = ["slug", "article"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
    if ("article" in $$props) $$invalidate(1, article = $$props.article);
  };

  $$self.$capture_state = function () {
    return {
      api: api,
      preload: preload,
      Editor: Editor,
      slug: slug,
      article: article
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
    if ("article" in $$props) $$invalidate(1, article = $$props.article);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [slug, article];
}

var U5Bslugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bslugu5D);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      slug: 0,
      article: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*slug*/
    ctx[0] === undefined && !("slug" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'slug'");
    }

    if (
    /*article*/
    ctx[1] === undefined && !("article" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'article'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "slug",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "article",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };

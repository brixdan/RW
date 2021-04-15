import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, S as SvelteComponentDev, h as validate_slots, N as create_component, O as claim_component, P as mount_component, A as noop, K as transition_in, I as transition_out, Q as destroy_component } from './client.ad9afb00.js';
import './api.4fa24d87.js';
import './ListErrors.b1b08794.js';
import { E as Editor } from './_Editor.c7aaa021.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var editor;
  var current;
  editor = new Editor({
    props: {
      article:
      /*article*/
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
  validate_slots("Editor", slots, []);
  var article = {
    title: "",
    description: "",
    body: "",
    tagList: []
  };
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Editor> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Editor: Editor,
      article: article
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("article" in $$props) $$invalidate(0, article = $$props.article);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [article];
}

var Editor_1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Editor_1, _SvelteComponentDev);

  var _super = _createSuper(Editor_1);

  function Editor_1(options) {
    var _this;

    _classCallCheck(this, Editor_1);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Editor_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Editor_1;
}(SvelteComponentDev);

export default Editor_1;

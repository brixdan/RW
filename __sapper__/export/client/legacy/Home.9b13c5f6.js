import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_slots, E as stores$1, F as validate_store, G as component_subscribe, j as element, k as space, t as text, l as claim_element, m as children, n as detach_dev, o as claim_space, p as claim_text, q as attr_dev, r as add_location, u as insert_dev, w as append_dev, x as listen_dev, y as set_data_dev, N as create_component, O as claim_component, P as mount_component, z as _slicedToArray, K as transition_in, I as transition_out, Q as destroy_component, U as run_all, A as noop, V as createEventDispatcher, L as empty, v as validate_each_argument, B as destroy_each, W as binding_callbacks, X as bind, Y as onMount, C as _asyncToGenerator, D as _regeneratorRuntime, Z as query_selector_all, $ as add_flush_callback } from './client.ad9afb00.js';
import { g as get, a as api } from './api.4fa24d87.js';
import { A as ArticleList } from './index.6d5b7a68.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\components\\MainView.svelte"; // (32:4) {:else}

function create_else_block(ctx) {
  var a;
  var t;
  var block = {
    c: function create() {
      a = element("a");
      t = text("Your Feed");
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Your Feed");
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/login");
      attr_dev(a, "class", "item");
      add_location(a, file, 32, 8, 690);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(32:4) {:else}",
    ctx: ctx
  });
  return block;
} // (28:4) {#if $session.user}


function create_if_block_1(ctx) {
  var a;
  var t;
  var a_class_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      a = element("a");
      t = text("Your feed");
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Your feed");
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", ".");
      attr_dev(a, "class", a_class_value = "item " + (
      /*tab*/
      ctx[0] === "feed" ? "active" : ""));
      add_location(a, file, 28, 8, 549);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);

      if (!mounted) {
        dispose = listen_dev(a, "click",
        /*yourFeed*/
        ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*tab*/
      1 && a_class_value !== (a_class_value = "item " + (
      /*tab*/
      ctx[0] === "feed" ? "active" : ""))) {
        attr_dev(a, "class", a_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(28:4) {#if $session.user}",
    ctx: ctx
  });
  return block;
} // (44:4) {#if tag}


function create_if_block(ctx) {
  var a;
  var i;
  var t0;
  var t1;
  var a_class_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      a = element("a");
      i = element("i");
      t0 = space();
      t1 = text(
      /*tag*/
      ctx[1]);
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      i = claim_element(a_nodes, "I", {
        class: true
      });
      children(i).forEach(detach_dev);
      t0 = claim_space(a_nodes);
      t1 = claim_text(a_nodes,
      /*tag*/
      ctx[1]);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "ui tag icon");
      add_location(i, file, 45, 12, 1162);
      attr_dev(a, "href", ".");
      attr_dev(a, "class", a_class_value = "item " + (
      /*tab*/
      ctx[0] === "tag" ? "active" : ""));
      add_location(a, file, 44, 8, 1059);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, i);
      append_dev(a, t0);
      append_dev(a, t1);

      if (!mounted) {
        dispose = listen_dev(a, "click",
        /*click_handler*/
        ctx[8], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*tag*/
      2) set_data_dev(t1,
      /*tag*/
      ctx[1]);

      if (dirty &
      /*tab*/
      1 && a_class_value !== (a_class_value = "item " + (
      /*tab*/
      ctx[0] === "tag" ? "active" : ""))) {
        attr_dev(a, "class", a_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(44:4) {#if tag}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var t0;
  var a0;
  var t1;
  var a0_class_value;
  var t2;
  var a1;
  var t3;
  var a1_class_value;
  var t4;
  var t5;
  var articlelist;
  var current;
  var mounted;
  var dispose;

  function select_block_type(ctx, dirty) {
    if (
    /*$session*/
    ctx[3].user) return create_if_block_1;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type(ctx);
  var if_block1 =
  /*tag*/
  ctx[1] && create_if_block(ctx);
  articlelist = new ArticleList({
    props: {
      p:
      /*p*/
      ctx[2],
      tab:
      /*tab*/
      ctx[0],
      tag:
      /*tag*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      div = element("div");
      if_block0.c();
      t0 = space();
      a0 = element("a");
      t1 = text("Global Feed");
      t2 = space();
      a1 = element("a");
      t3 = text("Popular tags");
      t4 = space();
      if (if_block1) if_block1.c();
      t5 = space();
      create_component(articlelist.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if_block0.l(div_nodes);
      t0 = claim_space(div_nodes);
      a0 = claim_element(div_nodes, "A", {
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "Global Feed");
      a0_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      a1 = claim_element(div_nodes, "A", {
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "Popular tags");
      a1_nodes.forEach(detach_dev);
      t4 = claim_space(div_nodes);
      if (if_block1) if_block1.l(div_nodes);
      div_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      claim_component(articlelist.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a0, "href", ".");
      attr_dev(a0, "class", a0_class_value = "item " + (
      /*tab*/
      ctx[0] === "all" ? "active" : ""));
      add_location(a0, file, 37, 8, 780);
      attr_dev(a1, "href", ".");
      attr_dev(a1, "class", a1_class_value = "item " + (
      /*tag*/
      ctx[1] === "all" ? "active" : ""));
      add_location(a1, file, 40, 8, 911);
      attr_dev(div, "class", "ui tabular menu");
      add_location(div, file, 26, 0, 485);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_block0.m(div, null);
      append_dev(div, t0);
      append_dev(div, a0);
      append_dev(a0, t1);
      append_dev(div, t2);
      append_dev(div, a1);
      append_dev(a1, t3);
      append_dev(div, t4);
      if (if_block1) if_block1.m(div, null);
      insert_dev(target, t5, anchor);
      mount_component(articlelist, target, anchor);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(a0, "click",
        /*globalfeed*/
        ctx[6], false, false, false), listen_dev(a1, "click",
        /*popularTags*/
        ctx[7], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
        if_block0.p(ctx, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx);

        if (if_block0) {
          if_block0.c();
          if_block0.m(div, t0);
        }
      }

      if (!current || dirty &
      /*tab*/
      1 && a0_class_value !== (a0_class_value = "item " + (
      /*tab*/
      ctx[0] === "all" ? "active" : ""))) {
        attr_dev(a0, "class", a0_class_value);
      }

      if (!current || dirty &
      /*tag*/
      2 && a1_class_value !== (a1_class_value = "item " + (
      /*tag*/
      ctx[1] === "all" ? "active" : ""))) {
        attr_dev(a1, "class", a1_class_value);
      }

      if (
      /*tag*/
      ctx[1]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      var articlelist_changes = {};
      if (dirty &
      /*p*/
      4) articlelist_changes.p =
      /*p*/
      ctx[2];
      if (dirty &
      /*tab*/
      1) articlelist_changes.tab =
      /*tab*/
      ctx[0];
      if (dirty &
      /*tag*/
      2) articlelist_changes.tag =
      /*tag*/
      ctx[1];
      articlelist.$set(articlelist_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(articlelist.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(articlelist.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if_block0.d();
      if (if_block1) if_block1.d();
      if (detaching) detach_dev(t5);
      destroy_component(articlelist, detaching);
      mounted = false;
      run_all(dispose);
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
  var $session;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("MainView", slots, []);
  var _$$props$tab = $$props.tab,
      tab = _$$props$tab === void 0 ? "all" : _$$props$tab;
  var _$$props$tag = $$props.tag,
      tag = _$$props$tag === void 0 ? null : _$$props$tag;
  var p = $$props.p;

  var _stores = stores$1(),
      session = _stores.session;

  validate_store(session, "session");
  component_subscribe($$self, session, function (value) {
    return $$invalidate(3, $session = value);
  });

  function yourFeed() {
    $$invalidate(0, tab = "feed");
    $$invalidate(1, tag = null);
  }

  function globalfeed() {
    $$invalidate(0, tab = "all");
    $$invalidate(1, tag = null);
  }

  function popularTags() {
    $$invalidate(0, tab = "tags");
    $$invalidate(1, tag = "all");
  }

  var writable_props = ["tab", "tag", "p"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<MainView> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return $$invalidate(0, tab = "tag");
  };

  $$self.$$set = function ($$props) {
    if ("tab" in $$props) $$invalidate(0, tab = $$props.tab);
    if ("tag" in $$props) $$invalidate(1, tag = $$props.tag);
    if ("p" in $$props) $$invalidate(2, p = $$props.p);
  };

  $$self.$capture_state = function () {
    return {
      stores: stores$1,
      ArticleList: ArticleList,
      tab: tab,
      tag: tag,
      p: p,
      session: session,
      yourFeed: yourFeed,
      globalfeed: globalfeed,
      popularTags: popularTags,
      $session: $session
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("tab" in $$props) $$invalidate(0, tab = $$props.tab);
    if ("tag" in $$props) $$invalidate(1, tag = $$props.tag);
    if ("p" in $$props) $$invalidate(2, p = $$props.p);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [tab, tag, p, $session, session, yourFeed, globalfeed, popularTags, click_handler];
}

var MainView = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(MainView, _SvelteComponentDev);

  var _super = _createSuper(MainView);

  function MainView(options) {
    var _this;

    _classCallCheck(this, MainView);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      tab: 0,
      tag: 1,
      p: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "MainView",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*p*/
    ctx[2] === undefined && !("p" in props)) {
      console.warn("<MainView> was created without expected prop 'p'");
    }

    return _this;
  }

  _createClass(MainView, [{
    key: "tab",
    get: function get() {
      throw new Error("<MainView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MainView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tag",
    get: function get() {
      throw new Error("<MainView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MainView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "p",
    get: function get() {
      throw new Error("<MainView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MainView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return MainView;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\components\\Tags.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (20:0) {:else}


function create_else_block$1(ctx) {
  var div;
  var t;
  var block = {
    c: function create() {
      div = element("div");
      t = text("Loading Tags...");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, "Loading Tags...");
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div, file$1, 20, 1, 415);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block$1.name,
    type: "else",
    source: "(20:0) {:else}",
    ctx: ctx
  });
  return block;
} // (8:0) {#if tags}


function create_if_block$1(ctx) {
  var div;
  var each_value =
  /*tags*/
  ctx[0];
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
      attr_dev(div, "class", "ui horizontal list");
      add_location(div, file$1, 8, 1, 151);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*dispatch, tags*/
      3) {
        each_value =
        /*tags*/
        ctx[0];
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
    id: create_if_block$1.name,
    type: "if",
    source: "(8:0) {#if tags}",
    ctx: ctx
  });
  return block;
} // (10:2) {#each tags as tag}


function create_each_block(ctx) {
  var div1;
  var div0;
  var a;
  var t0_value =
  /*tag*/
  ctx[3] + "";
  var t0;
  var t1;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[2](
      /*tag*/
      ctx[3])
    );
  }

  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", ".");
      attr_dev(a, "class", "");
      add_location(a, file$1, 12, 5, 268);
      attr_dev(div0, "class", "ui tag label");
      add_location(div0, file$1, 11, 4, 235);
      attr_dev(div1, "class", "item");
      add_location(div1, file$1, 10, 3, 211);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, a);
      append_dev(a, t0);
      append_dev(div1, t1);

      if (!mounted) {
        dispose = listen_dev(a, "click", click_handler, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*tags*/
      1 && t0_value !== (t0_value =
      /*tag*/
      ctx[3] + "")) set_data_dev(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(10:2) {#each tags as tag}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var if_block_anchor;

  function select_block_type(ctx, dirty) {
    if (
    /*tags*/
    ctx[0]) return create_if_block$1;
    return create_else_block$1;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Tags", slots, []);
  var tags = $$props.tags;
  var dispatch = createEventDispatcher();
  var writable_props = ["tags"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Tags> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler(tag) {
    return dispatch("select", {
      tag: tag
    });
  };

  $$self.$$set = function ($$props) {
    if ("tags" in $$props) $$invalidate(0, tags = $$props.tags);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      tags: tags,
      dispatch: dispatch
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("tags" in $$props) $$invalidate(0, tags = $$props.tags);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [tags, dispatch, click_handler];
}

var Tags = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Tags, _SvelteComponentDev);

  var _super = _createSuper$1(Tags);

  function Tags(options) {
    var _this;

    _classCallCheck(this, Tags);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      tags: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Tags",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*tags*/
    ctx[0] === undefined && !("tags" in props)) {
      console.warn("<Tags> was created without expected prop 'tags'");
    }

    return _this;
  }

  _createClass(Tags, [{
    key: "tags",
    get: function get() {
      throw new Error("<Tags>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Tags>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Tags;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src\\components\\Home.svelte";

function create_fragment$2(ctx) {
  var t0;
  var div2;
  var div0;
  var mainview;
  var updating_tab;
  var t1;
  var div1;
  var p_1;
  var t2;
  var t3;
  var tags_1;
  var current;

  function mainview_tab_binding(value) {
    /*mainview_tab_binding*/
    ctx[5](value);
  }

  var mainview_props = {
    p:
    /*p*/
    ctx[0],
    tag:
    /*tag*/
    ctx[2]
  };

  if (
  /*tab*/
  ctx[1] !== void 0) {
    mainview_props.tab =
    /*tab*/
    ctx[1];
  }

  mainview = new MainView({
    props: mainview_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(mainview, "tab", mainview_tab_binding);
  });
  tags_1 = new Tags({
    props: {
      tags:
      /*tags*/
      ctx[3]
    },
    $$inline: true
  });
  tags_1.$on("select",
  /*setTags*/
  ctx[4]);
  var block = {
    c: function create() {
      t0 = space();
      div2 = element("div");
      div0 = element("div");
      create_component(mainview.$$.fragment);
      t1 = space();
      div1 = element("div");
      p_1 = element("p");
      t2 = text("Popular Tags");
      t3 = space();
      create_component(tags_1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-12cril3\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(mainview.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p_1 = claim_element(div1_nodes, "P", {});
      var p_1_nodes = children(p_1);
      t2 = claim_text(p_1_nodes, "Popular Tags");
      p_1_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      claim_component(tags_1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Conduit";
      attr_dev(div0, "class", "fifteen wide column");
      add_location(div0, file$2, 27, 8, 523);
      add_location(p_1, file$2, 31, 12, 661);
      attr_dev(div1, "class", "column");
      add_location(div1, file$2, 30, 8, 627);
      attr_dev(div2, "class", "ui grid");
      add_location(div2, file$2, 26, 0, 492);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      mount_component(mainview, div0, null);
      append_dev(div2, t1);
      append_dev(div2, div1);
      append_dev(div1, p_1);
      append_dev(p_1, t2);
      append_dev(div1, t3);
      mount_component(tags_1, div1, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var mainview_changes = {};
      if (dirty &
      /*p*/
      1) mainview_changes.p =
      /*p*/
      ctx[0];
      if (dirty &
      /*tag*/
      4) mainview_changes.tag =
      /*tag*/
      ctx[2];

      if (!updating_tab && dirty &
      /*tab*/
      2) {
        updating_tab = true;
        mainview_changes.tab =
        /*tab*/
        ctx[1];
        add_flush_callback(function () {
          return updating_tab = false;
        });
      }

      mainview.$set(mainview_changes);
      var tags_1_changes = {};
      if (dirty &
      /*tags*/
      8) tags_1_changes.tags =
      /*tags*/
      ctx[3];
      tags_1.$set(tags_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(mainview.$$.fragment, local);
      transition_in(tags_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(mainview.$$.fragment, local);
      transition_out(tags_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div2);
      destroy_component(mainview);
      destroy_component(tags_1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Home", slots, []);
  var _$$props$p = $$props.p,
      p = _$$props$p === void 0 ? 1 : _$$props$p;
  var tab;
  var tag;
  var tags;

  function setTags(_ref3) {
    var detail = _ref3.detail;
    $$invalidate(2, tag = detail.tag);
    $$invalidate(1, tab = "tag");
  }

  onMount( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _yield$api$get;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = $$invalidate;
            _context.next = 3;
            return get("tags");

          case 3:
            _yield$api$get = _context.sent;
            tags = _yield$api$get.tags;
            _context.t1 = _yield$api$get;
            _context.t2 = tags;
            (0, _context.t0)(3, _context.t1, _context.t2);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  var writable_props = ["p"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Home> was created with unknown prop '".concat(key, "'"));
  });

  function mainview_tab_binding(value) {
    tab = value;
    $$invalidate(1, tab);
  }

  $$self.$$set = function ($$props) {
    if ("p" in $$props) $$invalidate(0, p = $$props.p);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      MainView: MainView,
      Tags: Tags,
      api: api,
      p: p,
      tab: tab,
      tag: tag,
      tags: tags,
      setTags: setTags
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("p" in $$props) $$invalidate(0, p = $$props.p);
    if ("tab" in $$props) $$invalidate(1, tab = $$props.tab);
    if ("tag" in $$props) $$invalidate(2, tag = $$props.tag);
    if ("tags" in $$props) $$invalidate(3, tags = $$props.tags);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [p, tab, tag, tags, setTags, mainview_tab_binding];
}

var Home = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Home, _SvelteComponentDev);

  var _super = _createSuper$2(Home);

  function Home(options) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      p: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Home",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Home, [{
    key: "p",
    get: function get() {
      throw new Error("<Home>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Home>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Home;
}(SvelteComponentDev);

export { Home as H };

import { a as _inherits, b as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, g as dispatch_dev, h as _createClass, S as SvelteComponentDev, v as validate_each_argument, j as validate_slots, k as element, l as space, t as text, m as claim_element, n as children, o as detach_dev, p as claim_space, q as claim_text, r as attr_dev, u as add_location, w as insert_dev, x as append_dev, y as listen_dev, z as set_data_dev, A as _slicedToArray, B as noop, C as destroy_each, D as _asyncToGenerator, E as _regeneratorRuntime, F as stores$1, G as validate_store, H as component_subscribe, I as group_outros, J as transition_out, K as check_outros, L as transition_in, M as empty, N as validate_each_keys, O as create_component, P as claim_component, Q as mount_component, R as destroy_component, T as update_keyed_each, U as outro_and_destroy_block } from './client.44519a2a.js';
import { a as api, p as post, d as del, g as get } from './api.e3c94137.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\components\\ArticleList\\ArticlePreview.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (37:2) {#if user}


function create_if_block(ctx) {
  var button;
  var i;
  var t0;
  var t1_value =
  /*article*/
  ctx[0].favoritesCount + "";
  var t1;
  var button_class_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      i = element("i");
      t0 = space();
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      i = claim_element(button_nodes, "I", {
        class: true
      });
      children(i).forEach(detach_dev);
      t0 = claim_space(button_nodes);
      t1 = claim_text(button_nodes, t1_value);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "icon heart");
      add_location(i, file, 38, 5, 1153);
      attr_dev(button, "class", button_class_value = "ui right floated button small " + (
      /*article*/
      ctx[0].favorited ? "primary" : ""));
      add_location(button, file, 37, 4, 1037);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, i);
      append_dev(button, t0);
      append_dev(button, t1);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*toggleFavorite*/
        ctx[2], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*article*/
      1 && t1_value !== (t1_value =
      /*article*/
      ctx[0].favoritesCount + "")) set_data_dev(t1, t1_value);

      if (dirty &
      /*article*/
      1 && button_class_value !== (button_class_value = "ui right floated button small " + (
      /*article*/
      ctx[0].favorited ? "primary" : ""))) {
        attr_dev(button, "class", button_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(37:2) {#if user}",
    ctx: ctx
  });
  return block;
} // (50:1) {#each article.tagList as tag}


function create_each_block(ctx) {
  var div1;
  var div0;
  var t0_value =
  /*tag*/
  ctx[3] + "";
  var t0;
  var t1;
  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
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
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "ui tag label");
      add_location(div0, file, 51, 5, 1550);
      attr_dev(div1, "class", "item");
      add_location(div1, file, 50, 4, 1525);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, t0);
      append_dev(div1, t1);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*article*/
      1 && t0_value !== (t0_value =
      /*tag*/
      ctx[3] + "")) set_data_dev(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(50:1) {#each article.tagList as tag}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div7;
  var div6;
  var div2;
  var div1;
  var img;
  var img_src_value;
  var img_alt_value;
  var t0;
  var a0;
  var t1_value =
  /*article*/
  ctx[0].author.username + "";
  var t1;
  var a0_href_value;
  var t2;
  var div0;
  var t3_value = new Date(
  /*article*/
  ctx[0].createdAt).toDateString() + "";
  var t3;
  var t4;
  var t5;
  var div3;
  var t6_value =
  /*article*/
  ctx[0].title + "";
  var t6;
  var t7;
  var div4;
  var t8_value =
  /*article*/
  ctx[0].description + "";
  var t8;
  var t9;
  var a1;
  var span;
  var t10;
  var a1_href_value;
  var t11;
  var div5;
  var if_block =
  /*user*/
  ctx[1] && create_if_block(ctx);
  var each_value =
  /*article*/
  ctx[0].tagList;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      div7 = element("div");
      div6 = element("div");
      div2 = element("div");
      div1 = element("div");
      img = element("img");
      t0 = space();
      a0 = element("a");
      t1 = text(t1_value);
      t2 = space();
      div0 = element("div");
      t3 = text(t3_value);
      t4 = space();
      if (if_block) if_block.c();
      t5 = space();
      div3 = element("div");
      t6 = text(t6_value);
      t7 = space();
      div4 = element("div");
      t8 = text(t8_value);
      t9 = space();
      a1 = element("a");
      span = element("span");
      t10 = text("Read more...");
      t11 = space();
      div5 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div7 = claim_element(nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div2 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div1_nodes);
      a0 = claim_element(div1_nodes, "A", {
        class: true,
        href: true
      });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, t1_value);
      a0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, t3_value);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t4 = claim_space(div6_nodes);
      if (if_block) if_block.l(div6_nodes);
      t5 = claim_space(div6_nodes);
      div3 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t6 = claim_text(div3_nodes, t6_value);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t8 = claim_text(div4_nodes, t8_value);
      div4_nodes.forEach(detach_dev);
      t9 = claim_space(div6_nodes);
      a1 = claim_element(div6_nodes, "A", {
        href: true,
        rel: true
      });
      var a1_nodes = children(a1);
      span = claim_element(a1_nodes, "SPAN", {});
      var span_nodes = children(span);
      t10 = claim_text(span_nodes, "Read more...");
      span_nodes.forEach(detach_dev);
      a1_nodes.forEach(detach_dev);
      t11 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div5_nodes);
      }

      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "ui top aligned mini circular image");
      if (img.src !== (img_src_value =
      /*article*/
      ctx[0].author.image)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", img_alt_value =
      /*article*/
      ctx[0].author.username);
      add_location(img, file, 25, 3, 662);
      attr_dev(a0, "class", "ui top aligned header user green");
      attr_dev(a0, "href", a0_href_value = "/profile/@" +
      /*article*/
      ctx[0].author.username);
      add_location(a0, file, 27, 4, 777);
      attr_dev(div0, "class", "date mini");
      add_location(div0, file, 30, 4, 908);
      attr_dev(div1, "class", "column");
      add_location(div1, file, 24, 3, 637);
      attr_dev(div2, "class", "ui one column grid");
      add_location(div2, file, 23, 2, 600);
      attr_dev(div3, "class", "ui header green");
      add_location(div3, file, 43, 2, 1236);
      attr_dev(div4, "class", "ui small text");
      add_location(div4, file, 44, 2, 1290);
      add_location(span, file, 46, 2, 1401);
      attr_dev(a1, "href", a1_href_value = "/article/" +
      /*article*/
      ctx[0].slug);
      attr_dev(a1, "rel", "prefetch");
      add_location(a1, file, 45, 2, 1348);
      attr_dev(div5, "class", "ui right floated horizontal list");
      add_location(div5, file, 48, 1, 1440);
      attr_dev(div6, "class", "ui padded content");
      add_location(div6, file, 22, 2, 565);
      attr_dev(div7, "class", "ui red card compact");
      add_location(div7, file, 21, 0, 528);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div7, anchor);
      append_dev(div7, div6);
      append_dev(div6, div2);
      append_dev(div2, div1);
      append_dev(div1, img);
      append_dev(div1, t0);
      append_dev(div1, a0);
      append_dev(a0, t1);
      append_dev(div1, t2);
      append_dev(div1, div0);
      append_dev(div0, t3);
      append_dev(div6, t4);
      if (if_block) if_block.m(div6, null);
      append_dev(div6, t5);
      append_dev(div6, div3);
      append_dev(div3, t6);
      append_dev(div6, t7);
      append_dev(div6, div4);
      append_dev(div4, t8);
      append_dev(div6, t9);
      append_dev(div6, a1);
      append_dev(a1, span);
      append_dev(span, t10);
      append_dev(div6, t11);
      append_dev(div6, div5);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div5, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*article*/
      1 && img.src !== (img_src_value =
      /*article*/
      ctx[0].author.image)) {
        attr_dev(img, "src", img_src_value);
      }

      if (dirty &
      /*article*/
      1 && img_alt_value !== (img_alt_value =
      /*article*/
      ctx[0].author.username)) {
        attr_dev(img, "alt", img_alt_value);
      }

      if (dirty &
      /*article*/
      1 && t1_value !== (t1_value =
      /*article*/
      ctx[0].author.username + "")) set_data_dev(t1, t1_value);

      if (dirty &
      /*article*/
      1 && a0_href_value !== (a0_href_value = "/profile/@" +
      /*article*/
      ctx[0].author.username)) {
        attr_dev(a0, "href", a0_href_value);
      }

      if (dirty &
      /*article*/
      1 && t3_value !== (t3_value = new Date(
      /*article*/
      ctx[0].createdAt).toDateString() + "")) set_data_dev(t3, t3_value);

      if (
      /*user*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div6, t5);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*article*/
      1 && t6_value !== (t6_value =
      /*article*/
      ctx[0].title + "")) set_data_dev(t6, t6_value);
      if (dirty &
      /*article*/
      1 && t8_value !== (t8_value =
      /*article*/
      ctx[0].description + "")) set_data_dev(t8, t8_value);

      if (dirty &
      /*article*/
      1 && a1_href_value !== (a1_href_value = "/article/" +
      /*article*/
      ctx[0].slug)) {
        attr_dev(a1, "href", a1_href_value);
      }

      if (dirty &
      /*article*/
      1) {
        each_value =
        /*article*/
        ctx[0].tagList;
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(div5, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div7);
      if (if_block) if_block.d();
      destroy_each(each_blocks, detaching);
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
  validate_slots("ArticlePreview", slots, []);
  var article = $$props.article;
  var user = $$props.user;

  function toggleFavorite() {
    return _toggleFavorite.apply(this, arguments);
  }

  function _toggleFavorite() {
    _toggleFavorite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _yield;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // optimistic UI
              if (article.favorited) {
                $$invalidate(0, article.favoritesCount -= 1, article);
                $$invalidate(0, article.favorited = false, article);
              } else {
                $$invalidate(0, article.favoritesCount += 1, article);
                $$invalidate(0, article.favorited = true, article);
              }

              _context.t0 = $$invalidate;
              _context.next = 4;
              return article.favorited ? post("articles/".concat(article.slug, "/favorite"), null, user && user.token) : del("articles/".concat(article.slug, "/favorite"), user && user.token);

            case 4:
              _yield = _context.sent;
              article = _yield.article;
              _context.t1 = _yield;
              _context.t2 = article;
              (0, _context.t0)(0, _context.t1, _context.t2);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _toggleFavorite.apply(this, arguments);
  }

  var writable_props = ["article", "user"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ArticlePreview> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("article" in $$props) $$invalidate(0, article = $$props.article);
    if ("user" in $$props) $$invalidate(1, user = $$props.user);
  };

  $$self.$capture_state = function () {
    return {
      api: api,
      article: article,
      user: user,
      toggleFavorite: toggleFavorite
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("article" in $$props) $$invalidate(0, article = $$props.article);
    if ("user" in $$props) $$invalidate(1, user = $$props.user);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [article, user, toggleFavorite];
}

var ArticlePreview = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ArticlePreview, _SvelteComponentDev);

  var _super = _createSuper(ArticlePreview);

  function ArticlePreview(options) {
    var _this;

    _classCallCheck(this, ArticlePreview);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      article: 0,
      user: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ArticlePreview",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*article*/
    ctx[0] === undefined && !("article" in props)) {
      console.warn("<ArticlePreview> was created without expected prop 'article'");
    }

    if (
    /*user*/
    ctx[1] === undefined && !("user" in props)) {
      console.warn("<ArticlePreview> was created without expected prop 'user'");
    }

    return _this;
  }

  _createClass(ArticlePreview, [{
    key: "article",
    get: function get() {
      throw new Error("<ArticlePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticlePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "user",
    get: function get() {
      throw new Error("<ArticlePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticlePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ArticlePreview;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\components\\ArticleList\\ListPagination.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (17:0) {#if articlesCount > 10}


function create_if_block$1(ctx) {
  var div;
  var each_value =
  /*range*/
  ctx[2];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
      add_location(div, file$1, 17, 1, 238);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*range, page*/
      6) {
        each_value =
        /*range*/
        ctx[2];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block$1(child_ctx);

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
    source: "(17:0) {#if articlesCount > 10}",
    ctx: ctx
  });
  return block;
} // (19:3) {#each range as v}


function create_each_block$1(ctx) {
  var div1;
  var div0;
  var a;
  var t0_value =
  /*v*/
  ctx[3] + 1 + "";
  var t0;
  var a_class_value;
  var a_href_value;
  var t1;
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
        class: true,
        href: true
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
      attr_dev(a, "class", a_class_value = "ui label " + (
      /*v*/
      ctx[3] + 1 ===
      /*page*/
      ctx[1] ? "active" : ""));
      attr_dev(a, "href", a_href_value = "/" + (
      /*v*/
      ctx[3] ?
      /*v*/
      ctx[3] + 1 : ""));
      add_location(a, file$1, 21, 14, 361);
      attr_dev(div0, "class", "content");
      add_location(div0, file$1, 20, 5, 324);
      attr_dev(div1, "class", "item");
      add_location(div1, file$1, 19, 4, 299);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, a);
      append_dev(a, t0);
      append_dev(div1, t1);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*range*/
      4 && t0_value !== (t0_value =
      /*v*/
      ctx[3] + 1 + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*range, page*/
      6 && a_class_value !== (a_class_value = "ui label " + (
      /*v*/
      ctx[3] + 1 ===
      /*page*/
      ctx[1] ? "active" : ""))) {
        attr_dev(a, "class", a_class_value);
      }

      if (dirty &
      /*range*/
      4 && a_href_value !== (a_href_value = "/" + (
      /*v*/
      ctx[3] ?
      /*v*/
      ctx[3] + 1 : ""))) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(19:3) {#each range as v}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var div;
  var if_block =
  /*articlesCount*/
  ctx[0] > 10 && create_if_block$1(ctx);
  var block = {
    c: function create() {
      div = element("div");
      if (if_block) if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div, file$1, 14, 0, 202);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block) if_block.m(div, null);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*articlesCount*/
      ctx[0] > 10) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (if_block) if_block.d();
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
  validate_slots("ListPagination", slots, []);
  var articlesCount = $$props.articlesCount;
  var _$$props$page = $$props.page,
      page = _$$props$page === void 0 ? 0 : _$$props$page;
  var range;
  var writable_props = ["articlesCount", "page"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ListPagination> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("articlesCount" in $$props) $$invalidate(0, articlesCount = $$props.articlesCount);
    if ("page" in $$props) $$invalidate(1, page = $$props.page);
  };

  $$self.$capture_state = function () {
    return {
      articlesCount: articlesCount,
      page: page,
      range: range
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("articlesCount" in $$props) $$invalidate(0, articlesCount = $$props.articlesCount);
    if ("page" in $$props) $$invalidate(1, page = $$props.page);
    if ("range" in $$props) $$invalidate(2, range = $$props.range);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*articlesCount, range*/
    5) {
       {
        $$invalidate(2, range = []);

        for (var i = 0; i < Math.ceil(articlesCount / 10); ++i) {
          range.push(i);
        }
      }
    }
  };

  return [articlesCount, page, range];
}

var ListPagination = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ListPagination, _SvelteComponentDev);

  var _super = _createSuper$1(ListPagination);

  function ListPagination(options) {
    var _this;

    _classCallCheck(this, ListPagination);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      articlesCount: 0,
      page: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ListPagination",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*articlesCount*/
    ctx[0] === undefined && !("articlesCount" in props)) {
      console.warn("<ListPagination> was created without expected prop 'articlesCount'");
    }

    return _this;
  }

  _createClass(ListPagination, [{
    key: "articlesCount",
    get: function get() {
      throw new Error("<ListPagination>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ListPagination>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "page",
    get: function get() {
      throw new Error("<ListPagination>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ListPagination>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ListPagination;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src\\components\\ArticleList\\index.svelte";

function get_each_context$2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
} // (53:0) {:else}


function create_else_block_1(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "ui active centered inline loader");
      add_location(div, file$2, 53, 1, 1424);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block_1.name,
    type: "else",
    source: "(53:0) {:else}",
    ctx: ctx
  });
  return block;
} // (39:0) {#if articles}


function create_if_block$2(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block_1, create_else_block];
  var if_blocks = [];

  function select_block_type_1(ctx, dirty) {
    if (
    /*articles*/
    ctx[1].length === 0) return 0;
    return 1;
  }

  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
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
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$2.name,
    type: "if",
    source: "(39:0) {#if articles}",
    ctx: ctx
  });
  return block;
} // (44:1) {:else}


function create_else_block(ctx) {
  var div;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var t;
  var listpagination;
  var current;
  var each_value =
  /*articles*/
  ctx[1];
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*article*/
      ctx[12].slug
    );
  };

  validate_each_keys(ctx, each_value, get_each_context$2, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context$2(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$2(key, child_ctx));
  }

  listpagination = new ListPagination({
    props: {
      articlesCount:
      /*articlesCount*/
      ctx[2],
      page:
      /*p*/
      ctx[0]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t = space();
      create_component(listpagination.$$.fragment);
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
      t = claim_space(nodes);
      claim_component(listpagination.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "ui three stackable cards");
      add_location(div, file$2, 44, 1, 1193);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }

      insert_dev(target, t, anchor);
      mount_component(listpagination, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*articles, $session*/
      10) {
        each_value =
        /*articles*/
        ctx[1];
        validate_each_argument(each_value);
        group_outros();
        validate_each_keys(ctx, each_value, get_each_context$2, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block$2, null, get_each_context$2);
        check_outros();
      }

      var listpagination_changes = {};
      if (dirty &
      /*articlesCount*/
      4) listpagination_changes.articlesCount =
      /*articlesCount*/
      ctx[2];
      if (dirty &
      /*p*/
      1) listpagination_changes.page =
      /*p*/
      ctx[0];
      listpagination.$set(listpagination_changes);
    },
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      transition_in(listpagination.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        transition_out(each_blocks[_i5]);
      }

      transition_out(listpagination.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].d();
      }

      if (detaching) detach_dev(t);
      destroy_component(listpagination, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(44:1) {:else}",
    ctx: ctx
  });
  return block;
} // (40:1) {#if articles.length === 0}


function create_if_block_1(ctx) {
  var div;
  var t;
  var block = {
    c: function create() {
      div = element("div");
      t = text("No articles are here... yet.");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      t = claim_text(div_nodes, "No articles are here... yet.");
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "ui label warning");
      add_location(div, file$2, 40, 2, 1107);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(40:1) {#if articles.length === 0}",
    ctx: ctx
  });
  return block;
} // (46:3) {#each articles as article (article.slug)}


function create_each_block$2(key_1, ctx) {
  var first;
  var articlepreview;
  var current;
  articlepreview = new ArticlePreview({
    props: {
      article:
      /*article*/
      ctx[12],
      user:
      /*$session*/
      ctx[3].user
    },
    $$inline: true
  });
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      first = empty();
      create_component(articlepreview.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      first = empty();
      claim_component(articlepreview.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      this.first = first;
    },
    m: function mount(target, anchor) {
      insert_dev(target, first, anchor);
      mount_component(articlepreview, target, anchor);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var articlepreview_changes = {};
      if (dirty &
      /*articles*/
      2) articlepreview_changes.article =
      /*article*/
      ctx[12];
      if (dirty &
      /*$session*/
      8) articlepreview_changes.user =
      /*$session*/
      ctx[3].user;
      articlepreview.$set(articlepreview_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(articlepreview.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(articlepreview.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(first);
      destroy_component(articlepreview, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$2.name,
    type: "each",
    source: "(46:3) {#each articles as article (article.slug)}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var div;
  var current_block_type_index;
  var if_block;
  var current;
  var if_block_creators = [create_if_block$2, create_else_block_1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*articles*/
    ctx[1]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "ui relaxed divided list");
      add_location(div, file$2, 37, 0, 1020);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if_blocks[current_block_type_index].d();
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
  var $session;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("ArticleList", slots, []);
  var tab = $$props.tab,
      _$$props$username = $$props.username,
      username = _$$props$username === void 0 ? false : _$$props$username;
  var _$$props$favorites = $$props.favorites,
      favorites = _$$props$favorites === void 0 ? false : _$$props$favorites;
  var tag = $$props.tag;
  var p = $$props.p;

  var _stores = stores$1(),
      session = _stores.session,
      page = _stores.page;

  validate_store(session, "session");
  component_subscribe($$self, session, function (value) {
    return $$invalidate(3, $session = value);
  });
  var query;
  var articles;
  var articlesCount;

  function getData() {
    return _getData.apply(this, arguments);
  }

  function _getData() {
    _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _yield$api$get;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $$invalidate(1, articles = null); // TODO do we need some error handling here?

              _context.t0 = $$invalidate;
              _context.next = 4;
              return get(query, $session.user && $session.user.token);

            case 4:
              _yield$api$get = _context.sent;
              articles = _yield$api$get.articles;
              articlesCount = _yield$api$get.articlesCount;
              _context.t1 = _yield$api$get;
              _context.t2 = articles;
              _context.t3 = $$invalidate(2, articlesCount);
              (0, _context.t0)(1, _context.t1, _context.t2, _context.t3);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getData.apply(this, arguments);
  }

  var writable_props = ["tab", "username", "favorites", "tag", "p"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ArticleList> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("tab" in $$props) $$invalidate(5, tab = $$props.tab);
    if ("username" in $$props) $$invalidate(6, username = $$props.username);
    if ("favorites" in $$props) $$invalidate(7, favorites = $$props.favorites);
    if ("tag" in $$props) $$invalidate(8, tag = $$props.tag);
    if ("p" in $$props) $$invalidate(0, p = $$props.p);
  };

  $$self.$capture_state = function () {
    return {
      stores: stores$1,
      ArticlePreview: ArticlePreview,
      ListPagination: ListPagination,
      api: api,
      tab: tab,
      username: username,
      favorites: favorites,
      tag: tag,
      p: p,
      session: session,
      page: page,
      query: query,
      articles: articles,
      articlesCount: articlesCount,
      getData: getData,
      $session: $session
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("tab" in $$props) $$invalidate(5, tab = $$props.tab);
    if ("username" in $$props) $$invalidate(6, username = $$props.username);
    if ("favorites" in $$props) $$invalidate(7, favorites = $$props.favorites);
    if ("tag" in $$props) $$invalidate(8, tag = $$props.tag);
    if ("p" in $$props) $$invalidate(0, p = $$props.p);
    if ("query" in $$props) $$invalidate(9, query = $$props.query);
    if ("articles" in $$props) $$invalidate(1, articles = $$props.articles);
    if ("articlesCount" in $$props) $$invalidate(2, articlesCount = $$props.articlesCount);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*tab, p, tag, favorites, username*/
    481) {
       {
        var endpoint = tab === "feed" ? "articles/feed" : "articles";
        var page_size = tab === "feed" ? 5 : 10;
        var params = "limit=".concat(page_size, "&offset=").concat((p - 1) * page_size);
        if (tab === "tag") params += "&tag=".concat(tag);
        if (tab === "profile") params += "&".concat(favorites ? "favorited" : "author", "=").concat(encodeURIComponent(username));
        $$invalidate(9, query = "".concat(endpoint, "?").concat(params));
      }
    }

    if ($$self.$$.dirty &
    /*query*/
    512) {
       query && getData();
    }
  };

  return [p, articles, articlesCount, $session, session, tab, username, favorites, tag, query];
}

var ArticleList = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ArticleList, _SvelteComponentDev);

  var _super = _createSuper$2(ArticleList);

  function ArticleList(options) {
    var _this;

    _classCallCheck(this, ArticleList);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      tab: 5,
      username: 6,
      favorites: 7,
      tag: 8,
      p: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ArticleList",
      options: options,
      id: create_fragment$2.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*tab*/
    ctx[5] === undefined && !("tab" in props)) {
      console.warn("<ArticleList> was created without expected prop 'tab'");
    }

    if (
    /*tag*/
    ctx[8] === undefined && !("tag" in props)) {
      console.warn("<ArticleList> was created without expected prop 'tag'");
    }

    if (
    /*p*/
    ctx[0] === undefined && !("p" in props)) {
      console.warn("<ArticleList> was created without expected prop 'p'");
    }

    return _this;
  }

  _createClass(ArticleList, [{
    key: "tab",
    get: function get() {
      throw new Error("<ArticleList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticleList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "username",
    get: function get() {
      throw new Error("<ArticleList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticleList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "favorites",
    get: function get() {
      throw new Error("<ArticleList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticleList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tag",
    get: function get() {
      throw new Error("<ArticleList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticleList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "p",
    get: function get() {
      throw new Error("<ArticleList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticleList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ArticleList;
}(SvelteComponentDev);

export { ArticleList as A };

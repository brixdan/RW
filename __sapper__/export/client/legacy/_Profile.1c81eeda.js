import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_slots, a1 as goto, k as space, j as element, t as text, N as create_component, Z as query_selector_all, n as detach_dev, o as claim_space, l as claim_element, m as children, p as claim_text, O as claim_component, q as attr_dev, r as add_location, u as insert_dev, w as append_dev, P as mount_component, z as _slicedToArray, y as set_data_dev, K as transition_in, I as transition_out, Q as destroy_component, C as _asyncToGenerator, D as _regeneratorRuntime, x as listen_dev, A as noop } from './client.ad9afb00.js';
import { a as api, p as post, d as del } from './api.4fa24d87.js';
import { A as ArticleList } from './index.6d5b7a68.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\profile\\[user]\\_Profile.svelte"; // (39:5) {:else}

function create_else_block(ctx) {
  var button;
  var i;
  var t0;
  var t1_value = (
  /*profile*/
  ctx[0].following ? "Unfollow" : "Follow") + "";
  var t1;
  var t2;
  var t3_value =
  /*profile*/
  ctx[0].username + "";
  var t3;
  var button_class_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      i = element("i");
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      t3 = text(t3_value);
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
      t2 = claim_space(button_nodes);
      t3 = claim_text(button_nodes, t3_value);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "icon plus");
      add_location(i, file, 43, 7, 1470);
      attr_dev(button, "class", button_class_value = "ui small button right floated " + (
      /*profile*/
      ctx[0].following ? "secondary" : ""));
      add_location(button, file, 39, 6, 1323);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, i);
      append_dev(button, t0);
      append_dev(button, t1);
      append_dev(button, t2);
      append_dev(button, t3);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*toggleFollowing*/
        ctx[3], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*profile*/
      1 && t1_value !== (t1_value = (
      /*profile*/
      ctx[0].following ? "Unfollow" : "Follow") + "")) set_data_dev(t1, t1_value);
      if (dirty &
      /*profile*/
      1 && t3_value !== (t3_value =
      /*profile*/
      ctx[0].username + "")) set_data_dev(t3, t3_value);

      if (dirty &
      /*profile*/
      1 && button_class_value !== (button_class_value = "ui small button right floated " + (
      /*profile*/
      ctx[0].following ? "secondary" : ""))) {
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
    id: create_else_block.name,
    type: "else",
    source: "(39:5) {:else}",
    ctx: ctx
  });
  return block;
} // (35:5) {#if isUser}


function create_if_block(ctx) {
  var a;
  var i;
  var t;
  var block = {
    c: function create() {
      a = element("a");
      i = element("i");
      t = text(" Edit Profile Settings");
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
      t = claim_text(a_nodes, " Edit Profile Settings");
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "ui icon cog");
      add_location(i, file, 36, 7, 1240);
      attr_dev(a, "href", "/settings");
      attr_dev(a, "class", "ui small button right floated");
      add_location(a, file, 35, 6, 1173);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, i);
      append_dev(a, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(35:5) {#if isUser}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var title_value;
  var t0;
  var div6;
  var div3;
  var img;
  var img_src_value;
  var img_alt_value;
  var t1;
  var div0;
  var t2_value =
  /*profile*/
  ctx[0].username + "";
  var t2;
  var t3;
  var div1;
  var t4_value =
  /*profile*/
  ctx[0].bio + "";
  var t4;
  var t5;
  var div2;
  var t6;
  var div5;
  var div4;
  var a0;
  var t7;
  var a0_href_value;
  var a0_class_value;
  var t8;
  var a1;
  var t9;
  var a1_class_value;
  var a1_href_value;
  var t10;
  var articlelist;
  var current;
  document.title = title_value = "" + (
  /*profile*/
  ctx[0].username + " • Conduit");

  function select_block_type(ctx, dirty) {
    if (
    /*isUser*/
    ctx[2]) return create_if_block;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  articlelist = new ArticleList({
    props: {
      tab: "profile",
      username:
      /*profile*/
      ctx[0].username,
      favorites:
      /*favorites*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      div6 = element("div");
      div3 = element("div");
      img = element("img");
      t1 = space();
      div0 = element("div");
      t2 = text(t2_value);
      t3 = space();
      div1 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div2 = element("div");
      if_block.c();
      t6 = space();
      div5 = element("div");
      div4 = element("div");
      a0 = element("a");
      t7 = text("My Articles");
      t8 = space();
      a1 = element("a");
      t9 = text("Favorited Articles");
      t10 = space();
      create_component(articlelist.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1f42o3r\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div3 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      img = claim_element(div3_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t1 = claim_space(div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, t2_value);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, t4_value);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      if_block.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      a0 = claim_element(div4_nodes, "A", {
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t7 = claim_text(a0_nodes, "My Articles");
      a0_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      a1 = claim_element(div4_nodes, "A", {
        class: true,
        href: true
      });
      var a1_nodes = children(a1);
      t9 = claim_text(a1_nodes, "Favorited Articles");
      a1_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t10 = claim_space(div5_nodes);
      claim_component(articlelist.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value =
      /*profile*/
      ctx[0].image)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "ui image tiny centered");
      attr_dev(img, "alt", img_alt_value =
      /*profile*/
      ctx[0].username);
      add_location(img, file, 29, 5, 818);
      attr_dev(div0, "class", "ui header medium centered");
      add_location(div0, file, 30, 5, 906);
      attr_dev(div1, "class", "ui header small centered");
      add_location(div1, file, 31, 5, 976);
      attr_dev(div2, "class", "right floated column");
      add_location(div2, file, 32, 14, 1049);
      attr_dev(div3, "class", "inverted grey column centered");
      add_location(div3, file, 28, 1, 768);
      attr_dev(a0, "href", a0_href_value = "/profile/@" +
      /*profile*/
      ctx[0].username);
      attr_dev(a0, "class", a0_class_value = "item " + (
      /*favorites*/
      ctx[1] ? "" : "active"));
      add_location(a0, file, 52, 2, 1678);
      attr_dev(a1, "class", a1_class_value = "item " + (
      /*favorites*/
      ctx[1] ? "active" : ""));
      attr_dev(a1, "href", a1_href_value = "/profile/@" +
      /*profile*/
      ctx[0].username + "/favorites");
      add_location(a1, file, 53, 2, 1777);
      attr_dev(div4, "class", "ui tabular menu");
      add_location(div4, file, 51, 1, 1645);
      attr_dev(div5, "class", "column");
      add_location(div5, file, 50, 1, 1622);
      attr_dev(div6, "class", "ui one column grid");
      add_location(div6, file, 27, 0, 733);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div6, anchor);
      append_dev(div6, div3);
      append_dev(div3, img);
      append_dev(div3, t1);
      append_dev(div3, div0);
      append_dev(div0, t2);
      append_dev(div3, t3);
      append_dev(div3, div1);
      append_dev(div1, t4);
      append_dev(div3, t5);
      append_dev(div3, div2);
      if_block.m(div2, null);
      append_dev(div6, t6);
      append_dev(div6, div5);
      append_dev(div5, div4);
      append_dev(div4, a0);
      append_dev(a0, t7);
      append_dev(div4, t8);
      append_dev(div4, a1);
      append_dev(a1, t9);
      append_dev(div5, t10);
      mount_component(articlelist, div5, null);
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

      if (!current || dirty &
      /*profile*/
      1 && img.src !== (img_src_value =
      /*profile*/
      ctx[0].image)) {
        attr_dev(img, "src", img_src_value);
      }

      if (!current || dirty &
      /*profile*/
      1 && img_alt_value !== (img_alt_value =
      /*profile*/
      ctx[0].username)) {
        attr_dev(img, "alt", img_alt_value);
      }

      if ((!current || dirty &
      /*profile*/
      1) && t2_value !== (t2_value =
      /*profile*/
      ctx[0].username + "")) set_data_dev(t2, t2_value);
      if ((!current || dirty &
      /*profile*/
      1) && t4_value !== (t4_value =
      /*profile*/
      ctx[0].bio + "")) set_data_dev(t4, t4_value);

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(div2, null);
        }
      }

      if (!current || dirty &
      /*profile*/
      1 && a0_href_value !== (a0_href_value = "/profile/@" +
      /*profile*/
      ctx[0].username)) {
        attr_dev(a0, "href", a0_href_value);
      }

      if (!current || dirty &
      /*favorites*/
      2 && a0_class_value !== (a0_class_value = "item " + (
      /*favorites*/
      ctx[1] ? "" : "active"))) {
        attr_dev(a0, "class", a0_class_value);
      }

      if (!current || dirty &
      /*favorites*/
      2 && a1_class_value !== (a1_class_value = "item " + (
      /*favorites*/
      ctx[1] ? "active" : ""))) {
        attr_dev(a1, "class", a1_class_value);
      }

      if (!current || dirty &
      /*profile*/
      1 && a1_href_value !== (a1_href_value = "/profile/@" +
      /*profile*/
      ctx[0].username + "/favorites")) {
        attr_dev(a1, "href", a1_href_value);
      }

      var articlelist_changes = {};
      if (dirty &
      /*profile*/
      1) articlelist_changes.username =
      /*profile*/
      ctx[0].username;
      if (dirty &
      /*favorites*/
      2) articlelist_changes.favorites =
      /*favorites*/
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div6);
      if_block.d();
      destroy_component(articlelist);
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
  var isUser;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Profile", slots, []);
  var profile = $$props.profile;
  var favorites = $$props.favorites;
  var user = $$props.user;

  function toggleFollowing() {
    return _toggleFollowing.apply(this, arguments);
  }

  function _toggleFollowing() {
    _toggleFollowing = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _yield;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (user) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", goto("/login"));

            case 2:
              // optimistic UI
              $$invalidate(0, profile.following = !profile.following, profile);
              _context.t0 = $$invalidate;
              _context.next = 6;
              return profile.following ? post("profiles/".concat(profile.username, "/follow"), null, user && user.token) : del("profiles/".concat(profile.username, "/follow"), user && user.token);

            case 6:
              _yield = _context.sent;
              profile = _yield.profile;
              favorites = _yield.favorites;
              _context.t1 = _yield;
              _context.t2 = profile;
              _context.t3 = $$invalidate(1, favorites);
              (0, _context.t0)(0, _context.t1, _context.t2, _context.t3);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _toggleFollowing.apply(this, arguments);
  }

  var writable_props = ["profile", "favorites", "user"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Profile> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
    if ("favorites" in $$props) $$invalidate(1, favorites = $$props.favorites);
    if ("user" in $$props) $$invalidate(4, user = $$props.user);
  };

  $$self.$capture_state = function () {
    return {
      goto: goto,
      ArticleList: ArticleList,
      api: api,
      profile: profile,
      favorites: favorites,
      user: user,
      toggleFollowing: toggleFollowing,
      isUser: isUser
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
    if ("favorites" in $$props) $$invalidate(1, favorites = $$props.favorites);
    if ("user" in $$props) $$invalidate(4, user = $$props.user);
    if ("isUser" in $$props) $$invalidate(2, isUser = $$props.isUser);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*user, profile*/
    17) {
       $$invalidate(2, isUser = user && profile.username === user.username);
    }
  };

  return [profile, favorites, isUser, toggleFollowing, user];
}

var Profile = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Profile, _SvelteComponentDev);

  var _super = _createSuper(Profile);

  function Profile(options) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      profile: 0,
      favorites: 1,
      user: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Profile",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*profile*/
    ctx[0] === undefined && !("profile" in props)) {
      console.warn("<Profile> was created without expected prop 'profile'");
    }

    if (
    /*favorites*/
    ctx[1] === undefined && !("favorites" in props)) {
      console.warn("<Profile> was created without expected prop 'favorites'");
    }

    if (
    /*user*/
    ctx[4] === undefined && !("user" in props)) {
      console.warn("<Profile> was created without expected prop 'user'");
    }

    return _this;
  }

  _createClass(Profile, [{
    key: "profile",
    get: function get() {
      throw new Error("<Profile>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Profile>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "favorites",
    get: function get() {
      throw new Error("<Profile>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Profile>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "user",
    get: function get() {
      throw new Error("<Profile>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Profile>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Profile;
}(SvelteComponentDev);

export { Profile as P };

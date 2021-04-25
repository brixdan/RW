import { a as _inherits, b as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, g as dispatch_dev, h as _createClass, S as SvelteComponentDev, v as validate_each_argument, j as validate_slots, F as stores$1, G as validate_store, H as component_subscribe, a2 as goto, k as element, t as text, l as space, m as claim_element, n as children, q as claim_text, o as detach_dev, p as claim_space, r as attr_dev, u as add_location, w as insert_dev, x as append_dev, y as listen_dev, z as set_data_dev, O as create_component, P as claim_component, Q as mount_component, a3 as set_input_value, ab as action_destroyer, A as _slicedToArray, a5 as prop_dev, L as transition_in, J as transition_out, R as destroy_component, C as destroy_each, V as run_all, aa as _toConsumableArray, D as _asyncToGenerator, E as _regeneratorRuntime } from './client.44519a2a.js';
import { a as api, b as put, p as post } from './api.e3c94137.js';
import { L as ListErrors } from './ListErrors.e8a95000.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\editor\\_Editor.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  child_ctx[16] = i;
  return child_ctx;
} // (82:8) {#each article.tagList as tag, i}


function create_each_block(ctx) {
  var div1;
  var div0;
  var t0_value =
  /*tag*/
  ctx[14] + "";
  var t0;
  var t1;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[12](
      /*i*/
      ctx[16])
    );
  }

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
      add_location(div0, file, 83, 10, 2065);
      attr_dev(div1, "class", "item");
      add_location(div1, file, 82, 9, 2035);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, t0);
      append_dev(div1, t1);

      if (!mounted) {
        dispose = listen_dev(div0, "click", click_handler, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*article*/
      1 && t0_value !== (t0_value =
      /*tag*/
      ctx[14] + "")) set_data_dev(t0, t0_value);
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
    source: "(82:8) {#each article.tagList as tag, i}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div9;
  var div8;
  var listerrors;
  var t0;
  var div7;
  var div6;
  var div0;
  var input0;
  var t1;
  var div1;
  var input1;
  var t2;
  var div2;
  var textarea;
  var t3;
  var div3;
  var input2;
  var enter_action;
  var t4;
  var div5;
  var div4;
  var t5;
  var button;
  var t6;
  var current;
  var mounted;
  var dispose;
  listerrors = new ListErrors({
    props: {
      errors:
      /*errors*/
      ctx[2]
    },
    $$inline: true
  });
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
      div9 = element("div");
      div8 = element("div");
      create_component(listerrors.$$.fragment);
      t0 = space();
      div7 = element("div");
      div6 = element("div");
      div0 = element("div");
      input0 = element("input");
      t1 = space();
      div1 = element("div");
      input1 = element("input");
      t2 = space();
      div2 = element("div");
      textarea = element("textarea");
      t3 = space();
      div3 = element("div");
      input2 = element("input");
      t4 = space();
      div5 = element("div");
      div4 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t5 = space();
      button = element("button");
      t6 = text("Publish Article");
      this.h();
    },
    l: function claim(nodes) {
      div9 = claim_element(nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      claim_component(listerrors.$$.fragment, div8_nodes);
      t0 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div0 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      input0 = claim_element(div0_nodes, "INPUT", {
        class: true,
        type: true,
        placeholder: true
      });
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div6_nodes);
      div1 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      input1 = claim_element(div1_nodes, "INPUT", {
        class: true,
        type: true,
        placeholder: true
      });
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div6_nodes);
      div2 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      textarea = claim_element(div2_nodes, "TEXTAREA", {
        class: true,
        rows: true,
        placeholder: true
      });
      children(textarea).forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t3 = claim_space(div6_nodes);
      div3 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      input2 = claim_element(div3_nodes, "INPUT", {
        class: true,
        type: true,
        placeholder: true
      });
      div3_nodes.forEach(detach_dev);
      t4 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div4_nodes);
      }

      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t5 = claim_space(div6_nodes);
      button = claim_element(div6_nodes, "BUTTON", {
        class: true,
        type: true,
        disabled: true
      });
      var button_nodes = children(button);
      t6 = claim_text(button_nodes, "Publish Article");
      button_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input0, "class", "ui input");
      attr_dev(input0, "type", "text");
      attr_dev(input0, "placeholder", "Article Title");
      add_location(input0, file, 64, 7, 1379);
      attr_dev(div0, "class", "field");
      add_location(div0, file, 63, 6, 1351);
      attr_dev(input1, "class", "ui input");
      attr_dev(input1, "type", "text");
      attr_dev(input1, "placeholder", "Gist");
      add_location(input1, file, 68, 7, 1522);
      attr_dev(div1, "class", "field");
      add_location(div1, file, 67, 6, 1494);
      attr_dev(textarea, "class", "");
      attr_dev(textarea, "rows", "8");
      attr_dev(textarea, "placeholder", "Body in markdown");
      add_location(textarea, file, 72, 7, 1662);
      attr_dev(div2, "class", "field");
      add_location(div2, file, 71, 6, 1634);
      attr_dev(input2, "class", "input");
      attr_dev(input2, "type", "text");
      attr_dev(input2, "placeholder", "Enter tags");
      add_location(input2, file, 76, 7, 1800);
      attr_dev(div3, "class", "field");
      add_location(div3, file, 75, 6, 1772);
      attr_dev(div4, "class", "ui horizontal list");
      add_location(div4, file, 80, 7, 1949);
      attr_dev(div5, "class", "field");
      add_location(div5, file, 79, 6, 1921);
      attr_dev(button, "class", "ui button primary");
      attr_dev(button, "type", "submit");
      button.disabled =
      /*inProgress*/
      ctx[1];
      add_location(button, file, 91, 6, 2230);
      attr_dev(div6, "class", "field");
      add_location(div6, file, 62, 5, 1324);
      attr_dev(div7, "class", "ui form");
      add_location(div7, file, 61, 4, 1296);
      attr_dev(div8, "class", "row");
      add_location(div8, file, 58, 2, 1243);
      attr_dev(div9, "class", "ui container svelte-11j5l9g");
      add_location(div9, file, 57, 1, 1213);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div9, anchor);
      append_dev(div9, div8);
      mount_component(listerrors, div8, null);
      append_dev(div8, t0);
      append_dev(div8, div7);
      append_dev(div7, div6);
      append_dev(div6, div0);
      append_dev(div0, input0);
      set_input_value(input0,
      /*article*/
      ctx[0].title);
      append_dev(div6, t1);
      append_dev(div6, div1);
      append_dev(div1, input1);
      set_input_value(input1,
      /*article*/
      ctx[0].description);
      append_dev(div6, t2);
      append_dev(div6, div2);
      append_dev(div2, textarea);
      set_input_value(textarea,
      /*article*/
      ctx[0].body);
      append_dev(div6, t3);
      append_dev(div6, div3);
      append_dev(div3, input2);
      append_dev(div6, t4);
      append_dev(div6, div5);
      append_dev(div5, div4);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div4, null);
      }

      append_dev(div6, t5);
      append_dev(div6, button);
      append_dev(button, t6);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[8]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[9]), listen_dev(textarea, "input",
        /*textarea_input_handler*/
        ctx[10]), action_destroyer(enter_action = enter.call(null, input2,
        /*enter_function*/
        ctx[11])), listen_dev(button, "click",
        /*publish*/
        ctx[6], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*article*/
      1 && input0.value !==
      /*article*/
      ctx[0].title) {
        set_input_value(input0,
        /*article*/
        ctx[0].title);
      }

      if (dirty &
      /*article*/
      1 && input1.value !==
      /*article*/
      ctx[0].description) {
        set_input_value(input1,
        /*article*/
        ctx[0].description);
      }

      if (dirty &
      /*article*/
      1) {
        set_input_value(textarea,
        /*article*/
        ctx[0].body);
      }

      if (dirty &
      /*remove, article*/
      33) {
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

            each_blocks[_i4].m(div4, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (!current || dirty &
      /*inProgress*/
      2) {
        prop_dev(button, "disabled",
        /*inProgress*/
        ctx[1]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(listerrors.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(listerrors.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div9);
      destroy_component(listerrors);
      destroy_each(each_blocks, detaching);
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

function enter(node, callback) {
  function onkeydown(event) {
    if (event.which === 13) callback(node);
  }

  node.addEventListener("keydown", onkeydown);
  return {
    destroy: function destroy() {
      node.removeEventListener("keydown", onkeydown);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var $session;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Editor", slots, []);
  var article = $$props.article;
  var slug = $$props.slug;
  var inProgress = false;
  var errors;

  var _stores = stores$1(),
      session = _stores.session;

  validate_store(session, "session");
  component_subscribe($$self, session, function (value) {
    return $$invalidate(13, $session = value);
  });

  function addTag(input) {
    $$invalidate(0, article.tagList = [].concat(_toConsumableArray(article.tagList), [input.value]), article);
    input.value = "";
  }

  function remove(index) {
    $$invalidate(0, article.tagList = [].concat(_toConsumableArray(article.tagList.slice(0, index)), _toConsumableArray(article.tagList.slice(index + 1))), article);
  }

  function publish() {
    return _publish.apply(this, arguments);
  }

  function _publish() {
    _publish = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var response;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $$invalidate(1, inProgress = true);
              _context.next = 3;
              return slug ? put("articles/".concat(slug), {
                article: article
              }, $session.user && $session.user.token) : post("articles", {
                article: article
              }, $session.user && $session.user.token);

            case 3:
              response = _context.sent;

              if (response.article) {
                goto("/article/".concat(response.article.slug));
              }

              $$invalidate(1, inProgress = false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _publish.apply(this, arguments);
  }

  var writable_props = ["article", "slug"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Editor> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    article.title = this.value;
    $$invalidate(0, article);
  }

  function input1_input_handler() {
    article.description = this.value;
    $$invalidate(0, article);
  }

  function textarea_input_handler() {
    article.body = this.value;
    $$invalidate(0, article);
  }

  var enter_function = function enter_function(value) {
    return addTag(value);
  };

  var click_handler = function click_handler(i) {
    return remove(i);
  };

  $$self.$$set = function ($$props) {
    if ("article" in $$props) $$invalidate(0, article = $$props.article);
    if ("slug" in $$props) $$invalidate(7, slug = $$props.slug);
  };

  $$self.$capture_state = function () {
    return {
      goto: goto,
      stores: stores$1,
      ListErrors: ListErrors,
      api: api,
      article: article,
      slug: slug,
      inProgress: inProgress,
      errors: errors,
      session: session,
      addTag: addTag,
      remove: remove,
      publish: publish,
      enter: enter,
      $session: $session
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("article" in $$props) $$invalidate(0, article = $$props.article);
    if ("slug" in $$props) $$invalidate(7, slug = $$props.slug);
    if ("inProgress" in $$props) $$invalidate(1, inProgress = $$props.inProgress);
    if ("errors" in $$props) $$invalidate(2, errors = $$props.errors);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [article, inProgress, errors, session, addTag, remove, publish, slug, input0_input_handler, input1_input_handler, textarea_input_handler, enter_function, click_handler];
}

var Editor = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Editor, _SvelteComponentDev);

  var _super = _createSuper(Editor);

  function Editor(options) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      article: 0,
      slug: 7
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Editor",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*article*/
    ctx[0] === undefined && !("article" in props)) {
      console.warn("<Editor> was created without expected prop 'article'");
    }

    if (
    /*slug*/
    ctx[7] === undefined && !("slug" in props)) {
      console.warn("<Editor> was created without expected prop 'slug'");
    }

    return _this;
  }

  _createClass(Editor, [{
    key: "article",
    get: function get() {
      throw new Error("<Editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "slug",
    get: function get() {
      throw new Error("<Editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Editor;
}(SvelteComponentDev);

export { Editor as E };

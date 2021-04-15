import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_slots, V as createEventDispatcher, j as element, k as space, t as text, l as claim_element, m as children, n as detach_dev, o as claim_space, p as claim_text, q as attr_dev, r as add_location, u as insert_dev, w as append_dev, a2 as set_input_value, x as listen_dev, a3 as prevent_default, z as _slicedToArray, a4 as prop_dev, A as noop, U as run_all, a6 as assign, E as stores$1, F as validate_store, G as component_subscribe, a1 as goto, N as create_component, Z as query_selector_all, O as claim_component, P as mount_component, a7 as get_spread_update, a8 as get_spread_object, K as transition_in, I as transition_out, Q as destroy_component, C as _asyncToGenerator, D as _regeneratorRuntime, a5 as set_store_value } from './client.ad9afb00.js';
import { L as ListErrors } from './ListErrors.b1b08794.js';
import { p as post } from './utils.6613394c.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\_SettingsForm.svelte";

function create_fragment(ctx) {
  var form;
  var div5;
  var div0;
  var input0;
  var t0;
  var div1;
  var input1;
  var t1;
  var div2;
  var textarea;
  var t2;
  var div3;
  var input2;
  var t3;
  var div4;
  var input3;
  var t4;
  var button;
  var t5;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      form = element("form");
      div5 = element("div");
      div0 = element("div");
      input0 = element("input");
      t0 = space();
      div1 = element("div");
      input1 = element("input");
      t1 = space();
      div2 = element("div");
      textarea = element("textarea");
      t2 = space();
      div3 = element("div");
      input2 = element("input");
      t3 = space();
      div4 = element("div");
      input3 = element("input");
      t4 = space();
      button = element("button");
      t5 = text("Update Settings");
      this.h();
    },
    l: function claim(nodes) {
      form = claim_element(nodes, "FORM", {
        class: true
      });
      var form_nodes = children(form);
      div5 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      input0 = claim_element(div0_nodes, "INPUT", {
        name: true,
        type: true,
        placeholder: true
      });
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      input1 = claim_element(div1_nodes, "INPUT", {
        name: true,
        type: true,
        placeholder: true
      });
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      textarea = claim_element(div2_nodes, "TEXTAREA", {
        name: true,
        class: true,
        rows: true,
        placeholder: true
      });
      children(textarea).forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t2 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      input2 = claim_element(div3_nodes, "INPUT", {
        name: true,
        type: true,
        placeholder: true
      });
      div3_nodes.forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      input3 = claim_element(div4_nodes, "INPUT", {
        name: true,
        type: true,
        placeholder: true
      });
      div4_nodes.forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      button = claim_element(div5_nodes, "BUTTON", {
        class: true,
        type: true,
        disabled: true
      });
      var button_nodes = children(button);
      t5 = claim_text(button_nodes, "Update Settings");
      button_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input0, "name", "image");
      attr_dev(input0, "type", "text");
      attr_dev(input0, "placeholder", "URL of profile picture");
      add_location(input0, file, 15, 12, 454);
      attr_dev(div0, "class", "field");
      add_location(div0, file, 14, 8, 421);
      attr_dev(input1, "name", "username");
      attr_dev(input1, "type", "text");
      attr_dev(input1, "placeholder", "Username");
      add_location(input1, file, 19, 12, 603);
      attr_dev(div1, "class", "field");
      add_location(div1, file, 18, 8, 570);
      attr_dev(textarea, "name", "bio");
      attr_dev(textarea, "class", "form large");
      attr_dev(textarea, "rows", "8");
      attr_dev(textarea, "placeholder", "Short bio about you");
      add_location(textarea, file, 23, 12, 744);
      attr_dev(div2, "class", "field");
      add_location(div2, file, 22, 8, 711);
      attr_dev(input2, "name", "email");
      attr_dev(input2, "type", "email");
      attr_dev(input2, "placeholder", "Email");
      add_location(input2, file, 27, 12, 906);
      attr_dev(div3, "class", "field");
      add_location(div3, file, 26, 8, 873);
      attr_dev(input3, "name", "password");
      attr_dev(input3, "type", "password");
      attr_dev(input3, "placeholder", "New Password");
      add_location(input3, file, 31, 12, 1039);
      attr_dev(div4, "class", "field");
      add_location(div4, file, 30, 8, 1006);
      attr_dev(button, "class", "ui right floated primary button");
      attr_dev(button, "type", "submit");
      button.disabled =
      /*inProgress*/
      ctx[5];
      add_location(button, file, 34, 8, 1155);
      attr_dev(div5, "class", "ui clearing segment");
      add_location(div5, file, 12, 4, 376);
      attr_dev(form, "class", "ui large form");
      add_location(form, file, 11, 0, 306);
    },
    m: function mount(target, anchor) {
      insert_dev(target, form, anchor);
      append_dev(form, div5);
      append_dev(div5, div0);
      append_dev(div0, input0);
      set_input_value(input0,
      /*image*/
      ctx[0]);
      append_dev(div5, t0);
      append_dev(div5, div1);
      append_dev(div1, input1);
      set_input_value(input1,
      /*username*/
      ctx[1]);
      append_dev(div5, t1);
      append_dev(div5, div2);
      append_dev(div2, textarea);
      set_input_value(textarea,
      /*bio*/
      ctx[2]);
      append_dev(div5, t2);
      append_dev(div5, div3);
      append_dev(div3, input2);
      set_input_value(input2,
      /*email*/
      ctx[3]);
      append_dev(div5, t3);
      append_dev(div5, div4);
      append_dev(div4, input3);
      set_input_value(input3,
      /*password*/
      ctx[4]);
      append_dev(div5, t4);
      append_dev(div5, button);
      append_dev(button, t5);

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[7]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[8]), listen_dev(textarea, "input",
        /*textarea_input_handler*/
        ctx[9]), listen_dev(input2, "input",
        /*input2_input_handler*/
        ctx[10]), listen_dev(input3, "input",
        /*input3_input_handler*/
        ctx[11]), listen_dev(form, "submit", prevent_default(
        /*submit*/
        ctx[6]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*image*/
      1 && input0.value !==
      /*image*/
      ctx[0]) {
        set_input_value(input0,
        /*image*/
        ctx[0]);
      }

      if (dirty &
      /*username*/
      2 && input1.value !==
      /*username*/
      ctx[1]) {
        set_input_value(input1,
        /*username*/
        ctx[1]);
      }

      if (dirty &
      /*bio*/
      4) {
        set_input_value(textarea,
        /*bio*/
        ctx[2]);
      }

      if (dirty &
      /*email*/
      8 && input2.value !==
      /*email*/
      ctx[3]) {
        set_input_value(input2,
        /*email*/
        ctx[3]);
      }

      if (dirty &
      /*password*/
      16 && input3.value !==
      /*password*/
      ctx[4]) {
        set_input_value(input3,
        /*password*/
        ctx[4]);
      }

      if (dirty &
      /*inProgress*/
      32) {
        prop_dev(button, "disabled",
        /*inProgress*/
        ctx[5]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(form);
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
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("SettingsForm", slots, []);
  var inProgress = $$props.inProgress,
      image = $$props.image,
      username = $$props.username,
      bio = $$props.bio,
      email = $$props.email,
      _$$props$password = $$props.password,
      password = _$$props$password === void 0 ? "" : _$$props$password;
  var dispatch = createEventDispatcher();

  function submit(event) {
    dispatch("save", {
      image: image,
      username: username,
      bio: bio,
      email: email,
      password: password
    });
  }

  var writable_props = ["inProgress", "image", "username", "bio", "email", "password"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SettingsForm> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    image = this.value;
    $$invalidate(0, image);
  }

  function input1_input_handler() {
    username = this.value;
    $$invalidate(1, username);
  }

  function textarea_input_handler() {
    bio = this.value;
    $$invalidate(2, bio);
  }

  function input2_input_handler() {
    email = this.value;
    $$invalidate(3, email);
  }

  function input3_input_handler() {
    password = this.value;
    $$invalidate(4, password);
  }

  $$self.$$set = function ($$props) {
    if ("inProgress" in $$props) $$invalidate(5, inProgress = $$props.inProgress);
    if ("image" in $$props) $$invalidate(0, image = $$props.image);
    if ("username" in $$props) $$invalidate(1, username = $$props.username);
    if ("bio" in $$props) $$invalidate(2, bio = $$props.bio);
    if ("email" in $$props) $$invalidate(3, email = $$props.email);
    if ("password" in $$props) $$invalidate(4, password = $$props.password);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      inProgress: inProgress,
      image: image,
      username: username,
      bio: bio,
      email: email,
      password: password,
      dispatch: dispatch,
      submit: submit
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("inProgress" in $$props) $$invalidate(5, inProgress = $$props.inProgress);
    if ("image" in $$props) $$invalidate(0, image = $$props.image);
    if ("username" in $$props) $$invalidate(1, username = $$props.username);
    if ("bio" in $$props) $$invalidate(2, bio = $$props.bio);
    if ("email" in $$props) $$invalidate(3, email = $$props.email);
    if ("password" in $$props) $$invalidate(4, password = $$props.password);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [image, username, bio, email, password, inProgress, submit, input0_input_handler, input1_input_handler, textarea_input_handler, input2_input_handler, input3_input_handler];
}

var SettingsForm = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SettingsForm, _SvelteComponentDev);

  var _super = _createSuper(SettingsForm);

  function SettingsForm(options) {
    var _this;

    _classCallCheck(this, SettingsForm);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      inProgress: 5,
      image: 0,
      username: 1,
      bio: 2,
      email: 3,
      password: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SettingsForm",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*inProgress*/
    ctx[5] === undefined && !("inProgress" in props)) {
      console.warn("<SettingsForm> was created without expected prop 'inProgress'");
    }

    if (
    /*image*/
    ctx[0] === undefined && !("image" in props)) {
      console.warn("<SettingsForm> was created without expected prop 'image'");
    }

    if (
    /*username*/
    ctx[1] === undefined && !("username" in props)) {
      console.warn("<SettingsForm> was created without expected prop 'username'");
    }

    if (
    /*bio*/
    ctx[2] === undefined && !("bio" in props)) {
      console.warn("<SettingsForm> was created without expected prop 'bio'");
    }

    if (
    /*email*/
    ctx[3] === undefined && !("email" in props)) {
      console.warn("<SettingsForm> was created without expected prop 'email'");
    }

    return _this;
  }

  _createClass(SettingsForm, [{
    key: "inProgress",
    get: function get() {
      throw new Error("<SettingsForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SettingsForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "image",
    get: function get() {
      throw new Error("<SettingsForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SettingsForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "username",
    get: function get() {
      throw new Error("<SettingsForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SettingsForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "bio",
    get: function get() {
      throw new Error("<SettingsForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SettingsForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "email",
    get: function get() {
      throw new Error("<SettingsForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SettingsForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "password",
    get: function get() {
      throw new Error("<SettingsForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SettingsForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return SettingsForm;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\routes\\settings.svelte";

function create_fragment$1(ctx) {
  var t0;
  var div4;
  var div1;
  var div0;
  var h1;
  var t1;
  var t2;
  var listerrors;
  var t3;
  var settingsform;
  var t4;
  var hr;
  var t5;
  var div3;
  var div2;
  var t6;
  var t7;
  var br;
  var current;
  var mounted;
  var dispose;
  listerrors = new ListErrors({
    props: {
      errors:
      /*errors*/
      ctx[1]
    },
    $$inline: true
  });
  var settingsform_spread_levels = [
  /*$session*/
  ctx[2].user, {
    inProgress:
    /*inProgress*/
    ctx[0]
  }];
  var settingsform_props = {};

  for (var i = 0; i < settingsform_spread_levels.length; i += 1) {
    settingsform_props = assign(settingsform_props, settingsform_spread_levels[i]);
  }

  settingsform = new SettingsForm({
    props: settingsform_props,
    $$inline: true
  });
  settingsform.$on("save",
  /*save*/
  ctx[5]);
  var block = {
    c: function create() {
      t0 = space();
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      t1 = text("Your Settings");
      t2 = space();
      create_component(listerrors.$$.fragment);
      t3 = space();
      create_component(settingsform.$$.fragment);
      t4 = space();
      hr = element("hr");
      t5 = space();
      div3 = element("div");
      div2 = element("div");
      t6 = text("Or click here to logout.");
      t7 = space();
      br = element("br");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-tgkgny\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Your Settings");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      claim_component(listerrors.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      claim_component(settingsform.$$.fragment, div0_nodes);
      t4 = claim_space(div0_nodes);
      hr = claim_element(div0_nodes, "HR", {});
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t6 = claim_text(div2_nodes, "Or click here to logout.");
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      br = claim_element(div4_nodes, "BR", {});
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Settings • Conduit";
      attr_dev(h1, "class", "ui text centered");
      add_location(h1, file$1, 42, 16, 998);
      add_location(hr, file$1, 48, 16, 1189);
      attr_dev(div0, "class", "row");
      add_location(div0, file$1, 40, 12, 961);
      attr_dev(div1, "class", "ui center aligned row");
      add_location(div1, file$1, 39, 8, 912);
      attr_dev(div2, "class", "ui negative basic button right aligned");
      add_location(div2, file$1, 54, 16, 1299);
      attr_dev(div3, "class", "right attached row");
      add_location(div3, file$1, 52, 12, 1247);
      add_location(br, file$1, 58, 8, 1469);
      attr_dev(div4, "class", "ui container medium one column svelte-18h4jma");
      add_location(div4, file$1, 38, 4, 858);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div4, anchor);
      append_dev(div4, div1);
      append_dev(div1, div0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      append_dev(div0, t2);
      mount_component(listerrors, div0, null);
      append_dev(div0, t3);
      mount_component(settingsform, div0, null);
      append_dev(div0, t4);
      append_dev(div0, hr);
      append_dev(div4, t5);
      append_dev(div4, div3);
      append_dev(div3, div2);
      append_dev(div2, t6);
      append_dev(div4, t7);
      append_dev(div4, br);
      current = true;

      if (!mounted) {
        dispose = listen_dev(div2, "click",
        /*logout*/
        ctx[4], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var listerrors_changes = {};
      if (dirty &
      /*errors*/
      2) listerrors_changes.errors =
      /*errors*/
      ctx[1];
      listerrors.$set(listerrors_changes);
      var settingsform_changes = dirty &
      /*$session, inProgress*/
      5 ? get_spread_update(settingsform_spread_levels, [dirty &
      /*$session*/
      4 && get_spread_object(
      /*$session*/
      ctx[2].user), dirty &
      /*inProgress*/
      1 && {
        inProgress:
        /*inProgress*/
        ctx[0]
      }]) : {};
      settingsform.$set(settingsform_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(listerrors.$$.fragment, local);
      transition_in(settingsform.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(listerrors.$$.fragment, local);
      transition_out(settingsform.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div4);
      destroy_component(listerrors);
      destroy_component(settingsform);
      mounted = false;
      dispose();
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
  var $session;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Settings", slots, []);
  var inProgress;
  var errors;

  var _stores = stores$1(),
      session = _stores.session;

  validate_store(session, "session");
  component_subscribe($$self, session, function (value) {
    return $$invalidate(2, $session = value);
  });

  function logout() {
    return _logout.apply(this, arguments);
  }

  function _logout() {
    _logout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return post("auth/logout");

            case 2:
              set_store_value(session, $session.user = null, $session);
              goto("/");

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _logout.apply(this, arguments);
  }

  function save(_x) {
    return _save.apply(this, arguments);
  }

  function _save() {
    _save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(event) {
      var response;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              $$invalidate(0, inProgress = true);
              _context2.next = 3;
              return post("auth/save", event.detail);

            case 3:
              response = _context2.sent;
              $$invalidate(1, errors = response.errors);
              if (response.user) set_store_value(session, $session.user = response.user, $session);
              $$invalidate(0, inProgress = false);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _save.apply(this, arguments);
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Settings> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      goto: goto,
      stores: stores$1,
      ListErrors: ListErrors,
      SettingsForm: SettingsForm,
      post: post,
      inProgress: inProgress,
      errors: errors,
      session: session,
      logout: logout,
      save: save,
      $session: $session
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("inProgress" in $$props) $$invalidate(0, inProgress = $$props.inProgress);
    if ("errors" in $$props) $$invalidate(1, errors = $$props.errors);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [inProgress, errors, $session, session, logout, save];
}

var Settings = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Settings, _SvelteComponentDev);

  var _super = _createSuper$1(Settings);

  function Settings(options) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Settings",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Settings;
}(SvelteComponentDev);

export default Settings;

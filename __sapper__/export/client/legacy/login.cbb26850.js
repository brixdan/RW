import { a as _inherits, b as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, i as init, s as safe_not_equal, f as _assertThisInitialized, g as dispatch_dev, S as SvelteComponentDev, j as validate_slots, F as stores$1, G as validate_store, H as component_subscribe, a2 as goto, l as space, k as element, t as text, O as create_component, $ as query_selector_all, o as detach_dev, p as claim_space, m as claim_element, n as children, q as claim_text, P as claim_component, r as attr_dev, u as add_location, w as insert_dev, x as append_dev, Q as mount_component, a3 as set_input_value, y as listen_dev, a4 as prevent_default, A as _slicedToArray, a5 as prop_dev, L as transition_in, J as transition_out, R as destroy_component, V as run_all, D as _asyncToGenerator, E as _regeneratorRuntime, a6 as set_store_value, a1 as globals } from './client.44519a2a.js';
import { L as ListErrors } from './ListErrors.e8a95000.js';
import { p as post } from './utils.d97a264c.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var document_1 = globals.document;
var file = "src\\routes\\login.svelte";

function create_fragment(ctx) {
  var t0;
  var div9;
  var div8;
  var h2;
  var img;
  var img_src_value;
  var t1;
  var div0;
  var t2;
  var t3;
  var listerrors;
  var t4;
  var form;
  var div5;
  var div2;
  var div1;
  var i0;
  var t5;
  var input0;
  var t6;
  var div4;
  var div3;
  var i1;
  var t7;
  var input1;
  var t8;
  var button;
  var t9;
  var button_disabled_value;
  var t10;
  var div6;
  var t11;
  var div7;
  var t12;
  var a;
  var t13;
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
  var block = {
    c: function create() {
      t0 = space();
      div9 = element("div");
      div8 = element("div");
      h2 = element("h2");
      img = element("img");
      t1 = space();
      div0 = element("div");
      t2 = text("Log-in to your account");
      t3 = space();
      create_component(listerrors.$$.fragment);
      t4 = space();
      form = element("form");
      div5 = element("div");
      div2 = element("div");
      div1 = element("div");
      i0 = element("i");
      t5 = space();
      input0 = element("input");
      t6 = space();
      div4 = element("div");
      div3 = element("div");
      i1 = element("i");
      t7 = space();
      input1 = element("input");
      t8 = space();
      button = element("button");
      t9 = text("Log In");
      t10 = space();
      div6 = element("div");
      t11 = space();
      div7 = element("div");
      t12 = text("New to us? ");
      a = element("a");
      t13 = text("Sign Up");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-jixav5\"]", document_1.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div9 = claim_element(nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      h2 = claim_element(div8_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      img = claim_element(h2_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t1 = claim_space(h2_nodes);
      div0 = claim_element(h2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, "Log-in to your account");
      div0_nodes.forEach(detach_dev);
      h2_nodes.forEach(detach_dev);
      t3 = claim_space(div8_nodes);
      claim_component(listerrors.$$.fragment, div8_nodes);
      t4 = claim_space(div8_nodes);
      form = claim_element(div8_nodes, "FORM", {
        class: true
      });
      var form_nodes = children(form);
      div5 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      i0 = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i0).forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      input0 = claim_element(div1_nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true
      });
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t6 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      i1 = claim_element(div3_nodes, "I", {
        class: true
      });
      children(i1).forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      input1 = claim_element(div3_nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true
      });
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t8 = claim_space(div5_nodes);
      button = claim_element(div5_nodes, "BUTTON", {
        class: true,
        type: true,
        disabled: true
      });
      var button_nodes = children(button);
      t9 = claim_text(button_nodes, "Log In");
      button_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t10 = claim_space(form_nodes);
      div6 = claim_element(form_nodes, "DIV", {
        class: true
      });
      children(div6).forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      t11 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      t12 = claim_text(div7_nodes, "New to us? ");
      a = claim_element(div7_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      t13 = claim_text(a_nodes, "Sign Up");
      a_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document_1.title = "Sign in • Conduit";
      if (img.src !== (img_src_value = "logo.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "image svelte-il2o5g");
      attr_dev(img, "alt", "logo");
      add_location(img, file, 79, 12, 2700);
      attr_dev(div0, "class", "content");
      add_location(div0, file, 80, 12, 2759);
      attr_dev(h2, "class", "ui teal image header svelte-il2o5g");
      add_location(h2, file, 78, 8, 2653);
      attr_dev(i0, "class", "ui mail icon");
      add_location(i0, file, 91, 24, 3126);
      attr_dev(input0, "type", "text");
      attr_dev(input0, "name", "email");
      attr_dev(input0, "placeholder", "E-mail address");
      add_location(input0, file, 92, 24, 3180);
      attr_dev(div1, "class", "ui left icon input");
      add_location(div1, file, 90, 20, 3068);
      attr_dev(div2, "class", "field");
      add_location(div2, file, 89, 16, 3027);
      attr_dev(i1, "class", "lock icon");
      add_location(i1, file, 97, 24, 3429);
      attr_dev(input1, "type", "password");
      attr_dev(input1, "name", "password");
      attr_dev(input1, "placeholder", "Password");
      add_location(input1, file, 98, 24, 3480);
      attr_dev(div3, "class", "ui left icon input");
      add_location(div3, file, 96, 20, 3371);
      attr_dev(div4, "class", "field");
      add_location(div4, file, 95, 16, 3330);
      attr_dev(button, "class", "ui fluid large teal submit button");
      attr_dev(button, "type", "submit");
      button.disabled = button_disabled_value = !
      /*email*/
      ctx[0] || !
      /*password*/
      ctx[1];
      add_location(button, file, 101, 16, 3634);
      attr_dev(div5, "class", "ui stacked segment");
      add_location(div5, file, 88, 12, 2977);
      attr_dev(div6, "class", "ui error message");
      add_location(div6, file, 104, 12, 3782);
      attr_dev(form, "class", "ui large form");
      add_location(form, file, 87, 8, 2901);
      attr_dev(a, "href", "register");
      add_location(a, file, 109, 23, 3898);
      attr_dev(div7, "class", "ui message");
      add_location(div7, file, 108, 8, 3849);
      attr_dev(div8, "class", "column svelte-il2o5g");
      add_location(div8, file, 77, 4, 2623);
      attr_dev(div9, "class", "ui middle aligned center aligned grid");
      add_location(div9, file, 76, 0, 2566);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div9, anchor);
      append_dev(div9, div8);
      append_dev(div8, h2);
      append_dev(h2, img);
      append_dev(h2, t1);
      append_dev(h2, div0);
      append_dev(div0, t2);
      append_dev(div8, t3);
      mount_component(listerrors, div8, null);
      append_dev(div8, t4);
      append_dev(div8, form);
      append_dev(form, div5);
      append_dev(div5, div2);
      append_dev(div2, div1);
      append_dev(div1, i0);
      append_dev(div1, t5);
      append_dev(div1, input0);
      set_input_value(input0,
      /*email*/
      ctx[0]);
      append_dev(div5, t6);
      append_dev(div5, div4);
      append_dev(div4, div3);
      append_dev(div3, i1);
      append_dev(div3, t7);
      append_dev(div3, input1);
      set_input_value(input1,
      /*password*/
      ctx[1]);
      append_dev(div5, t8);
      append_dev(div5, button);
      append_dev(button, t9);
      append_dev(form, t10);
      append_dev(form, div6);
      append_dev(div8, t11);
      append_dev(div8, div7);
      append_dev(div7, t12);
      append_dev(div7, a);
      append_dev(a, t13);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[5]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[6]), listen_dev(form, "submit", prevent_default(
        /*submit*/
        ctx[4]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var listerrors_changes = {};
      if (dirty &
      /*errors*/
      4) listerrors_changes.errors =
      /*errors*/
      ctx[2];
      listerrors.$set(listerrors_changes);

      if (dirty &
      /*email*/
      1 && input0.value !==
      /*email*/
      ctx[0]) {
        set_input_value(input0,
        /*email*/
        ctx[0]);
      }

      if (dirty &
      /*password*/
      2 && input1.value !==
      /*password*/
      ctx[1]) {
        set_input_value(input1,
        /*password*/
        ctx[1]);
      }

      if (!current || dirty &
      /*email, password*/
      3 && button_disabled_value !== (button_disabled_value = !
      /*email*/
      ctx[0] || !
      /*password*/
      ctx[1])) {
        prop_dev(button, "disabled", button_disabled_value);
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div9);
      destroy_component(listerrors);
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
  validate_slots("Login", slots, []);

  var _stores = stores$1(),
      session = _stores.session;

  validate_store(session, "session");
  component_subscribe($$self, session, function (value) {
    return $$invalidate(7, $session = value);
  });
  var email = "";
  var password = "";
  var errors = null;

  function submit(_x) {
    return _submit.apply(this, arguments);
  }

  function _submit() {
    _submit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
      var response;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return post("/auth/login", {
                email: email,
                password: password
              });

            case 2:
              response = _context.sent;
              // TODO handle network errors
              $$invalidate(2, errors = {});
              if (response.errors) $$invalidate(2, errors = response.errors);
              if (errors || true) $$invalidate(2, errors["my"] = "Another my error.", errors);

              if (response.user) {
                set_store_value(session, $session.user = response.user, $session);
                goto("/");
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submit.apply(this, arguments);
  }

  jQuery(document).ready(function () {
    jQuery(".ui.form").form({
      fields: {
        email: {
          identifier: "email",
          rules: [{
            type: "empty",
            prompt: "Please enter your e-mail"
          }, {
            type: "email",
            prompt: "Please enter a valid e-mail"
          }]
        },
        password: {
          identifier: "password",
          rules: [{
            type: "empty",
            prompt: "Please enter your password"
          }, {
            type: "length[6]",
            prompt: "Your password must be at least 6 characters"
          }]
        }
      }
    });
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Login> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    email = this.value;
    $$invalidate(0, email);
  }

  function input1_input_handler() {
    password = this.value;
    $$invalidate(1, password);
  }

  $$self.$capture_state = function () {
    return {
      goto: goto,
      stores: stores$1,
      ListErrors: ListErrors,
      post: post,
      session: session,
      email: email,
      password: password,
      errors: errors,
      submit: submit,
      $session: $session
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("email" in $$props) $$invalidate(0, email = $$props.email);
    if ("password" in $$props) $$invalidate(1, password = $$props.password);
    if ("errors" in $$props) $$invalidate(2, errors = $$props.errors);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [email, password, errors, session, submit, input0_input_handler, input1_input_handler];
}

var Login = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Login, _SvelteComponentDev);

  var _super = _createSuper(Login);

  function Login(options) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Login",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Login;
}(SvelteComponentDev);

export default Login;

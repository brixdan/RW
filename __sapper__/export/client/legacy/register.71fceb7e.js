import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, S as SvelteComponentDev, h as validate_slots, E as stores$1, F as validate_store, G as component_subscribe, a1 as goto, k as space, j as element, t as text, N as create_component, Z as query_selector_all, n as detach_dev, o as claim_space, l as claim_element, m as children, p as claim_text, O as claim_component, q as attr_dev, r as add_location, u as insert_dev, w as append_dev, P as mount_component, a2 as set_input_value, x as listen_dev, a3 as prevent_default, z as _slicedToArray, a4 as prop_dev, K as transition_in, I as transition_out, Q as destroy_component, U as run_all, C as _asyncToGenerator, D as _regeneratorRuntime, a5 as set_store_value, a0 as globals } from './client.ad9afb00.js';
import { L as ListErrors } from './ListErrors.b1b08794.js';
import { p as post } from './utils.6613394c.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var document_1 = globals.document;
var file = "src\\routes\\register.svelte";

function create_fragment(ctx) {
  var t0;
  var div11;
  var div10;
  var h2;
  var img;
  var img_src_value;
  var t1;
  var div0;
  var t2;
  var t3;
  var div1;
  var t4;
  var a;
  var t5;
  var t6;
  var listerrors;
  var t7;
  var form;
  var div8;
  var div3;
  var div2;
  var i0;
  var t8;
  var input0;
  var t9;
  var div5;
  var div4;
  var i1;
  var t10;
  var input1;
  var t11;
  var div7;
  var div6;
  var i2;
  var t12;
  var input2;
  var t13;
  var button;
  var t14;
  var button_disabled_value;
  var t15;
  var div9;
  var current;
  var mounted;
  var dispose;
  listerrors = new ListErrors({
    props: {
      errors:
      /*errors*/
      ctx[3]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      div11 = element("div");
      div10 = element("div");
      h2 = element("h2");
      img = element("img");
      t1 = space();
      div0 = element("div");
      t2 = text("Sign up");
      t3 = space();
      div1 = element("div");
      t4 = text("Have an account? ");
      a = element("a");
      t5 = text("Sign In");
      t6 = space();
      create_component(listerrors.$$.fragment);
      t7 = space();
      form = element("form");
      div8 = element("div");
      div3 = element("div");
      div2 = element("div");
      i0 = element("i");
      t8 = space();
      input0 = element("input");
      t9 = space();
      div5 = element("div");
      div4 = element("div");
      i1 = element("i");
      t10 = space();
      input1 = element("input");
      t11 = space();
      div7 = element("div");
      div6 = element("div");
      i2 = element("i");
      t12 = space();
      input2 = element("input");
      t13 = space();
      button = element("button");
      t14 = text("Sign Up");
      t15 = space();
      div9 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1545tn3\"]", document_1.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div11 = claim_element(nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      h2 = claim_element(div10_nodes, "H2", {
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
      t2 = claim_text(div0_nodes, "Sign up");
      div0_nodes.forEach(detach_dev);
      h2_nodes.forEach(detach_dev);
      t3 = claim_space(div10_nodes);
      div1 = claim_element(div10_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "Have an account? ");
      a = claim_element(div1_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "Sign In");
      a_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div10_nodes);
      claim_component(listerrors.$$.fragment, div10_nodes);
      t7 = claim_space(div10_nodes);
      form = claim_element(div10_nodes, "FORM", {
        class: true
      });
      var form_nodes = children(form);
      div8 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div3 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      i0 = claim_element(div2_nodes, "I", {
        class: true
      });
      children(i0).forEach(detach_dev);
      t8 = claim_space(div2_nodes);
      input0 = claim_element(div2_nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true
      });
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(div8_nodes);
      div5 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      i1 = claim_element(div4_nodes, "I", {
        class: true
      });
      children(i1).forEach(detach_dev);
      t10 = claim_space(div4_nodes);
      input1 = claim_element(div4_nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true
      });
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t11 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      i2 = claim_element(div6_nodes, "I", {
        class: true
      });
      children(i2).forEach(detach_dev);
      t12 = claim_space(div6_nodes);
      input2 = claim_element(div6_nodes, "INPUT", {
        type: true,
        name: true,
        placeholder: true
      });
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t13 = claim_space(div8_nodes);
      button = claim_element(div8_nodes, "BUTTON", {
        class: true,
        type: true,
        disabled: true
      });
      var button_nodes = children(button);
      t14 = claim_text(button_nodes, "Sign Up");
      button_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t15 = claim_space(form_nodes);
      div9 = claim_element(form_nodes, "DIV", {
        class: true
      });
      children(div9).forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document_1.title = "Sign up • Conduit";
      if (img.src !== (img_src_value = "logo.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "image svelte-il2o5g");
      attr_dev(img, "alt", "logo");
      add_location(img, file, 91, 12, 3332);
      attr_dev(div0, "class", "content");
      add_location(div0, file, 92, 12, 3391);
      attr_dev(h2, "class", "ui teal image header svelte-il2o5g");
      add_location(h2, file, 90, 8, 3285);
      attr_dev(a, "href", "/login");
      add_location(a, file, 98, 29, 3539);
      attr_dev(div1, "class", "ui message");
      add_location(div1, file, 97, 8, 3484);
      attr_dev(i0, "class", "ui user icon");
      add_location(i0, file, 107, 24, 3854);
      attr_dev(input0, "type", "text");
      attr_dev(input0, "name", "username");
      attr_dev(input0, "placeholder", "Your Name");
      add_location(input0, file, 108, 24, 3908);
      attr_dev(div2, "class", "ui left icon input");
      add_location(div2, file, 106, 20, 3796);
      attr_dev(div3, "class", "field");
      add_location(div3, file, 105, 16, 3755);
      attr_dev(i1, "class", "ui mail icon");
      add_location(i1, file, 113, 24, 4158);
      attr_dev(input1, "type", "text");
      attr_dev(input1, "name", "email");
      attr_dev(input1, "placeholder", "E-mail address");
      add_location(input1, file, 114, 24, 4212);
      attr_dev(div4, "class", "ui left icon input");
      add_location(div4, file, 112, 20, 4100);
      attr_dev(div5, "class", "field");
      add_location(div5, file, 111, 16, 4059);
      attr_dev(i2, "class", "lock icon");
      add_location(i2, file, 119, 24, 4461);
      attr_dev(input2, "type", "password");
      attr_dev(input2, "name", "password");
      attr_dev(input2, "placeholder", "Password");
      add_location(input2, file, 120, 24, 4512);
      attr_dev(div6, "class", "ui left icon input");
      add_location(div6, file, 118, 20, 4403);
      attr_dev(div7, "class", "field");
      add_location(div7, file, 117, 16, 4362);
      attr_dev(button, "class", "ui fluid large teal submit button");
      attr_dev(button, "type", "submit");
      button.disabled = button_disabled_value = !
      /*email*/
      ctx[1] || !
      /*password*/
      ctx[2];
      add_location(button, file, 123, 16, 4666);
      attr_dev(div8, "class", "ui stacked segment");
      add_location(div8, file, 104, 12, 3705);
      attr_dev(div9, "class", "ui error message");
      add_location(div9, file, 126, 12, 4815);
      attr_dev(form, "class", "ui large form");
      add_location(form, file, 103, 8, 3629);
      attr_dev(div10, "class", "column svelte-il2o5g");
      add_location(div10, file, 89, 4, 3255);
      attr_dev(div11, "class", "ui middle aligned center aligned grid");
      add_location(div11, file, 88, 0, 3198);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div11, anchor);
      append_dev(div11, div10);
      append_dev(div10, h2);
      append_dev(h2, img);
      append_dev(h2, t1);
      append_dev(h2, div0);
      append_dev(div0, t2);
      append_dev(div10, t3);
      append_dev(div10, div1);
      append_dev(div1, t4);
      append_dev(div1, a);
      append_dev(a, t5);
      append_dev(div10, t6);
      mount_component(listerrors, div10, null);
      append_dev(div10, t7);
      append_dev(div10, form);
      append_dev(form, div8);
      append_dev(div8, div3);
      append_dev(div3, div2);
      append_dev(div2, i0);
      append_dev(div2, t8);
      append_dev(div2, input0);
      set_input_value(input0,
      /*username*/
      ctx[0]);
      append_dev(div8, t9);
      append_dev(div8, div5);
      append_dev(div5, div4);
      append_dev(div4, i1);
      append_dev(div4, t10);
      append_dev(div4, input1);
      set_input_value(input1,
      /*email*/
      ctx[1]);
      append_dev(div8, t11);
      append_dev(div8, div7);
      append_dev(div7, div6);
      append_dev(div6, i2);
      append_dev(div6, t12);
      append_dev(div6, input2);
      set_input_value(input2,
      /*password*/
      ctx[2]);
      append_dev(div8, t13);
      append_dev(div8, button);
      append_dev(button, t14);
      append_dev(form, t15);
      append_dev(form, div9);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[6]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[7]), listen_dev(input2, "input",
        /*input2_input_handler*/
        ctx[8]), listen_dev(form, "submit", prevent_default(
        /*submit*/
        ctx[5]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var listerrors_changes = {};
      if (dirty &
      /*errors*/
      8) listerrors_changes.errors =
      /*errors*/
      ctx[3];
      listerrors.$set(listerrors_changes);

      if (dirty &
      /*username*/
      1 && input0.value !==
      /*username*/
      ctx[0]) {
        set_input_value(input0,
        /*username*/
        ctx[0]);
      }

      if (dirty &
      /*email*/
      2 && input1.value !==
      /*email*/
      ctx[1]) {
        set_input_value(input1,
        /*email*/
        ctx[1]);
      }

      if (dirty &
      /*password*/
      4 && input2.value !==
      /*password*/
      ctx[2]) {
        set_input_value(input2,
        /*password*/
        ctx[2]);
      }

      if (!current || dirty &
      /*email, password*/
      6 && button_disabled_value !== (button_disabled_value = !
      /*email*/
      ctx[1] || !
      /*password*/
      ctx[2])) {
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
      if (detaching) detach_dev(div11);
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
  validate_slots("Register", slots, []);

  var _stores = stores$1(),
      session = _stores.session;

  validate_store(session, "session");
  component_subscribe($$self, session, function (value) {
    return $$invalidate(9, $session = value);
  });
  var username = "";
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
              return post("auth/register", {
                username: username,
                email: email,
                password: password
              });

            case 2:
              response = _context.sent;
              // TODO handle network errors
              $$invalidate(3, errors = response.errors);

              if (response.user) {
                set_store_value(session, $session.user = response.user, $session);
                goto("/");
              }

            case 5:
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
        username: {
          identifier: "username",
          rules: [{
            type: "empty",
            prompt: "Please enter your username"
          }, {
            type: "length[3]",
            prompt: "Please enter a valid username"
          }]
        },
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Register> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    username = this.value;
    $$invalidate(0, username);
  }

  function input1_input_handler() {
    email = this.value;
    $$invalidate(1, email);
  }

  function input2_input_handler() {
    password = this.value;
    $$invalidate(2, password);
  }

  $$self.$capture_state = function () {
    return {
      goto: goto,
      stores: stores$1,
      ListErrors: ListErrors,
      post: post,
      session: session,
      username: username,
      email: email,
      password: password,
      errors: errors,
      submit: submit,
      $session: $session
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("username" in $$props) $$invalidate(0, username = $$props.username);
    if ("email" in $$props) $$invalidate(1, email = $$props.email);
    if ("password" in $$props) $$invalidate(2, password = $$props.password);
    if ("errors" in $$props) $$invalidate(3, errors = $$props.errors);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [username, email, password, errors, session, submit, input0_input_handler, input1_input_handler, input2_input_handler];
}

var Register = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Register, _SvelteComponentDev);

  var _super = _createSuper(Register);

  function Register(options) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Register",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Register;
}(SvelteComponentDev);

export default Register;

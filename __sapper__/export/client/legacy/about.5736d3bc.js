import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, S as SvelteComponentDev, h as validate_slots, Y as onMount, k as space, j as element, t as text, Z as query_selector_all, n as detach_dev, o as claim_space, l as claim_element, m as children, p as claim_text, q as attr_dev, r as add_location, u as insert_dev, w as append_dev, x as listen_dev, A as noop } from './client.ad9afb00.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\about.svelte";

function create_fragment(ctx) {
  var t0;
  var div0;
  var t1;
  var t2;
  var div1;
  var t3;
  var t4;
  var figure0;
  var img0;
  var img0_src_value;
  var t5;
  var figcaption0;
  var t6;
  var t7;
  var figure1;
  var img1;
  var img1_src_value;
  var t8;
  var figcaption1;
  var t9;
  var t10;
  var figure2;
  var img2;
  var img2_src_value;
  var t11;
  var figcaption2;
  var t12;
  var t13;
  var p;
  var strong;
  var t14;
  var t15;
  var div246;
  var input;
  var t16;
  var i0;
  var t17;
  var div2;
  var t18;
  var t19;
  var div245;
  var div3;
  var i1;
  var t20;
  var t21;
  var div4;
  var i2;
  var t22;
  var t23;
  var div5;
  var i3;
  var t24;
  var t25;
  var div6;
  var i4;
  var t26;
  var t27;
  var div7;
  var i5;
  var t28;
  var t29;
  var div8;
  var i6;
  var t30;
  var t31;
  var div9;
  var i7;
  var t32;
  var t33;
  var div10;
  var i8;
  var t34;
  var t35;
  var div11;
  var i9;
  var t36;
  var t37;
  var div12;
  var i10;
  var t38;
  var t39;
  var div13;
  var i11;
  var t40;
  var t41;
  var div14;
  var i12;
  var t42;
  var t43;
  var div15;
  var i13;
  var t44;
  var t45;
  var div16;
  var i14;
  var t46;
  var t47;
  var div17;
  var i15;
  var t48;
  var t49;
  var div18;
  var i16;
  var t50;
  var t51;
  var div19;
  var i17;
  var t52;
  var t53;
  var div20;
  var i18;
  var t54;
  var t55;
  var div21;
  var i19;
  var t56;
  var t57;
  var div22;
  var i20;
  var t58;
  var t59;
  var div23;
  var i21;
  var t60;
  var t61;
  var div24;
  var i22;
  var t62;
  var t63;
  var div25;
  var i23;
  var t64;
  var t65;
  var div26;
  var i24;
  var t66;
  var t67;
  var div27;
  var i25;
  var t68;
  var t69;
  var div28;
  var i26;
  var t70;
  var t71;
  var div29;
  var i27;
  var t72;
  var t73;
  var div30;
  var i28;
  var t74;
  var t75;
  var div31;
  var i29;
  var t76;
  var t77;
  var div32;
  var i30;
  var t78;
  var t79;
  var div33;
  var i31;
  var t80;
  var t81;
  var div34;
  var i32;
  var t82;
  var t83;
  var div35;
  var i33;
  var t84;
  var t85;
  var div36;
  var i34;
  var t86;
  var t87;
  var div37;
  var i35;
  var t88;
  var t89;
  var div38;
  var i36;
  var t90;
  var t91;
  var div39;
  var i37;
  var t92;
  var t93;
  var div40;
  var i38;
  var t94;
  var t95;
  var div41;
  var i39;
  var t96;
  var t97;
  var div42;
  var i40;
  var t98;
  var t99;
  var div43;
  var i41;
  var t100;
  var t101;
  var div44;
  var i42;
  var t102;
  var t103;
  var div45;
  var i43;
  var t104;
  var t105;
  var div46;
  var i44;
  var t106;
  var t107;
  var div47;
  var i45;
  var t108;
  var t109;
  var div48;
  var i46;
  var t110;
  var t111;
  var div49;
  var i47;
  var t112;
  var t113;
  var div50;
  var i48;
  var t114;
  var t115;
  var div51;
  var i49;
  var t116;
  var t117;
  var div52;
  var i50;
  var t118;
  var t119;
  var div53;
  var i51;
  var t120;
  var t121;
  var div54;
  var i52;
  var t122;
  var t123;
  var div55;
  var i53;
  var t124;
  var t125;
  var div56;
  var i54;
  var t126;
  var t127;
  var div57;
  var i55;
  var t128;
  var t129;
  var div58;
  var i56;
  var t130;
  var t131;
  var div59;
  var i57;
  var t132;
  var t133;
  var div60;
  var i58;
  var t134;
  var t135;
  var div61;
  var i59;
  var t136;
  var t137;
  var div62;
  var i60;
  var t138;
  var t139;
  var div63;
  var i61;
  var t140;
  var t141;
  var div64;
  var i62;
  var t142;
  var t143;
  var div65;
  var i63;
  var t144;
  var t145;
  var div66;
  var i64;
  var t146;
  var t147;
  var div67;
  var i65;
  var t148;
  var t149;
  var div68;
  var i66;
  var t150;
  var t151;
  var div69;
  var i67;
  var t152;
  var t153;
  var div70;
  var i68;
  var t154;
  var t155;
  var div71;
  var i69;
  var t156;
  var t157;
  var div72;
  var i70;
  var t158;
  var t159;
  var div73;
  var i71;
  var t160;
  var t161;
  var div74;
  var i72;
  var t162;
  var t163;
  var div75;
  var i73;
  var t164;
  var t165;
  var div76;
  var i74;
  var t166;
  var t167;
  var div77;
  var i75;
  var t168;
  var t169;
  var div78;
  var i76;
  var t170;
  var t171;
  var div79;
  var i77;
  var t172;
  var t173;
  var div80;
  var i78;
  var t174;
  var t175;
  var div81;
  var i79;
  var t176;
  var t177;
  var div82;
  var i80;
  var t178;
  var t179;
  var div83;
  var i81;
  var t180;
  var t181;
  var div84;
  var i82;
  var t182;
  var t183;
  var div85;
  var i83;
  var t184;
  var t185;
  var div86;
  var i84;
  var t186;
  var t187;
  var div87;
  var i85;
  var t188;
  var t189;
  var div88;
  var i86;
  var t190;
  var t191;
  var div89;
  var i87;
  var t192;
  var t193;
  var div90;
  var i88;
  var t194;
  var t195;
  var div91;
  var i89;
  var t196;
  var t197;
  var div92;
  var i90;
  var t198;
  var t199;
  var div93;
  var i91;
  var t200;
  var t201;
  var div94;
  var i92;
  var t202;
  var t203;
  var div95;
  var i93;
  var t204;
  var t205;
  var div96;
  var i94;
  var t206;
  var t207;
  var div97;
  var i95;
  var t208;
  var t209;
  var div98;
  var i96;
  var t210;
  var t211;
  var div99;
  var i97;
  var t212;
  var t213;
  var div100;
  var i98;
  var t214;
  var t215;
  var div101;
  var i99;
  var t216;
  var t217;
  var div102;
  var i100;
  var t218;
  var t219;
  var div103;
  var i101;
  var t220;
  var t221;
  var div104;
  var i102;
  var t222;
  var t223;
  var div105;
  var i103;
  var t224;
  var t225;
  var div106;
  var i104;
  var t226;
  var t227;
  var div107;
  var i105;
  var t228;
  var t229;
  var div108;
  var i106;
  var t230;
  var t231;
  var div109;
  var i107;
  var t232;
  var t233;
  var div110;
  var i108;
  var t234;
  var t235;
  var div111;
  var i109;
  var t236;
  var t237;
  var div112;
  var i110;
  var t238;
  var t239;
  var div113;
  var i111;
  var t240;
  var t241;
  var div114;
  var i112;
  var t242;
  var t243;
  var div115;
  var i113;
  var t244;
  var t245;
  var div116;
  var i114;
  var t246;
  var t247;
  var div117;
  var i115;
  var t248;
  var t249;
  var div118;
  var i116;
  var t250;
  var t251;
  var div119;
  var i117;
  var t252;
  var t253;
  var div120;
  var i118;
  var t254;
  var t255;
  var div121;
  var i119;
  var t256;
  var t257;
  var div122;
  var i120;
  var t258;
  var t259;
  var div123;
  var i121;
  var t260;
  var t261;
  var div124;
  var i122;
  var t262;
  var t263;
  var div125;
  var i123;
  var t264;
  var t265;
  var div126;
  var i124;
  var t266;
  var t267;
  var div127;
  var i125;
  var t268;
  var t269;
  var div128;
  var i126;
  var t270;
  var t271;
  var div129;
  var i127;
  var t272;
  var t273;
  var div130;
  var i128;
  var t274;
  var t275;
  var div131;
  var i129;
  var t276;
  var t277;
  var div132;
  var i130;
  var t278;
  var t279;
  var div133;
  var i131;
  var t280;
  var t281;
  var div134;
  var i132;
  var t282;
  var t283;
  var div135;
  var i133;
  var t284;
  var t285;
  var div136;
  var i134;
  var t286;
  var t287;
  var div137;
  var i135;
  var t288;
  var t289;
  var div138;
  var i136;
  var t290;
  var t291;
  var div139;
  var i137;
  var t292;
  var t293;
  var div140;
  var i138;
  var t294;
  var t295;
  var div141;
  var i139;
  var t296;
  var t297;
  var div142;
  var i140;
  var t298;
  var t299;
  var div143;
  var i141;
  var t300;
  var t301;
  var div144;
  var i142;
  var t302;
  var t303;
  var div145;
  var i143;
  var t304;
  var t305;
  var div146;
  var i144;
  var t306;
  var t307;
  var div147;
  var i145;
  var t308;
  var t309;
  var div148;
  var i146;
  var t310;
  var t311;
  var div149;
  var i147;
  var t312;
  var t313;
  var div150;
  var i148;
  var t314;
  var t315;
  var div151;
  var i149;
  var t316;
  var t317;
  var div152;
  var i150;
  var t318;
  var t319;
  var div153;
  var i151;
  var t320;
  var t321;
  var div154;
  var i152;
  var t322;
  var t323;
  var div155;
  var i153;
  var t324;
  var t325;
  var div156;
  var i154;
  var t326;
  var t327;
  var div157;
  var i155;
  var t328;
  var t329;
  var div158;
  var i156;
  var t330;
  var t331;
  var div159;
  var i157;
  var t332;
  var t333;
  var div160;
  var i158;
  var t334;
  var t335;
  var div161;
  var i159;
  var t336;
  var t337;
  var div162;
  var i160;
  var t338;
  var t339;
  var div163;
  var i161;
  var t340;
  var t341;
  var div164;
  var i162;
  var t342;
  var t343;
  var div165;
  var i163;
  var t344;
  var t345;
  var div166;
  var i164;
  var t346;
  var t347;
  var div167;
  var i165;
  var t348;
  var t349;
  var div168;
  var i166;
  var t350;
  var t351;
  var div169;
  var i167;
  var t352;
  var t353;
  var div170;
  var i168;
  var t354;
  var t355;
  var div171;
  var i169;
  var t356;
  var t357;
  var div172;
  var i170;
  var t358;
  var t359;
  var div173;
  var i171;
  var t360;
  var t361;
  var div174;
  var i172;
  var t362;
  var t363;
  var div175;
  var i173;
  var t364;
  var t365;
  var div176;
  var i174;
  var t366;
  var t367;
  var div177;
  var i175;
  var t368;
  var t369;
  var div178;
  var i176;
  var t370;
  var t371;
  var div179;
  var i177;
  var t372;
  var t373;
  var div180;
  var i178;
  var t374;
  var t375;
  var div181;
  var i179;
  var t376;
  var t377;
  var div182;
  var i180;
  var t378;
  var t379;
  var div183;
  var i181;
  var t380;
  var t381;
  var div184;
  var i182;
  var t382;
  var t383;
  var div185;
  var i183;
  var t384;
  var t385;
  var div186;
  var i184;
  var t386;
  var t387;
  var div187;
  var i185;
  var t388;
  var t389;
  var div188;
  var i186;
  var t390;
  var t391;
  var div189;
  var i187;
  var t392;
  var t393;
  var div190;
  var i188;
  var t394;
  var t395;
  var div191;
  var i189;
  var t396;
  var t397;
  var div192;
  var i190;
  var t398;
  var t399;
  var div193;
  var i191;
  var t400;
  var t401;
  var div194;
  var i192;
  var t402;
  var t403;
  var div195;
  var i193;
  var t404;
  var t405;
  var div196;
  var i194;
  var t406;
  var t407;
  var div197;
  var i195;
  var t408;
  var t409;
  var div198;
  var i196;
  var t410;
  var t411;
  var div199;
  var i197;
  var t412;
  var t413;
  var div200;
  var i198;
  var t414;
  var t415;
  var div201;
  var i199;
  var t416;
  var t417;
  var div202;
  var i200;
  var t418;
  var t419;
  var div203;
  var i201;
  var t420;
  var t421;
  var div204;
  var i202;
  var t422;
  var t423;
  var div205;
  var i203;
  var t424;
  var t425;
  var div206;
  var i204;
  var t426;
  var t427;
  var div207;
  var i205;
  var t428;
  var t429;
  var div208;
  var i206;
  var t430;
  var t431;
  var div209;
  var i207;
  var t432;
  var t433;
  var div210;
  var i208;
  var t434;
  var t435;
  var div211;
  var i209;
  var t436;
  var t437;
  var div212;
  var i210;
  var t438;
  var t439;
  var div213;
  var i211;
  var t440;
  var t441;
  var div214;
  var i212;
  var t442;
  var t443;
  var div215;
  var i213;
  var t444;
  var t445;
  var div216;
  var i214;
  var t446;
  var t447;
  var div217;
  var i215;
  var t448;
  var t449;
  var div218;
  var i216;
  var t450;
  var t451;
  var div219;
  var i217;
  var t452;
  var t453;
  var div220;
  var i218;
  var t454;
  var t455;
  var div221;
  var i219;
  var t456;
  var t457;
  var div222;
  var i220;
  var t458;
  var t459;
  var div223;
  var i221;
  var t460;
  var t461;
  var div224;
  var i222;
  var t462;
  var t463;
  var div225;
  var i223;
  var t464;
  var t465;
  var div226;
  var i224;
  var t466;
  var t467;
  var div227;
  var i225;
  var t468;
  var t469;
  var div228;
  var i226;
  var t470;
  var t471;
  var div229;
  var i227;
  var t472;
  var t473;
  var div230;
  var i228;
  var t474;
  var t475;
  var div231;
  var i229;
  var t476;
  var t477;
  var div232;
  var i230;
  var t478;
  var t479;
  var div233;
  var i231;
  var t480;
  var t481;
  var div234;
  var i232;
  var t482;
  var t483;
  var div235;
  var i233;
  var t484;
  var t485;
  var div236;
  var i234;
  var t486;
  var t487;
  var div237;
  var i235;
  var t488;
  var t489;
  var div238;
  var i236;
  var t490;
  var t491;
  var div239;
  var i237;
  var t492;
  var t493;
  var div240;
  var i238;
  var t494;
  var t495;
  var div241;
  var i239;
  var t496;
  var t497;
  var div242;
  var i240;
  var t498;
  var t499;
  var div243;
  var i241;
  var t500;
  var t501;
  var div244;
  var i242;
  var t502;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      t0 = space();
      div0 = element("div");
      t1 = text("Great success!");
      t2 = space();
      div1 = element("div");
      t3 = text("Click Me");
      t4 = space();
      figure0 = element("figure");
      img0 = element("img");
      t5 = space();
      figcaption0 = element("figcaption");
      t6 = text("HIGH FIVE!");
      t7 = space();
      figure1 = element("figure");
      img1 = element("img");
      t8 = space();
      figcaption1 = element("figcaption");
      t9 = text("Graph");
      t10 = space();
      figure2 = element("figure");
      img2 = element("img");
      t11 = space();
      figcaption2 = element("figcaption");
      t12 = text("Stack");
      t13 = space();
      p = element("p");
      strong = element("strong");
      t14 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
      t15 = space();
      div246 = element("div");
      input = element("input");
      t16 = space();
      i0 = element("i");
      t17 = space();
      div2 = element("div");
      t18 = text("Select Country");
      t19 = space();
      div245 = element("div");
      div3 = element("div");
      i1 = element("i");
      t20 = text("Afghanistan");
      t21 = space();
      div4 = element("div");
      i2 = element("i");
      t22 = text("Aland Islands");
      t23 = space();
      div5 = element("div");
      i3 = element("i");
      t24 = text("Albania");
      t25 = space();
      div6 = element("div");
      i4 = element("i");
      t26 = text("Algeria");
      t27 = space();
      div7 = element("div");
      i5 = element("i");
      t28 = text("American Samoa");
      t29 = space();
      div8 = element("div");
      i6 = element("i");
      t30 = text("Andorra");
      t31 = space();
      div9 = element("div");
      i7 = element("i");
      t32 = text("Angola");
      t33 = space();
      div10 = element("div");
      i8 = element("i");
      t34 = text("Anguilla");
      t35 = space();
      div11 = element("div");
      i9 = element("i");
      t36 = text("Antigua");
      t37 = space();
      div12 = element("div");
      i10 = element("i");
      t38 = text("Argentina");
      t39 = space();
      div13 = element("div");
      i11 = element("i");
      t40 = text("Armenia");
      t41 = space();
      div14 = element("div");
      i12 = element("i");
      t42 = text("Aruba");
      t43 = space();
      div15 = element("div");
      i13 = element("i");
      t44 = text("Australia");
      t45 = space();
      div16 = element("div");
      i14 = element("i");
      t46 = text("Austria");
      t47 = space();
      div17 = element("div");
      i15 = element("i");
      t48 = text("Azerbaijan");
      t49 = space();
      div18 = element("div");
      i16 = element("i");
      t50 = text("Bahamas");
      t51 = space();
      div19 = element("div");
      i17 = element("i");
      t52 = text("Bahrain");
      t53 = space();
      div20 = element("div");
      i18 = element("i");
      t54 = text("Bangladesh");
      t55 = space();
      div21 = element("div");
      i19 = element("i");
      t56 = text("Barbados");
      t57 = space();
      div22 = element("div");
      i20 = element("i");
      t58 = text("Belarus");
      t59 = space();
      div23 = element("div");
      i21 = element("i");
      t60 = text("Belgium");
      t61 = space();
      div24 = element("div");
      i22 = element("i");
      t62 = text("Belize");
      t63 = space();
      div25 = element("div");
      i23 = element("i");
      t64 = text("Benin");
      t65 = space();
      div26 = element("div");
      i24 = element("i");
      t66 = text("Bermuda");
      t67 = space();
      div27 = element("div");
      i25 = element("i");
      t68 = text("Bhutan");
      t69 = space();
      div28 = element("div");
      i26 = element("i");
      t70 = text("Bolivia");
      t71 = space();
      div29 = element("div");
      i27 = element("i");
      t72 = text("Bosnia");
      t73 = space();
      div30 = element("div");
      i28 = element("i");
      t74 = text("Botswana");
      t75 = space();
      div31 = element("div");
      i29 = element("i");
      t76 = text("Bouvet Island");
      t77 = space();
      div32 = element("div");
      i30 = element("i");
      t78 = text("Brazil");
      t79 = space();
      div33 = element("div");
      i31 = element("i");
      t80 = text("British Virgin Islands");
      t81 = space();
      div34 = element("div");
      i32 = element("i");
      t82 = text("Brunei");
      t83 = space();
      div35 = element("div");
      i33 = element("i");
      t84 = text("Bulgaria");
      t85 = space();
      div36 = element("div");
      i34 = element("i");
      t86 = text("Burkina Faso");
      t87 = space();
      div37 = element("div");
      i35 = element("i");
      t88 = text("Burma");
      t89 = space();
      div38 = element("div");
      i36 = element("i");
      t90 = text("Burundi");
      t91 = space();
      div39 = element("div");
      i37 = element("i");
      t92 = text("Caicos Islands");
      t93 = space();
      div40 = element("div");
      i38 = element("i");
      t94 = text("Cambodia");
      t95 = space();
      div41 = element("div");
      i39 = element("i");
      t96 = text("Cameroon");
      t97 = space();
      div42 = element("div");
      i40 = element("i");
      t98 = text("Canada");
      t99 = space();
      div43 = element("div");
      i41 = element("i");
      t100 = text("Cape Verde");
      t101 = space();
      div44 = element("div");
      i42 = element("i");
      t102 = text("Cayman Islands");
      t103 = space();
      div45 = element("div");
      i43 = element("i");
      t104 = text("Central African Republic");
      t105 = space();
      div46 = element("div");
      i44 = element("i");
      t106 = text("Chad");
      t107 = space();
      div47 = element("div");
      i45 = element("i");
      t108 = text("Chile");
      t109 = space();
      div48 = element("div");
      i46 = element("i");
      t110 = text("China");
      t111 = space();
      div49 = element("div");
      i47 = element("i");
      t112 = text("Christmas Island");
      t113 = space();
      div50 = element("div");
      i48 = element("i");
      t114 = text("Cocos Islands");
      t115 = space();
      div51 = element("div");
      i49 = element("i");
      t116 = text("Colombia");
      t117 = space();
      div52 = element("div");
      i50 = element("i");
      t118 = text("Comoros");
      t119 = space();
      div53 = element("div");
      i51 = element("i");
      t120 = text("Congo Brazzaville");
      t121 = space();
      div54 = element("div");
      i52 = element("i");
      t122 = text("Congo");
      t123 = space();
      div55 = element("div");
      i53 = element("i");
      t124 = text("Cook Islands");
      t125 = space();
      div56 = element("div");
      i54 = element("i");
      t126 = text("Costa Rica");
      t127 = space();
      div57 = element("div");
      i55 = element("i");
      t128 = text("Cote Divoire");
      t129 = space();
      div58 = element("div");
      i56 = element("i");
      t130 = text("Croatia");
      t131 = space();
      div59 = element("div");
      i57 = element("i");
      t132 = text("Cuba");
      t133 = space();
      div60 = element("div");
      i58 = element("i");
      t134 = text("Cyprus");
      t135 = space();
      div61 = element("div");
      i59 = element("i");
      t136 = text("Czech Republic");
      t137 = space();
      div62 = element("div");
      i60 = element("i");
      t138 = text("Denmark");
      t139 = space();
      div63 = element("div");
      i61 = element("i");
      t140 = text("Djibouti");
      t141 = space();
      div64 = element("div");
      i62 = element("i");
      t142 = text("Dominica");
      t143 = space();
      div65 = element("div");
      i63 = element("i");
      t144 = text("Dominican Republic");
      t145 = space();
      div66 = element("div");
      i64 = element("i");
      t146 = text("Ecuador");
      t147 = space();
      div67 = element("div");
      i65 = element("i");
      t148 = text("Egypt");
      t149 = space();
      div68 = element("div");
      i66 = element("i");
      t150 = text("El Salvador");
      t151 = space();
      div69 = element("div");
      i67 = element("i");
      t152 = text("England");
      t153 = space();
      div70 = element("div");
      i68 = element("i");
      t154 = text("Equatorial Guinea");
      t155 = space();
      div71 = element("div");
      i69 = element("i");
      t156 = text("Eritrea");
      t157 = space();
      div72 = element("div");
      i70 = element("i");
      t158 = text("Estonia");
      t159 = space();
      div73 = element("div");
      i71 = element("i");
      t160 = text("Ethiopia");
      t161 = space();
      div74 = element("div");
      i72 = element("i");
      t162 = text("European Union");
      t163 = space();
      div75 = element("div");
      i73 = element("i");
      t164 = text("Falkland Islands");
      t165 = space();
      div76 = element("div");
      i74 = element("i");
      t166 = text("Faroe Islands");
      t167 = space();
      div77 = element("div");
      i75 = element("i");
      t168 = text("Fiji");
      t169 = space();
      div78 = element("div");
      i76 = element("i");
      t170 = text("Finland");
      t171 = space();
      div79 = element("div");
      i77 = element("i");
      t172 = text("France");
      t173 = space();
      div80 = element("div");
      i78 = element("i");
      t174 = text("French Guiana");
      t175 = space();
      div81 = element("div");
      i79 = element("i");
      t176 = text("French Polynesia");
      t177 = space();
      div82 = element("div");
      i80 = element("i");
      t178 = text("French Territories");
      t179 = space();
      div83 = element("div");
      i81 = element("i");
      t180 = text("Gabon");
      t181 = space();
      div84 = element("div");
      i82 = element("i");
      t182 = text("Gambia");
      t183 = space();
      div85 = element("div");
      i83 = element("i");
      t184 = text("Georgia");
      t185 = space();
      div86 = element("div");
      i84 = element("i");
      t186 = text("Germany");
      t187 = space();
      div87 = element("div");
      i85 = element("i");
      t188 = text("Ghana");
      t189 = space();
      div88 = element("div");
      i86 = element("i");
      t190 = text("Gibraltar");
      t191 = space();
      div89 = element("div");
      i87 = element("i");
      t192 = text("Greece");
      t193 = space();
      div90 = element("div");
      i88 = element("i");
      t194 = text("Greenland");
      t195 = space();
      div91 = element("div");
      i89 = element("i");
      t196 = text("Grenada");
      t197 = space();
      div92 = element("div");
      i90 = element("i");
      t198 = text("Guadeloupe");
      t199 = space();
      div93 = element("div");
      i91 = element("i");
      t200 = text("Guam");
      t201 = space();
      div94 = element("div");
      i92 = element("i");
      t202 = text("Guatemala");
      t203 = space();
      div95 = element("div");
      i93 = element("i");
      t204 = text("Guinea-Bissau");
      t205 = space();
      div96 = element("div");
      i94 = element("i");
      t206 = text("Guinea");
      t207 = space();
      div97 = element("div");
      i95 = element("i");
      t208 = text("Guyana");
      t209 = space();
      div98 = element("div");
      i96 = element("i");
      t210 = text("Haiti");
      t211 = space();
      div99 = element("div");
      i97 = element("i");
      t212 = text("Heard Island");
      t213 = space();
      div100 = element("div");
      i98 = element("i");
      t214 = text("Honduras");
      t215 = space();
      div101 = element("div");
      i99 = element("i");
      t216 = text("Hong Kong");
      t217 = space();
      div102 = element("div");
      i100 = element("i");
      t218 = text("Hungary");
      t219 = space();
      div103 = element("div");
      i101 = element("i");
      t220 = text("Iceland");
      t221 = space();
      div104 = element("div");
      i102 = element("i");
      t222 = text("India");
      t223 = space();
      div105 = element("div");
      i103 = element("i");
      t224 = text("Indian Ocean Territory");
      t225 = space();
      div106 = element("div");
      i104 = element("i");
      t226 = text("Indonesia");
      t227 = space();
      div107 = element("div");
      i105 = element("i");
      t228 = text("Iran");
      t229 = space();
      div108 = element("div");
      i106 = element("i");
      t230 = text("Iraq");
      t231 = space();
      div109 = element("div");
      i107 = element("i");
      t232 = text("Ireland");
      t233 = space();
      div110 = element("div");
      i108 = element("i");
      t234 = text("Israel");
      t235 = space();
      div111 = element("div");
      i109 = element("i");
      t236 = text("Italy");
      t237 = space();
      div112 = element("div");
      i110 = element("i");
      t238 = text("Jamaica");
      t239 = space();
      div113 = element("div");
      i111 = element("i");
      t240 = text("Japan");
      t241 = space();
      div114 = element("div");
      i112 = element("i");
      t242 = text("Jordan");
      t243 = space();
      div115 = element("div");
      i113 = element("i");
      t244 = text("Kazakhstan");
      t245 = space();
      div116 = element("div");
      i114 = element("i");
      t246 = text("Kenya");
      t247 = space();
      div117 = element("div");
      i115 = element("i");
      t248 = text("Kiribati");
      t249 = space();
      div118 = element("div");
      i116 = element("i");
      t250 = text("Kuwait");
      t251 = space();
      div119 = element("div");
      i117 = element("i");
      t252 = text("Kyrgyzstan");
      t253 = space();
      div120 = element("div");
      i118 = element("i");
      t254 = text("Laos");
      t255 = space();
      div121 = element("div");
      i119 = element("i");
      t256 = text("Latvia");
      t257 = space();
      div122 = element("div");
      i120 = element("i");
      t258 = text("Lebanon");
      t259 = space();
      div123 = element("div");
      i121 = element("i");
      t260 = text("Lesotho");
      t261 = space();
      div124 = element("div");
      i122 = element("i");
      t262 = text("Liberia");
      t263 = space();
      div125 = element("div");
      i123 = element("i");
      t264 = text("Libya");
      t265 = space();
      div126 = element("div");
      i124 = element("i");
      t266 = text("Liechtenstein");
      t267 = space();
      div127 = element("div");
      i125 = element("i");
      t268 = text("Lithuania");
      t269 = space();
      div128 = element("div");
      i126 = element("i");
      t270 = text("Luxembourg");
      t271 = space();
      div129 = element("div");
      i127 = element("i");
      t272 = text("Macau");
      t273 = space();
      div130 = element("div");
      i128 = element("i");
      t274 = text("Macedonia");
      t275 = space();
      div131 = element("div");
      i129 = element("i");
      t276 = text("Madagascar");
      t277 = space();
      div132 = element("div");
      i130 = element("i");
      t278 = text("Malawi");
      t279 = space();
      div133 = element("div");
      i131 = element("i");
      t280 = text("Malaysia");
      t281 = space();
      div134 = element("div");
      i132 = element("i");
      t282 = text("Maldives");
      t283 = space();
      div135 = element("div");
      i133 = element("i");
      t284 = text("Mali");
      t285 = space();
      div136 = element("div");
      i134 = element("i");
      t286 = text("Malta");
      t287 = space();
      div137 = element("div");
      i135 = element("i");
      t288 = text("Marshall Islands");
      t289 = space();
      div138 = element("div");
      i136 = element("i");
      t290 = text("Martinique");
      t291 = space();
      div139 = element("div");
      i137 = element("i");
      t292 = text("Mauritania");
      t293 = space();
      div140 = element("div");
      i138 = element("i");
      t294 = text("Mauritius");
      t295 = space();
      div141 = element("div");
      i139 = element("i");
      t296 = text("Mayotte");
      t297 = space();
      div142 = element("div");
      i140 = element("i");
      t298 = text("Mexico");
      t299 = space();
      div143 = element("div");
      i141 = element("i");
      t300 = text("Micronesia");
      t301 = space();
      div144 = element("div");
      i142 = element("i");
      t302 = text("Moldova");
      t303 = space();
      div145 = element("div");
      i143 = element("i");
      t304 = text("Monaco");
      t305 = space();
      div146 = element("div");
      i144 = element("i");
      t306 = text("Mongolia");
      t307 = space();
      div147 = element("div");
      i145 = element("i");
      t308 = text("Montenegro");
      t309 = space();
      div148 = element("div");
      i146 = element("i");
      t310 = text("Montserrat");
      t311 = space();
      div149 = element("div");
      i147 = element("i");
      t312 = text("Morocco");
      t313 = space();
      div150 = element("div");
      i148 = element("i");
      t314 = text("Mozambique");
      t315 = space();
      div151 = element("div");
      i149 = element("i");
      t316 = text("Namibia");
      t317 = space();
      div152 = element("div");
      i150 = element("i");
      t318 = text("Nauru");
      t319 = space();
      div153 = element("div");
      i151 = element("i");
      t320 = text("Nepal");
      t321 = space();
      div154 = element("div");
      i152 = element("i");
      t322 = text("Netherlands Antilles");
      t323 = space();
      div155 = element("div");
      i153 = element("i");
      t324 = text("Netherlands");
      t325 = space();
      div156 = element("div");
      i154 = element("i");
      t326 = text("New Caledonia");
      t327 = space();
      div157 = element("div");
      i155 = element("i");
      t328 = text("New Guinea");
      t329 = space();
      div158 = element("div");
      i156 = element("i");
      t330 = text("New Zealand");
      t331 = space();
      div159 = element("div");
      i157 = element("i");
      t332 = text("Nicaragua");
      t333 = space();
      div160 = element("div");
      i158 = element("i");
      t334 = text("Niger");
      t335 = space();
      div161 = element("div");
      i159 = element("i");
      t336 = text("Nigeria");
      t337 = space();
      div162 = element("div");
      i160 = element("i");
      t338 = text("Niue");
      t339 = space();
      div163 = element("div");
      i161 = element("i");
      t340 = text("Norfolk Island");
      t341 = space();
      div164 = element("div");
      i162 = element("i");
      t342 = text("North Korea");
      t343 = space();
      div165 = element("div");
      i163 = element("i");
      t344 = text("Northern Mariana Islands");
      t345 = space();
      div166 = element("div");
      i164 = element("i");
      t346 = text("Norway");
      t347 = space();
      div167 = element("div");
      i165 = element("i");
      t348 = text("Oman");
      t349 = space();
      div168 = element("div");
      i166 = element("i");
      t350 = text("Pakistan");
      t351 = space();
      div169 = element("div");
      i167 = element("i");
      t352 = text("Palau");
      t353 = space();
      div170 = element("div");
      i168 = element("i");
      t354 = text("Palestine");
      t355 = space();
      div171 = element("div");
      i169 = element("i");
      t356 = text("Panama");
      t357 = space();
      div172 = element("div");
      i170 = element("i");
      t358 = text("Paraguay");
      t359 = space();
      div173 = element("div");
      i171 = element("i");
      t360 = text("Peru");
      t361 = space();
      div174 = element("div");
      i172 = element("i");
      t362 = text("Philippines");
      t363 = space();
      div175 = element("div");
      i173 = element("i");
      t364 = text("Pitcairn Islands");
      t365 = space();
      div176 = element("div");
      i174 = element("i");
      t366 = text("Poland");
      t367 = space();
      div177 = element("div");
      i175 = element("i");
      t368 = text("Portugal");
      t369 = space();
      div178 = element("div");
      i176 = element("i");
      t370 = text("Puerto Rico");
      t371 = space();
      div179 = element("div");
      i177 = element("i");
      t372 = text("Qatar");
      t373 = space();
      div180 = element("div");
      i178 = element("i");
      t374 = text("Reunion");
      t375 = space();
      div181 = element("div");
      i179 = element("i");
      t376 = text("Romania");
      t377 = space();
      div182 = element("div");
      i180 = element("i");
      t378 = text("Russia");
      t379 = space();
      div183 = element("div");
      i181 = element("i");
      t380 = text("Rwanda");
      t381 = space();
      div184 = element("div");
      i182 = element("i");
      t382 = text("Saint Helena");
      t383 = space();
      div185 = element("div");
      i183 = element("i");
      t384 = text("Saint Kitts and Nevis");
      t385 = space();
      div186 = element("div");
      i184 = element("i");
      t386 = text("Saint Lucia");
      t387 = space();
      div187 = element("div");
      i185 = element("i");
      t388 = text("Saint Pierre");
      t389 = space();
      div188 = element("div");
      i186 = element("i");
      t390 = text("Saint Vincent");
      t391 = space();
      div189 = element("div");
      i187 = element("i");
      t392 = text("Samoa");
      t393 = space();
      div190 = element("div");
      i188 = element("i");
      t394 = text("San Marino");
      t395 = space();
      div191 = element("div");
      i189 = element("i");
      t396 = text("Sandwich Islands");
      t397 = space();
      div192 = element("div");
      i190 = element("i");
      t398 = text("Sao Tome");
      t399 = space();
      div193 = element("div");
      i191 = element("i");
      t400 = text("Saudi Arabia");
      t401 = space();
      div194 = element("div");
      i192 = element("i");
      t402 = text("Senegal");
      t403 = space();
      div195 = element("div");
      i193 = element("i");
      t404 = text("Serbia");
      t405 = space();
      div196 = element("div");
      i194 = element("i");
      t406 = text("Serbia");
      t407 = space();
      div197 = element("div");
      i195 = element("i");
      t408 = text("Seychelles");
      t409 = space();
      div198 = element("div");
      i196 = element("i");
      t410 = text("Sierra Leone");
      t411 = space();
      div199 = element("div");
      i197 = element("i");
      t412 = text("Singapore");
      t413 = space();
      div200 = element("div");
      i198 = element("i");
      t414 = text("Slovakia");
      t415 = space();
      div201 = element("div");
      i199 = element("i");
      t416 = text("Slovenia");
      t417 = space();
      div202 = element("div");
      i200 = element("i");
      t418 = text("Solomon Islands");
      t419 = space();
      div203 = element("div");
      i201 = element("i");
      t420 = text("Somalia");
      t421 = space();
      div204 = element("div");
      i202 = element("i");
      t422 = text("South Africa");
      t423 = space();
      div205 = element("div");
      i203 = element("i");
      t424 = text("South Korea");
      t425 = space();
      div206 = element("div");
      i204 = element("i");
      t426 = text("Spain");
      t427 = space();
      div207 = element("div");
      i205 = element("i");
      t428 = text("Sri Lanka");
      t429 = space();
      div208 = element("div");
      i206 = element("i");
      t430 = text("Sudan");
      t431 = space();
      div209 = element("div");
      i207 = element("i");
      t432 = text("Suriname");
      t433 = space();
      div210 = element("div");
      i208 = element("i");
      t434 = text("Svalbard");
      t435 = space();
      div211 = element("div");
      i209 = element("i");
      t436 = text("Swaziland");
      t437 = space();
      div212 = element("div");
      i210 = element("i");
      t438 = text("Sweden");
      t439 = space();
      div213 = element("div");
      i211 = element("i");
      t440 = text("Switzerland");
      t441 = space();
      div214 = element("div");
      i212 = element("i");
      t442 = text("Syria");
      t443 = space();
      div215 = element("div");
      i213 = element("i");
      t444 = text("Taiwan");
      t445 = space();
      div216 = element("div");
      i214 = element("i");
      t446 = text("Tajikistan");
      t447 = space();
      div217 = element("div");
      i215 = element("i");
      t448 = text("Tanzania");
      t449 = space();
      div218 = element("div");
      i216 = element("i");
      t450 = text("Thailand");
      t451 = space();
      div219 = element("div");
      i217 = element("i");
      t452 = text("Timorleste");
      t453 = space();
      div220 = element("div");
      i218 = element("i");
      t454 = text("Togo");
      t455 = space();
      div221 = element("div");
      i219 = element("i");
      t456 = text("Tokelau");
      t457 = space();
      div222 = element("div");
      i220 = element("i");
      t458 = text("Tonga");
      t459 = space();
      div223 = element("div");
      i221 = element("i");
      t460 = text("Trinidad");
      t461 = space();
      div224 = element("div");
      i222 = element("i");
      t462 = text("Tunisia");
      t463 = space();
      div225 = element("div");
      i223 = element("i");
      t464 = text("Turkey");
      t465 = space();
      div226 = element("div");
      i224 = element("i");
      t466 = text("Turkmenistan");
      t467 = space();
      div227 = element("div");
      i225 = element("i");
      t468 = text("Tuvalu");
      t469 = space();
      div228 = element("div");
      i226 = element("i");
      t470 = text("Uganda");
      t471 = space();
      div229 = element("div");
      i227 = element("i");
      t472 = text("Ukraine");
      t473 = space();
      div230 = element("div");
      i228 = element("i");
      t474 = text("United Arab Emirates");
      t475 = space();
      div231 = element("div");
      i229 = element("i");
      t476 = text("United States");
      t477 = space();
      div232 = element("div");
      i230 = element("i");
      t478 = text("Uruguay");
      t479 = space();
      div233 = element("div");
      i231 = element("i");
      t480 = text("Us Minor Islands");
      t481 = space();
      div234 = element("div");
      i232 = element("i");
      t482 = text("Us Virgin Islands");
      t483 = space();
      div235 = element("div");
      i233 = element("i");
      t484 = text("Uzbekistan");
      t485 = space();
      div236 = element("div");
      i234 = element("i");
      t486 = text("Vanuatu");
      t487 = space();
      div237 = element("div");
      i235 = element("i");
      t488 = text("Vatican City");
      t489 = space();
      div238 = element("div");
      i236 = element("i");
      t490 = text("Venezuela");
      t491 = space();
      div239 = element("div");
      i237 = element("i");
      t492 = text("Vietnam");
      t493 = space();
      div240 = element("div");
      i238 = element("i");
      t494 = text("Wallis and Futuna");
      t495 = space();
      div241 = element("div");
      i239 = element("i");
      t496 = text("Western Sahara");
      t497 = space();
      div242 = element("div");
      i240 = element("i");
      t498 = text("Yemen");
      t499 = space();
      div243 = element("div");
      i241 = element("i");
      t500 = text("Zambia");
      t501 = space();
      div244 = element("div");
      i242 = element("i");
      t502 = text("Zimbabwe");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t1 = claim_text(div0_nodes, "Great success!");
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "Click Me");
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      figure0 = claim_element(nodes, "FIGURE", {});
      var figure0_nodes = children(figure0);
      img0 = claim_element(figure0_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      t5 = claim_space(figure0_nodes);
      figcaption0 = claim_element(figure0_nodes, "FIGCAPTION", {});
      var figcaption0_nodes = children(figcaption0);
      t6 = claim_text(figcaption0_nodes, "HIGH FIVE!");
      figcaption0_nodes.forEach(detach_dev);
      figure0_nodes.forEach(detach_dev);
      t7 = claim_space(nodes);
      figure1 = claim_element(nodes, "FIGURE", {});
      var figure1_nodes = children(figure1);
      img1 = claim_element(figure1_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      t8 = claim_space(figure1_nodes);
      figcaption1 = claim_element(figure1_nodes, "FIGCAPTION", {});
      var figcaption1_nodes = children(figcaption1);
      t9 = claim_text(figcaption1_nodes, "Graph");
      figcaption1_nodes.forEach(detach_dev);
      figure1_nodes.forEach(detach_dev);
      t10 = claim_space(nodes);
      figure2 = claim_element(nodes, "FIGURE", {});
      var figure2_nodes = children(figure2);
      img2 = claim_element(figure2_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      t11 = claim_space(figure2_nodes);
      figcaption2 = claim_element(figure2_nodes, "FIGCAPTION", {});
      var figcaption2_nodes = children(figcaption2);
      t12 = claim_text(figcaption2_nodes, "Stack");
      figcaption2_nodes.forEach(detach_dev);
      figure2_nodes.forEach(detach_dev);
      t13 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      strong = claim_element(p_nodes, "STRONG", {});
      var strong_nodes = children(strong);
      t14 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
      strong_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      t15 = claim_space(nodes);
      div246 = claim_element(nodes, "DIV", {
        class: true
      });
      var div246_nodes = children(div246);
      input = claim_element(div246_nodes, "INPUT", {
        type: true,
        name: true
      });
      t16 = claim_space(div246_nodes);
      i0 = claim_element(div246_nodes, "I", {
        class: true
      });
      children(i0).forEach(detach_dev);
      t17 = claim_space(div246_nodes);
      div2 = claim_element(div246_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t18 = claim_text(div2_nodes, "Select Country");
      div2_nodes.forEach(detach_dev);
      t19 = claim_space(div246_nodes);
      div245 = claim_element(div246_nodes, "DIV", {
        class: true
      });
      var div245_nodes = children(div245);
      div3 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div3_nodes = children(div3);
      i1 = claim_element(div3_nodes, "I", {
        class: true
      });
      children(i1).forEach(detach_dev);
      t20 = claim_text(div3_nodes, "Afghanistan");
      div3_nodes.forEach(detach_dev);
      t21 = claim_space(div245_nodes);
      div4 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div4_nodes = children(div4);
      i2 = claim_element(div4_nodes, "I", {
        class: true
      });
      children(i2).forEach(detach_dev);
      t22 = claim_text(div4_nodes, "Aland Islands");
      div4_nodes.forEach(detach_dev);
      t23 = claim_space(div245_nodes);
      div5 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div5_nodes = children(div5);
      i3 = claim_element(div5_nodes, "I", {
        class: true
      });
      children(i3).forEach(detach_dev);
      t24 = claim_text(div5_nodes, "Albania");
      div5_nodes.forEach(detach_dev);
      t25 = claim_space(div245_nodes);
      div6 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div6_nodes = children(div6);
      i4 = claim_element(div6_nodes, "I", {
        class: true
      });
      children(i4).forEach(detach_dev);
      t26 = claim_text(div6_nodes, "Algeria");
      div6_nodes.forEach(detach_dev);
      t27 = claim_space(div245_nodes);
      div7 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div7_nodes = children(div7);
      i5 = claim_element(div7_nodes, "I", {
        class: true
      });
      children(i5).forEach(detach_dev);
      t28 = claim_text(div7_nodes, "American Samoa");
      div7_nodes.forEach(detach_dev);
      t29 = claim_space(div245_nodes);
      div8 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div8_nodes = children(div8);
      i6 = claim_element(div8_nodes, "I", {
        class: true
      });
      children(i6).forEach(detach_dev);
      t30 = claim_text(div8_nodes, "Andorra");
      div8_nodes.forEach(detach_dev);
      t31 = claim_space(div245_nodes);
      div9 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div9_nodes = children(div9);
      i7 = claim_element(div9_nodes, "I", {
        class: true
      });
      children(i7).forEach(detach_dev);
      t32 = claim_text(div9_nodes, "Angola");
      div9_nodes.forEach(detach_dev);
      t33 = claim_space(div245_nodes);
      div10 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div10_nodes = children(div10);
      i8 = claim_element(div10_nodes, "I", {
        class: true
      });
      children(i8).forEach(detach_dev);
      t34 = claim_text(div10_nodes, "Anguilla");
      div10_nodes.forEach(detach_dev);
      t35 = claim_space(div245_nodes);
      div11 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div11_nodes = children(div11);
      i9 = claim_element(div11_nodes, "I", {
        class: true
      });
      children(i9).forEach(detach_dev);
      t36 = claim_text(div11_nodes, "Antigua");
      div11_nodes.forEach(detach_dev);
      t37 = claim_space(div245_nodes);
      div12 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div12_nodes = children(div12);
      i10 = claim_element(div12_nodes, "I", {
        class: true
      });
      children(i10).forEach(detach_dev);
      t38 = claim_text(div12_nodes, "Argentina");
      div12_nodes.forEach(detach_dev);
      t39 = claim_space(div245_nodes);
      div13 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div13_nodes = children(div13);
      i11 = claim_element(div13_nodes, "I", {
        class: true
      });
      children(i11).forEach(detach_dev);
      t40 = claim_text(div13_nodes, "Armenia");
      div13_nodes.forEach(detach_dev);
      t41 = claim_space(div245_nodes);
      div14 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div14_nodes = children(div14);
      i12 = claim_element(div14_nodes, "I", {
        class: true
      });
      children(i12).forEach(detach_dev);
      t42 = claim_text(div14_nodes, "Aruba");
      div14_nodes.forEach(detach_dev);
      t43 = claim_space(div245_nodes);
      div15 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div15_nodes = children(div15);
      i13 = claim_element(div15_nodes, "I", {
        class: true
      });
      children(i13).forEach(detach_dev);
      t44 = claim_text(div15_nodes, "Australia");
      div15_nodes.forEach(detach_dev);
      t45 = claim_space(div245_nodes);
      div16 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div16_nodes = children(div16);
      i14 = claim_element(div16_nodes, "I", {
        class: true
      });
      children(i14).forEach(detach_dev);
      t46 = claim_text(div16_nodes, "Austria");
      div16_nodes.forEach(detach_dev);
      t47 = claim_space(div245_nodes);
      div17 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div17_nodes = children(div17);
      i15 = claim_element(div17_nodes, "I", {
        class: true
      });
      children(i15).forEach(detach_dev);
      t48 = claim_text(div17_nodes, "Azerbaijan");
      div17_nodes.forEach(detach_dev);
      t49 = claim_space(div245_nodes);
      div18 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div18_nodes = children(div18);
      i16 = claim_element(div18_nodes, "I", {
        class: true
      });
      children(i16).forEach(detach_dev);
      t50 = claim_text(div18_nodes, "Bahamas");
      div18_nodes.forEach(detach_dev);
      t51 = claim_space(div245_nodes);
      div19 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div19_nodes = children(div19);
      i17 = claim_element(div19_nodes, "I", {
        class: true
      });
      children(i17).forEach(detach_dev);
      t52 = claim_text(div19_nodes, "Bahrain");
      div19_nodes.forEach(detach_dev);
      t53 = claim_space(div245_nodes);
      div20 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div20_nodes = children(div20);
      i18 = claim_element(div20_nodes, "I", {
        class: true
      });
      children(i18).forEach(detach_dev);
      t54 = claim_text(div20_nodes, "Bangladesh");
      div20_nodes.forEach(detach_dev);
      t55 = claim_space(div245_nodes);
      div21 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div21_nodes = children(div21);
      i19 = claim_element(div21_nodes, "I", {
        class: true
      });
      children(i19).forEach(detach_dev);
      t56 = claim_text(div21_nodes, "Barbados");
      div21_nodes.forEach(detach_dev);
      t57 = claim_space(div245_nodes);
      div22 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div22_nodes = children(div22);
      i20 = claim_element(div22_nodes, "I", {
        class: true
      });
      children(i20).forEach(detach_dev);
      t58 = claim_text(div22_nodes, "Belarus");
      div22_nodes.forEach(detach_dev);
      t59 = claim_space(div245_nodes);
      div23 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div23_nodes = children(div23);
      i21 = claim_element(div23_nodes, "I", {
        class: true
      });
      children(i21).forEach(detach_dev);
      t60 = claim_text(div23_nodes, "Belgium");
      div23_nodes.forEach(detach_dev);
      t61 = claim_space(div245_nodes);
      div24 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div24_nodes = children(div24);
      i22 = claim_element(div24_nodes, "I", {
        class: true
      });
      children(i22).forEach(detach_dev);
      t62 = claim_text(div24_nodes, "Belize");
      div24_nodes.forEach(detach_dev);
      t63 = claim_space(div245_nodes);
      div25 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div25_nodes = children(div25);
      i23 = claim_element(div25_nodes, "I", {
        class: true
      });
      children(i23).forEach(detach_dev);
      t64 = claim_text(div25_nodes, "Benin");
      div25_nodes.forEach(detach_dev);
      t65 = claim_space(div245_nodes);
      div26 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div26_nodes = children(div26);
      i24 = claim_element(div26_nodes, "I", {
        class: true
      });
      children(i24).forEach(detach_dev);
      t66 = claim_text(div26_nodes, "Bermuda");
      div26_nodes.forEach(detach_dev);
      t67 = claim_space(div245_nodes);
      div27 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div27_nodes = children(div27);
      i25 = claim_element(div27_nodes, "I", {
        class: true
      });
      children(i25).forEach(detach_dev);
      t68 = claim_text(div27_nodes, "Bhutan");
      div27_nodes.forEach(detach_dev);
      t69 = claim_space(div245_nodes);
      div28 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div28_nodes = children(div28);
      i26 = claim_element(div28_nodes, "I", {
        class: true
      });
      children(i26).forEach(detach_dev);
      t70 = claim_text(div28_nodes, "Bolivia");
      div28_nodes.forEach(detach_dev);
      t71 = claim_space(div245_nodes);
      div29 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div29_nodes = children(div29);
      i27 = claim_element(div29_nodes, "I", {
        class: true
      });
      children(i27).forEach(detach_dev);
      t72 = claim_text(div29_nodes, "Bosnia");
      div29_nodes.forEach(detach_dev);
      t73 = claim_space(div245_nodes);
      div30 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div30_nodes = children(div30);
      i28 = claim_element(div30_nodes, "I", {
        class: true
      });
      children(i28).forEach(detach_dev);
      t74 = claim_text(div30_nodes, "Botswana");
      div30_nodes.forEach(detach_dev);
      t75 = claim_space(div245_nodes);
      div31 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div31_nodes = children(div31);
      i29 = claim_element(div31_nodes, "I", {
        class: true
      });
      children(i29).forEach(detach_dev);
      t76 = claim_text(div31_nodes, "Bouvet Island");
      div31_nodes.forEach(detach_dev);
      t77 = claim_space(div245_nodes);
      div32 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div32_nodes = children(div32);
      i30 = claim_element(div32_nodes, "I", {
        class: true
      });
      children(i30).forEach(detach_dev);
      t78 = claim_text(div32_nodes, "Brazil");
      div32_nodes.forEach(detach_dev);
      t79 = claim_space(div245_nodes);
      div33 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div33_nodes = children(div33);
      i31 = claim_element(div33_nodes, "I", {
        class: true
      });
      children(i31).forEach(detach_dev);
      t80 = claim_text(div33_nodes, "British Virgin Islands");
      div33_nodes.forEach(detach_dev);
      t81 = claim_space(div245_nodes);
      div34 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div34_nodes = children(div34);
      i32 = claim_element(div34_nodes, "I", {
        class: true
      });
      children(i32).forEach(detach_dev);
      t82 = claim_text(div34_nodes, "Brunei");
      div34_nodes.forEach(detach_dev);
      t83 = claim_space(div245_nodes);
      div35 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div35_nodes = children(div35);
      i33 = claim_element(div35_nodes, "I", {
        class: true
      });
      children(i33).forEach(detach_dev);
      t84 = claim_text(div35_nodes, "Bulgaria");
      div35_nodes.forEach(detach_dev);
      t85 = claim_space(div245_nodes);
      div36 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div36_nodes = children(div36);
      i34 = claim_element(div36_nodes, "I", {
        class: true
      });
      children(i34).forEach(detach_dev);
      t86 = claim_text(div36_nodes, "Burkina Faso");
      div36_nodes.forEach(detach_dev);
      t87 = claim_space(div245_nodes);
      div37 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div37_nodes = children(div37);
      i35 = claim_element(div37_nodes, "I", {
        class: true
      });
      children(i35).forEach(detach_dev);
      t88 = claim_text(div37_nodes, "Burma");
      div37_nodes.forEach(detach_dev);
      t89 = claim_space(div245_nodes);
      div38 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div38_nodes = children(div38);
      i36 = claim_element(div38_nodes, "I", {
        class: true
      });
      children(i36).forEach(detach_dev);
      t90 = claim_text(div38_nodes, "Burundi");
      div38_nodes.forEach(detach_dev);
      t91 = claim_space(div245_nodes);
      div39 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div39_nodes = children(div39);
      i37 = claim_element(div39_nodes, "I", {
        class: true
      });
      children(i37).forEach(detach_dev);
      t92 = claim_text(div39_nodes, "Caicos Islands");
      div39_nodes.forEach(detach_dev);
      t93 = claim_space(div245_nodes);
      div40 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div40_nodes = children(div40);
      i38 = claim_element(div40_nodes, "I", {
        class: true
      });
      children(i38).forEach(detach_dev);
      t94 = claim_text(div40_nodes, "Cambodia");
      div40_nodes.forEach(detach_dev);
      t95 = claim_space(div245_nodes);
      div41 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div41_nodes = children(div41);
      i39 = claim_element(div41_nodes, "I", {
        class: true
      });
      children(i39).forEach(detach_dev);
      t96 = claim_text(div41_nodes, "Cameroon");
      div41_nodes.forEach(detach_dev);
      t97 = claim_space(div245_nodes);
      div42 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div42_nodes = children(div42);
      i40 = claim_element(div42_nodes, "I", {
        class: true
      });
      children(i40).forEach(detach_dev);
      t98 = claim_text(div42_nodes, "Canada");
      div42_nodes.forEach(detach_dev);
      t99 = claim_space(div245_nodes);
      div43 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div43_nodes = children(div43);
      i41 = claim_element(div43_nodes, "I", {
        class: true
      });
      children(i41).forEach(detach_dev);
      t100 = claim_text(div43_nodes, "Cape Verde");
      div43_nodes.forEach(detach_dev);
      t101 = claim_space(div245_nodes);
      div44 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div44_nodes = children(div44);
      i42 = claim_element(div44_nodes, "I", {
        class: true
      });
      children(i42).forEach(detach_dev);
      t102 = claim_text(div44_nodes, "Cayman Islands");
      div44_nodes.forEach(detach_dev);
      t103 = claim_space(div245_nodes);
      div45 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div45_nodes = children(div45);
      i43 = claim_element(div45_nodes, "I", {
        class: true
      });
      children(i43).forEach(detach_dev);
      t104 = claim_text(div45_nodes, "Central African Republic");
      div45_nodes.forEach(detach_dev);
      t105 = claim_space(div245_nodes);
      div46 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div46_nodes = children(div46);
      i44 = claim_element(div46_nodes, "I", {
        class: true
      });
      children(i44).forEach(detach_dev);
      t106 = claim_text(div46_nodes, "Chad");
      div46_nodes.forEach(detach_dev);
      t107 = claim_space(div245_nodes);
      div47 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div47_nodes = children(div47);
      i45 = claim_element(div47_nodes, "I", {
        class: true
      });
      children(i45).forEach(detach_dev);
      t108 = claim_text(div47_nodes, "Chile");
      div47_nodes.forEach(detach_dev);
      t109 = claim_space(div245_nodes);
      div48 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div48_nodes = children(div48);
      i46 = claim_element(div48_nodes, "I", {
        class: true
      });
      children(i46).forEach(detach_dev);
      t110 = claim_text(div48_nodes, "China");
      div48_nodes.forEach(detach_dev);
      t111 = claim_space(div245_nodes);
      div49 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div49_nodes = children(div49);
      i47 = claim_element(div49_nodes, "I", {
        class: true
      });
      children(i47).forEach(detach_dev);
      t112 = claim_text(div49_nodes, "Christmas Island");
      div49_nodes.forEach(detach_dev);
      t113 = claim_space(div245_nodes);
      div50 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div50_nodes = children(div50);
      i48 = claim_element(div50_nodes, "I", {
        class: true
      });
      children(i48).forEach(detach_dev);
      t114 = claim_text(div50_nodes, "Cocos Islands");
      div50_nodes.forEach(detach_dev);
      t115 = claim_space(div245_nodes);
      div51 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div51_nodes = children(div51);
      i49 = claim_element(div51_nodes, "I", {
        class: true
      });
      children(i49).forEach(detach_dev);
      t116 = claim_text(div51_nodes, "Colombia");
      div51_nodes.forEach(detach_dev);
      t117 = claim_space(div245_nodes);
      div52 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div52_nodes = children(div52);
      i50 = claim_element(div52_nodes, "I", {
        class: true
      });
      children(i50).forEach(detach_dev);
      t118 = claim_text(div52_nodes, "Comoros");
      div52_nodes.forEach(detach_dev);
      t119 = claim_space(div245_nodes);
      div53 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div53_nodes = children(div53);
      i51 = claim_element(div53_nodes, "I", {
        class: true
      });
      children(i51).forEach(detach_dev);
      t120 = claim_text(div53_nodes, "Congo Brazzaville");
      div53_nodes.forEach(detach_dev);
      t121 = claim_space(div245_nodes);
      div54 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div54_nodes = children(div54);
      i52 = claim_element(div54_nodes, "I", {
        class: true
      });
      children(i52).forEach(detach_dev);
      t122 = claim_text(div54_nodes, "Congo");
      div54_nodes.forEach(detach_dev);
      t123 = claim_space(div245_nodes);
      div55 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div55_nodes = children(div55);
      i53 = claim_element(div55_nodes, "I", {
        class: true
      });
      children(i53).forEach(detach_dev);
      t124 = claim_text(div55_nodes, "Cook Islands");
      div55_nodes.forEach(detach_dev);
      t125 = claim_space(div245_nodes);
      div56 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div56_nodes = children(div56);
      i54 = claim_element(div56_nodes, "I", {
        class: true
      });
      children(i54).forEach(detach_dev);
      t126 = claim_text(div56_nodes, "Costa Rica");
      div56_nodes.forEach(detach_dev);
      t127 = claim_space(div245_nodes);
      div57 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div57_nodes = children(div57);
      i55 = claim_element(div57_nodes, "I", {
        class: true
      });
      children(i55).forEach(detach_dev);
      t128 = claim_text(div57_nodes, "Cote Divoire");
      div57_nodes.forEach(detach_dev);
      t129 = claim_space(div245_nodes);
      div58 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div58_nodes = children(div58);
      i56 = claim_element(div58_nodes, "I", {
        class: true
      });
      children(i56).forEach(detach_dev);
      t130 = claim_text(div58_nodes, "Croatia");
      div58_nodes.forEach(detach_dev);
      t131 = claim_space(div245_nodes);
      div59 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div59_nodes = children(div59);
      i57 = claim_element(div59_nodes, "I", {
        class: true
      });
      children(i57).forEach(detach_dev);
      t132 = claim_text(div59_nodes, "Cuba");
      div59_nodes.forEach(detach_dev);
      t133 = claim_space(div245_nodes);
      div60 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div60_nodes = children(div60);
      i58 = claim_element(div60_nodes, "I", {
        class: true
      });
      children(i58).forEach(detach_dev);
      t134 = claim_text(div60_nodes, "Cyprus");
      div60_nodes.forEach(detach_dev);
      t135 = claim_space(div245_nodes);
      div61 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div61_nodes = children(div61);
      i59 = claim_element(div61_nodes, "I", {
        class: true
      });
      children(i59).forEach(detach_dev);
      t136 = claim_text(div61_nodes, "Czech Republic");
      div61_nodes.forEach(detach_dev);
      t137 = claim_space(div245_nodes);
      div62 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div62_nodes = children(div62);
      i60 = claim_element(div62_nodes, "I", {
        class: true
      });
      children(i60).forEach(detach_dev);
      t138 = claim_text(div62_nodes, "Denmark");
      div62_nodes.forEach(detach_dev);
      t139 = claim_space(div245_nodes);
      div63 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div63_nodes = children(div63);
      i61 = claim_element(div63_nodes, "I", {
        class: true
      });
      children(i61).forEach(detach_dev);
      t140 = claim_text(div63_nodes, "Djibouti");
      div63_nodes.forEach(detach_dev);
      t141 = claim_space(div245_nodes);
      div64 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div64_nodes = children(div64);
      i62 = claim_element(div64_nodes, "I", {
        class: true
      });
      children(i62).forEach(detach_dev);
      t142 = claim_text(div64_nodes, "Dominica");
      div64_nodes.forEach(detach_dev);
      t143 = claim_space(div245_nodes);
      div65 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div65_nodes = children(div65);
      i63 = claim_element(div65_nodes, "I", {
        class: true
      });
      children(i63).forEach(detach_dev);
      t144 = claim_text(div65_nodes, "Dominican Republic");
      div65_nodes.forEach(detach_dev);
      t145 = claim_space(div245_nodes);
      div66 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div66_nodes = children(div66);
      i64 = claim_element(div66_nodes, "I", {
        class: true
      });
      children(i64).forEach(detach_dev);
      t146 = claim_text(div66_nodes, "Ecuador");
      div66_nodes.forEach(detach_dev);
      t147 = claim_space(div245_nodes);
      div67 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div67_nodes = children(div67);
      i65 = claim_element(div67_nodes, "I", {
        class: true
      });
      children(i65).forEach(detach_dev);
      t148 = claim_text(div67_nodes, "Egypt");
      div67_nodes.forEach(detach_dev);
      t149 = claim_space(div245_nodes);
      div68 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div68_nodes = children(div68);
      i66 = claim_element(div68_nodes, "I", {
        class: true
      });
      children(i66).forEach(detach_dev);
      t150 = claim_text(div68_nodes, "El Salvador");
      div68_nodes.forEach(detach_dev);
      t151 = claim_space(div245_nodes);
      div69 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div69_nodes = children(div69);
      i67 = claim_element(div69_nodes, "I", {
        class: true
      });
      children(i67).forEach(detach_dev);
      t152 = claim_text(div69_nodes, "England");
      div69_nodes.forEach(detach_dev);
      t153 = claim_space(div245_nodes);
      div70 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div70_nodes = children(div70);
      i68 = claim_element(div70_nodes, "I", {
        class: true
      });
      children(i68).forEach(detach_dev);
      t154 = claim_text(div70_nodes, "Equatorial Guinea");
      div70_nodes.forEach(detach_dev);
      t155 = claim_space(div245_nodes);
      div71 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div71_nodes = children(div71);
      i69 = claim_element(div71_nodes, "I", {
        class: true
      });
      children(i69).forEach(detach_dev);
      t156 = claim_text(div71_nodes, "Eritrea");
      div71_nodes.forEach(detach_dev);
      t157 = claim_space(div245_nodes);
      div72 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div72_nodes = children(div72);
      i70 = claim_element(div72_nodes, "I", {
        class: true
      });
      children(i70).forEach(detach_dev);
      t158 = claim_text(div72_nodes, "Estonia");
      div72_nodes.forEach(detach_dev);
      t159 = claim_space(div245_nodes);
      div73 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div73_nodes = children(div73);
      i71 = claim_element(div73_nodes, "I", {
        class: true
      });
      children(i71).forEach(detach_dev);
      t160 = claim_text(div73_nodes, "Ethiopia");
      div73_nodes.forEach(detach_dev);
      t161 = claim_space(div245_nodes);
      div74 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div74_nodes = children(div74);
      i72 = claim_element(div74_nodes, "I", {
        class: true
      });
      children(i72).forEach(detach_dev);
      t162 = claim_text(div74_nodes, "European Union");
      div74_nodes.forEach(detach_dev);
      t163 = claim_space(div245_nodes);
      div75 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div75_nodes = children(div75);
      i73 = claim_element(div75_nodes, "I", {
        class: true
      });
      children(i73).forEach(detach_dev);
      t164 = claim_text(div75_nodes, "Falkland Islands");
      div75_nodes.forEach(detach_dev);
      t165 = claim_space(div245_nodes);
      div76 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div76_nodes = children(div76);
      i74 = claim_element(div76_nodes, "I", {
        class: true
      });
      children(i74).forEach(detach_dev);
      t166 = claim_text(div76_nodes, "Faroe Islands");
      div76_nodes.forEach(detach_dev);
      t167 = claim_space(div245_nodes);
      div77 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div77_nodes = children(div77);
      i75 = claim_element(div77_nodes, "I", {
        class: true
      });
      children(i75).forEach(detach_dev);
      t168 = claim_text(div77_nodes, "Fiji");
      div77_nodes.forEach(detach_dev);
      t169 = claim_space(div245_nodes);
      div78 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div78_nodes = children(div78);
      i76 = claim_element(div78_nodes, "I", {
        class: true
      });
      children(i76).forEach(detach_dev);
      t170 = claim_text(div78_nodes, "Finland");
      div78_nodes.forEach(detach_dev);
      t171 = claim_space(div245_nodes);
      div79 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div79_nodes = children(div79);
      i77 = claim_element(div79_nodes, "I", {
        class: true
      });
      children(i77).forEach(detach_dev);
      t172 = claim_text(div79_nodes, "France");
      div79_nodes.forEach(detach_dev);
      t173 = claim_space(div245_nodes);
      div80 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div80_nodes = children(div80);
      i78 = claim_element(div80_nodes, "I", {
        class: true
      });
      children(i78).forEach(detach_dev);
      t174 = claim_text(div80_nodes, "French Guiana");
      div80_nodes.forEach(detach_dev);
      t175 = claim_space(div245_nodes);
      div81 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div81_nodes = children(div81);
      i79 = claim_element(div81_nodes, "I", {
        class: true
      });
      children(i79).forEach(detach_dev);
      t176 = claim_text(div81_nodes, "French Polynesia");
      div81_nodes.forEach(detach_dev);
      t177 = claim_space(div245_nodes);
      div82 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div82_nodes = children(div82);
      i80 = claim_element(div82_nodes, "I", {
        class: true
      });
      children(i80).forEach(detach_dev);
      t178 = claim_text(div82_nodes, "French Territories");
      div82_nodes.forEach(detach_dev);
      t179 = claim_space(div245_nodes);
      div83 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div83_nodes = children(div83);
      i81 = claim_element(div83_nodes, "I", {
        class: true
      });
      children(i81).forEach(detach_dev);
      t180 = claim_text(div83_nodes, "Gabon");
      div83_nodes.forEach(detach_dev);
      t181 = claim_space(div245_nodes);
      div84 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div84_nodes = children(div84);
      i82 = claim_element(div84_nodes, "I", {
        class: true
      });
      children(i82).forEach(detach_dev);
      t182 = claim_text(div84_nodes, "Gambia");
      div84_nodes.forEach(detach_dev);
      t183 = claim_space(div245_nodes);
      div85 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div85_nodes = children(div85);
      i83 = claim_element(div85_nodes, "I", {
        class: true
      });
      children(i83).forEach(detach_dev);
      t184 = claim_text(div85_nodes, "Georgia");
      div85_nodes.forEach(detach_dev);
      t185 = claim_space(div245_nodes);
      div86 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div86_nodes = children(div86);
      i84 = claim_element(div86_nodes, "I", {
        class: true
      });
      children(i84).forEach(detach_dev);
      t186 = claim_text(div86_nodes, "Germany");
      div86_nodes.forEach(detach_dev);
      t187 = claim_space(div245_nodes);
      div87 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div87_nodes = children(div87);
      i85 = claim_element(div87_nodes, "I", {
        class: true
      });
      children(i85).forEach(detach_dev);
      t188 = claim_text(div87_nodes, "Ghana");
      div87_nodes.forEach(detach_dev);
      t189 = claim_space(div245_nodes);
      div88 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div88_nodes = children(div88);
      i86 = claim_element(div88_nodes, "I", {
        class: true
      });
      children(i86).forEach(detach_dev);
      t190 = claim_text(div88_nodes, "Gibraltar");
      div88_nodes.forEach(detach_dev);
      t191 = claim_space(div245_nodes);
      div89 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div89_nodes = children(div89);
      i87 = claim_element(div89_nodes, "I", {
        class: true
      });
      children(i87).forEach(detach_dev);
      t192 = claim_text(div89_nodes, "Greece");
      div89_nodes.forEach(detach_dev);
      t193 = claim_space(div245_nodes);
      div90 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div90_nodes = children(div90);
      i88 = claim_element(div90_nodes, "I", {
        class: true
      });
      children(i88).forEach(detach_dev);
      t194 = claim_text(div90_nodes, "Greenland");
      div90_nodes.forEach(detach_dev);
      t195 = claim_space(div245_nodes);
      div91 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div91_nodes = children(div91);
      i89 = claim_element(div91_nodes, "I", {
        class: true
      });
      children(i89).forEach(detach_dev);
      t196 = claim_text(div91_nodes, "Grenada");
      div91_nodes.forEach(detach_dev);
      t197 = claim_space(div245_nodes);
      div92 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div92_nodes = children(div92);
      i90 = claim_element(div92_nodes, "I", {
        class: true
      });
      children(i90).forEach(detach_dev);
      t198 = claim_text(div92_nodes, "Guadeloupe");
      div92_nodes.forEach(detach_dev);
      t199 = claim_space(div245_nodes);
      div93 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div93_nodes = children(div93);
      i91 = claim_element(div93_nodes, "I", {
        class: true
      });
      children(i91).forEach(detach_dev);
      t200 = claim_text(div93_nodes, "Guam");
      div93_nodes.forEach(detach_dev);
      t201 = claim_space(div245_nodes);
      div94 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div94_nodes = children(div94);
      i92 = claim_element(div94_nodes, "I", {
        class: true
      });
      children(i92).forEach(detach_dev);
      t202 = claim_text(div94_nodes, "Guatemala");
      div94_nodes.forEach(detach_dev);
      t203 = claim_space(div245_nodes);
      div95 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div95_nodes = children(div95);
      i93 = claim_element(div95_nodes, "I", {
        class: true
      });
      children(i93).forEach(detach_dev);
      t204 = claim_text(div95_nodes, "Guinea-Bissau");
      div95_nodes.forEach(detach_dev);
      t205 = claim_space(div245_nodes);
      div96 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div96_nodes = children(div96);
      i94 = claim_element(div96_nodes, "I", {
        class: true
      });
      children(i94).forEach(detach_dev);
      t206 = claim_text(div96_nodes, "Guinea");
      div96_nodes.forEach(detach_dev);
      t207 = claim_space(div245_nodes);
      div97 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div97_nodes = children(div97);
      i95 = claim_element(div97_nodes, "I", {
        class: true
      });
      children(i95).forEach(detach_dev);
      t208 = claim_text(div97_nodes, "Guyana");
      div97_nodes.forEach(detach_dev);
      t209 = claim_space(div245_nodes);
      div98 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div98_nodes = children(div98);
      i96 = claim_element(div98_nodes, "I", {
        class: true
      });
      children(i96).forEach(detach_dev);
      t210 = claim_text(div98_nodes, "Haiti");
      div98_nodes.forEach(detach_dev);
      t211 = claim_space(div245_nodes);
      div99 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div99_nodes = children(div99);
      i97 = claim_element(div99_nodes, "I", {
        class: true
      });
      children(i97).forEach(detach_dev);
      t212 = claim_text(div99_nodes, "Heard Island");
      div99_nodes.forEach(detach_dev);
      t213 = claim_space(div245_nodes);
      div100 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div100_nodes = children(div100);
      i98 = claim_element(div100_nodes, "I", {
        class: true
      });
      children(i98).forEach(detach_dev);
      t214 = claim_text(div100_nodes, "Honduras");
      div100_nodes.forEach(detach_dev);
      t215 = claim_space(div245_nodes);
      div101 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div101_nodes = children(div101);
      i99 = claim_element(div101_nodes, "I", {
        class: true
      });
      children(i99).forEach(detach_dev);
      t216 = claim_text(div101_nodes, "Hong Kong");
      div101_nodes.forEach(detach_dev);
      t217 = claim_space(div245_nodes);
      div102 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div102_nodes = children(div102);
      i100 = claim_element(div102_nodes, "I", {
        class: true
      });
      children(i100).forEach(detach_dev);
      t218 = claim_text(div102_nodes, "Hungary");
      div102_nodes.forEach(detach_dev);
      t219 = claim_space(div245_nodes);
      div103 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div103_nodes = children(div103);
      i101 = claim_element(div103_nodes, "I", {
        class: true
      });
      children(i101).forEach(detach_dev);
      t220 = claim_text(div103_nodes, "Iceland");
      div103_nodes.forEach(detach_dev);
      t221 = claim_space(div245_nodes);
      div104 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div104_nodes = children(div104);
      i102 = claim_element(div104_nodes, "I", {
        class: true
      });
      children(i102).forEach(detach_dev);
      t222 = claim_text(div104_nodes, "India");
      div104_nodes.forEach(detach_dev);
      t223 = claim_space(div245_nodes);
      div105 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div105_nodes = children(div105);
      i103 = claim_element(div105_nodes, "I", {
        class: true
      });
      children(i103).forEach(detach_dev);
      t224 = claim_text(div105_nodes, "Indian Ocean Territory");
      div105_nodes.forEach(detach_dev);
      t225 = claim_space(div245_nodes);
      div106 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div106_nodes = children(div106);
      i104 = claim_element(div106_nodes, "I", {
        class: true
      });
      children(i104).forEach(detach_dev);
      t226 = claim_text(div106_nodes, "Indonesia");
      div106_nodes.forEach(detach_dev);
      t227 = claim_space(div245_nodes);
      div107 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div107_nodes = children(div107);
      i105 = claim_element(div107_nodes, "I", {
        class: true
      });
      children(i105).forEach(detach_dev);
      t228 = claim_text(div107_nodes, "Iran");
      div107_nodes.forEach(detach_dev);
      t229 = claim_space(div245_nodes);
      div108 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div108_nodes = children(div108);
      i106 = claim_element(div108_nodes, "I", {
        class: true
      });
      children(i106).forEach(detach_dev);
      t230 = claim_text(div108_nodes, "Iraq");
      div108_nodes.forEach(detach_dev);
      t231 = claim_space(div245_nodes);
      div109 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div109_nodes = children(div109);
      i107 = claim_element(div109_nodes, "I", {
        class: true
      });
      children(i107).forEach(detach_dev);
      t232 = claim_text(div109_nodes, "Ireland");
      div109_nodes.forEach(detach_dev);
      t233 = claim_space(div245_nodes);
      div110 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div110_nodes = children(div110);
      i108 = claim_element(div110_nodes, "I", {
        class: true
      });
      children(i108).forEach(detach_dev);
      t234 = claim_text(div110_nodes, "Israel");
      div110_nodes.forEach(detach_dev);
      t235 = claim_space(div245_nodes);
      div111 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div111_nodes = children(div111);
      i109 = claim_element(div111_nodes, "I", {
        class: true
      });
      children(i109).forEach(detach_dev);
      t236 = claim_text(div111_nodes, "Italy");
      div111_nodes.forEach(detach_dev);
      t237 = claim_space(div245_nodes);
      div112 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div112_nodes = children(div112);
      i110 = claim_element(div112_nodes, "I", {
        class: true
      });
      children(i110).forEach(detach_dev);
      t238 = claim_text(div112_nodes, "Jamaica");
      div112_nodes.forEach(detach_dev);
      t239 = claim_space(div245_nodes);
      div113 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div113_nodes = children(div113);
      i111 = claim_element(div113_nodes, "I", {
        class: true
      });
      children(i111).forEach(detach_dev);
      t240 = claim_text(div113_nodes, "Japan");
      div113_nodes.forEach(detach_dev);
      t241 = claim_space(div245_nodes);
      div114 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div114_nodes = children(div114);
      i112 = claim_element(div114_nodes, "I", {
        class: true
      });
      children(i112).forEach(detach_dev);
      t242 = claim_text(div114_nodes, "Jordan");
      div114_nodes.forEach(detach_dev);
      t243 = claim_space(div245_nodes);
      div115 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div115_nodes = children(div115);
      i113 = claim_element(div115_nodes, "I", {
        class: true
      });
      children(i113).forEach(detach_dev);
      t244 = claim_text(div115_nodes, "Kazakhstan");
      div115_nodes.forEach(detach_dev);
      t245 = claim_space(div245_nodes);
      div116 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div116_nodes = children(div116);
      i114 = claim_element(div116_nodes, "I", {
        class: true
      });
      children(i114).forEach(detach_dev);
      t246 = claim_text(div116_nodes, "Kenya");
      div116_nodes.forEach(detach_dev);
      t247 = claim_space(div245_nodes);
      div117 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div117_nodes = children(div117);
      i115 = claim_element(div117_nodes, "I", {
        class: true
      });
      children(i115).forEach(detach_dev);
      t248 = claim_text(div117_nodes, "Kiribati");
      div117_nodes.forEach(detach_dev);
      t249 = claim_space(div245_nodes);
      div118 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div118_nodes = children(div118);
      i116 = claim_element(div118_nodes, "I", {
        class: true
      });
      children(i116).forEach(detach_dev);
      t250 = claim_text(div118_nodes, "Kuwait");
      div118_nodes.forEach(detach_dev);
      t251 = claim_space(div245_nodes);
      div119 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div119_nodes = children(div119);
      i117 = claim_element(div119_nodes, "I", {
        class: true
      });
      children(i117).forEach(detach_dev);
      t252 = claim_text(div119_nodes, "Kyrgyzstan");
      div119_nodes.forEach(detach_dev);
      t253 = claim_space(div245_nodes);
      div120 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div120_nodes = children(div120);
      i118 = claim_element(div120_nodes, "I", {
        class: true
      });
      children(i118).forEach(detach_dev);
      t254 = claim_text(div120_nodes, "Laos");
      div120_nodes.forEach(detach_dev);
      t255 = claim_space(div245_nodes);
      div121 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div121_nodes = children(div121);
      i119 = claim_element(div121_nodes, "I", {
        class: true
      });
      children(i119).forEach(detach_dev);
      t256 = claim_text(div121_nodes, "Latvia");
      div121_nodes.forEach(detach_dev);
      t257 = claim_space(div245_nodes);
      div122 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div122_nodes = children(div122);
      i120 = claim_element(div122_nodes, "I", {
        class: true
      });
      children(i120).forEach(detach_dev);
      t258 = claim_text(div122_nodes, "Lebanon");
      div122_nodes.forEach(detach_dev);
      t259 = claim_space(div245_nodes);
      div123 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div123_nodes = children(div123);
      i121 = claim_element(div123_nodes, "I", {
        class: true
      });
      children(i121).forEach(detach_dev);
      t260 = claim_text(div123_nodes, "Lesotho");
      div123_nodes.forEach(detach_dev);
      t261 = claim_space(div245_nodes);
      div124 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div124_nodes = children(div124);
      i122 = claim_element(div124_nodes, "I", {
        class: true
      });
      children(i122).forEach(detach_dev);
      t262 = claim_text(div124_nodes, "Liberia");
      div124_nodes.forEach(detach_dev);
      t263 = claim_space(div245_nodes);
      div125 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div125_nodes = children(div125);
      i123 = claim_element(div125_nodes, "I", {
        class: true
      });
      children(i123).forEach(detach_dev);
      t264 = claim_text(div125_nodes, "Libya");
      div125_nodes.forEach(detach_dev);
      t265 = claim_space(div245_nodes);
      div126 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div126_nodes = children(div126);
      i124 = claim_element(div126_nodes, "I", {
        class: true
      });
      children(i124).forEach(detach_dev);
      t266 = claim_text(div126_nodes, "Liechtenstein");
      div126_nodes.forEach(detach_dev);
      t267 = claim_space(div245_nodes);
      div127 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div127_nodes = children(div127);
      i125 = claim_element(div127_nodes, "I", {
        class: true
      });
      children(i125).forEach(detach_dev);
      t268 = claim_text(div127_nodes, "Lithuania");
      div127_nodes.forEach(detach_dev);
      t269 = claim_space(div245_nodes);
      div128 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div128_nodes = children(div128);
      i126 = claim_element(div128_nodes, "I", {
        class: true
      });
      children(i126).forEach(detach_dev);
      t270 = claim_text(div128_nodes, "Luxembourg");
      div128_nodes.forEach(detach_dev);
      t271 = claim_space(div245_nodes);
      div129 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div129_nodes = children(div129);
      i127 = claim_element(div129_nodes, "I", {
        class: true
      });
      children(i127).forEach(detach_dev);
      t272 = claim_text(div129_nodes, "Macau");
      div129_nodes.forEach(detach_dev);
      t273 = claim_space(div245_nodes);
      div130 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div130_nodes = children(div130);
      i128 = claim_element(div130_nodes, "I", {
        class: true
      });
      children(i128).forEach(detach_dev);
      t274 = claim_text(div130_nodes, "Macedonia");
      div130_nodes.forEach(detach_dev);
      t275 = claim_space(div245_nodes);
      div131 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div131_nodes = children(div131);
      i129 = claim_element(div131_nodes, "I", {
        class: true
      });
      children(i129).forEach(detach_dev);
      t276 = claim_text(div131_nodes, "Madagascar");
      div131_nodes.forEach(detach_dev);
      t277 = claim_space(div245_nodes);
      div132 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div132_nodes = children(div132);
      i130 = claim_element(div132_nodes, "I", {
        class: true
      });
      children(i130).forEach(detach_dev);
      t278 = claim_text(div132_nodes, "Malawi");
      div132_nodes.forEach(detach_dev);
      t279 = claim_space(div245_nodes);
      div133 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div133_nodes = children(div133);
      i131 = claim_element(div133_nodes, "I", {
        class: true
      });
      children(i131).forEach(detach_dev);
      t280 = claim_text(div133_nodes, "Malaysia");
      div133_nodes.forEach(detach_dev);
      t281 = claim_space(div245_nodes);
      div134 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div134_nodes = children(div134);
      i132 = claim_element(div134_nodes, "I", {
        class: true
      });
      children(i132).forEach(detach_dev);
      t282 = claim_text(div134_nodes, "Maldives");
      div134_nodes.forEach(detach_dev);
      t283 = claim_space(div245_nodes);
      div135 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div135_nodes = children(div135);
      i133 = claim_element(div135_nodes, "I", {
        class: true
      });
      children(i133).forEach(detach_dev);
      t284 = claim_text(div135_nodes, "Mali");
      div135_nodes.forEach(detach_dev);
      t285 = claim_space(div245_nodes);
      div136 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div136_nodes = children(div136);
      i134 = claim_element(div136_nodes, "I", {
        class: true
      });
      children(i134).forEach(detach_dev);
      t286 = claim_text(div136_nodes, "Malta");
      div136_nodes.forEach(detach_dev);
      t287 = claim_space(div245_nodes);
      div137 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div137_nodes = children(div137);
      i135 = claim_element(div137_nodes, "I", {
        class: true
      });
      children(i135).forEach(detach_dev);
      t288 = claim_text(div137_nodes, "Marshall Islands");
      div137_nodes.forEach(detach_dev);
      t289 = claim_space(div245_nodes);
      div138 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div138_nodes = children(div138);
      i136 = claim_element(div138_nodes, "I", {
        class: true
      });
      children(i136).forEach(detach_dev);
      t290 = claim_text(div138_nodes, "Martinique");
      div138_nodes.forEach(detach_dev);
      t291 = claim_space(div245_nodes);
      div139 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div139_nodes = children(div139);
      i137 = claim_element(div139_nodes, "I", {
        class: true
      });
      children(i137).forEach(detach_dev);
      t292 = claim_text(div139_nodes, "Mauritania");
      div139_nodes.forEach(detach_dev);
      t293 = claim_space(div245_nodes);
      div140 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div140_nodes = children(div140);
      i138 = claim_element(div140_nodes, "I", {
        class: true
      });
      children(i138).forEach(detach_dev);
      t294 = claim_text(div140_nodes, "Mauritius");
      div140_nodes.forEach(detach_dev);
      t295 = claim_space(div245_nodes);
      div141 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div141_nodes = children(div141);
      i139 = claim_element(div141_nodes, "I", {
        class: true
      });
      children(i139).forEach(detach_dev);
      t296 = claim_text(div141_nodes, "Mayotte");
      div141_nodes.forEach(detach_dev);
      t297 = claim_space(div245_nodes);
      div142 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div142_nodes = children(div142);
      i140 = claim_element(div142_nodes, "I", {
        class: true
      });
      children(i140).forEach(detach_dev);
      t298 = claim_text(div142_nodes, "Mexico");
      div142_nodes.forEach(detach_dev);
      t299 = claim_space(div245_nodes);
      div143 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div143_nodes = children(div143);
      i141 = claim_element(div143_nodes, "I", {
        class: true
      });
      children(i141).forEach(detach_dev);
      t300 = claim_text(div143_nodes, "Micronesia");
      div143_nodes.forEach(detach_dev);
      t301 = claim_space(div245_nodes);
      div144 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div144_nodes = children(div144);
      i142 = claim_element(div144_nodes, "I", {
        class: true
      });
      children(i142).forEach(detach_dev);
      t302 = claim_text(div144_nodes, "Moldova");
      div144_nodes.forEach(detach_dev);
      t303 = claim_space(div245_nodes);
      div145 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div145_nodes = children(div145);
      i143 = claim_element(div145_nodes, "I", {
        class: true
      });
      children(i143).forEach(detach_dev);
      t304 = claim_text(div145_nodes, "Monaco");
      div145_nodes.forEach(detach_dev);
      t305 = claim_space(div245_nodes);
      div146 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div146_nodes = children(div146);
      i144 = claim_element(div146_nodes, "I", {
        class: true
      });
      children(i144).forEach(detach_dev);
      t306 = claim_text(div146_nodes, "Mongolia");
      div146_nodes.forEach(detach_dev);
      t307 = claim_space(div245_nodes);
      div147 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div147_nodes = children(div147);
      i145 = claim_element(div147_nodes, "I", {
        class: true
      });
      children(i145).forEach(detach_dev);
      t308 = claim_text(div147_nodes, "Montenegro");
      div147_nodes.forEach(detach_dev);
      t309 = claim_space(div245_nodes);
      div148 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div148_nodes = children(div148);
      i146 = claim_element(div148_nodes, "I", {
        class: true
      });
      children(i146).forEach(detach_dev);
      t310 = claim_text(div148_nodes, "Montserrat");
      div148_nodes.forEach(detach_dev);
      t311 = claim_space(div245_nodes);
      div149 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div149_nodes = children(div149);
      i147 = claim_element(div149_nodes, "I", {
        class: true
      });
      children(i147).forEach(detach_dev);
      t312 = claim_text(div149_nodes, "Morocco");
      div149_nodes.forEach(detach_dev);
      t313 = claim_space(div245_nodes);
      div150 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div150_nodes = children(div150);
      i148 = claim_element(div150_nodes, "I", {
        class: true
      });
      children(i148).forEach(detach_dev);
      t314 = claim_text(div150_nodes, "Mozambique");
      div150_nodes.forEach(detach_dev);
      t315 = claim_space(div245_nodes);
      div151 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div151_nodes = children(div151);
      i149 = claim_element(div151_nodes, "I", {
        class: true
      });
      children(i149).forEach(detach_dev);
      t316 = claim_text(div151_nodes, "Namibia");
      div151_nodes.forEach(detach_dev);
      t317 = claim_space(div245_nodes);
      div152 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div152_nodes = children(div152);
      i150 = claim_element(div152_nodes, "I", {
        class: true
      });
      children(i150).forEach(detach_dev);
      t318 = claim_text(div152_nodes, "Nauru");
      div152_nodes.forEach(detach_dev);
      t319 = claim_space(div245_nodes);
      div153 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div153_nodes = children(div153);
      i151 = claim_element(div153_nodes, "I", {
        class: true
      });
      children(i151).forEach(detach_dev);
      t320 = claim_text(div153_nodes, "Nepal");
      div153_nodes.forEach(detach_dev);
      t321 = claim_space(div245_nodes);
      div154 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div154_nodes = children(div154);
      i152 = claim_element(div154_nodes, "I", {
        class: true
      });
      children(i152).forEach(detach_dev);
      t322 = claim_text(div154_nodes, "Netherlands Antilles");
      div154_nodes.forEach(detach_dev);
      t323 = claim_space(div245_nodes);
      div155 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div155_nodes = children(div155);
      i153 = claim_element(div155_nodes, "I", {
        class: true
      });
      children(i153).forEach(detach_dev);
      t324 = claim_text(div155_nodes, "Netherlands");
      div155_nodes.forEach(detach_dev);
      t325 = claim_space(div245_nodes);
      div156 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div156_nodes = children(div156);
      i154 = claim_element(div156_nodes, "I", {
        class: true
      });
      children(i154).forEach(detach_dev);
      t326 = claim_text(div156_nodes, "New Caledonia");
      div156_nodes.forEach(detach_dev);
      t327 = claim_space(div245_nodes);
      div157 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div157_nodes = children(div157);
      i155 = claim_element(div157_nodes, "I", {
        class: true
      });
      children(i155).forEach(detach_dev);
      t328 = claim_text(div157_nodes, "New Guinea");
      div157_nodes.forEach(detach_dev);
      t329 = claim_space(div245_nodes);
      div158 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div158_nodes = children(div158);
      i156 = claim_element(div158_nodes, "I", {
        class: true
      });
      children(i156).forEach(detach_dev);
      t330 = claim_text(div158_nodes, "New Zealand");
      div158_nodes.forEach(detach_dev);
      t331 = claim_space(div245_nodes);
      div159 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div159_nodes = children(div159);
      i157 = claim_element(div159_nodes, "I", {
        class: true
      });
      children(i157).forEach(detach_dev);
      t332 = claim_text(div159_nodes, "Nicaragua");
      div159_nodes.forEach(detach_dev);
      t333 = claim_space(div245_nodes);
      div160 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div160_nodes = children(div160);
      i158 = claim_element(div160_nodes, "I", {
        class: true
      });
      children(i158).forEach(detach_dev);
      t334 = claim_text(div160_nodes, "Niger");
      div160_nodes.forEach(detach_dev);
      t335 = claim_space(div245_nodes);
      div161 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div161_nodes = children(div161);
      i159 = claim_element(div161_nodes, "I", {
        class: true
      });
      children(i159).forEach(detach_dev);
      t336 = claim_text(div161_nodes, "Nigeria");
      div161_nodes.forEach(detach_dev);
      t337 = claim_space(div245_nodes);
      div162 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div162_nodes = children(div162);
      i160 = claim_element(div162_nodes, "I", {
        class: true
      });
      children(i160).forEach(detach_dev);
      t338 = claim_text(div162_nodes, "Niue");
      div162_nodes.forEach(detach_dev);
      t339 = claim_space(div245_nodes);
      div163 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div163_nodes = children(div163);
      i161 = claim_element(div163_nodes, "I", {
        class: true
      });
      children(i161).forEach(detach_dev);
      t340 = claim_text(div163_nodes, "Norfolk Island");
      div163_nodes.forEach(detach_dev);
      t341 = claim_space(div245_nodes);
      div164 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div164_nodes = children(div164);
      i162 = claim_element(div164_nodes, "I", {
        class: true
      });
      children(i162).forEach(detach_dev);
      t342 = claim_text(div164_nodes, "North Korea");
      div164_nodes.forEach(detach_dev);
      t343 = claim_space(div245_nodes);
      div165 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div165_nodes = children(div165);
      i163 = claim_element(div165_nodes, "I", {
        class: true
      });
      children(i163).forEach(detach_dev);
      t344 = claim_text(div165_nodes, "Northern Mariana Islands");
      div165_nodes.forEach(detach_dev);
      t345 = claim_space(div245_nodes);
      div166 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div166_nodes = children(div166);
      i164 = claim_element(div166_nodes, "I", {
        class: true
      });
      children(i164).forEach(detach_dev);
      t346 = claim_text(div166_nodes, "Norway");
      div166_nodes.forEach(detach_dev);
      t347 = claim_space(div245_nodes);
      div167 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div167_nodes = children(div167);
      i165 = claim_element(div167_nodes, "I", {
        class: true
      });
      children(i165).forEach(detach_dev);
      t348 = claim_text(div167_nodes, "Oman");
      div167_nodes.forEach(detach_dev);
      t349 = claim_space(div245_nodes);
      div168 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div168_nodes = children(div168);
      i166 = claim_element(div168_nodes, "I", {
        class: true
      });
      children(i166).forEach(detach_dev);
      t350 = claim_text(div168_nodes, "Pakistan");
      div168_nodes.forEach(detach_dev);
      t351 = claim_space(div245_nodes);
      div169 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div169_nodes = children(div169);
      i167 = claim_element(div169_nodes, "I", {
        class: true
      });
      children(i167).forEach(detach_dev);
      t352 = claim_text(div169_nodes, "Palau");
      div169_nodes.forEach(detach_dev);
      t353 = claim_space(div245_nodes);
      div170 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div170_nodes = children(div170);
      i168 = claim_element(div170_nodes, "I", {
        class: true
      });
      children(i168).forEach(detach_dev);
      t354 = claim_text(div170_nodes, "Palestine");
      div170_nodes.forEach(detach_dev);
      t355 = claim_space(div245_nodes);
      div171 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div171_nodes = children(div171);
      i169 = claim_element(div171_nodes, "I", {
        class: true
      });
      children(i169).forEach(detach_dev);
      t356 = claim_text(div171_nodes, "Panama");
      div171_nodes.forEach(detach_dev);
      t357 = claim_space(div245_nodes);
      div172 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div172_nodes = children(div172);
      i170 = claim_element(div172_nodes, "I", {
        class: true
      });
      children(i170).forEach(detach_dev);
      t358 = claim_text(div172_nodes, "Paraguay");
      div172_nodes.forEach(detach_dev);
      t359 = claim_space(div245_nodes);
      div173 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div173_nodes = children(div173);
      i171 = claim_element(div173_nodes, "I", {
        class: true
      });
      children(i171).forEach(detach_dev);
      t360 = claim_text(div173_nodes, "Peru");
      div173_nodes.forEach(detach_dev);
      t361 = claim_space(div245_nodes);
      div174 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div174_nodes = children(div174);
      i172 = claim_element(div174_nodes, "I", {
        class: true
      });
      children(i172).forEach(detach_dev);
      t362 = claim_text(div174_nodes, "Philippines");
      div174_nodes.forEach(detach_dev);
      t363 = claim_space(div245_nodes);
      div175 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div175_nodes = children(div175);
      i173 = claim_element(div175_nodes, "I", {
        class: true
      });
      children(i173).forEach(detach_dev);
      t364 = claim_text(div175_nodes, "Pitcairn Islands");
      div175_nodes.forEach(detach_dev);
      t365 = claim_space(div245_nodes);
      div176 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div176_nodes = children(div176);
      i174 = claim_element(div176_nodes, "I", {
        class: true
      });
      children(i174).forEach(detach_dev);
      t366 = claim_text(div176_nodes, "Poland");
      div176_nodes.forEach(detach_dev);
      t367 = claim_space(div245_nodes);
      div177 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div177_nodes = children(div177);
      i175 = claim_element(div177_nodes, "I", {
        class: true
      });
      children(i175).forEach(detach_dev);
      t368 = claim_text(div177_nodes, "Portugal");
      div177_nodes.forEach(detach_dev);
      t369 = claim_space(div245_nodes);
      div178 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div178_nodes = children(div178);
      i176 = claim_element(div178_nodes, "I", {
        class: true
      });
      children(i176).forEach(detach_dev);
      t370 = claim_text(div178_nodes, "Puerto Rico");
      div178_nodes.forEach(detach_dev);
      t371 = claim_space(div245_nodes);
      div179 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div179_nodes = children(div179);
      i177 = claim_element(div179_nodes, "I", {
        class: true
      });
      children(i177).forEach(detach_dev);
      t372 = claim_text(div179_nodes, "Qatar");
      div179_nodes.forEach(detach_dev);
      t373 = claim_space(div245_nodes);
      div180 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div180_nodes = children(div180);
      i178 = claim_element(div180_nodes, "I", {
        class: true
      });
      children(i178).forEach(detach_dev);
      t374 = claim_text(div180_nodes, "Reunion");
      div180_nodes.forEach(detach_dev);
      t375 = claim_space(div245_nodes);
      div181 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div181_nodes = children(div181);
      i179 = claim_element(div181_nodes, "I", {
        class: true
      });
      children(i179).forEach(detach_dev);
      t376 = claim_text(div181_nodes, "Romania");
      div181_nodes.forEach(detach_dev);
      t377 = claim_space(div245_nodes);
      div182 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div182_nodes = children(div182);
      i180 = claim_element(div182_nodes, "I", {
        class: true
      });
      children(i180).forEach(detach_dev);
      t378 = claim_text(div182_nodes, "Russia");
      div182_nodes.forEach(detach_dev);
      t379 = claim_space(div245_nodes);
      div183 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div183_nodes = children(div183);
      i181 = claim_element(div183_nodes, "I", {
        class: true
      });
      children(i181).forEach(detach_dev);
      t380 = claim_text(div183_nodes, "Rwanda");
      div183_nodes.forEach(detach_dev);
      t381 = claim_space(div245_nodes);
      div184 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div184_nodes = children(div184);
      i182 = claim_element(div184_nodes, "I", {
        class: true
      });
      children(i182).forEach(detach_dev);
      t382 = claim_text(div184_nodes, "Saint Helena");
      div184_nodes.forEach(detach_dev);
      t383 = claim_space(div245_nodes);
      div185 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div185_nodes = children(div185);
      i183 = claim_element(div185_nodes, "I", {
        class: true
      });
      children(i183).forEach(detach_dev);
      t384 = claim_text(div185_nodes, "Saint Kitts and Nevis");
      div185_nodes.forEach(detach_dev);
      t385 = claim_space(div245_nodes);
      div186 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div186_nodes = children(div186);
      i184 = claim_element(div186_nodes, "I", {
        class: true
      });
      children(i184).forEach(detach_dev);
      t386 = claim_text(div186_nodes, "Saint Lucia");
      div186_nodes.forEach(detach_dev);
      t387 = claim_space(div245_nodes);
      div187 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div187_nodes = children(div187);
      i185 = claim_element(div187_nodes, "I", {
        class: true
      });
      children(i185).forEach(detach_dev);
      t388 = claim_text(div187_nodes, "Saint Pierre");
      div187_nodes.forEach(detach_dev);
      t389 = claim_space(div245_nodes);
      div188 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div188_nodes = children(div188);
      i186 = claim_element(div188_nodes, "I", {
        class: true
      });
      children(i186).forEach(detach_dev);
      t390 = claim_text(div188_nodes, "Saint Vincent");
      div188_nodes.forEach(detach_dev);
      t391 = claim_space(div245_nodes);
      div189 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div189_nodes = children(div189);
      i187 = claim_element(div189_nodes, "I", {
        class: true
      });
      children(i187).forEach(detach_dev);
      t392 = claim_text(div189_nodes, "Samoa");
      div189_nodes.forEach(detach_dev);
      t393 = claim_space(div245_nodes);
      div190 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div190_nodes = children(div190);
      i188 = claim_element(div190_nodes, "I", {
        class: true
      });
      children(i188).forEach(detach_dev);
      t394 = claim_text(div190_nodes, "San Marino");
      div190_nodes.forEach(detach_dev);
      t395 = claim_space(div245_nodes);
      div191 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div191_nodes = children(div191);
      i189 = claim_element(div191_nodes, "I", {
        class: true
      });
      children(i189).forEach(detach_dev);
      t396 = claim_text(div191_nodes, "Sandwich Islands");
      div191_nodes.forEach(detach_dev);
      t397 = claim_space(div245_nodes);
      div192 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div192_nodes = children(div192);
      i190 = claim_element(div192_nodes, "I", {
        class: true
      });
      children(i190).forEach(detach_dev);
      t398 = claim_text(div192_nodes, "Sao Tome");
      div192_nodes.forEach(detach_dev);
      t399 = claim_space(div245_nodes);
      div193 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div193_nodes = children(div193);
      i191 = claim_element(div193_nodes, "I", {
        class: true
      });
      children(i191).forEach(detach_dev);
      t400 = claim_text(div193_nodes, "Saudi Arabia");
      div193_nodes.forEach(detach_dev);
      t401 = claim_space(div245_nodes);
      div194 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div194_nodes = children(div194);
      i192 = claim_element(div194_nodes, "I", {
        class: true
      });
      children(i192).forEach(detach_dev);
      t402 = claim_text(div194_nodes, "Senegal");
      div194_nodes.forEach(detach_dev);
      t403 = claim_space(div245_nodes);
      div195 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div195_nodes = children(div195);
      i193 = claim_element(div195_nodes, "I", {
        class: true
      });
      children(i193).forEach(detach_dev);
      t404 = claim_text(div195_nodes, "Serbia");
      div195_nodes.forEach(detach_dev);
      t405 = claim_space(div245_nodes);
      div196 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div196_nodes = children(div196);
      i194 = claim_element(div196_nodes, "I", {
        class: true
      });
      children(i194).forEach(detach_dev);
      t406 = claim_text(div196_nodes, "Serbia");
      div196_nodes.forEach(detach_dev);
      t407 = claim_space(div245_nodes);
      div197 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div197_nodes = children(div197);
      i195 = claim_element(div197_nodes, "I", {
        class: true
      });
      children(i195).forEach(detach_dev);
      t408 = claim_text(div197_nodes, "Seychelles");
      div197_nodes.forEach(detach_dev);
      t409 = claim_space(div245_nodes);
      div198 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div198_nodes = children(div198);
      i196 = claim_element(div198_nodes, "I", {
        class: true
      });
      children(i196).forEach(detach_dev);
      t410 = claim_text(div198_nodes, "Sierra Leone");
      div198_nodes.forEach(detach_dev);
      t411 = claim_space(div245_nodes);
      div199 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div199_nodes = children(div199);
      i197 = claim_element(div199_nodes, "I", {
        class: true
      });
      children(i197).forEach(detach_dev);
      t412 = claim_text(div199_nodes, "Singapore");
      div199_nodes.forEach(detach_dev);
      t413 = claim_space(div245_nodes);
      div200 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div200_nodes = children(div200);
      i198 = claim_element(div200_nodes, "I", {
        class: true
      });
      children(i198).forEach(detach_dev);
      t414 = claim_text(div200_nodes, "Slovakia");
      div200_nodes.forEach(detach_dev);
      t415 = claim_space(div245_nodes);
      div201 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div201_nodes = children(div201);
      i199 = claim_element(div201_nodes, "I", {
        class: true
      });
      children(i199).forEach(detach_dev);
      t416 = claim_text(div201_nodes, "Slovenia");
      div201_nodes.forEach(detach_dev);
      t417 = claim_space(div245_nodes);
      div202 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div202_nodes = children(div202);
      i200 = claim_element(div202_nodes, "I", {
        class: true
      });
      children(i200).forEach(detach_dev);
      t418 = claim_text(div202_nodes, "Solomon Islands");
      div202_nodes.forEach(detach_dev);
      t419 = claim_space(div245_nodes);
      div203 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div203_nodes = children(div203);
      i201 = claim_element(div203_nodes, "I", {
        class: true
      });
      children(i201).forEach(detach_dev);
      t420 = claim_text(div203_nodes, "Somalia");
      div203_nodes.forEach(detach_dev);
      t421 = claim_space(div245_nodes);
      div204 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div204_nodes = children(div204);
      i202 = claim_element(div204_nodes, "I", {
        class: true
      });
      children(i202).forEach(detach_dev);
      t422 = claim_text(div204_nodes, "South Africa");
      div204_nodes.forEach(detach_dev);
      t423 = claim_space(div245_nodes);
      div205 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div205_nodes = children(div205);
      i203 = claim_element(div205_nodes, "I", {
        class: true
      });
      children(i203).forEach(detach_dev);
      t424 = claim_text(div205_nodes, "South Korea");
      div205_nodes.forEach(detach_dev);
      t425 = claim_space(div245_nodes);
      div206 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div206_nodes = children(div206);
      i204 = claim_element(div206_nodes, "I", {
        class: true
      });
      children(i204).forEach(detach_dev);
      t426 = claim_text(div206_nodes, "Spain");
      div206_nodes.forEach(detach_dev);
      t427 = claim_space(div245_nodes);
      div207 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div207_nodes = children(div207);
      i205 = claim_element(div207_nodes, "I", {
        class: true
      });
      children(i205).forEach(detach_dev);
      t428 = claim_text(div207_nodes, "Sri Lanka");
      div207_nodes.forEach(detach_dev);
      t429 = claim_space(div245_nodes);
      div208 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div208_nodes = children(div208);
      i206 = claim_element(div208_nodes, "I", {
        class: true
      });
      children(i206).forEach(detach_dev);
      t430 = claim_text(div208_nodes, "Sudan");
      div208_nodes.forEach(detach_dev);
      t431 = claim_space(div245_nodes);
      div209 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div209_nodes = children(div209);
      i207 = claim_element(div209_nodes, "I", {
        class: true
      });
      children(i207).forEach(detach_dev);
      t432 = claim_text(div209_nodes, "Suriname");
      div209_nodes.forEach(detach_dev);
      t433 = claim_space(div245_nodes);
      div210 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div210_nodes = children(div210);
      i208 = claim_element(div210_nodes, "I", {
        class: true
      });
      children(i208).forEach(detach_dev);
      t434 = claim_text(div210_nodes, "Svalbard");
      div210_nodes.forEach(detach_dev);
      t435 = claim_space(div245_nodes);
      div211 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div211_nodes = children(div211);
      i209 = claim_element(div211_nodes, "I", {
        class: true
      });
      children(i209).forEach(detach_dev);
      t436 = claim_text(div211_nodes, "Swaziland");
      div211_nodes.forEach(detach_dev);
      t437 = claim_space(div245_nodes);
      div212 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div212_nodes = children(div212);
      i210 = claim_element(div212_nodes, "I", {
        class: true
      });
      children(i210).forEach(detach_dev);
      t438 = claim_text(div212_nodes, "Sweden");
      div212_nodes.forEach(detach_dev);
      t439 = claim_space(div245_nodes);
      div213 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div213_nodes = children(div213);
      i211 = claim_element(div213_nodes, "I", {
        class: true
      });
      children(i211).forEach(detach_dev);
      t440 = claim_text(div213_nodes, "Switzerland");
      div213_nodes.forEach(detach_dev);
      t441 = claim_space(div245_nodes);
      div214 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div214_nodes = children(div214);
      i212 = claim_element(div214_nodes, "I", {
        class: true
      });
      children(i212).forEach(detach_dev);
      t442 = claim_text(div214_nodes, "Syria");
      div214_nodes.forEach(detach_dev);
      t443 = claim_space(div245_nodes);
      div215 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div215_nodes = children(div215);
      i213 = claim_element(div215_nodes, "I", {
        class: true
      });
      children(i213).forEach(detach_dev);
      t444 = claim_text(div215_nodes, "Taiwan");
      div215_nodes.forEach(detach_dev);
      t445 = claim_space(div245_nodes);
      div216 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div216_nodes = children(div216);
      i214 = claim_element(div216_nodes, "I", {
        class: true
      });
      children(i214).forEach(detach_dev);
      t446 = claim_text(div216_nodes, "Tajikistan");
      div216_nodes.forEach(detach_dev);
      t447 = claim_space(div245_nodes);
      div217 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div217_nodes = children(div217);
      i215 = claim_element(div217_nodes, "I", {
        class: true
      });
      children(i215).forEach(detach_dev);
      t448 = claim_text(div217_nodes, "Tanzania");
      div217_nodes.forEach(detach_dev);
      t449 = claim_space(div245_nodes);
      div218 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div218_nodes = children(div218);
      i216 = claim_element(div218_nodes, "I", {
        class: true
      });
      children(i216).forEach(detach_dev);
      t450 = claim_text(div218_nodes, "Thailand");
      div218_nodes.forEach(detach_dev);
      t451 = claim_space(div245_nodes);
      div219 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div219_nodes = children(div219);
      i217 = claim_element(div219_nodes, "I", {
        class: true
      });
      children(i217).forEach(detach_dev);
      t452 = claim_text(div219_nodes, "Timorleste");
      div219_nodes.forEach(detach_dev);
      t453 = claim_space(div245_nodes);
      div220 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div220_nodes = children(div220);
      i218 = claim_element(div220_nodes, "I", {
        class: true
      });
      children(i218).forEach(detach_dev);
      t454 = claim_text(div220_nodes, "Togo");
      div220_nodes.forEach(detach_dev);
      t455 = claim_space(div245_nodes);
      div221 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div221_nodes = children(div221);
      i219 = claim_element(div221_nodes, "I", {
        class: true
      });
      children(i219).forEach(detach_dev);
      t456 = claim_text(div221_nodes, "Tokelau");
      div221_nodes.forEach(detach_dev);
      t457 = claim_space(div245_nodes);
      div222 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div222_nodes = children(div222);
      i220 = claim_element(div222_nodes, "I", {
        class: true
      });
      children(i220).forEach(detach_dev);
      t458 = claim_text(div222_nodes, "Tonga");
      div222_nodes.forEach(detach_dev);
      t459 = claim_space(div245_nodes);
      div223 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div223_nodes = children(div223);
      i221 = claim_element(div223_nodes, "I", {
        class: true
      });
      children(i221).forEach(detach_dev);
      t460 = claim_text(div223_nodes, "Trinidad");
      div223_nodes.forEach(detach_dev);
      t461 = claim_space(div245_nodes);
      div224 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div224_nodes = children(div224);
      i222 = claim_element(div224_nodes, "I", {
        class: true
      });
      children(i222).forEach(detach_dev);
      t462 = claim_text(div224_nodes, "Tunisia");
      div224_nodes.forEach(detach_dev);
      t463 = claim_space(div245_nodes);
      div225 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div225_nodes = children(div225);
      i223 = claim_element(div225_nodes, "I", {
        class: true
      });
      children(i223).forEach(detach_dev);
      t464 = claim_text(div225_nodes, "Turkey");
      div225_nodes.forEach(detach_dev);
      t465 = claim_space(div245_nodes);
      div226 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div226_nodes = children(div226);
      i224 = claim_element(div226_nodes, "I", {
        class: true
      });
      children(i224).forEach(detach_dev);
      t466 = claim_text(div226_nodes, "Turkmenistan");
      div226_nodes.forEach(detach_dev);
      t467 = claim_space(div245_nodes);
      div227 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div227_nodes = children(div227);
      i225 = claim_element(div227_nodes, "I", {
        class: true
      });
      children(i225).forEach(detach_dev);
      t468 = claim_text(div227_nodes, "Tuvalu");
      div227_nodes.forEach(detach_dev);
      t469 = claim_space(div245_nodes);
      div228 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div228_nodes = children(div228);
      i226 = claim_element(div228_nodes, "I", {
        class: true
      });
      children(i226).forEach(detach_dev);
      t470 = claim_text(div228_nodes, "Uganda");
      div228_nodes.forEach(detach_dev);
      t471 = claim_space(div245_nodes);
      div229 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div229_nodes = children(div229);
      i227 = claim_element(div229_nodes, "I", {
        class: true
      });
      children(i227).forEach(detach_dev);
      t472 = claim_text(div229_nodes, "Ukraine");
      div229_nodes.forEach(detach_dev);
      t473 = claim_space(div245_nodes);
      div230 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div230_nodes = children(div230);
      i228 = claim_element(div230_nodes, "I", {
        class: true
      });
      children(i228).forEach(detach_dev);
      t474 = claim_text(div230_nodes, "United Arab Emirates");
      div230_nodes.forEach(detach_dev);
      t475 = claim_space(div245_nodes);
      div231 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div231_nodes = children(div231);
      i229 = claim_element(div231_nodes, "I", {
        class: true
      });
      children(i229).forEach(detach_dev);
      t476 = claim_text(div231_nodes, "United States");
      div231_nodes.forEach(detach_dev);
      t477 = claim_space(div245_nodes);
      div232 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div232_nodes = children(div232);
      i230 = claim_element(div232_nodes, "I", {
        class: true
      });
      children(i230).forEach(detach_dev);
      t478 = claim_text(div232_nodes, "Uruguay");
      div232_nodes.forEach(detach_dev);
      t479 = claim_space(div245_nodes);
      div233 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div233_nodes = children(div233);
      i231 = claim_element(div233_nodes, "I", {
        class: true
      });
      children(i231).forEach(detach_dev);
      t480 = claim_text(div233_nodes, "Us Minor Islands");
      div233_nodes.forEach(detach_dev);
      t481 = claim_space(div245_nodes);
      div234 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div234_nodes = children(div234);
      i232 = claim_element(div234_nodes, "I", {
        class: true
      });
      children(i232).forEach(detach_dev);
      t482 = claim_text(div234_nodes, "Us Virgin Islands");
      div234_nodes.forEach(detach_dev);
      t483 = claim_space(div245_nodes);
      div235 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div235_nodes = children(div235);
      i233 = claim_element(div235_nodes, "I", {
        class: true
      });
      children(i233).forEach(detach_dev);
      t484 = claim_text(div235_nodes, "Uzbekistan");
      div235_nodes.forEach(detach_dev);
      t485 = claim_space(div245_nodes);
      div236 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div236_nodes = children(div236);
      i234 = claim_element(div236_nodes, "I", {
        class: true
      });
      children(i234).forEach(detach_dev);
      t486 = claim_text(div236_nodes, "Vanuatu");
      div236_nodes.forEach(detach_dev);
      t487 = claim_space(div245_nodes);
      div237 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div237_nodes = children(div237);
      i235 = claim_element(div237_nodes, "I", {
        class: true
      });
      children(i235).forEach(detach_dev);
      t488 = claim_text(div237_nodes, "Vatican City");
      div237_nodes.forEach(detach_dev);
      t489 = claim_space(div245_nodes);
      div238 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div238_nodes = children(div238);
      i236 = claim_element(div238_nodes, "I", {
        class: true
      });
      children(i236).forEach(detach_dev);
      t490 = claim_text(div238_nodes, "Venezuela");
      div238_nodes.forEach(detach_dev);
      t491 = claim_space(div245_nodes);
      div239 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div239_nodes = children(div239);
      i237 = claim_element(div239_nodes, "I", {
        class: true
      });
      children(i237).forEach(detach_dev);
      t492 = claim_text(div239_nodes, "Vietnam");
      div239_nodes.forEach(detach_dev);
      t493 = claim_space(div245_nodes);
      div240 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div240_nodes = children(div240);
      i238 = claim_element(div240_nodes, "I", {
        class: true
      });
      children(i238).forEach(detach_dev);
      t494 = claim_text(div240_nodes, "Wallis and Futuna");
      div240_nodes.forEach(detach_dev);
      t495 = claim_space(div245_nodes);
      div241 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div241_nodes = children(div241);
      i239 = claim_element(div241_nodes, "I", {
        class: true
      });
      children(i239).forEach(detach_dev);
      t496 = claim_text(div241_nodes, "Western Sahara");
      div241_nodes.forEach(detach_dev);
      t497 = claim_space(div245_nodes);
      div242 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div242_nodes = children(div242);
      i240 = claim_element(div242_nodes, "I", {
        class: true
      });
      children(i240).forEach(detach_dev);
      t498 = claim_text(div242_nodes, "Yemen");
      div242_nodes.forEach(detach_dev);
      t499 = claim_space(div245_nodes);
      div243 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div243_nodes = children(div243);
      i241 = claim_element(div243_nodes, "I", {
        class: true
      });
      children(i241).forEach(detach_dev);
      t500 = claim_text(div243_nodes, "Zambia");
      div243_nodes.forEach(detach_dev);
      t501 = claim_space(div245_nodes);
      div244 = claim_element(div245_nodes, "DIV", {
        class: true,
        "data-value": true
      });
      var div244_nodes = children(div244);
      i242 = claim_element(div244_nodes, "I", {
        class: true
      });
      children(i242).forEach(detach_dev);
      t502 = claim_text(div244_nodes, "Zimbabwe");
      div244_nodes.forEach(detach_dev);
      div245_nodes.forEach(detach_dev);
      div246_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      attr_dev(div0, "class", "ui header red my svelte-1651u6z");
      add_location(div0, file, 24, 0, 318);
      attr_dev(div1, "class", "ui button centered");
      add_location(div1, file, 25, 0, 370);
      attr_dev(img0, "class", "ui image small");
      attr_dev(img0, "alt", "Borat");
      if (img0.src !== (img0_src_value = "great-success.png")) attr_dev(img0, "src", img0_src_value);
      add_location(img0, file, 28, 1, 449);
      add_location(figcaption0, file, 29, 1, 515);
      add_location(figure0, file, 27, 0, 439);
      attr_dev(img1, "class", "ui image large");
      attr_dev(img1, "alt", "Tech");
      if (img1.src !== (img1_src_value = "./images/about2.png")) attr_dev(img1, "src", img1_src_value);
      add_location(img1, file, 32, 1, 571);
      add_location(figcaption1, file, 33, 1, 638);
      add_location(figure1, file, 31, 0, 561);
      attr_dev(img2, "class", "ui image large");
      attr_dev(img2, "alt", "Tech");
      if (img2.src !== (img2_src_value = "./images/about3.png")) attr_dev(img2, "src", img2_src_value);
      add_location(img2, file, 36, 1, 689);
      add_location(figcaption2, file, 37, 1, 756);
      add_location(figure2, file, 35, 0, 679);
      add_location(strong, file, 40, 3, 801);
      add_location(p, file, 40, 0, 798);
      attr_dev(input, "type", "hidden");
      attr_dev(input, "name", "country");
      add_location(input, file, 44, 1, 949);
      attr_dev(i0, "class", "dropdown icon");
      add_location(i0, file, 45, 1, 989);
      attr_dev(div2, "class", "default text");
      add_location(div2, file, 46, 1, 1020);
      attr_dev(i1, "class", "af flag");
      add_location(i1, file, 48, 36, 1123);
      attr_dev(div3, "class", "item");
      attr_dev(div3, "data-value", "af");
      add_location(div3, file, 48, 2, 1089);
      attr_dev(i2, "class", "ax flag");
      add_location(i2, file, 49, 36, 1200);
      attr_dev(div4, "class", "item");
      attr_dev(div4, "data-value", "ax");
      add_location(div4, file, 49, 2, 1166);
      attr_dev(i3, "class", "al flag");
      add_location(i3, file, 50, 36, 1279);
      attr_dev(div5, "class", "item");
      attr_dev(div5, "data-value", "al");
      add_location(div5, file, 50, 2, 1245);
      attr_dev(i4, "class", "dz flag");
      add_location(i4, file, 51, 36, 1352);
      attr_dev(div6, "class", "item");
      attr_dev(div6, "data-value", "dz");
      add_location(div6, file, 51, 2, 1318);
      attr_dev(i5, "class", "as flag");
      add_location(i5, file, 52, 36, 1425);
      attr_dev(div7, "class", "item");
      attr_dev(div7, "data-value", "as");
      add_location(div7, file, 52, 2, 1391);
      attr_dev(i6, "class", "ad flag");
      add_location(i6, file, 53, 36, 1505);
      attr_dev(div8, "class", "item");
      attr_dev(div8, "data-value", "ad");
      add_location(div8, file, 53, 2, 1471);
      attr_dev(i7, "class", "ao flag");
      add_location(i7, file, 54, 36, 1578);
      attr_dev(div9, "class", "item");
      attr_dev(div9, "data-value", "ao");
      add_location(div9, file, 54, 2, 1544);
      attr_dev(i8, "class", "ai flag");
      add_location(i8, file, 55, 36, 1650);
      attr_dev(div10, "class", "item");
      attr_dev(div10, "data-value", "ai");
      add_location(div10, file, 55, 2, 1616);
      attr_dev(i9, "class", "ag flag");
      add_location(i9, file, 56, 36, 1724);
      attr_dev(div11, "class", "item");
      attr_dev(div11, "data-value", "ag");
      add_location(div11, file, 56, 2, 1690);
      attr_dev(i10, "class", "ar flag");
      add_location(i10, file, 57, 36, 1797);
      attr_dev(div12, "class", "item");
      attr_dev(div12, "data-value", "ar");
      add_location(div12, file, 57, 2, 1763);
      attr_dev(i11, "class", "am flag");
      add_location(i11, file, 58, 36, 1872);
      attr_dev(div13, "class", "item");
      attr_dev(div13, "data-value", "am");
      add_location(div13, file, 58, 2, 1838);
      attr_dev(i12, "class", "aw flag");
      add_location(i12, file, 59, 36, 1945);
      attr_dev(div14, "class", "item");
      attr_dev(div14, "data-value", "aw");
      add_location(div14, file, 59, 2, 1911);
      attr_dev(i13, "class", "au flag");
      add_location(i13, file, 60, 36, 2016);
      attr_dev(div15, "class", "item");
      attr_dev(div15, "data-value", "au");
      add_location(div15, file, 60, 2, 1982);
      attr_dev(i14, "class", "at flag");
      add_location(i14, file, 61, 36, 2091);
      attr_dev(div16, "class", "item");
      attr_dev(div16, "data-value", "at");
      add_location(div16, file, 61, 2, 2057);
      attr_dev(i15, "class", "az flag");
      add_location(i15, file, 62, 36, 2164);
      attr_dev(div17, "class", "item");
      attr_dev(div17, "data-value", "az");
      add_location(div17, file, 62, 2, 2130);
      attr_dev(i16, "class", "bs flag");
      add_location(i16, file, 63, 36, 2240);
      attr_dev(div18, "class", "item");
      attr_dev(div18, "data-value", "bs");
      add_location(div18, file, 63, 2, 2206);
      attr_dev(i17, "class", "bh flag");
      add_location(i17, file, 64, 36, 2313);
      attr_dev(div19, "class", "item");
      attr_dev(div19, "data-value", "bh");
      add_location(div19, file, 64, 2, 2279);
      attr_dev(i18, "class", "bd flag");
      add_location(i18, file, 65, 36, 2386);
      attr_dev(div20, "class", "item");
      attr_dev(div20, "data-value", "bd");
      add_location(div20, file, 65, 2, 2352);
      attr_dev(i19, "class", "bb flag");
      add_location(i19, file, 66, 36, 2462);
      attr_dev(div21, "class", "item");
      attr_dev(div21, "data-value", "bb");
      add_location(div21, file, 66, 2, 2428);
      attr_dev(i20, "class", "by flag");
      add_location(i20, file, 67, 36, 2536);
      attr_dev(div22, "class", "item");
      attr_dev(div22, "data-value", "by");
      add_location(div22, file, 67, 2, 2502);
      attr_dev(i21, "class", "be flag");
      add_location(i21, file, 68, 36, 2609);
      attr_dev(div23, "class", "item");
      attr_dev(div23, "data-value", "be");
      add_location(div23, file, 68, 2, 2575);
      attr_dev(i22, "class", "bz flag");
      add_location(i22, file, 69, 36, 2682);
      attr_dev(div24, "class", "item");
      attr_dev(div24, "data-value", "bz");
      add_location(div24, file, 69, 2, 2648);
      attr_dev(i23, "class", "bj flag");
      add_location(i23, file, 70, 36, 2754);
      attr_dev(div25, "class", "item");
      attr_dev(div25, "data-value", "bj");
      add_location(div25, file, 70, 2, 2720);
      attr_dev(i24, "class", "bm flag");
      add_location(i24, file, 71, 36, 2825);
      attr_dev(div26, "class", "item");
      attr_dev(div26, "data-value", "bm");
      add_location(div26, file, 71, 2, 2791);
      attr_dev(i25, "class", "bt flag");
      add_location(i25, file, 72, 36, 2898);
      attr_dev(div27, "class", "item");
      attr_dev(div27, "data-value", "bt");
      add_location(div27, file, 72, 2, 2864);
      attr_dev(i26, "class", "bo flag");
      add_location(i26, file, 73, 36, 2970);
      attr_dev(div28, "class", "item");
      attr_dev(div28, "data-value", "bo");
      add_location(div28, file, 73, 2, 2936);
      attr_dev(i27, "class", "ba flag");
      add_location(i27, file, 74, 36, 3043);
      attr_dev(div29, "class", "item");
      attr_dev(div29, "data-value", "ba");
      add_location(div29, file, 74, 2, 3009);
      attr_dev(i28, "class", "bw flag");
      add_location(i28, file, 75, 36, 3115);
      attr_dev(div30, "class", "item");
      attr_dev(div30, "data-value", "bw");
      add_location(div30, file, 75, 2, 3081);
      attr_dev(i29, "class", "bv flag");
      add_location(i29, file, 76, 36, 3189);
      attr_dev(div31, "class", "item");
      attr_dev(div31, "data-value", "bv");
      add_location(div31, file, 76, 2, 3155);
      attr_dev(i30, "class", "br flag");
      add_location(i30, file, 77, 36, 3268);
      attr_dev(div32, "class", "item");
      attr_dev(div32, "data-value", "br");
      add_location(div32, file, 77, 2, 3234);
      attr_dev(i31, "class", "vg flag");
      add_location(i31, file, 78, 36, 3340);
      attr_dev(div33, "class", "item");
      attr_dev(div33, "data-value", "vg");
      add_location(div33, file, 78, 2, 3306);
      attr_dev(i32, "class", "bn flag");
      add_location(i32, file, 79, 36, 3428);
      attr_dev(div34, "class", "item");
      attr_dev(div34, "data-value", "bn");
      add_location(div34, file, 79, 2, 3394);
      attr_dev(i33, "class", "bg flag");
      add_location(i33, file, 80, 36, 3500);
      attr_dev(div35, "class", "item");
      attr_dev(div35, "data-value", "bg");
      add_location(div35, file, 80, 2, 3466);
      attr_dev(i34, "class", "bf flag");
      add_location(i34, file, 81, 36, 3574);
      attr_dev(div36, "class", "item");
      attr_dev(div36, "data-value", "bf");
      add_location(div36, file, 81, 2, 3540);
      attr_dev(i35, "class", "mm flag");
      add_location(i35, file, 82, 36, 3652);
      attr_dev(div37, "class", "item");
      attr_dev(div37, "data-value", "mm");
      add_location(div37, file, 82, 2, 3618);
      attr_dev(i36, "class", "bi flag");
      add_location(i36, file, 83, 36, 3723);
      attr_dev(div38, "class", "item");
      attr_dev(div38, "data-value", "bi");
      add_location(div38, file, 83, 2, 3689);
      attr_dev(i37, "class", "tc flag");
      add_location(i37, file, 84, 36, 3796);
      attr_dev(div39, "class", "item");
      attr_dev(div39, "data-value", "tc");
      add_location(div39, file, 84, 2, 3762);
      attr_dev(i38, "class", "kh flag");
      add_location(i38, file, 85, 36, 3876);
      attr_dev(div40, "class", "item");
      attr_dev(div40, "data-value", "kh");
      add_location(div40, file, 85, 2, 3842);
      attr_dev(i39, "class", "cm flag");
      add_location(i39, file, 86, 36, 3950);
      attr_dev(div41, "class", "item");
      attr_dev(div41, "data-value", "cm");
      add_location(div41, file, 86, 2, 3916);
      attr_dev(i40, "class", "ca flag");
      add_location(i40, file, 87, 36, 4024);
      attr_dev(div42, "class", "item");
      attr_dev(div42, "data-value", "ca");
      add_location(div42, file, 87, 2, 3990);
      attr_dev(i41, "class", "cv flag");
      add_location(i41, file, 88, 36, 4096);
      attr_dev(div43, "class", "item");
      attr_dev(div43, "data-value", "cv");
      add_location(div43, file, 88, 2, 4062);
      attr_dev(i42, "class", "ky flag");
      add_location(i42, file, 89, 36, 4172);
      attr_dev(div44, "class", "item");
      attr_dev(div44, "data-value", "ky");
      add_location(div44, file, 89, 2, 4138);
      attr_dev(i43, "class", "cf flag");
      add_location(i43, file, 90, 36, 4252);
      attr_dev(div45, "class", "item");
      attr_dev(div45, "data-value", "cf");
      add_location(div45, file, 90, 2, 4218);
      attr_dev(i44, "class", "td flag");
      add_location(i44, file, 91, 36, 4342);
      attr_dev(div46, "class", "item");
      attr_dev(div46, "data-value", "td");
      add_location(div46, file, 91, 2, 4308);
      attr_dev(i45, "class", "cl flag");
      add_location(i45, file, 92, 36, 4412);
      attr_dev(div47, "class", "item");
      attr_dev(div47, "data-value", "cl");
      add_location(div47, file, 92, 2, 4378);
      attr_dev(i46, "class", "cn flag");
      add_location(i46, file, 93, 36, 4483);
      attr_dev(div48, "class", "item");
      attr_dev(div48, "data-value", "cn");
      add_location(div48, file, 93, 2, 4449);
      attr_dev(i47, "class", "cx flag");
      add_location(i47, file, 94, 36, 4554);
      attr_dev(div49, "class", "item");
      attr_dev(div49, "data-value", "cx");
      add_location(div49, file, 94, 2, 4520);
      attr_dev(i48, "class", "cc flag");
      add_location(i48, file, 95, 36, 4636);
      attr_dev(div50, "class", "item");
      attr_dev(div50, "data-value", "cc");
      add_location(div50, file, 95, 2, 4602);
      attr_dev(i49, "class", "co flag");
      add_location(i49, file, 96, 36, 4715);
      attr_dev(div51, "class", "item");
      attr_dev(div51, "data-value", "co");
      add_location(div51, file, 96, 2, 4681);
      attr_dev(i50, "class", "km flag");
      add_location(i50, file, 97, 36, 4789);
      attr_dev(div52, "class", "item");
      attr_dev(div52, "data-value", "km");
      add_location(div52, file, 97, 2, 4755);
      attr_dev(i51, "class", "cg flag");
      add_location(i51, file, 98, 36, 4862);
      attr_dev(div53, "class", "item");
      attr_dev(div53, "data-value", "cg");
      add_location(div53, file, 98, 2, 4828);
      attr_dev(i52, "class", "cd flag");
      add_location(i52, file, 99, 36, 4945);
      attr_dev(div54, "class", "item");
      attr_dev(div54, "data-value", "cd");
      add_location(div54, file, 99, 2, 4911);
      attr_dev(i53, "class", "ck flag");
      add_location(i53, file, 100, 36, 5016);
      attr_dev(div55, "class", "item");
      attr_dev(div55, "data-value", "ck");
      add_location(div55, file, 100, 2, 4982);
      attr_dev(i54, "class", "cr flag");
      add_location(i54, file, 101, 36, 5094);
      attr_dev(div56, "class", "item");
      attr_dev(div56, "data-value", "cr");
      add_location(div56, file, 101, 2, 5060);
      attr_dev(i55, "class", "ci flag");
      add_location(i55, file, 102, 36, 5170);
      attr_dev(div57, "class", "item");
      attr_dev(div57, "data-value", "ci");
      add_location(div57, file, 102, 2, 5136);
      attr_dev(i56, "class", "hr flag");
      add_location(i56, file, 103, 36, 5248);
      attr_dev(div58, "class", "item");
      attr_dev(div58, "data-value", "hr");
      add_location(div58, file, 103, 2, 5214);
      attr_dev(i57, "class", "cu flag");
      add_location(i57, file, 104, 36, 5321);
      attr_dev(div59, "class", "item");
      attr_dev(div59, "data-value", "cu");
      add_location(div59, file, 104, 2, 5287);
      attr_dev(i58, "class", "cy flag");
      add_location(i58, file, 105, 36, 5391);
      attr_dev(div60, "class", "item");
      attr_dev(div60, "data-value", "cy");
      add_location(div60, file, 105, 2, 5357);
      attr_dev(i59, "class", "cz flag");
      add_location(i59, file, 106, 36, 5463);
      attr_dev(div61, "class", "item");
      attr_dev(div61, "data-value", "cz");
      add_location(div61, file, 106, 2, 5429);
      attr_dev(i60, "class", "dk flag");
      add_location(i60, file, 107, 36, 5543);
      attr_dev(div62, "class", "item");
      attr_dev(div62, "data-value", "dk");
      add_location(div62, file, 107, 2, 5509);
      attr_dev(i61, "class", "dj flag");
      add_location(i61, file, 108, 36, 5616);
      attr_dev(div63, "class", "item");
      attr_dev(div63, "data-value", "dj");
      add_location(div63, file, 108, 2, 5582);
      attr_dev(i62, "class", "dm flag");
      add_location(i62, file, 109, 36, 5690);
      attr_dev(div64, "class", "item");
      attr_dev(div64, "data-value", "dm");
      add_location(div64, file, 109, 2, 5656);
      attr_dev(i63, "class", "do flag");
      add_location(i63, file, 110, 36, 5764);
      attr_dev(div65, "class", "item");
      attr_dev(div65, "data-value", "do");
      add_location(div65, file, 110, 2, 5730);
      attr_dev(i64, "class", "ec flag");
      add_location(i64, file, 111, 36, 5848);
      attr_dev(div66, "class", "item");
      attr_dev(div66, "data-value", "ec");
      add_location(div66, file, 111, 2, 5814);
      attr_dev(i65, "class", "eg flag");
      add_location(i65, file, 112, 36, 5921);
      attr_dev(div67, "class", "item");
      attr_dev(div67, "data-value", "eg");
      add_location(div67, file, 112, 2, 5887);
      attr_dev(i66, "class", "sv flag");
      add_location(i66, file, 113, 36, 5992);
      attr_dev(div68, "class", "item");
      attr_dev(div68, "data-value", "sv");
      add_location(div68, file, 113, 2, 5958);
      attr_dev(i67, "class", "gb flag");
      add_location(i67, file, 114, 36, 6069);
      attr_dev(div69, "class", "item");
      attr_dev(div69, "data-value", "gb");
      add_location(div69, file, 114, 2, 6035);
      attr_dev(i68, "class", "gq flag");
      add_location(i68, file, 115, 36, 6142);
      attr_dev(div70, "class", "item");
      attr_dev(div70, "data-value", "gq");
      add_location(div70, file, 115, 2, 6108);
      attr_dev(i69, "class", "er flag");
      add_location(i69, file, 116, 36, 6225);
      attr_dev(div71, "class", "item");
      attr_dev(div71, "data-value", "er");
      add_location(div71, file, 116, 2, 6191);
      attr_dev(i70, "class", "ee flag");
      add_location(i70, file, 117, 36, 6298);
      attr_dev(div72, "class", "item");
      attr_dev(div72, "data-value", "ee");
      add_location(div72, file, 117, 2, 6264);
      attr_dev(i71, "class", "et flag");
      add_location(i71, file, 118, 36, 6371);
      attr_dev(div73, "class", "item");
      attr_dev(div73, "data-value", "et");
      add_location(div73, file, 118, 2, 6337);
      attr_dev(i72, "class", "eu flag");
      add_location(i72, file, 119, 36, 6445);
      attr_dev(div74, "class", "item");
      attr_dev(div74, "data-value", "eu");
      add_location(div74, file, 119, 2, 6411);
      attr_dev(i73, "class", "fk flag");
      add_location(i73, file, 120, 36, 6525);
      attr_dev(div75, "class", "item");
      attr_dev(div75, "data-value", "fk");
      add_location(div75, file, 120, 2, 6491);
      attr_dev(i74, "class", "fo flag");
      add_location(i74, file, 121, 36, 6607);
      attr_dev(div76, "class", "item");
      attr_dev(div76, "data-value", "fo");
      add_location(div76, file, 121, 2, 6573);
      attr_dev(i75, "class", "fj flag");
      add_location(i75, file, 122, 36, 6686);
      attr_dev(div77, "class", "item");
      attr_dev(div77, "data-value", "fj");
      add_location(div77, file, 122, 2, 6652);
      attr_dev(i76, "class", "fi flag");
      add_location(i76, file, 123, 36, 6756);
      attr_dev(div78, "class", "item");
      attr_dev(div78, "data-value", "fi");
      add_location(div78, file, 123, 2, 6722);
      attr_dev(i77, "class", "fr flag");
      add_location(i77, file, 124, 36, 6829);
      attr_dev(div79, "class", "item");
      attr_dev(div79, "data-value", "fr");
      add_location(div79, file, 124, 2, 6795);
      attr_dev(i78, "class", "gf flag");
      add_location(i78, file, 125, 36, 6901);
      attr_dev(div80, "class", "item");
      attr_dev(div80, "data-value", "gf");
      add_location(div80, file, 125, 2, 6867);
      attr_dev(i79, "class", "pf flag");
      add_location(i79, file, 126, 36, 6980);
      attr_dev(div81, "class", "item");
      attr_dev(div81, "data-value", "pf");
      add_location(div81, file, 126, 2, 6946);
      attr_dev(i80, "class", "tf flag");
      add_location(i80, file, 127, 36, 7062);
      attr_dev(div82, "class", "item");
      attr_dev(div82, "data-value", "tf");
      add_location(div82, file, 127, 2, 7028);
      attr_dev(i81, "class", "ga flag");
      add_location(i81, file, 128, 36, 7146);
      attr_dev(div83, "class", "item");
      attr_dev(div83, "data-value", "ga");
      add_location(div83, file, 128, 2, 7112);
      attr_dev(i82, "class", "gm flag");
      add_location(i82, file, 129, 36, 7217);
      attr_dev(div84, "class", "item");
      attr_dev(div84, "data-value", "gm");
      add_location(div84, file, 129, 2, 7183);
      attr_dev(i83, "class", "ge flag");
      add_location(i83, file, 130, 36, 7289);
      attr_dev(div85, "class", "item");
      attr_dev(div85, "data-value", "ge");
      add_location(div85, file, 130, 2, 7255);
      attr_dev(i84, "class", "de flag");
      add_location(i84, file, 131, 36, 7362);
      attr_dev(div86, "class", "item");
      attr_dev(div86, "data-value", "de");
      add_location(div86, file, 131, 2, 7328);
      attr_dev(i85, "class", "gh flag");
      add_location(i85, file, 132, 36, 7435);
      attr_dev(div87, "class", "item");
      attr_dev(div87, "data-value", "gh");
      add_location(div87, file, 132, 2, 7401);
      attr_dev(i86, "class", "gi flag");
      add_location(i86, file, 133, 36, 7506);
      attr_dev(div88, "class", "item");
      attr_dev(div88, "data-value", "gi");
      add_location(div88, file, 133, 2, 7472);
      attr_dev(i87, "class", "gr flag");
      add_location(i87, file, 134, 36, 7581);
      attr_dev(div89, "class", "item");
      attr_dev(div89, "data-value", "gr");
      add_location(div89, file, 134, 2, 7547);
      attr_dev(i88, "class", "gl flag");
      add_location(i88, file, 135, 36, 7653);
      attr_dev(div90, "class", "item");
      attr_dev(div90, "data-value", "gl");
      add_location(div90, file, 135, 2, 7619);
      attr_dev(i89, "class", "gd flag");
      add_location(i89, file, 136, 36, 7728);
      attr_dev(div91, "class", "item");
      attr_dev(div91, "data-value", "gd");
      add_location(div91, file, 136, 2, 7694);
      attr_dev(i90, "class", "gp flag");
      add_location(i90, file, 137, 36, 7801);
      attr_dev(div92, "class", "item");
      attr_dev(div92, "data-value", "gp");
      add_location(div92, file, 137, 2, 7767);
      attr_dev(i91, "class", "gu flag");
      add_location(i91, file, 138, 36, 7877);
      attr_dev(div93, "class", "item");
      attr_dev(div93, "data-value", "gu");
      add_location(div93, file, 138, 2, 7843);
      attr_dev(i92, "class", "gt flag");
      add_location(i92, file, 139, 36, 7947);
      attr_dev(div94, "class", "item");
      attr_dev(div94, "data-value", "gt");
      add_location(div94, file, 139, 2, 7913);
      attr_dev(i93, "class", "gw flag");
      add_location(i93, file, 140, 36, 8022);
      attr_dev(div95, "class", "item");
      attr_dev(div95, "data-value", "gw");
      add_location(div95, file, 140, 2, 7988);
      attr_dev(i94, "class", "gn flag");
      add_location(i94, file, 141, 36, 8101);
      attr_dev(div96, "class", "item");
      attr_dev(div96, "data-value", "gn");
      add_location(div96, file, 141, 2, 8067);
      attr_dev(i95, "class", "gy flag");
      add_location(i95, file, 142, 36, 8173);
      attr_dev(div97, "class", "item");
      attr_dev(div97, "data-value", "gy");
      add_location(div97, file, 142, 2, 8139);
      attr_dev(i96, "class", "ht flag");
      add_location(i96, file, 143, 36, 8245);
      attr_dev(div98, "class", "item");
      attr_dev(div98, "data-value", "ht");
      add_location(div98, file, 143, 2, 8211);
      attr_dev(i97, "class", "hm flag");
      add_location(i97, file, 144, 36, 8316);
      attr_dev(div99, "class", "item");
      attr_dev(div99, "data-value", "hm");
      add_location(div99, file, 144, 2, 8282);
      attr_dev(i98, "class", "hn flag");
      add_location(i98, file, 145, 36, 8394);
      attr_dev(div100, "class", "item");
      attr_dev(div100, "data-value", "hn");
      add_location(div100, file, 145, 2, 8360);
      attr_dev(i99, "class", "hk flag");
      add_location(i99, file, 146, 36, 8468);
      attr_dev(div101, "class", "item");
      attr_dev(div101, "data-value", "hk");
      add_location(div101, file, 146, 2, 8434);
      attr_dev(i100, "class", "hu flag");
      add_location(i100, file, 147, 36, 8543);
      attr_dev(div102, "class", "item");
      attr_dev(div102, "data-value", "hu");
      add_location(div102, file, 147, 2, 8509);
      attr_dev(i101, "class", "is flag");
      add_location(i101, file, 148, 36, 8616);
      attr_dev(div103, "class", "item");
      attr_dev(div103, "data-value", "is");
      add_location(div103, file, 148, 2, 8582);
      attr_dev(i102, "class", "in flag");
      add_location(i102, file, 149, 36, 8689);
      attr_dev(div104, "class", "item");
      attr_dev(div104, "data-value", "in");
      add_location(div104, file, 149, 2, 8655);
      attr_dev(i103, "class", "io flag");
      add_location(i103, file, 150, 36, 8760);
      attr_dev(div105, "class", "item");
      attr_dev(div105, "data-value", "io");
      add_location(div105, file, 150, 2, 8726);
      attr_dev(i104, "class", "id flag");
      add_location(i104, file, 151, 36, 8848);
      attr_dev(div106, "class", "item");
      attr_dev(div106, "data-value", "id");
      add_location(div106, file, 151, 2, 8814);
      attr_dev(i105, "class", "ir flag");
      add_location(i105, file, 152, 36, 8923);
      attr_dev(div107, "class", "item");
      attr_dev(div107, "data-value", "ir");
      add_location(div107, file, 152, 2, 8889);
      attr_dev(i106, "class", "iq flag");
      add_location(i106, file, 153, 36, 8993);
      attr_dev(div108, "class", "item");
      attr_dev(div108, "data-value", "iq");
      add_location(div108, file, 153, 2, 8959);
      attr_dev(i107, "class", "ie flag");
      add_location(i107, file, 154, 36, 9063);
      attr_dev(div109, "class", "item");
      attr_dev(div109, "data-value", "ie");
      add_location(div109, file, 154, 2, 9029);
      attr_dev(i108, "class", "il flag");
      add_location(i108, file, 155, 36, 9136);
      attr_dev(div110, "class", "item");
      attr_dev(div110, "data-value", "il");
      add_location(div110, file, 155, 2, 9102);
      attr_dev(i109, "class", "it flag");
      add_location(i109, file, 156, 36, 9208);
      attr_dev(div111, "class", "item");
      attr_dev(div111, "data-value", "it");
      add_location(div111, file, 156, 2, 9174);
      attr_dev(i110, "class", "jm flag");
      add_location(i110, file, 157, 36, 9279);
      attr_dev(div112, "class", "item");
      attr_dev(div112, "data-value", "jm");
      add_location(div112, file, 157, 2, 9245);
      attr_dev(i111, "class", "jp flag");
      add_location(i111, file, 158, 36, 9352);
      attr_dev(div113, "class", "item");
      attr_dev(div113, "data-value", "jp");
      add_location(div113, file, 158, 2, 9318);
      attr_dev(i112, "class", "jo flag");
      add_location(i112, file, 159, 36, 9423);
      attr_dev(div114, "class", "item");
      attr_dev(div114, "data-value", "jo");
      add_location(div114, file, 159, 2, 9389);
      attr_dev(i113, "class", "kz flag");
      add_location(i113, file, 160, 36, 9495);
      attr_dev(div115, "class", "item");
      attr_dev(div115, "data-value", "kz");
      add_location(div115, file, 160, 2, 9461);
      attr_dev(i114, "class", "ke flag");
      add_location(i114, file, 161, 36, 9571);
      attr_dev(div116, "class", "item");
      attr_dev(div116, "data-value", "ke");
      add_location(div116, file, 161, 2, 9537);
      attr_dev(i115, "class", "ki flag");
      add_location(i115, file, 162, 36, 9642);
      attr_dev(div117, "class", "item");
      attr_dev(div117, "data-value", "ki");
      add_location(div117, file, 162, 2, 9608);
      attr_dev(i116, "class", "kw flag");
      add_location(i116, file, 163, 36, 9716);
      attr_dev(div118, "class", "item");
      attr_dev(div118, "data-value", "kw");
      add_location(div118, file, 163, 2, 9682);
      attr_dev(i117, "class", "kg flag");
      add_location(i117, file, 164, 36, 9788);
      attr_dev(div119, "class", "item");
      attr_dev(div119, "data-value", "kg");
      add_location(div119, file, 164, 2, 9754);
      attr_dev(i118, "class", "la flag");
      add_location(i118, file, 165, 36, 9864);
      attr_dev(div120, "class", "item");
      attr_dev(div120, "data-value", "la");
      add_location(div120, file, 165, 2, 9830);
      attr_dev(i119, "class", "lv flag");
      add_location(i119, file, 166, 36, 9934);
      attr_dev(div121, "class", "item");
      attr_dev(div121, "data-value", "lv");
      add_location(div121, file, 166, 2, 9900);
      attr_dev(i120, "class", "lb flag");
      add_location(i120, file, 167, 36, 10006);
      attr_dev(div122, "class", "item");
      attr_dev(div122, "data-value", "lb");
      add_location(div122, file, 167, 2, 9972);
      attr_dev(i121, "class", "ls flag");
      add_location(i121, file, 168, 36, 10079);
      attr_dev(div123, "class", "item");
      attr_dev(div123, "data-value", "ls");
      add_location(div123, file, 168, 2, 10045);
      attr_dev(i122, "class", "lr flag");
      add_location(i122, file, 169, 36, 10152);
      attr_dev(div124, "class", "item");
      attr_dev(div124, "data-value", "lr");
      add_location(div124, file, 169, 2, 10118);
      attr_dev(i123, "class", "ly flag");
      add_location(i123, file, 170, 36, 10225);
      attr_dev(div125, "class", "item");
      attr_dev(div125, "data-value", "ly");
      add_location(div125, file, 170, 2, 10191);
      attr_dev(i124, "class", "li flag");
      add_location(i124, file, 171, 36, 10296);
      attr_dev(div126, "class", "item");
      attr_dev(div126, "data-value", "li");
      add_location(div126, file, 171, 2, 10262);
      attr_dev(i125, "class", "lt flag");
      add_location(i125, file, 172, 36, 10375);
      attr_dev(div127, "class", "item");
      attr_dev(div127, "data-value", "lt");
      add_location(div127, file, 172, 2, 10341);
      attr_dev(i126, "class", "lu flag");
      add_location(i126, file, 173, 36, 10450);
      attr_dev(div128, "class", "item");
      attr_dev(div128, "data-value", "lu");
      add_location(div128, file, 173, 2, 10416);
      attr_dev(i127, "class", "mo flag");
      add_location(i127, file, 174, 36, 10526);
      attr_dev(div129, "class", "item");
      attr_dev(div129, "data-value", "mo");
      add_location(div129, file, 174, 2, 10492);
      attr_dev(i128, "class", "mk flag");
      add_location(i128, file, 175, 36, 10597);
      attr_dev(div130, "class", "item");
      attr_dev(div130, "data-value", "mk");
      add_location(div130, file, 175, 2, 10563);
      attr_dev(i129, "class", "mg flag");
      add_location(i129, file, 176, 36, 10672);
      attr_dev(div131, "class", "item");
      attr_dev(div131, "data-value", "mg");
      add_location(div131, file, 176, 2, 10638);
      attr_dev(i130, "class", "mw flag");
      add_location(i130, file, 177, 36, 10748);
      attr_dev(div132, "class", "item");
      attr_dev(div132, "data-value", "mw");
      add_location(div132, file, 177, 2, 10714);
      attr_dev(i131, "class", "my flag svelte-1651u6z");
      add_location(i131, file, 178, 36, 10820);
      attr_dev(div133, "class", "item");
      attr_dev(div133, "data-value", "my");
      add_location(div133, file, 178, 2, 10786);
      attr_dev(i132, "class", "mv flag");
      add_location(i132, file, 179, 36, 10894);
      attr_dev(div134, "class", "item");
      attr_dev(div134, "data-value", "mv");
      add_location(div134, file, 179, 2, 10860);
      attr_dev(i133, "class", "ml flag");
      add_location(i133, file, 180, 36, 10968);
      attr_dev(div135, "class", "item");
      attr_dev(div135, "data-value", "ml");
      add_location(div135, file, 180, 2, 10934);
      attr_dev(i134, "class", "mt flag");
      add_location(i134, file, 181, 36, 11038);
      attr_dev(div136, "class", "item");
      attr_dev(div136, "data-value", "mt");
      add_location(div136, file, 181, 2, 11004);
      attr_dev(i135, "class", "mh flag");
      add_location(i135, file, 182, 36, 11109);
      attr_dev(div137, "class", "item");
      attr_dev(div137, "data-value", "mh");
      add_location(div137, file, 182, 2, 11075);
      attr_dev(i136, "class", "mq flag");
      add_location(i136, file, 183, 36, 11191);
      attr_dev(div138, "class", "item");
      attr_dev(div138, "data-value", "mq");
      add_location(div138, file, 183, 2, 11157);
      attr_dev(i137, "class", "mr flag");
      add_location(i137, file, 184, 36, 11267);
      attr_dev(div139, "class", "item");
      attr_dev(div139, "data-value", "mr");
      add_location(div139, file, 184, 2, 11233);
      attr_dev(i138, "class", "mu flag");
      add_location(i138, file, 185, 36, 11343);
      attr_dev(div140, "class", "item");
      attr_dev(div140, "data-value", "mu");
      add_location(div140, file, 185, 2, 11309);
      attr_dev(i139, "class", "yt flag");
      add_location(i139, file, 186, 36, 11418);
      attr_dev(div141, "class", "item");
      attr_dev(div141, "data-value", "yt");
      add_location(div141, file, 186, 2, 11384);
      attr_dev(i140, "class", "mx flag");
      add_location(i140, file, 187, 36, 11491);
      attr_dev(div142, "class", "item");
      attr_dev(div142, "data-value", "mx");
      add_location(div142, file, 187, 2, 11457);
      attr_dev(i141, "class", "fm flag");
      add_location(i141, file, 188, 36, 11563);
      attr_dev(div143, "class", "item");
      attr_dev(div143, "data-value", "fm");
      add_location(div143, file, 188, 2, 11529);
      attr_dev(i142, "class", "md flag");
      add_location(i142, file, 189, 36, 11639);
      attr_dev(div144, "class", "item");
      attr_dev(div144, "data-value", "md");
      add_location(div144, file, 189, 2, 11605);
      attr_dev(i143, "class", "mc flag");
      add_location(i143, file, 190, 36, 11712);
      attr_dev(div145, "class", "item");
      attr_dev(div145, "data-value", "mc");
      add_location(div145, file, 190, 2, 11678);
      attr_dev(i144, "class", "mn flag");
      add_location(i144, file, 191, 36, 11784);
      attr_dev(div146, "class", "item");
      attr_dev(div146, "data-value", "mn");
      add_location(div146, file, 191, 2, 11750);
      attr_dev(i145, "class", "me flag");
      add_location(i145, file, 192, 36, 11858);
      attr_dev(div147, "class", "item");
      attr_dev(div147, "data-value", "me");
      add_location(div147, file, 192, 2, 11824);
      attr_dev(i146, "class", "ms flag");
      add_location(i146, file, 193, 36, 11934);
      attr_dev(div148, "class", "item");
      attr_dev(div148, "data-value", "ms");
      add_location(div148, file, 193, 2, 11900);
      attr_dev(i147, "class", "ma flag");
      add_location(i147, file, 194, 36, 12010);
      attr_dev(div149, "class", "item");
      attr_dev(div149, "data-value", "ma");
      add_location(div149, file, 194, 2, 11976);
      attr_dev(i148, "class", "mz flag");
      add_location(i148, file, 195, 36, 12083);
      attr_dev(div150, "class", "item");
      attr_dev(div150, "data-value", "mz");
      add_location(div150, file, 195, 2, 12049);
      attr_dev(i149, "class", "na flag");
      add_location(i149, file, 196, 36, 12159);
      attr_dev(div151, "class", "item");
      attr_dev(div151, "data-value", "na");
      add_location(div151, file, 196, 2, 12125);
      attr_dev(i150, "class", "nr flag");
      add_location(i150, file, 197, 36, 12232);
      attr_dev(div152, "class", "item");
      attr_dev(div152, "data-value", "nr");
      add_location(div152, file, 197, 2, 12198);
      attr_dev(i151, "class", "np flag");
      add_location(i151, file, 198, 36, 12303);
      attr_dev(div153, "class", "item");
      attr_dev(div153, "data-value", "np");
      add_location(div153, file, 198, 2, 12269);
      attr_dev(i152, "class", "an flag");
      add_location(i152, file, 199, 36, 12374);
      attr_dev(div154, "class", "item");
      attr_dev(div154, "data-value", "an");
      add_location(div154, file, 199, 2, 12340);
      attr_dev(i153, "class", "nl flag");
      add_location(i153, file, 200, 36, 12460);
      attr_dev(div155, "class", "item");
      attr_dev(div155, "data-value", "nl");
      add_location(div155, file, 200, 2, 12426);
      attr_dev(i154, "class", "nc flag");
      add_location(i154, file, 201, 36, 12537);
      attr_dev(div156, "class", "item");
      attr_dev(div156, "data-value", "nc");
      add_location(div156, file, 201, 2, 12503);
      attr_dev(i155, "class", "pg flag");
      add_location(i155, file, 202, 36, 12616);
      attr_dev(div157, "class", "item");
      attr_dev(div157, "data-value", "pg");
      add_location(div157, file, 202, 2, 12582);
      attr_dev(i156, "class", "nz flag");
      add_location(i156, file, 203, 36, 12692);
      attr_dev(div158, "class", "item");
      attr_dev(div158, "data-value", "nz");
      add_location(div158, file, 203, 2, 12658);
      attr_dev(i157, "class", "ni flag");
      add_location(i157, file, 204, 36, 12769);
      attr_dev(div159, "class", "item");
      attr_dev(div159, "data-value", "ni");
      add_location(div159, file, 204, 2, 12735);
      attr_dev(i158, "class", "ne flag");
      add_location(i158, file, 205, 36, 12844);
      attr_dev(div160, "class", "item");
      attr_dev(div160, "data-value", "ne");
      add_location(div160, file, 205, 2, 12810);
      attr_dev(i159, "class", "ng flag");
      add_location(i159, file, 206, 36, 12915);
      attr_dev(div161, "class", "item");
      attr_dev(div161, "data-value", "ng");
      add_location(div161, file, 206, 2, 12881);
      attr_dev(i160, "class", "nu flag");
      add_location(i160, file, 207, 36, 12988);
      attr_dev(div162, "class", "item");
      attr_dev(div162, "data-value", "nu");
      add_location(div162, file, 207, 2, 12954);
      attr_dev(i161, "class", "nf flag");
      add_location(i161, file, 208, 36, 13058);
      attr_dev(div163, "class", "item");
      attr_dev(div163, "data-value", "nf");
      add_location(div163, file, 208, 2, 13024);
      attr_dev(i162, "class", "kp flag");
      add_location(i162, file, 209, 36, 13138);
      attr_dev(div164, "class", "item");
      attr_dev(div164, "data-value", "kp");
      add_location(div164, file, 209, 2, 13104);
      attr_dev(i163, "class", "mp flag");
      add_location(i163, file, 210, 36, 13215);
      attr_dev(div165, "class", "item");
      attr_dev(div165, "data-value", "mp");
      add_location(div165, file, 210, 2, 13181);
      attr_dev(i164, "class", "no flag");
      add_location(i164, file, 211, 36, 13305);
      attr_dev(div166, "class", "item");
      attr_dev(div166, "data-value", "no");
      add_location(div166, file, 211, 2, 13271);
      attr_dev(i165, "class", "om flag");
      add_location(i165, file, 212, 36, 13377);
      attr_dev(div167, "class", "item");
      attr_dev(div167, "data-value", "om");
      add_location(div167, file, 212, 2, 13343);
      attr_dev(i166, "class", "pk flag");
      add_location(i166, file, 213, 36, 13447);
      attr_dev(div168, "class", "item");
      attr_dev(div168, "data-value", "pk");
      add_location(div168, file, 213, 2, 13413);
      attr_dev(i167, "class", "pw flag");
      add_location(i167, file, 214, 36, 13521);
      attr_dev(div169, "class", "item");
      attr_dev(div169, "data-value", "pw");
      add_location(div169, file, 214, 2, 13487);
      attr_dev(i168, "class", "ps flag");
      add_location(i168, file, 215, 36, 13592);
      attr_dev(div170, "class", "item");
      attr_dev(div170, "data-value", "ps");
      add_location(div170, file, 215, 2, 13558);
      attr_dev(i169, "class", "pa flag");
      add_location(i169, file, 216, 36, 13667);
      attr_dev(div171, "class", "item");
      attr_dev(div171, "data-value", "pa");
      add_location(div171, file, 216, 2, 13633);
      attr_dev(i170, "class", "py flag");
      add_location(i170, file, 217, 36, 13739);
      attr_dev(div172, "class", "item");
      attr_dev(div172, "data-value", "py");
      add_location(div172, file, 217, 2, 13705);
      attr_dev(i171, "class", "pe flag");
      add_location(i171, file, 218, 36, 13813);
      attr_dev(div173, "class", "item");
      attr_dev(div173, "data-value", "pe");
      add_location(div173, file, 218, 2, 13779);
      attr_dev(i172, "class", "ph flag");
      add_location(i172, file, 219, 36, 13883);
      attr_dev(div174, "class", "item");
      attr_dev(div174, "data-value", "ph");
      add_location(div174, file, 219, 2, 13849);
      attr_dev(i173, "class", "pn flag");
      add_location(i173, file, 220, 36, 13960);
      attr_dev(div175, "class", "item");
      attr_dev(div175, "data-value", "pn");
      add_location(div175, file, 220, 2, 13926);
      attr_dev(i174, "class", "pl flag");
      add_location(i174, file, 221, 36, 14042);
      attr_dev(div176, "class", "item");
      attr_dev(div176, "data-value", "pl");
      add_location(div176, file, 221, 2, 14008);
      attr_dev(i175, "class", "pt flag");
      add_location(i175, file, 222, 36, 14114);
      attr_dev(div177, "class", "item");
      attr_dev(div177, "data-value", "pt");
      add_location(div177, file, 222, 2, 14080);
      attr_dev(i176, "class", "pr flag");
      add_location(i176, file, 223, 36, 14188);
      attr_dev(div178, "class", "item");
      attr_dev(div178, "data-value", "pr");
      add_location(div178, file, 223, 2, 14154);
      attr_dev(i177, "class", "qa flag");
      add_location(i177, file, 224, 36, 14265);
      attr_dev(div179, "class", "item");
      attr_dev(div179, "data-value", "qa");
      add_location(div179, file, 224, 2, 14231);
      attr_dev(i178, "class", "re flag");
      add_location(i178, file, 225, 36, 14336);
      attr_dev(div180, "class", "item");
      attr_dev(div180, "data-value", "re");
      add_location(div180, file, 225, 2, 14302);
      attr_dev(i179, "class", "ro flag");
      add_location(i179, file, 226, 36, 14409);
      attr_dev(div181, "class", "item");
      attr_dev(div181, "data-value", "ro");
      add_location(div181, file, 226, 2, 14375);
      attr_dev(i180, "class", "ru flag");
      add_location(i180, file, 227, 36, 14482);
      attr_dev(div182, "class", "item");
      attr_dev(div182, "data-value", "ru");
      add_location(div182, file, 227, 2, 14448);
      attr_dev(i181, "class", "rw flag");
      add_location(i181, file, 228, 36, 14554);
      attr_dev(div183, "class", "item");
      attr_dev(div183, "data-value", "rw");
      add_location(div183, file, 228, 2, 14520);
      attr_dev(i182, "class", "sh flag");
      add_location(i182, file, 229, 36, 14626);
      attr_dev(div184, "class", "item");
      attr_dev(div184, "data-value", "sh");
      add_location(div184, file, 229, 2, 14592);
      attr_dev(i183, "class", "kn flag");
      add_location(i183, file, 230, 36, 14704);
      attr_dev(div185, "class", "item");
      attr_dev(div185, "data-value", "kn");
      add_location(div185, file, 230, 2, 14670);
      attr_dev(i184, "class", "lc flag");
      add_location(i184, file, 231, 36, 14791);
      attr_dev(div186, "class", "item");
      attr_dev(div186, "data-value", "lc");
      add_location(div186, file, 231, 2, 14757);
      attr_dev(i185, "class", "pm flag");
      add_location(i185, file, 232, 36, 14868);
      attr_dev(div187, "class", "item");
      attr_dev(div187, "data-value", "pm");
      add_location(div187, file, 232, 2, 14834);
      attr_dev(i186, "class", "vc flag");
      add_location(i186, file, 233, 36, 14946);
      attr_dev(div188, "class", "item");
      attr_dev(div188, "data-value", "vc");
      add_location(div188, file, 233, 2, 14912);
      attr_dev(i187, "class", "ws flag");
      add_location(i187, file, 234, 36, 15025);
      attr_dev(div189, "class", "item");
      attr_dev(div189, "data-value", "ws");
      add_location(div189, file, 234, 2, 14991);
      attr_dev(i188, "class", "sm flag");
      add_location(i188, file, 235, 36, 15096);
      attr_dev(div190, "class", "item");
      attr_dev(div190, "data-value", "sm");
      add_location(div190, file, 235, 2, 15062);
      attr_dev(i189, "class", "gs flag");
      add_location(i189, file, 236, 36, 15172);
      attr_dev(div191, "class", "item");
      attr_dev(div191, "data-value", "gs");
      add_location(div191, file, 236, 2, 15138);
      attr_dev(i190, "class", "st flag");
      add_location(i190, file, 237, 36, 15254);
      attr_dev(div192, "class", "item");
      attr_dev(div192, "data-value", "st");
      add_location(div192, file, 237, 2, 15220);
      attr_dev(i191, "class", "sa flag");
      add_location(i191, file, 238, 36, 15328);
      attr_dev(div193, "class", "item");
      attr_dev(div193, "data-value", "sa");
      add_location(div193, file, 238, 2, 15294);
      attr_dev(i192, "class", "sn flag");
      add_location(i192, file, 239, 36, 15406);
      attr_dev(div194, "class", "item");
      attr_dev(div194, "data-value", "sn");
      add_location(div194, file, 239, 2, 15372);
      attr_dev(i193, "class", "cs flag");
      add_location(i193, file, 240, 36, 15479);
      attr_dev(div195, "class", "item");
      attr_dev(div195, "data-value", "cs");
      add_location(div195, file, 240, 2, 15445);
      attr_dev(i194, "class", "rs flag");
      add_location(i194, file, 241, 36, 15551);
      attr_dev(div196, "class", "item");
      attr_dev(div196, "data-value", "rs");
      add_location(div196, file, 241, 2, 15517);
      attr_dev(i195, "class", "sc flag");
      add_location(i195, file, 242, 36, 15623);
      attr_dev(div197, "class", "item");
      attr_dev(div197, "data-value", "sc");
      add_location(div197, file, 242, 2, 15589);
      attr_dev(i196, "class", "sl flag");
      add_location(i196, file, 243, 36, 15699);
      attr_dev(div198, "class", "item");
      attr_dev(div198, "data-value", "sl");
      add_location(div198, file, 243, 2, 15665);
      attr_dev(i197, "class", "sg flag");
      add_location(i197, file, 244, 36, 15777);
      attr_dev(div199, "class", "item");
      attr_dev(div199, "data-value", "sg");
      add_location(div199, file, 244, 2, 15743);
      attr_dev(i198, "class", "sk flag");
      add_location(i198, file, 245, 36, 15852);
      attr_dev(div200, "class", "item");
      attr_dev(div200, "data-value", "sk");
      add_location(div200, file, 245, 2, 15818);
      attr_dev(i199, "class", "si flag");
      add_location(i199, file, 246, 36, 15926);
      attr_dev(div201, "class", "item");
      attr_dev(div201, "data-value", "si");
      add_location(div201, file, 246, 2, 15892);
      attr_dev(i200, "class", "sb flag");
      add_location(i200, file, 247, 36, 16000);
      attr_dev(div202, "class", "item");
      attr_dev(div202, "data-value", "sb");
      add_location(div202, file, 247, 2, 15966);
      attr_dev(i201, "class", "so flag");
      add_location(i201, file, 248, 36, 16081);
      attr_dev(div203, "class", "item");
      attr_dev(div203, "data-value", "so");
      add_location(div203, file, 248, 2, 16047);
      attr_dev(i202, "class", "za flag");
      add_location(i202, file, 249, 36, 16154);
      attr_dev(div204, "class", "item");
      attr_dev(div204, "data-value", "za");
      add_location(div204, file, 249, 2, 16120);
      attr_dev(i203, "class", "kr flag");
      add_location(i203, file, 250, 36, 16232);
      attr_dev(div205, "class", "item");
      attr_dev(div205, "data-value", "kr");
      add_location(div205, file, 250, 2, 16198);
      attr_dev(i204, "class", "es flag");
      add_location(i204, file, 251, 36, 16309);
      attr_dev(div206, "class", "item");
      attr_dev(div206, "data-value", "es");
      add_location(div206, file, 251, 2, 16275);
      attr_dev(i205, "class", "lk flag");
      add_location(i205, file, 252, 36, 16380);
      attr_dev(div207, "class", "item");
      attr_dev(div207, "data-value", "lk");
      add_location(div207, file, 252, 2, 16346);
      attr_dev(i206, "class", "sd flag");
      add_location(i206, file, 253, 36, 16455);
      attr_dev(div208, "class", "item");
      attr_dev(div208, "data-value", "sd");
      add_location(div208, file, 253, 2, 16421);
      attr_dev(i207, "class", "sr flag");
      add_location(i207, file, 254, 36, 16526);
      attr_dev(div209, "class", "item");
      attr_dev(div209, "data-value", "sr");
      add_location(div209, file, 254, 2, 16492);
      attr_dev(i208, "class", "sj flag");
      add_location(i208, file, 255, 36, 16600);
      attr_dev(div210, "class", "item");
      attr_dev(div210, "data-value", "sj");
      add_location(div210, file, 255, 2, 16566);
      attr_dev(i209, "class", "sz flag");
      add_location(i209, file, 256, 36, 16674);
      attr_dev(div211, "class", "item");
      attr_dev(div211, "data-value", "sz");
      add_location(div211, file, 256, 2, 16640);
      attr_dev(i210, "class", "se flag");
      add_location(i210, file, 257, 36, 16749);
      attr_dev(div212, "class", "item");
      attr_dev(div212, "data-value", "se");
      add_location(div212, file, 257, 2, 16715);
      attr_dev(i211, "class", "ch flag");
      add_location(i211, file, 258, 36, 16821);
      attr_dev(div213, "class", "item");
      attr_dev(div213, "data-value", "ch");
      add_location(div213, file, 258, 2, 16787);
      attr_dev(i212, "class", "sy flag");
      add_location(i212, file, 259, 36, 16898);
      attr_dev(div214, "class", "item");
      attr_dev(div214, "data-value", "sy");
      add_location(div214, file, 259, 2, 16864);
      attr_dev(i213, "class", "tw flag");
      add_location(i213, file, 260, 36, 16969);
      attr_dev(div215, "class", "item");
      attr_dev(div215, "data-value", "tw");
      add_location(div215, file, 260, 2, 16935);
      attr_dev(i214, "class", "tj flag");
      add_location(i214, file, 261, 36, 17041);
      attr_dev(div216, "class", "item");
      attr_dev(div216, "data-value", "tj");
      add_location(div216, file, 261, 2, 17007);
      attr_dev(i215, "class", "tz flag");
      add_location(i215, file, 262, 36, 17117);
      attr_dev(div217, "class", "item");
      attr_dev(div217, "data-value", "tz");
      add_location(div217, file, 262, 2, 17083);
      attr_dev(i216, "class", "th flag");
      add_location(i216, file, 263, 36, 17191);
      attr_dev(div218, "class", "item");
      attr_dev(div218, "data-value", "th");
      add_location(div218, file, 263, 2, 17157);
      attr_dev(i217, "class", "tl flag");
      add_location(i217, file, 264, 36, 17265);
      attr_dev(div219, "class", "item");
      attr_dev(div219, "data-value", "tl");
      add_location(div219, file, 264, 2, 17231);
      attr_dev(i218, "class", "tg flag");
      add_location(i218, file, 265, 36, 17341);
      attr_dev(div220, "class", "item");
      attr_dev(div220, "data-value", "tg");
      add_location(div220, file, 265, 2, 17307);
      attr_dev(i219, "class", "tk flag");
      add_location(i219, file, 266, 36, 17411);
      attr_dev(div221, "class", "item");
      attr_dev(div221, "data-value", "tk");
      add_location(div221, file, 266, 2, 17377);
      attr_dev(i220, "class", "to flag");
      add_location(i220, file, 267, 36, 17484);
      attr_dev(div222, "class", "item");
      attr_dev(div222, "data-value", "to");
      add_location(div222, file, 267, 2, 17450);
      attr_dev(i221, "class", "tt flag");
      add_location(i221, file, 268, 36, 17555);
      attr_dev(div223, "class", "item");
      attr_dev(div223, "data-value", "tt");
      add_location(div223, file, 268, 2, 17521);
      attr_dev(i222, "class", "tn flag");
      add_location(i222, file, 269, 36, 17629);
      attr_dev(div224, "class", "item");
      attr_dev(div224, "data-value", "tn");
      add_location(div224, file, 269, 2, 17595);
      attr_dev(i223, "class", "tr flag");
      add_location(i223, file, 270, 36, 17702);
      attr_dev(div225, "class", "item");
      attr_dev(div225, "data-value", "tr");
      add_location(div225, file, 270, 2, 17668);
      attr_dev(i224, "class", "tm flag");
      add_location(i224, file, 271, 36, 17774);
      attr_dev(div226, "class", "item");
      attr_dev(div226, "data-value", "tm");
      add_location(div226, file, 271, 2, 17740);
      attr_dev(i225, "class", "tv flag");
      add_location(i225, file, 272, 36, 17852);
      attr_dev(div227, "class", "item");
      attr_dev(div227, "data-value", "tv");
      add_location(div227, file, 272, 2, 17818);
      attr_dev(i226, "class", "ug flag");
      add_location(i226, file, 273, 36, 17924);
      attr_dev(div228, "class", "item");
      attr_dev(div228, "data-value", "ug");
      add_location(div228, file, 273, 2, 17890);
      attr_dev(i227, "class", "ua flag");
      add_location(i227, file, 274, 36, 17996);
      attr_dev(div229, "class", "item");
      attr_dev(div229, "data-value", "ua");
      add_location(div229, file, 274, 2, 17962);
      attr_dev(i228, "class", "ae flag");
      add_location(i228, file, 275, 36, 18069);
      attr_dev(div230, "class", "item");
      attr_dev(div230, "data-value", "ae");
      add_location(div230, file, 275, 2, 18035);
      attr_dev(i229, "class", "us flag");
      add_location(i229, file, 276, 36, 18155);
      attr_dev(div231, "class", "item");
      attr_dev(div231, "data-value", "us");
      add_location(div231, file, 276, 2, 18121);
      attr_dev(i230, "class", "uy flag");
      add_location(i230, file, 277, 36, 18234);
      attr_dev(div232, "class", "item");
      attr_dev(div232, "data-value", "uy");
      add_location(div232, file, 277, 2, 18200);
      attr_dev(i231, "class", "um flag");
      add_location(i231, file, 278, 36, 18307);
      attr_dev(div233, "class", "item");
      attr_dev(div233, "data-value", "um");
      add_location(div233, file, 278, 2, 18273);
      attr_dev(i232, "class", "vi flag");
      add_location(i232, file, 279, 36, 18389);
      attr_dev(div234, "class", "item");
      attr_dev(div234, "data-value", "vi");
      add_location(div234, file, 279, 2, 18355);
      attr_dev(i233, "class", "uz flag");
      add_location(i233, file, 280, 36, 18472);
      attr_dev(div235, "class", "item");
      attr_dev(div235, "data-value", "uz");
      add_location(div235, file, 280, 2, 18438);
      attr_dev(i234, "class", "vu flag");
      add_location(i234, file, 281, 36, 18548);
      attr_dev(div236, "class", "item");
      attr_dev(div236, "data-value", "vu");
      add_location(div236, file, 281, 2, 18514);
      attr_dev(i235, "class", "va flag");
      add_location(i235, file, 282, 36, 18621);
      attr_dev(div237, "class", "item");
      attr_dev(div237, "data-value", "va");
      add_location(div237, file, 282, 2, 18587);
      attr_dev(i236, "class", "ve flag");
      add_location(i236, file, 283, 36, 18699);
      attr_dev(div238, "class", "item");
      attr_dev(div238, "data-value", "ve");
      add_location(div238, file, 283, 2, 18665);
      attr_dev(i237, "class", "vn flag");
      add_location(i237, file, 284, 36, 18774);
      attr_dev(div239, "class", "item");
      attr_dev(div239, "data-value", "vn");
      add_location(div239, file, 284, 2, 18740);
      attr_dev(i238, "class", "wf flag");
      add_location(i238, file, 285, 36, 18847);
      attr_dev(div240, "class", "item");
      attr_dev(div240, "data-value", "wf");
      add_location(div240, file, 285, 2, 18813);
      attr_dev(i239, "class", "eh flag");
      add_location(i239, file, 286, 36, 18930);
      attr_dev(div241, "class", "item");
      attr_dev(div241, "data-value", "eh");
      add_location(div241, file, 286, 2, 18896);
      attr_dev(i240, "class", "ye flag");
      add_location(i240, file, 287, 36, 19010);
      attr_dev(div242, "class", "item");
      attr_dev(div242, "data-value", "ye");
      add_location(div242, file, 287, 2, 18976);
      attr_dev(i241, "class", "zm flag");
      add_location(i241, file, 288, 36, 19081);
      attr_dev(div243, "class", "item");
      attr_dev(div243, "data-value", "zm");
      add_location(div243, file, 288, 2, 19047);
      attr_dev(i242, "class", "zw flag");
      add_location(i242, file, 289, 36, 19153);
      attr_dev(div244, "class", "item");
      attr_dev(div244, "data-value", "zw");
      add_location(div244, file, 289, 2, 19119);
      attr_dev(div245, "class", "menu");
      add_location(div245, file, 47, 1, 1068);
      attr_dev(div246, "class", "ui multiple search selection dropdown");
      add_location(div246, file, 43, 0, 896);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div0, anchor);
      append_dev(div0, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, figure0, anchor);
      append_dev(figure0, img0);
      append_dev(figure0, t5);
      append_dev(figure0, figcaption0);
      append_dev(figcaption0, t6);
      insert_dev(target, t7, anchor);
      insert_dev(target, figure1, anchor);
      append_dev(figure1, img1);
      append_dev(figure1, t8);
      append_dev(figure1, figcaption1);
      append_dev(figcaption1, t9);
      insert_dev(target, t10, anchor);
      insert_dev(target, figure2, anchor);
      append_dev(figure2, img2);
      append_dev(figure2, t11);
      append_dev(figure2, figcaption2);
      append_dev(figcaption2, t12);
      insert_dev(target, t13, anchor);
      insert_dev(target, p, anchor);
      append_dev(p, strong);
      append_dev(strong, t14);
      insert_dev(target, t15, anchor);
      insert_dev(target, div246, anchor);
      append_dev(div246, input);
      append_dev(div246, t16);
      append_dev(div246, i0);
      append_dev(div246, t17);
      append_dev(div246, div2);
      append_dev(div2, t18);
      append_dev(div246, t19);
      append_dev(div246, div245);
      append_dev(div245, div3);
      append_dev(div3, i1);
      append_dev(div3, t20);
      append_dev(div245, t21);
      append_dev(div245, div4);
      append_dev(div4, i2);
      append_dev(div4, t22);
      append_dev(div245, t23);
      append_dev(div245, div5);
      append_dev(div5, i3);
      append_dev(div5, t24);
      append_dev(div245, t25);
      append_dev(div245, div6);
      append_dev(div6, i4);
      append_dev(div6, t26);
      append_dev(div245, t27);
      append_dev(div245, div7);
      append_dev(div7, i5);
      append_dev(div7, t28);
      append_dev(div245, t29);
      append_dev(div245, div8);
      append_dev(div8, i6);
      append_dev(div8, t30);
      append_dev(div245, t31);
      append_dev(div245, div9);
      append_dev(div9, i7);
      append_dev(div9, t32);
      append_dev(div245, t33);
      append_dev(div245, div10);
      append_dev(div10, i8);
      append_dev(div10, t34);
      append_dev(div245, t35);
      append_dev(div245, div11);
      append_dev(div11, i9);
      append_dev(div11, t36);
      append_dev(div245, t37);
      append_dev(div245, div12);
      append_dev(div12, i10);
      append_dev(div12, t38);
      append_dev(div245, t39);
      append_dev(div245, div13);
      append_dev(div13, i11);
      append_dev(div13, t40);
      append_dev(div245, t41);
      append_dev(div245, div14);
      append_dev(div14, i12);
      append_dev(div14, t42);
      append_dev(div245, t43);
      append_dev(div245, div15);
      append_dev(div15, i13);
      append_dev(div15, t44);
      append_dev(div245, t45);
      append_dev(div245, div16);
      append_dev(div16, i14);
      append_dev(div16, t46);
      append_dev(div245, t47);
      append_dev(div245, div17);
      append_dev(div17, i15);
      append_dev(div17, t48);
      append_dev(div245, t49);
      append_dev(div245, div18);
      append_dev(div18, i16);
      append_dev(div18, t50);
      append_dev(div245, t51);
      append_dev(div245, div19);
      append_dev(div19, i17);
      append_dev(div19, t52);
      append_dev(div245, t53);
      append_dev(div245, div20);
      append_dev(div20, i18);
      append_dev(div20, t54);
      append_dev(div245, t55);
      append_dev(div245, div21);
      append_dev(div21, i19);
      append_dev(div21, t56);
      append_dev(div245, t57);
      append_dev(div245, div22);
      append_dev(div22, i20);
      append_dev(div22, t58);
      append_dev(div245, t59);
      append_dev(div245, div23);
      append_dev(div23, i21);
      append_dev(div23, t60);
      append_dev(div245, t61);
      append_dev(div245, div24);
      append_dev(div24, i22);
      append_dev(div24, t62);
      append_dev(div245, t63);
      append_dev(div245, div25);
      append_dev(div25, i23);
      append_dev(div25, t64);
      append_dev(div245, t65);
      append_dev(div245, div26);
      append_dev(div26, i24);
      append_dev(div26, t66);
      append_dev(div245, t67);
      append_dev(div245, div27);
      append_dev(div27, i25);
      append_dev(div27, t68);
      append_dev(div245, t69);
      append_dev(div245, div28);
      append_dev(div28, i26);
      append_dev(div28, t70);
      append_dev(div245, t71);
      append_dev(div245, div29);
      append_dev(div29, i27);
      append_dev(div29, t72);
      append_dev(div245, t73);
      append_dev(div245, div30);
      append_dev(div30, i28);
      append_dev(div30, t74);
      append_dev(div245, t75);
      append_dev(div245, div31);
      append_dev(div31, i29);
      append_dev(div31, t76);
      append_dev(div245, t77);
      append_dev(div245, div32);
      append_dev(div32, i30);
      append_dev(div32, t78);
      append_dev(div245, t79);
      append_dev(div245, div33);
      append_dev(div33, i31);
      append_dev(div33, t80);
      append_dev(div245, t81);
      append_dev(div245, div34);
      append_dev(div34, i32);
      append_dev(div34, t82);
      append_dev(div245, t83);
      append_dev(div245, div35);
      append_dev(div35, i33);
      append_dev(div35, t84);
      append_dev(div245, t85);
      append_dev(div245, div36);
      append_dev(div36, i34);
      append_dev(div36, t86);
      append_dev(div245, t87);
      append_dev(div245, div37);
      append_dev(div37, i35);
      append_dev(div37, t88);
      append_dev(div245, t89);
      append_dev(div245, div38);
      append_dev(div38, i36);
      append_dev(div38, t90);
      append_dev(div245, t91);
      append_dev(div245, div39);
      append_dev(div39, i37);
      append_dev(div39, t92);
      append_dev(div245, t93);
      append_dev(div245, div40);
      append_dev(div40, i38);
      append_dev(div40, t94);
      append_dev(div245, t95);
      append_dev(div245, div41);
      append_dev(div41, i39);
      append_dev(div41, t96);
      append_dev(div245, t97);
      append_dev(div245, div42);
      append_dev(div42, i40);
      append_dev(div42, t98);
      append_dev(div245, t99);
      append_dev(div245, div43);
      append_dev(div43, i41);
      append_dev(div43, t100);
      append_dev(div245, t101);
      append_dev(div245, div44);
      append_dev(div44, i42);
      append_dev(div44, t102);
      append_dev(div245, t103);
      append_dev(div245, div45);
      append_dev(div45, i43);
      append_dev(div45, t104);
      append_dev(div245, t105);
      append_dev(div245, div46);
      append_dev(div46, i44);
      append_dev(div46, t106);
      append_dev(div245, t107);
      append_dev(div245, div47);
      append_dev(div47, i45);
      append_dev(div47, t108);
      append_dev(div245, t109);
      append_dev(div245, div48);
      append_dev(div48, i46);
      append_dev(div48, t110);
      append_dev(div245, t111);
      append_dev(div245, div49);
      append_dev(div49, i47);
      append_dev(div49, t112);
      append_dev(div245, t113);
      append_dev(div245, div50);
      append_dev(div50, i48);
      append_dev(div50, t114);
      append_dev(div245, t115);
      append_dev(div245, div51);
      append_dev(div51, i49);
      append_dev(div51, t116);
      append_dev(div245, t117);
      append_dev(div245, div52);
      append_dev(div52, i50);
      append_dev(div52, t118);
      append_dev(div245, t119);
      append_dev(div245, div53);
      append_dev(div53, i51);
      append_dev(div53, t120);
      append_dev(div245, t121);
      append_dev(div245, div54);
      append_dev(div54, i52);
      append_dev(div54, t122);
      append_dev(div245, t123);
      append_dev(div245, div55);
      append_dev(div55, i53);
      append_dev(div55, t124);
      append_dev(div245, t125);
      append_dev(div245, div56);
      append_dev(div56, i54);
      append_dev(div56, t126);
      append_dev(div245, t127);
      append_dev(div245, div57);
      append_dev(div57, i55);
      append_dev(div57, t128);
      append_dev(div245, t129);
      append_dev(div245, div58);
      append_dev(div58, i56);
      append_dev(div58, t130);
      append_dev(div245, t131);
      append_dev(div245, div59);
      append_dev(div59, i57);
      append_dev(div59, t132);
      append_dev(div245, t133);
      append_dev(div245, div60);
      append_dev(div60, i58);
      append_dev(div60, t134);
      append_dev(div245, t135);
      append_dev(div245, div61);
      append_dev(div61, i59);
      append_dev(div61, t136);
      append_dev(div245, t137);
      append_dev(div245, div62);
      append_dev(div62, i60);
      append_dev(div62, t138);
      append_dev(div245, t139);
      append_dev(div245, div63);
      append_dev(div63, i61);
      append_dev(div63, t140);
      append_dev(div245, t141);
      append_dev(div245, div64);
      append_dev(div64, i62);
      append_dev(div64, t142);
      append_dev(div245, t143);
      append_dev(div245, div65);
      append_dev(div65, i63);
      append_dev(div65, t144);
      append_dev(div245, t145);
      append_dev(div245, div66);
      append_dev(div66, i64);
      append_dev(div66, t146);
      append_dev(div245, t147);
      append_dev(div245, div67);
      append_dev(div67, i65);
      append_dev(div67, t148);
      append_dev(div245, t149);
      append_dev(div245, div68);
      append_dev(div68, i66);
      append_dev(div68, t150);
      append_dev(div245, t151);
      append_dev(div245, div69);
      append_dev(div69, i67);
      append_dev(div69, t152);
      append_dev(div245, t153);
      append_dev(div245, div70);
      append_dev(div70, i68);
      append_dev(div70, t154);
      append_dev(div245, t155);
      append_dev(div245, div71);
      append_dev(div71, i69);
      append_dev(div71, t156);
      append_dev(div245, t157);
      append_dev(div245, div72);
      append_dev(div72, i70);
      append_dev(div72, t158);
      append_dev(div245, t159);
      append_dev(div245, div73);
      append_dev(div73, i71);
      append_dev(div73, t160);
      append_dev(div245, t161);
      append_dev(div245, div74);
      append_dev(div74, i72);
      append_dev(div74, t162);
      append_dev(div245, t163);
      append_dev(div245, div75);
      append_dev(div75, i73);
      append_dev(div75, t164);
      append_dev(div245, t165);
      append_dev(div245, div76);
      append_dev(div76, i74);
      append_dev(div76, t166);
      append_dev(div245, t167);
      append_dev(div245, div77);
      append_dev(div77, i75);
      append_dev(div77, t168);
      append_dev(div245, t169);
      append_dev(div245, div78);
      append_dev(div78, i76);
      append_dev(div78, t170);
      append_dev(div245, t171);
      append_dev(div245, div79);
      append_dev(div79, i77);
      append_dev(div79, t172);
      append_dev(div245, t173);
      append_dev(div245, div80);
      append_dev(div80, i78);
      append_dev(div80, t174);
      append_dev(div245, t175);
      append_dev(div245, div81);
      append_dev(div81, i79);
      append_dev(div81, t176);
      append_dev(div245, t177);
      append_dev(div245, div82);
      append_dev(div82, i80);
      append_dev(div82, t178);
      append_dev(div245, t179);
      append_dev(div245, div83);
      append_dev(div83, i81);
      append_dev(div83, t180);
      append_dev(div245, t181);
      append_dev(div245, div84);
      append_dev(div84, i82);
      append_dev(div84, t182);
      append_dev(div245, t183);
      append_dev(div245, div85);
      append_dev(div85, i83);
      append_dev(div85, t184);
      append_dev(div245, t185);
      append_dev(div245, div86);
      append_dev(div86, i84);
      append_dev(div86, t186);
      append_dev(div245, t187);
      append_dev(div245, div87);
      append_dev(div87, i85);
      append_dev(div87, t188);
      append_dev(div245, t189);
      append_dev(div245, div88);
      append_dev(div88, i86);
      append_dev(div88, t190);
      append_dev(div245, t191);
      append_dev(div245, div89);
      append_dev(div89, i87);
      append_dev(div89, t192);
      append_dev(div245, t193);
      append_dev(div245, div90);
      append_dev(div90, i88);
      append_dev(div90, t194);
      append_dev(div245, t195);
      append_dev(div245, div91);
      append_dev(div91, i89);
      append_dev(div91, t196);
      append_dev(div245, t197);
      append_dev(div245, div92);
      append_dev(div92, i90);
      append_dev(div92, t198);
      append_dev(div245, t199);
      append_dev(div245, div93);
      append_dev(div93, i91);
      append_dev(div93, t200);
      append_dev(div245, t201);
      append_dev(div245, div94);
      append_dev(div94, i92);
      append_dev(div94, t202);
      append_dev(div245, t203);
      append_dev(div245, div95);
      append_dev(div95, i93);
      append_dev(div95, t204);
      append_dev(div245, t205);
      append_dev(div245, div96);
      append_dev(div96, i94);
      append_dev(div96, t206);
      append_dev(div245, t207);
      append_dev(div245, div97);
      append_dev(div97, i95);
      append_dev(div97, t208);
      append_dev(div245, t209);
      append_dev(div245, div98);
      append_dev(div98, i96);
      append_dev(div98, t210);
      append_dev(div245, t211);
      append_dev(div245, div99);
      append_dev(div99, i97);
      append_dev(div99, t212);
      append_dev(div245, t213);
      append_dev(div245, div100);
      append_dev(div100, i98);
      append_dev(div100, t214);
      append_dev(div245, t215);
      append_dev(div245, div101);
      append_dev(div101, i99);
      append_dev(div101, t216);
      append_dev(div245, t217);
      append_dev(div245, div102);
      append_dev(div102, i100);
      append_dev(div102, t218);
      append_dev(div245, t219);
      append_dev(div245, div103);
      append_dev(div103, i101);
      append_dev(div103, t220);
      append_dev(div245, t221);
      append_dev(div245, div104);
      append_dev(div104, i102);
      append_dev(div104, t222);
      append_dev(div245, t223);
      append_dev(div245, div105);
      append_dev(div105, i103);
      append_dev(div105, t224);
      append_dev(div245, t225);
      append_dev(div245, div106);
      append_dev(div106, i104);
      append_dev(div106, t226);
      append_dev(div245, t227);
      append_dev(div245, div107);
      append_dev(div107, i105);
      append_dev(div107, t228);
      append_dev(div245, t229);
      append_dev(div245, div108);
      append_dev(div108, i106);
      append_dev(div108, t230);
      append_dev(div245, t231);
      append_dev(div245, div109);
      append_dev(div109, i107);
      append_dev(div109, t232);
      append_dev(div245, t233);
      append_dev(div245, div110);
      append_dev(div110, i108);
      append_dev(div110, t234);
      append_dev(div245, t235);
      append_dev(div245, div111);
      append_dev(div111, i109);
      append_dev(div111, t236);
      append_dev(div245, t237);
      append_dev(div245, div112);
      append_dev(div112, i110);
      append_dev(div112, t238);
      append_dev(div245, t239);
      append_dev(div245, div113);
      append_dev(div113, i111);
      append_dev(div113, t240);
      append_dev(div245, t241);
      append_dev(div245, div114);
      append_dev(div114, i112);
      append_dev(div114, t242);
      append_dev(div245, t243);
      append_dev(div245, div115);
      append_dev(div115, i113);
      append_dev(div115, t244);
      append_dev(div245, t245);
      append_dev(div245, div116);
      append_dev(div116, i114);
      append_dev(div116, t246);
      append_dev(div245, t247);
      append_dev(div245, div117);
      append_dev(div117, i115);
      append_dev(div117, t248);
      append_dev(div245, t249);
      append_dev(div245, div118);
      append_dev(div118, i116);
      append_dev(div118, t250);
      append_dev(div245, t251);
      append_dev(div245, div119);
      append_dev(div119, i117);
      append_dev(div119, t252);
      append_dev(div245, t253);
      append_dev(div245, div120);
      append_dev(div120, i118);
      append_dev(div120, t254);
      append_dev(div245, t255);
      append_dev(div245, div121);
      append_dev(div121, i119);
      append_dev(div121, t256);
      append_dev(div245, t257);
      append_dev(div245, div122);
      append_dev(div122, i120);
      append_dev(div122, t258);
      append_dev(div245, t259);
      append_dev(div245, div123);
      append_dev(div123, i121);
      append_dev(div123, t260);
      append_dev(div245, t261);
      append_dev(div245, div124);
      append_dev(div124, i122);
      append_dev(div124, t262);
      append_dev(div245, t263);
      append_dev(div245, div125);
      append_dev(div125, i123);
      append_dev(div125, t264);
      append_dev(div245, t265);
      append_dev(div245, div126);
      append_dev(div126, i124);
      append_dev(div126, t266);
      append_dev(div245, t267);
      append_dev(div245, div127);
      append_dev(div127, i125);
      append_dev(div127, t268);
      append_dev(div245, t269);
      append_dev(div245, div128);
      append_dev(div128, i126);
      append_dev(div128, t270);
      append_dev(div245, t271);
      append_dev(div245, div129);
      append_dev(div129, i127);
      append_dev(div129, t272);
      append_dev(div245, t273);
      append_dev(div245, div130);
      append_dev(div130, i128);
      append_dev(div130, t274);
      append_dev(div245, t275);
      append_dev(div245, div131);
      append_dev(div131, i129);
      append_dev(div131, t276);
      append_dev(div245, t277);
      append_dev(div245, div132);
      append_dev(div132, i130);
      append_dev(div132, t278);
      append_dev(div245, t279);
      append_dev(div245, div133);
      append_dev(div133, i131);
      append_dev(div133, t280);
      append_dev(div245, t281);
      append_dev(div245, div134);
      append_dev(div134, i132);
      append_dev(div134, t282);
      append_dev(div245, t283);
      append_dev(div245, div135);
      append_dev(div135, i133);
      append_dev(div135, t284);
      append_dev(div245, t285);
      append_dev(div245, div136);
      append_dev(div136, i134);
      append_dev(div136, t286);
      append_dev(div245, t287);
      append_dev(div245, div137);
      append_dev(div137, i135);
      append_dev(div137, t288);
      append_dev(div245, t289);
      append_dev(div245, div138);
      append_dev(div138, i136);
      append_dev(div138, t290);
      append_dev(div245, t291);
      append_dev(div245, div139);
      append_dev(div139, i137);
      append_dev(div139, t292);
      append_dev(div245, t293);
      append_dev(div245, div140);
      append_dev(div140, i138);
      append_dev(div140, t294);
      append_dev(div245, t295);
      append_dev(div245, div141);
      append_dev(div141, i139);
      append_dev(div141, t296);
      append_dev(div245, t297);
      append_dev(div245, div142);
      append_dev(div142, i140);
      append_dev(div142, t298);
      append_dev(div245, t299);
      append_dev(div245, div143);
      append_dev(div143, i141);
      append_dev(div143, t300);
      append_dev(div245, t301);
      append_dev(div245, div144);
      append_dev(div144, i142);
      append_dev(div144, t302);
      append_dev(div245, t303);
      append_dev(div245, div145);
      append_dev(div145, i143);
      append_dev(div145, t304);
      append_dev(div245, t305);
      append_dev(div245, div146);
      append_dev(div146, i144);
      append_dev(div146, t306);
      append_dev(div245, t307);
      append_dev(div245, div147);
      append_dev(div147, i145);
      append_dev(div147, t308);
      append_dev(div245, t309);
      append_dev(div245, div148);
      append_dev(div148, i146);
      append_dev(div148, t310);
      append_dev(div245, t311);
      append_dev(div245, div149);
      append_dev(div149, i147);
      append_dev(div149, t312);
      append_dev(div245, t313);
      append_dev(div245, div150);
      append_dev(div150, i148);
      append_dev(div150, t314);
      append_dev(div245, t315);
      append_dev(div245, div151);
      append_dev(div151, i149);
      append_dev(div151, t316);
      append_dev(div245, t317);
      append_dev(div245, div152);
      append_dev(div152, i150);
      append_dev(div152, t318);
      append_dev(div245, t319);
      append_dev(div245, div153);
      append_dev(div153, i151);
      append_dev(div153, t320);
      append_dev(div245, t321);
      append_dev(div245, div154);
      append_dev(div154, i152);
      append_dev(div154, t322);
      append_dev(div245, t323);
      append_dev(div245, div155);
      append_dev(div155, i153);
      append_dev(div155, t324);
      append_dev(div245, t325);
      append_dev(div245, div156);
      append_dev(div156, i154);
      append_dev(div156, t326);
      append_dev(div245, t327);
      append_dev(div245, div157);
      append_dev(div157, i155);
      append_dev(div157, t328);
      append_dev(div245, t329);
      append_dev(div245, div158);
      append_dev(div158, i156);
      append_dev(div158, t330);
      append_dev(div245, t331);
      append_dev(div245, div159);
      append_dev(div159, i157);
      append_dev(div159, t332);
      append_dev(div245, t333);
      append_dev(div245, div160);
      append_dev(div160, i158);
      append_dev(div160, t334);
      append_dev(div245, t335);
      append_dev(div245, div161);
      append_dev(div161, i159);
      append_dev(div161, t336);
      append_dev(div245, t337);
      append_dev(div245, div162);
      append_dev(div162, i160);
      append_dev(div162, t338);
      append_dev(div245, t339);
      append_dev(div245, div163);
      append_dev(div163, i161);
      append_dev(div163, t340);
      append_dev(div245, t341);
      append_dev(div245, div164);
      append_dev(div164, i162);
      append_dev(div164, t342);
      append_dev(div245, t343);
      append_dev(div245, div165);
      append_dev(div165, i163);
      append_dev(div165, t344);
      append_dev(div245, t345);
      append_dev(div245, div166);
      append_dev(div166, i164);
      append_dev(div166, t346);
      append_dev(div245, t347);
      append_dev(div245, div167);
      append_dev(div167, i165);
      append_dev(div167, t348);
      append_dev(div245, t349);
      append_dev(div245, div168);
      append_dev(div168, i166);
      append_dev(div168, t350);
      append_dev(div245, t351);
      append_dev(div245, div169);
      append_dev(div169, i167);
      append_dev(div169, t352);
      append_dev(div245, t353);
      append_dev(div245, div170);
      append_dev(div170, i168);
      append_dev(div170, t354);
      append_dev(div245, t355);
      append_dev(div245, div171);
      append_dev(div171, i169);
      append_dev(div171, t356);
      append_dev(div245, t357);
      append_dev(div245, div172);
      append_dev(div172, i170);
      append_dev(div172, t358);
      append_dev(div245, t359);
      append_dev(div245, div173);
      append_dev(div173, i171);
      append_dev(div173, t360);
      append_dev(div245, t361);
      append_dev(div245, div174);
      append_dev(div174, i172);
      append_dev(div174, t362);
      append_dev(div245, t363);
      append_dev(div245, div175);
      append_dev(div175, i173);
      append_dev(div175, t364);
      append_dev(div245, t365);
      append_dev(div245, div176);
      append_dev(div176, i174);
      append_dev(div176, t366);
      append_dev(div245, t367);
      append_dev(div245, div177);
      append_dev(div177, i175);
      append_dev(div177, t368);
      append_dev(div245, t369);
      append_dev(div245, div178);
      append_dev(div178, i176);
      append_dev(div178, t370);
      append_dev(div245, t371);
      append_dev(div245, div179);
      append_dev(div179, i177);
      append_dev(div179, t372);
      append_dev(div245, t373);
      append_dev(div245, div180);
      append_dev(div180, i178);
      append_dev(div180, t374);
      append_dev(div245, t375);
      append_dev(div245, div181);
      append_dev(div181, i179);
      append_dev(div181, t376);
      append_dev(div245, t377);
      append_dev(div245, div182);
      append_dev(div182, i180);
      append_dev(div182, t378);
      append_dev(div245, t379);
      append_dev(div245, div183);
      append_dev(div183, i181);
      append_dev(div183, t380);
      append_dev(div245, t381);
      append_dev(div245, div184);
      append_dev(div184, i182);
      append_dev(div184, t382);
      append_dev(div245, t383);
      append_dev(div245, div185);
      append_dev(div185, i183);
      append_dev(div185, t384);
      append_dev(div245, t385);
      append_dev(div245, div186);
      append_dev(div186, i184);
      append_dev(div186, t386);
      append_dev(div245, t387);
      append_dev(div245, div187);
      append_dev(div187, i185);
      append_dev(div187, t388);
      append_dev(div245, t389);
      append_dev(div245, div188);
      append_dev(div188, i186);
      append_dev(div188, t390);
      append_dev(div245, t391);
      append_dev(div245, div189);
      append_dev(div189, i187);
      append_dev(div189, t392);
      append_dev(div245, t393);
      append_dev(div245, div190);
      append_dev(div190, i188);
      append_dev(div190, t394);
      append_dev(div245, t395);
      append_dev(div245, div191);
      append_dev(div191, i189);
      append_dev(div191, t396);
      append_dev(div245, t397);
      append_dev(div245, div192);
      append_dev(div192, i190);
      append_dev(div192, t398);
      append_dev(div245, t399);
      append_dev(div245, div193);
      append_dev(div193, i191);
      append_dev(div193, t400);
      append_dev(div245, t401);
      append_dev(div245, div194);
      append_dev(div194, i192);
      append_dev(div194, t402);
      append_dev(div245, t403);
      append_dev(div245, div195);
      append_dev(div195, i193);
      append_dev(div195, t404);
      append_dev(div245, t405);
      append_dev(div245, div196);
      append_dev(div196, i194);
      append_dev(div196, t406);
      append_dev(div245, t407);
      append_dev(div245, div197);
      append_dev(div197, i195);
      append_dev(div197, t408);
      append_dev(div245, t409);
      append_dev(div245, div198);
      append_dev(div198, i196);
      append_dev(div198, t410);
      append_dev(div245, t411);
      append_dev(div245, div199);
      append_dev(div199, i197);
      append_dev(div199, t412);
      append_dev(div245, t413);
      append_dev(div245, div200);
      append_dev(div200, i198);
      append_dev(div200, t414);
      append_dev(div245, t415);
      append_dev(div245, div201);
      append_dev(div201, i199);
      append_dev(div201, t416);
      append_dev(div245, t417);
      append_dev(div245, div202);
      append_dev(div202, i200);
      append_dev(div202, t418);
      append_dev(div245, t419);
      append_dev(div245, div203);
      append_dev(div203, i201);
      append_dev(div203, t420);
      append_dev(div245, t421);
      append_dev(div245, div204);
      append_dev(div204, i202);
      append_dev(div204, t422);
      append_dev(div245, t423);
      append_dev(div245, div205);
      append_dev(div205, i203);
      append_dev(div205, t424);
      append_dev(div245, t425);
      append_dev(div245, div206);
      append_dev(div206, i204);
      append_dev(div206, t426);
      append_dev(div245, t427);
      append_dev(div245, div207);
      append_dev(div207, i205);
      append_dev(div207, t428);
      append_dev(div245, t429);
      append_dev(div245, div208);
      append_dev(div208, i206);
      append_dev(div208, t430);
      append_dev(div245, t431);
      append_dev(div245, div209);
      append_dev(div209, i207);
      append_dev(div209, t432);
      append_dev(div245, t433);
      append_dev(div245, div210);
      append_dev(div210, i208);
      append_dev(div210, t434);
      append_dev(div245, t435);
      append_dev(div245, div211);
      append_dev(div211, i209);
      append_dev(div211, t436);
      append_dev(div245, t437);
      append_dev(div245, div212);
      append_dev(div212, i210);
      append_dev(div212, t438);
      append_dev(div245, t439);
      append_dev(div245, div213);
      append_dev(div213, i211);
      append_dev(div213, t440);
      append_dev(div245, t441);
      append_dev(div245, div214);
      append_dev(div214, i212);
      append_dev(div214, t442);
      append_dev(div245, t443);
      append_dev(div245, div215);
      append_dev(div215, i213);
      append_dev(div215, t444);
      append_dev(div245, t445);
      append_dev(div245, div216);
      append_dev(div216, i214);
      append_dev(div216, t446);
      append_dev(div245, t447);
      append_dev(div245, div217);
      append_dev(div217, i215);
      append_dev(div217, t448);
      append_dev(div245, t449);
      append_dev(div245, div218);
      append_dev(div218, i216);
      append_dev(div218, t450);
      append_dev(div245, t451);
      append_dev(div245, div219);
      append_dev(div219, i217);
      append_dev(div219, t452);
      append_dev(div245, t453);
      append_dev(div245, div220);
      append_dev(div220, i218);
      append_dev(div220, t454);
      append_dev(div245, t455);
      append_dev(div245, div221);
      append_dev(div221, i219);
      append_dev(div221, t456);
      append_dev(div245, t457);
      append_dev(div245, div222);
      append_dev(div222, i220);
      append_dev(div222, t458);
      append_dev(div245, t459);
      append_dev(div245, div223);
      append_dev(div223, i221);
      append_dev(div223, t460);
      append_dev(div245, t461);
      append_dev(div245, div224);
      append_dev(div224, i222);
      append_dev(div224, t462);
      append_dev(div245, t463);
      append_dev(div245, div225);
      append_dev(div225, i223);
      append_dev(div225, t464);
      append_dev(div245, t465);
      append_dev(div245, div226);
      append_dev(div226, i224);
      append_dev(div226, t466);
      append_dev(div245, t467);
      append_dev(div245, div227);
      append_dev(div227, i225);
      append_dev(div227, t468);
      append_dev(div245, t469);
      append_dev(div245, div228);
      append_dev(div228, i226);
      append_dev(div228, t470);
      append_dev(div245, t471);
      append_dev(div245, div229);
      append_dev(div229, i227);
      append_dev(div229, t472);
      append_dev(div245, t473);
      append_dev(div245, div230);
      append_dev(div230, i228);
      append_dev(div230, t474);
      append_dev(div245, t475);
      append_dev(div245, div231);
      append_dev(div231, i229);
      append_dev(div231, t476);
      append_dev(div245, t477);
      append_dev(div245, div232);
      append_dev(div232, i230);
      append_dev(div232, t478);
      append_dev(div245, t479);
      append_dev(div245, div233);
      append_dev(div233, i231);
      append_dev(div233, t480);
      append_dev(div245, t481);
      append_dev(div245, div234);
      append_dev(div234, i232);
      append_dev(div234, t482);
      append_dev(div245, t483);
      append_dev(div245, div235);
      append_dev(div235, i233);
      append_dev(div235, t484);
      append_dev(div245, t485);
      append_dev(div245, div236);
      append_dev(div236, i234);
      append_dev(div236, t486);
      append_dev(div245, t487);
      append_dev(div245, div237);
      append_dev(div237, i235);
      append_dev(div237, t488);
      append_dev(div245, t489);
      append_dev(div245, div238);
      append_dev(div238, i236);
      append_dev(div238, t490);
      append_dev(div245, t491);
      append_dev(div245, div239);
      append_dev(div239, i237);
      append_dev(div239, t492);
      append_dev(div245, t493);
      append_dev(div245, div240);
      append_dev(div240, i238);
      append_dev(div240, t494);
      append_dev(div245, t495);
      append_dev(div245, div241);
      append_dev(div241, i239);
      append_dev(div241, t496);
      append_dev(div245, t497);
      append_dev(div245, div242);
      append_dev(div242, i240);
      append_dev(div242, t498);
      append_dev(div245, t499);
      append_dev(div245, div243);
      append_dev(div243, i241);
      append_dev(div243, t500);
      append_dev(div245, t501);
      append_dev(div245, div244);
      append_dev(div244, i242);
      append_dev(div244, t502);

      if (!mounted) {
        dispose = listen_dev(div1, "click",
        /*toggleRed*/
        ctx[0], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div0);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div1);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(figure0);
      if (detaching) detach_dev(t7);
      if (detaching) detach_dev(figure1);
      if (detaching) detach_dev(t10);
      if (detaching) detach_dev(figure2);
      if (detaching) detach_dev(t13);
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t15);
      if (detaching) detach_dev(div246);
      mounted = false;
      dispose();
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
  validate_slots("About", slots, []);
  onMount(function () {
    jQuery(".selection").dropdown();
  });

  var toggleRed = function toggleRed() {
    jQuery(".header").toggleClass("my");
  };

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      toggleRed: toggleRed
    };
  };

  return [toggleRed];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
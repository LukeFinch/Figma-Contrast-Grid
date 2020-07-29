/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var limit = function (x, min, max) {
        if ( min === void 0 ) min=0;
        if ( max === void 0 ) max=1;

        return x < min ? min : x > max ? max : x;
    };

    var clip_rgb = function (rgb) {
        rgb._clipped = false;
        rgb._unclipped = rgb.slice(0);
        for (var i=0; i<=3; i++) {
            if (i < 3) {
                if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                rgb[i] = limit(rgb[i], 0, 255);
            } else if (i === 3) {
                rgb[i] = limit(rgb[i], 0, 1);
            }
        }
        return rgb;
    };

    // ported from jQuery's $.type
    var classToType = {};
    for (var i = 0, list = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i < list.length; i += 1) {
        var name = list[i];

        classToType[("[object " + name + "]")] = name.toLowerCase();
    }
    var type = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
    };

    var unpack = function (args, keyOrder) {
        if ( keyOrder === void 0 ) keyOrder=null;

    	// if called with more than 3 arguments, we return the arguments
        if (args.length >= 3) { return Array.prototype.slice.call(args); }
        // with less than 3 args we check if first arg is object
        // and use the keyOrder string to extract and sort properties
    	if (type(args[0]) == 'object' && keyOrder) {
    		return keyOrder.split('')
    			.filter(function (k) { return args[0][k] !== undefined; })
    			.map(function (k) { return args[0][k]; });
    	}
    	// otherwise we just return the first argument
    	// (which we suppose is an array of args)
        return args[0];
    };

    var last = function (args) {
        if (args.length < 2) { return null; }
        var l = args.length-1;
        if (type(args[l]) == 'string') { return args[l].toLowerCase(); }
        return null;
    };

    var PI = Math.PI;

    var utils = {
    	clip_rgb: clip_rgb,
    	limit: limit,
    	type: type,
    	unpack: unpack,
    	last: last,
    	PI: PI,
    	TWOPI: PI*2,
    	PITHIRD: PI/3,
    	DEG2RAD: PI / 180,
    	RAD2DEG: 180 / PI
    };

    var input = {
    	format: {},
    	autodetect: []
    };

    var last$1 = utils.last;
    var clip_rgb$1 = utils.clip_rgb;
    var type$1 = utils.type;


    var Color = function Color() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var me = this;
        if (type$1(args[0]) === 'object' &&
            args[0].constructor &&
            args[0].constructor === this.constructor) {
            // the argument is already a Color instance
            return args[0];
        }

        // last argument could be the mode
        var mode = last$1(args);
        var autodetect = false;

        if (!mode) {
            autodetect = true;
            if (!input.sorted) {
                input.autodetect = input.autodetect.sort(function (a,b) { return b.p - a.p; });
                input.sorted = true;
            }
            // auto-detect format
            for (var i = 0, list = input.autodetect; i < list.length; i += 1) {
                var chk = list[i];

                mode = chk.test.apply(chk, args);
                if (mode) { break; }
            }
        }

        if (input.format[mode]) {
            var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
            me._rgb = clip_rgb$1(rgb);
        } else {
            throw new Error('unknown format: '+args);
        }

        // add alpha channel
        if (me._rgb.length === 3) { me._rgb.push(1); }
    };

    Color.prototype.toString = function toString () {
        if (type$1(this.hex) == 'function') { return this.hex(); }
        return ("[" + (this._rgb.join(',')) + "]");
    };

    var Color_1 = Color;

    var chroma = function () {
    	var args = [], len = arguments.length;
    	while ( len-- ) args[ len ] = arguments[ len ];

    	return new (Function.prototype.bind.apply( chroma.Color, [ null ].concat( args) ));
    };

    chroma.Color = Color_1;
    chroma.version = '2.1.0';

    var chroma_1 = chroma;

    var unpack$1 = utils.unpack;
    var max = Math.max;

    var rgb2cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$1(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max(r,max(g,b));
        var f = k < 1 ? 1 / (1-k) : 0;
        var c = (1-r-k) * f;
        var m = (1-g-k) * f;
        var y = (1-b-k) * f;
        return [c,m,y,k];
    };

    var rgb2cmyk_1 = rgb2cmyk;

    var unpack$2 = utils.unpack;

    var cmyk2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$2(args, 'cmyk');
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) { return [0,0,0,alpha]; }
        return [
            c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
            m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
            y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
            alpha
        ];
    };

    var cmyk2rgb_1 = cmyk2rgb;

    var unpack$3 = utils.unpack;
    var type$2 = utils.type;



    Color_1.prototype.cmyk = function() {
        return rgb2cmyk_1(this._rgb);
    };

    chroma_1.cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['cmyk']) ));
    };

    input.format.cmyk = cmyk2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$3(args, 'cmyk');
            if (type$2(args) === 'array' && args.length === 4) {
                return 'cmyk';
            }
        }
    });

    var unpack$4 = utils.unpack;
    var last$2 = utils.last;
    var rnd = function (a) { return Math.round(a*100)/100; };

    /*
     * supported arguments:
     * - hsl2css(h,s,l)
     * - hsl2css(h,s,l,a)
     * - hsl2css([h,s,l], mode)
     * - hsl2css([h,s,l,a], mode)
     * - hsl2css({h,s,l,a}, mode)
     */
    var hsl2css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hsla = unpack$4(args, 'hsla');
        var mode = last$2(args) || 'lsa';
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1]*100) + '%';
        hsla[2] = rnd(hsla[2]*100) + '%';
        if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = 'hsla';
        } else {
            hsla.length = 3;
        }
        return (mode + "(" + (hsla.join(',')) + ")");
    };

    var hsl2css_1 = hsl2css;

    var unpack$5 = utils.unpack;

    /*
     * supported arguments:
     * - rgb2hsl(r,g,b)
     * - rgb2hsl(r,g,b,a)
     * - rgb2hsl([r,g,b])
     * - rgb2hsl([r,g,b,a])
     * - rgb2hsl({r,g,b,a})
     */
    var rgb2hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$5(args, 'rgba');
        var r = args[0];
        var g = args[1];
        var b = args[2];

        r /= 255;
        g /= 255;
        b /= 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);

        var l = (max + min) / 2;
        var s, h;

        if (max === min){
            s = 0;
            h = Number.NaN;
        } else {
            s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        }

        if (r == max) { h = (g - b) / (max - min); }
        else if (g == max) { h = 2 + (b - r) / (max - min); }
        else if (b == max) { h = 4 + (r - g) / (max - min); }

        h *= 60;
        if (h < 0) { h += 360; }
        if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
        return [h,s,l];
    };

    var rgb2hsl_1 = rgb2hsl;

    var unpack$6 = utils.unpack;
    var last$3 = utils.last;


    var round = Math.round;

    /*
     * supported arguments:
     * - rgb2css(r,g,b)
     * - rgb2css(r,g,b,a)
     * - rgb2css([r,g,b], mode)
     * - rgb2css([r,g,b,a], mode)
     * - rgb2css({r,g,b,a}, mode)
     */
    var rgb2css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$6(args, 'rgba');
        var mode = last$3(args) || 'rgb';
        if (mode.substr(0,3) == 'hsl') {
            return hsl2css_1(rgb2hsl_1(rgba), mode);
        }
        rgba[0] = round(rgba[0]);
        rgba[1] = round(rgba[1]);
        rgba[2] = round(rgba[2]);
        if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = 'rgba';
        }
        return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
    };

    var rgb2css_1 = rgb2css;

    var unpack$7 = utils.unpack;
    var round$1 = Math.round;

    var hsl2rgb = function () {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$7(args, 'hsl');
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r,g,b;
        if (s === 0) {
            r = g = b = l*255;
        } else {
            var t3 = [0,0,0];
            var c = [0,0,0];
            var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1/3;
            t3[1] = h_;
            t3[2] = h_ - 1/3;
            for (var i=0; i<3; i++) {
                if (t3[i] < 0) { t3[i] += 1; }
                if (t3[i] > 1) { t3[i] -= 1; }
                if (6 * t3[i] < 1)
                    { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                else if (2 * t3[i] < 1)
                    { c[i] = t2; }
                else if (3 * t3[i] < 2)
                    { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                else
                    { c[i] = t1; }
            }
            (assign = [round$1(c[0]*255),round$1(c[1]*255),round$1(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
        }
        if (args.length > 3) {
            // keep alpha channel
            return [r,g,b,args[3]];
        }
        return [r,g,b,1];
    };

    var hsl2rgb_1 = hsl2rgb;

    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

    var round$2 = Math.round;

    var css2rgb = function (css) {
        css = css.toLowerCase().trim();
        var m;

        if (input.format.named) {
            try {
                return input.format.named(css);
            } catch (e) {
                // eslint-disable-next-line
            }
        }

        // rgb(250,20,0)
        if ((m = css.match(RE_RGB))) {
            var rgb = m.slice(1,4);
            for (var i=0; i<3; i++) {
                rgb[i] = +rgb[i];
            }
            rgb[3] = 1;  // default alpha
            return rgb;
        }

        // rgba(250,20,0,0.4)
        if ((m = css.match(RE_RGBA))) {
            var rgb$1 = m.slice(1,5);
            for (var i$1=0; i$1<4; i$1++) {
                rgb$1[i$1] = +rgb$1[i$1];
            }
            return rgb$1;
        }

        // rgb(100%,0%,0%)
        if ((m = css.match(RE_RGB_PCT))) {
            var rgb$2 = m.slice(1,4);
            for (var i$2=0; i$2<3; i$2++) {
                rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;  // default alpha
            return rgb$2;
        }

        // rgba(100%,0%,0%,0.4)
        if ((m = css.match(RE_RGBA_PCT))) {
            var rgb$3 = m.slice(1,5);
            for (var i$3=0; i$3<3; i$3++) {
                rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
        }

        // hsl(0,100%,50%)
        if ((m = css.match(RE_HSL))) {
            var hsl = m.slice(1,4);
            hsl[1] *= 0.01;
            hsl[2] *= 0.01;
            var rgb$4 = hsl2rgb_1(hsl);
            rgb$4[3] = 1;
            return rgb$4;
        }

        // hsla(0,100%,50%,0.5)
        if ((m = css.match(RE_HSLA))) {
            var hsl$1 = m.slice(1,4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb_1(hsl$1);
            rgb$5[3] = +m[4];  // default alpha = 1
            return rgb$5;
        }
    };

    css2rgb.test = function (s) {
        return RE_RGB.test(s) ||
            RE_RGBA.test(s) ||
            RE_RGB_PCT.test(s) ||
            RE_RGBA_PCT.test(s) ||
            RE_HSL.test(s) ||
            RE_HSLA.test(s);
    };

    var css2rgb_1 = css2rgb;

    var type$3 = utils.type;




    Color_1.prototype.css = function(mode) {
        return rgb2css_1(this._rgb, mode);
    };

    chroma_1.css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['css']) ));
    };

    input.format.css = css2rgb_1;

    input.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
                return 'css';
            }
        }
    });

    var unpack$8 = utils.unpack;

    input.format.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$8(args, 'rgba');
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };

    chroma_1.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['gl']) ));
    };

    Color_1.prototype.gl = function() {
        var rgb = this._rgb;
        return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
    };

    var unpack$9 = utils.unpack;

    var rgb2hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$9(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var c = delta * 100 / 255;
        var _g = min / (255 - delta) * 100;
        var h;
        if (delta === 0) {
            h = Number.NaN;
        } else {
            if (r === max) { h = (g - b) / delta; }
            if (g === max) { h = 2+(b - r) / delta; }
            if (b === max) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, c, _g];
    };

    var rgb2hcg_1 = rgb2hcg;

    var unpack$a = utils.unpack;
    var floor = Math.floor;

    /*
     * this is basically just HSV with some minor tweaks
     *
     * hue.. [0..360]
     * chroma .. [0..1]
     * grayness .. [0..1]
     */

    var hcg2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$a(args, 'hcg');
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r,g,b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
            r = g = b = _g;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;
            var i = floor(h);
            var f = h - i;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var hcg2rgb_1 = hcg2rgb;

    var unpack$b = utils.unpack;
    var type$4 = utils.type;






    Color_1.prototype.hcg = function() {
        return rgb2hcg_1(this._rgb);
    };

    chroma_1.hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcg']) ));
    };

    input.format.hcg = hcg2rgb_1;

    input.autodetect.push({
        p: 1,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$b(args, 'hcg');
            if (type$4(args) === 'array' && args.length === 3) {
                return 'hcg';
            }
        }
    });

    var unpack$c = utils.unpack;
    var last$4 = utils.last;
    var round$3 = Math.round;

    var rgb2hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$c(args, 'rgba');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last$4(args) || 'auto';
        if (a === undefined) { a = 1; }
        if (mode === 'auto') {
            mode = a < 1 ? 'rgba' : 'rgb';
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16); //#.toUpperCase();
        str = str.substr(str.length - 6);
        var hxa = '0' + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
            case 'rgba': return ("#" + str + hxa);
            case 'argb': return ("#" + hxa + str);
            default: return ("#" + str);
        }
    };

    var rgb2hex_1 = rgb2hex;

    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

    var hex2rgb = function (hex) {
        if (hex.match(RE_HEX)) {
            // remove optional leading #
            if (hex.length === 4 || hex.length === 7) {
                hex = hex.substr(1);
            }
            // expand short-notation to full six-digit
            if (hex.length === 3) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 0xFF;
            var b = u & 0xFF;
            return [r,g,b,1];
        }

        // match rgba hex format, eg #FF000077
        if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) {
                // remove optional leading #
                hex = hex.substr(1);
            }
            // expand short-notation to full eight-digit
            if (hex.length === 4) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 0xFF;
            var g$1 = u$1 >> 16 & 0xFF;
            var b$1 = u$1 >> 8 & 0xFF;
            var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
            return [r$1,g$1,b$1,a];
        }

        // we used to check for css colors here
        // if _input.css? and rgb = _input.css hex
        //     return rgb

        throw new Error(("unknown hex color: " + hex));
    };

    var hex2rgb_1 = hex2rgb;

    var type$5 = utils.type;




    Color_1.prototype.hex = function(mode) {
        return rgb2hex_1(this._rgb, mode);
    };

    chroma_1.hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hex']) ));
    };

    input.format.hex = hex2rgb_1;
    input.autodetect.push({
        p: 4,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$5(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                return 'hex';
            }
        }
    });

    var unpack$d = utils.unpack;
    var TWOPI = utils.TWOPI;
    var min = Math.min;
    var sqrt = Math.sqrt;
    var acos = Math.acos;

    var rgb2hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
        */
        var ref = unpack$d(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min(r,g,b);
        var i = (r+g+b) / 3;
        var s = i > 0 ? 1 - min_/i : 0;
        if (s === 0) {
            h = NaN;
        } else {
            h = ((r-g)+(r-b)) / 2;
            h /= sqrt((r-g)*(r-g) + (r-b)*(g-b));
            h = acos(h);
            if (b > g) {
                h = TWOPI - h;
            }
            h /= TWOPI;
        }
        return [h*360,s,i];
    };

    var rgb2hsi_1 = rgb2hsi;

    var unpack$e = utils.unpack;
    var limit$1 = utils.limit;
    var TWOPI$1 = utils.TWOPI;
    var PITHIRD = utils.PITHIRD;
    var cos = Math.cos;

    /*
     * hue [0..360]
     * saturation [0..1]
     * intensity [0..1]
     */
    var hsi2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
        */
        args = unpack$e(args, 'hsi');
        var h = args[0];
        var s = args[1];
        var i = args[2];
        var r,g,b;

        if (isNaN(h)) { h = 0; }
        if (isNaN(s)) { s = 0; }
        // normalize hue
        if (h > 360) { h -= 360; }
        if (h < 0) { h += 360; }
        h /= 360;
        if (h < 1/3) {
            b = (1-s)/3;
            r = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            g = 1 - (b+r);
        } else if (h < 2/3) {
            h -= 1/3;
            r = (1-s)/3;
            g = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            b = 1 - (r+g);
        } else {
            h -= 2/3;
            g = (1-s)/3;
            b = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            r = 1 - (g+b);
        }
        r = limit$1(i*r*3);
        g = limit$1(i*g*3);
        b = limit$1(i*b*3);
        return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
    };

    var hsi2rgb_1 = hsi2rgb;

    var unpack$f = utils.unpack;
    var type$6 = utils.type;






    Color_1.prototype.hsi = function() {
        return rgb2hsi_1(this._rgb);
    };

    chroma_1.hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsi']) ));
    };

    input.format.hsi = hsi2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$f(args, 'hsi');
            if (type$6(args) === 'array' && args.length === 3) {
                return 'hsi';
            }
        }
    });

    var unpack$g = utils.unpack;
    var type$7 = utils.type;






    Color_1.prototype.hsl = function() {
        return rgb2hsl_1(this._rgb);
    };

    chroma_1.hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsl']) ));
    };

    input.format.hsl = hsl2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$g(args, 'hsl');
            if (type$7(args) === 'array' && args.length === 3) {
                return 'hsl';
            }
        }
    });

    var unpack$h = utils.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;

    /*
     * supported arguments:
     * - rgb2hsv(r,g,b)
     * - rgb2hsv([r,g,b])
     * - rgb2hsv({r,g,b})
     */
    var rgb2hsl$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$h(args, 'rgb');
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h,s,v;
        v = max_ / 255.0;
        if (max_ === 0) {
            h = Number.NaN;
            s = 0;
        } else {
            s = delta / max_;
            if (r === max_) { h = (g - b) / delta; }
            if (g === max_) { h = 2+(b - r) / delta; }
            if (b === max_) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, s, v]
    };

    var rgb2hsv = rgb2hsl$1;

    var unpack$i = utils.unpack;
    var floor$1 = Math.floor;

    var hsv2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$i(args, 'hsv');
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r,g,b;
        v *= 255;
        if (s === 0) {
            r = g = b = v;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;

            var i = floor$1(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r,g,b,args.length > 3?args[3]:1];
    };

    var hsv2rgb_1 = hsv2rgb;

    var unpack$j = utils.unpack;
    var type$8 = utils.type;






    Color_1.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
    };

    chroma_1.hsv = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsv']) ));
    };

    input.format.hsv = hsv2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$j(args, 'hsv');
            if (type$8(args) === 'array' && args.length === 3) {
                return 'hsv';
            }
        }
    });

    var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,

        // D65 standard referent
        Xn: 0.950470,
        Yn: 1,
        Zn: 1.088830,

        t0: 0.137931034,  // 4 / 29
        t1: 0.206896552,  // 6 / 29
        t2: 0.12841855,   // 3 * t1 * t1
        t3: 0.008856452,  // t1 * t1 * t1
    };

    var unpack$k = utils.unpack;
    var pow = Math.pow;

    var rgb2lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$k(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r,g,b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };

    var rgb_xyz = function (r) {
        if ((r /= 255) <= 0.04045) { return r / 12.92; }
        return pow((r + 0.055) / 1.055, 2.4);
    };

    var xyz_lab = function (t) {
        if (t > labConstants.t3) { return pow(t, 1 / 3); }
        return t / labConstants.t2 + labConstants.t0;
    };

    var rgb2xyz = function (r,g,b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
        var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
        return [x,y,z];
    };

    var rgb2lab_1 = rgb2lab;

    var unpack$l = utils.unpack;
    var pow$1 = Math.pow;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var lab2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$l(args, 'lab');
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x,y,z, r,g,b_;

        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;

        y = labConstants.Yn * lab_xyz(y);
        x = labConstants.Xn * lab_xyz(x);
        z = labConstants.Zn * lab_xyz(z);

        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
        g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

        return [r,g,b_,args.length > 3 ? args[3] : 1];
    };

    var xyz_rgb = function (r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055)
    };

    var lab_xyz = function (t) {
        return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0)
    };

    var lab2rgb_1 = lab2rgb;

    var unpack$m = utils.unpack;
    var type$9 = utils.type;






    Color_1.prototype.lab = function() {
        return rgb2lab_1(this._rgb);
    };

    chroma_1.lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lab']) ));
    };

    input.format.lab = lab2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$m(args, 'lab');
            if (type$9(args) === 'array' && args.length === 3) {
                return 'lab';
            }
        }
    });

    var unpack$n = utils.unpack;
    var RAD2DEG = utils.RAD2DEG;
    var sqrt$1 = Math.sqrt;
    var atan2 = Math.atan2;
    var round$4 = Math.round;

    var lab2lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$n(args, 'lab');
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$1(a * a + b * b);
        var h = (atan2(b, a) * RAD2DEG + 360) % 360;
        if (round$4(c*10000) === 0) { h = Number.NaN; }
        return [l, c, h];
    };

    var lab2lch_1 = lab2lch;

    var unpack$o = utils.unpack;



    var rgb2lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$o(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab_1(r,g,b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch_1(l,a,b_);
    };

    var rgb2lch_1 = rgb2lch;

    var unpack$p = utils.unpack;
    var DEG2RAD = utils.DEG2RAD;
    var sin = Math.sin;
    var cos$1 = Math.cos;

    var lch2lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
        These formulas were invented by David Dalrymple to obtain maximum contrast without going
        out of gamut if the parameters are in the range 0-1.

        A saturation multiplier was added by Gregor Aisch
        */
        var ref = unpack$p(args, 'lch');
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) { h = 0; }
        h = h * DEG2RAD;
        return [l, cos$1(h) * c, sin(h) * c]
    };

    var lch2lab_1 = lch2lab;

    var unpack$q = utils.unpack;



    var lch2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$q(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab_1 (l,c,h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb_1 (L,a,b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var lch2rgb_1 = lch2rgb;

    var unpack$r = utils.unpack;


    var hcl2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hcl = unpack$r(args, 'hcl').reverse();
        return lch2rgb_1.apply(void 0, hcl);
    };

    var hcl2rgb_1 = hcl2rgb;

    var unpack$s = utils.unpack;
    var type$a = utils.type;






    Color_1.prototype.lch = function() { return rgb2lch_1(this._rgb); };
    Color_1.prototype.hcl = function() { return rgb2lch_1(this._rgb).reverse(); };

    chroma_1.lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lch']) ));
    };
    chroma_1.hcl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcl']) ));
    };

    input.format.lch = lch2rgb_1;
    input.format.hcl = hcl2rgb_1;

    ['lch','hcl'].forEach(function (m) { return input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$s(args, m);
            if (type$a(args) === 'array' && args.length === 3) {
                return m;
            }
        }
    }); });

    /**
    	X11 color names

    	http://www.w3.org/TR/css3-color/#svg-color
    */

    var w3cx11 = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflower: '#6495ed',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        laserlemon: '#ffff54',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrod: '#fafad2',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        maroon2: '#7f0000',
        maroon3: '#b03060',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        purple2: '#7f007f',
        purple3: '#a020f0',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };

    var w3cx11_1 = w3cx11;

    var type$b = utils.type;





    Color_1.prototype.name = function() {
        var hex = rgb2hex_1(this._rgb, 'rgb');
        for (var i = 0, list = Object.keys(w3cx11_1); i < list.length; i += 1) {
            var n = list[i];

            if (w3cx11_1[n] === hex) { return n.toLowerCase(); }
        }
        return hex;
    };

    input.format.named = function (name) {
        name = name.toLowerCase();
        if (w3cx11_1[name]) { return hex2rgb_1(w3cx11_1[name]); }
        throw new Error('unknown color name: '+name);
    };

    input.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
                return 'named';
            }
        }
    });

    var unpack$t = utils.unpack;

    var rgb2num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$t(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
    };

    var rgb2num_1 = rgb2num;

    var type$c = utils.type;

    var num2rgb = function (num) {
        if (type$c(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
            var r = num >> 16;
            var g = (num >> 8) & 0xFF;
            var b = num & 0xFF;
            return [r,g,b,1];
        }
        throw new Error("unknown num color: "+num);
    };

    var num2rgb_1 = num2rgb;

    var type$d = utils.type;



    Color_1.prototype.num = function() {
        return rgb2num_1(this._rgb);
    };

    chroma_1.num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['num']) ));
    };

    input.format.num = num2rgb_1;

    input.autodetect.push({
        p: 5,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                return 'num';
            }
        }
    });

    var unpack$u = utils.unpack;
    var type$e = utils.type;
    var round$5 = Math.round;

    Color_1.prototype.rgb = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        if (rnd === false) { return this._rgb.slice(0,3); }
        return this._rgb.slice(0,3).map(round$5);
    };

    Color_1.prototype.rgba = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        return this._rgb.slice(0,4).map(function (v,i) {
            return i<3 ? (rnd === false ? v : round$5(v)) : v;
        });
    };

    chroma_1.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['rgb']) ));
    };

    input.format.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$u(args, 'rgba');
        if (rgba[3] === undefined) { rgba[3] = 1; }
        return rgba;
    };

    input.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$u(args, 'rgba');
            if (type$e(args) === 'array' && (args.length === 3 ||
                args.length === 4 && type$e(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                return 'rgb';
            }
        }
    });

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     */

    var log = Math.log;

    var temperature2rgb = function (kelvin) {
        var temp = kelvin / 100;
        var r,g,b;
        if (temp < 66) {
            r = 255;
            g = -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log(g);
            b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log(b);
        } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log(g);
            b = 255;
        }
        return [r,g,b,1];
    };

    var temperature2rgb_1 = temperature2rgb;

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     **/


    var unpack$v = utils.unpack;
    var round$6 = Math.round;

    var rgb2temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$v(args, 'rgb');
        var r = rgb[0], b = rgb[2];
        var minTemp = 1000;
        var maxTemp = 40000;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb_1(temp);
            if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                maxTemp = temp;
            } else {
                minTemp = temp;
            }
        }
        return round$6(temp);
    };

    var rgb2temperature_1 = rgb2temperature;

    Color_1.prototype.temp =
    Color_1.prototype.kelvin =
    Color_1.prototype.temperature = function() {
        return rgb2temperature_1(this._rgb);
    };

    chroma_1.temp =
    chroma_1.kelvin =
    chroma_1.temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['temp']) ));
    };

    input.format.temp =
    input.format.kelvin =
    input.format.temperature = temperature2rgb_1;

    var type$f = utils.type;

    Color_1.prototype.alpha = function(a, mutate) {
        if ( mutate === void 0 ) mutate=false;

        if (a !== undefined && type$f(a) === 'number') {
            if (mutate) {
                this._rgb[3] = a;
                return this;
            }
            return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
        }
        return this._rgb[3];
    };

    Color_1.prototype.clipped = function() {
        return this._rgb._clipped || false;
    };

    Color_1.prototype.darken = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lab = me.lab();
    	lab[0] -= labConstants.Kn * amount;
    	return new Color_1(lab, 'lab').alpha(me.alpha(), true);
    };

    Color_1.prototype.brighten = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.darken(-amount);
    };

    Color_1.prototype.darker = Color_1.prototype.darken;
    Color_1.prototype.brighter = Color_1.prototype.brighten;

    Color_1.prototype.get = function(mc) {
        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel);
            if (i > -1) { return src[i]; }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var type$g = utils.type;
    var pow$2 = Math.pow;

    var EPS = 1e-7;
    var MAX_ITER = 20;

    Color_1.prototype.luminance = function(lum) {
        if (lum !== undefined && type$g(lum) === 'number') {
            if (lum === 0) {
                // return pure black
                return new Color_1([0,0,0,this._rgb[3]], 'rgb');
            }
            if (lum === 1) {
                // return pure white
                return new Color_1([255,255,255,this._rgb[3]], 'rgb');
            }
            // compute new color using...
            var cur_lum = this.luminance();
            var mode = 'rgb';
            var max_iter = MAX_ITER;

            var test = function (low, high) {
                var mid = low.interpolate(high, 0.5, mode);
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) {
                    // close enough
                    return mid;
                }
                return lm > lum ? test(low, mid) : test(mid, high);
            };

            var rgb = (cur_lum > lum ? test(new Color_1([0,0,0]), this) : test(this, new Color_1([255,255,255]))).rgb();
            return new Color_1(rgb.concat( [this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
    };


    var rgb2luminance = function (r,g,b) {
        // relative luminance
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    var luminance_x = function (x) {
        x /= 255;
        return x <= 0.03928 ? x/12.92 : pow$2((x+0.055)/1.055, 2.4);
    };

    var interpolator = {};

    var type$h = utils.type;


    var mix = function (col1, col2, f) {
        if ( f === void 0 ) f=0.5;
        var rest = [], len = arguments.length - 3;
        while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

        var mode = rest[0] || 'lrgb';
        if (!interpolator[mode] && !rest.length) {
            // fall back to the first supported mode
            mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
            throw new Error(("interpolation mode " + mode + " is not defined"));
        }
        if (type$h(col1) !== 'object') { col1 = new Color_1(col1); }
        if (type$h(col2) !== 'object') { col2 = new Color_1(col2); }
        return interpolator[mode](col1, col2, f)
            .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };

    Color_1.prototype.mix =
    Color_1.prototype.interpolate = function(col2, f) {
    	if ( f === void 0 ) f=0.5;
    	var rest = [], len = arguments.length - 2;
    	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

    	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
    };

    Color_1.prototype.premultiply = function(mutate) {
    	if ( mutate === void 0 ) mutate=false;

    	var rgb = this._rgb;
    	var a = rgb[3];
    	if (mutate) {
    		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
    		return this;
    	} else {
    		return new Color_1([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
    	}
    };

    Color_1.prototype.saturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lch = me.lch();
    	lch[1] += labConstants.Kn * amount;
    	if (lch[1] < 0) { lch[1] = 0; }
    	return new Color_1(lch, 'lch').alpha(me.alpha(), true);
    };

    Color_1.prototype.desaturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.saturate(-amount);
    };

    var type$i = utils.type;

    Color_1.prototype.set = function(mc, value, mutate) {
        if ( mutate === void 0 ) mutate=false;

        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel);
            if (i > -1) {
                if (type$i(value) == 'string') {
                    switch(value.charAt(0)) {
                        case '+': src[i] += +value; break;
                        case '-': src[i] += +value; break;
                        case '*': src[i] *= +(value.substr(1)); break;
                        case '/': src[i] /= +(value.substr(1)); break;
                        default: src[i] = +value;
                    }
                } else if (type$i(value) === 'number') {
                    src[i] = value;
                } else {
                    throw new Error("unsupported value for Color.set");
                }
                var out = new Color_1(src, mode);
                if (mutate) {
                    this._rgb = out._rgb;
                    return this;
                }
                return out;
            }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var rgb$1 = function (col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color_1(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'rgb'
        )
    };

    // register interpolator
    interpolator.rgb = rgb$1;

    var sqrt$2 = Math.sqrt;
    var pow$3 = Math.pow;

    var lrgb = function (col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color_1(
            sqrt$2(pow$3(x1,2) * (1-f) + pow$3(x2,2) * f),
            sqrt$2(pow$3(y1,2) * (1-f) + pow$3(y2,2) * f),
            sqrt$2(pow$3(z1,2) * (1-f) + pow$3(z2,2) * f),
            'rgb'
        )
    };

    // register interpolator
    interpolator.lrgb = lrgb;

    var lab$1 = function (col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color_1(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'lab'
        )
    };

    // register interpolator
    interpolator.lab = lab$1;

    var _hsx = function (col1, col2, f, m) {
        var assign, assign$1;

        var xyz0, xyz1;
        if (m === 'hsl') {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
        } else if (m === 'hsv') {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
        } else if (m === 'hcg') {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
        } else if (m === 'hsi') {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
        } else if (m === 'lch' || m === 'hcl') {
            m = 'hcl';
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
        }

        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === 'h') {
            (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
            (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
        }

        var sat, hue, lbv, dh;

        if (!isNaN(hue0) && !isNaN(hue1)) {
            // both colors have hue
            if (hue1 > hue0 && hue1 - hue0 > 180) {
                dh = hue1-(hue0+360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                dh = hue1+360-hue0;
            } else{
                dh = hue1 - hue0;
            }
            hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
        } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
        } else {
            hue = Number.NaN;
        }

        if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
        lbv = lbv0 + f * (lbv1-lbv0);
        return new Color_1([hue, sat, lbv], m);
    };

    var lch$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'lch');
    };

    // register interpolator
    interpolator.lch = lch$1;
    interpolator.hcl = lch$1;

    var num$1 = function (col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color_1(c1 + f * (c2-c1), 'num')
    };

    // register interpolator
    interpolator.num = num$1;

    var hcg$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hcg');
    };

    // register interpolator
    interpolator.hcg = hcg$1;

    var hsi$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsi');
    };

    // register interpolator
    interpolator.hsi = hsi$1;

    var hsl$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsl');
    };

    // register interpolator
    interpolator.hsl = hsl$1;

    var hsv$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsv');
    };

    // register interpolator
    interpolator.hsv = hsv$1;

    var clip_rgb$2 = utils.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$3 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$1 = Math.sin;
    var atan2$1 = Math.atan2;

    var average = function (colors, mode, weights) {
        if ( mode === void 0 ) mode='lrgb';
        if ( weights === void 0 ) weights=null;

        var l = colors.length;
        if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
        // normalize weights
        var k = l / weights.reduce(function(a, b) { return a + b; });
        weights.forEach(function (w,i) { weights[i] *= k; });
        // convert colors to Color objects
        colors = colors.map(function (c) { return new Color_1(c); });
        if (mode === 'lrgb') {
            return _average_lrgb(colors, weights)
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        // initial color
        for (var i=0; i<xyz.length; i++) {
            xyz[i] = (xyz[i] || 0) * weights[0];
            cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
            if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                var A = xyz[i] / 180 * PI$1;
                dx += cos$2(A) * weights[0];
                dy += sin$1(A) * weights[0];
            }
        }

        var alpha = first.alpha() * weights[0];
        colors.forEach(function (c,ci) {
            var xyz2 = c.get(mode);
            alpha += c.alpha() * weights[ci+1];
            for (var i=0; i<xyz.length; i++) {
                if (!isNaN(xyz2[i])) {
                    cnt[i] += weights[ci+1];
                    if (mode.charAt(i) === 'h') {
                        var A = xyz2[i] / 180 * PI$1;
                        dx += cos$2(A) * weights[ci+1];
                        dy += sin$1(A) * weights[ci+1];
                    } else {
                        xyz[i] += xyz2[i] * weights[ci+1];
                    }
                }
            }
        });

        for (var i$1=0; i$1<xyz.length; i$1++) {
            if (mode.charAt(i$1) === 'h') {
                var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                while (A$1 < 0) { A$1 += 360; }
                while (A$1 >= 360) { A$1 -= 360; }
                xyz[i$1] = A$1;
            } else {
                xyz[i$1] = xyz[i$1]/cnt[i$1];
            }
        }
        alpha /= l;
        return (new Color_1(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };


    var _average_lrgb = function (colors, weights) {
        var l = colors.length;
        var xyz = [0,0,0,0];
        for (var i=0; i < colors.length; i++) {
            var col = colors[i];
            var f = weights[i] / l;
            var rgb = col._rgb;
            xyz[0] += pow$4(rgb[0],2) * f;
            xyz[1] += pow$4(rgb[1],2) * f;
            xyz[2] += pow$4(rgb[2],2) * f;
            xyz[3] += rgb[3] * f;
        }
        xyz[0] = sqrt$3(xyz[0]);
        xyz[1] = sqrt$3(xyz[1]);
        xyz[2] = sqrt$3(xyz[2]);
        if (xyz[3] > 0.9999999) { xyz[3] = 1; }
        return new Color_1(clip_rgb$2(xyz));
    };

    // minimal multi-purpose interface

    // @requires utils color analyze


    var type$j = utils.type;

    var pow$5 = Math.pow;

    var scale = function(colors) {

        // constructor
        var _mode = 'rgb';
        var _nacol = chroma_1('#ccc');
        var _spread = 0;
        // const _fixed = false;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0,0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;

        // private methods

        var setColors = function(colors) {
            colors = colors || ['#fff', '#000'];
            if (colors && type$j(colors) === 'string' && chroma_1.brewer &&
                chroma_1.brewer[colors.toLowerCase()]) {
                colors = chroma_1.brewer[colors.toLowerCase()];
            }
            if (type$j(colors) === 'array') {
                // handle single color
                if (colors.length === 1) {
                    colors = [colors[0], colors[0]];
                }
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for (var c=0; c<colors.length; c++) {
                    colors[c] = chroma_1(colors[c]);
                }
                // auto-fill color position
                _pos.length = 0;
                for (var c$1=0; c$1<colors.length; c$1++) {
                    _pos.push(c$1/(colors.length-1));
                }
            }
            resetCache();
            return _colors = colors;
        };

        var getClass = function(value) {
            if (_classes != null) {
                var n = _classes.length-1;
                var i = 0;
                while (i < n && value >= _classes[i]) {
                    i++;
                }
                return i-1;
            }
            return 0;
        };

        var tMapLightness = function (t) { return t; };
        var tMapDomain = function (t) { return t; };

        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };

        var getColor = function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) { bypassMap = false; }
            if (isNaN(val) || (val === null)) { return _nacol; }
            if (!bypassMap) {
                if (_classes && (_classes.length > 2)) {
                    // find the class
                    var c = getClass(val);
                    t = c / (_classes.length-2);
                } else if (_max !== _min) {
                    // just interpolate between min/max
                    t = (val - _min) / (_max - _min);
                } else {
                    t = 1;
                }
            } else {
                t = val;
            }

            // domain map
            t = tMapDomain(t);

            if (!bypassMap) {
                t = tMapLightness(t);  // lightness correction
            }

            if (_gamma !== 1) { t = pow$5(t, _gamma); }

            t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

            t = Math.min(1, Math.max(0, t));

            var k = Math.floor(t * 10000);

            if (_useCache && _colorCache[k]) {
                col = _colorCache[k];
            } else {
                if (type$j(_colors) === 'array') {
                    //for i in [0.._pos.length-1]
                    for (var i=0; i<_pos.length; i++) {
                        var p = _pos[i];
                        if (t <= p) {
                            col = _colors[i];
                            break;
                        }
                        if ((t >= p) && (i === (_pos.length-1))) {
                            col = _colors[i];
                            break;
                        }
                        if (t > p && t < _pos[i+1]) {
                            t = (t-p)/(_pos[i+1]-p);
                            col = chroma_1.interpolate(_colors[i], _colors[i+1], t, _mode);
                            break;
                        }
                    }
                } else if (type$j(_colors) === 'function') {
                    col = _colors(t);
                }
                if (_useCache) { _colorCache[k] = col; }
            }
            return col;
        };

        var resetCache = function () { return _colorCache = {}; };

        setColors(colors);

        // public interface

        var f = function(v) {
            var c = chroma_1(getColor(v));
            if (_out && c[_out]) { return c[_out](); } else { return c; }
        };

        f.classes = function(classes) {
            if (classes != null) {
                if (type$j(classes) === 'array') {
                    _classes = classes;
                    _domain = [classes[0], classes[classes.length-1]];
                } else {
                    var d = chroma_1.analyze(_domain);
                    if (classes === 0) {
                        _classes = [d.min, d.max];
                    } else {
                        _classes = chroma_1.limits(d, 'e', classes);
                    }
                }
                return f;
            }
            return _classes;
        };


        f.domain = function(domain) {
            if (!arguments.length) {
                return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length-1];
            _pos = [];
            var k = _colors.length;
            if ((domain.length === k) && (_min !== _max)) {
                // update positions
                for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                    var d = list[i];

                  _pos.push((d-_min) / (_max-_min));
                }
            } else {
                for (var c=0; c<k; c++) {
                    _pos.push(c/(k-1));
                }
                if (domain.length > 2) {
                    // set domain map
                    var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                    var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                    if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                        tMapDomain = function (t) {
                            if (t <= 0 || t >= 1) { return t; }
                            var i = 0;
                            while (t >= tBreaks[i+1]) { i++; }
                            var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                            var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                            return out;
                        };
                    }

                }
            }
            _domain = [_min, _max];
            return f;
        };

        f.mode = function(_m) {
            if (!arguments.length) {
                return _mode;
            }
            _mode = _m;
            resetCache();
            return f;
        };

        f.range = function(colors, _pos) {
            setColors(colors, _pos);
            return f;
        };

        f.out = function(_o) {
            _out = _o;
            return f;
        };

        f.spread = function(val) {
            if (!arguments.length) {
                return _spread;
            }
            _spread = val;
            return f;
        };

        f.correctLightness = function(v) {
            if (v == null) { v = true; }
            _correctLightness = v;
            resetCache();
            if (_correctLightness) {
                tMapLightness = function(t) {
                    var L0 = getColor(0, true).lab()[0];
                    var L1 = getColor(1, true).lab()[0];
                    var pol = L0 > L1;
                    var L_actual = getColor(t, true).lab()[0];
                    var L_ideal = L0 + ((L1 - L0) * t);
                    var L_diff = L_actual - L_ideal;
                    var t0 = 0;
                    var t1 = 1;
                    var max_iter = 20;
                    while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                        (function() {
                            if (pol) { L_diff *= -1; }
                            if (L_diff < 0) {
                                t0 = t;
                                t += (t1 - t) * 0.5;
                            } else {
                                t1 = t;
                                t += (t0 - t) * 0.5;
                            }
                            L_actual = getColor(t, true).lab()[0];
                            return L_diff = L_actual - L_ideal;
                        })();
                    }
                    return t;
                };
            } else {
                tMapLightness = function (t) { return t; };
            }
            return f;
        };

        f.padding = function(p) {
            if (p != null) {
                if (type$j(p) === 'number') {
                    p = [p,p];
                }
                _padding = p;
                return f;
            } else {
                return _padding;
            }
        };

        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) { out = 'hex'; }
            var result = [];

            if (arguments.length === 0) {
                result = _colors.slice(0);

            } else if (numColors === 1) {
                result = [f(0.5)];

            } else if (numColors > 1) {
                var dm = _domain[0];
                var dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

            } else { // returns all colors based on the defined classes
                colors = [];
                var samples = [];
                if (_classes && (_classes.length > 2)) {
                    for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                        samples.push((_classes[i-1]+_classes[i])*0.5);
                    }
                } else {
                    samples = _domain;
                }
                result = samples.map(function (v) { return f(v); });
            }

            if (chroma_1[out]) {
                result = result.map(function (c) { return c[out](); });
            }
            return result;
        };

        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else {
                return _useCache;
            }
        };

        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else {
                return _gamma;
            }
        };

        f.nodata = function(d) {
            if (d != null) {
                _nacol = chroma_1(d);
                return f;
            } else {
                return _nacol;
            }
        };

        return f;
    };

    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }

    //
    // interpolates between a set of colors uzing a bezier spline
    //

    // @requires utils lab




    var bezier = function(colors) {
        var assign, assign$1, assign$2;

        var I, lab0, lab1, lab2;
        colors = colors.map(function (c) { return new Color_1(c); });
        if (colors.length === 2) {
            // linear interpolation
            (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 3) {
            // quadratic bezier interpolation
            (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 4) {
            // cubic bezier interpolation
            var lab3;
            (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 5) {
            var I0 = bezier(colors.slice(0, 3));
            var I1 = bezier(colors.slice(2, 5));
            I = function(t) {
                if (t < 0.5) {
                    return I0(t*2);
                } else {
                    return I1((t-0.5)*2);
                }
            };
        }
        return I;
    };

    var bezier_1 = function (colors) {
        var f = bezier(colors);
        f.scale = function () { return scale(f); };
        return f;
    };

    /*
     * interpolates between a set of colors uzing a bezier spline
     * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
     */




    var blend = function (bottom, top, mode) {
        if (!blend[mode]) {
            throw new Error('unknown blend mode ' + mode);
        }
        return blend[mode](bottom, top);
    };

    var blend_f = function (f) { return function (bottom,top) {
            var c0 = chroma_1(top).rgb();
            var c1 = chroma_1(bottom).rgb();
            return chroma_1.rgb(f(c0, c1));
        }; };

    var each = function (f) { return function (c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
        }; };

    var normal = function (a) { return a; };
    var multiply = function (a,b) { return a * b / 255; };
    var darken$1 = function (a,b) { return a > b ? b : a; };
    var lighten = function (a,b) { return a > b ? a : b; };
    var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
    var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
    var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
    var dodge = function (a,b) {
        if (a === 255) { return 255; }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a
    };

    // # add = (a,b) ->
    // #     if (a + b > 255) then 255 else a + b

    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken$1));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    // blend.add = blend_f(each(add));

    var blend_1 = blend;

    // cubehelix interpolation
    // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
    // http://astron-soc.in/bulletin/11June/289392011.pdf

    var type$k = utils.type;
    var clip_rgb$3 = utils.clip_rgb;
    var TWOPI$2 = utils.TWOPI;
    var pow$6 = Math.pow;
    var sin$2 = Math.sin;
    var cos$3 = Math.cos;


    var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if ( start === void 0 ) start=300;
        if ( rotations === void 0 ) rotations=-1.5;
        if ( hue === void 0 ) hue=1;
        if ( gamma === void 0 ) gamma=1;
        if ( lightness === void 0 ) lightness=[0,1];

        var dh = 0, dl;
        if (type$k(lightness) === 'array') {
            dl = lightness[1] - lightness[0];
        } else {
            dl = 0;
            lightness = [lightness, lightness];
        }

        var f = function(fract) {
            var a = TWOPI$2 * (((start+120)/360) + (rotations * fract));
            var l = pow$6(lightness[0] + (dl * fract), gamma);
            var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
            var amp = (h * l * (1-l)) / 2;
            var cos_a = cos$3(a);
            var sin_a = sin$2(a);
            var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
            var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
            var b = l + (amp * (+1.97294 * cos_a));
            return chroma_1(clip_rgb$3([r*255,g*255,b*255,1]));
        };

        f.start = function(s) {
            if ((s == null)) { return start; }
            start = s;
            return f;
        };

        f.rotations = function(r) {
            if ((r == null)) { return rotations; }
            rotations = r;
            return f;
        };

        f.gamma = function(g) {
            if ((g == null)) { return gamma; }
            gamma = g;
            return f;
        };

        f.hue = function(h) {
            if ((h == null)) { return hue; }
            hue = h;
            if (type$k(hue) === 'array') {
                dh = hue[1] - hue[0];
                if (dh === 0) { hue = hue[1]; }
            } else {
                dh = 0;
            }
            return f;
        };

        f.lightness = function(h) {
            if ((h == null)) { return lightness; }
            if (type$k(h) === 'array') {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [h,h];
                dl = 0;
            }
            return f;
        };

        f.scale = function () { return chroma_1.scale(f); };

        f.hue(hue);

        return f;
    };

    var digits = '0123456789abcdef';

    var floor$2 = Math.floor;
    var random = Math.random;

    var random_1 = function () {
        var code = '#';
        for (var i=0; i<6; i++) {
            code += digits.charAt(floor$2(random() * 16));
        }
        return new Color_1(code, 'hex');
    };

    var log$1 = Math.log;
    var pow$7 = Math.pow;
    var floor$3 = Math.floor;
    var abs = Math.abs;


    var analyze = function (data, key) {
        if ( key === void 0 ) key=null;

        var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE*-1,
            sum: 0,
            values: [],
            count: 0
        };
        if (type(data) === 'object') {
            data = Object.values(data);
        }
        data.forEach(function (val) {
            if (key && type(val) === 'object') { val = val[key]; }
            if (val !== undefined && val !== null && !isNaN(val)) {
                r.values.push(val);
                r.sum += val;
                if (val < r.min) { r.min = val; }
                if (val > r.max) { r.max = val; }
                r.count += 1;
            }
        });

        r.domain = [r.min, r.max];

        r.limits = function (mode, num) { return limits(r, mode, num); };

        return r;
    };


    var limits = function (data, mode, num) {
        if ( mode === void 0 ) mode='equal';
        if ( num === void 0 ) num=7;

        if (type(data) == 'array') {
            data = analyze(data);
        }
        var min = data.min;
        var max = data.max;
        var values = data.values.sort(function (a,b) { return a-b; });

        if (num === 1) { return [min,max]; }

        var limits = [];

        if (mode.substr(0,1) === 'c') { // continuous
            limits.push(min);
            limits.push(max);
        }

        if (mode.substr(0,1) === 'e') { // equal interval
            limits.push(min);
            for (var i=1; i<num; i++) {
                limits.push(min+((i/num)*(max-min)));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'l') { // log scale
            if (min <= 0) {
                throw new Error('Logarithmic scales are only possible for values > 0');
            }
            var min_log = Math.LOG10E * log$1(min);
            var max_log = Math.LOG10E * log$1(max);
            limits.push(min);
            for (var i$1=1; i$1<num; i$1++) {
                limits.push(pow$7(10, min_log + ((i$1/num) * (max_log - min_log))));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'q') { // quantile scale
            limits.push(min);
            for (var i$2=1; i$2<num; i$2++) {
                var p = ((values.length-1) * i$2)/num;
                var pb = floor$3(p);
                if (pb === p) {
                    limits.push(values[pb]);
                } else { // p > pb
                    var pr = p - pb;
                    limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                }
            }
            limits.push(max);

        }

        else if (mode.substr(0,1) === 'k') { // k-means clustering
            /*
            implementation based on
            http://code.google.com/p/figue/source/browse/trunk/figue.js#336
            simplified for 1-d input values
            */
            var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;

            // get seed values
            centroids = [];
            centroids.push(min);
            for (var i$3=1; i$3<num; i$3++) {
                centroids.push(min + ((i$3/num) * (max-min)));
            }
            centroids.push(max);

            while (repeat) {
                // assignment step
                for (var j=0; j<num; j++) {
                    clusterSizes[j] = 0;
                }
                for (var i$4=0; i$4<n; i$4++) {
                    var value = values[i$4];
                    var mindist = Number.MAX_VALUE;
                    var best = (void 0);
                    for (var j$1=0; j$1<num; j$1++) {
                        var dist = abs(centroids[j$1]-value);
                        if (dist < mindist) {
                            mindist = dist;
                            best = j$1;
                        }
                        clusterSizes[best]++;
                        assignments[i$4] = best;
                    }
                }

                // update centroids step
                var newCentroids = new Array(num);
                for (var j$2=0; j$2<num; j$2++) {
                    newCentroids[j$2] = null;
                }
                for (var i$5=0; i$5<n; i$5++) {
                    cluster = assignments[i$5];
                    if (newCentroids[cluster] === null) {
                        newCentroids[cluster] = values[i$5];
                    } else {
                        newCentroids[cluster] += values[i$5];
                    }
                }
                for (var j$3=0; j$3<num; j$3++) {
                    newCentroids[j$3] *= 1/clusterSizes[j$3];
                }

                // check convergence
                repeat = false;
                for (var j$4=0; j$4<num; j$4++) {
                    if (newCentroids[j$4] !== centroids[j$4]) {
                        repeat = true;
                        break;
                    }
                }

                centroids = newCentroids;
                nb_iters++;

                if (nb_iters > 200) {
                    repeat = false;
                }
            }

            // finished k-means clustering
            // the next part is borrowed from gabrielflor.it
            var kClusters = {};
            for (var j$5=0; j$5<num; j$5++) {
                kClusters[j$5] = [];
            }
            for (var i$6=0; i$6<n; i$6++) {
                cluster = assignments[i$6];
                kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6=0; j$6<num; j$6++) {
                tmpKMeansBreaks.push(kClusters[j$6][0]);
                tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
            limits.push(tmpKMeansBreaks[0]);
            for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                var v = tmpKMeansBreaks[i$7];
                if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                    limits.push(v);
                }
            }
        }
        return limits;
    };

    var analyze_1 = {analyze: analyze, limits: limits};

    var contrast = function (a, b) {
        // WCAG contrast ratio
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
        a = new Color_1(a);
        b = new Color_1(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };

    var sqrt$4 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var abs$1 = Math.abs;
    var cos$4 = Math.cos;
    var PI$2 = Math.PI;

    var deltaE = function(a, b, L, C) {
        if ( L === void 0 ) L=1;
        if ( C === void 0 ) C=1;

        // Delta E (CMC)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
        a = new Color_1(a);
        b = new Color_1(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var c1 = sqrt$4((a1 * a1) + (b1 * b1));
        var c2 = sqrt$4((a2 * a2) + (b2 * b2));
        var sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + (0.01765 * L1));
        var sc = ((0.0638 * c1) / (1.0 + (0.0131 * c1))) + 0.638;
        var h1 = c1 < 0.000001 ? 0.0 : (atan2$2(b1, a1) * 180.0) / PI$2;
        while (h1 < 0) { h1 += 360; }
        while (h1 >= 360) { h1 -= 360; }
        var t = (h1 >= 164.0) && (h1 <= 345.0) ? (0.56 + abs$1(0.2 * cos$4((PI$2 * (h1 + 168.0)) / 180.0))) : (0.36 + abs$1(0.4 * cos$4((PI$2 * (h1 + 35.0)) / 180.0)));
        var c4 = c1 * c1 * c1 * c1;
        var f = sqrt$4(c4 / (c4 + 1900.0));
        var sh = sc * (((f * t) + 1.0) - f);
        var delL = L1 - L2;
        var delC = c1 - c2;
        var delA = a1 - a2;
        var delB = b1 - b2;
        var dH2 = ((delA * delA) + (delB * delB)) - (delC * delC);
        var v1 = delL / (L * sl);
        var v2 = delC / (C * sc);
        var v3 = sh;
        return sqrt$4((v1 * v1) + (v2 * v2) + (dH2 / (v3 * v3)));
    };

    // simple Euclidean distance
    var distance = function(a, b, mode) {
        if ( mode === void 0 ) mode='lab';

        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new Color_1(a);
        b = new Color_1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i in l1) {
            var d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d*d;
        }
        return Math.sqrt(sum_sq);
    };

    var valid = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        try {
            new (Function.prototype.bind.apply( Color_1, [ null ].concat( args) ));
            return true;
        } catch (e) {
            return false;
        }
    };

    // some pre-defined color scales:




    var scales = {
    	cool: function cool() { return scale([chroma_1.hsl(180,1,.9), chroma_1.hsl(250,.7,.4)]) },
    	hot: function hot() { return scale(['#000','#f00','#ff0','#fff'], [0,.25,.75,1]).mode('rgb') }
    };

    /**
        ColorBrewer colors for chroma.js

        Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
        Pennsylvania State University.

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software distributed
        under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
        CONDITIONS OF ANY KIND, either express or implied. See the License for the
        specific language governing permissions and limitations under the License.
    */

    var colorbrewer = {
        // sequential
        OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
        PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
        BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
        Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
        BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
        YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
        YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
        Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
        RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
        Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
        YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
        Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
        GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
        Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
        YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
        PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
        Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
        PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
        Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

        // diverging

        Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
        RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
        RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
        PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
        PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
        RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
        BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
        RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
        PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

        // qualitative

        Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
        Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
        Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
        Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
        Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
        Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
        Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
        Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
    };

    // add lowercase aliases for case-insensitive matches
    for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
        var key = list$1[i$1];

        colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }

    var colorbrewer_1 = colorbrewer;

    // feel free to comment out anything to rollup
    // a smaller chroma.js built

    // io --> convert colors















    // operators --> modify existing Colors










    // interpolators










    // generators -- > create new colors
    chroma_1.average = average;
    chroma_1.bezier = bezier_1;
    chroma_1.blend = blend_1;
    chroma_1.cubehelix = cubehelix;
    chroma_1.mix = chroma_1.interpolate = mix;
    chroma_1.random = random_1;
    chroma_1.scale = scale;

    // other utility methods
    chroma_1.analyze = analyze_1.analyze;
    chroma_1.contrast = contrast;
    chroma_1.deltaE = deltaE;
    chroma_1.distance = distance;
    chroma_1.limits = analyze_1.limits;
    chroma_1.valid = valid;

    // scale
    chroma_1.scales = scales;

    // colors
    chroma_1.colors = w3cx11_1;
    chroma_1.brewer = colorbrewer_1;

    var chroma_js = chroma_1;

    return chroma_js;

})));


/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const chroma = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
console.log(chroma('red'));
const frame = figma.createFrame();
frame.name = "Contrast Grid";
const promRobotoReg = figma.loadFontAsync({ family: "Roboto", style: "Regular" });
let promises = [promRobotoReg];
Promise.all(promises).then(() => {
    doGrid();
});
const nodes = [];
function doGrid() {
    //Make a new frame
    const colorStyles = figma.getLocalPaintStyles();
    const paints = colorStyles.filter(style => { return Boolean(style.paints[0]); });
    //console.log(paints)
    let passes = [];
    for (let i = 0; i < paints.length; i++) {
        for (let j = 0; j < paints.length - i; j++) {
            if (j !== i) {
                let ri = paints[i].paints[0].color.r;
                let gi = paints[i].paints[0].color.g;
                let bi = paints[i].paints[0].color.b;
                let rj = paints[j].paints[0].color.r;
                let gj = paints[j].paints[0].color.g;
                let bj = paints[j].paints[0].color.b;
                let hexi = makeHex(ri, gi, bi);
                let hexj = makeHex(rj, gj, bj);
                let contrast = chroma.contrast(hexi, hexj);
                if (contrast > 3) {
                    passes.push({ hexi, hexj });
                    makeContrastSquare(0, (passes.length - 1) * 120, contrast, hexi, ri, gi, bi, rj, gj, bj);
                    makeContrastSquare(200, (passes.length - 1) * 120, contrast, hexj, rj, gj, bj, ri, gi, bi);
                }
                else {
                }
            }
        }
    }
    frame.resize(440, (passes.length * 120) + 20);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin('Grid Made!');
}
function makeHex(r, g, b) {
    let red = rgbToHex(Math.round(255 * r));
    let green = rgbToHex(Math.round(255 * g));
    let blue = rgbToHex(Math.round(255 * b));
    return '#' + red + green + blue;
}
function rgbToHex(int) {
    var hex = Number(int).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}
function makeContrastSquare(x, y, contrast, fhex, fr, fg, fb, br, bg, bb) {
    const rect = figma.createRectangle();
    rect.x = x + 0;
    rect.y = y;
    rect.resizeWithoutConstraints(200, 100);
    const textHexCode = figma.createText();
    textHexCode.characters = fhex.toUpperCase();
    //text.characters = `C: ${contrast}`
    textHexCode.x = x + 8;
    textHexCode.y = y + 8;
    textHexCode.fills = [{ type: 'SOLID', color: { r: fr, g: fg, b: fb } }];
    textHexCode.fontSize = 14;
    const textContrast = figma.createText();
    textContrast.characters = `${contrast.toFixed(2)}:1`;
    textContrast.x = x + 8;
    textContrast.y = y + 30;
    textContrast.fills = [{ type: 'SOLID', color: { r: fr, g: fg, b: fb } }];
    textContrast.fontSize = 12;
    const textInfo = figma.createText();
    textInfo.x = x + 8;
    textInfo.y = y + 48;
    textInfo.fills = [{ type: 'SOLID', color: { r: fr, g: fg, b: fb } }];
    textInfo.fontSize = 10;
    if (contrast > 3 && contrast < 4.5) {
        textInfo.characters = `AA large text\nAA non-text`;
    }
    if (contrast > 4.5 && contrast < 7) {
        textInfo.characters = `AAA large text\nAA large text / normal text\nAA non-text`;
    }
    if (contrast > 7) {
        textInfo.characters = `AAA large text / normal text\nAA large text / normal text\nAA non-text`;
    }
    rect.fills = [{ type: 'SOLID', color: { r: br, g: bg, b: bb } }];
    frame.appendChild(rect);
    frame.appendChild(textHexCode);
    frame.appendChild(textContrast);
    frame.appendChild(textInfo);
    let myGroup = [];
    myGroup.push(rect);
    myGroup.push(textHexCode);
    myGroup.push(textContrast);
    myGroup.push(textInfo);
    const grouped = figma.group(myGroup, frame, 0);
    grouped.y = y + 20;
    grouped.x = x + 20;
    // }
}
// }


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9jaHJvbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q2xHO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGtCQUFrQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLHNCQUFzQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1FQUFtRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdCQUFnQjtBQUNyRDtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0Esd0NBQXdDLDZCQUE2QjtBQUNyRSx3Q0FBd0MsdUNBQXVDOztBQUUvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUUsRUFBRTs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQSxxREFBcUQsaUJBQWlCO0FBQ3RFOztBQUVBLHNDQUFzQyx3QkFBd0I7QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsa0NBQWtDO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7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QUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBLDBCQUEwQix3QkFBd0Isc0JBQXNCLEVBQUU7QUFDMUU7QUFDQTtBQUNBLGlDQUFpQyxvQkFBb0I7QUFDckQ7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0Isc0JBQXNCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCLHNCQUFzQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QixzQkFBc0IsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCIvKipcbiAqIGNocm9tYS5qcyAtIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgY29sb3IgY29udmVyc2lvbnNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxOSwgR3JlZ29yIEFpc2NoXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqXG4gKiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gKiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiAzLiBUaGUgbmFtZSBHcmVnb3IgQWlzY2ggbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuICogZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxuICogRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgR1JFR09SIEFJU0NIIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORyxcbiAqIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZXG4gKiBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuICogRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogY2hyb21hLmpzIGluY2x1ZGVzIGNvbG9ycyBmcm9tIGNvbG9yYnJld2VyMi5vcmcsIHdoaWNoIGFyZSByZWxlYXNlZCB1bmRlclxuICogdGhlIGZvbGxvd2luZyBsaWNlbnNlOlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAwMiBDeW50aGlhIEJyZXdlciwgTWFyayBIYXJyb3dlcixcbiAqIGFuZCBUaGUgUGVubnN5bHZhbmlhIFN0YXRlIFVuaXZlcnNpdHkuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4gKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpY1xuICogbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBOYW1lZCBjb2xvcnMgYXJlIHRha2VuIGZyb20gWDExIENvbG9yIE5hbWVzLlxuICogaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG4gKlxuICogQHByZXNlcnZlXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsLmNocm9tYSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBsaW1pdCA9IGZ1bmN0aW9uICh4LCBtaW4sIG1heCkge1xuICAgICAgICBpZiAoIG1pbiA9PT0gdm9pZCAwICkgbWluPTA7XG4gICAgICAgIGlmICggbWF4ID09PSB2b2lkIDAgKSBtYXg9MTtcblxuICAgICAgICByZXR1cm4geCA8IG1pbiA/IG1pbiA6IHggPiBtYXggPyBtYXggOiB4O1xuICAgIH07XG5cbiAgICB2YXIgY2xpcF9yZ2IgPSBmdW5jdGlvbiAocmdiKSB7XG4gICAgICAgIHJnYi5fY2xpcHBlZCA9IGZhbHNlO1xuICAgICAgICByZ2IuX3VuY2xpcHBlZCA9IHJnYi5zbGljZSgwKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPD0zOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgICAgIGlmIChyZ2JbaV0gPCAwIHx8IHJnYltpXSA+IDI1NSkgeyByZ2IuX2NsaXBwZWQgPSB0cnVlOyB9XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQocmdiW2ldLCAwLCAyNTUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQocmdiW2ldLCAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH07XG5cbiAgICAvLyBwb3J0ZWQgZnJvbSBqUXVlcnkncyAkLnR5cGVcbiAgICB2YXIgY2xhc3NUb1R5cGUgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IFsnQm9vbGVhbicsICdOdW1iZXInLCAnU3RyaW5nJywgJ0Z1bmN0aW9uJywgJ0FycmF5JywgJ0RhdGUnLCAnUmVnRXhwJywgJ1VuZGVmaW5lZCcsICdOdWxsJ107IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBuYW1lID0gbGlzdFtpXTtcblxuICAgICAgICBjbGFzc1RvVHlwZVsoXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiKV0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHZhciB0eXBlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBjbGFzc1RvVHlwZVtPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIjtcbiAgICB9O1xuXG4gICAgdmFyIHVucGFjayA9IGZ1bmN0aW9uIChhcmdzLCBrZXlPcmRlcikge1xuICAgICAgICBpZiAoIGtleU9yZGVyID09PSB2b2lkIDAgKSBrZXlPcmRlcj1udWxsO1xuXG4gICAgXHQvLyBpZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gMyBhcmd1bWVudHMsIHdlIHJldHVybiB0aGUgYXJndW1lbnRzXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTsgfVxuICAgICAgICAvLyB3aXRoIGxlc3MgdGhhbiAzIGFyZ3Mgd2UgY2hlY2sgaWYgZmlyc3QgYXJnIGlzIG9iamVjdFxuICAgICAgICAvLyBhbmQgdXNlIHRoZSBrZXlPcmRlciBzdHJpbmcgdG8gZXh0cmFjdCBhbmQgc29ydCBwcm9wZXJ0aWVzXG4gICAgXHRpZiAodHlwZShhcmdzWzBdKSA9PSAnb2JqZWN0JyAmJiBrZXlPcmRlcikge1xuICAgIFx0XHRyZXR1cm4ga2V5T3JkZXIuc3BsaXQoJycpXG4gICAgXHRcdFx0LmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gYXJnc1swXVtrXSAhPT0gdW5kZWZpbmVkOyB9KVxuICAgIFx0XHRcdC5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGFyZ3NbMF1ba107IH0pO1xuICAgIFx0fVxuICAgIFx0Ly8gb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIHRoZSBmaXJzdCBhcmd1bWVudFxuICAgIFx0Ly8gKHdoaWNoIHdlIHN1cHBvc2UgaXMgYW4gYXJyYXkgb2YgYXJncylcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcblxuICAgIHZhciBsYXN0ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICB2YXIgbCA9IGFyZ3MubGVuZ3RoLTE7XG4gICAgICAgIGlmICh0eXBlKGFyZ3NbbF0pID09ICdzdHJpbmcnKSB7IHJldHVybiBhcmdzW2xdLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBQSSA9IE1hdGguUEk7XG5cbiAgICB2YXIgdXRpbHMgPSB7XG4gICAgXHRjbGlwX3JnYjogY2xpcF9yZ2IsXG4gICAgXHRsaW1pdDogbGltaXQsXG4gICAgXHR0eXBlOiB0eXBlLFxuICAgIFx0dW5wYWNrOiB1bnBhY2ssXG4gICAgXHRsYXN0OiBsYXN0LFxuICAgIFx0UEk6IFBJLFxuICAgIFx0VFdPUEk6IFBJKjIsXG4gICAgXHRQSVRISVJEOiBQSS8zLFxuICAgIFx0REVHMlJBRDogUEkgLyAxODAsXG4gICAgXHRSQUQyREVHOiAxODAgLyBQSVxuICAgIH07XG5cbiAgICB2YXIgaW5wdXQgPSB7XG4gICAgXHRmb3JtYXQ6IHt9LFxuICAgIFx0YXV0b2RldGVjdDogW11cbiAgICB9O1xuXG4gICAgdmFyIGxhc3QkMSA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIGNsaXBfcmdiJDEgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgdHlwZSQxID0gdXRpbHMudHlwZTtcblxuXG4gICAgdmFyIENvbG9yID0gZnVuY3Rpb24gQ29sb3IoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGUkMShhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgPT09IHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhcmd1bWVudCBpcyBhbHJlYWR5IGEgQ29sb3IgaW5zdGFuY2VcbiAgICAgICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGFzdCBhcmd1bWVudCBjb3VsZCBiZSB0aGUgbW9kZVxuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMShhcmdzKTtcbiAgICAgICAgdmFyIGF1dG9kZXRlY3QgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgIGF1dG9kZXRlY3QgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFpbnB1dC5zb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5hdXRvZGV0ZWN0ID0gaW5wdXQuYXV0b2RldGVjdC5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGIucCAtIGEucDsgfSk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc29ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGF1dG8tZGV0ZWN0IGZvcm1hdFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBpbnB1dC5hdXRvZGV0ZWN0OyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGsgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgbW9kZSA9IGNoay50ZXN0LmFwcGx5KGNoaywgYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dC5mb3JtYXRbbW9kZV0pIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBpbnB1dC5mb3JtYXRbbW9kZV0uYXBwbHkobnVsbCwgYXV0b2RldGVjdCA/IGFyZ3MgOiBhcmdzLnNsaWNlKDAsLTEpKTtcbiAgICAgICAgICAgIG1lLl9yZ2IgPSBjbGlwX3JnYiQxKHJnYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gZm9ybWF0OiAnK2FyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGFscGhhIGNoYW5uZWxcbiAgICAgICAgaWYgKG1lLl9yZ2IubGVuZ3RoID09PSAzKSB7IG1lLl9yZ2IucHVzaCgxKTsgfVxuICAgIH07XG5cbiAgICBDb2xvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgICAgIGlmICh0eXBlJDEodGhpcy5oZXgpID09ICdmdW5jdGlvbicpIHsgcmV0dXJuIHRoaXMuaGV4KCk7IH1cbiAgICAgICAgcmV0dXJuIChcIltcIiArICh0aGlzLl9yZ2Iuam9pbignLCcpKSArIFwiXVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yXzEgPSBDb2xvcjtcblxuICAgIHZhciBjaHJvbWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHR2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIFx0d2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIFx0cmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIGNocm9tYS5Db2xvciwgWyBudWxsIF0uY29uY2F0KCBhcmdzKSApKTtcbiAgICB9O1xuXG4gICAgY2hyb21hLkNvbG9yID0gQ29sb3JfMTtcbiAgICBjaHJvbWEudmVyc2lvbiA9ICcyLjEuMCc7XG5cbiAgICB2YXIgY2hyb21hXzEgPSBjaHJvbWE7XG5cbiAgICB2YXIgdW5wYWNrJDEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIG1heCA9IE1hdGgubWF4O1xuXG4gICAgdmFyIHJnYjJjbXlrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skMShhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHIgPSByIC8gMjU1O1xuICAgICAgICBnID0gZyAvIDI1NTtcbiAgICAgICAgYiA9IGIgLyAyNTU7XG4gICAgICAgIHZhciBrID0gMSAtIG1heChyLG1heChnLGIpKTtcbiAgICAgICAgdmFyIGYgPSBrIDwgMSA/IDEgLyAoMS1rKSA6IDA7XG4gICAgICAgIHZhciBjID0gKDEtci1rKSAqIGY7XG4gICAgICAgIHZhciBtID0gKDEtZy1rKSAqIGY7XG4gICAgICAgIHZhciB5ID0gKDEtYi1rKSAqIGY7XG4gICAgICAgIHJldHVybiBbYyxtLHksa107XG4gICAgfTtcblxuICAgIHZhciByZ2IyY215a18xID0gcmdiMmNteWs7XG5cbiAgICB2YXIgdW5wYWNrJDIgPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgY215azJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayQyKGFyZ3MsICdjbXlrJyk7XG4gICAgICAgIHZhciBjID0gYXJnc1swXTtcbiAgICAgICAgdmFyIG0gPSBhcmdzWzFdO1xuICAgICAgICB2YXIgeSA9IGFyZ3NbMl07XG4gICAgICAgIHZhciBrID0gYXJnc1szXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IDE7XG4gICAgICAgIGlmIChrID09PSAxKSB7IHJldHVybiBbMCwwLDAsYWxwaGFdOyB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBjID49IDEgPyAwIDogMjU1ICogKDEtYykgKiAoMS1rKSwgLy8gclxuICAgICAgICAgICAgbSA+PSAxID8gMCA6IDI1NSAqICgxLW0pICogKDEtayksIC8vIGdcbiAgICAgICAgICAgIHkgPj0gMSA/IDAgOiAyNTUgKiAoMS15KSAqICgxLWspLCAvLyBiXG4gICAgICAgICAgICBhbHBoYVxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgY215azJyZ2JfMSA9IGNteWsycmdiO1xuXG4gICAgdmFyIHVucGFjayQzID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDIgPSB1dGlscy50eXBlO1xuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLmNteWsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJjbXlrXzEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEuY215ayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3JfMSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NteWsnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5jbXlrID0gY215azJyZ2JfMTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDMoYXJncywgJ2NteWsnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDIoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NteWsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJDQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkMiA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJuZCA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBNYXRoLnJvdW5kKGEqMTAwKS8xMDA7IH07XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSBoc2wyY3NzKGgscyxsKVxuICAgICAqIC0gaHNsMmNzcyhoLHMsbCxhKVxuICAgICAqIC0gaHNsMmNzcyhbaCxzLGxdLCBtb2RlKVxuICAgICAqIC0gaHNsMmNzcyhbaCxzLGwsYV0sIG1vZGUpXG4gICAgICogLSBoc2wyY3NzKHtoLHMsbCxhfSwgbW9kZSlcbiAgICAgKi9cbiAgICB2YXIgaHNsMmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgaHNsYSA9IHVucGFjayQ0KGFyZ3MsICdoc2xhJyk7XG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQyKGFyZ3MpIHx8ICdsc2EnO1xuICAgICAgICBoc2xhWzBdID0gcm5kKGhzbGFbMF0gfHwgMCk7XG4gICAgICAgIGhzbGFbMV0gPSBybmQoaHNsYVsxXSoxMDApICsgJyUnO1xuICAgICAgICBoc2xhWzJdID0gcm5kKGhzbGFbMl0qMTAwKSArICclJztcbiAgICAgICAgaWYgKG1vZGUgPT09ICdoc2xhJyB8fCAoaHNsYS5sZW5ndGggPiAzICYmIGhzbGFbM108MSkpIHtcbiAgICAgICAgICAgIGhzbGFbM10gPSBoc2xhLmxlbmd0aCA+IDMgPyBoc2xhWzNdIDogMTtcbiAgICAgICAgICAgIG1vZGUgPSAnaHNsYSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoc2xhLmxlbmd0aCA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChtb2RlICsgXCIoXCIgKyAoaHNsYS5qb2luKCcsJykpICsgXCIpXCIpO1xuICAgIH07XG5cbiAgICB2YXIgaHNsMmNzc18xID0gaHNsMmNzcztcblxuICAgIHZhciB1bnBhY2skNSA9IHV0aWxzLnVucGFjaztcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc2wocixnLGIpXG4gICAgICogLSByZ2IyaHNsKHIsZyxiLGEpXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYixhXSlcbiAgICAgKiAtIHJnYjJoc2woe3IsZyxiLGF9KVxuICAgICAqL1xuICAgIHZhciByZ2IyaHNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skNShhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgciA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBnID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuXG4gICAgICAgIHIgLz0gMjU1O1xuICAgICAgICBnIC89IDI1NTtcbiAgICAgICAgYiAvPSAyNTU7XG5cbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cbiAgICAgICAgdmFyIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gICAgICAgIHZhciBzLCBoO1xuXG4gICAgICAgIGlmIChtYXggPT09IG1pbil7XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IGwgPCAwLjUgPyAobWF4IC0gbWluKSAvIChtYXggKyBtaW4pIDogKG1heCAtIG1pbikgLyAoMiAtIG1heCAtIG1pbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAociA9PSBtYXgpIHsgaCA9IChnIC0gYikgLyAobWF4IC0gbWluKTsgfVxuICAgICAgICBlbHNlIGlmIChnID09IG1heCkgeyBoID0gMiArIChiIC0gcikgLyAobWF4IC0gbWluKTsgfVxuICAgICAgICBlbHNlIGlmIChiID09IG1heCkgeyBoID0gNCArIChyIC0gZykgLyAobWF4IC0gbWluKTsgfVxuXG4gICAgICAgIGggKj0gNjA7XG4gICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGg+MyAmJiBhcmdzWzNdIT09dW5kZWZpbmVkKSB7IHJldHVybiBbaCxzLGwsYXJnc1szXV07IH1cbiAgICAgICAgcmV0dXJuIFtoLHMsbF07XG4gICAgfTtcblxuICAgIHZhciByZ2IyaHNsXzEgPSByZ2IyaHNsO1xuXG4gICAgdmFyIHVucGFjayQ2ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0JDMgPSB1dGlscy5sYXN0O1xuXG5cbiAgICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmNzcyhyLGcsYilcbiAgICAgKiAtIHJnYjJjc3MocixnLGIsYSlcbiAgICAgKiAtIHJnYjJjc3MoW3IsZyxiXSwgbW9kZSlcbiAgICAgKiAtIHJnYjJjc3MoW3IsZyxiLGFdLCBtb2RlKVxuICAgICAqIC0gcmdiMmNzcyh7cixnLGIsYX0sIG1vZGUpXG4gICAgICovXG4gICAgdmFyIHJnYjJjc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skNihhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMyhhcmdzKSB8fCAncmdiJztcbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMykgPT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBoc2wyY3NzXzEocmdiMmhzbF8xKHJnYmEpLCBtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZ2JhWzBdID0gcm91bmQocmdiYVswXSk7XG4gICAgICAgIHJnYmFbMV0gPSByb3VuZChyZ2JhWzFdKTtcbiAgICAgICAgcmdiYVsyXSA9IHJvdW5kKHJnYmFbMl0pO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ3JnYmEnIHx8IChyZ2JhLmxlbmd0aCA+IDMgJiYgcmdiYVszXTwxKSkge1xuICAgICAgICAgICAgcmdiYVszXSA9IHJnYmEubGVuZ3RoID4gMyA/IHJnYmFbM10gOiAxO1xuICAgICAgICAgICAgbW9kZSA9ICdyZ2JhJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgKyBcIihcIiArIChyZ2JhLnNsaWNlKDAsbW9kZT09PSdyZ2InPzM6NCkuam9pbignLCcpKSArIFwiKVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJjc3NfMSA9IHJnYjJjc3M7XG5cbiAgICB2YXIgdW5wYWNrJDcgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJvdW5kJDEgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGhzbDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ247XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayQ3KGFyZ3MsICdoc2wnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBsID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gbCoyNTU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdDMgPSBbMCwwLDBdO1xuICAgICAgICAgICAgdmFyIGMgPSBbMCwwLDBdO1xuICAgICAgICAgICAgdmFyIHQyID0gbCA8IDAuNSA/IGwgKiAoMStzKSA6IGwrcy1sKnM7XG4gICAgICAgICAgICB2YXIgdDEgPSAyICogbCAtIHQyO1xuICAgICAgICAgICAgdmFyIGhfID0gaCAvIDM2MDtcbiAgICAgICAgICAgIHQzWzBdID0gaF8gKyAxLzM7XG4gICAgICAgICAgICB0M1sxXSA9IGhfO1xuICAgICAgICAgICAgdDNbMl0gPSBoXyAtIDEvMztcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodDNbaV0gPCAwKSB7IHQzW2ldICs9IDE7IH1cbiAgICAgICAgICAgICAgICBpZiAodDNbaV0gPiAxKSB7IHQzW2ldIC09IDE7IH1cbiAgICAgICAgICAgICAgICBpZiAoNiAqIHQzW2ldIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDNbaV07IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgyICogdDNbaV0gPCAxKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MjsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDMgKiB0M1tpXSA8IDIpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxICsgKHQyIC0gdDEpICogKCgyIC8gMykgLSB0M1tpXSkgKiA2OyB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzc2lnbiA9IFtyb3VuZCQxKGNbMF0qMjU1KSxyb3VuZCQxKGNbMV0qMjU1KSxyb3VuZCQxKGNbMl0qMjU1KV0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgYWxwaGEgY2hhbm5lbFxuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYixhcmdzWzNdXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgIH07XG5cbiAgICB2YXIgaHNsMnJnYl8xID0gaHNsMnJnYjtcblxuICAgIHZhciBSRV9SR0IgPSAvXnJnYlxcKFxccyooLT9cXGQrKSxcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccypcXCkkLztcbiAgICB2YXIgUkVfUkdCQSA9IC9ecmdiYVxcKFxccyooLT9cXGQrKSxcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcbiAgICB2YXIgUkVfUkdCX1BDVCA9IC9ecmdiXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKlxcKSQvO1xuICAgIHZhciBSRV9SR0JBX1BDVCA9IC9ecmdiYVxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSUsXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcbiAgICB2YXIgUkVfSFNMID0gL15oc2xcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgICB2YXIgUkVfSFNMQSA9IC9eaHNsYVxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKFswMV18WzAxXT9cXC5cXGQrKVxcKSQvO1xuXG4gICAgdmFyIHJvdW5kJDIgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGNzczJyZ2IgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgICAgIGNzcyA9IGNzcy50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgdmFyIG07XG5cbiAgICAgICAgaWYgKGlucHV0LmZvcm1hdC5uYW1lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuZm9ybWF0Lm5hbWVkKGNzcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2IoMjUwLDIwLDApXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0IpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZ2JbaV0gPSArcmdiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiWzNdID0gMTsgIC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgICAgIHJldHVybiByZ2I7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2JhKDI1MCwyMCwwLDAuNClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQkEpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQxID0gbS5zbGljZSgxLDUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxPTA7IGkkMTw0OyBpJDErKykge1xuICAgICAgICAgICAgICAgIHJnYiQxW2kkMV0gPSArcmdiJDFbaSQxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZ2IkMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYigxMDAlLDAlLDAlKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCX1BDVCkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDIgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDI9MDsgaSQyPDM7IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDJbaSQyXSA9IHJvdW5kJDIocmdiJDJbaSQyXSAqIDIuNTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiJDJbM10gPSAxOyAgLy8gZGVmYXVsdCBhbHBoYVxuICAgICAgICAgICAgcmV0dXJuIHJnYiQyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiYSgxMDAlLDAlLDAlLDAuNClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQkFfUENUKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMyA9IG0uc2xpY2UoMSw1KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMz0wOyBpJDM8MzsgaSQzKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkM1tpJDNdID0gcm91bmQkMihyZ2IkM1tpJDNdICogMi41NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2IkM1szXSA9ICtyZ2IkM1szXTtcbiAgICAgICAgICAgIHJldHVybiByZ2IkMztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhzbCgwLDEwMCUsNTAlKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfSFNMKSkpIHtcbiAgICAgICAgICAgIHZhciBoc2wgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBoc2xbMV0gKj0gMC4wMTtcbiAgICAgICAgICAgIGhzbFsyXSAqPSAwLjAxO1xuICAgICAgICAgICAgdmFyIHJnYiQ0ID0gaHNsMnJnYl8xKGhzbCk7XG4gICAgICAgICAgICByZ2IkNFszXSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gcmdiJDQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoc2xhKDAsMTAwJSw1MCUsMC41KVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfSFNMQSkpKSB7XG4gICAgICAgICAgICB2YXIgaHNsJDEgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBoc2wkMVsxXSAqPSAwLjAxO1xuICAgICAgICAgICAgaHNsJDFbMl0gKj0gMC4wMTtcbiAgICAgICAgICAgIHZhciByZ2IkNSA9IGhzbDJyZ2JfMShoc2wkMSk7XG4gICAgICAgICAgICByZ2IkNVszXSA9ICttWzRdOyAgLy8gZGVmYXVsdCBhbHBoYSA9IDFcbiAgICAgICAgICAgIHJldHVybiByZ2IkNTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjc3MycmdiLnRlc3QgPSBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gUkVfUkdCLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQkEudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCX1BDVC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JBX1BDVC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9IU0wudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfSFNMQS50ZXN0KHMpO1xuICAgIH07XG5cbiAgICB2YXIgY3NzMnJnYl8xID0gY3NzMnJnYjtcblxuICAgIHZhciB0eXBlJDMgPSB1dGlscy50eXBlO1xuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuY3NzID0gZnVuY3Rpb24obW9kZSkge1xuICAgICAgICByZXR1cm4gcmdiMmNzc18xKHRoaXMuX3JnYiwgbW9kZSk7XG4gICAgfTtcblxuICAgIGNocm9tYV8xLmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3JfMSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NzcyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuZm9ybWF0LmNzcyA9IGNzczJyZ2JfMTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJDMoaCkgPT09ICdzdHJpbmcnICYmIGNzczJyZ2JfMS50ZXN0KGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjc3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJDggPSB1dGlscy51bnBhY2s7XG5cbiAgICBpbnB1dC5mb3JtYXQuZ2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYiA9IHVucGFjayQ4KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHJnYlswXSAqPSAyNTU7XG4gICAgICAgIHJnYlsxXSAqPSAyNTU7XG4gICAgICAgIHJnYlsyXSAqPSAyNTU7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfTtcblxuICAgIGNocm9tYV8xLmdsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnZ2wnXSkgKSk7XG4gICAgfTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmdsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgICAgIHJldHVybiBbcmdiWzBdLzI1NSwgcmdiWzFdLzI1NSwgcmdiWzJdLzI1NSwgcmdiWzNdXTtcbiAgICB9O1xuXG4gICAgdmFyIHVucGFjayQ5ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIHJnYjJoY2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQ5KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICAgICAgdmFyIGMgPSBkZWx0YSAqIDEwMCAvIDI1NTtcbiAgICAgICAgdmFyIF9nID0gbWluIC8gKDI1NSAtIGRlbHRhKSAqIDEwMDtcbiAgICAgICAgdmFyIGg7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4KSB7IGggPSAoZyAtIGIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChnID09PSBtYXgpIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4KSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgYywgX2ddO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhjZ18xID0gcmdiMmhjZztcblxuICAgIHZhciB1bnBhY2skYSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4gICAgLypcbiAgICAgKiB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IEhTViB3aXRoIHNvbWUgbWlub3IgdHdlYWtzXG4gICAgICpcbiAgICAgKiBodWUuLiBbMC4uMzYwXVxuICAgICAqIGNocm9tYSAuLiBbMC4uMV1cbiAgICAgKiBncmF5bmVzcyAuLiBbMC4uMV1cbiAgICAgKi9cblxuICAgIHZhciBoY2cycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDIsIGFzc2lnbiQzLCBhc3NpZ24kNCwgYXNzaWduJDU7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayRhKGFyZ3MsICdoY2cnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBfZyA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgX2cgPSBfZyAqIDI1NTtcbiAgICAgICAgdmFyIF9jID0gYyAqIDI1NTtcbiAgICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IF9nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGggPT09IDM2MCkgeyBoID0gMDsgfVxuICAgICAgICAgICAgaWYgKGggPiAzNjApIHsgaCAtPSAzNjA7IH1cbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICAgICAgaCAvPSA2MDtcbiAgICAgICAgICAgIHZhciBpID0gZmxvb3IoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSBfZyAqICgxIC0gYyk7XG4gICAgICAgICAgICB2YXIgcSA9IHAgKyBfYyAqICgxIC0gZik7XG4gICAgICAgICAgICB2YXIgdCA9IHAgKyBfYyAqIGY7XG4gICAgICAgICAgICB2YXIgdiA9IHAgKyBfYztcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhjZzJyZ2JfMSA9IGhjZzJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJGIgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkNCA9IHV0aWxzLnR5cGU7XG5cblxuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuaGNnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaGNnXzEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEuaGNnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGNnJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQuaGNnID0gaGNnMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skYihhcmdzLCAnaGNnJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ0KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoY2cnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkNCA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJvdW5kJDMgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIHJnYjJoZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRjKGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBhID0gcmVmWzNdO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkNChhcmdzKSB8fCAnYXV0byc7XG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHsgYSA9IDE7IH1cbiAgICAgICAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgbW9kZSA9IGEgPCAxID8gJ3JnYmEnIDogJ3JnYic7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHJvdW5kJDMocik7XG4gICAgICAgIGcgPSByb3VuZCQzKGcpO1xuICAgICAgICBiID0gcm91bmQkMyhiKTtcbiAgICAgICAgdmFyIHUgPSByIDw8IDE2IHwgZyA8PCA4IHwgYjtcbiAgICAgICAgdmFyIHN0ciA9IFwiMDAwMDAwXCIgKyB1LnRvU3RyaW5nKDE2KTsgLy8jLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDYpO1xuICAgICAgICB2YXIgaHhhID0gJzAnICsgcm91bmQkMyhhICogMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgIGh4YSA9IGh4YS5zdWJzdHIoaHhhLmxlbmd0aCAtIDIpO1xuICAgICAgICBzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAncmdiYSc6IHJldHVybiAoXCIjXCIgKyBzdHIgKyBoeGEpO1xuICAgICAgICAgICAgY2FzZSAnYXJnYic6IHJldHVybiAoXCIjXCIgKyBoeGEgKyBzdHIpO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIChcIiNcIiArIHN0cik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoZXhfMSA9IHJnYjJoZXg7XG5cbiAgICB2YXIgUkVfSEVYID0gL14jPyhbQS1GYS1mMC05XXs2fXxbQS1GYS1mMC05XXszfSkkLztcbiAgICB2YXIgUkVfSEVYQSA9IC9eIz8oW0EtRmEtZjAtOV17OH18W0EtRmEtZjAtOV17NH0pJC87XG5cbiAgICB2YXIgaGV4MnJnYiA9IGZ1bmN0aW9uIChoZXgpIHtcbiAgICAgICAgaWYgKGhleC5tYXRjaChSRV9IRVgpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCB8fCBoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIHNpeC1kaWdpdFxuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGhleCA9IGhleFswXStoZXhbMF0raGV4WzFdK2hleFsxXStoZXhbMl0raGV4WzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByID0gdSA+PiAxNjtcbiAgICAgICAgICAgIHZhciBnID0gdSA+PiA4ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiID0gdSAmIDB4RkY7XG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWF0Y2ggcmdiYSBoZXggZm9ybWF0LCBlZyAjRkYwMDAwNzdcbiAgICAgICAgaWYgKGhleC5tYXRjaChSRV9IRVhBKSkge1xuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDUgfHwgaGV4Lmxlbmd0aCA9PT0gOSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXhwYW5kIHNob3J0LW5vdGF0aW9uIHRvIGZ1bGwgZWlnaHQtZGlnaXRcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXhbMF0raGV4WzBdK2hleFsxXStoZXhbMV0raGV4WzJdK2hleFsyXStoZXhbM10raGV4WzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUkMSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgICAgdmFyIHIkMSA9IHUkMSA+PiAyNCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgZyQxID0gdSQxID4+IDE2ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiJDEgPSB1JDEgPj4gOCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYSA9IE1hdGgucm91bmQoKHUkMSAmIDB4RkYpIC8gMHhGRiAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gW3IkMSxnJDEsYiQxLGFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2UgdXNlZCB0byBjaGVjayBmb3IgY3NzIGNvbG9ycyBoZXJlXG4gICAgICAgIC8vIGlmIF9pbnB1dC5jc3M/IGFuZCByZ2IgPSBfaW5wdXQuY3NzIGhleFxuICAgICAgICAvLyAgICAgcmV0dXJuIHJnYlxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGhleCBjb2xvcjogXCIgKyBoZXgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGhleDJyZ2JfMSA9IGhleDJyZ2I7XG5cbiAgICB2YXIgdHlwZSQ1ID0gdXRpbHMudHlwZTtcblxuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLmhleCA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoZXhfMSh0aGlzLl9yZ2IsIG1vZGUpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5oZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoZXgnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5oZXggPSBoZXgycmdiXzE7XG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNCxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkNShoKSA9PT0gJ3N0cmluZycgJiYgWzMsNCw1LDYsNyw4LDldLmluZGV4T2YoaC5sZW5ndGgpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skZCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgVFdPUEkgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgbWluID0gTWF0aC5taW47XG4gICAgdmFyIHNxcnQgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIGFjb3MgPSBNYXRoLmFjb3M7XG5cbiAgICB2YXIgcmdiMmhzaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9yZ2IyaHNpLmNwcFxuICAgICAgICAqL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGQoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByIC89IDI1NTtcbiAgICAgICAgZyAvPSAyNTU7XG4gICAgICAgIGIgLz0gMjU1O1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4ocixnLGIpO1xuICAgICAgICB2YXIgaSA9IChyK2crYikgLyAzO1xuICAgICAgICB2YXIgcyA9IGkgPiAwID8gMSAtIG1pbl8vaSA6IDA7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICBoID0gTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCA9ICgoci1nKSsoci1iKSkgLyAyO1xuICAgICAgICAgICAgaCAvPSBzcXJ0KChyLWcpKihyLWcpICsgKHItYikqKGctYikpO1xuICAgICAgICAgICAgaCA9IGFjb3MoaCk7XG4gICAgICAgICAgICBpZiAoYiA+IGcpIHtcbiAgICAgICAgICAgICAgICBoID0gVFdPUEkgLSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaCAvPSBUV09QSTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gqMzYwLHMsaV07XG4gICAgfTtcblxuICAgIHZhciByZ2IyaHNpXzEgPSByZ2IyaHNpO1xuXG4gICAgdmFyIHVucGFjayRlID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsaW1pdCQxID0gdXRpbHMubGltaXQ7XG4gICAgdmFyIFRXT1BJJDEgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgUElUSElSRCA9IHV0aWxzLlBJVEhJUkQ7XG4gICAgdmFyIGNvcyA9IE1hdGguY29zO1xuXG4gICAgLypcbiAgICAgKiBodWUgWzAuLjM2MF1cbiAgICAgKiBzYXR1cmF0aW9uIFswLi4xXVxuICAgICAqIGludGVuc2l0eSBbMC4uMV1cbiAgICAgKi9cbiAgICB2YXIgaHNpMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9oc2kycmdiLmNwcFxuICAgICAgICAqL1xuICAgICAgICBhcmdzID0gdW5wYWNrJGUoYXJncywgJ2hzaScpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGkgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG5cbiAgICAgICAgaWYgKGlzTmFOKGgpKSB7IGggPSAwOyB9XG4gICAgICAgIGlmIChpc05hTihzKSkgeyBzID0gMDsgfVxuICAgICAgICAvLyBub3JtYWxpemUgaHVlXG4gICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICBoIC89IDM2MDtcbiAgICAgICAgaWYgKGggPCAxLzMpIHtcbiAgICAgICAgICAgIGIgPSAoMS1zKS8zO1xuICAgICAgICAgICAgciA9ICgxK3MqY29zKFRXT1BJJDEqaCkvY29zKFBJVEhJUkQtVFdPUEkkMSpoKSkvMztcbiAgICAgICAgICAgIGcgPSAxIC0gKGIrcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaCA8IDIvMykge1xuICAgICAgICAgICAgaCAtPSAxLzM7XG4gICAgICAgICAgICByID0gKDEtcykvMztcbiAgICAgICAgICAgIGcgPSAoMStzKmNvcyhUV09QSSQxKmgpL2NvcyhQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICBiID0gMSAtIChyK2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCAtPSAyLzM7XG4gICAgICAgICAgICBnID0gKDEtcykvMztcbiAgICAgICAgICAgIGIgPSAoMStzKmNvcyhUV09QSSQxKmgpL2NvcyhQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICByID0gMSAtIChnK2IpO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBsaW1pdCQxKGkqciozKTtcbiAgICAgICAgZyA9IGxpbWl0JDEoaSpnKjMpO1xuICAgICAgICBiID0gbGltaXQkMShpKmIqMyk7XG4gICAgICAgIHJldHVybiBbcioyNTUsIGcqMjU1LCBiKjI1NSwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgaHNpMnJnYl8xID0gaHNpMnJnYjtcblxuICAgIHZhciB1bnBhY2skZiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ2ID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5oc2kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc2lfMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5oc2kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc2knXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5oc2kgPSBoc2kycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRmKGFyZ3MsICdoc2knKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDYoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skZyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ3ID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5oc2wgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc2xfMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5oc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc2wnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5oc2wgPSBoc2wycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRnKGFyZ3MsICdoc2wnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDcoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skaCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbWluJDEgPSBNYXRoLm1pbjtcbiAgICB2YXIgbWF4JDEgPSBNYXRoLm1heDtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc3YocixnLGIpXG4gICAgICogLSByZ2IyaHN2KFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHN2KHtyLGcsYn0pXG4gICAgICovXG4gICAgdmFyIHJnYjJoc2wkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGgoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBnID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgbWluXyA9IG1pbiQxKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4XyA9IG1heCQxKHIsIGcsIGIpO1xuICAgICAgICB2YXIgZGVsdGEgPSBtYXhfIC0gbWluXztcbiAgICAgICAgdmFyIGgscyx2O1xuICAgICAgICB2ID0gbWF4XyAvIDI1NS4wO1xuICAgICAgICBpZiAobWF4XyA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMgPSBkZWx0YSAvIG1heF87XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4XykgeyBoID0gKGcgLSBiKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoZyA9PT0gbWF4XykgeyBoID0gMisoYiAtIHIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChiID09PSBtYXhfKSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgcywgdl1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc3YgPSByZ2IyaHNsJDE7XG5cbiAgICB2YXIgdW5wYWNrJGkgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGZsb29yJDEgPSBNYXRoLmZsb29yO1xuXG4gICAgdmFyIGhzdjJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMiwgYXNzaWduJDMsIGFzc2lnbiQ0LCBhc3NpZ24kNTtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJGkoYXJncywgJ2hzdicpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHYgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIHYgKj0gMjU1O1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoID09PSAzNjApIHsgaCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgICAgIGggLz0gNjA7XG5cbiAgICAgICAgICAgIHZhciBpID0gZmxvb3IkMShoKTtcbiAgICAgICAgICAgIHZhciBmID0gaCAtIGk7XG4gICAgICAgICAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgICAgICAgICAgdmFyIHEgPSB2ICogKDEgLSBzICogZik7XG4gICAgICAgICAgICB2YXIgdCA9IHYgKiAoMSAtIHMgKiAoMSAtIGYpKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiAoYXNzaWduID0gW3YsIHQsIHBdLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IChhc3NpZ24kMSA9IFtxLCB2LCBwXSwgciA9IGFzc2lnbiQxWzBdLCBnID0gYXNzaWduJDFbMV0sIGIgPSBhc3NpZ24kMVsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAoYXNzaWduJDIgPSBbcCwgdiwgdF0sIHIgPSBhc3NpZ24kMlswXSwgZyA9IGFzc2lnbiQyWzFdLCBiID0gYXNzaWduJDJbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzogKGFzc2lnbiQzID0gW3AsIHEsIHZdLCByID0gYXNzaWduJDNbMF0sIGcgPSBhc3NpZ24kM1sxXSwgYiA9IGFzc2lnbiQzWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IChhc3NpZ24kNCA9IFt0LCBwLCB2XSwgciA9IGFzc2lnbiQ0WzBdLCBnID0gYXNzaWduJDRbMV0sIGIgPSBhc3NpZ24kNFsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA1OiAoYXNzaWduJDUgPSBbdiwgcCwgcV0sIHIgPSBhc3NpZ24kNVswXSwgZyA9IGFzc2lnbiQ1WzFdLCBiID0gYXNzaWduJDVbMl0pOyBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsYXJncy5sZW5ndGggPiAzP2FyZ3NbM106MV07XG4gICAgfTtcblxuICAgIHZhciBoc3YycmdiXzEgPSBoc3YycmdiO1xuXG4gICAgdmFyIHVucGFjayRqID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDggPSB1dGlscy50eXBlO1xuXG5cblxuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLmhzdiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzdih0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5oc3YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc3YnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5oc3YgPSBoc3YycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRqKGFyZ3MsICdoc3YnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDgoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzdic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBsYWJDb25zdGFudHMgPSB7XG4gICAgICAgIC8vIENvcnJlc3BvbmRzIHJvdWdobHkgdG8gUkdCIGJyaWdodGVyL2RhcmtlclxuICAgICAgICBLbjogMTgsXG5cbiAgICAgICAgLy8gRDY1IHN0YW5kYXJkIHJlZmVyZW50XG4gICAgICAgIFhuOiAwLjk1MDQ3MCxcbiAgICAgICAgWW46IDEsXG4gICAgICAgIFpuOiAxLjA4ODgzMCxcblxuICAgICAgICB0MDogMC4xMzc5MzEwMzQsICAvLyA0IC8gMjlcbiAgICAgICAgdDE6IDAuMjA2ODk2NTUyLCAgLy8gNiAvIDI5XG4gICAgICAgIHQyOiAwLjEyODQxODU1LCAgIC8vIDMgKiB0MSAqIHQxXG4gICAgICAgIHQzOiAwLjAwODg1NjQ1MiwgIC8vIHQxICogdDEgKiB0MVxuICAgIH07XG5cbiAgICB2YXIgdW5wYWNrJGsgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyA9IE1hdGgucG93O1xuXG4gICAgdmFyIHJnYjJsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRrKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMnh5eihyLGcsYik7XG4gICAgICAgIHZhciB4ID0gcmVmJDFbMF07XG4gICAgICAgIHZhciB5ID0gcmVmJDFbMV07XG4gICAgICAgIHZhciB6ID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBsID0gMTE2ICogeSAtIDE2O1xuICAgICAgICByZXR1cm4gW2wgPCAwID8gMCA6IGwsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geildO1xuICAgIH07XG5cbiAgICB2YXIgcmdiX3h5eiA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIGlmICgociAvPSAyNTUpIDw9IDAuMDQwNDUpIHsgcmV0dXJuIHIgLyAxMi45MjsgfVxuICAgICAgICByZXR1cm4gcG93KChyICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfTtcblxuICAgIHZhciB4eXpfbGFiID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgPiBsYWJDb25zdGFudHMudDMpIHsgcmV0dXJuIHBvdyh0LCAxIC8gMyk7IH1cbiAgICAgICAgcmV0dXJuIHQgLyBsYWJDb25zdGFudHMudDIgKyBsYWJDb25zdGFudHMudDA7XG4gICAgfTtcblxuICAgIHZhciByZ2IyeHl6ID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIHIgPSByZ2JfeHl6KHIpO1xuICAgICAgICBnID0gcmdiX3h5eihnKTtcbiAgICAgICAgYiA9IHJnYl94eXooYik7XG4gICAgICAgIHZhciB4ID0geHl6X2xhYigoMC40MTI0NTY0ICogciArIDAuMzU3NTc2MSAqIGcgKyAwLjE4MDQzNzUgKiBiKSAvIGxhYkNvbnN0YW50cy5Ybik7XG4gICAgICAgIHZhciB5ID0geHl6X2xhYigoMC4yMTI2NzI5ICogciArIDAuNzE1MTUyMiAqIGcgKyAwLjA3MjE3NTAgKiBiKSAvIGxhYkNvbnN0YW50cy5Zbik7XG4gICAgICAgIHZhciB6ID0geHl6X2xhYigoMC4wMTkzMzM5ICogciArIDAuMTE5MTkyMCAqIGcgKyAwLjk1MDMwNDEgKiBiKSAvIGxhYkNvbnN0YW50cy5abik7XG4gICAgICAgIHJldHVybiBbeCx5LHpdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxhYl8xID0gcmdiMmxhYjtcblxuICAgIHZhciB1bnBhY2skbCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcG93JDEgPSBNYXRoLnBvdztcblxuICAgIC8qXG4gICAgICogTCogWzAuLjEwMF1cbiAgICAgKiBhIFstMTAwLi4xMDBdXG4gICAgICogYiBbLTEwMC4uMTAwXVxuICAgICAqL1xuICAgIHZhciBsYWIycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skbChhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGEgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciB4LHkseiwgcixnLGJfO1xuXG4gICAgICAgIHkgPSAobCArIDE2KSAvIDExNjtcbiAgICAgICAgeCA9IGlzTmFOKGEpID8geSA6IHkgKyBhIC8gNTAwO1xuICAgICAgICB6ID0gaXNOYU4oYikgPyB5IDogeSAtIGIgLyAyMDA7XG5cbiAgICAgICAgeSA9IGxhYkNvbnN0YW50cy5ZbiAqIGxhYl94eXooeSk7XG4gICAgICAgIHggPSBsYWJDb25zdGFudHMuWG4gKiBsYWJfeHl6KHgpO1xuICAgICAgICB6ID0gbGFiQ29uc3RhbnRzLlpuICogbGFiX3h5eih6KTtcblxuICAgICAgICByID0geHl6X3JnYigzLjI0MDQ1NDIgKiB4IC0gMS41MzcxMzg1ICogeSAtIDAuNDk4NTMxNCAqIHopOyAgLy8gRDY1IC0+IHNSR0JcbiAgICAgICAgZyA9IHh5el9yZ2IoLTAuOTY5MjY2MCAqIHggKyAxLjg3NjAxMDggKiB5ICsgMC4wNDE1NTYwICogeik7XG4gICAgICAgIGJfID0geHl6X3JnYigwLjA1NTY0MzQgKiB4IC0gMC4yMDQwMjU5ICogeSArIDEuMDU3MjI1MiAqIHopO1xuXG4gICAgICAgIHJldHVybiBbcixnLGJfLGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIHh5el9yZ2IgPSBmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gMjU1ICogKHIgPD0gMC4wMDMwNCA/IDEyLjkyICogciA6IDEuMDU1ICogcG93JDEociwgMSAvIDIuNCkgLSAwLjA1NSlcbiAgICB9O1xuXG4gICAgdmFyIGxhYl94eXogPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCA+IGxhYkNvbnN0YW50cy50MSA/IHQgKiB0ICogdCA6IGxhYkNvbnN0YW50cy50MiAqICh0IC0gbGFiQ29uc3RhbnRzLnQwKVxuICAgIH07XG5cbiAgICB2YXIgbGFiMnJnYl8xID0gbGFiMnJnYjtcblxuICAgIHZhciB1bnBhY2skbSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ5ID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5sYWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJsYWJfMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5sYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydsYWInXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5sYWIgPSBsYWIycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRtKGFyZ3MsICdsYWInKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDkoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skbiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgUkFEMkRFRyA9IHV0aWxzLlJBRDJERUc7XG4gICAgdmFyIHNxcnQkMSA9IE1hdGguc3FydDtcbiAgICB2YXIgYXRhbjIgPSBNYXRoLmF0YW4yO1xuICAgIHZhciByb3VuZCQ0ID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBsYWIybGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skbihhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBjID0gc3FydCQxKGEgKiBhICsgYiAqIGIpO1xuICAgICAgICB2YXIgaCA9IChhdGFuMihiLCBhKSAqIFJBRDJERUcgKyAzNjApICUgMzYwO1xuICAgICAgICBpZiAocm91bmQkNChjKjEwMDAwKSA9PT0gMCkgeyBoID0gTnVtYmVyLk5hTjsgfVxuICAgICAgICByZXR1cm4gW2wsIGMsIGhdO1xuICAgIH07XG5cbiAgICB2YXIgbGFiMmxjaF8xID0gbGFiMmxjaDtcblxuICAgIHZhciB1bnBhY2skbyA9IHV0aWxzLnVucGFjaztcblxuXG5cbiAgICB2YXIgcmdiMmxjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJG8oYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2IybGFiXzEocixnLGIpO1xuICAgICAgICB2YXIgbCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIGxhYjJsY2hfMShsLGEsYl8pO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxjaF8xID0gcmdiMmxjaDtcblxuICAgIHZhciB1bnBhY2skcCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgREVHMlJBRCA9IHV0aWxzLkRFRzJSQUQ7XG4gICAgdmFyIHNpbiA9IE1hdGguc2luO1xuICAgIHZhciBjb3MkMSA9IE1hdGguY29zO1xuXG4gICAgdmFyIGxjaDJsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgQ29udmVydCBmcm9tIGEgcXVhbGl0YXRpdmUgcGFyYW1ldGVyIGggYW5kIGEgcXVhbnRpdGF0aXZlIHBhcmFtZXRlciBsIHRvIGEgMjQtYml0IHBpeGVsLlxuICAgICAgICBUaGVzZSBmb3JtdWxhcyB3ZXJlIGludmVudGVkIGJ5IERhdmlkIERhbHJ5bXBsZSB0byBvYnRhaW4gbWF4aW11bSBjb250cmFzdCB3aXRob3V0IGdvaW5nXG4gICAgICAgIG91dCBvZiBnYW11dCBpZiB0aGUgcGFyYW1ldGVycyBhcmUgaW4gdGhlIHJhbmdlIDAtMS5cblxuICAgICAgICBBIHNhdHVyYXRpb24gbXVsdGlwbGllciB3YXMgYWRkZWQgYnkgR3JlZ29yIEFpc2NoXG4gICAgICAgICovXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skcChhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGggPSByZWZbMl07XG4gICAgICAgIGlmIChpc05hTihoKSkgeyBoID0gMDsgfVxuICAgICAgICBoID0gaCAqIERFRzJSQUQ7XG4gICAgICAgIHJldHVybiBbbCwgY29zJDEoaCkgKiBjLCBzaW4oaCkgKiBjXVxuICAgIH07XG5cbiAgICB2YXIgbGNoMmxhYl8xID0gbGNoMmxhYjtcblxuICAgIHZhciB1bnBhY2skcSA9IHV0aWxzLnVucGFjaztcblxuXG5cbiAgICB2YXIgbGNoMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJHEoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcmVmID0gbGNoMmxhYl8xIChsLGMsaCk7XG4gICAgICAgIHZhciBMID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBsYWIycmdiXzEgKEwsYSxiXyk7XG4gICAgICAgIHZhciByID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBnID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgbGNoMnJnYl8xID0gbGNoMnJnYjtcblxuICAgIHZhciB1bnBhY2skciA9IHV0aWxzLnVucGFjaztcblxuXG4gICAgdmFyIGhjbDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIGhjbCA9IHVucGFjayRyKGFyZ3MsICdoY2wnKS5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiBsY2gycmdiXzEuYXBwbHkodm9pZCAwLCBoY2wpO1xuICAgIH07XG5cbiAgICB2YXIgaGNsMnJnYl8xID0gaGNsMnJnYjtcblxuICAgIHZhciB1bnBhY2skcyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRhID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5sY2ggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHJnYjJsY2hfMSh0aGlzLl9yZ2IpOyB9O1xuICAgIENvbG9yXzEucHJvdG90eXBlLmhjbCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcmdiMmxjaF8xKHRoaXMuX3JnYikucmV2ZXJzZSgpOyB9O1xuXG4gICAgY2hyb21hXzEubGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbGNoJ10pICkpO1xuICAgIH07XG4gICAgY2hyb21hXzEuaGNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGNsJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQubGNoID0gbGNoMnJnYl8xO1xuICAgIGlucHV0LmZvcm1hdC5oY2wgPSBoY2wycmdiXzE7XG5cbiAgICBbJ2xjaCcsJ2hjbCddLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJHMoYXJncywgbSk7XG4gICAgICAgICAgICBpZiAodHlwZSRhKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTsgfSk7XG5cbiAgICAvKipcbiAgICBcdFgxMSBjb2xvciBuYW1lc1xuXG4gICAgXHRodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiAgICAqL1xuXG4gICAgdmFyIHczY3gxMSA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnI2YwZjhmZicsXG4gICAgICAgIGFudGlxdWV3aGl0ZTogJyNmYWViZDcnLFxuICAgICAgICBhcXVhOiAnIzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICcjN2ZmZmQ0JyxcbiAgICAgICAgYXp1cmU6ICcjZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICcjZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnI2ZmZTRjNCcsXG4gICAgICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcjMDAwMGZmJyxcbiAgICAgICAgYmx1ZXZpb2xldDogJyM4YTJiZTInLFxuICAgICAgICBicm93bjogJyNhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICcjZGViODg3JyxcbiAgICAgICAgY2FkZXRibHVlOiAnIzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnI2QyNjkxZScsXG4gICAgICAgIGNvcmFsOiAnI2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXI6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybmZsb3dlcmJsdWU6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICcjZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJyNkYzE0M2MnLFxuICAgICAgICBjeWFuOiAnIzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnIzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnIzAwOGI4YicsXG4gICAgICAgIGRhcmtnb2xkZW5yb2Q6ICcjYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICcjYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnIzAwNjQwMCcsXG4gICAgICAgIGRhcmtncmV5OiAnI2E5YTlhOScsXG4gICAgICAgIGRhcmtraGFraTogJyNiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJyM4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJyM1NTZiMmYnLFxuICAgICAgICBkYXJrb3JhbmdlOiAnI2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICcjOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJyM4YjAwMDAnLFxuICAgICAgICBkYXJrc2FsbW9uOiAnI2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJyM4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnIzQ4M2Q4YicsXG4gICAgICAgIGRhcmtzbGF0ZWdyYXk6ICcjMmY0ZjRmJyxcbiAgICAgICAgZGFya3NsYXRlZ3JleTogJyMyZjRmNGYnLFxuICAgICAgICBkYXJrdHVycXVvaXNlOiAnIzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICcjOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICcjZmYxNDkzJyxcbiAgICAgICAgZGVlcHNreWJsdWU6ICcjMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJyM2OTY5NjknLFxuICAgICAgICBkaW1ncmV5OiAnIzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcjMWU5MGZmJyxcbiAgICAgICAgZmlyZWJyaWNrOiAnI2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnI2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnIzIyOGIyMicsXG4gICAgICAgIGZ1Y2hzaWE6ICcjZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnI2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICcjZjhmOGZmJyxcbiAgICAgICAgZ29sZDogJyNmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICcjZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJyM4MDgwODAnLFxuICAgICAgICBncmVlbjogJyMwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJyNhZGZmMmYnLFxuICAgICAgICBncmV5OiAnIzgwODA4MCcsXG4gICAgICAgIGhvbmV5ZGV3OiAnI2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICcjZmY2OWI0JyxcbiAgICAgICAgaW5kaWFucmVkOiAnI2NkNWM1YycsXG4gICAgICAgIGluZGlnbzogJyM0YjAwODInLFxuICAgICAgICBpdm9yeTogJyNmZmZmZjAnLFxuICAgICAgICBraGFraTogJyNmMGU2OGMnLFxuICAgICAgICBsYXNlcmxlbW9uOiAnI2ZmZmY1NCcsXG4gICAgICAgIGxhdmVuZGVyOiAnI2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICcjZmZmMGY1JyxcbiAgICAgICAgbGF3bmdyZWVuOiAnIzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJyNmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICcjYWRkOGU2JyxcbiAgICAgICAgbGlnaHRjb3JhbDogJyNmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICcjZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2Q6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRncmF5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICcjOTBlZTkwJyxcbiAgICAgICAgbGlnaHRncmV5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0cGluazogJyNmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJyNmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnIzIwYjJhYScsXG4gICAgICAgIGxpZ2h0c2t5Ymx1ZTogJyM4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHNsYXRlZ3JleTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHN0ZWVsYmx1ZTogJyNiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJyNmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnIzAwZmYwMCcsXG4gICAgICAgIGxpbWVncmVlbjogJyMzMmNkMzInLFxuICAgICAgICBsaW5lbjogJyNmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnI2ZmMDBmZicsXG4gICAgICAgIG1hcm9vbjogJyM4MDAwMDAnLFxuICAgICAgICBtYXJvb24yOiAnIzdmMDAwMCcsXG4gICAgICAgIG1hcm9vbjM6ICcjYjAzMDYwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJyM2NmNkYWEnLFxuICAgICAgICBtZWRpdW1ibHVlOiAnIzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJyNiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICcjOTM3MGRiJyxcbiAgICAgICAgbWVkaXVtc2VhZ3JlZW46ICcjM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnIzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnIzAwZmE5YScsXG4gICAgICAgIG1lZGl1bXR1cnF1b2lzZTogJyM0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICcjYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnIzE5MTk3MCcsXG4gICAgICAgIG1pbnRjcmVhbTogJyNmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICcjZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICcjZmZlNGI1JyxcbiAgICAgICAgbmF2YWpvd2hpdGU6ICcjZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJyMwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnI2ZkZjVlNicsXG4gICAgICAgIG9saXZlOiAnIzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJyM2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICcjZmZhNTAwJyxcbiAgICAgICAgb3JhbmdlcmVkOiAnI2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJyNkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnI2VlZThhYScsXG4gICAgICAgIHBhbGVncmVlbjogJyM5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnI2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICcjZGI3MDkzJyxcbiAgICAgICAgcGFwYXlhd2hpcDogJyNmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICcjZmZkYWI5JyxcbiAgICAgICAgcGVydTogJyNjZDg1M2YnLFxuICAgICAgICBwaW5rOiAnI2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICcjZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJyNiMGUwZTYnLFxuICAgICAgICBwdXJwbGU6ICcjODAwMDgwJyxcbiAgICAgICAgcHVycGxlMjogJyM3ZjAwN2YnLFxuICAgICAgICBwdXJwbGUzOiAnI2EwMjBmMCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgICAgICAgcmVkOiAnI2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJyNiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICcjNDE2OWUxJyxcbiAgICAgICAgc2FkZGxlYnJvd246ICcjOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnI2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICcjZjRhNDYwJyxcbiAgICAgICAgc2VhZ3JlZW46ICcjMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICcjZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnI2EwNTIyZCcsXG4gICAgICAgIHNpbHZlcjogJyNjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnIzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJyM2YTVhY2QnLFxuICAgICAgICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgICAgICAgc2xhdGVncmV5OiAnIzcwODA5MCcsXG4gICAgICAgIHNub3c6ICcjZmZmYWZhJyxcbiAgICAgICAgc3ByaW5nZ3JlZW46ICcjMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnIzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJyNkMmI0OGMnLFxuICAgICAgICB0ZWFsOiAnIzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICcjZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnI2ZmNjM0NycsXG4gICAgICAgIHR1cnF1b2lzZTogJyM0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICcjZWU4MmVlJyxcbiAgICAgICAgd2hlYXQ6ICcjZjVkZWIzJyxcbiAgICAgICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJyNmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICcjZmZmZjAwJyxcbiAgICAgICAgeWVsbG93Z3JlZW46ICcjOWFjZDMyJ1xuICAgIH07XG5cbiAgICB2YXIgdzNjeDExXzEgPSB3M2N4MTE7XG5cbiAgICB2YXIgdHlwZSRiID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUubmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGV4ID0gcmdiMmhleF8xKHRoaXMuX3JnYiwgJ3JnYicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IE9iamVjdC5rZXlzKHczY3gxMV8xKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBuID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgaWYgKHczY3gxMV8xW25dID09PSBoZXgpIHsgcmV0dXJuIG4udG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZXg7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5uYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh3M2N4MTFfMVtuYW1lXSkgeyByZXR1cm4gaGV4MnJnYl8xKHczY3gxMV8xW25hbWVdKTsgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29sb3IgbmFtZTogJytuYW1lKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkYihoKSA9PT0gJ3N0cmluZycgJiYgdzNjeDExXzFbaC50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbmFtZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJHQgPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgcmdiMm51bSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJHQoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByZXR1cm4gKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm51bV8xID0gcmdiMm51bTtcblxuICAgIHZhciB0eXBlJGMgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIG51bTJyZ2IgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIGlmICh0eXBlJGMobnVtKSA9PSBcIm51bWJlclwiICYmIG51bSA+PSAwICYmIG51bSA8PSAweEZGRkZGRikge1xuICAgICAgICAgICAgdmFyIHIgPSBudW0gPj4gMTY7XG4gICAgICAgICAgICB2YXIgZyA9IChudW0gPj4gOCkgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIgPSBudW0gJiAweEZGO1xuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIG51bSBjb2xvcjogXCIrbnVtKTtcbiAgICB9O1xuXG4gICAgdmFyIG51bTJyZ2JfMSA9IG51bTJyZ2I7XG5cbiAgICB2YXIgdHlwZSRkID0gdXRpbHMudHlwZTtcblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5udW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJudW1fMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5udW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydudW0nXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5udW0gPSBudW0ycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGUkZChhcmdzWzBdKSA9PT0gJ251bWJlcicgJiYgYXJnc1swXSA+PSAwICYmIGFyZ3NbMF0gPD0gMHhGRkZGRkYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skdSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRlID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcm91bmQkNSA9IE1hdGgucm91bmQ7XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbihybmQpIHtcbiAgICAgICAgaWYgKCBybmQgPT09IHZvaWQgMCApIHJuZD10cnVlO1xuXG4gICAgICAgIGlmIChybmQgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCwzKTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsMykubWFwKHJvdW5kJDUpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5yZ2JhID0gZnVuY3Rpb24ocm5kKSB7XG4gICAgICAgIGlmICggcm5kID09PSB2b2lkIDAgKSBybmQ9dHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsNCkubWFwKGZ1bmN0aW9uICh2LGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpPDMgPyAocm5kID09PSBmYWxzZSA/IHYgOiByb3VuZCQ1KHYpKSA6IHY7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydyZ2InXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skdShhcmdzLCAncmdiYScpO1xuICAgICAgICBpZiAocmdiYVszXSA9PT0gdW5kZWZpbmVkKSB7IHJnYmFbM10gPSAxOyB9XG4gICAgICAgIHJldHVybiByZ2JhO1xuICAgIH07XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAzLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayR1KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRlKGFyZ3MpID09PSAnYXJyYXknICYmIChhcmdzLmxlbmd0aCA9PT0gMyB8fFxuICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGUkZShhcmdzWzNdKSA9PSAnbnVtYmVyJyAmJiBhcmdzWzNdID49IDAgJiYgYXJnc1szXSA8PSAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAncmdiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLypcbiAgICAgKiBCYXNlZCBvbiBpbXBsZW1lbnRhdGlvbiBieSBOZWlsIEJhcnRsZXR0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL25laWxiYXJ0bGV0dC9jb2xvci10ZW1wZXJhdHVyZVxuICAgICAqL1xuXG4gICAgdmFyIGxvZyA9IE1hdGgubG9nO1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYiA9IGZ1bmN0aW9uIChrZWx2aW4pIHtcbiAgICAgICAgdmFyIHRlbXAgPSBrZWx2aW4gLyAxMDA7XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgaWYgKHRlbXAgPCA2Nikge1xuICAgICAgICAgICAgciA9IDI1NTtcbiAgICAgICAgICAgIGcgPSAtMTU1LjI1NDg1NTYyNzA5MTc5IC0gMC40NDU5Njk1MDQ2OTU3OTEzMyAqIChnID0gdGVtcC0yKSArIDEwNC40OTIxNjE5OTM5Mzg4OCAqIGxvZyhnKTtcbiAgICAgICAgICAgIGIgPSB0ZW1wIDwgMjAgPyAwIDogLTI1NC43NjkzNTE4NDEyMDkwMiArIDAuODI3NDA5NjA2NDAwNzM5NSAqIChiID0gdGVtcC0xMCkgKyAxMTUuNjc5OTQ0MDEwNjYxNDcgKiBsb2coYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gMzUxLjk3NjkwNTY2ODA1NjkzICsgMC4xMTQyMDY0NTM3ODQxNjUgKiAociA9IHRlbXAtNTUpIC0gNDAuMjUzNjYzMDkzMzIxMjcgKiBsb2cocik7XG4gICAgICAgICAgICBnID0gMzI1LjQ0OTQxMjU3MTE5NzQgKyAwLjA3OTQzNDU2NTM2NjYyMzQyICogKGcgPSB0ZW1wLTUwKSAtIDI4LjA4NTI5NjM1MDc5NTcgKiBsb2coZyk7XG4gICAgICAgICAgICBiID0gMjU1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgfTtcblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2JfMSA9IHRlbXBlcmF0dXJlMnJnYjtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKiovXG5cblxuICAgIHZhciB1bnBhY2skdiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcm91bmQkNiA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2IgPSB1bnBhY2skdihhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmdiWzBdLCBiID0gcmdiWzJdO1xuICAgICAgICB2YXIgbWluVGVtcCA9IDEwMDA7XG4gICAgICAgIHZhciBtYXhUZW1wID0gNDAwMDA7XG4gICAgICAgIHZhciBlcHMgPSAwLjQ7XG4gICAgICAgIHZhciB0ZW1wO1xuICAgICAgICB3aGlsZSAobWF4VGVtcCAtIG1pblRlbXAgPiBlcHMpIHtcbiAgICAgICAgICAgIHRlbXAgPSAobWF4VGVtcCArIG1pblRlbXApICogMC41O1xuICAgICAgICAgICAgdmFyIHJnYiQxID0gdGVtcGVyYXR1cmUycmdiXzEodGVtcCk7XG4gICAgICAgICAgICBpZiAoKHJnYiQxWzJdIC8gcmdiJDFbMF0pID49IChiIC8gcikpIHtcbiAgICAgICAgICAgICAgICBtYXhUZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluVGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdW5kJDYodGVtcCk7XG4gICAgfTtcblxuICAgIHZhciByZ2IydGVtcGVyYXR1cmVfMSA9IHJnYjJ0ZW1wZXJhdHVyZTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLnRlbXAgPVxuICAgIENvbG9yXzEucHJvdG90eXBlLmtlbHZpbiA9XG4gICAgQ29sb3JfMS5wcm90b3R5cGUudGVtcGVyYXR1cmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJ0ZW1wZXJhdHVyZV8xKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYV8xLnRlbXAgPVxuICAgIGNocm9tYV8xLmtlbHZpbiA9XG4gICAgY2hyb21hXzEudGVtcGVyYXR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWyd0ZW1wJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQudGVtcCA9XG4gICAgaW5wdXQuZm9ybWF0LmtlbHZpbiA9XG4gICAgaW5wdXQuZm9ybWF0LnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmUycmdiXzE7XG5cbiAgICB2YXIgdHlwZSRmID0gdXRpbHMudHlwZTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmFscGhhID0gZnVuY3Rpb24oYSwgbXV0YXRlKSB7XG4gICAgICAgIGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGU9ZmFsc2U7XG5cbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCAmJiB0eXBlJGYoYSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmdiWzNdID0gYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShbdGhpcy5fcmdiWzBdLCB0aGlzLl9yZ2JbMV0sIHRoaXMuX3JnYlsyXSwgYV0sICdyZ2InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiWzNdO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5jbGlwcGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2IuX2NsaXBwZWQgfHwgZmFsc2U7XG4gICAgfTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmRhcmtlbiA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxhYiA9IG1lLmxhYigpO1xuICAgIFx0bGFiWzBdIC09IGxhYkNvbnN0YW50cy5LbiAqIGFtb3VudDtcbiAgICBcdHJldHVybiBuZXcgQ29sb3JfMShsYWIsICdsYWInKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuYnJpZ2h0ZW4gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0cmV0dXJuIHRoaXMuZGFya2VuKC1hbW91bnQpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5kYXJrZXIgPSBDb2xvcl8xLnByb3RvdHlwZS5kYXJrZW47XG4gICAgQ29sb3JfMS5wcm90b3R5cGUuYnJpZ2h0ZXIgPSBDb2xvcl8xLnByb3RvdHlwZS5icmlnaHRlbjtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG1jKSB7XG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHsgcmV0dXJuIHNyY1tpXTsgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgdHlwZSRnID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcG93JDIgPSBNYXRoLnBvdztcblxuICAgIHZhciBFUFMgPSAxZS03O1xuICAgIHZhciBNQVhfSVRFUiA9IDIwO1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUubHVtaW5hbmNlID0gZnVuY3Rpb24obHVtKSB7XG4gICAgICAgIGlmIChsdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlJGcobHVtKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChsdW0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcHVyZSBibGFja1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShbMCwwLDAsdGhpcy5fcmdiWzNdXSwgJ3JnYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGx1bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBwdXJlIHdoaXRlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKFsyNTUsMjU1LDI1NSx0aGlzLl9yZ2JbM11dLCAncmdiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb21wdXRlIG5ldyBjb2xvciB1c2luZy4uLlxuICAgICAgICAgICAgdmFyIGN1cl9sdW0gPSB0aGlzLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgdmFyIG1vZGUgPSAncmdiJztcbiAgICAgICAgICAgIHZhciBtYXhfaXRlciA9IE1BWF9JVEVSO1xuXG4gICAgICAgICAgICB2YXIgdGVzdCA9IGZ1bmN0aW9uIChsb3csIGhpZ2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWlkID0gbG93LmludGVycG9sYXRlKGhpZ2gsIDAuNSwgbW9kZSk7XG4gICAgICAgICAgICAgICAgdmFyIGxtID0gbWlkLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhsdW0gLSBsbSkgPCBFUFMgfHwgIW1heF9pdGVyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2UgZW5vdWdoXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsbSA+IGx1bSA/IHRlc3QobG93LCBtaWQpIDogdGVzdChtaWQsIGhpZ2gpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHJnYiA9IChjdXJfbHVtID4gbHVtID8gdGVzdChuZXcgQ29sb3JfMShbMCwwLDBdKSwgdGhpcykgOiB0ZXN0KHRoaXMsIG5ldyBDb2xvcl8xKFsyNTUsMjU1LDI1NV0pKSkucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEocmdiLmNvbmNhdCggW3RoaXMuX3JnYlszXV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiMmx1bWluYW5jZS5hcHBseSh2b2lkIDAsICh0aGlzLl9yZ2IpLnNsaWNlKDAsMykpO1xuICAgIH07XG5cblxuICAgIHZhciByZ2IybHVtaW5hbmNlID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIC8vIHJlbGF0aXZlIGx1bWluYW5jZVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICAgICAgICByID0gbHVtaW5hbmNlX3gocik7XG4gICAgICAgIGcgPSBsdW1pbmFuY2VfeChnKTtcbiAgICAgICAgYiA9IGx1bWluYW5jZV94KGIpO1xuICAgICAgICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xuICAgIH07XG5cbiAgICB2YXIgbHVtaW5hbmNlX3ggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB4IC89IDI1NTtcbiAgICAgICAgcmV0dXJuIHggPD0gMC4wMzkyOCA/IHgvMTIuOTIgOiBwb3ckMigoeCswLjA1NSkvMS4wNTUsIDIuNCk7XG4gICAgfTtcblxuICAgIHZhciBpbnRlcnBvbGF0b3IgPSB7fTtcblxuICAgIHZhciB0eXBlJGggPSB1dGlscy50eXBlO1xuXG5cbiAgICB2YXIgbWl4ID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgaWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDM7XG4gICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDMgXTtcblxuICAgICAgICB2YXIgbW9kZSA9IHJlc3RbMF0gfHwgJ2xyZ2InO1xuICAgICAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSAmJiAhcmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGZhbGwgYmFjayB0byB0aGUgZmlyc3Qgc3VwcG9ydGVkIG1vZGVcbiAgICAgICAgICAgIG1vZGUgPSBPYmplY3Qua2V5cyhpbnRlcnBvbGF0b3IpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW50ZXJwb2xhdG9yW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiaW50ZXJwb2xhdGlvbiBtb2RlIFwiICsgbW9kZSArIFwiIGlzIG5vdCBkZWZpbmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSRoKGNvbDEpICE9PSAnb2JqZWN0JykgeyBjb2wxID0gbmV3IENvbG9yXzEoY29sMSk7IH1cbiAgICAgICAgaWYgKHR5cGUkaChjb2wyKSAhPT0gJ29iamVjdCcpIHsgY29sMiA9IG5ldyBDb2xvcl8xKGNvbDIpOyB9XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0b3JbbW9kZV0oY29sMSwgY29sMiwgZilcbiAgICAgICAgICAgIC5hbHBoYShjb2wxLmFscGhhKCkgKyBmICogKGNvbDIuYWxwaGEoKSAtIGNvbDEuYWxwaGEoKSkpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5taXggPVxuICAgIENvbG9yXzEucHJvdG90eXBlLmludGVycG9sYXRlID0gZnVuY3Rpb24oY29sMiwgZikge1xuICAgIFx0aWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICBcdHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgIFx0d2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gICAgXHRyZXR1cm4gbWl4LmFwcGx5KHZvaWQgMCwgWyB0aGlzLCBjb2wyLCBmIF0uY29uY2F0KCByZXN0ICkpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5wcmVtdWx0aXBseSA9IGZ1bmN0aW9uKG11dGF0ZSkge1xuICAgIFx0aWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZT1mYWxzZTtcblxuICAgIFx0dmFyIHJnYiA9IHRoaXMuX3JnYjtcbiAgICBcdHZhciBhID0gcmdiWzNdO1xuICAgIFx0aWYgKG11dGF0ZSkge1xuICAgIFx0XHR0aGlzLl9yZ2IgPSBbcmdiWzBdKmEsIHJnYlsxXSphLCByZ2JbMl0qYSwgYV07XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fSBlbHNlIHtcbiAgICBcdFx0cmV0dXJuIG5ldyBDb2xvcl8xKFtyZ2JbMF0qYSwgcmdiWzFdKmEsIHJnYlsyXSphLCBhXSwgJ3JnYicpO1xuICAgIFx0fVxuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5zYXR1cmF0ZSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxjaCA9IG1lLmxjaCgpO1xuICAgIFx0bGNoWzFdICs9IGxhYkNvbnN0YW50cy5LbiAqIGFtb3VudDtcbiAgICBcdGlmIChsY2hbMV0gPCAwKSB7IGxjaFsxXSA9IDA7IH1cbiAgICBcdHJldHVybiBuZXcgQ29sb3JfMShsY2gsICdsY2gnKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuZGVzYXR1cmF0ZSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHRyZXR1cm4gdGhpcy5zYXR1cmF0ZSgtYW1vdW50KTtcbiAgICB9O1xuXG4gICAgdmFyIHR5cGUkaSA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihtYywgdmFsdWUsIG11dGF0ZSkge1xuICAgICAgICBpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlPWZhbHNlO1xuXG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSRpKHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godmFsdWUuY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcrJzogc3JjW2ldICs9ICt2YWx1ZTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICctJzogc3JjW2ldICs9ICt2YWx1ZTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcqJzogc3JjW2ldICo9ICsodmFsdWUuc3Vic3RyKDEpKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvJzogc3JjW2ldIC89ICsodmFsdWUuc3Vic3RyKDEpKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBzcmNbaV0gPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUkaSh2YWx1ZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyY1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuc3VwcG9ydGVkIHZhbHVlIGZvciBDb2xvci5zZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBuZXcgQ29sb3JfMShzcmMsIG1vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmdiID0gb3V0Ll9yZ2I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmdiJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEuX3JnYjtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLl9yZ2I7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0teHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdLXh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXS14eXowWzJdKSxcbiAgICAgICAgICAgICdyZ2InXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yLnJnYiA9IHJnYiQxO1xuXG4gICAgdmFyIHNxcnQkMiA9IE1hdGguc3FydDtcbiAgICB2YXIgcG93JDMgPSBNYXRoLnBvdztcblxuICAgIHZhciBscmdiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHJlZiA9IGNvbDEuX3JnYjtcbiAgICAgICAgdmFyIHgxID0gcmVmWzBdO1xuICAgICAgICB2YXIgeTEgPSByZWZbMV07XG4gICAgICAgIHZhciB6MSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gY29sMi5fcmdiO1xuICAgICAgICB2YXIgeDIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIHkyID0gcmVmJDFbMV07XG4gICAgICAgIHZhciB6MiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoXG4gICAgICAgICAgICBzcXJ0JDIocG93JDMoeDEsMikgKiAoMS1mKSArIHBvdyQzKHgyLDIpICogZiksXG4gICAgICAgICAgICBzcXJ0JDIocG93JDMoeTEsMikgKiAoMS1mKSArIHBvdyQzKHkyLDIpICogZiksXG4gICAgICAgICAgICBzcXJ0JDIocG93JDMoejEsMikgKiAoMS1mKSArIHBvdyQzKHoyLDIpICogZiksXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5scmdiID0gbHJnYjtcblxuICAgIHZhciBsYWIkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciB4eXowID0gY29sMS5sYWIoKTtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLmxhYigpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdLXh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXS14eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0teHl6MFsyXSksXG4gICAgICAgICAgICAnbGFiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5sYWIgPSBsYWIkMTtcblxuICAgIHZhciBfaHN4ID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYsIG0pIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDE7XG5cbiAgICAgICAgdmFyIHh5ejAsIHh5ejE7XG4gICAgICAgIGlmIChtID09PSAnaHNsJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHNsKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc2woKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaHN2Jykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHN2KCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc3YoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaGNnJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaGNnKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oY2coKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaHNpJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHNpKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc2koKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnbGNoJyB8fCBtID09PSAnaGNsJykge1xuICAgICAgICAgICAgbSA9ICdoY2wnO1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaGNsKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oY2woKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBodWUwLCBodWUxLCBzYXQwLCBzYXQxLCBsYnYwLCBsYnYxO1xuICAgICAgICBpZiAobS5zdWJzdHIoMCwgMSkgPT09ICdoJykge1xuICAgICAgICAgICAgKGFzc2lnbiA9IHh5ejAsIGh1ZTAgPSBhc3NpZ25bMF0sIHNhdDAgPSBhc3NpZ25bMV0sIGxidjAgPSBhc3NpZ25bMl0pO1xuICAgICAgICAgICAgKGFzc2lnbiQxID0geHl6MSwgaHVlMSA9IGFzc2lnbiQxWzBdLCBzYXQxID0gYXNzaWduJDFbMV0sIGxidjEgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2F0LCBodWUsIGxidiwgZGg7XG5cbiAgICAgICAgaWYgKCFpc05hTihodWUwKSAmJiAhaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIC8vIGJvdGggY29sb3JzIGhhdmUgaHVlXG4gICAgICAgICAgICBpZiAoaHVlMSA+IGh1ZTAgJiYgaHVlMSAtIGh1ZTAgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEtKGh1ZTArMzYwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaHVlMSA8IGh1ZTAgJiYgaHVlMCAtIGh1ZTEgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTErMzYwLWh1ZTA7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxIC0gaHVlMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1ZSA9IGh1ZTAgKyBmICogZGg7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTApKSB7XG4gICAgICAgICAgICBodWUgPSBodWUwO1xuICAgICAgICAgICAgaWYgKChsYnYxID09IDEgfHwgbGJ2MSA9PSAwKSAmJiBtICE9ICdoc3YnKSB7IHNhdCA9IHNhdDA7IH1cbiAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIGh1ZSA9IGh1ZTE7XG4gICAgICAgICAgICBpZiAoKGxidjAgPT0gMSB8fCBsYnYwID09IDApICYmIG0gIT0gJ2hzdicpIHsgc2F0ID0gc2F0MTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHVlID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYXQgPT09IHVuZGVmaW5lZCkgeyBzYXQgPSBzYXQwICsgZiAqIChzYXQxIC0gc2F0MCk7IH1cbiAgICAgICAgbGJ2ID0gbGJ2MCArIGYgKiAobGJ2MS1sYnYwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKFtodWUsIHNhdCwgbGJ2XSwgbSk7XG4gICAgfTtcblxuICAgIHZhciBsY2gkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnbGNoJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5sY2ggPSBsY2gkMTtcbiAgICBpbnRlcnBvbGF0b3IuaGNsID0gbGNoJDE7XG5cbiAgICB2YXIgbnVtJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgYzEgPSBjb2wxLm51bSgpO1xuICAgICAgICB2YXIgYzIgPSBjb2wyLm51bSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoYzEgKyBmICogKGMyLWMxKSwgJ251bScpXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5udW0gPSBudW0kMTtcblxuICAgIHZhciBoY2ckMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnaGNnJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5oY2cgPSBoY2ckMTtcblxuICAgIHZhciBoc2kkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnaHNpJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5oc2kgPSBoc2kkMTtcblxuICAgIHZhciBoc2wkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnaHNsJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5oc2wgPSBoc2wkMTtcblxuICAgIHZhciBoc3YkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnaHN2Jyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5oc3YgPSBoc3YkMTtcblxuICAgIHZhciBjbGlwX3JnYiQyID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIHBvdyQ0ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNxcnQkMyA9IE1hdGguc3FydDtcbiAgICB2YXIgUEkkMSA9IE1hdGguUEk7XG4gICAgdmFyIGNvcyQyID0gTWF0aC5jb3M7XG4gICAgdmFyIHNpbiQxID0gTWF0aC5zaW47XG4gICAgdmFyIGF0YW4yJDEgPSBNYXRoLmF0YW4yO1xuXG4gICAgdmFyIGF2ZXJhZ2UgPSBmdW5jdGlvbiAoY29sb3JzLCBtb2RlLCB3ZWlnaHRzKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nbHJnYic7XG4gICAgICAgIGlmICggd2VpZ2h0cyA9PT0gdm9pZCAwICkgd2VpZ2h0cz1udWxsO1xuXG4gICAgICAgIHZhciBsID0gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgaWYgKCF3ZWlnaHRzKSB7IHdlaWdodHMgPSBBcnJheS5mcm9tKG5ldyBBcnJheShsKSkubWFwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIDE7IH0pOyB9XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB3ZWlnaHRzXG4gICAgICAgIHZhciBrID0gbCAvIHdlaWdodHMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgKyBiOyB9KTtcbiAgICAgICAgd2VpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uICh3LGkpIHsgd2VpZ2h0c1tpXSAqPSBrOyB9KTtcbiAgICAgICAgLy8gY29udmVydCBjb2xvcnMgdG8gQ29sb3Igb2JqZWN0c1xuICAgICAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZXcgQ29sb3JfMShjKTsgfSk7XG4gICAgICAgIGlmIChtb2RlID09PSAnbHJnYicpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXZlcmFnZV9scmdiKGNvbG9ycywgd2VpZ2h0cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlyc3QgPSBjb2xvcnMuc2hpZnQoKTtcbiAgICAgICAgdmFyIHh5eiA9IGZpcnN0LmdldChtb2RlKTtcbiAgICAgICAgdmFyIGNudCA9IFtdO1xuICAgICAgICB2YXIgZHggPSAwO1xuICAgICAgICB2YXIgZHkgPSAwO1xuICAgICAgICAvLyBpbml0aWFsIGNvbG9yXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHh5eltpXSA9ICh4eXpbaV0gfHwgMCkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgY250LnB1c2goaXNOYU4oeHl6W2ldKSA/IDAgOiB3ZWlnaHRzWzBdKTtcbiAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpKSA9PT0gJ2gnICYmICFpc05hTih4eXpbaV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIEEgPSB4eXpbaV0gLyAxODAgKiBQSSQxO1xuICAgICAgICAgICAgICAgIGR4ICs9IGNvcyQyKEEpICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgICAgICBkeSArPSBzaW4kMShBKSAqIHdlaWdodHNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWxwaGEgPSBmaXJzdC5hbHBoYSgpICogd2VpZ2h0c1swXTtcbiAgICAgICAgY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGMsY2kpIHtcbiAgICAgICAgICAgIHZhciB4eXoyID0gYy5nZXQobW9kZSk7XG4gICAgICAgICAgICBhbHBoYSArPSBjLmFscGhhKCkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oeHl6MltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY250W2ldICs9IHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpKSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQSA9IHh5ejJbaV0gLyAxODAgKiBQSSQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHggKz0gY29zJDIoQSkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHkgKz0gc2luJDEoQSkgKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeHl6W2ldICs9IHh5ejJbaV0gKiB3ZWlnaHRzW2NpKzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpJDE9MDsgaSQxPHh5ei5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSQxKSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgdmFyIEEkMSA9IGF0YW4yJDEoZHkgLyBjbnRbaSQxXSwgZHggLyBjbnRbaSQxXSkgLyBQSSQxICogMTgwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChBJDEgPCAwKSB7IEEkMSArPSAzNjA7IH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoQSQxID49IDM2MCkgeyBBJDEgLT0gMzYwOyB9XG4gICAgICAgICAgICAgICAgeHl6W2kkMV0gPSBBJDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHh5eltpJDFdID0geHl6W2kkMV0vY250W2kkMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWxwaGEgLz0gbDtcbiAgICAgICAgcmV0dXJuIChuZXcgQ29sb3JfMSh4eXosIG1vZGUpKS5hbHBoYShhbHBoYSA+IDAuOTk5OTkgPyAxIDogYWxwaGEsIHRydWUpO1xuICAgIH07XG5cblxuICAgIHZhciBfYXZlcmFnZV9scmdiID0gZnVuY3Rpb24gKGNvbG9ycywgd2VpZ2h0cykge1xuICAgICAgICB2YXIgbCA9IGNvbG9ycy5sZW5ndGg7XG4gICAgICAgIHZhciB4eXogPSBbMCwwLDAsMF07XG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbCA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIHZhciBmID0gd2VpZ2h0c1tpXSAvIGw7XG4gICAgICAgICAgICB2YXIgcmdiID0gY29sLl9yZ2I7XG4gICAgICAgICAgICB4eXpbMF0gKz0gcG93JDQocmdiWzBdLDIpICogZjtcbiAgICAgICAgICAgIHh5elsxXSArPSBwb3ckNChyZ2JbMV0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzJdICs9IHBvdyQ0KHJnYlsyXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbM10gKz0gcmdiWzNdICogZjtcbiAgICAgICAgfVxuICAgICAgICB4eXpbMF0gPSBzcXJ0JDMoeHl6WzBdKTtcbiAgICAgICAgeHl6WzFdID0gc3FydCQzKHh5elsxXSk7XG4gICAgICAgIHh5elsyXSA9IHNxcnQkMyh4eXpbMl0pO1xuICAgICAgICBpZiAoeHl6WzNdID4gMC45OTk5OTk5KSB7IHh5elszXSA9IDE7IH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKGNsaXBfcmdiJDIoeHl6KSk7XG4gICAgfTtcblxuICAgIC8vIG1pbmltYWwgbXVsdGktcHVycG9zZSBpbnRlcmZhY2VcblxuICAgIC8vIEByZXF1aXJlcyB1dGlscyBjb2xvciBhbmFseXplXG5cblxuICAgIHZhciB0eXBlJGogPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHBvdyQ1ID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgc2NhbGUgPSBmdW5jdGlvbihjb2xvcnMpIHtcblxuICAgICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICB2YXIgX21vZGUgPSAncmdiJztcbiAgICAgICAgdmFyIF9uYWNvbCA9IGNocm9tYV8xKCcjY2NjJyk7XG4gICAgICAgIHZhciBfc3ByZWFkID0gMDtcbiAgICAgICAgLy8gY29uc3QgX2ZpeGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBfZG9tYWluID0gWzAsIDFdO1xuICAgICAgICB2YXIgX3BvcyA9IFtdO1xuICAgICAgICB2YXIgX3BhZGRpbmcgPSBbMCwwXTtcbiAgICAgICAgdmFyIF9jbGFzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBfY29sb3JzID0gW107XG4gICAgICAgIHZhciBfb3V0ID0gZmFsc2U7XG4gICAgICAgIHZhciBfbWluID0gMDtcbiAgICAgICAgdmFyIF9tYXggPSAxO1xuICAgICAgICB2YXIgX2NvcnJlY3RMaWdodG5lc3MgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9jb2xvckNhY2hlID0ge307XG4gICAgICAgIHZhciBfdXNlQ2FjaGUgPSB0cnVlO1xuICAgICAgICB2YXIgX2dhbW1hID0gMTtcblxuICAgICAgICAvLyBwcml2YXRlIG1ldGhvZHNcblxuICAgICAgICB2YXIgc2V0Q29sb3JzID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgICAgICBjb2xvcnMgPSBjb2xvcnMgfHwgWycjZmZmJywgJyMwMDAnXTtcbiAgICAgICAgICAgIGlmIChjb2xvcnMgJiYgdHlwZSRqKGNvbG9ycykgPT09ICdzdHJpbmcnICYmIGNocm9tYV8xLmJyZXdlciAmJlxuICAgICAgICAgICAgICAgIGNocm9tYV8xLmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBjaHJvbWFfMS5icmV3ZXJbY29sb3JzLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUkaihjb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHNpbmdsZSBjb2xvclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IFtjb2xvcnNbMF0sIGNvbG9yc1swXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG1ha2UgYSBjb3B5IG9mIHRoZSBjb2xvcnNcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBjb2xvcnMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgLy8gY29udmVydCB0byBjaHJvbWEgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzxjb2xvcnMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzW2NdID0gY2hyb21hXzEoY29sb3JzW2NdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYXV0by1maWxsIGNvbG9yIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgX3Bvcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGMkMT0wOyBjJDE8Y29sb3JzLmxlbmd0aDsgYyQxKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKGMkMS8oY29sb3JzLmxlbmd0aC0xKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb2xvcnMgPSBjb2xvcnM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldENsYXNzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBfY2xhc3Nlcy5sZW5ndGgtMTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBuICYmIHZhbHVlID49IF9jbGFzc2VzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGktMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07XG4gICAgICAgIHZhciB0TWFwRG9tYWluID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07XG5cbiAgICAgICAgLy8gY29uc3QgY2xhc3NpZnlWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICBsZXQgdmFsID0gdmFsdWU7XG4gICAgICAgIC8vICAgICBpZiAoX2NsYXNzZXMubGVuZ3RoID4gMikge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG4gPSBfY2xhc3Nlcy5sZW5ndGgtMTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBpID0gZ2V0Q2xhc3ModmFsdWUpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1pbmMgPSBfY2xhc3Nlc1swXSArICgoX2NsYXNzZXNbMV0tX2NsYXNzZXNbMF0pICogKDAgKyAoX3NwcmVhZCAqIDAuNSkpKTsgIC8vIGNlbnRlciBvZiAxc3QgY2xhc3NcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBtYXhjID0gX2NsYXNzZXNbbi0xXSArICgoX2NsYXNzZXNbbl0tX2NsYXNzZXNbbi0xXSkgKiAoMSAtIChfc3ByZWFkICogMC41KSkpOyAgLy8gY2VudGVyIG9mIGxhc3QgY2xhc3NcbiAgICAgICAgLy8gICAgICAgICB2YWwgPSBfbWluICsgKCgoKF9jbGFzc2VzW2ldICsgKChfY2xhc3Nlc1tpKzFdIC0gX2NsYXNzZXNbaV0pICogMC41KSkgLSBtaW5jKSAvIChtYXhjLW1pbmMpKSAqIChfbWF4IC0gX21pbikpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgLy8gfTtcblxuICAgICAgICB2YXIgZ2V0Q29sb3IgPSBmdW5jdGlvbih2YWwsIGJ5cGFzc01hcCkge1xuICAgICAgICAgICAgdmFyIGNvbCwgdDtcbiAgICAgICAgICAgIGlmIChieXBhc3NNYXAgPT0gbnVsbCkgeyBieXBhc3NNYXAgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkgfHwgKHZhbCA9PT0gbnVsbCkpIHsgcmV0dXJuIF9uYWNvbDsgfVxuICAgICAgICAgICAgaWYgKCFieXBhc3NNYXApIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gZ2V0Q2xhc3ModmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdCA9IGMgLyAoX2NsYXNzZXMubGVuZ3RoLTIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX21heCAhPT0gX21pbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGludGVycG9sYXRlIGJldHdlZW4gbWluL21heFxuICAgICAgICAgICAgICAgICAgICB0ID0gKHZhbCAtIF9taW4pIC8gKF9tYXggLSBfbWluKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQgPSB2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRvbWFpbiBtYXBcbiAgICAgICAgICAgIHQgPSB0TWFwRG9tYWluKHQpO1xuXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgICAgIHQgPSB0TWFwTGlnaHRuZXNzKHQpOyAgLy8gbGlnaHRuZXNzIGNvcnJlY3Rpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF9nYW1tYSAhPT0gMSkgeyB0ID0gcG93JDUodCwgX2dhbW1hKTsgfVxuXG4gICAgICAgICAgICB0ID0gX3BhZGRpbmdbMF0gKyAodCAqICgxIC0gX3BhZGRpbmdbMF0gLSBfcGFkZGluZ1sxXSkpO1xuXG4gICAgICAgICAgICB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgdCkpO1xuXG4gICAgICAgICAgICB2YXIgayA9IE1hdGguZmxvb3IodCAqIDEwMDAwKTtcblxuICAgICAgICAgICAgaWYgKF91c2VDYWNoZSAmJiBfY29sb3JDYWNoZVtrXSkge1xuICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvckNhY2hlW2tdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSRqKF9jb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9yIGkgaW4gWzAuLl9wb3MubGVuZ3RoLTFdXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxfcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IF9wb3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA8PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodCA+PSBwKSAmJiAoaSA9PT0gKF9wb3MubGVuZ3RoLTEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+IHAgJiYgdCA8IF9wb3NbaSsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAodC1wKS8oX3Bvc1tpKzFdLXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IGNocm9tYV8xLmludGVycG9sYXRlKF9jb2xvcnNbaV0sIF9jb2xvcnNbaSsxXSwgdCwgX21vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlJGooX2NvbG9ycykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9ycyh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF91c2VDYWNoZSkgeyBfY29sb3JDYWNoZVtrXSA9IGNvbDsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVzZXRDYWNoZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jb2xvckNhY2hlID0ge307IH07XG5cbiAgICAgICAgc2V0Q29sb3JzKGNvbG9ycyk7XG5cbiAgICAgICAgLy8gcHVibGljIGludGVyZmFjZVxuXG4gICAgICAgIHZhciBmID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgdmFyIGMgPSBjaHJvbWFfMShnZXRDb2xvcih2KSk7XG4gICAgICAgICAgICBpZiAoX291dCAmJiBjW19vdXRdKSB7IHJldHVybiBjW19vdXRdKCk7IH0gZWxzZSB7IHJldHVybiBjOyB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jbGFzc2VzID0gZnVuY3Rpb24oY2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKGNsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJGooY2xhc3NlcykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjbGFzc2VzO1xuICAgICAgICAgICAgICAgICAgICBfZG9tYWluID0gW2NsYXNzZXNbMF0sIGNsYXNzZXNbY2xhc3Nlcy5sZW5ndGgtMV1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gY2hyb21hXzEuYW5hbHl6ZShfZG9tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gW2QubWluLCBkLm1heF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IGNocm9tYV8xLmxpbWl0cyhkLCAnZScsIGNsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9jbGFzc2VzO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgZi5kb21haW4gPSBmdW5jdGlvbihkb21haW4pIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZG9tYWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX21pbiA9IGRvbWFpblswXTtcbiAgICAgICAgICAgIF9tYXggPSBkb21haW5bZG9tYWluLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIF9wb3MgPSBbXTtcbiAgICAgICAgICAgIHZhciBrID0gX2NvbG9ycy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoKGRvbWFpbi5sZW5ndGggPT09IGspICYmIChfbWluICE9PSBfbWF4KSkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IEFycmF5LmZyb20oZG9tYWluKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgICBfcG9zLnB1c2goKGQtX21pbikgLyAoX21heC1fbWluKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8azsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wb3MucHVzaChjLyhrLTEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvbWFpbi5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBkb21haW4gbWFwXG4gICAgICAgICAgICAgICAgICAgIHZhciB0T3V0ID0gZG9tYWluLm1hcChmdW5jdGlvbiAoZCxpKSB7IHJldHVybiBpLyhkb21haW4ubGVuZ3RoLTEpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRCcmVha3MgPSBkb21haW4ubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiAoZCAtIF9taW4pIC8gKF9tYXggLSBfbWluKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdEJyZWFrcy5ldmVyeShmdW5jdGlvbiAodmFsLCBpKSB7IHJldHVybiB0T3V0W2ldID09PSB2YWw7IH0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0TWFwRG9tYWluID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA8PSAwIHx8IHQgPj0gMSkgeyByZXR1cm4gdDsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodCA+PSB0QnJlYWtzW2krMV0pIHsgaSsrOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSAodCAtIHRCcmVha3NbaV0pIC8gKHRCcmVha3NbaSsxXSAtIHRCcmVha3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdXQgPSB0T3V0W2ldICsgZiAqICh0T3V0W2krMV0gLSB0T3V0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2RvbWFpbiA9IFtfbWluLCBfbWF4XTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYubW9kZSA9IGZ1bmN0aW9uKF9tKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX21vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbW9kZSA9IF9tO1xuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5yYW5nZSA9IGZ1bmN0aW9uKGNvbG9ycywgX3Bvcykge1xuICAgICAgICAgICAgc2V0Q29sb3JzKGNvbG9ycywgX3Bvcyk7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLm91dCA9IGZ1bmN0aW9uKF9vKSB7XG4gICAgICAgICAgICBfb3V0ID0gX287XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnNwcmVhZCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zcHJlYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3ByZWFkID0gdmFsO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jb3JyZWN0TGlnaHRuZXNzID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCkgeyB2ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgX2NvcnJlY3RMaWdodG5lc3MgPSB2O1xuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgaWYgKF9jb3JyZWN0TGlnaHRuZXNzKSB7XG4gICAgICAgICAgICAgICAgdE1hcExpZ2h0bmVzcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEwwID0gZ2V0Q29sb3IoMCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBMMSA9IGdldENvbG9yKDEsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9sID0gTDAgPiBMMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfYWN0dWFsID0gZ2V0Q29sb3IodCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2lkZWFsID0gTDAgKyAoKEwxIC0gTDApICogdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhfaXRlciA9IDIwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKE1hdGguYWJzKExfZGlmZikgPiAxZS0yKSAmJiAobWF4X2l0ZXItLSA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvbCkgeyBMX2RpZmYgKj0gLTE7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTF9kaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQxIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9ICh0MCAtIHQpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMX2FjdHVhbCA9IGdldENvbG9yKHQsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucGFkZGluZyA9IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIGlmIChwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSRqKHApID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBwID0gW3AscF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9wYWRkaW5nID0gcDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuY29sb3JzID0gZnVuY3Rpb24obnVtQ29sb3JzLCBvdXQpIHtcbiAgICAgICAgICAgIC8vIElmIG5vIGFyZ3VtZW50cyBhcmUgZ2l2ZW4sIHJldHVybiB0aGUgb3JpZ2luYWwgY29sb3JzIHRoYXQgd2VyZSBwcm92aWRlZFxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7IG91dCA9ICdoZXgnOyB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbG9ycy5zbGljZSgwKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbZigwLjUpXTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRtID0gX2RvbWFpblswXTtcbiAgICAgICAgICAgICAgICB2YXIgZGQgPSBfZG9tYWluWzFdIC0gZG07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX19yYW5nZV9fKDAsIG51bUNvbG9ycywgZmFsc2UpLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gZiggZG0gKyAoKGkvKG51bUNvbG9ycy0xKSkgKiBkZCkgKTsgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHJldHVybnMgYWxsIGNvbG9ycyBiYXNlZCBvbiB0aGUgZGVmaW5lZCBjbGFzc2VzXG4gICAgICAgICAgICAgICAgY29sb3JzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHNhbXBsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxLCBlbmQgPSBfY2xhc3Nlcy5sZW5ndGgsIGFzYyA9IDEgPD0gZW5kOyBhc2MgPyBpIDwgZW5kIDogaSA+IGVuZDsgYXNjID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goKF9jbGFzc2VzW2ktMV0rX2NsYXNzZXNbaV0pKjAuNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzID0gX2RvbWFpbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2FtcGxlcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGYodik7IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hyb21hXzFbb3V0XSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGNbb3V0XSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jYWNoZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIGlmIChjICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfdXNlQ2FjaGUgPSBjO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VzZUNhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuZ2FtbWEgPSBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBpZiAoZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX2dhbW1hID0gZztcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9nYW1tYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLm5vZGF0YSA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGlmIChkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfbmFjb2wgPSBjaHJvbWFfMShkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9uYWNvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX19yYW5nZV9fKGxlZnQsIHJpZ2h0LCBpbmNsdXNpdmUpIHtcbiAgICAgIHZhciByYW5nZSA9IFtdO1xuICAgICAgdmFyIGFzY2VuZGluZyA9IGxlZnQgPCByaWdodDtcbiAgICAgIHZhciBlbmQgPSAhaW5jbHVzaXZlID8gcmlnaHQgOiBhc2NlbmRpbmcgPyByaWdodCArIDEgOiByaWdodCAtIDE7XG4gICAgICBmb3IgKHZhciBpID0gbGVmdDsgYXNjZW5kaW5nID8gaSA8IGVuZCA6IGkgPiBlbmQ7IGFzY2VuZGluZyA/IGkrKyA6IGktLSkge1xuICAgICAgICByYW5nZS5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gaW50ZXJwb2xhdGVzIGJldHdlZW4gYSBzZXQgb2YgY29sb3JzIHV6aW5nIGEgYmV6aWVyIHNwbGluZVxuICAgIC8vXG5cbiAgICAvLyBAcmVxdWlyZXMgdXRpbHMgbGFiXG5cblxuXG5cbiAgICB2YXIgYmV6aWVyID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMjtcblxuICAgICAgICB2YXIgSSwgbGFiMCwgbGFiMSwgbGFiMjtcbiAgICAgICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gbmV3IENvbG9yXzEoYyk7IH0pO1xuICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgLy8gbGluZWFyIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIChhc3NpZ24gPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnblswXSwgbGFiMSA9IGFzc2lnblsxXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gbGFiMFtpXSArICh0ICogKGxhYjFbaV0gLSBsYWIwW2ldKSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIC8vIHF1YWRyYXRpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgKGFzc2lnbiQxID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSksIGxhYjAgPSBhc3NpZ24kMVswXSwgbGFiMSA9IGFzc2lnbiQxWzFdLCBsYWIyID0gYXNzaWduJDFbMl0pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICgoMS10KSooMS10KSAqIGxhYjBbaV0pICsgKDIgKiAoMS10KSAqIHQgKiBsYWIxW2ldKSArICh0ICogdCAqIGxhYjJbaV0pOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAvLyBjdWJpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgdmFyIGxhYjM7XG4gICAgICAgICAgICAoYXNzaWduJDIgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnbiQyWzBdLCBsYWIxID0gYXNzaWduJDJbMV0sIGxhYjIgPSBhc3NpZ24kMlsyXSwgbGFiMyA9IGFzc2lnbiQyWzNdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiAoKDEtdCkqKDEtdCkqKDEtdCkgKiBsYWIwW2ldKSArICgzICogKDEtdCkgKiAoMS10KSAqIHQgKiBsYWIxW2ldKSArICgzICogKDEtdCkgKiB0ICogdCAqIGxhYjJbaV0pICsgKHQqdCp0ICogbGFiM1tpXSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIHZhciBJMCA9IGJlemllcihjb2xvcnMuc2xpY2UoMCwgMykpO1xuICAgICAgICAgICAgdmFyIEkxID0gYmV6aWVyKGNvbG9ycy5zbGljZSgyLCA1KSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIGlmICh0IDwgMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJMCh0KjIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJMSgodC0wLjUpKjIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEk7XG4gICAgfTtcblxuICAgIHZhciBiZXppZXJfMSA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgICAgICAgdmFyIGYgPSBiZXppZXIoY29sb3JzKTtcbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjYWxlKGYpOyB9O1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgICogYmxlbmQgbW9kZSBmb3JtdWxhcyB0YWtlbiBmcm9tIGh0dHA6Ly93d3cudmVudHVyZS13YXJlLmNvbS9rZXZpbi9jb2RpbmcvbGV0cy1sZWFybi1tYXRoLXBob3Rvc2hvcC1ibGVuZC1tb2Rlcy9cbiAgICAgKi9cblxuXG5cblxuICAgIHZhciBibGVuZCA9IGZ1bmN0aW9uIChib3R0b20sIHRvcCwgbW9kZSkge1xuICAgICAgICBpZiAoIWJsZW5kW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYmxlbmQgbW9kZSAnICsgbW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsZW5kW21vZGVdKGJvdHRvbSwgdG9wKTtcbiAgICB9O1xuXG4gICAgdmFyIGJsZW5kX2YgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGJvdHRvbSx0b3ApIHtcbiAgICAgICAgICAgIHZhciBjMCA9IGNocm9tYV8xKHRvcCkucmdiKCk7XG4gICAgICAgICAgICB2YXIgYzEgPSBjaHJvbWFfMShib3R0b20pLnJnYigpO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tYV8xLnJnYihmKGMwLCBjMSkpO1xuICAgICAgICB9OyB9O1xuXG4gICAgdmFyIGVhY2ggPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGMwLCBjMSkge1xuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICAgICAgb3V0WzBdID0gZihjMFswXSwgYzFbMF0pO1xuICAgICAgICAgICAgb3V0WzFdID0gZihjMFsxXSwgYzFbMV0pO1xuICAgICAgICAgICAgb3V0WzJdID0gZihjMFsyXSwgYzFbMl0pO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfTsgfTtcblxuICAgIHZhciBub3JtYWwgPSBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYTsgfTtcbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhICogYiAvIDI1NTsgfTtcbiAgICB2YXIgZGFya2VuJDEgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhID4gYiA/IGIgOiBhOyB9O1xuICAgIHZhciBsaWdodGVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSA+IGIgPyBhIDogYjsgfTtcbiAgICB2YXIgc2NyZWVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gMjU1ICogKDEgLSAoMS1hLzI1NSkgKiAoMS1iLzI1NSkpOyB9O1xuICAgIHZhciBvdmVybGF5ID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYiA8IDEyOCA/IDIgKiBhICogYiAvIDI1NSA6IDI1NSAqICgxIC0gMiAqICgxIC0gYSAvIDI1NSApICogKCAxIC0gYiAvIDI1NSApKTsgfTtcbiAgICB2YXIgYnVybiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIDI1NSAqICgxIC0gKDEgLSBiIC8gMjU1KSAvIChhLzI1NSkpOyB9O1xuICAgIHZhciBkb2RnZSA9IGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgaWYgKGEgPT09IDI1NSkgeyByZXR1cm4gMjU1OyB9XG4gICAgICAgIGEgPSAyNTUgKiAoYiAvIDI1NSkgLyAoMSAtIGEgLyAyNTUpO1xuICAgICAgICByZXR1cm4gYSA+IDI1NSA/IDI1NSA6IGFcbiAgICB9O1xuXG4gICAgLy8gIyBhZGQgPSAoYSxiKSAtPlxuICAgIC8vICMgICAgIGlmIChhICsgYiA+IDI1NSkgdGhlbiAyNTUgZWxzZSBhICsgYlxuXG4gICAgYmxlbmQubm9ybWFsID0gYmxlbmRfZihlYWNoKG5vcm1hbCkpO1xuICAgIGJsZW5kLm11bHRpcGx5ID0gYmxlbmRfZihlYWNoKG11bHRpcGx5KSk7XG4gICAgYmxlbmQuc2NyZWVuID0gYmxlbmRfZihlYWNoKHNjcmVlbikpO1xuICAgIGJsZW5kLm92ZXJsYXkgPSBibGVuZF9mKGVhY2gob3ZlcmxheSkpO1xuICAgIGJsZW5kLmRhcmtlbiA9IGJsZW5kX2YoZWFjaChkYXJrZW4kMSkpO1xuICAgIGJsZW5kLmxpZ2h0ZW4gPSBibGVuZF9mKGVhY2gobGlnaHRlbikpO1xuICAgIGJsZW5kLmRvZGdlID0gYmxlbmRfZihlYWNoKGRvZGdlKSk7XG4gICAgYmxlbmQuYnVybiA9IGJsZW5kX2YoZWFjaChidXJuKSk7XG4gICAgLy8gYmxlbmQuYWRkID0gYmxlbmRfZihlYWNoKGFkZCkpO1xuXG4gICAgdmFyIGJsZW5kXzEgPSBibGVuZDtcblxuICAgIC8vIGN1YmVoZWxpeCBpbnRlcnBvbGF0aW9uXG4gICAgLy8gYmFzZWQgb24gRC5BLiBHcmVlbiBcIkEgY29sb3VyIHNjaGVtZSBmb3IgdGhlIGRpc3BsYXkgb2YgYXN0cm9ub21pY2FsIGludGVuc2l0eSBpbWFnZXNcIlxuICAgIC8vIGh0dHA6Ly9hc3Ryb24tc29jLmluL2J1bGxldGluLzExSnVuZS8yODkzOTIwMTEucGRmXG5cbiAgICB2YXIgdHlwZSRrID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2xpcF9yZ2IkMyA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciBUV09QSSQyID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIHBvdyQ2ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpbiQyID0gTWF0aC5zaW47XG4gICAgdmFyIGNvcyQzID0gTWF0aC5jb3M7XG5cblxuICAgIHZhciBjdWJlaGVsaXggPSBmdW5jdGlvbihzdGFydCwgcm90YXRpb25zLCBodWUsIGdhbW1hLCBsaWdodG5lc3MpIHtcbiAgICAgICAgaWYgKCBzdGFydCA9PT0gdm9pZCAwICkgc3RhcnQ9MzAwO1xuICAgICAgICBpZiAoIHJvdGF0aW9ucyA9PT0gdm9pZCAwICkgcm90YXRpb25zPS0xLjU7XG4gICAgICAgIGlmICggaHVlID09PSB2b2lkIDAgKSBodWU9MTtcbiAgICAgICAgaWYgKCBnYW1tYSA9PT0gdm9pZCAwICkgZ2FtbWE9MTtcbiAgICAgICAgaWYgKCBsaWdodG5lc3MgPT09IHZvaWQgMCApIGxpZ2h0bmVzcz1bMCwxXTtcblxuICAgICAgICB2YXIgZGggPSAwLCBkbDtcbiAgICAgICAgaWYgKHR5cGUkayhsaWdodG5lc3MpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBkbCA9IGxpZ2h0bmVzc1sxXSAtIGxpZ2h0bmVzc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRsID0gMDtcbiAgICAgICAgICAgIGxpZ2h0bmVzcyA9IFtsaWdodG5lc3MsIGxpZ2h0bmVzc107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKGZyYWN0KSB7XG4gICAgICAgICAgICB2YXIgYSA9IFRXT1BJJDIgKiAoKChzdGFydCsxMjApLzM2MCkgKyAocm90YXRpb25zICogZnJhY3QpKTtcbiAgICAgICAgICAgIHZhciBsID0gcG93JDYobGlnaHRuZXNzWzBdICsgKGRsICogZnJhY3QpLCBnYW1tYSk7XG4gICAgICAgICAgICB2YXIgaCA9IGRoICE9PSAwID8gaHVlWzBdICsgKGZyYWN0ICogZGgpIDogaHVlO1xuICAgICAgICAgICAgdmFyIGFtcCA9IChoICogbCAqICgxLWwpKSAvIDI7XG4gICAgICAgICAgICB2YXIgY29zX2EgPSBjb3MkMyhhKTtcbiAgICAgICAgICAgIHZhciBzaW5fYSA9IHNpbiQyKGEpO1xuICAgICAgICAgICAgdmFyIHIgPSBsICsgKGFtcCAqICgoLTAuMTQ4NjEgKiBjb3NfYSkgKyAoMS43ODI3Nyogc2luX2EpKSk7XG4gICAgICAgICAgICB2YXIgZyA9IGwgKyAoYW1wICogKCgtMC4yOTIyNyAqIGNvc19hKSAtICgwLjkwNjQ5KiBzaW5fYSkpKTtcbiAgICAgICAgICAgIHZhciBiID0gbCArIChhbXAgKiAoKzEuOTcyOTQgKiBjb3NfYSkpO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tYV8xKGNsaXBfcmdiJDMoW3IqMjU1LGcqMjU1LGIqMjU1LDFdKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zdGFydCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGlmICgocyA9PSBudWxsKSkgeyByZXR1cm4gc3RhcnQ7IH1cbiAgICAgICAgICAgIHN0YXJ0ID0gcztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucm90YXRpb25zID0gZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgaWYgKChyID09IG51bGwpKSB7IHJldHVybiByb3RhdGlvbnM7IH1cbiAgICAgICAgICAgIHJvdGF0aW9ucyA9IHI7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmdhbW1hID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgaWYgKChnID09IG51bGwpKSB7IHJldHVybiBnYW1tYTsgfVxuICAgICAgICAgICAgZ2FtbWEgPSBnO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5odWUgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGh1ZTsgfVxuICAgICAgICAgICAgaHVlID0gaDtcbiAgICAgICAgICAgIGlmICh0eXBlJGsoaHVlKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlWzFdIC0gaHVlWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkaCA9PT0gMCkgeyBodWUgPSBodWVbMV07IH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5saWdodG5lc3MgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGxpZ2h0bmVzczsgfVxuICAgICAgICAgICAgaWYgKHR5cGUkayhoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGxpZ2h0bmVzcyA9IGg7XG4gICAgICAgICAgICAgICAgZGwgPSBoWzFdIC0gaFswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzID0gW2gsaF07XG4gICAgICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNocm9tYV8xLnNjYWxlKGYpOyB9O1xuXG4gICAgICAgIGYuaHVlKGh1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIHZhciBkaWdpdHMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgICB2YXIgZmxvb3IkMiA9IE1hdGguZmxvb3I7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG4gICAgdmFyIHJhbmRvbV8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29kZSA9ICcjJztcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSArPSBkaWdpdHMuY2hhckF0KGZsb29yJDIocmFuZG9tKCkgKiAxNikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShjb2RlLCAnaGV4Jyk7XG4gICAgfTtcblxuICAgIHZhciBsb2ckMSA9IE1hdGgubG9nO1xuICAgIHZhciBwb3ckNyA9IE1hdGgucG93O1xuICAgIHZhciBmbG9vciQzID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgYWJzID0gTWF0aC5hYnM7XG5cblxuICAgIHZhciBhbmFseXplID0gZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuICAgICAgICBpZiAoIGtleSA9PT0gdm9pZCAwICkga2V5PW51bGw7XG5cbiAgICAgICAgdmFyIHIgPSB7XG4gICAgICAgICAgICBtaW46IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfVkFMVUUqLTEsXG4gICAgICAgICAgICBzdW06IDAsXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGUoZGF0YSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkYXRhID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgaWYgKGtleSAmJiB0eXBlKHZhbCkgPT09ICdvYmplY3QnKSB7IHZhbCA9IHZhbFtrZXldOyB9XG4gICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmICFpc05hTih2YWwpKSB7XG4gICAgICAgICAgICAgICAgci52YWx1ZXMucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIHIuc3VtICs9IHZhbDtcbiAgICAgICAgICAgICAgICBpZiAodmFsIDwgci5taW4pIHsgci5taW4gPSB2YWw7IH1cbiAgICAgICAgICAgICAgICBpZiAodmFsID4gci5tYXgpIHsgci5tYXggPSB2YWw7IH1cbiAgICAgICAgICAgICAgICByLmNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHIuZG9tYWluID0gW3IubWluLCByLm1heF07XG5cbiAgICAgICAgci5saW1pdHMgPSBmdW5jdGlvbiAobW9kZSwgbnVtKSB7IHJldHVybiBsaW1pdHMociwgbW9kZSwgbnVtKTsgfTtcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG5cbiAgICB2YXIgbGltaXRzID0gZnVuY3Rpb24gKGRhdGEsIG1vZGUsIG51bSkge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2VxdWFsJztcbiAgICAgICAgaWYgKCBudW0gPT09IHZvaWQgMCApIG51bT03O1xuXG4gICAgICAgIGlmICh0eXBlKGRhdGEpID09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGRhdGEgPSBhbmFseXplKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaW4gPSBkYXRhLm1pbjtcbiAgICAgICAgdmFyIG1heCA9IGRhdGEubWF4O1xuICAgICAgICB2YXIgdmFsdWVzID0gZGF0YS52YWx1ZXMuc29ydChmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhLWI7IH0pO1xuXG4gICAgICAgIGlmIChudW0gPT09IDEpIHsgcmV0dXJuIFttaW4sbWF4XTsgfVxuXG4gICAgICAgIHZhciBsaW1pdHMgPSBbXTtcblxuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2MnKSB7IC8vIGNvbnRpbnVvdXNcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdlJykgeyAvLyBlcXVhbCBpbnRlcnZhbFxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MTsgaTxudW07IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbisoKGkvbnVtKSoobWF4LW1pbikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnbCcpIHsgLy8gbG9nIHNjYWxlXG4gICAgICAgICAgICBpZiAobWluIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2FyaXRobWljIHNjYWxlcyBhcmUgb25seSBwb3NzaWJsZSBmb3IgdmFsdWVzID4gMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1pbl9sb2cgPSBNYXRoLkxPRzEwRSAqIGxvZyQxKG1pbik7XG4gICAgICAgICAgICB2YXIgbWF4X2xvZyA9IE1hdGguTE9HMTBFICogbG9nJDEobWF4KTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDE9MTsgaSQxPG51bTsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICBsaW1pdHMucHVzaChwb3ckNygxMCwgbWluX2xvZyArICgoaSQxL251bSkgKiAobWF4X2xvZyAtIG1pbl9sb2cpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdxJykgeyAvLyBxdWFudGlsZSBzY2FsZVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMj0xOyBpJDI8bnVtOyBpJDIrKykge1xuICAgICAgICAgICAgICAgIHZhciBwID0gKCh2YWx1ZXMubGVuZ3RoLTEpICogaSQyKS9udW07XG4gICAgICAgICAgICAgICAgdmFyIHBiID0gZmxvb3IkMyhwKTtcbiAgICAgICAgICAgICAgICBpZiAocGIgPT09IHApIHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2godmFsdWVzW3BiXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcCA+IHBiXG4gICAgICAgICAgICAgICAgICAgIHZhciBwciA9IHAgLSBwYjtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2goKHZhbHVlc1twYl0qKDEtcHIpKSArICh2YWx1ZXNbcGIrMV0qcHIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnaycpIHsgLy8gay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gYmFzZWQgb25cbiAgICAgICAgICAgIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9maWd1ZS9zb3VyY2UvYnJvd3NlL3RydW5rL2ZpZ3VlLmpzIzMzNlxuICAgICAgICAgICAgc2ltcGxpZmllZCBmb3IgMS1kIGlucHV0IHZhbHVlc1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBjbHVzdGVyO1xuICAgICAgICAgICAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGFzc2lnbm1lbnRzID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXJTaXplcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmJfaXRlcnMgPSAwO1xuICAgICAgICAgICAgdmFyIGNlbnRyb2lkcyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIGdldCBzZWVkIHZhbHVlc1xuICAgICAgICAgICAgY2VudHJvaWRzID0gW107XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQzPTE7IGkkMzxudW07IGkkMysrKSB7XG4gICAgICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWluICsgKChpJDMvbnVtKSAqIChtYXgtbWluKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWF4KTtcblxuICAgICAgICAgICAgd2hpbGUgKHJlcGVhdCkge1xuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnQgc3RlcFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxudW07IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU2l6ZXNbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDQ9MDsgaSQ0PG47IGkkNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tpJDRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluZGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiZXN0ID0gKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGokMT0wOyBqJDE8bnVtOyBqJDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3QgPSBhYnMoY2VudHJvaWRzW2okMV0tdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBtaW5kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluZGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdCA9IGokMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tiZXN0XSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHNbaSQ0XSA9IGJlc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2VudHJvaWRzIHN0ZXBcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2VudHJvaWRzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQyPTA7IGokMjxudW07IGokMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqJDJdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQ1PTA7IGkkNTxuOyBpJDUrKykge1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyID0gYXNzaWdubWVudHNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tjbHVzdGVyXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2NsdXN0ZXJdID0gdmFsdWVzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbY2x1c3Rlcl0gKz0gdmFsdWVzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQzPTA7IGokMzxudW07IGokMysrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqJDNdICo9IDEvY2x1c3RlclNpemVzW2okM107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgY29udmVyZ2VuY2VcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDQ9MDsgaiQ0PG51bTsgaiQ0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tqJDRdICE9PSBjZW50cm9pZHNbaiQ0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VudHJvaWRzID0gbmV3Q2VudHJvaWRzO1xuICAgICAgICAgICAgICAgIG5iX2l0ZXJzKys7XG5cbiAgICAgICAgICAgICAgICBpZiAobmJfaXRlcnMgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaW5pc2hlZCBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgICAgIC8vIHRoZSBuZXh0IHBhcnQgaXMgYm9ycm93ZWQgZnJvbSBnYWJyaWVsZmxvci5pdFxuICAgICAgICAgICAgdmFyIGtDbHVzdGVycyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaiQ1PTA7IGokNTxudW07IGokNSsrKSB7XG4gICAgICAgICAgICAgICAga0NsdXN0ZXJzW2okNV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkkNj0wOyBpJDY8bjsgaSQ2KyspIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVyID0gYXNzaWdubWVudHNbaSQ2XTtcbiAgICAgICAgICAgICAgICBrQ2x1c3RlcnNbY2x1c3Rlcl0ucHVzaCh2YWx1ZXNbaSQ2XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdG1wS01lYW5zQnJlYWtzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqJDY9MDsgaiQ2PG51bTsgaiQ2KyspIHtcbiAgICAgICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbaiQ2XVswXSk7XG4gICAgICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzLnB1c2goa0NsdXN0ZXJzW2okNl1ba0NsdXN0ZXJzW2okNl0ubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcyA9IHRtcEtNZWFuc0JyZWFrcy5zb3J0KGZ1bmN0aW9uIChhLGIpeyByZXR1cm4gYS1iOyB9KTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKHRtcEtNZWFuc0JyZWFrc1swXSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDc9MTsgaSQ3IDwgdG1wS01lYW5zQnJlYWtzLmxlbmd0aDsgaSQ3Kz0gMikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdG1wS01lYW5zQnJlYWtzW2kkN107XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2KSAmJiAobGltaXRzLmluZGV4T2YodikgPT09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbWl0cztcbiAgICB9O1xuXG4gICAgdmFyIGFuYWx5emVfMSA9IHthbmFseXplOiBhbmFseXplLCBsaW1pdHM6IGxpbWl0c307XG5cbiAgICB2YXIgY29udHJhc3QgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBXQ0FHIGNvbnRyYXN0IHJhdGlvXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmXG4gICAgICAgIGEgPSBuZXcgQ29sb3JfMShhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvcl8xKGIpO1xuICAgICAgICB2YXIgbDEgPSBhLmx1bWluYW5jZSgpO1xuICAgICAgICB2YXIgbDIgPSBiLmx1bWluYW5jZSgpO1xuICAgICAgICByZXR1cm4gbDEgPiBsMiA/IChsMSArIDAuMDUpIC8gKGwyICsgMC4wNSkgOiAobDIgKyAwLjA1KSAvIChsMSArIDAuMDUpO1xuICAgIH07XG5cbiAgICB2YXIgc3FydCQ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhdGFuMiQyID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcbiAgICB2YXIgY29zJDQgPSBNYXRoLmNvcztcbiAgICB2YXIgUEkkMiA9IE1hdGguUEk7XG5cbiAgICB2YXIgZGVsdGFFID0gZnVuY3Rpb24oYSwgYiwgTCwgQykge1xuICAgICAgICBpZiAoIEwgPT09IHZvaWQgMCApIEw9MTtcbiAgICAgICAgaWYgKCBDID09PSB2b2lkIDAgKSBDPTE7XG5cbiAgICAgICAgLy8gRGVsdGEgRSAoQ01DKVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcW5fRGVsdGFFX0NNQy5odG1sXG4gICAgICAgIGEgPSBuZXcgQ29sb3JfMShhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvcl8xKGIpO1xuICAgICAgICB2YXIgcmVmID0gQXJyYXkuZnJvbShhLmxhYigpKTtcbiAgICAgICAgdmFyIEwxID0gcmVmWzBdO1xuICAgICAgICB2YXIgYTEgPSByZWZbMV07XG4gICAgICAgIHZhciBiMSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gQXJyYXkuZnJvbShiLmxhYigpKTtcbiAgICAgICAgdmFyIEwyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhMiA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYjIgPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGMxID0gc3FydCQ0KChhMSAqIGExKSArIChiMSAqIGIxKSk7XG4gICAgICAgIHZhciBjMiA9IHNxcnQkNCgoYTIgKiBhMikgKyAoYjIgKiBiMikpO1xuICAgICAgICB2YXIgc2wgPSBMMSA8IDE2LjAgPyAwLjUxMSA6ICgwLjA0MDk3NSAqIEwxKSAvICgxLjAgKyAoMC4wMTc2NSAqIEwxKSk7XG4gICAgICAgIHZhciBzYyA9ICgoMC4wNjM4ICogYzEpIC8gKDEuMCArICgwLjAxMzEgKiBjMSkpKSArIDAuNjM4O1xuICAgICAgICB2YXIgaDEgPSBjMSA8IDAuMDAwMDAxID8gMC4wIDogKGF0YW4yJDIoYjEsIGExKSAqIDE4MC4wKSAvIFBJJDI7XG4gICAgICAgIHdoaWxlIChoMSA8IDApIHsgaDEgKz0gMzYwOyB9XG4gICAgICAgIHdoaWxlIChoMSA+PSAzNjApIHsgaDEgLT0gMzYwOyB9XG4gICAgICAgIHZhciB0ID0gKGgxID49IDE2NC4wKSAmJiAoaDEgPD0gMzQ1LjApID8gKDAuNTYgKyBhYnMkMSgwLjIgKiBjb3MkNCgoUEkkMiAqIChoMSArIDE2OC4wKSkgLyAxODAuMCkpKSA6ICgwLjM2ICsgYWJzJDEoMC40ICogY29zJDQoKFBJJDIgKiAoaDEgKyAzNS4wKSkgLyAxODAuMCkpKTtcbiAgICAgICAgdmFyIGM0ID0gYzEgKiBjMSAqIGMxICogYzE7XG4gICAgICAgIHZhciBmID0gc3FydCQ0KGM0IC8gKGM0ICsgMTkwMC4wKSk7XG4gICAgICAgIHZhciBzaCA9IHNjICogKCgoZiAqIHQpICsgMS4wKSAtIGYpO1xuICAgICAgICB2YXIgZGVsTCA9IEwxIC0gTDI7XG4gICAgICAgIHZhciBkZWxDID0gYzEgLSBjMjtcbiAgICAgICAgdmFyIGRlbEEgPSBhMSAtIGEyO1xuICAgICAgICB2YXIgZGVsQiA9IGIxIC0gYjI7XG4gICAgICAgIHZhciBkSDIgPSAoKGRlbEEgKiBkZWxBKSArIChkZWxCICogZGVsQikpIC0gKGRlbEMgKiBkZWxDKTtcbiAgICAgICAgdmFyIHYxID0gZGVsTCAvIChMICogc2wpO1xuICAgICAgICB2YXIgdjIgPSBkZWxDIC8gKEMgKiBzYyk7XG4gICAgICAgIHZhciB2MyA9IHNoO1xuICAgICAgICByZXR1cm4gc3FydCQ0KCh2MSAqIHYxKSArICh2MiAqIHYyKSArIChkSDIgLyAodjMgKiB2MykpKTtcbiAgICB9O1xuXG4gICAgLy8gc2ltcGxlIEV1Y2xpZGVhbiBkaXN0YW5jZVxuICAgIHZhciBkaXN0YW5jZSA9IGZ1bmN0aW9uKGEsIGIsIG1vZGUpIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdsYWInO1xuXG4gICAgICAgIC8vIERlbHRhIEUgKENJRSAxOTc2KVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcXVhdGlvbnMuaHRtbFxuICAgICAgICBhID0gbmV3IENvbG9yXzEoYSk7XG4gICAgICAgIGIgPSBuZXcgQ29sb3JfMShiKTtcbiAgICAgICAgdmFyIGwxID0gYS5nZXQobW9kZSk7XG4gICAgICAgIHZhciBsMiA9IGIuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgc3VtX3NxID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBsMSkge1xuICAgICAgICAgICAgdmFyIGQgPSAobDFbaV0gfHwgMCkgLSAobDJbaV0gfHwgMCk7XG4gICAgICAgICAgICBzdW1fc3EgKz0gZCpkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtX3NxKTtcbiAgICB9O1xuXG4gICAgdmFyIHZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MpICkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzb21lIHByZS1kZWZpbmVkIGNvbG9yIHNjYWxlczpcblxuXG5cblxuICAgIHZhciBzY2FsZXMgPSB7XG4gICAgXHRjb29sOiBmdW5jdGlvbiBjb29sKCkgeyByZXR1cm4gc2NhbGUoW2Nocm9tYV8xLmhzbCgxODAsMSwuOSksIGNocm9tYV8xLmhzbCgyNTAsLjcsLjQpXSkgfSxcbiAgICBcdGhvdDogZnVuY3Rpb24gaG90KCkgeyByZXR1cm4gc2NhbGUoWycjMDAwJywnI2YwMCcsJyNmZjAnLCcjZmZmJ10sIFswLC4yNSwuNzUsMV0pLm1vZGUoJ3JnYicpIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICAgIENvbG9yQnJld2VyIGNvbG9ycyBmb3IgY2hyb21hLmpzXG5cbiAgICAgICAgQ29weXJpZ2h0IChjKSAyMDAyIEN5bnRoaWEgQnJld2VyLCBNYXJrIEhhcnJvd2VyLCBhbmQgVGhlXG4gICAgICAgIFBlbm5zeWx2YW5pYSBTdGF0ZSBVbml2ZXJzaXR5LlxuXG4gICAgICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICAgICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWRcbiAgICAgICAgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1JcbiAgICAgICAgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAgICAgICAgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAgICAqL1xuXG4gICAgdmFyIGNvbG9yYnJld2VyID0ge1xuICAgICAgICAvLyBzZXF1ZW50aWFsXG4gICAgICAgIE9yUmQ6IFsnI2ZmZjdlYycsICcjZmVlOGM4JywgJyNmZGQ0OWUnLCAnI2ZkYmI4NCcsICcjZmM4ZDU5JywgJyNlZjY1NDgnLCAnI2Q3MzAxZicsICcjYjMwMDAwJywgJyM3ZjAwMDAnXSxcbiAgICAgICAgUHVCdTogWycjZmZmN2ZiJywgJyNlY2U3ZjInLCAnI2QwZDFlNicsICcjYTZiZGRiJywgJyM3NGE5Y2YnLCAnIzM2OTBjMCcsICcjMDU3MGIwJywgJyMwNDVhOGQnLCAnIzAyMzg1OCddLFxuICAgICAgICBCdVB1OiBbJyNmN2ZjZmQnLCAnI2UwZWNmNCcsICcjYmZkM2U2JywgJyM5ZWJjZGEnLCAnIzhjOTZjNicsICcjOGM2YmIxJywgJyM4ODQxOWQnLCAnIzgxMGY3YycsICcjNGQwMDRiJ10sXG4gICAgICAgIE9yYW5nZXM6IFsnI2ZmZjVlYicsICcjZmVlNmNlJywgJyNmZGQwYTInLCAnI2ZkYWU2YicsICcjZmQ4ZDNjJywgJyNmMTY5MTMnLCAnI2Q5NDgwMScsICcjYTYzNjAzJywgJyM3ZjI3MDQnXSxcbiAgICAgICAgQnVHbjogWycjZjdmY2ZkJywgJyNlNWY1ZjknLCAnI2NjZWNlNicsICcjOTlkOGM5JywgJyM2NmMyYTQnLCAnIzQxYWU3NicsICcjMjM4YjQ1JywgJyMwMDZkMmMnLCAnIzAwNDQxYiddLFxuICAgICAgICBZbE9yQnI6IFsnI2ZmZmZlNScsICcjZmZmN2JjJywgJyNmZWUzOTEnLCAnI2ZlYzQ0ZicsICcjZmU5OTI5JywgJyNlYzcwMTQnLCAnI2NjNGMwMicsICcjOTkzNDA0JywgJyM2NjI1MDYnXSxcbiAgICAgICAgWWxHbjogWycjZmZmZmU1JywgJyNmN2ZjYjknLCAnI2Q5ZjBhMycsICcjYWRkZDhlJywgJyM3OGM2NzknLCAnIzQxYWI1ZCcsICcjMjM4NDQzJywgJyMwMDY4MzcnLCAnIzAwNDUyOSddLFxuICAgICAgICBSZWRzOiBbJyNmZmY1ZjAnLCAnI2ZlZTBkMicsICcjZmNiYmExJywgJyNmYzkyNzInLCAnI2ZiNmE0YScsICcjZWYzYjJjJywgJyNjYjE4MWQnLCAnI2E1MGYxNScsICcjNjcwMDBkJ10sXG4gICAgICAgIFJkUHU6IFsnI2ZmZjdmMycsICcjZmRlMGRkJywgJyNmY2M1YzAnLCAnI2ZhOWZiNScsICcjZjc2OGExJywgJyNkZDM0OTcnLCAnI2FlMDE3ZScsICcjN2EwMTc3JywgJyM0OTAwNmEnXSxcbiAgICAgICAgR3JlZW5zOiBbJyNmN2ZjZjUnLCAnI2U1ZjVlMCcsICcjYzdlOWMwJywgJyNhMWQ5OWInLCAnIzc0YzQ3NicsICcjNDFhYjVkJywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgICAgIFlsR25CdTogWycjZmZmZmQ5JywgJyNlZGY4YjEnLCAnI2M3ZTliNCcsICcjN2ZjZGJiJywgJyM0MWI2YzQnLCAnIzFkOTFjMCcsICcjMjI1ZWE4JywgJyMyNTM0OTQnLCAnIzA4MWQ1OCddLFxuICAgICAgICBQdXJwbGVzOiBbJyNmY2ZiZmQnLCAnI2VmZWRmNScsICcjZGFkYWViJywgJyNiY2JkZGMnLCAnIzllOWFjOCcsICcjODA3ZGJhJywgJyM2YTUxYTMnLCAnIzU0Mjc4ZicsICcjM2YwMDdkJ10sXG4gICAgICAgIEduQnU6IFsnI2Y3ZmNmMCcsICcjZTBmM2RiJywgJyNjY2ViYzUnLCAnI2E4ZGRiNScsICcjN2JjY2M0JywgJyM0ZWIzZDMnLCAnIzJiOGNiZScsICcjMDg2OGFjJywgJyMwODQwODEnXSxcbiAgICAgICAgR3JleXM6IFsnI2ZmZmZmZicsICcjZjBmMGYwJywgJyNkOWQ5ZDknLCAnI2JkYmRiZCcsICcjOTY5Njk2JywgJyM3MzczNzMnLCAnIzUyNTI1MicsICcjMjUyNTI1JywgJyMwMDAwMDAnXSxcbiAgICAgICAgWWxPclJkOiBbJyNmZmZmY2MnLCAnI2ZmZWRhMCcsICcjZmVkOTc2JywgJyNmZWIyNGMnLCAnI2ZkOGQzYycsICcjZmM0ZTJhJywgJyNlMzFhMWMnLCAnI2JkMDAyNicsICcjODAwMDI2J10sXG4gICAgICAgIFB1UmQ6IFsnI2Y3ZjRmOScsICcjZTdlMWVmJywgJyNkNGI5ZGEnLCAnI2M5OTRjNycsICcjZGY2NWIwJywgJyNlNzI5OGEnLCAnI2NlMTI1NicsICcjOTgwMDQzJywgJyM2NzAwMWYnXSxcbiAgICAgICAgQmx1ZXM6IFsnI2Y3ZmJmZicsICcjZGVlYmY3JywgJyNjNmRiZWYnLCAnIzllY2FlMScsICcjNmJhZWQ2JywgJyM0MjkyYzYnLCAnIzIxNzFiNScsICcjMDg1MTljJywgJyMwODMwNmInXSxcbiAgICAgICAgUHVCdUduOiBbJyNmZmY3ZmInLCAnI2VjZTJmMCcsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzY3YTljZicsICcjMzY5MGMwJywgJyMwMjgxOGEnLCAnIzAxNmM1OScsICcjMDE0NjM2J10sXG4gICAgICAgIFZpcmlkaXM6IFsnIzQ0MDE1NCcsICcjNDgyNzc3JywgJyMzZjRhOGEnLCAnIzMxNjc4ZScsICcjMjY4MzhmJywgJyMxZjlkOGEnLCAnIzZjY2U1YScsICcjYjZkZTJiJywgJyNmZWU4MjUnXSxcblxuICAgICAgICAvLyBkaXZlcmdpbmdcblxuICAgICAgICBTcGVjdHJhbDogWycjOWUwMTQyJywgJyNkNTNlNGYnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOGInLCAnI2ZmZmZiZicsICcjZTZmNTk4JywgJyNhYmRkYTQnLCAnIzY2YzJhNScsICcjMzI4OGJkJywgJyM1ZTRmYTInXSxcbiAgICAgICAgUmRZbEduOiBbJyNhNTAwMjYnLCAnI2Q3MzAyNycsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNkOWVmOGInLCAnI2E2ZDk2YScsICcjNjZiZDYzJywgJyMxYTk4NTAnLCAnIzAwNjgzNyddLFxuICAgICAgICBSZEJ1OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZjdmN2Y3JywgJyNkMWU1ZjAnLCAnIzkyYzVkZScsICcjNDM5M2MzJywgJyMyMTY2YWMnLCAnIzA1MzA2MSddLFxuICAgICAgICBQaVlHOiBbJyM4ZTAxNTInLCAnI2M1MWI3ZCcsICcjZGU3N2FlJywgJyNmMWI2ZGEnLCAnI2ZkZTBlZicsICcjZjdmN2Y3JywgJyNlNmY1ZDAnLCAnI2I4ZTE4NicsICcjN2ZiYzQxJywgJyM0ZDkyMjEnLCAnIzI3NjQxOSddLFxuICAgICAgICBQUkduOiBbJyM0MDAwNGInLCAnIzc2MmE4MycsICcjOTk3MGFiJywgJyNjMmE1Y2YnLCAnI2U3ZDRlOCcsICcjZjdmN2Y3JywgJyNkOWYwZDMnLCAnI2E2ZGJhMCcsICcjNWFhZTYxJywgJyMxYjc4MzcnLCAnIzAwNDQxYiddLFxuICAgICAgICBSZFlsQnU6IFsnI2E1MDAyNicsICcjZDczMDI3JywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDkwJywgJyNmZmZmYmYnLCAnI2UwZjNmOCcsICcjYWJkOWU5JywgJyM3NGFkZDEnLCAnIzQ1NzViNCcsICcjMzEzNjk1J10sXG4gICAgICAgIEJyQkc6IFsnIzU0MzAwNScsICcjOGM1MTBhJywgJyNiZjgxMmQnLCAnI2RmYzI3ZCcsICcjZjZlOGMzJywgJyNmNWY1ZjUnLCAnI2M3ZWFlNScsICcjODBjZGMxJywgJyMzNTk3OGYnLCAnIzAxNjY1ZScsICcjMDAzYzMwJ10sXG4gICAgICAgIFJkR3k6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmZmZmZmYnLCAnI2UwZTBlMCcsICcjYmFiYWJhJywgJyM4Nzg3ODcnLCAnIzRkNGQ0ZCcsICcjMWExYTFhJ10sXG4gICAgICAgIFB1T3I6IFsnIzdmM2IwOCcsICcjYjM1ODA2JywgJyNlMDgyMTQnLCAnI2ZkYjg2MycsICcjZmVlMGI2JywgJyNmN2Y3ZjcnLCAnI2Q4ZGFlYicsICcjYjJhYmQyJywgJyM4MDczYWMnLCAnIzU0Mjc4OCcsICcjMmQwMDRiJ10sXG5cbiAgICAgICAgLy8gcXVhbGl0YXRpdmVcblxuICAgICAgICBTZXQyOiBbJyM2NmMyYTUnLCAnI2ZjOGQ2MicsICcjOGRhMGNiJywgJyNlNzhhYzMnLCAnI2E2ZDg1NCcsICcjZmZkOTJmJywgJyNlNWM0OTQnLCAnI2IzYjNiMyddLFxuICAgICAgICBBY2NlbnQ6IFsnIzdmYzk3ZicsICcjYmVhZWQ0JywgJyNmZGMwODYnLCAnI2ZmZmY5OScsICcjMzg2Y2IwJywgJyNmMDAyN2YnLCAnI2JmNWIxNycsICcjNjY2NjY2J10sXG4gICAgICAgIFNldDE6IFsnI2U0MWExYycsICcjMzc3ZWI4JywgJyM0ZGFmNGEnLCAnIzk4NGVhMycsICcjZmY3ZjAwJywgJyNmZmZmMzMnLCAnI2E2NTYyOCcsICcjZjc4MWJmJywgJyM5OTk5OTknXSxcbiAgICAgICAgU2V0MzogWycjOGRkM2M3JywgJyNmZmZmYjMnLCAnI2JlYmFkYScsICcjZmI4MDcyJywgJyM4MGIxZDMnLCAnI2ZkYjQ2MicsICcjYjNkZTY5JywgJyNmY2NkZTUnLCAnI2Q5ZDlkOScsICcjYmM4MGJkJywgJyNjY2ViYzUnLCAnI2ZmZWQ2ZiddLFxuICAgICAgICBEYXJrMjogWycjMWI5ZTc3JywgJyNkOTVmMDInLCAnIzc1NzBiMycsICcjZTcyOThhJywgJyM2NmE2MWUnLCAnI2U2YWIwMicsICcjYTY3NjFkJywgJyM2NjY2NjYnXSxcbiAgICAgICAgUGFpcmVkOiBbJyNhNmNlZTMnLCAnIzFmNzhiNCcsICcjYjJkZjhhJywgJyMzM2EwMmMnLCAnI2ZiOWE5OScsICcjZTMxYTFjJywgJyNmZGJmNmYnLCAnI2ZmN2YwMCcsICcjY2FiMmQ2JywgJyM2YTNkOWEnLCAnI2ZmZmY5OScsICcjYjE1OTI4J10sXG4gICAgICAgIFBhc3RlbDI6IFsnI2IzZTJjZCcsICcjZmRjZGFjJywgJyNjYmQ1ZTgnLCAnI2Y0Y2FlNCcsICcjZTZmNWM5JywgJyNmZmYyYWUnLCAnI2YxZTJjYycsICcjY2NjY2NjJ10sXG4gICAgICAgIFBhc3RlbDE6IFsnI2ZiYjRhZScsICcjYjNjZGUzJywgJyNjY2ViYzUnLCAnI2RlY2JlNCcsICcjZmVkOWE2JywgJyNmZmZmY2MnLCAnI2U1ZDhiZCcsICcjZmRkYWVjJywgJyNmMmYyZjInXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGxvd2VyY2FzZSBhbGlhc2VzIGZvciBjYXNlLWluc2Vuc2l0aXZlIG1hdGNoZXNcbiAgICBmb3IgKHZhciBpJDEgPSAwLCBsaXN0JDEgPSBPYmplY3Qua2V5cyhjb2xvcmJyZXdlcik7IGkkMSA8IGxpc3QkMS5sZW5ndGg7IGkkMSArPSAxKSB7XG4gICAgICAgIHZhciBrZXkgPSBsaXN0JDFbaSQxXTtcblxuICAgICAgICBjb2xvcmJyZXdlcltrZXkudG9Mb3dlckNhc2UoKV0gPSBjb2xvcmJyZXdlcltrZXldO1xuICAgIH1cblxuICAgIHZhciBjb2xvcmJyZXdlcl8xID0gY29sb3JicmV3ZXI7XG5cbiAgICAvLyBmZWVsIGZyZWUgdG8gY29tbWVudCBvdXQgYW55dGhpbmcgdG8gcm9sbHVwXG4gICAgLy8gYSBzbWFsbGVyIGNocm9tYS5qcyBidWlsdFxuXG4gICAgLy8gaW8gLS0+IGNvbnZlcnQgY29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gb3BlcmF0b3JzIC0tPiBtb2RpZnkgZXhpc3RpbmcgQ29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBpbnRlcnBvbGF0b3JzXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBnZW5lcmF0b3JzIC0tID4gY3JlYXRlIG5ldyBjb2xvcnNcbiAgICBjaHJvbWFfMS5hdmVyYWdlID0gYXZlcmFnZTtcbiAgICBjaHJvbWFfMS5iZXppZXIgPSBiZXppZXJfMTtcbiAgICBjaHJvbWFfMS5ibGVuZCA9IGJsZW5kXzE7XG4gICAgY2hyb21hXzEuY3ViZWhlbGl4ID0gY3ViZWhlbGl4O1xuICAgIGNocm9tYV8xLm1peCA9IGNocm9tYV8xLmludGVycG9sYXRlID0gbWl4O1xuICAgIGNocm9tYV8xLnJhbmRvbSA9IHJhbmRvbV8xO1xuICAgIGNocm9tYV8xLnNjYWxlID0gc2NhbGU7XG5cbiAgICAvLyBvdGhlciB1dGlsaXR5IG1ldGhvZHNcbiAgICBjaHJvbWFfMS5hbmFseXplID0gYW5hbHl6ZV8xLmFuYWx5emU7XG4gICAgY2hyb21hXzEuY29udHJhc3QgPSBjb250cmFzdDtcbiAgICBjaHJvbWFfMS5kZWx0YUUgPSBkZWx0YUU7XG4gICAgY2hyb21hXzEuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBjaHJvbWFfMS5saW1pdHMgPSBhbmFseXplXzEubGltaXRzO1xuICAgIGNocm9tYV8xLnZhbGlkID0gdmFsaWQ7XG5cbiAgICAvLyBzY2FsZVxuICAgIGNocm9tYV8xLnNjYWxlcyA9IHNjYWxlcztcblxuICAgIC8vIGNvbG9yc1xuICAgIGNocm9tYV8xLmNvbG9ycyA9IHczY3gxMV8xO1xuICAgIGNocm9tYV8xLmJyZXdlciA9IGNvbG9yYnJld2VyXzE7XG5cbiAgICB2YXIgY2hyb21hX2pzID0gY2hyb21hXzE7XG5cbiAgICByZXR1cm4gY2hyb21hX2pzO1xuXG59KSkpO1xuIiwiY29uc3QgY2hyb21hID0gcmVxdWlyZSgnY2hyb21hLWpzJyk7XG5jb25zb2xlLmxvZyhjaHJvbWEoJ3JlZCcpKTtcbmNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbmZyYW1lLm5hbWUgPSBcIkNvbnRyYXN0IEdyaWRcIjtcbmNvbnN0IHByb21Sb2JvdG9SZWcgPSBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG5sZXQgcHJvbWlzZXMgPSBbcHJvbVJvYm90b1JlZ107XG5Qcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgZG9HcmlkKCk7XG59KTtcbmNvbnN0IG5vZGVzID0gW107XG5mdW5jdGlvbiBkb0dyaWQoKSB7XG4gICAgLy9NYWtlIGEgbmV3IGZyYW1lXG4gICAgY29uc3QgY29sb3JTdHlsZXMgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCk7XG4gICAgY29uc3QgcGFpbnRzID0gY29sb3JTdHlsZXMuZmlsdGVyKHN0eWxlID0+IHsgcmV0dXJuIEJvb2xlYW4oc3R5bGUucGFpbnRzWzBdKTsgfSk7XG4gICAgLy9jb25zb2xlLmxvZyhwYWludHMpXG4gICAgbGV0IHBhc3NlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFpbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFpbnRzLmxlbmd0aCAtIGk7IGorKykge1xuICAgICAgICAgICAgaWYgKGogIT09IGkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmkgPSBwYWludHNbaV0ucGFpbnRzWzBdLmNvbG9yLnI7XG4gICAgICAgICAgICAgICAgbGV0IGdpID0gcGFpbnRzW2ldLnBhaW50c1swXS5jb2xvci5nO1xuICAgICAgICAgICAgICAgIGxldCBiaSA9IHBhaW50c1tpXS5wYWludHNbMF0uY29sb3IuYjtcbiAgICAgICAgICAgICAgICBsZXQgcmogPSBwYWludHNbal0ucGFpbnRzWzBdLmNvbG9yLnI7XG4gICAgICAgICAgICAgICAgbGV0IGdqID0gcGFpbnRzW2pdLnBhaW50c1swXS5jb2xvci5nO1xuICAgICAgICAgICAgICAgIGxldCBiaiA9IHBhaW50c1tqXS5wYWludHNbMF0uY29sb3IuYjtcbiAgICAgICAgICAgICAgICBsZXQgaGV4aSA9IG1ha2VIZXgocmksIGdpLCBiaSk7XG4gICAgICAgICAgICAgICAgbGV0IGhleGogPSBtYWtlSGV4KHJqLCBnaiwgYmopO1xuICAgICAgICAgICAgICAgIGxldCBjb250cmFzdCA9IGNocm9tYS5jb250cmFzdChoZXhpLCBoZXhqKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJhc3QgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlcy5wdXNoKHsgaGV4aSwgaGV4aiB9KTtcbiAgICAgICAgICAgICAgICAgICAgbWFrZUNvbnRyYXN0U3F1YXJlKDAsIChwYXNzZXMubGVuZ3RoIC0gMSkgKiAxMjAsIGNvbnRyYXN0LCBoZXhpLCByaSwgZ2ksIGJpLCByaiwgZ2osIGJqKTtcbiAgICAgICAgICAgICAgICAgICAgbWFrZUNvbnRyYXN0U3F1YXJlKDIwMCwgKHBhc3Nlcy5sZW5ndGggLSAxKSAqIDEyMCwgY29udHJhc3QsIGhleGosIHJqLCBnaiwgYmosIHJpLCBnaSwgYmkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnJhbWUucmVzaXplKDQ0MCwgKHBhc3Nlcy5sZW5ndGggKiAxMjApICsgMjApO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNsb3NlIHRoZSBwbHVnaW4gd2hlbiB5b3UncmUgZG9uZS4gT3RoZXJ3aXNlIHRoZSBwbHVnaW4gd2lsbFxuICAgIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCdHcmlkIE1hZGUhJyk7XG59XG5mdW5jdGlvbiBtYWtlSGV4KHIsIGcsIGIpIHtcbiAgICBsZXQgcmVkID0gcmdiVG9IZXgoTWF0aC5yb3VuZCgyNTUgKiByKSk7XG4gICAgbGV0IGdyZWVuID0gcmdiVG9IZXgoTWF0aC5yb3VuZCgyNTUgKiBnKSk7XG4gICAgbGV0IGJsdWUgPSByZ2JUb0hleChNYXRoLnJvdW5kKDI1NSAqIGIpKTtcbiAgICByZXR1cm4gJyMnICsgcmVkICsgZ3JlZW4gKyBibHVlO1xufVxuZnVuY3Rpb24gcmdiVG9IZXgoaW50KSB7XG4gICAgdmFyIGhleCA9IE51bWJlcihpbnQpLnRvU3RyaW5nKDE2KTtcbiAgICBpZiAoaGV4Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgaGV4ID0gXCIwXCIgKyBoZXg7XG4gICAgfVxuICAgIHJldHVybiBoZXg7XG59XG5mdW5jdGlvbiBtYWtlQ29udHJhc3RTcXVhcmUoeCwgeSwgY29udHJhc3QsIGZoZXgsIGZyLCBmZywgZmIsIGJyLCBiZywgYmIpIHtcbiAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgcmVjdC54ID0geCArIDA7XG4gICAgcmVjdC55ID0geTtcbiAgICByZWN0LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cygyMDAsIDEwMCk7XG4gICAgY29uc3QgdGV4dEhleENvZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgdGV4dEhleENvZGUuY2hhcmFjdGVycyA9IGZoZXgudG9VcHBlckNhc2UoKTtcbiAgICAvL3RleHQuY2hhcmFjdGVycyA9IGBDOiAke2NvbnRyYXN0fWBcbiAgICB0ZXh0SGV4Q29kZS54ID0geCArIDg7XG4gICAgdGV4dEhleENvZGUueSA9IHkgKyA4O1xuICAgIHRleHRIZXhDb2RlLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogZnIsIGc6IGZnLCBiOiBmYiB9IH1dO1xuICAgIHRleHRIZXhDb2RlLmZvbnRTaXplID0gMTQ7XG4gICAgY29uc3QgdGV4dENvbnRyYXN0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIHRleHRDb250cmFzdC5jaGFyYWN0ZXJzID0gYCR7Y29udHJhc3QudG9GaXhlZCgyKX06MWA7XG4gICAgdGV4dENvbnRyYXN0LnggPSB4ICsgODtcbiAgICB0ZXh0Q29udHJhc3QueSA9IHkgKyAzMDtcbiAgICB0ZXh0Q29udHJhc3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiBmciwgZzogZmcsIGI6IGZiIH0gfV07XG4gICAgdGV4dENvbnRyYXN0LmZvbnRTaXplID0gMTI7XG4gICAgY29uc3QgdGV4dEluZm8gPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgdGV4dEluZm8ueCA9IHggKyA4O1xuICAgIHRleHRJbmZvLnkgPSB5ICsgNDg7XG4gICAgdGV4dEluZm8uZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiBmciwgZzogZmcsIGI6IGZiIH0gfV07XG4gICAgdGV4dEluZm8uZm9udFNpemUgPSAxMDtcbiAgICBpZiAoY29udHJhc3QgPiAzICYmIGNvbnRyYXN0IDwgNC41KSB7XG4gICAgICAgIHRleHRJbmZvLmNoYXJhY3RlcnMgPSBgQUEgbGFyZ2UgdGV4dFxcbkFBIG5vbi10ZXh0YDtcbiAgICB9XG4gICAgaWYgKGNvbnRyYXN0ID4gNC41ICYmIGNvbnRyYXN0IDwgNykge1xuICAgICAgICB0ZXh0SW5mby5jaGFyYWN0ZXJzID0gYEFBQSBsYXJnZSB0ZXh0XFxuQUEgbGFyZ2UgdGV4dCAvIG5vcm1hbCB0ZXh0XFxuQUEgbm9uLXRleHRgO1xuICAgIH1cbiAgICBpZiAoY29udHJhc3QgPiA3KSB7XG4gICAgICAgIHRleHRJbmZvLmNoYXJhY3RlcnMgPSBgQUFBIGxhcmdlIHRleHQgLyBub3JtYWwgdGV4dFxcbkFBIGxhcmdlIHRleHQgLyBub3JtYWwgdGV4dFxcbkFBIG5vbi10ZXh0YDtcbiAgICB9XG4gICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IGJyLCBnOiBiZywgYjogYmIgfSB9XTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZCh0ZXh0SGV4Q29kZSk7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dENvbnRyYXN0KTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZCh0ZXh0SW5mbyk7XG4gICAgbGV0IG15R3JvdXAgPSBbXTtcbiAgICBteUdyb3VwLnB1c2gocmVjdCk7XG4gICAgbXlHcm91cC5wdXNoKHRleHRIZXhDb2RlKTtcbiAgICBteUdyb3VwLnB1c2godGV4dENvbnRyYXN0KTtcbiAgICBteUdyb3VwLnB1c2godGV4dEluZm8pO1xuICAgIGNvbnN0IGdyb3VwZWQgPSBmaWdtYS5ncm91cChteUdyb3VwLCBmcmFtZSwgMCk7XG4gICAgZ3JvdXBlZC55ID0geSArIDIwO1xuICAgIGdyb3VwZWQueCA9IHggKyAyMDtcbiAgICAvLyB9XG59XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"js/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["clock"] = window["clock"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","js/vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store.ts */ "./src/store.ts");
/* harmony import */ var _container_screen_index_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/container/screen/index.tsx */ "./src/container/screen/index.tsx");
/* harmony import */ var _container_screenSetting_index_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/container/screenSetting/index.tsx */ "./src/container/screenSetting/index.tsx");
/* harmony import */ var _container_test_index_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/container/test/index.tsx */ "./src/container/test/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


// container




var App = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], { store: _store_ts__WEBPACK_IMPORTED_MODULE_1__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "App" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_screen_index_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_screenSetting_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_test_index_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/beans/ColorToRGBA.ts":
/*!**********************************!*\
  !*** ./src/beans/ColorToRGBA.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var r = _a.r, g = _a.g, b = _a.b, a = _a.a;
    console.log(r, g, b, a);
    return "rgba( " + r + "," + g + "," + b + "," + a + ")";
});


/***/ }),

/***/ "./src/beans/ZeroPadding.ts":
/*!**********************************!*\
  !*** ./src/beans/ZeroPadding.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 0詰めフォーマット
 * @param  {Number} num  number or string
 * @param  {Number} n  number of characters
 * @return {String} (In an error, 'false' is returned. )
 */
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var num = _a.num, minimamDisit = _a.minimamDisit;
    var result;
    switch (typeof num) {
        case 'string':
            result = num;
            break;
        case 'number':
            result = num.toString();
            break;
        default:
            return false;
    }
    while (result.length < minimamDisit) {
        result = '0' + result;
    }
    return result;
});


/***/ }),

/***/ "./src/beans/index.ts":
/*!****************************!*\
  !*** ./src/beans/index.ts ***!
  \****************************/
/*! exports provided: ZeroPadidng, ColorToRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _beans_ZeroPadding_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/beans/ZeroPadding.ts */ "./src/beans/ZeroPadding.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZeroPadidng", function() { return _beans_ZeroPadding_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ColorToRGBA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorToRGBA */ "./src/beans/ColorToRGBA.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorToRGBA", function() { return _ColorToRGBA__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./src/components/screen.tsx":
/*!***********************************!*\
  !*** ./src/components/screen.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! beautiful-react-hooks */ "./node_modules/beautiful-react-hooks/dist/esm/index.js");
/* harmony import */ var _components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/screenPanel.tsx */ "./src/components/screenPanel.tsx");
/* harmony import */ var _beans___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/beans/ */ "./src/beans/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var Screen = function (_a) {
    var fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight, fontColor = _a.fontColor, backgroundColor = _a.backgroundColor, enabledShowMilliseconds = _a.enabledShowMilliseconds;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), styleObject = _b[0], setStyleObject = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), hh1 = _c[0], setHh1 = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), hh2 = _d[0], setHh2 = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), mm1 = _e[0], setMm1 = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), mm2 = _f[0], setMm2 = _f[1];
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), ss1 = _g[0], setSs1 = _g[1];
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), ss2 = _h[0], setSs2 = _h[1];
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), sss1 = _j[0], setSss1 = _j[1];
    var _k = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), sss2 = _k[0], setSss2 = _k[1];
    var _l = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), sss3 = _l[0], setSss3 = _l[1];
    var _m = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date()), date = _m[0], setDate = _m[1];
    var options = {
        increment: 0.5,
        startAt: 0,
        finishAt: -1,
    };
    var onFinish = Object(beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useRequestAnimationFrame"])(function (progress, next) {
        setDate(new Date());
        next();
    }, options);
    onFinish(function () {
        console.log('finish');
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setStyleObject(__assign(__assign({}, styleObject), { fontSize: fontSize + "px", fontFamily: fontFamily,
            fontWeight: fontWeight, color: Object(_beans___WEBPACK_IMPORTED_MODULE_3__["ColorToRGBA"])(fontColor), backgroundColor: Object(_beans___WEBPACK_IMPORTED_MODULE_3__["ColorToRGBA"])(backgroundColor) }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fontSize, fontFamily, fontWeight, fontColor, backgroundColor]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var hh = Object(_beans___WEBPACK_IMPORTED_MODULE_3__["ZeroPadidng"])({ num: date.getHours(), minimamDisit: 2 });
        var mm = Object(_beans___WEBPACK_IMPORTED_MODULE_3__["ZeroPadidng"])({ num: date.getMinutes(), minimamDisit: 2 });
        var ss = Object(_beans___WEBPACK_IMPORTED_MODULE_3__["ZeroPadidng"])({ num: date.getSeconds(), minimamDisit: 2 });
        var sss = Object(_beans___WEBPACK_IMPORTED_MODULE_3__["ZeroPadidng"])({ num: date.getMilliseconds(), minimamDisit: 3 });
        setHh1(hh[0]);
        setHh2(hh[1]);
        setMm1(mm[0]);
        setMm2(mm[1]);
        setSs1(ss[0]);
        setSs2(ss[1]);
        setSss1(sss[0]);
        setSss2(sss[1]);
        setSss3(sss[2]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen", style: styleObject },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "hh1", num: hh1 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "hh2", num: hh2 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-colon" }, ":"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "mm1", num: mm1 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "mm2", num: mm2 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-colon" }, ":"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "ss1", num: ss1 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "ss2", num: ss2 })),
        enabledShowMilliseconds ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "sss1", num: sss1 })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "sss2", num: sss2 })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "sss3", num: sss3 })))) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (Screen);


/***/ }),

/***/ "./src/components/screenPanel.tsx":
/*!****************************************!*\
  !*** ./src/components/screenPanel.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ScreenPanel = function (_a) {
    var type = _a.type, num = _a.num;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "screen-panel-" + type }, num)));
};
//export default React.memo(ScreenPanel);
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ScreenPanel));


/***/ }),

/***/ "./src/components/screenSetting.tsx":
/*!******************************************!*\
  !*** ./src/components/screenSetting.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/font.ts */ "./src/font.ts");
/* harmony import */ var _components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/selectControl/index.tsx */ "./src/components/selectControl/index.tsx");




var ScreenSetting = function (_a) {
    var fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight, fontColor = _a.fontColor, backgroundColor = _a.backgroundColor, enabledShowMilliseconds = _a.enabledShowMilliseconds, setFontSize = _a.setFontSize, setFontFamily = _a.setFontFamily, setFontWeight = _a.setFontWeight, setFontColor = _a.setFontColor, setBackgroundColor = _a.setBackgroundColor, setEnabledShowMilliseconds = _a.setEnabledShowMilliseconds;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(28), minFontSize = _b[0], setMinFontSize = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100), maxFontSize = _c[0], setMaxFontSize = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), fontFamilyOptionList = _d[0], setFontFamilyOptions = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), fontSizeOptionList = _e[0], setFontSizeOptionList = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), fontWeightOptionList = _f[0], setFontWeightOptionList = _f[1];
    var fontWeightOptions = (function () {
        var result = [];
        for (var index = minFontSize; index < maxFontSize; index++) {
            result.push({
                value: index.toString(),
                valueName: index.toString(),
            });
        }
        return result;
    })();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setFontFamilyOptions(_font_ts__WEBPACK_IMPORTED_MODULE_2__["FONT_NAME_LIST"].map(function (fontName) {
            return {
                value: fontName,
                valueName: fontName,
            };
        }));
        setFontSizeOptionList(function () {
            var result = [];
            for (var index = minFontSize; index < maxFontSize; index++) {
                result.push({
                    value: index.toString(),
                    valueName: index.toString(),
                });
            }
            return result;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (fontFamilyOptionList.length) {
            setFontFamily(fontFamilyOptionList[0].value);
        }
    }, [fontFamilyOptionList]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        console.log(fontFamily);
        setFontWeightOptionList(function () {
            return Object(_font_ts__WEBPACK_IMPORTED_MODULE_2__["getEnabledFontSize"])(fontFamily).map(function (fontWeight) {
                return {
                    value: fontWeight.toString(),
                    valueName: fontWeight.toString(),
                };
            });
        });
        var enabledFontWeightList = Object(_font_ts__WEBPACK_IMPORTED_MODULE_2__["getEnabledFontSize"])(fontFamily);
        if (enabledFontWeightList.indexOf(fontWeight) === -1) {
            setFontWeight(enabledFontWeightList[0]);
        }
    }, [fontFamily]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var defaultValue = 28;
        setFontSize(defaultValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleFontSizeChange = function (e) {
        setFontSize(e.target.value);
    };
    var handleFontFamilyChange = function (e) {
        var fontName = e.target.value;
        setFontFamily(fontName);
    };
    var handleFontWeightChange = function (e) {
        setFontWeight(e.target.value);
    };
    var handleFontColorChange = function (color) {
        setFontColor(color.rgb);
    };
    var handleBackgroundColorChange = function (color) {
        setBackgroundColor(color.rgb);
    };
    var handleEnabledShowMilliseconds = function (e) {
        console.log(e.target.checked);
        setEnabledShowMilliseconds(e.target.checked);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "setting" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", { className: "setting-fieldset" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", { className: "setting-legend" }, "font"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", { className: "setting-font" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "font-family", defaultValue: fontFamilyOptionList[0], options: fontFamilyOptionList, name: "font-family", onChange: handleFontFamilyChange }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "font-size", defaultValue: fontSizeOptionList[0], options: fontSizeOptionList, name: "font-size", onChange: handleFontSizeChange }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "font-weight", defaultValue: fontWeightOptionList[0], options: fontWeightOptionList, name: "font-weight", onChange: handleFontWeightChange }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", { className: "setting-fieldset" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", { className: "config" }, "Color"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "font-color" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "font-color"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], { color: fontColor, onChange: handleFontColorChange }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "background-color" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "background-color"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], { color: backgroundColor, onChange: handleBackgroundColorChange })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", { className: "setting-fieldset" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", { className: "config" }, "field"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", value: "milliseconds", checked: enabledShowMilliseconds, onChange: handleEnabledShowMilliseconds }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "show milliseconds"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ScreenSetting);


/***/ }),

/***/ "./src/components/selectControl/index.tsx":
/*!************************************************!*\
  !*** ./src/components/selectControl/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SelectControl = function (_a) {
    var title = _a.title, name = _a.name, defaultValue = _a.defaultValue, options = _a.options, onChange = _a.onChange;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(title), localTitle = _b[0], setLocalTitle = _b[1];
    var createOptionTag = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", { className: "setting-font_title" }, title),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", { className: "setting-font_detail" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "setting-font-family" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { defaultValue: defaultValue.value, name: name, onChange: onChange }, (function () {
                        var list = options.map(function (_a) {
                            var value = _a.value, valueName = _a.valueName;
                            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: value, key: value }, valueName));
                        });
                        return list;
                    })())))));
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, options.length > 0 ? createOptionTag() : null);
};
/* harmony default export */ __webpack_exports__["default"] = (SelectControl);


/***/ }),

/***/ "./src/components/test.tsx":
/*!*********************************!*\
  !*** ./src/components/test.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

//import { setText, asyncGetData } from '~/features/test/action.ts';
var Test = function (_a) {
    var text = _a.text, setText = _a.setText, apiResult = _a.apiResult, asyncGetData = _a.asyncGetData;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(text), localText = _b[0], setLocalText = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        // 非同期確認用
        //asyncGetData('/react-state/');
        asyncGetData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setText(localText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localText]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", value: localText, onChange: function (e) { return setLocalText(e.target.value); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
            "\u30B5\u30FC\u30D0\u30BF\u30A4\u30E0\uFF1A",
            apiResult)));
};
/* harmony default export */ __webpack_exports__["default"] = (Test);


/***/ }),

/***/ "./src/container/screen/index.tsx":
/*!****************************************!*\
  !*** ./src/container/screen/index.tsx ***!
  \****************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_screen_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/screen.tsx */ "./src/components/screen.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var mapStateToProps = function (appState) {
    return __assign({}, appState.screenSetting);
};
var mapDispatchToProps = function (dispatch) {
    return {};
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_screen_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/container/screenSetting/index.tsx":
/*!***********************************************!*\
  !*** ./src/container/screenSetting/index.tsx ***!
  \***********************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/features/screenSetting/screenSettingReducer.ts */ "./src/features/screenSetting/screenSettingReducer.ts");
/* harmony import */ var _components_screenSetting_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/screenSetting.tsx */ "./src/components/screenSetting.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var mapStateToProps = function (appState) {
    return __assign({}, appState.screenSetting);
};
var mapDispatchToProps = function (dispatch) {
    return {
        setFontSize: function (num) { return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_1__["setFontSize"])(num)); },
        setFontFamily: function (num) { return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_1__["setFontFamily"])(num)); },
        setFontWeight: function (num) { return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_1__["setFontWeight"])(num)); },
        setFontColor: function (color) { return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_1__["setFontColor"])(color)); },
        setBackgroundColor: function (color) { return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_1__["setBackgroundColor"])(color)); },
        setEnabledShowMilliseconds: function (isEnabled) { return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_1__["setEnabledShowMilliseconds"])(isEnabled)); },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_screenSetting_tsx__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./src/container/test/index.tsx":
/*!**************************************!*\
  !*** ./src/container/test/index.tsx ***!
  \**************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/features/test/testReducer.ts */ "./src/features/test/testReducer.ts");
/* harmony import */ var _components_test_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/test.tsx */ "./src/components/test.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var mapStateToProps = function (appState) {
    return __assign({}, appState.test);
};
// ThunkDispatchの引数の型何指定すればよいかよくわからなかった、extraArgumentの型になればいいとおもうんだけど
var mapDispatchToProps = function (dispatch) {
    return {
        setText: function (text) {
            dispatch(Object(_features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_1__["setText"])(text));
        },
        asyncGetData: function (url) {
            dispatch(Object(_features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_1__["asyncGetData"])());
        },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_test_tsx__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./src/features/screen/screenReducer.ts":
/*!**********************************************!*\
  !*** ./src/features/screen/screenReducer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var initialState = {};
var screenState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
    name: 'screen',
    initialState: initialState,
    reducers: {},
});
/* harmony default export */ __webpack_exports__["default"] = (screenState.reducer);


/***/ }),

/***/ "./src/features/screenSetting/screenSettingReducer.ts":
/*!************************************************************!*\
  !*** ./src/features/screenSetting/screenSettingReducer.ts ***!
  \************************************************************/
/*! exports provided: setFontSize, setFontFamily, setFontWeight, setFontColor, setBackgroundColor, setEnabledShowMilliseconds, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontSize", function() { return setFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontFamily", function() { return setFontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontWeight", function() { return setFontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontColor", function() { return setFontColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnabledShowMilliseconds", function() { return setEnabledShowMilliseconds; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;

var initialState = {
    fontSize: 28,
    fontFamily: 'sans-serif',
    fontWeight: 400,
    fontColor: { r: 0, g: 0, b: 0, a: 1 },
    backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
    enabledShowMilliseconds: true,
};
//export const setFontSize = actionCreator<string | number>('SET_FONTSIZE');
//export const setFontFamily = actionCreator<string>('SET_FONTFAMILY');
//export const setFontWeight = actionCreator<string | number>('SET_FONTWEIGHT');
//export const setFontColor = actionCreator<IColor>('SET_FONTCOLOR');
//export const setBackgroundColor = actionCreator<IColor>('SET_BACKGROUNDCOLOR');
//export const setEnabledShowMilliseconds = actionCreator<boolean>('SET_ENABLEDSHOWMILLISECONDS');
var testState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
    name: 'screenSetting',
    initialState: initialState,
    reducers: {
        setFontSize: function (state, _a) {
            var payload = _a.payload;
            var fontSize = typeof payload === 'string' ? parseInt(payload, 10) : payload;
            return __assign(__assign({}, state), { fontSize: fontSize });
        },
        setFontFamily: function (state, _a) {
            var payload = _a.payload;
            return __assign(__assign({}, state), { fontFamily: payload });
        },
        setFontWeight: function (state, _a) {
            var payload = _a.payload;
            var fontWeight = typeof payload === 'string' ? parseInt(payload, 10) : payload;
            return __assign(__assign({}, state), { fontWeight: fontWeight });
        },
        setFontColor: function (state, _a) {
            var payload = _a.payload;
            return __assign(__assign({}, state), { fontColor: payload });
        },
        setBackgroundColor: function (state, _a) {
            var payload = _a.payload;
            return __assign(__assign({}, state), { backgroundColor: payload });
        },
        setEnabledShowMilliseconds: function (state, _a) {
            var payload = _a.payload;
            return __assign(__assign({}, state), { enabledShowMilliseconds: payload });
        },
    },
});
var setFontSize = (_a = testState.actions, _a.setFontSize), setFontFamily = _a.setFontFamily, setFontWeight = _a.setFontWeight, setFontColor = _a.setFontColor, setBackgroundColor = _a.setBackgroundColor, setEnabledShowMilliseconds = _a.setEnabledShowMilliseconds;
/* harmony default export */ __webpack_exports__["default"] = (testState.reducer);


/***/ }),

/***/ "./src/features/test/testReducer.ts":
/*!******************************************!*\
  !*** ./src/features/test/testReducer.ts ***!
  \******************************************/
/*! exports provided: asyncGetData, setText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncGetData", function() { return asyncGetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var initialState = {
    text: 'first impression',
    apiEndpoint: '',
    apiResult: '',
};
var asyncGetData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('servertime/head', function () { return __awaiter(void 0, void 0, void 0, function () {
    var asyncResp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.head('./')];
            case 1:
                asyncResp = _a.sent();
                // 遅延の動作を確認するために無理やり遅延
                return [4 /*yield*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                        }, 5000);
                    })];
            case 2:
                // 遅延の動作を確認するために無理やり遅延
                _a.sent();
                return [2 /*return*/, {
                        date: asyncResp.headers.date,
                    }];
        }
    });
}); });
var testState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
    name: 'test',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            return __assign(__assign({}, state), { text: action.payload });
        },
    },
    // redux-thunk
    extraReducers: function (builder) {
        //// {{{ typescripotだと型がうまく行かず、この書き方はできないぽい
        //  [`${asyncGetData.fulfilled}`]: (state, action) => {
        //    return {
        //      ...state,
        //    };
        //  },
        //// }}}
        builder.addCase(asyncGetData.pending, function (state, action) {
            //console.log(action.type);
            // -> servertime/head/pending
            return __assign({}, state);
        });
        builder.addCase(asyncGetData.fulfilled, function (state, action) {
            //console.log(action.type);
            // -> servertime/head/fulfilled
            return __assign(__assign({}, state), { apiResult: action.payload.date });
        });
        builder.addCase(asyncGetData.rejected, function (state, action) {
            //console.log(action.type);
            // -> servertime/head/rejected
            return __assign({}, state);
        });
    },
});
var setText = testState.actions.setText;
/* harmony default export */ __webpack_exports__["default"] = (testState.reducer);


/***/ }),

/***/ "./src/font.ts":
/*!*********************!*\
  !*** ./src/font.ts ***!
  \*********************/
/*! exports provided: DEFAULTFONT_FAMILIES_LIST, WEBFONT_FAMILIES_LIST, FONT_FAMILIES_LIST, WEBFONT_FAMILIES, FONT_NAME_LIST, getEnabledFontSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULTFONT_FAMILIES_LIST", function() { return DEFAULTFONT_FAMILIES_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBFONT_FAMILIES_LIST", function() { return WEBFONT_FAMILIES_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FAMILIES_LIST", function() { return FONT_FAMILIES_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBFONT_FAMILIES", function() { return WEBFONT_FAMILIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_NAME_LIST", function() { return FONT_NAME_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnabledFontSize", function() { return getEnabledFontSize; });
var DEFAULTFONT_FAMILIES_LIST = [
    {
        fontName: 'sans-serif',
        fontsizelist: '4,5,6,7,8,9',
    },
    {
        fontName: 'serif',
        fontsizelist: '4,5,6,7,8,9',
    },
    {
        fontName: 'monospace',
        fontsizelist: '4,5,6,7,8,9',
    },
];
var WEBFONT_FAMILIES_LIST = [
    // font
    {
        fontName: 'Orbitron',
        fontsizelist: '4,5,6,7,8,9',
    },
    {
        fontName: 'Wallpoet',
        fontsizelist: '4',
    },
    {
        fontName: 'Roboto',
        fontsizelist: '1,3,7,9',
    },
    {
        fontName: 'Oswald',
        fontsizelist: '2,3,4,6,7,5',
    },
    {
        fontName: 'Balsamiq Sans',
        fontsizelist: '4,7',
    },
    {
        fontName: 'Anton',
        fontsizelist: '4',
    },
    {
        fontName: 'Barlow Condensed',
        fontsizelist: '1,2,3,4,5,6,7,8,9',
    },
    {
        fontName: 'Patrick Hand',
        fontsizelist: '4',
    },
    {
        fontName: 'Sacramento',
        fontsizelist: '4',
    },
    {
        fontName: 'Poiret One',
        fontsizelist: '4',
    },
    {
        fontName: 'Press Start 2P',
        fontsizelist: '4',
    },
    {
        fontName: 'Saira Condensed',
        fontsizelist: '1,2,3,4,5,6,7,8,9',
    },
    {
        fontName: 'Chakra Petch',
        fontsizelist: '3,4,5,6,7',
    },
    {
        fontName: 'Baloo Chettan 2',
        fontsizelist: '4,5,6,7,8',
    },
    {
        fontName: 'Coda',
        fontsizelist: '4,8',
    },
    {
        fontName: 'Saira Semi Condensed',
        fontsizelist: '1,2,3,4,5,6,7,8,9',
    },
    {
        fontName: 'Saira Extra Condensed',
        fontsizelist: '1,2,3,4,5,6,7,8,9',
    },
    {
        fontName: 'Aldrich',
        fontsizelist: '4',
    },
    {
        fontName: 'Stardos Stencil',
        fontsizelist: '4,7',
    },
    {
        fontName: 'Megrim',
        fontsizelist: '4',
    },
    {
        fontName: 'Iceland',
        fontsizelist: '4',
    },
    {
        fontName: 'Sarpanch',
        fontsizelist: '4,5,6,7,8,9',
    },
    {
        fontName: 'Shojumaru',
        fontsizelist: '4',
    },
    {
        fontName: 'Londrina Outline',
        fontsizelist: '400',
    },
    {
        fontName: 'Geo',
        fontsizelist: '4',
    },
    {
        fontName: 'Libre Barcode 39 Extended Text',
        fontsizelist: '4',
    },
    {
        fontName: 'Tulpen One',
        fontsizelist: '4',
    },
];
var FONT_FAMILIES_LIST = Array.prototype.concat(DEFAULTFONT_FAMILIES_LIST, WEBFONT_FAMILIES_LIST);
var WEBFONT_FAMILIES = WEBFONT_FAMILIES_LIST.map(function (_a) {
    var fontName = _a.fontName, fontsizelist = _a.fontsizelist;
    var replacedFontSizeList = fontsizelist.replace(/(\d)/g, '$100');
    return fontName + ":" + replacedFontSizeList;
});
var FONT_NAME_LIST = FONT_FAMILIES_LIST.map(function (_a) {
    var fontName = _a.fontName;
    return "" + fontName;
});
var getEnabledFontSize = function (fontName) {
    var filteredList = FONT_FAMILIES_LIST.filter(function (fontset) {
        return fontset.fontName === fontName;
    });
    if (!filteredList.length) {
        return undefined;
    }
    var result = filteredList[0].fontsizelist
        .replace(/(\d)/g, '$100')
        .split(',')
        .map(function (val) {
        return parseInt(val, 10);
    });
    return result;
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _font_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/font.ts */ "./src/font.ts");
/* harmony import */ var _App_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/App.tsx */ "./src/App.tsx");




//import "~/index.scss";

console.log(document.getElementById('app'));
webfontloader__WEBPACK_IMPORTED_MODULE_2___default.a.load({
    google: {
        families: _font_ts__WEBPACK_IMPORTED_MODULE_3__["WEBFONT_FAMILIES"],
    },
});
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById('app'));


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _features_test_testReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/test/testReducer */ "./src/features/test/testReducer.ts");
/* harmony import */ var _features_screen_screenReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/screen/screenReducer */ "./src/features/screen/screenReducer.ts");
/* harmony import */ var _features_screenSetting_screenSettingReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/screenSetting/screenSettingReducer */ "./src/features/screenSetting/screenSettingReducer.ts");




/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: {
        test: _features_test_testReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
        screen: _features_screen_screenReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
        screenSetting: _features_screenSetting_screenSettingReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    },
}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlYW5zL0NvbG9yVG9SR0JBLnRzIiwid2VicGFjazovLy8uL3NyYy9iZWFucy9aZXJvUGFkZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JlZW5QYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0Q29udHJvbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvc2NyZWVuU2V0dGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNUO0FBRS9CLFlBQVk7QUFDc0M7QUFDYztBQUNsQjtBQUVQO0FBRXZDLElBQU0sR0FBRyxHQUFhO0lBQ3BCLE9BQU8sQ0FDTCwyREFBQyxvREFBUSxJQUFDLEtBQUssRUFBRSxpREFBSztRQUNwQixvRUFBSyxTQUFTLEVBQUMsS0FBSztZQUNsQiwyREFBQyxtRUFBTSxPQUFHO1lBQ1YsbUVBQUksU0FBUyxFQUFDLElBQUksR0FBRztZQUNyQiwyREFBQywwRUFBYSxPQUFHO1lBQ2pCLG1FQUFJLFNBQVMsRUFBQyxJQUFJLEdBQUc7WUFDckIsMkRBQUMsaUVBQUksT0FBUSxDQUNULENBQ0csQ0FDWixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRWEsa0VBQUcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hCbkI7QUFBZSx5RUFBQyxFQUFzQjtRQUFwQixDQUFDLFNBQUUsQ0FBQyxTQUFFLENBQUMsU0FBRSxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEIsT0FBTyxXQUFTLENBQUMsU0FBSSxDQUFDLFNBQUksQ0FBQyxTQUFJLENBQUMsTUFBRyxDQUFDO0FBQ3RDLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ0hGO0FBQUE7Ozs7O0dBS0c7QUFPWSx5RUFBQyxFQUFtQztRQUFqQyxHQUFHLFdBQUUsWUFBWTtJQUNqQyxJQUFJLE1BQU0sQ0FBQztJQUNYLFFBQVEsT0FBTyxHQUFHLEVBQUU7UUFDbEIsS0FBSyxRQUFRO1lBQ1gsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLE1BQU07UUFDUixLQUFLLFFBQVE7WUFDWCxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLE1BQU07UUFDUjtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRTtRQUNuQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUN2QjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUNUO0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2M7QUFDVjtBQUVIO0FBSXBELElBQU0sTUFBTSxHQUFnRCxVQUFDLEVBQXlGO1FBQXZGLFFBQVEsZ0JBQUUsVUFBVSxrQkFBRSxVQUFVLGtCQUFFLFNBQVMsaUJBQUUsZUFBZSx1QkFBRSx1QkFBdUI7SUFDNUksU0FBZ0Msc0RBQVEsQ0FBQyxFQUFFLENBQUMsRUFBM0MsV0FBVyxVQUFFLGNBQWMsUUFBZ0IsQ0FBQztJQUU3QyxTQUFnQixzREFBUSxDQUFDLENBQUMsQ0FBQyxFQUExQixHQUFHLFVBQUUsTUFBTSxRQUFlLENBQUM7SUFDNUIsU0FBZ0Isc0RBQVEsQ0FBQyxDQUFDLENBQUMsRUFBMUIsR0FBRyxVQUFFLE1BQU0sUUFBZSxDQUFDO0lBQzVCLFNBQWdCLHNEQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTFCLEdBQUcsVUFBRSxNQUFNLFFBQWUsQ0FBQztJQUM1QixTQUFnQixzREFBUSxDQUFDLENBQUMsQ0FBQyxFQUExQixHQUFHLFVBQUUsTUFBTSxRQUFlLENBQUM7SUFDNUIsU0FBZ0Isc0RBQVEsQ0FBQyxDQUFDLENBQUMsRUFBMUIsR0FBRyxVQUFFLE1BQU0sUUFBZSxDQUFDO0lBQzVCLFNBQWdCLHNEQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTFCLEdBQUcsVUFBRSxNQUFNLFFBQWUsQ0FBQztJQUM1QixTQUFrQixzREFBUSxDQUFDLENBQUMsQ0FBQyxFQUE1QixJQUFJLFVBQUUsT0FBTyxRQUFlLENBQUM7SUFDOUIsU0FBa0Isc0RBQVEsQ0FBQyxDQUFDLENBQUMsRUFBNUIsSUFBSSxVQUFFLE9BQU8sUUFBZSxDQUFDO0lBQzlCLFNBQWtCLHNEQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTVCLElBQUksVUFBRSxPQUFPLFFBQWUsQ0FBQztJQUU5QixTQUFrQixzREFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBckMsSUFBSSxVQUFFLE9BQU8sUUFBd0IsQ0FBQztJQUU3QyxJQUFNLE9BQU8sR0FBRztRQUNkLFNBQVMsRUFBRSxHQUFHO1FBQ2QsT0FBTyxFQUFFLENBQUM7UUFDVixRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ2IsQ0FBQztJQUVGLElBQU0sUUFBUSxHQUFHLHNGQUF3QixDQUFDLFVBQUMsUUFBUSxFQUFFLElBQUk7UUFDdkQsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwQixJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVaLFFBQVEsQ0FBQztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCx1REFBUyxDQUFDO1FBQ1IsY0FBYyx1QkFDVCxXQUFXLEtBQ2QsUUFBUSxFQUFLLFFBQVEsT0FBSSxFQUN6QixVQUFVO1lBQ1YsVUFBVSxjQUNWLEtBQUssRUFBRSwyREFBVyxDQUFDLFNBQVMsQ0FBQyxFQUM3QixlQUFlLEVBQUUsMkRBQVcsQ0FBQyxlQUFlLENBQUMsSUFDN0MsQ0FBQztRQUVILHVEQUF1RDtJQUN6RCxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUVuRSx1REFBUyxDQUFDO1FBQ1IsSUFBTSxFQUFFLEdBQUcsMkRBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBTSxFQUFFLEdBQUcsMkRBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBTSxFQUFFLEdBQUcsMkRBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBTSxHQUFHLEdBQUcsMkRBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEIsdURBQXVEO0lBQ3pELENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFWCxPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsV0FBVztRQUN4QyxvRUFBSyxTQUFTLEVBQUMsY0FBYztZQUMzQiwyREFBQyxtRUFBVyxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFFLEdBQUcsR0FBSSxDQUNoQztRQUNOLG9FQUFLLFNBQVMsRUFBQyxjQUFjO1lBQzNCLDJEQUFDLG1FQUFXLElBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsR0FBRyxHQUFJLENBQ2hDO1FBQ04sb0VBQUssU0FBUyxFQUFDLGNBQWMsUUFBUTtRQUNyQyxvRUFBSyxTQUFTLEVBQUMsY0FBYztZQUMzQiwyREFBQyxtRUFBVyxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFFLEdBQUcsR0FBSSxDQUNoQztRQUNOLG9FQUFLLFNBQVMsRUFBQyxjQUFjO1lBQzNCLDJEQUFDLG1FQUFXLElBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsR0FBRyxHQUFJLENBQ2hDO1FBQ04sb0VBQUssU0FBUyxFQUFDLGNBQWMsUUFBUTtRQUNyQyxvRUFBSyxTQUFTLEVBQUMsY0FBYztZQUMzQiwyREFBQyxtRUFBVyxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFFLEdBQUcsR0FBSSxDQUNoQztRQUNOLG9FQUFLLFNBQVMsRUFBQyxjQUFjO1lBQzNCLDJEQUFDLG1FQUFXLElBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsR0FBRyxHQUFJLENBQ2hDO1FBQ0wsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQ3pCO1lBQ0Usb0VBQUssU0FBUyxFQUFDLGNBQWM7Z0JBQzNCLDJEQUFDLG1FQUFXLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUUsSUFBSSxHQUFJLENBQ2xDO1lBQ04sb0VBQUssU0FBUyxFQUFDLGNBQWM7Z0JBQzNCLDJEQUFDLG1FQUFXLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUUsSUFBSSxHQUFJLENBQ2xDO1lBQ04sb0VBQUssU0FBUyxFQUFDLGNBQWM7Z0JBQzNCLDJEQUFDLG1FQUFXLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUUsSUFBSSxHQUFJLENBQ2xDLENBQ0wsQ0FDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ0osQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRWEscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQzdHdEI7QUFBQTtBQUFBO0FBQTBCO0FBRTFCLElBQU0sV0FBVyxHQUErQixVQUFDLEVBQWE7UUFBWCxJQUFJLFlBQUUsR0FBRztJQUMxRCxPQUFPLENBQ0w7UUFDRSxxRUFBTSxTQUFTLEVBQUUsa0JBQWdCLElBQU0sSUFBRyxHQUFHLENBQVEsQ0FDcEQsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYseUNBQXlDO0FBQzFCLDJHQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDWHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ1I7QUFHb0I7QUFJRTtBQUVqRSxJQUFNLGFBQWEsR0FBMEQsVUFBQyxFQUFrTTtRQUFoTSxRQUFRLGdCQUFFLFVBQVUsa0JBQUUsVUFBVSxrQkFBRSxTQUFTLGlCQUFFLGVBQWUsdUJBQUUsdUJBQXVCLCtCQUFFLFdBQVcsbUJBQUUsYUFBYSxxQkFBRSxhQUFhLHFCQUFFLFlBQVksb0JBQUUsa0JBQWtCLDBCQUFFLDBCQUEwQjtJQUN0USxTQUFnQyxzREFBUSxDQUFDLEVBQUUsQ0FBQyxFQUEzQyxXQUFXLFVBQUUsY0FBYyxRQUFnQixDQUFDO0lBQzdDLFNBQWdDLHNEQUFRLENBQUMsR0FBRyxDQUFDLEVBQTVDLFdBQVcsVUFBRSxjQUFjLFFBQWlCLENBQUM7SUFFOUMsU0FBK0Msc0RBQVEsQ0FBQyxFQUFlLENBQUMsRUFBdkUsb0JBQW9CLFVBQUUsb0JBQW9CLFFBQTZCLENBQUM7SUFDekUsU0FBOEMsc0RBQVEsQ0FBQyxFQUFlLENBQUMsRUFBdEUsa0JBQWtCLFVBQUUscUJBQXFCLFFBQTZCLENBQUM7SUFDeEUsU0FBa0Qsc0RBQVEsQ0FBQyxFQUFlLENBQUMsRUFBMUUsb0JBQW9CLFVBQUUsdUJBQXVCLFFBQTZCLENBQUM7SUFFbEYsSUFBTSxpQkFBaUIsR0FBRyxDQUFDO1FBQ3pCLElBQU0sTUFBTSxHQUFjLEVBQUUsQ0FBQztRQUM3QixLQUFLLElBQUksS0FBSyxHQUFHLFdBQVcsRUFBRSxLQUFLLEdBQUcsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO2FBQzVCLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVMLHVEQUFTLENBQUM7UUFDUixvQkFBb0IsQ0FDbEIsdURBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFRO1lBQzFCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsU0FBUyxFQUFFLFFBQVE7YUFDcEIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixxQkFBcUIsQ0FBQztZQUNwQixJQUFNLE1BQU0sR0FBYyxFQUFFLENBQUM7WUFDN0IsS0FBSyxJQUFJLEtBQUssR0FBRyxXQUFXLEVBQUUsS0FBSyxHQUFHLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDdkIsU0FBUyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7aUJBQzVCLENBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFFSCx1REFBdUQ7SUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsdURBQVMsQ0FBQztRQUNSLElBQUksb0JBQW9CLENBQUMsTUFBTSxFQUFFO1lBQy9CLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUUzQix1REFBUyxDQUFDO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4Qix1QkFBdUIsQ0FBQztZQUN0QixPQUFPLG1FQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFVBQVU7Z0JBQ25ELE9BQU87b0JBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7b0JBQzVCLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFO2lCQUNqQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQU0scUJBQXFCLEdBQUcsbUVBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0QsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDcEQsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRWpCLHVEQUFTLENBQUM7UUFDUixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDeEIsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLHVEQUF1RDtJQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNLG9CQUFvQixHQUFHLFVBQUMsQ0FBQztRQUM3QixXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUM7SUFFRixJQUFNLHNCQUFzQixHQUFHLFVBQUMsQ0FBQztRQUMvQixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNoQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBRUYsSUFBTSxzQkFBc0IsR0FBRyxVQUFDLENBQUM7UUFDL0IsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLEtBQUs7UUFDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRixJQUFNLDJCQUEyQixHQUFHLFVBQUMsS0FBSztRQUN4QyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsSUFBTSw2QkFBNkIsR0FBRyxVQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNMLG9FQUFLLFNBQVMsRUFBQyxTQUFTO1FBQ3RCLHlFQUFVLFNBQVMsRUFBQyxrQkFBa0I7WUFDcEMsdUVBQVEsU0FBUyxFQUFDLGdCQUFnQixXQUFjO1lBQ2hELG1FQUFJLFNBQVMsRUFBQyxjQUFjO2dCQUMxQiwyREFBQywyRUFBYSxJQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsR0FBSTtnQkFDaEssMkRBQUMsMkVBQWEsSUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEdBQUk7Z0JBQ3RKLDJEQUFDLDJFQUFhLElBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixHQUFJLENBQzdKLENBQ0k7UUFDWCx5RUFBVSxTQUFTLEVBQUMsa0JBQWtCO1lBQ3BDLHVFQUFRLFNBQVMsRUFBQyxRQUFRLFlBQWU7WUFDekMsb0VBQUssU0FBUyxFQUFDLFlBQVk7Z0JBQ3pCO29CQUNFLHNGQUF1QjtvQkFDdkIsMkRBQUMsd0RBQVksSUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsR0FBSSxDQUM3RCxDQUNKO1lBQ04sb0VBQUssU0FBUyxFQUFDLGtCQUFrQjtnQkFDL0I7b0JBQ0UsNEZBQTZCO29CQUM3QiwyREFBQyx3REFBWSxJQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixHQUFJLENBQ3pFLENBQ0osQ0FDRztRQUNYLHlFQUFVLFNBQVMsRUFBQyxrQkFBa0I7WUFDcEMsdUVBQVEsU0FBUyxFQUFDLFFBQVEsWUFBZTtZQUN6QyxvRUFBSyxTQUFTLEVBQUMsT0FBTztnQkFDcEI7b0JBQ0Usc0VBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEdBQUk7b0JBQ3pILDZGQUE4QixDQUN4QixDQUNKLENBQ0csQ0FDUCxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFYSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbko3QjtBQUFBO0FBQUE7QUFBZ0U7QUFFaEUsSUFBTSxhQUFhLEdBQWlDLFVBQUMsRUFBZ0Q7UUFBOUMsS0FBSyxhQUFFLElBQUksWUFBRSxZQUFZLG9CQUFFLE9BQU8sZUFBRSxRQUFRO0lBQzNGLFNBQThCLHNEQUFRLENBQUMsS0FBSyxDQUFDLEVBQTVDLFVBQVUsVUFBRSxhQUFhLFFBQW1CLENBQUM7SUFFcEQsSUFBTSxlQUFlLEdBQUc7UUFDdEIsT0FBTyxDQUNMO1lBQ0UsbUVBQUksU0FBUyxFQUFDLG9CQUFvQixJQUFFLEtBQUssQ0FBTTtZQUMvQyxtRUFBSSxTQUFTLEVBQUMscUJBQXFCO2dCQUNqQyxvRUFBSyxTQUFTLEVBQUMscUJBQXFCO29CQUNsQyx1RUFBUSxZQUFZLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLElBQ3JFLENBQUM7d0JBQ0EsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQW9CO2dDQUFsQixLQUFLLGFBQUUsU0FBUzs0QkFDMUMsT0FBTyxDQUNMLHVFQUFRLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFDN0IsU0FBUyxDQUNILENBQ1YsQ0FBQzt3QkFDSixDQUFDLENBQUMsQ0FBQzt3QkFDSCxPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDLENBQUMsRUFBRSxDQUNHLENBQ0wsQ0FDSCxDQUNKLENBQ0osQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE9BQU8sd0hBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUksQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFFYSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaEM3QjtBQUFBO0FBQUE7QUFBbUQ7QUFFbkQsb0VBQW9FO0FBRXBFLElBQU0sSUFBSSxHQUF3QyxVQUFDLEVBQTBDO1FBQXhDLElBQUksWUFBRSxPQUFPLGVBQUUsU0FBUyxpQkFBRSxZQUFZO0lBQ25GLFNBQTRCLHNEQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDLFNBQVMsVUFBRSxZQUFZLFFBQWtCLENBQUM7SUFFakQsdURBQVMsQ0FBQztRQUNSLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsWUFBWSxFQUFFLENBQUM7UUFFZix1REFBdUQ7SUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsdURBQVMsQ0FBQztRQUNSLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQix1REFBdUQ7SUFDekQsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUVoQixPQUFPLENBQ0w7UUFDRSxzRUFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFLLG1CQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsR0FBSTtRQUN0RixzRUFBSSxJQUFJLENBQUs7UUFDYixtRUFBSSxTQUFTLEVBQUMsSUFBSSxHQUFHO1FBQ3JCOztZQUFXLFNBQVMsQ0FBSyxDQUN4QixDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFYSxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCa0I7QUFHTztBQUV0QyxJQUFNLGVBQWUsR0FBRyxVQUFDLFFBQWtCO0lBQ2hELG9CQUNLLFFBQVEsQ0FBQyxhQUFhLEVBQ3pCO0FBQ0osQ0FBQyxDQUFDO0FBRUssSUFBTSxrQkFBa0IsR0FBRyxVQUFDLFFBQXNGO0lBQ3ZILE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRWEsMEhBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyw4REFBTSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZWO0FBR3FJO0FBRWhIO0FBRXBELElBQU0sZUFBZSxHQUFHLFVBQUMsUUFBa0I7SUFDaEQsb0JBQ0ssUUFBUSxDQUFDLGFBQWEsRUFDekI7QUFDSixDQUFDLENBQUM7QUFFSyxJQUFNLGtCQUFrQixHQUFHLFVBQUMsUUFBc0Y7SUFDdkgsT0FBTztRQUNMLFdBQVcsRUFBRSxVQUFDLEdBQW9CLElBQUssZUFBUSxDQUFDLG1HQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBMUIsQ0FBMEI7UUFDakUsYUFBYSxFQUFFLFVBQUMsR0FBVyxJQUFLLGVBQVEsQ0FBQyxxR0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCO1FBQzVELGFBQWEsRUFBRSxVQUFDLEdBQW9CLElBQUssZUFBUSxDQUFDLHFHQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBNUIsQ0FBNEI7UUFDckUsWUFBWSxFQUFFLFVBQUMsS0FBYSxJQUFLLGVBQVEsQ0FBQyxvR0FBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTdCLENBQTZCO1FBQzlELGtCQUFrQixFQUFFLFVBQUMsS0FBYSxJQUFLLGVBQVEsQ0FBQywwR0FBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFuQyxDQUFtQztRQUMxRSwwQkFBMEIsRUFBRSxVQUFDLFNBQWtCLElBQUssZUFBUSxDQUFDLGtIQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQS9DLENBQStDO0tBQ3BHLENBQUM7QUFDSixDQUFDLENBQUM7QUFFYSwwSEFBTyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLHFFQUFhLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJyQztBQUdpQztBQUU5QjtBQUVsQyxJQUFNLGVBQWUsR0FBRyxVQUFDLFFBQWtCO0lBQ2hELG9CQUNLLFFBQVEsQ0FBQyxJQUFJLEVBQ2hCO0FBQ0osQ0FBQyxDQUFDO0FBRUYscUVBQXFFO0FBQzlELElBQU0sa0JBQWtCLEdBQUcsVUFBQyxRQUFzRjtJQUN2SCxPQUFPO1FBQ0wsT0FBTyxFQUFFLFVBQUMsSUFBWTtZQUNwQixRQUFRLENBQUMsNkVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDRCxZQUFZLEVBQUUsVUFBQyxHQUFXO1lBQ3hCLFFBQVEsQ0FBQyxrRkFBWSxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVhLDBIQUFPLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUMsNERBQUksQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMUJsRTtBQUFBO0FBQWdGO0FBR2hGLElBQU0sWUFBWSxHQUFpQixFQUFFLENBQUM7QUFFdEMsSUFBTSxXQUFXLEdBQUcsb0VBQVcsQ0FBQztJQUM5QixJQUFJLEVBQUUsUUFBUTtJQUNkLFlBQVk7SUFDWixRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUMsQ0FBQztBQUVZLDBFQUFXLENBQUMsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYNkM7QUFHaEYsSUFBTSxZQUFZLEdBQXdCO0lBQ3hDLFFBQVEsRUFBRSxFQUFFO0lBQ1osVUFBVSxFQUFFLFlBQVk7SUFDeEIsVUFBVSxFQUFFLEdBQUc7SUFDZixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3JDLGVBQWUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDakQsdUJBQXVCLEVBQUUsSUFBSTtDQUM5QixDQUFDO0FBRUYsNEVBQTRFO0FBQzVFLHVFQUF1RTtBQUN2RSxnRkFBZ0Y7QUFDaEYscUVBQXFFO0FBQ3JFLGlGQUFpRjtBQUNqRixrR0FBa0c7QUFFbEcsSUFBTSxTQUFTLEdBQUcsb0VBQVcsQ0FBQztJQUM1QixJQUFJLEVBQUUsZUFBZTtJQUNyQixZQUFZO0lBQ1osUUFBUSxFQUFFO1FBQ1IsV0FBVyxFQUFFLFVBQUMsS0FBSyxFQUFFLEVBQVc7Z0JBQVQsT0FBTztZQUM1QixJQUFNLFFBQVEsR0FBRyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMvRSw2QkFBWSxLQUFLLEtBQUUsUUFBUSxjQUFHO1FBQ2hDLENBQUM7UUFDRCxhQUFhLEVBQUUsVUFBQyxLQUFLLEVBQUUsRUFBVztnQkFBVCxPQUFPO1lBQzlCLDZCQUFZLEtBQUssS0FBRSxVQUFVLEVBQUUsT0FBTyxJQUFHO1FBQzNDLENBQUM7UUFDRCxhQUFhLEVBQUUsVUFBQyxLQUFLLEVBQUUsRUFBVztnQkFBVCxPQUFPO1lBQzlCLElBQU0sVUFBVSxHQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ2pGLDZCQUFZLEtBQUssS0FBRSxVQUFVLGdCQUFHO1FBQ2xDLENBQUM7UUFDRCxZQUFZLEVBQUUsVUFBQyxLQUFLLEVBQUUsRUFBVztnQkFBVCxPQUFPO1lBQzdCLDZCQUFZLEtBQUssS0FBRSxTQUFTLEVBQUUsT0FBTyxJQUFHO1FBQzFDLENBQUM7UUFDRCxrQkFBa0IsRUFBRSxVQUFDLEtBQUssRUFBRSxFQUFXO2dCQUFULE9BQU87WUFDbkMsNkJBQVksS0FBSyxLQUFFLGVBQWUsRUFBRSxPQUFPLElBQUc7UUFDaEQsQ0FBQztRQUNELDBCQUEwQixFQUFFLFVBQUMsS0FBSyxFQUFFLEVBQVc7Z0JBQVQsT0FBTztZQUMzQyw2QkFBWSxLQUFLLEtBQUUsdUJBQXVCLEVBQUUsT0FBTyxJQUFHO1FBQ3hELENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVZLGVBQVcsSUFBYixLQUE4RyxTQUFTLENBQUMsT0FBTyxpQkFBbEgsRUFBRSxhQUFhLHFCQUFFLGFBQWEscUJBQUUsWUFBWSxvQkFBRSxrQkFBa0IsMEJBQUUsMEJBQTBCLGlDQUF1QjtBQUU5SCx3RUFBUyxDQUFDLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQrQztBQUN0RDtBQUUxQixJQUFNLFlBQVksR0FBZTtJQUMvQixJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCLFdBQVcsRUFBRSxFQUFFO0lBQ2YsU0FBUyxFQUFFLEVBQUU7Q0FDZCxDQUFDO0FBTUssSUFBTSxZQUFZLEdBQUcseUVBQWdCLENBQzFDLGlCQUFpQixFQUNqQjs7OztvQkFDb0IscUJBQU0sNENBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztnQkFBbEMsU0FBUyxHQUFHLFNBQXNCO2dCQUV4QyxzQkFBc0I7Z0JBQ3RCLHFCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTzt3QkFDakMsVUFBVSxDQUFDOzRCQUNULE9BQU8sRUFBRSxDQUFDO3dCQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDWCxDQUFDLENBQUM7O2dCQUxGLHNCQUFzQjtnQkFDdEIsU0FJRSxDQUFDO2dCQUVILHNCQUFPO3dCQUNMLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUk7cUJBQzdCLEVBQUM7OztLQUNILENBQ0YsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLG9FQUFXLENBQUM7SUFDNUIsSUFBSSxFQUFFLE1BQU07SUFDWixZQUFZO0lBQ1osUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFQLFVBQVEsS0FBaUIsRUFBRSxNQUE2QjtZQUN0RCw2QkFBWSxLQUFLLEtBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUc7UUFDNUMsQ0FBQztLQUNGO0lBRUQsY0FBYztJQUNkLGFBQWEsRUFBRSxVQUFDLE9BQU87UUFDckIsMkNBQTJDO1FBQzNDLHVEQUF1RDtRQUN2RCxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixNQUFNO1FBQ04sUUFBUTtRQUNSLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO1lBQ2xELDJCQUEyQjtZQUMzQiw2QkFBNkI7WUFDN0Isb0JBQ0ssS0FBSyxFQUNSO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtZQUNwRCwyQkFBMkI7WUFDM0IsK0JBQStCO1lBQy9CLDZCQUNLLEtBQUssS0FDUixTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQzlCO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtZQUNuRCwyQkFBMkI7WUFDM0IsOEJBQThCO1lBQzlCLG9CQUNLLEtBQUssRUFDUjtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVZLFdBQU8sR0FBSyxTQUFTLENBQUMsT0FBTyxRQUF0QixDQUF1QjtBQUU5Qix3RUFBUyxDQUFDLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZFakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNLHlCQUF5QixHQUFlO0lBQ25EO1FBQ0UsUUFBUSxFQUFFLFlBQVk7UUFDdEIsWUFBWSxFQUFFLGFBQWE7S0FDNUI7SUFDRDtRQUNFLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFlBQVksRUFBRSxhQUFhO0tBQzVCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsV0FBVztRQUNyQixZQUFZLEVBQUUsYUFBYTtLQUM1QjtDQUNGLENBQUM7QUFFSyxJQUFNLHFCQUFxQixHQUFlO0lBQy9DLE9BQU87SUFDUDtRQUNFLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFlBQVksRUFBRSxhQUFhO0tBQzVCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsVUFBVTtRQUNwQixZQUFZLEVBQUUsR0FBRztLQUNsQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLFFBQVE7UUFDbEIsWUFBWSxFQUFFLFNBQVM7S0FDeEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFlBQVksRUFBRSxhQUFhO0tBQzVCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsZUFBZTtRQUN6QixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLE9BQU87UUFDakIsWUFBWSxFQUFFLEdBQUc7S0FDbEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsWUFBWSxFQUFFLG1CQUFtQjtLQUNsQztJQUNEO1FBQ0UsUUFBUSxFQUFFLGNBQWM7UUFDeEIsWUFBWSxFQUFFLEdBQUc7S0FDbEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFlBQVksRUFBRSxHQUFHO0tBQ2xCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsWUFBWTtRQUN0QixZQUFZLEVBQUUsR0FBRztLQUNsQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixZQUFZLEVBQUUsR0FBRztLQUNsQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixZQUFZLEVBQUUsbUJBQW1CO0tBQ2xDO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsY0FBYztRQUN4QixZQUFZLEVBQUUsV0FBVztLQUMxQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixZQUFZLEVBQUUsV0FBVztLQUMxQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLE1BQU07UUFDaEIsWUFBWSxFQUFFLEtBQUs7S0FDcEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsWUFBWSxFQUFFLG1CQUFtQjtLQUNsQztJQUNEO1FBQ0UsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxZQUFZLEVBQUUsbUJBQW1CO0tBQ2xDO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsU0FBUztRQUNuQixZQUFZLEVBQUUsR0FBRztLQUNsQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLFFBQVE7UUFDbEIsWUFBWSxFQUFFLEdBQUc7S0FDbEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFlBQVksRUFBRSxHQUFHO0tBQ2xCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsVUFBVTtRQUNwQixZQUFZLEVBQUUsYUFBYTtLQUM1QjtJQUNEO1FBQ0UsUUFBUSxFQUFFLFdBQVc7UUFDckIsWUFBWSxFQUFFLEdBQUc7S0FDbEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsWUFBWSxFQUFFLEtBQUs7S0FDcEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxLQUFLO1FBQ2YsWUFBWSxFQUFFLEdBQUc7S0FDbEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxnQ0FBZ0M7UUFDMUMsWUFBWSxFQUFFLEdBQUc7S0FDbEI7SUFDRDtRQUNFLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFlBQVksRUFBRSxHQUFHO0tBQ2xCO0NBQ0YsQ0FBQztBQUVLLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUVwRyxJQUFNLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQW9DO1FBQWxDLFFBQVEsZ0JBQUUsWUFBWTtJQUNqRixJQUFNLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLE9BQVUsUUFBUSxTQUFJLG9CQUFzQixDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBRUksSUFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBc0I7UUFBcEIsUUFBUTtJQUM5RCxPQUFPLEtBQUcsUUFBVSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBRUksSUFBTSxrQkFBa0IsR0FBRyxVQUFDLFFBQWdCO0lBQ2pELElBQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU87UUFDckQsT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBRUQsSUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7U0FDeEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7U0FDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxVQUFDLEdBQUc7UUFDUCxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFTCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNoS0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ087QUFFRztBQUNTO0FBRTdDLHdCQUF3QjtBQUNJO0FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRTVDLG9EQUFPLENBQUMsSUFBSSxDQUFDO0lBQ1gsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLHlEQUFnQjtLQUMzQjtDQUNGLENBQUMsQ0FBQztBQUVILGdEQUFRLENBQUMsTUFBTSxDQUFDLDJEQUFDLGdEQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFJSTtBQUNNO0FBQ3FCO0FBRWxFLHNJQUFjLENBQUM7SUFDNUIsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLGtFQUFXO1FBQ2pCLE1BQU0sRUFBRSxzRUFBYTtRQUNyQixhQUFhLEVBQUUsb0ZBQW9CO0tBQ3BDO0NBQ0YsQ0FBQyxFQUFDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImpzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJjbG9ja1wiXSA9IHdpbmRvd1tcImNsb2NrXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwianMvdmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ34vc3RvcmUudHMnO1xuXG4vLyBjb250YWluZXJcbmltcG9ydCBTY3JlZW4gZnJvbSAnfi9jb250YWluZXIvc2NyZWVuL2luZGV4LnRzeCc7XG5pbXBvcnQgU2NyZWVuU2V0dGluZyBmcm9tICd+L2NvbnRhaW5lci9zY3JlZW5TZXR0aW5nL2luZGV4LnRzeCc7XG5pbXBvcnQgVGVzdCBmcm9tICd+L2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPFNjcmVlbiAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8U2NyZWVuU2V0dGluZyAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8VGVzdD48L1Rlc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgciwgZywgYiwgYSB9OiBJQ29sb3IpID0+IHtcbiAgY29uc29sZS5sb2cociwgZywgYiwgYSk7XG4gIHJldHVybiBgcmdiYSggJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xufTtcbiIsIi8qKlxuICogMOipsOOCgeODleOCqeODvOODnuODg+ODiFxuICogQHBhcmFtICB7TnVtYmVyfSBudW0gIG51bWJlciBvciBzdHJpbmdcbiAqIEBwYXJhbSAge051bWJlcn0gbiAgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gKEluIGFuIGVycm9yLCAnZmFsc2UnIGlzIHJldHVybmVkLiApXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJWmVyb1BhZGRpbmcge1xuICBudW06IHN0cmluZyB8IG51bWJlcjtcbiAgbWluaW1hbURpc2l0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG51bSwgbWluaW1hbURpc2l0IH06IElaZXJvUGFkZGluZykgPT4ge1xuICBsZXQgcmVzdWx0O1xuICBzd2l0Y2ggKHR5cGVvZiBudW0pIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmVzdWx0ID0gbnVtO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJlc3VsdCA9IG51bS50b1N0cmluZygpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IG1pbmltYW1EaXNpdCkge1xuICAgIHJlc3VsdCA9ICcwJyArIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCBaZXJvUGFkaWRuZyBmcm9tICd+L2JlYW5zL1plcm9QYWRkaW5nLnRzJztcbmltcG9ydCBDb2xvclRvUkdCQSBmcm9tICcuL0NvbG9yVG9SR0JBJztcblxuZXhwb3J0IHsgWmVyb1BhZGlkbmcsIENvbG9yVG9SR0JBIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSB9IGZyb20gJ2JlYXV0aWZ1bC1yZWFjdC1ob29rcyc7XG5pbXBvcnQgU2NyZWVuUGFuZWwgZnJvbSAnfi9jb21wb25lbnRzL3NjcmVlblBhbmVsLnRzeCc7XG5cbmltcG9ydCB7IFplcm9QYWRpZG5nLCBDb2xvclRvUkdCQSB9IGZyb20gJ34vYmVhbnMvJztcblxuZXhwb3J0IGludGVyZmFjZSBzY3JlZW5Qcm9wcyB7fVxuXG5jb25zdCBTY3JlZW46IFJlYWN0LkZDPHNjcmVlblByb3BzICYgSVNjcmVlblNldHRpbmdTdGF0ZT4gPSAoeyBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0pID0+IHtcbiAgY29uc3QgW3N0eWxlT2JqZWN0LCBzZXRTdHlsZU9iamVjdF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgW2hoMSwgc2V0SGgxXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaGgyLCBzZXRIaDJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttbTEsIHNldE1tMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21tMiwgc2V0TW0yXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3MxLCBzZXRTczFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzczIsIHNldFNzMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzczEsIHNldFNzczFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzc3MyLCBzZXRTc3MyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3NzMywgc2V0U3NzM10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGluY3JlbWVudDogMC41LFxuICAgIHN0YXJ0QXQ6IDAsXG4gICAgZmluaXNoQXQ6IC0xLFxuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKChwcm9ncmVzcywgbmV4dCkgPT4ge1xuICAgIHNldERhdGUobmV3IERhdGUoKSk7XG4gICAgbmV4dCgpO1xuICB9LCBvcHRpb25zKTtcblxuICBvbkZpbmlzaCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2ZpbmlzaCcpO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0eWxlT2JqZWN0KHtcbiAgICAgIC4uLnN0eWxlT2JqZWN0LFxuICAgICAgZm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCxcbiAgICAgIGZvbnRGYW1pbHksXG4gICAgICBmb250V2VpZ2h0LFxuICAgICAgY29sb3I6IENvbG9yVG9SR0JBKGZvbnRDb2xvciksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yVG9SR0JBKGJhY2tncm91bmRDb2xvciksXG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhoID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0SG91cnMoKSwgbWluaW1hbURpc2l0OiAyIH0pO1xuICAgIGNvbnN0IG1tID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0TWludXRlcygpLCBtaW5pbWFtRGlzaXQ6IDIgfSk7XG4gICAgY29uc3Qgc3MgPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRTZWNvbmRzKCksIG1pbmltYW1EaXNpdDogMiB9KTtcbiAgICBjb25zdCBzc3MgPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgbWluaW1hbURpc2l0OiAzIH0pO1xuXG4gICAgc2V0SGgxKGhoWzBdKTtcbiAgICBzZXRIaDIoaGhbMV0pO1xuICAgIHNldE1tMShtbVswXSk7XG4gICAgc2V0TW0yKG1tWzFdKTtcbiAgICBzZXRTczEoc3NbMF0pO1xuICAgIHNldFNzMihzc1sxXSk7XG4gICAgc2V0U3NzMShzc3NbMF0pO1xuICAgIHNldFNzczIoc3NzWzFdKTtcbiAgICBzZXRTc3MzKHNzc1syXSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlblwiIHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cImhoMVwiIG51bT17aGgxfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cImhoMlwiIG51bT17aGgyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1jb2xvblwiPjo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwibW0xXCIgbnVtPXttbTF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwibW0yXCIgbnVtPXttbTJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLWNvbG9uXCI+OjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzczFcIiBudW09e3NzMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzczJcIiBudW09e3NzMn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge2VuYWJsZWRTaG93TWlsbGlzZWNvbmRzID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzczFcIiBudW09e3NzczF9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3NzMlwiIG51bT17c3NzMn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzc3MzXCIgbnVtPXtzc3MzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2NyZWVuUGFuZWw6IFJlYWN0LkZDPFNjcmVlblBhbmVsUHJvcHM+ID0gKHsgdHlwZSwgbnVtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc2NyZWVuLXBhbmVsLSR7dHlwZX1gfT57bnVtfTwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTY3JlZW5QYW5lbCk7XG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNjcmVlblBhbmVsKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2tldGNoUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InO1xuXG5pbXBvcnQgeyBzZXRGb250U2l6ZSwgc2V0Rm9udEZhbWlseSwgc2V0Rm9udFdlaWdodCwgc2V0Rm9udENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3IsIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0gZnJvbSAnfi9mZWF0dXJlcy9zY3JlZW5TZXR0aW5nL3NjcmVlblNldHRpbmdSZWR1Y2VyLnRzJztcbmltcG9ydCB7IEZPTlRfTkFNRV9MSVNULCBnZXRFbmFibGVkRm9udFNpemUgfSBmcm9tICd+L2ZvbnQudHMnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdiZWF1dGlmdWwtcmVhY3QtaG9va3MnO1xuXG5pbXBvcnQgUmFkaW9Db250cm9sIGZyb20gJ34vY29tcG9uZW50cy9yYWRpb0NvbnRyb2wvaW5kZXgudHN4JztcbmltcG9ydCBTZWxlY3RDb250cm9sIGZyb20gJ34vY29tcG9uZW50cy9zZWxlY3RDb250cm9sL2luZGV4LnRzeCc7XG5cbmNvbnN0IFNjcmVlblNldHRpbmc6IFJlYWN0LkZDPElTY3JlZW5TZXR0aW5nU3RhdGUgJiBJU2NyZWVuU2V0dGluZ0hhbmRsZXI+ID0gKHsgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRXZWlnaHQsIGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCBlbmFibGVkU2hvd01pbGxpc2Vjb25kcywgc2V0Rm9udFNpemUsIHNldEZvbnRGYW1pbHksIHNldEZvbnRXZWlnaHQsIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9KSA9PiB7XG4gIGNvbnN0IFttaW5Gb250U2l6ZSwgc2V0TWluRm9udFNpemVdID0gdXNlU3RhdGUoMjgpO1xuICBjb25zdCBbbWF4Rm9udFNpemUsIHNldE1heEZvbnRTaXplXSA9IHVzZVN0YXRlKDEwMCk7XG5cbiAgY29uc3QgW2ZvbnRGYW1pbHlPcHRpb25MaXN0LCBzZXRGb250RmFtaWx5T3B0aW9uc10gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuICBjb25zdCBbZm9udFNpemVPcHRpb25MaXN0LCBzZXRGb250U2l6ZU9wdGlvbkxpc3RdID0gdXNlU3RhdGUoW10gYXMgSU9wdGlvbltdKTtcbiAgY29uc3QgW2ZvbnRXZWlnaHRPcHRpb25MaXN0LCBzZXRGb250V2VpZ2h0T3B0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuXG4gIGNvbnN0IGZvbnRXZWlnaHRPcHRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQ6IElPcHRpb25bXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gbWluRm9udFNpemU7IGluZGV4IDwgbWF4Rm9udFNpemU7IGluZGV4KyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGluZGV4LnRvU3RyaW5nKCksXG4gICAgICAgIHZhbHVlTmFtZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9udEZhbWlseU9wdGlvbnMoXG4gICAgICBGT05UX05BTUVfTElTVC5tYXAoKGZvbnROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGZvbnROYW1lLFxuICAgICAgICAgIHZhbHVlTmFtZTogZm9udE5hbWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBzZXRGb250U2l6ZU9wdGlvbkxpc3QoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0OiBJT3B0aW9uW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gbWluRm9udFNpemU7IGluZGV4IDwgbWF4Rm9udFNpemU7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlTmFtZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9udEZhbWlseU9wdGlvbkxpc3QubGVuZ3RoKSB7XG4gICAgICBzZXRGb250RmFtaWx5KGZvbnRGYW1pbHlPcHRpb25MaXN0WzBdLnZhbHVlKTtcbiAgICB9XG4gIH0sIFtmb250RmFtaWx5T3B0aW9uTGlzdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZm9udEZhbWlseSk7XG5cbiAgICBzZXRGb250V2VpZ2h0T3B0aW9uTGlzdCgoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0RW5hYmxlZEZvbnRTaXplKGZvbnRGYW1pbHkpLm1hcCgoZm9udFdlaWdodCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBmb250V2VpZ2h0LnRvU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWVOYW1lOiBmb250V2VpZ2h0LnRvU3RyaW5nKCksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGVuYWJsZWRGb250V2VpZ2h0TGlzdCA9IGdldEVuYWJsZWRGb250U2l6ZShmb250RmFtaWx5KTtcbiAgICBpZiAoZW5hYmxlZEZvbnRXZWlnaHRMaXN0LmluZGV4T2YoZm9udFdlaWdodCkgPT09IC0xKSB7XG4gICAgICBzZXRGb250V2VpZ2h0KGVuYWJsZWRGb250V2VpZ2h0TGlzdFswXSk7XG4gICAgfVxuICB9LCBbZm9udEZhbWlseV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gMjg7XG4gICAgc2V0Rm9udFNpemUoZGVmYXVsdFZhbHVlKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVGb250U2l6ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rm9udFNpemUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvbnRGYW1pbHlDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZvbnROYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0Rm9udEZhbWlseShmb250TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udFdlaWdodENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rm9udFdlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udENvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0Rm9udENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5hYmxlZFNob3dNaWxsaXNlY29uZHMgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzKGUudGFyZ2V0LmNoZWNrZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nXCI+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNldHRpbmctbGVnZW5kXCI+Zm9udDwvbGVnZW5kPlxuICAgICAgICA8ZGwgY2xhc3NOYW1lPVwic2V0dGluZy1mb250XCI+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LWZhbWlseVwiIGRlZmF1bHRWYWx1ZT17Zm9udEZhbWlseU9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRGYW1pbHlPcHRpb25MaXN0fSBuYW1lPVwiZm9udC1mYW1pbHlcIiBvbkNoYW5nZT17aGFuZGxlRm9udEZhbWlseUNoYW5nZX0gLz5cbiAgICAgICAgICA8U2VsZWN0Q29udHJvbCB0aXRsZT1cImZvbnQtc2l6ZVwiIGRlZmF1bHRWYWx1ZT17Zm9udFNpemVPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250U2l6ZU9wdGlvbkxpc3R9IG5hbWU9XCJmb250LXNpemVcIiBvbkNoYW5nZT17aGFuZGxlRm9udFNpemVDaGFuZ2V9IC8+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LXdlaWdodFwiIGRlZmF1bHRWYWx1ZT17Zm9udFdlaWdodE9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRXZWlnaHRPcHRpb25MaXN0fSBuYW1lPVwiZm9udC13ZWlnaHRcIiBvbkNoYW5nZT17aGFuZGxlRm9udFdlaWdodENoYW5nZX0gLz5cbiAgICAgICAgPC9kbD5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cImNvbmZpZ1wiPkNvbG9yPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmZvbnQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtmb250Q29sb3J9IG9uQ2hhbmdlPXtoYW5kbGVGb250Q29sb3JDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmJhY2tncm91bmQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IG9uQ2hhbmdlPXtoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJjb25maWdcIj5maWVsZDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwibWlsbGlzZWNvbmRzXCIgY2hlY2tlZD17ZW5hYmxlZFNob3dNaWxsaXNlY29uZHN9IG9uQ2hhbmdlPXtoYW5kbGVFbmFibGVkU2hvd01pbGxpc2Vjb25kc30gLz5cbiAgICAgICAgICAgIDxzcGFuPnNob3cgbWlsbGlzZWNvbmRzPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlblNldHRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdENvbnRyb2w6IFJlYWN0LkZDPFNlbGVjdENvbnRyb2xQcm9wcz4gPSAoeyB0aXRsZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtsb2NhbFRpdGxlLCBzZXRMb2NhbFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcblxuICBjb25zdCBjcmVhdGVPcHRpb25UYWcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkdCBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnRfdGl0bGVcIj57dGl0bGV9PC9kdD5cbiAgICAgICAgPGRkIGNsYXNzTmFtZT1cInNldHRpbmctZm9udF9kZXRhaWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZm9udC1mYW1pbHlcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWUudmFsdWV9IG5hbWU9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBvcHRpb25zLm1hcCgoeyB2YWx1ZSwgdmFsdWVOYW1lIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWVOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kZD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIDw+e29wdGlvbnMubGVuZ3RoID4gMCA/IGNyZWF0ZU9wdGlvblRhZygpIDogbnVsbH08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDb250cm9sO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVzdFByb3BzIGZyb20gJ34vY29udGFpbmVyL3Rlc3QvaW5kZXgudHN4Jztcbi8vaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy90ZXN0L2FjdGlvbi50cyc7XG5cbmNvbnN0IFRlc3Q6IFJlYWN0LkZDPElUZXN0U3RhdGUgJiBJVGVzdEhhbmRsZXI+ID0gKHsgdGV4dCwgc2V0VGV4dCwgYXBpUmVzdWx0LCBhc3luY0dldERhdGEgfSkgPT4ge1xuICBjb25zdCBbbG9jYWxUZXh0LCBzZXRMb2NhbFRleHRdID0gdXNlU3RhdGUodGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDpnZ7lkIzmnJ/norroqo3nlKhcbiAgICAvL2FzeW5jR2V0RGF0YSgnL3JlYWN0LXN0YXRlLycpO1xuICAgIGFzeW5jR2V0RGF0YSgpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUZXh0KGxvY2FsVGV4dCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbbG9jYWxUZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xvY2FsVGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2NhbFRleHQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPHA+e3RleHR9PC9wPlxuICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgLz5cbiAgICAgIDxwPuOCteODvOODkOOCv+OCpOODoO+8mnthcGlSZXN1bHR9PC9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCBTY3JlZW4gZnJvbSAnfi9jb21wb25lbnRzL3NjcmVlbi50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLnNjcmVlblNldHRpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTY3JlZW4pO1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IHsgc2V0Rm9udFNpemUsIHNldEZvbnRXZWlnaHQsIHNldEZvbnRGYW1pbHksIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9IGZyb20gJ34vZmVhdHVyZXMvc2NyZWVuU2V0dGluZy9zY3JlZW5TZXR0aW5nUmVkdWNlci50cyc7XG5cbmltcG9ydCBTY3JlZW5TZXR0aW5nIGZyb20gJ34vY29tcG9uZW50cy9zY3JlZW5TZXR0aW5nLnRzeCc7XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uYXBwU3RhdGUuc2NyZWVuU2V0dGluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRGb250U2l6ZTogKG51bTogc3RyaW5nIHwgbnVtYmVyKSA9PiBkaXNwYXRjaChzZXRGb250U2l6ZShudW0pKSxcbiAgICBzZXRGb250RmFtaWx5OiAobnVtOiBzdHJpbmcpID0+IGRpc3BhdGNoKHNldEZvbnRGYW1pbHkobnVtKSksXG4gICAgc2V0Rm9udFdlaWdodDogKG51bTogc3RyaW5nIHwgbnVtYmVyKSA9PiBkaXNwYXRjaChzZXRGb250V2VpZ2h0KG51bSkpLFxuICAgIHNldEZvbnRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IGRpc3BhdGNoKHNldEZvbnRDb2xvcihjb2xvcikpLFxuICAgIHNldEJhY2tncm91bmRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IGRpc3BhdGNoKHNldEJhY2tncm91bmRDb2xvcihjb2xvcikpLFxuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiAoaXNFbmFibGVkOiBib29sZWFuKSA9PiBkaXNwYXRjaChzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyhpc0VuYWJsZWQpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNjcmVlblNldHRpbmcpO1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyLnRzJztcblxuaW1wb3J0IFRlc3QgZnJvbSAnfi9jb21wb25lbnRzL3Rlc3QudHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS50ZXN0LFxuICB9O1xufTtcblxuLy8gVGh1bmtEaXNwYXRjaOOBruW8leaVsOOBruWei+S9leaMh+WumuOBmeOCjOOBsOOCiOOBhOOBi+OCiOOBj+OCj+OBi+OCieOBquOBi+OBo+OBn+OAgWV4dHJhQXJndW1lbnTjga7lnovjgavjgarjgozjgbDjgYTjgYTjgajjgYrjgoLjgYbjgpPjgaDjgZHjgalcbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRUZXh0OiAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRUZXh0KHRleHQpKTtcbiAgICB9LFxuICAgIGFzeW5jR2V0RGF0YTogKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChhc3luY0dldERhdGEoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3QpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVNjcmVlblN0YXRlID0ge307XG5cbmNvbnN0IHNjcmVlblN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnc2NyZWVuJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2NyZWVuU3RhdGUucmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElTY3JlZW5TZXR0aW5nU3RhdGUgPSB7XG4gIGZvbnRTaXplOiAyOCxcbiAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRDb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAxIH0sXG4gIGJhY2tncm91bmRDb2xvcjogeyByOiAyNTUsIGc6IDI1NSwgYjogMjU1LCBhOiAxIH0sXG4gIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiB0cnVlLFxufTtcblxuLy9leHBvcnQgY29uc3Qgc2V0Rm9udFNpemUgPSBhY3Rpb25DcmVhdG9yPHN0cmluZyB8IG51bWJlcj4oJ1NFVF9GT05UU0laRScpO1xuLy9leHBvcnQgY29uc3Qgc2V0Rm9udEZhbWlseSA9IGFjdGlvbkNyZWF0b3I8c3RyaW5nPignU0VUX0ZPTlRGQU1JTFknKTtcbi8vZXhwb3J0IGNvbnN0IHNldEZvbnRXZWlnaHQgPSBhY3Rpb25DcmVhdG9yPHN0cmluZyB8IG51bWJlcj4oJ1NFVF9GT05UV0VJR0hUJyk7XG4vL2V4cG9ydCBjb25zdCBzZXRGb250Q29sb3IgPSBhY3Rpb25DcmVhdG9yPElDb2xvcj4oJ1NFVF9GT05UQ09MT1InKTtcbi8vZXhwb3J0IGNvbnN0IHNldEJhY2tncm91bmRDb2xvciA9IGFjdGlvbkNyZWF0b3I8SUNvbG9yPignU0VUX0JBQ0tHUk9VTkRDT0xPUicpO1xuLy9leHBvcnQgY29uc3Qgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgPSBhY3Rpb25DcmVhdG9yPGJvb2xlYW4+KCdTRVRfRU5BQkxFRFNIT1dNSUxMSVNFQ09ORFMnKTtcblxuY29uc3QgdGVzdFN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnc2NyZWVuU2V0dGluZycsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRGb250U2l6ZTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc3QgZm9udFNpemUgPSB0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChwYXlsb2FkLCAxMCkgOiBwYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRTaXplIH07XG4gICAgfSxcbiAgICBzZXRGb250RmFtaWx5OiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udEZhbWlseTogcGF5bG9hZCB9O1xuICAgIH0sXG4gICAgc2V0Rm9udFdlaWdodDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc3QgZm9udFdlaWdodCA9IHR5cGVvZiBwYXlsb2FkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHBheWxvYWQsIDEwKSA6IHBheWxvYWQ7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udFdlaWdodCB9O1xuICAgIH0sXG4gICAgc2V0Rm9udENvbG9yOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udENvbG9yOiBwYXlsb2FkIH07XG4gICAgfSxcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3I6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBiYWNrZ3JvdW5kQ29sb3I6IHBheWxvYWQgfTtcbiAgICB9LFxuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IHBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldEZvbnRTaXplLCBzZXRGb250RmFtaWx5LCBzZXRGb250V2VpZ2h0LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSA9IHRlc3RTdGF0ZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXN0U3RhdGUucmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElUZXN0U3RhdGUgPSB7XG4gIHRleHQ6ICdmaXJzdCBpbXByZXNzaW9uJyxcbiAgYXBpRW5kcG9pbnQ6ICcnLFxuICBhcGlSZXN1bHQ6ICcnLFxufTtcblxudHlwZSBoZWFkU2VydmVyVGltZVJldHVyblR5cGUgPSB7XG4gIGRhdGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBhc3luY0dldERhdGEgPSBjcmVhdGVBc3luY1RodW5rPGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZT4oXG4gICdzZXJ2ZXJ0aW1lL2hlYWQnLFxuICBhc3luYyAoKTogUHJvbWlzZTxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+ID0+IHtcbiAgICBjb25zdCBhc3luY1Jlc3AgPSBhd2FpdCBheGlvcy5oZWFkKCcuLycpO1xuXG4gICAgLy8g6YGF5bu244Gu5YuV5L2c44KS56K66KqN44GZ44KL44Gf44KB44Gr54Sh55CG44KE44KK6YGF5bu2XG4gICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBhc3luY1Jlc3AuaGVhZGVycy5kYXRlLFxuICAgIH07XG4gIH1cbik7XG5cbmNvbnN0IHRlc3RTdGF0ZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Rlc3QnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0VGV4dChzdGF0ZTogSVRlc3RTdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0ZXh0OiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG5cbiAgLy8gcmVkdXgtdGh1bmtcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAvLy8vIHt7eyB0eXBlc2NyaXBvdOOBoOOBqOWei+OBjOOBhuOBvuOBj+ihjOOBi+OBmuOAgeOBk+OBruabuOOBjeaWueOBr+OBp+OBjeOBquOBhOOBveOBhFxuICAgIC8vICBbYCR7YXN5bmNHZXREYXRhLmZ1bGZpbGxlZH1gXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAvLyAgICByZXR1cm4ge1xuICAgIC8vICAgICAgLi4uc3RhdGUsXG4gICAgLy8gICAgfTtcbiAgICAvLyAgfSxcbiAgICAvLy8vIH19fVxuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uLnR5cGUpO1xuICAgICAgLy8gLT4gc2VydmVydGltZS9oZWFkL3BlbmRpbmdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoYXN5bmNHZXREYXRhLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uLnR5cGUpO1xuICAgICAgLy8gLT4gc2VydmVydGltZS9oZWFkL2Z1bGZpbGxlZFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFwaVJlc3VsdDogYWN0aW9uLnBheWxvYWQuZGF0ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFzeW5jR2V0RGF0YS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uLnR5cGUpO1xuICAgICAgLy8gLT4gc2VydmVydGltZS9oZWFkL3JlamVjdGVkXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0VGV4dCB9ID0gdGVzdFN0YXRlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3RTdGF0ZS5yZWR1Y2VyO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJRm9udFNldCB7XG4gIGZvbnROYW1lOiBzdHJpbmc7XG4gIGZvbnRzaXplbGlzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVDogSUZvbnRTZXRbXSA9IFtcbiAge1xuICAgIGZvbnROYW1lOiAnc2Fucy1zZXJpZicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdzZXJpZicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdtb25vc3BhY2UnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBXRUJGT05UX0ZBTUlMSUVTX0xJU1Q6IElGb250U2V0W10gPSBbXG4gIC8vIGZvbnRcbiAge1xuICAgIGZvbnROYW1lOiAnT3JiaXRyb24nLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnV2FsbHBvZXQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdSb2JvdG8nLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMyw3LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdPc3dhbGQnLFxuICAgIGZvbnRzaXplbGlzdDogJzIsMyw0LDYsNyw1JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFsc2FtaXEgU2FucycsXG4gICAgZm9udHNpemVsaXN0OiAnNCw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQW50b24nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYXJsb3cgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1BhdHJpY2sgSGFuZCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhY3JhbWVudG8nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQb2lyZXQgT25lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUHJlc3MgU3RhcnQgMlAnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQ2hha3JhIFBldGNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICczLDQsNSw2LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYWxvbyBDaGV0dGFuIDInLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0NvZGEnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsOCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIFNlbWkgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIEV4dHJhIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdBbGRyaWNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU3RhcmRvcyBTdGVuY2lsJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdNZWdyaW0nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdJY2VsYW5kJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FycGFuY2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2hvanVtYXJ1JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTG9uZHJpbmEgT3V0bGluZScsXG4gICAgZm9udHNpemVsaXN0OiAnNDAwJyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnR2VvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTGlicmUgQmFyY29kZSAzOSBFeHRlbmRlZCBUZXh0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnVHVscGVuIE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRk9OVF9GQU1JTElFU19MSVNUID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChERUZBVUxURk9OVF9GQU1JTElFU19MSVNULCBXRUJGT05UX0ZBTUlMSUVTX0xJU1QpO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFUyA9IFdFQkZPTlRfRkFNSUxJRVNfTElTVC5tYXAoKHsgZm9udE5hbWUsIGZvbnRzaXplbGlzdCB9OiBJRm9udFNldCkgPT4ge1xuICBjb25zdCByZXBsYWNlZEZvbnRTaXplTGlzdCA9IGZvbnRzaXplbGlzdC5yZXBsYWNlKC8oXFxkKS9nLCAnJDEwMCcpO1xuICByZXR1cm4gYCR7Zm9udE5hbWV9OiR7cmVwbGFjZWRGb250U2l6ZUxpc3R9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgRk9OVF9OQU1FX0xJU1QgPSBGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lIH06IElGb250U2V0KSA9PiB7XG4gIHJldHVybiBgJHtmb250TmFtZX1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRFbmFibGVkRm9udFNpemUgPSAoZm9udE5hbWU6IHN0cmluZyk6IG51bWJlcltdIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gRk9OVF9GQU1JTElFU19MSVNULmZpbHRlcigoZm9udHNldCkgPT4ge1xuICAgIHJldHVybiBmb250c2V0LmZvbnROYW1lID09PSBmb250TmFtZTtcbiAgfSk7XG5cbiAgaWYgKCFmaWx0ZXJlZExpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkTGlzdFswXS5mb250c2l6ZWxpc3RcbiAgICAucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKVxuICAgIC5zcGxpdCgnLCcpXG4gICAgLm1hcCgodmFsKSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xuaW1wb3J0IHsgV0VCRk9OVF9GQU1JTElFUyB9IGZyb20gJ34vZm9udC50cyc7XG5cbi8vaW1wb3J0IFwifi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJ34vQXBwLnRzeCc7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbldlYkZvbnQubG9hZCh7XG4gIGdvb2dsZToge1xuICAgIGZhbWlsaWVzOiBXRUJGT05UX0ZBTUlMSUVTLFxuICB9LFxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJ34vcm9vdFJlZHVjZXInO1xuXG5pbXBvcnQgdGVzdFJlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyJztcbmltcG9ydCBzY3JlZW5SZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXInO1xuaW1wb3J0IHNjcmVlblNldHRpbmdSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuU2V0dGluZy9zY3JlZW5TZXR0aW5nUmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHRlc3Q6IHRlc3RSZWR1Y2VyLFxuICAgIHNjcmVlbjogc2NyZWVuUmVkdWNlcixcbiAgICBzY3JlZW5TZXR0aW5nOiBzY3JlZW5TZXR0aW5nUmVkdWNlcixcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
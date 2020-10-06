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
/* harmony import */ var _Container_Screen_index_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Container/Screen/index.tsx */ "./src/Container/Screen/index.tsx");
/* harmony import */ var _Container_ScreenSetting_index_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/Container/ScreenSetting/index.tsx */ "./src/Container/ScreenSetting/index.tsx");
/* harmony import */ var _Container_Test_index_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/Container/Test/index.tsx */ "./src/Container/Test/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


// container




var App = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], { store: _store_ts__WEBPACK_IMPORTED_MODULE_1__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "App" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container_Screen_index_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container_ScreenSetting_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container_Test_index_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/Beans/ColorToRGBA.ts":
/*!**********************************!*\
  !*** ./src/Beans/ColorToRGBA.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var r = _a.r, g = _a.g, b = _a.b, a = _a.a;
    return "rgba( " + r + "," + g + "," + b + "," + a + ")";
});


/***/ }),

/***/ "./src/Beans/ZeroPadding.ts":
/*!**********************************!*\
  !*** ./src/Beans/ZeroPadding.ts ***!
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

/***/ "./src/Beans/index.ts":
/*!****************************!*\
  !*** ./src/Beans/index.ts ***!
  \****************************/
/*! exports provided: ZeroPadidng, ColorToRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Beans_ZeroPadding_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/Beans/ZeroPadding.ts */ "./src/Beans/ZeroPadding.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZeroPadidng", function() { return _Beans_ZeroPadding_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ColorToRGBA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorToRGBA */ "./src/Beans/ColorToRGBA.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorToRGBA", function() { return _ColorToRGBA__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./src/Components/Screen.tsx":
/*!***********************************!*\
  !*** ./src/Components/Screen.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! beautiful-react-hooks */ "./node_modules/beautiful-react-hooks/dist/esm/index.js");
/* harmony import */ var _Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Components/ScreenPanel.tsx */ "./src/Components/ScreenPanel.tsx");
/* harmony import */ var _Beans___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/Beans/ */ "./src/Beans/index.ts");
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
            fontWeight: fontWeight, color: Object(_Beans___WEBPACK_IMPORTED_MODULE_3__["ColorToRGBA"])(fontColor), backgroundColor: Object(_Beans___WEBPACK_IMPORTED_MODULE_3__["ColorToRGBA"])(backgroundColor) }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fontSize, fontFamily, fontWeight, fontColor, backgroundColor]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var hh = Object(_Beans___WEBPACK_IMPORTED_MODULE_3__["ZeroPadidng"])({ num: date.getHours(), minimamDisit: 2 });
        var mm = Object(_Beans___WEBPACK_IMPORTED_MODULE_3__["ZeroPadidng"])({ num: date.getMinutes(), minimamDisit: 2 });
        var ss = Object(_Beans___WEBPACK_IMPORTED_MODULE_3__["ZeroPadidng"])({ num: date.getSeconds(), minimamDisit: 2 });
        var sss = Object(_Beans___WEBPACK_IMPORTED_MODULE_3__["ZeroPadidng"])({ num: date.getMilliseconds(), minimamDisit: 3 });
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "hh1", num: hh1 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "hh2", num: hh2 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-colon" }, ":"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "mm1", num: mm1 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "mm2", num: mm2 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-colon" }, ":"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "ss1", num: ss1 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "ss2", num: ss2 })),
        enabledShowMilliseconds ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "sss1", num: sss1 })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "sss2", num: sss2 })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "screen-panel" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ScreenPanel_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "sss3", num: sss3 })))) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (Screen);


/***/ }),

/***/ "./src/Components/ScreenPanel.tsx":
/*!****************************************!*\
  !*** ./src/Components/ScreenPanel.tsx ***!
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

/***/ "./src/Components/ScreenSetting.tsx":
/*!******************************************!*\
  !*** ./src/Components/ScreenSetting.tsx ***!
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
/* harmony import */ var _Components_SelectControl_index_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/Components/SelectControl/index.tsx */ "./src/Components/SelectControl/index.tsx");




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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SelectControl_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "font-family", defaultValue: fontFamilyOptionList[0], options: fontFamilyOptionList, name: "font-family", onChange: handleFontFamilyChange }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SelectControl_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "font-size", defaultValue: fontSizeOptionList[0], options: fontSizeOptionList, name: "font-size", onChange: handleFontSizeChange }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SelectControl_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "font-weight", defaultValue: fontWeightOptionList[0], options: fontWeightOptionList, name: "font-weight", onChange: handleFontWeightChange }))),
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

/***/ "./src/Components/SelectControl/index.tsx":
/*!************************************************!*\
  !*** ./src/Components/SelectControl/index.tsx ***!
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

/***/ "./src/Components/Test.tsx":
/*!*********************************!*\
  !*** ./src/Components/Test.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Test = function (_a) {
    var text = _a.text, setText = _a.setText, apiResult = _a.apiResult, asyncGetData = _a.asyncGetData;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(text), localText = _b[0], setLocalText = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        // 非同期確認用
        asyncGetData('/react-state/');
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

/***/ "./src/Container/Screen/index.tsx":
/*!****************************************!*\
  !*** ./src/Container/Screen/index.tsx ***!
  \****************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Components_Screen_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/Components/Screen.tsx */ "./src/Components/Screen.tsx");
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
    return __assign({}, appState.ScreenSettingReducer);
};
var mapDispatchToProps = function (dispatch) {
    return {};
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Components_Screen_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/Container/ScreenSetting/index.tsx":
/*!***********************************************!*\
  !*** ./src/Container/ScreenSetting/index.tsx ***!
  \***********************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/State/ScreenSetting/action.ts */ "./src/State/ScreenSetting/action.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Components_ScreenSetting_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Components/ScreenSetting.tsx */ "./src/Components/ScreenSetting.tsx");
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
    return __assign({}, appState.ScreenSettingReducer);
};
//export const mapDispatchToProps = (dispatch: ThunkDispatch<IAsyncGetDataParams, IAsyncDataGetResult, any>) => {
var mapDispatchToProps = function (dispatch) {
    return {
        setFontSize: function (num) { return dispatch(Object(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_0__["setFontSize"])(num)); },
        setFontFamily: function (num) { return dispatch(Object(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_0__["setFontFamily"])(num)); },
        setFontWeight: function (num) { return dispatch(Object(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_0__["setFontWeight"])(num)); },
        setFontColor: function (color) { return dispatch(Object(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_0__["setFontColor"])(color)); },
        setBackgroundColor: function (color) { return dispatch(Object(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_0__["setBackgroundColor"])(color)); },
        setEnabledShowMilliseconds: function (isEnabled) { return dispatch(Object(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_0__["setEnabledShowMilliseconds"])(isEnabled)); },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Components_ScreenSetting_tsx__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./src/Container/Test/index.tsx":
/*!**************************************!*\
  !*** ./src/Container/Test/index.tsx ***!
  \**************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/State/Test/action.ts */ "./src/State/Test/action.ts");
/* harmony import */ var _Components_Test_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Components/Test.tsx */ "./src/Components/Test.tsx");
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
    return __assign({}, appState.TestReducer);
};
// ThunkDispatchの引数の型何指定すればよいかよくわからなかった、extraArgumentの型になればいいとおもうんだけど
var mapDispatchToProps = function (dispatch) {
    return {
        setText: function (text) { return dispatch(Object(_State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__["setText"])(text)); },
        asyncGetData: function (url) {
            dispatch(Object(_State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__["asyncGetData"])({ url: url }));
        },
    };
    //return {
    //  increment: () => dispatch(increment()),
    //  decrement: () => dispatch(decrement()),
    //  reset: () => dispatch(reset()),
    //}
    ////import { bindActionCreators } from 'redux' ;
    //// このbindActionCreators を使うとdispatchをちんたら書く必要がなくなるらしい（ためしてない）
    //return bindActionCreators({ setText }, dispatch);
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Components_Test_tsx__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./src/State/Screen/reducer.ts":
/*!*************************************!*\
  !*** ./src/State/Screen/reducer.ts ***!
  \*************************************/
/*! exports provided: initialState, ScreenReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenReducer", function() { return ScreenReducer; });
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa-reducers */ "./node_modules/typescript-fsa-reducers/dist/index.js");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__);
// reducerWithInitialState はswitchの冗長な書き方をチェーンで完結にかける
// https://qiita.com/m0a/items/703d64c74e43cb392a64

// import { init } from '~/State/Screen/action.ts';
//ここにstateの初期値を書く
var initialState = {};
var ScreenReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__["reducerWithInitialState"])(initialState);
//.case(
//  init,
//  (state, payload): IScreenState => {
//    return initialState;
//  }
//);


/***/ }),

/***/ "./src/State/ScreenSetting/action.ts":
/*!*******************************************!*\
  !*** ./src/State/ScreenSetting/action.ts ***!
  \*******************************************/
/*! exports provided: init, setFontSize, setFontFamily, setFontWeight, setFontColor, setBackgroundColor, setEnabledShowMilliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontSize", function() { return setFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontFamily", function() { return setFontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontWeight", function() { return setFontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFontColor", function() { return setFontColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnabledShowMilliseconds", function() { return setEnabledShowMilliseconds; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "./node_modules/typescript-fsa/lib/index.js");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);

var actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()('ScreenSetting');
var init = actionCreator('INIT');
var setFontSize = actionCreator('SET_FONTSIZE');
var setFontFamily = actionCreator('SET_FONTFAMILY');
var setFontWeight = actionCreator('SET_FONTWEIGHT');
var setFontColor = actionCreator('SET_FONTCOLOR');
var setBackgroundColor = actionCreator('SET_BACKGROUNDCOLOR');
var setEnabledShowMilliseconds = actionCreator('SET_ENABLEDSHOWMILLISECONDS');


/***/ }),

/***/ "./src/State/ScreenSetting/reducer.ts":
/*!********************************************!*\
  !*** ./src/State/ScreenSetting/reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, ScreenSettingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSettingReducer", function() { return ScreenSettingReducer; });
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa-reducers */ "./node_modules/typescript-fsa-reducers/dist/index.js");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/State/ScreenSetting/action.ts */ "./src/State/ScreenSetting/action.ts");
// reducerWithInitialState はswitchの冗長な書き方をチェーンで完結にかける
// https://qiita.com/m0a/items/703d64c74e43cb392a64
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


//ここにstateの初期値を書く
var initialState = {
    fontSize: 28,
    fontFamily: 'sans-serif',
    fontWeight: 400,
    fontColor: { r: 0, g: 0, b: 0, a: 1 },
    backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
    enabledShowMilliseconds: true,
};
var ScreenSettingReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__["reducerWithInitialState"])(initialState)
    .case(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_1__["init"], function (state, payload) {
    return initialState;
})
    .case(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_1__["setFontSize"], function (state, payload) {
    var fontSize = typeof payload === 'string' ? parseInt(payload, 10) : payload;
    return __assign(__assign({}, state), { fontSize: fontSize });
})
    .case(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_1__["setFontFamily"], function (state, payload) {
    return __assign(__assign({}, state), { fontFamily: payload });
})
    .case(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_1__["setFontWeight"], function (state, payload) {
    var fontWeight = typeof payload === 'string' ? parseInt(payload, 10) : payload;
    return __assign(__assign({}, state), { fontWeight: fontWeight });
})
    .case(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_1__["setFontColor"], function (state, payload) {
    return __assign(__assign({}, state), { fontColor: payload });
})
    .case(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_1__["setBackgroundColor"], function (state, payload) {
    return __assign(__assign({}, state), { backgroundColor: payload });
})
    .case(_State_ScreenSetting_action_ts__WEBPACK_IMPORTED_MODULE_1__["setEnabledShowMilliseconds"], function (state, payload) {
    return __assign(__assign({}, state), { enabledShowMilliseconds: payload });
});


/***/ }),

/***/ "./src/State/Test/action.ts":
/*!**********************************!*\
  !*** ./src/State/Test/action.ts ***!
  \**********************************/
/*! exports provided: init, setText, asyncGetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncGetData", function() { return asyncGetData; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "./node_modules/typescript-fsa/lib/index.js");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typescript_fsa_redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-fsa-redux-thunk */ "./node_modules/typescript-fsa-redux-thunk/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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
// TODO: 基本できてからためそう
// https://qiita.com/m0a/items/703d64c74e43cb392a64



var actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()();
var init = actionCreator('INIT');
var setText = actionCreator('SET_TEXT');
//// 普通の書き方
//export type Action =
//  | {
//      type: 'INIT';
//      payload: undefined;
//    }
//  | {
//      type: 'SET_TEXT';
//      payload: string;
//    };
var createAsync = Object(typescript_fsa_redux_thunk__WEBPACK_IMPORTED_MODULE_1__["asyncFactory"])(actionCreator);
function getServerDate(url) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.head(url);
}
var asyncGetData = createAsync(
//hoge
'ASYNC_GETDATA', function (_a, dispatch) {
    var url = _a.url;
    return __awaiter(void 0, void 0, void 0, function () {
        var asyncResp;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getServerDate(url)];
                case 1:
                    asyncResp = _b.sent();
                    // 遅延の動作を確認するために無理やり遅延
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve();
                            }, 5000);
                        })];
                case 2:
                    // 遅延の動作を確認するために無理やり遅延
                    _b.sent();
                    return [2 /*return*/, {
                            date: asyncResp.headers.date,
                        }];
            }
        });
    });
});
//// NOTE: 非同期のactionCreator
// 1つめがAPIの引数とかで使うやつ
// param: { url: string },
// done : { date: string }
// fail : { error: string }
// type params = { url: string };
// type result = { date: string };
// type error = { text: string };
// export const asyncGetData = actionCreator.async<params, result, error>('SOMETHING_ASYNC');


/***/ }),

/***/ "./src/State/Test/reducer.ts":
/*!***********************************!*\
  !*** ./src/State/Test/reducer.ts ***!
  \***********************************/
/*! exports provided: initialState, TestReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestReducer", function() { return TestReducer; });
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa-reducers */ "./node_modules/typescript-fsa-reducers/dist/index.js");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/State/Test/action.ts */ "./src/State/Test/action.ts");
// reducerWithInitialState はswitchの冗長な書き方をチェーンで完結にかける
// https://qiita.com/m0a/items/703d64c74e43cb392a64
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


//ここにstateの初期値を書く
var initialState = {
    text: 'first impression',
    apiEndpoint: '',
    apiResult: '',
};
var TestReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__["reducerWithInitialState"])(initialState)
    .case(_State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__["init"], function (state, payload) {
    return initialState;
})
    .case(_State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__["setText"], function (state, payload) {
    return __assign(__assign({}, state), { text: payload });
})
    // 非同期のアクション
    .case(_State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__["asyncGetData"].async.started, function (state, _a) {
    var url = _a.url;
    console.log('started');
    return __assign(__assign({}, state), { apiEndpoint: url });
})
    .case(_State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__["asyncGetData"].async.done, function (state, _a) {
    var params = _a.params, result = _a.result;
    console.log('done');
    return __assign(__assign({}, state), { apiResult: result.date });
})
    .case(_State_Test_action_ts__WEBPACK_IMPORTED_MODULE_1__["asyncGetData"].async.failed, function (state, result) {
    console.log('failed');
    return __assign(__assign({}, state), { apiResult: result.error.message });
});


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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _State_Screen_reducer_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/State/Screen/reducer.ts */ "./src/State/Screen/reducer.ts");
/* harmony import */ var _State_ScreenSetting_reducer_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/State/ScreenSetting/reducer.ts */ "./src/State/ScreenSetting/reducer.ts");
/* harmony import */ var _State_Test_reducer_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/State/Test/reducer.ts */ "./src/State/Test/reducer.ts");





var storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
//const middlewares = [];
var thunk = redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(
// これで複数のステートを扱う的な感じに
Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    ScreenReducer: _State_Screen_reducer_ts__WEBPACK_IMPORTED_MODULE_2__["ScreenReducer"],
    ScreenSettingReducer: _State_ScreenSetting_reducer_ts__WEBPACK_IMPORTED_MODULE_3__["ScreenSettingReducer"],
    TestReducer: _State_Test_reducer_ts__WEBPACK_IMPORTED_MODULE_4__["TestReducer"],
}), storeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(thunk))
//applyMiddleware(thunk)
);
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0JlYW5zL0NvbG9yVG9SR0JBLnRzIiwid2VicGFjazovLy8uL3NyYy9CZWFucy9aZXJvUGFkZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQmVhbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TY3JlZW5QYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2NyZWVuU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2VsZWN0Q29udHJvbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lci9TY3JlZW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXIvU2NyZWVuU2V0dGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lci9UZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhdGUvU2NyZWVuL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlL1NjcmVlblNldHRpbmcvYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS9TY3JlZW5TZXR0aW5nL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlL1Rlc3QvYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS9UZXN0L3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtR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TyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRUwsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNPO0FBRUc7QUFDUztBQUU3Qyx3QkFBd0I7QUFDSTtBQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUU1QyxvREFBTyxDQUFDLElBQUksQ0FBQztJQUNYLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSx5REFBZ0I7S0FDM0I7Q0FDRixDQUFDLENBQUM7QUFFSCxnREFBUSxDQUFDLE1BQU0sQ0FBQywyREFBQyxnREFBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakJ6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDM0I7QUFFTDtBQUNjO0FBQ2xCO0FBT3RELElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxvQ0FBb0MsSUFBSSw2Q0FBTyxDQUFDO0FBRTlFLHlCQUF5QjtBQUN6QixJQUFNLEtBQUssR0FBeUMsbURBQWUsQ0FBQztBQUVwRSxJQUFNLEtBQUssR0FBRyx5REFBVztBQUN2QixxQkFBcUI7QUFDckIsNkRBQWUsQ0FBVztJQUN4QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7Q0FDWixDQUFDLEVBQ0YsY0FBYyxDQUFDLDZEQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsd0JBQXdCO0NBQ3pCLENBQUM7QUFFYSxvRUFBSyxFQUFDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImpzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJjbG9ja1wiXSA9IHdpbmRvd1tcImNsb2NrXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwianMvdmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ34vc3RvcmUudHMnO1xuXG4vLyBjb250YWluZXJcbmltcG9ydCBTY3JlZW4gZnJvbSAnfi9Db250YWluZXIvU2NyZWVuL2luZGV4LnRzeCc7XG5pbXBvcnQgU2NyZWVuU2V0dGluZyBmcm9tICd+L0NvbnRhaW5lci9TY3JlZW5TZXR0aW5nL2luZGV4LnRzeCc7XG5pbXBvcnQgVGVzdCBmcm9tICd+L0NvbnRhaW5lci9UZXN0L2luZGV4LnRzeCc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPFNjcmVlbiAvPlxuICAgICAgICA8U2NyZWVuU2V0dGluZyAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8VGVzdD48L1Rlc3Q+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgciwgZywgYiwgYSB9OiBJQ29sb3IpID0+IHtcbiAgcmV0dXJuIGByZ2JhKCAke3J9LCR7Z30sJHtifSwke2F9KWA7XG59O1xuIiwiLyoqXG4gKiAw6Kmw44KB44OV44Kp44O844Oe44OD44OIXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG51bSAgbnVtYmVyIG9yIHN0cmluZ1xuICogQHBhcmFtICB7TnVtYmVyfSBuICBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICogQHJldHVybiB7U3RyaW5nfSAoSW4gYW4gZXJyb3IsICdmYWxzZScgaXMgcmV0dXJuZWQuIClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElaZXJvUGFkZGluZyB7XG4gIG51bTogc3RyaW5nIHwgbnVtYmVyO1xuICBtaW5pbWFtRGlzaXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgbnVtLCBtaW5pbWFtRGlzaXQgfTogSVplcm9QYWRkaW5nKSA9PiB7XG4gIGxldCByZXN1bHQ7XG4gIHN3aXRjaCAodHlwZW9mIG51bSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXN1bHQgPSBudW07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmVzdWx0ID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgbWluaW1hbURpc2l0KSB7XG4gICAgcmVzdWx0ID0gJzAnICsgcmVzdWx0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFplcm9QYWRpZG5nIGZyb20gJ34vQmVhbnMvWmVyb1BhZGRpbmcudHMnO1xuaW1wb3J0IENvbG9yVG9SR0JBIGZyb20gJy4vQ29sb3JUb1JHQkEnO1xuXG5leHBvcnQgeyBaZXJvUGFkaWRuZywgQ29sb3JUb1JHQkEgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lIH0gZnJvbSAnYmVhdXRpZnVsLXJlYWN0LWhvb2tzJztcbmltcG9ydCBTY3JlZW5QYW5lbCBmcm9tICd+L0NvbXBvbmVudHMvU2NyZWVuUGFuZWwudHN4JztcblxuaW1wb3J0IHsgWmVyb1BhZGlkbmcsIENvbG9yVG9SR0JBIH0gZnJvbSAnfi9CZWFucy8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIHNjcmVlblByb3BzIHt9XG5cbmNvbnN0IFNjcmVlbjogUmVhY3QuRkM8c2NyZWVuUHJvcHMgJiBJU2NyZWVuU2V0dGluZ1N0YXRlPiA9ICh7IGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvciwgZW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSkgPT4ge1xuICBjb25zdCBbc3R5bGVPYmplY3QsIHNldFN0eWxlT2JqZWN0XSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBbaGgxLCBzZXRIaDFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtoaDIsIHNldEhoMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21tMSwgc2V0TW0xXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbW0yLCBzZXRNbTJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzczEsIHNldFNzMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzMiwgc2V0U3MyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3NzMSwgc2V0U3NzMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzczIsIHNldFNzczJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzc3MzLCBzZXRTc3MzXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaW5jcmVtZW50OiAwLjUsXG4gICAgc3RhcnRBdDogMCxcbiAgICBmaW5pc2hBdDogLTEsXG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSB1c2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHByb2dyZXNzLCBuZXh0KSA9PiB7XG4gICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBuZXh0KCk7XG4gIH0sIG9wdGlvbnMpO1xuXG4gIG9uRmluaXNoKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmluaXNoJyk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3R5bGVPYmplY3Qoe1xuICAgICAgLi4uc3R5bGVPYmplY3QsXG4gICAgICBmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLFxuICAgICAgZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQsXG4gICAgICBjb2xvcjogQ29sb3JUb1JHQkEoZm9udENvbG9yKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JUb1JHQkEoYmFja2dyb3VuZENvbG9yKSxcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2ZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGggPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRIb3VycygpLCBtaW5pbWFtRGlzaXQ6IDIgfSk7XG4gICAgY29uc3QgbW0gPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRNaW51dGVzKCksIG1pbmltYW1EaXNpdDogMiB9KTtcbiAgICBjb25zdCBzcyA9IFplcm9QYWRpZG5nKHsgbnVtOiBkYXRlLmdldFNlY29uZHMoKSwgbWluaW1hbURpc2l0OiAyIH0pO1xuICAgIGNvbnN0IHNzcyA9IFplcm9QYWRpZG5nKHsgbnVtOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpLCBtaW5pbWFtRGlzaXQ6IDMgfSk7XG5cbiAgICBzZXRIaDEoaGhbMF0pO1xuICAgIHNldEhoMihoaFsxXSk7XG4gICAgc2V0TW0xKG1tWzBdKTtcbiAgICBzZXRNbTIobW1bMV0pO1xuICAgIHNldFNzMShzc1swXSk7XG4gICAgc2V0U3MyKHNzWzFdKTtcbiAgICBzZXRTc3MxKHNzc1swXSk7XG4gICAgc2V0U3NzMihzc3NbMV0pO1xuICAgIHNldFNzczMoc3NzWzJdKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCIgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwiaGgxXCIgbnVtPXtoaDF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwiaGgyXCIgbnVtPXtoaDJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLWNvbG9uXCI+OjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJtbTFcIiBudW09e21tMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJtbTJcIiBudW09e21tMn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tY29sb25cIj46PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzMVwiIG51bT17c3MxfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzMlwiIG51bT17c3MyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZW5hYmxlZFNob3dNaWxsaXNlY29uZHMgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3NzMVwiIG51bT17c3NzMX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzc3MyXCIgbnVtPXtzc3MyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzczNcIiBudW09e3NzczN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY3JlZW5QYW5lbDogUmVhY3QuRkM8U2NyZWVuUGFuZWxQcm9wcz4gPSAoeyB0eXBlLCBudW0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2BzY3JlZW4tcGFuZWwtJHt0eXBlfWB9PntudW19PC9zcGFuPlxuICAgIDwvPlxuICApO1xufTtcblxuLy9leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNjcmVlblBhbmVsKTtcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2NyZWVuUGFuZWwpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTa2V0Y2hQaWNrZXIgfSBmcm9tICdyZWFjdC1jb2xvcic7XG5cbmltcG9ydCB7IHNldEZvbnRTaXplLCBzZXRGb250RmFtaWx5LCBzZXRGb250V2VpZ2h0LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSBmcm9tICd+L1N0YXRlL1NjcmVlblNldHRpbmcvYWN0aW9uLnRzJztcbmltcG9ydCB7IElTY3JlZW5TZXR0aW5nSGFuZGxlciB9IGZyb20gJ34vQ29udGFpbmVyL1NjcmVlblNldHRpbmcvaW5kZXgudHN4JztcbmltcG9ydCB7IEZPTlRfTkFNRV9MSVNULCBnZXRFbmFibGVkRm9udFNpemUgfSBmcm9tICd+L2ZvbnQudHMnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdiZWF1dGlmdWwtcmVhY3QtaG9va3MnO1xuXG5pbXBvcnQgUmFkaW9Db250cm9sIGZyb20gJ34vQ29tcG9uZW50cy9SYWRpb0NvbnRyb2wvaW5kZXgudHN4JztcbmltcG9ydCBTZWxlY3RDb250cm9sIGZyb20gJ34vQ29tcG9uZW50cy9TZWxlY3RDb250cm9sL2luZGV4LnRzeCc7XG5cbmNvbnN0IFNjcmVlblNldHRpbmc6IFJlYWN0LkZDPElTY3JlZW5TZXR0aW5nU3RhdGUgJiBJU2NyZWVuU2V0dGluZ0hhbmRsZXI+ID0gKHsgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRXZWlnaHQsIGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCBlbmFibGVkU2hvd01pbGxpc2Vjb25kcywgc2V0Rm9udFNpemUsIHNldEZvbnRGYW1pbHksIHNldEZvbnRXZWlnaHQsIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9KSA9PiB7XG4gIGNvbnN0IFttaW5Gb250U2l6ZSwgc2V0TWluRm9udFNpemVdID0gdXNlU3RhdGUoMjgpO1xuICBjb25zdCBbbWF4Rm9udFNpemUsIHNldE1heEZvbnRTaXplXSA9IHVzZVN0YXRlKDEwMCk7XG5cbiAgY29uc3QgW2ZvbnRGYW1pbHlPcHRpb25MaXN0LCBzZXRGb250RmFtaWx5T3B0aW9uc10gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuICBjb25zdCBbZm9udFNpemVPcHRpb25MaXN0LCBzZXRGb250U2l6ZU9wdGlvbkxpc3RdID0gdXNlU3RhdGUoW10gYXMgSU9wdGlvbltdKTtcbiAgY29uc3QgW2ZvbnRXZWlnaHRPcHRpb25MaXN0LCBzZXRGb250V2VpZ2h0T3B0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuXG4gIGNvbnN0IGZvbnRXZWlnaHRPcHRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQ6IElPcHRpb25bXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gbWluRm9udFNpemU7IGluZGV4IDwgbWF4Rm9udFNpemU7IGluZGV4KyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGluZGV4LnRvU3RyaW5nKCksXG4gICAgICAgIHZhbHVlTmFtZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9udEZhbWlseU9wdGlvbnMoXG4gICAgICBGT05UX05BTUVfTElTVC5tYXAoKGZvbnROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGZvbnROYW1lLFxuICAgICAgICAgIHZhbHVlTmFtZTogZm9udE5hbWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBzZXRGb250U2l6ZU9wdGlvbkxpc3QoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0OiBJT3B0aW9uW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gbWluRm9udFNpemU7IGluZGV4IDwgbWF4Rm9udFNpemU7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlTmFtZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9udEZhbWlseU9wdGlvbkxpc3QubGVuZ3RoKSB7XG4gICAgICBzZXRGb250RmFtaWx5KGZvbnRGYW1pbHlPcHRpb25MaXN0WzBdLnZhbHVlKTtcbiAgICB9XG4gIH0sIFtmb250RmFtaWx5T3B0aW9uTGlzdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZm9udEZhbWlseSk7XG5cbiAgICBzZXRGb250V2VpZ2h0T3B0aW9uTGlzdCgoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0RW5hYmxlZEZvbnRTaXplKGZvbnRGYW1pbHkpLm1hcCgoZm9udFdlaWdodCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBmb250V2VpZ2h0LnRvU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWVOYW1lOiBmb250V2VpZ2h0LnRvU3RyaW5nKCksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGVuYWJsZWRGb250V2VpZ2h0TGlzdCA9IGdldEVuYWJsZWRGb250U2l6ZShmb250RmFtaWx5KTtcbiAgICBpZiAoZW5hYmxlZEZvbnRXZWlnaHRMaXN0LmluZGV4T2YoZm9udFdlaWdodCkgPT09IC0xKSB7XG4gICAgICBzZXRGb250V2VpZ2h0KGVuYWJsZWRGb250V2VpZ2h0TGlzdFswXSk7XG4gICAgfVxuICB9LCBbZm9udEZhbWlseV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gMjg7XG4gICAgc2V0Rm9udFNpemUoZGVmYXVsdFZhbHVlKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVGb250U2l6ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rm9udFNpemUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvbnRGYW1pbHlDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZvbnROYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0Rm9udEZhbWlseShmb250TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udFdlaWdodENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rm9udFdlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udENvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0Rm9udENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5hYmxlZFNob3dNaWxsaXNlY29uZHMgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzKGUudGFyZ2V0LmNoZWNrZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nXCI+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNldHRpbmctbGVnZW5kXCI+Zm9udDwvbGVnZW5kPlxuICAgICAgICA8ZGwgY2xhc3NOYW1lPVwic2V0dGluZy1mb250XCI+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LWZhbWlseVwiIGRlZmF1bHRWYWx1ZT17Zm9udEZhbWlseU9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRGYW1pbHlPcHRpb25MaXN0fSBuYW1lPVwiZm9udC1mYW1pbHlcIiBvbkNoYW5nZT17aGFuZGxlRm9udEZhbWlseUNoYW5nZX0gLz5cbiAgICAgICAgICA8U2VsZWN0Q29udHJvbCB0aXRsZT1cImZvbnQtc2l6ZVwiIGRlZmF1bHRWYWx1ZT17Zm9udFNpemVPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250U2l6ZU9wdGlvbkxpc3R9IG5hbWU9XCJmb250LXNpemVcIiBvbkNoYW5nZT17aGFuZGxlRm9udFNpemVDaGFuZ2V9IC8+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LXdlaWdodFwiIGRlZmF1bHRWYWx1ZT17Zm9udFdlaWdodE9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRXZWlnaHRPcHRpb25MaXN0fSBuYW1lPVwiZm9udC13ZWlnaHRcIiBvbkNoYW5nZT17aGFuZGxlRm9udFdlaWdodENoYW5nZX0gLz5cbiAgICAgICAgPC9kbD5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cImNvbmZpZ1wiPkNvbG9yPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmZvbnQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtmb250Q29sb3J9IG9uQ2hhbmdlPXtoYW5kbGVGb250Q29sb3JDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmJhY2tncm91bmQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IG9uQ2hhbmdlPXtoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJjb25maWdcIj5maWVsZDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwibWlsbGlzZWNvbmRzXCIgY2hlY2tlZD17ZW5hYmxlZFNob3dNaWxsaXNlY29uZHN9IG9uQ2hhbmdlPXtoYW5kbGVFbmFibGVkU2hvd01pbGxpc2Vjb25kc30gLz5cbiAgICAgICAgICAgIDxzcGFuPnNob3cgbWlsbGlzZWNvbmRzPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlblNldHRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdENvbnRyb2w6IFJlYWN0LkZDPFNlbGVjdENvbnRyb2xQcm9wcz4gPSAoeyB0aXRsZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtsb2NhbFRpdGxlLCBzZXRMb2NhbFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcblxuICBjb25zdCBjcmVhdGVPcHRpb25UYWcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkdCBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnRfdGl0bGVcIj57dGl0bGV9PC9kdD5cbiAgICAgICAgPGRkIGNsYXNzTmFtZT1cInNldHRpbmctZm9udF9kZXRhaWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZm9udC1mYW1pbHlcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWUudmFsdWV9IG5hbWU9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBvcHRpb25zLm1hcCgoeyB2YWx1ZSwgdmFsdWVOYW1lIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWVOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kZD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIDw+e29wdGlvbnMubGVuZ3RoID4gMCA/IGNyZWF0ZU9wdGlvblRhZygpIDogbnVsbH08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDb250cm9sO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVzdFByb3BzIGZyb20gJ34vQ29udGFpbmVyL1Rlc3QvaW5kZXgudHN4JztcbmltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vU3RhdGUvVGVzdC9hY3Rpb24udHMnO1xuXG5jb25zdCBUZXN0OiBSZWFjdC5GQzxJVGVzdFN0YXRlICYgSVRlc3RIYW5kbGVyPiA9ICh7IHRleHQsIHNldFRleHQsIGFwaVJlc3VsdCwgYXN5bmNHZXREYXRhIH0pID0+IHtcbiAgY29uc3QgW2xvY2FsVGV4dCwgc2V0TG9jYWxUZXh0XSA9IHVzZVN0YXRlKHRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g6Z2e5ZCM5pyf56K66KqN55SoXG4gICAgYXN5bmNHZXREYXRhKCcvcmVhY3Qtc3RhdGUvJyk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRleHQobG9jYWxUZXh0KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtsb2NhbFRleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bG9jYWxUZXh0fSBvbkNoYW5nZT17KGUpID0+IHNldExvY2FsVGV4dChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8cD57dGV4dH08L3A+XG4gICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgPHA+44K144O844OQ44K/44Kk44Og77yae2FwaVJlc3VsdH08L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0O1xuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAndHlwZXNjcmlwdC1mc2EnO1xuXG4vL2ltcG9ydCB7fSBmcm9tICd+L1N0YXRlL1NjcmVlbi9hY3Rpb24udHMnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzLCBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJ34vQ29tcG9uZW50cy9TY3JlZW4udHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS5TY3JlZW5TZXR0aW5nUmVkdWNlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbjxhbnk+PikgPT4ge1xuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2NyZWVuKTtcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3R5cGVzY3JpcHQtZnNhJztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldEZvbnRTaXplLCBzZXRGb250V2VpZ2h0LCBzZXRGb250RmFtaWx5LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSBmcm9tICd+L1N0YXRlL1NjcmVlblNldHRpbmcvYWN0aW9uLnRzJztcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTY3JlZW5TZXR0aW5nIGZyb20gJ34vQ29tcG9uZW50cy9TY3JlZW5TZXR0aW5nLnRzeCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjcmVlblNldHRpbmdIYW5kbGVyIHtcbiAgc2V0Rm9udFNpemU6IChudW06IHN0cmluZyB8IG51bWJlcikgPT4gQWN0aW9uPHN0cmluZyB8IG51bWJlcj47XG4gIHNldEZvbnRGYW1pbHk6IChudW06IHN0cmluZykgPT4gQWN0aW9uPHN0cmluZz47XG4gIHNldEZvbnRXZWlnaHQ6IChudW06IHN0cmluZyB8IG51bWJlcikgPT4gQWN0aW9uPHN0cmluZyB8IG51bWJlcj47XG4gIHNldEZvbnRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IEFjdGlvbjxJQ29sb3I+O1xuICBzZXRCYWNrZ3JvdW5kQ29sb3I6IChjb2xvcjogSUNvbG9yKSA9PiBBY3Rpb248SUNvbG9yPjtcbiAgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IChpc0VuYWJsZWQ6IGJvb2xlYW4pID0+IEFjdGlvbjxib29sZWFuPjtcbn1cblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS5TY3JlZW5TZXR0aW5nUmVkdWNlcixcbiAgfTtcbn07XG5cbi8vZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb248YW55Pj4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRGb250U2l6ZTogKG51bTogc3RyaW5nIHwgbnVtYmVyKSA9PiBkaXNwYXRjaChzZXRGb250U2l6ZShudW0pKSxcbiAgICBzZXRGb250RmFtaWx5OiAobnVtOiBzdHJpbmcpID0+IGRpc3BhdGNoKHNldEZvbnRGYW1pbHkobnVtKSksXG4gICAgc2V0Rm9udFdlaWdodDogKG51bTogc3RyaW5nIHwgbnVtYmVyKSA9PiBkaXNwYXRjaChzZXRGb250V2VpZ2h0KG51bSkpLFxuICAgIHNldEZvbnRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IGRpc3BhdGNoKHNldEZvbnRDb2xvcihjb2xvcikpLFxuICAgIHNldEJhY2tncm91bmRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IGRpc3BhdGNoKHNldEJhY2tncm91bmRDb2xvcihjb2xvcikpLFxuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiAoaXNFbmFibGVkOiBib29sZWFuKSA9PiBkaXNwYXRjaChzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyhpc0VuYWJsZWQpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNjcmVlblNldHRpbmcpO1xuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAndHlwZXNjcmlwdC1mc2EnO1xuXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgeyBzZXRUZXh0LCBhc3luY0dldERhdGEgfSBmcm9tICd+L1N0YXRlL1Rlc3QvYWN0aW9uLnRzJztcblxuaW1wb3J0IFRlc3QgZnJvbSAnfi9Db21wb25lbnRzL1Rlc3QudHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS5UZXN0UmVkdWNlcixcbiAgfTtcbn07XG5cbi8vIFRodW5rRGlzcGF0Y2jjga7lvJXmlbDjga7lnovkvZXmjIflrprjgZnjgozjgbDjgojjgYTjgYvjgojjgY/jgo/jgYvjgonjgarjgYvjgaPjgZ/jgIFleHRyYUFyZ3VtZW5044Gu5Z6L44Gr44Gq44KM44Gw44GE44GE44Go44GK44KC44GG44KT44Gg44GR44GpXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0VGV4dDogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goc2V0VGV4dCh0ZXh0KSksXG4gICAgYXN5bmNHZXREYXRhOiAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIGRpc3BhdGNoKGFzeW5jR2V0RGF0YSh7IHVybCB9KSk7XG4gICAgfSxcbiAgfTtcbiAgLy9yZXR1cm4ge1xuICAvLyAgaW5jcmVtZW50OiAoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnQoKSksXG4gIC8vICBkZWNyZW1lbnQ6ICgpID0+IGRpc3BhdGNoKGRlY3JlbWVudCgpKSxcbiAgLy8gIHJlc2V0OiAoKSA9PiBkaXNwYXRjaChyZXNldCgpKSxcbiAgLy99XG4gIC8vLy9pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCcgO1xuICAvLy8vIOOBk+OBrmJpbmRBY3Rpb25DcmVhdG9ycyDjgpLkvb/jgYbjgahkaXNwYXRjaOOCkuOBoeOCk+OBn+OCieabuOOBj+W/heimgeOBjOOBquOBj+OBquOCi+OCieOBl+OBhO+8iOOBn+OCgeOBl+OBpuOBquOBhO+8iVxuICAvL3JldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzZXRUZXh0IH0sIGRpc3BhdGNoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3QpO1xuIiwiLy8gcmVkdWNlcldpdGhJbml0aWFsU3RhdGUg44Gvc3dpdGNo44Gu5YaX6ZW344Gq5pu444GN5pa544KS44OB44Kn44O844Oz44Gn5a6M57WQ44Gr44GL44GR44KLXG4vLyBodHRwczovL3FpaXRhLmNvbS9tMGEvaXRlbXMvNzAzZDY0Yzc0ZTQzY2IzOTJhNjRcblxuaW1wb3J0IHsgcmVkdWNlcldpdGhJbml0aWFsU3RhdGUgfSBmcm9tICd0eXBlc2NyaXB0LWZzYS1yZWR1Y2Vycyc7XG5cbi8vIGltcG9ydCB7IGluaXQgfSBmcm9tICd+L1N0YXRlL1NjcmVlbi9hY3Rpb24udHMnO1xuXG4vL+OBk+OBk+OBq3N0YXRl44Gu5Yid5pyf5YCk44KS5pu444GPXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBJU2NyZWVuU3RhdGUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFNjcmVlblJlZHVjZXIgPSByZWR1Y2VyV2l0aEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuLy8uY2FzZShcbi8vICBpbml0LFxuLy8gIChzdGF0ZSwgcGF5bG9hZCk6IElTY3JlZW5TdGF0ZSA9PiB7XG4vLyAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuLy8gIH1cbi8vKTtcbiIsImltcG9ydCBhY3Rpb25DcmVhdG9yRmFjdG9yeSBmcm9tICd0eXBlc2NyaXB0LWZzYSc7XG5pbXBvcnQgeyBhc3luY0ZhY3RvcnkgfSBmcm9tICd0eXBlc2NyaXB0LWZzYS1yZWR1eC10aHVuayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5cbmNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yRmFjdG9yeSgnU2NyZWVuU2V0dGluZycpO1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFjdGlvbkNyZWF0b3IoJ0lOSVQnKTtcbmV4cG9ydCBjb25zdCBzZXRGb250U2l6ZSA9IGFjdGlvbkNyZWF0b3I8c3RyaW5nIHwgbnVtYmVyPignU0VUX0ZPTlRTSVpFJyk7XG5leHBvcnQgY29uc3Qgc2V0Rm9udEZhbWlseSA9IGFjdGlvbkNyZWF0b3I8c3RyaW5nPignU0VUX0ZPTlRGQU1JTFknKTtcbmV4cG9ydCBjb25zdCBzZXRGb250V2VpZ2h0ID0gYWN0aW9uQ3JlYXRvcjxzdHJpbmcgfCBudW1iZXI+KCdTRVRfRk9OVFdFSUdIVCcpO1xuZXhwb3J0IGNvbnN0IHNldEZvbnRDb2xvciA9IGFjdGlvbkNyZWF0b3I8SUNvbG9yPignU0VUX0ZPTlRDT0xPUicpO1xuZXhwb3J0IGNvbnN0IHNldEJhY2tncm91bmRDb2xvciA9IGFjdGlvbkNyZWF0b3I8SUNvbG9yPignU0VUX0JBQ0tHUk9VTkRDT0xPUicpO1xuZXhwb3J0IGNvbnN0IHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzID0gYWN0aW9uQ3JlYXRvcjxib29sZWFuPignU0VUX0VOQUJMRURTSE9XTUlMTElTRUNPTkRTJyk7XG4iLCIvLyByZWR1Y2VyV2l0aEluaXRpYWxTdGF0ZSDjga9zd2l0Y2jjga7lhpfplbfjgarmm7jjgY3mlrnjgpLjg4Hjgqfjg7zjg7PjgaflrozntZDjgavjgYvjgZHjgotcbi8vIGh0dHBzOi8vcWlpdGEuY29tL20wYS9pdGVtcy83MDNkNjRjNzRlNDNjYjM5MmE2NFxuXG5pbXBvcnQgeyByZWR1Y2VyV2l0aEluaXRpYWxTdGF0ZSB9IGZyb20gJ3R5cGVzY3JpcHQtZnNhLXJlZHVjZXJzJztcblxuaW1wb3J0IHtcbiAgaW5pdCxcbiAgc2V0Rm9udFNpemUsXG4gIHNldEZvbnRGYW1pbHksXG4gIHNldEZvbnRXZWlnaHQsXG4gIHNldEZvbnRDb2xvcixcbiAgc2V0QmFja2dyb3VuZENvbG9yLFxuICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyxcbn0gZnJvbSAnfi9TdGF0ZS9TY3JlZW5TZXR0aW5nL2FjdGlvbi50cyc7XG5cbi8v44GT44GT44Grc3RhdGXjga7liJ3mnJ/lgKTjgpLmm7jjgY9cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IElTY3JlZW5TZXR0aW5nU3RhdGUgPSB7XG4gIGZvbnRTaXplOiAyOCxcbiAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRDb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAxIH0sXG4gIGJhY2tncm91bmRDb2xvcjogeyByOiAyNTUsIGc6IDI1NSwgYjogMjU1LCBhOiAxIH0sXG4gIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IFNjcmVlblNldHRpbmdSZWR1Y2VyID0gcmVkdWNlcldpdGhJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKVxuICAuY2FzZShcbiAgICBpbml0LFxuICAgIChzdGF0ZSwgcGF5bG9hZCk6IElTY3JlZW5TZXR0aW5nU3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIClcbiAgLmNhc2Uoc2V0Rm9udFNpemUsIChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IGZvbnRTaXplID0gdHlwZW9mIHBheWxvYWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQocGF5bG9hZCwgMTApIDogcGF5bG9hZDtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udFNpemUgfTtcbiAgfSlcbiAgLmNhc2Uoc2V0Rm9udEZhbWlseSwgKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRGYW1pbHk6IHBheWxvYWQgfTtcbiAgfSlcbiAgLmNhc2Uoc2V0Rm9udFdlaWdodCwgKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgZm9udFdlaWdodCA9IHR5cGVvZiBwYXlsb2FkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHBheWxvYWQsIDEwKSA6IHBheWxvYWQ7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRXZWlnaHQgfTtcbiAgfSlcbiAgLmNhc2Uoc2V0Rm9udENvbG9yLCAoc3RhdGUsIHBheWxvYWQpID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udENvbG9yOiBwYXlsb2FkIH07XG4gIH0pXG4gIC5jYXNlKHNldEJhY2tncm91bmRDb2xvciwgKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJhY2tncm91bmRDb2xvcjogcGF5bG9hZCB9O1xuICB9KVxuICAuY2FzZShzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcywgKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiBwYXlsb2FkIH07XG4gIH0pO1xuIiwiLy8gVE9ETzog5Z+65pys44Gn44GN44Gm44GL44KJ44Gf44KB44Gd44GGXG4vLyBodHRwczovL3FpaXRhLmNvbS9tMGEvaXRlbXMvNzAzZDY0Yzc0ZTQzY2IzOTJhNjRcbmltcG9ydCBhY3Rpb25DcmVhdG9yRmFjdG9yeSBmcm9tICd0eXBlc2NyaXB0LWZzYSc7XG5pbXBvcnQgeyBhc3luY0ZhY3RvcnkgfSBmcm9tICd0eXBlc2NyaXB0LWZzYS1yZWR1eC10aHVuayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5cbmNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yRmFjdG9yeSgpO1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFjdGlvbkNyZWF0b3IoJ0lOSVQnKTtcbmV4cG9ydCBjb25zdCBzZXRUZXh0ID0gYWN0aW9uQ3JlYXRvcjxzdHJpbmc+KCdTRVRfVEVYVCcpO1xuXG4vLy8vIOaZrumAmuOBruabuOOBjeaWuVxuLy9leHBvcnQgdHlwZSBBY3Rpb24gPVxuLy8gIHwge1xuLy8gICAgICB0eXBlOiAnSU5JVCc7XG4vLyAgICAgIHBheWxvYWQ6IHVuZGVmaW5lZDtcbi8vICAgIH1cbi8vICB8IHtcbi8vICAgICAgdHlwZTogJ1NFVF9URVhUJztcbi8vICAgICAgcGF5bG9hZDogc3RyaW5nO1xuLy8gICAgfTtcblxuY29uc3QgY3JlYXRlQXN5bmMgPSBhc3luY0ZhY3Rvcnk8QXBwU3RhdGU+KGFjdGlvbkNyZWF0b3IpO1xuXG5mdW5jdGlvbiBnZXRTZXJ2ZXJEYXRlKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBheGlvcy5oZWFkKHVybCk7XG59XG5cbmV4cG9ydCBjb25zdCBhc3luY0dldERhdGEgPSBjcmVhdGVBc3luYzxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBJQXN5bmNEYXRhR2V0RXJyb3I+KFxuICAvL2hvZ2VcbiAgJ0FTWU5DX0dFVERBVEEnLFxuICBhc3luYyAoeyB1cmwgfSwgZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgYXN5bmNSZXNwID0gYXdhaXQgZ2V0U2VydmVyRGF0ZSh1cmwpO1xuXG4gICAgLy8g6YGF5bu244Gu5YuV5L2c44KS56K66KqN44GZ44KL44Gf44KB44Gr54Sh55CG44KE44KK6YGF5bu2XG4gICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBhc3luY1Jlc3AuaGVhZGVycy5kYXRlLFxuICAgIH07XG4gIH1cbik7XG5cbi8vLy8gTk9URTog6Z2e5ZCM5pyf44GuYWN0aW9uQ3JlYXRvclxuLy8gMeOBpOOCgeOBjEFQSeOBruW8leaVsOOBqOOBi+OBp+S9v+OBhuOChOOBpFxuLy8gcGFyYW06IHsgdXJsOiBzdHJpbmcgfSxcbi8vIGRvbmUgOiB7IGRhdGU6IHN0cmluZyB9XG4vLyBmYWlsIDogeyBlcnJvcjogc3RyaW5nIH1cbi8vIHR5cGUgcGFyYW1zID0geyB1cmw6IHN0cmluZyB9O1xuLy8gdHlwZSByZXN1bHQgPSB7IGRhdGU6IHN0cmluZyB9O1xuLy8gdHlwZSBlcnJvciA9IHsgdGV4dDogc3RyaW5nIH07XG4vLyBleHBvcnQgY29uc3QgYXN5bmNHZXREYXRhID0gYWN0aW9uQ3JlYXRvci5hc3luYzxwYXJhbXMsIHJlc3VsdCwgZXJyb3I+KCdTT01FVEhJTkdfQVNZTkMnKTtcbiIsIi8vIHJlZHVjZXJXaXRoSW5pdGlhbFN0YXRlIOOBr3N3aXRjaOOBruWGl+mVt+OBquabuOOBjeaWueOCkuODgeOCp+ODvOODs+OBp+WujOe1kOOBq+OBi+OBkeOCi1xuLy8gaHR0cHM6Ly9xaWl0YS5jb20vbTBhL2l0ZW1zLzcwM2Q2NGM3NGU0M2NiMzkyYTY0XG5cbmltcG9ydCB7IHJlZHVjZXJXaXRoSW5pdGlhbFN0YXRlIH0gZnJvbSAndHlwZXNjcmlwdC1mc2EtcmVkdWNlcnMnO1xuXG5pbXBvcnQgeyBpbml0LCBzZXRUZXh0LCBhc3luY0dldERhdGEgfSBmcm9tICd+L1N0YXRlL1Rlc3QvYWN0aW9uLnRzJztcblxuLy/jgZPjgZPjgatzdGF0ZeOBruWIneacn+WApOOCkuabuOOBj1xuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogSVRlc3RTdGF0ZSA9IHtcbiAgdGV4dDogJ2ZpcnN0IGltcHJlc3Npb24nLFxuICBhcGlFbmRwb2ludDogJycsXG4gIGFwaVJlc3VsdDogJycsXG59O1xuXG5leHBvcnQgY29uc3QgVGVzdFJlZHVjZXIgPSByZWR1Y2VyV2l0aEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpXG4gIC5jYXNlKFxuICAgIGluaXQsXG4gICAgKHN0YXRlLCBwYXlsb2FkKTogSVRlc3RTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgKVxuICAuY2FzZShzZXRUZXh0LCAoc3RhdGUsIHBheWxvYWQpID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGV4dDogcGF5bG9hZCB9O1xuICB9KVxuICAvLyDpnZ7lkIzmnJ/jga7jgqLjgq/jgrfjg6fjg7NcbiAgLmNhc2UoYXN5bmNHZXREYXRhLmFzeW5jLnN0YXJ0ZWQsIChzdGF0ZSwgeyB1cmwgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydGVkJyk7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFwaUVuZHBvaW50OiB1cmwgfTtcbiAgfSlcbiAgLmNhc2UoYXN5bmNHZXREYXRhLmFzeW5jLmRvbmUsIChzdGF0ZSwgeyBwYXJhbXMsIHJlc3VsdCB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RvbmUnKTtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXBpUmVzdWx0OiByZXN1bHQuZGF0ZSB9O1xuICB9KVxuICAuY2FzZShhc3luY0dldERhdGEuYXN5bmMuZmFpbGVkLCAoc3RhdGUsIHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXBpUmVzdWx0OiByZXN1bHQuZXJyb3IubWVzc2FnZSB9O1xuICB9KTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUZvbnRTZXQge1xuICBmb250TmFtZTogc3RyaW5nO1xuICBmb250c2l6ZWxpc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRGT05UX0ZBTUlMSUVTX0xJU1Q6IElGb250U2V0W10gPSBbXG4gIHtcbiAgICBmb250TmFtZTogJ3NhbnMtc2VyaWYnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnc2VyaWYnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnbW9ub3NwYWNlJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFU19MSVNUOiBJRm9udFNldFtdID0gW1xuICAvLyBmb250XG4gIHtcbiAgICBmb250TmFtZTogJ09yYml0cm9uJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1dhbGxwb2V0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUm9ib3RvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDMsNyw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnT3N3YWxkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcyLDMsNCw2LDcsNScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhbHNhbWlxIFNhbnMnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0FudG9uJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFybG93IENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQYXRyaWNrIEhhbmQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWNyYW1lbnRvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUG9pcmV0IE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1ByZXNzIFN0YXJ0IDJQJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0NoYWtyYSBQZXRjaCcsXG4gICAgZm9udHNpemVsaXN0OiAnMyw0LDUsNiw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFsb28gQ2hldHRhbiAyJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdDb2RhJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDgnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBTZW1pIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBFeHRyYSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQWxkcmljaCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1N0YXJkb3MgU3RlbmNpbCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTWVncmltJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnSWNlbGFuZCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhcnBhbmNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1Nob2p1bWFydScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xvbmRyaW5hIE91dGxpbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQwMCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0dlbycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xpYnJlIEJhcmNvZGUgMzkgRXh0ZW5kZWQgVGV4dCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1R1bHBlbiBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfRkFNSUxJRVNfTElTVCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQoREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVCwgV0VCRk9OVF9GQU1JTElFU19MSVNUKTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVMgPSBXRUJGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lLCBmb250c2l6ZWxpc3QgfTogSUZvbnRTZXQpID0+IHtcbiAgY29uc3QgcmVwbGFjZWRGb250U2l6ZUxpc3QgPSBmb250c2l6ZWxpc3QucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKTtcbiAgcmV0dXJuIGAke2ZvbnROYW1lfToke3JlcGxhY2VkRm9udFNpemVMaXN0fWA7XG59KTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfTkFNRV9MSVNUID0gRk9OVF9GQU1JTElFU19MSVNULm1hcCgoeyBmb250TmFtZSB9OiBJRm9udFNldCkgPT4ge1xuICByZXR1cm4gYCR7Zm9udE5hbWV9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0RW5hYmxlZEZvbnRTaXplID0gKGZvbnROYW1lOiBzdHJpbmcpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IEZPTlRfRkFNSUxJRVNfTElTVC5maWx0ZXIoKGZvbnRzZXQpID0+IHtcbiAgICByZXR1cm4gZm9udHNldC5mb250TmFtZSA9PT0gZm9udE5hbWU7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRMaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZExpc3RbMF0uZm9udHNpemVsaXN0XG4gICAgLnJlcGxhY2UoLyhcXGQpL2csICckMTAwJylcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICAgIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcbmltcG9ydCB7IFdFQkZPTlRfRkFNSUxJRVMgfSBmcm9tICd+L2ZvbnQudHMnO1xuXG4vL2ltcG9ydCBcIn4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICd+L0FwcC50c3gnO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5XZWJGb250LmxvYWQoe1xuICBnb29nbGU6IHtcbiAgICBmYW1pbGllczogV0VCRk9OVF9GQU1JTElFUyxcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCB7IGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSwgeyBUaHVua01pZGRsZXdhcmUgfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IFNjcmVlblJlZHVjZXIgfSBmcm9tICd+L1N0YXRlL1NjcmVlbi9yZWR1Y2VyLnRzJztcbmltcG9ydCB7IFNjcmVlblNldHRpbmdSZWR1Y2VyIH0gZnJvbSAnfi9TdGF0ZS9TY3JlZW5TZXR0aW5nL3JlZHVjZXIudHMnO1xuaW1wb3J0IHsgVGVzdFJlZHVjZXIgfSBmcm9tICd+L1N0YXRlL1Rlc3QvcmVkdWNlci50cyc7XG5cbmludGVyZmFjZSBFeHRlbmRlZFdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIF9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXz86IHR5cGVvZiBjb21wb3NlO1xufVxuZGVjbGFyZSB2YXIgd2luZG93OiBFeHRlbmRlZFdpbmRvdztcblxuY29uc3Qgc3RvcmVFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbi8vY29uc3QgbWlkZGxld2FyZXMgPSBbXTtcbmNvbnN0IHRodW5rOiBUaHVua01pZGRsZXdhcmU8QXBwU3RhdGUsIEFueUFjdGlvbj4gPSB0aHVua01pZGRsZXdhcmU7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIC8vIOOBk+OCjOOBp+ikh+aVsOOBruOCueODhuODvOODiOOCkuaJseOBhueahOOBquaEn+OBmOOBq1xuICBjb21iaW5lUmVkdWNlcnM8QXBwU3RhdGU+KHtcbiAgICBTY3JlZW5SZWR1Y2VyLFxuICAgIFNjcmVlblNldHRpbmdSZWR1Y2VyLFxuICAgIFRlc3RSZWR1Y2VyLFxuICB9KSxcbiAgc3RvcmVFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcbiAgLy9hcHBseU1pZGRsZXdhcmUodGh1bmspXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
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






var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: _store_ts__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_screen_index_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_screenSetting_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_test_index_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
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
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b,
      a = _ref.a;
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
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 0詰めフォーマット
 * @param  {Number} num  number or string
 * @param  {Number} n  number of characters
 * @return {String} (In an error, 'false' is returned. )
 */
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var num = _ref.num,
      minimamDisit = _ref.minimamDisit;
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
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! beautiful-react-hooks */ "./node_modules/beautiful-react-hooks/dist/esm/index.js");
/* harmony import */ var _components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/screenPanel.tsx */ "./src/components/screenPanel.tsx");
/* harmony import */ var _beans___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/beans/ */ "./src/beans/index.ts");






var Screen = function Screen(_ref) {
  var fontSize = _ref.fontSize,
      fontFamily = _ref.fontFamily,
      fontWeight = _ref.fontWeight,
      fontColor = _ref.fontColor,
      backgroundColor = _ref.backgroundColor,
      enabledShowMilliseconds = _ref.enabledShowMilliseconds;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      styleObject = _useState[0],
      setStyleObject = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      hh1 = _useState2[0],
      setHh1 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      hh2 = _useState3[0],
      setHh2 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      mm1 = _useState4[0],
      setMm1 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      mm2 = _useState5[0],
      setMm2 = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      ss1 = _useState6[0],
      setSs1 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      ss2 = _useState7[0],
      setSs2 = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      sss1 = _useState8[0],
      setSss1 = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      sss2 = _useState9[0],
      setSss2 = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      sss3 = _useState10[0],
      setSss3 = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date()),
      date = _useState11[0],
      setDate = _useState11[1];

  var options = {
    increment: 0.5,
    startAt: 0,
    finishAt: -1
  };
  var onFinish = Object(beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useRequestAnimationFrame"])(function (progress, next) {
    setDate(new Date());
    next();
  }, options);
  onFinish(function () {
    console.log('finish');
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setStyleObject(Object.assign({}, styleObject, {
      fontSize: fontSize + "px",
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      color: Object(_beans___WEBPACK_IMPORTED_MODULE_4__["ColorToRGBA"])(fontColor),
      backgroundColor: Object(_beans___WEBPACK_IMPORTED_MODULE_4__["ColorToRGBA"])(backgroundColor)
    })); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fontSize, fontFamily, fontWeight, fontColor, backgroundColor]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var hh = Object(_beans___WEBPACK_IMPORTED_MODULE_4__["ZeroPadidng"])({
      num: date.getHours(),
      minimamDisit: 2
    });
    var mm = Object(_beans___WEBPACK_IMPORTED_MODULE_4__["ZeroPadidng"])({
      num: date.getMinutes(),
      minimamDisit: 2
    });
    var ss = Object(_beans___WEBPACK_IMPORTED_MODULE_4__["ZeroPadidng"])({
      num: date.getSeconds(),
      minimamDisit: 2
    });
    var sss = Object(_beans___WEBPACK_IMPORTED_MODULE_4__["ZeroPadidng"])({
      num: date.getMilliseconds(),
      minimamDisit: 3
    });
    setHh1(hh[0]);
    setHh2(hh[1]);
    setMm1(mm[0]);
    setMm2(mm[1]);
    setSs1(ss[0]);
    setSs2(ss[1]);
    setSss1(sss[0]);
    setSss2(sss[1]);
    setSss3(sss[2]); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen",
    style: styleObject
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "hh1",
    num: hh1
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "hh2",
    num: hh2
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-colon"
  }, ":"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "mm1",
    num: mm1
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "mm2",
    num: mm2
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-colon"
  }, ":"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "ss1",
    num: ss1
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "ss2",
    num: ss2
  })), enabledShowMilliseconds ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "sss1",
    num: sss1
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "sss2",
    num: sss2
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "screen-panel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_screenPanel_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "sss3",
    num: sss3
  }))) : null);
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


var ScreenPanel = function ScreenPanel(_ref) {
  var type = _ref.type,
      num = _ref.num;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "screen-panel-" + type
  }, num));
}; //export default React.memo(ScreenPanel);


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
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _font_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/font.ts */ "./src/font.ts");
/* harmony import */ var _components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/selectControl/index.tsx */ "./src/components/selectControl/index.tsx");









var ScreenSetting = function ScreenSetting(_ref) {
  var fontSize = _ref.fontSize,
      fontFamily = _ref.fontFamily,
      fontWeight = _ref.fontWeight,
      fontColor = _ref.fontColor,
      backgroundColor = _ref.backgroundColor,
      enabledShowMilliseconds = _ref.enabledShowMilliseconds,
      setFontSize = _ref.setFontSize,
      setFontFamily = _ref.setFontFamily,
      setFontWeight = _ref.setFontWeight,
      setFontColor = _ref.setFontColor,
      setBackgroundColor = _ref.setBackgroundColor,
      setEnabledShowMilliseconds = _ref.setEnabledShowMilliseconds;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(fontSize),
      minFontSize = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(100),
      maxFontSize = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      fontFamilyOptionList = _useState3[0],
      setFontFamilyOptions = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      fontSizeOptionList = _useState4[0],
      setFontSizeOptionList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      fontWeightOptionList = _useState5[0],
      setFontWeightOptionList = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setFontFamilyOptions(_font_ts__WEBPACK_IMPORTED_MODULE_6__["FONT_NAME_LIST"].map(function (fontName) {
      return {
        value: fontName,
        valueName: fontName
      };
    }));
    setFontSizeOptionList(function () {
      var result = [];

      for (var index = minFontSize; index < maxFontSize; index++) {
        result.push({
          value: index.toString(),
          valueName: index.toString()
        });
      }

      return result;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (fontFamilyOptionList.length) {
      setFontFamily(fontFamilyOptionList[0].value);
    }
  }, [fontFamilyOptionList]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(fontFamily);
    setFontWeightOptionList(function () {
      return Object(_font_ts__WEBPACK_IMPORTED_MODULE_6__["getEnabledFontSize"])(fontFamily).map(function (fontWeight) {
        return {
          value: fontWeight.toString(),
          valueName: fontWeight.toString()
        };
      });
    });
    var enabledFontWeightList = Object(_font_ts__WEBPACK_IMPORTED_MODULE_6__["getEnabledFontSize"])(fontFamily);

    if (enabledFontWeightList.indexOf(fontWeight) === -1) {
      setFontWeight(enabledFontWeightList[0]);
    }
  }, [fontFamily]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var defaultValue = 28;
    setFontSize(defaultValue);
  }, []);

  var handleFontSizeChange = function handleFontSizeChange(e) {
    setFontSize(e.target.value);
  };

  var handleFontFamilyChange = function handleFontFamilyChange(e) {
    var fontName = e.target.value;
    setFontFamily(fontName);
  };

  var handleFontWeightChange = function handleFontWeightChange(e) {
    setFontWeight(e.target.value);
  };

  var handleFontColorChange = function handleFontColorChange(color) {
    setFontColor(color.rgb);
  };

  var handleBackgroundColorChange = function handleBackgroundColorChange(color) {
    setBackgroundColor(color.rgb);
  };

  var handleEnabledShowMilliseconds = function handleEnabledShowMilliseconds(e) {
    console.log(e.target.checked);
    setEnabledShowMilliseconds(e.target.checked);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "setting"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
    className: "setting-fieldset"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("legend", {
    className: "setting-legend"
  }, "font"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("dl", {
    className: "setting-font"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "font-family",
    defaultValue: fontFamilyOptionList[0],
    options: fontFamilyOptionList,
    name: "font-family",
    onChange: handleFontFamilyChange
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "font-size",
    defaultValue: fontSizeOptionList[0],
    options: fontSizeOptionList,
    name: "font-size",
    onChange: handleFontSizeChange
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "font-weight",
    defaultValue: fontWeightOptionList[0],
    options: fontWeightOptionList,
    name: "font-weight",
    onChange: handleFontWeightChange
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
    className: "setting-fieldset"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("legend", {
    className: "config"
  }, "Color"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "font-color"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "font-color"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_5__["SketchPicker"], {
    color: fontColor,
    onChange: handleFontColorChange
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "background-color"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "background-color"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_5__["SketchPicker"], {
    color: backgroundColor,
    onChange: handleBackgroundColorChange
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
    className: "setting-fieldset"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("legend", {
    className: "config"
  }, "field"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "field"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    value: "milliseconds",
    checked: enabledShowMilliseconds,
    onChange: handleEnabledShowMilliseconds
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "show milliseconds")))));
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
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var SelectControl = function SelectControl(_ref) {
  var title = _ref.title,
      name = _ref.name,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(title),
      localTitle = _useState[0],
      setLocalTitle = _useState[1];

  var createOptionTag = function createOptionTag() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("dt", {
      className: "setting-font_title"
    }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("dd", {
      className: "setting-font_detail"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "setting-font-family"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
      defaultValue: defaultValue.value,
      name: name,
      onChange: onChange
    }, function () {
      var list = options.map(function (_ref2) {
        var value = _ref2.value,
            valueName = _ref2.valueName;
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
          value: value,
          key: value
        }, valueName);
      });
      return list;
    }()))));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, options.length > 0 ? createOptionTag() : null);
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

var Test = function Test(_ref) {
  var text = _ref.text,
      setText = _ref.setText,
      apiResult = _ref.apiResult,
      asyncGetData = _ref.asyncGetData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(text),
      localText = _useState[0],
      setLocalText = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 非同期確認用
    //asyncGetData('/react-state/');
    asyncGetData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setText(localText); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localText]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    value: localText,
    onChange: function onChange(e) {
      return setLocalText(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u30B5\u30FC\u30D0\u30BF\u30A4\u30E0\uFF1A", apiResult));
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
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_screen_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/screen.tsx */ "./src/components/screen.tsx");



var mapStateToProps = function mapStateToProps(appState) {
  return Object.assign({}, appState.screenSetting);
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_components_screen_tsx__WEBPACK_IMPORTED_MODULE_2__["default"]));

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
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/features/screenSetting/screenSettingReducer.ts */ "./src/features/screenSetting/screenSettingReducer.ts");
/* harmony import */ var _components_screenSetting_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/screenSetting.tsx */ "./src/components/screenSetting.tsx");




var mapStateToProps = function mapStateToProps(appState) {
  return Object.assign({}, appState.screenSetting);
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setFontSize: function setFontSize(num) {
      return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_2__["setFontSize"])(num));
    },
    setFontFamily: function setFontFamily(num) {
      return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_2__["setFontFamily"])(num));
    },
    setFontWeight: function setFontWeight(num) {
      return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_2__["setFontWeight"])(num));
    },
    setFontColor: function setFontColor(color) {
      return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_2__["setFontColor"])(color));
    },
    setBackgroundColor: function setBackgroundColor(color) {
      return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_2__["setBackgroundColor"])(color));
    },
    setEnabledShowMilliseconds: function setEnabledShowMilliseconds(isEnabled) {
      return dispatch(Object(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_2__["setEnabledShowMilliseconds"])(isEnabled));
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_screenSetting_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]));

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
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/features/test/testReducer.ts */ "./src/features/test/testReducer.ts");
/* harmony import */ var _components_test_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/test.tsx */ "./src/components/test.tsx");




var mapStateToProps = function mapStateToProps(appState) {
  return Object.assign({}, appState.test);
}; // ThunkDispatchの引数の型何指定すればよいかよくわからなかった、extraArgumentの型になればいいとおもうんだけど

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setText: function setText(text) {
      dispatch(Object(_features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_2__["setText"])(text));
    },
    asyncGetData: function asyncGetData(url) {
      dispatch(Object(_features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_2__["asyncGetData"])());
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_test_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]));

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
  reducers: {}
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
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");



var initialState = {
  fontSize: 28,
  fontFamily: 'sans-serif',
  fontWeight: 400,
  fontColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  backgroundColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  },
  enabledShowMilliseconds: true
};
var testState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createSlice"])({
  name: 'screenSetting',
  initialState: initialState,
  reducers: {
    setFontSize: function setFontSize(state, _ref) {
      var payload = _ref.payload;
      var fontSize = typeof payload === 'string' ? parseInt(payload, 10) : payload;
      return Object.assign({}, state, {
        fontSize: fontSize
      });
    },
    setFontFamily: function setFontFamily(state, _ref2) {
      var payload = _ref2.payload;
      return Object.assign({}, state, {
        fontFamily: payload
      });
    },
    setFontWeight: function setFontWeight(state, _ref3) {
      var payload = _ref3.payload;
      var fontWeight = typeof payload === 'string' ? parseInt(payload, 10) : payload;
      return Object.assign({}, state, {
        fontWeight: fontWeight
      });
    },
    setFontColor: function setFontColor(state, _ref4) {
      var payload = _ref4.payload;
      return Object.assign({}, state, {
        fontColor: payload
      });
    },
    setBackgroundColor: function setBackgroundColor(state, _ref5) {
      var payload = _ref5.payload;
      return Object.assign({}, state, {
        backgroundColor: payload
      });
    },
    setEnabledShowMilliseconds: function setEnabledShowMilliseconds(state, _ref6) {
      var payload = _ref6.payload;
      return Object.assign({}, state, {
        enabledShowMilliseconds: payload
      });
    }
  }
});
var _testState$actions = testState.actions,
    setFontSize = _testState$actions.setFontSize,
    setFontFamily = _testState$actions.setFontFamily,
    setFontWeight = _testState$actions.setFontWeight,
    setFontColor = _testState$actions.setFontColor,
    setBackgroundColor = _testState$actions.setBackgroundColor,
    setEnabledShowMilliseconds = _testState$actions.setEnabledShowMilliseconds;

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
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var initialState = {
  text: 'first impression',
  apiEndpoint: '',
  apiResult: ''
};
var asyncGetData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createAsyncThunk"])('servertime/head', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var asyncResp;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.head('./');

        case 2:
          asyncResp = _context.sent;
          _context.next = 5;
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
            }, 5000);
          });

        case 5:
          return _context.abrupt("return", {
            date: asyncResp.headers.date
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var testState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createSlice"])({
  name: 'test',
  initialState: initialState,
  reducers: {
    setText: function setText(state, action) {
      return Object.assign({}, state, {
        text: action.payload
      });
    }
  },
  // redux-thunk
  extraReducers: function extraReducers(builder) {
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
      return Object.assign({}, state);
    });
    builder.addCase(asyncGetData.fulfilled, function (state, action) {
      //console.log(action.type);
      // -> servertime/head/fulfilled
      return Object.assign({}, state, {
        apiResult: action.payload.date
      });
    });
    builder.addCase(asyncGetData.rejected, function (state, action) {
      //console.log(action.type);
      // -> servertime/head/rejected
      return Object.assign({}, state);
    });
  }
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);







var DEFAULTFONT_FAMILIES_LIST = [{
  fontName: 'sans-serif',
  fontsizelist: '4,5,6,7,8,9'
}, {
  fontName: 'serif',
  fontsizelist: '4,5,6,7,8,9'
}, {
  fontName: 'monospace',
  fontsizelist: '4,5,6,7,8,9'
}];
var WEBFONT_FAMILIES_LIST = [// font
{
  fontName: 'Orbitron',
  fontsizelist: '4,5,6,7,8,9'
}, {
  fontName: 'Wallpoet',
  fontsizelist: '4'
}, {
  fontName: 'Roboto',
  fontsizelist: '1,3,7,9'
}, {
  fontName: 'Oswald',
  fontsizelist: '2,3,4,6,7,5'
}, {
  fontName: 'Balsamiq Sans',
  fontsizelist: '4,7'
}, {
  fontName: 'Anton',
  fontsizelist: '4'
}, {
  fontName: 'Barlow Condensed',
  fontsizelist: '1,2,3,4,5,6,7,8,9'
}, {
  fontName: 'Patrick Hand',
  fontsizelist: '4'
}, {
  fontName: 'Sacramento',
  fontsizelist: '4'
}, {
  fontName: 'Poiret One',
  fontsizelist: '4'
}, {
  fontName: 'Press Start 2P',
  fontsizelist: '4'
}, {
  fontName: 'Saira Condensed',
  fontsizelist: '1,2,3,4,5,6,7,8,9'
}, {
  fontName: 'Chakra Petch',
  fontsizelist: '3,4,5,6,7'
}, {
  fontName: 'Baloo Chettan 2',
  fontsizelist: '4,5,6,7,8'
}, {
  fontName: 'Coda',
  fontsizelist: '4,8'
}, {
  fontName: 'Saira Semi Condensed',
  fontsizelist: '1,2,3,4,5,6,7,8,9'
}, {
  fontName: 'Saira Extra Condensed',
  fontsizelist: '1,2,3,4,5,6,7,8,9'
}, {
  fontName: 'Aldrich',
  fontsizelist: '4'
}, {
  fontName: 'Stardos Stencil',
  fontsizelist: '4,7'
}, {
  fontName: 'Megrim',
  fontsizelist: '4'
}, {
  fontName: 'Iceland',
  fontsizelist: '4'
}, {
  fontName: 'Sarpanch',
  fontsizelist: '4,5,6,7,8,9'
}, {
  fontName: 'Shojumaru',
  fontsizelist: '4'
}, {
  fontName: 'Londrina Outline',
  fontsizelist: '4'
}, {
  fontName: 'Geo',
  fontsizelist: '4'
}, {
  fontName: 'Libre Barcode 39 Extended Text',
  fontsizelist: '4'
}, {
  fontName: 'Tulpen One',
  fontsizelist: '4'
}];
var FONT_FAMILIES_LIST = Array.prototype.concat(DEFAULTFONT_FAMILIES_LIST, WEBFONT_FAMILIES_LIST);
var WEBFONT_FAMILIES = WEBFONT_FAMILIES_LIST.map(function (_ref) {
  var fontName = _ref.fontName,
      fontsizelist = _ref.fontsizelist;
  var replacedFontSizeList = fontsizelist.replace(/(\d)/g, '$100');
  return fontName + ":" + replacedFontSizeList;
});
var FONT_NAME_LIST = FONT_FAMILIES_LIST.map(function (_ref2) {
  var fontName = _ref2.fontName;
  return "" + fontName;
});
var getEnabledFontSize = function getEnabledFontSize(fontName) {
  var filteredList = FONT_FAMILIES_LIST.filter(function (fontset) {
    return fontset.fontName === fontName;
  });

  if (!filteredList.length) {
    return undefined;
  }

  var result = filteredList[0].fontsizelist.replace(/(\d)/g, '$100').split(',').map(function (val) {
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
    families: _font_ts__WEBPACK_IMPORTED_MODULE_3__["WEBFONT_FAMILIES"]
  }
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
    screenSetting: _features_screenSetting_screenSettingReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlYW5zL0NvbG9yVG9SR0JBLnRzIiwid2VicGFjazovLy8uL3NyYy9iZWFucy9aZXJvUGFkZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JlZW5QYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0Q29udHJvbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvc2NyZWVuU2V0dGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7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QUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQVo7QUFFQSxvREFBTyxDQUFDLElBQVIsQ0FBYTtBQUNYLFFBQU0sRUFBRTtBQUNOLFlBQVEsRUFBRSx5REFBZ0I7QUFEcEI7QUFERyxDQUFiO0FBTUEsZ0RBQVEsQ0FBQyxNQUFULENBQWdCLDJEQUFDLGdEQUFELEVBQUksSUFBSixDQUFoQixFQUF5QixRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRWUsc0lBQWMsQ0FBQztBQUM1QixTQUFPLEVBQUU7QUFDUCxRQUFJLEVBQUUsa0VBREM7QUFFUCxVQUFNLEVBQUUsc0VBRkQ7QUFHUCxpQkFBYSxFQUFFLG9GQUFvQjtBQUg1QjtBQURtQixDQUFELENBQTdCLEUiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwianMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcImNsb2NrXCJdID0gd2luZG93W1wiY2xvY2tcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJqcy92ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnfi9zdG9yZS50cyc7XG5cbi8vIGNvbnRhaW5lclxuaW1wb3J0IFNjcmVlbiBmcm9tICd+L2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4JztcbmltcG9ydCBTY3JlZW5TZXR0aW5nIGZyb20gJ34vY29udGFpbmVyL3NjcmVlblNldHRpbmcvaW5kZXgudHN4JztcbmltcG9ydCBUZXN0IGZyb20gJ34vY29udGFpbmVyL3Rlc3QvaW5kZXgudHN4JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8U2NyZWVuIC8+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICAgIDxTY3JlZW5TZXR0aW5nIC8+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICAgIDxUZXN0PjwvVGVzdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJleHBvcnQgZGVmYXVsdCAoeyByLCBnLCBiLCBhIH06IElDb2xvcikgPT4ge1xuICBjb25zb2xlLmxvZyhyLCBnLCBiLCBhKTtcbiAgcmV0dXJuIGByZ2JhKCAke3J9LCR7Z30sJHtifSwke2F9KWA7XG59O1xuIiwiLyoqXG4gKiAw6Kmw44KB44OV44Kp44O844Oe44OD44OIXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG51bSAgbnVtYmVyIG9yIHN0cmluZ1xuICogQHBhcmFtICB7TnVtYmVyfSBuICBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICogQHJldHVybiB7U3RyaW5nfSAoSW4gYW4gZXJyb3IsICdmYWxzZScgaXMgcmV0dXJuZWQuIClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElaZXJvUGFkZGluZyB7XG4gIG51bTogc3RyaW5nIHwgbnVtYmVyO1xuICBtaW5pbWFtRGlzaXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgbnVtLCBtaW5pbWFtRGlzaXQgfTogSVplcm9QYWRkaW5nKSA9PiB7XG4gIGxldCByZXN1bHQ7XG4gIHN3aXRjaCAodHlwZW9mIG51bSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXN1bHQgPSBudW07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmVzdWx0ID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgbWluaW1hbURpc2l0KSB7XG4gICAgcmVzdWx0ID0gJzAnICsgcmVzdWx0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFplcm9QYWRpZG5nIGZyb20gJ34vYmVhbnMvWmVyb1BhZGRpbmcudHMnO1xuaW1wb3J0IENvbG9yVG9SR0JBIGZyb20gJy4vQ29sb3JUb1JHQkEnO1xuXG5leHBvcnQgeyBaZXJvUGFkaWRuZywgQ29sb3JUb1JHQkEgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lIH0gZnJvbSAnYmVhdXRpZnVsLXJlYWN0LWhvb2tzJztcbmltcG9ydCBTY3JlZW5QYW5lbCBmcm9tICd+L2NvbXBvbmVudHMvc2NyZWVuUGFuZWwudHN4JztcblxuaW1wb3J0IHsgWmVyb1BhZGlkbmcsIENvbG9yVG9SR0JBIH0gZnJvbSAnfi9iZWFucy8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIHNjcmVlblByb3BzIHt9XG5cbmNvbnN0IFNjcmVlbjogUmVhY3QuRkM8c2NyZWVuUHJvcHMgJiBJU2NyZWVuU2V0dGluZ1N0YXRlPiA9ICh7IGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvciwgZW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSkgPT4ge1xuICBjb25zdCBbc3R5bGVPYmplY3QsIHNldFN0eWxlT2JqZWN0XSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBbaGgxLCBzZXRIaDFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtoaDIsIHNldEhoMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21tMSwgc2V0TW0xXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbW0yLCBzZXRNbTJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzczEsIHNldFNzMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzMiwgc2V0U3MyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3NzMSwgc2V0U3NzMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzczIsIHNldFNzczJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzc3MzLCBzZXRTc3MzXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaW5jcmVtZW50OiAwLjUsXG4gICAgc3RhcnRBdDogMCxcbiAgICBmaW5pc2hBdDogLTEsXG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSB1c2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHByb2dyZXNzLCBuZXh0KSA9PiB7XG4gICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBuZXh0KCk7XG4gIH0sIG9wdGlvbnMpO1xuXG4gIG9uRmluaXNoKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmluaXNoJyk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3R5bGVPYmplY3Qoe1xuICAgICAgLi4uc3R5bGVPYmplY3QsXG4gICAgICBmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLFxuICAgICAgZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQsXG4gICAgICBjb2xvcjogQ29sb3JUb1JHQkEoZm9udENvbG9yKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JUb1JHQkEoYmFja2dyb3VuZENvbG9yKSxcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2ZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGggPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRIb3VycygpLCBtaW5pbWFtRGlzaXQ6IDIgfSk7XG4gICAgY29uc3QgbW0gPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRNaW51dGVzKCksIG1pbmltYW1EaXNpdDogMiB9KTtcbiAgICBjb25zdCBzcyA9IFplcm9QYWRpZG5nKHsgbnVtOiBkYXRlLmdldFNlY29uZHMoKSwgbWluaW1hbURpc2l0OiAyIH0pO1xuICAgIGNvbnN0IHNzcyA9IFplcm9QYWRpZG5nKHsgbnVtOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpLCBtaW5pbWFtRGlzaXQ6IDMgfSk7XG5cbiAgICBzZXRIaDEoaGhbMF0pO1xuICAgIHNldEhoMihoaFsxXSk7XG4gICAgc2V0TW0xKG1tWzBdKTtcbiAgICBzZXRNbTIobW1bMV0pO1xuICAgIHNldFNzMShzc1swXSk7XG4gICAgc2V0U3MyKHNzWzFdKTtcbiAgICBzZXRTc3MxKHNzc1swXSk7XG4gICAgc2V0U3NzMihzc3NbMV0pO1xuICAgIHNldFNzczMoc3NzWzJdKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCIgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwiaGgxXCIgbnVtPXtoaDF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwiaGgyXCIgbnVtPXtoaDJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLWNvbG9uXCI+OjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJtbTFcIiBudW09e21tMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJtbTJcIiBudW09e21tMn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tY29sb25cIj46PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzMVwiIG51bT17c3MxfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzMlwiIG51bT17c3MyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZW5hYmxlZFNob3dNaWxsaXNlY29uZHMgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3NzMVwiIG51bT17c3NzMX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzc3MyXCIgbnVtPXtzc3MyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzczNcIiBudW09e3NzczN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY3JlZW5QYW5lbDogUmVhY3QuRkM8U2NyZWVuUGFuZWxQcm9wcz4gPSAoeyB0eXBlLCBudW0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2BzY3JlZW4tcGFuZWwtJHt0eXBlfWB9PntudW19PC9zcGFuPlxuICAgIDwvPlxuICApO1xufTtcblxuLy9leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNjcmVlblBhbmVsKTtcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2NyZWVuUGFuZWwpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTa2V0Y2hQaWNrZXIgfSBmcm9tICdyZWFjdC1jb2xvcic7XG5cbmltcG9ydCB7IEZPTlRfTkFNRV9MSVNULCBnZXRFbmFibGVkRm9udFNpemUgfSBmcm9tICd+L2ZvbnQudHMnO1xuXG5pbXBvcnQgU2VsZWN0Q29udHJvbCBmcm9tICd+L2NvbXBvbmVudHMvc2VsZWN0Q29udHJvbC9pbmRleC50c3gnO1xuXG5jb25zdCBTY3JlZW5TZXR0aW5nOiBSZWFjdC5GQzxJU2NyZWVuU2V0dGluZ1N0YXRlICYgSVNjcmVlblNldHRpbmdIYW5kbGVyPiA9ICh7IGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvciwgZW5hYmxlZFNob3dNaWxsaXNlY29uZHMsIHNldEZvbnRTaXplLCBzZXRGb250RmFtaWx5LCBzZXRGb250V2VpZ2h0LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSkgPT4ge1xuICBjb25zdCBbbWluRm9udFNpemVdID0gdXNlU3RhdGUoZm9udFNpemUpO1xuICBjb25zdCBbbWF4Rm9udFNpemVdID0gdXNlU3RhdGUoMTAwKTtcblxuICBjb25zdCBbZm9udEZhbWlseU9wdGlvbkxpc3QsIHNldEZvbnRGYW1pbHlPcHRpb25zXSA9IHVzZVN0YXRlKFtdIGFzIElPcHRpb25bXSk7XG4gIGNvbnN0IFtmb250U2l6ZU9wdGlvbkxpc3QsIHNldEZvbnRTaXplT3B0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuICBjb25zdCBbZm9udFdlaWdodE9wdGlvbkxpc3QsIHNldEZvbnRXZWlnaHRPcHRpb25MaXN0XSA9IHVzZVN0YXRlKFtdIGFzIElPcHRpb25bXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGb250RmFtaWx5T3B0aW9ucyhcbiAgICAgIEZPTlRfTkFNRV9MSVNULm1hcCgoZm9udE5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogZm9udE5hbWUsXG4gICAgICAgICAgdmFsdWVOYW1lOiBmb250TmFtZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHNldEZvbnRTaXplT3B0aW9uTGlzdCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQ6IElPcHRpb25bXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSBtaW5Gb250U2l6ZTsgaW5kZXggPCBtYXhGb250U2l6ZTsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IGluZGV4LnRvU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWVOYW1lOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmb250RmFtaWx5T3B0aW9uTGlzdC5sZW5ndGgpIHtcbiAgICAgIHNldEZvbnRGYW1pbHkoZm9udEZhbWlseU9wdGlvbkxpc3RbMF0udmFsdWUpO1xuICAgIH1cbiAgfSwgW2ZvbnRGYW1pbHlPcHRpb25MaXN0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmb250RmFtaWx5KTtcblxuICAgIHNldEZvbnRXZWlnaHRPcHRpb25MaXN0KCgpID0+IHtcbiAgICAgIHJldHVybiBnZXRFbmFibGVkRm9udFNpemUoZm9udEZhbWlseSkubWFwKChmb250V2VpZ2h0KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGZvbnRXZWlnaHQudG9TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZU5hbWU6IGZvbnRXZWlnaHQudG9TdHJpbmcoKSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZW5hYmxlZEZvbnRXZWlnaHRMaXN0ID0gZ2V0RW5hYmxlZEZvbnRTaXplKGZvbnRGYW1pbHkpO1xuICAgIGlmIChlbmFibGVkRm9udFdlaWdodExpc3QuaW5kZXhPZihmb250V2VpZ2h0KSA9PT0gLTEpIHtcbiAgICAgIHNldEZvbnRXZWlnaHQoZW5hYmxlZEZvbnRXZWlnaHRMaXN0WzBdKTtcbiAgICB9XG4gIH0sIFtmb250RmFtaWx5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAyODtcbiAgICBzZXRGb250U2l6ZShkZWZhdWx0VmFsdWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRm9udFNpemVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRGb250U2l6ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udEZhbWlseUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZvbnROYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0Rm9udEZhbWlseShmb250TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udFdlaWdodENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEZvbnRXZWlnaHQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvbnRDb2xvckNoYW5nZSA9IChjb2xvcikgPT4ge1xuICAgIHNldEZvbnRDb2xvcihjb2xvci5yZ2IpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJhY2tncm91bmRDb2xvckNoYW5nZSA9IChjb2xvcikgPT4ge1xuICAgIHNldEJhY2tncm91bmRDb2xvcihjb2xvci5yZ2IpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVuYWJsZWRTaG93TWlsbGlzZWNvbmRzID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5jaGVja2VkKTtcbiAgICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyhlLnRhcmdldC5jaGVja2VkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ1wiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzZXR0aW5nLWxlZ2VuZFwiPmZvbnQ8L2xlZ2VuZD5cbiAgICAgICAgPGRsIGNsYXNzTmFtZT1cInNldHRpbmctZm9udFwiPlxuICAgICAgICAgIDxTZWxlY3RDb250cm9sIHRpdGxlPVwiZm9udC1mYW1pbHlcIiBkZWZhdWx0VmFsdWU9e2ZvbnRGYW1pbHlPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250RmFtaWx5T3B0aW9uTGlzdH0gbmFtZT1cImZvbnQtZmFtaWx5XCIgb25DaGFuZ2U9e2hhbmRsZUZvbnRGYW1pbHlDaGFuZ2V9IC8+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LXNpemVcIiBkZWZhdWx0VmFsdWU9e2ZvbnRTaXplT3B0aW9uTGlzdFswXX0gb3B0aW9ucz17Zm9udFNpemVPcHRpb25MaXN0fSBuYW1lPVwiZm9udC1zaXplXCIgb25DaGFuZ2U9e2hhbmRsZUZvbnRTaXplQ2hhbmdlfSAvPlxuICAgICAgICAgIDxTZWxlY3RDb250cm9sIHRpdGxlPVwiZm9udC13ZWlnaHRcIiBkZWZhdWx0VmFsdWU9e2ZvbnRXZWlnaHRPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250V2VpZ2h0T3B0aW9uTGlzdH0gbmFtZT1cImZvbnQtd2VpZ2h0XCIgb25DaGFuZ2U9e2hhbmRsZUZvbnRXZWlnaHRDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGw+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJjb25maWdcIj5Db2xvcjwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY29sb3JcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj5mb250LWNvbG9yPC9zcGFuPlxuICAgICAgICAgICAgPFNrZXRjaFBpY2tlciBjb2xvcj17Zm9udENvbG9yfSBvbkNoYW5nZT17aGFuZGxlRm9udENvbG9yQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtY29sb3JcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj5iYWNrZ3JvdW5kLWNvbG9yPC9zcGFuPlxuICAgICAgICAgICAgPFNrZXRjaFBpY2tlciBjb2xvcj17YmFja2dyb3VuZENvbG9yfSBvbkNoYW5nZT17aGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJzZXR0aW5nLWZpZWxkc2V0XCI+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwiY29uZmlnXCI+ZmllbGQ8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm1pbGxpc2Vjb25kc1wiIGNoZWNrZWQ9e2VuYWJsZWRTaG93TWlsbGlzZWNvbmRzfSBvbkNoYW5nZT17aGFuZGxlRW5hYmxlZFNob3dNaWxsaXNlY29uZHN9IC8+XG4gICAgICAgICAgICA8c3Bhbj5zaG93IG1pbGxpc2Vjb25kczwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5TZXR0aW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3RDb250cm9sOiBSZWFjdC5GQzxTZWxlY3RDb250cm9sUHJvcHM+ID0gKHsgdGl0bGUsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgb3B0aW9ucywgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBbbG9jYWxUaXRsZSwgc2V0TG9jYWxUaXRsZV0gPSB1c2VTdGF0ZSh0aXRsZSk7XG5cbiAgY29uc3QgY3JlYXRlT3B0aW9uVGFnID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic2V0dGluZy1mb250X3RpdGxlXCI+e3RpdGxlfTwvZHQ+XG4gICAgICAgIDxkZCBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnRfZGV0YWlsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnQtZmFtaWx5XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlLnZhbHVlfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9PlxuICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gb3B0aW9ucy5tYXAoKHsgdmFsdWUsIHZhbHVlTmFtZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0ga2V5PXt2YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiA8PntvcHRpb25zLmxlbmd0aCA+IDAgPyBjcmVhdGVPcHRpb25UYWcoKSA6IG51bGx9PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q29udHJvbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlc3RQcm9wcyBmcm9tICd+L2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCc7XG4vL2ltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vZmVhdHVyZXMvdGVzdC9hY3Rpb24udHMnO1xuXG5jb25zdCBUZXN0OiBSZWFjdC5GQzxJVGVzdFN0YXRlICYgSVRlc3RIYW5kbGVyPiA9ICh7IHRleHQsIHNldFRleHQsIGFwaVJlc3VsdCwgYXN5bmNHZXREYXRhIH0pID0+IHtcbiAgY29uc3QgW2xvY2FsVGV4dCwgc2V0TG9jYWxUZXh0XSA9IHVzZVN0YXRlKHRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g6Z2e5ZCM5pyf56K66KqN55SoXG4gICAgLy9hc3luY0dldERhdGEoJy9yZWFjdC1zdGF0ZS8nKTtcbiAgICBhc3luY0dldERhdGEoKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGV4dChsb2NhbFRleHQpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2xvY2FsVGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsb2NhbFRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYWxUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8cD7jgrXjg7zjg5Djgr/jgqTjg6DvvJp7YXBpUmVzdWx0fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgU2NyZWVuIGZyb20gJ34vY29tcG9uZW50cy9zY3JlZW4udHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS5zY3JlZW5TZXR0aW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PiB8IFRodW5rRGlzcGF0Y2g8SUFzeW5jR2V0RGF0YVBhcmFtcywgSUFzeW5jRGF0YUdldFJlc3VsdCwgYW55PikgPT4ge1xuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2NyZWVuKTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldEZvbnRTaXplLCBzZXRGb250V2VpZ2h0LCBzZXRGb250RmFtaWx5LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSBmcm9tICd+L2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMnO1xuXG5pbXBvcnQgU2NyZWVuU2V0dGluZyBmcm9tICd+L2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLnNjcmVlblNldHRpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0Rm9udFNpemU6IChudW06IHN0cmluZyB8IG51bWJlcikgPT4gZGlzcGF0Y2goc2V0Rm9udFNpemUobnVtKSksXG4gICAgc2V0Rm9udEZhbWlseTogKG51bTogc3RyaW5nKSA9PiBkaXNwYXRjaChzZXRGb250RmFtaWx5KG51bSkpLFxuICAgIHNldEZvbnRXZWlnaHQ6IChudW06IHN0cmluZyB8IG51bWJlcikgPT4gZGlzcGF0Y2goc2V0Rm9udFdlaWdodChudW0pKSxcbiAgICBzZXRGb250Q29sb3I6IChjb2xvcjogSUNvbG9yKSA9PiBkaXNwYXRjaChzZXRGb250Q29sb3IoY29sb3IpKSxcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3I6IChjb2xvcjogSUNvbG9yKSA9PiBkaXNwYXRjaChzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpKSxcbiAgICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kczogKGlzRW5hYmxlZDogYm9vbGVhbikgPT4gZGlzcGF0Y2goc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMoaXNFbmFibGVkKSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTY3JlZW5TZXR0aW5nKTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vZmVhdHVyZXMvdGVzdC90ZXN0UmVkdWNlci50cyc7XG5cbmltcG9ydCBUZXN0IGZyb20gJ34vY29tcG9uZW50cy90ZXN0LnRzeCc7XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uYXBwU3RhdGUudGVzdCxcbiAgfTtcbn07XG5cbi8vIFRodW5rRGlzcGF0Y2jjga7lvJXmlbDjga7lnovkvZXmjIflrprjgZnjgozjgbDjgojjgYTjgYvjgojjgY/jgo/jgYvjgonjgarjgYvjgaPjgZ/jgIFleHRyYUFyZ3VtZW5044Gu5Z6L44Gr44Gq44KM44Gw44GE44GE44Go44GK44KC44GG44KT44Gg44GR44GpXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0VGV4dDogKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0VGV4dCh0ZXh0KSk7XG4gICAgfSxcbiAgICBhc3luY0dldERhdGE6ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goYXN5bmNHZXREYXRhKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVNjcmVlblN0YXRlID0ge307XG5cbmNvbnN0IHNjcmVlblN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnc2NyZWVuJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2NyZWVuU3RhdGUucmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVNjcmVlblNldHRpbmdTdGF0ZSA9IHtcbiAgZm9udFNpemU6IDI4LFxuICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgZm9udENvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDEgfSxcbiAgYmFja2dyb3VuZENvbG9yOiB7IHI6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDEgfSxcbiAgZW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IHRydWUsXG59O1xuXG5jb25zdCB0ZXN0U3RhdGUgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdzY3JlZW5TZXR0aW5nJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEZvbnRTaXplOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBjb25zdCBmb250U2l6ZSA9IHR5cGVvZiBwYXlsb2FkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHBheWxvYWQsIDEwKSA6IHBheWxvYWQ7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udFNpemUgfTtcbiAgICB9LFxuICAgIHNldEZvbnRGYW1pbHk6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb250RmFtaWx5OiBwYXlsb2FkIH07XG4gICAgfSxcbiAgICBzZXRGb250V2VpZ2h0OiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBjb25zdCBmb250V2VpZ2h0ID0gdHlwZW9mIHBheWxvYWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQocGF5bG9hZCwgMTApIDogcGF5bG9hZDtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb250V2VpZ2h0IH07XG4gICAgfSxcbiAgICBzZXRGb250Q29sb3I6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb250Q29sb3I6IHBheWxvYWQgfTtcbiAgICB9LFxuICAgIHNldEJhY2tncm91bmRDb2xvcjogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJhY2tncm91bmRDb2xvcjogcGF5bG9hZCB9O1xuICAgIH0sXG4gICAgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbmFibGVkU2hvd01pbGxpc2Vjb25kczogcGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0Rm9udFNpemUsIHNldEZvbnRGYW1pbHksIHNldEZvbnRXZWlnaHQsIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9ID0gdGVzdFN0YXRlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3RTdGF0ZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVRlc3RTdGF0ZSA9IHtcbiAgdGV4dDogJ2ZpcnN0IGltcHJlc3Npb24nLFxuICBhcGlFbmRwb2ludDogJycsXG4gIGFwaVJlc3VsdDogJycsXG59O1xuXG50eXBlIGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZSA9IHtcbiAgZGF0ZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGFzeW5jR2V0RGF0YSA9IGNyZWF0ZUFzeW5jVGh1bms8aGVhZFNlcnZlclRpbWVSZXR1cm5UeXBlPihcbiAgJ3NlcnZlcnRpbWUvaGVhZCcsXG4gIGFzeW5jICgpOiBQcm9taXNlPGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZT4gPT4ge1xuICAgIGNvbnN0IGFzeW5jUmVzcCA9IGF3YWl0IGF4aW9zLmhlYWQoJy4vJyk7XG5cbiAgICAvLyDpgYXlu7bjga7li5XkvZzjgpLnorroqo3jgZnjgovjgZ/jgoHjgavnhKHnkIbjgoTjgorpgYXlu7ZcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGFzeW5jUmVzcC5oZWFkZXJzLmRhdGUsXG4gICAgfTtcbiAgfVxuKTtcblxuY29uc3QgdGVzdFN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAndGVzdCcsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRUZXh0KHN0YXRlOiBJVGVzdFN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRleHQ6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcblxuICAvLyByZWR1eC10aHVua1xuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIC8vLy8ge3t7IHR5cGVzY3JpcG9044Gg44Go5Z6L44GM44GG44G+44GP6KGM44GL44Ga44CB44GT44Gu5pu444GN5pa544Gv44Gn44GN44Gq44GE44G944GEXG4gICAgLy8gIFtgJHthc3luY0dldERhdGEuZnVsZmlsbGVkfWBdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIC8vICAgIHJldHVybiB7XG4gICAgLy8gICAgICAuLi5zdGF0ZSxcbiAgICAvLyAgICB9O1xuICAgIC8vICB9LFxuICAgIC8vLy8gfX19XG4gICAgYnVpbGRlci5hZGRDYXNlKGFzeW5jR2V0RGF0YS5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvcGVuZGluZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvZnVsZmlsbGVkXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXBpUmVzdWx0OiBhY3Rpb24ucGF5bG9hZC5kYXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoYXN5bmNHZXREYXRhLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvcmVqZWN0ZWRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRUZXh0IH0gPSB0ZXN0U3RhdGUuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgdGVzdFN0YXRlLnJlZHVjZXI7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElGb250U2V0IHtcbiAgZm9udE5hbWU6IHN0cmluZztcbiAgZm9udHNpemVsaXN0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxURk9OVF9GQU1JTElFU19MSVNUOiBJRm9udFNldFtdID0gW1xuICB7XG4gICAgZm9udE5hbWU6ICdzYW5zLXNlcmlmJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ3NlcmlmJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ21vbm9zcGFjZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVNfTElTVDogSUZvbnRTZXRbXSA9IFtcbiAgLy8gZm9udFxuICB7XG4gICAgZm9udE5hbWU6ICdPcmJpdHJvbicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdXYWxscG9ldCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1JvYm90bycsXG4gICAgZm9udHNpemVsaXN0OiAnMSwzLDcsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ09zd2FsZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMiwzLDQsNiw3LDUnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYWxzYW1pcSBTYW5zJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdBbnRvbicsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhcmxvdyBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUGF0cmljayBIYW5kJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FjcmFtZW50bycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1BvaXJldCBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQcmVzcyBTdGFydCAyUCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdDaGFrcmEgUGV0Y2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzMsNCw1LDYsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhbG9vIENoZXR0YW4gMicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQ29kYScsXG4gICAgZm9udHNpemVsaXN0OiAnNCw4JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgU2VtaSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgRXh0cmEgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0FsZHJpY2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTdGFyZG9zIFN0ZW5jaWwnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ01lZ3JpbScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0ljZWxhbmQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYXJwYW5jaCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTaG9qdW1hcnUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdMb25kcmluYSBPdXRsaW5lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnR2VvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTGlicmUgQmFyY29kZSAzOSBFeHRlbmRlZCBUZXh0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnVHVscGVuIE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRk9OVF9GQU1JTElFU19MSVNUID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChERUZBVUxURk9OVF9GQU1JTElFU19MSVNULCBXRUJGT05UX0ZBTUlMSUVTX0xJU1QpO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFUyA9IFdFQkZPTlRfRkFNSUxJRVNfTElTVC5tYXAoKHsgZm9udE5hbWUsIGZvbnRzaXplbGlzdCB9OiBJRm9udFNldCkgPT4ge1xuICBjb25zdCByZXBsYWNlZEZvbnRTaXplTGlzdCA9IGZvbnRzaXplbGlzdC5yZXBsYWNlKC8oXFxkKS9nLCAnJDEwMCcpO1xuICByZXR1cm4gYCR7Zm9udE5hbWV9OiR7cmVwbGFjZWRGb250U2l6ZUxpc3R9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgRk9OVF9OQU1FX0xJU1QgPSBGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lIH06IElGb250U2V0KSA9PiB7XG4gIHJldHVybiBgJHtmb250TmFtZX1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRFbmFibGVkRm9udFNpemUgPSAoZm9udE5hbWU6IHN0cmluZyk6IG51bWJlcltdIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gRk9OVF9GQU1JTElFU19MSVNULmZpbHRlcigoZm9udHNldCkgPT4ge1xuICAgIHJldHVybiBmb250c2V0LmZvbnROYW1lID09PSBmb250TmFtZTtcbiAgfSk7XG5cbiAgaWYgKCFmaWx0ZXJlZExpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkTGlzdFswXS5mb250c2l6ZWxpc3RcbiAgICAucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKVxuICAgIC5zcGxpdCgnLCcpXG4gICAgLm1hcCgodmFsKSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xuaW1wb3J0IHsgV0VCRk9OVF9GQU1JTElFUyB9IGZyb20gJ34vZm9udC50cyc7XG5cbi8vaW1wb3J0IFwifi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJ34vQXBwLnRzeCc7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbldlYkZvbnQubG9hZCh7XG4gIGdvb2dsZToge1xuICAgIGZhbWlsaWVzOiBXRUJGT05UX0ZBTUlMSUVTLFxuICB9LFxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJ34vcm9vdFJlZHVjZXInO1xuXG5pbXBvcnQgdGVzdFJlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyJztcbmltcG9ydCBzY3JlZW5SZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXInO1xuaW1wb3J0IHNjcmVlblNldHRpbmdSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuU2V0dGluZy9zY3JlZW5TZXR0aW5nUmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHRlc3Q6IHRlc3RSZWR1Y2VyLFxuICAgIHNjcmVlbjogc2NyZWVuUmVkdWNlcixcbiAgICBzY3JlZW5TZXR0aW5nOiBzY3JlZW5TZXR0aW5nUmVkdWNlcixcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
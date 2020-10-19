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
    builder.addCase(asyncGetData.pending, function (state) {
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
    builder.addCase(asyncGetData.rejected, function (state) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlYW5zL0NvbG9yVG9SR0JBLnRzIiwid2VicGFjazovLy8uL3NyYy9iZWFucy9aZXJvUGFkZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JlZW5QYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0Q29udHJvbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvc2NyZWVuU2V0dGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7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O0FBRUE7Q0FHQTs7QUFDQTtBQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtBQUVBLG9EQUFPLENBQUMsSUFBUixDQUFhO0FBQ1gsUUFBTSxFQUFFO0FBQ04sWUFBUSxFQUFFLHlEQUFnQjtBQURwQjtBQURHLENBQWI7QUFNQSxnREFBUSxDQUFDLE1BQVQsQ0FBZ0IsMkRBQUMsZ0RBQUQsRUFBSSxJQUFKLENBQWhCLEVBQXlCLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFZSxzSUFBYyxDQUFDO0FBQzVCLFNBQU8sRUFBRTtBQUNQLFFBQUksRUFBRSxrRUFEQztBQUVQLFVBQU0sRUFBRSxzRUFGRDtBQUdQLGlCQUFhLEVBQUUsb0ZBQW9CO0FBSDVCO0FBRG1CLENBQUQsQ0FBN0IsRSIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJqcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wiY2xvY2tcIl0gPSB3aW5kb3dbXCJjbG9ja1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c3hcIixcImpzL3ZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICd+L3N0b3JlLnRzJztcblxuLy8gY29udGFpbmVyXG5pbXBvcnQgU2NyZWVuIGZyb20gJ34vY29udGFpbmVyL3NjcmVlbi9pbmRleC50c3gnO1xuaW1wb3J0IFNjcmVlblNldHRpbmcgZnJvbSAnfi9jb250YWluZXIvc2NyZWVuU2V0dGluZy9pbmRleC50c3gnO1xuaW1wb3J0IFRlc3QgZnJvbSAnfi9jb250YWluZXIvdGVzdC9pbmRleC50c3gnO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxTY3JlZW4gLz5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgLz5cbiAgICAgICAgPFNjcmVlblNldHRpbmcgLz5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgLz5cbiAgICAgICAgPFRlc3Q+PC9UZXN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IHIsIGcsIGIsIGEgfTogSUNvbG9yKSA9PiB7XG4gIGNvbnNvbGUubG9nKHIsIGcsIGIsIGEpO1xuICByZXR1cm4gYHJnYmEoICR7cn0sJHtnfSwke2J9LCR7YX0pYDtcbn07XG4iLCIvKipcbiAqIDDoqbDjgoHjg5Xjgqnjg7zjg57jg4Pjg4hcbiAqIEBwYXJhbSAge051bWJlcn0gbnVtICBudW1iZXIgb3Igc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG4gIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IChJbiBhbiBlcnJvciwgJ2ZhbHNlJyBpcyByZXR1cm5lZC4gKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVplcm9QYWRkaW5nIHtcbiAgbnVtOiBzdHJpbmcgfCBudW1iZXI7XG4gIG1pbmltYW1EaXNpdDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBudW0sIG1pbmltYW1EaXNpdCB9OiBJWmVyb1BhZGRpbmcpID0+IHtcbiAgbGV0IHJlc3VsdDtcbiAgc3dpdGNoICh0eXBlb2YgbnVtKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJlc3VsdCA9IG51bTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXN1bHQgPSBudW0udG9TdHJpbmcoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCBtaW5pbWFtRGlzaXQpIHtcbiAgICByZXN1bHQgPSAnMCcgKyByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgWmVyb1BhZGlkbmcgZnJvbSAnfi9iZWFucy9aZXJvUGFkZGluZy50cyc7XG5pbXBvcnQgQ29sb3JUb1JHQkEgZnJvbSAnLi9Db2xvclRvUkdCQSc7XG5cbmV4cG9ydCB7IFplcm9QYWRpZG5nLCBDb2xvclRvUkdCQSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfSBmcm9tICdiZWF1dGlmdWwtcmVhY3QtaG9va3MnO1xuaW1wb3J0IFNjcmVlblBhbmVsIGZyb20gJ34vY29tcG9uZW50cy9zY3JlZW5QYW5lbC50c3gnO1xuXG5pbXBvcnQgeyBaZXJvUGFkaWRuZywgQ29sb3JUb1JHQkEgfSBmcm9tICd+L2JlYW5zLyc7XG5cbmV4cG9ydCBpbnRlcmZhY2Ugc2NyZWVuUHJvcHMge31cblxuY29uc3QgU2NyZWVuOiBSZWFjdC5GQzxzY3JlZW5Qcm9wcyAmIElTY3JlZW5TZXR0aW5nU3RhdGU+ID0gKHsgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRXZWlnaHQsIGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCBlbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9KSA9PiB7XG4gIGNvbnN0IFtzdHlsZU9iamVjdCwgc2V0U3R5bGVPYmplY3RdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IFtoaDEsIHNldEhoMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2hoMiwgc2V0SGgyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbW0xLCBzZXRNbTFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttbTIsIHNldE1tMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzMSwgc2V0U3MxXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3MyLCBzZXRTczJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzc3MxLCBzZXRTc3MxXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3NzMiwgc2V0U3NzMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzczMsIHNldFNzczNdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBpbmNyZW1lbnQ6IDAuNSxcbiAgICBzdGFydEF0OiAwLFxuICAgIGZpbmlzaEF0OiAtMSxcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaCA9IHVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSgocHJvZ3Jlc3MsIG5leHQpID0+IHtcbiAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xuICAgIG5leHQoKTtcbiAgfSwgb3B0aW9ucyk7XG5cbiAgb25GaW5pc2goKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdmaW5pc2gnKTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdHlsZU9iamVjdCh7XG4gICAgICAuLi5zdHlsZU9iamVjdCxcbiAgICAgIGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsXG4gICAgICBmb250RmFtaWx5LFxuICAgICAgZm9udFdlaWdodCxcbiAgICAgIGNvbG9yOiBDb2xvclRvUkdCQShmb250Q29sb3IpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBDb2xvclRvUkdCQShiYWNrZ3JvdW5kQ29sb3IpLFxuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRXZWlnaHQsIGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoaCA9IFplcm9QYWRpZG5nKHsgbnVtOiBkYXRlLmdldEhvdXJzKCksIG1pbmltYW1EaXNpdDogMiB9KTtcbiAgICBjb25zdCBtbSA9IFplcm9QYWRpZG5nKHsgbnVtOiBkYXRlLmdldE1pbnV0ZXMoKSwgbWluaW1hbURpc2l0OiAyIH0pO1xuICAgIGNvbnN0IHNzID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0U2Vjb25kcygpLCBtaW5pbWFtRGlzaXQ6IDIgfSk7XG4gICAgY29uc3Qgc3NzID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIG1pbmltYW1EaXNpdDogMyB9KTtcblxuICAgIHNldEhoMShoaFswXSk7XG4gICAgc2V0SGgyKGhoWzFdKTtcbiAgICBzZXRNbTEobW1bMF0pO1xuICAgIHNldE1tMihtbVsxXSk7XG4gICAgc2V0U3MxKHNzWzBdKTtcbiAgICBzZXRTczIoc3NbMV0pO1xuICAgIHNldFNzczEoc3NzWzBdKTtcbiAgICBzZXRTc3MyKHNzc1sxXSk7XG4gICAgc2V0U3NzMyhzc3NbMl0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJoaDFcIiBudW09e2hoMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJoaDJcIiBudW09e2hoMn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tY29sb25cIj46PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cIm1tMVwiIG51bT17bW0xfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cIm1tMlwiIG51bT17bW0yfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1jb2xvblwiPjo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3MxXCIgbnVtPXtzczF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3MyXCIgbnVtPXtzczJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlbmFibGVkU2hvd01pbGxpc2Vjb25kcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzc3MxXCIgbnVtPXtzc3MxfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzczJcIiBudW09e3NzczJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3NzM1wiIG51bT17c3NzM30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNjcmVlblBhbmVsOiBSZWFjdC5GQzxTY3JlZW5QYW5lbFByb3BzPiA9ICh7IHR5cGUsIG51bSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHNjcmVlbi1wYW5lbC0ke3R5cGV9YH0+e251bX08L3NwYW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2NyZWVuUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTY3JlZW5QYW5lbCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNrZXRjaFBpY2tlciB9IGZyb20gJ3JlYWN0LWNvbG9yJztcblxuaW1wb3J0IHsgRk9OVF9OQU1FX0xJU1QsIGdldEVuYWJsZWRGb250U2l6ZSB9IGZyb20gJ34vZm9udC50cyc7XG5cbmltcG9ydCBTZWxlY3RDb250cm9sIGZyb20gJ34vY29tcG9uZW50cy9zZWxlY3RDb250cm9sL2luZGV4LnRzeCc7XG5cbmNvbnN0IFNjcmVlblNldHRpbmc6IFJlYWN0LkZDPElTY3JlZW5TZXR0aW5nU3RhdGUgJiBJU2NyZWVuU2V0dGluZ0hhbmRsZXI+ID0gKHsgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRXZWlnaHQsIGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCBlbmFibGVkU2hvd01pbGxpc2Vjb25kcywgc2V0Rm9udFNpemUsIHNldEZvbnRGYW1pbHksIHNldEZvbnRXZWlnaHQsIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9KSA9PiB7XG4gIGNvbnN0IFttaW5Gb250U2l6ZV0gPSB1c2VTdGF0ZShmb250U2l6ZSk7XG4gIGNvbnN0IFttYXhGb250U2l6ZV0gPSB1c2VTdGF0ZSgxMDApO1xuXG4gIGNvbnN0IFtmb250RmFtaWx5T3B0aW9uTGlzdCwgc2V0Rm9udEZhbWlseU9wdGlvbnNdID0gdXNlU3RhdGUoW10gYXMgSU9wdGlvbltdKTtcbiAgY29uc3QgW2ZvbnRTaXplT3B0aW9uTGlzdCwgc2V0Rm9udFNpemVPcHRpb25MaXN0XSA9IHVzZVN0YXRlKFtdIGFzIElPcHRpb25bXSk7XG4gIGNvbnN0IFtmb250V2VpZ2h0T3B0aW9uTGlzdCwgc2V0Rm9udFdlaWdodE9wdGlvbkxpc3RdID0gdXNlU3RhdGUoW10gYXMgSU9wdGlvbltdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvbnRGYW1pbHlPcHRpb25zKFxuICAgICAgRk9OVF9OQU1FX0xJU1QubWFwKChmb250TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBmb250TmFtZSxcbiAgICAgICAgICB2YWx1ZU5hbWU6IGZvbnROYW1lLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgc2V0Rm9udFNpemVPcHRpb25MaXN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogSU9wdGlvbltdID0gW107XG4gICAgICBmb3IgKGxldCBpbmRleCA9IG1pbkZvbnRTaXplOyBpbmRleCA8IG1heEZvbnRTaXplOyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZU5hbWU6IGluZGV4LnRvU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvbnRGYW1pbHlPcHRpb25MaXN0Lmxlbmd0aCkge1xuICAgICAgc2V0Rm9udEZhbWlseShmb250RmFtaWx5T3B0aW9uTGlzdFswXS52YWx1ZSk7XG4gICAgfVxuICB9LCBbZm9udEZhbWlseU9wdGlvbkxpc3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZvbnRGYW1pbHkpO1xuXG4gICAgc2V0Rm9udFdlaWdodE9wdGlvbkxpc3QoKCkgPT4ge1xuICAgICAgcmV0dXJuIGdldEVuYWJsZWRGb250U2l6ZShmb250RmFtaWx5KS5tYXAoKGZvbnRXZWlnaHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogZm9udFdlaWdodC50b1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlTmFtZTogZm9udFdlaWdodC50b1N0cmluZygpLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbmFibGVkRm9udFdlaWdodExpc3QgPSBnZXRFbmFibGVkRm9udFNpemUoZm9udEZhbWlseSk7XG4gICAgaWYgKGVuYWJsZWRGb250V2VpZ2h0TGlzdC5pbmRleE9mKGZvbnRXZWlnaHQpID09PSAtMSkge1xuICAgICAgc2V0Rm9udFdlaWdodChlbmFibGVkRm9udFdlaWdodExpc3RbMF0pO1xuICAgIH1cbiAgfSwgW2ZvbnRGYW1pbHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IDI4O1xuICAgIHNldEZvbnRTaXplKGRlZmF1bHRWYWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVGb250U2l6ZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEZvbnRTaXplKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb250RmFtaWx5Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgZm9udE5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRGb250RmFtaWx5KGZvbnROYW1lKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb250V2VpZ2h0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0Rm9udFdlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udENvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0Rm9udENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5hYmxlZFNob3dNaWxsaXNlY29uZHMgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzKGUudGFyZ2V0LmNoZWNrZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nXCI+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNldHRpbmctbGVnZW5kXCI+Zm9udDwvbGVnZW5kPlxuICAgICAgICA8ZGwgY2xhc3NOYW1lPVwic2V0dGluZy1mb250XCI+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LWZhbWlseVwiIGRlZmF1bHRWYWx1ZT17Zm9udEZhbWlseU9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRGYW1pbHlPcHRpb25MaXN0fSBuYW1lPVwiZm9udC1mYW1pbHlcIiBvbkNoYW5nZT17aGFuZGxlRm9udEZhbWlseUNoYW5nZX0gLz5cbiAgICAgICAgICA8U2VsZWN0Q29udHJvbCB0aXRsZT1cImZvbnQtc2l6ZVwiIGRlZmF1bHRWYWx1ZT17Zm9udFNpemVPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250U2l6ZU9wdGlvbkxpc3R9IG5hbWU9XCJmb250LXNpemVcIiBvbkNoYW5nZT17aGFuZGxlRm9udFNpemVDaGFuZ2V9IC8+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LXdlaWdodFwiIGRlZmF1bHRWYWx1ZT17Zm9udFdlaWdodE9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRXZWlnaHRPcHRpb25MaXN0fSBuYW1lPVwiZm9udC13ZWlnaHRcIiBvbkNoYW5nZT17aGFuZGxlRm9udFdlaWdodENoYW5nZX0gLz5cbiAgICAgICAgPC9kbD5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cImNvbmZpZ1wiPkNvbG9yPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmZvbnQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtmb250Q29sb3J9IG9uQ2hhbmdlPXtoYW5kbGVGb250Q29sb3JDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmJhY2tncm91bmQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IG9uQ2hhbmdlPXtoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJjb25maWdcIj5maWVsZDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwibWlsbGlzZWNvbmRzXCIgY2hlY2tlZD17ZW5hYmxlZFNob3dNaWxsaXNlY29uZHN9IG9uQ2hhbmdlPXtoYW5kbGVFbmFibGVkU2hvd01pbGxpc2Vjb25kc30gLz5cbiAgICAgICAgICAgIDxzcGFuPnNob3cgbWlsbGlzZWNvbmRzPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlblNldHRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdENvbnRyb2w6IFJlYWN0LkZDPFNlbGVjdENvbnRyb2xQcm9wcz4gPSAoeyB0aXRsZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtsb2NhbFRpdGxlLCBzZXRMb2NhbFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcblxuICBjb25zdCBjcmVhdGVPcHRpb25UYWcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkdCBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnRfdGl0bGVcIj57dGl0bGV9PC9kdD5cbiAgICAgICAgPGRkIGNsYXNzTmFtZT1cInNldHRpbmctZm9udF9kZXRhaWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZm9udC1mYW1pbHlcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWUudmFsdWV9IG5hbWU9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBvcHRpb25zLm1hcCgoeyB2YWx1ZSwgdmFsdWVOYW1lIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWVOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kZD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIDw+e29wdGlvbnMubGVuZ3RoID4gMCA/IGNyZWF0ZU9wdGlvblRhZygpIDogbnVsbH08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDb250cm9sO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVzdFByb3BzIGZyb20gJ34vY29udGFpbmVyL3Rlc3QvaW5kZXgudHN4Jztcbi8vaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy90ZXN0L2FjdGlvbi50cyc7XG5cbmNvbnN0IFRlc3Q6IFJlYWN0LkZDPElUZXN0U3RhdGUgJiBJVGVzdEhhbmRsZXI+ID0gKHsgdGV4dCwgc2V0VGV4dCwgYXBpUmVzdWx0LCBhc3luY0dldERhdGEgfSkgPT4ge1xuICBjb25zdCBbbG9jYWxUZXh0LCBzZXRMb2NhbFRleHRdID0gdXNlU3RhdGUodGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDpnZ7lkIzmnJ/norroqo3nlKhcbiAgICAvL2FzeW5jR2V0RGF0YSgnL3JlYWN0LXN0YXRlLycpO1xuICAgIGFzeW5jR2V0RGF0YSgpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUZXh0KGxvY2FsVGV4dCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbbG9jYWxUZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xvY2FsVGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2NhbFRleHQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPHA+e3RleHR9PC9wPlxuICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgLz5cbiAgICAgIDxwPuOCteODvOODkOOCv+OCpOODoO+8mnthcGlSZXN1bHR9PC9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCBTY3JlZW4gZnJvbSAnfi9jb21wb25lbnRzL3NjcmVlbi50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLnNjcmVlblNldHRpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTY3JlZW4pO1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IHsgc2V0Rm9udFNpemUsIHNldEZvbnRXZWlnaHQsIHNldEZvbnRGYW1pbHksIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9IGZyb20gJ34vZmVhdHVyZXMvc2NyZWVuU2V0dGluZy9zY3JlZW5TZXR0aW5nUmVkdWNlci50cyc7XG5cbmltcG9ydCBTY3JlZW5TZXR0aW5nIGZyb20gJ34vY29tcG9uZW50cy9zY3JlZW5TZXR0aW5nLnRzeCc7XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uYXBwU3RhdGUuc2NyZWVuU2V0dGluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRGb250U2l6ZTogKG51bTogc3RyaW5nIHwgbnVtYmVyKSA9PiBkaXNwYXRjaChzZXRGb250U2l6ZShudW0pKSxcbiAgICBzZXRGb250RmFtaWx5OiAobnVtOiBzdHJpbmcpID0+IGRpc3BhdGNoKHNldEZvbnRGYW1pbHkobnVtKSksXG4gICAgc2V0Rm9udFdlaWdodDogKG51bTogc3RyaW5nIHwgbnVtYmVyKSA9PiBkaXNwYXRjaChzZXRGb250V2VpZ2h0KG51bSkpLFxuICAgIHNldEZvbnRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IGRpc3BhdGNoKHNldEZvbnRDb2xvcihjb2xvcikpLFxuICAgIHNldEJhY2tncm91bmRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IGRpc3BhdGNoKHNldEJhY2tncm91bmRDb2xvcihjb2xvcikpLFxuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiAoaXNFbmFibGVkOiBib29sZWFuKSA9PiBkaXNwYXRjaChzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyhpc0VuYWJsZWQpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNjcmVlblNldHRpbmcpO1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyLnRzJztcblxuaW1wb3J0IFRlc3QgZnJvbSAnfi9jb21wb25lbnRzL3Rlc3QudHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS50ZXN0LFxuICB9O1xufTtcblxuLy8gVGh1bmtEaXNwYXRjaOOBruW8leaVsOOBruWei+S9leaMh+WumuOBmeOCjOOBsOOCiOOBhOOBi+OCiOOBj+OCj+OBi+OCieOBquOBi+OBo+OBn+OAgWV4dHJhQXJndW1lbnTjga7lnovjgavjgarjgozjgbDjgYTjgYTjgajjgYrjgoLjgYbjgpPjgaDjgZHjgalcbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRUZXh0OiAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRUZXh0KHRleHQpKTtcbiAgICB9LFxuICAgIGFzeW5jR2V0RGF0YTogKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChhc3luY0dldERhdGEoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3QpO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJU2NyZWVuU3RhdGUgPSB7fTtcblxuY29uc3Qgc2NyZWVuU3RhdGUgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdzY3JlZW4nLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7fSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzY3JlZW5TdGF0ZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJU2NyZWVuU2V0dGluZ1N0YXRlID0ge1xuICBmb250U2l6ZTogMjgsXG4gIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgZm9udFdlaWdodDogNDAwLFxuICBmb250Q29sb3I6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMSB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHsgcjogMjU1LCBnOiAyNTUsIGI6IDI1NSwgYTogMSB9LFxuICBlbmFibGVkU2hvd01pbGxpc2Vjb25kczogdHJ1ZSxcbn07XG5cbmNvbnN0IHRlc3RTdGF0ZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3NjcmVlblNldHRpbmcnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0Rm9udFNpemU6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnN0IGZvbnRTaXplID0gdHlwZW9mIHBheWxvYWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQocGF5bG9hZCwgMTApIDogcGF5bG9hZDtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb250U2l6ZSB9O1xuICAgIH0sXG4gICAgc2V0Rm9udEZhbWlseTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRGYW1pbHk6IHBheWxvYWQgfTtcbiAgICB9LFxuICAgIHNldEZvbnRXZWlnaHQ6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChwYXlsb2FkLCAxMCkgOiBwYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRXZWlnaHQgfTtcbiAgICB9LFxuICAgIHNldEZvbnRDb2xvcjogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRDb2xvcjogcGF5bG9hZCB9O1xuICAgIH0sXG4gICAgc2V0QmFja2dyb3VuZENvbG9yOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYmFja2dyb3VuZENvbG9yOiBwYXlsb2FkIH07XG4gICAgfSxcbiAgICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kczogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiBwYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRGb250U2l6ZSwgc2V0Rm9udEZhbWlseSwgc2V0Rm9udFdlaWdodCwgc2V0Rm9udENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3IsIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0gPSB0ZXN0U3RhdGUuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgdGVzdFN0YXRlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJVGVzdFN0YXRlID0ge1xuICB0ZXh0OiAnZmlyc3QgaW1wcmVzc2lvbicsXG4gIGFwaUVuZHBvaW50OiAnJyxcbiAgYXBpUmVzdWx0OiAnJyxcbn07XG5cbnR5cGUgaGVhZFNlcnZlclRpbWVSZXR1cm5UeXBlID0ge1xuICBkYXRlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgYXN5bmNHZXREYXRhID0gY3JlYXRlQXN5bmNUaHVuazxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+KFxuICAnc2VydmVydGltZS9oZWFkJyxcbiAgYXN5bmMgKCk6IFByb21pc2U8aGVhZFNlcnZlclRpbWVSZXR1cm5UeXBlPiA9PiB7XG4gICAgY29uc3QgYXN5bmNSZXNwID0gYXdhaXQgYXhpb3MuaGVhZCgnLi8nKTtcblxuICAgIC8vIOmBheW7tuOBruWLleS9nOOCkueiuuiqjeOBmeOCi+OBn+OCgeOBq+eEoeeQhuOChOOCiumBheW7tlxuICAgIGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBhc3luY1Jlc3AuaGVhZGVycy5kYXRlLFxuICAgIH07XG4gIH1cbik7XG5cbmNvbnN0IHRlc3RTdGF0ZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Rlc3QnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0VGV4dChzdGF0ZTogSVRlc3RTdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0ZXh0OiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG5cbiAgLy8gcmVkdXgtdGh1bmtcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAvLy8vIHt7eyB0eXBlc2NyaXBvdOOBoOOBqOWei+OBjOOBhuOBvuOBj+ihjOOBi+OBmuOAgeOBk+OBruabuOOBjeaWueOBr+OBp+OBjeOBquOBhOOBveOBhFxuICAgIC8vICBbYCR7YXN5bmNHZXREYXRhLmZ1bGZpbGxlZH1gXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAvLyAgICByZXR1cm4ge1xuICAgIC8vICAgICAgLi4uc3RhdGUsXG4gICAgLy8gICAgfTtcbiAgICAvLyAgfSxcbiAgICAvLy8vIH19fVxuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICAgIC8vIC0+IHNlcnZlcnRpbWUvaGVhZC9wZW5kaW5nXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFzeW5jR2V0RGF0YS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICAgIC8vIC0+IHNlcnZlcnRpbWUvaGVhZC9mdWxmaWxsZWRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhcGlSZXN1bHQ6IGFjdGlvbi5wYXlsb2FkLmRhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvcmVqZWN0ZWRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRUZXh0IH0gPSB0ZXN0U3RhdGUuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgdGVzdFN0YXRlLnJlZHVjZXI7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElGb250U2V0IHtcbiAgZm9udE5hbWU6IHN0cmluZztcbiAgZm9udHNpemVsaXN0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxURk9OVF9GQU1JTElFU19MSVNUOiBJRm9udFNldFtdID0gW1xuICB7XG4gICAgZm9udE5hbWU6ICdzYW5zLXNlcmlmJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ3NlcmlmJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ21vbm9zcGFjZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVNfTElTVDogSUZvbnRTZXRbXSA9IFtcbiAgLy8gZm9udFxuICB7XG4gICAgZm9udE5hbWU6ICdPcmJpdHJvbicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdXYWxscG9ldCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1JvYm90bycsXG4gICAgZm9udHNpemVsaXN0OiAnMSwzLDcsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ09zd2FsZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMiwzLDQsNiw3LDUnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYWxzYW1pcSBTYW5zJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdBbnRvbicsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhcmxvdyBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUGF0cmljayBIYW5kJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FjcmFtZW50bycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1BvaXJldCBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQcmVzcyBTdGFydCAyUCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdDaGFrcmEgUGV0Y2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzMsNCw1LDYsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhbG9vIENoZXR0YW4gMicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQ29kYScsXG4gICAgZm9udHNpemVsaXN0OiAnNCw4JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgU2VtaSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgRXh0cmEgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0FsZHJpY2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTdGFyZG9zIFN0ZW5jaWwnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ01lZ3JpbScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0ljZWxhbmQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYXJwYW5jaCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTaG9qdW1hcnUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdMb25kcmluYSBPdXRsaW5lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnR2VvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTGlicmUgQmFyY29kZSAzOSBFeHRlbmRlZCBUZXh0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnVHVscGVuIE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRk9OVF9GQU1JTElFU19MSVNUID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChERUZBVUxURk9OVF9GQU1JTElFU19MSVNULCBXRUJGT05UX0ZBTUlMSUVTX0xJU1QpO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFUyA9IFdFQkZPTlRfRkFNSUxJRVNfTElTVC5tYXAoKHsgZm9udE5hbWUsIGZvbnRzaXplbGlzdCB9OiBJRm9udFNldCkgPT4ge1xuICBjb25zdCByZXBsYWNlZEZvbnRTaXplTGlzdCA9IGZvbnRzaXplbGlzdC5yZXBsYWNlKC8oXFxkKS9nLCAnJDEwMCcpO1xuICByZXR1cm4gYCR7Zm9udE5hbWV9OiR7cmVwbGFjZWRGb250U2l6ZUxpc3R9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgRk9OVF9OQU1FX0xJU1QgPSBGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lIH06IElGb250U2V0KSA9PiB7XG4gIHJldHVybiBgJHtmb250TmFtZX1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRFbmFibGVkRm9udFNpemUgPSAoZm9udE5hbWU6IHN0cmluZyk6IG51bWJlcltdIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gRk9OVF9GQU1JTElFU19MSVNULmZpbHRlcigoZm9udHNldCkgPT4ge1xuICAgIHJldHVybiBmb250c2V0LmZvbnROYW1lID09PSBmb250TmFtZTtcbiAgfSk7XG5cbiAgaWYgKCFmaWx0ZXJlZExpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkTGlzdFswXS5mb250c2l6ZWxpc3RcbiAgICAucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKVxuICAgIC5zcGxpdCgnLCcpXG4gICAgLm1hcCgodmFsKSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xuaW1wb3J0IHsgV0VCRk9OVF9GQU1JTElFUyB9IGZyb20gJ34vZm9udC50cyc7XG5cbi8vaW1wb3J0IFwifi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJ34vQXBwLnRzeCc7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbldlYkZvbnQubG9hZCh7XG4gIGdvb2dsZToge1xuICAgIGZhbWlsaWVzOiBXRUJGT05UX0ZBTUlMSUVTLFxuICB9LFxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJ34vcm9vdFJlZHVjZXInO1xuXG5pbXBvcnQgdGVzdFJlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyJztcbmltcG9ydCBzY3JlZW5SZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXInO1xuaW1wb3J0IHNjcmVlblNldHRpbmdSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuU2V0dGluZy9zY3JlZW5TZXR0aW5nUmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHRlc3Q6IHRlc3RSZWR1Y2VyLFxuICAgIHNjcmVlbjogc2NyZWVuUmVkdWNlcixcbiAgICBzY3JlZW5TZXR0aW5nOiBzY3JlZW5TZXR0aW5nUmVkdWNlcixcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
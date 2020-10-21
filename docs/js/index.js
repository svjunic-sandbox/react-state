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
    })); // eslint-disable-next-line react-app/react-hooks/exhaustive-deps
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
    setSss3(sss[2]); // eslint-disable-next-line react-app/react-hooks/exhaustive-deps
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
  var fontFamily = _ref.fontFamily,
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(14),
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
    }); // eslint-disable-next-line react-app/react-hooks/exhaustive-deps
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (fontFamilyOptionList.length) {
      setFontFamily(fontFamilyOptionList[0].value);
    }
  }, [fontFamilyOptionList, setFontFamily]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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
  }, [fontFamily, fontWeight, setFontWeight]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var defaultValue = 28;
    setFontSize(defaultValue);
  }, [setFontSize]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlYW5zL0NvbG9yVG9SR0JBLnRzIiwid2VicGFjazovLy8uL3NyYy9iZWFucy9aZXJvUGFkZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JlZW5QYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0Q29udHJvbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvc2NyZWVuU2V0dGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7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QUVBO0NBR0E7O0FBQ0E7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQVo7QUFFQSxvREFBTyxDQUFDLElBQVIsQ0FBYTtBQUNYLFFBQU0sRUFBRTtBQUNOLFlBQVEsRUFBRSx5REFBZ0I7QUFEcEI7QUFERyxDQUFiO0FBTUEsZ0RBQVEsQ0FBQyxNQUFULENBQWdCLDJEQUFDLGdEQUFELEVBQUksSUFBSixDQUFoQixFQUF5QixRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRWUsc0lBQWMsQ0FBQztBQUM1QixTQUFPLEVBQUU7QUFDUCxRQUFJLEVBQUUsa0VBREM7QUFFUCxVQUFNLEVBQUUsc0VBRkQ7QUFHUCxpQkFBYSxFQUFFLG9GQUFvQjtBQUg1QjtBQURtQixDQUFELENBQTdCLEUiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwianMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcImNsb2NrXCJdID0gd2luZG93W1wiY2xvY2tcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJqcy92ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnfi9zdG9yZS50cyc7XG5cbi8vIGNvbnRhaW5lclxuaW1wb3J0IFNjcmVlbiBmcm9tICd+L2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4JztcbmltcG9ydCBTY3JlZW5TZXR0aW5nIGZyb20gJ34vY29udGFpbmVyL3NjcmVlblNldHRpbmcvaW5kZXgudHN4JztcbmltcG9ydCBUZXN0IGZyb20gJ34vY29udGFpbmVyL3Rlc3QvaW5kZXgudHN4JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8U2NyZWVuIC8+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICAgIDxTY3JlZW5TZXR0aW5nIC8+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICAgIDxUZXN0PjwvVGVzdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJleHBvcnQgZGVmYXVsdCAoeyByLCBnLCBiLCBhIH06IElDb2xvcikgPT4ge1xuICBjb25zb2xlLmxvZyhyLCBnLCBiLCBhKTtcbiAgcmV0dXJuIGByZ2JhKCAke3J9LCR7Z30sJHtifSwke2F9KWA7XG59O1xuIiwiLyoqXG4gKiAw6Kmw44KB44OV44Kp44O844Oe44OD44OIXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG51bSAgbnVtYmVyIG9yIHN0cmluZ1xuICogQHBhcmFtICB7TnVtYmVyfSBuICBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICogQHJldHVybiB7U3RyaW5nfSAoSW4gYW4gZXJyb3IsICdmYWxzZScgaXMgcmV0dXJuZWQuIClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElaZXJvUGFkZGluZyB7XG4gIG51bTogc3RyaW5nIHwgbnVtYmVyO1xuICBtaW5pbWFtRGlzaXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgbnVtLCBtaW5pbWFtRGlzaXQgfTogSVplcm9QYWRkaW5nKSA9PiB7XG4gIGxldCByZXN1bHQ7XG4gIHN3aXRjaCAodHlwZW9mIG51bSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXN1bHQgPSBudW07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmVzdWx0ID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgbWluaW1hbURpc2l0KSB7XG4gICAgcmVzdWx0ID0gJzAnICsgcmVzdWx0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFplcm9QYWRpZG5nIGZyb20gJ34vYmVhbnMvWmVyb1BhZGRpbmcudHMnO1xuaW1wb3J0IENvbG9yVG9SR0JBIGZyb20gJy4vQ29sb3JUb1JHQkEnO1xuXG5leHBvcnQgeyBaZXJvUGFkaWRuZywgQ29sb3JUb1JHQkEgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lIH0gZnJvbSAnYmVhdXRpZnVsLXJlYWN0LWhvb2tzJztcbmltcG9ydCBTY3JlZW5QYW5lbCBmcm9tICd+L2NvbXBvbmVudHMvc2NyZWVuUGFuZWwudHN4JztcblxuaW1wb3J0IHsgWmVyb1BhZGlkbmcsIENvbG9yVG9SR0JBIH0gZnJvbSAnfi9iZWFucy8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIHNjcmVlblByb3BzIHt9XG5cbmNvbnN0IFNjcmVlbjogUmVhY3QuRkM8c2NyZWVuUHJvcHMgJiBJU2NyZWVuU2V0dGluZ1N0YXRlPiA9ICh7IGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvciwgZW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSkgPT4ge1xuICBjb25zdCBbc3R5bGVPYmplY3QsIHNldFN0eWxlT2JqZWN0XSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBbaGgxLCBzZXRIaDFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtoaDIsIHNldEhoMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21tMSwgc2V0TW0xXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbW0yLCBzZXRNbTJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzczEsIHNldFNzMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzMiwgc2V0U3MyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3NzMSwgc2V0U3NzMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzczIsIHNldFNzczJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzc3MzLCBzZXRTc3MzXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgaW5jcmVtZW50OiAwLjUsXG4gICAgc3RhcnRBdDogMCxcbiAgICBmaW5pc2hBdDogLTEsXG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSB1c2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHByb2dyZXNzOiBGbG9hdDMyTGlzdCwgbmV4dDogRnVuY3Rpb24pID0+IHtcbiAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xuICAgIG5leHQoKTtcbiAgfSwgb3B0aW9ucyk7XG5cbiAgb25GaW5pc2goKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdmaW5pc2gnKTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdHlsZU9iamVjdCh7XG4gICAgICAuLi5zdHlsZU9iamVjdCxcbiAgICAgIGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsXG4gICAgICBmb250RmFtaWx5LFxuICAgICAgZm9udFdlaWdodCxcbiAgICAgIGNvbG9yOiBDb2xvclRvUkdCQShmb250Q29sb3IpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBDb2xvclRvUkdCQShiYWNrZ3JvdW5kQ29sb3IpLFxuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWFwcC9yZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2ZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGggPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRIb3VycygpLCBtaW5pbWFtRGlzaXQ6IDIgfSk7XG4gICAgY29uc3QgbW0gPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRNaW51dGVzKCksIG1pbmltYW1EaXNpdDogMiB9KTtcbiAgICBjb25zdCBzcyA9IFplcm9QYWRpZG5nKHsgbnVtOiBkYXRlLmdldFNlY29uZHMoKSwgbWluaW1hbURpc2l0OiAyIH0pO1xuICAgIGNvbnN0IHNzcyA9IFplcm9QYWRpZG5nKHsgbnVtOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpLCBtaW5pbWFtRGlzaXQ6IDMgfSk7XG5cbiAgICBzZXRIaDEoaGhbMF0pO1xuICAgIHNldEhoMihoaFsxXSk7XG4gICAgc2V0TW0xKG1tWzBdKTtcbiAgICBzZXRNbTIobW1bMV0pO1xuICAgIHNldFNzMShzc1swXSk7XG4gICAgc2V0U3MyKHNzWzFdKTtcbiAgICBzZXRTc3MxKHNzc1swXSk7XG4gICAgc2V0U3NzMihzc3NbMV0pO1xuICAgIHNldFNzczMoc3NzWzJdKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1hcHAvcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlblwiIHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cImhoMVwiIG51bT17aGgxfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cImhoMlwiIG51bT17aGgyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1jb2xvblwiPjo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwibW0xXCIgbnVtPXttbTF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwibW0yXCIgbnVtPXttbTJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLWNvbG9uXCI+OjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzczFcIiBudW09e3NzMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzczJcIiBudW09e3NzMn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge2VuYWJsZWRTaG93TWlsbGlzZWNvbmRzID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzczFcIiBudW09e3NzczF9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3NzMlwiIG51bT17c3NzMn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzc3MzXCIgbnVtPXtzc3MzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2NyZWVuUGFuZWw6IFJlYWN0LkZDPFNjcmVlblBhbmVsUHJvcHM+ID0gKHsgdHlwZSwgbnVtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc2NyZWVuLXBhbmVsLSR7dHlwZX1gfT57bnVtfTwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTY3JlZW5QYW5lbCk7XG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNjcmVlblBhbmVsKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sb3JSZXN1bHQsIFNrZXRjaFBpY2tlciB9IGZyb20gJ3JlYWN0LWNvbG9yJztcblxuaW1wb3J0IHsgRk9OVF9OQU1FX0xJU1QsIGdldEVuYWJsZWRGb250U2l6ZSB9IGZyb20gJ34vZm9udC50cyc7XG5cbmltcG9ydCBTZWxlY3RDb250cm9sIGZyb20gJ34vY29tcG9uZW50cy9zZWxlY3RDb250cm9sL2luZGV4LnRzeCc7XG5cbmNvbnN0IFNjcmVlblNldHRpbmc6IFJlYWN0LkZDPElTY3JlZW5TZXR0aW5nU3RhdGUgJiBJU2NyZWVuU2V0dGluZ0hhbmRsZXI+ID0gKHsgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzLCBzZXRGb250U2l6ZSwgc2V0Rm9udEZhbWlseSwgc2V0Rm9udFdlaWdodCwgc2V0Rm9udENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3IsIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0pID0+IHtcbiAgY29uc3QgW21pbkZvbnRTaXplXSA9IHVzZVN0YXRlKDE0KTtcbiAgY29uc3QgW21heEZvbnRTaXplXSA9IHVzZVN0YXRlKDEwMCk7XG5cbiAgY29uc3QgW2ZvbnRGYW1pbHlPcHRpb25MaXN0LCBzZXRGb250RmFtaWx5T3B0aW9uc10gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuICBjb25zdCBbZm9udFNpemVPcHRpb25MaXN0LCBzZXRGb250U2l6ZU9wdGlvbkxpc3RdID0gdXNlU3RhdGUoW10gYXMgSU9wdGlvbltdKTtcbiAgY29uc3QgW2ZvbnRXZWlnaHRPcHRpb25MaXN0LCBzZXRGb250V2VpZ2h0T3B0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9udEZhbWlseU9wdGlvbnMoXG4gICAgICBGT05UX05BTUVfTElTVC5tYXAoKGZvbnROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGZvbnROYW1lLFxuICAgICAgICAgIHZhbHVlTmFtZTogZm9udE5hbWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBzZXRGb250U2l6ZU9wdGlvbkxpc3QoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0OiBJT3B0aW9uW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gbWluRm9udFNpemU7IGluZGV4IDwgbWF4Rm9udFNpemU7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlTmFtZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWFwcC9yZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvbnRGYW1pbHlPcHRpb25MaXN0Lmxlbmd0aCkge1xuICAgICAgc2V0Rm9udEZhbWlseShmb250RmFtaWx5T3B0aW9uTGlzdFswXS52YWx1ZSk7XG4gICAgfVxuICB9LCBbZm9udEZhbWlseU9wdGlvbkxpc3QsIHNldEZvbnRGYW1pbHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvbnRXZWlnaHRPcHRpb25MaXN0KCgpID0+IHtcbiAgICAgIHJldHVybiBnZXRFbmFibGVkRm9udFNpemUoZm9udEZhbWlseSkubWFwKChmb250V2VpZ2h0KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGZvbnRXZWlnaHQudG9TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZU5hbWU6IGZvbnRXZWlnaHQudG9TdHJpbmcoKSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZW5hYmxlZEZvbnRXZWlnaHRMaXN0ID0gZ2V0RW5hYmxlZEZvbnRTaXplKGZvbnRGYW1pbHkpO1xuICAgIGlmIChlbmFibGVkRm9udFdlaWdodExpc3QuaW5kZXhPZihmb250V2VpZ2h0KSA9PT0gLTEpIHtcbiAgICAgIHNldEZvbnRXZWlnaHQoZW5hYmxlZEZvbnRXZWlnaHRMaXN0WzBdKTtcbiAgICB9XG4gIH0sIFtmb250RmFtaWx5LCBmb250V2VpZ2h0LCBzZXRGb250V2VpZ2h0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAyODtcbiAgICBzZXRGb250U2l6ZShkZWZhdWx0VmFsdWUpO1xuICB9LCBbc2V0Rm9udFNpemVdKTtcblxuICBjb25zdCBoYW5kbGVGb250U2l6ZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEZvbnRTaXplKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb250RmFtaWx5Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgZm9udE5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRGb250RmFtaWx5KGZvbnROYW1lKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb250V2VpZ2h0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0Rm9udFdlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udENvbG9yQ2hhbmdlID0gKGNvbG9yOiBDb2xvclJlc3VsdCkgPT4ge1xuICAgIHNldEZvbnRDb2xvcihjb2xvci5yZ2IpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJhY2tncm91bmRDb2xvckNoYW5nZSA9IChjb2xvcjogQ29sb3JSZXN1bHQpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IucmdiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbmFibGVkU2hvd01pbGxpc2Vjb25kcyA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzKGUudGFyZ2V0LmNoZWNrZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nXCI+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNldHRpbmctbGVnZW5kXCI+Zm9udDwvbGVnZW5kPlxuICAgICAgICA8ZGwgY2xhc3NOYW1lPVwic2V0dGluZy1mb250XCI+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LWZhbWlseVwiIGRlZmF1bHRWYWx1ZT17Zm9udEZhbWlseU9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRGYW1pbHlPcHRpb25MaXN0fSBuYW1lPVwiZm9udC1mYW1pbHlcIiBvbkNoYW5nZT17aGFuZGxlRm9udEZhbWlseUNoYW5nZX0gLz5cbiAgICAgICAgICA8U2VsZWN0Q29udHJvbCB0aXRsZT1cImZvbnQtc2l6ZVwiIGRlZmF1bHRWYWx1ZT17Zm9udFNpemVPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250U2l6ZU9wdGlvbkxpc3R9IG5hbWU9XCJmb250LXNpemVcIiBvbkNoYW5nZT17aGFuZGxlRm9udFNpemVDaGFuZ2V9IC8+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LXdlaWdodFwiIGRlZmF1bHRWYWx1ZT17Zm9udFdlaWdodE9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRXZWlnaHRPcHRpb25MaXN0fSBuYW1lPVwiZm9udC13ZWlnaHRcIiBvbkNoYW5nZT17aGFuZGxlRm9udFdlaWdodENoYW5nZX0gLz5cbiAgICAgICAgPC9kbD5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cImNvbmZpZ1wiPkNvbG9yPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmZvbnQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtmb250Q29sb3J9IG9uQ2hhbmdlPXtoYW5kbGVGb250Q29sb3JDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmJhY2tncm91bmQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IG9uQ2hhbmdlPXtoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJjb25maWdcIj5maWVsZDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwibWlsbGlzZWNvbmRzXCIgY2hlY2tlZD17ZW5hYmxlZFNob3dNaWxsaXNlY29uZHN9IG9uQ2hhbmdlPXtoYW5kbGVFbmFibGVkU2hvd01pbGxpc2Vjb25kc30gLz5cbiAgICAgICAgICAgIDxzcGFuPnNob3cgbWlsbGlzZWNvbmRzPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlblNldHRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdENvbnRyb2w6IFJlYWN0LkZDPFNlbGVjdENvbnRyb2xQcm9wcz4gPSAoeyB0aXRsZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtsb2NhbFRpdGxlLCBzZXRMb2NhbFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcblxuICBjb25zdCBjcmVhdGVPcHRpb25UYWcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkdCBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnRfdGl0bGVcIj57dGl0bGV9PC9kdD5cbiAgICAgICAgPGRkIGNsYXNzTmFtZT1cInNldHRpbmctZm9udF9kZXRhaWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZm9udC1mYW1pbHlcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWUudmFsdWV9IG5hbWU9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBvcHRpb25zLm1hcCgoeyB2YWx1ZSwgdmFsdWVOYW1lIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWVOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kZD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIDw+e29wdGlvbnMubGVuZ3RoID4gMCA/IGNyZWF0ZU9wdGlvblRhZygpIDogbnVsbH08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDb250cm9sO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVzdFByb3BzIGZyb20gJ34vY29udGFpbmVyL3Rlc3QvaW5kZXgudHN4Jztcbi8vaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy90ZXN0L2FjdGlvbi50cyc7XG5cbmNvbnN0IFRlc3Q6IFJlYWN0LkZDPElUZXN0U3RhdGUgJiBJVGVzdEhhbmRsZXI+ID0gKHsgdGV4dCwgc2V0VGV4dCwgYXBpUmVzdWx0LCBhc3luY0dldERhdGEgfSkgPT4ge1xuICBjb25zdCBbbG9jYWxUZXh0LCBzZXRMb2NhbFRleHRdID0gdXNlU3RhdGUodGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDpnZ7lkIzmnJ/norroqo3nlKhcbiAgICAvL2FzeW5jR2V0RGF0YSgnL3JlYWN0LXN0YXRlLycpO1xuICAgIGFzeW5jR2V0RGF0YSgpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUZXh0KGxvY2FsVGV4dCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbbG9jYWxUZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xvY2FsVGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2NhbFRleHQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPHA+e3RleHR9PC9wPlxuICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgLz5cbiAgICAgIDxwPuOCteODvOODkOOCv+OCpOODoO+8mnthcGlSZXN1bHR9PC9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCBTY3JlZW4gZnJvbSAnfi9jb21wb25lbnRzL3NjcmVlbi50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLnNjcmVlblNldHRpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTY3JlZW4pO1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IHsgc2V0Rm9udFNpemUsIHNldEZvbnRXZWlnaHQsIHNldEZvbnRGYW1pbHksIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9IGZyb20gJ34vZmVhdHVyZXMvc2NyZWVuU2V0dGluZy9zY3JlZW5TZXR0aW5nUmVkdWNlci50cyc7XG5cbmltcG9ydCBTY3JlZW5TZXR0aW5nIGZyb20gJ34vY29tcG9uZW50cy9zY3JlZW5TZXR0aW5nLnRzeCc7XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uYXBwU3RhdGUuc2NyZWVuU2V0dGluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRGb250U2l6ZTogKG51bTogc3RyaW5nIHwgbnVtYmVyKSA9PiBkaXNwYXRjaChzZXRGb250U2l6ZShudW0pKSxcbiAgICBzZXRGb250RmFtaWx5OiAobnVtOiBzdHJpbmcpID0+IGRpc3BhdGNoKHNldEZvbnRGYW1pbHkobnVtKSksXG4gICAgc2V0Rm9udFdlaWdodDogKG51bTogc3RyaW5nIHwgbnVtYmVyKSA9PiBkaXNwYXRjaChzZXRGb250V2VpZ2h0KG51bSkpLFxuICAgIHNldEZvbnRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IGRpc3BhdGNoKHNldEZvbnRDb2xvcihjb2xvcikpLFxuICAgIHNldEJhY2tncm91bmRDb2xvcjogKGNvbG9yOiBJQ29sb3IpID0+IGRpc3BhdGNoKHNldEJhY2tncm91bmRDb2xvcihjb2xvcikpLFxuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiAoaXNFbmFibGVkOiBib29sZWFuKSA9PiBkaXNwYXRjaChzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyhpc0VuYWJsZWQpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNjcmVlblNldHRpbmcpO1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyLnRzJztcblxuaW1wb3J0IFRlc3QgZnJvbSAnfi9jb21wb25lbnRzL3Rlc3QudHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS50ZXN0LFxuICB9O1xufTtcblxuLy8gVGh1bmtEaXNwYXRjaOOBruW8leaVsOOBruWei+S9leaMh+WumuOBmeOCjOOBsOOCiOOBhOOBi+OCiOOBj+OCj+OBi+OCieOBquOBi+OBo+OBn+OAgWV4dHJhQXJndW1lbnTjga7lnovjgavjgarjgozjgbDjgYTjgYTjgajjgYrjgoLjgYbjgpPjgaDjgZHjgalcbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRUZXh0OiAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRUZXh0KHRleHQpKTtcbiAgICB9LFxuICAgIGFzeW5jR2V0RGF0YTogKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChhc3luY0dldERhdGEoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3QpO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJU2NyZWVuU3RhdGUgPSB7fTtcblxuY29uc3Qgc2NyZWVuU3RhdGUgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdzY3JlZW4nLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7fSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzY3JlZW5TdGF0ZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJU2NyZWVuU2V0dGluZ1N0YXRlID0ge1xuICBmb250U2l6ZTogMjgsXG4gIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgZm9udFdlaWdodDogNDAwLFxuICBmb250Q29sb3I6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMSB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHsgcjogMjU1LCBnOiAyNTUsIGI6IDI1NSwgYTogMSB9LFxuICBlbmFibGVkU2hvd01pbGxpc2Vjb25kczogdHJ1ZSxcbn07XG5cbmNvbnN0IHRlc3RTdGF0ZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3NjcmVlblNldHRpbmcnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0Rm9udFNpemU6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnN0IGZvbnRTaXplID0gdHlwZW9mIHBheWxvYWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQocGF5bG9hZCwgMTApIDogcGF5bG9hZDtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb250U2l6ZSB9O1xuICAgIH0sXG4gICAgc2V0Rm9udEZhbWlseTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRGYW1pbHk6IHBheWxvYWQgfTtcbiAgICB9LFxuICAgIHNldEZvbnRXZWlnaHQ6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSB0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChwYXlsb2FkLCAxMCkgOiBwYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRXZWlnaHQgfTtcbiAgICB9LFxuICAgIHNldEZvbnRDb2xvcjogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRDb2xvcjogcGF5bG9hZCB9O1xuICAgIH0sXG4gICAgc2V0QmFja2dyb3VuZENvbG9yOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYmFja2dyb3VuZENvbG9yOiBwYXlsb2FkIH07XG4gICAgfSxcbiAgICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kczogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiBwYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRGb250U2l6ZSwgc2V0Rm9udEZhbWlseSwgc2V0Rm9udFdlaWdodCwgc2V0Rm9udENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3IsIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0gPSB0ZXN0U3RhdGUuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgdGVzdFN0YXRlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJVGVzdFN0YXRlID0ge1xuICB0ZXh0OiAnZmlyc3QgaW1wcmVzc2lvbicsXG4gIGFwaUVuZHBvaW50OiAnJyxcbiAgYXBpUmVzdWx0OiAnJyxcbn07XG5cbnR5cGUgaGVhZFNlcnZlclRpbWVSZXR1cm5UeXBlID0ge1xuICBkYXRlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgYXN5bmNHZXREYXRhID0gY3JlYXRlQXN5bmNUaHVuazxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+KFxuICAnc2VydmVydGltZS9oZWFkJyxcbiAgYXN5bmMgKCk6IFByb21pc2U8aGVhZFNlcnZlclRpbWVSZXR1cm5UeXBlPiA9PiB7XG4gICAgY29uc3QgYXN5bmNSZXNwID0gYXdhaXQgYXhpb3MuaGVhZCgnLi8nKTtcblxuICAgIC8vIOmBheW7tuOBruWLleS9nOOCkueiuuiqjeOBmeOCi+OBn+OCgeOBq+eEoeeQhuOChOOCiumBheW7tlxuICAgIGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBhc3luY1Jlc3AuaGVhZGVycy5kYXRlLFxuICAgIH07XG4gIH1cbik7XG5cbmNvbnN0IHRlc3RTdGF0ZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Rlc3QnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0VGV4dChzdGF0ZTogSVRlc3RTdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0ZXh0OiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG5cbiAgLy8gcmVkdXgtdGh1bmtcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAvLy8vIHt7eyB0eXBlc2NyaXBvdOOBoOOBqOWei+OBjOOBhuOBvuOBj+ihjOOBi+OBmuOAgeOBk+OBruabuOOBjeaWueOBr+OBp+OBjeOBquOBhOOBveOBhFxuICAgIC8vICBbYCR7YXN5bmNHZXREYXRhLmZ1bGZpbGxlZH1gXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAvLyAgICByZXR1cm4ge1xuICAgIC8vICAgICAgLi4uc3RhdGUsXG4gICAgLy8gICAgfTtcbiAgICAvLyAgfSxcbiAgICAvLy8vIH19fVxuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICAgIC8vIC0+IHNlcnZlcnRpbWUvaGVhZC9wZW5kaW5nXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFzeW5jR2V0RGF0YS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICAgIC8vIC0+IHNlcnZlcnRpbWUvaGVhZC9mdWxmaWxsZWRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhcGlSZXN1bHQ6IGFjdGlvbi5wYXlsb2FkLmRhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvcmVqZWN0ZWRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRUZXh0IH0gPSB0ZXN0U3RhdGUuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgdGVzdFN0YXRlLnJlZHVjZXI7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElGb250U2V0IHtcbiAgZm9udE5hbWU6IHN0cmluZztcbiAgZm9udHNpemVsaXN0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxURk9OVF9GQU1JTElFU19MSVNUOiBJRm9udFNldFtdID0gW1xuICB7XG4gICAgZm9udE5hbWU6ICdzYW5zLXNlcmlmJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ3NlcmlmJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ21vbm9zcGFjZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVNfTElTVDogSUZvbnRTZXRbXSA9IFtcbiAgLy8gZm9udFxuICB7XG4gICAgZm9udE5hbWU6ICdPcmJpdHJvbicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdXYWxscG9ldCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1JvYm90bycsXG4gICAgZm9udHNpemVsaXN0OiAnMSwzLDcsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ09zd2FsZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMiwzLDQsNiw3LDUnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYWxzYW1pcSBTYW5zJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdBbnRvbicsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhcmxvdyBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUGF0cmljayBIYW5kJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FjcmFtZW50bycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1BvaXJldCBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQcmVzcyBTdGFydCAyUCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdDaGFrcmEgUGV0Y2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzMsNCw1LDYsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhbG9vIENoZXR0YW4gMicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQ29kYScsXG4gICAgZm9udHNpemVsaXN0OiAnNCw4JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgU2VtaSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgRXh0cmEgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0FsZHJpY2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTdGFyZG9zIFN0ZW5jaWwnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ01lZ3JpbScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0ljZWxhbmQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYXJwYW5jaCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTaG9qdW1hcnUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdMb25kcmluYSBPdXRsaW5lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnR2VvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTGlicmUgQmFyY29kZSAzOSBFeHRlbmRlZCBUZXh0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnVHVscGVuIE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRk9OVF9GQU1JTElFU19MSVNUID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChERUZBVUxURk9OVF9GQU1JTElFU19MSVNULCBXRUJGT05UX0ZBTUlMSUVTX0xJU1QpO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFUyA9IFdFQkZPTlRfRkFNSUxJRVNfTElTVC5tYXAoKHsgZm9udE5hbWUsIGZvbnRzaXplbGlzdCB9OiBJRm9udFNldCkgPT4ge1xuICBjb25zdCByZXBsYWNlZEZvbnRTaXplTGlzdCA9IGZvbnRzaXplbGlzdC5yZXBsYWNlKC8oXFxkKS9nLCAnJDEwMCcpO1xuICByZXR1cm4gYCR7Zm9udE5hbWV9OiR7cmVwbGFjZWRGb250U2l6ZUxpc3R9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgRk9OVF9OQU1FX0xJU1QgPSBGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lIH06IElGb250U2V0KSA9PiB7XG4gIHJldHVybiBgJHtmb250TmFtZX1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRFbmFibGVkRm9udFNpemUgPSAoZm9udE5hbWU6IHN0cmluZyk6IG51bWJlcltdIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gRk9OVF9GQU1JTElFU19MSVNULmZpbHRlcigoZm9udHNldCkgPT4ge1xuICAgIHJldHVybiBmb250c2V0LmZvbnROYW1lID09PSBmb250TmFtZTtcbiAgfSk7XG5cbiAgaWYgKCFmaWx0ZXJlZExpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkTGlzdFswXS5mb250c2l6ZWxpc3RcbiAgICAucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKVxuICAgIC5zcGxpdCgnLCcpXG4gICAgLm1hcCgodmFsKSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xuaW1wb3J0IHsgV0VCRk9OVF9GQU1JTElFUyB9IGZyb20gJ34vZm9udC50cyc7XG5cbi8vaW1wb3J0IFwifi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJ34vQXBwLnRzeCc7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbldlYkZvbnQubG9hZCh7XG4gIGdvb2dsZToge1xuICAgIGZhbWlsaWVzOiBXRUJGT05UX0ZBTUlMSUVTLFxuICB9LFxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJ34vcm9vdFJlZHVjZXInO1xuXG5pbXBvcnQgdGVzdFJlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyJztcbmltcG9ydCBzY3JlZW5SZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXInO1xuaW1wb3J0IHNjcmVlblNldHRpbmdSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuU2V0dGluZy9zY3JlZW5TZXR0aW5nUmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHRlc3Q6IHRlc3RSZWR1Y2VyLFxuICAgIHNjcmVlbjogc2NyZWVuUmVkdWNlcixcbiAgICBzY3JlZW5TZXR0aW5nOiBzY3JlZW5TZXR0aW5nUmVkdWNlcixcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
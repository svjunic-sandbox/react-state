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
    });
  }, [minFontSize, maxFontSize]);
  var fontFamilyOptionsUpdateCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    if (fontFamilyOptionList.length) {
      setFontFamily(fontFamilyOptionList[0].value);
    }
  }, [fontFamilyOptionList, setFontFamily]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fontFamilyOptionsUpdateCallback();
  }, [fontFamilyOptionsUpdateCallback]);
  var fontWeightOptionsUpdateCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
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
    fontWeightOptionsUpdateCallback();
  }, [fontWeightOptionsUpdateCallback]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var defaultValue = 28;
    setFontSize(defaultValue);
  }, [setFontSize]);
  var handleFontSizeChangeCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    setFontSize(e.target.value);
  }, [setFontSize]);
  var handleFontFamilyChangeCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    var fontName = e.target.value;
    setFontFamily(fontName);
  }, [setFontFamily]);
  var handleFontWeightChangeCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    setFontWeight(e.target.value);
  }, [setFontWeight]);

  var handleFontColorChange = function handleFontColorChange(color) {
    setFontColor(color.rgb);
  };

  var handleBackgroundColorChange = function handleBackgroundColorChange(color) {
    setBackgroundColor(color.rgb);
  };

  var handleEnabledShowMillisecondsCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    console.log(e.target.checked);
    setEnabledShowMilliseconds(e.target.checked);
  }, [setEnabledShowMilliseconds]);
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
    onChange: handleFontFamilyChangeCallback
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "font-size",
    defaultValue: fontSizeOptionList[0],
    options: fontSizeOptionList,
    name: "font-size",
    onChange: handleFontSizeChangeCallback
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_selectControl_index_tsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "font-weight",
    defaultValue: fontWeightOptionList[0],
    options: fontWeightOptionList,
    name: "font-weight",
    onChange: handleFontWeightChangeCallback
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
    onChange: handleEnabledShowMillisecondsCallback
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "show milliseconds")))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(ScreenSetting));

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
  console.log(title, name, defaultValue, options, onChange);

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

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(SelectControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlYW5zL0NvbG9yVG9SR0JBLnRzIiwid2VicGFjazovLy8uL3NyYy9iZWFucy9aZXJvUGFkZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JlZW5QYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0Q29udHJvbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvc2NyZWVuU2V0dGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7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O0FBQ0QsR0FGb0IsQ0FBckI7O0FBSUEsTUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFsQixFQUEwQjtBQUN4QixXQUFPLFNBQVA7QUFDRDs7QUFFRCxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCLFlBQWhCLENBQ1osT0FEWSxDQUNKLE9BREksRUFDSyxNQURMLEVBRVosS0FGWSxDQUVOLEdBRk0sRUFHWixHQUhZLENBR1IsVUFBQyxHQUFELEVBQVE7QUFDWCxXQUFPLFFBQVEsQ0FBQyxHQUFELEVBQU0sRUFBTixDQUFmO0FBQ0QsR0FMWSxDQUFmO0FBT0EsU0FBTyxNQUFQO0FBQ0QsQ0FqQk0sQzs7Ozs7Ozs7Ozs7O0FDL0lQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBRUEsb0RBQU8sQ0FBQyxJQUFSLENBQWE7QUFDWCxRQUFNLEVBQUU7QUFDTixZQUFRLEVBQUUseURBQWdCO0FBRHBCO0FBREcsQ0FBYjtBQU1BLGdEQUFRLENBQUMsTUFBVCxDQUFnQiwyREFBQyxnREFBRCxFQUFJLElBQUosQ0FBaEIsRUFBeUIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVlLHNJQUFjLENBQUM7QUFDNUIsU0FBTyxFQUFFO0FBQ1AsUUFBSSxFQUFFLGtFQURDO0FBRVAsVUFBTSxFQUFFLHNFQUZEO0FBR1AsaUJBQWEsRUFBRSxvRkFBb0I7QUFINUI7QUFEbUIsQ0FBRCxDQUE3QixFIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImpzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJjbG9ja1wiXSA9IHdpbmRvd1tcImNsb2NrXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwianMvdmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ34vc3RvcmUudHMnO1xuXG4vLyBjb250YWluZXJcbmltcG9ydCBTY3JlZW4gZnJvbSAnfi9jb250YWluZXIvc2NyZWVuL2luZGV4LnRzeCc7XG5pbXBvcnQgU2NyZWVuU2V0dGluZyBmcm9tICd+L2NvbnRhaW5lci9zY3JlZW5TZXR0aW5nL2luZGV4LnRzeCc7XG5pbXBvcnQgVGVzdCBmcm9tICd+L2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPFNjcmVlbiAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8U2NyZWVuU2V0dGluZyAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8VGVzdD48L1Rlc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgciwgZywgYiwgYSB9OiBJQ29sb3IpID0+IHtcbiAgY29uc29sZS5sb2cociwgZywgYiwgYSk7XG4gIHJldHVybiBgcmdiYSggJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xufTtcbiIsIi8qKlxuICogMOipsOOCgeODleOCqeODvOODnuODg+ODiFxuICogQHBhcmFtICB7TnVtYmVyfSBudW0gIG51bWJlciBvciBzdHJpbmdcbiAqIEBwYXJhbSAge051bWJlcn0gbiAgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gKEluIGFuIGVycm9yLCAnZmFsc2UnIGlzIHJldHVybmVkLiApXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJWmVyb1BhZGRpbmcge1xuICBudW06IHN0cmluZyB8IG51bWJlcjtcbiAgbWluaW1hbURpc2l0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG51bSwgbWluaW1hbURpc2l0IH06IElaZXJvUGFkZGluZykgPT4ge1xuICBsZXQgcmVzdWx0O1xuICBzd2l0Y2ggKHR5cGVvZiBudW0pIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmVzdWx0ID0gbnVtO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJlc3VsdCA9IG51bS50b1N0cmluZygpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IG1pbmltYW1EaXNpdCkge1xuICAgIHJlc3VsdCA9ICcwJyArIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCBaZXJvUGFkaWRuZyBmcm9tICd+L2JlYW5zL1plcm9QYWRkaW5nLnRzJztcbmltcG9ydCBDb2xvclRvUkdCQSBmcm9tICcuL0NvbG9yVG9SR0JBJztcblxuZXhwb3J0IHsgWmVyb1BhZGlkbmcsIENvbG9yVG9SR0JBIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSB9IGZyb20gJ2JlYXV0aWZ1bC1yZWFjdC1ob29rcyc7XG5pbXBvcnQgU2NyZWVuUGFuZWwgZnJvbSAnfi9jb21wb25lbnRzL3NjcmVlblBhbmVsLnRzeCc7XG5cbmltcG9ydCB7IFplcm9QYWRpZG5nLCBDb2xvclRvUkdCQSB9IGZyb20gJ34vYmVhbnMvJztcblxuZXhwb3J0IGludGVyZmFjZSBzY3JlZW5Qcm9wcyB7fVxuXG5jb25zdCBTY3JlZW46IFJlYWN0LkZDPHNjcmVlblByb3BzICYgSVNjcmVlblNldHRpbmdTdGF0ZT4gPSAoeyBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0pID0+IHtcbiAgY29uc3QgW3N0eWxlT2JqZWN0LCBzZXRTdHlsZU9iamVjdF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgW2hoMSwgc2V0SGgxXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaGgyLCBzZXRIaDJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttbTEsIHNldE1tMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21tMiwgc2V0TW0yXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3MxLCBzZXRTczFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzczIsIHNldFNzMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzczEsIHNldFNzczFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzc3MyLCBzZXRTc3MyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3NzMywgc2V0U3NzM10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGluY3JlbWVudDogMC41LFxuICAgIHN0YXJ0QXQ6IDAsXG4gICAgZmluaXNoQXQ6IC0xLFxuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKChwcm9ncmVzczogRmxvYXQzMkxpc3QsIG5leHQ6IEZ1bmN0aW9uKSA9PiB7XG4gICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBuZXh0KCk7XG4gIH0sIG9wdGlvbnMpO1xuXG4gIG9uRmluaXNoKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmluaXNoJyk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3R5bGVPYmplY3Qoe1xuICAgICAgLi4uc3R5bGVPYmplY3QsXG4gICAgICBmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLFxuICAgICAgZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQsXG4gICAgICBjb2xvcjogQ29sb3JUb1JHQkEoZm9udENvbG9yKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JUb1JHQkEoYmFja2dyb3VuZENvbG9yKSxcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1hcHAvcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhoID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0SG91cnMoKSwgbWluaW1hbURpc2l0OiAyIH0pO1xuICAgIGNvbnN0IG1tID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0TWludXRlcygpLCBtaW5pbWFtRGlzaXQ6IDIgfSk7XG4gICAgY29uc3Qgc3MgPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRTZWNvbmRzKCksIG1pbmltYW1EaXNpdDogMiB9KTtcbiAgICBjb25zdCBzc3MgPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgbWluaW1hbURpc2l0OiAzIH0pO1xuXG4gICAgc2V0SGgxKGhoWzBdKTtcbiAgICBzZXRIaDIoaGhbMV0pO1xuICAgIHNldE1tMShtbVswXSk7XG4gICAgc2V0TW0yKG1tWzFdKTtcbiAgICBzZXRTczEoc3NbMF0pO1xuICAgIHNldFNzMihzc1sxXSk7XG4gICAgc2V0U3NzMShzc3NbMF0pO1xuICAgIHNldFNzczIoc3NzWzFdKTtcbiAgICBzZXRTc3MzKHNzc1syXSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtYXBwL3JlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJoaDFcIiBudW09e2hoMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJoaDJcIiBudW09e2hoMn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tY29sb25cIj46PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cIm1tMVwiIG51bT17bW0xfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cIm1tMlwiIG51bT17bW0yfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1jb2xvblwiPjo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3MxXCIgbnVtPXtzczF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3MyXCIgbnVtPXtzczJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlbmFibGVkU2hvd01pbGxpc2Vjb25kcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzc3MxXCIgbnVtPXtzc3MxfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzczJcIiBudW09e3NzczJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3NzM1wiIG51bT17c3NzM30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNjcmVlblBhbmVsOiBSZWFjdC5GQzxTY3JlZW5QYW5lbFByb3BzPiA9ICh7IHR5cGUsIG51bSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHNjcmVlbi1wYW5lbC0ke3R5cGV9YH0+e251bX08L3NwYW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2NyZWVuUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTY3JlZW5QYW5lbCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2xvclJlc3VsdCwgU2tldGNoUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InO1xuXG5pbXBvcnQgeyBGT05UX05BTUVfTElTVCwgZ2V0RW5hYmxlZEZvbnRTaXplIH0gZnJvbSAnfi9mb250LnRzJztcblxuaW1wb3J0IFNlbGVjdENvbnRyb2wgZnJvbSAnfi9jb21wb25lbnRzL3NlbGVjdENvbnRyb2wvaW5kZXgudHN4JztcblxuY29uc3QgU2NyZWVuU2V0dGluZzogUmVhY3QuRkM8SVNjcmVlblNldHRpbmdTdGF0ZSAmIElTY3JlZW5TZXR0aW5nSGFuZGxlcj4gPSAoeyBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvciwgZW5hYmxlZFNob3dNaWxsaXNlY29uZHMsIHNldEZvbnRTaXplLCBzZXRGb250RmFtaWx5LCBzZXRGb250V2VpZ2h0LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSkgPT4ge1xuICBjb25zdCBbbWluRm9udFNpemVdID0gdXNlU3RhdGUoMTQpO1xuICBjb25zdCBbbWF4Rm9udFNpemVdID0gdXNlU3RhdGUoMTAwKTtcblxuICBjb25zdCBbZm9udEZhbWlseU9wdGlvbkxpc3QsIHNldEZvbnRGYW1pbHlPcHRpb25zXSA9IHVzZVN0YXRlKFtdIGFzIElPcHRpb25bXSk7XG4gIGNvbnN0IFtmb250U2l6ZU9wdGlvbkxpc3QsIHNldEZvbnRTaXplT3B0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuICBjb25zdCBbZm9udFdlaWdodE9wdGlvbkxpc3QsIHNldEZvbnRXZWlnaHRPcHRpb25MaXN0XSA9IHVzZVN0YXRlKFtdIGFzIElPcHRpb25bXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGb250RmFtaWx5T3B0aW9ucyhcbiAgICAgIEZPTlRfTkFNRV9MSVNULm1hcCgoZm9udE5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogZm9udE5hbWUsXG4gICAgICAgICAgdmFsdWVOYW1lOiBmb250TmFtZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHNldEZvbnRTaXplT3B0aW9uTGlzdCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQ6IElPcHRpb25bXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSBtaW5Gb250U2l6ZTsgaW5kZXggPCBtYXhGb250U2l6ZTsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IGluZGV4LnRvU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWVOYW1lOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sIFttaW5Gb250U2l6ZSwgbWF4Rm9udFNpemVdKTtcblxuICBjb25zdCBmb250RmFtaWx5T3B0aW9uc1VwZGF0ZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChmb250RmFtaWx5T3B0aW9uTGlzdC5sZW5ndGgpIHtcbiAgICAgIHNldEZvbnRGYW1pbHkoZm9udEZhbWlseU9wdGlvbkxpc3RbMF0udmFsdWUpO1xuICAgIH1cbiAgfSwgW2ZvbnRGYW1pbHlPcHRpb25MaXN0LCBzZXRGb250RmFtaWx5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmb250RmFtaWx5T3B0aW9uc1VwZGF0ZUNhbGxiYWNrKCk7XG4gIH0sIFtmb250RmFtaWx5T3B0aW9uc1VwZGF0ZUNhbGxiYWNrXSk7XG5cbiAgY29uc3QgZm9udFdlaWdodE9wdGlvbnNVcGRhdGVDYWxsYmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRGb250V2VpZ2h0T3B0aW9uTGlzdCgoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0RW5hYmxlZEZvbnRTaXplKGZvbnRGYW1pbHkpLm1hcCgoZm9udFdlaWdodCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBmb250V2VpZ2h0LnRvU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWVOYW1lOiBmb250V2VpZ2h0LnRvU3RyaW5nKCksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGVuYWJsZWRGb250V2VpZ2h0TGlzdCA9IGdldEVuYWJsZWRGb250U2l6ZShmb250RmFtaWx5KTtcbiAgICBpZiAoZW5hYmxlZEZvbnRXZWlnaHRMaXN0LmluZGV4T2YoZm9udFdlaWdodCkgPT09IC0xKSB7XG4gICAgICBzZXRGb250V2VpZ2h0KGVuYWJsZWRGb250V2VpZ2h0TGlzdFswXSk7XG4gICAgfVxuICB9LCBbZm9udEZhbWlseSwgZm9udFdlaWdodCwgc2V0Rm9udFdlaWdodF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9udFdlaWdodE9wdGlvbnNVcGRhdGVDYWxsYmFjaygpO1xuICB9LCBbZm9udFdlaWdodE9wdGlvbnNVcGRhdGVDYWxsYmFja10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gMjg7XG4gICAgc2V0Rm9udFNpemUoZGVmYXVsdFZhbHVlKTtcbiAgfSwgW3NldEZvbnRTaXplXSk7XG5cbiAgY29uc3QgaGFuZGxlRm9udFNpemVDaGFuZ2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgc2V0Rm9udFNpemUoZS50YXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgW3NldEZvbnRTaXplXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUZvbnRGYW1pbHlDaGFuZ2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgZm9udE5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHNldEZvbnRGYW1pbHkoZm9udE5hbWUpO1xuICAgIH0sXG4gICAgW3NldEZvbnRGYW1pbHldXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRm9udFdlaWdodENoYW5nZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBzZXRGb250V2VpZ2h0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtzZXRGb250V2VpZ2h0XVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUZvbnRDb2xvckNoYW5nZSA9IChjb2xvcjogQ29sb3JSZXN1bHQpID0+IHtcbiAgICBzZXRGb250Q29sb3IoY29sb3IucmdiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UgPSAoY29sb3I6IENvbG9yUmVzdWx0KSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5hYmxlZFNob3dNaWxsaXNlY29uZHNDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyhlLnRhcmdldC5jaGVja2VkKTtcbiAgICB9LFxuICAgIFtzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ1wiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzZXR0aW5nLWxlZ2VuZFwiPmZvbnQ8L2xlZ2VuZD5cbiAgICAgICAgPGRsIGNsYXNzTmFtZT1cInNldHRpbmctZm9udFwiPlxuICAgICAgICAgIDxTZWxlY3RDb250cm9sIHRpdGxlPVwiZm9udC1mYW1pbHlcIiBkZWZhdWx0VmFsdWU9e2ZvbnRGYW1pbHlPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250RmFtaWx5T3B0aW9uTGlzdH0gbmFtZT1cImZvbnQtZmFtaWx5XCIgb25DaGFuZ2U9e2hhbmRsZUZvbnRGYW1pbHlDaGFuZ2VDYWxsYmFja30gLz5cbiAgICAgICAgICA8U2VsZWN0Q29udHJvbCB0aXRsZT1cImZvbnQtc2l6ZVwiIGRlZmF1bHRWYWx1ZT17Zm9udFNpemVPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250U2l6ZU9wdGlvbkxpc3R9IG5hbWU9XCJmb250LXNpemVcIiBvbkNoYW5nZT17aGFuZGxlRm9udFNpemVDaGFuZ2VDYWxsYmFja30gLz5cbiAgICAgICAgICA8U2VsZWN0Q29udHJvbCB0aXRsZT1cImZvbnQtd2VpZ2h0XCIgZGVmYXVsdFZhbHVlPXtmb250V2VpZ2h0T3B0aW9uTGlzdFswXX0gb3B0aW9ucz17Zm9udFdlaWdodE9wdGlvbkxpc3R9IG5hbWU9XCJmb250LXdlaWdodFwiIG9uQ2hhbmdlPXtoYW5kbGVGb250V2VpZ2h0Q2hhbmdlQ2FsbGJhY2t9IC8+XG4gICAgICAgIDwvZGw+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJjb25maWdcIj5Db2xvcjwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY29sb3JcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj5mb250LWNvbG9yPC9zcGFuPlxuICAgICAgICAgICAgPFNrZXRjaFBpY2tlciBjb2xvcj17Zm9udENvbG9yfSBvbkNoYW5nZT17aGFuZGxlRm9udENvbG9yQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtY29sb3JcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj5iYWNrZ3JvdW5kLWNvbG9yPC9zcGFuPlxuICAgICAgICAgICAgPFNrZXRjaFBpY2tlciBjb2xvcj17YmFja2dyb3VuZENvbG9yfSBvbkNoYW5nZT17aGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJzZXR0aW5nLWZpZWxkc2V0XCI+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwiY29uZmlnXCI+ZmllbGQ8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm1pbGxpc2Vjb25kc1wiIGNoZWNrZWQ9e2VuYWJsZWRTaG93TWlsbGlzZWNvbmRzfSBvbkNoYW5nZT17aGFuZGxlRW5hYmxlZFNob3dNaWxsaXNlY29uZHNDYWxsYmFja30gLz5cbiAgICAgICAgICAgIDxzcGFuPnNob3cgbWlsbGlzZWNvbmRzPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2NyZWVuU2V0dGluZyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3RDb250cm9sOiBSZWFjdC5GQzxTZWxlY3RDb250cm9sUHJvcHM+ID0gKHsgdGl0bGUsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgb3B0aW9ucywgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zb2xlLmxvZyh0aXRsZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSk7XG4gIGNvbnN0IGNyZWF0ZU9wdGlvblRhZyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGR0IGNsYXNzTmFtZT1cInNldHRpbmctZm9udF90aXRsZVwiPnt0aXRsZX08L2R0PlxuICAgICAgICA8ZGQgY2xhc3NOYW1lPVwic2V0dGluZy1mb250X2RldGFpbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1mb250LWZhbWlseVwiPlxuICAgICAgICAgICAgPHNlbGVjdCBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZS52YWx1ZX0gbmFtZT17bmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IG9wdGlvbnMubWFwKCh7IHZhbHVlLCB2YWx1ZU5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dmFsdWV9IGtleT17dmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2RkPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gPD57b3B0aW9ucy5sZW5ndGggPiAwID8gY3JlYXRlT3B0aW9uVGFnKCkgOiBudWxsfTwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VsZWN0Q29udHJvbCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXN0UHJvcHMgZnJvbSAnfi9jb250YWluZXIvdGVzdC9pbmRleC50c3gnO1xuLy9pbXBvcnQgeyBzZXRUZXh0LCBhc3luY0dldERhdGEgfSBmcm9tICd+L2ZlYXR1cmVzL3Rlc3QvYWN0aW9uLnRzJztcblxuY29uc3QgVGVzdDogUmVhY3QuRkM8SVRlc3RTdGF0ZSAmIElUZXN0SGFuZGxlcj4gPSAoeyB0ZXh0LCBzZXRUZXh0LCBhcGlSZXN1bHQsIGFzeW5jR2V0RGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtsb2NhbFRleHQsIHNldExvY2FsVGV4dF0gPSB1c2VTdGF0ZSh0ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOmdnuWQjOacn+eiuuiqjeeUqFxuICAgIC8vYXN5bmNHZXREYXRhKCcvcmVhY3Qtc3RhdGUvJyk7XG4gICAgYXN5bmNHZXREYXRhKCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRleHQobG9jYWxUZXh0KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtsb2NhbFRleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bG9jYWxUZXh0fSBvbkNoYW5nZT17KGUpID0+IHNldExvY2FsVGV4dChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8cD57dGV4dH08L3A+XG4gICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgPHA+44K144O844OQ44K/44Kk44Og77yae2FwaVJlc3VsdH08L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0O1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IFNjcmVlbiBmcm9tICd+L2NvbXBvbmVudHMvc2NyZWVuLnRzeCc7XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uYXBwU3RhdGUuc2NyZWVuU2V0dGluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNjcmVlbik7XG4iLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgeyBzZXRGb250U2l6ZSwgc2V0Rm9udFdlaWdodCwgc2V0Rm9udEZhbWlseSwgc2V0Rm9udENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3IsIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0gZnJvbSAnfi9mZWF0dXJlcy9zY3JlZW5TZXR0aW5nL3NjcmVlblNldHRpbmdSZWR1Y2VyLnRzJztcblxuaW1wb3J0IFNjcmVlblNldHRpbmcgZnJvbSAnfi9jb21wb25lbnRzL3NjcmVlblNldHRpbmcudHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS5zY3JlZW5TZXR0aW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PiB8IFRodW5rRGlzcGF0Y2g8SUFzeW5jR2V0RGF0YVBhcmFtcywgSUFzeW5jRGF0YUdldFJlc3VsdCwgYW55PikgPT4ge1xuICByZXR1cm4ge1xuICAgIHNldEZvbnRTaXplOiAobnVtOiBzdHJpbmcgfCBudW1iZXIpID0+IGRpc3BhdGNoKHNldEZvbnRTaXplKG51bSkpLFxuICAgIHNldEZvbnRGYW1pbHk6IChudW06IHN0cmluZykgPT4gZGlzcGF0Y2goc2V0Rm9udEZhbWlseShudW0pKSxcbiAgICBzZXRGb250V2VpZ2h0OiAobnVtOiBzdHJpbmcgfCBudW1iZXIpID0+IGRpc3BhdGNoKHNldEZvbnRXZWlnaHQobnVtKSksXG4gICAgc2V0Rm9udENvbG9yOiAoY29sb3I6IElDb2xvcikgPT4gZGlzcGF0Y2goc2V0Rm9udENvbG9yKGNvbG9yKSksXG4gICAgc2V0QmFja2dyb3VuZENvbG9yOiAoY29sb3I6IElDb2xvcikgPT4gZGlzcGF0Y2goc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKSksXG4gICAgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IChpc0VuYWJsZWQ6IGJvb2xlYW4pID0+IGRpc3BhdGNoKHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzKGlzRW5hYmxlZCkpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2NyZWVuU2V0dGluZyk7XG4iLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgeyBzZXRUZXh0LCBhc3luY0dldERhdGEgfSBmcm9tICd+L2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMnO1xuXG5pbXBvcnQgVGVzdCBmcm9tICd+L2NvbXBvbmVudHMvdGVzdC50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLnRlc3QsXG4gIH07XG59O1xuXG4vLyBUaHVua0Rpc3BhdGNo44Gu5byV5pWw44Gu5Z6L5L2V5oyH5a6a44GZ44KM44Gw44KI44GE44GL44KI44GP44KP44GL44KJ44Gq44GL44Gj44Gf44CBZXh0cmFBcmd1bWVudOOBruWei+OBq+OBquOCjOOBsOOBhOOBhOOBqOOBiuOCguOBhuOCk+OBoOOBkeOBqVxuZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PiB8IFRodW5rRGlzcGF0Y2g8SUFzeW5jR2V0RGF0YVBhcmFtcywgSUFzeW5jRGF0YUdldFJlc3VsdCwgYW55PikgPT4ge1xuICByZXR1cm4ge1xuICAgIHNldFRleHQ6ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldFRleHQodGV4dCkpO1xuICAgIH0sXG4gICAgYXN5bmNHZXREYXRhOiAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIGRpc3BhdGNoKGFzeW5jR2V0RGF0YSgpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElTY3JlZW5TdGF0ZSA9IHt9O1xuXG5jb25zdCBzY3JlZW5TdGF0ZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3NjcmVlbicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHt9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNjcmVlblN0YXRlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElTY3JlZW5TZXR0aW5nU3RhdGUgPSB7XG4gIGZvbnRTaXplOiAyOCxcbiAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRDb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAxIH0sXG4gIGJhY2tncm91bmRDb2xvcjogeyByOiAyNTUsIGc6IDI1NSwgYjogMjU1LCBhOiAxIH0sXG4gIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiB0cnVlLFxufTtcblxuY29uc3QgdGVzdFN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnc2NyZWVuU2V0dGluZycsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRGb250U2l6ZTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc3QgZm9udFNpemUgPSB0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChwYXlsb2FkLCAxMCkgOiBwYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRTaXplIH07XG4gICAgfSxcbiAgICBzZXRGb250RmFtaWx5OiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udEZhbWlseTogcGF5bG9hZCB9O1xuICAgIH0sXG4gICAgc2V0Rm9udFdlaWdodDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc3QgZm9udFdlaWdodCA9IHR5cGVvZiBwYXlsb2FkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHBheWxvYWQsIDEwKSA6IHBheWxvYWQ7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udFdlaWdodCB9O1xuICAgIH0sXG4gICAgc2V0Rm9udENvbG9yOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udENvbG9yOiBwYXlsb2FkIH07XG4gICAgfSxcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3I6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBiYWNrZ3JvdW5kQ29sb3I6IHBheWxvYWQgfTtcbiAgICB9LFxuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IHBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldEZvbnRTaXplLCBzZXRGb250RmFtaWx5LCBzZXRGb250V2VpZ2h0LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSA9IHRlc3RTdGF0ZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXN0U3RhdGUucmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElUZXN0U3RhdGUgPSB7XG4gIHRleHQ6ICdmaXJzdCBpbXByZXNzaW9uJyxcbiAgYXBpRW5kcG9pbnQ6ICcnLFxuICBhcGlSZXN1bHQ6ICcnLFxufTtcblxudHlwZSBoZWFkU2VydmVyVGltZVJldHVyblR5cGUgPSB7XG4gIGRhdGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBhc3luY0dldERhdGEgPSBjcmVhdGVBc3luY1RodW5rPGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZT4oXG4gICdzZXJ2ZXJ0aW1lL2hlYWQnLFxuICBhc3luYyAoKTogUHJvbWlzZTxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+ID0+IHtcbiAgICBjb25zdCBhc3luY1Jlc3AgPSBhd2FpdCBheGlvcy5oZWFkKCcuLycpO1xuXG4gICAgLy8g6YGF5bu244Gu5YuV5L2c44KS56K66KqN44GZ44KL44Gf44KB44Gr54Sh55CG44KE44KK6YGF5bu2XG4gICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGFzeW5jUmVzcC5oZWFkZXJzLmRhdGUsXG4gICAgfTtcbiAgfVxuKTtcblxuY29uc3QgdGVzdFN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAndGVzdCcsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRUZXh0KHN0YXRlOiBJVGVzdFN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRleHQ6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcblxuICAvLyByZWR1eC10aHVua1xuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIC8vLy8ge3t7IHR5cGVzY3JpcG9044Gg44Go5Z6L44GM44GG44G+44GP6KGM44GL44Ga44CB44GT44Gu5pu444GN5pa544Gv44Gn44GN44Gq44GE44G944GEXG4gICAgLy8gIFtgJHthc3luY0dldERhdGEuZnVsZmlsbGVkfWBdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIC8vICAgIHJldHVybiB7XG4gICAgLy8gICAgICAuLi5zdGF0ZSxcbiAgICAvLyAgICB9O1xuICAgIC8vICB9LFxuICAgIC8vLy8gfX19XG4gICAgYnVpbGRlci5hZGRDYXNlKGFzeW5jR2V0RGF0YS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uLnR5cGUpO1xuICAgICAgLy8gLT4gc2VydmVydGltZS9oZWFkL3BlbmRpbmdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoYXN5bmNHZXREYXRhLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uLnR5cGUpO1xuICAgICAgLy8gLT4gc2VydmVydGltZS9oZWFkL2Z1bGZpbGxlZFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFwaVJlc3VsdDogYWN0aW9uLnBheWxvYWQuZGF0ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFzeW5jR2V0RGF0YS5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICAgIC8vIC0+IHNlcnZlcnRpbWUvaGVhZC9yZWplY3RlZFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldFRleHQgfSA9IHRlc3RTdGF0ZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXN0U3RhdGUucmVkdWNlcjtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUZvbnRTZXQge1xuICBmb250TmFtZTogc3RyaW5nO1xuICBmb250c2l6ZWxpc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRGT05UX0ZBTUlMSUVTX0xJU1Q6IElGb250U2V0W10gPSBbXG4gIHtcbiAgICBmb250TmFtZTogJ3NhbnMtc2VyaWYnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnc2VyaWYnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnbW9ub3NwYWNlJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFU19MSVNUOiBJRm9udFNldFtdID0gW1xuICAvLyBmb250XG4gIHtcbiAgICBmb250TmFtZTogJ09yYml0cm9uJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1dhbGxwb2V0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUm9ib3RvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDMsNyw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnT3N3YWxkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcyLDMsNCw2LDcsNScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhbHNhbWlxIFNhbnMnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0FudG9uJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFybG93IENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQYXRyaWNrIEhhbmQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWNyYW1lbnRvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUG9pcmV0IE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1ByZXNzIFN0YXJ0IDJQJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0NoYWtyYSBQZXRjaCcsXG4gICAgZm9udHNpemVsaXN0OiAnMyw0LDUsNiw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFsb28gQ2hldHRhbiAyJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdDb2RhJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDgnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBTZW1pIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBFeHRyYSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQWxkcmljaCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1N0YXJkb3MgU3RlbmNpbCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTWVncmltJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnSWNlbGFuZCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhcnBhbmNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1Nob2p1bWFydScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xvbmRyaW5hIE91dGxpbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdHZW8nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdMaWJyZSBCYXJjb2RlIDM5IEV4dGVuZGVkIFRleHQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdUdWxwZW4gT25lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBGT05UX0ZBTUlMSUVTX0xJU1QgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0KERFRkFVTFRGT05UX0ZBTUlMSUVTX0xJU1QsIFdFQkZPTlRfRkFNSUxJRVNfTElTVCk7XG5cbmV4cG9ydCBjb25zdCBXRUJGT05UX0ZBTUlMSUVTID0gV0VCRk9OVF9GQU1JTElFU19MSVNULm1hcCgoeyBmb250TmFtZSwgZm9udHNpemVsaXN0IH06IElGb250U2V0KSA9PiB7XG4gIGNvbnN0IHJlcGxhY2VkRm9udFNpemVMaXN0ID0gZm9udHNpemVsaXN0LnJlcGxhY2UoLyhcXGQpL2csICckMTAwJyk7XG4gIHJldHVybiBgJHtmb250TmFtZX06JHtyZXBsYWNlZEZvbnRTaXplTGlzdH1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBGT05UX05BTUVfTElTVCA9IEZPTlRfRkFNSUxJRVNfTElTVC5tYXAoKHsgZm9udE5hbWUgfTogSUZvbnRTZXQpID0+IHtcbiAgcmV0dXJuIGAke2ZvbnROYW1lfWA7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEVuYWJsZWRGb250U2l6ZSA9IChmb250TmFtZTogc3RyaW5nKTogbnVtYmVyW10gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBGT05UX0ZBTUlMSUVTX0xJU1QuZmlsdGVyKChmb250c2V0KSA9PiB7XG4gICAgcmV0dXJuIGZvbnRzZXQuZm9udE5hbWUgPT09IGZvbnROYW1lO1xuICB9KTtcblxuICBpZiAoIWZpbHRlcmVkTGlzdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWRMaXN0WzBdLmZvbnRzaXplbGlzdFxuICAgIC5yZXBsYWNlKC8oXFxkKS9nLCAnJDEwMCcpXG4gICAgLnNwbGl0KCcsJylcbiAgICAubWFwKCh2YWwpID0+IHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWwsIDEwKTtcbiAgICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IFdlYkZvbnQgZnJvbSAnd2ViZm9udGxvYWRlcic7XG5pbXBvcnQgeyBXRUJGT05UX0ZBTUlMSUVTIH0gZnJvbSAnfi9mb250LnRzJztcblxuLy9pbXBvcnQgXCJ+L2luZGV4LnNjc3NcIjtcbmltcG9ydCBBcHAgZnJvbSAnfi9BcHAudHN4JztcblxuY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuV2ViRm9udC5sb2FkKHtcbiAgZ29vZ2xlOiB7XG4gICAgZmFtaWxpZXM6IFdFQkZPTlRfRkFNSUxJRVMsXG4gIH0sXG59KTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnfi9yb290UmVkdWNlcic7XG5cbmltcG9ydCB0ZXN0UmVkdWNlciBmcm9tICcuL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXInO1xuaW1wb3J0IHNjcmVlblJlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW4vc2NyZWVuUmVkdWNlcic7XG5pbXBvcnQgc2NyZWVuU2V0dGluZ1JlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW5TZXR0aW5nL3NjcmVlblNldHRpbmdSZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgdGVzdDogdGVzdFJlZHVjZXIsXG4gICAgc2NyZWVuOiBzY3JlZW5SZWR1Y2VyLFxuICAgIHNjcmVlblNldHRpbmc6IHNjcmVlblNldHRpbmdSZWR1Y2VyLFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
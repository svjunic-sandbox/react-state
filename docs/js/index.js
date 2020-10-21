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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlYW5zL0NvbG9yVG9SR0JBLnRzIiwid2VicGFjazovLy8uL3NyYy9iZWFucy9aZXJvUGFkZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JlZW5QYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0Q29udHJvbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvc2NyZWVuU2V0dGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7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QTtDQUdBOztBQUNBO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBRUEsb0RBQU8sQ0FBQyxJQUFSLENBQWE7QUFDWCxRQUFNLEVBQUU7QUFDTixZQUFRLEVBQUUseURBQWdCO0FBRHBCO0FBREcsQ0FBYjtBQU1BLGdEQUFRLENBQUMsTUFBVCxDQUFnQiwyREFBQyxnREFBRCxFQUFJLElBQUosQ0FBaEIsRUFBeUIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVlLHNJQUFjLENBQUM7QUFDNUIsU0FBTyxFQUFFO0FBQ1AsUUFBSSxFQUFFLGtFQURDO0FBRVAsVUFBTSxFQUFFLHNFQUZEO0FBR1AsaUJBQWEsRUFBRSxvRkFBb0I7QUFINUI7QUFEbUIsQ0FBRCxDQUE3QixFIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImpzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJjbG9ja1wiXSA9IHdpbmRvd1tcImNsb2NrXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwianMvdmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ34vc3RvcmUudHMnO1xuXG4vLyBjb250YWluZXJcbmltcG9ydCBTY3JlZW4gZnJvbSAnfi9jb250YWluZXIvc2NyZWVuL2luZGV4LnRzeCc7XG5pbXBvcnQgU2NyZWVuU2V0dGluZyBmcm9tICd+L2NvbnRhaW5lci9zY3JlZW5TZXR0aW5nL2luZGV4LnRzeCc7XG5pbXBvcnQgVGVzdCBmcm9tICd+L2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPFNjcmVlbiAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8U2NyZWVuU2V0dGluZyAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8VGVzdD48L1Rlc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgciwgZywgYiwgYSB9OiBJQ29sb3IpID0+IHtcbiAgY29uc29sZS5sb2cociwgZywgYiwgYSk7XG4gIHJldHVybiBgcmdiYSggJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xufTtcbiIsIi8qKlxuICogMOipsOOCgeODleOCqeODvOODnuODg+ODiFxuICogQHBhcmFtICB7TnVtYmVyfSBudW0gIG51bWJlciBvciBzdHJpbmdcbiAqIEBwYXJhbSAge051bWJlcn0gbiAgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gKEluIGFuIGVycm9yLCAnZmFsc2UnIGlzIHJldHVybmVkLiApXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJWmVyb1BhZGRpbmcge1xuICBudW06IHN0cmluZyB8IG51bWJlcjtcbiAgbWluaW1hbURpc2l0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG51bSwgbWluaW1hbURpc2l0IH06IElaZXJvUGFkZGluZykgPT4ge1xuICBsZXQgcmVzdWx0O1xuICBzd2l0Y2ggKHR5cGVvZiBudW0pIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmVzdWx0ID0gbnVtO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJlc3VsdCA9IG51bS50b1N0cmluZygpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IG1pbmltYW1EaXNpdCkge1xuICAgIHJlc3VsdCA9ICcwJyArIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCBaZXJvUGFkaWRuZyBmcm9tICd+L2JlYW5zL1plcm9QYWRkaW5nLnRzJztcbmltcG9ydCBDb2xvclRvUkdCQSBmcm9tICcuL0NvbG9yVG9SR0JBJztcblxuZXhwb3J0IHsgWmVyb1BhZGlkbmcsIENvbG9yVG9SR0JBIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSB9IGZyb20gJ2JlYXV0aWZ1bC1yZWFjdC1ob29rcyc7XG5pbXBvcnQgU2NyZWVuUGFuZWwgZnJvbSAnfi9jb21wb25lbnRzL3NjcmVlblBhbmVsLnRzeCc7XG5cbmltcG9ydCB7IFplcm9QYWRpZG5nLCBDb2xvclRvUkdCQSB9IGZyb20gJ34vYmVhbnMvJztcblxuZXhwb3J0IGludGVyZmFjZSBzY3JlZW5Qcm9wcyB7fVxuXG5jb25zdCBTY3JlZW46IFJlYWN0LkZDPHNjcmVlblByb3BzICYgSVNjcmVlblNldHRpbmdTdGF0ZT4gPSAoeyBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0pID0+IHtcbiAgY29uc3QgW3N0eWxlT2JqZWN0LCBzZXRTdHlsZU9iamVjdF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgW2hoMSwgc2V0SGgxXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaGgyLCBzZXRIaDJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttbTEsIHNldE1tMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21tMiwgc2V0TW0yXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3MxLCBzZXRTczFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzczIsIHNldFNzMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzczEsIHNldFNzczFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzc3MyLCBzZXRTc3MyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3NzMywgc2V0U3NzM10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGluY3JlbWVudDogMC41LFxuICAgIHN0YXJ0QXQ6IDAsXG4gICAgZmluaXNoQXQ6IC0xLFxuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKChwcm9ncmVzczogRmxvYXQzMkxpc3QsIG5leHQ6IEZ1bmN0aW9uKSA9PiB7XG4gICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBuZXh0KCk7XG4gIH0sIG9wdGlvbnMpO1xuXG4gIG9uRmluaXNoKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmluaXNoJyk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3R5bGVPYmplY3Qoe1xuICAgICAgLi4uc3R5bGVPYmplY3QsXG4gICAgICBmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLFxuICAgICAgZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQsXG4gICAgICBjb2xvcjogQ29sb3JUb1JHQkEoZm9udENvbG9yKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JUb1JHQkEoYmFja2dyb3VuZENvbG9yKSxcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1hcHAvcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhoID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0SG91cnMoKSwgbWluaW1hbURpc2l0OiAyIH0pO1xuICAgIGNvbnN0IG1tID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0TWludXRlcygpLCBtaW5pbWFtRGlzaXQ6IDIgfSk7XG4gICAgY29uc3Qgc3MgPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRTZWNvbmRzKCksIG1pbmltYW1EaXNpdDogMiB9KTtcbiAgICBjb25zdCBzc3MgPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgbWluaW1hbURpc2l0OiAzIH0pO1xuXG4gICAgc2V0SGgxKGhoWzBdKTtcbiAgICBzZXRIaDIoaGhbMV0pO1xuICAgIHNldE1tMShtbVswXSk7XG4gICAgc2V0TW0yKG1tWzFdKTtcbiAgICBzZXRTczEoc3NbMF0pO1xuICAgIHNldFNzMihzc1sxXSk7XG4gICAgc2V0U3NzMShzc3NbMF0pO1xuICAgIHNldFNzczIoc3NzWzFdKTtcbiAgICBzZXRTc3MzKHNzc1syXSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtYXBwL3JlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJoaDFcIiBudW09e2hoMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJoaDJcIiBudW09e2hoMn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tY29sb25cIj46PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cIm1tMVwiIG51bT17bW0xfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cIm1tMlwiIG51bT17bW0yfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1jb2xvblwiPjo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3MxXCIgbnVtPXtzczF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3MyXCIgbnVtPXtzczJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlbmFibGVkU2hvd01pbGxpc2Vjb25kcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzc3MxXCIgbnVtPXtzc3MxfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzczJcIiBudW09e3NzczJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3NzM1wiIG51bT17c3NzM30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNjcmVlblBhbmVsOiBSZWFjdC5GQzxTY3JlZW5QYW5lbFByb3BzPiA9ICh7IHR5cGUsIG51bSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHNjcmVlbi1wYW5lbC0ke3R5cGV9YH0+e251bX08L3NwYW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2NyZWVuUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTY3JlZW5QYW5lbCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNrZXRjaFBpY2tlciB9IGZyb20gJ3JlYWN0LWNvbG9yJztcblxuaW1wb3J0IHsgRk9OVF9OQU1FX0xJU1QsIGdldEVuYWJsZWRGb250U2l6ZSB9IGZyb20gJ34vZm9udC50cyc7XG5cbmltcG9ydCBTZWxlY3RDb250cm9sIGZyb20gJ34vY29tcG9uZW50cy9zZWxlY3RDb250cm9sL2luZGV4LnRzeCc7XG5cbmNvbnN0IFNjcmVlblNldHRpbmc6IFJlYWN0LkZDPElTY3JlZW5TZXR0aW5nU3RhdGUgJiBJU2NyZWVuU2V0dGluZ0hhbmRsZXI+ID0gKHsgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzLCBzZXRGb250U2l6ZSwgc2V0Rm9udEZhbWlseSwgc2V0Rm9udFdlaWdodCwgc2V0Rm9udENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3IsIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0pID0+IHtcbiAgY29uc3QgW21pbkZvbnRTaXplXSA9IHVzZVN0YXRlKDE0KTtcbiAgY29uc3QgW21heEZvbnRTaXplXSA9IHVzZVN0YXRlKDEwMCk7XG5cbiAgY29uc3QgW2ZvbnRGYW1pbHlPcHRpb25MaXN0LCBzZXRGb250RmFtaWx5T3B0aW9uc10gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuICBjb25zdCBbZm9udFNpemVPcHRpb25MaXN0LCBzZXRGb250U2l6ZU9wdGlvbkxpc3RdID0gdXNlU3RhdGUoW10gYXMgSU9wdGlvbltdKTtcbiAgY29uc3QgW2ZvbnRXZWlnaHRPcHRpb25MaXN0LCBzZXRGb250V2VpZ2h0T3B0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9udEZhbWlseU9wdGlvbnMoXG4gICAgICBGT05UX05BTUVfTElTVC5tYXAoKGZvbnROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGZvbnROYW1lLFxuICAgICAgICAgIHZhbHVlTmFtZTogZm9udE5hbWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBzZXRGb250U2l6ZU9wdGlvbkxpc3QoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0OiBJT3B0aW9uW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gbWluRm9udFNpemU7IGluZGV4IDwgbWF4Rm9udFNpemU7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlTmFtZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWFwcC9yZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvbnRGYW1pbHlPcHRpb25MaXN0Lmxlbmd0aCkge1xuICAgICAgc2V0Rm9udEZhbWlseShmb250RmFtaWx5T3B0aW9uTGlzdFswXS52YWx1ZSk7XG4gICAgfVxuICB9LCBbZm9udEZhbWlseU9wdGlvbkxpc3QsIHNldEZvbnRGYW1pbHldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvbnRXZWlnaHRPcHRpb25MaXN0KCgpID0+IHtcbiAgICAgIHJldHVybiBnZXRFbmFibGVkRm9udFNpemUoZm9udEZhbWlseSkubWFwKChmb250V2VpZ2h0KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGZvbnRXZWlnaHQudG9TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZU5hbWU6IGZvbnRXZWlnaHQudG9TdHJpbmcoKSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZW5hYmxlZEZvbnRXZWlnaHRMaXN0ID0gZ2V0RW5hYmxlZEZvbnRTaXplKGZvbnRGYW1pbHkpO1xuICAgIGlmIChlbmFibGVkRm9udFdlaWdodExpc3QuaW5kZXhPZihmb250V2VpZ2h0KSA9PT0gLTEpIHtcbiAgICAgIHNldEZvbnRXZWlnaHQoZW5hYmxlZEZvbnRXZWlnaHRMaXN0WzBdKTtcbiAgICB9XG4gIH0sIFtmb250RmFtaWx5LCBmb250V2VpZ2h0LCBzZXRGb250V2VpZ2h0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAyODtcbiAgICBzZXRGb250U2l6ZShkZWZhdWx0VmFsdWUpO1xuICB9LCBbc2V0Rm9udFNpemVdKTtcblxuICBjb25zdCBoYW5kbGVGb250U2l6ZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEZvbnRTaXplKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb250RmFtaWx5Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgZm9udE5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRGb250RmFtaWx5KGZvbnROYW1lKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb250V2VpZ2h0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0Rm9udFdlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9udENvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0Rm9udENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yLnJnYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5hYmxlZFNob3dNaWxsaXNlY29uZHMgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5jaGVja2VkKTtcbiAgICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyhlLnRhcmdldC5jaGVja2VkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ1wiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzZXR0aW5nLWxlZ2VuZFwiPmZvbnQ8L2xlZ2VuZD5cbiAgICAgICAgPGRsIGNsYXNzTmFtZT1cInNldHRpbmctZm9udFwiPlxuICAgICAgICAgIDxTZWxlY3RDb250cm9sIHRpdGxlPVwiZm9udC1mYW1pbHlcIiBkZWZhdWx0VmFsdWU9e2ZvbnRGYW1pbHlPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250RmFtaWx5T3B0aW9uTGlzdH0gbmFtZT1cImZvbnQtZmFtaWx5XCIgb25DaGFuZ2U9e2hhbmRsZUZvbnRGYW1pbHlDaGFuZ2V9IC8+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LXNpemVcIiBkZWZhdWx0VmFsdWU9e2ZvbnRTaXplT3B0aW9uTGlzdFswXX0gb3B0aW9ucz17Zm9udFNpemVPcHRpb25MaXN0fSBuYW1lPVwiZm9udC1zaXplXCIgb25DaGFuZ2U9e2hhbmRsZUZvbnRTaXplQ2hhbmdlfSAvPlxuICAgICAgICAgIDxTZWxlY3RDb250cm9sIHRpdGxlPVwiZm9udC13ZWlnaHRcIiBkZWZhdWx0VmFsdWU9e2ZvbnRXZWlnaHRPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250V2VpZ2h0T3B0aW9uTGlzdH0gbmFtZT1cImZvbnQtd2VpZ2h0XCIgb25DaGFuZ2U9e2hhbmRsZUZvbnRXZWlnaHRDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGw+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJjb25maWdcIj5Db2xvcjwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtY29sb3JcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj5mb250LWNvbG9yPC9zcGFuPlxuICAgICAgICAgICAgPFNrZXRjaFBpY2tlciBjb2xvcj17Zm9udENvbG9yfSBvbkNoYW5nZT17aGFuZGxlRm9udENvbG9yQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtY29sb3JcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj5iYWNrZ3JvdW5kLWNvbG9yPC9zcGFuPlxuICAgICAgICAgICAgPFNrZXRjaFBpY2tlciBjb2xvcj17YmFja2dyb3VuZENvbG9yfSBvbkNoYW5nZT17aGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJzZXR0aW5nLWZpZWxkc2V0XCI+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwiY29uZmlnXCI+ZmllbGQ8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm1pbGxpc2Vjb25kc1wiIGNoZWNrZWQ9e2VuYWJsZWRTaG93TWlsbGlzZWNvbmRzfSBvbkNoYW5nZT17aGFuZGxlRW5hYmxlZFNob3dNaWxsaXNlY29uZHN9IC8+XG4gICAgICAgICAgICA8c3Bhbj5zaG93IG1pbGxpc2Vjb25kczwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5TZXR0aW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3RDb250cm9sOiBSZWFjdC5GQzxTZWxlY3RDb250cm9sUHJvcHM+ID0gKHsgdGl0bGUsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgb3B0aW9ucywgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBbbG9jYWxUaXRsZSwgc2V0TG9jYWxUaXRsZV0gPSB1c2VTdGF0ZSh0aXRsZSk7XG5cbiAgY29uc3QgY3JlYXRlT3B0aW9uVGFnID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic2V0dGluZy1mb250X3RpdGxlXCI+e3RpdGxlfTwvZHQ+XG4gICAgICAgIDxkZCBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnRfZGV0YWlsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnQtZmFtaWx5XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlLnZhbHVlfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9PlxuICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gb3B0aW9ucy5tYXAoKHsgdmFsdWUsIHZhbHVlTmFtZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0ga2V5PXt2YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiA8PntvcHRpb25zLmxlbmd0aCA+IDAgPyBjcmVhdGVPcHRpb25UYWcoKSA6IG51bGx9PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q29udHJvbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlc3RQcm9wcyBmcm9tICd+L2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCc7XG4vL2ltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vZmVhdHVyZXMvdGVzdC9hY3Rpb24udHMnO1xuXG5jb25zdCBUZXN0OiBSZWFjdC5GQzxJVGVzdFN0YXRlICYgSVRlc3RIYW5kbGVyPiA9ICh7IHRleHQsIHNldFRleHQsIGFwaVJlc3VsdCwgYXN5bmNHZXREYXRhIH0pID0+IHtcbiAgY29uc3QgW2xvY2FsVGV4dCwgc2V0TG9jYWxUZXh0XSA9IHVzZVN0YXRlKHRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g6Z2e5ZCM5pyf56K66KqN55SoXG4gICAgLy9hc3luY0dldERhdGEoJy9yZWFjdC1zdGF0ZS8nKTtcbiAgICBhc3luY0dldERhdGEoKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGV4dChsb2NhbFRleHQpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2xvY2FsVGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsb2NhbFRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYWxUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8cD7jgrXjg7zjg5Djgr/jgqTjg6DvvJp7YXBpUmVzdWx0fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgU2NyZWVuIGZyb20gJ34vY29tcG9uZW50cy9zY3JlZW4udHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS5zY3JlZW5TZXR0aW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PiB8IFRodW5rRGlzcGF0Y2g8SUFzeW5jR2V0RGF0YVBhcmFtcywgSUFzeW5jRGF0YUdldFJlc3VsdCwgYW55PikgPT4ge1xuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2NyZWVuKTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldEZvbnRTaXplLCBzZXRGb250V2VpZ2h0LCBzZXRGb250RmFtaWx5LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSBmcm9tICd+L2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMnO1xuXG5pbXBvcnQgU2NyZWVuU2V0dGluZyBmcm9tICd+L2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLnNjcmVlblNldHRpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0Rm9udFNpemU6IChudW06IHN0cmluZyB8IG51bWJlcikgPT4gZGlzcGF0Y2goc2V0Rm9udFNpemUobnVtKSksXG4gICAgc2V0Rm9udEZhbWlseTogKG51bTogc3RyaW5nKSA9PiBkaXNwYXRjaChzZXRGb250RmFtaWx5KG51bSkpLFxuICAgIHNldEZvbnRXZWlnaHQ6IChudW06IHN0cmluZyB8IG51bWJlcikgPT4gZGlzcGF0Y2goc2V0Rm9udFdlaWdodChudW0pKSxcbiAgICBzZXRGb250Q29sb3I6IChjb2xvcjogSUNvbG9yKSA9PiBkaXNwYXRjaChzZXRGb250Q29sb3IoY29sb3IpKSxcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3I6IChjb2xvcjogSUNvbG9yKSA9PiBkaXNwYXRjaChzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpKSxcbiAgICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kczogKGlzRW5hYmxlZDogYm9vbGVhbikgPT4gZGlzcGF0Y2goc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMoaXNFbmFibGVkKSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTY3JlZW5TZXR0aW5nKTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vZmVhdHVyZXMvdGVzdC90ZXN0UmVkdWNlci50cyc7XG5cbmltcG9ydCBUZXN0IGZyb20gJ34vY29tcG9uZW50cy90ZXN0LnRzeCc7XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uYXBwU3RhdGUudGVzdCxcbiAgfTtcbn07XG5cbi8vIFRodW5rRGlzcGF0Y2jjga7lvJXmlbDjga7lnovkvZXmjIflrprjgZnjgozjgbDjgojjgYTjgYvjgojjgY/jgo/jgYvjgonjgarjgYvjgaPjgZ/jgIFleHRyYUFyZ3VtZW5044Gu5Z6L44Gr44Gq44KM44Gw44GE44GE44Go44GK44KC44GG44KT44Gg44GR44GpXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0VGV4dDogKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0VGV4dCh0ZXh0KSk7XG4gICAgfSxcbiAgICBhc3luY0dldERhdGE6ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goYXN5bmNHZXREYXRhKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVNjcmVlblN0YXRlID0ge307XG5cbmNvbnN0IHNjcmVlblN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnc2NyZWVuJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2NyZWVuU3RhdGUucmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVNjcmVlblNldHRpbmdTdGF0ZSA9IHtcbiAgZm9udFNpemU6IDI4LFxuICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgZm9udENvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDEgfSxcbiAgYmFja2dyb3VuZENvbG9yOiB7IHI6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDEgfSxcbiAgZW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IHRydWUsXG59O1xuXG5jb25zdCB0ZXN0U3RhdGUgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdzY3JlZW5TZXR0aW5nJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEZvbnRTaXplOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBjb25zdCBmb250U2l6ZSA9IHR5cGVvZiBwYXlsb2FkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHBheWxvYWQsIDEwKSA6IHBheWxvYWQ7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udFNpemUgfTtcbiAgICB9LFxuICAgIHNldEZvbnRGYW1pbHk6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb250RmFtaWx5OiBwYXlsb2FkIH07XG4gICAgfSxcbiAgICBzZXRGb250V2VpZ2h0OiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBjb25zdCBmb250V2VpZ2h0ID0gdHlwZW9mIHBheWxvYWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQocGF5bG9hZCwgMTApIDogcGF5bG9hZDtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb250V2VpZ2h0IH07XG4gICAgfSxcbiAgICBzZXRGb250Q29sb3I6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb250Q29sb3I6IHBheWxvYWQgfTtcbiAgICB9LFxuICAgIHNldEJhY2tncm91bmRDb2xvcjogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJhY2tncm91bmRDb2xvcjogcGF5bG9hZCB9O1xuICAgIH0sXG4gICAgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbmFibGVkU2hvd01pbGxpc2Vjb25kczogcGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0Rm9udFNpemUsIHNldEZvbnRGYW1pbHksIHNldEZvbnRXZWlnaHQsIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9ID0gdGVzdFN0YXRlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3RTdGF0ZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVRlc3RTdGF0ZSA9IHtcbiAgdGV4dDogJ2ZpcnN0IGltcHJlc3Npb24nLFxuICBhcGlFbmRwb2ludDogJycsXG4gIGFwaVJlc3VsdDogJycsXG59O1xuXG50eXBlIGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZSA9IHtcbiAgZGF0ZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGFzeW5jR2V0RGF0YSA9IGNyZWF0ZUFzeW5jVGh1bms8aGVhZFNlcnZlclRpbWVSZXR1cm5UeXBlPihcbiAgJ3NlcnZlcnRpbWUvaGVhZCcsXG4gIGFzeW5jICgpOiBQcm9taXNlPGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZT4gPT4ge1xuICAgIGNvbnN0IGFzeW5jUmVzcCA9IGF3YWl0IGF4aW9zLmhlYWQoJy4vJyk7XG5cbiAgICAvLyDpgYXlu7bjga7li5XkvZzjgpLnorroqo3jgZnjgovjgZ/jgoHjgavnhKHnkIbjgoTjgorpgYXlu7ZcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogYXN5bmNSZXNwLmhlYWRlcnMuZGF0ZSxcbiAgICB9O1xuICB9XG4pO1xuXG5jb25zdCB0ZXN0U3RhdGUgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICd0ZXN0JyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldFRleHQoc3RhdGU6IElUZXN0U3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGV4dDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxuXG4gIC8vIHJlZHV4LXRodW5rXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgLy8vLyB7e3sgdHlwZXNjcmlwb3TjgaDjgajlnovjgYzjgYbjgb7jgY/ooYzjgYvjgZrjgIHjgZPjga7mm7jjgY3mlrnjga/jgafjgY3jgarjgYTjgb3jgYRcbiAgICAvLyAgW2Ake2FzeW5jR2V0RGF0YS5mdWxmaWxsZWR9YF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gICAgcmV0dXJuIHtcbiAgICAvLyAgICAgIC4uLnN0YXRlLFxuICAgIC8vICAgIH07XG4gICAgLy8gIH0sXG4gICAgLy8vLyB9fX1cbiAgICBidWlsZGVyLmFkZENhc2UoYXN5bmNHZXREYXRhLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvcGVuZGluZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvZnVsZmlsbGVkXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXBpUmVzdWx0OiBhY3Rpb24ucGF5bG9hZC5kYXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoYXN5bmNHZXREYXRhLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uLnR5cGUpO1xuICAgICAgLy8gLT4gc2VydmVydGltZS9oZWFkL3JlamVjdGVkXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0VGV4dCB9ID0gdGVzdFN0YXRlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3RTdGF0ZS5yZWR1Y2VyO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJRm9udFNldCB7XG4gIGZvbnROYW1lOiBzdHJpbmc7XG4gIGZvbnRzaXplbGlzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVDogSUZvbnRTZXRbXSA9IFtcbiAge1xuICAgIGZvbnROYW1lOiAnc2Fucy1zZXJpZicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdzZXJpZicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdtb25vc3BhY2UnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBXRUJGT05UX0ZBTUlMSUVTX0xJU1Q6IElGb250U2V0W10gPSBbXG4gIC8vIGZvbnRcbiAge1xuICAgIGZvbnROYW1lOiAnT3JiaXRyb24nLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnV2FsbHBvZXQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdSb2JvdG8nLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMyw3LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdPc3dhbGQnLFxuICAgIGZvbnRzaXplbGlzdDogJzIsMyw0LDYsNyw1JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFsc2FtaXEgU2FucycsXG4gICAgZm9udHNpemVsaXN0OiAnNCw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQW50b24nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYXJsb3cgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1BhdHJpY2sgSGFuZCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhY3JhbWVudG8nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQb2lyZXQgT25lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUHJlc3MgU3RhcnQgMlAnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQ2hha3JhIFBldGNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICczLDQsNSw2LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYWxvbyBDaGV0dGFuIDInLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0NvZGEnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsOCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIFNlbWkgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIEV4dHJhIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdBbGRyaWNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU3RhcmRvcyBTdGVuY2lsJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdNZWdyaW0nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdJY2VsYW5kJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FycGFuY2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2hvanVtYXJ1JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTG9uZHJpbmEgT3V0bGluZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0dlbycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xpYnJlIEJhcmNvZGUgMzkgRXh0ZW5kZWQgVGV4dCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1R1bHBlbiBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfRkFNSUxJRVNfTElTVCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQoREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVCwgV0VCRk9OVF9GQU1JTElFU19MSVNUKTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVMgPSBXRUJGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lLCBmb250c2l6ZWxpc3QgfTogSUZvbnRTZXQpID0+IHtcbiAgY29uc3QgcmVwbGFjZWRGb250U2l6ZUxpc3QgPSBmb250c2l6ZWxpc3QucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKTtcbiAgcmV0dXJuIGAke2ZvbnROYW1lfToke3JlcGxhY2VkRm9udFNpemVMaXN0fWA7XG59KTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfTkFNRV9MSVNUID0gRk9OVF9GQU1JTElFU19MSVNULm1hcCgoeyBmb250TmFtZSB9OiBJRm9udFNldCkgPT4ge1xuICByZXR1cm4gYCR7Zm9udE5hbWV9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0RW5hYmxlZEZvbnRTaXplID0gKGZvbnROYW1lOiBzdHJpbmcpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IEZPTlRfRkFNSUxJRVNfTElTVC5maWx0ZXIoKGZvbnRzZXQpID0+IHtcbiAgICByZXR1cm4gZm9udHNldC5mb250TmFtZSA9PT0gZm9udE5hbWU7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRMaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZExpc3RbMF0uZm9udHNpemVsaXN0XG4gICAgLnJlcGxhY2UoLyhcXGQpL2csICckMTAwJylcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICAgIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcbmltcG9ydCB7IFdFQkZPTlRfRkFNSUxJRVMgfSBmcm9tICd+L2ZvbnQudHMnO1xuXG4vL2ltcG9ydCBcIn4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICd+L0FwcC50c3gnO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5XZWJGb250LmxvYWQoe1xuICBnb29nbGU6IHtcbiAgICBmYW1pbGllczogV0VCRk9OVF9GQU1JTElFUyxcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICd+L3Jvb3RSZWR1Y2VyJztcblxuaW1wb3J0IHRlc3RSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvdGVzdC90ZXN0UmVkdWNlcic7XG5pbXBvcnQgc2NyZWVuUmVkdWNlciBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbi9zY3JlZW5SZWR1Y2VyJztcbmltcG9ydCBzY3JlZW5TZXR0aW5nUmVkdWNlciBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICB0ZXN0OiB0ZXN0UmVkdWNlcixcbiAgICBzY3JlZW46IHNjcmVlblJlZHVjZXIsXG4gICAgc2NyZWVuU2V0dGluZzogc2NyZWVuU2V0dGluZ1JlZHVjZXIsXG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
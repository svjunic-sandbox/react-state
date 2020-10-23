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
/* harmony import */ var _features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/features/screenSetting/screenSettingReducer.ts */ "./src/features/screenSetting/screenSettingReducer.ts");










var ScreenSetting = function ScreenSetting(_ref) {
  var fontFamily = _ref.fontFamily,
      fontWeight = _ref.fontWeight,
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_8__["initialState"].fontColor),
      currentFontColor = _useState3[0];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(_features_screenSetting_screenSettingReducer_ts__WEBPACK_IMPORTED_MODULE_8__["initialState"].backgroundColor),
      currentBackgroundColor = _useState4[0];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      fontFamilyOptionList = _useState5[0],
      setFontFamilyOptions = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      fontSizeOptionList = _useState6[0],
      setFontSizeOptionList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      fontWeightOptionList = _useState7[0],
      setFontWeightOptionList = _useState7[1];

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
  var handleFontColorChangeCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (color) {
    setFontColor(color.rgb);
  }, [setFontColor]);
  var handleBackgroundColorChangeCallback = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (color) {
    setBackgroundColor(color.rgb);
  }, [setBackgroundColor]);
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
    color: currentFontColor,
    onChange: handleFontColorChangeCallback
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "background-color"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "background-color"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_5__["SketchPicker"], {
    color: currentBackgroundColor,
    onChange: handleBackgroundColorChangeCallback
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
}; //export default React.memo(ScreenSetting);


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
    asyncGetData(); // eslint-disable-next-line react-app/react-hooks/exhaustive-deps
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setText(localText); // eslint-disable-next-line react-app/react-hooks/exhaustive-deps
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
/*! exports provided: initialState, setFontSize, setFontFamily, setFontWeight, setFontColor, setBackgroundColor, setEnabledShowMilliseconds, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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

/***/ "./src/rootReducer.ts":
/*!****************************!*\
  !*** ./src/rootReducer.ts ***!
  \****************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _features_test_testReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/test/testReducer */ "./src/features/test/testReducer.ts");
/* harmony import */ var _features_screen_screenReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/screen/screenReducer */ "./src/features/screen/screenReducer.ts");
/* harmony import */ var _features_screenSetting_screenSettingReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/screenSetting/screenSettingReducer */ "./src/features/screenSetting/screenSettingReducer.ts");




var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  test: _features_test_testReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  screen: _features_screen_screenReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  screenSetting: _features_screenSetting_screenSettingReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});

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
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/rootReducer.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__["rootReducer"]
})); // 下記のように記述できるからrootReducerの必要性がよくわからない
//
//import testReducer from './features/test/testReducer';
//import screenReducer from './features/screen/screenReducer';
//import screenSettingReducer from './features/screenSetting/screenSettingReducer';
//
//export default configureStore({
//  reducer: {
//    test: testReducer,
//    screen: screenReducer,
//    screenSetting: screenSettingReducer,
//  },
//});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlYW5zL0NvbG9yVG9SR0JBLnRzIiwid2VicGFjazovLy8uL3NyYy9iZWFucy9aZXJvUGFkZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JlZW5QYW5lbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0Q29udHJvbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zY3JlZW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvc2NyZWVuU2V0dGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QWEsRUFBRSxvRkFBb0I7QUFITSxDQUFELENBQW5DLEM7Ozs7Ozs7Ozs7OztBQ05QO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxzSUFBYyxDQUFDO0FBQzVCLFNBQU8sRUFBRSx3REFBVztBQURRLENBQUQsQ0FBN0IsRSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEsiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwianMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcImNsb2NrXCJdID0gd2luZG93W1wiY2xvY2tcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJqcy92ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ34vc3RvcmUudHMnO1xuXG4vLyBjb250YWluZXJcbmltcG9ydCBTY3JlZW4gZnJvbSAnfi9jb250YWluZXIvc2NyZWVuL2luZGV4LnRzeCc7XG5pbXBvcnQgU2NyZWVuU2V0dGluZyBmcm9tICd+L2NvbnRhaW5lci9zY3JlZW5TZXR0aW5nL2luZGV4LnRzeCc7XG5pbXBvcnQgVGVzdCBmcm9tICd+L2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPFNjcmVlbiAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8U2NyZWVuU2V0dGluZyAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8VGVzdD48L1Rlc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgciwgZywgYiwgYSB9OiBJQ29sb3IpID0+IHtcbiAgY29uc29sZS5sb2cociwgZywgYiwgYSk7XG4gIHJldHVybiBgcmdiYSggJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xufTtcbiIsIi8qKlxuICogMOipsOOCgeODleOCqeODvOODnuODg+ODiFxuICogQHBhcmFtICB7TnVtYmVyfSBudW0gIG51bWJlciBvciBzdHJpbmdcbiAqIEBwYXJhbSAge051bWJlcn0gbiAgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gKEluIGFuIGVycm9yLCAnZmFsc2UnIGlzIHJldHVybmVkLiApXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJWmVyb1BhZGRpbmcge1xuICBudW06IHN0cmluZyB8IG51bWJlcjtcbiAgbWluaW1hbURpc2l0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG51bSwgbWluaW1hbURpc2l0IH06IElaZXJvUGFkZGluZykgPT4ge1xuICBsZXQgcmVzdWx0O1xuICBzd2l0Y2ggKHR5cGVvZiBudW0pIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmVzdWx0ID0gbnVtO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJlc3VsdCA9IG51bS50b1N0cmluZygpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IG1pbmltYW1EaXNpdCkge1xuICAgIHJlc3VsdCA9ICcwJyArIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCBaZXJvUGFkaWRuZyBmcm9tICd+L2JlYW5zL1plcm9QYWRkaW5nLnRzJztcbmltcG9ydCBDb2xvclRvUkdCQSBmcm9tICcuL0NvbG9yVG9SR0JBJztcblxuZXhwb3J0IHsgWmVyb1BhZGlkbmcsIENvbG9yVG9SR0JBIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSB9IGZyb20gJ2JlYXV0aWZ1bC1yZWFjdC1ob29rcyc7XG5pbXBvcnQgU2NyZWVuUGFuZWwgZnJvbSAnfi9jb21wb25lbnRzL3NjcmVlblBhbmVsLnRzeCc7XG5cbmltcG9ydCB7IFplcm9QYWRpZG5nLCBDb2xvclRvUkdCQSB9IGZyb20gJ34vYmVhbnMvJztcblxuZXhwb3J0IGludGVyZmFjZSBzY3JlZW5Qcm9wcyB7fVxuXG5jb25zdCBTY3JlZW46IFJlYWN0LkZDPHNjcmVlblByb3BzICYgSVNjcmVlblNldHRpbmdTdGF0ZT4gPSAoeyBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzIH0pID0+IHtcbiAgY29uc3QgW3N0eWxlT2JqZWN0LCBzZXRTdHlsZU9iamVjdF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgW2hoMSwgc2V0SGgxXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaGgyLCBzZXRIaDJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttbTEsIHNldE1tMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21tMiwgc2V0TW0yXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3MxLCBzZXRTczFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzczIsIHNldFNzMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NzczEsIHNldFNzczFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzc3MyLCBzZXRTc3MyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3NzMywgc2V0U3NzM10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGluY3JlbWVudDogMC41LFxuICAgIHN0YXJ0QXQ6IDAsXG4gICAgZmluaXNoQXQ6IC0xLFxuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKChwcm9ncmVzczogRmxvYXQzMkxpc3QsIG5leHQ6IEZ1bmN0aW9uKSA9PiB7XG4gICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBuZXh0KCk7XG4gIH0sIG9wdGlvbnMpO1xuXG4gIG9uRmluaXNoKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmluaXNoJyk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3R5bGVPYmplY3Qoe1xuICAgICAgLi4uc3R5bGVPYmplY3QsXG4gICAgICBmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgLFxuICAgICAgZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQsXG4gICAgICBjb2xvcjogQ29sb3JUb1JHQkEoZm9udENvbG9yKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JUb1JHQkEoYmFja2dyb3VuZENvbG9yKSxcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1hcHAvcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3JdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhoID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0SG91cnMoKSwgbWluaW1hbURpc2l0OiAyIH0pO1xuICAgIGNvbnN0IG1tID0gWmVyb1BhZGlkbmcoeyBudW06IGRhdGUuZ2V0TWludXRlcygpLCBtaW5pbWFtRGlzaXQ6IDIgfSk7XG4gICAgY29uc3Qgc3MgPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRTZWNvbmRzKCksIG1pbmltYW1EaXNpdDogMiB9KTtcbiAgICBjb25zdCBzc3MgPSBaZXJvUGFkaWRuZyh7IG51bTogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgbWluaW1hbURpc2l0OiAzIH0pO1xuXG4gICAgc2V0SGgxKGhoWzBdKTtcbiAgICBzZXRIaDIoaGhbMV0pO1xuICAgIHNldE1tMShtbVswXSk7XG4gICAgc2V0TW0yKG1tWzFdKTtcbiAgICBzZXRTczEoc3NbMF0pO1xuICAgIHNldFNzMihzc1sxXSk7XG4gICAgc2V0U3NzMShzc3NbMF0pO1xuICAgIHNldFNzczIoc3NzWzFdKTtcbiAgICBzZXRTc3MzKHNzc1syXSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtYXBwL3JlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJoaDFcIiBudW09e2hoMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJoaDJcIiBudW09e2hoMn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tY29sb25cIj46PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cIm1tMVwiIG51bT17bW0xfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cIm1tMlwiIG51bT17bW0yfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1jb2xvblwiPjo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3MxXCIgbnVtPXtzczF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3MyXCIgbnVtPXtzczJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlbmFibGVkU2hvd01pbGxpc2Vjb25kcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1wYW5lbFwiPlxuICAgICAgICAgICAgPFNjcmVlblBhbmVsIHR5cGU9XCJzc3MxXCIgbnVtPXtzc3MxfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXBhbmVsXCI+XG4gICAgICAgICAgICA8U2NyZWVuUGFuZWwgdHlwZT1cInNzczJcIiBudW09e3NzczJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4tcGFuZWxcIj5cbiAgICAgICAgICAgIDxTY3JlZW5QYW5lbCB0eXBlPVwic3NzM1wiIG51bT17c3NzM30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNjcmVlblBhbmVsOiBSZWFjdC5GQzxTY3JlZW5QYW5lbFByb3BzPiA9ICh7IHR5cGUsIG51bSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHNjcmVlbi1wYW5lbC0ke3R5cGV9YH0+e251bX08L3NwYW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2NyZWVuUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTY3JlZW5QYW5lbCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2xvclJlc3VsdCwgU2tldGNoUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InO1xuXG5pbXBvcnQgeyBGT05UX05BTUVfTElTVCwgZ2V0RW5hYmxlZEZvbnRTaXplIH0gZnJvbSAnfi9mb250LnRzJztcblxuaW1wb3J0IFNlbGVjdENvbnRyb2wgZnJvbSAnfi9jb21wb25lbnRzL3NlbGVjdENvbnRyb2wvaW5kZXgudHN4JztcblxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIGFzIFNjcmVlblNldHRpbmdJbml0aXRhbFN0YXRlIH0gZnJvbSAnfi9mZWF0dXJlcy9zY3JlZW5TZXR0aW5nL3NjcmVlblNldHRpbmdSZWR1Y2VyLnRzJztcblxuY29uc3QgU2NyZWVuU2V0dGluZzogUmVhY3QuRkM8SVNjcmVlblNldHRpbmdTdGF0ZSAmIElTY3JlZW5TZXR0aW5nSGFuZGxlcj4gPSAoeyBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBlbmFibGVkU2hvd01pbGxpc2Vjb25kcywgc2V0Rm9udFNpemUsIHNldEZvbnRGYW1pbHksIHNldEZvbnRXZWlnaHQsIHNldEZvbnRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yLCBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kcyB9KSA9PiB7XG4gIGNvbnN0IFttaW5Gb250U2l6ZV0gPSB1c2VTdGF0ZSgxNCk7XG4gIGNvbnN0IFttYXhGb250U2l6ZV0gPSB1c2VTdGF0ZSgxMDApO1xuXG4gIGNvbnN0IFtjdXJyZW50Rm9udENvbG9yXSA9IHVzZVN0YXRlKFNjcmVlblNldHRpbmdJbml0aXRhbFN0YXRlLmZvbnRDb2xvcik7XG4gIGNvbnN0IFtjdXJyZW50QmFja2dyb3VuZENvbG9yXSA9IHVzZVN0YXRlKFNjcmVlblNldHRpbmdJbml0aXRhbFN0YXRlLmJhY2tncm91bmRDb2xvcik7XG5cbiAgY29uc3QgW2ZvbnRGYW1pbHlPcHRpb25MaXN0LCBzZXRGb250RmFtaWx5T3B0aW9uc10gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuICBjb25zdCBbZm9udFNpemVPcHRpb25MaXN0LCBzZXRGb250U2l6ZU9wdGlvbkxpc3RdID0gdXNlU3RhdGUoW10gYXMgSU9wdGlvbltdKTtcbiAgY29uc3QgW2ZvbnRXZWlnaHRPcHRpb25MaXN0LCBzZXRGb250V2VpZ2h0T3B0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSBhcyBJT3B0aW9uW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9udEZhbWlseU9wdGlvbnMoXG4gICAgICBGT05UX05BTUVfTElTVC5tYXAoKGZvbnROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGZvbnROYW1lLFxuICAgICAgICAgIHZhbHVlTmFtZTogZm9udE5hbWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBzZXRGb250U2l6ZU9wdGlvbkxpc3QoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0OiBJT3B0aW9uW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gbWluRm9udFNpemU7IGluZGV4IDwgbWF4Rm9udFNpemU7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlTmFtZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LCBbbWluRm9udFNpemUsIG1heEZvbnRTaXplXSk7XG5cbiAgY29uc3QgZm9udEZhbWlseU9wdGlvbnNVcGRhdGVDYWxsYmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoZm9udEZhbWlseU9wdGlvbkxpc3QubGVuZ3RoKSB7XG4gICAgICBzZXRGb250RmFtaWx5KGZvbnRGYW1pbHlPcHRpb25MaXN0WzBdLnZhbHVlKTtcbiAgICB9XG4gIH0sIFtmb250RmFtaWx5T3B0aW9uTGlzdCwgc2V0Rm9udEZhbWlseV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9udEZhbWlseU9wdGlvbnNVcGRhdGVDYWxsYmFjaygpO1xuICB9LCBbZm9udEZhbWlseU9wdGlvbnNVcGRhdGVDYWxsYmFja10pO1xuXG4gIGNvbnN0IGZvbnRXZWlnaHRPcHRpb25zVXBkYXRlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Rm9udFdlaWdodE9wdGlvbkxpc3QoKCkgPT4ge1xuICAgICAgcmV0dXJuIGdldEVuYWJsZWRGb250U2l6ZShmb250RmFtaWx5KS5tYXAoKGZvbnRXZWlnaHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogZm9udFdlaWdodC50b1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlTmFtZTogZm9udFdlaWdodC50b1N0cmluZygpLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbmFibGVkRm9udFdlaWdodExpc3QgPSBnZXRFbmFibGVkRm9udFNpemUoZm9udEZhbWlseSk7XG4gICAgaWYgKGVuYWJsZWRGb250V2VpZ2h0TGlzdC5pbmRleE9mKGZvbnRXZWlnaHQpID09PSAtMSkge1xuICAgICAgc2V0Rm9udFdlaWdodChlbmFibGVkRm9udFdlaWdodExpc3RbMF0pO1xuICAgIH1cbiAgfSwgW2ZvbnRGYW1pbHksIGZvbnRXZWlnaHQsIHNldEZvbnRXZWlnaHRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvbnRXZWlnaHRPcHRpb25zVXBkYXRlQ2FsbGJhY2soKTtcbiAgfSwgW2ZvbnRXZWlnaHRPcHRpb25zVXBkYXRlQ2FsbGJhY2tdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IDI4O1xuICAgIHNldEZvbnRTaXplKGRlZmF1bHRWYWx1ZSk7XG4gIH0sIFtzZXRGb250U2l6ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUZvbnRTaXplQ2hhbmdlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldEZvbnRTaXplKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtzZXRGb250U2l6ZV1cbiAgKTtcblxuICBjb25zdCBoYW5kbGVGb250RmFtaWx5Q2hhbmdlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGZvbnROYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzZXRGb250RmFtaWx5KGZvbnROYW1lKTtcbiAgICB9LFxuICAgIFtzZXRGb250RmFtaWx5XVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUZvbnRXZWlnaHRDaGFuZ2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgc2V0Rm9udFdlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbc2V0Rm9udFdlaWdodF1cbiAgKTtcblxuICBjb25zdCBoYW5kbGVGb250Q29sb3JDaGFuZ2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgIChjb2xvcjogQ29sb3JSZXN1bHQpID0+IHtcbiAgICAgIHNldEZvbnRDb2xvcihjb2xvci5yZ2IpO1xuICAgIH0sXG4gICAgW3NldEZvbnRDb2xvcl1cbiAgKTtcblxuICBjb25zdCBoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgIChjb2xvcjogQ29sb3JSZXN1bHQpID0+IHtcbiAgICAgIHNldEJhY2tncm91bmRDb2xvcihjb2xvci5yZ2IpO1xuICAgIH0sXG4gICAgW3NldEJhY2tncm91bmRDb2xvcl1cbiAgKTtcblxuICBjb25zdCBoYW5kbGVFbmFibGVkU2hvd01pbGxpc2Vjb25kc0NhbGxiYWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH0sXG4gICAgW3NldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nXCI+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNldHRpbmctbGVnZW5kXCI+Zm9udDwvbGVnZW5kPlxuICAgICAgICA8ZGwgY2xhc3NOYW1lPVwic2V0dGluZy1mb250XCI+XG4gICAgICAgICAgPFNlbGVjdENvbnRyb2wgdGl0bGU9XCJmb250LWZhbWlseVwiIGRlZmF1bHRWYWx1ZT17Zm9udEZhbWlseU9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRGYW1pbHlPcHRpb25MaXN0fSBuYW1lPVwiZm9udC1mYW1pbHlcIiBvbkNoYW5nZT17aGFuZGxlRm9udEZhbWlseUNoYW5nZUNhbGxiYWNrfSAvPlxuICAgICAgICAgIDxTZWxlY3RDb250cm9sIHRpdGxlPVwiZm9udC1zaXplXCIgZGVmYXVsdFZhbHVlPXtmb250U2l6ZU9wdGlvbkxpc3RbMF19IG9wdGlvbnM9e2ZvbnRTaXplT3B0aW9uTGlzdH0gbmFtZT1cImZvbnQtc2l6ZVwiIG9uQ2hhbmdlPXtoYW5kbGVGb250U2l6ZUNoYW5nZUNhbGxiYWNrfSAvPlxuICAgICAgICAgIDxTZWxlY3RDb250cm9sIHRpdGxlPVwiZm9udC13ZWlnaHRcIiBkZWZhdWx0VmFsdWU9e2ZvbnRXZWlnaHRPcHRpb25MaXN0WzBdfSBvcHRpb25zPXtmb250V2VpZ2h0T3B0aW9uTGlzdH0gbmFtZT1cImZvbnQtd2VpZ2h0XCIgb25DaGFuZ2U9e2hhbmRsZUZvbnRXZWlnaHRDaGFuZ2VDYWxsYmFja30gLz5cbiAgICAgICAgPC9kbD5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwic2V0dGluZy1maWVsZHNldFwiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cImNvbmZpZ1wiPkNvbG9yPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmZvbnQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtjdXJyZW50Rm9udENvbG9yfSBvbkNoYW5nZT17aGFuZGxlRm9udENvbG9yQ2hhbmdlQ2FsbGJhY2t9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb2xvclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPmJhY2tncm91bmQtY29sb3I8L3NwYW4+XG4gICAgICAgICAgICA8U2tldGNoUGlja2VyIGNvbG9yPXtjdXJyZW50QmFja2dyb3VuZENvbG9yfSBvbkNoYW5nZT17aGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlQ2FsbGJhY2t9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNldHRpbmctZmllbGRzZXRcIj5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJjb25maWdcIj5maWVsZDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwibWlsbGlzZWNvbmRzXCIgY2hlY2tlZD17ZW5hYmxlZFNob3dNaWxsaXNlY29uZHN9IG9uQ2hhbmdlPXtoYW5kbGVFbmFibGVkU2hvd01pbGxpc2Vjb25kc0NhbGxiYWNrfSAvPlxuICAgICAgICAgICAgPHNwYW4+c2hvdyBtaWxsaXNlY29uZHM8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy9leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNjcmVlblNldHRpbmcpO1xuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTY3JlZW5TZXR0aW5nKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdENvbnRyb2w6IFJlYWN0LkZDPFNlbGVjdENvbnRyb2xQcm9wcz4gPSAoeyB0aXRsZSwgbmFtZSwgZGVmYXVsdFZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHRpdGxlLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG9wdGlvbnMsIG9uQ2hhbmdlKTtcbiAgY29uc3QgY3JlYXRlT3B0aW9uVGFnID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic2V0dGluZy1mb250X3RpdGxlXCI+e3RpdGxlfTwvZHQ+XG4gICAgICAgIDxkZCBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnRfZGV0YWlsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWZvbnQtZmFtaWx5XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlLnZhbHVlfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9PlxuICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gb3B0aW9ucy5tYXAoKHsgdmFsdWUsIHZhbHVlTmFtZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0ga2V5PXt2YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiA8PntvcHRpb25zLmxlbmd0aCA+IDAgPyBjcmVhdGVPcHRpb25UYWcoKSA6IG51bGx9PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWxlY3RDb250cm9sKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgeyBzZXRUZXh0LCBhc3luY0dldERhdGEgfSBmcm9tICd+L2ZlYXR1cmVzL3Rlc3QvYWN0aW9uLnRzJztcblxuY29uc3QgVGVzdDogUmVhY3QuRkM8SVRlc3RTdGF0ZSAmIElUZXN0SGFuZGxlcj4gPSAoeyB0ZXh0LCBzZXRUZXh0LCBhcGlSZXN1bHQsIGFzeW5jR2V0RGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtsb2NhbFRleHQsIHNldExvY2FsVGV4dF0gPSB1c2VTdGF0ZSh0ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOmdnuWQjOacn+eiuuiqjeeUqFxuICAgIC8vYXN5bmNHZXREYXRhKCcvcmVhY3Qtc3RhdGUvJyk7XG4gICAgYXN5bmNHZXREYXRhKCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtYXBwL3JlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUZXh0KGxvY2FsVGV4dCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWFwcC9yZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2xvY2FsVGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsb2NhbFRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYWxUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8cD7jgrXjg7zjg5Djgr/jgqTjg6DvvJp7YXBpUmVzdWx0fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgU2NyZWVuIGZyb20gJ34vY29tcG9uZW50cy9zY3JlZW4udHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS5zY3JlZW5TZXR0aW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PiB8IFRodW5rRGlzcGF0Y2g8SUFzeW5jR2V0RGF0YVBhcmFtcywgSUFzeW5jRGF0YUdldFJlc3VsdCwgYW55PikgPT4ge1xuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2NyZWVuKTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldEZvbnRTaXplLCBzZXRGb250V2VpZ2h0LCBzZXRGb250RmFtaWx5LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSBmcm9tICd+L2ZlYXR1cmVzL3NjcmVlblNldHRpbmcvc2NyZWVuU2V0dGluZ1JlZHVjZXIudHMnO1xuXG5pbXBvcnQgU2NyZWVuU2V0dGluZyBmcm9tICd+L2NvbXBvbmVudHMvc2NyZWVuU2V0dGluZy50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLnNjcmVlblNldHRpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0Rm9udFNpemU6IChudW06IHN0cmluZyB8IG51bWJlcikgPT4gZGlzcGF0Y2goc2V0Rm9udFNpemUobnVtKSksXG4gICAgc2V0Rm9udEZhbWlseTogKG51bTogc3RyaW5nKSA9PiBkaXNwYXRjaChzZXRGb250RmFtaWx5KG51bSkpLFxuICAgIHNldEZvbnRXZWlnaHQ6IChudW06IHN0cmluZyB8IG51bWJlcikgPT4gZGlzcGF0Y2goc2V0Rm9udFdlaWdodChudW0pKSxcbiAgICBzZXRGb250Q29sb3I6IChjb2xvcjogSUNvbG9yKSA9PiBkaXNwYXRjaChzZXRGb250Q29sb3IoY29sb3IpKSxcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3I6IChjb2xvcjogSUNvbG9yKSA9PiBkaXNwYXRjaChzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpKSxcbiAgICBzZXRFbmFibGVkU2hvd01pbGxpc2Vjb25kczogKGlzRW5hYmxlZDogYm9vbGVhbikgPT4gZGlzcGF0Y2goc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMoaXNFbmFibGVkKSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTY3JlZW5TZXR0aW5nKTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vZmVhdHVyZXMvdGVzdC90ZXN0UmVkdWNlci50cyc7XG5cbmltcG9ydCBUZXN0IGZyb20gJ34vY29tcG9uZW50cy90ZXN0LnRzeCc7XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uYXBwU3RhdGUudGVzdCxcbiAgfTtcbn07XG5cbi8vIFRodW5rRGlzcGF0Y2jjga7lvJXmlbDjga7lnovkvZXmjIflrprjgZnjgozjgbDjgojjgYTjgYvjgojjgY/jgo/jgYvjgonjgarjgYvjgaPjgZ/jgIFleHRyYUFyZ3VtZW5044Gu5Z6L44Gr44Gq44KM44Gw44GE44GE44Go44GK44KC44GG44KT44Gg44GR44GpXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0VGV4dDogKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0VGV4dCh0ZXh0KSk7XG4gICAgfSxcbiAgICBhc3luY0dldERhdGE6ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goYXN5bmNHZXREYXRhKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVNjcmVlblN0YXRlID0ge307XG5cbmNvbnN0IHNjcmVlblN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnc2NyZWVuJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2NyZWVuU3RhdGUucmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IElTY3JlZW5TZXR0aW5nU3RhdGUgPSB7XG4gIGZvbnRTaXplOiAyOCxcbiAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRDb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAxIH0sXG4gIGJhY2tncm91bmRDb2xvcjogeyByOiAyNTUsIGc6IDI1NSwgYjogMjU1LCBhOiAxIH0sXG4gIGVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiB0cnVlLFxufTtcblxuY29uc3QgdGVzdFN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnc2NyZWVuU2V0dGluZycsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRGb250U2l6ZTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc3QgZm9udFNpemUgPSB0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChwYXlsb2FkLCAxMCkgOiBwYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbnRTaXplIH07XG4gICAgfSxcbiAgICBzZXRGb250RmFtaWx5OiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udEZhbWlseTogcGF5bG9hZCB9O1xuICAgIH0sXG4gICAgc2V0Rm9udFdlaWdodDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc3QgZm9udFdlaWdodCA9IHR5cGVvZiBwYXlsb2FkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHBheWxvYWQsIDEwKSA6IHBheWxvYWQ7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udFdlaWdodCB9O1xuICAgIH0sXG4gICAgc2V0Rm9udENvbG9yOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9udENvbG9yOiBwYXlsb2FkIH07XG4gICAgfSxcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3I6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBiYWNrZ3JvdW5kQ29sb3I6IHBheWxvYWQgfTtcbiAgICB9LFxuICAgIHNldEVuYWJsZWRTaG93TWlsbGlzZWNvbmRzOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZW5hYmxlZFNob3dNaWxsaXNlY29uZHM6IHBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldEZvbnRTaXplLCBzZXRGb250RmFtaWx5LCBzZXRGb250V2VpZ2h0LCBzZXRGb250Q29sb3IsIHNldEJhY2tncm91bmRDb2xvciwgc2V0RW5hYmxlZFNob3dNaWxsaXNlY29uZHMgfSA9IHRlc3RTdGF0ZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXN0U3RhdGUucmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElUZXN0U3RhdGUgPSB7XG4gIHRleHQ6ICdmaXJzdCBpbXByZXNzaW9uJyxcbiAgYXBpRW5kcG9pbnQ6ICcnLFxuICBhcGlSZXN1bHQ6ICcnLFxufTtcbmV4cG9ydCBjb25zdCBhc3luY0dldERhdGEgPSBjcmVhdGVBc3luY1RodW5rPGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZT4oXG4gICdzZXJ2ZXJ0aW1lL2hlYWQnLFxuICBhc3luYyAoKTogUHJvbWlzZTxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+ID0+IHtcbiAgICBjb25zdCBhc3luY1Jlc3AgPSBhd2FpdCBheGlvcy5oZWFkKCcuLycpO1xuXG4gICAgLy8g6YGF5bu244Gu5YuV5L2c44KS56K66KqN44GZ44KL44Gf44KB44Gr54Sh55CG44KE44KK6YGF5bu2XG4gICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBhc3luY1Jlc3AuaGVhZGVycy5kYXRlLFxuICAgIH07XG4gIH1cbik7XG5cbmNvbnN0IHRlc3RTdGF0ZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Rlc3QnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0VGV4dChzdGF0ZTogSVRlc3RTdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0ZXh0OiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG5cbiAgLy8gcmVkdXgtdGh1bmtcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2UoYXN5bmNHZXREYXRhLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvcGVuZGluZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICAvLyAtPiBzZXJ2ZXJ0aW1lL2hlYWQvZnVsZmlsbGVkXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXBpUmVzdWx0OiBhY3Rpb24ucGF5bG9hZC5kYXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoYXN5bmNHZXREYXRhLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uLnR5cGUpO1xuICAgICAgLy8gLT4gc2VydmVydGltZS9oZWFkL3JlamVjdGVkXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0VGV4dCB9ID0gdGVzdFN0YXRlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3RTdGF0ZS5yZWR1Y2VyO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJRm9udFNldCB7XG4gIGZvbnROYW1lOiBzdHJpbmc7XG4gIGZvbnRzaXplbGlzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVDogSUZvbnRTZXRbXSA9IFtcbiAge1xuICAgIGZvbnROYW1lOiAnc2Fucy1zZXJpZicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdzZXJpZicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdtb25vc3BhY2UnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBXRUJGT05UX0ZBTUlMSUVTX0xJU1Q6IElGb250U2V0W10gPSBbXG4gIC8vIGZvbnRcbiAge1xuICAgIGZvbnROYW1lOiAnT3JiaXRyb24nLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnV2FsbHBvZXQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdSb2JvdG8nLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMyw3LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdPc3dhbGQnLFxuICAgIGZvbnRzaXplbGlzdDogJzIsMyw0LDYsNyw1JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFsc2FtaXEgU2FucycsXG4gICAgZm9udHNpemVsaXN0OiAnNCw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQW50b24nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYXJsb3cgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1BhdHJpY2sgSGFuZCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhY3JhbWVudG8nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQb2lyZXQgT25lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUHJlc3MgU3RhcnQgMlAnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQ2hha3JhIFBldGNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICczLDQsNSw2LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYWxvbyBDaGV0dGFuIDInLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0NvZGEnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsOCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIFNlbWkgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIEV4dHJhIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdBbGRyaWNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU3RhcmRvcyBTdGVuY2lsJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdNZWdyaW0nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdJY2VsYW5kJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FycGFuY2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2hvanVtYXJ1JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTG9uZHJpbmEgT3V0bGluZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0dlbycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xpYnJlIEJhcmNvZGUgMzkgRXh0ZW5kZWQgVGV4dCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1R1bHBlbiBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfRkFNSUxJRVNfTElTVCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQoREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVCwgV0VCRk9OVF9GQU1JTElFU19MSVNUKTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVMgPSBXRUJGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lLCBmb250c2l6ZWxpc3QgfTogSUZvbnRTZXQpID0+IHtcbiAgY29uc3QgcmVwbGFjZWRGb250U2l6ZUxpc3QgPSBmb250c2l6ZWxpc3QucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKTtcbiAgcmV0dXJuIGAke2ZvbnROYW1lfToke3JlcGxhY2VkRm9udFNpemVMaXN0fWA7XG59KTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfTkFNRV9MSVNUID0gRk9OVF9GQU1JTElFU19MSVNULm1hcCgoeyBmb250TmFtZSB9OiBJRm9udFNldCkgPT4ge1xuICByZXR1cm4gYCR7Zm9udE5hbWV9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0RW5hYmxlZEZvbnRTaXplID0gKGZvbnROYW1lOiBzdHJpbmcpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IEZPTlRfRkFNSUxJRVNfTElTVC5maWx0ZXIoKGZvbnRzZXQpID0+IHtcbiAgICByZXR1cm4gZm9udHNldC5mb250TmFtZSA9PT0gZm9udE5hbWU7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRMaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZExpc3RbMF0uZm9udHNpemVsaXN0XG4gICAgLnJlcGxhY2UoLyhcXGQpL2csICckMTAwJylcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICAgIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcbmltcG9ydCB7IFdFQkZPTlRfRkFNSUxJRVMgfSBmcm9tICd+L2ZvbnQudHMnO1xuXG4vL2ltcG9ydCBcIn4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICd+L0FwcC50c3gnO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5XZWJGb250LmxvYWQoe1xuICBnb29nbGU6IHtcbiAgICBmYW1pbGllczogV0VCRk9OVF9GQU1JTElFUyxcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQgdGVzdFJlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyJztcbmltcG9ydCBzY3JlZW5SZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXInO1xuaW1wb3J0IHNjcmVlblNldHRpbmdSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuU2V0dGluZy9zY3JlZW5TZXR0aW5nUmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRlc3Q6IHRlc3RSZWR1Y2VyLFxuICBzY3JlZW46IHNjcmVlblJlZHVjZXIsXG4gIHNjcmVlblNldHRpbmc6IHNjcmVlblNldHRpbmdSZWR1Y2VyLFxufSk7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiByb290UmVkdWNlcixcbn0pO1xuXG4vLyDkuIvoqJjjga7jgojjgYbjgavoqJjov7DjgafjgY3jgovjgYvjgolyb290UmVkdWNlcuOBruW/heimgeaAp+OBjOOCiOOBj+OCj+OBi+OCieOBquOBhFxuLy9cbi8vaW1wb3J0IHRlc3RSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvdGVzdC90ZXN0UmVkdWNlcic7XG4vL2ltcG9ydCBzY3JlZW5SZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuL3NjcmVlblJlZHVjZXInO1xuLy9pbXBvcnQgc2NyZWVuU2V0dGluZ1JlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW5TZXR0aW5nL3NjcmVlblNldHRpbmdSZWR1Y2VyJztcbi8vXG4vL2V4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcbi8vICByZWR1Y2VyOiB7XG4vLyAgICB0ZXN0OiB0ZXN0UmVkdWNlcixcbi8vICAgIHNjcmVlbjogc2NyZWVuUmVkdWNlcixcbi8vICAgIHNjcmVlblNldHRpbmc6IHNjcmVlblNldHRpbmdSZWR1Y2VyLFxuLy8gIH0sXG4vL30pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
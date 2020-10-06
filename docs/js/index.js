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
/* harmony import */ var _Container_Test_index_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Container/Test/index.tsx */ "./src/Container/Test/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


// container
//import Screen from '~/Container/Screen/index.tsx';
//import ScreenSetting from '~/Container/ScreenSetting/index.tsx';


var App = function () {
    //<Screen />
    //<ScreenSetting />
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], { store: _store_ts__WEBPACK_IMPORTED_MODULE_1__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "App" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container_Test_index_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


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

/***/ "./src/rootReducer.ts":
/*!****************************!*\
  !*** ./src/rootReducer.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);


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
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/rootReducer */ "./src/rootReducer.ts");


var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
});
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lci9UZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhdGUvVGVzdC9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMv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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDTztBQUVHO0FBQ1M7QUFFN0Msd0JBQXdCO0FBQ0k7QUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFNUMsb0RBQU8sQ0FBQyxJQUFJLENBQUM7SUFDWCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUseURBQWdCO0tBQzNCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsZ0RBQVEsQ0FBQyxNQUFNLENBQUMsMkRBQUMsZ0RBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pCekQ7QUFBQTtBQUFtRDtBQUNuRCxJQUFNLFdBQVcsR0FBRyx3RUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXpCLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNIM0I7QUFBQTtBQUFBO0FBQWtEO0FBQ1Y7QUFFeEMsSUFBTSxLQUFLLEdBQUcsdUVBQWMsQ0FBQztJQUMzQixPQUFPLEVBQUUsb0RBQVc7Q0FDckIsQ0FBQyxDQUFDO0FBSVksb0VBQUssRUFBQyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJqcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wiY2xvY2tcIl0gPSB3aW5kb3dbXCJjbG9ja1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c3hcIixcImpzL3ZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICd+L3N0b3JlLnRzJztcblxuLy8gY29udGFpbmVyXG4vL2ltcG9ydCBTY3JlZW4gZnJvbSAnfi9Db250YWluZXIvU2NyZWVuL2luZGV4LnRzeCc7XG4vL2ltcG9ydCBTY3JlZW5TZXR0aW5nIGZyb20gJ34vQ29udGFpbmVyL1NjcmVlblNldHRpbmcvaW5kZXgudHN4JztcbmltcG9ydCBUZXN0IGZyb20gJ34vQ29udGFpbmVyL1Rlc3QvaW5kZXgudHN4JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIC8vPFNjcmVlbiAvPlxuICAvLzxTY3JlZW5TZXR0aW5nIC8+XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8VGVzdD48L1Rlc3Q+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVzdFByb3BzIGZyb20gJ34vQ29udGFpbmVyL1Rlc3QvaW5kZXgudHN4JztcbmltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vU3RhdGUvVGVzdC9hY3Rpb24udHMnO1xuXG5jb25zdCBUZXN0OiBSZWFjdC5GQzxJVGVzdFN0YXRlICYgSVRlc3RIYW5kbGVyPiA9ICh7IHRleHQsIHNldFRleHQsIGFwaVJlc3VsdCwgYXN5bmNHZXREYXRhIH0pID0+IHtcbiAgY29uc3QgW2xvY2FsVGV4dCwgc2V0TG9jYWxUZXh0XSA9IHVzZVN0YXRlKHRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g6Z2e5ZCM5pyf56K66KqN55SoXG4gICAgYXN5bmNHZXREYXRhKCcvcmVhY3Qtc3RhdGUvJyk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRleHQobG9jYWxUZXh0KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtsb2NhbFRleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bG9jYWxUZXh0fSBvbkNoYW5nZT17KGUpID0+IHNldExvY2FsVGV4dChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8cD57dGV4dH08L3A+XG4gICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgPHA+44K144O844OQ44K/44Kk44Og77yae2FwaVJlc3VsdH08L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0O1xuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAndHlwZXNjcmlwdC1mc2EnO1xuXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgeyBzZXRUZXh0LCBhc3luY0dldERhdGEgfSBmcm9tICd+L1N0YXRlL1Rlc3QvYWN0aW9uLnRzJztcblxuaW1wb3J0IFRlc3QgZnJvbSAnfi9Db21wb25lbnRzL1Rlc3QudHN4JztcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS5UZXN0UmVkdWNlcixcbiAgfTtcbn07XG5cbi8vIFRodW5rRGlzcGF0Y2jjga7lvJXmlbDjga7lnovkvZXmjIflrprjgZnjgozjgbDjgojjgYTjgYvjgojjgY/jgo/jgYvjgonjgarjgYvjgaPjgZ/jgIFleHRyYUFyZ3VtZW5044Gu5Z6L44Gr44Gq44KM44Gw44GE44GE44Go44GK44KC44GG44KT44Gg44GR44GpXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+IHwgVGh1bmtEaXNwYXRjaDxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBhbnk+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0VGV4dDogKHRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goc2V0VGV4dCh0ZXh0KSksXG4gICAgYXN5bmNHZXREYXRhOiAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIGRpc3BhdGNoKGFzeW5jR2V0RGF0YSh7IHVybCB9KSk7XG4gICAgfSxcbiAgfTtcbiAgLy9yZXR1cm4ge1xuICAvLyAgaW5jcmVtZW50OiAoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnQoKSksXG4gIC8vICBkZWNyZW1lbnQ6ICgpID0+IGRpc3BhdGNoKGRlY3JlbWVudCgpKSxcbiAgLy8gIHJlc2V0OiAoKSA9PiBkaXNwYXRjaChyZXNldCgpKSxcbiAgLy99XG4gIC8vLy9pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCcgO1xuICAvLy8vIOOBk+OBrmJpbmRBY3Rpb25DcmVhdG9ycyDjgpLkvb/jgYbjgahkaXNwYXRjaOOCkuOBoeOCk+OBn+OCieabuOOBj+W/heimgeOBjOOBquOBj+OBquOCi+OCieOBl+OBhO+8iOOBn+OCgeOBl+OBpuOBquOBhO+8iVxuICAvL3JldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzZXRUZXh0IH0sIGRpc3BhdGNoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlc3QpO1xuIiwiLy8gVE9ETzog5Z+65pys44Gn44GN44Gm44GL44KJ44Gf44KB44Gd44GGXG4vLyBodHRwczovL3FpaXRhLmNvbS9tMGEvaXRlbXMvNzAzZDY0Yzc0ZTQzY2IzOTJhNjRcbmltcG9ydCBhY3Rpb25DcmVhdG9yRmFjdG9yeSBmcm9tICd0eXBlc2NyaXB0LWZzYSc7XG5pbXBvcnQgeyBhc3luY0ZhY3RvcnkgfSBmcm9tICd0eXBlc2NyaXB0LWZzYS1yZWR1eC10aHVuayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5cbmNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yRmFjdG9yeSgpO1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFjdGlvbkNyZWF0b3IoJ0lOSVQnKTtcbmV4cG9ydCBjb25zdCBzZXRUZXh0ID0gYWN0aW9uQ3JlYXRvcjxzdHJpbmc+KCdTRVRfVEVYVCcpO1xuXG4vLy8vIOaZrumAmuOBruabuOOBjeaWuVxuLy9leHBvcnQgdHlwZSBBY3Rpb24gPVxuLy8gIHwge1xuLy8gICAgICB0eXBlOiAnSU5JVCc7XG4vLyAgICAgIHBheWxvYWQ6IHVuZGVmaW5lZDtcbi8vICAgIH1cbi8vICB8IHtcbi8vICAgICAgdHlwZTogJ1NFVF9URVhUJztcbi8vICAgICAgcGF5bG9hZDogc3RyaW5nO1xuLy8gICAgfTtcblxuY29uc3QgY3JlYXRlQXN5bmMgPSBhc3luY0ZhY3Rvcnk8QXBwU3RhdGU+KGFjdGlvbkNyZWF0b3IpO1xuXG5mdW5jdGlvbiBnZXRTZXJ2ZXJEYXRlKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBheGlvcy5oZWFkKHVybCk7XG59XG5cbmV4cG9ydCBjb25zdCBhc3luY0dldERhdGEgPSBjcmVhdGVBc3luYzxJQXN5bmNHZXREYXRhUGFyYW1zLCBJQXN5bmNEYXRhR2V0UmVzdWx0LCBJQXN5bmNEYXRhR2V0RXJyb3I+KFxuICAvL2hvZ2VcbiAgJ0FTWU5DX0dFVERBVEEnLFxuICBhc3luYyAoeyB1cmwgfSwgZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgYXN5bmNSZXNwID0gYXdhaXQgZ2V0U2VydmVyRGF0ZSh1cmwpO1xuXG4gICAgLy8g6YGF5bu244Gu5YuV5L2c44KS56K66KqN44GZ44KL44Gf44KB44Gr54Sh55CG44KE44KK6YGF5bu2XG4gICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBhc3luY1Jlc3AuaGVhZGVycy5kYXRlLFxuICAgIH07XG4gIH1cbik7XG5cbi8vLy8gTk9URTog6Z2e5ZCM5pyf44GuYWN0aW9uQ3JlYXRvclxuLy8gMeOBpOOCgeOBjEFQSeOBruW8leaVsOOBqOOBi+OBp+S9v+OBhuOChOOBpFxuLy8gcGFyYW06IHsgdXJsOiBzdHJpbmcgfSxcbi8vIGRvbmUgOiB7IGRhdGU6IHN0cmluZyB9XG4vLyBmYWlsIDogeyBlcnJvcjogc3RyaW5nIH1cbi8vIHR5cGUgcGFyYW1zID0geyB1cmw6IHN0cmluZyB9O1xuLy8gdHlwZSByZXN1bHQgPSB7IGRhdGU6IHN0cmluZyB9O1xuLy8gdHlwZSBlcnJvciA9IHsgdGV4dDogc3RyaW5nIH07XG4vLyBleHBvcnQgY29uc3QgYXN5bmNHZXREYXRhID0gYWN0aW9uQ3JlYXRvci5hc3luYzxwYXJhbXMsIHJlc3VsdCwgZXJyb3I+KCdTT01FVEhJTkdfQVNZTkMnKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUZvbnRTZXQge1xuICBmb250TmFtZTogc3RyaW5nO1xuICBmb250c2l6ZWxpc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRGT05UX0ZBTUlMSUVTX0xJU1Q6IElGb250U2V0W10gPSBbXG4gIHtcbiAgICBmb250TmFtZTogJ3NhbnMtc2VyaWYnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnc2VyaWYnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnbW9ub3NwYWNlJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFU19MSVNUOiBJRm9udFNldFtdID0gW1xuICAvLyBmb250XG4gIHtcbiAgICBmb250TmFtZTogJ09yYml0cm9uJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1dhbGxwb2V0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUm9ib3RvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDMsNyw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnT3N3YWxkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcyLDMsNCw2LDcsNScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhbHNhbWlxIFNhbnMnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0FudG9uJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFybG93IENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQYXRyaWNrIEhhbmQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWNyYW1lbnRvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUG9pcmV0IE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1ByZXNzIFN0YXJ0IDJQJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0NoYWtyYSBQZXRjaCcsXG4gICAgZm9udHNpemVsaXN0OiAnMyw0LDUsNiw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFsb28gQ2hldHRhbiAyJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdDb2RhJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDgnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBTZW1pIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBFeHRyYSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQWxkcmljaCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1N0YXJkb3MgU3RlbmNpbCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTWVncmltJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnSWNlbGFuZCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhcnBhbmNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1Nob2p1bWFydScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xvbmRyaW5hIE91dGxpbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQwMCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0dlbycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xpYnJlIEJhcmNvZGUgMzkgRXh0ZW5kZWQgVGV4dCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1R1bHBlbiBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfRkFNSUxJRVNfTElTVCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQoREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVCwgV0VCRk9OVF9GQU1JTElFU19MSVNUKTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVMgPSBXRUJGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lLCBmb250c2l6ZWxpc3QgfTogSUZvbnRTZXQpID0+IHtcbiAgY29uc3QgcmVwbGFjZWRGb250U2l6ZUxpc3QgPSBmb250c2l6ZWxpc3QucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKTtcbiAgcmV0dXJuIGAke2ZvbnROYW1lfToke3JlcGxhY2VkRm9udFNpemVMaXN0fWA7XG59KTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfTkFNRV9MSVNUID0gRk9OVF9GQU1JTElFU19MSVNULm1hcCgoeyBmb250TmFtZSB9OiBJRm9udFNldCkgPT4ge1xuICByZXR1cm4gYCR7Zm9udE5hbWV9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0RW5hYmxlZEZvbnRTaXplID0gKGZvbnROYW1lOiBzdHJpbmcpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IEZPTlRfRkFNSUxJRVNfTElTVC5maWx0ZXIoKGZvbnRzZXQpID0+IHtcbiAgICByZXR1cm4gZm9udHNldC5mb250TmFtZSA9PT0gZm9udE5hbWU7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRMaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZExpc3RbMF0uZm9udHNpemVsaXN0XG4gICAgLnJlcGxhY2UoLyhcXGQpL2csICckMTAwJylcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICAgIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcbmltcG9ydCB7IFdFQkZPTlRfRkFNSUxJRVMgfSBmcm9tICd+L2ZvbnQudHMnO1xuXG4vL2ltcG9ydCBcIn4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICd+L0FwcC50c3gnO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5XZWJGb250LmxvYWQoe1xuICBnb29nbGU6IHtcbiAgICBmYW1pbGllczogV0VCRk9OVF9GQU1JTElFUyxcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe30pO1xuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJ34vcm9vdFJlZHVjZXInO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG59KTtcblxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
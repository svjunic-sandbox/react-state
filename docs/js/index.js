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

/***/ "./src/State/Test/index.ts":
/*!*********************************!*\
  !*** ./src/State/Test/index.ts ***!
  \*********************************/
/*! exports provided: setText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
var asyncGetData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(
//hoge
'servertime/head', function (arg, thunk) { return __awaiter(void 0, void 0, void 0, function () {
    var asyncResp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.head('/')];
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
        builder.addCase(asyncGetData.fulfilled, function (state, action) {
            return __assign({}, state);
        });
    },
});
var setText = testState.actions.setText;
/* harmony default export */ __webpack_exports__["default"] = (testState);


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
/* harmony import */ var _State_Test_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State/Test/index */ "./src/State/Test/index.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: {
        test: _State_Test_index__WEBPACK_IMPORTED_MODULE_1__["default"].reducer,
    },
}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lci9UZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhdGUvVGVzdC9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlL1Rlc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFj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QUMzQixDQUFDLENBQUMsQ0FBQztJQUVMLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDTztBQUVHO0FBQ1M7QUFFN0Msd0JBQXdCO0FBQ0k7QUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFNUMsb0RBQU8sQ0FBQyxJQUFJLENBQUM7SUFDWCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUseURBQWdCO0tBQzNCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsZ0RBQVEsQ0FBQyxNQUFNLENBQUMsMkRBQUMsZ0RBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pCekQ7QUFBQTtBQUFBO0FBQWtEO0FBSVA7QUFFNUIsc0lBQWMsQ0FBQztJQUM1QixPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUseURBQVMsQ0FBQyxPQUFPO0tBQ3hCO0NBQ0YsQ0FBQyxFQUFDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImpzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJjbG9ja1wiXSA9IHdpbmRvd1tcImNsb2NrXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwianMvdmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ34vc3RvcmUudHMnO1xuXG4vLyBjb250YWluZXJcbi8vaW1wb3J0IFNjcmVlbiBmcm9tICd+L0NvbnRhaW5lci9TY3JlZW4vaW5kZXgudHN4Jztcbi8vaW1wb3J0IFNjcmVlblNldHRpbmcgZnJvbSAnfi9Db250YWluZXIvU2NyZWVuU2V0dGluZy9pbmRleC50c3gnO1xuaW1wb3J0IFRlc3QgZnJvbSAnfi9Db250YWluZXIvVGVzdC9pbmRleC50c3gnO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy88U2NyZWVuIC8+XG4gIC8vPFNjcmVlblNldHRpbmcgLz5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICAgIDxUZXN0PjwvVGVzdD5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXN0UHJvcHMgZnJvbSAnfi9Db250YWluZXIvVGVzdC9pbmRleC50c3gnO1xuaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9TdGF0ZS9UZXN0L2FjdGlvbi50cyc7XG5cbmNvbnN0IFRlc3Q6IFJlYWN0LkZDPElUZXN0U3RhdGUgJiBJVGVzdEhhbmRsZXI+ID0gKHsgdGV4dCwgc2V0VGV4dCwgYXBpUmVzdWx0LCBhc3luY0dldERhdGEgfSkgPT4ge1xuICBjb25zdCBbbG9jYWxUZXh0LCBzZXRMb2NhbFRleHRdID0gdXNlU3RhdGUodGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDpnZ7lkIzmnJ/norroqo3nlKhcbiAgICBhc3luY0dldERhdGEoJy9yZWFjdC1zdGF0ZS8nKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGV4dChsb2NhbFRleHQpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2xvY2FsVGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsb2NhbFRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYWxUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8cD7jgrXjg7zjg5Djgr/jgqTjg6DvvJp7YXBpUmVzdWx0fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICd0eXBlc2NyaXB0LWZzYSc7XG5cbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vU3RhdGUvVGVzdC9hY3Rpb24udHMnO1xuXG5pbXBvcnQgVGVzdCBmcm9tICd+L0NvbXBvbmVudHMvVGVzdC50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLlRlc3RSZWR1Y2VyLFxuICB9O1xufTtcblxuLy8gVGh1bmtEaXNwYXRjaOOBruW8leaVsOOBruWei+S9leaMh+WumuOBmeOCjOOBsOOCiOOBhOOBi+OCiOOBj+OCj+OBi+OCieOBquOBi+OBo+OBn+OAgWV4dHJhQXJndW1lbnTjga7lnovjgavjgarjgozjgbDjgYTjgYTjgajjgYrjgoLjgYbjgpPjgaDjgZHjgalcbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRUZXh0OiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChzZXRUZXh0KHRleHQpKSxcbiAgICBhc3luY0dldERhdGE6ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goYXN5bmNHZXREYXRhKHsgdXJsIH0pKTtcbiAgICB9LFxuICB9O1xuICAvL3JldHVybiB7XG4gIC8vICBpbmNyZW1lbnQ6ICgpID0+IGRpc3BhdGNoKGluY3JlbWVudCgpKSxcbiAgLy8gIGRlY3JlbWVudDogKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50KCkpLFxuICAvLyAgcmVzZXQ6ICgpID0+IGRpc3BhdGNoKHJlc2V0KCkpLFxuICAvL31cbiAgLy8vL2ltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JyA7XG4gIC8vLy8g44GT44GuYmluZEFjdGlvbkNyZWF0b3JzIOOCkuS9v+OBhuOBqGRpc3BhdGNo44KS44Gh44KT44Gf44KJ5pu444GP5b+F6KaB44GM44Gq44GP44Gq44KL44KJ44GX44GE77yI44Gf44KB44GX44Gm44Gq44GE77yJXG4gIC8vcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IHNldFRleHQgfSwgZGlzcGF0Y2gpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdCk7XG4iLCIvLyBUT0RPOiDln7rmnKzjgafjgY3jgabjgYvjgonjgZ/jgoHjgZ3jgYZcbi8vIGh0dHBzOi8vcWlpdGEuY29tL20wYS9pdGVtcy83MDNkNjRjNzRlNDNjYjM5MmE2NFxuaW1wb3J0IGFjdGlvbkNyZWF0b3JGYWN0b3J5IGZyb20gJ3R5cGVzY3JpcHQtZnNhJztcbmltcG9ydCB7IGFzeW5jRmFjdG9yeSB9IGZyb20gJ3R5cGVzY3JpcHQtZnNhLXJlZHV4LXRodW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcblxuY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JGYWN0b3J5KCk7XG5cbmV4cG9ydCBjb25zdCBpbml0ID0gYWN0aW9uQ3JlYXRvcignSU5JVCcpO1xuZXhwb3J0IGNvbnN0IHNldFRleHQgPSBhY3Rpb25DcmVhdG9yPHN0cmluZz4oJ1NFVF9URVhUJyk7XG5cbi8vLy8g5pmu6YCa44Gu5pu444GN5pa5XG4vL2V4cG9ydCB0eXBlIEFjdGlvbiA9XG4vLyAgfCB7XG4vLyAgICAgIHR5cGU6ICdJTklUJztcbi8vICAgICAgcGF5bG9hZDogdW5kZWZpbmVkO1xuLy8gICAgfVxuLy8gIHwge1xuLy8gICAgICB0eXBlOiAnU0VUX1RFWFQnO1xuLy8gICAgICBwYXlsb2FkOiBzdHJpbmc7XG4vLyAgICB9O1xuXG5jb25zdCBjcmVhdGVBc3luYyA9IGFzeW5jRmFjdG9yeTxBcHBTdGF0ZT4oYWN0aW9uQ3JlYXRvcik7XG5cbmZ1bmN0aW9uIGdldFNlcnZlckRhdGUodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGF4aW9zLmhlYWQodXJsKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFzeW5jR2V0RGF0YSA9IGNyZWF0ZUFzeW5jPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIElBc3luY0RhdGFHZXRFcnJvcj4oXG4gIC8vaG9nZVxuICAnQVNZTkNfR0VUREFUQScsXG4gIGFzeW5jICh7IHVybCB9LCBkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBhc3luY1Jlc3AgPSBhd2FpdCBnZXRTZXJ2ZXJEYXRlKHVybCk7XG5cbiAgICAvLyDpgYXlu7bjga7li5XkvZzjgpLnorroqo3jgZnjgovjgZ/jgoHjgavnhKHnkIbjgoTjgorpgYXlu7ZcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGFzeW5jUmVzcC5oZWFkZXJzLmRhdGUsXG4gICAgfTtcbiAgfVxuKTtcblxuLy8vLyBOT1RFOiDpnZ7lkIzmnJ/jga5hY3Rpb25DcmVhdG9yXG4vLyAx44Gk44KB44GMQVBJ44Gu5byV5pWw44Go44GL44Gn5L2/44GG44KE44GkXG4vLyBwYXJhbTogeyB1cmw6IHN0cmluZyB9LFxuLy8gZG9uZSA6IHsgZGF0ZTogc3RyaW5nIH1cbi8vIGZhaWwgOiB7IGVycm9yOiBzdHJpbmcgfVxuLy8gdHlwZSBwYXJhbXMgPSB7IHVybDogc3RyaW5nIH07XG4vLyB0eXBlIHJlc3VsdCA9IHsgZGF0ZTogc3RyaW5nIH07XG4vLyB0eXBlIGVycm9yID0geyB0ZXh0OiBzdHJpbmcgfTtcbi8vIGV4cG9ydCBjb25zdCBhc3luY0dldERhdGEgPSBhY3Rpb25DcmVhdG9yLmFzeW5jPHBhcmFtcywgcmVzdWx0LCBlcnJvcj4oJ1NPTUVUSElOR19BU1lOQycpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVRlc3RTdGF0ZSA9IHtcbiAgdGV4dDogJ2ZpcnN0IGltcHJlc3Npb24nLFxuICBhcGlFbmRwb2ludDogJycsXG4gIGFwaVJlc3VsdDogJycsXG59O1xuXG50eXBlIGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZSA9IHtcbiAgZGF0ZTogc3RyaW5nO1xufTtcblxuY29uc3QgYXN5bmNHZXREYXRhID0gY3JlYXRlQXN5bmNUaHVuazxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+KFxuICAvL2hvZ2VcbiAgJ3NlcnZlcnRpbWUvaGVhZCcsXG4gIGFzeW5jIChhcmcsIHRodW5rKTogUHJvbWlzZTxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+ID0+IHtcbiAgICBjb25zdCBhc3luY1Jlc3AgPSBhd2FpdCBheGlvcy5oZWFkKCcvJyk7XG5cbiAgICAvLyDpgYXlu7bjga7li5XkvZzjgpLnorroqo3jgZnjgovjgZ/jgoHjgavnhKHnkIbjgoTjgorpgYXlu7ZcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGFzeW5jUmVzcC5oZWFkZXJzLmRhdGUsXG4gICAgfTtcbiAgfVxuKTtcblxuY29uc3QgdGVzdFN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAndGVzdCcsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRUZXh0KHN0YXRlOiBJVGVzdFN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRleHQ6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcblxuICAvLyByZWR1eC10aHVua1xuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldFRleHQgfSA9IHRlc3RTdGF0ZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXN0U3RhdGU7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElGb250U2V0IHtcbiAgZm9udE5hbWU6IHN0cmluZztcbiAgZm9udHNpemVsaXN0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxURk9OVF9GQU1JTElFU19MSVNUOiBJRm9udFNldFtdID0gW1xuICB7XG4gICAgZm9udE5hbWU6ICdzYW5zLXNlcmlmJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ3NlcmlmJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ21vbm9zcGFjZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVNfTElTVDogSUZvbnRTZXRbXSA9IFtcbiAgLy8gZm9udFxuICB7XG4gICAgZm9udE5hbWU6ICdPcmJpdHJvbicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdXYWxscG9ldCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1JvYm90bycsXG4gICAgZm9udHNpemVsaXN0OiAnMSwzLDcsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ09zd2FsZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMiwzLDQsNiw3LDUnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYWxzYW1pcSBTYW5zJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdBbnRvbicsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhcmxvdyBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUGF0cmljayBIYW5kJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FjcmFtZW50bycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1BvaXJldCBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQcmVzcyBTdGFydCAyUCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdDaGFrcmEgUGV0Y2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzMsNCw1LDYsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhbG9vIENoZXR0YW4gMicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQ29kYScsXG4gICAgZm9udHNpemVsaXN0OiAnNCw4JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgU2VtaSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgRXh0cmEgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0FsZHJpY2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTdGFyZG9zIFN0ZW5jaWwnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ01lZ3JpbScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0ljZWxhbmQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYXJwYW5jaCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTaG9qdW1hcnUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdMb25kcmluYSBPdXRsaW5lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0MDAnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdHZW8nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdMaWJyZSBCYXJjb2RlIDM5IEV4dGVuZGVkIFRleHQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdUdWxwZW4gT25lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBGT05UX0ZBTUlMSUVTX0xJU1QgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0KERFRkFVTFRGT05UX0ZBTUlMSUVTX0xJU1QsIFdFQkZPTlRfRkFNSUxJRVNfTElTVCk7XG5cbmV4cG9ydCBjb25zdCBXRUJGT05UX0ZBTUlMSUVTID0gV0VCRk9OVF9GQU1JTElFU19MSVNULm1hcCgoeyBmb250TmFtZSwgZm9udHNpemVsaXN0IH06IElGb250U2V0KSA9PiB7XG4gIGNvbnN0IHJlcGxhY2VkRm9udFNpemVMaXN0ID0gZm9udHNpemVsaXN0LnJlcGxhY2UoLyhcXGQpL2csICckMTAwJyk7XG4gIHJldHVybiBgJHtmb250TmFtZX06JHtyZXBsYWNlZEZvbnRTaXplTGlzdH1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBGT05UX05BTUVfTElTVCA9IEZPTlRfRkFNSUxJRVNfTElTVC5tYXAoKHsgZm9udE5hbWUgfTogSUZvbnRTZXQpID0+IHtcbiAgcmV0dXJuIGAke2ZvbnROYW1lfWA7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEVuYWJsZWRGb250U2l6ZSA9IChmb250TmFtZTogc3RyaW5nKTogbnVtYmVyW10gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBGT05UX0ZBTUlMSUVTX0xJU1QuZmlsdGVyKChmb250c2V0KSA9PiB7XG4gICAgcmV0dXJuIGZvbnRzZXQuZm9udE5hbWUgPT09IGZvbnROYW1lO1xuICB9KTtcblxuICBpZiAoIWZpbHRlcmVkTGlzdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWRMaXN0WzBdLmZvbnRzaXplbGlzdFxuICAgIC5yZXBsYWNlKC8oXFxkKS9nLCAnJDEwMCcpXG4gICAgLnNwbGl0KCcsJylcbiAgICAubWFwKCh2YWwpID0+IHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWwsIDEwKTtcbiAgICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IFdlYkZvbnQgZnJvbSAnd2ViZm9udGxvYWRlcic7XG5pbXBvcnQgeyBXRUJGT05UX0ZBTUlMSUVTIH0gZnJvbSAnfi9mb250LnRzJztcblxuLy9pbXBvcnQgXCJ+L2luZGV4LnNjc3NcIjtcbmltcG9ydCBBcHAgZnJvbSAnfi9BcHAudHN4JztcblxuY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuV2ViRm9udC5sb2FkKHtcbiAgZ29vZ2xlOiB7XG4gICAgZmFtaWxpZXM6IFdFQkZPTlRfRkFNSUxJRVMsXG4gIH0sXG59KTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnfi9yb290UmVkdWNlcic7XG5cbmltcG9ydCB0ZXN0U3RhdGUgZnJvbSAnLi9TdGF0ZS9UZXN0L2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgdGVzdDogdGVzdFN0YXRlLnJlZHVjZXIsXG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
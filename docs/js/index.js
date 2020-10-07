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
/* harmony import */ var _container_test_index_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/container/test/index.tsx */ "./src/container/test/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


// container


var App = function () {
    //<Screen />
    //<ScreenSetting />
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], { store: _store_ts__WEBPACK_IMPORTED_MODULE_1__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "App" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_test_index_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", { className: "hr" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


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
/* harmony import */ var _features_test_action_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/features/test/action.ts */ "./src/features/test/action.ts");
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
    return __assign({}, appState.TestReducer);
};
// ThunkDispatchの引数の型何指定すればよいかよくわからなかった、extraArgumentの型になればいいとおもうんだけど
var mapDispatchToProps = function (dispatch) {
    return {
        setText: function (text) { return dispatch(Object(_features_test_action_ts__WEBPACK_IMPORTED_MODULE_1__["setText"])(text)); },
        asyncGetData: function (url) {
            dispatch(Object(_features_test_action_ts__WEBPACK_IMPORTED_MODULE_1__["asyncGetData"])({ url: url }));
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
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_test_tsx__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./src/features/test/action.ts":
/*!*************************************!*\
  !*** ./src/features/test/action.ts ***!
  \*************************************/
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

/***/ "./src/features/test/testReducer.ts":
/*!******************************************!*\
  !*** ./src/features/test/testReducer.ts ***!
  \******************************************/
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


/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: {
        test: _features_test_testReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvdGVzdC9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Rlc3QvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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QixDQUFDLENBQUMsQ0FBQztJQUVMLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDTztBQUVHO0FBQ1M7QUFFN0Msd0JBQXdCO0FBQ0k7QUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFNUMsb0RBQU8sQ0FBQyxJQUFJLENBQUM7SUFDWCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUseURBQWdCO0tBQzNCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsZ0RBQVEsQ0FBQyxNQUFNLENBQUMsMkRBQUMsZ0RBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pCekQ7QUFBQTtBQUFBO0FBQWtEO0FBSUk7QUFFdkMsc0lBQWMsQ0FBQztJQUM1QixPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsa0VBQVc7S0FDbEI7Q0FDRixDQUFDLEVBQUMiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwianMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcImNsb2NrXCJdID0gd2luZG93W1wiY2xvY2tcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHN4XCIsXCJqcy92ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnfi9zdG9yZS50cyc7XG5cbi8vIGNvbnRhaW5lclxuaW1wb3J0IFRlc3QgZnJvbSAnfi9jb250YWluZXIvdGVzdC9pbmRleC50c3gnO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy88U2NyZWVuIC8+XG4gIC8vPFNjcmVlblNldHRpbmcgLz5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICAgIDxUZXN0PjwvVGVzdD5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXN0UHJvcHMgZnJvbSAnfi9jb250YWluZXIvdGVzdC9pbmRleC50c3gnO1xuaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy90ZXN0L2FjdGlvbi50cyc7XG5cbmNvbnN0IFRlc3Q6IFJlYWN0LkZDPElUZXN0U3RhdGUgJiBJVGVzdEhhbmRsZXI+ID0gKHsgdGV4dCwgc2V0VGV4dCwgYXBpUmVzdWx0LCBhc3luY0dldERhdGEgfSkgPT4ge1xuICBjb25zdCBbbG9jYWxUZXh0LCBzZXRMb2NhbFRleHRdID0gdXNlU3RhdGUodGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDpnZ7lkIzmnJ/norroqo3nlKhcbiAgICBhc3luY0dldERhdGEoJy9yZWFjdC1zdGF0ZS8nKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGV4dChsb2NhbFRleHQpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2xvY2FsVGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsb2NhbFRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYWxUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8cD7jgrXjg7zjg5Djgr/jgqTjg6DvvJp7YXBpUmVzdWx0fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICd0eXBlc2NyaXB0LWZzYSc7XG5cbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vZmVhdHVyZXMvdGVzdC9hY3Rpb24udHMnO1xuXG5pbXBvcnQgVGVzdCBmcm9tICd+L2NvbXBvbmVudHMvdGVzdC50c3gnO1xuXG5leHBvcnQgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKGFwcFN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmFwcFN0YXRlLlRlc3RSZWR1Y2VyLFxuICB9O1xufTtcblxuLy8gVGh1bmtEaXNwYXRjaOOBruW8leaVsOOBruWei+S9leaMh+WumuOBmeOCjOOBsOOCiOOBhOOBi+OCiOOBj+OCj+OBi+OCieOBquOBi+OBo+OBn+OAgWV4dHJhQXJndW1lbnTjga7lnovjgavjgarjgozjgbDjgYTjgYTjgajjgYrjgoLjgYbjgpPjgaDjgZHjgalcbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRUZXh0OiAodGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChzZXRUZXh0KHRleHQpKSxcbiAgICBhc3luY0dldERhdGE6ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goYXN5bmNHZXREYXRhKHsgdXJsIH0pKTtcbiAgICB9LFxuICB9O1xuICAvL3JldHVybiB7XG4gIC8vICBpbmNyZW1lbnQ6ICgpID0+IGRpc3BhdGNoKGluY3JlbWVudCgpKSxcbiAgLy8gIGRlY3JlbWVudDogKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50KCkpLFxuICAvLyAgcmVzZXQ6ICgpID0+IGRpc3BhdGNoKHJlc2V0KCkpLFxuICAvL31cbiAgLy8vL2ltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JyA7XG4gIC8vLy8g44GT44GuYmluZEFjdGlvbkNyZWF0b3JzIOOCkuS9v+OBhuOBqGRpc3BhdGNo44KS44Gh44KT44Gf44KJ5pu444GP5b+F6KaB44GM44Gq44GP44Gq44KL44KJ44GX44GE77yI44Gf44KB44GX44Gm44Gq44GE77yJXG4gIC8vcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IHNldFRleHQgfSwgZGlzcGF0Y2gpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdCk7XG4iLCIvLyBUT0RPOiDln7rmnKzjgafjgY3jgabjgYvjgonjgZ/jgoHjgZ3jgYZcbi8vIGh0dHBzOi8vcWlpdGEuY29tL20wYS9pdGVtcy83MDNkNjRjNzRlNDNjYjM5MmE2NFxuaW1wb3J0IGFjdGlvbkNyZWF0b3JGYWN0b3J5IGZyb20gJ3R5cGVzY3JpcHQtZnNhJztcbmltcG9ydCB7IGFzeW5jRmFjdG9yeSB9IGZyb20gJ3R5cGVzY3JpcHQtZnNhLXJlZHV4LXRodW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcblxuY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JGYWN0b3J5KCk7XG5cbmV4cG9ydCBjb25zdCBpbml0ID0gYWN0aW9uQ3JlYXRvcignSU5JVCcpO1xuZXhwb3J0IGNvbnN0IHNldFRleHQgPSBhY3Rpb25DcmVhdG9yPHN0cmluZz4oJ1NFVF9URVhUJyk7XG5cbi8vLy8g5pmu6YCa44Gu5pu444GN5pa5XG4vL2V4cG9ydCB0eXBlIEFjdGlvbiA9XG4vLyAgfCB7XG4vLyAgICAgIHR5cGU6ICdJTklUJztcbi8vICAgICAgcGF5bG9hZDogdW5kZWZpbmVkO1xuLy8gICAgfVxuLy8gIHwge1xuLy8gICAgICB0eXBlOiAnU0VUX1RFWFQnO1xuLy8gICAgICBwYXlsb2FkOiBzdHJpbmc7XG4vLyAgICB9O1xuXG5jb25zdCBjcmVhdGVBc3luYyA9IGFzeW5jRmFjdG9yeTxBcHBTdGF0ZT4oYWN0aW9uQ3JlYXRvcik7XG5cbmZ1bmN0aW9uIGdldFNlcnZlckRhdGUodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGF4aW9zLmhlYWQodXJsKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFzeW5jR2V0RGF0YSA9IGNyZWF0ZUFzeW5jPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIElBc3luY0RhdGFHZXRFcnJvcj4oXG4gIC8vaG9nZVxuICAnQVNZTkNfR0VUREFUQScsXG4gIGFzeW5jICh7IHVybCB9LCBkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBhc3luY1Jlc3AgPSBhd2FpdCBnZXRTZXJ2ZXJEYXRlKHVybCk7XG5cbiAgICAvLyDpgYXlu7bjga7li5XkvZzjgpLnorroqo3jgZnjgovjgZ/jgoHjgavnhKHnkIbjgoTjgorpgYXlu7ZcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGFzeW5jUmVzcC5oZWFkZXJzLmRhdGUsXG4gICAgfTtcbiAgfVxuKTtcblxuLy8vLyBOT1RFOiDpnZ7lkIzmnJ/jga5hY3Rpb25DcmVhdG9yXG4vLyAx44Gk44KB44GMQVBJ44Gu5byV5pWw44Go44GL44Gn5L2/44GG44KE44GkXG4vLyBwYXJhbTogeyB1cmw6IHN0cmluZyB9LFxuLy8gZG9uZSA6IHsgZGF0ZTogc3RyaW5nIH1cbi8vIGZhaWwgOiB7IGVycm9yOiBzdHJpbmcgfVxuLy8gdHlwZSBwYXJhbXMgPSB7IHVybDogc3RyaW5nIH07XG4vLyB0eXBlIHJlc3VsdCA9IHsgZGF0ZTogc3RyaW5nIH07XG4vLyB0eXBlIGVycm9yID0geyB0ZXh0OiBzdHJpbmcgfTtcbi8vIGV4cG9ydCBjb25zdCBhc3luY0dldERhdGEgPSBhY3Rpb25DcmVhdG9yLmFzeW5jPHBhcmFtcywgcmVzdWx0LCBlcnJvcj4oJ1NPTUVUSElOR19BU1lOQycpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVRlc3RTdGF0ZSA9IHtcbiAgdGV4dDogJ2ZpcnN0IGltcHJlc3Npb24nLFxuICBhcGlFbmRwb2ludDogJycsXG4gIGFwaVJlc3VsdDogJycsXG59O1xuXG50eXBlIGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZSA9IHtcbiAgZGF0ZTogc3RyaW5nO1xufTtcblxuY29uc3QgYXN5bmNHZXREYXRhID0gY3JlYXRlQXN5bmNUaHVuazxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+KFxuICAvL2hvZ2VcbiAgJ3NlcnZlcnRpbWUvaGVhZCcsXG4gIGFzeW5jIChhcmcsIHRodW5rKTogUHJvbWlzZTxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+ID0+IHtcbiAgICBjb25zdCBhc3luY1Jlc3AgPSBhd2FpdCBheGlvcy5oZWFkKCcvJyk7XG5cbiAgICAvLyDpgYXlu7bjga7li5XkvZzjgpLnorroqo3jgZnjgovjgZ/jgoHjgavnhKHnkIbjgoTjgorpgYXlu7ZcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGFzeW5jUmVzcC5oZWFkZXJzLmRhdGUsXG4gICAgfTtcbiAgfVxuKTtcblxuY29uc3QgdGVzdFN0YXRlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAndGVzdCcsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRUZXh0KHN0YXRlOiBJVGVzdFN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRleHQ6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcblxuICAvLyByZWR1eC10aHVua1xuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldFRleHQgfSA9IHRlc3RTdGF0ZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXN0U3RhdGUucmVkdWNlcjtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUZvbnRTZXQge1xuICBmb250TmFtZTogc3RyaW5nO1xuICBmb250c2l6ZWxpc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRGT05UX0ZBTUlMSUVTX0xJU1Q6IElGb250U2V0W10gPSBbXG4gIHtcbiAgICBmb250TmFtZTogJ3NhbnMtc2VyaWYnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnc2VyaWYnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnbW9ub3NwYWNlJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFU19MSVNUOiBJRm9udFNldFtdID0gW1xuICAvLyBmb250XG4gIHtcbiAgICBmb250TmFtZTogJ09yYml0cm9uJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1dhbGxwb2V0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUm9ib3RvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDMsNyw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnT3N3YWxkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcyLDMsNCw2LDcsNScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0JhbHNhbWlxIFNhbnMnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNycsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0FudG9uJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFybG93IENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQYXRyaWNrIEhhbmQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWNyYW1lbnRvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUG9pcmV0IE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1ByZXNzIFN0YXJ0IDJQJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FpcmEgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0NoYWtyYSBQZXRjaCcsXG4gICAgZm9udHNpemVsaXN0OiAnMyw0LDUsNiw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFsb28gQ2hldHRhbiAyJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdDb2RhJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDgnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBTZW1pIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBFeHRyYSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQWxkcmljaCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1N0YXJkb3MgU3RlbmNpbCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTWVncmltJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnSWNlbGFuZCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhcnBhbmNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1Nob2p1bWFydScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xvbmRyaW5hIE91dGxpbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQwMCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0dlbycsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0xpYnJlIEJhcmNvZGUgMzkgRXh0ZW5kZWQgVGV4dCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1R1bHBlbiBPbmUnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfRkFNSUxJRVNfTElTVCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQoREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVCwgV0VCRk9OVF9GQU1JTElFU19MSVNUKTtcblxuZXhwb3J0IGNvbnN0IFdFQkZPTlRfRkFNSUxJRVMgPSBXRUJGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lLCBmb250c2l6ZWxpc3QgfTogSUZvbnRTZXQpID0+IHtcbiAgY29uc3QgcmVwbGFjZWRGb250U2l6ZUxpc3QgPSBmb250c2l6ZWxpc3QucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKTtcbiAgcmV0dXJuIGAke2ZvbnROYW1lfToke3JlcGxhY2VkRm9udFNpemVMaXN0fWA7XG59KTtcblxuZXhwb3J0IGNvbnN0IEZPTlRfTkFNRV9MSVNUID0gRk9OVF9GQU1JTElFU19MSVNULm1hcCgoeyBmb250TmFtZSB9OiBJRm9udFNldCkgPT4ge1xuICByZXR1cm4gYCR7Zm9udE5hbWV9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0RW5hYmxlZEZvbnRTaXplID0gKGZvbnROYW1lOiBzdHJpbmcpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IEZPTlRfRkFNSUxJRVNfTElTVC5maWx0ZXIoKGZvbnRzZXQpID0+IHtcbiAgICByZXR1cm4gZm9udHNldC5mb250TmFtZSA9PT0gZm9udE5hbWU7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRMaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZExpc3RbMF0uZm9udHNpemVsaXN0XG4gICAgLnJlcGxhY2UoLyhcXGQpL2csICckMTAwJylcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICAgIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcbmltcG9ydCB7IFdFQkZPTlRfRkFNSUxJRVMgfSBmcm9tICd+L2ZvbnQudHMnO1xuXG4vL2ltcG9ydCBcIn4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICd+L0FwcC50c3gnO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5XZWJGb250LmxvYWQoe1xuICBnb29nbGU6IHtcbiAgICBmYW1pbGllczogV0VCRk9OVF9GQU1JTElFUyxcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICd+L3Jvb3RSZWR1Y2VyJztcblxuaW1wb3J0IHRlc3RSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvdGVzdC90ZXN0UmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHRlc3Q6IHRlc3RSZWR1Y2VyLFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
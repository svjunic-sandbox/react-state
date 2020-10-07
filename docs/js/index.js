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

//import { setText, asyncGetData } from '~/features/test/action.ts';
var Test = function (_a) {
    var text = _a.text, setText = _a.setText, apiResult = _a.apiResult, asyncGetData = _a.asyncGetData;
    console.log(text);
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(text), localText = _b[0], setLocalText = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        // 非同期確認用
        //asyncGetData('/react-state/');
        asyncGetData();
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
/* harmony import */ var _features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/features/test/testReducer.ts */ "./src/features/test/testReducer.ts");
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
    console.log(appState);
    return __assign({}, appState.test);
};
// ThunkDispatchの引数の型何指定すればよいかよくわからなかった、extraArgumentの型になればいいとおもうんだけど
var mapDispatchToProps = function (dispatch) {
    return {
        setText: function (text) {
            console.log(text);
            dispatch(Object(_features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_1__["setText"])(text));
        },
        //asyncGetData: (url: string) => {
        //  dispatch(asyncGetData({ url }));
        //},
        asyncGetData: function (url) {
            dispatch(Object(_features_test_testReducer_ts__WEBPACK_IMPORTED_MODULE_1__["asyncGetData"])());
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
var asyncGetData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('servertime/head', function () { return __awaiter(void 0, void 0, void 0, function () {
    var asyncResp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.head('./')];
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
        //// {{{ typescripotだと型がうまく行かず、この書き方はできないぽい
        //  [`${asyncGetData.fulfilled}`]: (state, action) => {
        //    return {
        //      ...state,
        //    };
        //  },
        //// }}}
        builder.addCase(asyncGetData.pending, function (state, action) {
            console.log(action.type);
            return __assign({}, state);
        });
        builder.addCase(asyncGetData.fulfilled, function (state, action) {
            console.log(action.type);
            return __assign(__assign({}, state), { apiResult: action.payload.date });
        });
        builder.addCase(asyncGetData.rejected, function (state, action) {
            console.log(action.type);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci90ZXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvdGVzdC90ZXN0UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFBQTtBQUFrRDtBQUlJO0FBRXZDLHNJQUFjLENBQUM7SUFDNUIsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLGtFQUFXO0tBQ2xCO0NBQ0YsQ0FBQyxFQUFDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImpzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJjbG9ja1wiXSA9IHdpbmRvd1tcImNsb2NrXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwianMvdmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ34vc3RvcmUudHMnO1xuXG4vLyBjb250YWluZXJcbmltcG9ydCBUZXN0IGZyb20gJ34vY29udGFpbmVyL3Rlc3QvaW5kZXgudHN4JztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIC8vPFNjcmVlbiAvPlxuICAvLzxTY3JlZW5TZXR0aW5nIC8+XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiAvPlxuICAgICAgICA8VGVzdD48L1Rlc3Q+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVzdFByb3BzIGZyb20gJ34vY29udGFpbmVyL3Rlc3QvaW5kZXgudHN4Jztcbi8vaW1wb3J0IHsgc2V0VGV4dCwgYXN5bmNHZXREYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy90ZXN0L2FjdGlvbi50cyc7XG5cbmNvbnN0IFRlc3Q6IFJlYWN0LkZDPElUZXN0U3RhdGUgJiBJVGVzdEhhbmRsZXI+ID0gKHsgdGV4dCwgc2V0VGV4dCwgYXBpUmVzdWx0LCBhc3luY0dldERhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgY29uc3QgW2xvY2FsVGV4dCwgc2V0TG9jYWxUZXh0XSA9IHVzZVN0YXRlKHRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g6Z2e5ZCM5pyf56K66KqN55SoXG4gICAgLy9hc3luY0dldERhdGEoJy9yZWFjdC1zdGF0ZS8nKTtcbiAgICBhc3luY0dldERhdGEoKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGV4dChsb2NhbFRleHQpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2xvY2FsVGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsb2NhbFRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYWxUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8cD7jgrXjg7zjg5Djgr/jgqTjg6DvvJp7YXBpUmVzdWx0fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICd0eXBlc2NyaXB0LWZzYSc7XG5cbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IHNldFRleHQsIGFzeW5jR2V0RGF0YSB9IGZyb20gJ34vZmVhdHVyZXMvdGVzdC90ZXN0UmVkdWNlci50cyc7XG5cbmltcG9ydCBUZXN0IGZyb20gJ34vY29tcG9uZW50cy90ZXN0LnRzeCc7XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGFwcFN0YXRlKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBTdGF0ZS50ZXN0LFxuICB9O1xufTtcblxuLy8gVGh1bmtEaXNwYXRjaOOBruW8leaVsOOBruWei+S9leaMh+WumuOBmeOCjOOBsOOCiOOBhOOBi+OCiOOBj+OCj+OBi+OCieOBquOBi+OBo+OBn+OAgWV4dHJhQXJndW1lbnTjga7lnovjgavjgarjgozjgbDjgYTjgYTjgajjgYrjgoLjgYbjgpPjgaDjgZHjgalcbmV4cG9ydCBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4gfCBUaHVua0Rpc3BhdGNoPElBc3luY0dldERhdGFQYXJhbXMsIElBc3luY0RhdGFHZXRSZXN1bHQsIGFueT4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRUZXh0OiAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAgIGRpc3BhdGNoKHNldFRleHQodGV4dCkpO1xuICAgIH0sXG4gICAgLy9hc3luY0dldERhdGE6ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIC8vICBkaXNwYXRjaChhc3luY0dldERhdGEoeyB1cmwgfSkpO1xuICAgIC8vfSxcbiAgICBhc3luY0dldERhdGE6ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goYXN5bmNHZXREYXRhKCkpO1xuICAgIH0sXG4gIH07XG4gIC8vcmV0dXJuIHtcbiAgLy8gIGluY3JlbWVudDogKCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50KCkpLFxuICAvLyAgZGVjcmVtZW50OiAoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnQoKSksXG4gIC8vICByZXNldDogKCkgPT4gZGlzcGF0Y2gocmVzZXQoKSksXG4gIC8vfVxuICAvLy8vaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnIDtcbiAgLy8vLyDjgZPjga5iaW5kQWN0aW9uQ3JlYXRvcnMg44KS5L2/44GG44GoZGlzcGF0Y2jjgpLjgaHjgpPjgZ/jgonmm7jjgY/lv4XopoHjgYzjgarjgY/jgarjgovjgonjgZfjgYTvvIjjgZ/jgoHjgZfjgabjgarjgYTvvIlcbiAgLy9yZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgc2V0VGV4dCB9LCBkaXNwYXRjaCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXN0KTtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElUZXN0U3RhdGUgPSB7XG4gIHRleHQ6ICdmaXJzdCBpbXByZXNzaW9uJyxcbiAgYXBpRW5kcG9pbnQ6ICcnLFxuICBhcGlSZXN1bHQ6ICcnLFxufTtcblxudHlwZSBoZWFkU2VydmVyVGltZVJldHVyblR5cGUgPSB7XG4gIGRhdGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBhc3luY0dldERhdGEgPSBjcmVhdGVBc3luY1RodW5rPGhlYWRTZXJ2ZXJUaW1lUmV0dXJuVHlwZT4oXG4gICdzZXJ2ZXJ0aW1lL2hlYWQnLFxuICBhc3luYyAoKTogUHJvbWlzZTxoZWFkU2VydmVyVGltZVJldHVyblR5cGU+ID0+IHtcbiAgICBjb25zdCBhc3luY1Jlc3AgPSBhd2FpdCBheGlvcy5oZWFkKCcuLycpO1xuXG4gICAgLy8g6YGF5bu244Gu5YuV5L2c44KS56K66KqN44GZ44KL44Gf44KB44Gr54Sh55CG44KE44KK6YGF5bu2XG4gICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBhc3luY1Jlc3AuaGVhZGVycy5kYXRlLFxuICAgIH07XG4gIH1cbik7XG5cbmNvbnN0IHRlc3RTdGF0ZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Rlc3QnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0VGV4dChzdGF0ZTogSVRlc3RTdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0ZXh0OiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gIH0sXG5cbiAgLy8gcmVkdXgtdGh1bmtcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAvLy8vIHt7eyB0eXBlc2NyaXBvdOOBoOOBqOWei+OBjOOBhuOBvuOBj+ihjOOBi+OBmuOAgeOBk+OBruabuOOBjeaWueOBr+OBp+OBjeOBquOBhOOBveOBhFxuICAgIC8vICBbYCR7YXN5bmNHZXREYXRhLmZ1bGZpbGxlZH1gXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAvLyAgICByZXR1cm4ge1xuICAgIC8vICAgICAgLi4uc3RhdGUsXG4gICAgLy8gICAgfTtcbiAgICAvLyAgfSxcbiAgICAvLy8vIH19fVxuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoYXN5bmNHZXREYXRhLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhcGlSZXN1bHQ6IGFjdGlvbi5wYXlsb2FkLmRhdGUsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhc3luY0dldERhdGEucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0VGV4dCB9ID0gdGVzdFN0YXRlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3RTdGF0ZS5yZWR1Y2VyO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJRm9udFNldCB7XG4gIGZvbnROYW1lOiBzdHJpbmc7XG4gIGZvbnRzaXplbGlzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVEZPTlRfRkFNSUxJRVNfTElTVDogSUZvbnRTZXRbXSA9IFtcbiAge1xuICAgIGZvbnROYW1lOiAnc2Fucy1zZXJpZicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdzZXJpZicsXG4gICAgZm9udHNpemVsaXN0OiAnNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdtb25vc3BhY2UnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBXRUJGT05UX0ZBTUlMSUVTX0xJU1Q6IElGb250U2V0W10gPSBbXG4gIC8vIGZvbnRcbiAge1xuICAgIGZvbnROYW1lOiAnT3JiaXRyb24nLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnV2FsbHBvZXQnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdSb2JvdG8nLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMyw3LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdPc3dhbGQnLFxuICAgIGZvbnRzaXplbGlzdDogJzIsMyw0LDYsNyw1JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQmFsc2FtaXEgU2FucycsXG4gICAgZm9udHNpemVsaXN0OiAnNCw3JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQW50b24nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYXJsb3cgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1BhdHJpY2sgSGFuZCcsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhY3JhbWVudG8nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdQb2lyZXQgT25lJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnUHJlc3MgU3RhcnQgMlAnLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdTYWlyYSBDb25kZW5zZWQnLFxuICAgIGZvbnRzaXplbGlzdDogJzEsMiwzLDQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnQ2hha3JhIFBldGNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICczLDQsNSw2LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdCYWxvbyBDaGV0dGFuIDInLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ0NvZGEnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsOCcsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIFNlbWkgQ29uZGVuc2VkJyxcbiAgICBmb250c2l6ZWxpc3Q6ICcxLDIsMyw0LDUsNiw3LDgsOScsXG4gIH0sXG4gIHtcbiAgICBmb250TmFtZTogJ1NhaXJhIEV4dHJhIENvbmRlbnNlZCcsXG4gICAgZm9udHNpemVsaXN0OiAnMSwyLDMsNCw1LDYsNyw4LDknLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdBbGRyaWNoJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU3RhcmRvcyBTdGVuY2lsJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0LDcnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdNZWdyaW0nLFxuICAgIGZvbnRzaXplbGlzdDogJzQnLFxuICB9LFxuICB7XG4gICAgZm9udE5hbWU6ICdJY2VsYW5kJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2FycGFuY2gnLFxuICAgIGZvbnRzaXplbGlzdDogJzQsNSw2LDcsOCw5JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnU2hvanVtYXJ1JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTG9uZHJpbmEgT3V0bGluZScsXG4gICAgZm9udHNpemVsaXN0OiAnNDAwJyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnR2VvJyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnTGlicmUgQmFyY29kZSAzOSBFeHRlbmRlZCBUZXh0JyxcbiAgICBmb250c2l6ZWxpc3Q6ICc0JyxcbiAgfSxcbiAge1xuICAgIGZvbnROYW1lOiAnVHVscGVuIE9uZScsXG4gICAgZm9udHNpemVsaXN0OiAnNCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRk9OVF9GQU1JTElFU19MSVNUID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChERUZBVUxURk9OVF9GQU1JTElFU19MSVNULCBXRUJGT05UX0ZBTUlMSUVTX0xJU1QpO1xuXG5leHBvcnQgY29uc3QgV0VCRk9OVF9GQU1JTElFUyA9IFdFQkZPTlRfRkFNSUxJRVNfTElTVC5tYXAoKHsgZm9udE5hbWUsIGZvbnRzaXplbGlzdCB9OiBJRm9udFNldCkgPT4ge1xuICBjb25zdCByZXBsYWNlZEZvbnRTaXplTGlzdCA9IGZvbnRzaXplbGlzdC5yZXBsYWNlKC8oXFxkKS9nLCAnJDEwMCcpO1xuICByZXR1cm4gYCR7Zm9udE5hbWV9OiR7cmVwbGFjZWRGb250U2l6ZUxpc3R9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgRk9OVF9OQU1FX0xJU1QgPSBGT05UX0ZBTUlMSUVTX0xJU1QubWFwKCh7IGZvbnROYW1lIH06IElGb250U2V0KSA9PiB7XG4gIHJldHVybiBgJHtmb250TmFtZX1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRFbmFibGVkRm9udFNpemUgPSAoZm9udE5hbWU6IHN0cmluZyk6IG51bWJlcltdIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gRk9OVF9GQU1JTElFU19MSVNULmZpbHRlcigoZm9udHNldCkgPT4ge1xuICAgIHJldHVybiBmb250c2V0LmZvbnROYW1lID09PSBmb250TmFtZTtcbiAgfSk7XG5cbiAgaWYgKCFmaWx0ZXJlZExpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkTGlzdFswXS5mb250c2l6ZWxpc3RcbiAgICAucmVwbGFjZSgvKFxcZCkvZywgJyQxMDAnKVxuICAgIC5zcGxpdCgnLCcpXG4gICAgLm1hcCgodmFsKSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xuaW1wb3J0IHsgV0VCRk9OVF9GQU1JTElFUyB9IGZyb20gJ34vZm9udC50cyc7XG5cbi8vaW1wb3J0IFwifi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJ34vQXBwLnRzeCc7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbldlYkZvbnQubG9hZCh7XG4gIGdvb2dsZToge1xuICAgIGZhbWlsaWVzOiBXRUJGT05UX0ZBTUlMSUVTLFxuICB9LFxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJ34vcm9vdFJlZHVjZXInO1xuXG5pbXBvcnQgdGVzdFJlZHVjZXIgZnJvbSAnLi9mZWF0dXJlcy90ZXN0L3Rlc3RSZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgdGVzdDogdGVzdFJlZHVjZXIsXG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
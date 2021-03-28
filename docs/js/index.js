/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_TodoList1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/TodoList1 */ "./src/components/TodoList1.tsx");
/* harmony import */ var _components_TodoList2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/TodoList2 */ "./src/components/TodoList2.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _components_Lastupdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Lastupdate */ "./src/components/Lastupdate.tsx");
/* harmony import */ var _components_Servertime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Servertime */ "./src/components/Servertime.tsx");






// atom : stateの保持
// selector :stateを動的に変更する関数
var pStyle = {
    fontSize: '1.6rem',
};
var hrStyle = {
    margin: '1.4rem 0',
};
var App = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { style: pStyle }, "todolist1\u3068todolist2\u3001\u305D\u308C\u305E\u308Catom\u3092\u6301\u3063\u3066\u3044\u308B"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { style: pStyle }, "\u3069\u3061\u3089\u304B\u304C\u66F4\u65B0\u3055\u308C\u305F\u3089lastupdate\u306Eselecter\u306B\u3088\u308B\u8CFC\u8AAD\u306E\u691C\u77E5\u304B\u3089\u66F4\u65B0\u65E5\u3092\u66F4\u65B0\u3059\u308B"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", { style: hrStyle }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Lastupdate__WEBPACK_IMPORTED_MODULE_4__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TodoList1__WEBPACK_IMPORTED_MODULE_1__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TodoList2__WEBPACK_IMPORTED_MODULE_2__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", { style: hrStyle }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Servertime__WEBPACK_IMPORTED_MODULE_5__.default, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/components/Input1.tsx":
/*!***********************************!*\
  !*** ./src/components/Input1.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _store_todolist1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/todolist1 */ "./src/store/todolist1.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var inputStyle = {
    padding: '10px',
    border: '1px solid #bbb',
    borderRadius: '10px',
    backgroundColor: '#fff',
};
var buttonStyle = {
    margin: '0 0 0 10px',
    padding: '10px',
    border: '1px solid #bbb',
    borderRadius: '10px',
    backgroundColor: '#ccc',
};
var Input = function (props) {
    //// setのみを使いたいのでsetだけとってくる useSetRecoilState
    //const setTodoList = useSetRecoilState(todoListState);
    // 今回は配列にsetするときにvalueも必要だったので普通に useRecoilState
    var _a = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_store_todolist1__WEBPACK_IMPORTED_MODULE_2__.default), todoList = _a[0], setTodoList = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), inputValue = _b[0], setInputValue = _b[1];
    function handleInput(e) {
        setInputValue(e.target.value);
    }
    function handleClick(e) {
        if (inputValue === '')
            return;
        setTodoList(__spreadArray(__spreadArray([], todoList), [
            {
                id: "item" + (todoList.length + 1),
                text: inputValue,
            },
        ]));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", value: inputValue, onInput: handleInput, style: inputStyle, placeholder: "\u672A\u5165\u529B" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", onClick: handleClick, style: buttonStyle }, "add")));
};
/* harmony default export */ __webpack_exports__["default"] = (Input);


/***/ }),

/***/ "./src/components/Input2.tsx":
/*!***********************************!*\
  !*** ./src/components/Input2.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _store_todolist2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/todolist2 */ "./src/store/todolist2.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var inputStyle = {
    padding: '10px',
    border: '1px solid #bbb',
    borderRadius: '10px',
    backgroundColor: '#fff',
};
var buttonStyle = {
    margin: '0 0 0 10px',
    padding: '10px',
    border: '1px solid #bbb',
    borderRadius: '10px',
    backgroundColor: '#ccc',
};
var Input = function (props) {
    //// setのみを使いたいのでsetだけとってくる useSetRecoilState
    //const setTodoList = useSetRecoilState(todoListState);
    // 今回は配列にsetするときにvalueも必要だったので普通に useRecoilState
    var _a = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_store_todolist2__WEBPACK_IMPORTED_MODULE_2__.default), todoList = _a[0], setTodoList = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), inputValue = _b[0], setInputValue = _b[1];
    function handleInput(e) {
        setInputValue(e.target.value);
    }
    function handleClick(e) {
        if (inputValue === '')
            return;
        setTodoList(__spreadArray(__spreadArray([], todoList), [
            {
                id: "item" + (todoList.length + 1),
                text: inputValue,
            },
        ]));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", value: inputValue, onInput: handleInput, style: inputStyle, placeholder: "\u672A\u5165\u529B" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", onClick: handleClick, style: buttonStyle }, "add")));
};
/* harmony default export */ __webpack_exports__["default"] = (Input);


/***/ }),

/***/ "./src/components/Lastupdate.tsx":
/*!***************************************!*\
  !*** ./src/components/Lastupdate.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _store_lastupdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/lastupdate */ "./src/store/lastupdate.ts");



var pStyle = {
    fontSize: '1.6rem',
    marginBottom: '1.4rem',
};
var Lastupdate = function () {
    // hoge
    var subscribeStates = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_store_lastupdate__WEBPACK_IMPORTED_MODULE_2__.lastupdateSelector);
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Date()), date = _a[0], setDate = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        console.log(subscribeStates);
        setDate(Date());
    }, [subscribeStates]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { style: pStyle },
            "LastUpdate: ",
            date)));
};
/* harmony default export */ __webpack_exports__["default"] = (Lastupdate);


/***/ }),

/***/ "./src/components/ServerTimeView.tsx":
/*!*******************************************!*\
  !*** ./src/components/ServerTimeView.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _store_servertime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/servertime */ "./src/store/servertime.ts");



var ServerTimeView = function () {
    var date = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_store_servertime__WEBPACK_IMPORTED_MODULE_2__.servertimeSelector);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
        "\u30B5\u30FC\u30D0\u30FC\u30BF\u30A4\u30E0",
        date);
};
/* harmony default export */ __webpack_exports__["default"] = (ServerTimeView);


/***/ }),

/***/ "./src/components/Servertime.tsx":
/*!***************************************!*\
  !*** ./src/components/Servertime.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ServerTimeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServerTimeView */ "./src/components/ServerTimeView.tsx");


var Servertime = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "\u30B5\u30FC\u30D0\u30BF\u30A4\u30E0\u53D6\u5F97"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u8AAD\u8FBC\u4E2D") },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ServerTimeView__WEBPACK_IMPORTED_MODULE_1__.default, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Servertime);


/***/ }),

/***/ "./src/components/TodoItem.tsx":
/*!*************************************!*\
  !*** ./src/components/TodoItem.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var liStyle = {
    fontSize: '1.6rem',
};
var TodoItem = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { style: liStyle },
        props.id,
        ":",
        props.text));
};
/* harmony default export */ __webpack_exports__["default"] = (TodoItem);


/***/ }),

/***/ "./src/components/TodoList1.tsx":
/*!**************************************!*\
  !*** ./src/components/TodoList1.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ "./src/components/TodoItem.tsx");
/* harmony import */ var _store_todolist1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/todolist1 */ "./src/store/todolist1.ts");
/* harmony import */ var _Input1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input1 */ "./src/components/Input1.tsx");





var style = {
    padding: '20px',
    backgroundColor: '#fef',
};
var TodoList = function () {
    // useStateみたいにsetも使うなら
    //const [todoList, setTodoList] = useRecoilState(todoListState);
    // valueだけでよいならこっち
    var todoList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_store_todolist1__WEBPACK_IMPORTED_MODULE_3__.default);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: style },
        "todolist1",
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input1__WEBPACK_IMPORTED_MODULE_4__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, todoList.map(function (todoItem) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoItem__WEBPACK_IMPORTED_MODULE_2__.default, { key: todoItem.id, id: todoItem.id, text: todoItem.text })); }))));
};
/* harmony default export */ __webpack_exports__["default"] = (TodoList);


/***/ }),

/***/ "./src/components/TodoList2.tsx":
/*!**************************************!*\
  !*** ./src/components/TodoList2.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ "./src/components/TodoItem.tsx");
/* harmony import */ var _store_todolist2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/todolist2 */ "./src/store/todolist2.ts");
/* harmony import */ var _Input2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input2 */ "./src/components/Input2.tsx");





var style = {
    padding: '20px',
    backgroundColor: '#ffc',
};
var TodoList = function () {
    // useStateみたいにsetも使うなら
    //const [todoList, setTodoList] = useRecoilState(todoListState);
    // valueだけでよいならこっち
    var todoList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_store_todolist2__WEBPACK_IMPORTED_MODULE_3__.default);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: style },
        "todolist2",
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input2__WEBPACK_IMPORTED_MODULE_4__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, todoList.map(function (todoItem) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoItem__WEBPACK_IMPORTED_MODULE_2__.default, { key: todoItem.id, id: todoItem.id, text: todoItem.text })); }))));
};
/* harmony default export */ __webpack_exports__["default"] = (TodoList);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/App.tsx */ "./src/App.tsx");


//import "~/index.scss";

console.log(document.getElementById('app'));
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App_tsx__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('app'));


/***/ }),

/***/ "./src/store/lastupdate.ts":
/*!*********************************!*\
  !*** ./src/store/lastupdate.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastupdateSelector": function() { return /* binding */ lastupdateSelector; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _store_todolist1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store/todolist1 */ "./src/store/todolist1.ts");
/* harmony import */ var _store_todolist2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/todolist2 */ "./src/store/todolist2.ts");



var lastupdateSelector = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
    key: 'Lastupdate',
    get: function (_a) {
        var get = _a.get;
        return [get(_store_todolist1__WEBPACK_IMPORTED_MODULE_1__.default), get(_store_todolist2__WEBPACK_IMPORTED_MODULE_2__.default)];
    },
});


/***/ }),

/***/ "./src/store/servertime.ts":
/*!*********************************!*\
  !*** ./src/store/servertime.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "servertimeSelector": function() { return /* binding */ servertimeSelector; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lastupdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lastupdate */ "./src/store/lastupdate.ts");
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



var servertimeSelector = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
    key: 'servertime',
    get: function (_a) {
        var get = _a.get;
        return __awaiter(void 0, void 0, void 0, function () {
            var asyncResp;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        get(_lastupdate__WEBPACK_IMPORTED_MODULE_2__.lastupdateSelector);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                setTimeout(function () {
                                    resolve(0);
                                }, 1000);
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default().head('./')];
                    case 2:
                        asyncResp = _b.sent();
                        return [2 /*return*/, asyncResp.headers.date];
                }
            });
        });
    },
});


/***/ }),

/***/ "./src/store/todolist1.ts":
/*!********************************!*\
  !*** ./src/store/todolist1.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'todoListState1',
    default: [
        {
            id: 'item1',
            text: 'てきすと！',
        },
    ],
}));


/***/ }),

/***/ "./src/store/todolist2.ts":
/*!********************************!*\
  !*** ./src/store/todolist2.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'todoListState2',
    default: [],
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"js/index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclock"] = self["webpackChunkclock"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["js/vendor"], function() { return __webpack_require__("./src/index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQxLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9jb21wb25lbnRzL0lucHV0Mi50c3giLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvY29tcG9uZW50cy9MYXN0dXBkYXRlLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9jb21wb25lbnRzL1NlcnZlclRpbWVWaWV3LnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9jb21wb25lbnRzL1NlcnZlcnRpbWUudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL2NvbXBvbmVudHMvVG9kb0l0ZW0udHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL2NvbXBvbmVudHMvVG9kb0xpc3QxLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9jb21wb25lbnRzL1RvZG9MaXN0Mi50c3giLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL3N0b3JlL2xhc3R1cGRhdGUudHMiLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvc3RvcmUvc2VydmVydGltZS50cyIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9zdG9yZS90b2RvbGlzdDEudHMiLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvc3RvcmUvdG9kb2xpc3QyLnRzIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG9jay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jbG9jay93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFcUI7QUFDQTtBQUVYO0FBQ2E7QUFDQTtBQUVqRCxrQkFBa0I7QUFDbEIsNEJBQTRCO0FBRTVCLElBQU0sTUFBTSxHQUFHO0lBQ2IsUUFBUSxFQUFFLFFBQVE7Q0FDbkIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHO0lBQ2QsTUFBTSxFQUFFLFVBQVU7Q0FDbkIsQ0FBQztBQUVGLElBQU0sR0FBRyxHQUFhO0lBQ3BCLE9BQU8sQ0FDTCxpREFBQyw4Q0FBVTtRQUNULHdEQUFHLEtBQUssRUFBRSxNQUFNLHFHQUF3QztRQUN4RCx3REFBRyxLQUFLLEVBQUUsTUFBTSw2TUFBc0Q7UUFDdEUseURBQUksS0FBSyxFQUFFLE9BQU8sR0FBSTtRQUN0QixpREFBQywyREFBVSxPQUFjO1FBQ3pCLGlEQUFDLDBEQUFTLE9BQWE7UUFDdkIsaURBQUMsMERBQVMsT0FBYTtRQUN2Qix5REFBSSxLQUFLLEVBQUUsT0FBTyxHQUFJO1FBQ3RCLGlEQUFDLDJEQUFVLE9BQWMsQ0FDZCxDQUNkLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRiwrREFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNxQjtBQUNBO0FBQ007QUFFOUMsSUFBTSxVQUFVLEdBQUc7SUFDakIsT0FBTyxFQUFFLE1BQU07SUFDZixNQUFNLEVBQUUsZ0JBQWdCO0lBQ3hCLFlBQVksRUFBRSxNQUFNO0lBQ3BCLGVBQWUsRUFBRSxNQUFNO0NBQ3hCLENBQUM7QUFFRixJQUFNLFdBQVcsR0FBRztJQUNsQixNQUFNLEVBQUUsWUFBWTtJQUNwQixPQUFPLEVBQUUsTUFBTTtJ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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsMEJBQTBCLEVBQUU7V0FDMUMsY0FBYyxlQUFlO1dBQzdCLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsNkNBQTZDLHVDQUF1Qzs7V0FFcEY7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDaERBO1VBQ0E7VUFDQTtVQUNBLHNGQUFzRiwrQ0FBK0MsRUFBRTtVQUN2SSIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUb2RvTGlzdDEgZnJvbSAnfi9jb21wb25lbnRzL1RvZG9MaXN0MSc7XG5pbXBvcnQgVG9kb0xpc3QyIGZyb20gJ34vY29tcG9uZW50cy9Ub2RvTGlzdDInO1xuXG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCBMYXN0dXBkYXRlIGZyb20gJy4vY29tcG9uZW50cy9MYXN0dXBkYXRlJztcbmltcG9ydCBTZXJ2ZXJ0aW1lIGZyb20gJy4vY29tcG9uZW50cy9TZXJ2ZXJ0aW1lJztcblxuLy8gYXRvbSA6IHN0YXRl44Gu5L+d5oyBXG4vLyBzZWxlY3RvciA6c3RhdGXjgpLli5XnmoTjgavlpInmm7TjgZnjgovplqLmlbBcblxuY29uc3QgcFN0eWxlID0ge1xuICBmb250U2l6ZTogJzEuNnJlbScsXG59O1xuXG5jb25zdCBoclN0eWxlID0ge1xuICBtYXJnaW46ICcxLjRyZW0gMCcsXG59O1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWNvaWxSb290PlxuICAgICAgPHAgc3R5bGU9e3BTdHlsZX0+dG9kb2xpc3Qx44GodG9kb2xpc3Qy44CB44Gd44KM44Ge44KMYXRvbeOCkuaMgeOBo+OBpuOBhOOCizwvcD5cbiAgICAgIDxwIHN0eWxlPXtwU3R5bGV9PuOBqeOBoeOCieOBi+OBjOabtOaWsOOBleOCjOOBn+OCiWxhc3R1cGRhdGXjga5zZWxlY3RlcuOBq+OCiOOCi+izvOiqreOBruaknOefpeOBi+OCieabtOaWsOaXpeOCkuabtOaWsOOBmeOCizwvcD5cbiAgICAgIDxociBzdHlsZT17aHJTdHlsZX0gLz5cbiAgICAgIDxMYXN0dXBkYXRlPjwvTGFzdHVwZGF0ZT5cbiAgICAgIDxUb2RvTGlzdDE+PC9Ub2RvTGlzdDE+XG4gICAgICA8VG9kb0xpc3QyPjwvVG9kb0xpc3QyPlxuICAgICAgPGhyIHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgPFNlcnZlcnRpbWU+PC9TZXJ2ZXJ0aW1lPlxuICAgIDwvUmVjb2lsUm9vdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB0b2RvTGlzdFN0YXRlIGZyb20gJ34vc3RvcmUvdG9kb2xpc3QxJztcblxuY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgcGFkZGluZzogJzEwcHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgI2JiYicsXG4gIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbn07XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICBtYXJnaW46ICcwIDAgMCAxMHB4JyxcbiAgcGFkZGluZzogJzEwcHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgI2JiYicsXG4gIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjJyxcbn07XG5cbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgLy8vLyBzZXTjga7jgb/jgpLkvb/jgYTjgZ/jgYTjga7jgadzZXTjgaDjgZHjgajjgaPjgabjgY/jgosgdXNlU2V0UmVjb2lsU3RhdGVcbiAgLy9jb25zdCBzZXRUb2RvTGlzdCA9IHVzZVNldFJlY29pbFN0YXRlKHRvZG9MaXN0U3RhdGUpO1xuXG4gIC8vIOS7iuWbnuOBr+mFjeWIl+OBq3NldOOBmeOCi+OBqOOBjeOBq3ZhbHVl44KC5b+F6KaB44Gg44Gj44Gf44Gu44Gn5pmu6YCa44GrIHVzZVJlY29pbFN0YXRlXG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlUmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykgcmV0dXJuO1xuXG4gICAgc2V0VG9kb0xpc3QoW1xuICAgICAgLi4udG9kb0xpc3QsXG4gICAgICB7XG4gICAgICAgIGlkOiBgaXRlbSR7dG9kb0xpc3QubGVuZ3RoICsgMX1gLFxuICAgICAgICB0ZXh0OiBpbnB1dFZhbHVlLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dFZhbHVlfSBvbklucHV0PXtoYW5kbGVJbnB1dH0gc3R5bGU9e2lucHV0U3R5bGV9IHBsYWNlaG9sZGVyPVwi5pyq5YWl5YqbXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxuICAgICAgICBhZGRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgdG9kb0xpc3RTdGF0ZSBmcm9tICd+L3N0b3JlL3RvZG9saXN0Mic7XG5cbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNiYmInLFxuICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG59O1xuXG5jb25zdCBidXR0b25TdHlsZSA9IHtcbiAgbWFyZ2luOiAnMCAwIDAgMTBweCcsXG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNiYmInLFxuICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2NjYycsXG59O1xuXG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIC8vLy8gc2V044Gu44G/44KS5L2/44GE44Gf44GE44Gu44Gnc2V044Gg44GR44Go44Gj44Gm44GP44KLIHVzZVNldFJlY29pbFN0YXRlXG4gIC8vY29uc3Qgc2V0VG9kb0xpc3QgPSB1c2VTZXRSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcblxuICAvLyDku4rlm57jga/phY3liJfjgatzZXTjgZnjgovjgajjgY3jgat2YWx1ZeOCguW/heimgeOBoOOBo+OBn+OBruOBp+aZrumAmuOBqyB1c2VSZWNvaWxTdGF0ZVxuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVJlY29pbFN0YXRlKHRvZG9MaXN0U3RhdGUpO1xuXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcbiAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHJldHVybjtcblxuICAgIHNldFRvZG9MaXN0KFtcbiAgICAgIC4uLnRvZG9MaXN0LFxuICAgICAge1xuICAgICAgICBpZDogYGl0ZW0ke3RvZG9MaXN0Lmxlbmd0aCArIDF9YCxcbiAgICAgICAgdGV4dDogaW5wdXRWYWx1ZSxcbiAgICAgIH0sXG4gICAgXSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXRWYWx1ZX0gb25JbnB1dD17aGFuZGxlSW5wdXR9IHN0eWxlPXtpbnB1dFN0eWxlfSBwbGFjZWhvbGRlcj1cIuacquWFpeWKm1wiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3R5bGU9e2J1dHRvblN0eWxlfT5cbiAgICAgICAgYWRkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzZWxlY3RvciwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgbGFzdHVwZGF0ZVNlbGVjdG9yIH0gZnJvbSAnfi9zdG9yZS9sYXN0dXBkYXRlJztcblxuY29uc3QgcFN0eWxlID0ge1xuICBmb250U2l6ZTogJzEuNnJlbScsXG4gIG1hcmdpbkJvdHRvbTogJzEuNHJlbScsXG59O1xuXG5jb25zdCBMYXN0dXBkYXRlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy8gaG9nZVxuICBjb25zdCBzdWJzY3JpYmVTdGF0ZXMgPSB1c2VSZWNvaWxWYWx1ZShsYXN0dXBkYXRlU2VsZWN0b3IpO1xuXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKERhdGUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdWJzY3JpYmVTdGF0ZXMpO1xuICAgIHNldERhdGUoRGF0ZSgpKTtcbiAgfSwgW3N1YnNjcmliZVN0YXRlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIHN0eWxlPXtwU3R5bGV9Pkxhc3RVcGRhdGU6IHtkYXRlfTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhc3R1cGRhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBzZXJ2ZXJ0aW1lU2VsZWN0b3IgfSBmcm9tICd+L3N0b3JlL3NlcnZlcnRpbWUnO1xuXG5jb25zdCBTZXJ2ZXJUaW1lVmlldzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSB1c2VSZWNvaWxWYWx1ZShzZXJ2ZXJ0aW1lU2VsZWN0b3IpO1xuXG4gIHJldHVybiA8cD7jgrXjg7zjg5Djg7zjgr/jgqTjg6B7ZGF0ZX08L3A+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyVGltZVZpZXc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlcnZlclRpbWVWaWV3IGZyb20gJy4vU2VydmVyVGltZVZpZXcnO1xuXG5jb25zdCBTZXJ2ZXJ0aW1lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbj7jgrXjg7zjg5Djgr/jgqTjg6Dlj5blvpc8L2J1dHRvbj5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj7oqq3ovrzkuK08L2Rpdj59PlxuICAgICAgICA8U2VydmVyVGltZVZpZXcgLz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJ0aW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgbGlTdHlsZSA9IHtcbiAgZm9udFNpemU6ICcxLjZyZW0nLFxufTtcblxuY29uc3QgVG9kb0l0ZW06IFJlYWN0LkZDPElUb2RvSXRlbVByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBzdHlsZT17bGlTdHlsZX0+XG4gICAgICB7cHJvcHMuaWR9Ontwcm9wcy50ZXh0fVxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7XG5pbXBvcnQgdG9kb0xpc3RTdGF0ZSBmcm9tICd+L3N0b3JlL3RvZG9saXN0MSc7XG5pbXBvcnQgSW5wdXQxIGZyb20gJy4vSW5wdXQxJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHBhZGRpbmc6ICcyMHB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZlZicsXG59O1xuXG5jb25zdCBUb2RvTGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIC8vIHVzZVN0YXRl44G/44Gf44GE44Grc2V044KC5L2/44GG44Gq44KJXG4gIC8vY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcblxuICAvLyB2YWx1ZeOBoOOBkeOBp+OCiOOBhOOBquOCieOBk+OBo+OBoVxuICBjb25zdCB0b2RvTGlzdCA9IHVzZVJlY29pbFZhbHVlKHRvZG9MaXN0U3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgdG9kb2xpc3QxXG4gICAgICA8SW5wdXQxIC8+XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2RvTGlzdC5tYXAoKHRvZG9JdGVtKSA9PiAoXG4gICAgICAgICAgPFRvZG9JdGVtIGtleT17dG9kb0l0ZW0uaWR9IGlkPXt0b2RvSXRlbS5pZH0gdGV4dD17dG9kb0l0ZW0udGV4dH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vVG9kb0l0ZW0nO1xuaW1wb3J0IHRvZG9MaXN0U3RhdGUgZnJvbSAnfi9zdG9yZS90b2RvbGlzdDInO1xuaW1wb3J0IElucHV0MSBmcm9tICcuL0lucHV0Mic7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBwYWRkaW5nOiAnMjBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmMnLFxufTtcblxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAvLyB1c2VTdGF0ZeOBv+OBn+OBhOOBq3NldOOCguS9v+OBhuOBquOCiVxuICAvL2NvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlUmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgLy8gdmFsdWXjgaDjgZHjgafjgojjgYTjgarjgonjgZPjgaPjgaFcbiAgY29uc3QgdG9kb0xpc3QgPSB1c2VSZWNvaWxWYWx1ZSh0b2RvTGlzdFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHRvZG9saXN0MlxuICAgICAgPElucHV0MSAvPlxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb0xpc3QubWFwKCh0b2RvSXRlbSkgPT4gKFxuICAgICAgICAgIDxUb2RvSXRlbSBrZXk9e3RvZG9JdGVtLmlkfSBpZD17dG9kb0l0ZW0uaWR9IHRleHQ9e3RvZG9JdGVtLnRleHR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG4vL2ltcG9ydCBcIn4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICd+L0FwcC50c3gnO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCB7IHNlbGVjdG9yIH0gZnJvbSAncmVjb2lsJztcblxuaW1wb3J0IHRvZG9MaXN0U3RhdGUxIGZyb20gJ34vc3RvcmUvdG9kb2xpc3QxJztcbmltcG9ydCB0b2RvTGlzdFN0YXRlMiBmcm9tICd+L3N0b3JlL3RvZG9saXN0Mic7XG5cbmV4cG9ydCBjb25zdCBsYXN0dXBkYXRlU2VsZWN0b3IgPSBzZWxlY3Rvcih7XG4gIGtleTogJ0xhc3R1cGRhdGUnLFxuICBnZXQ6ICh7IGdldCB9KSA9PiB7XG4gICAgcmV0dXJuIFtnZXQodG9kb0xpc3RTdGF0ZTEpLCBnZXQodG9kb0xpc3RTdGF0ZTIpXTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tICdyZWNvaWwnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgbGFzdHVwZGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi9sYXN0dXBkYXRlJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlcnRpbWVTZWxlY3RvciA9IHNlbGVjdG9yKHtcbiAga2V5OiAnc2VydmVydGltZScsXG4gIGdldDogYXN5bmMgKHsgZ2V0IH0pID0+IHtcbiAgICBnZXQobGFzdHVwZGF0ZVNlbGVjdG9yKTtcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXN5bmNSZXNwID0gYXdhaXQgYXhpb3MuaGVhZCgnLi8nKTtcbiAgICByZXR1cm4gYXN5bmNSZXNwLmhlYWRlcnMuZGF0ZTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGF0b20oe1xuICBrZXk6ICd0b2RvTGlzdFN0YXRlMScsIC8v44GT44KM44GMYXRvbeOBruOCreODvOOBq+OBquOCi+OAgumHjeikh+OBmeOCi+OBqOWjiuOCjOOCi1xuICBkZWZhdWx0OiBbXG4gICAge1xuICAgICAgaWQ6ICdpdGVtMScsXG4gICAgICB0ZXh0OiAn44Gm44GN44GZ44Go77yBJyxcbiAgICB9LFxuICBdIGFzIElUb2RvTGlzdCxcbn0pO1xuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGF0b20oe1xuICBrZXk6ICd0b2RvTGlzdFN0YXRlMicsXG4gIGRlZmF1bHQ6IFtdIGFzIElUb2RvTGlzdCxcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwianMvaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdF9fd2VicGFja19yZXF1aXJlX18uTygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Nsb2NrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Nsb2NrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJqcy92ZW5kb3JcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzeFwiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9
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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TodoList2__WEBPACK_IMPORTED_MODULE_2__.default, null)));
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
/* harmony import */ var _store_todolist1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/todolist1 */ "./src/store/todolist1.ts");
/* harmony import */ var _store_todolist2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/todolist2 */ "./src/store/todolist2.ts");




var pStyle = {
    fontSize: '1.6rem',
    marginBottom: '1.4rem',
};
var lastupdateSelector = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.selector)({
    key: 'Lastupdate',
    get: function (_a) {
        var get = _a.get;
        return [get(_store_todolist1__WEBPACK_IMPORTED_MODULE_2__.default), get(_store_todolist2__WEBPACK_IMPORTED_MODULE_3__.default)];
    },
});
var Lastupdate = function () {
    // hoge
    var subscribeStates = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(lastupdateSelector);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQxLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9jb21wb25lbnRzL0lucHV0Mi50c3giLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvY29tcG9uZW50cy9MYXN0dXBkYXRlLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9jb21wb25lbnRzL1RvZG9JdGVtLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9jb21wb25lbnRzL1RvZG9MaXN0MS50c3giLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvY29tcG9uZW50cy9Ub2RvTGlzdDIudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9zdG9yZS90b2RvbGlzdDEudHMiLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvc3RvcmUvdG9kb2xpc3QyLnRzIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG9jay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jbG9jay93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVxQjtBQUNBO0FBRVg7QUFDYTtBQUVqRCxrQkFBa0I7QUFDbEIsNEJBQTRCO0FBRTVCLElBQU0sTUFBTSxHQUFHO0lBQ2IsUUFBUSxFQUFFLFFBQVE7Q0FDbkIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHO0lBQ2QsTUFBTSxFQUFFLFVBQVU7Q0FDbkIsQ0FBQztBQUVGLElBQU0sR0FBRyxHQUFhO0lBQ3BCLE9BQU8sQ0FDTCxpREFBQyw4Q0FBVTtRQUNULHdEQUFHLEtBQUssRUFBRSxNQUFNLHFHQUF3QztRQUN4RCx3REFBRyxLQUFLLEVBQUUsTUFBTSw2TUFBc0Q7UUFDdEUseURBQUksS0FBSyxFQUFFLE9BQU8sR0FBSTtRQUN0QixpREFBQywyREFBVSxPQUFjO1FBQ3pCLGlEQUFDLDBEQUFTLE9BQWE7UUFDdkIsaURBQUMsMERBQVMsT0FBYSxDQUNaLENBQ2QsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLCtEQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3FCO0FBQ0E7QUFDTTtBQUU5QyxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLEVBQUUsTUFBTTtJQUNmLE1BQU0sRUFBRSxnQkFBZ0I7SUFDeEIsWUFBWSxFQUFFLE1BQU07SUFDcEIsZUFBZSxFQUFFLE1BQU07Q0FDeEIsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHO0lBQ2xCLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QixZQUFZLEVBQUUsTUFBTTtJQUNwQixlQUFlLEVBQUUsTUFBTTtDQUN4QixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQTBCLFVBQUMsS0FBSztJQUN6Qyw2Q0FBNkM7SUFDN0MsdURBQXVEO0lBRXZELGdEQUFnRDtJQUMxQyxTQUEwQixzREFBYyxDQUFDLHFEQUFhLENBQUMsRUFBdEQsUUFBUSxVQUFFLFdBQVcsUUFBaUMsQ0FBQztJQUV4RCxTQUE4QiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6QyxVQUFVLFVBQUUsYUFBYSxRQUFnQixDQUFDO0lBRWpELFNBQVMsV0FBVyxDQUFDLENBQXNDO1FBQ3pELGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTLFdBQVcsQ0FBQyxDQUFzQztRQUN6RCxJQUFJLFVBQVUsS0FBSyxFQUFFO1lBQUUsT0FBTztRQUU5QixXQUFXLGlDQUNOLFFBQVE7WUFDWDtnQkFDRSxFQUFFLEVBQUUsVUFBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRTtnQkFDaEMsSUFBSSxFQUFFLFVBQVU7YUFDakI7V0FDRCxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FDTDtRQUNFLDREQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFDLG9CQUFLLEdBQUc7UUFDbkcsNkRBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLFVBRXJELENBQ0wsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsK0RBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REbUI7QUFDQTtBQUNNO0FBRTlDLElBQU0sVUFBVSxHQUFHO0lBQ2pCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QixZQUFZLEVBQUUsTUFBTTtJQUNwQixlQUFlLEVBQUUsTUFBTTtDQUN4QixDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUc7SUFDbEIsTUFBTSxFQUFFLFlBQVk7SUFDcEIsT0FBTyxFQUFFLE1BQU07SUFDZixNQUFNLEVBQUUsZ0JBQWdCO0lBQ3hCLFlBQVksRUFBRSxNQUFNO0lBQ3BCLGVBQWUsRUFBRSxNQUFNO0NBQ3hCLENBQUM7QUFFRixJQUFNLEtBQUssR0FBMEIsVUFBQyxLQUFLO0lBQ3pDLDZDQUE2QztJQUM3Qyx1REFBdUQ7SUFFdkQsZ0RBQWdEO0lBQzFDLFNBQTBCLHNEQUFjLENBQUMscURBQWEsQ0FBQyxFQUF0RCxRQUFRLFVBQUUsV0FBVyxRQUFpQyxDQUFDO0lBRXhELFNBQThCLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXpDLFVBQVUsVUFBRSxhQUFhLFFBQWdCLENBQUM7SUFFakQsU0FBUyxXQUFXLENBQUMsQ0FBc0M7UUFDekQsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFNBQVMsV0FBVyxDQUFDLENBQXNDO1FBQ3pELElBQUksVUFBVSxLQUFLLEVBQUU7WUFBRSxPQUFPO1FBRTlCLFdBQVcsaUNBQ04sUUFBUTtZQUNYO2dCQUNFLEVBQUUsRUFBRSxVQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFO2dCQUNoQyxJQUFJLEVBQUUsVUFBVTthQUNqQjtXQUNELENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUNMO1FBQ0UsNERBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsb0JBQUssR0FBRztRQUNuRyw2REFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsVUFFckQsQ0FDTCxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRiwrREFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RDhCO0FBQ0Q7QUFDSDtBQUNBO0FBRS9DLElBQU0sTUFBTSxHQUFHO0lBQ2IsUUFBUSxFQUFFLFFBQVE7SUFDbEIsWUFBWSxFQUFFLFFBQVE7Q0FDdkIsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUcsZ0RBQVEsQ0FBQztJQUNsQyxHQUFHLEVBQUUsWUFBWTtJQUNqQixHQUFHLEVBQUUsVUFBQyxFQUFPO1lBQUwsR0FBRztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQWMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxxREFBYyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsSUFBTSxVQUFVLEdBQWE7SUFDM0IsT0FBTztJQUNQLElBQU0sZUFBZSxHQUFHLHNEQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUVyRCxTQUFrQiwrQ0FBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWpDLElBQUksVUFBRSxPQUFPLFFBQW9CLENBQUM7SUFFekMsZ0RBQVMsQ0FBQztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUV0QixPQUFPLENBQ0w7UUFDRSx3REFBRyxLQUFLLEVBQUUsTUFBTTs7WUFBZSxJQUFJLENBQUssQ0FDdkMsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsK0RBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBRTFCLElBQU0sT0FBTyxHQUFHO0lBQ2QsUUFBUSxFQUFFLFFBQVE7Q0FDbkIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUE2QixVQUFDLEtBQUs7SUFDL0MsT0FBTyxDQUNMLHlEQUFJLEtBQUssRUFBRSxPQUFPO1FBQ2YsS0FBSyxDQUFDLEVBQUU7O1FBQUcsS0FBSyxDQUFDLElBQUksQ0FDbkIsQ0FDTixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsK0RBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RFO0FBQ2M7QUFDTjtBQUNZO0FBQ2hCO0FBRTlCLElBQU0sS0FBSyxHQUFHO0lBQ1osT0FBTyxFQUFFLE1BQU07SUFDZixlQUFlLEVBQUUsTUFBTTtDQUN4QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQWE7SUFDekIsdUJBQXVCO0lBQ3ZCLGdFQUFnRTtJQUVoRSxrQkFBa0I7SUFDbEIsSUFBTSxRQUFRLEdBQUcsc0RBQWMsQ0FBQyxxREFBYSxDQUFDLENBQUM7SUFFL0MsT0FBTyxDQUNMLDBEQUFLLEtBQUssRUFBRSxLQUFLOztRQUVmLGlEQUFDLDRDQUFNLE9BQUc7UUFDViw2REFDRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLFFBQzFCLGlEQUFDLDhDQUFRLElBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEdBQUksQ0FDckUsRUFGMkIsQ0FFM0IsQ0FBQyxDQUNDLENBQ0QsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsK0RBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CRTtBQUNjO0FBQ047QUFDWTtBQUNoQjtBQUU5QixJQUFNLEtBQUssR0FBRztJQUNaLE9BQU8sRUFBRSxNQUFNO0lBQ2YsZUFBZSxFQUFFLE1BQU07Q0FDeEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFhO0lBQ3pCLHVCQUF1QjtJQUN2QixnRUFBZ0U7SUFFaEUsa0JBQWtCO0lBQ2xCLElBQU0sUUFBUSxHQUFHLHNEQUFjLENBQUMscURBQWEsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sQ0FDTCwwREFBSyxLQUFLLEVBQUUsS0FBSzs7UUFFZixpREFBQyw0Q0FBTSxPQUFHO1FBQ1YsNkRBQ0csUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxRQUMxQixpREFBQyw4Q0FBUSxJQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxHQUFJLENBQ3JFLEVBRjJCLENBRTNCLENBQUMsQ0FDQyxDQUNELENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLCtEQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JFO0FBQ087QUFFakMsd0JBQXdCO0FBQ0k7QUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFNUMsNkNBQWUsQ0FBQyxpREFBQyw2Q0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUjNCO0FBRTlCLCtEQUFlLDRDQUFJLENBQUM7SUFDbEIsR0FBRyxFQUFFLGdCQUFnQjtJQUNyQixPQUFPLEVBQUU7UUFDUDtZQUNFLEVBQUUsRUFBRSxPQUFPO1lBQ1gsSUFBSSxFQUFFLE9BQU87U0FDZDtLQUNXO0NBQ2YsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVjJCO0FBRTlCLCtEQUFlLDRDQUFJLENBQUM7SUFDbEIsR0FBRyxFQUFFLGdCQUFnQjtJQUNyQixPQUFPLEVBQUUsRUFBZTtDQUN6QixDQUFDLEVBQUM7Ozs7Ozs7VUNMSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsOEJBQThCLHdDQUF3QztXQUN0RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdCQUFnQixxQkFBcUI7V0FDckM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDLG1IQUFtSCxnREFBZ0QsRUFBRTtXQUNySztXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw2Q0FBNkMsdUNBQXVDOztXQUVwRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUNoREE7VUFDQTtVQUNBO1VBQ0Esc0ZBQXNGLCtDQUErQyxFQUFFO1VBQ3ZJIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRvZG9MaXN0MSBmcm9tICd+L2NvbXBvbmVudHMvVG9kb0xpc3QxJztcbmltcG9ydCBUb2RvTGlzdDIgZnJvbSAnfi9jb21wb25lbnRzL1RvZG9MaXN0Mic7XG5cbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IExhc3R1cGRhdGUgZnJvbSAnLi9jb21wb25lbnRzL0xhc3R1cGRhdGUnO1xuXG4vLyBhdG9tIDogc3RhdGXjga7kv53mjIFcbi8vIHNlbGVjdG9yIDpzdGF0ZeOCkuWLleeahOOBq+WkieabtOOBmeOCi+mWouaVsFxuXG5jb25zdCBwU3R5bGUgPSB7XG4gIGZvbnRTaXplOiAnMS42cmVtJyxcbn07XG5cbmNvbnN0IGhyU3R5bGUgPSB7XG4gIG1hcmdpbjogJzEuNHJlbSAwJyxcbn07XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlY29pbFJvb3Q+XG4gICAgICA8cCBzdHlsZT17cFN0eWxlfT50b2RvbGlzdDHjgah0b2RvbGlzdDLjgIHjgZ3jgozjgZ7jgoxhdG9t44KS5oyB44Gj44Gm44GE44KLPC9wPlxuICAgICAgPHAgc3R5bGU9e3BTdHlsZX0+44Gp44Gh44KJ44GL44GM5pu05paw44GV44KM44Gf44KJbGFzdHVwZGF0ZeOBrnNlbGVjdGVy44Gr44KI44KL6LO86Kqt44Gu5qSc55+l44GL44KJ5pu05paw5pel44KS5pu05paw44GZ44KLPC9wPlxuICAgICAgPGhyIHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgPExhc3R1cGRhdGU+PC9MYXN0dXBkYXRlPlxuICAgICAgPFRvZG9MaXN0MT48L1RvZG9MaXN0MT5cbiAgICAgIDxUb2RvTGlzdDI+PC9Ub2RvTGlzdDI+XG4gICAgPC9SZWNvaWxSb290PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHRvZG9MaXN0U3RhdGUgZnJvbSAnfi9zdG9yZS90b2RvbGlzdDEnO1xuXG5jb25zdCBpbnB1dFN0eWxlID0ge1xuICBwYWRkaW5nOiAnMTBweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjYmJiJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxufTtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIG1hcmdpbjogJzAgMCAwIDEwcHgnLFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjYmJiJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxufTtcblxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAvLy8vIHNldOOBruOBv+OCkuS9v+OBhOOBn+OBhOOBruOBp3NldOOBoOOBkeOBqOOBo+OBpuOBj+OCiyB1c2VTZXRSZWNvaWxTdGF0ZVxuICAvL2NvbnN0IHNldFRvZG9MaXN0ID0gdXNlU2V0UmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgLy8g5LuK5Zue44Gv6YWN5YiX44Grc2V044GZ44KL44Go44GN44GrdmFsdWXjgoLlv4XopoHjgaDjgaPjgZ/jga7jgafmma7pgJrjgasgdXNlUmVjb2lsU3RhdGVcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSByZXR1cm47XG5cbiAgICBzZXRUb2RvTGlzdChbXG4gICAgICAuLi50b2RvTGlzdCxcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBpdGVtJHt0b2RvTGlzdC5sZW5ndGggKyAxfWAsXG4gICAgICAgIHRleHQ6IGlucHV0VmFsdWUsXG4gICAgICB9LFxuICAgIF0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0VmFsdWV9IG9uSW5wdXQ9e2hhbmRsZUlucHV0fSBzdHlsZT17aW5wdXRTdHlsZX0gcGxhY2Vob2xkZXI9XCLmnKrlhaXliptcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXtidXR0b25TdHlsZX0+XG4gICAgICAgIGFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB0b2RvTGlzdFN0YXRlIGZyb20gJ34vc3RvcmUvdG9kb2xpc3QyJztcblxuY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgcGFkZGluZzogJzEwcHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgI2JiYicsXG4gIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbn07XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICBtYXJnaW46ICcwIDAgMCAxMHB4JyxcbiAgcGFkZGluZzogJzEwcHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgI2JiYicsXG4gIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjJyxcbn07XG5cbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgLy8vLyBzZXTjga7jgb/jgpLkvb/jgYTjgZ/jgYTjga7jgadzZXTjgaDjgZHjgajjgaPjgabjgY/jgosgdXNlU2V0UmVjb2lsU3RhdGVcbiAgLy9jb25zdCBzZXRUb2RvTGlzdCA9IHVzZVNldFJlY29pbFN0YXRlKHRvZG9MaXN0U3RhdGUpO1xuXG4gIC8vIOS7iuWbnuOBr+mFjeWIl+OBq3NldOOBmeOCi+OBqOOBjeOBq3ZhbHVl44KC5b+F6KaB44Gg44Gj44Gf44Gu44Gn5pmu6YCa44GrIHVzZVJlY29pbFN0YXRlXG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlUmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykgcmV0dXJuO1xuXG4gICAgc2V0VG9kb0xpc3QoW1xuICAgICAgLi4udG9kb0xpc3QsXG4gICAgICB7XG4gICAgICAgIGlkOiBgaXRlbSR7dG9kb0xpc3QubGVuZ3RoICsgMX1gLFxuICAgICAgICB0ZXh0OiBpbnB1dFZhbHVlLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dFZhbHVlfSBvbklucHV0PXtoYW5kbGVJbnB1dH0gc3R5bGU9e2lucHV0U3R5bGV9IHBsYWNlaG9sZGVyPVwi5pyq5YWl5YqbXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxuICAgICAgICBhZGRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNlbGVjdG9yLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgdG9kb0xpc3RTdGF0ZTEgZnJvbSAnfi9zdG9yZS90b2RvbGlzdDEnO1xuaW1wb3J0IHRvZG9MaXN0U3RhdGUyIGZyb20gJ34vc3RvcmUvdG9kb2xpc3QyJztcblxuY29uc3QgcFN0eWxlID0ge1xuICBmb250U2l6ZTogJzEuNnJlbScsXG4gIG1hcmdpbkJvdHRvbTogJzEuNHJlbScsXG59O1xuXG5jb25zdCBsYXN0dXBkYXRlU2VsZWN0b3IgPSBzZWxlY3Rvcih7XG4gIGtleTogJ0xhc3R1cGRhdGUnLFxuICBnZXQ6ICh7IGdldCB9KSA9PiB7XG4gICAgcmV0dXJuIFtnZXQodG9kb0xpc3RTdGF0ZTEpLCBnZXQodG9kb0xpc3RTdGF0ZTIpXTtcbiAgfSxcbn0pO1xuXG5jb25zdCBMYXN0dXBkYXRlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy8gaG9nZVxuICBjb25zdCBzdWJzY3JpYmVTdGF0ZXMgPSB1c2VSZWNvaWxWYWx1ZShsYXN0dXBkYXRlU2VsZWN0b3IpO1xuXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKERhdGUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdWJzY3JpYmVTdGF0ZXMpO1xuICAgIHNldERhdGUoRGF0ZSgpKTtcbiAgfSwgW3N1YnNjcmliZVN0YXRlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIHN0eWxlPXtwU3R5bGV9Pkxhc3RVcGRhdGU6IHtkYXRlfTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhc3R1cGRhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBsaVN0eWxlID0ge1xuICBmb250U2l6ZTogJzEuNnJlbScsXG59O1xuXG5jb25zdCBUb2RvSXRlbTogUmVhY3QuRkM8SVRvZG9JdGVtUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtsaVN0eWxlfT5cbiAgICAgIHtwcm9wcy5pZH06e3Byb3BzLnRleHR9XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtJztcbmltcG9ydCB0b2RvTGlzdFN0YXRlIGZyb20gJ34vc3RvcmUvdG9kb2xpc3QxJztcbmltcG9ydCBJbnB1dDEgZnJvbSAnLi9JbnB1dDEnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgcGFkZGluZzogJzIwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmVmJyxcbn07XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy8gdXNlU3RhdGXjgb/jgZ/jgYTjgatzZXTjgoLkvb/jgYbjgarjgolcbiAgLy9jb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVJlY29pbFN0YXRlKHRvZG9MaXN0U3RhdGUpO1xuXG4gIC8vIHZhbHVl44Gg44GR44Gn44KI44GE44Gq44KJ44GT44Gj44GhXG4gIGNvbnN0IHRvZG9MaXN0ID0gdXNlUmVjb2lsVmFsdWUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB0b2RvbGlzdDFcbiAgICAgIDxJbnB1dDEgLz5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9MaXN0Lm1hcCgodG9kb0l0ZW0pID0+IChcbiAgICAgICAgICA8VG9kb0l0ZW0ga2V5PXt0b2RvSXRlbS5pZH0gaWQ9e3RvZG9JdGVtLmlkfSB0ZXh0PXt0b2RvSXRlbS50ZXh0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7XG5pbXBvcnQgdG9kb0xpc3RTdGF0ZSBmcm9tICd+L3N0b3JlL3RvZG9saXN0Mic7XG5pbXBvcnQgSW5wdXQxIGZyb20gJy4vSW5wdXQyJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHBhZGRpbmc6ICcyMHB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmYycsXG59O1xuXG5jb25zdCBUb2RvTGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIC8vIHVzZVN0YXRl44G/44Gf44GE44Grc2V044KC5L2/44GG44Gq44KJXG4gIC8vY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcblxuICAvLyB2YWx1ZeOBoOOBkeOBp+OCiOOBhOOBquOCieOBk+OBo+OBoVxuICBjb25zdCB0b2RvTGlzdCA9IHVzZVJlY29pbFZhbHVlKHRvZG9MaXN0U3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgdG9kb2xpc3QyXG4gICAgICA8SW5wdXQxIC8+XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2RvTGlzdC5tYXAoKHRvZG9JdGVtKSA9PiAoXG4gICAgICAgICAgPFRvZG9JdGVtIGtleT17dG9kb0l0ZW0uaWR9IGlkPXt0b2RvSXRlbS5pZH0gdGV4dD17dG9kb0l0ZW0udGV4dH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vaW1wb3J0IFwifi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJ34vQXBwLnRzeCc7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGF0b20oe1xuICBrZXk6ICd0b2RvTGlzdFN0YXRlMScsIC8v44GT44KM44GMYXRvbeOBruOCreODvOOBq+OBquOCi+OAgumHjeikh+OBmeOCi+OBqOWjiuOCjOOCi1xuICBkZWZhdWx0OiBbXG4gICAge1xuICAgICAgaWQ6ICdpdGVtMScsXG4gICAgICB0ZXh0OiAn44Gm44GN44GZ44Go77yBJyxcbiAgICB9LFxuICBdIGFzIElUb2RvTGlzdCxcbn0pO1xuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGF0b20oe1xuICBrZXk6ICd0b2RvTGlzdFN0YXRlMicsXG4gIGRlZmF1bHQ6IFtdIGFzIElUb2RvTGlzdCxcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJqcy9pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0X193ZWJwYWNrX3JlcXVpcmVfXy5PKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2xvY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2xvY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImpzL3ZlbmRvclwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
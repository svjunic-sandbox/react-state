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
/* harmony import */ var _Components_TodoList1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/Components/TodoList1 */ "./src/Components/TodoList1.tsx");
/* harmony import */ var _Components_TodoList2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Components/TodoList2 */ "./src/Components/TodoList2.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");




// atom : stateの保持
// selector :stateを動的に変更する関数
var App = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_TodoList1__WEBPACK_IMPORTED_MODULE_1__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_TodoList2__WEBPACK_IMPORTED_MODULE_2__.default, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/Components/Input1.tsx":
/*!***********************************!*\
  !*** ./src/Components/Input1.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _Store_todolist1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Store/todolist1 */ "./src/Store/todolist1.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var Input = function (props) {
    //// setのみを使いたいのでsetだけとってくる useSetRecoilState
    //const setTodoList = useSetRecoilState(todoListState);
    var _a = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_Store_todolist1__WEBPACK_IMPORTED_MODULE_2__.todoListState), todoList = _a[0], setTodoList = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('ほげほげ'), inputValue = _b[0], setInputValue = _b[1];
    function handleInput(e) {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }
    function handleClick(e) {
        console.log(e);
        setTodoList(__spreadArray(__spreadArray([], todoList), [
            {
                id: "item" + (todoList.length + 1),
                text: inputValue,
            },
        ]));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", value: inputValue, onInput: handleInput }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", onClick: handleClick }, "add")));
};
/* harmony default export */ __webpack_exports__["default"] = (Input);


/***/ }),

/***/ "./src/Components/TodoItem.tsx":
/*!*************************************!*\
  !*** ./src/Components/TodoItem.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var TodoItem = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
        props.id,
        ":",
        props.text));
};
/* harmony default export */ __webpack_exports__["default"] = (TodoItem);


/***/ }),

/***/ "./src/Components/TodoList1.tsx":
/*!**************************************!*\
  !*** ./src/Components/TodoList1.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ "./src/Components/TodoItem.tsx");
/* harmony import */ var _Store_todolist1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/Store/todolist1 */ "./src/Store/todolist1.ts");
/* harmony import */ var _Input1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input1 */ "./src/Components/Input1.tsx");





var style = {
    padding: '20px',
    backgroundColor: '#fef',
};
var TodoList = function () {
    // useStateみたいにsetも使うなら
    //const [todoList, setTodoList] = useRecoilState(todoListState);
    // valueだけでよいならこっち
    var todoList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_Store_todolist1__WEBPACK_IMPORTED_MODULE_3__.todoListState);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: style },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input1__WEBPACK_IMPORTED_MODULE_4__.default, null),
        todoList.map(function (todoItem) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoItem__WEBPACK_IMPORTED_MODULE_2__.default, { key: todoItem.id, id: todoItem.id, text: todoItem.text })); })));
};
/* harmony default export */ __webpack_exports__["default"] = (TodoList);


/***/ }),

/***/ "./src/Components/TodoList2.tsx":
/*!**************************************!*\
  !*** ./src/Components/TodoList2.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ "./src/Components/TodoItem.tsx");
/* harmony import */ var _Store_todolist2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/Store/todolist2 */ "./src/Store/todolist2.ts");




var style = {
    padding: '20px',
    backgroundColor: '#ffe',
};
var TodoList = function () {
    // useRecoilValue() のHooks APIを使って
    // コンポーネントに適用
    var _a = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_Store_todolist2__WEBPACK_IMPORTED_MODULE_3__.todoListState), todoList = _a[0], setTodoList = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: style }, todoList.map(function (todoItem) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoItem__WEBPACK_IMPORTED_MODULE_2__.default, { key: todoItem.id, id: todoItem.id, text: todoItem.text })); })));
};
/* harmony default export */ __webpack_exports__["default"] = (TodoList);


/***/ }),

/***/ "./src/Store/todolist1.ts":
/*!********************************!*\
  !*** ./src/Store/todolist1.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoListState": function() { return /* binding */ todoListState; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

var todoListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'todoListState1',
    default: [
        {
            id: 'item1',
            text: 'てきすと！',
        },
    ],
});


/***/ }),

/***/ "./src/Store/todolist2.ts":
/*!********************************!*\
  !*** ./src/Store/todolist2.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoListState": function() { return /* binding */ todoListState; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

var todoListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'todoListState2',
    default: [],
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL0NvbXBvbmVudHMvSW5wdXQxLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9Db21wb25lbnRzL1RvZG9JdGVtLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9Db21wb25lbnRzL1RvZG9MaXN0MS50c3giLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvQ29tcG9uZW50cy9Ub2RvTGlzdDIudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL1N0b3JlL3RvZG9saXN0MS50cyIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9TdG9yZS90b2RvbGlzdDIudHMiLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG9jay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jbG9jay93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRXFCO0FBQ0E7QUFFWDtBQUVwQyxrQkFBa0I7QUFDbEIsNEJBQTRCO0FBRTVCLElBQU0sR0FBRyxHQUFhO0lBQ3BCLE9BQU8sQ0FDTCxpREFBQyw4Q0FBVTtRQUNULGlEQUFDLDBEQUFTLE9BQWE7UUFDdkIsaURBQUMsMERBQVMsT0FBYSxDQUNaLENB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QUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDZDQUE2Qyx1Q0FBdUM7O1dBRXBGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQ2hEQTtVQUNBO1VBQ0E7VUFDQSxzRkFBc0YsK0NBQStDLEVBQUU7VUFDdkkiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVG9kb0xpc3QxIGZyb20gJ34vQ29tcG9uZW50cy9Ub2RvTGlzdDEnO1xuaW1wb3J0IFRvZG9MaXN0MiBmcm9tICd+L0NvbXBvbmVudHMvVG9kb0xpc3QyJztcblxuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gJ3JlY29pbCc7XG5cbi8vIGF0b20gOiBzdGF0ZeOBruS/neaMgVxuLy8gc2VsZWN0b3IgOnN0YXRl44KS5YuV55qE44Gr5aSJ5pu044GZ44KL6Zai5pWwXG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlY29pbFJvb3Q+XG4gICAgICA8VG9kb0xpc3QxPjwvVG9kb0xpc3QxPlxuICAgICAgPFRvZG9MaXN0Mj48L1RvZG9MaXN0Mj5cbiAgICA8L1JlY29pbFJvb3Q+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyB0b2RvTGlzdFN0YXRlIH0gZnJvbSAnfi9TdG9yZS90b2RvbGlzdDEnO1xuXG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIC8vLy8gc2V044Gu44G/44KS5L2/44GE44Gf44GE44Gu44Gnc2V044Gg44GR44Go44Gj44Gm44GP44KLIHVzZVNldFJlY29pbFN0YXRlXG4gIC8vY29uc3Qgc2V0VG9kb0xpc3QgPSB1c2VTZXRSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgn44G744GS44G744GSJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHNldFRvZG9MaXN0KFtcbiAgICAgIC4uLnRvZG9MaXN0LFxuICAgICAge1xuICAgICAgICBpZDogYGl0ZW0ke3RvZG9MaXN0Lmxlbmd0aCArIDF9YCxcbiAgICAgICAgdGV4dDogaW5wdXRWYWx1ZSxcbiAgICAgIH0sXG4gICAgXSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXRWYWx1ZX0gb25JbnB1dD17aGFuZGxlSW5wdXR9IC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIGFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRvZG9JdGVtOiBSZWFjdC5GQzxJVG9kb0l0ZW1Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICB7cHJvcHMuaWR9Ontwcm9wcy50ZXh0fVxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7XG5pbXBvcnQgeyB0b2RvTGlzdFN0YXRlIH0gZnJvbSAnfi9TdG9yZS90b2RvbGlzdDEnO1xuaW1wb3J0IElucHV0MSBmcm9tICcuL0lucHV0MSc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBwYWRkaW5nOiAnMjBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZWYnLFxufTtcblxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAvLyB1c2VTdGF0ZeOBv+OBn+OBhOOBq3NldOOCguS9v+OBhuOBquOCiVxuICAvL2NvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlUmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgLy8gdmFsdWXjgaDjgZHjgafjgojjgYTjgarjgonjgZPjgaPjgaFcbiAgY29uc3QgdG9kb0xpc3QgPSB1c2VSZWNvaWxWYWx1ZSh0b2RvTGlzdFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxJbnB1dDEgLz5cbiAgICAgIHt0b2RvTGlzdC5tYXAoKHRvZG9JdGVtKSA9PiAoXG4gICAgICAgIDxUb2RvSXRlbSBrZXk9e3RvZG9JdGVtLmlkfSBpZD17dG9kb0l0ZW0uaWR9IHRleHQ9e3RvZG9JdGVtLnRleHR9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtJztcbmltcG9ydCB7IHRvZG9MaXN0U3RhdGUgfSBmcm9tICd+L1N0b3JlL3RvZG9saXN0Mic7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBwYWRkaW5nOiAnMjBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmUnLFxufTtcblxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAvLyB1c2VSZWNvaWxWYWx1ZSgpIOOBrkhvb2tzIEFQSeOCkuS9v+OBo+OBplxuICAvLyDjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavpgannlKhcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHt0b2RvTGlzdC5tYXAoKHRvZG9JdGVtKSA9PiAoXG4gICAgICAgIDxUb2RvSXRlbSBrZXk9e3RvZG9JdGVtLmlkfSBpZD17dG9kb0l0ZW0uaWR9IHRleHQ9e3RvZG9JdGVtLnRleHR9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCc7XG5cbmV4cG9ydCBjb25zdCB0b2RvTGlzdFN0YXRlID0gYXRvbSh7XG4gIGtleTogJ3RvZG9MaXN0U3RhdGUxJywgLy/jgZPjgozjgYxhdG9t44Gu44Kt44O844Gr44Gq44KL44CC6YeN6KSH44GZ44KL44Go5aOK44KM44KLXG4gIGRlZmF1bHQ6IFtcbiAgICB7XG4gICAgICBpZDogJ2l0ZW0xJyxcbiAgICAgIHRleHQ6ICfjgabjgY3jgZnjgajvvIEnLFxuICAgIH0sXG4gIF0gYXMgSVRvZG9MaXN0LFxufSk7XG4iLCJpbXBvcnQgeyBhdG9tIH0gZnJvbSAncmVjb2lsJztcblxuZXhwb3J0IGNvbnN0IHRvZG9MaXN0U3RhdGUgPSBhdG9tKHtcbiAga2V5OiAndG9kb0xpc3RTdGF0ZTInLFxuICBkZWZhdWx0OiBbXSBhcyBJVG9kb0xpc3QsXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuLy9pbXBvcnQgXCJ+L2luZGV4LnNjc3NcIjtcbmltcG9ydCBBcHAgZnJvbSAnfi9BcHAudHN4JztcblxuY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImpzL2luZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLk8oKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjbG9ja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjbG9ja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wianMvdmVuZG9yXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
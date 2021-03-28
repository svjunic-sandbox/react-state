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
    var _a = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_Store_todolist1__WEBPACK_IMPORTED_MODULE_2__.todoListState), todoList = _a[0], setTodoList = _a[1];
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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, todoList.map(function (todoItem) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoItem__WEBPACK_IMPORTED_MODULE_2__.default, { key: todoItem.id, id: todoItem.id, text: todoItem.text })); }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL0NvbXBvbmVudHMvSW5wdXQxLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9Db21wb25lbnRzL1RvZG9JdGVtLnRzeCIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9Db21wb25lbnRzL1RvZG9MaXN0MS50c3giLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvQ29tcG9uZW50cy9Ub2RvTGlzdDIudHN4Iiwid2VicGFjazovL2Nsb2NrLy4vc3JjL1N0b3JlL3RvZG9saXN0MS50cyIsIndlYnBhY2s6Ly9jbG9jay8uL3NyYy9TdG9yZS90b2RvbGlzdDIudHMiLCJ3ZWJwYWNrOi8vY2xvY2svLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG9jay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jbG9jay93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRXFCO0FBQ0E7QUFFWDtBQUVwQyxrQkFBa0I7QUFDbEIsNEJBQTRCO0FBRTVCLElBQU0sR0FBRyxHQUFhO0lBQ3BCLE9BQU8sQ0FDTCxpREFBQyw4Q0FBVTtRQUNULGlEQUFDLDBEQUFTLE9BQWE7UUFDdkIsaURBQUMsMERBQVMsT0FBYSxDQUNaLENBQ2QsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLCtEQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnFCO0FBQ0E7QUFDVTtBQUVsRCxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLEVBQUUsTUFBTTtJQUNmLE1BQU0sRUFBRSxnQkFBZ0I7SUFDeEIsWUFBWSxFQUFFLE1BQU07SUFDcEIsZUFBZSxFQUFFLE1BQU07Q0FDeEIsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHO0lBQ2xCLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QixZQUFZLEVBQUUsTUFBTTtJQUNwQixlQUFlLEVBQUUsTUFBTTtDQUN4QixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQTBCLFVBQUMsS0FBSztJQUN6Qyw2Q0FBNkM7SUFDN0MsdURBQXVEO0lBRXZELGdEQUFnRDtJQUMxQyxTQUEwQixzREFBYyxDQUFDLDJEQUFhLENBQUMsRUFBdEQsUUFBUSxVQUFFLFdBQVcsUUFBaUMsQ0FBQztJQUV4RCxTQUE4QiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6QyxVQUFVLFVBQUUsYUFBYSxRQUFnQixDQUFDO0lBRWpELFNBQVMsV0FBVyxDQUFDLENBQXNDO1FBQ3pELGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTLFdBQVcsQ0FBQyxDQUFzQztRQUN6RCxJQUFJLFVBQVUsS0FBSyxFQUFFO1lBQUUsT0FBTztRQUU5QixXQUFXLGlDQUNOLFFBQVE7WUFDWDtnQkFDRSxFQUFFLEVBQUUsVUFBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRTtnQkFDaEMsSUFBSSxFQUFFLFVBQVU7YUFDakI7V0FDRCxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FDTDtRQUNFLDREQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFDLG9CQUFLLEdBQUc7UUFDbkcsNkRBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLFVBRXJELENBQ0wsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsK0RBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdERLO0FBRTFCLElBQU0sUUFBUSxHQUE2QixVQUFDLEtBQUs7SUFDL0MsT0FBTyxDQUNMO1FBQ0csS0FBSyxDQUFDLEVBQUU7O1FBQUcsS0FBSyxDQUFDLElBQUksQ0FDbkIsQ0FDTixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsK0RBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZFO0FBQ2M7QUFDTjtBQUNnQjtBQUNwQjtBQUU5QixJQUFNLEtBQUssR0FBRztJQUNaLE9BQU8sRUFBRSxNQUFNO0lBQ2YsZUFBZSxFQUFFLE1BQU07Q0FDeEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFhO0lBQ3pCLHVCQUF1QjtJQUN2QixnRUFBZ0U7SUFFaEUsa0JBQWtCO0lBQ2xCLElBQU0sUUFBUSxHQUFHLHNEQUFjLENBQUMsMkRBQWEsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sQ0FDTCwwREFBSyxLQUFLLEVBQUUsS0FBSztRQUNmLGlEQUFDLDRDQUFNLE9BQUc7UUFDViw2REFDRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLFFBQzFCLGlEQUFDLDhDQUFRLElBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEdBQUksQ0FDckUsRUFGMkIsQ0FFM0IsQ0FBQyxDQUNDLENBQ0QsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsK0RBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJFO0FBQ2M7QUFDTjtBQUNnQjtBQUVsRCxJQUFNLEtBQUssR0FBRztJQUNaLE9BQU8sRUFBRSxNQUFNO0lBQ2YsZUFBZSxFQUFFLE1BQU07Q0FDeEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFhO0lBQ3pCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ1AsU0FBMEIsc0RBQWMsQ0FBQywyREFBYSxDQUFDLEVBQXRELFFBQVEsVUFBRSxXQUFXLFFBQWlDLENBQUM7SUFFOUQsT0FBTyxDQUNMLDBEQUFLLEtBQUssRUFBRSxLQUFLLElBQ2QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxRQUMxQixpREFBQyw4Q0FBUSxJQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxHQUFJLENBQ3JFLEVBRjJCLENBRTNCLENBQUMsQ0FDRSxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRiwrREFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qk07QUFFdkIsSUFBTSxhQUFhLEdBQUcsNENBQUksQ0FBQztJQUNoQyxHQUFHLEVBQUUsZ0JBQWdCO0lBQ3JCLE9BQU8sRUFBRTtRQUNQO1lBQ0UsRUFBRSxFQUFFLE9BQU87WUFDWCxJQUFJLEVBQUUsT0FBTztTQUNkO0tBQ1c7Q0FDZixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMkI7QUFFdkIsSUFBTSxhQUFhLEdBQUcsNENBQUksQ0FBQztJQUNoQyxHQUFHLEVBQUUsZ0JBQWdCO0lBQ3JCLE9BQU8sRUFBRSxFQUFlO0NBQ3pCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTHVCO0FBQ087QUFFakMsd0JBQXdCO0FBQ0k7QUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFNUMsNkNBQWUsQ0FBQyxpREFBQyw2Q0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O1VDUnpEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsd0NBQXdDO1dBQ3RFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLHFCQUFxQjtXQUNyQztXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEMsbUhBQW1ILGdEQUFnRCxFQUFFO1dBQ3JLO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDZDQUE2Qyx1Q0FBdUM7O1dBRXBGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQ2hEQTtVQUNBO1VBQ0E7VUFDQSxzRkFBc0YsK0NBQStDLEVBQUU7VUFDdkkiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVG9kb0xpc3QxIGZyb20gJ34vQ29tcG9uZW50cy9Ub2RvTGlzdDEnO1xuaW1wb3J0IFRvZG9MaXN0MiBmcm9tICd+L0NvbXBvbmVudHMvVG9kb0xpc3QyJztcblxuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gJ3JlY29pbCc7XG5cbi8vIGF0b20gOiBzdGF0ZeOBruS/neaMgVxuLy8gc2VsZWN0b3IgOnN0YXRl44KS5YuV55qE44Gr5aSJ5pu044GZ44KL6Zai5pWwXG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlY29pbFJvb3Q+XG4gICAgICA8VG9kb0xpc3QxPjwvVG9kb0xpc3QxPlxuICAgICAgPFRvZG9MaXN0Mj48L1RvZG9MaXN0Mj5cbiAgICA8L1JlY29pbFJvb3Q+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyB0b2RvTGlzdFN0YXRlIH0gZnJvbSAnfi9TdG9yZS90b2RvbGlzdDEnO1xuXG5jb25zdCBpbnB1dFN0eWxlID0ge1xuICBwYWRkaW5nOiAnMTBweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjYmJiJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxufTtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIG1hcmdpbjogJzAgMCAwIDEwcHgnLFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjYmJiJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxufTtcblxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAvLy8vIHNldOOBruOBv+OCkuS9v+OBhOOBn+OBhOOBruOBp3NldOOBoOOBkeOBqOOBo+OBpuOBj+OCiyB1c2VTZXRSZWNvaWxTdGF0ZVxuICAvL2NvbnN0IHNldFRvZG9MaXN0ID0gdXNlU2V0UmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgLy8g5LuK5Zue44Gv6YWN5YiX44Grc2V044GZ44KL44Go44GN44GrdmFsdWXjgoLlv4XopoHjgaDjgaPjgZ/jga7jgafmma7pgJrjgasgdXNlUmVjb2lsU3RhdGVcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSByZXR1cm47XG5cbiAgICBzZXRUb2RvTGlzdChbXG4gICAgICAuLi50b2RvTGlzdCxcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBpdGVtJHt0b2RvTGlzdC5sZW5ndGggKyAxfWAsXG4gICAgICAgIHRleHQ6IGlucHV0VmFsdWUsXG4gICAgICB9LFxuICAgIF0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0VmFsdWV9IG9uSW5wdXQ9e2hhbmRsZUlucHV0fSBzdHlsZT17aW5wdXRTdHlsZX0gcGxhY2Vob2xkZXI9XCLmnKrlhaXliptcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXtidXR0b25TdHlsZX0+XG4gICAgICAgIGFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRvZG9JdGVtOiBSZWFjdC5GQzxJVG9kb0l0ZW1Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICB7cHJvcHMuaWR9Ontwcm9wcy50ZXh0fVxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7XG5pbXBvcnQgeyB0b2RvTGlzdFN0YXRlIH0gZnJvbSAnfi9TdG9yZS90b2RvbGlzdDEnO1xuaW1wb3J0IElucHV0MSBmcm9tICcuL0lucHV0MSc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBwYWRkaW5nOiAnMjBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZWYnLFxufTtcblxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAvLyB1c2VTdGF0ZeOBv+OBn+OBhOOBq3NldOOCguS9v+OBhuOBquOCiVxuICAvL2NvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlUmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgLy8gdmFsdWXjgaDjgZHjgafjgojjgYTjgarjgonjgZPjgaPjgaFcbiAgY29uc3QgdG9kb0xpc3QgPSB1c2VSZWNvaWxWYWx1ZSh0b2RvTGlzdFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxJbnB1dDEgLz5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9MaXN0Lm1hcCgodG9kb0l0ZW0pID0+IChcbiAgICAgICAgICA8VG9kb0l0ZW0ga2V5PXt0b2RvSXRlbS5pZH0gaWQ9e3RvZG9JdGVtLmlkfSB0ZXh0PXt0b2RvSXRlbS50ZXh0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7XG5pbXBvcnQgeyB0b2RvTGlzdFN0YXRlIH0gZnJvbSAnfi9TdG9yZS90b2RvbGlzdDInO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgcGFkZGluZzogJzIwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZlJyxcbn07XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy8gdXNlUmVjb2lsVmFsdWUoKSDjga5Ib29rcyBBUEnjgpLkvb/jgaPjgaZcbiAgLy8g44Kz44Oz44Od44O844ON44Oz44OI44Gr6YGp55SoXG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlUmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7dG9kb0xpc3QubWFwKCh0b2RvSXRlbSkgPT4gKFxuICAgICAgICA8VG9kb0l0ZW0ga2V5PXt0b2RvSXRlbS5pZH0gaWQ9e3RvZG9JdGVtLmlkfSB0ZXh0PXt0b2RvSXRlbS50ZXh0fSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsImltcG9ydCB7IGF0b20gfSBmcm9tICdyZWNvaWwnO1xuXG5leHBvcnQgY29uc3QgdG9kb0xpc3RTdGF0ZSA9IGF0b20oe1xuICBrZXk6ICd0b2RvTGlzdFN0YXRlMScsIC8v44GT44KM44GMYXRvbeOBruOCreODvOOBq+OBquOCi+OAgumHjeikh+OBmeOCi+OBqOWjiuOCjOOCi1xuICBkZWZhdWx0OiBbXG4gICAge1xuICAgICAgaWQ6ICdpdGVtMScsXG4gICAgICB0ZXh0OiAn44Gm44GN44GZ44Go77yBJyxcbiAgICB9LFxuICBdIGFzIElUb2RvTGlzdCxcbn0pO1xuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCc7XG5cbmV4cG9ydCBjb25zdCB0b2RvTGlzdFN0YXRlID0gYXRvbSh7XG4gIGtleTogJ3RvZG9MaXN0U3RhdGUyJyxcbiAgZGVmYXVsdDogW10gYXMgSVRvZG9MaXN0LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vaW1wb3J0IFwifi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJ34vQXBwLnRzeCc7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJqcy9pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0X193ZWJwYWNrX3JlcXVpcmVfXy5PKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2xvY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2xvY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImpzL3ZlbmRvclwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
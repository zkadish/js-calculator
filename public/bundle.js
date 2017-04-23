/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var newArray = [{ key: 'value' }, [1, 2, 3], 'string', 1000, function fn() {
    return 'fn';
}];

var arrayTwo = [1, 2, 3, 4, 5];

arrayTwo.forEach(function (ele, i, array) {
    // console.log(ele, i, array)
});

var value = arrayTwo.reduce(function (acc, val) {
    console.log(acc, val);
    return acc + val;
}, 0);

console.log(value);

// let mappedArray = arrayTwo.map((e, i, a) => {
//     return e + 10;
// }).filter((ma) => {
//     return ma > 12;
// })

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const array = ['a','b','c','d','e','f'];
// console.log(array[0]);


// for (var i = 0;i <= 5;i++) {
//     // console.log(array[i]);
//     if (array[i] >= 2) {
//         // console.log('I see how this works!')
//     } else if (array[i] === 'f') {
//         // console.log('this is the end of the array!')
//     } else {
//         // console.log('these are the other indices!')
//     }
// }
var grid = 8;
var result = '';
var even = false;
for (var i = 1; i <= grid * grid; i++) {
    if (!even) {
        if (i % 2 === 0) {
            result = result + '#';
        } else {
            result = result + ' ';
        }
    } else {
        if (i % 2 === 0) {
            result = result + ' ';
        } else {
            result = result + '#';
        }
    }

    if (i % 8 === 0) {
        result = result + '\n';
        even = !even;
    }
}
// console.log(result);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loops = __webpack_require__(1);

var _loops2 = _interopRequireDefault(_loops);

var _arrays = __webpack_require__(0);

var _arrays2 = _interopRequireDefault(_arrays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log('index.js loaded!');

// let result = 0;
// const addition = (x, y) => {
//     this.x = x;
//     this.y = y;
//     console.log(this);
// }

function outterFn() {
    // console.log(this)

    this.anotherFn = function () {
        //this...?
        // console.log(this)
    };

    var innerFn = function innerFn() {
        //this === outterFn's this
        // console.log(this)
    };

    this.anotherFn();
    innerFn();
}

var newOutterFn = new outterFn();
newOutterFn.anotherFn();

// this code is awesome!
// let newAddFn = new addition(1, 4);
// console.log(newAddFn.x);

// newAddFn.z = 10;
// console.log(newAddFn);

/***/ })
/******/ ]);
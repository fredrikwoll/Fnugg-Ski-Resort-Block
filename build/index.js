/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/assets/clouds-sun.svg":
/*!***********************************!*\
  !*** ./src/assets/clouds-sun.svg ***!
  \***********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgCloudsSun; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "currentColor",
  d: "M640 258.3c0-51.6-40.2-93.5-89.6-93.5h-.5c-16.6-40.7-55.3-69.2-99.4-69.2-46.4 0-86.2 30.1-101.5 74.2-25.3 8.8-45.2 29.1-54.7 54.9-48.3 5-86.3 45.5-86.3 95.1 0 1.8.1 3.7.2 5.6-38 13.2-64.2 49.2-64.2 90.5 0 53 43.1 96.1 96 96.1h240c52.9 0 96-43.1 96-96.1 0-24.7-9.4-47.1-24.8-64.1 49-.5 88.8-42.2 88.8-93.5zM480 480H240c-35.3 0-64-28.7-64-64.1 0-31 22.2-57.5 52.8-62.9l16.5-2.9-3.6-16.3c-1.1-5-1.7-9.6-1.7-13.9 0-35.3 28.7-64.1 64-64.1 24.6 0 47.2 14.5 57.8 37l8.6 18.4 15.8-12.7c8.8-7 19.1-10.7 29.8-10.7 26.5 0 48 21.5 48 48v16h16c35.3 0 64 28.7 64 64.1S515.3 480 480 480zm70.4-160.2h-56.1c-7.5-36.5-39.7-64.1-78.3-64.1-12 0-23.7 2.7-34.4 7.9-13-18-32-30.8-53.2-36.5 9.6-17.3 26.7-29.1 46.7-30.1 5.6-39.3 37-69.4 75.3-69.4 40.3 0 72.9 33.3 75.9 75.5 7.4-3.7 15.3-6.3 24-6.3 31.8 0 57.6 27.5 57.6 61.5.1 34-25.7 61.5-57.5 61.5zm-384.9-7.7c-2.1-1-4.3-1.7-6.6-1.7-1 0-2.1.1-3.1.3l-63.2 12.5 12.5-63.2c1.2-6.3-1.4-12.8-6.8-16.5l-53.5-35.8 53.5-35.8c5.4-3.6 8-10.1 6.8-16.5L92.6 92.2l63.2 12.5c6.5 1.3 12.8-1.5 16.4-6.8L208 44.4 243.8 98c3.6 5.3 9.9 8.1 16.4 6.8l63.2-12.5-12.1 61.2c4.2-2.8 8.4-5.5 13-7.8 7.3-15.7 17.5-29.4 29.3-41.2l5.8-29.5c1-5.2-.6-10.6-4.4-14.4-3.8-3.8-9-5.5-14.4-4.4l-76.2 15.1-43.1-64.6c-6-8.9-20.6-8.9-26.6 0l-43.2 64.6-76.2-15.2c-5.3-1.1-10.6.7-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4l15.1 76.3-64.5 43.2c-4.4 3-7.1 8-7.1 13.3C0 213 2.7 218 7.1 221l64.5 43.2-15.1 76.2c-1 5.3.6 10.7 4.4 14.4s9.2 5.4 14.4 4.4l56.3-11.1c8.8-14 20.3-26.3 33.9-36zM208 149.8c28.8 0 52.5 21.2 56.9 48.8 2.4-.8 4.8-1.8 7.3-2.4 5-9 11.2-17.1 18-24.5-13.9-31.7-45.5-53.9-82.2-53.9-49.5 0-89.8 40.3-89.8 89.9 0 39.5 25.7 72.7 61.1 84.8 2.3-10.6 5.9-20.6 10.6-30.1-23-7.6-39.8-29.1-39.8-54.7.1-31.9 26-57.9 57.9-57.9z"
});

function SvgCloudsSun(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fal",
    "data-icon": "clouds-sun",
    className: "clouds-sun_svg__svg-inline--fa clouds-sun_svg__fa-clouds-sun clouds-sun_svg__fa-w-20",
    viewBox: "0 0 640 512"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhbCIgZGF0YS1pY29uPSJjbG91ZHMtc3VuIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2xvdWRzLXN1biBmYS13LTIwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDY0MCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTY0MCAyNTguM2MwLTUxLjYtNDAuMi05My41LTg5LjYtOTMuNWgtLjVjLTE2LjYtNDAuNy01NS4zLTY5LjItOTkuNC02OS4yLTQ2LjQgMC04Ni4yIDMwLjEtMTAxLjUgNzQuMi0yNS4zIDguOC00NS4yIDI5LjEtNTQuNyA1NC45LTQ4LjMgNS04Ni4zIDQ1LjUtODYuMyA5NS4xIDAgMS44LjEgMy43LjIgNS42LTM4IDEzLjItNjQuMiA0OS4yLTY0LjIgOTAuNSAwIDUzIDQzLjEgOTYuMSA5NiA5Ni4xaDI0MGM1Mi45IDAgOTYtNDMuMSA5Ni05Ni4xIDAtMjQuNy05LjQtNDcuMS0yNC44LTY0LjEgNDktLjUgODguOC00Mi4yIDg4LjgtOTMuNXpNNDgwIDQ4MEgyNDBjLTM1LjMgMC02NC0yOC43LTY0LTY0LjEgMC0zMSAyMi4yLTU3LjUgNTIuOC02Mi45bDE2LjUtMi45LTMuNi0xNi4zYy0xLjEtNS0xLjctOS42LTEuNy0xMy45IDAtMzUuMyAyOC43LTY0LjEgNjQtNjQuMSAyNC42IDAgNDcuMiAxNC41IDU3LjggMzdsOC42IDE4LjQgMTUuOC0xMi43YzguOC03IDE5LjEtMTAuNyAyOS44LTEwLjcgMjYuNSAwIDQ4IDIxLjUgNDggNDh2MTZoMTZjMzUuMyAwIDY0IDI4LjcgNjQgNjQuMVM1MTUuMyA0ODAgNDgwIDQ4MHptNzAuNC0xNjAuMmgtNTYuMWMtNy41LTM2LjUtMzkuNy02NC4xLTc4LjMtNjQuMS0xMiAwLTIzLjcgMi43LTM0LjQgNy45LTEzLTE4LTMyLTMwLjgtNTMuMi0zNi41IDkuNi0xNy4zIDI2LjctMjkuMSA0Ni43LTMwLjEgNS42LTM5LjMgMzctNjkuNCA3NS4zLTY5LjQgNDAuMyAwIDcyLjkgMzMuMyA3NS45IDc1LjUgNy40LTMuNyAxNS4zLTYuMyAyNC02LjMgMzEuOCAwIDU3LjYgMjcuNSA1Ny42IDYxLjUuMSAzNC0yNS43IDYxLjUtNTcuNSA2MS41em0tMzg0LjktNy43Yy0yLjEtMS00LjMtMS43LTYuNi0xLjctMSAwLTIuMS4xLTMuMS4zbC02My4yIDEyLjUgMTIuNS02My4yYzEuMi02LjMtMS40LTEyLjgtNi44LTE2LjVsLTUzLjUtMzUuOCA1My41LTM1LjhjNS40LTMuNiA4LTEwLjEgNi44LTE2LjVMOTIuNiA5Mi4ybDYzLjIgMTIuNWM2LjUgMS4zIDEyLjgtMS41IDE2LjQtNi44TDIwOCA0NC40IDI0My44IDk4YzMuNiA1LjMgOS45IDguMSAxNi40IDYuOGw2My4yLTEyLjUtMTIuMSA2MS4yYzQuMi0yLjggOC40LTUuNSAxMy03LjggNy4zLTE1LjcgMTcuNS0yOS40IDI5LjMtNDEuMmw1LjgtMjkuNWMxLTUuMi0uNi0xMC42LTQuNC0xNC40LTMuOC0zLjgtOS01LjUtMTQuNC00LjRsLTc2LjIgMTUuMS00My4xLTY0LjZjLTYtOC45LTIwLjYtOC45LTI2LjYgMGwtNDMuMiA2NC42LTc2LjItMTUuMmMtNS4zLTEuMS0xMC42LjctMTQuNCA0LjQtMy44IDMuOC01LjQgOS4yLTQuNCAxNC40bDE1LjEgNzYuMy02NC41IDQzLjJjLTQuNCAzLTcuMSA4LTcuMSAxMy4zQzAgMjEzIDIuNyAyMTggNy4xIDIyMWw2NC41IDQzLjItMTUuMSA3Ni4yYy0xIDUuMy42IDEwLjcgNC40IDE0LjRzOS4yIDUuNCAxNC40IDQuNGw1Ni4zLTExLjFjOC44LTE0IDIwLjMtMjYuMyAzMy45LTM2ek0yMDggMTQ5LjhjMjguOCAwIDUyLjUgMjEuMiA1Ni45IDQ4LjggMi40LS44IDQuOC0xLjggNy4zLTIuNCA1LTkgMTEuMi0xNy4xIDE4LTI0LjUtMTMuOS0zMS43LTQ1LjUtNTMuOS04Mi4yLTUzLjktNDkuNSAwLTg5LjggNDAuMy04OS44IDg5LjkgMCAzOS41IDI1LjcgNzIuNyA2MS4xIDg0LjggMi4zLTEwLjYgNS45LTIwLjYgMTAuNi0zMC4xLTIzLTcuNi0zOS44LTI5LjEtMzkuOC01NC43LjEtMzEuOSAyNi01Ny45IDU3LjktNTcuOXoiPjwvcGF0aD48L3N2Zz4=");


/***/ }),

/***/ "./src/assets/clouds.svg":
/*!*******************************!*\
  !*** ./src/assets/clouds.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgClouds; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M543.7 304.3C539.8 259.4 502 224 456 224c-7.1 0-14 1.1-20.7 2.7 7.9-15.3 12.7-32.4 12.7-50.7 0-61.8-50.2-112-112-112-10.5 0-20.9 1.5-31 4.5C283 27 239.4 0 192 0 130.2 0 78.2 43.9 66.9 103.8c-39.4 11.8-66.9 48-66.9 90 0 52 42.3 94.2 94.2 94.2h100.2c-1.6 7.8-2.4 15.8-2.4 24v.4c-38.3 16-64 53.5-64 95.6 0 57.3 46.7 104 104 104h304c57.3 0 104-46.7 104-104 0-54.8-42.6-99.8-96.3-103.7zM94.2 256C59.9 256 32 228.1 32 193.8c0-30.3 21.8-56 51.8-61.1l12-2 1.2-12.1c5-49.4 45.8-86.6 95-86.6 39.5 0 75.5 25 89.6 62.3l6 16 15.5-7c10.6-4.8 21.7-7.3 32.9-7.3 44.1 0 80 35.9 80 80 0 19.9-7.4 38.1-19.7 52.2-22.2-22.5-52-36.2-84.3-36.2-45.8 0-85.3 26.1-105.5 64H94.2zM536 480H232c-39.7 0-72-32.3-72-72 0-32.3 21.9-60.7 53.3-69.2l13.3-3.6-2-17.2c-.3-2-.6-4-.6-6 0-48.5 39.5-88 88-88 32.2 0 61.8 17.9 77.2 46.8l10.6 19.8 15.2-16.5c10.8-11.7 25.4-18.1 41-18.1 30.9 0 56 25.1 56 56 0 1.6-.3 3.1-.8 6.9l-2.5 20 23.5-2.4c1.2-.2 2.5-.4 3.8-.4 39.7 0 72 32.3 72 72S575.7 480 536 480z",
  fill: "#232323"
});

function SvgClouds(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 640 512"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgkgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NDAgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NDAgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzIzMjMyMzt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NDMuNywzMDQuM0M1MzkuOCwyNTkuNCw1MDIsMjI0LDQ1NiwyMjRjLTcuMSwwLTE0LDEuMS0yMC43LDIuN2M3LjktMTUuMywxMi43LTMyLjQsMTIuNy01MC43CgljMC02MS44LTUwLjItMTEyLTExMi0xMTJjLTEwLjUsMC0yMC45LDEuNS0zMSw0LjVDMjgzLDI3LDIzOS40LDAsMTkyLDBDMTMwLjIsMCw3OC4yLDQzLjksNjYuOSwxMDMuOGMtMzkuNCwxMS44LTY2LjksNDgtNjYuOSw5MAoJYzAsNTIsNDIuMyw5NC4yLDk0LjIsOTQuMmgxMDAuMmMtMS42LDcuOC0yLjQsMTUuOC0yLjQsMjR2MC40Yy0zOC4zLDE2LTY0LDUzLjUtNjQsOTUuNmMwLDU3LjMsNDYuNywxMDQsMTA0LDEwNGgzMDQKCWM1Ny4zLDAsMTA0LTQ2LjcsMTA0LTEwNEM2NDAsMzUzLjIsNTk3LjQsMzA4LjIsNTQzLjcsMzA0LjN6IE05NC4yLDI1NkM1OS45LDI1NiwzMiwyMjguMSwzMiwxOTMuOGMwLTMwLjMsMjEuOC01Niw1MS44LTYxLjFsMTItMgoJbDEuMi0xMi4xYzUtNDkuNCw0NS44LTg2LjYsOTUtODYuNmMzOS41LDAsNzUuNSwyNSw4OS42LDYyLjNsNiwxNmwxNS41LTdjMTAuNi00LjgsMjEuNy03LjMsMzIuOS03LjNjNDQuMSwwLDgwLDM1LjksODAsODAKCWMwLDE5LjktNy40LDM4LjEtMTkuNyw1Mi4yYy0yMi4yLTIyLjUtNTItMzYuMi04NC4zLTM2LjJjLTQ1LjgsMC04NS4zLDI2LjEtMTA1LjUsNjRIOTQuMnogTTUzNiw0ODBIMjMyYy0zOS43LDAtNzItMzIuMy03Mi03MgoJYzAtMzIuMywyMS45LTYwLjcsNTMuMy02OS4ybDEzLjMtMy42bC0yLTE3LjJjLTAuMy0yLTAuNi00LTAuNi02YzAtNDguNSwzOS41LTg4LDg4LTg4YzMyLjIsMCw2MS44LDE3LjksNzcuMiw0Ni44bDEwLjYsMTkuOAoJbDE1LjItMTYuNWMxMC44LTExLjcsMjUuNC0xOC4xLDQxLTE4LjFjMzAuOSwwLDU2LDI1LjEsNTYsNTZjMCwxLjYtMC4zLDMuMS0wLjgsNi45bC0yLjUsMjBsMjMuNS0yLjRjMS4yLTAuMiwyLjUtMC40LDMuOC0wLjQKCWMzOS43LDAsNzIsMzIuMyw3Miw3MlM1NzUuNyw0ODAsNTM2LDQ4MHoiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./src/assets/condition.svg":
/*!**********************************!*\
  !*** ./src/assets/condition.svg ***!
  \**********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgCondition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M18.1 28.9l1.2 2.3c1.5-.8 10.2-5.7 10.2-12.8-.1-4.3-4.5-6.1-8-7.6l-.4-.2c-2.5-1.1-4.9-2.2-4.9-3.6 0-1.5 3.3-4.5 5.9-5.8h-.5C20 1.3 8 2.9 8 9.2c0 3.3 2.3 4.7 4.2 5.7h.1c1.8 1.1 2.8 1.7 2.7 3.2-.1 2-6.6 4.8-11.1 6l.7 2.4c11.6-3 12.9-7 13-8.2.2-2.9-2-4.3-4-5.5-1.8-1.1-3-1.9-3-3.6 0-1.2 1-2.4 2.8-3.4l.6-.3-.2.6c-.1.3-.1.6-.1.9.1 3.2 3.6 4.7 6.9 6.1 3.9 1.6 6.5 2.9 6.5 5.2-.1 5.3-7.3 9.8-9 10.6z",
  fill: "#232323"
});

function SvgCondition(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 32 32"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjMyMzIzO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTguMSwyOC45bDEuMiwyLjNjMS41LTAuOCwxMC4yLTUuNywxMC4yLTEyLjhjLTAuMS00LjMtNC41LTYuMS04LTcuNmwtMC40LTAuMmMtMi41LTEuMS00LjktMi4yLTQuOS0zLjYKCQkJYzAtMS41LDMuMy00LjUsNS45LTUuOGwtMC41LDBDMjAsMS4zLDgsMi45LDgsOS4yYzAsMy4zLDIuMyw0LjcsNC4yLDUuN2wwLjEsMGMxLjgsMS4xLDIuOCwxLjcsMi43LDMuMmMtMC4xLDItNi42LDQuOC0xMS4xLDYKCQkJbDAuNywyLjRjMTEuNi0zLDEyLjktNywxMy04LjJjMC4yLTIuOS0yLTQuMy00LTUuNWMtMS44LTEuMS0zLTEuOS0zLTMuNmMwLTEuMiwxLTIuNCwyLjgtMy40bDAuNi0wLjNsLTAuMiwwLjYKCQkJYy0wLjEsMC4zLTAuMSwwLjYtMC4xLDAuOWMwLjEsMy4yLDMuNiw0LjcsNi45LDYuMWMzLjksMS42LDYuNSwyLjksNi41LDUuMkMyNywyMy42LDE5LjgsMjguMSwxOC4xLDI4Ljl6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./src/assets/rain.svg":
/*!*****************************!*\
  !*** ./src/assets/rain.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgRain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M118.5 369.2c-2.8-10.2-11.8-17.1-22.3-17.2-11.6.7-19.7 6.8-22.7 17.1-4.7 16.3-11.8 26.9-18.8 37.1-8.6 12.7-17.4 25.8-17.4 45.3 0 33.4 26.3 60.5 58.7 60.5s58.7-27.1 58.7-60.5c0-19.6-8.8-32.6-17.4-45.2-7-10.3-14.1-20.8-18.8-37.1zM96 480c-14.7 0-26.7-12.8-26.7-28.5 0-9.3 4.1-15.8 11.9-27.3 4.6-6.8 9.9-14.7 14.7-24.6 4.8 9.9 10.2 17.8 14.8 24.6 7.8 11.5 11.9 18 11.9 27.3.1 15.7-11.9 28.5-26.6 28.5zm182.5-110.8c-2.8-10.2-11.8-17.1-22.3-17.2h-.2c-10.5 0-19.5 6.8-22.5 17.1-4.7 16.3-11.8 26.9-18.8 37.1-8.6 12.7-17.4 25.8-17.4 45.3 0 33.4 26.3 60.5 58.7 60.5s58.7-27.1 58.7-60.5c0-19.6-8.8-32.6-17.4-45.2-7-10.3-14.1-20.8-18.8-37.1zM256 480c-14.7 0-26.7-12.8-26.7-28.5 0-9.3 4.1-15.8 11.9-27.3 4.6-6.8 9.9-14.7 14.7-24.6 4.8 9.9 10.2 17.8 14.8 24.6 7.8 11.5 11.9 18 11.9 27.3.1 15.7-11.9 28.5-26.6 28.5zm182.5-110.8c-2.8-10.2-11.8-17.1-22.3-17.2-10.4.7-19.7 6.8-22.7 17.1-4.7 16.3-11.8 26.9-18.8 37.1-8.6 12.7-17.4 25.8-17.4 45.3 0 33.4 26.3 60.5 58.7 60.5s58.7-27.1 58.7-60.5c0-19.6-8.8-32.6-17.4-45.2-7-10.3-14.1-20.8-18.8-37.1zM416 480c-14.7 0-26.7-12.8-26.7-28.5 0-9.3 4.1-15.8 11.9-27.3 4.6-6.8 9.9-14.7 14.7-24.6 4.8 9.9 10.2 17.8 14.8 24.6 7.8 11.5 11.9 18 11.9 27.3.1 15.7-11.9 28.5-26.6 28.5zm-.3-367.7C411.8 67.4 373.9 32 328 32c-17.8 0-34.8 5.3-49.2 15.2C256.3 17.7 221.5 0 184 0 117.8 0 64 53.8 64 120v.4c-38.3 16-64 53.5-64 95.6 0 57.3 46.7 104 104 104h304c57.3 0 104-46.7 104-104 0-54.8-42.6-99.8-96.3-103.7zM408 288H104c-39.7 0-72-32.3-72-72 0-32.3 21.9-60.7 53.3-69.2l13.3-3.6-2-17.2c-.3-2-.6-4-.6-6 0-48.5 39.5-88 88-88 32.2 0 61.8 17.9 77.2 46.8l10.6 19.8L287 82.1C297.9 70.4 312.4 64 328 64c30.9 0 56 25.1 56 56 0 1.6-.3 3.1-.8 6.9l-2.5 20 23.5-2.4c1.2-.2 2.5-.4 3.8-.4 39.7 0 72 32.3 72 72S447.7 288 408 288z",
  fill: "#232323"
});

function SvgRain(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgkgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzIzMjMyMzt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTguNSwzNjkuMmMtMi44LTEwLjItMTEuOC0xNy4xLTIyLjMtMTcuMmMtMTEuNiwwLjctMTkuNyw2LjgtMjIuNywxNy4xYy00LjcsMTYuMy0xMS44LDI2LjktMTguOCwzNy4xCgljLTguNiwxMi43LTE3LjQsMjUuOC0xNy40LDQ1LjNjMCwzMy40LDI2LjMsNjAuNSw1OC43LDYwLjVzNTguNy0yNy4xLDU4LjctNjAuNWMwLTE5LjYtOC44LTMyLjYtMTcuNC00NS4yCglDMTMwLjMsMzk2LDEyMy4yLDM4NS41LDExOC41LDM2OS4yTDExOC41LDM2OS4yeiBNOTYsNDgwYy0xNC43LDAtMjYuNy0xMi44LTI2LjctMjguNWMwLTkuMyw0LjEtMTUuOCwxMS45LTI3LjMKCWM0LjYtNi44LDkuOS0xNC43LDE0LjctMjQuNmM0LjgsOS45LDEwLjIsMTcuOCwxNC44LDI0LjZjNy44LDExLjUsMTEuOSwxOCwxMS45LDI3LjNDMTIyLjcsNDY3LjIsMTEwLjcsNDgwLDk2LDQ4MHogTTI3OC41LDM2OS4yCgljLTIuOC0xMC4yLTExLjgtMTcuMS0yMi4zLTE3LjJIMjU2Yy0xMC41LDAtMTkuNSw2LjgtMjIuNSwxNy4xYy00LjcsMTYuMy0xMS44LDI2LjktMTguOCwzNy4xYy04LjYsMTIuNy0xNy40LDI1LjgtMTcuNCw0NS4zCgljMCwzMy40LDI2LjMsNjAuNSw1OC43LDYwLjVzNTguNy0yNy4xLDU4LjctNjAuNWMwLTE5LjYtOC44LTMyLjYtMTcuNC00NS4yQzI5MC4zLDM5NiwyODMuMiwzODUuNSwyNzguNSwzNjkuMkwyNzguNSwzNjkuMnoKCSBNMjU2LDQ4MGMtMTQuNywwLTI2LjctMTIuOC0yNi43LTI4LjVjMC05LjMsNC4xLTE1LjgsMTEuOS0yNy4zYzQuNi02LjgsOS45LTE0LjcsMTQuNy0yNC42YzQuOCw5LjksMTAuMiwxNy44LDE0LjgsMjQuNgoJYzcuOCwxMS41LDExLjksMTgsMTEuOSwyNy4zQzI4Mi43LDQ2Ny4yLDI3MC43LDQ4MCwyNTYsNDgwTDI1Niw0ODB6IE00MzguNSwzNjkuMmMtMi44LTEwLjItMTEuOC0xNy4xLTIyLjMtMTcuMgoJYy0xMC40LDAuNy0xOS43LDYuOC0yMi43LDE3LjFjLTQuNywxNi4zLTExLjgsMjYuOS0xOC44LDM3LjFjLTguNiwxMi43LTE3LjQsMjUuOC0xNy40LDQ1LjNjMCwzMy40LDI2LjMsNjAuNSw1OC43LDYwLjUKCXM1OC43LTI3LjEsNTguNy02MC41YzAtMTkuNi04LjgtMzIuNi0xNy40LTQ1LjJDNDUwLjMsMzk2LDQ0My4yLDM4NS41LDQzOC41LDM2OS4yTDQzOC41LDM2OS4yeiBNNDE2LDQ4MAoJYy0xNC43LDAtMjYuNy0xMi44LTI2LjctMjguNWMwLTkuMyw0LjEtMTUuOCwxMS45LTI3LjNjNC42LTYuOCw5LjktMTQuNywxNC43LTI0LjZjNC44LDkuOSwxMC4yLDE3LjgsMTQuOCwyNC42CgljNy44LDExLjUsMTEuOSwxOCwxMS45LDI3LjNDNDQyLjcsNDY3LjIsNDMwLjcsNDgwLDQxNiw0ODBMNDE2LDQ4MHogTTQxNS43LDExMi4zQzQxMS44LDY3LjQsMzczLjksMzIsMzI4LDMyCgljLTE3LjgsMC0zNC44LDUuMy00OS4yLDE1LjJDMjU2LjMsMTcuNywyMjEuNSwwLDE4NCwwQzExNy44LDAsNjQsNTMuOCw2NCwxMjB2MC40Yy0zOC4zLDE2LTY0LDUzLjUtNjQsOTUuNgoJYzAsNTcuMyw0Ni43LDEwNCwxMDQsMTA0aDMwNGM1Ny4zLDAsMTA0LTQ2LjcsMTA0LTEwNEM1MTIsMTYxLjIsNDY5LjQsMTE2LjIsNDE1LjcsMTEyLjNMNDE1LjcsMTEyLjN6IE00MDgsMjg4SDEwNAoJYy0zOS43LDAtNzItMzIuMy03Mi03MmMwLTMyLjMsMjEuOS02MC43LDUzLjMtNjkuMmwxMy4zLTMuNmwtMi0xNy4yYy0wLjMtMi0wLjYtNC0wLjYtNmMwLTQ4LjUsMzkuNS04OCw4OC04OAoJYzMyLjIsMCw2MS44LDE3LjksNzcuMiw0Ni44bDEwLjYsMTkuOEwyODcsODIuMUMyOTcuOSw3MC40LDMxMi40LDY0LDMyOCw2NGMzMC45LDAsNTYsMjUuMSw1Niw1NmMwLDEuNi0wLjMsMy4xLTAuOCw2LjlsLTIuNSwyMAoJbDIzLjUtMi40YzEuMi0wLjIsMi41LTAuNCwzLjgtMC40YzM5LjcsMCw3MiwzMi4zLDcyLDcyUzQ0Ny43LDI4OCw0MDgsMjg4eiIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSnow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "currentColor",
  d: "M126.9 389.1l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V360c0-4.4-3.6-8-8-8H56c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16L4 432c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16 27.9-16c3.8-2.2 5.1-7.1 2.9-10.9zm384 0l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V360c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16-27.9 16c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16 27.9-16c3.8-2.2 5.1-7.1 2.9-10.9zm-192 32l-8-13.9c-2.2-3.8-7.1-5.1-10.9-2.9l-28 16.1V392c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v28.4l-28-16.1c-3.8-2.2-8.7-.9-10.9 2.9l-8 13.9c-2.2 3.8-.9 8.7 2.9 10.9l27.9 16-27.9 16c-3.8 2.2-5.1 7.1-2.9 10.9l8 13.9c2.2 3.8 7.1 5.1 10.9 2.9l28-16.1V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-28.4l28 16.1c3.8 2.2 8.7.9 10.9-2.9l8-13.9c2.2-3.8.9-8.7-2.9-10.9l-27.9-16 27.9-16c3.8-2.2 5.1-7.1 2.9-10.9zM104 320h304c57.3 0 104-46.7 104-104 0-54.8-42.6-99.8-96.3-103.7-4-44.9-41.8-80.3-87.7-80.3-17.8 0-34.8 5.3-49.2 15.2C256.3 17.7 221.5 0 184 0 117.8 0 64 53.8 64 120v.4c-38.3 16-64 53.5-64 95.6 0 57.3 46.7 104 104 104zM85.3 146.8l13.3-3.6-2-17.2c-.3-2-.6-4-.6-6 0-48.5 39.5-88 88-88 32.2 0 61.8 17.9 77.2 46.8l10.6 19.8L287 82.1C297.9 70.4 312.4 64 328 64c30.9 0 56 25.1 56 56 0 1.6-.3 3.1-.8 6.9l-2.5 20 23.5-2.4c1.2-.2 2.5-.4 3.8-.4 39.7 0 72 32.3 72 72s-32.3 72-72 72H104c-39.7 0-72-32.3-72-72 0-32.4 21.9-60.8 53.3-69.3z"
});

function SvgSnow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fal",
    "data-icon": "cloud-snow",
    className: "snow_svg__svg-inline--fa snow_svg__fa-cloud-snow snow_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhbCIgZGF0YS1pY29uPSJjbG91ZC1zbm93IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2xvdWQtc25vdyBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyNi45IDM4OS4xbC04LTEzLjljLTIuMi0zLjgtNy4xLTUuMS0xMC45LTIuOWwtMjggMTYuMVYzNjBjMC00LjQtMy42LTgtOC04SDU2Yy00LjQgMC04IDMuNi04IDh2MjguNGwtMjgtMTYuMWMtMy44LTIuMi04LjctLjktMTAuOSAyLjlsLTggMTMuOWMtMi4yIDMuOC0uOSA4LjcgMi45IDEwLjlsMjcuOSAxNkw0IDQzMmMtMy44IDIuMi01LjEgNy4xLTIuOSAxMC45bDggMTMuOWMyLjIgMy44IDcuMSA1LjEgMTAuOSAyLjlsMjgtMTYuMVY0NzJjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOHYtMjguNGwyOCAxNi4xYzMuOCAyLjIgOC43LjkgMTAuOS0yLjlsOC0xMy45YzIuMi0zLjguOS04LjctMi45LTEwLjlsLTI3LjktMTYgMjcuOS0xNmMzLjgtMi4yIDUuMS03LjEgMi45LTEwLjl6bTM4NCAwbC04LTEzLjljLTIuMi0zLjgtNy4xLTUuMS0xMC45LTIuOWwtMjggMTYuMVYzNjBjMC00LjQtMy42LTgtOC04aC0xNmMtNC40IDAtOCAzLjYtOCA4djI4LjRsLTI4LTE2LjFjLTMuOC0yLjItOC43LS45LTEwLjkgMi45bC04IDEzLjljLTIuMiAzLjgtLjkgOC43IDIuOSAxMC45bDI3LjkgMTYtMjcuOSAxNmMtMy44IDIuMi01LjEgNy4xLTIuOSAxMC45bDggMTMuOWMyLjIgMy44IDcuMSA1LjEgMTAuOSAyLjlsMjgtMTYuMVY0NzJjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOHYtMjguNGwyOCAxNi4xYzMuOCAyLjIgOC43LjkgMTAuOS0yLjlsOC0xMy45YzIuMi0zLjguOS04LjctMi45LTEwLjlsLTI3LjktMTYgMjcuOS0xNmMzLjgtMi4yIDUuMS03LjEgMi45LTEwLjl6bS0xOTIgMzJsLTgtMTMuOWMtMi4yLTMuOC03LjEtNS4xLTEwLjktMi45bC0yOCAxNi4xVjM5MmMwLTQuNC0zLjYtOC04LThoLTE2Yy00LjQgMC04IDMuNi04IDh2MjguNGwtMjgtMTYuMWMtMy44LTIuMi04LjctLjktMTAuOSAyLjlsLTggMTMuOWMtMi4yIDMuOC0uOSA4LjcgMi45IDEwLjlsMjcuOSAxNi0yNy45IDE2Yy0zLjggMi4yLTUuMSA3LjEtMi45IDEwLjlsOCAxMy45YzIuMiAzLjggNy4xIDUuMSAxMC45IDIuOWwyOC0xNi4xVjUwNGMwIDQuNCAzLjYgOCA4IDhoMTZjNC40IDAgOC0zLjYgOC04di0yOC40bDI4IDE2LjFjMy44IDIuMiA4LjcuOSAxMC45LTIuOWw4LTEzLjljMi4yLTMuOC45LTguNy0yLjktMTAuOWwtMjcuOS0xNiAyNy45LTE2YzMuOC0yLjIgNS4xLTcuMSAyLjktMTAuOXpNMTA0IDMyMGgzMDRjNTcuMyAwIDEwNC00Ni43IDEwNC0xMDQgMC01NC44LTQyLjYtOTkuOC05Ni4zLTEwMy43LTQtNDQuOS00MS44LTgwLjMtODcuNy04MC4zLTE3LjggMC0zNC44IDUuMy00OS4yIDE1LjJDMjU2LjMgMTcuNyAyMjEuNSAwIDE4NCAwIDExNy44IDAgNjQgNTMuOCA2NCAxMjB2LjRjLTM4LjMgMTYtNjQgNTMuNS02NCA5NS42IDAgNTcuMyA0Ni43IDEwNCAxMDQgMTA0ek04NS4zIDE0Ni44bDEzLjMtMy42LTItMTcuMmMtLjMtMi0uNi00LS42LTYgMC00OC41IDM5LjUtODggODgtODggMzIuMiAwIDYxLjggMTcuOSA3Ny4yIDQ2LjhsMTAuNiAxOS44TDI4NyA4Mi4xQzI5Ny45IDcwLjQgMzEyLjQgNjQgMzI4IDY0YzMwLjkgMCA1NiAyNS4xIDU2IDU2IDAgMS42LS4zIDMuMS0uOCA2LjlsLTIuNSAyMCAyMy41LTIuNGMxLjItLjIgMi41LS40IDMuOC0uNCAzOS43IDAgNzIgMzIuMyA3MiA3MnMtMzIuMyA3Mi03MiA3MkgxMDRjLTM5LjcgMC03Mi0zMi4zLTcyLTcyIDAtMzIuNCAyMS45LTYwLjggNTMuMy02OS4zeiI+PC9wYXRoPjwvc3ZnPg==");


/***/ }),

/***/ "./src/assets/sun-cloud.svg":
/*!**********************************!*\
  !*** ./src/assets/sun-cloud.svg ***!
  \**********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSunCloud; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "currentColor",
  d: "M558.2 185.6C542.1 151.5 507.4 128 468 128c-41.7 0-77.6 25.2-92.5 62.5-32.5 11.4-55.5 42.1-55.5 78.3 0 45.9 37.3 83.2 83.2 83.2h153.6c45.9 0 83.2-37.3 83.2-83.2 0-45.4-36.6-82.4-81.8-83.2zM556.8 320H403.2c-28.3 0-51.2-22.9-51.2-51.2 0-27.5 21.8-49.8 49-51 4.9-32.7 32.9-57.8 67-57.8 35.8 0 64.8 27.8 67.5 62.9 6.5-3.1 13.6-5.3 21.3-5.3 28.3 0 51.2 22.9 51.2 51.2S585.1 320 556.8 320zm-153.6 64c-.7 0-1.4-.2-2.1-.2l4.3 21.6-84.8-16.8c-6.6-1.3-12.8 1.4-16.4 6.8L256 467.2l-48.1-71.9c-3.6-5.3-9.9-8.1-16.4-6.8l-84.8 16.8 16.8-84.8c1.2-6.3-1.4-12.8-6.8-16.4L44.8 256l71.9-48.1c5.4-3.6 8-10.1 6.8-16.4l-16.8-84.8 84.8 16.8c6.5 1.3 12.8-1.5 16.4-6.8L256 44.8l48.1 71.9c3.6 5.3 9.9 8.1 16.4 6.8L428.8 102c8.7-1.7 14.3-10.1 12.6-18.8-1.7-8.7-10.1-14.4-18.8-12.6L324.8 90 269.3 7.1c-3-4.4-8-7.1-13.3-7.1s-10.3 2.7-13.3 7.1L187.2 90 89.4 70.6c-5.3-1.1-10.6.6-14.4 4.4s-5.4 9.2-4.4 14.4L90 187.2 7.1 242.7c-4.4 3-7.1 7.9-7.1 13.3s2.7 10.3 7.1 13.3L90 324.8l-19.4 97.8c-1 5.2.6 10.7 4.4 14.4 3.8 3.8 9.1 5.4 14.4 4.4l97.8-19.4 55.5 82.9c3 4.4 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l55.4-82.9 97.8 19.4c5.4 1.1 10.7-.6 14.4-4.4 3.8-3.8 5.4-9.2 4.4-14.4l-7.6-38.6h-30.5zM256 179.7c21 0 40 8.5 53.8 22.3 6.2-8.7 13.6-16.4 22-23.1-19.5-19.2-46.3-31.1-75.8-31.1-59.7 0-108.3 48.6-108.3 108.3S196.3 364.3 256 364.3c22.8 0 44-7.2 61.5-19.3-7.1-8-13.1-16.9-17.8-26.6-12.4 8.7-27.4 13.9-43.7 13.9-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3z"
});

function SvgSunCloud(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fal",
    "data-icon": "sun-cloud",
    className: "sun-cloud_svg__svg-inline--fa sun-cloud_svg__fa-sun-cloud sun-cloud_svg__fa-w-20",
    viewBox: "0 0 640 512"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhbCIgZGF0YS1pY29uPSJzdW4tY2xvdWQiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1zdW4tY2xvdWQgZmEtdy0yMCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01NTguMiAxODUuNkM1NDIuMSAxNTEuNSA1MDcuNCAxMjggNDY4IDEyOGMtNDEuNyAwLTc3LjYgMjUuMi05Mi41IDYyLjUtMzIuNSAxMS40LTU1LjUgNDIuMS01NS41IDc4LjMgMCA0NS45IDM3LjMgODMuMiA4My4yIDgzLjJoMTUzLjZjNDUuOSAwIDgzLjItMzcuMyA4My4yLTgzLjIgMC00NS40LTM2LjYtODIuNC04MS44LTgzLjJ6TTU1Ni44IDMyMEg0MDMuMmMtMjguMyAwLTUxLjItMjIuOS01MS4yLTUxLjIgMC0yNy41IDIxLjgtNDkuOCA0OS01MSA0LjktMzIuNyAzMi45LTU3LjggNjctNTcuOCAzNS44IDAgNjQuOCAyNy44IDY3LjUgNjIuOSA2LjUtMy4xIDEzLjYtNS4zIDIxLjMtNS4zIDI4LjMgMCA1MS4yIDIyLjkgNTEuMiA1MS4yUzU4NS4xIDMyMCA1NTYuOCAzMjB6bS0xNTMuNiA2NGMtLjcgMC0xLjQtLjItMi4xLS4ybDQuMyAyMS42LTg0LjgtMTYuOGMtNi42LTEuMy0xMi44IDEuNC0xNi40IDYuOEwyNTYgNDY3LjJsLTQ4LjEtNzEuOWMtMy42LTUuMy05LjktOC4xLTE2LjQtNi44bC04NC44IDE2LjggMTYuOC04NC44YzEuMi02LjMtMS40LTEyLjgtNi44LTE2LjRMNDQuOCAyNTZsNzEuOS00OC4xYzUuNC0zLjYgOC0xMC4xIDYuOC0xNi40bC0xNi44LTg0LjggODQuOCAxNi44YzYuNSAxLjMgMTIuOC0xLjUgMTYuNC02LjhMMjU2IDQ0LjhsNDguMSA3MS45YzMuNiA1LjMgOS45IDguMSAxNi40IDYuOEw0MjguOCAxMDJjOC43LTEuNyAxNC4zLTEwLjEgMTIuNi0xOC44LTEuNy04LjctMTAuMS0xNC40LTE4LjgtMTIuNkwzMjQuOCA5MCAyNjkuMyA3LjFjLTMtNC40LTgtNy4xLTEzLjMtNy4xcy0xMC4zIDIuNy0xMy4zIDcuMUwxODcuMiA5MCA4OS40IDcwLjZjLTUuMy0xLjEtMTAuNi42LTE0LjQgNC40cy01LjQgOS4yLTQuNCAxNC40TDkwIDE4Ny4yIDcuMSAyNDIuN2MtNC40IDMtNy4xIDcuOS03LjEgMTMuM3MyLjcgMTAuMyA3LjEgMTMuM0w5MCAzMjQuOGwtMTkuNCA5Ny44Yy0xIDUuMi42IDEwLjcgNC40IDE0LjQgMy44IDMuOCA5LjEgNS40IDE0LjQgNC40bDk3LjgtMTkuNCA1NS41IDgyLjljMyA0LjQgOCA3LjEgMTMuMyA3LjFzMTAuMy0yLjcgMTMuMy03LjFsNTUuNC04Mi45IDk3LjggMTkuNGM1LjQgMS4xIDEwLjctLjYgMTQuNC00LjQgMy44LTMuOCA1LjQtOS4yIDQuNC0xNC40bC03LjYtMzguNmgtMzAuNXpNMjU2IDE3OS43YzIxIDAgNDAgOC41IDUzLjggMjIuMyA2LjItOC43IDEzLjYtMTYuNCAyMi0yMy4xLTE5LjUtMTkuMi00Ni4zLTMxLjEtNzUuOC0zMS4xLTU5LjcgMC0xMDguMyA0OC42LTEwOC4zIDEwOC4zUzE5Ni4zIDM2NC4zIDI1NiAzNjQuM2MyMi44IDAgNDQtNy4yIDYxLjUtMTkuMy03LjEtOC0xMy4xLTE2LjktMTcuOC0yNi42LTEyLjQgOC43LTI3LjQgMTMuOS00My43IDEzLjktNDIuMSAwLTc2LjMtMzQuMi03Ni4zLTc2LjNzMzQuMi03Ni4zIDc2LjMtNzYuM3oiPjwvcGF0aD48L3N2Zz4=");


/***/ }),

/***/ "./src/assets/sun.svg":
/*!****************************!*\
  !*** ./src/assets/sun.svg ***!
  \****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSun; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "currentColor",
  d: "M256 143.7c-61.8 0-112 50.3-112 112.1s50.2 112.1 112 112.1 112-50.3 112-112.1-50.2-112.1-112-112.1zm0 192.2c-44.1 0-80-35.9-80-80.1s35.9-80.1 80-80.1 80 35.9 80 80.1-35.9 80.1-80 80.1zm256-80.1c0-5.3-2.7-10.3-7.1-13.3L422 187l19.4-97.9c1-5.2-.6-10.7-4.4-14.4-3.8-3.8-9.1-5.5-14.4-4.4l-97.8 19.4-55.5-83c-6-8.9-20.6-8.9-26.6 0l-55.5 83-97.8-19.5c-5.3-1.1-10.6.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4L90 187 7.1 242.5c-4.4 3-7.1 8-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3L90 324.6l-19.4 97.9c-1 5.2.6 10.7 4.4 14.4 3.8 3.8 9.1 5.5 14.4 4.4l97.8-19.4 55.5 83c3 4.5 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l55.5-83 97.8 19.4c5.4 1.2 10.7-.6 14.4-4.4 3.8-3.8 5.4-9.2 4.4-14.4L422 324.6l82.9-55.5c4.4-3 7.1-8 7.1-13.3zm-116.7 48.1c-5.4 3.6-8 10.1-6.8 16.4l16.8 84.9-84.8-16.8c-6.6-1.4-12.8 1.4-16.4 6.8l-48.1 72-48.1-71.9c-3-4.5-8-7.1-13.3-7.1-1 0-2.1.1-3.1.3l-84.8 16.8 16.8-84.9c1.2-6.3-1.4-12.8-6.8-16.4l-71.9-48.1 71.9-48.2c5.4-3.6 8-10.1 6.8-16.4l-16.8-84.9 84.8 16.8c6.5 1.3 12.8-1.4 16.4-6.8l48.1-72 48.1 72c3.6 5.4 9.9 8.1 16.4 6.8l84.8-16.8-16.8 84.9c-1.2 6.3 1.4 12.8 6.8 16.4l71.9 48.2-71.9 48z"
});

function SvgSun(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fal",
    "data-icon": "sun",
    className: "sun_svg__svg-inline--fa sun_svg__fa-sun sun_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhbCIgZGF0YS1pY29uPSJzdW4iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1zdW4gZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yNTYgMTQzLjdjLTYxLjggMC0xMTIgNTAuMy0xMTIgMTEyLjFzNTAuMiAxMTIuMSAxMTIgMTEyLjEgMTEyLTUwLjMgMTEyLTExMi4xLTUwLjItMTEyLjEtMTEyLTExMi4xem0wIDE5Mi4yYy00NC4xIDAtODAtMzUuOS04MC04MC4xczM1LjktODAuMSA4MC04MC4xIDgwIDM1LjkgODAgODAuMS0zNS45IDgwLjEtODAgODAuMXptMjU2LTgwLjFjMC01LjMtMi43LTEwLjMtNy4xLTEzLjNMNDIyIDE4N2wxOS40LTk3LjljMS01LjItLjYtMTAuNy00LjQtMTQuNC0zLjgtMy44LTkuMS01LjUtMTQuNC00LjRsLTk3LjggMTkuNC01NS41LTgzYy02LTguOS0yMC42LTguOS0yNi42IDBsLTU1LjUgODMtOTcuOC0xOS41Yy01LjMtMS4xLTEwLjYuNi0xNC40IDQuNC0zLjggMy44LTUuNCA5LjItNC40IDE0LjRMOTAgMTg3IDcuMSAyNDIuNWMtNC40IDMtNy4xIDgtNy4xIDEzLjMgMCA1LjMgMi43IDEwLjMgNy4xIDEzLjNMOTAgMzI0LjZsLTE5LjQgOTcuOWMtMSA1LjIuNiAxMC43IDQuNCAxNC40IDMuOCAzLjggOS4xIDUuNSAxNC40IDQuNGw5Ny44LTE5LjQgNTUuNSA4M2MzIDQuNSA4IDcuMSAxMy4zIDcuMXMxMC4zLTIuNyAxMy4zLTcuMWw1NS41LTgzIDk3LjggMTkuNGM1LjQgMS4yIDEwLjctLjYgMTQuNC00LjQgMy44LTMuOCA1LjQtOS4yIDQuNC0xNC40TDQyMiAzMjQuNmw4Mi45LTU1LjVjNC40LTMgNy4xLTggNy4xLTEzLjN6bS0xMTYuNyA0OC4xYy01LjQgMy42LTggMTAuMS02LjggMTYuNGwxNi44IDg0LjktODQuOC0xNi44Yy02LjYtMS40LTEyLjggMS40LTE2LjQgNi44bC00OC4xIDcyLTQ4LjEtNzEuOWMtMy00LjUtOC03LjEtMTMuMy03LjEtMSAwLTIuMS4xLTMuMS4zbC04NC44IDE2LjggMTYuOC04NC45YzEuMi02LjMtMS40LTEyLjgtNi44LTE2LjRsLTcxLjktNDguMSA3MS45LTQ4LjJjNS40LTMuNiA4LTEwLjEgNi44LTE2LjRsLTE2LjgtODQuOSA4NC44IDE2LjhjNi41IDEuMyAxMi44LTEuNCAxNi40LTYuOGw0OC4xLTcyIDQ4LjEgNzJjMy42IDUuNCA5LjkgOC4xIDE2LjQgNi44bDg0LjgtMTYuOC0xNi44IDg0LjljLTEuMiA2LjMgMS40IDEyLjggNi44IDE2LjRsNzEuOSA0OC4yLTcxLjkgNDh6Ij48L3BhdGg+PC9zdmc+");


/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgWind; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M220.6 16.1c-4.1 4.1-7.4 9-9.8 14.8L52.4 460.6c-18.1 49.8 43 88.2 79.2 52L256 388.2l124.4 124.4c21.2 21.2 51 16.8 68.4-.6 12.2-12.2 18.3-30.9 10.8-51.4L301.2 30.9c-13.4-32.7-57.8-37.6-80.6-14.8zm50.6 25.8l158.3 429.6c2.6 7.1 1.4 13.1-3.4 17.9-4.1 4.1-14.2 9.5-23.1.6L256 343 109 490c-8.1 8.1-16.6 4.1-19.9 2-4.3-2.7-10.8-9-6.6-20.4L240.3 43.1c.7-1.7 1.6-3.1 2.9-4.3 3.8-3.8 10.7-5.5 17.1-4.3 3.9.7 9 2.9 10.9 7.4z",
  fill: "#232323"
});

function SvgWind(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 512 528.9"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgkgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTI4LjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MjguOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyMzIzMjM7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjIwLjYsMTYuMWMtNC4xLDQuMS03LjQsOS05LjgsMTQuOEw1Mi40LDQ2MC42Yy0xOC4xLDQ5LjgsNDMsODguMiw3OS4yLDUyTDI1NiwzODguMmwxMjQuNCwxMjQuNAoJYzIxLjIsMjEuMiw1MSwxNi44LDY4LjQtMC42YzEyLjItMTIuMiwxOC4zLTMwLjksMTAuOC01MS40TDMwMS4yLDMwLjlDMjg3LjgtMS44LDI0My40LTYuNywyMjAuNiwxNi4xeiBNMjcxLjIsNDEuOWwxNTguMyw0MjkuNgoJYzIuNiw3LjEsMS40LDEzLjEtMy40LDE3LjljLTQuMSw0LjEtMTQuMiw5LjUtMjMuMSwwLjZMMjU2LDM0M0wxMDksNDkwYy04LjEsOC4xLTE2LjYsNC4xLTE5LjksMmMtNC4zLTIuNy0xMC44LTktNi42LTIwLjQKCUwyNDAuMyw0My4xYzAuNy0xLjcsMS42LTMuMSwyLjktNC4zYzMuOC0zLjgsMTAuNy01LjUsMTcuMS00LjNDMjY0LjIsMzUuMiwyNjkuMywzNy40LDI3MS4yLDQxLjl6Ii8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./src/components/field.js":
/*!*********************************!*\
  !*** ./src/components/field.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Field = function Field(_ref) {
  var resorts = _ref.resorts,
      resortValue = _ref.resortValue,
      onChange = _ref.onChange,
      _onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "resort-input",
    type: "text",
    value: resortValue,
    onChange: onChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, _.map(resorts, function (resort, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      onClick: function onClick() {
        return _onClick(resort._source.name);
      },
      key: index
    }, resort._source.name);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./src/components/renderResort.js":
/*!****************************************!*\
  !*** ./src/components/renderResort.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/icons */ "./src/helpers/icons.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var RenderResort = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RenderResort, _Component);

  var _super = _createSuper(RenderResort);

  function RenderResort(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, RenderResort);

    _this = _super.call(this, props);
    _this.state = {
      resort: {},
      loaded: false,
      loadedBackend: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(RenderResort, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var _this$props, resortName, loadedBackend;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, resortName = _this$props.resortName, loadedBackend = _this$props.loadedBackend;

                if (loadedBackend) {
                  this.setState({
                    loadedBackend: true
                  });
                }

                _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
                  path: "/fnugg/v1/resorts?q=".concat(resortName)
                }).then(function (response) {
                  if (response.hits.total > 0) {
                    _this2.setState({
                      resort: response.hits.hits[0],
                      loaded: true
                    });
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "weatherCondition",
    value: function weatherCondition(weather) {
      switch (weather) {
        case "Cloud":
          return "Overskyet";
          break;

        case "PartlyCloud":
          return "For det meste sol";
          break;

        case "Rain":
          return "Det regner";
          break;

        case "LightCloud":
          return "Lette skyer";
          break;

        case "Sun":
          return "Strålende sol";
          break;

        case "Snow":
          return "Det snør";
          break;

        default:
          "-";
      }
    }
  }, {
    key: "weatherIcon",
    value: function weatherIcon(weather) {
      switch (weather) {
        case "Cloud":
          return _helpers_icons__WEBPACK_IMPORTED_MODULE_11__["default"].Clouds;
          break;

        case "PartlyCloud":
          return _helpers_icons__WEBPACK_IMPORTED_MODULE_11__["default"].PartlyCloud;
          break;

        case "Rain":
          return _helpers_icons__WEBPACK_IMPORTED_MODULE_11__["default"].Rain;
          break;

        case "LightCloud":
          return _helpers_icons__WEBPACK_IMPORTED_MODULE_11__["default"].LightCloud;
          break;

        case "Sun":
          return _helpers_icons__WEBPACK_IMPORTED_MODULE_11__["default"].Sun;
          break;

        case "Snow":
          return _helpers_icons__WEBPACK_IMPORTED_MODULE_11__["default"].Snow;
          break;

        default:
          "-";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          resort = _this$state.resort,
          loaded = _this$state.loaded,
          loadedBackend = _this$state.loadedBackend;
      if (!loaded) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, "Vennligst vent..");
      var _resort$_source = resort._source,
          conditions = _resort$_source.conditions,
          images = _resort$_source.images;
      var _conditions$combined$ = conditions.combined.top,
          wind = _conditions$combined$.wind,
          last_updated = _conditions$combined$.last_updated,
          condition_description = _conditions$combined$.condition_description,
          symbol = _conditions$combined$.symbol,
          temperature = _conditions$combined$.temperature; //name
      //date updated "dagens forhold"
      // Current weather ( cloudy etc) + temperatur
      // Wind speed
      //Snow type

      /*
       */

      var windDegreeCss = {
        transform: "rotate(".concat(wind.degree, "deg)"),
        msTransform: "rotate(".concat(wind.degree, "deg)"),
        WebkitTransform: "rotate(".concat(wind.degree, "deg)"),
        MozTransform: "rotate(".concat(wind.degree, "deg)"),
        OTransform: "rotate(".concat(wind.degree, "deg)")
      };
      var date = new Date(last_updated);
      var year = date.getFullYear();
      var month = "0".concat(date.getMonth() + 1).substr(-2);
      var day = "0".concat(date.getDate()).substr(-2);
      var hour = "0".concat(date.getHours()).substr(-2);
      var min = "0".concat(date.getMinutes()).substr(-2);
      var children = react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.map(this.props.children, function (child, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.cloneElement(child, {
          index: index,
          updateRender: function updateRender() {
            return console.log("re-render");
          }
        });
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-block-container",
        style: {
          backgroundImage: "url(".concat(images.image_full, ")")
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-block-inner"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h3", null, loadedBackend ? children : resort._source.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-block-temp"
      }, temperature.value), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-block-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-icon resort-column-expand"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
        src: this.weatherIcon(symbol.name),
        alt: symbol.name
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", null, this.weatherCondition(symbol.name))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-icon"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("figure", {
        className: "resort-icon-adj",
        style: windDegreeCss
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
        src: _helpers_icons__WEBPACK_IMPORTED_MODULE_11__["default"].Wind
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-icon-text"
      }, wind.mps, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", null, "m/s")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", null, wind.speed)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-icon"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
        src: _helpers_icons__WEBPACK_IMPORTED_MODULE_11__["default"].Conditions
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", null, condition_description))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "resort-block-footer"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("strong", null, "Siste oppdatering:"), " ", "".concat(day, ".").concat(month, ".").concat(year, " - ").concat(hour, ":").concat(min))));
    }
  }]);

  return RenderResort;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RenderResort);

/***/ }),

/***/ "./src/components/selectResort.js":
/*!****************************************!*\
  !*** ./src/components/selectResort.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./field */ "./src/components/field.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var SelectResort = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SelectResort, _Component);

  var _super = _createSuper(SelectResort);

  function SelectResort(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SelectResort);

    _this = _super.call(this, props);
    _this.state = {
      resorts: []
    };
    _this.getResort = _this.getResort.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.removeResorts = _this.removeResorts.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SelectResort, [{
    key: "getResort",
    value: function getResort(value) {
      var _this2 = this;

      if (value) {
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default()({
          path: "/fnugg/v1/resorts?q=".concat(value)
        }).then(function (response) {
          if (response.hits.total > 0) {
            _this2.setState({
              resorts: response.hits.hits
            });
          } else {
            _this2.setState({
              resorts: []
            });
          }
        });
      }
    }
  }, {
    key: "removeResorts",
    value: function removeResorts() {
      this.setState({
        resorts: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var resorts = this.state.resorts;
      var _this$props = this.props,
          doChange = _this$props.doChange,
          resortValue = _this$props.resortValue,
          updateRender = _this$props.updateRender;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "resort-autocomplete"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_field__WEBPACK_IMPORTED_MODULE_9__["default"], {
        resorts: resorts,
        resortValue: resortValue,
        onChange: function onChange(event) {
          doChange(event.target.value);

          _this3.getResort(event.target.value);
        },
        onClick: function onClick(resortName) {
          doChange(resortName);

          _this3.removeResorts();

          updateRender();
        }
      }));
    }
  }]);

  return SelectResort;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SelectResort);

/***/ }),

/***/ "./src/helpers/icons.js":
/*!******************************!*\
  !*** ./src/helpers/icons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_condition_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/condition.svg */ "./src/assets/condition.svg");
/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/wind.svg */ "./src/assets/wind.svg");
/* harmony import */ var _assets_clouds_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/clouds.svg */ "./src/assets/clouds.svg");
/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sun.svg */ "./src/assets/sun.svg");
/* harmony import */ var _assets_sun_cloud_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sun-cloud.svg */ "./src/assets/sun-cloud.svg");
/* harmony import */ var _assets_clouds_sun_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/clouds-sun.svg */ "./src/assets/clouds-sun.svg");
/* harmony import */ var _assets_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/rain.svg */ "./src/assets/rain.svg");
/* harmony import */ var _assets_snow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/snow.svg */ "./src/assets/snow.svg");









var icons = {
  SkiLift: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fal",
    "data-icon": "ski-lift",
    className: "svg-inline--fa fa-ski-lift fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "currentColor",
    d: "M496 296.3c-8.8 0-16 7.2-16 16 0 18.3-11.5 34.9-28.7 41.2l-128.7 47.6c8.3-8.6 13.4-20.3 13.4-33.1V248c0-14.6-6.5-28.2-17.8-37.3-9.6-7.9-24.5-13.2-40.6-9.5l-76.3 16.4-27-46.3c-6.9-14-19.2-24.2-33.4-29.5C152.6 130 160 113.9 160 96c0-35.3-28.7-64-64-64S32 60.7 32 96c0 28.3 18.5 52 44 60.5-5.2 5.5-9.5 11.9-12.4 19-7 17.4-4.9 37.3 2.4 50.2l43.2 76.2c8.8 17.4 29.8 30.6 53.5 24.9l77.2-18.4v59.7c0 24.9 19.2 45.3 43.5 47.5L106.3 481c-8.3 3.1-12.5 12.3-9.5 20.6 1.9 5.1 9.6 13.5 20.5 9.5l344.9-127.4c29.7-11 49.6-39.6 49.6-71.2.2-9.1-7-16.2-15.8-16.2zM64 96c0-17.6 14.3-32 32-32s32 14.4 32 32-14.3 32-32 32-32-14.4-32-32zm240 271.9c0 8.8-7.2 16-16 16s-16-7.2-16-16V267.8l-116.7 27.8c-6.4 1.5-14.3-1.1-17.8-8.7l-43.8-77.1c-6.7-14.8.3-32.3 15.4-38.4 22.2-8.9 34.8 10.6 36.6 14.7l39.4 67.4 99.4-21.3c9.5-2.2 19.3 5.2 19.3 15.6v120.1zM256 0h-32v184l32-8V0zm-74.9 383.1c8.4-2.8 12.9-11.8 10.1-20.2-2.8-8.4-11.9-12.9-20.2-10.1-33.4 11.1-70-4.4-85.2-36.2L30.4 201.1c-3.8-8-13.4-11.3-21.3-7.5-8 3.8-11.3 13.4-7.5 21.3l55.2 115.5c17.3 36.2 53.8 58 92.1 58 10.7-.1 21.6-1.7 32.2-5.3z"
  })),
  Conditions: _assets_condition_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  Wind: _assets_wind_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  Clouds: _assets_clouds_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  Sun: _assets_sun_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  PartlyCloud: _assets_sun_cloud_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  LightCloud: _assets_clouds_sun_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  Rain: _assets_rain_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
  Snow: _assets_snow_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_selectResort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/selectResort */ "./src/components/selectResort.js");
/* harmony import */ var _components_renderResort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/renderResort */ "./src/components/renderResort.js");
/* harmony import */ var _helpers_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/icons */ "./src/helpers/icons.js");






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("fnugg/ski-resort-block", {
  title: "Fnugg Ski Resort",
  icon: _helpers_icons__WEBPACK_IMPORTED_MODULE_5__["default"].SkiLift,
  category: "common",
  attributes: {
    selectedResort: {
      type: "string",
      source: "html",
      selector: ".resort-name",
      default: ""
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    var handleChange = function handleChange(newSelectedResort) {
      setAttributes({
        selectedResort: newSelectedResort
      });
      setAttributes({
        UpdateBlock: Date.now()
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "resort-block-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "resort-name"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_renderResort__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resortName: attributes.selectedResort,
      loadedBackend: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_selectResort__WEBPACK_IMPORTED_MODULE_3__["default"], {
      doChange: handleChange,
      resortValue: attributes.selectedResort,
      UpdateBlock: function (_UpdateBlock) {
        function UpdateBlock(_x) {
          return _UpdateBlock.apply(this, arguments);
        }

        UpdateBlock.toString = function () {
          return _UpdateBlock.toString();
        };

        return UpdateBlock;
      }(function (props) {
        return UpdateBlock(props);
      })
    }))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "resort-block-wrapper",
      "data-resortname": props.attributes.selectedResort
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "resort-name"
    }, props.attributes.selectedResort));
  }
});

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
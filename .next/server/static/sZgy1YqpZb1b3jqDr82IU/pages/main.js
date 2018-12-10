module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(1);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/mainLayout.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var mainLayout_MainHead = function MainHead() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    charset: "UTF-8"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), external_react_default.a.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "ie=edge"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
  }), external_react_default.a.createElement("title", null, "Chum!"));
};

var mainLayout_MainLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainLayout, _React$Component);

  function MainLayout(props) {
    var _this;

    _classCallCheck(this, MainLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainLayout).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(MainLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var uid = sessionStorage.getItem('uid'); // Initialize Firebase

      var config = {
        apiKey: "AIzaSyA_jxtJEs6tK8IddeWE33shq1oTV2CYppc",
        authDomain: "szia-e86a9.firebaseapp.com",
        databaseURL: "https://szia-e86a9.firebaseio.com",
        projectId: "szia-e86a9",
        storageBucket: "szia-e86a9.appspot.com",
        messagingSenderId: "110429429267"
      };
      firebase.initializeApp(config);
      var db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      db.collection('users').doc(uid).get().then(function (doc) {
        _this2.setState({
          userName: doc.data().userName,
          uid: uid
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement(mainLayout_MainHead, null), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("h1", null, this.state.userName)), this.props.children, external_react_default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=",
        crossorigin: "anonymous"
      }), external_react_default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
      }), external_react_default.a.createElement("script", {
        src: "https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js"
      }), external_react_default.a.createElement("script", {
        src: "https://www.gstatic.com/firebasejs/5.7.0/firebase-firestore.js"
      }));
    }
  }]);

  return MainLayout;
}(external_react_default.a.Component);

/* harmony default export */ var mainLayout = (mainLayout_MainLayout);
// CONCATENATED MODULE: ./pages/main.js


function main_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { main_typeof = function _typeof(obj) { return typeof obj; }; } else { main_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return main_typeof(obj); }

function main_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function main_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function main_createClass(Constructor, protoProps, staticProps) { if (protoProps) main_defineProperties(Constructor.prototype, protoProps); if (staticProps) main_defineProperties(Constructor, staticProps); return Constructor; }

function main_possibleConstructorReturn(self, call) { if (call && (main_typeof(call) === "object" || typeof call === "function")) { return call; } return main_assertThisInitialized(self); }

function main_getPrototypeOf(o) { main_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return main_getPrototypeOf(o); }

function main_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) main_setPrototypeOf(subClass, superClass); }

function main_setPrototypeOf(o, p) { main_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return main_setPrototypeOf(o, p); }

function main_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function LocationSwitch(props) {
  if (props.permission) {
    return external_react_default.a.createElement("div", {
      className: "switch",
      onClick: props.onClick
    }, external_react_default.a.createElement("label", null, "Off", external_react_default.a.createElement("input", {
      type: "checkbox"
    }), external_react_default.a.createElement("span", {
      className: "lever"
    }), "On"));
  } else {
    return external_react_default.a.createElement("p", null, "You have disabled location services. In order to use chum you must enable them in your browser's settings");
  }
}

var main_Main =
/*#__PURE__*/
function (_React$Component) {
  main_inherits(Main, _React$Component);

  function Main(props) {
    var _this;

    main_classCallCheck(this, Main);

    _this = main_possibleConstructorReturn(this, main_getPrototypeOf(Main).call(this, props));

    _defineProperty(main_assertThisInitialized(main_assertThisInitialized(_this)), "locationSwitchHandler", function () {
      if (_this.state.isLocating) {
        navigator.geolocation.clearWatch(_this.state.watchNumber);

        _this.setState({
          isLocating: false
        });
      } else {
        var watchNumber = navigator.geolocation.watchPosition(function (position) {
          _this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            acc: position.coords.accuracy
          });
        }, function (err) {
          if (err) throw err;
        }, {
          enableHighAccuracy: true
        });

        _this.setState({
          isLocating: true,
          watchNumber: watchNumber
        });
      }
    });

    _this.state = {
      isLocating: false,
      locationEnabled: true,
      watchNumber: 0,
      lat: 0,
      lon: 0,
      acc: 0
    };
    return _this;
  }

  main_createClass(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      navigator.permissions.query({
        name: 'geolocation'
      }).then(function (pStatus) {
        console.log(pStatus.state);

        if (pStatus.state === 'denied') {
          _this2.setState({
            locationEnabled: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(mainLayout, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement(LocationSwitch, {
        permission: this.state.locationEnabled,
        onClick: this.locationSwitchHandler
      })), external_react_default.a.createElement("p", null, "Latitude: ", this.state.lat), external_react_default.a.createElement("p", null, "Longitude: ", this.state.lon), external_react_default.a.createElement("p", null, "Accuracy: ", this.state.acc));
    }
  }]);

  return Main;
}(external_react_default.a.Component);

/* harmony default export */ var main = __webpack_exports__["default"] = (main_Main);

/***/ })

/******/ });
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{274:function(e,t,n){__NEXT_REGISTER_PAGE("/main",function(){return e.exports=n(275),{page:e.exports.default}})},275:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(115),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(){return o.a.createElement(i.a,null,o.a.createElement("meta",{charset:"UTF-8"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),o.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"}),o.a.createElement("title",null,"Chum! Login"))},m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,l(t).call(this,e))).state={},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("uid");firebase.initializeApp({apiKey:"AIzaSyA_jxtJEs6tK8IddeWE33shq1oTV2CYppc",authDomain:"szia-e86a9.firebaseapp.com",databaseURL:"https://szia-e86a9.firebaseio.com",projectId:"szia-e86a9",storageBucket:"szia-e86a9.appspot.com",messagingSenderId:"110429429267"});var n=firebase.firestore();n.settings({timestampsInSnapshots:!0}),n.collection("users").doc(t).get().then(function(n){e.setState({userName:n.data().userName,uid:t})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(p,null),o.a.createElement("div",{className:"row"},o.a.createElement("h1",null,this.state.userName)),this.props.children,o.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=",crossorigin:"anonymous"}),o.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"}),o.a.createElement("script",{src:"https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js"}),o.a.createElement("script",{src:"https://www.gstatic.com/firebasejs/5.7.0/firebase-firestore.js"}))}}])&&s(n.prototype,r),a&&s(n,a),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,d(t).call(this,e))).state={locationEnabled:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;navigator.permissions.query({name:"geolocation"}).then(function(t){"granted"===t.state&&e.setState({locationEnabled:!0})})}},{key:"render",value:function(){return o.a.createElement(m,null,o.a.createElement("div",{className:"row"},locationEnabled?"True":"False"))}}])&&b(n.prototype,r),a&&b(n,a),t}();t.default=E}},[[274,1,0]]]);
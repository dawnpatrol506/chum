(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{274:function(e,t,n){__NEXT_REGISTER_PAGE("/main",function(){return e.exports=n(275),{page:e.exports.default}})},275:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(115),i=n.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(){return a.a.createElement(i.a,null,a.a.createElement("meta",{charset:"UTF-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),a.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"}),a.a.createElement("title",null,"Chum!"))},m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,u(t).call(this,e))).state={},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("uid");firebase.initializeApp({apiKey:"AIzaSyA_jxtJEs6tK8IddeWE33shq1oTV2CYppc",authDomain:"szia-e86a9.firebaseapp.com",databaseURL:"https://szia-e86a9.firebaseio.com",projectId:"szia-e86a9",storageBucket:"szia-e86a9.appspot.com",messagingSenderId:"110429429267"});var n=firebase.firestore();n.settings({timestampsInSnapshots:!0}),n.collection("users").doc(t).get().then(function(n){e.setState({userName:n.data().userName,uid:t})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(p,null),a.a.createElement("div",{className:"row"},a.a.createElement("h1",null,this.state.userName)),this.props.children,a.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=",crossorigin:"anonymous"}),a.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"}),a.a.createElement("script",{src:"https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js"}),a.a.createElement("script",{src:"https://www.gstatic.com/firebasejs/5.7.0/firebase-firestore.js"}))}}])&&s(n.prototype,o),r&&s(n,r),t}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=n(226);function g(e){return e.permission?a.a.createElement("div",{className:"switch"},a.a.createElement("label",null,"Off",a.a.createElement("input",{type:"checkbox",onClick:e.onClick}),a.a.createElement("span",{className:"lever"}),"On")):a.a.createElement("p",null,"You have disabled location services. In order to use chum you must enable them in your browser's settings")}var v=function(e){function t(e){var n,o,a,r,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=h(t).call(this,e),n=!a||"object"!==b(a)&&"function"!=typeof a?w(o):a,r=w(w(n)),c=function(){if(n.state.isLocating)navigator.geolocation.clearWatch(n.state.watchNumber),n.setState({isLocating:!1});else{var e=navigator.geolocation.watchPosition(function(e){n.setState({lat:e.coords.latitude,lon:e.coords.longitude,acc:e.coords.accuracy}),E.post("/api/v1/location/zip",{lat:e.coords.latitude,lon:e.coords.longitude}).then(function(e){return n.setState({zip:e})})},function(e){if(e)throw e},{enableHighAccuracy:!0});n.setState({isLocating:!0,watchNumber:e})}},(i="locationSwitchHandler")in r?Object.defineProperty(r,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[i]=c,n.state={isLocating:!1,locationEnabled:!0,watchNumber:0,lat:0,lon:0,acc:0,zip:""},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;navigator.permissions.query({name:"geolocation"}).then(function(t){console.log(t.state),"denied"===t.state&&e.setState({locationEnabled:!1})})}},{key:"render",value:function(){return a.a.createElement(m,null,a.a.createElement("div",{className:"row"},a.a.createElement(g,{permission:this.state.locationEnabled,onClick:this.locationSwitchHandler})),a.a.createElement("p",null,"Latitude: ",this.state.lat),a.a.createElement("p",null,"Longitude: ",this.state.lon),a.a.createElement("p",null,"Accuracy: ",this.state.acc),a.a.createElement("p",null,"Zip Code: ",this.state.zip))}}])&&y(n.prototype,o),r&&y(n,r),t}();t.default=v}},[[274,1,0]]]);
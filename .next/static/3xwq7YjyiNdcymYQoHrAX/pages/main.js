(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{274:function(e,t,n){__NEXT_REGISTER_PAGE("/main",function(){return e.exports=n(275),{page:e.exports.default}})},275:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(115),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(){return r.a.createElement(i.a,null,r.a.createElement("meta",{charset:"UTF-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"}),r.a.createElement("title",null,"Chum!"))},m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,u(t).call(this,e))).state={},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("uid");firebase.initializeApp({apiKey:"AIzaSyA_jxtJEs6tK8IddeWE33shq1oTV2CYppc",authDomain:"szia-e86a9.firebaseapp.com",databaseURL:"https://szia-e86a9.firebaseio.com",projectId:"szia-e86a9",storageBucket:"szia-e86a9.appspot.com",messagingSenderId:"110429429267"});var n=firebase.firestore();n.settings({timestampsInSnapshots:!0}),n.collection("users").doc(t).get().then(function(n){e.setState({userName:n.data().userName,uid:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,this.state.userName)),this.props.children,r.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=",crossorigin:"anonymous"}),r.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"}),r.a.createElement("script",{src:"https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js"}),r.a.createElement("script",{src:"https://www.gstatic.com/firebasejs/5.7.0/firebase-firestore.js"}))}}])&&s(n.prototype,o),a&&s(n,a),t}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=n(226);function v(e){return e.permission?r.a.createElement("div",{className:"switch"},r.a.createElement("label",null,"Off",r.a.createElement("input",{type:"checkbox",onClick:e.onClick}),r.a.createElement("span",{className:"lever"}),"On")):r.a.createElement("p",null,"You have disabled location services. In order to use chum you must enable them in your browser's settings")}var E=function(e){function t(e){var n,o,r,a,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=h(t).call(this,e),n=!r||"object"!==b(r)&&"function"!=typeof r?w(o):r,a=w(w(n)),c=function(){if(n.state.isLocating)navigator.geolocation.clearWatch(n.state.watchNumber),n.setState({isLocating:!1});else{var e=navigator.geolocation.watchPosition(function(e){n.setState({lat:e.coords.latitude,lon:e.coords.longitude,acc:e.coords.accuracy})},function(e){if(e)throw e},{enableHighAccuracy:!0});g.post("/api/v1/location/zip",{lat:position.coords.latitude,lon:position.coords.longitude}).then(function(e){return n.setState({zip:e})}),n.setState({isLocating:!0,watchNumber:e})}},(i="locationSwitchHandler")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,n.state={isLocating:!1,locationEnabled:!0,watchNumber:0,lat:0,lon:0,acc:0,zip:""},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;navigator.permissions.query({name:"geolocation"}).then(function(t){console.log(t.state),"denied"===t.state&&e.setState({locationEnabled:!1})})}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"row"},r.a.createElement(v,{permission:this.state.locationEnabled,onClick:this.locationSwitchHandler})),r.a.createElement("p",null,"Latitude: ",this.state.lat),r.a.createElement("p",null,"Longitude: ",this.state.lon),r.a.createElement("p",null,"Accuracy: ",this.state.acc))}}])&&y(n.prototype,o),a&&y(n,a),t}();t.default=E}},[[274,1,0]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,n){"use strict";n.r(t);var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var u in o.open(t.method||"get",e),t.headers)o.setRequestHeader(u,t.headers[u]);function a(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,u,a){t.push(u=u.toLowerCase()),n.push([u,a]),e=r[u],r[u]=e?e+","+a:a}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:a,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(a())},o.onerror=r,o.send(t.body)})};t.default=r},203:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(204),{page:e.exports.default}})},204:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(205),p=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=i(t).call(this,e),n=!o||"object"!==u(o)&&"function"!=typeof o?c(r):o,l(c(c(n)),"handleChange",function(e){var t=e.target,r=t.name;n.setState(l({},r,t.value))}),l(c(c(n)),"handleSubmit",function(e){e.preventDefault(),f("/api/v1/login",{method:"POST",payload:n.state}).then(function(e){return e.json()}).then(function(e){return alert(e)})}),n.state={},n}var n,r,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"First:",o.a.createElement("input",{name:"first",type:"text",value:this.state.first,onChange:this.handleChange})),o.a.createElement("label",null,"Last:",o.a.createElement("input",{name:"last",type:"text",value:this.state.last,onChange:this.handleChange})),o.a.createElement("input",{type:"submit",value:"Submit"}))}}])&&a(n.prototype,r),p&&a(n,p),t}();t.default=p},205:function(e,t,n){e.exports=window.fetch||(window.fetch=n(105).default||n(105))}},[[203,1,0]]]);
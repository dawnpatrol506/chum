(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(e,t,n){__NEXT_REGISTER_PAGE("/LoginEmail",function(){return e.exports=n(267),{page:e.exports.default}})},267:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(264);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=n(226),m=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=c(t).call(this,e),n=!r||"object"!==l(r)&&"function"!=typeof r?u(a):r,f(u(u(n)),"handleChange",function(e){var t=e.target,a=t.name;n.setState(f({},a,t.value))}),f(u(u(n)),"handleSubmit",function(e){p.post("/api/v1/login",{email:n.state.email,password:n.state.password}).then(function(e){return console.log(e)}),e.preventDefault()}),n.state={},n}var n,a,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"email",type:"text",value:this.state.first,onChange:this.handleChange}),r.a.createElement("label",{for:"email"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"password",type:"password",value:this.state.last,onChange:this.handleChange}),r.a.createElement("label",{for:"password"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{className:"btn btn-small",type:"submit",value:"Submit"}))))))}}])&&i(n.prototype,a),m&&i(n,m),t}();t.default=m}},[[266,1,0]]]);
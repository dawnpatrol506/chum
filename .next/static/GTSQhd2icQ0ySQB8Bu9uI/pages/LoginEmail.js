(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(e,t,a){__NEXT_REGISTER_PAGE("/LoginEmail",function(){return e.exports=a(267),{page:e.exports.default}})},267:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(264);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=a(226),p=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=s(t).call(this,e),a=!r||"object"!==i(r)&&"function"!=typeof r?u(n):r,m(u(u(a)),"handleChange",function(e){var t=e.target,n=t.name;a.setState(m({},n,t.value))}),m(u(u(a)),"handleSubmit",function(e){a.setState({message:""}),f.post("/api/v1/auth/email",{email:a.state.email,password:a.state.password}).then(function(e){e.data.error?(a.setState({message:e.data.error,email:"",password:""}),$("#email").text(""),document.getElementById("password").innerHTML=""):(sessionStorage.setItem("uid",e.data.uid),location.replace("/main"))}),e.preventDefault()}),a.state={},a}var a,n,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"email",name:"email",type:"text",value:this.state.first,onChange:this.handleChange}),r.a.createElement("label",{for:"email"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"password",name:"password",type:"password",value:this.state.last,onChange:this.handleChange}),r.a.createElement("label",{for:"password"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{className:"btn btn-small",type:"submit",value:"Submit"}))),r.a.createElement("div",{className:"row red-text"},r.a.createElement("p",null,this.state.message)))))}}])&&l(a.prototype,n),p&&l(a,p),t}();t.default=p}},[[266,1,0]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{272:function(e,t,a){__NEXT_REGISTER_PAGE("/signUp",function(){return e.exports=a(273),{page:e.exports.default}})},273:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(264),o=a(226),l=a.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=u(t).call(this,e),a=!r||"object"!==i(r)&&"function"!=typeof r?p(n):r,f(p(p(a)),"handleChange",function(e){var t=e.target,n=t.name;a.setState(f({},n,t.value))}),f(p(p(a)),"handleSubmit",function(e){if(e.preventDefault(),a.setState({message:""}),a.state.password!==a.state.passwordRepeat)return console.log("mismatch"),void a.setState({errorMessage:"Passwords do not match",password:"",passwordRepeat:""});l.a.post("/api/v1/auth/signup",{user:a.state}).then(function(e){return console.log(e.data)})}),a.state={},a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement("p",{className:"align-center red-text"},this.state.errorMessage)),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"first",type:"text",value:this.state.first,onChange:this.handleChange}),r.a.createElement("label",{for:"first"},"First Name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"last",type:"text",value:this.state.last,onChange:this.handleChange}),r.a.createElement("label",{for:"last"},"Last Name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"displayName",type:"text",value:this.state.displayName,onChange:this.handleChange}),r.a.createElement("label",{for:"displayName"},"Display Name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"email",type:"email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("label",{for:"email"},"E-mail Address"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("label",{for:"password"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"passwordRepeat",type:"password",value:this.state.passwordRepeat,onChange:this.handleChange}),r.a.createElement("label",{for:"passwordRepeat"},"Repeat Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("button",{className:"btn btn-medium",type:"submit"},"Submit")))))}}])&&c(a.prototype,n),o&&c(a,o),t}();t.default=d}},[[272,1,0]]]);
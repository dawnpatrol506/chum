(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{213:function(e,t,r){__NEXT_REGISTER_PAGE("/",function(){return e.exports=r(265),{page:e.exports.default}})},265:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(264),l=r(268),i=r.n(l);t.default=function(){return o.a.createElement(a.a,null,o.a.createElement("div",{className:"row"},o.a.createElement(i.a,{href:"/LoginEmail"},o.a.createElement("button",{className:"btn btn-medium center"},"Login with Email"))),o.a.createElement("div",{className:"row"},o.a.createElement("button",{className:"btn btn-medium center"},"Login with Google")))}},268:function(e,t,r){e.exports=r(269)},269:function(e,t,r){"use strict";var n=r(25),o=r(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(270)),l=o(r(73)),i=o(r(8)),f=o(r(9)),s=o(r(22)),u=o(r(23)),p=o(r(24)),c=o(r(77)),h=o(r(17)),d=r(181),v=n(r(1)),m=(o(r(39)),n(r(72))),w=r(31);var E=function(e){function t(){var e,r,n,o,a,f;(0,i.default)(this,t);for(var p=arguments.length,v=new Array(p),E=0;E<p;E++)v[E]=arguments[E];return r=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(v))),(0,h.default)((0,c.default)((0,c.default)(r)),"formatUrls",(n=function(e,t){return{href:e&&"object"===(0,l.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,l.default)(t)?(0,d.format)(t):t}},o=null,a=null,f=null,function(e,t){if(e===o&&t===a)return f;var r=n(e,t);return o=e,a=t,f=r,r})),(0,h.default)((0,c.default)((0,c.default)(r)),"linkClicked",function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=r.formatUrls(r.props.href,r.props.as),l=a.href,i=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,w.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(l)){var f=window.location.pathname;l=(0,d.resolve)(f,l),i=i?(0,d.resolve)(f,i):l,e.preventDefault();var s=r.props.scroll;null==s&&(s=i.indexOf("#")<0);var u=r.props.replace?"replace":"push";m.default[u](l,i,{shallow:r.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){r.props.onError&&r.props.onError(e)})}}}),r}return(0,p.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,d.resolve)(e,t);m.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=v.default.createElement("a",null,t));var a=v.Children.only(t),l={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(l.href=o||n),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=(0,m._rewriteUrlForNextExport)(l.href)),v.default.cloneElement(a,l)}}]),t}(v.Component);t.default=E},270:function(e,t,r){e.exports=r(271)},271:function(e,t,r){var n=r(2),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}},[[213,1,0]]]);
(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[27],{117:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(1),o=a.n(c),l=a(5),i=a.n(l),s=a(31),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,c=Array(n),o=0;o<n;o++)c[o]=arguments[o];return a=r=p(this,e.call.apply(e,[this].concat(c))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!m(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,c=a.to;n?t.replace(c):t.push(c)}},p(r,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var c=this.context.router.history,o="string"===typeof t?Object(s.b)(t,null,null,c.location):t,l=c.createHref(o);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:l,ref:a}))},t}(n.a.Component);f.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=f},186:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(1),o=a.n(c),l=a(80),i=a(117),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p=function(e){var t=e.to,a=e.exact,r=e.strict,c=e.location,o=e.activeClassName,p=e.className,m=e.activeStyle,f=e.style,y=e.isActive,h=e["aria-current"],b=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),d="object"===("undefined"===typeof t?"undefined":u(t))?t.pathname:t,v=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return n.a.createElement(l.a,{path:v,exact:a,strict:r,location:c,children:function(e){var a=e.location,r=e.match,c=!!(y?y(r,a):r);return n.a.createElement(i.a,s({to:t,className:c?[p,o].filter((function(e){return e})).join(" "):p,style:c?s({},f,m):f,"aria-current":c&&h||null},b))}})};p.propTypes={to:i.a.propTypes.to,exact:o.a.bool,strict:o.a.bool,location:o.a.object,activeClassName:o.a.string,className:o.a.string,activeStyle:o.a.object,style:o.a.object,isActive:o.a.func,"aria-current":o.a.oneOf(["page","step","location","date","time","true"])},p.defaultProps={activeClassName:"active","aria-current":"page"},t.a=p},287:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(11),c=a(13),o=a(12),l=a(14),i=a(0),s=a.n(i),u=a(186),p=(a(167),a(26)),m=a(121),f=a(89),y=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(m.a,null),s.a.createElement("div",{className:"auth-wrapper"},s.a.createElement("div",{className:"auth-content"},s.a.createElement("div",{className:"auth-bg"},s.a.createElement("span",{className:"r"}),s.a.createElement("span",{className:"r s"}),s.a.createElement("span",{className:"r s"}),s.a.createElement("span",{className:"r"})),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("div",{className:"mb-4"},s.a.createElement("i",{className:"feather icon-user-plus auth-icon"})),s.a.createElement("h3",{className:"mb-4"},"Sign up"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username"})),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email"})),s.a.createElement("div",{className:"input-group mb-4"},s.a.createElement("input",{type:"password",className:"form-control",placeholder:"password"})),s.a.createElement("div",{className:"form-group text-left"},s.a.createElement("div",{className:"checkbox checkbox-fill d-inline"},s.a.createElement("input",{type:"checkbox",name:"checkbox-fill-2",id:"checkbox-fill-2"}),s.a.createElement("label",{htmlFor:"checkbox-fill-2",className:"cr"},"Send me the ",s.a.createElement("a",{href:f.a.BLANK_LINK}," Newsletter")," weekly."))),s.a.createElement("button",{className:"btn btn-primary shadow-2 mb-4"},"Sign up"),s.a.createElement("p",{className:"mb-0 text-muted"},"Allready have an account? ",s.a.createElement(u.a,{to:"/auth/signin"},"Login")))))))}}]),t}(s.a.Component);t.default=y}}]);
//# sourceMappingURL=27.82c7c93b.chunk.js.map
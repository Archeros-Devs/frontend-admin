(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[23],{100:function(e,t){function r(e,t){if(!(this instanceof r))return new r(e,t);this.per_page=e||25,this.length=t||10}e.exports=r,r.prototype.build=function(e,t){var r=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>r&&(t=r);var a=Math.max(1,t-Math.floor(this.length/2)),n=Math.min(r,t+Math.floor(this.length/2));n-a+1<this.length&&(t<r/2?n=Math.min(r,n+(this.length-(n-a))):a=Math.max(1,a-(this.length-(n-a)))),n-a+1>this.length&&(t>r/2?a++:n--);var s=this.per_page*(t-1);s<0&&(s=0);var i=this.per_page*t-1;return i<0&&(i=0),i>Math.max(e-1,0)&&(i=Math.max(e-1,0)),{total_pages:r,pages:Math.min(n-a+1,r),current_page:t,first_page:a,last_page:n,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<r,total_results:e,results:Math.min(i-s+1,e),first_result:s,last_result:i}}},101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=r(90),s=o(n),i=(o(r(1)),o(r(86)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),a(t,[{key:"handleClick",value:function(e){var t=this.props,r=t.isDisabled,a=t.pageNumber;e.preventDefault(),r||this.props.onClick(a)}},{key:"render",value:function(){var e,t=this.props,r=t.pageText,a=(t.pageNumber,t.activeClass),n=t.itemClass,o=t.linkClass,u=t.activeLinkClass,c=t.disabledClass,f=t.isActive,p=t.isDisabled,d=t.href,b=(0,i.default)(n,(l(e={},a,f),l(e,c,p),e)),h=(0,i.default)(o,l({},u,f));return s.default.createElement("li",{className:b,onClick:this.handleClick.bind(this)},s.default.createElement("a",{className:h,href:d},r))}}]),t}();u.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},t.default=u},302:function(e,t,r){"use strict";var a=r(4),n=r(8),s=r(15),i=r(86),o=r.n(i),l=r(0),u=r.n(l),c=r(87),f=r(109);function p(e){var t=e.active,r=e.disabled,s=e.className,i=e.style,l=e.activeLabel,c=e.children,p=Object(n.a)(e,["active","disabled","className","style","activeLabel","children"]),d=t||r?"span":f.a;return u.a.createElement("li",{style:i,className:o()(s,"page-item",{active:t,disabled:r})},u.a.createElement(d,Object(a.a)({className:"page-link",disabled:r},p),c,t&&l&&u.a.createElement("span",{className:"sr-only"},l)))}function d(e,t,r){var a,i;return void 0===r&&(r=e),i=a=function(e){function a(){return e.apply(this,arguments)||this}return Object(s.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.children,s=Object(n.a)(e,["children"]);return delete s.active,u.a.createElement(p,s,u.a.createElement("span",{"aria-hidden":"true"},a||t),u.a.createElement("span",{className:"sr-only"},r))},a}(u.a.Component),a.displayName=e,i}p.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"};var b=d("First","\xab"),h=d("Prev","\u2039","Previous"),v=d("Ellipsis","\u2026","More"),m=d("Next","\u203a"),y=d("Last","\xbb"),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,r=e.className,s=e.children,i=e.size,l=Object(n.a)(e,["bsPrefix","className","children","size"]);return u.a.createElement("ul",Object(a.a)({},l,{className:o()(r,t,i&&t+"-"+i)}),s)},t}(u.a.Component),_=Object(c.a)(g,"pagination");_.First=b,_.Prev=h,_.Ellipsis=v,_.Item=p,_.Next=m,_.Last=y;t.a=_},304:function(e,t,r){"use strict";var a=r(4),n=r(8),s=r(86),i=r.n(s),o=r(0),l=r.n(o),u=r(87),c=r(109),f=l.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.active,o=e.className,f=e.as,p=void 0===f?"li":f,d=Object(n.a)(e,["bsPrefix","active","className","as"]),b=Object(u.b)(r,"breadcrumb-item"),h=d.href,v=d.title,m=d.target,y=Object(n.a)(d,["href","title","target"]),g={href:h,title:v,target:m};return l.a.createElement(p,{ref:t,className:i()(b,o,{active:s}),"aria-current":s?"page":void 0},s?l.a.createElement("span",Object(a.a)({},y,{className:i()({active:s})})):l.a.createElement(c.a,Object(a.a)({},y,g)))}));f.displayName="BreadcrumbItem",f.defaultProps={active:!1};var p=f,d=l.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,o=e.listProps,c=e.children,f=e.label,p=e.as,d=void 0===p?"nav":p,b=Object(n.a)(e,["bsPrefix","className","listProps","children","label","as"]),h=Object(u.b)(r,"breadcrumb");return l.a.createElement(d,Object(a.a)({"aria-label":f,className:s,ref:t},b),l.a.createElement("ol",Object(a.a)({},o,{className:i()(h,o.className)}),c))}));d.displayName="Breadcrumb",d.defaultProps={label:"breadcrumb",listProps:{}},d.Item=p;t.a=d},90:function(e,t,r){"use strict";e.exports=r(99)},93:function(e,t,r){"use strict";var a=r(4),n=r(8),s=r(86),i=r.n(s),o=r(0),l=r.n(o),u=r(87),c=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,o=e.as,f=void 0===o?"div":o,p=Object(n.a)(e,["bsPrefix","className","as"]),d=Object(u.b)(r,"col"),b=[],h=[];return c.forEach((function(e){var t,r,a,n=p[e];if(delete p[e],null!=n&&"object"===typeof n){var s=n.span;t=void 0===s||s,r=n.offset,a=n.order}else t=n;var i="xs"!==e?"-"+e:"";null!=t&&b.push(!0===t?""+d+i:""+d+i+"-"+t),null!=a&&h.push("order"+i+"-"+a),null!=r&&h.push("offset"+i+"-"+r)})),b.length||b.push(d),l.a.createElement(f,Object(a.a)({},p,{ref:t,className:i.a.apply(void 0,[s].concat(b,h))}))}));f.displayName="Col",t.a=f},94:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=l(r(90)),s=(l(r(1)),l(r(100))),i=l(r(101)),o=l(r(86));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"isFirstPageVisible",value:function(e){var t=this.props,r=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||r&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,r=t.hideDisabled;return!(t.hideNavigation||r&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,r=t.hideDisabled;return!(t.hideNavigation||r&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,r=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||r&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,r=t.itemsCountPerPage,a=t.pageRangeDisplayed,l=t.activePage,u=t.prevPageText,c=t.nextPageText,f=t.firstPageText,p=t.lastPageText,d=t.totalItemsCount,b=t.onChange,h=t.activeClass,v=t.itemClass,m=t.itemClassFirst,y=t.itemClassPrev,g=t.itemClassNext,_=t.itemClassLast,C=t.activeLinkClass,P=t.disabledClass,k=(t.hideDisabled,t.hideNavigation,t.linkClass),x=t.linkClassFirst,O=t.linkClassPrev,j=t.linkClassNext,w=t.linkClassLast,N=(t.hideFirstLastPages,t.getPageUrl),E=new s.default(r,a).build(d,l),S=E.first_page;S<=E.last_page;S++)e.push(n.default.createElement(i.default,{isActive:S===l,key:S,href:N(S),pageNumber:S,pageText:S+"",onClick:b,itemClass:v,linkClass:k,activeClass:h,activeLinkClass:C}));return this.isPrevPageVisible(E.has_previous_page)&&e.unshift(n.default.createElement(i.default,{key:"prev"+E.previous_page,pageNumber:E.previous_page,onClick:b,pageText:u,isDisabled:!E.has_previous_page,itemClass:(0,o.default)(v,y),linkClass:(0,o.default)(k,O),disabledClass:P})),this.isFirstPageVisible(E.has_previous_page)&&e.unshift(n.default.createElement(i.default,{key:"first",pageNumber:1,onClick:b,pageText:f,isDisabled:!E.has_previous_page,itemClass:(0,o.default)(v,m),linkClass:(0,o.default)(k,x),disabledClass:P})),this.isNextPageVisible(E.has_next_page)&&e.push(n.default.createElement(i.default,{key:"next"+E.next_page,pageNumber:E.next_page,onClick:b,pageText:c,isDisabled:!E.has_next_page,itemClass:(0,o.default)(v,g),linkClass:(0,o.default)(k,j),disabledClass:P})),this.isLastPageVisible(E.has_next_page)&&e.push(n.default.createElement(i.default,{key:"last",pageNumber:E.total_pages,onClick:b,pageText:p,isDisabled:E.current_page===E.total_pages,itemClass:(0,o.default)(v,_),linkClass:(0,o.default)(k,w),disabledClass:P})),e}},{key:"render",value:function(){var e=this.buildPages();return n.default.createElement("ul",{className:this.props.innerClass},e)}}]),t}();u.defaultProps={itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}},t.default=u},97:function(e,t,r){"use strict";var a=r(4),n=r(8),s=r(86),i=r.n(s),o=r(0),l=r.n(o),u=r(87),c=l.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.noGutters,o=e.as,c=void 0===o?"div":o,f=e.className,p=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),d=Object(u.b)(r,"row");return l.a.createElement(c,Object(a.a)({ref:t},p,{className:i()(f,d,s&&"no-gutters")}))}));c.defaultProps={noGutters:!1},t.a=c},99:function(e,t,r){"use strict";var a=r(28),n="function"===typeof Symbol&&Symbol.for,s=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental"),n&&Symbol.for("react.responder"),n&&Symbol.for("react.scope");var m="function"===typeof Symbol&&Symbol.iterator;function y(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function C(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}function P(){}function k(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw y(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},P.prototype=C.prototype;var x=k.prototype=new P;x.constructor=k,a(x,C.prototype),x.isPureReactComponent=!0;var O={current:null},j={suspense:null},w={current:null},N=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,n={},i=null,o=null;if(null!=t)for(a in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)N.call(t,a)&&!E.hasOwnProperty(a)&&(n[a]=t[a]);var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];n.children=u}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===n[a]&&(n[a]=l[a]);return{$$typeof:s,type:e,key:i,ref:o,props:n,_owner:w.current}}function R(e){return"object"===typeof e&&null!==e&&e.$$typeof===s}var L=/\/+/g,$=[];function M(e,t,r,a){if($.length){var n=$.pop();return n.result=e,n.keyPrefix=t,n.func=r,n.context=a,n.count=0,n}return{result:e,keyPrefix:t,func:r,context:a,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function D(e,t,r){return null==e?0:function e(t,r,a,n){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var l=!1;if(null===t)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case s:case i:l=!0}}if(l)return a(n,t,""===r?"."+F(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=r+F(o=t[u],u);l+=e(o,c,a,n)}else if(null===t||"object"!==typeof t?c=null:c="function"===typeof(c=m&&t[m]||t["@@iterator"])?c:null,"function"===typeof c)for(t=c.call(t),u=0;!(o=t.next()).done;)l+=e(o=o.value,c=r+F(o,u++),a,n);else if("object"===o)throw a=""+t,y(Error(31),"[object Object]"===a?"object with keys {"+Object.keys(t).join(", ")+"}":a,"");return l}(e,"",t,r)}function F(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var a=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,a,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(L,"$&/")+"/")+r)),a.push(e))}function V(e,t,r,a,n){var s="";null!=r&&(s=(""+r).replace(L,"$&/")+"/"),D(e,A,t=M(t,s,a,n)),T(t)}function U(){var e=O.current;if(null===e)throw y(Error(321));return e}var q={Children:{map:function(e,t,r){if(null==e)return e;var a=[];return V(e,a,null,t,r),a},forEach:function(e,t,r){if(null==e)return e;D(e,I,t=M(null,null,t,r)),T(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return V(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw y(Error(143));return e}},createRef:function(){return{current:null}},Component:C,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,r){return U().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,r){return U().useReducer(e,t,r)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:o,Profiler:u,StrictMode:l,Suspense:d,unstable_SuspenseList:b,createElement:S,cloneElement:function(e,t,r){if(null===e||void 0===e)throw y(Error(267),e);var n=a({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)N.call(t,c)&&!E.hasOwnProperty(c)&&(n[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)n.children=r;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];n.children=u}return{$$typeof:s,type:e.type,key:i,ref:o,props:n,_owner:l}},createFactory:function(e){var t=S.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=j.suspense;j.suspense=void 0===t?null:t;try{e()}finally{j.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:O,ReactCurrentBatchConfig:j,ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:a}},B={default:q},z=B&&q||B;e.exports=z.default||z}}]);
//# sourceMappingURL=23.eb31fbe3.chunk.js.map
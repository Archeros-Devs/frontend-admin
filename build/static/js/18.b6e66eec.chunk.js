(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[18],{100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=a(90),i=o(n),s=(o(a(1)),o(a(86)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r(t,[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,r=t.pageNumber;e.preventDefault(),a||this.props.onClick(r)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,r=(t.pageNumber,t.activeClass),n=t.itemClass,o=t.linkClass,u=t.activeLinkClass,c=t.disabledClass,f=t.isActive,p=t.isDisabled,d=t.href,h=(0,s.default)(n,(l(e={},r,f),l(e,c,p),e)),m=(0,s.default)(o,l({},u,f));return i.default.createElement("li",{className:h,onClick:this.handleClick.bind(this)},i.default.createElement("a",{className:m,href:d},a))}}]),t}();u.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},t.default=u},247:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(11),i=a(14),s=a(12),o=a(13),l=a(0),u=a.n(l),c=a(97),f=a(95),p=a(26),d=a(91),h=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement(p.a,null,u.a.createElement(c.a,null,u.a.createElement(f.a,null,u.a.createElement(d.a,{title:"Administradores"},u.a.createElement("p",null,'"Em Breve"')))))}}]),t}(l.Component);t.default=h},90:function(e,t,a){"use strict";e.exports=a(98)},91:function(e,t,a){"use strict";var r=a(20),n=a(10),i=a(11),s=a(14),o=a(12),l=a(13),u=a(0),c=a.n(u),f=a(157),p=a(109),d=a(290),h=a(93),m=a.n(h),g=a(26),v=a(89),y=a(96),b=a.n(y);a(92);var C=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={isOption:a.props.isOption,fullCard:!1,collapseCard:!1,loadCard:a.props.loading,cardRemove:!1,activePage:1},a.componentWillReceiveProps=function(e){a.state.loadCard!==e.loading&&a.setState({loadCard:e.loading})},a.cardReloadHandler=function(){a.props.onCardReload&&a.props.onCardReload(),a.setState({loadCard:!0}),setInterval((function(){a.setState({loadCard:!1})}),3e3)},a.cardRemoveHandler=function(){a.setState({cardRemove:!0})},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"handlePageChange",value:function(e){e!==this.state.activePage&&(this.props.onPageChange&&this.props.onPageChange(e),this.setState({activePage:e}))}},{key:"render",value:function(){var e,t,a,n,i,s=this,o=[this.props.className];return this.state.isOption&&(a=c.a.createElement("div",{className:"card-header-right"},c.a.createElement(f.a,{alignRight:!0,className:"btn-group card-option"},c.a.createElement(f.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},c.a.createElement("i",{className:"feather icon-more-horizontal"})),c.a.createElement(f.a.Menu,{as:"ul",className:"list-unstyled card-option"},this.props.fullscreen&&c.a.createElement(f.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState((function(e){return{fullCard:!e.fullCard}}))}},c.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),c.a.createElement("a",{href:v.a.BLANK_LINK}," ",this.state.fullCard?"Restaurar":"Maximizar"," ")),this.props.expand&&c.a.createElement(f.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState((function(e){return{collapseCard:!e.collapseCard}}))}},c.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),c.a.createElement("a",{href:v.a.BLANK_LINK}," ",this.state.collapseCard?"Expandir":"Diminuir"," ")),this.props.reload&&c.a.createElement(f.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},c.a.createElement("i",{className:"feather icon-refresh-cw"}),c.a.createElement("a",{href:v.a.BLANK_LINK}," Recarregar ")),this.props.excludable&&c.a.createElement(f.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},c.a.createElement("i",{className:"feather icon-trash"}),c.a.createElement("a",{href:v.a.BLANK_LINK}," Excluir ")))))),n=c.a.createElement(p.a.Header,null,c.a.createElement(p.a.Title,{as:"h5"},this.props.title),a),this.state.fullCard&&(o=[].concat(Object(r.a)(o),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(o=[].concat(Object(r.a)(o),["card-load"]),t=c.a.createElement("div",{className:"card-loader"},c.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(o=[].concat(Object(r.a)(o),["d-none"])),this.props.cardClass&&(o=[].concat(Object(r.a)(o),[this.props.cardClass])),i=c.a.createElement(p.a,{className:o.join(" "),style:e},n,c.a.createElement(d.a,{in:!this.state.collapseCard},c.a.createElement("div",null,c.a.createElement(p.a.Body,{className:this.props.bodyClass},this.props.children),this.props.pagination&&c.a.createElement(p.a.Footer,{style:{padding:0,paddingLeft:"1em",paddingRight:"1em",paddingTop:"1em",display:"flex",justifyContent:"flex-end"}},c.a.createElement(b.a,{activePage:this.state.activePage,itemsCountPerPage:this.props.pagination.itemsCountPerPage,totalItemsCount:this.props.pagination.totalItemsCount,pageRangeDisplayed:5,onChange:function(e){return s.handlePageChange(e)}})))),t),c.a.createElement(g.a,null,i)}}]),t}(u.Component);t.a=m()(C)},92:function(e,t,a){},95:function(e,t,a){"use strict";var r=a(4),n=a(8),i=a(86),s=a.n(i),o=a(0),l=a.n(o),u=a(87),c=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.as,f=void 0===o?"div":o,p=Object(n.a)(e,["bsPrefix","className","as"]),d=Object(u.b)(a,"col"),h=[],m=[];return c.forEach((function(e){var t,a,r,n=p[e];if(delete p[e],null!=n&&"object"===typeof n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";null!=t&&h.push(!0===t?""+d+s:""+d+s+"-"+t),null!=r&&m.push("order"+s+"-"+r),null!=a&&m.push("offset"+s+"-"+a)})),h.length||h.push(d),l.a.createElement(f,Object(r.a)({},p,{ref:t,className:s.a.apply(void 0,[i].concat(h,m))}))}));f.displayName="Col",t.a=f},96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=l(a(90)),i=(l(a(1)),l(a(99))),s=l(a(100)),o=l(a(86));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),r(t,[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,r=t.pageRangeDisplayed,l=t.activePage,u=t.prevPageText,c=t.nextPageText,f=t.firstPageText,p=t.lastPageText,d=t.totalItemsCount,h=t.onChange,m=t.activeClass,g=t.itemClass,v=t.itemClassFirst,y=t.itemClassPrev,b=t.itemClassNext,C=t.itemClassLast,_=t.activeLinkClass,P=t.disabledClass,k=(t.hideDisabled,t.hideNavigation,t.linkClass),E=t.linkClassFirst,x=t.linkClassPrev,w=t.linkClassNext,N=t.linkClassLast,O=(t.hideFirstLastPages,t.getPageUrl),j=new i.default(a,r).build(d,l),S=j.first_page;S<=j.last_page;S++)e.push(n.default.createElement(s.default,{isActive:S===l,key:S,href:O(S),pageNumber:S,pageText:S+"",onClick:h,itemClass:g,linkClass:k,activeClass:m,activeLinkClass:_}));return this.isPrevPageVisible(j.has_previous_page)&&e.unshift(n.default.createElement(s.default,{key:"prev"+j.previous_page,pageNumber:j.previous_page,onClick:h,pageText:u,isDisabled:!j.has_previous_page,itemClass:(0,o.default)(g,y),linkClass:(0,o.default)(k,x),disabledClass:P})),this.isFirstPageVisible(j.has_previous_page)&&e.unshift(n.default.createElement(s.default,{key:"first",pageNumber:1,onClick:h,pageText:f,isDisabled:!j.has_previous_page,itemClass:(0,o.default)(g,v),linkClass:(0,o.default)(k,E),disabledClass:P})),this.isNextPageVisible(j.has_next_page)&&e.push(n.default.createElement(s.default,{key:"next"+j.next_page,pageNumber:j.next_page,onClick:h,pageText:c,isDisabled:!j.has_next_page,itemClass:(0,o.default)(g,b),linkClass:(0,o.default)(k,w),disabledClass:P})),this.isLastPageVisible(j.has_next_page)&&e.push(n.default.createElement(s.default,{key:"last",pageNumber:j.total_pages,onClick:h,pageText:p,isDisabled:j.current_page===j.total_pages,itemClass:(0,o.default)(g,C),linkClass:(0,o.default)(k,N),disabledClass:P})),e}},{key:"render",value:function(){var e=this.buildPages();return n.default.createElement("ul",{className:this.props.innerClass},e)}}]),t}();u.defaultProps={itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}},t.default=u},97:function(e,t,a){"use strict";var r=a(4),n=a(8),i=a(86),s=a.n(i),o=a(0),l=a.n(o),u=a(87),c=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.noGutters,o=e.as,c=void 0===o?"div":o,f=e.className,p=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),d=Object(u.b)(a,"row");return l.a.createElement(c,Object(r.a)({ref:t},p,{className:s()(f,d,i&&"no-gutters")}))}));c.defaultProps={noGutters:!1},t.a=c},98:function(e,t,a){"use strict";var r=a(28),n="function"===typeof Symbol&&Symbol.for,i=n?Symbol.for("react.element"):60103,s=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental"),n&&Symbol.for("react.responder"),n&&Symbol.for("react.scope");var v="function"===typeof Symbol&&Symbol.iterator;function y(e){for(var t=e.message,a="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};function _(e,t,a){this.props=e,this.context=t,this.refs=C,this.updater=a||b}function P(){}function k(e,t,a){this.props=e,this.context=t,this.refs=C,this.updater=a||b}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw y(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},P.prototype=_.prototype;var E=k.prototype=new P;E.constructor=k,r(E,_.prototype),E.isPureReactComponent=!0;var x={current:null},w={suspense:null},N={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,a){var r,n={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)O.call(t,r)&&!j.hasOwnProperty(r)&&(n[r]=t[r]);var l=arguments.length-2;if(1===l)n.children=a;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];n.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===n[r]&&(n[r]=l[r]);return{$$typeof:i,type:e,key:s,ref:o,props:n,_owner:N.current}}function R(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var L=/\/+/g,T=[];function $(e,t,a,r){if(T.length){var n=T.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,a){return null==e?0:function e(t,a,r,n){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var l=!1;if(null===t)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case s:l=!0}}if(l)return r(n,t,""===a?"."+I(t,0):a),1;if(l=0,a=""===a?".":a+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=a+I(o=t[u],u);l+=e(o,c,r,n)}else if(null===t||"object"!==typeof t?c=null:c="function"===typeof(c=v&&t[v]||t["@@iterator"])?c:null,"function"===typeof c)for(t=c.call(t),u=0;!(o=t.next()).done;)l+=e(o=o.value,c=a+I(o,u++),r,n);else if("object"===o)throw r=""+t,y(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,a)}function I(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,r,a,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(L,"$&/")+"/")+a)),r.push(e))}function V(e,t,a,r,n){var i="";null!=a&&(i=(""+a).replace(L,"$&/")+"/"),D(e,F,t=$(t,i,r,n)),M(t)}function B(){var e=x.current;if(null===e)throw y(Error(321));return e}var U={Children:{map:function(e,t,a){if(null==e)return e;var r=[];return V(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;D(e,A,t=$(null,null,t,a)),M(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return V(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw y(Error(143));return e}},createRef:function(){return{current:null}},Component:_,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,a){return B().useImperativeHandle(e,t,a)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,a){return B().useReducer(e,t,a)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:o,Profiler:u,StrictMode:l,Suspense:d,unstable_SuspenseList:h,createElement:S,cloneElement:function(e,t,a){if(null===e||void 0===e)throw y(Error(267),e);var n=r({},e.props),s=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=N.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)O.call(t,c)&&!j.hasOwnProperty(c)&&(n[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)n.children=a;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];n.children=u}return{$$typeof:i,type:e.type,key:s,ref:o,props:n,_owner:l}},createFactory:function(e){var t=S.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var a=w.suspense;w.suspense=void 0===t?null:t;try{e()}finally{w.suspense=a}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:w,ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:r}},H={default:U},K=H&&U||H;e.exports=K.default||K},99:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var r=Math.max(1,t-Math.floor(this.length/2)),n=Math.min(a,t+Math.floor(this.length/2));n-r+1<this.length&&(t<a/2?n=Math.min(a,n+(this.length-(n-r))):r=Math.max(1,r-(this.length-(n-r)))),n-r+1>this.length&&(t>a/2?r++:n--);var i=this.per_page*(t-1);i<0&&(i=0);var s=this.per_page*t-1;return s<0&&(s=0),s>Math.max(e-1,0)&&(s=Math.max(e-1,0)),{total_pages:a,pages:Math.min(n-r+1,a),current_page:t,first_page:r,last_page:n,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(s-i+1,e),first_result:i,last_result:s}}}}]);
//# sourceMappingURL=18.b6e66eec.chunk.js.map
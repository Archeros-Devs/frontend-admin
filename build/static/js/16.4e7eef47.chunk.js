(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[16],{153:function(e,t,a){"use strict";var n=a(10),r=a(11),i=a(13),s=a(12),l=a(14),o=a(0),u=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.text;return e.charAt(0).toUpperCase()+e.slice(1)}}]),t}(a.n(o).a.Component);t.a=u},245:function(e,t,a){"use strict";var n=a(4),r=a(8),i=a(86),s=a.n(i),l=a(0),o=a.n(l),u=a(87),c=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,l=e.pill,c=e.className,f=e.as,p=void 0===f?"span":f,d=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),h=Object(u.b)(a,"badge");return o.a.createElement(p,Object(n.a)({ref:t},d,{className:s()(c,h,l&&h+"-pill",i&&h+"-"+i)}))}));c.displayName="Badge",c.defaultProps={pill:!1},t.a=c},255:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),i=a(13),s=a(12),l=a(14),o=a(0),u=a.n(o),c=a(119),f=a(245),p=a(108),d=a(103),h=a(26),m=a(92),g=a(153),y=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=["primary","secondary","success","danger","warning","info","light","dark"].map((function(e,t){return u.a.createElement(c.a,{key:t,variant:e},u.a.createElement(g.a,{text:e}),u.a.createElement(f.a,{variant:"light",className:"ml-1"},"4"))}));return u.a.createElement(h.a,null,u.a.createElement(p.a,null,u.a.createElement(d.a,null,u.a.createElement(m.a,{title:"Basic Badges"},u.a.createElement("h1",null,"Example heading ",u.a.createElement(f.a,{variant:"secondary"},"New")),u.a.createElement("h2",null,"Example heading ",u.a.createElement(f.a,{variant:"secondary"},"New")),u.a.createElement("h3",null,"Example heading ",u.a.createElement(f.a,{variant:"secondary"},"New")),u.a.createElement("h4",null,"Example heading ",u.a.createElement(f.a,{variant:"secondary"},"New")),u.a.createElement("h5",null,"Example heading ",u.a.createElement(f.a,{variant:"secondary"},"New")),u.a.createElement("h6",null,"Example heading ",u.a.createElement(f.a,{variant:"secondary"},"New"))),u.a.createElement(m.a,{title:"Button Badges"},e))))}}]),t}(o.Component);t.default=y},90:function(e,t,a){"use strict";e.exports=a(94)},92:function(e,t,a){"use strict";var n=a(20),r=a(10),i=a(11),s=a(13),l=a(12),o=a(14),u=a(0),c=a.n(u),f=a(157),p=a(109),d=a(290),h=a(98),m=a.n(h),g=a(26),y=a(89),v=a(93),b=a.n(v);a(97);var C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={isOption:a.props.isOption,fullCard:!1,collapseCard:!1,loadCard:a.props.loading,cardRemove:!1,activePage:1},a.componentWillReceiveProps=function(e){a.state.loadCard!==e.loading&&a.setState({loadCard:e.loading})},a.cardReloadHandler=function(){a.props.onCardReload&&a.props.onCardReload(),a.setState({loadCard:!0}),setInterval((function(){a.setState({loadCard:!1})}),3e3)},a.cardRemoveHandler=function(){a.setState({cardRemove:!0})},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"handlePageChange",value:function(e){e!==this.state.activePage&&(this.props.onPageChange&&this.props.onPageChange(e),this.setState({activePage:e}))}},{key:"render",value:function(){var e,t,a,r,i,s=this,l=[this.props.className];return this.state.isOption&&(a=c.a.createElement("div",{className:"card-header-right"},c.a.createElement(f.a,{alignRight:!0,className:"btn-group card-option"},c.a.createElement(f.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},c.a.createElement("i",{className:"feather icon-more-horizontal"})),c.a.createElement(f.a.Menu,{as:"ul",className:"list-unstyled card-option"},this.props.fullscreen&&c.a.createElement(f.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState((function(e){return{fullCard:!e.fullCard}}))}},c.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),c.a.createElement("a",{href:y.a.BLANK_LINK}," ",this.state.fullCard?"Restaurar":"Maximizar"," ")),this.props.expand&&c.a.createElement(f.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState((function(e){return{collapseCard:!e.collapseCard}}))}},c.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),c.a.createElement("a",{href:y.a.BLANK_LINK}," ",this.state.collapseCard?"Expandir":"Diminuir"," ")),this.props.reload&&c.a.createElement(f.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},c.a.createElement("i",{className:"feather icon-refresh-cw"}),c.a.createElement("a",{href:y.a.BLANK_LINK}," Recarregar ")),this.props.excludable&&c.a.createElement(f.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},c.a.createElement("i",{className:"feather icon-trash"}),c.a.createElement("a",{href:y.a.BLANK_LINK}," Excluir ")))))),r=c.a.createElement(p.a.Header,null,c.a.createElement(p.a.Title,{as:"h5"},this.props.title),a),this.state.fullCard&&(l=[].concat(Object(n.a)(l),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(l=[].concat(Object(n.a)(l),["card-load"]),t=c.a.createElement("div",{className:"card-loader"},c.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(l=[].concat(Object(n.a)(l),["d-none"])),this.props.cardClass&&(l=[].concat(Object(n.a)(l),[this.props.cardClass])),i=c.a.createElement(p.a,{className:l.join(" "),style:e},r,c.a.createElement(d.a,{in:!this.state.collapseCard},c.a.createElement("div",null,c.a.createElement(p.a.Body,{className:this.props.bodyClass},this.props.children),this.props.pagination&&c.a.createElement(p.a.Footer,{style:{padding:0,paddingLeft:"1em",paddingRight:"1em",paddingTop:"1em",display:"flex",justifyContent:"flex-end"}},c.a.createElement(b.a,{activePage:this.state.activePage,itemsCountPerPage:this.props.pagination.itemsCountPerPage,totalItemsCount:this.props.pagination.totalItemsCount,pageRangeDisplayed:5,onChange:function(e){return s.handlePageChange(e)}})))),t),c.a.createElement(g.a,null,i)}}]),t}(u.Component);t.a=m()(C)},93:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=o(a(90)),i=(o(a(1)),o(a(95))),s=o(a(96)),l=o(a(86));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),n(t,[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,n=t.pageRangeDisplayed,o=t.activePage,u=t.prevPageText,c=t.nextPageText,f=t.firstPageText,p=t.lastPageText,d=t.totalItemsCount,h=t.onChange,m=t.activeClass,g=t.itemClass,y=t.itemClassFirst,v=t.itemClassPrev,b=t.itemClassNext,C=t.itemClassLast,_=t.activeLinkClass,E=t.disabledClass,P=(t.hideDisabled,t.hideNavigation,t.linkClass),k=t.linkClassFirst,x=t.linkClassPrev,w=t.linkClassNext,N=t.linkClassLast,O=(t.hideFirstLastPages,t.getPageUrl),j=new i.default(a,n).build(d,o),S=j.first_page;S<=j.last_page;S++)e.push(r.default.createElement(s.default,{isActive:S===o,key:S,href:O(S),pageNumber:S,pageText:S+"",onClick:h,itemClass:g,linkClass:P,activeClass:m,activeLinkClass:_}));return this.isPrevPageVisible(j.has_previous_page)&&e.unshift(r.default.createElement(s.default,{key:"prev"+j.previous_page,pageNumber:j.previous_page,onClick:h,pageText:u,isDisabled:!j.has_previous_page,itemClass:(0,l.default)(g,v),linkClass:(0,l.default)(P,x),disabledClass:E})),this.isFirstPageVisible(j.has_previous_page)&&e.unshift(r.default.createElement(s.default,{key:"first",pageNumber:1,onClick:h,pageText:f,isDisabled:!j.has_previous_page,itemClass:(0,l.default)(g,y),linkClass:(0,l.default)(P,k),disabledClass:E})),this.isNextPageVisible(j.has_next_page)&&e.push(r.default.createElement(s.default,{key:"next"+j.next_page,pageNumber:j.next_page,onClick:h,pageText:c,isDisabled:!j.has_next_page,itemClass:(0,l.default)(g,b),linkClass:(0,l.default)(P,w),disabledClass:E})),this.isLastPageVisible(j.has_next_page)&&e.push(r.default.createElement(s.default,{key:"last",pageNumber:j.total_pages,onClick:h,pageText:p,isDisabled:j.current_page===j.total_pages,itemClass:(0,l.default)(g,C),linkClass:(0,l.default)(P,N),disabledClass:E})),e}},{key:"render",value:function(){var e=this.buildPages();return r.default.createElement("ul",{className:this.props.innerClass},e)}}]),t}();u.defaultProps={itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}},t.default=u},94:function(e,t,a){"use strict";var n=a(28),r="function"===typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116;r&&Symbol.for("react.fundamental"),r&&Symbol.for("react.responder"),r&&Symbol.for("react.scope");var y="function"===typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,a="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};function _(e,t,a){this.props=e,this.context=t,this.refs=C,this.updater=a||b}function E(){}function P(e,t,a){this.props=e,this.context=t,this.refs=C,this.updater=a||b}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=_.prototype;var k=P.prototype=new E;k.constructor=P,n(k,_.prototype),k.isPureReactComponent=!0;var x={current:null},w={suspense:null},N={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,a){var n,r={},s=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(r[n]=t[n]);var o=arguments.length-2;if(1===o)r.children=a;else if(1<o){for(var u=Array(o),c=0;c<o;c++)u[c]=arguments[c+2];r.children=u}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===r[n]&&(r[n]=o[n]);return{$$typeof:i,type:e,key:s,ref:l,props:r,_owner:N.current}}function R(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var L=/\/+/g,T=[];function $(e,t,a,n){if(T.length){var r=T.pop();return r.result=e,r.keyPrefix=t,r.func=a,r.context=n,r.count=0,r}return{result:e,keyPrefix:t,func:a,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,a){return null==e?0:function e(t,a,n,r){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var o=!1;if(null===t)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case i:case s:o=!0}}if(o)return n(r,t,""===a?"."+I(t,0):a),1;if(o=0,a=""===a?".":a+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=a+I(l=t[u],u);o+=e(l,c,n,r)}else if(null===t||"object"!==typeof t?c=null:c="function"===typeof(c=y&&t[y]||t["@@iterator"])?c:null,"function"===typeof c)for(t=c.call(t),u=0;!(l=t.next()).done;)o+=e(l=l.value,c=a+I(l,u++),n,r);else if("object"===l)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return o}(e,"",t,a)}function I(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,a){var n=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,n,a,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(L,"$&/")+"/")+a)),n.push(e))}function B(e,t,a,n,r){var i="";null!=a&&(i=(""+a).replace(L,"$&/")+"/"),D(e,F,t=$(t,i,n,r)),M(t)}function V(){var e=x.current;if(null===e)throw v(Error(321));return e}var U={Children:{map:function(e,t,a){if(null==e)return e;var n=[];return B(e,n,null,t,a),n},forEach:function(e,t,a){if(null==e)return e;D(e,A,t=$(null,null,t,a)),M(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:_,PureComponent:P,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return V().useCallback(e,t)},useContext:function(e,t){return V().useContext(e,t)},useEffect:function(e,t){return V().useEffect(e,t)},useImperativeHandle:function(e,t,a){return V().useImperativeHandle(e,t,a)},useDebugValue:function(){},useLayoutEffect:function(e,t){return V().useLayoutEffect(e,t)},useMemo:function(e,t){return V().useMemo(e,t)},useReducer:function(e,t,a){return V().useReducer(e,t,a)},useRef:function(e){return V().useRef(e)},useState:function(e){return V().useState(e)},Fragment:l,Profiler:u,StrictMode:o,Suspense:d,unstable_SuspenseList:h,createElement:S,cloneElement:function(e,t,a){if(null===e||void 0===e)throw v(Error(267),e);var r=n({},e.props),s=e.key,l=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,o=N.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)O.call(t,c)&&!j.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=a;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:i,type:e.type,key:s,ref:l,props:r,_owner:o}},createFactory:function(e){var t=S.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var a=w.suspense;w.suspense=void 0===t?null:t;try{e()}finally{w.suspense=a}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:w,ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n}},H={default:U},K=H&&U||H;e.exports=K.default||K},95:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var n=Math.max(1,t-Math.floor(this.length/2)),r=Math.min(a,t+Math.floor(this.length/2));r-n+1<this.length&&(t<a/2?r=Math.min(a,r+(this.length-(r-n))):n=Math.max(1,n-(this.length-(r-n)))),r-n+1>this.length&&(t>a/2?n++:r--);var i=this.per_page*(t-1);i<0&&(i=0);var s=this.per_page*t-1;return s<0&&(s=0),s>Math.max(e-1,0)&&(s=Math.max(e-1,0)),{total_pages:a,pages:Math.min(r-n+1,a),current_page:t,first_page:n,last_page:r,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(s-i+1,e),first_result:i,last_result:s}}},96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(90),i=l(r),s=(l(a(1)),l(a(86)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,n=t.pageNumber;e.preventDefault(),a||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,n=(t.pageNumber,t.activeClass),r=t.itemClass,l=t.linkClass,u=t.activeLinkClass,c=t.disabledClass,f=t.isActive,p=t.isDisabled,d=t.href,h=(0,s.default)(r,(o(e={},n,f),o(e,c,p),e)),m=(0,s.default)(l,o({},u,f));return i.default.createElement("li",{className:h,onClick:this.handleClick.bind(this)},i.default.createElement("a",{className:m,href:d},a))}}]),t}();u.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},t.default=u},97:function(e,t,a){}}]);
//# sourceMappingURL=16.4e7eef47.chunk.js.map
(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[17],{278:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),l=a(13),o=a(12),i=a(14),s=a(0),u=a.n(s),c=a(108),p=a(103),f=a(26),d=a(92),h=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(f.a,null,u.a.createElement(c.a,null,u.a.createElement(p.a,null,u.a.createElement(d.a,{title:"Quick Installation",isOption:!0},u.a.createElement("p",null," - First of all it's required to install latest Node and npm - ",u.a.createElement("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},"nodejs")),u.a.createElement("p",null," - Unzip ",u.a.createElement("code",null,"datta-able-react-lite.zip")," file, Inside that directory you will find the ",u.a.createElement("code",null,"datta-able-react-lite/")," folder"),u.a.createElement("p",null," - Open your terminal/cmd then navigate to project directory ",u.a.createElement("code",null,"datta-able-react-lite/")),u.a.createElement("p",null," - Install npm packages using command ",u.a.createElement("code",null,"'npm install'"),",  this will install required node.js third-party plugins into the ",u.a.createElement("code",null,"node_modules/")," folder."),u.a.createElement("p",null," - Compile/Run project using  command  ",u.a.createElement("code",null,"'npm start'"),", this will compile app in development mode."),u.a.createElement("p",null," - Open ",u.a.createElement("a",{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},"http://localhost:3000")," to view it on browser."),u.a.createElement("p",null," - Now, You can use Datta Able React Admin Template for your application development. "),u.a.createElement("div",{className:"theme-bg2 text-white p-3"},u.a.createElement("p",null,"The project was built assuming it is hosted at the server root folder of domain/platform i.e http://demo.com."),u.a.createElement("p",null,"You can control this with the homepage field in your package.json."),u.a.createElement("p",null,'To deploy build for sub-folder i.e http://demo.com/project-folder-name/ than "homepage" : "http://demo.com/project-folder-name/".'),u.a.createElement("p",null,"You  also need to set basename in ../src/config.js file."),u.a.createElement("p",null,"like, basename: '/project-folder-name'")),u.a.createElement("p",null," - Build project using command ",u.a.createElement("code",null,"'npm run build'"),", It will create ",u.a.createElement("code",null,"build/")," folder inside datta-able-react-lite/ folder. "),u.a.createElement("p",null," - Your app is ready to be deployed. ")))))}}]),t}(s.Component);t.default=h},90:function(e,t,a){"use strict";e.exports=a(94)},92:function(e,t,a){"use strict";var n=a(20),r=a(10),l=a(11),o=a(13),i=a(12),s=a(14),u=a(0),c=a.n(u),p=a(157),f=a(109),d=a(290),h=a(98),m=a.n(h),g=a(26),y=a(89),b=a(93),v=a.n(b);a(97);var C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={isOption:a.props.isOption,fullCard:!1,collapseCard:!1,loadCard:a.props.loading,cardRemove:!1,activePage:1},a.componentWillReceiveProps=function(e){a.state.loadCard!==e.loading&&a.setState({loadCard:e.loading})},a.cardReloadHandler=function(){a.props.onCardReload&&a.props.onCardReload(),a.setState({loadCard:!0}),setInterval((function(){a.setState({loadCard:!1})}),3e3)},a.cardRemoveHandler=function(){a.setState({cardRemove:!0})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handlePageChange",value:function(e){e!==this.state.activePage&&(this.props.onPageChange&&this.props.onPageChange(e),this.setState({activePage:e}))}},{key:"render",value:function(){var e,t,a,r,l,o=this,i=[this.props.className];return this.state.isOption&&(a=c.a.createElement("div",{className:"card-header-right"},c.a.createElement(p.a,{alignRight:!0,className:"btn-group card-option"},c.a.createElement(p.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},c.a.createElement("i",{className:"feather icon-more-horizontal"})),c.a.createElement(p.a.Menu,{as:"ul",className:"list-unstyled card-option"},this.props.fullscreen&&c.a.createElement(p.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState((function(e){return{fullCard:!e.fullCard}}))}},c.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),c.a.createElement("a",{href:y.a.BLANK_LINK}," ",this.state.fullCard?"Restaurar":"Maximizar"," ")),this.props.expand&&c.a.createElement(p.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState((function(e){return{collapseCard:!e.collapseCard}}))}},c.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),c.a.createElement("a",{href:y.a.BLANK_LINK}," ",this.state.collapseCard?"Expandir":"Diminuir"," ")),this.props.reload&&c.a.createElement(p.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},c.a.createElement("i",{className:"feather icon-refresh-cw"}),c.a.createElement("a",{href:y.a.BLANK_LINK}," Recarregar ")),this.props.excludable&&c.a.createElement(p.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},c.a.createElement("i",{className:"feather icon-trash"}),c.a.createElement("a",{href:y.a.BLANK_LINK}," Excluir ")))))),r=c.a.createElement(f.a.Header,null,c.a.createElement(f.a.Title,{as:"h5"},this.props.title),a),this.state.fullCard&&(i=[].concat(Object(n.a)(i),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(i=[].concat(Object(n.a)(i),["card-load"]),t=c.a.createElement("div",{className:"card-loader"},c.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(i=[].concat(Object(n.a)(i),["d-none"])),this.props.cardClass&&(i=[].concat(Object(n.a)(i),[this.props.cardClass])),l=c.a.createElement(f.a,{className:i.join(" "),style:e},r,c.a.createElement(d.a,{in:!this.state.collapseCard},c.a.createElement("div",null,c.a.createElement(f.a.Body,{className:this.props.bodyClass},this.props.children),this.props.pagination&&c.a.createElement(f.a.Footer,{style:{padding:0,paddingLeft:"1em",paddingRight:"1em",paddingTop:"1em",display:"flex",justifyContent:"flex-end"}},c.a.createElement(v.a,{activePage:this.state.activePage,itemsCountPerPage:this.props.pagination.itemsCountPerPage,totalItemsCount:this.props.pagination.totalItemsCount,pageRangeDisplayed:5,onChange:function(e){return o.handlePageChange(e)}})))),t),c.a.createElement(g.a,null,l)}}]),t}(u.Component);t.a=m()(C)},93:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=s(a(90)),l=(s(a(1)),s(a(95))),o=s(a(96)),i=s(a(86));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),n(t,[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,n=t.pageRangeDisplayed,s=t.activePage,u=t.prevPageText,c=t.nextPageText,p=t.firstPageText,f=t.lastPageText,d=t.totalItemsCount,h=t.onChange,m=t.activeClass,g=t.itemClass,y=t.itemClassFirst,b=t.itemClassPrev,v=t.itemClassNext,C=t.itemClassLast,_=t.activeLinkClass,E=t.disabledClass,k=(t.hideDisabled,t.hideNavigation,t.linkClass),P=t.linkClassFirst,w=t.linkClassPrev,x=t.linkClassNext,j=t.linkClassLast,N=(t.hideFirstLastPages,t.getPageUrl),O=new l.default(a,n).build(d,s),S=O.first_page;S<=O.last_page;S++)e.push(r.default.createElement(o.default,{isActive:S===s,key:S,href:N(S),pageNumber:S,pageText:S+"",onClick:h,itemClass:g,linkClass:k,activeClass:m,activeLinkClass:_}));return this.isPrevPageVisible(O.has_previous_page)&&e.unshift(r.default.createElement(o.default,{key:"prev"+O.previous_page,pageNumber:O.previous_page,onClick:h,pageText:u,isDisabled:!O.has_previous_page,itemClass:(0,i.default)(g,b),linkClass:(0,i.default)(k,w),disabledClass:E})),this.isFirstPageVisible(O.has_previous_page)&&e.unshift(r.default.createElement(o.default,{key:"first",pageNumber:1,onClick:h,pageText:p,isDisabled:!O.has_previous_page,itemClass:(0,i.default)(g,y),linkClass:(0,i.default)(k,P),disabledClass:E})),this.isNextPageVisible(O.has_next_page)&&e.push(r.default.createElement(o.default,{key:"next"+O.next_page,pageNumber:O.next_page,onClick:h,pageText:c,isDisabled:!O.has_next_page,itemClass:(0,i.default)(g,v),linkClass:(0,i.default)(k,x),disabledClass:E})),this.isLastPageVisible(O.has_next_page)&&e.push(r.default.createElement(o.default,{key:"last",pageNumber:O.total_pages,onClick:h,pageText:f,isDisabled:O.current_page===O.total_pages,itemClass:(0,i.default)(g,C),linkClass:(0,i.default)(k,j),disabledClass:E})),e}},{key:"render",value:function(){var e=this.buildPages();return r.default.createElement("ul",{className:this.props.innerClass},e)}}]),t}();u.defaultProps={itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}},t.default=u},94:function(e,t,a){"use strict";var n=a(28),r="function"===typeof Symbol&&Symbol.for,l=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116;r&&Symbol.for("react.fundamental"),r&&Symbol.for("react.responder"),r&&Symbol.for("react.scope");var y="function"===typeof Symbol&&Symbol.iterator;function b(e){for(var t=e.message,a="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};function _(e,t,a){this.props=e,this.context=t,this.refs=C,this.updater=a||v}function E(){}function k(e,t,a){this.props=e,this.context=t,this.refs=C,this.updater=a||v}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw b(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=_.prototype;var P=k.prototype=new E;P.constructor=k,n(P,_.prototype),P.isPureReactComponent=!0;var w={current:null},x={suspense:null},j={current:null},N=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,a){var n,r={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,n)&&!O.hasOwnProperty(n)&&(r[n]=t[n]);var s=arguments.length-2;if(1===s)r.children=a;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:l,type:e,key:o,ref:i,props:r,_owner:j.current}}function R(e){return"object"===typeof e&&null!==e&&e.$$typeof===l}var L=/\/+/g,T=[];function I(e,t,a,n){if(T.length){var r=T.pop();return r.result=e,r.keyPrefix=t,r.func=a,r.context=n,r.count=0,r}return{result:e,keyPrefix:t,func:a,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,a){return null==e?0:function e(t,a,n,r){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var s=!1;if(null===t)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case l:case o:s=!0}}if(s)return n(r,t,""===a?"."+M(t,0):a),1;if(s=0,a=""===a?".":a+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=a+M(i=t[u],u);s+=e(i,c,n,r)}else if(null===t||"object"!==typeof t?c=null:c="function"===typeof(c=y&&t[y]||t["@@iterator"])?c:null,"function"===typeof c)for(t=c.call(t),u=0;!(i=t.next()).done;)s+=e(i=i.value,c=a+M(i,u++),n,r);else if("object"===i)throw n=""+t,b(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return s}(e,"",t,a)}function M(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,a){var n=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,n,a,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(L,"$&/")+"/")+a)),n.push(e))}function V(e,t,a,n,r){var l="";null!=a&&(l=(""+a).replace(L,"$&/")+"/"),D(e,F,t=I(t,l,n,r)),$(t)}function U(){var e=w.current;if(null===e)throw b(Error(321));return e}var B={Children:{map:function(e,t,a){if(null==e)return e;var n=[];return V(e,n,null,t,a),n},forEach:function(e,t,a){if(null==e)return e;D(e,A,t=I(null,null,t,a)),$(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return V(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw b(Error(143));return e}},createRef:function(){return{current:null}},Component:_,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,a){return U().useImperativeHandle(e,t,a)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,a){return U().useReducer(e,t,a)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:i,Profiler:u,StrictMode:s,Suspense:d,unstable_SuspenseList:h,createElement:S,cloneElement:function(e,t,a){if(null===e||void 0===e)throw b(Error(267),e);var r=n({},e.props),o=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)N.call(t,c)&&!O.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=a;else if(1<c){u=Array(c);for(var p=0;p<c;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:l,type:e.type,key:o,ref:i,props:r,_owner:s}},createFactory:function(e){var t=S.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var a=x.suspense;x.suspense=void 0===t?null:t;try{e()}finally{x.suspense=a}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:x,ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n}},z={default:B},H=z&&B||z;e.exports=H.default||H},95:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var n=Math.max(1,t-Math.floor(this.length/2)),r=Math.min(a,t+Math.floor(this.length/2));r-n+1<this.length&&(t<a/2?r=Math.min(a,r+(this.length-(r-n))):n=Math.max(1,n-(this.length-(r-n)))),r-n+1>this.length&&(t>a/2?n++:r--);var l=this.per_page*(t-1);l<0&&(l=0);var o=this.per_page*t-1;return o<0&&(o=0),o>Math.max(e-1,0)&&(o=Math.max(e-1,0)),{total_pages:a,pages:Math.min(r-n+1,a),current_page:t,first_page:n,last_page:r,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(o-l+1,e),first_result:l,last_result:o}}},96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(90),l=i(r),o=(i(a(1)),i(a(86)));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,n=t.pageNumber;e.preventDefault(),a||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,n=(t.pageNumber,t.activeClass),r=t.itemClass,i=t.linkClass,u=t.activeLinkClass,c=t.disabledClass,p=t.isActive,f=t.isDisabled,d=t.href,h=(0,o.default)(r,(s(e={},n,p),s(e,c,f),e)),m=(0,o.default)(i,s({},u,p));return l.default.createElement("li",{className:h,onClick:this.handleClick.bind(this)},l.default.createElement("a",{className:m,href:d},a))}}]),t}();u.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},t.default=u},97:function(e,t,a){}}]);
//# sourceMappingURL=17.21424cd6.chunk.js.map
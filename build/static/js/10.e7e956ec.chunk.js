(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[10],{103:function(t,e,n){"use strict";var a=n(0),r=n.n(a);e.a=r.a.createContext(null)},105:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){function e(e,n,a,r,i,o){var u=r||"<<anonymous>>",s=o||a;if(null==n[a])return e?new Error("Required "+i+" `"+s+"` was not specified in `"+u+"`."):null;for(var l=arguments.length,c=Array(l>6?l-6:0),d=6;d<l;d++)c[d-6]=arguments[d];return t.apply(void 0,[n,a,u,i,s].concat(c))}var n=e.bind(null,!1);return n.isRequired=e.bind(null,!0),n},t.exports=e.default},110:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,i.default)((function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=null;return e.forEach((function(t){if(null==r){var e=t.apply(void 0,n);null!=e&&(r=e)}})),r}))};var a,r=n(105),i=(a=r)&&a.__esModule?a:{default:a};t.exports=e.default},117:function(t,e,n){"use strict";var a=n(98);e.__esModule=!0,e.default=function(t){return(0,r.default)(t.replace(i,"ms-"))};var r=a(n(146)),i=/^-ms-/;t.exports=e.default},118:function(t,e,n){"use strict";var a=n(98);e.__esModule=!0,e.default=e.animationEnd=e.animationDelay=e.animationTiming=e.animationDuration=e.animationName=e.transitionEnd=e.transitionDuration=e.transitionDelay=e.transitionTiming=e.transitionProperty=e.transform=void 0;var r,i,o,u,s,l,c,d,f,v,m,p=a(n(107)),b="transform";if(e.transform=b,e.animationEnd=o,e.transitionEnd=i,e.transitionDelay=c,e.transitionTiming=l,e.transitionDuration=s,e.transitionProperty=u,e.animationDelay=m,e.animationTiming=v,e.animationDuration=f,e.animationName=d,p.default){var E=function(){for(var t,e,n=document.createElement("div").style,a={O:function(t){return"o"+t.toLowerCase()},Moz:function(t){return t.toLowerCase()},Webkit:function(t){return"webkit"+t},ms:function(t){return"MS"+t}},r=Object.keys(a),i="",o=0;o<r.length;o++){var u=r[o];if(u+"TransitionProperty"in n){i="-"+u.toLowerCase(),t=a[u]("TransitionEnd"),e=a[u]("AnimationEnd");break}}!t&&"transitionProperty"in n&&(t="transitionend");!e&&"animationName"in n&&(e="animationend");return n=null,{animationEnd:e,transitionEnd:t,prefix:i}}();r=E.prefix,e.transitionEnd=i=E.transitionEnd,e.animationEnd=o=E.animationEnd,e.transform=b=r+"-"+b,e.transitionProperty=u=r+"-transition-property",e.transitionDuration=s=r+"-transition-duration",e.transitionDelay=c=r+"-transition-delay",e.transitionTiming=l=r+"-transition-timing-function",e.animationName=d=r+"-animation-name",e.animationDuration=f=r+"-animation-duration",e.animationTiming=v=r+"-animation-delay",e.animationDelay=m=r+"-animation-timing-function"}var x={transform:b,end:i,property:u,timing:l,delay:c,duration:s};e.default=x},129:function(t,e,n){"use strict";var a=n(98);e.__esModule=!0,e.default=function(t,e,n){var a="",c="",d=e;if("string"===typeof e){if(void 0===n)return t.style[(0,r.default)(e)]||(0,o.default)(t).getPropertyValue((0,i.default)(e));(d={})[e]=n}Object.keys(d).forEach((function(e){var n=d[e];n||0===n?(0,l.default)(e)?c+=e+"("+n+") ":a+=(0,i.default)(e)+": "+n+";":(0,u.default)(t,(0,i.default)(e))})),c&&(a+=s.transform+": "+c+";");t.style.cssText+=";"+a};var r=a(n(117)),i=a(n(147)),o=a(n(149)),u=a(n(150)),s=n(118),l=a(n(151));t.exports=e.default},130:function(t,e,n){"use strict";var a=n(98);e.__esModule=!0,e.default=void 0;var r=a(n(118)),i=a(n(129));function o(t,e,n){var a,i={target:t,currentTarget:t};function o(t){t.target===t.currentTarget&&(clearTimeout(a),t.target.removeEventListener(r.default.end,o),e.call(this))}r.default.end?null==n&&(n=s(t)||0):n=0,r.default.end?(t.addEventListener(r.default.end,o,!1),a=setTimeout((function(){return o(i)}),1.5*(n||100))):setTimeout(o.bind(null,i),0)}o._parseDuration=s;var u=o;function s(t){var e=(0,i.default)(t,r.default.duration),n=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*n}e.default=u,t.exports=e.default},131:function(t,e,n){"use strict";function a(t){t.offsetHeight}n.d(e,"a",(function(){return a}))},134:function(t,e,n){"use strict";var a=n(8),r=n(15),i=(n(1),n(0)),o=n.n(i),u=n(27),s=n.n(u),l=!1,c=o.a.createContext(null);n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return p}));var d="unmounted",f="exited",v="entering",m="entered",p="exiting",b=function(t){function e(e,n){var a;a=t.call(this,e,n)||this;var r,i=n&&!n.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?i?(r=f,a.appearStatus=v):r=m:r=e.unmountOnExit||e.mountOnEnter?d:f,a.state={status:r},a.nextCallback=null,a}Object(r.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===d?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==v&&n!==m&&(e=v):n!==v&&n!==m||(e=p)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!==typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=s.a.findDOMNode(this);e===v?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:d})},n.performEnter=function(t,e){var n=this,a=this.props.enter,r=this.context?this.context.isMounting:e,i=this.getTimeouts(),o=r?i.appear:i.enter;!e&&!a||l?this.safeSetState({status:m},(function(){n.props.onEntered(t)})):(this.props.onEnter(t,r),this.safeSetState({status:v},(function(){n.props.onEntering(t,r),n.onTransitionEnd(t,o,(function(){n.safeSetState({status:m},(function(){n.props.onEntered(t,r)}))}))})))},n.performExit=function(t){var e=this,n=this.props.exit,a=this.getTimeouts();n&&!l?(this.props.onExit(t),this.safeSetState({status:p},(function(){e.props.onExiting(t),e.onTransitionEnd(t,a.exit,(function(){e.safeSetState({status:f},(function(){e.props.onExited(t)}))}))}))):this.safeSetState({status:f},(function(){e.props.onExited(t)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var a=null==e&&!this.props.addEndListener;t&&!a?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===d)return null;var e=this.props,n=e.children,r=Object(a.a)(e,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return o.a.createElement(c.Provider,{value:null},n(t,r));var i=o.a.Children.only(n);return o.a.createElement(c.Provider,{value:null},o.a.cloneElement(i,r))},e}(o.a.Component);function E(){}b.contextType=c,b.propTypes={},b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},b.UNMOUNTED=0,b.EXITED=1,b.ENTERING=2,b.ENTERED=3,b.EXITING=4;e.e=b},147:function(t,e,n){"use strict";var a=n(98);e.__esModule=!0,e.default=function(t){return(0,r.default)(t).replace(i,"-ms-")};var r=a(n(148)),i=/^ms-/;t.exports=e.default},148:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){return t.replace(a,"-$1").toLowerCase()};var a=/([A-Z])/g;t.exports=e.default},149:function(t,e,n){"use strict";var a=n(98);e.__esModule=!0,e.default=function(t){if(!t)throw new TypeError("No Element passed to `getComputedStyle()`");var e=t.ownerDocument;return"defaultView"in e?e.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):window.getComputedStyle(t,null):{getPropertyValue:function(e){var n=t.style;"float"==(e=(0,r.default)(e))&&(e="styleFloat");var a=t.currentStyle[e]||null;if(null==a&&n&&n[e]&&(a=n[e]),o.test(a)&&!i.test(e)){var u=n.left,s=t.runtimeStyle,l=s&&s.left;l&&(s.left=t.currentStyle.left),n.left="fontSize"===e?"1em":a,a=n.pixelLeft+"px",n.left=u,l&&(s.left=l)}return a}}};var r=a(n(117)),i=/^(top|right|bottom|left)$/,o=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;t.exports=e.default},150:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){return"removeProperty"in t.style?t.style.removeProperty(e):t.style.removeAttribute(e)},t.exports=e.default},151:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){return!(!t||!a.test(t))};var a=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.exports=e.default},158:function(t,e,n){"use strict";var a,r=n(4),i=n(8),o=n(86),u=n.n(o),s=n(0),l=n.n(s),c=n(134),d=n(130),f=n.n(d),v=n(131),m=((a={})[c.b]="show",a[c.a]="show",a),p=l.a.forwardRef((function(t,e){var n=t.className,a=t.children,o=Object(i.a)(t,["className","children"]),d=Object(s.useCallback)((function(t){Object(v.a)(t),o.onEnter&&o.onEnter(t)}),[o]);return l.a.createElement(c.e,Object(r.a)({ref:e,addEndListener:f.a},o,{onEnter:d}),(function(t,e){return l.a.cloneElement(a,Object(r.a)({},e,{className:u()("fade",n,a.props.className,m[t])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",e.a=p},159:function(t,e,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);e.a=r},177:function(t,e,n){"use strict";var a=n(4),r=n(8),i=n(86),o=n.n(i),u=n(0),s=n.n(u),l=n(87),c=s.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.className,u=t.children,c=t.as,d=void 0===c?"div":c,f=Object(r.a)(t,["bsPrefix","className","children","as"]);return n=Object(l.b)(n,"nav-item"),s.a.createElement(d,Object(a.a)({},f,{ref:e,className:o()(i,n)}),u)}));c.displayName="NavItem",e.a=c},178:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(133),o=n(159),u=n(111);e.a=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),n=e.id,s=e.generateChildId,l=e.onSelect,c=e.activeKey,d=e.transition,f=e.mountOnEnter,v=e.unmountOnExit,m=e.children,p=Object(a.useMemo)((function(){return s||function(t,e){return n?n+"-"+e+"-"+t:null}}),[n,s]),b=Object(a.useMemo)((function(){return{onSelect:l,activeKey:c,transition:d,mountOnEnter:f,unmountOnExit:v,getControlledId:function(t){return p(t,"tabpane")},getControllerId:function(t){return p(t,"tab")}}}),[l,c,d,f,v,p]);return r.a.createElement(o.a.Provider,{value:b},r.a.createElement(u.a.Provider,{value:l},m))}},179:function(t,e,n){"use strict";var a=n(4),r=n(8),i=n(15),o=n(86),u=n.n(o),s=n(0),l=n.n(s),c=n(87),d=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.bsPrefix,n=t.as,i=void 0===n?"div":n,o=t.className,s=Object(r.a)(t,["bsPrefix","as","className"]);return l.a.createElement(i,Object(a.a)({},s,{className:u()(o,e)}))},e}(l.a.Component);e.a=Object(c.a)(d,"tab-content")},180:function(t,e,n){"use strict";var a=n(4),r=n(8),i=n(86),o=n.n(i),u=n(0),s=n.n(u),l=n(87),c=n(159),d=n(111),f=n(158);var v=s.a.forwardRef((function(t,e){var n=function(t){var e=Object(u.useContext)(c.a);if(!e)return t;var n=e.activeKey,i=e.getControlledId,o=e.getControllerId,s=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),l=!1!==t.transition&&!1!==s.transition,v=Object(d.b)(t.eventKey);return Object(a.a)({},t,{active:null==t.active&&null!=v?Object(d.b)(n)===v:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:l&&(t.transition||s.transition||f.a),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:s.unmountOnExit})}(t),i=n.bsPrefix,v=n.className,m=n.active,p=n.onEnter,b=n.onEntering,E=n.onEntered,x=n.onExit,y=n.onExiting,h=n.onExited,O=n.mountOnEnter,j=n.unmountOnExit,g=n.transition,C=n.as,N=void 0===C?"div":C,S=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(l.b)(i,"tab-pane");if(!m&&j)return null;var P=s.a.createElement(N,Object(a.a)({},S,{ref:e,role:"tabpanel","aria-hidden":!m,className:o()(v,w,{active:m})}));return g&&(P=s.a.createElement(g,{in:m,onEnter:p,onEntering:b,onEntered:E,onExit:x,onExiting:y,onExited:h,mountOnEnter:O,unmountOnExit:j},P)),s.a.createElement(c.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},P))}));v.displayName="TabPane",e.a=v},183:function(t,e,n){"use strict";var a=n(4),r=n(8),i=n(86),o=n.n(i),u=n(0),s=n.n(u),l=n(109),c=n(162),d=n(145),f=n(111),v=s.a.forwardRef((function(t,e){var n=t.active,i=t.className,l=t.tabIndex,v=t.eventKey,m=t.onSelect,p=t.onClick,b=t.as,E=Object(r.a)(t,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),x=Object(f.b)(v,E.href),y=Object(u.useContext)(f.a),h=Object(u.useContext)(d.a),O=n;h&&(E.role||"tablist"!==h.role||(E.role="tab"),E["data-rb-event-key"]=x,E.id=h.getControllerId(x),E["aria-controls"]=h.getControlledId(x),O=null==n&&null!=x?h.activeKey===x:n),"tab"===E.role&&(E.tabIndex=O?l:-1,E["aria-selected"]=O);var j=Object(c.a)((function(t){p&&p(t),null!=x&&(m&&m(x,t),y&&y(x,t))}));return s.a.createElement(b,Object(a.a)({},E,{ref:e,onClick:j,className:o()(i,O&&"active")}))}));v.defaultProps={disabled:!1};var m=v,p=n(87),b={disabled:!1,as:l.a},E=s.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.disabled,u=t.className,l=t.href,c=t.eventKey,d=t.onSelect,f=t.as,v=Object(r.a)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.b)(n,"nav-link"),s.a.createElement(m,Object(a.a)({},v,{href:l,ref:e,eventKey:c,as:f,disabled:i,onSelect:d,className:o()(u,n,i&&"disabled")}))}));E.displayName="NavLink",E.defaultProps=b;e.a=E},291:function(t,e,n){"use strict";var a=n(4),r=n(8),i=n(86),o=n.n(i),u=(n(110),n(0)),s=n.n(u),l=n(133),c=n(87),d=n(170),f=n(103),v=n(137),m=n.n(v);var p=function(t){return t&&"function"!==typeof t?function(e){t.current=e}:t};var b=function(t,e){return Object(u.useMemo)((function(){return function(t,e){var n=p(t),a=p(e);return function(t){n&&n(t),a&&a(t)}}(t,e)}),[t,e])},E=n(145),x=n(111),y=n(159),h=function(){},O=s.a.forwardRef((function(t,e){var n,i,o=t.as,l=void 0===o?"ul":o,c=t.onSelect,d=t.activeKey,f=t.role,v=t.onKeyDown,p=Object(r.a)(t,["as","onSelect","activeKey","role","onKeyDown"]),O=Object(u.useReducer)((function(t){return!t}),!1)[1],j=Object(u.useRef)(!1),g=Object(u.useContext)(x.a),C=Object(u.useContext)(y.a);C&&(f=f||"tablist",d=C.activeKey,n=C.getControlledId,i=C.getControllerId);var N=Object(u.useRef)(null),S=function(t){if(!N.current)return null;var e=m()(N.current,"[data-rb-event-key]:not(.disabled)"),n=N.current.querySelector(".active"),a=e.indexOf(n);if(-1===a)return null;var r=a+t;return r>=e.length&&(r=0),r<0&&(r=e.length-1),e[r]},w=function(t,e){null!=t&&(c&&c(t,e),g&&g(t,e))};Object(u.useEffect)((function(){if(N.current&&j.current){var t=N.current.querySelector("[data-rb-event-key].active");t&&t.focus()}j.current=!1}));var P=b(e,N);return s.a.createElement(x.a.Provider,{value:w},s.a.createElement(E.a.Provider,{value:{role:f,activeKey:Object(x.b)(d),getControlledId:n||h,getControllerId:i||h}},s.a.createElement(l,Object(a.a)({},p,{onKeyDown:function(t){var e;switch(v&&v(t),t.key){case"ArrowLeft":case"ArrowUp":e=S(-1);break;case"ArrowRight":case"ArrowDown":e=S(1);break;default:return}e&&(t.preventDefault(),w(e.dataset.rbEventKey,t),j.current=!0,O())},ref:P,role:f}))))})),j=n(177),g=n(183),C=s.a.forwardRef((function(t,e){var n,i,v,m=Object(l.a)(t,{activeKey:"onSelect"}),p=m.as,b=void 0===p?"div":p,E=m.bsPrefix,x=m.variant,y=m.fill,h=m.justify,j=m.navbar,g=m.className,C=m.children,N=m.activeKey,S=Object(r.a)(m,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);E=Object(c.b)(E,"nav");var w=Object(u.useContext)(d.a),P=Object(u.useContext)(f.a);return w?(i=w.bsPrefix,j=null==j||j):P&&(v=P.cardHeaderBsPrefix),s.a.createElement(O,Object(a.a)({as:b,ref:e,activeKey:N,className:o()(g,(n={},n[E]=!j,n[i+"-nav"]=j,n[v+"-"+x]=!!v,n[E+"-"+x]=!!x,n[E+"-fill"]=y,n[E+"-justified"]=h,n))},S),C)}));C.displayName="Nav",C.defaultProps={justify:!1,fill:!1},C.Item=j.a,C.Link=g.a;e.a=C},301:function(t,e,n){"use strict";var a=n(15),r=n(0),i=n.n(r),o=n(178),u=n(179),s=n(180),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);l.Container=o.a,l.Content=u.a,l.Pane=s.a,e.a=l},306:function(t,e,n){"use strict";var a=n(4),r=n(8),i=n(0),o=n.n(i),u=(n(144),n(133)),s=n(291),l=n(183),c=n(177),d=n(178),f=n(179),v=n(180);function m(t,e){var n=0;return o.a.Children.map(t,(function(t){return o.a.isValidElement(t)?e(t,n++):t}))}function p(t){var e;return function(t,e){var n=0;o.a.Children.forEach(t,(function(t){o.a.isValidElement(t)&&e(t,n++)}))}(t,(function(t){null==e&&(e=t.props.eventKey)})),e}function b(t){var e=t.props,n=e.title,a=e.eventKey,r=e.disabled,i=e.tabClassName;return null==n?null:o.a.createElement(c.a,{as:l.a,eventKey:a,disabled:r,className:i},n)}var E=o.a.forwardRef((function(t,e){var n=Object(u.a)(t,{activeKey:"onSelect"}),i=n.id,l=n.onSelect,c=n.transition,E=n.mountOnEnter,x=n.unmountOnExit,y=n.children,h=n.activeKey,O=void 0===h?p(y):h,j=Object(r.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{ref:e,id:i,activeKey:O,onSelect:l,transition:c,mountOnEnter:E,unmountOnExit:x},o.a.createElement(s.a,Object(a.a)({},j,{role:"tablist",as:"nav"}),m(y,b)),o.a.createElement(f.a,null,m(y,(function(t){var e=Object(a.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(v.a,e)}))))}));E.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},E.displayName="Tabs";e.a=E},93:function(t,e,n){"use strict";var a=n(4),r=n(8),i=n(86),o=n.n(i),u=n(0),s=n.n(u),l=n(87),c=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.className,u=t.as,d=void 0===u?"div":u,f=Object(r.a)(t,["bsPrefix","className","as"]),v=Object(l.b)(n,"col"),m=[],p=[];return c.forEach((function(t){var e,n,a,r=f[t];if(delete f[t],null!=r&&"object"===typeof r){var i=r.span;e=void 0===i||i,n=r.offset,a=r.order}else e=r;var o="xs"!==t?"-"+t:"";null!=e&&m.push(!0===e?""+v+o:""+v+o+"-"+e),null!=a&&p.push("order"+o+"-"+a),null!=n&&p.push("offset"+o+"-"+n)})),m.length||m.push(v),s.a.createElement(d,Object(a.a)({},f,{ref:e,className:o.a.apply(void 0,[i].concat(m,p))}))}));d.displayName="Col",e.a=d},97:function(t,e,n){"use strict";var a=n(4),r=n(8),i=n(86),o=n.n(i),u=n(0),s=n.n(u),l=n(87),c=s.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.noGutters,u=t.as,c=void 0===u?"div":u,d=t.className,f=Object(r.a)(t,["bsPrefix","noGutters","as","className"]),v=Object(l.b)(n,"row");return s.a.createElement(c,Object(a.a)({ref:e},f,{className:o()(d,v,i&&"no-gutters")}))}));c.defaultProps={noGutters:!1},e.a=c}}]);
//# sourceMappingURL=10.e7e956ec.chunk.js.map
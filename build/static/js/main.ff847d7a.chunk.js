(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[4],{16:function(e,n,t){"use strict";n.a={defaultPath:"/auth/signin",basename:"/admin/",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-light",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},21:function(e,n,t){"use strict";var r=t(7),a=t(25),o=t(17),i=t(6),c=t(30),u=t.n(c);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(t,!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d={user_name:"",user_email:"",token:""};var f=t(20);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=m({isOpen:[],isTrigger:[]},t(16).a,{isFullScreen:!1}),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0,t=[],r=[];switch(n.type){case i.d:return m({},e,{collapseMenu:!e.collapseMenu});case i.e:if("sub"===n.menu.type){r=e.isOpen;var a=(t=e.isTrigger).indexOf(n.menu.id);a>-1&&(r=r.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),-1===a&&(r=[].concat(Object(f.a)(r),[n.menu.id]),t=[].concat(Object(f.a)(t),[n.menu.id]))}else{r=e.isOpen;var o=e.isTrigger.indexOf(n.menu.id);t=-1===o?[n.menu.id]:[],r=-1===o?[n.menu.id]:[]}return m({},e,{isOpen:r,isTrigger:t});case i.i:return m({},e,{isOpen:r,isTrigger:t});case i.h:if("sub"===n.menu.type){r=e.isOpen;var c=(t=e.isTrigger).indexOf(n.menu.id);return c>-1&&(r=r.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),m({},e,{isOpen:r,isTrigger:t})}return m({},e);case i.f:return m({},e,{isFullScreen:!e.isFullScreen});case i.g:return m({},e,{isFullScreen:!1});case i.c:return m({},e,{layout:n.layout});default:return e}},g=Object(r.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case i.a:return s({},e,{user_name:n.payload.nome,user_email:n.payload.email,token:n.payload.token});case i.b:var t=n.payload.persist;return delete u.a.defaults.headers.common.Authorization,s({},e,{user_name:null,user_email:t?e.user_email:null,token:null});default:return e}},system:h}),v=t(46),O=t.n(v);t.d(n,"b",(function(){return j})),t.d(n,"a",(function(){return E}));var y={key:"root",storage:O.a,whitelist:["auth"]},w=Object(a.a)(y,g),j=Object(r.c)(w),E=Object(a.b)(j)},26:function(e,n,t){"use strict";n.a=function(e){return e.children}},49:function(e,n,t){e.exports=t(79)},6:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"f",(function(){return c})),t.d(n,"g",(function(){return u})),t.d(n,"c",(function(){return l})),t.d(n,"i",(function(){return s})),t.d(n,"h",(function(){return d}));var r="AUTH_SIGNIN",a="AUTH_SIGNOUT",o="COLLAPSE_MENU",i="COLLAPSE_TOGGLE",c="FULL_SCREEN",u="FULL_SCREEN_EXIT",l="CHANGE_LAYOUT",s="NAV_CONTENT_LEAVE",d="NAV_COLLAPSE_LEAVE"},79:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(27),i=t.n(o),c=t(84),u=t(9),l=t(29),s=t(43),d=t(10),f=t(11),p=t(13),m=t(12),b=t(14),h=t(80),g=t(85),v=t(44),O=t.n(v),y=(t(58),t(26)),w=t(81),j=function(e){function n(){return Object(d.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(f.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(a.a.Component),E=Object(w.a)(j),k=[{path:"/auth/signup",exact:!0,name:"Signup",component:a.a.lazy((function(){return Promise.all([t.e(3),t.e(27)]).then(t.bind(null,287))}))},{path:"/auth/signin",exact:!0,name:"Signin",component:a.a.lazy((function(){return Promise.all([t.e(13),t.e(3),t.e(29)]).then(t.bind(null,288))}))}],L=O()({loader:function(){return Promise.all([t.e(7),t.e(11)]).then(t.bind(null,293))},loading:u.a}),P=function(e){function n(){return Object(d.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){var e=k.map((function(e,n){return e.component?a.a.createElement(h.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return a.a.createElement(e.component,n)}}):null}));return a.a.createElement(y.a,null,a.a.createElement(E,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.a,null)},a.a.createElement(g.a,null,e,a.a.createElement(h.a,{path:"/",component:L})))))}}]),n}(r.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=t(16),_=t(21),C=a.a.createElement(l.a,{store:_.b},a.a.createElement(s.a,{loading:a.a.createElement(u.a,null),persistor:_.a},a.a.createElement(c.a,{basename:A.a.basename},a.a.createElement(P,null))));i.a.render(C,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/admin",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/admin","/service-worker.js");S?(!function(e,n){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(n,e)}))}}()},9:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(){return a.a.createElement("div",{className:"loader-bg"},a.a.createElement("div",{className:"loader-track"},a.a.createElement("div",{className:"loader-fill"})))}}},[[49,5,6]]]);
//# sourceMappingURL=main.ff847d7a.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{17:function(e,n,t){"use strict";n.a={defaultPath:"/auth/signin",basename:"/",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-light",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},22:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(){return r.a.createElement("div",{className:"loader-bg"},r.a.createElement("div",{className:"loader-track"},r.a.createElement("div",{className:"loader-fill"})))}},23:function(e,n,t){"use strict";var a=t(8),r=t(26),i=t(6),o=t(7),u=t(31),c=t.n(u),l={user_name:"",user_email:"",token:""};var s=t(20),d=t(17),m=Object(i.a)({isOpen:[],isTrigger:[]},d.a,{isFullScreen:!1}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0,t=[],a=[];switch(n.type){case o.d:return Object(i.a)({},e,{collapseMenu:!e.collapseMenu});case o.e:if("sub"===n.menu.type){a=e.isOpen;var r=(t=e.isTrigger).indexOf(n.menu.id);r>-1&&(a=a.filter(function(e){return e!==n.menu.id}),t=t.filter(function(e){return e!==n.menu.id})),-1===r&&(a=[].concat(Object(s.a)(a),[n.menu.id]),t=[].concat(Object(s.a)(t),[n.menu.id]))}else{a=e.isOpen;var u=e.isTrigger.indexOf(n.menu.id);t=-1===u?[n.menu.id]:[],a=-1===u?[n.menu.id]:[]}return Object(i.a)({},e,{isOpen:a,isTrigger:t});case o.i:return Object(i.a)({},e,{isOpen:a,isTrigger:t});case o.h:return"sub"===n.menu.type?(a=e.isOpen,(t=e.isTrigger).indexOf(n.menu.id)>-1&&(a=a.filter(function(e){return e!==n.menu.id}),t=t.filter(function(e){return e!==n.menu.id})),Object(i.a)({},e,{isOpen:a,isTrigger:t})):Object(i.a)({},e);case o.f:return Object(i.a)({},e,{isFullScreen:!e.isFullScreen});case o.g:return Object(i.a)({},e,{isFullScreen:!1});case o.c:return Object(i.a)({},e,{layout:n.layout});default:return e}},p=Object(a.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o.a:return Object(i.a)({},e,{user_name:n.payload.nome,user_email:n.payload.email,token:n.payload.token});case o.b:var t=n.payload.persist;return console.log(t),delete c.a.defaults.headers.common.Authorization,Object(i.a)({},e,{user_name:null,user_email:t?e.user_email:null,token:null});default:return e}},system:f}),b=t(48),h=t.n(b);t.d(n,"b",function(){return g}),t.d(n,"a",function(){return y});var O={key:"root",storage:h.a,whitelist:["auth"]},v=Object(r.a)(O,p),g=Object(a.c)(v),y=Object(r.b)(g)},27:function(e,n,t){"use strict";n.a=function(e){return e.children}},51:function(e,n,t){e.exports=t(81)},7:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"d",function(){return i}),t.d(n,"e",function(){return o}),t.d(n,"f",function(){return u}),t.d(n,"g",function(){return c}),t.d(n,"c",function(){return l}),t.d(n,"i",function(){return s}),t.d(n,"h",function(){return d});var a="AUTH_SIGNIN",r="AUTH_SIGNOUT",i="COLLAPSE_MENU",o="COLLAPSE_TOGGLE",u="FULL_SCREEN",c="FULL_SCREEN_EXIT",l="CHANGE_LAYOUT",s="NAV_CONTENT_LEAVE",d="NAV_COLLAPSE_LEAVE"},81:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(28),o=t.n(i),u=t(85),c=t(29),l=t(45),s=t(12),d=t(13),m=t(15),f=t(14),p=t(16),b=t(82),h=t(86),O=t(46),v=t.n(O),g=(t(60),t(22)),y=t(27),E=t(83),j=function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(r.a.Component),L=Object(E.a)(j),k=[{path:"/auth/signup",exact:!0,name:"Signup",component:r.a.lazy(function(){return Promise.all([t.e(1),t.e(18)]).then(t.bind(null,244))})},{path:"/auth/signin",exact:!0,name:"Signin",component:r.a.lazy(function(){return Promise.all([t.e(13),t.e(1),t.e(24)]).then(t.bind(null,245))})}],T=v()({loader:function(){return Promise.all([t.e(5),t.e(7)]).then(t.bind(null,248))},loading:g.a}),_=function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=k.map(function(e,n){return e.component?r.a.createElement(b.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return r.a.createElement(e.component,n)}}):null});return r.a.createElement(y.a,null,r.a.createElement(L,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(g.a,null)},r.a.createElement(h.a,null,e,r.a.createElement(b.a,{path:"/",component:T})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=t(17),C=t(23),S=r.a.createElement(c.a,{store:C.b},r.a.createElement(l.a,{loading:null,persistor:C.a},r.a.createElement(u.a,{basename:w.a.basename},r.a.createElement(_,null))));o.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,3,4]]]);
//# sourceMappingURL=main.60d147cf.chunk.js.map
(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[29],{114:function(e,t,n){e.exports=n(115)},115:function(e,t,n){var o=function(e){"use strict";var t,n=Object.prototype,o=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(e,t,n,o){var r=t&&t.prototype instanceof y?t:y,i=Object.create(r.prototype),a=new E(o||[]);return i._invoke=function(e,t,n){var o=l;return function(r,i){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===r)throw i;return L()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===l)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=u(e,t,n);if("normal"===s.type){if(o=n.done?d:f,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(o){return{type:"throw",arg:o}}}e.wrap=s;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",h={};function y(){}function g(){}function b(){}var v={};v[i]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(P([])));w&&w!==n&&o.call(w,i)&&(v=w);var k=b.prototype=y.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e){var t;this._invoke=function(n,r){function i(){return new Promise((function(t,i){!function t(n,r,i,a){var c=u(e[n],e,r);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return t("throw",e,i,a)}))}a(c.arg)}(n,r,t,i)}))}return t=t?t.then(i,i):i()}}function O(e,n){var o=e.iterator[n.method];if(o===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=u(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,h;var i=r.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:L}}function L(){return{value:t,done:!0}}return g.prototype=k.constructor=b,b.constructor=g,b[c]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(S.prototype),S.prototype[a]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,o,r){var i=new S(s(t,n,o,r));return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(k),k[c]="Generator",k[i]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=P,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(o,r){return c.type="throw",c.arg=e,n.next=o,r&&(n.method="next",n.arg=t),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:P(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=o}catch(r){Function("r","regeneratorRuntime = r")(o)}},116:function(e,t,n){"use strict";function o(e,t,n,o,r,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,s,"next",e)}function s(e){o(a,r,i,c,s,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return r}))},212:function(e,t,n){var o;e.exports=(o=n(0),function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(8)},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=o(n(2)),s=o(n(1)),u=o(n(5)),l=o(n(3)),f=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=Array(a),s=0;s<a;s++)c[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={isSdkLoaded:!1,isProcessing:!1},o.responseApi=function(e){window.FB.api("/me",{locale:o.props.language,fields:o.props.fields},(function(t){i(t,e),o.props.callback(t)}))},o.checkLoginState=function(e){o.setStateIfMounted({isProcessing:!1}),e.authResponse?o.responseApi(e.authResponse):o.props.onFailure?o.props.onFailure({status:e.status}):o.props.callback({status:e.status})},o.checkLoginAfterRefresh=function(e){"connected"===e.status?o.checkLoginState(e):window.FB.login((function(e){return o.checkLoginState(e)}),!0)},o.click=function(e){if(o.state.isSdkLoaded&&!o.state.isProcessing&&!o.props.isDisabled){o.setState({isProcessing:!0});var t=o.props,n=t.scope,r=t.appId,i=t.onClick,a=t.returnScopes,c=t.responseType,s=t.redirectUri,l=t.disableMobileRedirect,f=t.authType,p=t.state;if("function"!=typeof i||(i(e),!e.defaultPrevented)){var d={client_id:r,redirect_uri:s,state:p,return_scopes:a,scope:n,response_type:c,auth_type:f};if(o.props.isMobile&&!l)window.location.href="https://www.facebook.com/dialog/oauth"+(0,u.default)(d);else{if(!window.FB)return void(o.props.onFailure&&o.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(o.checkLoginState,{scope:n,return_scopes:a,auth_type:d.auth_type})}}}},r(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,o=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:n,xfbml:o,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(a||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,l.default)(e,"code")||(0,l.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,n,o){var r=t.getElementsByTagName(n)[0],i=r,a=r;t.getElementById(o)||((a=t.createElement(n)).id=o,a.src="https://connect.facebook.net/"+e+"/sdk.js",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(c.default.Component);f.propTypes={isDisabled:s.default.bool,callback:s.default.func.isRequired,appId:s.default.string.isRequired,xfbml:s.default.bool,cookie:s.default.bool,authType:s.default.string,scope:s.default.string,state:s.default.string,responseType:s.default.string,returnScopes:s.default.bool,redirectUri:s.default.string,autoLoad:s.default.bool,disableMobileRedirect:s.default.bool,isMobile:s.default.bool,fields:s.default.string,version:s.default.string,language:s.default.string,onClick:s.default.func,onFailure:s.default.func,render:s.default.func.isRequired},f.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e}(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}},function(e,t,n){"use strict";function o(){}var r=n(7);e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=o(n(2)),c=o(n(1)),s=o(n(9)),u=o(n(4)),l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"style",value:function(){var e=this.constructor.defaultProps.cssClass;return this.props.cssClass===e&&a.default.createElement("style",{dangerouslySetInnerHTML:{__html:s.default}})}},{key:"containerStyle",value:function(e){var t=e.isProcessing,n=e.isSdkLoaded,o=e.isDisabled,i={transition:"opacity 0.5s"};return(t||!n||o)&&(i.opacity=.6),r(i,this.props.containerStyle)}},{key:"renderOwnButton",value:function(e){var t=this.props,n=t.cssClass,o=t.size,i=t.icon,c=t.textButton,s=t.typeButton,u=t.buttonStyle,l=e.onClick,f="string"==typeof i,p={};return e.isDisabled&&function(e){return["button","input","select","textarea","optgroup","option","fieldset"].indexOf((e+"").toLowerCase())>=0}(this.props.tag)&&(p.disabled=!0),a.default.createElement("span",{style:this.containerStyle(e)},f&&a.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),a.default.createElement(this.props.tag,r({type:s,className:n+" "+o,style:u,onClick:l},p),i&&f&&a.default.createElement("i",{className:"fa "+i}),i&&!f&&i,c),this.style())}},{key:"render",value:function(){var e=this;return a.default.createElement(u.default,r({},this.props,{render:function(t){return e.renderOwnButton(t)}}))}}]),t}(a.default.Component);l.propTypes={textButton:c.default.string,typeButton:c.default.string,size:c.default.string,cssClass:c.default.string,icon:c.default.any,containerStyle:c.default.object,buttonStyle:c.default.object,tag:c.default.oneOfType([c.default.node,c.default.func])},l.defaultProps={textButton:"Login with Facebook",typeButton:"button",size:"metro",fields:"name",cssClass:"kep-login-facebook",tag:"button"},t.default=l},function(e,t,n){(t=e.exports=n(10)()).push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}}]))},213:function(e,t,n){var o;"undefined"!=typeof self&&self,e.exports=(o=n(0),function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e){e.exports=o},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var f=n(0),p=n.n(f),d=(n(1),function(e){return p.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},p.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},p.a.createElement("g",{fill:"#000",fillRule:"evenodd"},p.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),p.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),p.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),p.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),p.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}),h=function(e){return p.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)},y=function(e,t,n,o,r){var i=e.getElementsByTagName(t)[0],a=i,c=i;(c=e.createElement(t)).id=n,c.src=o,a&&a.parentNode?a.parentNode.insertBefore(c,a):e.head.appendChild(c),c.onload=r},g=function(){function e(t){var n;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?i(e):t}(this,r(e).call(this,t))).signIn=n.signIn.bind(i(n)),n.enableButton=n.enableButton.bind(i(n)),n.state={disabled:!0,hovered:!1,active:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(e,f.Component),(t=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.clientId,o=t.cookiePolicy,r=t.loginHint,i=t.hostedDomain,a=t.autoLoad,c=t.isSignedIn,s=t.fetchBasicProfile,u=t.redirectUri,l=t.discoveryDocs,f=t.onFailure,p=t.uxMode,d=t.scope,h=t.accessType,g=t.responseType;y(document,"script","google-login",t.jsSrc,(function(){var t={client_id:n,cookie_policy:o,login_hint:r,hosted_domain:i,fetch_basic_profile:s,discoveryDocs:l,ux_mode:p,redirect_uri:u,scope:d,access_type:h};"code"===g&&(t.access_type="offline"),window.gapi.load("auth2",(function(){e.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then((function(t){c&&t.isSignedIn.get()&&e.handleSigninSuccess(t.currentUser.get())}),(function(e){return f(e)})),a&&e.signIn()}))}))}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){};var e=document.getElementById("google-login");e.parentNode.removeChild(e)}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),o=this.props,r=o.onSuccess,i=o.onFailure,a=o.responseType,c={prompt:o.prompt};(0,o.onRequest)(),"code"===a?n.grantOfflineAccess(c).then((function(e){return r(e)}),(function(e){return i(e)})):n.signIn(c).then((function(e){return t.handleSigninSuccess(e)}),(function(e){return i(e)}))}}},{key:"handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},this.props.onSuccess(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag,o=t.type,r=t.className,i=t.disabledStyle,a=t.buttonText,c=t.children,s=t.render,u=t.theme,l=t.icon,f=this.state.disabled||this.props.disabled;if(s)return s({onClick:this.signIn,disabled:f});var y={backgroundColor:"dark"===u?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},g={cursor:"pointer",backgroundColor:"dark"===u?"#3367D6":"#eee",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",opacity:1},b=f?Object.assign({},y,i):e.state.active?Object.assign({},y,g):e.state.hovered?Object.assign({},y,{cursor:"pointer",opacity:.9}):y;return p.a.createElement(n,{onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1,active:!1})},onMouseDown:function(){return e.setState({active:!0})},onMouseUp:function(){return e.setState({active:!1})},onClick:this.signIn,style:b,type:o,disabled:f,className:r},[l&&p.a.createElement(d,{key:1,active:this.state.active}),p.a.createElement(h,{icon:l,key:2},c||a)])}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(e.prototype,t),e;var t}();g.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){},jsSrc:"https://apis.google.com/js/api.js"};var b=g,v=function(){function e(t){var n;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?u(e):t}(this,s(e).call(this,t))).signOut=n.signOut.bind(u(n)),n.enableButton=n.enableButton.bind(u(n)),n.state={disabled:!0,hovered:!1,active:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(e,f.Component),(t=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.onFailure,o=t.isSignedIn,r=t.clientId,i=t.cookiePolicy,a=t.loginHint,c=t.hostedDomain,s=t.fetchBasicProfile,u=t.discoveryDocs,l=t.uxMode,f=t.redirectUri,p=t.scope,d=t.accessType;y(document,"script","google-login",t.jsSrc,(function(){var t={client_id:r,cookie_policy:i,login_hint:a,hosted_domain:c,fetch_basic_profile:s,discoveryDocs:u,ux_mode:l,redirect_uri:f,scope:p,access_type:d};window.gapi.load("auth2",(function(){e.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then((function(t){o&&t.isSignedIn.get()&&e.handleSigninSuccess(t.currentUser.get())}),(function(e){return n(e)}))}))}))}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){};var e=document.getElementById("google-login");e.parentNode.removeChild(e)}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signOut",value:function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(e.disconnect().then(this.props.onLogoutSuccess))}}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag,o=t.type,r=t.className,i=t.disabledStyle,a=t.buttonText,c=t.children,s=t.render,u=t.theme,l=t.icon,f=this.state.disabled||this.props.disabled;if(s)return s({onClick:this.signOut,disabled:f});var y={backgroundColor:"dark"===u?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},g={cursor:"pointer",backgroundColor:"dark"===u?"#3367D6":"#eee",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",opacity:1},b=f?Object.assign({},y,i):e.state.active?Object.assign({},y,g):e.state.hovered?Object.assign({},y,{cursor:"pointer",opacity:.9}):y;return p.a.createElement(n,{onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1,active:!1})},onMouseDown:function(){return e.setState({active:!0})},onMouseUp:function(){return e.setState({active:!1})},onClick:this.signOut,style:b,type:o,disabled:f,className:r},[l&&p.a.createElement(d,{key:1,active:this.state.active}),p.a.createElement(h,{icon:l,key:2},c||a)])}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(e.prototype,t),e;var t}();v.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var m=v;n.d(t,"default",(function(){return b})),n.d(t,"GoogleLogin",(function(){return b})),n.d(t,"GoogleLogout",(function(){return m}))}]))},215:function(e,t,n){"use strict";var o=n(4),r=n(8),i=n(86),a=n.n(i),c=n(0),s=n.n(c),u=n(87),l=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.variant,c=e.animation,l=e.size,f=e.children,p=e.as,d=void 0===p?"div":p,h=e.className,y=Object(r.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),g=(n=Object(u.b)(n,"spinner"))+"-"+c;return s.a.createElement(d,Object(o.a)({ref:t},y,{className:a()(h,g,l&&g+"-"+l,i&&"text-"+i)}),f)}));l.displayName="Spinner",t.a=l}}]);
//# sourceMappingURL=29.fc70a00f.chunk.js.map
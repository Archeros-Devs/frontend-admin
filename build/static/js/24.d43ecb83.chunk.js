(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[24],{103:function(e,t,a){"use strict";var l=a(4),r=a(8),n=a(86),c=a.n(n),s=a(0),o=a.n(s),m=a(87),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.as,d=void 0===s?"div":s,i=Object(r.a)(e,["bsPrefix","className","as"]),E=Object(m.b)(a,"col"),b=[],p=[];return u.forEach((function(e){var t,a,l,r=i[e];if(delete i[e],null!=r&&"object"===typeof r){var n=r.span;t=void 0===n||n,a=r.offset,l=r.order}else t=r;var c="xs"!==e?"-"+e:"";null!=t&&b.push(!0===t?""+E+c:""+E+c+"-"+t),null!=l&&p.push("order"+c+"-"+l),null!=a&&p.push("offset"+c+"-"+a)})),b.length||b.push(E),o.a.createElement(d,Object(l.a)({},i,{ref:t,className:c.a.apply(void 0,[n].concat(b,p))}))}));d.displayName="Col",t.a=d},108:function(e,t,a){"use strict";var l=a(4),r=a(8),n=a(86),c=a.n(n),s=a(0),o=a.n(s),m=a(87),u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.noGutters,s=e.as,u=void 0===s?"div":s,d=e.className,i=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),E=Object(m.b)(a,"row");return o.a.createElement(u,Object(l.a)({ref:t},i,{className:c()(d,E,n&&"no-gutters")}))}));u.defaultProps={noGutters:!1},t.a=u},109:function(e,t,a){"use strict";var l=a(4),r=a(8),n=a(86),c=a.n(n),s=a(0),o=a.n(s),m=a(87),u=a(101),d=function(e){return o.a.forwardRef((function(t,a){return o.a.createElement("div",Object(l.a)({},t,{ref:a,className:c()(t.className,e)}))}))},i=a(99),E=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,i=Object(r.a)(e,["bsPrefix","className","variant","as"]),E=Object(m.b)(a,"card-img");return o.a.createElement(d,Object(l.a)({ref:t,className:c()(s?E+"-"+s:E,n)},i))}));E.displayName="CardImg",E.defaultProps={variant:null};var b=E,p=d("h5"),f=d("h6"),h=Object(u.a)("card-body"),v=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,u=e.bg,d=e.text,E=e.border,b=e.body,p=e.children,f=e.as,v=void 0===f?"div":f,O=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(m.b)(a,"card"),N=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return o.a.createElement(i.a.Provider,{value:N},o.a.createElement(v,Object(l.a)({ref:t},O,{className:c()(n,j,u&&"bg-"+u,d&&"text-"+d,E&&"border-"+E)}),b?o.a.createElement(h,null,p):p))}));v.displayName="Card",v.defaultProps={body:!1},v.Img=b,v.Title=Object(u.a)("card-title",{Component:p}),v.Subtitle=Object(u.a)("card-subtitle",{Component:f}),v.Body=h,v.Link=Object(u.a)("card-link",{Component:"a"}),v.Text=Object(u.a)("card-text",{Component:"p"}),v.Header=Object(u.a)("card-header"),v.Footer=Object(u.a)("card-footer"),v.ImgOverlay=Object(u.a)("card-img-overlay");t.a=v},173:function(e,t,a){"use strict";var l=a(4),r=a(8),n=a(15),c=a(86),s=a.n(c),o=a(0),m=a.n(o),u=a(87),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,n=e.striped,c=e.bordered,o=e.borderless,u=e.hover,d=e.size,i=e.variant,E=e.responsive,b=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=s()(t,a,i&&t+"-"+i,d&&t+"-"+d,n&&t+"-striped",c&&t+"-bordered",o&&t+"-borderless",u&&t+"-hover"),f=m.a.createElement("table",Object(l.a)({},b,{className:p}));if(E){var h=t+"-responsive";return"string"===typeof E&&(h=h+"-"+E),m.a.createElement("div",{className:h},f)}return f},t}(m.a.Component);t.a=Object(u.a)(d,"table")},261:function(e,t,a){"use strict";a.r(t);var l=a(10),r=a(11),n=a(13),c=a(12),s=a(14),o=a(0),m=a.n(o),u=a(108),d=a(103),i=a(109),E=a(173),b=a(26),p=function(e){function t(){return Object(l.a)(this,t),Object(n.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(b.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(i.a,null,m.a.createElement(i.a.Header,null,m.a.createElement(i.a.Title,{as:"h5"},"Basic Table"),m.a.createElement("span",{className:"d-block m-t-5"},"use bootstrap ",m.a.createElement("code",null,"Table")," component")),m.a.createElement(i.a.Body,null,m.a.createElement(E.a,{responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"Username"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Mark"),m.a.createElement("td",null,"Otto"),m.a.createElement("td",null,"@mdo")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Jacob"),m.a.createElement("td",null,"Thornton"),m.a.createElement("td",null,"@fat")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Larry"),m.a.createElement("td",null,"the Bird"),m.a.createElement("td",null,"@twitter")))))),m.a.createElement(i.a,null,m.a.createElement(i.a.Header,null,m.a.createElement(i.a.Title,{as:"h5"},"Hover Table"),m.a.createElement("span",{className:"d-block m-t-5"},"use props ",m.a.createElement("code",null,"hover")," with ",m.a.createElement("code",null,"Table")," component")),m.a.createElement(i.a.Body,null,m.a.createElement(E.a,{responsive:!0,hover:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"Username"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Mark"),m.a.createElement("td",null,"Otto"),m.a.createElement("td",null,"@mdo")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Jacob"),m.a.createElement("td",null,"Thornton"),m.a.createElement("td",null,"@fat")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Larry"),m.a.createElement("td",null,"the Bird"),m.a.createElement("td",null,"@twitter")))))),m.a.createElement(i.a,null,m.a.createElement(i.a.Header,null,m.a.createElement(i.a.Title,{as:"h5"},"Striped Table"),m.a.createElement("span",{className:"d-block m-t-5"},"use props ",m.a.createElement("code",null,"striped")," with ",m.a.createElement("code",null,"Table")," component")),m.a.createElement(i.a.Body,null,m.a.createElement(E.a,{striped:!0,responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"Username"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Mark"),m.a.createElement("td",null,"Otto"),m.a.createElement("td",null,"@mdo")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Jacob"),m.a.createElement("td",null,"Thornton"),m.a.createElement("td",null,"@fat")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Larry"),m.a.createElement("td",null,"the Bird"),m.a.createElement("td",null,"@twitter")))))))))}}]),t}(m.a.Component);t.default=p},99:function(e,t,a){"use strict";var l=a(0),r=a.n(l);t.a=r.a.createContext(null)}}]);
//# sourceMappingURL=24.d43ecb83.chunk.js.map
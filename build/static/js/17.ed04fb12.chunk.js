(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[17],{104:function(e,a,t){"use strict";var n=t(30),r=t.n(n),s=t(21);a.a=function(){var e=s.b.getState().auth.token;return r.a.create({headers:{Authorization:"Bearer ".concat(e)},baseURL:"localhost"===document.location.hostname?"http://localhost:21086/":"http://peruibemelhor.nodejs7605.kinghost.net:21086/"})}},150:function(e,a,t){"use strict";var n=t(4),r=t(8),s=t(15),l=t(86),o=t.n(l),i=t(0),c=t.n(i),d=t(87),u=function(e){function a(){return e.apply(this,arguments)||this}return Object(s.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.className,s=e.striped,l=e.bordered,i=e.borderless,d=e.hover,u=e.size,m=e.variant,p=e.responsive,h=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=o()(a,t,m&&a+"-"+m,u&&a+"-"+u,s&&a+"-striped",l&&a+"-bordered",i&&a+"-borderless",d&&a+"-hover"),g=c.a.createElement("table",Object(n.a)({},h,{className:f}));if(p){var v=a+"-responsive";return"string"===typeof p&&(v=v+"-"+p),c.a.createElement("div",{className:v},g)}return g},a}(c.a.Component);a.a=Object(d.a)(u,"table")},152:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(10),r=t(11),s=t(14),l=t(12),o=t(13),i=t(0),c=t.n(i),d=t(171),u=t(294),m=(t(174),function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).state={photoIndex:0,isOpen:!1,images:t.props.images},t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.photoIndex,n=a.isOpen,r=this.props,s=r.images,l=r.alt;return c.a.createElement("div",null,c.a.createElement("div",{className:"img-container",style:{cursor:"pointer"}},s&&s.map((function(a,t){return c.a.createElement(u.a,{className:"img",style:e.props.imgStyle,src:a,alt:"".concat(l,"#").concat(t),key:t,onClick:function(){return e.setState({isOpen:!0,photoIndex:t})},roundedCircle:e.props.roundedCircle})}))),n&&c.a.createElement(d.a,{reactModalStyle:{overlay:{zIndex:9999}},mainSrc:s[t],nextSrc:s.length>1&&s[(t+1)%s.length],prevSrc:s.length>1&&s[(t+s.length-1)%s.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(t+s.length-1)%s.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(t+1)%s.length})}}))}}]),a}(i.Component))},254:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t(11),s=t(14),l=t(12),o=t(13),i=t(0),c=t.n(i),d=t(97),u=t(93),m=t(150),p=t(240),h=t(26),f=t(91),g=t(152),v=(t(130),t(104)),E=t(108),b=t.n(E),N=t(123),C=t.n(N),y=(t(255),function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).state={usuarios:[],loading:!1},t.usuarios=function(){Object(v.a)().get("/usuarios").then((function(e){console.log(e.data),e.data.retorno&&t.setState({usuarios:e.data.usuarios})})).catch((function(e){console.error(e)}))},t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.usuarios()}},{key:"render",value:function(){var e=this.state,a=e.loading,t=e.usuarios;return c.a.createElement(h.a,null,c.a.createElement(d.a,null,c.a.createElement(u.a,null,c.a.createElement(f.a,{className:"card",title:"Usu\xe1rios",bodyClass:"px-0 py-0",isOption:!0,fullscreen:!0,reload:!0,pagination:{itemsCountPerPage:5,totalItemsCount:2},loading:a,cardHeaderRight:c.a.createElement("a",{href:"/usuarios/novo"},c.a.createElement("i",{className:"fa fa-plus f-20 m-r-15"}))},c.a.createElement("div",null,c.a.createElement(m.a,{responsive:!0,hover:!0,style:{marginBottom:0}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),c.a.createElement("th",null,"Nome"),c.a.createElement("th",null,"Escolaridade"),c.a.createElement("th",null,"Profiss\xe3o"),c.a.createElement("th",null,"Ativo"))),c.a.createElement("tbody",null,t.map((function(e,a){return c.a.createElement("tr",{className:"unread",key:e.id_pasta},c.a.createElement("td",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("div",{style:{width:50}},c.a.createElement(g.a,{images:[e.img||("M"===e.sexo?b.a:C.a)],displayIndex:0,alt:"Imagem do Usu\xe1rio",imgStyle:{width:50},roundedCircle:!0}))),c.a.createElement("td",{style:{textAlign:"left"}},c.a.createElement("h6",{className:"mb-1"},c.a.createElement("a",{href:"/usuarios/".concat(e.id_pasta),className:"f-12"},e.nome+"  ",e.tipo_usuario>0&&c.a.createElement(p.a,{variant:"secondary"},1===e.tipo_usuario?"Admin":"Super Admin"))),c.a.createElement("p",{className:"m-0"},e.email)),c.a.createElement("td",{style:{textAlign:"left"}},c.a.createElement("p",{className:"m-0"},e.escolaridade)),c.a.createElement("td",null,c.a.createElement("p",{className:"m-0"},e.id_profissao)),c.a.createElement("td",null,c.a.createElement("h6",{className:"text-muted"},c.a.createElement("i",{className:"fa fa-circle f-10 m-r-15",style:{color:e.ativo?"#1ede1e":"cray"}}))))})),!t.length&&c.a.createElement("tr",{className:"unread"},c.a.createElement("td",{colSpan:"4"},c.a.createElement("span",null,"Tente novamente mais tarde ou tente recarregar a p\xe1gina"))))))))))}}]),a}(i.Component));a.default=y},255:function(e,a,t){},91:function(e,a,t){"use strict";var n=t(20),r=t(10),s=t(11),l=t(14),o=t(12),i=t(13),c=t(0),d=t.n(c),u=t(159),m=t(112),p=t(293),h=t(96),f=t.n(h),g=t(26),v=t(89),E=t(94),b=t.n(E);t(92);var N=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={isOption:t.props.isOption,fullCard:!1,collapseCard:!1,loadCard:t.props.loading,cardRemove:!1,activePage:1},t.componentWillReceiveProps=function(e){t.state.loadCard!==e.loading&&t.setState({loadCard:e.loading})},t.cardReloadHandler=function(){t.props.onCardReload&&t.props.onCardReload(),t.setState({loadCard:!0}),setInterval((function(){t.setState({loadCard:!1})}),3e3)},t.cardRemoveHandler=function(){t.setState({cardRemove:!0})},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"handlePageChange",value:function(e){e!==this.state.activePage&&(this.props.onPageChange&&this.props.onPageChange(e),this.setState({activePage:e}))}},{key:"render",value:function(){var e,a,t,r,s,l=this,o=[this.props.className];return this.state.isOption&&(t=this.props.cardHeaderRight?d.a.createElement("div",{style:{right:10,display:"inline-block",float:"right",padding:0,position:"absolute"}},this.props.cardHeaderRight):d.a.createElement("div",{className:"card-header-right"},d.a.createElement(u.a,{alignRight:!0,className:"btn-group card-option"},d.a.createElement(u.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},d.a.createElement("i",{className:"feather icon-more-horizontal"})),d.a.createElement(u.a.Menu,{as:"ul",className:"list-unstyled card-option"},this.props.fullscreen&&d.a.createElement(u.a.Item,{as:"li",className:"dropdown-item",onClick:function(){l.setState((function(e){return{fullCard:!e.fullCard}}))}},d.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),d.a.createElement("a",{href:v.a.BLANK_LINK}," ",this.state.fullCard?"Restaurar":"Maximizar"," ")),this.props.expand&&d.a.createElement(u.a.Item,{as:"li",className:"dropdown-item",onClick:function(){l.setState((function(e){return{collapseCard:!e.collapseCard}}))}},d.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),d.a.createElement("a",{href:v.a.BLANK_LINK}," ",this.state.collapseCard?"Expandir":"Diminuir"," ")),this.props.reload&&d.a.createElement(u.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},d.a.createElement("i",{className:"feather icon-refresh-cw"}),d.a.createElement("a",{href:v.a.BLANK_LINK}," Recarregar ")),this.props.excludable&&d.a.createElement(u.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},d.a.createElement("i",{className:"feather icon-trash"}),d.a.createElement("a",{href:v.a.BLANK_LINK}," Excluir ")))))),r=d.a.createElement(m.a.Header,null,d.a.createElement(m.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(o=[].concat(Object(n.a)(o),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(o=[].concat(Object(n.a)(o),["card-load"]),a=d.a.createElement("div",{className:"card-loader"},d.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(o=[].concat(Object(n.a)(o),["d-none"])),this.props.cardClass&&(o=[].concat(Object(n.a)(o),[this.props.cardClass])),s=d.a.createElement(m.a,{className:o.join(" "),style:e},r,d.a.createElement(p.a,{in:!this.state.collapseCard},d.a.createElement("div",null,d.a.createElement(m.a.Body,{className:this.props.bodyClass},this.props.children),this.props.pagination&&d.a.createElement(m.a.Footer,{style:{padding:0,paddingLeft:"1em",paddingRight:"1em",paddingTop:"1em",display:"flex",justifyContent:"flex-end"}},d.a.createElement(b.a,{activePage:this.state.activePage,itemsCountPerPage:this.props.pagination.itemsCountPerPage,totalItemsCount:this.props.pagination.totalItemsCount,pageRangeDisplayed:5,onChange:function(e){return l.handlePageChange(e)}})))),a),d.a.createElement(g.a,null,s)}}]),a}(c.Component);a.a=f()(N)},92:function(e,a,t){},93:function(e,a,t){"use strict";var n=t(4),r=t(8),s=t(86),l=t.n(s),o=t(0),i=t.n(o),c=t(87),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,u=void 0===o?"div":o,m=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(c.b)(t,"col"),h=[],f=[];return d.forEach((function(e){var a,t,n,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var s=r.span;a=void 0===s||s,t=r.offset,n=r.order}else a=r;var l="xs"!==e?"-"+e:"";null!=a&&h.push(!0===a?""+p+l:""+p+l+"-"+a),null!=n&&f.push("order"+l+"-"+n),null!=t&&f.push("offset"+l+"-"+t)})),h.length||h.push(p),i.a.createElement(u,Object(n.a)({},m,{ref:a,className:l.a.apply(void 0,[s].concat(h,f))}))}));u.displayName="Col",a.a=u},97:function(e,a,t){"use strict";var n=t(4),r=t(8),s=t(86),l=t.n(s),o=t(0),i=t.n(o),c=t(87),d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.noGutters,o=e.as,d=void 0===o?"div":o,u=e.className,m=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(c.b)(t,"row");return i.a.createElement(d,Object(n.a)({ref:a},m,{className:l()(u,p,s&&"no-gutters")}))}));d.defaultProps={noGutters:!1},a.a=d}}]);
//# sourceMappingURL=17.ed04fb12.chunk.js.map
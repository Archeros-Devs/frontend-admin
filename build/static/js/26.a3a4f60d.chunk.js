(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[26],{239:function(e,a,t){},293:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t(11),o=t(13),l=t(12),s=t(14),c=t(0),i=t.n(c),p=t(97),d=t(93),m=t(26),u=t(17),h=t(114),g=t.n(h),f=t(116),b=t(129),v=t(240),E=(t(217),t(91)),C=(t(89),t(99)),y=t(119),O=t.n(y);t(106),t(238),t(239);function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(t,!0).forEach((function(a){Object(u.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var w=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={pasta_homologar:[],loading:!0,currentPage:1,total:1,limite:10},t.getPastaUnauthorized=Object(f.a)(g.a.mark((function e(){var a,n,r=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:1,t.setState({loading:!0}),e.prev=2,e.next=5,Object(C.a)().get("pastas/homologar?page=".concat(a,"&limite=").concat(t.state.limite));case 5:(n=e.sent).data.retorno?(t.setState({pasta_homologar:n.data.pastas,total:n.data.total,loading:!1},t.forceUpdate()),console.log(n.data.pastas)):console.log(n.data.msg),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),t.avaliar=function(){var e=Object(f.a)(g.a.mark((function e(a,n){var r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.state.pasta_homologar),e.prev=1,e.next=4,Object(C.a)().put("/pastas/".concat(a,"/avaliar"),{avaliacao:n});case 4:(r=e.sent).data.retorno?(o=(o=t.state.pasta_homologar).map((function(e){return e.id_pasta===a?N({},e,{avaliacao:n}):e})),t.setState({pasta_homologar:o})):console.log(r.data.msg),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getPastaUnauthorized()}},{key:"render",value:function(){var e=this,a=this.state,t=a.total,n=a.limite,r=a.loading;return i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(E.a,{className:"card",title:"Pastas para Homologa\xe7\xe3o",bodyClass:"px-0 py-0",isOption:!0,fullscreen:!0,reload:!0,pagination:{itemsCountPerPage:n,totalItemsCount:t},loading:r,onCardReload:this.getPastaUnauthorized,onPageChange:function(a){return e.getPastaUnauthorized(a)}},i.a.createElement("div",null,i.a.createElement(b.a,{responsive:!0,hover:!0,style:{marginBottom:0}},i.a.createElement("tbody",null,this.state.pasta_homologar.map((function(a,t){return i.a.createElement("tr",{className:"unread",key:a.id_pasta},i.a.createElement("td",{style:{textAlign:"left"}},i.a.createElement("h6",{className:"mb-1"},i.a.createElement("a",{href:"/admin/pasta/".concat(a.id_pasta),className:"f-12"},a.nome,"  ",i.a.createElement(v.a,{variant:"secondary"},a.categoria))),i.a.createElement("p",{className:"m-0"},a.discussao)),i.a.createElement("td",null,i.a.createElement("h6",{className:"text-muted"},i.a.createElement("i",{className:"fa fa-circle text-c-yellow f-10 m-r-15"}),O()(a.data_criacao).format("DD/MM/Y"))),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(){return e.avaliar(a.id_pasta,1)},style:N({},-1===a.avaliacao||null===a.avaliacao?{background:"white"}:{}),className:"btn-peruibe btn btn-secondary btn-success text-black "},"Aprovar"),i.a.createElement("button",{onClick:function(){return e.avaliar(a.id_pasta,-1)},style:N({},1===a.avaliacao||null===a.avaliacao?{background:"white"}:{}),className:"btn-peruibe btn btn-secondary btn-danger text-black "},"Reprovar")))})),!this.state.pasta_homologar.length&&i.a.createElement("tr",{className:"unread"},i.a.createElement("td",{colspan:"4"},i.a.createElement("span",null,"Tente novamente mais tarde ou tente recarregar a p\xe1gina"))))))))))}}]),a}(c.Component),P=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(w,null))))}}]),a}(c.Component);a.default=P},91:function(e,a,t){"use strict";var n=t(20),r=t(10),o=t(11),l=t(13),s=t(12),c=t(14),i=t(0),p=t.n(i),d=t(159),m=t(111),u=t(297),h=t(95),g=t.n(h),f=t(26),b=t(89),v=t(94),E=t.n(v);t(92);var C=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).state={isOption:t.props.isOption,fullCard:!1,collapseCard:!1,loadCard:t.props.loading,cardRemove:!1,activePage:1},t.componentWillReceiveProps=function(e){t.state.loadCard!==e.loading&&t.setState({loadCard:e.loading})},t.cardReloadHandler=function(){t.props.onCardReload&&t.props.onCardReload(),t.setState({loadCard:!0}),setInterval((function(){t.setState({loadCard:!1})}),3e3)},t.cardRemoveHandler=function(){t.setState({cardRemove:!0})},t}return Object(c.a)(a,e),Object(o.a)(a,[{key:"handlePageChange",value:function(e){e!==this.state.activePage&&(this.props.onPageChange&&this.props.onPageChange(e),this.setState({activePage:e}))}},{key:"render",value:function(){var e,a,t,r,o,l=this,s=[this.props.className];return this.state.isOption&&(t=this.props.cardHeaderRight?p.a.createElement("div",{style:{right:10,display:"inline-block",float:"right",padding:0,position:"absolute"}},this.props.cardHeaderRight):p.a.createElement("div",{className:"card-header-right"},p.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},p.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},p.a.createElement("i",{className:"feather icon-more-horizontal"})),p.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},this.props.fullscreen&&p.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){l.setState((function(e){return{fullCard:!e.fullCard}}))}},p.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),p.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.fullCard?"Restaurar":"Maximizar"," ")),this.props.expand&&p.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){l.setState((function(e){return{collapseCard:!e.collapseCard}}))}},p.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),p.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.collapseCard?"Expandir":"Diminuir"," ")),this.props.reload&&p.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},p.a.createElement("i",{className:"feather icon-refresh-cw"}),p.a.createElement("a",{href:b.a.BLANK_LINK}," Recarregar ")),this.props.excludable&&p.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},p.a.createElement("i",{className:"feather icon-trash"}),p.a.createElement("a",{href:b.a.BLANK_LINK}," Excluir ")))))),r=p.a.createElement(m.a.Header,null,p.a.createElement(m.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(s=[].concat(Object(n.a)(s),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(s=[].concat(Object(n.a)(s),["card-load"]),a=p.a.createElement("div",{className:"card-loader"},p.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(s=[].concat(Object(n.a)(s),["d-none"])),this.props.cardClass&&(s=[].concat(Object(n.a)(s),[this.props.cardClass])),o=p.a.createElement(m.a,{className:s.join(" "),style:e},r,p.a.createElement(u.a,{in:!this.state.collapseCard},p.a.createElement("div",null,p.a.createElement(m.a.Body,{className:this.props.bodyClass},this.props.children),this.props.pagination&&p.a.createElement(m.a.Footer,{style:{padding:0,paddingLeft:"1em",paddingRight:"1em",paddingTop:"1em",display:"flex",justifyContent:"flex-end"}},p.a.createElement(E.a,{activePage:this.state.activePage,itemsCountPerPage:this.props.pagination.itemsCountPerPage,totalItemsCount:this.props.pagination.totalItemsCount,pageRangeDisplayed:5,onChange:function(e){return l.handlePageChange(e)}})))),a),p.a.createElement(f.a,null,o)}}]),a}(i.Component);a.a=g()(C)},92:function(e,a,t){},99:function(e,a,t){"use strict";var n=t(30),r=t.n(n),o=t(21);a.a=function(){var e=o.b.getState().auth.token;return r.a.create({headers:{Authorization:"Bearer ".concat(e)},baseURL:"localhost"===document.location.hostname?"http://localhost:21086/":"http://peruibemelhor.nodejs7605.kinghost.net:21086/"})}}}]);
//# sourceMappingURL=26.a3a4f60d.chunk.js.map
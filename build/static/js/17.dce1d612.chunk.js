(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[17],{139:function(e,a,t){"use strict";var n=t(10),r=t(11),l=t(13),c=t(12),i=t(14),s=t(0),o=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.text;return e.charAt(0).toUpperCase()+e.slice(1)}}]),a}(t.n(s).a.Component);a.a=o},236:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t(11),l=t(13),c=t(12),i=t(14),s=t(0),o=t.n(s),m=t(151),d=t(4),u=t(8),h=t(86),p=t.n(h),E=t(87),f=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,r=e.pill,l=e.className,c=Object(u.a)(e,["bsPrefix","variant","pill","className"]),i=Object(E.b)(t,"badge");return o.a.createElement("span",Object(d.a)({ref:a},c,{className:p()(l,i,r&&i+"-pill",n&&i+"-"+n)}))}));f.displayName="Badge",f.defaultProps={pill:!1};var N=f,b=t(98),v=t(95),C=t(26),w=t(96),O=t(139),g=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=["primary","secondary","success","danger","warning","info","light","dark"].map((function(e,a){return o.a.createElement(m.a,{key:a,variant:e},o.a.createElement(O.a,{text:e}),o.a.createElement(N,{variant:"light",className:"ml-1"},"4"))}));return o.a.createElement(C.a,null,o.a.createElement(b.a,null,o.a.createElement(v.a,null,o.a.createElement(w.a,{title:"Basic Badges"},o.a.createElement("h1",null,"Example heading ",o.a.createElement(N,{variant:"secondary"},"New")),o.a.createElement("h2",null,"Example heading ",o.a.createElement(N,{variant:"secondary"},"New")),o.a.createElement("h3",null,"Example heading ",o.a.createElement(N,{variant:"secondary"},"New")),o.a.createElement("h4",null,"Example heading ",o.a.createElement(N,{variant:"secondary"},"New")),o.a.createElement("h5",null,"Example heading ",o.a.createElement(N,{variant:"secondary"},"New")),o.a.createElement("h6",null,"Example heading ",o.a.createElement(N,{variant:"secondary"},"New"))),o.a.createElement(w.a,{title:"Button Badges"},e))))}}]),a}(s.Component);a.default=g},96:function(e,a,t){"use strict";var n=t(20),r=t(10),l=t(11),c=t(13),i=t(12),s=t(14),o=t(0),m=t.n(o),d=t(143),u=t(99),h=t(241),p=t(94),E=t.n(p),f=t(26),N=t(88),b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={isOption:t.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},t.cardReloadHandler=function(){t.setState({loadCard:!0}),setInterval((function(){t.setState({loadCard:!1})}),3e3)},t.cardRemoveHandler=function(){t.setState({cardRemove:!0})},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e,a,t,r,l,c=this,i=[];return this.state.isOption&&(t=m.a.createElement("div",{className:"card-header-right"},m.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},m.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},m.a.createElement("i",{className:"feather icon-more-horizontal"})),m.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){c.setState((function(e){return{fullCard:!e.fullCard}}))}},m.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),m.a.createElement("a",{href:N.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){c.setState((function(e){return{collapseCard:!e.collapseCard}}))}},m.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),m.a.createElement("a",{href:N.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},m.a.createElement("i",{className:"feather icon-refresh-cw"}),m.a.createElement("a",{href:N.a.BLANK_LINK}," Reload ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},m.a.createElement("i",{className:"feather icon-trash"}),m.a.createElement("a",{href:N.a.BLANK_LINK}," Remove ")))))),r=m.a.createElement(u.a.Header,null,m.a.createElement(u.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(i=[].concat(Object(n.a)(i),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(i=[].concat(Object(n.a)(i),["card-load"]),a=m.a.createElement("div",{className:"card-loader"},m.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(i=[].concat(Object(n.a)(i),["d-none"])),this.props.cardClass&&(i=[].concat(Object(n.a)(i),[this.props.cardClass])),l=m.a.createElement(u.a,{className:i.join(" "),style:e},r,m.a.createElement(h.a,{in:!this.state.collapseCard},m.a.createElement("div",null,m.a.createElement(u.a.Body,null,this.props.children))),a),m.a.createElement(f.a,null,l)}}]),a}(o.Component);a.a=E()(b)}}]);
//# sourceMappingURL=17.dce1d612.chunk.js.map
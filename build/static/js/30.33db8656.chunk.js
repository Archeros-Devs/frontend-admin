(window["webpackJsonpperuibe-melhor"]=window["webpackJsonpperuibe-melhor"]||[]).push([[30],{257:function(e,a,t){"use strict";t.r(a);var n=t(20),r=t(10),i=t(11),c=t(14),l=t(12),o=t(13),s=t(0),u=t.n(s),m=t(97),d=t(95),h=t(109),f=t(119),p=t(290),b=t(26),E=t(89),g=function(e){function a(){var e,t;Object(r.a)(this,a);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).state={isBasic:!1,isMultiTarget:[],accordionKey:1},t.targetHandler=function(e){t.state.isMultiTarget.some((function(a){return a===e}))?t.setState((function(a){return{isMultiTarget:a.isMultiTarget.filter((function(a){return a!==e}))}})):t.setState((function(a){return{isMultiTarget:[].concat(Object(n.a)(a.isMultiTarget),[e])}}))},t.multiTargetHandler=function(){["target1","target2"].map((function(e){return t.targetHandler(e),!1}))},t}return Object(o.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.isBasic,n=a.isMultiTarget,r=a.accordionKey;return u.a.createElement(b.a,null,u.a.createElement(m.a,null,u.a.createElement(d.a,{sm:12},u.a.createElement("h5",null,"Basic Collapse"),u.a.createElement("hr",null),u.a.createElement(h.a,null,u.a.createElement(h.a.Header,null,u.a.createElement(f.a,{href:E.a.BLANK_LINK,onClick:function(){return e.setState({isBasic:!t})},"aria-controls":"basic-collapse","aria-expanded":t},"Collapse Link"),u.a.createElement(f.a,{onClick:function(){return e.setState({isBasic:!t})}},"Collapse Button")),u.a.createElement(p.a,{in:this.state.isBasic},u.a.createElement("div",{id:"basic-collapse"},u.a.createElement(h.a.Body,null,u.a.createElement(h.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))))),u.a.createElement(d.a,{sm:12},u.a.createElement("h5",null,"Multiple Targets"),u.a.createElement("hr",null),u.a.createElement(f.a,{onClick:function(){return e.targetHandler("target1")},"aria-controls":"target1","aria-expanded":n.some((function(e){return"target1"===e}))},"Toggle first element"),u.a.createElement(f.a,{onClick:function(){return e.targetHandler("target2")},"aria-controls":"target2","aria-expanded":n.some((function(e){return"target2"===e}))},"Toggle second element"),u.a.createElement(f.a,{onClick:this.multiTargetHandler},"Toggle both elements"),u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement(h.a,{className:"mt-2"},u.a.createElement(p.a,{in:n.some((function(e){return"target1"===e}))},u.a.createElement("div",{id:"target1"},u.a.createElement(h.a.Header,{as:"h5"},"First Element"),u.a.createElement(h.a.Body,null,u.a.createElement(h.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))))),u.a.createElement(d.a,null,u.a.createElement(h.a,{className:"mt-2"},u.a.createElement(p.a,{in:n.some((function(e){return"target2"===e}))},u.a.createElement("div",{id:"target2"},u.a.createElement(h.a.Header,{as:"h5"},"Second Element"),u.a.createElement(h.a.Body,null,u.a.createElement(h.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))))))),u.a.createElement(d.a,{sm:12,className:"accordion"},u.a.createElement("h5",null,"Accordion Example"),u.a.createElement("hr",null),u.a.createElement(h.a,{className:"mt-2"},u.a.createElement(h.a.Header,null,u.a.createElement(h.a.Title,{as:"h5"},u.a.createElement("a",{href:E.a.BLANK_LINK,onClick:function(){return e.setState({accordionKey:1!==r?1:0})},"aria-controls":"accordion1","aria-expanded":1===r},"Collapsible Group Item #1"))),u.a.createElement(p.a,{in:1===this.state.accordionKey},u.a.createElement("div",{id:"accordion1"},u.a.createElement(h.a.Body,null,u.a.createElement(h.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))))),u.a.createElement(h.a,{className:"mt-2"},u.a.createElement(h.a.Header,null,u.a.createElement(h.a.Title,{as:"h5"},u.a.createElement("a",{href:E.a.BLANK_LINK,onClick:function(){return e.setState({accordionKey:2!==r?2:0})},"aria-controls":"accordion2","aria-expanded":2===r},"Collapsible Group Item #2"))),u.a.createElement(p.a,{in:2===this.state.accordionKey},u.a.createElement("div",{id:"accordion2"},u.a.createElement(h.a.Body,null,u.a.createElement(h.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))))),u.a.createElement(h.a,{className:"mt-2"},u.a.createElement(h.a.Header,null,u.a.createElement(h.a.Title,{as:"h5"},u.a.createElement("a",{href:E.a.BLANK_LINK,onClick:function(){return e.setState({accordionKey:3!==r?3:0})},"aria-controls":"accordion3","aria-expanded":3===r},"Collapsible Group Item #3"))),u.a.createElement(p.a,{in:3===this.state.accordionKey},u.a.createElement("div",{id:"accordion3"},u.a.createElement(h.a.Body,null,u.a.createElement(h.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))))))))}}]),a}(s.Component);a.default=g},95:function(e,a,t){"use strict";var n=t(4),r=t(8),i=t(86),c=t.n(i),l=t(0),o=t.n(l),s=t(87),u=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,l=e.as,m=void 0===l?"div":l,d=Object(r.a)(e,["bsPrefix","className","as"]),h=Object(s.b)(t,"col"),f=[],p=[];return u.forEach((function(e){var a,t,n,r=d[e];if(delete d[e],null!=r&&"object"===typeof r){var i=r.span;a=void 0===i||i,t=r.offset,n=r.order}else a=r;var c="xs"!==e?"-"+e:"";null!=a&&f.push(!0===a?""+h+c:""+h+c+"-"+a),null!=n&&p.push("order"+c+"-"+n),null!=t&&p.push("offset"+c+"-"+t)})),f.length||f.push(h),o.a.createElement(m,Object(n.a)({},d,{ref:a,className:c.a.apply(void 0,[i].concat(f,p))}))}));m.displayName="Col",a.a=m},97:function(e,a,t){"use strict";var n=t(4),r=t(8),i=t(86),c=t.n(i),l=t(0),o=t.n(l),s=t(87),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.noGutters,l=e.as,u=void 0===l?"div":l,m=e.className,d=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),h=Object(s.b)(t,"row");return o.a.createElement(u,Object(n.a)({ref:a},d,{className:c()(m,h,i&&"no-gutters")}))}));u.defaultProps={noGutters:!1},a.a=u}}]);
//# sourceMappingURL=30.33db8656.chunk.js.map
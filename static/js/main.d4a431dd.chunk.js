(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5434:function(e,t,n){e.exports=n(5590)},5588:function(e,t,n){},5590:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),c=n(34),s=n(130),l=n(5592),u=n(5591),h=n(27),d=n(17),p=n(76),m={heroesList:null,searchHero:null},b=Object(h.c)({heroesData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"heroesList":return Object(p.a)({},e,{heroesList:t.payload});case"searchHero":return Object(p.a)({},e,{searchHero:t.payload});default:return e}}}),g=n(20),f=n(21),v=n(24),w=n(22),O=n(23),E=n(5593),j=n(40),y=n(131),k=n(26),L=n(9),D=n(53),C=n(33),x=n(132),N=n(5594),S=n(134),_=n(133),A=n.n(_);function H(){var e=Object(y.a)(["\n    text-decoration: none;\n    color: inherit;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]);return H=function(){return e},e}var R=Object(S.a)(N.a)(H()),I=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(v.a)(this,Object(w.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;n.setState({value:t},function(){n.changeSearch(t)})},n.toggleDrawer=function(e){n.setState({drawer:e})},n.state={drawer:!1,pathname:null},n.changeSearch=Object(x.debounce)(n.props.searchHeroesAction,250),n.handleActive=n.handleActive.bind(Object(j.a)(Object(j.a)(n))),n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"handleActive",value:function(e,t){this.setState(function(e){if(e.pathname!==t.pathname)return{pathname:t.pathname}})}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.pathname;return console.log(n),r.a.createElement("div",{className:t.root},r.a.createElement(L.a,{position:"static",color:"primary"},r.a.createElement(L.o,null,r.a.createElement(L.j,{className:t.menuButton,color:"inherit","aria-label":"Open drawer",onClick:function(){return e.toggleDrawer(!0)}},r.a.createElement(D.b,null)),r.a.createElement(L.p,{variant:"h6",color:"inherit"},"Dota 2"),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(D.c,null)),r.a.createElement(L.k,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(t){return e.handleChange(t)}})))),r.a.createElement(L.n,{open:this.state.drawer,onClose:function(){return e.toggleDrawer(!1)},onOpen:function(){return e.toggleDrawer(!0)}},r.a.createElement(L.l,null,r.a.createElement(L.m,{button:!0,tabIndex:0,onClick:function(){return e.toggleDrawer(!1)},onKeyDown:function(){return e.toggleDrawer(!1)},style:{height:"auto",padding:"20px"}},r.a.createElement(D.a,null))),r.a.createElement(L.e,null),r.a.createElement("div",{className:t.list},r.a.createElement(L.l,null,r.a.createElement(R,{to:"/",isActive:this.handleActive},r.a.createElement(L.m,{button:!0,selected:"/"===n},"Normal View")),r.a.createElement(L.e,null),r.a.createElement(R,{to:"/carouselView",isActive:this.handleActive},r.a.createElement(L.m,{button:!0,selected:"/carouselView"===n},"Carousel View"))))))}}]),t}(r.a.Component),B=Object(c.b)(null,{searchHeroesAction:function(e){return function(t){t({type:"searchHero",payload:e})}}})(Object(d.withStyles)(function(e){var t;return{root:{width:"100%"},grow:{flexGrow:1},list:{width:300},menuButton:{marginLeft:-12,marginRight:20},title:Object(k.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(k.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("xs"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:(t={paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:9*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},Object(k.a)(t,e.breakpoints.up("xs"),{width:0,"&:focus":{width:100}}),Object(k.a)(t,e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),t)}})(I)),V=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(v.a)(this,Object(w.a)(t).call(this))).state={width:"",cols:""},e}return Object(O.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"updateDimensions",value:function(){var e,t=window.innerWidth;e=t<=425?2:t<=768?5:t<=1024?8:10,this.setState({width:t,cols:e})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.heroesList,a=this.state.cols;return r.a.createElement("div",null,r.a.createElement(L.f,{className:t.grid},n&&r.a.createElement(L.g,{cellHeight:150,cols:a},n.map(function(e){return r.a.createElement(L.h,{key:e.id},r.a.createElement(L.b,{className:t.card},r.a.createElement(L.c,null,r.a.createElement(L.d,{className:t.media,image:"http://cdn.dota2.com/apps/dota2/images/heroes/".concat(e.name.split("npc_dota_hero_")[1].concat("_vert.jpg")),title:"Contemplative Reptile"})),r.a.createElement(L.i,{title:e.localized_name,classes:{root:t.titleBar,title:t.title}})))}))))}}]),t}(a.Component),T=Object(d.withStyles)(function(e){return{card:{},media:{height:150},title:{color:"white"},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},grid:Object(k.a)({padding:20},e.breakpoints.down("xs"),{padding:10})}})(V),M=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(v.a)(this,Object(w.a)(t).call(this,e))).state={heroesList:null},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.getHeroesListAction()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.handleUpdate()}},{key:"handleUpdate",value:function(){var e=this.props,t=e.heroesList,n=e.searchHero;n&&(t=t.filter(function(e){return e.localized_name.match(new RegExp(n,"i"))})),this.setState({heroesList:t})}},{key:"render",value:function(){var e=this.state.heroesList;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(T,{heroesList:e}))}}]),t}(a.Component),U=Object(c.b)(function(e){var t=e.heroesData;return{heroesList:t.heroesList,searchHero:t.searchHero}},{getHeroesListAction:function(){return function(e){A()({method:"GET",url:"".concat("https://api.opendota.com/api","/heroes")}).then(function(t){var n=t.data;e({type:"heroesList",payload:n})})}}})(M),W=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"404 not found")}}]),t}(a.Component),z=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,null))}}]),t}(a.Component),G=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:U}),r.a.createElement(u.a,{exact:!0,path:"/carouselView",component:z}),r.a.createElement(u.a,{component:W}))}}]),t}(a.Component);n(5588),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,P=Object(h.e)(b,{},J(Object(h.a)(s.a))),X=Object(d.createMuiTheme)({typography:{useNextVariants:!0,suppressDeprecationWarnings:!0}}),F=document.getElementById("root"),K=r.a.createElement(d.MuiThemeProvider,{theme:X},r.a.createElement(c.a,{store:P},r.a.createElement(l.a,{basename:"/dota2-react"},r.a.createElement(u.a,{component:G}))));o.a.render(K,F),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5434,2,1]]]);
//# sourceMappingURL=main.d4a431dd.chunk.js.map
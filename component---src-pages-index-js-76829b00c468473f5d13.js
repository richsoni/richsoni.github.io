(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{133:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=a(194),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("section",{className:i.half,style:this.props.style},this.props.children)},t}(l.a.Component),c=a(136),m=a(195),u=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:u.a.container},l.a.createElement("div",{className:u.a.list},l.a.createElement("h1",{style:{color:"#000"}},"Join My Mailing List,"),l.a.createElement("h3",{style:{color:"#000"}},"Because I would like you to join my mailing list"),l.a.createElement(c.a,{href:"http://richsoni.com/subscribe",service:"envelope"},l.a.createElement("span",{style:{marginLeft:10}},"Sign Up"))))},t}(l.a.Component),f=(a(66),a(196)),d=a.n(f),h=function(e){var t=e.release;return t.frontmatter.links.bandcamp?l.a.createElement("a",{style:{color:"#fff",textDecoration:"none"},href:t.frontmatter.links.bandcamp},l.a.createElement("h2",{className:d.a.rounded},l.a.createElement("i",{className:"fa fa-headphones"})," Purchase On Bandcamp!")):l.a.createElement("div",null)},y=function(e){var t=e.release;return t.frontmatter.links.itunes?l.a.createElement("a",{className:d.a.rounded,href:t.frontmatter.links.itunes},l.a.createElement("i",{className:"fa fa-apple"})," iTunes"):l.a.createElement("div",null)},v=function(e){var t=e.release;return t.frontmatter.links.amazon?l.a.createElement("a",{className:d.a.rounded,href:t.frontmatter.links.amazon},l.a.createElement("i",{className:"fa fa-amazon"})," Amazon"):l.a.createElement("div",null)},E=function(e){var t=e.release;return t.frontmatter.links.spotify?l.a.createElement("iframe",{src:"https://embed.spotify.com/?uri=spotify%3Aalbum%3A"+function(e){return e.frontmatter.links.spotify?e.frontmatter.links.spotify.match(/[^\/]*$/)[0]:null}(t),width:"300",height:"380",frameBorder:"0",allowtransparency:"true"}):l.a.createElement("div",null)},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.edges.map(function(e){return e.node}).filter(function(e){return"live-archive"!=e.frontmatter.release_type})[0];return e.id?l.a.createElement(s,{style:{backgroundImage:"url('/images/releases/"+e.fields.basename+".png')",backgroundPosition:"bottom center",backgroundColor:"#12002F",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},l.a.createElement("div",{className:d.a.containerStyle},l.a.createElement("div",{className:d.a.leftStyle},l.a.createElement("h1",{style:{backgroundColor:"#ffffff",padding:2,textAlign:"center",color:"#000000"}},e.title," Available Now!!!"),l.a.createElement("br",null),l.a.createElement(h,{release:e}),l.a.createElement("br",null),l.a.createElement("div",{style:{marginTop:"1em",marginBottom:"1em",textAlign:"center"}},l.a.createElement(y,{release:e}),l.a.createElement(v,{release:e}))),l.a.createElement("div",{className:d.a.rightStyle},l.a.createElement(E,{release:e})))):l.a.createElement("div",null)},t}(l.a.Component),b=a(149);a.d(t,"default",function(){return N}),a.d(t,"query",function(){return k});var N=function(e){function t(){var t;return(t=e.call(this)||this).state={},t}return r()(t,e),t.prototype.render=function(){return l.a.createElement(b.a,null,l.a.createElement("div",null,l.a.createElement(s,{style:{backgroundImage:"url(/images/stv1bgt.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat",padding:"1em 0",backgroundPosition:"center"}},l.a.createElement(p,null)),l.a.createElement(g,{data:this.props.data.albums})))},t}(l.a.Component),k="2227653598"},136:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=a(46),s=a.n(i),c=a(142),m=a.n(c),u=a(137),p=a.n(u),f=a(4),d=a.n(f),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("li",{className:m.a.container+" "+p.a.hoverDim,style:s()({listStyle:"none"},this.props.style)},l.a.createElement("a",{title:this.props.service,href:this.props.href,className:m.a.a},l.a.createElement("i",{className:"fa fa-"+this.props.service}),l.a.createElement("span",null,this.props.children)))},t}(l.a.Component);h.propTypes={service:d.a.string,href:d.a.string,style:d.a.object},h.defaultProps={style:{}}},137:function(e,t,a){e.exports={hoverDim:"hoverDim-module--hoverDim--EcLTo"}},138:function(e,t,a){e.exports={pulse:"pulse-module--pulse--39LUu"}},141:function(e,t,a){e.exports={overlay:"style-module--overlay--1V03_",navItem:"style-module--navItem--2GWv0",social:"style-module--social--2prH_",copyright:"style-module--copyright--2y2Le"}},142:function(e,t,a){e.exports={container:"style-module--container--329_2",a:"style-module--a--2DIBw"}},143:function(e,t,a){e.exports={header:"index-module--header--26jGI",navItem:"index-module--navItem--xT14K",navItemsContainer:"index-module--navItemsContainer--16JWs",socialButtonsContainer:"index-module--socialButtonsContainer--3JFos"}},144:function(e,t,a){e.exports={container:"index-module--container--2wPjm",logo200:"index-module--logo200--3qSh9"}},145:function(e,t,a){e.exports={container:"index-module--container--1ecKf"}},146:function(e,t,a){e.exports={footer:"style-module--footer--lKfPg",social:"style-module--social--3LW7h",copyright:"style-module--copyright--3OONF"}},147:function(e,t,a){e.exports=a.p+"static/favicon-d0042f69c36c282112e8a2e58576013c.png"},148:function(e,t,a){e.exports={site:"index-module--site--JpZyE",content:"index-module--content--3q0HM"}},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(6),l=a.n(o),i=a(140),s=a(141),c=a.n(s),m=[{url:"/posts",title:"Posts"},{url:"/albums",title:"Albums"},{url:"/songs",title:"Songs"},{url:"/events",title:"Events"}],u=[{service:"spotify",href:"https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O"},{service:"soundcloud",href:"https://soundcloud.com/richsoni"},{service:"play",href:"https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q"},{service:"twitter",href:"https://twitter.com/richsoni"},{service:"facebook",href:"https://www.facebook.com/richsonimusic/"},{service:"github",href:"https://github.com/richsoni"},{service:"envelope",href:"http://richsoni.com/subscribe",value:" Sign Up"}],p=a(136),f=u.map(function(e){return r.a.createElement(p.a,{key:e.service,service:e.service,href:e.href},e.value||"")}),d=m.map(function(e){return r.a.createElement("a",{key:e.url,className:c.a.navItem,href:e.url},e.title)}),h=function(e){return e.display?r.a.createElement("div",{className:c.a.overlay},d,r.a.createElement("div",{className:c.a.social},f),r.a.createElement("div",{className:c.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC")):r.a.createElement("div",null)},y=a(143),v=a.n(y),E=a(144),g=a.n(E),b=a(138),N=a(46),k=function(e){return r.a.createElement("div",{className:g.a.container,style:N({},e.style||{})},r.a.createElement("a",{style:{textDecoration:"none"},className:b.pulse,href:"/"},r.a.createElement("div",{className:g.a.logo200})))},x=a(4),w=a.n(x),S=a(145),C=a.n(S),I="white",z=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.onToggle,a=e.toggleState;return r.a.createElement("a",{className:C.a.container,onClick:t},r.a.createElement("span",{className:"fa-stack fa-lg "+b.pulse},r.a.createElement("i",{style:{color:"black"},className:"fa fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fa fa-reorder fa-stack-1x",style:{color:I,transitionProperty:"font-size",transitionDuration:".5s",fontSize:a?0:"1em"}}),r.a.createElement("i",{className:"fa fa-close fa-stack-1x",style:{color:I,transitionProperty:"font-size",transitionDuration:".5s",fontSize:a?"1em":0}})))},t}(r.a.Component);z.propTypes={onToggle:w.a.func},z.deafultProps={onToggle:function(){}};var T=a(137),D=a.n(T),B=u.map(function(e){return r.a.createElement(p.a,{key:e.href,service:e.service,href:e.href},e.value||"")}),L=m.map(function(e){return r.a.createElement("div",{key:e.url,className:D.a.hoverDim},r.a.createElement("a",{className:v.a.navItem,href:e.url},e.title))}),P=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.showNavMenu;return r.a.createElement("header",{className:v.a.header},r.a.createElement("div",{style:{}},r.a.createElement("nav",{style:{right:e?80:-1e4},className:""+v.a.navItemsContainer},L),r.a.createElement("nav",{style:{right:e?-1e4:64},className:""+v.a.socialButtonsContainer},B)))},t}(r.a.Component),q=function(e){function t(t){var a;return(a=e.call(this)||this).state={toggleState:!1},a}l()(t,e);var a=t.prototype;return a.render=function(){var e=this.state.toggleState;return r.a.createElement("div",null,r.a.createElement(i.a,{query:{maxWidth:1018}},r.a.createElement(h,{display:e})),r.a.createElement(i.a,{query:{minWidth:1018}},r.a.createElement(P,{showNavMenu:e})),r.a.createElement(k,{style:{position:"fixed"}}),r.a.createElement(z,{toggleState:e,onToggle:this.onToggle.bind(this)}))},a.onToggle=function(){this.setState({toggleState:!this.state.toggleState})},t}(r.a.Component),A={display:"block",width:"100%",height:70},W={display:"block",width:"100%",height:0},j=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{query:{maxWidth:1018}},r.a.createElement("div",{style:A})),r.a.createElement(i.a,{query:{minWidth:1018}},r.a.createElement("div",{style:W})))},t}(r.a.Component),F=a(146),J=a.n(F),R=u.map(function(e){return r.a.createElement(p.a,{service:e.service,href:e.href,key:e.href,style:{marginBottom:"none !important"}},e.value||"")}),M=function(){return r.a.createElement("div",{className:J.a.footer},r.a.createElement("div",{className:J.a.social},R),r.a.createElement("div",{className:J.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC"))},O=a(153),H=a.n(O),K=a(147),_=function(){return r.a.createElement(H.a,null,r.a.createElement("link",{rel:"icon",type:"image/png",href:K}),r.a.createElement("meta",{name:"viewport",content:"initial-scale=1"}),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}),r.a.createElement("meta",{property:"og:type",content:"website"}))},G=a(148),U=a.n(G);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:U.a.site},r.a.createElement(_,null),r.a.createElement(q,null),r.a.createElement(j,null),r.a.createElement("div",{className:U.a.content},t),r.a.createElement(M,null))}},194:function(e,t,a){e.exports={half:"styles-module--half--1B89Q"}},195:function(e,t,a){e.exports={container:"styles-module--container--1oBRz",list:"styles-module--list--1OXW0"}},196:function(e,t,a){e.exports={rounded:"styles-module--rounded--EwttY",containerStyle:"styles-module--containerStyle--2P57d",leftStyle:"styles-module--leftStyle--25tLI",rightStyle:"styles-module--rightStyle--Eca3s"}}}]);
//# sourceMappingURL=component---src-pages-index-js-76829b00c468473f5d13.js.map
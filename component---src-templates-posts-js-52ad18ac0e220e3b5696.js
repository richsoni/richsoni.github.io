(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),o=(a(163),a(162),a(153)),l=a.n(o),s=a(141),i=a(137);t.default=function(e){var t=e.data.markdownRemark,a=new l.a(t.fields.date).format("MM/DD/YYYY");return r.a.createElement(s.a,null,r.a.createElement("div",{className:"blog-post"},r.a.createElement("div",{className:"post-heading"},r.a.createElement(i.b,null,r.a.createElement(i.a,{href:"/posts"},"Posts"),r.a.createElement(i.a,null,t.frontmatter.title)),r.a.createElement("div",{style:{fontStyle:"italic",marginBottom:"1em"}},"Posted ",a))),r.a.createElement("div",{style:{backgroundImage:"url("+t.frontmatter.hero+")",width:"100%",height:t.frontmatter.hero?"280px":0,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),r.a.createElement("div",{className:"blog-post-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var c="958738761"},136:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(6),r=a.n(n),o=a(0),l=a.n(o),s=a(46),i=a.n(s),c=a(143),m=a.n(c),u=a(138),p=a.n(u),f=a(4),d=a.n(f),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("li",{className:m.a.container+" "+p.a.hoverDim,style:i()({listStyle:"none"},this.props.style)},l.a.createElement("a",{title:this.props.service,href:this.props.href,className:m.a.a},l.a.createElement("i",{className:"fa fa-"+this.props.service}),l.a.createElement("span",null,this.props.children)))},t}(l.a.Component);h.propTypes={service:d.a.string,href:d.a.string,style:d.a.object},h.defaultProps={style:{}}},137:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i});var n=a(0),r=a.n(n),o=a(152),l=a.n(o),s=function(e){return e.href?r.a.createElement("a",{className:l.a.breadcrumb,href:e.href},e.children):r.a.createElement("span",{className:l.a.breadcrumb},e.children)},i=function(e){return r.a.createElement("section",{className:l.a.breadcrumbs},e.children)}},138:function(e,t,a){e.exports={hoverDim:"hoverDim-module--hoverDim--EcLTo"}},139:function(e,t,a){e.exports={pulse:"pulse-module--pulse--39LUu"}},141:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(151),l=a.n(o),s=a(150);t.a=function(e){return r.a.createElement(s.a,null,r.a.createElement("article",{className:l.a.article},e.children))}},142:function(e,t,a){e.exports={overlay:"style-module--overlay--1V03_",navItem:"style-module--navItem--2GWv0",social:"style-module--social--2prH_",copyright:"style-module--copyright--2y2Le"}},143:function(e,t,a){e.exports={container:"style-module--container--329_2",a:"style-module--a--2DIBw"}},144:function(e,t,a){e.exports={header:"index-module--header--26jGI",navItem:"index-module--navItem--xT14K",navItemsContainer:"index-module--navItemsContainer--16JWs",socialButtonsContainer:"index-module--socialButtonsContainer--3JFos"}},145:function(e,t,a){e.exports={container:"index-module--container--2wPjm",logo200:"index-module--logo200--3qSh9"}},146:function(e,t,a){e.exports={container:"index-module--container--1ecKf"}},147:function(e,t,a){e.exports={footer:"style-module--footer--lKfPg",social:"style-module--social--3LW7h",copyright:"style-module--copyright--3OONF"}},148:function(e,t,a){e.exports=a.p+"static/favicon-d0042f69c36c282112e8a2e58576013c.png"},149:function(e,t,a){e.exports={site:"index-module--site--JpZyE",content:"index-module--content--3q0HM"}},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(6),l=a.n(o),s=a(140),i=a(142),c=a.n(i),m=[{url:"/posts",title:"Posts"},{url:"/albums",title:"Albums"},{url:"/songs",title:"Songs"},{url:"/events",title:"Events"}],u=[{service:"spotify",href:"https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O"},{service:"soundcloud",href:"https://soundcloud.com/richsoni"},{service:"play",href:"https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q"},{service:"twitter",href:"https://twitter.com/richsoni"},{service:"facebook",href:"https://www.facebook.com/richsonimusic/"},{service:"github",href:"https://github.com/richsoni"},{service:"envelope",href:"http://richsoni.com/subscribe",value:" Sign Up"}],p=a(136),f=u.map(function(e){return r.a.createElement(p.a,{key:e.service,service:e.service,href:e.href},e.value||"")}),d=m.map(function(e){return r.a.createElement("a",{key:e.url,className:c.a.navItem,href:e.url},e.title)}),h=function(e){return e.display?r.a.createElement("div",{className:c.a.overlay},d,r.a.createElement("div",{className:c.a.social},f),r.a.createElement("div",{className:c.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC")):r.a.createElement("div",null)},v=a(144),y=a.n(v),E=a(145),g=a.n(E),b=a(139),x=a(46),w=function(e){return r.a.createElement("div",{className:g.a.container,style:x({},e.style||{})},r.a.createElement("a",{style:{textDecoration:"none"},className:b.pulse,href:"/"},r.a.createElement("div",{className:g.a.logo200})))},N=a(4),k=a.n(N),S=a(146),C=a.n(S),D="white",I=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.onToggle,a=e.toggleState;return r.a.createElement("a",{className:C.a.container,onClick:t},r.a.createElement("span",{className:"fa-stack fa-lg "+b.pulse},r.a.createElement("i",{style:{color:"black"},className:"fa fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fa fa-reorder fa-stack-1x",style:{color:D,transitionProperty:"font-size",transitionDuration:".5s",fontSize:a?0:"1em"}}),r.a.createElement("i",{className:"fa fa-close fa-stack-1x",style:{color:D,transitionProperty:"font-size",transitionDuration:".5s",fontSize:a?"1em":0}})))},t}(r.a.Component);I.propTypes={onToggle:k.a.func},I.deafultProps={onToggle:function(){}};var T=a(138),P=a.n(T),L=u.map(function(e){return r.a.createElement(p.a,{key:e.href,service:e.service,href:e.href},e.value||"")}),q=m.map(function(e){return r.a.createElement("div",{key:e.url,className:P.a.hoverDim},r.a.createElement("a",{className:y.a.navItem,href:e.url},e.title))}),z=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.showNavMenu;return r.a.createElement("header",{className:y.a.header},r.a.createElement("div",{style:{}},r.a.createElement("nav",{style:{right:e?80:-1e4},className:""+y.a.navItemsContainer},q),r.a.createElement("nav",{style:{right:e?-1e4:64},className:""+y.a.socialButtonsContainer},L)))},t}(r.a.Component),W=function(e){function t(t){var a;return(a=e.call(this)||this).state={toggleState:!1},a}l()(t,e);var a=t.prototype;return a.render=function(){var e=this.state.toggleState;return r.a.createElement("div",null,r.a.createElement(s.a,{query:{maxWidth:1018}},r.a.createElement(h,{display:e})),r.a.createElement(s.a,{query:{minWidth:1018}},r.a.createElement(z,{showNavMenu:e})),r.a.createElement(w,{style:{position:"fixed"}}),r.a.createElement(I,{toggleState:e,onToggle:this.onToggle.bind(this)}))},a.onToggle=function(){this.setState({toggleState:!this.state.toggleState})},t}(r.a.Component),B={display:"block",width:"100%",height:70},F={display:"block",width:"100%",height:0},H=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(s.a,{query:{maxWidth:1018}},r.a.createElement("div",{style:B})),r.a.createElement(s.a,{query:{minWidth:1018}},r.a.createElement("div",{style:F})))},t}(r.a.Component),M=a(147),Y=a.n(M),j=u.map(function(e){return r.a.createElement(p.a,{service:e.service,href:e.href,key:e.href,style:{marginBottom:"none !important"}},e.value||"")}),G=function(){return r.a.createElement("div",{className:Y.a.footer},r.a.createElement("div",{className:Y.a.social},j),r.a.createElement("div",{className:Y.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC"))},J=a(154),O=a.n(J),R=a(148),_=a.n(R),K=function(){return r.a.createElement(O.a,null,r.a.createElement("link",{rel:"icon",type:"image/png",href:_.a}),r.a.createElement("meta",{name:"viewport",content:"initial-scale=1"}),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}),r.a.createElement("meta",{property:"og:type",content:"website"}))},A=a(149),U=a.n(A);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:U.a.site},r.a.createElement(K,null),r.a.createElement(W,null),r.a.createElement(H,null),r.a.createElement("div",{className:U.a.content},t),r.a.createElement(G,null))}},151:function(e,t,a){e.exports={article:"style-module--article--3TXyA"}},152:function(e,t,a){e.exports={breadcrumbs:"style-module--breadcrumbs--1rmGG",breadcrumb:"style-module--breadcrumb--O0EDF"}},162:function(e,t,a){e.exports={wrapper:"style-module--wrapper--aOfU0",artwork:"style-module--artwork--2ufHx"}},163:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-posts-js-52ad18ac0e220e3b5696.js.map
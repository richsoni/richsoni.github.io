(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E}),n.d(t,"query",function(){return b});var a=n(6),r=n.n(a),o=n(0),i=n.n(o),l=n(155),s=n.n(l),c=n(173),u=n.n(c),m=n(150),d=n(139),p=function(e){return i.a.createElement("div",{className:u.a.controlBar},e.children)},f=function(e){var t=e.active,n=e.onClick,a={stackClass:"fa-stack "+u.a.inactiveStack+" pulse inactive",onClick:n,iconBG:"#fff",iconFG:"#7b7b7b"};return t&&(a={stackClass:"fa-stack",onClick:function(){},iconFG:"#fff",iconBG:"#7b7b7b"}),i.a.createElement("span",{className:a.stackClass,onClick:a.onClick},i.a.createElement("i",{style:{color:a.iconBG},className:"fa fa-circle fa-stack-2x"}),i.a.createElement("i",{style:{color:a.iconFG},className:"fa "+e.className+" fa-stack-1x fa-inverse"}))},h={preview:"preview",grid:"grid",list:"list"},v=function(e){var t=e.post;return i.a.createElement(s.a,{to:t.fields.url,style:{background:"none",marginTop:"1em",textShadow:"none",paddingBottom:"1em",width:250,height:"21em",display:"block"}},i.a.createElement("div",{key:t.id,style:{display:"block",color:"#000",textDecoration:"none",backgroundImage:"url("+t.frontmatter.hero+")",height:280,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundColor:"#bebebe"}}),i.a.createElement("h1",{style:{marginTop:".4em",marginBottom:".4em",fontSize:"1em"}},t.frontmatter.title))},y=function(e){var t,n=e.post;return i.a.createElement(s.a,{to:n.fields.url,style:(t={alignItems:"center",borderTop:"1px solid black",textDecoration:"none",backgroundImage:"none",display:"flex",width:"100%"},t.textDecoration="none",t.color="inherit",t)},i.a.createElement("div",{style:{minWidth:"250px",width:"250px"}},n.frontmatter.date),i.a.createElement("div",null,n.frontmatter.title))},g=function(e){var t=e.post;return i.a.createElement("div",null,i.a.createElement(s.a,{to:t.fields.url,style:{textDecoration:"none"}},i.a.createElement("span",{style:{fontSize:"1.5em"}},t.frontmatter.title)),i.a.createElement("div",null,i.a.createElement("i",null,"Posted ",t.frontmatter.date)),i.a.createElement("p",null,t.excerpt," ",i.a.createElement(s.a,{to:t.fields.url},"Read More")))},E=function(e){function t(){var t;return(t=e.call(this)||this).state={activeControlName:h.preview},t}r()(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.props.data,n=this.state.activeControlName;return i.a.createElement(m.a,null,i.a.createElement(d.b,null,i.a.createElement(d.a,null,"Posts")),i.a.createElement("section",{className:u.a.postList},i.a.createElement(p,null,i.a.createElement("h4",null,"Latest"),i.a.createElement("div",null,i.a.createElement(f,{className:"fa-align-justify",active:h.preview===n,onClick:function(){return e.onControlClick(h.preview)}}),i.a.createElement(f,{className:"fa-th",active:h.grid===n,onClick:function(){return e.onControlClick(h.grid)}}),i.a.createElement(f,{className:"fa-list-ul",active:h.list===n,onClick:function(){return e.onControlClick(h.list)}}))),i.a.createElement("div",{style:{marginTop:"1em",display:"flex",flexFlow:"row wrap",justifyContent:"space-between"}},t.allMarkdownRemark.edges.map(function(e){var t=e.node;switch(n){case h.preview:return i.a.createElement(g,{key:t.id,post:t});case h.grid:return i.a.createElement(v,{key:t.id,post:t});case h.list:return i.a.createElement(y,{key:t.id,post:t})}}))))},n.onControlClick=function(e){this.setState({activeControlName:e})},t}(i.a.Component),b="3443501018"},136:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(6),r=n.n(a),o=n(0),i=n.n(o),l=n(46),s=n.n(l),c=n(142),u=n.n(c),m=n(137),d=n.n(m),p=n(4),f=n.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("li",{className:u.a.container+" "+d.a.hoverDim,style:s()({listStyle:"none"},this.props.style)},i.a.createElement("a",{title:this.props.service,href:this.props.href,className:u.a.a},i.a.createElement("i",{className:"fa fa-"+this.props.service}),i.a.createElement("span",null,this.props.children)))},t}(i.a.Component);h.propTypes={service:f.a.string,href:f.a.string,style:f.a.object},h.defaultProps={style:{}}},137:function(e,t,n){e.exports={hoverDim:"hoverDim-module--hoverDim--EcLTo"}},138:function(e,t,n){e.exports={pulse:"pulse-module--pulse--39LUu"}},139:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),o=n(152),i=function(e){return e.href?r.a.createElement("a",{className:o.breadcrumb,href:e.href},e.children):r.a.createElement("span",{className:o.breadcrumb},e.children)},l=function(e){return r.a.createElement("section",{className:o.breadcrumbs},e.children)}},141:function(e,t,n){e.exports={overlay:"style-module--overlay--1V03_",navItem:"style-module--navItem--2GWv0",social:"style-module--social--2prH_",copyright:"style-module--copyright--2y2Le"}},142:function(e,t,n){e.exports={container:"style-module--container--329_2",a:"style-module--a--2DIBw"}},143:function(e,t,n){e.exports={header:"index-module--header--26jGI",navItem:"index-module--navItem--xT14K",navItemsContainer:"index-module--navItemsContainer--16JWs",socialButtonsContainer:"index-module--socialButtonsContainer--3JFos"}},144:function(e,t,n){e.exports={container:"index-module--container--2wPjm",logo200:"index-module--logo200--3qSh9"}},145:function(e,t,n){e.exports={container:"index-module--container--1ecKf"}},146:function(e,t,n){e.exports={footer:"style-module--footer--lKfPg",social:"style-module--social--3LW7h",copyright:"style-module--copyright--3OONF"}},147:function(e,t,n){e.exports=n.p+"static/favicon-d0042f69c36c282112e8a2e58576013c.png"},148:function(e,t,n){e.exports={site:"index-module--site--JpZyE",content:"index-module--content--3q0HM"}},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(6),i=n.n(o),l=n(140),s=n(141),c=n.n(s),u=[{url:"/posts",title:"Posts"},{url:"/albums",title:"Albums"},{url:"/songs",title:"Songs"},{url:"/events",title:"Events"}],m=[{service:"spotify",href:"https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O"},{service:"soundcloud",href:"https://soundcloud.com/richsoni"},{service:"play",href:"https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q"},{service:"twitter",href:"https://twitter.com/richsoni"},{service:"facebook",href:"https://www.facebook.com/richsonimusic/"},{service:"github",href:"https://github.com/richsoni"},{service:"envelope",href:"http://richsoni.com/subscribe",value:" Sign Up"}],d=n(136),p=m.map(function(e){return r.a.createElement(d.a,{key:e.service,service:e.service,href:e.href},e.value||"")}),f=u.map(function(e){return r.a.createElement("a",{key:e.url,className:c.a.navItem,href:e.url},e.title)}),h=function(e){return e.display?r.a.createElement("div",{className:c.a.overlay},f,r.a.createElement("div",{className:c.a.social},p),r.a.createElement("div",{className:c.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC")):r.a.createElement("div",null)},v=n(143),y=n.n(v),g=n(144),E=n.n(g),b=n(138),w=n(46),k=function(e){return r.a.createElement("div",{className:E.a.container,style:w({},e.style||{})},r.a.createElement("a",{style:{textDecoration:"none"},className:b.pulse,href:"/"},r.a.createElement("div",{className:E.a.logo200})))},x=n(4),C=n.n(x),N=n(145),S=n.n(N),P="white",T=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.onToggle,n=e.toggleState;return r.a.createElement("a",{className:S.a.container,onClick:t},r.a.createElement("span",{className:"fa-stack fa-lg "+b.pulse},r.a.createElement("i",{style:{color:"black"},className:"fa fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fa fa-reorder fa-stack-1x",style:{color:P,transitionProperty:"font-size",transitionDuration:".5s",fontSize:n?0:"1em"}}),r.a.createElement("i",{className:"fa fa-close fa-stack-1x",style:{color:P,transitionProperty:"font-size",transitionDuration:".5s",fontSize:n?"1em":0}})))},t}(r.a.Component);T.propTypes={onToggle:C.a.func},T.deafultProps={onToggle:function(){}};var _=n(137),R=n.n(_),q=m.map(function(e){return r.a.createElement(d.a,{key:e.href,service:e.service,href:e.href},e.value||"")}),I=u.map(function(e){return r.a.createElement("div",{key:e.url,className:R.a.hoverDim},r.a.createElement("a",{className:y.a.navItem,href:e.url},e.title))}),D=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.showNavMenu;return r.a.createElement("header",{className:y.a.header},r.a.createElement("div",{style:{}},r.a.createElement("nav",{style:{right:e?80:-1e4},className:""+y.a.navItemsContainer},I),r.a.createElement("nav",{style:{right:e?-1e4:64},className:""+y.a.socialButtonsContainer},q)))},t}(r.a.Component),G=function(e){function t(t){var n;return(n=e.call(this)||this).state={toggleState:!1},n}i()(t,e);var n=t.prototype;return n.render=function(){var e=this.state.toggleState;return r.a.createElement("div",null,r.a.createElement(l.a,{query:{maxWidth:1018}},r.a.createElement(h,{display:e})),r.a.createElement(l.a,{query:{minWidth:1018}},r.a.createElement(D,{showNavMenu:e})),r.a.createElement(k,{style:{position:"fixed"}}),r.a.createElement(T,{toggleState:e,onToggle:this.onToggle.bind(this)}))},n.onToggle=function(){this.setState({toggleState:!this.state.toggleState})},t}(r.a.Component),O={display:"block",width:"100%",height:70},j={display:"block",width:"100%",height:0},L=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{query:{maxWidth:1018}},r.a.createElement("div",{style:O})),r.a.createElement(l.a,{query:{minWidth:1018}},r.a.createElement("div",{style:j})))},t}(r.a.Component),B=n(146),F=n.n(B),M=m.map(function(e){return r.a.createElement(d.a,{service:e.service,href:e.href,key:e.href,style:{marginBottom:"none !important"}},e.value||"")}),z=function(){return r.a.createElement("div",{className:F.a.footer},r.a.createElement("div",{className:F.a.social},M),r.a.createElement("div",{className:F.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC"))},K=n(153),W=n.n(K),J=n(147),U=function(){return r.a.createElement(W.a,null,r.a.createElement("link",{rel:"icon",type:"image/png",href:J}),r.a.createElement("meta",{name:"viewport",content:"initial-scale=1"}),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}),r.a.createElement("meta",{property:"og:type",content:"website"}))},H=n(148),A=n.n(H);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:A.a.site},r.a.createElement(U,null),r.a.createElement(G,null),r.a.createElement(L,null),r.a.createElement("div",{className:A.a.content},t),r.a.createElement(z,null))}},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(151),i=n.n(o),l=n(149);t.a=function(e){return r.a.createElement(l.a,null,r.a.createElement("article",{className:i.a.article},e.children))}},151:function(e,t,n){e.exports={article:"style-module--article--3TXyA"}},152:function(e,t,n){e.exports={breadcrumbs:"style-module--breadcrumbs--1rmGG",breadcrumb:"style-module--breadcrumb--O0EDF"}},155:function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(197)),o=a(n(198)),i=a(n(6)),l=a(n(48)),s=a(n(49)),c=a(n(4)),u=a(n(0)),m=n(19),d=n(199);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return u.default.createElement(m.Link,(0,o.default)({to:v,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:c,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,o.default)({},f,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var y=function(e,t){window.___navigate(p(e),t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},173:function(e,t,n){e.exports={container:"style-module--container--1TCtv",postList:"style-module--postList--vdNE9",inactiveStack:"style-module--inactiveStack--4vnsy",controlBar:"style-module--controlBar--1D8nb"}},176:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},197:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},198:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},199:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(155),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(176),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var m=n(43);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},200:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(61),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-posts-js-eddefd9d82ea40bdb402.js.map
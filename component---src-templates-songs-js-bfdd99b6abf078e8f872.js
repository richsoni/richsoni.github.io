webpackJsonp([37754599366489],{246:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n(2),r=l(a),u=n(52),d=(l(u),n(16)),m=l(d),f=n(61),o=n(19),s=l(o),c=n(18);t.default=function(e){var t=e.data,n=t.song,l=(new m.default(n.fields.composedAt).format("MM/DD/YYYY"),(0,f.eventsWithSong)(t.events,n.fields.basename)),a=f.eventsWithSong.length>0?"Performed Live: "+l.length+" "+(1===l.length?"time":"times"):"";return r.default.createElement(s.default,null,r.default.createElement(c.Breadcrumbs,null,r.default.createElement(c.Breadcrumb,{href:"/songs"},"Songs"),r.default.createElement(c.Breadcrumb,null,n.frontmatter.title)),a,r.default.createElement("div",{style:{marginTop:"2em"},dangerouslySetInnerHTML:{__html:n.html}}),r.default.createElement("h3",null,"Comments"))};t.query="** extracted graphql fragment **"},52:function(e,t){}});
//# sourceMappingURL=component---src-templates-songs-js-bfdd99b6abf078e8f872.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{135:function(t,e,n){"use strict";n.r(e);n(165);var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=(n(163),n(162),n(153),n(141)),c=n(137),u=(n(167),n(156)),l=n(168),d=function(t){var e=[t.name,t.address.address_1,t.address.address_2,t.address.region,t.address.locality+" "+t.address.postal_code].join(", ");return s.a.createElement("iframe",{width:"600",height:"450",frameBorder:"0",style:{border:"0"},src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyCsl3C4pA6XgLeeFxghq3UkAIMs8kUt57A&q="+e,allowFullScreen:!0})},f=(n(166),n(190)),m=n.n(f),p=function(t){var e="https://archive.org/embed/"+t.data.frontmatter.links.archiveID+"&playlist=1";return s.a.createElement("div",null,s.a.createElement("h1",{className:m.a.title},t.data.frontmatter.title),s.a.createElement("iframe",{src:e,width:"500",height:"1000",frameBorder:"0"}))};n.d(e,"default",function(){return h}),n.d(e,"query",function(){return v});var h=function(t){function e(){return t.apply(this,arguments)||this}a()(e,t);var n=e.prototype;return n.render=function(){var t=this.props.data,e=t.event,n=(t.locations,this.location());return s.a.createElement(o.a,null,s.a.createElement(c.b,null,s.a.createElement(c.a,{href:"/events"},"Events"),s.a.createElement(c.a,null,e.fields.date),s.a.createElement(c.a,null,n.name)),s.a.createElement("h2",null,s.a.createElement("a",{target:"_blank",href:n.website},n.name)),s.a.createElement(l.a,{tabs:this.tabs()}))},n.location=function(){var t=this.props.data,e=t.event,n=t.locations;return Object(u.c)(n)[e.fields.notdate]},n.tabs=function(){var t=this.props.data.event,e=[];t.frontmatter.publish_notes&&(e=e.concat([{content:this.notes.bind(this),title:"Notes"}])),e=e.concat([{content:this.map.bind(this),title:"Map"}]);var n=t.frontmatter.setlist;return n&&n.length&&(e=e.concat([{content:this.setlist.bind(this),title:"Setlist"}])),t.frontmatter.links&&(e=e.concat([{content:this.links.bind(this),title:"Links & Media"}])),e},n.map=function(){var t=this.location();return s.a.createElement(d,t)},n.links=function(){var t=this.props.data,e=t.event,n=t.albums,r=e.frontmatter.links.album,a=Object(u.c)(n)[r];return s.a.createElement(p,{data:a})},n.notes=function(){var t=this.props.data.event;return s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})},n.setlist=function(){var t=this.props.data,e=t.event,n=t.songs,r=Object(u.c)(n);return s.a.createElement("div",null,s.a.createElement("h2",null,"Setlist"),s.a.createElement("ol",null,e.frontmatter.setlist.map(function(t){var e=r[t];return e||console.error(t," is not a song"),s.a.createElement("li",{key:e.fields.basename},s.a.createElement("a",{href:e.fields.url},e.frontmatter.title))})))},e}(s.a.Component),v="561451833"},156:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i});n(28),n(157),n(158);var r=function(t,e){return function(t){return t.edges.map(function(t){return t.node}).filter(function(t){return t.frontmatter.setlist})}(t).reduce(function(t,e){return(e.frontmatter.setlist||[]).map(function(n){t[n]||(t[n]=[]),t[n].push(e.fields.date)}),t},{})},a=function(t,e){return t.edges.filter(function(t){return t.node.frontmatter.setlist}).filter(function(t){return t.node.frontmatter.setlist.includes(e)})},i=function(t){return t.edges.map(function(t){return t.node}).reduce(function(t,e){var n;return Object.assign({},t,((n={})[e.fields.basename]=e,n))},{})}},157:function(t,e,n){"use strict";var r=n(21),a=n(67)(!0);r(r.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(47)("includes")},158:function(t,e,n){"use strict";var r=n(21),a=n(159);r(r.P+r.F*n(160)("includes"),"String",{includes:function(t){return!!~a(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},159:function(t,e,n){var r=n(68),a=n(23);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},160:function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},161:function(t,e,n){"use strict";n(66);var r=n(153),a=n.n(r);e.a=function(t){var e="YYYY-MM-DD HH:mm:ss Z";if(!t)return null;t.match(/\d\d\d\d-\d\d-\d\d/)&&(e="YYYY-MM-DD");var n=a.a.utc(t,e);return n.isValid()?n:null}},162:function(t,e,n){t.exports={wrapper:"style-module--wrapper--aOfU0",artwork:"style-module--artwork--2ufHx"}},163:function(t,e,n){},165:function(t,e,n){var r=n(24).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(14)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},167:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(153),n(161);var r=function(t){switch(t){case"open-mic-host":return"Open Mic (Host)";case"open-mic":return"Open Mic";case"writers-in-the-round":return"Writers In The Round";case"support":return"Supporting Act";default:return"Headliner"}}},168:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=n(169),c=n.n(o),u=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={activeTab:0},n}return a()(e,t),e.prototype.render=function(){var t=this;return s.a.createElement("div",null,s.a.createElement("div",{className:c.a.tabs},this.props.tabs.map(function(e,n){var r=t.state.activeTab===n?c.a.activeTab:c.a.tab;return s.a.createElement("div",{key:e.title,className:r,onClick:function(){t.setState({activeTab:n})}},e.title)})),s.a.createElement("div",null,this.props.tabs[this.state.activeTab].content()))},e}(s.a.Component)},169:function(t,e,n){t.exports={tabs:"styles-module--tabs--3owAb",tab:"styles-module--tab--1osZO",activeTab:"styles-module--activeTab--2Ievr styles-module--tab--1osZO"}},190:function(t,e,n){t.exports={wrapper:"styles-module--wrapper--2thTo",artwork:"styles-module--artwork--2ybhh",title:"styles-module--title--2Jkue"}}}]);
//# sourceMappingURL=component---src-templates-events-js-0433bfbe0288ee86e97d.js.map
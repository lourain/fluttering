(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports={article:"src-page-article-article__article--2PAnz",time:"src-page-article-article__time--3Azsw",markdown:"src-page-article-article__markdown--3CIse"}},236:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchPost",function(){return k}),a.d(n,"getDirectory",function(){return E}),a.d(n,"onincrement",function(){return j}),a.d(n,"fetch_data",function(){return O});var r=a(0),c=a.n(r),i=a(24),o=a.n(i),l=a(239),u=a(240),s=a(13),d=a.n(s),m=a(15),h=a(7),f=a(8),p=a(11),v=a(9),g=a(12),_=a(6),y=a.n(_);a(37).polyfill(),a(39);var b=function(e,t,a){var n={method:e,body:JSON.stringify(a),mode:"cors",headers:{"Content-Type":"application/json"}};return fetch(t,n).then(function(e){return e.json()}).catch(function(e){console.error(e)})},w=a(10),k=function(){return function(e){b("get","/api/directory").then(function(t){return e(O(t))})}},E=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("get","http://localhost:9999/api/directory");case 2:return e.t0=e.sent,e.abrupt("return",{type:"directory",data:e.t0});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=function(){return{type:"increment"}},O=function(e){return{type:"receive_data",data:e}},x=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(v.a)(t).call(this))).state={data:[]},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"onIncrement",value:function(){console.log(this.props),this.props.dispatch(j())}},{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof window){e.next=2;break}return e.abrupt("return",!1);case 2:if(!window.__initData__){e.next=6;break}e.t0=this.props.receive_data.data,e.next=9;break;case 6:return e.next=8,this.fetchDate();case 8:e.t0=e.sent;case 9:(t=e.t0).forEach(function(e){e.fold=!0}),this.setState({data:t});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchDate",value:function(){return new Promise(function(e,t){b("get","/api/directory").then(function(t){e(t.data)})})}},{key:"toggle",value:function(e){var t=this.state.data;t.forEach(function(t,a){t.fold=a!==e||!t.fold}),this.setState({data:t}),t=null}},{key:"render",value:function(){var e=this,t=this.props.receive_data,n=t.data?t.data:this.state.data;return c.a.createElement("div",{className:y.a.home},c.a.createElement("header",null,c.a.createElement("p",null,"\u98ce\u6ee1\u697c"),c.a.createElement("div",{className:y.a.logo})),c.a.createElement("div",null,this.props.count),c.a.createElement("button",{onClick:this.props.onincrement},"increment"),c.a.createElement("div",{className:y.a.content},n&&n.map(function(t,n){var r=t.path;return c.a.createElement("div",{key:n},c.a.createElement("div",{className:y.a.title,onClick:e.toggle.bind(e,n)},t.item_name),c.a.createElement("ul",{className:t.fold?y.a.fold:y.a.unfold},t.list.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{href:r+"?id="+e._id},c.a.createElement("img",{src:a(45),alt:""}),c.a.createElement("p",null,e.title||e.album_name)))})))})))}}]),t}(r.Component),D=Object(w.b)(function(e){return{receive_data:e.receive_data,count:e.count}},n)(x),N=a(17),H=a.n(N),C=a(18),P=a.n(C),S=a(19),A=a.n(S);a(233);P.a.setOptions({renderer:new P.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(e,t){return t&&A.a.getLanguage(t)?A.a.highlight(t,e,!0).value:A.a.highlightAuto(e).value}});var z=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(v.a)(t).call(this))).state={article:[]},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){if(window.__initData__){var e=window.__initData__.data;this.setState({article:e})}else this.getArticle()}},{key:"getArticle",value:function(){var e=this,t=window.location.search.slice(4);b("get","/api/detail?id=".concat(t)).then(function(t){t.data.content=P()(t.data.content||"",{sanitize:!0}),e.setState({article:t.data})})}},{key:"render",value:function(){var e=this.props.receive_data,t=e.data?e.data:this.state.article;return c.a.createElement("div",{className:H.a.article},c.a.createElement("h1",null,t.title),c.a.createElement("div",{className:H.a.time},t.time),c.a.createElement("div",{className:H.a.markdown,dangerouslySetInnerHTML:{__html:t.content}}))}}]),t}(r.Component),L=Object(w.b)(function(e){return{receive_data:e.receive_data}})(z),I=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(v.a)(t).call(this))).state={data:[]},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){var e=window.location.search.slice(4);this.getPic(e)}},{key:"getPic",value:function(e){b("get","/api/ablum?id=".concat(e)).then(function(e){console.log(e.data)})}},{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(r.Component);a(236),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(5),B=a(27),J=Object(M.c)({directory:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"directory":return e.data;default:return"no match type!!!"}},count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;switch((arguments.length>1?arguments[1]:void 0).type){case"increment":return e+1;case"decrement":return e-1;default:return e}},receive_data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"receive_data":return t.data;default:return e}}});var R=function(e){return Object(M.d)(J,e,Object(M.a)(B.a))}({receive_data:window.__initData__});o.a.render(c.a.createElement(w.a,{store:R},c.a.createElement(l.a,null,c.a.createElement(function(){return[c.a.createElement(u.a,{path:"/",component:D,key:"1",exact:!0}),c.a.createElement(u.a,{path:"/detail",component:L,key:"2"}),c.a.createElement(u.a,{path:"/ablum",component:I,key:"3"})]},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,a){e.exports=a(238)},45:function(e,t,a){e.exports=a.p+"static/media/antumn.560a12e8.webp"},6:function(e,t,a){e.exports={seal:"src-page-home-Home__seal--AUghP",home:"src-page-home-Home__home--RErGa",title:"src-page-home-Home__title--23am2",logo:"src-page-home-Home__logo--3RhdV",content:"src-page-home-Home__content--2lezL",fold:"src-page-home-Home__fold--18SBL",unfold:"src-page-home-Home__unfold--PgmbG"}}},[[29,2,1]]]);
//# sourceMappingURL=main.a2d98b2e.chunk.js.map
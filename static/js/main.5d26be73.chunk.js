(this["webpackJsonpmini-blog"]=this["webpackJsonpmini-blog"]||[]).push([[0],{21:function(t,e,n){},39:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var s=n(0),c=n.n(s),a=n(30),i=n.n(a),o=(n(39),n(8)),r=n(9),j=n(11),l=n(10),p=n(13),d=n(1),b=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsx)(p.b,{to:"/",children:Object(d.jsx)("span",{className:"logo",children:"MiniBlog"})})})}}]),n}(s.Component),u=(n(21),n(19)),h=n.n(u),O=n(33),x=n(34),m=n.n(x),v=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props.post,e=t.title,n=t.body,s=t.id;return Object(d.jsx)(p.b,{to:{pathname:"/post-detail/".concat(s),state:this.props.post},children:Object(d.jsxs)("li",{className:"post",children:[Object(d.jsx)("p",{className:"post__title",children:e}),Object(d.jsxs)("p",{className:"post__body",children:[n.slice(0,120),"..."]})]})})}}]),n}(s.Component),f=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={isLoading:!0,posts:[]},t.getPosts=Object(O.a)(h.a.mark((function e(){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://jsonplaceholder.typicode.com/posts");case 2:n=e.sent,s=n.data,t.setState({posts:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var t=this.state,e=t.isLoading,n=t.posts;return Object(d.jsx)("section",{className:"container",children:e?Object(d.jsx)("div",{className:"loading__box",children:Object(d.jsxs)("div",{className:"lds-facebook",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})}):Object(d.jsx)("ul",{className:"posts",children:n.map((function(t){return Object(d.jsx)(v,{post:t},t.id)}))})})}}]),n}(s.Component),y=n(2),g=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.history;void 0===t.location.state&&e.push("/")}},{key:"render",value:function(){var t=this.props.location;return Object(d.jsx)(d.Fragment,{children:t.state?Object(d.jsx)("section",{className:"detail",children:Object(d.jsxs)("div",{className:"detail__box",children:[Object(d.jsx)("p",{className:"detail__title",children:t.state.title}),Object(d.jsx)("p",{className:"detail__body",children:t.state.body})]})}):null})}}]),n}(s.Component);var N=function(){return Object(d.jsx)(p.a,{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(b,{}),Object(d.jsx)(y.a,{exact:!0,path:"/",component:f}),Object(d.jsx)(y.a,{path:"/post-detail/:id",component:g})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5d26be73.chunk.js.map
(this["webpackJsonpmy-law-app"]=this["webpackJsonpmy-law-app"]||[]).push([[0],{42:function(e,c,t){},46:function(e,c,t){"use strict";t.r(c);var s=t(3),a=t.n(s),l=t(31),n=t.n(l),i=t(17),j=t(18),r=t(20),b=t(19),d=t(9),o=t(2),h=function(){return Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsxs)("ul",{className:"menu-frame",children:[Object(o.jsx)(d.b,{to:"/",children:Object(o.jsx)("li",{children:"\u9996\u9801"})}),Object(o.jsx)(d.b,{to:"/lawinfo",children:Object(o.jsx)("li",{children:"\u6cd5\u898f\u67e5\u8a62"})}),Object(o.jsx)(d.b,{to:"/mynote",children:Object(o.jsx)("li",{children:"\u6211\u7684\u7b46\u8a18"})})]}),Object(o.jsxs)("ul",{className:"member-frame",children:[Object(o.jsx)(d.b,{to:"/",children:Object(o.jsx)("li",{className:"member-frame-style",children:"\u767b\u5165"})}),Object(o.jsx)(d.b,{to:"/",children:Object(o.jsx)("li",{className:"member-frame-style",children:"\u8a3b\u518a"})})]})]})},O=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("div",{className:"text",children:"\u7248\u6b0a\u6240\u6709\xa9 2021 Chiao"})})},x=function(){return Object(o.jsxs)("div",{className:"slogan-frame",children:[Object(o.jsx)("div",{className:"slogan-header",children:"\u884c\u52d5\u6cd5\u898f\u672c"}),Object(o.jsxs)("div",{className:"slogan-text-frame",children:[Object(o.jsxs)("div",{className:"slogan-text",children:[Object(o.jsx)("p",{children:"\u4f60\u7684\u6700\u4f73\u6cd5\u898f\u7b46\u8a18\u5de5\u5177"}),Object(o.jsx)("p",{children:"\u5feb\u901f\u627e\u5c0b\u60a8\u8981\u7684\u6cd5\u898f\u8cc7\u8a0a"})]}),Object(o.jsx)("i",{className:"darkgrey massive chess knight icon"})]})]})},m=function(){return Object(o.jsx)("div",{className:"search-frame",children:Object(o.jsx)("div",{className:"ui search",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{class:"ui icon input",children:[Object(o.jsx)("input",{className:"prompt",type:"text",placeholder:"\u60f3\u8981\u641c\u5c0b\u751a\u9ebc\u5462?"}),Object(o.jsx)("i",{className:" large search icon"})]}),Object(o.jsx)("div",{className:"results"})]})})})},u=function(){return Object(o.jsxs)("div",{className:"header-frame",children:[Object(o.jsx)(x,{}),Object(o.jsx)(m,{})]})},p=(t(42),t(22));t(47),t(43);p.a.initializeApp({apiKey:"AIzaSyAEhhfNoyyTNN9F2NGIpscafVX4aJ5w0KE",authDomain:"my-law-app-129bd.firebaseapp.com",projectId:"my-law-app-129bd",storageBucket:"my-law-app-129bd.appspot.com",messagingSenderId:"587127569306",appId:"1:587127569306:web:54d69267398199962d9823",measurementId:"G-0VR6X96X9D"});var v=p.a.firestore(),f=(p.a.database(),t(5)),w=function(e){Object(r.a)(t,e);var c=Object(b.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return(e=c.call.apply(c,[this].concat(a))).state={laws:[]},e.lawlevel={constitution:"\u61b2\u6cd5",law:"\u6cd5\u5f8b",order:"\u547d\u4ee4"},e.onLawlevelClick=function(c){c.preventDefault(),console.log(c.currentTarget.getAttribute("val")),console.log(e.lawlevel.constitution);var t=c.currentTarget.getAttribute("val");e.componentOnclick(t)},e}return Object(j.a)(t,[{key:"componentOnclick",value:function(e){var c=this,t=v.collection("lawData").limit(20).where("LawLevel","==",e),s=[];t.get().then((function(e){e.forEach((function(e){var c=e.data(),t=Object.create(c);t.keyid=e.id,s.push(t)})),c.setState({laws:s}),console.log(c.state.laws),c.props.history.push({pathname:"/LawList",props:{laws:c.state.laws}})}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"laws-menu-frame",children:[Object(o.jsx)(d.b,{to:"/LawList",onClick:this.onLawlevelClick,val:"\u61b2\u6cd5",children:Object(o.jsx)("div",{className:"law-menu",children:Object(o.jsxs)("ul",{className:"law-menu-text",children:[Object(o.jsx)("li",{style:{fontSize:"50px",color:"black",marginBottom:"15px"},children:"\u61b2\u6cd5"}),Object(o.jsxs)("li",{children:["\u6cd5\u898f\u6578\u91cf:342",Object(o.jsx)("span",{children:"\u7b46"})]}),Object(o.jsxs)("li",{children:["\u9ede\u64ca\u6b21\u6578:0",Object(o.jsx)("span",{children:"\u6b21"})]}),Object(o.jsxs)("li",{children:["\u7570\u52d5\u6642\u9593:",Object(o.jsx)("p",{children:"2021/1/22 \u4e0a\u5348 12:00:00"})]}),Object(o.jsx)("i",{className:"grey big balance scale icon"})]})})}),Object(o.jsx)(d.b,{to:"/LawList",onClick:this.onLawlevelClick,val:"\u6cd5\u5f8b",children:Object(o.jsx)("div",{className:"law-menu",children:Object(o.jsxs)("ul",{className:"law-menu-text",children:[Object(o.jsx)("li",{style:{fontSize:"50px",color:"black",marginBottom:"15px"},children:"\u6cd5\u5f8b"}),Object(o.jsxs)("li",{children:["\u6cd5\u898f\u6578\u91cf:1230",Object(o.jsx)("span",{children:"\u7b46"})]}),Object(o.jsxs)("li",{children:["\u9ede\u64ca\u6b21\u6578:0",Object(o.jsx)("span",{children:"\u6b21"})]}),Object(o.jsxs)("li",{children:["\u7570\u52d5\u6642\u9593:",Object(o.jsx)("p",{children:"2021/1/22 \u4e0a\u5348 12:00:00"})]}),Object(o.jsx)("i",{className:"grey big balance scale icon"})]})})}),Object(o.jsx)(d.b,{to:"/LawList",onClick:this.onLawlevelClick,val:"\u547d\u4ee4",children:Object(o.jsx)("div",{className:"law-menu",children:Object(o.jsxs)("ul",{className:"law-menu-text",children:[Object(o.jsx)("li",{style:{fontSize:"50px",color:"black",marginBottom:"15px"},children:"\u547d\u4ee4"}),Object(o.jsxs)("li",{children:["\u6cd5\u898f\u6578\u91cf:4032",Object(o.jsx)("span",{children:"\u7b46"})]}),Object(o.jsxs)("li",{children:["\u9ede\u64ca\u6b21\u6578:0",Object(o.jsx)("span",{children:"\u6b21"})]}),Object(o.jsxs)("li",{children:["\u7570\u52d5\u6642\u9593:",Object(o.jsx)("p",{children:"2021/1/22 \u4e0a\u5348 12:00:00"})]}),Object(o.jsx)("i",{className:"grey big balance scale icon"})]})})})]})}}]),t}(a.a.Component),N=Object(f.f)(w),y=function(e){Object(r.a)(t,e);var c=Object(b.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return(e=c.call.apply(c,[this].concat(a))).state={laws:[]},e}return Object(j.a)(t,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(h,{}),Object(o.jsx)(u,{}),Object(o.jsx)(N,{}),Object(o.jsx)(O,{})]})}}]),t}(a.a.Component),g=function(){return Object(o.jsx)("div",{children:"\u6cd5\u898f\u8cc7\u8a0a"})},k=function(){return Object(o.jsx)("div",{children:"\u6211\u7684\u7b46\u8a18"})},L=function(e){var c=e.location.props.laws.map((function(e){var c=e.keyid,t=e.LawName,s=e.LawModifiedDate;return Object(o.jsx)("div",{children:Object(o.jsx)("table",{class:"ui celled table",children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{"data-label":"Name",children:t}),Object(o.jsx)("td",{"data-label":"Date",children:s})]})})})},c)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(h,{}),Object(o.jsx)(u,{}),Object(o.jsxs)("div",{className:"laws-list-frame",children:[Object(o.jsx)("table",{className:"ui celled table",children:Object(o.jsxs)("thead",{children:[Object(o.jsx)("tr",{children:Object(o.jsx)("th",{colspan:"2",children:"\u4f4d\u968e"})}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"\u6cd5\u898f\u540d\u7a31"}),Object(o.jsx)("th",{children:"\u4fee\u6539\u65e5\u671f"})]})]})}),c]}),Object(o.jsx)(O,{})]})},C=function(e){Object(r.a)(t,e);var c=Object(b.a)(t);function t(){return Object(i.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(o.jsx)(d.a,{basename:"/build/index.html",children:Object(o.jsx)("div",{children:Object(o.jsxs)(f.c,{children:[Object(o.jsx)(f.a,{path:"/",exact:!0,component:y}),Object(o.jsx)(f.a,{path:"/lawinfo",component:g}),Object(o.jsx)(f.a,{path:"/mynote",component:k}),Object(o.jsx)(f.a,{path:"/LawList",component:L})]})})})}}]),t}(a.a.Component);n.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.5acc94e2.chunk.js.map
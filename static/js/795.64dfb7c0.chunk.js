"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[795],{8161:function(e,t,s){s.d(t,{Z:function(){return p}});var a="NoticesSearch_container__Tygup",r="NoticesSearch_title__HSRmE",n="NoticesSearch_form__9GdvP",c="NoticesSearch_input__XVoJx",i="NoticesSearch_searchButton__gYVGg",l="NoticesSearch_searchButtonDel__aa2a0",o="NoticesSearch_searchDel__YHZaE",_="NoticesSearch_changeColor__tWk1G",u="NoticesSearch_changeColorDel__wvFHI",h=s(9126),m=s(1213),N=s(5264),d=s(3329),p=function(e){var t=e.search,s=e.title,p=e.query,f=e.setQuery;return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("h2",{className:r,children:s}),(0,d.jsxs)("form",{className:n,onSubmit:function(e){e.preventDefault(),""===p?N.Notify.warning("Please fill in this field"):t(p)},children:[(0,d.jsx)("input",{className:c,placeholder:"Search",type:"text",value:p,onChange:function(e){return f(e.target.value)}}),""===p?(0,d.jsx)("button",{className:i,type:"submit",children:(0,d.jsx)("span",{className:_,children:(0,d.jsx)(h.dVI,{style:{fontSize:19}})})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:l,type:"submit",children:(0,d.jsx)("span",{className:_,children:(0,d.jsx)(h.dVI,{style:{fontSize:19}})})}),(0,d.jsx)("button",{className:o,type:"submit",onClick:function(){return f("")},children:(0,d.jsx)("span",{className:u,children:(0,d.jsx)(m.$iT,{style:{fontSize:25}})})})]})]})]})}},5795:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var a=s(5861),r=s(9439),n=s(7757),c=s.n(n),i=s(1243),l="NewsPage_newsPage__k+c88",o="NewsPage_list__nRLgn",_=s(2791),u="NewsItem_item__Gn8CO",h="NewsItem_img__ZNkWY",m="NewsItem_wrapper__WPraF",N="NewsItem_bottomWrapper__6xqCH",d="NewsItem_header__tj+DL",p="NewsItem_text__0Q0Y1",f="NewsItem_date__zLwOW",x="NewsItem_link__7gIpE",j=s(3329),w=function(e){var t=e.topic,s=t._id,a=t.imgUrl,r=t.text,n=t.title,c=t.date,i=t.url;return(0,j.jsxs)("li",{className:u,children:[(0,j.jsx)("img",{className:h,src:a,alt:n}),(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)("h2",{className:d,children:n}),(0,j.jsx)("p",{className:p,children:r}),(0,j.jsxs)("div",{className:N,children:[(0,j.jsx)("p",{className:f,children:c.slice(0,10).replaceAll("-","/")}),(0,j.jsx)("a",{className:x,href:i,target:"_blank",without:!0,rel:"noreferrer",children:"Read more"})]})]})]},s)},g=s(8161),v=i.Z.create({baseURL:"http://localhost:3001/api/news"}),S=function(){var e=(0,_.useState)(""),t=(0,r.Z)(e,2),s=t[0],n=t[1],i=(0,_.useState)([]),u=(0,r.Z)(i,2),h=u[0],m=u[1],N=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({method:"get"});case 2:return t=e.sent,e.abrupt("return",m(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,_.useEffect)((function(){N()}),[]);var d=h.slice(0,6).map((function(e){return(0,j.jsx)(w,{topic:e},e._id)}));return(0,j.jsxs)("div",{className:l+" container",children:[(0,j.jsx)(g.Z,{title:"News",query:s,setQuery:n,search:function(e){console.log(e)}}),(0,j.jsx)("ul",{className:o,children:d})]})}}}]);
//# sourceMappingURL=795.64dfb7c0.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[211],{5211:function(e,s,r){r.r(s),r.d(s,{default:function(){return D}});var i=r(5861),n=r(9439),a=r(4687),l=r.n(a),c="OurFriendsPage_section__tfUvp",t="OurFriendsPage_container__VCQow",d="OurFriendsPage_title__9QCXb",h="OurFriendsPage_list__BgUoO",m="OurFriendsPage_item__QKYe4",A="OurFriendsPage_itemTitle__+Pngc",x="OurFriendsPage_itemWrapper__JesOx",o="OurFriendsPage_itemLogo__RjTYp",j="OurFriendsPage_itemList__YyYLA",E="OurFriendsPage_itemText__dO3E-",u="OurFriendsPage_textTitle__j1igu",g=r(1243),C=r(2791),p="TimeSheet_timeText__-oESR",v="TimeSheet_textTitle__sbd7p",N="TimeSheet_timeContainer__llMDP",I="TimeSheet_sheetContainer__yv7p0",B="TimeSheet_itemClose__rEt3I",f="TimeSheet_timeItem__Rjl1m",G="TimeSheet_timeList__SPJmJ",b=r(3329),Q=function(e){var s=e.workDays,r=(0,C.useState)([]),i=(0,n.Z)(r,2),a=i[0],l=i[1],c=a.reduce((function(e,s){return(null===s||void 0===s?void 0:s.isOpen)>e.isOpen?s:e}),{isOpen:-1/0});(0,C.useEffect)((function(){s&&l(s)}),[s]),console.log(a);var t=a.map((function(e,s){return(0,b.jsxs)("li",{className:f,children:[e.isOpen&&(0,b.jsxs)("p",{children:[e.from,"-",e.to]}),!e.isOpen&&(0,b.jsx)("p",{className:B,children:"Close"})]},s)})),d=[{id:1,from:"day",to:"night"},{id:2,from:"day",to:"night"},{id:3,from:"day",to:"night"},{id:4,from:"day",to:"night"},{id:5,from:"day",to:"night"},{id:6,from:"day",to:"night"},{id:7,from:"day",to:"night"}].map((function(e){return(0,b.jsx)("li",{className:f,children:(0,b.jsxs)("p",{children:[e.from," and ",e.to]})},e.id)}));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("button",{className:p,children:[(0,b.jsx)("p",{className:v,children:"Time:"}),(0,b.jsx)("p",{children:c.from?"".concat(c.from," - ").concat(c.to):"day and night"})]}),(0,b.jsx)("div",{className:N,children:(0,b.jsxs)("div",{className:I,children:[(0,b.jsxs)("ul",{className:G,children:[(0,b.jsx)("li",{className:f,children:(0,b.jsx)("p",{children:"MN"})}),(0,b.jsx)("li",{className:f,children:(0,b.jsx)("p",{children:"TU"})}),(0,b.jsx)("li",{className:f,children:(0,b.jsx)("p",{children:"WE"})}),(0,b.jsx)("li",{className:f,children:(0,b.jsx)("p",{children:"TH"})}),(0,b.jsx)("li",{className:f,children:(0,b.jsx)("p",{children:"FR"})}),(0,b.jsx)("li",{className:f,children:(0,b.jsx)("p",{children:"SA"})}),(0,b.jsx)("li",{className:f,children:(0,b.jsx)("p",{children:"SU"})})]}),(0,b.jsx)("ul",{className:G,children:t.length?t:d})]})})]})},D=function(){var e=(0,C.useState)([]),s=(0,n.Z)(e,2),r=s[0],a=s[1];(0,C.useEffect)((function(){var e=g.Z.create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL}),s=function(){var s=(0,i.Z)(l().mark((function s(){var r;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,e.get("/friends");case 3:return r=s.sent,a(r.data),s.abrupt("return",r.data);case 8:return s.prev=8,s.t0=s.catch(0),s.abrupt("return",s.t0.message);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(){return s.apply(this,arguments)}}();s()}),[]);var p=r.map((function(e){return(0,b.jsxs)("li",{className:m,children:[(0,b.jsx)("a",{href:e.url,className:A,children:e.title}),(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("img",{className:o,src:e.imageUrl?e.imageUrl:"data:image/png;base64,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",alt:"logo"}),(0,b.jsxs)("ul",{className:j,children:[(0,b.jsx)("li",{children:(0,b.jsx)(Q,{workDays:e.workDays})}),(0,b.jsx)("li",{children:(0,b.jsxs)("a",{href:e.addressUrl,target:"_blank",rel:"noreferrer",className:E,children:[(0,b.jsx)("p",{className:u,children:"Address:"}),(0,b.jsx)("p",{children:e.address?e.address:"website only"})]})}),(0,b.jsxs)("li",{children:[e.email&&(0,b.jsxs)("a",{href:"mailto:".concat(e.email),className:E,children:[(0,b.jsx)("p",{className:u,children:"Email:"}),(0,b.jsx)("p",{children:e.email})]}),!e.email&&(0,b.jsxs)("div",{className:E,children:[(0,b.jsx)("p",{className:u,children:"Email:"}),(0,b.jsx)("p",{children:"phone only"})]})]}),(0,b.jsxs)("li",{children:[e.phone&&(0,b.jsxs)("a",{href:"tel:".concat(e.phone),className:E,children:[(0,b.jsx)("p",{className:u,children:"Phone:"}),(0,b.jsx)("p",{children:e.phone})]}),!e.phone&&(0,b.jsxs)("div",{className:E,children:[(0,b.jsx)("p",{className:u,children:"Phone:"}),(0,b.jsx)("p",{children:"email only"})]})]})]})]})]},e._id)}));return(0,b.jsx)("section",{className:c,children:(0,b.jsxs)("div",{className:t,children:[(0,b.jsx)("h1",{className:d,children:"Our friends"}),(0,b.jsx)("ul",{className:h,children:p})]})})}}}]);
//# sourceMappingURL=211.53fa460b.chunk.js.map
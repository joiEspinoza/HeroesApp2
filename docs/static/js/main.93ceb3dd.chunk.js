(this.webpackJsonpherosapp=this.webpackJsonpherosapp||[]).push([[0],{46:function(e,a,r){},47:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r(1),s=r(21),n=r.n(s),i=r(11),l=Object(c.createContext)(),o=r(4),h="[auth] login",u="[auth] logout",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},j=r(5),b=r(2),m=function(e){var a=e.history,r=Object(c.useContext)(l).dispatch;return Object(t.jsxs)("div",{className:"container mt-5",children:[Object(t.jsx)("h1",{children:"Screen | Login"}),Object(t.jsx)("hr",{}),Object(t.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){r({type:h,payload:{name:"King"}});var e=localStorage.getItem("lastPath")||"/";a.replace(e)},children:"Login"})]})},p=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],O=function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("El publisher ".concat(e," no es correcto"));return p.filter((function(a){return a.publisher===e}))},v=function(e){var a=e.id,r=e.superhero,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(t.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(t.jsxs)("div",{className:"row no-gutters",children:[Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsx)("img",{src:"../img/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(t.jsx)("div",{className:"col-md-8",children:Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsx)("h5",{className:"card-title",children:r}),Object(t.jsx)("p",{className:"card-text",children:c}),c!==n&&Object(t.jsx)("p",{className:"card-text",children:Object(t.jsx)("small",{children:n})}),Object(t.jsx)("p",{className:"card-text",children:Object(t.jsx)("small",{className:"text-muted",children:s})}),Object(t.jsx)(j.b,{style:{color:"black"},to:"./hero/".concat(a),children:"M\xe1s ..."})]})})]})})},x=function(e){var a=e.publisher,r=Object(c.useMemo)((function(){return O(a)}),[a]);return Object(t.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:r.map((function(e){return Object(t.jsx)(v,Object(o.a)({},e),e.id)}))})},f=function(){return Object(t.jsx)("div",{children:Object(t.jsx)(x,{publisher:"DC Comics"})})},g=function(e){return p.find((function(a){return a.id===e}))},C=function(e){var a=e.history,r=Object(b.i)().heroeId,s=Object(c.useMemo)((function(){return g(r)}),[r]);if(!s)return Object(t.jsx)(b.a,{to:"/"});var n=s.id,i=s.superhero,l=s.publisher,o=s.alter_ego,h=s.first_appearance,u=s.characters;return Object(t.jsxs)("div",{className:"row mt-5",children:[Object(t.jsx)("div",{className:"col-4",children:Object(t.jsx)("img",{src:"../img/".concat(n,".jpg"),className:"img-thumbnail animate__animated animate__fadeInLeft",alt:i})}),Object(t.jsxs)("div",{className:"col-8",children:[Object(t.jsx)("h3",{children:i}),Object(t.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"Alter ego: "}),o]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"Publisher: "}),l]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"First appearance: "}),h]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"Characters: "}),u]})]}),Object(t.jsx)("button",{className:"btn btn-outline-dark mt-4",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Back"})]})]})},_=function(){return Object(t.jsx)("div",{children:Object(t.jsx)(x,{publisher:"Marvel Comics"})})},N=r(23),y=r.n(N),k=r(12),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),r=Object(i.a)(a,2),t=r[0],s=r[1],n=function(){return s(e)},l=function(e){var a=e.target;s(Object(o.a)(Object(o.a)({},t),{},Object(k.a)({},a.name,a.value)))};return[t,l,n]},S=function(e){return""===e?[]:(e=e.toLowerCase().replace(/[" "]/g,""),p.filter((function(a){return a.superhero.toLowerCase().replace(/[" "]/g,"").includes(e)})))},D=function(e){var a=e.history,r=Object(b.h)(),s=y.a.parse(r.search).q,n=void 0===s?"":s,l=M({searchText:n}),h=Object(i.a)(l,2),u=h[0],d=h[1],j=u.searchText,m=Object(c.useMemo)((function(){return S(n)}),[n]);return Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-5",children:[Object(t.jsx)("h4",{children:"Search Form"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(j))},children:[Object(t.jsx)("input",{type:"text",className:"form-control",placeholder:"find your hero",name:"searchText",value:j,onChange:d,autoComplete:"off"}),Object(t.jsx)("button",{type:"submit",className:"btn btn-outline-dark mt-1 btn-block",children:"Search"})]})]}),Object(t.jsxs)("div",{className:"col-7",children:[Object(t.jsx)("h4",{children:"Result"}),Object(t.jsx)("hr",{}),""===n&&Object(t.jsx)("div",{className:"alert alert-dark",children:"Search a Hero"}),""!==n&&0===m.length&&Object(t.jsxs)("div",{className:"alert alert-dark",children:["There is no a Hero ",Object(t.jsx)("b",{children:n})]}),m.map((function(e){return Object(t.jsx)(v,Object(o.a)({},e),e.id)}))]})]})})},w=function(){var e=Object(c.useContext)(l),a=e.user.name,r=e.dispatch,s=Object(b.g)();return Object(t.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(t.jsx)(j.b,{className:"navbar-brand",to:"/",children:"H"}),Object(t.jsx)("div",{className:"navbar-collapse",children:Object(t.jsxs)("div",{className:"navbar-nav",children:[Object(t.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(t.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(t.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(t.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(t.jsx)("button",{onClick:function(){r({type:u}),s.replace("/login")},className:"nav-item nav-link btn",children:"Logout"})]})})]})},A=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(w,{}),"  ",Object(t.jsx)("div",{className:"container mt-5",children:Object(t.jsxs)(b.d,{children:[Object(t.jsx)(b.b,{exact:!0,path:"/marvel",component:_}),Object(t.jsx)(b.b,{exact:!0,path:"/hero/:heroeId",component:C}),Object(t.jsx)(b.b,{exact:!0,path:"/dc",component:f}),Object(t.jsx)(b.b,{exact:!0,path:"/search",component:D}),Object(t.jsx)(b.a,{to:"/marvel"})]})})]})},B=r(13),T=r(9),J=r.n(T),R=function(e){var a=e.isAuthenticated,r=e.component,c=Object(B.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",c.location.pathname),Object(t.jsx)(b.b,Object(o.a)(Object(o.a)({},c),{},{component:function(e){return a?Object(t.jsx)(r,Object(o.a)({},e)):Object(t.jsx)(b.a,{to:"/login"})}}))};R.protoType={isAuthenticated:J.a.bool.isRequired,component:J.a.func.isRequired};var F=R,I=function(e){var a=e.isAuthenticated,r=e.component,c=Object(B.a)(e,["isAuthenticated","component"]);return Object(t.jsx)(b.b,Object(o.a)(Object(o.a)({},c),{},{component:function(e){return a?Object(t.jsx)(b.a,{to:"/"}):Object(t.jsx)(r,Object(o.a)({},e))}}))};I.protoType={isAuthenticated:J.a.bool.isRequired,component:J.a.func.isRequired};var G=I,H=function(){var e=Object(c.useContext)(l).user.logged;return Object(t.jsx)(j.a,{children:Object(t.jsx)("div",{children:Object(t.jsxs)(b.d,{children:[Object(t.jsx)(G,{isAuthenticated:e,exact:!0,path:"/login",component:m}),Object(t.jsx)(F,{isAuthenticated:e,path:"/",component:A})]})})})},P=(r(46),function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}}),L=function(){var e=Object(c.useReducer)(d,{},P),a=Object(i.a)(e,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(t.jsxs)(l.Provider,{value:{user:r,dispatch:s},children:[" ",Object(t.jsx)(H,{})]})},W=document.getElementById("root");n.a.render(Object(t.jsx)(L,{}),W)}},[[47,1,2]]]);
//# sourceMappingURL=main.93ceb3dd.chunk.js.map
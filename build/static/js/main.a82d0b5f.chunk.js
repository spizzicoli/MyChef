(this["webpackJsonpionic-react-typescript-starter"]=this["webpackJsonpionic-react-typescript-starter"]||[]).push([[6],{102:function(e,t,n){},103:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t),n.d(t,"setInitialState",(function(){return H})),n.d(t,"addFavourite",(function(){return F})),n.d(t,"removeFavourite",(function(){return M})),n.d(t,"initialState",(function(){return C})),n.d(t,"store",(function(){return P}));var a=n(18),r=n(0),i=n.n(r),o=n(31),c=n.n(o),l=n(16),s=n(1),m=n(10),u=function(e){var t=e.history;return i.a.createElement(s.v,null,i.a.createElement(s.m,null,i.a.createElement(s.B,null,i.a.createElement(s.A,null,"Ionic Blank"))),i.a.createElement(s.l,{className:"ion-padding"},i.a.createElement("p",null,"A simple paragraph."),i.a.createElement(s.u,null,[{id:0,name:"Fred"},{id:1,name:"Sabrina"},{id:2,name:"Vanessa"},{id:3,name:"Ive"},{id:4,name:"Martin"},{id:5,name:"Monika Mila"}].map((function(e,n){return i.a.createElement(s.o,{key:n,onClick:function(){console.log("onClick"),t.push("/home/".concat(e.name.toLowerCase().replace(/\s/g,"-")),e)}},i.a.createElement(s.s,null,e.name))})))))},p=function(e){e.location;return i.a.createElement(s.v,null,i.a.createElement(s.m,null,i.a.createElement(s.B,null,i.a.createElement(s.f,{slot:"start"},i.a.createElement(s.d,{defaultHref:"/home",text:""})),i.a.createElement(s.A,null,"Home"))),i.a.createElement(s.l,{className:"ion-padding"},i.a.createElement("p",null,"Hello darkness my old friend...")))},d=n(2),y=n.n(d),f=n(3),E=n(8),j=n(38),h=function(e){return i.a.createElement("span",{className:e.classes?e.classes:"",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},v=(n(87),function(e){var t="/recipe-details/:".concat(e.idRecipe),n=Object(r.useState)(e.favourite||!1),a=Object(E.a)(n,2),o=a[0],c=a[1];return i.a.createElement(s.g,{className:"recipe"},i.a.createElement(j.c,{className:"recipe__link",to:t}),i.a.createElement("div",{className:"recipe__img"},i.a.createElement("img",{src:e.imgUrl,alt:"recipe-img"}),i.a.createElement(s.o,{className:"recipe__favourite-icon",onClick:function(){var t=P.getState()[0],n=e.idRecipe,a=t.filter((function(e){return e.id===n})),r=t.indexOf(a[0]);o?P.dispatch(M(n)):P.dispatch(F(n)),c(t[r].favourite)},type:"button"},o&&i.a.createElement(h,{symbol:"\ud83d\udc9b",label:"favourite"}),!o&&i.a.createElement(h,{symbol:"\ud83d\udda4",label:"not-favourite"}))),i.a.createElement(s.i,null,i.a.createElement(s.k,null,e.title),i.a.createElement(s.j,null,i.a.createElement("div",{className:"recipe__time"},i.a.createElement(s.n,{icon:m.u}),i.a.createElement(s.s,null,e.time)))),i.a.createElement(s.h,null,e.children))}),b=n(69),_=n.n(b),g=function(){var e=Object(r.useState)(),t=Object(E.a)(e,2),n=t[0],a=t[1],o=document.getElementsByClassName("card-line-clamp");function c(){return(c=Object(f.a)(y.a.mark((function e(){var t,n,a=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch(t,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){(function(){return c.apply(this,arguments)})("https://api.spoonacular.com/recipes/random?apiKey=".concat("48dfa29ba0a34098ab1b0b70539db70a","&number=10")).then((function(e){a(e.recipes),P.dispatch(H(e.recipes))}))}),[]);var l=setInterval((function(){if(o.length>0)for(var e in clearInterval(l),o)if(Object.prototype.hasOwnProperty.call(o,e)){var t=o[e];_()(t,5)}}),500);return i.a.createElement(s.v,null,i.a.createElement(s.m,null,i.a.createElement(s.B,null,i.a.createElement(s.f,{slot:"start"},i.a.createElement(s.d,{defaultHref:"home",text:""})),i.a.createElement(s.A,null,"Recipes"))),i.a.createElement(s.l,{className:"ion-padding"},i.a.createElement("p",null,"Here you can find all Recipes you could imagine"),n&&n.map((function(e,t){return i.a.createElement(v,{key:t,idRecipe:e.id,imgUrl:e.image,title:e.title,time:e.readyInMinutes,money:e.pricePerServing,people:e.servings,favourite:e.favourite},i.a.createElement("div",{className:"card-line-clamp",dangerouslySetInnerHTML:{__html:e.summary}}))}))))},O=function(){var e,t,n=P.getState()[0];return t=!(n.length>0)||!((e=n.filter((function(e){return e.favourite}))).length>0),i.a.createElement(s.v,null,i.a.createElement(s.m,null,i.a.createElement(s.B,null,i.a.createElement(s.f,{slot:"start"},i.a.createElement(s.d,{defaultHref:"/recipes",text:""})),i.a.createElement(s.A,null,"Favourite Recipes"))),i.a.createElement(s.l,{className:"ion-padding"},!t&&e&&i.a.createElement("p",null,"Hey there, this is your place. ",i.a.createElement("br",null),"Here you can find all your Favourite Recipes. ",i.a.createElement("br",null),"Take a look!",i.a.createElement(h,{symbol:"\ud83d\ude0d"})),!t&&e&&e.map((function(e,t){return i.a.createElement(v,{key:t,idRecipe:e.id,imgUrl:e.image,title:e.title,time:e.readyInMinutes,money:e.pricePerServing,people:e.servings,favourite:e.favourite},i.a.createElement("div",{className:"card-line-clamp",dangerouslySetInnerHTML:{__html:e.summary}}))})),t&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"I'm sorry! ",i.a.createElement("br",null),"You don't have any favourite recipe here."),i.a.createElement("p",null,"Please visit Recipe page and select your favourites. Next time you came here you'll see it in this page."))))},k=n(70),x=n(48),N=function(e){e.location;var t=Object(r.useState)(!1),n=Object(E.a)(t,2),o=n[0],c=n[1],l=Object(r.useState)([]),m=Object(E.a)(l,2),u=m[0],p=m[1],d=function(){var e=Object(f.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.scan();case 2:t=e.sent,j("https://api.barcodelookup.com/v2/products?barcode=".concat(t.text,"&formatted=y&key=").concat("a47ug7ubnjhujwuryotbizrkvfyhz5")).then((function(e){e&&(c(!0),h(e.products))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(y.a.mark((function e(){var t,n,a=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",x.a.setHeader("*","Content-Type","application/json"),x.a.setDataSerializer("json"),e.next=5,x.a.sendRequest(t,{method:"get",responseType:"json"});case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(f.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r=t[n],p([].concat(Object(a.a)(u),[r])));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(s.v,null,i.a.createElement(s.m,null,i.a.createElement(s.B,null,i.a.createElement(s.f,{slot:"start"},i.a.createElement(s.d,{defaultHref:"/home",text:""})),i.a.createElement(s.A,null,"Pantry"))),i.a.createElement(s.l,{className:"ion-padding"},u.length>0&&!o&&i.a.createElement(s.s,null,"Il prodotto scansionato non \xe8 ancora nel database."),0===u.length&&i.a.createElement(s.s,null,"Non hai ancora nessun prodotto nella dispensa."),u&&u.map((function(e,t){return i.a.createElement(s.r,{key:t},i.a.createElement(s.o,null,i.a.createElement(s.c,{slot:"start"},i.a.createElement("img",{src:e.images[0]})),i.a.createElement(s.s,null,e.product_name)),i.a.createElement(s.q,{side:"end"},i.a.createElement(s.p,{onClick:function(){return function(e){var t=u.filter((function(t){return t.barcode_number!==e}));p(t)}(e.barcode_number)}},"Remove")))})),i.a.createElement(s.e,{onClick:d,color:"primary"},"Scan")))},T=(n(92),n(93),n(94),n(95),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),function(){var e=location.pathname.split(":")[1],t=Object(r.useState)(),n=Object(E.a)(t,2),a=n[0],o=n[1];function c(){return(c=Object(f.a)(y.a.mark((function e(){var t,n,a=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch(t,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){(function(){return c.apply(this,arguments)})("https://api.spoonacular.com/recipes/".concat(e,"/information?apiKey=").concat("48dfa29ba0a34098ab1b0b70539db70a","&number=10")).then((function(e){console.log("\n\ndettaglio ricetta: ",e),o(e)}))}),[]),i.a.createElement(s.v,null,i.a.createElement(s.m,null,i.a.createElement(s.B,null,i.a.createElement(s.f,{slot:"start"},i.a.createElement(s.d,{defaultHref:"/recipes",text:""})),i.a.createElement(s.A,null,"Recipes Details"))),i.a.createElement(s.l,null,e&&a&&i.a.createElement("div",{className:"recipe-details"},i.a.createElement("div",{className:"recipe-details__image"},i.a.createElement("img",{src:a.image,alt:"recipe-img"})),i.a.createElement("div",{className:"recipe-details__description"},i.a.createElement("h2",null,a.title),i.a.createElement("div",{className:"recipe-details__info"},i.a.createElement("p",{className:"recipe-details__time"},i.a.createElement(s.n,{icon:m.m}),i.a.createElement(s.s,null,a.readyInMinutes)),i.a.createElement("p",{className:"recipe-details__people"},i.a.createElement(s.n,{icon:m.j}),i.a.createElement(s.s,null,a.servings)),i.a.createElement("p",{className:"recipe-details__money"},i.a.createElement(s.n,{icon:m.c}),i.a.createElement(s.s,null,a.pricePerServing))),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.summary}})))))}),I=function(){return i.a.createElement(s.v,{id:"main"},i.a.createElement(s.z,null,i.a.createElement(s.w,null,i.a.createElement(l.c,{path:"/home",component:u,exact:!0}),i.a.createElement(l.c,{path:"/home/:user",component:p,exact:!0}),i.a.createElement(l.c,{path:"/recipes",component:g,exact:!0}),i.a.createElement(l.c,{path:"/favourite-recipes",component:O,exact:!0}),i.a.createElement(l.c,{path:"/recipe-details/:id",component:T}),i.a.createElement(l.c,{path:"/pantry",component:N}),i.a.createElement(l.b,{exact:!0,from:"/",to:"/home"})),i.a.createElement(s.x,{slot:"bottom"},i.a.createElement(s.y,{tab:"home",href:"/home"},i.a.createElement(s.n,{icon:m.l}),i.a.createElement(s.s,null,"Home")),i.a.createElement(s.y,{tab:"recipes",href:"/recipes"},i.a.createElement(s.n,{icon:m.r}),i.a.createElement(s.s,null,"Recipes")),i.a.createElement(s.y,{tab:"favourite recipes",href:"/favourite-recipes"},i.a.createElement(s.n,{icon:m.k}),i.a.createElement(s.s,null,"Favourite Recipes")),i.a.createElement(s.y,{tab:"pantry",href:"/pantry"},i.a.createElement(s.n,{icon:m.i}),i.a.createElement(s.s,null,"Pantry")))))},S=n(72),w=n(75),R=n(41),A=n(74),H=function(e){return{type:"SET_INITIAL_STATE",payload:e}},F=function(e){return{type:"ADD_FAVOURITE",payload:e}},M=function(e){return{type:"REMOVE_FAVOURITE",payload:e}},C=[{}],P=Object(R.createStore)((function(e,t){var n;switch(n="SET_INITIAL_STATE"===t.type?[t.payload]:Object(a.a)(e),t.type){case"SET_INITIAL_STATE":return n;case"ADD_FAVOURITE":return n[0].filter((function(e){return e.id===t.payload}))[0].favourite=!0,n;case"REMOVE_FAVOURITE":return n[0].filter((function(e){return e.id===t.payload}))[0].favourite=!1,n;default:return n}}),C,Object(A.devToolsEnhancer)({}));P.subscribe((function(){})),c.a.render(i.a.createElement(S.a,null,i.a.createElement(w.a,{store:P},i.a.createElement(s.b,null,i.a.createElement(l.c,{path:"/",component:I})))),document.getElementById("root"))},84:function(e,t,n){var a={"./ion-action-sheet-ios.entry.js":[108,67],"./ion-action-sheet-md.entry.js":[109,68],"./ion-alert-ios.entry.js":[110,59],"./ion-alert-md.entry.js":[111,60],"./ion-app_8-ios.entry.js":[112,53],"./ion-app_8-md.entry.js":[113,54],"./ion-avatar_3-ios.entry.js":[114,8],"./ion-avatar_3-md.entry.js":[115,9],"./ion-back-button-ios.entry.js":[116,10],"./ion-back-button-md.entry.js":[117,11],"./ion-backdrop-ios.entry.js":[118,12],"./ion-backdrop-md.entry.js":[119,13],"./ion-button_2-ios.entry.js":[120,69],"./ion-button_2-md.entry.js":[121,70],"./ion-card_5-ios.entry.js":[122,14],"./ion-card_5-md.entry.js":[123,15],"./ion-checkbox-ios.entry.js":[124,16],"./ion-checkbox-md.entry.js":[125,17],"./ion-chip-ios.entry.js":[126,18],"./ion-chip-md.entry.js":[127,19],"./ion-col_3.entry.js":[128,20],"./ion-datetime_3-ios.entry.js":[129,57],"./ion-datetime_3-md.entry.js":[130,58],"./ion-fab_3-ios.entry.js":[131,21],"./ion-fab_3-md.entry.js":[132,22],"./ion-img.entry.js":[133,23],"./ion-infinite-scroll_2-ios.entry.js":[134,24],"./ion-infinite-scroll_2-md.entry.js":[135,25],"./ion-input-ios.entry.js":[136,26],"./ion-input-md.entry.js":[137,27],"./ion-item-option_3-ios.entry.js":[138,71],"./ion-item-option_3-md.entry.js":[139,72],"./ion-item_8-ios.entry.js":[140,73],"./ion-item_8-md.entry.js":[141,74],"./ion-loading-ios.entry.js":[142,28],"./ion-loading-md.entry.js":[143,29],"./ion-menu_3-ios.entry.js":[144,75],"./ion-menu_3-md.entry.js":[145,76],"./ion-modal-ios.entry.js":[146,55],"./ion-modal-md.entry.js":[147,56],"./ion-nav_2.entry.js":[148,66],"./ion-popover-ios.entry.js":[149,30],"./ion-popover-md.entry.js":[150,31],"./ion-progress-bar-ios.entry.js":[151,32],"./ion-progress-bar-md.entry.js":[152,33],"./ion-radio_2-ios.entry.js":[153,34],"./ion-radio_2-md.entry.js":[154,35],"./ion-range-ios.entry.js":[155,77],"./ion-range-md.entry.js":[156,78],"./ion-refresher_2-ios.entry.js":[157,61],"./ion-refresher_2-md.entry.js":[158,62],"./ion-reorder_2-ios.entry.js":[159,36],"./ion-reorder_2-md.entry.js":[160,37],"./ion-ripple-effect.entry.js":[161,38],"./ion-route_4.entry.js":[162,79],"./ion-searchbar-ios.entry.js":[163,80],"./ion-searchbar-md.entry.js":[164,81],"./ion-segment_2-ios.entry.js":[165,82],"./ion-segment_2-md.entry.js":[166,83],"./ion-select_3-ios.entry.js":[167,84],"./ion-select_3-md.entry.js":[168,85],"./ion-slide_2-ios.entry.js":[169,86],"./ion-slide_2-md.entry.js":[170,87],"./ion-spinner.entry.js":[171,39],"./ion-split-pane-ios.entry.js":[172,40],"./ion-split-pane-md.entry.js":[173,41],"./ion-tab-bar_2-ios.entry.js":[174,42],"./ion-tab-bar_2-md.entry.js":[175,43],"./ion-tab_2.entry.js":[176,44],"./ion-text.entry.js":[177,45],"./ion-textarea-ios.entry.js":[178,46],"./ion-textarea-md.entry.js":[179,47],"./ion-toast-ios.entry.js":[180,63],"./ion-toast-md.entry.js":[181,64],"./ion-toggle-ios.entry.js":[182,48],"./ion-toggle-md.entry.js":[183,49],"./ion-virtual-scroll.entry.js":[184,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=84,e.exports=r},86:function(e,t,n){var a={"./ion-icon.entry.js":[188,90]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=86,e.exports=r},87:function(e,t,n){}},[[106,7,51]]]);
//# sourceMappingURL=main.a82d0b5f.chunk.js.map
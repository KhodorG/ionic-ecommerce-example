(this["webpackJsonpionic-ecommerce-example"]=this["webpackJsonpionic-ecommerce-example"]||[]).push([[1],{27:function(e,t,c){e.exports={categoryPage:"Product_categoryPage__RUoc9",categoryCard:"Product_categoryCard__3BAD3",productCardActions:"Product_productCardActions__2-3NL",productCardAction:"Product_productCardAction__34j5V",productCardHeader:"Product_productCardHeader__2qhEn",categoryCardContent:"Product_categoryCardContent__1pm46",productPrice:"Product_productPrice__1k5rj"}},28:function(e,t,c){e.exports={categoryPage:"ProductCard_categoryPage__2Zfz8",categoryCard:"ProductCard_categoryCard__vo3ut",productCardActions:"ProductCard_productCardActions__2ySpT",productCardAction:"ProductCard_productCardAction__8_20C",productCardHeader:"ProductCard_productCardHeader__ssZQX",categoryCardContent:"ProductCard_categoryCardContent__2v3IG",productPrice:"ProductCard_productPrice__1doXX"}},31:function(e,t,c){e.exports={cartCheckout:"CartProducts_cartCheckout__1TADU",cartFooter:"CartProducts_cartFooter__cjX_o",cartItem:"CartProducts_cartItem__1Jnkm",cartSlider:"CartProducts_cartSlider__16WMJ",cartActions:"CartProducts_cartActions__2l8wA"}},41:function(e,t,c){e.exports={categoryPage:"CategoryProducts_categoryPage__2wGoZ",search:"CategoryProducts_search___M9Mp"}},42:function(e,t,c){e.exports={homePage:"Home_homePage__2AdWy",logo:"Home_logo__1dCHP",categoryCard:"Home_categoryCard__2thv4",categoryCardContent:"Home_categoryCardContent__c5gAk"}},67:function(e,t,c){var r={"./ion-action-sheet.entry.js":[94,5],"./ion-alert.entry.js":[95,6],"./ion-app_8.entry.js":[96,7],"./ion-avatar_3.entry.js":[97,17],"./ion-back-button.entry.js":[98,18],"./ion-backdrop.entry.js":[99,43],"./ion-button_2.entry.js":[100,19],"./ion-card_5.entry.js":[101,20],"./ion-checkbox.entry.js":[102,21],"./ion-chip.entry.js":[103,22],"./ion-col_3.entry.js":[104,44],"./ion-datetime_3.entry.js":[105,10],"./ion-fab_3.entry.js":[106,23],"./ion-img.entry.js":[107,45],"./ion-infinite-scroll_2.entry.js":[108,46],"./ion-input.entry.js":[109,24],"./ion-item-option_3.entry.js":[110,25],"./ion-item_8.entry.js":[111,26],"./ion-loading.entry.js":[112,27],"./ion-menu_3.entry.js":[113,28],"./ion-modal.entry.js":[114,8],"./ion-nav_2.entry.js":[115,14],"./ion-popover.entry.js":[116,9],"./ion-progress-bar.entry.js":[117,29],"./ion-radio_2.entry.js":[118,30],"./ion-range.entry.js":[119,31],"./ion-refresher_2.entry.js":[120,11],"./ion-reorder_2.entry.js":[121,16],"./ion-ripple-effect.entry.js":[122,47],"./ion-route_4.entry.js":[123,32],"./ion-searchbar.entry.js":[124,33],"./ion-segment_2.entry.js":[125,34],"./ion-select_3.entry.js":[126,35],"./ion-slide_2.entry.js":[127,48],"./ion-spinner.entry.js":[128,13],"./ion-split-pane.entry.js":[129,49],"./ion-tab-bar_2.entry.js":[130,36],"./ion-tab_2.entry.js":[131,15],"./ion-text.entry.js":[132,37],"./ion-textarea.entry.js":[133,38],"./ion-toast.entry.js":[134,39],"./ion-toggle.entry.js":[135,12],"./ion-virtual-scroll.entry.js":[136,50]};function n(e){if(!c.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return c.e(t[1]).then((function(){return c(n)}))}n.keys=function(){return Object.keys(r)},n.id=67,e.exports=n},69:function(e,t,c){var r={"./ion-icon.entry.js":[137,57]};function n(e){if(!c.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return c.e(t[1]).then((function(){return c(n)}))}n.keys=function(){return Object.keys(r)},n.id=69,e.exports=n},91:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(36),o=c.n(a),s=c(21),i=c(2),d=c(56),u=c(42),j=c.n(u),l=c(5),b=c(34),p=new b.a({products:[]}),O=c(15),h=new b.a({total:0,product_ids:[]}),f=function(e,t){h.update((function(c){c.product_ids=[].concat(Object(O.a)(c.product_ids),["".concat(e,"/").concat(parseInt(t))])}))},x=new b.a({total:0,product_ids:[]}),_=function(e,t){x.update((function(c){c.product_ids=[].concat(Object(O.a)(c.product_ids),["".concat(e,"/").concat(parseInt(t))])}))},m=function(e){x.update((function(t){t.product_ids.splice(e,1)}))},g=c(1),y=function(){var e=p.useState((function(e){return e.products})),t=h.useState((function(e){return e.product_ids})),c=x.useState((function(e){return e.product_ids}));return Object(g.jsxs)(i.z,{id:"home-page",className:j.a.homePage,children:[Object(g.jsx)(i.n,{children:Object(g.jsxs)(i.F,{children:[Object(g.jsx)(i.E,{children:"Categories"}),Object(g.jsx)(i.e,{slot:"start",className:"ion-padding-start",children:Object(g.jsx)(i.i,{className:j.a.logo,children:"Ionic Furniture"})}),Object(g.jsxs)(i.e,{slot:"end",children:[Object(g.jsx)(i.c,{color:"danger",children:t.length}),Object(g.jsx)(i.d,{color:"danger",routerLink:"/favourites",children:Object(g.jsx)(i.o,{icon:l.m})}),Object(g.jsx)(i.c,{color:"dark",children:c.length}),Object(g.jsx)(i.d,{color:"dark",routerLink:"/cart",children:Object(g.jsx)(i.o,{icon:l.d})})]})]})}),Object(g.jsxs)(i.k,{fullscreen:!0,children:[Object(g.jsx)(i.n,{collapse:"condense",children:Object(g.jsx)(i.F,{children:Object(g.jsx)(i.E,{size:"large",children:"Categories"})})}),Object(g.jsx)(i.m,{children:Object(g.jsx)(i.C,{children:e.map((function(e,t){return Object(g.jsx)(i.j,{size:"6",children:Object(g.jsxs)(i.f,{routerLink:"/category/".concat(e.slug),className:j.a.categoryCard,children:[Object(g.jsx)("img",{src:e.cover,alt:"category cover"}),Object(g.jsx)(i.g,{className:j.a.categoryCardContent,children:Object(g.jsx)(i.i,{children:e.name})})]})},"category_list_".concat(t))}))})})]})]})},C=(c(81),c(82),c(83),c(84),c(85),c(86),c(87),c(88),c(89),c(90),c(91),c(4)),v=c.n(C),k=c(11),N=function(){var e=Object(k.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],["beds.json","armchairs.json","coffee_tables.json","cushions.json","floor_lamps.json","office_chairs.json"].forEach(function(){var e=Object(k.a)(v.a.mark((function e(t){var c,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:c=e.sent,r=(r=t.replace(".json","")).replace("_"," "),r=S(r),n={name:r,slug:t.replace(".json",""),cover:c[6].image,products:c},p.update((function(e){e.products=[].concat(Object(O.a)(e.products),[n])}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(k.a)(v.a.mark((function e(t){var c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("products/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,e.next=8,r.forEach((function(e,t){e.id=t+1}));case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return e=e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")},w=c(6),E=c(28),A=c.n(E),L=function(e){var t=e.product,c=e.category,n=e.index,a=e.cartRef,o=h.useState((function(e){return e.product_ids})),s=Object(r.useRef)(),d=Object(r.useRef)(),u=Object(r.useState)(!1),j=Object(w.a)(u,2),b=j[0],p=j[1];Object(r.useEffect)((function(){var e=o.find((function(e){return e==="".concat(c.slug,"/").concat(t.id)}));p(!!e)}),[e.product,o]);return Object(g.jsx)(i.j,{size:"6",children:Object(g.jsxs)(i.f,{routerLink:"/category/".concat(c.slug,"/").concat(t.id),className:A.a.categoryCard,children:[Object(g.jsxs)(i.h,{className:A.a.productCardHeader,children:[Object(g.jsxs)("div",{className:A.a.productCardActions,children:[Object(g.jsx)(i.o,{className:A.a.productCardAction,color:b?"danger":"medium",icon:b?l.m:l.n,onClick:function(e){return function(e,t,c){e.preventDefault(),e.stopPropagation(),f(t,c),d.current.style.display="",d.current.classList.add("animate__fadeOutTopRight"),setTimeout((function(){d.current.classList.remove("animate__fadeOutTopRight"),d.current.style.display="none"}),500)}(e,c.slug,t.id)}}),Object(g.jsx)(i.o,{ref:d,style:{position:"absolute",display:"none"},className:"".concat(A.a.productCardAction," animate__animated"),color:"danger",icon:l.m}),Object(g.jsx)(i.o,{className:A.a.productCardAction,size:"medium",icon:l.b})]}),Object(g.jsx)("img",{src:t.image,alt:"product pic"}),Object(g.jsx)("p",{className:"ion-text-wrap",children:t.name})]}),Object(g.jsx)(i.g,{className:A.a.categoryCardContent,children:Object(g.jsxs)("div",{className:A.a.productPrice,children:[Object(g.jsx)(i.d,{style:{width:"100%"},color:"light",children:t.price}),Object(g.jsx)(i.d,{color:"dark",onClick:function(e){return function(e,t,c){e.preventDefault(),e.stopPropagation(),s.current.style.display="",s.current.classList.add("animate__fadeOutUp"),setTimeout((function(){a.current.classList.add("animate__tada"),_(t,c),setTimeout((function(){a.current.classList.remove("animate__tada"),s.current.style.display="none"}),500)}),500)}(e,c.slug,t.id)},children:Object(g.jsx)(i.o,{icon:l.e})}),Object(g.jsx)(i.o,{ref:s,icon:l.d,color:"dark",style:{position:"absolute",display:"none",fontSize:"3rem"},className:"animate__animated"})]})})]})},"category_product_list_".concat(n))},I=c(41),z=c.n(I),F=function(){var e=Object(s.e)(),t=Object(r.useRef)(),c=p.useState((function(e){return e.products})),n=x.useState((function(e){return e.product_ids})),a=Object(r.useState)({}),o=Object(w.a)(a,2),d=o[0],u=o[1],j=Object(r.useState)([]),b=Object(w.a)(j,2),O=b[0],h=b[1],f=Object(r.useState)(6),_=Object(w.a)(f,2),m=_[0],y=_[1];Object(r.useEffect)((function(){var t=e.slug,r=c.filter((function(e){return e.slug===t}))[0];u(r),h(r.products)}),[e.slug]);var C=function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y((function(e){return e+6})),t.target.complete();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(k.a)(v.a.mark((function e(t){var c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==(c=t.target.value)?(r=d.products.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})),h(r)):h(d.products);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(i.z,{id:"category-page",className:z.a.categoryPage,children:[Object(g.jsx)(i.n,{children:Object(g.jsxs)(i.F,{children:[Object(g.jsx)(i.e,{slot:"start",children:Object(g.jsxs)(i.d,{color:"dark",text:d.name,routerLink:"/",routerDirection:"back",children:[Object(g.jsx)(i.o,{color:"dark",icon:l.h}),"\xa0Categories"]})}),Object(g.jsx)(i.E,{children:d&&d.name}),Object(g.jsxs)(i.e,{slot:"end",children:[Object(g.jsx)(i.c,{color:"dark",children:n.length}),Object(g.jsx)(i.d,{color:"dark",routerLink:"/cart",children:Object(g.jsx)(i.o,{ref:t,className:"animate__animated",icon:l.d})})]})]})}),Object(g.jsxs)(i.k,{fullscreen:!0,children:[Object(g.jsx)(i.D,{className:z.a.search,onKeyUp:N,placeholder:"Search by name...",searchIcon:l.s,animated:!0}),Object(g.jsxs)(i.m,{children:[Object(g.jsx)(i.C,{className:"ion-text-center",children:Object(g.jsx)(i.j,{size:"12",children:Object(g.jsxs)(i.y,{children:[O&&O.length," ",O.length>1||0===O.length?" products":" product"," found"]})})}),Object(g.jsx)(i.C,{children:O&&O.map((function(e,c){if(c<=m&&e.image)return Object(g.jsx)(L,{product:e,index:c,cartRef:t,category:d},"category_product_".concat(c))}))})]}),Object(g.jsx)(i.q,{threshold:"100px",onIonInfinite:C,children:Object(g.jsx)(i.r,{loadingSpinner:"bubbles",loadingText:"Fetching more..."})})]})]})},D=c(27),R=c.n(D),T=function(){var e=Object(s.e)(),t=Object(r.useRef)(),c=p.useState((function(e){return e.products})),n=h.useState((function(e){return e.product_ids})),a=Object(r.useState)(!1),o=Object(w.a)(a,2),d=o[0],u=o[1],j=x.useState((function(e){return e.product_ids})),b=Object(r.useState)({}),O=Object(w.a)(b,2),m=O[0],y=O[1],C=Object(r.useState)({}),v=Object(w.a)(C,2),k=v[0],N=v[1];Object(r.useEffect)((function(){var t=e.slug,r=e.id,a=c.filter((function(e){return e.slug===t}))[0],o=a.products.filter((function(e){return parseInt(e.id)===parseInt(r)}))[0],s=n.find((function(e){return e==="".concat(t,"/").concat(r)}));u(s),N(a),y(o)}),[e.slug,e.id]),Object(r.useEffect)((function(){var e=n.find((function(e){return e==="".concat(k.slug,"/").concat(m.id)}));u(!!e)}),[n,m]);return Object(g.jsxs)(i.z,{id:"category-page",className:R.a.categoryPage,children:[Object(g.jsx)(i.n,{children:Object(g.jsxs)(i.F,{children:[Object(g.jsx)(i.e,{slot:"start",children:Object(g.jsxs)(i.d,{color:"dark",text:k.name,routerLink:"/category/".concat(k.slug),routerDirection:"back",children:[Object(g.jsx)(i.o,{color:"dark",icon:l.h}),"\xa0",k.name]})}),Object(g.jsx)(i.E,{children:"View Product"}),Object(g.jsxs)(i.e,{slot:"end",children:[Object(g.jsx)(i.c,{color:"dark",children:j.length}),Object(g.jsx)(i.d,{color:"dark",routerLink:"/cart",children:Object(g.jsx)(i.o,{ref:t,className:"animate__animated",icon:l.d})})]})]})}),Object(g.jsx)(i.k,{fullscreen:!0,children:Object(g.jsxs)(i.m,{children:[Object(g.jsx)(i.C,{children:Object(g.jsx)(i.j,{size:"12",children:Object(g.jsxs)(i.f,{className:R.a.categoryCard,children:[Object(g.jsxs)(i.h,{className:R.a.productCardHeader,children:[Object(g.jsxs)("div",{className:R.a.productCardActions,children:[Object(g.jsx)(i.o,{className:R.a.productCardAction,color:d?"danger":"medium",icon:d?l.m:l.n,onClick:function(e){return function(e,t,c){e.preventDefault(),f(t,c),document.getElementById("placeholder_favourite_product_".concat(t,"_").concat(c)).style.display="",document.getElementById("placeholder_favourite_product_".concat(t,"_").concat(c)).classList.add("animate__fadeOutTopRight")}(e,k.slug,m.id)}}),Object(g.jsx)(i.o,{style:{position:"absolute",display:"none"},id:"placeholder_favourite_product_".concat(k.slug,"_").concat(m.id),className:"".concat(R.a.productCardAction," animate__animated"),color:"danger",icon:l.m}),Object(g.jsx)(i.o,{className:R.a.productCardAction,size:"medium",icon:l.b})]}),Object(g.jsx)("img",{src:m.image,alt:"product pic"}),Object(g.jsx)("p",{className:"ion-text-wrap",children:m.name})]}),Object(g.jsx)(i.g,{className:R.a.categoryCardContent,children:Object(g.jsxs)("div",{className:R.a.productPrice,children:[Object(g.jsx)(i.d,{color:"light",size:"large",children:m.price}),Object(g.jsxs)(i.d,{size:"large",color:"dark",onClick:function(e){return function(e,c,r){e.preventDefault(),document.getElementById("placeholder_cart_".concat(c,"_").concat(r)).style.display="",document.getElementById("placeholder_cart_".concat(c,"_").concat(r)).classList.add("animate__fadeOutUp"),setTimeout((function(){t.current.classList.add("animate__tada"),_(c,r),setTimeout((function(){t.current.classList.remove("animate__tada")}),500)}),500)}(e,k.slug,m.id)},children:[Object(g.jsx)(i.o,{icon:l.e}),"\xa0\xa0Add to Cart"]}),Object(g.jsx)(i.o,{icon:l.d,color:"dark",style:{position:"absolute",display:"none",fontSize:"3rem"},id:"placeholder_cart_".concat(k.slug,"_").concat(m.id),className:"animate__animated"})]})})]})})}),Object(g.jsx)(i.C,{className:"ion-text-center",children:Object(g.jsx)(i.j,{size:"12",children:Object(g.jsx)(i.i,{children:"Similar products..."})})}),Object(g.jsx)(i.C,{children:k&&k.products&&k.products.map((function(e,c){if(e.id!==m.id&&m.image&&c<4)return Object(g.jsx)(L,{product:e,index:c,isFavourite:!1,cartRef:t,category:k},"similar_product_".concat(c))}))})]})})]})},H=function(){var e=Object(r.useRef)(),t=p.useState((function(e){return e.products})),c=h.useState((function(e){return e.product_ids})),n=x.useState((function(e){return e.product_ids})),a=Object(r.useState)([]),o=Object(w.a)(a,2),s=o[0],d=o[1],u=Object(r.useState)(6),j=Object(w.a)(u,2),b=j[0],f=j[1];Object(r.useEffect)((function(){c.forEach((function(e){var c=e.split("/"),r=c[0],n=c[1],a=t.filter((function(e){return e.slug===r}))[0],o=a.products.filter((function(e){return parseInt(e.id)===parseInt(n)}))[0],s={category:a,product:o};d((function(e){return[].concat(Object(O.a)(e),[s])}))}))}),[c]);var _=function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f((function(e){return e+6})),t.target.complete();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(i.z,{id:"category-page",className:z.a.categoryPage,children:[Object(g.jsx)(i.n,{children:Object(g.jsxs)(i.F,{children:[Object(g.jsx)(i.e,{slot:"start",children:Object(g.jsxs)(i.d,{color:"dark",routerLink:"/",routerDirection:"back",children:[Object(g.jsx)(i.o,{color:"dark",icon:l.h}),"\xa0Categories"]})}),Object(g.jsx)(i.E,{children:"Favourites"}),Object(g.jsxs)(i.e,{slot:"end",children:[Object(g.jsx)(i.c,{color:"dark",children:n.length}),Object(g.jsx)(i.d,{color:"dark",children:Object(g.jsx)(i.o,{ref:e,className:"animate__animated",icon:l.d})})]})]})}),Object(g.jsxs)(i.k,{fullscreen:!0,children:[Object(g.jsxs)(i.m,{children:[Object(g.jsx)(i.C,{className:"ion-text-center",children:Object(g.jsx)(i.j,{size:"12",children:Object(g.jsxs)(i.y,{children:[s&&s.length," ",s.length>1||0===s.length?" favourites":" favourite"," found"]})})}),Object(g.jsx)(i.C,{children:s&&s.map((function(t,c){if(c<=b)return Object(g.jsx)(L,{product:t.product,index:c,cartRef:e,category:t.category},"category_product_".concat(c))}))})]}),Object(g.jsx)(i.q,{threshold:"100px",onIonInfinite:_,children:Object(g.jsx)(i.r,{loadingSpinner:"bubbles",loadingText:"Fetching more..."})})]})]})},U=c(31),B=c.n(U),M=function(){var e=Object(r.useRef)(),t=p.useState((function(e){return e.products})),c=x.useState((function(e){return e.product_ids})),n=Object(r.useState)([]),a=Object(w.a)(n,2),o=a[0],s=a[1],d=Object(r.useState)(6),u=Object(w.a)(d,2),j=u[0],b=(u[1],Object(r.useState)(0)),h=Object(w.a)(b,2),f=h[0],_=h[1];Object(r.useEffect)((function(){s([]),_(0),c.forEach((function(e){var c=e.split("/"),r=c[0],n=c[1],a=t.filter((function(e){return e.slug===r}))[0],o=a.products.filter((function(e){return parseInt(e.id)===parseInt(n)}))[0],i={category:a,product:o};_((function(e){return e+parseInt(o.price.replace("\xa3",""))})),s((function(e){return[].concat(Object(O.a)(e),[i])}))}))}),[c]);var y=function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(i.z,{id:"category-page",className:B.a.categoryPage,children:[Object(g.jsx)(i.n,{children:Object(g.jsxs)(i.F,{children:[Object(g.jsx)(i.e,{slot:"start",children:Object(g.jsxs)(i.d,{color:"dark",routerLink:"/",routerDirection:"back",children:[Object(g.jsx)(i.o,{color:"dark",icon:l.h}),"\xa0Categories"]})}),Object(g.jsx)(i.E,{children:"Cart"}),Object(g.jsxs)(i.e,{slot:"end",children:[Object(g.jsx)(i.c,{color:"dark",children:c.length}),Object(g.jsx)(i.d,{color:"dark",children:Object(g.jsx)(i.o,{ref:e,className:"animate__animated",icon:l.d})})]})]})}),Object(g.jsxs)(i.k,{fullscreen:!0,children:[Object(g.jsx)(i.C,{className:"ion-text-center ion-margin-top",children:Object(g.jsx)(i.j,{size:"12",children:Object(g.jsxs)(i.y,{children:[o&&o.length," ",o.length>1||0===o.length?" products":" product"," found"]})})}),Object(g.jsx)(i.x,{children:o&&o.map((function(e,t){if(t<=j)return Object(g.jsxs)(i.v,{className:B.a.cartSlider,children:[Object(g.jsxs)(i.s,{lines:"none",detail:!1,className:B.a.cartItem,children:[Object(g.jsx)(i.b,{children:Object(g.jsx)(i.p,{src:e.product.image})}),Object(g.jsxs)(i.w,{className:"ion-padding-start ion-text-wrap",children:[Object(g.jsx)("p",{children:e.category.name}),Object(g.jsx)("h4",{children:e.product.name})]}),Object(g.jsx)("div",{className:B.a.cartActions,children:Object(g.jsx)(i.c,{color:"dark",children:e.product.price})})]},t),Object(g.jsx)(i.u,{side:"end",children:Object(g.jsx)(i.t,{color:"danger",style:{paddingLeft:"1rem",paddingRight:"1rem"},onClick:function(){return y(t)},children:Object(g.jsx)(i.o,{icon:l.u})})})]})}))})]}),Object(g.jsx)(i.l,{className:B.a.cartFooter,children:Object(g.jsxs)("div",{className:B.a.cartCheckout,children:[Object(g.jsxs)(i.i,{children:["\xa3",f.toFixed(2)]}),Object(g.jsxs)(i.d,{color:"dark",children:[Object(g.jsx)(i.o,{icon:l.f}),"\xa0Checkout"]})]})})]})},J=function(){return Object(r.useEffect)((function(){N()}),[]),Object(g.jsx)(i.a,{children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(i.B,{children:[Object(g.jsx)(s.b,{path:"/",exact:!0,children:Object(g.jsx)(s.a,{to:"/home"})}),Object(g.jsx)(s.b,{path:"/home",exact:!0,children:Object(g.jsx)(y,{})}),Object(g.jsx)(s.b,{path:"/favourites",exact:!0,children:Object(g.jsx)(H,{})}),Object(g.jsx)(s.b,{path:"/cart",exact:!0,children:Object(g.jsx)(M,{})}),Object(g.jsx)(s.b,{path:"/category/:slug",exact:!0,children:Object(g.jsx)(F,{})}),Object(g.jsx)(s.b,{path:"/category/:slug/:id",exact:!0,children:Object(g.jsx)(T,{})})]})})})};o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root"))}},[[92,3,4]]]);
//# sourceMappingURL=main.61840c5e.chunk.js.map
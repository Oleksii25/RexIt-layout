(this["webpackJsonprexit-layout"]=this["webpackJsonprexit-layout"]||[]).push([[0],Array(34).concat([function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),r=c.n(s),i=c(10),o=c(13),l=(c(34),c(9)),f="ADD",j="REMOVE",u=(c(35),c.p+"static/media/semen.e86e65ea.svg"),d=c(0);function m(e){var t=e.order,c=e.onClick,n=t.soy,a=t.sesame,s=t.corn,r=t.wheat,i=t.weight,o=t.price;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:u,alt:"semen ico",className:"order-info__semen"}),Object(d.jsxs)("div",{className:"order-info__numbers",children:[Object(d.jsxs)("div",{className:"order-info__proportion",children:[n,"%"]}),Object(d.jsxs)("div",{className:"order-info__proportion",children:[a,"%"]}),Object(d.jsxs)("div",{className:"order-info__proportion",children:[r,"%"]}),Object(d.jsxs)("div",{className:"order-info__proportion",children:[s,"%"]}),Object(d.jsxs)("div",{className:"order-info__weight",children:[i," kg"]}),Object(d.jsxs)("div",{className:"order-info__price",children:[o," \u20ac"]})]}),Object(d.jsx)("button",{type:"button",className:"order-info__remove-order",onClick:function(){return c(t)}})]})}var b=a.a.memo(m),O=c.p+"static/media/ingredient1.ce6acb3e.svg",h=c.p+"static/media/ingredient2.d4d27a61.svg",_=c.p+"static/media/ingredient3.023cd4fa.svg",p=c.p+"static/media/ingredient4.f90d9b26.svg";c(37);function x(e){var t=e.onClick,c=e.infoVisible,n=Object(i.c)((function(e){return e.orders.orders})),a=Object(i.b)(),s=n.reduce((function(e,t){return e+t.price}),0),r=function(e){a({type:j,payload:e})};return Object(d.jsxs)("section",{className:"order-info",style:{display:c?"block":"none"},children:[Object(d.jsx)("button",{type:"button",className:"order-info__button-close",onClick:function(){t(!1)}}),Object(d.jsxs)("div",{className:"order-info__logos",children:[Object(d.jsx)("img",{src:O,alt:"first ingredient",className:"order-info__logo"}),Object(d.jsx)("img",{src:h,alt:"second ingredient",className:"order-info__logo"}),Object(d.jsx)("img",{src:_,alt:"third ingredient",className:"order-info__logo"}),Object(d.jsx)("img",{src:p,alt:"fourth ingredient",className:"order-info__logo"})]}),Object(d.jsx)("ul",{className:"order-info__list",children:n.map((function(e){return Object(d.jsx)("li",{className:"order-info__item",children:Object(d.jsx)(b,{order:e,onClick:r})},e.id)}))}),Object(d.jsxs)("div",{className:"order-info__amount",children:[Object(d.jsxs)("span",{className:"order-info__total",children:["TOTAL:",Object(d.jsxs)("span",{children:[s," \u20ac"]})]}),Object(d.jsx)("button",{className:"order-info__button-check",onClick:function(){n.length||alert("Make an order")},children:"CHECKOUT"})]})]})}var g=a.a.memo(x);c(38);function v(){var e=Object(i.c)((function(e){return e.orders.orders})),t=e.reduce((function(e,t){return e+t.price}),0),c=Object(n.useState)(!1),a=Object(l.a)(c,2),s=a[0],r=a[1];return Object(d.jsx)("div",{className:"upper-info",children:Object(d.jsxs)("div",{className:"upper-info__wrapper",children:[Object(d.jsx)(g,{onClick:r,infoVisible:s}),Object(d.jsxs)("div",{className:"upper-info__orders",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAMAAAB1owf/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAfhQTFRF9/f39/f39/f39/f39/f39/f3AAAA9/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f3PsdErwAAAKh0Uk5TJIl4Z0sfAPhuX3WUvOC1bybfK9e4j2U2MnTNymsQ1j7/4+/2umg6iBjDLdq3wqn8+qxH3AOgNeLkpH/pcMFEjNIhZMd+Vop30J3YpmFD8UDmngpMSDHrNL25OPTuUTkoonKOqHPw7JeQEk1eHP5Qo1XbxsXqAmPojaFPtuWnSaq+Qt4izN0j/V09+4CaN9nEaed6k/k7DZFOYi+lPzB7CIKtZn2/HQVq1FpiiAAAAeNJREFUeJxlz+tXEmEQBvB1oddEKS6FsRQ8sCWxGrtAypKmBaaJlGYulSBo0l3LqMgsIytDLO2q3e+3f7N3QT1q82nm/M48c4ZhKliNdhP5v5jKzVW66hr9lq2GjWI0mbdtt9TusHK2nbvWid0BwOnid++pc+vde9eIR0B9A/Z5RUg+PxvQ7V+VxqagHDqA5hYP3T3Y2nbo8IrowpEQ2o9I6OispNboOOpfFkdXW7QbsWPH0dCjp9TbesJSlr76k2CNUr8SR/TUaUqipt1aEnJmIJEcFPlUWoasDFECO9xZEs3ZEXgzOCcwMs4rF1TKXAyrcsl5GbjSjbgwGkDc5KMydtWmUCHXxq8jUZtFLzMahMzcoHSzznyLihLJAYG0HbIayDG3KU3cmaRC7moDQNZAswTmHqb6qSTv51UxcfQSHhiiSA4ILlhG6DT9UBVS3eJV6dFj8P4Un5gWgaqZkvTNNDkpcU+8kGLagicEzJaF5vVIlOQiO4enVjwD5s1lIZNDs+qLYkdxAVP55rHn4YllIbmKFwXVXr56/SY6Jy3al1aE5N6+c6kEnisU3uc/kFUh455FX4kQH/z4iawR8tn4Zd6dXajJOCIpsk7I12/B7+yPn79sv8kGIeRP8e9wLF3u/wH0PXEyBC+JYQAAAABJRU5ErkJggg==",alt:"semen-icon",className:"upper-info__icon"}),!e.length||Object(d.jsx)("div",{className:"upper-info__orders-amount",children:e.length})]}),Object(d.jsx)("span",{className:"upper-info__logo",children:"Cracker"}),Object(d.jsx)("span",{className:"upper-info__total ",children:"TOTAL:"}),Object(d.jsxs)("span",{className:"upper-info__amount",children:[t," \u20ac"]}),Object(d.jsx)("button",{type:"button",className:"upper-info__details",onMouseOver:function(){return r(!0)},children:"DETAILS"})]})})}var N=a.a.memo(v),A=c(3),k=c(14),C=c(11),w=c.n(C);c(39);function y(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(l.a)(s,2),i=r[0],o=r[1],f=Object(A.d)();Object(n.useEffect)((function(){window.innerWidth<=800&&o(!1),a(window.innerWidth),window.addEventListener("resize",(function(){a(window.innerWidth),window.innerWidth<=800?o(!1):o(!0)}))}),[]);var j=function(){c<800&&o(!1)};return Object(d.jsxs)("nav",{className:"nav",name:"navigation",id:"home",children:[Object(d.jsx)("button",{className:w()({"nav__icon--active":i,nav__icon:!i}),onClick:function(){o((function(e){return!e}))}}),i&&Object(d.jsxs)("ul",{className:w()({nav__list:c>800,"nav__list--width800":c<800}),children:[Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(k.a,{to:"#home",className:w()("nav__link",{"nav__link--active":f.hash.includes("#home")||0===f.hash.length}),onClick:j,children:"HOME"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(k.a,{to:"#about us",className:w()("nav__link",{"nav__link--active":f.hash.includes("#about us")}),onClick:j,children:"ABOUT US"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(k.a,{to:"#contacts",className:w()("nav__link",{"nav__link--active":f.hash.includes("#contacts")}),onClick:j,children:"CONTACTS"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(k.a,{to:"#constructor",className:w()("nav__link",{"nav__link--active":f.hash.includes("#constructor")}),onClick:j,children:"CHECKOUT"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(k.a,{to:"#share",className:w()("nav__link",{"nav__link--active":f.hash.includes("#share")}),onClick:j,children:"ACCOUNT"})})]})]})}c(42);function E(){return Object(d.jsxs)("section",{className:"tasty",children:[Object(d.jsx)("h1",{className:"tasty__title",children:"MOSTLY TASTES WITH FRESHES"}),Object(d.jsx)("article",{className:"tasty__content",children:Object(d.jsx)("p",{className:"tasty__text",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"})}),Object(d.jsx)("a",{href:"#constructor",className:"tasty__button",children:" TASTE IT"})]})}var S=a.a.memo(E);c(43);function T(){return Object(d.jsxs)("section",{className:"upper-section",children:[Object(d.jsx)(N,{}),Object(d.jsx)(y,{}),Object(d.jsx)(S,{})]})}var U=a.a.memo(T);c(44);function q(){return Object(d.jsxs)("section",{className:"about",id:"about us",children:[Object(d.jsx)("h2",{className:"about__title",children:"ABOUT CRACKER"}),Object(d.jsx)("div",{className:"about__cookie"}),Object(d.jsxs)("article",{className:"about__content",children:[Object(d.jsx)("p",{className:"about__text",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."}),Object(d.jsx)("span",{className:"about__logo",children:"Cracker"})]})]})}var L=a.a.memo(q),R=c(20),I=c(4);c(45),c(46),c(47),c(48),c(49);function P(e){var t=e.icon,c=e.name,n=e.onChange,a=e.value,s=e.disabled;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:t,alt:"".concat(c," icon"),className:"constructor__ingridient-icon"}),Object(d.jsx)("input",{onChange:function(e){var t=e.target;return n(t.value,t.name)},name:c,type:"range",className:"constructor__input constructor__input--".concat(c),max:"100",min:"0",value:a,disabled:s}),Object(d.jsxs)("span",{className:"constructor__proportion-value",children:[a,"%"]})]})}var F=a.a.memo(P);c(50);function H(e){var t=e.changeSize,c=e.hidePacageMenu;return Object(d.jsxs)("ul",{className:"constructor__pacage-list",onClick:function(){return c(!1)},children:[Object(d.jsx)("li",{className:"constructor__pacage-item",onClick:function(){return t("small")},children:"SMALL PACK"},"small"),Object(d.jsx)("li",{className:"constructor__pacage-item",onClick:function(){return t("medium")},children:"MEDIUM PACK"},"medium"),Object(d.jsx)("li",{className:"constructor__pacage-item",onClick:function(){return t("large")},children:"LARGE PACK"},"large")]})}var M=a.a.memo(H),D=(c(51),c.p+"static/media/soybean.5c174538.svg"),K=c.p+"static/media/sesame.8174e601.svg",B=c.p+"static/media/wheat.66990852.svg",J=c.p+"static/media/corn.b97762aa.svg",z=c.p+"static/media/pacage.fd874014.svg";function Q(){var e={soy:0,sesame:33,wheat:33,corn:34,weight:0,price:0},t=Object(i.c)((function(e){return e.orders.orders})).reduce((function(e,t){return e+t.price}),0),c=Object(i.b)(),a=Object(n.useState)(""),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(n.useState)(225),u=Object(l.a)(j,2),m=u[0],b=u[1],O=Object(n.useState)(!1),h=Object(l.a)(O,2),_=h[0],p=h[1],x=Object(n.useState)(e),g=Object(l.a)(x,2),v=g[0],N=g[1],A=Object(n.useState)(1),k=Object(l.a)(A,2),C=k[0],w=k[1],y=function(e,t){var c=v.wheat;v.corn+c+v.sesame-v[t]+ +e>100||(N(Object(I.a)(Object(I.a)({},v),{},Object(R.a)({},t,+e))),N((function(e){var t=100-(e.wheat+e.corn+e.sesame);return Object(I.a)(Object(I.a)({},e),{},{soy:t})})))};return Object(d.jsxs)("section",{className:"constructor",id:"constructor",children:[Object(d.jsx)("h2",{className:"constructor__title",children:"CRACKER CONSTRUCTOR"}),Object(d.jsxs)("span",{className:"constructor__value",children:["CURRENT VALUE: ",Object(d.jsxs)("span",{className:"constructor__price",children:[t,"\u20ac"]})]}),Object(d.jsxs)("div",{className:"constructor__icons-wrapper--700px",children:[Object(d.jsx)("img",{src:D,alt:"soy icon",name:"soy"}),Object(d.jsx)("img",{src:K,alt:"sesame icon",name:"sesame"}),Object(d.jsx)("img",{src:B,alt:"wheat icon",name:"wheat"}),Object(d.jsx)("img",{src:J,alt:"corn icon",name:"corn"})]}),Object(d.jsxs)("ul",{className:"constructor__range-list",children:[Object(d.jsx)("li",{className:"constructor__item",children:Object(d.jsx)(F,{value:v.soy,name:"soy",icon:D,onChange:y,disabled:!0})}),Object(d.jsx)("li",{className:"constructor__item",children:Object(d.jsx)(F,{value:v.sesame,name:"sesame",icon:K,onChange:y,disabled:!1})}),Object(d.jsx)("li",{className:"constructor__item",children:Object(d.jsx)(F,{value:v.wheat,name:"wheat",icon:B,onChange:y,disabled:!1})}),Object(d.jsx)("li",{className:"constructor__item",children:Object(d.jsx)(F,{value:v.corn,name:"corn",icon:J,onChange:y,disabled:!1})})]}),Object(d.jsxs)("div",{className:"constructor__pacage-wrapper",children:[Object(d.jsx)("img",{src:z,alt:"pacage icon",className:"constructor__pacage-icon"}),Object(d.jsx)("button",{className:"constructor__pacage-button",type:"button",onClick:function(){return p((function(e){return!e}))},children:r||"CHOOSE YOUR PACK"}),_&&Object(d.jsx)(M,{changeSize:function(e){switch(o("".concat(e.toUpperCase()," PACK")),e){case"small":N(Object(I.a)(Object(I.a)({},v),{},{weight:.5}));break;case"medium":N(Object(I.a)(Object(I.a)({},v),{},{weight:1}));break;case"large":N(Object(I.a)(Object(I.a)({},v),{},{weight:1.5}))}N((function(e){return Object(I.a)(Object(I.a)({},e),{},{price:50*e.weight})}))},hidePacageMenu:p})]}),Object(d.jsxs)("div",{className:"constructor__buttons",children:[Object(d.jsx)("button",{type:"button",className:"constructor__add-button",onMouseOver:function(){return b(0)}}),Object(d.jsx)("button",{type:"button",className:"constructor__hidden-button",onMouseOut:function(){return b(225)},onClick:function(){var t;0!==v.weight?(w((function(e){return e+1})),c((t=Object(I.a)(Object(I.a)({},v),{},{id:C}),{type:f,payload:t})),N(e),o("")):alert("Choose pacage size")},style:{transform:"translateX(".concat(m,"px)")},children:"ADD TO CART"})]})]})}var V=a.a.memo(Q);c(52);function W(){return Object(d.jsx)("section",{className:"middle",children:Object(d.jsxs)("div",{className:"middle__content-wrapper",children:[Object(d.jsx)(L,{}),Object(d.jsx)(V,{})]})})}var G=a.a.memo(W);c(53),c(54);function X(){return Object(d.jsxs)("article",{className:"phone",children:[Object(d.jsx)("span",{className:"phone__icon",children:"PHONE"}),Object(d.jsx)("a",{href:"tel:+439873456782",className:"phone__link",children:"+43 ( 987 ) 345 - 6782"})]})}var Z=a.a.memo(X);c(55);function Y(){return Object(d.jsxs)("article",{className:"address",id:"contacts",children:[Object(d.jsx)("span",{className:"address__icon",children:"ADDRESS"}),Object(d.jsxs)("a",{href:"https://www.google.com/maps/search/10+\r Cloverfield+Lane+++++++++Berlin,+IL+10928+++++++++\r Germany/@52.5065133,13.1445469,10z/data=!3m1!4b1",target:"_blank",rel:"noreferrer",className:"address__link",children:["Cracker Inc.",Object(d.jsx)("br",{}),"10 Cloverfield Lane",Object(d.jsx)("br",{}),"Berlin, IL 10928",Object(d.jsx)("br",{}),"Germany"]})]})}var $=a.a.memo(Y);c(56);function ee(){return Object(d.jsxs)("article",{className:"share",id:"share",children:[Object(d.jsx)("span",{className:"share__icon",children:"SHARE US"}),Object(d.jsx)("a",{name:"pinterest",href:"https://www.pinterest.com",target:"_blank",rel:"noreferrer",className:"share__link share__link--pr"}),Object(d.jsx)("a",{name:"facebook",href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",className:"share__link share__link--fb"}),Object(d.jsx)("a",{name:"google",href:"https://www.google.com",target:"_blank",rel:"noreferrer",className:"share__link share__link--gl"})]})}var te=a.a.memo(ee);function ce(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)(Z,{}),Object(d.jsx)($,{}),Object(d.jsx)(te,{})]})}var ne=a.a.memo(ce);c(57);function ae(){return Object(d.jsx)("section",{className:"bottom",children:Object(d.jsx)(ne,{})})}var se=a.a.memo(ae);var re=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(U,{}),Object(d.jsx)(G,{}),Object(d.jsx)(se,{})]})},ie=c(21),oe=c(26),le={orders:[]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{orders:[].concat(Object(oe.a)(e.orders),[t.payload])};case j:return{orders:e.orders.filter((function(e){return e!==t.payload}))};default:return e}},je=Object(ie.a)({orders:fe}),ue=Object(ie.b)(je);r.a.render(Object(d.jsx)(i.a,{store:ue,children:Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(re,{})})})}),document.getElementById("root"))}]),[[58,1,2]]]);
//# sourceMappingURL=main.ffa0d9f7.chunk.js.map
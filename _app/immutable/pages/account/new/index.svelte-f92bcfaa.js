import{S as M,i as Z,s as ee,e as o,t as w,k as I,c as l,a as c,h as N,d as s,m as A,b as E,H as K,g as q,I as t,E as B,w as R,X as te,x as W,y as Y,q as F,o as L,B as U}from"../../../chunks/index-299456bd.js";import{d as se,b as ae}from"../../../chunks/env-859c48a7.js";import{S as re,A as ne}from"../../../chunks/StarField-b4274562.js";import{a as oe}from"../../../chunks/accountStore-af10db85.js";import{g as le}from"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/MediaQuery-56179968.js";import"../../../chunks/index-c05afa88.js";import"../../../chunks/singletons-d1fb5791.js";function ce(g){let a,r,i,y,d,f,h,n,S,_,v,m,e,u,P,C,T,p,$,G,k,H;return{c(){a=o("div"),r=o("article"),i=o("h2"),y=w("Security Quest"),d=I(),f=o("p"),h=w("There is danger out in this universe, "),n=o("span"),S=w(g[0]),_=w(".  We are here to help you prepare and lock down your 3Games account!"),v=I(),m=o("p"),e=w("You can choose to complete this enire quest series or simply complete the quests that you are interested in.  Completing these quests will "),u=o("span"),P=w("enable additional security"),C=w(" to your account."),T=I(),p=o("button"),$=o("ion-icon"),G=I(),k=o("span"),H=w("Start Now!"),this.h()},l(x){a=l(x,"DIV",{class:!0});var O=c(a);r=l(O,"ARTICLE",{});var b=c(r);i=l(b,"H2",{});var X=c(i);y=N(X,"Security Quest"),X.forEach(s),d=A(b),f=l(b,"P",{});var D=c(f);h=N(D,"There is danger out in this universe, "),n=l(D,"SPAN",{class:!0});var j=c(n);S=N(j,g[0]),j.forEach(s),_=N(D,".  We are here to help you prepare and lock down your 3Games account!"),D.forEach(s),v=A(b),m=l(b,"P",{});var Q=c(m);e=N(Q,"You can choose to complete this enire quest series or simply complete the quests that you are interested in.  Completing these quests will "),u=l(Q,"SPAN",{class:!0});var z=c(u);P=N(z,"enable additional security"),z.forEach(s),C=N(Q," to your account."),Q.forEach(s),T=A(b),p=l(b,"BUTTON",{class:!0});var V=c(p);$=l(V,"ION-ICON",{class:!0,name:!0}),c($).forEach(s),G=A(V),k=l(V,"SPAN",{});var J=c(k);H=N(J,"Start Now!"),J.forEach(s),V.forEach(s),b.forEach(s),O.forEach(s),this.h()},h(){E(n,"class","highlight accent"),E(u,"class","highlight large"),K($,"class","icon svelte-cirfv3"),K($,"name","lock-closed-sharp"),p.disabled=!0,E(p,"class","svelte-cirfv3"),E(a,"class","content disabled")},m(x,O){q(x,a,O),t(a,r),t(r,i),t(i,y),t(r,d),t(r,f),t(f,h),t(f,n),t(n,S),t(f,_),t(r,v),t(r,m),t(m,e),t(m,u),t(u,P),t(m,C),t(r,T),t(r,p),t(p,$),t(p,G),t(p,k),t(k,H)},p:B,i:B,o:B,d(x){x&&s(a)}}}function ie(g){let a;return oe.subscribe(i=>{a=i}),[a.username]}class ue extends M{constructor(a){super(),Z(this,a,ie,ce,ee,{})}}function fe(g){let a,r,i,y,d,f,h,n,S,_,v,m;return d=new re({props:{hasPlayer:!1}}),n=new ne({}),n.$on("onAccountProfile",g[0]),v=new ue({}),{c(){a=I(),r=o("section"),i=o("div"),y=o("div"),R(d.$$.fragment),f=I(),h=o("section"),R(n.$$.fragment),S=I(),_=o("section"),R(v.$$.fragment),this.h()},l(e){te('[data-svelte="svelte-3iyvhc"]',document.head).forEach(s),a=A(e),r=l(e,"SECTION",{class:!0});var P=c(r);i=l(P,"DIV",{class:!0});var C=c(i);y=l(C,"DIV",{class:!0});var T=c(y);W(d.$$.fragment,T),T.forEach(s),C.forEach(s),P.forEach(s),f=A(e),h=l(e,"SECTION",{class:!0});var p=c(h);W(n.$$.fragment,p),p.forEach(s),S=A(e),_=l(e,"SECTION",{class:!0});var $=c(_);W(v.$$.fragment,$),$.forEach(s),this.h()},h(){document.title="New Player Account",E(y,"class","promo svelte-rnf8lr"),E(i,"class","content svelte-rnf8lr"),E(r,"class","new-player svelte-rnf8lr"),E(h,"class","background svelte-rnf8lr"),E(_,"class","background alternate svelte-rnf8lr")},m(e,u){q(e,a,u),q(e,r,u),t(r,i),t(i,y),Y(d,y,null),q(e,f,u),q(e,h,u),Y(n,h,null),q(e,S,u),q(e,_,u),Y(v,_,null),m=!0},p:B,i(e){m||(F(d.$$.fragment,e),F(n.$$.fragment,e),F(v.$$.fragment,e),m=!0)},o(e){L(d.$$.fragment,e),L(n.$$.fragment,e),L(v.$$.fragment,e),m=!1},d(e){e&&s(a),e&&s(r),U(d),e&&s(f),e&&s(h),U(n),e&&s(S),e&&s(_),U(v)}}}const ge=se,Se=ae,be=!0;function me(g){function a(r){le("/account/profile")}return[a]}class we extends M{constructor(a){super(),Z(this,a,me,fe,ee,{})}}export{we as default,ge as hydrate,be as prerender,Se as router};

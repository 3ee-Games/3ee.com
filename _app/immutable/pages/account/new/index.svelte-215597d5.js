import{S as M,i as Z,s as ee,e as o,t as w,k as q,c as l,a as c,h as N,d as s,m as I,b as g,H as K,g as P,I as t,E as V,w as R,X as te,x as W,y as Y,q as F,o as L,B as U}from"../../../chunks/index-8ed999ca.js";import{d as se,b as ae}from"../../../chunks/env-859c48a7.js";import{S as re,P as ne}from"../../../chunks/StarField-c4f6007c.js";import{a as oe}from"../../../chunks/accountStore-859cf7a0.js";import{g as le}from"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/index-71ac3aa5.js";import"../../../chunks/singletons-d1fb5791.js";function ce(E){let a,r,i,y,d,m,h,n,S,_,v,f,e,u,C,T,k,p,$,B,x,H;return{c(){a=o("div"),r=o("article"),i=o("h2"),y=w("Security Quest"),d=q(),m=o("p"),h=w("There is danger out in this universe, "),n=o("span"),S=w(E[0]),_=w(".  We are here to help you prepare and lock down your 3ee Games account!"),v=q(),f=o("p"),e=w("You can choose to complete this enire quest series or simply complete the quests that you are interested in.  Completing these quests will "),u=o("span"),C=w("enable additional security"),T=w(" to your account."),k=q(),p=o("button"),$=o("ion-icon"),B=q(),x=o("span"),H=w("Start Now!"),this.h()},l(O){a=l(O,"DIV",{class:!0});var A=c(a);r=l(A,"ARTICLE",{});var b=c(r);i=l(b,"H2",{});var X=c(i);y=N(X,"Security Quest"),X.forEach(s),d=I(b),m=l(b,"P",{});var G=c(m);h=N(G,"There is danger out in this universe, "),n=l(G,"SPAN",{class:!0});var j=c(n);S=N(j,E[0]),j.forEach(s),_=N(G,".  We are here to help you prepare and lock down your 3ee Games account!"),G.forEach(s),v=I(b),f=l(b,"P",{});var D=c(f);e=N(D,"You can choose to complete this enire quest series or simply complete the quests that you are interested in.  Completing these quests will "),u=l(D,"SPAN",{class:!0});var z=c(u);C=N(z,"enable additional security"),z.forEach(s),T=N(D," to your account."),D.forEach(s),k=I(b),p=l(b,"BUTTON",{class:!0});var Q=c(p);$=l(Q,"ION-ICON",{class:!0,name:!0}),c($).forEach(s),B=I(Q),x=l(Q,"SPAN",{});var J=c(x);H=N(J,"Start Now!"),J.forEach(s),Q.forEach(s),b.forEach(s),A.forEach(s),this.h()},h(){g(n,"class","highlight accent"),g(u,"class","highlight large"),K($,"class","icon svelte-cirfv3"),K($,"name","lock-closed-sharp"),p.disabled=!0,g(p,"class","svelte-cirfv3"),g(a,"class","content disabled")},m(O,A){P(O,a,A),t(a,r),t(r,i),t(i,y),t(r,d),t(r,m),t(m,h),t(m,n),t(n,S),t(m,_),t(r,v),t(r,f),t(f,e),t(f,u),t(u,C),t(f,T),t(r,k),t(r,p),t(p,$),t(p,B),t(p,x),t(x,H)},p:V,i:V,o:V,d(O){O&&s(a)}}}function ie(E){let a;return oe.subscribe(i=>{a=i}),[a.username]}class ue extends M{constructor(a){super(),Z(this,a,ie,ce,ee,{})}}function me(E){let a,r,i,y,d,m,h,n,S,_,v,f;return d=new re({props:{hasPlayer:!1}}),n=new ne({}),n.$on("onPlayGames",E[0]),v=new ue({}),{c(){a=q(),r=o("section"),i=o("div"),y=o("div"),R(d.$$.fragment),m=q(),h=o("section"),R(n.$$.fragment),S=q(),_=o("section"),R(v.$$.fragment),this.h()},l(e){te('[data-svelte="svelte-3iyvhc"]',document.head).forEach(s),a=I(e),r=l(e,"SECTION",{class:!0});var C=c(r);i=l(C,"DIV",{class:!0});var T=c(i);y=l(T,"DIV",{class:!0});var k=c(y);W(d.$$.fragment,k),k.forEach(s),T.forEach(s),C.forEach(s),m=I(e),h=l(e,"SECTION",{class:!0});var p=c(h);W(n.$$.fragment,p),p.forEach(s),S=I(e),_=l(e,"SECTION",{class:!0});var $=c(_);W(v.$$.fragment,$),$.forEach(s),this.h()},h(){document.title="New Player Account",g(y,"class","promo svelte-rnf8lr"),g(i,"class","content svelte-rnf8lr"),g(r,"class","new-player svelte-rnf8lr"),g(h,"class","background svelte-rnf8lr"),g(_,"class","background alternate svelte-rnf8lr")},m(e,u){P(e,a,u),P(e,r,u),t(r,i),t(i,y),Y(d,y,null),P(e,m,u),P(e,h,u),Y(n,h,null),P(e,S,u),P(e,_,u),Y(v,_,null),f=!0},p:V,i(e){f||(F(d.$$.fragment,e),F(n.$$.fragment,e),F(v.$$.fragment,e),f=!0)},o(e){L(d.$$.fragment,e),L(n.$$.fragment,e),L(v.$$.fragment,e),f=!1},d(e){e&&s(a),e&&s(r),U(d),e&&s(m),e&&s(h),U(n),e&&s(S),e&&s(_),U(v)}}}const ge=se,Ee=ae,Se=!0;function fe(E){function a(r){le("/games")}return[a]}class be extends M{constructor(a){super(),Z(this,a,fe,me,ee,{})}}export{be as default,ge as hydrate,Se as prerender,Ee as router};
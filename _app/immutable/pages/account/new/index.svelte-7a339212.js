import{S as M,i as X,s as ee,e as o,t as w,k as A,c as l,a as c,h as N,d as s,m as I,b as E,J as z,g as q,K as t,E as B,w as W,Z as te,x as Y,y as F,q as H,o as J,B as K}from"../../../chunks/index-d04ac737.js";import{d as se,b as ae}from"../../../chunks/env-859c48a7.js";import{S as re,A as ne}from"../../../chunks/StarField-f7b40835.js";import{a as oe}from"../../../chunks/accountStore-29a5255d.js";import{g as le}from"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/MediaQuery-c932ad83.js";import"../../../chunks/index-446a4c27.js";import"../../../chunks/singletons-d1fb5791.js";function ce(g){let a,r,i,y,d,f,h,n,S,_,v,m,e,u,P,C,T,p,$,G,k,R;return{c(){a=o("div"),r=o("article"),i=o("h2"),y=w("Security Quest"),d=A(),f=o("p"),h=w("There is danger out in this universe, "),n=o("span"),S=w(g[0]),_=w(".  We are here to help you prepare and lock down your 3Games account!"),v=A(),m=o("p"),e=w("You can choose to complete this enire quest series or simply complete the quests that you are interested in.  Completing these quests will "),u=o("span"),P=w("enable additional security"),C=w(" to your account."),T=A(),p=o("button"),$=o("ion-icon"),G=A(),k=o("span"),R=w("Start Now!"),this.h()},l(x){a=l(x,"DIV",{class:!0});var O=c(a);r=l(O,"ARTICLE",{});var b=c(r);i=l(b,"H2",{});var L=c(i);y=N(L,"Security Quest"),L.forEach(s),d=I(b),f=l(b,"P",{});var D=c(f);h=N(D,"There is danger out in this universe, "),n=l(D,"SPAN",{class:!0});var U=c(n);S=N(U,g[0]),U.forEach(s),_=N(D,".  We are here to help you prepare and lock down your 3Games account!"),D.forEach(s),v=I(b),m=l(b,"P",{});var Q=c(m);e=N(Q,"You can choose to complete this enire quest series or simply complete the quests that you are interested in.  Completing these quests will "),u=l(Q,"SPAN",{class:!0});var Z=c(u);P=N(Z,"enable additional security"),Z.forEach(s),C=N(Q," to your account."),Q.forEach(s),T=I(b),p=l(b,"BUTTON",{class:!0});var V=c(p);$=l(V,"ION-ICON",{class:!0,name:!0}),c($).forEach(s),G=I(V),k=l(V,"SPAN",{});var j=c(k);R=N(j,"Start Now!"),j.forEach(s),V.forEach(s),b.forEach(s),O.forEach(s),this.h()},h(){E(n,"class","highlight accent"),E(u,"class","highlight large"),z($,"class","icon svelte-cirfv3"),z($,"name","lock-closed-sharp"),p.disabled=!0,E(p,"class","svelte-cirfv3"),E(a,"class","content disabled")},m(x,O){q(x,a,O),t(a,r),t(r,i),t(i,y),t(r,d),t(r,f),t(f,h),t(f,n),t(n,S),t(f,_),t(r,v),t(r,m),t(m,e),t(m,u),t(u,P),t(m,C),t(r,T),t(r,p),t(p,$),t(p,G),t(p,k),t(k,R)},p:B,i:B,o:B,d(x){x&&s(a)}}}function ie(g){let a;return oe.subscribe(i=>{a=i}),[a.username]}class ue extends M{constructor(a){super(),X(this,a,ie,ce,ee,{})}}function fe(g){let a,r,i,y,d,f,h,n,S,_,v,m;return d=new re({props:{hasPlayer:!1}}),n=new ne({}),n.$on("onAccountProfile",g[0]),v=new ue({}),{c(){a=A(),r=o("section"),i=o("div"),y=o("div"),W(d.$$.fragment),f=A(),h=o("section"),W(n.$$.fragment),S=A(),_=o("section"),W(v.$$.fragment),this.h()},l(e){te('[data-svelte="svelte-3iyvhc"]',document.head).forEach(s),a=I(e),r=l(e,"SECTION",{class:!0});var P=c(r);i=l(P,"DIV",{class:!0});var C=c(i);y=l(C,"DIV",{class:!0});var T=c(y);Y(d.$$.fragment,T),T.forEach(s),C.forEach(s),P.forEach(s),f=I(e),h=l(e,"SECTION",{class:!0});var p=c(h);Y(n.$$.fragment,p),p.forEach(s),S=I(e),_=l(e,"SECTION",{class:!0});var $=c(_);Y(v.$$.fragment,$),$.forEach(s),this.h()},h(){document.title="New Player Account",E(y,"class","promo svelte-rnf8lr"),E(i,"class","content svelte-rnf8lr"),E(r,"class","new-player svelte-rnf8lr"),E(h,"class","background svelte-rnf8lr"),E(_,"class","background alternate svelte-rnf8lr")},m(e,u){q(e,a,u),q(e,r,u),t(r,i),t(i,y),F(d,y,null),q(e,f,u),q(e,h,u),F(n,h,null),q(e,S,u),q(e,_,u),F(v,_,null),m=!0},p:B,i(e){m||(H(d.$$.fragment,e),H(n.$$.fragment,e),H(v.$$.fragment,e),m=!0)},o(e){J(d.$$.fragment,e),J(n.$$.fragment,e),J(v.$$.fragment,e),m=!1},d(e){e&&s(a),e&&s(r),K(d),e&&s(f),e&&s(h),K(n),e&&s(S),e&&s(_),K(v)}}}const ge=se,Se=ae,be=!0;function me(g){function a(r){le("/account/profile")}return[a]}class we extends M{constructor(a){super(),X(this,a,me,fe,ee,{})}}export{we as default,ge as hydrate,be as prerender,Se as router};

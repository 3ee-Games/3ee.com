import{S as ae,i as le,s as re,e as u,k as E,c as f,a as d,d as c,m as k,b as m,g as N,I as r,E as X,N as ne,R as Y,t as C,w as ie,X as ce,h as O,x as oe,H as U,y as ue,J as Z,q as fe,o as _e,B as me,a0 as he}from"../../../chunks/index-8ca01e64.js";import{c as de}from"../../../chunks/briteliteStore-ee389409.js";import{a as pe}from"../../../chunks/accountStore-c3ff6133.js";import{g as ee}from"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/index-12b3acf3.js";import"../../../chunks/singletons-d1fb5791.js";function te(n,t,a){const e=n.slice();return e[1]=t[a],e}function ge(n){let t,a;return{c(){t=u("img"),this.h()},l(e){t=f(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Y(t.src,a=n[1])||m(t,"src",a),m(t,"alt","Britelite Super Charged Avatar"),m(t,"class","svelte-wlisa8")},m(e,s){N(e,t,s)},p(e,s){s&1&&!Y(t.src,a=e[1])&&m(t,"src",a)},d(e){e&&c(t)}}}function ve(n){let t,a;return{c(){t=u("source"),this.h()},l(e){t=f(e,"SOURCE",{media:!0,srcset:!0}),this.h()},h(){m(t,"media","(min-width: 100px) and (max-width: 896.98px)"),m(t,"srcset",a=n[1])},m(e,s){N(e,t,s)},p(e,s){s&1&&a!==(a=e[1])&&m(t,"srcset",a)},d(e){e&&c(t)}}}function se(n){let t,a,e,s;function o(_,h){return h&1&&(e=null),e==null&&(e=!!_[1].includes("_sm")),e?ve:ge}let l=o(n,-1),i=l(n);return{c(){t=u("li"),a=u("picture"),i.c(),s=E(),this.h()},l(_){t=f(_,"LI",{class:!0});var h=d(t);a=f(h,"PICTURE",{});var I=d(a);i.l(I),I.forEach(c),s=k(h),h.forEach(c),this.h()},h(){m(t,"class","svelte-wlisa8")},m(_,h){N(_,t,h),r(t,a),i.m(a,null),r(t,s)},p(_,h){l===(l=o(_,h))&&i?i.p(_,h):(i.d(1),i=l(_),i&&(i.c(),i.m(a,null)))},d(_){_&&c(t),i.d()}}}function be(n){let t,a=n[0],e=[];for(let s=0;s<a.length;s+=1)e[s]=se(te(n,a,s));return{c(){t=u("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=f(s,"UL",{class:!0});var o=d(t);for(let l=0;l<e.length;l+=1)e[l].l(o);o.forEach(c),this.h()},h(){m(t,"class","svelte-wlisa8")},m(s,o){N(s,t,o);for(let l=0;l<e.length;l+=1)e[l].m(t,null)},p(s,[o]){if(o&1){a=s[0];let l;for(l=0;l<a.length;l+=1){const i=te(s,a,l);e[l]?e[l].p(i,o):(e[l]=se(i),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=a.length}},i:X,o:X,d(s){s&&c(t),ne(e,s)}}}function ye(n,t,a){let{images:e=[]}=t;return n.$$set=s=>{"images"in s&&a(0,e=s.images)},[e]}class Ee extends ae{constructor(t){super(),le(this,t,ye,be,re,{images:0})}}function ke(n){let t,a,e,s,o,l,i,_,h,I,b,g,$,q,L,x,A,v,B,G,T,H,z,w,S,J,j;return w=new Ee({props:{images:n[2]}}),{c(){t=E(),a=u("section"),e=u("article"),s=u("h1"),o=C("Britelite Library"),l=E(),i=u("p"),_=C("These images were generated on "),h=C(n[3]),I=E(),b=u("div"),g=u("button"),$=u("ion-icon"),q=E(),L=u("span"),x=C("Back"),A=E(),v=u("button"),B=u("ion-icon"),G=E(),T=u("span"),H=C("Profile"),z=E(),ie(w.$$.fragment),this.h()},l(p){ce('[data-svelte="svelte-1lpizug"]',document.head).forEach(c),t=k(p),a=f(p,"SECTION",{class:!0});var F=d(a);e=f(F,"ARTICLE",{class:!0});var y=d(e);s=f(y,"H1",{});var K=d(s);o=O(K,"Britelite Library"),K.forEach(c),l=k(y),i=f(y,"P",{class:!0});var V=d(i);_=O(V,"These images were generated on "),h=O(V,n[3]),V.forEach(c),I=k(y),b=f(y,"DIV",{class:!0});var P=d(b);g=f(P,"BUTTON",{class:!0});var D=d(g);$=f(D,"ION-ICON",{class:!0,name:!0}),d($).forEach(c),q=k(D),L=f(D,"SPAN",{});var Q=d(L);x=O(Q,"Back"),Q.forEach(c),D.forEach(c),A=k(P),v=f(P,"BUTTON",{class:!0});var R=d(v);B=f(R,"ION-ICON",{class:!0,name:!0}),d(B).forEach(c),G=k(R),T=f(R,"SPAN",{});var W=d(T);H=O(W,"Profile"),W.forEach(c),R.forEach(c),P.forEach(c),z=k(y),oe(w.$$.fragment,y),y.forEach(c),F.forEach(c),this.h()},h(){document.title="3ee Games - Britelite Library",m(i,"class","svelte-b905y9"),U($,"class","icon svelte-b905y9"),U($,"name","arrow-back-circle"),m(g,"class","svelte-b905y9"),U(B,"class","icon svelte-b905y9"),U(B,"name","speedometer"),m(v,"class","svelte-b905y9"),m(b,"class","action-buttons svelte-b905y9"),m(e,"class","content"),m(a,"class","background")},m(p,M){N(p,t,M),N(p,a,M),r(a,e),r(e,s),r(s,o),r(e,l),r(e,i),r(i,_),r(i,h),r(e,I),r(e,b),r(b,g),r(g,$),r(g,q),r(g,L),r(L,x),r(b,A),r(b,v),r(v,B),r(v,G),r(v,T),r(T,H),r(e,z),ue(w,e,null),S=!0,J||(j=[Z(g,"click",n[0]),Z(v,"click",n[1])],J=!0)},p:X,i(p){S||(fe(w.$$.fragment,p),S=!0)},o(p){_e(w.$$.fragment,p),S=!1},d(p){p&&c(t),p&&c(a),me(w),J=!1,he(j)}}}function we(n){let t;de.subscribe(l=>{t=l}),pe.subscribe(l=>{});function a(){ee("/britelite/")}function e(){ee("/account/profile/")}let s=t.output_images_diffusion_status,o=typeof t.updated!="undefined"?new Date(t.updated).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null;return[a,e,s,o]}class Ce extends ae{constructor(t){super(),le(this,t,we,ke,re,{})}}export{Ce as default};

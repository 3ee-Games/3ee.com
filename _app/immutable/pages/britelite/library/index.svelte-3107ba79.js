import{S as Z,i as ee,s as te,k as b,e as r,t as k,w as ae,X as se,d as a,m as v,c as o,a as l,h as T,x as ne,b as $,H as S,g as Q,I as e,y as re,J as W,E as oe,q as le,o as ie,B as ce,$ as ue}from"../../../chunks/index-cd5daeef.js";import{I as me}from"../../../chunks/ImageGrid-1acae9c8.js";import{c as de}from"../../../chunks/briteliteStore-62efa313.js";import{a as fe}from"../../../chunks/accountStore-95234e99.js";import{g as Y}from"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/index-3d80c266.js";import"../../../chunks/singletons-d1fb5791.js";function pe(f){let n,i,t,p,B,y,_,C,D,q,m,c,g,A,I,x,G,u,E,H,N,R,U,h,w,z,X;return h=new me({props:{images:f[2]}}),{c(){n=b(),i=r("section"),t=r("article"),p=r("h1"),B=k("Britelite Library"),y=b(),_=r("p"),C=k("These images were generated on "),D=k(f[3]),q=b(),m=r("div"),c=r("button"),g=r("ion-icon"),A=b(),I=r("span"),x=k("Back"),G=b(),u=r("button"),E=r("ion-icon"),H=b(),N=r("span"),R=k("Profile"),U=b(),ae(h.$$.fragment),this.h()},l(s){se('[data-svelte="svelte-1lpizug"]',document.head).forEach(a),n=v(s),i=o(s,"SECTION",{class:!0});var j=l(i);t=o(j,"ARTICLE",{class:!0});var d=l(t);p=o(d,"H1",{});var F=l(p);B=T(F,"Britelite Library"),F.forEach(a),y=v(d),_=o(d,"P",{class:!0});var V=l(_);C=T(V,"These images were generated on "),D=T(V,f[3]),V.forEach(a),q=v(d),m=o(d,"DIV",{class:!0});var L=l(m);c=o(L,"BUTTON",{class:!0});var O=l(c);g=o(O,"ION-ICON",{class:!0,name:!0}),l(g).forEach(a),A=v(O),I=o(O,"SPAN",{});var K=l(I);x=T(K,"Back"),K.forEach(a),O.forEach(a),G=v(L),u=o(L,"BUTTON",{class:!0});var P=l(u);E=o(P,"ION-ICON",{class:!0,name:!0}),l(E).forEach(a),H=v(P),N=o(P,"SPAN",{});var M=l(N);R=T(M,"Profile"),M.forEach(a),P.forEach(a),L.forEach(a),U=v(d),ne(h.$$.fragment,d),d.forEach(a),j.forEach(a),this.h()},h(){document.title="3ee Games - Britelite Library",$(_,"class","svelte-b905y9"),S(g,"class","icon svelte-b905y9"),S(g,"name","arrow-back-circle"),$(c,"class","svelte-b905y9"),S(E,"class","icon svelte-b905y9"),S(E,"name","speedometer"),$(u,"class","svelte-b905y9"),$(m,"class","action-buttons svelte-b905y9"),$(t,"class","content"),$(i,"class","background")},m(s,J){Q(s,n,J),Q(s,i,J),e(i,t),e(t,p),e(p,B),e(t,y),e(t,_),e(_,C),e(_,D),e(t,q),e(t,m),e(m,c),e(c,g),e(c,A),e(c,I),e(I,x),e(m,G),e(m,u),e(u,E),e(u,H),e(u,N),e(N,R),e(t,U),re(h,t,null),w=!0,z||(X=[W(c,"click",f[0]),W(u,"click",f[1])],z=!0)},p:oe,i(s){w||(le(h.$$.fragment,s),w=!0)},o(s){ie(h.$$.fragment,s),w=!1},d(s){s&&a(n),s&&a(i),ce(h),z=!1,ue(X)}}}function _e(f){let n;de.subscribe(y=>{n=y}),fe.subscribe(y=>{});function i(){Y("/britelite/")}function t(){Y("/account/profile/")}let p=n.encoded_avatar,B=typeof n.updated!="undefined"?new Date(n.updated).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null;return[i,t,p,B]}class Be extends Z{constructor(n){super(),ee(this,n,_e,pe,te,{})}}export{Be as default};

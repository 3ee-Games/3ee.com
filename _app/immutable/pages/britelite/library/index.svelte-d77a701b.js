import{S as ae,i as le,s as re,w as ne,x as ie,y as oe,q as C,o as q,B as ce,e as f,c as h,a as d,d as u,b as m,g as O,n as me,p as fe,N as he,k as b,m as $,R as de,I as i,E as ue,t as L,X as _e,h as T,H as U,J as Z,a0 as pe}from"../../../chunks/index-8ca01e64.js";import{S as ge}from"../../../chunks/Saos-3434f03e.js";import{c as ve}from"../../../chunks/briteliteStore-ee389409.js";import{a as be}from"../../../chunks/accountStore-c3ff6133.js";import{g as ee}from"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/index-12b3acf3.js";import"../../../chunks/singletons-d1fb5791.js";function te(c,t,n){const e=c.slice();return e[4]=t[n],e}function $e(c){let t,n,e,s,o,l,a;return{c(){t=f("li"),n=f("picture"),e=f("source"),s=b(),o=f("img"),a=b(),this.h()},l(r){t=h(r,"LI",{class:!0});var _=d(t);n=h(_,"PICTURE",{});var y=d(n);e=h(y,"SOURCE",{media:!0,srcset:!0,width:!0,height:!0}),s=$(y),o=h(y,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),y.forEach(u),_.forEach(u),a=$(r),this.h()},h(){m(e,"media","(min-width: 100px) and (max-width: 896.98px)"),m(e,"srcset",c[4].small),m(e,"width","312"),m(e,"height","312"),de(o.src,l=c[4].normal)||m(o,"src",l),m(o,"alt","Britelite Super Charged Avatar"),m(o,"width","512"),m(o,"height","512"),m(o,"class","svelte-wlisa8"),m(t,"class","svelte-wlisa8")},m(r,_){O(r,t,_),i(t,n),i(n,e),i(n,s),i(n,o),O(r,a,_)},p:ue,d(r){r&&u(t),r&&u(a)}}}function se(c){let t,n;return t=new ge({props:{animation:"fade-in 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both",$$slots:{default:[$e]},$$scope:{ctx:c}}}),{c(){ne(t.$$.fragment)},l(e){ie(t.$$.fragment,e)},m(e,s){oe(t,e,s),n=!0},p(e,s){const o={};s&128&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(C(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){ce(t,e)}}}function ye(c){let t,n,e=c[0],s=[];for(let l=0;l<e.length;l+=1)s[l]=se(te(c,e,l));const o=l=>q(s[l],1,1,()=>{s[l]=null});return{c(){t=f("ul");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){t=h(l,"UL",{class:!0});var a=d(t);for(let r=0;r<s.length;r+=1)s[r].l(a);a.forEach(u),this.h()},h(){m(t,"class","svelte-wlisa8")},m(l,a){O(l,t,a);for(let r=0;r<s.length;r+=1)s[r].m(t,null);n=!0},p(l,[a]){if(a&1){e=l[0];let r;for(r=0;r<e.length;r+=1){const _=te(l,e,r);s[r]?(s[r].p(_,a),C(s[r],1)):(s[r]=se(_),s[r].c(),C(s[r],1),s[r].m(t,null))}for(me(),r=e.length;r<s.length;r+=1)o(r);fe()}},i(l){if(!n){for(let a=0;a<e.length;a+=1)C(s[a]);n=!0}},o(l){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)q(s[a]);n=!1},d(l){l&&u(t),he(s,l)}}}function Ee(c,t,n){let{images:e=[]}=t,s=[],o=[];e.forEach(a=>{a.includes("_sm")?s.push(a):o.push(a)});let l=[];for(let a=0;a<o.length;a++)l.push({small:s[a],normal:o[a]});return c.$$set=a=>{"images"in a&&n(1,e=a.images)},[l,e]}class we extends ae{constructor(t){super(),le(this,t,Ee,ye,re,{images:1})}}function Ie(c){let t,n,e,s,o,l,a,r,_,y,E,g,B,A,N,G,z,v,k,H,S,J,M,I,P,V,F;return I=new we({props:{images:c[2]}}),{c(){t=b(),n=f("section"),e=f("article"),s=f("h1"),o=L("Britelite Library"),l=b(),a=f("p"),r=L("These images were generated on "),_=L(c[3]),y=b(),E=f("div"),g=f("button"),B=f("ion-icon"),A=b(),N=f("span"),G=L("Back"),z=b(),v=f("button"),k=f("ion-icon"),H=b(),S=f("span"),J=L("Profile"),M=b(),ne(I.$$.fragment),this.h()},l(p){_e('[data-svelte="svelte-1lpizug"]',document.head).forEach(u),t=$(p),n=h(p,"SECTION",{class:!0});var K=d(n);e=h(K,"ARTICLE",{class:!0});var w=d(e);s=h(w,"H1",{});var Q=d(s);o=T(Q,"Britelite Library"),Q.forEach(u),l=$(w),a=h(w,"P",{class:!0});var j=d(a);r=T(j,"These images were generated on "),_=T(j,c[3]),j.forEach(u),y=$(w),E=h(w,"DIV",{class:!0});var x=d(E);g=h(x,"BUTTON",{class:!0});var D=d(g);B=h(D,"ION-ICON",{class:!0,name:!0}),d(B).forEach(u),A=$(D),N=h(D,"SPAN",{});var W=d(N);G=T(W,"Back"),W.forEach(u),D.forEach(u),z=$(x),v=h(x,"BUTTON",{class:!0});var R=d(v);k=h(R,"ION-ICON",{class:!0,name:!0}),d(k).forEach(u),H=$(R),S=h(R,"SPAN",{});var Y=d(S);J=T(Y,"Profile"),Y.forEach(u),R.forEach(u),x.forEach(u),M=$(w),ie(I.$$.fragment,w),w.forEach(u),K.forEach(u),this.h()},h(){document.title="3ee Games - Britelite Library",m(a,"class","svelte-b905y9"),U(B,"class","icon svelte-b905y9"),U(B,"name","arrow-back-circle"),m(g,"class","svelte-b905y9"),U(k,"class","icon svelte-b905y9"),U(k,"name","speedometer"),m(v,"class","svelte-b905y9"),m(E,"class","action-buttons svelte-b905y9"),m(e,"class","content"),m(n,"class","background")},m(p,X){O(p,t,X),O(p,n,X),i(n,e),i(e,s),i(s,o),i(e,l),i(e,a),i(a,r),i(a,_),i(e,y),i(e,E),i(E,g),i(g,B),i(g,A),i(g,N),i(N,G),i(E,z),i(E,v),i(v,k),i(v,H),i(v,S),i(S,J),i(e,M),oe(I,e,null),P=!0,V||(F=[Z(g,"click",c[0]),Z(v,"click",c[1])],V=!0)},p:ue,i(p){P||(C(I.$$.fragment,p),P=!0)},o(p){q(I.$$.fragment,p),P=!1},d(p){p&&u(t),p&&u(n),ce(I),V=!1,pe(F)}}}function Be(c){let t;ve.subscribe(l=>{t=l}),be.subscribe(l=>{});function n(){ee("/britelite/")}function e(){ee("/account/profile/")}let s=t.output_images_diffusion_status,o=typeof t.updated!="undefined"?new Date(t.updated).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null;return[n,e,s,o]}class Pe extends ae{constructor(t){super(),le(this,t,Be,Ie,re,{})}}export{Pe as default};
import{S as be,i as ke,s as Ee,e as h,c as d,a as m,d as u,b as y,g as B,l as ye,N as Vt,E as G,_ as qe,t as I,k as S,h as C,m as T,H as Q,I as a,j as $,R as He,J as Ne,L as rt,K as At,a0 as Wt,C as Dt,a2 as Ht,a3 as Mt,a4 as qt,G as Rt,v as Bt,f as Lt,a1 as Qt,X as $t,q as J,o as K,a5 as Gt,n as lt,p as nt,w as we,x as Ie,y as Ce,B as Ae}from"../../chunks/index-8ca01e64.js";import{g as at}from"../../chunks/navigation-0e6511d1.js";import{a as ge}from"../../chunks/accountStore-c3ff6133.js";import{c as Pt}from"../../chunks/briteliteStore-ee389409.js";import{w as Jt}from"../../chunks/index-12b3acf3.js";import{P as Yt}from"../../chunks/Prompts-57898cd4.js";import"../../chunks/singletons-d1fb5791.js";function Nt(l,e,s){const t=l.slice();return t[5]=e[s],t}function St(l){let e,s=l[0],t=[];for(let r=0;r<s.length;r+=1)t[r]=Tt(Nt(l,s,r));return{c(){e=h("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=d(r,"UL",{class:!0});var n=m(e);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(u),this.h()},h(){y(e,"class","svelte-1vl2kd9")},m(r,n){B(r,e,n);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(r,n){if(n&3){s=r[0];let o;for(o=0;o<s.length;o+=1){const i=Nt(r,s,o);t[o]?t[o].p(i,n):(t[o]=Tt(i),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(r){r&&u(e),Vt(t,r)}}}function Ft(l){let e,s,t,r=Me(l[5].updated)+"",n,o,i,_,c,f,b,k;return{c(){e=h("li"),s=h("h3"),t=h("a"),n=I(r),o=S(),i=h("div"),_=h("ion-icon"),c=S(),f=h("p"),b=I("Coming Soon, please wait."),k=S(),this.h()},l(v){e=d(v,"LI",{class:!0});var D=m(e);s=d(D,"H3",{class:!0});var g=m(s);t=d(g,"A",{href:!0});var E=m(t);n=C(E,r),E.forEach(u),g.forEach(u),o=T(D),i=d(D,"DIV",{class:!0});var w=m(i);_=d(w,"ION-ICON",{class:!0,name:!0}),m(_).forEach(u),c=T(w),f=d(w,"P",{});var A=m(f);b=C(A,"Coming Soon, please wait."),A.forEach(u),w.forEach(u),k=T(D),D.forEach(u),this.h()},h(){y(t,"href",""),y(s,"class","svelte-1vl2kd9"),Q(_,"class","icon svelte-1vl2kd9"),Q(_,"name","alarm-sharp"),y(i,"class","coming-soon svelte-1vl2kd9"),y(e,"class","svelte-1vl2kd9")},m(v,D){B(v,e,D),a(e,s),a(s,t),a(t,n),a(e,o),a(e,i),a(i,_),a(i,c),a(i,f),a(f,b),a(e,k)},p(v,D){D&1&&r!==(r=Me(v[5].updated)+"")&&$(n,r)},d(v){v&&u(e)}}}function zt(l){let e,s,t,r=Me(l[5].updated)+"",n,o,i,_,c,f,b;return{c(){e=h("li"),s=h("p"),t=h("a"),n=I(r),o=S(),i=h("img"),c=S(),this.h()},l(k){e=d(k,"LI",{class:!0});var v=m(e);s=d(v,"P",{});var D=m(s);t=d(D,"A",{href:!0});var g=m(t);n=C(g,r),g.forEach(u),D.forEach(u),o=T(v),i=d(v,"IMG",{src:!0,alt:!0}),c=T(v),v.forEach(u),this.h()},h(){y(t,"href",""),He(i.src,_=l[5].output_images_diffusion_status[0])||y(i,"src",_),y(i,"alt","Britelite Super Charged Avatar"),y(e,"class","svelte-1vl2kd9")},m(k,v){B(k,e,v),a(e,s),a(s,t),a(t,n),a(e,o),a(e,i),a(e,c),f||(b=[Ne(t,"click",rt(function(){At(l[1](l[5]))&&l[1](l[5]).apply(this,arguments)})),Ne(e,"click",rt(function(){At(l[1](l[5]))&&l[1](l[5]).apply(this,arguments)}))],f=!0)},p(k,v){l=k,v&1&&r!==(r=Me(l[5].updated)+"")&&$(n,r),v&1&&!He(i.src,_=l[5].output_images_diffusion_status[0])&&y(i,"src",_)},d(k){k&&u(e),f=!1,Wt(b)}}}function Tt(l){let e;function s(n,o){var i;return typeof((i=n[5])==null?void 0:i.output_images_diffusion_status[0])!="undefined"&&n[5].output_images_diffusion_status[0].length>0?zt:Ft}let t=s(l),r=t(l);return{c(){r.c(),e=ye()},l(n){r.l(n),e=ye()},m(n,o){r.m(n,o),B(n,e,o)},p(n,o){t===(t=s(n))&&r?r.p(n,o):(r.d(1),r=t(n),r&&(r.c(),r.m(e.parentNode,e)))},d(n){r.d(n),n&&u(e)}}}function Kt(l){let e,s=l[0].length>0&&St(l);return{c(){s&&s.c(),e=ye()},l(t){s&&s.l(t),e=ye()},m(t,r){s&&s.m(t,r),B(t,e,r)},p(t,[r]){t[0].length>0?s?s.p(t,r):(s=St(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:G,o:G,d(t){s&&s.d(t),t&&u(e)}}}function Me(l){return typeof l!="undefined"?new Date(l).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null}function Xt(l,e,s){Pt.subscribe(o=>{});let{briteliteQueues:t=[]}=e;ge.subscribe(o=>{});const r=qe();function n(o){Pt.update(i=>o),r("onSelectImage")}return l.$$set=o=>{"briteliteQueues"in o&&s(0,t=o.briteliteQueues)},[t,n]}class Zt extends be{constructor(e){super(),ke(this,e,Xt,Kt,Ee,{briteliteQueues:0})}}function xt(l){const e=l-1;return e*e*e+1}function Ot(l){return Object.prototype.toString.call(l)==="[object Date]"}function ot(l,e){if(l===e||l!==l)return()=>l;const s=typeof l;if(s!==typeof e||Array.isArray(l)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(l)){const t=e.map((r,n)=>ot(l[n],r));return r=>t.map(n=>n(r))}if(s==="object"){if(!l||!e)throw new Error("Object cannot be null");if(Ot(l)&&Ot(e)){l=l.getTime(),e=e.getTime();const n=e-l;return o=>new Date(l+o*n)}const t=Object.keys(e),r={};return t.forEach(n=>{r[n]=ot(l[n],e[n])}),n=>{const o={};return t.forEach(i=>{o[i]=r[i](n)}),o}}if(s==="number"){const t=e-l;return r=>l+r*t}throw new Error(`Cannot interpolate ${s} values`)}function es(l,e={}){const s=Jt(l);let t,r=l;function n(o,i){if(l==null)return s.set(l=o),Promise.resolve();r=o;let _=t,c=!1,{delay:f=0,duration:b=400,easing:k=qt,interpolate:v=ot}=Dt(Dt({},e),i);if(b===0)return _&&(_.abort(),_=null),s.set(l=r),Promise.resolve();const D=Ht()+f;let g;return t=Mt(E=>{if(E<D)return!0;c||(g=v(l,o),typeof b=="function"&&(b=b(l,o)),c=!0),_&&(_.abort(),_=null);const w=E-D;return w>b?(s.set(l=o),!1):(s.set(l=g(k(w/b))),!0)}),t.promise}return{set:n,update:(o,i)=>n(o(r,l),i),subscribe:s.subscribe}}function ts(l){let e,s,t,r=l[0]/6e4+"",n,o,i,_;return{c(){e=h("p"),s=h("ion-icon"),t=I("Estimated time: "),n=I(r),o=I(" minutes"),i=S(),_=h("progress"),this.h()},l(c){e=d(c,"P",{});var f=m(e);s=d(f,"ION-ICON",{class:!0,name:!0}),m(s).forEach(u),t=C(f,"Estimated time: "),n=C(f,r),o=C(f," minutes"),f.forEach(u),i=T(c),_=d(c,"PROGRESS",{class:!0}),m(_).forEach(u),this.h()},h(){Q(s,"class","icon svelte-1y90m1"),Q(s,"name","alarm-sharp"),_.value=l[1],y(_,"class","svelte-1y90m1")},m(c,f){B(c,e,f),a(e,s),a(e,t),a(e,n),a(e,o),B(c,i,f),B(c,_,f)},p(c,[f]){f&1&&r!==(r=c[0]/6e4+"")&&$(n,r),f&2&&(_.value=c[1])},i:G,o:G,d(c){c&&u(e),c&&u(i),c&&u(_)}}}function ss(l,e,s){let t;const r=qe();let{intervalDuration:n=6e4}=e,o=0,i=es(0,{duration:1e3,easing:xt,max:n});Rt(l,i,c=>s(1,t=c)),Bt(async()=>{async function c(){o+=1e3/n,i.set(o),o>=1&&(clearInterval(f),r("onProgressComplete"))}const f=setInterval(c,1e3);return()=>{clearInterval(f)}});const _=async c=>{r("onProgressComplete")};return l.$$set=c=>{"intervalDuration"in c&&s(0,n=c.intervalDuration)},l.$$.update=()=>{l.$$.dirty&1&&i.subscribe(c=>{c===n&&_()})},[n,t,i]}class as extends be{constructor(e){super(),ke(this,e,ss,ts,Ee,{intervalDuration:0})}}function rs(l){let e,s,t,r,n,o,i;return{c(){e=h("button"),s=h("ion-icon"),t=S(),r=h("span"),n=I("Upload"),this.h()},l(_){e=d(_,"BUTTON",{class:!0});var c=m(e);s=d(c,"ION-ICON",{class:!0,name:!0}),m(s).forEach(u),t=T(c),r=d(c,"SPAN",{});var f=m(r);n=C(f,"Upload"),f.forEach(u),c.forEach(u),this.h()},h(){Q(s,"class","icon svelte-15iwcri"),Q(s,"name","color-palette-sharp"),y(e,"class","alert")},m(_,c){B(_,e,c),a(e,s),a(e,t),a(e,r),a(r,n),o||(i=Ne(e,"click",rt(l[2])),o=!0)},p:G,d(_){_&&u(e),o=!1,i()}}}function ls(l){let e,s,t,r,n,o,i,_,c,f,b,k,v,D,g,E,w;function A(N,O){return rs}let P=A()(l);return{c(){e=h("div"),s=h("article"),t=h("h4"),r=h("ion-icon"),n=I(" Super Charged Avatar"),o=S(),i=h("p"),_=I("Upload your avatar. Recommended size is 512x512 pixels."),c=S(),f=h("p"),b=I("1 coin will be consumed when completed."),k=S(),v=h("aside"),D=h("input"),g=S(),P.c(),this.h()},l(N){e=d(N,"DIV",{class:!0});var O=m(e);s=d(O,"ARTICLE",{class:!0});var j=m(s);t=d(j,"H4",{class:!0});var H=m(t);r=d(H,"ION-ICON",{name:!0,class:!0}),m(r).forEach(u),n=C(H," Super Charged Avatar"),H.forEach(u),o=T(j),i=d(j,"P",{class:!0});var V=m(i);_=C(V,"Upload your avatar. Recommended size is 512x512 pixels."),V.forEach(u),c=T(j),f=d(j,"P",{class:!0});var W=m(f);b=C(W,"1 coin will be consumed when completed."),W.forEach(u),j.forEach(u),k=T(O),v=d(O,"ASIDE",{class:!0});var L=m(v);D=d(L,"INPUT",{style:!0,type:!0,accept:!0}),g=T(L),P.l(L),L.forEach(u),O.forEach(u),this.h()},h(){Q(r,"name","image"),Q(r,"class","svelte-15iwcri"),y(t,"class","highlight large supercharged svelte-15iwcri"),y(i,"class","svelte-15iwcri"),y(f,"class","svelte-15iwcri"),y(s,"class","main supercharged-container svelte-15iwcri"),Lt(D,"display","none"),y(D,"type","file"),y(D,"accept",".jpg, .jpeg, .png, .webp, .gif"),y(v,"class","aside aside-1"),y(e,"class","option-container")},m(N,O){B(N,e,O),a(e,s),a(s,t),a(t,r),a(t,n),a(s,o),a(s,i),a(i,_),a(s,c),a(s,f),a(f,b),a(e,k),a(e,v),a(v,D),l[7](D),a(v,g),P.m(v,null),E||(w=Ne(D,"change",l[6]),E=!0)},p(N,[O]){P.p(N,O)},i:G,o:G,d(N){N&&u(e),l[7](null),P.d(),E=!1,w()}}}function ns(l,e,s){let{isImageUploading:t=!1}=e,{useDiffusion:r=!1}=e,n;const o=qe(),i=async k=>{n.click()},_=async k=>{o("onViewAvatar")},c=async k=>{o("onFileSelected",{file:k.target.files[0]})},f=k=>c(k);function b(k){Qt[k?"unshift":"push"](()=>{n=k,s(1,n)})}return l.$$set=k=>{"isImageUploading"in k&&s(0,t=k.isImageUploading),"useDiffusion"in k&&s(5,r=k.useDiffusion)},[t,n,i,_,c,r,f,b]}class os extends be{constructor(e){super(),ke(this,e,ns,ls,Ee,{isImageUploading:0,useDiffusion:5})}}function is(l){let e,s,t,r,n,o,i,_,c,f,b,k,v,D,g,E,w,A,p,P,N,O,j,H,V,W,L,ee,se,X,Y,te,F,M,q,z,U,R,Z,ae,Re,re,pe,fe,it,Qe,x,le,$e,he,Ge,Je,Ye,ne,Fe,de,ze,Ke,Xe,me,Ze,xe,oe,_e,et,De,tt,st,ct;return{c(){e=h("div"),s=h("section"),t=h("article"),r=h("h2"),n=I("Britelite is the avatar super charger."),o=S(),i=h("p"),_=I("Put an image of yourself through the Britelite and give it a super charge."),c=S(),f=h("img"),k=S(),v=h("button"),D=h("ion-icon"),g=S(),E=h("span"),w=I("Watch Video"),A=S(),p=h("section"),P=h("div"),N=h("article"),O=h("h2"),j=I("You own it."),H=S(),V=h("p"),W=I(`We don't use, track, or keep what you create. What you make is yours. Our business model
					is subscription based and we keep an easy to read `),L=h("a"),ee=I("terms of service"),se=I(" agreement."),X=S(),Y=h("p"),te=I("We also respect your "),F=h("a"),M=I("privacy"),q=I(`, regardless of the country you
					hail from.`),z=S(),U=h("section"),R=h("article"),Z=h("h2"),ae=I("Two tiers: free or subscribe."),Re=S(),re=h("div"),pe=h("div"),fe=h("img"),Qe=S(),x=h("div"),le=h("p"),$e=I(`We are working on adding more power to Britelite. We limit everyone without a SpaceLab
						to `),he=h("span"),Ge=I("3"),Je=I(" per day."),Ye=S(),ne=h("p"),Fe=I("If you subscribe to SpaceLab, you receive "),de=h("span"),ze=I("12"),Ke=I(" per day."),Xe=S(),me=h("p"),Ze=I(`To use Britelite, the only requirement is to create an account. Accounts are required so
						we can limit the use to humans only.`),xe=S(),oe=h("button"),_e=h("ion-icon"),et=S(),De=h("span"),tt=I("Create Account"),this.h()},l(Pe){e=d(Pe,"DIV",{class:!0});var ie=m(e);s=d(ie,"SECTION",{class:!0});var ut=m(s);t=d(ut,"ARTICLE",{class:!0});var ce=m(t);r=d(ce,"H2",{class:!0});var ft=m(r);n=C(ft,"Britelite is the avatar super charger."),ft.forEach(u),o=T(ce),i=d(ce,"P",{class:!0});var pt=m(i);_=C(pt,"Put an image of yourself through the Britelite and give it a super charge."),pt.forEach(u),c=T(ce),f=d(ce,"IMG",{src:!0,alt:!0,class:!0}),k=T(ce),v=d(ce,"BUTTON",{class:!0});var Se=m(v);D=d(Se,"ION-ICON",{class:!0,name:!0}),m(D).forEach(u),g=T(Se),E=d(Se,"SPAN",{});var ht=m(E);w=C(ht,"Watch Video"),ht.forEach(u),Se.forEach(u),ce.forEach(u),ut.forEach(u),A=T(ie),p=d(ie,"SECTION",{class:!0});var dt=m(p);P=d(dt,"DIV",{class:!0});var mt=m(P);N=d(mt,"ARTICLE",{class:!0});var ve=m(N);O=d(ve,"H2",{class:!0});var _t=m(O);j=C(_t,"You own it."),_t.forEach(u),H=T(ve),V=d(ve,"P",{class:!0});var Te=m(V);W=C(Te,`We don't use, track, or keep what you create. What you make is yours. Our business model
					is subscription based and we keep an easy to read `),L=d(Te,"A",{href:!0});var vt=m(L);ee=C(vt,"terms of service"),vt.forEach(u),se=C(Te," agreement."),Te.forEach(u),X=T(ve),Y=d(ve,"P",{class:!0});var Oe=m(Y);te=C(Oe,"We also respect your "),F=d(Oe,"A",{href:!0});var gt=m(F);M=C(gt,"privacy"),gt.forEach(u),q=C(Oe,`, regardless of the country you
					hail from.`),Oe.forEach(u),ve.forEach(u),mt.forEach(u),dt.forEach(u),z=T(ie),U=d(ie,"SECTION",{class:!0});var yt=m(U);R=d(yt,"ARTICLE",{class:!0});var je=m(R);Z=d(je,"H2",{class:!0});var bt=m(Z);ae=C(bt,"Two tiers: free or subscribe."),bt.forEach(u),Re=T(je),re=d(je,"DIV",{class:!0});var Ue=m(re);pe=d(Ue,"DIV",{class:!0});var kt=m(pe);fe=d(kt,"IMG",{src:!0,alt:!0,class:!0}),kt.forEach(u),Qe=T(Ue),x=d(Ue,"DIV",{class:!0});var ue=m(x);le=d(ue,"P",{class:!0});var Be=m(le);$e=C(Be,`We are working on adding more power to Britelite. We limit everyone without a SpaceLab
						to `),he=d(Be,"SPAN",{class:!0});var Et=m(he);Ge=C(Et,"3"),Et.forEach(u),Je=C(Be," per day."),Be.forEach(u),Ye=T(ue),ne=d(ue,"P",{class:!0});var Le=m(ne);Fe=C(Le,"If you subscribe to SpaceLab, you receive "),de=d(Le,"SPAN",{class:!0});var wt=m(de);ze=C(wt,"12"),wt.forEach(u),Ke=C(Le," per day."),Le.forEach(u),Xe=T(ue),me=d(ue,"P",{class:!0});var It=m(me);Ze=C(It,`To use Britelite, the only requirement is to create an account. Accounts are required so
						we can limit the use to humans only.`),It.forEach(u),xe=T(ue),oe=d(ue,"BUTTON",{});var Ve=m(oe);_e=d(Ve,"ION-ICON",{class:!0,name:!0}),m(_e).forEach(u),et=T(Ve),De=d(Ve,"SPAN",{});var Ct=m(De);tt=C(Ct,"Create Account"),Ct.forEach(u),Ve.forEach(u),ue.forEach(u),Ue.forEach(u),je.forEach(u),yt.forEach(u),ie.forEach(u),this.h()},h(){y(r,"class","svelte-1kfxmea"),y(i,"class","svelte-1kfxmea"),He(f.src,b="https://3ee.s3.amazonaws.com/img/britelite_banner.png")||y(f,"src",b),y(f,"alt","a real cat being turned into a cartoon cat."),y(f,"class","svelte-1kfxmea"),Q(D,"class","icon svelte-1kfxmea"),Q(D,"name","videocam"),y(v,"class","svelte-1kfxmea"),y(t,"class","video svelte-1kfxmea"),y(s,"class","background svelte-1kfxmea"),y(O,"class","svelte-1kfxmea"),y(L,"href","/account/terms/"),y(V,"class","svelte-1kfxmea"),y(F,"href","/account/privacy"),y(Y,"class","svelte-1kfxmea"),y(N,"class","planets svelte-1kfxmea"),y(P,"class","image-wrap svelte-1kfxmea"),y(p,"class","background alternate svelte-1kfxmea"),y(Z,"class","svelte-1kfxmea"),He(fe.src,it="/potions.png")||y(fe,"src",it),y(fe,"alt","a potion bottle"),y(fe,"class","svelte-1kfxmea"),y(pe,"class","left svelte-1kfxmea"),y(he,"class","highlight"),y(le,"class","svelte-1kfxmea"),y(de,"class","highlight"),y(ne,"class","svelte-1kfxmea"),y(me,"class","svelte-1kfxmea"),Q(_e,"class","icon svelte-1kfxmea"),Q(_e,"name","rocket-sharp"),y(x,"class","right svelte-1kfxmea"),y(re,"class","column-container svelte-1kfxmea"),y(R,"class","svelte-1kfxmea"),y(U,"class","background svelte-1kfxmea"),y(e,"class","container svelte-1kfxmea")},m(Pe,ie){B(Pe,e,ie),a(e,s),a(s,t),a(t,r),a(r,n),a(t,o),a(t,i),a(i,_),a(t,c),a(t,f),a(t,k),a(t,v),a(v,D),a(v,g),a(v,E),a(E,w),a(e,A),a(e,p),a(p,P),a(P,N),a(N,O),a(O,j),a(N,H),a(N,V),a(V,W),a(V,L),a(L,ee),a(V,se),a(N,X),a(N,Y),a(Y,te),a(Y,F),a(F,M),a(Y,q),a(e,z),a(e,U),a(U,R),a(R,Z),a(Z,ae),a(R,Re),a(R,re),a(re,pe),a(pe,fe),a(re,Qe),a(re,x),a(x,le),a(le,$e),a(le,he),a(he,Ge),a(le,Je),a(x,Ye),a(x,ne),a(ne,Fe),a(ne,de),a(de,ze),a(ne,Ke),a(x,Xe),a(x,me),a(me,Ze),a(x,xe),a(x,oe),a(oe,_e),a(oe,et),a(oe,De),a(De,tt),st||(ct=Ne(oe,"click",l[0]),st=!0)},p:G,i:G,o:G,d(Pe){Pe&&u(e),st=!1,ct()}}}function cs(l){const e=qe();function s(){console.log("yatee"),e("onCreateAccount")}return[s]}class us extends be{constructor(e){super(),ke(this,e,cs,is,Ee,{})}}function fs(l){let e,s,t,r,n,o,i,_,c,f,b,k=We(l[0])+"",v,D,g,E,w,A,p,P,N,O,j,H=We(l[0])+"",V;return{c(){e=h("div"),s=h("article"),t=h("h4"),r=h("ion-icon"),n=I(" You're out of coins."),o=S(),i=h("p"),_=I("You'll receive "),c=h("span"),f=I(l[1]),b=I(" in "),v=I(k),D=I("."),g=S(),E=h("aside"),w=h("input"),A=S(),p=h("button"),P=h("ion-icon"),N=S(),O=h("span"),j=I("Wait "),V=I(H),this.h()},l(W){e=d(W,"DIV",{class:!0});var L=m(e);s=d(L,"ARTICLE",{class:!0});var ee=m(s);t=d(ee,"H4",{class:!0});var se=m(t);r=d(se,"ION-ICON",{name:!0,class:!0}),m(r).forEach(u),n=C(se," You're out of coins."),se.forEach(u),o=T(ee),i=d(ee,"P",{class:!0});var X=m(i);_=C(X,"You'll receive "),c=d(X,"SPAN",{class:!0});var Y=m(c);f=C(Y,l[1]),Y.forEach(u),b=C(X," in "),v=C(X,k),D=C(X,"."),X.forEach(u),ee.forEach(u),g=T(L),E=d(L,"ASIDE",{class:!0});var te=m(E);w=d(te,"INPUT",{style:!0,type:!0}),A=T(te),p=d(te,"BUTTON",{class:!0});var F=m(p);P=d(F,"ION-ICON",{class:!0,name:!0}),m(P).forEach(u),N=T(F),O=d(F,"SPAN",{});var M=m(O);j=C(M,"Wait "),V=C(M,H),M.forEach(u),F.forEach(u),te.forEach(u),L.forEach(u),this.h()},h(){Q(r,"name","stop-circle"),Q(r,"class","svelte-1cjhy41"),y(t,"class","highlight large supercharged svelte-1cjhy41"),y(c,"class","highlight"),y(i,"class","svelte-1cjhy41"),y(s,"class","main supercharged-container"),Lt(w,"display","none"),y(w,"type","file"),Q(P,"class","icon svelte-1cjhy41"),Q(P,"name","alarm"),y(p,"class","alert"),p.disabled=!0,y(E,"class","aside aside-1"),y(e,"class","option-container")},m(W,L){B(W,e,L),a(e,s),a(s,t),a(t,r),a(t,n),a(s,o),a(s,i),a(i,_),a(i,c),a(c,f),a(i,b),a(i,v),a(i,D),a(e,g),a(e,E),a(E,w),a(E,A),a(E,p),a(p,P),a(p,N),a(p,O),a(O,j),a(O,V)},p(W,[L]){L&2&&$(f,W[1]),L&1&&k!==(k=We(W[0])+"")&&$(v,k),L&1&&H!==(H=We(W[0])+"")&&$(V,H)},i:G,o:G,d(W){W&&u(e)}}}function We(l){let e=new Date(l);e.setHours(e.getHours()+24);let s=new Date;const t=e.getTime()-s.getTime();let r=Math.floor(t%864e5/36e5),n=Math.round(t%864e5%36e5/6e4);return r===0?`${n} minutes`:`${r} hours`}function ps(l,e,s){let{estimatedTime:t}=e,{dailyCoinAllowance:r=3}=e;return l.$$set=n=>{"estimatedTime"in n&&s(0,t=n.estimatedTime),"dailyCoinAllowance"in n&&s(1,r=n.dailyCoinAllowance)},[t,r]}class hs extends be{constructor(e){super(),ke(this,e,ps,fs,Ee,{estimatedTime:0,dailyCoinAllowance:1})}}const{document:jt}=Gt;function ds(l){let e,s,t,r,n,o,i,_,c,f,b,k=l[2].coins+"",v,D,g,E,w;const A=[vs,_s],p=[];function P(N,O){return N[10]?0:1}return g=P(l),E=p[g]=A[g](l),{c(){e=h("section"),s=h("article"),t=h("h1"),r=I("Britelite"),n=S(),o=h("h3"),i=I("Super Charge your Avatar"),_=S(),c=h("p"),f=I("Coins: "),b=h("span"),v=I(k),D=S(),E.c(),this.h()},l(N){e=d(N,"SECTION",{class:!0});var O=m(e);s=d(O,"ARTICLE",{class:!0});var j=m(s);t=d(j,"H1",{});var H=m(t);r=C(H,"Britelite"),H.forEach(u),n=T(j),o=d(j,"H3",{class:!0});var V=m(o);i=C(V,"Super Charge your Avatar"),V.forEach(u),_=T(j),c=d(j,"P",{});var W=m(c);f=C(W,"Coins: "),b=d(W,"SPAN",{class:!0});var L=m(b);v=C(L,k),L.forEach(u),W.forEach(u),D=T(j),E.l(j),j.forEach(u),O.forEach(u),this.h()},h(){y(o,"class","svelte-jojqr8"),y(b,"class","highlight"),y(s,"class","content"),y(e,"class","background")},m(N,O){B(N,e,O),a(e,s),a(s,t),a(t,r),a(s,n),a(s,o),a(o,i),a(s,_),a(s,c),a(c,f),a(c,b),a(b,v),a(s,D),p[g].m(s,null),w=!0},p(N,O){(!w||O&4)&&k!==(k=N[2].coins+"")&&$(v,k);let j=g;g=P(N),g===j?p[g].p(N,O):(lt(),K(p[j],1,1,()=>{p[j]=null}),nt(),E=p[g],E?E.p(N,O):(E=p[g]=A[g](N),E.c()),J(E,1),E.m(s,null))},i(N){w||(J(E),w=!0)},o(N){K(E),w=!1},d(N){N&&u(e),p[g].d()}}}function ms(l){let e,s;return e=new us({}),e.$on("onCreateAccount",l[21]),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p:G,i(t){s||(J(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function _s(l){let e,s,t,r,n,o,i,_;function c(p,P){return typeof p[11]=="undefined"||p[11]===0?ys:gs}let f=c(l),b=f(l);const k=[ks,bs],v=[];function D(p,P){return p[2].coins>=Cs?0:1}s=D(l),t=v[s]=k[s](l);function g(p,P){if(p[0])return ws;if(p[7])return Es}let E=g(l),w=E&&E(l),A=l[12]&&Ut(l);return i=new Zt({props:{briteliteQueues:l[1]}}),i.$on("onSelectImage",l[17]),{c(){b.c(),e=S(),t.c(),r=S(),w&&w.c(),n=S(),A&&A.c(),o=S(),we(i.$$.fragment)},l(p){b.l(p),e=T(p),t.l(p),r=T(p),w&&w.l(p),n=T(p),A&&A.l(p),o=T(p),Ie(i.$$.fragment,p)},m(p,P){b.m(p,P),B(p,e,P),v[s].m(p,P),B(p,r,P),w&&w.m(p,P),B(p,n,P),A&&A.m(p,P),B(p,o,P),Ce(i,p,P),_=!0},p(p,P){f===(f=c(p))&&b?b.p(p,P):(b.d(1),b=f(p),b&&(b.c(),b.m(e.parentNode,e)));let N=s;s=D(p),s===N?v[s].p(p,P):(lt(),K(v[N],1,1,()=>{v[N]=null}),nt(),t=v[s],t?t.p(p,P):(t=v[s]=k[s](p),t.c()),J(t,1),t.m(r.parentNode,r)),E===(E=g(p))&&w?w.p(p,P):(w&&w.d(1),w=E&&E(p),w&&(w.c(),w.m(n.parentNode,n))),p[12]?A?(A.p(p,P),P&4096&&J(A,1)):(A=Ut(p),A.c(),J(A,1),A.m(o.parentNode,o)):A&&(lt(),K(A,1,1,()=>{A=null}),nt());const O={};P&2&&(O.briteliteQueues=p[1]),i.$set(O)},i(p){_||(J(t),J(A),J(i.$$.fragment,p),_=!0)},o(p){K(t),K(A),K(i.$$.fragment,p),_=!1},d(p){b.d(p),p&&u(e),v[s].d(p),p&&u(r),w&&w.d(p),p&&u(n),A&&A.d(p),p&&u(o),Ae(i,p)}}}function vs(l){let e,s;return e=new Yt({}),e.$on("onPromptComplete",l[20]),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p:G,i(t){s||(J(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function gs(l){let e,s,t,r,n,o,i,_,c=l[11]!==1?"s":"",f,b,k,v,D;return{c(){e=h("p"),s=I("Hail, "),t=h("span"),r=I(l[14]),n=I(`, you have
						`),o=h("span"),i=I(l[11]),_=I(`
						new super charged avatar`),f=I(c),b=I("."),k=S(),v=h("p"),D=I(`Welcome to your avatar station: Britelite. View all your avatars here and choose which
						one you want stamped on your passport.`),this.h()},l(g){e=d(g,"P",{});var E=m(e);s=C(E,"Hail, "),t=d(E,"SPAN",{class:!0});var w=m(t);r=C(w,l[14]),w.forEach(u),n=C(E,`, you have
						`),o=d(E,"SPAN",{class:!0});var A=m(o);i=C(A,l[11]),A.forEach(u),_=C(E,`
						new super charged avatar`),f=C(E,c),b=C(E,"."),E.forEach(u),k=T(g),v=d(g,"P",{});var p=m(v);D=C(p,`Welcome to your avatar station: Britelite. View all your avatars here and choose which
						one you want stamped on your passport.`),p.forEach(u),this.h()},h(){y(t,"class","highlight accent"),y(o,"class","highlight")},m(g,E){B(g,e,E),a(e,s),a(e,t),a(t,r),a(e,n),a(e,o),a(o,i),a(e,_),a(e,f),a(e,b),B(g,k,E),B(g,v,E),a(v,D)},p(g,E){E&2048&&$(i,g[11]),E&2048&&c!==(c=g[11]!==1?"s":"")&&$(f,c)},d(g){g&&u(e),g&&u(k),g&&u(v)}}}function ys(l){let e,s,t,r,n;return{c(){e=h("p"),s=I("Hello, "),t=h("span"),r=I(l[14]),n=I(`, you have no super charged
						avatars.`),this.h()},l(o){e=d(o,"P",{});var i=m(e);s=C(i,"Hello, "),t=d(i,"SPAN",{class:!0});var _=m(t);r=C(_,l[14]),_.forEach(u),n=C(i,`, you have no super charged
						avatars.`),i.forEach(u),this.h()},h(){y(t,"class","highlight accent")},m(o,i){B(o,e,i),a(e,s),a(e,t),a(t,r),a(e,n)},p:G,d(o){o&&u(e)}}}function bs(l){let e,s;return e=new hs({props:{estimatedTime:l[2].lastCoinDailyDate,dailyCoinAllowance:l[15]}}),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p(t,r){const n={};r&4&&(n.estimatedTime=t[2].lastCoinDailyDate),e.$set(n)},i(t){s||(J(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function ks(l){let e,s;return e=new os({props:{isImageUploading:l[4],promptComplete:l[5]}}),e.$on("onFileSelected",l[19]),e.$on("onViewAvatar",l[16]),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p(t,r){const n={};r&16&&(n.isImageUploading=t[4]),r&32&&(n.promptComplete=t[5]),e.$set(n)},i(t){s||(J(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function Es(l){let e,s,t,r,n,o,i,_,c;return{c(){e=h("p"),s=I(l[8]),t=I(" out of "),r=I(l[9]),n=I(" avatars"),o=S(),i=h("p"),_=h("ion-icon"),c=I("Estimated time: calculating..."),this.h()},l(f){e=d(f,"P",{class:!0});var b=m(e);s=C(b,l[8]),t=C(b," out of "),r=C(b,l[9]),n=C(b," avatars"),b.forEach(u),o=T(f),i=d(f,"P",{});var k=m(i);_=d(k,"ION-ICON",{class:!0,name:!0}),m(_).forEach(u),c=C(k,"Estimated time: calculating..."),k.forEach(u),this.h()},h(){y(e,"class","highlight large"),Q(_,"class","icon svelte-jojqr8"),Q(_,"name","cloud-upload")},m(f,b){B(f,e,b),a(e,s),a(e,t),a(e,r),a(e,n),B(f,o,b),B(f,i,b),a(i,_),a(i,c)},p(f,b){b&256&&$(s,f[8]),b&512&&$(r,f[9])},d(f){f&&u(e),f&&u(o),f&&u(i)}}}function ws(l){let e,s,t,r,n,o,i,_,c,f=l[6].hours+"",b,k,v,D=Math.floor(l[6].minutes)+"",g,E;return{c(){e=h("p"),s=I(l[8]),t=I(" out of "),r=I(l[9]),n=I(" avatars"),o=S(),i=h("p"),_=I(`Your avatar is being processed. It will be ready in
						`),c=h("span"),b=I(f),k=I(` hours and
						`),v=h("span"),g=I(D),E=I(" minutes."),this.h()},l(w){e=d(w,"P",{class:!0});var A=m(e);s=C(A,l[8]),t=C(A," out of "),r=C(A,l[9]),n=C(A," avatars"),A.forEach(u),o=T(w),i=d(w,"P",{});var p=m(i);_=C(p,`Your avatar is being processed. It will be ready in
						`),c=d(p,"SPAN",{class:!0});var P=m(c);b=C(P,f),P.forEach(u),k=C(p,` hours and
						`),v=d(p,"SPAN",{class:!0});var N=m(v);g=C(N,D),N.forEach(u),E=C(p," minutes."),p.forEach(u),this.h()},h(){y(e,"class","highlight large"),y(c,"class","highlight"),y(v,"class","highlight")},m(w,A){B(w,e,A),a(e,s),a(e,t),a(e,r),a(e,n),B(w,o,A),B(w,i,A),a(i,_),a(i,c),a(c,b),a(i,k),a(i,v),a(v,g),a(i,E)},p(w,A){A&256&&$(s,w[8]),A&512&&$(r,w[9]),A&64&&f!==(f=w[6].hours+"")&&$(b,f),A&64&&D!==(D=Math.floor(w[6].minutes)+"")&&$(g,D)},d(w){w&&u(e),w&&u(o),w&&u(i)}}}function Ut(l){let e,s;return e=new as({props:{intervalDuration:l[3],jobsQueued:l[7]}}),e.$on("onProgressComplete",l[18]),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p(t,r){const n={};r&8&&(n.intervalDuration=t[3]),r&128&&(n.jobsQueued=t[7]),e.$set(n)},i(t){s||(J(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function Is(l){let e,s,t,r,n;const o=[ms,ds],i=[];function _(c,f){return typeof c[13]=="undefined"||c[13]===null||c[13]===""?0:1}return s=_(l),t=i[s]=o[s](l),{c(){e=S(),t.c(),r=ye(),this.h()},l(c){$t('[data-svelte="svelte-qyyaak"]',jt.head).forEach(u),e=T(c),t.l(c),r=ye(),this.h()},h(){jt.title="Britelite"},m(c,f){B(c,e,f),i[s].m(c,f),B(c,r,f),n=!0},p(c,[f]){t.p(c,f)},i(c){n||(J(t),n=!0)},o(c){K(t),n=!1},d(c){c&&u(e),i[s].d(c),c&&u(r)}}}const Cs=1,As=3,Ds=12;let Ps=1;function Ns(l,e,s){let t,r,n,o,i,_,c;ge.subscribe(M=>{s(2,c=M)});const f=c==null?void 0:c.token,b=c==null?void 0:c.username;let k=!1,v=0,D=6e4,g=[],E=!1,w=!1,A=!1,p=null,P=new FormData,N={},O=c.spaceLab?Ds:As,j={},H=!1;Bt(async()=>{if(typeof f=="undefined"||f===null||f==="")return()=>{};const M=15e3;async function q(){const Z=await(await fetch("https://3ee.dev/currency/get/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors"})).json();let ae=c;ae.coins=Z.coins,ae.lastCoinDailyDate=Z.lastCoinDailyDate,ge.set(ae)}const z=setInterval(V,M),U=setInterval(q,M);return V(),q(),()=>{clearInterval(z),clearInterval(U)}});async function V(){const M=await fetch("https://3ee.dev/britelite/status/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors"});s(1,g=await M.json());let q=[];for(let U=0;U<g.length;U++)g[U].status_type===0&&q.push(g[U]);if(s(0,k=!1),q.length>0){s(22,v=q.length),s(24,H=!1),s(0,k=!0);let U=Math.abs(new Date(q[0].estimated_time)-new Date(q[0].created)),R=U,Z=R/60/1e3;var z=R/3600/1e3;s(6,j.hours=Math.floor(z),j),console.log(Z-60*j.hours),s(6,j.minutes=Z-60*j.hours,j);let ae=Math.floor(U/60/1e3);s(3,D=ae*6e4),j.minutes<1&&(s(6,j.minutes=1,j),s(3,D=6e4))}for(let U=0;U<g.length;U++){let R=g[U].encoded_avatar.replace(/'/g,"").replace(/"/g,"").replace("[","").replace("]","");R=R.split(","),s(1,g[U].encoded_avatar=R,g)}typeof g!="undefined"&&g.length>0&&g.sort(function(U,R){return new Date(R.updated)-new Date(U.updated)})}const W=async()=>{at("/account/britelite")},L=async()=>{s(23,E=!0)},ee=async()=>{s(4,w=!0),document.body.scrollIntoView();const q=await(await fetch("https://3ee.dev/account/upload/",{method:"POST",headers:{Accept:"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors",body:P})).json();if(!q.success){let U=c;U.coins=0,U.lastCoinDailyDate=q.lastCoinDailyDate,ge.set(U);return}let z=c;z.coins=q.coins,z.lastCoinDailyDate=q.lastCoinDailyDate,z.profile.image=q.image,ge.set(z),s(4,w=!1),A&&typeof umami!="undefined"?umami.trackEvent("Supercharge",{success:!0}):!A&&typeof umami!="undefined"&&umami.trackEvent("Upload Avatar",{success:!0})};function se(){at("/britelite/library")}async function X(){s(0,k=!1),V()}const Y=async(M,q)=>{p=M.detail.file,new FileReader().readAsDataURL(p),P.append("file",p),P.append("useDiffusion",!0);let U=c;U.profile.useDiffusion=!0,ge.set(U),L()},te=async M=>{s(23,E=!1),N=M.detail,P.append("prompt",JSON.stringify(N)),s(5,A=!0),s(24,H=!0),ee()};function F(){at("/account/create")}return l.$$.update=()=>{l.$$.dirty&1&&s(12,t=k),l.$$.dirty&2&&s(11,r=g.filter(M=>M.encoded_avatar.length>0).length),l.$$.dirty&8388608&&s(10,n=E),l.$$.dirty&4194304&&s(9,o=v),l.$$.dirty&16777216&&s(7,_=H)},s(8,i=Ps),[k,g,c,D,w,A,j,_,i,o,n,r,t,f,b,O,W,se,X,Y,te,F,v,E,H]}class Vs extends be{constructor(e){super(),ke(this,e,Ns,Is,Ee,{})}}export{Vs as default};

import{S as be,i as ke,s as Ee,e as h,c as d,a as m,d as u,b,g as U,l as fe,N as Vt,E as q,_ as Qe,t as w,k as S,h as I,m as T,H as R,I as a,j as Y,R as He,J as Ne,L as at,K as At,a0 as Wt,C as Pt,a2 as Ht,a3 as Mt,a4 as Qt,a5 as $t,v as Bt,f as Lt,a1 as Rt,X as qt,q as z,o as K,a6 as Yt,n as lt,p as nt,w as we,x as Ie,y as Ce,B as Ae}from"../../chunks/index-76a94e25.js";import{g as rt}from"../../chunks/navigation-0e6511d1.js";import{a as ye}from"../../chunks/accountStore-3daa9c42.js";import{c as Dt}from"../../chunks/briteliteStore-568e7c1a.js";import{w as zt}from"../../chunks/index-e0ca1a8e.js";import{P as Gt}from"../../chunks/Prompts-991374bc.js";import"../../chunks/singletons-d1fb5791.js";function Nt(l,e,s){const t=l.slice();return t[5]=e[s],t}function St(l){let e,s=l[0],t=[];for(let r=0;r<s.length;r+=1)t[r]=Tt(Nt(l,s,r));return{c(){e=h("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=d(r,"UL",{class:!0});var n=m(e);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(u),this.h()},h(){b(e,"class","svelte-1vl2kd9")},m(r,n){U(r,e,n);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(r,n){if(n&3){s=r[0];let o;for(o=0;o<s.length;o+=1){const c=Nt(r,s,o);t[o]?t[o].p(c,n):(t[o]=Tt(c),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(r){r&&u(e),Vt(t,r)}}}function Jt(l){let e,s,t,r=Me(l[5].updated)+"",n,o,c,_,i,f,C,g;return{c(){e=h("li"),s=h("h3"),t=h("a"),n=w(r),o=S(),c=h("div"),_=h("ion-icon"),i=S(),f=h("p"),C=w("Coming Soon, please wait."),g=S(),this.h()},l(v){e=d(v,"LI",{class:!0});var P=m(e);s=d(P,"H3",{class:!0});var y=m(s);t=d(y,"A",{href:!0});var k=m(t);n=I(k,r),k.forEach(u),y.forEach(u),o=T(P),c=d(P,"DIV",{class:!0});var E=m(c);_=d(E,"ION-ICON",{class:!0,name:!0}),m(_).forEach(u),i=T(E),f=d(E,"P",{});var A=m(f);C=I(A,"Coming Soon, please wait."),A.forEach(u),E.forEach(u),g=T(P),P.forEach(u),this.h()},h(){b(t,"href",""),b(s,"class","svelte-1vl2kd9"),R(_,"class","icon svelte-1vl2kd9"),R(_,"name","alarm-sharp"),b(c,"class","coming-soon svelte-1vl2kd9"),b(e,"class","svelte-1vl2kd9")},m(v,P){U(v,e,P),a(e,s),a(s,t),a(t,n),a(e,o),a(e,c),a(c,_),a(c,i),a(c,f),a(f,C),a(e,g)},p(v,P){P&1&&r!==(r=Me(v[5].updated)+"")&&Y(n,r)},d(v){v&&u(e)}}}function Ft(l){let e,s,t,r=Me(l[5].updated)+"",n,o,c,_,i,f,C;return{c(){e=h("li"),s=h("p"),t=h("a"),n=w(r),o=S(),c=h("img"),i=S(),this.h()},l(g){e=d(g,"LI",{class:!0});var v=m(e);s=d(v,"P",{});var P=m(s);t=d(P,"A",{href:!0});var y=m(t);n=I(y,r),y.forEach(u),P.forEach(u),o=T(v),c=d(v,"IMG",{src:!0,alt:!0}),i=T(v),v.forEach(u),this.h()},h(){b(t,"href",""),He(c.src,_=l[5].output_images_diffusion_status[0])||b(c,"src",_),b(c,"alt","Britelite Super Charged Avatar"),b(e,"class","svelte-1vl2kd9")},m(g,v){U(g,e,v),a(e,s),a(s,t),a(t,n),a(e,o),a(e,c),a(e,i),f||(C=[Ne(t,"click",at(function(){At(l[1](l[5]))&&l[1](l[5]).apply(this,arguments)})),Ne(e,"click",at(function(){At(l[1](l[5]))&&l[1](l[5]).apply(this,arguments)}))],f=!0)},p(g,v){l=g,v&1&&r!==(r=Me(l[5].updated)+"")&&Y(n,r),v&1&&!He(c.src,_=l[5].output_images_diffusion_status[0])&&b(c,"src",_)},d(g){g&&u(e),f=!1,Wt(C)}}}function Tt(l){let e;function s(n,o){var c;return typeof((c=n[5])==null?void 0:c.output_images_diffusion_status[0])!="undefined"&&n[5].output_images_diffusion_status[0].length>0?Ft:Jt}let t=s(l),r=t(l);return{c(){r.c(),e=fe()},l(n){r.l(n),e=fe()},m(n,o){r.m(n,o),U(n,e,o)},p(n,o){t===(t=s(n))&&r?r.p(n,o):(r.d(1),r=t(n),r&&(r.c(),r.m(e.parentNode,e)))},d(n){r.d(n),n&&u(e)}}}function Kt(l){let e,s=l[0].length>0&&St(l);return{c(){s&&s.c(),e=fe()},l(t){s&&s.l(t),e=fe()},m(t,r){s&&s.m(t,r),U(t,e,r)},p(t,[r]){t[0].length>0?s?s.p(t,r):(s=St(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:q,o:q,d(t){s&&s.d(t),t&&u(e)}}}function Me(l){return typeof l!="undefined"?new Date(l).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null}function Xt(l,e,s){Dt.subscribe(o=>{});let{briteliteQueues:t=[]}=e;ye.subscribe(o=>{});const r=Qe();function n(o){Dt.update(c=>o),r("onSelectImage")}return l.$$set=o=>{"briteliteQueues"in o&&s(0,t=o.briteliteQueues)},[t,n]}class Zt extends be{constructor(e){super(),ke(this,e,Xt,Kt,Ee,{briteliteQueues:0})}}function xt(l){const e=l-1;return e*e*e+1}function Ot(l){return Object.prototype.toString.call(l)==="[object Date]"}function ot(l,e){if(l===e||l!==l)return()=>l;const s=typeof l;if(s!==typeof e||Array.isArray(l)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(l)){const t=e.map((r,n)=>ot(l[n],r));return r=>t.map(n=>n(r))}if(s==="object"){if(!l||!e)throw new Error("Object cannot be null");if(Ot(l)&&Ot(e)){l=l.getTime(),e=e.getTime();const n=e-l;return o=>new Date(l+o*n)}const t=Object.keys(e),r={};return t.forEach(n=>{r[n]=ot(l[n],e[n])}),n=>{const o={};return t.forEach(c=>{o[c]=r[c](n)}),o}}if(s==="number"){const t=e-l;return r=>l+r*t}throw new Error(`Cannot interpolate ${s} values`)}function es(l,e={}){const s=zt(l);let t,r=l;function n(o,c){if(l==null)return s.set(l=o),Promise.resolve();r=o;let _=t,i=!1,{delay:f=0,duration:C=400,easing:g=Qt,interpolate:v=ot}=Pt(Pt({},e),c);if(C===0)return _&&(_.abort(),_=null),s.set(l=r),Promise.resolve();const P=Ht()+f;let y;return t=Mt(k=>{if(k<P)return!0;i||(y=v(l,o),typeof C=="function"&&(C=C(l,o)),i=!0),_&&(_.abort(),_=null);const E=k-P;return E>C?(s.set(l=o),!1):(s.set(l=y(g(E/C))),!0)}),t.promise}return{set:n,update:(o,c)=>n(o(r,l),c),subscribe:s.subscribe}}function ts(l){let e,s,t,r=l[0]/6e4+"",n,o,c,_;return{c(){e=h("p"),s=h("ion-icon"),t=w("Estimated time: "),n=w(r),o=w(" minutes"),c=S(),_=h("progress"),this.h()},l(i){e=d(i,"P",{});var f=m(e);s=d(f,"ION-ICON",{class:!0,name:!0}),m(s).forEach(u),t=I(f,"Estimated time: "),n=I(f,r),o=I(f," minutes"),f.forEach(u),c=T(i),_=d(i,"PROGRESS",{class:!0}),m(_).forEach(u),this.h()},h(){R(s,"class","icon svelte-fpbrwl"),R(s,"name","alarm-sharp"),_.value=l[3],b(_,"class","svelte-fpbrwl")},m(i,f){U(i,e,f),a(e,s),a(e,t),a(e,n),a(e,o),U(i,c,f),U(i,_,f)},p(i,f){f&1&&r!==(r=i[0]/6e4+"")&&Y(n,r),f&8&&(_.value=i[3])},d(i){i&&u(e),i&&u(c),i&&u(_)}}}function ss(l){let e,s,t;return{c(){e=h("p"),s=h("ion-icon"),t=w("Estimated time: calculating..."),this.h()},l(r){e=d(r,"P",{});var n=m(e);s=d(n,"ION-ICON",{class:!0,name:!0}),m(s).forEach(u),t=I(n,"Estimated time: calculating..."),n.forEach(u),this.h()},h(){R(s,"class","icon svelte-fpbrwl"),R(s,"name","cloud-upload")},m(r,n){U(r,e,n),a(e,s),a(e,t)},p:q,d(r){r&&u(e)}}}function rs(l){let e;function s(n,o){return n[1]?ss:ts}let t=s(l),r=t(l);return{c(){r.c(),e=fe()},l(n){r.l(n),e=fe()},m(n,o){r.m(n,o),U(n,e,o)},p(n,[o]){t===(t=s(n))&&r?r.p(n,o):(r.d(1),r=t(n),r&&(r.c(),r.m(e.parentNode,e)))},i:q,o:q,d(n){r.d(n),n&&u(e)}}}function as(l,e,s){let t,r=q,n=()=>(r(),r=$t(f,g=>s(3,t=g)),f);l.$$.on_destroy.push(()=>r());const o=Qe();let{intervalDuration:c=6e4}=e,{jobsQueued:_=!1}=e,i=0,f=0;n(),Bt(async()=>{if(!_)return()=>{clearInterval(v)};n(s(2,f=es(0,{duration:1e3,easing:xt,max:c})));async function g(){i+=1e3/c,f.set(i),i>=1&&(clearInterval(v),o("onProgressComplete"))}const v=setInterval(g,1e3);return()=>{clearInterval(v)}});const C=async g=>{o("onProgressComplete")};return l.$$set=g=>{"intervalDuration"in g&&s(0,c=g.intervalDuration),"jobsQueued"in g&&s(1,_=g.jobsQueued)},l.$$.update=()=>{l.$$.dirty&7&&f.subscribe(g=>{g===c&&!_&&C()})},[c,_,f,t]}class ls extends be{constructor(e){super(),ke(this,e,as,rs,Ee,{intervalDuration:0,jobsQueued:1})}}function ns(l){let e,s,t,r,n,o,c;return{c(){e=h("button"),s=h("ion-icon"),t=S(),r=h("span"),n=w("Upload"),this.h()},l(_){e=d(_,"BUTTON",{class:!0});var i=m(e);s=d(i,"ION-ICON",{class:!0,name:!0}),m(s).forEach(u),t=T(i),r=d(i,"SPAN",{});var f=m(r);n=I(f,"Upload"),f.forEach(u),i.forEach(u),this.h()},h(){R(s,"class","icon svelte-15iwcri"),R(s,"name","color-palette-sharp"),b(e,"class","alert")},m(_,i){U(_,e,i),a(e,s),a(e,t),a(e,r),a(r,n),o||(c=Ne(e,"click",at(l[2])),o=!0)},p:q,d(_){_&&u(e),o=!1,c()}}}function os(l){let e,s,t,r,n,o,c,_,i,f,C,g,v,P,y,k,E;function A(N,O){return ns}let D=A()(l);return{c(){e=h("div"),s=h("article"),t=h("h4"),r=h("ion-icon"),n=w(" Super Charged Avatar"),o=S(),c=h("p"),_=w("Upload your avatar. Recommended size is 512x512 pixels."),i=S(),f=h("p"),C=w("1 coin will be consumed when completed."),g=S(),v=h("aside"),P=h("input"),y=S(),D.c(),this.h()},l(N){e=d(N,"DIV",{class:!0});var O=m(e);s=d(O,"ARTICLE",{class:!0});var j=m(s);t=d(j,"H4",{class:!0});var H=m(t);r=d(H,"ION-ICON",{name:!0,class:!0}),m(r).forEach(u),n=I(H," Super Charged Avatar"),H.forEach(u),o=T(j),c=d(j,"P",{class:!0});var V=m(c);_=I(V,"Upload your avatar. Recommended size is 512x512 pixels."),V.forEach(u),i=T(j),f=d(j,"P",{class:!0});var W=m(f);C=I(W,"1 coin will be consumed when completed."),W.forEach(u),j.forEach(u),g=T(O),v=d(O,"ASIDE",{class:!0});var L=m(v);P=d(L,"INPUT",{style:!0,type:!0,accept:!0}),y=T(L),D.l(L),L.forEach(u),O.forEach(u),this.h()},h(){R(r,"name","image"),R(r,"class","svelte-15iwcri"),b(t,"class","highlight large supercharged svelte-15iwcri"),b(c,"class","svelte-15iwcri"),b(f,"class","svelte-15iwcri"),b(s,"class","main supercharged-container svelte-15iwcri"),Lt(P,"display","none"),b(P,"type","file"),b(P,"accept",".jpg, .jpeg, .png, .webp, .gif"),b(v,"class","aside aside-1"),b(e,"class","option-container")},m(N,O){U(N,e,O),a(e,s),a(s,t),a(t,r),a(t,n),a(s,o),a(s,c),a(c,_),a(s,i),a(s,f),a(f,C),a(e,g),a(e,v),a(v,P),l[7](P),a(v,y),D.m(v,null),k||(E=Ne(P,"change",l[6]),k=!0)},p(N,[O]){D.p(N,O)},i:q,o:q,d(N){N&&u(e),l[7](null),D.d(),k=!1,E()}}}function is(l,e,s){let{isImageUploading:t=!1}=e,{useDiffusion:r=!1}=e,n;const o=Qe(),c=async g=>{n.click()},_=async g=>{o("onViewAvatar")},i=async g=>{o("onFileSelected",{file:g.target.files[0]})},f=g=>i(g);function C(g){Rt[g?"unshift":"push"](()=>{n=g,s(1,n)})}return l.$$set=g=>{"isImageUploading"in g&&s(0,t=g.isImageUploading),"useDiffusion"in g&&s(5,r=g.useDiffusion)},[t,n,c,_,i,r,f,C]}class cs extends be{constructor(e){super(),ke(this,e,is,os,Ee,{isImageUploading:0,useDiffusion:5})}}function us(l){let e,s,t,r,n,o,c,_,i,f,C,g,v,P,y,k,E,A,p,D,N,O,j,H,V,W,L,ee,se,X,G,te,J,M,Q,F,B,$,Z,re,$e,ae,he,pe,it,Re,x,le,qe,de,Ye,ze,Ge,ne,Je,me,Fe,Ke,Xe,_e,Ze,xe,oe,ve,et,Pe,tt,st,ct;return{c(){e=h("div"),s=h("section"),t=h("article"),r=h("h2"),n=w("Britelite is the avatar super charger."),o=S(),c=h("p"),_=w("Put an image of yourself through the Britelite and give it a super charge."),i=S(),f=h("img"),g=S(),v=h("button"),P=h("ion-icon"),y=S(),k=h("span"),E=w("Watch Video"),A=S(),p=h("section"),D=h("div"),N=h("article"),O=h("h2"),j=w("You own it."),H=S(),V=h("p"),W=w(`We don't use, track, or keep what you create. What you make is yours. Our business model
					is subscription based and we keep an easy to read `),L=h("a"),ee=w("terms of service"),se=w(" agreement."),X=S(),G=h("p"),te=w("We also respect your "),J=h("a"),M=w("privacy"),Q=w(`, regardless of the country you
					hail from.`),F=S(),B=h("section"),$=h("article"),Z=h("h2"),re=w("Two tiers: free or subscribe."),$e=S(),ae=h("div"),he=h("div"),pe=h("img"),Re=S(),x=h("div"),le=h("p"),qe=w(`We are working on adding more power to Britelite. We limit everyone without a SpaceLab
						to `),de=h("span"),Ye=w("3"),ze=w(" per day."),Ge=S(),ne=h("p"),Je=w("If you subscribe to SpaceLab, you receive "),me=h("span"),Fe=w("12"),Ke=w(" per day."),Xe=S(),_e=h("p"),Ze=w(`To use Britelite, the only requirement is to create an account. Accounts are required so
						we can limit the use to humans only.`),xe=S(),oe=h("button"),ve=h("ion-icon"),et=S(),Pe=h("span"),tt=w("Create Account"),this.h()},l(De){e=d(De,"DIV",{class:!0});var ie=m(e);s=d(ie,"SECTION",{class:!0});var ut=m(s);t=d(ut,"ARTICLE",{class:!0});var ce=m(t);r=d(ce,"H2",{class:!0});var ft=m(r);n=I(ft,"Britelite is the avatar super charger."),ft.forEach(u),o=T(ce),c=d(ce,"P",{class:!0});var pt=m(c);_=I(pt,"Put an image of yourself through the Britelite and give it a super charge."),pt.forEach(u),i=T(ce),f=d(ce,"IMG",{src:!0,alt:!0,class:!0}),g=T(ce),v=d(ce,"BUTTON",{class:!0});var Se=m(v);P=d(Se,"ION-ICON",{class:!0,name:!0}),m(P).forEach(u),y=T(Se),k=d(Se,"SPAN",{});var ht=m(k);E=I(ht,"Watch Video"),ht.forEach(u),Se.forEach(u),ce.forEach(u),ut.forEach(u),A=T(ie),p=d(ie,"SECTION",{class:!0});var dt=m(p);D=d(dt,"DIV",{class:!0});var mt=m(D);N=d(mt,"ARTICLE",{class:!0});var ge=m(N);O=d(ge,"H2",{class:!0});var _t=m(O);j=I(_t,"You own it."),_t.forEach(u),H=T(ge),V=d(ge,"P",{class:!0});var Te=m(V);W=I(Te,`We don't use, track, or keep what you create. What you make is yours. Our business model
					is subscription based and we keep an easy to read `),L=d(Te,"A",{href:!0});var vt=m(L);ee=I(vt,"terms of service"),vt.forEach(u),se=I(Te," agreement."),Te.forEach(u),X=T(ge),G=d(ge,"P",{class:!0});var Oe=m(G);te=I(Oe,"We also respect your "),J=d(Oe,"A",{href:!0});var gt=m(J);M=I(gt,"privacy"),gt.forEach(u),Q=I(Oe,`, regardless of the country you
					hail from.`),Oe.forEach(u),ge.forEach(u),mt.forEach(u),dt.forEach(u),F=T(ie),B=d(ie,"SECTION",{class:!0});var yt=m(B);$=d(yt,"ARTICLE",{class:!0});var je=m($);Z=d(je,"H2",{class:!0});var bt=m(Z);re=I(bt,"Two tiers: free or subscribe."),bt.forEach(u),$e=T(je),ae=d(je,"DIV",{class:!0});var Ue=m(ae);he=d(Ue,"DIV",{class:!0});var kt=m(he);pe=d(kt,"IMG",{src:!0,alt:!0,class:!0}),kt.forEach(u),Re=T(Ue),x=d(Ue,"DIV",{class:!0});var ue=m(x);le=d(ue,"P",{class:!0});var Be=m(le);qe=I(Be,`We are working on adding more power to Britelite. We limit everyone without a SpaceLab
						to `),de=d(Be,"SPAN",{class:!0});var Et=m(de);Ye=I(Et,"3"),Et.forEach(u),ze=I(Be," per day."),Be.forEach(u),Ge=T(ue),ne=d(ue,"P",{class:!0});var Le=m(ne);Je=I(Le,"If you subscribe to SpaceLab, you receive "),me=d(Le,"SPAN",{class:!0});var wt=m(me);Fe=I(wt,"12"),wt.forEach(u),Ke=I(Le," per day."),Le.forEach(u),Xe=T(ue),_e=d(ue,"P",{class:!0});var It=m(_e);Ze=I(It,`To use Britelite, the only requirement is to create an account. Accounts are required so
						we can limit the use to humans only.`),It.forEach(u),xe=T(ue),oe=d(ue,"BUTTON",{});var Ve=m(oe);ve=d(Ve,"ION-ICON",{class:!0,name:!0}),m(ve).forEach(u),et=T(Ve),Pe=d(Ve,"SPAN",{});var Ct=m(Pe);tt=I(Ct,"Create Account"),Ct.forEach(u),Ve.forEach(u),ue.forEach(u),Ue.forEach(u),je.forEach(u),yt.forEach(u),ie.forEach(u),this.h()},h(){b(r,"class","svelte-1kfxmea"),b(c,"class","svelte-1kfxmea"),He(f.src,C="https://3ee.s3.amazonaws.com/img/britelite_banner.png")||b(f,"src",C),b(f,"alt","a real cat being turned into a cartoon cat."),b(f,"class","svelte-1kfxmea"),R(P,"class","icon svelte-1kfxmea"),R(P,"name","videocam"),b(v,"class","svelte-1kfxmea"),b(t,"class","video svelte-1kfxmea"),b(s,"class","background svelte-1kfxmea"),b(O,"class","svelte-1kfxmea"),b(L,"href","/account/terms/"),b(V,"class","svelte-1kfxmea"),b(J,"href","/account/privacy"),b(G,"class","svelte-1kfxmea"),b(N,"class","planets svelte-1kfxmea"),b(D,"class","image-wrap svelte-1kfxmea"),b(p,"class","background alternate svelte-1kfxmea"),b(Z,"class","svelte-1kfxmea"),He(pe.src,it="/potions.png")||b(pe,"src",it),b(pe,"alt","a potion bottle"),b(pe,"class","svelte-1kfxmea"),b(he,"class","left svelte-1kfxmea"),b(de,"class","highlight"),b(le,"class","svelte-1kfxmea"),b(me,"class","highlight"),b(ne,"class","svelte-1kfxmea"),b(_e,"class","svelte-1kfxmea"),R(ve,"class","icon svelte-1kfxmea"),R(ve,"name","rocket-sharp"),b(x,"class","right svelte-1kfxmea"),b(ae,"class","column-container svelte-1kfxmea"),b($,"class","svelte-1kfxmea"),b(B,"class","background svelte-1kfxmea"),b(e,"class","container svelte-1kfxmea")},m(De,ie){U(De,e,ie),a(e,s),a(s,t),a(t,r),a(r,n),a(t,o),a(t,c),a(c,_),a(t,i),a(t,f),a(t,g),a(t,v),a(v,P),a(v,y),a(v,k),a(k,E),a(e,A),a(e,p),a(p,D),a(D,N),a(N,O),a(O,j),a(N,H),a(N,V),a(V,W),a(V,L),a(L,ee),a(V,se),a(N,X),a(N,G),a(G,te),a(G,J),a(J,M),a(G,Q),a(e,F),a(e,B),a(B,$),a($,Z),a(Z,re),a($,$e),a($,ae),a(ae,he),a(he,pe),a(ae,Re),a(ae,x),a(x,le),a(le,qe),a(le,de),a(de,Ye),a(le,ze),a(x,Ge),a(x,ne),a(ne,Je),a(ne,me),a(me,Fe),a(ne,Ke),a(x,Xe),a(x,_e),a(_e,Ze),a(x,xe),a(x,oe),a(oe,ve),a(oe,et),a(oe,Pe),a(Pe,tt),st||(ct=Ne(oe,"click",l[0]),st=!0)},p:q,i:q,o:q,d(De){De&&u(e),st=!1,ct()}}}function fs(l){const e=Qe();function s(){console.log("yatee"),e("onCreateAccount")}return[s]}class ps extends be{constructor(e){super(),ke(this,e,fs,us,Ee,{})}}function hs(l){let e,s,t,r,n,o,c,_,i,f,C,g=We(l[0])+"",v,P,y,k,E,A,p,D,N,O,j,H=We(l[0])+"",V;return{c(){e=h("div"),s=h("article"),t=h("h4"),r=h("ion-icon"),n=w(" You're out of coins."),o=S(),c=h("p"),_=w("You'll receive "),i=h("span"),f=w(l[1]),C=w(" in "),v=w(g),P=w("."),y=S(),k=h("aside"),E=h("input"),A=S(),p=h("button"),D=h("ion-icon"),N=S(),O=h("span"),j=w("Wait "),V=w(H),this.h()},l(W){e=d(W,"DIV",{class:!0});var L=m(e);s=d(L,"ARTICLE",{class:!0});var ee=m(s);t=d(ee,"H4",{class:!0});var se=m(t);r=d(se,"ION-ICON",{name:!0,class:!0}),m(r).forEach(u),n=I(se," You're out of coins."),se.forEach(u),o=T(ee),c=d(ee,"P",{class:!0});var X=m(c);_=I(X,"You'll receive "),i=d(X,"SPAN",{class:!0});var G=m(i);f=I(G,l[1]),G.forEach(u),C=I(X," in "),v=I(X,g),P=I(X,"."),X.forEach(u),ee.forEach(u),y=T(L),k=d(L,"ASIDE",{class:!0});var te=m(k);E=d(te,"INPUT",{style:!0,type:!0}),A=T(te),p=d(te,"BUTTON",{class:!0});var J=m(p);D=d(J,"ION-ICON",{class:!0,name:!0}),m(D).forEach(u),N=T(J),O=d(J,"SPAN",{});var M=m(O);j=I(M,"Wait "),V=I(M,H),M.forEach(u),J.forEach(u),te.forEach(u),L.forEach(u),this.h()},h(){R(r,"name","stop-circle"),R(r,"class","svelte-1cjhy41"),b(t,"class","highlight large supercharged svelte-1cjhy41"),b(i,"class","highlight"),b(c,"class","svelte-1cjhy41"),b(s,"class","main supercharged-container"),Lt(E,"display","none"),b(E,"type","file"),R(D,"class","icon svelte-1cjhy41"),R(D,"name","alarm"),b(p,"class","alert"),p.disabled=!0,b(k,"class","aside aside-1"),b(e,"class","option-container")},m(W,L){U(W,e,L),a(e,s),a(s,t),a(t,r),a(t,n),a(s,o),a(s,c),a(c,_),a(c,i),a(i,f),a(c,C),a(c,v),a(c,P),a(e,y),a(e,k),a(k,E),a(k,A),a(k,p),a(p,D),a(p,N),a(p,O),a(O,j),a(O,V)},p(W,[L]){L&2&&Y(f,W[1]),L&1&&g!==(g=We(W[0])+"")&&Y(v,g),L&1&&H!==(H=We(W[0])+"")&&Y(V,H)},i:q,o:q,d(W){W&&u(e)}}}function We(l){let e=new Date(l);e.setHours(e.getHours()+24);let s=new Date;const t=e.getTime()-s.getTime();let r=Math.floor(t%864e5/36e5),n=Math.round(t%864e5%36e5/6e4);return r===0?`${n} minutes`:`${r} hours`}function ds(l,e,s){let{estimatedTime:t}=e,{dailyCoinAllowance:r=3}=e;return l.$$set=n=>{"estimatedTime"in n&&s(0,t=n.estimatedTime),"dailyCoinAllowance"in n&&s(1,r=n.dailyCoinAllowance)},[t,r]}class ms extends be{constructor(e){super(),ke(this,e,ds,hs,Ee,{estimatedTime:0,dailyCoinAllowance:1})}}const{document:jt}=Yt;function _s(l){let e,s,t,r,n,o,c,_,i,f,C,g=l[2].coins+"",v,P,y,k,E;const A=[ys,gs],p=[];function D(N,O){return N[10]?0:1}return y=D(l),k=p[y]=A[y](l),{c(){e=h("section"),s=h("article"),t=h("h1"),r=w("Britelite"),n=S(),o=h("h3"),c=w("Super Charge your Avatar"),_=S(),i=h("p"),f=w("Coins: "),C=h("span"),v=w(g),P=S(),k.c(),this.h()},l(N){e=d(N,"SECTION",{class:!0});var O=m(e);s=d(O,"ARTICLE",{class:!0});var j=m(s);t=d(j,"H1",{});var H=m(t);r=I(H,"Britelite"),H.forEach(u),n=T(j),o=d(j,"H3",{class:!0});var V=m(o);c=I(V,"Super Charge your Avatar"),V.forEach(u),_=T(j),i=d(j,"P",{});var W=m(i);f=I(W,"Coins: "),C=d(W,"SPAN",{class:!0});var L=m(C);v=I(L,g),L.forEach(u),W.forEach(u),P=T(j),k.l(j),j.forEach(u),O.forEach(u),this.h()},h(){b(o,"class","svelte-xyzsz6"),b(C,"class","highlight"),b(s,"class","content"),b(e,"class","background")},m(N,O){U(N,e,O),a(e,s),a(s,t),a(t,r),a(s,n),a(s,o),a(o,c),a(s,_),a(s,i),a(i,f),a(i,C),a(C,v),a(s,P),p[y].m(s,null),E=!0},p(N,O){(!E||O&4)&&g!==(g=N[2].coins+"")&&Y(v,g);let j=y;y=D(N),y===j?p[y].p(N,O):(lt(),K(p[j],1,1,()=>{p[j]=null}),nt(),k=p[y],k?k.p(N,O):(k=p[y]=A[y](N),k.c()),z(k,1),k.m(s,null))},i(N){E||(z(k),E=!0)},o(N){K(k),E=!1},d(N){N&&u(e),p[y].d()}}}function vs(l){let e,s;return e=new ps({}),e.$on("onCreateAccount",l[21]),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p:q,i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function gs(l){let e,s,t,r,n,o,c,_;function i(p,D){return typeof p[11]=="undefined"||p[11]===0?ks:bs}let f=i(l),C=f(l);const g=[ws,Es],v=[];function P(p,D){return p[2].coins>=Ps?0:1}s=P(l),t=v[s]=g[s](l);function y(p,D){if(p[0])return Cs;if(p[7])return Is}let k=y(l),E=k&&k(l),A=(l[12]||l[7])&&Ut(l);return c=new Zt({props:{briteliteQueues:l[1]}}),c.$on("onSelectImage",l[17]),{c(){C.c(),e=S(),t.c(),r=S(),E&&E.c(),n=S(),A&&A.c(),o=S(),we(c.$$.fragment)},l(p){C.l(p),e=T(p),t.l(p),r=T(p),E&&E.l(p),n=T(p),A&&A.l(p),o=T(p),Ie(c.$$.fragment,p)},m(p,D){C.m(p,D),U(p,e,D),v[s].m(p,D),U(p,r,D),E&&E.m(p,D),U(p,n,D),A&&A.m(p,D),U(p,o,D),Ce(c,p,D),_=!0},p(p,D){f===(f=i(p))&&C?C.p(p,D):(C.d(1),C=f(p),C&&(C.c(),C.m(e.parentNode,e)));let N=s;s=P(p),s===N?v[s].p(p,D):(lt(),K(v[N],1,1,()=>{v[N]=null}),nt(),t=v[s],t?t.p(p,D):(t=v[s]=g[s](p),t.c()),z(t,1),t.m(r.parentNode,r)),k===(k=y(p))&&E?E.p(p,D):(E&&E.d(1),E=k&&k(p),E&&(E.c(),E.m(n.parentNode,n))),p[12]||p[7]?A?(A.p(p,D),D&4224&&z(A,1)):(A=Ut(p),A.c(),z(A,1),A.m(o.parentNode,o)):A&&(lt(),K(A,1,1,()=>{A=null}),nt());const O={};D&2&&(O.briteliteQueues=p[1]),c.$set(O)},i(p){_||(z(t),z(A),z(c.$$.fragment,p),_=!0)},o(p){K(t),K(A),K(c.$$.fragment,p),_=!1},d(p){C.d(p),p&&u(e),v[s].d(p),p&&u(r),E&&E.d(p),p&&u(n),A&&A.d(p),p&&u(o),Ae(c,p)}}}function ys(l){let e,s;return e=new Gt({}),e.$on("onPromptComplete",l[20]),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p:q,i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function bs(l){let e,s,t,r,n,o,c,_,i=l[11]!==1?"s":"",f,C,g,v,P;return{c(){e=h("p"),s=w("Hail, "),t=h("span"),r=w(l[14]),n=w(`, you have
						`),o=h("span"),c=w(l[11]),_=w(`
						new super charged avatar`),f=w(i),C=w("."),g=S(),v=h("p"),P=w(`Welcome to your avatar station: Britelite. View all your avatars here and choose which
						one you want stamped on your passport.`),this.h()},l(y){e=d(y,"P",{});var k=m(e);s=I(k,"Hail, "),t=d(k,"SPAN",{class:!0});var E=m(t);r=I(E,l[14]),E.forEach(u),n=I(k,`, you have
						`),o=d(k,"SPAN",{class:!0});var A=m(o);c=I(A,l[11]),A.forEach(u),_=I(k,`
						new super charged avatar`),f=I(k,i),C=I(k,"."),k.forEach(u),g=T(y),v=d(y,"P",{});var p=m(v);P=I(p,`Welcome to your avatar station: Britelite. View all your avatars here and choose which
						one you want stamped on your passport.`),p.forEach(u),this.h()},h(){b(t,"class","highlight accent"),b(o,"class","highlight")},m(y,k){U(y,e,k),a(e,s),a(e,t),a(t,r),a(e,n),a(e,o),a(o,c),a(e,_),a(e,f),a(e,C),U(y,g,k),U(y,v,k),a(v,P)},p(y,k){k&2048&&Y(c,y[11]),k&2048&&i!==(i=y[11]!==1?"s":"")&&Y(f,i)},d(y){y&&u(e),y&&u(g),y&&u(v)}}}function ks(l){let e,s,t,r,n;return{c(){e=h("p"),s=w("Hello, "),t=h("span"),r=w(l[14]),n=w(`, you have no super charged
						avatars.`),this.h()},l(o){e=d(o,"P",{});var c=m(e);s=I(c,"Hello, "),t=d(c,"SPAN",{class:!0});var _=m(t);r=I(_,l[14]),_.forEach(u),n=I(c,`, you have no super charged
						avatars.`),c.forEach(u),this.h()},h(){b(t,"class","highlight accent")},m(o,c){U(o,e,c),a(e,s),a(e,t),a(t,r),a(e,n)},p:q,d(o){o&&u(e)}}}function Es(l){let e,s;return e=new ms({props:{estimatedTime:l[2].lastCoinDailyDate,dailyCoinAllowance:l[15]}}),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p(t,r){const n={};r&4&&(n.estimatedTime=t[2].lastCoinDailyDate),e.$set(n)},i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function ws(l){let e,s;return e=new cs({props:{isImageUploading:l[4],promptComplete:l[5]}}),e.$on("onFileSelected",l[19]),e.$on("onViewAvatar",l[16]),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p(t,r){const n={};r&16&&(n.isImageUploading=t[4]),r&32&&(n.promptComplete=t[5]),e.$set(n)},i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function Is(l){let e,s,t,r,n,o,c,_;return{c(){e=h("p"),s=w(l[8]),t=w(" out of "),r=w(l[9]),n=w(" avatars"),o=S(),c=h("p"),_=w("Your avatar is being beamed up into our server.  Please wait..."),this.h()},l(i){e=d(i,"P",{class:!0});var f=m(e);s=I(f,l[8]),t=I(f," out of "),r=I(f,l[9]),n=I(f," avatars"),f.forEach(u),o=T(i),c=d(i,"P",{});var C=m(c);_=I(C,"Your avatar is being beamed up into our server.  Please wait..."),C.forEach(u),this.h()},h(){b(e,"class","highlight large")},m(i,f){U(i,e,f),a(e,s),a(e,t),a(e,r),a(e,n),U(i,o,f),U(i,c,f),a(c,_)},p(i,f){f&256&&Y(s,i[8]),f&512&&Y(r,i[9])},d(i){i&&u(e),i&&u(o),i&&u(c)}}}function Cs(l){let e,s,t,r,n,o,c,_,i,f=l[6].hours+"",C,g,v,P=Math.floor(l[6].minutes)+"",y,k;return{c(){e=h("p"),s=w(l[8]),t=w(" out of "),r=w(l[9]),n=w(" avatars"),o=S(),c=h("p"),_=w(`Your avatar is being processed. It will be ready in
						`),i=h("span"),C=w(f),g=w(` hours and
						`),v=h("span"),y=w(P),k=w(" minutes."),this.h()},l(E){e=d(E,"P",{class:!0});var A=m(e);s=I(A,l[8]),t=I(A," out of "),r=I(A,l[9]),n=I(A," avatars"),A.forEach(u),o=T(E),c=d(E,"P",{});var p=m(c);_=I(p,`Your avatar is being processed. It will be ready in
						`),i=d(p,"SPAN",{class:!0});var D=m(i);C=I(D,f),D.forEach(u),g=I(p,` hours and
						`),v=d(p,"SPAN",{class:!0});var N=m(v);y=I(N,P),N.forEach(u),k=I(p," minutes."),p.forEach(u),this.h()},h(){b(e,"class","highlight large"),b(i,"class","highlight"),b(v,"class","highlight")},m(E,A){U(E,e,A),a(e,s),a(e,t),a(e,r),a(e,n),U(E,o,A),U(E,c,A),a(c,_),a(c,i),a(i,C),a(c,g),a(c,v),a(v,y),a(c,k)},p(E,A){A&256&&Y(s,E[8]),A&512&&Y(r,E[9]),A&64&&f!==(f=E[6].hours+"")&&Y(C,f),A&64&&P!==(P=Math.floor(E[6].minutes)+"")&&Y(y,P)},d(E){E&&u(e),E&&u(o),E&&u(c)}}}function Ut(l){let e,s;return e=new ls({props:{intervalDuration:l[3],jobsQueued:l[7]}}),e.$on("onProgressComplete",l[18]),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,r){Ce(e,t,r),s=!0},p(t,r){const n={};r&8&&(n.intervalDuration=t[3]),r&128&&(n.jobsQueued=t[7]),e.$set(n)},i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){Ae(e,t)}}}function As(l){let e,s,t,r,n;const o=[vs,_s],c=[];function _(i,f){return typeof i[13]=="undefined"||i[13]===null||i[13]===""?0:1}return s=_(l),t=c[s]=o[s](l),{c(){e=S(),t.c(),r=fe(),this.h()},l(i){qt('[data-svelte="svelte-qyyaak"]',jt.head).forEach(u),e=T(i),t.l(i),r=fe(),this.h()},h(){jt.title="Britelite"},m(i,f){U(i,e,f),c[s].m(i,f),U(i,r,f),n=!0},p(i,[f]){t.p(i,f)},i(i){n||(z(t),n=!0)},o(i){K(t),n=!1},d(i){i&&u(e),c[s].d(i),i&&u(r)}}}const Ps=1,Ds=3,Ns=12;let Ss=1;function Ts(l,e,s){let t,r,n,o,c,_,i;ye.subscribe(M=>{s(2,i=M)});const f=i==null?void 0:i.token,C=i==null?void 0:i.username;let g=!1,v=0,P=6e4,y=[],k=!1,E=!1,A=!1,p=null,D=new FormData,N={},O=i.spaceLab?Ns:Ds,j={},H=!1;Bt(async()=>{if(typeof f=="undefined"||f===null||f==="")return()=>{};const M=15e3;async function Q(){const Z=await(await fetch("https://3ee.dev/currency/get/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors"})).json();let re=i;re.coins=Z.coins,re.lastCoinDailyDate=Z.lastCoinDailyDate,ye.set(re)}const F=setInterval(V,M),B=setInterval(Q,M);return V(),Q(),()=>{clearInterval(F),clearInterval(B)}});async function V(){const M=await fetch("https://3ee.dev/britelite/status/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors"});s(1,y=await M.json());let Q=[];for(let B=0;B<y.length;B++)y[B].status_type===0&&Q.push(y[B]);if(s(0,g=!1),Q.length>0){s(22,v=Q.length),s(24,H=!1),s(0,g=!0);let B=Math.abs(new Date(Q[0].estimated_time)-new Date(Q[0].created)),$=B,Z=$/60/1e3;var F=$/3600/1e3;s(6,j.hours=Math.floor(F),j),console.log(Z-60*j.hours),s(6,j.minutes=Z-60*j.hours,j);let re=Math.floor(B/60/1e3);s(3,P=re*6e4)}for(let B=0;B<y.length;B++){let $=y[B].encoded_avatar.replace(/'/g,"").replace(/"/g,"").replace("[","").replace("]","");$=$.split(","),s(1,y[B].encoded_avatar=$,y)}typeof y!="undefined"&&y.length>0&&y.sort(function(B,$){return new Date($.updated)-new Date(B.updated)})}const W=async()=>{rt("/account/britelite")},L=async()=>{s(23,k=!0)},ee=async()=>{s(4,E=!0),document.body.scrollIntoView();const Q=await(await fetch("https://3ee.dev/account/upload/",{method:"POST",headers:{Accept:"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors",body:D})).json();if(!Q.success){let B=i;B.coins=0,B.lastCoinDailyDate=Q.lastCoinDailyDate,ye.set(B);return}let F=i;F.coins=Q.coins,F.lastCoinDailyDate=Q.lastCoinDailyDate,F.profile.image=Q.image,ye.set(F),s(4,E=!1),A&&typeof umami!="undefined"?umami.trackEvent("Supercharge",{success:!0}):!A&&typeof umami!="undefined"&&umami.trackEvent("Upload Avatar",{success:!0})};function se(){rt("/britelite/library")}async function X(){s(0,g=!1),V()}const G=async(M,Q)=>{p=M.detail.file,new FileReader().readAsDataURL(p),D.append("file",p),D.append("useDiffusion",!0);let B=i;B.profile.useDiffusion=!0,ye.set(B),L()},te=async M=>{s(23,k=!1),N=M.detail,D.append("prompt",JSON.stringify(N)),s(5,A=!0),s(24,H=!0),ee()};function J(){rt("/account/create")}return l.$$.update=()=>{l.$$.dirty&1&&s(12,t=g),l.$$.dirty&2&&s(11,r=y.filter(M=>M.encoded_avatar.length>0).length),l.$$.dirty&8388608&&s(10,n=k),l.$$.dirty&4194304&&s(9,o=v),l.$$.dirty&16777216&&s(7,_=H)},s(8,c=Ss),[g,y,i,P,E,A,j,_,c,o,n,r,t,f,C,O,W,se,X,G,te,J,v,k,H]}class Hs extends be{constructor(e){super(),ke(this,e,Ts,As,Ee,{})}}export{Hs as default};

import{S as Ae,i as De,s as Pe,e as m,c as d,a as _,d as p,b as v,g as V,q as M,l as we,n as Ie,o as H,p as Ce,N as Lt,_ as qe,t as k,k as T,h as w,m as O,H as W,I as l,j as F,E as X,w as pe,x as he,y as me,B as de,R as We,J as Oe,L as nt,K as At,a0 as Vt,C as Dt,a2 as Mt,a3 as Rt,a4 as Ht,G as Wt,v as Bt,f as jt,a1 as Qt,X as qt,a5 as Gt}from"../../chunks/index-8ca01e64.js";import{g as rt}from"../../chunks/navigation-0e6511d1.js";import{a as ke}from"../../chunks/accountStore-c3ff6133.js";import{c as Pt}from"../../chunks/briteliteStore-ee389409.js";import{S as Jt}from"../../chunks/Saos-3434f03e.js";import{w as Yt}from"../../chunks/index-12b3acf3.js";import{P as zt}from"../../chunks/Prompts-57898cd4.js";import"../../chunks/singletons-d1fb5791.js";function Nt(r,e,s){const t=r.slice();return t[5]=e[s],t}function St(r){let e,s,t=r[0],a=[];for(let o=0;o<t.length;o+=1)a[o]=Tt(Nt(r,t,o));const c=o=>H(a[o],1,1,()=>{a[o]=null});return{c(){e=m("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=d(o,"UL",{class:!0});var n=_(e);for(let u=0;u<a.length;u+=1)a[u].l(n);n.forEach(p),this.h()},h(){v(e,"class","svelte-bb0wpm")},m(o,n){V(o,e,n);for(let u=0;u<a.length;u+=1)a[u].m(e,null);s=!0},p(o,n){if(n&3){t=o[0];let u;for(u=0;u<t.length;u+=1){const i=Nt(o,t,u);a[u]?(a[u].p(i,n),M(a[u],1)):(a[u]=Tt(i),a[u].c(),M(a[u],1),a[u].m(e,null))}for(Ie(),u=t.length;u<a.length;u+=1)c(u);Ce()}},i(o){if(!s){for(let n=0;n<t.length;n+=1)M(a[n]);s=!0}},o(o){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)H(a[n]);s=!1},d(o){o&&p(e),Lt(a,o)}}}function Ft(r){let e,s,t,a=Qe(r[5].updated)+"",c,o,n,u,i,f,y,E;return{c(){e=m("li"),s=m("h3"),t=m("a"),c=k(a),o=T(),n=m("div"),u=m("ion-icon"),i=T(),f=m("p"),y=k("Coming Soon, please wait."),E=T(),this.h()},l(g){e=d(g,"LI",{class:!0});var A=_(e);s=d(A,"H3",{class:!0});var P=_(s);t=d(P,"A",{href:!0});var D=_(t);c=w(D,a),D.forEach(p),P.forEach(p),o=O(A),n=d(A,"DIV",{class:!0});var b=_(n);u=d(b,"ION-ICON",{class:!0,name:!0}),_(u).forEach(p),i=O(b),f=d(b,"P",{});var I=_(f);y=w(I,"Coming Soon, please wait."),I.forEach(p),b.forEach(p),E=O(A),A.forEach(p),this.h()},h(){v(t,"href",""),v(s,"class","svelte-bb0wpm"),W(u,"class","icon svelte-bb0wpm"),W(u,"name","alarm-sharp"),v(n,"class","coming-soon svelte-bb0wpm"),v(e,"class","svelte-bb0wpm")},m(g,A){V(g,e,A),l(e,s),l(s,t),l(t,c),l(e,o),l(e,n),l(n,u),l(n,i),l(n,f),l(f,y),l(e,E)},p(g,A){A&1&&a!==(a=Qe(g[5].updated)+"")&&F(c,a)},i:X,o:X,d(g){g&&p(e)}}}function Kt(r){let e,s;return e=new Jt({props:{animation:"fade-in 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both",$$slots:{default:[Xt]},$$scope:{ctx:r}}}),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,a){me(e,t,a),s=!0},p(t,a){const c={};a&257&&(c.$$scope={dirty:a,ctx:t}),e.$set(c)},i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function Xt(r){let e,s,t,a,c,o,n,u,i,f,y,E,g,A=Qe(r[5].updated)+"",P,D,b,I,h=r[5].output_images_diffusion_status.length+"",C,S,N,U;return{c(){e=m("li"),s=m("div"),t=m("picture"),a=m("source"),o=T(),n=m("img"),i=T(),f=m("div"),y=m("div"),E=m("p"),g=m("a"),P=k(A),D=T(),b=m("p"),I=k("Total "),C=k(h),S=T(),this.h()},l($){e=d($,"LI",{class:!0});var B=_(e);s=d(B,"DIV",{class:!0});var L=_(s);t=d(L,"PICTURE",{});var j=_(t);a=d(j,"SOURCE",{media:!0,srcset:!0,width:!0,height:!0}),o=O(j),n=d(j,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),j.forEach(p),L.forEach(p),i=O(B),f=d(B,"DIV",{class:!0});var J=_(f);y=d(J,"DIV",{class:!0});var Z=_(y);E=d(Z,"P",{class:!0});var K=_(E);g=d(K,"A",{href:!0});var Y=_(g);P=w(Y,A),Y.forEach(p),K.forEach(p),D=O(Z),b=d(Z,"P",{class:!0});var x=_(b);I=w(x,"Total "),C=w(x,h),x.forEach(p),Z.forEach(p),J.forEach(p),B.forEach(p),S=O($),this.h()},h(){v(a,"media","(min-width: 100px) and (max-width: 896.98px)"),v(a,"srcset",c=r[5].output_images_diffusion_status[1]),v(a,"width","312"),v(a,"height","312"),We(n.src,u=r[5].output_images_diffusion_status[0])||v(n,"src",u),v(n,"alt","Britelite Super Charged Avatar"),v(n,"width","512"),v(n,"height","512"),v(n,"class","svelte-bb0wpm"),v(s,"class","container-item"),v(g,"href",""),v(E,"class","svelte-bb0wpm"),v(b,"class","svelte-bb0wpm"),v(y,"class","details svelte-bb0wpm"),v(f,"class","description svelte-bb0wpm"),v(e,"class","svelte-bb0wpm")},m($,B){V($,e,B),l(e,s),l(s,t),l(t,a),l(t,o),l(t,n),l(e,i),l(e,f),l(f,y),l(y,E),l(E,g),l(g,P),l(y,D),l(y,b),l(b,I),l(b,C),V($,S,B),N||(U=[Oe(g,"click",nt(function(){At(r[1](r[5]))&&r[1](r[5]).apply(this,arguments)})),Oe(e,"click",nt(function(){At(r[1](r[5]))&&r[1](r[5]).apply(this,arguments)}))],N=!0)},p($,B){r=$,B&1&&c!==(c=r[5].output_images_diffusion_status[1])&&v(a,"srcset",c),B&1&&!We(n.src,u=r[5].output_images_diffusion_status[0])&&v(n,"src",u),B&1&&A!==(A=Qe(r[5].updated)+"")&&F(P,A),B&1&&h!==(h=r[5].output_images_diffusion_status.length+"")&&F(C,h)},d($){$&&p(e),$&&p(S),N=!1,Vt(U)}}}function Tt(r){let e,s,t,a;const c=[Kt,Ft],o=[];function n(u,i){var f;return typeof((f=u[5])==null?void 0:f.output_images_diffusion_status[0])!="undefined"&&u[5].output_images_diffusion_status[0].length>0?0:1}return e=n(r),s=o[e]=c[e](r),{c(){s.c(),t=we()},l(u){s.l(u),t=we()},m(u,i){o[e].m(u,i),V(u,t,i),a=!0},p(u,i){let f=e;e=n(u),e===f?o[e].p(u,i):(Ie(),H(o[f],1,1,()=>{o[f]=null}),Ce(),s=o[e],s?s.p(u,i):(s=o[e]=c[e](u),s.c()),M(s,1),s.m(t.parentNode,t))},i(u){a||(M(s),a=!0)},o(u){H(s),a=!1},d(u){o[e].d(u),u&&p(t)}}}function Zt(r){let e,s,t=r[0].length>0&&St(r);return{c(){t&&t.c(),e=we()},l(a){t&&t.l(a),e=we()},m(a,c){t&&t.m(a,c),V(a,e,c),s=!0},p(a,[c]){a[0].length>0?t?(t.p(a,c),c&1&&M(t,1)):(t=St(a),t.c(),M(t,1),t.m(e.parentNode,e)):t&&(Ie(),H(t,1,1,()=>{t=null}),Ce())},i(a){s||(M(t),s=!0)},o(a){H(t),s=!1},d(a){t&&t.d(a),a&&p(e)}}}function Qe(r){return typeof r!="undefined"?new Date(r).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null}function xt(r,e,s){Pt.subscribe(o=>{});let{briteliteQueues:t=[]}=e;ke.subscribe(o=>{});const a=qe();function c(o){Pt.update(n=>o),a("onSelectImage")}return r.$$set=o=>{"briteliteQueues"in o&&s(0,t=o.briteliteQueues)},[t,c]}class es extends Ae{constructor(e){super(),De(this,e,xt,Zt,Pe,{briteliteQueues:0})}}function ts(r){const e=r-1;return e*e*e+1}function Ot(r){return Object.prototype.toString.call(r)==="[object Date]"}function ot(r,e){if(r===e||r!==r)return()=>r;const s=typeof r;if(s!==typeof e||Array.isArray(r)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const t=e.map((a,c)=>ot(r[c],a));return a=>t.map(c=>c(a))}if(s==="object"){if(!r||!e)throw new Error("Object cannot be null");if(Ot(r)&&Ot(e)){r=r.getTime(),e=e.getTime();const c=e-r;return o=>new Date(r+o*c)}const t=Object.keys(e),a={};return t.forEach(c=>{a[c]=ot(r[c],e[c])}),c=>{const o={};return t.forEach(n=>{o[n]=a[n](c)}),o}}if(s==="number"){const t=e-r;return a=>r+a*t}throw new Error(`Cannot interpolate ${s} values`)}function ss(r,e={}){const s=Yt(r);let t,a=r;function c(o,n){if(r==null)return s.set(r=o),Promise.resolve();a=o;let u=t,i=!1,{delay:f=0,duration:y=400,easing:E=Ht,interpolate:g=ot}=Dt(Dt({},e),n);if(y===0)return u&&(u.abort(),u=null),s.set(r=a),Promise.resolve();const A=Mt()+f;let P;return t=Rt(D=>{if(D<A)return!0;i||(P=g(r,o),typeof y=="function"&&(y=y(r,o)),i=!0),u&&(u.abort(),u=null);const b=D-A;return b>y?(s.set(r=o),!1):(s.set(r=P(E(b/y))),!0)}),t.promise}return{set:c,update:(o,n)=>c(o(a,r),n),subscribe:s.subscribe}}function as(r){let e,s,t,a=r[0]/6e4+"",c,o,n,u;return{c(){e=m("p"),s=m("ion-icon"),t=k("Estimated time: "),c=k(a),o=k(" minutes"),n=T(),u=m("progress"),this.h()},l(i){e=d(i,"P",{});var f=_(e);s=d(f,"ION-ICON",{class:!0,name:!0}),_(s).forEach(p),t=w(f,"Estimated time: "),c=w(f,a),o=w(f," minutes"),f.forEach(p),n=O(i),u=d(i,"PROGRESS",{class:!0}),_(u).forEach(p),this.h()},h(){W(s,"class","icon svelte-1y90m1"),W(s,"name","alarm-sharp"),u.value=r[1],v(u,"class","svelte-1y90m1")},m(i,f){V(i,e,f),l(e,s),l(e,t),l(e,c),l(e,o),V(i,n,f),V(i,u,f)},p(i,[f]){f&1&&a!==(a=i[0]/6e4+"")&&F(c,a),f&2&&(u.value=i[1])},i:X,o:X,d(i){i&&p(e),i&&p(n),i&&p(u)}}}function ls(r,e,s){let t;const a=qe();let{intervalDuration:c=6e4}=e,o=0,n=ss(0,{duration:1e3,easing:ts,max:c});Wt(r,n,i=>s(1,t=i)),Bt(async()=>{async function i(){o+=1e3/c,n.set(o),o>=1&&(clearInterval(f),a("onProgressComplete"))}const f=setInterval(i,1e3);return()=>{clearInterval(f)}});const u=async i=>{a("onProgressComplete")};return r.$$set=i=>{"intervalDuration"in i&&s(0,c=i.intervalDuration)},r.$$.update=()=>{r.$$.dirty&1&&n.subscribe(i=>{i===c&&u()})},[c,t,n]}class rs extends Ae{constructor(e){super(),De(this,e,ls,as,Pe,{intervalDuration:0})}}function ns(r){let e,s,t,a,c,o,n;return{c(){e=m("button"),s=m("ion-icon"),t=T(),a=m("span"),c=k("Upload"),this.h()},l(u){e=d(u,"BUTTON",{});var i=_(e);s=d(i,"ION-ICON",{class:!0,name:!0}),_(s).forEach(p),t=O(i),a=d(i,"SPAN",{});var f=_(a);c=w(f,"Upload"),f.forEach(p),i.forEach(p),this.h()},h(){W(s,"class","icon svelte-127ggf6"),W(s,"name","color-palette-sharp")},m(u,i){V(u,e,i),l(e,s),l(e,t),l(e,a),l(a,c),o||(n=Oe(e,"click",nt(r[2])),o=!0)},p:X,d(u){u&&p(e),o=!1,n()}}}function os(r){let e,s,t,a,c,o,n,u,i,f,y,E,g,A,P,D,b;function I(S,N){return ns}let C=I()(r);return{c(){e=m("div"),s=m("article"),t=m("h4"),a=m("ion-icon"),c=k(" Super Charged Avatar"),o=T(),n=m("p"),u=k("Upload your avatar. Recommended size is 512x512 pixels."),i=T(),f=m("p"),y=k("1 coin will be consumed when completed."),E=T(),g=m("aside"),A=m("input"),P=T(),C.c(),this.h()},l(S){e=d(S,"DIV",{class:!0});var N=_(e);s=d(N,"ARTICLE",{class:!0});var U=_(s);t=d(U,"H4",{class:!0});var $=_(t);a=d($,"ION-ICON",{name:!0,class:!0}),_(a).forEach(p),c=w($," Super Charged Avatar"),$.forEach(p),o=O(U),n=d(U,"P",{class:!0});var B=_(n);u=w(B,"Upload your avatar. Recommended size is 512x512 pixels."),B.forEach(p),i=O(U),f=d(U,"P",{class:!0});var L=_(f);y=w(L,"1 coin will be consumed when completed."),L.forEach(p),U.forEach(p),E=O(N),g=d(N,"ASIDE",{class:!0});var j=_(g);A=d(j,"INPUT",{style:!0,type:!0,accept:!0}),P=O(j),C.l(j),j.forEach(p),N.forEach(p),this.h()},h(){W(a,"name","image"),W(a,"class","svelte-127ggf6"),v(t,"class","highlight large supercharged svelte-127ggf6"),v(n,"class","svelte-127ggf6"),v(f,"class","svelte-127ggf6"),v(s,"class","main supercharged-container svelte-127ggf6"),jt(A,"display","none"),v(A,"type","file"),v(A,"accept",".jpg, .jpeg, .png, .webp, .gif"),v(g,"class","aside aside-1"),v(e,"class","upload-container svelte-127ggf6")},m(S,N){V(S,e,N),l(e,s),l(s,t),l(t,a),l(t,c),l(s,o),l(s,n),l(n,u),l(s,i),l(s,f),l(f,y),l(e,E),l(e,g),l(g,A),r[7](A),l(g,P),C.m(g,null),D||(b=Oe(A,"change",r[6]),D=!0)},p(S,[N]){C.p(S,N)},i:X,o:X,d(S){S&&p(e),r[7](null),C.d(),D=!1,b()}}}function is(r,e,s){let{isImageUploading:t=!1}=e,{useDiffusion:a=!1}=e,c;const o=qe(),n=async E=>{c.click()},u=async E=>{o("onViewAvatar")},i=async E=>{o("onFileSelected",{file:E.target.files[0]})},f=E=>i(E);function y(E){Qt[E?"unshift":"push"](()=>{c=E,s(1,c)})}return r.$$set=E=>{"isImageUploading"in E&&s(0,t=E.isImageUploading),"useDiffusion"in E&&s(5,a=E.useDiffusion)},[t,c,n,u,i,a,f,y]}class cs extends Ae{constructor(e){super(),De(this,e,is,os,Pe,{isImageUploading:0,useDiffusion:5})}}function us(r){let e,s,t,a,c,o,n,u,i,f,y,E,g,A,P,D,b,I,h,C,S,N,U,$,B,L,j,J,Z,K,Y,x,te,R,z,q,G,Q,ee,ae,Ne,le,_e,fe,it,Ge,se,re,Je,ve,Ye,ze,Fe,ne,Ke,ge,Xe,Ze,xe,be,et,tt,oe,ye,st,Se,at,lt,ct;return{c(){e=m("div"),s=m("section"),t=m("article"),a=m("h2"),c=k("Britelite is the avatar super charger."),o=T(),n=m("p"),u=k("Put an image of yourself through the Britelite and give it a super charge."),i=T(),f=m("img"),E=T(),g=m("button"),A=m("ion-icon"),P=T(),D=m("span"),b=k("Watch Video"),I=T(),h=m("section"),C=m("div"),S=m("article"),N=m("h2"),U=k("You own it."),$=T(),B=m("p"),L=k(`We don't use, track, or keep what you create. What you make is yours. Our business model
					is subscription based and we keep an easy to read `),j=m("a"),J=k("terms of service"),Z=k(" agreement."),K=T(),Y=m("p"),x=k("We also respect your "),te=m("a"),R=k("privacy"),z=k(`, regardless of the country you
					hail from.`),q=T(),G=m("section"),Q=m("article"),ee=m("h2"),ae=k("Two tiers: free or subscribe."),Ne=T(),le=m("div"),_e=m("div"),fe=m("img"),Ge=T(),se=m("div"),re=m("p"),Je=k(`We are working on adding more power to Britelite. We limit everyone without a SpaceLab
						to `),ve=m("span"),Ye=k("3"),ze=k(" per day."),Fe=T(),ne=m("p"),Ke=k("If you subscribe to SpaceLab, you receive "),ge=m("span"),Xe=k("12"),Ze=k(" per day."),xe=T(),be=m("p"),et=k(`To use Britelite, the only requirement is to create an account. Accounts are required so
						we can limit the use to humans only.`),tt=T(),oe=m("button"),ye=m("ion-icon"),st=T(),Se=m("span"),at=k("Create Account"),this.h()},l(Te){e=d(Te,"DIV",{class:!0});var ie=_(e);s=d(ie,"SECTION",{class:!0});var ut=_(s);t=d(ut,"ARTICLE",{class:!0});var ce=_(t);a=d(ce,"H2",{class:!0});var ft=_(a);c=w(ft,"Britelite is the avatar super charger."),ft.forEach(p),o=O(ce),n=d(ce,"P",{class:!0});var pt=_(n);u=w(pt,"Put an image of yourself through the Britelite and give it a super charge."),pt.forEach(p),i=O(ce),f=d(ce,"IMG",{src:!0,alt:!0,class:!0}),E=O(ce),g=d(ce,"BUTTON",{class:!0});var $e=_(g);A=d($e,"ION-ICON",{class:!0,name:!0}),_(A).forEach(p),P=O($e),D=d($e,"SPAN",{});var ht=_(D);b=w(ht,"Watch Video"),ht.forEach(p),$e.forEach(p),ce.forEach(p),ut.forEach(p),I=O(ie),h=d(ie,"SECTION",{class:!0});var mt=_(h);C=d(mt,"DIV",{class:!0});var dt=_(C);S=d(dt,"ARTICLE",{class:!0});var Ee=_(S);N=d(Ee,"H2",{class:!0});var _t=_(N);U=w(_t,"You own it."),_t.forEach(p),$=O(Ee),B=d(Ee,"P",{class:!0});var Ue=_(B);L=w(Ue,`We don't use, track, or keep what you create. What you make is yours. Our business model
					is subscription based and we keep an easy to read `),j=d(Ue,"A",{href:!0});var vt=_(j);J=w(vt,"terms of service"),vt.forEach(p),Z=w(Ue," agreement."),Ue.forEach(p),K=O(Ee),Y=d(Ee,"P",{class:!0});var Be=_(Y);x=w(Be,"We also respect your "),te=d(Be,"A",{href:!0});var gt=_(te);R=w(gt,"privacy"),gt.forEach(p),z=w(Be,`, regardless of the country you
					hail from.`),Be.forEach(p),Ee.forEach(p),dt.forEach(p),mt.forEach(p),q=O(ie),G=d(ie,"SECTION",{class:!0});var bt=_(G);Q=d(bt,"ARTICLE",{class:!0});var je=_(Q);ee=d(je,"H2",{class:!0});var yt=_(ee);ae=w(yt,"Two tiers: free or subscribe."),yt.forEach(p),Ne=O(je),le=d(je,"DIV",{class:!0});var Le=_(le);_e=d(Le,"DIV",{class:!0});var Et=_(_e);fe=d(Et,"IMG",{src:!0,alt:!0,class:!0}),Et.forEach(p),Ge=O(Le),se=d(Le,"DIV",{class:!0});var ue=_(se);re=d(ue,"P",{class:!0});var Ve=_(re);Je=w(Ve,`We are working on adding more power to Britelite. We limit everyone without a SpaceLab
						to `),ve=d(Ve,"SPAN",{class:!0});var kt=_(ve);Ye=w(kt,"3"),kt.forEach(p),ze=w(Ve," per day."),Ve.forEach(p),Fe=O(ue),ne=d(ue,"P",{class:!0});var Me=_(ne);Ke=w(Me,"If you subscribe to SpaceLab, you receive "),ge=d(Me,"SPAN",{class:!0});var wt=_(ge);Xe=w(wt,"12"),wt.forEach(p),Ze=w(Me," per day."),Me.forEach(p),xe=O(ue),be=d(ue,"P",{class:!0});var It=_(be);et=w(It,`To use Britelite, the only requirement is to create an account. Accounts are required so
						we can limit the use to humans only.`),It.forEach(p),tt=O(ue),oe=d(ue,"BUTTON",{});var Re=_(oe);ye=d(Re,"ION-ICON",{class:!0,name:!0}),_(ye).forEach(p),st=O(Re),Se=d(Re,"SPAN",{});var Ct=_(Se);at=w(Ct,"Create Account"),Ct.forEach(p),Re.forEach(p),ue.forEach(p),Le.forEach(p),je.forEach(p),bt.forEach(p),ie.forEach(p),this.h()},h(){v(a,"class","svelte-1kfxmea"),v(n,"class","svelte-1kfxmea"),We(f.src,y="https://3ee.s3.amazonaws.com/img/britelite_banner.png")||v(f,"src",y),v(f,"alt","a real cat being turned into a cartoon cat."),v(f,"class","svelte-1kfxmea"),W(A,"class","icon svelte-1kfxmea"),W(A,"name","videocam"),v(g,"class","svelte-1kfxmea"),v(t,"class","video svelte-1kfxmea"),v(s,"class","background svelte-1kfxmea"),v(N,"class","svelte-1kfxmea"),v(j,"href","/account/terms/"),v(B,"class","svelte-1kfxmea"),v(te,"href","/account/privacy"),v(Y,"class","svelte-1kfxmea"),v(S,"class","planets svelte-1kfxmea"),v(C,"class","image-wrap svelte-1kfxmea"),v(h,"class","background alternate svelte-1kfxmea"),v(ee,"class","svelte-1kfxmea"),We(fe.src,it="/potions.png")||v(fe,"src",it),v(fe,"alt","a potion bottle"),v(fe,"class","svelte-1kfxmea"),v(_e,"class","left svelte-1kfxmea"),v(ve,"class","highlight"),v(re,"class","svelte-1kfxmea"),v(ge,"class","highlight"),v(ne,"class","svelte-1kfxmea"),v(be,"class","svelte-1kfxmea"),W(ye,"class","icon svelte-1kfxmea"),W(ye,"name","rocket-sharp"),v(se,"class","right svelte-1kfxmea"),v(le,"class","column-container svelte-1kfxmea"),v(Q,"class","svelte-1kfxmea"),v(G,"class","background svelte-1kfxmea"),v(e,"class","container svelte-1kfxmea")},m(Te,ie){V(Te,e,ie),l(e,s),l(s,t),l(t,a),l(a,c),l(t,o),l(t,n),l(n,u),l(t,i),l(t,f),l(t,E),l(t,g),l(g,A),l(g,P),l(g,D),l(D,b),l(e,I),l(e,h),l(h,C),l(C,S),l(S,N),l(N,U),l(S,$),l(S,B),l(B,L),l(B,j),l(j,J),l(B,Z),l(S,K),l(S,Y),l(Y,x),l(Y,te),l(te,R),l(Y,z),l(e,q),l(e,G),l(G,Q),l(Q,ee),l(ee,ae),l(Q,Ne),l(Q,le),l(le,_e),l(_e,fe),l(le,Ge),l(le,se),l(se,re),l(re,Je),l(re,ve),l(ve,Ye),l(re,ze),l(se,Fe),l(se,ne),l(ne,Ke),l(ne,ge),l(ge,Xe),l(ne,Ze),l(se,xe),l(se,be),l(be,et),l(se,tt),l(se,oe),l(oe,ye),l(oe,st),l(oe,Se),l(Se,at),lt||(ct=Oe(oe,"click",r[0]),lt=!0)},p:X,i:X,o:X,d(Te){Te&&p(e),lt=!1,ct()}}}function fs(r){const e=qe();function s(){console.log("yatee"),e("onCreateAccount")}return[s]}class ps extends Ae{constructor(e){super(),De(this,e,fs,us,Pe,{})}}function hs(r){let e,s,t,a,c,o,n,u,i,f,y,E=He(r[0])+"",g,A,P,D,b,I,h,C,S,N,U,$=He(r[0])+"",B;return{c(){e=m("div"),s=m("article"),t=m("h4"),a=m("ion-icon"),c=k(" You're out of coins."),o=T(),n=m("p"),u=k("You'll receive "),i=m("span"),f=k(r[1]),y=k(" in "),g=k(E),A=k("."),P=T(),D=m("aside"),b=m("input"),I=T(),h=m("button"),C=m("ion-icon"),S=T(),N=m("span"),U=k("Wait "),B=k($),this.h()},l(L){e=d(L,"DIV",{class:!0});var j=_(e);s=d(j,"ARTICLE",{class:!0});var J=_(s);t=d(J,"H4",{class:!0});var Z=_(t);a=d(Z,"ION-ICON",{name:!0,class:!0}),_(a).forEach(p),c=w(Z," You're out of coins."),Z.forEach(p),o=O(J),n=d(J,"P",{class:!0});var K=_(n);u=w(K,"You'll receive "),i=d(K,"SPAN",{class:!0});var Y=_(i);f=w(Y,r[1]),Y.forEach(p),y=w(K," in "),g=w(K,E),A=w(K,"."),K.forEach(p),J.forEach(p),P=O(j),D=d(j,"ASIDE",{class:!0});var x=_(D);b=d(x,"INPUT",{style:!0,type:!0}),I=O(x),h=d(x,"BUTTON",{class:!0});var te=_(h);C=d(te,"ION-ICON",{class:!0,name:!0}),_(C).forEach(p),S=O(te),N=d(te,"SPAN",{});var R=_(N);U=w(R,"Wait "),B=w(R,$),R.forEach(p),te.forEach(p),x.forEach(p),j.forEach(p),this.h()},h(){W(a,"name","stop-circle"),W(a,"class","svelte-1cjhy41"),v(t,"class","highlight large supercharged svelte-1cjhy41"),v(i,"class","highlight"),v(n,"class","svelte-1cjhy41"),v(s,"class","main supercharged-container"),jt(b,"display","none"),v(b,"type","file"),W(C,"class","icon svelte-1cjhy41"),W(C,"name","alarm"),v(h,"class","alert"),h.disabled=!0,v(D,"class","aside aside-1"),v(e,"class","option-container")},m(L,j){V(L,e,j),l(e,s),l(s,t),l(t,a),l(t,c),l(s,o),l(s,n),l(n,u),l(n,i),l(i,f),l(n,y),l(n,g),l(n,A),l(e,P),l(e,D),l(D,b),l(D,I),l(D,h),l(h,C),l(h,S),l(h,N),l(N,U),l(N,B)},p(L,[j]){j&2&&F(f,L[1]),j&1&&E!==(E=He(L[0])+"")&&F(g,E),j&1&&$!==($=He(L[0])+"")&&F(B,$)},i:X,o:X,d(L){L&&p(e)}}}function He(r){let e=new Date(r);e.setHours(e.getHours()+24);let s=new Date;const t=e.getTime()-s.getTime();let a=Math.floor(t%864e5/36e5),c=Math.round(t%864e5%36e5/6e4);return a===0?`${c} minutes`:`${a} hours`}function ms(r,e,s){let{estimatedTime:t}=e,{dailyCoinAllowance:a=3}=e;return r.$$set=c=>{"estimatedTime"in c&&s(0,t=c.estimatedTime),"dailyCoinAllowance"in c&&s(1,a=c.dailyCoinAllowance)},[t,a]}class ds extends Ae{constructor(e){super(),De(this,e,ms,hs,Pe,{estimatedTime:0,dailyCoinAllowance:1})}}const{document:$t}=Gt;function _s(r){let e,s,t,a,c,o,n,u,i,f,y,E,g=r[2].coins+"",A,P,D,b,I;const h=[bs,gs],C=[];function S(N,U){return N[10]?0:1}return D=S(r),b=C[D]=h[D](r),{c(){e=m("section"),s=m("article"),t=m("h1"),a=k("Britelite"),c=T(),o=m("p"),n=m("strong"),u=k("Coins"),i=k(": "),f=m("ion-icon"),y=T(),E=m("span"),A=k(g),P=T(),b.c(),this.h()},l(N){e=d(N,"SECTION",{class:!0});var U=_(e);s=d(U,"ARTICLE",{class:!0});var $=_(s);t=d($,"H1",{});var B=_(t);a=w(B,"Britelite"),B.forEach(p),c=O($),o=d($,"P",{});var L=_(o);n=d(L,"STRONG",{});var j=_(n);u=w(j,"Coins"),j.forEach(p),i=w(L,": "),f=d(L,"ION-ICON",{class:!0,name:!0}),_(f).forEach(p),y=O(L),E=d(L,"SPAN",{class:!0});var J=_(E);A=w(J,g),J.forEach(p),L.forEach(p),P=O($),b.l($),$.forEach(p),U.forEach(p),this.h()},h(){W(f,"class","coin-icon svelte-lmxp64"),W(f,"name","radio-button-on"),v(E,"class","highlight"),v(s,"class","content"),v(e,"class","background")},m(N,U){V(N,e,U),l(e,s),l(s,t),l(t,a),l(s,c),l(s,o),l(o,n),l(n,u),l(o,i),l(o,f),l(o,y),l(o,E),l(E,A),l(s,P),C[D].m(s,null),I=!0},p(N,U){(!I||U&4)&&g!==(g=N[2].coins+"")&&F(A,g);let $=D;D=S(N),D===$?C[D].p(N,U):(Ie(),H(C[$],1,1,()=>{C[$]=null}),Ce(),b=C[D],b?b.p(N,U):(b=C[D]=h[D](N),b.c()),M(b,1),b.m(s,null))},i(N){I||(M(b),I=!0)},o(N){H(b),I=!1},d(N){N&&p(e),C[D].d()}}}function vs(r){let e,s;return e=new ps({}),e.$on("onCreateAccount",r[21]),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,a){me(e,t,a),s=!0},p:X,i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function gs(r){let e,s,t,a,c,o,n,u;function i(h,C){return typeof h[11]=="undefined"||h[11]===0?Es:ys}let f=i(r),y=f(r);const E=[ws,ks],g=[];function A(h,C){return h[2].coins>=Ds?0:1}s=A(r),t=g[s]=E[s](r);function P(h,C){if(h[0])return Cs;if(h[7])return Is}let D=P(r),b=D&&D(r),I=r[12]&&Ut(r);return n=new es({props:{briteliteQueues:r[1]}}),n.$on("onSelectImage",r[17]),{c(){y.c(),e=T(),t.c(),a=T(),b&&b.c(),c=T(),I&&I.c(),o=T(),pe(n.$$.fragment)},l(h){y.l(h),e=O(h),t.l(h),a=O(h),b&&b.l(h),c=O(h),I&&I.l(h),o=O(h),he(n.$$.fragment,h)},m(h,C){y.m(h,C),V(h,e,C),g[s].m(h,C),V(h,a,C),b&&b.m(h,C),V(h,c,C),I&&I.m(h,C),V(h,o,C),me(n,h,C),u=!0},p(h,C){f===(f=i(h))&&y?y.p(h,C):(y.d(1),y=f(h),y&&(y.c(),y.m(e.parentNode,e)));let S=s;s=A(h),s===S?g[s].p(h,C):(Ie(),H(g[S],1,1,()=>{g[S]=null}),Ce(),t=g[s],t?t.p(h,C):(t=g[s]=E[s](h),t.c()),M(t,1),t.m(a.parentNode,a)),D===(D=P(h))&&b?b.p(h,C):(b&&b.d(1),b=D&&D(h),b&&(b.c(),b.m(c.parentNode,c))),h[12]?I?(I.p(h,C),C&4096&&M(I,1)):(I=Ut(h),I.c(),M(I,1),I.m(o.parentNode,o)):I&&(Ie(),H(I,1,1,()=>{I=null}),Ce());const N={};C&2&&(N.briteliteQueues=h[1]),n.$set(N)},i(h){u||(M(t),M(I),M(n.$$.fragment,h),u=!0)},o(h){H(t),H(I),H(n.$$.fragment,h),u=!1},d(h){y.d(h),h&&p(e),g[s].d(h),h&&p(a),b&&b.d(h),h&&p(c),I&&I.d(h),h&&p(o),de(n,h)}}}function bs(r){let e,s;return e=new zt({}),e.$on("onPromptComplete",r[20]),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,a){me(e,t,a),s=!0},p:X,i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function ys(r){let e,s,t,a,c,o,n,u,i=r[11]!==1?"s":"",f,y;return{c(){e=m("p"),s=k("Hail "),t=m("span"),a=k(r[14]),c=k(`, you have
						`),o=m("span"),n=k(r[11]),u=k(`
						super charged avatar`),f=k(i),y=k("."),this.h()},l(E){e=d(E,"P",{});var g=_(e);s=w(g,"Hail "),t=d(g,"SPAN",{class:!0});var A=_(t);a=w(A,r[14]),A.forEach(p),c=w(g,`, you have
						`),o=d(g,"SPAN",{class:!0});var P=_(o);n=w(P,r[11]),P.forEach(p),u=w(g,`
						super charged avatar`),f=w(g,i),y=w(g,"."),g.forEach(p),this.h()},h(){v(t,"class","highlight accent"),v(o,"class","highlight")},m(E,g){V(E,e,g),l(e,s),l(e,t),l(t,a),l(e,c),l(e,o),l(o,n),l(e,u),l(e,f),l(e,y)},p(E,g){g&2048&&F(n,E[11]),g&2048&&i!==(i=E[11]!==1?"s":"")&&F(f,i)},d(E){E&&p(e)}}}function Es(r){let e,s,t,a,c;return{c(){e=m("p"),s=k("Hello "),t=m("span"),a=k(r[14]),c=k(`, you have no super charged
						avatars.`),this.h()},l(o){e=d(o,"P",{});var n=_(e);s=w(n,"Hello "),t=d(n,"SPAN",{class:!0});var u=_(t);a=w(u,r[14]),u.forEach(p),c=w(n,`, you have no super charged
						avatars.`),n.forEach(p),this.h()},h(){v(t,"class","highlight accent")},m(o,n){V(o,e,n),l(e,s),l(e,t),l(t,a),l(e,c)},p:X,d(o){o&&p(e)}}}function ks(r){let e,s;return e=new ds({props:{estimatedTime:r[2].lastCoinDailyDate,dailyCoinAllowance:r[15]}}),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,a){me(e,t,a),s=!0},p(t,a){const c={};a&4&&(c.estimatedTime=t[2].lastCoinDailyDate),e.$set(c)},i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function ws(r){let e,s;return e=new cs({props:{isImageUploading:r[4],promptComplete:r[5]}}),e.$on("onFileSelected",r[19]),e.$on("onViewAvatar",r[16]),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,a){me(e,t,a),s=!0},p(t,a){const c={};a&16&&(c.isImageUploading=t[4]),a&32&&(c.promptComplete=t[5]),e.$set(c)},i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function Is(r){let e,s,t,a,c,o,n,u,i;return{c(){e=m("p"),s=k(r[8]),t=k(" out of "),a=k(r[9]),c=k(" avatars"),o=T(),n=m("p"),u=m("ion-icon"),i=k("Estimated time: calculating..."),this.h()},l(f){e=d(f,"P",{class:!0});var y=_(e);s=w(y,r[8]),t=w(y," out of "),a=w(y,r[9]),c=w(y," avatars"),y.forEach(p),o=O(f),n=d(f,"P",{});var E=_(n);u=d(E,"ION-ICON",{class:!0,name:!0}),_(u).forEach(p),i=w(E,"Estimated time: calculating..."),E.forEach(p),this.h()},h(){v(e,"class","highlight large"),W(u,"class","icon svelte-lmxp64"),W(u,"name","cloud-upload")},m(f,y){V(f,e,y),l(e,s),l(e,t),l(e,a),l(e,c),V(f,o,y),V(f,n,y),l(n,u),l(n,i)},p(f,y){y&256&&F(s,f[8]),y&512&&F(a,f[9])},d(f){f&&p(e),f&&p(o),f&&p(n)}}}function Cs(r){let e,s,t,a,c,o,n,u,i,f=r[6].hours+"",y,E,g,A=Math.floor(r[6].minutes)+"",P,D;return{c(){e=m("p"),s=k(r[8]),t=k(" out of "),a=k(r[9]),c=k(" avatars"),o=T(),n=m("p"),u=k(`Your avatar is being processed. It will be ready in
						`),i=m("span"),y=k(f),E=k(` hours and
						`),g=m("span"),P=k(A),D=k(" minutes."),this.h()},l(b){e=d(b,"P",{class:!0});var I=_(e);s=w(I,r[8]),t=w(I," out of "),a=w(I,r[9]),c=w(I," avatars"),I.forEach(p),o=O(b),n=d(b,"P",{});var h=_(n);u=w(h,`Your avatar is being processed. It will be ready in
						`),i=d(h,"SPAN",{class:!0});var C=_(i);y=w(C,f),C.forEach(p),E=w(h,` hours and
						`),g=d(h,"SPAN",{class:!0});var S=_(g);P=w(S,A),S.forEach(p),D=w(h," minutes."),h.forEach(p),this.h()},h(){v(e,"class","highlight large"),v(i,"class","highlight"),v(g,"class","highlight")},m(b,I){V(b,e,I),l(e,s),l(e,t),l(e,a),l(e,c),V(b,o,I),V(b,n,I),l(n,u),l(n,i),l(i,y),l(n,E),l(n,g),l(g,P),l(n,D)},p(b,I){I&256&&F(s,b[8]),I&512&&F(a,b[9]),I&64&&f!==(f=b[6].hours+"")&&F(y,f),I&64&&A!==(A=Math.floor(b[6].minutes)+"")&&F(P,A)},d(b){b&&p(e),b&&p(o),b&&p(n)}}}function Ut(r){let e,s;return e=new rs({props:{intervalDuration:r[3],jobsQueued:r[7]}}),e.$on("onProgressComplete",r[18]),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,a){me(e,t,a),s=!0},p(t,a){const c={};a&8&&(c.intervalDuration=t[3]),a&128&&(c.jobsQueued=t[7]),e.$set(c)},i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function As(r){let e,s,t,a,c;const o=[vs,_s],n=[];function u(i,f){return typeof i[13]=="undefined"||i[13]===null||i[13]===""?0:1}return s=u(r),t=n[s]=o[s](r),{c(){e=T(),t.c(),a=we(),this.h()},l(i){qt('[data-svelte="svelte-qyyaak"]',$t.head).forEach(p),e=O(i),t.l(i),a=we(),this.h()},h(){$t.title="Britelite"},m(i,f){V(i,e,f),n[s].m(i,f),V(i,a,f),c=!0},p(i,[f]){t.p(i,f)},i(i){c||(M(t),c=!0)},o(i){H(t),c=!1},d(i){i&&p(e),n[s].d(i),i&&p(a)}}}const Ds=1,Ps=3,Ns=12;let Ss=1;function Ts(r,e,s){let t,a,c,o,n,u,i;ke.subscribe(R=>{s(2,i=R)});const f=i==null?void 0:i.token,y=i==null?void 0:i.username;let E=!1,g=0,A=6e4,P=[],D=!1,b=!1,I=!1,h=null,C=new FormData,S={},N=i.spaceLab?Ns:Ps,U={},$=!1;Bt(async()=>{if(typeof f=="undefined"||f===null||f==="")return()=>{};const R=15e3;async function z(){const ee=await(await fetch("https://3ee.dev/currency/get/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors"})).json();let ae=i;ae.coins=ee.coins,ae.lastCoinDailyDate=ee.lastCoinDailyDate,ke.set(ae)}const q=setInterval(B,R),G=setInterval(z,R);return B(),z(),()=>{clearInterval(q),clearInterval(G)}});async function B(){let z=await(await fetch("https://3ee.dev/britelite/status/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors"})).json();z.length!==P.length&&s(1,P=z);let q=[];for(let Q=0;Q<P.length;Q++)P[Q].status_type===0&&q.push(P[Q]);if(q.length>0){s(22,g=q.length),s(24,$=!1),s(0,E=!0);let Q=Math.abs(new Date(q[0].estimated_time)-new Date(q[0].created)),ee=Q,ae=ee/60/1e3;var G=ee/3600/1e3;s(6,U.hours=Math.floor(G),U),s(6,U.minutes=ae-60*U.hours,U);let Ne=Math.floor(Q/60/1e3);s(3,A=Ne*6e4),U.minutes<1&&(s(6,U.minutes=1,U),s(3,A=6e4))}else s(0,E=!1);typeof P!="undefined"&&P.length>0&&P.sort(function(Q,ee){return new Date(ee.updated)-new Date(Q.updated)})}const L=async()=>{rt("/account/britelite")},j=async()=>{s(23,D=!0)},J=async()=>{s(4,b=!0),document.body.scrollIntoView();const z=await(await fetch("https://3ee.dev/account/upload/",{method:"POST",headers:{Accept:"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+f},mode:"cors",body:C})).json();if(!z.success){let G=i;G.coins=0,G.lastCoinDailyDate=z.lastCoinDailyDate,ke.set(G);return}let q=i;q.coins=z.coins,q.lastCoinDailyDate=z.lastCoinDailyDate,q.profile.image=z.image,ke.set(q),s(4,b=!1),I&&typeof umami!="undefined"?umami.trackEvent("Supercharge",{success:!0}):!I&&typeof umami!="undefined"&&umami.trackEvent("Upload Avatar",{success:!0})};function Z(){rt("/britelite/library")}async function K(){B()}const Y=async(R,z)=>{h=R.detail.file,new FileReader().readAsDataURL(h),C.append("file",h),C.append("useDiffusion",!0);let G=i;G.profile.useDiffusion=!0,ke.set(G),j()},x=async R=>{s(23,D=!1),S=R.detail,C.append("prompt",JSON.stringify(S)),s(5,I=!0),s(24,$=!0),J()};function te(){rt("/account/create")}return r.$$.update=()=>{r.$$.dirty&1&&s(12,t=E),r.$$.dirty&2&&s(11,a=P.filter(R=>R.guid.length>0).length),r.$$.dirty&8388608&&s(10,c=D),r.$$.dirty&4194304&&s(9,o=g),r.$$.dirty&16777216&&s(7,u=$)},s(8,n=Ss),[E,P,i,A,b,I,U,u,n,o,c,a,t,f,y,N,L,Z,K,Y,x,te,g,D,$]}class Rs extends Ae{constructor(e){super(),De(this,e,Ts,As,Pe,{})}}export{Rs as default};

import{S as Ae,i as De,s as Pe,e as m,c as d,a as _,d as f,b as v,g as z,q as W,l as we,n as Ie,o as R,p as Ce,N as Vt,_ as Re,t as k,k as T,h as w,m as O,H as Q,I as a,j as K,E as X,w as pe,x as he,y as me,B as de,R as He,J as Te,L as ot,K as At,a0 as Lt,C as Dt,a2 as zt,a3 as Wt,a4 as Ht,G as Mt,v as Bt,f as jt,a1 as Rt,X as Qt,a5 as qt}from"../../chunks/index-8ca01e64.js";import{g as lt}from"../../chunks/navigation-0e6511d1.js";import{a as ke}from"../../chunks/accountStore-c3ff6133.js";import{c as Pt}from"../../chunks/briteliteStore-ee389409.js";import{S as Gt}from"../../chunks/Saos-3434f03e.js";import{w as Jt}from"../../chunks/index-12b3acf3.js";import{P as Yt}from"../../chunks/Prompts-57898cd4.js";import"../../chunks/singletons-d1fb5791.js";function Nt(l,e,s){const t=l.slice();return t[5]=e[s],t}function St(l){let e,s,t=l[0],r=[];for(let i=0;i<t.length;i+=1)r[i]=Tt(Nt(l,t,i));const c=i=>R(r[i],1,1,()=>{r[i]=null});return{c(){e=m("ul");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=d(i,"UL",{class:!0});var o=_(e);for(let u=0;u<r.length;u+=1)r[u].l(o);o.forEach(f),this.h()},h(){v(e,"class","svelte-smzf7b")},m(i,o){z(i,e,o);for(let u=0;u<r.length;u+=1)r[u].m(e,null);s=!0},p(i,o){if(o&3){t=i[0];let u;for(u=0;u<t.length;u+=1){const n=Nt(i,t,u);r[u]?(r[u].p(n,o),W(r[u],1)):(r[u]=Tt(n),r[u].c(),W(r[u],1),r[u].m(e,null))}for(Ie(),u=t.length;u<r.length;u+=1)c(u);Ce()}},i(i){if(!s){for(let o=0;o<t.length;o+=1)W(r[o]);s=!0}},o(i){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)R(r[o]);s=!1},d(i){i&&f(e),Vt(r,i)}}}function Ft(l){let e,s,t,r=Me(l[5].updated)+"",c,i,o,u,n,p,E,I;return{c(){e=m("li"),s=m("h3"),t=m("a"),c=k(r),i=T(),o=m("div"),u=m("ion-icon"),n=T(),p=m("p"),E=k("Coming Soon, please wait."),I=T(),this.h()},l(g){e=d(g,"LI",{class:!0});var D=_(e);s=d(D,"H3",{class:!0});var C=_(s);t=d(C,"A",{href:!0});var A=_(t);c=w(A,r),A.forEach(f),C.forEach(f),i=O(D),o=d(D,"DIV",{class:!0});var y=_(o);u=d(y,"ION-ICON",{class:!0,name:!0}),_(u).forEach(f),n=O(y),p=d(y,"P",{});var b=_(p);E=w(b,"Coming Soon, please wait."),b.forEach(f),y.forEach(f),I=O(D),D.forEach(f),this.h()},h(){v(t,"href",""),v(s,"class","svelte-smzf7b"),Q(u,"class","icon svelte-smzf7b"),Q(u,"name","alarm-sharp"),v(o,"class","coming-soon svelte-smzf7b"),v(e,"class","svelte-smzf7b")},m(g,D){z(g,e,D),a(e,s),a(s,t),a(t,c),a(e,i),a(e,o),a(o,u),a(o,n),a(o,p),a(p,E),a(e,I)},p(g,D){D&1&&r!==(r=Me(g[5].updated)+"")&&K(c,r)},i:X,o:X,d(g){g&&f(e)}}}function Kt(l){let e,s;return e=new Gt({props:{animation:"fade-in 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both",$$slots:{default:[Xt]},$$scope:{ctx:l}}}),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),s=!0},p(t,r){const c={};r&257&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function Xt(l){let e,s,t,r,c,i,o,u,n,p,E,I,g,D=Me(l[5].updated)+"",C,A,y,b,h=l[5].output_images_diffusion_status.length+"",P,U,$,V;return{c(){e=m("li"),s=m("div"),t=m("picture"),r=m("source"),i=T(),o=m("img"),n=T(),p=m("div"),E=m("div"),I=m("p"),g=m("a"),C=k(D),A=T(),y=m("p"),b=k("Total "),P=k(h),U=T(),this.h()},l(N){e=d(N,"LI",{class:!0});var S=_(e);s=d(S,"DIV",{class:!0});var B=_(s);t=d(B,"PICTURE",{});var j=_(t);r=d(j,"SOURCE",{media:!0,srcset:!0}),i=O(j),o=d(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach(f),B.forEach(f),n=O(S),p=d(S,"DIV",{class:!0});var F=_(p);E=d(F,"DIV",{class:!0});var M=_(E);I=d(M,"P",{class:!0});var J=_(I);g=d(J,"A",{href:!0});var q=_(g);C=w(q,D),q.forEach(f),J.forEach(f),A=O(M),y=d(M,"P",{class:!0});var Z=_(y);b=w(Z,"Total "),P=w(Z,h),Z.forEach(f),M.forEach(f),F.forEach(f),S.forEach(f),U=O(N),this.h()},h(){v(r,"media","(min-width: 100px) and (max-width: 896.98px)"),v(r,"srcset",c=l[5].output_images_diffusion_status[1]),He(o.src,u=l[5].output_images_diffusion_status[0])||v(o,"src",u),v(o,"alt","Britelite Super Charged Avatar"),v(o,"class","svelte-smzf7b"),v(s,"class","container-item"),v(g,"href",""),v(I,"class","svelte-smzf7b"),v(y,"class","svelte-smzf7b"),v(E,"class","details svelte-smzf7b"),v(p,"class","description svelte-smzf7b"),v(e,"class","svelte-smzf7b")},m(N,S){z(N,e,S),a(e,s),a(s,t),a(t,r),a(t,i),a(t,o),a(e,n),a(e,p),a(p,E),a(E,I),a(I,g),a(g,C),a(E,A),a(E,y),a(y,b),a(y,P),z(N,U,S),$||(V=[Te(g,"click",ot(function(){At(l[1](l[5]))&&l[1](l[5]).apply(this,arguments)})),Te(e,"click",ot(function(){At(l[1](l[5]))&&l[1](l[5]).apply(this,arguments)}))],$=!0)},p(N,S){l=N,S&1&&c!==(c=l[5].output_images_diffusion_status[1])&&v(r,"srcset",c),S&1&&!He(o.src,u=l[5].output_images_diffusion_status[0])&&v(o,"src",u),S&1&&D!==(D=Me(l[5].updated)+"")&&K(C,D),S&1&&h!==(h=l[5].output_images_diffusion_status.length+"")&&K(P,h)},d(N){N&&f(e),N&&f(U),$=!1,Lt(V)}}}function Tt(l){let e,s,t,r;const c=[Kt,Ft],i=[];function o(u,n){var p;return typeof((p=u[5])==null?void 0:p.output_images_diffusion_status[0])!="undefined"&&u[5].output_images_diffusion_status[0].length>0?0:1}return e=o(l),s=i[e]=c[e](l),{c(){s.c(),t=we()},l(u){s.l(u),t=we()},m(u,n){i[e].m(u,n),z(u,t,n),r=!0},p(u,n){let p=e;e=o(u),e===p?i[e].p(u,n):(Ie(),R(i[p],1,1,()=>{i[p]=null}),Ce(),s=i[e],s?s.p(u,n):(s=i[e]=c[e](u),s.c()),W(s,1),s.m(t.parentNode,t))},i(u){r||(W(s),r=!0)},o(u){R(s),r=!1},d(u){i[e].d(u),u&&f(t)}}}function Zt(l){let e,s,t=l[0].length>0&&St(l);return{c(){t&&t.c(),e=we()},l(r){t&&t.l(r),e=we()},m(r,c){t&&t.m(r,c),z(r,e,c),s=!0},p(r,[c]){r[0].length>0?t?(t.p(r,c),c&1&&W(t,1)):(t=St(r),t.c(),W(t,1),t.m(e.parentNode,e)):t&&(Ie(),R(t,1,1,()=>{t=null}),Ce())},i(r){s||(W(t),s=!0)},o(r){R(t),s=!1},d(r){t&&t.d(r),r&&f(e)}}}function Me(l){return typeof l!="undefined"?new Date(l).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null}function xt(l,e,s){Pt.subscribe(i=>{});let{briteliteQueues:t=[]}=e;ke.subscribe(i=>{});const r=Re();function c(i){Pt.update(o=>i),r("onSelectImage")}return l.$$set=i=>{"briteliteQueues"in i&&s(0,t=i.briteliteQueues)},[t,c]}class es extends Ae{constructor(e){super(),De(this,e,xt,Zt,Pe,{briteliteQueues:0})}}function ts(l){const e=l-1;return e*e*e+1}function Ot(l){return Object.prototype.toString.call(l)==="[object Date]"}function nt(l,e){if(l===e||l!==l)return()=>l;const s=typeof l;if(s!==typeof e||Array.isArray(l)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(l)){const t=e.map((r,c)=>nt(l[c],r));return r=>t.map(c=>c(r))}if(s==="object"){if(!l||!e)throw new Error("Object cannot be null");if(Ot(l)&&Ot(e)){l=l.getTime(),e=e.getTime();const c=e-l;return i=>new Date(l+i*c)}const t=Object.keys(e),r={};return t.forEach(c=>{r[c]=nt(l[c],e[c])}),c=>{const i={};return t.forEach(o=>{i[o]=r[o](c)}),i}}if(s==="number"){const t=e-l;return r=>l+r*t}throw new Error(`Cannot interpolate ${s} values`)}function ss(l,e={}){const s=Jt(l);let t,r=l;function c(i,o){if(l==null)return s.set(l=i),Promise.resolve();r=i;let u=t,n=!1,{delay:p=0,duration:E=400,easing:I=Ht,interpolate:g=nt}=Dt(Dt({},e),o);if(E===0)return u&&(u.abort(),u=null),s.set(l=r),Promise.resolve();const D=zt()+p;let C;return t=Wt(A=>{if(A<D)return!0;n||(C=g(l,i),typeof E=="function"&&(E=E(l,i)),n=!0),u&&(u.abort(),u=null);const y=A-D;return y>E?(s.set(l=i),!1):(s.set(l=C(I(y/E))),!0)}),t.promise}return{set:c,update:(i,o)=>c(i(r,l),o),subscribe:s.subscribe}}function as(l){let e,s,t,r=l[0]/6e4+"",c,i,o,u;return{c(){e=m("p"),s=m("ion-icon"),t=k("Estimated time: "),c=k(r),i=k(" minutes"),o=T(),u=m("progress"),this.h()},l(n){e=d(n,"P",{});var p=_(e);s=d(p,"ION-ICON",{class:!0,name:!0}),_(s).forEach(f),t=w(p,"Estimated time: "),c=w(p,r),i=w(p," minutes"),p.forEach(f),o=O(n),u=d(n,"PROGRESS",{class:!0}),_(u).forEach(f),this.h()},h(){Q(s,"class","icon svelte-1y90m1"),Q(s,"name","alarm-sharp"),u.value=l[1],v(u,"class","svelte-1y90m1")},m(n,p){z(n,e,p),a(e,s),a(e,t),a(e,c),a(e,i),z(n,o,p),z(n,u,p)},p(n,[p]){p&1&&r!==(r=n[0]/6e4+"")&&K(c,r),p&2&&(u.value=n[1])},i:X,o:X,d(n){n&&f(e),n&&f(o),n&&f(u)}}}function rs(l,e,s){let t;const r=Re();let{intervalDuration:c=6e4}=e,i=0,o=ss(0,{duration:1e3,easing:ts,max:c});Mt(l,o,n=>s(1,t=n)),Bt(async()=>{async function n(){i+=1e3/c,o.set(i),i>=1&&(clearInterval(p),r("onProgressComplete"))}const p=setInterval(n,1e3);return()=>{clearInterval(p)}});const u=async n=>{r("onProgressComplete")};return l.$$set=n=>{"intervalDuration"in n&&s(0,c=n.intervalDuration)},l.$$.update=()=>{l.$$.dirty&1&&o.subscribe(n=>{n===c&&u()})},[c,t,o]}class ls extends Ae{constructor(e){super(),De(this,e,rs,as,Pe,{intervalDuration:0})}}function os(l){let e,s,t,r,c,i,o;return{c(){e=m("button"),s=m("ion-icon"),t=T(),r=m("span"),c=k("Upload"),this.h()},l(u){e=d(u,"BUTTON",{});var n=_(e);s=d(n,"ION-ICON",{class:!0,name:!0}),_(s).forEach(f),t=O(n),r=d(n,"SPAN",{});var p=_(r);c=w(p,"Upload"),p.forEach(f),n.forEach(f),this.h()},h(){Q(s,"class","icon svelte-1o02v9h"),Q(s,"name","color-palette-sharp")},m(u,n){z(u,e,n),a(e,s),a(e,t),a(e,r),a(r,c),i||(o=Te(e,"click",ot(l[2])),i=!0)},p:X,d(u){u&&f(e),i=!1,o()}}}function ns(l){let e,s,t,r,c,i,o,u,n,p,E,I,g,D,C,A,y;function b(U,$){return os}let P=b()(l);return{c(){e=m("div"),s=m("article"),t=m("h4"),r=m("ion-icon"),c=k(" Super Charged Avatar"),i=T(),o=m("p"),u=k("Upload your avatar. Recommended size is 512x512 pixels."),n=T(),p=m("p"),E=k("1 coin will be consumed when completed."),I=T(),g=m("aside"),D=m("input"),C=T(),P.c(),this.h()},l(U){e=d(U,"DIV",{class:!0});var $=_(e);s=d($,"ARTICLE",{class:!0});var V=_(s);t=d(V,"H4",{class:!0});var N=_(t);r=d(N,"ION-ICON",{name:!0,class:!0}),_(r).forEach(f),c=w(N," Super Charged Avatar"),N.forEach(f),i=O(V),o=d(V,"P",{class:!0});var S=_(o);u=w(S,"Upload your avatar. Recommended size is 512x512 pixels."),S.forEach(f),n=O(V),p=d(V,"P",{class:!0});var B=_(p);E=w(B,"1 coin will be consumed when completed."),B.forEach(f),V.forEach(f),I=O($),g=d($,"ASIDE",{class:!0});var j=_(g);D=d(j,"INPUT",{style:!0,type:!0,accept:!0}),C=O(j),P.l(j),j.forEach(f),$.forEach(f),this.h()},h(){Q(r,"name","image"),Q(r,"class","svelte-1o02v9h"),v(t,"class","highlight large supercharged svelte-1o02v9h"),v(o,"class","svelte-1o02v9h"),v(p,"class","svelte-1o02v9h"),v(s,"class","main supercharged-container svelte-1o02v9h"),jt(D,"display","none"),v(D,"type","file"),v(D,"accept",".jpg, .jpeg, .png, .webp, .gif"),v(g,"class","aside aside-1"),v(e,"class","option-container")},m(U,$){z(U,e,$),a(e,s),a(s,t),a(t,r),a(t,c),a(s,i),a(s,o),a(o,u),a(s,n),a(s,p),a(p,E),a(e,I),a(e,g),a(g,D),l[7](D),a(g,C),P.m(g,null),A||(y=Te(D,"change",l[6]),A=!0)},p(U,[$]){P.p(U,$)},i:X,o:X,d(U){U&&f(e),l[7](null),P.d(),A=!1,y()}}}function is(l,e,s){let{isImageUploading:t=!1}=e,{useDiffusion:r=!1}=e,c;const i=Re(),o=async I=>{c.click()},u=async I=>{i("onViewAvatar")},n=async I=>{i("onFileSelected",{file:I.target.files[0]})},p=I=>n(I);function E(I){Rt[I?"unshift":"push"](()=>{c=I,s(1,c)})}return l.$$set=I=>{"isImageUploading"in I&&s(0,t=I.isImageUploading),"useDiffusion"in I&&s(5,r=I.useDiffusion)},[t,c,o,u,n,r,p,E]}class cs extends Ae{constructor(e){super(),De(this,e,is,ns,Pe,{isImageUploading:0,useDiffusion:5})}}function us(l){let e,s,t,r,c,i,o,u,n,p,E,I,g,D,C,A,y,b,h,P,U,$,V,N,S,B,j,F,M,J,q,Z,x,H,G,ee,L,Y,se,ae,Qe,re,_e,fe,it,qe,te,le,Ge,ve,Je,Ye,Fe,oe,Ke,ge,Xe,Ze,xe,ye,et,tt,ne,be,st,Ne,at,rt,ct;return{c(){e=m("div"),s=m("section"),t=m("article"),r=m("h2"),c=k("Britelite is the avatar super charger."),i=T(),o=m("p"),u=k("Put an image of yourself through the Britelite and give it a super charge."),n=T(),p=m("img"),I=T(),g=m("button"),D=m("ion-icon"),C=T(),A=m("span"),y=k("Watch Video"),b=T(),h=m("section"),P=m("div"),U=m("article"),$=m("h2"),V=k("You own it."),N=T(),S=m("p"),B=k(`We don't use, track, or keep what you create. What you make is yours. Our business model
					is subscription based and we keep an easy to read `),j=m("a"),F=k("terms of service"),M=k(" agreement."),J=T(),q=m("p"),Z=k("We also respect your "),x=m("a"),H=k("privacy"),G=k(`, regardless of the country you
					hail from.`),ee=T(),L=m("section"),Y=m("article"),se=m("h2"),ae=k("Two tiers: free or subscribe."),Qe=T(),re=m("div"),_e=m("div"),fe=m("img"),qe=T(),te=m("div"),le=m("p"),Ge=k(`We are working on adding more power to Britelite. We limit everyone without a SpaceLab
						to `),ve=m("span"),Je=k("3"),Ye=k(" per day."),Fe=T(),oe=m("p"),Ke=k("If you subscribe to SpaceLab, you receive "),ge=m("span"),Xe=k("12"),Ze=k(" per day."),xe=T(),ye=m("p"),et=k(`To use Britelite, the only requirement is to create an account. Accounts are required so
						we can limit the use to humans only.`),tt=T(),ne=m("button"),be=m("ion-icon"),st=T(),Ne=m("span"),at=k("Create Account"),this.h()},l(Se){e=d(Se,"DIV",{class:!0});var ie=_(e);s=d(ie,"SECTION",{class:!0});var ut=_(s);t=d(ut,"ARTICLE",{class:!0});var ce=_(t);r=d(ce,"H2",{class:!0});var ft=_(r);c=w(ft,"Britelite is the avatar super charger."),ft.forEach(f),i=O(ce),o=d(ce,"P",{class:!0});var pt=_(o);u=w(pt,"Put an image of yourself through the Britelite and give it a super charge."),pt.forEach(f),n=O(ce),p=d(ce,"IMG",{src:!0,alt:!0,class:!0}),I=O(ce),g=d(ce,"BUTTON",{class:!0});var Oe=_(g);D=d(Oe,"ION-ICON",{class:!0,name:!0}),_(D).forEach(f),C=O(Oe),A=d(Oe,"SPAN",{});var ht=_(A);y=w(ht,"Watch Video"),ht.forEach(f),Oe.forEach(f),ce.forEach(f),ut.forEach(f),b=O(ie),h=d(ie,"SECTION",{class:!0});var mt=_(h);P=d(mt,"DIV",{class:!0});var dt=_(P);U=d(dt,"ARTICLE",{class:!0});var Ee=_(U);$=d(Ee,"H2",{class:!0});var _t=_($);V=w(_t,"You own it."),_t.forEach(f),N=O(Ee),S=d(Ee,"P",{class:!0});var Ue=_(S);B=w(Ue,`We don't use, track, or keep what you create. What you make is yours. Our business model
					is subscription based and we keep an easy to read `),j=d(Ue,"A",{href:!0});var vt=_(j);F=w(vt,"terms of service"),vt.forEach(f),M=w(Ue," agreement."),Ue.forEach(f),J=O(Ee),q=d(Ee,"P",{class:!0});var $e=_(q);Z=w($e,"We also respect your "),x=d($e,"A",{href:!0});var gt=_(x);H=w(gt,"privacy"),gt.forEach(f),G=w($e,`, regardless of the country you
					hail from.`),$e.forEach(f),Ee.forEach(f),dt.forEach(f),mt.forEach(f),ee=O(ie),L=d(ie,"SECTION",{class:!0});var yt=_(L);Y=d(yt,"ARTICLE",{class:!0});var Be=_(Y);se=d(Be,"H2",{class:!0});var bt=_(se);ae=w(bt,"Two tiers: free or subscribe."),bt.forEach(f),Qe=O(Be),re=d(Be,"DIV",{class:!0});var je=_(re);_e=d(je,"DIV",{class:!0});var Et=_(_e);fe=d(Et,"IMG",{src:!0,alt:!0,class:!0}),Et.forEach(f),qe=O(je),te=d(je,"DIV",{class:!0});var ue=_(te);le=d(ue,"P",{class:!0});var Ve=_(le);Ge=w(Ve,`We are working on adding more power to Britelite. We limit everyone without a SpaceLab
						to `),ve=d(Ve,"SPAN",{class:!0});var kt=_(ve);Je=w(kt,"3"),kt.forEach(f),Ye=w(Ve," per day."),Ve.forEach(f),Fe=O(ue),oe=d(ue,"P",{class:!0});var Le=_(oe);Ke=w(Le,"If you subscribe to SpaceLab, you receive "),ge=d(Le,"SPAN",{class:!0});var wt=_(ge);Xe=w(wt,"12"),wt.forEach(f),Ze=w(Le," per day."),Le.forEach(f),xe=O(ue),ye=d(ue,"P",{class:!0});var It=_(ye);et=w(It,`To use Britelite, the only requirement is to create an account. Accounts are required so
						we can limit the use to humans only.`),It.forEach(f),tt=O(ue),ne=d(ue,"BUTTON",{});var ze=_(ne);be=d(ze,"ION-ICON",{class:!0,name:!0}),_(be).forEach(f),st=O(ze),Ne=d(ze,"SPAN",{});var Ct=_(Ne);at=w(Ct,"Create Account"),Ct.forEach(f),ze.forEach(f),ue.forEach(f),je.forEach(f),Be.forEach(f),yt.forEach(f),ie.forEach(f),this.h()},h(){v(r,"class","svelte-1kfxmea"),v(o,"class","svelte-1kfxmea"),He(p.src,E="https://3ee.s3.amazonaws.com/img/britelite_banner.png")||v(p,"src",E),v(p,"alt","a real cat being turned into a cartoon cat."),v(p,"class","svelte-1kfxmea"),Q(D,"class","icon svelte-1kfxmea"),Q(D,"name","videocam"),v(g,"class","svelte-1kfxmea"),v(t,"class","video svelte-1kfxmea"),v(s,"class","background svelte-1kfxmea"),v($,"class","svelte-1kfxmea"),v(j,"href","/account/terms/"),v(S,"class","svelte-1kfxmea"),v(x,"href","/account/privacy"),v(q,"class","svelte-1kfxmea"),v(U,"class","planets svelte-1kfxmea"),v(P,"class","image-wrap svelte-1kfxmea"),v(h,"class","background alternate svelte-1kfxmea"),v(se,"class","svelte-1kfxmea"),He(fe.src,it="/potions.png")||v(fe,"src",it),v(fe,"alt","a potion bottle"),v(fe,"class","svelte-1kfxmea"),v(_e,"class","left svelte-1kfxmea"),v(ve,"class","highlight"),v(le,"class","svelte-1kfxmea"),v(ge,"class","highlight"),v(oe,"class","svelte-1kfxmea"),v(ye,"class","svelte-1kfxmea"),Q(be,"class","icon svelte-1kfxmea"),Q(be,"name","rocket-sharp"),v(te,"class","right svelte-1kfxmea"),v(re,"class","column-container svelte-1kfxmea"),v(Y,"class","svelte-1kfxmea"),v(L,"class","background svelte-1kfxmea"),v(e,"class","container svelte-1kfxmea")},m(Se,ie){z(Se,e,ie),a(e,s),a(s,t),a(t,r),a(r,c),a(t,i),a(t,o),a(o,u),a(t,n),a(t,p),a(t,I),a(t,g),a(g,D),a(g,C),a(g,A),a(A,y),a(e,b),a(e,h),a(h,P),a(P,U),a(U,$),a($,V),a(U,N),a(U,S),a(S,B),a(S,j),a(j,F),a(S,M),a(U,J),a(U,q),a(q,Z),a(q,x),a(x,H),a(q,G),a(e,ee),a(e,L),a(L,Y),a(Y,se),a(se,ae),a(Y,Qe),a(Y,re),a(re,_e),a(_e,fe),a(re,qe),a(re,te),a(te,le),a(le,Ge),a(le,ve),a(ve,Je),a(le,Ye),a(te,Fe),a(te,oe),a(oe,Ke),a(oe,ge),a(ge,Xe),a(oe,Ze),a(te,xe),a(te,ye),a(ye,et),a(te,tt),a(te,ne),a(ne,be),a(ne,st),a(ne,Ne),a(Ne,at),rt||(ct=Te(ne,"click",l[0]),rt=!0)},p:X,i:X,o:X,d(Se){Se&&f(e),rt=!1,ct()}}}function fs(l){const e=Re();function s(){console.log("yatee"),e("onCreateAccount")}return[s]}class ps extends Ae{constructor(e){super(),De(this,e,fs,us,Pe,{})}}function hs(l){let e,s,t,r,c,i,o,u,n,p,E,I=We(l[0])+"",g,D,C,A,y,b,h,P,U,$,V,N=We(l[0])+"",S;return{c(){e=m("div"),s=m("article"),t=m("h4"),r=m("ion-icon"),c=k(" You're out of coins."),i=T(),o=m("p"),u=k("You'll receive "),n=m("span"),p=k(l[1]),E=k(" in "),g=k(I),D=k("."),C=T(),A=m("aside"),y=m("input"),b=T(),h=m("button"),P=m("ion-icon"),U=T(),$=m("span"),V=k("Wait "),S=k(N),this.h()},l(B){e=d(B,"DIV",{class:!0});var j=_(e);s=d(j,"ARTICLE",{class:!0});var F=_(s);t=d(F,"H4",{class:!0});var M=_(t);r=d(M,"ION-ICON",{name:!0,class:!0}),_(r).forEach(f),c=w(M," You're out of coins."),M.forEach(f),i=O(F),o=d(F,"P",{class:!0});var J=_(o);u=w(J,"You'll receive "),n=d(J,"SPAN",{class:!0});var q=_(n);p=w(q,l[1]),q.forEach(f),E=w(J," in "),g=w(J,I),D=w(J,"."),J.forEach(f),F.forEach(f),C=O(j),A=d(j,"ASIDE",{class:!0});var Z=_(A);y=d(Z,"INPUT",{style:!0,type:!0}),b=O(Z),h=d(Z,"BUTTON",{class:!0});var x=_(h);P=d(x,"ION-ICON",{class:!0,name:!0}),_(P).forEach(f),U=O(x),$=d(x,"SPAN",{});var H=_($);V=w(H,"Wait "),S=w(H,N),H.forEach(f),x.forEach(f),Z.forEach(f),j.forEach(f),this.h()},h(){Q(r,"name","stop-circle"),Q(r,"class","svelte-1cjhy41"),v(t,"class","highlight large supercharged svelte-1cjhy41"),v(n,"class","highlight"),v(o,"class","svelte-1cjhy41"),v(s,"class","main supercharged-container"),jt(y,"display","none"),v(y,"type","file"),Q(P,"class","icon svelte-1cjhy41"),Q(P,"name","alarm"),v(h,"class","alert"),h.disabled=!0,v(A,"class","aside aside-1"),v(e,"class","option-container")},m(B,j){z(B,e,j),a(e,s),a(s,t),a(t,r),a(t,c),a(s,i),a(s,o),a(o,u),a(o,n),a(n,p),a(o,E),a(o,g),a(o,D),a(e,C),a(e,A),a(A,y),a(A,b),a(A,h),a(h,P),a(h,U),a(h,$),a($,V),a($,S)},p(B,[j]){j&2&&K(p,B[1]),j&1&&I!==(I=We(B[0])+"")&&K(g,I),j&1&&N!==(N=We(B[0])+"")&&K(S,N)},i:X,o:X,d(B){B&&f(e)}}}function We(l){let e=new Date(l);e.setHours(e.getHours()+24);let s=new Date;const t=e.getTime()-s.getTime();let r=Math.floor(t%864e5/36e5),c=Math.round(t%864e5%36e5/6e4);return r===0?`${c} minutes`:`${r} hours`}function ms(l,e,s){let{estimatedTime:t}=e,{dailyCoinAllowance:r=3}=e;return l.$$set=c=>{"estimatedTime"in c&&s(0,t=c.estimatedTime),"dailyCoinAllowance"in c&&s(1,r=c.dailyCoinAllowance)},[t,r]}class ds extends Ae{constructor(e){super(),De(this,e,ms,hs,Pe,{estimatedTime:0,dailyCoinAllowance:1})}}const{document:Ut}=qt;function _s(l){let e,s,t,r,c,i,o,u,n,p,E,I,g,D,C=l[2].coins+"",A,y,b,h,P;const U=[ys,gs],$=[];function V(N,S){return N[10]?0:1}return b=V(l),h=$[b]=U[b](l),{c(){e=m("section"),s=m("article"),t=m("h1"),r=k("Britelite"),c=T(),i=m("h3"),o=k("Super Charge your Avatar"),u=T(),n=m("p"),p=m("strong"),E=k("Coins"),I=k(": "),g=m("ion-icon"),D=m("span"),A=k(C),y=T(),h.c(),this.h()},l(N){e=d(N,"SECTION",{class:!0});var S=_(e);s=d(S,"ARTICLE",{class:!0});var B=_(s);t=d(B,"H1",{});var j=_(t);r=w(j,"Britelite"),j.forEach(f),c=O(B),i=d(B,"H3",{class:!0});var F=_(i);o=w(F,"Super Charge your Avatar"),F.forEach(f),u=O(B),n=d(B,"P",{});var M=_(n);p=d(M,"STRONG",{});var J=_(p);E=w(J,"Coins"),J.forEach(f),I=w(M,": "),g=d(M,"ION-ICON",{class:!0,name:!0}),_(g).forEach(f),D=d(M,"SPAN",{class:!0});var q=_(D);A=w(q,C),q.forEach(f),M.forEach(f),y=O(B),h.l(B),B.forEach(f),S.forEach(f),this.h()},h(){v(i,"class","svelte-lmxp64"),Q(g,"class","coin-icon svelte-lmxp64"),Q(g,"name","radio-button-on"),v(D,"class","highlight"),v(s,"class","content"),v(e,"class","background")},m(N,S){z(N,e,S),a(e,s),a(s,t),a(t,r),a(s,c),a(s,i),a(i,o),a(s,u),a(s,n),a(n,p),a(p,E),a(n,I),a(n,g),a(n,D),a(D,A),a(s,y),$[b].m(s,null),P=!0},p(N,S){(!P||S&4)&&C!==(C=N[2].coins+"")&&K(A,C);let B=b;b=V(N),b===B?$[b].p(N,S):(Ie(),R($[B],1,1,()=>{$[B]=null}),Ce(),h=$[b],h?h.p(N,S):(h=$[b]=U[b](N),h.c()),W(h,1),h.m(s,null))},i(N){P||(W(h),P=!0)},o(N){R(h),P=!1},d(N){N&&f(e),$[b].d()}}}function vs(l){let e,s;return e=new ps({}),e.$on("onCreateAccount",l[21]),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),s=!0},p:X,i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function gs(l){let e,s,t,r,c,i,o,u;function n(h,P){return typeof h[11]=="undefined"||h[11]===0?Es:bs}let p=n(l),E=p(l);const I=[ws,ks],g=[];function D(h,P){return h[2].coins>=Ds?0:1}s=D(l),t=g[s]=I[s](l);function C(h,P){if(h[0])return Cs;if(h[7])return Is}let A=C(l),y=A&&A(l),b=l[12]&&$t(l);return o=new es({props:{briteliteQueues:l[1]}}),o.$on("onSelectImage",l[17]),{c(){E.c(),e=T(),t.c(),r=T(),y&&y.c(),c=T(),b&&b.c(),i=T(),pe(o.$$.fragment)},l(h){E.l(h),e=O(h),t.l(h),r=O(h),y&&y.l(h),c=O(h),b&&b.l(h),i=O(h),he(o.$$.fragment,h)},m(h,P){E.m(h,P),z(h,e,P),g[s].m(h,P),z(h,r,P),y&&y.m(h,P),z(h,c,P),b&&b.m(h,P),z(h,i,P),me(o,h,P),u=!0},p(h,P){p===(p=n(h))&&E?E.p(h,P):(E.d(1),E=p(h),E&&(E.c(),E.m(e.parentNode,e)));let U=s;s=D(h),s===U?g[s].p(h,P):(Ie(),R(g[U],1,1,()=>{g[U]=null}),Ce(),t=g[s],t?t.p(h,P):(t=g[s]=I[s](h),t.c()),W(t,1),t.m(r.parentNode,r)),A===(A=C(h))&&y?y.p(h,P):(y&&y.d(1),y=A&&A(h),y&&(y.c(),y.m(c.parentNode,c))),h[12]?b?(b.p(h,P),P&4096&&W(b,1)):(b=$t(h),b.c(),W(b,1),b.m(i.parentNode,i)):b&&(Ie(),R(b,1,1,()=>{b=null}),Ce());const $={};P&2&&($.briteliteQueues=h[1]),o.$set($)},i(h){u||(W(t),W(b),W(o.$$.fragment,h),u=!0)},o(h){R(t),R(b),R(o.$$.fragment,h),u=!1},d(h){E.d(h),h&&f(e),g[s].d(h),h&&f(r),y&&y.d(h),h&&f(c),b&&b.d(h),h&&f(i),de(o,h)}}}function ys(l){let e,s;return e=new Yt({}),e.$on("onPromptComplete",l[20]),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),s=!0},p:X,i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function bs(l){let e,s,t,r,c,i,o,u,n=l[11]!==1?"s":"",p,E,I,g,D;return{c(){e=m("p"),s=k("Hail "),t=m("span"),r=k(l[14]),c=k(`, you have
						`),i=m("span"),o=k(l[11]),u=k(`
						super charged avatar`),p=k(n),E=k("."),I=T(),g=m("p"),D=k(`Welcome to your avatar station: Britelite. View all your avatars here and choose which
						one you want stamped on your passport.`),this.h()},l(C){e=d(C,"P",{});var A=_(e);s=w(A,"Hail "),t=d(A,"SPAN",{class:!0});var y=_(t);r=w(y,l[14]),y.forEach(f),c=w(A,`, you have
						`),i=d(A,"SPAN",{class:!0});var b=_(i);o=w(b,l[11]),b.forEach(f),u=w(A,`
						super charged avatar`),p=w(A,n),E=w(A,"."),A.forEach(f),I=O(C),g=d(C,"P",{});var h=_(g);D=w(h,`Welcome to your avatar station: Britelite. View all your avatars here and choose which
						one you want stamped on your passport.`),h.forEach(f),this.h()},h(){v(t,"class","highlight accent"),v(i,"class","highlight")},m(C,A){z(C,e,A),a(e,s),a(e,t),a(t,r),a(e,c),a(e,i),a(i,o),a(e,u),a(e,p),a(e,E),z(C,I,A),z(C,g,A),a(g,D)},p(C,A){A&2048&&K(o,C[11]),A&2048&&n!==(n=C[11]!==1?"s":"")&&K(p,n)},d(C){C&&f(e),C&&f(I),C&&f(g)}}}function Es(l){let e,s,t,r,c;return{c(){e=m("p"),s=k("Hello "),t=m("span"),r=k(l[14]),c=k(`, you have no super charged
						avatars.`),this.h()},l(i){e=d(i,"P",{});var o=_(e);s=w(o,"Hello "),t=d(o,"SPAN",{class:!0});var u=_(t);r=w(u,l[14]),u.forEach(f),c=w(o,`, you have no super charged
						avatars.`),o.forEach(f),this.h()},h(){v(t,"class","highlight accent")},m(i,o){z(i,e,o),a(e,s),a(e,t),a(t,r),a(e,c)},p:X,d(i){i&&f(e)}}}function ks(l){let e,s;return e=new ds({props:{estimatedTime:l[2].lastCoinDailyDate,dailyCoinAllowance:l[15]}}),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),s=!0},p(t,r){const c={};r&4&&(c.estimatedTime=t[2].lastCoinDailyDate),e.$set(c)},i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function ws(l){let e,s;return e=new cs({props:{isImageUploading:l[4],promptComplete:l[5]}}),e.$on("onFileSelected",l[19]),e.$on("onViewAvatar",l[16]),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),s=!0},p(t,r){const c={};r&16&&(c.isImageUploading=t[4]),r&32&&(c.promptComplete=t[5]),e.$set(c)},i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function Is(l){let e,s,t,r,c,i,o,u,n;return{c(){e=m("p"),s=k(l[8]),t=k(" out of "),r=k(l[9]),c=k(" avatars"),i=T(),o=m("p"),u=m("ion-icon"),n=k("Estimated time: calculating..."),this.h()},l(p){e=d(p,"P",{class:!0});var E=_(e);s=w(E,l[8]),t=w(E," out of "),r=w(E,l[9]),c=w(E," avatars"),E.forEach(f),i=O(p),o=d(p,"P",{});var I=_(o);u=d(I,"ION-ICON",{class:!0,name:!0}),_(u).forEach(f),n=w(I,"Estimated time: calculating..."),I.forEach(f),this.h()},h(){v(e,"class","highlight large"),Q(u,"class","icon svelte-lmxp64"),Q(u,"name","cloud-upload")},m(p,E){z(p,e,E),a(e,s),a(e,t),a(e,r),a(e,c),z(p,i,E),z(p,o,E),a(o,u),a(o,n)},p(p,E){E&256&&K(s,p[8]),E&512&&K(r,p[9])},d(p){p&&f(e),p&&f(i),p&&f(o)}}}function Cs(l){let e,s,t,r,c,i,o,u,n,p=l[6].hours+"",E,I,g,D=Math.floor(l[6].minutes)+"",C,A;return{c(){e=m("p"),s=k(l[8]),t=k(" out of "),r=k(l[9]),c=k(" avatars"),i=T(),o=m("p"),u=k(`Your avatar is being processed. It will be ready in
						`),n=m("span"),E=k(p),I=k(` hours and
						`),g=m("span"),C=k(D),A=k(" minutes."),this.h()},l(y){e=d(y,"P",{class:!0});var b=_(e);s=w(b,l[8]),t=w(b," out of "),r=w(b,l[9]),c=w(b," avatars"),b.forEach(f),i=O(y),o=d(y,"P",{});var h=_(o);u=w(h,`Your avatar is being processed. It will be ready in
						`),n=d(h,"SPAN",{class:!0});var P=_(n);E=w(P,p),P.forEach(f),I=w(h,` hours and
						`),g=d(h,"SPAN",{class:!0});var U=_(g);C=w(U,D),U.forEach(f),A=w(h," minutes."),h.forEach(f),this.h()},h(){v(e,"class","highlight large"),v(n,"class","highlight"),v(g,"class","highlight")},m(y,b){z(y,e,b),a(e,s),a(e,t),a(e,r),a(e,c),z(y,i,b),z(y,o,b),a(o,u),a(o,n),a(n,E),a(o,I),a(o,g),a(g,C),a(o,A)},p(y,b){b&256&&K(s,y[8]),b&512&&K(r,y[9]),b&64&&p!==(p=y[6].hours+"")&&K(E,p),b&64&&D!==(D=Math.floor(y[6].minutes)+"")&&K(C,D)},d(y){y&&f(e),y&&f(i),y&&f(o)}}}function $t(l){let e,s;return e=new ls({props:{intervalDuration:l[3],jobsQueued:l[7]}}),e.$on("onProgressComplete",l[18]),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),s=!0},p(t,r){const c={};r&8&&(c.intervalDuration=t[3]),r&128&&(c.jobsQueued=t[7]),e.$set(c)},i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){de(e,t)}}}function As(l){let e,s,t,r,c;const i=[vs,_s],o=[];function u(n,p){return typeof n[13]=="undefined"||n[13]===null||n[13]===""?0:1}return s=u(l),t=o[s]=i[s](l),{c(){e=T(),t.c(),r=we(),this.h()},l(n){Qt('[data-svelte="svelte-qyyaak"]',Ut.head).forEach(f),e=O(n),t.l(n),r=we(),this.h()},h(){Ut.title="Britelite"},m(n,p){z(n,e,p),o[s].m(n,p),z(n,r,p),c=!0},p(n,[p]){t.p(n,p)},i(n){c||(W(t),c=!0)},o(n){R(t),c=!1},d(n){n&&f(e),o[s].d(n),n&&f(r)}}}const Ds=1,Ps=3,Ns=12;let Ss=1;function Ts(l,e,s){let t,r,c,i,o,u,n;ke.subscribe(H=>{s(2,n=H)});const p=n==null?void 0:n.token,E=n==null?void 0:n.username;let I=!1,g=0,D=6e4,C=[],A=!1,y=!1,b=!1,h=null,P=new FormData,U={},$=n.spaceLab?Ns:Ps,V={},N=!1;Bt(async()=>{if(typeof p=="undefined"||p===null||p==="")return()=>{};const H=15e3;async function G(){const se=await(await fetch("https://3ee.dev/currency/get/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+p},mode:"cors"})).json();let ae=n;ae.coins=se.coins,ae.lastCoinDailyDate=se.lastCoinDailyDate,ke.set(ae)}const ee=setInterval(S,H),L=setInterval(G,H);return S(),G(),()=>{clearInterval(ee),clearInterval(L)}});async function S(){const H=await fetch("https://3ee.dev/britelite/status/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+p},mode:"cors"});s(1,C=await H.json());let G=[];for(let L=0;L<C.length;L++)C[L].status_type===0&&G.push(C[L]);if(s(0,I=!1),G.length>0){s(22,g=G.length),s(24,N=!1),s(0,I=!0);let L=Math.abs(new Date(G[0].estimated_time)-new Date(G[0].created)),Y=L,se=Y/60/1e3;var ee=Y/3600/1e3;s(6,V.hours=Math.floor(ee),V),s(6,V.minutes=se-60*V.hours,V);let ae=Math.floor(L/60/1e3);s(3,D=ae*6e4),V.minutes<1&&(s(6,V.minutes=1,V),s(3,D=6e4))}for(let L=0;L<C.length;L++){let Y=C[L].encoded_avatar.replace(/'/g,"").replace(/"/g,"").replace("[","").replace("]","");Y=Y.split(","),s(1,C[L].encoded_avatar=Y,C)}typeof C!="undefined"&&C.length>0&&C.sort(function(L,Y){return new Date(Y.updated)-new Date(L.updated)})}const B=async()=>{lt("/account/britelite")},j=async()=>{s(23,A=!0)},F=async()=>{s(4,y=!0),document.body.scrollIntoView();const G=await(await fetch("https://3ee.dev/account/upload/",{method:"POST",headers:{Accept:"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+p},mode:"cors",body:P})).json();if(!G.success){let L=n;L.coins=0,L.lastCoinDailyDate=G.lastCoinDailyDate,ke.set(L);return}let ee=n;ee.coins=G.coins,ee.lastCoinDailyDate=G.lastCoinDailyDate,ee.profile.image=G.image,ke.set(ee),s(4,y=!1),b&&typeof umami!="undefined"?umami.trackEvent("Supercharge",{success:!0}):!b&&typeof umami!="undefined"&&umami.trackEvent("Upload Avatar",{success:!0})};function M(){lt("/britelite/library")}async function J(){s(0,I=!1),S()}const q=async(H,G)=>{h=H.detail.file,new FileReader().readAsDataURL(h),P.append("file",h),P.append("useDiffusion",!0);let L=n;L.profile.useDiffusion=!0,ke.set(L),j()},Z=async H=>{s(23,A=!1),U=H.detail,P.append("prompt",JSON.stringify(U)),s(5,b=!0),s(24,N=!0),F()};function x(){lt("/account/create")}return l.$$.update=()=>{l.$$.dirty&1&&s(12,t=I),l.$$.dirty&2&&s(11,r=C.filter(H=>H.encoded_avatar.length>0).length),l.$$.dirty&8388608&&s(10,c=A),l.$$.dirty&4194304&&s(9,i=g),l.$$.dirty&16777216&&s(7,u=N)},s(8,o=Ss),[I,C,n,D,y,b,V,u,o,i,c,r,t,p,E,$,B,M,J,q,Z,x,g,A,N]}class Ws extends Ae{constructor(e){super(),De(this,e,Ts,As,Pe,{})}}export{Ws as default};

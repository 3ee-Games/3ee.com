import{S as R,i as U,s as W,e as g,c as y,a as E,d,b as S,g as $,l as L,N as de,E as T,_ as oe,t as w,k as N,h as C,m as B,H as q,I as f,j,R as F,J as Y,L as Z,K as x,$ as me,C as ee,a0 as _e,a1 as ve,a2 as ge,G as ye,v as ie,w as ce,x as ue,y as fe,q as M,o as G,B as pe,X as be,p as Ee,n as ke}from"../../../chunks/index-b9b87fdf.js";import{g as we}from"../../../chunks/navigation-0e6511d1.js";import{a as he}from"../../../chunks/accountStore-a25136c1.js";import{c as te}from"../../../chunks/briteliteStore-1472a6f4.js";import{w as Ce}from"../../../chunks/index-1a6e67c7.js";import"../../../chunks/singletons-d1fb5791.js";function re(r,e,s){const t=r.slice();return t[5]=e[s],t}function se(r){let e,s=r[0],t=[];for(let a=0;a<s.length;a+=1)t[a]=ae(re(r,s,a));return{c(){e=g("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=y(a,"UL",{class:!0});var l=E(e);for(let n=0;n<t.length;n+=1)t[n].l(l);l.forEach(d),this.h()},h(){S(e,"class","svelte-1vl2kd9")},m(a,l){$(a,e,l);for(let n=0;n<t.length;n+=1)t[n].m(e,null)},p(a,l){if(l&3){s=a[0];let n;for(n=0;n<s.length;n+=1){const i=re(a,s,n);t[n]?t[n].p(i,l):(t[n]=ae(i),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(a){a&&d(e),de(t,a)}}}function Ie(r){let e,s,t,a=V(r[5].updated)+"",l,n,i,p,o,c,b,_;return{c(){e=g("li"),s=g("h3"),t=g("a"),l=w(a),n=N(),i=g("div"),p=g("ion-icon"),o=N(),c=g("p"),b=w("Coming Soon, please wait."),_=N(),this.h()},l(u){e=y(u,"LI",{class:!0});var h=E(e);s=y(h,"H3",{class:!0});var m=E(s);t=y(m,"A",{href:!0});var v=E(t);l=C(v,a),v.forEach(d),m.forEach(d),n=B(h),i=y(h,"DIV",{class:!0});var k=E(i);p=y(k,"ION-ICON",{class:!0,name:!0}),E(p).forEach(d),o=B(k),c=y(k,"P",{});var A=E(c);b=C(A,"Coming Soon, please wait."),A.forEach(d),k.forEach(d),_=B(h),h.forEach(d),this.h()},h(){S(t,"href",""),S(s,"class","svelte-1vl2kd9"),q(p,"class","icon svelte-1vl2kd9"),q(p,"name","alarm-sharp"),S(i,"class","coming-soon svelte-1vl2kd9"),S(e,"class","svelte-1vl2kd9")},m(u,h){$(u,e,h),f(e,s),f(s,t),f(t,l),f(e,n),f(e,i),f(i,p),f(i,o),f(i,c),f(c,b),f(e,_)},p(u,h){h&1&&a!==(a=V(u[5].updated)+"")&&j(l,a)},d(u){u&&d(e)}}}function Pe(r){let e,s,t,a=V(r[5].updated)+"",l,n,i,p,o,c,b;return{c(){e=g("li"),s=g("h3"),t=g("a"),l=w(a),n=N(),i=g("img"),o=N(),this.h()},l(_){e=y(_,"LI",{class:!0});var u=E(e);s=y(u,"H3",{class:!0});var h=E(s);t=y(h,"A",{href:!0});var m=E(t);l=C(m,a),m.forEach(d),h.forEach(d),n=B(u),i=y(u,"IMG",{src:!0,alt:!0}),o=B(u),u.forEach(d),this.h()},h(){S(t,"href",""),S(s,"class","svelte-1vl2kd9"),F(i.src,p="data:image/png;base64,"+r[5].encoded_avatar[0])||S(i,"src",p),S(i,"alt","Britelite Super Charged Avatar"),S(e,"class","svelte-1vl2kd9")},m(_,u){$(_,e,u),f(e,s),f(s,t),f(t,l),f(e,n),f(e,i),f(e,o),c||(b=[Y(t,"click",Z(function(){x(r[1](r[5]))&&r[1](r[5]).apply(this,arguments)})),Y(e,"click",Z(function(){x(r[1](r[5]))&&r[1](r[5]).apply(this,arguments)}))],c=!0)},p(_,u){r=_,u&1&&a!==(a=V(r[5].updated)+"")&&j(l,a),u&1&&!F(i.src,p="data:image/png;base64,"+r[5].encoded_avatar[0])&&S(i,"src",p)},d(_){_&&d(e),c=!1,me(b)}}}function ae(r){let e;function s(l,n){return l[5].encoded_avatar[0].length>0?Pe:Ie}let t=s(r),a=t(r);return{c(){a.c(),e=L()},l(l){a.l(l),e=L()},m(l,n){a.m(l,n),$(l,e,n)},p(l,n){t===(t=s(l))&&a?a.p(l,n):(a.d(1),a=t(l),a&&(a.c(),a.m(e.parentNode,e)))},d(l){a.d(l),l&&d(e)}}}function De(r){let e,s=r[0].length>0&&se(r);return{c(){s&&s.c(),e=L()},l(t){s&&s.l(t),e=L()},m(t,a){s&&s.m(t,a),$(t,e,a)},p(t,[a]){t[0].length>0?s?s.p(t,a):(s=se(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:T,o:T,d(t){s&&s.d(t),t&&d(e)}}}function V(r){return typeof r!="undefined"?new Date(r).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null}function Ae(r,e,s){te.subscribe(n=>{});let{briteliteQueues:t=[]}=e;he.subscribe(n=>{});const a=oe();function l(n){te.update(i=>n),a("onSelectImage")}return r.$$set=n=>{"briteliteQueues"in n&&s(0,t=n.briteliteQueues)},[t,l]}class Se extends R{constructor(e){super(),U(this,e,Ae,De,W,{briteliteQueues:0})}}function $e(r){const e=r-1;return e*e*e+1}function le(r){return Object.prototype.toString.call(r)==="[object Date]"}function J(r,e){if(r===e||r!==r)return()=>r;const s=typeof r;if(s!==typeof e||Array.isArray(r)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const t=e.map((a,l)=>J(r[l],a));return a=>t.map(l=>l(a))}if(s==="object"){if(!r||!e)throw new Error("Object cannot be null");if(le(r)&&le(e)){r=r.getTime(),e=e.getTime();const l=e-r;return n=>new Date(r+n*l)}const t=Object.keys(e),a={};return t.forEach(l=>{a[l]=J(r[l],e[l])}),l=>{const n={};return t.forEach(i=>{n[i]=a[i](l)}),n}}if(s==="number"){const t=e-r;return a=>r+a*t}throw new Error(`Cannot interpolate ${s} values`)}function Ne(r,e={}){const s=Ce(r);let t,a=r;function l(n,i){if(r==null)return s.set(r=n),Promise.resolve();a=n;let p=t,o=!1,{delay:c=0,duration:b=400,easing:_=ge,interpolate:u=J}=ee(ee({},e),i);if(b===0)return p&&(p.abort(),p=null),s.set(r=a),Promise.resolve();const h=_e()+c;let m;return t=ve(v=>{if(v<h)return!0;o||(m=u(r,n),typeof b=="function"&&(b=b(r,n)),o=!0),p&&(p.abort(),p=null);const k=v-h;return k>b?(s.set(r=n),!1):(s.set(r=m(_(k/b))),!0)}),t.promise}return{set:l,update:(n,i)=>l(n(a,r),i),subscribe:s.subscribe}}function Be(r){let e,s,t,a=r[0]/6e4+"",l,n,i,p;return{c(){e=g("p"),s=g("ion-icon"),t=w("Estimated time: "),l=w(a),n=w(" minutes"),i=N(),p=g("progress"),this.h()},l(o){e=y(o,"P",{});var c=E(e);s=y(c,"ION-ICON",{class:!0,name:!0}),E(s).forEach(d),t=C(c,"Estimated time: "),l=C(c,a),n=C(c," minutes"),c.forEach(d),i=B(o),p=y(o,"PROGRESS",{class:!0}),E(p).forEach(d),this.h()},h(){q(s,"class","icon svelte-1y90m1"),q(s,"name","alarm-sharp"),p.value=r[1],S(p,"class","svelte-1y90m1")},m(o,c){$(o,e,c),f(e,s),f(e,t),f(e,l),f(e,n),$(o,i,c),$(o,p,c)},p(o,[c]){c&1&&a!==(a=o[0]/6e4+"")&&j(l,a),c&2&&(p.value=o[1])},i:T,o:T,d(o){o&&d(e),o&&d(i),o&&d(p)}}}function Oe(r,e,s){let t;const a=oe();let{intervalDuration:l=6e4}=e,n=0,i=Ne(0,{duration:1e3,easing:$e,max:l});ye(r,i,o=>s(1,t=o)),ie(async()=>{async function o(){n+=1e3/l,i.set(n),n>=1&&(clearInterval(c),a("onProgressComplete"))}const c=setInterval(o,1e3);return()=>{clearInterval(c)}});const p=async o=>{a("onProgressComplete")};return r.$$set=o=>{"intervalDuration"in o&&s(0,l=o.intervalDuration)},r.$$.update=()=>{r.$$.dirty&1&&i.subscribe(o=>{o===l&&p()})},[l,t,i]}class Me extends R{constructor(e){super(),U(this,e,Oe,Be,W,{intervalDuration:0})}}function Te(r){let e,s,t,a,l,n,i,p,o=r[2]!==1?"s":"",c,b,_,u,h,m,v,k,A,D,O;return{c(){e=g("p"),s=w("Hail, "),t=g("span"),a=w(r[4]),l=w(`, you have
				`),n=g("span"),i=w(r[2]),p=w(`
				new super charged avatar`),c=w(o),b=w("."),_=N(),u=g("p"),h=w(`Welcome to your avatar station: Britelite. View all your avatars here and choose which one
				you want stamped on your passport.`),m=N(),v=g("p"),k=w("Need help? "),A=g("a"),D=w("Contact us"),O=w(" anytime!"),this.h()},l(I){e=y(I,"P",{});var P=E(e);s=C(P,"Hail, "),t=y(P,"SPAN",{class:!0});var H=E(t);a=C(H,r[4]),H.forEach(d),l=C(P,`, you have
				`),n=y(P,"SPAN",{class:!0});var z=E(n);i=C(z,r[2]),z.forEach(d),p=C(P,`
				new super charged avatar`),c=C(P,o),b=C(P,"."),P.forEach(d),_=B(I),u=y(I,"P",{});var K=E(u);h=C(K,`Welcome to your avatar station: Britelite. View all your avatars here and choose which one
				you want stamped on your passport.`),K.forEach(d),m=B(I),v=y(I,"P",{});var Q=E(v);k=C(Q,"Need help? "),A=y(Q,"A",{href:!0});var X=E(A);D=C(X,"Contact us"),X.forEach(d),O=C(Q," anytime!"),Q.forEach(d),this.h()},h(){S(t,"class","highlight accent"),S(n,"class","highlight"),S(A,"href","/contact/")},m(I,P){$(I,e,P),f(e,s),f(e,t),f(t,a),f(e,l),f(e,n),f(n,i),f(e,p),f(e,c),f(e,b),$(I,_,P),$(I,u,P),f(u,h),$(I,m,P),$(I,v,P),f(v,k),f(v,A),f(A,D),f(v,O)},p(I,P){P&4&&j(i,I[2]),P&4&&o!==(o=I[2]!==1?"s":"")&&j(c,o)},d(I){I&&d(e),I&&d(_),I&&d(u),I&&d(m),I&&d(v)}}}function je(r){let e,s,t,a,l,n,i,p,o,c,b;return{c(){e=g("p"),s=w("Hello, "),t=g("span"),a=w(r[4]),l=w(", you have no super charged avatars."),n=N(),i=g("p"),p=w("Need help? "),o=g("a"),c=w("Contact us"),b=w(" anytime!"),this.h()},l(_){e=y(_,"P",{});var u=E(e);s=C(u,"Hello, "),t=y(u,"SPAN",{class:!0});var h=E(t);a=C(h,r[4]),h.forEach(d),l=C(u,", you have no super charged avatars."),u.forEach(d),n=B(_),i=y(_,"P",{});var m=E(i);p=C(m,"Need help? "),o=y(m,"A",{href:!0});var v=E(o);c=C(v,"Contact us"),v.forEach(d),b=C(m," anytime!"),m.forEach(d),this.h()},h(){S(t,"class","highlight accent"),S(o,"href","/contact/")},m(_,u){$(_,e,u),f(e,s),f(e,t),f(t,a),f(e,l),$(_,n,u),$(_,i,u),f(i,p),f(i,o),f(o,c),f(i,b)},p:T,d(_){_&&d(e),_&&d(n),_&&d(i)}}}function ne(r){let e,s;return e=new Me({props:{intervalDuration:r[1]}}),e.$on("onProgressComplete",r[6]),{c(){ce(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,a){fe(e,t,a),s=!0},p(t,a){const l={};a&2&&(l.intervalDuration=t[1]),e.$set(l)},i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){G(e.$$.fragment,t),s=!1},d(t){pe(e,t)}}}function He(r){let e,s,t,a,l,n,i,p,o,c;function b(m,v){return typeof m[2]=="undefined"||m[2]===0?je:Te}let _=b(r),u=_(r),h=r[3]&&ne(r);return o=new Se({props:{briteliteQueues:r[0]}}),o.$on("onSelectImage",r[5]),{c(){e=N(),s=g("section"),t=g("article"),a=g("h1"),l=w("Britelite"),n=N(),u.c(),i=N(),h&&h.c(),p=N(),ce(o.$$.fragment),this.h()},l(m){be('[data-svelte="svelte-1xxtd0l"]',document.head).forEach(d),e=B(m),s=y(m,"SECTION",{class:!0});var k=E(s);t=y(k,"ARTICLE",{class:!0});var A=E(t);a=y(A,"H1",{});var D=E(a);l=C(D,"Britelite"),D.forEach(d),n=B(A),u.l(A),i=B(A),h&&h.l(A),p=B(A),ue(o.$$.fragment,A),A.forEach(d),k.forEach(d),this.h()},h(){document.title="Britelite Diffusion",S(t,"class","content"),S(s,"class","background")},m(m,v){$(m,e,v),$(m,s,v),f(s,t),f(t,a),f(a,l),f(t,n),u.m(t,null),f(t,i),h&&h.m(t,null),f(t,p),fe(o,t,null),c=!0},p(m,[v]){_===(_=b(m))&&u?u.p(m,v):(u.d(1),u=_(m),u&&(u.c(),u.m(t,i))),m[3]?h?(h.p(m,v),v&8&&M(h,1)):(h=ne(m),h.c(),M(h,1),h.m(t,p)):h&&(ke(),G(h,1,1,()=>{h=null}),Ee());const k={};v&1&&(k.briteliteQueues=m[0]),o.$set(k)},i(m){c||(M(h),M(o.$$.fragment,m),c=!0)},o(m){G(h),G(o.$$.fragment,m),c=!1},d(m){m&&d(e),m&&d(s),u.d(),h&&h.d(),pe(o)}}}function Qe(r,e,s){let t,a,l;he.subscribe(u=>{l=u});const n=l==null?void 0:l.token,i=l==null?void 0:l.username;let p=!1,o=6e4,c=[];ie(async()=>{async function h(){const v=await fetch("http://localhost:8000/britelite/status/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+n},mode:"cors"});s(0,c=await v.json());let k=[];for(let D=0;D<c.length;D++)c[D].status_type===0&&k.push(c[D]);if(k.length>0){s(7,p=!0),console.log(k[0].updated,k[0].estimated_time);let D=Math.abs(new Date(k[0].estimated_time)-new Date(k[0].updated)),O=D,I=O/60/1e3;var A=O/3600/1e3;let P={};P.hours=Math.floor(A),P.minutes=I-60*P.hours,console.log(P);let H=Math.floor(D/60/1e3);s(1,o=H*6e4)}for(let D=0;D<c.length;D++){let O=c[D].encoded_avatar.replace(/'/g,"").replace(/"/g,"").replace("[","").replace("]","");O=O.split(","),s(0,c[D].encoded_avatar=O,c)}typeof c!="undefined"&&c.length>0&&c.sort(function(D,O){return new Date(O.updated)-new Date(D.updated)})}const m=setInterval(h,35e3);return h(),()=>{clearInterval(m)}});function b(){we("/account/britelite/library")}function _(){s(7,p=!1)}return r.$$.update=()=>{r.$$.dirty&128&&s(3,t=p),r.$$.dirty&1&&s(2,a=c.filter(u=>u.encoded_avatar.length>0).length)},[c,o,a,t,i,b,_,p]}class Ue extends R{constructor(e){super(),U(this,e,Qe,He,W,{})}}export{Ue as default};

import{S as Z,i as x,s as ee,l as K,g as O,n as re,o as F,p as le,q as X,d as n,_ as ce,v as ue,e as _,t as w,k as $,c as b,a as E,h as N,m as U,b as y,I as u,$ as G,J,a0 as te,E as z,w as oe,x as se,y as ae,B as ne,H as L,X as ie}from"../chunks/index-299456bd.js";import{d as fe,b as pe}from"../chunks/env-859c48a7.js";import{g as Q}from"../chunks/navigation-0e6511d1.js";import{a as de}from"../chunks/accountStore-af10db85.js";import{C as he}from"../chunks/Captcha-f37fdb77.js";import{s as R}from"../chunks/messagingStore-df35cd50.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-c05afa88.js";function me(d){let e,t,o,s,i,a,r,c,f,p,h,l,m,g,P;function T(v,C){return typeof v[7]=="undefined"?ye:be}let A=T(d)(d),S=typeof d[7]=="undefined"&&ve(d);function k(v,C){return v[2]?ke:Ee}let I=k(d),j=I(d);return{c(){A.c(),e=$(),t=_("form"),S&&S.c(),o=$(),s=_("label"),i=w("subject:"),a=$(),r=_("input"),c=$(),f=_("label"),p=w("message:"),h=$(),l=_("textarea"),m=$(),j.c(),this.h()},l(v){A.l(v),e=U(v),t=b(v,"FORM",{class:!0});var C=E(t);S&&S.l(C),o=U(C),s=b(C,"LABEL",{for:!0});var D=E(s);i=N(D,"subject:"),D.forEach(n),a=U(C),r=b(C,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),c=U(C),f=b(C,"LABEL",{for:!0});var M=E(f);p=N(M,"message:"),M.forEach(n),h=U(C),l=b(C,"TEXTAREA",{name:!0,id:!0,placeholder:!0,type:!0,class:!0}),E(l).forEach(n),m=U(C),j.l(C),C.forEach(n),this.h()},h(){y(s,"for","subject"),y(r,"name","subject"),y(r,"id","subject"),y(r,"placeholder","what type of problem?"),y(r,"type","text"),r.required="true",y(f,"for","body"),y(l,"name","body"),y(l,"id","body"),y(l,"placeholder","How can we assist you?"),y(l,"type","text"),l.required="true",y(l,"class","svelte-osobnu"),y(t,"class","svelte-osobnu")},m(v,C){A.m(v,C),O(v,e,C),O(v,t,C),S&&S.m(t,null),u(t,o),u(t,s),u(s,i),u(t,a),u(t,r),G(r,d[5]),u(t,c),u(t,f),u(f,p),u(t,h),u(t,l),G(l,d[6]),u(t,m),j.m(t,null),g||(P=[J(r,"input",d[13]),J(l,"input",d[14]),J(t,"submit",d[10])],g=!0)},p(v,C){A.p(v,C),typeof v[7]=="undefined"&&S.p(v,C),C&32&&r.value!==v[5]&&G(r,v[5]),C&64&&G(l,v[6]),I===(I=k(v))&&j?j.p(v,C):(j.d(1),j=I(v),j&&(j.c(),j.m(t,null)))},i:z,o:z,d(v){A.d(v),v&&n(e),v&&n(t),S&&S.d(),j.d(),g=!1,te(P)}}}function _e(d){let e,t;return e=new he({props:{game:d[1]}}),{c(){oe(e.$$.fragment)},l(o){se(e.$$.fragment,o)},m(o,s){ae(e,o,s),t=!0},p(o,s){const i={};s&2&&(i.game=o[1]),e.$set(i)},i(o){t||(X(e.$$.fragment,o),t=!0)},o(o){F(e.$$.fragment,o),t=!1},d(o){ne(e,o)}}}function be(d){let e,t,o,s,i,a,r,c,f,p,h,l,m,g,P,T,q,A,S;return{c(){e=_("p"),t=w("Greetings, "),o=_("span"),s=w(d[8]),i=w(`. Submit a support request. You'll
			be able to track the status and edit your support request.`),a=$(),r=_("p"),c=_("ion-icon"),f=w(` Check the status of your
			`),p=_("a"),h=w("messages in your account"),l=w(" ."),m=$(),g=_("p"),P=_("ion-icon"),T=w(` Stop by our
			`),q=_("a"),A=w("Discord server"),S=w(" for support from our community."),this.h()},l(k){e=b(k,"P",{});var I=E(e);t=N(I,"Greetings, "),o=b(I,"SPAN",{class:!0});var j=E(o);s=N(j,d[8]),j.forEach(n),i=N(I,`. Submit a support request. You'll
			be able to track the status and edit your support request.`),I.forEach(n),a=U(k),r=b(k,"P",{});var v=E(r);c=b(v,"ION-ICON",{class:!0,name:!0}),E(c).forEach(n),f=N(v,` Check the status of your
			`),p=b(v,"A",{href:!0});var C=E(p);h=N(C,"messages in your account"),C.forEach(n),l=N(v," ."),v.forEach(n),m=U(k),g=b(k,"P",{});var D=E(g);P=b(D,"ION-ICON",{class:!0,name:!0}),E(P).forEach(n),T=N(D,` Stop by our
			`),q=b(D,"A",{href:!0,target:!0});var M=E(q);A=N(M,"Discord server"),M.forEach(n),S=N(D," for support from our community."),D.forEach(n),this.h()},h(){y(o,"class","highlight accent"),L(c,"class","icon logo-discord svelte-osobnu"),L(c,"name","mail-sharp"),y(p,"href","/account/messages"),L(P,"class","icon logo-discord svelte-osobnu"),L(P,"name","logo-discord"),y(q,"href","https://discord.gg/3ee"),y(q,"target","_blank")},m(k,I){O(k,e,I),u(e,t),u(e,o),u(o,s),u(e,i),O(k,a,I),O(k,r,I),u(r,c),u(r,f),u(r,p),u(p,h),u(r,l),O(k,m,I),O(k,g,I),u(g,P),u(g,T),u(g,q),u(q,A),u(g,S)},p:z,d(k){k&&n(e),k&&n(a),k&&n(r),k&&n(m),k&&n(g)}}}function ye(d){let e,t,o,s,i,a,r,c,f,p,h,l,m,g,P,T,q,A;return{c(){e=_("p"),t=w("Greetings, "),o=_("span"),s=w("traveler"),i=w(`. If you have 3Games account,
			`),a=_("a"),r=w("login"),c=w(`
			to track, modify your support requests, and avoid playing a captcha. If you do not have an account,
			you can
			`),f=_("a"),p=w("create one now"),h=w("."),l=$(),m=_("p"),g=_("ion-icon"),P=w(` Stop by our
			`),T=_("a"),q=w("Discord server"),A=w(" for support from our community."),this.h()},l(S){e=b(S,"P",{});var k=E(e);t=N(k,"Greetings, "),o=b(k,"SPAN",{class:!0});var I=E(o);s=N(I,"traveler"),I.forEach(n),i=N(k,`. If you have 3Games account,
			`),a=b(k,"A",{href:!0});var j=E(a);r=N(j,"login"),j.forEach(n),c=N(k,`
			to track, modify your support requests, and avoid playing a captcha. If you do not have an account,
			you can
			`),f=b(k,"A",{href:!0});var v=E(f);p=N(v,"create one now"),v.forEach(n),h=N(k,"."),k.forEach(n),l=U(S),m=b(S,"P",{});var C=E(m);g=b(C,"ION-ICON",{class:!0,name:!0}),E(g).forEach(n),P=N(C,` Stop by our
			`),T=b(C,"A",{href:!0,target:!0});var D=E(T);q=N(D,"Discord server"),D.forEach(n),A=N(C," for support from our community."),C.forEach(n),this.h()},h(){y(o,"class","highlight accent"),y(a,"href","/account/login"),y(f,"href","/account/create"),L(g,"class","icon logo-discord svelte-osobnu"),L(g,"name","logo-discord"),y(T,"href","https://discord.gg/3ee"),y(T,"target","_blank")},m(S,k){O(S,e,k),u(e,t),u(e,o),u(o,s),u(e,i),u(e,a),u(a,r),u(e,c),u(e,f),u(f,p),u(e,h),O(S,l,k),O(S,m,k),u(m,g),u(m,P),u(m,T),u(T,q),u(m,A)},p:z,d(S){S&&n(e),S&&n(l),S&&n(m)}}}function ve(d){let e,t,o,s,i,a,r,c,f,p,h;return{c(){e=_("label"),t=w("your email address:"),o=$(),s=_("input"),i=$(),a=_("label"),r=w("name:"),c=$(),f=_("input"),this.h()},l(l){e=b(l,"LABEL",{for:!0});var m=E(e);t=N(m,"your email address:"),m.forEach(n),o=U(l),s=b(l,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),i=U(l),a=b(l,"LABEL",{for:!0});var g=E(a);r=N(g,"name:"),g.forEach(n),c=U(l),f=b(l,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),this.h()},h(){y(e,"for","email"),y(s,"name","email"),y(s,"id","email"),y(s,"placeholder","enter your email address"),y(s,"type","email"),s.required="true",y(a,"for","name"),y(f,"name","name"),y(f,"id","name"),y(f,"placeholder","enter your name"),y(f,"type","text"),f.required="true"},m(l,m){O(l,e,m),u(e,t),O(l,o,m),O(l,s,m),G(s,d[3]),O(l,i,m),O(l,a,m),u(a,r),O(l,c,m),O(l,f,m),G(f,d[4]),p||(h=[J(s,"input",d[11]),J(f,"input",d[12])],p=!0)},p(l,m){m&8&&s.value!==l[3]&&G(s,l[3]),m&16&&f.value!==l[4]&&G(f,l[4])},d(l){l&&n(e),l&&n(o),l&&n(s),l&&n(i),l&&n(a),l&&n(c),l&&n(f),p=!1,te(h)}}}function Ee(d){let e,t,o;function s(r,c){return r[9]?ge:Ce}let a=s(d)(d);return{c(){e=_("button"),t=_("ion-icon"),o=$(),a.c(),this.h()},l(r){e=b(r,"BUTTON",{class:!0});var c=E(e);t=b(c,"ION-ICON",{class:!0,name:!0}),E(t).forEach(n),o=U(c),a.l(c),c.forEach(n),this.h()},h(){L(t,"class","icon svelte-osobnu"),L(t,"name","send-sharp"),y(e,"class","svelte-osobnu")},m(r,c){O(r,e,c),u(e,t),u(e,o),a.m(e,null)},p:z,d(r){r&&n(e),a.d()}}}function ke(d){let e,t,o,s,i,a,r,c,f;return{c(){e=_("p"),t=_("ion-icon"),o=w(" The captcha was not correct. Please try again."),s=$(),i=_("button"),a=_("ion-icon"),r=$(),c=_("span"),f=w("Try again"),this.h()},l(p){e=b(p,"P",{class:!0});var h=E(e);t=b(h,"ION-ICON",{class:!0,name:!0}),E(t).forEach(n),o=N(h," The captcha was not correct. Please try again."),h.forEach(n),s=U(p),i=b(p,"BUTTON",{class:!0});var l=E(i);a=b(l,"ION-ICON",{class:!0,name:!0}),E(a).forEach(n),r=U(l),c=b(l,"SPAN",{});var m=E(c);f=N(m,"Try again"),m.forEach(n),l.forEach(n),this.h()},h(){L(t,"class","shield-x"),L(t,"name","shield-x"),y(e,"class","error"),L(a,"class","icon svelte-osobnu"),L(a,"name","rocket-sharp"),y(i,"class","alert svelte-osobnu")},m(p,h){O(p,e,h),u(e,t),u(e,o),O(p,s,h),O(p,i,h),u(i,a),u(i,r),u(i,c),u(c,f)},p:z,d(p){p&&n(e),p&&n(s),p&&n(i)}}}function Ce(d){let e,t;return{c(){e=_("span"),t=w("Submit")},l(o){e=b(o,"SPAN",{});var s=E(e);t=N(s,"Submit"),s.forEach(n)},m(o,s){O(o,e,s),u(e,t)},d(o){o&&n(e)}}}function ge(d){let e,t;return{c(){e=_("span"),t=w("Update")},l(o){e=b(o,"SPAN",{});var s=E(e);t=N(s,"Update"),s.forEach(n)},m(o,s){O(o,e,s),u(e,t)},d(o){o&&n(e)}}}function we(d){let e,t,o,s;const i=[_e,me],a=[];function r(c,f){return c[0]&&typeof c[7]=="undefined"?0:1}return e=r(d),t=a[e]=i[e](d),{c(){t.c(),o=K()},l(c){t.l(c),o=K()},m(c,f){a[e].m(c,f),O(c,o,f),s=!0},p(c,[f]){let p=e;e=r(c),e===p?a[e].p(c,f):(re(),F(a[p],1,1,()=>{a[p]=null}),le(),t=a[e],t?t.p(c,f):(t=a[e]=i[e](c),t.c()),X(t,1),t.m(o.parentNode,o))},i(c){s||(X(t),s=!0)},o(c){F(t),s=!1},d(c){a[e].d(c),c&&n(o)}}}function Ne(d,e,t){let o;de.subscribe(M=>{o=M});let s;R.subscribe(M=>{s=M});const i=o.token,a=o.username;let r=!1,c=null,f=!1;const p=s.edit&&typeof i!="undefined",h=s.undo&&typeof i!="undefined";let l="",m="",g=(p||h)&&typeof s.subject=="string"?s.subject:"",P=(p||h)&&typeof s.body=="string"?s.body:"",T={},q={"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com"};typeof i!="undefined"&&(q.Authorization="Token "+i);const A=ce();ue(async()=>{const M=await fetch("https://3ee.dev/captcha/start/",{method:"GET",mode:"cors"});t(1,c=await M.json()),window.addEventListener("message",function(B){const Y=B.data,H=JSON.parse(Y);t(0,r=!1),A("onCaptchaEvent",{showCaptcha:r}),H.message==="onPlayCaptchaEnd"&&H.success?S():k()})});async function S(){t(2,f=!1);const B=await(await fetch("https://3ee.dev/account/contact/",{method:"POST",headers:q,mode:"cors",body:JSON.stringify(T)})).json();typeof B!="undefined"&&typeof B.created!="undefined"&&(R.update(Y=>B),A("onMessageCreated"))}function k(){t(2,f=!0)}async function I(M){M.preventDefault();const B=new FormData(M.target);if(T=Object.fromEntries(B.entries()),!r&&typeof i=="undefined"){t(0,r=!0),A("onCaptchaEvent",{showCaptcha:r});return}if(p){const V=`https://3ee.dev/account/contact/${s.id}/`,W=await(await fetch(V,{method:"PATCH",headers:q,mode:"cors",body:JSON.stringify(T)})).json();typeof W.updated!="undefined"&&(R.update(Te=>W),A("onMessageUpdated"));return}const H=await(await fetch("https://3ee.dev/account/contact/",{method:"POST",headers:q,mode:"cors",body:JSON.stringify(T)})).json();if(typeof H!="undefined"&&typeof H.created!="undefined"){if(R.update(V=>H),h){A("onMessageUpdated");return}A("onMessageCreated")}}function j(){l=this.value,t(3,l)}function v(){m=this.value,t(4,m)}function C(){g=this.value,t(5,g)}function D(){P=this.value,t(6,P)}return[r,c,f,l,m,g,P,i,a,p,I,j,v,C,D]}class Oe extends Z{constructor(e){super(),x(this,e,Ne,we,ee,{})}}function Se(d){let e,t;return{c(){e=_("h1"),t=w("Contact Us")},l(o){e=b(o,"H1",{});var s=E(e);t=N(s,"Contact Us"),s.forEach(n)},m(o,s){O(o,e,s),u(e,t)},d(o){o&&n(e)}}}function Pe(d){let e,t,o,s,i;return{c(){e=_("h1"),t=w("Are you human?"),o=$(),s=_("h2"),i=w("Please solve the Captcha Puzzle to continue."),this.h()},l(a){e=b(a,"H1",{});var r=E(e);t=N(r,"Are you human?"),r.forEach(n),o=U(a),s=b(a,"H2",{class:!0});var c=E(s);i=N(c,"Please solve the Captcha Puzzle to continue."),c.forEach(n),this.h()},h(){y(s,"class","svelte-jwks0s")},m(a,r){O(a,e,r),u(e,t),O(a,o,r),O(a,s,r),u(s,i)},d(a){a&&n(e),a&&n(o),a&&n(s)}}}function Ae(d){let e,t,o,s,i,a,r;function c(h,l){return h[0]?Pe:Se}let f=c(d),p=f(d);return a=new Oe({}),a.$on("onCaptchaEvent",d[1]),a.$on("onMessageUpdated",d[3]),a.$on("onMessageCreated",d[2]),{c(){e=$(),t=_("section"),o=_("div"),p.c(),s=$(),i=_("article"),oe(a.$$.fragment),this.h()},l(h){ie('[data-svelte="svelte-pt07nh"]',document.head).forEach(n),e=U(h),t=b(h,"SECTION",{class:!0});var m=E(t);o=b(m,"DIV",{class:!0});var g=E(o);p.l(g),s=U(g),i=b(g,"ARTICLE",{class:!0});var P=E(i);se(a.$$.fragment,P),P.forEach(n),g.forEach(n),m.forEach(n),this.h()},h(){document.title="Welcome to 3Games | Contact",y(i,"class","svelte-jwks0s"),y(o,"class","content svelte-jwks0s"),y(t,"class","background")},m(h,l){O(h,e,l),O(h,t,l),u(t,o),p.m(o,null),u(o,s),u(o,i),ae(a,i,null),r=!0},p(h,[l]){f!==(f=c(h))&&(p.d(1),p=f(h),p&&(p.c(),p.m(o,s)))},i(h){r||(X(a.$$.fragment,h),r=!0)},o(h){F(a.$$.fragment,h),r=!1},d(h){h&&n(e),h&&n(t),p.d(),ne(a)}}}const He=fe,ze=pe,Je=!0;function Ie(d,e,t){let o,s=!1;function i(c){t(4,s=c.detail.showCaptcha)}function a(c){Q("/account/messages/response")}function r(c){Q("/account/messages/response#heading-message")}return d.$$.update=()=>{d.$$.dirty&16&&t(0,o=s)},[o,i,a,r,s]}class Re extends Z{constructor(e){super(),x(this,e,Ie,Ae,ee,{})}}export{Re as default,He as hydrate,Je as prerender,ze as router};

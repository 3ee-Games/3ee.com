import{S as oe,i as ae,s as ne,l as te,g as O,n as ie,o as V,p as fe,q as W,d as r,P as pe,v as de,e as _,t as w,k as T,c as y,a as E,h as A,m as U,b,G as i,N as G,H as R,O as se,E as F,w as re,x as le,y as ce,B as ue,F as M,a0 as me}from"../chunks/index-2a82a4a8.js";import{g as K}from"../chunks/navigation-0e6511d1.js";import{g as J}from"../chunks/config-abc8f7a4.js";import{a as Q}from"../chunks/accountStore-3492c591.js";import{C as he}from"../chunks/Captcha-866d3d2b.js";import{s as Y}from"../chunks/messagingStore-7daf7769.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-16dda89e.js";function _e(d){let e,t,o,a,f,n,c,s,u,p,m,l,h,N,S;function $(v,g){return typeof v[8]=="undefined"?ve:be}let j=$(d)(d),C=typeof d[8]=="undefined"&&Ee(d);function k(v,g){return v[3]?ge:ke}let P=k(d),I=P(d);return{c(){j.c(),e=T(),t=_("form"),C&&C.c(),o=T(),a=_("label"),f=w("subject:"),n=T(),c=_("input"),s=T(),u=_("label"),p=w("message:"),m=T(),l=_("textarea"),h=T(),I.c(),this.h()},l(v){j.l(v),e=U(v),t=y(v,"FORM",{class:!0});var g=E(t);C&&C.l(g),o=U(g),a=y(g,"LABEL",{for:!0});var L=E(a);f=A(L,"subject:"),L.forEach(r),n=U(g),c=y(g,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),s=U(g),u=y(g,"LABEL",{for:!0});var B=E(u);p=A(B,"message:"),B.forEach(r),m=U(g),l=y(g,"TEXTAREA",{name:!0,id:!0,placeholder:!0,type:!0,class:!0}),E(l).forEach(r),h=U(g),I.l(g),g.forEach(r),this.h()},h(){b(a,"for","subject"),b(c,"name","subject"),b(c,"id","subject"),b(c,"placeholder","what type of problem?"),b(c,"type","text"),c.required="true",b(u,"for","body"),b(l,"name","body"),b(l,"id","body"),b(l,"placeholder","How can we assist you?"),b(l,"type","text"),l.required="true",b(l,"class","svelte-osobnu"),b(t,"class","svelte-osobnu")},m(v,g){j.m(v,g),O(v,e,g),O(v,t,g),C&&C.m(t,null),i(t,o),i(t,a),i(a,f),i(t,n),i(t,c),G(c,d[6]),i(t,s),i(t,u),i(u,p),i(t,m),i(t,l),G(l,d[7]),i(t,h),I.m(t,null),N||(S=[R(c,"input",d[14]),R(l,"input",d[15]),R(t,"submit",d[11])],N=!0)},p(v,g){j.p(v,g),typeof v[8]=="undefined"&&C.p(v,g),g&64&&c.value!==v[6]&&G(c,v[6]),g&128&&G(l,v[7]),P===(P=k(v))&&I?I.p(v,g):(I.d(1),I=P(v),I&&(I.c(),I.m(t,null)))},i:F,o:F,d(v){j.d(v),v&&r(e),v&&r(t),C&&C.d(),I.d(),N=!1,se(S)}}}function ye(d){let e,t;return e=new he({props:{game:d[2]}}),{c(){re(e.$$.fragment)},l(o){le(e.$$.fragment,o)},m(o,a){ce(e,o,a),t=!0},p(o,a){const f={};a&4&&(f.game=o[2]),e.$set(f)},i(o){t||(W(e.$$.fragment,o),t=!0)},o(o){V(e.$$.fragment,o),t=!1},d(o){ue(e,o)}}}function be(d){let e,t,o,a,f,n,c,s,u,p,m,l,h,N,S,$,q,j,C;return{c(){e=_("p"),t=w("Greetings, "),o=_("span"),a=w(d[9]),f=w(`. Submit a support request. You'll
			be able to track the status and edit your support request.`),n=T(),c=_("p"),s=_("ion-icon"),u=w(` Check the status of your
			`),p=_("a"),m=w("messages in your account"),l=w(" ."),h=T(),N=_("p"),S=_("ion-icon"),$=w(` Stop by our
			`),q=_("a"),j=w("Discord server"),C=w(" for support from our community."),this.h()},l(k){e=y(k,"P",{});var P=E(e);t=A(P,"Greetings, "),o=y(P,"SPAN",{class:!0});var I=E(o);a=A(I,d[9]),I.forEach(r),f=A(P,`. Submit a support request. You'll
			be able to track the status and edit your support request.`),P.forEach(r),n=U(k),c=y(k,"P",{});var v=E(c);s=y(v,"ION-ICON",{class:!0,name:!0}),E(s).forEach(r),u=A(v,` Check the status of your
			`),p=y(v,"A",{href:!0});var g=E(p);m=A(g,"messages in your account"),g.forEach(r),l=A(v," ."),v.forEach(r),h=U(k),N=y(k,"P",{});var L=E(N);S=y(L,"ION-ICON",{class:!0,name:!0}),E(S).forEach(r),$=A(L,` Stop by our
			`),q=y(L,"A",{href:!0,target:!0});var B=E(q);j=A(B,"Discord server"),B.forEach(r),C=A(L," for support from our community."),L.forEach(r),this.h()},h(){b(o,"class","highlight accent"),M(s,"class","icon logo-discord svelte-osobnu"),M(s,"name","mail-sharp"),b(p,"href","/account/messages"),M(S,"class","icon logo-discord svelte-osobnu"),M(S,"name","logo-discord"),b(q,"href","https://discord.gg/3ee"),b(q,"target","_blank")},m(k,P){O(k,e,P),i(e,t),i(e,o),i(o,a),i(e,f),O(k,n,P),O(k,c,P),i(c,s),i(c,u),i(c,p),i(p,m),i(c,l),O(k,h,P),O(k,N,P),i(N,S),i(N,$),i(N,q),i(q,j),i(N,C)},p:F,d(k){k&&r(e),k&&r(n),k&&r(c),k&&r(h),k&&r(N)}}}function ve(d){let e,t,o,a,f,n,c,s,u,p,m,l,h,N,S,$,q,j;return{c(){e=_("p"),t=w("Greetings, "),o=_("span"),a=w("traveler"),f=w(`. If you have 3ee Games account,
			`),n=_("a"),c=w("login"),s=w(`
			to track, modify your support requests, and avoid playing a captcha. If you do not have an account,
			you can
			`),u=_("a"),p=w("create one now"),m=w("."),l=T(),h=_("p"),N=_("ion-icon"),S=w(` Stop by our
			`),$=_("a"),q=w("Discord server"),j=w(" for support from our community."),this.h()},l(C){e=y(C,"P",{});var k=E(e);t=A(k,"Greetings, "),o=y(k,"SPAN",{class:!0});var P=E(o);a=A(P,"traveler"),P.forEach(r),f=A(k,`. If you have 3ee Games account,
			`),n=y(k,"A",{href:!0});var I=E(n);c=A(I,"login"),I.forEach(r),s=A(k,`
			to track, modify your support requests, and avoid playing a captcha. If you do not have an account,
			you can
			`),u=y(k,"A",{href:!0});var v=E(u);p=A(v,"create one now"),v.forEach(r),m=A(k,"."),k.forEach(r),l=U(C),h=y(C,"P",{});var g=E(h);N=y(g,"ION-ICON",{class:!0,name:!0}),E(N).forEach(r),S=A(g,` Stop by our
			`),$=y(g,"A",{href:!0,target:!0});var L=E($);q=A(L,"Discord server"),L.forEach(r),j=A(g," for support from our community."),g.forEach(r),this.h()},h(){b(o,"class","highlight accent"),b(n,"href","/account/login"),b(u,"href","/account/create"),M(N,"class","icon logo-discord svelte-osobnu"),M(N,"name","logo-discord"),b($,"href","https://discord.gg/3ee"),b($,"target","_blank")},m(C,k){O(C,e,k),i(e,t),i(e,o),i(o,a),i(e,f),i(e,n),i(n,c),i(e,s),i(e,u),i(u,p),i(e,m),O(C,l,k),O(C,h,k),i(h,N),i(h,S),i(h,$),i($,q),i(h,j)},p:F,d(C){C&&r(e),C&&r(l),C&&r(h)}}}function Ee(d){let e,t,o,a,f,n,c,s,u,p,m;return{c(){e=_("label"),t=w("your email address:"),o=T(),a=_("input"),f=T(),n=_("label"),c=w("name:"),s=T(),u=_("input"),this.h()},l(l){e=y(l,"LABEL",{for:!0});var h=E(e);t=A(h,"your email address:"),h.forEach(r),o=U(l),a=y(l,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),f=U(l),n=y(l,"LABEL",{for:!0});var N=E(n);c=A(N,"name:"),N.forEach(r),s=U(l),u=y(l,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),this.h()},h(){b(e,"for","email"),b(a,"name","email"),b(a,"id","email"),b(a,"placeholder","enter your email address"),b(a,"type","email"),a.required="true",b(n,"for","name"),b(u,"name","name"),b(u,"id","name"),b(u,"placeholder","enter your name"),b(u,"type","text"),u.required="true"},m(l,h){O(l,e,h),i(e,t),O(l,o,h),O(l,a,h),G(a,d[4]),O(l,f,h),O(l,n,h),i(n,c),O(l,s,h),O(l,u,h),G(u,d[5]),p||(m=[R(a,"input",d[12]),R(u,"input",d[13])],p=!0)},p(l,h){h&16&&a.value!==l[4]&&G(a,l[4]),h&32&&u.value!==l[5]&&G(u,l[5])},d(l){l&&r(e),l&&r(o),l&&r(a),l&&r(f),l&&r(n),l&&r(s),l&&r(u),p=!1,se(m)}}}function ke(d){let e,t,o;function a(c,s){return c[10]?Ne:Ce}let n=a(d)(d);return{c(){e=_("button"),t=_("ion-icon"),o=T(),n.c(),this.h()},l(c){e=y(c,"BUTTON",{class:!0});var s=E(e);t=y(s,"ION-ICON",{class:!0,name:!0}),E(t).forEach(r),o=U(s),n.l(s),s.forEach(r),this.h()},h(){M(t,"class","icon svelte-osobnu"),M(t,"name","send-sharp"),b(e,"class","svelte-osobnu")},m(c,s){O(c,e,s),i(e,t),i(e,o),n.m(e,null)},p:F,d(c){c&&r(e),n.d()}}}function ge(d){let e,t,o,a,f,n,c,s,u;return{c(){e=_("p"),t=_("ion-icon"),o=w(" The captcha was not correct. Please try again."),a=T(),f=_("button"),n=_("ion-icon"),c=T(),s=_("span"),u=w("Try again"),this.h()},l(p){e=y(p,"P",{class:!0});var m=E(e);t=y(m,"ION-ICON",{class:!0,name:!0}),E(t).forEach(r),o=A(m," The captcha was not correct. Please try again."),m.forEach(r),a=U(p),f=y(p,"BUTTON",{class:!0});var l=E(f);n=y(l,"ION-ICON",{class:!0,name:!0}),E(n).forEach(r),c=U(l),s=y(l,"SPAN",{});var h=E(s);u=A(h,"Try again"),h.forEach(r),l.forEach(r),this.h()},h(){M(t,"class","shield-x"),M(t,"name","shield-x"),b(e,"class","error"),M(n,"class","icon svelte-osobnu"),M(n,"name","rocket-sharp"),b(f,"class","alert svelte-osobnu")},m(p,m){O(p,e,m),i(e,t),i(e,o),O(p,a,m),O(p,f,m),i(f,n),i(f,c),i(f,s),i(s,u)},p:F,d(p){p&&r(e),p&&r(a),p&&r(f)}}}function Ce(d){let e,t;return{c(){e=_("span"),t=w("Submit")},l(o){e=y(o,"SPAN",{});var a=E(e);t=A(a,"Submit"),a.forEach(r)},m(o,a){O(o,e,a),i(e,t)},d(o){o&&r(e)}}}function Ne(d){let e,t;return{c(){e=_("span"),t=w("Update")},l(o){e=y(o,"SPAN",{});var a=E(e);t=A(a,"Update"),a.forEach(r)},m(o,a){O(o,e,a),i(e,t)},d(o){o&&r(e)}}}function we(d){let e,t,o,a;const f=[ye,_e],n=[];function c(s,u){return s[1]&&typeof s[8]=="undefined"&&s[0]?0:1}return e=c(d),t=n[e]=f[e](d),{c(){t.c(),o=te()},l(s){t.l(s),o=te()},m(s,u){n[e].m(s,u),O(s,o,u),a=!0},p(s,[u]){let p=e;e=c(s),e===p?n[e].p(s,u):(ie(),V(n[p],1,1,()=>{n[p]=null}),fe(),t=n[e],t?t.p(s,u):(t=n[e]=f[e](s),t.c()),W(t,1),t.m(o.parentNode,o))},i(s){a||(W(t),a=!0)},o(s){V(t),a=!1},d(s){n[e].d(s),s&&r(o)}}}function Ae(d,e,t){let o;Q.subscribe(D=>{o=D});let a;Y.subscribe(D=>{a=D});const f=o.token,n=o.username;let c=!0,s=!1,u=null,p=!1;const m=a.edit&&typeof f!="undefined",l=a.undo&&typeof f!="undefined";let h="",N="",S=(m||l)&&typeof a.subject=="string"?a.subject:"",$=(m||l)&&typeof a.body=="string"?a.body:"",q={},j={"Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com"};typeof f!="undefined"&&(j.Authorization="Token "+f);const C=pe();de(async()=>{const D=await fetch(`${J().serviceUrl}/captcha/start/`,{method:"GET",mode:"cors"});t(2,u=await D.json()),typeof(u==null?void 0:u.captcha)!="undefined"&&!u.captcha&&t(0,c=!1),window.addEventListener("message",function(H){const X=H.data,z=JSON.parse(X);t(1,s=!1),C("onCaptchaEvent",{showCaptcha:s}),z.message==="onPlayCaptchaEnd"&&z.success?k():P()})});async function k(){t(3,p=!1);const H=await(await fetch(`${J().serviceUrl}/account/contact/`,{method:"POST",headers:j,mode:"cors",body:JSON.stringify(q)})).json();typeof H!="undefined"&&typeof H.created!="undefined"&&(Y.update(X=>H),C("onMessageCreated")),typeof umami!="undefined"&&umami.trackEvent("Captcha",{success:!0},"/contact/")}function P(){t(3,p=!0),typeof umami!="undefined"&&umami.trackEvent("Captcha",{success:!1},"/contact/")}async function I(D){D.preventDefault();const H=new FormData(D.target);if(q=Object.fromEntries(H.entries()),!s&&typeof f=="undefined"&&c){t(1,s=!0),C("onCaptchaEvent",{showCaptcha:s});return}if(m){const Z=`${J().serviceUrl}/account/contact/${a.id}/`,x=await fetch(Z,{method:"PATCH",headers:j,mode:"cors",body:JSON.stringify(q)});if(x.status===401){Q.set({}),Q.deleteLocalStorage(),C("onAuthenaticationError");return}const ee=await x.json();typeof ee.updated!="undefined"&&(Y.update(Te=>ee),C("onMessageUpdated"));return}const z=await(await fetch(`${J().serviceUrl}/account/contact/`,{method:"POST",headers:j,mode:"cors",body:JSON.stringify(q)})).json();if(typeof z!="undefined"&&typeof z.created!="undefined"){if(Y.update(Z=>z),l){C("onMessageUpdated");return}C("onMessageCreated")}}function v(){h=this.value,t(4,h)}function g(){N=this.value,t(5,N)}function L(){S=this.value,t(6,S)}function B(){$=this.value,t(7,$)}return[c,s,u,p,h,N,S,$,f,n,m,I,v,g,L,B]}class Oe extends oe{constructor(e){super(),ae(this,e,Ae,we,ne,{})}}function Se(d){let e,t;return{c(){e=_("h1"),t=w("Contact Us")},l(o){e=y(o,"H1",{});var a=E(e);t=A(a,"Contact Us"),a.forEach(r)},m(o,a){O(o,e,a),i(e,t)},d(o){o&&r(e)}}}function Pe(d){let e,t,o,a,f;return{c(){e=_("h1"),t=w("Are you human?"),o=T(),a=_("h2"),f=w("Please solve the Captcha Puzzle to continue."),this.h()},l(n){e=y(n,"H1",{});var c=E(e);t=A(c,"Are you human?"),c.forEach(r),o=U(n),a=y(n,"H2",{class:!0});var s=E(a);f=A(s,"Please solve the Captcha Puzzle to continue."),s.forEach(r),this.h()},h(){b(a,"class","svelte-jwks0s")},m(n,c){O(n,e,c),i(e,t),O(n,o,c),O(n,a,c),i(a,f)},d(n){n&&r(e),n&&r(o),n&&r(a)}}}function Ie(d){let e,t,o,a,f,n,c;function s(m,l){return m[0]?Pe:Se}let u=s(d),p=u(d);return n=new Oe({}),n.$on("onCaptchaEvent",d[1]),n.$on("onMessageUpdated",d[3]),n.$on("onMessageCreated",d[2]),n.$on("onAuthenaticationError",d[4]),{c(){e=T(),t=_("section"),o=_("div"),p.c(),a=T(),f=_("article"),re(n.$$.fragment),this.h()},l(m){me('[data-svelte="svelte-1lpcbal"]',document.head).forEach(r),e=U(m),t=y(m,"SECTION",{class:!0});var h=E(t);o=y(h,"DIV",{class:!0});var N=E(o);p.l(N),a=U(N),f=y(N,"ARTICLE",{class:!0});var S=E(f);le(n.$$.fragment,S),S.forEach(r),N.forEach(r),h.forEach(r),this.h()},h(){document.title="Welcome to 3ee Games | Contact",b(f,"class","svelte-jwks0s"),b(o,"class","content svelte-jwks0s"),b(t,"class","background")},m(m,l){O(m,e,l),O(m,t,l),i(t,o),p.m(o,null),i(o,a),i(o,f),ce(n,f,null),c=!0},p(m,[l]){u!==(u=s(m))&&(p.d(1),p=u(m),p&&(p.c(),p.m(o,a)))},i(m){c||(W(n.$$.fragment,m),c=!0)},o(m){V(n.$$.fragment,m),c=!1},d(m){m&&r(e),m&&r(t),p.d(),ue(n)}}}function je(d,e,t){let o,a=!1;function f(u){t(5,a=u.detail.showCaptcha)}function n(u){K("/account/messages/response")}function c(u){K("/account/messages/response#heading-message")}function s(u){K("/account/login/")}return d.$$.update=()=>{d.$$.dirty&32&&t(0,o=a)},[o,f,n,c,s,a]}class He extends oe{constructor(e){super(),ae(this,e,je,Ie,ne,{})}}export{He as default};

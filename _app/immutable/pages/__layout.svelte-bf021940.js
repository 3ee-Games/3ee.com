import{F as cl,S as Ve,i as Le,s as He,e as d,c as m,a as p,d as f,b as s,g as k,E as B,G as il,v as ol,H as T,I as v,J as le,K as De,k as E,l as X,m as A,t as N,h as I,L as Et,M as ge,j as ae,N as At,O as Qe,P as G,Q as P,w as ze,x as qe,R as ul,y as $e,q as ee,o as te,B as Ce,T as fl,U as vl,n as hl,p as _l,V as pl,W as dl,X as ml,Y as gl}from"../chunks/index-e0b1e98d.js";import{m as Fe}from"../chunks/menuContextStore-5a816532.js";import{a as me}from"../chunks/accountStore-d1ce1b56.js";import"../chunks/index-76d00b59.js";const bl=()=>{const n=cl("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session,updated:n.updated}},kl={subscribe(n){return bl().page.subscribe(n)}};function Qt(n,e,a){const t=n.slice();return t[18]=e[a],t}function Jt(n,e,a){const t=n.slice();return t[7]=e[a],t}function Kt(n,e,a){const t=n.slice();return t[6]=e[a],t}function yl(n){let e,a,t,l;return{c(){e=d("button"),a=d("ion-icon"),this.h()},l(i){e=m(i,"BUTTON",{class:!0});var o=p(e);a=m(o,"ION-ICON",{class:!0,name:!0}),p(a).forEach(f),o.forEach(f),this.h()},h(){T(a,"class","icon svelte-bv34uk"),T(a,"name","reorder-three-outline"),s(e,"class","svelte-bv34uk")},m(i,o){k(i,e,o),v(e,a),t||(l=le(e,"click",function(){De(n[1])&&n[1].apply(this,arguments)}),t=!0)},p(i,o){n=i},d(i){i&&f(e),t=!1,l()}}}function El(n){let e,a,t,l,i,o;function _(r,h){return r[2].length>0?Ml:Al}let u=_(n),c=u(n);return{c(){e=d("button"),a=d("ion-icon"),t=E(),c.c(),l=X(),this.h()},l(r){e=m(r,"BUTTON",{class:!0});var h=p(e);a=m(h,"ION-ICON",{class:!0,name:!0}),p(a).forEach(f),h.forEach(f),t=A(r),c.l(r),l=X(),this.h()},h(){T(a,"class","icon svelte-bv34uk"),T(a,"name","reorder-three-outline"),s(e,"class","opened svelte-bv34uk")},m(r,h){k(r,e,h),v(e,a),k(r,t,h),c.m(r,h),k(r,l,h),i||(o=le(e,"click",function(){De(n[1])&&n[1].apply(this,arguments)}),i=!0)},p(r,h){n=r,u===(u=_(n))&&c?c.p(n,h):(c.d(1),c=u(n),c&&(c.c(),c.m(l.parentNode,l)))},d(r){r&&f(e),r&&f(t),c.d(r),r&&f(l),i=!1,o()}}}function Al(n){let e,a,t=n[4].length>0&&Wt(n),l=n[6],i=[];for(let o=0;o<l.length;o+=1)i[o]=el(Qt(n,l,o));return{c(){e=d("ol"),t&&t.c(),a=E();for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=m(o,"OL",{class:!0});var _=p(e);t&&t.l(_),a=A(_);for(let u=0;u<i.length;u+=1)i[u].l(_);_.forEach(f),this.h()},h(){s(e,"class","main-menu svelte-bv34uk")},m(o,_){k(o,e,_),t&&t.m(e,null),v(e,a);for(let u=0;u<i.length;u+=1)i[u].m(e,null)},p(o,_){if(o[4].length>0?t?t.p(o,_):(t=Wt(o),t.c(),t.m(e,a)):t&&(t.d(1),t=null),_&3306){l=o[6];let u;for(u=0;u<l.length;u+=1){const c=Qt(o,l,u);i[u]?i[u].p(c,_):(i[u]=el(c),i[u].c(),i[u].m(e,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=l.length}},d(o){o&&f(e),t&&t.d(),At(i,o)}}}function Ml(n){let e,a,t,l,i,o,_,u,c,r=n[2],h=[];for(let b=0;b<r.length;b+=1)h[b]=rl(Kt(n,r,b));let g=null;return r.length||(g=tl(n)),{c(){e=d("ol"),a=d("li"),t=d("ion-icon"),l=E(),i=d("a"),o=N("Main Menu"),_=E();for(let b=0;b<h.length;b+=1)h[b].c();g&&g.c(),this.h()},l(b){e=m(b,"OL",{class:!0});var O=p(e);a=m(O,"LI",{class:!0});var z=p(a);t=m(z,"ION-ICON",{class:!0,name:!0}),p(t).forEach(f),l=A(z),i=m(z,"A",{href:!0,class:!0});var q=p(i);o=I(q,"Main Menu"),q.forEach(f),z.forEach(f),_=A(O);for(let H=0;H<h.length;H+=1)h[H].l(O);g&&g.l(O),O.forEach(f),this.h()},h(){T(t,"class","icon svelte-bv34uk"),T(t,"name","planet-sharp"),s(i,"href","#"),s(i,"class","svelte-bv34uk"),s(a,"class","nav-back-btn svelte-bv34uk"),s(e,"class","svelte-bv34uk")},m(b,O){k(b,e,O),v(e,a),v(a,t),v(a,l),v(a,i),v(i,o),v(e,_);for(let z=0;z<h.length;z+=1)h[z].m(e,null);g&&g.m(e,null),u||(c=le(i,"click",Et(n[8])),u=!0)},p(b,O){if(O&38){r=b[2];let z;for(z=0;z<r.length;z+=1){const q=Kt(b,r,z);h[z]?h[z].p(q,O):(h[z]=rl(q),h[z].c(),h[z].m(e,null))}for(;z<h.length;z+=1)h[z].d(1);h.length=r.length,!r.length&&g?g.p(b,O):r.length?g&&(g.d(1),g=null):(g=tl(b),g.c(),g.m(e,null))}},d(b){b&&f(e),At(h,b),g&&g.d(),u=!1,c()}}}function Wt(n){let e,a,t,l,i,o,_,u;return{c(){e=d("li"),a=d("ion-icon"),t=E(),l=d("a"),i=N("Back"),this.h()},l(c){e=m(c,"LI",{class:!0});var r=p(e);a=m(r,"ION-ICON",{class:!0,name:!0}),p(a).forEach(f),t=A(r),l=m(r,"A",{href:!0,class:!0});var h=p(l);i=I(h,"Back"),h.forEach(f),r.forEach(f),this.h()},h(){T(a,"class","icon svelte-bv34uk"),T(a,"name","arrow-back-circle-sharp"),s(l,"href",o="#"),s(l,"class","svelte-bv34uk"),s(e,"class","nav-back-btn svelte-bv34uk")},m(c,r){k(c,e,r),v(e,a),v(e,t),v(e,l),v(l,i),_||(u=le(l,"click",Et(n[9])),_=!0)},p:B,d(c){c&&f(e),_=!1,u()}}}function Xt(n){let e=n[18].icon+"",a;return{c(){a=N(e)},l(t){a=I(t,e)},m(t,l){k(t,a,l)},p(t,l){l&64&&e!==(e=t[18].icon+"")&&ae(a,e)},d(t){t&&f(a)}}}function wl(n){let e,a=n[18].name+"",t,l,i,o,_;return{c(){e=d("a"),t=N(a),this.h()},l(u){e=m(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var c=p(e);t=I(c,a),c.forEach(f),this.h()},h(){s(e,"sveltekit:prefetch",""),s(e,"href",l=n[18].url),s(e,"class",i=Qe(n[18].isAccount?"account":"")+" svelte-bv34uk")},m(u,c){k(u,e,c),v(e,t),o||(_=le(e,"click",n[10]),o=!0)},p(u,c){c&64&&a!==(a=u[18].name+"")&&ae(t,a),c&64&&l!==(l=u[18].url)&&s(e,"href",l),c&64&&i!==(i=Qe(u[18].isAccount?"account":"")+" svelte-bv34uk")&&s(e,"class",i)},d(u){u&&f(e),o=!1,_()}}}function Nl(n){let e,a=n[18].name+"",t,l,i,o,_,u,c=n[3]&&Yt(n);return{c(){e=d("a"),t=N(a),i=E(),c&&c.c(),o=X(),this.h()},l(r){e=m(r,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var h=p(e);t=I(h,a),h.forEach(f),i=A(r),c&&c.l(r),o=X(),this.h()},h(){s(e,"sveltekit:prefetch",""),s(e,"href",""),s(e,"class",l=Qe(n[18].isAccount?"account":"")+" svelte-bv34uk")},m(r,h){k(r,e,h),v(e,t),k(r,i,h),c&&c.m(r,h),k(r,o,h),_||(u=le(e,"click",Et(n[11])),_=!0)},p(r,h){h&64&&a!==(a=r[18].name+"")&&ae(t,a),h&64&&l!==(l=Qe(r[18].isAccount?"account":"")+" svelte-bv34uk")&&s(e,"class",l),r[3]?c?c.p(r,h):(c=Yt(r),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},d(r){r&&f(e),r&&f(i),c&&c.d(r),r&&f(o),_=!1,u()}}}function Yt(n){let e,a=n[7],t=[];for(let l=0;l<a.length;l+=1)t[l]=xt(Jt(n,a,l));return{c(){e=d("ul");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=m(l,"UL",{class:!0});var i=p(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(f),this.h()},h(){s(e,"class","account-menu svelte-bv34uk")},m(l,i){k(l,e,i);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(l,i){if(i&226){a=l[7];let o;for(o=0;o<a.length;o+=1){const _=Jt(l,a,o);t[o]?t[o].p(_,i):(t[o]=xt(_),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=a.length}},d(l){l&&f(e),At(t,l)}}}function Zt(n){let e,a,t=n[18].unreadMessages+"",l,i,o,_,u,c;return{c(){e=d("a"),a=d("span"),l=N(t),i=E(),o=d("span"),_=N("new"),this.h()},l(r){e=m(r,"A",{class:!0,href:!0});var h=p(e);a=m(h,"SPAN",{class:!0});var g=p(a);l=I(g,t),g.forEach(f),i=A(h),o=m(h,"SPAN",{class:!0});var b=p(o);_=I(b,"new"),b.forEach(f),h.forEach(f),this.h()},h(){s(a,"class","unread-messages highlight accent svelte-bv34uk"),s(o,"class","text svelte-bv34uk"),s(e,"class","unread-total svelte-bv34uk"),s(e,"href","/account/messages/")},m(r,h){k(r,e,h),v(e,a),v(a,l),v(e,i),v(e,o),v(o,_),u||(c=le(e,"click",function(){De(n[1])&&n[1].apply(this,arguments)}),u=!0)},p(r,h){n=r,h&64&&t!==(t=n[18].unreadMessages+"")&&ae(l,t)},d(r){r&&f(e),u=!1,c()}}}function xt(n){let e,a,t=n[7].name+"",l,i,o,_,u,c,r=n[7].unreadMessages>0&&Zt(n);return{c(){e=d("li"),a=d("a"),l=N(t),o=E(),r&&r.c(),_=E(),this.h()},l(h){e=m(h,"LI",{class:!0});var g=p(e);a=m(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=p(a);l=I(b,t),b.forEach(f),o=A(g),r&&r.l(g),_=A(g),g.forEach(f),this.h()},h(){s(a,"sveltekit:prefetch",""),s(a,"href",i=n[7].url),s(a,"class","svelte-bv34uk"),s(e,"class","svelte-bv34uk"),ge(e,"active",n[5].url.pathname===n[7].url)},m(h,g){k(h,e,g),v(e,a),v(a,l),v(e,o),r&&r.m(e,null),v(e,_),u||(c=le(a,"click",function(){De(n[1])&&n[1].apply(this,arguments)}),u=!0)},p(h,g){n=h,g&128&&t!==(t=n[7].name+"")&&ae(l,t),g&128&&i!==(i=n[7].url)&&s(a,"href",i),n[7].unreadMessages>0?r?r.p(n,g):(r=Zt(n),r.c(),r.m(e,_)):r&&(r.d(1),r=null),g&160&&ge(e,"active",n[5].url.pathname===n[7].url)},d(h){h&&f(e),r&&r.d(),u=!1,c()}}}function el(n){let e,a,t,l=typeof n[18].icon!="undefined"&&Xt(n);function i(u,c){return u[18].isRoot?Nl:wl}let o=i(n),_=o(n);return{c(){e=d("li"),l&&l.c(),a=E(),_.c(),t=E(),this.h()},l(u){e=m(u,"LI",{class:!0});var c=p(e);l&&l.l(c),a=A(c),_.l(c),t=A(c),c.forEach(f),this.h()},h(){s(e,"class","svelte-bv34uk"),ge(e,"active",n[5].url.pathname===n[18].url)},m(u,c){k(u,e,c),l&&l.m(e,null),v(e,a),_.m(e,null),v(e,t)},p(u,c){typeof u[18].icon!="undefined"?l?l.p(u,c):(l=Xt(u),l.c(),l.m(e,a)):l&&(l.d(1),l=null),o===(o=i(u))&&_?_.p(u,c):(_.d(1),_=o(u),_&&(_.c(),_.m(e,t))),c&96&&ge(e,"active",u[5].url.pathname===u[18].url)},d(u){u&&f(e),l&&l.d(),_.d()}}}function tl(n){let e,a,t,l=n[6].name+"",i,o,_,u=typeof n[6].icon!="undefined"&&ll(n);return{c(){e=d("li"),u&&u.c(),a=E(),t=d("a"),i=N(l),_=E(),this.h()},l(c){e=m(c,"LI",{class:!0});var r=p(e);u&&u.l(r),a=A(r),t=m(r,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var h=p(t);i=I(h,l),h.forEach(f),_=A(r),r.forEach(f),this.h()},h(){s(t,"class","secondary-url svelte-bv34uk"),s(t,"sveltekit:prefetch",""),s(t,"href",o=n[6].url),s(e,"class","svelte-bv34uk"),ge(e,"active",n[5].url.pathname===n[6].url)},m(c,r){k(c,e,r),u&&u.m(e,null),v(e,a),v(e,t),v(t,i),v(e,_)},p(c,r){typeof c[6].icon!="undefined"?u?u.p(c,r):(u=ll(c),u.c(),u.m(e,a)):u&&(u.d(1),u=null),r&4&&l!==(l=c[6].name+"")&&ae(i,l),r&4&&o!==(o=c[6].url)&&s(t,"href",o),r&36&&ge(e,"active",c[5].url.pathname===c[6].url)},d(c){c&&f(e),u&&u.d()}}}function ll(n){let e=n[6].icon+"",a;return{c(){a=N(e)},l(t){a=I(t,e)},m(t,l){k(t,a,l)},p(t,l){l&4&&e!==(e=t[6].icon+"")&&ae(a,e)},d(t){t&&f(a)}}}function al(n){let e,a,t,l=n[6].name+"",i,o,_,u,c,r=typeof n[6].icon!="undefined"&&sl(n);return{c(){e=d("li"),r&&r.c(),a=E(),t=d("a"),i=N(l),_=E(),this.h()},l(h){e=m(h,"LI",{class:!0});var g=p(e);r&&r.l(g),a=A(g),t=m(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=p(t);i=I(b,l),b.forEach(f),_=A(g),g.forEach(f),this.h()},h(){s(t,"sveltekit:prefetch",""),s(t,"href",o=n[6].url),s(t,"class","svelte-bv34uk"),s(e,"class","svelte-bv34uk"),ge(e,"active",n[5].url.pathname+n[5].url.hash===n[6].url)},m(h,g){k(h,e,g),r&&r.m(e,null),v(e,a),v(e,t),v(t,i),v(e,_),u||(c=le(t,"click",function(){De(n[1])&&n[1].apply(this,arguments)}),u=!0)},p(h,g){n=h,typeof n[6].icon!="undefined"?r?r.p(n,g):(r=sl(n),r.c(),r.m(e,a)):r&&(r.d(1),r=null),g&4&&l!==(l=n[6].name+"")&&ae(i,l),g&4&&o!==(o=n[6].url)&&s(t,"href",o),g&36&&ge(e,"active",n[5].url.pathname+n[5].url.hash===n[6].url)},d(h){h&&f(e),r&&r.d(),u=!1,c()}}}function sl(n){let e=n[6].icon+"",a;return{c(){a=N(e)},l(t){a=I(t,e)},m(t,l){k(t,a,l)},p(t,l){l&4&&e!==(e=t[6].icon+"")&&ae(a,e)},d(t){t&&f(a)}}}function rl(n){let e,a=typeof n[5].url.hash!="undefined"&&al(n);return{c(){a&&a.c(),e=X()},l(t){a&&a.l(t),e=X()},m(t,l){a&&a.m(t,l),k(t,e,l)},p(t,l){typeof t[5].url.hash!="undefined"?a?a.p(t,l):(a=al(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&f(e)}}}function Il(n){let e;function a(i,o){return i[0]?El:yl}let t=a(n),l=t(n);return{c(){e=d("nav"),l.c(),this.h()},l(i){e=m(i,"NAV",{class:!0});var o=p(e);l.l(o),o.forEach(f),this.h()},h(){s(e,"class","svelte-bv34uk")},m(i,o){k(i,e,o),l.m(e,null)},p(i,[o]){t===(t=a(i))&&l?l.p(i,o):(l.d(1),l=t(i),l&&(l.c(),l.m(e,null)))},i:B,o:B,d(i){i&&f(e),l.d()}}}function Ol(n,e,a){let t,l,i;il(n,kl,w=>a(5,i=w));let{navOpened:o=!1}=e,{toggleNavigation:_}=e,u,c=[],r=[],h=!1;me.subscribe(w=>{u=w,g()}),ol(async()=>{var w;if(((w=me)==null?void 0:w.token)!=="undefined"){let y=await(await fetch("https://3ee.dev/account/unread/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+u.token},mode:"cors"})).json();if(u.unreadMessages!==y.unreadMessages){let L=u;L.unreadMessages=y.unreadMessages,me.set(L)}const Q=setInterval(async()=>{let V=await(await fetch("https://3ee.dev/account/unread/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+u.token},mode:"cors"})).json();if(u.unreadMessages!==V.unreadMessages){let j=u;j.unreadMessages=V.unreadMessages,me.set(j)}},3e5);return()=>{clearInterval(Q)}}});function g(){a(7,r=[]),a(6,c=[{name:"About",url:"/about/"},{name:"Games",url:"/games/"},{name:"Blog",url:"/blog/"},{name:"Contact",url:"/contact/"}]),typeof u.token!="undefined"?(c.unshift({name:"Account",url:"/account/",isAccount:!0,isRoot:!0,unreadMessages:u.unreadMessages}),c.push({name:"Logout",url:"/account/logout/",isAccount:!0}),r.push({name:"Profile",url:"/account/profile/"},{name:"Messages",url:"/account/messages/",unreadMessages:u.unreadMessages})):c.push({name:"Sign Up",url:"/account/create/",isAccount:!0},{name:"Login",url:"/account/login/",isAccount:!0})}let b=[],O;Fe.subscribe(w=>{a(2,O=w)});function z(){a(13,b=O),a(2,O=[]),Fe.update(w=>O)}function q(){typeof t!="undefined"&&t.length>0&&(Fe.update(w=>t),a(13,b=[]))}function H(){_(),Fe.update(w=>[]),a(13,b=[])}function M(){a(12,h=!h)}return n.$$set=w=>{"navOpened"in w&&a(0,o=w.navOpened),"toggleNavigation"in w&&a(1,_=w.toggleNavigation)},n.$$.update=()=>{n.$$.dirty&8192&&a(4,t=b),n.$$.dirty&4096&&a(3,l=h)},[o,_,O,l,t,i,c,r,z,q,H,M,h,b]}class zl extends Ve{constructor(e){super(),Le(this,e,Ol,Il,He,{navOpened:0,toggleNavigation:1})}}function ql(n){let e,a,t,l,i,o,_,u,c;return{c(){e=G("svg"),a=G("defs"),t=G("clipPath"),l=G("ellipse"),i=G("ellipse"),o=G("g"),_=G("ellipse"),u=G("path"),c=G("ellipse"),this.h()},l(r){e=P(r,"svg",{xmlns:!0,viewBox:!0,class:!0});var h=p(e);a=P(h,"defs",{});var g=p(a);t=P(g,"clipPath",{id:!0});var b=p(t);l=P(b,"ellipse",{cx:!0,cy:!0,fill:!0,stroke:!0,"stroke-width":!0,rx:!0,ry:!0}),p(l).forEach(f),b.forEach(f),g.forEach(f),i=P(h,"ellipse",{cx:!0,cy:!0,fill:!0,stroke:!0,"stroke-width":!0,rx:!0,ry:!0}),p(i).forEach(f),o=P(h,"g",{"clip-path":!0,transform:!0});var O=p(o);_=P(O,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0}),p(_).forEach(f),u=P(O,"path",{d:!0}),p(u).forEach(f),O.forEach(f),c=P(h,"ellipse",{cx:!0,cy:!0,fill:!0,rx:!0,ry:!0}),p(c).forEach(f),h.forEach(f),this.h()},h(){s(l,"cx","106.822"),s(l,"cy","119.364"),s(l,"fill","none"),s(l,"stroke","#c43b37"),s(l,"stroke-width",".825"),s(l,"rx","49.117"),s(l,"ry","39.162"),s(t,"id","logo-path"),s(i,"cx","61.051"),s(i,"cy","51.291"),s(i,"fill","#3899ed"),s(i,"stroke","#000"),s(i,"stroke-width","2.628"),s(i,"rx","59.737"),s(i,"ry","49.977"),s(_,"cx","107.576"),s(_,"cy","119.667"),s(_,"rx","26.46"),s(_,"ry","25.524"),s(u,"d","M77.486 89.412 65.352 77.278l14.94-.163c42.264-.462 61.806-.685 65.178-.743l3.732-.065-12.144 12.145-12.143 12.144-.543-.409c-5.324-4.013-12.023-6.001-18.474-5.483-3.756.302-6.754 1.11-9.997 2.696-2.075 1.014-3.781 2.098-5.245 3.33-.532.449-.983.816-1.002.816-.02 0-5.495-5.46-12.168-12.134zm-.1 60.876L65.352 162.52l14.94.042c42.267.118 61.81.182 65.182.213l3.732.034-12.242-12.045-12.242-12.045-.538.413c-5.292 4.056-11.975 6.099-18.43 5.633-3.758-.272-6.762-1.055-10.019-2.614-2.082-.997-3.797-2.067-5.27-3.288-.536-.444-.99-.808-1.01-.808-.019 0-5.45 5.505-12.069 12.233z"),s(o,"clip-path","url(#logo-path)"),s(o,"transform","translate(-74.872 -99.587) scale(1.26422)"),s(c,"cx","73.834"),s(c,"cy","40.787"),s(c,"fill","#fff"),s(c,"rx","6.69"),s(c,"ry","6.212"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"viewBox","0 0 122.237 102.658"),s(e,"class","svelte-17ukrba")},m(r,h){k(r,e,h),v(e,a),v(a,t),v(t,l),v(e,i),v(e,o),v(o,_),v(o,u),v(e,c)},p:B,i:B,o:B,d(r){r&&f(e)}}}class $l extends Ve{constructor(e){super(),Le(this,e,null,ql,He,{})}}function Cl(n){let e,a,t,l,i,o,_,u,c,r;return a=new zl({props:{toggleNavigation:n[1],navOpened:n[0]}}),o=new $l({}),{c(){e=d("header"),ze(a.$$.fragment),t=E(),l=d("nav"),i=d("a"),ze(o.$$.fragment),_=E(),u=d("img"),this.h()},l(h){e=m(h,"HEADER",{class:!0});var g=p(e);qe(a.$$.fragment,g),t=A(g),l=m(g,"NAV",{class:!0});var b=p(l);i=m(b,"A",{href:!0,class:!0});var O=p(i);qe(o.$$.fragment,O),_=A(O),u=m(O,"IMG",{alt:!0,src:!0,class:!0}),O.forEach(f),b.forEach(f),g.forEach(f),this.h()},h(){s(u,"alt","3Games 3D text logo"),ul(u.src,c="/logo-txt-glow.png")||s(u,"src",c),s(u,"class","logo-txt svelte-yqytdq"),s(i,"href","/"),s(i,"class","svelte-yqytdq"),s(l,"class","svelte-yqytdq"),s(e,"class","svelte-yqytdq")},m(h,g){k(h,e,g),$e(a,e,null),v(e,t),v(e,l),v(l,i),$e(o,i,null),v(i,_),v(i,u),r=!0},p(h,[g]){const b={};g&2&&(b.toggleNavigation=h[1]),g&1&&(b.navOpened=h[0]),a.$set(b)},i(h){r||(ee(a.$$.fragment,h),ee(o.$$.fragment,h),r=!0)},o(h){te(a.$$.fragment,h),te(o.$$.fragment,h),r=!1},d(h){h&&f(e),Ce(a),Ce(o)}}}function Vl(n,e,a){me.subscribe(i=>{});let{navOpened:t=!1}=e,{toggleNavigation:l}=e;return n.$$set=i=>{"navOpened"in i&&a(0,t=i.navOpened),"toggleNavigation"in i&&a(1,l=i.toggleNavigation)},[t,l]}class Ll extends Ve{constructor(e){super(),Le(this,e,Vl,Cl,He,{navOpened:0,toggleNavigation:1})}}function Hl(n){let e,a='<script async defer data-website-id="a7b42ac7-8ef9-4e00-a63e-73c6726cc1ea" src="https://lifestream.3ee.com/umami.js"><\/script>',t;return{c(){e=new fl(!1),t=X(),this.h()},l(l){e=vl(l,!1),t=X(),this.h()},h(){e.a=t},m(l,i){e.m(a,l,i),k(l,t,i)},p:B,i:B,o:B,d(l){l&&f(t),l&&e.d()}}}class nl extends Ve{constructor(e){super(),Le(this,e,null,Hl,He,{})}}function Dl(n){let e,a,t,l,i,o,_,u,c,r,h,g,b,O,z,q,H;return{c(){e=d("a"),a=N("login"),t=E(),l=d("a"),i=N("create an account"),o=E(),_=d("a"),u=N("accessibility"),c=E(),r=d("a"),h=N("code of conduct"),g=E(),b=d("a"),O=N("privacy policy"),z=E(),q=d("a"),H=N("terms of service"),this.h()},l(M){e=m(M,"A",{href:!0,"aria-current":!0,class:!0});var w=p(e);a=I(w,"login"),w.forEach(f),t=A(M),l=m(M,"A",{href:!0,"aria-current":!0,class:!0});var F=p(l);i=I(F,"create an account"),F.forEach(f),o=A(M),_=m(M,"A",{href:!0,"aria-current":!0,class:!0});var y=p(_);u=I(y,"accessibility"),y.forEach(f),c=A(M),r=m(M,"A",{href:!0,"aria-current":!0,class:!0});var C=p(r);h=I(C,"code of conduct"),C.forEach(f),g=A(M),b=m(M,"A",{href:!0,"aria-current":!0,class:!0});var Q=p(b);O=I(Q,"privacy policy"),Q.forEach(f),z=A(M),q=m(M,"A",{href:!0,"aria-current":!0,class:!0});var L=p(q);H=I(L,"terms of service"),L.forEach(f),this.h()},h(){s(e,"href","/account/login"),s(e,"aria-current","page"),s(e,"class","svelte-1pv61cd"),s(l,"href","/account/create"),s(l,"aria-current","page"),s(l,"class","svelte-1pv61cd"),s(_,"href","/account/accessibility"),s(_,"aria-current","page"),s(_,"class","svelte-1pv61cd"),s(r,"href","/account/conduct"),s(r,"aria-current","page"),s(r,"class","svelte-1pv61cd"),s(b,"href","/account/privacy"),s(b,"aria-current","page"),s(b,"class","svelte-1pv61cd"),s(q,"href","/account/terms"),s(q,"aria-current","page"),s(q,"class","svelte-1pv61cd")},m(M,w){k(M,e,w),v(e,a),k(M,t,w),k(M,l,w),v(l,i),k(M,o,w),k(M,_,w),v(_,u),k(M,c,w),k(M,r,w),v(r,h),k(M,g,w),k(M,b,w),v(b,O),k(M,z,w),k(M,q,w),v(q,H)},d(M){M&&f(e),M&&f(t),M&&f(l),M&&f(o),M&&f(_),M&&f(c),M&&f(r),M&&f(g),M&&f(b),M&&f(z),M&&f(q)}}}function Tl(n){let e,a,t,l,i,o,_,u,c,r,h,g,b,O,z,q,H,M,w,F;return{c(){e=d("a"),a=N("profile"),t=E(),l=d("a"),i=N("messages"),o=E(),_=d("a"),u=N("accessibility"),c=E(),r=d("a"),h=N("code of conduct"),g=E(),b=d("a"),O=N("privacy policy"),z=E(),q=d("a"),H=N("terms of service"),M=E(),w=d("a"),F=N("logout"),this.h()},l(y){e=m(y,"A",{href:!0,"aria-current":!0,class:!0});var C=p(e);a=I(C,"profile"),C.forEach(f),t=A(y),l=m(y,"A",{href:!0,"aria-current":!0,class:!0});var Q=p(l);i=I(Q,"messages"),Q.forEach(f),o=A(y),_=m(y,"A",{href:!0,"aria-current":!0,class:!0});var L=p(_);u=I(L,"accessibility"),L.forEach(f),c=A(y),r=m(y,"A",{href:!0,"aria-current":!0,class:!0});var V=p(r);h=I(V,"code of conduct"),V.forEach(f),g=A(y),b=m(y,"A",{href:!0,"aria-current":!0,class:!0});var j=p(b);O=I(j,"privacy policy"),j.forEach(f),z=A(y),q=m(y,"A",{href:!0,"aria-current":!0,class:!0});var Y=p(q);H=I(Y,"terms of service"),Y.forEach(f),M=A(y),w=m(y,"A",{href:!0,"aria-current":!0,class:!0});var ye=p(w);F=I(ye,"logout"),ye.forEach(f),this.h()},h(){s(e,"href","/account/profile"),s(e,"aria-current","page"),s(e,"class","svelte-1pv61cd"),s(l,"href","/account/messages"),s(l,"aria-current","page"),s(l,"class","svelte-1pv61cd"),s(_,"href","/account/accessibility"),s(_,"aria-current","page"),s(_,"class","svelte-1pv61cd"),s(r,"href","/account/conduct"),s(r,"aria-current","page"),s(r,"class","svelte-1pv61cd"),s(b,"href","/account/privacy"),s(b,"aria-current","page"),s(b,"class","svelte-1pv61cd"),s(q,"href","/account/terms"),s(q,"aria-current","page"),s(q,"class","svelte-1pv61cd"),s(w,"href","/account/logout"),s(w,"aria-current","page"),s(w,"class","svelte-1pv61cd")},m(y,C){k(y,e,C),v(e,a),k(y,t,C),k(y,l,C),v(l,i),k(y,o,C),k(y,_,C),v(_,u),k(y,c,C),k(y,r,C),v(r,h),k(y,g,C),k(y,b,C),v(b,O),k(y,z,C),k(y,q,C),v(q,H),k(y,M,C),k(y,w,C),v(w,F)},d(y){y&&f(e),y&&f(t),y&&f(l),y&&f(o),y&&f(_),y&&f(c),y&&f(r),y&&f(g),y&&f(b),y&&f(z),y&&f(q),y&&f(M),y&&f(w)}}}function Gl(n){let e,a;return e=new nl({}),{c(){ze(e.$$.fragment)},l(t){qe(e.$$.fragment,t)},m(t,l){$e(e,t,l),a=!0},i(t){a||(ee(e.$$.fragment,t),a=!0)},o(t){te(e.$$.fragment,t),a=!1},d(t){Ce(e,t)}}}function Pl(n){return{c:B,l:B,m:B,i:B,o:B,d:B}}function Bl(n){let e,a;return e=new nl({}),{c(){ze(e.$$.fragment)},l(t){qe(e.$$.fragment,t)},m(t,l){$e(e,t,l),a=!0},i(t){a||(ee(e.$$.fragment,t),a=!0)},o(t){te(e.$$.fragment,t),a=!1},d(t){Ce(e,t)}}}function jl(n){let e,a,t,l,i,o,_,u,c,r,h,g,b,O,z,q,H,M,w,F,y,C,Q,L,V,j,Y,ye,Ee,Je,Ke,se,We,Xe,re,Ye,Ze,ne,xe,et,ce,tt,lt,ie,at,st,Z,oe,Ae,rt,Me,nt,ct,it,D,ue,we,ot,Ne,ut,ft,fe,vt,ht,ve,_t,pt,he,dt,mt,_e,gt,bt,pe,kt,Te,J,K,Ie,Ge;function Mt($,W){var R;return typeof $[0]!="undefined"&&typeof((R=$[0])==null?void 0:R.token)!="undefined"?Tl:Dl}let Pe=Mt(n),x=Pe(n);const wt=[Bl,Pl,Gl],be=[];function Nt($,W){var R,ke;return typeof((R=$[0])==null?void 0:R.settings)!="undefined"&&$[0].settings.track_google_analytics===!0?0:typeof((ke=$[0])==null?void 0:ke.settings)!="undefined"&&$[0].settings.track_google_analytics===!1?1:2}return J=Nt(n),K=be[J]=wt[J](n),{c(){e=d("footer"),a=d("div"),t=d("div"),l=d("div"),i=d("div"),o=G("svg"),_=G("g"),u=G("g"),c=G("path"),r=G("g"),h=G("path"),g=E(),b=d("p"),O=N("\xA9 Copyright 1997 - 2021 3Games LLC. All rights reserved."),z=E(),q=d("p"),H=N("Made with a giant barrel of "),M=d("ion-icon"),w=N(" by 3Games."),F=E(),y=d("p"),C=N("In memory of Teela \u{1F431}"),Q=E(),L=d("div"),V=d("div"),j=d("div"),Y=d("ion-icon"),ye=E(),Ee=d("h6"),Je=N("discover"),Ke=E(),se=d("a"),We=N("about"),Xe=E(),re=d("a"),Ye=N("games"),Ze=E(),ne=d("a"),xe=N("blog"),et=E(),ce=d("a"),tt=N("discord community"),lt=E(),ie=d("a"),at=N("contact"),st=E(),Z=d("div"),oe=d("div"),Ae=d("ion-icon"),rt=E(),Me=d("h6"),nt=N("account"),ct=E(),x.c(),it=E(),D=d("div"),ue=d("div"),we=d("ion-icon"),ot=E(),Ne=d("h6"),ut=N("social"),ft=E(),fe=d("a"),vt=N("github"),ht=E(),ve=d("a"),_t=N("youtube"),pt=E(),he=d("a"),dt=N("twitter"),mt=E(),_e=d("a"),gt=N("linkedin"),bt=E(),pe=d("a"),kt=N("facebook"),Te=E(),K.c(),Ie=X(),this.h()},l($){e=m($,"FOOTER",{class:!0});var W=p(e);a=m(W,"DIV",{class:!0});var R=p(a);t=m(R,"DIV",{class:!0});var ke=p(t);l=m(ke,"DIV",{class:!0});var de=p(l);i=m(de,"DIV",{class:!0});var It=p(i);o=P(It,"svg",{viewBox:!0,class:!0});var Ot=p(o);_=P(Ot,"g",{});var yt=p(_);u=P(yt,"g",{"aria-label":!0,"font-size":!0,"stroke-width":!0});var zt=p(u);c=P(zt,"path",{class:!0,d:!0}),p(c).forEach(f),zt.forEach(f),r=P(yt,"g",{"aria-label":!0,"font-size":!0,"stroke-width":!0});var qt=p(r);h=P(qt,"path",{class:!0,d:!0}),p(h).forEach(f),qt.forEach(f),yt.forEach(f),Ot.forEach(f),It.forEach(f),g=A(de),b=m(de,"P",{class:!0});var $t=p(b);O=I($t,"\xA9 Copyright 1997 - 2021 3Games LLC. All rights reserved."),$t.forEach(f),z=A(de),q=m(de,"P",{class:!0});var Be=p(q);H=I(Be,"Made with a giant barrel of "),M=m(Be,"ION-ICON",{class:!0,name:!0}),p(M).forEach(f),w=I(Be," by 3Games."),Be.forEach(f),F=A(de),y=m(de,"P",{class:!0});var Ct=p(y);C=I(Ct,"In memory of Teela \u{1F431}"),Ct.forEach(f),de.forEach(f),Q=A(ke),L=m(ke,"DIV",{class:!0});var Oe=p(L);V=m(Oe,"DIV",{class:!0});var S=p(V);j=m(S,"DIV",{class:!0});var je=p(j);Y=m(je,"ION-ICON",{class:!0,name:!0}),p(Y).forEach(f),ye=A(je),Ee=m(je,"H6",{class:!0});var Vt=p(Ee);Je=I(Vt,"discover"),Vt.forEach(f),je.forEach(f),Ke=A(S),se=m(S,"A",{href:!0,"aria-current":!0,class:!0});var Lt=p(se);We=I(Lt,"about"),Lt.forEach(f),Xe=A(S),re=m(S,"A",{href:!0,"aria-current":!0,class:!0});var Ht=p(re);Ye=I(Ht,"games"),Ht.forEach(f),Ze=A(S),ne=m(S,"A",{href:!0,"aria-current":!0,class:!0});var Dt=p(ne);xe=I(Dt,"blog"),Dt.forEach(f),et=A(S),ce=m(S,"A",{href:!0,target:!0,class:!0});var Tt=p(ce);tt=I(Tt,"discord community"),Tt.forEach(f),lt=A(S),ie=m(S,"A",{href:!0,"aria-current":!0,class:!0});var Gt=p(ie);at=I(Gt,"contact"),Gt.forEach(f),S.forEach(f),st=A(Oe),Z=m(Oe,"DIV",{class:!0});var Re=p(Z);oe=m(Re,"DIV",{class:!0});var Se=p(oe);Ae=m(Se,"ION-ICON",{class:!0,name:!0}),p(Ae).forEach(f),rt=A(Se),Me=m(Se,"H6",{class:!0});var Pt=p(Me);nt=I(Pt,"account"),Pt.forEach(f),Se.forEach(f),ct=A(Re),x.l(Re),Re.forEach(f),it=A(Oe),D=m(Oe,"DIV",{class:!0});var U=p(D);ue=m(U,"DIV",{class:!0});var Ue=p(ue);we=m(Ue,"ION-ICON",{class:!0,name:!0}),p(we).forEach(f),ot=A(Ue),Ne=m(Ue,"H6",{class:!0});var Bt=p(Ne);ut=I(Bt,"social"),Bt.forEach(f),Ue.forEach(f),ft=A(U),fe=m(U,"A",{href:!0,target:!0,class:!0});var jt=p(fe);vt=I(jt,"github"),jt.forEach(f),ht=A(U),ve=m(U,"A",{href:!0,target:!0,class:!0});var Rt=p(ve);_t=I(Rt,"youtube"),Rt.forEach(f),pt=A(U),he=m(U,"A",{href:!0,target:!0,class:!0});var St=p(he);dt=I(St,"twitter"),St.forEach(f),mt=A(U),_e=m(U,"A",{href:!0,target:!0,class:!0});var Ut=p(_e);gt=I(Ut,"linkedin"),Ut.forEach(f),bt=A(U),pe=m(U,"A",{href:!0,target:!0,class:!0});var Ft=p(pe);kt=I(Ft,"facebook"),Ft.forEach(f),U.forEach(f),Oe.forEach(f),ke.forEach(f),R.forEach(f),W.forEach(f),Te=A($),K.l($),Ie=X(),this.h()},h(){s(c,"class","three-ee-text-logo svelte-1pv61cd"),s(c,"d","M7.077 3.584H3.649v1.132H.91V3.258q0-.583.063-1.08.078-.498.313-.84.235-.343.688-.532Q2.444.6 3.242.6h.063L7.42.566h.063q.36 0 .72.051.36.035.751.309.423.309.61.703.189.377.235.875.047.497.047.96 0 .223-.015.446v.411q-.016.223-.016.446v.463q0 .463-.11.789-.093.326-.36.617.267.274.36.617.11.326.11.79v2.417q0 .446-.156.823-.141.36-.407.652-.25.274-.61.428-.345.155-.736.155H2.788q-.391 0-.735-.155-.345-.154-.595-.428-.25-.292-.407-.652-.14-.377-.14-.823V8.402h2.738v1.132h3.428v-1.68H2.961V4.853h4.116zM19.205 9.568v3.001h-8.39V.566h8.39V3.55h-5.65v1.526h4.633v2.983h-4.633v1.51zM28.499 9.568v3.001h-8.39V.566h8.39V3.55h-5.65v1.526h4.632v2.983h-4.633v1.51z"),s(u,"aria-label","3EE"),s(u,"font-size","16.383"),s(u,"stroke-width",".41"),s(h,"class","three-ee-unwrapped-text svelte-1pv61cd"),s(h,"d","M2.237 13.958v.368H1.82v1.113h-.37v-1.113h-.417v-.368zM3.555 13.954v1.481h-.368v-.556H2.72v.556h-.368v-1.481h.368v.556h.466v-.556zM4.068 13.958v1.481h-.37v-1.481zM5.35 14.356v.05l.002.05v.042l.002.038-.002.093-.006.093q-.009.061-.036.106-.025.042-.076.078-.034.023-.066.032-.03.006-.063.008l.273.49h-.422l-.27-.488h-.144v.487h-.37v-1.481h.91q.056 0 .105.02.049.02.085.058.036.036.057.087.021.048.021.105zm-.375.224v-.256h-.433v.256zM6.479 13.964q.07.021.108.053.038.03.055.068.017.038.021.082.004.045.004.093v.026q.002.01.002.023.003.03.003.07v.692q0 .06-.003.112-.002.053-.02.098-.02.044-.062.08-.04.036-.117.061-.019.005-.074.009l-.116.004h-.812v-1.481h.535q.046-.003.095-.003h.068q.055 0 .116.003.064 0 .119.004.057.002.076.006zM6.3 15.067v-.743h-.463v.743zM8.756 15.069v.37H7.62v-1.481h1.135v.368H7.99v.188h.627v.369h-.627v.186zM10.222 13.956l-.531.842v.64h-.369v-.64l-.533-.842h.436l.281.442.28-.442zM11.401 15.069v.37h-1.134v-1.481H11.4v.368h-.764v.188h.627v.369h-.627v.186zM13.477 15.069v.37h-1.135v-1.481h1.135v.368h-.764v.188h.626v.369h-.626v.186zM14.814 13.96v1.482h-.347l-.487-.762v.762h-.368V13.96h.347l.487.76v-.76zM16.136 13.958v.368h-.417v1.113h-.37v-1.113h-.417v-.368zM17.367 15.069v.37h-1.135v-1.481h1.135v.368h-.764v.188h.626v.369h-.626v.186zM18.67 14.356v.05l.002.05v.042l.002.038-.002.093-.006.093q-.008.061-.036.106-.025.042-.076.078-.034.023-.066.032-.03.006-.063.008l.273.49h-.421l-.271-.488h-.144v.487h-.37v-1.481h.91q.057 0 .105.02.049.02.085.058.036.036.057.087.021.048.021.105zm-.374.224v-.256h-.434v.256zM19.964 13.958v.368h-.417v1.113h-.37v-1.113h-.417v-.368zM20.903 13.954l.538 1.481h-.396l-.1-.277h-.45l-.1.277h-.394l.538-1.481zm-.093.834q-.013-.034-.021-.06l-.02-.053q-.008-.027-.02-.057l-.028-.076-.091.246zM21.87 13.958v1.481h-.37v-1.481zM23.186 13.96v1.482h-.348l-.486-.762v.762h-.369V13.96h.347l.487.76v-.76zM24.755 13.956v1.481h-.37v-.74l-.104.165-.097.158h-.271l-.201-.326v.743h-.37v-1.481h.35l.356.578.358-.578zM26.04 15.069v.37h-1.134v-1.481h1.134v.368h-.764v.188h.627v.369h-.627v.186zM27.377 13.96v1.482h-.347l-.486-.762v.762h-.369V13.96h.347l.487.76v-.76zM28.7 13.958v.368h-.417v1.113h-.37v-1.113h-.418v-.368z"),s(r,"aria-label","Third Eye Entertainment"),s(r,"font-size","2.117"),s(r,"stroke-width",".265"),s(o,"viewBox","0 0 30 17"),s(o,"class","svelte-1pv61cd"),s(i,"class","footer-logo footer-logo-animation svelte-1pv61cd"),s(b,"class","legal svelte-1pv61cd"),T(M,"class","heart-icon svelte-1pv61cd"),T(M,"name","heart-sharp"),s(q,"class","legal svelte-1pv61cd"),s(y,"class","legal svelte-1pv61cd"),s(l,"class","brand svelte-1pv61cd"),T(Y,"class","footer-heading-icon svelte-1pv61cd"),T(Y,"name","planet-sharp"),s(Ee,"class","svelte-1pv61cd"),s(j,"class","footer-heading svelte-1pv61cd"),s(se,"href","/about"),s(se,"aria-current","page"),s(se,"class","svelte-1pv61cd"),s(re,"href","/games"),s(re,"aria-current","page"),s(re,"class","svelte-1pv61cd"),s(ne,"href","/blog"),s(ne,"aria-current","page"),s(ne,"class","svelte-1pv61cd"),s(ce,"href","https://discord.gg/3ee"),s(ce,"target","_blank"),s(ce,"class","svelte-1pv61cd"),s(ie,"href","/contact"),s(ie,"aria-current","page"),s(ie,"class","svelte-1pv61cd"),s(V,"class","footer-category svelte-1pv61cd"),T(Ae,"class","footer-heading-icon svelte-1pv61cd"),T(Ae,"name","person-circle-sharp"),s(Me,"class","svelte-1pv61cd"),s(oe,"class","footer-heading svelte-1pv61cd"),s(Z,"class","footer-category svelte-1pv61cd"),T(we,"class","footer-heading-icon svelte-1pv61cd"),T(we,"name","chatbubbles-sharp"),s(Ne,"class","svelte-1pv61cd"),s(ue,"class","footer-heading svelte-1pv61cd"),s(fe,"href","https://github.com/3ee-Games"),s(fe,"target","_blank"),s(fe,"class","svelte-1pv61cd"),s(ve,"href","https://www.youtube.com/channel/UCv-Cy54zRQgGHe5kiqpfOGA"),s(ve,"target","_blank"),s(ve,"class","svelte-1pv61cd"),s(he,"href","https://twitter.com/3ee_Games"),s(he,"target","_blank"),s(he,"class","svelte-1pv61cd"),s(_e,"href","https://www.linkedin.com/company/3ee-games"),s(_e,"target","_blank"),s(_e,"class","svelte-1pv61cd"),s(pe,"href","https://www.facebook.com/3eecom"),s(pe,"target","_blank"),s(pe,"class","svelte-1pv61cd"),s(D,"class","footer-category svelte-1pv61cd"),s(L,"class","footer-routes svelte-1pv61cd"),s(t,"class","footer-main svelte-1pv61cd"),s(a,"class","footer-container svelte-1pv61cd"),s(e,"class","svelte-1pv61cd")},m($,W){k($,e,W),v(e,a),v(a,t),v(t,l),v(l,i),v(i,o),v(o,_),v(_,u),v(u,c),v(_,r),v(r,h),v(l,g),v(l,b),v(b,O),v(l,z),v(l,q),v(q,H),v(q,M),v(q,w),v(l,F),v(l,y),v(y,C),v(t,Q),v(t,L),v(L,V),v(V,j),v(j,Y),v(j,ye),v(j,Ee),v(Ee,Je),v(V,Ke),v(V,se),v(se,We),v(V,Xe),v(V,re),v(re,Ye),v(V,Ze),v(V,ne),v(ne,xe),v(V,et),v(V,ce),v(ce,tt),v(V,lt),v(V,ie),v(ie,at),v(L,st),v(L,Z),v(Z,oe),v(oe,Ae),v(oe,rt),v(oe,Me),v(Me,nt),v(Z,ct),x.m(Z,null),v(L,it),v(L,D),v(D,ue),v(ue,we),v(ue,ot),v(ue,Ne),v(Ne,ut),v(D,ft),v(D,fe),v(fe,vt),v(D,ht),v(D,ve),v(ve,_t),v(D,pt),v(D,he),v(he,dt),v(D,mt),v(D,_e),v(_e,gt),v(D,bt),v(D,pe),v(pe,kt),k($,Te,W),be[J].m($,W),k($,Ie,W),Ge=!0},p($,[W]){Pe!==(Pe=Mt($))&&(x.d(1),x=Pe($),x&&(x.c(),x.m(Z,null)));let R=J;J=Nt($),J!==R&&(hl(),te(be[R],1,1,()=>{be[R]=null}),_l(),K=be[J],K||(K=be[J]=wt[J]($),K.c()),ee(K,1),K.m(Ie.parentNode,Ie))},i($){Ge||(ee(K),Ge=!0)},o($){te(K),Ge=!1},d($){$&&f(e),x.d(),$&&f(Te),be[J].d($),$&&f(Ie)}}}function Rl(n,e,a){let t;return me.subscribe(l=>{a(0,t=l)}),[t]}class Sl extends Ve{constructor(e){super(),Le(this,e,Rl,jl,He,{})}}function Ul(n){let e,a,t,l,i,o;e=new Ll({props:{toggleNavigation:n[1],navOpened:n[0]}});const _=n[4].default,u=pl(_,n,n[3],null);return i=new Sl({}),{c(){ze(e.$$.fragment),a=E(),t=d("main"),u&&u.c(),l=E(),ze(i.$$.fragment),this.h()},l(c){qe(e.$$.fragment,c),a=A(c),t=m(c,"MAIN",{class:!0});var r=p(t);u&&u.l(r),r.forEach(f),l=A(c),qe(i.$$.fragment,c),this.h()},h(){s(t,"class","svelte-jq7k3t")},m(c,r){$e(e,c,r),k(c,a,r),k(c,t,r),u&&u.m(t,null),k(c,l,r),$e(i,c,r),o=!0},p(c,[r]){const h={};r&1&&(h.navOpened=c[0]),e.$set(h),u&&u.p&&(!o||r&8)&&dl(u,_,c,c[3],o?gl(_,c[3],r,null):ml(c[3]),null)},i(c){o||(ee(e.$$.fragment,c),ee(u,c),ee(i.$$.fragment,c),o=!0)},o(c){te(e.$$.fragment,c),te(u,c),te(i.$$.fragment,c),o=!1},d(c){Ce(e,c),c&&f(a),c&&f(t),u&&u.d(c),c&&f(l),Ce(i,c)}}}function Fl(n,e,a){let t,{$$slots:l={},$$scope:i}=e;me.useLocalStorage(),me.subscribe(u=>{});let o=!1;function _(){a(2,o=!o)}return n.$$set=u=>{"$$scope"in u&&a(3,i=u.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&a(0,t=o)},[t,_,o,i,l]}class Xl extends Ve{constructor(e){super(),Le(this,e,Fl,Ul,He,{})}}export{Xl as default};
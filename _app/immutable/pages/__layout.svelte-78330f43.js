import{F as hl,S as et,i as tt,s as lt,e as d,c as m,a as p,d as n,b as s,g as E,E as ye,G as il,v as ul,H as F,I as f,J as Ne,K as at,k as w,l as we,m as A,t as I,h as N,L as yt,M as T,j as $e,N as wt,O as ht,P as X,Q as Y,w as Ge,x as Te,R as pl,y as Pe,n as At,o as x,p as Mt,q as Z,B as Re,T as _l,U as dl,V as ml,W as gl}from"../chunks/index-299456bd.js";import{m as vt}from"../chunks/menuContextStore-5636f93f.js";import{a as Ve}from"../chunks/accountStore-af10db85.js";import{M as bl}from"../chunks/MediaQuery-56179968.js";import"../chunks/index-c05afa88.js";const kl=()=>{const r=hl("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},fl={subscribe(r){return kl().page.subscribe(r)}};function Kt(r,e,a){const t=r.slice();return t[18]=e[a],t}function Wt(r,e,a){const t=r.slice();return t[7]=e[a],t}function Xt(r,e,a){const t=r.slice();return t[6]=e[a],t}function El(r){let e,a,t,l;return{c(){e=d("button"),a=d("ion-icon"),this.h()},l(c){e=m(c,"BUTTON",{class:!0});var v=p(e);a=m(v,"ION-ICON",{class:!0,name:!0}),p(a).forEach(n),v.forEach(n),this.h()},h(){F(a,"class","icon svelte-aj3w6n"),F(a,"name","reorder-three-outline"),s(e,"class","svelte-aj3w6n")},m(c,v){E(c,e,v),f(e,a),t||(l=Ne(e,"click",function(){at(r[1])&&r[1].apply(this,arguments)}),t=!0)},p(c,v){r=c},d(c){c&&n(e),t=!1,l()}}}function yl(r){let e,a,t,l,c,v;function h(i,_){return i[2].length>0?Al:wl}let u=h(r),o=u(r);return{c(){e=d("button"),a=d("ion-icon"),t=w(),o.c(),l=we(),this.h()},l(i){e=m(i,"BUTTON",{class:!0});var _=p(e);a=m(_,"ION-ICON",{class:!0,name:!0}),p(a).forEach(n),_.forEach(n),t=A(i),o.l(i),l=we(),this.h()},h(){F(a,"class","icon svelte-aj3w6n"),F(a,"name","reorder-three-outline"),s(e,"class","opened svelte-aj3w6n")},m(i,_){E(i,e,_),f(e,a),E(i,t,_),o.m(i,_),E(i,l,_),c||(v=Ne(e,"click",function(){at(r[1])&&r[1].apply(this,arguments)}),c=!0)},p(i,_){r=i,u===(u=h(r))&&o?o.p(r,_):(o.d(1),o=u(r),o&&(o.c(),o.m(l.parentNode,l)))},d(i){i&&n(e),i&&n(t),o.d(i),i&&n(l),c=!1,v()}}}function wl(r){let e,a,t=r[4].length>0&&Yt(r),l=r[6],c=[];for(let v=0;v<l.length;v+=1)c[v]=ll(Kt(r,l,v));return{c(){e=d("ol"),t&&t.c(),a=w();for(let v=0;v<c.length;v+=1)c[v].c();this.h()},l(v){e=m(v,"OL",{class:!0});var h=p(e);t&&t.l(h),a=A(h);for(let u=0;u<c.length;u+=1)c[u].l(h);h.forEach(n),this.h()},h(){s(e,"class","main-menu svelte-aj3w6n")},m(v,h){E(v,e,h),t&&t.m(e,null),f(e,a);for(let u=0;u<c.length;u+=1)c[u].m(e,null)},p(v,h){if(v[4].length>0?t?t.p(v,h):(t=Yt(v),t.c(),t.m(e,a)):t&&(t.d(1),t=null),h&3306){l=v[6];let u;for(u=0;u<l.length;u+=1){const o=Kt(v,l,u);c[u]?c[u].p(o,h):(c[u]=ll(o),c[u].c(),c[u].m(e,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=l.length}},d(v){v&&n(e),t&&t.d(),wt(c,v)}}}function Al(r){let e,a,t,l,c,v,h,u,o,i=r[2],_=[];for(let b=0;b<i.length;b+=1)_[b]=cl(Xt(r,i,b));let g=null;return i.length||(g=al(r)),{c(){e=d("ol"),a=d("li"),t=d("ion-icon"),l=w(),c=d("a"),v=I("Main Menu"),h=w();for(let b=0;b<_.length;b+=1)_[b].c();g&&g.c(),this.h()},l(b){e=m(b,"OL",{class:!0});var $=p(e);a=m($,"LI",{class:!0});var O=p(a);t=m(O,"ION-ICON",{class:!0,name:!0}),p(t).forEach(n),l=A(O),c=m(O,"A",{href:!0,class:!0});var j=p(c);v=N(j,"Main Menu"),j.forEach(n),O.forEach(n),h=A($);for(let V=0;V<_.length;V+=1)_[V].l($);g&&g.l($),$.forEach(n),this.h()},h(){F(t,"class","icon svelte-aj3w6n"),F(t,"name","planet-sharp"),s(c,"href","#"),s(c,"class","svelte-aj3w6n"),s(a,"class","nav-back-btn svelte-aj3w6n"),s(e,"class","svelte-aj3w6n")},m(b,$){E(b,e,$),f(e,a),f(a,t),f(a,l),f(a,c),f(c,v),f(e,h);for(let O=0;O<_.length;O+=1)_[O].m(e,null);g&&g.m(e,null),u||(o=Ne(c,"click",yt(r[8])),u=!0)},p(b,$){if($&38){i=b[2];let O;for(O=0;O<i.length;O+=1){const j=Xt(b,i,O);_[O]?_[O].p(j,$):(_[O]=cl(j),_[O].c(),_[O].m(e,null))}for(;O<_.length;O+=1)_[O].d(1);_.length=i.length,!i.length&&g?g.p(b,$):i.length?g&&(g.d(1),g=null):(g=al(b),g.c(),g.m(e,null))}},d(b){b&&n(e),wt(_,b),g&&g.d(),u=!1,o()}}}function Yt(r){let e,a,t,l,c,v,h,u;return{c(){e=d("li"),a=d("ion-icon"),t=w(),l=d("a"),c=I("Back"),this.h()},l(o){e=m(o,"LI",{class:!0});var i=p(e);a=m(i,"ION-ICON",{class:!0,name:!0}),p(a).forEach(n),t=A(i),l=m(i,"A",{href:!0,class:!0});var _=p(l);c=N(_,"Back"),_.forEach(n),i.forEach(n),this.h()},h(){F(a,"class","icon svelte-aj3w6n"),F(a,"name","arrow-back-circle-sharp"),s(l,"href",v="#"),s(l,"class","svelte-aj3w6n"),s(e,"class","nav-back-btn svelte-aj3w6n")},m(o,i){E(o,e,i),f(e,a),f(e,t),f(e,l),f(l,c),h||(u=Ne(l,"click",yt(r[9])),h=!0)},p:ye,d(o){o&&n(e),h=!1,u()}}}function Zt(r){let e=r[18].icon+"",a;return{c(){a=I(e)},l(t){a=N(t,e)},m(t,l){E(t,a,l)},p(t,l){l&64&&e!==(e=t[18].icon+"")&&$e(a,e)},d(t){t&&n(a)}}}function Ml(r){let e,a=r[18].name+"",t,l,c,v,h;return{c(){e=d("a"),t=I(a),this.h()},l(u){e=m(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var o=p(e);t=N(o,a),o.forEach(n),this.h()},h(){s(e,"sveltekit:prefetch",""),s(e,"href",l=r[18].url),s(e,"class",c=ht(r[18].isAccount?"account":"")+" svelte-aj3w6n")},m(u,o){E(u,e,o),f(e,t),v||(h=Ne(e,"click",r[10]),v=!0)},p(u,o){o&64&&a!==(a=u[18].name+"")&&$e(t,a),o&64&&l!==(l=u[18].url)&&s(e,"href",l),o&64&&c!==(c=ht(u[18].isAccount?"account":"")+" svelte-aj3w6n")&&s(e,"class",c)},d(u){u&&n(e),v=!1,h()}}}function Il(r){let e,a=r[18].name+"",t,l,c,v,h,u,o=r[3]&&xt(r);return{c(){e=d("a"),t=I(a),c=w(),o&&o.c(),v=we(),this.h()},l(i){e=m(i,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var _=p(e);t=N(_,a),_.forEach(n),c=A(i),o&&o.l(i),v=we(),this.h()},h(){s(e,"sveltekit:prefetch",""),s(e,"href",""),s(e,"class",l=ht(r[18].isAccount?"account":"")+" svelte-aj3w6n")},m(i,_){E(i,e,_),f(e,t),E(i,c,_),o&&o.m(i,_),E(i,v,_),h||(u=Ne(e,"click",yt(r[11])),h=!0)},p(i,_){_&64&&a!==(a=i[18].name+"")&&$e(t,a),_&64&&l!==(l=ht(i[18].isAccount?"account":"")+" svelte-aj3w6n")&&s(e,"class",l),i[3]?o?o.p(i,_):(o=xt(i),o.c(),o.m(v.parentNode,v)):o&&(o.d(1),o=null)},d(i){i&&n(e),i&&n(c),o&&o.d(i),i&&n(v),h=!1,u()}}}function xt(r){let e,a=r[7],t=[];for(let l=0;l<a.length;l+=1)t[l]=tl(Wt(r,a,l));return{c(){e=d("ul");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=m(l,"UL",{class:!0});var c=p(e);for(let v=0;v<t.length;v+=1)t[v].l(c);c.forEach(n),this.h()},h(){s(e,"class","account-menu svelte-aj3w6n")},m(l,c){E(l,e,c);for(let v=0;v<t.length;v+=1)t[v].m(e,null)},p(l,c){if(c&226){a=l[7];let v;for(v=0;v<a.length;v+=1){const h=Wt(l,a,v);t[v]?t[v].p(h,c):(t[v]=tl(h),t[v].c(),t[v].m(e,null))}for(;v<t.length;v+=1)t[v].d(1);t.length=a.length}},d(l){l&&n(e),wt(t,l)}}}function el(r){let e,a,t=r[18].unreadMessages+"",l,c,v,h,u,o;return{c(){e=d("a"),a=d("span"),l=I(t),c=w(),v=d("span"),h=I("new"),this.h()},l(i){e=m(i,"A",{class:!0,href:!0});var _=p(e);a=m(_,"SPAN",{class:!0});var g=p(a);l=N(g,t),g.forEach(n),c=A(_),v=m(_,"SPAN",{class:!0});var b=p(v);h=N(b,"new"),b.forEach(n),_.forEach(n),this.h()},h(){s(a,"class","unread-messages highlight accent svelte-aj3w6n"),s(v,"class","text svelte-aj3w6n"),s(e,"class","unread-total svelte-aj3w6n"),s(e,"href","/account/messages")},m(i,_){E(i,e,_),f(e,a),f(a,l),f(e,c),f(e,v),f(v,h),u||(o=Ne(e,"click",function(){at(r[1])&&r[1].apply(this,arguments)}),u=!0)},p(i,_){r=i,_&64&&t!==(t=r[18].unreadMessages+"")&&$e(l,t)},d(i){i&&n(e),u=!1,o()}}}function tl(r){let e,a,t=r[7].name+"",l,c,v,h,u,o,i=r[7].unreadMessages>0&&el(r);return{c(){e=d("li"),a=d("a"),l=I(t),v=w(),i&&i.c(),h=w(),this.h()},l(_){e=m(_,"LI",{class:!0});var g=p(e);a=m(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=p(a);l=N(b,t),b.forEach(n),v=A(g),i&&i.l(g),h=A(g),g.forEach(n),this.h()},h(){s(a,"sveltekit:prefetch",""),s(a,"href",c=r[7].url),s(a,"class","svelte-aj3w6n"),s(e,"class","svelte-aj3w6n"),T(e,"active",r[5].url.pathname===r[7].url)},m(_,g){E(_,e,g),f(e,a),f(a,l),f(e,v),i&&i.m(e,null),f(e,h),u||(o=Ne(a,"click",function(){at(r[1])&&r[1].apply(this,arguments)}),u=!0)},p(_,g){r=_,g&128&&t!==(t=r[7].name+"")&&$e(l,t),g&128&&c!==(c=r[7].url)&&s(a,"href",c),r[7].unreadMessages>0?i?i.p(r,g):(i=el(r),i.c(),i.m(e,h)):i&&(i.d(1),i=null),g&160&&T(e,"active",r[5].url.pathname===r[7].url)},d(_){_&&n(e),i&&i.d(),u=!1,o()}}}function ll(r){let e,a,t,l=typeof r[18].icon!="undefined"&&Zt(r);function c(u,o){return u[18].isRoot?Il:Ml}let v=c(r),h=v(r);return{c(){e=d("li"),l&&l.c(),a=w(),h.c(),t=w(),this.h()},l(u){e=m(u,"LI",{class:!0});var o=p(e);l&&l.l(o),a=A(o),h.l(o),t=A(o),o.forEach(n),this.h()},h(){s(e,"class","svelte-aj3w6n"),T(e,"active",r[5].url.pathname===r[18].url)},m(u,o){E(u,e,o),l&&l.m(e,null),f(e,a),h.m(e,null),f(e,t)},p(u,o){typeof u[18].icon!="undefined"?l?l.p(u,o):(l=Zt(u),l.c(),l.m(e,a)):l&&(l.d(1),l=null),v===(v=c(u))&&h?h.p(u,o):(h.d(1),h=v(u),h&&(h.c(),h.m(e,t))),o&96&&T(e,"active",u[5].url.pathname===u[18].url)},d(u){u&&n(e),l&&l.d(),h.d()}}}function al(r){let e,a,t,l=r[6].name+"",c,v,h,u=typeof r[6].icon!="undefined"&&sl(r);return{c(){e=d("li"),u&&u.c(),a=w(),t=d("a"),c=I(l),h=w(),this.h()},l(o){e=m(o,"LI",{class:!0});var i=p(e);u&&u.l(i),a=A(i),t=m(i,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var _=p(t);c=N(_,l),_.forEach(n),h=A(i),i.forEach(n),this.h()},h(){s(t,"sveltekit:prefetch",""),s(t,"href",v=r[6].url),s(t,"class","svelte-aj3w6n"),s(e,"class","svelte-aj3w6n"),T(e,"active",r[5].url.pathname===r[6].url)},m(o,i){E(o,e,i),u&&u.m(e,null),f(e,a),f(e,t),f(t,c),f(e,h)},p(o,i){typeof o[6].icon!="undefined"?u?u.p(o,i):(u=sl(o),u.c(),u.m(e,a)):u&&(u.d(1),u=null),i&4&&l!==(l=o[6].name+"")&&$e(c,l),i&4&&v!==(v=o[6].url)&&s(t,"href",v),i&36&&T(e,"active",o[5].url.pathname===o[6].url)},d(o){o&&n(e),u&&u.d()}}}function sl(r){let e=r[6].icon+"",a;return{c(){a=I(e)},l(t){a=N(t,e)},m(t,l){E(t,a,l)},p(t,l){l&4&&e!==(e=t[6].icon+"")&&$e(a,e)},d(t){t&&n(a)}}}function rl(r){let e,a,t,l=r[6].name+"",c,v,h,u,o,i=typeof r[6].icon!="undefined"&&nl(r);return{c(){e=d("li"),i&&i.c(),a=w(),t=d("a"),c=I(l),h=w(),this.h()},l(_){e=m(_,"LI",{class:!0});var g=p(e);i&&i.l(g),a=A(g),t=m(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=p(t);c=N(b,l),b.forEach(n),h=A(g),g.forEach(n),this.h()},h(){s(t,"sveltekit:prefetch",""),s(t,"href",v=r[6].url),s(t,"class","svelte-aj3w6n"),s(e,"class","svelte-aj3w6n"),T(e,"active",r[5].url.pathname+r[5].url.hash===r[6].url)},m(_,g){E(_,e,g),i&&i.m(e,null),f(e,a),f(e,t),f(t,c),f(e,h),u||(o=Ne(t,"click",function(){at(r[1])&&r[1].apply(this,arguments)}),u=!0)},p(_,g){r=_,typeof r[6].icon!="undefined"?i?i.p(r,g):(i=nl(r),i.c(),i.m(e,a)):i&&(i.d(1),i=null),g&4&&l!==(l=r[6].name+"")&&$e(c,l),g&4&&v!==(v=r[6].url)&&s(t,"href",v),g&36&&T(e,"active",r[5].url.pathname+r[5].url.hash===r[6].url)},d(_){_&&n(e),i&&i.d(),u=!1,o()}}}function nl(r){let e=r[6].icon+"",a;return{c(){a=I(e)},l(t){a=N(t,e)},m(t,l){E(t,a,l)},p(t,l){l&4&&e!==(e=t[6].icon+"")&&$e(a,e)},d(t){t&&n(a)}}}function cl(r){let e,a=typeof r[5].url.hash!="undefined"&&rl(r);return{c(){a&&a.c(),e=we()},l(t){a&&a.l(t),e=we()},m(t,l){a&&a.m(t,l),E(t,e,l)},p(t,l){typeof t[5].url.hash!="undefined"?a?a.p(t,l):(a=rl(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&n(e)}}}function Nl(r){let e;function a(c,v){return c[0]?yl:El}let t=a(r),l=t(r);return{c(){e=d("nav"),l.c(),this.h()},l(c){e=m(c,"NAV",{class:!0});var v=p(e);l.l(v),v.forEach(n),this.h()},h(){s(e,"class","svelte-aj3w6n")},m(c,v){E(c,e,v),l.m(e,null)},p(c,[v]){t===(t=a(c))&&l?l.p(c,v):(l.d(1),l=t(c),l&&(l.c(),l.m(e,null)))},i:ye,o:ye,d(c){c&&n(e),l.d()}}}function $l(r,e,a){let t,l,c;il(r,fl,M=>a(5,c=M));let{navOpened:v=!1}=e,{toggleNavigation:h}=e,u,o=[],i=[],_=!1;Ve.subscribe(M=>{u=M,g()}),ul(async()=>{var M;if(((M=Ve)==null?void 0:M.token)!=="undefined"){let k=await(await fetch("https://3ee.dev/account/unread/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+u.token},mode:"cors"})).json();if(u.unreadMessages!==k.unreadMessages){let H=u;H.unreadMessages=k.unreadMessages,Ve.set(H)}const J=setInterval(async()=>{let q=await(await fetch("https://3ee.dev/account/unread/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"https://3ee.com",Authorization:"Token "+u.token},mode:"cors"})).json();if(u.unreadMessages!==q.unreadMessages){let G=u;G.unreadMessages=q.unreadMessages,Ve.set(G)}},3e5);return()=>{clearInterval(J)}}});function g(){a(7,i=[]),a(6,o=[{name:"About",url:"/about"},{name:"Games",url:"/games"},{name:"Blog",url:"/blog"},{name:"Contact",url:"/contact"}]),typeof u.token!="undefined"?(o.unshift({name:"Account",url:"/account",isAccount:!0,isRoot:!0,unreadMessages:u.unreadMessages}),o.push({name:"Logout",url:"/account/logout",isAccount:!0}),i.push({name:"Profile",url:"/account/profile"},{name:"Messages",url:"/account/messages",unreadMessages:u.unreadMessages})):o.push({name:"Sign Up",url:"/account/create",isAccount:!0},{name:"Login",url:"/account/login",isAccount:!0})}let b=[],$;vt.subscribe(M=>{a(2,$=M)});function O(){a(13,b=$),a(2,$=[]),vt.update(M=>$)}function j(){typeof t!="undefined"&&t.length>0&&(vt.update(M=>t),a(13,b=[]))}function V(){h(),vt.update(M=>[]),a(13,b=[])}function y(){a(12,_=!_),console.log("load profile and messages menu")}return r.$$set=M=>{"navOpened"in M&&a(0,v=M.navOpened),"toggleNavigation"in M&&a(1,h=M.toggleNavigation)},r.$$.update=()=>{r.$$.dirty&8192&&a(4,t=b),r.$$.dirty&4096&&a(3,l=_)},[v,h,$,l,t,c,o,i,O,j,V,y,_,b]}class vl extends et{constructor(e){super(),tt(this,e,$l,Nl,lt,{navOpened:0,toggleNavigation:1})}}function Ol(r){let e,a,t,l,c,v,h,u,o;return{c(){e=X("svg"),a=X("defs"),t=X("clipPath"),l=X("ellipse"),c=X("ellipse"),v=X("g"),h=X("ellipse"),u=X("path"),o=X("ellipse"),this.h()},l(i){e=Y(i,"svg",{xmlns:!0,viewBox:!0,class:!0});var _=p(e);a=Y(_,"defs",{});var g=p(a);t=Y(g,"clipPath",{id:!0});var b=p(t);l=Y(b,"ellipse",{cx:!0,cy:!0,fill:!0,stroke:!0,"stroke-width":!0,rx:!0,ry:!0}),p(l).forEach(n),b.forEach(n),g.forEach(n),c=Y(_,"ellipse",{cx:!0,cy:!0,fill:!0,stroke:!0,"stroke-width":!0,rx:!0,ry:!0}),p(c).forEach(n),v=Y(_,"g",{"clip-path":!0,transform:!0});var $=p(v);h=Y($,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0}),p(h).forEach(n),u=Y($,"path",{d:!0}),p(u).forEach(n),$.forEach(n),o=Y(_,"ellipse",{cx:!0,cy:!0,fill:!0,rx:!0,ry:!0}),p(o).forEach(n),_.forEach(n),this.h()},h(){s(l,"cx","106.822"),s(l,"cy","119.364"),s(l,"fill","none"),s(l,"stroke","#c43b37"),s(l,"stroke-width",".825"),s(l,"rx","49.117"),s(l,"ry","39.162"),s(t,"id","logo-path"),s(c,"cx","61.051"),s(c,"cy","51.291"),s(c,"fill","#3899ed"),s(c,"stroke","#000"),s(c,"stroke-width","2.628"),s(c,"rx","59.737"),s(c,"ry","49.977"),s(h,"cx","107.576"),s(h,"cy","119.667"),s(h,"rx","26.46"),s(h,"ry","25.524"),s(u,"d","M77.486 89.412 65.352 77.278l14.94-.163c42.264-.462 61.806-.685 65.178-.743l3.732-.065-12.144 12.145-12.143 12.144-.543-.409c-5.324-4.013-12.023-6.001-18.474-5.483-3.756.302-6.754 1.11-9.997 2.696-2.075 1.014-3.781 2.098-5.245 3.33-.532.449-.983.816-1.002.816-.02 0-5.495-5.46-12.168-12.134zm-.1 60.876L65.352 162.52l14.94.042c42.267.118 61.81.182 65.182.213l3.732.034-12.242-12.045-12.242-12.045-.538.413c-5.292 4.056-11.975 6.099-18.43 5.633-3.758-.272-6.762-1.055-10.019-2.614-2.082-.997-3.797-2.067-5.27-3.288-.536-.444-.99-.808-1.01-.808-.019 0-5.45 5.505-12.069 12.233z"),s(v,"clip-path","url(#logo-path)"),s(v,"transform","translate(-74.872 -99.587) scale(1.26422)"),s(o,"cx","73.834"),s(o,"cy","40.787"),s(o,"fill","#fff"),s(o,"rx","6.69"),s(o,"ry","6.212"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"viewBox","0 0 122.237 102.658"),s(e,"class","svelte-17ukrba")},m(i,_){E(i,e,_),f(e,a),f(a,t),f(t,l),f(e,c),f(e,v),f(v,h),f(v,u),f(e,o)},p:ye,i:ye,o:ye,d(i){i&&n(e)}}}class jl extends et{constructor(e){super(),tt(this,e,null,Ol,lt,{})}}function zl(r){let e,a,t,l,c,v,h;return{c(){e=d("li"),a=d("a"),t=I("sign up"),l=w(),c=d("li"),v=d("a"),h=I("login"),this.h()},l(u){e=m(u,"LI",{class:!0});var o=p(e);a=m(o,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var i=p(a);t=N(i,"sign up"),i.forEach(n),o.forEach(n),l=A(u),c=m(u,"LI",{class:!0});var _=p(c);v=m(_,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var g=p(v);h=N(g,"login"),g.forEach(n),_.forEach(n),this.h()},h(){s(a,"sveltekit:prefetch",""),s(a,"href","/account/create"),s(a,"class","svelte-1sv1pho"),s(e,"class","svelte-1sv1pho"),T(e,"active",r[3].url.pathname==="/account/create"),s(v,"sveltekit:prefetch",""),s(v,"href","/account/login"),s(v,"class","svelte-1sv1pho"),s(c,"class","svelte-1sv1pho"),T(c,"active",r[3].url.pathname==="/account/login")},m(u,o){E(u,e,o),f(e,a),f(a,t),E(u,l,o),E(u,c,o),f(c,v),f(v,h)},p(u,o){o&8&&T(e,"active",u[3].url.pathname==="/account/create"),o&8&&T(c,"active",u[3].url.pathname==="/account/login")},i:ye,o:ye,d(u){u&&n(e),u&&n(l),u&&n(c)}}}function Ll(r){let e,a;return e=new vl({props:{toggleNavigation:r[1],navOpened:r[0]}}),{c(){Ge(e.$$.fragment)},l(t){Te(e.$$.fragment,t)},m(t,l){Pe(e,t,l),a=!0},p(t,l){const c={};l&2&&(c.toggleNavigation=t[1]),l&1&&(c.navOpened=t[0]),e.$set(c)},i(t){a||(Z(e.$$.fragment,t),a=!0)},o(t){x(e.$$.fragment,t),a=!1},d(t){Re(e,t)}}}function ol(r){let e,a;return e=new vl({props:{toggleNavigation:r[1],navOpened:r[0]}}),{c(){Ge(e.$$.fragment)},l(t){Te(e.$$.fragment,t)},m(t,l){Pe(e,t,l),a=!0},p(t,l){const c={};l&2&&(c.toggleNavigation=t[1]),l&1&&(c.navOpened=t[0]),e.$set(c)},i(t){a||(Z(e.$$.fragment,t),a=!0)},o(t){x(e.$$.fragment,t),a=!1},d(t){Re(e,t)}}}function ql(r){let e,a,t=r[5]&&ol(r);return{c(){t&&t.c(),e=we()},l(l){t&&t.l(l),e=we()},m(l,c){t&&t.m(l,c),E(l,e,c),a=!0},p(l,c){l[5]?t?(t.p(l,c),c&32&&Z(t,1)):(t=ol(l),t.c(),Z(t,1),t.m(e.parentNode,e)):t&&(At(),x(t,1,1,()=>{t=null}),Mt())},i(l){a||(Z(t),a=!0)},o(l){x(t),a=!1},d(l){t&&t.d(l),l&&n(e)}}}function Vl(r){let e,a,t,l,c,v,h,u,o,i,_,g,b,$,O,j,V,y,M,Q,k,L,J,H,q,G,ee,me,K,te,Ce,le,ge,be,B,U,S,ae,se,Oe;c=new jl({});const ie=[Ll,zl],re=[];function Be(z,D){return typeof z[2].token!="undefined"?0:1}return U=Be(r),S=re[U]=ie[U](r),se=new bl({props:{query:"(min-width: 100.98px) and (max-width: 780.98px)",$$slots:{default:[ql,({matches:z})=>({5:z}),({matches:z})=>z?32:0]},$$scope:{ctx:r}}}),{c(){e=d("header"),a=d("div"),t=d("div"),l=d("a"),Ge(c.$$.fragment),v=w(),h=d("nav"),u=d("a"),o=d("img"),_=w(),g=d("ul"),b=d("li"),$=d("a"),O=I("home"),j=w(),V=d("li"),y=d("a"),M=I("about"),Q=w(),k=d("li"),L=d("a"),J=I("games"),H=w(),q=d("li"),G=d("a"),ee=I("blog"),me=w(),K=d("li"),te=d("a"),Ce=I("contact"),le=w(),ge=d("div"),be=d("nav"),B=d("ul"),S.c(),ae=w(),Ge(se.$$.fragment),this.h()},l(z){e=m(z,"HEADER",{class:!0});var D=p(e);a=m(D,"DIV",{class:!0});var ke=p(a);t=m(ke,"DIV",{class:!0});var W=p(t);l=m(W,"A",{href:!0,class:!0});var ue=p(l);Te(c.$$.fragment,ue),ue.forEach(n),W.forEach(n),ke.forEach(n),v=A(D),h=m(D,"NAV",{class:!0});var fe=p(h);u=m(fe,"A",{href:!0,class:!0});var Ue=p(u);o=m(Ue,"IMG",{alt:!0,src:!0,class:!0}),Ue.forEach(n),_=A(fe),g=m(fe,"UL",{class:!0});var R=p(g);b=m(R,"LI",{class:!0});var Se=p(b);$=m(Se,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Fe=p($);O=N(Fe,"home"),Fe.forEach(n),Se.forEach(n),j=A(R),V=m(R,"LI",{class:!0});var Qe=p(V);y=m(Qe,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var P=p(y);M=N(P,"about"),P.forEach(n),Qe.forEach(n),Q=A(R),k=m(R,"LI",{class:!0});var ve=p(k);L=m(ve,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Ae=p(L);J=N(Ae,"games"),Ae.forEach(n),ve.forEach(n),H=A(R),q=m(R,"LI",{class:!0});var Je=p(q);G=m(Je,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Me=p(G);ee=N(Me,"blog"),Me.forEach(n),Je.forEach(n),me=A(R),K=m(R,"LI",{class:!0});var Ke=p(K);te=m(Ke,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var We=p(te);Ce=N(We,"contact"),We.forEach(n),Ke.forEach(n),R.forEach(n),fe.forEach(n),le=A(D),ge=m(D,"DIV",{class:!0});var he=p(ge);be=m(he,"NAV",{class:!0});var Xe=p(be);B=m(Xe,"UL",{class:!0});var Ye=p(B);S.l(Ye),Ye.forEach(n),Xe.forEach(n),he.forEach(n),ae=A(D),Te(se.$$.fragment,D),D.forEach(n),this.h()},h(){s(l,"href","/"),s(l,"class","svelte-1sv1pho"),s(t,"class","logo svelte-1sv1pho"),s(a,"class","corner svelte-1sv1pho"),s(o,"alt","3 Games 3D text logo"),pl(o.src,i="/logo-txt-glow.png")||s(o,"src",i),s(o,"class","logo-txt svelte-1sv1pho"),s(u,"href","/"),s(u,"class","svelte-1sv1pho"),s($,"sveltekit:prefetch",""),s($,"href","/"),s($,"class","svelte-1sv1pho"),s(b,"class","home svelte-1sv1pho"),T(b,"active",r[3].url.pathname==="/"),s(y,"sveltekit:prefetch",""),s(y,"href","/about"),s(y,"class","svelte-1sv1pho"),s(V,"class","svelte-1sv1pho"),T(V,"active",r[3].url.pathname==="/about"),s(L,"sveltekit:prefetch",""),s(L,"href","/games"),s(L,"class","svelte-1sv1pho"),s(k,"class","svelte-1sv1pho"),T(k,"active",r[3].url.pathname==="/games"),s(G,"sveltekit:prefetch",""),s(G,"href","/blog"),s(G,"class","svelte-1sv1pho"),s(q,"class","svelte-1sv1pho"),T(q,"active",r[3].url.pathname==="/blog"),s(te,"sveltekit:prefetch",""),s(te,"href","/contact"),s(te,"class","svelte-1sv1pho"),s(K,"class","svelte-1sv1pho"),T(K,"active",r[3].url.pathname==="/contact"),s(g,"class","svelte-1sv1pho"),s(h,"class","svelte-1sv1pho"),s(B,"class","svelte-1sv1pho"),s(be,"class","account svelte-1sv1pho"),s(ge,"class","corner svelte-1sv1pho"),s(e,"class","svelte-1sv1pho")},m(z,D){E(z,e,D),f(e,a),f(a,t),f(t,l),Pe(c,l,null),f(e,v),f(e,h),f(h,u),f(u,o),f(h,_),f(h,g),f(g,b),f(b,$),f($,O),f(g,j),f(g,V),f(V,y),f(y,M),f(g,Q),f(g,k),f(k,L),f(L,J),f(g,H),f(g,q),f(q,G),f(G,ee),f(g,me),f(g,K),f(K,te),f(te,Ce),f(e,le),f(e,ge),f(ge,be),f(be,B),re[U].m(B,null),f(e,ae),Pe(se,e,null),Oe=!0},p(z,[D]){D&8&&T(b,"active",z[3].url.pathname==="/"),D&8&&T(V,"active",z[3].url.pathname==="/about"),D&8&&T(k,"active",z[3].url.pathname==="/games"),D&8&&T(q,"active",z[3].url.pathname==="/blog"),D&8&&T(K,"active",z[3].url.pathname==="/contact");let ke=U;U=Be(z),U===ke?re[U].p(z,D):(At(),x(re[ke],1,1,()=>{re[ke]=null}),Mt(),S=re[U],S?S.p(z,D):(S=re[U]=ie[U](z),S.c()),Z(S,1),S.m(B,null));const W={};D&99&&(W.$$scope={dirty:D,ctx:z}),se.$set(W)},i(z){Oe||(Z(c.$$.fragment,z),Z(S),Z(se.$$.fragment,z),Oe=!0)},o(z){x(c.$$.fragment,z),x(S),x(se.$$.fragment,z),Oe=!1},d(z){z&&n(e),Re(c),re[U].d(),Re(se)}}}function Cl(r,e,a){let t;il(r,fl,h=>a(3,t=h));let l;Ve.subscribe(h=>{a(2,l=h)});let{navOpened:c=!1}=e,{toggleNavigation:v}=e;return r.$$set=h=>{"navOpened"in h&&a(0,c=h.navOpened),"toggleNavigation"in h&&a(1,v=h.toggleNavigation)},[c,v,l,t]}class Dl extends et{constructor(e){super(),tt(this,e,Cl,Vl,lt,{navOpened:0,toggleNavigation:1})}}function Hl(r){return ul(async()=>{window.dataLayer=window.dataLayer||[];function e(){dataLayer.push(arguments)}e("js",new Date),e("config","UA-12079715-1")}),[]}class Gl extends et{constructor(e){super(),tt(this,e,Hl,null,lt,{})}}function Tl(r){let e,a,t,l,c,v,h,u,o,i,_,g,b,$,O,j,V;return{c(){e=d("a"),a=I("login"),t=w(),l=d("a"),c=I("create an account"),v=w(),h=d("a"),u=I("accessibility"),o=w(),i=d("a"),_=I("code of conduct"),g=w(),b=d("a"),$=I("privacy policy"),O=w(),j=d("a"),V=I("terms of service"),this.h()},l(y){e=m(y,"A",{href:!0,"aria-current":!0,class:!0});var M=p(e);a=N(M,"login"),M.forEach(n),t=A(y),l=m(y,"A",{href:!0,"aria-current":!0,class:!0});var Q=p(l);c=N(Q,"create an account"),Q.forEach(n),v=A(y),h=m(y,"A",{href:!0,"aria-current":!0,class:!0});var k=p(h);u=N(k,"accessibility"),k.forEach(n),o=A(y),i=m(y,"A",{href:!0,"aria-current":!0,class:!0});var L=p(i);_=N(L,"code of conduct"),L.forEach(n),g=A(y),b=m(y,"A",{href:!0,"aria-current":!0,class:!0});var J=p(b);$=N(J,"privacy policy"),J.forEach(n),O=A(y),j=m(y,"A",{href:!0,"aria-current":!0,class:!0});var H=p(j);V=N(H,"terms of service"),H.forEach(n),this.h()},h(){s(e,"href","/account/login"),s(e,"aria-current","page"),s(e,"class","svelte-1pv61cd"),s(l,"href","/account/create"),s(l,"aria-current","page"),s(l,"class","svelte-1pv61cd"),s(h,"href","/account/accessibility"),s(h,"aria-current","page"),s(h,"class","svelte-1pv61cd"),s(i,"href","/account/conduct"),s(i,"aria-current","page"),s(i,"class","svelte-1pv61cd"),s(b,"href","/account/privacy"),s(b,"aria-current","page"),s(b,"class","svelte-1pv61cd"),s(j,"href","/account/terms"),s(j,"aria-current","page"),s(j,"class","svelte-1pv61cd")},m(y,M){E(y,e,M),f(e,a),E(y,t,M),E(y,l,M),f(l,c),E(y,v,M),E(y,h,M),f(h,u),E(y,o,M),E(y,i,M),f(i,_),E(y,g,M),E(y,b,M),f(b,$),E(y,O,M),E(y,j,M),f(j,V)},d(y){y&&n(e),y&&n(t),y&&n(l),y&&n(v),y&&n(h),y&&n(o),y&&n(i),y&&n(g),y&&n(b),y&&n(O),y&&n(j)}}}function Pl(r){let e,a,t,l,c,v,h,u,o,i,_,g,b,$,O,j,V,y,M,Q;return{c(){e=d("a"),a=I("profile"),t=w(),l=d("a"),c=I("messages"),v=w(),h=d("a"),u=I("accessibility"),o=w(),i=d("a"),_=I("code of conduct"),g=w(),b=d("a"),$=I("privacy policy"),O=w(),j=d("a"),V=I("terms of service"),y=w(),M=d("a"),Q=I("logout"),this.h()},l(k){e=m(k,"A",{href:!0,"aria-current":!0,class:!0});var L=p(e);a=N(L,"profile"),L.forEach(n),t=A(k),l=m(k,"A",{href:!0,"aria-current":!0,class:!0});var J=p(l);c=N(J,"messages"),J.forEach(n),v=A(k),h=m(k,"A",{href:!0,"aria-current":!0,class:!0});var H=p(h);u=N(H,"accessibility"),H.forEach(n),o=A(k),i=m(k,"A",{href:!0,"aria-current":!0,class:!0});var q=p(i);_=N(q,"code of conduct"),q.forEach(n),g=A(k),b=m(k,"A",{href:!0,"aria-current":!0,class:!0});var G=p(b);$=N(G,"privacy policy"),G.forEach(n),O=A(k),j=m(k,"A",{href:!0,"aria-current":!0,class:!0});var ee=p(j);V=N(ee,"terms of service"),ee.forEach(n),y=A(k),M=m(k,"A",{href:!0,"aria-current":!0,class:!0});var me=p(M);Q=N(me,"logout"),me.forEach(n),this.h()},h(){s(e,"href","/account/profile"),s(e,"aria-current","page"),s(e,"class","svelte-1pv61cd"),s(l,"href","/account/messages"),s(l,"aria-current","page"),s(l,"class","svelte-1pv61cd"),s(h,"href","/account/accessibility"),s(h,"aria-current","page"),s(h,"class","svelte-1pv61cd"),s(i,"href","/account/conduct"),s(i,"aria-current","page"),s(i,"class","svelte-1pv61cd"),s(b,"href","/account/privacy"),s(b,"aria-current","page"),s(b,"class","svelte-1pv61cd"),s(j,"href","/account/terms"),s(j,"aria-current","page"),s(j,"class","svelte-1pv61cd"),s(M,"href","/account/logout"),s(M,"aria-current","page"),s(M,"class","svelte-1pv61cd")},m(k,L){E(k,e,L),f(e,a),E(k,t,L),E(k,l,L),f(l,c),E(k,v,L),E(k,h,L),f(h,u),E(k,o,L),E(k,i,L),f(i,_),E(k,g,L),E(k,b,L),f(b,$),E(k,O,L),E(k,j,L),f(j,V),E(k,y,L),E(k,M,L),f(M,Q)},d(k){k&&n(e),k&&n(t),k&&n(l),k&&n(v),k&&n(h),k&&n(o),k&&n(i),k&&n(g),k&&n(b),k&&n(O),k&&n(j),k&&n(y),k&&n(M)}}}function Rl(r){let e,a;return e=new Gl({}),{c(){Ge(e.$$.fragment)},l(t){Te(e.$$.fragment,t)},m(t,l){Pe(e,t,l),a=!0},i(t){a||(Z(e.$$.fragment,t),a=!0)},o(t){x(e.$$.fragment,t),a=!1},d(t){Re(e,t)}}}function Bl(r){let e;return{c(){e=d("hr")},l(a){e=m(a,"HR",{})},m(a,t){E(a,e,t)},i:ye,o:ye,d(a){a&&n(e)}}}function Ul(r){let e,a,t,l,c,v,h,u,o,i,_,g,b,$,O,j,V,y,M,Q,k,L,J,H,q,G,ee,me,K,te,Ce,le,ge,be,B,U,S,ae,se,Oe,ie,re,Be,z,D,ke,W,ue,fe,Ue,R,Se,Fe,Qe,P,ve,Ae,Je,Me,Ke,We,he,Xe,Ye,je,pt,_t,ze,dt,mt,Le,gt,bt,qe,kt,st,pe,_e,Ze,rt;function It(C,Ee){var ne;return typeof C[0]!="undefined"&&typeof((ne=C[0])==null?void 0:ne.token)!="undefined"?Pl:Tl}let nt=It(r),Ie=nt(r);const Nt=[Bl,Rl],De=[];function $t(C,Ee){var ne,He,de;return typeof((ne=C[0])==null?void 0:ne.settings)!="undefined"&&!((de=(He=C[0])==null?void 0:He.settings)!=null&&de.track_google_analytics)?0:1}return pe=$t(r),_e=De[pe]=Nt[pe](r),{c(){e=d("footer"),a=d("div"),t=d("div"),l=d("div"),c=d("div"),v=X("svg"),h=X("g"),u=X("g"),o=X("path"),i=X("g"),_=X("path"),g=w(),b=d("p"),$=I("\xA9 Copyright 1997 - 2021 3Games LLC. All rights reserved."),O=w(),j=d("p"),V=I("Made with a giant barrel of "),y=d("ion-icon"),M=I(" by 3Games."),Q=w(),k=d("p"),L=I("In memory of Teela \u{1F431}"),J=w(),H=d("div"),q=d("div"),G=d("div"),ee=d("ion-icon"),me=w(),K=d("h6"),te=I("discover"),Ce=w(),le=d("a"),ge=I("about"),be=w(),B=d("a"),U=I("games"),S=w(),ae=d("a"),se=I("blog"),Oe=w(),ie=d("a"),re=I("discord community"),Be=w(),z=d("a"),D=I("contact"),ke=w(),W=d("div"),ue=d("div"),fe=d("ion-icon"),Ue=w(),R=d("h6"),Se=I("account"),Fe=w(),Ie.c(),Qe=w(),P=d("div"),ve=d("div"),Ae=d("ion-icon"),Je=w(),Me=d("h6"),Ke=I("social"),We=w(),he=d("a"),Xe=I("github"),Ye=w(),je=d("a"),pt=I("youtube"),_t=w(),ze=d("a"),dt=I("twitter"),mt=w(),Le=d("a"),gt=I("linkedin"),bt=w(),qe=d("a"),kt=I("facebook"),st=w(),_e.c(),Ze=we(),this.h()},l(C){e=m(C,"FOOTER",{class:!0});var Ee=p(e);a=m(Ee,"DIV",{class:!0});var ne=p(a);t=m(ne,"DIV",{class:!0});var He=p(t);l=m(He,"DIV",{class:!0});var de=p(l);c=m(de,"DIV",{class:!0});var Ot=p(c);v=Y(Ot,"svg",{viewBox:!0,class:!0});var jt=p(v);h=Y(jt,"g",{});var Et=p(h);u=Y(Et,"g",{"aria-label":!0,"font-size":!0,"stroke-width":!0});var zt=p(u);o=Y(zt,"path",{class:!0,d:!0}),p(o).forEach(n),zt.forEach(n),i=Y(Et,"g",{"aria-label":!0,"font-size":!0,"stroke-width":!0});var Lt=p(i);_=Y(Lt,"path",{class:!0,d:!0}),p(_).forEach(n),Lt.forEach(n),Et.forEach(n),jt.forEach(n),Ot.forEach(n),g=A(de),b=m(de,"P",{class:!0});var qt=p(b);$=N(qt,"\xA9 Copyright 1997 - 2021 3Games LLC. All rights reserved."),qt.forEach(n),O=A(de),j=m(de,"P",{class:!0});var ct=p(j);V=N(ct,"Made with a giant barrel of "),y=m(ct,"ION-ICON",{class:!0,name:!0}),p(y).forEach(n),M=N(ct," by 3Games."),ct.forEach(n),Q=A(de),k=m(de,"P",{class:!0});var Vt=p(k);L=N(Vt,"In memory of Teela \u{1F431}"),Vt.forEach(n),de.forEach(n),J=A(He),H=m(He,"DIV",{class:!0});var xe=p(H);q=m(xe,"DIV",{class:!0});var ce=p(q);G=m(ce,"DIV",{class:!0});var ot=p(G);ee=m(ot,"ION-ICON",{class:!0,name:!0}),p(ee).forEach(n),me=A(ot),K=m(ot,"H6",{class:!0});var Ct=p(K);te=N(Ct,"discover"),Ct.forEach(n),ot.forEach(n),Ce=A(ce),le=m(ce,"A",{href:!0,"aria-current":!0,class:!0});var Dt=p(le);ge=N(Dt,"about"),Dt.forEach(n),be=A(ce),B=m(ce,"A",{href:!0,"aria-current":!0,class:!0});var Ht=p(B);U=N(Ht,"games"),Ht.forEach(n),S=A(ce),ae=m(ce,"A",{href:!0,"aria-current":!0,class:!0});var Gt=p(ae);se=N(Gt,"blog"),Gt.forEach(n),Oe=A(ce),ie=m(ce,"A",{href:!0,target:!0,class:!0});var Tt=p(ie);re=N(Tt,"discord community"),Tt.forEach(n),Be=A(ce),z=m(ce,"A",{href:!0,"aria-current":!0,class:!0});var Pt=p(z);D=N(Pt,"contact"),Pt.forEach(n),ce.forEach(n),ke=A(xe),W=m(xe,"DIV",{class:!0});var it=p(W);ue=m(it,"DIV",{class:!0});var ut=p(ue);fe=m(ut,"ION-ICON",{class:!0,name:!0}),p(fe).forEach(n),Ue=A(ut),R=m(ut,"H6",{class:!0});var Rt=p(R);Se=N(Rt,"account"),Rt.forEach(n),ut.forEach(n),Fe=A(it),Ie.l(it),it.forEach(n),Qe=A(xe),P=m(xe,"DIV",{class:!0});var oe=p(P);ve=m(oe,"DIV",{class:!0});var ft=p(ve);Ae=m(ft,"ION-ICON",{class:!0,name:!0}),p(Ae).forEach(n),Je=A(ft),Me=m(ft,"H6",{class:!0});var Bt=p(Me);Ke=N(Bt,"social"),Bt.forEach(n),ft.forEach(n),We=A(oe),he=m(oe,"A",{href:!0,target:!0,class:!0});var Ut=p(he);Xe=N(Ut,"github"),Ut.forEach(n),Ye=A(oe),je=m(oe,"A",{href:!0,target:!0,class:!0});var St=p(je);pt=N(St,"youtube"),St.forEach(n),_t=A(oe),ze=m(oe,"A",{href:!0,target:!0,class:!0});var Ft=p(ze);dt=N(Ft,"twitter"),Ft.forEach(n),mt=A(oe),Le=m(oe,"A",{href:!0,target:!0,class:!0});var Qt=p(Le);gt=N(Qt,"linkedin"),Qt.forEach(n),bt=A(oe),qe=m(oe,"A",{href:!0,target:!0,class:!0});var Jt=p(qe);kt=N(Jt,"facebook"),Jt.forEach(n),oe.forEach(n),xe.forEach(n),He.forEach(n),ne.forEach(n),Ee.forEach(n),st=A(C),_e.l(C),Ze=we(),this.h()},h(){s(o,"class","three-ee-text-logo svelte-1pv61cd"),s(o,"d","M7.077 3.584H3.649v1.132H.91V3.258q0-.583.063-1.08.078-.498.313-.84.235-.343.688-.532Q2.444.6 3.242.6h.063L7.42.566h.063q.36 0 .72.051.36.035.751.309.423.309.61.703.189.377.235.875.047.497.047.96 0 .223-.015.446v.411q-.016.223-.016.446v.463q0 .463-.11.789-.093.326-.36.617.267.274.36.617.11.326.11.79v2.417q0 .446-.156.823-.141.36-.407.652-.25.274-.61.428-.345.155-.736.155H2.788q-.391 0-.735-.155-.345-.154-.595-.428-.25-.292-.407-.652-.14-.377-.14-.823V8.402h2.738v1.132h3.428v-1.68H2.961V4.853h4.116zM19.205 9.568v3.001h-8.39V.566h8.39V3.55h-5.65v1.526h4.633v2.983h-4.633v1.51zM28.499 9.568v3.001h-8.39V.566h8.39V3.55h-5.65v1.526h4.632v2.983h-4.633v1.51z"),s(u,"aria-label","3EE"),s(u,"font-size","16.383"),s(u,"stroke-width",".41"),s(_,"class","three-ee-unwrapped-text svelte-1pv61cd"),s(_,"d","M2.237 13.958v.368H1.82v1.113h-.37v-1.113h-.417v-.368zM3.555 13.954v1.481h-.368v-.556H2.72v.556h-.368v-1.481h.368v.556h.466v-.556zM4.068 13.958v1.481h-.37v-1.481zM5.35 14.356v.05l.002.05v.042l.002.038-.002.093-.006.093q-.009.061-.036.106-.025.042-.076.078-.034.023-.066.032-.03.006-.063.008l.273.49h-.422l-.27-.488h-.144v.487h-.37v-1.481h.91q.056 0 .105.02.049.02.085.058.036.036.057.087.021.048.021.105zm-.375.224v-.256h-.433v.256zM6.479 13.964q.07.021.108.053.038.03.055.068.017.038.021.082.004.045.004.093v.026q.002.01.002.023.003.03.003.07v.692q0 .06-.003.112-.002.053-.02.098-.02.044-.062.08-.04.036-.117.061-.019.005-.074.009l-.116.004h-.812v-1.481h.535q.046-.003.095-.003h.068q.055 0 .116.003.064 0 .119.004.057.002.076.006zM6.3 15.067v-.743h-.463v.743zM8.756 15.069v.37H7.62v-1.481h1.135v.368H7.99v.188h.627v.369h-.627v.186zM10.222 13.956l-.531.842v.64h-.369v-.64l-.533-.842h.436l.281.442.28-.442zM11.401 15.069v.37h-1.134v-1.481H11.4v.368h-.764v.188h.627v.369h-.627v.186zM13.477 15.069v.37h-1.135v-1.481h1.135v.368h-.764v.188h.626v.369h-.626v.186zM14.814 13.96v1.482h-.347l-.487-.762v.762h-.368V13.96h.347l.487.76v-.76zM16.136 13.958v.368h-.417v1.113h-.37v-1.113h-.417v-.368zM17.367 15.069v.37h-1.135v-1.481h1.135v.368h-.764v.188h.626v.369h-.626v.186zM18.67 14.356v.05l.002.05v.042l.002.038-.002.093-.006.093q-.008.061-.036.106-.025.042-.076.078-.034.023-.066.032-.03.006-.063.008l.273.49h-.421l-.271-.488h-.144v.487h-.37v-1.481h.91q.057 0 .105.02.049.02.085.058.036.036.057.087.021.048.021.105zm-.374.224v-.256h-.434v.256zM19.964 13.958v.368h-.417v1.113h-.37v-1.113h-.417v-.368zM20.903 13.954l.538 1.481h-.396l-.1-.277h-.45l-.1.277h-.394l.538-1.481zm-.093.834q-.013-.034-.021-.06l-.02-.053q-.008-.027-.02-.057l-.028-.076-.091.246zM21.87 13.958v1.481h-.37v-1.481zM23.186 13.96v1.482h-.348l-.486-.762v.762h-.369V13.96h.347l.487.76v-.76zM24.755 13.956v1.481h-.37v-.74l-.104.165-.097.158h-.271l-.201-.326v.743h-.37v-1.481h.35l.356.578.358-.578zM26.04 15.069v.37h-1.134v-1.481h1.134v.368h-.764v.188h.627v.369h-.627v.186zM27.377 13.96v1.482h-.347l-.486-.762v.762h-.369V13.96h.347l.487.76v-.76zM28.7 13.958v.368h-.417v1.113h-.37v-1.113h-.418v-.368z"),s(i,"aria-label","Third Eye Entertainment"),s(i,"font-size","2.117"),s(i,"stroke-width",".265"),s(v,"viewBox","0 0 30 17"),s(v,"class","svelte-1pv61cd"),s(c,"class","footer-logo footer-logo-animation svelte-1pv61cd"),s(b,"class","legal svelte-1pv61cd"),F(y,"class","heart-icon svelte-1pv61cd"),F(y,"name","heart-sharp"),s(j,"class","legal svelte-1pv61cd"),s(k,"class","legal svelte-1pv61cd"),s(l,"class","brand svelte-1pv61cd"),F(ee,"class","footer-heading-icon svelte-1pv61cd"),F(ee,"name","planet-sharp"),s(K,"class","svelte-1pv61cd"),s(G,"class","footer-heading svelte-1pv61cd"),s(le,"href","/about"),s(le,"aria-current","page"),s(le,"class","svelte-1pv61cd"),s(B,"href","/games"),s(B,"aria-current","page"),s(B,"class","svelte-1pv61cd"),s(ae,"href","/blog"),s(ae,"aria-current","page"),s(ae,"class","svelte-1pv61cd"),s(ie,"href","https://discord.gg/3ee"),s(ie,"target","_blank"),s(ie,"class","svelte-1pv61cd"),s(z,"href","/contact"),s(z,"aria-current","page"),s(z,"class","svelte-1pv61cd"),s(q,"class","footer-category svelte-1pv61cd"),F(fe,"class","footer-heading-icon svelte-1pv61cd"),F(fe,"name","person-circle-sharp"),s(R,"class","svelte-1pv61cd"),s(ue,"class","footer-heading svelte-1pv61cd"),s(W,"class","footer-category svelte-1pv61cd"),F(Ae,"class","footer-heading-icon svelte-1pv61cd"),F(Ae,"name","chatbubbles-sharp"),s(Me,"class","svelte-1pv61cd"),s(ve,"class","footer-heading svelte-1pv61cd"),s(he,"href","https://github.com/3ee-Games"),s(he,"target","_blank"),s(he,"class","svelte-1pv61cd"),s(je,"href","https://www.youtube.com/channel/UCv-Cy54zRQgGHe5kiqpfOGA"),s(je,"target","_blank"),s(je,"class","svelte-1pv61cd"),s(ze,"href","https://twitter.com/3ee_Games"),s(ze,"target","_blank"),s(ze,"class","svelte-1pv61cd"),s(Le,"href","https://www.linkedin.com/company/3ee-games"),s(Le,"target","_blank"),s(Le,"class","svelte-1pv61cd"),s(qe,"href","https://www.facebook.com/3eecom"),s(qe,"target","_blank"),s(qe,"class","svelte-1pv61cd"),s(P,"class","footer-category svelte-1pv61cd"),s(H,"class","footer-routes svelte-1pv61cd"),s(t,"class","footer-main svelte-1pv61cd"),s(a,"class","footer-container svelte-1pv61cd"),s(e,"class","svelte-1pv61cd")},m(C,Ee){E(C,e,Ee),f(e,a),f(a,t),f(t,l),f(l,c),f(c,v),f(v,h),f(h,u),f(u,o),f(h,i),f(i,_),f(l,g),f(l,b),f(b,$),f(l,O),f(l,j),f(j,V),f(j,y),f(j,M),f(l,Q),f(l,k),f(k,L),f(t,J),f(t,H),f(H,q),f(q,G),f(G,ee),f(G,me),f(G,K),f(K,te),f(q,Ce),f(q,le),f(le,ge),f(q,be),f(q,B),f(B,U),f(q,S),f(q,ae),f(ae,se),f(q,Oe),f(q,ie),f(ie,re),f(q,Be),f(q,z),f(z,D),f(H,ke),f(H,W),f(W,ue),f(ue,fe),f(ue,Ue),f(ue,R),f(R,Se),f(W,Fe),Ie.m(W,null),f(H,Qe),f(H,P),f(P,ve),f(ve,Ae),f(ve,Je),f(ve,Me),f(Me,Ke),f(P,We),f(P,he),f(he,Xe),f(P,Ye),f(P,je),f(je,pt),f(P,_t),f(P,ze),f(ze,dt),f(P,mt),f(P,Le),f(Le,gt),f(P,bt),f(P,qe),f(qe,kt),E(C,st,Ee),De[pe].m(C,Ee),E(C,Ze,Ee),rt=!0},p(C,[Ee]){nt!==(nt=It(C))&&(Ie.d(1),Ie=nt(C),Ie&&(Ie.c(),Ie.m(W,null)));let ne=pe;pe=$t(C),pe!==ne&&(At(),x(De[ne],1,1,()=>{De[ne]=null}),Mt(),_e=De[pe],_e||(_e=De[pe]=Nt[pe](C),_e.c()),Z(_e,1),_e.m(Ze.parentNode,Ze))},i(C){rt||(Z(_e),rt=!0)},o(C){x(_e),rt=!1},d(C){C&&n(e),Ie.d(),C&&n(st),De[pe].d(C),C&&n(Ze)}}}function Sl(r,e,a){let t;return Ve.subscribe(l=>{a(0,t=l)}),[t]}class Fl extends et{constructor(e){super(),tt(this,e,Sl,Ul,lt,{})}}function Ql(r){let e,a,t,l,c,v;e=new Dl({props:{toggleNavigation:r[1],navOpened:r[0]}});const h=r[4].default,u=_l(h,r,r[3],null);return c=new Fl({}),{c(){Ge(e.$$.fragment),a=w(),t=d("main"),u&&u.c(),l=w(),Ge(c.$$.fragment),this.h()},l(o){Te(e.$$.fragment,o),a=A(o),t=m(o,"MAIN",{class:!0});var i=p(t);u&&u.l(i),i.forEach(n),l=A(o),Te(c.$$.fragment,o),this.h()},h(){s(t,"class","svelte-jq7k3t")},m(o,i){Pe(e,o,i),E(o,a,i),E(o,t,i),u&&u.m(t,null),E(o,l,i),Pe(c,o,i),v=!0},p(o,[i]){const _={};i&1&&(_.navOpened=o[0]),e.$set(_),u&&u.p&&(!v||i&8)&&dl(u,h,o,o[3],v?gl(h,o[3],i,null):ml(o[3]),null)},i(o){v||(Z(e.$$.fragment,o),Z(u,o),Z(c.$$.fragment,o),v=!0)},o(o){x(e.$$.fragment,o),x(u,o),x(c.$$.fragment,o),v=!1},d(o){Re(e,o),o&&n(a),o&&n(t),u&&u.d(o),o&&n(l),Re(c,o)}}}function Jl(r,e,a){let t,{$$slots:l={},$$scope:c}=e;Ve.useLocalStorage(),Ve.subscribe(u=>{});let v=!1;function h(){a(2,v=!v)}return r.$$set=u=>{"$$scope"in u&&a(3,c=u.$$scope)},r.$$.update=()=>{r.$$.dirty&4&&a(0,t=v)},[t,h,v,c,l]}class xl extends et{constructor(e){super(),tt(this,e,Jl,Ql,lt,{})}}export{xl as default};

import{S as y,i as p,s as v,e as h,c as f,a as d,d as c,b as l,R as u,g,I as w,l as o,E as m,v as b}from"./index-8ed999ca.js";function _(s){let t,e,i;return{c(){t=h("div"),e=h("iframe"),this.h()},l(a){t=f(a,"DIV",{id:!0,class:!0});var r=d(t);e=f(r,"IFRAME",{title:!0,id:!0,type:!0,width:!0,height:!0,src:!0,frameborder:!0,scrolling:!0,class:!0}),d(e).forEach(c),r.forEach(c),this.h()},h(){l(e,"title","Play Captcha"),l(e,"id","playcaptcha"),l(e,"type","text/html"),l(e,"width",s[1]),l(e,"height",s[2]),u(e.src,i=s[0].url)||l(e,"src",i),l(e,"frameborder","0"),l(e,"scrolling","no"),l(e,"class","svelte-14z3j3w"),l(t,"id","play-captcha-container"),l(t,"class","play-captcha-container svelte-14z3j3w")},m(a,r){g(a,t,r),w(t,e)},p(a,r){r&2&&l(e,"width",a[1]),r&4&&l(e,"height",a[2]),r&1&&!u(e.src,i=a[0].url)&&l(e,"src",i)},d(a){a&&c(t)}}}function C(s){let t,e=typeof s[0].guid!="undefined"&&_(s);return{c(){e&&e.c(),t=o()},l(i){e&&e.l(i),t=o()},m(i,a){e&&e.m(i,a),g(i,t,a)},p(i,[a]){typeof i[0].guid!="undefined"?e?e.p(i,a):(e=_(i),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:m,o:m,d(i){e&&e.d(i),i&&c(t)}}}function E(s,t,e){let{game:i={}}=t,{width:a="100%"}=t,{height:r="600"}=t;return b(async()=>{document.body.scrollIntoView()}),s.$$set=n=>{"game"in n&&e(0,i=n.game),"width"in n&&e(1,a=n.width),"height"in n&&e(2,r=n.height)},[i,a,r]}class k extends y{constructor(t){super(),p(this,t,E,C,v,{game:0,width:1,height:2})}}export{k as C};
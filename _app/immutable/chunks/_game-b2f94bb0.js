import{S as D,i as P,s as U,e as p,c as g,a as E,d as h,b as I,g as C,I as u,k as T,t as L,m as G,h as q,H as S,j as y,N as V,Y,a0 as Z,Z as w,_ as z,$ as B,q as F,o as J}from"./index-bde066b7.js";function M(r,s,n){const i=r.slice();return i[4]=s[n],i}function R(r){let s,n,i=r[1],l=[];for(let e=0;e<i.length;e+=1)l[e]=j(M(r,i,e));return{c(){s=p("div"),n=p("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){s=g(e,"DIV",{class:!0});var _=E(s);n=g(_,"UL",{class:!0});var t=E(n);for(let m=0;m<l.length;m+=1)l[m].l(t);t.forEach(h),_.forEach(h),this.h()},h(){I(n,"class","svelte-22e25p"),I(s,"class","content-container svelte-22e25p")},m(e,_){C(e,s,_),u(s,n);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(e,_){if(_&2){i=e[1];let t;for(t=0;t<i.length;t+=1){const m=M(e,i,t);l[t]?l[t].p(m,_):(l[t]=j(m),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},d(e){e&&h(s),V(l,e)}}}function j(r){let s,n,i,l,e,_,t,m=r[4].name+"",b,d,o,N=r[4].description+"",f,a;return{c(){s=p("li"),n=p("ion-list"),i=p("ion-item"),l=p("ion-icon"),_=T(),t=p("strong"),b=L(m),d=T(),o=p("p"),f=L(N),a=T(),this.h()},l(c){s=g(c,"LI",{class:!0});var v=E(s);n=g(v,"ION-LIST",{});var k=E(n);i=g(k,"ION-ITEM",{});var O=E(i);l=g(O,"ION-ICON",{name:!0,"item-start":!0,class:!0}),E(l).forEach(h),_=G(O),t=g(O,"STRONG",{class:!0});var A=E(t);b=q(A,m),A.forEach(h),d=G(O),o=g(O,"P",{class:!0});var H=E(o);f=q(H,N),H.forEach(h),O.forEach(h),k.forEach(h),a=G(v),v.forEach(h),this.h()},h(){S(l,"name",e=r[4].icon),S(l,"item-start",""),S(l,"class","icon-feature svelte-22e25p"),I(t,"class","svelte-22e25p"),I(o,"class","svelte-22e25p"),I(s,"class","svelte-22e25p")},m(c,v){C(c,s,v),u(s,n),u(n,i),u(i,l),u(i,_),u(i,t),u(t,b),u(i,d),u(i,o),u(o,f),u(s,a)},p(c,v){v&2&&e!==(e=c[4].icon)&&S(l,"name",e),v&2&&m!==(m=c[4].name+"")&&y(b,m),v&2&&N!==(N=c[4].description+"")&&y(f,N)},d(c){c&&h(s)}}}function K(r){let s,n,i,l,e,_,t,m,b,d;document.title=s="3ee Games - "+r[0];let o=typeof r[1]!="undefined"&&R(r);const N=r[3].default,f=Y(N,r,r[2],null);return{c(){n=p("meta"),i=T(),l=p("section"),e=p("article"),_=p("h1"),t=L(r[0]),m=T(),o&&o.c(),b=T(),f&&f.c(),this.h()},l(a){const c=Z('[data-svelte="svelte-a29uxa"]',document.head);n=g(c,"META",{property:!0,content:!0}),c.forEach(h),i=G(a),l=g(a,"SECTION",{class:!0});var v=E(l);e=g(v,"ARTICLE",{class:!0});var k=E(e);_=g(k,"H1",{});var O=E(_);t=q(O,r[0]),O.forEach(h),m=G(k),o&&o.l(k),b=G(k),f&&f.l(k),k.forEach(h),v.forEach(h),this.h()},h(){I(n,"property","og:title"),I(n,"content",r[0]),I(e,"class","content"),I(l,"class","background")},m(a,c){u(document.head,n),C(a,i,c),C(a,l,c),u(l,e),u(e,_),u(_,t),u(e,m),o&&o.m(e,null),u(e,b),f&&f.m(e,null),d=!0},p(a,[c]){(!d||c&1)&&s!==(s="3ee Games - "+a[0])&&(document.title=s),(!d||c&1)&&I(n,"content",a[0]),(!d||c&1)&&y(t,a[0]),typeof a[1]!="undefined"?o?o.p(a,c):(o=R(a),o.c(),o.m(e,b)):o&&(o.d(1),o=null),f&&f.p&&(!d||c&4)&&w(f,N,a,a[2],d?B(N,a[2],c,null):z(a[2]),null)},i(a){d||(F(f,a),d=!0)},o(a){J(f,a),d=!1},d(a){h(n),a&&h(i),a&&h(l),o&&o.d(),f&&f.d(a)}}}function Q(r,s,n){let{$$slots:i={},$$scope:l}=s,{title:e}=s,{content:_}=s;return r.$$set=t=>{"title"in t&&n(0,e=t.title),"content"in t&&n(1,_=t.content),"$$scope"in t&&n(2,l=t.$$scope)},[e,_,l,i]}class X extends D{constructor(s){super(),P(this,s,Q,K,U,{title:0,content:1})}}export{X as G};

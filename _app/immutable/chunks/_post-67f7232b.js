import{S as _e,i as me,s as ge,e as b,l as H,c as y,a as S,d as _,b as r,g as A,I as m,J as ee,R as J,N as K,a0 as pe,E as F,t as z,k as G,h as N,m as R,j as ve,w as ke,x as be,y as ye,q as j,o as W,B as Ee,T as De,X as we,n as Ie,p as Se,U as Pe,V as Te,W as Le}from"./index-299456bd.js";function te(n,e,s){const t=n.slice();return t[1]=e[s],t}function le(n,e,s){const t=n.slice();return t[4]=e[s],t}function se(n,e,s){const t=n.slice();return t[7]=e[s],t}function ae(n){let e,s,t;return{c(){e=b("source"),this.h()},l(l){e=y(l,"SOURCE",{src:!0,type:!0}),this.h()},h(){J(e.src,s=n[7].src)||r(e,"src",s),r(e,"type",t=n[7].type)},m(l,a){A(l,e,a)},p(l,a){a&1&&!J(e.src,s=l[7].src)&&r(e,"src",s),a&1&&t!==(t=l[7].type)&&r(e,"type",t)},d(l){l&&_(e)}}}function ie(n){let e,s=n[1].tracks,t=[];for(let l=0;l<s.length;l+=1)t[l]=ne(le(n,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=H()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=H()},m(l,a){for(let i=0;i<t.length;i+=1)t[i].m(l,a);A(l,e,a)},p(l,a){if(a&1){s=l[1].tracks;let i;for(i=0;i<s.length;i+=1){const o=le(l,s,i);t[i]?t[i].p(o,a):(t[i]=ne(o),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(l){K(t,l),l&&_(e)}}}function ne(n){let e,s,t,l;return{c(){e=b("track"),this.h()},l(a){e=y(a,"TRACK",{src:!0,kind:!0}),this.h()},h(){J(e.src,s=n[4].src)||r(e,"src",s),r(e,"kind",t=n[4].kind),e.default=l=n[4].default},m(a,i){A(a,e,i)},p(a,i){i&1&&!J(e.src,s=a[4].src)&&r(e,"src",s),i&1&&t!==(t=a[4].kind)&&r(e,"kind",t),i&1&&l!==(l=a[4].default)&&(e.default=l)},d(a){a&&_(e)}}}function oe(n){var L;let e,s,t,l,a,i,o,u,v=n[1].srcs,d=[];for(let c=0;c<v.length;c+=1)d[c]=ae(se(n,v,c));let h=typeof((L=n[1])==null?void 0:L.tracks)!="undefined"&&n[1].tracks.length>0&&ie(n);return{c(){e=b("video");for(let c=0;c<d.length;c+=1)d[c].c();s=H(),h&&h.c(),this.h()},l(c){e=y(c,"VIDEO",{preload:!0,width:!0,height:!0,poster:!0,class:!0});var k=S(e);for(let D=0;D<d.length;D+=1)d[D].l(k);s=H(),h&&h.l(k),k.forEach(_),this.h()},h(){r(e,"preload","auto"),r(e,"width",t=n[1].width),r(e,"height",l=n[1].height),r(e,"poster",a=n[1].poster),e.controls=i=n[1].controls,r(e,"class","svelte-1835brm")},m(c,k){A(c,e,k);for(let D=0;D<d.length;D+=1)d[D].m(e,null);m(e,s),h&&h.m(e,null),o||(u=[ee(e,"play",Ae),ee(e,"ended",Ce)],o=!0)},p(c,k){var D;if(k&1){v=c[1].srcs;let E;for(E=0;E<v.length;E+=1){const g=se(c,v,E);d[E]?d[E].p(g,k):(d[E]=ae(g),d[E].c(),d[E].m(e,s))}for(;E<d.length;E+=1)d[E].d(1);d.length=v.length}typeof((D=c[1])==null?void 0:D.tracks)!="undefined"&&c[1].tracks.length>0?h?h.p(c,k):(h=ie(c),h.c(),h.m(e,null)):h&&(h.d(1),h=null),k&1&&t!==(t=c[1].width)&&r(e,"width",t),k&1&&l!==(l=c[1].height)&&r(e,"height",l),k&1&&a!==(a=c[1].poster)&&r(e,"poster",a),k&1&&i!==(i=c[1].controls)&&(e.controls=i)},d(c){c&&_(e),K(d,c),h&&h.d(),o=!1,pe(u)}}}function Oe(n){let e,s=n[0],t=[];for(let l=0;l<s.length;l+=1)t[l]=oe(te(n,s,l));return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=y(l,"DIV",{class:!0});var a=S(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(_),this.h()},h(){r(e,"class","video-container svelte-1835brm")},m(l,a){A(l,e,a);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(l,[a]){if(a&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const o=te(l,s,i);t[i]?t[i].p(o,a):(t[i]=oe(o),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},i:F,o:F,d(l){l&&_(e),K(t,l)}}}function Ae(n){typeof umami!="undefined"&&typeof n.target.currentSrc!="undefined"&&umami.trackEvent("video play",{video:n.target.currentSrc})}function Ce(n){typeof umami!="undefined"&&typeof n!="undefined"&&umami.trackEvent("video end",{video:n.target.currentSrc})}function Ge(n,e,s){let{videos:t=[{controls:!0,srcs:[{src:"https://3ee.s3.amazonaws.com/video/tiled_phaser.mp4",type:"video/mp4"}],tracks:[{src:"https://3ee.s3.amazonaws.com/video/tiled_phaser.vtt",kind:"captions",default:!0}],width:"100%",height:"600",poster:"https://3ee.s3.amazonaws.com/video/tiled_phaser.webp"}]}=e;return n.$$set=l=>{"videos"in l&&s(0,t=l.videos)},[t]}class Re extends _e{constructor(e){super(),me(this,e,Ge,Oe,ge,{videos:0})}}function re(n,e,s){const t=n.slice();return t[15]=e[s],t}function ce(n){let e,s,t,l,a;return{c(){e=b("li"),s=b("strong"),t=z("Modified:"),l=G(),a=z(n[6]),this.h()},l(i){e=y(i,"LI",{class:!0});var o=S(e);s=y(o,"STRONG",{});var u=S(s);t=N(u,"Modified:"),u.forEach(_),l=R(o),a=N(o,n[6]),o.forEach(_),this.h()},h(){r(e,"class","published-date svelte-1kl993h")},m(i,o){A(i,e,o),m(e,s),m(s,t),m(e,l),m(e,a)},p:F,d(i){i&&_(e)}}}function fe(n){let e,s,t=n[3],l=[];for(let a=0;a<t.length;a+=1)l[a]=he(re(n,t,a));return{c(){e=b("aside"),s=b("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=y(a,"ASIDE",{class:!0});var i=S(e);s=y(i,"UL",{class:!0});var o=S(s);for(let u=0;u<l.length;u+=1)l[u].l(o);o.forEach(_),i.forEach(_),this.h()},h(){r(s,"class","svelte-1kl993h"),r(e,"class","categories svelte-1kl993h")},m(a,i){A(a,e,i),m(e,s);for(let o=0;o<l.length;o+=1)l[o].m(s,null)},p(a,i){if(i&8){t=a[3];let o;for(o=0;o<t.length;o+=1){const u=re(a,t,o);l[o]?l[o].p(u,i):(l[o]=he(u),l[o].c(),l[o].m(s,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(a){a&&_(e),K(l,a)}}}function he(n){let e,s,t=de(n[15])+"",l,a,i;return{c(){e=b("li"),s=b("a"),l=z(t),i=G(),this.h()},l(o){e=y(o,"LI",{class:!0});var u=S(e);s=y(u,"A",{href:!0,class:!0});var v=S(s);l=N(v,t),v.forEach(_),i=R(u),u.forEach(_),this.h()},h(){r(s,"href",a="/blog/categories/"+n[15]),r(s,"class","svelte-1kl993h"),r(e,"class","svelte-1kl993h")},m(o,u){A(o,e,u),m(e,s),m(s,l),m(e,i)},p(o,u){u&8&&t!==(t=de(o[15])+"")&&ve(l,t),u&8&&a!==(a="/blog/categories/"+o[15])&&r(s,"href",a)},d(o){o&&_(e)}}}function ue(n){let e,s;return e=new Re({props:{videos:n[4]}}),{c(){ke(e.$$.fragment)},l(t){be(e.$$.fragment,t)},m(t,l){ye(e,t,l),s=!0},p(t,l){const a={};l&16&&(a.videos=t[4]),e.$set(a)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){Ee(e,t)}}}function Ue(n){let e,s,t,l,a,i,o,u,v,d,h,L,c,k,D,E,g,q,B,U,C;document.title=e="3Games Blog - "+n[0];let w=n[1]!==n[2]&&ce(n),I=n[3].length&&fe(n),p=typeof n[4]!="undefined"&&n[4].length>0&&ue(n);const X=n[11].default,T=De(X,n,n[10],null);return{c(){s=b("meta"),t=G(),l=b("section"),a=b("article"),i=b("h1"),o=z(n[0]),u=G(),v=b("aside"),d=b("ul"),h=b("li"),L=b("strong"),c=z("Published:"),k=G(),D=z(n[5]),E=G(),w&&w.c(),g=G(),I&&I.c(),q=G(),p&&p.c(),B=G(),U=b("div"),T&&T.c(),this.h()},l(f){const P=we('[data-svelte="svelte-kfjku2"]',document.head);s=y(P,"META",{property:!0,content:!0}),P.forEach(_),t=R(f),l=y(f,"SECTION",{class:!0});var Q=S(l);a=y(Q,"ARTICLE",{class:!0});var O=S(a);i=y(O,"H1",{class:!0});var Y=S(i);o=N(Y,n[0]),Y.forEach(_),u=R(O),v=y(O,"ASIDE",{class:!0});var Z=S(v);d=y(Z,"UL",{class:!0});var M=S(d);h=y(M,"LI",{class:!0});var V=S(h);L=y(V,"STRONG",{});var $=S(L);c=N($,"Published:"),$.forEach(_),k=R(V),D=N(V,n[5]),V.forEach(_),E=R(M),w&&w.l(M),M.forEach(_),Z.forEach(_),g=R(O),I&&I.l(O),q=R(O),p&&p.l(O),B=R(O),U=y(O,"DIV",{class:!0});var x=S(U);T&&T.l(x),x.forEach(_),O.forEach(_),Q.forEach(_),this.h()},h(){r(s,"property","og:title"),r(s,"content",n[0]),r(i,"class","svelte-1kl993h"),r(h,"class","published-date svelte-1kl993h"),r(d,"class","svelte-1kl993h"),r(v,"class","date-aside svelte-1kl993h"),r(U,"class","article"),r(a,"class","blog content"),r(l,"class","background")},m(f,P){m(document.head,s),A(f,t,P),A(f,l,P),m(l,a),m(a,i),m(i,o),m(a,u),m(a,v),m(v,d),m(d,h),m(h,L),m(L,c),m(h,k),m(h,D),m(d,E),w&&w.m(d,null),m(a,g),I&&I.m(a,null),m(a,q),p&&p.m(a,null),m(a,B),m(a,U),T&&T.m(U,null),C=!0},p(f,[P]){(!C||P&1)&&e!==(e="3Games Blog - "+f[0])&&(document.title=e),(!C||P&1)&&r(s,"content",f[0]),(!C||P&1)&&ve(o,f[0]),f[1]!==f[2]?w?w.p(f,P):(w=ce(f),w.c(),w.m(d,null)):w&&(w.d(1),w=null),f[3].length?I?I.p(f,P):(I=fe(f),I.c(),I.m(a,q)):I&&(I.d(1),I=null),typeof f[4]!="undefined"&&f[4].length>0?p?(p.p(f,P),P&16&&j(p,1)):(p=ue(f),p.c(),j(p,1),p.m(a,B)):p&&(Ie(),W(p,1,1,()=>{p=null}),Se()),T&&T.p&&(!C||P&1024)&&Pe(T,X,f,f[10],C?Le(X,f[10],P,null):Te(f[10]),null)},i(f){C||(j(p),j(T,f),C=!0)},o(f){W(p),W(T,f),C=!1},d(f){_(s),f&&_(t),f&&_(l),w&&w.d(),I&&I.d(),p&&p.d(),T&&T.d(f)}}}function de(n){for(var e=n.split("-"),s=0;s<e.length;s++){var t=e[s];e[s]=t.charAt(0).toUpperCase()+t.slice(1)}return e.join(" ")}function ze(n){for(var e=n.split(" "),s=0;s<e.length;s++){var t=e[s];e[s]=t.charAt(0).toUpperCase()+t.slice(1)}return e.join("-").toLowerCase()}function Ne(n,e,s){let{$$slots:t={},$$scope:l}=e,{title:a}=e,{date:i}=e,{modifiedDate:o}=e,{seoImage:u}=e,{shortDescription:v}=e,{categories:d}=e,{author:h}=e,{videos:L}=e,c=typeof i!="undefined"?new Date(i).toLocaleDateString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric"}):null,k=typeof o!="undefined"?new Date(o).toLocaleDateString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric"}):null;E();function D(){return h==="3Games"?"Organization":"Person"}function E(){return{"@context":"http://schema.org","@type":"BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":`https://3ee.com/blog/${ze(a)}`},headline:{title:a},image:[{seoImage:u}],datePublished:{date:i},dateModified:{modifiedDate:o},author:{"@type":D(),name:{author:h}},publisher:{"@type":"Organization",name:"3Games"},description:v}}return n.$$set=g=>{"title"in g&&s(0,a=g.title),"date"in g&&s(1,i=g.date),"modifiedDate"in g&&s(2,o=g.modifiedDate),"seoImage"in g&&s(7,u=g.seoImage),"shortDescription"in g&&s(8,v=g.shortDescription),"categories"in g&&s(3,d=g.categories),"author"in g&&s(9,h=g.author),"videos"in g&&s(4,L=g.videos),"$$scope"in g&&s(10,l=g.$$scope)},[a,i,o,d,L,c,k,u,v,h,l,t]}class qe extends _e{constructor(e){super(),me(this,e,Ne,Ue,ge,{title:0,date:1,modifiedDate:2,seoImage:7,shortDescription:8,categories:3,author:9,videos:4})}}export{qe as P};

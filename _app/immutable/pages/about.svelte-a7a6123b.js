import{S as Ze,i as Qe,s as Xe,e as d,k as y,t as _,c as u,a as h,m as $,h as p,d as r,b as f,H as le,g as U,I as a,J as xe,R as Ee,j as fe,N as Ye,E as Le,w as ke,Z as et,x as Ge,y as we,o as Ie,p as tt,q as ye,B as $e,n as st}from"../chunks/index-e0b1e98d.js";import{d as lt,b as at}from"../chunks/env-859c48a7.js";import{s as Ce}from"../chunks/svgMapper-f9a23f74.js";import{b as nt}from"../chunks/paths-396f020f.js";function Me(o,s,n){const t=o.slice();return t[1]=s[n],t}function He(o,s,n){const t=o.slice();return t[4]=s[n],t}function je(o){let s,n,t,e,i;return{c(){s=d("div"),n=d("div"),t=d("img"),this.h()},l(c){s=u(c,"DIV",{class:!0});var l=h(s);n=u(l,"DIV",{class:!0});var m=h(n);t=u(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(r),l.forEach(r),this.h()},h(){Ee(t.src,e="/"+o[1].meta.image)||f(t,"src",e),f(t,"alt",i=o[1].meta.title),f(t,"class","svelte-1nn663l"),f(n,"class","svg-container svelte-1nn663l"),f(s,"class","svg svelte-1nn663l")},m(c,l){U(c,s,l),a(s,n),a(n,t)},p(c,l){l&1&&!Ee(t.src,e="/"+c[1].meta.image)&&f(t,"src",e),l&1&&i!==(i=c[1].meta.title)&&f(t,"alt",i)},d(c){c&&r(s)}}}function Be(o){let s,n,t;return{c(){s=d("a"),n=_("Mastodon"),this.h()},l(e){s=u(e,"A",{rel:!0,target:!0,href:!0});var i=h(s);n=p(i,"Mastodon"),i.forEach(r),this.h()},h(){f(s,"rel","me"),f(s,"target","_blank"),f(s,"href",t=o[1].meta.mastodon)},m(e,i){U(e,s,i),a(s,n)},p(e,i){i&1&&t!==(t=e[1].meta.mastodon)&&f(s,"href",t)},d(e){e&&r(s)}}}function Re(o){let s,n=o[1].meta.more+"",t;return{c(){s=d("p"),t=_(n),this.h()},l(e){s=u(e,"P",{class:!0});var i=h(s);t=p(i,n),i.forEach(r),this.h()},h(){f(s,"class","svelte-1nn663l")},m(e,i){U(e,s,i),a(s,t)},p(e,i){i&1&&n!==(n=e[1].meta.more+"")&&fe(t,n)},d(e){e&&r(s)}}}function Ue(o){let s,n,t,e,i;return{c(){s=d("div"),n=d("div"),t=d("img"),this.h()},l(c){s=u(c,"DIV",{class:!0});var l=h(s);n=u(l,"DIV",{class:!0});var m=h(n);t=u(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(r),l.forEach(r),this.h()},h(){Ee(t.src,e="/"+o[1].meta.imageAnother)||f(t,"src",e),f(t,"alt",i=o[1].meta.title),f(t,"class","svelte-1nn663l"),f(n,"class","svg-container svelte-1nn663l"),f(s,"class","svg svelte-1nn663l")},m(c,l){U(c,s,l),a(s,n),a(n,t)},p(c,l){l&1&&!Ee(t.src,e="/"+c[1].meta.imageAnother)&&f(t,"src",e),l&1&&i!==(i=c[1].meta.title)&&f(t,"alt",i)},d(c){c&&r(s)}}}function We(o){let s,n,t=o[1].meta.interests,e=[];for(let i=0;i<t.length;i+=1)e[i]=Ke(He(o,t,i));return{c(){s=d("div"),n=d("ul");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){s=u(i,"DIV",{class:!0});var c=h(s);n=u(c,"UL",{class:!0});var l=h(n);for(let m=0;m<e.length;m+=1)e[m].l(l);l.forEach(r),c.forEach(r),this.h()},h(){f(n,"class","svelte-1nn663l"),f(s,"class","stats-container svelte-1nn663l")},m(i,c){U(i,s,c),a(s,n);for(let l=0;l<e.length;l+=1)e[l].m(n,null)},p(i,c){if(c&1){t=i[1].meta.interests;let l;for(l=0;l<t.length;l+=1){const m=He(i,t,l);e[l]?e[l].p(m,c):(e[l]=Ke(m),e[l].c(),e[l].m(n,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=t.length}},d(i){i&&r(s),Ye(e,i)}}}function ze(o){let s,n;return{c(){s=d("ion-icon"),this.h()},l(t){s=u(t,"ION-ICON",{name:!0,"item-start":!0,class:!0}),h(s).forEach(r),this.h()},h(){le(s,"name",n=o[4].icon),le(s,"item-start",""),le(s,"class","icon-feature svelte-1nn663l")},m(t,e){U(t,s,e)},p(t,e){e&1&&n!==(n=t[4].icon)&&le(s,"name",n)},d(t){t&&r(s)}}}function Fe(o){let s=o[4].emote+"",n;return{c(){n=_(s)},l(t){n=p(t,s)},m(t,e){U(t,n,e)},p(t,e){e&1&&s!==(s=t[4].emote+"")&&fe(n,s)},d(t){t&&r(n)}}}function Ke(o){let s,n,t,e,i,c,l=o[4].name+"",m,T,C,M,j=o[4].description+"",P,B,g=typeof o[4].icon!="undefined"&&ze(o),b=typeof o[4].emote!="undefined"&&Fe(o);return{c(){s=d("li"),n=d("ion-list"),t=d("ion-item"),g&&g.c(),e=y(),b&&b.c(),i=y(),c=d("strong"),m=_(l),T=_(":"),C=y(),M=d("span"),P=_(j),B=y(),this.h()},l(w){s=u(w,"LI",{class:!0});var A=h(s);n=u(A,"ION-LIST",{class:!0});var K=h(n);t=u(K,"ION-ITEM",{});var q=h(t);g&&g.l(q),e=$(q),b&&b.l(q),i=$(q),c=u(q,"STRONG",{class:!0});var R=h(c);m=p(R,l),T=p(R,":"),R.forEach(r),C=$(q),M=u(q,"SPAN",{class:!0});var H=h(M);P=p(H,j),H.forEach(r),q.forEach(r),K.forEach(r),B=$(A),A.forEach(r),this.h()},h(){f(c,"class","svelte-1nn663l"),f(M,"class","stats svelte-1nn663l"),le(n,"class","svelte-1nn663l"),f(s,"class","svelte-1nn663l")},m(w,A){U(w,s,A),a(s,n),a(n,t),g&&g.m(t,null),a(t,e),b&&b.m(t,null),a(t,i),a(t,c),a(c,m),a(c,T),a(t,C),a(t,M),a(M,P),a(s,B)},p(w,A){typeof w[4].icon!="undefined"?g?g.p(w,A):(g=ze(w),g.c(),g.m(t,e)):g&&(g.d(1),g=null),typeof w[4].emote!="undefined"?b?b.p(w,A):(b=Fe(w),b.c(),b.m(t,i)):b&&(b.d(1),b=null),A&1&&l!==(l=w[4].name+"")&&fe(m,l),A&1&&j!==(j=w[4].description+"")&&fe(P,j)},d(w){w&&r(s),g&&g.d(),b&&b.d()}}}function Je(o){let s,n,t,e,i,c,l=o[1].meta.name+"",m,T,C,M=o[1].meta.title+"",j,P,B,g,b,w=o[1].meta.bio+"",A,K,q,R,H,te,J,de,S,Z,G=o[1].meta.name+"",ae,Q,ne,ie,z,X,ue,Y,me,D=typeof o[1].meta.image!="undefined"&&je(o),O=typeof o[1].meta.mastodon!="undefined"&&Be(o),I=typeof o[1].meta.more!="undefined"&&Re(o),k=typeof o[1].meta.imageAnother!="undefined"&&Ue(o),N=typeof o[1].meta.interests!="undefined"&&We(o);return{c(){s=d("li"),n=d("div"),t=d("div"),e=d("div"),D&&D.c(),i=y(),c=d("h3"),m=_(l),T=y(),C=d("h3"),j=_(M),P=y(),B=d("p"),O&&O.c(),g=y(),b=d("h3"),A=_(w),K=y(),q=d("button"),R=d("ion-icon"),H=y(),te=d("span"),J=_("See More"),de=y(),S=d("div"),Z=d("h3"),ae=_(G),Q=y(),I&&I.c(),ne=y(),k&&k.c(),ie=y(),N&&N.c(),z=y(),X=d("ion-icon"),ue=y(),this.h()},l(v){s=u(v,"LI",{class:!0});var V=h(s);n=u(V,"DIV",{class:!0});var F=h(n);t=u(F,"DIV",{class:!0});var se=h(t);e=u(se,"DIV",{class:!0});var L=h(e);D&&D.l(L),i=$(L),c=u(L,"H3",{class:!0});var _e=h(c);m=p(_e,l),_e.forEach(r),T=$(L),C=u(L,"H3",{class:!0});var E=h(C);j=p(E,M),E.forEach(r),P=$(L),B=u(L,"P",{});var x=h(B);O&&O.l(x),x.forEach(r),g=$(L),b=u(L,"H3",{class:!0});var re=h(b);A=p(re,w),re.forEach(r),K=$(L),q=u(L,"BUTTON",{class:!0});var ee=h(q);R=u(ee,"ION-ICON",{class:!0,name:!0}),h(R).forEach(r),H=$(ee),te=u(ee,"SPAN",{});var he=h(te);J=p(he,"See More"),he.forEach(r),ee.forEach(r),L.forEach(r),de=$(se),S=u(se,"DIV",{class:!0});var W=h(S);Z=u(W,"H3",{class:!0});var pe=h(Z);ae=p(pe,G),pe.forEach(r),Q=$(W),I&&I.l(W),ne=$(W),k&&k.l(W),ie=$(W),N&&N.l(W),z=$(W),X=u(W,"ION-ICON",{class:!0,name:!0}),h(X).forEach(r),W.forEach(r),se.forEach(r),F.forEach(r),ue=$(V),V.forEach(r),this.h()},h(){f(c,"class","highlight large title svelte-1nn663l"),f(C,"class","highlight accent title job svelte-1nn663l"),f(b,"class","description svelte-1nn663l"),le(R,"class","icon svelte-1nn663l"),le(R,"name","game-controller-sharp"),f(q,"class","svelte-1nn663l"),f(e,"class","flip-card-front svelte-1nn663l"),f(Z,"class","highlight large title svelte-1nn663l"),le(X,"class","icon icon-blue svelte-1nn663l"),le(X,"name","arrow-back-circle-sharp"),f(S,"class","flip-card-back svelte-1nn663l"),f(t,"class","flip-card-inner svelte-1nn663l"),f(n,"class","flip-card svelte-1nn663l"),f(s,"class","svelte-1nn663l")},m(v,V){U(v,s,V),a(s,n),a(n,t),a(t,e),D&&D.m(e,null),a(e,i),a(e,c),a(c,m),a(e,T),a(e,C),a(C,j),a(e,P),a(e,B),O&&O.m(B,null),a(e,g),a(e,b),a(b,A),a(e,K),a(e,q),a(q,R),a(q,H),a(q,te),a(te,J),a(t,de),a(t,S),a(S,Z),a(Z,ae),a(S,Q),I&&I.m(S,null),a(S,ne),k&&k.m(S,null),a(S,ie),N&&N.m(S,null),a(S,z),a(S,X),a(s,ue),Y||(me=xe(n,"click",rt),Y=!0)},p(v,V){typeof v[1].meta.image!="undefined"?D?D.p(v,V):(D=je(v),D.c(),D.m(e,i)):D&&(D.d(1),D=null),V&1&&l!==(l=v[1].meta.name+"")&&fe(m,l),V&1&&M!==(M=v[1].meta.title+"")&&fe(j,M),typeof v[1].meta.mastodon!="undefined"?O?O.p(v,V):(O=Be(v),O.c(),O.m(B,null)):O&&(O.d(1),O=null),V&1&&w!==(w=v[1].meta.bio+"")&&fe(A,w),V&1&&G!==(G=v[1].meta.name+"")&&fe(ae,G),typeof v[1].meta.more!="undefined"?I?I.p(v,V):(I=Re(v),I.c(),I.m(S,ne)):I&&(I.d(1),I=null),typeof v[1].meta.imageAnother!="undefined"?k?k.p(v,V):(k=Ue(v),k.c(),k.m(S,ie)):k&&(k.d(1),k=null),typeof v[1].meta.interests!="undefined"?N?N.p(v,V):(N=We(v),N.c(),N.m(S,z)):N&&(N.d(1),N=null)},d(v){v&&r(s),D&&D.d(),O&&O.d(),I&&I.d(),k&&k.d(),N&&N.d(),Y=!1,me()}}}function it(o){let s,n,t=o[0],e=[];for(let i=0;i<t.length;i+=1)e[i]=Je(Me(o,t,i));return{c(){s=d("div"),n=d("ul");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){s=u(i,"DIV",{class:!0});var c=h(s);n=u(c,"UL",{class:!0});var l=h(n);for(let m=0;m<e.length;m+=1)e[m].l(l);l.forEach(r),c.forEach(r),this.h()},h(){f(n,"class","svelte-1nn663l"),f(s,"class","grid-content")},m(i,c){U(i,s,c),a(s,n);for(let l=0;l<e.length;l+=1)e[l].m(n,null)},p(i,[c]){if(c&1){t=i[0];let l;for(l=0;l<t.length;l+=1){const m=Me(i,t,l);e[l]?e[l].p(m,c):(e[l]=Je(m),e[l].c(),e[l].m(n,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=t.length}},i:Le,o:Le,d(i){i&&r(s),Ye(e,i)}}}function rt(o){if(o.currentTarget.classList.contains("flipped")){o.currentTarget.classList.remove("flipped");return}o.currentTarget.classList.add("flipped")}function ot(o,s,n){let{posts:t}=s;return o.$$set=e=>{"posts"in e&&n(0,t=e.posts)},[t]}class ct extends Ze{constructor(s){super(),Qe(this,s,ot,it,Xe,{posts:0})}}function ft(o){let s,n,t,e,i,c,l,m,T,C,M,j,P,B,g,b,w,A,K,q,R,H,te,J,de,S,Z,G,ae,Q,ne,ie,z,X,ue,Y,me,D,O,I,k,N,v,V,F,se;var L=Ce.Knight;function _e(E){return{}}return L&&(l=new L(_e())),F=new ct({props:{posts:o[0]}}),{c(){s=y(),n=d("section"),t=d("div"),e=d("ul"),i=d("li"),c=d("span"),l&&ke(l.$$.fragment),m=y(),T=d("li"),C=d("h1"),M=_("About 3Games"),j=y(),P=d("p"),B=_("3Games is a small independent game studio based in Florida. We craft engaging worlds for "),g=d("span"),b=_("everyone to experience"),w=_(`
					and explore. Our foundation is built upon passion for coming together as a team of craftsmen
					while being the `),A=d("span"),K=_("best version"),q=_(" of ourselves."),R=y(),H=d("p"),te=_(`Our inspiration is drawn from a myriad of sources including art, history, music, and
					folklore. All of our games have a `),J=d("span"),de=_("unique aesthetic"),S=_(` and we work
					assiduously to craft adventures that are immersive, emotionally provocative, and provide unique
					gameplay.`),Z=y(),G=d("p"),ae=_(`A new chapter has begun. 
					
					The most high - performing teams, in our opinion, have a `),Q=d("span"),ne=_("diversity of experiences and backgrounds"),ie=_(" in addition to "),z=d("span"),X=_("shared values and trust"),ue=_(`. 
					We're looking for more friends and coworkers who can contribute different insights as they've experienced the `),Y=d("span"),me=_("world from different lenses"),D=_(". Both our organization and the games we create will benefit from it."),O=y(),I=d("section"),k=d("div"),N=d("h2"),v=_("The Team"),V=y(),ke(F.$$.fragment),this.h()},l(E){et('[data-svelte="svelte-1ine71f"]',document.head).forEach(r),s=$(E),n=u(E,"SECTION",{class:!0});var re=h(n);t=u(re,"DIV",{class:!0});var ee=h(t);e=u(ee,"UL",{class:!0});var he=h(e);i=u(he,"LI",{class:!0});var W=h(i);c=u(W,"SPAN",{});var pe=h(c);l&&Ge(l.$$.fragment,pe),pe.forEach(r),W.forEach(r),m=$(he),T=u(he,"LI",{class:!0});var oe=h(T);C=u(oe,"H1",{});var Ae=h(C);M=p(Ae,"About 3Games"),Ae.forEach(r),j=$(oe),P=u(oe,"P",{class:!0});var ve=h(P);B=p(ve,"3Games is a small independent game studio based in Florida. We craft engaging worlds for "),g=u(ve,"SPAN",{class:!0});var Ne=h(g);b=p(Ne,"everyone to experience"),Ne.forEach(r),w=p(ve,`
					and explore. Our foundation is built upon passion for coming together as a team of craftsmen
					while being the `),A=u(ve,"SPAN",{class:!0});var qe=h(A);K=p(qe,"best version"),qe.forEach(r),q=p(ve," of ourselves."),ve.forEach(r),R=$(oe),H=u(oe,"P",{class:!0});var ge=h(H);te=p(ge,`Our inspiration is drawn from a myriad of sources including art, history, music, and
					folklore. All of our games have a `),J=u(ge,"SPAN",{class:!0});var Se=h(J);de=p(Se,"unique aesthetic"),Se.forEach(r),S=p(ge,` and we work
					assiduously to craft adventures that are immersive, emotionally provocative, and provide unique
					gameplay.`),ge.forEach(r),Z=$(oe),G=u(oe,"P",{class:!0});var ce=h(G);ae=p(ce,`A new chapter has begun. 
					
					The most high - performing teams, in our opinion, have a `),Q=u(ce,"SPAN",{class:!0});var Oe=h(Q);ne=p(Oe,"diversity of experiences and backgrounds"),Oe.forEach(r),ie=p(ce," in addition to "),z=u(ce,"SPAN",{class:!0});var Te=h(z);X=p(Te,"shared values and trust"),Te.forEach(r),ue=p(ce,`. 
					We're looking for more friends and coworkers who can contribute different insights as they've experienced the `),Y=u(ce,"SPAN",{class:!0});var De=h(Y);me=p(De,"world from different lenses"),De.forEach(r),D=p(ce,". Both our organization and the games we create will benefit from it."),ce.forEach(r),oe.forEach(r),he.forEach(r),ee.forEach(r),re.forEach(r),O=$(E),I=u(E,"SECTION",{class:!0});var Pe=h(I);k=u(Pe,"DIV",{class:!0});var be=h(k);N=u(be,"H2",{});var Ve=h(N);v=p(Ve,"The Team"),Ve.forEach(r),V=$(be),Ge(F.$$.fragment,be),be.forEach(r),Pe.forEach(r),this.h()},h(){document.title="About",f(i,"class","svelte-1hadeq4"),f(g,"class","highlight"),f(A,"class","highlight"),f(P,"class","svelte-1hadeq4"),f(J,"class","highlight"),f(H,"class","svelte-1hadeq4"),f(Q,"class","highlight"),f(z,"class","highlight"),f(Y,"class","highlight"),f(G,"class","svelte-1hadeq4"),f(T,"class","middle-content svelte-1hadeq4"),f(e,"class","flex-2-cols svelte-1hadeq4"),f(t,"class","content-full svelte-1hadeq4"),f(n,"class","background svelte-1hadeq4"),f(k,"class","content"),f(I,"class","background alternate svelte-1hadeq4")},m(E,x){U(E,s,x),U(E,n,x),a(n,t),a(t,e),a(e,i),a(i,c),l&&we(l,c,null),a(e,m),a(e,T),a(T,C),a(C,M),a(T,j),a(T,P),a(P,B),a(P,g),a(g,b),a(P,w),a(P,A),a(A,K),a(P,q),a(T,R),a(T,H),a(H,te),a(H,J),a(J,de),a(H,S),a(T,Z),a(T,G),a(G,ae),a(G,Q),a(Q,ne),a(G,ie),a(G,z),a(z,X),a(G,ue),a(G,Y),a(Y,me),a(G,D),U(E,O,x),U(E,I,x),a(I,k),a(k,N),a(N,v),a(k,V),we(F,k,null),se=!0},p(E,[x]){if(L!==(L=Ce.Knight)){if(l){st();const ee=l;Ie(ee.$$.fragment,1,0,()=>{$e(ee,1)}),tt()}L?(l=new L(_e()),ke(l.$$.fragment),ye(l.$$.fragment,1),we(l,c,null)):l=null}const re={};x&1&&(re.posts=E[0]),F.$set(re)},i(E){se||(l&&ye(l.$$.fragment,E),ye(F.$$.fragment,E),se=!0)},o(E){l&&Ie(l.$$.fragment,E),Ie(F.$$.fragment,E),se=!1},d(E){E&&r(s),E&&r(n),l&&$e(l),E&&r(O),E&&r(I),$e(F)}}}const _t=lt,pt=at,gt=!0,bt=async({fetch:o,url:s})=>({props:{team:await(await o(`${nt}/api/team.json`)).json()}});function dt(o,s,n){let{team:t}=s;return o.$$set=e=>{"team"in e&&n(0,t=e.team)},[t]}class Et extends Ze{constructor(s){super(),Qe(this,s,dt,ft,Xe,{team:0})}}export{Et as default,_t as hydrate,bt as load,gt as prerender,pt as router};

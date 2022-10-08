import{S as gt,i as _t,s as bt,C as Je,w as kt,x as Et,y as Tt,z as Pt,A as vt,q as At,o as It,B as xt,_ as wt,e as o,t as h,k as f,c as l,a as s,h as u,d as t,m as c,b as i,g as n,I as a,E as jt}from"../../chunks/index-e0b1e98d.js";import{P as St}from"../../chunks/_post-f24e1a24.js";function qt(D){let d,y,g,v,p,m,W,ve,ae,b,k,R,we,oe,C,ye,le,_,J,ge,_e,K,be,ke,V,Ee,se,S,q,Te,Pe,re,M,Ae,ie,E,T,G,Ie,ne,B,xe,de,U,je,he,z,Se,ue,P,A,O,qe,pe,F,He,fe,I,x,Q,Le,ce,w,X,H,Ne,$e,Z,L,De,We,ee,N,Ce,Me,te,$,Be;return{c(){d=o("p"),y=h("When developing a game, look for ways to use tools that are proven to work and have solid integration with your game engine. This will allow you to focus on your game and not be distracted by creating custom tools to build your game\u2019s content."),g=f(),v=o("p"),p=h("In this prototype, I\u2019m building vertical levels that require the player to jump up, across, and the player wraps around the screen - similar to Kid Icarus. There are various powerups and a mechanic that gives the player a sense of danger - "),m=o("a"),W=h("The Creeping Horak"),ve=h(" Yes - Masters of the Universe reference!)."),ae=f(),b=o("h2"),k=o("a"),R=o("span"),we=h("Powerups"),oe=f(),C=o("p"),ye=h("Powerups randomly drop when Skeletons die:"),le=f(),_=o("ul"),J=o("li"),ge=h("Heart: Player is healed for a fixed amount."),_e=f(),K=o("li"),be=h("Arrows: Arrows can drop by groups of three - two and a single arrow can drop."),ke=f(),V=o("li"),Ee=h("Nothing: Nothing drops based on the rest of the loot table."),se=f(),S=o("p"),q=o("a"),Te=h("Tiled"),Pe=h(` is used to layout all the spawn points of the player, skeletons, The Creeping Horak, and the boss - Medusa. The level design is manually built.
From the platforms to the ladders and all the way to the vines, all the level assets are managed and placed in Tiled. From there the level data is loaded into Phaser. All the tile types bind to their respective mapped sprite within Phaser.`),re=f(),M=o("p"),Ae=h("You\u2019ll also notice when climbing vines and ladders - we use a different bank of sound effects for those elements - and that data is also handled in Tiled. When the data comes in for the audio - the bank of sound effects is assigned. When a collision happens with the player and that specific object tile - a random sound effect is pulled from the bank and used."),ie=f(),E=o("h2"),T=o("a"),G=o("span"),Ie=h("Building levels and getting quick feedback"),ne=f(),B=o("p"),xe=h("Notice how we quickly make changes to the level and test the changes? If we take this a step further, we could have a listener within the game client that can hot load the new level data, pause the player, and run through the level data - update any cache and we\u2019d have hot loading."),de=f(),U=o("p"),je=h("As game developers - we have to be open to engineering a faster pipeline. However, for this prototype we\u2019re just playing around with some game mechanics and taking a deep dive into the important design questions - for example \u201Care these mechanic fun or just the same old stuff?\u201D"),he=f(),z=o("p"),Se=h("Tiled\u2019s layer support gives you freedom to seperate your level tiles and in Phaser, you can access those layers - giving you foreground/background layout out of the box. Since Phaser can access layers seperately, you can simply target one group of tiles or objects to assign behaviors to."),ue=f(),P=o("h2"),A=o("a"),O=o("span"),qe=h("Tiled - take a deep dive"),pe=f(),F=o("p"),He=h("If 2D game development has peaked your interest and you want to get started using Tiled - I recommend taking a deep dive with it. Build a simple game with collisions and object zones and learn the program. It does have a few quirks but nothing that any other editor or homegrown tool would have."),fe=f(),I=o("h2"),x=o("a"),Q=o("span"),Le=h("Resources"),ce=f(),w=o("ul"),X=o("li"),H=o("a"),Ne=h("Phaser JS - HTML5 game engine"),$e=f(),Z=o("li"),L=o("a"),De=h("Tiled"),We=f(),ee=o("li"),N=o("a"),Ce=h("Tiled Documentation"),Me=f(),te=o("li"),$=o("a"),Be=h("Tiled Discord Server"),this.h()},l(e){d=l(e,"P",{});var r=s(d);y=u(r,"When developing a game, look for ways to use tools that are proven to work and have solid integration with your game engine. This will allow you to focus on your game and not be distracted by creating custom tools to build your game\u2019s content."),r.forEach(t),g=c(e),v=l(e,"P",{});var me=s(v);p=u(me,"In this prototype, I\u2019m building vertical levels that require the player to jump up, across, and the player wraps around the screen - similar to Kid Icarus. There are various powerups and a mechanic that gives the player a sense of danger - "),m=l(me,"A",{href:!0,rel:!0});var Ke=s(m);W=u(Ke,"The Creeping Horak"),Ke.forEach(t),ve=u(me," Yes - Masters of the Universe reference!)."),me.forEach(t),ae=c(e),b=l(e,"H2",{id:!0});var Ue=s(b);k=l(Ue,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ve=s(k);R=l(Ve,"SPAN",{class:!0}),s(R).forEach(t),Ve.forEach(t),we=u(Ue,"Powerups"),Ue.forEach(t),oe=c(e),C=l(e,"P",{});var Ge=s(C);ye=u(Ge,"Powerups randomly drop when Skeletons die:"),Ge.forEach(t),le=c(e),_=l(e,"UL",{});var Y=s(_);J=l(Y,"LI",{});var Oe=s(J);ge=u(Oe,"Heart: Player is healed for a fixed amount."),Oe.forEach(t),_e=c(Y),K=l(Y,"LI",{});var Qe=s(K);be=u(Qe,"Arrows: Arrows can drop by groups of three - two and a single arrow can drop."),Qe.forEach(t),ke=c(Y),V=l(Y,"LI",{});var Xe=s(V);Ee=u(Xe,"Nothing: Nothing drops based on the rest of the loot table."),Xe.forEach(t),Y.forEach(t),se=c(e),S=l(e,"P",{});var ze=s(S);q=l(ze,"A",{href:!0,rel:!0});var Ze=s(q);Te=u(Ze,"Tiled"),Ze.forEach(t),Pe=u(ze,` is used to layout all the spawn points of the player, skeletons, The Creeping Horak, and the boss - Medusa. The level design is manually built.
From the platforms to the ladders and all the way to the vines, all the level assets are managed and placed in Tiled. From there the level data is loaded into Phaser. All the tile types bind to their respective mapped sprite within Phaser.`),ze.forEach(t),re=c(e),M=l(e,"P",{});var et=s(M);Ae=u(et,"You\u2019ll also notice when climbing vines and ladders - we use a different bank of sound effects for those elements - and that data is also handled in Tiled. When the data comes in for the audio - the bank of sound effects is assigned. When a collision happens with the player and that specific object tile - a random sound effect is pulled from the bank and used."),et.forEach(t),ie=c(e),E=l(e,"H2",{id:!0});var Fe=s(E);T=l(Fe,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var tt=s(T);G=l(tt,"SPAN",{class:!0}),s(G).forEach(t),tt.forEach(t),Ie=u(Fe,"Building levels and getting quick feedback"),Fe.forEach(t),ne=c(e),B=l(e,"P",{});var at=s(B);xe=u(at,"Notice how we quickly make changes to the level and test the changes? If we take this a step further, we could have a listener within the game client that can hot load the new level data, pause the player, and run through the level data - update any cache and we\u2019d have hot loading."),at.forEach(t),de=c(e),U=l(e,"P",{});var ot=s(U);je=u(ot,"As game developers - we have to be open to engineering a faster pipeline. However, for this prototype we\u2019re just playing around with some game mechanics and taking a deep dive into the important design questions - for example \u201Care these mechanic fun or just the same old stuff?\u201D"),ot.forEach(t),he=c(e),z=l(e,"P",{});var lt=s(z);Se=u(lt,"Tiled\u2019s layer support gives you freedom to seperate your level tiles and in Phaser, you can access those layers - giving you foreground/background layout out of the box. Since Phaser can access layers seperately, you can simply target one group of tiles or objects to assign behaviors to."),lt.forEach(t),ue=c(e),P=l(e,"H2",{id:!0});var Ye=s(P);A=l(Ye,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var st=s(A);O=l(st,"SPAN",{class:!0}),s(O).forEach(t),st.forEach(t),qe=u(Ye,"Tiled - take a deep dive"),Ye.forEach(t),pe=c(e),F=l(e,"P",{});var rt=s(F);He=u(rt,"If 2D game development has peaked your interest and you want to get started using Tiled - I recommend taking a deep dive with it. Build a simple game with collisions and object zones and learn the program. It does have a few quirks but nothing that any other editor or homegrown tool would have."),rt.forEach(t),fe=c(e),I=l(e,"H2",{id:!0});var Re=s(I);x=l(Re,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var it=s(x);Q=l(it,"SPAN",{class:!0}),s(Q).forEach(t),it.forEach(t),Le=u(Re,"Resources"),Re.forEach(t),ce=c(e),w=l(e,"UL",{});var j=s(w);X=l(j,"LI",{});var nt=s(X);H=l(nt,"A",{href:!0,rel:!0});var dt=s(H);Ne=u(dt,"Phaser JS - HTML5 game engine"),dt.forEach(t),nt.forEach(t),$e=c(j),Z=l(j,"LI",{});var ht=s(Z);L=l(ht,"A",{href:!0,rel:!0});var ut=s(L);De=u(ut,"Tiled"),ut.forEach(t),ht.forEach(t),We=c(j),ee=l(j,"LI",{});var pt=s(ee);N=l(pt,"A",{href:!0,rel:!0});var ft=s(N);Ce=u(ft,"Tiled Documentation"),ft.forEach(t),pt.forEach(t),Me=c(j),te=l(j,"LI",{});var ct=s(te);$=l(ct,"A",{href:!0,rel:!0});var mt=s($);Be=u(mt,"Tiled Discord Server"),mt.forEach(t),ct.forEach(t),j.forEach(t),this.h()},h(){i(m,"href","https://www.he-man.org/encyclopedia/viewobject.php?typeid=3&objectid=153"),i(m,"rel","nofollow"),i(R,"class","icon icon-link"),i(k,"aria-hidden","true"),i(k,"tabindex","-1"),i(k,"href","#powerups"),i(b,"id","powerups"),i(q,"href","https://www.mapeditor.org/"),i(q,"rel","nofollow"),i(G,"class","icon icon-link"),i(T,"aria-hidden","true"),i(T,"tabindex","-1"),i(T,"href","#building-levels-and-getting-quick-feedback"),i(E,"id","building-levels-and-getting-quick-feedback"),i(O,"class","icon icon-link"),i(A,"aria-hidden","true"),i(A,"tabindex","-1"),i(A,"href","#tiled---take-a-deep-dive"),i(P,"id","tiled---take-a-deep-dive"),i(Q,"class","icon icon-link"),i(x,"aria-hidden","true"),i(x,"tabindex","-1"),i(x,"href","#resources"),i(I,"id","resources"),i(H,"href","https://phaser.io"),i(H,"rel","nofollow"),i(L,"href","https://www.mapeditor.org/"),i(L,"rel","nofollow"),i(N,"href","https://doc.mapeditor.org/en/stable/"),i(N,"rel","nofollow"),i($,"href","https://discord.com/invite/39wbTv7"),i($,"rel","nofollow")},m(e,r){n(e,d,r),a(d,y),n(e,g,r),n(e,v,r),a(v,p),a(v,m),a(m,W),a(v,ve),n(e,ae,r),n(e,b,r),a(b,k),a(k,R),a(b,we),n(e,oe,r),n(e,C,r),a(C,ye),n(e,le,r),n(e,_,r),a(_,J),a(J,ge),a(_,_e),a(_,K),a(K,be),a(_,ke),a(_,V),a(V,Ee),n(e,se,r),n(e,S,r),a(S,q),a(q,Te),a(S,Pe),n(e,re,r),n(e,M,r),a(M,Ae),n(e,ie,r),n(e,E,r),a(E,T),a(T,G),a(E,Ie),n(e,ne,r),n(e,B,r),a(B,xe),n(e,de,r),n(e,U,r),a(U,je),n(e,he,r),n(e,z,r),a(z,Se),n(e,ue,r),n(e,P,r),a(P,A),a(A,O),a(P,qe),n(e,pe,r),n(e,F,r),a(F,He),n(e,fe,r),n(e,I,r),a(I,x),a(x,Q),a(I,Le),n(e,ce,r),n(e,w,r),a(w,X),a(X,H),a(H,Ne),a(w,$e),a(w,Z),a(Z,L),a(L,De),a(w,We),a(w,ee),a(ee,N),a(N,Ce),a(w,Me),a(w,te),a(te,$),a($,Be)},p:jt,d(e){e&&t(d),e&&t(g),e&&t(v),e&&t(ae),e&&t(b),e&&t(oe),e&&t(C),e&&t(le),e&&t(_),e&&t(se),e&&t(S),e&&t(re),e&&t(M),e&&t(ie),e&&t(E),e&&t(ne),e&&t(B),e&&t(de),e&&t(U),e&&t(he),e&&t(z),e&&t(ue),e&&t(P),e&&t(pe),e&&t(F),e&&t(fe),e&&t(I),e&&t(ce),e&&t(w)}}}function Ht(D){let d,y;const g=[D[0],yt];let v={$$slots:{default:[qt]},$$scope:{ctx:D}};for(let p=0;p<g.length;p+=1)v=Je(v,g[p]);return d=new St({props:v}),{c(){kt(d.$$.fragment)},l(p){Et(d.$$.fragment,p)},m(p,m){Tt(d,p,m),y=!0},p(p,[m]){const W=m&1?Pt(g,[m&1&&vt(p[0]),m&0&&vt(yt)]):{};m&2&&(W.$$scope={dirty:m,ctx:p}),d.$set(W)},i(p){y||(At(d.$$.fragment,p),y=!0)},o(p){It(d.$$.fragment,p),y=!1},d(p){xt(d,p)}}}const yt={title:"Using Tiled as a level editor with Phaser",date:"2021-02-07",modifiedDate:"2022-10-05",youtubeId:"WAmuf1ywsVc",categories:["tiled","game development","phaser"],svg:"Scene",seoImage:"https://boatr.s3.amazonaws.com/static/media/uploads/blog/ryan_sadwick_pk14.jpg",shortDescription:"When developing a game, look for ways to use tools that are proven to work and have solid integration with your game engine. This will allow you to focus on your game and not be distracted by creating custom tools to build your game's content.",author:"Ryan Sadwick"};function Lt(D,d,y){return D.$$set=g=>{y(0,d=Je(Je({},d),wt(g)))},d=wt(d),[d]}class Dt extends gt{constructor(d){super(),_t(this,d,Lt,Ht,bt,{})}}export{Dt as default,yt as metadata};
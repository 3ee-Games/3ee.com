import{S as aa,i as ia,s as oa,C as vt,w as sa,x as la,y as na,z as ra,A as Zt,q as ha,o as pa,B as da,Y as ea,e as s,t as r,k as p,c as l,a as n,h,d as t,m as d,b as u,g as i,I as o,E as fa}from"../../chunks/index-299456bd.js";import{P as ma}from"../../chunks/_post-601abf01.js";function ua(j){let f,c,g,w,m,y,I,b,W,Z,Be,Ge,Oe,A,ee,Ce,Je,$e,S,te,He,qe,he,L,Ne,pe,F,De,de,B,Me,fe,G,Ue,me,O,ae,Re,ue,C,ze,ye,J,Ke,ce,$,Qe,ge,v,_,ie,Ve,we,H,Ye,be,q,Xe,ve,N,Ze,_e,k,oe,et,tt,se,at,ke,D,it,Ee,M,ot,xe,U,le,st,Pe,R,lt,Te,E,x,ne,nt,Ie,z,rt,je,K,ht,We,Q,pt,Ae,P,T,re,dt,Se,V,ft,Le,Y,mt;return{c(){f=s("p"),c=r("I\u2019m jamming on a flappy bird type game with my son called Flappy Jacob. We\u2019ve implemented a heart point system, powerups based on a random number generator, bosses that have set patterns and attacks, and a scoring system."),g=p(),w=s("p"),m=s("strong"),y=r("Powerups -  While you\u2019re jumping through the game, different power ups appear randomly:"),I=p(),b=s("ul"),W=s("li"),Z=s("strong"),Be=r("Shield "),Ge=r(": Player can bust through the level blocks and reflect or be immune to damage from bosses."),Oe=p(),A=s("li"),ee=s("strong"),Ce=r("Feather "),Je=r(": The player\u2019s movement and jumping has less gravity applied. Boss projectiles slow down in speed."),$e=p(),S=s("li"),te=s("strong"),He=r("Weight "),qe=r(": The player\u2019s movement and jumping has more gravity applied. Boss projectiles are reflected back to the boss."),he=p(),L=s("p"),Ne=r("The feather and weight offer a challenging experience the way they are designed. Sometimes a weight is extremely helpful when you need to drop fast to avoid knocking into the walls. The feather can be beneficial when you need to float or glide through the walls."),pe=p(),F=s("p"),De=r("However, if you get one of these powerups at the wrong time, there is a chance you\u2019ll die. It does create some momentum in the game play but many times it equals death for the player."),de=p(),B=s("p"),Me=r("The shield is designed help the player along no matter what the situation is, allowing the player to destory walls."),fe=p(),G=s("p"),Ue=r("While these are some decent designs for the game\u2019s mechanics, these powerups still need work. Instead of these powerups appearing randomly based on set percentages, we could design the powerups to be collected and the player can use them when they want to. This design is different but allows the player to make a decision instead of accepting what happens randomly."),me=p(),O=s("blockquote"),ae=s("p"),Re=r("As game designers, we shouldn\u2019t accept any mechanic into the game unless it\u2019s been tested, iterated on, and tested again and again."),ue=p(),C=s("p"),ze=r("Using elements randomly has the possibility of being a good design and can be another way to add additional layers to your game play loop.  On the negative end, if we have a random mechanic causes the player to die unexpectedly, too often, the design will need more iteration. Do you need to redesign the whole mechanic? Can you get by with adding another layer to the loop? Experiment with different designs and ideas. Be positive the design is in scope and can be executed."),ye=p(),J=s("p"),Ke=r("Introduce a \u201Cmiracle\u201D type situation: the player would just wiggle through enough space to pass through the walls. Magical moments can spread stories outside of the confines of your game world. Maybe that\u2019s not enough or can be exploited. Some designs may need to be more clear. The player should be able to complete the levels or areas by learning from their mistakes.  If random powerups cause deaths - no amount of learning will help."),ce=p(),$=s("p"),Qe=r("To solve these issues, let\u2019s look at allowing the player to choose which powerup to use at a given time.  We limit the amount of powerups that can be carried to three and allow to player to decide when to activate."),ge=p(),v=s("h2"),_=s("a"),ie=s("span"),Ve=r("Balancing Act"),we=p(),H=s("p"),Ye=r("Developing a boss encounter is incredibly enjoyable. Creating all the abilities the boss can perform and attemping to balance. Picturing a design in your head seems perfect at first, right? What could go wrong? Many times when designers are coming up with a boss fight, their mind fills in the blanks.  When we see the boss in action, that\u2019s the flaws can be seen. While the boss encounter looked great in our minds and on paper, some of the gameplay wasn\u2019t thought out at all."),be=p(),q=s("p"),Xe=r("For example: the bird boss that wildly kept healing over and over; when designing this fight, bird\u2019s tuning with casting its healing spell happened too often.  The only strategy that works is to get a shield powerup and reflect the bird\u2019s projectiles back.  As seen in the video, this gameplay creates a frustrating game play experience."),ve=p(),N=s("p"),Ze=r("How do we fix this?  Let the player know the boss can heal."),_e=p(),k=s("ul"),oe=s("li"),et=r("The first few times the bird takes damage, it heals."),tt=p(),se=s("li"),at=r("Then when the bird is on its last life, it heals."),ke=p(),D=s("p"),it=r("Once those conditions are met, the boss never heals again."),Ee=p(),M=s("p"),ot=r("Another example:"),xe=p(),U=s("ul"),le=s("li"),st=r("The healing spell has a cast timer and additional of the powerups can be used to interupt."),Pe=p(),R=s("p"),lt=r("Instead of waiting for a shield to arrive - this allows for all the powerups to contribute to the player with defeating this boss."),Te=p(),E=s("h2"),x=s("a"),ne=s("span"),nt=r("Giving the Player Leeway"),Ie=p(),z=s("p"),rt=r("Pixel perfect collision detection has its place.  In this game, we\u2019re not interested in that.  Collision that is extrmely tight doesn\u2019t give the player freedom to mess up and make mistakes. Perfect collision doesn\u2019t allow the player to experiment with different moves. It all has to be the same jump, same move, and distance."),je=p(),K=s("p"),ht=r("With Flappy Jacob, if the player\u2019s hair touches the wall, does the player need to die?"),We=p(),Q=s("p"),pt=r("Giving the player additional freedom doesn\u2019t mean that the game\u2019s difficultly will be reduced. There is plently of room for balance. In our example with Flappy Jacob, reducing the player\u2019s hitbox felt instantly forgiving but still stays within the confines of the original design.  The player can die if they\u2019re not playing attention, being reckless, or not taking their time."),Ae=p(),P=s("h2"),T=s("a"),re=s("span"),dt=r("Gameplay need time and iteration"),Se=p(),V=s("p"),ft=r("A design that may play out in your mind perfectly may not work at all. There are so many things your subconscious fills in so when you get to see your creation take flight, it will likely never match the idea you had originally."),Le=p(),Y=s("p"),mt=r("It\u2019s our job to spend time at the drawing board, think of many possibilities, play with different concepts of gameplay - uncover other possibilities players will inevitably find that you never thought would exist!"),this.h()},l(e){f=l(e,"P",{});var a=n(f);c=h(a,"I\u2019m jamming on a flappy bird type game with my son called Flappy Jacob. We\u2019ve implemented a heart point system, powerups based on a random number generator, bosses that have set patterns and attacks, and a scoring system."),a.forEach(t),g=d(e),w=l(e,"P",{});var _t=n(w);m=l(_t,"STRONG",{});var kt=n(m);y=h(kt,"Powerups -  While you\u2019re jumping through the game, different power ups appear randomly:"),kt.forEach(t),_t.forEach(t),I=d(e),b=l(e,"UL",{});var X=n(b);W=l(X,"LI",{});var ut=n(W);Z=l(ut,"STRONG",{});var Et=n(Z);Be=h(Et,"Shield "),Et.forEach(t),Ge=h(ut,": Player can bust through the level blocks and reflect or be immune to damage from bosses."),ut.forEach(t),Oe=d(X),A=l(X,"LI",{});var yt=n(A);ee=l(yt,"STRONG",{});var xt=n(ee);Ce=h(xt,"Feather "),xt.forEach(t),Je=h(yt,": The player\u2019s movement and jumping has less gravity applied. Boss projectiles slow down in speed."),yt.forEach(t),$e=d(X),S=l(X,"LI",{});var ct=n(S);te=l(ct,"STRONG",{});var Pt=n(te);He=h(Pt,"Weight "),Pt.forEach(t),qe=h(ct,": The player\u2019s movement and jumping has more gravity applied. Boss projectiles are reflected back to the boss."),ct.forEach(t),X.forEach(t),he=d(e),L=l(e,"P",{});var Tt=n(L);Ne=h(Tt,"The feather and weight offer a challenging experience the way they are designed. Sometimes a weight is extremely helpful when you need to drop fast to avoid knocking into the walls. The feather can be beneficial when you need to float or glide through the walls."),Tt.forEach(t),pe=d(e),F=l(e,"P",{});var It=n(F);De=h(It,"However, if you get one of these powerups at the wrong time, there is a chance you\u2019ll die. It does create some momentum in the game play but many times it equals death for the player."),It.forEach(t),de=d(e),B=l(e,"P",{});var jt=n(B);Me=h(jt,"The shield is designed help the player along no matter what the situation is, allowing the player to destory walls."),jt.forEach(t),fe=d(e),G=l(e,"P",{});var Wt=n(G);Ue=h(Wt,"While these are some decent designs for the game\u2019s mechanics, these powerups still need work. Instead of these powerups appearing randomly based on set percentages, we could design the powerups to be collected and the player can use them when they want to. This design is different but allows the player to make a decision instead of accepting what happens randomly."),Wt.forEach(t),me=d(e),O=l(e,"BLOCKQUOTE",{});var At=n(O);ae=l(At,"P",{});var St=n(ae);Re=h(St,"As game designers, we shouldn\u2019t accept any mechanic into the game unless it\u2019s been tested, iterated on, and tested again and again."),St.forEach(t),At.forEach(t),ue=d(e),C=l(e,"P",{});var Lt=n(C);ze=h(Lt,"Using elements randomly has the possibility of being a good design and can be another way to add additional layers to your game play loop.  On the negative end, if we have a random mechanic causes the player to die unexpectedly, too often, the design will need more iteration. Do you need to redesign the whole mechanic? Can you get by with adding another layer to the loop? Experiment with different designs and ideas. Be positive the design is in scope and can be executed."),Lt.forEach(t),ye=d(e),J=l(e,"P",{});var Ft=n(J);Ke=h(Ft,"Introduce a \u201Cmiracle\u201D type situation: the player would just wiggle through enough space to pass through the walls. Magical moments can spread stories outside of the confines of your game world. Maybe that\u2019s not enough or can be exploited. Some designs may need to be more clear. The player should be able to complete the levels or areas by learning from their mistakes.  If random powerups cause deaths - no amount of learning will help."),Ft.forEach(t),ce=d(e),$=l(e,"P",{});var Bt=n($);Qe=h(Bt,"To solve these issues, let\u2019s look at allowing the player to choose which powerup to use at a given time.  We limit the amount of powerups that can be carried to three and allow to player to decide when to activate."),Bt.forEach(t),ge=d(e),v=l(e,"H2",{id:!0});var gt=n(v);_=l(gt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Gt=n(_);ie=l(Gt,"SPAN",{class:!0}),n(ie).forEach(t),Gt.forEach(t),Ve=h(gt,"Balancing Act"),gt.forEach(t),we=d(e),H=l(e,"P",{});var Ot=n(H);Ye=h(Ot,"Developing a boss encounter is incredibly enjoyable. Creating all the abilities the boss can perform and attemping to balance. Picturing a design in your head seems perfect at first, right? What could go wrong? Many times when designers are coming up with a boss fight, their mind fills in the blanks.  When we see the boss in action, that\u2019s the flaws can be seen. While the boss encounter looked great in our minds and on paper, some of the gameplay wasn\u2019t thought out at all."),Ot.forEach(t),be=d(e),q=l(e,"P",{});var Ct=n(q);Xe=h(Ct,"For example: the bird boss that wildly kept healing over and over; when designing this fight, bird\u2019s tuning with casting its healing spell happened too often.  The only strategy that works is to get a shield powerup and reflect the bird\u2019s projectiles back.  As seen in the video, this gameplay creates a frustrating game play experience."),Ct.forEach(t),ve=d(e),N=l(e,"P",{});var Jt=n(N);Ze=h(Jt,"How do we fix this?  Let the player know the boss can heal."),Jt.forEach(t),_e=d(e),k=l(e,"UL",{});var Fe=n(k);oe=l(Fe,"LI",{});var $t=n(oe);et=h($t,"The first few times the bird takes damage, it heals."),$t.forEach(t),tt=d(Fe),se=l(Fe,"LI",{});var Ht=n(se);at=h(Ht,"Then when the bird is on its last life, it heals."),Ht.forEach(t),Fe.forEach(t),ke=d(e),D=l(e,"P",{});var qt=n(D);it=h(qt,"Once those conditions are met, the boss never heals again."),qt.forEach(t),Ee=d(e),M=l(e,"P",{});var Nt=n(M);ot=h(Nt,"Another example:"),Nt.forEach(t),xe=d(e),U=l(e,"UL",{});var Dt=n(U);le=l(Dt,"LI",{});var Mt=n(le);st=h(Mt,"The healing spell has a cast timer and additional of the powerups can be used to interupt."),Mt.forEach(t),Dt.forEach(t),Pe=d(e),R=l(e,"P",{});var Ut=n(R);lt=h(Ut,"Instead of waiting for a shield to arrive - this allows for all the powerups to contribute to the player with defeating this boss."),Ut.forEach(t),Te=d(e),E=l(e,"H2",{id:!0});var wt=n(E);x=l(wt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Rt=n(x);ne=l(Rt,"SPAN",{class:!0}),n(ne).forEach(t),Rt.forEach(t),nt=h(wt,"Giving the Player Leeway"),wt.forEach(t),Ie=d(e),z=l(e,"P",{});var zt=n(z);rt=h(zt,"Pixel perfect collision detection has its place.  In this game, we\u2019re not interested in that.  Collision that is extrmely tight doesn\u2019t give the player freedom to mess up and make mistakes. Perfect collision doesn\u2019t allow the player to experiment with different moves. It all has to be the same jump, same move, and distance."),zt.forEach(t),je=d(e),K=l(e,"P",{});var Kt=n(K);ht=h(Kt,"With Flappy Jacob, if the player\u2019s hair touches the wall, does the player need to die?"),Kt.forEach(t),We=d(e),Q=l(e,"P",{});var Qt=n(Q);pt=h(Qt,"Giving the player additional freedom doesn\u2019t mean that the game\u2019s difficultly will be reduced. There is plently of room for balance. In our example with Flappy Jacob, reducing the player\u2019s hitbox felt instantly forgiving but still stays within the confines of the original design.  The player can die if they\u2019re not playing attention, being reckless, or not taking their time."),Qt.forEach(t),Ae=d(e),P=l(e,"H2",{id:!0});var bt=n(P);T=l(bt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Vt=n(T);re=l(Vt,"SPAN",{class:!0}),n(re).forEach(t),Vt.forEach(t),dt=h(bt,"Gameplay need time and iteration"),bt.forEach(t),Se=d(e),V=l(e,"P",{});var Yt=n(V);ft=h(Yt,"A design that may play out in your mind perfectly may not work at all. There are so many things your subconscious fills in so when you get to see your creation take flight, it will likely never match the idea you had originally."),Yt.forEach(t),Le=d(e),Y=l(e,"P",{});var Xt=n(Y);mt=h(Xt,"It\u2019s our job to spend time at the drawing board, think of many possibilities, play with different concepts of gameplay - uncover other possibilities players will inevitably find that you never thought would exist!"),Xt.forEach(t),this.h()},h(){u(ie,"class","icon icon-link"),u(_,"aria-hidden","true"),u(_,"tabindex","-1"),u(_,"href","#balancing-act"),u(v,"id","balancing-act"),u(ne,"class","icon icon-link"),u(x,"aria-hidden","true"),u(x,"tabindex","-1"),u(x,"href","#giving-the-player-leeway"),u(E,"id","giving-the-player-leeway"),u(re,"class","icon icon-link"),u(T,"aria-hidden","true"),u(T,"tabindex","-1"),u(T,"href","#gameplay-need-time-and-iteration"),u(P,"id","gameplay-need-time-and-iteration")},m(e,a){i(e,f,a),o(f,c),i(e,g,a),i(e,w,a),o(w,m),o(m,y),i(e,I,a),i(e,b,a),o(b,W),o(W,Z),o(Z,Be),o(W,Ge),o(b,Oe),o(b,A),o(A,ee),o(ee,Ce),o(A,Je),o(b,$e),o(b,S),o(S,te),o(te,He),o(S,qe),i(e,he,a),i(e,L,a),o(L,Ne),i(e,pe,a),i(e,F,a),o(F,De),i(e,de,a),i(e,B,a),o(B,Me),i(e,fe,a),i(e,G,a),o(G,Ue),i(e,me,a),i(e,O,a),o(O,ae),o(ae,Re),i(e,ue,a),i(e,C,a),o(C,ze),i(e,ye,a),i(e,J,a),o(J,Ke),i(e,ce,a),i(e,$,a),o($,Qe),i(e,ge,a),i(e,v,a),o(v,_),o(_,ie),o(v,Ve),i(e,we,a),i(e,H,a),o(H,Ye),i(e,be,a),i(e,q,a),o(q,Xe),i(e,ve,a),i(e,N,a),o(N,Ze),i(e,_e,a),i(e,k,a),o(k,oe),o(oe,et),o(k,tt),o(k,se),o(se,at),i(e,ke,a),i(e,D,a),o(D,it),i(e,Ee,a),i(e,M,a),o(M,ot),i(e,xe,a),i(e,U,a),o(U,le),o(le,st),i(e,Pe,a),i(e,R,a),o(R,lt),i(e,Te,a),i(e,E,a),o(E,x),o(x,ne),o(E,nt),i(e,Ie,a),i(e,z,a),o(z,rt),i(e,je,a),i(e,K,a),o(K,ht),i(e,We,a),i(e,Q,a),o(Q,pt),i(e,Ae,a),i(e,P,a),o(P,T),o(T,re),o(P,dt),i(e,Se,a),i(e,V,a),o(V,ft),i(e,Le,a),i(e,Y,a),o(Y,mt)},p:fa,d(e){e&&t(f),e&&t(g),e&&t(w),e&&t(I),e&&t(b),e&&t(he),e&&t(L),e&&t(pe),e&&t(F),e&&t(de),e&&t(B),e&&t(fe),e&&t(G),e&&t(me),e&&t(O),e&&t(ue),e&&t(C),e&&t(ye),e&&t(J),e&&t(ce),e&&t($),e&&t(ge),e&&t(v),e&&t(we),e&&t(H),e&&t(be),e&&t(q),e&&t(ve),e&&t(N),e&&t(_e),e&&t(k),e&&t(ke),e&&t(D),e&&t(Ee),e&&t(M),e&&t(xe),e&&t(U),e&&t(Pe),e&&t(R),e&&t(Te),e&&t(E),e&&t(Ie),e&&t(z),e&&t(je),e&&t(K),e&&t(We),e&&t(Q),e&&t(Ae),e&&t(P),e&&t(Se),e&&t(V),e&&t(Le),e&&t(Y)}}}function ya(j){let f,c;const g=[j[0],ta];let w={$$slots:{default:[ua]},$$scope:{ctx:j}};for(let m=0;m<g.length;m+=1)w=vt(w,g[m]);return f=new ma({props:w}),{c(){sa(f.$$.fragment)},l(m){la(f.$$.fragment,m)},m(m,y){na(f,m,y),c=!0},p(m,[y]){const I=y&1?ra(g,[y&1&&Zt(m[0]),y&0&&Zt(ta)]):{};y&2&&(I.$$scope={dirty:y,ctx:m}),f.$set(I)},i(m){c||(ha(f.$$.fragment,m),c=!0)},o(m){pa(f.$$.fragment,m),c=!1},d(m){da(f,m)}}}const ta={title:"Flappy Jacob Prototype",date:"2020-08-18",modifiedDate:"2022-05-30",youtubeId:"EB-mtWpHVkg",categories:["game development","phaser"],svg:"Balance",seoImage:"https://boatr.s3.amazonaws.com/static/media/uploads/blog/blog_jac.jpg",shortDescription:"Jamming on a flappy bird type game with my son called Flappy Jacob. We've implemented a heart point system, powerups based on a random number generator, bosses that have set patterns and attacks, and a scoring system.",author:"Ryan Sadwick"};function ca(j,f,c){return j.$$set=g=>{c(0,f=vt(vt({},f),ea(g)))},f=ea(f),[f]}class ba extends aa{constructor(f){super(),ia(this,f,ca,ya,oa,{})}}export{ba as default,ta as metadata};

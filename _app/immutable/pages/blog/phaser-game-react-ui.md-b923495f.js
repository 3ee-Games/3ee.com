import{S as zn,i as Qn,s as Kn,C as Ls,w as Yn,x as Zn,y as Vn,z as eo,A as Jn,q as to,o as ao,B as so,Z as Mn,e as s,t as l,k as u,c as n,a as o,h as p,d as t,m as h,b as r,g as c,I as a,E as no}from"../../chunks/index-8ed999ca.js";import{P as oo}from"../../chunks/_post-60c1c672.js";import"../../chunks/menuContextStore-382f91e1.js";import"../../chunks/index-71ac3aa5.js";function lo(le){let f,b,_,E,d,g,pe,ut,ie,Gt,ht,H,T,ye,Xt,dt,ce,zt,ft,re,Qt,kt,ue,xe,Kt,mt,S,O,Ie,Yt,vt,he,Zt,gt,R,de,Ce,Vt,ea,ta,C,aa,Pe,sa,na,He,oa,la,Et,fe,pa,wt,D,j,Te,ia,bt,w,A,Se,ca,ra,Oe,ua,ha,da,L,Re,fa,ka,De,ma,va,ga,N,je,Ea,wa,Ae,ba,_a,ya,U,Le,xa,Ia,Ne,Ca,Pa,_t,q,F,Ue,Ha,yt,ke,Ta,xt,J,qe,Sa,Oa,Fe,Ra,It,M,Da,Z,ja,Aa,Ct,W,La,Je,Na,Ua,Pt,B,$,Me,qa,Ht,me,Fa,Tt,V,Bn=`<code class="language-jsx"><span class="token comment">// Class component</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> Component <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#123;</span>
  state <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">agility</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">balance</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sight</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Cat Stats</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Agility: </span><span class="token punctuation">&#123;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>agility<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Balance: </span><span class="token punctuation">&#123;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>balance<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Sight: </span><span class="token punctuation">&#123;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>sight<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Cat<span class="token punctuation">;</span></code>`,St,ve,Ja,Ot,ee,$n=`<code class="language-jsx"><span class="token comment">// Functional component</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Cat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> agility<span class="token punctuation">,</span> balance<span class="token punctuation">,</span> sight <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Cat Stats</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Agility: </span><span class="token punctuation">&#123;</span>agility<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Balance: </span><span class="token punctuation">&#123;</span>balance<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Sight: </span><span class="token punctuation">&#123;</span>sight<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Cat<span class="token punctuation">;</span></code>`,Rt,k,Ma,We,Wa,Ba,Be,$a,Ga,$e,Xa,za,Ge,Qa,Ka,Dt,m,Ya,Xe,Za,Va,ze,es,ts,Qe,as,ss,Ke,ns,os,jt,G,ls,Ye,ps,is,At,ge,P,cs,Ze,rs,us,Ve,hs,ds,Lt,X,z,et,fs,Nt,Ee,ks,Ut,Q,K,tt,ms,qt,we,vs,Ft,v,at,te,gs,Es,st,ae,ws,bs,nt,se,_s,ys,ot,ne,xs,Is,lt,oe,Cs;return{c(){f=s("p"),b=l("I find it interesting to consider the idea of using React as a UI and Phaser as a headless, UI-less game engine. In this blog post, I\u2019ll explore this concept in more detail."),_=u(),E=s("h2"),d=s("a"),g=s("span"),pe=l("The Concept"),ut=u(),ie=s("p"),Gt=l("The idea behind this approach is to use React to handle the UI elements of a game, while using Phaser as a headless game engine to handle the gameplay mechanics. This approach can help to alleviate the burden of handling the UI in Canvas. RequestAnimationFrame can be expensive and should be used for the game only. The canvas game shouldn\u2019t be wasting valuable updates for the UI."),ht=u(),H=s("h2"),T=s("a"),ye=s("span"),Xt=l("The Game"),dt=u(),ce=s("p"),zt=l("The game we\u2019ll be developing is using Next.js (a React framework) and Phaser (JavaScript game engine). Next.js compiles a static HTML version of the game that can be used on iOS/Android webview for mobile, NW.js/Electron for desktop (similar to what Discord does)."),ft=u(),re=s("p"),Qt=l("The game is a Next.js application that builds the Phaser game and starts up normally. The Next.js application is handling the UI elements like the merchant dialog, player bag, player armory, and other dialogs like the death dialog."),kt=u(),ue=s("blockquote"),xe=s("p"),Kt=l("This is a similar approach to older console games that used Scaleform - which under the hood was using Flash and overlaying the UI created by a Flash developer. From there, Scaleform would sit on top of the c++ game engine."),mt=u(),S=s("h2"),O=s("a"),Ie=s("span"),Yt=l("Writing the Bridge between Canvas and React"),vt=u(),he=s("p"),Zt=l("To create the bridge between Phaser and React, we\u2019ll use an event listener:"),gt=u(),R=s("ul"),de=s("li"),Ce=s("code"),Vt=l("addEventListener"),ea=l(" on the document object to send objects back and forth."),ta=u(),C=s("li"),aa=l("The implementation of "),Pe=s("code"),sa=l("addEventListener"),na=l(" is contained within a hook that implements an Effect Hook: "),He=s("code"),oa=l("useEffect"),la=l(" so that state can be passed in."),Et=u(),fe=s("p"),pa=l("The performance issue that was solved here was to convert the class components (Bag, Armory, DeathDialog, MerchantDialog) to functional components and then use hooks to manage the add/remove listeners."),wt=u(),D=s("h3"),j=s("a"),Te=s("span"),ia=l("Types of Hooks"),bt=u(),w=s("ul"),A=s("li"),Se=s("strong"),ca=l("State Hooks:"),ra=u(),Oe=s("code"),ua=l("useState"),ha=l(" - called inside a function component to add some local state (e.g., a counter)."),da=u(),L=s("li"),Re=s("strong"),fa=l("Effect Hooks:"),ka=u(),De=s("code"),ma=l("useEffect"),va=l(" - perform side effects from a function component (e.g., listening to an event fire from the DOM)."),ga=u(),N=s("li"),je=s("strong"),Ea=l("Context Hooks:"),wa=u(),Ae=s("code"),ba=l("useContext"),_a=l(" - subscribe to React context without introducing nesting (e.g., dark & light themes)."),ya=u(),U=s("li"),Le=s("strong"),xa=l("Reducer Hooks:"),Ia=u(),Ne=s("code"),Ca=l("useReducer"),Pa=l(" - lets you manage the local state of complex components with a reducer (e.g., dealing with complex state logic)."),_t=u(),q=s("h3"),F=s("a"),Ue=s("span"),Ha=l("Rules of Using Hooks"),yt=u(),ke=s("p"),Ta=l("Take the time to learn hooks and using functional components."),xt=u(),J=s("ul"),qe=s("li"),Sa=l("Call Hooks at the top level only: Only call Hooks at the top level. Don\u2019t call Hooks inside loops, conditions, or nested functions."),Oa=u(),Fe=s("li"),Ra=l("Functional Components only: Only call Hooks from React function components. Don\u2019t call Hooks from regular JavaScript functions (see Custom Hooks)."),It=u(),M=s("p"),Da=l("If you are using class components, don\u2019t worry - porting class components to functional components is trivial. Simply follow the "),Z=s("a"),ja=l("pattern of functional components"),Aa=l(" when porting classes."),Ct=u(),W=s("p"),La=l("Pay close attention to "),Je=s("code"),Na=l("useState"),Ua=l(" when rewriting your new functional components. Once you spend time writing functional components, you\u2019ll enjoy using them, and paired with hooks, they make the component design simple to implement and iterate on the design of the interface."),Pt=u(),B=s("h2"),$=s("a"),Me=s("span"),qa=l("class to functional component"),Ht=u(),me=s("p"),Fa=l("An example of the class component.  It\u2019s a Cat that holds state for agility, balance, and sight:"),Tt=u(),V=s("pre"),St=u(),ve=s("p"),Ja=l("Now, let\u2019s see how we can convert this class component into a functional component."),Ot=u(),ee=s("pre"),Rt=u(),k=s("p"),Ma=l("In the above example, we have a "),We=s("code"),Wa=l("Cat"),Ba=l(" component that is originally written as a class component. It has a state object that holds the cat\u2019s abilities: "),Be=s("code"),$a=l("agility"),Ga=l(", "),$e=s("code"),Xa=l("balance"),za=l(", and "),Ge=s("code"),Qa=l("sight"),Ka=l(". The render method displays the cat\u2019s stats using JSX."),Dt=u(),m=s("p"),Ya=l("To convert this component to a functional component, we can replace the class declaration with a function declaration. We also need to remove the "),Xe=s("code"),Za=l("state"),Va=l(" object and replace it with parameters passed into the function. In this example, the parameters are "),ze=s("code"),es=l("agility"),ts=l(", "),Qe=s("code"),as=l("balance"),ss=l(", and "),Ke=s("code"),ns=l("sight"),os=l("."),jt=u(),G=s("p"),ls=l("In the functional component version of the "),Ye=s("code"),ps=l("Cat"),is=l(" component, we use destructuring to extract the parameters from the props object. We then use those parameters to display the cat\u2019s stats using JSX."),At=u(),ge=s("blockquote"),P=s("p"),cs=l("\u{1F4C4} Note that the functional component does not have a "),Ze=s("code"),rs=l("this"),us=l(" object or a "),Ve=s("code"),hs=l("render"),ds=l(" method. Instead, we simply return JSX directly from the function."),Lt=u(),X=s("h2"),z=s("a"),et=s("span"),fs=l("Have a solid understanding of Hooks"),Nt=u(),Ee=s("p"),ks=l("Taking the time to understand hooks and why we are using them is the first important building block to building the bridge between the game engine and UI. Pick the areas that you need side effects - the Effect Hook, which allows for data fetching, DOM updates, and for our example for the bridge: we use addEventListener within useEffect.  In the callback for useEffect, pass in removeEventListener to clean up that instance of the event listener."),Ut=u(),Q=s("h2"),K=s("a"),tt=s("span"),ms=l("Resources and frameworks"),qt=u(),we=s("p"),vs=l("Here\u2019s all the resources and frameworks used in the video:"),Ft=u(),v=s("ul"),at=s("li"),te=s("a"),gs=l("Phaser with a React UI Youtube video"),Es=u(),st=s("li"),ae=s("a"),ws=l("Phaser JS - HTML5 game engine"),bs=u(),nt=s("li"),se=s("a"),_s=l("Next.js"),ys=u(),ot=s("li"),ne=s("a"),xs=l("React"),Is=u(),lt=s("li"),oe=s("a"),Cs=l("Hooks at a glance"),this.h()},l(e){f=n(e,"P",{});var i=o(f);b=p(i,"I find it interesting to consider the idea of using React as a UI and Phaser as a headless, UI-less game engine. In this blog post, I\u2019ll explore this concept in more detail."),i.forEach(t),_=h(e),E=n(e,"H2",{id:!0});var Ps=o(E);d=n(Ps,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ns=o(d);g=n(Ns,"SPAN",{class:!0}),o(g).forEach(t),Ns.forEach(t),pe=p(Ps,"The Concept"),Ps.forEach(t),ut=h(e),ie=n(e,"P",{});var Us=o(ie);Gt=p(Us,"The idea behind this approach is to use React to handle the UI elements of a game, while using Phaser as a headless game engine to handle the gameplay mechanics. This approach can help to alleviate the burden of handling the UI in Canvas. RequestAnimationFrame can be expensive and should be used for the game only. The canvas game shouldn\u2019t be wasting valuable updates for the UI."),Us.forEach(t),ht=h(e),H=n(e,"H2",{id:!0});var Hs=o(H);T=n(Hs,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var qs=o(T);ye=n(qs,"SPAN",{class:!0}),o(ye).forEach(t),qs.forEach(t),Xt=p(Hs,"The Game"),Hs.forEach(t),dt=h(e),ce=n(e,"P",{});var Fs=o(ce);zt=p(Fs,"The game we\u2019ll be developing is using Next.js (a React framework) and Phaser (JavaScript game engine). Next.js compiles a static HTML version of the game that can be used on iOS/Android webview for mobile, NW.js/Electron for desktop (similar to what Discord does)."),Fs.forEach(t),ft=h(e),re=n(e,"P",{});var Js=o(re);Qt=p(Js,"The game is a Next.js application that builds the Phaser game and starts up normally. The Next.js application is handling the UI elements like the merchant dialog, player bag, player armory, and other dialogs like the death dialog."),Js.forEach(t),kt=h(e),ue=n(e,"BLOCKQUOTE",{});var Ms=o(ue);xe=n(Ms,"P",{});var Ws=o(xe);Kt=p(Ws,"This is a similar approach to older console games that used Scaleform - which under the hood was using Flash and overlaying the UI created by a Flash developer. From there, Scaleform would sit on top of the c++ game engine."),Ws.forEach(t),Ms.forEach(t),mt=h(e),S=n(e,"H2",{id:!0});var Ts=o(S);O=n(Ts,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Bs=o(O);Ie=n(Bs,"SPAN",{class:!0}),o(Ie).forEach(t),Bs.forEach(t),Yt=p(Ts,"Writing the Bridge between Canvas and React"),Ts.forEach(t),vt=h(e),he=n(e,"P",{});var $s=o(he);Zt=p($s,"To create the bridge between Phaser and React, we\u2019ll use an event listener:"),$s.forEach(t),gt=h(e),R=n(e,"UL",{});var Jt=o(R);de=n(Jt,"LI",{});var Ss=o(de);Ce=n(Ss,"CODE",{});var Gs=o(Ce);Vt=p(Gs,"addEventListener"),Gs.forEach(t),ea=p(Ss," on the document object to send objects back and forth."),Ss.forEach(t),ta=h(Jt),C=n(Jt,"LI",{});var be=o(C);aa=p(be,"The implementation of "),Pe=n(be,"CODE",{});var Xs=o(Pe);sa=p(Xs,"addEventListener"),Xs.forEach(t),na=p(be," is contained within a hook that implements an Effect Hook: "),He=n(be,"CODE",{});var zs=o(He);oa=p(zs,"useEffect"),zs.forEach(t),la=p(be," so that state can be passed in."),be.forEach(t),Jt.forEach(t),Et=h(e),fe=n(e,"P",{});var Qs=o(fe);pa=p(Qs,"The performance issue that was solved here was to convert the class components (Bag, Armory, DeathDialog, MerchantDialog) to functional components and then use hooks to manage the add/remove listeners."),Qs.forEach(t),wt=h(e),D=n(e,"H3",{id:!0});var Os=o(D);j=n(Os,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ks=o(j);Te=n(Ks,"SPAN",{class:!0}),o(Te).forEach(t),Ks.forEach(t),ia=p(Os,"Types of Hooks"),Os.forEach(t),bt=h(e),w=n(e,"UL",{});var Y=o(w);A=n(Y,"LI",{});var pt=o(A);Se=n(pt,"STRONG",{});var Ys=o(Se);ca=p(Ys,"State Hooks:"),Ys.forEach(t),ra=h(pt),Oe=n(pt,"CODE",{});var Zs=o(Oe);ua=p(Zs,"useState"),Zs.forEach(t),ha=p(pt," - called inside a function component to add some local state (e.g., a counter)."),pt.forEach(t),da=h(Y),L=n(Y,"LI",{});var it=o(L);Re=n(it,"STRONG",{});var Vs=o(Re);fa=p(Vs,"Effect Hooks:"),Vs.forEach(t),ka=h(it),De=n(it,"CODE",{});var en=o(De);ma=p(en,"useEffect"),en.forEach(t),va=p(it," - perform side effects from a function component (e.g., listening to an event fire from the DOM)."),it.forEach(t),ga=h(Y),N=n(Y,"LI",{});var ct=o(N);je=n(ct,"STRONG",{});var tn=o(je);Ea=p(tn,"Context Hooks:"),tn.forEach(t),wa=h(ct),Ae=n(ct,"CODE",{});var an=o(Ae);ba=p(an,"useContext"),an.forEach(t),_a=p(ct," - subscribe to React context without introducing nesting (e.g., dark & light themes)."),ct.forEach(t),ya=h(Y),U=n(Y,"LI",{});var rt=o(U);Le=n(rt,"STRONG",{});var sn=o(Le);xa=p(sn,"Reducer Hooks:"),sn.forEach(t),Ia=h(rt),Ne=n(rt,"CODE",{});var nn=o(Ne);Ca=p(nn,"useReducer"),nn.forEach(t),Pa=p(rt," - lets you manage the local state of complex components with a reducer (e.g., dealing with complex state logic)."),rt.forEach(t),Y.forEach(t),_t=h(e),q=n(e,"H3",{id:!0});var Rs=o(q);F=n(Rs,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var on=o(F);Ue=n(on,"SPAN",{class:!0}),o(Ue).forEach(t),on.forEach(t),Ha=p(Rs,"Rules of Using Hooks"),Rs.forEach(t),yt=h(e),ke=n(e,"P",{});var ln=o(ke);Ta=p(ln,"Take the time to learn hooks and using functional components."),ln.forEach(t),xt=h(e),J=n(e,"UL",{});var Mt=o(J);qe=n(Mt,"LI",{});var pn=o(qe);Sa=p(pn,"Call Hooks at the top level only: Only call Hooks at the top level. Don\u2019t call Hooks inside loops, conditions, or nested functions."),pn.forEach(t),Oa=h(Mt),Fe=n(Mt,"LI",{});var cn=o(Fe);Ra=p(cn,"Functional Components only: Only call Hooks from React function components. Don\u2019t call Hooks from regular JavaScript functions (see Custom Hooks)."),cn.forEach(t),Mt.forEach(t),It=h(e),M=n(e,"P",{});var Wt=o(M);Da=p(Wt,"If you are using class components, don\u2019t worry - porting class components to functional components is trivial. Simply follow the "),Z=n(Wt,"A",{href:!0,rel:!0});var rn=o(Z);ja=p(rn,"pattern of functional components"),rn.forEach(t),Aa=p(Wt," when porting classes."),Wt.forEach(t),Ct=h(e),W=n(e,"P",{});var Bt=o(W);La=p(Bt,"Pay close attention to "),Je=n(Bt,"CODE",{});var un=o(Je);Na=p(un,"useState"),un.forEach(t),Ua=p(Bt," when rewriting your new functional components. Once you spend time writing functional components, you\u2019ll enjoy using them, and paired with hooks, they make the component design simple to implement and iterate on the design of the interface."),Bt.forEach(t),Pt=h(e),B=n(e,"H2",{id:!0});var Ds=o(B);$=n(Ds,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var hn=o($);Me=n(hn,"SPAN",{class:!0}),o(Me).forEach(t),hn.forEach(t),qa=p(Ds,"class to functional component"),Ds.forEach(t),Ht=h(e),me=n(e,"P",{});var dn=o(me);Fa=p(dn,"An example of the class component.  It\u2019s a Cat that holds state for agility, balance, and sight:"),dn.forEach(t),Tt=h(e),V=n(e,"PRE",{class:!0});var Gn=o(V);Gn.forEach(t),St=h(e),ve=n(e,"P",{});var fn=o(ve);Ja=p(fn,"Now, let\u2019s see how we can convert this class component into a functional component."),fn.forEach(t),Ot=h(e),ee=n(e,"PRE",{class:!0});var Xn=o(ee);Xn.forEach(t),Rt=h(e),k=n(e,"P",{});var y=o(k);Ma=p(y,"In the above example, we have a "),We=n(y,"CODE",{});var kn=o(We);Wa=p(kn,"Cat"),kn.forEach(t),Ba=p(y," component that is originally written as a class component. It has a state object that holds the cat\u2019s abilities: "),Be=n(y,"CODE",{});var mn=o(Be);$a=p(mn,"agility"),mn.forEach(t),Ga=p(y,", "),$e=n(y,"CODE",{});var vn=o($e);Xa=p(vn,"balance"),vn.forEach(t),za=p(y,", and "),Ge=n(y,"CODE",{});var gn=o(Ge);Qa=p(gn,"sight"),gn.forEach(t),Ka=p(y,". The render method displays the cat\u2019s stats using JSX."),y.forEach(t),Dt=h(e),m=n(e,"P",{});var x=o(m);Ya=p(x,"To convert this component to a functional component, we can replace the class declaration with a function declaration. We also need to remove the "),Xe=n(x,"CODE",{});var En=o(Xe);Za=p(En,"state"),En.forEach(t),Va=p(x," object and replace it with parameters passed into the function. In this example, the parameters are "),ze=n(x,"CODE",{});var wn=o(ze);es=p(wn,"agility"),wn.forEach(t),ts=p(x,", "),Qe=n(x,"CODE",{});var bn=o(Qe);as=p(bn,"balance"),bn.forEach(t),ss=p(x,", and "),Ke=n(x,"CODE",{});var _n=o(Ke);ns=p(_n,"sight"),_n.forEach(t),os=p(x,"."),x.forEach(t),jt=h(e),G=n(e,"P",{});var $t=o(G);ls=p($t,"In the functional component version of the "),Ye=n($t,"CODE",{});var yn=o(Ye);ps=p(yn,"Cat"),yn.forEach(t),is=p($t," component, we use destructuring to extract the parameters from the props object. We then use those parameters to display the cat\u2019s stats using JSX."),$t.forEach(t),At=h(e),ge=n(e,"BLOCKQUOTE",{});var xn=o(ge);P=n(xn,"P",{});var _e=o(P);cs=p(_e,"\u{1F4C4} Note that the functional component does not have a "),Ze=n(_e,"CODE",{});var In=o(Ze);rs=p(In,"this"),In.forEach(t),us=p(_e," object or a "),Ve=n(_e,"CODE",{});var Cn=o(Ve);hs=p(Cn,"render"),Cn.forEach(t),ds=p(_e," method. Instead, we simply return JSX directly from the function."),_e.forEach(t),xn.forEach(t),Lt=h(e),X=n(e,"H2",{id:!0});var js=o(X);z=n(js,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Pn=o(z);et=n(Pn,"SPAN",{class:!0}),o(et).forEach(t),Pn.forEach(t),fs=p(js,"Have a solid understanding of Hooks"),js.forEach(t),Nt=h(e),Ee=n(e,"P",{});var Hn=o(Ee);ks=p(Hn,"Taking the time to understand hooks and why we are using them is the first important building block to building the bridge between the game engine and UI. Pick the areas that you need side effects - the Effect Hook, which allows for data fetching, DOM updates, and for our example for the bridge: we use addEventListener within useEffect.  In the callback for useEffect, pass in removeEventListener to clean up that instance of the event listener."),Hn.forEach(t),Ut=h(e),Q=n(e,"H2",{id:!0});var As=o(Q);K=n(As,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Tn=o(K);tt=n(Tn,"SPAN",{class:!0}),o(tt).forEach(t),Tn.forEach(t),ms=p(As,"Resources and frameworks"),As.forEach(t),qt=h(e),we=n(e,"P",{});var Sn=o(we);vs=p(Sn,"Here\u2019s all the resources and frameworks used in the video:"),Sn.forEach(t),Ft=h(e),v=n(e,"UL",{});var I=o(v);at=n(I,"LI",{});var On=o(at);te=n(On,"A",{href:!0,rel:!0});var Rn=o(te);gs=p(Rn,"Phaser with a React UI Youtube video"),Rn.forEach(t),On.forEach(t),Es=h(I),st=n(I,"LI",{});var Dn=o(st);ae=n(Dn,"A",{href:!0,rel:!0});var jn=o(ae);ws=p(jn,"Phaser JS - HTML5 game engine"),jn.forEach(t),Dn.forEach(t),bs=h(I),nt=n(I,"LI",{});var An=o(nt);se=n(An,"A",{href:!0,rel:!0});var Ln=o(se);_s=p(Ln,"Next.js"),Ln.forEach(t),An.forEach(t),ys=h(I),ot=n(I,"LI",{});var Nn=o(ot);ne=n(Nn,"A",{href:!0,rel:!0});var Un=o(ne);xs=p(Un,"React"),Un.forEach(t),Nn.forEach(t),Is=h(I),lt=n(I,"LI",{});var qn=o(lt);oe=n(qn,"A",{href:!0,rel:!0});var Fn=o(oe);Cs=p(Fn,"Hooks at a glance"),Fn.forEach(t),qn.forEach(t),I.forEach(t),this.h()},h(){r(g,"class","icon icon-link"),r(d,"aria-hidden","true"),r(d,"tabindex","-1"),r(d,"href","#the-concept"),r(E,"id","the-concept"),r(ye,"class","icon icon-link"),r(T,"aria-hidden","true"),r(T,"tabindex","-1"),r(T,"href","#the-game"),r(H,"id","the-game"),r(Ie,"class","icon icon-link"),r(O,"aria-hidden","true"),r(O,"tabindex","-1"),r(O,"href","#writing-the-bridge-between-canvas-and-react"),r(S,"id","writing-the-bridge-between-canvas-and-react"),r(Te,"class","icon icon-link"),r(j,"aria-hidden","true"),r(j,"tabindex","-1"),r(j,"href","#types-of-hooks"),r(D,"id","types-of-hooks"),r(Ue,"class","icon icon-link"),r(F,"aria-hidden","true"),r(F,"tabindex","-1"),r(F,"href","#rules-of-using-hooks"),r(q,"id","rules-of-using-hooks"),r(Z,"href","https://reactjs.org/tutorial/tutorial.html#function-components"),r(Z,"rel","nofollow"),r(Me,"class","icon icon-link"),r($,"aria-hidden","true"),r($,"tabindex","-1"),r($,"href","#class-to-functional-component"),r(B,"id","class-to-functional-component"),r(V,"class","language-jsx"),r(ee,"class","language-jsx"),r(et,"class","icon icon-link"),r(z,"aria-hidden","true"),r(z,"tabindex","-1"),r(z,"href","#have-a-solid-understanding-of-hooks"),r(X,"id","have-a-solid-understanding-of-hooks"),r(tt,"class","icon icon-link"),r(K,"aria-hidden","true"),r(K,"tabindex","-1"),r(K,"href","#resources-and-frameworks"),r(Q,"id","resources-and-frameworks"),r(te,"href","https://www.youtube.com/watch?v=EDbW7lbtHOA"),r(te,"rel","nofollow"),r(ae,"href","https://phaser.io/"),r(ae,"rel","nofollow"),r(se,"href","https://nextjs.org/"),r(se,"rel","nofollow"),r(ne,"href","https://reactjs.org/"),r(ne,"rel","nofollow"),r(oe,"href","https://reactjs.org/docs/hooks-overview.html#state-hook"),r(oe,"rel","nofollow")},m(e,i){c(e,f,i),a(f,b),c(e,_,i),c(e,E,i),a(E,d),a(d,g),a(E,pe),c(e,ut,i),c(e,ie,i),a(ie,Gt),c(e,ht,i),c(e,H,i),a(H,T),a(T,ye),a(H,Xt),c(e,dt,i),c(e,ce,i),a(ce,zt),c(e,ft,i),c(e,re,i),a(re,Qt),c(e,kt,i),c(e,ue,i),a(ue,xe),a(xe,Kt),c(e,mt,i),c(e,S,i),a(S,O),a(O,Ie),a(S,Yt),c(e,vt,i),c(e,he,i),a(he,Zt),c(e,gt,i),c(e,R,i),a(R,de),a(de,Ce),a(Ce,Vt),a(de,ea),a(R,ta),a(R,C),a(C,aa),a(C,Pe),a(Pe,sa),a(C,na),a(C,He),a(He,oa),a(C,la),c(e,Et,i),c(e,fe,i),a(fe,pa),c(e,wt,i),c(e,D,i),a(D,j),a(j,Te),a(D,ia),c(e,bt,i),c(e,w,i),a(w,A),a(A,Se),a(Se,ca),a(A,ra),a(A,Oe),a(Oe,ua),a(A,ha),a(w,da),a(w,L),a(L,Re),a(Re,fa),a(L,ka),a(L,De),a(De,ma),a(L,va),a(w,ga),a(w,N),a(N,je),a(je,Ea),a(N,wa),a(N,Ae),a(Ae,ba),a(N,_a),a(w,ya),a(w,U),a(U,Le),a(Le,xa),a(U,Ia),a(U,Ne),a(Ne,Ca),a(U,Pa),c(e,_t,i),c(e,q,i),a(q,F),a(F,Ue),a(q,Ha),c(e,yt,i),c(e,ke,i),a(ke,Ta),c(e,xt,i),c(e,J,i),a(J,qe),a(qe,Sa),a(J,Oa),a(J,Fe),a(Fe,Ra),c(e,It,i),c(e,M,i),a(M,Da),a(M,Z),a(Z,ja),a(M,Aa),c(e,Ct,i),c(e,W,i),a(W,La),a(W,Je),a(Je,Na),a(W,Ua),c(e,Pt,i),c(e,B,i),a(B,$),a($,Me),a(B,qa),c(e,Ht,i),c(e,me,i),a(me,Fa),c(e,Tt,i),c(e,V,i),V.innerHTML=Bn,c(e,St,i),c(e,ve,i),a(ve,Ja),c(e,Ot,i),c(e,ee,i),ee.innerHTML=$n,c(e,Rt,i),c(e,k,i),a(k,Ma),a(k,We),a(We,Wa),a(k,Ba),a(k,Be),a(Be,$a),a(k,Ga),a(k,$e),a($e,Xa),a(k,za),a(k,Ge),a(Ge,Qa),a(k,Ka),c(e,Dt,i),c(e,m,i),a(m,Ya),a(m,Xe),a(Xe,Za),a(m,Va),a(m,ze),a(ze,es),a(m,ts),a(m,Qe),a(Qe,as),a(m,ss),a(m,Ke),a(Ke,ns),a(m,os),c(e,jt,i),c(e,G,i),a(G,ls),a(G,Ye),a(Ye,ps),a(G,is),c(e,At,i),c(e,ge,i),a(ge,P),a(P,cs),a(P,Ze),a(Ze,rs),a(P,us),a(P,Ve),a(Ve,hs),a(P,ds),c(e,Lt,i),c(e,X,i),a(X,z),a(z,et),a(X,fs),c(e,Nt,i),c(e,Ee,i),a(Ee,ks),c(e,Ut,i),c(e,Q,i),a(Q,K),a(K,tt),a(Q,ms),c(e,qt,i),c(e,we,i),a(we,vs),c(e,Ft,i),c(e,v,i),a(v,at),a(at,te),a(te,gs),a(v,Es),a(v,st),a(st,ae),a(ae,ws),a(v,bs),a(v,nt),a(nt,se),a(se,_s),a(v,ys),a(v,ot),a(ot,ne),a(ne,xs),a(v,Is),a(v,lt),a(lt,oe),a(oe,Cs)},p:no,d(e){e&&t(f),e&&t(_),e&&t(E),e&&t(ut),e&&t(ie),e&&t(ht),e&&t(H),e&&t(dt),e&&t(ce),e&&t(ft),e&&t(re),e&&t(kt),e&&t(ue),e&&t(mt),e&&t(S),e&&t(vt),e&&t(he),e&&t(gt),e&&t(R),e&&t(Et),e&&t(fe),e&&t(wt),e&&t(D),e&&t(bt),e&&t(w),e&&t(_t),e&&t(q),e&&t(yt),e&&t(ke),e&&t(xt),e&&t(J),e&&t(It),e&&t(M),e&&t(Ct),e&&t(W),e&&t(Pt),e&&t(B),e&&t(Ht),e&&t(me),e&&t(Tt),e&&t(V),e&&t(St),e&&t(ve),e&&t(Ot),e&&t(ee),e&&t(Rt),e&&t(k),e&&t(Dt),e&&t(m),e&&t(jt),e&&t(G),e&&t(At),e&&t(ge),e&&t(Lt),e&&t(X),e&&t(Nt),e&&t(Ee),e&&t(Ut),e&&t(Q),e&&t(qt),e&&t(we),e&&t(Ft),e&&t(v)}}}function po(le){let f,b;const _=[le[0],Wn];let E={$$slots:{default:[lo]},$$scope:{ctx:le}};for(let d=0;d<_.length;d+=1)E=Ls(E,_[d]);return f=new oo({props:E}),{c(){Yn(f.$$.fragment)},l(d){Zn(f.$$.fragment,d)},m(d,g){Vn(f,d,g),b=!0},p(d,[g]){const pe=g&1?eo(_,[g&1&&Jn(d[0]),g&0&&Jn(Wn)]):{};g&2&&(pe.$$scope={dirty:g,ctx:d}),f.$set(pe)},i(d){b||(to(f.$$.fragment,d),b=!0)},o(d){ao(f.$$.fragment,d),b=!1},d(d){so(f,d)}}}const Wn={title:"Phaser game with a React UI",date:"2020-06-11",modifiedDate:"2023-04-30",youtubeId:"EDbW7lbtHOA",categories:["phaser","react","game development"],svg:"Controller",seoImage:"https://boatr.s3.amazonaws.com/static/media/uploads/blog/phaser_react.jpg",shortDescription:"In this video, we show developing a game with Phaser and using React for the user interface. Using React to alleviate the burden of handling the UI in Canvas. RequestAnimationFrame can be expensive and should be used for the game only.",author:"3ee Games",codePen:{user:"halvves",hash:"qQxPNo"},videos:[{width:"100%",height:600,controls:!0,poster:"https://3ee.s3.amazonaws.com/video/phaser_react_ui.webp",srcs:[{src:"https://3ee.s3.amazonaws.com/video/phaser_react_ui.mp4",type:"video/mp4"}]}]};function io(le,f,b){return le.$$set=_=>{b(0,f=Ls(Ls({},f),Mn(_)))},f=Mn(f),[f]}class fo extends zn{constructor(f){super(),Qn(this,f,io,po,Kn,{})}}export{fo as default,Wn as metadata};

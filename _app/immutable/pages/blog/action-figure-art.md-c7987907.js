import{S as ft,i as ht,s as pt,C as Fe,w as dt,x as mt,y as gt,z as wt,A as lt,q as vt,o as yt,B as _t,Z as ut,e as r,t as l,k as h,c as n,a as s,h as u,d as t,m as p,b as d,g as i,I as o,E as bt}from"../../chunks/index-e1315fa8.js";import{P as zt}from"../../chunks/_post-b40ff661.js";/* empty css                                                                   */import"../../chunks/menuContextStore-8d5e7108.js";import"../../chunks/index-1440c114.js";function Et(k){let c,g,w,v,f,m,y,pe,K,T,de,Q,_,b,H,me,Z,P,ge,J,q,we,M,R,ve,V,j,ye,X,A,_e,ee,D,be,te,z,N,ze,Ee,L,F,xe,Ie,oe,W,Se,ae,E,Y,ke,Te,$,G,Pe,qe,ie,x,I,U,Re,re,S,je,B,Ae,De,ne,O,Le,se,C,We,le,ue;return{c(){c=r("p"),g=l("LoRA"),w=h(),v=r("blockquote"),f=r("p"),m=l("\u{1F4C4} See the paper: "),y=r("a"),pe=l("https://arxiv.org/abs/2106.04647"),K=h(),T=r("p"),de=l("I recently conducted an experiment using action figures to create a LoRA model. During the training process, I noticed that the model was learning to draw the action figures with all the paint flaws and inaccurices in the plastic. While there is nothing inherently wrong with those flaws, I wanted to adjust the model to prevent it from resembling a plastic toy. To achieve this, I decided to experiment with regularization images and noise offset values."),Q=h(),_=r("h2"),b=r("a"),H=r("span"),me=l("What are Regularization Images?"),Z=h(),P=r("p"),ge=l("Regularization images are used for prior-preservation loss to prevent overfitting in a machine learning model.  To further illustrate: regularization images are extra pictures that are used to help Stable Diffusion learn better."),J=h(),q=r("p"),we=l("Regularization helps us make sure our models can correctly classify new data points they were not trained on. We call this ability to work well with new data \u201Cgeneralization.\u201D If we don\u2019t use regularization, our models can become too complex and \u201Coverfit\u201D to the training data, meaning they won\u2019t work well with new data."),M=h(),R=r("p"),ve=l("However, using too much regularization can also be a problem. It can lead to \u201Cunderfitting,\u201D which means our model doesn\u2019t work well even with the training data. This happens when we limit our model\u2019s ability too much."),V=h(),j=r("p"),ye=l("For example, imagine a graph of points. We want to find a function that fits those points well. We could choose a simple function, which might not fit the points very well. Or we could choose a very complex function that fits the points perfectly, but it might not work well with new points we haven\u2019t seen before. The key is to find the right balance between simplicity and complexity to achieve the best performance."),X=h(),A=r("p"),_e=l("Consider the following:"),ee=h(),D=r("p"),be=l("Scenario 1: You have only a few pictures of your cat and no pictures of other cats."),te=h(),z=r("ul"),N=r("li"),ze=l("If you train the model on just these few pictures - won\u2019t learn enough to accurately recognize your cat."),Ee=h(),L=r("li"),F=r("strong"),xe=l("Solution"),Ie=l(": consider using regularization images to help the model learn more about cat features."),oe=h(),W=r("p"),Se=l("Scenario 2: You have a lot of pictures of other cats, but only a few pictures of your cat."),ae=h(),E=r("ul"),Y=r("li"),ke=l("If you train the model on all of these pictures, it might get confused and not learn how to accurately recognize your cat."),Te=h(),$=r("li"),G=r("strong"),Pe=l("Solution"),qe=l(": using regularization images to help the model focus more on cat features in general, rather than getting distracted by other cats."),ie=h(),x=r("h2"),I=r("a"),U=r("span"),Re=l("Divergence"),re=h(),S=r("p"),je=l("In some cases, providing too much data can lead to "),B=r("strong"),Ae=l("divergence"),De=l(". Divergence happens when the model produces random outputs that do not accurately represent the object you are trying to recognize. This can occur because the model is trying to learn from too many images with inconsistent features, causing it to become confused and produce poor results."),ne=h(),O=r("p"),Le=l("To avoid divergence and ensure the model is focusing on the features that are unique and consistent with your subject, it is important to carefully curate the dataset by selecting high-quality images that accurately represent the object you are trying to recognize. It is also crucial to use regularization techniques, such as adding regularization images, to prevent overfitting and ensure the model is learning from the right features."),se=h(),C=r("p"),We=l("Training a model to recognize specific objects requires careful consideration of the dataset and the use of regularization techniques to ensure the model is focused on the right features and is not prone to divergence."),le=h(),ue=r("hr"),this.h()},l(e){c=n(e,"P",{});var a=s(c);g=u(a,"LoRA"),a.forEach(t),w=p(e),v=n(e,"BLOCKQUOTE",{});var Ye=s(v);f=n(Ye,"P",{});var $e=s(f);m=u($e,"\u{1F4C4} See the paper: "),y=n($e,"A",{href:!0,rel:!0});var Ge=s(y);pe=u(Ge,"https://arxiv.org/abs/2106.04647"),Ge.forEach(t),$e.forEach(t),Ye.forEach(t),K=p(e),T=n(e,"P",{});var Ue=s(T);de=u(Ue,"I recently conducted an experiment using action figures to create a LoRA model. During the training process, I noticed that the model was learning to draw the action figures with all the paint flaws and inaccurices in the plastic. While there is nothing inherently wrong with those flaws, I wanted to adjust the model to prevent it from resembling a plastic toy. To achieve this, I decided to experiment with regularization images and noise offset values."),Ue.forEach(t),Q=p(e),_=n(e,"H2",{id:!0});var Oe=s(_);b=n(Oe,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Be=s(b);H=n(Be,"SPAN",{class:!0}),s(H).forEach(t),Be.forEach(t),me=u(Oe,"What are Regularization Images?"),Oe.forEach(t),Z=p(e),P=n(e,"P",{});var Ke=s(P);ge=u(Ke,"Regularization images are used for prior-preservation loss to prevent overfitting in a machine learning model.  To further illustrate: regularization images are extra pictures that are used to help Stable Diffusion learn better."),Ke.forEach(t),J=p(e),q=n(e,"P",{});var Qe=s(q);we=u(Qe,"Regularization helps us make sure our models can correctly classify new data points they were not trained on. We call this ability to work well with new data \u201Cgeneralization.\u201D If we don\u2019t use regularization, our models can become too complex and \u201Coverfit\u201D to the training data, meaning they won\u2019t work well with new data."),Qe.forEach(t),M=p(e),R=n(e,"P",{});var Ze=s(R);ve=u(Ze,"However, using too much regularization can also be a problem. It can lead to \u201Cunderfitting,\u201D which means our model doesn\u2019t work well even with the training data. This happens when we limit our model\u2019s ability too much."),Ze.forEach(t),V=p(e),j=n(e,"P",{});var Je=s(j);ye=u(Je,"For example, imagine a graph of points. We want to find a function that fits those points well. We could choose a simple function, which might not fit the points very well. Or we could choose a very complex function that fits the points perfectly, but it might not work well with new points we haven\u2019t seen before. The key is to find the right balance between simplicity and complexity to achieve the best performance."),Je.forEach(t),X=p(e),A=n(e,"P",{});var Me=s(A);_e=u(Me,"Consider the following:"),Me.forEach(t),ee=p(e),D=n(e,"P",{});var Ve=s(D);be=u(Ve,"Scenario 1: You have only a few pictures of your cat and no pictures of other cats."),Ve.forEach(t),te=p(e),z=n(e,"UL",{});var ce=s(z);N=n(ce,"LI",{});var Xe=s(N);ze=u(Xe,"If you train the model on just these few pictures - won\u2019t learn enough to accurately recognize your cat."),Xe.forEach(t),Ee=p(ce),L=n(ce,"LI",{});var Ce=s(L);F=n(Ce,"STRONG",{});var et=s(F);xe=u(et,"Solution"),et.forEach(t),Ie=u(Ce,": consider using regularization images to help the model learn more about cat features."),Ce.forEach(t),ce.forEach(t),oe=p(e),W=n(e,"P",{});var tt=s(W);Se=u(tt,"Scenario 2: You have a lot of pictures of other cats, but only a few pictures of your cat."),tt.forEach(t),ae=p(e),E=n(e,"UL",{});var fe=s(E);Y=n(fe,"LI",{});var ot=s(Y);ke=u(ot,"If you train the model on all of these pictures, it might get confused and not learn how to accurately recognize your cat."),ot.forEach(t),Te=p(fe),$=n(fe,"LI",{});var He=s($);G=n(He,"STRONG",{});var at=s(G);Pe=u(at,"Solution"),at.forEach(t),qe=u(He,": using regularization images to help the model focus more on cat features in general, rather than getting distracted by other cats."),He.forEach(t),fe.forEach(t),ie=p(e),x=n(e,"H2",{id:!0});var Ne=s(x);I=n(Ne,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var it=s(I);U=n(it,"SPAN",{class:!0}),s(U).forEach(t),it.forEach(t),Re=u(Ne,"Divergence"),Ne.forEach(t),re=p(e),S=n(e,"P",{});var he=s(S);je=u(he,"In some cases, providing too much data can lead to "),B=n(he,"STRONG",{});var rt=s(B);Ae=u(rt,"divergence"),rt.forEach(t),De=u(he,". Divergence happens when the model produces random outputs that do not accurately represent the object you are trying to recognize. This can occur because the model is trying to learn from too many images with inconsistent features, causing it to become confused and produce poor results."),he.forEach(t),ne=p(e),O=n(e,"P",{});var nt=s(O);Le=u(nt,"To avoid divergence and ensure the model is focusing on the features that are unique and consistent with your subject, it is important to carefully curate the dataset by selecting high-quality images that accurately represent the object you are trying to recognize. It is also crucial to use regularization techniques, such as adding regularization images, to prevent overfitting and ensure the model is learning from the right features."),nt.forEach(t),se=p(e),C=n(e,"P",{});var st=s(C);We=u(st,"Training a model to recognize specific objects requires careful consideration of the dataset and the use of regularization techniques to ensure the model is focused on the right features and is not prone to divergence."),st.forEach(t),le=p(e),ue=n(e,"HR",{}),this.h()},h(){d(y,"href","https://arxiv.org/abs/2106.04647"),d(y,"rel","nofollow"),d(H,"class","icon icon-link"),d(b,"aria-hidden","true"),d(b,"tabindex","-1"),d(b,"href","#what-are-regularization-images"),d(_,"id","what-are-regularization-images"),d(U,"class","icon icon-link"),d(I,"aria-hidden","true"),d(I,"tabindex","-1"),d(I,"href","#divergence"),d(x,"id","divergence")},m(e,a){i(e,c,a),o(c,g),i(e,w,a),i(e,v,a),o(v,f),o(f,m),o(f,y),o(y,pe),i(e,K,a),i(e,T,a),o(T,de),i(e,Q,a),i(e,_,a),o(_,b),o(b,H),o(_,me),i(e,Z,a),i(e,P,a),o(P,ge),i(e,J,a),i(e,q,a),o(q,we),i(e,M,a),i(e,R,a),o(R,ve),i(e,V,a),i(e,j,a),o(j,ye),i(e,X,a),i(e,A,a),o(A,_e),i(e,ee,a),i(e,D,a),o(D,be),i(e,te,a),i(e,z,a),o(z,N),o(N,ze),o(z,Ee),o(z,L),o(L,F),o(F,xe),o(L,Ie),i(e,oe,a),i(e,W,a),o(W,Se),i(e,ae,a),i(e,E,a),o(E,Y),o(Y,ke),o(E,Te),o(E,$),o($,G),o(G,Pe),o($,qe),i(e,ie,a),i(e,x,a),o(x,I),o(I,U),o(x,Re),i(e,re,a),i(e,S,a),o(S,je),o(S,B),o(B,Ae),o(S,De),i(e,ne,a),i(e,O,a),o(O,Le),i(e,se,a),i(e,C,a),o(C,We),i(e,le,a),i(e,ue,a)},p:bt,d(e){e&&t(c),e&&t(w),e&&t(v),e&&t(K),e&&t(T),e&&t(Q),e&&t(_),e&&t(Z),e&&t(P),e&&t(J),e&&t(q),e&&t(M),e&&t(R),e&&t(V),e&&t(j),e&&t(X),e&&t(A),e&&t(ee),e&&t(D),e&&t(te),e&&t(z),e&&t(oe),e&&t(W),e&&t(ae),e&&t(E),e&&t(ie),e&&t(x),e&&t(re),e&&t(S),e&&t(ne),e&&t(O),e&&t(se),e&&t(C),e&&t(le),e&&t(ue)}}}function xt(k){let c,g;const w=[k[0],ct];let v={$$slots:{default:[Et]},$$scope:{ctx:k}};for(let f=0;f<w.length;f+=1)v=Fe(v,w[f]);return c=new zt({props:v}),{c(){dt(c.$$.fragment)},l(f){mt(c.$$.fragment,f)},m(f,m){gt(c,f,m),g=!0},p(f,[m]){const y=m&1?wt(w,[m&1&&lt(f[0]),m&0&&lt(ct)]):{};m&2&&(y.$$scope={dirty:m,ctx:f}),c.$set(y)},i(f){g||(vt(c.$$.fragment,f),g=!0)},o(f){yt(c.$$.fragment,f),g=!1},d(f){_t(c,f)}}}const ct={title:"Action Figure Art",date:"2023-04-17",modifiedDate:"2023-04-17",categories:["stable diffusion","ai training"],svg:"ActionFigure",seoImage:"https://boatr.s3.amazonaws.com/static/media/uploads/blog/editor_blender.jpg",shortDescription:"Check out Ornamental Santa Diffusion, a model that uses stable diffusion to generate Santa Claus.",author:"Ryan Sadwick",spacelab:!0,id:2};function It(k,c,g){return k.$$set=w=>{g(0,c=Fe(Fe({},c),ut(w)))},c=ut(c),[c]}class Rt extends ft{constructor(c){super(),ht(this,c,It,xt,pt,{})}}export{Rt as default,ct as metadata};

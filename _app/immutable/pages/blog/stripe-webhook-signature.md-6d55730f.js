import{S as er,i as tr,s as ar,C as pa,w as za,x as Ma,y as Wa,z as rr,A as La,q as Va,o as Ba,B as Ja,a1 as qa,e as r,t as s,k as u,c as n,a as i,h as l,d as t,m as h,b as c,g as d,G as a,E as nr}from"../../chunks/index-2a82a4a8.js";import{P as ir}from"../../chunks/_post-913f18eb.js";import{S as or}from"../../chunks/SpaceLabTeaser-a5ec8b93.js";import"../../chunks/Player-9202028c.js";import"../../chunks/menuContextStore-c2e700c4.js";import"../../chunks/index-16dda89e.js";import"../../chunks/accountStore-3492c591.js";import"../../chunks/svgMapper-02b39f71.js";import"../../chunks/navigation-0e6511d1.js";import"../../chunks/singletons-d1fb5791.js";function sr(B){let p,g,y,X,f,w,J,nt,Pe,x,b,re,it,Ne,m,ot,ne,st,lt,ie,dt,ct,oe,pt,ut,Te,E,S,se,ht,Ge,P,ft,le,wt,mt,Ie,N,T,de,yt,De,G,I,ce,gt,Ce,v,vt,pe,_t,kt,ue,xt,bt,He,z,Ka=`<code class="language-nginx"><span class="token directive"><span class="token keyword">location</span> /some-webhook/</span> <span class="token punctuation">&#123;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://your-app-name:8000</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Stripe-Signature <span class="token variable">$http_stripe_signature</span></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Ae,D,Et,he,St,Pt,$e,C,H,fe,Nt,Fe,A,Tt,we,Gt,It,Oe,M,Qa='<code class="language-yaml"><span class="token key atrule">command</span><span class="token punctuation">:</span> gunicorn sockets.asgi<span class="token punctuation">:</span>application <span class="token punctuation">-</span>k uvicorn.workers.UvicornWorker <span class="token punctuation">-</span>b ipaddress<span class="token punctuation">:</span>port <span class="token punctuation">-</span><span class="token punctuation">-</span>forwarded<span class="token punctuation">-</span>allow<span class="token punctuation">-</span>ips="<span class="token important">*"</span></code>',Ue,_,Dt,me,Ct,Ht,ye,At,$t,Re,K,Ft,je,$,Ot,ge,Ut,Rt,Le,F,jt,ve,Lt,qt,qe,O,U,_e,Xt,Xe,Q,zt,ze,k,ke,Mt,Wt,xe,Vt,Bt,W,Jt,be,Kt,Qt,Me,Y,Yt,We,R,j,Ee,Zt,Ve,L,ea,Se,ta,aa,Be,Z,ra,Je,V,Ke;return V=new or({}),{c(){p=r("p"),g=s("In the 3ee Games production setup using Nginx, Gunicorn with Uvicorn workers, and Docker Compose, I encountered an issue where the Stripe webhook handler was raising a "),y=r("code"),X=s("SignatureVerificationError"),f=s(" because the expected "),w=r("code"),J=s("Stripe-Signature"),nt=s(" header was missing. This article explains the root cause of the issue and the steps to take to resolve it."),Pe=u(),x=r("h2"),b=r("a"),re=r("span"),it=s("The Problem: Header Stripping by Nginx"),Ne=u(),m=r("p"),ot=s("Stripe sends webhook events with a critical header named "),ne=r("code"),st=s("Stripe-Signature"),lt=s(" that allows your backend to verify the authenticity of the request. In the original implementation, the Django view (via the "),ie=r("code"),dt=s("drf-stripe"),ct=s(" package) attempted to access this header via "),oe=r("code"),pt=s("request.META['HTTP_STRIPE_SIGNATURE']"),ut=s(". However, in production the header was not present, leading to an error."),Te=u(),E=r("h3"),S=r("a"),se=r("span"),ht=s("Why Headers Were Missing"),Ge=u(),P=r("p"),ft=s("Nginx, by default, may drop or rename headers that contain underscores. In this case, it was stripping out the "),le=r("code"),wt=s("Stripe-Signature"),mt=s(" header or not passing it through to the upstream Gunicorn server. Additionally, Gunicorn needed to be configured to correctly handle forwarded headers from Nginx."),Ie=u(),N=r("h2"),T=r("a"),de=r("span"),yt=s("The Fix: Proper Header Forwarding"),De=u(),G=r("h3"),I=r("a"),ce=r("span"),gt=s("1. Update Nginx Configuration"),Ce=u(),v=r("p"),vt=s("I modified the Nginx configuration to explicitly forward the "),pe=r("code"),_t=s("Stripe-Signature"),kt=s(" header to the Django application. In the Nginx "),ue=r("code"),xt=s("location"),bt=s(" block handling the webhook endpoint:"),He=u(),z=r("pre"),Ae=u(),D=r("p"),Et=s("This ensured that even if Nginx would normally filter out headers with underscores, it explicitly passes along the "),he=r("code"),St=s("Stripe-Signature"),Pt=s(" header."),$e=u(),C=r("h3"),H=r("a"),fe=r("span"),Nt=s("2. Configure Gunicorn to Handle Forwarded Headers"),Fe=u(),A=r("p"),Tt=s("Since 3ee Games is using Gunicorn with Uvicorn workers, I needed to ensure that Gunicorn accepted the forwarded headers from Nginx. The Gunicorn command in the Docker Compose file was updated to include the "),we=r("code"),Gt=s('--forwarded-allow-ips="*"'),It=s(" flag:"),Oe=u(),M=r("pre"),Ue=u(),_=r("p"),Dt=s("The "),me=r("code"),Ct=s("forwarded-allow-ips"),Ht=s(" flag instructs Gunicorn to trust and process headers such as "),ye=r("code"),At=s("X-Forwarded-For"),$t=s(" and custom headers forwarded from Nginx."),Re=u(),K=r("p"),Ft=s("Using the wildcard (*) for Gunicorn\u2019s \u2014forwarded-allow-ips tells Gunicorn to trust any proxy that forwards headers. This is generally safe if your application is only accessible via a trusted proxy (Nginx) and the network configuration prevents direct client access to Gunicorn."),je=u(),$=r("p"),Ot=s("If your infrastructure ensures that all incoming requests pass through Nginx, then using "),ge=r("code"),Ut=s("*"),Rt=s(" is acceptable because you rely on the proxy to sanitize and manage the headers. However, if there\u2019s any risk that clients could bypass your reverse proxy and access Gunicorn directly, trusting all forwarded IPs could allow attackers to spoof headers such as X-Forwarded-For, potentially interfering with logging or other logic that depends on the client\u2019s IP address."),Le=u(),F=r("p"),jt=s("For production, it\u2019s best practice to restrict trusted proxies to known IP ranges if possible. In containerized environments, internal networking or firewall rules ensure that Gunicorn is only reachable from the proxy, which makes using "),ve=r("code"),Lt=s("*"),qt=s(" is a safe option."),qe=u(),O=r("h3"),U=r("a"),_e=r("span"),Xt=s("3. Verification"),Xe=u(),Q=r("p"),zt=s("After making these changes, time to push to the staging enviroment where the stack runs locally:"),ze=u(),k=r("ul"),ke=r("li"),Mt=s("Restarted Docker containers to apply the new configurations."),Wt=u(),xe=r("li"),Vt=s("Tested the webhook endpoint by sending test events from Stripe."),Bt=u(),W=r("li"),Jt=s("Logging was added to Django view to confirm that the "),be=r("code"),Kt=s("Stripe-Signature"),Qt=s(" header was present and correctly forwarded."),Me=u(),Y=r("p"),Yt=s("Once verified, the webhook signature could be successfully validated by Stripe\u2019s library and the error was resolved without needing monkey patches."),We=u(),R=r("h2"),j=r("a"),Ee=r("span"),Zt=s("Conclusion"),Ve=u(),L=r("p"),ea=s("The issue was ultimately caused by Nginx not forwarding headers containing underscores. By explicitly setting "),Se=r("code"),ta=s("proxy_set_header Stripe-Signature $http_stripe_signature;"),aa=s(" in our Nginx configuration and ensuring Gunicorn accepted forwarded headers, we restored the expected behavior. This approach is generally preferable in production environments as it maintains the integrity of the original library code while properly addressing the environment-specific header handling."),Be=u(),Z=r("p"),ra=s("This experience underscores the importance of verifying header transmission in a multi-tiered deployment, especially when dealing with external services like Stripe that rely on header-based security."),Je=u(),za(V.$$.fragment),this.h()},l(e){p=n(e,"P",{});var o=i(p);g=l(o,"In the 3ee Games production setup using Nginx, Gunicorn with Uvicorn workers, and Docker Compose, I encountered an issue where the Stripe webhook handler was raising a "),y=n(o,"CODE",{});var ua=i(y);X=l(ua,"SignatureVerificationError"),ua.forEach(t),f=l(o," because the expected "),w=n(o,"CODE",{});var ha=i(w);J=l(ha,"Stripe-Signature"),ha.forEach(t),nt=l(o," header was missing. This article explains the root cause of the issue and the steps to take to resolve it."),o.forEach(t),Pe=h(e),x=n(e,"H2",{id:!0});var na=i(x);b=n(na,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fa=i(b);re=n(fa,"SPAN",{class:!0}),i(re).forEach(t),fa.forEach(t),it=l(na,"The Problem: Header Stripping by Nginx"),na.forEach(t),Ne=h(e),m=n(e,"P",{});var q=i(m);ot=l(q,"Stripe sends webhook events with a critical header named "),ne=n(q,"CODE",{});var wa=i(ne);st=l(wa,"Stripe-Signature"),wa.forEach(t),lt=l(q," that allows your backend to verify the authenticity of the request. In the original implementation, the Django view (via the "),ie=n(q,"CODE",{});var ma=i(ie);dt=l(ma,"drf-stripe"),ma.forEach(t),ct=l(q," package) attempted to access this header via "),oe=n(q,"CODE",{});var ya=i(oe);pt=l(ya,"request.META['HTTP_STRIPE_SIGNATURE']"),ya.forEach(t),ut=l(q,". However, in production the header was not present, leading to an error."),q.forEach(t),Te=h(e),E=n(e,"H3",{id:!0});var ia=i(E);S=n(ia,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ga=i(S);se=n(ga,"SPAN",{class:!0}),i(se).forEach(t),ga.forEach(t),ht=l(ia,"Why Headers Were Missing"),ia.forEach(t),Ge=h(e),P=n(e,"P",{});var Qe=i(P);ft=l(Qe,"Nginx, by default, may drop or rename headers that contain underscores. In this case, it was stripping out the "),le=n(Qe,"CODE",{});var va=i(le);wt=l(va,"Stripe-Signature"),va.forEach(t),mt=l(Qe," header or not passing it through to the upstream Gunicorn server. Additionally, Gunicorn needed to be configured to correctly handle forwarded headers from Nginx."),Qe.forEach(t),Ie=h(e),N=n(e,"H2",{id:!0});var oa=i(N);T=n(oa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _a=i(T);de=n(_a,"SPAN",{class:!0}),i(de).forEach(t),_a.forEach(t),yt=l(oa,"The Fix: Proper Header Forwarding"),oa.forEach(t),De=h(e),G=n(e,"H3",{id:!0});var sa=i(G);I=n(sa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ka=i(I);ce=n(ka,"SPAN",{class:!0}),i(ce).forEach(t),ka.forEach(t),gt=l(sa,"1. Update Nginx Configuration"),sa.forEach(t),Ce=h(e),v=n(e,"P",{});var ee=i(v);vt=l(ee,"I modified the Nginx configuration to explicitly forward the "),pe=n(ee,"CODE",{});var xa=i(pe);_t=l(xa,"Stripe-Signature"),xa.forEach(t),kt=l(ee," header to the Django application. In the Nginx "),ue=n(ee,"CODE",{});var ba=i(ue);xt=l(ba,"location"),ba.forEach(t),bt=l(ee," block handling the webhook endpoint:"),ee.forEach(t),He=h(e),z=n(e,"PRE",{class:!0});var Ya=i(z);Ya.forEach(t),Ae=h(e),D=n(e,"P",{});var Ye=i(D);Et=l(Ye,"This ensured that even if Nginx would normally filter out headers with underscores, it explicitly passes along the "),he=n(Ye,"CODE",{});var Ea=i(he);St=l(Ea,"Stripe-Signature"),Ea.forEach(t),Pt=l(Ye," header."),Ye.forEach(t),$e=h(e),C=n(e,"H3",{id:!0});var la=i(C);H=n(la,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Sa=i(H);fe=n(Sa,"SPAN",{class:!0}),i(fe).forEach(t),Sa.forEach(t),Nt=l(la,"2. Configure Gunicorn to Handle Forwarded Headers"),la.forEach(t),Fe=h(e),A=n(e,"P",{});var Ze=i(A);Tt=l(Ze,"Since 3ee Games is using Gunicorn with Uvicorn workers, I needed to ensure that Gunicorn accepted the forwarded headers from Nginx. The Gunicorn command in the Docker Compose file was updated to include the "),we=n(Ze,"CODE",{});var Pa=i(we);Gt=l(Pa,'--forwarded-allow-ips="*"'),Pa.forEach(t),It=l(Ze," flag:"),Ze.forEach(t),Oe=h(e),M=n(e,"PRE",{class:!0});var Za=i(M);Za.forEach(t),Ue=h(e),_=n(e,"P",{});var te=i(_);Dt=l(te,"The "),me=n(te,"CODE",{});var Na=i(me);Ct=l(Na,"forwarded-allow-ips"),Na.forEach(t),Ht=l(te," flag instructs Gunicorn to trust and process headers such as "),ye=n(te,"CODE",{});var Ta=i(ye);At=l(Ta,"X-Forwarded-For"),Ta.forEach(t),$t=l(te," and custom headers forwarded from Nginx."),te.forEach(t),Re=h(e),K=n(e,"P",{});var Ga=i(K);Ft=l(Ga,"Using the wildcard (*) for Gunicorn\u2019s \u2014forwarded-allow-ips tells Gunicorn to trust any proxy that forwards headers. This is generally safe if your application is only accessible via a trusted proxy (Nginx) and the network configuration prevents direct client access to Gunicorn."),Ga.forEach(t),je=h(e),$=n(e,"P",{});var et=i($);Ot=l(et,"If your infrastructure ensures that all incoming requests pass through Nginx, then using "),ge=n(et,"CODE",{});var Ia=i(ge);Ut=l(Ia,"*"),Ia.forEach(t),Rt=l(et," is acceptable because you rely on the proxy to sanitize and manage the headers. However, if there\u2019s any risk that clients could bypass your reverse proxy and access Gunicorn directly, trusting all forwarded IPs could allow attackers to spoof headers such as X-Forwarded-For, potentially interfering with logging or other logic that depends on the client\u2019s IP address."),et.forEach(t),Le=h(e),F=n(e,"P",{});var tt=i(F);jt=l(tt,"For production, it\u2019s best practice to restrict trusted proxies to known IP ranges if possible. In containerized environments, internal networking or firewall rules ensure that Gunicorn is only reachable from the proxy, which makes using "),ve=n(tt,"CODE",{});var Da=i(ve);Lt=l(Da,"*"),Da.forEach(t),qt=l(tt," is a safe option."),tt.forEach(t),qe=h(e),O=n(e,"H3",{id:!0});var da=i(O);U=n(da,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ca=i(U);_e=n(Ca,"SPAN",{class:!0}),i(_e).forEach(t),Ca.forEach(t),Xt=l(da,"3. Verification"),da.forEach(t),Xe=h(e),Q=n(e,"P",{});var Ha=i(Q);zt=l(Ha,"After making these changes, time to push to the staging enviroment where the stack runs locally:"),Ha.forEach(t),ze=h(e),k=n(e,"UL",{});var ae=i(k);ke=n(ae,"LI",{});var Aa=i(ke);Mt=l(Aa,"Restarted Docker containers to apply the new configurations."),Aa.forEach(t),Wt=h(ae),xe=n(ae,"LI",{});var $a=i(xe);Vt=l($a,"Tested the webhook endpoint by sending test events from Stripe."),$a.forEach(t),Bt=h(ae),W=n(ae,"LI",{});var at=i(W);Jt=l(at,"Logging was added to Django view to confirm that the "),be=n(at,"CODE",{});var Fa=i(be);Kt=l(Fa,"Stripe-Signature"),Fa.forEach(t),Qt=l(at," header was present and correctly forwarded."),at.forEach(t),ae.forEach(t),Me=h(e),Y=n(e,"P",{});var Oa=i(Y);Yt=l(Oa,"Once verified, the webhook signature could be successfully validated by Stripe\u2019s library and the error was resolved without needing monkey patches."),Oa.forEach(t),We=h(e),R=n(e,"H2",{id:!0});var ca=i(R);j=n(ca,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ua=i(j);Ee=n(Ua,"SPAN",{class:!0}),i(Ee).forEach(t),Ua.forEach(t),Zt=l(ca,"Conclusion"),ca.forEach(t),Ve=h(e),L=n(e,"P",{});var rt=i(L);ea=l(rt,"The issue was ultimately caused by Nginx not forwarding headers containing underscores. By explicitly setting "),Se=n(rt,"CODE",{});var Ra=i(Se);ta=l(Ra,"proxy_set_header Stripe-Signature $http_stripe_signature;"),Ra.forEach(t),aa=l(rt," in our Nginx configuration and ensuring Gunicorn accepted forwarded headers, we restored the expected behavior. This approach is generally preferable in production environments as it maintains the integrity of the original library code while properly addressing the environment-specific header handling."),rt.forEach(t),Be=h(e),Z=n(e,"P",{});var ja=i(Z);ra=l(ja,"This experience underscores the importance of verifying header transmission in a multi-tiered deployment, especially when dealing with external services like Stripe that rely on header-based security."),ja.forEach(t),Je=h(e),Ma(V.$$.fragment,e),this.h()},h(){c(re,"class","icon icon-link"),c(b,"aria-hidden","true"),c(b,"tabindex","-1"),c(b,"href","#the-problem-header-stripping-by-nginx"),c(x,"id","the-problem-header-stripping-by-nginx"),c(se,"class","icon icon-link"),c(S,"aria-hidden","true"),c(S,"tabindex","-1"),c(S,"href","#why-headers-were-missing"),c(E,"id","why-headers-were-missing"),c(de,"class","icon icon-link"),c(T,"aria-hidden","true"),c(T,"tabindex","-1"),c(T,"href","#the-fix-proper-header-forwarding"),c(N,"id","the-fix-proper-header-forwarding"),c(ce,"class","icon icon-link"),c(I,"aria-hidden","true"),c(I,"tabindex","-1"),c(I,"href","#1-update-nginx-configuration"),c(G,"id","1-update-nginx-configuration"),c(z,"class","language-nginx"),c(fe,"class","icon icon-link"),c(H,"aria-hidden","true"),c(H,"tabindex","-1"),c(H,"href","#2-configure-gunicorn-to-handle-forwarded-headers"),c(C,"id","2-configure-gunicorn-to-handle-forwarded-headers"),c(M,"class","language-yaml"),c(_e,"class","icon icon-link"),c(U,"aria-hidden","true"),c(U,"tabindex","-1"),c(U,"href","#3-verification"),c(O,"id","3-verification"),c(Ee,"class","icon icon-link"),c(j,"aria-hidden","true"),c(j,"tabindex","-1"),c(j,"href","#conclusion"),c(R,"id","conclusion")},m(e,o){d(e,p,o),a(p,g),a(p,y),a(y,X),a(p,f),a(p,w),a(w,J),a(p,nt),d(e,Pe,o),d(e,x,o),a(x,b),a(b,re),a(x,it),d(e,Ne,o),d(e,m,o),a(m,ot),a(m,ne),a(ne,st),a(m,lt),a(m,ie),a(ie,dt),a(m,ct),a(m,oe),a(oe,pt),a(m,ut),d(e,Te,o),d(e,E,o),a(E,S),a(S,se),a(E,ht),d(e,Ge,o),d(e,P,o),a(P,ft),a(P,le),a(le,wt),a(P,mt),d(e,Ie,o),d(e,N,o),a(N,T),a(T,de),a(N,yt),d(e,De,o),d(e,G,o),a(G,I),a(I,ce),a(G,gt),d(e,Ce,o),d(e,v,o),a(v,vt),a(v,pe),a(pe,_t),a(v,kt),a(v,ue),a(ue,xt),a(v,bt),d(e,He,o),d(e,z,o),z.innerHTML=Ka,d(e,Ae,o),d(e,D,o),a(D,Et),a(D,he),a(he,St),a(D,Pt),d(e,$e,o),d(e,C,o),a(C,H),a(H,fe),a(C,Nt),d(e,Fe,o),d(e,A,o),a(A,Tt),a(A,we),a(we,Gt),a(A,It),d(e,Oe,o),d(e,M,o),M.innerHTML=Qa,d(e,Ue,o),d(e,_,o),a(_,Dt),a(_,me),a(me,Ct),a(_,Ht),a(_,ye),a(ye,At),a(_,$t),d(e,Re,o),d(e,K,o),a(K,Ft),d(e,je,o),d(e,$,o),a($,Ot),a($,ge),a(ge,Ut),a($,Rt),d(e,Le,o),d(e,F,o),a(F,jt),a(F,ve),a(ve,Lt),a(F,qt),d(e,qe,o),d(e,O,o),a(O,U),a(U,_e),a(O,Xt),d(e,Xe,o),d(e,Q,o),a(Q,zt),d(e,ze,o),d(e,k,o),a(k,ke),a(ke,Mt),a(k,Wt),a(k,xe),a(xe,Vt),a(k,Bt),a(k,W),a(W,Jt),a(W,be),a(be,Kt),a(W,Qt),d(e,Me,o),d(e,Y,o),a(Y,Yt),d(e,We,o),d(e,R,o),a(R,j),a(j,Ee),a(R,Zt),d(e,Ve,o),d(e,L,o),a(L,ea),a(L,Se),a(Se,ta),a(L,aa),d(e,Be,o),d(e,Z,o),a(Z,ra),d(e,Je,o),Wa(V,e,o),Ke=!0},p:nr,i(e){Ke||(Va(V.$$.fragment,e),Ke=!0)},o(e){Ba(V.$$.fragment,e),Ke=!1},d(e){e&&t(p),e&&t(Pe),e&&t(x),e&&t(Ne),e&&t(m),e&&t(Te),e&&t(E),e&&t(Ge),e&&t(P),e&&t(Ie),e&&t(N),e&&t(De),e&&t(G),e&&t(Ce),e&&t(v),e&&t(He),e&&t(z),e&&t(Ae),e&&t(D),e&&t($e),e&&t(C),e&&t(Fe),e&&t(A),e&&t(Oe),e&&t(M),e&&t(Ue),e&&t(_),e&&t(Re),e&&t(K),e&&t(je),e&&t($),e&&t(Le),e&&t(F),e&&t(qe),e&&t(O),e&&t(Xe),e&&t(Q),e&&t(ze),e&&t(k),e&&t(Me),e&&t(Y),e&&t(We),e&&t(R),e&&t(Ve),e&&t(L),e&&t(Be),e&&t(Z),e&&t(Je),Ja(V,e)}}}function lr(B){let p,g;const y=[B[0],Xa];let X={$$slots:{default:[sr]},$$scope:{ctx:B}};for(let f=0;f<y.length;f+=1)X=pa(X,y[f]);return p=new ir({props:X}),{c(){za(p.$$.fragment)},l(f){Ma(p.$$.fragment,f)},m(f,w){Wa(p,f,w),g=!0},p(f,[w]){const J=w&1?rr(y,[w&1&&La(f[0]),w&0&&La(Xa)]):{};w&2&&(J.$$scope={dirty:w,ctx:f}),p.$set(J)},i(f){g||(Va(p.$$.fragment,f),g=!0)},o(f){Ba(p.$$.fragment,f),g=!1},d(f){Ja(p,f)}}}const Xa={title:"Stripe Webhook Signature issue in Django",date:"2025-02-05 19:00:00",modifiedDate:"2025-02-05 19:00:00",categories:["web development","python"],svg:"Nginx",seoImage:"https://boatr.s3.amazonaws.com/static/media/uploads/blog/editor_blender.jpg",shortDescription:"How to fix HTTP_STRIPE_SIGNATURE issue in Django",author:"Ryan Sadwick",spacelab:!1,keywords:["python","django","nginx","gunicorn","python","web dev"]};function dr(B,p,g){return B.$$set=y=>{g(0,p=pa(pa({},p),qa(y)))},p=qa(p),[p]}class _r extends er{constructor(p){super(),tr(this,p,dr,lr,ar,{})}}export{_r as default,Xa as metadata};

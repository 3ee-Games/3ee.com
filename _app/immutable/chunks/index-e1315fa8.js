function g(){}const gt=t=>t;function Y(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function q(){return Object.create(null)}function b(t){t.forEach(B)}function z(t){return typeof t=="function"}function bt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let w;function xt(t,n){return w||(w=document.createElement("a")),w.href=n,t===w.href}function Z(t){return Object.keys(t).length===0}function tt(t,...n){if(t==null)return g;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function wt(t,n,e){t.$$.on_destroy.push(tt(n,e))}function $t(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?Y(e.ctx.slice(),t[1](i(n))):e.ctx}function vt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(n.dirty.length,r.length);for(let c=0;c<s;c+=1)l[c]=n.dirty[c]|r[c];return l}return n.dirty|r}return n.dirty}function Et(t,n,e,i,r,l){if(r){const s=O(n,e,i,l);t.p(s,r)}}function kt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function At(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function Tt(t){return t==null?"":t}function Nt(t){return t&&z(t.destroy)?t.destroy:g}const F=typeof window!="undefined";let St=F?()=>window.performance.now():()=>Date.now(),G=F?t=>requestAnimationFrame(t):g;const d=new Set;function I(t){d.forEach(n=>{n.c(t)||(d.delete(n),n.f())}),d.size!==0&&G(I)}function Ct(t){let n;return d.size===0&&G(I),{promise:new Promise(e=>{d.add(n={c:t,f:e})}),abort(){d.delete(n)}}}let A=!1;function nt(){A=!0}function et(){A=!1}function it(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&o.push(f)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const u=n[o].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:it(1,r,x=>n[e[x]].claim_order,u))-1;i[o]=e[f]+1;const a=f+1;e[a]=o,r=Math.max(a,r)}const l=[],s=[];let c=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(l.push(n[o-1]);c>=o;c--)s.push(n[c]);c--}for(;c>=0;c--)s.push(n[c]);l.reverse(),s.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<s.length;o++){for(;u<l.length&&s[o].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[o],f)}}function st(t,n){if(A){for(rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ot(t,n,e){t.insertBefore(n,e||null)}function ct(t,n,e){A&&!e?st(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function k(t){t.parentNode.removeChild(t)}function jt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function R(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Mt(){return C(" ")}function qt(){return C("")}function Ht(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Lt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function lt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Dt(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:lt(t,n,e)}function Pt(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function ut(t){return Array.from(t.childNodes)}function J(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,n,e,i,r=!1){J(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(n(c)){const o=e(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(n(c)){const o=e(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Q(t,n,e,i){return K(t,r=>r.nodeName===n,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];e[c.name]||l.push(c.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Bt(t,n,e){return Q(t,n,e,R)}function zt(t,n,e){return Q(t,n,e,W)}function at(t,n){return K(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function Ot(t){return at(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Ft(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new L(void 0,n);J(t);const r=t.splice(e,i-e+1);k(r[0]),k(r[r.length-1]);const l=r.slice(1,r.length-1);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(l,n)}function Gt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function It(t,n){t.value=n==null?"":n}function Rt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Wt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Jt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function Kt(t,n,e){t.classList[e?"add":"remove"](n)}function ft(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Qt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class _t{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=W(e.nodeName):this.e=R(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)ot(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(k)}}class L extends _t{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)ct(this.t,this.n[e],n)}}let y;function p(t){y=t}function h(){if(!y)throw new Error("Function called outside component initialization");return y}function Ut(t){h().$$.on_mount.push(t)}function Vt(t){h().$$.after_update.push(t)}function Xt(t){h().$$.on_destroy.push(t)}function Yt(){const t=h();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=ft(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function Zt(t,n){return h().$$.context.set(t,n),n}function tn(t){return h().$$.context.get(t)}const m=[],D=[],v=[],P=[],U=Promise.resolve();let N=!1;function V(){N||(N=!0,U.then(X))}function nn(){return V(),U}function S(t){v.push(t)}const T=new Set;let $=0;function X(){const t=y;do{for(;$<m.length;){const n=m[$];$++,p(n),dt(n.$$)}for(p(null),m.length=0,$=0;D.length;)D.pop()();for(let n=0;n<v.length;n+=1){const e=v[n];T.has(e)||(T.add(e),e())}v.length=0}while(m.length);for(;P.length;)P.pop()();N=!1,T.clear(),p(t)}function dt(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const E=new Set;let _;function en(){_={r:0,c:[],p:_}}function rn(){_.r||b(_.c),_=_.p}function ht(t,n){t&&t.i&&(E.delete(t),t.i(n))}function sn(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}const on=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function cn(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],c=n[l];if(c){for(const o in s)o in c||(i[o]=1);for(const o in c)r[o]||(e[o]=c[o],r[o]=1);t[l]=c}else for(const o in s)r[o]=1}for(const s in i)s in e||(e[s]=void 0);return e}function ln(t){return typeof t=="object"&&t!==null?t:{}}function un(t){t&&t.c()}function an(t,n){t&&t.l(n)}function mt(t,n,e,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:c}=t.$$;r&&r.m(n,e),i||S(()=>{const o=l.map(B).filter(z);s?s.push(...o):b(o),t.$$.on_mount=[]}),c.forEach(S)}function pt(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function yt(t,n){t.$$.dirty[0]===-1&&(m.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function fn(t,n,e,i,r,l,s,c=[-1]){const o=y;p(t);const u=t.$$={fragment:null,ctx:null,props:l,update:g,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:q(),dirty:c,skip_bound:!1,root:n.target||o.$$.root};s&&s(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,x,...j)=>{const M=j.length?j[0]:x;return u.ctx&&r(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&yt(t,a)),x}):[],u.update(),f=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){nt();const a=ut(n.target);u.fragment&&u.fragment.l(a),a.forEach(k)}else u.fragment&&u.fragment.c();n.intro&&ht(t.$$.fragment),mt(t,n.target,n.anchor,n.customElement),et(),X()}p(o)}class _n{$destroy(){pt(this,1),this.$destroy=g}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Z(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Yt as $,ln as A,pt as B,Y as C,nn as D,g as E,tn as F,wt as G,Dt as H,st as I,Ht as J,z as K,Lt as L,Kt as M,jt as N,Tt as O,W as P,zt as Q,xt as R,_n as S,$t as T,Et as U,kt as V,vt as W,Qt as X,Pt as Y,At as Z,Xt as _,ut as a,It as a0,b as a1,D as a2,S as a3,Wt as a4,Jt as a5,L as a6,Ft as a7,Nt as a8,St as a9,Ct as aa,gt as ab,on as ac,lt as b,Bt as c,k as d,R as e,Rt as f,ct as g,at as h,fn as i,Gt as j,Mt as k,qt as l,Ot as m,en as n,sn as o,rn as p,ht as q,Zt as r,bt as s,C as t,Vt as u,Ut as v,un as w,an as x,mt as y,cn as z};

import{S as w,i as E,s as j,e as d,t as y,k as I,w as S,c as h,a as _,h as C,d as f,m as b,x as k,b as v,g as q,I as u,y as x,j as B,q as D,o as G,B as P}from"../../../chunks/index-bde066b7.js";import{G as H}from"../../../chunks/Grid-9c456ad6.js";import"../../../chunks/paths-396f020f.js";import"../../../chunks/navigation-7b09e9d0.js";import"../../../chunks/index-217cba32.js";import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/svgMapper-21c79c6f.js";function N(n){let t,s,a,i,o,m,r,p;return r=new H({props:{posts:n[0]}}),{c(){t=d("section"),s=d("div"),a=d("h1"),i=y("Categories: "),o=y(n[1]),m=I(),S(r.$$.fragment),this.h()},l(e){t=h(e,"SECTION",{class:!0});var c=_(t);s=h(c,"DIV",{class:!0});var l=_(s);a=h(l,"H1",{});var g=_(a);i=C(g,"Categories: "),o=C(g,n[1]),g.forEach(f),m=b(l),k(r.$$.fragment,l),l.forEach(f),c.forEach(f),this.h()},h(){v(s,"class","content"),v(t,"class","background")},m(e,c){q(e,t,c),u(t,s),u(s,a),u(a,i),u(a,o),u(s,m),x(r,s,null),p=!0},p(e,[c]){(!p||c&2)&&B(o,e[1]);const l={};c&1&&(l.posts=e[0]),r.$set(l)},i(e){p||(D(r.$$.fragment,e),p=!0)},o(e){G(r.$$.fragment,e),p=!1},d(e){e&&f(t),P(r)}}}const J=async({params:n,fetch:t})=>{const s=n.category;return{props:{posts:(await(await t("/api/posts.json")).json()).filter(m=>m.meta.categories.includes(s)),currentCategory:s}}};function O(n,t,s){let{posts:a}=t,{currentCategory:i}=t;return n.$$set=o=>{"posts"in o&&s(0,a=o.posts),"currentCategory"in o&&s(1,i=o.currentCategory)},[a,i]}class K extends w{constructor(t){super(),E(this,t,O,N,j,{posts:0,currentCategory:1})}}export{K as default,J as load};

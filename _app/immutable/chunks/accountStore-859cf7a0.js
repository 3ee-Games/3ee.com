import{w as l}from"./index-71ac3aa5.js";const s=(e,r)=>{const{subscribe:t,set:o}=l(r);return{subscribe:t,set:o,useLocalStorage:()=>{if(typeof localStorage!="undefined"){const a=localStorage.getItem(e);a&&o(JSON.parse(a)),t(c=>{localStorage.setItem(e,JSON.stringify(c))})}},deleteLocalStorage:()=>{typeof localStorage!="undefined"&&localStorage.removeItem(e)}}},i=s("threegames_account",{});export{i as a};
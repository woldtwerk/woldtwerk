import{h as p,u as f}from"./index.2e45053b.js";import{k as v,_ as g,a as l,l as d,b as h,p as _,i as y,j as r}from"./entry.776f5f1d.js";import{_ as w}from"./nuxt-link.7bbec6ad.js";import{q as C,e as P,j as $}from"./query.48b42087.js";import{w as c,s as j,u as N}from"./utils.9976df37.js";import{u as T}from"./preview.809a222d.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(j())return(await g(()=>import("./client-db.b7500e7b.js"),["./client-db.b7500e7b.js","./entry.776f5f1d.js","./entry.df670d72.css","./query.48b42087.js","./index.2e45053b.js","./utils.9976df37.js","./preview.809a222d.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},R=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(w,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{R as default};
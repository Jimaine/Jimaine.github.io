import{_ as e}from"./VIcon.vue_vue_type_script_setup_true_lang.2873aec7.js";import{A as s,u as o,o as a,d as t,l,f as n,b as i,e as c,i as p,t as r,a as d,g as m,H as u,m as v,F as h}from"./index.2716c42f.js";const _=["open"],f=["onKeydown","onClick"],y={class:"collapse-head-info"},g={class:"collapse-icon"},w={class:"collapse-content"},C=s({__name:"VCollapse",props:{items:{default:()=>[]},itemOpen:{default:void 0},withChevron:{type:Boolean}},setup(s){const C=o(s.itemOpen),x=e=>{C.value!==e?C.value=e:C.value=void 0};return(o,k)=>{const $=e;return a(!0),t(h,null,l(s.items,((e,l)=>(a(),t("details",{key:l,class:n([[s.withChevron&&"has-chevron",!s.withChevron&&"has-plus"],"collapse"]),open:C.value===l||void 0},[i(o.$slots,"collapse-item",{item:e,index:l,toggle:x},(()=>[c("summary",{class:"collapse-header",tabindex:"0",onKeydown:u(v((()=>x(l)),["prevent"]),["space"]),onClick:v((()=>x(l)),["prevent"])},[c("h3",null,[i(o.$slots,"collapse-item-summary",{item:e,index:l,toggle:x},(()=>[p(r(e.title),1)]))]),c("div",y,[i(o.$slots,"collapse-item-head",{item:e,index:l}),c("div",g,[s.withChevron?(a(),d($,{key:0,icon:"feather:chevron-down"})):s.withChevron?m("",!0):(a(),d($,{key:1,icon:"feather:plus"}))])])],40,f),c("div",w,[c("p",null,[i(o.$slots,"collapse-item-content",{item:e,index:l,toggle:x},(()=>[p(r(e.content),1)]))])])]))],10,_)))),128)}}});export{C as _};

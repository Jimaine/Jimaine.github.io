import{_ as s}from"./VDropdown.vue_vue_type_style_index_0_lang.9ddd5770.js";import{_ as a,o as e,a as i,w as t,e as l,A as n,d,t as r,k as o,b as c,f as u,F as p,l as _,g as m}from"./index.2716c42f.js";import{_ as v}from"./VBlock.vue_vue_type_style_index_0_lang.8ba5468d.js";import{_ as g}from"./VAvatarStack.vue_vue_type_script_setup_true_lang.1eb12bb5.js";import{_ as f}from"./VIconBox.vue_vue_type_style_index_0_lang.dfd2681f.js";const h={},y=l("a",{href:"#",class:"dropdown-item is-media"},[l("div",{class:"icon"},[l("i",{"aria-hidden":"true",class:"lnil lnil-reload"})]),l("div",{class:"meta"},[l("span",null,"Reload"),l("span",null,"Reload Widget")])],-1),w=l("a",{href:"#",class:"dropdown-item is-media"},[l("div",{class:"icon"},[l("i",{"aria-hidden":"true",class:"lnil lnil-cogs"})]),l("div",{class:"meta"},[l("span",null,"Configure"),l("span",null,"Configure widget")])],-1),k=l("a",{href:"#",class:"dropdown-item is-media"},[l("div",{class:"icon"},[l("i",{"aria-hidden":"true",class:"lnil lnil-cog"})]),l("div",{class:"meta"},[l("span",null,"Settings"),l("span",null,"Widget Settings")])],-1),x=l("hr",{class:"dropdown-divider"},null,-1),b=l("a",{href:"#",class:"dropdown-item is-media"},[l("div",{class:"icon"},[l("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})]),l("div",{class:"meta"},[l("span",null,"Remove"),l("span",null,"Remove from view")])],-1);const j=a(h,[["render",function(a,l){const n=s;return e(),i(n,{icon:"feather:more-vertical",dots:"",right:"",spaced:""},{content:t((()=>[y,w,k,x,b])),_:1})}]]),W={class:"widget-head"},B={class:"dark-inverted"},L={class:"inner-list"},R=n({__name:"ListWidgetSingle",props:{title:{default:"List Widget"},straight:{type:Boolean}},setup(s){const a=s;return(s,i)=>{const t=j;return e(),d("div",{class:u(["list-widget",[a.straight&&"is-straight"]])},[l("div",W,[l("h3",B,r(a.title),1),o(t)]),l("div",L,[c(s.$slots,"default")])],2)}}}),S=["data-icon"],V={href:"#"},A=n({__name:"ListWidgetTopicList",props:{topics:{default:()=>[]},rounded:{type:Boolean}},setup(s){const a=s;return(s,n)=>{const c=f,u=g,h=v;return e(),d("div",null,[(e(!0),d(p,null,_(a.topics,(s=>(e(),i(h,{key:s.id,center:"",lighter:"",class:"inner-list-item"},{icon:t((()=>[o(c,{rounded:a.rounded,color:s.color},{default:t((()=>[l("i",{"aria-hidden":"true",class:"iconify","data-icon":s.icon},null,8,S)])),_:2},1032,["rounded","color"])])),action:t((()=>[s.users?(e(),i(u,{key:0,avatars:s.users,size:"small",limit:3},null,8,["avatars"])):m("",!0)])),default:t((()=>[l("a",V,r(s.name),1),l("span",null,r(s.category),1)])),_:2},1024)))),128))])}}});export{A as _,R as a};

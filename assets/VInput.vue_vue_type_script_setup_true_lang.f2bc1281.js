import{A as e,r as l,u as a,v as u,c as n,J as d,K as t,o,d as s,f as r,I as i}from"./index.2716c42f.js";import{u as p}from"./VLabel.vue_vue_type_script_setup_true_lang.65268a0d.js";const v=["id","name","true-value","false-value"],f=e({__name:"VInput",props:{raw:{type:Boolean},modelValue:{default:""},trueValue:{type:Boolean,default:!0},falseValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:f}){var m,V;const _=e,c=l(p({create:!1,help:"VInput"})),h=a(null!=(V=null==(m=c.field)?void 0:m.value)?V:_.modelValue);u(h,(()=>{f("update:modelValue",h.value)})),u((()=>_.modelValue),(()=>{h.value=_.modelValue}));const B=n((()=>_.raw?[]:["input"]));return(e,l)=>d((o(),s("input",{id:c.id,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value=e),class:r(i(B)),name:c.id,"true-value":_.trueValue,"false-value":_.falseValue,onChange:l[1]||(l[1]=(...e)=>{var l,a;return(null==(l=c.field)?void 0:l.handleChange)&&(null==(a=c.field)?void 0:a.handleChange(...e))}),onBlur:l[2]||(l[2]=(...e)=>{var l,a;return(null==(l=c.field)?void 0:l.handleBlur)&&(null==(a=c.field)?void 0:a.handleBlur(...e))})},null,42,v)),[[t,h.value]])}});export{f as _};

import{A as e,R as a,C as s,u as r,D as l,B as o,j as i,o as t,d,e as n,H as u,m as c,I as p,k as h,w as m,t as g,i as f,g as _,M as v,N as b}from"./index.2716c42f.js";import{_ as k}from"./VCheckbox.vue_vue_type_style_index_0_lang.bd037d47.js";import{_ as w}from"./VField.vue_vue_type_script_setup_true_lang.6ad5b232.js";import{_ as y}from"./VControl.247869de.js";import{_ as C}from"./VInput.vue_vue_type_script_setup_true_lang.f2bc1281.js";import{_ as j}from"./AnimatedLogo.c09bbf6f.js";import{_ as x,a as q}from"./vuero-banking-dark.2b91d0b5.js";import{t as M,m as V}from"./zod.d4778a91.js";import{a as S}from"./VLabel.vue_vue_type_script_setup_true_lang.65268a0d.js";import{u as A}from"./useNotyf.0cafe0e4.js";import{s as L}from"./sleep.2a252ff4.js";const D={class:"auth-wrapper-inner columns is-gapless"},I={class:"column is-5"},K={class:"hero is-fullheight is-white"},N={class:"hero-heading"},R=["checked"],z=n("span",null,null,-1),B={class:"auth-logo"},E={class:"hero-body"},F={class:"container"},H={class:"columns"},W={class:"column is-12"},G={class:"auth-content"},J={class:"auth-form-wrapper"},O={id:"signin-form",class:"login-form"},P={key:0,class:"help is-danger"},Q={key:0,class:"help is-danger"},T={key:0,class:"help is-danger"},U={key:0,class:"help is-danger"},X={class:"login"},Y=v('<div class="column login-column is-7 is-hidden-mobile hero-banner"><div class="hero login-hero is-fullheight is-app-grey"><div class="hero-body"><div class="columns"><div class="column is-10 is-offset-1"><img class="light-image has-light-shadow has-light-border" src="'+x+'" alt=""><img class="dark-image has-light-shadow" src="'+q+'" alt=""></div></div></div><div class="hero-footer"><p class="has-text-centered"></p></div></div></div>',1),Z=e({__name:"signup-2",setup(e){const v=a(),x=s(),q=A(),Z=r(!1),{t:$}=l(),ee=M(V.object({name:V.string({required_error:$("auth.errors.name.required")}).min(1,$("auth.errors.name.required")),email:V.string({required_error:$("auth.errors.email.required")}).email($("auth.errors.email.format")),password:V.string({required_error:$("auth.errors.password.required")}).min(8,$("auth.errors.password.length")),passwordCheck:V.string({required_error:$("auth.errors.passwordCheck.required")}),promotional:V.boolean()}).refine((e=>e.password===e.passwordCheck),{message:$("auth.errors.passwordCheck.match"),path:["passwordCheck"]})),{handleSubmit:ae}=S({validationSchema:ee,initialValues:{name:"",email:"",password:"",passwordCheck:"",promotional:!1}}),se=ae((async e=>{console.log("handleSignup values"),console.table(e),Z.value||(Z.value=!0,await L(800),q.dismissAll(),q.success("Welcome, Erik Kovalsky"),x.push({name:"/sidebar/dashboards"}),Z.value=!1)}));return o({title:"Auth Signup 2 - Vuero"}),(e,a)=>{const s=j,r=i("RouterLink"),l=C,o=y,x=w,q=k,M=b;return t(),d("div",D,[n("div",I,[n("div",K,[n("div",N,[n("label",{class:"dark-mode ml-auto",tabindex:"0",onKeydown:a[1]||(a[1]=u(c((e=>e.target.click()),["prevent"]),["space"]))},[n("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!p(v).isDark,onChange:a[0]||(a[0]=(...e)=>p(v).onChange&&p(v).onChange(...e))},null,40,R),z],32),n("div",B,[h(r,{to:"/"},{default:m((()=>[h(s,{class:"top-logo",width:"36px",height:"36px"})])),_:1})])]),n("div",E,[n("div",F,[n("div",H,[n("div",W,[n("div",G,[n("h2",null,g(p($)("auth.title")),1),n("p",null,g(p($)("auth.subtitle")),1),h(r,{to:"/auth/login-2"},{default:m((()=>[f(g(p($)("auth.action.login")),1)])),_:1})]),n("div",J,[n("form",{onSubmit:a[2]||(a[2]=(...e)=>p(se)&&p(se)(...e))},[n("div",O,[h(x,{id:"name"},{default:m((({field:e})=>[h(o,{icon:"feather:user"},{default:m((()=>[h(l,{type:"text",placeholder:p($)("auth.placeholder.name"),autocomplete:"name"},null,8,["placeholder"]),(null==e?void 0:e.errorMessage)?(t(),d("p",P,g(e.errorMessage),1)):_("",!0)])),_:2},1024)])),_:1}),h(x,{id:"email"},{default:m((({field:e})=>[h(o,{icon:"feather:mail"},{default:m((()=>[h(l,{type:"text",placeholder:p($)("auth.placeholder.email"),autocomplete:"email"},null,8,["placeholder"]),(null==e?void 0:e.errorMessage)?(t(),d("p",Q,g(e.errorMessage),1)):_("",!0)])),_:2},1024)])),_:1}),h(x,{id:"password"},{default:m((({field:e})=>[h(o,{icon:"feather:lock"},{default:m((()=>[h(l,{type:"password",placeholder:p($)("auth.placeholder.password"),autocomplete:"new-password"},null,8,["placeholder"]),(null==e?void 0:e.errorMessage)?(t(),d("p",T,g(e.errorMessage),1)):_("",!0)])),_:2},1024)])),_:1}),h(x,{id:"passwordCheck"},{default:m((({field:e})=>[h(o,{icon:"feather:lock"},{default:m((()=>[h(l,{type:"password",placeholder:p($)("auth.placeholder.passwordCheck")},null,8,["placeholder"]),(null==e?void 0:e.errorMessage)?(t(),d("p",U,g(e.errorMessage),1)):_("",!0)])),_:2},1024)])),_:1}),h(x,{id:"promitional"},{default:m((()=>[h(o,{class:"setting-item"},{default:m((()=>[h(q,{color:"primary",label:p($)("auth.label.promotional"),paddingless:""},null,8,["label"])])),_:1})])),_:1}),n("div",X,[h(M,{type:"submit",color:"primary",bold:"",fullwidth:"",raised:""},{default:m((()=>[f(g(p($)("auth.action.signup")),1)])),_:1})])])],32)])])])])])])]),Y])}}});export{Z as default};

import{A as a,R as e,D as s,Q as i,u as n,$ as l,c,j as t,o as r,d as u,e as o,H as d,m as g,I as v,k as f,w as m,f as p}from"./index.2716c42f.js";import{u as h}from"./panels.9434c92c.js";const y=[o("i",{"aria-hidden":"true",class:"fas fa-bars"},null,-1),o("i",{"aria-hidden":"true",class:"fas fa-times"},null,-1)],k={class:"items-wrapper"},x={class:"menu-item is-flex"},b={class:"dark-mode"},C=["checked"],w=o("span",null,null,-1),A=["src"],_=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),j=[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:grid"},null,-1)],K=a({__name:"CircularMenu",setup(a){const K=e(),D=h(),{locale:M}=s(),{y:R}=i(),z=n(!1),H=n(!1);l((()=>{R.value<=30&&(z.value=!1),H.value=R.value>30}));const I=c((()=>{switch(M.value){case"fr":return"/images/icons/flags/france.svg";case"es":return"/images/icons/flags/spain.svg";case"es-MX":return"/images/icons/flags/mexico.svg";case"de":return"/images/icons/flags/germany.svg";case"zh-CN":return"/images/icons/flags/china.svg";default:return"/images/icons/flags/united-states-of-america.svg"}}));return(a,e)=>{const s=t("RouterLink");return r(),u("div",{id:"circular-menu",class:p([[H.value&&"is-active",z.value&&"active"],"circular-menu"])},[o("a",{class:"floating-btn",tabindex:"0",onKeydown:e[0]||(e[0]=d(g((a=>z.value=!z.value),["prevent"]),["space"])),onClick:e[1]||(e[1]=a=>z.value=!z.value)},y,32),o("div",k,[o("div",x,[o("label",b,[o("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!v(K).isDark,onChange:e[2]||(e[2]=(...a)=>v(K).onChange&&v(K).onChange(...a))},null,40,C),w])]),o("a",{class:"menu-item is-flex right-panel-trigger",tabindex:"0",onKeydown:e[3]||(e[3]=d(g((a=>v(D).setActive("languages")),["prevent"]),["space"])),onClick:e[4]||(e[4]=a=>v(D).setActive("languages"))},[o("img",{src:v(I),alt:""},null,8,A)],32),f(s,{to:"/sidebar/layouts/profile-notifications",class:"menu-item is-flex"},{default:m((()=>[_])),_:1}),o("a",{class:"menu-item is-flex",tabindex:"0",onKeydown:e[5]||(e[5]=d(g((a=>v(D).setActive("activity")),["prevent"]),["space"])),onClick:e[6]||(e[6]=a=>v(D).setActive("activity"))},j,32)])],2)}}});export{K as _};

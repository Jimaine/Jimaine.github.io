import{_ as a}from"./VAvatar.vue_vue_type_style_index_0_lang.c14b8e91.js";import{_ as e}from"./VPlaceholderPage.vue_vue_type_style_index_0_lang.55bc53cf.js";import{A as i,u as o,c as t,j as s,o as r,d as l,e as d,k as n,w as m,J as p,K as u,f as g,I as c,L as h,F as v,l as f,t as y,N as j}from"./index.2716c42f.js";import{_ as b}from"./VField.vue_vue_type_script_setup_true_lang.6ad5b232.js";import{_}from"./VControl.247869de.js";import{_ as w,a as H}from"./search-4-dark.cee9d58b.js";import{o as k}from"./via-placeholder.c9fc0738.js";const V=[{id:"1",title:"How to serve coffee at the office the proper way",published:"30 minutes ago",image:"/demo/photos/11.jpg",author:{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"info"}},{id:"2",title:"Teamwork can dramatically increase productivity",published:"4 hours ago",image:"/demo/photos/12.jpg",author:{id:15,avatar:"/demo/avatars/15.jpg",name:"Hilde V.",initials:"HV",color:"warning"}},{id:"3",title:"Is team building a scam or the next thing?",published:"5 hours ago",image:"/demo/photos/13.jpg",author:{id:24,avatar:"/demo/avatars/24.jpg",name:"Sandrine C.",initials:"SC",color:"h-purple"}},{id:"4",title:"3 things you should know when applying for developer jobs",published:"8 hours ago",image:"/demo/photos/14.jpg",author:{id:27,avatar:"/demo/avatars/27.jpg",name:"Carmen E.",initials:"CE",color:"h-purple"}},{id:"5",title:"The construction business massively invests in mobile apps",published:"1 day ago",image:"/demo/photos/15.jpg",author:{id:10,avatar:"/demo/avatars/10.jpg",name:"Henry G.",initials:"HG",color:"info"}},{id:"6",title:"Finding the right spot for your startup",published:"1 day ago",image:"/demo/photos/17.jpg",author:{id:22,avatar:"/demo/avatars/22.jpg",name:"Jimmy H.",initials:"JH",color:"info"}},{id:"7",title:"4 tips to make your business lunches awesome",published:"2 days ago",image:"/demo/photos/18.jpg",author:{id:22,avatar:"/demo/avatars/22.jpg",name:"Jimmy H.",initials:"JH",color:"info"}},{id:"8",title:"Setting up a design system for your app project",published:"2 days ago",image:"/demo/photos/18.jpg",author:{id:26,avatar:"/demo/avatars/26.jpg",name:"Courtney W.",initials:"CW",color:"info"}},{id:"9",title:"Setting up a design system for your app project",published:"3 days ago",image:"/demo/photos/20.jpg",author:{id:8,avatar:"/images/avatars/svg/vuero-1.svg",name:"Erik K.",initials:"EK",color:"info"}},{id:"10",title:"Have you considered product management training?",published:"3 days ago",image:"/demo/photos/21.jpg",author:{id:14,avatar:"/demo/avatars/14.jpg",name:"Ryan B.",initials:"RB",color:"info"}},{id:"11",title:"Using flashy colors in your websites and apps",published:"3 days ago",image:"/demo/photos/22.jpg",author:{id:9,avatar:"/demo/avatars/9.jpg",name:"Ana B.",initials:"AB",color:"info"}},{id:"12",title:"Why it pays to profile your customers",published:"3 days ago",image:"/demo/photos/23.jpg",author:{id:40,avatar:"/demo/avatars/40.jpg",name:"Jeanne M.",initials:"JM",color:"info"}},{id:"13",title:"Building a consistent and talented team",published:"3 days ago",image:"/demo/photos/24.jpg",author:{id:19,avatar:"/demo/avatars/19.jpg",name:"Greta K.",initials:"GK",color:"info"}},{id:"14",title:"Building a consistent and talented team",published:"3 days ago",image:"/demo/photos/25.jpg",author:{id:28,avatar:"/demo/avatars/28.jpg",name:"Edouard F.",initials:"EF",color:"info"}},{id:"15",title:"What framework to choose to build a mobile app in 2020?",published:"3 days ago",image:"/demo/photos/26.jpg",author:{id:5,avatar:"/demo/avatars/5.jpg",name:"Mary L.",initials:"ML",color:"info"}},{id:"16",title:"Diving into building an e-commerce brand - part 1",published:"4 days ago",image:"/demo/photos/27.jpg",author:{id:33,avatar:"/demo/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"success"}},{id:"17",title:"Diving into building an e-commerce brand - part 2",published:"4 days ago",image:"/demo/photos/28.jpg",author:{id:33,avatar:"/demo/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"success"}},{id:"18",title:"How to make sure to reach the goals you set",published:"4 days ago",image:"/demo/photos/29.jpg",author:{id:31,avatar:"/demo/avatars/31.jpg",name:"Yasseen A.",initials:"YA",color:"info"}}],x={class:"card-grid-toolbar"},A={class:"buttons"},E=d("span",{class:"icon"},[d("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),M=d("span",null,"New Post",-1),P={class:"card-grid card-grid-v4"},B=d("img",{class:"light-image",src:w,alt:""},null,-1),C=d("img",{class:"dark-image",src:H,alt:""},null,-1),J={href:"#",class:"card-grid-item"},S=["src"],F={class:"card-grid-item-content"},G={class:"dark-inverted"},K={class:"card-grid-item-footer"},R={class:"meta"},W={class:"dark-inverted"},L=i({__name:"CardsGridV4",setup(i){const w=o(""),H=t((()=>w.value?V.filter((a=>a.title.match(new RegExp(w.value,"i"))||a.author.name.match(new RegExp(w.value,"i")))):V)),L=o(0),T=["All Posts","Recent Posts","Older Posts","Popular Posts"];return(i,o)=>{const t=_,V=s("Multiselect"),U=b,D=j,I=e,N=a;return r(),l("div",null,[d("div",x,[n(t,{icon:"feather:search"},{default:m((()=>[p(d("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>w.value=a),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[u,w.value]])])),_:1}),d("div",A,[n(U,{class:"h-hidden-mobile"},{default:m((()=>[n(t,null,{default:m((()=>[n(V,{modelValue:L.value,"onUpdate:modelValue":o[1]||(o[1]=a=>L.value=a),options:T,"max-height":145,placeholder:"Select an option"},null,8,["modelValue"])])),_:1})])),_:1}),n(D,{color:"primary",raised:""},{default:m((()=>[E,M])),_:1})])]),d("div",P,[n(I,{class:g([0!==c(H).length&&"is-hidden"]),title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:m((()=>[B,C])),_:1},8,["class"]),n(h,{name:"list",tag:"div",class:"columns is-multiline"},{default:m((()=>[(r(!0),l(v,null,f(c(H),(a=>(r(),l("div",{key:a.id,class:"column is-3"},[d("a",J,[d("img",{src:a.image,alt:"",onErrorOnce:o[2]||(o[2]=a=>c(k)(400,300))},null,40,S),d("div",F,[d("h3",G,y(a.title),1)]),d("div",K,[n(N,{picture:a.author.avatar,size:"small"},null,8,["picture"]),d("div",R,[d("span",W,y(a.author.name),1),d("span",null,y(a.published),1)])])])])))),128))])),_:1})])])}}});export{L as _};

import{A as a,o as s,d as e,e as r,g as o,f as i,t as l,M as c}from"./index.2716c42f.js";const p={class:"v-popover-profile has-loader"},n={class:"profile-popover-block"},t={class:"profile-popover-wrapper"},u={key:0,class:"popover-avatar"},d=["src"],v=["src"],f={class:"fake-avatar"},m=["src"],b={class:"popover-meta"},g={class:"user-meta"},h={class:"username"},k={class:"location"},y={class:"job-title mb-1"},_={class:"bio"},j=c('<div class="popover-actions"><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone"></i></a><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></a><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:user"></i></a></div>',1),x=a({__name:"UserPopoverContent",props:{user:null},setup(a){const c=a;return(a,x)=>(s(),e("div",p,[r("div",n,[r("div",t,[c.user.avatar?(s(),e("div",u,[r("img",{class:"avatar",src:c.user.avatar,alt:""},null,8,d),c.user.badge?(s(),e("img",{key:0,class:"badge",src:c.user.badge,alt:""},null,8,v)):o("",!0)])):(s(),e("div",{key:1,class:i(["popover-fake-avatar",[c.user.color&&`is-${c.user.color}`]])},[r("div",f,[r("span",null,l(c.user.initials),1)]),c.user.badge?(s(),e("img",{key:0,class:"badge",src:c.user.badge,alt:""},null,8,m)):o("",!0)],2)),r("div",b,[r("span",g,[r("span",h,l(c.user.username),1),r("span",k,l(c.user.location),1)]),r("span",y,l(c.user.position),1),r("span",_,l(c.user.bio),1)])]),j])]))}});export{x as _};

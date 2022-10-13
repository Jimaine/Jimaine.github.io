var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(a){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var l=document.documentElement;function s(t){var e="";return t.fake&&(e=l.style.overflow,t.style.background="",t.style.overflow=l.style.overflow="hidden",l.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),l.style.overflow=e,l.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},y=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function w(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function A(t){return"none"!==window.getComputedStyle(t).display}function N(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}var i=document.createElement("fakeelement");t.length;for(var a=0;a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function L(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var B,S=!1;try{B=Object.defineProperty({},"passive",{get:function(){S=!0}}),window.addEventListener("test",null,B)}catch(I){}var H=!!S&&{passive:!0};function O(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&H;t.addEventListener(i,e[i],a)}}function D(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function k(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var R=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,l=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},B=t.useLocalStorage;if(B){var S=navigator.userAgent,H=new Date;try{(b=l.localStorage)?(b.setItem(H,H),B=b.getItem(H)==H,b.removeItem(H)):B=!1,B||(b={})}catch(I){B=!1}B&&(b.tnsApp&&b.tnsApp!==S&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){b.removeItem(t)})),localStorage.tnsApp=S)}var P=b.tC?r(b.tC):o(b,"tC",function(){var t=document,e=u(),n=s(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",l=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],f=0;f<3;f++)if(r=l[f],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(I){}return e.fake?c(e,n):i.remove(),a}(),B),z=b.tPL?r(b.tPL):o(b,"tPL",function(){var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var l=0;l<70;l++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),B),W=b.tMQ?r(b.tMQ):o(b,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}(),B),q=b.tTf?r(b.tTf):o(b,"tTf",N("transform"),B),F=b.t3D?r(b.t3D):o(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=s(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(q),B),j=b.tTDu?r(b.tTDu):o(b,"tTDu",N("transitionDuration"),B),V=b.tTDe?r(b.tTDe):o(b,"tTDe",N("transitionDelay"),B),G=b.tADu?r(b.tADu):o(b,"tADu",N("animationDuration"),B),Q=b.tADe?r(b.tADe):o(b,"tADe",N("animationDelay"),B),X=b.tTE?r(b.tTE):o(b,"tTE",L(j,"Transition"),B),Y=b.tAE?r(b.tAE):o(b,"tAE",L(G,"Animation"),B),K=l.console&&"function"==typeof l.console.warn,J=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],U={};if(J.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(U[e]=i,!a||!a.nodeName)return void(K&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var _=t.responsive,Z=t.nested,$="carousel"===t.mode;if(_){0 in _&&(t=a(t,_[0]),delete _[0]);var tt={};for(var et in _){var nt=_[et];nt="number"==typeof nt?{items:nt}:nt,tt[et]=nt}_=tt,tt=null}if($||function t(e){for(var n in e)$||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!$){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var it=t.animateIn,at=t.animateOut,rt=t.animateDelay,ot=t.animateNormal}var ut,lt,st="horizontal"===t.axis,ct=n.createElement("div"),ft=n.createElement("div"),dt=t.container,vt=dt.parentNode,pt=dt.outerHTML,ht=dt.children,mt=ht.length,yt=kn(),gt=!1;_&&ei(),$&&(dt.className+=" tns-vpfix");var xt,bt,wt,Ct,Mt,Tt,Et=t.autoWidth,At=Wn("fixedWidth"),Nt=Wn("edgePadding"),Lt=Wn("gutter"),Bt=Pn(),St=Wn("center"),Ht=Et?1:Math.floor(Wn("items")),Ot=Wn("slideBy"),Dt=t.viewportMax||t.fixedWidthViewportWidth,kt=Wn("arrowKeys"),Rt=Wn("speed"),It=t.rewind,Pt=!It&&t.loop,zt=Wn("autoHeight"),Wt=Wn("controls"),qt=Wn("controlsText"),Ft=Wn("nav"),jt=Wn("touch"),Vt=Wn("mouseDrag"),Gt=Wn("autoplay"),Qt=Wn("autoplayTimeout"),Xt=Wn("autoplayText"),Yt=Wn("autoplayHoverPause"),Kt=Wn("autoplayResetOnVisibility"),Jt=(Ct=null,Mt=Wn("nonce"),Tt=document.createElement("style"),Ct&&Tt.setAttribute("media",Ct),Mt&&Tt.setAttribute("nonce",Mt),document.querySelector("head").appendChild(Tt),Tt.sheet?Tt.sheet:Tt.styleSheet),Ut=t.lazyload,_t=t.lazyloadSelector,Zt=[],$t=Pt?(bt=function(){if(Et||At&&!Dt)return mt-1;var e=At?"fixedWidth":"items",n=[];if((At||t[e]<mt)&&n.push(t[e]),_)for(var i in _){var a=_[i][e];a&&(At||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(At?Dt/Math.min.apply(null,n):Math.max.apply(null,n))}(),wt=$?Math.ceil((5*bt-mt)/2):4*bt-mt,wt=Math.max(bt,wt),zn("edgePadding")?wt+1:wt):0,te=$?mt+2*$t:mt+$t,ee=!(!At&&!Et||Pt),ne=At?Ni():null,ie=!$||!Pt,ae=st?"left":"top",re="",oe="",ue=At?function(){return St&&!Pt?mt-1:Math.ceil(-ne/(At+Lt))}:Et?function(){for(var t=0;t<te;t++)if(xt[t]>=-ne)return t}:function(){return St&&$&&!Pt?mt-1:Pt||$?Math.max(0,te-Math.ceil(Ht)):te-1},le=Hn(Wn("startIndex")),se=le;Sn();var ce,fe,de,ve=0,pe=Et?null:ue(),he=t.preventActionWhenRunning,me=t.swipeAngle,ye=!me||"?",ge=!1,xe=t.onInit,be=new k,we=" tns-slider tns-"+t.mode,Ce=dt.id||(de=window.tnsId,window.tnsId=de?de+1:1,"tns"+window.tnsId),Me=Wn("disable"),Te=!1,Ee=t.freezable,Ae=!(!Ee||Et)&&ti(),Ne=!1,Le={click:Ii,keydown:function(t){t=Gi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ue.disabled||Ii(t,-1):_e.disabled||Ii(t,1))}},Be={click:function(t){if(ge){if(he)return;ki()}var e=Qi(t=Gi(t));for(;e!==en&&!g(e,"data-nav");)e=e.parentNode;if(g(e,"data-nav")){var n=on=Number(x(e,"data-nav")),i=At||Et?n*mt/an:n*Ht;Ri(Pe?n:Math.min(Math.ceil(i),mt-1),t),un===n&&(vn&&Fi(),on=-1)}},keydown:function(t){t=Gi(t);var e=n.activeElement;if(!g(e,"data-nav"))return;var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));i>=0&&(0===i?a>0&&Vi(tn[a-1]):1===i?a<an-1&&Vi(tn[a+1]):(on=a,Ri(a,t)))}},Se={mouseover:function(){vn&&(zi(),pn=!0)},mouseout:function(){pn&&(Pi(),pn=!1)}},He={visibilitychange:function(){n.hidden?vn&&(zi(),mn=!0):mn&&(Pi(),mn=!1)}},Oe={keydown:function(t){t=Gi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&Ii(t,0===e?-1:1)}},De={touchstart:Ji,touchmove:Ui,touchend:Zi,touchcancel:Zi},ke={mousedown:Ji,mousemove:Ui,mouseup:Zi,mouseleave:Zi},Re=zn("controls"),Ie=zn("nav"),Pe=!!Et||t.navAsThumbnails,ze=zn("autoplay"),We=zn("touch"),qe=zn("mouseDrag"),Fe="tns-slide-active",je="tns-slide-cloned",Ve="tns-complete",Ge={load:function(t){ci(Qi(t))},error:function(t){e=Qi(t),m(e,"failed"),fi(e);var e}},Qe="force"===t.preventScrollOnTouch;if(Re)var Xe,Ye,Ke=t.controlsContainer,Je=t.controlsContainer?t.controlsContainer.outerHTML:"",Ue=t.prevButton,_e=t.nextButton,Ze=t.prevButton?t.prevButton.outerHTML:"",$e=t.nextButton?t.nextButton.outerHTML:"";if(Ie)var tn,en=t.navContainer,nn=t.navContainer?t.navContainer.outerHTML:"",an=Et?mt:ta(),rn=0,on=-1,un=Dn(),ln=un,sn="tns-nav-active",cn="Carousel Page ",fn=" (Current Slide)";if(ze)var dn,vn,pn,hn,mn,yn="forward"===t.autoplayDirection?1:-1,gn=t.autoplayButton,xn=t.autoplayButton?t.autoplayButton.outerHTML:"",bn=["<span class='tns-visually-hidden'>"," animation</span>"];if(We||qe)var wn,Cn,Mn={},Tn={},En=!1,An=st?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Et||Bn(Me||Ae),q&&(ae=q,re="translate",F?(re+=st?"3d(":"3d(0px, ",oe=st?", 0px, 0px)":", 0px)"):(re+=st?"X(":"Y(",oe=")")),$&&(dt.className=dt.className.replace("tns-vpfix","")),function(){zn("gutter"),ct.className="tns-outer",ft.className="tns-inner",ct.id=Ce+"-ow",ft.id=Ce+"-iw",""===dt.id&&(dt.id=Ce);we+=z||Et?" tns-subpixel":" tns-no-subpixel",we+=P?" tns-calc":" tns-no-calc",Et&&(we+=" tns-autowidth");we+=" tns-"+t.axis,dt.className+=we,$?((ut=n.createElement("div")).id=Ce+"-mw",ut.className="tns-ovh",ct.appendChild(ut),ut.appendChild(ft)):ct.appendChild(ft);if(zt){(ut||ft).className+=" tns-ah"}if(vt.insertBefore(ct,dt),ft.appendChild(dt),v(ht,(function(t,e){m(t,"tns-item"),t.id||(t.id=Ce+"-item"+e),!$&&ot&&m(t,ot),w(t,{"aria-hidden":"true",tabindex:"-1"})})),$t){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=$t;a--;){var r=a%mt,o=ht[r].cloneNode(!0);if(m(o,je),C(o,"id"),i.insertBefore(o,i.firstChild),$){var u=ht[mt-1-r].cloneNode(!0);m(u,je),C(u,"id"),e.appendChild(u)}}dt.insertBefore(e,dt.firstChild),dt.appendChild(i),ht=dt.children}}(),function(){if(!$)for(var e=le,n=le+Math.min(mt,Ht);e<n;e++){var i=ht[e];i.style.left=100*(e-le)/Ht+"%",m(i,it),y(i,ot)}st&&(z||Et?(f(Jt,"#"+Ce+" > .tns-item","font-size:"+l.getComputedStyle(ht[0]).fontSize+";",d(Jt)),f(Jt,"#"+Ce,"font-size:0;",d(Jt))):$&&v(ht,(function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+te+")":100*t/te+"%"}(e)})));if(W){if(j){var a=ut&&t.autoHeight?Qn(t.speed):"";f(Jt,"#"+Ce+"-mw",a,d(Jt))}a=qn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(Jt,"#"+Ce+"-iw",a,d(Jt)),$&&(a=st&&!Et?"width:"+Fn(t.fixedWidth,t.gutter,t.items)+";":"",j&&(a+=Qn(Rt)),f(Jt,"#"+Ce,a,d(Jt))),a=st&&!Et?jn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=Vn(t.gutter)),$||(j&&(a+=Qn(Rt)),G&&(a+=Xn(Rt))),a&&f(Jt,"#"+Ce+" > .tns-item",a,d(Jt))}else{$&&zt&&(ut.style[j]=Rt/1e3+"s"),ft.style.cssText=qn(Nt,Lt,At,zt),$&&st&&!Et&&(dt.style.width=Fn(At,Lt,Ht));a=st&&!Et?jn(At,Lt,Ht):"";Lt&&(a+=Vn(Lt)),a&&f(Jt,"#"+Ce+" > .tns-item",a,d(Jt))}if(_&&W)for(var r in _){r=parseInt(r);var o=_[r],u=(a="",""),s="",c="",p="",h=Et?null:Wn("items",r),g=Wn("fixedWidth",r),x=Wn("speed",r),b=Wn("edgePadding",r),w=Wn("autoHeight",r),C=Wn("gutter",r);j&&ut&&Wn("autoHeight",r)&&"speed"in o&&(u="#"+Ce+"-mw{"+Qn(x)+"}"),("edgePadding"in o||"gutter"in o)&&(s="#"+Ce+"-iw{"+qn(b,C,g,x,w)+"}"),$&&st&&!Et&&("fixedWidth"in o||"items"in o||At&&"gutter"in o)&&(c="width:"+Fn(g,C,h)+";"),j&&"speed"in o&&(c+=Qn(x)),c&&(c="#"+Ce+"{"+c+"}"),("fixedWidth"in o||At&&"gutter"in o||!$&&"items"in o)&&(p+=jn(g,C,h)),"gutter"in o&&(p+=Vn(C)),!$&&"speed"in o&&(j&&(p+=Qn(x)),G&&(p+=Xn(x))),p&&(p="#"+Ce+" > .tns-item{"+p+"}"),(a=u+s+c+p)&&Jt.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",Jt.cssRules.length)}}(),Yn();var Nn=Pt?$?function(){var t=ve,e=pe;t+=Ot,e-=Ot,Nt?(t+=1,e-=1):At&&(Bt+Lt)%(At+Lt)&&(e-=1),$t&&(le>e?le-=mt:le<t&&(le+=mt))}:function(){if(le>pe)for(;le>=ve+mt;)le-=mt;else if(le<ve)for(;le<=pe-mt;)le+=mt}:function(){le=Math.max(ve,Math.min(pe,le))},Ln=$?function(){var t,e,n,i,a,r,o,u,l,s,c;Ei(dt,""),j||!Rt?(Si(),Rt&&A(dt)||ki()):(t=dt,e=ae,n=re,i=oe,a=Li(),r=Rt,o=ki,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u)),st||$i()}:function(){Zt=[];var t={};t[X]=t[Y]=ki,D(ht[se],t),O(ht[le],t),Hi(se,it,at,!0),Hi(le,ot,it),X&&Y&&Rt&&A(dt)||ki()};return{version:"2.9.4",getInfo:na,events:be,goTo:Ri,play:function(){Gt&&!vn&&(qi(),hn=!1)},pause:function(){vn&&(Fi(),hn=!0)},isOn:gt,updateSliderHeight:yi,refresh:Yn,destroy:function(){if(Jt.disabled=!0,Jt.ownerNode&&Jt.ownerNode.remove(),D(l,{resize:Zn}),kt&&D(n,Oe),Ke&&D(Ke,Le),en&&D(en,Be),D(dt,Se),D(dt,He),gn&&D(gn,{click:ji}),Gt&&clearInterval(dn),$&&X){var e={};e[X]=ki,D(dt,e)}jt&&D(dt,De),Vt&&D(dt,ke);var i=[pt,Je,Ze,$e,nn,xn];for(var a in J.forEach((function(e,n){var a="container"===e?ct:t[e];if("object"==typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),J=it=at=rt=ot=st=ct=ft=dt=vt=pt=ht=mt=lt=yt=Et=At=Nt=Lt=Bt=Ht=Ot=Dt=kt=Rt=It=Pt=zt=Jt=Ut=xt=Zt=$t=te=ee=ne=ie=ae=re=oe=ue=le=se=ve=pe=me=ye=ge=xe=be=we=Ce=Me=Te=Ee=Ae=Ne=Le=Be=Se=He=Oe=De=ke=Re=Ie=Pe=ze=We=qe=Fe=Ve=Ge=ce=Wt=qt=Ke=Je=Ue=_e=Xe=Ye=Ft=en=nn=tn=an=rn=on=un=ln=sn=cn=fn=Gt=Qt=yn=Xt=Yt=gn=xn=Kt=bn=dn=vn=pn=hn=mn=Mn=Tn=wn=En=Cn=An=jt=Vt=null,this)"rebuild"!==a&&(this[a]=null);gt=!1},rebuild:function(){return R(a(t,U))}}}function Bn(t){t&&(Wt=Ft=jt=Vt=kt=Gt=Yt=Kt=!1)}function Sn(){for(var t=$?le-$t:le;t<0;)t+=mt;return t%mt+1}function Hn(t){return t=t?Math.max(0,Math.min(Pt?mt-1:mt-Ht,t)):0,$?t+$t:t}function On(t){for(null==t&&(t=le),$&&(t-=$t);t<0;)t+=mt;return Math.floor(t%mt)}function Dn(){var t,e=On();return t=Pe?e:At||Et?Math.ceil((e+1)*an/mt-1):Math.floor(e/Ht),!Pt&&$&&le===pe&&(t=an-1),t}function kn(){return l.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Rn(t){return"top"===t?"afterbegin":"beforeend"}function In(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||In(t.parentNode)}}function Pn(){var t=Nt?2*Nt-Lt:0;return In(vt)-t}function zn(e){if(t[e])return!0;if(_)for(var n in _)if(_[n][e])return!0;return!1}function Wn(e,n){if(null==n&&(n=yt),"items"===e&&At)return Math.floor((Bt+Lt)/(At+Lt))||1;var i=t[e];if(_)for(var a in _)n>=parseInt(a)&&e in _[a]&&(i=_[a][e]);return"slideBy"===e&&"page"===i&&(i=Wn("items")),$||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function qn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=st?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(st?u+" 0 0":"0 "+u+" 0")+";"}return!$&&a&&j&&i&&(r+=Qn(i)),r}function Fn(t,e,n){return t?(t+e)*te+"px":P?P+"("+100*te+"% / "+n+")":100*te/n+"%"}function jn(t,e,n){var i;if(t)i=t+e+"px";else{$||(n=Math.floor(n));var a=$?te:n;i=P?P+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Z?i+";":i+" !important;"}function Vn(t){var e="";!1!==t&&(e=(st?"padding-":"margin-")+(st?"right":"bottom")+": "+t+"px;");return e}function Gn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Qn(t){return Gn(j,18)+"transition-duration:"+t/1e3+"s;"}function Xn(t){return Gn(G,17)+"animation-duration:"+t/1e3+"s;"}function Yn(){if(zn("autoHeight")||Et||!st){var t=dt.querySelectorAll("img");v(t,(function(t){var e=t.src;Ut||(e&&e.indexOf("data:image")<0?(t.src="",O(t,Ge),m(t,"loading"),t.src=e):ci(t))})),e((function(){pi(M(t),(function(){ce=!0}))})),zn("autoHeight")&&(t=di(le,Math.min(le+Ht-1,te-1))),Ut?Kn():e((function(){pi(M(t),Kn)}))}else $&&Bi(),Un(),_n()}function Kn(){if(Et&&mt>1){var t=Pt?le:mt-1;!function e(){var n=ht[t].getBoundingClientRect().left,i=ht[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Jn():setTimeout((function(){e()}),16)}()}else Jn()}function Jn(){st&&!Et||(gi(),Et?(ne=Ni(),Ee&&(Ae=ti()),pe=ue(),Bn(Me||Ae)):$i()),$&&Bi(),Un(),_n()}function Un(){if(xi(),ct.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ui()+"</span>  of "+mt+"</div>"),fe=ct.querySelector(".tns-liveregion .current"),ze){var e=Gt?"stop":"start";gn?w(gn,{"data-action":e}):t.autoplayButtonOutput&&(ct.insertAdjacentHTML(Rn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+bn[0]+e+bn[1]+Xt[0]+"</button>"),gn=ct.querySelector("[data-action]")),gn&&O(gn,{click:ji}),Gt&&(qi(),Yt&&O(dt,Se),Kt&&O(dt,He))}if(Ie){if(en)w(en,{"aria-label":"Carousel Pagination"}),v(tn=en.children,(function(t,e){w(t,{"data-nav":e,tabindex:"-1","aria-label":cn+(e+1),"aria-controls":Ce})}));else{for(var n="",i=Pe?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+Ce+'" '+i+' aria-label="'+cn+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ct.insertAdjacentHTML(Rn(t.navPosition),n),en=ct.querySelector(".tns-nav"),tn=en.children}if(ea(),j){var r=j.substring(0,j.length-18).toLowerCase(),o="transition: all "+Rt/1e3+"s";r&&(o="-"+r+"-"+o),f(Jt,"[aria-controls^="+Ce+"-item]",o,d(Jt))}w(tn[un],{"aria-label":cn+(un+1)+fn}),C(tn[un],"tabindex"),m(tn[un],sn),O(en,Be)}Re&&(Ke||Ue&&_e||(ct.insertAdjacentHTML(Rn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Ce+'">'+qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Ce+'">'+qt[1]+"</button></div>"),Ke=ct.querySelector(".tns-controls")),Ue&&_e||(Ue=Ke.children[0],_e=Ke.children[1]),t.controlsContainer&&w(Ke,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&w([Ue,_e],{"aria-controls":Ce,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(w(Ue,{"data-controls":"prev"}),w(_e,{"data-controls":"next"})),Xe=wi(Ue),Ye=wi(_e),Ti(),Ke?O(Ke,Le):(O(Ue,Le),O(_e,Le))),ni()}function _n(){if($&&X){var e={};e[X]=ki,O(dt,e)}jt&&O(dt,De,t.preventScrollOnTouch),Vt&&O(dt,ke),kt&&O(n,Oe),"inner"===Z?be.on("outerResized",(function(){$n(),be.emit("innerLoaded",na())})):(_||At||Et||zt||!st)&&O(l,{resize:Zn}),zt&&("outer"===Z?be.on("innerLoaded",vi):Me||vi()),si(),Me?ri():Ae&&ai(),be.on("indexChanged",hi),"inner"===Z&&be.emit("innerLoaded",na()),"function"==typeof xe&&xe(na()),gt=!0}function Zn(t){e((function(){$n(Gi(t))}))}function $n(e){if(gt){"outer"===Z&&be.emit("outerResized",na(e)),yt=kn();var i,a=lt,r=!1;_&&(ei(),(i=a!==lt)&&be.emit("newBreakpointStart",na(e)));var o,u,l=Ht,s=Me,c=Ae,p=kt,h=Wt,g=Ft,x=jt,b=Vt,w=Gt,C=Yt,M=Kt,A=le;if(i){var N=At,L=zt,B=qt,S=St,H=Xt;if(!W)var k=Lt,R=Nt}if(kt=Wn("arrowKeys"),Wt=Wn("controls"),Ft=Wn("nav"),jt=Wn("touch"),St=Wn("center"),Vt=Wn("mouseDrag"),Gt=Wn("autoplay"),Yt=Wn("autoplayHoverPause"),Kt=Wn("autoplayResetOnVisibility"),i&&(Me=Wn("disable"),At=Wn("fixedWidth"),Rt=Wn("speed"),zt=Wn("autoHeight"),qt=Wn("controlsText"),Xt=Wn("autoplayText"),Qt=Wn("autoplayTimeout"),W||(Nt=Wn("edgePadding"),Lt=Wn("gutter"))),Bn(Me),Bt=Pn(),st&&!Et||Me||(gi(),st||($i(),r=!0)),(At||Et)&&(ne=Ni(),pe=ue()),(i||At)&&(Ht=Wn("items"),Ot=Wn("slideBy"),(u=Ht!==l)&&(At||Et||(pe=ue()),Nn())),i&&Me!==s&&(Me?ri():function(){if(!Te)return;if(Jt.disabled=!1,dt.className+=we,Bi(),Pt)for(var t=$t;t--;)$&&E(ht[t]),E(ht[te-t-1]);if(!$)for(var e=le,n=le+mt;e<n;e++){var i=ht[e],a=e<le+Ht?it:ot;i.style.left=100*(e-le)/Ht+"%",m(i,a)}ii(),Te=!1}()),Ee&&(i||At||Et)&&(Ae=ti())!==c&&(Ae?(Si(Li(Hn(0))),ai()):(!function(){if(!Ne)return;Nt&&W&&(ft.style.margin="");if($t)for(var t="tns-transparent",e=$t;e--;)$&&y(ht[e],t),y(ht[te-e-1],t);ii(),Ne=!1}(),r=!0)),Bn(Me||Ae),Gt||(Yt=Kt=!1),kt!==p&&(kt?O(n,Oe):D(n,Oe)),Wt!==h&&(Wt?Ke?E(Ke):(Ue&&E(Ue),_e&&E(_e)):Ke?T(Ke):(Ue&&T(Ue),_e&&T(_e))),Ft!==g&&(Ft?(E(en),ea()):T(en)),jt!==x&&(jt?O(dt,De,t.preventScrollOnTouch):D(dt,De)),Vt!==b&&(Vt?O(dt,ke):D(dt,ke)),Gt!==w&&(Gt?(gn&&E(gn),vn||hn||qi()):(gn&&T(gn),vn&&Fi())),Yt!==C&&(Yt?O(dt,Se):D(dt,Se)),Kt!==M&&(Kt?O(n,He):D(n,He)),i){if(At===N&&St===S||(r=!0),zt!==L&&(zt||(ft.style.height="")),Wt&&qt!==B&&(Ue.innerHTML=qt[0],_e.innerHTML=qt[1]),gn&&Xt!==H){var I=Gt?1:0,P=gn.innerHTML,z=P.length-H[I].length;P.substring(z)===H[I]&&(gn.innerHTML=P.substring(0,z)+Xt[I])}}else St&&(At||Et)&&(r=!0);if((u||At&&!Et)&&(an=ta(),ea()),(o=le!==A)?(be.emit("indexChanged",na()),r=!0):u?o||hi():(At||Et)&&(si(),xi(),oi()),u&&!$&&function(){for(var t=le+Math.min(mt,Ht),e=te;e--;){var n=ht[e];e>=le&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-le)/Ht+"%",m(n,it),y(n,ot)):n.style.left&&(n.style.left="",m(n,ot),y(n,it)),y(n,at)}setTimeout((function(){v(ht,(function(t){y(t,"tns-moving")}))}),300)}(),!Me&&!Ae){if(i&&!W&&(Nt===R&&Lt===k||(ft.style.cssText=qn(Nt,Lt,At,Rt,zt)),st)){$&&(dt.style.width=Fn(At,Lt,Ht));var q=jn(At,Lt,Ht)+Vn(Lt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Jt,d(Jt)-1),f(Jt,"#"+Ce+" > .tns-item",q,d(Jt))}zt&&vi(),r&&(Bi(),se=le)}i&&be.emit("newBreakpointEnd",na(e))}}function ti(){if(!At&&!Et)return mt<=(St?Ht-(Ht-1)/2:Ht);var t=At?(At+Lt)*mt:xt[mt],e=Nt?Bt+2*Nt:Bt+Lt;return St&&(e-=At?(Bt-At)/2:(Bt-(xt[le+1]-xt[le]-Lt))/2),t<=e}function ei(){for(var t in lt=0,_)t=parseInt(t),yt>=t&&(lt=t)}function ni(){!Gt&&gn&&T(gn),!Ft&&en&&T(en),Wt||(Ke?T(Ke):(Ue&&T(Ue),_e&&T(_e)))}function ii(){Gt&&gn&&E(gn),Ft&&en&&E(en),Wt&&(Ke?E(Ke):(Ue&&E(Ue),_e&&E(_e)))}function ai(){if(!Ne){if(Nt&&(ft.style.margin="0px"),$t)for(var t="tns-transparent",e=$t;e--;)$&&m(ht[e],t),m(ht[te-e-1],t);ni(),Ne=!0}}function ri(){if(!Te){if(Jt.disabled=!0,dt.className=dt.className.replace(we.substring(1),""),C(dt,["style"]),Pt)for(var t=$t;t--;)$&&T(ht[t]),T(ht[te-t-1]);if(st&&$||C(ft,["style"]),!$)for(var e=le,n=le+mt;e<n;e++){var i=ht[e];C(i,["style"]),y(i,it),y(i,ot)}ni(),Te=!0}}function oi(){var t=ui();fe.innerHTML!==t&&(fe.innerHTML=t)}function ui(){var t=li(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function li(t){null==t&&(t=Li());var e,n,i,a=le;if(St||Nt?(Et||At)&&(n=-(parseFloat(t)+Nt),i=n+Bt+2*Nt):Et&&(n=xt[le],i=n+Bt),Et)xt.forEach((function(t,r){r<te&&((St||Nt)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(At){var r=At+Lt;St||Nt?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Bt/r)-1}else if(St||Nt){var o=Ht-1;if(St?(a-=o/2,e=le+o/2):e=le+o,Nt){var u=Nt*Ht/Bt;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+Ht-1;a=Math.max(a,0),e=Math.min(e,te-1)}return[a,e]}function si(){if(Ut&&!Me){var t=li();t.push(_t),di.apply(null,t).forEach((function(t){if(!h(t,Ve)){var e={};e[X]=function(t){t.stopPropagation()},O(t,e),O(t,Ge),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function ci(t){m(t,"loaded"),fi(t)}function fi(t){m(t,Ve),y(t,"loading"),D(t,Ge)}function di(t,e,n){var i=[];for(n||(n="img");t<=e;)v(ht[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function vi(){var t=di.apply(null,li());e((function(){pi(t,yi)}))}function pi(t,n){return ce?n():(t.forEach((function(e,n){!Ut&&e.complete&&fi(e),h(e,Ve)&&t.splice(n,1)})),t.length?void e((function(){pi(t,n)})):n())}function hi(){si(),xi(),oi(),Ti(),function(){if(Ft&&(un=on>=0?on:Dn(),on=-1,un!==ln)){var t=tn[ln],e=tn[un];w(t,{tabindex:"-1","aria-label":cn+(ln+1)}),y(t,sn),w(e,{"aria-label":cn+(un+1)+fn}),C(e,"tabindex"),m(e,sn),ln=un}}()}function mi(t,e){for(var n=[],i=t,a=Math.min(t+e,te);i<a;i++)n.push(ht[i].offsetHeight);return Math.max.apply(null,n)}function yi(){var t=zt?mi(le,Ht):mi($t,mt),e=ut||ft;e.style.height!==t&&(e.style.height=t+"px")}function gi(){xt=[0];var t=st?"left":"top",e=st?"right":"bottom",n=ht[0].getBoundingClientRect()[t];v(ht,(function(i,a){a&&xt.push(i.getBoundingClientRect()[t]-n),a===te-1&&xt.push(i.getBoundingClientRect()[e]-n)}))}function xi(){var t=li(),e=t[0],n=t[1];v(ht,(function(t,i){i>=e&&i<=n?g(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),m(t,Fe)):g(t,"aria-hidden")||(w(t,{"aria-hidden":"true",tabindex:"-1"}),y(t,Fe))}))}function bi(t){return t.nodeName.toLowerCase()}function wi(t){return"button"===bi(t)}function Ci(t){return"true"===t.getAttribute("aria-disabled")}function Mi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ti(){if(Wt&&!It&&!Pt){var t=Xe?Ue.disabled:Ci(Ue),e=Ye?_e.disabled:Ci(_e),n=le<=ve,i=!It&&le>=pe;n&&!t&&Mi(Xe,Ue,!0),!n&&t&&Mi(Xe,Ue,!1),i&&!e&&Mi(Ye,_e,!0),!i&&e&&Mi(Ye,_e,!1)}}function Ei(t,e){j&&(t.style[j]=e)}function Ai(t){return null==t&&(t=le),Et?(Bt-(Nt?Lt:0)-(xt[t+1]-xt[t]-Lt))/2:At?(Bt-At)/2:(Ht-1)/2}function Ni(){var t=Bt+(Nt?Lt:0)-(At?(At+Lt)*te:xt[te]);return St&&!Pt&&(t=At?-(At+Lt)*(te-1)-Ai():Ai(te-1)-xt[te-1]),t>0&&(t=0),t}function Li(t){var e;if(null==t&&(t=le),st&&!Et)if(At)e=-(At+Lt)*t,St&&(e+=Ai());else{var n=q?te:Ht;St&&(t-=Ai()),e=100*-t/n}else e=-xt[t],St&&Et&&(e+=Ai());return ee&&(e=Math.max(e,ne)),e+=!st||Et||At?"px":"%"}function Bi(t){Ei(dt,"0s"),Si(t)}function Si(t){null==t&&(t=Li()),dt.style[ae]=re+t+oe}function Hi(t,e,n,i){var a=t+Ht;Pt||(a=Math.min(a,te));for(var r=t;r<a;r++){var o=ht[r];i||(o.style.left=100*(r-le)/Ht+"%"),rt&&V&&(o.style[V]=o.style[Q]=rt*(r-t)/1e3+"s"),y(o,e),m(o,n),i&&Zt.push(o)}}function Oi(t,e){ie&&Nn(),(le!==se||e)&&(be.emit("indexChanged",na()),be.emit("transitionStart",na()),zt&&vi(),vn&&t&&["click","keydown"].indexOf(t.type)>=0&&Fi(),ge=!0,Ln())}function Di(t){return t.toLowerCase().replace(/-/g,"")}function ki(t){if($||ge){if(be.emit("transitionEnd",na(t)),!$&&Zt.length>0)for(var e=0;e<Zt.length;e++){var n=Zt[e];n.style.left="",Q&&V&&(n.style[Q]="",n.style[V]=""),y(n,at),m(n,ot)}if(!t||!$&&t.target.parentNode===dt||t.target===dt&&Di(t.propertyName)===Di(ae)){if(!ie){var i=le;Nn(),le!==i&&(be.emit("indexChanged",na()),Bi())}"inner"===Z&&be.emit("innerLoaded",na()),ge=!1,se=le}}}function Ri(t,e){if(!Ae)if("prev"===t)Ii(e,-1);else if("next"===t)Ii(e,1);else{if(ge){if(he)return;ki()}var n=On(),i=0;if("first"===t?i=-n:"last"===t?i=$?mt-Ht-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!$&&i&&Math.abs(i)<Ht){var a=i>0?1:-1;i+=le+i-mt>=ve?mt*a:2*mt*a*-1}le+=i,$&&Pt&&(le<ve&&(le+=mt),le>pe&&(le-=mt)),On(le)!==On(se)&&Oi(e)}}function Ii(t,e){if(ge){if(he)return;ki()}var n;if(!e){for(var i=Qi(t=Gi(t));i!==Ke&&[Ue,_e].indexOf(i)<0;)i=i.parentNode;var a=[Ue,_e].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(It){if(le===ve&&-1===e)return void Ri("last",t);if(le===pe&&1===e)return void Ri("first",t)}e&&(le+=Ot*e,Et&&(le=Math.floor(le)),Oi(n||t&&"keydown"===t.type?t:null))}function Pi(){dn=setInterval((function(){Ii(null,yn)}),Qt),vn=!0}function zi(){clearInterval(dn),vn=!1}function Wi(t,e){w(gn,{"data-action":t}),gn.innerHTML=bn[0]+t+bn[1]+e}function qi(){Pi(),gn&&Wi("stop",Xt[1])}function Fi(){zi(),gn&&Wi("start",Xt[0])}function ji(){vn?(Fi(),hn=!0):(qi(),hn=!1)}function Vi(t){t.focus()}function Gi(t){return Xi(t=t||l.event)?t.changedTouches[0]:t}function Qi(t){return t.target||l.event.srcElement}function Xi(t){return t.type.indexOf("touch")>=0}function Yi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ki(){return r=Tn.y-Mn.y,o=Tn.x-Mn.x,e=Math.atan2(r,o)*(180/Math.PI),n=me,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Ji(t){if(ge){if(he)return;ki()}Gt&&vn&&zi(),En=!0,Cn&&(i(Cn),Cn=null);var e=Gi(t);be.emit(Xi(t)?"touchStart":"dragStart",na(t)),!Xi(t)&&["img","a"].indexOf(bi(Qi(t)))>=0&&Yi(t),Tn.x=Mn.x=e.clientX,Tn.y=Mn.y=e.clientY,$&&(wn=parseFloat(dt.style[ae].replace(re,"")),Ei(dt,"0s"))}function Ui(t){if(En){var n=Gi(t);Tn.x=n.clientX,Tn.y=n.clientY,$?Cn||(Cn=e((function(){_i(t)}))):("?"===ye&&(ye=Ki()),ye&&(Qe=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Qe&&t.preventDefault()}}function _i(t){if(ye){if(i(Cn),En&&(Cn=e((function(){_i(t)}))),"?"===ye&&(ye=Ki()),ye){!Qe&&Xi(t)&&(Qe=!0);try{t.type&&be.emit(Xi(t)?"touchMove":"dragMove",na(t))}catch(r){}var n=wn,a=An(Tn,Mn);if(!st||At||Et)n+=a,n+="px";else n+=q?a*Ht*100/((Bt+Lt)*te):100*a/(Bt+Lt),n+="%";dt.style[ae]=re+n+oe}}else En=!1}function Zi(n){if(En){Cn&&(i(Cn),Cn=null),$&&Ei(dt,""),En=!1;var a=Gi(n);Tn.x=a.clientX,Tn.y=a.clientY;var r=An(Tn,Mn);if(Math.abs(r)){if(!Xi(n)){var o=Qi(n);O(o,{click:function t(e){Yi(e),D(o,{click:t})}})}$?Cn=e((function(){if(st&&!Et){var t=-r*Ht/(Bt+Lt);t=r>0?Math.floor(t):Math.ceil(t),le+=t}else{var e=-(wn+r);if(e<=0)le=ve;else if(e>=xt[te-1])le=pe;else for(var i=0;i<te&&e>=xt[i];)le=i,e>xt[i]&&r<0&&(le+=1),i++}Oi(n,r),be.emit(Xi(n)?"touchEnd":"dragEnd",na(n))})):ye&&Ii(n,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Qe=!1),me&&(ye="?"),Gt&&!vn&&Pi()}function $i(){(ut||ft).style.height=xt[le+Ht]-xt[le]+"px"}function ta(){var t=At?(At+Lt)*mt/Bt:mt/Ht;return Math.min(Math.ceil(t),mt)}function ea(){if(Ft&&!Pe&&an!==rn){var t=rn,e=an,n=E;for(rn>an&&(t=an,e=rn,n=T);t<e;)n(tn[t]),t++;rn=an}}function na(t){return{container:dt,slideItems:ht,navContainer:en,navItems:tn,controlsContainer:Ke,hasControls:Re,prevButton:Ue,nextButton:_e,items:Ht,slideBy:Ot,cloneCount:$t,slideCount:mt,slideCountNew:te,index:le,indexCached:se,displayIndex:Sn(),navCurrentIndex:un,navCurrentIndexCached:ln,pages:an,pagesCached:rn,sheet:Jt,isOn:gt,event:t||{}}}K&&console.warn("No slides found in",t.container)};export{R as t};

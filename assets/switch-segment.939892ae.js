import{u as s,_ as n}from"./useMarkdownToc.23b5c9ee.js";import{_ as a}from"./DocumentationItem.5fdb980a.js";import{o as t,a as p,w as r,e,i,b as l,k as m,A as o,u as c,B as u,d as k,f as d,I as b,g}from"./index.2716c42f.js";import{_ as f}from"./VField.vue_vue_type_script_setup_true_lang.6ad5b232.js";import{_ as h}from"./VControl.247869de.js";import{_ as v}from"./VSwitchSegment.vue_vue_type_style_index_0_lang.80011685.js";import{_}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.5e063e2e.js";import{u as V}from"./viewWrapper.8812127e.js";import"./vue-scrollto.5e70d576.js";import"./VIcon.vue_vue_type_script_setup_true_lang.2873aec7.js";import"./VLabel.vue_vue_type_script_setup_true_lang.65268a0d.js";import"./VInput.vue_vue_type_script_setup_true_lang.f2bc1281.js";const w=e("h3",{id:"vswitchsegment-events",tabindex:"-1"},"VSwitchSegment Events",-1),S=e("p",null,[i("Here is the full events available for "),e("code",null,"<VSwitchSegment />"),i(" component:")],-1),y=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Event"),e("th",null,"Callback"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"@update:modelValue"),e("td",null,[e("span",{class:"is-function"},[e("code",null,"(value: boolean) => void")])]),e("td",null,[i("Raised when the switch value changed"),e("br"),i("Use "),e("code",null,"v-model"),i(" directive to bind values")])])])],-1);const C={disable_code:!0,slimscroll:!0},j={render:function(s,n){const e=a;return t(),p(e,{frontmatter:s.frontmatter},{default:r((()=>[w,S,y])),_:1},8,["frontmatter"])},data:()=>({frontmatter:C})},x=e("h3",{id:"vswitchsegment-props",tabindex:"-1"},"VSwitchSegment Props",-1),F=e("p",null,[i("Here is the full props available for "),e("code",null,"<VSwitchSegment />"),i(" component:")],-1),q=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Default"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"labelTrue"),e("td",null,[e("span",{class:"is-undefined"},[e("code",null,"undefined")])]),e("td",null,"string")]),e("tr",null,[e("td",null,"labelFalse"),e("td",null,[e("span",{class:"is-undefined"},[e("code",null,"undefined")])]),e("td",null,"string")]),e("tr",null,[e("td",null,"modelValue"),e("td",null,[e("span",{class:"is-boolean"},[e("code",null,"false")])]),e("td",null,"boolean")]),e("tr",null,[e("td",null,"color"),e("td",null,[e("span",{class:"is-undefined"},[e("code",null,"undefined")])]),e("td",null,[e("code",null,"primary"),i(", "),e("code",null,"info"),i(", "),e("code",null,"success"),i(", "),e("code",null,"warning"),i(", "),e("code",null,"danger")])])])],-1);const I={disable_code:!0,slimscroll:!0},T={render:function(s,n){const e=a;return t(),p(e,{frontmatter:s.frontmatter},{default:r((()=>[x,F,q])),_:1},8,["frontmatter"])},data:()=>({frontmatter:I})},E=e("h3",{id:"label",tabindex:"-1"},"Label",-1),O=e("p",null,[i("You might have to add a label to your switches in some cases. If so, use the "),e("code",null,"VSwitchSegment"),i(" component, which provides "),e("code",null,"labelTrue"),i(" and "),e("code",null,"labelFalse"),i(" attributes. See the code example for more details about usage.")],-1),P=e("div",{class:"language-vue line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("script")]),i(),e("span",{class:"prism--token prism--attr-name"},"setup"),i(),e("span",{class:"prism--token prism--attr-name"},"lang"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("ts"),e("span",{class:"prism--token prism--punctuation"},'"')]),e("span",{class:"prism--token prism--punctuation"},">")]),e("span",{class:"prism--token prism--script"},[e("span",{class:"prism--token prism--language-javascript"},[i("\n"),e("span",{class:"prism--token prism--keyword"},"import"),i(),e("span",{class:"prism--token prism--punctuation"},"{"),i(" ref "),e("span",{class:"prism--token prism--punctuation"},"}"),i(),e("span",{class:"prism--token prism--keyword"},"from"),i(),e("span",{class:"prism--token prism--string"},"'vue'"),i("\n\n"),e("span",{class:"prism--token prism--keyword"},"const"),i(" value "),e("span",{class:"prism--token prism--operator"},"="),i(),e("span",{class:"prism--token prism--function"},"ref"),e("span",{class:"prism--token prism--punctuation"},"("),e("span",{class:"prism--token prism--boolean"},"true"),e("span",{class:"prism--token prism--punctuation"},")"),i("\n")])]),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("script")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n\n"),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("template")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n  "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VField")]),i(),e("span",{class:"prism--token prism--attr-name"},"grouped"),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VControl")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n      "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VSwitchSegment")]),i(),e("span",{class:"prism--token prism--attr-name"},"v-model"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("value"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--attr-name"},"label-true"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("ON"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--attr-name"},"label-false"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("OFF"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--attr-name"},"color"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("primary"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--punctuation"},"/>")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VControl")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n  "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VField")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n"),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("template")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br")])],-1);const $={state:{value:!0}},D={render:function(s,n){const e=v,i=h,o=f,c=a;return t(),p(c,{frontmatter:s.frontmatter},{code:r((()=>[l(s.$slots,"code",{},(()=>[P]))])),example:r((()=>[l(s.$slots,"example",{},(()=>[m(o,{grouped:""},{default:r((()=>[m(i,null,{default:r((()=>[m(e,{modelValue:s.frontmatter.state.value,"onUpdate:modelValue":n[0]||(n[0]=n=>s.frontmatter.state.value=n),"label-true":"ON","label-false":"OFF",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})]))])),default:r((()=>[E,O])),_:3},8,["frontmatter"])},data:()=>({frontmatter:$})},L=e("h3",{id:"vswitchsegment",tabindex:"-1"},"VSwitchSegment",-1),A=e("p",null,[i("Vuero provides nicely styled switch segment when you need to display such control in your forms. Vuero "),e("code",null,"VSwitchSegment"),i(" component have several color modififers. Available modifiers are "),e("code",null,"primary"),i(", "),e("code",null,"success"),i(", "),e("code",null,"info"),i(", "),e("code",null,"warning"),i(" and "),e("code",null,"danger"),i(". Please refer to the markup for more details about usage.")],-1),B=e("div",{class:"language-vue line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("template")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n  "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VField")]),i(),e("span",{class:"prism--token prism--attr-name"},"grouped"),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VControl")]),i(),e("span",{class:"prism--token prism--attr-name"},"subcontrol"),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n      "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VSwitchSegment")]),i(),e("span",{class:"prism--token prism--punctuation"},"/>")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VControl")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VControl")]),i(),e("span",{class:"prism--token prism--attr-name"},"subcontrol"),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n      "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VSwitchSegment")]),i(),e("span",{class:"prism--token prism--attr-name"},"color"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("primary"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--attr-name"},"checked"),i(),e("span",{class:"prism--token prism--punctuation"},"/>")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VControl")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VControl")]),i(),e("span",{class:"prism--token prism--attr-name"},"subcontrol"),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n      "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VSwitchSegment")]),i(),e("span",{class:"prism--token prism--attr-name"},"color"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("success"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--attr-name"},"checked"),i(),e("span",{class:"prism--token prism--punctuation"},"/>")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VControl")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VControl")]),i(),e("span",{class:"prism--token prism--attr-name"},"subcontrol"),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n      "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VSwitchSegment")]),i(),e("span",{class:"prism--token prism--attr-name"},"color"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("info"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--attr-name"},"checked"),i(),e("span",{class:"prism--token prism--punctuation"},"/>")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VControl")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VControl")]),i(),e("span",{class:"prism--token prism--attr-name"},"subcontrol"),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n      "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VSwitchSegment")]),i(),e("span",{class:"prism--token prism--attr-name"},"color"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("warning"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--attr-name"},"checked"),i(),e("span",{class:"prism--token prism--punctuation"},"/>")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VControl")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VControl")]),i(),e("span",{class:"prism--token prism--attr-name"},"subcontrol"),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n      "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"<"),i("VSwitchSegment")]),i(),e("span",{class:"prism--token prism--attr-name"},"color"),e("span",{class:"prism--token prism--attr-value"},[e("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),e("span",{class:"prism--token prism--punctuation"},'"'),i("danger"),e("span",{class:"prism--token prism--punctuation"},'"')]),i(),e("span",{class:"prism--token prism--attr-name"},"checked"),i(),e("span",{class:"prism--token prism--punctuation"},"/>")]),i("\n    "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VControl")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n  "),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("VField")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n"),e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--tag"},[e("span",{class:"prism--token prism--punctuation"},"</"),i("template")]),e("span",{class:"prism--token prism--punctuation"},">")]),i("\n")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br")])],-1);const H={},N={render:function(s,n){const e=v,i=h,o=f,c=a;return t(),p(c,{frontmatter:s.frontmatter},{code:r((()=>[l(s.$slots,"code",{},(()=>[B]))])),example:r((()=>[l(s.$slots,"example",{},(()=>[m(o,{grouped:""},{default:r((()=>[m(i,{subcontrol:""},{default:r((()=>[m(e)])),_:1}),m(i,{subcontrol:""},{default:r((()=>[m(e,{color:"primary",checked:""})])),_:1}),m(i,{subcontrol:""},{default:r((()=>[m(e,{color:"success",checked:""})])),_:1}),m(i,{subcontrol:""},{default:r((()=>[m(e,{color:"info",checked:""})])),_:1}),m(i,{subcontrol:""},{default:r((()=>[m(e,{color:"warning",checked:""})])),_:1}),m(i,{subcontrol:""},{default:r((()=>[m(e,{color:"danger",checked:""})])),_:1})])),_:1})]))])),default:r((()=>[L,A])),_:3},8,["frontmatter"])},data:()=>({frontmatter:H})},U={class:"page-content-inner"},M={class:"columns"},R={key:0,class:"column is-3 toc-column"},W=o({__name:"switch-segment",setup(a){const p=c(),r=s(p);return V().setPageTitle("VSwitchSegment"),u({title:"VSwitchSegment - Switches Elements - Vuero"}),(s,a)=>{const i=_,l=N,o=D,c=T,u=j,f=n;return t(),k("div",U,[m(i,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"/"}},{label:"Elements",to:{name:"/elements/"}},{label:"Switches"},{label:"VSwitchSegment",to:{name:"/elements/switch-segment"}}]}),e("div",M,[e("div",{ref_key:"markdownContainer",ref:p,class:d([[b(r).length>0?"is-9":"is-12"],"column doc-column"])},[m(l),m(o),m(c),m(u)],2),b(r).length?(t(),k("div",R,[m(f,{toc:b(r)},null,8,["toc"])])):g("",!0)])])}}});export{W as default};

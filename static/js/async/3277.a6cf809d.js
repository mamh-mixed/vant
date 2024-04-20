/*! For license information please see 3277.a6cf809d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3277"],{3353:function(e,t,r){"use strict";r.r(t);var l=r("39393");r("77109");let n=l.Z;t.default=n},39393:function(e,t,r){"use strict";var l=r("80681"),n=r("11848"),a=r("73881"),o=r("95388"),u=r("54369");t.Z=(0,l.aZ)({__name:"index",setup(e){var t=(0,u.q)({"zh-CN":{info:"\u5BC6\u7801\u4E3A 6 \u4F4D\u6570\u5B57",showInfo:"\u63D0\u793A\u4FE1\u606F",addGutter:"\u683C\u5B50\u95F4\u8DDD",errorInfo:"\u5BC6\u7801\u9519\u8BEF",removeMask:"\u660E\u6587\u5C55\u793A",customLength:"\u81EA\u5B9A\u4E49\u957F\u5EA6"},"en-US":{info:"Some tips",showInfo:"Show Info",addGutter:"Add Gutter",errorInfo:"Password Mistake",removeMask:"Remove Mask",customLength:"Custom Length"}}),r=(0,n.iH)({showInfo:"123",addGutter:"123",basicUsage:"123",removeMask:"123",customLength:"123"}),i=(0,n.iH)("basicUsage"),s=(0,n.iH)(""),c=(0,n.iH)(),v=(0,n.iH)(),f=(0,n.iH)(),d=(0,n.iH)(),m=(0,n.iH)(),h={showInfo:c,addGutter:v,basicUsage:f,removeMask:d,customLength:m},p=e=>{if(i.value){var l="customLength"===i.value?4:6,n=(r.value[i.value]+e).slice(0,l);r.value[i.value]=n,"showInfo"===i.value&&6===n.length&&"123456"!==n&&(s.value=t("errorInfo"))}},g=()=>{i.value&&(r.value[i.value]=r.value[i.value].slice(0,r.value[i.value].length-1),"showInfo"===i.value&&(s.value=""))};return(0,l.YP)(i,e=>{if(e){var t=h[e].value;if(t){var{top:r}=t.$el.getBoundingClientRect();window.scrollTo(0,window.pageYOffset+r)}}}),(e,u)=>{var h=(0,l.up)("demo-block");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(h,{ref_key:"basicUsage",ref:f,title:(0,n.SU)(t)("basicUsage")},{default:(0,l.w5)(()=>[(0,l.Wm)((0,n.SU)(a.ZP),{value:r.value.basicUsage,focused:"basicUsage"===i.value,onFocus:u[0]||(u[0]=e=>i.value="basicUsage")},null,8,["value","focused"])]),_:1},8,["title"]),(0,l.Wm)(h,{ref_key:"customLength",ref:m,title:(0,n.SU)(t)("customLength")},{default:(0,l.w5)(()=>[(0,l.Wm)((0,n.SU)(a.ZP),{value:r.value.customLength,length:4,focused:"customLength"===i.value,onFocus:u[1]||(u[1]=e=>i.value="customLength")},null,8,["value","focused"])]),_:1},8,["title"]),(0,l.Wm)(h,{ref_key:"addGutter",ref:v,title:(0,n.SU)(t)("addGutter")},{default:(0,l.w5)(()=>[(0,l.Wm)((0,n.SU)(a.ZP),{value:r.value.addGutter,gutter:10,focused:"addGutter"===i.value,onFocus:u[2]||(u[2]=e=>i.value="addGutter")},null,8,["value","focused"])]),_:1},8,["title"]),(0,l.Wm)(h,{ref_key:"removeMask",ref:d,title:(0,n.SU)(t)("removeMask")},{default:(0,l.w5)(()=>[(0,l.Wm)((0,n.SU)(a.ZP),{mask:!1,value:r.value.removeMask,focused:"removeMask"===i.value,onFocus:u[3]||(u[3]=e=>i.value="removeMask")},null,8,["value","focused"])]),_:1},8,["title"]),(0,l.Wm)(h,{ref_key:"showInfo",ref:c,title:(0,n.SU)(t)("showInfo")},{default:(0,l.w5)(()=>[(0,l.Wm)((0,n.SU)(a.ZP),{info:(0,n.SU)(t)("info"),value:r.value.showInfo,"error-info":s.value,focused:"showInfo"===i.value,onFocus:u[4]||(u[4]=e=>i.value="showInfo")},null,8,["info","value","error-info","focused"])]),_:1},8,["title"]),(0,l.Wm)((0,n.SU)(o.ZP),{show:!!i.value,onBlur:u[5]||(u[5]=e=>i.value=null),onInput:p,onDelete:g},null,8,["show"])],64)}}})},29609:function(e,t,r){"use strict";r.d(t,{o:function(){return a}});var l=r("11848"),n=r("8051");function a(){var e=(0,l.iH)(0),t=(0,l.iH)(0),r=(0,l.iH)(0),a=(0,l.iH)(0),o=(0,l.iH)(0),u=(0,l.iH)(0),i=(0,l.iH)(""),s=(0,l.iH)(!0),c=()=>{r.value=0,a.value=0,o.value=0,u.value=0,i.value="",s.value=!0};return{move:l=>{var c,v,f=l.touches[0];r.value=(f.clientX<0?0:f.clientX)-e.value,a.value=f.clientY-t.value,o.value=Math.abs(r.value),u.value=Math.abs(a.value);if(!i.value||o.value<10&&u.value<10){;i.value=(c=o.value,c>(v=u.value)?"horizontal":v>c?"vertical":"")}s.value&&(o.value>n.mH||u.value>n.mH)&&(s.value=!1)},start:r=>{c(),e.value=r.touches[0].clientX,t.value=r.touches[0].clientY},reset:c,startX:e,startY:t,deltaX:r,deltaY:a,offsetX:o,offsetY:u,direction:i,isVertical:()=>"vertical"===i.value,isHorizontal:()=>"horizontal"===i.value,isTap:s}}},95786:function(e,t,r){"use strict";r.d(t,{gb:function(){return a}});var l=r("63112"),n=r("2309"),a=(0,l.n)(n.Z);t.ZP=a},95388:function(e,t,r){"use strict";var l=r("63112"),n=r("44799"),a=(0,l.n)(n.Z);t.ZP=a},73881:function(e,t,r){"use strict";var l=r("63112"),n=r("68425"),a=(0,l.n)(n.Z);t.ZP=a},8051:function(e,t,r){"use strict";r.d(t,{Cp:function(){return d},T5:function(){return l},WN:function(){return f},_K:function(){return i},a8:function(){return a},dt:function(){return o},e9:function(){return v},k7:function(){return n},mH:function(){return m},pj:function(){return c},r5:function(){return s},xe:function(){return u}}),r("86795");var l="van-hairline",n="".concat(l,"--top"),a="".concat(l,"--left"),o="".concat(l,"--right"),u="".concat(l,"--bottom"),i="".concat(l,"--surround"),s="".concat(l,"--top-bottom"),c="".concat(l,"-unset--top-bottom"),v="van-haptics-feedback",f=Symbol("van-form"),d=500,m=5},78335:function(e,t,r){"use strict";r.d(t,{Ce:function(){return u},J5:function(){return a},Or:function(){return n},SI:function(){return s},SQ:function(){return c},Vg:function(){return l},ir:function(){return o},qM:function(){return i}});var l=null,n=[Number,String],a={type:Boolean,default:!0},o=e=>({type:e,required:!0}),u=()=>({type:Array,default:()=>[]}),i=e=>({type:Number,default:e}),s=e=>({type:n,default:e}),c=e=>({type:String,default:e})},63112:function(e,t,r){"use strict";r.d(t,{n:function(){return n}});var l=r("20358");function n(e){return e.install=t=>{var{name:r}=e;r&&(t.component(r,e),t.component((0,l._A)("-".concat(r)),e))},e}},2309:function(e,t,r){"use strict";r("82116"),r("17989"),r("66786"),r("14529");var l=r("80681"),n=r("62568"),a=r("78335"),o=r("12308"),u=r("20358"),[i,s]=(0,n.do)("loading"),c=Array(12).fill(null).map((e,t)=>(0,l.Wm)("i",{class:s("line",String(t+1))},null)),v=(0,l.Wm)("svg",{class:s("circular"),viewBox:"25 25 50 50"},[(0,l.Wm)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),f={size:a.Or,type:(0,a.SQ)("circular"),color:String,vertical:Boolean,textSize:a.Or,textColor:String};t.Z=(0,l.aZ)({name:i,props:f,setup(e,t){var{slots:r}=t,n=(0,l.Fl)(()=>(0,o.l7)({color:e.color},(0,u.Xn)(e.size))),a=()=>{var t="spinner"===e.type?c:v;return(0,l.Wm)("span",{class:s("spinner",e.type),style:n.value},[r.icon?r.icon():t])},i=()=>{if(r.default){var t;return(0,l.Wm)("span",{class:s("text"),style:{fontSize:(0,u.Nn)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[r.default()])}};return()=>{var{type:t,vertical:r}=e;return(0,l.Wm)("div",{class:s([t,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[a(),i()])}}})},44799:function(e,t,r){"use strict";r("82116"),r("17989"),r("66786"),r("14529"),r("61557");var l=r("80681"),n=r("39594"),a=r("11848"),o=r("62568"),u=r("78335"),i=r("8051"),s=r("20358"),c=r("82210"),v=r("22300"),f=r("81956"),[d,m]=(0,o.do)("number-keyboard"),h={show:Boolean,title:String,theme:(0,u.SQ)("default"),zIndex:u.Or,teleport:[String,Object],maxlength:(0,u.SI)(1/0),modelValue:(0,u.SQ)(""),transition:u.J5,blurOnClose:u.J5,showDeleteKey:u.J5,randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:u.J5,safeAreaInsetBottom:u.J5,extraKey:{type:[String,Array],default:""}};t.Z=(0,l.aZ)({name:d,inheritAttrs:!1,props:h,emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,t){var{emit:r,slots:o,attrs:u}=t,d=(0,a.iH)(),h=()=>{var t=Array(9).fill("").map((e,t)=>({text:t+1}));return e.randomKeyOrder&&!function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),l=e[t];e[t]=e[r],e[r]=l};}(t),t},p=()=>[...h(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],g=()=>{var t=h(),{extraKey:r}=e,l=Array.isArray(r)?r:[r];return 1===l.length?t.push({text:0,wider:!0},{text:l[0],type:"extra"}):2===l.length&&t.push({text:l[0],type:"extra"},{text:0},{text:l[1],type:"extra"}),t},y=(0,l.Fl)(()=>"custom"===e.theme?g():p()),w=()=>{e.show&&r("blur")},x=()=>{r("close"),e.blurOnClose&&w()},W=()=>r(e.show?"show":"hide"),S=(t,l)=>{if(""===t){"extra"===l&&w();return}var n=e.modelValue;"delete"===l?(r("delete"),r("update:modelValue",n.slice(0,n.length-1))):"close"===l?x():n.length<+e.maxlength&&(r("input",t),r("update:modelValue",n+t))},b=()=>{var{title:t,theme:r,closeButtonText:n}=e,a=o["title-left"],u=n&&"default"===r;if(t||u||a)return(0,l.Wm)("div",{class:m("header")},[a&&(0,l.Wm)("span",{class:m("title-left")},[a()]),t&&(0,l.Wm)("h2",{class:m("title")},[t]),u&&(0,l.Wm)("button",{type:"button",class:[m("close"),i.e9],onClick:x},[n])])},H=()=>y.value.map(e=>{var t={};return"delete"===e.type&&(t.default=o.delete),"extra"===e.type&&(t.default=o["extra-key"]),(0,l.Wm)(f.Z,{key:e.text,text:e.text,type:e.type,wider:e.wider,color:e.color,onPress:S},t)}),k=()=>{if("custom"===e.theme)return(0,l.Wm)("div",{class:m("sidebar")},[e.showDeleteKey&&(0,l.Wm)(f.Z,{large:!0,text:e.deleteButtonText,type:"delete",onPress:S},{default:o.delete}),(0,l.Wm)(f.Z,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:S},null)])};return(0,l.YP)(()=>e.show,t=>{!e.transition&&r(t?"show":"hide")}),e.hideOnClickOutside&&(0,v.Vd)(d,w,{eventName:"touchstart"}),()=>{var t,r=b(),a=(0,l.Wm)(n.uT,{name:e.transition?"van-slide-up":""},{default:()=>[(0,l.wy)((0,l.Wm)("div",(0,l.dG)({ref:d,style:(0,s.As)(e.zIndex),class:m({unfit:!e.safeAreaInsetBottom,"with-title":!!r}),onAnimationend:W,onTouchstartPassive:c.UW},u),[r,(0,l.Wm)("div",{class:m("body")},[(0,l.Wm)("div",{class:m("keys")},[H()]),k()])]),[[n.F8,e.show]])]});if(e.teleport){;return(0,l.Wm)(l.lR,{to:e.teleport},"function"!=typeof(t=a)&&("[object Object]"!==Object.prototype.toString.call(t)||(0,l.lA)(t))?{default:()=>[a]}:a)}return a}}})},81956:function(e,t,r){"use strict";r("82116"),r("17989");var l=r("80681"),n=r("11848"),a=r("62568"),o=r("78335"),u=r("82210"),i=r("29609"),s=r("95786"),[c,v]=(0,a.do)("key"),f=(0,l.Wm)("svg",{class:v("collapse-icon"),viewBox:"0 0 30 24"},[(0,l.Wm)("path",{d:"M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",fill:"currentColor"},null)]),d=(0,l.Wm)("svg",{class:v("delete-icon"),viewBox:"0 0 32 22"},[(0,l.Wm)("path",{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"},null)]);t.Z=(0,l.aZ)({name:c,props:{type:String,text:o.Or,color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,t){var{emit:r,slots:a}=t,o=(0,n.iH)(!1),c=(0,i.o)(),m=e=>{c.start(e),o.value=!0},h=e=>{c.move(e),c.direction.value&&(o.value=!1)},p=t=>{o.value&&(!a.default&&(0,u.PF)(t),o.value=!1,r("press",e.text,e.type))},g=()=>{if(e.loading)return(0,l.Wm)(s.gb,{class:v("loading-icon")},null);var t=a.default?a.default():e.text;switch(e.type){case"delete":return t||d;case"extra":return t||f;default:return t}};return()=>(0,l.Wm)("div",{class:v("wrapper",{wider:e.wider}),onTouchstartPassive:m,onTouchmovePassive:h,onTouchend:p,onTouchcancel:p},[(0,l.Wm)("div",{role:"button",tabindex:0,class:v([e.color,{large:e.large,active:o.value,delete:"delete"===e.type}])},[g()])])}})},68425:function(e,t,r){"use strict";r("82116"),r("17989"),r("61557");var l=r("80681"),n=r("62568"),a=r("78335"),o=r("20358"),u=r("8051"),[i,s]=(0,n.do)("password-input"),c={info:String,mask:a.J5,value:(0,a.SQ)(""),gutter:a.Or,length:(0,a.SI)(6),focused:Boolean,errorInfo:String};t.Z=(0,l.aZ)({name:i,props:c,emits:["focus"],setup(e,t){var{emit:r}=t,n=e=>{e.stopPropagation(),r("focus",e)},a=()=>{for(var t=[],{mask:r,value:n,gutter:a,focused:i}=e,c=+e.length,v=0;v<c;v++){var f=n[v],d=0!==v&&!a,m=i&&v===n.length,h=void 0;0!==v&&a&&(h={marginLeft:(0,o.Nn)(a)}),t.push((0,l.Wm)("li",{class:[{[u.a8]:d},s("item",{focus:m})],style:h},[r?(0,l.Wm)("i",{style:{visibility:f?"visible":"hidden"}},null):f,m&&(0,l.Wm)("div",{class:s("cursor")},null)]))}return t};return()=>{var t=e.errorInfo||e.info;return(0,l.Wm)("div",{class:s()},[(0,l.Wm)("ul",{class:[s("security"),{[u._K]:!e.gutter}],onTouchstartPassive:n},[a()]),t&&(0,l.Wm)("div",{class:s(e.errorInfo?"error-info":"info")},[t])])}}})},77109:function(e,t,r){"use strict";r.r(e.exports={})},29385:function(e,t,r){"use strict";r.r(e.exports={})}}]);
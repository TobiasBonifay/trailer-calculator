(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6755:function(e,r,s){Promise.resolve().then(s.bind(s,8553))},8553:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return u}});var a=s(3827),t=s(4090);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return r.filter((e,r,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===r).join(" ").trim()};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,t.forwardRef)((e,r)=>{let{color:s="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:n,className:o="",children:d,iconNode:g,...u}=e;return(0,t.createElement)("svg",{ref:r,...c,width:a,height:a,stroke:s,strokeWidth:n?24*Number(l)/Number(a):l,className:i("lucide",o),...u},[...g.map(e=>{let[r,s]=e;return(0,t.createElement)(r,s)}),...Array.isArray(d)?d:[d]])}),o=((e,r)=>{let s=(0,t.forwardRef)((s,a)=>{let{className:c,...o}=s;return(0,t.createElement)(n,{ref:a,iconNode:r,className:i("lucide-".concat(l(e)),c),...o})});return s.displayName="".concat(e),s})("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);function d(e){let{children:r,className:s=""}=e;return(0,a.jsx)("div",{className:"bg-blue-50 border-l-4 border-blue-400 p-4 ".concat(s),children:r})}function g(e){let{children:r}=e;return(0,a.jsx)("div",{className:"text-sm text-blue-700",children:r})}var u=()=>{let[e,r]=(0,t.useState)({curb:"",gvwr:"",gcwr:"",cargo:"",passengers:""}),[s,l]=(0,t.useState)({curb:"",gvwr:"",cargo:"",horses:""}),[i,c]=(0,t.useState)({requiredLicense:"",vehiclePayload:0,trailerPayload:0,conditions:[]}),n=()=>{let r=Object.fromEntries(Object.entries(e).map(e=>{let[r,s]=e;return[r,Number(s)||0]})),a=Object.fromEntries(Object.entries(s).map(e=>{let[r,s]=e;return[r,Number(s)||0]})),t=r.curb+r.cargo+r.passengers,l=a.curb+a.cargo+a.horses,i=t+l,n="";if(a.gvwr<=750)n="B License";else if(a.gvwr<=3500){let e=a.gvwr+r.gvwr;n=e<=3500?"B License":e<=4250?"B96 License":"BE License"}else n="C1E License Required";let o=[{text:"Vehicle actual weight (".concat(t,"kg) must not exceed GVWR (").concat(r.gvwr,"kg)"),passed:t<=r.gvwr},{text:"Trailer actual weight (".concat(l,"kg) must not exceed GVWR (").concat(a.gvwr,"kg)"),passed:l<=a.gvwr},{text:"Combined actual weight (".concat(i,"kg) must not exceed GCWR (").concat(r.gcwr,"kg)"),passed:i<=r.gcwr},{text:"Trailer actual weight (".concat(l,"kg) must not exceed 1.3\xd7 vehicle weight (").concat(1.3*t,"kg)"),passed:l<=1.3*t}];c({requiredLicense:n,vehiclePayload:r.gvwr-r.curb,trailerPayload:a.gvwr-a.curb,conditions:o})};(0,t.useEffect)(()=>{n()},[e,s]);let u=e=>{let{label:r,value:s,onChange:t,tooltip:l}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,a.jsx)("label",{className:"w-48 text-sm",children:r}),(0,a.jsx)("input",{type:"number",value:s,onChange:e=>t(e.target.value),className:"border rounded p-1 w-24",min:"0"}),(0,a.jsx)("span",{className:"text-sm text-gray-600",children:"kg"}),l&&(0,a.jsx)("span",{className:"text-xs text-gray-500 italic ml-2",children:l})]})};return(0,a.jsxs)("div",{className:"max-w-4xl mx-auto p-6",children:[(0,a.jsxs)(d,{className:"mb-6",children:[(0,a.jsx)(o,{className:"h-4 w-4"}),(0,a.jsx)(g,{children:"This calculator is for informational purposes only. Always verify weight requirements with your local authorities."})]}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,a.jsx)("div",{className:"space-y-6",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Towing Vehicle Details"}),(0,a.jsx)(u,{label:"Curb Weight (G1)",value:e.curb,onChange:e=>r(r=>({...r,curb:e})),tooltip:"Empty weight as shown on registration"}),(0,a.jsx)(u,{label:"GVWR (F2)",value:e.gvwr,onChange:e=>r(r=>({...r,gvwr:e})),tooltip:"Gross Vehicle Weight Rating"}),(0,a.jsx)(u,{label:"GCWR (F3)",value:e.gcwr,onChange:e=>r(r=>({...r,gcwr:e})),tooltip:"Gross Combined Weight Rating"}),(0,a.jsx)(u,{label:"Cargo Weight",value:e.cargo,onChange:e=>r(r=>({...r,cargo:e}))}),(0,a.jsx)(u,{label:"Passenger Weight",value:e.passengers,onChange:e=>r(r=>({...r,passengers:e}))})]})}),(0,a.jsx)("div",{className:"space-y-6",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Trailer Details"}),(0,a.jsx)(u,{label:"Curb Weight (G1)",value:s.curb,onChange:e=>l(r=>({...r,curb:e})),tooltip:"Empty trailer weight"}),(0,a.jsx)(u,{label:"GVWR (F2)",value:s.gvwr,onChange:e=>l(r=>({...r,gvwr:e})),tooltip:"Maximum allowed weight"}),(0,a.jsx)(u,{label:"Equipment Weight",value:s.cargo,onChange:e=>l(r=>({...r,cargo:e}))}),(0,a.jsx)(u,{label:"Horse Weight",value:s.horses,onChange:e=>l(r=>({...r,horses:e}))})]})})]}),(0,a.jsxs)("div",{className:"mt-8 p-6 bg-gray-50 rounded-lg",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Results"}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("p",{className:"font-semibold",children:["Required License: ",i.requiredLicense]}),(0,a.jsxs)("p",{className:"text-sm text-gray-600",children:["Vehicle Payload Capacity: ",i.vehiclePayload,"kg",(0,a.jsx)("br",{}),"Trailer Payload Capacity: ",i.trailerPayload,"kg"]})]}),(0,a.jsx)("h3",{className:"font-bold mb-2",children:"Conditions:"}),(0,a.jsx)("div",{className:"space-y-2",children:i.conditions.map((e,r)=>(0,a.jsx)("div",{className:"p-2 rounded ".concat(e.passed?"bg-green-100":"bg-red-100"),children:(0,a.jsxs)("span",{className:e.passed?"text-green-700":"text-red-700",children:[e.passed?"✓":"✗"," ",e.text]})},r))})]})]})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=6755)}),_N_E=e.O()}]);
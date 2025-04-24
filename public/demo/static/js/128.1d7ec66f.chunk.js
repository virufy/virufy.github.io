"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[128],{38542:(e,t,o)=>{o.d(t,{A:()=>f});var r=o(65043),s=o(89842),a=o(47632),n=o(91688),p=o(20555),i=o(30009);const u=i.default.div`
  @media screen and (${e=>e.theme.breakpoints.tablet}){
    margin: auto;

    max-width: 768px;
    width: 100%;
  }
`,c=i.default.div`
  display: flex;
  flex-direction:column;

  height:100%;
`,d=i.default.div`
  height: 100%;
`,l=i.default.div`
  margin-bottom: 16px;
`;var h=o(70579);const m=(0,s.Ay)((e=>{let{container:t}=e;return o(15811)(`./${t}`)}),{fallback:(0,h.jsx)("div",{children:"Loading ..."}),cacheKey:e=>{let{container:t}=e;return t}});const g=e=>{let{steps:t,children:o}=e;const s=(0,n.W5)(),i=(0,n.zy)(),[g,f]=r.useState(!1),x=r.useMemo((()=>{const e=s.url.replace(/\/$/,"");return t.map((t=>e+t.path))}),[s.url,t]);return r.useEffect((()=>{f(!0)}),[]),(0,h.jsx)(p.wU,{children:(0,h.jsxs)(c,{children:[(0,h.jsx)(d,{children:g&&(0,h.jsx)(a.A,{location:i,timing:"ease-in-out",duration:500,pathList:x,children:t.map((e=>(0,h.jsx)(n.qh,{exact:!0,path:Array.isArray(e.path)?e.path.map((e=>s.path+e)):s.path+e.path,render:()=>(0,h.jsx)(u,{children:(0,h.jsx)(m,{container:e.componentPath,...e.props})})},e.componentPath)))})}),(0,h.jsx)(l,{id:"wizard-buttons",children:o})]})})},f=r.memo(g)},82128:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var r=o(65043),s=o(20555),a=o(91688),n=o(38542),p=o(70579);const i="submit-steps";(0,s.y$)({[i]:{recordYourCough:{recordingFile:void 0,uploadedFile:void 0}}},{name:"VirufyWizard",middleWares:[],storageType:window.localStorage});const u="/submit-steps",c="SubmitSteps",d="RecordingsSteps",l="recordYourCough",h=[{path:"/step-record/cough",componentPath:`${c}/${d}/Introduction`,props:{storeKey:i,previousStep:"/welcome/step-3",nextStep:`${u}/step-listen/cough`,otherSteps:{manualUploadStep:`${u}/step-manual-upload/cough`},metadata:{currentLogic:l}}},{path:"/step-manual-upload/cough",componentPath:`${c}/${d}/RecordManualUpload`,props:{storeKey:i,previousStep:`${u}/step-record/cough`,nextStep:`${u}/step-listen/cough`,metadata:{currentLogic:l}}},{path:"/step-listen/cough",componentPath:`${c}/${d}/ListenAudio`,props:{storeKey:i,previousStep:`${u}/step-record/cough`,nextStep:`${u}/prediction-result`,metadata:{currentLogic:l}}},{path:"/prediction-result",componentPath:`${c}/Submission/PredictionResult`,props:{storeKey:i,previousStep:`${u}/step-record/cough`,nextStep:""}}],m=()=>{const{state:e}=(0,s.uZ)(),t=(0,a.W6)();return r.useEffect((()=>{const o=(e=>{let t=null;if(e[i]){const{recordYourCough:o}=e[i],r=[];if(o){const{recordingFile:e,uploadedFile:t}=o;e&&r.push({file:e,route:"/step-record/cough"}),t&&r.push({file:t,route:"/step-manual-upload/cough"})}const s=r.find((e=>{return!(!(t=e.file)||void 0!==t.size);var t}));s&&(t=s.route)}return t})(e);o&&t.push(`/${i}${o}`)}),[]),null},g=()=>(0,p.jsx)(n.A,{steps:h,children:(0,p.jsx)(m,{})}),f=r.memo(g)}}]);
//# sourceMappingURL=128.1d7ec66f.chunk.js.map
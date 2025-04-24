"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[62,824],{35062:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(65043),n=a(20555),o=a(91688),s=a(38542),c=a(30009);const l=c.default.ul`
  display: flex;
  justify-content:center;
  padding: 0;
  margin-bottom: 22px;

 @media screen and (${e=>e.theme.breakpoints.tablet}){
    margin-bottom: 40px;
  }
`,i=c.default.li`
  background-color: ${e=>e.theme.colors.gray};
  border-radius: 50%;
  display: inline-block;

  height: 7px;
  width: 7px;

  &:not(:first-of-type){
    margin-left: 6px;
  };

  &.active {
    background-color: ${e=>e.theme.colors.darkBlack};
  };

`;var p=a(70579);const d=e=>{let{className:t="",current:a,total:n}=e;const o=r.useMemo((()=>{const e=[];for(let t=0;t<n;t+=1)e.push((0,p.jsx)(i,{className:t===a?"active":"",id:`WelcomeStepButton-${t}`},`WelcomeStepButton-${t}`));return e}),[a,n]);return(0,p.jsx)(l,{className:t,children:o})},h=r.memo(d),m="welcome";(0,n.y$)({[m]:{}},{name:"VirufyWizard",middleWares:[],storageType:window.localStorage});const u="/welcome",x=[{path:"/",componentPath:"Welcome/Step2",props:{storeKey:m,previousStep:`${u}`,nextStep:`${u}/step-3`}}],f=[{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:m,previousStep:`${u}/step-2`,nextStep:"/submit-steps/step-record/cough"}}],g=()=>{const e=(0,o.zy)(),t=(0,o.W5)(),a=e.pathname.replace(t.url,""),r=f.findIndex((e=>e.path===a));return(0,p.jsx)(s.A,{steps:[...x,...f],children:r>=0&&(0,p.jsx)(h,{current:r,total:f.length})})},y=r.memo(g)},38542:(e,t,a)=>{a.d(t,{A:()=>f});var r=a(65043),n=a(89842),o=a(47632),s=a(91688),c=a(20555),l=a(30009);const i=l.default.div`
  @media screen and (${e=>e.theme.breakpoints.tablet}){
    margin: auto;

    max-width: 768px;
    width: 100%;
  }
`,p=l.default.div`
  display: flex;
  flex-direction:column;

  height:100%;
`,d=l.default.div`
  height: 100%;
`,h=l.default.div`
  margin-bottom: 16px;
`;var m=a(70579);const u=(0,n.Ay)((e=>{let{container:t}=e;return a(15811)(`./${t}`)}),{fallback:(0,m.jsx)("div",{children:"Loading ..."}),cacheKey:e=>{let{container:t}=e;return t}});const x=e=>{let{steps:t,children:a}=e;const n=(0,s.W5)(),l=(0,s.zy)(),[x,f]=r.useState(!1),g=r.useMemo((()=>{const e=n.url.replace(/\/$/,"");return t.map((t=>e+t.path))}),[n.url,t]);return r.useEffect((()=>{f(!0)}),[]),(0,m.jsx)(c.wU,{children:(0,m.jsxs)(p,{children:[(0,m.jsx)(d,{children:x&&(0,m.jsx)(o.A,{location:l,timing:"ease-in-out",duration:500,pathList:g,children:t.map((e=>(0,m.jsx)(s.qh,{exact:!0,path:Array.isArray(e.path)?e.path.map((e=>n.path+e)):n.path+e.path,render:()=>(0,m.jsx)(i,{children:(0,m.jsx)(u,{container:e.componentPath,...e.props})})},e.componentPath)))})}),(0,m.jsx)(h,{id:"wizard-buttons",children:a})]})})},f=r.memo(x)},85824:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r.default});var r=a(35062)}}]);
//# sourceMappingURL=824.141ac7bd.chunk.js.map
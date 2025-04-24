"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[409,909],{22909:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r.default});var r=o(26409)},26409:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var r=o(65043),n=o(91688),a=o(21853),l=o.n(a),s=o(70521),i=o(7918),d=o(62944),c=o(66986),u=o(68212),f=o(39418),p=o(50281),h=o(70579);const m=["Please use your own device and wear a mask when appropriate.","Disinfect your device and any affected or nearby surfaces after recording your cough/speech.","If you have an underlying condition that increases your risk from coughing, please check with your health care provider before participating.","If you feel your symptoms are getting worse, please contact your local medical response"],b=e=>{const{Portal:t}=l()({bindTo:document&&document.getElementById("wizard-buttons")}),[o,a]=(0,r.useState)(!0),{setDoGoBack:b,setTitle:g,title:x,setType:y,setLogoSize:S,setSubtitle:k}=(0,d.A)(),j=(0,n.W6)(),{t:v}=(0,s.B)(),w=r.useCallback((()=>{e.nextStep&&j.push(e.nextStep)}),[j,e.nextStep]),T=(0,r.useCallback)((()=>{e.previousStep?(a(!1),j.push(e.previousStep)):j.goBack()}),[]);(0,r.useEffect)((()=>{x&&g("")}),[x]),(0,r.useEffect)((()=>{(0,f.e)(),b((()=>T))}),[T,b]),(0,r.useEffect)((()=>{y("shapeDown"),S("regular"),k(v("beforeStart:title"))}),[]);const B=v("beforeStart:advise_list",{returnObjects:!0,defaultValue:m});return(0,h.jsxs)(p.WelcomeStyledFormAlternative,{children:[(0,h.jsx)(p.ShapeDownContainer,{children:(0,h.jsx)(p.WelcomeBorderContainer,{children:(0,h.jsx)(p.WelcomeSubtitle,{fontColor:u.Tj.mineShaft,mb:15,mt:20,textAlign:"left",isBold:!0,children:(0,h.jsx)(i.x,{i18nKey:"beforeStart:subtitle",children:(0,h.jsx)("strong",{children:"To ensure safety, we advise you to:"})})})})}),(0,h.jsxs)(p.WelcomeContent,{mt:10,mb:95,children:[(0,h.jsx)(p.WelcomeItemList,{children:B.map(((e,t)=>(0,h.jsx)(p.WelcomeItemListItem,{children:e},`advise_${t}`)))}),o&&(0,h.jsx)(t,{children:(0,h.jsx)(c.A,{leftLabel:v("beforeStart:startButton"),leftHandler:w,invert:!0})})]})]})},g=r.memo(b)},39418:(e,t,o)=>{o.d(t,{e:()=>r});const r=function(){window.scrollTo({top:0,behavior:"smooth"})}},62944:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(65043),n=o(69479);const a=()=>{const{title:e,setTitle:t,subtitle:o,setSubtitle:a,type:l,setType:s,logoSize:i,setLogoSize:d,setDoGoBack:c,doGoBack:u}=r.useContext(n.B9);return{title:e,setTitle:t,subtitle:o,setSubtitle:a,type:l,setType:s,logoSize:i,setLogoSize:d,doGoBack:u,setDoGoBack:c}}},66986:(e,t,o)=>{o.d(t,{A:()=>i});var r=o(65043),n=o(88016);const a=o(30009).default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${e=>`calc(100% - ${2*e.theme.layout.generalPaddingAmount}px)`};
  margin: 0 auto;

  button {
    flex: 1;

    &:first-of-type {
      margin-left: 0px !important;
    }

    &:last-of-type {
      margin-left: 20px;
    }
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    max-width: 470px;
  }
`;var l=o(70579);const s=r.memo((e=>{let{invert:t=!1,leftLabel:o,leftDisabled:r,leftHandler:s,rightLabel:i,rightDisabled:d,rightHandler:c}=e;return(0,l.jsxs)(a,{children:[(0,l.jsx)(n.A,{dark:t,disabled:r,onClick:s,children:o}),i&&c&&(0,l.jsx)(n.A,{dark:!t,disabled:d,onClick:c,children:i})]})})),i=r.memo(s)},88016:(e,t,o)=>{o.d(t,{A:()=>i});var r=o(65043),n=o(30009),a=o(68212);const l=n.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:o}=e;const r=o?a.Tj.purple_50:a.Tj.purple;return t?`\n    background-color: ${r};\n    color: ${a.Tj.white};\n    border: none;\n  `:`\n    background-color: ${a.Tj.white};\n    color: ${r};\n    border: 1px solid ${r};\n  `}}
`;var s=o(70579);const i=r.memo((e=>{let{children:t,...o}=e;return(0,s.jsx)(l,{type:"button",...o,children:t})}))}}]);
//# sourceMappingURL=909.fa2d4eb6.chunk.js.map
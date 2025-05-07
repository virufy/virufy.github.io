"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[409],{26409:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var r=o(65043),n=o(91688),l=o(21853),s=o.n(l),a=o(70521),i=o(7918),c=o(62944),d=o(66986),u=o(68212),p=o(39418),f=o(50281),h=o(70579);const m=["Please use your own device and wear a mask when appropriate.","Disinfect your device and any affected or nearby surfaces after recording your cough/speech.","If you have an underlying condition that increases your risk from coughing, please check with your health care provider before participating.","If you feel your symptoms are getting worse, please contact your local medical response"],b=e=>{const{Portal:t}=s()({bindTo:document&&document.getElementById("wizard-buttons")}),[o,l]=(0,r.useState)(!0),{setDoGoBack:b,setTitle:g,title:x,setType:y,setLogoSize:S,setSubtitle:k}=(0,c.A)(),j=(0,n.W6)(),{t:w}=(0,a.B)(),v=r.useCallback((()=>{e.nextStep&&j.push(e.nextStep)}),[j,e.nextStep]),T=(0,r.useCallback)((()=>{e.previousStep?(l(!1),j.push(e.previousStep)):j.goBack()}),[]);(0,r.useEffect)((()=>{x&&g("")}),[x]),(0,r.useEffect)((()=>{(0,p.e)(),b((()=>T))}),[T,b]),(0,r.useEffect)((()=>{y("shapeDown"),S("regular"),k(w("beforeStart:title"))}),[]);const B=w("beforeStart:advise_list",{returnObjects:!0,defaultValue:m});return(0,h.jsxs)(f.WelcomeStyledFormAlternative,{children:[(0,h.jsx)(f.ShapeDownContainer,{children:(0,h.jsx)(f.WelcomeBorderContainer,{children:(0,h.jsx)(f.WelcomeSubtitle,{fontColor:u.Tj.mineShaft,mb:15,mt:20,textAlign:"left",isBold:!0,children:(0,h.jsx)(i.x,{i18nKey:"beforeStart:subtitle",children:(0,h.jsx)("strong",{children:"To ensure safety, we advise you to:"})})})})}),(0,h.jsxs)(f.WelcomeContent,{mt:10,mb:95,children:[(0,h.jsx)(f.WelcomeItemList,{children:B.map(((e,t)=>(0,h.jsx)(f.WelcomeItemListItem,{children:e},`advise_${t}`)))}),o&&(0,h.jsx)(t,{children:(0,h.jsx)(d.A,{leftLabel:w("beforeStart:startButton"),leftHandler:v,invert:!0})})]})]})},g=r.memo(b)},39418:(e,t,o)=>{o.d(t,{e:()=>r});const r=function(){window.scrollTo({top:0,behavior:"smooth"})}},62944:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(65043),n=o(69479);const l=()=>{const{title:e,setTitle:t,subtitle:o,setSubtitle:l,type:s,setType:a,logoSize:i,setLogoSize:c,setDoGoBack:d,doGoBack:u}=r.useContext(n.B9);return{title:e,setTitle:t,subtitle:o,setSubtitle:l,type:s,setType:a,logoSize:i,setLogoSize:c,doGoBack:u,setDoGoBack:d}}},66986:(e,t,o)=>{o.d(t,{A:()=>i});var r=o(65043),n=o(88016);const l=o(30009).default.div`
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
`;var s=o(70579);const a=r.memo((e=>{let{invert:t=!1,leftLabel:o,leftDisabled:r,leftHandler:a,rightLabel:i,rightDisabled:c,rightHandler:d}=e;return(0,s.jsxs)(l,{children:[(0,s.jsx)(n.A,{dark:t,disabled:r,onClick:a,children:o}),i&&d&&(0,s.jsx)(n.A,{dark:!t,disabled:c,onClick:d,children:i})]})})),i=r.memo(a)},88016:(e,t,o)=>{o.d(t,{A:()=>i});var r=o(65043),n=o(30009),l=o(68212);const s=n.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:o}=e;const r=o?l.Tj.purple_50:l.Tj.purple;return t?`\n    background-color: ${r};\n    color: ${l.Tj.white};\n    border: none;\n  `:`\n    background-color: ${l.Tj.white};\n    color: ${r};\n    border: 1px solid ${r};\n  `}}
`;var a=o(70579);const i=r.memo((e=>{let{children:t,...o}=e;return(0,a.jsx)(s,{type:"button",...o,children:t})}))}}]);
//# sourceMappingURL=409.4b4d9020.chunk.js.map
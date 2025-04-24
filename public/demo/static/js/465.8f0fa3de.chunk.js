"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[465,731],{12731:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(65043),s=n(70521),i=n(7918),r=n(21853),l=n.n(r),a=n(91688),d=n(62944),c=n(39418),u=n(66986),p=n(78102),h=n(70579);const x=()=>{const{setDoGoBack:e,setTitle:t,setSubtitle:n,setType:r}=(0,d.A)(),{t:x}=(0,s.B)(),{Portal:m}=l()({bindTo:document&&document.getElementById("wizard-buttons")}),f=(0,a.W6)(),[g,b]=o.useState(!0),[j,y]=o.useState("unknown");o.useEffect((()=>{const e=document&&document.getElementById("footer-report-problems");e&&(e.style.display=g?"none":"flex")}),[g]);const T=o.useCallback((()=>{f.replace("/welcome")}),[f]);return o.useEffect((()=>{(0,c.e)(),t(""),e((()=>{})),r("noShape"),(async()=>{y("positive"),await new Promise((e=>setTimeout(e,2e3))),b(!1)})()}),[]),o.useEffect((()=>{n(g?"":`${x("predictionResult:result")}`)}),[g]),console.log("errorCode",null),(0,h.jsxs)(h.Fragment,{children:[g?(0,h.jsxs)(p.ProcessingContainer,{children:[(0,h.jsx)(p.Title,{children:x("predictionResult:processingTitle")}),(0,h.jsx)(p.ImageProcessing,{})]}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(p.PredictionResultContainer,{children:[(0,h.jsx)(p.Title,{children:x("predictionResult:result")}),"negative"===j&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.TitleResult,{color:"#4FDB76",children:x("predictionResult:resultNotDetected")}),(0,h.jsx)(p.StyledLow,{}),(0,h.jsx)(p.IntroText,{children:(0,h.jsxs)(i.x,{i18nKey:"predictionResult:resultNotDetectedText",children:["Your voice does not seem to have indicators of COVID-19. Please ",(0,h.jsx)("strong",{children:"continue to take appropriate measures"})," based on the advice of your healthcare professional or applicable regulatory body and reassess yourself in our app daily."]})})]}),"unknown"===j&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.TitleResult,{children:x("predictionResult:resultNotAnalyze")}),(0,h.jsx)(p.IntroText,{children:(0,h.jsxs)(i.x,{i18nKey:"predictionResult:resultNotAnalyzeText",children:["Our algorithm is not able to determine your COVID-19 status.",(0,h.jsx)("strong",{children:"Please submit another cough"}),"."]})})]}),"positive"===j&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.StyledHigh,{}),(0,h.jsx)(p.TitleResult,{color:"#FF4444",children:x("predictionResult:resultDetected")}),(0,h.jsx)(p.IntroText,{children:(0,h.jsx)(i.x,{i18nKey:"predictionResult:resultDetectedText",children:"Your voice has indicators of COVID-19. Please contact your healthcare professional and take additional precautions."})})]})]})})}),(0,h.jsxs)(m,{children:[!g&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.IntroText,{children:(0,h.jsxs)(i.x,{i18nKey:"predictionResult:resultModalDummy",children:[(0,h.jsx)("strong",{children:"Aviso importante:"})," Esta aplicaci\xf3n no predecir\xe1 su estado de COVID-19 ni diagnosticar\xe1 ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 llevando a cabo una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que proporciones \xfanicamente para dicha investigaci\xf3n. Virufy no sustituir\xe1 a un m\xe9dico y le recuerda que es su responsabilidad buscar consejo m\xe9dico de su m\xe9dico."]})}),(0,h.jsx)(u.A,{invert:!0,leftLabel:x("predictionResult:nextButton"),leftHandler:T})]}),null]})]})},m=o.memo(x)},39418:(e,t,n)=>{n.d(t,{e:()=>o});const o=function(){window.scrollTo({top:0,behavior:"smooth"})}},62944:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(65043),s=n(69479);const i=()=>{const{title:e,setTitle:t,subtitle:n,setSubtitle:i,type:r,setType:l,logoSize:a,setLogoSize:d,setDoGoBack:c,doGoBack:u}=o.useContext(s.B9);return{title:e,setTitle:t,subtitle:n,setSubtitle:i,type:r,setType:l,logoSize:a,setLogoSize:d,doGoBack:u,setDoGoBack:c}}},66986:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(65043),s=n(88016);const i=n(30009).default.div`
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
`;var r=n(70579);const l=o.memo((e=>{let{invert:t=!1,leftLabel:n,leftDisabled:o,leftHandler:l,rightLabel:a,rightDisabled:d,rightHandler:c}=e;return(0,r.jsxs)(i,{children:[(0,r.jsx)(s.A,{dark:t,disabled:o,onClick:l,children:n}),a&&c&&(0,r.jsx)(s.A,{dark:!t,disabled:d,onClick:c,children:a})]})})),a=o.memo(l)},68465:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o.default});var o=n(12731)},88016:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(65043),s=n(30009),i=n(68212);const r=s.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:n}=e;const o=n?i.Tj.purple_50:i.Tj.purple;return t?`\n    background-color: ${o};\n    color: ${i.Tj.white};\n    border: none;\n  `:`\n    background-color: ${i.Tj.white};\n    color: ${o};\n    border: 1px solid ${o};\n  `}}
`;var l=n(70579);const a=o.memo((e=>{let{children:t,...n}=e;return(0,l.jsx)(r,{type:"button",...n,children:t})}))}}]);
//# sourceMappingURL=465.8f0fa3de.chunk.js.map
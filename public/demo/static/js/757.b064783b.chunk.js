"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[757],{39418:(e,t,o)=>{o.d(t,{e:()=>n});const n=function(){window.scrollTo({top:0,behavior:"smooth"})}},62944:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(65043),r=o(69479);const l=()=>{const{title:e,setTitle:t,subtitle:o,setSubtitle:l,type:i,setType:s,logoSize:a,setLogoSize:c,setDoGoBack:d,doGoBack:u}=n.useContext(r.B9);return{title:e,setTitle:t,subtitle:o,setSubtitle:l,type:i,setType:s,logoSize:a,setLogoSize:c,doGoBack:u,setDoGoBack:d}}},66986:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(65043),r=o(88016);const l=o(30009).default.div`
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
`;var i=o(70579);const s=n.memo((e=>{let{invert:t=!1,leftLabel:o,leftDisabled:n,leftHandler:s,rightLabel:a,rightDisabled:c,rightHandler:d}=e;return(0,i.jsxs)(l,{children:[(0,i.jsx)(r.A,{dark:t,disabled:n,onClick:s,children:o}),a&&d&&(0,i.jsx)(r.A,{dark:!t,disabled:c,onClick:d,children:a})]})})),a=n.memo(s)},82757:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var n=o(65043),r=o(91688),l=o(21853),i=o.n(l),s=o(70521),a=o(7918),c=o(62944),d=o(66986),u=o(30009),h=o(62582);const p=(0,u.default)(h.N_)`
  color: ${e=>e.theme.colors.purple};
  font-weight: ${e=>{let{isBold:t}=e;return t?700:400}};
  text-decoration: underline;

  &:active, :visited {
    color: ${e=>e.theme.colors.purple};
  } 
`,f=u.default.a`
  color: ${e=>e.theme.colors.purple};
  font-weight: ${e=>{let{isBold:t}=e;return t?700:400}};
  text-decoration: underline;

  &:active, :visited {
    color: ${e=>e.theme.colors.purple};
  } 
`;var g=o(70579);const m=e=>{let{children:t,to:o,target:n="_self",isBold:r=!0}=e;return"_blank"===n?(0,g.jsx)(f,{href:o,target:"_blank",rel:"noopener noreferrer",isBold:r,children:t}):(0,g.jsx)(p,{to:o,isBold:r,children:t})};var b=o(68212),x=o(39418),j=o(50281);const y=e=>{const{Portal:t}=i()({bindTo:document&&document.getElementById("wizard-buttons")}),[o,l]=(0,n.useState)(!0),{doGoBack:u,setDoGoBack:h,setTitle:p,title:f,setType:y,setLogoSize:k,setSubtitle:v}=(0,c.A)(),w=(0,r.W6)(),{t:B,i18n:S}=(0,s.B)(),$=n.useCallback((()=>{e.nextStep&&(l(!1),w.push(e.nextStep))}),[w,e.nextStep]);return(0,n.useEffect)((()=>{f&&p("")}),[f]),(0,n.useEffect)((()=>{(0,x.e)(),u&&h(null),y("shapeDown"),k("regular"),v(B("main:aboutUsTitle"))}),[]),(0,g.jsxs)(j.WelcomeStyledFormAlternative,{children:[(0,g.jsx)(j.ShapeDownContainer,{children:(0,g.jsx)(j.WelcomeBorderContainer,{children:(0,g.jsx)(j.CoupleAboutUs,{})})}),(0,g.jsx)(j.WelcomeContent,{mt:21,children:(0,g.jsx)(j.WelcomeSubtitle,{mt:0,mb:0,textAlign:"left",fontColor:b.Tj.mineShaft,isBold:!0,children:(0,g.jsxs)(a.x,{i18nKey:"helpVirufy:aboutParagraph",children:[(0,g.jsxs)("p",{children:["Virufy is a ",(0,g.jsx)("strong",{children:"nonprofit organization"})," that is working to develop the means to use ",(0,g.jsx)("strong",{children:" artificial intelligence (Al) to screen for COVID-19 from cough patterns"}),"rapidly and at no cost through use of a smartphone for the benefit of low-income countries."]}),(0,g.jsxs)("p",{children:["Our team includes researchers from over ",(0,g.jsx)("strong",{children:"25 countries"}),".",(0,g.jsx)(m,{to:`https://virufy.org/${S.language||"en"}/our-approach`,target:"_blank",children:"Our research"})," has shown that Al technology may be able to identify COVID's unique cough signature."]}),(0,g.jsxs)("p",{children:["By collecting ",(0,g.jsx)("strong",{children:"coughs recordings"})," from people around the world, Virufy is improving the robustness of its AI algorithm in recognizing COVID's unique sound pattern."]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"You have the power"}),"to help benefit millions of people across the globe by ",(0,g.jsx)("strong",{children:"contributing your cough"})," in our study."]})]})})}),o&&(0,g.jsx)(t,{children:(0,g.jsx)(d.A,{leftLabel:B("main:nextButton"),leftHandler:$,invert:!0})})]})},k=n.memo(y)},88016:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(65043),r=o(30009),l=o(68212);const i=r.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:o}=e;const n=o?l.Tj.purple_50:l.Tj.purple;return t?`\n    background-color: ${n};\n    color: ${l.Tj.white};\n    border: none;\n  `:`\n    background-color: ${l.Tj.white};\n    color: ${n};\n    border: 1px solid ${n};\n  `}}
`;var s=o(70579);const a=n.memo((e=>{let{children:t,...o}=e;return(0,s.jsx)(i,{type:"button",...o,children:t})}))}}]);
//# sourceMappingURL=757.b064783b.chunk.js.map
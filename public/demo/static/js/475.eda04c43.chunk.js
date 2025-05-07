"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[475,757],{39418:(e,t,o)=>{o.d(t,{e:()=>r});const r=function(){window.scrollTo({top:0,behavior:"smooth"})}},58856:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r.default});var r=o(82757)},62944:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(65043),n=o(69479);const l=()=>{const{title:e,setTitle:t,subtitle:o,setSubtitle:l,type:i,setType:s,logoSize:a,setLogoSize:d,setDoGoBack:c,doGoBack:u}=r.useContext(n.B9);return{title:e,setTitle:t,subtitle:o,setSubtitle:l,type:i,setType:s,logoSize:a,setLogoSize:d,doGoBack:u,setDoGoBack:c}}},66986:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(65043),n=o(88016);const l=o(30009).default.div`
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
`;var i=o(70579);const s=r.memo((e=>{let{invert:t=!1,leftLabel:o,leftDisabled:r,leftHandler:s,rightLabel:a,rightDisabled:d,rightHandler:c}=e;return(0,i.jsxs)(l,{children:[(0,i.jsx)(n.A,{dark:t,disabled:r,onClick:s,children:o}),a&&c&&(0,i.jsx)(n.A,{dark:!t,disabled:d,onClick:c,children:a})]})})),a=r.memo(s)},82757:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r=o(65043),n=o(91688),l=o(21853),i=o.n(l),s=o(70521),a=o(7918),d=o(62944),c=o(66986),u=o(30009),h=o(62582);const p=(0,u.default)(h.N_)`
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
`;var g=o(70579);const m=e=>{let{children:t,to:o,target:r="_self",isBold:n=!0}=e;return"_blank"===r?(0,g.jsx)(f,{href:o,target:"_blank",rel:"noopener noreferrer",isBold:n,children:t}):(0,g.jsx)(p,{to:o,isBold:n,children:t})};var b=o(68212),x=o(39418),j=o(50281);const y=e=>{const{Portal:t}=i()({bindTo:document&&document.getElementById("wizard-buttons")}),[o,l]=(0,r.useState)(!0),{doGoBack:u,setDoGoBack:h,setTitle:p,title:f,setType:y,setLogoSize:v,setSubtitle:k}=(0,d.A)(),w=(0,n.W6)(),{t:B,i18n:S}=(0,s.B)(),$=r.useCallback((()=>{e.nextStep&&(l(!1),w.push(e.nextStep))}),[w,e.nextStep]);return(0,r.useEffect)((()=>{f&&p("")}),[f]),(0,r.useEffect)((()=>{(0,x.e)(),u&&h(null),y("shapeDown"),v("regular"),k(B("main:aboutUsTitle"))}),[]),(0,g.jsxs)(j.WelcomeStyledFormAlternative,{children:[(0,g.jsx)(j.ShapeDownContainer,{children:(0,g.jsx)(j.WelcomeBorderContainer,{children:(0,g.jsx)(j.CoupleAboutUs,{})})}),(0,g.jsx)(j.WelcomeContent,{mt:21,children:(0,g.jsx)(j.WelcomeSubtitle,{mt:0,mb:0,textAlign:"left",fontColor:b.Tj.mineShaft,isBold:!0,children:(0,g.jsxs)(a.x,{i18nKey:"helpVirufy:aboutParagraph",children:[(0,g.jsxs)("p",{children:["Virufy is a ",(0,g.jsx)("strong",{children:"nonprofit organization"})," that is working to develop the means to use ",(0,g.jsx)("strong",{children:" artificial intelligence (Al) to screen for COVID-19 from cough patterns"}),"rapidly and at no cost through use of a smartphone for the benefit of low-income countries."]}),(0,g.jsxs)("p",{children:["Our team includes researchers from over ",(0,g.jsx)("strong",{children:"25 countries"}),".",(0,g.jsx)(m,{to:`https://virufy.org/${S.language||"en"}/our-approach`,target:"_blank",children:"Our research"})," has shown that Al technology may be able to identify COVID's unique cough signature."]}),(0,g.jsxs)("p",{children:["By collecting ",(0,g.jsx)("strong",{children:"coughs recordings"})," from people around the world, Virufy is improving the robustness of its AI algorithm in recognizing COVID's unique sound pattern."]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"You have the power"}),"to help benefit millions of people across the globe by ",(0,g.jsx)("strong",{children:"contributing your cough"})," in our study."]})]})})}),o&&(0,g.jsx)(t,{children:(0,g.jsx)(c.A,{leftLabel:B("main:nextButton"),leftHandler:$,invert:!0})})]})},v=r.memo(y)},88016:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(65043),n=o(30009),l=o(68212);const i=n.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:o}=e;const r=o?l.Tj.purple_50:l.Tj.purple;return t?`\n    background-color: ${r};\n    color: ${l.Tj.white};\n    border: none;\n  `:`\n    background-color: ${l.Tj.white};\n    color: ${r};\n    border: 1px solid ${r};\n  `}}
`;var s=o(70579);const a=r.memo((e=>{let{children:t,...o}=e;return(0,s.jsx)(i,{type:"button",...o,children:t})}))}}]);
//# sourceMappingURL=475.eda04c43.chunk.js.map
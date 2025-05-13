"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[546,748],{94748:(t,e,a)=>{a.d(e,{Od:()=>l,L_:()=>n});var i=a(30009),r=a(68212);const o=i.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,n=i.default.div`
  ${o}
  color: ${t=>{let{dark:e}=t;return e?r.Tj.darkBlack:r.Tj.black}};
  ${t=>t.fontSize?`font-size: ${t.fontSize};`:""}
`,l=i.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${r.Tj.darkBlack};
`},96546:(t,e,a)=>{a.r(e),a.d(e,{ImportantNote:()=>l,MainContainer:()=>n,PlayerBottomBottom:()=>P,PlayerBottomThumb:()=>$,PlayerBottomTop:()=>k,PlayerBottomTrack:()=>w,PlayerContainer:()=>p,PlayerContainerBottom:()=>b,PlayerContainerTop:()=>s,PlayerCross:()=>h,PlayerCrossContainer:()=>u,PlayerFileName:()=>c,PlayerFileSize:()=>y,PlayerPlay:()=>x,PlayerPlayButton:()=>m,PlayerPlayContainer:()=>f,PlayerTimeIndicator:()=>v,PlayerTopMiddle:()=>g,Subtitle:()=>d});var i=a(30009),r=a(68212),o=a(94748);const n=i.default.div`
  margin-bottom: 77px;

  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`,l=i.default.span`
  font-family: "Source Sans Pro";
  font-size: 0.75rem;
  line-height: 1.42;
  font-weight: ${t=>{let{isBold:e}=t;return e?700:400}};
 
  display: block;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 52px auto;
  
  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`,d=i.default.h2`
  color: ${t=>{let{theme:e}=t;return e.colors.mineShaft}};
  font-size: 18px;
  font-family: "Source Sans Pro";
  margin-left: 20px;
  margin-top: 35px;
  text-align: left;
  white-space: pre-wrap;
  width: 100%;
  
  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    align-text: center; 
    max-width: 592px;
    margin: 30px auto;
  }
`,p=i.default.div`
  display: flex;
  flex-direction: column;
  margin: 60px 20px 0px 20px;

  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    max-width: 592px;
    margin: 0 auto;
  }
`,s=i.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`,f=i.default.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 76px;
`,m=i.default.div`
  width: 108px;
  height: 108px;
  background-color: ${r.Tj.purple_10};
  border-radius: 50%;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  justify-content: center; 
`,x=i.default.img`
  width: 33px;
  height: 40px;
`,u=i.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 22px;
  padding-bottom: 22px;
  margin-right: -20px;
  padding-right: 20px;
  box-sizing: content-box;
  cursor: pointer;
`,h=i.default.img`
  width: 14px;
  height: 14px;
`,g=i.default.div`
  flex: 1;
`,c=(0,i.default)(o.L_).attrs({dark:!0,fontSize:"1rem"})`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
  font-size: 14px;

  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    line-height: 24px;
  }
`,y=(0,i.default)(o.L_).attrs({dark:!0,fontSize:"0.625rem"})`
  text-align: left;
  color: ${t=>t.theme.colors.darkGray};

  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    font-size: 0.875rem;
    line-height: 24px;
  }
`,b=i.default.div``,k=i.default.div`
  position: relative;
  margin-bottom: 4px;
`,w=i.default.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: ${r.Tj.purple_10};

  &:after{
    content: '';
    position: absolute; 
    left: 0;
    height: 4px;
    background-color: ${r.Tj.purple};
    width: ${t=>t.progress?`${t.progress}%`:"0%"};
    ${t=>t.playing?"transition: width 0.2s linear;":""}

  }
`,$=i.default.div`
  position: absolute;
  top: -6px;
  left: ${t=>t.progress?`${t.progress}%`:"0px"};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${r.Tj.purple};
  transform: translateX(-50%);
  ${t=>t.playing?"transition: left 0.2s linear;":""}
`,P=i.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,v=(0,i.default)(o.L_).attrs({dark:!0,fontSize:"14px"})`
  opacity: 0.5;
  margin-top: 8px;
`}}]);
//# sourceMappingURL=546.52dbd4d7.chunk.js.map
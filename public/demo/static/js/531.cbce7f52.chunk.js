"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[531,546,748],{20555:(e,t,r)=>{r.d(t,{uZ:()=>d,wU:()=>a,y$:()=>l});var n=r(65043),i=function(){var e={name:"__LSM__",middleWares:[],persist:"action"},t={};try{e.storageType="undefined"!=typeof sessionStorage?window.sessionStorage:void 0}catch(e){}return{updateStore:function(r){try{t=e.storageType&&JSON.parse(e.storageType.getItem(e.name)||"")||r}catch(e){t=r}},saveStore:function(){e.storageType&&e.storageType.setItem(e.name,JSON.stringify(t))},get state(){return t},set state(e){t=e},get options(){return e},set options(t){e=t}}}(),o=n.createContext(void 0),a=function(e){var t=e.children,r=n.useState(i.state),a=r[0],s=r[1];return n.useEffect((function(){"beforeUnload"===i.options.persist&&(window.onbeforeunload=function(){return i.saveStore()},i.options.storageType&&i.options.storageType.removeItem(i.options.name))}),[]),n.createElement(o.Provider,{value:{state:a,setState:s}},t)};function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function l(e,t){t&&(i.options=s({},i.options,t)),i.updateStore(e)}function d(e){var t=n.useContext(o),r=t.state,a=t.setState,s=n.useRef(Object.entries(e||{}).reduce((function(e,t){var r;return Object.assign({},e,((r={})[t[0]]=function(e,t){return function(r,n){i.state=t(i.state,r),i.options.middleWares&&(i.state=i.options.middleWares.reduce((function(e,n){return n(e,t.name,r)||e}),i.state)),(!n||!n.skipRender)&&e(i.state),"action"===i.options.persist&&i.saveStore()}}(a,t[1]),r))}),{}));return{actions:s.current,state:r,getState:n.useCallback((function(){return i.state}),[])}}},27249:(e,t,r)=>{r.d(t,{A:()=>n});const n={sizeAsHuman:(e,t)=>{const r=t?1e3:1024;if(Math.abs(e)<r)return`${e} B`;const n=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let i=-1;do{e/=r,++i}while(Math.abs(e)>=r&&i<n.length-1);return`${e.toFixed(1)} ${n[i]}`},blobToFile:(e,t)=>{const r=e;return r.lastModifiedDate=new Date,r.name=t,e}}},39418:(e,t,r)=>{r.d(t,{e:()=>n});const n=function(){window.scrollTo({top:0,behavior:"smooth"})}},54531:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(65043),i=r(91688),o=r(21853),a=r.n(o),s=r(70521),l=r(7918),d=r(20555),c=r(62944),u=r(66986),p=r(61621),f=r(39418),m=r(97607);const h=r.p+"static/media/play.e148f52957250650b0789c879d20c81e.svg";const g=r.p+"static/media/pause.6d9603fe969fabd6f7e43096969996c2.svg";var x=r(79436),y=r(27249),b=r(96546),v=r(70579);const k=e=>{var t;let{storeKey:r,previousStep:o,nextStep:k,metadata:w}=e;const{Portal:P}=a()({bindTo:document&&document.getElementById("wizard-buttons")}),{setDoGoBack:T,setSubtitle:j}=(0,c.A)(),S=(0,i.W6)(),B=(0,i.zy)(),{state:$,actions:C}=(0,d.uZ)({updateAction:(0,p.E)(r)}),{t:z}=(0,s.B)(),L=null===$||void 0===$||null===(t=$[r])||void 0===t?void 0:t[null===w||void 0===w?void 0:w.currentLogic],M=L?L.recordingFile||L.uploadedFile:null,E=n.useRef(null),A=n.useRef(),_=n.useRef(0),[I,O]=n.useState(!0),[D,F]=n.useState(!1),[N,G]=n.useState(0),[R,U]=n.useState(0);n.useEffect((()=>{const e=t=>{U(t/1e3),_.current=t,A.current=setTimeout((()=>{e(t+200)}),200)},t=()=>{e(_.current),setTimeout((()=>{F(!0)}),0)},r=e=>{e.target.currentTime>=e.target.duration&&(U(0),_.current=0),F(!1),clearTimeout(A.current)},n=async e=>{const t=await(0,m.D)(e.target);G(t)};return E.current&&(E.current.addEventListener("playing",t),E.current.addEventListener("pause",r),E.current.addEventListener("loadedmetadata",n)),()=>{E.current&&(E.current.removeEventListener("playing",t),E.current.removeEventListener("pause",r),E.current.removeEventListener("loadedmetadata",n))}}),[]);const{fileUrl:H,fileName:W}=n.useMemo((()=>{const e={fileUrl:"",fileName:"",fileSize:""};if(M&&void 0!==M.size)try{const t=URL.createObjectURL(M);e.fileUrl=t,e.fileName=M.name,e.fileSize=y.A.sizeAsHuman(M.size,!0)}catch(t){console.log("Error",t)}return e}),[M]),Z=n.useCallback((()=>{k&&(O(!1),S.push(k))}),[S,k]),K=n.useCallback((()=>{if(D&&E.current&&E.current.pause(),O(!1),B.state&&B.state.from){const e="/submit-steps/step-record/cough";S.push(e)}else o?S.push(o):S.goBack()}),[B.state,o,S,D]),V=n.useCallback((()=>{D&&E.current&&E.current.pause(),null!==$&&void 0!==$&&$[r][null===w||void 0===w?void 0:w.currentLogic]&&(C.updateAction({[null===w||void 0===w?void 0:w.currentLogic]:{recordingFile:null,uploadFile:null}}),K())}),[D,$,r,w,C,K]),J=n.useCallback((()=>{D||(U(0),E.current&&E.current.play())}),[D]),Y=n.useCallback((()=>{D&&E.current&&E.current.pause()}),[D]);(0,n.useEffect)((()=>{(0,f.e)(),j(z("recordingsListen:title")),T((()=>K))}),[K,T,j,z]);const{currentTime:X,remainingTime:q,trackProgress:Q}=n.useMemo((()=>{const e={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(N){const t=Math.floor(Math.floor(R)/60),r=Math.floor(R)-60*t;e.currentTime=`${t}:${r<10?`0${r}`:r}`;const n=N>R?Math.ceil(N-R):0,i=Math.floor(n/60),o=n-60*i;e.remainingTime=`-${i}:${o<10?`0${o}`:o}`,e.trackProgress=Math.ceil(R/N*100)}return e}),[N,R]);return(0,v.jsxs)(v.Fragment,{children:[H&&(0,v.jsx)("audio",{ref:E,children:(0,v.jsx)("source",{src:H})}),(0,v.jsxs)(b.MainContainer,{children:[(0,v.jsx)(b.Subtitle,{children:z("recordingsListen:subtitle")}),(0,v.jsxs)(b.PlayerContainer,{children:[(0,v.jsxs)(b.PlayerContainerTop,{children:[(0,v.jsx)(b.PlayerTopMiddle,{children:(0,v.jsx)(b.PlayerFileName,{children:W})}),(0,v.jsx)(b.PlayerCrossContainer,{onClick:V,children:(0,v.jsx)(b.PlayerCross,{src:x.A})})]}),(0,v.jsxs)(b.PlayerContainerBottom,{children:[(0,v.jsxs)(b.PlayerBottomTop,{children:[(0,v.jsx)(b.PlayerBottomTrack,{playing:D,progress:Q}),(0,v.jsx)(b.PlayerBottomThumb,{playing:D,progress:Q})]}),(0,v.jsxs)(b.PlayerBottomBottom,{children:[(0,v.jsx)(b.PlayerTimeIndicator,{children:X}),(0,v.jsx)(b.PlayerTimeIndicator,{children:q})]})]})]}),(0,v.jsx)(b.PlayerPlayContainer,{onClick:D?Y:J,children:(0,v.jsx)(b.PlayerPlayButton,{children:(0,v.jsx)(b.PlayerPlay,{src:D?g:h})})})]}),(0,v.jsx)(b.ImportantNote,{children:(0,v.jsxs)(l.x,{i18nKey:"main:note",children:[(0,v.jsx)("strong",{children:"Please note:"})," This form is for data collection only. It will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor."]})}),I&&(0,v.jsx)(P,{children:(0,v.jsx)(u.A,{invert:!0,leftLabel:z("recordingsListen:next"),leftHandler:Z,rightLabel:z("recordingsListen:retake"),rightHandler:V})})]})},w=n.memo(k)},61621:(e,t,r)=>{function n(e){return(t,r)=>({...t,[e]:{...t[e],...r}})}r.d(t,{E:()=>n})},62944:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(65043),i=r(69479);const o=()=>{const{title:e,setTitle:t,subtitle:r,setSubtitle:o,type:a,setType:s,logoSize:l,setLogoSize:d,setDoGoBack:c,doGoBack:u}=n.useContext(i.B9);return{title:e,setTitle:t,subtitle:r,setSubtitle:o,type:a,setType:s,logoSize:l,setLogoSize:d,doGoBack:u,setDoGoBack:c}}},66986:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(65043),i=r(88016);const o=r(30009).default.div`
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
`;var a=r(70579);const s=n.memo((e=>{let{invert:t=!1,leftLabel:r,leftDisabled:n,leftHandler:s,rightLabel:l,rightDisabled:d,rightHandler:c}=e;return(0,a.jsxs)(o,{children:[(0,a.jsx)(i.A,{dark:t,disabled:n,onClick:s,children:r}),l&&c&&(0,a.jsx)(i.A,{dark:!t,disabled:d,onClick:c,children:l})]})})),l=n.memo(s)},88016:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(65043),i=r(30009),o=r(68212);const a=i.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:r}=e;const n=r?o.Tj.purple_50:o.Tj.purple;return t?`\n    background-color: ${n};\n    color: ${o.Tj.white};\n    border: none;\n  `:`\n    background-color: ${o.Tj.white};\n    color: ${n};\n    border: 1px solid ${n};\n  `}}
`;var s=r(70579);const l=n.memo((e=>{let{children:t,...r}=e;return(0,s.jsx)(a,{type:"button",...r,children:t})}))},94748:(e,t,r)=>{r.d(t,{Od:()=>s,L_:()=>a});var n=r(30009),i=r(68212);const o=n.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,a=n.default.div`
  ${o}
  color: ${e=>{let{dark:t}=e;return t?i.Tj.darkBlack:i.Tj.black}};
  ${e=>e.fontSize?`font-size: ${e.fontSize};`:""}
`,s=n.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${i.Tj.darkBlack};
`},96546:(e,t,r)=>{r.r(t),r.d(t,{ImportantNote:()=>s,MainContainer:()=>a,PlayerBottomBottom:()=>P,PlayerBottomThumb:()=>w,PlayerBottomTop:()=>v,PlayerBottomTrack:()=>k,PlayerContainer:()=>d,PlayerContainerBottom:()=>b,PlayerContainerTop:()=>c,PlayerCross:()=>h,PlayerCrossContainer:()=>m,PlayerFileName:()=>x,PlayerFileSize:()=>y,PlayerPlay:()=>f,PlayerPlayButton:()=>p,PlayerPlayContainer:()=>u,PlayerTimeIndicator:()=>T,PlayerTopMiddle:()=>g,Subtitle:()=>l});var n=r(30009),i=r(68212),o=r(94748);const a=n.default.div`
  margin-bottom: 77px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`,s=n.default.span`
  font-family: "Source Sans Pro";
  font-size: 0.75rem;
  line-height: 1.42;
  font-weight: ${e=>{let{isBold:t}=e;return t?700:400}};
 
  display: block;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 52px auto;
  
  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`,l=n.default.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.mineShaft}};
  font-size: 18px;
  font-family: "Source Sans Pro";
  margin-left: 20px;
  margin-top: 35px;
  text-align: left;
  white-space: pre-wrap;
  width: 100%;
  
  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    align-text: center; 
    max-width: 592px;
    margin: 30px auto;
  }
`,d=n.default.div`
  display: flex;
  flex-direction: column;
  margin: 60px 20px 0px 20px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    max-width: 592px;
    margin: 0 auto;
  }
`,c=n.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`,u=n.default.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 76px;
`,p=n.default.div`
  width: 108px;
  height: 108px;
  background-color: ${i.Tj.purple_10};
  border-radius: 50%;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  justify-content: center; 
`,f=n.default.img`
  width: 33px;
  height: 40px;
`,m=n.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 22px;
  padding-bottom: 22px;
  margin-right: -20px;
  padding-right: 20px;
  box-sizing: content-box;
  cursor: pointer;
`,h=n.default.img`
  width: 14px;
  height: 14px;
`,g=n.default.div`
  flex: 1;
`,x=(0,n.default)(o.L_).attrs({dark:!0,fontSize:"1rem"})`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
  font-size: 14px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    line-height: 24px;
  }
`,y=(0,n.default)(o.L_).attrs({dark:!0,fontSize:"0.625rem"})`
  text-align: left;
  color: ${e=>e.theme.colors.darkGray};

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 0.875rem;
    line-height: 24px;
  }
`,b=n.default.div``,v=n.default.div`
  position: relative;
  margin-bottom: 4px;
`,k=n.default.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: ${i.Tj.purple_10};

  &:after{
    content: '';
    position: absolute; 
    left: 0;
    height: 4px;
    background-color: ${i.Tj.purple};
    width: ${e=>e.progress?`${e.progress}%`:"0%"};
    ${e=>e.playing?"transition: width 0.2s linear;":""}

  }
`,w=n.default.div`
  position: absolute;
  top: -6px;
  left: ${e=>e.progress?`${e.progress}%`:"0px"};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${i.Tj.purple};
  transform: translateX(-50%);
  ${e=>e.playing?"transition: left 0.2s linear;":""}
`,P=n.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,T=(0,n.default)(o.L_).attrs({dark:!0,fontSize:"14px"})`
  opacity: 0.5;
  margin-top: 8px;
`},97607:(e,t,r)=>{r.d(t,{D:()=>i});var n=r(53167);function i(e,t){return new Promise((r=>{e.duration===1/0||n.nr&&!(n.nr&&e.duration>0)?(e.addEventListener("durationchange",(()=>{t?e.remove():(e.pause(),e.volume=1,e.currentTime=0),r(e.duration)})),e.currentTime=86400,e.play()):r(e.duration)}))}}}]);
//# sourceMappingURL=531.cbce7f52.chunk.js.map
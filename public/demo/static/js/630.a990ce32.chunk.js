"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[354,630,748,853],{18630:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(65043),o=n(91688),a=n(21853),i=n.n(a),l=n(70521),s=n(61258),u=n(20555),c=n(59517),d=n(73033),p=n(66986),f=n(62944),m=n(61621),v=n(39418),h=n(47354),g=n(70579);const b=d.Ik({uploadedFile:d.gl().required("ERROR.FILE_REQUIRED").test("fileSize","ERROR.FILE_SIZE",(e=>{if(e){const t=e,{size:n}=t;return n<=1024**3*5}return!!e})).test("fileDuration","ERROR.FILE_DURATION",(async e=>{if(e){const t=e,n=new Audio(URL.createObjectURL(t));return n.load(),await new Promise((e=>n.addEventListener("loadedmetadata",e))),n.duration>=3}return!!e}))}).defined(),C=e=>{var t;let{storeKey:n,previousStep:a,nextStep:d,metadata:C}=e;const{Portal:w}=i()({bindTo:document&&document.getElementById("wizard-buttons")}),{setDoGoBack:x,setTitle:y,setSubtitle:k,setType:E}=(0,f.A)(),O=(0,o.W6)(),{state:S,actions:j}=(0,u.uZ)({updateAction:(0,m.E)(n)}),{control:R}=(0,s.mN)({mode:"onChange",defaultValues:null===S||void 0===S||null===(t=S[n])||void 0===t?void 0:t[null===C||void 0===C?void 0:C.currentLogic],resolver:(0,c.t)(b)}),{t:T}=(0,l.B)(),[L,_]=r.useState(!0),[P,$]=r.useState(""),F=(0,r.useRef)(null),M=r.useCallback((e=>{d&&(j.updateAction({[null===C||void 0===C?void 0:C.currentLogic]:{recordingFile:null,uploadedFile:e}}),_(!1),O.push(d,{from:"step-manual-upload"}))}),[d,j,C,O]),B=r.useCallback((()=>{_(!1),a?O.push(a):O.goBack()}),[O,a]),I=r.useCallback((e=>{b.validate({uploadedFile:e}).then((()=>{M(e)})).catch((e=>{"ERROR.FILE_SIZE"===e.errors[0]&&$(T("recordingsRecordManual:fileSizeTooBig")),"ERROR.FILE_REQUIRED"===e.errors[0]?$(T("recordingsRecordManual:fileRequired")):$(T("recordingsRecordManual:fileDurationTooShort"))}))}),[M,T]);return(0,r.useEffect)((()=>{(0,v.e)(),y(T("recordingsRecordManual:header")),k(""),E("shapeUp"),x((()=>B))}),[B,x,E,k,y,T]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(h.MainContainer,{children:[(0,g.jsx)(h.Title,{children:T("recordingsRecordManual:micError")}),(0,g.jsx)(h.CloudsSVG,{}),(0,g.jsx)(s.xI,{control:R,name:"uploadedFile",render:e=>{let{name:t}=e;return(0,g.jsxs)(h.UploadContainer,{children:[(0,g.jsx)(h.UploadButton,{htmlFor:"uploaded-file"}),(0,g.jsx)(h.ArrowUp,{}),(0,g.jsx)(h.UploadInput,{ref:F,id:"uploaded-file",type:"file",name:t,accept:"audio/wav,audio/wave,audio/wav,audio/x-wav,audio/x-pn-wav,audio/mp3,audio/ogg",onChange:e=>{var t;return I(null===(t=e.currentTarget.files)||void 0===t?void 0:t[0])}})]})}})]}),(0,g.jsx)(h.TextErrorContainer,{children:P}),L&&(0,g.jsx)(w,{children:(0,g.jsx)(p.A,{invert:!0,leftLabel:T("recordingsRecordManual:uploadFile"),leftHandler:()=>{var e;return null===(e=F.current)||void 0===e?void 0:e.click()}})})]})},w=r.memo(C)},20555:(e,t,n)=>{n.d(t,{uZ:()=>u,wU:()=>i,y$:()=>s});var r=n(65043),o=function(){var e={name:"__LSM__",middleWares:[],persist:"action"},t={};try{e.storageType="undefined"!=typeof sessionStorage?window.sessionStorage:void 0}catch(e){}return{updateStore:function(n){try{t=e.storageType&&JSON.parse(e.storageType.getItem(e.name)||"")||n}catch(e){t=n}},saveStore:function(){e.storageType&&e.storageType.setItem(e.name,JSON.stringify(t))},get state(){return t},set state(e){t=e},get options(){return e},set options(t){e=t}}}(),a=r.createContext(void 0),i=function(e){var t=e.children,n=r.useState(o.state),i=n[0],l=n[1];return r.useEffect((function(){"beforeUnload"===o.options.persist&&(window.onbeforeunload=function(){return o.saveStore()},o.options.storageType&&o.options.storageType.removeItem(o.options.name))}),[]),r.createElement(a.Provider,{value:{state:i,setState:l}},t)};function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){t&&(o.options=l({},o.options,t)),o.updateStore(e)}function u(e){var t=r.useContext(a),n=t.state,i=t.setState,l=r.useRef(Object.entries(e||{}).reduce((function(e,t){var n;return Object.assign({},e,((n={})[t[0]]=function(e,t){return function(n,r){o.state=t(o.state,n),o.options.middleWares&&(o.state=o.options.middleWares.reduce((function(e,r){return r(e,t.name,n)||e}),o.state)),(!r||!r.skipRender)&&e(o.state),"action"===o.options.persist&&o.saveStore()}}(i,t[1]),n))}),{}));return{actions:l.current,state:n,getState:r.useCallback((function(){return o.state}),[])}}},21853:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(65043),l=n(97950),s=a(n(42830));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e) when the `programmaticallyOpen` option is not set to `true`.",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,u=e.closeOnEsc,c=void 0===u||u,d=e.bindTo,p=e.isOpen,f=void 0!==p&&p,m=e.onOpen,v=e.onClose,h=e.onPortalClick,g=e.programmaticallyOpen,b=void 0!==g&&g,C=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick","programmaticallyOpen"]),w=s.default(),x=w.isServer,y=w.isBrowser,k=i.useState(f),E=k[0],O=k[1],S=i.useRef(E),j=i.useCallback((function(e){S.current=e,O(e)}),[]),R=i.useRef(),T=i.useRef(y?document.createElement("div"):null);i.useEffect((function(){y&&!T.current&&(T.current=document.createElement("div"))}),[y,T]);var L=i.useMemo((function(){if(!x)return d&&l.findDOMNode(d)||document.body}),[x,d]),_=function(e){if(!e)return{portal:T,targetEl:R,event:e};var t=e||{};t.persist&&t.persist(),t.portal=T,t.targetEl=R,t.event=e;var n=e.currentTarget;return!R.current&&n&&n!==document&&(R.current=t.currentTarget),t},P=Object.entries(C).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){x||r(_(e))},e}),{}),$=i.useCallback((function(e){if(!x){var n=_(e);if(null==R.current&&!b)throw setTimeout((function(){return j(!0)}),0),Error(t.errorMessage1);m&&m(n),j(!0)}}),[x,T,j,R,m]),F=i.useCallback((function(e){if(!x){var t=_(e);v&&S.current&&v(t),S.current&&j(!1)}}),[x,v,j]),M=i.useCallback((function(e){return S.current?F(e):$(e)}),[F,$]),B=i.useCallback((function(e){return"Escape"===e.key&&c?F(e):void 0}),[c,F]),I=i.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(T)||0!==e.button||!S.current||R.current&&t(R)||a&&F(e)}),[x,F,a,T]),z=i.useCallback((function(e){if(!x&&T.current instanceof HTMLElement){var t=_(e);T.current.contains(t.target)&&h&&h(t),I(e)}}),[I]),U=i.useRef({});i.useEffect((function(){if(!x&&L instanceof HTMLElement&&T.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=T.current;return L.appendChild(T.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];C[t]&&(U.current[t]=function(e){return C[t](_(e))},document.addEventListener(n,U.current[t]))})),document.addEventListener("keydown",B),document.addEventListener("mousedown",z),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];C[t]&&(document.removeEventListener(n,U.current[t]),delete U.current[t])})),document.removeEventListener("keydown",B),document.removeEventListener("mousedown",z),L.removeChild(t)}}}),[x,I,B,L,T]);var D=i.useCallback((function(e){var t=e.children;return null!=T.current?l.createPortal(t,T.current):null}),[T]);return Object.assign([$,F,S.current,D,M,R,T],r(r({isOpen:S.current,openPortal:$,ref:R,closePortal:F,togglePortal:M,Portal:D,portalRef:T},P),{bind:r({ref:R},P)}))}},39418:(e,t,n)=>{n.d(t,{e:()=>r});const r=function(){window.scrollTo({top:0,behavior:"smooth"})}},42830:function(e,t){var n,r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(n=t.Device||(t.Device={}));var o=n.Browser,a=n.Server,i=n.Native,l=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:l?o:a,u={isBrowser:s===o,isServer:s===a,isNative:s===i,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===o&&!!window.addEventListener,canUseViewport:s===o&&!!window.screen},c=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return r(r({},e),t)}),{})}((e=u,Object.keys(e).map((function(t){return e[t]})),u));var e},d=c();t.weAreServer=function(){u.isServer=!0,d=c()},t.useSSR=function(){return d},t.default=t.useSSR},47354:(e,t,n)=>{n.r(t),n.d(t,{ArrowUp:()=>j,CloudsSVG:()=>R,MainContainer:()=>b,Text:()=>w,TextAddFile:()=>x,TextErrorContainer:()=>k,TextFileConstraints:()=>y,Title:()=>C,UploadButton:()=>S,UploadContainer:()=>E,UploadInput:()=>O});var r,o,a,i=n(30009),l=n(68212),s=n(94748),u=n(65043);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(null,arguments)}function d(e,t){let{title:n,titleId:i,...l}=e;return u.createElement("svg",c({viewBox:"0 0 197 123",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},l),n?u.createElement("title",{id:i},n):null,r||(r=u.createElement("path",{d:"M166.609 94.6731C166.611 91.0315 165.894 87.4254 164.502 84.0606C163.109 80.6959 161.067 77.6385 158.492 75.063C155.917 72.4876 152.86 70.4445 149.495 69.0507C146.13 67.6568 142.524 66.9394 138.882 66.9394C137.294 66.94 135.71 67.079 134.146 67.3547C134.166 56.8902 130.027 46.8467 122.64 39.4335C115.253 32.0204 105.223 27.8449 94.7569 27.8256C84.2909 27.8064 74.2459 31.9449 66.8317 39.3307C59.4175 46.7166 55.2414 56.7449 55.2221 67.2093C53.9521 67.0353 52.672 66.9451 51.3901 66.9394C44.1573 66.9086 37.1987 69.705 31.9989 74.7319C26.799 79.7588 23.7696 86.6183 23.5569 93.8471C23.3442 101.076 25.965 108.102 30.8602 113.425C35.7554 118.749 42.5375 121.95 49.7597 122.344H140.585C147.631 121.911 154.246 118.807 159.081 113.665C163.917 108.523 166.609 101.731 166.609 94.6731Z",fill:"#D5E4FF"})),o||(o=u.createElement("path",{d:"M197 38.8013C197.007 36.4261 196.493 34.0783 195.494 31.9232C194.495 29.7681 193.036 27.8581 191.219 26.3277C189.403 24.7973 187.272 23.6837 184.979 23.0654C182.685 22.4471 180.284 22.339 177.944 22.7488C177.827 16.6826 175.337 10.9037 171.009 6.65113C166.681 2.39858 160.858 0.0109033 154.79 3.72496e-05C148.722 -0.0108288 142.891 2.35598 138.548 6.593C134.204 10.83 131.694 16.6 131.555 22.6657C130.809 22.5576 130.056 22.5021 129.302 22.4996C125.066 22.5049 121 24.1578 117.962 27.1082C114.924 30.0587 113.154 34.0753 113.026 38.3078C112.897 42.5403 114.421 46.6567 117.275 49.7855C120.129 52.9144 124.088 54.8102 128.315 55.0718H181.703C185.844 54.8131 189.731 52.9865 192.573 49.9639C195.414 46.9413 196.997 42.9497 197 38.8013Z",fill:"#EAF1FF"})),a||(a=u.createElement("path",{d:"M47.3115 91.1833C47.3115 88.7461 46.3432 86.4088 44.6197 84.6855C42.8961 82.9622 40.5585 81.9941 38.121 81.9941C37.5953 81.9913 37.0704 82.0364 36.5529 82.129C36.5529 78.662 35.1754 75.337 32.7235 72.8854C30.2715 70.4338 26.946 69.0565 23.4785 69.0565C20.0109 69.0565 16.6854 70.4338 14.2334 72.8854C11.7815 75.337 10.404 78.662 10.404 82.129C9.98039 82.0749 9.55377 82.0471 9.12669 82.046C6.74799 82.0625 4.46834 83.0005 2.76706 84.6628C1.06577 86.3252 0.0754078 88.5823 0.00413104 90.9596C-0.0671457 93.3369 0.786245 95.6493 2.38488 97.4105C3.98352 99.1718 6.20286 100.245 8.57629 100.404H38.6922C41.0347 100.258 43.2327 99.2214 44.8354 97.507C46.4381 95.7925 47.324 93.53 47.3115 91.1833Z",fill:"#B1CDFF"})))}const p=u.forwardRef(d);n.p;var f,m;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(null,arguments)}function h(e,t){let{title:n,titleId:r,...o}=e;return u.createElement("svg",v({viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),n?u.createElement("title",{id:r},n):null,f||(f=u.createElement("path",{d:"M20 33.4749V6.52485",stroke:"#3578DE",strokeWidth:3.675,strokeLinecap:"round",strokeLinejoin:"round"})),m||(m=u.createElement("path",{d:"M8.97504 17.5499L20 6.52493L31.025 17.5499",stroke:"#3578DE",strokeWidth:3.675,strokeLinecap:"round",strokeLinejoin:"round"})))}const g=u.forwardRef(h),b=(n.p,i.default.div`
  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`),C=(0,i.default)(s.Od)`
  margin-top: 65px;
  margin-bottom: 16px;
  margin-left: 20px;

`,w=(0,i.default)(s.L_)`
  margin-bottom: 125px;
  color: ${e=>e.theme.colors.darkGray_70};

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    @media (orientation: portrait) {
      margin-bottom: 185px;
    }

    @media (orientation: landscape) {
      margin-bottom: 24px;
    }
  }
`,x=(0,i.default)(s.L_).attrs({dark:!0,fontSize:"1rem"})`
  text-align: center;
  line-height: 24px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }
`,y=(0,i.default)(s.L_).attrs({dark:!0,fontSize:"0.625rem"})`
  text-align: center;
  line-height: 24px;
  color: ${e=>e.theme.colors.darkGray};

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-top: 20px;
  }
`,k=i.default.div`
  font-size: 16px;
  line-height: 20px;
  color: ${l.Tj.red};
  font-family: 'Source Sans Pro';
  display: 'flex';
  height: 50px;
`,E=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  position: relative;
`,O=i.default.input`
  display: none;
`,S=i.default.label`
  width: 98px;
  height: 98px;
  background-color: #EBF1FC;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-top: -40%;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
  }
`,j=(0,i.default)(g)`
  width: 39px;
  height: 39px;
  position: absolute; 
  bottom: 55%;
  pointer-events: none;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 60%;
  } 
`,R=(0,i.default)(p)`
  width: 197px;
  height: 122px;
  margin: 0 auto;
  margin-top: 110px;
  display: block;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 374px;
    height: 299px;
  }
`},61621:(e,t,n)=>{function r(e){return(t,n)=>({...t,[e]:{...t[e],...n}})}n.d(t,{E:()=>r})},62944:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(65043),o=n(69479);const a=()=>{const{title:e,setTitle:t,subtitle:n,setSubtitle:a,type:i,setType:l,logoSize:s,setLogoSize:u,setDoGoBack:c,doGoBack:d}=r.useContext(o.B9);return{title:e,setTitle:t,subtitle:n,setSubtitle:a,type:i,setType:l,logoSize:s,setLogoSize:u,doGoBack:d,setDoGoBack:c}}},66986:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(65043),o=n(88016);const a=n(30009).default.div`
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
`;var i=n(70579);const l=r.memo((e=>{let{invert:t=!1,leftLabel:n,leftDisabled:r,leftHandler:l,rightLabel:s,rightDisabled:u,rightHandler:c}=e;return(0,i.jsxs)(a,{children:[(0,i.jsx)(o.A,{dark:t,disabled:r,onClick:l,children:n}),s&&c&&(0,i.jsx)(o.A,{dark:!t,disabled:u,onClick:c,children:s})]})})),s=r.memo(l)},88016:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(65043),o=n(30009),a=n(68212);const i=o.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:n}=e;const r=n?a.Tj.purple_50:a.Tj.purple;return t?`\n    background-color: ${r};\n    color: ${a.Tj.white};\n    border: none;\n  `:`\n    background-color: ${a.Tj.white};\n    color: ${r};\n    border: 1px solid ${r};\n  `}}
`;var l=n(70579);const s=r.memo((e=>{let{children:t,...n}=e;return(0,l.jsx)(i,{type:"button",...n,children:t})}))},94748:(e,t,n)=>{n.d(t,{Od:()=>l,L_:()=>i});var r=n(30009),o=n(68212);const a=r.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,i=r.default.div`
  ${a}
  color: ${e=>{let{dark:t}=e;return t?o.Tj.darkBlack:o.Tj.black}};
  ${e=>e.fontSize?`font-size: ${e.fontSize};`:""}
`,l=r.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${o.Tj.darkBlack};
`}}]);
//# sourceMappingURL=630.a990ce32.chunk.js.map
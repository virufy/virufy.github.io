"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[737,748,805],{9737:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var i=n(65043),o=n(21853),r=n.n(o),s=n(70521),a=n(61258),c=n(59517),d=n(73033),l=n(9508),u=n.n(l);function h(){let e=[];this.onmessage=t=>{"encode"===t.data[0]?function(t){const{length:n}=t,i=new Uint8Array(2*n*1);for(let e=0;e<n;e+=1){const n=2*e*1;let o=t[e];o>1?o=1:o<-1&&(o=-1),o*=32768,i[n]=o,i[n+1]=o>>8}e.push(i)}(t.data[1]):"dump"===t.data[0]?function(t){const n=e.length?e[0].length:0,i=e.length*n,o=new Uint8Array(44+i),r=new DataView(o.buffer);r.setUint32(0,1380533830,!1),r.setUint32(4,36+i,!0),r.setUint32(8,1463899717,!1),r.setUint32(12,1718449184,!1),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,t,!0),r.setUint32(28,1*t*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),r.setUint32(36,1684108385,!1),r.setUint32(40,i,!0);for(let a=0;a<e.length;a+=1)o.set(e[a],a*n+44);e=[];const s=[o.buffer];postMessage(s,[s[0]])}(t.data[1]):"close"===t.data[0]&&this.close()}}function p(){let e=null;const t=1152;let n=[];function i(e){const t=new Float32Array(e),n=new Int16Array(e.length);return function(e,t){for(let n=0;n<e.length;n+=1){const i=Math.max(-1,Math.min(1,e[n]));t[n]=i<0?32768*i:32767*i}}(t,n),n}onmessage=function(o){var r;"encode"===o.data[0]?function(o){const r=i(o);let s=r.length;for(let i=0;s>=0;i+=t){const o=r.subarray(i,i+t),a=e.encodeBuffer(o);n.push(a),s-=t}}(o.data[1]):"dump"===o.data[0]?function(){const t=e.flush();t.length>0&&n.push(t),postMessage(n),n=[]}(o.data[1]):"init"===o.data[0]?(r=o.data[1],importScripts(r.baseUrl+"/workers/encoders/lame.min.js"),e=new lamejs.Mp3Encoder(1,r.sampleRate,128)):"close"===o.data[0]&&this.close()}}function m(){let e;importScripts("/demo/workers/encoders/libflac.dev.js");let t=1,n=44100,i=5,o=16,r=1,s=0;const a=[];let c=!1;const d=[];function l(e,t){a.push(e),s+=e.byteLength}function u(){if(e=Flac.init_libflac_encoder(n,t,o,i,0),0!==e){const t=Flac.init_encoder_stream(e,l);r&=0==t,console.log(`flac init     : ${r}`),console.log(`status encoder: ${t}`),c=!0}else console.error("Error initializing the encoder.")}function h(n){const i=n.length,o=new Uint32Array(i),r=new DataView(o.buffer);let s=0;for(let e=0;e<i;e+=1)r.setInt32(s,32767*n[e],!0),s+=4;const a=Flac.FLAC__stream_encoder_process_interleaved(e,o,o.length/t);1!=a&&console.log(`Error: encode_buffer_pcm_as_flac returned false. ${a}`)}function p(e,t){const n=function(e,t){const n=new Uint8Array(t);let i=0;const o=e.length;for(let r=0;r<o;r+=1){const t=e[r];n.set(t,i),i+=t.length}return n}(e,t);return new Blob([n],{type:"audio/flac"})}this.onmessage=function(l){if("init"===l.data[0])!function(e){let r=e;r||(r={bps:o,channels:t,samplerate:n,compression:i}),r.channels=r.channels?r.channels:t,r.samplerate=r.samplerate?r.samplerate:n,r.bps=r.bps?r.bps:o,r.compression=r.compression?r.compression:i,i=r.compression,o=r.bps,n=r.samplerate,t=r.channels,Flac.isReady()?u():Flac.onready=function(){setTimeout((()=>{u()}),0)}}(l.data[1]);else if("encode"===l.data[0])!function(e){if(Flac.isReady()){if(d.length>0){const e=d.length,t=d.splice(0,e);for(let n=0;n<e;++n)h(t[n])}h(e)}else d.push(e),console.info("buffered audio data for Flac encdoing")}(l.data[1]);else if("dump"===l.data[0]){let t;Flac.isReady()?(r&=Flac.FLAC__stream_encoder_finish(e),console.log(`flac finish: ${r}`),t=p(a,s),Flac.FLAC__stream_encoder_delete(e)):console.error("Flac was not initialized: could not encode data!"),a.splice(0,a.length),s=0,d.splice(0,d.length),postMessage(t),c=!1}}}class f{constructor(e){this.cleanup=()=>{this.config.onRecording&&this.em.removeEventListener("recording",this.recordingFn),this.config.onAudioProcesss&&this.em.removeEventListener("onaudioprocess",this.onAudioProcessFn)},this.createWorker=e=>{const t=e.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),n=new Blob([t]);return new Worker(URL.createObjectURL(n))},this.startRecording=e=>{if("inactive"!==this.state)return;if(!navigator||!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return;if(this.audioCtx=new AudioContext({sampleRate:this.config.sampleRate}),this.micGainNode=this.audioCtx.createGain(),this.outputGainNode=this.audioCtx.createGain(),this.config.createDynamicsCompressorNode&&(this.dynamicsCompressorNode=this.audioCtx.createDynamicsCompressor()),this.config.createAnalyserNode&&(this.analyserNode=this.audioCtx.createAnalyser()),(this.config.forceScriptProcessor||this.config.broadcastAudioProcessEvents||!this.config.usingMediaRecorder)&&(this.processorNode=this.audioCtx.createScriptProcessor(this.config.processorBufferSize,1,1)),this.audioCtx.createMediaStreamDestination?this.destinationNode=this.audioCtx.createMediaStreamDestination():this.destinationNode=this.audioCtx.destination,!this.config.usingMediaRecorder){if("mp3"===this.config.manualEncoderId){this.encoderWorker=this.createWorker(p);const e="/demo";this.encoderWorker.postMessage(["init",{baseUrl:e,sampleRate:this.audioCtx.sampleRate}]),this.encoderMimeType="audio/mpeg"}else"flac"===this.config.manualEncoderId?(this.encoderWorker=this.createWorker(m),this.encoderWorker.postMessage(["init",{sampleRate:this.audioCtx.sampleRate}]),this.encoderMimeType="audio/flac"):(this.encoderWorker=this.createWorker(h),this.encoderMimeType="audio/wav");this.encoderWorker.addEventListener("message",(e=>{const t=new Event("dataavailable");"ogg"===this.config.manualEncoderId||"flac"===this.config.manualEncoderId?t.data=e.data:t.data=new Blob(e.data,{type:this.encoderMimeType}),this._onDataAvailable(t)}))}const t={audio:{echoCancellation:this.config.enableEchoCancellation}};return this.config.deviceId&&(t.audio.deviceId=this.config.deviceId),navigator.mediaDevices.getUserMedia(t).then((t=>{this._startRecordingWithStream(t,e)})).catch((e=>{console.log(e)}))},this.setMicGain=e=>{this.config.micGain=e,this.audioCtx&&this.micGainNode&&this.micGainNode.gain.setValueAtTime(e,this.audioCtx.currentTime)},this._startRecordingWithStream=(e,t)=>{this.micAudioStream=e,this.inputStreamNode=this.audioCtx.createMediaStreamSource(this.micAudioStream),this.audioCtx=this.inputStreamNode.context,this.onGraphSetupWithInputStream&&this.onGraphSetupWithInputStream(this.inputStreamNode),this.inputStreamNode.connect(this.micGainNode),this.micGainNode.gain.setValueAtTime(this.config.micGain,this.audioCtx.currentTime);let n=this.micGainNode;this.dynamicsCompressorNode&&(this.micGainNode.connect(this.dynamicsCompressorNode),n=this.dynamicsCompressorNode),this.state="recording",this.processorNode?(n.connect(this.processorNode),this.processorNode.connect(this.outputGainNode),this.processorNode.onaudioprocess=e=>this._onAudioProcess(e)):n.connect(this.outputGainNode),this.analyserNode&&n.connect(this.analyserNode),this.outputGainNode.connect(this.destinationNode),this.config.usingMediaRecorder?(this.mediaRecorder=new MediaRecorder(this.destinationNode.stream,{mimeType:this.encoderMimeType||"audio/wav"}),this.mediaRecorder.addEventListener("dataavailable",(e=>this._onDataAvailable(e))),this.mediaRecorder.addEventListener("error",(e=>this._onError(e))),this.mediaRecorder.start(t)):(this.outputGainNode.gain.setValueAtTime(0,this.audioCtx.currentTime),t&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),this.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),t)))},this._onAudioProcess=e=>{this.config.broadcastAudioProcessEvents&&this.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:e.inputBuffer,outputBuffer:e.outputBuffer}})),this.config.usingMediaRecorder||"recording"===this.state&&(this.config.broadcastAudioProcessEvents?this.encoderWorker.postMessage(["encode",e.outputBuffer.getChannelData(0)]):this.encoderWorker.postMessage(["encode",e.inputBuffer.getChannelData(0)]))},this.stopRecording=()=>{"inactive"!==this.state&&(this.config.usingMediaRecorder?(this.state="inactive",this.mediaRecorder.stop()):(this.state="inactive",this.encoderWorker.postMessage(["dump",this.audioCtx.sampleRate]),clearInterval(this.slicing)))},this._onDataAvailable=e=>{if(this.chunks.push(e.data),this.chunkType=e.data.type,"inactive"!==this.state)return;const t=new Blob(this.chunks,{type:this.chunkType}),n=URL.createObjectURL(t),i={ts:(new Date).getTime(),blobUrl:n,mimeType:t.type,size:t.size};this.chunks=[],this.chunkType=null,this.destinationNode&&(this.destinationNode.disconnect(),this.destinationNode=null),this.outputGainNode&&(this.outputGainNode.disconnect(),this.outputGainNode=null),this.analyserNode&&(this.analyserNode.disconnect(),this.analyserNode=null),this.processorNode&&(this.processorNode.disconnect(),this.processorNode=null),this.encoderWorker&&(this.encoderWorker.postMessage(["close"]),this.encoderWorker=null),this.dynamicsCompressorNode&&(this.dynamicsCompressorNode.disconnect(),this.dynamicsCompressorNode=null),this.micGainNode&&(this.micGainNode.disconnect(),this.micGainNode=null),this.inputStreamNode&&(this.inputStreamNode.disconnect(),this.inputStreamNode=null),this.config.stopTracksAndCloseCtxWhenFinished&&(this.micAudioStream.getTracks().forEach((e=>e.stop())),this.micAudioStream=null,this.audioCtx.close(),this.audioCtx=null),this.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:i}}))},this._onError=e=>{console.log("error",e),this.em.dispatchEvent(new Event("error"))},window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:void 0!==e.broadcastAudioProcessEvents&&e.broadcastAudioProcessEvents,createAnalyserNode:void 0!==e.createAnalyserNode&&e.createAnalyserNode,createDynamicsCompressorNode:void 0!==e.createDynamicsCompressorNode&&e.createDynamicsCompressorNode,forceScriptProcessor:void 0!==e.forceScriptProcessor&&e.forceScriptProcessor,manualEncoderId:void 0!==e.manualEncoderId?e.manualEncoderId:"wav",micGain:void 0!==e.micGain?e.micGain:1,processorBufferSize:void 0!==e.processorBufferSize?e.processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:void 0===e.stopTracksAndCloseCtxWhenFinished||e.stopTracksAndCloseCtxWhenFinished,usingMediaRecorder:void 0!==e.usingMediaRecorder?e.usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:void 0===e.enableEchoCancellation||e.enableEchoCancellation,sampleRate:void 0!==e.sampleRate?e.sampleRate:44100,onRecording:e.onRecording,onAudioPress:e.onAudioPress},e.onRecording&&(this.recordingFn=t=>e.onRecording(t),this.em.addEventListener("recording",this.recordingFn)),e.onAudioProcesss&&(this.onAudioProcessFn=t=>e.onAudioProcesss(t),this.em.addEventListener("onaudioprocess",this.onAudioProcessFn))}}var g=n(27249),x=n(97607),b=n(22963),v=n.n(b),y=n(88016),C=n(30009);const k=C.default.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    margin: auto;
`,w=C.default.div`
  font-family: 'Biko';
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  font-weight: 600;
`,R=C.default.div`
  font-family: 'Source Sans Pro';
  text-align: center;
  line-height: 25px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 30px;
`;var S=n(70579);v().setAppElement("#root");const N=i.memo((e=>{let{modalTitle:t,children:n,onConfirm:i,...o}=e;const{t:r}=(0,s.B)();return(0,S.jsx)(v(),{...o,style:{content:{height:"281px",maxWidth:"348px",margin:"auto",borderRadius:"10px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:(0,S.jsxs)(k,{className:"ModalBody",children:[(0,S.jsx)(w,{children:t}),(0,S.jsx)(R,{children:n}),(0,S.jsx)(y.A,{onClick:i,dark:!0,children:r("recordingsIntroduction:retryButton","Retry")})]})})}));const A=n.p+"static/media/start.e0d4d3a638af95d54e24a44c68dee21a.svg";var T=n(46716),E=n(68212);const j=C.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`,M=C.default.div`
  display:flex;
  justify-content: space-between;
  width: 144px;
  margin: auto;
`,B=C.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,U=C.default.p`
  font-size: 14px;
  color: ${E.Tj.lightDarkGray};
  margin-top: 8px;
  margin-bottom: 0px;
`,F=C.default.button`
  background-color: ${E.Tj.purple};
  width: 56px;
  height: 56px;
  position: relative;
  outline: none !important;
  border: none;
  border-radius: 50%;
  padding: 0;
  transition: background-color 0.25s;
  opacity: ${e=>e.disabled||e.opacity?"0.5":"1"};

  @supports not (-webkit-touch-callout: none) {
    /* CSS for other than iOS devices */
    -webkit-tap-highlight-color: transparent;
  }

  &:active {
    background-color: ${E.Tj.purple};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 1;
    border-radius: 50%;
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 66px;
    height: 66px;
  }
`,$=C.default.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.25s;
`,I=(0,C.default)($)`
  width: 27px;
  height: 27px;
`,_=(0,C.default)($)`
  width: 15px;
  height: 15px;
`,L=C.default.div`
  width: 70px;
  height: 41px;
  font-size: 1.25rem;
  color: ${E.Tj.purple};
  font-weight: bold;
  font-family: 'Source Sans Pro';
  border: 1px solid ${E.Tj.purple};
  border-radius: 15px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin-bottom: 28px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1.75rem;
    margin-top: 22px;
  }
`,D=C.default.div`
  font-size: 16px;
  line-height: 20px;
  color: ${E.Tj.red};
  font-family: 'Source Sans Pro';
  display: flex; 
  margin-left: 20px;
  margin-top:10px;
`,P=C.default.p`
  visibility: ${e=>e.show?"flex":"hidden"};
`,z={usingMediaRecorder:!1,sampleRate:48e3,manualEncoderId:"wav",processorBufferSize:2048},G=e=>{let{className:t="",maxTimeInSeconds:n=30,onNewRecord:o,delay:r=500,recordingFile:a}=e;const{t:c}=(0,s.B)(),d=i.useRef(),l=i.useRef(0),h=i.useRef(),p=i.useRef(),m=i.useRef(),[b,v]=i.useState(!0),[y,C]=i.useState(),[k,w]=i.useState(!1),[R,E]=i.useState(!1),[$,G]=i.useState(!1),W=i.useCallback((e=>{l.current+=1;const{inputBuffer:t,outputBuffer:n}=e.detail;for(let i=0;i<n.numberOfChannels;i+=1){const e=t.getChannelData(i),o=n.getChannelData(i);for(let n=0;n<t.length;n+=1)o[n]=e[n]}}),[]),O=i.useCallback((async e=>{const{detail:t}=e,{recording:n}=t,i=await fetch(n.blobUrl).then((e=>e.blob())),r=`Filename.${z.manualEncoderId}`,s=g.A.blobToFile(i,r),a=g.A.sizeAsHuman(s.size,!0);o(s,a)}),[o]);i.useEffect((()=>{d.current=new f({...z,onRecording:O,onAudioProcesss:W});const e={audio:{echoCancellation:d.current.config.enableEchoCancellation}};if(navigator.mediaDevices.getUserMedia(e).then((()=>{v(!0)})).catch((()=>{v(!1)})),a){const e=a;if(e.size){const t=new Audio(URL.createObjectURL(e));t.load();const n=async()=>{t.removeEventListener("loadedmetadata",n),(0,x.D)(t,!0).then((e=>{var t;null===(t=h.current)||void 0===t||t.setTime(1e3*e)}))};t.addEventListener("loadedmetadata",n)}}return()=>{d.current&&d.current.cleanup()}}),[]);const V=i.useCallback((()=>{d.current&&(l.current=0,d.current.startRecording().then((()=>{var e;(C(!0),E(!1),h.current)&&(h.current.reset(),null===(e=h.current)||void 0===e||e.setTime(0),h.current.start())})).catch((e=>console.error("ERROR",e))))}),[]),H=i.useCallback((()=>{d.current&&(d.current.stopRecording(),C(!1),h.current&&(h.current.getTime()/1e3<2&&E(!0),h.current.stop()))}),[]),Z=i.useCallback((e=>e<10?`0${e}`:e),[]),Y=e=>{"touches"in e||e.preventDefault()},q=i.useCallback((e=>{e.target&&(e.target.addEventListener("touchend",Y,{passive:!1}),m.current=e.target),p.current=setTimeout((()=>{w(!0),G(!0),E(!1)}),r)}),[r]),K=i.useCallback((()=>{p.current&&clearTimeout(p.current),$&&w(!1),G(!1),m.current&&m.current.removeEventListener("touchend",Y)}),[$]);return(0,S.jsxs)(j,{className:t,children:[(0,S.jsxs)(D,{children:[!R&&(0,S.jsx)(P,{show:k,children:c(y?"recordingsIntroduction:releaseButtonStop":"recordingsIntroduction:releaseButtonStart")}),(0,S.jsx)(N,{isOpen:R,modalTitle:"Oops.",onConfirm:V,children:c("recordingsIntroduction:shortRecording")})]}),(0,S.jsx)(L,{children:(0,S.jsxs)(u(),{ref:h,startImmediately:!1,checkpoints:[{time:1e3*n,callback:H}],children:[(0,S.jsx)(u().Minutes,{}),":",(0,S.jsx)(u().Seconds,{formatValue:Z})]})}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(B,{children:[(0,S.jsx)(F,{disabled:!b||y,onClick:V,onMouseDown:q,onMouseUp:K,onTouchStart:q,onTouchEnd:K,onMouseLeave:K,children:(0,S.jsx)(I,{src:A,alt:"Start"})}),(0,S.jsx)(U,{children:c("recordingsIntroduction:recordCough.record")})]}),(0,S.jsxs)(B,{children:[(0,S.jsx)(F,{disabled:!b||!y,onClick:H,onMouseDown:q,onMouseUp:K,onTouchStart:q,onTouchEnd:K,onMouseLeave:K,children:(0,S.jsx)(_,{src:T.A,alt:"Stop"})}),(0,S.jsx)(U,{children:c("recordingsIntroduction:recordCough.stop")})]})]})]})},W=i.memo(G);var O=n(66986);const V=n.p+"static/media/upload.21eec1c7264cc6865ab89f22a220cfdf.svg";var H=n(21805);const Z=d.Ik({recordingFile:d.gl().required("ERROR.FILE_REQUIRED").test("fileSize","ERROR.FILE_SIZE",(e=>{if(e){const t=e,{size:n}=t;return n<=1024**3*5}return!!e})).test("fileDuration","ERROR.FILE_DURATION",(async e=>{if(e){const t=e,n=new Audio(URL.createObjectURL(t));n.load(),await new Promise((e=>n.addEventListener("loadedmetadata",e)));return await new Promise((e=>{n.duration!==1/0&&e(n.duration),n.addEventListener("durationchange",(()=>{n.remove(),e(n.duration)})),n.volume=0,n.currentTime=86400,n.play()}))>=2}return!!e}))}).defined(),Y=e=>{let{onNext:t,onManualUpload:n,defaultValues:o,currentLogic:d,action:l}=e;const{Portal:u}=r()({bindTo:document&&document.getElementById("wizard-buttons")}),{handleSubmit:h,control:p,getValues:m,formState:f}=(0,a.mN)({mode:"onChange",defaultValues:o,resolver:(0,c.t)(Z)}),{t:g}=(0,s.B)(),{isValid:x}=f,b=i.useRef(1);return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(H.MainContainer,{children:[(0,S.jsx)(H.MicContainer,{children:(0,S.jsx)(a.xI,{control:p,name:"recordingFile",render:e=>{let{onChange:t}=e;return(0,S.jsx)(W,{onNewRecord:t,recordingFile:null===o||void 0===o?void 0:o.recordingFile},b.current)}})}),(0,S.jsxs)(u,{children:[(0,S.jsx)(O.A,{invert:!0,leftLabel:g("recordingsRecord:next"),leftDisabled:!x,leftHandler:h(t)}),(0,S.jsxs)(H.UploadContainer,{onClick:()=>{l({[d]:{recordingFile:m("recordingFile")||null,uploadedFile:null}}),null===n||void 0===n||n()},children:[(0,S.jsx)(H.UploadImage,{src:V}),(0,S.jsx)(H.UploadText,{children:g("recordingsRecord:upload")})]})]})]})})},q=i.memo(Y)},21805:(e,t,n)=>{n.r(t),n.d(t,{MainContainer:()=>a,MicContainer:()=>d,StopImg:()=>p,Text:()=>c,UploadContainer:()=>l,UploadImage:()=>u,UploadText:()=>h});var i=n(30009),o=n(94748),r=n(68212),s=n(46716);const a=i.default.div`
  padding: 0px 0px;
`,c=(0,i.default)(o.L_)`
  color: ${e=>e.theme.colors.darkBlack};
  margin-bottom: 2px;
  text-align: left;

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    max-width: 470px;
    margin: 0 auto;
    font-size: 16px;
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    @media (orientation: portrait) {
      margin-bottom: 248px;
    }

    @media (orientation: landscape) {
      margin-bottom: 24px;
    }
  }
`,d=i.default.div``,l=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin: 20px auto;
  width: fit-content;


  @media screen and (${e=>e.theme.breakpoints.tablet}){
    padding: 0px 22px;
    margin: 22px auto;
  }
`,u=i.default.img`
  cursor: pointer;
  width: 13px;
  height: 12px;
  margin-right: 7px;
`,h=i.default.div`
  cursor: pointer;
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 24px;
  color: ${r.Tj.darkBlack};
`,p=i.default.img.attrs((()=>({src:s.A})))`
  display: inline;
  height: 10px;
  margin: 0px 2px 4px;
`},27249:(e,t,n)=>{n.d(t,{A:()=>i});const i={sizeAsHuman:(e,t)=>{const n=t?1e3:1024;if(Math.abs(e)<n)return`${e} B`;const i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let o=-1;do{e/=n,++o}while(Math.abs(e)>=n&&o<i.length-1);return`${e.toFixed(1)} ${i[o]}`},blobToFile:(e,t)=>{const n=e;return n.lastModifiedDate=new Date,n.name=t,e}}},46716:(e,t,n)=>{n.d(t,{A:()=>i});n(65043);const i=n.p+"static/media/stop.e6f44abda4addc2da78a196e9ef67d0a.svg"},66986:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(65043),o=n(88016);const r=n(30009).default.div`
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
`;var s=n(70579);const a=i.memo((e=>{let{invert:t=!1,leftLabel:n,leftDisabled:i,leftHandler:a,rightLabel:c,rightDisabled:d,rightHandler:l}=e;return(0,s.jsxs)(r,{children:[(0,s.jsx)(o.A,{dark:t,disabled:i,onClick:a,children:n}),c&&l&&(0,s.jsx)(o.A,{dark:!t,disabled:d,onClick:l,children:c})]})})),c=i.memo(a)},88016:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(65043),o=n(30009),r=n(68212);const s=o.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:n}=e;const i=n?r.Tj.purple_50:r.Tj.purple;return t?`\n    background-color: ${i};\n    color: ${r.Tj.white};\n    border: none;\n  `:`\n    background-color: ${r.Tj.white};\n    color: ${i};\n    border: 1px solid ${i};\n  `}}
`;var a=n(70579);const c=i.memo((e=>{let{children:t,...n}=e;return(0,a.jsx)(s,{type:"button",...n,children:t})}))},94748:(e,t,n)=>{n.d(t,{Od:()=>a,L_:()=>s});var i=n(30009),o=n(68212);const r=i.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,s=i.default.div`
  ${r}
  color: ${e=>{let{dark:t}=e;return t?o.Tj.darkBlack:o.Tj.black}};
  ${e=>e.fontSize?`font-size: ${e.fontSize};`:""}
`,a=i.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${o.Tj.darkBlack};
`},97607:(e,t,n)=>{n.d(t,{D:()=>o});var i=n(53167);function o(e,t){return new Promise((n=>{e.duration===1/0||i.nr&&!(i.nr&&e.duration>0)?(e.addEventListener("durationchange",(()=>{t?e.remove():(e.pause(),e.volume=1,e.currentTime=0),n(e.duration)})),e.currentTime=86400,e.play()):n(e.duration)}))}}}]);
//# sourceMappingURL=737.104fa452.chunk.js.map
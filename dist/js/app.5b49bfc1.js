(function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"327b":function(e,t,n){"use strict";var a=n("bffd"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"touch",rawName:"v-touch:start",value:e.startHandler,expression:"startHandler",arg:"start"},{name:"touch",rawName:"v-touch:touchhold",value:e.touchHoldHandler,expression:"touchHoldHandler",arg:"touchhold"}],attrs:{id:"app"}},[n("div",{staticClass:"noselect",attrs:{id:"pixiApp"}}),n("canvas",{staticClass:"noselect",attrs:{id:"canvas"}}),n("div",{staticClass:"example h-full"},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},["home"===e.state.screen||"register"===e.state.screen?n("PageHome"):"loadingExperience"===e.state.screen?n("PageLoading"):"experience"===e.state.screen?n("PageExperience",{ref:"experience"}):e._e()],1),n("transition",{attrs:{name:"fade"}},["register"===e.state.screen?n("div",{staticClass:"inline-block"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.year_birth,expression:"year_birth"}],attrs:{type:"number",min:"1900",max:"2020",placeholder:"Year of birth"},domProps:{value:e.year_birth},on:{input:function(t){t.target.composing||(e.year_birth=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],attrs:{type:"text",placeholder:"Language"},domProps:{value:e.language},on:{input:function(t){t.target.composing||(e.language=t.target.value)}}})])]):e._e()])],1)])},i=[],s=(n("b0c0"),n("1e5c")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-center padding-sides"},[a("video",{ref:"full",staticClass:"w-video",attrs:{preload:"",autoplay:"",muted:"",loop:"",poster:n("c49c")},domProps:{muted:!0}},[a("source",{attrs:{src:n("7594"),type:"video/mp4"}}),e._v(" Sorry, your browser doesn't support embedded videos. ")]),a("div",{staticClass:"title-container w-full noselect"},[a("div",[a("h2",{ref:"element2",staticClass:"title font-light absolute animation2"},[e._v(" An inmersive experience to find yourself. ")])]),a("div",[a("h3",{ref:"element",staticClass:"sub-title absolute font-regular animation"},[a("span",[e._v("Coming Soon")])])])]),a("div",{staticClass:"bottom noselect"},[a("span",{ref:"element3",staticClass:"animation3 regular",attrs:{href:"https://paypal.me/pools/c/8kxzH2J8F0"}},[e._v(" Hold anywhere to continue ")])])])},l=[],c=(n("ac1f"),n("5319"),{name:"PageHome",mounted:function(){this.$refs.element2.innerHTML=this.$refs.element2.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),this.$refs.element.innerHTML=this.$refs.element.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),this.$refs.element3.innerHTML=this.$refs.element3.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),this.$anime({targets:".animation2 .letter",keyframes:[{opacity:1},{opacity:0}],easing:"easeInOutQuad",duration:7500,delay:this.$anime.stagger(190),loop:!0}),this.$anime({targets:".animation .letter",keyframes:[{opacity:1},{opacity:0}],easing:"easeInOutQuad",duration:8500,delay:this.$anime.stagger(220,{start:4800}),loop:!0}),this.$anime({targets:".animation3 .letter",keyframes:[{opacity:1},{opacity:0}],easing:"easeInOutQuad",duration:8500,delay:this.$anime.stagger(220,{start:2200}),loop:!0})}}),u=c,d=(n("327b"),n("2877")),p=Object(d["a"])(u,o,l,!1,null,"dc50709e",null),m=p.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Loading experience")])])}],h={name:"PageLoading"},v=h,b=Object(d["a"])(v,f,g,!1,null,null,null),y=b.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("video",{ref:"video1",class:{paused:e.pausedVideo},attrs:{preload:""}},[a("source",{attrs:{src:n("a9b9"),type:"video/mp4"}}),e._v(" Sorry, your browser doesn't support embedded videos. ")]),a("button",{staticClass:"interactive-circle-button",on:{click:function(t){return e.togglePlayPause()}}},[a("svg",{staticClass:"circle",attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"6"}})])])])},w=[],_={name:"PageExperience",data:function(){return{pausedVideo:!1,endedVideo:!1}},mounted:function(){var e=this;this.play(),this.videoElement.addEventListener("ended",(function(){e.ended()}))},computed:{videoElement:function(){return this.$refs.video1}},methods:{play:function(){console.log("PLAY"),this.videoElement.play()},togglePlayPause:function(){!1===this.endedVideo&&(!1===this.videoElement.paused?(this.videoElement.pause(),this.pausedVideo=!0):(this.videoElement.play(),this.pausedVideo=!1))},ended:function(){console.log("Video ended"),this.endedVideo=!0}}},P=_,C=(n("988b"),Object(d["a"])(P,x,w,!1,null,"33376e15",null)),$=C.exports,E=n("22a2"),H={name:"app",data:function(){return{fullscreen:!1,name:"Santi",year_birth:"1997",language:"",state:{screen:"home"},sound1:"",sound2:""}},components:{PageHome:m,PageLoading:y,PageExperience:$},mounted:function(){"register"===this.state.screen&&console.log("You are registering right?"),this.sound1=new s["Howl"]({src:["sounds/begining_web.webm","sounds/begining_web.mp3"],preload:!0,loop:!0}),this.sound2=new s["Howl"]({src:["sounds/loading_experience.webm","sounds/loading_experience.mp3"],preload:!0,loop:!0}),this.sound1.play(),this.sound1.fade(0,1,2e3)},methods:{enterFullscreen:function(){this.$fullscreen.enter(this.$el.querySelector(".example"),{wrap:!1,background:"#000"})},fullscreenChange:function(e){this.fullscreen=e},register:function(){var e=this;this.name&&this.year_birth&&this.language&&(console.log("Form full"),this.state.screen="loadingExperience",setTimeout((function(){e.state.screen="experience",e.sound2.fade(1,0,2e3)}),6400))},startHandler:function(){console.log("started click")},touchHoldHandler:function(){console.log("longpress"),"home"===this.state.screen?this.state.screen="register":"register"===this.state.screen&&(this.sound1.fade(1,0,2e3),this.sound2.play(),this.sound2.fade(0,1,2e3),this.register())},drawCanvas:function(){var e=document.getElementById("pixiApp"),t=new E["a"]({antialias:!0,transparent:!0,resolution:window.devicePixelRatio,autoResize:!0,resizeTo:window});e.appendChild(t.view),t.renderer.backgroundColor=398905;var n=new E["c"]("Basic text in pixi");n.x=50,n.y=100;var a=(new E["b"]).beginFill(65280).drawRect(40,40,200,200);a.filters=[new E["d"].BlurFilter],t.stage.addChild(a)},filmgrain:function(){var e,t,n,a,r,i,s=document.getElementById("canvas"),o=80,l=1,c=1,u=3,d=12,p=o*o*4,m=0;function f(){e=s.width=s.clientWidth,t=s.height=s.clientHeight,n=s.getContext("2d"),n.scale(l,c)}function g(){a=document.createElement("canvas"),a.width=o,a.height=o,r=a.getContext("2d"),i=r.createImageData(o,o)}function h(){for(var e,t=0;t<p;t+=4)e=255*Math.random()|0,i.data[t]=e,i.data[t+1]=e,i.data[t+2]=e,i.data[t+3]=d;r.putImageData(i,0,0)}function v(){n.clearRect(0,0,e,t),n.fillStyle=n.createPattern(a,"repeat"),n.fillRect(0,0,e,t)}function b(){++m%u===0&&(h(),v()),requestAnimationFrame(b)}f(),g(),requestAnimationFrame(b)}}},O=H,j=(n("034f"),Object(d["a"])(O,r,i,!1,null,null,null)),S=j.exports,k=n("01e8"),L=n.n(k),M=n("03cd"),T=n.n(M),V=n("0086"),F=n.n(V);a["a"].use(L.a),a["a"].use(T.a),a["a"].use(F.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(S)}}).$mount("#app")},7594:function(e,t,n){e.exports=n.p+"media/umbra.67e3e8ee.mp4"},"85ec":function(e,t,n){},"988b":function(e,t,n){"use strict";var a=n("d87a"),r=n.n(a);r.a},a9b9:function(e,t,n){e.exports=n.p+"media/video1.c1ef13f2.mp4"},bffd:function(e,t,n){},c49c:function(e,t,n){e.exports=n.p+"img/umbra_poster.7f039b5b.jpg"},d87a:function(e,t,n){}});
//# sourceMappingURL=app.5b49bfc1.js.map
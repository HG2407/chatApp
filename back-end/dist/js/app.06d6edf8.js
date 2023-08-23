(function(){"use strict";var e={7288:function(e,t,s){var n=s(9242),r=s(3396);function o(e,t,s,n,o,i){const a=(0,r.up)("Chat_App");return(0,r.wg)(),(0,r.j4)(a)}var i=s(7139);const a={class:"display_box",style:{}},u={style:{height:"32rem"},class:"message-box",ref:"message-box"};function c(e,t,s,o,c,l){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.divNumber,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"message",key:e},(0,i.zw)(c.storedMessage[e-1]),1)))),128))],512),(0,r.wy)((0,r._)("input",{type:"text",id:"messageInput",placeholder:"Write a message...",style:{width:"100%",height:"2rem","border-radius":"0.5rem","margin-top":"1rem"},onKeydown:t[0]||(t[0]=(0,n.D2)((e=>l.send()),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=e=>c.messageInput=e)},null,544),[[n.nr,c.messageInput]]),(0,r._)("button",{style:{position:"absolute",bottom:"1%",right:"1%"},onClick:t[2]||(t[2]=(...e)=>l.send&&l.send(...e))},"Send")])}s(7658);var l=s(7851),f={name:"Chat_App",data(){return{divNumber:0,messageInput:"",storedMessage:[],socket:null,userName:""}},methods:{send(){this.socket.emit("messageFromClient",this.messageInput),this.divNumber++,this.storedMessage.push(this.messageInput),this.$nextTick((()=>{this.$refs["message-box"].scrollTop=this.$refs["message-box"].scrollHeight})),this.messageInput=""}},created(){this.socket=(0,l.io)("http://localhost:8000"),this.socket.on("messageFromServer",(e=>{this.divNumber++,this.storedMessage.push(e),this.$nextTick((()=>{this.$refs["message-box"].scrollTop=this.$refs["message-box"].scrollHeight}))})),this.socket.on("messageHistory",(e=>{this.divNumber=e.length,this.storedMessage=e,this.$nextTick((()=>{this.$refs["message-box"].scrollTop=this.$refs["message-box"].scrollHeight}))}))},beforeUnmount(){this.socket.emit("disconnected")}},d=s(89);const h=(0,d.Z)(f,[["render",c],["__scopeId","data-v-a6a8acf4"]]);var p=h,m={name:"App",components:{Chat_App:p}};const g=(0,d.Z)(m,[["render",o]]);var b=g;(0,n.ri)(b).mount("#app")}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,n,r,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[u])}))?n.splice(u--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],a=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(u)var l=u(s)}for(t&&t(n);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(7288)}));n=s.O(n)})();
//# sourceMappingURL=app.06d6edf8.js.map
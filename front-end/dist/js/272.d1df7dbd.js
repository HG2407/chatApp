"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[272],{2272:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var o=t(3396),r=t(2268),a=t(9242);const i={class:"display_box",style:{}},m={style:{height:"32rem"},class:"message-box",ref:"message-box"},n={class:"userName"};function h(e,s,t,h,g,d){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("p",null,(0,r.zw)(g.roomName),1),(0,o._)("div",i,[(0,o._)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.divNumber,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"message",key:e},[(0,o._)("p",n,(0,r.zw)(g.storedMessage[e-1].name),1),(0,o.Uk)(" "+(0,r.zw)(g.storedMessage[e-1].msg),1)])))),128))],512),(0,o.wy)((0,o._)("input",{type:"text",id:"messageInput",placeholder:"Write a message...",style:{width:"100%",height:"2rem","border-radius":"0.5rem","margin-top":"1rem"},onKeydown:s[0]||(s[0]=(0,a.D2)((e=>d.send()),["enter"])),"onUpdate:modelValue":s[1]||(s[1]=e=>g.msgInput=e)},null,544),[[a.nr,g.msgInput]]),(0,o._)("button",{style:{position:"absolute",bottom:"1%",right:"1%"},onClick:s[2]||(s[2]=(...e)=>d.send&&d.send(...e))},"Send")])],64)}t(7658);var g=t(3800),d={name:"roomPage",data(){return{socket:null,divNumber:0,storedMessage:[],msgInput:"",userName:this.$store.state.userName||localStorage.getItem("userName"),roomName:""}},created(){(0,g.m)(),this.socket=g.W,localStorage.setItem("userName",this.userName),this.socket.emit("roomData",{event:"joinRoom",id:this.$route.params.id}),this.socket.emit("roomData",{event:"sendRoomMsgHistory",roomId:this.$route.params.id}),this.socket.on("roomMsgHistory",(e=>{this.divNumber=e.msgHistory.length,this.storedMessage=e.msgHistory,this.roomName=e.roomName,this.$nextTick((()=>{this.$refs["message-box"].scrollTop=this.$refs["message-box"].scrollHeight}))})),this.socket.on("messageToRoomFromServer",(e=>{this.divNumber++,this.storedMessage.push(e),this.$nextTick((()=>{this.$refs["message-box"].scrollTop=this.$refs["message-box"].scrollHeight}))}))},methods:{send(){this.socket.emit("roomData",{event:"messageTyped",name:this.userName,msg:this.msgInput,roomId:this.$route.params.id}),this.divNumber++,this.storedMessage.push({name:this.userName,msg:this.msgInput}),this.$nextTick((()=>{this.$refs["message-box"].scrollTop=this.$refs["message-box"].scrollHeight})),this.msgInput=""}}},u=t(89);const l=(0,u.Z)(d,[["render",h],["__scopeId","data-v-ba23751a"]]);var c=l}}]);
//# sourceMappingURL=272.d1df7dbd.js.map
"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[276],{2276:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(3396),u=n(9242);function o(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"enter your username","onUpdate:modelValue":t[0]||(t[0]=e=>a.userName=e)},null,512),[[u.nr,a.userName]]),(0,r._)("button",{class:"join",onClick:t[1]||(t[1]=(...e)=>s.join&&s.join(...e))},"Join")])}n(7658);var a={name:"Home",data(){return{userName:""}},created(){},methods:{join(){this.$store.commit("setUserName",this.userName),this.userName="",this.$router.push({path:"/chatRoom"})}}},s=n(89);const i=(0,s.Z)(a,[["render",o]]);var m=i}}]);
//# sourceMappingURL=276.68cfafb9.js.map
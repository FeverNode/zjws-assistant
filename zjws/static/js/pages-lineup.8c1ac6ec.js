(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lineup"],{"07f7":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".general[data-v-4a9649da]{position:relative}.general-img[data-v-4a9649da]{width:%?120?%;height:%?120?%}.general-dot[data-v-4a9649da]{top:0;right:0;width:%?36?%;height:%?36?%;position:absolute;line-height:%?36?%}.general-yuanzhu[data-v-4a9649da]{left:%?36?%;bottom:%?-10?%;padding:%?4?% %?8?%;position:absolute}.cu-item[data-v-4a9649da]{flex:unset!important;width:16.66%!important}.w-100 .cu-tag[data-v-4a9649da]{height:auto;padding:%?12?%;line-height:%?28?%;white-space:pre-wrap}uni-rich-text span[data-v-4a9649da]{color:red}",""]),t.exports=e},"30f7":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},i("7a76"),i("c9b5")},3471:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,r=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return u=t.done,t},e:function(t){r=!0,l=t},f:function(){try{u||null==i["return"]||i["return"]()}finally{if(r)throw l}}}},i("01a2"),i("e39c"),i("bf0f"),i("844d"),i("18f7"),i("de6c"),i("7a76"),i("c9b5");var n=function(t){return t&&t.__esModule?t:{default:t}}(i("5d6b"))},"45bd":function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("3471")),s=n(i("b7c7"));i("bd06"),i("aa9c"),i("f7a5"),i("8f71"),i("bf0f"),i("dd2b"),i("4100");var l={data:function(){return{hetiji:[],pugong:[],nuqi:[],zhuiji:[],generals:[null,null,null,null,null]}},onLoad:function(){var t=this;uni.$on("selectGeneral",(function(e,i){var n=t.generals.findIndex((function(t){return t&&t.name==e.name}));n>-1&&t.$set(t.generals,n,t.generals[i]),t.$set(t.generals,i,e),t.$closePage()})),this.getArms()},onUnload:function(){uni.$off("selectGeneral")},methods:{getCombinations:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length-1;if(i===n)t.push((0,s.default)(e));else for(var a=i;a<=n;a++){var l=[e[a],e[i]];e[i]=l[0],e[a]=l[1],this.getCombinations(t,e,i+1,n);var u=[e[a],e[i]];e[i]=u[0],e[a]=u[1]}},getResult:function(){var t=!!this.generals.slice(4)[0],e=this.generals.filter((function(t){return t}));if(e.length<3)return this.$toast("至少选择3名将领");var i=[],n=[],l=[],u=[];this.$loading("正在计算",500),this.getCombinations(u,(0,s.default)(e));for(var r=0;r<e.length;r++){var o=e[r];if("倒地"==o.skills.pugong||"浮空"==o.skills.pugong||"击退"==o.skills.pugong)if(r==e.length-1&&t);else{var c,f=(0,a.default)(u);try{for(f.s();!(c=f.n()).done;){for(var d=c.value,v=[{icon:o.name,text:o.skills.pugong}],h=0;h<d.length;h++){var g=d[h],p=d[h+1];if("随机"==g.skills.zhuiji[0])!p||"倒地"!=p.skills.zhuiji[0]&&"浮空"!=p.skills.zhuiji[0]&&"击退"!=p.skills.zhuiji[0]?v.push({icon:g.name,text:"随机"}):v.push({icon:g.name,text:p.skills.zhuiji[0]});else{if(g.skills.zhuiji[0]!=v[v.length-1].text)break;v.push({icon:g.name,text:g.skills.zhuiji[1]})}}i.push(v)}}catch(P){f.e(P)}finally{f.f()}}if("倒地"==o.skills.nuqi||"浮空"==o.skills.nuqi||"击退"==o.skills.nuqi||"随机"==o.skills.nuqi){var b,x=(0,a.default)(u);try{for(x.s();!(b=x.n()).done;){var m=b.value,w=void 0;w="随机"!=o.skills.nuqi||"倒地"!=m[0].skills.zhuiji[0]&&"浮空"!=m[0].skills.zhuiji[0]&&"击退"!=m[0].skills.zhuiji[0]?[{icon:o.name,text:o.skills.nuqi}]:[{icon:o.name,text:m[0].skills.zhuiji[0]}];for(var y=0;y<m.length;y++){var k=m[y],j=m[y+1];if("随机"==k.skills.zhuiji[0])!j||"倒地"!=j.skills.zhuiji[0]&&"浮空"!=j.skills.zhuiji[0]&&"击退"!=j.skills.zhuiji[0]?w.push({icon:k.name,text:"随机"}):w.push({icon:k.name,text:j.skills.zhuiji[0]});else{if(k.skills.zhuiji[0]!=w[w.length-1].text)break;w.push({icon:k.name,text:k.skills.zhuiji[1]})}}n.push(w)}}catch(P){x.e(P)}finally{x.f()}}if("敌方追击"==o.skills.zhuiji[0]){var _,C=(0,a.default)(u);try{for(C.s();!(_=C.n()).done;){for(var z=_.value,$=[{icon:o.name,text:o.skills.zhuiji[1]}],M=0;M<z.length;M++){var q=z[M],O=z[M+1];if(q.name==o.name)break;if("随机"==q.skills.zhuiji[0])!O||"倒地"!=O.skills.zhuiji[0]&&"浮空"!=O.skills.zhuiji[0]&&"击退"!=O.skills.zhuiji[0]?$.push({icon:q.name,text:"随机"}):$.push({icon:q.name,text:O.skills.zhuiji[0]});else{if(q.skills.zhuiji[0]!=$[$.length-1].text)break;$.push({icon:q.name,text:q.skills.zhuiji[1]})}}l.push($)}}catch(P){C.e(P)}finally{C.f()}}}this.pugong=i.sort((function(t,e){return e.length-t.length})).splice(0,5),this.nuqi=n.sort((function(t,e){return e.length-t.length})).splice(0,5),this.zhuiji=l.sort((function(t,e){return e.length-t.length})).splice(0,5)},getArms:function(){var t=this;this.$ajax({url:"arms.json"}).then((function(e){t.hetiji=e.filter((function(t){return"合体"==t.type}))}))}},computed:{_hetiji:function(){var t,e=[],i=(0,a.default)(this.hetiji);try{for(i.s();!(t=i.n()).done;){var n=t.value;if("龙卷风"==n.name)for(var s={},l=0;l<4;l++){var u=this.generals[l];if(u&&(s[u.details[2]]=(s[u.details[2]]||0)+1,3==s[u.details[2]])){e.push(n);break}}else{var r,o=0,c=this.generals.slice(0,4),f=(0,a.default)(n.generals);try{var d=function(){var t=r.value,i=c.findIndex((function(e){if(e)return"country"==t.key?t.value==e.details[2]:t.value==e[t.type]}));if(i>-1){if(++o==Math.min(n.generals.length,4))return e.push(n),"break";c.splice(i,1)}};for(f.s();!(r=f.n()).done;){var v=d();if("break"===v)break}}catch(h){f.e(h)}finally{f.f()}}}}catch(h){i.e(h)}finally{i.f()}return e}}};e.default=l},4733:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,n.default)(t)};var n=function(t){return t&&t.__esModule?t:{default:t}}(i("8d0b"))},"91c5":function(t,e,i){"use strict";i.r(e);var n=i("45bd"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"95e5":function(t,e,i){"use strict";var n=i("e627"),a=i.n(n);a.a},b7c7:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,n.default)(t)||(0,a.default)(t)||(0,s.default)(t)||(0,l.default)()};var n=u(i("4733")),a=u(i("d14d")),s=u(i("5d6b")),l=u(i("30f7"));function u(t){return t&&t.__esModule?t:{default:t}}},c5c7:function(t,e,i){"use strict";i.r(e);var n=i("f6d1"),a=i("91c5");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("95e5");var l=i("828b"),u=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"4a9649da",null,!1,n["a"],void 0);e["default"]=u.exports},d14d:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},i("01a2"),i("e39c"),i("bf0f"),i("844d"),i("18f7"),i("de6c"),i("08eb")},e627:function(t,e,i){var n=i("07f7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("cf2ebc06",n,!0,{sourceMap:!1,shadowMode:!1})},f6d1:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"app"},[i("NavBar",{staticClass:"bg-yellow",attrs:{title:"阵容搭配",back:!0}}),i("v-uni-view",{staticClass:"bg-yellow padding-xl flex flex-wrap justify-around"},[t._l(t.generals,(function(e,n){return i("v-uni-view",{key:n,staticClass:"general",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$openPage("generals?select="+n)}}},[i("v-uni-image",{staticClass:"general-img round bg-white",attrs:{src:e?"https://fevernode.github.io/zjws/img/"+e.name+".jpg":""}}),i("v-uni-view",e?{staticClass:"general-dot round bg-red text-center cuIcon-close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.$set(t.generals,n,null)}}}:{staticClass:"general-dot round bg-green text-center cuIcon-add"}),4==n?i("v-uni-view",{staticClass:"general-yuanzhu bg-grey text-xs"},[t._v("援助")]):t._e()],1)})),i("v-uni-view",{staticClass:"w-100 cu-capsule margin-top"},[i("v-uni-text",{staticClass:"cu-tag bg-grey"},[t._v("援")]),i("v-uni-rich-text",{staticClass:"cu-tag line-black flex-sub justify-start",attrs:{nodes:t.generals[4]?t.generals[4].skills.yuanzhu:""}})],1),i("v-uni-view",{staticClass:"w-100 bg-white text-center margin-top padding-sm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getResult.apply(void 0,arguments)}}},[t._v("开始计算")])],2),t._hetiji.length?i("v-uni-view",{staticClass:"bg-white padding padding-top-xs"},[i("v-uni-view",{staticClass:"cu-bar"},[i("v-uni-view",{staticClass:"action sub-title"},[i("v-uni-text",{staticClass:"text-xl text-bold text-green"},[t._v("合体技")]),i("v-uni-text",{staticClass:"bg-green"})],1)],1),i("v-uni-view",{staticClass:"flex justify-around margin-top-sm"},t._l(t._hetiji,(function(t,e){return i("v-uni-image",{key:e,staticClass:"general-img round",attrs:{src:"https://fevernode.github.io/zjws/img/"+t.name+".png"}})})),1)],1):t._e(),t.pugong.length?i("v-uni-view",{staticClass:"bg-white padding padding-top-xs"},[i("v-uni-view",{staticClass:"cu-bar"},[i("v-uni-view",{staticClass:"action sub-title"},[i("v-uni-text",{staticClass:"text-xl text-bold text-green"},[t._v("普攻起手")]),i("v-uni-text",{staticClass:"bg-green"})],1)],1),t._l(t.pugong,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-steps margin-top-sm"},t._l(e,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item text-sm"},[i("v-uni-image",{staticClass:"round",staticStyle:{width:"60rpx",height:"60rpx"},attrs:{src:"https://fevernode.github.io/zjws/img/"+e.icon+".jpg"}}),i("v-uni-view",[t._v(t._s(0==n?"起手":"接")),i("v-uni-text",{staticClass:"text-red"},[t._v(t._s(e.text))])],1)],1)})),1)}))],2):t._e(),t.nuqi.length?i("v-uni-view",{staticClass:"bg-white padding padding-top-xs"},[i("v-uni-view",{staticClass:"cu-bar"},[i("v-uni-view",{staticClass:"action sub-title"},[i("v-uni-text",{staticClass:"text-xl text-bold text-green"},[t._v("大招起手")]),i("v-uni-text",{staticClass:"bg-green"})],1)],1),t._l(t.nuqi,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-steps margin-top-sm"},t._l(e,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item text-sm"},[i("v-uni-image",{staticClass:"round",staticStyle:{width:"60rpx",height:"60rpx"},attrs:{src:"https://fevernode.github.io/zjws/img/"+e.icon+".jpg"}}),i("v-uni-view",[t._v(t._s(0==n?"起手":"接")),i("v-uni-text",{staticClass:"text-red"},[t._v(t._s(e.text))])],1)],1)})),1)}))],2):t._e(),t.zhuiji.length?i("v-uni-view",{staticClass:"bg-white padding padding-top-xs"},[i("v-uni-view",{staticClass:"cu-bar"},[i("v-uni-view",{staticClass:"action sub-title"},[i("v-uni-text",{staticClass:"text-xl text-bold text-green"},[t._v("敌方追击起手")]),i("v-uni-text",{staticClass:"bg-green"})],1)],1),t._l(t.zhuiji,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-steps margin-top-sm"},t._l(e,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item text-sm"},[i("v-uni-image",{staticClass:"round",staticStyle:{width:"60rpx",height:"60rpx"},attrs:{src:"https://fevernode.github.io/zjws/img/"+e.icon+".jpg"}}),i("v-uni-view",[t._v(t._s(0==n?"起手":"接")),i("v-uni-text",{staticClass:"text-red"},[t._v(t._s(e.text))])],1)],1)})),1)}))],2):t._e()],1)},a=[]}}]);
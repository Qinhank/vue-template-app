(function(e){function t(t){for(var n,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"21bb":function(e,t,r){"use strict";var n=r("2dad"),o=r.n(n);o.a},"2dad":function(e,t,r){},"415c":function(e,t,r){(function(t){var n=r("df7c"),o=8091;e.exports={title:"必派脚手架工具v0.1",port:3002,cdn:"http://bpcdn.hankqin.com",useCDN:!1,baseURL:"/api/v1",token:"authorization",isAutomaticSwitching2Mock:!1,swagger:{port:o,swaggerOptions:{url:"http://192.168.0.253:9003/v2/api-docs",outputPath:"./mock",blacklist:[]},filePath:"../api.js"},storageOption:{namespace:"bp-cli__",name:"ls",storage:"local"},proxy:{"/api/v1/":{target:"http://192.168.0.253:9003",changeOrigin:!0,pathRewrite:{"^/api/v1":"/api/v1.0"},secure:!1},"/api/mock/":{target:"http://192.168.0.254:".concat(o),changeOrigin:!0,secure:!1}},alias:{"@":n.resolve(t,"../src"),components:n.resolve(t,"../src/components"),vue$:"vue/dist/vue.esm.js","@config":n.resolve(t,"../static/config")}}}).call(this,"/")},"56d7":function(e,t,r){"use strict";r.r(t);r("c975"),r("ac1f"),r("466d"),r("841c"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("a026"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],c={},i=c,u=r("2877"),s=Object(u["a"])(i,o,a,!1,null,null,null),p=s.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("h2",[e._v("Bp-template-app")]),r("p",[e._v("作为必派的脚手架app模板")])])}],h={mounted:function(){}},v=h,g=(r("21bb"),Object(u["a"])(v,d,f,!1,null,null,null)),b=g.exports;n["a"].use(l["a"]);var m=[{path:"/",redirect:"/home"},{path:"/home",name:"home",meta:{title:"主题"},component:b}],y=new l["a"]({mode:"history",routes:m});y.beforeEach((function(e,t,r){r()}));var w=y,O=r("b970"),j=r("c16e"),P=r.n(j),_=(r("db4d"),r("d3b7"),r("5319"),r("5530")),k=r("bc3a"),x=r.n(k),B={terraceRecordFindPageByDevice:"/terrace/record/findPageByDevice",backgroundAuthLogin:"/background/auth/login",deviceDeviceSet:"/device/device/set",deviceRecordBatchCreate:"/device/record/batchCreate",terraceDeviceAdd:"/terrace/device/add",terraceDeviceCancel:"/terrace/device/cancel",terraceDeviceGet:"/terrace/device/get",terraceAuthLoginGetJsapiTicket:"/terrace/auth/login/getJsapiTicket",terraceAuthLoginLoginByWinxin:"/terrace/auth/login/loginByWinxin"},S=r("415c"),D=S.token,M=S.baseURL,$=function(e){return e.indexOf("http")>-1?e:B[e]?B[e]:(console.error("接口“".concat(e,"”不存在，请检查")),null)},A=x.a.create({baseURL:M,timeout:6e3});x.a.interceptors.request.use((function(e){return D&&(e.headers[D]=n["a"].ls.get(D)),e}),(function(e){console.log(e)}));var L=function(e,t,r){var n=e.data,o=n.unlogin,a=n.meta,c=n.data;o?(r.$router.replace({path:"/login",query:{path:r.$route.path}}),reject(e)):a.success,t(c)},C=function(e,t){t(e)};n["a"].prototype.$g=function(e,t,r){var n=this;return new Promise((function(o,a){if($(e)){var c=Object(_["a"])({method:"get",params:Object(_["a"])({},t,{timeStamp:Date.parse(new Date)}),url:$(e)},r);A(Object(_["a"])({},c)).then((function(e){L(e,o,n)})).catch((function(e){C(e,a)}))}else a()}))},n["a"].prototype.$p=function(e,t,r){var n=this;return new Promise((function(o,a){if($(e)){var c=Object(_["a"])({method:"post",url:$(e),data:t},r);A(Object(_["a"])({},c)).then((function(e){L(e,o,n)})).catch((function(e){C(e,a)}))}else a()}))};r("157a"),r("ac0f");var R=r("415c"),E=R.storageOption;n["a"].config.productionTip=!1,n["a"].use(O["a"]),n["a"].use(P.a,E),location.search&&location.search.indexOf("console=true")>-1&&new VConsole,n["a"].prototype.isMobile=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),n["a"].prototype.isWechat="micromessenger"==navigator.userAgent.toLowerCase().match(/micromessenger/i),new n["a"]({router:w,render:function(e){return e(p)}}).$mount("#app")},ac0f:function(e,t,r){}});
//# sourceMappingURL=app.dfb4eb37.js.map
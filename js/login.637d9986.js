(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"00d8":function(e,t){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,o=0;n<e.length;n++,o+=8)t[o>>>5]|=e[n]<<24-o%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],o=0;o<e.length;o+=3)for(var r=e[o]<<16|e[o+1]<<8|e[o+2],a=0;a<4;a++)8*o+6*a<=8*e.length?n.push(t.charAt(r>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],o=0,r=0;o<e.length;r=++o%4)0!=r&&n.push((t.indexOf(e.charAt(o-1))&Math.pow(2,-2*r+8)-1)<<2*r|t.indexOf(e.charAt(o))>>>6-2*r);return n}};e.exports=n})()},"044b":function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function o(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||o(e)||!!e._isBuffer)}},"08bc":function(e,t,n){"use strict";n("c56a")},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.dc3be0d4.png"},6821:function(e,t,n){(function(){var t=n("00d8"),o=n("9a63").utf8,r=n("044b"),a=n("9a63").bin,c=function(e,n){e.constructor==String?e=n&&"binary"===n.encoding?a.stringToBytes(e):o.stringToBytes(e):r(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var i=t.bytesToWords(e),s=8*e.length,l=1732584193,u=-271733879,d=-1732584194,f=271733878,g=0;g<i.length;g++)i[g]=16711935&(i[g]<<8|i[g]>>>24)|4278255360&(i[g]<<24|i[g]>>>8);i[s>>>5]|=128<<s%32,i[14+(s+64>>>9<<4)]=s;var m=c._ff,b=c._gg,v=c._hh,p=c._ii;for(g=0;g<i.length;g+=16){var h=l,O=u,j=d,w=f;l=m(l,u,d,f,i[g+0],7,-680876936),f=m(f,l,u,d,i[g+1],12,-389564586),d=m(d,f,l,u,i[g+2],17,606105819),u=m(u,d,f,l,i[g+3],22,-1044525330),l=m(l,u,d,f,i[g+4],7,-176418897),f=m(f,l,u,d,i[g+5],12,1200080426),d=m(d,f,l,u,i[g+6],17,-1473231341),u=m(u,d,f,l,i[g+7],22,-45705983),l=m(l,u,d,f,i[g+8],7,1770035416),f=m(f,l,u,d,i[g+9],12,-1958414417),d=m(d,f,l,u,i[g+10],17,-42063),u=m(u,d,f,l,i[g+11],22,-1990404162),l=m(l,u,d,f,i[g+12],7,1804603682),f=m(f,l,u,d,i[g+13],12,-40341101),d=m(d,f,l,u,i[g+14],17,-1502002290),u=m(u,d,f,l,i[g+15],22,1236535329),l=b(l,u,d,f,i[g+1],5,-165796510),f=b(f,l,u,d,i[g+6],9,-1069501632),d=b(d,f,l,u,i[g+11],14,643717713),u=b(u,d,f,l,i[g+0],20,-373897302),l=b(l,u,d,f,i[g+5],5,-701558691),f=b(f,l,u,d,i[g+10],9,38016083),d=b(d,f,l,u,i[g+15],14,-660478335),u=b(u,d,f,l,i[g+4],20,-405537848),l=b(l,u,d,f,i[g+9],5,568446438),f=b(f,l,u,d,i[g+14],9,-1019803690),d=b(d,f,l,u,i[g+3],14,-187363961),u=b(u,d,f,l,i[g+8],20,1163531501),l=b(l,u,d,f,i[g+13],5,-1444681467),f=b(f,l,u,d,i[g+2],9,-51403784),d=b(d,f,l,u,i[g+7],14,1735328473),u=b(u,d,f,l,i[g+12],20,-1926607734),l=v(l,u,d,f,i[g+5],4,-378558),f=v(f,l,u,d,i[g+8],11,-2022574463),d=v(d,f,l,u,i[g+11],16,1839030562),u=v(u,d,f,l,i[g+14],23,-35309556),l=v(l,u,d,f,i[g+1],4,-1530992060),f=v(f,l,u,d,i[g+4],11,1272893353),d=v(d,f,l,u,i[g+7],16,-155497632),u=v(u,d,f,l,i[g+10],23,-1094730640),l=v(l,u,d,f,i[g+13],4,681279174),f=v(f,l,u,d,i[g+0],11,-358537222),d=v(d,f,l,u,i[g+3],16,-722521979),u=v(u,d,f,l,i[g+6],23,76029189),l=v(l,u,d,f,i[g+9],4,-640364487),f=v(f,l,u,d,i[g+12],11,-421815835),d=v(d,f,l,u,i[g+15],16,530742520),u=v(u,d,f,l,i[g+2],23,-995338651),l=p(l,u,d,f,i[g+0],6,-198630844),f=p(f,l,u,d,i[g+7],10,1126891415),d=p(d,f,l,u,i[g+14],15,-1416354905),u=p(u,d,f,l,i[g+5],21,-57434055),l=p(l,u,d,f,i[g+12],6,1700485571),f=p(f,l,u,d,i[g+3],10,-1894986606),d=p(d,f,l,u,i[g+10],15,-1051523),u=p(u,d,f,l,i[g+1],21,-2054922799),l=p(l,u,d,f,i[g+8],6,1873313359),f=p(f,l,u,d,i[g+15],10,-30611744),d=p(d,f,l,u,i[g+6],15,-1560198380),u=p(u,d,f,l,i[g+13],21,1309151649),l=p(l,u,d,f,i[g+4],6,-145523070),f=p(f,l,u,d,i[g+11],10,-1120210379),d=p(d,f,l,u,i[g+2],15,718787259),u=p(u,d,f,l,i[g+9],21,-343485551),l=l+h>>>0,u=u+O>>>0,d=d+j>>>0,f=f+w>>>0}return t.endian([l,u,d,f])};c._ff=function(e,t,n,o,r,a,c){var i=e+(t&n|~t&o)+(r>>>0)+c;return(i<<a|i>>>32-a)+t},c._gg=function(e,t,n,o,r,a,c){var i=e+(t&o|n&~o)+(r>>>0)+c;return(i<<a|i>>>32-a)+t},c._hh=function(e,t,n,o,r,a,c){var i=e+(t^n^o)+(r>>>0)+c;return(i<<a|i>>>32-a)+t},c._ii=function(e,t,n,o,r,a,c){var i=e+(n^(t|~o))+(r>>>0)+c;return(i<<a|i>>>32-a)+t},c._blocksize=16,c._digestsize=16,e.exports=function(e,n){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var o=t.wordsToBytes(c(e,n));return n&&n.asBytes?o:n&&n.asString?a.bytesToString(o):t.bytesToHex(o)}})()},"9a63":function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},c56a:function(e,t,n){},dd1d:function(e,t,n){"use strict";n.r(t);n("42dc");var o=n("19ec"),r=n.n(o),a=(n("accc"),n("d197")),c=n.n(a),i=n("7a23"),s=n("4ffd"),l=n.n(s),u=n("5502"),d=n("6c02"),f=n("866a"),g={class:"login_wrapper"},m={class:"login_main"},b=Object(i["createStaticVNode"])('<div class="row_div" style="width:100%;height:10px;" data-v-7f2503f1><div class="color_block_1" data-v-7f2503f1></div><div class="color_block_2" data-v-7f2503f1></div><div class="color_block_3" data-v-7f2503f1></div></div><div class="title" data-v-7f2503f1>即时通信后台管理</div><img src="'+l.a+'" class="logo" data-v-7f2503f1>',3),v={class:"login_body"},p=["src"],h={class:"code_btn"},O={class:"btn_cont"},j=Object(i["createTextVNode"])(" 登录 "),w=Object(i["defineComponent"])({setup:function(e){var t,o=n("6821"),a=Object(i["getCurrentInstance"])().appContext.config.globalProperties,s=Object(u["b"])(),l=Object(d["d"])(),w=Object(i["reactive"])({email:"",isLogin:!1,vcode:"",codeUrl:"",seed:0,vkey:"",emailCode:"",codeTime:0,ctype:3});function y(e){var t=60*((new Date).getTimezoneOffset()+480)*1e3,n=new Date(e+t),o=new Date(n.getFullYear(),0,1),r=Math.floor((n.valueOf()-o.valueOf())/864e5);return r}function _(e){var t=60*((new Date).getTimezoneOffset()+480)*1e3;return new Date(e+t).getDay()}function C(){w.vcode="",w.emailCode="";var e=Math.ceil(1e5*Math.random()),t=Date.now(),n=y(t),r=_(t),c=""+e+r+n;a.$http.post("vcode",{sig:o(c),nonce:e}).then((function(e){w.vcode=e.data.code,w.codeUrl="data:image/jpeg;base64,"+e.data.img,w.seed=e.data.seed,w.vkey=e.data.vkey})).catch((function(){}))}function T(){0===w.codeTime&&(t&&(clearInterval(t),t=void 0),w.codeTime=299,t=setInterval((function(){w.codeTime-=1,0===w.codeTime&&(clearInterval(t),t=void 0)}),1e3))}function V(){if(!(w.codeTime>0))return w.email?w.vcode?void a.$http.post("ecode",{email:w.email,vcode:w.vcode,seed:w.seed,vkey:w.vkey}).then((function(e){a.$message.success({message:"邮箱验证码已发送，请登录邮箱查看"}),w.emailCode=e.data.ecode,T()})).catch((function(e){a.$message.warning({message:"邮箱验证码发送失败："+(e.msg||""),duration:6e4,showClose:!0}),C()})):a.$message.warning({message:"请填写图片验证码",duration:6e4,showClose:!0}):a.$message.warning({message:"请输入邮箱地址",duration:6e4,showClose:!0})}function k(){if(w.isLogin)l.push({name:"home"});else{if(!w.email)return a.$message.warning({message:"请输入邮箱地址",duration:6e4,showClose:!0});if(!w.emailCode)return a.$message.warning({message:"请填写邮箱验证码",duration:6e4,showClose:!0});var e=a.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});a.$http.post("login",{email:w.email,ecode:w.emailCode,ctype:w.ctype}).then((function(t){var n={wsUrl:t.data.url,token:t.data.token,email:w.email};x(n,e)})).catch((function(t){e.close(),C(),w.emailCode="",a.$message.warning({message:"登录失败："+(t.msg||""),duration:6e4,showClose:!0})}))}}function x(e,t){var n={token:e.token,wsUrl:e.wsUrl};return Object(f["b"])(n).then((function(n){e.userManage=n.userManage,e.adminManage=n.adminManage,e.isStaff=n.isStaff,s.commit("setUserInfo",e),window.sessionStorage.setItem("email",e.email),window.sessionStorage.setItem("wsUrl",e.wsUrl),window.sessionStorage.setItem("token",e.token),t.close(),l.push({name:"home"})}))}return Object(i["onMounted"])((function(){C(),s.state.curUserId&&(w.email=s.state.curUserId,w.isLogin=!0)})),function(e,t){var n=Object(i["resolveComponent"])("el-input"),o=Object(i["resolveComponent"])("el-button");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",g,[Object(i["createElementVNode"])("div",m,[b,Object(i["createElementVNode"])("div",v,[Object(i["createVNode"])(Object(i["unref"])(c.a),{modelValue:Object(i["unref"])(w).ctype,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(i["unref"])(w).ctype=e}),class:"block_select mar_15",placeholder:"请选择客户端"},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(Object(i["unref"])(r.a),{label:"管理端",value:1}),Object(i["createVNode"])(Object(i["unref"])(r.a),{label:"Staff端",value:3})]})),_:1},8,["modelValue"]),Object(i["createVNode"])(n,{id:"userID",class:"mar_15",disabled:Object(i["unref"])(w).isLogin,placeholder:"请输入邮箱地址",modelValue:Object(i["unref"])(w).email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return Object(i["unref"])(w).email=e}),clearable:""},null,8,["disabled","modelValue"]),Object(i["createVNode"])(n,{placeholder:"图片验证码",class:"mar_15",clearable:"",modelValue:Object(i["unref"])(w).vcode,"onUpdate:modelValue":t[2]||(t[2]=function(e){return Object(i["unref"])(w).vcode=e})},{append:Object(i["withCtx"])((function(){return[Object(i["createElementVNode"])("img",{class:"img_code",onClick:C,src:Object(i["unref"])(w).codeUrl,alt:""},null,8,p)]})),_:1},8,["modelValue"]),Object(i["createVNode"])(n,{placeholder:"邮件验证码",modelValue:Object(i["unref"])(w).emailCode,"onUpdate:modelValue":t[3]||(t[3]=function(e){return Object(i["unref"])(w).emailCode=e}),clearable:""},{append:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(o,{onClick:V},{default:Object(i["withCtx"])((function(){return[Object(i["createElementVNode"])("span",h,Object(i["toDisplayString"])(Object(i["unref"])(w).codeTime>0?Object(i["unref"])(w).codeTime+"s":"获取验证码"),1)]})),_:1})]})),_:1},8,["modelValue"]),Object(i["createElementVNode"])("div",O,[Object(i["createVNode"])(o,{type:"primary",class:"login_im_btn",onClick:k},{default:Object(i["withCtx"])((function(){return[j]})),_:1})])])])])}}}),y=(n("08bc"),n("6b0d")),_=n.n(y);const C=_()(w,[["__scopeId","data-v-7f2503f1"]]);t["default"]=C}}]);
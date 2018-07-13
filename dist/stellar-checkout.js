<<<<<<< HEAD
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.StellarCheckout=e():t.StellarCheckout=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="NHnr")}({"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"+tPU":function(t,e,n){n("xGkn");for(var r=n("7KvD"),o=n("hJx8"),i=n("/bQp"),a=n("dSzd")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var l=s[c],u=r[l],f=u&&u.prototype;f&&!f[a]&&o(f,a,l),i[l]=i.Array}},"//Fk":function(t,e,n){t.exports={default:n("U5ju"),__esModule:!0}},"/bQp":function(t,e){t.exports={}},"/n6Q":function(t,e,n){n("zQR9"),n("+tPU"),t.exports=n("Kh4W").f("iterator")},0:function(t,e){},"06OY":function(t,e,n){var r=n("3Eo+")("meta"),o=n("EqjI"),i=n("D2L2"),a=n("evD5").f,s=0,c=Object.isExtensible||function(){return!0},l=!n("S82l")(function(){return c(Object.preventExtensions({}))}),u=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},onFreeze:function(t){return l&&f.NEED&&c(t)&&!i(t,r)&&u(t),t}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"2KxR":function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"3IRH":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"3fs2":function(t,e,n){var r=n("RY/4"),o=n("dSzd")("iterator"),i=n("/bQp");t.exports=n("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"4ie+":function(t,e){t.exports={prefix:"fas",iconName:"chevron-circle-left",icon:[512,512,[],"f137","M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"]}},"4mcu":function(t,e){t.exports=function(){}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"5QVw":function(t,e,n){t.exports={default:n("BwfY"),__esModule:!0}},"5zde":function(t,e,n){n("zQR9"),n("qyJz"),t.exports=n("FeBl").Array.from},"7+uW":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function s(t){return null!==t&&"object"==typeof t}var c=Object.prototype.toString;function l(t){return"[object Object]"===c.call(t)}function u(t){return"[object RegExp]"===c.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function p(t){var e=parseFloat(t);return isNaN(e)?t:e}function h(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var m=h("slot,component",!0),v=h("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var y=Object.prototype.hasOwnProperty;function b(t,e){return y.call(t,e)}function _(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var A=/-(\w)/g,w=_(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),E=_(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),C=/\B([A-Z])/g,x=_(function(t){return t.replace(C,"-$1").toLowerCase()});var k=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function S(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function O(t,e){for(var n in e)t[n]=e[n];return t}function T(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function B(t,e,n){}var N=function(t,e,n){return!1},I=function(t){return t};function R(t,e){if(t===e)return!0;var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(o||i)return!1;var a=Object.keys(t),c=Object.keys(e);return a.length===c.length&&a.every(function(n){return R(t[n],e[n])})}catch(t){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function P(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var L="data-server-rendered",z=["component","directive","filter"],D=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],j={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:B,parsePlatformTagName:I,mustUseProp:N,_lifecycleHooks:D};function U(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function F(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=/[^\w.$]/;var V,Z="__proto__"in{},q="undefined"!=typeof window,X="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),G=q&&window.navigator.userAgent.toLowerCase(),H=G&&/msie|trident/.test(G),Q=G&&G.indexOf("msie 9.0")>0,J=G&&G.indexOf("edge/")>0,W=(G&&G.indexOf("android"),G&&/iphone|ipad|ipod|ios/.test(G)||"ios"===Y),$=(G&&/chrome\/\d+/.test(G),{}.watch),tt=!1;if(q)try{var et={};Object.defineProperty(et,"passive",{get:function(){tt=!0}}),window.addEventListener("test-passive",null,et)}catch(t){}var nt=function(){return void 0===V&&(V=!q&&!X&&void 0!==t&&"server"===t.process.env.VUE_ENV),V},rt=q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"==typeof t&&/native code/.test(t.toString())}var it,at="undefined"!=typeof Symbol&&ot(Symbol)&&"undefined"!=typeof Reflect&&ot(Reflect.ownKeys);it="undefined"!=typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var st=B,ct=0,lt=function(){this.id=ct++,this.subs=[]};lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){g(this.subs,t)},lt.prototype.depend=function(){lt.target&&lt.target.addDep(this)},lt.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},lt.target=null;var ut=[];function ft(t){lt.target&&ut.push(lt.target),lt.target=t}function dt(){lt.target=ut.pop()}var pt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ht={child:{configurable:!0}};ht.child.get=function(){return this.componentInstance},Object.defineProperties(pt.prototype,ht);var mt=function(t){void 0===t&&(t="");var e=new pt;return e.text=t,e.isComment=!0,e};function vt(t){return new pt(void 0,void 0,void 0,String(t))}function gt(t){var e=new pt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.isCloned=!0,e}var yt=Array.prototype,bt=Object.create(yt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=yt[t];F(bt,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i})});var _t=Object.getOwnPropertyNames(bt),At=!0;function wt(t){At=t}var Et=function(t){(this.value=t,this.dep=new lt,this.vmCount=0,F(t,"__ob__",this),Array.isArray(t))?((Z?Ct:xt)(t,bt,_t),this.observeArray(t)):this.walk(t)};function Ct(t,e,n){t.__proto__=e}function xt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];F(t,i,e[i])}}function kt(t,e){var n;if(s(t)&&!(t instanceof pt))return b(t,"__ob__")&&t.__ob__ instanceof Et?n=t.__ob__:At&&!nt()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Et(t)),e&&n&&n.vmCount++,n}function St(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get;s||2!==arguments.length||(n=t[e]);var c=a&&a.set,l=!o&&kt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.target&&(i.depend(),l&&(l.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,o=e.length;r<o;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(c?c.call(t,e):n=e,l=!o&&kt(e),i.notify())}})}}function Ot(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(St(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Tt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}Et.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)St(t,e[n])},Et.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)kt(t[e])};var Bt=j.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)r=t[n=i[a]],o=e[n],b(t,n)?l(r)&&l(o)&&Nt(r,o):Ot(t,n,o);return t}function It(t,e,n){return n?function(){var r="function"==typeof e?e.call(n,n):e,o="function"==typeof t?t.call(n,n):t;return r?Nt(r,o):o}:e?t?function(){return Nt("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Mt(t,e,n,r){var o=Object.create(t||null);return e?O(o,e):o}Bt.data=function(t,e,n){return n?It(t,e,n):e&&"function"!=typeof e?t:It(t,e)},D.forEach(function(t){Bt[t]=Rt}),z.forEach(function(t){Bt[t+"s"]=Mt}),Bt.watch=function(t,e,n,r){if(t===$&&(t=void 0),e===$&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in O(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Bt.props=Bt.methods=Bt.inject=Bt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return O(o,t),e&&O(o,e),o},Bt.provide=It;var Pt=function(t,e){return void 0===e?t:e};function Lt(t,e,n){"function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var r,o,i={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(o=n[r])&&(i[w(o)]={type:null});else if(l(n))for(var a in n)o=n[a],i[w(a)]=l(o)?o:{type:o};t.props=i}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(l(n))for(var i in n){var a=n[i];r[i]=l(a)?O({from:i},a):{from:a}}}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var r=e.extends;if(r&&(t=Lt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Lt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)b(t,a)||c(a);function c(r){var o=Bt[r]||Pt;s[r]=o(t[r],e[r],n,r)}return s}function zt(t,e,n,r){if("string"==typeof n){var o=t[e];if(b(o,n))return o[n];var i=w(n);if(b(o,i))return o[i];var a=E(i);return b(o,a)?o[a]:o[n]||o[i]||o[a]}}function Dt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Ft(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===x(t)){var c=Ft(String,o.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(t,e,n){if(!b(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==jt(e.type)?r.call(t):r}(r,o,t);var l=At;wt(!0),kt(a),wt(l)}return a}function jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Ut(t,e){return jt(t)===jt(e)}function Ft(t,e){if(!Array.isArray(e))return Ut(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Ut(e[n],t))return n;return-1}function Kt(t,e,n){if(e)for(var r=e;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{if(!1===o[i].call(r,t,e,n))return}catch(t){Vt(t,r,"errorCaptured hook")}}Vt(t,e,n)}function Vt(t,e,n){if(j.errorHandler)try{return j.errorHandler.call(null,t,e,n)}catch(t){Zt(t,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!q&&!X||"undefined"==typeof console)throw t;console.error(t)}var qt,Xt,Yt=[],Gt=!1;function Ht(){Gt=!1;var t=Yt.slice(0);Yt.length=0;for(var e=0;e<t.length;e++)t[e]()}var Qt=!1;if("undefined"!=typeof setImmediate&&ot(setImmediate))Xt=function(){setImmediate(Ht)};else if("undefined"==typeof MessageChannel||!ot(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())Xt=function(){setTimeout(Ht,0)};else{var Jt=new MessageChannel,Wt=Jt.port2;Jt.port1.onmessage=Ht,Xt=function(){Wt.postMessage(1)}}if("undefined"!=typeof Promise&&ot(Promise)){var $t=Promise.resolve();qt=function(){$t.then(Ht),W&&setTimeout(B)}}else qt=Xt;function te(t,e){var n;if(Yt.push(function(){if(t)try{t.call(e)}catch(t){Kt(t,e,"nextTick")}else n&&n(e)}),Gt||(Gt=!0,Qt?Xt():qt()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t})}var ee=new it;function ne(t){!function t(e,n){var r,o;var i=Array.isArray(e);if(!i&&!s(e)||Object.isFrozen(e)||e instanceof pt)return;if(e.__ob__){var a=e.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(i)for(r=e.length;r--;)t(e[r],n);else for(o=Object.keys(e),r=o.length;r--;)t(e[o[r]],n)}(t,ee),ee.clear()}var re,oe=_(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function ie(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function ae(t,e,n,o,i){var a,s,c,l;for(a in t)s=t[a],c=e[a],l=oe(a),r(s)||(r(c)?(r(s.fns)&&(s=t[a]=ie(s)),n(l.name,s,l.once,l.capture,l.passive,l.params)):s!==c&&(c.fns=s,t[a]=c));for(a in e)r(t[a])&&o((l=oe(a)).name,e[a],l.capture)}function se(t,e,n){var a;t instanceof pt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function c(){n.apply(this,arguments),g(a.fns,c)}r(s)?a=ie([c]):o(s.fns)&&i(s.merged)?(a=s).fns.push(c):a=ie([s,c]),a.merged=!0,t[e]=a}function ce(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function le(t){return a(t)?[vt(t)]:Array.isArray(t)?function t(e,n){var s=[];var c,l,u,f;for(c=0;c<e.length;c++)r(l=e[c])||"boolean"==typeof l||(u=s.length-1,f=s[u],Array.isArray(l)?l.length>0&&(ue((l=t(l,(n||"")+"_"+c))[0])&&ue(f)&&(s[u]=vt(f.text+l[0].text),l.shift()),s.push.apply(s,l)):a(l)?ue(f)?s[u]=vt(f.text+l):""!==l&&s.push(vt(l)):ue(l)&&ue(f)?s[u]=vt(f.text+l.text):(i(e._isVList)&&o(l.tag)&&r(l.key)&&o(n)&&(l.key="__vlist"+n+"_"+c+"__"),s.push(l)));return s}(t):void 0}function ue(t){return o(t)&&o(t.text)&&!1===t.isComment}function fe(t,e){return(t.__esModule||at&&"Module"===t[Symbol.toStringTag])&&(t=t.default),s(t)?e.extend(t):t}function de(t){return t.isComment&&t.asyncFactory}function pe(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||de(n)))return n}}function he(t,e,n){n?re.$once(t,e):re.$on(t,e)}function me(t,e){re.$off(t,e)}function ve(t,e,n){re=t,ae(e,n||{},he,me),re=void 0}function ge(t,e){var n={};if(!t)return n;for(var r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var l in n)n[l].every(ye)&&delete n[l];return n}function ye(t){return t.isComment&&!t.asyncFactory||" "===t.text}function be(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?be(t[n],e):e[t[n].key]=t[n].fn;return e}var _e=null;function Ae(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function we(t,e){if(e){if(t._directInactive=!1,Ae(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)we(t.$children[n]);Ee(t,"activated")}}function Ee(t,e){ft();var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)try{n[r].call(t)}catch(n){Kt(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Ce=[],xe=[],ke={},Se=!1,Oe=!1,Te=0;function Be(){var t,e;for(Oe=!0,Ce.sort(function(t,e){return t.id-e.id}),Te=0;Te<Ce.length;Te++)e=(t=Ce[Te]).id,ke[e]=null,t.run();var n=xe.slice(),r=Ce.slice();Te=Ce.length=xe.length=0,ke={},Se=Oe=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,we(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&Ee(r,"updated")}}(r),rt&&j.devtools&&rt.emit("flush")}var Ne=0,Ie=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ne,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ie.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;Kt(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ne(t),dt(),this.cleanupDeps()}return t},Ie.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ie.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Ie.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==ke[e]){if(ke[e]=!0,Oe){for(var n=Ce.length-1;n>Te&&Ce[n].id>t.id;)n--;Ce.splice(n+1,0,t)}else Ce.push(t);Se||(Se=!0,te(Be))}}(this)},Ie.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){Kt(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Ie.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ie.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Ie.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var Re={enumerable:!0,configurable:!0,get:B,set:B};function Me(t,e,n){Re.get=function(){return this[e][n]},Re.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Re)}function Pe(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[];t.$parent&&wt(!1);var i=function(i){o.push(i);var a=Dt(i,e,n,t);St(r,i,a),i in t||Me(t,"_props",i)};for(var a in e)i(a);wt(!0)}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?B:k(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;l(e=t._data="function"==typeof e?function(t,e){ft();try{return t.call(e,e)}catch(t){return Kt(t,e,"data()"),{}}finally{dt()}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);for(;o--;){var i=n[o];0,r&&b(r,i)||U(i)||Me(t,"_data",i)}kt(e,!0)}(t):kt(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=nt();for(var o in e){var i=e[o],a="function"==typeof i?i:i.get;0,r||(n[o]=new Ie(t,a||B,B,Le)),o in t||ze(t,o,i)}}(t,e.computed),e.watch&&e.watch!==$&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)je(t,n,r[o]);else je(t,n,r)}}(t,e.watch)}var Le={lazy:!0};function ze(t,e,n){var r=!nt();"function"==typeof n?(Re.get=r?De(e):n,Re.set=B):(Re.get=n.get?r&&!1!==n.cache?De(e):n.get:B,Re.set=n.set?n.set:B),Object.defineProperty(t,e,Re)}function De(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.target&&e.depend(),e.value}}function je(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ue(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),o=0;o<r.length;o++){for(var i=r[o],a=t[i].from,s=e;s;){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var c=t[i].default;n[i]="function"==typeof c?c.call(e):c}else 0}return n}}function Fe(t,e){var n,r,i,a,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"==typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(s(t))for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)c=a[r],n[r]=e(t[c],c,r);return o(n)&&(n._isVList=!0),n}function Ke(t,e,n,r){var o,i=this.$scopedSlots[t];if(i)n=n||{},r&&(n=O(O({},r),n)),o=i(n)||e;else{var a=this.$slots[t];a&&(a._rendered=!0),o=a||e}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},o):o}function Ve(t){return zt(this.$options,"filters",t)||I}function Ze(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function qe(t,e,n,r,o){var i=j.keyCodes[e]||n;return o&&r&&!j.keyCodes[e]?Ze(o,r):i?Ze(i,t):r?x(r)!==e:void 0}function Xe(t,e,n,r,o){if(n)if(s(n)){var i;Array.isArray(n)&&(n=T(n));var a=function(a){if("class"===a||"style"===a||v(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||j.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in i||(i[a]=n[a],o&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var c in n)a(c)}else;return t}function Ye(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(He(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),"__static__"+t,!1),r)}function Ge(t,e,n){return He(t,"__once__"+e+(n?"_"+n:""),!0),t}function He(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Qe(t[r],e+"_"+r,n);else Qe(t,e,n)}function Qe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Je(t,e){if(e)if(l(e)){var n=t.on=t.on?O({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function We(t){t._o=Ge,t._n=p,t._s=d,t._l=Fe,t._t=Ke,t._q=R,t._i=M,t._m=Ye,t._f=Ve,t._k=qe,t._b=Xe,t._v=vt,t._e=mt,t._u=be,t._g=Je}function $e(t,e,r,o,a){var s,c=a.options;b(o,"_uid")?(s=Object.create(o))._original=o:(s=o,o=o._original);var l=i(c._compiled),u=!l;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Ue(c.inject,o),this.slots=function(){return ge(r,o)},l&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=t.scopedSlots||n),c._scopeId?this._c=function(t,e,n,r){var i=cn(s,t,e,n,r,u);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return cn(s,t,e,n,r,u)}}function tn(t,e,n,r){var o=gt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function en(t,e){for(var n in e)t[w(n)]=e[n]}We($e.prototype);var nn={init:function(t,e,n,r){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var i=t;nn.prepatch(i,i)}else{(t.componentInstance=function(t,e,n,r){var i={_isComponent:!0,parent:e,_parentVnode:t,_parentElm:n||null,_refElm:r||null},a=t.data.inlineTemplate;o(a)&&(i.render=a.render,i.staticRenderFns=a.staticRenderFns);return new t.componentOptions.Ctor(i)}(t,_e,n,r)).$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var r=e.componentOptions;!function(t,e,r,o,i){var a=!!(i||t.$options._renderChildren||o.data.scopedSlots||t.$scopedSlots!==n);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){wt(!1);for(var s=t._props,c=t.$options._propKeys||[],l=0;l<c.length;l++){var u=c[l],f=t.$options.props;s[u]=Dt(u,f,e,t)}wt(!0),t.$options.propsData=e}r=r||n;var d=t.$options._parentListeners;t.$options._parentListeners=r,ve(t,r,d),a&&(t.$slots=ge(i,o.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,r.propsData,r.listeners,e,r.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,Ee(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,xe.push(e)):we(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,Ae(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);Ee(e,"deactivated")}}(e,!0):e.$destroy())}},rn=Object.keys(nn);function on(t,e,a,c,l){if(!r(t)){var u=a.$options._base;if(s(t)&&(t=u.extend(t)),"function"==typeof t){var f;if(r(t.cid)&&void 0===(t=function(t,e,n){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;if(i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(!o(t.contexts)){var a=t.contexts=[n],c=!0,l=function(){for(var t=0,e=a.length;t<e;t++)a[t].$forceUpdate()},u=P(function(n){t.resolved=fe(n,e),c||l()}),f=P(function(e){o(t.errorComp)&&(t.error=!0,l())}),d=t(u,f);return s(d)&&("function"==typeof d.then?r(t.resolved)&&d.then(u,f):o(d.component)&&"function"==typeof d.component.then&&(d.component.then(u,f),o(d.error)&&(t.errorComp=fe(d.error,e)),o(d.loading)&&(t.loadingComp=fe(d.loading,e),0===d.delay?t.loading=!0:setTimeout(function(){r(t.resolved)&&r(t.error)&&(t.loading=!0,l())},d.delay||200)),o(d.timeout)&&setTimeout(function(){r(t.resolved)&&f(null)},d.timeout))),c=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}(f=t,u,a)))return function(t,e,n,r,o){var i=mt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(f,e,a,c,l);e=e||{},un(t),o(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});o(i[r])?i[r]=[e.model.callback].concat(i[r]):i[r]=e.model.callback}(t.options,e);var d=function(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,c=t.props;if(o(s)||o(c))for(var l in i){var u=x(l);ce(a,c,l,u,!0)||ce(a,s,l,u,!1)}return a}}(e,t);if(i(t.options.functional))return function(t,e,r,i,a){var s=t.options,c={},l=s.props;if(o(l))for(var u in l)c[u]=Dt(u,l,e||n);else o(r.attrs)&&en(c,r.attrs),o(r.props)&&en(c,r.props);var f=new $e(r,c,a,i,t),d=s.render.call(null,f._c,f);if(d instanceof pt)return tn(d,r,f.parent,s);if(Array.isArray(d)){for(var p=le(d)||[],h=new Array(p.length),m=0;m<p.length;m++)h[m]=tn(p[m],r,f.parent,s);return h}}(t,d,e,a,c);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<rn.length;n++){var r=rn[n];e[r]=nn[r]}}(e);var m=t.options.name||l;return new pt("vue-component-"+t.cid+(m?"-"+m:""),e,void 0,void 0,void 0,a,{Ctor:t,propsData:d,listeners:p,tag:l,children:c},f)}}}var an=1,sn=2;function cn(t,e,n,c,l,u){return(Array.isArray(n)||a(n))&&(l=c,c=n,n=void 0),i(u)&&(l=sn),function(t,e,n,a,c){if(o(n)&&o(n.__ob__))return mt();o(n)&&o(n.is)&&(e=n.is);if(!e)return mt();0;Array.isArray(a)&&"function"==typeof a[0]&&((n=n||{}).scopedSlots={default:a[0]},a.length=0);c===sn?a=le(a):c===an&&(a=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(a));var l,u;if("string"==typeof e){var f;u=t.$vnode&&t.$vnode.ns||j.getTagNamespace(e),l=j.isReservedTag(e)?new pt(j.parsePlatformTagName(e),n,a,void 0,void 0,t):o(f=zt(t.$options,"components",e))?on(f,n,t,a,e):new pt(e,n,a,void 0,void 0,t)}else l=on(e,n,t,a);return Array.isArray(l)?l:o(l)?(o(u)&&function t(e,n,a){e.ns=n;"foreignObject"===e.tag&&(n=void 0,a=!0);if(o(e.children))for(var s=0,c=e.children.length;s<c;s++){var l=e.children[s];o(l.tag)&&(r(l.ns)||i(a)&&"svg"!==l.tag)&&t(l,n,a)}}(l,u),o(n)&&function(t){s(t.style)&&ne(t.style);s(t.class)&&ne(t.class)}(n),l):mt()}(t,e,n,c,l)}var ln=0;function un(t){var e=t.options;if(t.super){var n=un(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=fn(n[i],r[i],o[i]));return e}(t);r&&O(t.extendOptions,r),(e=t.options=Lt(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function fn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function dn(t){this._init(t)}function pn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=Lt(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)Me(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)ze(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,z.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=O({},a.options),o[r]=a,a}}function hn(t){return t&&(t.Ctor.options.name||t.tag)}function mn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!u(t)&&t.test(e)}function vn(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=hn(a.componentOptions);s&&!e(s)&&gn(n,i,r,o)}}}function gn(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}!function(t){t.prototype._init=function(t){var e=this;e._uid=ln++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r,n._parentElm=e._parentElm,n._refElm=e._refElm;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=Lt(un(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ve(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=ge(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return cn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return cn(t,e,n,r,o,!0)};var i=r&&r.data;St(t,"$attrs",i&&i.attrs||n,null,!0),St(t,"$listeners",e._parentListeners||n,null,!0)}(e),Ee(e,"beforeCreate"),function(t){var e=Ue(t.$options.inject,t);e&&(wt(!1),Object.keys(e).forEach(function(n){St(t,n,e[n])}),wt(!0))}(e),Pe(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),Ee(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(dn),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ot,t.prototype.$delete=Tt,t.prototype.$watch=function(t,e,n){if(l(e))return je(this,t,e,n);(n=n||{}).user=!0;var r=new Ie(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}}}(dn),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)this.$on(t[r],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)this.$off(t[r],e);return n}var i=n._events[t];if(!i)return n;if(!e)return n._events[t]=null,n;if(e)for(var a,s=i.length;s--;)if((a=i[s])===e||a.fn===e){i.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?S(n):n;for(var r=S(arguments,1),o=0,i=n.length;o<i;o++)try{n[o].apply(e,r)}catch(n){Kt(n,e,'event handler for "'+t+'"')}}return e}}(dn),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&Ee(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=_e;_e=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),_e=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ee(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ee(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(dn),function(t){We(t.prototype),t.prototype.$nextTick=function(t){return te(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r._parentVnode;i&&(e.$scopedSlots=i.data.scopedSlots||n),e.$vnode=i;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){Kt(n,e,"render"),t=e._vnode}return t instanceof pt||(t=mt()),t.parent=i,t}}(dn);var yn=[String,RegExp,Array],bn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:yn,exclude:yn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)gn(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){vn(t,function(t){return mn(e,t)})}),this.$watch("exclude",function(e){vn(t,function(t){return!mn(e,t)})})},render:function(){var t=this.$slots.default,e=pe(t),n=e&&e.componentOptions;if(n){var r=hn(n),o=this.include,i=this.exclude;if(o&&(!r||!mn(o,r))||i&&r&&mn(i,r))return e;var a=this.cache,s=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;a[c]?(e.componentInstance=a[c].componentInstance,g(s,c),s.push(c)):(a[c]=e,s.push(c),this.max&&s.length>parseInt(this.max)&&gn(a,s[0],s,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){var e={get:function(){return j}};Object.defineProperty(t,"config",e),t.util={warn:st,extend:O,mergeOptions:Lt,defineReactive:St},t.set=Ot,t.delete=Tt,t.nextTick=te,t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,O(t.options.components,bn),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Lt(this.options,t),this}}(t),pn(t),function(t){z.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(dn),Object.defineProperty(dn.prototype,"$isServer",{get:nt}),Object.defineProperty(dn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dn,"FunctionalRenderContext",{value:$e}),dn.version="2.5.16";var _n=h("style,class"),An=h("input,textarea,option,select,progress"),wn=function(t,e,n){return"value"===n&&An(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},En=h("contenteditable,draggable,spellcheck"),Cn=h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),xn="http://www.w3.org/1999/xlink",kn=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Sn=function(t){return kn(t)?t.slice(6,t.length):""},On=function(t){return null==t||!1===t};function Tn(t){for(var e=t.data,n=t,r=t;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(e=Bn(r.data,e));for(;o(n=n.parent);)n&&n.data&&(e=Bn(e,n.data));return function(t,e){if(o(t)||o(e))return Nn(t,In(e));return""}(e.staticClass,e.class)}function Bn(t,e){return{staticClass:Nn(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Nn(t,e){return t?e?t+" "+e:t:e||""}function In(t){return Array.isArray(t)?function(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=In(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):s(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var Rn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Mn=h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Pn=h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ln=function(t){return Mn(t)||Pn(t)};function zn(t){return Pn(t)?"svg":"math"===t?"math":void 0}var Dn=Object.create(null);var jn=h("text,number,password,search,email,tel,url");function Un(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}var Fn=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(Rn[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setStyleScope:function(t,e){t.setAttribute(e,"")}}),Kn={create:function(t,e){Vn(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Vn(t,!0),Vn(e))},destroy:function(t){Vn(t,!0)}};function Vn(t,e){var n=t.data.ref;if(o(n)){var r=t.context,i=t.componentInstance||t.elm,a=r.$refs;e?Array.isArray(a[n])?g(a[n],i):a[n]===i&&(a[n]=void 0):t.data.refInFor?Array.isArray(a[n])?a[n].indexOf(i)<0&&a[n].push(i):a[n]=[i]:a[n]=i}}var Zn=new pt("",{},[]),qn=["create","activate","update","remove","destroy"];function Xn(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||jn(r)&&jn(i)}(t,e)||i(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&r(e.asyncFactory.error))}function Yn(t,e,n){var r,i,a={};for(r=e;r<=n;++r)o(i=t[r].key)&&(a[i]=r);return a}var Gn={create:Hn,update:Hn,destroy:function(t){Hn(t,Zn)}};function Hn(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,o,i=t===Zn,a=e===Zn,s=Jn(t.data.directives,t.context),c=Jn(e.data.directives,e.context),l=[],u=[];for(n in c)r=s[n],o=c[n],r?(o.oldValue=r.value,$n(o,"update",e,t),o.def&&o.def.componentUpdated&&u.push(o)):($n(o,"bind",e,t),o.def&&o.def.inserted&&l.push(o));if(l.length){var f=function(){for(var n=0;n<l.length;n++)$n(l[n],"inserted",e,t)};i?se(e,"insert",f):f()}u.length&&se(e,"postpatch",function(){for(var n=0;n<u.length;n++)$n(u[n],"componentUpdated",e,t)});if(!i)for(n in s)c[n]||$n(s[n],"unbind",t,t,a)}(t,e)}var Qn=Object.create(null);function Jn(t,e){var n,r,o=Object.create(null);if(!t)return o;for(n=0;n<t.length;n++)(r=t[n]).modifiers||(r.modifiers=Qn),o[Wn(r)]=r,r.def=zt(e.$options,"directives",r.name);return o}function Wn(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function $n(t,e,n,r,o){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,o)}catch(r){Kt(r,n.context,"directive "+t.name+" "+e+" hook")}}var tr=[Kn,Gn];function er(t,e){var n=e.componentOptions;if(!(o(n)&&!1===n.Ctor.options.inheritAttrs||r(t.data.attrs)&&r(e.data.attrs))){var i,a,s=e.elm,c=t.data.attrs||{},l=e.data.attrs||{};for(i in o(l.__ob__)&&(l=e.data.attrs=O({},l)),l)a=l[i],c[i]!==a&&nr(s,i,a);for(i in(H||J)&&l.value!==c.value&&nr(s,"value",l.value),c)r(l[i])&&(kn(i)?s.removeAttributeNS(xn,Sn(i)):En(i)||s.removeAttribute(i))}}function nr(t,e,n){t.tagName.indexOf("-")>-1?rr(t,e,n):Cn(e)?On(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):En(e)?t.setAttribute(e,On(n)||"false"===n?"false":"true"):kn(e)?On(n)?t.removeAttributeNS(xn,Sn(e)):t.setAttributeNS(xn,e,n):rr(t,e,n)}function rr(t,e,n){if(On(n))t.removeAttribute(e);else{if(H&&!Q&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var or={create:er,update:er};function ir(t,e){var n=e.elm,i=e.data,a=t.data;if(!(r(i.staticClass)&&r(i.class)&&(r(a)||r(a.staticClass)&&r(a.class)))){var s=Tn(e),c=n._transitionClasses;o(c)&&(s=Nn(s,In(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var ar,sr,cr,lr,ur,fr,dr={create:ir,update:ir},pr=/[\w).+\-_$\]]/;function hr(t){var e,n,r,o,i,a=!1,s=!1,c=!1,l=!1,u=0,f=0,d=0,p=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),a)39===e&&92!==n&&(a=!1);else if(s)34===e&&92!==n&&(s=!1);else if(c)96===e&&92!==n&&(c=!1);else if(l)47===e&&92!==n&&(l=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||u||f||d){switch(e){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:d++;break;case 41:d--;break;case 91:f++;break;case 93:f--;break;case 123:u++;break;case 125:u--}if(47===e){for(var h=r-1,m=void 0;h>=0&&" "===(m=t.charAt(h));h--);m&&pr.test(m)||(l=!0)}}else void 0===o?(p=r+1,o=t.slice(0,r).trim()):v();function v(){(i||(i=[])).push(t.slice(p,r).trim()),p=r+1}if(void 0===o?o=t.slice(0,r).trim():0!==p&&v(),i)for(r=0;r<i.length;r++)o=mr(o,i[r]);return o}function mr(t,e){var n=e.indexOf("(");if(n<0)return'_f("'+e+'")('+t+")";var r=e.slice(0,n),o=e.slice(n+1);return'_f("'+r+'")('+t+(")"!==o?","+o:o)}function vr(t){console.error("[Vue compiler]: "+t)}function gr(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function yr(t,e,n){(t.props||(t.props=[])).push({name:e,value:n}),t.plain=!1}function br(t,e,n){(t.attrs||(t.attrs=[])).push({name:e,value:n}),t.plain=!1}function _r(t,e,n){t.attrsMap[e]=n,t.attrsList.push({name:e,value:n})}function Ar(t,e,n,r,o,i){(t.directives||(t.directives=[])).push({name:e,rawName:n,value:r,arg:o,modifiers:i}),t.plain=!1}function wr(t,e,r,o,i,a){var s;(o=o||n).capture&&(delete o.capture,e="!"+e),o.once&&(delete o.once,e="~"+e),o.passive&&(delete o.passive,e="&"+e),"click"===e&&(o.right?(e="contextmenu",delete o.right):o.middle&&(e="mouseup")),o.native?(delete o.native,s=t.nativeEvents||(t.nativeEvents={})):s=t.events||(t.events={});var c={value:r.trim()};o!==n&&(c.modifiers=o);var l=s[e];Array.isArray(l)?i?l.unshift(c):l.push(c):s[e]=l?i?[c,l]:[l,c]:c,t.plain=!1}function Er(t,e,n){var r=Cr(t,":"+e)||Cr(t,"v-bind:"+e);if(null!=r)return hr(r);if(!1!==n){var o=Cr(t,e);if(null!=o)return JSON.stringify(o)}}function Cr(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var o=t.attrsList,i=0,a=o.length;i<a;i++)if(o[i].name===e){o.splice(i,1);break}return n&&delete t.attrsMap[e],r}function xr(t,e,n){var r=n||{},o=r.number,i="$$v";r.trim&&(i="(typeof $$v === 'string'? $$v.trim(): $$v)"),o&&(i="_n("+i+")");var a=kr(e,i);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+a+"}"}}function kr(t,e){var n=function(t){if(t=t.trim(),ar=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<ar-1)return(lr=t.lastIndexOf("."))>-1?{exp:t.slice(0,lr),key:'"'+t.slice(lr+1)+'"'}:{exp:t,key:null};sr=t,lr=ur=fr=0;for(;!Or();)Tr(cr=Sr())?Nr(cr):91===cr&&Br(cr);return{exp:t.slice(0,ur),key:t.slice(ur+1,fr)}}(t);return null===n.key?t+"="+e:"$set("+n.exp+", "+n.key+", "+e+")"}function Sr(){return sr.charCodeAt(++lr)}function Or(){return lr>=ar}function Tr(t){return 34===t||39===t}function Br(t){var e=1;for(ur=lr;!Or();)if(Tr(t=Sr()))Nr(t);else if(91===t&&e++,93===t&&e--,0===e){fr=lr;break}}function Nr(t){for(var e=t;!Or()&&(t=Sr())!==e;);}var Ir,Rr="__r",Mr="__c";function Pr(t,e,n,r,o){var i;e=(i=e)._withTask||(i._withTask=function(){Qt=!0;var t=i.apply(null,arguments);return Qt=!1,t}),n&&(e=function(t,e,n){var r=Ir;return function o(){null!==t.apply(null,arguments)&&Lr(e,o,n,r)}}(e,t,r)),Ir.addEventListener(t,e,tt?{capture:r,passive:o}:r)}function Lr(t,e,n,r){(r||Ir).removeEventListener(t,e._withTask||e,n)}function zr(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Ir=e.elm,function(t){if(o(t[Rr])){var e=H?"change":"input";t[e]=[].concat(t[Rr],t[e]||[]),delete t[Rr]}o(t[Mr])&&(t.change=[].concat(t[Mr],t.change||[]),delete t[Mr])}(n),ae(n,i,Pr,Lr,e.context),Ir=void 0}}var Dr={create:zr,update:zr};function jr(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,i,a=e.elm,s=t.data.domProps||{},c=e.data.domProps||{};for(n in o(c.__ob__)&&(c=e.data.domProps=O({},c)),s)r(c[n])&&(a[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n){a._value=i;var l=r(i)?"":String(i);Ur(a,l)&&(a.value=l)}else a[n]=i}}}function Ur(t,e){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.lazy)return!1;if(r.number)return p(n)!==p(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}(t,e))}var Fr={create:jr,update:jr},Kr=_(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e});function Vr(t){var e=Zr(t.style);return t.staticStyle?O(t.staticStyle,e):e}function Zr(t){return Array.isArray(t)?T(t):"string"==typeof t?Kr(t):t}var qr,Xr=/^--/,Yr=/\s*!important$/,Gr=function(t,e,n){if(Xr.test(e))t.style.setProperty(e,n);else if(Yr.test(n))t.style.setProperty(e,n.replace(Yr,""),"important");else{var r=Qr(e);if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)t.style[r]=n[o];else t.style[r]=n}},Hr=["Webkit","Moz","ms"],Qr=_(function(t){if(qr=qr||document.createElement("div").style,"filter"!==(t=w(t))&&t in qr)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Hr.length;n++){var r=Hr[n]+e;if(r in qr)return r}});function Jr(t,e){var n=e.data,i=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var a,s,c=e.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},f=l||u,d=Zr(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?O({},d):d;var p=function(t,e){var n,r={};if(e)for(var o=t;o.componentInstance;)(o=o.componentInstance._vnode)&&o.data&&(n=Vr(o.data))&&O(r,n);(n=Vr(t.data))&&O(r,n);for(var i=t;i=i.parent;)i.data&&(n=Vr(i.data))&&O(r,n);return r}(e,!0);for(s in f)r(p[s])&&Gr(c,s,"");for(s in p)(a=p[s])!==f[s]&&Gr(c,s,null==a?"":a)}}var Wr={create:Jr,update:Jr};function $r(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function to(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function eo(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&O(e,no(t.name||"v")),O(e,t),e}return"string"==typeof t?no(t):void 0}}var no=_(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),ro=q&&!Q,oo="transition",io="animation",ao="transition",so="transitionend",co="animation",lo="animationend";ro&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ao="WebkitTransition",so="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(co="WebkitAnimation",lo="webkitAnimationEnd"));var uo=q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function fo(t){uo(function(){uo(t)})}function po(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),$r(t,e))}function ho(t,e){t._transitionClasses&&g(t._transitionClasses,e),to(t,e)}function mo(t,e,n){var r=go(t,e),o=r.type,i=r.timeout,a=r.propCount;if(!o)return n();var s=o===oo?so:lo,c=0,l=function(){t.removeEventListener(s,u),n()},u=function(e){e.target===t&&++c>=a&&l()};setTimeout(function(){c<a&&l()},i+1),t.addEventListener(s,u)}var vo=/\b(transform|all)(,|$)/;function go(t,e){var n,r=window.getComputedStyle(t),o=r[ao+"Delay"].split(", "),i=r[ao+"Duration"].split(", "),a=yo(o,i),s=r[co+"Delay"].split(", "),c=r[co+"Duration"].split(", "),l=yo(s,c),u=0,f=0;return e===oo?a>0&&(n=oo,u=a,f=i.length):e===io?l>0&&(n=io,u=l,f=c.length):f=(n=(u=Math.max(a,l))>0?a>l?oo:io:null)?n===oo?i.length:c.length:0,{type:n,timeout:u,propCount:f,hasTransform:n===oo&&vo.test(r[ao+"Property"])}}function yo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return bo(e)+bo(t[n])}))}function bo(t){return 1e3*Number(t.slice(0,-1))}function _o(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=eo(t.data.transition);if(!r(i)&&!o(n._enterCb)&&1===n.nodeType){for(var a=i.css,c=i.type,l=i.enterClass,u=i.enterToClass,f=i.enterActiveClass,d=i.appearClass,h=i.appearToClass,m=i.appearActiveClass,v=i.beforeEnter,g=i.enter,y=i.afterEnter,b=i.enterCancelled,_=i.beforeAppear,A=i.appear,w=i.afterAppear,E=i.appearCancelled,C=i.duration,x=_e,k=_e.$vnode;k&&k.parent;)x=(k=k.parent).context;var S=!x._isMounted||!t.isRootInsert;if(!S||A||""===A){var O=S&&d?d:l,T=S&&m?m:f,B=S&&h?h:u,N=S&&_||v,I=S&&"function"==typeof A?A:g,R=S&&w||y,M=S&&E||b,L=p(s(C)?C.enter:C);0;var z=!1!==a&&!Q,D=Eo(I),j=n._enterCb=P(function(){z&&(ho(n,B),ho(n,T)),j.cancelled?(z&&ho(n,O),M&&M(n)):R&&R(n),n._enterCb=null});t.data.show||se(t,"insert",function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),I&&I(n,j)}),N&&N(n),z&&(po(n,O),po(n,T),fo(function(){ho(n,O),j.cancelled||(po(n,B),D||(wo(L)?setTimeout(j,L):mo(n,c,j)))})),t.data.show&&(e&&e(),I&&I(n,j)),z||D||j()}}}function Ao(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=eo(t.data.transition);if(r(i)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var a=i.css,c=i.type,l=i.leaveClass,u=i.leaveToClass,f=i.leaveActiveClass,d=i.beforeLeave,h=i.leave,m=i.afterLeave,v=i.leaveCancelled,g=i.delayLeave,y=i.duration,b=!1!==a&&!Q,_=Eo(h),A=p(s(y)?y.leave:y);0;var w=n._leaveCb=P(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(ho(n,u),ho(n,f)),w.cancelled?(b&&ho(n,l),v&&v(n)):(e(),m&&m(n)),n._leaveCb=null});g?g(E):E()}function E(){w.cancelled||(t.data.show||((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(po(n,l),po(n,f),fo(function(){ho(n,l),w.cancelled||(po(n,u),_||(wo(A)?setTimeout(w,A):mo(n,c,w)))})),h&&h(n,w),b||_||w())}}function wo(t){return"number"==typeof t&&!isNaN(t)}function Eo(t){if(r(t))return!1;var e=t.fns;return o(e)?Eo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Co(t,e){!0!==e.data.show&&_o(e)}var xo=function(t){var e,n,s={},c=t.modules,l=t.nodeOps;for(e=0;e<qn.length;++e)for(s[qn[e]]=[],n=0;n<c.length;++n)o(c[n][qn[e]])&&s[qn[e]].push(c[n][qn[e]]);function u(t){var e=l.parentNode(t);o(e)&&l.removeChild(e,t)}function f(t,e,n,r,a,c,u){if(o(t.elm)&&o(c)&&(t=c[u]=gt(t)),t.isRootInsert=!a,!function(t,e,n,r){var a=t.data;if(o(a)){var c=o(t.componentInstance)&&a.keepAlive;if(o(a=a.hook)&&o(a=a.init)&&a(t,!1,n,r),o(t.componentInstance))return d(t,e),i(c)&&function(t,e,n,r){for(var i,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,o(i=a.data)&&o(i=i.transition)){for(i=0;i<s.activate.length;++i)s.activate[i](Zn,a);e.push(a);break}p(n,t.elm,r)}(t,e,n,r),!0}}(t,e,n,r)){var f=t.data,h=t.children,v=t.tag;o(v)?(t.elm=t.ns?l.createElementNS(t.ns,v):l.createElement(v,t),y(t),m(t,h,e),o(f)&&g(t,e),p(n,t.elm,r)):i(t.isComment)?(t.elm=l.createComment(t.text),p(n,t.elm,r)):(t.elm=l.createTextNode(t.text),p(n,t.elm,r))}}function d(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,v(t)?(g(t,e),y(t)):(Vn(t),e.push(t))}function p(t,e,n){o(t)&&(o(n)?n.parentNode===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function m(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r);else a(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function v(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return o(t.tag)}function g(t,n){for(var r=0;r<s.create.length;++r)s.create[r](Zn,t);o(e=t.data.hook)&&(o(e.create)&&e.create(Zn,t),o(e.insert)&&n.push(t))}function y(t){var e;if(o(e=t.fnScopeId))l.setStyleScope(t.elm,e);else for(var n=t;n;)o(e=n.context)&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent;o(e=_e)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function b(t,e,n,r,o,i){for(;r<=o;++r)f(n[r],i,t,e,!1,n,r)}function _(t){var e,n,r=t.data;if(o(r))for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)_(t.children[n])}function A(t,e,n,r){for(;n<=r;++n){var i=e[n];o(i)&&(o(i.tag)?(w(i),_(i)):u(i.elm))}}function w(t,e){if(o(e)||o(t.data)){var n,r=s.remove.length+1;for(o(e)?e.listeners+=r:e=function(t,e){function n(){0==--n.listeners&&u(t)}return n.listeners=e,n}(t.elm,r),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&w(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else u(t.elm)}function E(t,e,n,r){for(var i=n;i<r;i++){var a=e[i];if(o(a)&&Xn(t,a))return i}}function C(t,e,n,a){if(t!==e){var c=e.elm=t.elm;if(i(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?S(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(i(e.isStatic)&&i(t.isStatic)&&e.key===t.key&&(i(e.isCloned)||i(e.isOnce)))e.componentInstance=t.componentInstance;else{var u,d=e.data;o(d)&&o(u=d.hook)&&o(u=u.prepatch)&&u(t,e);var p=t.children,h=e.children;if(o(d)&&v(e)){for(u=0;u<s.update.length;++u)s.update[u](t,e);o(u=d.hook)&&o(u=u.update)&&u(t,e)}r(e.text)?o(p)&&o(h)?p!==h&&function(t,e,n,i,a){for(var s,c,u,d=0,p=0,h=e.length-1,m=e[0],v=e[h],g=n.length-1,y=n[0],_=n[g],w=!a;d<=h&&p<=g;)r(m)?m=e[++d]:r(v)?v=e[--h]:Xn(m,y)?(C(m,y,i),m=e[++d],y=n[++p]):Xn(v,_)?(C(v,_,i),v=e[--h],_=n[--g]):Xn(m,_)?(C(m,_,i),w&&l.insertBefore(t,m.elm,l.nextSibling(v.elm)),m=e[++d],_=n[--g]):Xn(v,y)?(C(v,y,i),w&&l.insertBefore(t,v.elm,m.elm),v=e[--h],y=n[++p]):(r(s)&&(s=Yn(e,d,h)),r(c=o(y.key)?s[y.key]:E(y,e,d,h))?f(y,i,t,m.elm,!1,n,p):Xn(u=e[c],y)?(C(u,y,i),e[c]=void 0,w&&l.insertBefore(t,u.elm,m.elm)):f(y,i,t,m.elm,!1,n,p),y=n[++p]);d>h?b(t,r(n[g+1])?null:n[g+1].elm,n,p,g,i):p>g&&A(0,e,d,h)}(c,p,h,n,a):o(h)?(o(t.text)&&l.setTextContent(c,""),b(c,null,h,0,h.length-1,n)):o(p)?A(0,p,0,p.length-1):o(t.text)&&l.setTextContent(c,""):t.text!==e.text&&l.setTextContent(c,e.text),o(d)&&o(u=d.hook)&&o(u=u.postpatch)&&u(t,e)}}}function x(t,e,n){if(i(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var k=h("attrs,class,staticClass,staticStyle,key");function S(t,e,n,r){var a,s=e.tag,c=e.data,l=e.children;if(r=r||c&&c.pre,e.elm=t,i(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(a=c.hook)&&o(a=a.init)&&a(e,!0),o(a=e.componentInstance)))return d(e,n),!0;if(o(s)){if(o(l))if(t.hasChildNodes())if(o(a=c)&&o(a=a.domProps)&&o(a=a.innerHTML)){if(a!==t.innerHTML)return!1}else{for(var u=!0,f=t.firstChild,p=0;p<l.length;p++){if(!f||!S(f,l[p],n,r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else m(e,l,n);if(o(c)){var h=!1;for(var v in c)if(!k(v)){h=!0,g(e,n);break}!h&&c.class&&ne(c.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a,c,u){if(!r(e)){var d,p=!1,h=[];if(r(t))p=!0,f(e,h,c,u);else{var m=o(t.nodeType);if(!m&&Xn(t,e))C(t,e,h,a);else{if(m){if(1===t.nodeType&&t.hasAttribute(L)&&(t.removeAttribute(L),n=!0),i(n)&&S(t,e,h))return x(e,h,!0),t;d=t,t=new pt(l.tagName(d).toLowerCase(),{},[],void 0,d)}var g=t.elm,y=l.parentNode(g);if(f(e,h,g._leaveCb?null:y,l.nextSibling(g)),o(e.parent))for(var b=e.parent,w=v(e);b;){for(var E=0;E<s.destroy.length;++E)s.destroy[E](b);if(b.elm=e.elm,w){for(var k=0;k<s.create.length;++k)s.create[k](Zn,b);var O=b.data.hook.insert;if(O.merged)for(var T=1;T<O.fns.length;T++)O.fns[T]()}else Vn(b);b=b.parent}o(y)?A(0,[t],0,0):o(t.tag)&&_(t)}}return x(e,h,p),e.elm}o(t)&&_(t)}}({nodeOps:Fn,modules:[or,dr,Dr,Fr,Wr,q?{create:Co,activate:Co,remove:function(t,e){!0!==t.data.show?Ao(t,e):e()}}:{}].concat(tr)});Q&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Ro(t,"input")});var ko={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?se(n,"postpatch",function(){ko.componentUpdated(t,e,n)}):So(t,e,n.context),t._vOptions=[].map.call(t.options,Bo)):("textarea"===n.tag||jn(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",No),t.addEventListener("compositionend",Io),t.addEventListener("change",Io),Q&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){So(t,e,n.context);var r=t._vOptions,o=t._vOptions=[].map.call(t.options,Bo);if(o.some(function(t,e){return!R(t,r[e])}))(t.multiple?e.value.some(function(t){return To(t,o)}):e.value!==e.oldValue&&To(e.value,o))&&Ro(t,"change")}}};function So(t,e,n){Oo(t,e,n),(H||J)&&setTimeout(function(){Oo(t,e,n)},0)}function Oo(t,e,n){var r=e.value,o=t.multiple;if(!o||Array.isArray(r)){for(var i,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],o)i=M(r,Bo(a))>-1,a.selected!==i&&(a.selected=i);else if(R(Bo(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));o||(t.selectedIndex=-1)}}function To(t,e){return e.every(function(e){return!R(e,t)})}function Bo(t){return"_value"in t?t._value:t.value}function No(t){t.target.composing=!0}function Io(t){t.target.composing&&(t.target.composing=!1,Ro(t.target,"input"))}function Ro(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Mo(t){return!t.componentInstance||t.data&&t.data.transition?t:Mo(t.componentInstance._vnode)}var Po={model:ko,show:{bind:function(t,e,n){var r=e.value,o=(n=Mo(n)).data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&o?(n.data.show=!0,_o(n,function(){t.style.display=i})):t.style.display=r?i:"none"},update:function(t,e,n){var r=e.value;!r!=!e.oldValue&&((n=Mo(n)).data&&n.data.transition?(n.data.show=!0,r?_o(n,function(){t.style.display=t.__vOriginalDisplay}):Ao(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,o){o||(t.style.display=t.__vOriginalDisplay)}}},Lo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function zo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?zo(pe(e.children)):t}function Do(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var o=n._parentListeners;for(var i in o)e[w(i)]=o[i];return e}function jo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var Uo={name:"transition",props:Lo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(function(t){return t.tag||de(t)})).length){0;var r=this.mode;0;var o=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return o;var i=zo(o);if(!i)return o;if(this._leaving)return jo(t,o);var s="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?s+"comment":s+i.tag:a(i.key)?0===String(i.key).indexOf(s)?i.key:s+i.key:i.key;var c=(i.data||(i.data={})).transition=Do(this),l=this._vnode,u=zo(l);if(i.data.directives&&i.data.directives.some(function(t){return"show"===t.name})&&(i.data.show=!0),u&&u.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(i,u)&&!de(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var f=u.data.transition=O({},c);if("out-in"===r)return this._leaving=!0,se(f,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),jo(t,o);if("in-out"===r){if(de(i))return l;var d,p=function(){d()};se(c,"afterEnter",p),se(c,"enterCancelled",p),se(f,"delayLeave",function(t){d=t})}}return o}}},Fo=O({tag:String,moveClass:String},Lo);function Ko(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Vo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Zo(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,o=e.top-n.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+o+"px)",i.transitionDuration="0s"}}delete Fo.mode;var qo={Transition:Uo,TransitionGroup:{props:Fo,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,o=this.$slots.default||[],i=this.children=[],a=Do(this),s=0;s<o.length;s++){var c=o[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))i.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a;else;}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=t(e,null,l),this.removed=u}return t(e,null,i)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Ko),t.forEach(Vo),t.forEach(Zo),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;po(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(so,n._moveCb=function t(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(so,t),n._moveCb=null,ho(n,e))})}}))},methods:{hasMove:function(t,e){if(!ro)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){to(n,t)}),$r(n,e),n.style.display="none",this.$el.appendChild(n);var r=go(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};dn.config.mustUseProp=wn,dn.config.isReservedTag=Ln,dn.config.isReservedAttr=_n,dn.config.getTagNamespace=zn,dn.config.isUnknownElement=function(t){if(!q)return!0;if(Ln(t))return!1;if(t=t.toLowerCase(),null!=Dn[t])return Dn[t];var e=document.createElement(t);return t.indexOf("-")>-1?Dn[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Dn[t]=/HTMLUnknownElement/.test(e.toString())},O(dn.options.directives,Po),O(dn.options.components,qo),dn.prototype.__patch__=q?xo:B,dn.prototype.$mount=function(t,e){return function(t,e,n){return t.$el=e,t.$options.render||(t.$options.render=mt),Ee(t,"beforeMount"),new Ie(t,function(){t._update(t._render(),n)},B,null,!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Ee(t,"mounted")),t}(this,t=t&&q?Un(t):void 0,e)},q&&setTimeout(function(){j.devtools&&rt&&rt.emit("init",dn)},0);var Xo=/\{\{((?:.|\n)+?)\}\}/g,Yo=/[-.*+?^${}()|[\]\/\\]/g,Go=_(function(t){var e=t[0].replace(Yo,"\\$&"),n=t[1].replace(Yo,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")});function Ho(t,e){var n=e?Go(e):Xo;if(n.test(t)){for(var r,o,i,a=[],s=[],c=n.lastIndex=0;r=n.exec(t);){(o=r.index)>c&&(s.push(i=t.slice(c,o)),a.push(JSON.stringify(i)));var l=hr(r[1].trim());a.push("_s("+l+")"),s.push({"@binding":l}),c=o+r[0].length}return c<t.length&&(s.push(i=t.slice(c)),a.push(JSON.stringify(i))),{expression:a.join("+"),tokens:s}}}var Qo={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=Cr(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=Er(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}};var Jo,Wo={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=Cr(t,"style");n&&(t.staticStyle=JSON.stringify(Kr(n)));var r=Er(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}},$o=function(t){return(Jo=Jo||document.createElement("div")).innerHTML=t,Jo.textContent},ti=h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ei=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),ni=h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),ri=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,oi="[a-zA-Z_][\\w\\-\\.]*",ii="((?:"+oi+"\\:)?"+oi+")",ai=new RegExp("^<"+ii),si=/^\s*(\/?)>/,ci=new RegExp("^<\\/"+ii+"[^>]*>"),li=/^<!DOCTYPE [^>]+>/i,ui=/^<!\--/,fi=/^<!\[/,di=!1;"x".replace(/x(.)?/g,function(t,e){di=""===e});var pi=h("script,style,textarea",!0),hi={},mi={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},vi=/&(?:lt|gt|quot|amp);/g,gi=/&(?:lt|gt|quot|amp|#10|#9);/g,yi=h("pre,textarea",!0),bi=function(t,e){return t&&yi(t)&&"\n"===e[0]};function _i(t,e){var n=e?gi:vi;return t.replace(n,function(t){return mi[t]})}var Ai,wi,Ei,Ci,xi,ki,Si,Oi,Ti=/^@|^v-on:/,Bi=/^v-|^@|^:/,Ni=/([^]*?)\s+(?:in|of)\s+([^]*)/,Ii=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Ri=/^\(|\)$/g,Mi=/:(.*)$/,Pi=/^:|^v-bind:/,Li=/\.[^.]+/g,zi=_($o);function Di(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}(e),parent:n,children:[]}}function ji(t,e){Ai=e.warn||vr,ki=e.isPreTag||N,Si=e.mustUseProp||N,Oi=e.getTagNamespace||N,Ei=gr(e.modules,"transformNode"),Ci=gr(e.modules,"preTransformNode"),xi=gr(e.modules,"postTransformNode"),wi=e.delimiters;var n,r,o=[],i=!1!==e.preserveWhitespace,a=!1,s=!1;function c(t){t.pre&&(a=!1),ki(t.tag)&&(s=!1);for(var n=0;n<xi.length;n++)xi[n](t,e)}return function(t,e){for(var n,r,o=[],i=e.expectHTML,a=e.isUnaryTag||N,s=e.canBeLeftOpenTag||N,c=0;t;){if(n=t,r&&pi(r)){var l=0,u=r.toLowerCase(),f=hi[u]||(hi[u]=new RegExp("([\\s\\S]*?)(</"+u+"[^>]*>)","i")),d=t.replace(f,function(t,n,r){return l=r.length,pi(u)||"noscript"===u||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),bi(u,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});c+=t.length-d.length,t=d,k(u,c-l,c)}else{var p=t.indexOf("<");if(0===p){if(ui.test(t)){var h=t.indexOf("--\x3e");if(h>=0){e.shouldKeepComment&&e.comment(t.substring(4,h)),E(h+3);continue}}if(fi.test(t)){var m=t.indexOf("]>");if(m>=0){E(m+2);continue}}var v=t.match(li);if(v){E(v[0].length);continue}var g=t.match(ci);if(g){var y=c;E(g[0].length),k(g[1],y,c);continue}var b=C();if(b){x(b),bi(r,t)&&E(1);continue}}var _=void 0,A=void 0,w=void 0;if(p>=0){for(A=t.slice(p);!(ci.test(A)||ai.test(A)||ui.test(A)||fi.test(A)||(w=A.indexOf("<",1))<0);)p+=w,A=t.slice(p);_=t.substring(0,p),E(p)}p<0&&(_=t,t=""),e.chars&&_&&e.chars(_)}if(t===n){e.chars&&e.chars(t);break}}function E(e){c+=e,t=t.substring(e)}function C(){var e=t.match(ai);if(e){var n,r,o={tagName:e[1],attrs:[],start:c};for(E(e[0].length);!(n=t.match(si))&&(r=t.match(ri));)E(r[0].length),o.attrs.push(r);if(n)return o.unarySlash=n[1],E(n[0].length),o.end=c,o}}function x(t){var n=t.tagName,c=t.unarySlash;i&&("p"===r&&ni(n)&&k(r),s(n)&&r===n&&k(n));for(var l=a(n)||!!c,u=t.attrs.length,f=new Array(u),d=0;d<u;d++){var p=t.attrs[d];di&&-1===p[0].indexOf('""')&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var h=p[3]||p[4]||p[5]||"",m="a"===n&&"href"===p[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;f[d]={name:p[1],value:_i(h,m)}}l||(o.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f}),r=n),e.start&&e.start(n,f,l,t.start,t.end)}function k(t,n,i){var a,s;if(null==n&&(n=c),null==i&&(i=c),t&&(s=t.toLowerCase()),t)for(a=o.length-1;a>=0&&o[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var l=o.length-1;l>=a;l--)e.end&&e.end(o[l].tag,n,i);o.length=a,r=a&&o[a-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,i):"p"===s&&(e.start&&e.start(t,[],!1,n,i),e.end&&e.end(t,n,i))}k()}(t,{warn:Ai,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,start:function(t,i,l){var u=r&&r.ns||Oi(t);H&&"svg"===u&&(i=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Zi.test(r.name)||(r.name=r.name.replace(qi,""),e.push(r))}return e}(i));var f,d=Di(t,i,r);u&&(d.ns=u),"style"!==(f=d).tag&&("script"!==f.tag||f.attrsMap.type&&"text/javascript"!==f.attrsMap.type)||nt()||(d.forbidden=!0);for(var p=0;p<Ci.length;p++)d=Ci[p](d,e)||d;function h(t){0}if(a||(!function(t){null!=Cr(t,"v-pre")&&(t.pre=!0)}(d),d.pre&&(a=!0)),ki(d.tag)&&(s=!0),a?function(t){var e=t.attrsList.length;if(e)for(var n=t.attrs=new Array(e),r=0;r<e;r++)n[r]={name:t.attrsList[r].name,value:JSON.stringify(t.attrsList[r].value)};else t.pre||(t.plain=!0)}(d):d.processed||(Fi(d),function(t){var e=Cr(t,"v-if");if(e)t.if=e,Ki(t,{exp:e,block:t});else{null!=Cr(t,"v-else")&&(t.else=!0);var n=Cr(t,"v-else-if");n&&(t.elseif=n)}}(d),function(t){null!=Cr(t,"v-once")&&(t.once=!0)}(d),Ui(d,e)),n?o.length||n.if&&(d.elseif||d.else)&&(h(),Ki(n,{exp:d.elseif,block:d})):(n=d,h()),r&&!d.forbidden)if(d.elseif||d.else)!function(t,e){var n=function(t){var e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop()}}(e.children);n&&n.if&&Ki(n,{exp:t.elseif,block:t})}(d,r);else if(d.slotScope){r.plain=!1;var m=d.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[m]=d}else r.children.push(d),d.parent=r;l?c(d):(r=d,o.push(d))},end:function(){var t=o[o.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!s&&t.children.pop(),o.length-=1,r=o[o.length-1],c(t)},chars:function(t){if(r&&(!H||"textarea"!==r.tag||r.attrsMap.placeholder!==t)){var e,n,o=r.children;if(t=s||t.trim()?"script"===(e=r).tag||"style"===e.tag?t:zi(t):i&&o.length?" ":"")!a&&" "!==t&&(n=Ho(t,wi))?o.push({type:2,expression:n.expression,tokens:n.tokens,text:t}):" "===t&&o.length&&" "===o[o.length-1].text||o.push({type:3,text:t})}},comment:function(t){r.children.push({type:3,text:t,isComment:!0})}}),n}function Ui(t,e){var n,r;(r=Er(n=t,"key"))&&(n.key=r),t.plain=!t.key&&!t.attrsList.length,function(t){var e=Er(t,"ref");e&&(t.ref=e,t.refInFor=function(t){var e=t;for(;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(t))}(t),function(t){if("slot"===t.tag)t.slotName=Er(t,"name");else{var e;"template"===t.tag?(e=Cr(t,"scope"),t.slotScope=e||Cr(t,"slot-scope")):(e=Cr(t,"slot-scope"))&&(t.slotScope=e);var n=Er(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,"template"===t.tag||t.slotScope||br(t,"slot",n))}}(t),function(t){var e;(e=Er(t,"is"))&&(t.component=e);null!=Cr(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var o=0;o<Ei.length;o++)t=Ei[o](t,e)||t;!function(t){var e,n,r,o,i,a,s,c=t.attrsList;for(e=0,n=c.length;e<n;e++){if(r=o=c[e].name,i=c[e].value,Bi.test(r))if(t.hasBindings=!0,(a=Vi(r))&&(r=r.replace(Li,"")),Pi.test(r))r=r.replace(Pi,""),i=hr(i),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=w(r))&&(r="innerHTML")),a.camel&&(r=w(r)),a.sync&&wr(t,"update:"+w(r),kr(i,"$event"))),s||!t.component&&Si(t.tag,t.attrsMap.type,r)?yr(t,r,i):br(t,r,i);else if(Ti.test(r))r=r.replace(Ti,""),wr(t,r,i,a,!1);else{var l=(r=r.replace(Bi,"")).match(Mi),u=l&&l[1];u&&(r=r.slice(0,-(u.length+1))),Ar(t,r,o,i,u,a)}else br(t,r,JSON.stringify(i)),!t.component&&"muted"===r&&Si(t.tag,t.attrsMap.type,r)&&yr(t,r,"true")}}(t)}function Fi(t){var e;if(e=Cr(t,"v-for")){var n=function(t){var e=t.match(Ni);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(Ri,""),o=r.match(Ii);o?(n.alias=r.replace(Ii,""),n.iterator1=o[1].trim(),o[2]&&(n.iterator2=o[2].trim())):n.alias=r;return n}(e);n&&O(t,n)}}function Ki(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function Vi(t){var e=t.match(Li);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}var Zi=/^xmlns:NS\d+/,qi=/^NS\d+:/;function Xi(t){return Di(t.tag,t.attrsList.slice(),t.parent)}var Yi=[Qo,Wo,{preTransformNode:function(t,e){if("input"===t.tag){var n,r=t.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Er(t,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var o=Cr(t,"v-if",!0),i=o?"&&("+o+")":"",a=null!=Cr(t,"v-else",!0),s=Cr(t,"v-else-if",!0),c=Xi(t);Fi(c),_r(c,"type","checkbox"),Ui(c,e),c.processed=!0,c.if="("+n+")==='checkbox'"+i,Ki(c,{exp:c.if,block:c});var l=Xi(t);Cr(l,"v-for",!0),_r(l,"type","radio"),Ui(l,e),Ki(c,{exp:"("+n+")==='radio'"+i,block:l});var u=Xi(t);return Cr(u,"v-for",!0),_r(u,":type",n),Ui(u,e),Ki(c,{exp:o,block:u}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var Gi,Hi,Qi={expectHTML:!0,modules:Yi,directives:{model:function(t,e,n){n;var r=e.value,o=e.modifiers,i=t.tag,a=t.attrsMap.type;if(t.component)return xr(t,r,o),!1;if("select"===i)!function(t,e,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+kr(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),wr(t,"change",r,null,!0)}(t,r,o);else if("input"===i&&"checkbox"===a)!function(t,e,n){var r=n&&n.number,o=Er(t,"value")||"null",i=Er(t,"true-value")||"true",a=Er(t,"false-value")||"false";yr(t,"checked","Array.isArray("+e+")?_i("+e+","+o+")>-1"+("true"===i?":("+e+")":":_q("+e+","+i+")")),wr(t,"change","var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+i+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+o+")":o)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+kr(e,"$$a.concat([$$v])")+")}else{$$i>-1&&("+kr(e,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+kr(e,"$$c")+"}",null,!0)}(t,r,o);else if("input"===i&&"radio"===a)!function(t,e,n){var r=n&&n.number,o=Er(t,"value")||"null";yr(t,"checked","_q("+e+","+(o=r?"_n("+o+")":o)+")"),wr(t,"change",kr(e,o),null,!0)}(t,r,o);else if("input"===i||"textarea"===i)!function(t,e,n){var r=t.attrsMap.type,o=n||{},i=o.lazy,a=o.number,s=o.trim,c=!i&&"range"!==r,l=i?"change":"range"===r?Rr:"input",u="$event.target.value";s&&(u="$event.target.value.trim()"),a&&(u="_n("+u+")");var f=kr(e,u);c&&(f="if($event.target.composing)return;"+f),yr(t,"value","("+e+")"),wr(t,l,f,null,!0),(s||a)&&wr(t,"blur","$forceUpdate()")}(t,r,o);else if(!j.isReservedTag(i))return xr(t,r,o),!1;return!0},text:function(t,e){e.value&&yr(t,"textContent","_s("+e.value+")")},html:function(t,e){e.value&&yr(t,"innerHTML","_s("+e.value+")")}},isPreTag:function(t){return"pre"===t},isUnaryTag:ti,mustUseProp:wn,canBeLeftOpenTag:ei,isReservedTag:Ln,getTagNamespace:zn,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}(Yi)},Ji=_(function(t){return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))});function Wi(t,e){t&&(Gi=Ji(e.staticKeys||""),Hi=e.isReservedTag||N,function t(e){e.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||m(t.tag)||!Hi(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Gi)))}(e);if(1===e.type){if(!Hi(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var n=0,r=e.children.length;n<r;n++){var o=e.children[n];t(o),o.static||(e.static=!1)}if(e.ifConditions)for(var i=1,a=e.ifConditions.length;i<a;i++){var s=e.ifConditions[i].block;t(s),s.static||(e.static=!1)}}}(t),function t(e,n){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=n),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var r=0,o=e.children.length;r<o;r++)t(e.children[r],n||!!e.for);if(e.ifConditions)for(var i=1,a=e.ifConditions.length;i<a;i++)t(e.ifConditions[i].block,n)}}(t,!1))}var $i=/^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ta=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,ea={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},na={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},ra=function(t){return"if("+t+")return null;"},oa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ra("$event.target !== $event.currentTarget"),ctrl:ra("!$event.ctrlKey"),shift:ra("!$event.shiftKey"),alt:ra("!$event.altKey"),meta:ra("!$event.metaKey"),left:ra("'button' in $event && $event.button !== 0"),middle:ra("'button' in $event && $event.button !== 1"),right:ra("'button' in $event && $event.button !== 2")};function ia(t,e,n){var r=e?"nativeOn:{":"on:{";for(var o in t)r+='"'+o+'":'+aa(o,t[o])+",";return r.slice(0,-1)+"}"}function aa(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return aa(t,e)}).join(",")+"]";var n=ta.test(e.value),r=$i.test(e.value);if(e.modifiers){var o="",i="",a=[];for(var s in e.modifiers)if(oa[s])i+=oa[s],ea[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;i+=ra(["ctrl","shift","alt","meta"].filter(function(t){return!c[t]}).map(function(t){return"$event."+t+"Key"}).join("||"))}else a.push(s);return a.length&&(o+=function(t){return"if(!('button' in $event)&&"+t.map(sa).join("&&")+")return null;"}(a)),i&&(o+=i),"function($event){"+o+(n?"return "+e.value+"($event)":r?"return ("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function sa(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=ea[t],r=na[t];return"_k($event.keyCode,"+JSON.stringify(t)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var ca={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:B},la=function(t){this.options=t,this.warn=t.warn||vr,this.transforms=gr(t.modules,"transformCode"),this.dataGenFns=gr(t.modules,"genData"),this.directives=O(O({},ca),t.directives);var e=t.isReservedTag||N;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]};function ua(t,e){var n=new la(e);return{render:"with(this){return "+(t?fa(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function fa(t,e){if(t.staticRoot&&!t.staticProcessed)return da(t,e);if(t.once&&!t.onceProcessed)return pa(t,e);if(t.for&&!t.forProcessed)return function(t,e,n,r){var o=t.for,i=t.alias,a=t.iterator1?","+t.iterator1:"",s=t.iterator2?","+t.iterator2:"";0;return t.forProcessed=!0,(r||"_l")+"(("+o+"),function("+i+a+s+"){return "+(n||fa)(t,e)+"})"}(t,e);if(t.if&&!t.ifProcessed)return ha(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=ga(t,e),o="_t("+n+(r?","+r:""),i=t.attrs&&"{"+t.attrs.map(function(t){return w(t.name)+":"+t.value}).join(",")+"}",a=t.attrsMap["v-bind"];!i&&!a||r||(o+=",null");i&&(o+=","+i);a&&(o+=(i?"":",null")+","+a);return o+")"}(t,e);var n;if(t.component)n=function(t,e,n){var r=e.inlineTemplate?null:ga(e,n,!0);return"_c("+t+","+ma(e,n)+(r?","+r:"")+")"}(t.component,t,e);else{var r=t.plain?void 0:ma(t,e),o=t.inlineTemplate?null:ga(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(o?","+o:"")+")"}for(var i=0;i<e.transforms.length;i++)n=e.transforms[i](t,n);return n}return ga(t,e)||"void 0"}function da(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+fa(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function pa(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return ha(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+fa(t,e)+","+e.onceId+++","+n+")":fa(t,e)}return da(t,e)}function ha(t,e,n,r){return t.ifProcessed=!0,function t(e,n,r,o){if(!e.length)return o||"_e()";var i=e.shift();return i.exp?"("+i.exp+")?"+a(i.block)+":"+t(e,n,r,o):""+a(i.block);function a(t){return r?r(t,n):t.once?pa(t,n):fa(t,n)}}(t.ifConditions.slice(),e,n,r)}function ma(t,e){var n="{",r=function(t,e){var n=t.directives;if(!n)return;var r,o,i,a,s="directives:[",c=!1;for(r=0,o=n.length;r<o;r++){i=n[r],a=!0;var l=e.directives[i.name];l&&(a=!!l(t,i,e.warn)),a&&(c=!0,s+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(t,e);r&&(n+=r+","),t.key&&(n+="key:"+t.key+","),t.ref&&(n+="ref:"+t.ref+","),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'+t.tag+'",');for(var o=0;o<e.dataGenFns.length;o++)n+=e.dataGenFns[o](t);if(t.attrs&&(n+="attrs:{"+_a(t.attrs)+"},"),t.props&&(n+="domProps:{"+_a(t.props)+"},"),t.events&&(n+=ia(t.events,!1,e.warn)+","),t.nativeEvents&&(n+=ia(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&!t.slotScope&&(n+="slot:"+t.slotTarget+","),t.scopedSlots&&(n+=function(t,e){return"scopedSlots:_u(["+Object.keys(t).map(function(n){return va(n,t[n],e)}).join(",")+"])"}(t.scopedSlots,e)+","),t.model&&(n+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var i=function(t,e){var n=t.children[0];0;if(1===n.type){var r=ua(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}(t,e);i&&(n+=i+",")}return n=n.replace(/,$/,"")+"}",t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function va(t,e,n){return e.for&&!e.forProcessed?function(t,e,n){var r=e.for,o=e.alias,i=e.iterator1?","+e.iterator1:"",a=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+r+"),function("+o+i+a+"){return "+va(t,e,n)+"})"}(t,e,n):"{key:"+t+",fn:"+("function("+String(e.slotScope)+"){return "+("template"===e.tag?e.if?e.if+"?"+(ga(e,n)||"undefined")+":undefined":ga(e,n)||"undefined":fa(e,n))+"}")+"}"}function ga(t,e,n,r,o){var i=t.children;if(i.length){var a=i[0];if(1===i.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||fa)(a,e);var s=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var o=t[r];if(1===o.type){if(ya(o)||o.ifConditions&&o.ifConditions.some(function(t){return ya(t.block)})){n=2;break}(e(o)||o.ifConditions&&o.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}(i,e.maybeComponent):0,c=o||ba;return"["+i.map(function(t){return c(t,e)}).join(",")+"]"+(s?","+s:"")}}function ya(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function ba(t,e){return 1===t.type?fa(t,e):3===t.type&&t.isComment?(r=t,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=t).type?n.expression:Aa(JSON.stringify(n.text)))+")";var n,r}function _a(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='"'+r.name+'":'+Aa(r.value)+","}return e.slice(0,-1)}function Aa(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function wa(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),B}}var Ea,Ca,xa=(Ea=function(t,e){var n=ji(t.trim(),e);!1!==e.optimize&&Wi(n,e);var r=ua(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(t){function e(e,n){var r=Object.create(t),o=[],i=[];if(r.warn=function(t,e){(e?i:o).push(t)},n)for(var a in n.modules&&(r.modules=(t.modules||[]).concat(n.modules)),n.directives&&(r.directives=O(Object.create(t.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);var s=Ea(e,r);return s.errors=o,s.tips=i,s}return{compile:e,compileToFunctions:function(t){var e=Object.create(null);return function(n,r,o){(r=O({},r)).warn,delete r.warn;var i=r.delimiters?String(r.delimiters)+n:n;if(e[i])return e[i];var a=t(n,r),s={},c=[];return s.render=wa(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(t){return wa(t,c)}),e[i]=s}}(e)}})(Qi).compileToFunctions;function ka(t){return(Ca=Ca||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',Ca.innerHTML.indexOf("&#10;")>0}var Sa=!!q&&ka(!1),Oa=!!q&&ka(!0),Ta=_(function(t){var e=Un(t);return e&&e.innerHTML}),Ba=dn.prototype.$mount;dn.prototype.$mount=function(t,e){if((t=t&&Un(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Ta(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){0;var o=xa(r,{shouldDecodeNewlines:Sa,shouldDecodeNewlinesForHref:Oa,delimiters:n.delimiters,comments:n.comments},this),i=o.render,a=o.staticRenderFns;n.render=i,n.staticRenderFns=a}}return Ba.call(this,t,e)},dn.compile=xa,e.a=dn}).call(e,n("DuR2"))},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"7UMu":function(t,e,n){var r=n("R9M2");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"82Mu":function(t,e,n){var r=n("7KvD"),o=n("L42u").set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,c="process"==n("R9M2")(a);t.exports=function(){var t,e,n,l=function(){var r,o;for(c&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){a.nextTick(l)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(l)}}else n=function(){o.call(r,l)};else{var f=!0,d=document.createTextNode("");new i(l).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},"880/":function(t,e,n){t.exports=n("hJx8")},"8Vd+":function(t,e,n){"use strict";(function(t){
/*!
 * vue-qrcode v1.0.0
 * https://xkeshi.github.io/vue-qrcode
 *
 * Copyright 2017-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-06-20T03:42:27.281Z
 */
"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var n,r=(function(t,e){t.exports=function(){var t=function(){},e=Object.prototype.hasOwnProperty,n=Array.prototype.slice;function r(t,r,o){for(var i,a,s=0,c=(o=n.call(arguments,2)).length;s<c;s++)for(i in a=o[s])t&&!e.call(a,i)||(r[i]=a[i])}var o=function(e,n,o,i){var a=this;return"string"!=typeof e&&(i=o,o=n,n=e,e=null),"function"!=typeof n&&(i=o,o=n,n=function(){return a.apply(this,arguments)}),r(!1,n,a,i),n.prototype=function(e,n){var o;return"function"==typeof Object.create?o=Object.create(e):(t.prototype=e,o=new t,t.prototype=null),n&&r(!0,o,n),o}(a.prototype,o),n.prototype.constructor=n,n.class_=e||a.class_,n.super_=a,n};function i(){}i.class_="Nevis",i.super_=Object,i.extend=o;var a=i,s=a.extend(function(t,e,n){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(n)},{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,n=e.padding||0,r=Math.floor((e.size-2*n)/t.width);return Math.max(1,r)},getOffset:function(t){var e=this.qrious,n=e.padding;if(null!=n)return n;var r=this.getModuleSize(t),o=Math.floor((e.size-r*t.width)/2);return Math.max(0,o)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),c=s.extend({draw:function(t){var e,n,r=this.qrious,o=this.getModuleSize(t),i=this.getOffset(t),a=this.element.getContext("2d");for(a.fillStyle=r.foreground,a.globalAlpha=r.foregroundAlpha,e=0;e<t.width;e++)for(n=0;n<t.width;n++)t.buffer[n*t.width+e]&&a.fillRect(o*e+i,o*n+i,o,o)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),n=t.size;e.lineWidth=1,e.clearRect(0,0,n,n),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,n,n)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),l=a.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),u=a.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),f=a.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),d=a.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),p=a.extend(function(t){var e,n,r,o,i,a=t.value.length;for(this._badness=[],this._level=u.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,r=4*(this._level-1)+16*(this._version-1),o=u.BLOCKS[r++],i=u.BLOCKS[r++],e=u.BLOCKS[r++],n=u.BLOCKS[r],r=e*(o+i)+i-3+(this._version<=9),!(a<=r)););this._dataBlock=e,this._eccBlock=n,this._neccBlock1=o,this._neccBlock2=i;var s=this.width=17+4*this._version;this.buffer=p._createArray(s*s),this._ecc=p._createArray(e+(e+n)*(o+i)+i),this._mask=p._createArray((s*(s+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+s*(s-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(a),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(t,e){var n,r=this.buffer,o=this.width;for(r[t+o*e]=1,n=-2;n<2;n++)r[t+n+o*(e-2)]=1,r[t-2+o*(e+n+1)]=1,r[t+2+o*(e+n)]=1,r[t+n+1+o*(e+2)]=1;for(n=0;n<2;n++)this._setMask(t-1,e+n),this._setMask(t+1,e-n),this._setMask(t-n,e-1),this._setMask(t+n,e+1)},_appendData:function(t,e,n,r){var o,i,a,s=this._polynomial,c=this._stringBuffer;for(i=0;i<r;i++)c[n+i]=0;for(i=0;i<e;i++){if(255!==(o=f.LOG[c[t+i]^c[n]]))for(a=1;a<r;a++)c[n+a-1]=c[n+a]^f.EXPONENT[p._modN(o+s[r-a])];else for(a=n;a<n+r;a++)c[a]=c[a+1];c[n+r-1]=255===o?0:f.EXPONENT[p._modN(o+s[0])]}},_appendEccToData:function(){var t,e=0,n=this._dataBlock,r=this._calculateMaxLength(),o=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,n,r,o),e+=n,r+=o;for(t=0;t<this._neccBlock2;t++)this._appendData(e,n+1,r,o),e+=n+1,r+=o},_applyMask:function(t){var e,n,r,o,i=this.buffer,a=this.width;switch(t){case 0:for(o=0;o<a;o++)for(r=0;r<a;r++)r+o&1||this._isMasked(r,o)||(i[r+o*a]^=1);break;case 1:for(o=0;o<a;o++)for(r=0;r<a;r++)1&o||this._isMasked(r,o)||(i[r+o*a]^=1);break;case 2:for(o=0;o<a;o++)for(e=0,r=0;r<a;r++,e++)3===e&&(e=0),e||this._isMasked(r,o)||(i[r+o*a]^=1);break;case 3:for(n=0,o=0;o<a;o++,n++)for(3===n&&(n=0),e=n,r=0;r<a;r++,e++)3===e&&(e=0),e||this._isMasked(r,o)||(i[r+o*a]^=1);break;case 4:for(o=0;o<a;o++)for(e=0,n=o>>1&1,r=0;r<a;r++,e++)3===e&&(e=0,n=!n),n||this._isMasked(r,o)||(i[r+o*a]^=1);break;case 5:for(n=0,o=0;o<a;o++,n++)for(3===n&&(n=0),e=0,r=0;r<a;r++,e++)3===e&&(e=0),(r&o&1)+!(!e|!n)||this._isMasked(r,o)||(i[r+o*a]^=1);break;case 6:for(n=0,o=0;o<a;o++,n++)for(3===n&&(n=0),e=0,r=0;r<a;r++,e++)3===e&&(e=0),(r&o&1)+(e&&e===n)&1||this._isMasked(r,o)||(i[r+o*a]^=1);break;case 7:for(n=0,o=0;o<a;o++,n++)for(3===n&&(n=0),e=0,r=0;r<a;r++,e++)3===e&&(e=0),(e&&e===n)+(r+o&1)&1||this._isMasked(r,o)||(i[r+o*a]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,n=this._eccBlock,r=this._polynomial;for(r[0]=1,t=0;t<n;t++){for(r[t+1]=1,e=t;e>0;e--)r[e]=r[e]?r[e-1]^f.EXPONENT[p._modN(f.LOG[r[e]]+t)]:r[e-1];r[0]=f.EXPONENT[p._modN(f.LOG[r[0]]+t)]}for(t=0;t<=n;t++)r[t]=f.LOG[r[t]]},_checkBadness:function(){var t,e,n,r,o,i=0,a=this._badness,s=this.buffer,c=this.width;for(o=0;o<c-1;o++)for(r=0;r<c-1;r++)(s[r+c*o]&&s[r+1+c*o]&&s[r+c*(o+1)]&&s[r+1+c*(o+1)]||!(s[r+c*o]||s[r+1+c*o]||s[r+c*(o+1)]||s[r+1+c*(o+1)]))&&(i+=p.N2);var l=0;for(o=0;o<c;o++){for(n=0,a[0]=0,t=0,r=0;r<c;r++)e=s[r+c*o],t===e?a[n]++:a[++n]=1,l+=(t=e)?1:-1;i+=this._getBadness(n)}l<0&&(l=-l);var u=0,f=l;for(f+=f<<2,f<<=1;f>c*c;)f-=c*c,u++;for(i+=u*p.N4,r=0;r<c;r++){for(n=0,a[0]=0,t=0,o=0;o<c;o++)e=s[r+c*o],t===e?a[n]++:a[++n]=1,t=e;i+=this._getBadness(n)}return i},_convertBitStream:function(t){var e,n,r=this._ecc,o=this._version;for(n=0;n<t;n++)r[n]=this._value.charCodeAt(n);var i=this._stringBuffer=r.slice(),a=this._calculateMaxLength();t>=a-2&&(t=a-2,o>9&&t--);var s=t;if(o>9){for(i[s+2]=0,i[s+3]=0;s--;)e=i[s],i[s+3]|=255&e<<4,i[s+2]=e>>4;i[2]|=255&t<<4,i[1]=t>>4,i[0]=64|t>>12}else{for(i[s+1]=0,i[s+2]=0;s--;)e=i[s],i[s+2]|=255&e<<4,i[s+1]=e>>4;i[1]|=255&t<<4,i[0]=64|t>>4}for(s=t+3-(o<10);s<a;)i[s++]=236,i[s++]=17},_getBadness:function(t){var e,n=0,r=this._badness;for(e=0;e<=t;e++)r[e]>=5&&(n+=p.N1+r[e]-5);for(e=3;e<t-1;e+=2)r[e-2]===r[e+2]&&r[e+2]===r[e-1]&&r[e-1]===r[e+1]&&3*r[e-1]===r[e]&&(0===r[e-3]||e+3>t||3*r[e-3]>=4*r[e]||3*r[e+3]>=4*r[e])&&(n+=p.N3);return n},_finish:function(){var t,e;this._stringBuffer=this.buffer.slice();var n=0,r=3e4;for(e=0;e<8&&(this._applyMask(e),(t=this._checkBadness())<r&&(r=t,n=e),7!==n);e++)this.buffer=this._stringBuffer.slice();n!==e&&this._applyMask(n),r=u.FINAL_FORMAT[n+(this._level-1<<3)];var o=this.buffer,i=this.width;for(e=0;e<8;e++,r>>=1)1&r&&(o[i-1-e+8*i]=1,e<6?o[8+i*e]=1:o[8+i*(e+1)]=1);for(e=0;e<7;e++,r>>=1)1&r&&(o[8+i*(i-7+e)]=1,e?o[6-e+8*i]=1:o[7+8*i]=1)},_interleaveBlocks:function(){var t,e,n=this._dataBlock,r=this._ecc,o=this._eccBlock,i=0,a=this._calculateMaxLength(),s=this._neccBlock1,c=this._neccBlock2,l=this._stringBuffer;for(t=0;t<n;t++){for(e=0;e<s;e++)r[i++]=l[t+e*n];for(e=0;e<c;e++)r[i++]=l[s*n+t+e*(n+1)]}for(e=0;e<c;e++)r[i++]=l[s*n+t+e*(n+1)];for(t=0;t<o;t++)for(e=0;e<s+c;e++)r[i++]=l[a+t+e*o];this._stringBuffer=r},_insertAlignments:function(){var t,e,n,r=this._version,o=this.width;if(r>1)for(t=l.BLOCK[r],n=o-7;;){for(e=o-7;e>t-3&&(this._addAlignment(e,n),!(e<t));)e-=t;if(n<=t+9)break;n-=t,this._addAlignment(6,n),this._addAlignment(n,6)}},_insertFinders:function(){var t,e,n,r,o=this.buffer,i=this.width;for(t=0;t<3;t++){for(e=0,r=0,1===t&&(e=i-7),2===t&&(r=i-7),o[r+3+i*(e+3)]=1,n=0;n<6;n++)o[r+n+i*e]=1,o[r+i*(e+n+1)]=1,o[r+6+i*(e+n)]=1,o[r+n+1+i*(e+6)]=1;for(n=1;n<5;n++)this._setMask(r+n,e+1),this._setMask(r+1,e+n+1),this._setMask(r+5,e+n),this._setMask(r+n+1,e+5);for(n=2;n<4;n++)o[r+n+i*(e+2)]=1,o[r+2+i*(e+n+1)]=1,o[r+4+i*(e+n)]=1,o[r+n+1+i*(e+4)]=1}},_insertTimingGap:function(){var t,e,n=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(n-8,e),this._setMask(7,e+n-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+n-8,7),this._setMask(t,n-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,n=this.width;for(t=0;t<n-14;t++)1&t?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+6*n]=1,e[6+n*(8+t)]=1)},_insertVersion:function(){var t,e,n,r,o=this.buffer,i=this._version,a=this.width;if(i>6)for(t=d.BLOCK[i-7],e=17,n=0;n<6;n++)for(r=0;r<3;r++,e--)1&(e>11?i>>e-12:t>>e)?(o[5-n+a*(2-r+a-11)]=1,o[2-r+a-11+a*(5-n)]=1):(this._setMask(5-n,2-r+a-11),this._setMask(2-r+a-11,5-n))},_isMasked:function(t,e){var n=p._getMaskBit(t,e);return 1===this._mask[n]},_pack:function(){var t,e,n,r=1,o=1,i=this.width,a=i-1,s=i-1,c=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<c;e++)for(t=this._stringBuffer[e],n=0;n<8;n++,t<<=1){128&t&&(this.buffer[a+i*s]=1);do{o?a--:(a++,r?0!==s?s--:(r=!r,6==(a-=2)&&(a--,s=9)):s!==i-1?s++:(r=!r,6==(a-=2)&&(a--,s-=8))),o=!o}while(this._isMasked(a,s))}},_reverseMask:function(){var t,e,n=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+n-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+n-7)},_setMask:function(t,e){var n=p._getMaskBit(t,e);this._mask[n]=1},_syncMask:function(){var t,e,n=this.width;for(e=0;e<n;e++)for(t=0;t<=e;t++)this.buffer[t+n*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,n=[];for(e=0;e<t;e++)n[e]=0;return n},_getMaskBit:function(t,e){var n;return t>e&&(n=t,t=e,e=n),n=e,n+=e*e,n>>=1,n+=t},_modN:function(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t},N1:3,N2:3,N3:40,N4:10}),h=p,m=s.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),v=a.extend(function(t,e,n,r){this.name=t,this.modifiable=Boolean(e),this.defaultValue=n,this._valueTransformer=r},{transform:function(t){var e=this._valueTransformer;return"function"==typeof e?e(t,this):t}}),g=a.extend(null,{abs:function(t){return null!=t?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return null!=t?t.toUpperCase():null}}),y=a.extend(function(t){this.options={},t.forEach(function(t){this.options[t.name]=t},this)},{exists:function(t){return null!=this.options[t]},get:function(t,e){return y._get(this.options[t],e)},getAll:function(t){var e,n=this.options,r={};for(e in n)g.hasOwn(n,e)&&(r[e]=y._get(n[e],t));return r},init:function(t,e,n){var r,o;for(r in"function"!=typeof n&&(n=g.noop),this.options)g.hasOwn(this.options,r)&&(o=this.options[r],y._set(o,o.defaultValue,e),y._createAccessor(o,e,n));this._setAll(t,e,!0)},set:function(t,e,n){return this._set(t,e,n)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,n,r){var o=this.options[t];if(!o)throw new Error("Invalid option: "+t);if(!o.modifiable&&!r)throw new Error("Option cannot be modified: "+t);return y._set(o,e,n)},_setAll:function(t,e,n){if(!t)return!1;var r,o=!1;for(r in t)g.hasOwn(t,r)&&this._set(r,t[r],e,n)&&(o=!0);return o}},{_createAccessor:function(t,e,n){var r={get:function(){return y._get(t,e)}};t.modifiable&&(r.set=function(r){y._set(t,r,e)&&n(r,t)}),Object.defineProperty(e,t.name,r)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,n){var r="_"+t.name,o=n[r],i=t.transform(null!=e?e:t.defaultValue);return n[r]=i,i!==o}}),b=y,_=a.extend(function(){this._services={}},{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),A=new b([new v("background",!0,"white"),new v("backgroundAlpha",!0,1,g.abs),new v("element"),new v("foreground",!0,"black"),new v("foregroundAlpha",!0,1,g.abs),new v("level",!0,"L",g.toUpperCase),new v("mime",!0,"image/png"),new v("padding",!0,null,g.abs),new v("size",!0,100,g.abs),new v("value",!0,"")]),w=new _,E=a.extend(function(t){A.init(t,this,this.update.bind(this));var e=A.get("element",this),n=w.getService("element"),r=e&&n.isCanvas(e)?e:n.createCanvas(),o=e&&n.isImage(e)?e:n.createImage();this._canvasRenderer=new c(this,r,!0),this._imageRenderer=new m(this,o,o===e),this.update()},{get:function(){return A.getAll(this)},set:function(t){A.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new h({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){w.setService(t.getName(),t)}});Object.defineProperties(E.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var C=E,x=a.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}});return C.use(new x),C}()}(n={exports:{}},n.exports),n.exports),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i={name:"qrcode",props:{options:Object,tag:{type:String,default:"canvas"},value:{type:null,default:""}},render:function(t){return t(this.tag,this.$slots.default)},watch:{value:function(){this.generate()},options:function(){this.generate()}},methods:{generate:function(){this.$el&&new r(o({element:this.$el,value:String(this.value)},this.options))}},mounted:function(){this.generate()}};e.a=i}).call(e,n("DuR2"))},"94VQ":function(t,e,n){"use strict";var r=n("Yobk"),o=n("X8DO"),i=n("e6n0"),a={};n("hJx8")(a,n("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},"9bBU":function(t,e,n){n("mClu");var r=n("FeBl").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},BO1k:function(t,e,n){t.exports={default:n("fxRn"),__esModule:!0}},BwfY:function(t,e,n){n("fWfb"),n("M6a0"),n("OYls"),n("QWe/"),t.exports=n("FeBl").Symbol},"C/JF":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"icon",function(){return le}),n.d(e,"noAuto",function(){return ie}),n.d(e,"config",function(){return P}),n.d(e,"toHtml",function(){return _t}),n.d(e,"layer",function(){return de}),n.d(e,"text",function(){return ue}),n.d(e,"counter",function(){return fe}),n.d(e,"library",function(){return oe}),n.d(e,"dom",function(){return se}),n.d(e,"parse",function(){return ce}),n.d(e,"findIconDefinition",function(){return ne});
/*!
 * Font Awesome Free 5.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var r=function(){},o={},i={},a=null,s={mark:r,measure:r};try{"undefined"!=typeof window&&(o=window),"undefined"!=typeof document&&(i=document),"undefined"!=typeof MutationObserver&&(a=MutationObserver),"undefined"!=typeof performance&&(s=performance)}catch(t){}var c=(o.navigator||{}).userAgent,l=void 0===c?"":c,u=o,f=i,d=a,p=s,h=!!f.documentElement&&!!f.head&&"function"==typeof f.addEventListener&&"function"==typeof f.createElement,m=~l.indexOf("MSIE")||~l.indexOf("Trident/"),v=16,g="data-fa-i2svg",y="data-fa-pseudo-element",b="data-prefix",_="data-icon",A="fontawesome-i2svg",w=["HTML","HEAD","STYLE","SCRIPT"],E=function(){try{return!0}catch(t){return!1}}(),C=[1,2,3,4,5,6,7,8,9,10],x=C.concat([11,12,13,14,15,16,17,18,19,20]),k=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],S=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter"].concat(C.map(function(t){return t+"x"})).concat(x.map(function(t){return"w-"+t})),O=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},T=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},N=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),I=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},R=u.FontAwesomeConfig||{};if(f&&"function"==typeof f.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var e=N(t,2),n=e[0],r=e[1],o=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=f.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));void 0!==o&&null!==o&&(R[r]=o)})}var M=B({familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},R);M.autoReplaceSvg||(M.observeMutations=!1);var P=B({},M);u.FontAwesomeConfig=P;var L=u||{};L.___FONT_AWESOME___||(L.___FONT_AWESOME___={}),L.___FONT_AWESOME___.styles||(L.___FONT_AWESOME___.styles={}),L.___FONT_AWESOME___.hooks||(L.___FONT_AWESOME___.hooks={}),L.___FONT_AWESOME___.shims||(L.___FONT_AWESOME___.shims=[]);var z=L.___FONT_AWESOME___,D=[],j=!1;h&&((j=(f.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f.readyState))||f.addEventListener("DOMContentLoaded",function t(){f.removeEventListener("DOMContentLoaded",t),j=1,D.map(function(t){return t()})}));var U=v,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function K(t){if(t&&h){var e=f.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=f.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return f.head.insertBefore(e,r),t}}var V=0;function Z(){return++V}function q(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function X(t){return t.classList?q(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Y(t,e){var n,r=e.split("-"),o=r[0],i=r.slice(1).join("-");return o!==t||""===i||(n=i,~S.indexOf(n))?null:i}function G(t){return(""+t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+": ")+t[n]+";"},"")}function Q(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function J(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth;return{outer:{transform:"translate("+n/2+" 256)"},inner:{transform:"translate("+32*e.x+", "+32*e.y+") "+" "+("scale("+e.size/16*(e.flipX?-1:1)+", "+e.size/16*(e.flipY?-1:1)+") ")+" "+("rotate("+e.rotate+" 0 0)")},path:{transform:"translate("+r/2*-1+" -256)"}}}var W={x:0,y:0,width:"100%",height:"100%"},$=function(t){var e=t.children,n=t.attributes,r=t.main,o=t.mask,i=t.transform,a=r.width,s=r.icon,c=o.width,l=o.icon,u=J({transform:i,containerWidth:c,iconWidth:a}),f={tag:"rect",attributes:B({},W,{fill:"white"})},d={tag:"g",attributes:B({},u.inner),children:[{tag:"path",attributes:B({},s.attributes,u.path,{fill:"black"})}]},p={tag:"g",attributes:B({},u.outer),children:[d]},h="mask-"+Z(),m="clip-"+Z(),v={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:[l]},{tag:"mask",attributes:B({},W,{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,p]}]};return e.push(v,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#"+m+")",mask:"url(#"+h+")"},W)}),{children:e,attributes:n}},tt=function(t){var e=t.children,n=t.attributes,r=t.main,o=t.transform,i=H(t.styles);if(i.length>0&&(n.style=i),Q(o)){var a=J({transform:o,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:B({},a.outer),children:[{tag:"g",attributes:B({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:B({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}},et=function(t){var e=t.children,n=t.main,r=t.mask,o=t.attributes,i=t.styles,a=t.transform;if(Q(a)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};o.style=H(B({},i,{"transform-origin":s.x+a.x/16+"em "+(s.y+a.y/16)+"em"}))}return[{tag:"svg",attributes:o,children:e}]},nt=function(t){var e=t.prefix,n=t.iconName,r=t.children,o=t.attributes,i=t.symbol,a=!0===i?e+"-"+P.familyPrefix+"-"+n:i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B({},o,{id:a}),children:r}]}]};function rt(t){var e=t.icons,n=e.main,r=e.mask,o=t.prefix,i=t.iconName,a=t.transform,s=t.symbol,c=t.title,l=t.extra,u=t.watchable,f=void 0!==u&&u,d=r.found?r:n,p=d.width,h=d.height,m="fa-w-"+Math.ceil(p/h*16),v=[P.replacementClass,i?P.familyPrefix+"-"+i:"",m].filter(function(t){return-1===l.classes.indexOf(t)}).concat(l.classes).join(" "),y={children:[],attributes:B({},l.attributes,{"data-prefix":o,"data-icon":i,class:v,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+p+" "+h})};f&&(y.attributes[g]=""),c&&y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-"+Z()},children:[c]});var b=B({},y,{prefix:o,iconName:i,main:n,mask:r,transform:a,symbol:s,styles:l.styles}),_=r.found&&n.found?$(b):tt(b),A=_.children,w=_.attributes;return b.children=A,b.attributes=w,s?nt(b):et(b)}function ot(t){var e=t.content,n=t.width,r=t.height,o=t.transform,i=t.title,a=t.extra,s=t.watchable,c=void 0!==s&&s,l=B({},a.attributes,i?{title:i}:{},{class:a.classes.join(" ")});c&&(l[g]="");var u=B({},a.styles);Q(o)&&(u.transform=function(t){var e=t.transform,n=t.width,r=void 0===n?v:n,o=t.height,i=void 0===o?v:o,a=t.startCentered,s=void 0!==a&&a,c="";return c+=s&&m?"translate("+(e.x/U-r/2)+"em, "+(e.y/U-i/2)+"em) ":s?"translate(calc(-50% + "+e.x/U+"em), calc(-50% + "+e.y/U+"em)) ":"translate("+e.x/U+"em, "+e.y/U+"em) ",c+="scale("+e.size/U*(e.flipX?-1:1)+", "+e.size/U*(e.flipY?-1:1)+") ",c+="rotate("+e.rotate+"deg) "}({transform:o,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=H(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}var it=function(){},at=P.measurePerformance&&p&&p.mark&&p.measure?p:{mark:it,measure:it},st=function(t){at.mark('FA "5.1.0" '+t+" ends"),at.measure('FA "5.1.0" '+t,'FA "5.1.0" '+t+" begins",'FA "5.1.0" '+t+" ends")},ct={begin:function(t){return at.mark('FA "5.1.0" '+t+" begins"),function(){return st(t)}},end:st},lt=function(t,e,n,r){var o,i,a,s=Object.keys(t),c=s.length,l=void 0!==r?function(t,e){return function(n,r,o,i){return t.call(e,n,r,o,i)}}(e,r):e;for(void 0===n?(o=1,a=t[s[0]]):(o=0,a=n);o<c;o++)a=l(a,t[i=s[o]],i,t);return a},ut=z.styles,ft=z.shims,dt={},pt={},ht={};function mt(t,e){return dt[t][e]}!function(){var t=function(t){return lt(ut,function(e,n,r){return e[r]=lt(n,t,{}),e},{})};dt=t(function(t,e,n){return t[e[3]]=n,t}),pt=t(function(t,e,n){var r=e[2];return t[n]=n,r.forEach(function(e){t[e]=n}),t});var e="far"in ut;ht=lt(ft,function(t,n){var r=n[0],o=n[1],i=n[2];return"far"!==o||e||(o="fas"),t[r]={prefix:o,iconName:i},t},{})}();var vt=z.styles,gt=function(){return{prefix:null,iconName:null,rest:[]}};function yt(t){return t.reduce(function(t,e){var n=Y(P.familyPrefix,e);if(vt[e])t.prefix=e;else if(n){var r="fa"===t.prefix?ht[n]||{prefix:null,iconName:null}:{};t.iconName=r.iconName||n,t.prefix=r.prefix||t.prefix}else e!==P.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},gt())}function bt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function _t(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,o=t.children,i=void 0===o?[]:o;return"string"==typeof t?G(t):"<"+e+" "+function(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+'="')+G(t[n])+'" '},"").trim()}(r)+">"+i.map(_t).join("")+"</"+e+">"}var At=function(){};function wt(t){return"string"==typeof(t.getAttribute?t.getAttribute(g):null)}var Et={replace:function(t){var e=t[0],n=t[1].map(function(t){return _t(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(P.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- "+e.outerHTML+" --\x3e":"");else if(e.parentNode){var r=document.createElement("span");e.parentNode.replaceChild(r,e),r.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~X(e).indexOf(P.replacementClass))return Et.replace(t);var r=new RegExp(P.familyPrefix+"-.*");delete n[0].attributes.style;var o=n[0].attributes.class.split(" ").reduce(function(t,e){return e===P.replacementClass||e.match(r)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" ");var i=n.map(function(t){return _t(t)}).join("\n");e.setAttribute("class",o.toNode.join(" ")),e.setAttribute(g,""),e.innerHTML=i}};function Ct(t,e){var n="function"==typeof e?e:At;0===t.length?n():(u.requestAnimationFrame||function(t){return t()})(function(){var e=!0===P.autoReplaceSvg?Et.replace:Et[P.autoReplaceSvg]||Et.replace,r=ct.begin("mutate");t.map(e),r(),n()})}var xt=!1;var kt=null;var St=function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),r=n[0],o=n.slice(1);return r&&o.length>0&&(t[r]=o.join(":").trim()),t},{})),n};function Ot(t){for(var e="",n=0;n<t.length;n++){e+=("000"+t.charCodeAt(n).toString(16)).slice(-4)}return e}var Tt=function(t){var e,n,r=t.getAttribute("data-prefix"),o=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",a=yt(X(t));return r&&o&&(a.prefix=r,a.iconName=o),a.prefix&&i.length>1?a.iconName=(e=a.prefix,n=t.innerText,pt[e][n]):a.prefix&&1===i.length&&(a.iconName=mt(a.prefix,Ot(t.innerText))),a},Bt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),r=n[0],o=n.slice(1).join("-");if(r&&"h"===o)return t.flipX=!0,t;if(r&&"v"===o)return t.flipY=!0,t;if(o=parseFloat(o),isNaN(o))return t;switch(r){case"grow":t.size=t.size+o;break;case"shrink":t.size=t.size-o;break;case"left":t.x=t.x-o;break;case"right":t.x=t.x+o;break;case"up":t.y=t.y-o;break;case"down":t.y=t.y+o;break;case"rotate":t.rotate=t.rotate+o}return t},e):e},Nt=function(t){return Bt(t.getAttribute("data-fa-transform"))},It=function(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)},Rt=function(t){var e=q(t.attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),n=t.getAttribute("title");return P.autoA11y&&(n?e["aria-labelledby"]=P.replacementClass+"-title-"+Z():e["aria-hidden"]="true"),e},Mt=function(t){var e=t.getAttribute("data-fa-mask");return e?yt(e.split(" ").map(function(t){return t.trim()})):gt()},Pt={iconName:null,title:null,prefix:null,transform:F,symbol:!1,mask:null,extra:{classes:[],styles:{},attributes:{}}};function Lt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}Lt.prototype=Object.create(Error.prototype),Lt.prototype.constructor=Lt;var zt={fill:"currentColor"},Dt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},jt={tag:"path",attributes:B({},zt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Ut=B({},Dt,{attributeName:"opacity"}),Ft={tag:"g",children:[jt,{tag:"circle",attributes:B({},zt,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:B({},Dt,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B({},Ut,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:B({},zt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:B({},Ut,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:B({},zt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B({},Ut,{values:"0;0;1;1;0;0;"})}]}]},Kt=z.styles,Vt="fa-layers-text",Zt=/Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,qt={Solid:"fas",Regular:"far",Light:"fal",Brands:"fab"},Xt={900:"fas",400:"far",300:"fal"};function Yt(t,e){var n={found:!1,width:512,height:512,icon:Ft};if(t&&e&&Kt[e]&&Kt[e][t]){var r=Kt[e][t];n={found:!0,width:r[0],height:r[1],icon:{tag:"path",attributes:{fill:"currentColor",d:r.slice(4)[0]}}}}else if(t&&e&&!P.showMissingIcons)throw new Lt("Icon is missing for prefix "+e+" with icon name "+t);return n}function Gt(t){var e=function(t){var e=Tt(t),n=e.iconName,r=e.prefix,o=e.rest,i=St(t),a=Nt(t),s=It(t),c=Rt(t),l=Mt(t);return{iconName:n,title:t.getAttribute("title"),prefix:r,transform:a,symbol:s,mask:l,extra:{classes:o,styles:i,attributes:c}}}(t);return~e.extra.classes.indexOf(Vt)?function(t,e){var n=e.title,r=e.transform,o=e.extra,i=null,a=null;if(m){var s=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();i=c.width/s,a=c.height/s}return P.autoA11y&&!n&&(o.attributes["aria-hidden"]="true"),[t,ot({content:t.innerHTML,width:i,height:a,transform:r,title:n,extra:o,watchable:!0})]}(t,e):function(t,e){var n=e.iconName,r=e.title,o=e.prefix,i=e.transform,a=e.symbol,s=e.mask,c=e.extra;return[t,rt({icons:{main:Yt(n,o),mask:Yt(s.iconName,s.prefix)},prefix:o,iconName:n,transform:i,symbol:a,mask:s,title:r,extra:c,watchable:!0})]}(t,e)}function Ht(t){if(h){var e=ct.begin("searchPseudoElements");xt=!0,function(){q(t.querySelectorAll("*")).filter(function(t){return!(t.parentNode===document.head||~w.indexOf(t.tagName.toUpperCase())||t.getAttribute(y)||t.parentNode&&"svg"===t.parentNode.tagName)}).forEach(function(t){[":before",":after"].forEach(function(e){var n=q(t.children).filter(function(t){return t.getAttribute(y)===e})[0],r=u.getComputedStyle(t,e),o=r.getPropertyValue("font-family").match(Zt),i=r.getPropertyValue("font-weight");if(n&&!o)t.removeChild(n);else if(o){var a=r.getPropertyValue("content"),s=~["Light","Regular","Solid"].indexOf(o[1])?qt[o[1]]:Xt[i],c=mt(s,Ot(3===a.length?a.substr(1,1):a));if(!n||n.getAttribute(b)!==s||n.getAttribute(_)!==c){n&&t.removeChild(n);var l=Pt.extra;l.attributes[y]=e;var d=rt(B({},Pt,{icons:{main:Yt(c,s),mask:gt()},prefix:s,iconName:c,extra:l,watchable:!0})),p=f.createElement("svg");":before"===e?t.insertBefore(p,t.firstChild):t.appendChild(p),p.outerHTML=d.map(function(t){return _t(t)}).join("\n")}}})})}(),xt=!1,e()}}function Qt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(h){var n=f.documentElement.classList,r=function(t){return n.add(A+"-"+t)},o=function(t){return n.remove(A+"-"+t)},i=Object.keys(Kt),a=["."+Vt+":not(["+g+"])"].concat(i.map(function(t){return"."+t+":not(["+g+"])"})).join(", ");if(0!==a.length){var s=q(t.querySelectorAll(a));if(s.length>0){r("pending"),o("complete");var c=ct.begin("onTree"),l=s.reduce(function(t,e){try{var n=Gt(e);n&&t.push(n)}catch(t){E||t instanceof Lt&&console.error(t)}return t},[]);c(),Ct(l,function(){r("active"),r("complete"),o("pending"),"function"==typeof e&&e()})}}}}function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Gt(t);n&&Ct([n],e)}var Wt=function(){var t="svg-inline--fa",e=P.familyPrefix,n=P.replacementClass,r='svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n';if("fa"!==e||n!==t){var o=new RegExp("\\.fa\\-","g"),i=new RegExp("\\."+t,"g");r=r.replace(o,"."+e+"-").replace(i,"."+n)}return r};function $t(t){return{found:!0,width:t[0],height:t[1],icon:{tag:"path",attributes:{fill:"currentColor",d:t.slice(4)[0]}}}}function te(){P.autoAddCss&&!ae&&(K(Wt()),ae=!0)}function ee(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(t){return _t(t)})}}),Object.defineProperty(t,"node",{get:function(){if(h){var e=f.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ne(t){var e=t.prefix,n=void 0===e?"fa":e,r=t.iconName;if(r)return bt(oe.definitions,n,r)||bt(z.styles,n,r)}var re,oe=new(function(){function t(){O(this,t),this.definitions={}}return T(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(e){t.definitions[e]=B({},t.definitions[e]||{},o[e]),function t(e,n){var r=Object.keys(n).reduce(function(t,e){var r=n[e];return r.icon?t[r.iconName]=r.icon:t[e]=r,t},{});"function"==typeof z.hooks.addPack?z.hooks.addPack(e,r):z.styles[e]=B({},z.styles[e]||{},r),"fas"===e&&t("fa",n)}(e,o[e])})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(e){var r=n[e],o=r.prefix,i=r.iconName,a=r.icon;t[o]||(t[o]={}),t[o][i]=a}),t}}]),t}()),ie=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,kt&&kt.disconnect()},ae=!1,se={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(h){te();var e=t.node,n=void 0===e?f:e,r=t.callback,o=void 0===r?function(){}:r;P.searchPseudoElements&&Ht(n),Qt(n,o)}},css:Wt,insertCss:function(){ae||(K(Wt()),ae=!0)},watch:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.autoReplaceSvgRoot,r=e.observeMutationsRoot;!1===P.autoReplaceSvg&&(P.autoReplaceSvg=!0),P.observeMutations=!0,t=function(){he({autoReplaceSvgRoot:n}),function(t){if(d&&P.observeMutations){var e=t.treeCallback,n=t.nodeCallback,r=t.pseudoElementsCallback,o=t.observeMutationsRoot,i=void 0===o?f.body:o;kt=new d(function(t){xt||q(t).forEach(function(t){if("childList"===t.type&&t.addedNodes.length>0&&!wt(t.addedNodes[0])&&(P.searchPseudoElements&&r(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&P.searchPseudoElements&&r(t.target.parentNode),"attributes"===t.type&&wt(t.target)&&~k.indexOf(t.attributeName))if("class"===t.attributeName){var o=yt(X(t.target)),i=o.prefix,a=o.iconName;i&&t.target.setAttribute("data-prefix",i),a&&t.target.setAttribute("data-icon",a)}else n(t.target)})}),h&&kt.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}({treeCallback:Qt,nodeCallback:Jt,pseudoElementsCallback:Ht,observeMutationsRoot:r})},h&&(j?setTimeout(t,0):D.push(t))}},ce={transform:function(t){return Bt(t)}},le=(re=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?F:n,o=e.symbol,i=void 0!==o&&o,a=e.mask,s=void 0===a?null:a,c=e.title,l=void 0===c?null:c,u=e.classes,f=void 0===u?[]:u,d=e.attributes,p=void 0===d?{}:d,h=e.styles,m=void 0===h?{}:h;if(t){var v=t.prefix,g=t.iconName,y=t.icon;return ee(B({type:"icon"},t),function(){return te(),P.autoA11y&&(l?p["aria-labelledby"]=P.replacementClass+"-title-"+Z():p["aria-hidden"]="true"),rt({icons:{main:$t(y),mask:s?$t(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:g,transform:B({},F,r),symbol:i,title:l,extra:{attributes:p,styles:m,classes:f}})})}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:ne(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:ne(r||{})),re(n,B({},e,{mask:r}))}),ue=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?F:n,o=e.title,i=void 0===o?null:o,a=e.classes,s=void 0===a?[]:a,c=e.attributes,l=void 0===c?{}:c,u=e.styles,f=void 0===u?{}:u;return ee({type:"text",content:t},function(){return te(),ot({content:t,transform:B({},F,r),title:i,extra:{attributes:l,styles:f,classes:[P.familyPrefix+"-layers-text"].concat(I(s))}})})},fe=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,r=void 0===n?null:n,o=e.classes,i=void 0===o?[]:o,a=e.attributes,s=void 0===a?{}:a,c=e.styles,l=void 0===c?{}:c;return ee({type:"counter",content:t},function(){return te(),function(t){var e=t.content,n=t.title,r=t.extra,o=B({},r.attributes,n?{title:n}:{},{class:r.classes.join(" ")}),i=H(r.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}({content:t.toString(),title:r,extra:{attributes:s,styles:l,classes:[P.familyPrefix+"-layers-counter"].concat(I(i))}})})},de=function(t){return ee({type:"layer"},function(){te();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{class:P.familyPrefix+"-layers"},children:e}]})},pe={noAuto:ie,config:P,dom:se,library:oe,parse:ce,findIconDefinition:ne,icon:le,text:ue,counter:fe,layer:de,toHtml:_t},he=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,e=void 0===t?f:t;Object.keys(z.styles).length>0&&h&&P.autoReplaceSvg&&pe.dom.i2svg({node:e})}},C015:function(t,e,n){var r=n("LC74"),o=n("CzQx"),i=n("X3l8").Buffer,a=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],s=new Array(160);function c(){this.init(),this._w=s,o.call(this,128,112)}function l(t,e,n){return n^t&(e^n)}function u(t,e,n){return t&e|n&(t|e)}function f(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function d(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function h(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function m(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function v(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function g(t,e){return t>>>0<e>>>0?1:0}r(c,o),c.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},c.prototype._update=function(t){for(var e=this._w,n=0|this._ah,r=0|this._bh,o=0|this._ch,i=0|this._dh,s=0|this._eh,c=0|this._fh,y=0|this._gh,b=0|this._hh,_=0|this._al,A=0|this._bl,w=0|this._cl,E=0|this._dl,C=0|this._el,x=0|this._fl,k=0|this._gl,S=0|this._hl,O=0;O<32;O+=2)e[O]=t.readInt32BE(4*O),e[O+1]=t.readInt32BE(4*O+4);for(;O<160;O+=2){var T=e[O-30],B=e[O-30+1],N=p(T,B),I=h(B,T),R=m(T=e[O-4],B=e[O-4+1]),M=v(B,T),P=e[O-14],L=e[O-14+1],z=e[O-32],D=e[O-32+1],j=I+L|0,U=N+P+g(j,I)|0;U=(U=U+R+g(j=j+M|0,M)|0)+z+g(j=j+D|0,D)|0,e[O]=U,e[O+1]=j}for(var F=0;F<160;F+=2){U=e[F],j=e[F+1];var K=u(n,r,o),V=u(_,A,w),Z=f(n,_),q=f(_,n),X=d(s,C),Y=d(C,s),G=a[F],H=a[F+1],Q=l(s,c,y),J=l(C,x,k),W=S+Y|0,$=b+X+g(W,S)|0;$=($=($=$+Q+g(W=W+J|0,J)|0)+G+g(W=W+H|0,H)|0)+U+g(W=W+j|0,j)|0;var tt=q+V|0,et=Z+K+g(tt,q)|0;b=y,S=k,y=c,k=x,c=s,x=C,s=i+$+g(C=E+W|0,E)|0,i=o,E=w,o=r,w=A,r=n,A=_,n=$+et+g(_=W+tt|0,W)|0}this._al=this._al+_|0,this._bl=this._bl+A|0,this._cl=this._cl+w|0,this._dl=this._dl+E|0,this._el=this._el+C|0,this._fl=this._fl+x|0,this._gl=this._gl+k|0,this._hl=this._hl+S|0,this._ah=this._ah+n+g(this._al,_)|0,this._bh=this._bh+r+g(this._bl,A)|0,this._ch=this._ch+o+g(this._cl,w)|0,this._dh=this._dh+i+g(this._dl,E)|0,this._eh=this._eh+s+g(this._el,C)|0,this._fh=this._fh+c+g(this._fl,x)|0,this._gh=this._gh+y+g(this._gl,k)|0,this._hh=this._hh+b+g(this._hl,S)|0},c.prototype._hash=function(){var t=i.allocUnsafe(64);function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=c},C4MV:function(t,e,n){t.exports={default:n("9bBU"),__esModule:!0}},CXw9:function(t,e,n){"use strict";var r,o,i,a,s=n("O4g8"),c=n("7KvD"),l=n("+ZMJ"),u=n("RY/4"),f=n("kM2E"),d=n("EqjI"),p=n("lOnJ"),h=n("2KxR"),m=n("NWt+"),v=n("t8x9"),g=n("L42u").set,y=n("82Mu")(),b=n("qARP"),_=n("dNDb"),A=n("iUbK"),w=n("fJUb"),E=c.TypeError,C=c.process,x=C&&C.versions,k=x&&x.v8||"",S=c.Promise,O="process"==u(C),T=function(){},B=o=b.f,N=!!function(){try{var t=S.resolve(1),e=(t.constructor={})[n("dSzd")("species")]=function(t){t(T,T)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==k.indexOf("6.6")&&-1===A.indexOf("Chrome/66")}catch(t){}}(),I=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},R=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a,s=o?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{s?(o||(2==t._h&&L(t),t._h=1),!0===s?n=r:(u&&u.enter(),n=s(r),u&&(u.exit(),a=!0)),n===e.promise?l(E("Promise-chain cycle")):(i=I(n))?i.call(n,c,l):c(n)):l(r)}catch(t){u&&!a&&u.exit(),l(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&M(t)})}},M=function(t){g.call(c,function(){var e,n,r,o=t._v,i=P(t);if(i&&(e=_(function(){O?C.emit("unhandledRejection",o,t):(n=c.onunhandledrejection)?n({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=O||P(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},P=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){g.call(c,function(){var e;O?C.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},z=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},D=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw E("Promise can't be resolved itself");(e=I(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,l(D,r,1),l(z,r,1))}catch(t){z.call(r,t)}}):(n._v=t,n._s=1,R(n,!1))}catch(t){z.call({_w:n,_d:!1},t)}}};N||(S=function(t){h(this,S,"Promise","_h"),p(t),r.call(this);try{t(l(D,this,1),l(z,this,1))}catch(t){z.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("xH/j")(S.prototype,{then:function(t,e){var n=B(v(this,S));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=O?C.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&R(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=l(D,t,1),this.reject=l(z,t,1)},b.f=B=function(t){return t===S||t===a?new i(t):o(t)}),f(f.G+f.W+f.F*!N,{Promise:S}),n("e6n0")(S,"Promise"),n("bRrM")("Promise"),a=n("FeBl").Promise,f(f.S+f.F*!N,"Promise",{reject:function(t){var e=B(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!N),"Promise",{resolve:function(t){return w(s&&this===a?S:this,t)}}),f(f.S+f.F*!(N&&n("dY0y")(function(t){S.all(t).catch(T)})),"Promise",{all:function(t){var e=this,n=B(e),r=n.resolve,o=n.reject,i=_(function(){var n=[],i=0,a=1;m(t,!1,function(t){var s=i++,c=!1;n.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=B(e),r=n.reject,o=_(function(){m(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},Cdx3:function(t,e,n){var r=n("sB3e"),o=n("lktj");n("uqUo")("keys",function(){return function(t){return o(r(t))}})},CzQx:function(t,e,n){var r=n("X3l8").Buffer;function o(t,e){this._block=r.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}o.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=r.from(t,e));for(var n=this._block,o=this._blockSize,i=t.length,a=this._len,s=0;s<i;){for(var c=a%o,l=Math.min(i-s,o-c),u=0;u<l;u++)n[c+u]=t[s+u];s+=l,(a+=l)%o==0&&this._update(n)}return this._len+=i,this},o.prototype.digest=function(t){var e=this._len%this._blockSize;this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0));var n=8*this._len;if(n<=4294967295)this._block.writeUInt32BE(n,this._blockSize-4);else{var r=(4294967295&n)>>>0,o=(n-r)/4294967296;this._block.writeUInt32BE(o,this._blockSize-8),this._block.writeUInt32BE(r,this._blockSize-4)}this._update(this._block);var i=this._hash();return t?i.toString(t):i},o.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=o},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("woOf"),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},DuR2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},E25t:function(t,e,n){var r=n("kxFB");(t.exports=n("FZ+f")(!0)).push([t.i,'a, a:active, a:focus, a:link, a:visited {\n  color: #000;\n  outline: 0;\n  text-decoration: underline; }\n\na:hover {\n  /*text-decoration: underline;*/ }\n\np {\n  margin-bottom: 0.4rem; }\n\nh1, h2, h3, h4, h5, h6 {\n  text-rendering: optimizeLegibility; }\n\nh1 {\n  font-size: 2em;\n  margin-bottom: 0.8rem; }\n\nh2 {\n  font-size: 1.8em;\n  margin-bottom: .6rem; }\n\nh3 {\n  font-size: 1.6em;\n  margin-bottom: .5rem; }\n\nh4 {\n  font-size: 1.4em;\n  margin-bottom: .4rem; }\n\nh5 {\n  font-size: 1.2em;\n  margin-bottom: .3rem; }\n\nh6 {\n  font-size: 1em;\n  margin-bottom: .2rem;\n  text-decoration: underline; }\n\n.sco_button {\n  background: #08b5e5;\n  border-color: #08b5e5;\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  min-height: 28px;\n  line-height: 26px;\n  outline: none;\n  overflow: hidden;\n  padding: .4rem .8rem;\n  text-align: center;\n  text-overflow: ellipsis;\n  -webkit-transition: .4s;\n  transition: .4s;\n  white-space: nowrap;\n  width: 100%; }\n\n.sco_button:active {\n    opacity: .7; }\n\n.sco button[disabled],\n.sco button:disabled {\n  opacity: 0.5; }\n\n.sco_centered {\n  text-align: center; }\n\n.sco_hidden {\n  display: none !important; }\n\n.sco_offscreen {\n  left: -1000000px;\n  position: absolute; }\n\n.clearfix:after {\n  content: "";\n  display: block;\n  clear: both; }\n\n.sco, .stellar_checkout {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  font-family: monospace, monospace;\n  float: left;\n  padding: 0.8rem;\n  width: 100%;\n  height: 100%; }\n\n.sco *, .sco *:before, .sco *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n\n/* OVERLAYS */\n\n.sco_overlay {\n  background-image: url('+r(n("Zr1r"))+");\n  background-position-x: 50%;\n  background-position-y: 50%;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  height: 100%;\n  position: absolute;\n  -webkit-transition: .4s;\n  transition: .4s;\n  top: 0;\n  width: 100%;\n  z-index: 1; }\n\n.sco_overlay.sco_loaded {\n  opacity: 0;\n  -webkit-transform: scale3d(0, 0, 0);\n          transform: scale3d(0, 0, 0); }\n\n.sco_balances {\n  text-align: left; }\n\n.sco_balances_balance {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: .0625rem solid #eee; }\n\n.sco_balances_balance > div {\n  padding: .4rem .8rem;\n  -ms-flex-preferred-size: 33%;\n      flex-basis: 33%; }\n\n.sco_balances_balance_label {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center; }\n\n.sco_balances_balance_asset_code.adorned {\n  background: #f8f8f8;\n  border-left: .0625rem solid #ddd;\n  border-right: .0625rem solid #ddd;\n  text-align: center; }\n\n.sco_balances_balance_bal {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: right; }\n\n.sco_balances_balance_bal_asset_code {\n  font-size: .8rem;\n  font-weight: bold;\n  padding-left: .4rem; }\n\n.sco_balances_meta {\n  color: #a0a0a0;\n  font-size: .8rem;\n  padding: .4rem .4rem .4rem;\n  text-align: center; }\n\n.sco_balances_balance.sco_balances_balance_total .sco_balances_balance_asset_code,\n.sco_balances_balance.sco_balances_balance_total .sco_balances_balance_bal,\n.sco_balances_balance.sco_balances_balance_total .sco_balances_balance_label {\n  font-weight: bold; }\n\n.sco_component {\n  padding: 0.8rem 0.4rem;\n  text-align: left;\n  /** COMPONENT - NETWORK_SELECTOR **/\n  /** COMPONENT - ROW **/\n  /** COMPONENT - BUTTON_ROW **/\n  /** COMPONENT - NOTICE **/\n  /** COMPONENT - TICKER **/\n  /** COMPONENT - FOOTER **/ }\n\n.sco_component--collapsed .sco_form,\n  .sco_component--collapsed .sco_component_results {\n    display: none !important; }\n\n.sco_component.sco_loaded {\n    display: block; }\n\n.sco_component.sco_loaded .sco_spinner {\n    display: none; }\n\n.sco_component.sco_loaded .sco_component_results {\n    display: block; }\n\n.sco_component_i {\n    background: #fff;\n    border: 0.0625rem solid #eee;\n    border-radius: 0.4rem;\n    font-size: 0.9rem;\n    line-height: 1.6; }\n\n.sco_component_text, .sco_component_error {\n    padding: 0.8rem; }\n\n.sco_component_text p:last-child, .sco_component_error p:last-child {\n      margin-bottom: 0; }\n\n.sco_component_error {\n    color: #f80000; }\n\n.sco_component .sco_spinner {\n    display: inline-block;\n    padding: 0.8rem; }\n\n.sco_component_title {\n    font-size: 0.9rem;\n    font-weight: bold;\n    letter-spacing: .025rem;\n    padding: 0.8rem;\n    text-align: left;\n    text-transform: uppercase; }\n\n.sco_component_title_aside {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      float: right;\n      padding-left: .8rem; }\n\n.sco_component_title_aside--collapsed {\n        display: none; }\n\n.sco_component_title_aside input[type=checkbox] {\n        margin-left: .8rem; }\n\n.sco_component_heading {\n    font-weight: bold;\n    border-bottom: 0.0625rem solid #eee;\n    padding: 0.8rem;\n    text-align: left; }\n\n.sco_component_results {\n    border-top: 0.0625rem solid #eee;\n    display: none;\n    padding: 0 0.8rem; }\n\n.sco_component_results_heading {\n      border-bottom: 0.0625rem solid #eee;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n\n.sco_component_results_heading > div {\n      padding: 0.8rem;\n      text-align: right; }\n\n.sco_component_results_heading > div:last-child {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.sco_component_results_heading:first-child {\n      font-weight: bold;\n      text-align: left; }\n\n.sco_component_results_heading div:first-child {\n      font-weight: bold;\n      min-width: 5.6rem;\n      text-align: left; }\n\n.sco_component .sco_caption {\n    color: #aaa;\n    font-size: 0.7rem;\n    padding: 0.2rem 0.8rem;\n    text-align: center; }\n\n.sco_component .sco_caption--big {\n      font-size: 1.2rem; }\n\n.sco_component .sco_caption a {\n      color: #999;\n      text-decoration: underline; }\n\n.sco_component .sco_caption input {\n      border: .0625rem solid #eee;\n      color: #999;\n      text-decoration: underline;\n      padding: .2rem .4rem;\n      width: 4.8rem; }\n\n.sco_component_qrcode {\n    padding: 0 0.8rem 0.8rem;\n    text-align: center;\n    margin-bottom: 1.2rem; }\n\n.sco_component_qrcode_i {\n      margin: auto;\n      min-width: 16rem;\n      width: 50%; }\n\n.sco_component_footer {\n    font-weight: bold;\n    text-align: center; }\n\n.sco_component .sco_network_tag {\n    font-weight: bold;\n    text-transform: uppercase; }\n\n.sco_component .sco_network_tag--test {\n      color: orange; }\n\n.sco_component .sco_network_tag--public {\n      color: #3ba776; }\n\n.sco_component .sco_selector {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border: 0.0625rem solid #eee;\n    border-radius: 0.4rem; }\n\n.sco_component .sco_selector > * {\n      background: #fff;\n      color: #000;\n      min-width: 4rem;\n      padding: 0 0.4rem;\n      text-align: center; }\n\n.sco_component .sco_selector a {\n      text-decoration: none; }\n\n.sco_component .sco_selector a.sco_selector_value--selected {\n      background: #3ba776;\n      color: #fff; }\n\n.sco_component_row {\n    font-size: 0.7rem;\n    padding: 0.8rem;\n    padding-bottom: 0; }\n\n.sco_component_row i {\n      font-weight: bold; }\n\n.sco_component--button_row {\n    font-size: normal;\n    padding: 0.8rem 0.8rem; }\n\n.sco_component--button_group button {\n    margin-bottom: 0.8rem; }\n\n.sco_component--notice {\n    color: #aaa; }\n\n.sco_component--notice .sco_component_i {\n    padding: 1.2rem; }\n\n.sco_component--notice .highlight {\n    color: #999;\n    font-weight: bold; }\n\n.sco_component--ticker .sco_component_title_aside .separator {\n    color: #eee;\n    padding: 0 .4rem; }\n\n.sco_component--ticker .moniker {\n    display: inline-block;\n    padding-left: .2rem; }\n\n.sco_component--footer {\n    border: 0; }\n\n.sco_component--footer .sco_component_i {\n      border: 0; }\n\n.sco_component--footer .sco_component_i .sco_component_results {\n        border: 0; }\n\n.sco_form {\n  padding: .4rem; }\n\n.sco_form input[type=text],\n  .sco_form textarea {\n    background: #f8f8f8;\n    border: 0;\n    font-family: monospace, monospace;\n    font-size: 1.25rem;\n    height: 100%;\n    outline: 0;\n    padding: .6rem .8rem;\n    width: 100%;\n    text-align: left; }\n\n.sco_form input[type=text][disabled], .sco_form input[type=text]:disabled,\n    .sco_form textarea[disabled],\n    .sco_form textarea:disabled {\n      color: #000; }\n\n.sco_form .sco_field {\n    padding: .4rem .8rem;\n    position: relative;\n    text-align: left; }\n\n.sco_form .sco_field_label {\n      color: #a0a0a0;\n      display: block;\n      font-size: .8rem;\n      letter-spacing: .075rem;\n      padding: .4rem .2rem;\n      text-transform: uppercase;\n      width: 100%; }\n\n.sco_form .sco_field_input {\n      background: #f8f8f8;\n      border: 0.0625rem solid #eee;\n      border-radius: .2rem;\n      color: #000;\n      font-family: monospace, monospace;\n      height: 4rem;\n      position: relative;\n      width: 100%; }\n\n.sco_form .sco_field_input--error {\n        border-color: #f80000; }\n\n.sco_form .sco_field_input--input {\n        height: 2.8rem; }\n\n.sco_form .sco_field_input .sco_spinner {\n        position: absolute;\n        top: 30%;\n        right: .8rem; }\n\n.sco_form .sco_field_note {\n      font-size: 0.7rem;\n      padding: 0.8rem;\n      padding-bottom: 0; }\n\n.sco_form .sco_field_note i {\n        font-weight: bold; }\n","",{version:3,sources:["c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/base/_links.scss","c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/base/_typography.scss","c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/base/_variables.scss","c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/base/_buttons.scss","c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/base/_util.scss","c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/layout/_container.scss","c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/component/_balances.scss","c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/component/_component.scss","c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/c:/inetpub/wwwroot/stellar-checkout/src/sass/component/_form.scss"],names:[],mappings:"AAEA;EACI,YAAW;EACX,WAAU;EACV,2BAA0B,EAC7B;;AAED;EACI,+BAA+B,EAClC;;ACLD;EACI,sBCyCkB,EDxCrB;;AAED;EACI,mCAAkC,EACrC;;AAED;EACI,eAAc;EACd,sBC6BW,ED5Bd;;AAED;EACI,iBAAgB;EAChB,qBAAoB,EACvB;;AAED;EACI,iBAAgB;EAChB,qBAAoB,EACvB;;AAED;EACI,iBAAgB;EAChB,qBAAoB,EACvB;;AAED;EACI,iBAAgB;EAChB,qBAAoB,EACvB;;AAED;EACI,eAAc;EACd,qBAAoB;EACpB,2BAA0B,EAC7B;;AEtCD;EACI,oBAHiB;EAIjB,sBAJiB;EAKjB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,YAAW;EACX,gBAAe;EACf,iBAAgB;EAChB,iBAAgB;EAChB,kBAAiB;EACjB,cAAa;EACb,iBAAgB;EAChB,qBAAoB;EACpB,mBAAkB;EAClB,wBAAuB;EACvB,wBAAe;EAAf,gBAAe;EACf,oBAAmB;EACnB,YAAW,EAKd;;AAvBD;IAqBQ,YAAW,EACd;;AAGL;;EAEI,aAAY,EACf;;ACND;EACI,mBAAkB,EACrB;;AAED;EACI,yBAAuB,EAC1B;;AAED;EACI,iBAAgB;EAChB,mBAAkB,EACrB;;AAED;EACI,YAAW;EACX,eAAc;EACd,YAAW,EACd;;ACrCA;EAEG,+BAAsB;UAAtB,uBAAsB;EACtB,mBAAkB;EAClB,kCAAiC;EACjC,YAAW;EACX,gBHgCW;EG/BX,YAAW;EACX,aAAY,EACf;;AAED;EACI,4BAAmB;UAAnB,oBAAmB,EAAG;;AAG1B,cAAc;;AAEd;EACI,gDAA0D;EAC1D,2BAA0B;EAC1B,2BAA0B;EAC1B,qBAAoB;EACpB,6BAA4B;EAC5B,uBAAsB;EACtB,aAAY;EACZ,mBAAkB;EAClB,wBAAe;EAAf,gBAAe;EACf,OAAM;EACN,YAAW;EACX,WAAU,EACb;;AAED;EACI,WAAU;EACV,oCAA2B;UAA3B,4BAA2B,EAC9B;;ACvCD;EACI,iBAAgB,EACnB;;AAED;EACI,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,mCAAkC,EACrC;;AAED;EACI,qBAAoB;EACpB,6BAAe;MAAf,gBAAe,EAClB;;AAED;EACI,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,mBAAkB,EACrB;;AAKD;EACI,oBAAmB;EACnB,iCAAgC;EAChC,kCAAiC;EACjC,mBAAkB,EACrB;;AAED;EACI,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,kBAAiB,EACpB;;AAED;EACI,iBAAgB;EAChB,kBAAiB;EACjB,oBAAmB,EACtB;;AAED;EACI,eAAc;EACd,iBAAgB;EAChB,2BAA0B;EAC1B,mBAAkB,EACrB;;AAED;;;EAGI,kBAAiB,EACpB;;ACjDD;EACI,uBAAuB;EACvB,iBAAgB;EAsJhB,oCAAoC;EAyCpC,uBAAuB;EAWvB,8BAA8B;EAW9B,0BAA0B;EAe1B,0BAA0B;EAe1B,0BAA0B,EAY7B;;AA7PG;;IAEI,yBAAuB,EAC1B;;AAPL;IAUQ,eAAc,EACjB;;AAXL;IAcQ,cAAa,EAChB;;AAfL;IAkBQ,eAAc,EACjB;;AAED;IACI,iBAAgB;IAChB,6BLUkB;IKTlB,sBLOa;IKNb,kBLCe;IKAf,iBLHS,EKIZ;;AAED;IAEI,gBLSO,EKHV;;AARA;MAKW,iBACJ,EAAC;;AAIT;IACI,eL5BK,EK6BR;;AAzCL;IA4CQ,sBAAqB;IACrB,gBLLO,EKMV;;AAED;IACI,kBLvBe;IKwBf,kBAAiB;IACjB,wBAAuB;IACvB,gBLZO;IKaP,iBAAgB;IAChB,0BAAyB,EAc5B;;AAZG;MACI,0BAAmB;UAAnB,uBAAmB;cAAnB,oBAAmB;MACnB,qBAAa;MAAb,qBAAa;MAAb,cAAa;MACb,aAAW;MACX,oBAAmB,EAOtB;;AANG;QACI,cAAa,EAChB;;AAPJ;QASO,mBACJ,EAAC;;AAIT;IACI,kBAAiB;IACjB,oCLvCkB;IKwClB,gBLjCO;IKkCP,iBAAgB,EACnB;;AAED;IACI,iCL7CkB;IK8ClB,cAAa;IACb,kBLxCO,EKoEV;;AA1BG;MACI,oCLlDc;MKmDd,qBAAa;MAAb,qBAAa;MAAb,cAAa,EAChB;;AAED;MACI,gBLhDG;MKiDH,kBAAiB,EACpB;;AAED;MACI,oBAAmB;MACnB,iBAAgB;MAChB,wBAAuB,EAC1B;;AAED;MACI,kBAAiB;MACjB,iBAAgB,EACnB;;AAED;MACI,kBAAiB;MACjB,kBAAiB;MACjB,iBAAgB,EACnB;;AA3GT;IA+GQ,YLrGG;IKsGH,kBLpFkB;IKqFlB,uBLzEO;IK0EP,mBAAkB,EAerB;;AAjIL;MAoHY,kBACJ,EAAC;;AArHT;MAuHY,YL5GG;MK6GH,2BAA0B,EAC7B;;AAzHT;MA2HY,4BAA2B;MAC3B,YLjHG;MKkHH,2BAA0B;MAC1B,qBAAoB;MACpB,cAAa,EAChB;;AAGL;IACI,yBL5FO;IK6FP,mBAAkB;IAClB,sBL/FO,EK0GV;;AAVG;MACI,aAAY;MACZ,iBAAgB;MAChB,WAAU,EACb;;AAQL;IACI,kBAAiB;IACjB,mBAAkB,EACrB;;AAtJL;IA8JQ,kBAAiB;IACjB,0BAAyB,EAO5B;;AAtKL;MAiKY,cACJ,EAAC;;AAlKT;MAoKY,eAtKG,EAuKN;;AArKT;IAyKQ,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,6BLzIkB;IK0IlB,sBL5Ia,EK8JhB;;AA7LL;MA8KY,iBLvKA;MKwKA,YLvKA;MKwKA,gBAAe;MACf,kBLtIU;MKuIV,mBAAkB,EACrB;;AAnLT;MAsLY,sBAAqB,EACxB;;AAvLT;MA0LY,oBA5LG;MA6LH,YLpLA,EKqLH;;AAOL;IACI,kBLxKkB;IKyKlB,gBL7JO;IK8JP,kBAAiB,EAIpB;;AAPA;MAKO,kBAAiB,EACpB;;AAKL;IACI,kBAAiB;IACjB,uBLxKO,EKyKV;;AAED;IACI,sBL5KO,EK6KV;;AAID;IACI,YLhNG,EKiNN;;AAED;IACI,gBLvLO,EKwLV;;AAED;IACI,YLvNO;IKwNP,kBAAiB,EACpB;;AAIA;IAGW,YAAW;IACX,iBAAgB,EACnB;;AALR;IAQK,sBAAqB;IACrB,oBAAkB,EACnB;;AAIL;IACI,UAAS,EAQZ;;AATA;MAGO,UAAS,EAKZ;;AARJ;QAKW,UAAS,EAEZ;;AChQb;EAEI,eAAc,EA4DjB;;AA9DD;;IAKQ,oBAAmB;IACnB,UAAS;IACT,kCAAiC;IACjC,mBAAkB;IAClB,aAAY;IACZ,WAAU;IACV,qBAAoB;IACpB,YAAW;IACX,iBAAgB,EAKnB;;AAlBL;;;MAgBY,YAAW,EACd;;AAjBT;IAoBQ,qBAAoB;IACpB,mBAAkB;IAClB,iBAAgB,EAuCnB;;AA7DL;MAwBY,eAAc;MACd,eAAc;MACd,iBAAgB;MAChB,wBAAuB;MACvB,qBAAoB;MACpB,0BAAyB;MACzB,YAAW,EACd;;AA/BT;MAiCU,oBAAmB;MACjB,6BNEc;MMDd,qBAAoB;MACpB,YNzBA;MM0BA,kCNbsB;MMctB,aAAY;MACZ,mBAAkB;MAClB,YAAW,EAYd;;AApDT;QA0CgB,sBN3BH,EM4BA;;AA3Cb;QA6CgB,eAAc,EACjB;;AA9Cb;QAgDgB,mBAAkB;QAClB,SAAQ;QACR,aAAY,EACf;;AAnDb;MAsDY,kBNvBc;MMwBd,gBNZG;MMaH,kBAAiB,EAIpB;;AA5DT;QA0DgB,kBAAiB,EACpB",file:"site.scss",sourcesContent:['\ufeff/// <reference path="../site.scss" />\r\n\r\na, a:active, a:focus, a:link, a:visited {\r\n    color: #000;\r\n    outline: 0;\r\n    text-decoration: underline;\r\n}\r\n\r\na:hover {\r\n    /*text-decoration: underline;*/\r\n}','\ufeff/// <reference path="../site.scss" />\r\n\r\nblockquote {\r\n}\r\n\r\np {\r\n    margin-bottom: $padding-halved;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    text-rendering: optimizeLegibility;\r\n}\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin-bottom: $padding;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.8em;\r\n    margin-bottom: .6rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.6em;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\nh4 {\r\n    font-size: 1.4em;\r\n    margin-bottom: .4rem;\r\n}\r\n\r\nh5 {\r\n    font-size: 1.2em;\r\n    margin-bottom: .3rem;\r\n}\r\n\r\nh6 {\r\n    font-size: 1em;\r\n    margin-bottom: .2rem;\r\n    text-decoration: underline;\r\n}','\ufeff// Media Queries\r\n$media-desktop: "screen and (min-device-width: 1200px)";\r\n$media-mobile-landscape: "screen and (min-device-width: 640px)";\r\n\r\n// Theme\r\n$theme-background-color: #0f62bd;\r\n\r\n// Dimensions\r\n$desktop-content-width: 76rem;\r\n\r\n// Colors\r\n$white: #fff;\r\n$black: #000;\r\n$lightgrey: #f8f8f8;\r\n$grey: #aaa;\r\n$darkgrey: #999;\r\n$red: #f80000;\r\n$green: #00c346;\r\n\r\n// Font weights\r\n$font-weight-light: 200;\r\n$font-weight-regular: 400;\r\n$font-weight-bold: 600;\r\n\r\n// Fixed Font\r\n$font-family: monospace, monospace;\r\n$font-size: 100%;\r\n$line-height: 1.6;\r\n\r\n// Font Size\r\n$font-size-small: .9rem;\r\n$font-size-smaller: .8rem;\r\n$font-size-smallest: .7rem;\r\n\r\n// Borders\r\n$border-radius: .4rem;\r\n$border-radius-halved: .2rem;\r\n$layout-border-color: #eee;\r\n$layout-border-stroke: solid;\r\n$layout-border-width: .0625rem;\r\n$layout-border: $layout-border-width $layout-border-stroke $layout-border-color;\r\n\r\n// Padding\r\n$gutter: 1.2rem;\r\n$padding: .8rem;\r\n$padding-vertical: .8rem 0;\r\n$padding-horizontal: 0 .8rem;\r\n$padding-halved: .4rem;\r\n$padding-halved-vertical: .4rem 0;\r\n$padding-halved-horizontal: 0 .4rem;\r\n\r\n// Animation\r\n$transition-speed: .32s;','/// <reference path="../site.scss">\r\n\r\n$button-blue: #08b5e5;\r\n\r\n.sco_button {\r\n    background: $button-blue;\r\n    border-color: $button-blue;\r\n    border-radius: 3px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    min-height: 28px;\r\n    line-height: 26px;\r\n    outline: none;\r\n    overflow: hidden;\r\n    padding: .4rem .8rem;\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    transition: .4s;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n\r\n    &:active {\r\n        opacity: .7;\r\n    }\r\n}\r\n\r\n.sco button[disabled],\r\n.sco button:disabled {\r\n    opacity: 0.5;\r\n}','/// <reference path="../site.scss">\r\n\r\n@mixin icon() {\r\n    border: 0;\r\n    font-size: 1rem;\r\n    height: 100%;\r\n    text-align: center;\r\n    width: 3.2rem;\r\n\r\n    a {\r\n        display: block;\r\n    }\r\n}\r\n\r\n@mixin toggler() {\r\n    select {\r\n        font-size: 1rem;\r\n        padding: $padding-halved;\r\n    }\r\n}\r\n\r\n@mixin fill() {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.sco_centered {\r\n    text-align: center;\r\n}\r\n\r\n.sco_hidden {\r\n    display: none!important;\r\n}\r\n\r\n.sco_offscreen {\r\n    left: -1000000px;\r\n    position: absolute;\r\n}\r\n\r\n.clearfix:after {\r\n    content: "";\r\n    display: block;\r\n    clear: both;\r\n}\r\n',"/// <reference path=\"../site.scss\">\r\n\r\n.sco_container, .stellar_checkout_container {\r\n    \r\n}\r\n\r\n .sco, .stellar_checkout {\r\n    // background-color: $theme-background-color;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    font-family: monospace, monospace;\r\n    float: left;\r\n    padding: $padding;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.sco *, .sco *:before, .sco *:after {\r\n    box-sizing: inherit; }\r\n\r\n\r\n/* OVERLAYS */\r\n\r\n.sco_overlay {\r\n    background-image: url('../assets/i/stellar-rocket@2x.png');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    background-size: 50%;\r\n    background-repeat: no-repeat;\r\n    background-color: #fff;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: .4s;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.sco_overlay.sco_loaded {\r\n    opacity: 0;\r\n    transform: scale3d(0, 0, 0);\r\n}",'/// <reference path="../site.scss" />\r\n\r\n.sco_balances {\r\n    text-align: left;\r\n}\r\n\r\n.sco_balances_balance {\r\n    display: flex;\r\n    border-bottom: .0625rem solid #eee;\r\n}\r\n\r\n.sco_balances_balance > div {\r\n    padding: .4rem .8rem;\r\n    flex-basis: 33%;\r\n}\r\n\r\n.sco_balances_balance_label {\r\n    flex-grow: 1;\r\n    text-align: center;\r\n}\r\n\r\n.sco_balances_balance_asset_code {\r\n}\r\n\r\n.sco_balances_balance_asset_code.adorned {\r\n    background: #f8f8f8;\r\n    border-left: .0625rem solid #ddd;\r\n    border-right: .0625rem solid #ddd;\r\n    text-align: center;\r\n}\r\n\r\n.sco_balances_balance_bal {\r\n    flex-grow: 1;\r\n    text-align: right;\r\n}\r\n\r\n.sco_balances_balance_bal_asset_code {\r\n    font-size: .8rem;\r\n    font-weight: bold;\r\n    padding-left: .4rem;\r\n}\r\n\r\n.sco_balances_meta {\r\n    color: #a0a0a0;\r\n    font-size: .8rem;\r\n    padding: .4rem .4rem .4rem;\r\n    text-align: center;\r\n}\r\n\r\n.sco_balances_balance.sco_balances_balance_total .sco_balances_balance_asset_code,\r\n.sco_balances_balance.sco_balances_balance_total .sco_balances_balance_bal,\r\n.sco_balances_balance.sco_balances_balance_total .sco_balances_balance_label {\r\n    font-weight: bold;\r\n}','/// <reference path="../site.scss" />\r\n\r\n$green: #3ba776;\r\n\r\n.sco_component {\r\n    padding: $padding .4rem;\r\n    text-align: left;\r\n\r\n    &--collapsed .sco_form,\r\n    &--collapsed &_results {\r\n        display: none!important;\r\n    }\r\n\r\n    &.sco_loaded {\r\n        display: block;\r\n    }\r\n\r\n    &.sco_loaded .sco_spinner {\r\n        display: none;\r\n    }\r\n\r\n    &.sco_loaded &_results {\r\n        display: block;\r\n    }\r\n\r\n    &_i {\r\n        background: #fff;\r\n        border: $layout-border;\r\n        border-radius: $border-radius;\r\n        font-size: $font-size-small;\r\n        line-height: $line-height;\r\n    }\r\n\r\n    &_text,\r\n    &_error {\r\n        padding: $padding;\r\n        p {\r\n            &:last-child {\r\n                margin-bottom: 0\r\n            }\r\n        }\r\n    }\r\n\r\n    &_error {\r\n        color: $red\r\n    }\r\n\r\n    & .sco_spinner {\r\n        display: inline-block;\r\n        padding: $padding;\r\n    }\r\n\r\n    &_title {\r\n        font-size: $font-size-small;\r\n        font-weight: bold;\r\n        letter-spacing: .025rem;\r\n        padding: $padding;\r\n        text-align: left;\r\n        text-transform: uppercase;\r\n\r\n        &_aside {\r\n            align-items: center;\r\n            display: flex;\r\n            float:right;\r\n            padding-left: .8rem;\r\n            &--collapsed {\r\n                display: none;\r\n            }\r\n            input[type=checkbox] {\r\n                margin-left: .8rem\r\n            }\r\n        }\r\n    }\r\n\r\n    &_heading {\r\n        font-weight: bold;\r\n        border-bottom: $layout-border;\r\n        padding: $padding;\r\n        text-align: left;\r\n    }\r\n\r\n    &_results {\r\n        border-top: $layout-border;\r\n        display: none;\r\n        padding: 0 $padding;\r\n\r\n        &_heading {\r\n            border-bottom: $layout-border;\r\n            display: flex;\r\n        }\r\n\r\n        &_heading > div {\r\n            padding: $padding;\r\n            text-align: right;\r\n        }\r\n\r\n        &_heading > div:last-child {\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n        }\r\n\r\n        &_heading:first-child {\r\n            font-weight: bold;\r\n            text-align: left;\r\n        }\r\n\r\n        &_heading div:first-child {\r\n            font-weight: bold;\r\n            min-width: 5.6rem;\r\n            text-align: left;\r\n        }\r\n    }\r\n\r\n    .sco_caption {\r\n        color: $grey;\r\n        font-size: $font-size-smallest;\r\n        padding: .2rem $padding;\r\n        text-align: center;\r\n        &--big {\r\n            font-size: 1.2rem\r\n        }\r\n        a {\r\n            color: $darkgrey;\r\n            text-decoration: underline;\r\n        }\r\n        input {\r\n            border: .0625rem solid #eee;\r\n            color: $darkgrey;\r\n            text-decoration: underline;\r\n            padding: .2rem .4rem;\r\n            width: 4.8rem;\r\n        }\r\n    }\r\n\r\n    &_qrcode {\r\n        padding: 0 $padding $padding;\r\n        text-align: center;\r\n        margin-bottom: $gutter;\r\n        &_i {\r\n            margin: auto;\r\n            min-width: 16rem;\r\n            width: 50%;\r\n        }\r\n        canvas {\r\n        }\r\n        .sco_caption {\r\n\r\n        }\r\n    }\r\n\r\n    &_footer {\r\n        font-weight: bold;\r\n        text-align: center;\r\n    }\r\n\r\n    /** COMPONENT - NETWORK_SELECTOR **/\r\n\r\n    &--network_selector {\r\n    }\r\n\r\n    .sco_network_tag {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        &--test {\r\n            color: orange\r\n        }\r\n        &--public {\r\n            color: $green\r\n        }\r\n    }\r\n\r\n    .sco_selector {\r\n        display: flex;\r\n        border: $layout-border;\r\n        border-radius: $border-radius;\r\n\r\n        > * {\r\n            background: $white;\r\n            color: $black;\r\n            min-width: 4rem;\r\n            padding: 0 $padding-halved;\r\n            text-align: center;\r\n        }\r\n\r\n        a {\r\n            text-decoration: none;\r\n        }\r\n\r\n        a.sco_selector_value--selected {\r\n            background: $green;\r\n            color: $white;\r\n        }\r\n    }\r\n\r\n\r\n\r\n    /** COMPONENT - ROW **/\r\n    \r\n    &_row {\r\n        font-size: $font-size-smallest;\r\n        padding: $padding;\r\n        padding-bottom: 0;\r\n        i {\r\n            font-weight: bold;\r\n        }\r\n    }\r\n\r\n    /** COMPONENT - BUTTON_ROW **/\r\n\r\n    &--button_row {\r\n        font-size: normal;\r\n        padding: $padding $padding;\r\n    }\r\n\r\n    &--button_group button {\r\n        margin-bottom: $padding;\r\n    }\r\n\r\n    /** COMPONENT - NOTICE **/\r\n\r\n    &--notice {\r\n        color: $grey;\r\n    }\r\n\r\n    &--notice &_i {\r\n        padding: $gutter;\r\n    }\r\n\r\n    &--notice .highlight {\r\n        color: $darkgrey;\r\n        font-weight: bold;\r\n    }\r\n\r\n    /** COMPONENT - TICKER **/\r\n\r\n    &--ticker {\r\n        .sco_component_title_aside {\r\n            .separator {\r\n                color: #eee;\r\n                padding: 0 .4rem;\r\n            }\r\n        }\r\n        .moniker {\r\n          display: inline-block;\r\n          padding-left:.2rem;\r\n        }\r\n    }\r\n\r\n    /** COMPONENT - FOOTER **/\r\n    &--footer {\r\n        border: 0;\r\n        .sco_component_i {\r\n            border: 0;\r\n            .sco_component_results {\r\n                border: 0;\r\n                    \r\n            }           \r\n        }\r\n    }\r\n\r\n}\r\n\r\n','/// <reference path="../site.scss" />\r\n.sco_form {\r\n    // border-top: $layout-border;\r\n    padding: .4rem;\r\n    input[type=text],\r\n    textarea {\r\n        background: #f8f8f8;\r\n        border: 0;\r\n        font-family: monospace, monospace;\r\n        font-size: 1.25rem;\r\n        height: 100%;\r\n        outline: 0;\r\n        padding: .6rem .8rem;\r\n        width: 100%;\r\n        text-align: left;\r\n        &[disabled],\r\n        &:disabled {\r\n            color: #000;\r\n        }\r\n    }\r\n    .sco_field {\r\n        padding: .4rem .8rem;\r\n        position: relative;\r\n        text-align: left;\r\n        &_label {\r\n            color: #a0a0a0;\r\n            display: block;\r\n            font-size: .8rem;\r\n            letter-spacing: .075rem;\r\n            padding: .4rem .2rem;\r\n            text-transform: uppercase;\r\n            width: 100%;\r\n        }\r\n        &_input {\r\n          background: #f8f8f8;\r\n            border: $layout-border;\r\n            border-radius: .2rem;\r\n            color: $black;\r\n            font-family: $font-family;\r\n            height: 4rem;\r\n            position: relative;\r\n            width: 100%;\r\n            &--error {\r\n                border-color: $red;\r\n            }\r\n            &--input {\r\n                height: 2.8rem;\r\n            }\r\n            .sco_spinner {\r\n                position: absolute;\r\n                top: 30%;\r\n                right: .8rem;\r\n            }\r\n        }\r\n        &_note {\r\n            font-size: $font-size-smallest;\r\n            padding: $padding;\r\n            padding-bottom: 0;\r\n            i {\r\n                font-weight: bold;\r\n            }\r\n        }\r\n    }\r\n}\r\n'],sourceRoot:""}])},EGZi:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},EKta:function(t,e,n){"use strict";e.byteLength=function(t){var e=l(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){for(var e,n=l(t),r=n[0],a=n[1],s=new i(function(t,e,n){return 3*(e+n)/4-n}(0,r,a)),c=0,u=a>0?r-4:r,f=0;f<u;f+=4)e=o[t.charCodeAt(f)]<<18|o[t.charCodeAt(f+1)]<<12|o[t.charCodeAt(f+2)]<<6|o[t.charCodeAt(f+3)],s[c++]=e>>16&255,s[c++]=e>>8&255,s[c++]=255&e;2===a&&(e=o[t.charCodeAt(f)]<<2|o[t.charCodeAt(f+1)]>>4,s[c++]=255&e);1===a&&(e=o[t.charCodeAt(f)]<<10|o[t.charCodeAt(f+1)]<<4|o[t.charCodeAt(f+2)]>>2,s[c++]=e>>8&255,s[c++]=255&e);return s},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],a=0,s=n-o;a<s;a+=16383)i.push(u(t,a,a+16383>s?s:a+16383));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,c=a.length;s<c;++s)r[s]=a[s],o[a.charCodeAt(s)]=s;function l(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function u(t,e,n){for(var o,i,a=[],s=e;s<n;s+=3)o=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),a.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},EqBC:function(t,e,n){"use strict";var r=n("kM2E"),o=n("FeBl"),i=n("7KvD"),a=n("t8x9"),s=n("fJUb");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},EuP9:function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n("EKta"),o=n("ujcs"),i=n("sOR5");function a(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,e){if(a()<e)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=c.prototype:(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,n){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return l(this,t,e,n)}function l(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);c.TYPED_ARRAY_SUPPORT?(t=e).__proto__=c.prototype:t=d(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|h(e,n),o=(t=s(t,r)).write(e,n);o!==r&&(t=t.slice(0,o));return t}(t,e,n):function(t,e){if(c.isBuffer(e)){var n=0|p(e.length);return 0===(t=s(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?s(t,0):d(t,e);if("Buffer"===e.type&&i(e.data))return d(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e){if(u(e),t=s(t,e<0?0:0|p(e)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function d(t,e){var n=e.length<0?0:0|p(e.length);t=s(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function p(t){if(t>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|t}function h(t,e){if(c.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return F(t).length;default:if(r)return U(t).length;e=(""+e).toLowerCase(),r=!0}}function m(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function v(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=c.from(e,r)),c.isBuffer(e))return 0===e.length?-1:g(t,e,n,r,o);if("number"==typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function g(t,e,n,r,o){var i,a=1,s=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;a=2,s/=2,c/=2,n/=2}function l(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){var u=-1;for(i=n;i<s;i++)if(l(t,i)===l(e,-1===u?0:i-u)){if(-1===u&&(u=i),i-u+1===c)return u*a}else-1!==u&&(i-=i-u),u=-1}else for(n+c>s&&(n=s-c),i=n;i>=0;i--){for(var f=!0,d=0;d<c;d++)if(l(t,i+d)!==l(e,d)){f=!1;break}if(f)return i}return-1}function y(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var a=0;a<r;++a){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))return a;t[n+a]=s}return a}function b(t,e,n,r){return K(U(e,t.length-n),t,n,r)}function _(t,e,n,r){return K(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function A(t,e,n,r){return _(t,e,n,r)}function w(t,e,n,r){return K(F(e),t,n,r)}function E(t,e,n,r){return K(function(t,e){for(var n,r,o,i=[],a=0;a<t.length&&!((e-=2)<0);++a)n=t.charCodeAt(a),r=n>>8,o=n%256,i.push(o),i.push(r);return i}(e,t.length-n),t,n,r)}function C(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function x(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i,a,s,c,l=t[o],u=null,f=l>239?4:l>223?3:l>191?2:1;if(o+f<=n)switch(f){case 1:l<128&&(u=l);break;case 2:128==(192&(i=t[o+1]))&&(c=(31&l)<<6|63&i)>127&&(u=c);break;case 3:i=t[o+1],a=t[o+2],128==(192&i)&&128==(192&a)&&(c=(15&l)<<12|(63&i)<<6|63&a)>2047&&(c<55296||c>57343)&&(u=c);break;case 4:i=t[o+1],a=t[o+2],s=t[o+3],128==(192&i)&&128==(192&a)&&128==(192&s)&&(c=(15&l)<<18|(63&i)<<12|(63&a)<<6|63&s)>65535&&c<1114112&&(u=c)}null===u?(u=65533,f=1):u>65535&&(u-=65536,r.push(u>>>10&1023|55296),u=56320|1023&u),r.push(u),o+=f}return function(t){var e=t.length;if(e<=k)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=k));return n}(r)}e.Buffer=c,e.SlowBuffer=function(t){+t!=t&&(t=0);return c.alloc(+t)},e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=a(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,n){return l(null,t,e,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,n){return function(t,e,n,r){return u(e),e<=0?s(t,e):void 0!==n?"string"==typeof r?s(t,e).fill(n,r):s(t,e).fill(n):s(t,e)}(null,t,e,n)},c.allocUnsafe=function(t){return f(null,t)},c.allocUnsafeSlow=function(t){return f(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=c.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var a=t[n];if(!c.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(r,o),o+=a.length}return r},c.byteLength=h,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},c.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?x(this,0,t):function(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,n);case"utf8":case"utf-8":return x(this,e,n);case"ascii":return S(this,e,n);case"latin1":case"binary":return O(this,e,n);case"base64":return C(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,n,r,o){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,o>>>=0,this===t)return 0;for(var i=o-r,a=n-e,s=Math.min(i,a),l=this.slice(r,o),u=t.slice(e,n),f=0;f<s;++f)if(l[f]!==u[f]){i=l[f],a=u[f];break}return i<a?-1:a<i?1:0},c.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},c.prototype.indexOf=function(t,e,n){return v(this,t,e,n,!0)},c.prototype.lastIndexOf=function(t,e,n){return v(this,t,e,n,!1)},c.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return y(this,t,e,n);case"utf8":case"utf-8":return b(this,t,e,n);case"ascii":return _(this,t,e,n);case"latin1":case"binary":return A(this,t,e,n);case"base64":return w(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var k=4096;function S(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function O(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function T(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=j(t[i]);return o}function B(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function N(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function I(t,e,n,r,o,i){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function R(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function M(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function P(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function L(t,e,n,r,i){return i||P(t,0,n,4),o.write(t,e,n,r,23,4),n+4}function z(t,e,n,r,i){return i||P(t,0,n,8),o.write(t,e,n,r,52,8),n+8}c.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=c.prototype;else{var o=e-t;n=new c(o,void 0);for(var i=0;i<o;++i)n[i]=this[i+t]}return n},c.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},c.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},c.prototype.readUInt8=function(t,e){return e||N(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||N(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||N(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},c.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},c.prototype.readInt8=function(t,e){return e||N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||N(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(t,e){e||N(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(t,e){return e||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||N(t,4,this.length),o.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||N(t,4,this.length),o.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||N(t,8,this.length),o.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||N(t,8,this.length),o.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||I(this,t,e,n,Math.pow(2,8*n)-1,0);var o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},c.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||I(this,t,e,n,Math.pow(2,8*n)-1,0);var o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},c.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):R(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):R(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):M(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);I(this,t,e,n,o-1,-o)}var i=0,a=1,s=0;for(this[e]=255&t;++i<n&&(a*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/a>>0)-s&255;return e+n},c.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);I(this,t,e,n,o-1,-o)}var i=n-1,a=1,s=0;for(this[e+i]=255&t;--i>=0&&(a*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/a>>0)-s&255;return e+n},c.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):R(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):R(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):M(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||I(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,n){return L(this,t,e,!0,n)},c.prototype.writeFloatBE=function(t,e,n){return L(this,t,e,!1,n)},c.prototype.writeDoubleLE=function(t,e,n){return z(this,t,e,!0,n)},c.prototype.writeDoubleBE=function(t,e,n){return z(this,t,e,!1,n)},c.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,i=r-n;if(this===t&&n<e&&e<r)for(o=i-1;o>=0;--o)t[o+e]=this[o+n];else if(i<1e3||!c.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+i),e);return i},c.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{var a=c.isBuffer(t)?t:U(new c(t,r).toString()),s=a.length;for(i=0;i<n-e;++i)this[i+e]=a[i%s]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function j(t){return t<16?"0"+t.toString(16):t.toString(16)}function U(t,e){var n;e=e||1/0;for(var r=t.length,o=null,i=[],a=0;a<r;++a){if((n=t.charCodeAt(a))>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function F(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function K(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}}).call(e,n("DuR2"))},"FZ+f":function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},FeBl:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},Gu7T:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("c/Tr"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},Ibhu:function(t,e,n){var r=n("D2L2"),o=n("TcQ7"),i=n("vFc/")(!1),a=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},JaR3:function(t,e,n){(e=t.exports=function(t){t=t.toLowerCase();var n=e[t];if(!n)throw new Error(t+" is not supported (we accept pull requests)");return new n}).sha=n("N1es"),e.sha1=n("KQ4j"),e.sha224=n("lXn8"),e.sha256=n("zvjZ"),e.sha384=n("aY2F"),e.sha512=n("C015")},KF4J:function(t,e,n){var r=n("E25t");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("dbb99786",r,!0,{})},KQ4j:function(t,e,n){var r=n("LC74"),o=n("CzQx"),i=n("X3l8").Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80);function c(){this.init(),this._w=s,o.call(this,64,56)}function l(t){return t<<5|t>>>27}function u(t){return t<<30|t>>>2}function f(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(c,o),c.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,o=0|this._b,i=0|this._c,s=0|this._d,c=0|this._e,d=0;d<16;++d)n[d]=t.readInt32BE(4*d);for(;d<80;++d)n[d]=(e=n[d-3]^n[d-8]^n[d-14]^n[d-16])<<1|e>>>31;for(var p=0;p<80;++p){var h=~~(p/20),m=l(r)+f(h,o,i,s)+c+n[p]+a[h]|0;c=s,s=i,i=u(o),o=r,r=m}this._a=r+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0},c.prototype._hash=function(){var t=i.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=c},Kh4W:function(t,e,n){e.f=n("dSzd")},Kh5d:function(t,e,n){var r=n("sB3e"),o=n("PzxK");n("uqUo")("getPrototypeOf",function(){return function(t){return o(r(t))}})},L42u:function(t,e,n){var r,o,i,a=n("+ZMJ"),s=n("knuC"),c=n("RPLV"),l=n("ON07"),u=n("7KvD"),f=u.process,d=u.setImmediate,p=u.clearImmediate,h=u.MessageChannel,m=u.Dispatch,v=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},b=function(t){y.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++v]=function(){s("function"==typeof t?t:Function(t),e)},r(v),v},p=function(t){delete g[t]},"process"==n("R9M2")(f)?r=function(t){f.nextTick(a(y,t,1))}:m&&m.now?r=function(t){m.now(a(y,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=b,r=a(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(r=function(t){u.postMessage(t+"","*")},u.addEventListener("message",b,!1)):r="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(a(y,t,1),0)}),t.exports={set:d,clear:p}},LC74:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},LKZe:function(t,e,n){var r=n("NpIQ"),o=n("X8DO"),i=n("TcQ7"),a=n("MmMw"),s=n("D2L2"),c=n("SfB7"),l=Object.getOwnPropertyDescriptor;e.f=n("+E39")?l:function(t,e){if(t=i(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},M6a0:function(t,e){},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},Mhyx:function(t,e,n){var r=n("/bQp"),o=n("dSzd")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},N1es:function(t,e,n){var r=n("LC74"),o=n("CzQx"),i=n("X3l8").Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80);function c(){this.init(),this._w=s,o.call(this,64,56)}function l(t){return t<<30|t>>>2}function u(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(c,o),c.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,o=0|this._b,i=0|this._c,s=0|this._d,c=0|this._e,f=0;f<16;++f)n[f]=t.readInt32BE(4*f);for(;f<80;++f)n[f]=n[f-3]^n[f-8]^n[f-14]^n[f-16];for(var d=0;d<80;++d){var p=~~(d/20),h=0|((e=r)<<5|e>>>27)+u(p,o,i,s)+c+n[d]+a[p];c=s,s=i,i=l(o),o=r,r=h}this._a=r+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0},c.prototype._hash=function(){var t=i.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=c},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),i=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},a="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},l={namespaced:{configurable:!0}};l.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){s(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,l);var u=function(t){this.register([],t,!1)};u.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},u.prototype.update=function(t){!function t(e,n,r){0;n.update(r);if(r.modules)for(var o in r.modules){if(!n.getChild(o))return void 0;t(e.concat(o),n.getChild(o),r.modules[o])}}([],this.root,t)},u.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new c(e,n);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o);e.modules&&s(e.modules,function(e,o){r.register(t.concat(o),e,n)})},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var f;var d=function(t){var e=this;void 0===t&&(t={}),!f&&"undefined"!=typeof window&&window.Vue&&_(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"==typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var i=this,s=this.dispatch,c=this.commit;this.dispatch=function(t,e){return s.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r,g(this,o,[],this._modules.root),v(this,o),n.forEach(function(t){return t(e)}),f.config.devtools&&function(t){a&&(t._devtoolHook=a,a.emit("vuex:init",t),a.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){a.emit("vuex:mutation",t,e)}))}(this)},p={state:{configurable:!0}};function h(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function m(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;g(t,n,[],t._modules.root,!0),v(t,n,e)}function v(t,e,n){var r=t._vm;t.getters={};var o={};s(t._wrappedGetters,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var i=f.config.silent;f.config.silent=!0,t._vm=new f({data:{$$state:e},computed:o}),f.config.silent=i,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),f.nextTick(function(){return r.$destroy()}))}function g(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=y(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){f.set(s,c,r.state)})}var l=r.context=function(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=b(n,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=b(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return y(t.state,n)}}}),o}(t,a,n);r.forEachMutation(function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}(t,a+n,e,l)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e,o){var i,a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return(i=a)&&"function"==typeof i.then||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}(t,r,o,l)}),r.forEachGetter(function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,a+n,e,l)}),r.forEachChild(function(r,i){g(t,e,n.concat(i),r,o)})}function y(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function b(t,e,n){var r;return null!==(r=t)&&"object"==typeof r&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function _(t){f&&t===f||i(f=t)}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=b(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=b(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},d.prototype.subscribe=function(t){return h(t,this._subscribers)},d.prototype.subscribeAction=function(t){return h(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),g(this,this.state,t,this._modules.get(t),n.preserveState),v(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=y(e.state,t.slice(0,-1));f.delete(n,t[t.length-1])}),m(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),m(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,p);var A=k(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=S(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),w=k(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=S(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),E=k(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||S(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),C=k(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=S(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n});function x(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function k(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function S(t,e,n){return t._modulesNamespaceMap[n]}var O={Store:d,install:_,version:"3.0.1",mapState:A,mapMutations:w,mapGetters:E,mapActions:C,createNamespacedHelpers:function(t){return{mapState:A.bind(null,t),mapGetters:E.bind(null,t),mapMutations:w.bind(null,t),mapActions:C.bind(null,t)}}},T={computed:{isTestNetwork:function(){return"test"===this.network.name},isPublicNetwork:function(){return"public"===this.network.name},network:{get:function(){return this.$store.state.network},set:function(t){this.networkSet(t)}}},methods:o()({click:function(t){t.preventDefault();var e=t.target.getAttribute("data-value");this.network=e}},C(["networkSet"]))},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sco_component sco_component--network_selector"},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t._v("\n      Network\n      "),n("div",{staticClass:"sco_component_title_aside"},[n("div",{staticClass:"sco_network_selector sco_selector"},[n("a",{class:["sco_selector_value","sco_selector_value--off",{"sco_selector_value--selected":t.isTestNetwork}],attrs:{"data-value":"test"},on:{click:t.click}},[t._v("test")]),t._v(" "),n("a",{class:["sco_selector_value","sco_selector_value--on",{"sco_selector_value--selected":t.isPublicNetwork}],attrs:{"data-value":"public"},on:{click:t.click}},[t._v("public")])])])])])])},staticRenderFns:[]},N=n("VU/8")(T,B,!1,null,null,null).exports,I="USD",R="en-US";function M(t){return"native"===t.asset_type?"XLM":t.asset_code}function P(t,e,n,r){return e=e||R,new Intl.NumberFormat(e,{style:"decimal",minimumFractionDigits:n||2,maximumFractionDigits:r||2}).format(t)}function L(t,e){return P(t,e,0,7)}function z(t,e,n){return e=e||8,n=n||4,t.substring(0,e)+"..."+t.substring(t.length-n)}var D={computed:o()({marketCap:function(){return this.stellarTicker.data["market_cap_"+this.currency.toLowerCase()]},price:function(){return this.stellarTicker.data["price_"+this.currency.toLowerCase()]},volume24h:function(){return this.stellarTicker.data["24h_volume_"+this.currency.toLowerCase()]}},E(["currency","stellarTicker"])),data:function(){return{complete:!0}},filters:{decimal7:function(t){return L(t)},decimal8:function(t){return P(t,e,0,8);var e},niceNumber:function(t){return function(t,e,n,r){n=n||I;var o=t,i="";t>=1e4&&(o=t/1e4,i="K"),t>=1e6&&(o=t/1e6,i="M"),t>=1e9&&(o=t/1e9,i="B"),t>=1e12&&(o=t/1e12,i="T");var a={style:e,minimumFractionDigits:2,maximumFractionDigits:"string"==typeof e&&"percent"===e.toLowerCase()?2:t<1?6:2};return n&&(a.currency=n),new Intl.NumberFormat(R,a).format(o)+i}(t,"currency")}},created:function(){var t=this;setInterval(function(){t.updateStellarTicker()},3e4)},methods:o()({},C(["updateStellarTicker"]))},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["sco_component","sco_component--ticker","sco_loaded",{"sco_component--collapsed":t.complete}]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t._v("\n      Ticker\n      "),n("div",{staticClass:"sco_component_title_aside"},[n("span",{staticClass:"currency_name sco_hidden"},[t._v("Stellar")]),t._v(" "),n("span",{staticClass:"moniker"},[t._v("XLM")]),t._v(" "),n("span",{staticClass:"separator"},[t._v("|")]),t._v(" "),n("span",{staticClass:"price"},[t._v("$"+t._s(t._f("decimal7")(t.price)))]),t._v(" "),n("span",{staticClass:"moniker"},[t._v(t._s(t.currency))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.complete,expression:"complete"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.complete)?t._i(t.complete,null)>-1:t.complete},on:{change:function(e){var n=t.complete,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&(t.complete=n.concat([null])):i>-1&&(t.complete=n.slice(0,i).concat(n.slice(i+1)))}else t.complete=o}}})])]),t._v(" "),n("div",{staticClass:"sco_component_results"},[n("div",{staticClass:"ticker_meta"},[n("div",{staticClass:"ticker_meta"},[n("div",{staticClass:"ticker_meta_currency_name"},[t._v(t._s(t.stellarTicker.data.id)+" "+t._s(t.stellarTicker.data.symbol))]),t._v(" "),n("div",{staticClass:"ticker_meta_price"},[t._v("$"+t._s(t._f("decimal7")(t.price))+" "+t._s(t.currency))]),t._v(" "),n("div",{staticClass:"ticker_meta_priceBtc"},[t._v(t._s(t._f("decimal8")(t.stellarTicker.data.price_btc))+" BTC")])]),t._v(" "),n("div",{staticClass:"ticker_meta"},[n("div",{staticClass:"ticker_meta_rank"},[t._v("rank: "+t._s(t.stellarTicker.data.rank))]),t._v(" "),n("div",{staticClass:"ticker_meta_mcap"},[t._v("m.cap:"+t._s(t._f("niceNumber")(t.marketCap)))]),t._v(" "),n("div",{staticClass:"ticker_meta_vol24h"},[t._v("vol24r:"+t._s(t._f("niceNumber")(t.volume24h)))])])])])])])},staticRenderFns:[]},U=n("VU/8")(D,j,!1,null,null,null).exports,F={computed:o()({},A({dto:"dto",stellarTicker:function(t){return t.ticker.stellar}})),data:function(){return{complete:!0}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["sco_component","sco_component--ordersummary","sco_loaded",{"sco_component--collapsed":t.complete}]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t._v("\n      Order Summary\n      "),n("div",{staticClass:"sco_component_title_aside"},[t._v("\n        #"+t._s(t.dto.order_id||t.dto.invoice.id)+"\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.complete,expression:"complete"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.complete)?t._i(t.complete,null)>-1:t.complete},on:{change:function(e){var n=t.complete,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&(t.complete=n.concat([null])):i>-1&&(t.complete=n.slice(0,i).concat(n.slice(i+1)))}else t.complete=o}}})])]),t._v(" "),n("div",{staticClass:"sco_component_results"},[n("div",{staticClass:"sco_component_results_data"},[n("div",{staticClass:"sco_balances"},[n("div",{staticClass:"sco_balances_balance"},[n("div",{staticClass:"sco_balances_balance_label"},[t._v("Total")]),t._v(" "),n("div",{staticClass:"sco_balances_balance_asset_code adorned"},[t._v(t._s(t.dto.invoice.currency))]),t._v(" "),n("div",{staticClass:"sco_balances_balance_bal"},[t._v(t._s(t.dto.meta.invoiceTotalFormatted))])]),t._v(" "),n("div",{staticClass:"sco_balances_balance"},[n("div",{staticClass:"sco_balances_balance_label"},[t._v("=")]),t._v(" "),n("div",{staticClass:"sco_balances_balance_asset_code adorned"},[t._v(t._s(t.dto.payment.asset.code))]),t._v(" "),n("div",{staticClass:"sco_balances_balance_bal"},[t._v(t._s(t.dto.meta.invoicePriceInLumensFormatted))])]),t._v(" "),n("div",{staticClass:"sco_balances_balance sco_balances_balance_total"},[n("div",{staticClass:"sco_balances_balance_label"},[t._v("Total")]),t._v(" "),n("div",{staticClass:"sco_balances_balance_bal"},[t._v("\n              "+t._s(t.dto.meta.invoicePriceInLumensFormatted)+"\n              "),n("span",{staticClass:"sco_balances_balance_bal_asset_code"},[t._v(t._s(t.dto.payment.asset.code))])])]),t._v(" "),n("div",{staticClass:"sco_balances_meta"},[t._v("\n            "+t._s(t.dto.meta.currencyConversionDescription)),n("br"),t._v("\n            Last updated: "+t._s(t.stellarTicker.updated)+"\n          ")])])])])])])},staticRenderFns:[]},V=n("VU/8")(F,K,!1,null,null,null).exports,Z=n("//Fk"),q=n.n(Z),X=n("lajm"),Y=n.n(X),G=n("R27j"),H=n.n(G);function Q(t,e){return t=1e3*(t||30),e=1e3*(e||30),Y.a.create(t).then(function(t){return t.setExchangeTimeout(e),new H.a(t)})}function J(t,e,n){return t=t||"44'/148'/0'",e=e||!0,n=n||!1,Q(30,30).then(function(r){return r.getPublicKey(t,e,n).then(function(t){return new q.a(function(e){e(t.publicKey)})})})}var W=n("Gu7T"),$=n.n(W),tt={APP:{brand:"StellarCheckout",domain:"stellarcheckout.com",name:"stellar-checkout.js",version:""},SETTINGS:{culture:"en",currency:"USD"},CURRENCIES:["AUD","BRL","CAD","CHF","CLP","CNY","CZK","DKK","EUR","GBP","HKD","HUF","IDR","ILS","INR","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PKR","PLN","RUB","SEK","SGD","THB","TRY","TWD","USD","ZAR"],CLASS:{copied:"sco_copied",error:"sco_error",hidden:"sco_hidden",loaded:"sco_loaded",valid:"sco_valid"},DTO:{invoice:{currency:"USD",id:null,order_id:null,total:null},meta:{currencyConversionDescription:null,lumenPrice:null,invoiceTotalFormatted:null,invoicePriceInLumens:null},payment:{amount:null,asset:{code:null},fee:null,from:null,from_stellar_address:null,memo:null,memoType:null,to:null}},ENTITY:{tick:"&#10003;"},MESSAGE_TYPE:{ERROR:"ERROR",INFO:"INFO",WARNING:"WARNING"},NETWORK:{name:"test",network:null,uri:null},OPTIONS:{currency:null,id:null,lang:null,memo:null,network:null,onSubmit:null,redirectUrl:null,selector:null,stylesheet:null,style:{background:null},timeout:null,to:null,total:null},SELECTOR:{clipBoardInput:".sco_txt",errorElem:".sco_error_elem",fieldErrorMessage:".sco_error_message",spinner:".sco_spinner"},STELLAR_SDK_URL:"https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/0.8.2/stellar-sdk.js",TX_STATUS:{empty:{title:null,desc:null},created:{title:"Transaction created",desc:null},signed:{title:"Transaction signed...",desc:null},error:{title:"Error",desc:null},ledger_confirmation_required:{title:"Waiting for confirmation on device...",desc:null},listening_for_transaction:{title:"Listening for transaction...",desc:null},in_progress:{title:"Transaction in progress...",desc:null},complete:{title:"Transaction complete",desc:null},redirecting:{title:"Transaction complete. You are being redirected...",desc:null}},TICKERS:{stellar:{url:"https://stellarcheckout.azurewebsites.net/api/tickers/stellar",data:{"24h_volume_usd":null,available_supply:null,id:null,last_updated:null,market_cap_usd:null,max_supply:null,name:null,percent_change_1h:null,percent_change_24h:null,percent_change_7d:null,price_btc:null,price_usd:null,rank:null,symbol:null,total_supply:null},updated:null}},TIMEOUT:60,TIMER:null},et={en:{buttonStateDisabled:"Enter payment info",buttonStateNormal:"Send payment",buttonStateInProgress:"Confirming transaction...",buttonStatePaymentComplete:"Payment complete",isCopied:"copied",validateAmountNaN:"amount is not a number",validateAmountGreaterThanZero:"amount must be greater than zero",validatePublicKeyInvalid:"public key is invalid",validateTotalNaN:"total is not a number",validateTotalGreaterThanZero:"total must be greater than zero"},"cs-cz":{buttonStateDisabled:"Zadat informace o platbě",buttonStateNormal:"Odeslat platbu",buttonStateInProgress:"Potvrzení transakce ...",buttonStatePaymentComplete:"Platba dokončena",isCopied:"kopírovaný",validateAmountNaN:"částka není číslo",validateAmountGreaterThanZero:"částka musí být větší než nula",validatePublicKeyInvalid:"veřejný klíč je neplatný",validateTotalNaN:"totální není číslo",validateTotalGreaterThanZero:"celkový počet musí být větší než nula"},"da-dk":{buttonStateDisabled:"Indtast betalingsoplysninger",buttonStateNormal:"Sende betaling",buttonStateInProgress:"Bekræftelse af transaktion ...",buttonStatePaymentComplete:"Betaling fuldført",isCopied:"kopieret",validateAmountNaN:"beløb er ikke et tal",validateAmountGreaterThanZero:"beløb skal være større end nul",validatePublicKeyInvalid:"Offentlig nøgle er ugyldig",validateTotalNaN:"totalt er ikke et tal",validateTotalGreaterThanZero:"alt skal være større end nul"},"de-de":{buttonStateDisabled:"Zahlungsinformationen eingeben",buttonStateNormal:"Zahlung senden",buttonStateInProgress:"Transaktion bestätigen ...",buttonStatePaymentComplete:"Zahlung abgeschlossen",isCopied:"kopiert",validateAmountNaN:"Betrag ist keine Zahl",validateAmountGreaterThanZero:"Betrag muss größer als Null sein",validatePublicKeyInvalid:"öffentlicher Schlüssel ist ungültig",validateTotalNaN:"Summe ist keine Zahl",validateTotalGreaterThanZero:"Summe muss größer als Null sein"},"es-es":{buttonStateDisabled:"Ingresar información de pago",buttonStateNormal:"Enviar pago",buttonStateInProgress:"Confirming transaction ...",buttonStatePaymentComplete:"Pago completo",isCopied:"copiado",validateAmountNaN:"la cantidad no es un número",validateAmountGreaterThanZero:"la cantidad debe ser mayor que cero",validatePublicKeyInvalid:"la clave pública no es válida",validateTotalNaN:"total no es un número",validateTotalGreaterThanZero:"total debe ser mayor que cero"},"fr-fr":{buttonStateDisabled:"Entrer les informations de paiement",buttonStateNormal:"Envoyer le paiement",buttonStateInProgress:"Confirmation de transaction ...",buttonStatePaymentComplete:"Paiement terminé",isCopied:"copié",validateAmountNaN:"amount n'est pas un nombre",validateAmountGreaterThanZero:"le montant doit être supérieur à zéro",validatePublicKeyInvalid:"clé publique invalide",validerTotalNaN:"total n'est pas un nombre",validateTotalGreaterThanZero:"total doit être supérieur à zéro"},"hu-hu":{buttonStateDisabled:"Adja meg a fizetési adatokat",buttonStateNormal:"Fizetés küldése",buttonStateInProgress:"Tranzakció megerősítése ...",buttonStatePaymentComplete:"Fizetés kész",isCopied:"másolt",validateAmountNaN:"összeg nem szám",validateAmountGreaterThanZero:"az összegnek nagyobbnak kell lennie mint nulla",validatePublicKeyInvalid:"nyilvános kulcs érvénytelen",validateTotalNaN:"a teljes nem szám",validateTotalGreaterThanZero:"összesnek nagyobbnak kell lennie mint nulla"},"id-id":{buttonStateDisabled:"Masukkan info pembayaran",buttonStateNormal:"Send Payment",buttonStateInProgress:"Mengkonfirmasi transaksi ...",buttonStatePaymentComplete:"Pembayaran selesai",isCopied:"disalin",validateAmountNaN:"jumlah bukan angka",validateAmountGreaterThanZero:"jumlah harus lebih besar dari nol",validatePublicKeyInvalid:"kunci publik tidak valid",validateTotalNaN:"total bukan angka",validateTotalGreaterThanZero:"total harus lebih besar dari nol"},"it-it":{buttonStateDisabled:"Inserisci informazioni di pagamento",buttonStateNormal:"Invia pagamento",buttonStateInProgress:"Conferma della transazione ...",buttonStatePaymentComplete:"Pagamento completato",isCopied:"copiato",validateAmountNaN:"amount is not a number",validateAmountGreaterThanZero:"l'importo deve essere maggiore di zero",validatePublicKeyInvalid:"public key is invalid",validateTotalNaN:"total non è un numero",validateTotalGreaterThanZero:"totale deve essere maggiore di zero"},"ja-jp":{buttonStateDisabled:"支払い情報を入力",buttonStateNormal:"支払いを送る",buttonStateInProgress:"トランザクションの確認中...",buttonStatePaymentComplete:"支払い完了",isCopied:"コピーされた",validateAmountNaN:"金額は数字ではありません",validateAmountGreaterThanZero:"額はゼロより大きくする必要があります",validatePublicKeyInvalid:"公開鍵が無効です",validateTotalNaN:"合計は数字ではありません",validateTotalGreaterThanZero:"合計はゼロより大きくなければなりません"},"ko-kr":{buttonStateDisabled:"결제 정보 입력",buttonStateNormal:"지불하기",buttonStateInProgress:"거래 확인 중 ...",buttonStatePaymentComplete:"지불 완료",isCopied:"복사 한",validateAmountNaN:"금액이 숫자가 아닙니다",validateAmountGreaterThanZero:"금액은 0보다 커야합니다",validatePublicKeyInvalid:"공개 키가 유효하지 않습니다",validateTotalNaN:"총 숫자가 아닙니다",validateTotalGreaterThanZero:"합계가 0보다 커야합니다."},"pl-pl":{buttonStateDisabled:"Wprowadź informacje o płatności",buttonStateNormal:"Wyślij płatność",buttonStateInProgress:"Potwierdzanie transakcji ...",buttonStatePaymentComplete:"Płatność została zrealizowana",isCopied:"skopiowany",validateAmountNaN:"kwota nie jest liczbą",validateAmountGreaterThanZero:"kwota musi być większa od zera",validatePublicKeyInvalid:"klucz publiczny jest nieprawidłowy",validateTotalNaN:"suma nie jest liczbą",validateTotalGreaterThanZero:"suma musi być większa od zera"},"pt-br":{buttonStateDisabled:"Digite informações de pagamento",buttonStateNormal:"Enviar pagamento",buttonStateInProgress:"Confirmar transação ...",buttonStatePaymentComplete:"Pagamento completo",isCopied:"copiado",validateAmountNaN:"amount is not a number",validateAmountGreaterThanZero:"quantidade deve ser maior que zero",validatePublicKeyInvalid:"chave pública é inválida",validateTotalNaN:"total não é um número",validateTotalGreaterThanZero:"total deve ser maior que zero"},"ru-ru":{buttonStateDisabled:"Введите платежную информацию",buttonStateNormal:"Отправить платеж",buttonStateInProgress:"Подтверждение транзакции ...",buttonStatePaymentComplete:"Полная оплата",isCopied:"skopirovano",validateAmountNaN:"сумма не является числом",validateAmountGreaterThanZero:"сумма должна быть больше нуля",validatePublicKeyInvalid:"открытый ключ недействителен",validateTotalNaN:"total is not a number",validateTotalGreaterThanZero:"total должно быть больше нуля"},"sv-se":{buttonStateDisabled:"Ange betalningsinfo",buttonStateNormal:"Skicka betalning",buttonStateInProgress:"Bekräftar transaktion ...",buttonStatePaymentComplete:"Betalning komplett",isCopied:"kopieras",validateAmountNaN:"beloppet är inte ett nummer",validateAmountGreaterThanZero:"beloppet måste vara större än noll",validatePublicKeyInvalid:"Offentlig nyckel är ogiltig",validateTotalNaN:"totalt är inte ett tal",validateTotalGreaterThanZero:"totalt måste vara större än noll"},"th-th":{ButtonStateDisabled:"P̂xn k̄ĥxmūl kār chảra ngein",buttonStateNormal:"S̄̀ng kār chảra ngein",buttonStateInProgress:"Kảlạng yụ̄nyạn kār thả ṭhurkrrm... ",ButtonStatePaymentComplete:"Kār chảra ngein s̄er̆c s̄mbūrṇ̒",isCopied:"Khạd lxk",validateAmountNaN:"Cảnwn mị̀chı̀ cảnwn",validateAmountGreaterThanZero:"Cảnwn ngein t̂xng mākkẁā ṣ̄ūny̒",validatePublicKeyInvalid:"Khīy̒ s̄āṭhārṇa mị̀ t̄hūk t̂xng",validateTotalNaN:"Total mị̀chı̀ tạwlek̄h",validateTotalGreaterThanZero:"Cảnwn rwm t̂xng mākkẁā ṣ̄ūny̒"},"tr-tr":{buttonStateDisabled:"Ödeme bilgilerini girin",buttonStateNormal:"Ödeme gönder",buttonStateInProgress:"İşlemi Onaylıyor ...",buttonStatePaymentComplete:"Ödeme tamamlandı",isCopied:"kopyalanmış",validateAmountNaN:"tutar bir sayı değil",validateAmountGreaterThanZero:"tutar sıfırdan büyük olmalı",validatePublicKeyInvalid:"genel anahtar geçersiz",validateTotalNaN:"toplam bir sayı değil",validateTotalGreaterThanZero:"toplam sıfırdan büyük olmalı"},"zh-cn":{ButtonStateDisabled:"Shūrù fùkuǎn xìnxī",buttonStateNormal:"Fāsòng fùkuǎn",buttonStateInProgress:"Quèrèn jiāoyì...",ButtonStatePaymentComplete:"Fùkuǎn wánchéng",isCopied:"Fùzhì",validateAmountNaN:"Jīn'é bùshì shùzì",validateAmountGreaterThanZero:"Jīn'é bìxū dàyú líng",validatePublicKeyInvalid:"Gōng yào wúxiào",validateTotalNaN:"Zǒng shǔ bùshì shùzì",validateTotalGreaterThanZero:"Zǒngshù bìxū dàyú líng"},"zu-za":{buttonStateDisabled:"Betaal inligting in te vul",buttonStateNormal:"Stuur betaling",buttonStateInProgress:"Bevestiging van transaksie ...",buttonStatePaymentComplete:"Betaling voltooi",isCopied:"gekopieer",validateAmountNaN:"bedrag is nie 'n nommer' nie",validateAmountGreaterThanZero:"bedrag moet groter as nul' wees",validatePublicKeyInvalid:"publieke sleutel is ongeldig",validateTotalNaN:"totaal is nie 'n nommer' nie",validateTotalGreaterThanZero:"totaal moet groter as nul wees"}},nt=n("Zrlr"),rt=n.n(nt),ot=n("wxAW"),it=n.n(ot),at=n("mB6w"),st=n.n(at),ct=function(){function t(e,n){rt()(this,t),this.cultureCode=e,this.defaultLang="en",this.defaultValues={},this.localizations=n||{},this.values={},this.updateValues()}return it()(t,[{key:"addLocalizations",value:function(t){this.localizations=st()(t,this.localizations),this.updateValues()}},{key:"localize",value:function(t,e){return this.values&&this.values[t]?this.values[t]:this.defaultValues&&this.defaultValues[t]?this.defaultValues[t]:e||""}},{key:"updateValues",value:function(){this.localizations&&(this.defaultLang&&(this.defaultValues=this.localizations[this.defaultLang]),this.cultureCode&&(this.values=this.localizations[this.cultureCode.toLowerCase()]))}}]),t}(),lt=["en","es-ES","ja-JP","ko-KR","ru-RU","zh-CN"],ut={init:function(t){var e=this;return new q.a(function(n){e.localizer=new ct(t,et),n(e.localizer)})}};function ft(t,e,n){this.elem=e,this.msg=t,this.msgType=n||tt.MESSAGE_TYPE.ERROR}function dt(t,e){this.errors=t||[],this.result=e||!0}function pt(t,e){var n=new dt,r=ut.localizer,o=e||tt.DTO.payment.from;return o&&window.StellarSdk.StrKey.isValidEd25519PublicKey(o)||n.addError(new ft(r.localize("validatePublicKeyInvalid","public key is invalid"),t)),n}function ht(t,e,n){var r,o=new window.StellarSdk.Server(t.uri),i=e.payment.to,a=new Date;o.payments().limit(1).order("desc").call().then(function(t){return t.records[0].transaction()}).then(function(t){return r=t.ledger_attr,o.payments().forAccount(i).cursor("now")}).then(function(o){var s=o.stream({onmessage:function(o){o.to===i&&function(t,e,n,r,o){var i=!1,a=!1,s=!1,c=!1,l=!1,u=!1;return new window.StellarSdk.Server(t.uri).transactions().transaction(o.transaction_hash).call().then(function(t){return i=parseFloat(r.payment.amount)===parseFloat(o.amount),a=t.ledger_attr>n,s=r.payment.to===o.to,c=window.StellarSdk.hash(r.payment.memo).toString("base64")===t.memo,l=r.payment.from&&o.from===t.source_account,u=Date.parse(t.created_at)>=e.getTime(),t=i&&a&&s&&c&&l&&u}).catch(function(t){console.log(t)})}(t,a,r,e,o).then(function(t){if(!t)throw new Error("payment received. it wasn't our payment though...");n.call(this,null,o),s()})},onerror:function(t){console.error(t)}});return s})}function mt(t){var e;t=t||"test";var n=window.StellarSdk.Network;return"string"==typeof t&&"production"===t.toLowerCase()||"string"==typeof t&&"public"===t.toLowerCase()?(e="https://horizon.stellar.org",n.usePublicNetwork()):(e="https://horizon-testnet.stellar.org",n.useTestNetwork()),{name:t,network:n.current(),uri:e}}ft.prototype.toString=function(){var t=this.msgType?" "+this.msgType:"";return tt.APP.name+t+" "+this.msg},dt.prototype.addError=function(t){this.errors.push(t),this.result=!1};var vt={props:{ledgerConnected:{type:Boolean,default:!1}},computed:o()({buttonText:function(){var t="Enter your stellar address";return this.input.trim().length>0&&(t="Verify your stellar address"),this.complete&&(t="Confirm your stellar address"),t},complete:{get:function(){return this.$store.state.federation.complete},set:function(t){this.federationSet({complete:t})}},federation:{get:function(){return this.$store.state.federation},set:function(t){this.federationSet(t)}}},A(["network"])),created:function(){var t=this;setTimeout(function(){t.loaded=!0},1200)},data:function(){return{error:null,ledgerVerificationInProgress:!1,loaded:!1,input:""}},methods:o()({clearState:function(){this.federation={complete:!1,error:null,publicKey:null,stellarAddress:null}},doFederation:function(){var t=this,e=this.input.trim();if(0!==e.length)if(this.clearState(),pt(null,e).result)this.federation={complete:!0,publicKey:e};else if(function(t){return t&&t.toString().split("*").length>1}(e)){var n=function(t){var e=t&&t.toString().split("*");return e.length<=0?null:{handle:e[0],homeDomain:e[1]}}(e);if(!n)return;window.StellarSdk.FederationServer.createForDomain(n.homeDomain).then(function(t){return t.resolveAddress(n.handle)}).then(function(e){t.federation={complete:!0,publicKey:e.account_id,stellarAddress:e.stellar_address}}).catch(function(e){t.federationErrorSet(e)})}else{var r="Error: could not resolve stellar address";this.error=r,this.federation={complete:!0,error:r}}},ledgerVerify:function(){var t=this;this.ledgerVerificationInProgress=!0,J(this.federation.ledgerBip32Path,!0,!1).then(function(e){t.federation={complete:!0,ledgerVerified:!0,publicKey:e},t.ledgerVerificationInProgress=!1}).catch(function(e){console.log(e),t.error=e.message,t.ledgerErrorSet(e.message),t.ledgerVerificationInProgress=!1})}},C(["federationSet","federationErrorSet","ledgerErrorSet"])),watch:{network:function(){var t=this;setTimeout(function(e){t.doFederation()},400)}}},gt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["sco_component","sco_component--federation",{sco_loaded:t.loaded,"sco_component--collapsed":t.federation.complete}]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t._v("1. Verify your address\n        "),n("div",{staticClass:"sco_component_title_aside"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.complete,expression:"complete"}],attrs:{type:"checkbox",disabled:!t.federation.publicKey},domProps:{checked:Array.isArray(t.complete)?t._i(t.complete,null)>-1:t.complete},on:{change:function(e){var n=t.complete,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&(t.complete=n.concat([null])):i>-1&&(t.complete=n.slice(0,i).concat(n.slice(i+1)))}else t.complete=o}}})])]),t._v(" "),n("div",{staticClass:"sco_component_results"},[n("form",{directives:[{name:"show",rawName:"v-show",value:t.ledgerConnected,expression:"ledgerConnected"}],staticClass:"sco_form",on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"sco_component_text"},[t._v("\n            Your Ledger Wallet is connected. You will have to check & confirm the address displayed on your device screen.\n          ")]),t._v(" "),n("div",{staticClass:"sco_component--button_row"},[n("button",{staticClass:"sco_button",attrs:{disabled:t.ledgerVerificationInProgress},on:{click:t.ledgerVerify}},[t._v("\n                Continue\n            ")])])]),t._v(" "),n("form",{directives:[{name:"show",rawName:"v-show",value:!t.ledgerConnected,expression:"!ledgerConnected"}],staticClass:"sco_form",on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"sco_field"},[n("label",{staticClass:"sco_field_label",attrs:{for:"sco_federation_input"}},[t._v("Enter your Stellar Address")]),t._v(" "),n("div",{staticClass:"sco_field_input sco_field_input--input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",attrs:{id:"sco_federation_input",autocomplete:"off",placeholder:"E.g. bob*yourhomedomain.org",type:"text"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._v(" "),n("span",{staticClass:"sco_spinner"})]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"sco_component--button_row"},[n("button",{staticClass:"sco_button",attrs:{disabled:!t.input||t.complete},on:{click:t.doFederation}},[t._v("\n              "+t._s(t.buttonText)+"\n            ")])])]),t._v(" "),t.error?n("div",{staticClass:"sco_component_error"},[n("p",{domProps:{innerHTML:t._s(t.error)}})]):t._e()]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sco_field_note"},[this._v("A stellar address is a federated address such as "),e("i",[this._v("bob@example.com*stellarcheckout.com")]),this._v(". If you don't have a stellar address, you can just enter your public key.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"sco_spinner"},[e("i",{staticClass:"fas fa-spinner fa-spin"})])}]},yt=n("VU/8")(vt,gt,!1,null,null,null).exports,bt={computed:o()({bip32Path:{get:function(){return this.$store.state.federation.ledgerBip32Path},set:function(t){return this.federationSet({ledgerBip32Path:t})}},connected:{get:function(){return this.isConnected},set:function(t){this.isConnected=t}},error:{get:function(){return this.$store.state.federation.ledgerError},set:function(t){this.ledgerErrorSet(t)}},federation:{get:function(){return this.$store.state.federation},set:function(t){this.federationSet(t)}}},A({confirmed:function(t){return t.federation.ledgerConfirmed},publicKey:function(t){return t.federation.publicKey},verified:function(t){return t.federation.ledgerVerified},version:function(t){return t.federation.ledgerAppVersion}})),data:function(){return{isConnected:!1,interval:1e3}},created:function(){var t=this;this.$once("ledgerconnected",this.updateLedgerInfo),setInterval(function(e){t.ledgerConnect()},this.interval)},methods:o()({ledgerConnect:function(){var t=this;return Q(1,30).then(function(e){return new q.a(function(n,r){e.getAppConfiguration().then(function(r){t.connected=!0,t.$emit("ledgerconnected",r),n(e)}).catch(function(t){r(t)})})}).catch(function(e){t.connected=!1,t.$emit("ledgerdisconnected",e)})},updateLedgerInfo:function(t){this.federation={ledgerAppVersion:t.version,ledgerError:null}}},C(["federationSet","ledgerErrorSet"])),watch:{}},_t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sco_component sco_component--ledger"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.federation.complete&&!t.connected,expression:"!federation.complete && !connected"}],staticClass:"sco_component_i"},[n("form",{staticClass:"sco_form",on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"sco_component--button_row"},[n("button",{staticClass:"sco_button",attrs:{disabled:!t.connected}},[t._v("\n          Sign with Ledger Wallet\n        ")])])])]),t._v(" "),t.connected?n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component--button_row"},[n("div",{staticClass:"sco_caption"},[t._v("\n          Ledger Stellar App v."+t._s(t.version)+" - "+t._s(t.version?"Connected":"Disconnected")+"\n      ")]),t._v(" "),n("div",{staticClass:"sco_caption"},[n("form",{on:{submit:function(t){t.preventDefault()}}},[t._v("\n          BIP32PATH: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bip32Path,expression:"bip32Path"}],domProps:{value:t.bip32Path},on:{input:function(e){e.target.composing||(t.bip32Path=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"sco_caption"},[t.verified?n("span",{staticClass:"verified"},[t._v(" Verified ✓")]):t._e(),t._v(" "),t.confirmed?n("span",{staticClass:"verified"},[t._v(" Confirmed ✓")]):t._e()])])]):t._e()])},staticRenderFns:[]},At=n("VU/8")(bt,_t,!1,null,null,null).exports,wt={props:{account:{}},computed:{filteredBalances:function(){var t=this.account.balances.filter(function(t){return"native"===t.asset_type}),e=this.account.balances.filter(function(t){return"native"!==t.asset_type});return[].concat($()(t),$()(e))}},filters:{assetCode:function(t){return M(t)},decimal7:function(t){return L(t)},publicKey:function(t){return z(t)}}},Et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sco_component_results_data"},[n("div",{staticClass:"sco_component_results_heading"},[n("div",[t._v("AccountID")]),t._v(" "),n("div",[t._v(t._s(t.account.id))])]),t._v(" "),n("div",{staticClass:"sco_balances"},[n("div",{staticClass:"sco_component_heading"},[t._v("Balances")]),t._v(" "),t._l(t.filteredBalances,function(e){return n("div",{key:e.asset_code,staticClass:"sco_balances_balance"},[n("div",{staticClass:"sco_balances_balance_asset_code"},[t._v(t._s(t._f("assetCode")(e)))]),t._v(" "),n("div",{staticClass:"sco_balances_balance_bal"},[t._v("\n        "+t._s(t._f("decimal7")(e.balance))+"\n        "),n("span",{staticClass:"sco_balances_balance_bal_asset_code"},[t._v(t._s(t._f("assetCode")(e)))])])])})],2)])},staticRenderFns:[]},Ct=n("VU/8")(wt,Et,!1,null,null,null).exports,xt={props:{ledgerConnected:{type:Boolean}},components:{AccountDetails:Ct},computed:o()({accountConfirmation:{get:function(){return this.$store.state.accountConfirmation},set:function(t){this.accountConfirmationSet(t)}},buttonText:function(){var t="I confirm I am the owner of this account";return this.ledgerConnected&&(t="Confirm the account on your Ledger device"),t},complete:{get:function(){return this.$store.state.accountConfirmation.complete},set:function(t){this.accountConfirmationSet({complete:t})}},error:{get:function(){return this.federationError||this.$store.state.accountConfirmation.error},set:function(t){this.accountConfirmationError(t)}},federation:{get:function(){return this.$store.state.federation},set:function(t){this.federationSet(t)}}},A({federationComplete:function(t){return t.federation.complete},networkName:function(t){return t.network.name}})),data:function(){return{awaitingConfirmation:!1,loaded:!1,title:"2. Loading account details..."}},methods:o()({confirmClick:function(t){var e=this;t.preventDefault(),this.awaitingConfirmation=!0,this.ledgerConnected?J(this.federation.ledgerBip32Path,!1,!0).then(function(t){e.federation={ledgerConfirmed:!0},e.complete=!0,e.awaitingConfirmation=!1}).catch(function(t){console.log(t),e.ledgerErrorSet(t.message),e.awaitingConfirmation=!1}):(this.complete=!0,this.awaitingConfirmation=!1)},isLoaded:function(){this.title="2. Confirm your account",this.loaded=!0}},C(["accountLoad","accountConfirmationSet","accountConfirmationError","federationSet","ledgerErrorSet"])),watch:{federationComplete:function(t){var e=this;t&&(this.error=null,this.loaded=!1,this.federation.error?this.error=self.federation.error:this.federation.publicKey&&setTimeout(function(t){e.accountLoad(e.federation.publicKey).then(function(t){e.isLoaded()}).catch(function(t){var n="Error",r="sco_network_tag sco_network_tag--"+e.networkName.toLowerCase();t.response&&404===t.response.status&&(n+=': account cannot be found on the <span class="'+r+'">'+e.networkName+"</span> network"),e.error=n,e.isLoaded()})},400))}}},kt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.federation.complete,expression:"federation.complete"}],class:["sco_component","sco_component--account_confirmation",{sco_loaded:t.loaded,"sco_component--collapsed":t.accountConfirmation.complete}]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t._v(t._s(t.title)+"\n      "),n("div",{staticClass:"sco_component_title_aside"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.complete,expression:"complete"}],attrs:{type:"checkbox",disabled:!t.complete},domProps:{checked:Array.isArray(t.complete)?t._i(t.complete,null)>-1:t.complete},on:{change:function(e){var n=t.complete,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&(t.complete=n.concat([null])):i>-1&&(t.complete=n.slice(0,i).concat(n.slice(i+1)))}else t.complete=o}}})])]),t._v(" "),t.error?t._e():n("div",{staticClass:"sco_component_results"},[t.accountConfirmation.account?n("AccountDetails",{attrs:{account:t.accountConfirmation.account}}):t._e(),t._v(" "),n("form",{directives:[{name:"show",rawName:"v-show",value:t.accountConfirmation.account,expression:"accountConfirmation.account"}],staticClass:"sco_form"},[n("div",{staticClass:"sco_component--button_row"},[n("button",{staticClass:"sco_button",attrs:{disabled:t.awaitingConfirmation||t.accountConfirmation.complete},on:{click:t.confirmClick}},[t._v(t._s(t.buttonText))])])])],1),t._v(" "),t.error?n("div",{staticClass:"sco_component_error"},[n("p",{domProps:{innerHTML:t._s(t.error)}})]):t._e(),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"sco_spinner"},[e("i",{staticClass:"fas fa-spinner fa-spin"})])}]},St=n("VU/8")(xt,kt,!1,null,null,null).exports,Ot={components:{},computed:o()({complete:{get:function(){return this.$store.state.transactionDetails.complete},set:function(t){this.transactionDetailsSet({complete:t})}},error:{get:function(){return this.$store.state.transactionDetails.error},set:function(t){this.transactionDetailsErrorSet(t)}},transactionDetails:{get:function(){return this.$store.state.transactionDetails},set:function(t){this.transactionDetailsSet(t)}},transactionStatus:{get:function(){return this.$store.state.transactionStatus},set:function(t){this.transactionStatusSet(t)}}},A({accountConfirmation:"accountConfirmation",accountConfirmed:function(t){return t.accountConfirmation.complete},dto:"dto",network:"network"})),data:function(){return{loaded:!1,xdr:null}},methods:o()({load:function(){var t,e,n,r,o=this;(t=this.network,e=this.dto,n=new window.StellarSdk.Server(t.uri),r=e.payment.to,n.loadAccount(r).catch(window.StellarSdk.NotFoundError,function(t){throw new Error("The destination account does not exist!",t)}).then(function(){return n.loadAccount(e.payment.from)}).then(function(t){var n=new window.StellarSdk.TransactionBuilder(t).addOperation(window.StellarSdk.Operation.payment({destination:r,asset:e.payment.asset,amount:e.payment.amount}));if(e.payment.memo){var o=e.payment.memo;o=window.StellarSdk.hash(o),n.addMemo(window.StellarSdk.Memo.hash(o))}return n.build()})).then(function(t){o.transactionDetails={transaction:t,transactionHash:t.hash().toString("hex"),transactionXdr:t.toEnvelope().toXDR("base64")},o.transactionStatus={status:tt.TX_STATUS.created},o.loaded=!0,o.complete=!0}).catch(function(t){console.log(t),o.error=t})}},C(["transactionDetailsSet","transactionDetailsErrorSet","transactionStatusSet"])),watch:{accountConfirmed:function(t){var e=this;t&&(this.error=null,this.loaded=!1,setTimeout(function(t){e.load()},400))}}},Tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.accountConfirmation.complete,expression:"accountConfirmation.complete"}],class:["sco_component","sco_component--transaction_details",{sco_loaded:t.loaded}]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t._v("3. Transaction Details")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"sco_component_results"},[t._v("\n      "+t._s(t.transactionDetails.transactionHash)+"\n      "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.transactionDetails.transactionXdr,expression:"transactionDetails.transactionXdr"}],staticClass:"sco_offscreen",domProps:{value:t.transactionDetails.transactionXdr},on:{input:function(e){e.target.composing||t.$set(t.transactionDetails,"transactionXdr",e.target.value)}}})]),t._v(" "),t.error?n("div",{staticClass:"sco_error_elem"},[n("p",[t._v(t._s(t.error))])]):t._e(),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"sco_spinner"},[e("i",{staticClass:"fas fa-spinner fa-spin"})])}]},Bt=n("VU/8")(Ot,Tt,!1,null,null,null).exports;function Nt(t,e,n){return t.replace(new RegExp(e,"g"),n)}function It(t,e){if(t.redirectUrl){var n=t.redirectUrl,r={hash:e.hash?e.hash:e.transaction_hash?e.transaction_hash:""};r=function(t){var e="";for(var n in t)e+=0===e.length?"?":"&",e+=n+"="+encodeURIComponent(t[n]);return e}(r),-1!==n.indexOf("?")&&(r=Nt(r,"\\?","&")),function(t,e){window&&(window.location.href=t+e)}(n,r)}}var Rt={props:{ledgerConnected:{type:Boolean}},computed:o()({complete:{get:function(){return this.$store.state.paymentOptions.complete},set:function(t){this.paymentOptionsSet({complete:t})}},error:{get:function(){return this.$store.state.paymentOptions.error},set:function(t){this.paymentOptionsError(t)}},paymentOptions:{get:function(){return this.$store.state.paymentOptions},set:function(t){this.paymentOptionsSet(t)}},transactionDetails:{get:function(){return this.$store.state.transactionDetails},set:function(t){this.transactionDetailsSet(t)}},transactionStatus:{get:function(){return this.$store.state.transactionStatus},set:function(t){this.transactionStatusSet(t)}},transactionStatusError:{get:function(){return this.$store.state.transactionStatus.error},set:function(t){this.transactionStatusErrorSet(t)}}},A({dto:"dto",federation:"federation",network:"network",options:"options",transactionDetailsComplete:function(t){return t.transactionDetails.complete}})),data:function(){return{loaded:!1}},methods:o()({useAlternatePaymentMethod:function(t){this.paymentOptions={complete:!0,error:null,method:t},this.transactionStatus={status:tt.TX_STATUS.listening_for_transaction},ht(this.network,this.dto,this.submitHandler)},signWithLedgerClick:function(){var t=this;this.paymentOptions={complete:!0,error:null,method:"ledger"},this.transactionStatus={status:tt.TX_STATUS.ledger_confirmation_required};var e=this.transactionDetails.transaction,n=this.federation.ledgerBip32Path;return function(t,e){return e=e||"44'/148'/0'",Q(30,30).then(function(n){return n.signTransaction(e,t.signatureBase()).then(function(t){return t.signature})})}(e,n).then(function(n){return t.transactionStatus={status:tt.TX_STATUS.signed},new q.a(function(r,o){var i,a,s=e.hash(),c=window.StellarSdk.Keypair.fromPublicKey(t.dto.payment.from);if(c.verify(s,n)){var l=c.signatureHint(),u=new window.StellarSdk.xdr.DecoratedSignature({hint:l,signature:n});return e.signatures.push(u),setTimeout(function(){t.transactionStatus={status:tt.TX_STATUS.in_progress}},400),(i=t.network,a=e,new window.StellarSdk.Server(i.uri).submitTransaction(a).then(function(t){return t})).then(function(e){t.transactionStatus={complete:!0,error:null,result:e,status:tt.TX_STATUS.complete,success:!0},setTimeout(function(){r(e),t.submitHandler(null,e)},800)})}o(new Error("Bad signature"))})}).catch(function(e){t.transactionStatus={error:e.toString(),status:tt.TX_STATUS.error}})},submitHandler:function(t,e){var n=this;t?this.options.onSubmit&&"function"==typeof this.options.onSubmit&&this.options.onSubmit.call(this,t):this.options.redirectUrl?setTimeout(function(){n.transactionStatus={status:tt.TX_STATUS.redirecting},setTimeout(function(){It(n.options,e)},800)},800):this.options.onSubmit&&"function"==typeof this.options.onSubmit&&this.options.onSubmit.call(this,null,e)}},C(["paymentOptionsSet","paymentOptionsError","transactionDetailsSet","transactionStatusSet","transactionStatusErrorSet"])),watch:{transactionDetailsComplete:function(t){var e=this;t&&(this.error=null,this.loaded=!1,setTimeout(function(t){e.loaded=!0},400))}}},Mt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.transactionDetailsComplete,expression:"transactionDetailsComplete"}],class:["sco_component","sco_component--payment_options",{sco_loaded:t.loaded,"sco_component--collapsed":t.complete}]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t._v("4. Payment method\n      "),n("div",{staticClass:"sco_component_title_aside"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.complete,expression:"complete"}],attrs:{type:"checkbox",disabled:!t.paymentOptions.complete},domProps:{checked:Array.isArray(t.complete)?t._i(t.complete,null)>-1:t.complete},on:{change:function(e){var n=t.complete,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&(t.complete=n.concat([null])):i>-1&&(t.complete=n.slice(0,i).concat(n.slice(i+1)))}else t.complete=o}}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"sco_component_results"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ledgerConnected,expression:"ledgerConnected"}],staticClass:"sco_component--button_row"},[n("button",{staticClass:"sco_button",on:{click:function(e){return e.preventDefault(),t.signWithLedgerClick(e)}}},[t._v("Sign with Ledger Wallet")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.ledgerConnected,expression:"!ledgerConnected"}],staticClass:"sco_component--button_row"},[n("button",{staticClass:"sco_button",on:{click:function(e){e.preventDefault(),t.useAlternatePaymentMethod("tx_signer")}}},[t._v("Use Transaction Signer")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.ledgerConnected,expression:"!ledgerConnected"}],staticClass:"sco_component--button_row"},[n("button",{staticClass:"sco_button",on:{click:function(e){e.preventDefault(),t.useAlternatePaymentMethod("byo")}}},[t._v("Use my own wallet")])])]),t._v(" "),t.error?n("div",{staticClass:"sco_component_error"},[n("p",[t._v(t._s(t.error))])]):t._e(),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"sco_spinner"},[e("i",{staticClass:"fas fa-spinner fa-spin"})])}]},Pt=n("VU/8")(Rt,Mt,!1,null,null,null).exports;var Lt={props:{},computed:o()({paymentOptions:{get:function(){return this.$store.state.paymentOptions},set:function(t){this.paymentOptionsSet(t)}}},A({dto:"dto",network:"network",paymentOptionsComplete:function(t){return t.paymentOptions.complete},transactionDetails:"transactionDetails"})),data:function(){return{complete:!1,error:null,loaded:!1}},methods:o()({copyXdrToClipboard:function(){(function(t){var e=!1;if(t)try{t.select(),e=!!document.execCommand("copy"),t.setSelectionRange(0,0)}catch(t){console.log(t)}return e}).call(this,this.$refs.xdrEnvelope)},goToTxSigner:function(){this.copyXdrToClipboard(),window.open("https://www.stellar.org/laboratory/#txsigner?xdr="+this.transactionDetails.transactionXdr+"&network="+this.network.name,"_blank")}},C(["paymentOptionsSet"])),watch:{paymentOptionsComplete:function(t){var e=this;t&&(this.error=null,this.loaded=!1,setTimeout(function(t){e.loaded=!0},400))}}},zt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.paymentOptionsComplete,expression:"paymentOptionsComplete"}],class:["sco_component","sco_component--payment_instructions",{sco_loaded:t.loaded,"sco_component--collapsed":t.complete}]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t._v("5. Instructions")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"sco_component_results"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"ledger"===t.paymentOptions.method,expression:"paymentOptions.method === 'ledger'"}],staticClass:"sco_component_text"},[n("p",[t._v("Please confirm the transaction on your Ledger Wallet device")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"tx_signer"===t.paymentOptions.method,expression:"paymentOptions.method === 'tx_signer'"}],staticClass:"sco_component_text"},[n("p",[t._v("The transaction XDR envelope has been copied to your clipboard. Paste this into the textarea provided in the Transaction Signer.")]),t._v(" "),n("div",{staticClass:"sco_component--button_row"},[n("button",{staticClass:"sco_button",on:{click:function(e){return e.preventDefault(),t.goToTxSigner(e)}}},[t._v("Go to Transaction Signer")])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"byo"===t.paymentOptions.method,expression:"paymentOptions.method === 'byo'"}]},[t._m(0),t._v(" "),n("div",{staticClass:"sco_component_results_heading"},[n("div",[t._v("To")]),t._v(" "),n("div",[t._v(t._s(t.dto.payment.to))])]),t._v(" "),n("div",{staticClass:"sco_component_results_heading"},[n("div",[t._v("Amount")]),t._v(" "),n("div",[t._v(t._s(t.dto.payment.amount))])]),t._v(" "),n("div",{staticClass:"sco_component_results_heading"},[n("div",[t._v("Asset")]),t._v(" "),n("div",[t._v(t._s(t.dto.payment.asset.code))])]),t._v(" "),n("div",{staticClass:"sco_component_results_heading"},[n("div",[t._v("Memo")]),t._v(" "),n("div",[t._v(t._s(t.dto.payment.memo))])]),t._v(" "),n("div",{staticClass:"sco_component_results_heading"},[n("div",[t._v("Memo type")]),t._v(" "),n("div",[t._v(t._s(t.dto.payment.memoType))])]),t._v(" "),n("div",{staticClass:"sco_component_results_heading"},[n("div",[t._v("From")]),t._v(" "),n("div",[t._v(t._s(t.dto.payment.from))])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"sco_component_row"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.transactionDetails.transactionXdr,expression:"transactionDetails.transactionXdr"}],ref:"xdrEnvelope",staticClass:"sco_offscreen",attrs:{readonly:""},domProps:{value:t.transactionDetails.transactionXdr},on:{input:function(e){e.target.composing||t.$set(t.transactionDetails,"transactionXdr",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sco_component_qrcode"},[n("div",{staticClass:"sco_component_qrcode_i"},[n("qrcode",{directives:[{name:"show",rawName:"v-show",value:t.transactionDetails.transactionXdr,expression:"transactionDetails.transactionXdr"}],attrs:{value:t.transactionDetails.transactionXdr,options:{size:256}},on:{click:function(e){return e.preventDefault(),t.copyXdrToClipboard(e)}}}),t._v(" "),n("button",{staticClass:"sco_button",on:{click:function(e){return e.preventDefault(),t.copyXdrToClipboard(e)}}},[t._v("Copy Transaction XDR")])],1)])])]),t._v(" "),t.error?n("div",{staticClass:"sco_component_error"},[n("p",[t._v(t._s(t.error))])]):t._e(),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sco_component_row"},[e("h4",[this._v("Use your own wallet:")]),this._v(" "),e("p",[this._v("To complete this transaction, send a payment with the following details:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sco_component_results_heading"},[e("div",[this._v("Transaction XDR")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"sco_spinner"},[e("i",{staticClass:"fas fa-spinner fa-spin"})])}]},Dt=n("VU/8")(Lt,zt,!1,null,null,null).exports,jt={props:{},computed:o()({complete:{get:function(){return this.$store.state.transactionStatus.complete},set:function(t){this.transactionStatusSet({complete:t})}},error:{get:function(){return this.$store.state.transactionStatus.error},set:function(t){this.transactionStatusErrorSet(t)}},paymentOptions:{get:function(){return this.$store.state.paymentOptions},set:function(t){this.paymentOptionsSet(t)}},transactionStatus:{get:function(){return this.$store.state.transactionStatus},set:function(t){this.transactionStatusSet(t)}},transactionStatusError:{get:function(){return this.$store.state.transactionStatus.error},set:function(t){this.transactionStatusErrorSet(t)}}},A({network:"network",paymentOptionsComplete:function(t){return t.paymentOptions.complete},transactionDetails:"transactionDetails",transactionResult:function(t){return t.transactionStatus.result}})),data:function(){return{loaded:!1}},methods:o()({tryAgain:function(){this.paymentOptions={complete:!1}}},C(["paymentOptionsSet","transactionStatusSet","transactionStatusErrorSet"])),watch:{paymentOptionsComplete:function(t){var e=this;t&&(this.error=null,this.loaded=!0,setTimeout(function(t){e.transactionStatus={error:null,status:"ledger"===e.paymentOptions.method?tt.TX_STATUS.ledger_in_progress:tt.TX_STATUS.listening_for_transaction}},400))},transactionResult:function(){var t,e,n=this;this.transactionStatus.success&&(t=this.network,e=this.transactionStatus.result.hash,new window.StellarSdk.Server(t.uri).transactions().transaction(e).call()).then(function(t){n.transactionStatus={transaction:t}})}}},Ut={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.paymentOptionsComplete,expression:"paymentOptionsComplete"}],class:["sco_component","sco_component--transaction_results",{sco_loaded:t.loaded}]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_title"},[t.error?t._e():n("span",{staticClass:"sco_spinner1"},[n("i",{staticClass:"fas fa-spinner fa-spin"})]),t._v(" Transaction Status\n    ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"sco_component_results"},[t.error?t._e():n("div",{staticClass:"sco_component_text"},[t._v("\n        "+t._s(t.transactionStatus.status.title)+"\n        "+t._s(t.transactionStatus.status.desc)+"\n        "),t.transactionStatus.success?n("div",[t._v("\n          hash: "+t._s(t.transactionStatus.result.hash)+"\n        ")]):t._e()]),t._v(" "),t.error?n("div",{staticClass:"sco_component_error"},[n("p",[t._v(t._s(t.error))])]):t._e(),t._v(" "),t.error?n("div",{staticClass:"sco_component_text"},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.tryAgain(e)}}},[t._v("Try again...")])]):t._e()])])])},staticRenderFns:[]},Ft={computed:{url:function(){return"https://"+this.domain+"/"}},data:function(){return{brand:tt.APP.brand,domain:tt.APP.domain,year:(new Date).getFullYear()}}},Kt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["sco_component","sco_component--footer","sco_loaded"]},[n("div",{staticClass:"sco_component_i"},[n("div",{staticClass:"sco_component_results"},[n("div",{staticClass:"sco_component--button_row"},[n("div",{staticClass:"sco_caption"},[t._v("\n            © "+t._s(t.year)+" "),n("a",{attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.brand))])]),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sco_caption"},[e("a",{attrs:{href:"https://github.com/brewaa/stellar-checkout",target:"_blank"}},[this._v("Source Code")]),this._v(" "),e("a",{attrs:{href:"https://github.com/brewaa/stellar-checkout/blob/master/LICENCE",target:"_blank"}},[this._v("License")])])}]},Vt={name:"App",components:{NetworkSelector:N,StellarTicker:U,OrderSummary:V,Federation:yt,Ledger:At,AccountConfirmation:St,TransactionDetails:Bt,PaymentOptions:Pt,PaymentInstructions:Dt,TransactionStatus:n("VU/8")(jt,Ut,!1,null,null,null).exports,Footer:n("VU/8")(Ft,Kt,!1,null,null,null).exports},created:function(){},data:function(){return{ledgerConnected:!1}},methods:{onLedgerConnected:function(t){this.ledgerConnected=!0},onLedgerDisconnected:function(t){this.ledgerConnected=!1}}},Zt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sco stellar_checkout"},[n("NetworkSelector"),t._v(" "),n("StellarTicker"),t._v(" "),n("OrderSummary"),t._v(" "),n("Federation",{attrs:{"ledger-connected":t.ledgerConnected}}),t._v(" "),n("AccountConfirmation",{attrs:{"ledger-connected":t.ledgerConnected}}),t._v(" "),n("TransactionDetails"),t._v(" "),n("PaymentOptions",{attrs:{"ledger-connected":t.ledgerConnected}}),t._v(" "),n("PaymentInstructions"),t._v(" "),n("TransactionStatus"),t._v(" "),n("Ledger",{on:{ledgerconnected:t.onLedgerConnected,ledgerdisconnected:t.onLedgerDisconnected}}),t._v(" "),n("Footer")],1)},staticRenderFns:[]},qt=n("VU/8")(Vt,Zt,!1,null,null,null).exports,Xt=function(){},Yt={},Gt={},Ht=null,Qt={mark:Xt,measure:Xt};try{"undefined"!=typeof window&&(Yt=window),"undefined"!=typeof document&&(Gt=document),"undefined"!=typeof MutationObserver&&(Ht=MutationObserver),"undefined"!=typeof performance&&(Qt=performance)}catch(t){}var Jt=(Yt.navigator||{}).userAgent,Wt=void 0===Jt?"":Jt,$t=Yt,te=Gt,ee=Ht,ne=Qt,re=!!$t.document,oe=!!te.documentElement&&!!te.head&&"function"==typeof te.addEventListener&&"function"==typeof te.createElement,ie=~Wt.indexOf("MSIE")||~Wt.indexOf("Trident/"),ae=16,se="data-fa-i2svg",ce="data-fa-pseudo-element",le="fontawesome-i2svg",ue=function(){try{return!0}catch(t){return!1}}(),fe=[1,2,3,4,5,6,7,8,9,10],de=fe.concat([11,12,13,14,15,16,17,18,19,20]),pe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],he=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter"].concat(fe.map(function(t){return t+"x"})).concat(de.map(function(t){return"w-"+t})),me=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ve=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),ge=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ye=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},be=$t.FontAwesomeConfig||{},_e=Object.keys(be),Ae=ge({familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},be);Ae.autoReplaceSvg||(Ae.observeMutations=!1);var we=ge({},Ae);function Ee(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).asNewDefault,n=void 0!==e&&e,r=Object.keys(we),o=n?function(t){return~r.indexOf(t)&&!~_e.indexOf(t)}:function(t){return~r.indexOf(t)};Object.keys(t).forEach(function(e){o(e)&&(we[e]=t[e])})}$t.FontAwesomeConfig=we;var Ce=$t||{};Ce.___FONT_AWESOME___||(Ce.___FONT_AWESOME___={}),Ce.___FONT_AWESOME___.styles||(Ce.___FONT_AWESOME___.styles={}),Ce.___FONT_AWESOME___.hooks||(Ce.___FONT_AWESOME___.hooks={}),Ce.___FONT_AWESOME___.shims||(Ce.___FONT_AWESOME___.shims=[]);var xe=Ce.___FONT_AWESOME___,ke=[],Se=!1;oe&&((Se=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState))||te.addEventListener("DOMContentLoaded",function t(){te.removeEventListener("DOMContentLoaded",t),Se=1,ke.map(function(t){return t()})}));var Oe=function(t){oe&&(Se?setTimeout(t,0):ke.push(t))},Te=ae,Be={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ne(t){if(t&&oe){var e=te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=te.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return te.head.insertBefore(e,r),t}}var Ie=0;function Re(){return++Ie}function Me(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Pe(t){return t.classList?Me(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Le(t,e){var n,r=e.split("-"),o=r[0],i=r.slice(1).join("-");return o!==t||""===i||(n=i,~he.indexOf(n))?null:i}function ze(t){return(""+t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function De(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+": ")+t[n]+";"},"")}function je(t){return t.size!==Be.size||t.x!==Be.x||t.y!==Be.y||t.rotate!==Be.rotate||t.flipX||t.flipY}function Ue(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth;return{outer:{transform:"translate("+n/2+" 256)"},inner:{transform:"translate("+32*e.x+", "+32*e.y+") "+" "+("scale("+e.size/16*(e.flipX?-1:1)+", "+e.size/16*(e.flipY?-1:1)+") ")+" "+("rotate("+e.rotate+" 0 0)")},path:{transform:"translate("+r/2*-1+" -256)"}}}var Fe={x:0,y:0,width:"100%",height:"100%"},Ke=function(t){var e=t.children,n=t.attributes,r=t.main,o=t.mask,i=t.transform,a=r.width,s=r.icon,c=o.width,l=o.icon,u=Ue({transform:i,containerWidth:c,iconWidth:a}),f={tag:"rect",attributes:ge({},Fe,{fill:"white"})},d={tag:"g",attributes:ge({},u.inner),children:[{tag:"path",attributes:ge({},s.attributes,u.path,{fill:"black"})}]},p={tag:"g",attributes:ge({},u.outer),children:[d]},h="mask-"+Re(),m="clip-"+Re(),v={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:[l]},{tag:"mask",attributes:ge({},Fe,{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,p]}]};return e.push(v,{tag:"rect",attributes:ge({fill:"currentColor","clip-path":"url(#"+m+")",mask:"url(#"+h+")"},Fe)}),{children:e,attributes:n}},Ve=function(t){var e=t.children,n=t.attributes,r=t.main,o=t.transform,i=De(t.styles);if(i.length>0&&(n.style=i),je(o)){var a=Ue({transform:o,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:ge({},a.outer),children:[{tag:"g",attributes:ge({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:ge({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}},Ze=function(t){var e=t.children,n=t.main,r=t.mask,o=t.attributes,i=t.styles,a=t.transform;if(je(a)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};o.style=De(ge({},i,{"transform-origin":s.x+a.x/16+"em "+(s.y+a.y/16)+"em"}))}return[{tag:"svg",attributes:o,children:e}]},qe=function(t){var e=t.prefix,n=t.iconName,r=t.children,o=t.attributes,i=t.symbol,a=!0===i?e+"-"+we.familyPrefix+"-"+n:i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ge({},o,{id:a}),children:r}]}]};function Xe(t){var e=t.icons,n=e.main,r=e.mask,o=t.prefix,i=t.iconName,a=t.transform,s=t.symbol,c=t.title,l=t.extra,u=t.watchable,f=void 0!==u&&u,d=r.found?r:n,p=d.width,h=d.height,m="fa-w-"+Math.ceil(p/h*16),v=[we.replacementClass,i?we.familyPrefix+"-"+i:"",m].concat(l.classes).join(" "),g={children:[],attributes:ge({},l.attributes,{"data-prefix":o,"data-icon":i,class:v,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+p+" "+h})};f&&(g.attributes[se]=""),c&&g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-"+Re()},children:[c]});var y=ge({},g,{prefix:o,iconName:i,main:n,mask:r,transform:a,symbol:s,styles:l.styles}),b=r.found&&n.found?Ke(y):Ve(y),_=b.children,A=b.attributes;return y.children=_,y.attributes=A,s?qe(y):Ze(y)}function Ye(t){var e=t.content,n=t.width,r=t.height,o=t.transform,i=t.title,a=t.extra,s=t.watchable,c=void 0!==s&&s,l=ge({},a.attributes,i?{title:i}:{},{class:a.classes.join(" ")});c&&(l[se]="");var u=ge({},a.styles);je(o)&&(u.transform=function(t){var e=t.transform,n=t.width,r=void 0===n?ae:n,o=t.height,i=void 0===o?ae:o,a=t.startCentered,s=void 0!==a&&a,c="";return c+=s&&ie?"translate("+(e.x/Te-r/2)+"em, "+(e.y/Te-i/2)+"em) ":s?"translate(calc(-50% + "+e.x/Te+"em), calc(-50% + "+e.y/Te+"em)) ":"translate("+e.x/Te+"em, "+e.y/Te+"em) ",c+="scale("+e.size/Te*(e.flipX?-1:1)+", "+e.size/Te*(e.flipY?-1:1)+") ",c+="rotate("+e.rotate+"deg) "}({transform:o,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=De(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}var Ge=function(){},He=we.measurePerformance&&ne&&ne.mark&&ne.measure?ne:{mark:Ge,measure:Ge},Qe='FA "5.0.13"',Je=function(t){He.mark(Qe+" "+t+" ends"),He.measure(Qe+" "+t,Qe+" "+t+" begins",Qe+" "+t+" ends")},We={begin:function(t){return He.mark(Qe+" "+t+" begins"),function(){return Je(t)}},end:Je},$e=function(t,e,n,r){var o,i,a,s=Object.keys(t),c=s.length,l=void 0!==r?function(t,e){return function(n,r,o,i){return t.call(e,n,r,o,i)}}(e,r):e;for(void 0===n?(o=1,a=t[s[0]]):(o=0,a=n);o<c;o++)a=l(a,t[i=s[o]],i,t);return a},tn=xe.styles,en=xe.shims,nn={},rn={},on={},an=function(){var t=function(t){return $e(tn,function(e,n,r){return e[r]=$e(n,t,{}),e},{})};nn=t(function(t,e,n){return t[e[3]]=n,t}),rn=t(function(t,e,n){var r=e[2];return t[n]=n,r.forEach(function(e){t[e]=n}),t});var e="far"in tn;on=$e(en,function(t,n){var r=n[0],o=n[1],i=n[2];return"far"!==o||e||(o="fas"),t[r]={prefix:o,iconName:i},t},{})};an();var sn=xe.styles,cn=function(){return{prefix:null,iconName:null,rest:[]}};function ln(t){return t.reduce(function(t,e){var n=Le(we.familyPrefix,e);if(sn[e])t.prefix=e;else if(n){var r="fa"===t.prefix?on[n]||{prefix:null,iconName:null}:{};t.iconName=r.iconName||n,t.prefix=r.prefix||t.prefix}else e!==we.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},cn())}function un(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function fn(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,o=t.children,i=void 0===o?[]:o;return"string"==typeof t?ze(t):"<"+e+" "+function(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+'="')+ze(t[n])+'" '},"").trim()}(r)+">"+i.map(fn).join("")+"</"+e+">"}var dn=function(){};function pn(t){return"string"==typeof(t.getAttribute?t.getAttribute(se):null)}var hn={replace:function(t){var e=t[0],n=t[1].map(function(t){return fn(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(we.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- "+e.outerHTML+" --\x3e":"");else if(e.parentNode){var r=document.createElement("span");e.parentNode.replaceChild(r,e),r.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~Pe(e).indexOf(we.replacementClass))return hn.replace(t);var r=new RegExp(we.familyPrefix+"-.*");delete n[0].attributes.style;var o=n[0].attributes.class.split(" ").reduce(function(t,e){return e===we.replacementClass||e.match(r)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" ");var i=n.map(function(t){return fn(t)}).join("\n");e.setAttribute("class",o.toNode.join(" ")),e.setAttribute(se,""),e.innerHTML=i}};function mn(t,e){var n="function"==typeof e?e:dn;0===t.length?n():($t.requestAnimationFrame||function(t){return t()})(function(){var e=!0===we.autoReplaceSvg?hn.replace:hn[we.autoReplaceSvg]||hn.replace,r=We.begin("mutate");t.map(e),r(),n()})}var vn=!1;var gn=null;var yn=function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),r=n[0],o=n.slice(1);return r&&o.length>0&&(t[r]=o.join(":").trim()),t},{})),n};var bn=function(t){var e,n,r=t.getAttribute("data-prefix"),o=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",a=ln(Pe(t));return r&&o&&(a.prefix=r,a.iconName=o),a.prefix&&i.length>1?a.iconName=(e=a.prefix,n=t.innerText,rn[e][n]):a.prefix&&1===i.length&&(a.iconName=function(t,e){return nn[t][e]}(a.prefix,function(t){for(var e="",n=0;n<t.length;n++)e+=("000"+t.charCodeAt(n).toString(16)).slice(-4);return e}(t.innerText))),a},_n=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),r=n[0],o=n.slice(1).join("-");if(r&&"h"===o)return t.flipX=!0,t;if(r&&"v"===o)return t.flipY=!0,t;if(o=parseFloat(o),isNaN(o))return t;switch(r){case"grow":t.size=t.size+o;break;case"shrink":t.size=t.size-o;break;case"left":t.x=t.x-o;break;case"right":t.x=t.x+o;break;case"up":t.y=t.y-o;break;case"down":t.y=t.y+o;break;case"rotate":t.rotate=t.rotate+o}return t},e):e},An=function(t){return _n(t.getAttribute("data-fa-transform"))},wn=function(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)},En=function(t){var e=Me(t.attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),n=t.getAttribute("title");return we.autoA11y&&(n?e["aria-labelledby"]=we.replacementClass+"-title-"+Re():e["aria-hidden"]="true"),e},Cn=function(t){var e=t.getAttribute("data-fa-mask");return e?ln(e.split(" ").map(function(t){return t.trim()})):cn()};function xn(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}xn.prototype=Object.create(Error.prototype),xn.prototype.constructor=xn;var kn={fill:"currentColor"},Sn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},On={tag:"path",attributes:ge({},kn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Tn=ge({},Sn,{attributeName:"opacity"}),Bn={tag:"g",children:[On,{tag:"circle",attributes:ge({},kn,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:ge({},Sn,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ge({},Tn,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:ge({},kn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:ge({},Tn,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:ge({},kn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ge({},Tn,{values:"0;0;1;1;0;0;"})}]}]},Nn=xe.styles,In="fa-layers-text",Rn=/Font Awesome 5 (Solid|Regular|Light|Brands)/,Mn={Solid:"fas",Regular:"far",Light:"fal",Brands:"fab"};function Pn(t,e){var n={found:!1,width:512,height:512,icon:Bn};if(t&&e&&Nn[e]&&Nn[e][t]){var r=Nn[e][t];n={found:!0,width:r[0],height:r[1],icon:{tag:"path",attributes:{fill:"currentColor",d:r.slice(4)[0]}}}}else if(t&&e&&!we.showMissingIcons)throw new xn("Icon is missing for prefix "+e+" with icon name "+t);return n}function Ln(t){var e=function(t){var e=bn(t),n=e.iconName,r=e.prefix,o=e.rest,i=yn(t),a=An(t),s=wn(t),c=En(t),l=Cn(t);return{iconName:n,title:t.getAttribute("title"),prefix:r,transform:a,symbol:s,mask:l,extra:{classes:o,styles:i,attributes:c}}}(t);return~e.extra.classes.indexOf(In)?function(t,e){var n=e.title,r=e.transform,o=e.extra,i=null,a=null;if(ie){var s=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();i=c.width/s,a=c.height/s}return we.autoA11y&&!n&&(o.attributes["aria-hidden"]="true"),[t,Ye({content:t.innerHTML,width:i,height:a,transform:r,title:n,extra:o,watchable:!0})]}(t,e):function(t,e){var n=e.iconName,r=e.title,o=e.prefix,i=e.transform,a=e.symbol,s=e.mask,c=e.extra;return[t,Xe({icons:{main:Pn(n,o),mask:Pn(s.iconName,s.prefix)},prefix:o,iconName:n,transform:i,symbol:a,mask:s,title:r,extra:c,watchable:!0})]}(t,e)}function zn(t){"function"==typeof t.remove?t.remove():t&&t.parentNode&&t.parentNode.removeChild(t)}function Dn(t){if(oe){var e=We.begin("searchPseudoElements");vn=!0,function(){Me(t.querySelectorAll("*")).forEach(function(t){[":before",":after"].forEach(function(e){var n=$t.getComputedStyle(t,e),r=n.getPropertyValue("font-family").match(Rn),o=Me(t.children).filter(function(t){return t.getAttribute(ce)===e})[0];if(o&&(o.nextSibling&&o.nextSibling.textContent.indexOf(ce)>-1&&zn(o.nextSibling),zn(o),o=null),r&&!o){var i=n.getPropertyValue("content"),a=te.createElement("i");a.setAttribute("class",""+Mn[r[1]]),a.setAttribute(ce,e),a.innerText=3===i.length?i.substr(1,1):i,":before"===e?t.insertBefore(a,t.firstChild):t.appendChild(a)}})})}(),vn=!1,e()}}function jn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(oe){var n=te.documentElement.classList,r=function(t){return n.add(le+"-"+t)},o=function(t){return n.remove(le+"-"+t)},i=Object.keys(Nn),a=["."+In+":not(["+se+"])"].concat(i.map(function(t){return"."+t+":not(["+se+"])"})).join(", ");if(0!==a.length){var s=Me(t.querySelectorAll(a));if(s.length>0){r("pending"),o("complete");var c=We.begin("onTree"),l=s.reduce(function(t,e){try{var n=Ln(e);n&&t.push(n)}catch(t){ue||t instanceof xn&&console.error(t)}return t},[]);c(),mn(l,function(){r("active"),r("complete"),o("pending"),"function"==typeof e&&e()})}}}}function Un(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Ln(t);n&&mn([n],e)}var Fn=function(){var t="svg-inline--fa",e=we.familyPrefix,n=we.replacementClass,r='svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n';if("fa"!==e||n!==t){var o=new RegExp("\\.fa\\-","g"),i=new RegExp("\\."+t,"g");r=r.replace(o,"."+e+"-").replace(i,"."+n)}return r};function Kn(t){return{found:!0,width:t[0],height:t[1],icon:{tag:"path",attributes:{fill:"currentColor",d:t.slice(4)[0]}}}}var Vn=!1;function Zn(){we.autoAddCss&&(Vn||Ne(Fn()),Vn=!0)}function qn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(t){return fn(t)})}}),Object.defineProperty(t,"node",{get:function(){if(oe){var e=te.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function Xn(t){var e=t.prefix,n=void 0===e?"fa":e,r=t.iconName;if(r)return un(Gn.definitions,n,r)||un(xe.styles,n,r)}var Yn,Gn=new(function(){function t(){me(this,t),this.definitions={}}return ve(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(e){t.definitions[e]=ge({},t.definitions[e]||{},o[e]),function t(e,n){var r=Object.keys(n).reduce(function(t,e){var r=n[e];return r.icon?t[r.iconName]=r.icon:t[e]=r,t},{});"function"==typeof xe.hooks.addPack?xe.hooks.addPack(e,r):xe.styles[e]=ge({},xe.styles[e]||{},r),"fas"===e&&t("fa",n)}(e,o[e])})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(e){var r=n[e],o=r.prefix,i=r.iconName,a=r.icon;t[o]||(t[o]={}),t[o][i]=a}),t}}]),t}()),Hn=(Yn=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?Be:n,o=e.symbol,i=void 0!==o&&o,a=e.mask,s=void 0===a?null:a,c=e.title,l=void 0===c?null:c,u=e.classes,f=void 0===u?[]:u,d=e.attributes,p=void 0===d?{}:d,h=e.styles,m=void 0===h?{}:h;if(t){var v=t.prefix,g=t.iconName,y=t.icon;return qn(ge({type:"icon"},t),function(){return Zn(),we.autoA11y&&(l?p["aria-labelledby"]=we.replacementClass+"-title-"+Re():p["aria-hidden"]="true"),Xe({icons:{main:Kn(y),mask:s?Kn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:g,transform:ge({},Be,r),symbol:i,title:l,extra:{attributes:p,styles:m,classes:f}})})}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:Xn(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Xn(r||{})),Yn(n,ge({},e,{mask:r}))}),Qn={noAuto:function(){var t;Ee({autoReplaceSvg:t=!1,observeMutations:t}),gn&&gn.disconnect()},dom:{i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(oe){Zn();var e=t.node,n=void 0===e?te:e,r=t.callback,o=void 0===r?function(){}:r;we.searchPseudoElements&&Dn(n),jn(n,o)}},css:Fn,insertCss:function(){Ne(Fn())}},library:Gn,parse:{transform:function(t){return _n(t)}},findIconDefinition:Xn,icon:Hn,text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?Be:n,o=e.title,i=void 0===o?null:o,a=e.classes,s=void 0===a?[]:a,c=e.attributes,l=void 0===c?{}:c,u=e.styles,f=void 0===u?{}:u;return qn({type:"text",content:t},function(){return Zn(),Ye({content:t,transform:ge({},Be,r),title:i,extra:{attributes:l,styles:f,classes:[we.familyPrefix+"-layers-text"].concat(ye(s))}})})},layer:function(t){return qn({type:"layer"},function(){Zn();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{class:we.familyPrefix+"-layers"},children:e}]})}},Jn=function(){oe&&we.autoReplaceSvg&&Qn.dom.i2svg({node:te})};Object.defineProperty(Qn,"config",{get:function(){return we},set:function(t){Ee(t)}}),oe&&function(t){try{t()}catch(t){if(!ue)throw t}}(function(){re&&($t.FontAwesome||($t.FontAwesome=Qn),Oe(function(){Object.keys(xe.styles).length>0&&Jn(),we.observeMutations&&"function"==typeof MutationObserver&&function(t){if(ee){var e=t.treeCallback,n=t.nodeCallback,r=t.pseudoElementsCallback;gn=new ee(function(t){vn||Me(t).forEach(function(t){if("childList"===t.type&&t.addedNodes.length>0&&!pn(t.addedNodes[0])&&(we.searchPseudoElements&&r(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&we.searchPseudoElements&&r(t.target.parentNode),"attributes"===t.type&&pn(t.target)&&~pe.indexOf(t.attributeName))if("class"===t.attributeName){var o=ln(Pe(t.target)),i=o.prefix,a=o.iconName;i&&t.target.setAttribute("data-prefix",i),a&&t.target.setAttribute("data-icon",a)}else n(t.target)})}),oe&&gn.observe(te.getElementsByTagName("body")[0],{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}({treeCallback:jn,nodeCallback:Un,pseudoElementsCallback:Dn})})),xe.hooks=ge({},xe.hooks,{addPack:function(t,e){xe.styles[t]=ge({},xe.styles[t]||{},e),an(),Jn()},addShims:function(t){var e;(e=xe.shims).push.apply(e,ye(t)),an(),Jn()}})});Qn.config;var Wn=Qn,$n=n("U0v6"),tr=n.n($n);Wn.library.add(n("4ie+"),n("mZf6"));n("KF4J");var er,nr=n("bOdI"),rr=n.n(nr),or=n("7+uW");function ir(t){var e,n,r,o,i=t["price_"+tt.SETTINGS.currency.toLowerCase()],a="1XLM = "+Nt(L(i),",","")+tt.SETTINGS.currency,s=function(t,e){return t/e}(tt.DTO.invoice.total,i),c=Nt(L(s),",","");return tt.DTO.meta.currencyConversionDescription=a,tt.DTO.meta.invoicePriceInLumens=s,tt.DTO.meta.invoicePriceInLumensFormatted=c,tt.DTO.meta.invoiceTotalFormatted=(e=tt.DTO.invoice.total,n=n||R,r=r||I,new Intl.NumberFormat(n,{currency:r,style:"currency",minimumFractionDigits:2,maximumFractionDigits:2}).format(e)+(o?" "+r:"")),tt.DTO.meta.lumenPrice=i,tt.DTO.payment.amount=L(s),tt.DTO}function ar(){return(t=tt.TICKERS.stellar.url,e=tt.SETTINGS.currency.toLowerCase().replace("usd",""),window.StellarSdk.axios.get(t,{params:{currency:e}})).then(function(t){var e=t.data;return e.length>0&&(tt.TICKERS.stellar.data=e[0],tt.TICKERS.stellar.updated=new Date(Date.now()),ir(e[0])),t.data});var t,e}or.a.use(O);var sr={accountConfirmation:{account:null,complete:!1,error:null},cultures:lt,currencies:tt.CURRENCIES,dto:tt.DTO,federation:{complete:!1,error:null,ledgerAppVersion:null,ledgerBip32Path:"44'/148'/0'",ledgerConfirmed:!1,ledgerError:null,ledgerVerified:!1,publicKey:null,stellarAddress:null},options:tt.OPTIONS,network:tt.NETWORK,paymentOptions:{complete:!1,error:null,method:null},settings:tt.SETTINGS,ticker:{stellar:tt.TICKERS.stellar},transactionDetails:{complete:!1,error:null,transaction:null,transactionHash:null,transactionXdr:null},transactionStatus:{complete:!1,error:null,result:null,status:tt.TX_STATUS.empty,success:!1}},cr=(er={},rr()(er,"ACCOUNT_CONFIRMATION_CLEAR",function(t,e){t.accountConfirmation.account=null,t.accountConfirmation.complete=!1,t.accountConfirmation.error=null,t.transactionDetails.complete=!1,t.paymentOptions.complete=!1}),rr()(er,"ACCOUNT_CONFIRMATION_SET",function(t,e){st()(t.accountConfirmation,e),t.accountConfirmation.complete||(t.transactionDetails.complete=!1,t.paymentOptions.complete=!1)}),rr()(er,"ACCOUNT_CONFIRMATION_ERROR",function(t,e){t.accountConfirmation.error=e}),rr()(er,"CULTURE_SET",function(t,e){t.settings.culture=e}),rr()(er,"CURRENCY_SET",function(t,e){t.settings.currency=e}),rr()(er,"DTO_SET",function(t,e){st()(t.dto,e)}),rr()(er,"DTO_ERROR",function(t,e){t.dto.error=e}),rr()(er,"FEDERATION_SET",function(t,e){st()(t.federation,e),t.federation.complete=!e.error&&t.federation.complete,t.federation.error,t.dto.payment.from=t.federation.publicKey,t.federation.complete||(t.accountConfirmation.complete=!1,t.transactionDetails.complete=!1,t.paymentOptions.complete=!1)}),rr()(er,"FEDERATION_ERROR_SET",function(t,e){t.federation.error=e}),rr()(er,"LEDGER_ERROR",function(t,e){t.federation.ledgerError=e}),rr()(er,"PAYMENT_OPTIONS_SET",function(t,e){st()(t.paymentOptions,e)}),rr()(er,"PAYMENT_OPTIONS_ERROR",function(t,e){t.paymentOptions.error=e}),rr()(er,"NETWORK_SET",function(t,e){var n=mt(e);t.network=n}),rr()(er,"TICKER_STELLAR_UPDATE",function(t,e){t.ticker.stellar.data=e,t.ticker.stellar.updated=new Date(Date.now())}),rr()(er,"TRANSACTION_DETAILS_SET",function(t,e){st()(t.transactionDetails,e)}),rr()(er,"TRANSACTION_DETAILS_ERROR_SET",function(t,e){t.transactionDetails.error=e}),rr()(er,"TRANSACTION_STATUS_SET",function(t,e){st()(t.transactionStatus,e)}),rr()(er,"TRANSACTION_STATUS_ERROR_SET",function(t,e){t.transactionStatus.error=e}),er),lr={accountConfirmationClear:function(t,e){(0,t.commit)("ACCOUNT_CONFIRMATION_CLEAR",e)},accountConfirmationError:function(t,e){(0,t.commit)("ACCOUNT_CONFIRMATION_ERROR",e)},accountConfirmationSet:function(t,e){(0,t.commit)("ACCOUNT_CONFIRMATION_SET",e)},accountLoad:function(t,e){var n,r,o=t.commit;return(n=sr.network,r=e,new window.StellarSdk.Server(n.uri).loadAccount(r).catch(window.StellarSdk.NotFoundError,function(t){throw new Error("The destination account does not exist!",t)})).then(function(t){return o("ACCOUNT_CONFIRMATION_SET",{account:t}),t})},cultureSet:function(t,e){(0,t.commit)("CULTURE_SET",e)},currencySet:function(t,e){(0,t.commit)("CURRENCY_SET",e)},dtoSet:function(t,e){(0,t.commit)("DTO_SET",e)},dtoError:function(t,e){(0,t.commit)("DTO_ERROR",e)},federationSet:function(t,e){(0,t.commit)("FEDERATION_SET",e)},federationErrorSet:function(t,e){(0,t.commit)("FEDERATION_ERROR_SET",e)},ledgerErrorSet:function(t,e){(0,t.commit)("LEDGER_ERROR",e)},paymentOptionsSet:function(t,e){(0,t.commit)("PAYMENT_OPTIONS_SET",e)},paymentOptionsError:function(t,e){(0,t.commit)("PAYMENT_OPTIONS_ERROR",e)},networkSet:function(t,e){(0,t.commit)("NETWORK_SET",e)},updateStellarTicker:function(t,e){var n=t.commit;e?n("TICKER_STELLAR_UPDATE",e):ar().then(function(t){return t[0]}).then(function(t){return n("TICKER_STELLAR_UPDATE",t)})},transactionDetailsSet:function(t,e){(0,t.commit)("TRANSACTION_DETAILS_SET",e)},transactionDetailsErrorSet:function(t,e){(0,t.commit)("TRANSACTION_DETAILS_ERROR_SET",e)},transactionStatusSet:function(t,e){(0,t.commit)("TRANSACTION_STATUS_SET",e)},transactionStatusErrorSet:function(t,e){(0,t.commit)("TRANSACTION_STATUS_ERROR_SET",e)}},ur=new O.Store({state:sr,mutations:cr,actions:lr,getters:{culture:function(t){return t.settings.culture},currency:function(t){return t.settings.currency},network:function(t){return t.network},stellarTicker:function(t){return t.ticker.stellar}}});function fr(t){return function(e){return new q.a(function(n,r){var o=document.createElement(t),i="body",a="src";switch(o.onload=function(){n(e)},o.onerror=function(t){r(new Error("could not load url: "+e),t)},t){case"script":o.async=!0,i="head";break;case"link":o.type="text/css",o.rel="stylesheet",a="href",i="head"}o[a]=e,document[i].appendChild(o)})}}var dr={Css:fr("link"),Js:fr("script"),Img:fr("img")};function pr(t){return dr.Js(tt.STELLAR_SDK_URL).then((e=t.stylesheet,new q.a(function(t,n){if(e&&"string"!=typeof e&&n(new Error(tt.APP.name+": [stylesheet] must be a string;")),e)return new dr.Css(e);t(!0)}))).then(function(){return q.a.all([function(t){return new q.a(function(e,n){var r=t.selector;document.querySelector(r)?e(t):n(new Error(tt.APP.name+": [selector] not found;"))})}(t),function(t){var e=t.currency||"";return new q.a(function(n,r){""!==e&&"string"==typeof e&&-1!==tt.CURRENCIES.indexOf(e)||(console.log(tt.APP.name+" [currency] not supported. allowed currencies: "+tt.CURRENCIES.join(", ")),t.currency=tt.SETTINGS.currency),n(t)})}(t),(o=t.to,new q.a(function(t,e){window.StellarSdk.StrKey.isValidEd25519PublicKey(o)||e(new Error(tt.APP.name+": [to] is not a valid destination public key;")),t(!0)})),function(t){var e=t.lang||"",n=tt.APP.name+": [lang] not supported. falling back to 'en'. allowed cultures: "+lt.join(", ")+";";return new q.a(function(r,o){var i=lt.map(function(t){return t.toLowerCase()});"string"==typeof e&&e.length>0&&-1===i.indexOf(e.toLowerCase())&&(console.log(n),t.lang=tt.SETTINGS.culture),r(!0)})}(t),(r=t.memo,new q.a(function(t,e){r&&"string"!=typeof r&&e(new Error(tt.APP.name+": [memo] field must be a string;")),t(!0)})),(n=t.onSubmit,new q.a(function(t,e){n&&"function"!=typeof n&&e(new Error(tt.APP.name+": [onSubmit] must be a function;")),t(!0)})),(e=t.total,new q.a(function(t,n){e||n(new Error(tt.APP.name+": [total] is required;")),isNaN(e)&&n(new Error(tt.APP.name+": [total] must be numeric;")),e<=0&&n(new Error(tt.APP.name+": [total] must be greater than zero;")),t(!0)}))]);var e,n,r,o});var e}var hr=n("8Vd+");e.default={name:tt.APP.name,ui:{render:function(t,e){document.addEventListener("DOMContentLoaded",function(){var n=st()(tt.OPTIONS,e);n.selector=t,pr(n).then(function(t){var e=window.StellarSdk.axios;or.a.config.productionTip=!1,or.a.component("icon",tr.a),or.a.component(hr.a.name,hr.a),or.a.prototype.$http=e;var r=mt(n.network);tt.NETWORK.name=r.name,tt.NETWORK.network=r.network,tt.NETWORK.uri=r.uri;var i=n.currency;tt.SETTINGS.currency=i,tt.SETTINGS.culture=n.lang,tt.DTO.invoice.id=n.id,tt.DTO.invoice.currency=i,tt.DTO.invoice.total=n.total,tt.DTO.payment.asset=window.StellarSdk.Asset.native(),tt.DTO.payment.fee=1e-5,tt.DTO.payment.memo=n.memo||function(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0,o=isNaN(t)?8:t;r<o;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}(28),tt.DTO.payment.memoType=window.StellarSdk.MemoHash,tt.DTO.payment.to=n.to;var a=new or.a(o()({store:ur},qt));return ut.init(n.lang).then(ar()).then(function(t){a.$mount(n.selector)})})})}}}},"NWt+":function(t,e,n){var r=n("+ZMJ"),o=n("msXi"),i=n("Mhyx"),a=n("77Pl"),s=n("QRG4"),c=n("3fs2"),l={},u={};(e=t.exports=function(t,e,n,f,d){var p,h,m,v,g=d?function(){return t}:c(t),y=r(n,f,e?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(p=s(t.length);p>b;b++)if((v=e?y(a(h=t[b])[0],h[1]):y(t[b]))===l||v===u)return v}else for(m=g.call(t);!(h=m.next()).done;)if((v=o(m,y,h.value,e))===l||v===u)return v}).BREAK=l,e.RETURN=u},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var r=n("EqjI"),o=n("7KvD").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},OYls:function(t,e,n){n("crlp")("asyncIterator")},OvRC:function(t,e,n){t.exports={default:n("oM7Q"),__esModule:!0}},Pf15:function(t,e,n){"use strict";e.__esModule=!0;var r=a(n("kiBT")),o=a(n("OvRC")),i=a(n("pFYg"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},PzxK:function(t,e,n){var r=n("D2L2"),o=n("sB3e"),i=n("ax3d")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},QLxU:function(t,e,n){!function(t){"use strict";var e=function(t){var e,n=new Float64Array(16);if(t)for(e=0;e<t.length;e++)n[e]=t[e];return n},r=function(){throw new Error("no PRNG")},o=new Uint8Array(16),i=new Uint8Array(32);i[0]=9;var a=e(),s=e([1]),c=e([56129,1]),l=e([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),u=e([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),f=e([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),d=e([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=e([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function h(t,e,n,r){t[e]=n>>24&255,t[e+1]=n>>16&255,t[e+2]=n>>8&255,t[e+3]=255&n,t[e+4]=r>>24&255,t[e+5]=r>>16&255,t[e+6]=r>>8&255,t[e+7]=255&r}function m(t,e,n,r,o){var i,a=0;for(i=0;i<o;i++)a|=t[e+i]^n[r+i];return(1&a-1>>>8)-1}function v(t,e,n,r){return m(t,e,n,r,16)}function g(t,e,n,r){return m(t,e,n,r,32)}function y(t,e,n,r){!function(t,e,n,r){for(var o,i=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,l=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,f=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,d=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,h=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,m=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,v=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,y=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,b=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,A=i,w=a,E=s,C=c,x=l,k=u,S=f,O=d,T=p,B=h,N=m,I=v,R=g,M=y,P=b,L=_,z=0;z<20;z+=2)A^=(o=(R^=(o=(T^=(o=(x^=(o=A+R|0)<<7|o>>>25)+A|0)<<9|o>>>23)+x|0)<<13|o>>>19)+T|0)<<18|o>>>14,k^=(o=(w^=(o=(M^=(o=(B^=(o=k+w|0)<<7|o>>>25)+k|0)<<9|o>>>23)+B|0)<<13|o>>>19)+M|0)<<18|o>>>14,N^=(o=(S^=(o=(E^=(o=(P^=(o=N+S|0)<<7|o>>>25)+N|0)<<9|o>>>23)+P|0)<<13|o>>>19)+E|0)<<18|o>>>14,L^=(o=(I^=(o=(O^=(o=(C^=(o=L+I|0)<<7|o>>>25)+L|0)<<9|o>>>23)+C|0)<<13|o>>>19)+O|0)<<18|o>>>14,A^=(o=(C^=(o=(E^=(o=(w^=(o=A+C|0)<<7|o>>>25)+A|0)<<9|o>>>23)+w|0)<<13|o>>>19)+E|0)<<18|o>>>14,k^=(o=(x^=(o=(O^=(o=(S^=(o=k+x|0)<<7|o>>>25)+k|0)<<9|o>>>23)+S|0)<<13|o>>>19)+O|0)<<18|o>>>14,N^=(o=(B^=(o=(T^=(o=(I^=(o=N+B|0)<<7|o>>>25)+N|0)<<9|o>>>23)+I|0)<<13|o>>>19)+T|0)<<18|o>>>14,L^=(o=(P^=(o=(M^=(o=(R^=(o=L+P|0)<<7|o>>>25)+L|0)<<9|o>>>23)+R|0)<<13|o>>>19)+M|0)<<18|o>>>14;A=A+i|0,w=w+a|0,E=E+s|0,C=C+c|0,x=x+l|0,k=k+u|0,S=S+f|0,O=O+d|0,T=T+p|0,B=B+h|0,N=N+m|0,I=I+v|0,R=R+g|0,M=M+y|0,P=P+b|0,L=L+_|0,t[0]=A>>>0&255,t[1]=A>>>8&255,t[2]=A>>>16&255,t[3]=A>>>24&255,t[4]=w>>>0&255,t[5]=w>>>8&255,t[6]=w>>>16&255,t[7]=w>>>24&255,t[8]=E>>>0&255,t[9]=E>>>8&255,t[10]=E>>>16&255,t[11]=E>>>24&255,t[12]=C>>>0&255,t[13]=C>>>8&255,t[14]=C>>>16&255,t[15]=C>>>24&255,t[16]=x>>>0&255,t[17]=x>>>8&255,t[18]=x>>>16&255,t[19]=x>>>24&255,t[20]=k>>>0&255,t[21]=k>>>8&255,t[22]=k>>>16&255,t[23]=k>>>24&255,t[24]=S>>>0&255,t[25]=S>>>8&255,t[26]=S>>>16&255,t[27]=S>>>24&255,t[28]=O>>>0&255,t[29]=O>>>8&255,t[30]=O>>>16&255,t[31]=O>>>24&255,t[32]=T>>>0&255,t[33]=T>>>8&255,t[34]=T>>>16&255,t[35]=T>>>24&255,t[36]=B>>>0&255,t[37]=B>>>8&255,t[38]=B>>>16&255,t[39]=B>>>24&255,t[40]=N>>>0&255,t[41]=N>>>8&255,t[42]=N>>>16&255,t[43]=N>>>24&255,t[44]=I>>>0&255,t[45]=I>>>8&255,t[46]=I>>>16&255,t[47]=I>>>24&255,t[48]=R>>>0&255,t[49]=R>>>8&255,t[50]=R>>>16&255,t[51]=R>>>24&255,t[52]=M>>>0&255,t[53]=M>>>8&255,t[54]=M>>>16&255,t[55]=M>>>24&255,t[56]=P>>>0&255,t[57]=P>>>8&255,t[58]=P>>>16&255,t[59]=P>>>24&255,t[60]=L>>>0&255,t[61]=L>>>8&255,t[62]=L>>>16&255,t[63]=L>>>24&255}(t,e,n,r)}function b(t,e,n,r){!function(t,e,n,r){for(var o,i=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,l=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,f=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,d=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,h=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,m=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,v=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,y=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,b=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,A=0;A<20;A+=2)i^=(o=(g^=(o=(p^=(o=(l^=(o=i+g|0)<<7|o>>>25)+i|0)<<9|o>>>23)+l|0)<<13|o>>>19)+p|0)<<18|o>>>14,u^=(o=(a^=(o=(y^=(o=(h^=(o=u+a|0)<<7|o>>>25)+u|0)<<9|o>>>23)+h|0)<<13|o>>>19)+y|0)<<18|o>>>14,m^=(o=(f^=(o=(s^=(o=(b^=(o=m+f|0)<<7|o>>>25)+m|0)<<9|o>>>23)+b|0)<<13|o>>>19)+s|0)<<18|o>>>14,_^=(o=(v^=(o=(d^=(o=(c^=(o=_+v|0)<<7|o>>>25)+_|0)<<9|o>>>23)+c|0)<<13|o>>>19)+d|0)<<18|o>>>14,i^=(o=(c^=(o=(s^=(o=(a^=(o=i+c|0)<<7|o>>>25)+i|0)<<9|o>>>23)+a|0)<<13|o>>>19)+s|0)<<18|o>>>14,u^=(o=(l^=(o=(d^=(o=(f^=(o=u+l|0)<<7|o>>>25)+u|0)<<9|o>>>23)+f|0)<<13|o>>>19)+d|0)<<18|o>>>14,m^=(o=(h^=(o=(p^=(o=(v^=(o=m+h|0)<<7|o>>>25)+m|0)<<9|o>>>23)+v|0)<<13|o>>>19)+p|0)<<18|o>>>14,_^=(o=(b^=(o=(y^=(o=(g^=(o=_+b|0)<<7|o>>>25)+_|0)<<9|o>>>23)+g|0)<<13|o>>>19)+y|0)<<18|o>>>14;t[0]=i>>>0&255,t[1]=i>>>8&255,t[2]=i>>>16&255,t[3]=i>>>24&255,t[4]=u>>>0&255,t[5]=u>>>8&255,t[6]=u>>>16&255,t[7]=u>>>24&255,t[8]=m>>>0&255,t[9]=m>>>8&255,t[10]=m>>>16&255,t[11]=m>>>24&255,t[12]=_>>>0&255,t[13]=_>>>8&255,t[14]=_>>>16&255,t[15]=_>>>24&255,t[16]=f>>>0&255,t[17]=f>>>8&255,t[18]=f>>>16&255,t[19]=f>>>24&255,t[20]=d>>>0&255,t[21]=d>>>8&255,t[22]=d>>>16&255,t[23]=d>>>24&255,t[24]=p>>>0&255,t[25]=p>>>8&255,t[26]=p>>>16&255,t[27]=p>>>24&255,t[28]=h>>>0&255,t[29]=h>>>8&255,t[30]=h>>>16&255,t[31]=h>>>24&255}(t,e,n,r)}var _=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function A(t,e,n,r,o,i,a){var s,c,l=new Uint8Array(16),u=new Uint8Array(64);for(c=0;c<16;c++)l[c]=0;for(c=0;c<8;c++)l[c]=i[c];for(;o>=64;){for(y(u,l,a,_),c=0;c<64;c++)t[e+c]=n[r+c]^u[c];for(s=1,c=8;c<16;c++)s=s+(255&l[c])|0,l[c]=255&s,s>>>=8;o-=64,e+=64,r+=64}if(o>0)for(y(u,l,a,_),c=0;c<o;c++)t[e+c]=n[r+c]^u[c];return 0}function w(t,e,n,r,o){var i,a,s=new Uint8Array(16),c=new Uint8Array(64);for(a=0;a<16;a++)s[a]=0;for(a=0;a<8;a++)s[a]=r[a];for(;n>=64;){for(y(c,s,o,_),a=0;a<64;a++)t[e+a]=c[a];for(i=1,a=8;a<16;a++)i=i+(255&s[a])|0,s[a]=255&i,i>>>=8;n-=64,e+=64}if(n>0)for(y(c,s,o,_),a=0;a<n;a++)t[e+a]=c[a];return 0}function E(t,e,n,r,o){var i=new Uint8Array(32);b(i,r,o,_);for(var a=new Uint8Array(8),s=0;s<8;s++)a[s]=r[s+16];return w(t,e,n,a,i)}function C(t,e,n,r,o,i,a){var s=new Uint8Array(32);b(s,i,a,_);for(var c=new Uint8Array(8),l=0;l<8;l++)c[l]=i[l+16];return A(t,e,n,r,o,c,s)}var x=function(t){var e,n,r,o,i,a,s,c;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,e=255&t[0]|(255&t[1])<<8,this.r[0]=8191&e,n=255&t[2]|(255&t[3])<<8,this.r[1]=8191&(e>>>13|n<<3),r=255&t[4]|(255&t[5])<<8,this.r[2]=7939&(n>>>10|r<<6),o=255&t[6]|(255&t[7])<<8,this.r[3]=8191&(r>>>7|o<<9),i=255&t[8]|(255&t[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,a=255&t[10]|(255&t[11])<<8,this.r[6]=8191&(i>>>14|a<<2),s=255&t[12]|(255&t[13])<<8,this.r[7]=8065&(a>>>11|s<<5),c=255&t[14]|(255&t[15])<<8,this.r[8]=8191&(s>>>8|c<<8),this.r[9]=c>>>5&127,this.pad[0]=255&t[16]|(255&t[17])<<8,this.pad[1]=255&t[18]|(255&t[19])<<8,this.pad[2]=255&t[20]|(255&t[21])<<8,this.pad[3]=255&t[22]|(255&t[23])<<8,this.pad[4]=255&t[24]|(255&t[25])<<8,this.pad[5]=255&t[26]|(255&t[27])<<8,this.pad[6]=255&t[28]|(255&t[29])<<8,this.pad[7]=255&t[30]|(255&t[31])<<8};function k(t,e,n,r,o,i){var a=new x(i);return a.update(n,r,o),a.finish(t,e),0}function S(t,e,n,r,o,i){var a=new Uint8Array(16);return k(a,0,n,r,o,i),v(t,e,a,0)}function O(t,e,n,r,o){var i;if(n<32)return-1;for(C(t,0,e,0,n,r,o),k(t,16,t,32,n-32,t),i=0;i<16;i++)t[i]=0;return 0}function T(t,e,n,r,o){var i,a=new Uint8Array(32);if(n<32)return-1;if(E(a,0,32,r,o),0!==S(e,16,e,32,n-32,a))return-1;for(C(t,0,e,0,n,r,o),i=0;i<32;i++)t[i]=0;return 0}function B(t,e){var n;for(n=0;n<16;n++)t[n]=0|e[n]}function N(t){var e,n,r=1;for(e=0;e<16;e++)n=t[e]+r+65535,r=Math.floor(n/65536),t[e]=n-65536*r;t[0]+=r-1+37*(r-1)}function I(t,e,n){for(var r,o=~(n-1),i=0;i<16;i++)r=o&(t[i]^e[i]),t[i]^=r,e[i]^=r}function R(t,n){var r,o,i,a=e(),s=e();for(r=0;r<16;r++)s[r]=n[r];for(N(s),N(s),N(s),o=0;o<2;o++){for(a[0]=s[0]-65517,r=1;r<15;r++)a[r]=s[r]-65535-(a[r-1]>>16&1),a[r-1]&=65535;a[15]=s[15]-32767-(a[14]>>16&1),i=a[15]>>16&1,a[14]&=65535,I(s,a,1-i)}for(r=0;r<16;r++)t[2*r]=255&s[r],t[2*r+1]=s[r]>>8}function M(t,e){var n=new Uint8Array(32),r=new Uint8Array(32);return R(n,t),R(r,e),g(n,0,r,0)}function P(t){var e=new Uint8Array(32);return R(e,t),1&e[0]}function L(t,e){var n;for(n=0;n<16;n++)t[n]=e[2*n]+(e[2*n+1]<<8);t[15]&=32767}function z(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]+n[r]}function D(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]-n[r]}function j(t,e,n){var r,o,i=0,a=0,s=0,c=0,l=0,u=0,f=0,d=0,p=0,h=0,m=0,v=0,g=0,y=0,b=0,_=0,A=0,w=0,E=0,C=0,x=0,k=0,S=0,O=0,T=0,B=0,N=0,I=0,R=0,M=0,P=0,L=n[0],z=n[1],D=n[2],j=n[3],U=n[4],F=n[5],K=n[6],V=n[7],Z=n[8],q=n[9],X=n[10],Y=n[11],G=n[12],H=n[13],Q=n[14],J=n[15];i+=(r=e[0])*L,a+=r*z,s+=r*D,c+=r*j,l+=r*U,u+=r*F,f+=r*K,d+=r*V,p+=r*Z,h+=r*q,m+=r*X,v+=r*Y,g+=r*G,y+=r*H,b+=r*Q,_+=r*J,a+=(r=e[1])*L,s+=r*z,c+=r*D,l+=r*j,u+=r*U,f+=r*F,d+=r*K,p+=r*V,h+=r*Z,m+=r*q,v+=r*X,g+=r*Y,y+=r*G,b+=r*H,_+=r*Q,A+=r*J,s+=(r=e[2])*L,c+=r*z,l+=r*D,u+=r*j,f+=r*U,d+=r*F,p+=r*K,h+=r*V,m+=r*Z,v+=r*q,g+=r*X,y+=r*Y,b+=r*G,_+=r*H,A+=r*Q,w+=r*J,c+=(r=e[3])*L,l+=r*z,u+=r*D,f+=r*j,d+=r*U,p+=r*F,h+=r*K,m+=r*V,v+=r*Z,g+=r*q,y+=r*X,b+=r*Y,_+=r*G,A+=r*H,w+=r*Q,E+=r*J,l+=(r=e[4])*L,u+=r*z,f+=r*D,d+=r*j,p+=r*U,h+=r*F,m+=r*K,v+=r*V,g+=r*Z,y+=r*q,b+=r*X,_+=r*Y,A+=r*G,w+=r*H,E+=r*Q,C+=r*J,u+=(r=e[5])*L,f+=r*z,d+=r*D,p+=r*j,h+=r*U,m+=r*F,v+=r*K,g+=r*V,y+=r*Z,b+=r*q,_+=r*X,A+=r*Y,w+=r*G,E+=r*H,C+=r*Q,x+=r*J,f+=(r=e[6])*L,d+=r*z,p+=r*D,h+=r*j,m+=r*U,v+=r*F,g+=r*K,y+=r*V,b+=r*Z,_+=r*q,A+=r*X,w+=r*Y,E+=r*G,C+=r*H,x+=r*Q,k+=r*J,d+=(r=e[7])*L,p+=r*z,h+=r*D,m+=r*j,v+=r*U,g+=r*F,y+=r*K,b+=r*V,_+=r*Z,A+=r*q,w+=r*X,E+=r*Y,C+=r*G,x+=r*H,k+=r*Q,S+=r*J,p+=(r=e[8])*L,h+=r*z,m+=r*D,v+=r*j,g+=r*U,y+=r*F,b+=r*K,_+=r*V,A+=r*Z,w+=r*q,E+=r*X,C+=r*Y,x+=r*G,k+=r*H,S+=r*Q,O+=r*J,h+=(r=e[9])*L,m+=r*z,v+=r*D,g+=r*j,y+=r*U,b+=r*F,_+=r*K,A+=r*V,w+=r*Z,E+=r*q,C+=r*X,x+=r*Y,k+=r*G,S+=r*H,O+=r*Q,T+=r*J,m+=(r=e[10])*L,v+=r*z,g+=r*D,y+=r*j,b+=r*U,_+=r*F,A+=r*K,w+=r*V,E+=r*Z,C+=r*q,x+=r*X,k+=r*Y,S+=r*G,O+=r*H,T+=r*Q,B+=r*J,v+=(r=e[11])*L,g+=r*z,y+=r*D,b+=r*j,_+=r*U,A+=r*F,w+=r*K,E+=r*V,C+=r*Z,x+=r*q,k+=r*X,S+=r*Y,O+=r*G,T+=r*H,B+=r*Q,N+=r*J,g+=(r=e[12])*L,y+=r*z,b+=r*D,_+=r*j,A+=r*U,w+=r*F,E+=r*K,C+=r*V,x+=r*Z,k+=r*q,S+=r*X,O+=r*Y,T+=r*G,B+=r*H,N+=r*Q,I+=r*J,y+=(r=e[13])*L,b+=r*z,_+=r*D,A+=r*j,w+=r*U,E+=r*F,C+=r*K,x+=r*V,k+=r*Z,S+=r*q,O+=r*X,T+=r*Y,B+=r*G,N+=r*H,I+=r*Q,R+=r*J,b+=(r=e[14])*L,_+=r*z,A+=r*D,w+=r*j,E+=r*U,C+=r*F,x+=r*K,k+=r*V,S+=r*Z,O+=r*q,T+=r*X,B+=r*Y,N+=r*G,I+=r*H,R+=r*Q,M+=r*J,_+=(r=e[15])*L,a+=38*(w+=r*D),s+=38*(E+=r*j),c+=38*(C+=r*U),l+=38*(x+=r*F),u+=38*(k+=r*K),f+=38*(S+=r*V),d+=38*(O+=r*Z),p+=38*(T+=r*q),h+=38*(B+=r*X),m+=38*(N+=r*Y),v+=38*(I+=r*G),g+=38*(R+=r*H),y+=38*(M+=r*Q),b+=38*(P+=r*J),i=(r=(i+=38*(A+=r*z))+(o=1)+65535)-65536*(o=Math.floor(r/65536)),a=(r=a+o+65535)-65536*(o=Math.floor(r/65536)),s=(r=s+o+65535)-65536*(o=Math.floor(r/65536)),c=(r=c+o+65535)-65536*(o=Math.floor(r/65536)),l=(r=l+o+65535)-65536*(o=Math.floor(r/65536)),u=(r=u+o+65535)-65536*(o=Math.floor(r/65536)),f=(r=f+o+65535)-65536*(o=Math.floor(r/65536)),d=(r=d+o+65535)-65536*(o=Math.floor(r/65536)),p=(r=p+o+65535)-65536*(o=Math.floor(r/65536)),h=(r=h+o+65535)-65536*(o=Math.floor(r/65536)),m=(r=m+o+65535)-65536*(o=Math.floor(r/65536)),v=(r=v+o+65535)-65536*(o=Math.floor(r/65536)),g=(r=g+o+65535)-65536*(o=Math.floor(r/65536)),y=(r=y+o+65535)-65536*(o=Math.floor(r/65536)),b=(r=b+o+65535)-65536*(o=Math.floor(r/65536)),_=(r=_+o+65535)-65536*(o=Math.floor(r/65536)),i=(r=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(r/65536)),a=(r=a+o+65535)-65536*(o=Math.floor(r/65536)),s=(r=s+o+65535)-65536*(o=Math.floor(r/65536)),c=(r=c+o+65535)-65536*(o=Math.floor(r/65536)),l=(r=l+o+65535)-65536*(o=Math.floor(r/65536)),u=(r=u+o+65535)-65536*(o=Math.floor(r/65536)),f=(r=f+o+65535)-65536*(o=Math.floor(r/65536)),d=(r=d+o+65535)-65536*(o=Math.floor(r/65536)),p=(r=p+o+65535)-65536*(o=Math.floor(r/65536)),h=(r=h+o+65535)-65536*(o=Math.floor(r/65536)),m=(r=m+o+65535)-65536*(o=Math.floor(r/65536)),v=(r=v+o+65535)-65536*(o=Math.floor(r/65536)),g=(r=g+o+65535)-65536*(o=Math.floor(r/65536)),y=(r=y+o+65535)-65536*(o=Math.floor(r/65536)),b=(r=b+o+65535)-65536*(o=Math.floor(r/65536)),_=(r=_+o+65535)-65536*(o=Math.floor(r/65536)),i+=o-1+37*(o-1),t[0]=i,t[1]=a,t[2]=s,t[3]=c,t[4]=l,t[5]=u,t[6]=f,t[7]=d,t[8]=p,t[9]=h,t[10]=m,t[11]=v,t[12]=g,t[13]=y,t[14]=b,t[15]=_}function U(t,e){j(t,e,e)}function F(t,n){var r,o=e();for(r=0;r<16;r++)o[r]=n[r];for(r=253;r>=0;r--)U(o,o),2!==r&&4!==r&&j(o,o,n);for(r=0;r<16;r++)t[r]=o[r]}function K(t,n,r){var o,i,a=new Uint8Array(32),s=new Float64Array(80),l=e(),u=e(),f=e(),d=e(),p=e(),h=e();for(i=0;i<31;i++)a[i]=n[i];for(a[31]=127&n[31]|64,a[0]&=248,L(s,r),i=0;i<16;i++)u[i]=s[i],d[i]=l[i]=f[i]=0;for(l[0]=d[0]=1,i=254;i>=0;--i)I(l,u,o=a[i>>>3]>>>(7&i)&1),I(f,d,o),z(p,l,f),D(l,l,f),z(f,u,d),D(u,u,d),U(d,p),U(h,l),j(l,f,l),j(f,u,p),z(p,l,f),D(l,l,f),U(u,l),D(f,d,h),j(l,f,c),z(l,l,d),j(f,f,l),j(l,d,h),j(d,u,s),U(u,p),I(l,u,o),I(f,d,o);for(i=0;i<16;i++)s[i+16]=l[i],s[i+32]=f[i],s[i+48]=u[i],s[i+64]=d[i];var m=s.subarray(32),v=s.subarray(16);return F(m,m),j(v,v,m),R(t,v),0}function V(t,e){return K(t,e,i)}function Z(t,e){return r(e,32),V(t,e)}function q(t,e,n){var r=new Uint8Array(32);return K(r,n,e),b(t,o,r,_)}x.prototype.blocks=function(t,e,n){for(var r,o,i,a,s,c,l,u,f,d,p,h,m,v,g,y,b,_,A,w=this.fin?0:2048,E=this.h[0],C=this.h[1],x=this.h[2],k=this.h[3],S=this.h[4],O=this.h[5],T=this.h[6],B=this.h[7],N=this.h[8],I=this.h[9],R=this.r[0],M=this.r[1],P=this.r[2],L=this.r[3],z=this.r[4],D=this.r[5],j=this.r[6],U=this.r[7],F=this.r[8],K=this.r[9];n>=16;)E+=8191&(r=255&t[e+0]|(255&t[e+1])<<8),C+=8191&(r>>>13|(o=255&t[e+2]|(255&t[e+3])<<8)<<3),x+=8191&(o>>>10|(i=255&t[e+4]|(255&t[e+5])<<8)<<6),k+=8191&(i>>>7|(a=255&t[e+6]|(255&t[e+7])<<8)<<9),S+=8191&(a>>>4|(s=255&t[e+8]|(255&t[e+9])<<8)<<12),O+=s>>>1&8191,T+=8191&(s>>>14|(c=255&t[e+10]|(255&t[e+11])<<8)<<2),B+=8191&(c>>>11|(l=255&t[e+12]|(255&t[e+13])<<8)<<5),u=255&t[e+14]|(255&t[e+15])<<8,d=f=0,d+=E*R,d+=C*(5*K),d+=x*(5*F),d+=k*(5*U),f=(d+=S*(5*j))>>>13,d&=8191,d+=O*(5*D),d+=T*(5*z),d+=B*(5*L),d+=(N+=8191&(l>>>8|u<<8))*(5*P),p=f+=(d+=(I+=u>>>5|w)*(5*M))>>>13,p+=E*M,p+=C*R,p+=x*(5*K),p+=k*(5*F),f=(p+=S*(5*U))>>>13,p&=8191,p+=O*(5*j),p+=T*(5*D),p+=B*(5*z),p+=N*(5*L),f+=(p+=I*(5*P))>>>13,p&=8191,h=f,h+=E*P,h+=C*M,h+=x*R,h+=k*(5*K),f=(h+=S*(5*F))>>>13,h&=8191,h+=O*(5*U),h+=T*(5*j),h+=B*(5*D),h+=N*(5*z),m=f+=(h+=I*(5*L))>>>13,m+=E*L,m+=C*P,m+=x*M,m+=k*R,f=(m+=S*(5*K))>>>13,m&=8191,m+=O*(5*F),m+=T*(5*U),m+=B*(5*j),m+=N*(5*D),v=f+=(m+=I*(5*z))>>>13,v+=E*z,v+=C*L,v+=x*P,v+=k*M,f=(v+=S*R)>>>13,v&=8191,v+=O*(5*K),v+=T*(5*F),v+=B*(5*U),v+=N*(5*j),g=f+=(v+=I*(5*D))>>>13,g+=E*D,g+=C*z,g+=x*L,g+=k*P,f=(g+=S*M)>>>13,g&=8191,g+=O*R,g+=T*(5*K),g+=B*(5*F),g+=N*(5*U),y=f+=(g+=I*(5*j))>>>13,y+=E*j,y+=C*D,y+=x*z,y+=k*L,f=(y+=S*P)>>>13,y&=8191,y+=O*M,y+=T*R,y+=B*(5*K),y+=N*(5*F),b=f+=(y+=I*(5*U))>>>13,b+=E*U,b+=C*j,b+=x*D,b+=k*z,f=(b+=S*L)>>>13,b&=8191,b+=O*P,b+=T*M,b+=B*R,b+=N*(5*K),_=f+=(b+=I*(5*F))>>>13,_+=E*F,_+=C*U,_+=x*j,_+=k*D,f=(_+=S*z)>>>13,_&=8191,_+=O*L,_+=T*P,_+=B*M,_+=N*R,A=f+=(_+=I*(5*K))>>>13,A+=E*K,A+=C*F,A+=x*U,A+=k*j,f=(A+=S*D)>>>13,A&=8191,A+=O*z,A+=T*L,A+=B*P,A+=N*M,E=d=8191&(f=(f=((f+=(A+=I*R)>>>13)<<2)+f|0)+(d&=8191)|0),C=p+=f>>>=13,x=h&=8191,k=m&=8191,S=v&=8191,O=g&=8191,T=y&=8191,B=b&=8191,N=_&=8191,I=A&=8191,e+=16,n-=16;this.h[0]=E,this.h[1]=C,this.h[2]=x,this.h[3]=k,this.h[4]=S,this.h[5]=O,this.h[6]=T,this.h[7]=B,this.h[8]=N,this.h[9]=I},x.prototype.finish=function(t,e){var n,r,o,i,a=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,a[0]=this.h[0]+5,n=a[0]>>>13,a[0]&=8191,i=1;i<10;i++)a[i]=this.h[i]+n,n=a[i]>>>13,a[i]&=8191;for(a[9]-=8192,r=(1^n)-1,i=0;i<10;i++)a[i]&=r;for(r=~r,i=0;i<10;i++)this.h[i]=this.h[i]&r|a[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;t[e+0]=this.h[0]>>>0&255,t[e+1]=this.h[0]>>>8&255,t[e+2]=this.h[1]>>>0&255,t[e+3]=this.h[1]>>>8&255,t[e+4]=this.h[2]>>>0&255,t[e+5]=this.h[2]>>>8&255,t[e+6]=this.h[3]>>>0&255,t[e+7]=this.h[3]>>>8&255,t[e+8]=this.h[4]>>>0&255,t[e+9]=this.h[4]>>>8&255,t[e+10]=this.h[5]>>>0&255,t[e+11]=this.h[5]>>>8&255,t[e+12]=this.h[6]>>>0&255,t[e+13]=this.h[6]>>>8&255,t[e+14]=this.h[7]>>>0&255,t[e+15]=this.h[7]>>>8&255},x.prototype.update=function(t,e,n){var r,o;if(this.leftover){for((o=16-this.leftover)>n&&(o=n),r=0;r<o;r++)this.buffer[this.leftover+r]=t[e+r];if(n-=o,e+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(o=n-n%16,this.blocks(t,e,o),e+=o,n-=o),n){for(r=0;r<n;r++)this.buffer[this.leftover+r]=t[e+r];this.leftover+=n}};var X=O,Y=T;var G=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function H(t,e,n,r){for(var o,i,a,s,c,l,u,f,d,p,h,m,v,g,y,b,_,A,w,E,C,x,k,S,O,T,B=new Int32Array(16),N=new Int32Array(16),I=t[0],R=t[1],M=t[2],P=t[3],L=t[4],z=t[5],D=t[6],j=t[7],U=e[0],F=e[1],K=e[2],V=e[3],Z=e[4],q=e[5],X=e[6],Y=e[7],H=0;r>=128;){for(w=0;w<16;w++)E=8*w+H,B[w]=n[E+0]<<24|n[E+1]<<16|n[E+2]<<8|n[E+3],N[w]=n[E+4]<<24|n[E+5]<<16|n[E+6]<<8|n[E+7];for(w=0;w<80;w++)if(o=I,i=R,a=M,s=P,c=L,l=z,u=D,f=j,d=U,p=F,h=K,m=V,v=Z,g=q,y=X,b=Y,k=65535&(x=Y),S=x>>>16,O=65535&(C=j),T=C>>>16,k+=65535&(x=(Z>>>14|L<<18)^(Z>>>18|L<<14)^(L>>>9|Z<<23)),S+=x>>>16,O+=65535&(C=(L>>>14|Z<<18)^(L>>>18|Z<<14)^(Z>>>9|L<<23)),T+=C>>>16,k+=65535&(x=Z&q^~Z&X),S+=x>>>16,O+=65535&(C=L&z^~L&D),T+=C>>>16,C=G[2*w],k+=65535&(x=G[2*w+1]),S+=x>>>16,O+=65535&C,T+=C>>>16,C=B[w%16],S+=(x=N[w%16])>>>16,O+=65535&C,T+=C>>>16,O+=(S+=(k+=65535&x)>>>16)>>>16,k=65535&(x=A=65535&k|S<<16),S=x>>>16,O=65535&(C=_=65535&O|(T+=O>>>16)<<16),T=C>>>16,k+=65535&(x=(U>>>28|I<<4)^(I>>>2|U<<30)^(I>>>7|U<<25)),S+=x>>>16,O+=65535&(C=(I>>>28|U<<4)^(U>>>2|I<<30)^(U>>>7|I<<25)),T+=C>>>16,S+=(x=U&F^U&K^F&K)>>>16,O+=65535&(C=I&R^I&M^R&M),T+=C>>>16,f=65535&(O+=(S+=(k+=65535&x)>>>16)>>>16)|(T+=O>>>16)<<16,b=65535&k|S<<16,k=65535&(x=m),S=x>>>16,O=65535&(C=s),T=C>>>16,S+=(x=A)>>>16,O+=65535&(C=_),T+=C>>>16,R=o,M=i,P=a,L=s=65535&(O+=(S+=(k+=65535&x)>>>16)>>>16)|(T+=O>>>16)<<16,z=c,D=l,j=u,I=f,F=d,K=p,V=h,Z=m=65535&k|S<<16,q=v,X=g,Y=y,U=b,w%16==15)for(E=0;E<16;E++)C=B[E],k=65535&(x=N[E]),S=x>>>16,O=65535&C,T=C>>>16,C=B[(E+9)%16],k+=65535&(x=N[(E+9)%16]),S+=x>>>16,O+=65535&C,T+=C>>>16,_=B[(E+1)%16],k+=65535&(x=((A=N[(E+1)%16])>>>1|_<<31)^(A>>>8|_<<24)^(A>>>7|_<<25)),S+=x>>>16,O+=65535&(C=(_>>>1|A<<31)^(_>>>8|A<<24)^_>>>7),T+=C>>>16,_=B[(E+14)%16],S+=(x=((A=N[(E+14)%16])>>>19|_<<13)^(_>>>29|A<<3)^(A>>>6|_<<26))>>>16,O+=65535&(C=(_>>>19|A<<13)^(A>>>29|_<<3)^_>>>6),T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,B[E]=65535&O|T<<16,N[E]=65535&k|S<<16;k=65535&(x=U),S=x>>>16,O=65535&(C=I),T=C>>>16,C=t[0],S+=(x=e[0])>>>16,O+=65535&C,T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,t[0]=I=65535&O|T<<16,e[0]=U=65535&k|S<<16,k=65535&(x=F),S=x>>>16,O=65535&(C=R),T=C>>>16,C=t[1],S+=(x=e[1])>>>16,O+=65535&C,T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,t[1]=R=65535&O|T<<16,e[1]=F=65535&k|S<<16,k=65535&(x=K),S=x>>>16,O=65535&(C=M),T=C>>>16,C=t[2],S+=(x=e[2])>>>16,O+=65535&C,T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,t[2]=M=65535&O|T<<16,e[2]=K=65535&k|S<<16,k=65535&(x=V),S=x>>>16,O=65535&(C=P),T=C>>>16,C=t[3],S+=(x=e[3])>>>16,O+=65535&C,T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,t[3]=P=65535&O|T<<16,e[3]=V=65535&k|S<<16,k=65535&(x=Z),S=x>>>16,O=65535&(C=L),T=C>>>16,C=t[4],S+=(x=e[4])>>>16,O+=65535&C,T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,t[4]=L=65535&O|T<<16,e[4]=Z=65535&k|S<<16,k=65535&(x=q),S=x>>>16,O=65535&(C=z),T=C>>>16,C=t[5],S+=(x=e[5])>>>16,O+=65535&C,T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,t[5]=z=65535&O|T<<16,e[5]=q=65535&k|S<<16,k=65535&(x=X),S=x>>>16,O=65535&(C=D),T=C>>>16,C=t[6],S+=(x=e[6])>>>16,O+=65535&C,T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,t[6]=D=65535&O|T<<16,e[6]=X=65535&k|S<<16,k=65535&(x=Y),S=x>>>16,O=65535&(C=j),T=C>>>16,C=t[7],S+=(x=e[7])>>>16,O+=65535&C,T+=C>>>16,T+=(O+=(S+=(k+=65535&x)>>>16)>>>16)>>>16,t[7]=j=65535&O|T<<16,e[7]=Y=65535&k|S<<16,H+=128,r-=128}return r}function Q(t,e,n){var r,o=new Int32Array(8),i=new Int32Array(8),a=new Uint8Array(256),s=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,H(o,i,e,n),n%=128,r=0;r<n;r++)a[r]=e[s-n+r];for(a[n]=128,a[(n=256-128*(n<112?1:0))-9]=0,h(a,n-8,s/536870912|0,s<<3),H(o,i,a,n),r=0;r<8;r++)h(t,8*r,o[r],i[r]);return 0}function J(t,n){var r=e(),o=e(),i=e(),a=e(),s=e(),c=e(),l=e(),f=e(),d=e();D(r,t[1],t[0]),D(d,n[1],n[0]),j(r,r,d),z(o,t[0],t[1]),z(d,n[0],n[1]),j(o,o,d),j(i,t[3],n[3]),j(i,i,u),j(a,t[2],n[2]),z(a,a,a),D(s,o,r),D(c,a,i),z(l,a,i),z(f,o,r),j(t[0],s,c),j(t[1],f,l),j(t[2],l,c),j(t[3],s,f)}function W(t,e,n){var r;for(r=0;r<4;r++)I(t[r],e[r],n)}function $(t,n){var r=e(),o=e(),i=e();F(i,n[2]),j(r,n[0],i),j(o,n[1],i),R(t,o),t[31]^=P(r)<<7}function tt(t,e,n){var r,o;for(B(t[0],a),B(t[1],s),B(t[2],s),B(t[3],a),o=255;o>=0;--o)W(t,e,r=n[o/8|0]>>(7&o)&1),J(e,t),J(t,t),W(t,e,r)}function et(t,n){var r=[e(),e(),e(),e()];B(r[0],f),B(r[1],d),B(r[2],s),j(r[3],f,d),tt(t,r,n)}function nt(t,n,o){var i,a=new Uint8Array(64),s=[e(),e(),e(),e()];for(o||r(n,32),Q(a,n,32),a[0]&=248,a[31]&=127,a[31]|=64,et(s,a),$(t,s),i=0;i<32;i++)n[i+32]=t[i];return 0}var rt=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function ot(t,e){var n,r,o,i;for(r=63;r>=32;--r){for(n=0,o=r-32,i=r-12;o<i;++o)e[o]+=n-16*e[r]*rt[o-(r-32)],n=e[o]+128>>8,e[o]-=256*n;e[o]+=n,e[r]=0}for(n=0,o=0;o<32;o++)e[o]+=n-(e[31]>>4)*rt[o],n=e[o]>>8,e[o]&=255;for(o=0;o<32;o++)e[o]-=n*rt[o];for(r=0;r<32;r++)e[r+1]+=e[r]>>8,t[r]=255&e[r]}function it(t){var e,n=new Float64Array(64);for(e=0;e<64;e++)n[e]=t[e];for(e=0;e<64;e++)t[e]=0;ot(t,n)}function at(t,n,r,o){var i,a,s=new Uint8Array(64),c=new Uint8Array(64),l=new Uint8Array(64),u=new Float64Array(64),f=[e(),e(),e(),e()];Q(s,o,32),s[0]&=248,s[31]&=127,s[31]|=64;var d=r+64;for(i=0;i<r;i++)t[64+i]=n[i];for(i=0;i<32;i++)t[32+i]=s[32+i];for(Q(l,t.subarray(32),r+32),it(l),et(f,l),$(t,f),i=32;i<64;i++)t[i]=o[i];for(Q(c,t,r+64),it(c),i=0;i<64;i++)u[i]=0;for(i=0;i<32;i++)u[i]=l[i];for(i=0;i<32;i++)for(a=0;a<32;a++)u[i+a]+=c[i]*s[a];return ot(t.subarray(32),u),d}function st(t,n){var r=e(),o=e(),i=e(),c=e(),u=e(),f=e(),d=e();return B(t[2],s),L(t[1],n),U(i,t[1]),j(c,i,l),D(i,i,t[2]),z(c,t[2],c),U(u,c),U(f,u),j(d,f,u),j(r,d,i),j(r,r,c),function(t,n){var r,o=e();for(r=0;r<16;r++)o[r]=n[r];for(r=250;r>=0;r--)U(o,o),1!==r&&j(o,o,n);for(r=0;r<16;r++)t[r]=o[r]}(r,r),j(r,r,i),j(r,r,c),j(r,r,c),j(t[0],r,c),U(o,t[0]),j(o,o,c),M(o,i)&&j(t[0],t[0],p),U(o,t[0]),j(o,o,c),M(o,i)?-1:(P(t[0])===n[31]>>7&&D(t[0],a,t[0]),j(t[3],t[0],t[1]),0)}function ct(t,n,r,o){var i,a=new Uint8Array(32),s=new Uint8Array(64),c=[e(),e(),e(),e()],l=[e(),e(),e(),e()];if(-1,r<64)return-1;if(st(l,o))return-1;for(i=0;i<r;i++)t[i]=n[i];for(i=0;i<32;i++)t[i+32]=o[i];if(Q(s,t,r),it(s),tt(c,l,s),et(l,n.subarray(32)),J(c,l),$(a,c),r-=64,g(n,0,a,0)){for(i=0;i<r;i++)t[i]=0;return-1}for(i=0;i<r;i++)t[i]=n[i+64];return r}var lt=32,ut=24,ft=32,dt=32,pt=ut;function ht(t,e){if(t.length!==lt)throw new Error("bad key size");if(e.length!==ut)throw new Error("bad nonce size")}function mt(){for(var t=0;t<arguments.length;t++)if(!(arguments[t]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function vt(t){for(var e=0;e<t.length;e++)t[e]=0}t.lowlevel={crypto_core_hsalsa20:b,crypto_stream_xor:C,crypto_stream:E,crypto_stream_salsa20_xor:A,crypto_stream_salsa20:w,crypto_onetimeauth:k,crypto_onetimeauth_verify:S,crypto_verify_16:v,crypto_verify_32:g,crypto_secretbox:O,crypto_secretbox_open:T,crypto_scalarmult:K,crypto_scalarmult_base:V,crypto_box_beforenm:q,crypto_box_afternm:X,crypto_box:function(t,e,n,r,o,i){var a=new Uint8Array(32);return q(a,o,i),X(t,e,n,r,a)},crypto_box_open:function(t,e,n,r,o,i){var a=new Uint8Array(32);return q(a,o,i),Y(t,e,n,r,a)},crypto_box_keypair:Z,crypto_hash:Q,crypto_sign:at,crypto_sign_keypair:nt,crypto_sign_open:ct,crypto_secretbox_KEYBYTES:lt,crypto_secretbox_NONCEBYTES:ut,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:ft,crypto_box_SECRETKEYBYTES:dt,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:pt,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},t.randomBytes=function(t){var e=new Uint8Array(t);return r(e,t),e},t.secretbox=function(t,e,n){mt(t,e,n),ht(n,e);for(var r=new Uint8Array(32+t.length),o=new Uint8Array(r.length),i=0;i<t.length;i++)r[i+32]=t[i];return O(o,r,r.length,e,n),o.subarray(16)},t.secretbox.open=function(t,e,n){mt(t,e,n),ht(n,e);for(var r=new Uint8Array(16+t.length),o=new Uint8Array(r.length),i=0;i<t.length;i++)r[i+16]=t[i];return r.length<32?null:0!==T(o,r,r.length,e,n)?null:o.subarray(32)},t.secretbox.keyLength=lt,t.secretbox.nonceLength=ut,t.secretbox.overheadLength=16,t.scalarMult=function(t,e){if(mt(t,e),32!==t.length)throw new Error("bad n size");if(32!==e.length)throw new Error("bad p size");var n=new Uint8Array(32);return K(n,t,e),n},t.scalarMult.base=function(t){if(mt(t),32!==t.length)throw new Error("bad n size");var e=new Uint8Array(32);return V(e,t),e},t.scalarMult.scalarLength=32,t.scalarMult.groupElementLength=32,t.box=function(e,n,r,o){var i=t.box.before(r,o);return t.secretbox(e,n,i)},t.box.before=function(t,e){mt(t,e),function(t,e){if(t.length!==ft)throw new Error("bad public key size");if(e.length!==dt)throw new Error("bad secret key size")}(t,e);var n=new Uint8Array(32);return q(n,t,e),n},t.box.after=t.secretbox,t.box.open=function(e,n,r,o){var i=t.box.before(r,o);return t.secretbox.open(e,n,i)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var t=new Uint8Array(ft),e=new Uint8Array(dt);return Z(t,e),{publicKey:t,secretKey:e}},t.box.keyPair.fromSecretKey=function(t){if(mt(t),t.length!==dt)throw new Error("bad secret key size");var e=new Uint8Array(ft);return V(e,t),{publicKey:e,secretKey:new Uint8Array(t)}},t.box.publicKeyLength=ft,t.box.secretKeyLength=dt,t.box.sharedKeyLength=32,t.box.nonceLength=pt,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(t,e){if(mt(t,e),64!==e.length)throw new Error("bad secret key size");var n=new Uint8Array(64+t.length);return at(n,t,t.length,e),n},t.sign.open=function(t,e){if(mt(t,e),32!==e.length)throw new Error("bad public key size");var n=new Uint8Array(t.length),r=ct(n,t,t.length,e);if(r<0)return null;for(var o=new Uint8Array(r),i=0;i<o.length;i++)o[i]=n[i];return o},t.sign.detached=function(e,n){for(var r=t.sign(e,n),o=new Uint8Array(64),i=0;i<o.length;i++)o[i]=r[i];return o},t.sign.detached.verify=function(t,e,n){if(mt(t,e,n),64!==e.length)throw new Error("bad signature size");if(32!==n.length)throw new Error("bad public key size");var r,o=new Uint8Array(64+t.length),i=new Uint8Array(64+t.length);for(r=0;r<64;r++)o[r]=e[r];for(r=0;r<t.length;r++)o[r+64]=t[r];return ct(i,o,o.length,n)>=0},t.sign.keyPair=function(){var t=new Uint8Array(32),e=new Uint8Array(64);return nt(t,e),{publicKey:t,secretKey:e}},t.sign.keyPair.fromSecretKey=function(t){if(mt(t),64!==t.length)throw new Error("bad secret key size");for(var e=new Uint8Array(32),n=0;n<e.length;n++)e[n]=t[32+n];return{publicKey:e,secretKey:new Uint8Array(t)}},t.sign.keyPair.fromSeed=function(t){if(mt(t),32!==t.length)throw new Error("bad seed size");for(var e=new Uint8Array(32),n=new Uint8Array(64),r=0;r<32;r++)n[r]=t[r];return nt(e,n,!0),{publicKey:e,secretKey:n}},t.sign.publicKeyLength=32,t.sign.secretKeyLength=64,t.sign.seedLength=32,t.sign.signatureLength=64,t.hash=function(t){mt(t);var e=new Uint8Array(64);return Q(e,t,t.length),e},t.hash.hashLength=64,t.verify=function(t,e){return mt(t,e),0!==t.length&&0!==e.length&&(t.length===e.length&&0===m(t,0,e,0,t.length))},t.setPRNG=function(t){r=t},function(){var e="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(e&&e.getRandomValues){t.setPRNG(function(t,n){var r,o=new Uint8Array(n);for(r=0;r<n;r+=65536)e.getRandomValues(o.subarray(r,r+Math.min(n-r,65536)));for(r=0;r<n;r++)t[r]=o[r];vt(o)})}else(e=n(0))&&e.randomBytes&&t.setPRNG(function(t,n){var r,o=e.randomBytes(n);for(r=0;r<n;r++)t[r]=o[r];vt(o)})}()}(void 0!==t&&t.exports?t.exports:self.nacl=self.nacl||{})},QRG4:function(t,e,n){var r=n("UuGF"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"QWe/":function(t,e,n){n("crlp")("observable")},R27j:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r=a(n("Zrlr")),o=a(n("wxAW")),i=n("Se5b");function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){function e(t){(0,r.default)(this,e),this.transport=t,t.decorateAppAPIMethods(this,["getAppConfiguration","getPublicKey","signTransaction","signHash"],"l0v")}return(0,o.default)(e,[{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then(function(t){var e=1===t[0]||t[1]<2;return{version:t[1]+"."+t[2]+"."+t[3],multiOpsEnabled:e}})}},{key:"getPublicKey",value:function(e,n,r){var o=this;(0,i.checkStellarBip32Path)(e);var a=[],s=void 0,c=(0,i.splitPath)(e),l=new t(1+4*c.length);l[0]=c.length,c.forEach(function(t,e){l.writeUInt32BE(t,1+4*e)});var u=t.from("via lumina","ascii");a.push(t.concat([l,u]));var f=!1;return(0,i.foreach)(a,function(e){return o.transport.send(224,f?16:2,n?1:0,r?1:0,e,[36864,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(f=!0,a.push(t.alloc(0))),s=e})}).then(function(){var t=0,e=s.slice(t,t+32);t+=32;var r=(0,i.encodeEd25519PublicKey)(e);if(n){var o=s.slice(t,t+64);if(!(0,i.verifyEd25519Signature)(u,o,e))throw new Error("Bad signature. Keypair is invalid. Please report this.")}return{publicKey:r}})}},{key:"signTransaction",value:function(e,n){var r=this;if((0,i.checkStellarBip32Path)(e),n.length>1540)throw new Error("Transaction too large: max = 1540; actual = "+n.length);var o=[],a=void 0,s=(0,i.splitPath)(e),c=1+4*s.length,l=t.alloc(c);l[0]=s.length,s.forEach(function(t,e){l.writeUInt32BE(t,1+4*e)});var u=150-c;if(n.length<=u)o.push(t.concat([l,n]));else{var f=t.alloc(u),d=0;for(n.copy(f,0,d,u),o.push(t.concat([l,f])),d+=u;d<n.length;){var p=n.length-d;u=p<150?p:150,f=t.alloc(u),n.copy(f,0,d,d+u),d+=u,o.push(f)}}var h=!1;return(0,i.foreach)(o,function(e,n){return r.transport.send(224,h?16:4,0===n?0:128,n===o.length-1?0:128,e,[36864,27013,27684,27685,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(h=!0,o.push(t.alloc(0))),a=e})}).then(function(){var o=t.from(a.slice(a.length-2)).readUInt16BE(0);if(36864===o)return{signature:t.from(a.slice(0,a.length-2))};if(27684===o)return r.signHash_private(e,(0,i.hash)(n));if(27685===o)return r.signHash_private(e,(0,i.hash)(n));throw new Error("Transaction approval request was rejected")})}},{key:"signHash",value:function(t,e){return(0,i.checkStellarBip32Path)(t),this.signHash_private(t,e)}},{key:"signHash_private",value:function(e,n){var r=this,o=[],a=void 0,s=(0,i.splitPath)(e),c=t.alloc(1+4*s.length);c[0]=s.length,s.forEach(function(t,e){c.writeUInt32BE(t,1+4*e)}),o.push(t.concat([c,n]));var l=!1;return(0,i.foreach)(o,function(e){return r.transport.send(224,l?16:8,0,0,e,[36864,27013,27750,27904,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(l=!0,o.push(t.alloc(0))),a=e})}).then(function(){var e=t.from(a.slice(a.length-2)).readUInt16BE(0);if(36864===e)return{signature:t.from(a.slice(0,a.length-2))};throw 27013===e?new Error("Transaction approval request was rejected"):27904===e?new Error("Hash signing is not supported"):new Error("Hash signing not allowed. Have you enabled it in the app settings?")})}}]),e}();e.default=s}).call(e,n("EuP9").Buffer)},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},RPLV:function(t,e,n){var r=n("7KvD").document;t.exports=r&&r.documentElement},"RY/4":function(t,e,n){var r=n("R9M2"),o=n("dSzd")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},Rrel:function(t,e,n){var r=n("TcQ7"),o=n("n0T6").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},Se5b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r=s(n("//Fk"));e.splitPath=function(t){var e=[];return t.split("/").forEach(function(t){var n=parseInt(t,10);isNaN(n)||(t.length>1&&"'"===t[t.length-1]&&(n+=2147483648),e.push(n))}),e},e.foreach=function(t,e){return r.default.resolve().then(function(){return function t(n,r,o){return n>=r.length?o:e(r[n],n).then(function(e){return o.push(e),t(n+1,r,o)})}(0,t,[])})},e.crc16xmodem=c,e.encodeEd25519PublicKey=function(e){var n=t.from(e),r=t.from([48]),i=t.concat([r,n]),a=t.alloc(2);a.writeUInt16LE(c(i),0);var s=t.concat([i,a]);return o.default.encode(s)},e.verifyEd25519Signature=function(t,e,n){return i.default.sign.detached.verify(new Uint8Array(t.toJSON().data),new Uint8Array(e.toJSON().data),new Uint8Array(n.toJSON().data))},e.hash=function(t){var e=new a.sha256;return e.update(t,"utf8"),e.digest()},e.checkStellarBip32Path=function(t){if(!t.startsWith("44'/148'"))throw new Error("Not a Stellar BIP32 path. Path: "+t+". The Stellar app is authorized only for paths starting with 44'/148'. Example: 44'/148'/0'");t.split("/").forEach(function(t){if(!t.toString().endsWith("'"))throw new Error("Detected a non-hardened path element in requested BIP32 path. Non-hardended paths are not supported at this time. Please use an all-hardened path. Example: 44'/148'/0'")})};var o=s(n("Zy68")),i=s(n("QLxU")),a=n("JaR3");function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e){for(var n=void 0!==e?~~e:0,r=0;r<t.length;r++){var o=n>>>8&255;o^=255&t[r],n=n<<8&65535,n^=o^=o>>>4,n^=o=o<<5&65535,n^=o=o<<7&65535}return n}}).call(e,n("EuP9").Buffer)},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},SldL:function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=_;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(N([])));y&&y!==r&&o.call(y,a)&&(v=y);var b=C.prototype=w.prototype=Object.create(v);E.prototype=b.constructor=C,C.constructor=E,C[c]=E.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[s]=function(){return this},u.AsyncIterator=k,u.async=function(t,e,n,r){var o=new k(_(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=N,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function _(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new B(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=A(t,e,n);if("normal"===c.type){if(r=n.done?h:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function A(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function w(){}function E(){}function C(){}function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var s=A(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=A(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},TcQ7:function(t,e,n){var r=n("MU5D"),o=n("52gC");t.exports=function(t){return r(o(t))}},To3L:function(t,e,n){"use strict";var r=n("lktj"),o=n("1kS7"),i=n("NpIQ"),a=n("sB3e"),s=n("MU5D"),c=Object.assign;t.exports=!c||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,l=1,u=o.f,f=i.f;c>l;)for(var d,p=s(arguments[l++]),h=u?r(p).concat(u(p)):r(p),m=h.length,v=0;m>v;)f.call(p,d=h[v++])&&(n[d]=p[d]);return n}:c},U0v6:function(t,e,n){(function(t){(function(e,n){"use strict";var r="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};var o,i=(function(t){var e,n,o,i,a,s,c,l,u,f,d,p,h,m,v;e=r,n=function(t,e,r){if(!l(e)||f(e)||d(e)||p(e)||c(e))return e;var o,i=0,a=0;if(u(e))for(o=[],a=e.length;i<a;i++)o.push(n(t,e[i],r));else for(var s in o={},e)Object.prototype.hasOwnProperty.call(e,s)&&(o[t(s,r)]=n(t,e[s],r));return o},o=function(t){return h(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(t,e){return e?e.toUpperCase():""})).substr(0,1).toLowerCase()+t.substr(1)},i=function(t){var e=o(t);return e.substr(0,1).toUpperCase()+e.substr(1)},a=function(t,e){return function(t,e){var n=(e=e||{}).separator||"_",r=e.split||/(?=[A-Z])/;return t.split(r).join(n)}(t,e).toLowerCase()},s=Object.prototype.toString,c=function(t){return"function"==typeof t},l=function(t){return t===Object(t)},u=function(t){return"[object Array]"==s.call(t)},f=function(t){return"[object Date]"==s.call(t)},d=function(t){return"[object RegExp]"==s.call(t)},p=function(t){return"[object Boolean]"==s.call(t)},h=function(t){return(t-=0)==t},m=function(t,e){var n=e&&"process"in e?e.process:e;return"function"!=typeof n?t:function(e,r){return n(e,t,r)}},v={camelize:o,decamelize:a,pascalize:i,depascalize:a,camelizeKeys:function(t,e){return n(m(o,e),t)},decamelizeKeys:function(t,e){return n(m(a,e),t,e)},pascalizeKeys:function(t,e){return n(m(i,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},t.exports?t.exports=v:e.humps=v}(o={exports:{}},o.exports),o.exports),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n};function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(e.children||[]).map(u.bind(null,t)),a=Object.keys(e.attributes||{}).reduce(function(t,n){var r=e.attributes[n];switch(n){case"class":t.class=r.split(/\s+/).reduce(function(t,e){return t[e]=!0,t},{});break;case"style":t.style=r.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,e){var n=e.indexOf(":"),r=i.camelize(e.slice(0,n)),o=e.slice(n+1).trim();return t[r]=o,t},{});break;default:t.attrs[n]=r}return t},{class:{},style:{},attrs:{}}),s=r.class,f=void 0===s?{}:s,d=r.style,p=void 0===d?{}:d,h=r.attrs,m=void 0===h?{}:h,v=l(r,["class","style","attrs"]);return"string"==typeof e?e:t(e.tag,c({class:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return Array.isArray(e)?t=t.concat(e):t.push(e),t},[])}(a.class,f),style:c({},a.style,p),attrs:c({},a.attrs,m)},v,{props:n}),o)}var f=!1;try{f=!0}catch(t){}function d(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?s({},t,e):{}}function p(t){return null===t?null:"object"===(void 0===t?"undefined":a(t))&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}var h={name:"FontAwesomeIcon",functional:!0,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:Number,default:null,validator:function(t){return[90,180,270].indexOf(t)>-1}},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1}},render:function(t,e){var r=e.props,o=r.icon,i=r.mask,a=r.symbol,l=p(o),h=d("classes",function(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},s(e,"fa-"+t.size,null!==t.size),s(e,"fa-rotate-"+t.rotation,null!==t.rotation),s(e,"fa-pull-"+t.pull,null!==t.pull),e);return Object.keys(n).map(function(t){return n[t]?t:null}).filter(function(t){return t})}(r)),m=d("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),v=d("mask",p(i)),g=n.icon(l,c({},h,m,v,{symbol:a}));if(!g)return function(){var t;!f&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find one or more icon(s)",l,v);var y=g.abstract;return u.bind(null,t)(y[0],{},e.data)}},m={name:"FontAwesomeLayers",functional:!0,props:{fixedWidth:{type:Boolean,default:!1}},render:function(t,e){var r,o,i=n.config.familyPrefix,a=e.data.staticClass,s=[i+"-layers"].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(e.props.fixedWidth?[i+"-fw"]:[]));return t("div",c({},e.data,{staticClass:(r=a,o=s,(0===(r||"").length?[]:[r]).concat(o).join(" "))}),e.children)}},v={name:"FontAwesomeLayersText",functional:!0,props:{value:{type:String,default:""},transform:{type:[String,Object],default:null}},render:function(t,e){var r=e.props,o=d("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),i=n.text(r.value,c({},o)).abstract;return u.bind(null,t)(i[0],{},e.data)}};e.FontAwesomeIcon=h,e.FontAwesomeLayers=m,e.FontAwesomeLayersText=v,Object.defineProperty(e,"__esModule",{value:!0})})(e,n("C/JF"))}).call(e,n("DuR2"))},U5ju:function(t,e,n){n("M6a0"),n("zQR9"),n("+tPU"),n("CXw9"),n("EqBC"),n("jKW+"),t.exports=n("FeBl").Promise},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},"VU/8":function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var l,u="function"==typeof s?s.options:s;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=r),l){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=l,u.render=function(t,e){return l.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:s,options:u}}},VWcm:function(t,e,n){"use strict";(function(e){t.exports=l;var r=n("cmvv"),o="undefined"!=typeof navigator&&!!navigator.userAgent,i=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),a=o&&navigator.userAgent.match(/Edge\/1[2345]/),s=null;function c(t){return s||(s=new t(function(t,e){function n(){t({u2f:null,native:!0})}return o?i?n():(void 0!==window.u2f&&"function"==typeof window.u2f.sign&&t({u2f:window.u2f,native:!0}),a?n():"http:"===location.protocol?n():"undefined"==typeof MessageChannel?n():void r.isSupported(function(e){e?t({u2f:r,native:!1}):n()})):n()})),s}function l(t){return{isSupported:function(){return c(this).then(function(t){return!!t.u2f})}.bind(t),ensureSupport:function(){return c(this).then(d)}.bind(t),register:function(t,e,n){var r=this;Array.isArray(t)||(t=[t]);"number"==typeof e&&void 0===n&&(n=e,e=null);e||(e=[]);return f(r,c(r).then(function(o){d(o);var i=o.native,a=o.u2f;return new r(function(r,o){if(i){var s=t[0].appId;a.register(s,t,e,function(t){t.errorCode?o(u("Registration failed",t)):(delete t.errorCode,r(t))},n)}else a.register(t,e,function(t,e){t?o(t):e.errorCode?o(u("Registration failed",e)):r(e)},n)})})).promise}.bind(t),sign:function(t,e){var n=this;Array.isArray(t)||(t=[t]);return f(n,c(n).then(function(r){d(r);var o=r.native,i=r.u2f;return new n(function(n,r){if(o){var a=t[0].appId,s=t[0].challenge;i.sign(a,s,t,function(t){t.errorCode?r(u("Sign failed",t)):(delete t.errorCode,n(t))},e)}else i.sign(t,function(t,e){t?r(t):e.errorCode?r(u("Sign failed",e)):n(e)},e)})})).promise}.bind(t),ErrorCodes:l.ErrorCodes,ErrorNames:l.ErrorNames}}function u(t,e){var n=null!=e?e.errorCode:1,r=l.ErrorNames[""+n],o=new Error(t);return o.metaData={type:r,code:n},o}function f(t,e){var n={};return n.promise=new t(function(t,r){n.resolve=t,n.reject=r,e.then(t,r)}),n.promise.cancel=function(e,r){c(t).then(function(t){r&&!t.native&&t.u2f.disconnect(),n.reject(u(e,{errorCode:-1}))})},n}function d(t){if(!t.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https");throw new Error("U2F not supported")}}function p(t){l[t]=function(){if(!e.Promise)throw new Error("The platform doesn't natively support promises");var n=[].slice.call(arguments);return l(e.Promise)[t].apply(null,n)}}l.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},l.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},p("isSupported"),p("ensureSupport"),p("register"),p("sign")}).call(e,n("DuR2"))},X3l8:function(t,e,n){var r=n("EuP9"),o=r.Buffer;function i(t,e){for(var n in t)e[n]=t[n]}function a(t,e,n){return o(t,e,n)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?t.exports=r:(i(r,e),e.Buffer=a),i(o,a),a.from=function(t,e,n){if("number"==typeof t)throw new TypeError("Argument must not be a number");return o(t,e,n)},a.alloc=function(t,e,n){if("number"!=typeof t)throw new TypeError("Argument must be a number");var r=o(t);return void 0!==e?"string"==typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},a.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return o(t)},a.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return r.SlowBuffer(t)}},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},Xc4G:function(t,e,n){var r=n("lktj"),o=n("1kS7"),i=n("NpIQ");t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,s=n(t),c=i.f,l=0;s.length>l;)c.call(t,a=s[l++])&&e.push(a);return e}},Xxa5:function(t,e,n){t.exports=n("jyFz")},Yobk:function(t,e,n){var r=n("77Pl"),o=n("qio6"),i=n("xnc9"),a=n("ax3d")("IE_PROTO"),s=function(){},c=function(){var t,e=n("ON07")("iframe"),r=i.length;for(e.style.display="none",n("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},ZaQb:function(t,e,n){var r=n("EqjI"),o=n("77Pl"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("+ZMJ")(Function.call,n("LKZe").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},Zr1r:function(t,e){t.exports="data:image/png;base64,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6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiAhkFKwnJ7tx6AAAgAElEQVR42uzdd3gV1boG8HfN7NkpJEBIAgkt9N57EQTEgkoRCSUBC2ogQYFgvccG9gahaIJgQY8kaGzHhooKoghIE0LvTVoSILQks2dm3T9Q9HiUzE7bJe/veXiec72zJ3t/U7751qwCEBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER2TN13jwGgWwTDAERUfH06dMHy5Yt+5//PiphQrhQnTFCoKaUIkoIGQ2JCECESYEwIVEFAkEAggDp/O1WLAFZKCHOQyJXCHlYSmyV0voqY+6sHYw2MaETEZWyEQkTqqmqsyWAJgCaCCGa/Pa/6wEILvU/KHFGCuu+9NSZ80fdOQkZr83iQSAmdCKifzJgwD1YvHjOpf97eOLkcIcUnaCITgJoI4HWAJp76sYpJb5KT5tx3T+1DBATOhFRhRc/fnI1KOJKaYneUNBTSHT2xjuklPLV9LSU8TxixIRORBXSoLFj8ckbb1z6v+OSpnSHJXsLRfQG0Adl0VReRjRNu6JJy9Yr/pUwmgeWmNCJqALp10/EN213gxTyRgHRH0BDX/45gYGBOa/PeCaSB5aY0InI78UlJneHwI0CYiAuvvv2G5ZloXHTZmNqVK/xzoT4m3iwiQmdiHxbn9tuw7IFCwAAo8ZNaSQUa7AQykAAV/r7bw+PiDg0+4l/1eVZQEzoROSblfe4iUh/dfbF/z0++QohMFIKESeAsIoUB8uyMHTE8A71Q50bOnXqxBODmNCJyPuNHD8Zi+bOBADEJ04ZBCHHAGKYL/0GKeX//IMEJOQfN2QhIISAw+Gwtb/omrXemP7ofXfwDCEAcDAEROSNYm+/B5lvXhwTrghxbXzSlDsAxHpjLWJZ1qV/UkqE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"},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Zx67:function(t,e,n){t.exports={default:n("fS6E"),__esModule:!0}},Zy68:function(t,e,n){"use strict";var r=function(t,e){return e||(e={}),t.split("").forEach(function(t,n){t in e||(e[t]=n)}),e},o={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",charmap:{0:14,1:8}};o.charmap=r(o.alphabet,o.charmap);var i={alphabet:"0123456789ABCDEFGHJKMNPQRSTVWXYZ",charmap:{O:0,I:1,L:1}};i.charmap=r(i.alphabet,i.charmap);var a={alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",charmap:{}};function s(t){if(this.buf=[],this.shift=8,this.carry=0,t){switch(t.type){case"rfc4648":this.charmap=e.rfc4648.charmap;break;case"crockford":this.charmap=e.crockford.charmap;break;case"base32hex":this.charmap=e.base32hex.charmap;break;default:throw new Error("invalid type")}t.charmap&&(this.charmap=t.charmap)}}function c(t){if(this.buf="",this.shift=3,this.carry=0,t){switch(t.type){case"rfc4648":this.alphabet=e.rfc4648.alphabet;break;case"crockford":this.alphabet=e.crockford.alphabet;break;case"base32hex":this.alphabet=e.base32hex.alphabet;break;default:throw new Error("invalid type")}t.alphabet?this.alphabet=t.alphabet:t.lc&&(this.alphabet=this.alphabet.toLowerCase())}}a.charmap=r(a.alphabet,a.charmap),s.prototype.charmap=o.charmap,s.prototype.write=function(t){var e=this.charmap,n=this.buf,r=this.shift,o=this.carry;return t.toUpperCase().split("").forEach(function(t){if("="!=t){var i=255&e[t];(r-=5)>0?o|=i<<r:r<0?(n.push(o|i>>-r),o=i<<(r+=8)&255):(n.push(o|i),r=8,o=0)}}),this.shift=r,this.carry=o,this},s.prototype.finalize=function(t){return t&&this.write(t),8!==this.shift&&0!==this.carry&&(this.buf.push(this.carry),this.shift=8,this.carry=0),this.buf},c.prototype.alphabet=o.alphabet,c.prototype.write=function(t){var e,n,r,o=this.shift,i=this.carry;for(r=0;r<t.length;r++)e=i|(n=t[r])>>o,this.buf+=this.alphabet[31&e],o>5&&(e=n>>(o-=5),this.buf+=this.alphabet[31&e]),i=n<<(o=5-o),o=8-o;return this.shift=o,this.carry=i,this},c.prototype.finalize=function(t){return t&&this.write(t),3!==this.shift&&(this.buf+=this.alphabet[31&this.carry],this.shift=3,this.carry=0),this.buf},e.encode=function(t,e){return new c(e).finalize(t)},e.decode=function(t,e){return new s(e).finalize(t)},e.Decoder=s,e.Encoder=c,e.charmap=r,e.crockford=i,e.rfc4648=o,e.base32hex=a},Zzip:function(t,e,n){t.exports={default:n("/n6Q"),__esModule:!0}},aY2F:function(t,e,n){var r=n("LC74"),o=n("C015"),i=n("CzQx"),a=n("X3l8").Buffer,s=new Array(160);function c(){this.init(),this._w=s,i.call(this,128,112)}r(c,o),c.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},c.prototype._hash=function(){var t=a.allocUnsafe(48);function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=c},ax3d:function(t,e,n){var r=n("e8AB")("keys"),o=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=o(t))}},bOdI:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("C4MV"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},bRrM:function(t,e,n){"use strict";var r=n("7KvD"),o=n("FeBl"),i=n("evD5"),a=n("+E39"),s=n("dSzd")("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];a&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},"c/Tr":function(t,e,n){t.exports={default:n("5zde"),__esModule:!0}},cmvv:function(t,e,n){"use strict";var r=r||{};t.exports=r,r.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",r.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},r.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},r.Request,r.Response,r.Error,r.SignRequest,r.SignResponse,r.RegisterRequest,r.RegisterResponse,r.disconnect=function(){r.port_&&r.port_.port_&&(r.port_.port_.disconnect(),r.port_=null)},r.getMessagePort=function(t){if("undefined"!=typeof chrome&&chrome.runtime){var e={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]};chrome.runtime.sendMessage(r.EXTENSION_ID,e,function(){chrome.runtime.lastError?r.getIframePort_(t):r.getChromeRuntimePort_(t)})}else r.getIframePort_(t)},r.getChromeRuntimePort_=function(t){var e=chrome.runtime.connect(r.EXTENSION_ID,{includeTlsChannelId:!0});setTimeout(function(){t(null,new r.WrappedChromeRuntimePort_(e))},0)},r.WrappedChromeRuntimePort_=function(t){this.port_=t},r.WrappedChromeRuntimePort_.prototype.postMessage=function(t){this.port_.postMessage(t)},r.WrappedChromeRuntimePort_.prototype.addEventListener=function(t,e){var n=t.toLowerCase();"message"==n||"onmessage"==n?this.port_.onMessage.addListener(function(t){e({data:t})}):console.error("WrappedChromeRuntimePort only supports onMessage")},r.getIframePort_=function(t){var e="chrome-extension://"+r.EXTENSION_ID,n=document.createElement("iframe");n.src=e+"/u2f-comms.html",n.setAttribute("style","display:none"),document.body.appendChild(n);var o=!1,i=new MessageChannel,a=function(e){"ready"==e.data?(i.port1.removeEventListener("message",a),o||(o=!0,t(null,i.port1))):console.error('First event on iframe port was not "ready"')};i.port1.addEventListener("message",a),i.port1.start(),n.addEventListener("load",function(){n.contentWindow.postMessage("init",e,[i.port2])}),setTimeout(function(){o||(o=!0,t(new Error("IFrame extension not supported")))},200)},r.EXTENSION_TIMEOUT_SEC=30,r.port_=null,r.waitingForPort_=[],r.reqCounter_=0,r.callbackMap_={},r.getPortSingleton_=function(t){r.port_?t(null,r.port_):(0==r.waitingForPort_.length&&r.getMessagePort(function(t,e){for(t||(r.port_=e,r.port_.addEventListener("message",r.responseHandler_));r.waitingForPort_.length;)r.waitingForPort_.shift()(t,e)}),r.waitingForPort_.push(t))},r.responseHandler_=function(t){var e=t.data,n=e.requestId;if(n&&r.callbackMap_[n]){var o=r.callbackMap_[n];delete r.callbackMap_[n],o(null,e.responseData)}else console.error("Unknown or missing requestId in response.")},r.isSupported=function(t){r.getPortSingleton_(function(e,n){t(!e)})},r.sign=function(t,e,n){r.getPortSingleton_(function(o,i){if(o)return e(o);var a=++r.reqCounter_;r.callbackMap_[a]=e;var s={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:t,timeoutSeconds:void 0!==n?n:r.EXTENSION_TIMEOUT_SEC,requestId:a};i.postMessage(s)})},r.register=function(t,e,n,o){r.getPortSingleton_(function(i,a){if(i)return n(i);var s=++r.reqCounter_;r.callbackMap_[s]=n;var c={type:r.MessageTypes.U2F_REGISTER_REQUEST,signRequests:e,registerRequests:t,timeoutSeconds:void 0!==o?o:r.EXTENSION_TIMEOUT_SEC,requestId:s};a.postMessage(c)})}},crlp:function(t,e,n){var r=n("7KvD"),o=n("FeBl"),i=n("O4g8"),a=n("Kh4W"),s=n("evD5").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},dSzd:function(t,e,n){var r=n("e8AB")("wks"),o=n("3Eo+"),i=n("7KvD").Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},dY0y:function(t,e,n){var r=n("dSzd")("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},e6n0:function(t,e,n){var r=n("evD5").f,o=n("D2L2"),i=n("dSzd")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},e8AB:function(t,e,n){var r=n("FeBl"),o=n("7KvD"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("O4g8")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,e,n){var r=n("77Pl"),o=n("SfB7"),i=n("MmMw"),a=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("//Fk"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,n){return function r(o,a){try{var s=e[o](a),c=s.value}catch(t){return void n(t)}if(!s.done)return i.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},exh5:function(t,e,n){var r=n("kM2E");r(r.S,"Object",{setPrototypeOf:n("ZaQb").set})},fBQ2:function(t,e,n){"use strict";var r=n("evD5"),o=n("X8DO");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},fJUb:function(t,e,n){var r=n("77Pl"),o=n("EqjI"),i=n("qARP");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},fS6E:function(t,e,n){n("Kh5d"),t.exports=n("FeBl").Object.getPrototypeOf},fWfb:function(t,e,n){"use strict";var r=n("7KvD"),o=n("D2L2"),i=n("+E39"),a=n("kM2E"),s=n("880/"),c=n("06OY").KEY,l=n("S82l"),u=n("e8AB"),f=n("e6n0"),d=n("3Eo+"),p=n("dSzd"),h=n("Kh4W"),m=n("crlp"),v=n("Xc4G"),g=n("7UMu"),y=n("77Pl"),b=n("EqjI"),_=n("TcQ7"),A=n("MmMw"),w=n("X8DO"),E=n("Yobk"),C=n("Rrel"),x=n("LKZe"),k=n("evD5"),S=n("lktj"),O=x.f,T=k.f,B=C.f,N=r.Symbol,I=r.JSON,R=I&&I.stringify,M=p("_hidden"),P=p("toPrimitive"),L={}.propertyIsEnumerable,z=u("symbol-registry"),D=u("symbols"),j=u("op-symbols"),U=Object.prototype,F="function"==typeof N,K=r.QObject,V=!K||!K.prototype||!K.prototype.findChild,Z=i&&l(function(){return 7!=E(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=O(U,e);r&&delete U[e],T(t,e,n),r&&t!==U&&T(U,e,r)}:T,q=function(t){var e=D[t]=E(N.prototype);return e._k=t,e},X=F&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},Y=function(t,e,n){return t===U&&Y(j,e,n),y(t),e=A(e,!0),y(n),o(D,e)?(n.enumerable?(o(t,M)&&t[M][e]&&(t[M][e]=!1),n=E(n,{enumerable:w(0,!1)})):(o(t,M)||T(t,M,w(1,{})),t[M][e]=!0),Z(t,e,n)):T(t,e,n)},G=function(t,e){y(t);for(var n,r=v(e=_(e)),o=0,i=r.length;i>o;)Y(t,n=r[o++],e[n]);return t},H=function(t){var e=L.call(this,t=A(t,!0));return!(this===U&&o(D,t)&&!o(j,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,M)&&this[M][t])||e)},Q=function(t,e){if(t=_(t),e=A(e,!0),t!==U||!o(D,e)||o(j,e)){var n=O(t,e);return!n||!o(D,e)||o(t,M)&&t[M][e]||(n.enumerable=!0),n}},J=function(t){for(var e,n=B(_(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==M||e==c||r.push(e);return r},W=function(t){for(var e,n=t===U,r=B(n?j:_(t)),i=[],a=0;r.length>a;)!o(D,e=r[a++])||n&&!o(U,e)||i.push(D[e]);return i};F||(s((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===U&&e.call(j,n),o(this,M)&&o(this[M],t)&&(this[M][t]=!1),Z(this,t,w(1,n))};return i&&V&&Z(U,t,{configurable:!0,set:e}),q(t)}).prototype,"toString",function(){return this._k}),x.f=Q,k.f=Y,n("n0T6").f=C.f=J,n("NpIQ").f=H,n("1kS7").f=W,i&&!n("O4g8")&&s(U,"propertyIsEnumerable",H,!0),h.f=function(t){return q(p(t))}),a(a.G+a.W+a.F*!F,{Symbol:N});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)p($[tt++]);for(var et=S(p.store),nt=0;et.length>nt;)m(et[nt++]);a(a.S+a.F*!F,"Symbol",{for:function(t){return o(z,t+="")?z[t]:z[t]=N(t)},keyFor:function(t){if(!X(t))throw TypeError(t+" is not a symbol!");for(var e in z)if(z[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!F,"Object",{create:function(t,e){return void 0===e?E(t):G(E(t),e)},defineProperty:Y,defineProperties:G,getOwnPropertyDescriptor:Q,getOwnPropertyNames:J,getOwnPropertySymbols:W}),I&&a(a.S+a.F*(!F||l(function(){var t=N();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!X(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,R.apply(I,r)}}),N.prototype[P]||n("hJx8")(N.prototype,P,N.prototype.valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},fkB2:function(t,e,n){var r=n("UuGF"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},fxRn:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("g8Ux")},g8Ux:function(t,e,n){var r=n("77Pl"),o=n("3fs2");t.exports=n("FeBl").getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},h65t:function(t,e,n){var r=n("UuGF"),o=n("52gC");t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},hJx8:function(t,e,n){var r=n("evD5"),o=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"i/C/":function(t,e,n){n("exh5"),t.exports=n("FeBl").Object.setPrototypeOf},iUbK:function(t,e,n){var r=n("7KvD").navigator;t.exports=r&&r.userAgent||""},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},"jKW+":function(t,e,n){"use strict";var r=n("kM2E"),o=n("qARP"),i=n("dNDb");r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},kM2E:function(t,e,n){var r=n("7KvD"),o=n("FeBl"),i=n("+ZMJ"),a=n("hJx8"),s=n("D2L2"),c=function(t,e,n){var l,u,f,d=t&c.F,p=t&c.G,h=t&c.S,m=t&c.P,v=t&c.B,g=t&c.W,y=p?o:o[e]||(o[e]={}),b=y.prototype,_=p?r:h?r[e]:(r[e]||{}).prototype;for(l in p&&(n=e),n)(u=!d&&_&&void 0!==_[l])&&s(y,l)||(f=u?_[l]:n[l],y[l]=p&&"function"!=typeof _[l]?n[l]:v&&u?i(f,r):g&&_[l]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?i(Function.call,f):f,m&&((y.virtual||(y.virtual={}))[l]=f,t&c.R&&b&&!b[l]&&a(b,l,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},kiBT:function(t,e,n){t.exports={default:n("i/C/"),__esModule:!0}},knuC:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lXn8:function(t,e,n){var r=n("LC74"),o=n("zvjZ"),i=n("CzQx"),a=n("X3l8").Buffer,s=new Array(64);function c(){this.init(),this._w=s,i.call(this,64,56)}r(c,o),c.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},c.prototype._hash=function(){var t=a.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=c},lajm:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r=h(n("//Fk")),o=h(n("pFYg")),i=h(n("Zx67")),a=h(n("Xxa5")),s=h(n("exGp")),c=h(n("Zrlr")),l=h(n("zwoO")),u=h(n("wxAW")),f=h(n("Pf15")),d=n("qAOn"),p=n("zVEA");function h(t){return t&&t.__esModule?t:{default:t}}var m=function(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},v=function(t){return t.replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*t.length%4)};function g(e,n,r,o){var i=function(e,n){for(var r=t.alloc(e.length),o=0;o<e.length;o++)r[o]=e[o]^n[o%n.length];return r}(e,o),a=t.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),s={version:"U2F_V2",keyHandle:m(i.toString("base64")),challenge:m(a.toString("base64")),appId:location.origin};return r&&r("=> "+e.toString("hex")),(0,d.sign)(s,n/1e3).then(function(e){var n=e.signatureData;if("string"==typeof n){var o=t.from(v(n),"base64").slice(5);return r&&r("<= "+o.toString("hex")),o}throw e})}var y=[];var b=function(e){function n(){(0,c.default)(this,n);var t=(0,l.default)(this,(n.__proto__||(0,i.default)(n)).call(this));return y.push(t),t}return(0,f.default)(n,e),(0,u.default)(n,null,[{key:"open",value:function(){var t=(0,s.default)(a.default.mark(function t(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new n);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),(0,u.default)(n,[{key:"exchange",value:function(){var t=(0,s.default)(a.default.mark(function t(e){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e,this.exchangeTimeout,this.debug,this.scrambleKey);case 3:return t.abrupt("return",t.sent);case 6:if(t.prev=6,t.t0=t.catch(0),!("object"===(0,o.default)(t.t0.metaData))){t.next=14;break}throw 5===t.t0.metaData.code&&(y.forEach(function(t){return t.emit("disconnect")}),y=[]),n=t.t0,r="Failed to sign with Ledger device: U2F "+t.t0.metaData.type,i="U2F_"+t.t0.metaData.code,a=void 0,(a=new p.TransportError(r,i)).originalError=n,a;case 14:throw t.t0;case 15:case"end":return t.stop()}var n,r,i,a},t,this,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(e){this.scrambleKey=t.from(e,"ascii")}},{key:"close",value:function(){var t=y.indexOf(this);if(-1===t)throw new Error("invalid transport instance");return y.splice(t,1),r.default.resolve()}}]),n}(h(p).default);b.isSupported=d.isSupported,b.list=function(){return(0,d.isSupported)().then(function(t){return t?[null]:[]})},b.listen=function(t){var e=!1;return(0,d.isSupported)().then(function(n){e||(n?(t.next({type:"add",descriptor:null}),t.complete()):t.error(new p.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))}),{unsubscribe:function(){e=!0}}},e.default=b}).call(e,n("EuP9").Buffer)},lktj:function(t,e,n){var r=n("Ibhu"),o=n("xnc9");t.exports=Object.keys||function(t){return r(t,o)}},mB6w:function(t,e,n){(function(t,n){var r=200,o="__lodash_hash_undefined__",i=800,a=16,s=9007199254740991,c="[object Arguments]",l="[object AsyncFunction]",u="[object Function]",f="[object GeneratorFunction]",d="[object Null]",p="[object Object]",h="[object Proxy]",m="[object Undefined]",v=/^\[object .+?Constructor\]$/,g=/^(?:0|[1-9]\d*)$/,y={};y["[object Float32Array]"]=y["[object Float64Array]"]=y["[object Int8Array]"]=y["[object Int16Array]"]=y["[object Int32Array]"]=y["[object Uint8Array]"]=y["[object Uint8ClampedArray]"]=y["[object Uint16Array]"]=y["[object Uint32Array]"]=!0,y[c]=y["[object Array]"]=y["[object ArrayBuffer]"]=y["[object Boolean]"]=y["[object DataView]"]=y["[object Date]"]=y["[object Error]"]=y[u]=y["[object Map]"]=y["[object Number]"]=y[p]=y["[object RegExp]"]=y["[object Set]"]=y["[object String]"]=y["[object WeakMap]"]=!1;var b="object"==typeof t&&t&&t.Object===Object&&t,_="object"==typeof self&&self&&self.Object===Object&&self,A=b||_||Function("return this")(),w="object"==typeof e&&e&&!e.nodeType&&e,E=w&&"object"==typeof n&&n&&!n.nodeType&&n,C=E&&E.exports===w,x=C&&b.process,k=function(){try{return x&&x.binding&&x.binding("util")}catch(t){}}(),S=k&&k.isTypedArray;function O(t,e){return"__proto__"==e?void 0:t[e]}var T,B,N,I=Array.prototype,R=Function.prototype,M=Object.prototype,P=A["__core-js_shared__"],L=R.toString,z=M.hasOwnProperty,D=(T=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",j=M.toString,U=L.call(Object),F=RegExp("^"+L.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),K=C?A.Buffer:void 0,V=A.Symbol,Z=A.Uint8Array,q=K?K.allocUnsafe:void 0,X=(B=Object.getPrototypeOf,N=Object,function(t){return B(N(t))}),Y=Object.create,G=M.propertyIsEnumerable,H=I.splice,Q=V?V.toStringTag:void 0,J=function(){try{var t=wt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),W=K?K.isBuffer:void 0,$=Math.max,tt=Date.now,et=wt(A,"Map"),nt=wt(Object,"create"),rt=function(){function t(){}return function(e){if(!Rt(e))return{};if(Y)return Y(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function at(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function st(t){var e=this.__data__=new it(t);this.size=e.size}function ct(t,e){var n=Ot(t),r=!n&&St(t),o=!n&&!r&&Bt(t),i=!n&&!r&&!o&&Pt(t),a=n||r||o||i,s=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=s.length;for(var l in t)!e&&!z.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Et(l,c))||s.push(l);return s}function lt(t,e,n){(void 0===n||kt(t[e],n))&&(void 0!==n||e in t)||dt(t,e,n)}function ut(t,e,n){var r=t[e];z.call(t,e)&&kt(r,n)&&(void 0!==n||e in t)||dt(t,e,n)}function ft(t,e){for(var n=t.length;n--;)if(kt(t[n][0],e))return n;return-1}function dt(t,e,n){"__proto__"==e&&J?J(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}ot.prototype.clear=function(){this.__data__=nt?nt(null):{},this.size=0},ot.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot.prototype.get=function(t){var e=this.__data__;if(nt){var n=e[t];return n===o?void 0:n}return z.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return nt?void 0!==e[t]:z.call(e,t)},ot.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=nt&&void 0===e?o:e,this},it.prototype.clear=function(){this.__data__=[],this.size=0},it.prototype.delete=function(t){var e=this.__data__,n=ft(e,t);return!(n<0||(n==e.length-1?e.pop():H.call(e,n,1),--this.size,0))},it.prototype.get=function(t){var e=this.__data__,n=ft(e,t);return n<0?void 0:e[n][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var n=this.__data__,r=ft(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},at.prototype.clear=function(){this.size=0,this.__data__={hash:new ot,map:new(et||it),string:new ot}},at.prototype.delete=function(t){var e=At(this,t).delete(t);return this.size-=e?1:0,e},at.prototype.get=function(t){return At(this,t).get(t)},at.prototype.has=function(t){return At(this,t).has(t)},at.prototype.set=function(t,e){var n=At(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},st.prototype.clear=function(){this.__data__=new it,this.size=0},st.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},st.prototype.get=function(t){return this.__data__.get(t)},st.prototype.has=function(t){return this.__data__.has(t)},st.prototype.set=function(t,e){var n=this.__data__;if(n instanceof it){var o=n.__data__;if(!et||o.length<r-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new at(o)}return n.set(t,e),this.size=n.size,this};var pt,ht=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var s=i[pt?a:++r];if(!1===e(o[s],s,o))break}return t};function mt(t){return null==t?void 0===t?m:d:Q&&Q in Object(t)?function(t){var e=z.call(t,Q),n=t[Q];try{t[Q]=void 0;var r=!0}catch(t){}var o=j.call(t);r&&(e?t[Q]=n:delete t[Q]);return o}(t):function(t){return j.call(t)}(t)}function vt(t){return Mt(t)&&mt(t)==c}function gt(t){return!(!Rt(t)||D&&D in t)&&(Nt(t)?F:v).test(function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function yt(t){if(!Rt(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=Ct(t),n=[];for(var r in t)("constructor"!=r||!e&&z.call(t,r))&&n.push(r);return n}function bt(t,e,n,r,o){t!==e&&ht(e,function(i,a){if(Rt(i))o||(o=new st),function(t,e,n,r,o,i,a){var s=O(t,n),c=O(e,n),l=a.get(c);if(l)return void lt(t,n,l);var u=i?i(s,c,n+"",t,e,a):void 0,f=void 0===u;if(f){var d=Ot(c),h=!d&&Bt(c),m=!d&&!h&&Pt(c);u=c,d||h||m?Ot(s)?u=s:Mt(_=s)&&Tt(_)?u=function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(s):h?(f=!1,u=function(t,e){if(e)return t.slice();var n=t.length,r=q?q(n):new t.constructor(n);return t.copy(r),r}(c,!0)):m?(f=!1,v=c,g=!0?(y=v.buffer,b=new y.constructor(y.byteLength),new Z(b).set(new Z(y)),b):v.buffer,u=new v.constructor(g,v.byteOffset,v.length)):u=[]:function(t){if(!Mt(t)||mt(t)!=p)return!1;var e=X(t);if(null===e)return!0;var n=z.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&L.call(n)==U}(c)||St(c)?(u=s,St(s)?u=function(t){return function(t,e,n,r){var o=!n;n||(n={});var i=-1,a=e.length;for(;++i<a;){var s=e[i],c=r?r(n[s],t[s],s,n,t):void 0;void 0===c&&(c=t[s]),o?dt(n,s,c):ut(n,s,c)}return n}(t,Lt(t))}(s):(!Rt(s)||r&&Nt(s))&&(u=function(t){return"function"!=typeof t.constructor||Ct(t)?{}:rt(X(t))}(c))):f=!1}var v,g,y,b;var _;f&&(a.set(c,u),o(u,c,r,i,a),a.delete(c));lt(t,n,u)}(t,e,a,n,bt,r,o);else{var s=r?r(O(t,a),i,a+"",t,e,o):void 0;void 0===s&&(s=i),lt(t,a,s)}},Lt)}function _t(t,e){return xt(function(t,e,n){return e=$(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=$(r.length-e,0),a=Array(i);++o<i;)a[o]=r[e+o];o=-1;for(var s=Array(e+1);++o<e;)s[o]=r[o];return s[e]=n(a),function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,s)}}(t,e,jt),t+"")}function At(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function wt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return gt(n)?n:void 0}function Et(t,e){var n=typeof t;return!!(e=null==e?s:e)&&("number"==n||"symbol"!=n&&g.test(t))&&t>-1&&t%1==0&&t<e}function Ct(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||M)}var xt=function(t){var e=0,n=0;return function(){var r=tt(),o=a-(r-n);if(n=r,o>0){if(++e>=i)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(J?function(t,e){return J(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:jt);function kt(t,e){return t===e||t!=t&&e!=e}var St=vt(function(){return arguments}())?vt:function(t){return Mt(t)&&z.call(t,"callee")&&!G.call(t,"callee")},Ot=Array.isArray;function Tt(t){return null!=t&&It(t.length)&&!Nt(t)}var Bt=W||function(){return!1};function Nt(t){if(!Rt(t))return!1;var e=mt(t);return e==u||e==f||e==l||e==h}function It(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=s}function Rt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Mt(t){return null!=t&&"object"==typeof t}var Pt=S?function(t){return function(e){return t(e)}}(S):function(t){return Mt(t)&&It(t.length)&&!!y[mt(t)]};function Lt(t){return Tt(t)?ct(t,!0):yt(t)}var zt,Dt=(zt=function(t,e,n){bt(t,e,n)},_t(function(t,e){var n=-1,r=e.length,o=r>1?e[r-1]:void 0,i=r>2?e[2]:void 0;for(o=zt.length>3&&"function"==typeof o?(r--,o):void 0,i&&function(t,e,n){if(!Rt(n))return!1;var r=typeof e;return!!("number"==r?Tt(n)&&Et(e,n.length):"string"==r&&e in n)&&kt(n[e],t)}(e[0],e[1],i)&&(o=r<3?void 0:o,r=1),t=Object(t);++n<r;){var a=e[n];a&&zt(t,a,n,o)}return t}));function jt(t){return t}n.exports=Dt}).call(e,n("DuR2"),n("3IRH")(t))},mClu:function(t,e,n){var r=n("kM2E");r(r.S+r.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},mZf6:function(t,e){t.exports={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]}},msXi:function(t,e,n){var r=n("77Pl");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},n0T6:function(t,e,n){var r=n("Ibhu"),o=n("xnc9").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},oM7Q:function(t,e,n){n("sF+V");var r=n("FeBl").Object;t.exports=function(t,e){return r.create(t,e)}},pFYg:function(t,e,n){"use strict";e.__esModule=!0;var r=a(n("Zzip")),o=a(n("5QVw")),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function a(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},qAOn:function(t,e,n){"use strict";t.exports=n("VWcm")},qARP:function(t,e,n){"use strict";var r=n("lOnJ");t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},qio6:function(t,e,n){var r=n("evD5"),o=n("77Pl"),i=n("lktj");t.exports=n("+E39")?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,c=0;s>c;)r.f(t,n=a[c++],e[n]);return t}},qyJz:function(t,e,n){"use strict";var r=n("+ZMJ"),o=n("kM2E"),i=n("sB3e"),a=n("msXi"),s=n("Mhyx"),c=n("QRG4"),l=n("fBQ2"),u=n("3fs2");o(o.S+o.F*!n("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,f,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,g=0,y=u(d);if(v&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&s(y))for(n=new p(e=c(d.length));e>g;g++)l(n,g,v?m(d[g],g):d[g]);else for(f=y.call(d),n=new p;!(o=f.next()).done;g++)l(n,g,v?a(f,m,[o.value,g],!0):o.value);return n.length=g,n}})},rjj0:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n("tTVk"),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function v(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(p){var o=c++;r=s||(s=m()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=m(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(d,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){l=n,f=r||{};var a=o(t,e);return h(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=i[s.id]).refs--,n.push(c)}e?h(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}};var g,y=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},"sF+V":function(t,e,n){var r=n("kM2E");r(r.S,"Object",{create:n("Yobk")})},sOR5:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},t8x9:function(t,e,n){var r=n("77Pl"),o=n("lOnJ"),i=n("dSzd")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},tTVk:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},ujcs:function(t,e){e.read=function(t,e,n,r,o){var i,a,s=8*o-r-1,c=(1<<s)-1,l=c>>1,u=-7,f=n?o-1:0,d=n?-1:1,p=t[e+f];for(f+=d,i=p&(1<<-u)-1,p>>=-u,u+=s;u>0;i=256*i+t[e+f],f+=d,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=r;u>0;a=256*a+t[e+f],f+=d,u-=8);if(0===i)i=1-l;else{if(i===c)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,r),i-=l}return(p?-1:1)*a*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var a,s,c,l=8*i-o-1,u=(1<<l)-1,f=u>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:i-1,h=r?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=u):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),(e+=a+f>=1?d/c:d*Math.pow(2,1-f))*c>=2&&(a++,c/=2),a+f>=u?(s=0,a=u):a+f>=1?(s=(e*c-1)*Math.pow(2,o),a+=f):(s=e*Math.pow(2,f-1)*Math.pow(2,o),a=0));o>=8;t[n+p]=255&s,p+=h,s/=256,o-=8);for(a=a<<o|s,l+=o;l>0;t[n+p]=255&a,p+=h,a/=256,l-=8);t[n+p-h]|=128*m}},uqUo:function(t,e,n){var r=n("kM2E"),o=n("FeBl"),i=n("S82l");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},"vFc/":function(t,e,n){var r=n("TcQ7"),o=n("QRG4"),i=n("fkB2");t.exports=function(t){return function(e,n,a){var s,c=r(e),l=o(c.length),u=i(a,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},"vIB/":function(t,e,n){"use strict";var r=n("O4g8"),o=n("kM2E"),i=n("880/"),a=n("hJx8"),s=n("/bQp"),c=n("94VQ"),l=n("e6n0"),u=n("PzxK"),f=n("dSzd")("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,m,v,g){c(n,e,h);var y,b,_,A=function(t){if(!d&&t in x)return x[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",E="values"==m,C=!1,x=t.prototype,k=x[f]||x["@@iterator"]||m&&x[m],S=k||A(m),O=m?E?A("entries"):S:void 0,T="Array"==e&&x.entries||k;if(T&&(_=u(T.call(new t)))!==Object.prototype&&_.next&&(l(_,w,!0),r||"function"==typeof _[f]||a(_,f,p)),E&&k&&"values"!==k.name&&(C=!0,S=function(){return k.call(this)}),r&&!g||!d&&!C&&x[f]||a(x,f,S),s[e]=S,s[w]=p,m)if(y={values:E?S:A("values"),keys:v?S:A("keys"),entries:O},g)for(b in y)b in x||i(x,b,y[b]);else o(o.P+o.F*(d||C),e,y);return y}},vzCy:function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function o(t){return"object"==typeof t&&null!==t}function i(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,a,s,c,l;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var u=new Error('Uncaught, unspecified "error" event. ('+e+")");throw u.context=e,u}if(i(n=this._events[t]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(o(n))for(s=Array.prototype.slice.call(arguments,1),a=(l=n.slice()).length,c=0;c<a;c++)l[c].apply(this,s);return!0},n.prototype.addListener=function(t,e){var a;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(a=i(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[t].length>a&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){if(!r(e))throw TypeError("listener must be a function");var n=!1;function o(){this.removeListener(t,o),n||(n=!0,e.apply(this,arguments))}return o.listener=e,this.on(t,o),this},n.prototype.removeListener=function(t,e){var n,i,a,s;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(a=(n=this._events[t]).length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(n)){for(s=a;s-- >0;)if(n[s]===e||n[s].listener&&n[s].listener===e){i=s;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[t]))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},wxAW:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("C4MV"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},xGkn:function(t,e,n){"use strict";var r=n("4mcu"),o=n("EGZi"),i=n("/bQp"),a=n("TcQ7");t.exports=n("vIB/")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},"xH/j":function(t,e,n){var r=n("hJx8");t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},zQR9:function(t,e,n){"use strict";var r=n("h65t")(!0);n("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},zVEA:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.StatusCodes=void 0;var r=p(n("//Fk")),o=p(n("woOf")),i=p(n("BO1k")),a=p(n("Gu7T")),s=p(n("Xxa5")),c=p(n("exGp")),l=p(n("Zrlr")),u=p(n("wxAW")),f=p(n("fZjL"));e.getAltStatusMessage=m,e.TransportError=v,e.TransportStatusError=g;var d=p(n("vzCy"));function p(t){return t&&t.__esModule?t:{default:t}}var h=e.StatusCodes={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function m(t){switch(t){case 26368:return"Incorrect length";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=t&&t<=28671)return"Internal error, please report"}function v(t,e){this.name="TransportError",this.message=t,this.stack=(new Error).stack,this.id=e}function g(t){this.name="TransportStatusError";var e=(0,f.default)(h).find(function(e){return h[e]===t})||"UNKNOWN_ERROR",n=m(t)||e,r=t.toString(16);this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=t,this.statusText=e}v.prototype=new Error,g.prototype=new Error;var y=function(){function e(){var n,r=this;(0,l.default)(this,e),this.debug=null,this.exchangeTimeout=3e4,this._events=new d.default,this.send=(n=(0,c.default)(s.default.mark(function e(n,o,i,a){var c,l,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:t.alloc(0),f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[h.OK];return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u.length>=256)){e.next=2;break}throw new v("data.length exceed 256 bytes limit. Got: "+u.length,"DataLengthTooBig");case 2:return e.next=4,r.exchange(t.concat([t.from([n,o,i,a]),t.from([u.length]),u]));case 4:if(c=e.sent,l=c.readUInt16BE(c.length-2),f.some(function(t){return t===l})){e.next=8;break}throw new g(l);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}},e,r)})),function(t,e,r,o){return n.apply(this,arguments)}),this._appAPIlock=null}return(0,u.default)(e,[{key:"on",value:function(t,e){this._events.on(t,e)}},{key:"off",value:function(t,e){this._events.removeListener(t,e)}},{key:"emit",value:function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=this._events).emit.apply(e,[t].concat((0,a.default)(r)))}},{key:"setDebugMode",value:function(t){this.debug="function"==typeof t?t:t?function(t){return console.log(t)}:null}},{key:"setExchangeTimeout",value:function(t){this.exchangeTimeout=t}},{key:"decorateAppAPIMethods",value:function(t,e,n){var r=!0,o=!1,a=void 0;try{for(var s,c=(0,i.default)(e);!(r=(s=c.next()).done);r=!0){var l=s.value;t[l]=this.decorateAppAPIMethod(l,t[l],t,n)}}catch(t){o=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}}},{key:"decorateAppAPIMethod",value:function(t,e,n,i){var a,l=this;return a=(0,c.default)(s.default.mark(function a(){for(var c=arguments.length,u=Array(c),f=0;f<c;f++)u[f]=arguments[f];var d,p;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(d=l._appAPIlock)){a.next=5;break}return p=new v("Ledger Device is busy (lock "+d+")","TransportLocked"),(0,o.default)(p,{currentLock:d,methodName:t}),a.abrupt("return",r.default.reject(p));case 5:return a.prev=5,l._appAPIlock=t,l.setScrambleKey(i),a.next=10,e.apply(n,u);case 10:return a.abrupt("return",a.sent);case 11:return a.prev=11,l._appAPIlock=null,a.finish(11);case 14:case"end":return a.stop()}},a,l,[[5,,11,14]])})),function(){return a.apply(this,arguments)}}}],[{key:"create",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;return new r.default(function(r,o){var i=!1,a=setTimeout(function(){s.unsubscribe(),o(new v(t.ErrorMessage_ListenTimeout,"ListenTimeout"))},n),s=t.listen({next:function(n){i=!0,s.unsubscribe(),clearTimeout(a),t.open(n.descriptor,e).then(r,o)},error:function(t){clearTimeout(a),o(t)},complete:function(){clearTimeout(a),i||o(new v(t.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}})})}}]),e}();y.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",y.ErrorMessage_NoDeviceFound="No Ledger device found",e.default=y}).call(e,n("EuP9").Buffer)},zvjZ:function(t,e,n){var r=n("LC74"),o=n("CzQx"),i=n("X3l8").Buffer,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=new Array(64);function c(){this.init(),this._w=s,o.call(this,64,56)}function l(t,e,n){return n^t&(e^n)}function u(t,e,n){return t&e|n&(t|e)}function f(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function d(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function p(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}r(c,o),c.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,o=0|this._b,i=0|this._c,s=0|this._d,c=0|this._e,h=0|this._f,m=0|this._g,v=0|this._h,g=0;g<16;++g)n[g]=t.readInt32BE(4*g);for(;g<64;++g)n[g]=0|(((e=n[g-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+n[g-7]+p(n[g-15])+n[g-16];for(var y=0;y<64;++y){var b=v+d(c)+l(c,h,m)+a[y]+n[y]|0,_=f(r)+u(r,o,i)|0;v=m,m=h,h=c,c=s+b|0,s=i,i=o,o=r,r=b+_|0}this._a=r+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0,this._f=h+this._f|0,this._g=m+this._g|0,this._h=v+this._h|0},c.prototype._hash=function(){var t=i.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=c},zwoO:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("pFYg"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}}}).default});
=======
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StellarCheckout"] = factory();
	else
		root["StellarCheckout"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	APP: {
		name: 'stellar-checkout.js'
	},
	CURRENCIES: ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "USD", "ZAR"],
	CLASS: {
		copied: 'stellar_checkout_copied',
		error: 'stellar_checkout_error',
		hidden: 'stellar_checkout_hidden',
		loaded: 'stellar_checkout_loaded',
		valid: 'stellar_checkout_valid'
	},
	CMCCLIENT: null,
	DTO: {
		env: null,
		invoice: {
			currency: 'USD',
			id: null,
			total: null
		},
		payment: {
			amount: null,
			asset: null,
			fee: null,
			from: null,
			memo: null,
			memoType: null,
			network: null,
			to: null
		}
	},
	LANG: 'en',
	MESSAGE_TYPE: {
		ERROR: 'ERROR',
		INFO: 'INFO',
		WARNING: 'WARNING'
	},
	SELECTOR: {
		clipBoardInput: '.stellar_checkout_txt',
		fieldErrorMessage: '.stellar_checkout_error_message',
		spinner: '.stellar_checkout_spinner'
	},
	STELLAR_CHECKOUT_API_TICKER_URL: 'https://stellarcheckout.azurewebsites.net/api/tickers/stellar',
	STELLAR_SDK_URL: 'https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/0.8.0/stellar-sdk.min.js',
	SUBMIT_BUTTON_STATE: {
		DISABLED: 'DISABLED',
		NORMAL: 'NORMAL',
		IN_PROGRESS: 'IN_PROGRESS',
		PAYMENT_COMPLETE: 'PAYMENT_COMPLETE'
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Version = __webpack_require__(23)
var Regex = __webpack_require__(24)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!Version.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	targetElem: {
		cssClass: 'stellar_checkout_container',
		elem: null,
		selector: ''
	},
	root: {
		selector: '#stellarCheckoutRoot',
		elem: null
	}
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cultures; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localizations_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizer__ = __webpack_require__(30);




var cultures = [
	'en',
	'cs-CZ',
	'da-DK',
	'de-DE',
	'es-ES',
	'fr-FR',
	'hu-HU',
	'id-ID',
	'it-IT',
	'ja-JP',
	'ko-KR',
	'pl-PL',
	'pt-BR',
	'ru-RU',
	'sv-SE',
	'th-TH',
	'tr-TR',
	'zh-CN',
	'zu-ZA'
];

/* harmony default export */ __webpack_exports__["b"] = ({
	init: function(lang) {
		this.localizer = new __WEBPACK_IMPORTED_MODULE_2__localizer__["a" /* Localizer */](lang, __WEBPACK_IMPORTED_MODULE_0__localizations_common__["a" /* common */]);
	}
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__(14)

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that
    if (buf === null) {
      buf = new Buffer(length)
    }
    buf.length = length
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(that, length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf)
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(that, len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(null, length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports = Buffer


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElementFromHTML;
function createElementFromHTML(tagName, htmlString) {
  var div = document.createElement(tagName);
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generator__ = __webpack_require__(33);



var _network;

function createDto(options) {

	_network = setNetwork(options.env);

	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.env = options.env;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency = options.currency;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total = options.total;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.asset = StellarSdk.Asset.native();
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.fee = .00001;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.memo = options.memo || Object(__WEBPACK_IMPORTED_MODULE_1__generator__["a" /* randomId */])(28);
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.memoType = StellarSdk.MemoHash;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.network = _network.network;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.to = options.destinationKey;

	return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO;
};

function buildTransaction(dto) {
	var server = new StellarSdk.Server(_network.uri);
	var destinationId = dto.payment.to;
	var transaction;

	return server.loadAccount(destinationId)
	.catch(StellarSdk.NotFoundError, function (error) {
		throw new Error('The destination account does not exist!');
	})
	.then(function() {
		return server.loadAccount(dto.payment.from);
	})
	.then(function(sourceAccount) {
		var builder = new StellarSdk
		.TransactionBuilder(sourceAccount)
		.addOperation(StellarSdk.Operation.payment({
			destination: destinationId,
			asset: dto.payment.asset,
			amount: dto.payment.amount
		}));
		if (dto.payment.memo) {
			var memo = dto.payment.memo;
			memo = StellarSdk.hash(memo);
			builder.addMemo(StellarSdk.Memo.hash(memo));	
		}
		transaction = builder.build();
		return transaction;
	});
};

function receivePayment(dto, callback) {
	var server = new StellarSdk.Server(_network.uri);
	var accountId = dto.payment.to;
	var now = new Date();
	var ledgerHeight;

	server.payments()
	.limit(1)
	.order('desc')
	.call()
	.then(function(response) {
		return response.records[0].transaction();
	})
	.then(function(lastTransaction) {
		ledgerHeight = lastTransaction.ledger_attr;

		var payments = server
		.payments()
		.forAccount(accountId)
		.cursor('now');

		return payments;

	}).then(function(payments) {

		var closeStream = payments.stream({
		  onmessage: function(payment) {
		  	if (payment.to !== accountId) {
		      return;
		    }
		    var asset = (payment.asset_type === 'native') ? 'lumens' : payment.asset_code + ':' + payment.asset_issuer;
		    
		    verifyPayment(now, ledgerHeight, dto, payment)
		    .then(function(result) {
		    	if (result) {
		    		callback.call(this, null, payment);	
		    		closeStream();
		    	}
	    		else {
	    			throw new Error('payment received. it wasn\'t our payment though...');
	    		}
		    });
		  },
		  onerror: function(error) {
		    console.error('Error in payment stream');
		  }
		});

		return closeStream;
	});
};

function setNetwork(env) {
	var uri;
	var network = StellarSdk.Network;
	if (typeof env === 'string' && env.toLowerCase() === 'production') {
		uri = 'https://horizon.stellar.org';
		network.usePublicNetwork();
	} else {
		uri = 'https://horizon-testnet.stellar.org';
		network.useTestNetwork();
	}
	return  {
		network: network.current(),
		uri: uri
	};
};

function verifyPayment(now, ledgerHeight, dto, payment) {
	var amountIsEqual = false;
	var ledgerHeightIsGood = false;
	var destinationKeyIsEqual = false;
	var memoIsEqual = false;
	var publicKeyIsEqual = false;
	var timeLooksGood = false;
	var server = new StellarSdk.Server(_network.uri);

	return server.transactions()
	.transaction(payment.transaction_hash)
	.call()
	.then(function (result) {
		amountIsEqual = parseFloat(dto.payment.amount) === parseFloat(payment.amount);
		ledgerHeightIsGood = result.ledger_attr > ledgerHeight;
		destinationKeyIsEqual = dto.payment.to === payment.to;
		memoIsEqual = StellarSdk.hash(dto.payment.memo).toString('base64') === result.memo;
		publicKeyIsEqual = dto.payment.from && payment.from === result.source_account;
		timeLooksGood = Date.parse(result.created_at) >= now.getTime();
		var result = amountIsEqual && ledgerHeightIsGood && destinationKeyIsEqual && memoIsEqual && publicKeyIsEqual && timeLooksGood;
		return result;
	})
	.catch(function (err) {
		console.log(err)
	})
};

/* harmony default export */ __webpack_exports__["a"] = ({
	buildTransaction: buildTransaction,
	createDto: createDto,
	receivePayment: receivePayment
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setButtonState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__l10n__ = __webpack_require__(4);



function setButtonState(target, state)  {
	var l = __WEBPACK_IMPORTED_MODULE_1__l10n__["b" /* default */].localizer;
	switch(state) {
		case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.DISABLED:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = l.localize('buttonStateDisabled', 'Enter payment info');
			break;
		case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.NORMAL:
			target.removeAttribute('disabled');
			target.innerHTML = l.localize('buttonStateNormal', 'Send payment');
			break;
		case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.IN_PROGRESS:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = l.localize('buttonStateInProgress', 'Confirming transaction...');
			break;
		case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.PAYMENT_COMPLETE:
			target.setAttribute('disabled', 'disabled');
			target.innerHTML = l.localize('buttonStatePaymentComplete', 'Payment complete');
			break;
		default:
			break;
	}
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiAhkFKwnJ7tx6AAAgAElEQVR42uzdd3gV1boG8HfN7NkpJEBIAgkt9N57EQTEgkoRCSUBC2ogQYFgvccG9gahaIJgQY8kaGzHhooKoghIE0LvTVoSILQks2dm3T9Q9HiUzE7bJe/veXiec72zJ3t/U7751qwCEBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER2TN13jwGgWwTDAERUfH06dMHy5Yt+5//PiphQrhQnTFCoKaUIkoIGQ2JCECESYEwIVEFAkEAggDp/O1WLAFZKCHOQyJXCHlYSmyV0voqY+6sHYw2MaETEZWyEQkTqqmqsyWAJgCaCCGa/Pa/6wEILvU/KHFGCuu+9NSZ80fdOQkZr83iQSAmdCKifzJgwD1YvHjOpf97eOLkcIcUnaCITgJoI4HWAJp76sYpJb5KT5tx3T+1DBATOhFRhRc/fnI1KOJKaYneUNBTSHT2xjuklPLV9LSU8TxixIRORBXSoLFj8ckbb1z6v+OSpnSHJXsLRfQG0Adl0VReRjRNu6JJy9Yr/pUwmgeWmNCJqALp10/EN213gxTyRgHRH0BDX/45gYGBOa/PeCaSB5aY0InI78UlJneHwI0CYiAuvvv2G5ZloXHTZmNqVK/xzoT4m3iwiQmdiHxbn9tuw7IFCwAAo8ZNaSQUa7AQykAAV/r7bw+PiDg0+4l/1eVZQEzoROSblfe4iUh/dfbF/z0++QohMFIKESeAsIoUB8uyMHTE8A71Q50bOnXqxBODmNCJyPuNHD8Zi+bOBADEJ04ZBCHHAGKYL/0GKeX//IMEJOQfN2QhIISAw+Gwtb/omrXemP7ofXfwDCEAcDAEROSNYm+/B5lvXhwTrghxbXzSlDsAxHpjLWJZ1qV/UkqE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"

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_form_events__ = __webpack_require__(47);


/* harmony default export */ __webpack_exports__["a"] = ({
	root: {
		elem: null,
		selector: '#paymentFormView'
	},
	total: {
		selector: '#stellarCheckoutTotal',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["c" /* onValidateTotal */],
			input: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["c" /* onValidateTotal */]
		}
	},
	totalLabel: {
		selector: '#stellarCheckoutTotalLabel',
		elem: null,
		l10nKey: 'labelTotal'
	},
	amount: {
		selector: '#stellarCheckoutAmount',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["a" /* onValidateAmount */],
			input: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["a" /* onValidateAmount */]
		}
	},
	amountLabel: {
		selector: '#stellarCheckoutAmountLabel',
		elem: null,
		l10nKey: 'labelAmount'
	},
	currencyConversionInfo: {
		selector: '#stellarCheckoutCurrencyConversionInfo',
		elem: null
	},
	publicKey: {
		selector: '#stellarCheckoutPublicKey',
		elem: null,
		events: {
			blur: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["b" /* onValidatePublicKey */],
			input: __WEBPACK_IMPORTED_MODULE_0__payment_form_events__["b" /* onValidatePublicKey */]
		}
	},
	publicKeyLabel: {
		selector: '#stellarCheckoutPublicKeyLabel',
		elem: null,
		l10nKey: 'labelPublicKey'
	},
	submitButton: {
		selector: '#stellarCheckoutSubmitButton',
		elem: null,
		l10nKey: 'submitButton'
	}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = replace;
function replace(text, search, replacement) {
    return text.replace(new RegExp(search, 'g'), replacement);
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_elems__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__l10n__ = __webpack_require__(4);





class BaseView {

	constructor(elems, template, localizations) {
		this.dto = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO;
		this.elems = elems;
		this.template = template;
		this.localizations = localizations;
		this.localizer = __WEBPACK_IMPORTED_MODULE_3__l10n__["b" /* default */].localizer;

		__WEBPACK_IMPORTED_MODULE_3__l10n__["b" /* default */].localizer.addLocalizations(localizations);

		this.create();
	}

	create() {
		// Compile the mustache template
		var compiledHtml = this.template(this.dto);

		// Append the compiled HTML to the DOM
		__WEBPACK_IMPORTED_MODULE_2__ui_elems__["a" /* default */].root.elem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["a" /* createElementFromHTML */])('div', compiledHtml));

		// Get a reference to all elems in this view
		for (var key in this.elems) {
			var item = this.elems[key];
			var el = item.elem = __WEBPACK_IMPORTED_MODULE_2__ui_elems__["a" /* default */].root.elem.querySelector(item.selector);
			if (el) {
				if (item.l10nKey && this.localizations) {
					el.innerHTML = __WEBPACK_IMPORTED_MODULE_3__l10n__["b" /* default */].localizer.localize(item.l10nKey, el.innerHTML);
				}
				for (var ev in item.events) {
					el.addEventListener(ev, item.events[ev]);
				}
			}
		}
	}

	destroy() {
		if (this.elems.root) {
			this.elems.root.elem.parentNode.removeChild(this.elems.root.elem);
		}
	}

	hide() {
		if (this.elems.root) {
			this.elems.root.elem.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
		}
	}

	show() {
		if (this.elems.root) {
			window.scrollTo(0, 0);
			this.elems.root.elem.classList.remove(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
		}
	}

	update() {
		
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseView;
;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = __webpack_require__(55);
Hogan.Template = __webpack_require__(56).Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = prevView;
/* unused harmony export nextView */
/* unused harmony export showView */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_style_css__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elems__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fonts__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_main_template_html__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_main_template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__templates_main_template_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_payment_form_view_payment_form_elems__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_payment_form_view__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_payment_awaiting_view__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_payment_complete_view__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_state__ = __webpack_require__(26);
















function create(options) {
	return new Promise(function(resolve, reject) {
		// Get the target elem
		var targetElem = __WEBPACK_IMPORTED_MODULE_4__elems__["a" /* default */].targetElem.elem;
		if (!targetElem) {
			return;
		}
		targetElem.classList.add(__WEBPACK_IMPORTED_MODULE_4__elems__["a" /* default */].targetElem.cssClass);
		targetElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom__["a" /* createElementFromHTML */])('div', __WEBPACK_IMPORTED_MODULE_6__templates_main_template_html___default.a));

		// Get the stellar checkout root elements from main template html
		var root = targetElem.querySelector(__WEBPACK_IMPORTED_MODULE_4__elems__["a" /* default */].root.selector);
		__WEBPACK_IMPORTED_MODULE_4__elems__["a" /* default */].root.elem = root;
		
		// Initialize the views
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentFormView', view: new __WEBPACK_IMPORTED_MODULE_8__views_payment_form_view__["a" /* PaymentFormView */]() });
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentAwaitingView', view: new __WEBPACK_IMPORTED_MODULE_9__views_payment_awaiting_view__["a" /* PaymentAwaitingView */]() });
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.push({ name: 'PaymentCompleteView', view: new __WEBPACK_IMPORTED_MODULE_10__views_payment_complete_view__["a" /* PaymentCompleteView */]() });

		// Set initial DTO state
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total = options.total;
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency = options.currency;
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.to = options.destinationKey;

		// Show the first view
		showView('PaymentFormView');

		// Hide the overlay
		setTimeout(function() {
			document.querySelector('.stellar_checkout_overlay').classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.loaded);
			document.querySelector('.stellar_checkout_form').classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.loaded);
		}, 1000);

		resolve();
	});
};

function createSubmitHandler(callBack) {
	var btn = __WEBPACK_IMPORTED_MODULE_7__views_payment_form_view_payment_form_elems__["a" /* default */].submitButton.elem;
	if (btn) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			Object(__WEBPACK_IMPORTED_MODULE_1__buttons__["a" /* setButtonState */])(this, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.IN_PROGRESS)
			callBack.call(this);
		});
	};
};

function prevView() {
	if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
	}
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex <= 0 ? 0 : __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex-1;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views[__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex].view;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.show();
}

function nextView() {
	if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
	}
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex >= __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.length-1 ? __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.length-1 : __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex+1;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views[__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex].view;
	__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.show();
}

function showView(viewName) {
	var vw = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.find(function(el) {
		return el.name == viewName;
	});
	if (vw) {
		if (__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView) {
			__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.hide();
		}
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentIndex = __WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].views.indexOf(vw);
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView = vw.view;
		__WEBPACK_IMPORTED_MODULE_11__view_state__["a" /* default */].currentView.show();
	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	create: create,
	createSubmitHandler: createSubmitHandler,
	nextView: nextView,
	prevView: prevView,
	showView: showView
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _locale */
/* harmony export (immutable) */ __webpack_exports__["b"] = formatDouble;
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDecimal7;
var _locale = 'en-US';

function formatDouble(num, locale) {
    locale = locale || _locale;
    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
};

function formatDecimal7(num, locale) {
    locale = locale || _locale;
    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 7
    }).format(num);
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleValidationFeedback;
/* harmony export (immutable) */ __webpack_exports__["b"] = validateAmount;
/* harmony export (immutable) */ __webpack_exports__["c"] = validatePublicKey;
/* harmony export (immutable) */ __webpack_exports__["d"] = validateTotal;
/* harmony export (immutable) */ __webpack_exports__["e"] = validateTransactionDto;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validationMessage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__l10n__ = __webpack_require__(4);




function toggleValidationFeedback(target, test) {
	var elemErrMsg = target.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SELECTOR.fieldErrorMessage);
	var parentNode = target.parentNode;
	if (!test.result) {
		parentNode.classList.remove(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.valid);
		parentNode.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.error);
		elemErrMsg.innerHTML = test.errors[0].msg;
	} else {
		parentNode.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.valid);
		parentNode.classList.remove(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.error);
		elemErrMsg.innerHTML = '';
	}
};

function validateAmount(target) {
	var result = {
		errors: [],
		result: true
	};
	var l = __WEBPACK_IMPORTED_MODULE_2__l10n__["b" /* default */].localizer;
	var amt = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.amount;
	if (isNaN(amt)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */](l.localize('validateAmountNaN', 'amount is not a number'), target));
		result.result = false;
	}
	if (amt <= 0) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */](l.localize('validateAmountGreaterThanZero', 'amount must be greater than zero'), target));
		result.result = false;
	}
	return result;
};

function validatePublicKey(target) {
	var result = {
		errors: [],
		result: true
	};
	var l = __WEBPACK_IMPORTED_MODULE_2__l10n__["b" /* default */].localizer;
	var key = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.from;
	if (!key || !window.StellarSdk.StrKey.isValidEd25519PublicKey(key)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */](l.localize('validatePublicKeyInvalid', 'public key is invalid'), target));
		result.result = false;
	}
	return result;
};

function validateTotal(target) {
	var result = {
		errors: [],
		result: true
	};
	var l = __WEBPACK_IMPORTED_MODULE_2__l10n__["b" /* default */].localizer;
	var total = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total;
	if (isNaN(total)) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */](l.localize('validateTotalNaN', 'total is not a number'), target));
		result.result = false;
	}
	if (total <= 0) {
		result.errors.push(new __WEBPACK_IMPORTED_MODULE_1__validationMessage__["a" /* ValidationMessage */](l.localize('validateTotalGreaterThanZero', 'total must be greater than zero'), target));
		result.result = false;
	}
	return result;
};

function validateTransactionDto(target) {
	var result = {
		errors: [],
		result: true
	};

	var dto = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO;

	var a = validateAmount(dto.payment.amount);
	result.result = result.result && a.result;
	result.errors = [...result.errors,...a.errors];

	// asset

	// publicKey
	var b = validatePublicKey(dto.payment.from);
	result.result = result.result && b.result;
	result.errors = [...result.errors,...b.errors];

	//destinationKey
	var c = validatePublicKey(dto.payment.to);
	result.result = result.result && c.result;
	result.errors = [...result.errors,...c.errors];

	// memo

	// env

	return result;
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export redirect */
/* harmony export (immutable) */ __webpack_exports__["b"] = useRedirectUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = toQueryString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(11);


function redirect(url, qs) {
	if (window) {
		window.location.href = url + qs;	
	}
};

function useRedirectUrl(options, result) {
	if (options.redirectUrl) {
		var url = options.redirectUrl;
		var qs = {
			hash: result.hash ? result.hash : result.transaction_hash ? result.transaction_hash : ''
		};
		qs = toQueryString(qs);
		if (url.indexOf('?') !== -1) {
			qs = Object(__WEBPACK_IMPORTED_MODULE_0__string__["a" /* replace */])(qs, '\\?', '&');
		}
		redirect(url, qs);
	}
};

function toQueryString(params) {
	var s = '';
	for (var p in params) {
		s += s.length === 0 ? '?' : '&';
		s += p + '=' + encodeURIComponent(params[p]);
	}
	return s;
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
function copy(target) {
    var result = false;
    if (target) {
        try {
            target.select();
            var copied = document.execCommand('copy');
            if (copied) {
                result = true;
            } else {
                result = false;
            }
            target.setSelectionRange(0, 0);
        } catch(err) {
            console.log(err);
        }
    }
    return result;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__(15)

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(1)
var ECCode = __webpack_require__(22)
var ECLevel = __webpack_require__(15)
var Mode = __webpack_require__(2)
var isArray = __webpack_require__(14)

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!exports.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!exports.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+\\-./:]+'
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ').)+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  var width = options.width && options.width >= 21 ? options.width : undefined
  var scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scale = exports.getScale(size, opts)
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)
  var scaledMargin = opts.margin * scale
  var palette = [opts.color.light, opts.color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	currentIndex: -1,
	currentView: null,
	views: []
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config_checker__ = __webpack_require__(90);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */].APP.name,
	ui: {
		render: function(selector, opts) {
			this.selector = selector;
			this.options = {};
			this.options.selector = selector;
			this.options.currency = opts.currency;
			this.options.destinationKey = opts.destinationKey;
			this.options.env = opts.env || 'development';
			this.options.lang = opts.lang || 'en';
			this.options.memo = opts.memo;
			this.options.redirectUrl = opts.redirectUrl;
			this.options.onSubmit = opts.onSubmit;
			this.options.stylesheet = opts.stylesheet;
			this.options.total = opts.total;

			var self = this;

			document.addEventListener('DOMContentLoaded', function() {
				Object(__WEBPACK_IMPORTED_MODULE_2__utils_config_checker__["a" /* validateConfig */])(self.options)
				.then(function() {
					Object(__WEBPACK_IMPORTED_MODULE_0__app__["a" /* init */])(self.options);
				});
			});
		}
	}
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_elems__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__l10n__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_stellarsdk_helper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_url__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_validate__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_buttons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_view_state__ = __webpack_require__(26);










function init(options) {

	var dto = __WEBPACK_IMPORTED_MODULE_3__utils_stellarsdk_helper__["a" /* default */].createDto(options);

	__WEBPACK_IMPORTED_MODULE_2__l10n__["b" /* default */].init(options.lang);

	__WEBPACK_IMPORTED_MODULE_4__ui__["a" /* default */].create(options).then(function() {

		__WEBPACK_IMPORTED_MODULE_4__ui__["a" /* default */].createSubmitHandler(function(e) {

			// Final sanity check for valid form
			var isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ui_validate__["e" /* validateTransactionDto */])(dto);
			if (!isValid.result) {
				Object(__WEBPACK_IMPORTED_MODULE_7__ui_buttons__["a" /* setButtonState */])(__WEBPACK_IMPORTED_MODULE_1__ui_elems__["a" /* default */].submitButton.elem, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.DISABLED);
				return;
			}

			// Show the awaiting payment page
			__WEBPACK_IMPORTED_MODULE_4__ui__["a" /* default */].showView('PaymentAwaitingView');

			// Watch for transactions sent to the destinationKey
			__WEBPACK_IMPORTED_MODULE_3__utils_stellarsdk_helper__["a" /* default */].receivePayment(dto, function(err, result) {
				// Handle error
				if (err) {
					// Pass error to onSubmit callback
					if (options.onSubmit && typeof options.onSubmit === 'function') {
						options.onSubmit.call(this, err);
					}
					return;	
				}
				// Show payment verification feedback
				__WEBPACK_IMPORTED_MODULE_8__ui_view_state__["a" /* default */].currentView.showProgress(result).then(function() {
					if (options.redirectUrl) {
						// Use redirectUrl if configured
						Object(__WEBPACK_IMPORTED_MODULE_5__utils_url__["b" /* useRedirectUrl */])(options, result);
					}
					else if (options.onSubmit && typeof options.onSubmit === 'function') {
						// Call the onSubmit callback
						options.onSubmit.call(this, null, result);
					}
					else {
						// Show the payment complete page
						__WEBPACK_IMPORTED_MODULE_4__ui__["a" /* default */].showView('PaymentCompleteView');
					}
				});
			});
			
		});

	});

};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return common; });
var common = {
	'en': {
		'buttonStateDisabled': 'Enter payment info',
		'buttonStateNormal': 'Send payment',
		'buttonStateInProgress': 'Confirming transaction...',
		'buttonStatePaymentComplete': 'Payment complete',
		'isCopied': 'copied',
		'validateAmountNaN': 'amount is not a number',
		'validateAmountGreaterThanZero': 'amount must be greater than zero',
		'validatePublicKeyInvalid': 'public key is invalid',
		'validateTotalNaN': 'total is not a number',
		'validateTotalGreaterThanZero': 'total must be greater than zero'
	},
	'cs-cz': {
		'buttonStateDisabled': 'Zadat informace o platbě',
		'buttonStateNormal': 'Odeslat platbu',
		'buttonStateInProgress': 'Potvrzení transakce ...',
		'buttonStatePaymentComplete': 'Platba dokončena',
		'isCopied': 'kopírovaný',
		'validateAmountNaN': 'částka není číslo',
		'validateAmountGreaterThanZero': 'částka musí být větší než nula',
		'validatePublicKeyInvalid': 'veřejný klíč je neplatný',
		'validateTotalNaN': 'totální není číslo',
		'validateTotalGreaterThanZero': 'celkový počet musí být větší než nula'
	},
	'da-dk': {
		'buttonStateDisabled': 'Indtast betalingsoplysninger',
		'buttonStateNormal': 'Sende betaling',
		'buttonStateInProgress': 'Bekræftelse af transaktion ...',
		'buttonStatePaymentComplete': 'Betaling fuldført',
		'isCopied': 'kopieret',
		'validateAmountNaN': 'beløb er ikke et tal',
		'validateAmountGreaterThanZero': 'beløb skal være større end nul',
		'validatePublicKeyInvalid': 'Offentlig nøgle er ugyldig',
		'validateTotalNaN': 'totalt er ikke et tal',
		'validateTotalGreaterThanZero': 'alt skal være større end nul'
	},
	'de-de': {
		'buttonStateDisabled': 'Zahlungsinformationen eingeben',
		'buttonStateNormal': 'Zahlung senden',
		'buttonStateInProgress': 'Transaktion bestätigen ...',
		'buttonStatePaymentComplete': 'Zahlung abgeschlossen',
		'isCopied': 'kopiert',
		'validateAmountNaN': 'Betrag ist keine Zahl',
		'validateAmountGreaterThanZero': 'Betrag muss größer als Null sein',
		'validatePublicKeyInvalid': 'öffentlicher Schlüssel ist ungültig',
		'validateTotalNaN': 'Summe ist keine Zahl',
		'validateTotalGreaterThanZero': 'Summe muss größer als Null sein'
	},
	'es-es': {
		'buttonStateDisabled': 'Ingresar información de pago',
		'buttonStateNormal': 'Enviar pago',
		'buttonStateInProgress': 'Confirming transaction ...',
		'buttonStatePaymentComplete': 'Pago completo',
		'isCopied': 'copiado',
		'validateAmountNaN': 'la cantidad no es un número',
		'validateAmountGreaterThanZero': 'la cantidad debe ser mayor que cero',
		'validatePublicKeyInvalid': 'la clave pública no es válida',
		'validateTotalNaN': 'total no es un número',
		'validateTotalGreaterThanZero': 'total debe ser mayor que cero'
	},
	'fr-fr': {
		'buttonStateDisabled': 'Entrer les informations de paiement',
		'buttonStateNormal': 'Envoyer le paiement',
		'buttonStateInProgress': 'Confirmation de transaction ...',
		'buttonStatePaymentComplete': 'Paiement terminé',
		'isCopied': 'copié',
		'validateAmountNaN': 'amount n\'est pas un nombre',
		'validateAmountGreaterThanZero': 'le montant doit être supérieur à zéro',
		'validatePublicKeyInvalid': 'clé publique invalide',
		'validerTotalNaN': 'total n\'est pas un nombre',
		'validateTotalGreaterThanZero': 'total doit être supérieur à zéro'
	},
	'hu-hu': {
		'buttonStateDisabled': 'Adja meg a fizetési adatokat',
		'buttonStateNormal': 'Fizetés küldése',
		'buttonStateInProgress': 'Tranzakció megerősítése ...',
		'buttonStatePaymentComplete': 'Fizetés kész',
		'isCopied': 'másolt',
		'validateAmountNaN': 'összeg nem szám',
		'validateAmountGreaterThanZero': 'az összegnek nagyobbnak kell lennie mint nulla',
		'validatePublicKeyInvalid': 'nyilvános kulcs érvénytelen',
		'validateTotalNaN': 'a teljes nem szám',
		'validateTotalGreaterThanZero': 'összesnek nagyobbnak kell lennie mint nulla'
	},
	'id-id': {
		'buttonStateDisabled': 'Masukkan info pembayaran',
		'buttonStateNormal': 'Send Payment',
		'buttonStateInProgress': 'Mengkonfirmasi transaksi ...',
		'buttonStatePaymentComplete': 'Pembayaran selesai',
		'isCopied': 'disalin',
		'validateAmountNaN': 'jumlah bukan angka',
		'validateAmountGreaterThanZero': 'jumlah harus lebih besar dari nol',
		'validatePublicKeyInvalid': 'kunci publik tidak valid',
		'validateTotalNaN': 'total bukan angka',
		'validateTotalGreaterThanZero': 'total harus lebih besar dari nol'
	},
	'it-it': {
		'buttonStateDisabled': 'Inserisci informazioni di pagamento',
		'buttonStateNormal': 'Invia pagamento',
		'buttonStateInProgress': 'Conferma della transazione ...',
		'buttonStatePaymentComplete': 'Pagamento completato',
		'isCopied': 'copiato',
		'validateAmountNaN': 'amount is not a number',
		'validateAmountGreaterThanZero': 'l\'importo deve essere maggiore di zero',
		'validatePublicKeyInvalid': 'public key is invalid',
		'validateTotalNaN': 'total non è un numero',
		'validateTotalGreaterThanZero': 'totale deve essere maggiore di zero'
	},
	'ja-jp': {
		'buttonStateDisabled': '支払い情報を入力',
		'buttonStateNormal': '支払いを送る',
		'buttonStateInProgress': 'トランザクションの確認中...',
		'buttonStatePaymentComplete': '支払い完了',
		'isCopied': 'コピーされた',
		'validateAmountNaN': '金額は数字ではありません',
		'validateAmountGreaterThanZero': '額はゼロより大きくする必要があります',
		'validatePublicKeyInvalid': '公開鍵が無効です',
		'validateTotalNaN': '合計は数字ではありません',
		'validateTotalGreaterThanZero': '合計はゼロより大きくなければなりません'
	},
	'ko-kr': {
		'buttonStateDisabled': '결제 정보 입력',
		'buttonStateNormal': '지불하기',
		'buttonStateInProgress': '거래 확인 중 ...',
		'buttonStatePaymentComplete': '지불 완료',
		'isCopied': '복사 한',
		'validateAmountNaN': '금액이 숫자가 아닙니다',
		'validateAmountGreaterThanZero': '금액은 0보다 커야합니다',
		'validatePublicKeyInvalid': '공개 키가 유효하지 않습니다',
		'validateTotalNaN': '총 숫자가 아닙니다',
		'validateTotalGreaterThanZero': '합계가 0보다 커야합니다.'
	},
	'pl-pl': {
		"buttonStateDisabled": "Wprowadź informacje o płatności",
		"buttonStateNormal": "Wyślij płatność",
		"buttonStateInProgress": "Potwierdzanie transakcji ...",
		"buttonStatePaymentComplete": "Płatność została zrealizowana",
		"isCopied": "skopiowany",
		"validateAmountNaN": "kwota nie jest liczbą",
		"validateAmountGreaterThanZero": "kwota musi być większa od zera",
		"validatePublicKeyInvalid": "klucz publiczny jest nieprawidłowy",
		"validateTotalNaN": "suma nie jest liczbą",
		"validateTotalGreaterThanZero": "suma musi być większa od zera"
	},
	'pt-br': {
		'buttonStateDisabled': 'Digite informações de pagamento',
		'buttonStateNormal': 'Enviar pagamento',
		'buttonStateInProgress': 'Confirmar transação ...',
		'buttonStatePaymentComplete': 'Pagamento completo',
		'isCopied': 'copiado',
		'validateAmountNaN': 'amount is not a number',
		'validateAmountGreaterThanZero': 'quantidade deve ser maior que zero',
		'validatePublicKeyInvalid': 'chave pública é inválida',
		'validateTotalNaN': 'total não é um número',
		'validateTotalGreaterThanZero': 'total deve ser maior que zero'
	},
	'ru-ru': {
		'buttonStateDisabled': 'Введите платежную информацию',
		'buttonStateNormal': 'Отправить платеж',
		'buttonStateInProgress': 'Подтверждение транзакции ...',
		'buttonStatePaymentComplete': 'Полная оплата',
		'isCopied': 'skopirovano',
		'validateAmountNaN': 'сумма не является числом',
		'validateAmountGreaterThanZero': 'сумма должна быть больше нуля',
		'validatePublicKeyInvalid': 'открытый ключ недействителен',
		'validateTotalNaN': 'total is not a number',
		'validateTotalGreaterThanZero': 'total должно быть больше нуля'
	},
	'sv-se': {
		'buttonStateDisabled': 'Ange betalningsinfo',
		'buttonStateNormal': 'Skicka betalning',
		'buttonStateInProgress': 'Bekräftar transaktion ...',
		'buttonStatePaymentComplete': 'Betalning komplett',
		'isCopied': 'kopieras',
		'validateAmountNaN': 'beloppet är inte ett nummer',
		'validateAmountGreaterThanZero': 'beloppet måste vara större än noll',
		'validatePublicKeyInvalid': 'Offentlig nyckel är ogiltig',
		'validateTotalNaN': 'totalt är inte ett tal',
		'validateTotalGreaterThanZero': 'totalt måste vara större än noll'
	},
	'th-th': {
		'ButtonStateDisabled': 'P̂xn k̄ĥxmūl kār chảra ngein',
		'buttonStateNormal': 'S̄̀ng kār chảra ngein',
		'buttonStateInProgress': 'Kảlạng yụ̄nyạn kār thả ṭhurkrrm... ',
		'ButtonStatePaymentComplete': 'Kār chảra ngein s̄er̆c s̄mbūrṇ̒',
		'isCopied': 'Khạd lxk',
		'validateAmountNaN': 'Cảnwn mị̀chı̀ cảnwn',
		'validateAmountGreaterThanZero': 'Cảnwn ngein t̂xng mākkẁā ṣ̄ūny̒',
		'validatePublicKeyInvalid': 'Khīy̒ s̄āṭhārṇa mị̀ t̄hūk t̂xng',
		'validateTotalNaN': 'Total mị̀chı̀ tạwlek̄h',
		'validateTotalGreaterThanZero': 'Cảnwn rwm t̂xng mākkẁā ṣ̄ūny̒'
	},
	'tr-tr': {
		'buttonStateDisabled': 'Ödeme bilgilerini girin',
		'buttonStateNormal': 'Ödeme gönder',
		'buttonStateInProgress': 'İşlemi Onaylıyor ...',
		'buttonStatePaymentComplete': 'Ödeme tamamlandı',
		'isCopied': 'kopyalanmış',
		'validateAmountNaN': 'tutar bir sayı değil',
		'validateAmountGreaterThanZero': 'tutar sıfırdan büyük olmalı',
		'validatePublicKeyInvalid': 'genel anahtar geçersiz',
		'validateTotalNaN': 'toplam bir sayı değil',
		'validateTotalGreaterThanZero': 'toplam sıfırdan büyük olmalı'
	},
	'zh-cn': {
		'ButtonStateDisabled': 'Shūrù fùkuǎn xìnxī',
		'buttonStateNormal': 'Fāsòng fùkuǎn',
		'buttonStateInProgress': 'Quèrèn jiāoyì...',
		'ButtonStatePaymentComplete': 'Fùkuǎn wánchéng',
		'isCopied': 'Fùzhì',
		'validateAmountNaN': 'Jīn\'é bùshì shùzì',
		'validateAmountGreaterThanZero': 'Jīn\'é bìxū dàyú líng',
		'validatePublicKeyInvalid': 'Gōng yào wúxiào',
		'validateTotalNaN': 'Zǒng shǔ bùshì shùzì',
		'validateTotalGreaterThanZero': 'Zǒngshù bìxū dàyú líng'
	},
	'zu-za': {
		'buttonStateDisabled': 'Betaal inligting in te vul',
		'buttonStateNormal': 'Stuur betaling',
		'buttonStateInProgress': 'Bevestiging van transaksie ...',
		'buttonStatePaymentComplete': 'Betaling voltooi',
		'isCopied': 'gekopieer',
		'validateAmountNaN': 'bedrag is nie \'n nommer\' nie',
		'validateAmountGreaterThanZero': 'bedrag moet groter as nul\' wees',
		'validatePublicKeyInvalid': 'publieke sleutel is ongeldig',
		'validateTotalNaN': 'totaal is nie \'n nommer\' nie',
		'validateTotalGreaterThanZero': 'totaal moet groter as nul wees'
	}
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_merge__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_merge__);



class Localizer {
	constructor(cultureCode, localizations) {
		this.cultureCode = cultureCode;
		this.defaultLang = 'en';
		this.localizations = localizations || {};
		this.defaultValues = {};
		this.values = {};

		this.updateValues();
	}
	addLocalizations(loc) {
		this.localizations = __WEBPACK_IMPORTED_MODULE_1_lodash_merge___default()(loc, this.localizations);
		this.updateValues();
	}
	localize(key, defaultValue) {
		if (this.values && this.values[key]) {
			return this.values[key];
		}
		if (this.defaultValues && this.defaultValues[key]) {
			return this.defaultValues[key];
		}
		if (defaultValue) {
			return defaultValue;
		}
		return '';
	}
	updateValues() {
		if (this.localizations) {
			if (this.defaultLang) {
				this.defaultValues = this.localizations[this.defaultLang];
			}
			if (this.cultureCode) {
				this.values = this.localizations[this.cultureCode.toLowerCase()];
			}	
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Localizer;
;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(32)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = randomId;
function randomId(length) {
	var result = "";
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var i = 0, 
	len = !isNaN(length) ? length : 8;
	for (; i < len; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(38)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./style.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(36);
exports = module.exports = __webpack_require__(37)(false);
// imports


// module
exports.push([module.i, "/* STELLAR CHECKOUT */\r\n\r\n.stellar_checkout_container {\r\n    \r\n}\r\n\r\n.stellar_checkout {\r\n    position: relative;\r\n    font-family: monospace, monospace;\r\n\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* OVERLAYS */\r\n\r\n.stellar_checkout_overlay,\r\n.stellar_checkout_payment_complete {\r\n    background-image: url(" + escape(__webpack_require__(9)) + ");\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    background-size: 50%;\r\n    background-repeat: no-repeat;\r\n    background-color: #fff;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: .4s;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout_overlay.stellar_checkout_loaded {\r\n    opacity: 0;\r\n    transform: scale3d(0, 0, 0);\r\n}\r\n\r\n/** HEADER */\r\n\r\n.stellar_checkout_header {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: monospace, monospace;\r\n    justify-content: center;\r\n    padding: .8rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_goback {\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 1rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_logo .stellar_checkout_rocket {\r\n    background: #fff;\r\n    border: .0625rem solid #eee;\r\n    border-radius: .4rem;\r\n    font-family: monospace, monospace;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    padding: .4rem;\r\n    width: 5.6rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_logo .stellar_checkout_app_name {\r\n    display: block;\r\n    padding: .4rem;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-family: monospace, monospace;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_header_alt {\r\n    display: flex;\r\n    min-height: 10rem;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_header_alt > div {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-basis: 50%;\r\n    font-family: monospace, monospace;\r\n    justify-content: center;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_qr_wrap,\r\n.stellar_checkout_header .stellar_checkout_status {\r\n}\r\n\r\n    @media screen and (min-device-width: 636px) {\r\n        .stellar_checkout_header {\r\n            flex-direction: row;\r\n        }\r\n        .stellar_checkout_header .stellar_checkout_logo {\r\n            flex-basis: 33%;\r\n        }\r\n        .stellar_checkout_header .stellar_checkout_header_alt {\r\n            flex-grow: 1;\r\n            width: auto;\r\n        }\r\n        .stellar_checkout_header .stellar_checkout_header_alt > div {\r\n            flex-basis: 50%;\r\n        }\r\n    }\r\n\r\n.stellar_checkout_header .stellar_checkout_qr_wrap .stellar_checkout_qrcode {\r\n    cursor: pointer;\r\n    max-height: 10rem;\r\n    max-width: 10rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_qr_wrap .stellar_checkout_spinner {\r\n    font-size: 2rem;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_status {\r\n    background: #f8f8f8;\r\n    margin: .8rem .8rem .8rem 0;\r\n    text-transform: uppercase;\r\n    transition: .4s;\r\n}\r\n\r\n.stellar_checkout_header .stellar_checkout_status > span {\r\n    line-height: 1.6;\r\n    width: 50%;\r\n}\r\n\r\n/* COMPLETE */\r\n\r\n.stellar_checkout_payment_complete {\r\n    background-position-y: 36%;\r\n}\r\n\r\n.stellar_checkout_payment_complete .stellar_checkout_message {\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 50%;\r\n    margin-left: -25%;\r\n    width: 50%;\r\n    font-weight: bold;\r\n    color: green;\r\n    text-transform: uppercase;\r\n    font-size: 2.4rem;\r\n    height: 25%;\r\n    margin-top: -12.5%;\r\n}\r\n\r\n/** ERRORS */\r\n\r\n.stellar_checkout_error {\r\n    position: absolute;\r\n    height: 100%;\r\n    transition: .4s;\r\n    top: 0;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, .76);\r\n}\r\n\r\n.stellar_checkout_error .stellar_checkout_inner {\r\n    background: #fff;\r\n    border-radius: .2rem;\r\n    border: .125rem solid #f80000;\r\n    color: #f80000;\r\n    display: flex;\r\n    height: 12rem;\r\n    margin-top: -4rem;\r\n    padding: .8rem;\r\n    position: absolute;\r\n    transition: .4s;\r\n    top: 48%;\r\n    width: 92%;\r\n    margin-left: 4%;\r\n}\r\n\r\n.stellar_checkout_error .stellar_checkout_error_close {\r\n    position: absolute;\r\n    top: .6rem;\r\n    right: 1.2rem;\r\n}\r\n\r\n.stellar_checkout_error .stellar_checkout_error_message {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n/* FORM */\r\n\r\n.stellar_checkout_form {\r\n    display: none;\r\n}\r\n\r\n.stellar_checkout_form.stellar_checkout_loaded {\r\n    display: block;\r\n}\r\n\r\n/* FORM FIELDS */\r\n\r\n.stellar_checkout .stellar_checkout_field {\r\n\tpadding: .8rem .4rem;\r\n    position: relative;\r\n\ttext-align: left;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field label {\r\n\tcolor: #a0a0a0;\r\n    display: block;\r\n    font-size: .8rem;\r\n    letter-spacing: .075rem;\r\n    padding: .4rem .2rem;\r\n    text-transform: uppercase;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap {\r\n\tbackground: #f8f8f8;\r\n    border: .0625rem solid #eee;\r\n    border-radius: .2rem;\r\n    color: #000;\r\n    font-family: monospace, monospace;\r\n    height: 4rem;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_txtwrap .stellar_checkout_spinner {\r\n    position: absolute;\r\n    top: 30%;\r\n    right: .8rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap--clipboard {\r\n    display: flex;\r\n    height: 5.2rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap--input {\r\n    height: 2.8rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap--picker {\r\n    height: 2.4rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_clipboard {\r\n    align-items: center;\r\n    display: flex;\r\n    border-left: .0625rem solid #ddd;\r\n    flex-basis: 4rem;\r\n    font-size: 1rem;\r\n    justify-content: center;\r\n    position: relative;;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_clipboard_click {\r\n    background: transparent;\r\n    cursor: pointer;\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: 2;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_txtwrap textarea {\r\n    overflow: hidden;\r\n    resize: none;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field input[type=text],\r\n.stellar_checkout .stellar_checkout_field textarea {\r\n    background: transparent;\r\n    border: 0;\r\n    font-family: monospace, monospace;\r\n    font-size: 1.25rem;\r\n    height: 100%;\r\n    outline: 0;\r\n    padding: .6rem .4rem;\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field textarea {\r\n    text-align: left;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_currency {\r\n\tborder-right: .0625rem solid #ddd;\r\n    color: #a0a0a0;\r\n\tdisplay: block;\r\n    height: 100%;\r\n    line-height: 2.6;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 4rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_currency_conversion_info {\r\n    float: right;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_picker {\r\n    background: transparent;\r\n    border: 0;\r\n    font-size: 1rem;\r\n    height: 100%;\r\n    outline: 0;\r\n    padding: .4rem;\r\n    width: 99%;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_error {\r\n    border: 0.0625rem solid #f80000;\r\n    border-radius: .2rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_valid {\r\n    border: 0.0625rem solid #05ff05;\r\n    border-radius: .2rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_error_message {\r\n    border-radius: .4rem;\r\n    left: 0;\r\n    padding: .4rem .4rem;\r\n    position: absolute;\r\n    transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_error .stellar_checkout_error_message {\r\n    color: #f80000;\r\n    top: 2.55rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_field .stellar_checkout_copied {\r\n    position: absolute;\r\n    top: .4rem;\r\n    right: .4rem;\r\n    background: #f8f8f8;\r\n    padding: .4rem;\r\n    border-radius: .2rem;\r\n    font-size: .8rem;\r\n    border: .0625rem solid #eee;\r\n}\r\n\r\n/* BUTTONS */\r\n\r\n.stellar_checkout .stellar_checkout_button_row {\r\n\tpadding: .8rem .4rem;\r\n}\r\n\r\n.stellar_checkout .stellar_checkout_button_row button {\r\n\tbackground: #08b5e5;\r\n    border-color: #08b5e5;\r\n    border-radius: 3px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    min-height: 28px;\r\n    line-height: 26px;\r\n    outline: none;\r\n    overflow: hidden;\r\n    padding: .4rem .8rem;\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    transition: .4s;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n}\r\n\r\n.stellar_checkout textarea[disabled],\r\n.stellar_checkout textarea:disabled {\r\n    color: #000;\r\n}\r\n\r\n.stellar_checkout button[disabled],\r\n.stellar_checkout button:disabled {\r\n    opacity: 0.5;\r\n}\r\n\r\n/* PAYMENT AWAITING */\r\n\r\n.stellar_checkout_payment_awaiting .stellar_checkout_transaction_info {\r\n    line-height: 1.2;\r\n    color: #a0a0a0;\r\n    font-family: monospace, monospace;\r\n    font-size: .9rem;\r\n    padding: 0 .4rem;\r\n}\r\n\r\n.stellar_checkout_hidden {\r\n    display: none!important;\r\n}\r\n\r\n.stellar_checkout_offscreen {\r\n    left: -1000000px;\r\n    position: absolute;\r\n}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(39);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faChevronCircleLeft__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faChevronCircleLeft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faChevronCircleLeft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faCopy__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faCopy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faCopy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_faSpinner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_faSpinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_faSpinner__);





__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_faChevronCircleLeft___default.a);
__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_faCopy___default.a);
__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_faSpinner___default.a);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export config */
/* unused harmony export icon */
/* unused harmony export noAuto */
/* unused harmony export layer */
/* unused harmony export text */
/* unused harmony export library */
/* unused harmony export dom */
/* unused harmony export parse */
/* unused harmony export findIconDefinition */
/*!
 * Font Awesome Free 5.0.5 by @fontawesome - http://fontawesome.com
 * License - http://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER$1 = null;
var _PERFORMANCE = { mark: noop, measure: noop };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var initial = WINDOW.FontAwesomeConfig || {};
var initialKeys = Object.keys(initial);

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config$1 = _extends({}, _default);

WINDOW.FontAwesomeConfig = config$1;

function update(newConfig) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$asNewDefault = params.asNewDefault,
      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

  var validKeys = Object.keys(config$1);
  var ok = asNewDefault ? function (k) {
    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
  } : function (k) {
    return ~validKeys.indexOf(k);
  };

  Object.keys(newConfig).forEach(function (configKey) {
    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
  });
}

function auto(value) {
  update({
    autoReplaceSvg: value,
    observeMutations: value
  });
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var domready = function (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
};

var d = UNITS_IN_GRID;

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

  var val = '';

  if (startCentered && IS_IE) {
    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
  } else if (startCentered) {
    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
  } else {
    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
  }

  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
  val += 'rotate(' + transform.rotate + 'deg) ';

  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;


  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === undefined ? false : _params$watchable2;


  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _extends({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];

  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
  }

  return val;
}

var noop$2 = function noop() {};
var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
var preamble = 'FA "5.0.5"';

var begin = function begin(name) {
  p.mark(preamble + ' ' + name + ' begins');
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark(preamble + ' ' + name + ' ends');
  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
};

var perf = { begin: begin, end: end };

'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

'use strict';



/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;


var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}

function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}

function byOldName(name) {
  return _byOldName[name] || { prefix: null, iconName: null };
}

var styles$1 = namespace.styles;


var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return { prefix: null, iconName: null, rest: [] };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config$1.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var noop$1 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;

  return typeof i2svg === 'string';
}

function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config$1.autoReplaceSvg];

  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp(config$1.familyPrefix + '-.*');

    delete abstract[0].attributes.style;

    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config$1.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, { toNode: [], toSvg: [] });

    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$1;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');

      mutations.map(mutator);

      mark();

      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation(operation) {
  disabled = true;
  operation();
  disabled = false;
}

function observe(options) {
  if (!MUTATION_OBSERVER) return;

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback;


  var mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;

    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });

  if (!IS_DOM) return;

  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
    childList: true, attributes: true, characterData: true, subtree: true
  });
}

var styleParser = function (node) {
  var style = node.getAttribute('style');

  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

var classParser = function (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

var transformParser = function (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
};

var symbolParser = function (node) {
  var symbol = node.getAttribute('data-fa-symbol');

  return symbol === null ? false : symbol === '' ? true : symbol;
};

var attributesParser = function (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});

  var title = node.getAttribute('title');

  if (config$1.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
    } else {
      extraAttributes['aria-hidden'] = 'true';
    }
  }

  return extraAttributes;
};

var maskParser = function (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
};

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);

  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

var styles = namespace.styles;

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
var STYLE_TO_PREFIX = {
  'Solid': 'fas',
  'Regular': 'far',
  'Light': 'fal',
  'Brands': 'fab'
};

function findIcon(iconName, prefix) {
  var val = {
    found: false,
    width: 512,
    height: 512,
    icon: missing
  };

  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
    var icon = styles[prefix][iconName];
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    val = {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  } else if (iconName && prefix && !config$1.showMissingIcons) {
    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
  }

  return val;
}

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;


  return [node, makeInlineSvgAbstract({
    icons: {
      main: findIcon(iconName, prefix),
      mask: findIcon(mask.iconName, mask.prefix)
    },
    prefix: prefix,
    iconName: iconName,
    transform: transform,
    symbol: symbol,
    mask: mask,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;


  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config$1.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return [node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function remove(node) {
  if (typeof node.remove === 'function') {
    node.remove();
  } else if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;

  var end = perf.begin('searchPseudoElements');

  disableObservation(function () {
    toArray(root.querySelectorAll('*')).forEach(function (node) {
      [':before', ':after'].forEach(function (pos) {
        var styles = WINDOW.getComputedStyle(node, pos);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var children = toArray(node.children);
        var pseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
        })[0];

        if (pseudoElement) {
          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
            remove(pseudoElement.nextSibling);
          }
          remove(pseudoElement);
          pseudoElement = null;
        }

        if (fontFamily && !pseudoElement) {
          var content = styles.getPropertyValue('content');
          var i = DOCUMENT.createElement('i');
          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
          if (pos === ':before') {
            node.insertBefore(i, node.firstChild);
          } else {
            node.appendChild(i);
          }
        }
      });
    });
  });

  end();
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!IS_DOM) return;

  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var prefixes = Object.keys(styles);
  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');

  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);

  mark();

  perform(mutations, function () {
    hclAdd('active');
    hclAdd('complete');
    hclRemove('pending');

    if (typeof callback === 'function') callback();
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var mutation = generateMutation(node);

  if (mutation) {
    perform([mutation], callback);
  }
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config$1.familyPrefix;
  var rc = config$1.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;


        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

var _cssInserted = false;

function ensureCss() {
  if (!config$1.autoAddCss) {
    return;
  }

  if (!_cssInserted) {
    insertCss(css());
  }

  _cssInserted = true;
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;


  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;


    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  return auto(false);
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();

      var _params$node = params.node,
          node = _params$node === undefined ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === undefined ? function () {} : _params$callback;


      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }

      onTree(node, callback);
    }
  },

  css: css,

  insertCss: function insertCss$$1() {
    insertCss(css());
  }
};

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;


  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;


  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config$1.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === undefined ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === undefined ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === undefined ? {} : _params$styles2;


  return apiObject({ type: 'text', content: content }, function () {
    ensureCss();

    return makeLayersTextAbstract({
      content: content,
      transform: _extends({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
      }
    });
  });
};

var layer = function layer(assembler) {
  return apiObject({ type: 'layer' }, function () {
    ensureCss();

    var children = [];

    assembler(function (args) {
      Array.isArray(args) ? children = args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });

    return [{
      tag: 'span',
      attributes: { class: config$1.familyPrefix + '-layers' },
      children: children
    }];
  });
};

var api$1 = {
  noAuto: noAuto,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  layer: layer
};

var autoReplace = function autoReplace() {
  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
};

function bootstrap() {
  if (IS_BROWSER) {
    if (!WINDOW.FontAwesome) {
      WINDOW.FontAwesome = api$1;
    }

    domready(function () {
      if (Object.keys(namespace.styles).length > 0) {
        autoReplace();
      }

      if (config$1.observeMutations && typeof MutationObserver === 'function') {
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      }
    });
  }

  namespace.hooks = _extends({}, namespace.hooks, {

    addPack: function addPack(prefix, icons) {
      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

      build();
      autoReplace();
    },

    addShims: function addShims(shims) {
      var _namespace$shims;

      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

      build();
      autoReplace();
    }
  });
}

Object.defineProperty(api$1, 'config', {
  get: function get() {
    return config$1;
  },

  set: function set(newConfig) {
    update(newConfig);
  }
});

if (IS_DOM) bunker(bootstrap);

var config = api$1.config;


/* harmony default export */ __webpack_exports__["a"] = (api$1);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(42)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'chevron-circle-left', icon: [512, 512, [], "f137", "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"] };

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'copy', icon: [448, 512, [], "f0c5", "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"] };

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'spinner', icon: [512, 512, [], "f110", "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"] };

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<div id=\"stellarCheckoutRoot\" class=\"stellar_checkout\">\r\n\t<div class=\"stellar_checkout_overlay\"></div>\r\n</div>";

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onValidateAmount;
/* harmony export (immutable) */ __webpack_exports__["b"] = onValidatePublicKey;
/* harmony export (immutable) */ __webpack_exports__["c"] = onValidateTotal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatter__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_string__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_buttons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_validate__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_form_elems__ = __webpack_require__(10);








function setFormValidButtonState(target) {
    var formIsValid = Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["e" /* validateTransactionDto */])(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO);
    if (formIsValid.result) {
        Object(__WEBPACK_IMPORTED_MODULE_3__ui_buttons__["a" /* setButtonState */])(target, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.NORMAL);
    } else {
        Object(__WEBPACK_IMPORTED_MODULE_3__ui_buttons__["a" /* setButtonState */])(target, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SUBMIT_BUTTON_STATE.DISABLED);
    }
};

function onValidateAmount(e) {
	var amt = e.target.value;
    var formattedAmount = Object(__WEBPACK_IMPORTED_MODULE_2__utils_string__["a" /* replace */])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["a" /* formatDecimal7 */])(amt), ',', '');
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.amount = formattedAmount;
	Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["b" /* validateAmount */])(e.target));
    setFormValidButtonState(__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].submitButton.elem);
};

function onValidatePublicKey(e) {
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.from = e.target.value;
	Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["c" /* validatePublicKey */])(e.target));
    setFormValidButtonState(__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].submitButton.elem);
};

function onValidateTotal(e) {
    var total = e.target.value;
    var formattedTotal = Object(__WEBPACK_IMPORTED_MODULE_2__utils_string__["a" /* replace */])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["b" /* formatDouble */])(total), ',', '');
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total = formattedTotal;
    e.target.value = formattedTotal;
	Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["a" /* toggleValidationFeedback */])(e.target, Object(__WEBPACK_IMPORTED_MODULE_4__ui_validate__["d" /* validateTotal */])(e.target));
    setFormValidButtonState(__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].submitButton.elem);
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CMCCLIENT.fetch();
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidationMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


function ValidationMessage(msg, elem, msgType) {
	this.elem = elem;
	this.msg = msg;
	this.msgType = msgType || __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].MESSAGE_TYPE.ERROR;
};

ValidationMessage.prototype.toString = function() {
	var messageType = this.msgType ? ' ' + this.msgType : '';
	return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + messageType + ' ' + this.msg;
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_coinmarketcap_client__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_elems__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_form_elems__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_form_l10n_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates_payment_form_mustache_html__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates_payment_form_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__templates_payment_form_mustache_html__);










class PaymentFormView extends __WEBPACK_IMPORTED_MODULE_4__base_view__["a" /* default */] {

	constructor() {
		super(__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__templates_payment_form_mustache_html___default.a, __WEBPACK_IMPORTED_MODULE_6__payment_form_l10n_js__["a" /* default */]);
	}

	create() {
		super.create();

		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CMCCLIENT = new __WEBPACK_IMPORTED_MODULE_1__services_coinmarketcap_client__["a" /* CoinMarketCapClient */](
			__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].total.elem, 
			__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].amount.elem,
			__WEBPACK_IMPORTED_MODULE_5__payment_form_elems__["a" /* default */].currencyConversionInfo.elem
		);

		this.elems.total.elem.dispatchEvent(new Event('input'));
	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();

		if (this.elems.publicKey.elem.value.length > 0) {
			this.elems.publicKey.elem.dispatchEvent(new Event('input'));	
		}
	}

	update() {
		super.update();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaymentFormView;
;

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CoinMarketCapClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatter__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_string__ = __webpack_require__(11);





function CoinMarketCapClient(totalElem, amountElem, currencyConversionInfoElem) {
	this.totalElem = totalElem;
	this.amountElem = amountElem;
	this.currencyConversionInfoElem = currencyConversionInfoElem;
	this.url = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].STELLAR_CHECKOUT_API_TICKER_URL,
	this.currency = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency;
	this.total = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total;
	this.data = [];
	this.spinner = amountElem.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SELECTOR.spinner);
	if (!isNaN(this.total) && parseFloat(this.total) > 0) {
		this.fetch();
	}
}

CoinMarketCapClient.prototype.fetch = function() {
	var self = this;
	self.showProgress();
	return Object(__WEBPACK_IMPORTED_MODULE_2__utils_http__["a" /* httpRequest */])('GET', self.url, { currency: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency })
	.then(function(response) {
		if (response) {
			var data = JSON.parse(response);
			if (data.length > 0) {
				var lumenPrice = data[0]['price_' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.currency.toLowerCase()];
				if (lumenPrice) {
					self.currencyConversionInfoElem.innerHTML = '1XLM = ' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_string__["a" /* replace */])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["a" /* formatDecimal7 */])(lumenPrice), ',', '') + '' + self.currency;
					var priceInLumens = self.calcPriceInLumens(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.invoice.total, lumenPrice);
					var formattedPrice = Object(__WEBPACK_IMPORTED_MODULE_3__utils_string__["a" /* replace */])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_formatter__["a" /* formatDecimal7 */])(priceInLumens), ',', '');
					self.amountElem.setAttribute('value', formattedPrice);
					self.amountElem.setAttribute('disabled', 'disabled');
					self.amountElem.dispatchEvent(new Event('input'));
					__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].DTO.payment.total = priceInLumens;
				}
				self.data = data;
			}
			self.hideProgress();	
		}
	});
};

CoinMarketCapClient.prototype.calcPriceInLumens = function(invoiceTotal, lumenPrice) {
	return invoiceTotal / lumenPrice;
};

CoinMarketCapClient.prototype.hideProgress = function() {
	this.spinner.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
};

CoinMarketCapClient.prototype.showProgress = function() {
	this.spinner.classList.remove(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpRequest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url__ = __webpack_require__(20);


function httpRequest(method, url, params, body, accessToken) {
	method = method || 'GET';
	url = url || '';
	params = params || '';
	body = body || '';
	accessToken = accessToken;
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('load', function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(xhr.response);
			}  else {
				reject(Error(xhr.statusText));
			}
		});
		xhr.addEventListener('error', function() {
			reject(Error('http request failed (XHR error)'));						
		});
		if (typeof params === 'object') {
			params = Object(__WEBPACK_IMPORTED_MODULE_0__url__["a" /* toQueryString */])(params);
		}
		xhr.open(method, url+params);
		if (accessToken) {
			xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);	
		}
		xhr.send(body);
	}).catch(function(err) {
		console.log(err);
	})
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	'en': {
		'labelTotal': 'Total',
		'labelAmount': 'Amount',
		'labelPublicKey': 'Public Key',
		'submitButton': 'Enter payment info'
	},
	'cs-cz': {
		'labelTotal': 'Celkem',
		'labelAmount': 'Částka',
		'labelPublicKey': 'Veřejný klíč',
		'submitButton': 'Zadat informace o platbě'
	},
	'da-dk': {
		'labelTotal': 'Total',
		'labelAmount': 'Beløb',
		'labelPublicKey': 'Offentlig nøgle',
		'submitButton': 'Indtast betalingsoplysninger'
	},
	'de-de': {
		'labelTotal': 'Gesamt',
		'labelAmount': 'Betrag',
		'labelPublicKey': 'Öffentlicher Schlüssel',
		'submitButton': 'Zahlungsinformationen eingeben'
	},
	'es-es': {
		'labelTotal': 'Total',
		'labelAmount': 'Cantidad',
		'labelPublicKey': 'Clave pública',
		'submitButton': 'Ingresar información de pago'
	},
	'fr-fr': {
		'labelTotal': 'Total',
		'labelAmount': 'Montant',
		'labelPublicKey': 'Clé publique',
		'submitButton': 'Entrer les informations de paiement'
	},
	'hu-hu': {
		"labelTotal": "Összesen",
		"labelAmount": "Összeg",
		'labelPublicKey': 'Nyilvános kulcs',
		'submitButton': 'Adja meg a fizetési adatokat'
	},
	'id-id': {
		'labelTotal': 'Total',
		'labelAmount': 'Jumlah',
		'labelPublicKey': 'Kunci Publik',
		'submitButton': 'Masukkan info pembayaran'
	},
	'it-it': {
		'labelTotal': 'Totale',
		'labelAmount': 'Quantità',
		'labelPublicKey': 'Chiave pubblica',
		'submitButton': 'Inserisci le informazioni di pagamento'
	},
	'ja-jp': {
		'labelTotal': '合計',
		'labelAmount': '金額',
		'labelPublicKey': '公開鍵',
		'submitButton': '支払い情報を入力してください'
	},
	'ko-kr': {
		'labelTotal': '합계',
		'labelAmount': '금액',
		'labelPublicKey': '공개 키',
		'submitButton': '결제 정보 입력'
	},
	'pl-pl': {
		"labelTotal": "Całkowity",
		"labelAmount": "Ilość",
		"labelPublicKey": "Klucz publiczny",
		"submitButton": "Wprowadź informacje o płatności"
	},
	'pt-br': {
		'labelTotal': 'Total',
		'labelAmount': 'Montante',
		'labelPublicKey': 'Chave pública',
		'submitButton': 'Digite informações de pagamento'
	},
	'ru-ru': {
		'labelTotal': 'Всего',
		'labelAmount': 'количество',
		'labelPublicKey': 'Открытый ключ',
		'submitButton': 'Введите платежную информацию'
	},
	'sv-se': {
		'labelTotal': 'Total',
		'labelAmount': 'Belopp',
		'labelPublicKey': 'offentlig nyckel-',
		'submitButton': 'Ange betalningsinfo'
	},
	'th-th': {
		'labelTotal': 'Rwm',
		'labelAmount': 'Cảnwn ngein',
		'labelPublicKey': 'Khīy̒ s̄āṭhārṇa',
		'submitButton': 'P̂xn k̄ĥxmūl kār chảra ngein'
	},
	'tr-tr': {
		'labelTotal': 'Toplam',
		'labelAmount': 'Tutar',
		'labelPublicKey': 'Genel Anahtar',
		'submitButton': 'Ödeme bilgilerini girin'
	},
	'zh-cn': {
		'labelTotal': 'Zǒngjì',
		'labelAmount': 'Jīn\'é',
		'labelPublicKey': 'Gōng yào',
		'submitButton': 'Shūrù fùkuǎn xìnxī'
	},
	'zu-za': {
		'labelTotal': 'Totale',
		'labelAmount': 'Bedrag',
		'labelPublicKey': 'Publieke sleutel',
		'SubmitButton': 'Betaal inligting in'
	}
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(54)
var H = __webpack_require__(13);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div id=\"paymentFormView\" class=\"stellar_checkout_form\">\r\n\t<div class=\"stellar_checkout_header\">\r\n\t\t<div class=\"stellar_checkout_logo\">\r\n\t\t\t<img alt=\"\" class=\"stellar_checkout_rocket\" src=\"" + __webpack_require__(9) + "\" />\r\n\t\t\t<span class=\"stellar_checkout_app_name\">stellar checkout</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_form_wrap\">\r\n\t\t<div class=\"stellar_checkout_field\">\r\n\t\t\t<label id=\"stellarCheckoutTotalLabel\" for=\"stellarCheckoutTotal\">Total</label>\r\n\t\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutTotal\" class=\"stellar_checkout_txt\" type=\"text\" autocomplete=\"off\" value=\"{{invoice.total}}\" disabled></input>\r\n\t\t\t\t<span class=\"stellar_checkout_currency\">{{invoice.currency}}</span>\r\n\t\t\t\t<span class=\"stellar_checkout_error_message\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"stellar_checkout_field\">\r\n\t\t\t<label for=\"stellarCheckoutAmount\">\r\n\t\t\t\t<span id=\"stellarCheckoutAmountLabel\">Amount</span>\r\n\t\t\t\t<span id=\"stellarCheckoutCurrencyConversionInfo\" class=\"stellar_checkout_currency_conversion_info\"></span>\r\n\t\t\t</label>\r\n\t\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutAmount\" class=\"stellar_checkout_txt\" type=\"text\" autocomplete=\"off\" value=\"{{payment.amount}}\" disabled></input>\r\n\t\t\t\t<span class=\"stellar_checkout_currency\">XLM</span>\r\n\t\t\t\t<span class=\"stellar_checkout_error_message\"></span>\r\n\t\t\t\t<span class=\"stellar_checkout_spinner\"><i class=\"fas fa-spinner fa-spin\"></i></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"stellar_checkout_field\">\r\n\t\t\t<label id=\"stellarCheckoutPublicKeyLabel\" for=\"stellarCheckoutPublicKey\">Your Public Key</label>\r\n\t\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--input\">\r\n\t\t\t\t<input id=\"stellarCheckoutPublicKey\" class=\"stellar_checkout_txt\" type=\"text\" autocomplete=\"off\" required></input>\r\n\t\t\t\t<span class=\"stellar_checkout_error_message\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"stellar_checkout_button_row\">\r\n\t\t\t<button id=\"stellarCheckoutSubmitButton\" disabled>Enter payment info</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})( true ? exports : Hogan);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})( true ? exports : Hogan);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_clipboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_wallet_format__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qrcode__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_awaiting_l10n_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates_payment_awaiting_mustache_html__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates_payment_awaiting_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__templates_payment_awaiting_mustache_html__);










class PaymentAwaitingView extends __WEBPACK_IMPORTED_MODULE_4__base_view__["a" /* default */] {

	constructor() {
		super(__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__templates_payment_awaiting_mustache_html___default.a, __WEBPACK_IMPORTED_MODULE_6__payment_awaiting_l10n_js__["a" /* default */]);
		this.isQrGenerated = false;
	}

	create() {
		super.create();

		var self = this;

		// Show Wallet Picker
		__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].linkShowWalletPicker.elem.addEventListener('click', function(e) {
			e.preventDefault();
			__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].walletPicker.elem.parentNode.parentNode.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
			__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].walletPicker.elem.focus();
		});

		// Wallet picker
		__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].walletPicker.elem.addEventListener('change', function(e) {
			__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].qrCodeSpinner.elem.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
			__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].qrCodeCanvas.elem.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
			var el = e.target;
			var format = el.options[el.selectedIndex].value;
			if (format) {
				self.generateQrCode(format);
			}
		});

	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();
		this.update();
		if (!this.isQrGenerated) {
			this.generateQrCode('envelopexdr');
		}
	}

	update() {
		super.update();
		__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmTo.elem.value = this.dto.payment.to;
		__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmFrom.elem.value = this.dto.payment.from;
		__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].stellarCheckoutConfirmAmount.elem.value = this.dto.payment.amount;
	}

	generateQrCode(format) {
		var self = this;
		__WEBPACK_IMPORTED_MODULE_2__utils_wallet_format__["a" /* default */][format](this.dto).then(function(result) {
			__WEBPACK_IMPORTED_MODULE_3_qrcode___default.a.toCanvas(__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].qrCodeCanvas.elem, result, function (error) {
				if (error) {
					console.error(error);
				}
				self.isQrGenerated = true;
				__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].qrCodeSpinner.elem.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
				__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].qrCodeCanvas.elem.classList.toggle(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);
				__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].walletPicker.elem.parentNode.parentNode.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.hidden);

				__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].fldXdr.elem.value = result;

				__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].qrCodeCanvas.elem.addEventListener('click', function() {
					__WEBPACK_IMPORTED_MODULE_1__utils_clipboard__["a" /* copy */].call(this, __WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].fldXdr.elem);
				});
			});
		});
	}

	showProgress() {
		var self = this;
		return new Promise(function(resolve) {
			var statusMsgs = [
				self.localizer.localize('transactionReceived', 'transaction received'),
				self.localizer.localize('processingTransaction', 'processing transaction'),
				self.localizer.localize('verifyingTransaction', 'verifying transaction'),
				self.localizer.localize('paymentComplete', 'payment complete')
			];
			var i = 0,
			increment = 2000,
			interval = setInterval(function() {
				__WEBPACK_IMPORTED_MODULE_5__payment_awaiting_elems__["a" /* default */].statusElem.elem.innerHTML = statusMsgs[i];
				if (i == statusMsgs.length-1) {
					clearInterval(interval);
					resolve();
				}
				i++;
			}, increment);
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaymentAwaitingView;
;

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_stellarsdk_helper__ = __webpack_require__(7);



function toDestinationKey(dto) {
	return new Promise(function(resolve) {
		resolve(dto.payment.to);
	});
};

function toEnvelopeXdr(dto) {
	return new Promise(function(resolve) {
		__WEBPACK_IMPORTED_MODULE_1__utils_stellarsdk_helper__["a" /* default */].buildTransaction(dto)
		.then(function(result) {
			resolve(result.toEnvelope().toXDR('base64'));	
		});
	});
};

function toStarGazer(dto) {
	return new Promise(function(resolve) {
		var result = {
			"stellar": {
		        "payment": {
		            "destination":  dto.payment.to,
		            "network":      getHash(dto.payment.network._networkPassphrase),
		            "amount":       dto.payment.amount,
		            "asset": {
		                "code":     dto.payment.asset.code,
		                "issuer":   dto.payment.asset.issuer
		            }
		        }
		    }
		};
	    if (dto.payment.memo) {
	    	result.stellar.payment.memo = {
                "type":     'MemoHash',
                "value":    dto.payment.memo
            };
	    }
		resolve(JSON.stringify(result));
	});
};

function getHash(passphrase) {
    return new StellarSdk.Network(passphrase)
    .networkId().toString('hex').slice(0, 8);
};

/* harmony default export */ __webpack_exports__["a"] = ({
	destinationkey: toDestinationKey,
	envelopexdr: toEnvelopeXdr,
	stargazer: toStarGazer
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var canPromise = __webpack_require__(60)
var QRCode = __webpack_require__(62)
var CanvasRenderer = __webpack_require__(78)
var SvgRenderer = __webpack_require__(79)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1)
  var argsNum = args.length
  var isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var G = __webpack_require__(61)

module.exports = function() {
  return (
    typeof G.Promise === 'function' &&
    typeof G.Promise.prototype.then === 'function'
  )
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
module.exports = (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)
var Utils = __webpack_require__(1)
var ECLevel = __webpack_require__(15)
var BitBuffer = __webpack_require__(63)
var BitMatrix = __webpack_require__(64)
var AlignmentPattern = __webpack_require__(65)
var FinderPattern = __webpack_require__(66)
var MaskPattern = __webpack_require__(67)
var ECCode = __webpack_require__(22)
var ReedSolomonEncoder = __webpack_require__(68)
var Version = __webpack_require__(23)
var FormatInfo = __webpack_require__(71)
var Mode = __webpack_require__(2)
var Segments = __webpack_require__(72)
var isArray = __webpack_require__(14)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = new Buffer(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (!maskPattern) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version
  var mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),
/* 63 */
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Buffer(size * size)
  this.data.fill(0)
  this.reservedBit = new Buffer(size * size)
  this.reservedBit.fill(0)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__(1).getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__(1).getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)
var Polynomial = __webpack_require__(69)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree)
  pad.fill(0)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = new Buffer(this.degree)
    buff.fill(0)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)
var GF = __webpack_require__(70)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1)
  coeff.fill(0)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)

var EXP_TABLE = new Buffer(512)
var LOG_TABLE = new Buffer(256)

/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(1)

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(2)
var NumericData = __webpack_require__(73)
var AlphanumericData = __webpack_require__(74)
var ByteData = __webpack_require__(75)
var KanjiData = __webpack_require__(76)
var Regex = __webpack_require__(24)
var Utils = __webpack_require__(1)
var dijkstra = __webpack_require__(77)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(2)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(2)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(5)
var Mode = __webpack_require__(2)

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Buffer(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(2)
var Utils = __webpack_require__(1)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(25)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = Utils.getImageWidth(qrData.modules.size, opts)

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(25)

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255
  var str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  var path = ''
  var moveBy = 0
  var newRow = false
  var lineLength = 0

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size)
    var row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = size + opts.margin * 2

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + '>' + bg + path + '</svg>'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__ = __webpack_require__(81);



/* harmony default export */ __webpack_exports__["a"] = ({
	fldXdr: {
		elem: null,
		selector: '#fldXdr'
	},
	root: {
		elem: null,
		selector: '#paymentAwaitingView'
	},
	statusElem: {
		selector: '#paymentAwaitingStatus',
		elem: null,
		l10nKey: 'paymentAwaitingStatus'
	},
	goBackLink: {
		selector: '#paymentAwaitingGoBack',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_0__ui_index__["b" /* prevView */]
		}
	},
	qrCodeCanvas: {
		selector: '#qrCodeCanvas',
		elem: null
	},
	qrCodeSpinner: {
		selector: '#qrCodeSpinner',
		elem: null
	},
	paymentAwaitingTransactionInfo: {
		selector: '#paymentAwaitingTransactionInfo',
		elem: null,
		l10nKey: 'paymentAwaitingTransactionInfo'
	},
	paymentAwaitingTransactionInfo1: {
		selector: '#paymentAwaitingTransactionInfo1',
		elem: null,
		l10nKey: 'paymentAwaitingTransactionInfo1'
	},
	linkShowWalletPicker: {
		selector: '#linkShowWalletPicker',
		elem: null,
		l10nKey: 'changeQrCode'
	},
	walletPicker: {
		selector: '#walletPicker',
		elem: null
	},
	walletPickerLabel: {
		selector: '#walletPickerLabel',
		elem: null,
		l10nKey: 'qrCodeFormat'
	},
	stellarCheckoutConfirmTo: {
		selector: '#stellarCheckoutConfirmTo',
		elem: null
	},
	stellarCheckoutConfirmToLabel: {
		selector: '#stellarCheckoutConfirmToLabel',
		elem: null,
		l10nKey: 'toLabel'
	},
	stellarCheckoutConfirmToClipboard: {
		selector: '#stellarCheckoutConfirmToClipboard',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__["a" /* onCopyField */]
		}
	},
	stellarCheckoutConfirmFrom: {
		selector: '#stellarCheckoutConfirmFrom',
		elem: null
	},
	stellarCheckoutConfirmFromLabel: {
		selector: '#stellarCheckoutConfirmFromLabel',
		elem: null,
		l10nKey: 'fromLabel'
	},
	stellarCheckoutConfirmFromClipboard: {
		selector: '#stellarCheckoutConfirmFromClipboard',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__["a" /* onCopyField */]
		}
	},
	stellarCheckoutConfirmMemo: {
		selector: '#stellarCheckoutConfirmMemo',
		elem: null
	},
	stellarCheckoutConfirmMemoLabel: {
		selector: '#stellarCheckoutConfirmMemoLabel',
		elem: null,
		l10nKey: 'memoLabel'
	},
	stellarCheckoutConfirmMemoClipboard: {
		selector: '#stellarCheckoutConfirmMemoClipboard',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__["a" /* onCopyField */]
		}
	},
	stellarCheckoutConfirmMemoType: {
		selector: '#stellarCheckoutConfirmMemoType',
		elem: null
	},
	stellarCheckoutConfirmMemoTypeLabel: {
		selector: '#stellarCheckoutConfirmMemoTypeLabel',
		elem: null,
		l10nKey: 'memoTypeLabel'
	},
	stellarCheckoutConfirmAmount: {
		selector: '#stellarCheckoutConfirmAmount',
		elem: null
	},
	stellarCheckoutConfirmAmountLabel: {
		selector: '#stellarCheckoutConfirmAmountLabel',
		elem: null,
		l10nKey: 'amountLabel'
	},
	stellarCheckoutConfirmAmountClipboard: {
		selector: '#stellarCheckoutConfirmAmountClipboard',
		elem: null,
		events: {
			click: __WEBPACK_IMPORTED_MODULE_1__payment_awaiting_events__["a" /* onCopyField */]
		}
	}
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onCopyField;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_clipboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__l10n__ = __webpack_require__(4);




let isCopying = false;

function onCopyField(e) {
    if (isCopying) {
        return;
    }
    isCopying = true;
    var copied = __WEBPACK_IMPORTED_MODULE_1__utils_clipboard__["a" /* copy */].call(this, e.target.parentNode.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].SELECTOR.clipBoardInput));
    if (copied) {
        var l = __WEBPACK_IMPORTED_MODULE_2__l10n__["b" /* default */].localizer;
        var elem = document.createElement('span');
        elem.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CLASS.copied);
        elem.innerHTML = l.localize('isCopied', 'copied');
        e.target.blur();
        e.target.parentNode.parentNode.parentNode.appendChild(elem);
        setTimeout(function() {
            e.target.parentNode.parentNode.parentNode.removeChild(elem);
            isCopying = false;
        }, 400);
    }
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	'en': {
		'paymentAwaitingStatus': 'Awaiting Payment',
		'paymentAwaitingTransactionInfo': 'Complete this transaction by scanning the QR code. The QR code contains a ready to be signed XDR envelope. ',
		'paymentAwaitingTransactionInfo1': 'Alternatively, manually create a payment with the following information:',
		'changeQrCode': 'change qrcode format',
		'qrCodeFormat': 'QRCode Format',
		'toLabel': 'To',
		'fromLabel': 'From',
		'memoLabel': 'Memo',
		'memoTypeLabel': 'Memo Type',
		'amountLabel': 'Amount',
		'transactionReceived': 'transaction received',
		'processingTransaction': 'processing transaction',
		'verifyingTransaction': 'verifying transaction',
		'paymentComplete': 'payment complete'
	},
	'cs-cz': {
		'paymentAwaitingStatus': 'Čeká na platbu',
		'paymentAwaitingTransactionInfo': 'Dokončete tuto transakci skenováním QR kódu. QR kód obsahuje připravenou podepsanou obálku XDR. ',
		'paymentAwaitingTransactionInfo1': 'Alternativně můžete ručně vytvořit platbu s následujícími informacemi:',
		'changeQrCode': 'změnit formát qrcode',
		'qrCodeFormat': 'QRCode Format',
		'toLabel': 'Na',
		'fromLabel': 'Od',
		'memoLabel': 'Memo',
		'memoTypeLabel': 'Typ poznámky',
		"amountLabel": "částka",
		'transactionReceived': 'přijatá transakce',
		"processingTransaction": "zpracování transakce",
		'verifyingTransaction': 'ověřovací transakce',
		'paymentComplete': 'payment completed'
	},
	'da-dk': {
		'paymentAwaitingStatus': 'Afventer betaling',
		'paymentAwaitingTransactionInfo': 'Fuldfør denne transaktion ved at scanne QR-koden. QR-koden indeholder en klar til at blive underskrevet XDR-konvolut. ',
		'paymentAwaitingTransactionInfo1': 'Alternativt skal du manuelt oprette en betaling med følgende oplysninger:',
		'changeQrCode': 'skift qrcode format',
		'qrCodeFormat': 'QRCode Format',
		'toLabel': 'Til',
		'fromLabel': 'Fra',
		'memoLabel': 'Memo',
		'memoTypeLabel': 'Memo Type',
		'amountLabel': 'Beløb',
		'transactionReceived': 'modtaget transaktion',
		'processingTransaction': 'behandlingstransaktion',
		'verifyingTransaction': 'verificerende transaktion',
		'paymentComplete': 'betaling fuldført'
	},
	'de-de': {
		'paymentAwaitingStatus': 'Warten auf Zahlung',
		'paymentAwaitingTransactionInfo': 'Schließen Sie diese Transaktion ab, indem Sie den QR-Code scannen. Der QR-Code enthält einen fertig signierten XDR-Umschlag. ',
		'paymentAwaitingTransactionInfo1': 'Alternativ können Sie manuell eine Zahlung mit den folgenden Informationen erstellen:',
		'changeQrCode': 'qrcode format ändern',
		'qrCodeFormat': 'QRCode Format',
		'toLabel': 'Zu',
		'fromLabel': 'Von',
		'memoLabel': 'Memo',
		'memoTypeLabel': 'Memotyp',
		'amountLabel': 'Betrag',
		'transactionReceived': 'Transaktion erhalten',
		'processingTransaction': 'Verarbeitung der Transaktion',
		'verifyingTransaction': "Überprüfung der Transaktion",
		'paymentComplete': 'Zahlung abgeschlossen'
	},
	'es-es': {
		'paymentAwaitingStatus': 'En espera de pago',
		'paymentAwaitingTransactionInfo': 'Complete esta transacción escaneando el código QR. El código QR contiene un sobre XDR listo para ser firmado. ',
		'paymentAwaitingTransactionInfo1': 'Alternativamente, cree manualmente un pago con la siguiente información:',
		'changeQrCode': 'cambiar el formato de qrcode',
		'qrCodeFormat': 'Formato de código QR',
		'toLabel': 'A',
		'fromLabel': 'De',
		'memoLabel': 'Memo',
		'memoTypeLabel': 'Tipo de Memo',
		'amountLabel': 'Cantidad',
		'transactionReceived': 'transacción recibida',
		'processingTransaction': 'procesamiento de la transacción',
		'verifyingTransaction': 'verificar la transacción',
		'paymentComplete': 'pago completo'
	},
	'fr-fr': {
		'paymentAwaitingStatus': 'En attente de paiement',
		'paymentAwaitingTransactionInfo': 'Terminez cette transaction en scannant le code QR. Le code QR contient une enveloppe XDR prête à être signée. ',
		'paymentAwaitingTransactionInfo1': 'Sinon, créez manuellement un paiement avec les informations suivantes:',
		'changeQrCode': 'change le format du qrcode',
		'qrCodeFormat': 'Format QRCode',
		'toLabel': 'À',
		'fromLabel': 'De',
		'memoLabel': 'Mémo',
		'memoTypeLabel': 'Type de mémo',
		'amountLabel': 'Montant',
		'transactionReceived': 'transaction reçue',
		'processingTransaction': 'transaction de traitement',
		'verifyingTransaction': 'vérification de transaction',
		'paymentComplete': 'paiement complet'
	},
	'hu-hu': {
		'paymentAwaitingStatus': 'Fizetés várakozás',
		'paymentAwaitingTransactionInfo': 'Végezze el a tranzakciót a QR-kód beolvasásával. A QR-kód tartalmaz egy aláírásra kész XDR borítékot. ',
		'paymentAwaitingTransactionInfo1': 'Alternatívaként kézzel is készíthet fizetést az alábbi információkkal:',
		'changeQrCode': 'változás qrcode formátumban',
		'qrCodeFormat': 'QRCode Format',
		'toLabel': 'Nak nek',
		"FromLabel": "Tól től",
		'memoLabel': 'Memo',
		'memoTypeLabel': 'Emlékeztető típusa',
		"amountLabel": "Összeg",
		"transactionReceived": "beérkezett tranzakció",
		"processingTransaction": "feldolgozási tranzakció",
		'verifyingTransaction': 'tranzakció ellenőrzése',
		"paymentComplete": "teljes fizetés"
	},
	'id-id': {
		'paymentAwaitingStatus': 'Menunggu Pembayaran',
		'paymentAwaitingTransactionInfo': 'Selesaikan transaksi ini dengan memindai kode QR. Kode QR berisi amplop XDR yang siap ditandatangani. ',
		'paymentAwaitingTransactionInfo1': 'Sebagai alternatif, buat pembayaran secara manual dengan informasi berikut:',
		'changeQrCode': 'ubah format qrcode',
		'qrCodeFormat': 'QRCode Format',
		'toLabel': 'Untuk',
		'fromLabel': 'Dari',
		'memoLabel': 'Memo',
		'memoTypeLabel': 'Jenis Memo',
		'amountLabel': 'Jumlah',
		'transactionReceived': 'transaksi diterima',
		'processingTransaction': 'pengolahan transaksi',
		'verifyingTransaction': 'memverifikasi transaksi',
		'paymentComplete': 'pembayaran selesai'
	},
	'it-it': {
		'paymentAwaitingStatus': 'In attesa di pagamento',
		'paymentAwaitingTransactionInfo': 'Completa questa transazione scansionando il codice QR. Il codice QR contiene una busta XDR pronta per essere firmata. ',
		'paymentAwaitingTransactionInfo1': 'In alternativa, crea manualmente un pagamento con le seguenti informazioni:',
		'changeQrCode': 'cambia formato qrcode',
		'qrCodeFormat': 'Formato QRCode',
		'toLabel': "A",
		'fromLabel': 'Da',
		'memoLabel': 'Promemoria',
		'memoTypeLabel': 'Promemoria Tipo',
		'amountLabel': 'Importo',
		'transactionReceived': 'transazione ricevuta',
		'processingTransaction': 'transazione di elaborazione',
		'verifyingTransaction': 'verifica della transazione',
		'paymentComplete': 'payment complete'
	},
	'ja-jp': {
		'paymentAwaitingStatus': 'お支払い待ち',
		'paymentAwaitingTransactionInfo': 'QRコードをスキャンしてこのトランザクションを完了します。 QRコードには、署名済みのXDRエンベロープが含まれています。 ',
		'paymentAwaitingTransactionInfo1': 'または、次の情報を含む支払いを手動で作成する：',
		'changeQrCode': 'qrcode形式を変更する',
		'qrCodeFormat': 'QRコード形式',
		'toLabel': 'に',
		'fromLabel': 'から',
		'memoLabel': 'メモ',
		'memoTypeLabel': 'メモ型',
		'amountLabel': '金額',
		'transactionReceived': 'トランザクション受信済み',
		'processingTransaction': '処理中のトランザクション',
		'verifyingTransaction': 'トランザクションの確認',
		'paymentComplete': '支払い完了'
	},
	'ko-kr': {
		'paymentAwaitingStatus': '지불 대기 중',
		'paymentAwaitingTransactionInfo': 'QR 코드를 스캔하여이 거래를 완료하십시오. QR 코드에는 서명 할 준비가 된 XDR 봉투가 들어 있습니다. ',
		'paymentAwaitingTransactionInfo1': '또는 다음 정보가 포함 된 지불을 수동으로 생성하십시오.',
		'changeQrCode': 'qrcode 형식 변경',
		'qrCodeFormat': 'QRCode 형식',
		'toLabel': '에',
		'fromLabel': '보낸 사람',
		'memoLabel': '메모',
		'memoTypeLabel': '메모 유형',
		'amountLabel': '금액',
		'transactionReceived': '거래 접수 됨',
		'processingTransaction': '거래 처리 중',
		'verifyingTransaction': '거래 확인',
		'paymentComplete': '지불 완료'
	},
	'pl-pl': {
		"paymentAwaitingStatus": "Oczekiwanie na płatność",
		"paymentAwaitingTransactionInfo": "Zakończ tę transakcję, skanując kod QR. Kod QR zawiera gotową do podpisania kopertę XDR. ",
		"paymentAwaitingTransactionInfo1": "Alternatywnie, ręcznie utwórz płatność z następującymi informacjami:",
		"changeQrCode": "zmień format qrcode",
		"qrCodeFormat": "Format QRCode",
		"toLabel": "Do",
		"fromLabel": "Od",
		"memoLabel": "Notatka",
		"memoTypeLabel": "Typ noty",
		"amountLabel": "Kwota",
		"transactionReceived": "transakcja otrzymana",
		"processingTransaction": "przetwarzanie transakcji",
		"verifyingTransaction": "weryfikacja transakcji",
		"paymentComplete": "płatność zakończona"
	},
	'pt-br': {
		'paymentAwaitingStatus': 'Aguardando pagamento',
		'paymentAwaitingTransactionInfo': 'Complete esta transação digitalizando o código QR. O código QR contém um envelope XDR pronto para ser assinado. ',
		'paymentAwaitingTransactionInfo1': 'Alternativamente, crie manualmente um pagamento com as seguintes informações:',
		'changeQrCode': 'alterar o formato qrcode',
		'qrCodeFormat': 'Formato QRCode',
		'toLabel': 'Para',
		'fromLabel': 'A partir de',
		'memoLabel': 'Memorando',
		'memoTypeLabel': 'Tipo de Memorando',
		'amountLabel': 'Montante',
		'transactionReceived': 'transação recebida',
		'processingTransaction': 'transação de processamento',
		'verifyingTransaction': 'verificar transação',
		'paymentComplete': 'pagamento completo'
	},
	'ru-ru': {
		'paymentAwaitingStatus': 'Ожидание платежа',
		'paymentAwaitingTransactionInfo': 'Завершите эту транзакцию, просмотрев QR-код. QR-код содержит готовый к подписанию XDR-конверт. ',
		'paymentAwaitingTransactionInfo1': 'В качестве альтернативы вручную создайте платеж со следующей информацией:',
		'changeQrCode': 'изменить формат qrcode',
		'qrCodeFormat': 'Формат QRCode',
		'toLabel': 'к',
		'fromLabel': 'Из',
		'memoLabel': 'меморандум',
		'memoTypeLabel': 'Тип напоминания',
		'amountLabel': 'Количество',
		'transactionReceived': 'полученная транзакция',
		'processingTransaction': 'транзакция обработки',
		'verifyingTransaction': 'проверка транзакции',
		'paymentComplete': 'платеж завершен'
	},
	'sv-se': {
		"paymentAwaitingStatus": "Väntar på betalning",
		'paymentAwaitingTransactionInfo': 'Fyll i denna transaktion genom att skanna QR-koden. QR-koden innehåller ett klart signerat XDR-kuvert. ',
		'paymentAwaitingTransactionInfo1': 'Alternativt, manuellt skapa en betalning med följande information:',
		'changeQrCode': 'ändra qrcode format',
		'qrCodeFormat': 'QRCode Format',
		'toLabel': 'Till',
		'fromLabel': 'Från',
		'memoLabel': 'PM',
		'memoTypeLabel': 'PM Typ',
		'amountLabel': 'Belopp',
		"transactionReceived": "mottagen transaktion",
		"processingTransaction": "bearbetningstransaktion",
		"verifyingTransaction": "verifierande transaktion",
		'paymentComplete': 'betalning slutförd'
	},
	'th-th': {
		'paymentAwaitingStatus': 'Kảlạng rx kār chảra ngein',
		'paymentAwaitingTransactionInfo': 'Thả rāykār nī̂ h̄ı̂ s̄mbūrṇ̒ doy kār s̄kæn khôd QR khôd QR prakxbd̂wy phr̂xm thī̀ ca lng nām nı sxng cdh̄māy XDR',
		'paymentAwaitingTransactionInfo1': 'H̄rụ̄x s̄r̂āng kār chảra ngein d̂wy tnxeng d̂wy k̄ĥxmūl t̀x pị nī̂:',
		'changeQrCode': 'Pelī̀yn rūp bæb qrcode',
		'qrCodeFormat': 'Rūp bæb QRCode',
		'toLabel': 'T̄hụng',
		'fromLabel': 'Cāk',
		'memoLabel': 'K̄ĥx khwr cả',
		'memoTypeLabel': 'Prap̣heth k̄ĥx khwr cả',
		'amountLabel': 'Cảnwn ngein',
		'transactionReceived': 'Rāykār thī̀ dị̂ rạb',
		'processingTransaction': 'Pramwl p̄hl ṭhurkrrm',
		'verifyingTransaction': 'Yụ̄nyạn kār thả ṭhurkrrm',
		'paymentComplete': 'Kār chảra ngein s̄er̆c s̄mbūrṇ̒'
	},
	'tr-tr': {
		'paymentAwaitingStatus': 'Ödeme Bekliyor',
		'paymentAwaitingTransactionInfo': 'QR kodunu tarayarak bu işlemi tamamlayın. QR kodu imzalanmış bir XDR zarf içeriyor. ',
		'paymentAwaitingTransactionInfo1': 'Alternatif olarak, şu bilgileri içeren bir ödeme oluşturun:',
		'changeQrCode': 'qrcode biçimi değiştir',
		'qrCodeFormat': 'QRCode Biçimi',
		'toLabel': 'için',
		'fromLabel': 'itibaren',
		'memoLabel': 'Not',
		'memoTypeLabel': 'Not Türü',
		'amountLabel': 'Tutar',
		'transactionReceived': 'işlem alındı',
		'processingTransaction': 'işleme işlemi',
		'verifyingTransaction': 'işlem doğrulanıyor',
		'paymentComplete': 'ödeme tamamlandı'
	},
	'zh-cn': {
		'paymentAwaitingStatus': 'Děngdài zhīfù',
		'paymentAwaitingTransactionInfo': 'Tōngguò sǎomiáo QR mǎ wánchéng cǐ jiāoyì. QR mǎ bāohán kěyǐ bèi qiānmíng de XDR xìnfēng. ',
		'paymentAwaitingTransactionInfo1': 'Huòzhě, shǐyòng yǐxià xìnxī shǒudòng chuàngjiàn fùkuǎn:',
		'changeQrCode': 'Gēnggǎi qrcode géshì',
		'qrCodeFormat': 'QRCode géshì',
		'toLabel': 'Zhì',
		'fromLabel': 'Cóng',
		'memoLabel': 'Bèiwànglù',
		'memoTypeLabel': 'Bèiwànglù lèixíng',
		'amountLabel': 'Jīn\'é',
		'transactionReceived': 'Shōu dào de jiāoyì',
		'processingTransaction': 'Chǔlǐ jiāoyì',
		'verifyingTransaction': 'Yànzhèng jiāoyì',
		'paymentComplete': 'Fùkuǎn wánchéng'
	},
	'zu-za': {
		'paymentAwaitingStatus': 'Wag op betaling',
		'paymentAwaitingTransactionInfo': 'Voltooi hierdie transaksie deur die QR-kode te skandeer. Die QR-kode bevat \'n ondertekende XDR koevert. ',
		'paymentAwaitingTransactionInfo1': 'Alternatiewelik, maak \'n betaling handmatig met die volgende inligting:',
		'changeQrCode': 'verander qrcode formaat',
		'qrCodeFormat': 'QRCode Formaat',
		'toLabel': 'Om',
		'fromLabel': 'Van',
		'memoLabel': 'Memo',
		'memoTypeLabel': 'Memo tipe',
		'amountLabel': 'Bedrag',
		'transactionReceived': 'transaksie ontvang',
		'processingTransaction': 'verwerkingstransaksie',
		'verifyingTransaction': 'verifiërende transaksie',
		'paymentComplete': 'betaling voltooi'
	}
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(84)
var H = __webpack_require__(13);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div id=\"paymentAwaitingView\" class=\"stellar_checkout_payment_awaiting stellar_checkout_hidden\">\r\n\t<div class=\"stellar_checkout_header\">\r\n\t\t<span id=\"paymentAwaitingGoBack\" class=\"stellar_checkout_goback\">\r\n\t\t\t<i class=\"fas fa-chevron-circle-left\"></i>\r\n\t\t</span>\r\n\t\t<div class=\"stellar_checkout_logo\">\r\n\t\t\t<img alt=\"\" class=\"stellar_checkout_rocket\" src=\"" + __webpack_require__(9) + "\" />\r\n\t\t\t<span class=\"stellar_checkout_app_name\">stellar checkout</span>\r\n\t\t</div>\r\n\t\t<div class=\"stellar_checkout_header_alt\">\r\n\t\t\t<div class=\"stellar_checkout_qr_wrap\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<span id=\"qrCodeSpinner\" class=\"stellar_checkout_spinner\"><i class=\"fas fa-spinner fa-spin\"></i></span>\r\n\t\t\t\t\t<canvas id=\"qrCodeCanvas\" class=\"stellar_checkout_qrcode stellar_checkout_hidden\"></canvas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"paymentAwaitingStatus\" class=\"stellar_checkout_status\">\r\n\t\t\t\t<span>Awaiting Payment</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<textarea id=\"fldXdr\" class=\"stellar_checkout_offscreen\"></textarea>\r\n\t<div class=\"stellar_checkout_transaction_info\">\r\n\t\t<span id=\"paymentAwaitingTransactionInfo\">Complete this transaction by scanning the QR code. The QR code contains a ready to be signed XDR envelope. </span>\r\n\t\t<a id=\"linkShowWalletPicker\" href=\"#\">change qrcode format</a>.\r\n\t\t<span id=\"paymentAwaitingTransactionInfo1\">Alternatively, manually create a payment with the following information:</span>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field stellar_checkout_hidden\">\r\n\t\t<label id=\"walletPickerLabel\" for=\"walletPicker\">QRCode Format</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--picker\">\r\n\t\t\t<select id=\"walletPicker\" class=\"stellar_checkout_picker\">\r\n\t\t\t\t<option value=\"envelopexdr\">XDR</option>\r\n\t\t\t\t<option value=\"destinationkey\">Public Key</option>\r\n\t\t\t\t<option value=\"stargazer\">Stargazer Wallet</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label id=\"stellarCheckoutConfirmToLabel\" for=\"stellarCheckoutConfirmTo\">To</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--clipboard\">\r\n\t\t\t<textarea id=\"stellarCheckoutConfirmTo\" class=\"stellar_checkout_txt\" readonly>{{payment.to}}</textarea>\r\n\t\t\t<span class=\"stellar_checkout_clipboard\">\r\n\t\t\t\t<i class=\"fas fa-copy\"></i>\r\n\t\t\t\t<span id=\"stellarCheckoutConfirmToClipboard\" class=\"stellar_checkout_clipboard_click\"></span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label id=\"stellarCheckoutConfirmFromLabel\" for=\"stellarCheckoutConfirmFrom\">From</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--clipboard\">\r\n\t\t\t<textarea id=\"stellarCheckoutConfirmFrom\" class=\"stellar_checkout_txt\" readonly>{{payment.from}}</textarea>\r\n\t\t\t<span class=\"stellar_checkout_clipboard\">\r\n\t\t\t\t<i class=\"fas fa-copy\"></i>\r\n\t\t\t\t<span id=\"stellarCheckoutConfirmFromClipboard\" class=\"stellar_checkout_clipboard_click\"></span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label id=\"stellarCheckoutConfirmMemoLabel\" for=\"stellarCheckoutConfirmMemo\">Memo</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--clipboard\">\r\n\t\t\t<textarea id=\"stellarCheckoutConfirmMemo\" class=\"stellar_checkout_txt\" readonly>{{payment.memo}}</textarea>\r\n\t\t\t<span class=\"stellar_checkout_clipboard\">\r\n\t\t\t\t<i class=\"fas fa-copy\"></i>\r\n\t\t\t\t<span id=\"stellarCheckoutConfirmMemoClipboard\" class=\"stellar_checkout_clipboard_click\"></span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label id=\"stellarCheckoutConfirmMemoTypeLabel\" for=\"stellarCheckoutConfirmMemoType\">Memo Type</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--picker\">\r\n\t\t\t<select id=\"stellarCheckoutConfirmMemoType\" class=\"stellar_checkout_picker\" disabled>\r\n\t\t\t\t<option value=\"hash\" selected>MemoHash</option>\r\n\t\t\t\t<option value=\"id\">MemoID</option>\r\n\t\t\t\t<option value=\"none\">MemoNone</option>\r\n\t\t\t\t<option value=\"return\">MemoReturn</option>\r\n\t\t\t\t<option value=\"text\">MemoText</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"stellar_checkout_field\">\r\n\t\t<label id=\"stellarCheckoutConfirmAmountLabel\" for=\"stellarCheckoutConfirmAmount\">Amount</label>\r\n\t\t<div class=\"stellar_checkout_txtwrap stellar_checkout_txtwrap--input stellar_checkout_txtwrap--clipboard\">\r\n\t\t\t<input id=\"stellarCheckoutConfirmAmount\" class=\"stellar_checkout_txt\" type=\"text\" value=\"{{payment.amount}}\" readonly></input>\r\n\t\t\t<span class=\"stellar_checkout_currency\">XLM</span>\r\n\t\t\t<span class=\"stellar_checkout_clipboard\">\r\n\t\t\t\t<i class=\"fas fa-copy\"></i>\r\n\t\t\t\t<span id=\"stellarCheckoutConfirmAmountClipboard\" class=\"stellar_checkout_clipboard_click\"></span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_elems__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_view__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_complete_elems__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_complete_l10n_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_payment_complete_mustache_html__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_payment_complete_mustache_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__templates_payment_complete_mustache_html__);









class PaymentCompleteView extends __WEBPACK_IMPORTED_MODULE_3__base_view__["a" /* default */] {

	constructor() {
		super(__WEBPACK_IMPORTED_MODULE_4__payment_complete_elems__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__templates_payment_complete_mustache_html___default.a, __WEBPACK_IMPORTED_MODULE_5__payment_complete_l10n_js__["a" /* default */]);
	}

	create() {
		super.create();
	}

	destroy() {
		super.destroy();
	}

	hide() {
		super.hide();
	}

	show() {
		super.show();
	}

	update() {
		super.update();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PaymentCompleteView;
;

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	root: {
		elem: null,
		selector: '#paymentCompleteView'
	},
	paymentCompleteMessage: {
		elem: null,
		selector: '#paymentCompleteMessage',
		l10nKey: 'paymentCompleteMessage'
	}
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	'en': {
		'paymentCompleteMessage': 'Payment complete'
	},
	'cs-cz': {
		'paymentCompleteMessage': 'Platba byla dokončena'
	},
	'da-dk': {
		'paymentCompleteMessage': 'Betaling fuldført'
	},
	'de-de': {
		'paymentCompleteMessage': 'Zahlung abgeschlossen'
	},
	'es-es': {
		'paymentCompleteMessage': 'Pago completo'
	},
	'it-it': {
		'paymentCompleteMessage': 'Pagamento completato'
	},
	'fr-fr': {
		'paymentCompleteMessage': 'Paiement terminé'
	},
	'hu-hu': {
		"paymentCompleteMessage": "Fizetés kész"
	},
	'id-id': {
		'paymentCompleteMessage': 'Pembayaran selesai'
	},
	'ja-jp': {
		'paymentCompleteMessage': '支払い完了'
	},
	'ko-kr': {
		'paymentCompleteMessage': '지불 완료'
	},
	'pl-pl': {
		"paymentCompleteMessage": "Płatność została zrealizowana"
	},
	'pt-br': {
		'paymentCompleteMessage': 'Pagamento completo'
	},
	'ru-ru': {
		'paymentCompleteMessage': 'полная оплата'
	},
	'sv-se': {
		'PaymentCompleteMessage': 'Betalning komplett'
	},
	'th-th': {
		'paymentCompleteMessage': 'Kār chảra ngein s̄er̆c s̄mbūrṇ̒'
	},
	'tr-tr': {
		'paymentCompleteMessage': 'Ödeme tamamlandı'
	},
	'zh-cn': {
		'paymentCompleteMessage':'Fùkuǎn wánchéng'
	},
	'zu-za': {
		'paymentCompleteMessage': 'Betaling voltooi'
	}
});

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var result = __webpack_require__(89)
var H = __webpack_require__(13);
window.Hogan = H;
module.exports = function() {
var T = H.compile(result, {"tiny":true});
return T.render.apply(T, arguments); };

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<div id=\"paymentCompleteView\" class=\"stellar_checkout_payment_complete stellar_checkout_hidden\">\r\n\t<div id=\"paymentCompleteMessage\" class=\"stellar_checkout_message\">Payment complete</div>\r\n</div>";

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__l10n__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_elems__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stellarsdk_helper__ = __webpack_require__(7);






function checkCurrency(currency) {
	return new Promise(function(resolve, reject) {
		if (!currency) {
			reject(new Error('currency is required'));
		}
		if (typeof currency !== 'string') {
			reject(new Error('currency must be a string'));
		}
		if (currency === '') {
			reject(new Error('currency is required'));
		}
		if (__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CURRENCIES.indexOf(currency) === -1) {
			reject(new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + '; currency not supported. allowed currencies: ' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CURRENCIES.join(', ') + ';'));
		}
		resolve(true);
	});
};

function checkDestinationKey(destinationKey) {
	return new Promise(function(resolve, reject) {
		if (!window.StellarSdk.StrKey.isValidEd25519PublicKey(destinationKey)) {
			reject(new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': destinationKey is invalid;'));
		}
		resolve(true);
	});
};

function checkLang(lang) {
	return new Promise(function(resolve, reject) {
		if (lang && typeof lang !== 'string') {
			reject('lang must be a string');
		}
		var culturesLowerCase = __WEBPACK_IMPORTED_MODULE_1__l10n__["a" /* cultures */].map(function(value) {
			return value.toLowerCase();
		});
		if (culturesLowerCase.indexOf(lang.toLowerCase()) === -1) {
			console.log(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': lang not supported. falling back to \'en\'. allowed cultures: ' + __WEBPACK_IMPORTED_MODULE_1__l10n__["a" /* cultures */].join(', ') + ';');
		}
		resolve(true);
	});
};

function checkMemo(memo) {
	return new Promise(function(resolve, reject) {
		if (memo && typeof memo !== 'string') {
			reject(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': memo field must be a string;');
		}
		resolve(true);
	});
};

function checkOnSubmit(onSubmit) {
	return new Promise(function(resolve, reject) {
		if (onSubmit && typeof onSubmit !== 'function') {
			reject(new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': onSubmit must be a function;'));
		}
		resolve(true);
	});
};

function checkSelector(selector) {
	return new Promise(function(resolve, reject) {
		var targetElem = document.querySelector(selector);
		if (!targetElem) {
			reject(new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': selector not found;'));
			return;
		}
		__WEBPACK_IMPORTED_MODULE_2__ui_elems__["a" /* default */].targetElem.elem = targetElem;
		__WEBPACK_IMPORTED_MODULE_2__ui_elems__["a" /* default */].targetElem.selector = selector;
		resolve(true);
	});
};

function checkStyleSheet(stylesheet) {
	return new Promise(function(resolve, reject) {
		if (stylesheet && typeof stylesheet !== 'string') {
			reject(new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': stylesheet must be a string;'));
		}
		if (stylesheet) {
			return new __WEBPACK_IMPORTED_MODULE_3__loader__["a" /* default */].css(stylesheet);
		}
		resolve(true);
	});
};

function checkTotal(total) {
	return new Promise(function(resolve, reject) {
		if (!total) {
			reject(new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': total is required;'));
		}
		if (isNaN(total)) {
			reject(new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': total must be numeric;'));
		}
		if (total <= 0) {
			reject(new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].APP.name + ': total must be greater than zero;'));
		}
		resolve(true);
	});
};

function validateConfig(options) {
	return __WEBPACK_IMPORTED_MODULE_3__loader__["a" /* default */].js(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].STELLAR_SDK_URL)
		.then(checkStyleSheet(options.stylesheet))
		.then(function() {
		return Promise.all([
			checkSelector(options.selector),
			checkCurrency(options.currency),
			checkDestinationKey(options.destinationKey),
			checkLang(options.lang),
			checkMemo(options.memo),
			checkOnSubmit(options.onSubmit),
			checkTotal(options.total)
		]);
	});
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _load(tag) {
  return function(url) {
    // This promise will be used by Promise.all to determine success or failure
    return new Promise(function(resolve, reject) {
      var element = document.createElement(tag);
      var parent = 'body';
      var attr = 'src';

      // Important success and error for the promise
      element.onload = function() {
        resolve(url);
      };
      element.onerror = function(err) {
        reject(new Error('could not load url: ' + url));
      };

      // Need to set different attributes depending on tag type
      switch(tag) {
        case 'script':
          element.async = true;
          break;
        case 'link':
          element.type = 'text/css';
          element.rel = 'stylesheet';
          attr = 'href';
          parent = 'head';
      }

      // Inject into document to kick off loading
      element[attr] = url;
      document[parent].appendChild(element);
    });
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  css: _load('link'),
  js: _load('script'),
  img: _load('img')
});

/***/ })
/******/ ])["default"];
});
>>>>>>> parent of a4b59fd... no message
//# sourceMappingURL=stellar-checkout.js.map
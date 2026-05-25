const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-BwtxoCa3.js","assets/about-DpmJhWcr.css","assets/resume-ERvLXvnA.js","assets/resume-BsPdJ-Ub.css","assets/portfolio-DXRJ9a3k.js","assets/portfolio-B67dPeLl.css","assets/pythonCode-DE30Nmcp.js","assets/python-EZkFh8iX.js","assets/python-xUpPpDMJ.css","assets/pythonCode-hIBgR2nI.css","assets/dataAnalysis-DRhsEjhc.js","assets/dataAnalysis-AY0or3jQ.css","assets/contact-Dfd8ICnF.js","assets/contact-Bs1beZIv.css","assets/notFound-WuNYydBN.js","assets/notFound-E74QhhxE.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ri(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const oe={},An=[],lt=()=>{},Va=()=>!1,dr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Pi=e=>e.startsWith("onUpdate:"),ye=Object.assign,Oi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xc=Object.prototype.hasOwnProperty,se=(e,t)=>Xc.call(e,t),j=Array.isArray,En=e=>hr(e)==="[object Map]",qa=e=>hr(e)==="[object Set]",F=e=>typeof e=="function",pe=e=>typeof e=="string",Ht=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Wa=e=>(ue(e)||F(e))&&F(e.then)&&F(e.catch),Ga=Object.prototype.toString,hr=e=>Ga.call(e),eu=e=>hr(e).slice(8,-1),Ka=e=>hr(e)==="[object Object]",Ti=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,is=Ri(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},tu=/-\w/g,Fe=pr(e=>e.replace(tu,t=>t.slice(1).toUpperCase())),nu=/\B([A-Z])/g,Bt=pr(e=>e.replace(nu,"-$1").toLowerCase()),mr=pr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tr=pr(e=>e?`on${mr(e)}`:""),kt=(e,t)=>!Object.is(e,t),Nr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ja=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},su=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ya=e=>{const t=pe(e)?Number(e):NaN;return isNaN(t)?e:t};let mo;const gr=()=>mo||(mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ni(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=pe(s)?au(s):Ni(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(pe(e)||ue(e))return e}const ru=/;(?![^(]*\))/g,iu=/:([^]+)/,ou=/\/\*[^]*?\*\//g;function au(e){const t={};return e.replace(ou,"").split(ru).forEach(n=>{if(n){const s=n.split(iu);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ii(e){let t="";if(pe(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const s=Ii(e[n]);s&&(t+=s+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const lu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cu=Ri(lu);function Za(e){return!!e||e===""}const Qa=e=>!!(e&&e.__v_isRef===!0),Bs=e=>pe(e)?e:e==null?"":j(e)||ue(e)&&(e.toString===Ga||!F(e.toString))?Qa(e)?Bs(e.value):JSON.stringify(e,Xa,2):String(e),Xa=(e,t)=>Qa(t)?Xa(e,t.value):En(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Ir(s,i)+" =>"]=r,n),{})}:qa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ir(n))}:Ht(t)?Ir(t):ue(t)&&!j(t)&&!Ka(t)?String(t):t,Ir=(e,t="")=>{var n;return Ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class uu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function fu(){return Ne}let ce;const kr=new WeakSet;class el{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kr.has(this)&&(kr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,go(this),sl(this);const t=ce,n=Je;ce=this,Je=!0;try{return this.fn()}finally{rl(this),ce=t,Je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Di(t);this.deps=this.depsTail=void 0,go(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ni(this)&&this.run()}get dirty(){return ni(this)}}let tl=0,os,as;function nl(e,t=!1){if(e.flags|=8,t){e.next=as,as=e;return}e.next=os,os=e}function ki(){tl++}function Mi(){if(--tl>0)return;if(as){let t=as;for(as=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;os;){let t=os;for(os=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function sl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function rl(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Di(s),du(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function ni(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(il(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function il(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===vs)||(e.globalVersion=vs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ni(e))))return;e.flags|=2;const t=e.dep,n=ce,s=Je;ce=e,Je=!0;try{sl(e);const r=e.fn(e._value);(t.version===0||kt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ce=n,Je=s,rl(e),e.flags&=-3}}function Di(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Di(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function du(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Je=!0;const ol=[];function yt(){ol.push(Je),Je=!1}function _t(){const e=ol.pop();Je=e===void 0?!0:e}function go(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let vs=0;class hu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!Je||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new hu(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,al(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(t){this.version++,vs++,this.notify(t)}notify(t){ki();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Mi()}}}function al(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)al(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const si=new WeakMap,en=Symbol(""),ri=Symbol(""),bs=Symbol("");function $e(e,t,n){if(Je&&ce){let s=si.get(e);s||si.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new zi),r.map=s,r.key=n),r.track()}}function mt(e,t,n,s,r,i){const o=si.get(e);if(!o){vs++;return}const a=l=>{l&&l.trigger()};if(ki(),t==="clear")o.forEach(a);else{const l=j(e),f=l&&Ti(n);if(l&&n==="length"){const u=Number(s);o.forEach((c,p)=>{(p==="length"||p===bs||!Ht(p)&&p>=u)&&a(c)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),f&&a(o.get(bs)),t){case"add":l?f&&a(o.get("length")):(a(o.get(en)),En(e)&&a(o.get(ri)));break;case"delete":l||(a(o.get(en)),En(e)&&a(o.get(ri)));break;case"set":En(e)&&a(o.get(en));break}}Mi()}function vn(e){const t=ee(e);return t===e?t:($e(t,"iterate",bs),je(e)?t:t.map(Ye))}function vr(e){return $e(e=ee(e),"iterate",bs),e}function Rt(e,t){return xt(e)?Bn(tn(e)?Ye(t):t):Ye(t)}const pu={__proto__:null,[Symbol.iterator](){return Mr(this,Symbol.iterator,e=>Rt(this,e))},concat(...e){return vn(this).concat(...e.map(t=>j(t)?vn(t):t))},entries(){return Mr(this,"entries",e=>(e[1]=Rt(this,e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(s=>Rt(this,s)),arguments)},find(e,t){return ut(this,"find",e,t,n=>Rt(this,n),arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,n=>Rt(this,n),arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return Dr(this,"includes",e)},indexOf(...e){return Dr(this,"indexOf",e)},join(e){return vn(this).join(e)},lastIndexOf(...e){return Dr(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return Qn(this,"pop")},push(...e){return Qn(this,"push",e)},reduce(e,...t){return vo(this,"reduce",e,t)},reduceRight(e,...t){return vo(this,"reduceRight",e,t)},shift(){return Qn(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return Qn(this,"splice",e)},toReversed(){return vn(this).toReversed()},toSorted(e){return vn(this).toSorted(e)},toSpliced(...e){return vn(this).toSpliced(...e)},unshift(...e){return Qn(this,"unshift",e)},values(){return Mr(this,"values",e=>Rt(this,e))}};function Mr(e,t,n){const s=vr(e),r=s[t]();return s!==e&&!je(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const mu=Array.prototype;function ut(e,t,n,s,r,i){const o=vr(e),a=o!==e&&!je(e),l=o[t];if(l!==mu[t]){const c=l.apply(e,i);return a?Ye(c):c}let f=n;o!==e&&(a?f=function(c,p){return n.call(this,Rt(e,c),p,e)}:n.length>2&&(f=function(c,p){return n.call(this,c,p,e)}));const u=l.call(o,f,s);return a&&r?r(u):u}function vo(e,t,n,s){const r=vr(e);let i=n;return r!==e&&(je(e)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,e)}):i=function(o,a,l){return n.call(this,o,Rt(e,a),l,e)}),r[t](i,...s)}function Dr(e,t,n){const s=ee(e);$e(s,"iterate",bs);const r=s[t](...n);return(r===-1||r===!1)&&Bi(n[0])?(n[0]=ee(n[0]),s[t](...n)):r}function Qn(e,t,n=[]){yt(),ki();const s=ee(e)[t].apply(e,n);return Mi(),_t(),s}const gu=Ri("__proto__,__v_isRef,__isVue"),ll=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ht));function vu(e){Ht(e)||(e=String(e));const t=ee(this);return $e(t,"has",e),t.hasOwnProperty(e)}class cl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Cu:hl:i?dl:fl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=j(t);if(!r){let l;if(o&&(l=pu[n]))return l;if(n==="hasOwnProperty")return vu}const a=Reflect.get(t,n,Ee(t)?t:s);if((Ht(n)?ll.has(n):gu(n))||(r||$e(t,"get",n),i))return a;if(Ee(a)){const l=o&&Ti(n)?a:a.value;return r&&ue(l)?oi(l):l}return ue(a)?r?oi(a):br(a):a}}class ul extends cl{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=j(t)&&Ti(n);if(!this._isShallow){const f=xt(i);if(!je(s)&&!xt(s)&&(i=ee(i),s=ee(s)),!o&&Ee(i)&&!Ee(s))return f||(i.value=s),!0}const a=o?Number(n)<t.length:se(t,n),l=Reflect.set(t,n,s,Ee(t)?t:r);return t===ee(r)&&(a?kt(s,i)&&mt(t,"set",n,s):mt(t,"add",n,s)),l}deleteProperty(t,n){const s=se(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&mt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ht(n)||!ll.has(n))&&$e(t,"has",n),s}ownKeys(t){return $e(t,"iterate",j(t)?"length":en),Reflect.ownKeys(t)}}class bu extends cl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const yu=new ul,_u=new bu,xu=new ul(!0);const ii=e=>e,Ds=e=>Reflect.getPrototypeOf(e);function $u(e,t,n){return function(...s){const r=this.__v_raw,i=ee(r),o=En(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=r[e](...s),u=n?ii:t?Bn:Ye;return!t&&$e(i,"iterate",l?ri:en),ye(Object.create(f),{next(){const{value:c,done:p}=f.next();return p?{value:c,done:p}:{value:a?[u(c[0]),u(c[1])]:u(c),done:p}}})}}function zs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Au(e,t){const n={get(r){const i=this.__v_raw,o=ee(i),a=ee(r);e||(kt(r,a)&&$e(o,"get",r),$e(o,"get",a));const{has:l}=Ds(o),f=t?ii:e?Bn:Ye;if(l.call(o,r))return f(i.get(r));if(l.call(o,a))return f(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&$e(ee(r),"iterate",en),r.size},has(r){const i=this.__v_raw,o=ee(i),a=ee(r);return e||(kt(r,a)&&$e(o,"has",r),$e(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=ee(a),f=t?ii:e?Bn:Ye;return!e&&$e(l,"iterate",en),a.forEach((u,c)=>r.call(i,f(u),f(c),o))}};return ye(n,e?{add:zs("add"),set:zs("set"),delete:zs("delete"),clear:zs("clear")}:{add(r){!t&&!je(r)&&!xt(r)&&(r=ee(r));const i=ee(this);return Ds(i).has.call(i,r)||(i.add(r),mt(i,"add",r,r)),this},set(r,i){!t&&!je(i)&&!xt(i)&&(i=ee(i));const o=ee(this),{has:a,get:l}=Ds(o);let f=a.call(o,r);f||(r=ee(r),f=a.call(o,r));const u=l.call(o,r);return o.set(r,i),f?kt(i,u)&&mt(o,"set",r,i):mt(o,"add",r,i),this},delete(r){const i=ee(this),{has:o,get:a}=Ds(i);let l=o.call(i,r);l||(r=ee(r),l=o.call(i,r)),a&&a.call(i,r);const f=i.delete(r);return l&&mt(i,"delete",r,void 0),f},clear(){const r=ee(this),i=r.size!==0,o=r.clear();return i&&mt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=$u(r,e,t)}),n}function Li(e,t){const n=Au(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const Eu={get:Li(!1,!1)},wu={get:Li(!1,!0)},Su={get:Li(!0,!1)};const fl=new WeakMap,dl=new WeakMap,hl=new WeakMap,Cu=new WeakMap;function Ru(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pu(e){return e.__v_skip||!Object.isExtensible(e)?0:Ru(eu(e))}function br(e){return xt(e)?e:Hi(e,!1,yu,Eu,fl)}function pl(e){return Hi(e,!1,xu,wu,dl)}function oi(e){return Hi(e,!0,_u,Su,hl)}function Hi(e,t,n,s,r){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Pu(e);if(i===0)return e;const o=r.get(e);if(o)return o;const a=new Proxy(e,i===2?s:n);return r.set(e,a),a}function tn(e){return xt(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function xt(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function Bi(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Ou(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&Ja(e,"__v_skip",!0),e}const Ye=e=>ue(e)?br(e):e,Bn=e=>ue(e)?oi(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function Tu(e){return ml(e,!1)}function Nu(e){return ml(e,!0)}function ml(e,t){return Ee(e)?e:new Iu(e,t)}class Iu{constructor(t,n){this.dep=new zi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ee(t),this._value=n?t:Ye(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||je(t)||xt(t);t=s?t:ee(t),kt(t,n)&&(this._rawValue=t,this._value=s?t:Ye(t),this.dep.trigger())}}function wn(e){return Ee(e)?e.value:e}const ku={get:(e,t,n)=>t==="__v_raw"?e:wn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ee(r)&&!Ee(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function gl(e){return tn(e)?e:new Proxy(e,ku)}class Mu{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new zi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return nl(this,!0),!0}get value(){const t=this.dep.track();return il(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Du(e,t,n=!1){let s,r;return F(e)?s=e:(s=e.get,r=e.set),new Mu(s,r,n)}const Ls={},Ks=new WeakMap;let Yt;function zu(e,t=!1,n=Yt){if(n){let s=Ks.get(n);s||Ks.set(n,s=[]),s.push(e)}}function Lu(e,t,n=oe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,f=I=>r?I:je(I)||r===!1||r===0?gt(I,1):gt(I);let u,c,p,m,x=!1,w=!1;if(Ee(e)?(c=()=>e.value,x=je(e)):tn(e)?(c=()=>f(e),x=!0):j(e)?(w=!0,x=e.some(I=>tn(I)||je(I)),c=()=>e.map(I=>{if(Ee(I))return I.value;if(tn(I))return f(I);if(F(I))return l?l(I,2):I()})):F(e)?t?c=l?()=>l(e,2):e:c=()=>{if(p){yt();try{p()}finally{_t()}}const I=Yt;Yt=u;try{return l?l(e,3,[m]):e(m)}finally{Yt=I}}:c=lt,t&&r){const I=c,O=r===!0?1/0:r;c=()=>gt(I(),O)}const U=fu(),N=()=>{u.stop(),U&&U.active&&Oi(U.effects,u)};if(i&&t){const I=t;t=(...O)=>{I(...O),N()}}let P=w?new Array(e.length).fill(Ls):Ls;const M=I=>{if(!(!(u.flags&1)||!u.dirty&&!I))if(t){const O=u.run();if(r||x||(w?O.some((z,G)=>kt(z,P[G])):kt(O,P))){p&&p();const z=Yt;Yt=u;try{const G=[O,P===Ls?void 0:w&&P[0]===Ls?[]:P,m];P=O,l?l(t,3,G):t(...G)}finally{Yt=z}}}else u.run()};return a&&a(M),u=new el(c),u.scheduler=o?()=>o(M,!1):M,m=I=>zu(I,!1,u),p=u.onStop=()=>{const I=Ks.get(u);if(I){if(l)l(I,4);else for(const O of I)O();Ks.delete(u)}},t?s?M(!0):P=u.run():o?o(M.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function gt(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ee(e))gt(e.value,t,n);else if(j(e))for(let s=0;s<e.length;s++)gt(e[s],t,n);else if(qa(e)||En(e))e.forEach(s=>{gt(s,t,n)});else if(Ka(e)){for(const s in e)gt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&gt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Is(e,t,n,s){try{return s?e(...s):e()}catch(r){ks(r,t,n)}}function Ze(e,t,n,s){if(F(e)){const r=Is(e,t,n,s);return r&&Wa(r)&&r.catch(i=>{ks(i,t,n)}),r}if(j(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Ze(e[i],t,n,s));return r}}function ks(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||oe;if(t){let a=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,l,f)===!1)return}a=a.parent}if(i){yt(),Is(i,null,10,[e,l,f]),_t();return}}Hu(e,n,r,s,o)}function Hu(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Ce=[];let it=-1;const Sn=[];let Pt=null,bn=0;const vl=Promise.resolve();let Js=null;function Ys(e){const t=Js||vl;return e?t.then(this?e.bind(this):e):t}function Bu(e){let t=it+1,n=Ce.length;for(;t<n;){const s=t+n>>>1,r=Ce[s],i=ys(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Ui(e){if(!(e.flags&1)){const t=ys(e),n=Ce[Ce.length-1];!n||!(e.flags&2)&&t>=ys(n)?Ce.push(e):Ce.splice(Bu(t),0,e),e.flags|=1,bl()}}function bl(){Js||(Js=vl.then(_l))}function ai(e){j(e)?Sn.push(...e):Pt&&e.id===-1?Pt.splice(bn+1,0,e):e.flags&1||(Sn.push(e),e.flags|=1),bl()}function bo(e,t,n=it+1){for(;n<Ce.length;n++){const s=Ce[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ce.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function yl(e){if(Sn.length){const t=[...new Set(Sn)].sort((n,s)=>ys(n)-ys(s));if(Sn.length=0,Pt){Pt.push(...t);return}for(Pt=t,bn=0;bn<Pt.length;bn++){const n=Pt[bn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pt=null,bn=0}}const ys=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _l(e){try{for(it=0;it<Ce.length;it++){const t=Ce[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Is(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;it<Ce.length;it++){const t=Ce[it];t&&(t.flags&=-2)}it=-1,Ce.length=0,yl(),Js=null,(Ce.length||Sn.length)&&_l()}}let De=null,xl=null;function Zs(e){const t=De;return De=e,xl=e&&e.type.__scopeId||null,t}function vt(e,t=De,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&er(-1);const i=Zs(t);let o;try{o=e(...r)}finally{Zs(i),s._d&&er(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Om(e,t){if(De===null)return e;const n=Ar(De),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,l=oe]=t[r];i&&(F(i)&&(i={mounted:i,updated:i}),i.deep&&gt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Ft(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(yt(),Ze(l,n,8,[e.el,a,e,t]),_t())}}function Us(e,t){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[e]=t}}function bt(e,t,n=!1){const s=oc();if(s||Cn){let r=Cn?Cn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&F(t)?t.call(s&&s.proxy):t}}const Uu=Symbol.for("v-scx"),ju=()=>bt(Uu);function js(e,t,n){return $l(e,t,n)}function $l(e,t,n=oe){const{immediate:s,deep:r,flush:i,once:o}=n,a=ye({},n),l=t&&s||!t&&i!=="post";let f;if(As){if(i==="sync"){const m=ju();f=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=lt,m.resume=lt,m.pause=lt,m}}const u=Ae;a.call=(m,x,w)=>Ze(m,u,x,w);let c=!1;i==="post"?a.scheduler=m=>{Te(m,u&&u.suspense)}:i!=="sync"&&(c=!0,a.scheduler=(m,x)=>{x?m():Ui(m)}),a.augmentJob=m=>{t&&(m.flags|=4),c&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=Lu(e,t,a);return As&&(f?f.push(p):l&&p()),p}function Fu(e,t,n){const s=this.proxy,r=pe(e)?e.includes(".")?Al(s,e):()=>s[e]:e.bind(s,s);let i;F(t)?i=t:(i=t.handler,n=t);const o=Ms(this),a=$l(r,i.bind(s),n);return o(),a}function Al(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Vu=Symbol("_vte"),El=e=>e.__isTeleport,pt=Symbol("_leaveCb"),Hs=Symbol("_enterCb");function qu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Il(()=>{e.isMounted=!0}),kl(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],wl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},Sl=e=>{const t=e.subTree;return t.component?Sl(t.component):t},Wu={name:"BaseTransition",props:wl,setup(e,{slots:t}){const n=oc(),s=qu();return()=>{const r=t.default&&Pl(t.default(),!0);if(!r||!r.length)return;const i=Cl(r),o=ee(e),{mode:a}=o;if(s.isLeaving)return zr(i);const l=yo(i);if(!l)return zr(i);let f=li(l,o,s,n,c=>f=c);l.type!==_e&&_s(l,f);let u=n.subTree&&yo(n.subTree);if(u&&u.type!==_e&&!at(u,l)&&Sl(n).type!==_e){let c=li(u,o,s,n);if(_s(u,c),a==="out-in"&&l.type!==_e)return s.isLeaving=!0,c.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave,u=void 0},zr(i);a==="in-out"&&l.type!==_e?c.delayLeave=(p,m,x)=>{const w=Rl(s,u);w[String(u.key)]=u,p[pt]=()=>{m(),p[pt]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{x(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Cl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==_e){t=n;break}}return t}const Gu=Wu;function Rl(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function li(e,t,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:p,onLeave:m,onAfterLeave:x,onLeaveCancelled:w,onBeforeAppear:U,onAppear:N,onAfterAppear:P,onAppearCancelled:M}=t,I=String(e.key),O=Rl(n,e),z=(D,V)=>{D&&Ze(D,s,9,V)},G=(D,V)=>{const J=V[1];z(D,V),j(D)?D.every(S=>S.length<=1)&&J():D.length<=1&&J()},te={mode:o,persisted:a,beforeEnter(D){let V=l;if(!n.isMounted)if(i)V=U||l;else return;D[pt]&&D[pt](!0);const J=O[I];J&&at(e,J)&&J.el[pt]&&J.el[pt](),z(V,[D])},enter(D){let V=f,J=u,S=c;if(!n.isMounted)if(i)V=N||f,J=P||u,S=M||c;else return;let K=!1;const fe=D[Hs]=xe=>{K||(K=!0,xe?z(S,[D]):z(J,[D]),te.delayedLeave&&te.delayedLeave(),D[Hs]=void 0)};V?G(V,[D,fe]):fe()},leave(D,V){const J=String(e.key);if(D[Hs]&&D[Hs](!0),n.isUnmounting)return V();z(p,[D]);let S=!1;const K=D[pt]=fe=>{S||(S=!0,V(),fe?z(w,[D]):z(x,[D]),D[pt]=void 0,O[J]===e&&delete O[J])};O[J]=e,m?G(m,[D,K]):K()},clone(D){const V=li(D,t,n,s,r);return r&&r(V),V}};return te}function zr(e){if(yr(e))return e=Lt(e),e.children=null,e}function yo(e){if(!yr(e))return El(e.type)&&e.children?Cl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&F(n.default))return n.default()}}function _s(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_s(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Pl(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Me?(o.patchFlag&128&&r++,s=s.concat(Pl(o.children,t,a))):(t||o.type!==_e)&&s.push(a!=null?Lt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Ol(e,t){return F(e)?ye({name:e.name},t,{setup:e}):e}function Tl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Qs=new WeakMap;function ls(e,t,n,s,r=!1){if(j(e)){e.forEach((x,w)=>ls(x,t&&(j(t)?t[w]:t),n,s,r));return}if(cs(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ls(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Ar(s.component):s.el,o=r?null:i,{i:a,r:l}=e,f=t&&t.r,u=a.refs===oe?a.refs={}:a.refs,c=a.setupState,p=ee(c),m=c===oe?Va:x=>se(p,x);if(f!=null&&f!==l){if(_o(t),pe(f))u[f]=null,m(f)&&(c[f]=null);else if(Ee(f)){f.value=null;const x=t;x.k&&(u[x.k]=null)}}if(F(l))Is(l,a,12,[o,u]);else{const x=pe(l),w=Ee(l);if(x||w){const U=()=>{if(e.f){const N=x?m(l)?c[l]:u[l]:l.value;if(r)j(N)&&Oi(N,i);else if(j(N))N.includes(i)||N.push(i);else if(x)u[l]=[i],m(l)&&(c[l]=u[l]);else{const P=[i];l.value=P,e.k&&(u[e.k]=P)}}else x?(u[l]=o,m(l)&&(c[l]=o)):w&&(l.value=o,e.k&&(u[e.k]=o))};if(o){const N=()=>{U(),Qs.delete(e)};N.id=-1,Qs.set(e,N),Te(N,n)}else _o(e),U()}}}function _o(e){const t=Qs.get(e);t&&(t.flags|=8,Qs.delete(e))}gr().requestIdleCallback;gr().cancelIdleCallback;const cs=e=>!!e.type.__asyncLoader,yr=e=>e.type.__isKeepAlive;function Ku(e,t){Nl(e,"a",t)}function Ju(e,t){Nl(e,"da",t)}function Nl(e,t,n=Ae){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(_r(t,s,n),n){let r=n.parent;for(;r&&r.parent;)yr(r.parent.vnode)&&Yu(s,t,n,r),r=r.parent}}function Yu(e,t,n,s){const r=_r(t,e,s,!0);Ml(()=>{Oi(s[t],r)},n)}function _r(e,t,n=Ae,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{yt();const a=Ms(n),l=Ze(t,n,e,o);return a(),_t(),l});return s?r.unshift(i):r.push(i),i}}const $t=e=>(t,n=Ae)=>{(!As||e==="sp")&&_r(e,(...s)=>t(...s),n)},Zu=$t("bm"),Il=$t("m"),Qu=$t("bu"),Xu=$t("u"),kl=$t("bum"),Ml=$t("um"),ef=$t("sp"),tf=$t("rtg"),nf=$t("rtc");function sf(e,t=Ae){_r("ec",e,t)}const Dl="components";function ci(e,t){return Ll(Dl,e,!0,t)||e}const zl=Symbol.for("v-ndc");function rf(e){return pe(e)?Ll(Dl,e,!1)||e:e||zl}function Ll(e,t,n=!0,s=!1){const r=De||Ae;if(r){const i=r.type;{const a=Yf(i,!1);if(a&&(a===t||a===Fe(t)||a===mr(Fe(t))))return i}const o=xo(r[e]||i[e],t)||xo(r.appContext[e],t);return!o&&s?i:o}}function xo(e,t){return e&&(e[t]||e[Fe(t)]||e[mr(Fe(t))])}function $o(e,t,n,s){let r;const i=n,o=j(e);if(o||pe(e)){const a=o&&tn(e);let l=!1,f=!1;a&&(l=!je(e),f=xt(e),e=vr(e)),r=new Array(e.length);for(let u=0,c=e.length;u<c;u++)r[u]=t(l?f?Bn(Ye(e[u])):Ye(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(ue(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const u=a[l];r[l]=t(e[u],u,l,i)}}else r=[];return r}const ui=e=>e?ac(e)?Ar(e):ui(e.parent):null,us=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ui(e.parent),$root:e=>ui(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Bl(e),$forceUpdate:e=>e.f||(e.f=()=>{Ui(e.update)}),$nextTick:e=>e.n||(e.n=Ys.bind(e.proxy)),$watch:e=>Fu.bind(e)}),Lr=(e,t)=>e!==oe&&!e.__isScriptSetup&&se(e,t),of={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Lr(s,t))return o[t]=1,s[t];if(r!==oe&&se(r,t))return o[t]=2,r[t];if(se(i,t))return o[t]=3,i[t];if(n!==oe&&se(n,t))return o[t]=4,n[t];fi&&(o[t]=0)}}const f=us[t];let u,c;if(f)return t==="$attrs"&&$e(e.attrs,"get",""),f(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==oe&&se(n,t))return o[t]=4,n[t];if(c=l.config.globalProperties,se(c,t))return c[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Lr(r,t)?(r[t]=n,!0):s!==oe&&se(s,t)?(s[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let l;return!!(n[a]||e!==oe&&a[0]!=="$"&&se(e,a)||Lr(t,a)||se(i,a)||se(s,a)||se(us,a)||se(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ao(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let fi=!0;function af(e){const t=Bl(e),n=e.proxy,s=e.ctx;fi=!1,t.beforeCreate&&Eo(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:f,created:u,beforeMount:c,mounted:p,beforeUpdate:m,updated:x,activated:w,deactivated:U,beforeDestroy:N,beforeUnmount:P,destroyed:M,unmounted:I,render:O,renderTracked:z,renderTriggered:G,errorCaptured:te,serverPrefetch:D,expose:V,inheritAttrs:J,components:S,directives:K,filters:fe}=t;if(f&&lf(f,s,null),o)for(const Y in o){const X=o[Y];F(X)&&(s[Y]=X.bind(n))}if(r){const Y=r.call(n,n);ue(Y)&&(e.data=br(Y))}if(fi=!0,i)for(const Y in i){const X=i[Y],ct=F(X)?X.bind(n,n):F(X.get)?X.get.bind(n,n):lt,wt=!F(X)&&F(X.set)?X.set.bind(n):lt,et=Ke({get:ct,set:wt});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>et.value,set:Re=>et.value=Re})}if(a)for(const Y in a)Hl(a[Y],s,n,Y);if(l){const Y=F(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(X=>{Us(X,Y[X])})}u&&Eo(u,e,"c");function ie(Y,X){j(X)?X.forEach(ct=>Y(ct.bind(n))):X&&Y(X.bind(n))}if(ie(Zu,c),ie(Il,p),ie(Qu,m),ie(Xu,x),ie(Ku,w),ie(Ju,U),ie(sf,te),ie(nf,z),ie(tf,G),ie(kl,P),ie(Ml,I),ie(ef,D),j(V))if(V.length){const Y=e.exposed||(e.exposed={});V.forEach(X=>{Object.defineProperty(Y,X,{get:()=>n[X],set:ct=>n[X]=ct,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===lt&&(e.render=O),J!=null&&(e.inheritAttrs=J),S&&(e.components=S),K&&(e.directives=K),D&&Tl(e)}function lf(e,t,n=lt){j(e)&&(e=di(e));for(const s in e){const r=e[s];let i;ue(r)?"default"in r?i=bt(r.from||s,r.default,!0):i=bt(r.from||s):i=bt(r),Ee(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Eo(e,t,n){Ze(j(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Hl(e,t,n,s){let r=s.includes(".")?Al(n,s):()=>n[s];if(pe(e)){const i=t[e];F(i)&&js(r,i)}else if(F(e))js(r,e.bind(n));else if(ue(e))if(j(e))e.forEach(i=>Hl(i,t,n,s));else{const i=F(e.handler)?e.handler.bind(n):t[e.handler];F(i)&&js(r,i,e)}}function Bl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(f=>Xs(l,f,o,!0)),Xs(l,t,o)),ue(t)&&i.set(t,l),l}function Xs(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Xs(e,i,n,!0),r&&r.forEach(o=>Xs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=cf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const cf={data:wo,props:So,emits:So,methods:rs,computed:rs,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:rs,directives:rs,watch:ff,provide:wo,inject:uf};function wo(e,t){return t?e?function(){return ye(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function uf(e,t){return rs(di(e),di(t))}function di(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function rs(e,t){return e?ye(Object.create(null),e,t):t}function So(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:ye(Object.create(null),Ao(e),Ao(t??{})):t}function ff(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const s in t)n[s]=we(e[s],t[s]);return n}function Ul(){return{app:null,config:{isNativeTag:Va,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let df=0;function hf(e,t){return function(s,r=null){F(s)||(s=ye({},s)),r!=null&&!ue(r)&&(r=null);const i=Ul(),o=new WeakSet,a=[];let l=!1;const f=i.app={_uid:df++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Qf,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(f,...c)):F(u)&&(o.add(u),u(f,...c))),f},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),f},component(u,c){return c?(i.components[u]=c,f):i.components[u]},directive(u,c){return c?(i.directives[u]=c,f):i.directives[u]},mount(u,c,p){if(!l){const m=f._ceVNode||ge(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(m,u,p),l=!0,f._container=u,u.__vue_app__=f,Ar(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ze(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,c){return i.provides[u]=c,f},runWithContext(u){const c=Cn;Cn=f;try{return u()}finally{Cn=c}}};return f}}let Cn=null;const pf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Fe(t)}Modifiers`]||e[`${Bt(t)}Modifiers`];function mf(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||oe;let r=n;const i=t.startsWith("update:"),o=i&&pf(s,t.slice(7));o&&(o.trim&&(r=n.map(u=>pe(u)?u.trim():u)),o.number&&(r=n.map(su)));let a,l=s[a=Tr(t)]||s[a=Tr(Fe(t))];!l&&i&&(l=s[a=Tr(Bt(t))]),l&&Ze(l,e,6,r);const f=s[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ze(f,e,6,r)}}const gf=new WeakMap;function jl(e,t,n=!1){const s=n?gf:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!F(e)){const l=f=>{const u=jl(f,t,!0);u&&(a=!0,ye(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(ue(e)&&s.set(e,null),null):(j(i)?i.forEach(l=>o[l]=null):ye(o,i),ue(e)&&s.set(e,o),o)}function xr(e,t){return!e||!dr(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,Bt(t))||se(e,t))}function Co(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:f,renderCache:u,props:c,data:p,setupState:m,ctx:x,inheritAttrs:w}=e,U=Zs(e);let N,P;try{if(n.shapeFlag&4){const I=r||s,O=I;N=Ge(f.call(O,I,u,c,m,p,x)),P=a}else{const I=t;N=Ge(I.length>1?I(c,{attrs:a,slots:o,emit:l}):I(c,null)),P=t.props?a:bf(a)}}catch(I){fs.length=0,ks(I,e,1),N=ge(_e)}let M=N;if(P&&w!==!1){const I=Object.keys(P),{shapeFlag:O}=M;I.length&&O&7&&(i&&I.some(Pi)&&(P=yf(P,i)),M=Lt(M,P,!1,!0))}return n.dirs&&(M=Lt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&_s(M,n.transition),N=M,Zs(U),N}function vf(e,t=!0){let n;for(let s=0;s<e.length;s++){const r=e[s];if($s(r)){if(r.type!==_e||r.children==="v-if"){if(n)return;n=r}}else return}return n}const bf=e=>{let t;for(const n in e)(n==="class"||n==="style"||dr(n))&&((t||(t={}))[n]=e[n]);return t},yf=(e,t)=>{const n={};for(const s in e)(!Pi(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function _f(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ro(s,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let c=0;c<u.length;c++){const p=u[c];if(o[p]!==s[p]&&!xr(f,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ro(s,o,f):!0:!!o;return!1}function Ro(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!xr(n,i))return!0}return!1}function ji({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Fl={},Vl=()=>Object.create(Fl),ql=e=>Object.getPrototypeOf(e)===Fl;function xf(e,t,n,s=!1){const r={},i=Vl();e.propsDefaults=Object.create(null),Wl(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:pl(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function $f(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=ee(r),[l]=e.propsOptions;let f=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let c=0;c<u.length;c++){let p=u[c];if(xr(e.emitsOptions,p))continue;const m=t[p];if(l)if(se(i,p))m!==i[p]&&(i[p]=m,f=!0);else{const x=Fe(p);r[x]=hi(l,a,x,m,e,!1)}else m!==i[p]&&(i[p]=m,f=!0)}}}else{Wl(e,t,r,i)&&(f=!0);let u;for(const c in a)(!t||!se(t,c)&&((u=Bt(c))===c||!se(t,u)))&&(l?n&&(n[c]!==void 0||n[u]!==void 0)&&(r[c]=hi(l,a,c,void 0,e,!0)):delete r[c]);if(i!==a)for(const c in i)(!t||!se(t,c))&&(delete i[c],f=!0)}f&&mt(e.attrs,"set","")}function Wl(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(is(l))continue;const f=t[l];let u;r&&se(r,u=Fe(l))?!i||!i.includes(u)?n[u]=f:(a||(a={}))[u]=f:xr(e.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,o=!0)}if(i){const l=ee(n),f=a||oe;for(let u=0;u<i.length;u++){const c=i[u];n[c]=hi(r,l,c,f[c],e,!se(f,c))}}return o}function hi(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const u=Ms(r);s=f[n]=l.call(null,t),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Bt(n))&&(s=!0))}return s}const Af=new WeakMap;function Gl(e,t,n=!1){const s=n?Af:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!F(e)){const u=c=>{l=!0;const[p,m]=Gl(c,t,!0);ye(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return ue(e)&&s.set(e,An),An;if(j(i))for(let u=0;u<i.length;u++){const c=Fe(i[u]);Po(c)&&(o[c]=oe)}else if(i)for(const u in i){const c=Fe(u);if(Po(c)){const p=i[u],m=o[c]=j(p)||F(p)?{type:p}:ye({},p),x=m.type;let w=!1,U=!0;if(j(x))for(let N=0;N<x.length;++N){const P=x[N],M=F(P)&&P.name;if(M==="Boolean"){w=!0;break}else M==="String"&&(U=!1)}else w=F(x)&&x.name==="Boolean";m[0]=w,m[1]=U,(w||se(m,"default"))&&a.push(c)}}const f=[o,a];return ue(e)&&s.set(e,f),f}function Po(e){return e[0]!=="$"&&!is(e)}const Fi=e=>e==="_"||e==="_ctx"||e==="$stable",Vi=e=>j(e)?e.map(Ge):[Ge(e)],Ef=(e,t,n)=>{if(t._n)return t;const s=vt((...r)=>Vi(t(...r)),n);return s._c=!1,s},Kl=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Fi(r))continue;const i=e[r];if(F(i))t[r]=Ef(r,i,s);else if(i!=null){const o=Vi(i);t[r]=()=>o}}},Jl=(e,t)=>{const n=Vi(t);e.slots.default=()=>n},Yl=(e,t,n)=>{for(const s in t)(n||!Fi(s))&&(e[s]=t[s])},wf=(e,t,n)=>{const s=e.slots=Vl();if(e.vnode.shapeFlag&32){const r=t._;r?(Yl(s,t,n),n&&Ja(s,"_",r,!0)):Kl(t,s)}else t&&Jl(e,t)},Sf=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=oe;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Yl(r,t,n):(i=!t.$stable,Kl(t,r)),o=t}else t&&(Jl(e,t),o={default:1});if(i)for(const a in r)!Fi(a)&&o[a]==null&&delete r[a]},Te=zf;function Cf(e){return Rf(e)}function Rf(e,t){const n=gr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:f,setElementText:u,parentNode:c,nextSibling:p,setScopeId:m=lt,insertStaticContent:x}=e,w=(d,h,g,v=null,_=null,b=null,C=void 0,E=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!at(d,h)&&(v=y(d),Re(d,_,b,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:$,ref:B,shapeFlag:T}=h;switch($){case $r:U(d,h,g,v);break;case _e:N(d,h,g,v);break;case Fs:d==null&&P(h,g,v,C);break;case Me:S(d,h,g,v,_,b,C,E,A);break;default:T&1?O(d,h,g,v,_,b,C,E,A):T&6?K(d,h,g,v,_,b,C,E,A):(T&64||T&128)&&$.process(d,h,g,v,_,b,C,E,A,L)}B!=null&&_?ls(B,d&&d.ref,b,h||d,!h):B==null&&d&&d.ref!=null&&ls(d.ref,null,b,d,!0)},U=(d,h,g,v)=>{if(d==null)s(h.el=a(h.children),g,v);else{const _=h.el=d.el;h.children!==d.children&&f(_,h.children)}},N=(d,h,g,v)=>{d==null?s(h.el=l(h.children||""),g,v):h.el=d.el},P=(d,h,g,v)=>{[d.el,d.anchor]=x(d.children,h,g,v,d.el,d.anchor)},M=({el:d,anchor:h},g,v)=>{let _;for(;d&&d!==h;)_=p(d),s(d,g,v),d=_;s(h,g,v)},I=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),r(d),d=g;r(h)},O=(d,h,g,v,_,b,C,E,A)=>{if(h.type==="svg"?C="svg":h.type==="math"&&(C="mathml"),d==null)z(h,g,v,_,b,C,E,A);else{const $=d.el&&d.el._isVueCE?d.el:null;try{$&&$._beginPatch(),D(d,h,_,b,C,E,A)}finally{$&&$._endPatch()}}},z=(d,h,g,v,_,b,C,E)=>{let A,$;const{props:B,shapeFlag:T,transition:H,dirs:q}=d;if(A=d.el=o(d.type,b,B&&B.is,B),T&8?u(A,d.children):T&16&&te(d.children,A,null,v,_,Hr(d,b),C,E),q&&Ft(d,null,v,"created"),G(A,d,d.scopeId,C,v),B){for(const le in B)le!=="value"&&!is(le)&&i(A,le,null,B[le],b,v);"value"in B&&i(A,"value",null,B.value,b),($=B.onVnodeBeforeMount)&&rt($,v,d)}q&&Ft(d,null,v,"beforeMount");const Q=Pf(_,H);Q&&H.beforeEnter(A),s(A,h,g),(($=B&&B.onVnodeMounted)||Q||q)&&Te(()=>{$&&rt($,v,d),Q&&H.enter(A),q&&Ft(d,null,v,"mounted")},_)},G=(d,h,g,v,_)=>{if(g&&m(d,g),v)for(let b=0;b<v.length;b++)m(d,v[b]);if(_){let b=_.subTree;if(h===b||ec(b.type)&&(b.ssContent===h||b.ssFallback===h)){const C=_.vnode;G(d,C,C.scopeId,C.slotScopeIds,_.parent)}}},te=(d,h,g,v,_,b,C,E,A=0)=>{for(let $=A;$<d.length;$++){const B=d[$]=E?Ot(d[$]):Ge(d[$]);w(null,B,h,g,v,_,b,C,E)}},D=(d,h,g,v,_,b,C)=>{const E=h.el=d.el;let{patchFlag:A,dynamicChildren:$,dirs:B}=h;A|=d.patchFlag&16;const T=d.props||oe,H=h.props||oe;let q;if(g&&Vt(g,!1),(q=H.onVnodeBeforeUpdate)&&rt(q,g,h,d),B&&Ft(h,d,g,"beforeUpdate"),g&&Vt(g,!0),(T.innerHTML&&H.innerHTML==null||T.textContent&&H.textContent==null)&&u(E,""),$?V(d.dynamicChildren,$,E,g,v,Hr(h,_),b):C||X(d,h,E,null,g,v,Hr(h,_),b,!1),A>0){if(A&16)J(E,T,H,g,_);else if(A&2&&T.class!==H.class&&i(E,"class",null,H.class,_),A&4&&i(E,"style",T.style,H.style,_),A&8){const Q=h.dynamicProps;for(let le=0;le<Q.length;le++){const re=Q[le],Pe=T[re],Oe=H[re];(Oe!==Pe||re==="value")&&i(E,re,Pe,Oe,_,g)}}A&1&&d.children!==h.children&&u(E,h.children)}else!C&&$==null&&J(E,T,H,g,_);((q=H.onVnodeUpdated)||B)&&Te(()=>{q&&rt(q,g,h,d),B&&Ft(h,d,g,"updated")},v)},V=(d,h,g,v,_,b,C)=>{for(let E=0;E<h.length;E++){const A=d[E],$=h[E],B=A.el&&(A.type===Me||!at(A,$)||A.shapeFlag&198)?c(A.el):g;w(A,$,B,null,v,_,b,C,!0)}},J=(d,h,g,v,_)=>{if(h!==g){if(h!==oe)for(const b in h)!is(b)&&!(b in g)&&i(d,b,h[b],null,_,v);for(const b in g){if(is(b))continue;const C=g[b],E=h[b];C!==E&&b!=="value"&&i(d,b,E,C,_,v)}"value"in g&&i(d,"value",h.value,g.value,_)}},S=(d,h,g,v,_,b,C,E,A)=>{const $=h.el=d?d.el:a(""),B=h.anchor=d?d.anchor:a("");let{patchFlag:T,dynamicChildren:H,slotScopeIds:q}=h;q&&(E=E?E.concat(q):q),d==null?(s($,g,v),s(B,g,v),te(h.children||[],g,B,_,b,C,E,A)):T>0&&T&64&&H&&d.dynamicChildren&&d.dynamicChildren.length===H.length?(V(d.dynamicChildren,H,g,_,b,C,E),(h.key!=null||_&&h===_.subTree)&&Zl(d,h,!0)):X(d,h,g,B,_,b,C,E,A)},K=(d,h,g,v,_,b,C,E,A)=>{h.slotScopeIds=E,d==null?h.shapeFlag&512?_.ctx.activate(h,g,v,C,A):fe(h,g,v,_,b,C,A):xe(d,h,A)},fe=(d,h,g,v,_,b,C)=>{const E=d.component=qf(d,v,_);if(yr(d)&&(E.ctx.renderer=L),Wf(E,!1,C),E.asyncDep){if(_&&_.registerDep(E,ie,C),!d.el){const A=E.subTree=ge(_e);N(null,A,h,g),d.placeholder=A.el}}else ie(E,d,h,g,_,b,C)},xe=(d,h,g)=>{const v=h.component=d.component;if(_f(d,h,g))if(v.asyncDep&&!v.asyncResolved){Y(v,h,g);return}else v.next=h,v.update();else h.el=d.el,v.vnode=h},ie=(d,h,g,v,_,b,C)=>{const E=()=>{if(d.isMounted){let{next:T,bu:H,u:q,parent:Q,vnode:le}=d;{const nt=Ql(d);if(nt){T&&(T.el=le.el,Y(d,T,C)),nt.asyncDep.then(()=>{d.isUnmounted||E()});return}}let re=T,Pe;Vt(d,!1),T?(T.el=le.el,Y(d,T,C)):T=le,H&&Nr(H),(Pe=T.props&&T.props.onVnodeBeforeUpdate)&&rt(Pe,Q,T,le),Vt(d,!0);const Oe=Co(d),tt=d.subTree;d.subTree=Oe,w(tt,Oe,c(tt.el),y(tt),d,_,b),T.el=Oe.el,re===null&&ji(d,Oe.el),q&&Te(q,_),(Pe=T.props&&T.props.onVnodeUpdated)&&Te(()=>rt(Pe,Q,T,le),_)}else{let T;const{el:H,props:q}=h,{bm:Q,m:le,parent:re,root:Pe,type:Oe}=d,tt=cs(h);Vt(d,!1),Q&&Nr(Q),!tt&&(T=q&&q.onVnodeBeforeMount)&&rt(T,re,h),Vt(d,!0);{Pe.ce&&Pe.ce._def.shadowRoot!==!1&&Pe.ce._injectChildStyle(Oe);const nt=d.subTree=Co(d);w(null,nt,g,v,d,_,b),h.el=nt.el}if(le&&Te(le,_),!tt&&(T=q&&q.onVnodeMounted)){const nt=h;Te(()=>rt(T,re,nt),_)}(h.shapeFlag&256||re&&cs(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Te(d.a,_),d.isMounted=!0,h=g=v=null}};d.scope.on();const A=d.effect=new el(E);d.scope.off();const $=d.update=A.run.bind(A),B=d.job=A.runIfDirty.bind(A);B.i=d,B.id=d.uid,A.scheduler=()=>Ui(B),Vt(d,!0),$()},Y=(d,h,g)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,$f(d,h.props,v,g),Sf(d,h.children,g),yt(),bo(d),_t()},X=(d,h,g,v,_,b,C,E,A=!1)=>{const $=d&&d.children,B=d?d.shapeFlag:0,T=h.children,{patchFlag:H,shapeFlag:q}=h;if(H>0){if(H&128){wt($,T,g,v,_,b,C,E,A);return}else if(H&256){ct($,T,g,v,_,b,C,E,A);return}}q&8?(B&16&&Be($,_,b),T!==$&&u(g,T)):B&16?q&16?wt($,T,g,v,_,b,C,E,A):Be($,_,b,!0):(B&8&&u(g,""),q&16&&te(T,g,v,_,b,C,E,A))},ct=(d,h,g,v,_,b,C,E,A)=>{d=d||An,h=h||An;const $=d.length,B=h.length,T=Math.min($,B);let H;for(H=0;H<T;H++){const q=h[H]=A?Ot(h[H]):Ge(h[H]);w(d[H],q,g,null,_,b,C,E,A)}$>B?Be(d,_,b,!0,!1,T):te(h,g,v,_,b,C,E,A,T)},wt=(d,h,g,v,_,b,C,E,A)=>{let $=0;const B=h.length;let T=d.length-1,H=B-1;for(;$<=T&&$<=H;){const q=d[$],Q=h[$]=A?Ot(h[$]):Ge(h[$]);if(at(q,Q))w(q,Q,g,null,_,b,C,E,A);else break;$++}for(;$<=T&&$<=H;){const q=d[T],Q=h[H]=A?Ot(h[H]):Ge(h[H]);if(at(q,Q))w(q,Q,g,null,_,b,C,E,A);else break;T--,H--}if($>T){if($<=H){const q=H+1,Q=q<B?h[q].el:v;for(;$<=H;)w(null,h[$]=A?Ot(h[$]):Ge(h[$]),g,Q,_,b,C,E,A),$++}}else if($>H)for(;$<=T;)Re(d[$],_,b,!0),$++;else{const q=$,Q=$,le=new Map;for($=Q;$<=H;$++){const ke=h[$]=A?Ot(h[$]):Ge(h[$]);ke.key!=null&&le.set(ke.key,$)}let re,Pe=0;const Oe=H-Q+1;let tt=!1,nt=0;const Zn=new Array(Oe);for($=0;$<Oe;$++)Zn[$]=0;for($=q;$<=T;$++){const ke=d[$];if(Pe>=Oe){Re(ke,_,b,!0);continue}let st;if(ke.key!=null)st=le.get(ke.key);else for(re=Q;re<=H;re++)if(Zn[re-Q]===0&&at(ke,h[re])){st=re;break}st===void 0?Re(ke,_,b,!0):(Zn[st-Q]=$+1,st>=nt?nt=st:tt=!0,w(ke,h[st],g,null,_,b,C,E,A),Pe++)}const fo=tt?Of(Zn):An;for(re=fo.length-1,$=Oe-1;$>=0;$--){const ke=Q+$,st=h[ke],ho=h[ke+1],po=ke+1<B?ho.el||Xl(ho):v;Zn[$]===0?w(null,st,g,po,_,b,C,E,A):tt&&(re<0||$!==fo[re]?et(st,g,po,2):re--)}}},et=(d,h,g,v,_=null)=>{const{el:b,type:C,transition:E,children:A,shapeFlag:$}=d;if($&6){et(d.component.subTree,h,g,v);return}if($&128){d.suspense.move(h,g,v);return}if($&64){C.move(d,h,g,L);return}if(C===Me){s(b,h,g);for(let T=0;T<A.length;T++)et(A[T],h,g,v);s(d.anchor,h,g);return}if(C===Fs){M(d,h,g);return}if(v!==2&&$&1&&E)if(v===0)E.beforeEnter(b),s(b,h,g),Te(()=>E.enter(b),_);else{const{leave:T,delayLeave:H,afterLeave:q}=E,Q=()=>{d.ctx.isUnmounted?r(b):s(b,h,g)},le=()=>{b._isLeaving&&b[pt](!0),T(b,()=>{Q(),q&&q()})};H?H(b,Q,le):le()}else s(b,h,g)},Re=(d,h,g,v=!1,_=!1)=>{const{type:b,props:C,ref:E,children:A,dynamicChildren:$,shapeFlag:B,patchFlag:T,dirs:H,cacheIndex:q}=d;if(T===-2&&(_=!1),E!=null&&(yt(),ls(E,null,g,d,!0),_t()),q!=null&&(h.renderCache[q]=void 0),B&256){h.ctx.deactivate(d);return}const Q=B&1&&H,le=!cs(d);let re;if(le&&(re=C&&C.onVnodeBeforeUnmount)&&rt(re,h,d),B&6)jt(d.component,g,v);else{if(B&128){d.suspense.unmount(g,v);return}Q&&Ft(d,null,h,"beforeUnmount"),B&64?d.type.remove(d,h,g,L,v):$&&!$.hasOnce&&(b!==Me||T>0&&T&64)?Be($,h,g,!1,!0):(b===Me&&T&384||!_&&B&16)&&Be(A,h,g),v&&mn(d)}(le&&(re=C&&C.onVnodeUnmounted)||Q)&&Te(()=>{re&&rt(re,h,d),Q&&Ft(d,null,h,"unmounted")},g)},mn=d=>{const{type:h,el:g,anchor:v,transition:_}=d;if(h===Me){gn(g,v);return}if(h===Fs){I(d);return}const b=()=>{r(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:E}=_,A=()=>C(g,b);E?E(d.el,b,A):A()}else b()},gn=(d,h)=>{let g;for(;d!==h;)g=p(d),r(d),d=g;r(h)},jt=(d,h,g)=>{const{bum:v,scope:_,job:b,subTree:C,um:E,m:A,a:$}=d;Oo(A),Oo($),v&&Nr(v),_.stop(),b&&(b.flags|=8,Re(C,d,h,g)),E&&Te(E,h),Te(()=>{d.isUnmounted=!0},h)},Be=(d,h,g,v=!1,_=!1,b=0)=>{for(let C=b;C<d.length;C++)Re(d[C],h,g,v,_)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[Vu];return g?p(g):h};let k=!1;const R=(d,h,g)=>{let v;d==null?h._vnode&&(Re(h._vnode,null,null,!0),v=h._vnode.component):w(h._vnode||null,d,h,null,null,null,g),h._vnode=d,k||(k=!0,bo(v),yl(),k=!1)},L={p:w,um:Re,m:et,r:mn,mt:fe,mc:te,pc:X,pbc:V,n:y,o:e};return{render:R,hydrate:void 0,createApp:hf(R)}}function Hr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Pf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Zl(e,t,n=!1){const s=e.children,r=t.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ot(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Zl(o,a)),a.type===$r&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=i+(e.type===Me?1:0)),a.type===_e&&!a.el&&(a.el=o.el)}}function Of(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<f?i=a+1:o=a;f<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Ql(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ql(t)}function Oo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Xl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Xl(t.subTree):null}const ec=e=>e.__isSuspense;let pi=0;const Tf={name:"Suspense",__isSuspense:!0,process(e,t,n,s,r,i,o,a,l,f){if(e==null)If(t,n,s,r,i,o,a,l,f);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}kf(e,t,n,s,r,o,a,l,f)}},hydrate:Mf,normalize:Df},Nf=Tf;function xs(e,t){const n=e.props&&e.props[t];F(n)&&n()}function If(e,t,n,s,r,i,o,a,l){const{p:f,o:{createElement:u}}=l,c=u("div"),p=e.suspense=tc(e,r,s,t,c,n,i,o,a,l);f(null,p.pendingBranch=e.ssContent,c,null,s,p,i,o),p.deps>0?(xs(e,"onPending"),xs(e,"onFallback"),f(null,e.ssFallback,t,n,s,null,i,o),Rn(p,e.ssFallback)):p.resolve(!1,!0)}function kf(e,t,n,s,r,i,o,a,{p:l,um:f,o:{createElement:u}}){const c=t.suspense=e.suspense;c.vnode=t,t.el=e.el;const p=t.ssContent,m=t.ssFallback,{activeBranch:x,pendingBranch:w,isInFallback:U,isHydrating:N}=c;if(w)c.pendingBranch=p,at(w,p)?(l(w,p,c.hiddenContainer,null,r,c,i,o,a),c.deps<=0?c.resolve():U&&(N||(l(x,m,n,s,r,null,i,o,a),Rn(c,m)))):(c.pendingId=pi++,N?(c.isHydrating=!1,c.activeBranch=w):f(w,r,c),c.deps=0,c.effects.length=0,c.hiddenContainer=u("div"),U?(l(null,p,c.hiddenContainer,null,r,c,i,o,a),c.deps<=0?c.resolve():(l(x,m,n,s,r,null,i,o,a),Rn(c,m))):x&&at(x,p)?(l(x,p,n,s,r,c,i,o,a),c.resolve(!0)):(l(null,p,c.hiddenContainer,null,r,c,i,o,a),c.deps<=0&&c.resolve()));else if(x&&at(x,p))l(x,p,n,s,r,c,i,o,a),Rn(c,p);else if(xs(t,"onPending"),c.pendingBranch=p,p.shapeFlag&512?c.pendingId=p.component.suspenseId:c.pendingId=pi++,l(null,p,c.hiddenContainer,null,r,c,i,o,a),c.deps<=0)c.resolve();else{const{timeout:P,pendingId:M}=c;P>0?setTimeout(()=>{c.pendingId===M&&c.fallback(m)},P):P===0&&c.fallback(m)}}function tc(e,t,n,s,r,i,o,a,l,f,u=!1){const{p:c,m:p,um:m,n:x,o:{parentNode:w,remove:U}}=f;let N;const P=Lf(e);P&&t&&t.pendingBranch&&(N=t.pendingId,t.deps++);const M=e.props?Ya(e.props.timeout):void 0,I=i,O={vnode:e,parent:t,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:pi++,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(z=!1,G=!1){const{vnode:te,activeBranch:D,pendingBranch:V,pendingId:J,effects:S,parentComponent:K,container:fe,isInFallback:xe}=O;let ie=!1;O.isHydrating?O.isHydrating=!1:z||(ie=D&&V.transition&&V.transition.mode==="out-in",ie&&(D.transition.afterLeave=()=>{J===O.pendingId&&(p(V,fe,i===I?x(D):i,0),ai(S),xe&&te.ssFallback&&(te.ssFallback.el=null))}),D&&(w(D.el)===fe&&(i=x(D)),m(D,K,O,!0),!ie&&xe&&te.ssFallback&&Te(()=>te.ssFallback.el=null,O)),ie||p(V,fe,i,0)),Rn(O,V),O.pendingBranch=null,O.isInFallback=!1;let Y=O.parent,X=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...S),X=!0;break}Y=Y.parent}!X&&!ie&&ai(S),O.effects=[],P&&t&&t.pendingBranch&&N===t.pendingId&&(t.deps--,t.deps===0&&!G&&t.resolve()),xs(te,"onResolve")},fallback(z){if(!O.pendingBranch)return;const{vnode:G,activeBranch:te,parentComponent:D,container:V,namespace:J}=O;xs(G,"onFallback");const S=x(te),K=()=>{O.isInFallback&&(c(null,z,V,S,D,null,J,a,l),Rn(O,z))},fe=z.transition&&z.transition.mode==="out-in";fe&&(te.transition.afterLeave=K),O.isInFallback=!0,m(te,D,null,!0),fe||K()},move(z,G,te){O.activeBranch&&p(O.activeBranch,z,G,te),O.container=z},next(){return O.activeBranch&&x(O.activeBranch)},registerDep(z,G,te){const D=!!O.pendingBranch;D&&O.deps++;const V=z.vnode.el;z.asyncDep.catch(J=>{ks(J,z,0)}).then(J=>{if(z.isUnmounted||O.isUnmounted||O.pendingId!==z.suspenseId)return;z.asyncResolved=!0;const{vnode:S}=z;vi(z,J),V&&(S.el=V);const K=!V&&z.subTree.el;G(z,S,w(V||z.subTree.el),V?null:x(z.subTree),O,o,te),K&&(S.placeholder=null,U(K)),ji(z,S.el),D&&--O.deps===0&&O.resolve()})},unmount(z,G){O.isUnmounted=!0,O.activeBranch&&m(O.activeBranch,n,z,G),O.pendingBranch&&m(O.pendingBranch,n,z,G)}};return O}function Mf(e,t,n,s,r,i,o,a,l){const f=t.suspense=tc(t,s,n,e.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=l(e,f.pendingBranch=t.ssContent,n,f,i,o);return f.deps===0&&f.resolve(!1,!0),u}function Df(e){const{shapeFlag:t,children:n}=e,s=t&32;e.ssContent=To(s?n.default:n),e.ssFallback=s?To(n.fallback):ge(_e)}function To(e){let t;if(F(e)){const n=Un&&e._c;n&&(e._d=!1,ot()),e=e(),n&&(e._d=!0,t=Ie,nc())}return j(e)&&(e=vf(e)),e=Ge(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function zf(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):ai(e)}function Rn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:s}=e;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,ji(s,r))}function Lf(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Me=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),_e=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),fs=[];let Ie=null;function ot(e=!1){fs.push(Ie=e?null:[])}function nc(){fs.pop(),Ie=fs[fs.length-1]||null}let Un=1;function er(e,t=!1){Un+=e,e<0&&Ie&&t&&(Ie.hasOnce=!0)}function sc(e){return e.dynamicChildren=Un>0?Ie||An:null,nc(),Un>0&&Ie&&Ie.push(e),e}function yn(e,t,n,s,r,i){return sc(he(e,t,n,s,r,i,!0))}function mi(e,t,n,s,r){return sc(ge(e,t,n,s,r,!0))}function $s(e){return e?e.__v_isVNode===!0:!1}function at(e,t){return e.type===t.type&&e.key===t.key}const rc=({key:e})=>e??null,Vs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||Ee(e)||F(e)?{i:De,r:e,k:t,f:!!n}:e:null);function he(e,t=null,n=null,s=0,r=null,i=e===Me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rc(t),ref:t&&Vs(t),scopeId:xl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:De};return a?(qi(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),Un>0&&!o&&Ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ie.push(l),l}const ge=Hf;function Hf(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===zl)&&(e=_e),$s(e)){const a=Lt(e,t,!0);return n&&qi(a,n),Un>0&&!i&&Ie&&(a.shapeFlag&6?Ie[Ie.indexOf(e)]=a:Ie.push(a)),a.patchFlag=-2,a}if(Zf(e)&&(e=e.__vccOpts),t){t=Bf(t);let{class:a,style:l}=t;a&&!pe(a)&&(t.class=Ii(a)),ue(l)&&(Bi(l)&&!j(l)&&(l=ye({},l)),t.style=Ni(l))}const o=pe(e)?1:ec(e)?128:El(e)?64:ue(e)?4:F(e)?2:0;return he(e,t,n,s,r,o,i,!0)}function Bf(e){return e?Bi(e)||ql(e)?ye({},e):e:null}function Lt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=e,f=t?jf(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&rc(f),ref:t&&t.ref?n&&i?j(i)?i.concat(Vs(t)):[i,Vs(t)]:Vs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&_s(u,l.clone(u)),u}function ic(e=" ",t=0){return ge($r,null,e,t)}function Uf(e,t){const n=ge(Fs,null,e);return n.staticCount=t,n}function Tm(e="",t=!1){return t?(ot(),mi(_e,null,e)):ge(_e,null,e)}function Ge(e){return e==null||typeof e=="boolean"?ge(_e):j(e)?ge(Me,null,e.slice()):$s(e)?Ot(e):ge($r,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function qi(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),qi(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!ql(t)?t._ctx=De:r===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:De},n=32):(t=String(t),s&64?(n=16,t=[ic(t)]):n=8);e.children=t,e.shapeFlag|=n}function jf(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ii([t.class,s.class]));else if(r==="style")t.style=Ni([t.style,s.style]);else if(dr(r)){const i=t[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function rt(e,t,n,s=null){Ze(e,t,7,[n,s])}const Ff=Ul();let Vf=0;function qf(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ff,i={uid:Vf++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gl(s,r),emitsOptions:jl(s,r),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=mf.bind(null,i),e.ce&&e.ce(i),i}let Ae=null;const oc=()=>Ae||De;let tr,gi;{const e=gr(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};tr=t("__VUE_INSTANCE_SETTERS__",n=>Ae=n),gi=t("__VUE_SSR_SETTERS__",n=>As=n)}const Ms=e=>{const t=Ae;return tr(e),e.scope.on(),()=>{e.scope.off(),tr(t)}},No=()=>{Ae&&Ae.scope.off(),tr(null)};function ac(e){return e.vnode.shapeFlag&4}let As=!1;function Wf(e,t=!1,n=!1){t&&gi(t);const{props:s,children:r}=e.vnode,i=ac(e);xf(e,s,i,t),wf(e,r,n||t);const o=i?Gf(e,t):void 0;return t&&gi(!1),o}function Gf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,of);const{setup:s}=n;if(s){yt();const r=e.setupContext=s.length>1?Jf(e):null,i=Ms(e),o=Is(s,e,0,[e.props,r]),a=Wa(o);if(_t(),i(),(a||e.sp)&&!cs(e)&&Tl(e),a){if(o.then(No,No),t)return o.then(l=>{vi(e,l)}).catch(l=>{ks(l,e,0)});e.asyncDep=o}else vi(e,o)}else lc(e)}function vi(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=gl(t)),lc(e)}function lc(e,t,n){const s=e.type;e.render||(e.render=s.render||lt);{const r=Ms(e);yt();try{af(e)}finally{_t(),r()}}}const Kf={get(e,t){return $e(e,"get",""),e[t]}};function Jf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Kf),slots:e.slots,emit:e.emit,expose:t}}function Ar(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(gl(Ou(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in us)return us[n](e)},has(t,n){return n in t||n in us}})):e.proxy}function Yf(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function Zf(e){return F(e)&&"__vccOpts"in e}const Ke=(e,t)=>Du(e,t,As);function Wi(e,t,n){try{er(-1);const s=arguments.length;return s===2?ue(t)&&!j(t)?$s(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&$s(n)&&(n=[n]),ge(e,t,n))}finally{er(1)}}const Qf="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bi;const Io=typeof window<"u"&&window.trustedTypes;if(Io)try{bi=Io.createPolicy("vue",{createHTML:e=>e})}catch{}const cc=bi?e=>bi.createHTML(e):e=>e,Xf="http://www.w3.org/2000/svg",ed="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,ko=ht&&ht.createElement("template"),td={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?ht.createElementNS(Xf,e):t==="mathml"?ht.createElementNS(ed,e):n?ht.createElement(e,{is:n}):ht.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ko.innerHTML=cc(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=ko.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},St="transition",Xn="animation",Es=Symbol("_vtc"),uc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nd=ye({},wl,uc),sd=e=>(e.displayName="Transition",e.props=nd,e),rd=sd((e,{slots:t})=>Wi(Gu,id(e),t)),qt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},Mo=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function id(e){const t={};for(const S in e)S in uc||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:u=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,x=od(r),w=x&&x[0],U=x&&x[1],{onBeforeEnter:N,onEnter:P,onEnterCancelled:M,onLeave:I,onLeaveCancelled:O,onBeforeAppear:z=N,onAppear:G=P,onAppearCancelled:te=M}=t,D=(S,K,fe,xe)=>{S._enterCancelled=xe,Wt(S,K?u:a),Wt(S,K?f:o),fe&&fe()},V=(S,K)=>{S._isLeaving=!1,Wt(S,c),Wt(S,m),Wt(S,p),K&&K()},J=S=>(K,fe)=>{const xe=S?G:P,ie=()=>D(K,S,fe);qt(xe,[K,ie]),Do(()=>{Wt(K,S?l:i),ft(K,S?u:a),Mo(xe)||zo(K,s,w,ie)})};return ye(t,{onBeforeEnter(S){qt(N,[S]),ft(S,i),ft(S,o)},onBeforeAppear(S){qt(z,[S]),ft(S,l),ft(S,f)},onEnter:J(!1),onAppear:J(!0),onLeave(S,K){S._isLeaving=!0;const fe=()=>V(S,K);ft(S,c),S._enterCancelled?(ft(S,p),Bo(S)):(Bo(S),ft(S,p)),Do(()=>{S._isLeaving&&(Wt(S,c),ft(S,m),Mo(I)||zo(S,s,U,fe))}),qt(I,[S,fe])},onEnterCancelled(S){D(S,!1,void 0,!0),qt(M,[S])},onAppearCancelled(S){D(S,!0,void 0,!0),qt(te,[S])},onLeaveCancelled(S){V(S),qt(O,[S])}})}function od(e){if(e==null)return null;if(ue(e))return[Br(e.enter),Br(e.leave)];{const t=Br(e);return[t,t]}}function Br(e){return Ya(e)}function ft(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Es]||(e[Es]=new Set)).add(t)}function Wt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Es];n&&(n.delete(t),n.size||(e[Es]=void 0))}function Do(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ad=0;function zo(e,t,n,s){const r=e._endId=++ad,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=ld(e,t);if(!o)return s();const f=o+"end";let u=0;const c=()=>{e.removeEventListener(f,p),i()},p=m=>{m.target===e&&++u>=l&&c()};setTimeout(()=>{u<l&&c()},a+1),e.addEventListener(f,p)}function ld(e,t){const n=window.getComputedStyle(e),s=x=>(n[x]||"").split(", "),r=s(`${St}Delay`),i=s(`${St}Duration`),o=Lo(r,i),a=s(`${Xn}Delay`),l=s(`${Xn}Duration`),f=Lo(a,l);let u=null,c=0,p=0;t===St?o>0&&(u=St,c=o,p=i.length):t===Xn?f>0&&(u=Xn,c=f,p=l.length):(c=Math.max(o,f),u=c>0?o>f?St:Xn:null,p=u?u===St?i.length:l.length:0);const m=u===St&&/\b(?:transform|all)(?:,|$)/.test(s(`${St}Property`).toString());return{type:u,timeout:c,propCount:p,hasTransform:m}}function Lo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ho(n)+Ho(e[s])))}function Ho(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Bo(e){return(e?e.ownerDocument:document).body.offsetHeight}function cd(e,t,n){const s=e[Es];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const nr=Symbol("_vod"),fc=Symbol("_vsh"),Nm={name:"show",beforeMount(e,{value:t},{transition:n}){e[nr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):es(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),es(e,!0),s.enter(e)):s.leave(e,()=>{es(e,!1)}):es(e,t))},beforeUnmount(e,{value:t}){es(e,t)}};function es(e,t){e.style.display=t?e[nr]:"none",e[fc]=!t}const ud=Symbol(""),fd=/(?:^|;)\s*display\s*:/;function dd(e,t,n){const s=e.style,r=pe(n);let i=!1;if(n&&!r){if(t)if(pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&qs(s,a,"")}else for(const o in t)n[o]==null&&qs(s,o,"");for(const o in n)o==="display"&&(i=!0),qs(s,o,n[o])}else if(r){if(t!==n){const o=s[ud];o&&(n+=";"+o),s.cssText=n,i=fd.test(n)}}else t&&e.removeAttribute("style");nr in e&&(e[nr]=i?s.display:"",e[fc]&&(s.display="none"))}const Uo=/\s*!important$/;function qs(e,t,n){if(j(n))n.forEach(s=>qs(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=hd(e,t);Uo.test(n)?e.setProperty(Bt(s),n.replace(Uo,""),"important"):e[s]=n}}const jo=["Webkit","Moz","ms"],Ur={};function hd(e,t){const n=Ur[t];if(n)return n;let s=Fe(t);if(s!=="filter"&&s in e)return Ur[t]=s;s=mr(s);for(let r=0;r<jo.length;r++){const i=jo[r]+s;if(i in e)return Ur[t]=i}return t}const Fo="http://www.w3.org/1999/xlink";function Vo(e,t,n,s,r,i=cu(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Fo,t.slice(6,t.length)):e.setAttributeNS(Fo,t,n):n==null||i&&!Za(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ht(n)?String(n):n)}function qo(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?cc(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Za(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function pd(e,t,n,s){e.addEventListener(t,n,s)}function md(e,t,n,s){e.removeEventListener(t,n,s)}const Wo=Symbol("_vei");function gd(e,t,n,s,r=null){const i=e[Wo]||(e[Wo]={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=vd(t);if(s){const f=i[t]=_d(s,r);pd(e,a,f,l)}else o&&(md(e,a,o,l),i[t]=void 0)}}const Go=/(?:Once|Passive|Capture)$/;function vd(e){let t;if(Go.test(e)){t={};let s;for(;s=e.match(Go);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let jr=0;const bd=Promise.resolve(),yd=()=>jr||(bd.then(()=>jr=0),jr=Date.now());function _d(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ze(xd(s,n.value),t,5,[s])};return n.value=e,n.attached=yd(),n}function xd(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$d=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?cd(e,s,o):t==="style"?dd(e,n,s):dr(t)?Pi(t)||gd(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ad(e,t,s,o))?(qo(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Vo(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!pe(s))?qo(e,Fe(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Vo(e,t,s,o))};function Ad(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ko(t)&&F(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ko(t)&&pe(n)?!1:t in e}const Ed={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Im=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Bt(r.key);if(t.some(o=>o===i||Ed[o]===i))return e(r)})},wd=ye({patchProp:$d},td);let Jo;function Sd(){return Jo||(Jo=Cf(wd))}const Cd=(...e)=>{const t=Sd().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Pd(s);if(!r)return;const i=t._component;!F(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Rd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Rd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Pd(e){return pe(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws=globalThis,Gi=Ws.ShadowRoot&&(Ws.ShadyCSS===void 0||Ws.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ki=Symbol(),Yo=new WeakMap;let dc=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==Ki)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Gi&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Yo.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Yo.set(n,t))}return t}toString(){return this.cssText}};const Od=e=>new dc(typeof e=="string"?e:e+"",void 0,Ki),At=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new dc(n,e,Ki)},Td=(e,t)=>{if(Gi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),r=Ws.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=n.cssText,e.appendChild(s)}},Zo=Gi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Od(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nd,defineProperty:Id,getOwnPropertyDescriptor:kd,getOwnPropertyNames:Md,getOwnPropertySymbols:Dd,getPrototypeOf:zd}=Object,Mt=globalThis,Qo=Mt.trustedTypes,Ld=Qo?Qo.emptyScript:"",Fr=Mt.reactiveElementPolyfillSupport,ds=(e,t)=>e,sr={toAttribute(e,t){switch(t){case Boolean:e=e?Ld:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ji=(e,t)=>!Nd(e,t),Xo={attribute:!0,type:String,converter:sr,reflect:!1,useDefault:!1,hasChanged:Ji};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Mt.litPropertyMetadata??(Mt.litPropertyMetadata=new WeakMap);let _n=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Xo){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,n);r!==void 0&&Id(this.prototype,t,r)}}static getPropertyDescriptor(t,n,s){const{get:r,set:i}=kd(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const a=r==null?void 0:r.call(this);i==null||i.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xo}static _$Ei(){if(this.hasOwnProperty(ds("elementProperties")))return;const t=zd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ds("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ds("properties"))){const n=this.properties,s=[...Md(n),...Dd(n)];for(const r of s)this.createProperty(r,n[r])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,r]of n)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const r=this._$Eu(n,s);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)n.unshift(Zo(r))}else t!==void 0&&n.push(Zo(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Td(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostConnected)==null?void 0:s.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostDisconnected)==null?void 0:s.call(n)})}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){var i;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:sr).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,n){var i,o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=s.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:sr;this._$Em=r;const f=l.fromAttribute(n,a.type);this[r]=f??((o=this._$Ej)==null?void 0:o.get(r))??f,this._$Em=null}}requestUpdate(t,n,s,r=!1,i){var o;if(t!==void 0){const a=this.constructor;if(r===!1&&(i=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??Ji)(i,n)||s.useDefault&&s.reflect&&i===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:r,wrapped:i},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:a}=o,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};_n.elementStyles=[],_n.shadowRootOptions={mode:"open"},_n[ds("elementProperties")]=new Map,_n[ds("finalized")]=new Map,Fr==null||Fr({ReactiveElement:_n}),(Mt.reactiveElementVersions??(Mt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=globalThis,ea=e=>e,rr=hs.trustedTypes,ta=rr?rr.createPolicy("lit-html",{createHTML:e=>e}):void 0,hc="$lit$",Nt=`lit$${Math.random().toFixed(9).slice(2)}$`,pc="?"+Nt,Hd=`<${pc}>`,ln=document,ws=()=>ln.createComment(""),Ss=e=>e===null||typeof e!="object"&&typeof e!="function",Yi=Array.isArray,Bd=e=>Yi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Vr=`[ 	
\f\r]`,ts=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,na=/-->/g,sa=/>/g,Gt=RegExp(`>|${Vr}(?:([^\\s"'>=/]+)(${Vr}*=${Vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ra=/'/g,ia=/"/g,mc=/^(?:script|style|textarea|title)$/i,Ud=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),be=Ud(1),jn=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),oa=new WeakMap,Zt=ln.createTreeWalker(ln,129);function gc(e,t){if(!Yi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ta!==void 0?ta.createHTML(t):t}const jd=(e,t)=>{const n=e.length-1,s=[];let r,i=t===2?"<svg>":t===3?"<math>":"",o=ts;for(let a=0;a<n;a++){const l=e[a];let f,u,c=-1,p=0;for(;p<l.length&&(o.lastIndex=p,u=o.exec(l),u!==null);)p=o.lastIndex,o===ts?u[1]==="!--"?o=na:u[1]!==void 0?o=sa:u[2]!==void 0?(mc.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=Gt):u[3]!==void 0&&(o=Gt):o===Gt?u[0]===">"?(o=r??ts,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,f=u[1],o=u[3]===void 0?Gt:u[3]==='"'?ia:ra):o===ia||o===ra?o=Gt:o===na||o===sa?o=ts:(o=Gt,r=void 0);const m=o===Gt&&e[a+1].startsWith("/>")?" ":"";i+=o===ts?l+Hd:c>=0?(s.push(f),l.slice(0,c)+hc+l.slice(c)+Nt+m):l+Nt+(c===-2?a:m)}return[gc(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let yi=class vc{constructor({strings:t,_$litType$:n},s){let r;this.parts=[];let i=0,o=0;const a=t.length-1,l=this.parts,[f,u]=jd(t,n);if(this.el=vc.createElement(f,s),Zt.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=Zt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(hc)){const p=u[o++],m=r.getAttribute(c).split(Nt),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:x[2],strings:m,ctor:x[1]==="."?Vd:x[1]==="?"?qd:x[1]==="@"?Wd:Er}),r.removeAttribute(c)}else c.startsWith(Nt)&&(l.push({type:6,index:i}),r.removeAttribute(c));if(mc.test(r.tagName)){const c=r.textContent.split(Nt),p=c.length-1;if(p>0){r.textContent=rr?rr.emptyScript:"";for(let m=0;m<p;m++)r.append(c[m],ws()),Zt.nextNode(),l.push({type:2,index:++i});r.append(c[p],ws())}}}else if(r.nodeType===8)if(r.data===pc)l.push({type:2,index:i});else{let c=-1;for(;(c=r.data.indexOf(Nt,c+1))!==-1;)l.push({type:7,index:i}),c+=Nt.length-1}i++}}static createElement(t,n){const s=ln.createElement("template");return s.innerHTML=t,s}};function Fn(e,t,n=e,s){var o,a;if(t===jn)return t;let r=s!==void 0?(o=n._$Co)==null?void 0:o[s]:n._$Cl;const i=Ss(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,n,s)),s!==void 0?(n._$Co??(n._$Co=[]))[s]=r:n._$Cl=r),r!==void 0&&(t=Fn(e,r._$AS(e,t.values),r,s)),t}let Fd=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??ln).importNode(n,!0);Zt.currentNode=r;let i=Zt.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let f;l.type===2?f=new Zi(i,i.nextSibling,this,t):l.type===1?f=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(f=new Gd(i,this,t)),this._$AV.push(f),l=s[++a]}o!==(l==null?void 0:l.index)&&(i=Zt.nextNode(),o++)}return Zt.currentNode=ln,r}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}},Zi=class bc{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,s,r){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Fn(this,t,n),Ss(t)?t===ae||t==null||t===""?(this._$AH!==ae&&this._$AR(),this._$AH=ae):t!==this._$AH&&t!==jn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ae&&Ss(this._$AH)?this._$AA.nextSibling.data=t:this.T(ln.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=yi.createElement(gc(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(n);else{const o=new Fd(r,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let n=oa.get(t.strings);return n===void 0&&oa.set(t.strings,n=new yi(t)),n}k(t){Yi(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,r=0;for(const i of t)r===n.length?n.push(s=new bc(this.O(ws()),this.O(ws()),this,this.options)):s=n[r],s._$AI(i),r++;r<n.length&&(this._$AR(s&&s._$AB.nextSibling,r),n.length=r)}_$AR(t=this._$AA.nextSibling,n){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,n);t!==this._$AB;){const r=ea(t).nextSibling;ea(t).remove(),t=r}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},Er=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,r,i){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=t,this.name=n,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ae}_$AI(t,n=this,s,r){const i=this.strings;let o=!1;if(i===void 0)t=Fn(this,t,n,0),o=!Ss(t)||t!==this._$AH&&t!==jn,o&&(this._$AH=t);else{const a=t;let l,f;for(t=i[0],l=0;l<i.length-1;l++)f=Fn(this,a[s+l],n,l),f===jn&&(f=this._$AH[l]),o||(o=!Ss(f)||f!==this._$AH[l]),f===ae?t=ae:t!==ae&&(t+=(f??"")+i[l+1]),this._$AH[l]=f}o&&!r&&this.j(t)}j(t){t===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Vd=class extends Er{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ae?void 0:t}},qd=class extends Er{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ae)}},Wd=class extends Er{constructor(t,n,s,r,i){super(t,n,s,r,i),this.type=5}_$AI(t,n=this){if((t=Fn(this,t,n,0)??ae)===jn)return;const s=this._$AH,r=t===ae&&s!==ae||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==ae&&(s===ae||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},Gd=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Fn(this,t)}};const qr=hs.litHtmlPolyfillSupport;qr==null||qr(yi,Zi),(hs.litHtmlVersions??(hs.litHtmlVersions=[])).push("3.3.3");const Kd=(e,t,n)=>{const s=(n==null?void 0:n.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const i=(n==null?void 0:n.renderBefore)??null;s._$litPart$=r=new Zi(t.insertBefore(ws(),i),i,void 0,n??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=globalThis;let ze=class extends _n{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kd(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return jn}};var ja;ze._$litElement$=!0,ze.finalized=!0,(ja=nn.litElementHydrateSupport)==null||ja.call(nn,{LitElement:ze});const Wr=nn.litElementPolyfillSupport;Wr==null||Wr({LitElement:ze});(nn.litElementVersions??(nn.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jd={attribute:!0,type:String,converter:sr,reflect:!1,hasChanged:Ji},Yd=(e=Jd,t,n)=>{const{kind:s,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),s==="accessor"){const{name:o}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,e,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(s==="setter"){const{name:o}=n;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,e,!0,a)}}throw Error("Unsupported decorator location: "+s)};function W(e){return(t,n)=>typeof n=="object"?Yd(e,t,n):((s,r,i)=>{const o=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),o?Object.getOwnPropertyDescriptor(r,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yc=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zd(e,t){return(n,s,r)=>{const i=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(e))??null};return yc(n,s,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qd(e){return(t,n)=>{const{slot:s,selector:r}=e??{},i="slot"+(s?`[name=${s}]`:":not([name])");return yc(t,n,{get(){var l;const o=(l=this.renderRoot)==null?void 0:l.querySelector(i),a=(o==null?void 0:o.assignedElements(e))??[];return r===void 0?a:a.filter(f=>f.matches(r))}})}}var hn=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},On;let ir=(On=class extends ze{constructor(){super(),this.exclusive=!1,this._onToggle=t=>{if(!this.exclusive)return;const n=t.target;if(n.open)for(const s of this._items)s!==n&&s.open&&(s.open=!1)},this.addEventListener("mfp-accordion-toggle",this._onToggle)}render(){return be`<slot></slot>`}},On.styles=At`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            border: 1px solid var(--color-border-default, #e5e7eb);
            border-radius: var(--size-radius-md, 8px);
            overflow: hidden;
        }

        ::slotted(mfp-accordion-item) {
            display: block;
        }

        ::slotted(mfp-accordion-item:not(:last-of-type)) {
            border-bottom: 1px solid var(--color-border-default, #e5e7eb);
        }
    `,On);hn([W({type:Boolean})],ir.prototype,"exclusive",void 0);hn([Qd({selector:"mfp-accordion-item"})],ir.prototype,"_items",void 0);ir=hn([Et("mfp-accordion")],ir);var Tn;let Cs=(Tn=class extends ze{constructor(){super(...arguments),this.label="",this.open=!1,this.disabled=!1,this._onToggle=t=>{const n=t.target;this.open!==n.open&&(this.open=n.open),this.dispatchEvent(new CustomEvent("mfp-accordion-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})),this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,composed:!0,detail:{open:this.open}}))}}render(){return be`
            <details ?open=${this.open} @toggle=${this._onToggle}>
                <summary part="summary">
                    <slot name="header">${this.label}</slot>
                    <svg
                        class="chevron"
                        part="chevron"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M4 6l4 4 4-4"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </summary>
                <div class="content" part="content">
                    <slot></slot>
                </div>
            </details>
        `}},Tn.styles=At`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            color: var(--color-text-default, #111827);
            background: var(--color-neutral-0, #ffffff);
        }

        details > summary {
            list-style: none;
            cursor: pointer;
            padding: var(--size-spacing-3, 12px) var(--size-spacing-4, 16px);
            display: flex;
            align-items: center;
            gap: var(--size-spacing-3, 12px);
            font-size: var(--font-size-base, 16px);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            user-select: none;
            transition: background var(--motion-duration-fast, 150ms)
                var(--motion-easing-standard, ease);
        }

        /* Hide the browser default disclosure marker (the little triangle). */
        details > summary::-webkit-details-marker {
            display: none;
        }
        details > summary::marker {
            display: none;
        }

        details > summary:hover {
            background: var(--color-background-subtle, #f9fafb);
        }

        details > summary:focus-visible {
            outline: 2px solid var(--color-brand-primary, #2563eb);
            outline-offset: -2px;
        }

        .chevron {
            margin-left: auto;
            flex: none;
            color: var(--color-text-muted, #6b7280);
            transition: transform var(--motion-duration-normal, 200ms)
                var(--motion-easing-standard, ease);
        }

        details[open] > summary .chevron {
            transform: rotate(180deg);
        }

        .content {
            padding: 0 var(--size-spacing-4, 16px) var(--size-spacing-4, 16px);
            font-size: var(--font-size-base, 16px);
            line-height: var(--font-line-height-normal, 1.5);
            color: var(--color-text-default, #111827);
        }

        :host([disabled]) details > summary {
            cursor: not-allowed;
            opacity: 0.5;
            pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
            details > summary,
            .chevron {
                transition: none;
            }
        }
    `,Tn);hn([W()],Cs.prototype,"label",void 0);hn([W({type:Boolean,reflect:!0})],Cs.prototype,"open",void 0);hn([W({type:Boolean,reflect:!0})],Cs.prototype,"disabled",void 0);Cs=hn([Et("mfp-accordion-item")],Cs);var wr=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},Nn;let Rs=(Nn=class extends ze{constructor(){super(...arguments),this.variant="neutral",this.size="sm",this.outlined=!1}render(){return be`<slot></slot>`}},Nn.styles=At`
        :host {
            display: inline-flex;
            align-items: center;
            gap: var(--size-spacing-1, 4px);
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            border-radius: var(--size-radius-full, 9999px);
            padding: 2px var(--size-spacing-2, 8px);
            white-space: nowrap;
            background: var(--color-background-muted, #f3f4f6);
            color: var(--color-text-default, #111827);
            border: 1px solid transparent;
        }

        :host([size='sm']),
        :host(:not([size])) {
            font-size: var(--font-size-2xs, 10px);
            padding: 2px var(--size-spacing-2, 8px);
        }
        :host([size='md']) {
            font-size: var(--font-size-xs, 12px);
            padding: 4px var(--size-spacing-3, 12px);
        }

        :host([variant='brand']) {
            background: var(--color-brand-primary-subtle, #eff6ff);
            color: var(--color-brand-primary-emphasis, #1e40af);
        }
        :host([variant='success']) {
            background: var(--color-status-success-bg, #dcfce7);
            color: var(--color-status-success-fg, #166534);
        }
        :host([variant='warning']) {
            background: var(--color-status-warning-bg, #fef3c7);
            color: var(--color-status-warning-fg, #92400e);
        }
        :host([variant='error']) {
            background: var(--color-status-error-bg, #fee2e2);
            color: var(--color-status-error-fg, #991b1b);
        }
        :host([variant='info']) {
            background: var(--color-status-info-bg, #dbeafe);
            color: var(--color-status-info-fg, #1e40af);
        }

        :host([outlined]) {
            background: transparent;
            border-color: currentColor;
        }
    `,Nn);wr([W({reflect:!0})],Rs.prototype,"variant",void 0);wr([W({reflect:!0})],Rs.prototype,"size",void 0);wr([W({type:Boolean,reflect:!0})],Rs.prototype,"outlined",void 0);Rs=wr([Et("mfp-badge")],Rs);var Jn=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},rn;let cn=(rn=class extends ze{constructor(){super(),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this._onClick=()=>{var t,n;this.disabled||this.loading||(this.type==="submit"?(t=this.form)==null||t.requestSubmit():this.type==="reset"&&((n=this.form)==null||n.reset()))},this._internals=this.attachInternals()}get form(){return this._internals.form}render(){const t=this.disabled||this.loading;return be`
            <button
                type="button"
                ?disabled=${t}
                aria-busy=${this.loading?"true":"false"}
                part="button"
                @click=${this._onClick}
            >
                ${this.loading?be`<span class="spinner" aria-hidden="true"></span>`:""}
                <slot></slot>
            </button>
        `}},rn.formAssociated=!0,rn.styles=At`
        :host {
            display: inline-block;
        }

        button {
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            border: 1px solid transparent;
            border-radius: var(--size-radius-md, 8px);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: var(--size-spacing-2, 8px);
            white-space: nowrap;
            user-select: none;
            transition:
                background var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                box-shadow var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease);
        }

        button:focus-visible {
            outline: 2px solid var(--color-brand-primary, #2563eb);
            outline-offset: 2px;
        }

        button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        /* Sizes — fall back to medium when no [size] attribute is set */
        :host(:not([size])) button,
        :host([size='md']) button {
            padding: var(--size-spacing-2, 8px) var(--size-spacing-4, 16px);
            font-size: var(--font-size-base, 16px);
            min-height: 40px;
        }
        :host([size='sm']) button {
            padding: var(--size-spacing-1, 4px) var(--size-spacing-3, 12px);
            font-size: var(--font-size-sm, 14px);
            min-height: 32px;
        }
        :host([size='lg']) button {
            padding: var(--size-spacing-3, 12px) var(--size-spacing-5, 20px);
            font-size: var(--font-size-lg, 18px);
            min-height: 48px;
        }

        /* Variants — fall back to primary when no [variant] attribute is set */
        :host(:not([variant])) button,
        :host([variant='primary']) button {
            background: var(--color-brand-primary, #2563eb);
            color: var(--color-brand-primary-fg, #ffffff);
        }
        :host(:not([variant])) button:hover:not(:disabled),
        :host([variant='primary']) button:hover:not(:disabled) {
            background: var(--color-brand-primary-hover, #1d4ed8);
            box-shadow: var(--shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.08));
        }

        :host([variant='secondary']) button {
            background: var(--color-neutral-0, #ffffff);
            color: var(--color-text-default, #111827);
            border-color: var(--color-border-default, #e5e7eb);
        }
        :host([variant='secondary']) button:hover:not(:disabled) {
            background: var(--color-background-subtle, #f9fafb);
            border-color: var(--color-border-strong, #9ca3af);
        }

        :host([variant='danger']) button {
            background: var(--color-status-error-solid, #dc2626);
            color: var(--color-neutral-0, #ffffff);
        }
        :host([variant='danger']) button:hover:not(:disabled) {
            background: var(--color-status-error-fg, #991b1b);
            box-shadow: var(--shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.08));
        }

        :host([variant='ghost']) button {
            background: transparent;
            color: var(--color-text-default, #111827);
        }
        :host([variant='ghost']) button:hover:not(:disabled) {
            background: var(--color-background-muted, #f3f4f6);
        }

        /* Loading spinner — sized relative to current font-size */
        .spinner {
            width: 1em;
            height: 1em;
            border: 2px solid currentColor;
            border-top-color: transparent;
            border-radius: 50%;
            animation: mfp-button-spin 0.6s linear infinite;
            flex: none;
        }

        @keyframes mfp-button-spin {
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            button {
                transition: none;
            }
            .spinner {
                animation-duration: 1.5s;
            }
        }
    `,rn);Jn([W({reflect:!0})],cn.prototype,"variant",void 0);Jn([W({reflect:!0})],cn.prototype,"size",void 0);Jn([W({type:Boolean,reflect:!0})],cn.prototype,"disabled",void 0);Jn([W({type:Boolean,reflect:!0})],cn.prototype,"loading",void 0);Jn([W()],cn.prototype,"type",void 0);cn=Jn([Et("mfp-button")],cn);var Qi=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},In;let or=(In=class extends ze{constructor(){super(...arguments),this.variant="default",this.padding="default",this._onSlotChange=t=>{const n=t.target,s=n.parentElement;if(!s)return;n.assignedNodes({flatten:!0}).length>0?s.removeAttribute("data-empty"):s.setAttribute("data-empty","")}}render(){return be`
            <div part="surface" class="surface">
                <div part="header" class="header" data-empty>
                    <slot name="header" @slotchange=${this._onSlotChange}></slot>
                </div>
                <div part="body" class="body">
                    <slot></slot>
                </div>
                <div part="footer" class="footer" data-empty>
                    <slot name="footer" @slotchange=${this._onSlotChange}></slot>
                </div>
            </div>
        `}},In.styles=At`
        :host {
            display: block;
            background: var(--color-neutral-0, #ffffff);
            border-radius: var(--size-radius-lg, 12px);
            color: var(--color-text-default, #111827);
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
        }

        /* Variants — fall back to default when no [variant] attribute is set */
        :host(:not([variant])),
        :host([variant='default']) {
            border: 1px solid var(--color-border-default, #e5e7eb);
            box-shadow: var(--shadow-xs, 0 1px 2px rgba(0, 0, 0, 0.05));
        }
        :host([variant='flat']) {
            border: 1px solid var(--color-border-default, #e5e7eb);
            box-shadow: none;
        }
        :host([variant='elevated']) {
            border: none;
            box-shadow: var(--shadow-md, 0 4px 12px rgba(0, 0, 0, 0.1));
        }

        .surface {
            display: flex;
            flex-direction: column;
        }

        /* Padding tiers — fall back to default when no [padding] attribute is set */
        :host(:not([padding])) .surface,
        :host([padding='default']) .surface {
            padding: var(--size-spacing-5, 20px);
            gap: var(--size-spacing-4, 16px);
        }
        :host([padding='compact']) .surface {
            padding: var(--size-spacing-3, 12px);
            gap: var(--size-spacing-2, 8px);
        }
        :host([padding='roomy']) .surface {
            padding: var(--size-spacing-8, 32px);
            gap: var(--size-spacing-5, 20px);
        }
        :host([padding='none']) .surface {
            padding: 0;
            gap: 0;
        }

        .header {
            font-size: var(--font-size-lg, 18px);
            font-weight: var(--font-weight-semibold, 600);
            line-height: var(--font-line-height-tight, 1.2);
        }

        .footer {
            border-top: 1px solid var(--color-border-default, #e5e7eb);
            padding-top: var(--size-spacing-4, 16px);
        }

        :host([padding='none']) .footer {
            padding-top: 0;
        }

        /* Hide section wrappers that have no slotted content */
        .header,
        .footer {
            display: contents;
        }

        .header[data-empty],
        .footer[data-empty] {
            display: none;
        }
    `,In);Qi([W({reflect:!0})],or.prototype,"variant",void 0);Qi([W({reflect:!0})],or.prototype,"padding",void 0);or=Qi([Et("mfp-card")],or);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=globalThis,Xi=Gs.ShadowRoot&&(Gs.ShadyCSS===void 0||Gs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eo=Symbol(),aa=new WeakMap;let _c=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==eo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Xi&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=aa.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&aa.set(n,t))}return t}toString(){return this.cssText}};const Xd=e=>new _c(typeof e=="string"?e:e+"",void 0,eo),Sr=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new _c(n,e,eo)},eh=(e,t)=>{if(Xi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),r=Gs.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=n.cssText,e.appendChild(s)}},la=Xi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Xd(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:th,defineProperty:nh,getOwnPropertyDescriptor:sh,getOwnPropertyNames:rh,getOwnPropertySymbols:ih,getPrototypeOf:oh}=Object,Dt=globalThis,ca=Dt.trustedTypes,ah=ca?ca.emptyScript:"",Gr=Dt.reactiveElementPolyfillSupport,ps=(e,t)=>e,ar={toAttribute(e,t){switch(t){case Boolean:e=e?ah:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},to=(e,t)=>!th(e,t),ua={attribute:!0,type:String,converter:ar,reflect:!1,useDefault:!1,hasChanged:to};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Dt.litPropertyMetadata??(Dt.litPropertyMetadata=new WeakMap);let xn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ua){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,n);r!==void 0&&nh(this.prototype,t,r)}}static getPropertyDescriptor(t,n,s){const{get:r,set:i}=sh(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const a=r==null?void 0:r.call(this);i==null||i.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ua}static _$Ei(){if(this.hasOwnProperty(ps("elementProperties")))return;const t=oh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ps("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ps("properties"))){const n=this.properties,s=[...rh(n),...ih(n)];for(const r of s)this.createProperty(r,n[r])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,r]of n)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const r=this._$Eu(n,s);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)n.unshift(la(r))}else t!==void 0&&n.push(la(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eh(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostConnected)==null?void 0:s.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostDisconnected)==null?void 0:s.call(n)})}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){var i;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:ar).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,n){var i,o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=s.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:ar;this._$Em=r;const f=l.fromAttribute(n,a.type);this[r]=f??((o=this._$Ej)==null?void 0:o.get(r))??f,this._$Em=null}}requestUpdate(t,n,s,r=!1,i){var o;if(t!==void 0){const a=this.constructor;if(r===!1&&(i=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??to)(i,n)||s.useDefault&&s.reflect&&i===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:r,wrapped:i},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:a}=o,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};xn.elementStyles=[],xn.shadowRootOptions={mode:"open"},xn[ps("elementProperties")]=new Map,xn[ps("finalized")]=new Map,Gr==null||Gr({ReactiveElement:xn}),(Dt.reactiveElementVersions??(Dt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms=globalThis,fa=e=>e,lr=ms.trustedTypes,da=lr?lr.createPolicy("lit-html",{createHTML:e=>e}):void 0,xc="$lit$",It=`lit$${Math.random().toFixed(9).slice(2)}$`,$c="?"+It,lh=`<${$c}>`,un=document,Ps=()=>un.createComment(""),Os=e=>e===null||typeof e!="object"&&typeof e!="function",no=Array.isArray,ch=e=>no(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Kr=`[ 	
\f\r]`,ns=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ha=/-->/g,pa=/>/g,Kt=RegExp(`>|${Kr}(?:([^\\s"'>=/]+)(${Kr}*=${Kr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ma=/'/g,ga=/"/g,Ac=/^(?:script|style|textarea|title)$/i,uh=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Pn=uh(1),Vn=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),va=new WeakMap,Qt=un.createTreeWalker(un,129);function Ec(e,t){if(!no(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return da!==void 0?da.createHTML(t):t}const fh=(e,t)=>{const n=e.length-1,s=[];let r,i=t===2?"<svg>":t===3?"<math>":"",o=ns;for(let a=0;a<n;a++){const l=e[a];let f,u,c=-1,p=0;for(;p<l.length&&(o.lastIndex=p,u=o.exec(l),u!==null);)p=o.lastIndex,o===ns?u[1]==="!--"?o=ha:u[1]!==void 0?o=pa:u[2]!==void 0?(Ac.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=Kt):u[3]!==void 0&&(o=Kt):o===Kt?u[0]===">"?(o=r??ns,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,f=u[1],o=u[3]===void 0?Kt:u[3]==='"'?ga:ma):o===ga||o===ma?o=Kt:o===ha||o===pa?o=ns:(o=Kt,r=void 0);const m=o===Kt&&e[a+1].startsWith("/>")?" ":"";i+=o===ns?l+lh:c>=0?(s.push(f),l.slice(0,c)+xc+l.slice(c)+It+m):l+It+(c===-2?a:m)}return[Ec(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let _i=class wc{constructor({strings:t,_$litType$:n},s){let r;this.parts=[];let i=0,o=0;const a=t.length-1,l=this.parts,[f,u]=fh(t,n);if(this.el=wc.createElement(f,s),Qt.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=Qt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(xc)){const p=u[o++],m=r.getAttribute(c).split(It),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:x[2],strings:m,ctor:x[1]==="."?hh:x[1]==="?"?ph:x[1]==="@"?mh:Cr}),r.removeAttribute(c)}else c.startsWith(It)&&(l.push({type:6,index:i}),r.removeAttribute(c));if(Ac.test(r.tagName)){const c=r.textContent.split(It),p=c.length-1;if(p>0){r.textContent=lr?lr.emptyScript:"";for(let m=0;m<p;m++)r.append(c[m],Ps()),Qt.nextNode(),l.push({type:2,index:++i});r.append(c[p],Ps())}}}else if(r.nodeType===8)if(r.data===$c)l.push({type:2,index:i});else{let c=-1;for(;(c=r.data.indexOf(It,c+1))!==-1;)l.push({type:7,index:i}),c+=It.length-1}i++}}static createElement(t,n){const s=un.createElement("template");return s.innerHTML=t,s}};function qn(e,t,n=e,s){var o,a;if(t===Vn)return t;let r=s!==void 0?(o=n._$Co)==null?void 0:o[s]:n._$Cl;const i=Os(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,n,s)),s!==void 0?(n._$Co??(n._$Co=[]))[s]=r:n._$Cl=r),r!==void 0&&(t=qn(e,r._$AS(e,t.values),r,s)),t}class dh{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??un).importNode(n,!0);Qt.currentNode=r;let i=Qt.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let f;l.type===2?f=new so(i,i.nextSibling,this,t):l.type===1?f=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(f=new gh(i,this,t)),this._$AV.push(f),l=s[++a]}o!==(l==null?void 0:l.index)&&(i=Qt.nextNode(),o++)}return Qt.currentNode=un,r}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let so=class Sc{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,s,r){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=qn(this,t,n),Os(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==Vn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ch(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&Os(this._$AH)?this._$AA.nextSibling.data=t:this.T(un.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=_i.createElement(Ec(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(n);else{const o=new dh(r,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let n=va.get(t.strings);return n===void 0&&va.set(t.strings,n=new _i(t)),n}k(t){no(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,r=0;for(const i of t)r===n.length?n.push(s=new Sc(this.O(Ps()),this.O(Ps()),this,this.options)):s=n[r],s._$AI(i),r++;r<n.length&&(this._$AR(s&&s._$AB.nextSibling,r),n.length=r)}_$AR(t=this._$AA.nextSibling,n){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,n);t!==this._$AB;){const r=fa(t).nextSibling;fa(t).remove(),t=r}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},Cr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,r,i){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=n,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=me}_$AI(t,n=this,s,r){const i=this.strings;let o=!1;if(i===void 0)t=qn(this,t,n,0),o=!Os(t)||t!==this._$AH&&t!==Vn,o&&(this._$AH=t);else{const a=t;let l,f;for(t=i[0],l=0;l<i.length-1;l++)f=qn(this,a[s+l],n,l),f===Vn&&(f=this._$AH[l]),o||(o=!Os(f)||f!==this._$AH[l]),f===me?t=me:t!==me&&(t+=(f??"")+i[l+1]),this._$AH[l]=f}o&&!r&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},hh=class extends Cr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}};class ph extends Cr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}let mh=class extends Cr{constructor(t,n,s,r,i){super(t,n,s,r,i),this.type=5}_$AI(t,n=this){if((t=qn(this,t,n,0)??me)===Vn)return;const s=this._$AH,r=t===me&&s!==me||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==me&&(s===me||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class gh{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){qn(this,t)}}const Jr=ms.litHtmlPolyfillSupport;Jr==null||Jr(_i,so),(ms.litHtmlVersions??(ms.litHtmlVersions=[])).push("3.3.3");const vh=(e,t,n)=>{const s=(n==null?void 0:n.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const i=(n==null?void 0:n.renderBefore)??null;s._$litPart$=r=new so(t.insertBefore(Ps(),i),i,void 0,n??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sn=globalThis;let zt=class extends xn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vh(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Vn}};var Fa;zt._$litElement$=!0,zt.finalized=!0,(Fa=sn.litElementHydrateSupport)==null||Fa.call(sn,{LitElement:zt});const Yr=sn.litElementPolyfillSupport;Yr==null||Yr({LitElement:zt});(sn.litElementVersions??(sn.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bh={attribute:!0,type:String,converter:ar,reflect:!1,hasChanged:to},yh=(e=bh,t,n)=>{const{kind:s,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),s==="accessor"){const{name:o}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,e,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(s==="setter"){const{name:o}=n;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,e,!0,a)}}throw Error("Unsupported decorator location: "+s)};function Ut(e){return(t,n)=>typeof n=="object"?yh(e,t,n):((s,r,i)=>{const o=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),o?Object.getOwnPropertyDescriptor(r,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _h=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Cc(e){return(t,n)=>{const{slot:s,selector:r}=e??{},i="slot"+(s?`[name=${s}]`:":not([name])");return _h(t,n,{get(){var l;const o=(l=this.renderRoot)==null?void 0:l.querySelector(i),a=(o==null?void 0:o.assignedElements(e))??[];return r===void 0?a:a.filter(f=>f.matches(r))}})}}var Rc=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},kn;let xi=(kn=class extends zt{constructor(){super(...arguments),this.variant="default"}render(){return Pn`
            <footer class="inner" part="inner"><slot></slot></footer>
        `}},kn.styles=Sr`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            font-size: var(--font-size-sm, 14px);
            line-height: var(--font-line-height-normal, 1.5);
            background: var(--color-background-subtle, #f9fafb);
            color: var(--color-text-muted, #6b7280);
            border-top: 1px solid var(--color-border-default, #e5e7eb);
        }

        :host([variant='brand']) {
            background: var(--color-brand-primary, #2563eb);
            color: var(--color-brand-primary-fg, #ffffff);
            border-top-color: var(--color-brand-primary-emphasis, #1e40af);
        }

        :host([variant='dark']) {
            background: var(--color-neutral-900, #111827);
            color: var(--color-text-inverse-muted, #d1d5db);
            border-top-color: var(--color-neutral-900, #111827);
        }

        .inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--size-spacing-4, 16px);
            padding: var(--size-spacing-4, 16px) var(--size-spacing-5, 20px);
            flex-wrap: wrap;
        }

        ::slotted(a) {
            color: inherit;
        }

        /* Honor links in any nested element by inheriting the surface color */
        ::slotted(*) {
            color: inherit;
        }
    `,kn);Rc([Ut({reflect:!0})],xi.prototype,"variant",void 0);xi=Rc([Rr("mfp-footer")],xi);var Yn=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},Mn;let fn=(Mn=class extends ze{constructor(){super(...arguments),this.variant="ghost",this.size="md",this.disabled=!1,this.type="button",this.label=""}render(){return this.label||console.warn("<mfp-icon-button> requires a `label` attribute for accessibility"),be`
            <button
                type=${this.type}
                ?disabled=${this.disabled}
                aria-label=${this.label}
                part="button"
            >
                <slot></slot>
            </button>
        `}},Mn.styles=At`
        :host {
            display: inline-block;
        }

        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid transparent;
            border-radius: var(--size-radius-md, 8px);
            cursor: pointer;
            padding: 0;
            font: inherit;
            color: inherit;
            user-select: none;
            transition:
                background var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                box-shadow var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease);
        }

        button:focus-visible {
            outline: 2px solid var(--color-brand-primary, #2563eb);
            outline-offset: 2px;
        }

        button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        ::slotted(*) {
            width: 1em;
            height: 1em;
            /*
             * Center the icon's content within its 1em x 1em box. Without
             * this, slotted spans/emojis sit on the text baseline and look
             * vertically offset; SVGs inherit text-bottom alignment and
             * end up bottom-aligned. inline-flex + line-height: 1 normalizes.
             */
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
        }

        /* Sizes — square aspect, font-size sets icon size */
        :host(:not([size])) button,
        :host([size='md']) button {
            width: 40px;
            height: 40px;
            font-size: 20px;
        }
        :host([size='sm']) button {
            width: 32px;
            height: 32px;
            font-size: 16px;
        }
        :host([size='lg']) button {
            width: 48px;
            height: 48px;
            font-size: 24px;
        }

        /*
         * Variants. Default is ghost: transparent background with a faint
         * hover hit-target — matches industry convention (Material, Shoelace,
         * Radix all default icon buttons to no chrome). Filled variants are
         * opt-in for FAB-style or prominent toolbar actions.
         */
        :host([variant='primary']) button {
            background: var(--color-brand-primary, #2563eb);
            color: var(--color-brand-primary-fg, #ffffff);
        }
        :host([variant='primary']) button:hover:not(:disabled) {
            background: var(--color-brand-primary-hover, #1d4ed8);
        }

        :host([variant='secondary']) button {
            background: var(--color-neutral-0, #ffffff);
            color: var(--color-text-default, #111827);
            border-color: var(--color-border-default, #e5e7eb);
        }
        :host([variant='secondary']) button:hover:not(:disabled) {
            background: var(--color-background-subtle, #f9fafb);
            border-color: var(--color-border-strong, #9ca3af);
        }

        :host([variant='danger']) button {
            background: var(--color-status-error-solid, #dc2626);
            color: var(--color-neutral-0, #ffffff);
        }
        :host([variant='danger']) button:hover:not(:disabled) {
            background: var(--color-status-error-fg, #991b1b);
        }

        :host([variant='ghost']) button {
            background: transparent;
            color: var(--color-text-default, #111827);
        }
        :host([variant='ghost']) button:hover:not(:disabled) {
            background: var(--color-background-muted, #f3f4f6);
        }

        @media (prefers-reduced-motion: reduce) {
            button {
                transition: none;
            }
        }
    `,Mn);Yn([W({reflect:!0})],fn.prototype,"variant",void 0);Yn([W({reflect:!0})],fn.prototype,"size",void 0);Yn([W({type:Boolean,reflect:!0})],fn.prototype,"disabled",void 0);Yn([W()],fn.prototype,"type",void 0);Yn([W()],fn.prototype,"label",void 0);fn=Yn([Et("mfp-icon-button")],fn);var qe=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let xh=0;var on;let Le=(on=class extends ze{constructor(){super(),this.size="md",this.type="text",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.readonly=!1,this.required=!1,this._id=`mfp-input-${++xh}`,this._onInput=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please fill out this field."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,s=`${n}-hint`,r=`${n}-error`,i=t?r:this.hint?s:void 0;return be`
            ${this.label?be`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?be`<span class="required" aria-hidden="true">*</span>`:ae}
                  </label>`:ae}
            <div part="control" class="control ${t?"invalid":""}">
                <slot name="prefix"></slot>
                <input
                    id=${n}
                    part="input"
                    type=${this.type}
                    .value=${this.value}
                    name=${this.name}
                    placeholder=${this.placeholder}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-invalid=${t?"true":"false"}
                    aria-describedby=${i??ae}
                    @input=${this._onInput}
                    @change=${this._onChange}
                />
                <slot name="suffix"></slot>
            </div>
            ${t?be`<p part="error" id=${r} class="error" role="alert">${this.error}</p>`:this.hint?be`<p part="hint" id=${s} class="hint">${this.hint}</p>`:ae}
        `}},on.styles=At`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            color: var(--color-text-default, #111827);
        }

        :host([disabled]) {
            opacity: 0.6;
        }

        label {
            display: block;
            font-size: var(--font-size-sm, 14px);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            margin-bottom: var(--size-spacing-2, 8px);
        }

        .required {
            color: var(--color-status-error-solid, #dc2626);
            margin-left: var(--size-spacing-1, 4px);
        }

        .control {
            display: flex;
            align-items: center;
            gap: var(--size-spacing-2, 8px);
            background: var(--color-neutral-0, #ffffff);
            border: 1px solid var(--color-border-default, #e5e7eb);
            border-radius: var(--size-radius-md, 8px);
            transition:
                border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                box-shadow var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease);
        }

        .control:focus-within {
            border-color: var(--color-brand-primary, #2563eb);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .control.invalid {
            border-color: var(--color-status-error-solid, #dc2626);
        }

        .control.invalid:focus-within {
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }

        ::slotted([slot='prefix']),
        ::slotted([slot='suffix']) {
            display: inline-flex;
            align-items: center;
            color: var(--color-text-muted, #6b7280);
            flex: none;
        }

        ::slotted([slot='prefix']) {
            padding-left: var(--size-spacing-3, 12px);
        }
        ::slotted([slot='suffix']) {
            padding-right: var(--size-spacing-3, 12px);
        }

        input {
            flex: 1 1 auto;
            min-width: 0;
            background: transparent;
            border: none;
            outline: none;
            font: inherit;
            color: inherit;
            padding: var(--size-spacing-2, 8px) var(--size-spacing-3, 12px);
        }

        input::placeholder {
            color: var(--color-text-muted, #6b7280);
            opacity: 1;
        }

        input:disabled,
        input:read-only {
            cursor: not-allowed;
        }

        /* Sizes — fall back to medium when no [size] attribute is set */
        :host(:not([size])) input,
        :host([size='md']) input {
            font-size: var(--font-size-base, 16px);
            min-height: 40px;
        }
        :host([size='sm']) input {
            font-size: var(--font-size-sm, 14px);
            min-height: 32px;
            padding: var(--size-spacing-1, 4px) var(--size-spacing-3, 12px);
        }
        :host([size='lg']) input {
            font-size: var(--font-size-lg, 18px);
            min-height: 48px;
            padding: var(--size-spacing-3, 12px) var(--size-spacing-4, 16px);
        }

        .hint,
        .error {
            margin: var(--size-spacing-2, 8px) 0 0;
            font-size: var(--font-size-sm, 14px);
            line-height: var(--font-line-height-tight, 1.2);
        }

        .hint {
            color: var(--color-text-muted, #6b7280);
        }

        .error {
            color: var(--color-status-error-solid, #dc2626);
        }

        @media (prefers-reduced-motion: reduce) {
            .control {
                transition: none;
            }
        }
    `,on.formAssociated=!0,on);qe([W({reflect:!0})],Le.prototype,"size",void 0);qe([W()],Le.prototype,"type",void 0);qe([W()],Le.prototype,"value",void 0);qe([W()],Le.prototype,"name",void 0);qe([W()],Le.prototype,"label",void 0);qe([W()],Le.prototype,"placeholder",void 0);qe([W()],Le.prototype,"hint",void 0);qe([W()],Le.prototype,"error",void 0);qe([W({type:Boolean,reflect:!0})],Le.prototype,"disabled",void 0);qe([W({type:Boolean,reflect:!0})],Le.prototype,"readonly",void 0);qe([W({type:Boolean,reflect:!0})],Le.prototype,"required",void 0);Le=qe([Et("mfp-input")],Le);var We=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},Dn;let Ts=(Dn=class extends zt{constructor(){super(...arguments),this.sticky=!1,this.variant="default",this._onSlotChange=()=>this._syncOrientation()}_syncOrientation(){for(const t of this._items)t.orientation="horizontal"}firstUpdated(){this._syncOrientation()}render(){return Pn`
            <nav class="bar" aria-label="Main">
                <div class="brand"><slot name="brand"></slot></div>
                <div class="nav" role="navigation">
                    <slot @slotchange=${this._onSlotChange}></slot>
                </div>
                <div class="actions"><slot name="actions"></slot></div>
            </nav>
        `}},Dn.styles=Sr`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            /*
             * Surface tokens — these cascade into <mfp-nav-item>'s shadow DOM
             * via CSS custom properties (which DO pierce shadow boundaries),
             * so changing them here re-skins active/hover/text states on
             * every item without the item needing to know what surface it's
             * sitting on.
             */
            background: var(--color-background-default, #ffffff);
            color: var(--color-text-default, #111827);
            border-bottom: 1px solid var(--color-border-default, #e5e7eb);
            --mfp-nav-item-fg: var(--color-text-muted, #6b7280);
            --mfp-nav-item-fg-strong: var(--color-text-default, #111827);
            --mfp-nav-item-hover-bg: var(--color-background-subtle, #f9fafb);
            --mfp-nav-item-active-bg: var(--color-brand-primary-subtle, #eff6ff);
            --mfp-nav-item-active-fg: var(--color-brand-primary-emphasis, #1e40af);
        }

        :host([variant='brand']) {
            background: var(--color-brand-primary, #2563eb);
            color: var(--color-brand-primary-fg, #ffffff);
            border-bottom-color: var(--color-brand-primary-emphasis, #1e40af);
            --mfp-nav-item-fg: rgba(255, 255, 255, 0.78);
            --mfp-nav-item-fg-strong: var(--color-brand-primary-fg, #ffffff);
            --mfp-nav-item-hover-bg: rgba(255, 255, 255, 0.12);
            --mfp-nav-item-active-bg: rgba(255, 255, 255, 0.2);
            --mfp-nav-item-active-fg: var(--color-brand-primary-fg, #ffffff);
        }

        :host([sticky]) {
            position: sticky;
            top: 0;
            z-index: var(--z-sticky, 200);
        }

        .bar {
            display: flex;
            align-items: center;
            gap: var(--size-spacing-4, 16px);
            padding: var(--size-spacing-3, 12px) var(--size-spacing-5, 20px);
            min-height: 56px;
        }

        .brand {
            display: flex;
            align-items: center;
            min-width: 0;
        }

        .nav {
            display: flex;
            align-items: center;
            gap: var(--size-spacing-1, 4px);
            flex: 1 1 auto;
            min-width: 0;
            overflow-x: auto;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: var(--size-spacing-2, 8px);
        }

        ::slotted([slot='brand']) {
            font-size: var(--font-size-lg, 18px);
            color: inherit;
            text-decoration: none;
        }
    `,Dn);We([Ut({type:Boolean,reflect:!0})],Ts.prototype,"sticky",void 0);We([Ut({reflect:!0})],Ts.prototype,"variant",void 0);We([Cc({selector:"mfp-nav-item"})],Ts.prototype,"_items",void 0);Ts=We([Rr("mfp-nav-bar")],Ts);var zn;let cr=(zn=class extends zt{constructor(){super(...arguments),this.variant="default",this._onItemsSlotChange=()=>this._syncOrientation(),this._onNamedSlotChange=t=>{const n=t.target,s=n.parentElement;if(!s)return;const r=n.assignedNodes({flatten:!0}).length>0;s.toggleAttribute("data-empty",!r)}}_syncOrientation(){for(const t of this._items)t.orientation="vertical"}firstUpdated(){this._syncOrientation()}render(){return Pn`
            <div class="header" part="header" data-empty>
                <slot name="header" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
            <nav class="items" aria-label="Side navigation">
                <slot @slotchange=${this._onItemsSlotChange}></slot>
            </nav>
            <div class="footer" part="footer" data-empty>
                <slot name="footer" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
        `}},zn.styles=Sr`
        :host {
            display: flex;
            flex-direction: column;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            background: var(--color-background-default, #ffffff);
            border-right: 1px solid var(--color-border-default, #e5e7eb);
            color: var(--color-text-default, #111827);
            width: 240px;
            min-height: 100%;
            --mfp-nav-item-fg: var(--color-text-muted, #6b7280);
            --mfp-nav-item-fg-strong: var(--color-text-default, #111827);
            --mfp-nav-item-hover-bg: var(--color-background-subtle, #f9fafb);
            --mfp-nav-item-active-bg: var(--color-brand-primary-subtle, #eff6ff);
            --mfp-nav-item-active-fg: var(--color-brand-primary-emphasis, #1e40af);
        }

        :host([variant='brand']) {
            background: var(--color-brand-primary, #2563eb);
            color: var(--color-brand-primary-fg, #ffffff);
            border-right-color: var(--color-brand-primary-emphasis, #1e40af);
            --mfp-nav-item-fg: rgba(255, 255, 255, 0.78);
            --mfp-nav-item-fg-strong: var(--color-brand-primary-fg, #ffffff);
            --mfp-nav-item-hover-bg: rgba(255, 255, 255, 0.12);
            --mfp-nav-item-active-bg: rgba(255, 255, 255, 0.2);
            --mfp-nav-item-active-fg: var(--color-brand-primary-fg, #ffffff);
        }

        .header,
        .footer {
            padding: var(--size-spacing-4, 16px);
        }

        .header {
            border-bottom: 1px solid var(--color-border-default, #e5e7eb);
        }

        .items {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            gap: var(--size-spacing-1, 4px);
            padding: var(--size-spacing-3, 12px) var(--size-spacing-2, 8px);
            overflow-y: auto;
        }

        .footer {
            border-top: 1px solid var(--color-border-default, #e5e7eb);
            font-size: var(--font-size-sm, 14px);
            color: var(--color-text-muted, #6b7280);
        }

        /* Auto-hide empty header/footer slots */
        .header[data-empty],
        .footer[data-empty] {
            display: none;
        }
    `,zn);We([Ut({reflect:!0})],cr.prototype,"variant",void 0);We([Cc({selector:"mfp-nav-item"})],cr.prototype,"_items",void 0);cr=We([Rr("mfp-side-nav")],cr);var Ln;let Wn=(Ln=class extends zt{constructor(){super(...arguments),this.href="",this.active=!1,this.disabled=!1,this.orientation="horizontal",this._onClick=t=>{this.disabled&&(t.preventDefault(),t.stopPropagation())}}render(){const t=Pn`
            <slot name="icon"></slot>
            <span class="label"><slot></slot></span>
        `;return this.href?Pn`
                <a
                    part="link"
                    href=${this.href}
                    aria-current=${this.active?"page":me}
                    aria-disabled=${this.disabled?"true":me}
                    @click=${this._onClick}
                >
                    ${t}
                </a>
            `:Pn`
            <button
                type="button"
                part="link"
                ?disabled=${this.disabled}
                aria-current=${this.active?"page":me}
            >
                ${t}
            </button>
        `}},Ln.styles=Sr`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            font-size: var(--font-size-sm, 14px);
            font-weight: var(--font-weight-medium, 500);
            /*
             * Surface tokens — set by the parent nav (mfp-nav-bar / mfp-side-nav)
             * via CSS custom properties that cascade into this shadow DOM.
             * Defaults here are what a standalone (no parent) item would use.
             */
            color: var(--mfp-nav-item-fg, var(--color-text-muted, #6b7280));
        }

        a,
        button {
            display: inline-flex;
            align-items: center;
            gap: var(--size-spacing-2, 8px);
            padding: var(--size-spacing-2, 8px) var(--size-spacing-3, 12px);
            border-radius: var(--size-radius-md, 8px);
            color: inherit;
            background: none;
            border: none;
            font: inherit;
            text-decoration: none;
            cursor: pointer;
            white-space: nowrap;
            transition:
                background var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease);
        }

        /* Vertical (side nav) takes full row width */
        :host([orientation='vertical']) a,
        :host([orientation='vertical']) button {
            display: flex;
            width: 100%;
            justify-content: flex-start;
        }

        a:hover:not([aria-disabled]),
        button:hover:not(:disabled) {
            background: var(--mfp-nav-item-hover-bg, var(--color-background-subtle, #f9fafb));
            color: var(--mfp-nav-item-fg-strong, var(--color-text-default, #111827));
        }

        a:focus-visible,
        button:focus-visible {
            outline: 2px solid var(--color-brand-primary, #2563eb);
            outline-offset: 2px;
        }

        :host([active]) a,
        :host([active]) button {
            background: var(--mfp-nav-item-active-bg, var(--color-brand-primary-subtle, #eff6ff));
            color: var(--mfp-nav-item-active-fg, var(--color-brand-primary-emphasis, #1e40af));
            font-weight: var(--font-weight-semibold, 600);
        }

        :host([disabled]) a,
        :host([disabled]) button {
            opacity: 0.5;
            cursor: not-allowed;
            pointer-events: none;
        }

        ::slotted([slot='icon']) {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.2em;
            height: 1.2em;
            flex: none;
            line-height: 1;
        }

        @media (prefers-reduced-motion: reduce) {
            a,
            button {
                transition: none;
            }
        }
    `,Ln);We([Ut()],Wn.prototype,"href",void 0);We([Ut({type:Boolean,reflect:!0})],Wn.prototype,"active",void 0);We([Ut({type:Boolean,reflect:!0})],Wn.prototype,"disabled",void 0);We([Ut({reflect:!0})],Wn.prototype,"orientation",void 0);Wn=We([Rr("mfp-nav-item")],Wn);var Xe=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let $h=0;var an;let Ve=(an=class extends ze{constructor(){super(),this.size="md",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.required=!1,this._id=`mfp-select-${++$h}`,this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onSlotChange=t=>{const n=t.target,s=this._selectEl;if(!s)return;const r=this.value;s.querySelectorAll("[data-mfp-cloned]").forEach(o=>o.remove());const i=n.assignedNodes({flatten:!0}).filter(o=>o.nodeType===Node.ELEMENT_NODE&&(o.tagName==="OPTION"||o.tagName==="OPTGROUP"));for(const o of i){const a=o.cloneNode(!0);a.setAttribute("data-mfp-cloned",""),s.appendChild(a)}s.value=r},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please select an option."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,s=`${n}-hint`,r=`${n}-error`,i=t?r:this.hint?s:void 0;return be`
            ${this.label?be`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?be`<span class="required" aria-hidden="true">*</span>`:ae}
                  </label>`:ae}
            <div part="control" class="control ${t?"invalid":""}">
                <select
                    id=${n}
                    part="select"
                    .value=${this.value}
                    name=${this.name}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    aria-invalid=${t?"true":"false"}
                    aria-describedby=${i??ae}
                    @change=${this._onChange}
                >
                    ${this.placeholder?be`<option value="" disabled selected hidden data-mfp-placeholder>
                              ${this.placeholder}
                          </option>`:ae}
                </select>
                <svg
                    class="chevron"
                    part="chevron"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <div class="options-source">
                <slot @slotchange=${this._onSlotChange}></slot>
            </div>
            ${t?be`<p part="error" id=${r} class="error" role="alert">${this.error}</p>`:this.hint?be`<p part="hint" id=${s} class="hint">${this.hint}</p>`:ae}
        `}},an.styles=At`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            color: var(--color-text-default, #111827);
        }

        :host([disabled]) {
            opacity: 0.6;
        }

        label {
            display: block;
            font-size: var(--font-size-sm, 14px);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            margin-bottom: var(--size-spacing-2, 8px);
        }

        .required {
            color: var(--color-status-error-solid, #dc2626);
            margin-left: var(--size-spacing-1, 4px);
        }

        .control {
            position: relative;
            display: flex;
            align-items: center;
            background: var(--color-neutral-0, #ffffff);
            border: 1px solid var(--color-border-default, #e5e7eb);
            border-radius: var(--size-radius-md, 8px);
            transition:
                border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                box-shadow var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease);
        }

        .control:focus-within {
            border-color: var(--color-brand-primary, #2563eb);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .control.invalid {
            border-color: var(--color-status-error-solid, #dc2626);
        }

        .control.invalid:focus-within {
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }

        select {
            flex: 1 1 auto;
            min-width: 0;
            appearance: none;
            -webkit-appearance: none;
            background: transparent;
            border: none;
            outline: none;
            font: inherit;
            color: inherit;
            cursor: pointer;
            padding: var(--size-spacing-2, 8px) var(--size-spacing-9, 36px)
                var(--size-spacing-2, 8px) var(--size-spacing-3, 12px);
        }

        select:disabled {
            cursor: not-allowed;
        }

        .chevron {
            position: absolute;
            right: var(--size-spacing-3, 12px);
            top: 50%;
            transform: translateY(-50%);
            width: 1em;
            height: 1em;
            color: var(--color-text-muted, #6b7280);
            pointer-events: none;
        }

        /* Sizes — fall back to medium when no [size] attribute is set */
        :host(:not([size])) select,
        :host([size='md']) select {
            font-size: var(--font-size-base, 16px);
            min-height: 40px;
        }
        :host([size='sm']) select {
            font-size: var(--font-size-sm, 14px);
            min-height: 32px;
            padding: var(--size-spacing-1, 4px) var(--size-spacing-9, 36px)
                var(--size-spacing-1, 4px) var(--size-spacing-3, 12px);
        }
        :host([size='lg']) select {
            font-size: var(--font-size-lg, 18px);
            min-height: 48px;
            padding: var(--size-spacing-3, 12px) var(--size-spacing-10, 40px)
                var(--size-spacing-3, 12px) var(--size-spacing-4, 16px);
        }

        .hint,
        .error {
            margin: var(--size-spacing-2, 8px) 0 0;
            font-size: var(--font-size-sm, 14px);
            line-height: var(--font-line-height-tight, 1.2);
        }

        .hint {
            color: var(--color-text-muted, #6b7280);
        }

        .error {
            color: var(--color-status-error-solid, #dc2626);
        }

        /* Hide the slot — its children get moved into the native select */
        .options-source {
            display: none;
        }

        @media (prefers-reduced-motion: reduce) {
            .control {
                transition: none;
            }
        }
    `,an.formAssociated=!0,an);Xe([W({reflect:!0})],Ve.prototype,"size",void 0);Xe([W()],Ve.prototype,"value",void 0);Xe([W()],Ve.prototype,"name",void 0);Xe([W()],Ve.prototype,"label",void 0);Xe([W()],Ve.prototype,"placeholder",void 0);Xe([W()],Ve.prototype,"hint",void 0);Xe([W()],Ve.prototype,"error",void 0);Xe([W({type:Boolean,reflect:!0})],Ve.prototype,"disabled",void 0);Xe([W({type:Boolean,reflect:!0})],Ve.prototype,"required",void 0);Xe([Zd("select")],Ve.prototype,"_selectEl",void 0);Ve=Xe([Et("mfp-select")],Ve);var ro=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},Hn;let ur=(Hn=class extends ze{constructor(){super(...arguments),this.size="md",this.label="Loading"}render(){return be`<div class="ring" role="status" aria-label=${this.label}></div>`}},Hn.styles=At`
        :host {
            display: inline-block;
            color: var(--color-brand-primary, #2563eb);
        }

        .ring {
            width: 1em;
            height: 1em;
            border: 0.15em solid currentColor;
            border-top-color: transparent;
            border-radius: 50%;
            animation: mfp-spinner-spin 0.7s linear infinite;
        }

        :host(:not([size])),
        :host([size='md']) {
            font-size: 24px;
        }
        :host([size='sm']) {
            font-size: 16px;
        }
        :host([size='lg']) {
            font-size: 32px;
        }
        :host([size='xl']) {
            font-size: 48px;
        }

        @keyframes mfp-spinner-spin {
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .ring {
                animation-duration: 2s;
            }
        }
    `,Hn);ro([W({reflect:!0})],ur.prototype,"size",void 0);ro([W()],ur.prototype,"label",void 0);ur=ro([Et("mfp-spinner")],ur);const Ah=`/*
 * Blue theme — the design system default, made explicit.
 * Equivalent to loading no theme file at all, but useful if you want to
 * be explicit about which theme an app uses.
 */
:root {
    --color-brand-primary: #2563eb;
    --color-brand-primary-hover: #1d4ed8;
    --color-brand-primary-fg: #ffffff;
    --color-brand-primary-subtle: #eff6ff;
    --color-brand-primary-emphasis: #1e40af;
}
`,Eh=`/*
 * Warm theme — earthy cream/brown/gold palette.
 * Designed for fourseasonsstudio (warm artisan/gallery aesthetic).
 *
 * Overrides both brand colors AND the neutral semantic layer so the
 * whole UI reads as warm. Apps that only want a warm accent (without
 * shifting backgrounds and text) can copy just the --color-brand-* block.
 */
:root {
    /* Brand: terracotta accent */
    --color-brand-primary: #c4622a;
    --color-brand-primary-hover: #a3501f;
    --color-brand-primary-fg: #fcfaf7;
    --color-brand-primary-subtle: #f5e6d8;
    --color-brand-primary-emphasis: #8b6914;

    /* Warm neutral palette */
    --color-text-default: #2c2416;
    --color-text-muted: #6b5d4f;
    --color-text-inverse: #fcfaf7;
    --color-text-brand: #8b6914;

    --color-background-default: #fcfaf7;
    --color-background-subtle: #f5f0e8;
    --color-background-muted: #e4d8c4;

    --color-border-default: #e4d8c4;
    --color-border-strong: #a89470;
}
`,wh=`/*
 * Orange theme — Tailwind orange-500 palette.
 * Designed for garage-sales (matches its existing Tailwind theme).
 *
 * Keeps the design system's default neutral grays — only brand is themed.
 */
:root {
    --color-brand-primary: #f97316;
    --color-brand-primary-hover: #ea580c;
    --color-brand-primary-fg: #ffffff;
    --color-brand-primary-subtle: #fff7ed;
    --color-brand-primary-emphasis: #c2410c;
}
`,Sh=`/*
 * Earth theme — warm-neutral palette with a blue accent.
 * Designed for lessonforge (educational, approachable, slightly warm).
 *
 * Keeps the default blue brand for the accent so it feels familiar,
 * but shifts text/background/border to warm tones for a softer feel.
 */
:root {
    /* Brand stays blue — same as default — but explicitly listed */
    --color-brand-primary: #2563eb;
    --color-brand-primary-hover: #1d4ed8;
    --color-brand-primary-fg: #ffffff;
    --color-brand-primary-subtle: #eff6ff;
    --color-brand-primary-emphasis: #1e40af;

    /* Warm-neutral palette */
    --color-text-default: #1f2937;
    --color-text-muted: #6b6963;
    --color-text-inverse: #fafaf7;

    --color-background-default: #fafaf7;
    --color-background-subtle: #f4f3ef;
    --color-background-muted: #e5e3df;

    --color-border-default: #e5e3df;
    --color-border-strong: #cbd5e1;
}
`,Ch=`/*
 * Portfolio theme — navy primary on default neutrals.
 * Designed for melissapula.github.io (personal portfolio).
 *
 * The audit found #1a2744 as the dominant brand color across the portfolio.
 */
:root {
    --color-brand-primary: #1a2744;
    --color-brand-primary-hover: #2c4068;
    --color-brand-primary-fg: #ffffff;
    --color-brand-primary-subtle: #eef1f7;
    --color-brand-primary-emphasis: #0f1729;
}
`,Pc="mfp-theme",ba="mfp-active-theme",fr={blue:{label:"Blue (default)",css:Ah},warm:{label:"Warm",css:Eh},orange:{label:"Orange",css:wh},earth:{label:"Earth",css:Sh},portfolio:{label:"Portfolio (navy)",css:Ch}},Rh="portfolio";function Oc(){const e=localStorage.getItem(Pc);return e&&e in fr?e:Rh}function Tc(e){if(!(e in fr))return;let t=document.getElementById(ba);t||(t=document.createElement("style"),t.id=ba,document.head.appendChild(t)),t.textContent=fr[e].css,localStorage.setItem(Pc,e)}function Ph(){Tc(Oc())}const Nc=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Oh={name:"App",data(){return{currentYear:new Date().getFullYear(),themes:fr,activeTheme:Oc(),navLinks:[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/resume",label:"Resume"},{to:"/portfolio",label:"Projects"},{to:"/python",label:"Python"},{to:"/data",label:"Data Analysis"}]}},methods:{go(e){this.$route.path!==e&&this.$router.push(e)},onThemeChange(e){var n;const t=(n=e.detail)==null?void 0:n.value;t&&(Tc(t),this.activeTheme=t)}}},Th={class:"h-100 m-0 p-0"},Nh={sticky:"",variant:"brand"},Ih=["active","onClick"],kh={slot:"actions",class:"navbar-actions"},Mh=["active"],Dh=["value"],zh=["value"],Lh={class:"site-footer"},Hh={class:"container-fluid d-flex flex-wrap justify-content-between align-items-center px-4"},Bh={class:"footer-copy"};function Uh(e,t,n,s,r,i){const o=ci("router-link"),a=ci("router-view");return ot(),yn("div",Th,[he("mfp-nav-bar",Nh,[ge(o,{slot:"brand",to:"/",class:"brand-link"},{default:vt(()=>[...t[2]||(t[2]=[ic("Melissa Freundschuh-Pula",-1)])]),_:1}),(ot(!0),yn(Me,null,$o(r.navLinks,l=>(ot(),yn("mfp-nav-item",{key:l.to,active:e.$route.path===l.to,onClick:f=>i.go(l.to)},Bs(l.label),9,Ih))),128)),he("div",kh,[he("mfp-nav-item",{active:e.$route.path==="/contact",onClick:t[0]||(t[0]=l=>i.go("/contact"))},"Contact",8,Mh),he("mfp-select",{class:"theme-switcher",size:"sm","aria-label":"Theme",value:r.activeTheme,onChange:t[1]||(t[1]=(...l)=>i.onThemeChange&&i.onThemeChange(...l))},[(ot(!0),yn(Me,null,$o(r.themes,(l,f)=>(ot(),yn("option",{key:f,value:f},Bs(l.label),9,zh))),128))],40,Dh)])]),ge(a,null,{default:vt(({Component:l})=>[ge(rd,{name:"fade",mode:"out-in"},{default:vt(()=>[(ot(),mi(Nf,null,{fallback:vt(()=>[...t[3]||(t[3]=[he("div",{class:"route-loading"},[he("mfp-spinner",{size:"lg",label:"Loading page"})],-1)])]),default:vt(()=>[(ot(),mi(rf(l)))]),_:2},1024))]),_:2},1024)]),_:1}),he("footer",Lh,[he("div",Hh,[he("span",Bh,"© "+Bs(r.currentYear)+" Melissa Freundschuh-Pula",1),t[4]||(t[4]=Uf('<div class="footer-links"><a href="https://github.com/melissapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a><a href="mailto:melissa_m_24@yahoo.com" aria-label="Email"><i class="fas fa-envelope"></i></a></div>',1))])])])}const jh=Nc(Oh,[["render",Uh]]),Fh="modulepreload",Vh=function(e){return"/"+e},ya={},Jt=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=Vh(l),l in ya)return;ya[l]=!0;const f=l.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":Fh,f||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),f)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const $n=typeof document<"u";function Ic(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ic(e.default)}const ne=Object.assign;function Zr(e,t){const n={};for(const s in t){const r=t[s];n[s]=Qe(r)?r.map(e):e(r)}return n}const gs=()=>{},Qe=Array.isArray;function _a(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const kc=/#/g,Wh=/&/g,Gh=/\//g,Kh=/=/g,Jh=/\?/g,Mc=/\+/g,Yh=/%5B/g,Zh=/%5D/g,Dc=/%5E/g,Qh=/%60/g,zc=/%7B/g,Xh=/%7C/g,Lc=/%7D/g,ep=/%20/g;function io(e){return e==null?"":encodeURI(""+e).replace(Xh,"|").replace(Yh,"[").replace(Zh,"]")}function tp(e){return io(e).replace(zc,"{").replace(Lc,"}").replace(Dc,"^")}function $i(e){return io(e).replace(Mc,"%2B").replace(ep,"+").replace(kc,"%23").replace(Wh,"%26").replace(Qh,"`").replace(zc,"{").replace(Lc,"}").replace(Dc,"^")}function np(e){return $i(e).replace(Kh,"%3D")}function sp(e){return io(e).replace(kc,"%23").replace(Jh,"%3F")}function rp(e){return sp(e).replace(Gh,"%2F")}function Ns(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ip=/\/$/,op=e=>e.replace(ip,"");function Qr(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=t.slice(0,l),i=t.slice(l,a>0?a:t.length),r=e(i.slice(1))),a>=0&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=up(s??t,n),{fullPath:s+i+o,path:s,query:r,hash:Ns(o)}}function ap(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function xa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lp(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Gn(t.matched[s],n.matched[r])&&Hc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!cp(e[n],t[n]))return!1;return!0}function cp(e,t){return Qe(e)?$a(e,t):Qe(t)?$a(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function $a(e,t){return Qe(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function up(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ai=function(e){return e.pop="pop",e.push="push",e}({}),Xr=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function fp(e){if(!e)if($n){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),op(e)}const dp=/^[^#]+#/;function hp(e,t){return e.replace(dp,"#")+t}function pp(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Pr=()=>({left:window.scrollX,top:window.scrollY});function mp(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=pp(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Aa(e,t){return(history.state?history.state.position-t:-1)+e}const Ei=new Map;function gp(e,t){Ei.set(e,t)}function vp(e){const t=Ei.get(e);return Ei.delete(e),t}function bp(e){return typeof e=="string"||e&&typeof e=="object"}function Bc(e){return typeof e=="string"||typeof e=="symbol"}let de=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Uc=Symbol("");de.MATCHER_NOT_FOUND+"",de.NAVIGATION_GUARD_REDIRECT+"",de.NAVIGATION_ABORTED+"",de.NAVIGATION_CANCELLED+"",de.NAVIGATION_DUPLICATED+"";function Kn(e,t){return ne(new Error,{type:e,[Uc]:!0},t)}function dt(e,t){return e instanceof Error&&Uc in e&&(t==null||!!(e.type&t))}const yp=["params","query","hash"];function _p(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of yp)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function xp(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Mc," "),i=r.indexOf("="),o=Ns(i<0?r:r.slice(0,i)),a=i<0?null:Ns(r.slice(i+1));if(o in t){let l=t[o];Qe(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function Ea(e){let t="";for(let n in e){const s=e[n];if(n=np(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(s)?s.map(r=>r&&$i(r)):[s&&$i(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function $p(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Qe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const Ap=Symbol(""),wa=Symbol(""),oo=Symbol(""),jc=Symbol(""),wi=Symbol("");function ss(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const f=p=>{p===!1?l(Kn(de.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?l(p):bp(p)?l(Kn(de.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>e.call(s&&s.instances[r],t,n,f));let c=Promise.resolve(u);e.length<3&&(c=c.then(f)),c.catch(p=>l(p))})}function ei(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Ic(l)){const f=(l.__vccOpts||l)[t];f&&i.push(Tt(f,n,s,o,a,r))}else{let f=l();i.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const c=qh(u)?u.default:u;o.mods[a]=u,o.components[a]=c;const p=(c.__vccOpts||c)[t];return p&&Tt(p,n,s,o,a,r)()}))}}return i}function Ep(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(f=>Gn(f,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(f=>Gn(f,l))||r.push(l))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let wp=()=>location.protocol+"//"+location.host;function Fc(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),xa(a,"")}return xa(n,e)+s+r}function Sp(e,t,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const m=Fc(e,location),x=n.value,w=t.value;let U=0;if(p){if(n.value=m,t.value=p,o&&o===x){o=null;return}U=w?p.position-w.position:0}else s(m);r.forEach(N=>{N(n.value,x,{delta:U,type:Ai.pop,direction:U?U>0?Xr.forward:Xr.back:Xr.unknown})})};function l(){o=n.value}function f(p){r.push(p);const m=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ne({},p.state,{scroll:Pr()}),"")}}function c(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:f,destroy:c}}function Sa(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Pr():null}}function Cp(e){const{history:t,location:n}=window,s={value:Fc(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,u){const c=e.indexOf("#"),p=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+l:wp()+e+l;try{t[u?"replaceState":"pushState"](f,"",p),r.value=f}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(l,f){i(l,ne({},t.state,Sa(r.value.back,l,r.value.forward,!0),f,{position:r.value.position}),!0),s.value=l}function a(l,f){const u=ne({},r.value,t.state,{forward:l,scroll:Pr()});i(u.current,u,!0),i(l,ne({},Sa(s.value,l,null),{position:u.position+1},f),!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Rp(e){e=fp(e);const t=Cp(e),n=Sp(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ne({location:"",base:e,go:s,createHref:hp.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Pp(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Rp(e)}let Xt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var ve=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(ve||{});const Op={type:Xt.Static,value:""},Tp=/[a-zA-Z0-9_]/;function Np(e){if(!e)return[[]];if(e==="/")return[[Op]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=ve.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,f="",u="";function c(){f&&(n===ve.Static?i.push({type:Xt.Static,value:f}):n===ve.Param||n===ve.ParamRegExp||n===ve.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Xt.Param,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==ve.ParamRegExp){s=n,n=ve.EscapeNext;continue}switch(n){case ve.Static:l==="/"?(f&&c(),o()):l===":"?(c(),n=ve.Param):p();break;case ve.EscapeNext:p(),n=s;break;case ve.Param:l==="("?n=ve.ParamRegExp:Tp.test(l)?p():(c(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ve.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=ve.ParamRegExpEnd:u+=l;break;case ve.ParamRegExpEnd:c(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),c(),o(),r}const Ca="[^/]+?",Ip={sensitive:!1,strict:!1,start:!0,end:!0};var Se=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Se||{});const kp=/[.+*?^${}()[\]/\\]/g;function Mp(e,t){const n=ne({},Ip,t),s=[];let r=n.start?"^":"";const i=[];for(const f of e){const u=f.length?[]:[Se.Root];n.strict&&!f.length&&(r+="/");for(let c=0;c<f.length;c++){const p=f[c];let m=Se.Segment+(n.sensitive?Se.BonusCaseSensitive:0);if(p.type===Xt.Static)c||(r+="/"),r+=p.value.replace(kp,"\\$&"),m+=Se.Static;else if(p.type===Xt.Param){const{value:x,repeatable:w,optional:U,regexp:N}=p;i.push({name:x,repeatable:w,optional:U});const P=N||Ca;if(P!==Ca){m+=Se.BonusCustomRegExp;try{`${P}`}catch(I){throw new Error(`Invalid custom RegExp for param "${x}" (${P}): `+I.message)}}let M=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;c||(M=U&&f.length<2?`(?:/${M})`:"/"+M),U&&(M+="?"),r+=M,m+=Se.Dynamic,U&&(m+=Se.BonusOptional),w&&(m+=Se.BonusRepeatable),P===".*"&&(m+=Se.BonusWildcard)}u.push(m)}s.push(u)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=Se.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(f){const u=f.match(o),c={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",x=i[p-1];c[x.name]=m&&x.repeatable?m.split("/"):m}return c}function l(f){let u="",c=!1;for(const p of e){(!c||!u.endsWith("/"))&&(u+="/"),c=!1;for(const m of p)if(m.type===Xt.Static)u+=m.value;else if(m.type===Xt.Param){const{value:x,repeatable:w,optional:U}=m,N=x in f?f[x]:"";if(Qe(N)&&!w)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const P=Qe(N)?N.join("/"):N;if(!P)if(U)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):c=!0);else throw new Error(`Missing required param "${x}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Dp(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Se.Static+Se.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Se.Static+Se.Segment?1:-1:0}function Vc(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Dp(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ra(s))return 1;if(Ra(r))return-1}return r.length-s.length}function Ra(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const zp={strict:!1,end:!0,sensitive:!1};function Lp(e,t,n){const s=Mp(Np(e.path),n),r=ne(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Hp(e,t){const n=[],s=new Map;t=_a(zp,t);function r(c){return s.get(c)}function i(c,p,m){const x=!m,w=Oa(c);w.aliasOf=m&&m.record;const U=_a(t,c),N=[w];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const O of I)N.push(Oa(ne({},w,{components:m?m.record.components:w.components,path:O,aliasOf:m?m.record:w})))}let P,M;for(const I of N){const{path:O}=I;if(p&&O[0]!=="/"){const z=p.record.path,G=z[z.length-1]==="/"?"":"/";I.path=p.record.path+(O&&G+O)}if(P=Lp(I,p,U),m?m.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),x&&c.name&&!Ta(P)&&o(c.name)),qc(P)&&l(P),w.children){const z=w.children;for(let G=0;G<z.length;G++)i(z[G],P,m&&m.children[G])}m=m||P}return M?()=>{o(M)}:gs}function o(c){if(Bc(c)){const p=s.get(c);p&&(s.delete(c),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(c);p>-1&&(n.splice(p,1),c.record.name&&s.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){const p=jp(c,n);n.splice(p,0,c),c.record.name&&!Ta(c)&&s.set(c.record.name,c)}function f(c,p){let m,x={},w,U;if("name"in c&&c.name){if(m=s.get(c.name),!m)throw Kn(de.MATCHER_NOT_FOUND,{location:c});U=m.record.name,x=ne(Pa(p.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),c.params&&Pa(c.params,m.keys.map(M=>M.name))),w=m.stringify(x)}else if(c.path!=null)w=c.path,m=n.find(M=>M.re.test(w)),m&&(x=m.parse(w),U=m.record.name);else{if(m=p.name?s.get(p.name):n.find(M=>M.re.test(p.path)),!m)throw Kn(de.MATCHER_NOT_FOUND,{location:c,currentLocation:p});U=m.record.name,x=ne({},p.params,c.params),w=m.stringify(x)}const N=[];let P=m;for(;P;)N.unshift(P.record),P=P.parent;return{name:U,path:w,params:x,matched:N,meta:Up(N)}}e.forEach(c=>i(c));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:f,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Pa(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Oa(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Bp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Bp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Ta(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Up(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function jp(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;Vc(e,t[i])<0?s=i:n=i+1}const r=Fp(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function Fp(e){let t=e;for(;t=t.parent;)if(qc(t)&&Vc(e,t)===0)return t}function qc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Na(e){const t=bt(oo),n=bt(jc),s=Ke(()=>{const l=wn(e.to);return t.resolve(l)}),r=Ke(()=>{const{matched:l}=s.value,{length:f}=l,u=l[f-1],c=n.matched;if(!u||!c.length)return-1;const p=c.findIndex(Gn.bind(null,u));if(p>-1)return p;const m=Ia(l[f-2]);return f>1&&Ia(u)===m&&c[c.length-1].path!==m?c.findIndex(Gn.bind(null,l[f-2])):p}),i=Ke(()=>r.value>-1&&Kp(n.params,s.value.params)),o=Ke(()=>r.value>-1&&r.value===n.matched.length-1&&Hc(n.params,s.value.params));function a(l={}){if(Gp(l)){const f=t[wn(e.replace)?"replace":"push"](wn(e.to)).catch(gs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:Ke(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function Vp(e){return e.length===1?e[0]:e}const qp=Ol({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Na,setup(e,{slots:t}){const n=br(Na(e)),{options:s}=bt(oo),r=Ke(()=>({[ka(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ka(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Vp(t.default(n));return e.custom?i:Wi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Wp=qp;function Gp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Kp(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Qe(r)||r.length!==s.length||s.some((i,o)=>i.valueOf()!==r[o].valueOf()))return!1}return!0}function Ia(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ka=(e,t,n)=>e??t??n,Jp=Ol({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=bt(wi),r=Ke(()=>e.route||s.value),i=bt(wa,0),o=Ke(()=>{let f=wn(i);const{matched:u}=r.value;let c;for(;(c=u[f])&&!c.components;)f++;return f}),a=Ke(()=>r.value.matched[o.value]);Us(wa,Ke(()=>o.value+1)),Us(Ap,a),Us(wi,r);const l=Tu();return js(()=>[l.value,a.value,e.name],([f,u,c],[p,m,x])=>{u&&(u.instances[c]=f,m&&m!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),f&&u&&(!m||!Gn(u,m)||!p)&&(u.enterCallbacks[c]||[]).forEach(w=>w(f))},{flush:"post"}),()=>{const f=r.value,u=e.name,c=a.value,p=c&&c.components[u];if(!p)return Ma(n.default,{Component:p,route:f});const m=c.props[u],x=m?m===!0?f.params:typeof m=="function"?m(f):m:null,U=Wi(p,ne({},x,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(c.instances[u]=null)},ref:l}));return Ma(n.default,{Component:U,route:f})||U}}});function Ma(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Yp=Jp;function Zp(e){const t=Hp(e.routes,e),n=e.parseQuery||xp,s=e.stringifyQuery||Ea,r=e.history,i=ss(),o=ss(),a=ss(),l=Nu(Ct);let f=Ct;$n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zr.bind(null,y=>""+y),c=Zr.bind(null,rp),p=Zr.bind(null,Ns);function m(y,k){let R,L;return Bc(y)?(R=t.getRecordMatcher(y),L=k):L=y,t.addRoute(L,R)}function x(y){const k=t.getRecordMatcher(y);k&&t.removeRoute(k)}function w(){return t.getRoutes().map(y=>y.record)}function U(y){return!!t.getRecordMatcher(y)}function N(y,k){if(k=ne({},k||l.value),typeof y=="string"){const g=Qr(n,y,k.path),v=t.resolve({path:g.path},k),_=r.createHref(g.fullPath);return ne(g,v,{params:p(v.params),hash:Ns(g.hash),redirectedFrom:void 0,href:_})}let R;if(y.path!=null)R=ne({},y,{path:Qr(n,y.path,k.path).path});else{const g=ne({},y.params);for(const v in g)g[v]==null&&delete g[v];R=ne({},y,{params:c(g)}),k.params=c(k.params)}const L=t.resolve(R,k),Z=y.hash||"";L.params=u(p(L.params));const d=ap(s,ne({},y,{hash:tp(Z),path:L.path})),h=r.createHref(d);return ne({fullPath:d,hash:Z,query:s===Ea?$p(y.query):y.query||{}},L,{redirectedFrom:void 0,href:h})}function P(y){return typeof y=="string"?Qr(n,y,l.value.path):ne({},y)}function M(y,k){if(f!==y)return Kn(de.NAVIGATION_CANCELLED,{from:k,to:y})}function I(y){return G(y)}function O(y){return I(ne(P(y),{replace:!0}))}function z(y,k){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:L}=R;let Z=typeof L=="function"?L(y,k):L;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=P(Z):{path:Z},Z.params={}),ne({query:y.query,hash:y.hash,params:Z.path!=null?{}:y.params},Z)}}function G(y,k){const R=f=N(y),L=l.value,Z=y.state,d=y.force,h=y.replace===!0,g=z(R,L);if(g)return G(ne(P(g),{state:typeof g=="object"?ne({},Z,g.state):Z,force:d,replace:h}),k||R);const v=R;v.redirectedFrom=k;let _;return!d&&lp(s,L,R)&&(_=Kn(de.NAVIGATION_DUPLICATED,{to:v,from:L}),et(L,L,!0,!1)),(_?Promise.resolve(_):V(v,L)).catch(b=>dt(b)?dt(b,de.NAVIGATION_GUARD_REDIRECT)?b:wt(b):X(b,v,L)).then(b=>{if(b){if(dt(b,de.NAVIGATION_GUARD_REDIRECT))return G(ne({replace:h},P(b.to),{state:typeof b.to=="object"?ne({},Z,b.to.state):Z,force:d}),k||v)}else b=S(v,L,!0,h,Z);return J(v,L,b),b})}function te(y,k){const R=M(y,k);return R?Promise.reject(R):Promise.resolve()}function D(y){const k=gn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function V(y,k){let R;const[L,Z,d]=Ep(y,k);R=ei(L.reverse(),"beforeRouteLeave",y,k);for(const g of L)g.leaveGuards.forEach(v=>{R.push(Tt(v,y,k))});const h=te.bind(null,y,k);return R.push(h),Be(R).then(()=>{R=[];for(const g of i.list())R.push(Tt(g,y,k));return R.push(h),Be(R)}).then(()=>{R=ei(Z,"beforeRouteUpdate",y,k);for(const g of Z)g.updateGuards.forEach(v=>{R.push(Tt(v,y,k))});return R.push(h),Be(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(Qe(g.beforeEnter))for(const v of g.beforeEnter)R.push(Tt(v,y,k));else R.push(Tt(g.beforeEnter,y,k));return R.push(h),Be(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=ei(d,"beforeRouteEnter",y,k,D),R.push(h),Be(R))).then(()=>{R=[];for(const g of o.list())R.push(Tt(g,y,k));return R.push(h),Be(R)}).catch(g=>dt(g,de.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function J(y,k,R){a.list().forEach(L=>D(()=>L(y,k,R)))}function S(y,k,R,L,Z){const d=M(y,k);if(d)return d;const h=k===Ct,g=$n?history.state:{};R&&(L||h?r.replace(y.fullPath,ne({scroll:h&&g&&g.scroll},Z)):r.push(y.fullPath,Z)),l.value=y,et(y,k,R,h),wt()}let K;function fe(){K||(K=r.listen((y,k,R)=>{if(!jt.listening)return;const L=N(y),Z=z(L,jt.currentRoute.value);if(Z){G(ne(Z,{replace:!0,force:!0}),L).catch(gs);return}f=L;const d=l.value;$n&&gp(Aa(d.fullPath,R.delta),Pr()),V(L,d).catch(h=>dt(h,de.NAVIGATION_ABORTED|de.NAVIGATION_CANCELLED)?h:dt(h,de.NAVIGATION_GUARD_REDIRECT)?(G(ne(P(h.to),{force:!0}),L).then(g=>{dt(g,de.NAVIGATION_ABORTED|de.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Ai.pop&&r.go(-1,!1)}).catch(gs),Promise.reject()):(R.delta&&r.go(-R.delta,!1),X(h,L,d))).then(h=>{h=h||S(L,d,!1),h&&(R.delta&&!dt(h,de.NAVIGATION_CANCELLED)?r.go(-R.delta,!1):R.type===Ai.pop&&dt(h,de.NAVIGATION_ABORTED|de.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),J(L,d,h)}).catch(gs)}))}let xe=ss(),ie=ss(),Y;function X(y,k,R){wt(y);const L=ie.list();return L.length?L.forEach(Z=>Z(y,k,R)):console.error(y),Promise.reject(y)}function ct(){return Y&&l.value!==Ct?Promise.resolve():new Promise((y,k)=>{xe.add([y,k])})}function wt(y){return Y||(Y=!y,fe(),xe.list().forEach(([k,R])=>y?R(y):k()),xe.reset()),y}function et(y,k,R,L){const{scrollBehavior:Z}=e;if(!$n||!Z)return Promise.resolve();const d=!R&&vp(Aa(y.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return Ys().then(()=>Z(y,k,d)).then(h=>h&&mp(h)).catch(h=>X(h,y,k))}const Re=y=>r.go(y);let mn;const gn=new Set,jt={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:U,getRoutes:w,resolve:N,options:e,push:I,replace:O,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:ct,install(y){y.component("RouterLink",Wp),y.component("RouterView",Yp),y.config.globalProperties.$router=jt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>wn(l)}),$n&&!mn&&l.value===Ct&&(mn=!0,I(r.location).catch(L=>{}));const k={};for(const L in Ct)Object.defineProperty(k,L,{get:()=>l.value[L],enumerable:!0});y.provide(oo,jt),y.provide(jc,pl(k)),y.provide(wi,l);const R=y.unmount;gn.add(y),y.unmount=function(){gn.delete(y),gn.size<1&&(f=Ct,K&&K(),K=null,l.value=Ct,mn=!1,Y=!1),R()}}};function Be(y){return y.reduce((k,R)=>k.then(()=>D(R)),Promise.resolve())}return jt}const Qp="/assets/Family-TJUrK4ZO.jpeg",Xp={name:"Home"},em={class:"container-fluid mt-0 pt-0"},tm={class:"row align-items-center justify-content-center",style:{"min-height":"calc(100vh - 56px)","background-color":"#f8f9fa",overflow:"hidden"}},nm={class:"col-12 col-md-6 col-lg-5 ps-md-5 mt-4 mt-md-0"},sm={class:"mt-4 hero-actions"},rm=["onClick"],im=["onClick"],om=["onClick"];function am(e,t,n,s,r,i){const o=ci("router-link");return ot(),yn("div",em,[he("div",tm,[t[3]||(t[3]=he("div",{class:"col-12 col-md-6 col-lg-5 text-center"},[he("img",{src:Qp,class:"img-fluid rounded shadow",style:{"max-height":"calc(100vh - 120px)","object-fit":"contain"},alt:"Melissa with her wife and four kids"})],-1)),he("div",nm,[t[0]||(t[0]=he("h1",{class:"hero-name",style:{color:"#1a2744"}},"Melissa Freundschuh-Pula",-1)),t[1]||(t[1]=he("h4",{class:"hero-title mt-2",style:{color:"#1a2744"}},"Full-Stack Software Engineer",-1)),t[2]||(t[2]=he("p",{class:"hero-intro mt-3",style:{color:"#2c3e50"}}," Six-plus years building enterprise web apps by day and live products on the side. Wife, mom of four, Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper. ",-1)),he("div",sm,[ge(o,{to:"/portfolio",custom:""},{default:vt(({navigate:a})=>[he("mfp-button",{variant:"primary",onClick:a},"See Projects",8,rm)]),_:1}),ge(o,{to:"/resume",custom:""},{default:vt(({navigate:a})=>[he("mfp-button",{variant:"secondary",onClick:a},"Resume",8,im)]),_:1}),ge(o,{to:"/contact",custom:""},{default:vt(({navigate:a})=>[he("mfp-button",{variant:"secondary",onClick:a},"Get In Touch",8,om)]),_:1})])])])])}const lm=Nc(Xp,[["render",am],["__scopeId","data-v-522c59a5"]]),cm=[{path:"/",name:"Home",component:lm,meta:{title:"Home"}},{path:"/about",name:"About",component:()=>Jt(()=>import("./about-BwtxoCa3.js"),__vite__mapDeps([0,1])),meta:{title:"About"}},{path:"/resume",name:"Resume",component:()=>Jt(()=>import("./resume-ERvLXvnA.js"),__vite__mapDeps([2,3])),meta:{title:"Resume"}},{path:"/portfolio",name:"Portfolio",component:()=>Jt(()=>import("./portfolio-DXRJ9a3k.js"),__vite__mapDeps([4,5])),meta:{title:"Projects"}},{path:"/python",name:"PythonCode",component:()=>Jt(()=>import("./pythonCode-DE30Nmcp.js"),__vite__mapDeps([6,7,8,9])),meta:{title:"Python"}},{path:"/data",name:"DataAnalysis",component:()=>Jt(()=>import("./dataAnalysis-DRhsEjhc.js"),__vite__mapDeps([10,7,8,11])),meta:{title:"Data Analysis"}},{path:"/contact",name:"Contact",component:()=>Jt(()=>import("./contact-Dfd8ICnF.js"),__vite__mapDeps([12,13])),meta:{title:"Contact"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Jt(()=>import("./notFound-WuNYydBN.js"),__vite__mapDeps([14,15])),meta:{title:"Page Not Found"}}],Da="Melissa Freundschuh-Pula",ao=Zp({history:Pp(),routes:cm});ao.afterEach(e=>{var n;const t=(n=e.meta)==null?void 0:n.title;document.title=t?`${t} | ${Da}`:Da});const um=(e,t={})=>new Promise((n,s)=>{if(typeof document>"u")return;const r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");if(i.async=!0,i.src=e,i.defer=t.defer,t.preconnectOrigin){const o=document.createElement("link");o.href=t.preconnectOrigin,o.rel="preconnect",r.appendChild(o)}r.appendChild(i),i.onload=n,i.onerror=s}),Si=e=>typeof e=="function",ti=e=>e&&typeof e=="object"&&!Array.isArray(e),Ci=(e,...t)=>{if(!t.length)return e;const n=t.shift();if(!(!ti(e)||!ti(n))){for(const s in n)ti(n[s])?(e[s]||Object.assign(e,{[s]:{}}),Ci(e[s],n[s])):Object.assign(e,{[s]:n[s]});return Ci(e,...t)}},Or=()=>!(typeof window>"u"||typeof document>"u"),za=(e,t=!0)=>{},fm=(e={})=>(za('Missing "appName" property inside the plugin options.',e.app_name==null),za('Missing "name" property in the route.',e.screen_name==null),e);function dm(e="",t=""){const n=e.split("/"),s=t.split("/");return n[0]===""&&t[t.length-1]==="/"&&n.shift(),s.join("/")+n.join("/")}const hm=()=>({bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}});let Wc={};const pm=(e={})=>{const t=hm();Wc=Ci(t,e)},He=()=>Wc,dn=(...e)=>{const{globalObjectName:t}=He();!Or()||typeof window[t]>"u"||window[t](...e)},lo=(...e)=>{const{config:t,includes:n}=He();if(dn("config",t.id,...e),Array.isArray(n))for(const s of n)dn("config",s.id,...e)},La=(e,t)=>{Or()&&(window[`ga-disable-${e}`]=t)},Gc=(e=!0)=>{const{config:t,includes:n}=He();if(La(t.id,e),Array.isArray(n))for(const s of n)La(s.id,e)},Kc=()=>{Gc(!0)},mm=()=>{Gc(!1)},pn=(e,t={})=>{const{includes:n,defaultGroupName:s}=He();t.send_to==null&&Array.isArray(n)&&n.length&&(t.send_to=n.map(r=>r.id).concat(s)),dn("event",e,t)};let Jc;const gm=e=>{Jc=e},co=()=>Jc,Yc=e=>{if(!Or())return;let t;if(typeof e=="string")t={page_path:e};else if(e.path||e.fullPath){const{pageTrackerUseFullPath:n,pageTrackerPrependBase:s}=He(),r=co(),i=r==null?void 0:r.options.base,o=n?e.fullPath:e.path;t={...e.name&&{page_title:e.name},page_path:s?dm(o,i):o}}else t=e;t.page_location==null&&(t.page_location=window.location.href),t.send_page_view==null&&(t.send_page_view=!0),pn("page_view",t)},Zc=e=>{const{appName:t}=He();if(!e)return;let n;typeof e=="string"?n={screen_name:e}:n=e,n.app_name=n.app_name||t,pn("screen_view",n)},vm=(...e)=>{pn("exception",...e)},bm=e=>{lo("linker",e)},ym=e=>{pn("timing_complete",e)},_m=(...e)=>{dn("set",...e)},xm=(...e)=>{pn("refund",...e)},$m=e=>{pn("purchase",e)},Am=e=>{lo({custom_map:e})},Em=Object.freeze(Object.defineProperty({__proto__:null,config:lo,customMap:Am,event:pn,exception:vm,linker:bm,optIn:mm,optOut:Kc,pageview:Yc,purchase:$m,query:dn,refund:xm,screenview:Zc,set:_m,time:ym},Symbol.toStringTag,{value:"Module"})),wm=e=>{e.config.globalProperties.$gtag=Em},Ha=e=>({send_page_view:!1,...e}),Qc=()=>{const{config:e,includes:t}=He();if(dn("config",e.id,Ha(e.params)),Array.isArray(t))for(const n of t)dn("config",n.id,Ha(n.params))},Ba=(e={},t={})=>{const{appName:n,pageTrackerTemplate:s,pageTrackerScreenviewEnabled:r,pageTrackerSkipSamePath:i}=He();if(i&&e.path===t.path)return;let o=e;if(Si(s)?o=s(e,t):r&&(o=fm({app_name:n,screen_name:e.name})),r){Zc(o);return}Yc(o)},Ua=e=>{const{pageTrackerExcludedRoutes:t}=He();return t.includes(e.path)||t.includes(e.name)},Sm=()=>{const{onBeforeTrack:e,onAfterTrack:t}=He(),n=co();n.isReady().then(()=>{Ys().then(()=>{const{currentRoute:s}=n;Qc(),!Ua(s.value)&&Ba(s.value)}),n.afterEach((s,r)=>{Ys().then(()=>{Ua(s)||(Si(e)&&e(s,r),Ba(s,r),Si(t)&&t(s,r))})})})},Cm=()=>{if(!Or())return;const{enabled:e,globalObjectName:t,globalDataLayerName:n}=He();return window[t]==null&&(window[n]=window[n]||[],window[t]=function(){window[n].push(arguments)}),window[t]("js",new Date),e||Kc(),window[t]},Rm=()=>{const{onReady:e,onError:t,globalObjectName:n,globalDataLayerName:s,config:r,customResourceURL:i,customPreconnectOrigin:o,deferScriptLoad:a,pageTrackerEnabled:l,disableScriptLoad:f}=He(),u=!!(l&&co());if(Cm(),u?Sm():Qc(),!f)return um(`${i}?id=${r.id}&l=${s}`,{preconnectOrigin:o,defer:a}).then(()=>{e&&e(window[n])}).catch(c=>(t&&t(c),c))},Pm=(e,t,n)=>{wm(e),pm(t),gm(n),He().bootstrap&&Rm()};Ph();const uo=Cd(jh);uo.use(ao);uo.use(Pm,{config:{id:"G-ZP2LCLVZ2X",params:{send_page_view:!1}}},ao);uo.mount("#app");export{oc as A,Ys as B,Ke as C,Ou as D,Me as F,Nc as _,he as a,Uf as b,yn as c,ge as d,$o as e,Om as f,Il as g,kl as h,Tm as i,ic as j,Tu as k,Im as l,mi as m,Ii as n,ot as o,rf as p,Ol as q,ci as r,js as s,Bs as t,jf as u,Nm as v,vt as w,wn as x,Ni as y,Nu as z};

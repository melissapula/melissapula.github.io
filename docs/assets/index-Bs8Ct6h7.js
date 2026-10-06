const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-Clta8SoH.js","assets/about-I2-nfrNe.css","assets/resume-BvpPdAnz.js","assets/resume-9SBHLjfx.css","assets/portfolio-BN0SfqfY.js","assets/ProjectCard-B8EjxYJy.js","assets/ProjectCard-pCKI7OaL.css","assets/portfolio-CC7Wpt-Q.css","assets/pythonCode-CuQ4KZ1d.js","assets/ProjectShell-IhSmCH6m.js","assets/ProjectShell-DyoouBvB.css","assets/pythonCode-SjNLg7Wj.css","assets/dataAnalysis-CJkyT47A.js","assets/dataAnalysis-B1pHAztZ.css","assets/contact-Ds_Djc8z.js","assets/contact-7OtAcNLM.css","assets/notFound-uylZoiEx.js","assets/notFound-B-f7uTgo.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ho(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const fe={},Jt=[],pt=()=>{},pa=()=>!1,ts=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ns=e=>e.startsWith("onUpdate:"),xe=Object.assign,po=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},mc=Object.prototype.hasOwnProperty,re=(e,t)=>mc.call(e,t),U=Array.isArray,Mt=e=>wr(e)==="[object Map]",Dr=e=>wr(e)==="[object Set]",Ko=e=>wr(e)==="[object Date]",K=e=>typeof e=="function",he=e=>typeof e=="string",nt=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",ma=e=>(oe(e)||K(e))&&K(e.then)&&K(e.catch),ga=Object.prototype.toString,wr=e=>ga.call(e),gc=e=>wr(e).slice(8,-1),va=e=>wr(e)==="[object Object]",mo=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,er=ho(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vc=/-\w/g,ze=rs(e=>e.replace(vc,t=>t.slice(1).toUpperCase())),bc=/\B([A-Z])/g,Bt=rs(e=>e.replace(bc,"-$1").toLowerCase()),ss=rs(e=>e.charAt(0).toUpperCase()+e.slice(1)),xs=rs(e=>e?`on${ss(e)}`:""),dt=(e,t)=>!Object.is(e,t),ws=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ba=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},yc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ya=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let Go;const os=()=>Go||(Go=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function go(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=he(r)?Ec(r):go(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(he(e)||oe(e))return e}const _c=/;(?![^(]*\))/g,xc=/:([^]+)/,wc=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ec(e){const t={};return e.replace(wc,n=>n.startsWith("/*")?"":n).split(_c).forEach(n=>{if(n){const r=n.split(xc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function is(e){let t="";if(he(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=is(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ac="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cc=ho(Ac);function _a(e){return!!e||e===""}function Sc(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=as(e[s],t[s],n);return r}function Wo(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),s=new Uint8Array(r.length);for(const o of e){let i=-1;for(let a=0;a<r.length;a++)if(!s[a]&&as(o,r[a],n)){i=a;break}if(i<0)return!1;s[i]=1}return!0}function $c(e,t,n){let r=Mt(e),s=Mt(t);if(r||s||(r=Dr(e),s=Dr(t),r||s))return r&&s?Wo(e,t,n):!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),u=t.hasOwnProperty(a);if(l&&!u||!l&&u||!as(e[a],t[a],n))return!1}return String(e)===String(t)}function Jo(e,t,n,r){n||(n=[new Map,new Map]);const[s,o]=n;if(s.has(e)||o.has(t))return s.get(e)===t&&o.get(t)===e;s.set(e,t),o.set(t,e);const i=r(e,t,n);return s.delete(e),o.delete(t),i}function as(e,t,n){if(e===t)return!0;let r=Ko(e),s=Ko(t);return r||s?r&&s?e.getTime()===t.getTime():!1:(r=nt(e),s=nt(t),r||s?e===t:(r=U(e),s=U(t),r||s?r&&s?Jo(e,t,n,Sc):!1:(r=oe(e),s=oe(t),r||s?!r||!s?!1:Jo(e,t,n,$c):String(e)===String(t))))}const xa=e=>!!(e&&e.__v_isRef===!0),Pr=e=>he(e)?e:e==null?"":U(e)||oe(e)&&(e.toString===ga||!K(e.toString))?xa(e)?Pr(e.value):JSON.stringify(e,wa,2):String(e),wa=(e,t)=>xa(t)?wa(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[Es(r,o)+" =>"]=s,n),{})}:Dr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Es(n))}:nt(t)?Es(t):oe(t)&&!U(t)&&!va(t)?String(t):t,Es=(e,t="")=>{var n;return nt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ae;class Oc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ae&&(Ae.active?(this.parent=Ae,this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){if(this._on>0&&--this._on===0){if(Ae===this)Ae=this.prevScope;else{let t=Ae;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rc(){return Ae}let ue;const As=new WeakSet;class Ea{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&(Ae.active?Ae.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,As.has(this)&&(As.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ca(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yo(this),Sa(this);const t=ue,n=tt;ue=this,tt=!0;try{return this.fn()}finally{$a(this),ue=t,tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)yo(t);this.deps=this.depsTail=void 0,Yo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?As.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hs(this)&&this.run()}get dirty(){return Hs(this)}}let Aa=0,tr,nr;function Ca(e,t=!1){if(e.flags|=8,t){e.next=nr,nr=e;return}e.next=tr,tr=e}function vo(){Aa++}function bo(){if(--Aa>0)return;if(nr){let t=nr;for(nr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;tr;){let t=tr;for(tr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Sa(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function $a(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),yo(r),Pc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Hs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Oa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Oa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===lr)||(e.globalVersion=lr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Hs(e))))return;e.flags|=2;const t=e.dep,n=ue,r=tt;ue=e,tt=!0;try{Sa(e);const s=e.fn(e._value);(t.version===0||dt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ue=n,tt=r,$a(e),e.flags&=-3}}function yo(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)yo(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let tt=!0;const Ra=[];function St(){Ra.push(tt),tt=!1}function $t(){const e=Ra.pop();tt=e===void 0?!0:e}function Yo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ue;ue=void 0;try{t()}finally{ue=n}}}let lr=0;class Tc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _o{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ue||!tt||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new Tc(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,Pa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=r)}return n}trigger(t){this.version++,lr++,this.notify(t)}notify(t){vo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bo()}}}function Pa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Pa(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Us=new WeakMap,Zt=Symbol(""),Vs=Symbol(""),cr=Symbol("");function $e(e,t,n){if(tt&&ue){let r=Us.get(e);r||Us.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new _o),s.map=r,s.key=n),s.track()}}function xt(e,t,n,r,s,o){const i=Us.get(e);if(!i){lr++;return}const a=l=>{l&&l.trigger()};if(vo(),t==="clear")i.forEach(a);else{const l=U(e),u=l&&mo(n);if(l&&n==="length"){const f=Number(r);i.forEach((c,p)=>{(p==="length"||p===cr||!nt(p)&&p>=f)&&a(c)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(cr)),t){case"add":l?u&&a(i.get("length")):(a(i.get(Zt)),Mt(e)&&a(i.get(Vs)));break;case"delete":l||(a(i.get(Zt)),Mt(e)&&a(i.get(Vs)));break;case"set":Mt(e)&&a(i.get(Zt));break}}bo()}function hn(e){const t=ee(e);return t===e||($e(t,"iterate",cr),We(e))?t:mt(e)?Dt(e)?t.map(n=>zt(Je(n))):t.map(zt):t.map(Je)}function ls(e){return $e(e=ee(e),"iterate",cr),e}function ut(e,t){return mt(e)?zt(Dt(e)?Je(t):t):Je(t)}const kc={__proto__:null,[Symbol.iterator](){return Cs(this,Symbol.iterator,e=>ut(this,e))},concat(...e){return hn(this).concat(...e.map(t=>U(t)?hn(t):t))},entries(){return Cs(this,"entries",e=>(e[1]=ut(this,e[1]),e))},every(e,t){return gt(this,"every",e,t,void 0,arguments)},filter(e,t){return gt(this,"filter",e,t,n=>n.map(r=>ut(this,r)),arguments)},find(e,t){return gt(this,"find",e,t,n=>ut(this,n),arguments)},findIndex(e,t){return gt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return gt(this,"findLast",e,t,n=>ut(this,n),arguments)},findLastIndex(e,t){return gt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return gt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ss(this,"includes",e)},indexOf(...e){return Ss(this,"indexOf",e)},join(e){return hn(this).join(e)},lastIndexOf(...e){return Ss(this,"lastIndexOf",e)},map(e,t){return gt(this,"map",e,t,void 0,arguments)},pop(){return Kn(this,"pop")},push(...e){return Kn(this,"push",e)},reduce(e,...t){return Qo(this,"reduce",e,t)},reduceRight(e,...t){return Qo(this,"reduceRight",e,t)},shift(){return Kn(this,"shift")},some(e,t){return gt(this,"some",e,t,void 0,arguments)},splice(...e){return Kn(this,"splice",e)},toReversed(){return hn(this).toReversed()},toSorted(e){return hn(this).toSorted(e)},toSpliced(...e){return hn(this).toSpliced(...e)},unshift(...e){return Kn(this,"unshift",e)},values(){return Cs(this,"values",e=>ut(this,e))}};function Cs(e,t,n){const r=ls(e),s=r[t]();return r!==e&&!We(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const Nc=Array.prototype;function gt(e,t,n,r,s,o){const i=ls(e),a=i!==e&&!We(e),l=i[t];if(l!==Nc[t]){const c=l.apply(e,o);return a?Je(c):c}let u=n;i!==e&&(a?u=function(c,p){return n.call(this,ut(e,c),p,e)}:n.length>2&&(u=function(c,p){return n.call(this,c,p,e)}));const f=l.call(i,u,r);return a&&s?s(f):f}function Qo(e,t,n,r){const s=ls(e),o=s!==e&&!We(e);let i=n,a=!1;s!==e&&(o?(a=r.length===0,i=function(u,f,c){return a&&(a=!1,u=ut(e,u)),n.call(this,u,ut(e,f),c,e)}):n.length>3&&(i=function(u,f,c){return n.call(this,u,f,c,e)}));const l=s[t](i,...r);return a?ut(e,l):l}function Ss(e,t,n){const r=ee(e);$e(r,"iterate",cr);const s=r[t](...n);return(s===-1||s===!1)&&Eo(n[0])?(n[0]=ee(n[0]),r[t](...n)):s}function Kn(e,t,n=[]){St(),vo();const r=ee(e)[t].apply(e,n);return bo(),$t(),r}const Ic=ho("__proto__,__v_isRef,__isVue"),Ta=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nt));function Mc(e){nt(e)||(e=String(e));const t=ee(this);return $e(t,"has",e),t.hasOwnProperty(e)}class ka{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?qc:Da:o?Ma:Ia).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=U(t);if(!s){let l;if(i&&(l=kc[n]))return l;if(n==="hasOwnProperty")return Mc}const a=Reflect.get(t,n,Re(t)?t:r);if((nt(n)?Ta.has(n):Ic(n))||(s||$e(t,"get",n),o))return a;if(Re(a)){const l=i&&mo(n)?a:a.value;return s&&oe(l)?Ks(l):l}return oe(a)?s?Ks(a):cs(a):a}}class Na extends ka{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];const i=U(t)&&mo(n);if(!this._isShallow){const u=mt(o);if(!We(r)&&!mt(r)&&(o=ee(o),r=ee(r)),!i&&Re(o)&&!Re(r))return u||(o.value=r),!0}const a=i?Number(n)<t.length:re(t,n),l=Reflect.set(t,n,r,Re(t)?t:s);return t===ee(s)&&l&&(a?dt(r,o)&&xt(t,"set",n,r):xt(t,"add",n,r)),l}deleteProperty(t,n){const r=re(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&xt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!nt(n)||!Ta.has(n))&&$e(t,"has",n),r}ownKeys(t){return $e(t,"iterate",U(t)?"length":Zt),Reflect.ownKeys(t)}}class Dc extends ka{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Lc=new Na,zc=new Dc,jc=new Na(!0);const qs=e=>e,Sr=e=>Reflect.getPrototypeOf(e);function Bc(e,t,n){return function(...r){const s=this.__v_raw,o=ee(s),i=Mt(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=s[e](...r),f=n?qs:t?zt:Je;return!t&&$e(o,"iterate",l?Vs:Zt),xe(Object.create(u),{next(){const{value:c,done:p}=u.next();return p?{value:c,done:p}:{value:a?[f(c[0]),f(c[1])]:f(c),done:p}}})}}function $r(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Fc(e,t){const n={get(s){const o=this.__v_raw,i=ee(o),a=ee(s);e||(dt(s,a)&&$e(i,"get",s),$e(i,"get",a));const{has:l}=Sr(i),u=t?qs:e?zt:Je;if(l.call(i,s))return u(o.get(s));if(l.call(i,a))return u(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&$e(ee(s),"iterate",Zt),s.size},has(s){const o=this.__v_raw,i=ee(o),a=ee(s);return e||(dt(s,a)&&$e(i,"has",s),$e(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=ee(a),u=t?qs:e?zt:Je;return!e&&$e(l,"iterate",Zt),a.forEach((f,c)=>s.call(o,u(f),u(c),i))}};return xe(n,e?{add:$r("add"),set:$r("set"),delete:$r("delete"),clear:$r("clear")}:{add(s){const o=ee(this),i=Sr(o),a=ee(s),l=!t&&!We(s)&&!mt(s)?a:s;return i.has.call(o,l)||dt(s,l)&&i.has.call(o,s)||dt(a,l)&&i.has.call(o,a)||(o.add(l),xt(o,"add",l,l)),this},set(s,o){!t&&!We(o)&&!mt(o)&&(o=ee(o));const i=ee(this),{has:a,get:l}=Sr(i);let u=a.call(i,s);u||(s=ee(s),u=a.call(i,s));const f=l.call(i,s);return i.set(s,o),u?dt(o,f)&&xt(i,"set",s,o):xt(i,"add",s,o),this},delete(s){const o=ee(this),{has:i,get:a}=Sr(o);let l=i.call(o,s);l||(s=ee(s),l=i.call(o,s)),a&&a.call(o,s);const u=o.delete(s);return l&&xt(o,"delete",s,void 0),u},clear(){const s=ee(this),o=s.size!==0,i=s.clear();return o&&xt(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Bc(s,e,t)}),n}function xo(e,t){const n=Fc(e,t);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,o)}const Hc={get:xo(!1,!1)},Uc={get:xo(!1,!0)},Vc={get:xo(!0,!1)};const Ia=new WeakMap,Ma=new WeakMap,Da=new WeakMap,qc=new WeakMap;function Kc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cs(e){return mt(e)?e:wo(e,!1,Lc,Hc,Ia)}function La(e){return wo(e,!1,jc,Uc,Ma)}function Ks(e){return wo(e,!0,zc,Vc,Da)}function wo(e,t,n,r,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=s.get(e);if(o)return o;const i=Kc(gc(e));if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Dt(e){return mt(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function mt(e){return!!(e&&e.__v_isReadonly)}function We(e){return!!(e&&e.__v_isShallow)}function Eo(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Gc(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&ba(e,"__v_skip",!0),e}const Je=e=>oe(e)?cs(e):e,zt=e=>oe(e)?Ks(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function Wc(e){return za(e,!1)}function Jc(e){return za(e,!0)}function za(e,t){return Re(e)?e:new Yc(e,t)}class Yc{constructor(t,n){this.dep=new _o,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ee(t),this._value=n?t:Je(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||We(t)||mt(t);t=r?t:ee(t),dt(t,n)&&(this._rawValue=t,this._value=r?t:Je(t),this.dep.trigger())}}function bn(e){return Re(e)?e.value:e}const Qc={get:(e,t,n)=>t==="__v_raw"?e:bn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Re(s)&&!Re(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function ja(e){return Dt(e)?e:new Proxy(e,Qc)}class Zc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new _o(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return Ca(this,!0),!0}get value(){const t=this.dep.track();return Oa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Xc(e,t,n=!1){let r,s;return K(e)?r=e:(r=e.get,s=e.set),new Zc(r,s,n)}const Or={},Lr=new WeakMap;let Wt;function ef(e,t=!1,n=Wt){if(n){let r=Lr.get(n);r||Lr.set(n,r=[]),r.push(e)}}function tf(e,t,n=fe){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=n,u=k=>s?k:We(k)||s===!1||s===0?wt(k,1):wt(k);let f,c,p,m,w=!1,E=!1;if(Re(e)?(c=()=>e.value,w=We(e)):Dt(e)?(c=()=>u(e),w=!0):U(e)?(E=!0,w=e.some(k=>Dt(k)||We(k)),c=()=>e.map(k=>{if(Re(k))return k.value;if(Dt(k))return u(k);if(K(k))return l?l(k,2):k()})):K(e)?t?c=l?()=>l(e,2):e:c=()=>{if(p){St();try{p()}finally{$t()}}const k=Wt;Wt=f;try{return l?l(e,3,[m]):e(m)}finally{Wt=k}}:c=pt,t&&s){const k=c,$=s===!0?1/0:s;c=()=>wt(k(),$)}const z=Rc(),M=()=>{f.stop(),z&&z.active&&po(z.effects,f)};if(o&&t){const k=t;t=(...$)=>{const L=k(...$);return M(),L}}let S=E?new Array(e.length).fill(Or):Or;const N=k=>{if(!(!(f.flags&1)||!f.dirty&&!k))if(t){const $=f.run();if(k||s||w||(E?$.some((L,G)=>dt(L,S[G])):dt($,S))){p&&p();const L=Wt;Wt=f;try{const G=[$,S===Or?void 0:E&&S[0]===Or?[]:S,m];S=$,l?l(t,3,G):t(...G)}finally{Wt=L}}}else f.run()};return a&&a(N),f=new Ea(c),f.scheduler=i?()=>i(N,!1):N,m=k=>ef(k,!1,f),p=f.onStop=()=>{const k=Lr.get(f);if(k){if(l)l(k,4);else for(const $ of k)$();Lr.delete(f)}},t?r?N(!0):S=f.run():i?i(N.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function wt(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Re(e))wt(e.value,t,n);else if(U(e))for(let r=0;r<e.length;r++)wt(e[r],t,n);else if(Dr(e)||Mt(e))e.forEach(r=>{wt(r,t,n)});else if(va(e)){for(const r in e)wt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&wt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Er(e,t,n,r){try{return r?e(...r):e()}catch(s){Ar(s,t,n)}}function Ye(e,t,n,r){if(K(e)){const s=Er(e,t,n,r);return s&&ma(s)&&s.catch(o=>{Ar(o,t,n)}),s}if(U(e)){const s=[];for(let o=0;o<e.length;o++)s.push(Ye(e[o],t,n,r));return s}}function Ar(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||fe;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,l,u)===!1)return}a=a.parent}if(o){St(),Er(o,null,10,[e,l,u]),$t();return}}nf(e,n,s,r,i)}function nf(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const De=[];let ft=-1;const yn=[];let kt=null,pn=0;const Ba=Promise.resolve();let zr=null;function jr(e){const t=zr||Ba;return e?t.then(this?e.bind(this):e):t}function rf(e){let t=ft+1,n=De.length;for(;t<n;){const r=t+n>>>1,s=De[r],o=fr(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function Ao(e){if(!(e.flags&1)){const t=fr(e),n=De[De.length-1];!n||!(e.flags&2)&&t>=fr(n)?De.push(e):De.splice(rf(t),0,e),e.flags|=1,Fa()}}function Fa(){zr||(zr=Ba.then(Ua))}function Gs(e){if(!U(e))kt&&e.id===-1?kt.splice(pn+1,0,e):e.flags&1||(yn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)yn.push(e[t]);Fa()}function Zo(e,t,n=ft+1){for(;n<De.length;n++){const r=De[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;De.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ha(e){if(yn.length){const t=[...new Set(yn)].sort((n,r)=>fr(n)-fr(r));if(yn.length=0,kt){for(let n=0;n<t.length;n++)kt.push(t[n]);return}for(kt=t,pn=0;pn<kt.length;pn++){const n=kt[pn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kt=null,pn=0}}const fr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ua(e){try{for(ft=0;ft<De.length;ft++){const t=De[ft];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Er(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ft<De.length;ft++){const t=De[ft];t&&(t.flags&=-2)}ft=-1,De.length=0,Ha(),zr=null,(De.length||yn.length)&&Ua()}}let Ce=null,Va=null;function Br(e){const t=Ce;return Ce=e,Va=e&&e.type.__scopeId||null,t}function Et(e,t=Ce,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Vr(-1);const o=Br(t),i=Ct.length;let a;try{a=e(...s)}finally{for(let l=Ct.length;l>i;l--)ms();Br(o),r._d&&Vr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Pp(e,t){if(Ce===null)return e;const n=gs(Ce),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,a,l=fe]=t[s];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&wt(i),r.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function Ht(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(St(),Ye(l,n,8,[e.el,a,e,t]),$t())}}function Tr(e,t){if(Oe){let n=Oe.provides;const r=Oe.parent&&Oe.parent.provides;r===n&&(n=Oe.provides=Object.create(r)),n[e]=t}}function At(e,t,n=!1){const r=Rl();if(r||xn){let s=xn?xn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}const sf=Symbol.for("v-scx"),of=()=>At(sf);function kr(e,t,n){return qa(e,t,n)}function qa(e,t,n=fe){const{immediate:r,deep:s,flush:o,once:i}=n,a=xe({},n),l=t&&r||!t&&o!=="post";let u;if(mr){if(o==="sync"){const m=of();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=pt,m.resume=pt,m.pause=pt,m}}const f=Oe;a.call=(m,w,E)=>Ye(m,f,w,E);let c=!1;o==="post"?a.scheduler=m=>{Ie(m,f&&f.suspense)}:o!=="sync"&&(c=!0,a.scheduler=(m,w)=>{w?m():Ao(m)}),a.augmentJob=m=>{t&&(m.flags|=4),c&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const p=tf(e,t,a);return mr&&(u?u.push(p):l&&p()),p}function af(e,t,n){const r=this.proxy,s=he(e)?e.includes(".")?Ka(r,e):()=>r[e]:e.bind(r,r);let o;K(t)?o=t:(o=t.handler,n=t);const i=Cr(this),a=qa(s,o.bind(r),n);return i(),a}function Ka(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const lf=Symbol("_vte"),fs=e=>e.__isTeleport,Ke=Symbol("_leaveCb"),Gn=Symbol("_enterCb");function cf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tl(()=>{e.isMounted=!0}),nl(()=>{e.isUnmounting=!0}),e}const qe=[Function,Array],Ga={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},Wa=e=>{const t=e.subTree;return t.component?Wa(t.component):t},ff={name:"BaseTransition",props:Ga,setup(e,{slots:t}){const n=Rl(),r=cf();return()=>{const s=t.default&&Qa(t.default(),!0),o=s&&s.length?Ja(s):n.subTree?ou():void 0;if(!o)return;const i=ee(e),{mode:a}=i;if(r.isLeaving)return $s(o);const l=Fr(o);if(!l)return $s(o);let u=Ws(l,i,r,n,c=>u=c);l.type!==we&&ur(l,u);let f=n.subTree&&Fr(n.subTree);if(f&&f.type!==we&&!ht(f,l)&&Wa(n).type!==we){let c=Ws(f,i,r,n);if(ur(f,c),a==="out-in"&&l.type!==we)return r.isLeaving=!0,c.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave,f=void 0},$s(o);a==="in-out"&&l.type!==we?c.delayLeave=(p,m,w)=>{const E=Ya(r,f);E[String(f.key)]=f,p[Ke]=()=>{m(),p[Ke]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return o}}};function Ja(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==we){t=n;break}}return t}const uf=ff;function Ya(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ws(e,t,n,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:p,onLeave:m,onAfterLeave:w,onLeaveCancelled:E,onBeforeAppear:z,onAppear:M,onAfterAppear:S,onAppearCancelled:N}=t,k=String(e.key),$=Ya(n,e),L=(D,V)=>{D&&Ye(D,r,9,V)},G=(D,V)=>{const J=V[1];L(D,V),U(D)?D.every(R=>R.length<=1)&&J():D.length<=1&&J()},te={mode:i,persisted:a,beforeEnter(D){let V=l;if(!n.isMounted)if(o)V=z||l;else return;D[Ke]&&D[Ke](!0);const J=$[k];J&&ht(e,J)&&J.el[Ke]&&J.el[Ke](),L(V,[D])},enter(D){if($[k]===e)return;let V=u,J=f,R=c;if(!n.isMounted)if(o)V=M||u,J=S||f,R=N||c;else return;let W=!1;D[Gn]=ye=>{W||(W=!0,ye?L(R,[D]):L(J,[D]),te.delayedLeave&&te.delayedLeave(),D[Gn]=void 0)};const de=D[Gn].bind(null,!1);V?G(V,[D,de]):de()},leave(D,V){const J=String(e.key);if(D[Gn]&&D[Gn](!0),n.isUnmounting)return V();L(p,[D]);let R=!1;D[Ke]=de=>{R||(R=!0,V(),de?L(E,[D]):L(w,[D]),D[Ke]=void 0,$[J]===e&&delete $[J])};const W=D[Ke].bind(null,!1);$[J]=e,m?G(m,[D,W]):W()},clone(D){const V=Ws(D,t,n,r,s);return s&&s(V),V}};return te}function $s(e){if(us(e))return e=jt(e),e.children=null,e}function Fr(e){if(!us(e))return fs(e.type)&&e.children?Ja(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function ur(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;ur(fs(n.type)&&Fr(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qa(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Le?(i.patchFlag&128&&s++,r=r.concat(Qa(i.children,t,a))):(t||i.type!==we)&&r.push(a!=null?jt(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Za(e,t){return K(e)?xe({name:e.name},t,{setup:e}):e}function Xa(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xo(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Hr=new WeakMap;function rr(e,t,n,r,s=!1){if(U(e)){e.forEach((E,z)=>rr(E,t&&(U(t)?t[z]:t),n,r,s));return}if(_n(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&rr(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?gs(r.component):r.el,i=s?null:o,{i:a,r:l}=e,u=t&&t.r,f=a.refs===fe?a.refs={}:a.refs,c=a.setupState,p=ee(c),m=c===fe?pa:E=>Xo(f,E)?!1:re(p,E),w=(E,z)=>!(z&&Xo(f,z));if(u!=null&&u!==l){if(ei(t),he(u))f[u]=null,m(u)&&(c[u]=null);else if(Re(u)){const E=t;w(u,E.k)&&(u.value=null),E.k&&(f[E.k]=null)}}if(K(l))Er(l,a,12,[i,f]);else{const E=he(l),z=Re(l);if(E||z){const M=()=>{if(e.f){const S=E?m(l)?c[l]:f[l]:w()||!e.k?l.value:f[e.k];if(s)U(S)&&po(S,o);else if(U(S))S.includes(o)||S.push(o);else if(E)f[l]=[o],m(l)&&(c[l]=f[l]);else{const N=[o];w(l,e.k)&&(l.value=N),e.k&&(f[e.k]=N)}}else E?(f[l]=i,m(l)&&(c[l]=i)):z&&(w(l,e.k)&&(l.value=i),e.k&&(f[e.k]=i))};if(i){const S=()=>{M(),Hr.delete(e)};S.id=-1,Hr.set(e,S),Ie(S,n)}else ei(e),M()}}}function ei(e){const t=Hr.get(e);t&&(t.flags|=8,Hr.delete(e))}os().requestIdleCallback;os().cancelIdleCallback;const _n=e=>!!e.type.__asyncLoader,us=e=>e.type.__isKeepAlive;function df(e,t){el(e,"a",t)}function hf(e,t){el(e,"da",t)}function el(e,t,n=Oe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ds(t,r,n),n){let s=n.parent;for(;s&&s.parent;)us(s.parent.vnode)&&pf(r,t,n,s),s=s.parent}}function pf(e,t,n,r){const s=ds(t,e,r,!0);rl(()=>{po(r[t],s)},n)}function ds(e,t,n=Oe,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{St();const a=Cr(n),l=Ye(t,n,e,i);return a(),$t(),l});return r?s.unshift(o):s.push(o),o}}const Ot=e=>(t,n=Oe)=>{(!mr||e==="sp")&&ds(e,(...r)=>t(...r),n)},mf=Ot("bm"),tl=Ot("m"),gf=Ot("bu"),vf=Ot("u"),nl=Ot("bum"),rl=Ot("um"),bf=Ot("sp"),yf=Ot("rtg"),_f=Ot("rtc");function xf(e,t=Oe){ds("ec",e,t)}const sl="components";function Js(e,t){return il(sl,e,!0,t)||e}const ol=Symbol.for("v-ndc");function wf(e){return he(e)?il(sl,e,!1)||e:e||ol}function il(e,t,n=!0,r=!1){const s=Ce||Oe;if(s){const o=s.type;{const a=pu(o,!1);if(a&&(a===t||a===ze(t)||a===ss(ze(t))))return o}const i=ti(s[e]||o[e],t)||ti(s.appContext[e],t);return!i&&r?o:i}}function ti(e,t){return e&&(e[t]||e[ze(t)]||e[ss(ze(t))])}function ni(e,t,n,r){let s;const o=n,i=U(e);if(i||he(e)){const a=i&&Dt(e);let l=!1,u=!1;a&&(l=!We(e),u=mt(e),e=ls(e)),s=new Array(e.length);for(let f=0,c=e.length;f<c;f++)s[f]=t(l?u?zt(Je(e[f])):Je(e[f]):e[f],f,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const f=a[l];s[l]=t(e[f],f,l,o)}}else s=[];return s}function Tp(e,t,n,r,s,o){if(n==null&&(n={}),Ce.ce||Ce.parent&&_n(Ce.parent)&&Ce.parent.ce){const u=n,f=Object.keys(u).length>0;return t!=="default"&&(u.name=t),Ge(),hr(Le,null,[ge("slot",u,r)],f?-2:64)}let i=e[t];i&&i._c&&(i._d=!1);const a=Ct.length;Ge();let l;try{const u=i&&al(i(n)),f=n.key||o||u&&u.key;l=hr(Le,{key:(f&&!nt(f)?f:`_${t}`)+(!u&&r?"_fb":"")},u||(r?r():[]),u&&e._===1?64:-2)}catch(u){for(let f=Ct.length;f>a;f--)ms();throw u}finally{i&&i._c&&(i._d=!0)}return l}function al(e){return e.some(t=>Ln(t)?!(t.type===we||t.type===Le&&!al(t.children)):!0)?e:null}const Ys=e=>e?Pl(e)?gs(e):Ys(e.parent):null,sr=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ys(e.parent),$root:e=>Ys(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>cl(e),$forceUpdate:e=>e.f||(e.f=()=>{Ao(e.update)}),$nextTick:e=>e.n||(e.n=jr.bind(e.proxy)),$watch:e=>af.bind(e)}),Os=(e,t)=>e!==fe&&!e.__isScriptSetup&&re(e,t),Ef={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Os(r,t))return i[t]=1,r[t];if(s!==fe&&re(s,t))return i[t]=2,s[t];if(re(o,t))return i[t]=3,o[t];if(n!==fe&&re(n,t))return i[t]=4,n[t];Qs&&(i[t]=0)}}const u=sr[t];let f,c;if(u)return t==="$attrs"&&$e(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==fe&&re(n,t))return i[t]=4,n[t];if(c=l.config.globalProperties,re(c,t))return c[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Os(s,t)?(s[t]=n,!0):r!==fe&&re(r,t)?(r[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:i}},a){let l;return!!(n[a]||e!==fe&&a[0]!=="$"&&re(e,a)||Os(t,a)||re(o,a)||re(r,a)||re(sr,a)||re(s.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ri(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qs=!0;function Af(e){const t=cl(e),n=e.proxy,r=e.ctx;Qs=!1,t.beforeCreate&&si(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:u,created:f,beforeMount:c,mounted:p,beforeUpdate:m,updated:w,activated:E,deactivated:z,beforeDestroy:M,beforeUnmount:S,destroyed:N,unmounted:k,render:$,renderTracked:L,renderTriggered:G,errorCaptured:te,serverPrefetch:D,expose:V,inheritAttrs:J,components:R,directives:W,filters:de}=t;if(u&&Cf(u,r,null),i)for(const Y in i){const Z=i[Y];K(Z)&&(r[Y]=Z.bind(n))}if(s){const Y=s.call(n,n);oe(Y)&&(e.data=cs(Y))}if(Qs=!0,o)for(const Y in o){const Z=o[Y],Se=K(Z)?Z.bind(n,n):K(Z.get)?Z.get.bind(n,n):pt,Rt=!K(Z)&&K(Z.set)?Z.set.bind(n):pt,ot=et({get:Se,set:Rt});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>ot.value,set:ke=>ot.value=ke})}if(a)for(const Y in a)ll(a[Y],r,n,Y);if(l){const Y=K(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(Z=>{Tr(Z,Y[Z])})}f&&si(f,e,"c");function le(Y,Z){U(Z)?Z.forEach(Se=>Y(Se.bind(n))):Z&&Y(Z.bind(n))}if(le(mf,c),le(tl,p),le(gf,m),le(vf,w),le(df,E),le(hf,z),le(xf,te),le(_f,L),le(yf,G),le(nl,S),le(rl,k),le(bf,D),U(V))if(V.length){const Y=e.exposed||(e.exposed={});V.forEach(Z=>{Object.defineProperty(Y,Z,{get:()=>n[Z],set:Se=>n[Z]=Se,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===pt&&(e.render=$),J!=null&&(e.inheritAttrs=J),R&&(e.components=R),W&&(e.directives=W),D&&Xa(e)}function Cf(e,t,n=pt){U(e)&&(e=Zs(e));for(const r in e){const s=e[r];let o;oe(s)?"default"in s?o=At(s.from||r,s.default,!0):o=At(s.from||r):o=At(s),Re(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function si(e,t,n){Ye(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ll(e,t,n,r){let s=r.includes(".")?Ka(n,r):()=>n[r];if(he(e)){const o=t[e];K(o)&&kr(s,o)}else if(K(e))kr(s,e.bind(n));else if(oe(e))if(U(e))e.forEach(o=>ll(o,t,n,r));else{const o=K(e.handler)?e.handler.bind(n):t[e.handler];K(o)&&kr(s,o,e)}}function cl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(u=>Ur(l,u,i,!0)),Ur(l,t,i)),oe(t)&&o.set(t,l),l}function Ur(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Ur(e,o,n,!0),s&&s.forEach(i=>Ur(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Sf[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Sf={data:oi,props:ii,emits:ii,methods:Zn,computed:Zn,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Zn,directives:Zn,watch:Of,provide:oi,inject:$f};function oi(e,t){return t?e?function(){return xe(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function $f(e,t){return Zn(Zs(e),Zs(t))}function Zs(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Zn(e,t){return e?xe(Object.create(null),e,t):t}function ii(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:xe(Object.create(null),ri(e),ri(t??{})):t}function Of(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function fl(){return{app:null,config:{isNativeTag:pa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rf=0;function Pf(e,t){return function(r,s=null){K(r)||(r=xe({},r)),s!=null&&!oe(s)&&(s=null);const o=fl(),i=new WeakSet,a=[];let l=!1;const u=o.app={_uid:Rf++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:gu,get config(){return o.config},set config(f){},use(f,...c){return i.has(f)||(f&&K(f.install)?(i.add(f),f.install(u,...c)):K(f)&&(i.add(f),f(u,...c))),u},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),u},component(f,c){return c?(o.components[f]=c,u):o.components[f]},directive(f,c){return c?(o.directives[f]=c,u):o.directives[f]},mount(f,c,p){if(!l){const m=u._ceVNode||ge(r,s);return m.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),e(m,f,p),l=!0,u._container=f,f.__vue_app__=u,gs(m.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Ye(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(f,c){return o.provides[f]=c,u},runWithContext(f){const c=xn;xn=u;try{return f()}finally{xn=c}}};return u}}let xn=null;const Tf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ze(t)}Modifiers`]||e[`${Bt(t)}Modifiers`];function kf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||fe;let s=n;const o=t.startsWith("update:"),i=o&&Tf(r,t.slice(7));i&&(i.trim&&(s=n.map(f=>he(f)?f.trim():f)),i.number&&(s=s.map(yc)));let a,l=r[a=xs(t)]||r[a=xs(ze(t))];!l&&o&&(l=r[a=xs(Bt(t))]),l&&Ye(l,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ye(u,e,6,s)}}const Nf=new WeakMap;function ul(e,t,n=!1){const r=n?Nf:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!K(e)){const l=u=>{const f=ul(u,t,!0);f&&(a=!0,xe(i,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(oe(e)&&r.set(e,null),null):(U(o)?o.forEach(l=>i[l]=null):xe(i,o),oe(e)&&r.set(e,i),i)}function hs(e,t){return!e||!ts(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,Bt(t))||re(e,t))}function ai(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:u,renderCache:f,props:c,data:p,setupState:m,ctx:w,inheritAttrs:E}=e,z=Br(e);let M,S;try{if(n.shapeFlag&4){const k=s||r,$=k;M=Xe(u.call($,k,f,c,m,p,w)),S=a}else{const k=t;M=Xe(k.length>1?k(c,{attrs:a,slots:i,emit:l}):k(c,null)),S=t.props?a:Mf(a)}}catch(k){Ct.length=0,Ar(k,e,1),M=ge(we)}let N=M;if(S&&E!==!1){const k=Object.keys(S),{shapeFlag:$}=N;k.length&&$&7&&(o&&k.some(ns)&&(S=Df(S,o)),N=jt(N,S,!1,!0))}if(n.dirs&&(N=jt(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition){const k=fs(N.type)&&Fr(N)||N;ur(k,n.transition)}return M=N,Br(z),M}function If(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(Ln(s)){if(s.type!==we||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||ts(n))&&((t||(t={}))[n]=e[n]);return t},Df=(e,t)=>{const n={};for(const r in e)(!ns(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Lf(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?li(r,i,u):!!i;if(l&8){const f=t.dynamicProps;for(let c=0;c<f.length;c++){const p=f[c];if(dl(i,r,p)&&!hs(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?li(r,i,u):!0:!!i;return!1}function li(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(dl(t,e,o)&&!hs(n,o))return!0}return!1}function dl(e,t,n){const r=e[n],s=t[n];return n==="style"&&oe(r)&&oe(s)?!as(r,s):r!==s}function Co({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const hl={},pl=()=>Object.create(hl),ml=e=>Object.getPrototypeOf(e)===hl;function zf(e,t,n,r=!1){const s={},o=pl();e.propsDefaults=Object.create(null),gl(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:La(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function jf(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=ee(s),[l]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let p=f[c];if(hs(e.emitsOptions,p))continue;const m=t[p];if(l)if(re(o,p))m!==o[p]&&(o[p]=m,u=!0);else{const w=ze(p);s[w]=Xs(l,a,w,m,e,!1)}else m!==o[p]&&(o[p]=m,u=!0)}}}else{gl(e,t,s,o)&&(u=!0);let f;for(const c in a)(!t||!re(t,c)&&((f=Bt(c))===c||!re(t,f)))&&(l?n&&(n[c]!==void 0||n[f]!==void 0)&&(s[c]=Xs(l,a,c,void 0,e,!0)):delete s[c]);if(o!==a)for(const c in o)(!t||!re(t,c))&&(delete o[c],u=!0)}u&&xt(e.attrs,"set","")}function gl(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(er(l))continue;const u=t[l];let f;s&&re(s,f=ze(l))?!o||!o.includes(f)?n[f]=u:(a||(a={}))[f]=u:hs(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,i=!0)}if(o){const l=ee(n),u=a||fe;for(let f=0;f<o.length;f++){const c=o[f];n[c]=Xs(s,l,c,u[c],e,!re(u,c))}}return i}function Xs(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=re(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&K(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Cr(s);r=u[n]=l.call(null,t),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}const Bf=new WeakMap;function vl(e,t,n=!1){const r=n?Bf:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!K(e)){const f=c=>{l=!0;const[p,m]=vl(c,t,!0);xe(i,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!l)return oe(e)&&r.set(e,Jt),Jt;if(U(o))for(let f=0;f<o.length;f++){const c=ze(o[f]);ci(c)&&(i[c]=fe)}else if(o)for(const f in o){const c=ze(f);if(ci(c)){const p=o[f],m=i[c]=U(p)||K(p)?{type:p}:xe({},p),w=m.type;let E=!1,z=!0;if(U(w))for(let M=0;M<w.length;++M){const S=w[M],N=K(S)&&S.name;if(N==="Boolean"){E=!0;break}else N==="String"&&(z=!1)}else E=K(w)&&w.name==="Boolean";m[0]=E,m[1]=z,(E||re(m,"default"))&&a.push(c)}}const u=[i,a];return oe(e)&&r.set(e,u),u}function ci(e){return e[0]!=="$"&&!er(e)}const So=e=>e==="_"||e==="_ctx"||e==="$stable",$o=e=>U(e)?e.map(Xe):[Xe(e)],Ff=(e,t,n)=>{if(t._n)return t;const r=Et((...s)=>$o(t(...s)),n);return r._c=!1,r},bl=(e,t,n)=>{const r=e._ctx;for(const s in e){if(So(s))continue;const o=e[s];if(K(o))t[s]=Ff(s,o,r);else if(o!=null){const i=$o(o);t[s]=()=>i}}},yl=(e,t)=>{const n=$o(t);e.slots.default=()=>n},_l=(e,t,n)=>{for(const r in t)(n||!So(r))&&(e[r]=t[r])},Hf=(e,t,n)=>{const r=e.slots=pl();if(e.vnode.shapeFlag&32){const s=t._;s?(_l(r,t,n),n&&ba(r,"_",s,!0)):bl(t,r)}else t&&yl(e,t)},Uf=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=fe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:_l(s,t,n):(o=!t.$stable,bl(t,s)),i=t}else t&&(yl(e,t),i={default:1});if(o)for(const a in s)!So(a)&&i[a]==null&&delete s[a]},Ie=eu;function Vf(e){return qf(e)}function qf(e,t){const n=os();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:u,setElementText:f,parentNode:c,nextSibling:p,setScopeId:m=pt,insertStaticContent:w}=e,E=(d,h,g,b=null,_=null,v=null,O=void 0,C=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!ht(d,h)&&(b=y(d),ke(d,_,v,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null),h.dynamicChildren&&d&&d.dynamicChildren&&d.dynamicChildren.hasOnce&&(h.dynamicChildren===Jt&&(h.dynamicChildren=[]),h.dynamicChildren.hasOnce=!0);const{type:x,ref:H,shapeFlag:T}=h;switch(x){case ps:z(d,h,g,b);break;case we:M(d,h,g,b);break;case Nr:d==null&&S(h,g,b,O);break;case Le:R(d,h,g,b,_,v,O,C,A);break;default:T&1?$(d,h,g,b,_,v,O,C,A):T&6?W(d,h,g,b,_,v,O,C,A):(T&64||T&128)&&x.process(d,h,g,b,_,v,O,C,A,j)}H!=null&&_?rr(H,d&&d.ref,v,h||d,!h):H==null&&d&&d.ref!=null&&rr(d.ref,null,v,d,!0)},z=(d,h,g,b)=>{if(d==null)r(h.el=a(h.children),g,b);else{const _=h.el=d.el;h.children!==d.children&&u(_,h.children)}},M=(d,h,g,b)=>{d==null?r(h.el=l(h.children||""),g,b):h.el=d.el},S=(d,h,g,b)=>{[d.el,d.anchor]=w(d.children,h,g,b,d.el,d.anchor)},N=({el:d,anchor:h},g,b)=>{let _;for(;d&&d!==h;)_=p(d),r(d,g,b),d=_;r(h,g,b)},k=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},$=(d,h,g,b,_,v,O,C,A)=>{if(h.type==="svg"?O="svg":h.type==="math"&&(O="mathml"),d==null)L(h,g,b,_,v,O,C,A);else{const x=d.el&&d.el._isVueCE?d.el:null;try{x&&x._beginPatch(),D(d,h,_,v,O,C,A)}finally{x&&x._endPatch()}}},L=(d,h,g,b,_,v,O,C)=>{let A,x;const{props:H,shapeFlag:T,transition:B,dirs:q}=d;if(A=d.el=i(d.type,v,H&&H.is,H),T&8?f(A,d.children):T&16&&te(d.children,A,null,b,_,Rs(d,v),O,C),q&&Ht(d,null,b,"created"),G(A,d,d.scopeId,O,b),H){for(const ce in H)ce!=="value"&&!er(ce)&&o(A,ce,null,H[ce],v,b);"value"in H&&o(A,"value",null,H.value,v),(x=H.onVnodeBeforeMount)&&ct(x,b,d)}q&&Ht(d,null,b,"beforeMount");const X=Kf(_,B);X&&B.beforeEnter(A),r(A,h,g),((x=H&&H.onVnodeMounted)||X||q)&&Ie(()=>{try{x&&ct(x,b,d),X&&B.enter(A),q&&Ht(d,null,b,"mounted")}finally{}},_)},G=(d,h,g,b,_)=>{if(g&&m(d,g),b)for(let v=0;v<b.length;v++)m(d,b[v]);if(_){let v=_.subTree;if(h===v||Al(v.type)&&(v.ssContent===h||v.ssFallback===h)){const O=_.vnode;G(d,O,O.scopeId,O.slotScopeIds,_.parent)}}},te=(d,h,g,b,_,v,O,C,A=0)=>{for(let x=A;x<d.length;x++){const H=d[x]=C?_t(d[x]):Xe(d[x]);E(null,H,h,g,b,_,v,O,C)}},D=(d,h,g,b,_,v,O)=>{const C=h.el=d.el;let{patchFlag:A,dynamicChildren:x,dirs:H}=h;A|=d.patchFlag&16;const T=d.props||fe,B=h.props||fe;let q;if(g&&Ut(g,!1),(q=B.onVnodeBeforeUpdate)&&ct(q,g,h,d),H&&Ht(h,d,g,"beforeUpdate"),g&&Ut(g,!0),x&&(!d.dynamicChildren||d.dynamicChildren.length!==x.length)&&(A=0,O=!1,x=null),(T.innerHTML&&B.innerHTML==null||T.textContent&&B.textContent==null)&&f(C,""),x?V(d.dynamicChildren,x,C,g,b,Rs(h,_),v):O||Z(d,h,C,null,g,b,Rs(h,_),v,!1),A>0){if(A&16)J(C,T,B,g,_);else if(A&2&&T.class!==B.class&&o(C,"class",null,B.class,_),A&4&&o(C,"style",T.style,B.style,_),A&8){const X=h.dynamicProps;for(let ce=0;ce<X.length;ce++){const ie=X[ce],ve=T[ie],Ee=B[ie];(Ee!==ve||ie==="value")&&o(C,ie,ve,Ee,_,g)}}A&1&&d.children!==h.children&&f(C,h.children)}else!O&&x==null&&J(C,T,B,g,_);((q=B.onVnodeUpdated)||H)&&Ie(()=>{q&&ct(q,g,h,d),H&&Ht(h,d,g,"updated")},b)},V=(d,h,g,b,_,v,O)=>{for(let C=0;C<h.length;C++){const A=d[C],x=h[C],H=A.el&&(A.type===Le||!ht(A,x)||A.shapeFlag&198)?c(A.el):g;E(A,x,H,null,b,_,v,O,!0)}},J=(d,h,g,b,_)=>{if(h!==g){if(h!==fe)for(const v in h)!er(v)&&!(v in g)&&o(d,v,h[v],null,_,b);for(const v in g){if(er(v))continue;const O=g[v],C=h[v];O!==C&&v!=="value"&&o(d,v,C,O,_,b)}"value"in g&&o(d,"value",h.value,g.value,_)}},R=(d,h,g,b,_,v,O,C,A)=>{const x=h.el=d?d.el:a(""),H=h.anchor=d?d.anchor:a("");let{patchFlag:T,dynamicChildren:B,slotScopeIds:q}=h;q&&(C=C?C.concat(q):q),d==null?(r(x,g,b),r(H,g,b),te(h.children||[],g,H,_,v,O,C,A)):T>0&&T&64&&B&&d.dynamicChildren&&d.dynamicChildren.length===B.length?(V(d.dynamicChildren,B,g,_,v,O,C),(h.key!=null||_&&h===_.subTree)&&xl(d,h,!0)):Z(d,h,g,H,_,v,O,C,A)},W=(d,h,g,b,_,v,O,C,A)=>{h.slotScopeIds=C,d==null?h.shapeFlag&512?_.ctx.activate(h,g,b,O,A):de(h,g,b,_,v,O,A):ye(d,h,A)},de=(d,h,g,b,_,v,O)=>{const C=d.component=cu(d,b,_);if(us(d)&&(C.ctx.renderer=j),fu(C,!1,O),C.asyncDep){if(_&&_.registerDep(C,le,O),!d.el){const A=C.subTree=ge(we);M(null,A,h,g),d.placeholder=A.el}}else le(C,d,h,g,_,v,O)},ye=(d,h,g)=>{const b=h.component=d.component;if(Lf(d,h,g))if(b.asyncDep&&!b.asyncResolved){h.el=d.el,Y(b,h,g);return}else b.next=h,b.update();else h.el=d.el,b.vnode=h},le=(d,h,g,b,_,v,O)=>{const C=()=>{if(d.isMounted){let{next:T,bu:B,u:q,parent:X,vnode:ce}=d;{const at=wl(d);if(at){T&&(T.el=ce.el,Y(d,T,O)),at.asyncDep.then(()=>{Ie(()=>{d.isUnmounted||x()},_)});return}}let ie=T,ve;Ut(d,!1),T?(T.el=ce.el,Y(d,T,O)):T=ce,B&&ws(B),(ve=T.props&&T.props.onVnodeBeforeUpdate)&&ct(ve,X,T,ce),Ut(d,!0);const Ee=ai(d),it=d.subTree;d.subTree=Ee,E(it,Ee,c(it.el),y(it),d,_,v),T.el=Ee.el,ie===null&&Co(d,Ee.el),q&&Ie(q,_),(ve=T.props&&T.props.onVnodeUpdated)&&Ie(()=>ct(ve,X,T,ce),_)}else{let T;const{el:B,props:q}=h,{bm:X,m:ce,parent:ie,root:ve,type:Ee}=d,it=_n(h);Ut(d,!1),X&&ws(X),!it&&(T=q&&q.onVnodeBeforeMount)&&ct(T,ie,h),Ut(d,!0);{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(Ee,d.parent?d.parent.type:void 0);const at=d.subTree=ai(d);E(null,at,g,b,d,_,v),h.el=at.el}if(ce&&Ie(ce,_),!it&&(T=q&&q.onVnodeMounted)){const at=h;Ie(()=>ct(T,ie,at),_)}(h.shapeFlag&256||ie&&_n(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Ie(d.a,_),d.isMounted=!0,h=g=b=null}};d.scope.on();const A=d.effect=new Ea(C);d.scope.off();const x=d.update=A.run.bind(A),H=d.job=A.runIfDirty.bind(A);H.i=d,H.id=d.uid,A.scheduler=()=>Ao(H),Ut(d,!0),x()},Y=(d,h,g)=>{h.component=d;const b=d.vnode.props;d.vnode=h,d.next=null,jf(d,h.props,b,g),Uf(d,h.children,g),St(),Zo(d),$t()},Z=(d,h,g,b,_,v,O,C,A=!1)=>{const x=d&&d.children,H=d?d.shapeFlag:0,T=h.children,{patchFlag:B,shapeFlag:q}=h;if(B>0){if(B&128){Rt(x,T,g,b,_,v,O,C,A);return}else if(B&256){Se(x,T,g,b,_,v,O,C,A);return}}q&8?(H&16&&Ve(x,_,v),T!==x&&f(g,T)):H&16?q&16?Rt(x,T,g,b,_,v,O,C,A):Ve(x,_,v,!0):(H&8&&f(g,""),q&16&&te(T,g,b,_,v,O,C,A))},Se=(d,h,g,b,_,v,O,C,A)=>{d=d||Jt,h=h||Jt;const x=d.length,H=h.length,T=Math.min(x,H);let B;for(B=0;B<T;B++){const q=h[B]=A?_t(h[B]):Xe(h[B]);E(d[B],q,g,null,_,v,O,C,A)}x>H?Ve(d,_,v,!0,!1,T):te(h,g,b,_,v,O,C,A,T)},Rt=(d,h,g,b,_,v,O,C,A)=>{let x=0;const H=h.length;let T=d.length-1,B=H-1;for(;x<=T&&x<=B;){const q=d[x],X=h[x]=A?_t(h[x]):Xe(h[x]);if(ht(q,X))E(q,X,g,null,_,v,O,C,A);else break;x++}for(;x<=T&&x<=B;){const q=d[T],X=h[B]=A?_t(h[B]):Xe(h[B]);if(ht(q,X))E(q,X,g,null,_,v,O,C,A);else break;T--,B--}if(x>T){if(x<=B){const q=B+1,X=q<H?h[q].el:b;for(;x<=B;)E(null,h[x]=A?_t(h[x]):Xe(h[x]),g,X,_,v,O,C,A),x++}}else if(x>B)for(;x<=T;)ke(d[x],_,v,!0),x++;else{const q=x,X=x,ce=new Map;for(x=X;x<=B;x++){const Fe=h[x]=A?_t(h[x]):Xe(h[x]);Fe.key!=null&&ce.set(Fe.key,x)}let ie,ve=0;const Ee=B-X+1;let it=!1,at=0;const qn=new Array(Ee);for(x=0;x<Ee;x++)qn[x]=0;for(x=q;x<=T;x++){const Fe=d[x];if(ve>=Ee){ke(Fe,_,v,!0);continue}let lt;if(Fe.key!=null)lt=ce.get(Fe.key);else for(ie=X;ie<=B;ie++)if(qn[ie-X]===0&&ht(Fe,h[ie])){lt=ie;break}lt===void 0?ke(Fe,_,v,!0):(qn[lt-X]=x+1,lt>=at?at=lt:it=!0,E(Fe,h[lt],g,null,_,v,O,C,A),ve++)}const Uo=it?Gf(qn):Jt;for(ie=Uo.length-1,x=Ee-1;x>=0;x--){const Fe=X+x,lt=h[Fe],Vo=h[Fe+1],qo=Fe+1<H?Vo.el||El(Vo):b;qn[x]===0?E(null,lt,g,qo,_,v,O,C,A):it&&(ie<0||x!==Uo[ie]?ot(lt,g,qo,2):ie--)}}},ot=(d,h,g,b,_=null)=>{const{el:v,type:O,transition:C,children:A,shapeFlag:x}=d;if(x&6){ot(d.component.subTree,h,g,b);return}if(x&128){d.suspense.move(h,g,b);return}if(x&64){O.move(d,h,g,j);return}if(O===Le){r(v,h,g);for(let T=0;T<A.length;T++)ot(A[T],h,g,b);r(d.anchor,h,g);return}if(O===Nr){N(d,h,g);return}if(b!==2&&x&1&&C)if(b===0)C.persisted&&!v[Ke]?r(v,h,g):(C.beforeEnter(v),r(v,h,g),Ie(()=>C.enter(v),_));else{const{leave:T,delayLeave:B,afterLeave:q}=C,X=()=>{d.ctx.isUnmounted?s(v):r(v,h,g)},ce=()=>{const ie=v._isLeaving||!!v[Ke];v._isLeaving&&v[Ke](!0),C.persisted&&!ie?X():T(v,()=>{X(),q&&q()})};B?B(v,X,ce):ce()}else r(v,h,g)},ke=(d,h,g,b=!1,_=!1)=>{const{type:v,props:O,ref:C,children:A,dynamicChildren:x,shapeFlag:H,patchFlag:T,dirs:B,cacheIndex:q,memo:X}=d;if((T===-2||x&&x.hasOnce)&&(_=!1),C!=null&&(St(),rr(C,null,g,d,!0),$t()),q!=null&&(!d.ctx||d.ctx===h)&&(h.renderCache[q]=void 0),H&256){h.ctx.deactivate(d);return}const ce=H&1&&B,ie=!_n(d);let ve;if(ie&&(ve=O&&O.onVnodeBeforeUnmount)&&ct(ve,h,d),H&6)Ft(d.component,g,b);else{if(H&128){d.suspense.unmount(g,b);return}ce&&Ht(d,null,h,"beforeUnmount"),H&64?d.type.remove(d,h,g,j,b):x&&!x.hasOnce&&(v!==Le||T>0&&T&64)?Ve(x,h,g,!1,!0):(v===Le&&T&384||!_&&H&16)&&Ve(A,h,g),b&&un(d)}const Ee=X!=null&&q==null;(ie&&(ve=O&&O.onVnodeUnmounted)||ce||Ee)&&Ie(()=>{ve&&ct(ve,h,d),ce&&Ht(d,null,h,"unmounted"),Ee&&(d.el=null)},g)},un=d=>{const{type:h,el:g,anchor:b,transition:_}=d;if(h===Le){dn(g,b);return}if(h===Nr){k(d),_&&!_.persisted&&_.afterLeave&&_.afterLeave();return}const v=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:O,delayLeave:C}=_,A=()=>O(g,v);C?C(d.el,v,A):A()}else v()},dn=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Ft=(d,h,g)=>{const{bum:b,scope:_,job:v,subTree:O,um:C,m:A,a:x}=d;fi(A),fi(x),b&&ws(b),_.stop(),v?(v.flags|=8,ke(O,d,h,g)):d.vnode.el&&O&&(O.transition=d.vnode.transition,ke(O,d,h,g)),C&&Ie(C,h),Ie(()=>{d.isUnmounted=!0},h)},Ve=(d,h,g,b=!1,_=!1,v=0)=>{for(let O=v;O<d.length;O++)ke(d[O],h,g,b,_)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[lf];return g?p(g):h};let I=!1;const P=(d,h,g)=>{let b;d==null?h._vnode&&(ke(h._vnode,null,null,!0),b=h._vnode.component):E(h._vnode||null,d,h,null,null,null,g),h._vnode=d,I||(I=!0,Zo(b),Ha(),I=!1)},j={p:E,um:ke,m:ot,r:un,mt:de,mc:te,pc:Z,pbc:V,n:y,o:e};return{render:P,hydrate:void 0,createApp:Pf(P)}}function Rs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ut({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Kf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function xl(e,t,n=!1){const r=e.children,s=t.children;if(U(r)&&U(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=_t(s[o]),a.el=i.el),!n&&a.patchFlag!==-2&&xl(i,a)),a.type===ps&&(a.patchFlag===-1&&(a=s[o]=_t(a)),a.el=i.el),a.type===we&&!a.el&&(a.el=i.el)}}function Gf(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<u?o=a+1:i=a;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function wl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wl(t)}function fi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function El(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?El(t.subTree):null}const Al=e=>e.__isSuspense;let eo=0;const Wf={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,o,i,a,l,u){if(e==null)Yf(t,n,r,s,o,i,a,l,u);else{if(o&&o.deps>0&&!e.suspense.isInFallback&&!o.isHydrating){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}Qf(e,t,n,r,s,i,a,l,u)}},hydrate:Zf,normalize:Xf},Jf=Wf;function dr(e,t){const n=e.props&&e.props[t];K(n)&&n()}function Yf(e,t,n,r,s,o,i,a,l){const{p:u,o:{createElement:f}}=l,c=f("div"),p=e.suspense=Cl(e,s,r,t,c,n,o,i,a,l);u(null,p.pendingBranch=e.ssContent,c,null,r,p,o,i),p.deps>0?(dr(e,"onPending"),dr(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,o,i),wn(p,e.ssFallback)):p.resolve(!1,!0)}function Qf(e,t,n,r,s,o,i,a,{p:l,um:u,o:{createElement:f}}){const c=t.suspense=e.suspense;c.vnode=t,t.el=e.el;const p=t.ssContent,m=t.ssFallback,{activeBranch:w,pendingBranch:E,isInFallback:z,isHydrating:M}=c;if(E)c.pendingBranch=p,ht(E,p)?(c.deps++,l(E,p,M?n:c.hiddenContainer,null,s,c,o,i,a),c.deps--,c.deps<=0?c.resolve():z&&!M&&!c.isFallbackMountPending&&(l(w,m,n,r,s,null,o,i,a),wn(c,m))):(c.pendingId=eo++,M?(c.isHydrating=!1,c.activeBranch=E):u(E,s,c),c.deps=0,c.effects.length=0,c.hiddenContainer=f("div"),z?(l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0?c.resolve():c.isFallbackMountPending||(l(w,m,n,r,s,null,o,i,a),wn(c,m))):w&&ht(w,p)?(l(w,p,n,r,s,c,o,i,a),c.resolve(!0)):(l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0&&c.resolve()));else if(w&&ht(w,p))l(w,p,n,r,s,c,o,i,a),wn(c,p);else if(dr(t,"onPending"),c.pendingBranch=p,p.shapeFlag&512?c.pendingId=p.component.suspenseId:c.pendingId=eo++,l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0)c.resolve();else{const{timeout:S,pendingId:N}=c;S>0?setTimeout(()=>{c.pendingId===N&&c.fallback(m)},S):S===0&&c.fallback(m)}}function Cl(e,t,n,r,s,o,i,a,l,u,f=!1){const{p:c,m:p,um:m,n:w,o:{parentNode:E,remove:z}}=u;let M;const S=tu(e);S&&t&&t.pendingBranch&&(M=t.pendingId,t.deps++);const N=e.props?ya(e.props.timeout):void 0,k=o,$={vnode:e,parent:t,parentComponent:n,namespace:i,container:r,hiddenContainer:s,deps:0,pendingId:eo++,timeout:typeof N=="number"?N:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(L=!1,G=!1){const{vnode:te,activeBranch:D,pendingBranch:V,pendingId:J,effects:R,parentComponent:W,container:de,isInFallback:ye}=$;let le=!1;if($.isHydrating)$.isHydrating=!1;else if(!L){le=D&&V.transition&&V.transition.mode==="out-in";let Se=!1;le&&(D.transition.afterLeave=()=>{J===$.pendingId&&(p(V,de,o===k&&!Se?w(D):o,0),Gs(R),ye&&te.ssFallback&&(te.ssFallback.el=null))}),D&&!$.isFallbackMountPending&&(E(D.el)===de&&(o=w(D),Se=!0),m(D,W,$,!0),!le&&ye&&te.ssFallback&&Ie(()=>te.ssFallback.el=null,$)),le||p(V,de,o,0)}$.isFallbackMountPending=!1,wn($,V),$.pendingBranch=null,$.isInFallback=!1;let Y=$.parent,Z=!1;for(;Y;){if(Y.pendingBranch){for(let Se=0;Se<R.length;Se++)Y.effects.push(R[Se]);Z=!0;break}Y=Y.parent}!Z&&!le&&Gs(R),$.effects=[],S&&t&&t.pendingBranch&&M===t.pendingId&&(M=void 0,t.deps--,t.deps===0&&!G&&t.resolve()),dr(te,"onResolve")},fallback(L){if(!$.pendingBranch)return;const{vnode:G,activeBranch:te,parentComponent:D,container:V,namespace:J}=$;dr(G,"onFallback");const R=w(te),W=()=>{if($.isFallbackMountPending=!1,!$.isInFallback)return;const ye=$.vnode.ssFallback;c(null,ye,V,R,D,null,J,a,l),wn($,ye)},de=L.transition&&L.transition.mode==="out-in";de&&($.isFallbackMountPending=!0,te.transition.afterLeave=W),$.isInFallback=!0,m(te,D,null,!0),de||W()},move(L,G,te){$.activeBranch&&p($.activeBranch,L,G,te),$.container=L},next(){return $.activeBranch&&w($.activeBranch)},registerDep(L,G,te){const D=!!$.pendingBranch;D&&$.deps++;const V=L.vnode.el;L.asyncDep.catch(J=>{Ar(J,L,0)}).then(J=>{if(L.isUnmounted||$.isUnmounted||$.pendingId!==L.suspenseId)return;if(to(),V&&!L.scope.active){D&&--$.deps===0&&$.resolve();return}L.asyncResolved=!0;const{vnode:R}=L;no(L,J),V&&(R.el=V);const W=!V&&L.subTree.el;G(L,R,E(V||L.subTree.el),V?null:w(L.subTree),$,i,te),W&&(R.placeholder=null,z(W)),Co(L,R.el),D&&--$.deps===0&&$.resolve()})},unmount(L,G){$.isUnmounted=!0,$.activeBranch&&m($.activeBranch,n,L,G),$.pendingBranch&&m($.pendingBranch,n,L,G)}};return $}function Zf(e,t,n,r,s,o,i,a,l){const u=t.suspense=Cl(t,r,n,e.parentNode,document.createElement("div"),null,s,o,i,a,!0),f=l(e,u.pendingBranch=t.ssContent,n,u,o,i);return u.deps===0&&u.resolve(!1,!0),f}function Xf(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=ui(r?n.default:n),e.ssFallback=r?ui(n.fallback):ge(we)}function ui(e){let t;if(K(e)){const n=Dn&&e._c;n&&(e._d=!1,Ge()),e=e(),n&&(e._d=!0,t=je,ms())}return U(e)&&(e=If(e)),e=Xe(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function eu(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):Gs(e)}function wn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Co(r,s))}function tu(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Le=Symbol.for("v-fgt"),ps=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),Nr=Symbol.for("v-stc"),Ct=[];let je=null;function Ge(e=!1){Ct.push(je=e?null:[])}function ms(){Ct.pop(),je=Ct[Ct.length-1]||null}let Dn=1;function Vr(e,t=!1){Dn+=e,e<0&&je&&t&&(je.hasOnce=!0)}function Sl(e){return e.dynamicChildren=Dn>0?je||Jt:null,ms(),Dn>0&&je&&je.push(e),e}function mn(e,t,n,r,s,o){return Sl(pe(e,t,n,r,s,o,!0))}function hr(e,t,n,r,s){return Sl(ge(e,t,n,r,s,!0))}function Ln(e){return e?e.__v_isVNode===!0:!1}function ht(e,t){return e.type===t.type&&e.key===t.key}const $l=({key:e})=>e??null,Ir=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||Re(e)||K(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function pe(e,t=null,n=null,r=0,s=null,o=e===Le?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$l(t),ref:t&&Ir(t),scopeId:Va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ce};return a?(qr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),Dn>0&&!i&&je&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&je.push(l),l}const ge=nu;function nu(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===ol)&&(e=we),Ln(e)){const a=jt(e,t,!0);return n&&qr(a,n),Dn>0&&!o&&je&&(a.shapeFlag&6?je[je.indexOf(e)]=a:je.push(a)),a.patchFlag=-2,a}if(mu(e)&&(e=e.__vccOpts),t){t=ru(t);let{class:a,style:l}=t;a&&!he(a)&&(t.class=is(a)),oe(l)&&(Eo(l)&&!U(l)&&(l=xe({},l)),t.style=go(l))}const i=he(e)?1:Al(e)?128:fs(e)?64:oe(e)?4:K(e)?2:0;return pe(e,t,n,r,s,i,o,!0)}function ru(e){return e?Eo(e)||ml(e)?xe({},e):e:null}function jt(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,u=t?iu(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&$l(u),ref:t&&t.ref?n&&o?U(o)?o.concat(Ir(t)):[o,Ir(t)]:Ir(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&r&&ur(f,l.clone(f)),f}function Ol(e=" ",t=0){return ge(ps,null,e,t)}function su(e,t){const n=ge(Nr,null,e);return n.staticCount=t,n}function ou(e="",t=!1){return t?(Ge(),hr(we,null,e)):ge(we,null,e)}function Xe(e){return e==null||typeof e=="boolean"?ge(we):U(e)?ge(Le,null,e.slice()):Ln(e)?_t(e):ge(ps,null,String(e))}function _t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function qr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),qr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!ml(t)?t._ctx=Ce:s===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(K(t)){if(r&65){qr(e,{default:t});return}t={default:t,_ctx:Ce},n=32}else t=String(t),r&64?(n=16,t=[Ol(t)]):n=8;e.children=t,e.shapeFlag|=n}function iu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=is([t.class,r.class]));else if(s==="style")t.style=go([t.style,r.style]);else if(ts(s)){const o=t[s],i=r[s];i&&o!==i&&!(U(o)&&o.includes(i))?t[s]=o?[].concat(o,i):i:i==null&&o==null&&!ns(s)&&(t[s]=i)}else s!==""&&(t[s]=r[s])}return t}function ct(e,t,n,r=null){Ye(e,t,7,[n,r])}const au=fl();let lu=0;function cu(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||au,o={uid:lu++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vl(r,s),emitsOptions:ul(r,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:r.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=kf.bind(null,o),e.ce&&e.ce(o),o}let Oe=null;const Rl=()=>Oe||Ce;let Kr,pr;{const e=os(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Kr=t("__VUE_INSTANCE_SETTERS__",n=>Oe=n),pr=t("__VUE_SSR_SETTERS__",n=>mr=n)}const Cr=e=>{const t=Oe;return Kr(e),e.scope.on(),()=>{e.scope.off(),Kr(t)}},to=()=>{Oe&&Oe.scope.off(),Kr(null)};function Pl(e){return e.vnode.shapeFlag&4}let mr=!1;function fu(e,t=!1,n=!1){t&&pr(t);const{props:r,children:s}=e.vnode,o=Pl(e);zf(e,r,o,t),Hf(e,s,n||t);const i=o?uu(e,t):void 0;return t&&pr(!1),i}function uu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ef);const{setup:r}=n;if(r){St();const s=e.setupContext=r.length>1?hu(e):null,o=Cr(e),i=Er(r,e,0,[e.props,s]),a=ma(i);if($t(),o(),(a||e.sp)&&!_n(e)&&Xa(e),a){if(i.then(to,to),t)return i.then(l=>{pr(!0);try{no(e,l,t)}finally{pr(!1)}}).catch(l=>{Ar(l,e,0)});e.asyncDep=i}else no(e,i)}else Tl(e)}function no(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=ja(t)),Tl(e)}function Tl(e,t,n){const r=e.type;e.render||(e.render=r.render||pt);{const s=Cr(e);St();try{Af(e)}finally{$t(),s()}}}const du={get(e,t){return $e(e,"get",""),e[t]}};function hu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,du),slots:e.slots,emit:e.emit,expose:t}}function gs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ja(Gc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in sr)return sr[n](e)},has(t,n){return n in t||n in sr}})):e.proxy}function pu(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function mu(e){return K(e)&&"__vccOpts"in e}const et=(e,t)=>Xc(e,t,mr);function Oo(e,t,n){try{Vr(-1);const r=arguments.length;return r===2?oe(t)&&!U(t)?Ln(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ln(n)&&(n=[n]),ge(e,t,n))}finally{Vr(1)}}const gu="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ro;const di=typeof window<"u"&&window.trustedTypes;if(di)try{ro=di.createPolicy("vue",{createHTML:e=>e})}catch{}const kl=ro?e=>ro.createHTML(e):e=>e,vu="http://www.w3.org/2000/svg",bu="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,hi=yt&&yt.createElement("template"),yu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?yt.createElementNS(vu,e):t==="mathml"?yt.createElementNS(bu,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{hi.innerHTML=kl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=hi.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pt="transition",Wn="animation",gr=Symbol("_vtc"),Nl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_u=xe({},Ga,Nl),xu=e=>(e.displayName="Transition",e.props=_u,e),wu=xu((e,{slots:t})=>Oo(uf,Eu(e),t)),Vt=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},pi=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function Eu(e){const t={};for(const R in e)R in Nl||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=i,appearToClass:f=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,w=Au(s),E=w&&w[0],z=w&&w[1],{onBeforeEnter:M,onEnter:S,onEnterCancelled:N,onLeave:k,onLeaveCancelled:$,onBeforeAppear:L=M,onAppear:G=S,onAppearCancelled:te=N}=t,D=(R,W,de,ye)=>{R._enterCancelled=ye,qt(R,W?f:a),qt(R,W?u:i),de&&de()},V=(R,W)=>{R._isLeaving=!1,qt(R,c),qt(R,m),qt(R,p),W&&W()},J=R=>(W,de)=>{const ye=R?G:S,le=()=>D(W,R,de);Vt(ye,[W,le]),mi(()=>{qt(W,R?l:o),vt(W,R?f:a),pi(ye)||gi(W,r,E,le)})};return xe(t,{onBeforeEnter(R){Vt(M,[R]),vt(R,o),vt(R,i)},onBeforeAppear(R){Vt(L,[R]),vt(R,l),vt(R,u)},onEnter:J(!1),onAppear:J(!0),onLeave(R,W){R._isLeaving=!0;const de=()=>V(R,W);vt(R,c),R._enterCancelled?(vt(R,p),yi(R)):(yi(R),vt(R,p)),mi(()=>{R._isLeaving&&(qt(R,c),vt(R,m),pi(k)||gi(R,r,z,de))}),Vt(k,[R,de])},onEnterCancelled(R){D(R,!1,void 0,!0),Vt(N,[R])},onAppearCancelled(R){D(R,!0,void 0,!0),Vt(te,[R])},onLeaveCancelled(R){V(R),Vt($,[R])}})}function Au(e){if(e==null)return null;if(oe(e))return[Ps(e.enter),Ps(e.leave)];{const t=Ps(e);return[t,t]}}function Ps(e){return ya(e)}function vt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[gr]||(e[gr]=new Set)).add(t)}function qt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[gr];n&&(n.delete(t),n.size||(e[gr]=void 0))}function mi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cu=0;function gi(e,t,n,r){const s=e._endId=++Cu,o=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=Su(e,t);if(!i)return r();const u=i+"end";let f=0;const c=()=>{e.removeEventListener(u,p),o()},p=m=>{m.target===e&&++f>=l&&c()};setTimeout(()=>{f<l&&c()},a+1),e.addEventListener(u,p)}function Su(e,t){const n=window.getComputedStyle(e),r=w=>(n[w]||"").split(", "),s=r(`${Pt}Delay`),o=r(`${Pt}Duration`),i=vi(s,o),a=r(`${Wn}Delay`),l=r(`${Wn}Duration`),u=vi(a,l);let f=null,c=0,p=0;t===Pt?i>0&&(f=Pt,c=i,p=o.length):t===Wn?u>0&&(f=Wn,c=u,p=l.length):(c=Math.max(i,u),f=c>0?i>u?Pt:Wn:null,p=f?f===Pt?o.length:l.length:0);const m=f===Pt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Pt}Property`).toString());return{type:f,timeout:c,propCount:p,hasTransform:m}}function vi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>bi(n)+bi(e[r])))}function bi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function yi(e){return(e?e.ownerDocument:document).body.offsetHeight}function $u(e,t,n){const r=e[gr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Gr=Symbol("_vod"),Il=Symbol("_vsh"),kp={name:"show",beforeMount(e,{value:t},{transition:n}){e[Gr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Jn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Jn(e,!0),r.enter(e)):r.leave(e,()=>{Jn(e,!1)}):Jn(e,t))},beforeUnmount(e,{value:t}){Jn(e,t)}};function Jn(e,t){e.style.display=t?e[Gr]:"none",e[Il]=!t}const Ou=Symbol(""),Ru=/(?:^|;)\s*display\s*:/;function Pu(e,t,n){const r=e.style,s=he(n);let o=!1;if(n&&!s){if(t)if(he(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Xn(r,a,"")}else for(const i in t)n[i]==null&&Xn(r,i,"");for(const i in n){i==="display"&&(o=!0);const a=n[i];a!=null?ku(e,i,!he(t)&&t?t[i]:void 0,a)||Xn(r,i,a):Xn(r,i,"")}}else if(s){if(t!==n){const i=r[Ou];i&&(n+=";"+i),r.cssText=n,o=Ru.test(n)}}else t&&e.removeAttribute("style");Gr in e&&(e[Gr]=o?r.display:"",e[Il]&&(r.display="none"))}const Rr=/\s*!important$/;function Xn(e,t,n){if(U(n))n.forEach(r=>Xn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Rr.test(n)?e.setProperty(t,n.replace(Rr,""),"important"):e.setProperty(t,n);else{const r=Tu(e,t);Rr.test(n)?e.setProperty(Bt(r),n.replace(Rr,""),"important"):e[r]=n}}const _i=["Webkit","Moz","ms"],Ts={};function Tu(e,t){const n=Ts[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return Ts[t]=r;r=ss(r);for(let s=0;s<_i.length;s++){const o=_i[s]+r;if(o in e)return Ts[t]=o}return t}function ku(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&he(r)&&n===r}const xi="http://www.w3.org/1999/xlink";function wi(e,t,n,r,s,o=Cc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(xi,t.slice(6,t.length)):e.setAttributeNS(xi,t,n):n==null||o&&!_a(n)?e.removeAttribute(t):e.setAttribute(t,o?"":nt(n)?String(n):n)}function Ei(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?kl(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=_a(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function Nu(e,t,n,r){e.addEventListener(t,n,r)}function Iu(e,t,n,r){e.removeEventListener(t,n,r)}const Ai=Symbol("_vei");function Mu(e,t,n,r,s=null){const o=e[Ai]||(e[Ai]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=zu(t);if(r){const u=o[t]=Fu(r,s);Nu(e,a,u,l)}else i&&(Iu(e,a,i,l),o[t]=void 0)}}const Du=/(Once|Passive|Capture)$/,Lu=/^on:?(?:Once|Passive|Capture)$/;function zu(e){let t,n;for(;(n=e.match(Du))&&!Lu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let ks=0;const ju=Promise.resolve(),Bu=()=>ks||(ju.then(()=>ks=0),ks=Date.now());function Fu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(U(s)){const o=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{o.call(r),r._stopped=!0};const i=s.slice(),a=[r];for(let l=0;l<i.length&&!r._stopped;l++){const u=i[l];u&&Ye(u,t,5,a)}}else Ye(s,t,5,[r])};return n.value=e,n.attached=Bu(),n}const Ci=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hu=(e,t,n,r,s,o)=>{const i=s==="svg";t==="class"?$u(e,r,i):t==="style"?Pu(e,n,r):ts(t)?ns(t)||Mu(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Uu(e,t,r,i))?(Ei(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&wi(e,t,r,i,o,t!=="value")):e._isVueCE&&(Vu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!he(r)))?Ei(e,ze(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wi(e,t,r,i))};function Uu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ci(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ci(t)&&he(n)?!1:t in e}function Vu(e,t){const n=e._def.props;if(!n)return!1;const r=ze(t);return Array.isArray(n)?n.some(s=>ze(s)===r):Object.keys(n).some(s=>ze(s)===r)}const qu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Np=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const o=Bt(s.key);if(t.some(i=>i===o||qu[i]===o))return e(s)})},Ku=xe({patchProp:Hu},yu);let Si;function Gu(){return Si||(Si=Vf(Ku))}const Wu=(...e)=>{const t=Gu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Yu(r);if(!s)return;const o=t._component;!K(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,Ju(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Ju(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Yu(e){return he(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=globalThis,Ro=Mr.ShadowRoot&&(Mr.ShadyCSS===void 0||Mr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Po=Symbol(),$i=new WeakMap;let Ml=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Po)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ro&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=$i.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$i.set(n,t))}return t}toString(){return this.cssText}};const Qu=e=>new Ml(typeof e=="string"?e:e+"",void 0,Po),Pe=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,o)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new Ml(n,e,Po)},Zu=(e,t)=>{if(Ro)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=Mr.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},Oi=Ro?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Qu(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xu,defineProperty:ed,getOwnPropertyDescriptor:td,getOwnPropertyNames:nd,getOwnPropertySymbols:rd,getPrototypeOf:sd}=Object,Lt=globalThis,Ri=Lt.trustedTypes,od=Ri?Ri.emptyScript:"",Ns=Lt.reactiveElementPolyfillSupport,or=(e,t)=>e,Wr={toAttribute(e,t){switch(t){case Boolean:e=e?od:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},To=(e,t)=>!Xu(e,t),Pi={attribute:!0,type:String,converter:Wr,reflect:!1,useDefault:!1,hasChanged:To};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Lt.litPropertyMetadata??(Lt.litPropertyMetadata=new WeakMap);let gn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Pi){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&ed(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:o}=td(this.prototype,t)??{get(){return this[n]},set(i){this[n]=i}};return{get:s,set(i){const a=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pi}static _$Ei(){if(this.hasOwnProperty(or("elementProperties")))return;const t=sd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(or("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(or("properties"))){const n=this.properties,r=[...nd(n),...rd(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(Oi(s))}else t!==void 0&&n.push(Oi(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Wr).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){var o,i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=r.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Wr;this._$Em=s;const u=l.fromAttribute(n,a.type);this[s]=u??((i=this._$Ej)==null?void 0:i.get(s))??u,this._$Em=null}}requestUpdate(t,n,r,s=!1,o){var i;if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??To)(o,n)||r.useDefault&&r.reflect&&o===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:o},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??n??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:a}=i,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};gn.elementStyles=[],gn.shadowRootOptions={mode:"open"},gn[or("elementProperties")]=new Map,gn[or("finalized")]=new Map,Ns==null||Ns({ReactiveElement:gn}),(Lt.reactiveElementVersions??(Lt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=globalThis,Ti=e=>e,Jr=ir.trustedTypes,ki=Jr?Jr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Dl="$lit$",It=`lit$${Math.random().toFixed(9).slice(2)}$`,Ll="?"+It,id=`<${Ll}>`,rn=document,vr=()=>rn.createComment(""),br=e=>e===null||typeof e!="object"&&typeof e!="function",ko=Array.isArray,ad=e=>ko(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Is=`[ 	
\f\r]`,Yn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ni=/-->/g,Ii=/>/g,Kt=RegExp(`>|${Is}(?:([^\\s"'>=/]+)(${Is}*=${Is}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mi=/'/g,Di=/"/g,zl=/^(?:script|style|textarea|title)$/i,jl=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ae=jl(1),Li=jl(2),zn=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),zi=new WeakMap,Yt=rn.createTreeWalker(rn,129);function Bl(e,t){if(!ko(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ki!==void 0?ki.createHTML(t):t}const ld=(e,t)=>{const n=e.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",i=Yn;for(let a=0;a<n;a++){const l=e[a];let u,f,c=-1,p=0;for(;p<l.length&&(i.lastIndex=p,f=i.exec(l),f!==null);)p=i.lastIndex,i===Yn?f[1]==="!--"?i=Ni:f[1]!==void 0?i=Ii:f[2]!==void 0?(zl.test(f[2])&&(s=RegExp("</"+f[2],"g")),i=Kt):f[3]!==void 0&&(i=Kt):i===Kt?f[0]===">"?(i=s??Yn,c=-1):f[1]===void 0?c=-2:(c=i.lastIndex-f[2].length,u=f[1],i=f[3]===void 0?Kt:f[3]==='"'?Di:Mi):i===Di||i===Mi?i=Kt:i===Ni||i===Ii?i=Yn:(i=Kt,s=void 0);const m=i===Kt&&e[a+1].startsWith("/>")?" ":"";o+=i===Yn?l+id:c>=0?(r.push(u),l.slice(0,c)+Dl+l.slice(c)+It+m):l+It+(c===-2?a:m)}return[Bl(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let so=class Fl{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let o=0,i=0;const a=t.length-1,l=this.parts,[u,f]=ld(t,n);if(this.el=Fl.createElement(u,r),Yt.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=Yt.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Dl)){const p=f[i++],m=s.getAttribute(c).split(It),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:w[2],strings:m,ctor:w[1]==="."?fd:w[1]==="?"?ud:w[1]==="@"?dd:vs}),s.removeAttribute(c)}else c.startsWith(It)&&(l.push({type:6,index:o}),s.removeAttribute(c));if(zl.test(s.tagName)){const c=s.textContent.split(It),p=c.length-1;if(p>0){s.textContent=Jr?Jr.emptyScript:"";for(let m=0;m<p;m++)s.append(c[m],vr()),Yt.nextNode(),l.push({type:2,index:++o});s.append(c[p],vr())}}}else if(s.nodeType===8)if(s.data===Ll)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(It,c+1))!==-1;)l.push({type:7,index:o}),c+=It.length-1}o++}}static createElement(t,n){const r=rn.createElement("template");return r.innerHTML=t,r}};function jn(e,t,n=e,r){var i,a;if(t===zn)return t;let s=r!==void 0?(i=n._$Co)==null?void 0:i[r]:n._$Cl;const o=br(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=s:n._$Cl=s),s!==void 0&&(t=jn(e,s._$AS(e,t.values),s,r)),t}class cd{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??rn).importNode(n,!0);Yt.currentNode=s;let o=Yt.nextNode(),i=0,a=0,l=r[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new No(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new hd(o,this,t)),this._$AV.push(u),l=r[++a]}i!==(l==null?void 0:l.index)&&(o=Yt.nextNode(),i++)}return Yt.currentNode=rn,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}let No=class Hl{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=jn(this,t,n),br(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==zn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ad(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&br(this._$AH)?this._$AA.nextSibling.data=t:this.T(rn.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=so.createElement(Bl(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(n);else{const i=new cd(s,this),a=i.u(this.options);i.p(n),this.T(a),this._$AH=i}}_$AC(t){let n=zi.get(t.strings);return n===void 0&&zi.set(t.strings,n=new so(t)),n}k(t){ko(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const o of t)s===n.length?n.push(r=new Hl(this.O(vr()),this.O(vr()),this,this.options)):r=n[s],r._$AI(o),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t!==this._$AB;){const s=Ti(t).nextSibling;Ti(t).remove(),t=s}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},vs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,o){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(t,n=this,r,s){const o=this.strings;let i=!1;if(o===void 0)t=jn(this,t,n,0),i=!br(t)||t!==this._$AH&&t!==zn,i&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=jn(this,a[r+l],n,l),u===zn&&(u=this._$AH[l]),i||(i=!br(u)||u!==this._$AH[l]),u===se?t=se:t!==se&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}i&&!s&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},fd=class extends vs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}};class ud extends vs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}let dd=class extends vs{constructor(t,n,r,s,o){super(t,n,r,s,o),this.type=5}_$AI(t,n=this){if((t=jn(this,t,n,0)??se)===zn)return;const r=this._$AH,s=t===se&&r!==se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==se&&(r===se||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class hd{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){jn(this,t)}}const Ms=ir.litHtmlPolyfillSupport;Ms==null||Ms(so,No),(ir.litHtmlVersions??(ir.litHtmlVersions=[])).push("3.3.3");const pd=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=s=new No(t.insertBefore(vr(),o),o,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=globalThis;let be=class extends gn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pd(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return zn}};var ha;be._$litElement$=!0,be.finalized=!0,(ha=Xt.litElementHydrateSupport)==null||ha.call(Xt,{LitElement:be});const Ds=Xt.litElementPolyfillSupport;Ds==null||Ds({LitElement:be});(Xt.litElementVersions??(Xt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const md={attribute:!0,type:String,converter:Wr,reflect:!1,hasChanged:To},gd=(e=md,t,n)=>{const{kind:r,metadata:s}=n;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:i}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,l,e,!0,a)},init(a){return a!==void 0&&this.C(i,void 0,e,a),a}}}if(r==="setter"){const{name:i}=n;return function(a){const l=this[i];t.call(this,a),this.requestUpdate(i,l,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function F(e){return(t,n)=>typeof n=="object"?gd(e,t,n):((r,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,r),i?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ul=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vd(e,t){return(n,r,s)=>{const o=i=>{var a;return((a=i.renderRoot)==null?void 0:a.querySelector(e))??null};return Ul(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Io(e){return(t,n)=>{const{slot:r,selector:s}=e??{},o="slot"+(r?`[name=${r}]`:":not([name])");return Ul(t,n,{get(){var l;const i=(l=this.renderRoot)==null?void 0:l.querySelector(o),a=(i==null?void 0:i.assignedElements(e))??[];return s===void 0?a:a.filter(u=>u.matches(s))}})}}var cn=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},En;let Yr=(En=class extends be{constructor(){super(),this.exclusive=!1,this._onToggle=t=>{if(!this.exclusive)return;const n=t.target;if(n.open)for(const r of this._items)r!==n&&r.open&&(r.open=!1)},this.addEventListener("mfp-accordion-toggle",this._onToggle)}render(){return ae`<slot></slot>`}},En.styles=Pe`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            border: var(--size-border-width-thin, 1px) solid var(--color-border-default, #e5e7eb);
            border-radius: var(--radius-control, 8px);
            overflow: hidden;
        }

        ::slotted(mfp-accordion-item) {
            display: block;
        }

        ::slotted(mfp-accordion-item:not(:last-of-type)) {
            border-bottom: var(--size-border-width-thin, 1px) solid
                var(--color-border-default, #e5e7eb);
        }
    `,En);cn([F({type:Boolean})],Yr.prototype,"exclusive",void 0);cn([Io({selector:"mfp-accordion-item"})],Yr.prototype,"_items",void 0);Yr=cn([Te("mfp-accordion")],Yr);var An;let yr=(An=class extends be{constructor(){super(...arguments),this.label="",this.open=!1,this.disabled=!1,this._onToggle=t=>{const n=t.target;this.open!==n.open&&(this.open=n.open),this.dispatchEvent(new CustomEvent("mfp-accordion-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})),this.dispatchEvent(new CustomEvent("mfp-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}}))}}render(){return ae`
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
        `}},An.styles=Pe`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            color: var(--color-text-default, #111827);
            background: var(--color-background-default, #ffffff);
        }

        details > summary {
            list-style: none;
            cursor: pointer;
            padding: var(--space-component-md, 12px) var(--space-component-lg, 16px);
            display: flex;
            align-items: center;
            gap: var(--space-inline-md, 12px);
            font-size: var(--text-body-md, 16px);
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
            outline: var(--focus-ring-width, 2px) var(--focus-ring-style, solid)
                var(--focus-ring-color, #2563eb);
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
            padding: 0 var(--space-component-lg, 16px) var(--space-component-lg, 16px);
            font-size: var(--text-body-md, 16px);
            line-height: var(--font-line-height-normal, 1.5);
            color: var(--color-text-default, #111827);
        }

        :host([disabled]) details > summary {
            cursor: not-allowed;
            opacity: var(--opacity-disabled, 0.5);
            pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
            details > summary,
            .chevron {
                transition: none;
            }
        }
    `,An);cn([F()],yr.prototype,"label",void 0);cn([F({type:Boolean,reflect:!0})],yr.prototype,"open",void 0);cn([F({type:Boolean,reflect:!0})],yr.prototype,"disabled",void 0);yr=cn([Te("mfp-accordion-item")],yr);var bs=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Cn;let _r=(Cn=class extends be{constructor(){super(...arguments),this.variant="neutral",this.size="sm",this.outlined=!1}render(){return ae`<slot></slot>`}},Cn.styles=Pe`
        :host {
            display: inline-flex;
            align-items: center;
            gap: var(--space-inline-xs, 4px);
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            border-radius: var(--radius-pill, 9999px);
            padding: 2px var(--space-component-sm, 8px);
            white-space: nowrap;
            background: var(--color-background-muted, #f3f4f6);
            color: var(--color-text-default, #111827);
            border: var(--size-border-width-thin, 1px) solid transparent;
        }

        :host([size='sm']),
        :host(:not([size])) {
            font-size: var(--font-size-2xs, 10px);
            padding: 2px var(--space-component-sm, 8px);
        }
        :host([size='md']) {
            font-size: var(--text-caption, 12px);
            padding: 4px var(--space-component-md, 12px);
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
    `,Cn);bs([F({reflect:!0})],_r.prototype,"variant",void 0);bs([F({reflect:!0})],_r.prototype,"size",void 0);bs([F({type:Boolean,reflect:!0})],_r.prototype,"outlined",void 0);_r=bs([Te("mfp-badge")],_r);var Un=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},en;let sn=(en=class extends be{constructor(){super(),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this._onClick=()=>{var t,n;this.disabled||this.loading||(this.type==="submit"?(t=this.form)==null||t.requestSubmit():this.type==="reset"&&((n=this.form)==null||n.reset()))},this._internals=this.attachInternals()}get form(){return this._internals.form}render(){const t=this.disabled||this.loading;return ae`
            <button
                type="button"
                ?disabled=${t}
                aria-busy=${this.loading?"true":"false"}
                part="button"
                @click=${this._onClick}
            >
                ${this.loading?ae`<span class="spinner" aria-hidden="true"></span>`:""}
                <slot></slot>
            </button>
        `}},en.formAssociated=!0,en.styles=Pe`
        :host {
            display: inline-block;
        }

        button {
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            border: var(--size-border-width-thin, 1px) solid transparent;
            border-radius: var(--radius-control, 8px);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: var(--space-inline-sm, 8px);
            white-space: nowrap;
            user-select: none;
            transition:
                background var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                box-shadow var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease);
        }

        button:focus-visible {
            outline: var(--focus-ring-width, 2px) var(--focus-ring-style, solid)
                var(--focus-ring-color, #2563eb);
            outline-offset: var(--focus-ring-offset, 2px);
        }

        button:disabled {
            cursor: not-allowed;
            opacity: var(--opacity-disabled, 0.5);
        }

        /* Sizes — fall back to medium when no [size] attribute is set */
        :host(:not([size])) button,
        :host([size='md']) button {
            padding: var(--space-component-sm, 8px) var(--space-component-md, 16px);
            font-size: var(--font-size-base, 16px);
            min-height: var(--size-control-md, 40px);
        }
        :host([size='sm']) button {
            padding: var(--space-component-xs, 4px) var(--space-component-md, 12px);
            font-size: var(--text-button, 14px);
            min-height: var(--size-control-sm, 32px);
        }
        :host([size='lg']) button {
            padding: var(--space-component-md, 12px) var(--space-component-lg, 20px);
            font-size: var(--text-body-lg, 18px);
            min-height: var(--size-control-lg, 48px);
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
            background: var(--color-background-default, #ffffff);
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
            border: var(--size-border-width-medium, 2px) solid currentColor;
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
    `,en);Un([F({reflect:!0})],sn.prototype,"variant",void 0);Un([F({reflect:!0})],sn.prototype,"size",void 0);Un([F({type:Boolean,reflect:!0})],sn.prototype,"disabled",void 0);Un([F({type:Boolean,reflect:!0})],sn.prototype,"loading",void 0);Un([F()],sn.prototype,"type",void 0);sn=Un([Te("mfp-button")],sn);var Mo=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Sn;let Qr=(Sn=class extends be{constructor(){super(...arguments),this.variant="default",this.padding="default",this._onSlotChange=t=>{const n=t.target,r=n.parentElement;if(!r)return;n.assignedNodes({flatten:!0}).length>0?r.removeAttribute("data-empty"):r.setAttribute("data-empty","")}}render(){return ae`
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
        `}},Sn.styles=Pe`
        :host {
            display: block;
            background: var(--color-background-default, #ffffff);
            border-radius: var(--radius-surface, 12px);
            color: var(--color-text-default, #111827);
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
        }

        /* Variants — fall back to default when no [variant] attribute is set */
        :host(:not([variant])),
        :host([variant='default']) {
            border: var(--size-border-width-thin, 1px) solid var(--color-border-default, #e5e7eb);
            box-shadow: var(--elevation-subtle, 0 1px 2px rgba(0, 0, 0, 0.05));
        }
        :host([variant='flat']) {
            border: var(--size-border-width-thin, 1px) solid var(--color-border-default, #e5e7eb);
            box-shadow: none;
        }
        :host([variant='elevated']) {
            border: none;
            box-shadow: var(--elevation-overlay, 0 4px 12px rgba(0, 0, 0, 0.1));
        }

        .surface {
            display: flex;
            flex-direction: column;
        }

        /* Padding tiers — fall back to default when no [padding] attribute is set */
        :host(:not([padding])) .surface,
        :host([padding='default']) .surface {
            padding: var(--space-component-lg, 20px);
            gap: var(--space-stack-md, 16px);
        }
        :host([padding='compact']) .surface {
            padding: var(--space-component-md, 12px);
            gap: var(--space-stack-sm, 8px);
        }
        :host([padding='roomy']) .surface {
            padding: var(--space-component-xl, 32px);
            gap: var(--space-component-lg, 20px);
        }
        :host([padding='none']) .surface {
            padding: 0;
            gap: 0;
        }

        .header {
            font-size: var(--text-heading-xs, 18px);
            font-weight: var(--font-weight-semibold, 600);
            line-height: var(--font-line-height-tight, 1.2);
        }

        .footer {
            border-top: var(--size-border-width-thin, 1px) solid
                var(--color-border-default, #e5e7eb);
            padding-top: var(--space-stack-md, 16px);
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
    `,Sn);Mo([F({reflect:!0})],Qr.prototype,"variant",void 0);Mo([F({reflect:!0})],Qr.prototype,"padding",void 0);Qr=Mo([Te("mfp-card")],Qr);var Vl=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},$n;let oo=($n=class extends be{constructor(){super(...arguments),this.variant="default"}render(){return ae` <footer class="inner" part="inner"><slot></slot></footer> `}},$n.styles=Pe`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            font-size: var(--text-body-sm, 14px);
            line-height: var(--font-line-height-normal, 1.5);
            background: var(--color-background-subtle, #f9fafb);
            color: var(--color-text-muted, #6b7280);
            border-top: var(--size-border-width-thin, 1px) solid
                var(--color-border-default, #e5e7eb);
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
            gap: var(--space-inline-md, 16px);
            padding: var(--space-component-md, 16px) var(--space-component-lg, 20px);
            flex-wrap: wrap;
        }

        ::slotted(a) {
            color: inherit;
        }

        /* Honor links in any nested element by inheriting the surface color */
        ::slotted(*) {
            color: inherit;
        }
    `,$n);Vl([F({reflect:!0})],oo.prototype,"variant",void 0);oo=Vl([Te("mfp-footer")],oo);var Vn=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},On;let on=(On=class extends be{constructor(){super(...arguments),this.variant="ghost",this.size="md",this.disabled=!1,this.type="button",this.label=""}render(){return this.label||console.warn("<mfp-icon-button> requires a `label` attribute for accessibility"),ae`
            <button
                type=${this.type}
                ?disabled=${this.disabled}
                aria-label=${this.label}
                part="button"
            >
                <slot></slot>
            </button>
        `}},On.styles=Pe`
        :host {
            display: inline-block;
        }

        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: var(--size-border-width-thin, 1px) solid transparent;
            border-radius: var(--radius-control, 8px);
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
            outline: var(--focus-ring-width, 2px) var(--focus-ring-style, solid)
                var(--focus-ring-color, #2563eb);
            outline-offset: var(--focus-ring-offset, 2px);
        }

        button:disabled {
            cursor: not-allowed;
            opacity: var(--opacity-disabled, 0.5);
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

        /* Sizes — square aspect (control height), font-size sets icon size */
        :host(:not([size])) button,
        :host([size='md']) button {
            width: var(--size-control-md, 40px);
            height: var(--size-control-md, 40px);
            font-size: var(--size-icon-md, 20px);
        }
        :host([size='sm']) button {
            width: var(--size-control-sm, 32px);
            height: var(--size-control-sm, 32px);
            font-size: var(--size-icon-sm, 16px);
        }
        :host([size='lg']) button {
            width: var(--size-control-lg, 48px);
            height: var(--size-control-lg, 48px);
            font-size: var(--size-icon-lg, 24px);
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
            background: var(--color-background-default, #ffffff);
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
    `,On);Vn([F({reflect:!0})],on.prototype,"variant",void 0);Vn([F({reflect:!0})],on.prototype,"size",void 0);Vn([F({type:Boolean,reflect:!0})],on.prototype,"disabled",void 0);Vn([F()],on.prototype,"type",void 0);Vn([F()],on.prototype,"label",void 0);on=Vn([Te("mfp-icon-button")],on);var Ze=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let bd=0;var tn;let He=(tn=class extends be{constructor(){super(),this.size="md",this.type="text",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.readonly=!1,this.required=!1,this._id=`mfp-input-${++bd}`,this._onInput=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please fill out this field."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,r=`${n}-hint`,s=`${n}-error`,o=t?s:this.hint?r:void 0;return ae`
            ${this.label?ae`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?ae`<span class="required" aria-hidden="true">*</span>`:se}
                  </label>`:se}
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
                    aria-describedby=${o??se}
                    @input=${this._onInput}
                    @change=${this._onChange}
                />
                <slot name="suffix"></slot>
            </div>
            ${t?ae`<p part="error" id=${s} class="error" role="alert">${this.error}</p>`:this.hint?ae`<p part="hint" id=${r} class="hint">${this.hint}</p>`:se}
        `}},tn.styles=Pe`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            color: var(--color-text-default, #111827);
        }

        :host([disabled]) {
            opacity: var(--opacity-disabled, 0.5);
        }

        label {
            display: block;
            font-size: var(--text-label, 14px);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            margin-bottom: var(--space-stack-sm, 8px);
        }

        .required {
            color: var(--color-status-error-solid, #dc2626);
            margin-left: var(--space-inline-xs, 4px);
        }

        .control {
            display: flex;
            align-items: center;
            gap: var(--space-inline-sm, 8px);
            background: var(--color-background-default, #ffffff);
            border: var(--size-border-width-thin, 1px) solid var(--color-border-default, #e5e7eb);
            border-radius: var(--radius-control, 8px);
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
            padding-left: var(--space-component-md, 12px);
        }
        ::slotted([slot='suffix']) {
            padding-right: var(--space-component-md, 12px);
        }

        input {
            flex: 1 1 auto;
            min-width: 0;
            background: transparent;
            border: none;
            outline: none;
            font: inherit;
            color: inherit;
            padding: var(--space-component-sm, 8px) var(--space-component-md, 12px);
            /* Let browser-native UI on the input (autofill background, date
               picker popup, spelling-error underlines) follow the page's
               color-scheme. */
            color-scheme: light dark;
        }

        input::placeholder {
            color: var(--color-text-muted, #6b7280);
            opacity: var(--opacity-full, 1);
        }

        input:disabled,
        input:read-only {
            cursor: not-allowed;
        }

        /* Sizes — fall back to medium when no [size] attribute is set */
        :host(:not([size])) input,
        :host([size='md']) input {
            font-size: var(--font-size-base, 16px);
            min-height: var(--size-control-md, 40px);
        }
        :host([size='sm']) input {
            font-size: var(--text-button, 14px);
            min-height: var(--size-control-sm, 32px);
            padding: var(--space-component-xs, 4px) var(--space-component-md, 12px);
        }
        :host([size='lg']) input {
            font-size: var(--text-body-lg, 18px);
            min-height: var(--size-control-lg, 48px);
            padding: var(--space-component-md, 12px) var(--space-component-lg, 16px);
        }

        .hint,
        .error {
            margin: var(--space-stack-sm, 8px) 0 0;
            font-size: var(--text-body-sm, 14px);
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
    `,tn.formAssociated=!0,tn);Ze([F({reflect:!0})],He.prototype,"size",void 0);Ze([F()],He.prototype,"type",void 0);Ze([F()],He.prototype,"value",void 0);Ze([F()],He.prototype,"name",void 0);Ze([F()],He.prototype,"label",void 0);Ze([F()],He.prototype,"placeholder",void 0);Ze([F()],He.prototype,"hint",void 0);Ze([F()],He.prototype,"error",void 0);Ze([F({type:Boolean,reflect:!0})],He.prototype,"disabled",void 0);Ze([F({type:Boolean,reflect:!0})],He.prototype,"readonly",void 0);Ze([F({type:Boolean,reflect:!0})],He.prototype,"required",void 0);He=Ze([Te("mfp-input")],He);var yd=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Rn;let ji=(Rn=class extends be{render(){return ae`<slot></slot>`}},Rn.styles=Pe`
        :host {
            display: block;
            width: 100%;
            margin-inline: auto;
            padding-inline: var(--space-component-md, 16px);
            box-sizing: border-box;
        }

        :host(:not([size])),
        :host([size='lg']) {
            max-width: var(--breakpoint-lg, 1024px);
        }
        :host([size='sm']) {
            max-width: var(--breakpoint-sm, 640px);
        }
        :host([size='md']) {
            max-width: var(--breakpoint-md, 768px);
        }
        :host([size='xl']) {
            max-width: var(--breakpoint-xl, 1280px);
        }
        :host([size='2xl']) {
            max-width: var(--breakpoint-2xl, 1536px);
        }
        :host([size='full']) {
            max-width: none;
        }
    `,Rn);ji=yd([Te("mfp-container")],ji);var _d=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Pn;let Bi=(Pn=class extends be{render(){return ae`<slot></slot>`}},Pn.styles=Pe`
        :host {
            display: flex;
            flex-direction: row;
            box-sizing: border-box;
        }

        /* Gap — default md when no [gap] attribute is set */
        :host(:not([gap])),
        :host([gap='md']) {
            gap: var(--space-inline-md, 16px);
        }
        :host([gap='none']) {
            gap: 0;
        }
        :host([gap='xs']) {
            gap: var(--space-inline-xs, 4px);
        }
        :host([gap='sm']) {
            gap: var(--space-inline-sm, 8px);
        }
        :host([gap='lg']) {
            gap: var(--space-inline-lg, 24px);
        }
        :host([gap='xl']) {
            gap: var(--space-component-xl, 32px);
        }

        :host([wrap]) {
            flex-wrap: wrap;
        }

        /* Cross-axis alignment */
        :host([align='start']) {
            align-items: flex-start;
        }
        :host([align='center']) {
            align-items: center;
        }
        :host([align='end']) {
            align-items: flex-end;
        }
        :host([align='stretch']) {
            align-items: stretch;
        }
        :host([align='baseline']) {
            align-items: baseline;
        }

        /* Main-axis distribution */
        :host([justify='start']) {
            justify-content: flex-start;
        }
        :host([justify='center']) {
            justify-content: center;
        }
        :host([justify='end']) {
            justify-content: flex-end;
        }
        :host([justify='between']) {
            justify-content: space-between;
        }
        :host([justify='around']) {
            justify-content: space-around;
        }
        :host([justify='evenly']) {
            justify-content: space-evenly;
        }
    `,Pn);Bi=_d([Te("mfp-row")],Bi);var xd=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Tn;let Fi=(Tn=class extends be{render(){return ae`<slot></slot>`}},Tn.styles=Pe`
        :host {
            display: block;
            box-sizing: border-box;
            /* Auto column — equal share of row, can shrink with siblings */
            flex: 1 1 0;
            min-width: 0;
        }

        /* 12-column spans: flex-basis as fraction of 12. No grow; allow
           shrink so a row's gap can squeeze cols without overflow. */
        :host([span='1']) {
            flex: 0 1 calc(100% / 12);
        }
        :host([span='2']) {
            flex: 0 1 calc(100% / 12 * 2);
        }
        :host([span='3']) {
            flex: 0 1 calc(100% / 12 * 3);
        }
        :host([span='4']) {
            flex: 0 1 calc(100% / 12 * 4);
        }
        :host([span='5']) {
            flex: 0 1 calc(100% / 12 * 5);
        }
        :host([span='6']) {
            flex: 0 1 calc(100% / 12 * 6);
        }
        :host([span='7']) {
            flex: 0 1 calc(100% / 12 * 7);
        }
        :host([span='8']) {
            flex: 0 1 calc(100% / 12 * 8);
        }
        :host([span='9']) {
            flex: 0 1 calc(100% / 12 * 9);
        }
        :host([span='10']) {
            flex: 0 1 calc(100% / 12 * 10);
        }
        :host([span='11']) {
            flex: 0 1 calc(100% / 12 * 11);
        }
        :host([span='12']) {
            flex: 0 0 100%;
        }

        /* Per-column self-alignment override */
        :host([align='start']) {
            align-self: flex-start;
        }
        :host([align='center']) {
            align-self: center;
        }
        :host([align='end']) {
            align-self: flex-end;
        }
        :host([align='stretch']) {
            align-self: stretch;
        }
    `,Tn);Fi=xd([Te("mfp-col")],Fi);var Be=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},kn;let an=(kn=class extends be{constructor(){super(...arguments),this.sticky=!1,this.variant="default",this.breakpoint=768,this.menuOpen=!1,this._isCollapsed=!1,this._onResize=t=>{if(!this.breakpoint)return;const n=t[0];n&&this._setCollapsed(n.contentRect.width<this.breakpoint)},this._onDocumentClick=t=>{this.menuOpen&&(t.composedPath().includes(this)||(this.menuOpen=!1))},this._onKeyDown=t=>{var n;t.key==="Escape"&&this.menuOpen&&(this.menuOpen=!1,(n=this.renderRoot.querySelector(".menu-toggle"))==null||n.focus())},this._onToggleClick=()=>{this.menuOpen=!this.menuOpen},this._onMenuClick=t=>{if(!this.menuOpen)return;t.target.closest("mfp-nav-item")&&(this.menuOpen=!1)},this._onSlotChange=()=>{this._syncOrientation(this._isCollapsed?"vertical":"horizontal")}}_syncOrientation(t){for(const n of this._items)n.orientation=t}_setCollapsed(t){t!==this._isCollapsed&&(this._isCollapsed=t,this.toggleAttribute("data-collapsed",t),this._syncOrientation(t?"vertical":"horizontal"),t||(this.menuOpen=!1))}firstUpdated(){this._syncOrientation("horizontal")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(this._onResize),this._ro.observe(this),document.addEventListener("click",this._onDocumentClick),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),document.removeEventListener("click",this._onDocumentClick),document.removeEventListener("keydown",this._onKeyDown)}render(){return ae`
            <nav class="bar" aria-label="Main">
                <div class="brand"><slot name="brand"></slot></div>
                <button
                    class="menu-toggle"
                    type="button"
                    part="menu-toggle"
                    aria-label=${this.menuOpen?"Close menu":"Open menu"}
                    aria-expanded=${this.menuOpen?"true":"false"}
                    aria-controls="mfp-nav-menu"
                    @click=${this._onToggleClick}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        ${this.menuOpen?Li`
                                  <g transform="rotate(45 12 12)">
                                      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  </g>
                                  <g transform="rotate(-45 12 12)">
                                      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  </g>
                              `:Li`
                                  <rect x="3" y="6" width="18" height="2" rx="1"></rect>
                                  <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  <rect x="3" y="16" width="18" height="2" rx="1"></rect>
                              `}
                    </svg>
                </button>
                <div class="menu" id="mfp-nav-menu" part="menu" @click=${this._onMenuClick}>
                    <div class="nav" role="navigation">
                        <slot @slotchange=${this._onSlotChange}></slot>
                    </div>
                    <div class="actions"><slot name="actions"></slot></div>
                </div>
            </nav>
        `}},kn.styles=Pe`
        :host {
            display: block;
            position: relative;
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
            border-bottom: var(--size-border-width-thin, 1px) solid
                var(--color-border-default, #e5e7eb);
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
            flex: 0 1 auto;
        }

        .menu {
            display: flex;
            align-items: center;
            gap: var(--size-spacing-4, 16px);
            flex: 1 1 auto;
            min-width: 0;
            justify-content: space-between;
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
            flex: 0 0 auto;
        }

        .menu-toggle {
            display: none;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            margin-left: auto;
            background: none;
            border: var(--size-border-width-thin, 1px) solid transparent;
            border-radius: var(--radius-control, 8px);
            /*
             * Pull from the same surface token the nav items use — this
             * is set by the host's variant selectors above (white for the
             * brand variant, dark for default), so the hamburger glyph
             * always contrasts with the bar's background. "color: inherit"
             * was unreliable here because "currentColor" in the SVG didn't
             * always resolve through the host → button chain.
             */
            color: var(--mfp-nav-item-fg-strong, var(--color-text-default, #111827));
            cursor: pointer;
            transition:
                background var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease),
                border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease);
        }

        .menu-toggle:hover {
            background: var(--mfp-nav-item-hover-bg, var(--color-background-subtle, #f9fafb));
        }

        .menu-toggle:focus-visible {
            outline: var(--focus-ring-width, 2px) var(--focus-ring-style, solid)
                var(--focus-ring-color, #2563eb);
            outline-offset: var(--focus-ring-offset, 2px);
        }

        .menu-toggle svg {
            width: 22px;
            height: 22px;
        }

        ::slotted([slot='brand']) {
            font-size: var(--text-body-lg, 18px);
            color: inherit;
            text-decoration: none;
            white-space: nowrap;
        }

        /*
         * Collapsed (mobile) layout — triggered by JS adding [data-collapsed]
         * when the host's width drops below the breakpoint. Pure-CSS @media
         * queries can't use a JS-configurable breakpoint, and container
         * queries don't help here because the nav-item orientation flip
         * has to happen in JS anyway (the orientation lives on the child
         * element's attribute, not in styles we control from here).
         */
        :host([data-collapsed]) .menu-toggle {
            display: inline-flex;
        }

        :host([data-collapsed]) .menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: var(--size-spacing-2, 8px);
            /*
             * Explicit background, not "inherit". "inherit" would resolve
             * from .bar (the parent), which has no explicit background and
             * therefore computes to transparent — making the dropdown panel
             * see-through and the page content visible behind it.
             */
            background: var(--color-background-default, #ffffff);
            color: var(--color-text-default, #111827);
            border-top: var(--size-border-width-thin, 1px) solid
                var(--color-border-default, #e5e7eb);
            box-shadow: var(--elevation-overlay, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
            z-index: var(--z-dropdown, 100);
        }

        :host([variant='brand'][data-collapsed]) .menu {
            background: var(--color-brand-primary, #2563eb);
            color: var(--color-brand-primary-fg, #ffffff);
            border-top-color: var(--color-brand-primary-emphasis, #1e40af);
        }

        /*
         * Belt-and-suspenders: explicit color override for the hamburger
         * under the brand variant. Relying on the surface-token cascade
         * was unreliable in some consuming apps, so set the color directly
         * with a higher-specificity selector that wins.
         */
        :host([variant='brand']) .menu-toggle {
            color: var(--color-brand-primary-fg, #ffffff);
        }

        :host([data-collapsed][menu-open]) .menu {
            display: flex;
        }

        /*
         * Nav items: stack vertically, full-width, in the collapsed dropdown.
         */
        :host([data-collapsed]) .nav {
            flex-direction: column;
            align-items: stretch;
            flex: 0 0 auto;
            width: 100%;
            overflow: visible;
            gap: var(--size-spacing-1, 4px);
        }

        /*
         * Actions: their own row at the bottom of the dropdown, right-
         * aligned (where users expect "secondary chrome" — theme picker,
         * user menu, etc. — to live on mobile). Separated from the nav
         * items above by a subtle hairline so it doesn't look like part
         * of the nav list.
         */
        :host([data-collapsed]) .actions {
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            flex: 0 0 auto;
            width: 100%;
            overflow: visible;
            gap: var(--size-spacing-2, 8px);
            margin-top: var(--size-spacing-2, 8px);
            padding-top: var(--size-spacing-3, 12px);
            border-top: 1px solid var(--color-border-default, rgba(128, 128, 128, 0.2));
        }

        :host([variant='brand'][data-collapsed]) .actions {
            border-top-color: rgba(255, 255, 255, 0.15);
        }
    `,kn);Be([F({type:Boolean,reflect:!0})],an.prototype,"sticky",void 0);Be([F({reflect:!0})],an.prototype,"variant",void 0);Be([F({type:Number})],an.prototype,"breakpoint",void 0);Be([F({type:Boolean,reflect:!0,attribute:"menu-open"})],an.prototype,"menuOpen",void 0);Be([Io({selector:"mfp-nav-item"})],an.prototype,"_items",void 0);an=Be([Te("mfp-nav-bar")],an);var Nn;let Zr=(Nn=class extends be{constructor(){super(...arguments),this.variant="default",this._onItemsSlotChange=()=>this._syncOrientation(),this._onNamedSlotChange=t=>{const n=t.target,r=n.parentElement;if(!r)return;const s=n.assignedNodes({flatten:!0}).length>0;r.toggleAttribute("data-empty",!s)}}_syncOrientation(){for(const t of this._items)t.orientation="vertical"}firstUpdated(){this._syncOrientation()}render(){return ae`
            <div class="header" part="header" data-empty>
                <slot name="header" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
            <nav class="items" aria-label="Side navigation">
                <slot @slotchange=${this._onItemsSlotChange}></slot>
            </nav>
            <div class="footer" part="footer" data-empty>
                <slot name="footer" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
        `}},Nn.styles=Pe`
        :host {
            display: flex;
            flex-direction: column;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            background: var(--color-background-default, #ffffff);
            border-right: var(--size-border-width-thin, 1px) solid
                var(--color-border-default, #e5e7eb);
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
            border-bottom: var(--size-border-width-thin, 1px) solid
                var(--color-border-default, #e5e7eb);
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
            border-top: var(--size-border-width-thin, 1px) solid
                var(--color-border-default, #e5e7eb);
            font-size: var(--text-button, 14px);
            color: var(--color-text-muted, #6b7280);
        }

        /* Auto-hide empty header/footer slots */
        .header[data-empty],
        .footer[data-empty] {
            display: none;
        }
    `,Nn);Be([F({reflect:!0})],Zr.prototype,"variant",void 0);Be([Io({selector:"mfp-nav-item"})],Zr.prototype,"_items",void 0);Zr=Be([Te("mfp-side-nav")],Zr);var In;let Bn=(In=class extends be{constructor(){super(...arguments),this.href="",this.active=!1,this.disabled=!1,this.orientation="horizontal",this._onClick=t=>{this.disabled&&(t.preventDefault(),t.stopPropagation())}}render(){const t=ae`
            <slot name="icon"></slot>
            <span class="label"><slot></slot></span>
        `;return this.href?ae`
                <a
                    part="link"
                    href=${this.href}
                    aria-current=${this.active?"page":se}
                    aria-disabled=${this.disabled?"true":se}
                    @click=${this._onClick}
                >
                    ${t}
                </a>
            `:ae`
            <button
                type="button"
                part="link"
                ?disabled=${this.disabled}
                aria-current=${this.active?"page":se}
            >
                ${t}
            </button>
        `}},In.styles=Pe`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            font-size: var(--text-button, 14px);
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
            border-radius: var(--radius-control, 8px);
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
            outline: var(--focus-ring-width, 2px) var(--focus-ring-style, solid)
                var(--focus-ring-color, #2563eb);
            outline-offset: var(--focus-ring-offset, 2px);
        }

        :host([active]) a,
        :host([active]) button {
            background: var(--mfp-nav-item-active-bg, var(--color-brand-primary-subtle, #eff6ff));
            color: var(--mfp-nav-item-active-fg, var(--color-brand-primary-emphasis, #1e40af));
            font-weight: var(--font-weight-semibold, 600);
        }

        :host([disabled]) a,
        :host([disabled]) button {
            opacity: var(--opacity-disabled, 0.5);
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
    `,In);Be([F()],Bn.prototype,"href",void 0);Be([F({type:Boolean,reflect:!0})],Bn.prototype,"active",void 0);Be([F({type:Boolean,reflect:!0})],Bn.prototype,"disabled",void 0);Be([F({reflect:!0})],Bn.prototype,"orientation",void 0);Bn=Be([Te("mfp-nav-item")],Bn);var st=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let wd=0;var nn;let Qe=(nn=class extends be{constructor(){super(),this.size="md",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.required=!1,this._id=`mfp-select-${++wd}`,this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onSlotChange=t=>{const n=t.target,r=this._selectEl;if(!r)return;const s=this.value;r.querySelectorAll("[data-mfp-cloned]").forEach(i=>i.remove());const o=n.assignedNodes({flatten:!0}).filter(i=>i.nodeType===Node.ELEMENT_NODE&&(i.tagName==="OPTION"||i.tagName==="OPTGROUP"));for(const i of o){const a=i.cloneNode(!0);a.setAttribute("data-mfp-cloned",""),r.appendChild(a)}r.value=s},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please select an option."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,r=`${n}-hint`,s=`${n}-error`,o=t?s:this.hint?r:void 0;return ae`
            ${this.label?ae`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?ae`<span class="required" aria-hidden="true">*</span>`:se}
                  </label>`:se}
            <div part="control" class="control ${t?"invalid":""}">
                <select
                    id=${n}
                    part="select"
                    .value=${this.value}
                    name=${this.name}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    aria-invalid=${t?"true":"false"}
                    aria-describedby=${o??se}
                    @change=${this._onChange}
                >
                    ${this.placeholder?ae`<option value="" disabled selected hidden data-mfp-placeholder>
                              ${this.placeholder}
                          </option>`:se}
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
            ${t?ae`<p part="error" id=${s} class="error" role="alert">${this.error}</p>`:this.hint?ae`<p part="hint" id=${r} class="hint">${this.hint}</p>`:se}
        `}},nn.styles=Pe`
        :host {
            display: block;
            font-family: var(--font-family-sans, system-ui, -apple-system, sans-serif);
            color: var(--color-text-default, #111827);
        }

        :host([disabled]) {
            opacity: var(--opacity-disabled, 0.5);
        }

        label {
            display: block;
            font-size: var(--text-label, 14px);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--font-line-height-tight, 1.2);
            margin-bottom: var(--space-stack-sm, 8px);
        }

        .required {
            color: var(--color-status-error-solid, #dc2626);
            margin-left: var(--space-inline-xs, 4px);
        }

        .control {
            position: relative;
            display: flex;
            align-items: center;
            background: var(--color-background-default, #ffffff);
            border: var(--size-border-width-thin, 1px) solid var(--color-border-default, #e5e7eb);
            border-radius: var(--radius-control, 8px);
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
            padding: var(--space-component-sm, 8px) var(--size-spacing-9, 36px)
                var(--space-component-sm, 8px) var(--space-component-md, 12px);
            /* Lets the browser-native dropdown popup follow the page's
               color-scheme. Without this, the option list stays the
               OS-default light even when the page is in dark mode, because
               color-scheme from <html> doesn't always reach native form
               controls inside a shadow DOM. */
            color-scheme: light dark;
        }

        select:disabled {
            cursor: not-allowed;
        }

        .chevron {
            position: absolute;
            right: var(--space-component-md, 12px);
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
            min-height: var(--size-control-md, 40px);
        }
        :host([size='sm']) select {
            font-size: var(--text-button, 14px);
            min-height: var(--size-control-sm, 32px);
            padding: var(--space-component-xs, 4px) var(--size-spacing-9, 36px)
                var(--space-component-xs, 4px) var(--space-component-md, 12px);
        }
        :host([size='lg']) select {
            font-size: var(--text-body-lg, 18px);
            min-height: var(--size-control-lg, 48px);
            padding: var(--space-component-md, 12px) var(--size-spacing-10, 40px)
                var(--space-component-md, 12px) var(--space-component-lg, 16px);
        }

        .hint,
        .error {
            margin: var(--space-stack-sm, 8px) 0 0;
            font-size: var(--text-body-sm, 14px);
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
    `,nn.formAssociated=!0,nn);st([F({reflect:!0})],Qe.prototype,"size",void 0);st([F()],Qe.prototype,"value",void 0);st([F()],Qe.prototype,"name",void 0);st([F()],Qe.prototype,"label",void 0);st([F()],Qe.prototype,"placeholder",void 0);st([F()],Qe.prototype,"hint",void 0);st([F()],Qe.prototype,"error",void 0);st([F({type:Boolean,reflect:!0})],Qe.prototype,"disabled",void 0);st([F({type:Boolean,reflect:!0})],Qe.prototype,"required",void 0);st([vd("select")],Qe.prototype,"_selectEl",void 0);Qe=st([Te("mfp-select")],Qe);var Do=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Mn;let Xr=(Mn=class extends be{constructor(){super(...arguments),this.size="md",this.label="Loading"}render(){return ae`<div class="ring" role="status" aria-label=${this.label}></div>`}},Mn.styles=Pe`
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
            font-size: var(--size-icon-lg, 24px);
        }
        :host([size='sm']) {
            font-size: var(--size-icon-sm, 16px);
        }
        :host([size='lg']) {
            font-size: var(--size-icon-xl, 32px);
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
    `,Mn);Do([F({reflect:!0})],Xr.prototype,"size",void 0);Do([F()],Xr.prototype,"label",void 0);Xr=Do([Te("mfp-spinner")],Xr);const Ed=`/*
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
`,Ad=`/*
 * Emerald theme — fresh emerald-green brand on default neutrals.
 * Designed for Frula Homes (fsbo-platform real-estate app).
 *
 * Source of truth: fsbo-platform/apps/web/tailwind.config.ts defines a
 * \`brand\` color ramp around #1D9E75. This theme mirrors that ramp into
 * the design system's semantic brand layer so every <mfp-*> component
 * automatically uses the emerald accent for primary buttons, focus
 * rings, stepper progress, etc.
 *
 * Keeps the default neutral palette — doesn't shift text / background /
 * border colors away from cool gray, just the brand accent.
 */
:root {
    --color-brand-primary: #1d9e75;
    --color-brand-primary-hover: #177e5d;
    --color-brand-primary-fg: #ffffff;
    --color-brand-primary-subtle: #e8f7f1;
    --color-brand-primary-emphasis: #125f46;
}
`,Cd=`/*
 * Navy theme — navy primary on default neutrals.
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
`,Sd=`/*
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
`,$d=`/*
 * Sand theme — warm-neutral palette with a blue accent.
 * Designed for lessonforge (educational, approachable, slightly warm).
 *
 * Keeps the default blue brand for the accent so it feels familiar,
 * but shifts text/background/border to warm sand tones for a softer
 * overall feel.
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
`,Od=`/*
 * Terracotta theme — earthy cream/brown/gold palette.
 * Designed for fourseasonsstudio (warm artisan/gallery aesthetic).
 *
 * Overrides both brand colors AND the neutral semantic layer so the
 * whole UI reads as warm. Apps that only want the terracotta accent
 * (without shifting backgrounds and text) can copy just the
 * --color-brand-* block.
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
`,ql="mfp-theme",Hi="mfp-active-theme",es={blue:{label:"Blue",css:Ed},emerald:{label:"Emerald",css:Ad},orange:{label:"Orange",css:Sd},sand:{label:"Sand",css:$d},terracotta:{label:"Terracotta",css:Od},navy:{label:"Navy",css:Cd}},Rd="navy",Ui={portfolio:"navy",warm:"terracotta",earth:"sand"};function Kl(){const e=localStorage.getItem(ql);return e&&Ui[e]?Ui[e]:e&&e in es?e:Rd}function Gl(e){if(!(e in es))return;let t=document.getElementById(Hi);t||(t=document.createElement("style"),t.id=Hi,document.head.appendChild(t)),t.textContent=es[e].css,localStorage.setItem(ql,e)}function Pd(){Gl(Kl())}const Wl=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Td={name:"App",data(){return{currentYear:new Date().getFullYear(),themes:es,activeTheme:Kl(),navLinks:[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/resume",label:"Resume"},{to:"/portfolio",label:"Projects"},{to:"/python",label:"Python"},{to:"/data",label:"Data Analysis"}]}},methods:{go(e){this.$route.path!==e&&this.$router.push(e)},onThemeChange(e){var n;const t=(n=e.detail)==null?void 0:n.value;t&&(Gl(t),this.activeTheme=t)},syncNavHeight(){var t;const e=(t=this.$refs.navBar)==null?void 0:t.offsetHeight;e&&document.documentElement.style.setProperty("--site-nav-height",`${e}px`)},syncFooterHeight(){var t;const e=(t=this.$refs.footer)==null?void 0:t.offsetHeight;e&&document.documentElement.style.setProperty("--site-footer-height",`${e}px`)}},mounted(){this.syncNavHeight(),this.syncFooterHeight(),this._navResizeObserver=new ResizeObserver(()=>this.syncNavHeight()),this._navResizeObserver.observe(this.$refs.navBar),this._footerResizeObserver=new ResizeObserver(()=>this.syncFooterHeight()),this._footerResizeObserver.observe(this.$refs.footer)},beforeUnmount(){var e,t;(e=this._navResizeObserver)==null||e.disconnect(),(t=this._footerResizeObserver)==null||t.disconnect()}},kd={ref:"navBar",sticky:"",variant:"brand"},Nd=["active","onClick"],Id={slot:"actions",class:"navbar-actions"},Md=["active"],Dd={class:"theme-group"},Ld=["value"],zd=["value"],jd={ref:"footer",variant:"brand"},Bd={class:"footer-copy"};function Fd(e,t,n,r,s,o){const i=Js("router-link"),a=Js("router-view");return Ge(),mn("div",{class:is(["app-shell",{"route-resume":e.$route.path==="/resume"}])},[pe("mfp-nav-bar",kd,[ge(i,{slot:"brand",to:"/",class:"brand-link"},{default:Et(()=>[...t[2]||(t[2]=[Ol("Melissa Freundschuh-Pula",-1)])]),_:1}),(Ge(!0),mn(Le,null,ni(s.navLinks,l=>(Ge(),mn("mfp-nav-item",{key:l.to,active:e.$route.path===l.to,onClick:u=>o.go(l.to)},Pr(l.label),9,Nd))),128)),pe("div",Id,[pe("mfp-nav-item",{active:e.$route.path==="/contact",onClick:t[0]||(t[0]=l=>o.go("/contact"))},"Contact",8,Md),pe("label",Dd,[t[3]||(t[3]=pe("span",{class:"theme-label"},"Theme:",-1)),pe("mfp-select",{class:"theme-switcher",size:"sm","aria-label":"Theme",value:s.activeTheme,onChange:t[1]||(t[1]=(...l)=>o.onThemeChange&&o.onThemeChange(...l))},[(Ge(!0),mn(Le,null,ni(s.themes,(l,u)=>(Ge(),mn("option",{key:u,value:u},Pr(l.label),9,zd))),128))],40,Ld)])])],512),ge(a,null,{default:Et(({Component:l})=>[ge(wu,{name:"fade",mode:"out-in"},{default:Et(()=>[(Ge(),hr(Jf,null,{fallback:Et(()=>[...t[4]||(t[4]=[pe("div",{class:"route-loading"},[pe("mfp-spinner",{size:"lg",label:"Loading page"})],-1)])]),default:Et(()=>[(Ge(),hr(wf(l)))]),_:2},1024))]),_:2},1024)]),_:1}),pe("mfp-footer",jd,[pe("span",Bd,"© "+Pr(s.currentYear)+" Melissa Freundschuh-Pula",1),t[5]||(t[5]=su('<div class="footer-links"><a href="https://github.com/melissapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a><a href="mailto:melissa_m_24@yahoo.com" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a></div>',1))],512)],2)}const Hd=Wl(Td,[["render",Fd]]),Ud="modulepreload",Vd=function(e){return"/"+e},Vi={},Gt=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=Vd(l),l in Vi)return;Vi[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Ud,u||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const vn=typeof document<"u";function Jl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Jl(e.default)}const ne=Object.assign;function Ls(e,t){const n={};for(const r in t){const s=t[r];n[r]=rt(s)?s.map(e):e(s)}return n}const ar=()=>{},rt=Array.isArray;function qi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Yl=/#/g,Kd=/&/g,Gd=/\//g,Wd=/=/g,Jd=/\?/g,Ql=/\+/g,Yd=/%5B/g,Qd=/%5D/g,Zl=/%5E/g,Zd=/%60/g,Xl=/%7B/g,Xd=/%7C/g,ec=/%7D/g,eh=/%20/g;function Lo(e){return e==null?"":encodeURI(""+e).replace(Xd,"|").replace(Yd,"[").replace(Qd,"]")}function th(e){return Lo(e).replace(Xl,"{").replace(ec,"}").replace(Zl,"^")}function io(e){return Lo(e).replace(Ql,"%2B").replace(eh,"+").replace(Yl,"%23").replace(Kd,"%26").replace(Zd,"`").replace(Xl,"{").replace(ec,"}").replace(Zl,"^")}function nh(e){return io(e).replace(Wd,"%3D")}function rh(e){return Lo(e).replace(Yl,"%23").replace(Jd,"%3F")}function sh(e){return rh(e).replace(Gd,"%2F")}function xr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const oh=/\/$/,ih=e=>e.replace(oh,"");function zs(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=t.slice(0,l),o=t.slice(l,a>0?a:t.length),s=e(o.slice(1))),a>=0&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=fh(r??t,n),{fullPath:r+o+i,path:r,query:s,hash:xr(i)}}function ah(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ki(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lh(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fn(t.matched[r],n.matched[s])&&tc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ch(e[n],t[n]))return!1;return!0}function ch(e,t){return rt(e)?Gi(e,t):rt(t)?Gi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Gi(e,t){return rt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function fh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ao=function(e){return e.pop="pop",e.push="push",e}({}),js=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function uh(e){if(!e)if(vn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ih(e)}const dh=/^[^#]+#/;function hh(e,t){return e.replace(dh,"#")+t}function ph(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ys=()=>({left:window.scrollX,top:window.scrollY});function mh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ph(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Wi(e,t){return(history.state?history.state.position-t:-1)+e}const lo=new Map;function gh(e,t){lo.set(e,t)}function vh(e){const t=lo.get(e);return lo.delete(e),t}function bh(e){return typeof e=="string"||e&&typeof e=="object"}function nc(e){return typeof e=="string"||typeof e=="symbol"}let me=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const rc=Symbol("");me.MATCHER_NOT_FOUND+"",me.NAVIGATION_GUARD_REDIRECT+"",me.NAVIGATION_ABORTED+"",me.NAVIGATION_CANCELLED+"",me.NAVIGATION_DUPLICATED+"";function Hn(e,t){return ne(new Error,{type:e,[rc]:!0},t)}function bt(e,t){return e instanceof Error&&rc in e&&(t==null||!!(e.type&t))}const yh=["params","query","hash"];function _h(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of yh)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function xh(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Ql," "),o=s.indexOf("="),i=xr(o<0?s:s.slice(0,o)),a=o<0?null:xr(s.slice(o+1));if(i in t){let l=t[i];rt(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function Ji(e){let t="";for(let n in e){const r=e[n];if(n=nh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(rt(r)?r.map(s=>s&&io(s)):[r&&io(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function wh(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=rt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Eh=Symbol(""),Yi=Symbol(""),zo=Symbol(""),sc=Symbol(""),co=Symbol("");function Qn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nt(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Hn(me.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?l(p):bh(p)?l(Hn(me.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),a())},f=o(()=>e.call(r&&r.instances[s],t,n,u));let c=Promise.resolve(f);e.length<3&&(c=c.then(u)),c.catch(p=>l(p))})}function Bs(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Jl(l)){const u=(l.__vccOpts||l)[t];u&&o.push(Nt(u,n,r,i,a,s))}else{let u=l();o.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const c=qd(f)?f.default:f;i.mods[a]=f,i.components[a]=c;const p=(c.__vccOpts||c)[t];return p&&Nt(p,n,r,i,a,s)()}))}}return o}function Ah(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(u=>Fn(u,a))?r.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(u=>Fn(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ch=()=>location.protocol+"//"+location.host;function oc(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),Ki(a,"")}return Ki(n,e)+r+s}function Sh(e,t,n,r){let s=[],o=[],i=null;const a=({state:p})=>{const m=oc(e,location),w=n.value,E=t.value;let z=0;if(p){if(n.value=m,t.value=p,i&&i===w){i=null;return}z=E?p.position-E.position:0}else r(m);s.forEach(M=>{M(n.value,w,{delta:z,type:ao.pop,direction:z?z>0?js.forward:js.back:js.unknown})})};function l(){i=n.value}function u(p){s.push(p);const m=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return o.push(m),m}function f(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ne({},p.state,{scroll:ys()}),"")}}function c(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:c}}function Qi(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ys():null}}function $h(e){const{history:t,location:n}=window,r={value:oc(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,u,f){const c=e.indexOf("#"),p=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+l:Ch()+e+l;try{t[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function i(l,u){o(l,ne({},t.state,Qi(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function a(l,u){const f=ne({},s.value,t.state,{forward:l,scroll:ys()});o(f.current,f,!0),o(l,ne({},Qi(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:a,replace:i}}function Oh(e){e=uh(e);const t=$h(e),n=Sh(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=ne({location:"",base:e,go:r,createHref:hh.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Rh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Oh(e)}let Qt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var _e=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(_e||{});const Ph={type:Qt.Static,value:""},Th=/[a-zA-Z0-9_]/;function kh(e){if(!e)return[[]];if(e==="/")return[[Ph]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=_e.Static,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,l,u="",f="";function c(){u&&(n===_e.Static?o.push({type:Qt.Static,value:u}):n===_e.Param||n===_e.ParamRegExp||n===_e.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Qt.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==_e.ParamRegExp){r=n,n=_e.EscapeNext;continue}switch(n){case _e.Static:l==="/"?(u&&c(),i()):l===":"?(c(),n=_e.Param):p();break;case _e.EscapeNext:p(),n=r;break;case _e.Param:l==="("?n=_e.ParamRegExp:Th.test(l)?p():(c(),n=_e.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case _e.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=_e.ParamRegExpEnd:f+=l;break;case _e.ParamRegExpEnd:c(),n=_e.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===_e.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),c(),i(),s}const Zi="[^/]+?",Nh={sensitive:!1,strict:!1,start:!0,end:!0};var Me=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Me||{});const Ih=/[.+*?^${}()[\]/\\]/g;function Mh(e,t){const n=ne({},Nh,t),r=[];let s=n.start?"^":"";const o=[];for(const u of e){const f=u.length?[]:[Me.Root];n.strict&&!u.length&&(s+="/");for(let c=0;c<u.length;c++){const p=u[c];let m=Me.Segment+(n.sensitive?Me.BonusCaseSensitive:0);if(p.type===Qt.Static)c||(s+="/"),s+=p.value.replace(Ih,"\\$&"),m+=Me.Static;else if(p.type===Qt.Param){const{value:w,repeatable:E,optional:z,regexp:M}=p;o.push({name:w,repeatable:E,optional:z});const S=M||Zi;if(S!==Zi){m+=Me.BonusCustomRegExp;try{`${S}`}catch(k){throw new Error(`Invalid custom RegExp for param "${w}" (${S}): `+k.message)}}let N=E?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;c||(N=z&&u.length<2?`(?:/${N})`:"/"+N),z&&(N+="?"),s+=N,m+=Me.Dynamic,z&&(m+=Me.BonusOptional),E&&(m+=Me.BonusRepeatable),S===".*"&&(m+=Me.BonusWildcard)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Me.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(i),c={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",w=o[p-1];c[w.name]=m&&w.repeatable?m.split("/"):m}return c}function l(u){let f="",c=!1;for(const p of e){(!c||!f.endsWith("/"))&&(f+="/"),c=!1;for(const m of p)if(m.type===Qt.Static)f+=m.value;else if(m.type===Qt.Param){const{value:w,repeatable:E,optional:z}=m,M=w in u?u[w]:"";if(rt(M)&&!E)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const S=rt(M)?M.join("/"):M;if(!S)if(z)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):c=!0);else throw new Error(`Missing required param "${w}"`);f+=S}}return f||"/"}return{re:i,score:r,keys:o,parse:a,stringify:l}}function Dh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Me.Static+Me.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Me.Static+Me.Segment?1:-1:0}function ic(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=Dh(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Xi(r))return 1;if(Xi(s))return-1}return s.length-r.length}function Xi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lh={strict:!1,end:!0,sensitive:!1};function zh(e,t,n){const r=Mh(kh(e.path),n),s=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function jh(e,t){const n=[],r=new Map;t=qi(Lh,t);function s(c){return r.get(c)}function o(c,p,m){const w=!m,E=ta(c);E.aliasOf=m&&m.record;const z=qi(t,c),M=[E];if("alias"in c){const k=typeof c.alias=="string"?[c.alias]:c.alias;for(const $ of k)M.push(ta(ne({},E,{components:m?m.record.components:E.components,path:$,aliasOf:m?m.record:E})))}let S,N;for(const k of M){const{path:$}=k;if(p&&$[0]!=="/"){const L=p.record.path,G=L[L.length-1]==="/"?"":"/";k.path=p.record.path+($&&G+$)}if(S=zh(k,p,z),m?m.alias.push(S):(N=N||S,N!==S&&N.alias.push(S),w&&c.name&&!na(S)&&i(c.name)),ac(S)&&l(S),E.children){const L=E.children;for(let G=0;G<L.length;G++)o(L[G],S,m&&m.children[G])}m=m||S}return N?()=>{i(N)}:ar}function i(c){if(nc(c)){const p=r.get(c);p&&(r.delete(c),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(c);p>-1&&(n.splice(p,1),c.record.name&&r.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return n}function l(c){const p=Hh(c,n);n.splice(p,0,c),c.record.name&&!na(c)&&r.set(c.record.name,c)}function u(c,p){let m,w={},E,z;if("name"in c&&c.name){if(m=r.get(c.name),!m)throw Hn(me.MATCHER_NOT_FOUND,{location:c});z=m.record.name,w=ne(ea(p.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),c.params&&ea(c.params,m.keys.map(N=>N.name))),E=m.stringify(w)}else if(c.path!=null)E=c.path,m=n.find(N=>N.re.test(E)),m&&(w=m.parse(E),z=m.record.name);else{if(m=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!m)throw Hn(me.MATCHER_NOT_FOUND,{location:c,currentLocation:p});z=m.record.name,w=ne({},p.params,c.params),E=m.stringify(w)}const M=[];let S=m;for(;S;)M.unshift(S.record),S=S.parent;return{name:z,path:E,params:w,matched:M,meta:Fh(M)}}e.forEach(c=>o(c));function f(){n.length=0,r.clear()}return{addRoute:o,resolve:u,removeRoute:i,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function ea(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ta(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Bh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Bh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function na(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Fh(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function Hh(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;ic(e,t[o])<0?r=o:n=o+1}const s=Uh(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Uh(e){let t=e;for(;t=t.parent;)if(ac(t)&&ic(e,t)===0)return t}function ac({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ra(e){const t=At(zo),n=At(sc),r=et(()=>{const l=bn(e.to);return t.resolve(l)}),s=et(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],c=n.matched;if(!f||!c.length)return-1;const p=c.findIndex(Fn.bind(null,f));if(p>-1)return p;const m=sa(l[u-2]);return u>1&&sa(f)===m&&c[c.length-1].path!==m?c.findIndex(Fn.bind(null,l[u-2])):p}),o=et(()=>s.value>-1&&Wh(n.params,r.value.params)),i=et(()=>s.value>-1&&s.value===n.matched.length-1&&tc(n.params,r.value.params));function a(l={}){if(Gh(l)){const u=t[bn(e.replace)?"replace":"push"](bn(e.to)).catch(ar);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:et(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function Vh(e){return e.length===1?e[0]:e}const qh=Za({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ra,setup(e,{slots:t}){const n=cs(ra(e)),{options:r}=At(zo),s=et(()=>({[oa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Vh(t.default(n));return e.custom?o:Oo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Kh=qh;function Gh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wh(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rt(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function sa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const oa=(e,t,n)=>e??t??n,Jh=Za({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=At(co),s=et(()=>e.route||r.value),o=At(Yi,0),i=et(()=>{let u=bn(o);const{matched:f}=s.value;let c;for(;(c=f[u])&&!c.components;)u++;return u}),a=et(()=>s.value.matched[i.value]);Tr(Yi,et(()=>i.value+1)),Tr(Eh,a),Tr(co,s);const l=Wc();return kr(()=>[l.value,a.value,e.name],([u,f,c],[p,m,w])=>{f&&(f.instances[c]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!Fn(f,m)||!p)&&(f.enterCallbacks[c]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=s.value,f=e.name,c=a.value,p=c&&c.components[f];if(!p)return ia(n.default,{Component:p,route:u});const m=c.props[f],w=m?m===!0?u.params:typeof m=="function"?m(u):m:null,z=Oo(p,ne({},w,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(c.instances[f]=null)},ref:l}));return ia(n.default,{Component:z,route:u})||z}}});function ia(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Yh=Jh;function Qh(e){const t=jh(e.routes,e),n=e.parseQuery||xh,r=e.stringifyQuery||Ji,s=e.history,o=Qn(),i=Qn(),a=Qn(),l=Jc(Tt);let u=Tt;vn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ls.bind(null,y=>""+y),c=Ls.bind(null,sh),p=Ls.bind(null,xr);function m(y,I){let P,j;return nc(y)?(P=t.getRecordMatcher(y),j=I):j=y,t.addRoute(j,P)}function w(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function E(){return t.getRoutes().map(y=>y.record)}function z(y){return!!t.getRecordMatcher(y)}function M(y,I){if(I=ne({},I||l.value),typeof y=="string"){const g=zs(n,y,I.path),b=t.resolve({path:g.path},I),_=s.createHref(g.fullPath);return ne(g,b,{params:p(b.params),hash:xr(g.hash),redirectedFrom:void 0,href:_})}let P;if(y.path!=null)P=ne({},y,{path:zs(n,y.path,I.path).path});else{const g=ne({},y.params);for(const b in g)g[b]==null&&delete g[b];P=ne({},y,{params:c(g)}),I.params=c(I.params)}const j=t.resolve(P,I),Q=y.hash||"";j.params=f(p(j.params));const d=ah(r,ne({},y,{hash:th(Q),path:j.path})),h=s.createHref(d);return ne({fullPath:d,hash:Q,query:r===Ji?wh(y.query):y.query||{}},j,{redirectedFrom:void 0,href:h})}function S(y){return typeof y=="string"?zs(n,y,l.value.path):ne({},y)}function N(y,I){if(u!==y)return Hn(me.NAVIGATION_CANCELLED,{from:I,to:y})}function k(y){return G(y)}function $(y){return k(ne(S(y),{replace:!0}))}function L(y,I){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:j}=P;let Q=typeof j=="function"?j(y,I):j;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=S(Q):{path:Q},Q.params={}),ne({query:y.query,hash:y.hash,params:Q.path!=null?{}:y.params},Q)}}function G(y,I){const P=u=M(y),j=l.value,Q=y.state,d=y.force,h=y.replace===!0,g=L(P,j);if(g)return G(ne(S(g),{state:typeof g=="object"?ne({},Q,g.state):Q,force:d,replace:h}),I||P);const b=P;b.redirectedFrom=I;let _;return!d&&lh(r,j,P)&&(_=Hn(me.NAVIGATION_DUPLICATED,{to:b,from:j}),ot(j,j,!0,!1)),(_?Promise.resolve(_):V(b,j)).catch(v=>bt(v)?bt(v,me.NAVIGATION_GUARD_REDIRECT)?v:Rt(v):Z(v,b,j)).then(v=>{if(v){if(bt(v,me.NAVIGATION_GUARD_REDIRECT))return G(ne({replace:h},S(v.to),{state:typeof v.to=="object"?ne({},Q,v.to.state):Q,force:d}),I||b)}else v=R(b,j,!0,h,Q);return J(b,j,v),v})}function te(y,I){const P=N(y,I);return P?Promise.reject(P):Promise.resolve()}function D(y){const I=dn.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(y):y()}function V(y,I){let P;const[j,Q,d]=Ah(y,I);P=Bs(j.reverse(),"beforeRouteLeave",y,I);for(const g of j)g.leaveGuards.forEach(b=>{P.push(Nt(b,y,I))});const h=te.bind(null,y,I);return P.push(h),Ve(P).then(()=>{P=[];for(const g of o.list())P.push(Nt(g,y,I));return P.push(h),Ve(P)}).then(()=>{P=Bs(Q,"beforeRouteUpdate",y,I);for(const g of Q)g.updateGuards.forEach(b=>{P.push(Nt(b,y,I))});return P.push(h),Ve(P)}).then(()=>{P=[];for(const g of d)if(g.beforeEnter)if(rt(g.beforeEnter))for(const b of g.beforeEnter)P.push(Nt(b,y,I));else P.push(Nt(g.beforeEnter,y,I));return P.push(h),Ve(P)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),P=Bs(d,"beforeRouteEnter",y,I,D),P.push(h),Ve(P))).then(()=>{P=[];for(const g of i.list())P.push(Nt(g,y,I));return P.push(h),Ve(P)}).catch(g=>bt(g,me.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function J(y,I,P){a.list().forEach(j=>D(()=>j(y,I,P)))}function R(y,I,P,j,Q){const d=N(y,I);if(d)return d;const h=I===Tt,g=vn?history.state:{};P&&(j||h?s.replace(y.fullPath,ne({scroll:h&&g&&g.scroll},Q)):s.push(y.fullPath,Q)),l.value=y,ot(y,I,P,h),Rt()}let W;function de(){W||(W=s.listen((y,I,P)=>{if(!Ft.listening)return;const j=M(y),Q=L(j,Ft.currentRoute.value);if(Q){G(ne(Q,{replace:!0,force:!0}),j).catch(ar);return}u=j;const d=l.value;vn&&gh(Wi(d.fullPath,P.delta),ys()),V(j,d).catch(h=>bt(h,me.NAVIGATION_ABORTED|me.NAVIGATION_CANCELLED)?h:bt(h,me.NAVIGATION_GUARD_REDIRECT)?(G(ne(S(h.to),{force:!0}),j).then(g=>{bt(g,me.NAVIGATION_ABORTED|me.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===ao.pop&&s.go(-1,!1)}).catch(ar),Promise.reject()):(P.delta&&s.go(-P.delta,!1),Z(h,j,d))).then(h=>{h=h||R(j,d,!1),h&&(P.delta&&!bt(h,me.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===ao.pop&&bt(h,me.NAVIGATION_ABORTED|me.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),J(j,d,h)}).catch(ar)}))}let ye=Qn(),le=Qn(),Y;function Z(y,I,P){Rt(y);const j=le.list();return j.length?j.forEach(Q=>Q(y,I,P)):console.error(y),Promise.reject(y)}function Se(){return Y&&l.value!==Tt?Promise.resolve():new Promise((y,I)=>{ye.add([y,I])})}function Rt(y){return Y||(Y=!y,de(),ye.list().forEach(([I,P])=>y?P(y):I()),ye.reset()),y}function ot(y,I,P,j){const{scrollBehavior:Q}=e;if(!vn||!Q)return Promise.resolve();const d=!P&&vh(Wi(y.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return jr().then(()=>Q(y,I,d)).then(h=>h&&mh(h)).catch(h=>Z(h,y,I))}const ke=y=>s.go(y);let un;const dn=new Set,Ft={currentRoute:l,listening:!0,addRoute:m,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:z,getRoutes:E,resolve:M,options:e,push:k,replace:$,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:le.add,isReady:Se,install(y){y.component("RouterLink",Kh),y.component("RouterView",Yh),y.config.globalProperties.$router=Ft,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>bn(l)}),vn&&!un&&l.value===Tt&&(un=!0,k(s.location).catch(j=>{}));const I={};for(const j in Tt)Object.defineProperty(I,j,{get:()=>l.value[j],enumerable:!0});y.provide(zo,Ft),y.provide(sc,La(I)),y.provide(co,l);const P=y.unmount;dn.add(y),y.unmount=function(){dn.delete(y),dn.size<1&&(u=Tt,W&&W(),W=null,l.value=Tt,un=!1,Y=!1),P()}}};function Ve(y){return y.reduce((I,P)=>I.then(()=>D(P)),Promise.resolve())}return Ft}const Zh="/assets/Family-TJUrK4ZO.jpeg",Xh={name:"Home"},ep={size:"xl",class:"home-page"},tp={class:"hero-grid"},np={class:"hero-text"},rp={class:"mt-lg hero-actions"},sp=["onClick"],op=["onClick"],ip=["onClick"];function ap(e,t,n,r,s,o){const i=Js("router-link");return Ge(),mn("mfp-container",ep,[pe("div",tp,[t[3]||(t[3]=pe("div",{class:"hero-image text-center"},[pe("img",{src:Zh,class:"img-fluid rounded shadow",style:{"max-height":"calc(100vh - 120px)","object-fit":"contain"},alt:"Melissa with her wife and four kids"})],-1)),pe("div",np,[t[0]||(t[0]=pe("h1",{class:"hero-name"},"Melissa Freundschuh-Pula",-1)),t[1]||(t[1]=pe("h4",{class:"hero-title mt-sm"},"Full-Stack Software Engineer",-1)),t[2]||(t[2]=pe("p",{class:"hero-intro mt-md",style:{color:"#2c3e50"}}," Six-plus years building enterprise web apps by day and live products on the side. Wife, mom of four, Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper. ",-1)),pe("div",rp,[ge(i,{to:"/portfolio",custom:""},{default:Et(({navigate:a})=>[pe("mfp-button",{variant:"primary",onClick:a},"See Projects",8,sp)]),_:1}),ge(i,{to:"/resume",custom:""},{default:Et(({navigate:a})=>[pe("mfp-button",{variant:"secondary",onClick:a},"Resume",8,op)]),_:1}),ge(i,{to:"/contact",custom:""},{default:Et(({navigate:a})=>[pe("mfp-button",{variant:"secondary",onClick:a},"Get In Touch",8,ip)]),_:1})])])])])}const lp=Wl(Xh,[["render",ap],["__scopeId","data-v-3b823210"]]),cp=[{path:"/",name:"Home",component:lp,meta:{title:"Home"}},{path:"/about",name:"About",component:()=>Gt(()=>import("./about-Clta8SoH.js"),__vite__mapDeps([0,1])),meta:{title:"About"}},{path:"/resume",name:"Resume",component:()=>Gt(()=>import("./resume-BvpPdAnz.js"),__vite__mapDeps([2,3])),meta:{title:"Resume"}},{path:"/portfolio",name:"Portfolio",component:()=>Gt(()=>import("./portfolio-BN0SfqfY.js"),__vite__mapDeps([4,5,6,7])),meta:{title:"Projects"}},{path:"/python",name:"PythonCode",component:()=>Gt(()=>import("./pythonCode-CuQ4KZ1d.js"),__vite__mapDeps([8,9,10,5,6,11])),meta:{title:"Python"}},{path:"/data",name:"DataAnalysis",component:()=>Gt(()=>import("./dataAnalysis-CJkyT47A.js"),__vite__mapDeps([12,9,10,5,6,13])),meta:{title:"Data Analysis"}},{path:"/contact",name:"Contact",component:()=>Gt(()=>import("./contact-Ds_Djc8z.js"),__vite__mapDeps([14,15])),meta:{title:"Contact"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Gt(()=>import("./notFound-uylZoiEx.js"),__vite__mapDeps([16,17])),meta:{title:"Page Not Found"}}],aa="Melissa Freundschuh-Pula",jo=Qh({history:Rh(),routes:cp});jo.afterEach(e=>{var n;const t=(n=e.meta)==null?void 0:n.title;document.title=t?`${t} | ${aa}`:aa});const fp=(e,t={})=>new Promise((n,r)=>{if(typeof document>"u")return;const s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.defer=t.defer,t.preconnectOrigin){const i=document.createElement("link");i.href=t.preconnectOrigin,i.rel="preconnect",s.appendChild(i)}s.appendChild(o),o.onload=n,o.onerror=r}),fo=e=>typeof e=="function",Fs=e=>e&&typeof e=="object"&&!Array.isArray(e),uo=(e,...t)=>{if(!t.length)return e;const n=t.shift();if(!(!Fs(e)||!Fs(n))){for(const r in n)Fs(n[r])?(e[r]||Object.assign(e,{[r]:{}}),uo(e[r],n[r])):Object.assign(e,{[r]:n[r]});return uo(e,...t)}},_s=()=>!(typeof window>"u"||typeof document>"u"),la=(e,t=!0)=>{},up=(e={})=>(la('Missing "appName" property inside the plugin options.',e.app_name==null),la('Missing "name" property in the route.',e.screen_name==null),e);function dp(e="",t=""){const n=e.split("/"),r=t.split("/");return n[0]===""&&t[t.length-1]==="/"&&n.shift(),r.join("/")+n.join("/")}const hp=()=>({bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}});let lc={};const pp=(e={})=>{const t=hp();lc=uo(t,e)},Ue=()=>lc,ln=(...e)=>{const{globalObjectName:t}=Ue();!_s()||typeof window[t]>"u"||window[t](...e)},Bo=(...e)=>{const{config:t,includes:n}=Ue();if(ln("config",t.id,...e),Array.isArray(n))for(const r of n)ln("config",r.id,...e)},ca=(e,t)=>{_s()&&(window[`ga-disable-${e}`]=t)},cc=(e=!0)=>{const{config:t,includes:n}=Ue();if(ca(t.id,e),Array.isArray(n))for(const r of n)ca(r.id,e)},fc=()=>{cc(!0)},mp=()=>{cc(!1)},fn=(e,t={})=>{const{includes:n,defaultGroupName:r}=Ue();t.send_to==null&&Array.isArray(n)&&n.length&&(t.send_to=n.map(s=>s.id).concat(r)),ln("event",e,t)};let uc;const gp=e=>{uc=e},Fo=()=>uc,dc=e=>{if(!_s())return;let t;if(typeof e=="string")t={page_path:e};else if(e.path||e.fullPath){const{pageTrackerUseFullPath:n,pageTrackerPrependBase:r}=Ue(),s=Fo(),o=s==null?void 0:s.options.base,i=n?e.fullPath:e.path;t={...e.name&&{page_title:e.name},page_path:r?dp(i,o):i}}else t=e;t.page_location==null&&(t.page_location=window.location.href),t.send_page_view==null&&(t.send_page_view=!0),fn("page_view",t)},hc=e=>{const{appName:t}=Ue();if(!e)return;let n;typeof e=="string"?n={screen_name:e}:n=e,n.app_name=n.app_name||t,fn("screen_view",n)},vp=(...e)=>{fn("exception",...e)},bp=e=>{Bo("linker",e)},yp=e=>{fn("timing_complete",e)},_p=(...e)=>{ln("set",...e)},xp=(...e)=>{fn("refund",...e)},wp=e=>{fn("purchase",e)},Ep=e=>{Bo({custom_map:e})},Ap=Object.freeze(Object.defineProperty({__proto__:null,config:Bo,customMap:Ep,event:fn,exception:vp,linker:bp,optIn:mp,optOut:fc,pageview:dc,purchase:wp,query:ln,refund:xp,screenview:hc,set:_p,time:yp},Symbol.toStringTag,{value:"Module"})),Cp=e=>{e.config.globalProperties.$gtag=Ap},fa=e=>({send_page_view:!1,...e}),pc=()=>{const{config:e,includes:t}=Ue();if(ln("config",e.id,fa(e.params)),Array.isArray(t))for(const n of t)ln("config",n.id,fa(n.params))},ua=(e={},t={})=>{const{appName:n,pageTrackerTemplate:r,pageTrackerScreenviewEnabled:s,pageTrackerSkipSamePath:o}=Ue();if(o&&e.path===t.path)return;let i=e;if(fo(r)?i=r(e,t):s&&(i=up({app_name:n,screen_name:e.name})),s){hc(i);return}dc(i)},da=e=>{const{pageTrackerExcludedRoutes:t}=Ue();return t.includes(e.path)||t.includes(e.name)},Sp=()=>{const{onBeforeTrack:e,onAfterTrack:t}=Ue(),n=Fo();n.isReady().then(()=>{jr().then(()=>{const{currentRoute:r}=n;pc(),!da(r.value)&&ua(r.value)}),n.afterEach((r,s)=>{jr().then(()=>{da(r)||(fo(e)&&e(r,s),ua(r,s),fo(t)&&t(r,s))})})})},$p=()=>{if(!_s())return;const{enabled:e,globalObjectName:t,globalDataLayerName:n}=Ue();return window[t]==null&&(window[n]=window[n]||[],window[t]=function(){window[n].push(arguments)}),window[t]("js",new Date),e||fc(),window[t]},Op=()=>{const{onReady:e,onError:t,globalObjectName:n,globalDataLayerName:r,config:s,customResourceURL:o,customPreconnectOrigin:i,deferScriptLoad:a,pageTrackerEnabled:l,disableScriptLoad:u}=Ue(),f=!!(l&&Fo());if($p(),f?Sp():pc(),!u)return fp(`${o}?id=${s.id}&l=${r}`,{preconnectOrigin:i,defer:a}).then(()=>{e&&e(window[n])}).catch(c=>(t&&t(c),c))},Rp=(e,t,n)=>{Cp(e),pp(t),gp(n),Ue().bootstrap&&Op()};Pd();const Ho=Wu(Hd);Ho.use(jo);Ho.use(Rp,{config:{id:"G-ZP2LCLVZ2X",params:{send_page_view:!1}}},jo);Ho.mount("#app");export{Le as F,Wl as _,su as a,pe as b,mn as c,ge as d,ni as e,tl as f,nl as g,ou as h,Ol as i,Wc as j,Pp as k,hr as l,wf as m,is as n,Ge as o,Tp as p,Np as q,Js as r,Pr as t,kp as v,Et as w};

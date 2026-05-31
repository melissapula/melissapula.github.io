const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-betJleqO.js","assets/about-I2-nfrNe.css","assets/resume-BopXiw5s.js","assets/resume-BquFaGDv.css","assets/portfolio-DGdPdxqa.js","assets/ProjectCard-CIGbZlZy.js","assets/ProjectCard-pCKI7OaL.css","assets/portfolio-BTwWvZNj.css","assets/pythonCode-CESMRrnD.js","assets/ProjectShell-XTsOtTFV.js","assets/ProjectShell-DyoouBvB.css","assets/pythonCode-BCXd0-Hr.css","assets/dataAnalysis-C8Hw8KFK.js","assets/dataAnalysis-B1pHAztZ.css","assets/contact-D_GVRemT.js","assets/contact-7OtAcNLM.css","assets/notFound-CLyCVVDW.js","assets/notFound-B-f7uTgo.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function os(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},pn=[],ct=()=>{},aa=()=>!1,Jr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ss=e=>e.startsWith("onUpdate:"),ye=Object.assign,is=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fc=Object.prototype.hasOwnProperty,re=(e,t)=>fc.call(e,t),U=Array.isArray,mn=e=>Yr(e)==="[object Map]",la=e=>Yr(e)==="[object Set]",V=e=>typeof e=="function",ge=e=>typeof e=="string",Et=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",ca=e=>(ue(e)||V(e))&&V(e.then)&&V(e.catch),fa=Object.prototype.toString,Yr=e=>fa.call(e),uc=e=>Yr(e).slice(8,-1),ua=e=>Yr(e)==="[object Object]",as=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qn=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},dc=/-\w/g,Ge=Qr(e=>e.replace(dc,t=>t.slice(1).toUpperCase())),hc=/\B([A-Z])/g,Dt=Qr(e=>e.replace(hc,"-$1").toLowerCase()),Zr=Qr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ho=Qr(e=>e?`on${Zr(e)}`:""),Nt=(e,t)=>!Object.is(e,t),po=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},da=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},pc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ha=e=>{const t=ge(e)?Number(e):NaN;return isNaN(t)?e:t};let js;const Xr=()=>js||(js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ls(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=ge(r)?bc(r):ls(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(ge(e)||ue(e))return e}const mc=/;(?![^(]*\))/g,gc=/:([^]+)/,vc=/\/\*[^]*?\*\//g;function bc(e){const t={};return e.replace(vc,"").split(mc).forEach(n=>{if(n){const r=n.split(gc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function eo(e){let t="";if(ge(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=eo(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const yc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_c=os(yc);function pa(e){return!!e||e===""}const ma=e=>!!(e&&e.__v_isRef===!0),Sr=e=>ge(e)?e:e==null?"":U(e)||ue(e)&&(e.toString===fa||!V(e.toString))?ma(e)?Sr(e.value):JSON.stringify(e,ga,2):String(e),ga=(e,t)=>ma(t)?ga(e,t.value):mn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[mo(r,s)+" =>"]=o,n),{})}:la(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>mo(n))}:Et(t)?mo(t):ue(t)&&!U(t)&&!ua(t)?String(t):t,mo=(e,t="")=>{var n;return Et(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class xc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=De;try{return De=this,t()}finally{De=n}}}on(){++this._on===1&&(this.prevScope=De,De=this)}off(){this._on>0&&--this._on===0&&(De=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function wc(){return De}let fe;const go=new WeakSet;class va{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,go.has(this)&&(go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ya(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bs(this),_a(this);const t=fe,n=Qe;fe=this,Qe=!0;try{return this.fn()}finally{xa(this),fe=t,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)us(t);this.deps=this.depsTail=void 0,Bs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Io(this)&&this.run()}get dirty(){return Io(this)}}let ba=0,Zn,Xn;function ya(e,t=!1){if(e.flags|=8,t){e.next=Xn,Xn=e;return}e.next=Zn,Zn=e}function cs(){ba++}function fs(){if(--ba>0)return;if(Xn){let t=Xn;for(Xn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Zn;){let t=Zn;for(Zn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function _a(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function xa(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),us(r),Ec(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function Io(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(wa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function wa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ir)||(e.globalVersion=ir,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Io(e))))return;e.flags|=2;const t=e.dep,n=fe,r=Qe;fe=e,Qe=!0;try{_a(e);const o=e.fn(e._value);(t.version===0||Nt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{fe=n,Qe=r,xa(e),e.flags&=-3}}function us(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)us(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ec(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Qe=!0;const Ea=[];function _t(){Ea.push(Qe),Qe=!1}function xt(){const e=Ea.pop();Qe=e===void 0?!0:e}function Bs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let ir=0;class Ac{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ds{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!Qe||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new Ac(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,Aa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=r)}return n}trigger(t){this.version++,ir++,this.notify(t)}notify(t){cs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fs()}}}function Aa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Aa(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Mo=new WeakMap,Kt=Symbol(""),Do=Symbol(""),ar=Symbol("");function Ee(e,t,n){if(Qe&&fe){let r=Mo.get(e);r||Mo.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new ds),o.map=r,o.key=n),o.track()}}function gt(e,t,n,r,o,s){const i=Mo.get(e);if(!i){ir++;return}const a=l=>{l&&l.trigger()};if(cs(),t==="clear")i.forEach(a);else{const l=U(e),u=l&&as(n);if(l&&n==="length"){const f=Number(r);i.forEach((c,p)=>{(p==="length"||p===ar||!Et(p)&&p>=f)&&a(c)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(ar)),t){case"add":l?u&&a(i.get("length")):(a(i.get(Kt)),mn(e)&&a(i.get(Do)));break;case"delete":l||(a(i.get(Kt)),mn(e)&&a(i.get(Do)));break;case"set":mn(e)&&a(i.get(Kt));break}}fs()}function cn(e){const t=ee(e);return t===e?t:(Ee(t,"iterate",ar),qe(e)?t:t.map(Ze))}function to(e){return Ee(e=ee(e),"iterate",ar),e}function Rt(e,t){return wt(e)?In(Wt(e)?Ze(t):t):Ze(t)}const Cc={__proto__:null,[Symbol.iterator](){return vo(this,Symbol.iterator,e=>Rt(this,e))},concat(...e){return cn(this).concat(...e.map(t=>U(t)?cn(t):t))},entries(){return vo(this,"entries",e=>(e[1]=Rt(this,e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(r=>Rt(this,r)),arguments)},find(e,t){return ut(this,"find",e,t,n=>Rt(this,n),arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,n=>Rt(this,n),arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return bo(this,"includes",e)},indexOf(...e){return bo(this,"indexOf",e)},join(e){return cn(this).join(e)},lastIndexOf(...e){return bo(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return qn(this,"pop")},push(...e){return qn(this,"push",e)},reduce(e,...t){return Fs(this,"reduce",e,t)},reduceRight(e,...t){return Fs(this,"reduceRight",e,t)},shift(){return qn(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return qn(this,"splice",e)},toReversed(){return cn(this).toReversed()},toSorted(e){return cn(this).toSorted(e)},toSpliced(...e){return cn(this).toSpliced(...e)},unshift(...e){return qn(this,"unshift",e)},values(){return vo(this,"values",e=>Rt(this,e))}};function vo(e,t,n){const r=to(e),o=r[t]();return r!==e&&!qe(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.done||(s.value=n(s.value)),s}),o}const Sc=Array.prototype;function ut(e,t,n,r,o,s){const i=to(e),a=i!==e&&!qe(e),l=i[t];if(l!==Sc[t]){const c=l.apply(e,s);return a?Ze(c):c}let u=n;i!==e&&(a?u=function(c,p){return n.call(this,Rt(e,c),p,e)}:n.length>2&&(u=function(c,p){return n.call(this,c,p,e)}));const f=l.call(i,u,r);return a&&o?o(f):f}function Fs(e,t,n,r){const o=to(e);let s=n;return o!==e&&(qe(e)?n.length>3&&(s=function(i,a,l){return n.call(this,i,a,l,e)}):s=function(i,a,l){return n.call(this,i,Rt(e,a),l,e)}),o[t](s,...r)}function bo(e,t,n){const r=ee(e);Ee(r,"iterate",ar);const o=r[t](...n);return(o===-1||o===!1)&&ms(n[0])?(n[0]=ee(n[0]),r[t](...n)):o}function qn(e,t,n=[]){_t(),cs();const r=ee(e)[t].apply(e,n);return fs(),xt(),r}const $c=os("__proto__,__v_isRef,__isVue"),Ca=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Et));function Rc(e){Et(e)||(e=String(e));const t=ee(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Sa{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?zc:Ta:s?Oa:Ra).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=U(t);if(!o){let l;if(i&&(l=Cc[n]))return l;if(n==="hasOwnProperty")return Rc}const a=Reflect.get(t,n,Se(t)?t:r);if((Et(n)?Ca.has(n):$c(n))||(o||Ee(t,"get",n),s))return a;if(Se(a)){const l=i&&as(n)?a:a.value;return o&&ue(l)?zo(l):l}return ue(a)?o?zo(a):no(a):a}}class $a extends Sa{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];const i=U(t)&&as(n);if(!this._isShallow){const u=wt(s);if(!qe(r)&&!wt(r)&&(s=ee(s),r=ee(r)),!i&&Se(s)&&!Se(r))return u||(s.value=r),!0}const a=i?Number(n)<t.length:re(t,n),l=Reflect.set(t,n,r,Se(t)?t:o);return t===ee(o)&&(a?Nt(r,s)&&gt(t,"set",n,r):gt(t,"add",n,r)),l}deleteProperty(t,n){const r=re(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&gt(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Et(n)||!Ca.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",U(t)?"length":Kt),Reflect.ownKeys(t)}}class Oc extends Sa{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Tc=new $a,Pc=new Oc,kc=new $a(!0);const Lo=e=>e,wr=e=>Reflect.getPrototypeOf(e);function Nc(e,t,n){return function(...r){const o=this.__v_raw,s=ee(o),i=mn(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...r),f=n?Lo:t?In:Ze;return!t&&Ee(s,"iterate",l?Do:Kt),ye(Object.create(u),{next(){const{value:c,done:p}=u.next();return p?{value:c,done:p}:{value:a?[f(c[0]),f(c[1])]:f(c),done:p}}})}}function Er(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ic(e,t){const n={get(o){const s=this.__v_raw,i=ee(s),a=ee(o);e||(Nt(o,a)&&Ee(i,"get",o),Ee(i,"get",a));const{has:l}=wr(i),u=t?Lo:e?In:Ze;if(l.call(i,o))return u(s.get(o));if(l.call(i,a))return u(s.get(a));s!==i&&s.get(o)},get size(){const o=this.__v_raw;return!e&&Ee(ee(o),"iterate",Kt),o.size},has(o){const s=this.__v_raw,i=ee(s),a=ee(o);return e||(Nt(o,a)&&Ee(i,"has",o),Ee(i,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const i=this,a=i.__v_raw,l=ee(a),u=t?Lo:e?In:Ze;return!e&&Ee(l,"iterate",Kt),a.forEach((f,c)=>o.call(s,u(f),u(c),i))}};return ye(n,e?{add:Er("add"),set:Er("set"),delete:Er("delete"),clear:Er("clear")}:{add(o){!t&&!qe(o)&&!wt(o)&&(o=ee(o));const s=ee(this);return wr(s).has.call(s,o)||(s.add(o),gt(s,"add",o,o)),this},set(o,s){!t&&!qe(s)&&!wt(s)&&(s=ee(s));const i=ee(this),{has:a,get:l}=wr(i);let u=a.call(i,o);u||(o=ee(o),u=a.call(i,o));const f=l.call(i,o);return i.set(o,s),u?Nt(s,f)&&gt(i,"set",o,s):gt(i,"add",o,s),this},delete(o){const s=ee(this),{has:i,get:a}=wr(s);let l=i.call(s,o);l||(o=ee(o),l=i.call(s,o)),a&&a.call(s,o);const u=s.delete(o);return l&&gt(s,"delete",o,void 0),u},clear(){const o=ee(this),s=o.size!==0,i=o.clear();return s&&gt(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Nc(o,e,t)}),n}function hs(e,t){const n=Ic(e,t);return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(re(n,o)&&o in r?n:r,o,s)}const Mc={get:hs(!1,!1)},Dc={get:hs(!1,!0)},Lc={get:hs(!0,!1)};const Ra=new WeakMap,Oa=new WeakMap,Ta=new WeakMap,zc=new WeakMap;function jc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bc(e){return e.__v_skip||!Object.isExtensible(e)?0:jc(uc(e))}function no(e){return wt(e)?e:ps(e,!1,Tc,Mc,Ra)}function Pa(e){return ps(e,!1,kc,Dc,Oa)}function zo(e){return ps(e,!0,Pc,Lc,Ta)}function ps(e,t,n,r,o){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=Bc(e);if(s===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,s===2?r:n);return o.set(e,a),a}function Wt(e){return wt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function wt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function ms(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Fc(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&da(e,"__v_skip",!0),e}const Ze=e=>ue(e)?no(e):e,In=e=>ue(e)?zo(e):e;function Se(e){return e?e.__v_isRef===!0:!1}function Hc(e){return ka(e,!1)}function Uc(e){return ka(e,!0)}function ka(e,t){return Se(e)?e:new Vc(e,t)}class Vc{constructor(t,n){this.dep=new ds,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ee(t),this._value=n?t:Ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||qe(t)||wt(t);t=r?t:ee(t),Nt(t,n)&&(this._rawValue=t,this._value=r?t:Ze(t),this.dep.trigger())}}function gn(e){return Se(e)?e.value:e}const qc={get:(e,t,n)=>t==="__v_raw"?e:gn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Se(o)&&!Se(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Na(e){return Wt(e)?e:new Proxy(e,qc)}class Gc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ds(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ir-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return ya(this,!0),!0}get value(){const t=this.dep.track();return wa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Kc(e,t,n=!1){let r,o;return V(e)?r=e:(r=e.get,o=e.set),new Gc(r,o,n)}const Ar={},Nr=new WeakMap;let Vt;function Wc(e,t=!1,n=Vt){if(n){let r=Nr.get(n);r||Nr.set(n,r=[]),r.push(e)}}function Jc(e,t,n=le){const{immediate:r,deep:o,once:s,scheduler:i,augmentJob:a,call:l}=n,u=N=>o?N:qe(N)||o===!1||o===0?vt(N,1):vt(N);let f,c,p,m,x=!1,C=!1;if(Se(e)?(c=()=>e.value,x=qe(e)):Wt(e)?(c=()=>u(e),x=!0):U(e)?(C=!0,x=e.some(N=>Wt(N)||qe(N)),c=()=>e.map(N=>{if(Se(N))return N.value;if(Wt(N))return u(N);if(V(N))return l?l(N,2):N()})):V(e)?t?c=l?()=>l(e,2):e:c=()=>{if(p){_t();try{p()}finally{xt()}}const N=Vt;Vt=f;try{return l?l(e,3,[m]):e(m)}finally{Vt=N}}:c=ct,t&&o){const N=c,T=o===!0?1/0:o;c=()=>vt(N(),T)}const H=wc(),k=()=>{f.stop(),H&&H.active&&is(H.effects,f)};if(s&&t){const N=t;t=(...T)=>{N(...T),k()}}let O=C?new Array(e.length).fill(Ar):Ar;const M=N=>{if(!(!(f.flags&1)||!f.dirty&&!N))if(t){const T=f.run();if(o||x||(C?T.some((L,K)=>Nt(L,O[K])):Nt(T,O))){p&&p();const L=Vt;Vt=f;try{const K=[T,O===Ar?void 0:C&&O[0]===Ar?[]:O,m];O=T,l?l(t,3,K):t(...K)}finally{Vt=L}}}else f.run()};return a&&a(M),f=new va(c),f.scheduler=i?()=>i(M,!1):M,m=N=>Wc(N,!1,f),p=f.onStop=()=>{const N=Nr.get(f);if(N){if(l)l(N,4);else for(const T of N)T();Nr.delete(f)}},t?r?M(!0):O=f.run():i?i(M.bind(null,!0),!0):f.run(),k.pause=f.pause.bind(f),k.resume=f.resume.bind(f),k.stop=k,k}function vt(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Se(e))vt(e.value,t,n);else if(U(e))for(let r=0;r<e.length;r++)vt(e[r],t,n);else if(la(e)||mn(e))e.forEach(r=>{vt(r,t,n)});else if(ua(e)){for(const r in e)vt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&vt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yr(e,t,n,r){try{return r?e(...r):e()}catch(o){_r(o,t,n)}}function Xe(e,t,n,r){if(V(e)){const o=yr(e,t,n,r);return o&&ca(o)&&o.catch(s=>{_r(s,t,n)}),o}if(U(e)){const o=[];for(let s=0;s<e.length;s++)o.push(Xe(e[s],t,n,r));return o}}function _r(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||le;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,l,u)===!1)return}a=a.parent}if(s){_t(),yr(s,null,10,[e,l,u]),xt();return}}Yc(e,n,o,r,i)}function Yc(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const Pe=[];let at=-1;const vn=[];let Ot=null,fn=0;const Ia=Promise.resolve();let Ir=null;function Mr(e){const t=Ir||Ia;return e?t.then(this?e.bind(this):e):t}function Qc(e){let t=at+1,n=Pe.length;for(;t<n;){const r=t+n>>>1,o=Pe[r],s=lr(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function gs(e){if(!(e.flags&1)){const t=lr(e),n=Pe[Pe.length-1];!n||!(e.flags&2)&&t>=lr(n)?Pe.push(e):Pe.splice(Qc(t),0,e),e.flags|=1,Ma()}}function Ma(){Ir||(Ir=Ia.then(La))}function jo(e){U(e)?vn.push(...e):Ot&&e.id===-1?Ot.splice(fn+1,0,e):e.flags&1||(vn.push(e),e.flags|=1),Ma()}function Hs(e,t,n=at+1){for(;n<Pe.length;n++){const r=Pe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Da(e){if(vn.length){const t=[...new Set(vn)].sort((n,r)=>lr(n)-lr(r));if(vn.length=0,Ot){Ot.push(...t);return}for(Ot=t,fn=0;fn<Ot.length;fn++){const n=Ot[fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,fn=0}}const lr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function La(e){try{for(at=0;at<Pe.length;at++){const t=Pe[at];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),yr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;at<Pe.length;at++){const t=Pe[at];t&&(t.flags&=-2)}at=-1,Pe.length=0,Da(),Ir=null,(Pe.length||vn.length)&&La()}}let xe=null,za=null;function Dr(e){const t=xe;return xe=e,za=e&&e.type.__scopeId||null,t}function bt(e,t=xe,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&jr(-1);const s=Dr(t);let i;try{i=e(...o)}finally{Dr(s),r._d&&jr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function _p(e,t){if(xe===null)return e;const n=ao(xe),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,i,a,l=le]=t[o];s&&(V(s)&&(s={mounted:s,updated:s}),s.deep&&vt(i),r.push({dir:s,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function zt(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[r];l&&(_t(),Xe(l,n,8,[e.el,a,e,t]),xt())}}function $r(e,t){if(Ce){let n=Ce.provides;const r=Ce.parent&&Ce.parent.provides;r===n&&(n=Ce.provides=Object.create(r)),n[e]=t}}function yt(e,t,n=!1){const r=Al();if(r||yn){let o=yn?yn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}const Zc=Symbol.for("v-scx"),Xc=()=>yt(Zc);function Rr(e,t,n){return ja(e,t,n)}function ja(e,t,n=le){const{immediate:r,deep:o,flush:s,once:i}=n,a=ye({},n),l=t&&r||!t&&s!=="post";let u;if(dr){if(s==="sync"){const m=Xc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=ct,m.resume=ct,m.pause=ct,m}}const f=Ce;a.call=(m,x,C)=>Xe(m,f,x,C);let c=!1;s==="post"?a.scheduler=m=>{Me(m,f&&f.suspense)}:s!=="sync"&&(c=!0,a.scheduler=(m,x)=>{x?m():gs(m)}),a.augmentJob=m=>{t&&(m.flags|=4),c&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const p=Jc(e,t,a);return dr&&(u?u.push(p):l&&p()),p}function ef(e,t,n){const r=this.proxy,o=ge(e)?e.includes(".")?Ba(r,e):()=>r[e]:e.bind(r,r);let s;V(t)?s=t:(s=t.handler,n=t);const i=xr(this),a=ja(o,s.bind(r),n);return i(),a}function Ba(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const tf=Symbol("_vte"),Fa=e=>e.__isTeleport,mt=Symbol("_leaveCb"),Cr=Symbol("_enterCb");function nf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ya(()=>{e.isMounted=!0}),Qa(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],Ha={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},Ua=e=>{const t=e.subTree;return t.component?Ua(t.component):t},rf={name:"BaseTransition",props:Ha,setup(e,{slots:t}){const n=Al(),r=nf();return()=>{const o=t.default&&Ga(t.default(),!0);if(!o||!o.length)return;const s=Va(o),i=ee(e),{mode:a}=i;if(r.isLeaving)return yo(s);const l=Us(s);if(!l)return yo(s);let u=Bo(l,i,r,n,c=>u=c);l.type!==_e&&cr(l,u);let f=n.subTree&&Us(n.subTree);if(f&&f.type!==_e&&!lt(f,l)&&Ua(n).type!==_e){let c=Bo(f,i,r,n);if(cr(f,c),a==="out-in"&&l.type!==_e)return r.isLeaving=!0,c.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave,f=void 0},yo(s);a==="in-out"&&l.type!==_e?c.delayLeave=(p,m,x)=>{const C=qa(r,f);C[String(f.key)]=f,p[mt]=()=>{m(),p[mt]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{x(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function Va(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==_e){t=n;break}}return t}const of=rf;function qa(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Bo(e,t,n,r,o){const{appear:s,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:p,onLeave:m,onAfterLeave:x,onLeaveCancelled:C,onBeforeAppear:H,onAppear:k,onAfterAppear:O,onAppearCancelled:M}=t,N=String(e.key),T=qa(n,e),L=(D,q)=>{D&&Xe(D,r,9,q)},K=(D,q)=>{const J=q[1];L(D,q),U(D)?D.every(S=>S.length<=1)&&J():D.length<=1&&J()},te={mode:i,persisted:a,beforeEnter(D){let q=l;if(!n.isMounted)if(s)q=H||l;else return;D[mt]&&D[mt](!0);const J=T[N];J&&lt(e,J)&&J.el[mt]&&J.el[mt](),L(q,[D])},enter(D){let q=u,J=f,S=c;if(!n.isMounted)if(s)q=k||u,J=O||f,S=M||c;else return;let W=!1;const de=D[Cr]=we=>{W||(W=!0,we?L(S,[D]):L(J,[D]),te.delayedLeave&&te.delayedLeave(),D[Cr]=void 0)};q?K(q,[D,de]):de()},leave(D,q){const J=String(e.key);if(D[Cr]&&D[Cr](!0),n.isUnmounting)return q();L(p,[D]);let S=!1;const W=D[mt]=de=>{S||(S=!0,q(),de?L(C,[D]):L(x,[D]),D[mt]=void 0,T[J]===e&&delete T[J])};T[J]=e,m?K(m,[D,W]):W()},clone(D){const q=Bo(D,t,n,r,o);return o&&o(q),q}};return te}function yo(e){if(ro(e))return e=Mt(e),e.children=null,e}function Us(e){if(!ro(e))return Fa(e.type)&&e.children?Va(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function cr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,cr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ga(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===Ae?(i.patchFlag&128&&o++,r=r.concat(Ga(i.children,t,a))):(t||i.type!==_e)&&r.push(a!=null?Mt(i,{key:a}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Ka(e,t){return V(e)?ye({name:e.name},t,{setup:e}):e}function Wa(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Lr=new WeakMap;function er(e,t,n,r,o=!1){if(U(e)){e.forEach((x,C)=>er(x,t&&(U(t)?t[C]:t),n,r,o));return}if(bn(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&er(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?ao(r.component):r.el,i=o?null:s,{i:a,r:l}=e,u=t&&t.r,f=a.refs===le?a.refs={}:a.refs,c=a.setupState,p=ee(c),m=c===le?aa:x=>re(p,x);if(u!=null&&u!==l){if(Vs(t),ge(u))f[u]=null,m(u)&&(c[u]=null);else if(Se(u)){u.value=null;const x=t;x.k&&(f[x.k]=null)}}if(V(l))yr(l,a,12,[i,f]);else{const x=ge(l),C=Se(l);if(x||C){const H=()=>{if(e.f){const k=x?m(l)?c[l]:f[l]:l.value;if(o)U(k)&&is(k,s);else if(U(k))k.includes(s)||k.push(s);else if(x)f[l]=[s],m(l)&&(c[l]=f[l]);else{const O=[s];l.value=O,e.k&&(f[e.k]=O)}}else x?(f[l]=i,m(l)&&(c[l]=i)):C&&(l.value=i,e.k&&(f[e.k]=i))};if(i){const k=()=>{H(),Lr.delete(e)};k.id=-1,Lr.set(e,k),Me(k,n)}else Vs(e),H()}}}function Vs(e){const t=Lr.get(e);t&&(t.flags|=8,Lr.delete(e))}Xr().requestIdleCallback;Xr().cancelIdleCallback;const bn=e=>!!e.type.__asyncLoader,ro=e=>e.type.__isKeepAlive;function sf(e,t){Ja(e,"a",t)}function af(e,t){Ja(e,"da",t)}function Ja(e,t,n=Ce){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(oo(t,r,n),n){let o=n.parent;for(;o&&o.parent;)ro(o.parent.vnode)&&lf(r,t,n,o),o=o.parent}}function lf(e,t,n,r){const o=oo(t,e,r,!0);Za(()=>{is(r[t],o)},n)}function oo(e,t,n=Ce,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{_t();const a=xr(n),l=Xe(t,n,e,i);return a(),xt(),l});return r?o.unshift(s):o.push(s),s}}const At=e=>(t,n=Ce)=>{(!dr||e==="sp")&&oo(e,(...r)=>t(...r),n)},cf=At("bm"),Ya=At("m"),ff=At("bu"),uf=At("u"),Qa=At("bum"),Za=At("um"),df=At("sp"),hf=At("rtg"),pf=At("rtc");function mf(e,t=Ce){oo("ec",e,t)}const Xa="components";function Fo(e,t){return tl(Xa,e,!0,t)||e}const el=Symbol.for("v-ndc");function gf(e){return ge(e)?tl(Xa,e,!1)||e:e||el}function tl(e,t,n=!0,r=!1){const o=xe||Ce;if(o){const s=o.type;{const a=au(s,!1);if(a&&(a===t||a===Ge(t)||a===Zr(Ge(t))))return s}const i=qs(o[e]||s[e],t)||qs(o.appContext[e],t);return!i&&r?s:i}}function qs(e,t){return e&&(e[t]||e[Ge(t)]||e[Zr(Ge(t))])}function Gs(e,t,n,r){let o;const s=n,i=U(e);if(i||ge(e)){const a=i&&Wt(e);let l=!1,u=!1;a&&(l=!qe(e),u=wt(e),e=to(e)),o=new Array(e.length);for(let f=0,c=e.length;f<c;f++)o[f]=t(l?u?In(Ze(e[f])):Ze(e[f]):e[f],f,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s)}else if(ue(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const f=a[l];o[l]=t(e[f],f,l,s)}}else o=[];return o}function xp(e,t,n={},r,o){if(xe.ce||xe.parent&&bn(xe.parent)&&xe.parent.ce){const u=Object.keys(n).length>0;return t!=="default"&&(n.name=t),Ve(),ur(Ae,null,[me("slot",n,r)],u?-2:64)}let s=e[t];s&&s._c&&(s._d=!1),Ve();const i=s&&nl(s(n)),a=n.key||i&&i.key,l=ur(Ae,{key:(a&&!Et(a)?a:`_${t}`)+(!i&&r?"_fb":"")},i||[],i&&e._===1?64:-2);return s&&s._c&&(s._d=!0),l}function nl(e){return e.some(t=>Dn(t)?!(t.type===_e||t.type===Ae&&!nl(t.children)):!0)?e:null}const Ho=e=>e?Cl(e)?ao(e):Ho(e.parent):null,tr=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ho(e.parent),$root:e=>Ho(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ol(e),$forceUpdate:e=>e.f||(e.f=()=>{gs(e.update)}),$nextTick:e=>e.n||(e.n=Mr.bind(e.proxy)),$watch:e=>ef.bind(e)}),_o=(e,t)=>e!==le&&!e.__isScriptSetup&&re(e,t),vf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(_o(r,t))return i[t]=1,r[t];if(o!==le&&re(o,t))return i[t]=2,o[t];if(re(s,t))return i[t]=3,s[t];if(n!==le&&re(n,t))return i[t]=4,n[t];Uo&&(i[t]=0)}}const u=tr[t];let f,c;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==le&&re(n,t))return i[t]=4,n[t];if(c=l.config.globalProperties,re(c,t))return c[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return _o(o,t)?(o[t]=n,!0):r!==le&&re(r,t)?(r[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,props:s,type:i}},a){let l;return!!(n[a]||e!==le&&a[0]!=="$"&&re(e,a)||_o(t,a)||re(s,a)||re(r,a)||re(tr,a)||re(o.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ks(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Uo=!0;function bf(e){const t=ol(e),n=e.proxy,r=e.ctx;Uo=!1,t.beforeCreate&&Ws(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:u,created:f,beforeMount:c,mounted:p,beforeUpdate:m,updated:x,activated:C,deactivated:H,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:N,render:T,renderTracked:L,renderTriggered:K,errorCaptured:te,serverPrefetch:D,expose:q,inheritAttrs:J,components:S,directives:W,filters:de}=t;if(u&&yf(u,r,null),i)for(const Y in i){const X=i[Y];V(X)&&(r[Y]=X.bind(n))}if(o){const Y=o.call(n,n);ue(Y)&&(e.data=no(Y))}if(Uo=!0,s)for(const Y in s){const X=s[Y],ft=V(X)?X.bind(n,n):V(X.get)?X.get.bind(n,n):ct,Ct=!V(X)&&V(X.set)?X.set.bind(n):ct,nt=Ye({get:ft,set:Ct});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>nt.value,set:ke=>nt.value=ke})}if(a)for(const Y in a)rl(a[Y],r,n,Y);if(l){const Y=V(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(X=>{$r(X,Y[X])})}f&&Ws(f,e,"c");function ae(Y,X){U(X)?X.forEach(ft=>Y(ft.bind(n))):X&&Y(X.bind(n))}if(ae(cf,c),ae(Ya,p),ae(ff,m),ae(uf,x),ae(sf,C),ae(af,H),ae(mf,te),ae(pf,L),ae(hf,K),ae(Qa,O),ae(Za,N),ae(df,D),U(q))if(q.length){const Y=e.exposed||(e.exposed={});q.forEach(X=>{Object.defineProperty(Y,X,{get:()=>n[X],set:ft=>n[X]=ft,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===ct&&(e.render=T),J!=null&&(e.inheritAttrs=J),S&&(e.components=S),W&&(e.directives=W),D&&Wa(e)}function yf(e,t,n=ct){U(e)&&(e=Vo(e));for(const r in e){const o=e[r];let s;ue(o)?"default"in o?s=yt(o.from||r,o.default,!0):s=yt(o.from||r):s=yt(o),Se(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function Ws(e,t,n){Xe(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function rl(e,t,n,r){let o=r.includes(".")?Ba(n,r):()=>n[r];if(ge(e)){const s=t[e];V(s)&&Rr(o,s)}else if(V(e))Rr(o,e.bind(n));else if(ue(e))if(U(e))e.forEach(s=>rl(s,t,n,r));else{const s=V(e.handler)?e.handler.bind(n):t[e.handler];V(s)&&Rr(o,s,e)}}function ol(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!n&&!r?l=t:(l={},o.length&&o.forEach(u=>zr(l,u,i,!0)),zr(l,t,i)),ue(t)&&s.set(t,l),l}function zr(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&zr(e,s,n,!0),o&&o.forEach(i=>zr(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=_f[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const _f={data:Js,props:Ys,emits:Ys,methods:Yn,computed:Yn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Yn,directives:Yn,watch:wf,provide:Js,inject:xf};function Js(e,t){return t?e?function(){return ye(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function xf(e,t){return Yn(Vo(e),Vo(t))}function Vo(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Yn(e,t){return e?ye(Object.create(null),e,t):t}function Ys(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:ye(Object.create(null),Ks(e),Ks(t??{})):t}function wf(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=Oe(e[r],t[r]);return n}function sl(){return{app:null,config:{isNativeTag:aa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ef=0;function Af(e,t){return function(r,o=null){V(r)||(r=ye({},r)),o!=null&&!ue(o)&&(o=null);const s=sl(),i=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Ef++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:cu,get config(){return s.config},set config(f){},use(f,...c){return i.has(f)||(f&&V(f.install)?(i.add(f),f.install(u,...c)):V(f)&&(i.add(f),f(u,...c))),u},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),u},component(f,c){return c?(s.components[f]=c,u):s.components[f]},directive(f,c){return c?(s.directives[f]=c,u):s.directives[f]},mount(f,c,p){if(!l){const m=u._ceVNode||me(r,o);return m.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),e(m,f,p),l=!0,u._container=f,f.__vue_app__=u,ao(m.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Xe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(f,c){return s.provides[f]=c,u},runWithContext(f){const c=yn;yn=u;try{return f()}finally{yn=c}}};return u}}let yn=null;const Cf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ge(t)}Modifiers`]||e[`${Dt(t)}Modifiers`];function Sf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let o=n;const s=t.startsWith("update:"),i=s&&Cf(r,t.slice(7));i&&(i.trim&&(o=n.map(f=>ge(f)?f.trim():f)),i.number&&(o=n.map(pc)));let a,l=r[a=ho(t)]||r[a=ho(Ge(t))];!l&&s&&(l=r[a=ho(Dt(t))]),l&&Xe(l,e,6,o);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Xe(u,e,6,o)}}const $f=new WeakMap;function il(e,t,n=!1){const r=n?$f:t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!V(e)){const l=u=>{const f=il(u,t,!0);f&&(a=!0,ye(i,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(ue(e)&&r.set(e,null),null):(U(s)?s.forEach(l=>i[l]=null):ye(i,s),ue(e)&&r.set(e,i),i)}function so(e,t){return!e||!Jr(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,Dt(t))||re(e,t))}function Qs(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:i,attrs:a,emit:l,render:u,renderCache:f,props:c,data:p,setupState:m,ctx:x,inheritAttrs:C}=e,H=Dr(e);let k,O;try{if(n.shapeFlag&4){const N=o||r,T=N;k=Je(u.call(T,N,f,c,m,p,x)),O=a}else{const N=t;k=Je(N.length>1?N(c,{attrs:a,slots:i,emit:l}):N(c,null)),O=t.props?a:Of(a)}}catch(N){nr.length=0,_r(N,e,1),k=me(_e)}let M=k;if(O&&C!==!1){const N=Object.keys(O),{shapeFlag:T}=M;N.length&&T&7&&(s&&N.some(ss)&&(O=Tf(O,s)),M=Mt(M,O,!1,!0))}return n.dirs&&(M=Mt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&cr(M,n.transition),k=M,Dr(H),k}function Rf(e,t=!0){let n;for(let r=0;r<e.length;r++){const o=e[r];if(Dn(o)){if(o.type!==_e||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Of=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jr(n))&&((t||(t={}))[n]=e[n]);return t},Tf=(e,t)=>{const n={};for(const r in e)(!ss(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Pf(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Zs(r,i,u):!!i;if(l&8){const f=t.dynamicProps;for(let c=0;c<f.length;c++){const p=f[c];if(i[p]!==r[p]&&!so(u,p))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Zs(r,i,u):!0:!!i;return!1}function Zs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!so(n,s))return!0}return!1}function vs({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const al={},ll=()=>Object.create(al),cl=e=>Object.getPrototypeOf(e)===al;function kf(e,t,n,r=!1){const o={},s=ll();e.propsDefaults=Object.create(null),fl(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Pa(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Nf(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=ee(o),[l]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let p=f[c];if(so(e.emitsOptions,p))continue;const m=t[p];if(l)if(re(s,p))m!==s[p]&&(s[p]=m,u=!0);else{const x=Ge(p);o[x]=qo(l,a,x,m,e,!1)}else m!==s[p]&&(s[p]=m,u=!0)}}}else{fl(e,t,o,s)&&(u=!0);let f;for(const c in a)(!t||!re(t,c)&&((f=Dt(c))===c||!re(t,f)))&&(l?n&&(n[c]!==void 0||n[f]!==void 0)&&(o[c]=qo(l,a,c,void 0,e,!0)):delete o[c]);if(s!==a)for(const c in s)(!t||!re(t,c))&&(delete s[c],u=!0)}u&&gt(e.attrs,"set","")}function fl(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Qn(l))continue;const u=t[l];let f;o&&re(o,f=Ge(l))?!s||!s.includes(f)?n[f]=u:(a||(a={}))[f]=u:so(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,i=!0)}if(s){const l=ee(n),u=a||le;for(let f=0;f<s.length;f++){const c=s[f];n[c]=qo(o,l,c,u[c],e,!re(u,c))}}return i}function qo(e,t,n,r,o,s){const i=e[n];if(i!=null){const a=re(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&V(l)){const{propsDefaults:u}=o;if(n in u)r=u[n];else{const f=xr(o);r=u[n]=l.call(null,t),f()}}else r=l;o.ce&&o.ce._setProp(n,r)}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===Dt(n))&&(r=!0))}return r}const If=new WeakMap;function ul(e,t,n=!1){const r=n?If:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!V(e)){const f=c=>{l=!0;const[p,m]=ul(c,t,!0);ye(i,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return ue(e)&&r.set(e,pn),pn;if(U(s))for(let f=0;f<s.length;f++){const c=Ge(s[f]);Xs(c)&&(i[c]=le)}else if(s)for(const f in s){const c=Ge(f);if(Xs(c)){const p=s[f],m=i[c]=U(p)||V(p)?{type:p}:ye({},p),x=m.type;let C=!1,H=!0;if(U(x))for(let k=0;k<x.length;++k){const O=x[k],M=V(O)&&O.name;if(M==="Boolean"){C=!0;break}else M==="String"&&(H=!1)}else C=V(x)&&x.name==="Boolean";m[0]=C,m[1]=H,(C||re(m,"default"))&&a.push(c)}}const u=[i,a];return ue(e)&&r.set(e,u),u}function Xs(e){return e[0]!=="$"&&!Qn(e)}const bs=e=>e==="_"||e==="_ctx"||e==="$stable",ys=e=>U(e)?e.map(Je):[Je(e)],Mf=(e,t,n)=>{if(t._n)return t;const r=bt((...o)=>ys(t(...o)),n);return r._c=!1,r},dl=(e,t,n)=>{const r=e._ctx;for(const o in e){if(bs(o))continue;const s=e[o];if(V(s))t[o]=Mf(o,s,r);else if(s!=null){const i=ys(s);t[o]=()=>i}}},hl=(e,t)=>{const n=ys(t);e.slots.default=()=>n},pl=(e,t,n)=>{for(const r in t)(n||!bs(r))&&(e[r]=t[r])},Df=(e,t,n)=>{const r=e.slots=ll();if(e.vnode.shapeFlag&32){const o=t._;o?(pl(r,t,n),n&&da(r,"_",o,!0)):dl(t,r)}else t&&hl(e,t)},Lf=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=le;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:pl(o,t,n):(s=!t.$stable,dl(t,o)),i=t}else t&&(hl(e,t),i={default:1});if(s)for(const a in o)!bs(a)&&i[a]==null&&delete o[a]},Me=Wf;function zf(e){return jf(e)}function jf(e,t){const n=Xr();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:u,setElementText:f,parentNode:c,nextSibling:p,setScopeId:m=ct,insertStaticContent:x}=e,C=(d,h,g,v=null,_=null,b=null,$=void 0,A=null,E=!!h.dynamicChildren)=>{if(d===h)return;d&&!lt(d,h)&&(v=y(d),ke(d,_,b,!0),d=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:w,ref:F,shapeFlag:P}=h;switch(w){case io:H(d,h,g,v);break;case _e:k(d,h,g,v);break;case Or:d==null&&O(h,g,v,$);break;case Ae:S(d,h,g,v,_,b,$,A,E);break;default:P&1?T(d,h,g,v,_,b,$,A,E):P&6?W(d,h,g,v,_,b,$,A,E):(P&64||P&128)&&w.process(d,h,g,v,_,b,$,A,E,z)}F!=null&&_?er(F,d&&d.ref,b,h||d,!h):F==null&&d&&d.ref!=null&&er(d.ref,null,b,d,!0)},H=(d,h,g,v)=>{if(d==null)r(h.el=a(h.children),g,v);else{const _=h.el=d.el;h.children!==d.children&&u(_,h.children)}},k=(d,h,g,v)=>{d==null?r(h.el=l(h.children||""),g,v):h.el=d.el},O=(d,h,g,v)=>{[d.el,d.anchor]=x(d.children,h,g,v,d.el,d.anchor)},M=({el:d,anchor:h},g,v)=>{let _;for(;d&&d!==h;)_=p(d),r(d,g,v),d=_;r(h,g,v)},N=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),o(d),d=g;o(h)},T=(d,h,g,v,_,b,$,A,E)=>{if(h.type==="svg"?$="svg":h.type==="math"&&($="mathml"),d==null)L(h,g,v,_,b,$,A,E);else{const w=d.el&&d.el._isVueCE?d.el:null;try{w&&w._beginPatch(),D(d,h,_,b,$,A,E)}finally{w&&w._endPatch()}}},L=(d,h,g,v,_,b,$,A)=>{let E,w;const{props:F,shapeFlag:P,transition:j,dirs:G}=d;if(E=d.el=i(d.type,b,F&&F.is,F),P&8?f(E,d.children):P&16&&te(d.children,E,null,v,_,xo(d,b),$,A),G&&zt(d,null,v,"created"),K(E,d,d.scopeId,$,v),F){for(const ce in F)ce!=="value"&&!Qn(ce)&&s(E,ce,null,F[ce],b,v);"value"in F&&s(E,"value",null,F.value,b),(w=F.onVnodeBeforeMount)&&it(w,v,d)}G&&zt(d,null,v,"beforeMount");const Z=Bf(_,j);Z&&j.beforeEnter(E),r(E,h,g),((w=F&&F.onVnodeMounted)||Z||G)&&Me(()=>{w&&it(w,v,d),Z&&j.enter(E),G&&zt(d,null,v,"mounted")},_)},K=(d,h,g,v,_)=>{if(g&&m(d,g),v)for(let b=0;b<v.length;b++)m(d,v[b]);if(_){let b=_.subTree;if(h===b||bl(b.type)&&(b.ssContent===h||b.ssFallback===h)){const $=_.vnode;K(d,$,$.scopeId,$.slotScopeIds,_.parent)}}},te=(d,h,g,v,_,b,$,A,E=0)=>{for(let w=E;w<d.length;w++){const F=d[w]=A?Tt(d[w]):Je(d[w]);C(null,F,h,g,v,_,b,$,A)}},D=(d,h,g,v,_,b,$)=>{const A=h.el=d.el;let{patchFlag:E,dynamicChildren:w,dirs:F}=h;E|=d.patchFlag&16;const P=d.props||le,j=h.props||le;let G;if(g&&jt(g,!1),(G=j.onVnodeBeforeUpdate)&&it(G,g,h,d),F&&zt(h,d,g,"beforeUpdate"),g&&jt(g,!0),(P.innerHTML&&j.innerHTML==null||P.textContent&&j.textContent==null)&&f(A,""),w?q(d.dynamicChildren,w,A,g,v,xo(h,_),b):$||X(d,h,A,null,g,v,xo(h,_),b,!1),E>0){if(E&16)J(A,P,j,g,_);else if(E&2&&P.class!==j.class&&s(A,"class",null,j.class,_),E&4&&s(A,"style",P.style,j.style,_),E&8){const Z=h.dynamicProps;for(let ce=0;ce<Z.length;ce++){const se=Z[ce],Ne=P[se],Ie=j[se];(Ie!==Ne||se==="value")&&s(A,se,Ne,Ie,_,g)}}E&1&&d.children!==h.children&&f(A,h.children)}else!$&&w==null&&J(A,P,j,g,_);((G=j.onVnodeUpdated)||F)&&Me(()=>{G&&it(G,g,h,d),F&&zt(h,d,g,"updated")},v)},q=(d,h,g,v,_,b,$)=>{for(let A=0;A<h.length;A++){const E=d[A],w=h[A],F=E.el&&(E.type===Ae||!lt(E,w)||E.shapeFlag&198)?c(E.el):g;C(E,w,F,null,v,_,b,$,!0)}},J=(d,h,g,v,_)=>{if(h!==g){if(h!==le)for(const b in h)!Qn(b)&&!(b in g)&&s(d,b,h[b],null,_,v);for(const b in g){if(Qn(b))continue;const $=g[b],A=h[b];$!==A&&b!=="value"&&s(d,b,A,$,_,v)}"value"in g&&s(d,"value",h.value,g.value,_)}},S=(d,h,g,v,_,b,$,A,E)=>{const w=h.el=d?d.el:a(""),F=h.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:j,slotScopeIds:G}=h;G&&(A=A?A.concat(G):G),d==null?(r(w,g,v),r(F,g,v),te(h.children||[],g,F,_,b,$,A,E)):P>0&&P&64&&j&&d.dynamicChildren&&d.dynamicChildren.length===j.length?(q(d.dynamicChildren,j,g,_,b,$,A),(h.key!=null||_&&h===_.subTree)&&ml(d,h,!0)):X(d,h,g,F,_,b,$,A,E)},W=(d,h,g,v,_,b,$,A,E)=>{h.slotScopeIds=A,d==null?h.shapeFlag&512?_.ctx.activate(h,g,v,$,E):de(h,g,v,_,b,$,E):we(d,h,E)},de=(d,h,g,v,_,b,$)=>{const A=d.component=nu(d,v,_);if(ro(d)&&(A.ctx.renderer=z),ru(A,!1,$),A.asyncDep){if(_&&_.registerDep(A,ae,$),!d.el){const E=A.subTree=me(_e);k(null,E,h,g),d.placeholder=E.el}}else ae(A,d,h,g,_,b,$)},we=(d,h,g)=>{const v=h.component=d.component;if(Pf(d,h,g))if(v.asyncDep&&!v.asyncResolved){Y(v,h,g);return}else v.next=h,v.update();else h.el=d.el,v.vnode=h},ae=(d,h,g,v,_,b,$)=>{const A=()=>{if(d.isMounted){let{next:P,bu:j,u:G,parent:Z,vnode:ce}=d;{const ot=gl(d);if(ot){P&&(P.el=ce.el,Y(d,P,$)),ot.asyncDep.then(()=>{d.isUnmounted||A()});return}}let se=P,Ne;jt(d,!1),P?(P.el=ce.el,Y(d,P,$)):P=ce,j&&po(j),(Ne=P.props&&P.props.onVnodeBeforeUpdate)&&it(Ne,Z,P,ce),jt(d,!0);const Ie=Qs(d),rt=d.subTree;d.subTree=Ie,C(rt,Ie,c(rt.el),y(rt),d,_,b),P.el=Ie.el,se===null&&vs(d,Ie.el),G&&Me(G,_),(Ne=P.props&&P.props.onVnodeUpdated)&&Me(()=>it(Ne,Z,P,ce),_)}else{let P;const{el:j,props:G}=h,{bm:Z,m:ce,parent:se,root:Ne,type:Ie}=d,rt=bn(h);jt(d,!1),Z&&po(Z),!rt&&(P=G&&G.onVnodeBeforeMount)&&it(P,se,h),jt(d,!0);{Ne.ce&&Ne.ce._def.shadowRoot!==!1&&Ne.ce._injectChildStyle(Ie);const ot=d.subTree=Qs(d);C(null,ot,g,v,d,_,b),h.el=ot.el}if(ce&&Me(ce,_),!rt&&(P=G&&G.onVnodeMounted)){const ot=h;Me(()=>it(P,se,ot),_)}(h.shapeFlag&256||se&&bn(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Me(d.a,_),d.isMounted=!0,h=g=v=null}};d.scope.on();const E=d.effect=new va(A);d.scope.off();const w=d.update=E.run.bind(E),F=d.job=E.runIfDirty.bind(E);F.i=d,F.id=d.uid,E.scheduler=()=>gs(F),jt(d,!0),w()},Y=(d,h,g)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,Nf(d,h.props,v,g),Lf(d,h.children,g),_t(),Hs(d),xt()},X=(d,h,g,v,_,b,$,A,E=!1)=>{const w=d&&d.children,F=d?d.shapeFlag:0,P=h.children,{patchFlag:j,shapeFlag:G}=h;if(j>0){if(j&128){Ct(w,P,g,v,_,b,$,A,E);return}else if(j&256){ft(w,P,g,v,_,b,$,A,E);return}}G&8?(F&16&&He(w,_,b),P!==w&&f(g,P)):F&16?G&16?Ct(w,P,g,v,_,b,$,A,E):He(w,_,b,!0):(F&8&&f(g,""),G&16&&te(P,g,v,_,b,$,A,E))},ft=(d,h,g,v,_,b,$,A,E)=>{d=d||pn,h=h||pn;const w=d.length,F=h.length,P=Math.min(w,F);let j;for(j=0;j<P;j++){const G=h[j]=E?Tt(h[j]):Je(h[j]);C(d[j],G,g,null,_,b,$,A,E)}w>F?He(d,_,b,!0,!1,P):te(h,g,v,_,b,$,A,E,P)},Ct=(d,h,g,v,_,b,$,A,E)=>{let w=0;const F=h.length;let P=d.length-1,j=F-1;for(;w<=P&&w<=j;){const G=d[w],Z=h[w]=E?Tt(h[w]):Je(h[w]);if(lt(G,Z))C(G,Z,g,null,_,b,$,A,E);else break;w++}for(;w<=P&&w<=j;){const G=d[P],Z=h[j]=E?Tt(h[j]):Je(h[j]);if(lt(G,Z))C(G,Z,g,null,_,b,$,A,E);else break;P--,j--}if(w>P){if(w<=j){const G=j+1,Z=G<F?h[G].el:v;for(;w<=j;)C(null,h[w]=E?Tt(h[w]):Je(h[w]),g,Z,_,b,$,A,E),w++}}else if(w>j)for(;w<=P;)ke(d[w],_,b,!0),w++;else{const G=w,Z=w,ce=new Map;for(w=Z;w<=j;w++){const je=h[w]=E?Tt(h[w]):Je(h[w]);je.key!=null&&ce.set(je.key,w)}let se,Ne=0;const Ie=j-Z+1;let rt=!1,ot=0;const Vn=new Array(Ie);for(w=0;w<Ie;w++)Vn[w]=0;for(w=G;w<=P;w++){const je=d[w];if(Ne>=Ie){ke(je,_,b,!0);continue}let st;if(je.key!=null)st=ce.get(je.key);else for(se=Z;se<=j;se++)if(Vn[se-Z]===0&&lt(je,h[se])){st=se;break}st===void 0?ke(je,_,b,!0):(Vn[st-Z]=w+1,st>=ot?ot=st:rt=!0,C(je,h[st],g,null,_,b,$,A,E),Ne++)}const Ds=rt?Ff(Vn):pn;for(se=Ds.length-1,w=Ie-1;w>=0;w--){const je=Z+w,st=h[je],Ls=h[je+1],zs=je+1<F?Ls.el||vl(Ls):v;Vn[w]===0?C(null,st,g,zs,_,b,$,A,E):rt&&(se<0||w!==Ds[se]?nt(st,g,zs,2):se--)}}},nt=(d,h,g,v,_=null)=>{const{el:b,type:$,transition:A,children:E,shapeFlag:w}=d;if(w&6){nt(d.component.subTree,h,g,v);return}if(w&128){d.suspense.move(h,g,v);return}if(w&64){$.move(d,h,g,z);return}if($===Ae){r(b,h,g);for(let P=0;P<E.length;P++)nt(E[P],h,g,v);r(d.anchor,h,g);return}if($===Or){M(d,h,g);return}if(v!==2&&w&1&&A)if(v===0)A.beforeEnter(b),r(b,h,g),Me(()=>A.enter(b),_);else{const{leave:P,delayLeave:j,afterLeave:G}=A,Z=()=>{d.ctx.isUnmounted?o(b):r(b,h,g)},ce=()=>{b._isLeaving&&b[mt](!0),P(b,()=>{Z(),G&&G()})};j?j(b,Z,ce):ce()}else r(b,h,g)},ke=(d,h,g,v=!1,_=!1)=>{const{type:b,props:$,ref:A,children:E,dynamicChildren:w,shapeFlag:F,patchFlag:P,dirs:j,cacheIndex:G}=d;if(P===-2&&(_=!1),A!=null&&(_t(),er(A,null,g,d,!0),xt()),G!=null&&(h.renderCache[G]=void 0),F&256){h.ctx.deactivate(d);return}const Z=F&1&&j,ce=!bn(d);let se;if(ce&&(se=$&&$.onVnodeBeforeUnmount)&&it(se,h,d),F&6)Lt(d.component,g,v);else{if(F&128){d.suspense.unmount(g,v);return}Z&&zt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,g,z,v):w&&!w.hasOnce&&(b!==Ae||P>0&&P&64)?He(w,h,g,!1,!0):(b===Ae&&P&384||!_&&F&16)&&He(E,h,g),v&&an(d)}(ce&&(se=$&&$.onVnodeUnmounted)||Z)&&Me(()=>{se&&it(se,h,d),Z&&zt(d,null,h,"unmounted")},g)},an=d=>{const{type:h,el:g,anchor:v,transition:_}=d;if(h===Ae){ln(g,v);return}if(h===Or){N(d);return}const b=()=>{o(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:$,delayLeave:A}=_,E=()=>$(g,b);A?A(d.el,b,E):E()}else b()},ln=(d,h)=>{let g;for(;d!==h;)g=p(d),o(d),d=g;o(h)},Lt=(d,h,g)=>{const{bum:v,scope:_,job:b,subTree:$,um:A,m:E,a:w}=d;ei(E),ei(w),v&&po(v),_.stop(),b&&(b.flags|=8,ke($,d,h,g)),A&&Me(A,h),Me(()=>{d.isUnmounted=!0},h)},He=(d,h,g,v=!1,_=!1,b=0)=>{for(let $=b;$<d.length;$++)ke(d[$],h,g,v,_)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[tf];return g?p(g):h};let I=!1;const R=(d,h,g)=>{let v;d==null?h._vnode&&(ke(h._vnode,null,null,!0),v=h._vnode.component):C(h._vnode||null,d,h,null,null,null,g),h._vnode=d,I||(I=!0,Hs(v),Da(),I=!1)},z={p:C,um:ke,m:nt,r:an,mt:de,mc:te,pc:X,pbc:q,n:y,o:e};return{render:R,hydrate:void 0,createApp:Af(R)}}function xo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Bf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ml(e,t,n=!1){const r=e.children,o=t.children;if(U(r)&&U(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=Tt(o[s]),a.el=i.el),!n&&a.patchFlag!==-2&&ml(i,a)),a.type===io&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=s+(e.type===Ae?1:0)),a.type===_e&&!a.el&&(a.el=i.el)}}function Ff(e){const t=e.slice(),n=[0];let r,o,s,i,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(o=n[n.length-1],e[o]<u){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<u?s=a+1:i=a;u<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function gl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gl(t)}function ei(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function vl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?vl(t.subTree):null}const bl=e=>e.__isSuspense;let Go=0;const Hf={name:"Suspense",__isSuspense:!0,process(e,t,n,r,o,s,i,a,l,u){if(e==null)Vf(t,n,r,o,s,i,a,l,u);else{if(s&&s.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}qf(e,t,n,r,o,i,a,l,u)}},hydrate:Gf,normalize:Kf},Uf=Hf;function fr(e,t){const n=e.props&&e.props[t];V(n)&&n()}function Vf(e,t,n,r,o,s,i,a,l){const{p:u,o:{createElement:f}}=l,c=f("div"),p=e.suspense=yl(e,o,r,t,c,n,s,i,a,l);u(null,p.pendingBranch=e.ssContent,c,null,r,p,s,i),p.deps>0?(fr(e,"onPending"),fr(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,s,i),_n(p,e.ssFallback)):p.resolve(!1,!0)}function qf(e,t,n,r,o,s,i,a,{p:l,um:u,o:{createElement:f}}){const c=t.suspense=e.suspense;c.vnode=t,t.el=e.el;const p=t.ssContent,m=t.ssFallback,{activeBranch:x,pendingBranch:C,isInFallback:H,isHydrating:k}=c;if(C)c.pendingBranch=p,lt(C,p)?(l(C,p,c.hiddenContainer,null,o,c,s,i,a),c.deps<=0?c.resolve():H&&(k||(l(x,m,n,r,o,null,s,i,a),_n(c,m)))):(c.pendingId=Go++,k?(c.isHydrating=!1,c.activeBranch=C):u(C,o,c),c.deps=0,c.effects.length=0,c.hiddenContainer=f("div"),H?(l(null,p,c.hiddenContainer,null,o,c,s,i,a),c.deps<=0?c.resolve():(l(x,m,n,r,o,null,s,i,a),_n(c,m))):x&&lt(x,p)?(l(x,p,n,r,o,c,s,i,a),c.resolve(!0)):(l(null,p,c.hiddenContainer,null,o,c,s,i,a),c.deps<=0&&c.resolve()));else if(x&&lt(x,p))l(x,p,n,r,o,c,s,i,a),_n(c,p);else if(fr(t,"onPending"),c.pendingBranch=p,p.shapeFlag&512?c.pendingId=p.component.suspenseId:c.pendingId=Go++,l(null,p,c.hiddenContainer,null,o,c,s,i,a),c.deps<=0)c.resolve();else{const{timeout:O,pendingId:M}=c;O>0?setTimeout(()=>{c.pendingId===M&&c.fallback(m)},O):O===0&&c.fallback(m)}}function yl(e,t,n,r,o,s,i,a,l,u,f=!1){const{p:c,m:p,um:m,n:x,o:{parentNode:C,remove:H}}=u;let k;const O=Jf(e);O&&t&&t.pendingBranch&&(k=t.pendingId,t.deps++);const M=e.props?ha(e.props.timeout):void 0,N=s,T={vnode:e,parent:t,parentComponent:n,namespace:i,container:r,hiddenContainer:o,deps:0,pendingId:Go++,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(L=!1,K=!1){const{vnode:te,activeBranch:D,pendingBranch:q,pendingId:J,effects:S,parentComponent:W,container:de,isInFallback:we}=T;let ae=!1;T.isHydrating?T.isHydrating=!1:L||(ae=D&&q.transition&&q.transition.mode==="out-in",ae&&(D.transition.afterLeave=()=>{J===T.pendingId&&(p(q,de,s===N?x(D):s,0),jo(S),we&&te.ssFallback&&(te.ssFallback.el=null))}),D&&(C(D.el)===de&&(s=x(D)),m(D,W,T,!0),!ae&&we&&te.ssFallback&&Me(()=>te.ssFallback.el=null,T)),ae||p(q,de,s,0)),_n(T,q),T.pendingBranch=null,T.isInFallback=!1;let Y=T.parent,X=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...S),X=!0;break}Y=Y.parent}!X&&!ae&&jo(S),T.effects=[],O&&t&&t.pendingBranch&&k===t.pendingId&&(t.deps--,t.deps===0&&!K&&t.resolve()),fr(te,"onResolve")},fallback(L){if(!T.pendingBranch)return;const{vnode:K,activeBranch:te,parentComponent:D,container:q,namespace:J}=T;fr(K,"onFallback");const S=x(te),W=()=>{T.isInFallback&&(c(null,L,q,S,D,null,J,a,l),_n(T,L))},de=L.transition&&L.transition.mode==="out-in";de&&(te.transition.afterLeave=W),T.isInFallback=!0,m(te,D,null,!0),de||W()},move(L,K,te){T.activeBranch&&p(T.activeBranch,L,K,te),T.container=L},next(){return T.activeBranch&&x(T.activeBranch)},registerDep(L,K,te){const D=!!T.pendingBranch;D&&T.deps++;const q=L.vnode.el;L.asyncDep.catch(J=>{_r(J,L,0)}).then(J=>{if(L.isUnmounted||T.isUnmounted||T.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:S}=L;Wo(L,J),q&&(S.el=q);const W=!q&&L.subTree.el;K(L,S,C(q||L.subTree.el),q?null:x(L.subTree),T,i,te),W&&(S.placeholder=null,H(W)),vs(L,S.el),D&&--T.deps===0&&T.resolve()})},unmount(L,K){T.isUnmounted=!0,T.activeBranch&&m(T.activeBranch,n,L,K),T.pendingBranch&&m(T.pendingBranch,n,L,K)}};return T}function Gf(e,t,n,r,o,s,i,a,l){const u=t.suspense=yl(t,r,n,e.parentNode,document.createElement("div"),null,o,s,i,a,!0),f=l(e,u.pendingBranch=t.ssContent,n,u,s,i);return u.deps===0&&u.resolve(!1,!0),f}function Kf(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=ti(r?n.default:n),e.ssFallback=r?ti(n.fallback):me(_e)}function ti(e){let t;if(V(e)){const n=Mn&&e._c;n&&(e._d=!1,Ve()),e=e(),n&&(e._d=!0,t=Le,_l())}return U(e)&&(e=Rf(e)),e=Je(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Wf(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):jo(e)}function _n(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let o=t.el;for(;!o&&t.component;)t=t.component.subTree,o=t.el;n.el=o,r&&r.subTree===n&&(r.vnode.el=o,vs(r,o))}function Jf(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Ae=Symbol.for("v-fgt"),io=Symbol.for("v-txt"),_e=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),nr=[];let Le=null;function Ve(e=!1){nr.push(Le=e?null:[])}function _l(){nr.pop(),Le=nr[nr.length-1]||null}let Mn=1;function jr(e,t=!1){Mn+=e,e<0&&Le&&t&&(Le.hasOnce=!0)}function xl(e){return e.dynamicChildren=Mn>0?Le||pn:null,_l(),Mn>0&&Le&&Le.push(e),e}function un(e,t,n,r,o,s){return xl(he(e,t,n,r,o,s,!0))}function ur(e,t,n,r,o){return xl(me(e,t,n,r,o,!0))}function Dn(e){return e?e.__v_isVNode===!0:!1}function lt(e,t){return e.type===t.type&&e.key===t.key}const wl=({key:e})=>e??null,Tr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||Se(e)||V(e)?{i:xe,r:e,k:t,f:!!n}:e:null);function he(e,t=null,n=null,r=0,o=null,s=e===Ae?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wl(t),ref:t&&Tr(t),scopeId:za,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:xe};return a?(_s(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Mn>0&&!i&&Le&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Le.push(l),l}const me=Yf;function Yf(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===el)&&(e=_e),Dn(e)){const a=Mt(e,t,!0);return n&&_s(a,n),Mn>0&&!s&&Le&&(a.shapeFlag&6?Le[Le.indexOf(e)]=a:Le.push(a)),a.patchFlag=-2,a}if(lu(e)&&(e=e.__vccOpts),t){t=Qf(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=eo(a)),ue(l)&&(ms(l)&&!U(l)&&(l=ye({},l)),t.style=ls(l))}const i=ge(e)?1:bl(e)?128:Fa(e)?64:ue(e)?4:V(e)?2:0;return he(e,t,n,r,o,i,s,!0)}function Qf(e){return e?ms(e)||cl(e)?ye({},e):e:null}function Mt(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:i,children:a,transition:l}=e,u=t?Xf(o||{},t):o,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&wl(u),ref:t&&t.ref?n&&s?U(s)?s.concat(Tr(t)):[s,Tr(t)]:Tr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&cr(f,l.clone(f)),f}function El(e=" ",t=0){return me(io,null,e,t)}function Zf(e,t){const n=me(Or,null,e);return n.staticCount=t,n}function wp(e="",t=!1){return t?(Ve(),ur(_e,null,e)):me(_e,null,e)}function Je(e){return e==null||typeof e=="boolean"?me(_e):U(e)?me(Ae,null,e.slice()):Dn(e)?Tt(e):me(io,null,String(e))}function Tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function _s(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),_s(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!cl(t)?t._ctx=xe:o===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[El(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=eo([t.class,r.class]));else if(o==="style")t.style=ls([t.style,r.style]);else if(Jr(o)){const s=t[o],i=r[o];i&&s!==i&&!(U(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function it(e,t,n,r=null){Xe(e,t,7,[n,r])}const eu=sl();let tu=0;function nu(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||eu,s={uid:tu++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ul(r,o),emitsOptions:il(r,o),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Sf.bind(null,s),e.ce&&e.ce(s),s}let Ce=null;const Al=()=>Ce||xe;let Br,Ko;{const e=Xr(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};Br=t("__VUE_INSTANCE_SETTERS__",n=>Ce=n),Ko=t("__VUE_SSR_SETTERS__",n=>dr=n)}const xr=e=>{const t=Ce;return Br(e),e.scope.on(),()=>{e.scope.off(),Br(t)}},ni=()=>{Ce&&Ce.scope.off(),Br(null)};function Cl(e){return e.vnode.shapeFlag&4}let dr=!1;function ru(e,t=!1,n=!1){t&&Ko(t);const{props:r,children:o}=e.vnode,s=Cl(e);kf(e,r,s,t),Df(e,o,n||t);const i=s?ou(e,t):void 0;return t&&Ko(!1),i}function ou(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vf);const{setup:r}=n;if(r){_t();const o=e.setupContext=r.length>1?iu(e):null,s=xr(e),i=yr(r,e,0,[e.props,o]),a=ca(i);if(xt(),s(),(a||e.sp)&&!bn(e)&&Wa(e),a){if(i.then(ni,ni),t)return i.then(l=>{Wo(e,l)}).catch(l=>{_r(l,e,0)});e.asyncDep=i}else Wo(e,i)}else Sl(e)}function Wo(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Na(t)),Sl(e)}function Sl(e,t,n){const r=e.type;e.render||(e.render=r.render||ct);{const o=xr(e);_t();try{bf(e)}finally{xt(),o()}}}const su={get(e,t){return Ee(e,"get",""),e[t]}};function iu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,su),slots:e.slots,emit:e.emit,expose:t}}function ao(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Na(Fc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tr)return tr[n](e)},has(t,n){return n in t||n in tr}})):e.proxy}function au(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function lu(e){return V(e)&&"__vccOpts"in e}const Ye=(e,t)=>Kc(e,t,dr);function xs(e,t,n){try{jr(-1);const r=arguments.length;return r===2?ue(t)&&!U(t)?Dn(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Dn(n)&&(n=[n]),me(e,t,n))}finally{jr(1)}}const cu="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jo;const ri=typeof window<"u"&&window.trustedTypes;if(ri)try{Jo=ri.createPolicy("vue",{createHTML:e=>e})}catch{}const $l=Jo?e=>Jo.createHTML(e):e=>e,fu="http://www.w3.org/2000/svg",uu="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,oi=pt&&pt.createElement("template"),du={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?pt.createElementNS(fu,e):t==="mathml"?pt.createElementNS(uu,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{oi.innerHTML=$l(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=oi.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},St="transition",Gn="animation",hr=Symbol("_vtc"),Rl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hu=ye({},Ha,Rl),pu=e=>(e.displayName="Transition",e.props=hu,e),mu=pu((e,{slots:t})=>xs(of,gu(e),t)),Bt=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},si=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function gu(e){const t={};for(const S in e)S in Rl||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=i,appearToClass:f=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,x=vu(o),C=x&&x[0],H=x&&x[1],{onBeforeEnter:k,onEnter:O,onEnterCancelled:M,onLeave:N,onLeaveCancelled:T,onBeforeAppear:L=k,onAppear:K=O,onAppearCancelled:te=M}=t,D=(S,W,de,we)=>{S._enterCancelled=we,Ft(S,W?f:a),Ft(S,W?u:i),de&&de()},q=(S,W)=>{S._isLeaving=!1,Ft(S,c),Ft(S,m),Ft(S,p),W&&W()},J=S=>(W,de)=>{const we=S?K:O,ae=()=>D(W,S,de);Bt(we,[W,ae]),ii(()=>{Ft(W,S?l:s),dt(W,S?f:a),si(we)||ai(W,r,C,ae)})};return ye(t,{onBeforeEnter(S){Bt(k,[S]),dt(S,s),dt(S,i)},onBeforeAppear(S){Bt(L,[S]),dt(S,l),dt(S,u)},onEnter:J(!1),onAppear:J(!0),onLeave(S,W){S._isLeaving=!0;const de=()=>q(S,W);dt(S,c),S._enterCancelled?(dt(S,p),fi(S)):(fi(S),dt(S,p)),ii(()=>{S._isLeaving&&(Ft(S,c),dt(S,m),si(N)||ai(S,r,H,de))}),Bt(N,[S,de])},onEnterCancelled(S){D(S,!1,void 0,!0),Bt(M,[S])},onAppearCancelled(S){D(S,!0,void 0,!0),Bt(te,[S])},onLeaveCancelled(S){q(S),Bt(T,[S])}})}function vu(e){if(e==null)return null;if(ue(e))return[wo(e.enter),wo(e.leave)];{const t=wo(e);return[t,t]}}function wo(e){return ha(e)}function dt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[hr]||(e[hr]=new Set)).add(t)}function Ft(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[hr];n&&(n.delete(t),n.size||(e[hr]=void 0))}function ii(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let bu=0;function ai(e,t,n,r){const o=e._endId=++bu,s=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:i,timeout:a,propCount:l}=yu(e,t);if(!i)return r();const u=i+"end";let f=0;const c=()=>{e.removeEventListener(u,p),s()},p=m=>{m.target===e&&++f>=l&&c()};setTimeout(()=>{f<l&&c()},a+1),e.addEventListener(u,p)}function yu(e,t){const n=window.getComputedStyle(e),r=x=>(n[x]||"").split(", "),o=r(`${St}Delay`),s=r(`${St}Duration`),i=li(o,s),a=r(`${Gn}Delay`),l=r(`${Gn}Duration`),u=li(a,l);let f=null,c=0,p=0;t===St?i>0&&(f=St,c=i,p=s.length):t===Gn?u>0&&(f=Gn,c=u,p=l.length):(c=Math.max(i,u),f=c>0?i>u?St:Gn:null,p=f?f===St?s.length:l.length:0);const m=f===St&&/\b(?:transform|all)(?:,|$)/.test(r(`${St}Property`).toString());return{type:f,timeout:c,propCount:p,hasTransform:m}}function li(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ci(n)+ci(e[r])))}function ci(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function fi(e){return(e?e.ownerDocument:document).body.offsetHeight}function _u(e,t,n){const r=e[hr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Fr=Symbol("_vod"),Ol=Symbol("_vsh"),Ep={name:"show",beforeMount(e,{value:t},{transition:n}){e[Fr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Kn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Kn(e,!0),r.enter(e)):r.leave(e,()=>{Kn(e,!1)}):Kn(e,t))},beforeUnmount(e,{value:t}){Kn(e,t)}};function Kn(e,t){e.style.display=t?e[Fr]:"none",e[Ol]=!t}const xu=Symbol(""),wu=/(?:^|;)\s*display\s*:/;function Eu(e,t,n){const r=e.style,o=ge(n);let s=!1;if(n&&!o){if(t)if(ge(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Pr(r,a,"")}else for(const i in t)n[i]==null&&Pr(r,i,"");for(const i in n)i==="display"&&(s=!0),Pr(r,i,n[i])}else if(o){if(t!==n){const i=r[xu];i&&(n+=";"+i),r.cssText=n,s=wu.test(n)}}else t&&e.removeAttribute("style");Fr in e&&(e[Fr]=s?r.display:"",e[Ol]&&(r.display="none"))}const ui=/\s*!important$/;function Pr(e,t,n){if(U(n))n.forEach(r=>Pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Au(e,t);ui.test(n)?e.setProperty(Dt(r),n.replace(ui,""),"important"):e[r]=n}}const di=["Webkit","Moz","ms"],Eo={};function Au(e,t){const n=Eo[t];if(n)return n;let r=Ge(t);if(r!=="filter"&&r in e)return Eo[t]=r;r=Zr(r);for(let o=0;o<di.length;o++){const s=di[o]+r;if(s in e)return Eo[t]=s}return t}const hi="http://www.w3.org/1999/xlink";function pi(e,t,n,r,o,s=_c(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hi,t.slice(6,t.length)):e.setAttributeNS(hi,t,n):n==null||s&&!pa(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Et(n)?String(n):n)}function mi(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?$l(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=pa(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Cu(e,t,n,r){e.addEventListener(t,n,r)}function Su(e,t,n,r){e.removeEventListener(t,n,r)}const gi=Symbol("_vei");function $u(e,t,n,r,o=null){const s=e[gi]||(e[gi]={}),i=s[t];if(r&&i)i.value=r;else{const[a,l]=Ru(t);if(r){const u=s[t]=Pu(r,o);Cu(e,a,u,l)}else i&&(Su(e,a,i,l),s[t]=void 0)}}const vi=/(?:Once|Passive|Capture)$/;function Ru(e){let t;if(vi.test(e)){t={};let r;for(;r=e.match(vi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),t]}let Ao=0;const Ou=Promise.resolve(),Tu=()=>Ao||(Ou.then(()=>Ao=0),Ao=Date.now());function Pu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xe(ku(r,n.value),t,5,[r])};return n.value=e,n.attached=Tu(),n}function ku(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const bi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Nu=(e,t,n,r,o,s)=>{const i=o==="svg";t==="class"?_u(e,r,i):t==="style"?Eu(e,n,r):Jr(t)?ss(t)||$u(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Iu(e,t,r,i))?(mi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&pi(e,t,r,i,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ge(r))?mi(e,Ge(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pi(e,t,r,i))};function Iu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&bi(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return bi(t)&&ge(n)?!1:t in e}const Mu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ap=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=o=>{if(!("key"in o))return;const s=Dt(o.key);if(t.some(i=>i===s||Mu[i]===s))return e(o)})},Du=ye({patchProp:Nu},du);let yi;function Lu(){return yi||(yi=zf(Du))}const zu=(...e)=>{const t=Lu().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Bu(r);if(!o)return;const s=t._component;!V(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,ju(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function ju(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Bu(e){return ge(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=globalThis,ws=kr.ShadowRoot&&(kr.ShadyCSS===void 0||kr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Es=Symbol(),_i=new WeakMap;let Tl=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Es)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ws&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=_i.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&_i.set(n,t))}return t}toString(){return this.cssText}};const Fu=e=>new Tl(typeof e=="string"?e:e+"",void 0,Es),$e=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,s)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Tl(n,e,Es)},Hu=(e,t)=>{if(ws)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=kr.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},xi=ws?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Fu(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Uu,defineProperty:Vu,getOwnPropertyDescriptor:qu,getOwnPropertyNames:Gu,getOwnPropertySymbols:Ku,getPrototypeOf:Wu}=Object,It=globalThis,wi=It.trustedTypes,Ju=wi?wi.emptyScript:"",Co=It.reactiveElementPolyfillSupport,rr=(e,t)=>e,Hr={toAttribute(e,t){switch(t){case Boolean:e=e?Ju:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},As=(e,t)=>!Uu(e,t),Ei={attribute:!0,type:String,converter:Hr,reflect:!1,useDefault:!1,hasChanged:As};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),It.litPropertyMetadata??(It.litPropertyMetadata=new WeakMap);let dn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ei){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Vu(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:s}=qu(this.prototype,t)??{get(){return this[n]},set(i){this[n]=i}};return{get:o,set(i){const a=o==null?void 0:o.call(this);s==null||s.call(this,i),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ei}static _$Ei(){if(this.hasOwnProperty(rr("elementProperties")))return;const t=Wu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rr("properties"))){const n=this.properties,r=[...Gu(n),...Ku(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(xi(o))}else t!==void 0&&n.push(xi(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){var s;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Hr).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,n){var s,i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Hr;this._$Em=o;const u=l.fromAttribute(n,a.type);this[o]=u??((i=this._$Ej)==null?void 0:i.get(o))??u,this._$Em=null}}requestUpdate(t,n,r,o=!1,s){var i;if(t!==void 0){const a=this.constructor;if(o===!1&&(s=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??As)(s,n)||r.useDefault&&r.reflect&&s===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:o,wrapped:s},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??n??this[t]),s!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,i]of o){const{wrapped:a}=i,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,i,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};dn.elementStyles=[],dn.shadowRootOptions={mode:"open"},dn[rr("elementProperties")]=new Map,dn[rr("finalized")]=new Map,Co==null||Co({ReactiveElement:dn}),(It.reactiveElementVersions??(It.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or=globalThis,Ai=e=>e,Ur=or.trustedTypes,Ci=Ur?Ur.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pl="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,kl="?"+kt,Yu=`<${kl}>`,Xt=document,pr=()=>Xt.createComment(""),mr=e=>e===null||typeof e!="object"&&typeof e!="function",Cs=Array.isArray,Qu=e=>Cs(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",So=`[ 	
\f\r]`,Wn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Si=/-->/g,$i=/>/g,Ht=RegExp(`>|${So}(?:([^\\s"'>=/]+)(${So}*=${So}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ri=/'/g,Oi=/"/g,Nl=/^(?:script|style|textarea|title)$/i,Il=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ie=Il(1),Ti=Il(2),Ln=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),Pi=new WeakMap,qt=Xt.createTreeWalker(Xt,129);function Ml(e,t){if(!Cs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ci!==void 0?Ci.createHTML(t):t}const Zu=(e,t)=>{const n=e.length-1,r=[];let o,s=t===2?"<svg>":t===3?"<math>":"",i=Wn;for(let a=0;a<n;a++){const l=e[a];let u,f,c=-1,p=0;for(;p<l.length&&(i.lastIndex=p,f=i.exec(l),f!==null);)p=i.lastIndex,i===Wn?f[1]==="!--"?i=Si:f[1]!==void 0?i=$i:f[2]!==void 0?(Nl.test(f[2])&&(o=RegExp("</"+f[2],"g")),i=Ht):f[3]!==void 0&&(i=Ht):i===Ht?f[0]===">"?(i=o??Wn,c=-1):f[1]===void 0?c=-2:(c=i.lastIndex-f[2].length,u=f[1],i=f[3]===void 0?Ht:f[3]==='"'?Oi:Ri):i===Oi||i===Ri?i=Ht:i===Si||i===$i?i=Wn:(i=Ht,o=void 0);const m=i===Ht&&e[a+1].startsWith("/>")?" ":"";s+=i===Wn?l+Yu:c>=0?(r.push(u),l.slice(0,c)+Pl+l.slice(c)+kt+m):l+kt+(c===-2?a:m)}return[Ml(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let Yo=class Dl{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let s=0,i=0;const a=t.length-1,l=this.parts,[u,f]=Zu(t,n);if(this.el=Dl.createElement(u,r),qt.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=qt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Pl)){const p=f[i++],m=o.getAttribute(c).split(kt),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:x[2],strings:m,ctor:x[1]==="."?ed:x[1]==="?"?td:x[1]==="@"?nd:lo}),o.removeAttribute(c)}else c.startsWith(kt)&&(l.push({type:6,index:s}),o.removeAttribute(c));if(Nl.test(o.tagName)){const c=o.textContent.split(kt),p=c.length-1;if(p>0){o.textContent=Ur?Ur.emptyScript:"";for(let m=0;m<p;m++)o.append(c[m],pr()),qt.nextNode(),l.push({type:2,index:++s});o.append(c[p],pr())}}}else if(o.nodeType===8)if(o.data===kl)l.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(kt,c+1))!==-1;)l.push({type:7,index:s}),c+=kt.length-1}s++}}static createElement(t,n){const r=Xt.createElement("template");return r.innerHTML=t,r}};function zn(e,t,n=e,r){var i,a;if(t===Ln)return t;let o=r!==void 0?(i=n._$Co)==null?void 0:i[r]:n._$Cl;const s=mr(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=zn(e,o._$AS(e,t.values),o,r)),t}class Xu{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??Xt).importNode(n,!0);qt.currentNode=o;let s=qt.nextNode(),i=0,a=0,l=r[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new Ss(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new rd(s,this,t)),this._$AV.push(u),l=r[++a]}i!==(l==null?void 0:l.index)&&(s=qt.nextNode(),i++)}return qt.currentNode=Xt,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}let Ss=class Ll{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=zn(this,t,n),mr(t)?t===oe||t==null||t===""?(this._$AH!==oe&&this._$AR(),this._$AH=oe):t!==this._$AH&&t!==Ln&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==oe&&mr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Xt.createTextNode(t)),this._$AH=t}$(t){var s;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Yo.createElement(Ml(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(n);else{const i=new Xu(o,this),a=i.u(this.options);i.p(n),this.T(a),this._$AH=i}}_$AC(t){let n=Pi.get(t.strings);return n===void 0&&Pi.set(t.strings,n=new Yo(t)),n}k(t){Cs(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const s of t)o===n.length?n.push(r=new Ll(this.O(pr()),this.O(pr()),this,this.options)):r=n[o],r._$AI(s),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t!==this._$AB;){const o=Ai(t).nextSibling;Ai(t).remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},lo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,s){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=oe}_$AI(t,n=this,r,o){const s=this.strings;let i=!1;if(s===void 0)t=zn(this,t,n,0),i=!mr(t)||t!==this._$AH&&t!==Ln,i&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=zn(this,a[r+l],n,l),u===Ln&&(u=this._$AH[l]),i||(i=!mr(u)||u!==this._$AH[l]),u===oe?t=oe:t!==oe&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}i&&!o&&this.j(t)}j(t){t===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ed=class extends lo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===oe?void 0:t}};class td extends lo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==oe)}}let nd=class extends lo{constructor(t,n,r,o,s){super(t,n,r,o,s),this.type=5}_$AI(t,n=this){if((t=zn(this,t,n,0)??oe)===Ln)return;const r=this._$AH,o=t===oe&&r!==oe||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==oe&&(r===oe||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class rd{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){zn(this,t)}}const $o=or.litHtmlPolyfillSupport;$o==null||$o(Yo,Ss),(or.litHtmlVersions??(or.litHtmlVersions=[])).push("3.3.3");const od=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const s=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new Ss(t.insertBefore(pr(),s),s,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=globalThis;let ve=class extends dn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=od(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ln}};var ia;ve._$litElement$=!0,ve.finalized=!0,(ia=Jt.litElementHydrateSupport)==null||ia.call(Jt,{LitElement:ve});const Ro=Jt.litElementPolyfillSupport;Ro==null||Ro({LitElement:ve});(Jt.litElementVersions??(Jt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sd={attribute:!0,type:String,converter:Hr,reflect:!1,hasChanged:As},id=(e=sd,t,n)=>{const{kind:r,metadata:o}=n;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:i}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,l,e,!0,a)},init(a){return a!==void 0&&this.C(i,void 0,e,a),a}}}if(r==="setter"){const{name:i}=n;return function(a){const l=this[i];t.call(this,a),this.requestUpdate(i,l,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function B(e){return(t,n)=>typeof n=="object"?id(e,t,n):((r,o,s)=>{const i=o.hasOwnProperty(s);return o.constructor.createProperty(s,r),i?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zl=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ad(e,t){return(n,r,o)=>{const s=i=>{var a;return((a=i.renderRoot)==null?void 0:a.querySelector(e))??null};return zl(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $s(e){return(t,n)=>{const{slot:r,selector:o}=e??{},s="slot"+(r?`[name=${r}]`:":not([name])");return zl(t,n,{get(){var l;const i=(l=this.renderRoot)==null?void 0:l.querySelector(s),a=(i==null?void 0:i.assignedElements(e))??[];return o===void 0?a:a.filter(u=>u.matches(o))}})}}var on=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},xn;let Vr=(xn=class extends ve{constructor(){super(),this.exclusive=!1,this._onToggle=t=>{if(!this.exclusive)return;const n=t.target;if(n.open)for(const r of this._items)r!==n&&r.open&&(r.open=!1)},this.addEventListener("mfp-accordion-toggle",this._onToggle)}render(){return ie`<slot></slot>`}},xn.styles=$e`
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
    `,xn);on([B({type:Boolean})],Vr.prototype,"exclusive",void 0);on([$s({selector:"mfp-accordion-item"})],Vr.prototype,"_items",void 0);Vr=on([Re("mfp-accordion")],Vr);var wn;let gr=(wn=class extends ve{constructor(){super(...arguments),this.label="",this.open=!1,this.disabled=!1,this._onToggle=t=>{const n=t.target;this.open!==n.open&&(this.open=n.open),this.dispatchEvent(new CustomEvent("mfp-accordion-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})),this.dispatchEvent(new CustomEvent("mfp-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}}))}}render(){return ie`
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
        `}},wn.styles=$e`
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
    `,wn);on([B()],gr.prototype,"label",void 0);on([B({type:Boolean,reflect:!0})],gr.prototype,"open",void 0);on([B({type:Boolean,reflect:!0})],gr.prototype,"disabled",void 0);gr=on([Re("mfp-accordion-item")],gr);var co=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},En;let vr=(En=class extends ve{constructor(){super(...arguments),this.variant="neutral",this.size="sm",this.outlined=!1}render(){return ie`<slot></slot>`}},En.styles=$e`
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
    `,En);co([B({reflect:!0})],vr.prototype,"variant",void 0);co([B({reflect:!0})],vr.prototype,"size",void 0);co([B({type:Boolean,reflect:!0})],vr.prototype,"outlined",void 0);vr=co([Re("mfp-badge")],vr);var Hn=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Yt;let en=(Yt=class extends ve{constructor(){super(),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this._onClick=()=>{var t,n;this.disabled||this.loading||(this.type==="submit"?(t=this.form)==null||t.requestSubmit():this.type==="reset"&&((n=this.form)==null||n.reset()))},this._internals=this.attachInternals()}get form(){return this._internals.form}render(){const t=this.disabled||this.loading;return ie`
            <button
                type="button"
                ?disabled=${t}
                aria-busy=${this.loading?"true":"false"}
                part="button"
                @click=${this._onClick}
            >
                ${this.loading?ie`<span class="spinner" aria-hidden="true"></span>`:""}
                <slot></slot>
            </button>
        `}},Yt.formAssociated=!0,Yt.styles=$e`
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
    `,Yt);Hn([B({reflect:!0})],en.prototype,"variant",void 0);Hn([B({reflect:!0})],en.prototype,"size",void 0);Hn([B({type:Boolean,reflect:!0})],en.prototype,"disabled",void 0);Hn([B({type:Boolean,reflect:!0})],en.prototype,"loading",void 0);Hn([B()],en.prototype,"type",void 0);en=Hn([Re("mfp-button")],en);var Rs=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},An;let qr=(An=class extends ve{constructor(){super(...arguments),this.variant="default",this.padding="default",this._onSlotChange=t=>{const n=t.target,r=n.parentElement;if(!r)return;n.assignedNodes({flatten:!0}).length>0?r.removeAttribute("data-empty"):r.setAttribute("data-empty","")}}render(){return ie`
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
        `}},An.styles=$e`
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
    `,An);Rs([B({reflect:!0})],qr.prototype,"variant",void 0);Rs([B({reflect:!0})],qr.prototype,"padding",void 0);qr=Rs([Re("mfp-card")],qr);var jl=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Cn;let Qo=(Cn=class extends ve{constructor(){super(...arguments),this.variant="default"}render(){return ie` <footer class="inner" part="inner"><slot></slot></footer> `}},Cn.styles=$e`
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
    `,Cn);jl([B({reflect:!0})],Qo.prototype,"variant",void 0);Qo=jl([Re("mfp-footer")],Qo);var Un=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Sn;let tn=(Sn=class extends ve{constructor(){super(...arguments),this.variant="ghost",this.size="md",this.disabled=!1,this.type="button",this.label=""}render(){return this.label||console.warn("<mfp-icon-button> requires a `label` attribute for accessibility"),ie`
            <button
                type=${this.type}
                ?disabled=${this.disabled}
                aria-label=${this.label}
                part="button"
            >
                <slot></slot>
            </button>
        `}},Sn.styles=$e`
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
    `,Sn);Un([B({reflect:!0})],tn.prototype,"variant",void 0);Un([B({reflect:!0})],tn.prototype,"size",void 0);Un([B({type:Boolean,reflect:!0})],tn.prototype,"disabled",void 0);Un([B()],tn.prototype,"type",void 0);Un([B()],tn.prototype,"label",void 0);tn=Un([Re("mfp-icon-button")],tn);var We=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let ld=0;var Qt;let Be=(Qt=class extends ve{constructor(){super(),this.size="md",this.type="text",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.readonly=!1,this.required=!1,this._id=`mfp-input-${++ld}`,this._onInput=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please fill out this field."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,r=`${n}-hint`,o=`${n}-error`,s=t?o:this.hint?r:void 0;return ie`
            ${this.label?ie`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?ie`<span class="required" aria-hidden="true">*</span>`:oe}
                  </label>`:oe}
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
                    aria-describedby=${s??oe}
                    @input=${this._onInput}
                    @change=${this._onChange}
                />
                <slot name="suffix"></slot>
            </div>
            ${t?ie`<p part="error" id=${o} class="error" role="alert">${this.error}</p>`:this.hint?ie`<p part="hint" id=${r} class="hint">${this.hint}</p>`:oe}
        `}},Qt.styles=$e`
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
    `,Qt.formAssociated=!0,Qt);We([B({reflect:!0})],Be.prototype,"size",void 0);We([B()],Be.prototype,"type",void 0);We([B()],Be.prototype,"value",void 0);We([B()],Be.prototype,"name",void 0);We([B()],Be.prototype,"label",void 0);We([B()],Be.prototype,"placeholder",void 0);We([B()],Be.prototype,"hint",void 0);We([B()],Be.prototype,"error",void 0);We([B({type:Boolean,reflect:!0})],Be.prototype,"disabled",void 0);We([B({type:Boolean,reflect:!0})],Be.prototype,"readonly",void 0);We([B({type:Boolean,reflect:!0})],Be.prototype,"required",void 0);Be=We([Re("mfp-input")],Be);var cd=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},$n;let ki=($n=class extends ve{render(){return ie`<slot></slot>`}},$n.styles=$e`
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
    `,$n);ki=cd([Re("mfp-container")],ki);var fd=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Rn;let Ni=(Rn=class extends ve{render(){return ie`<slot></slot>`}},Rn.styles=$e`
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
    `,Rn);Ni=fd([Re("mfp-row")],Ni);var ud=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},On;let Ii=(On=class extends ve{render(){return ie`<slot></slot>`}},On.styles=$e`
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
    `,On);Ii=ud([Re("mfp-col")],Ii);var ze=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Tn;let nn=(Tn=class extends ve{constructor(){super(...arguments),this.sticky=!1,this.variant="default",this.breakpoint=768,this.menuOpen=!1,this._isCollapsed=!1,this._onResize=t=>{if(!this.breakpoint)return;const n=t[0];n&&this._setCollapsed(n.contentRect.width<this.breakpoint)},this._onDocumentClick=t=>{this.menuOpen&&(t.composedPath().includes(this)||(this.menuOpen=!1))},this._onKeyDown=t=>{var n;t.key==="Escape"&&this.menuOpen&&(this.menuOpen=!1,(n=this.renderRoot.querySelector(".menu-toggle"))==null||n.focus())},this._onToggleClick=()=>{this.menuOpen=!this.menuOpen},this._onMenuClick=t=>{if(!this.menuOpen)return;t.target.closest("mfp-nav-item")&&(this.menuOpen=!1)},this._onSlotChange=()=>{this._syncOrientation(this._isCollapsed?"vertical":"horizontal")}}_syncOrientation(t){for(const n of this._items)n.orientation=t}_setCollapsed(t){t!==this._isCollapsed&&(this._isCollapsed=t,this.toggleAttribute("data-collapsed",t),this._syncOrientation(t?"vertical":"horizontal"),t||(this.menuOpen=!1))}firstUpdated(){this._syncOrientation("horizontal")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(this._onResize),this._ro.observe(this),document.addEventListener("click",this._onDocumentClick),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),document.removeEventListener("click",this._onDocumentClick),document.removeEventListener("keydown",this._onKeyDown)}render(){return ie`
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
                        ${this.menuOpen?Ti`
                                  <g transform="rotate(45 12 12)">
                                      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  </g>
                                  <g transform="rotate(-45 12 12)">
                                      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  </g>
                              `:Ti`
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
        `}},Tn.styles=$e`
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
    `,Tn);ze([B({type:Boolean,reflect:!0})],nn.prototype,"sticky",void 0);ze([B({reflect:!0})],nn.prototype,"variant",void 0);ze([B({type:Number})],nn.prototype,"breakpoint",void 0);ze([B({type:Boolean,reflect:!0,attribute:"menu-open"})],nn.prototype,"menuOpen",void 0);ze([$s({selector:"mfp-nav-item"})],nn.prototype,"_items",void 0);nn=ze([Re("mfp-nav-bar")],nn);var Pn;let Gr=(Pn=class extends ve{constructor(){super(...arguments),this.variant="default",this._onItemsSlotChange=()=>this._syncOrientation(),this._onNamedSlotChange=t=>{const n=t.target,r=n.parentElement;if(!r)return;const o=n.assignedNodes({flatten:!0}).length>0;r.toggleAttribute("data-empty",!o)}}_syncOrientation(){for(const t of this._items)t.orientation="vertical"}firstUpdated(){this._syncOrientation()}render(){return ie`
            <div class="header" part="header" data-empty>
                <slot name="header" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
            <nav class="items" aria-label="Side navigation">
                <slot @slotchange=${this._onItemsSlotChange}></slot>
            </nav>
            <div class="footer" part="footer" data-empty>
                <slot name="footer" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
        `}},Pn.styles=$e`
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
    `,Pn);ze([B({reflect:!0})],Gr.prototype,"variant",void 0);ze([$s({selector:"mfp-nav-item"})],Gr.prototype,"_items",void 0);Gr=ze([Re("mfp-side-nav")],Gr);var kn;let jn=(kn=class extends ve{constructor(){super(...arguments),this.href="",this.active=!1,this.disabled=!1,this.orientation="horizontal",this._onClick=t=>{this.disabled&&(t.preventDefault(),t.stopPropagation())}}render(){const t=ie`
            <slot name="icon"></slot>
            <span class="label"><slot></slot></span>
        `;return this.href?ie`
                <a
                    part="link"
                    href=${this.href}
                    aria-current=${this.active?"page":oe}
                    aria-disabled=${this.disabled?"true":oe}
                    @click=${this._onClick}
                >
                    ${t}
                </a>
            `:ie`
            <button
                type="button"
                part="link"
                ?disabled=${this.disabled}
                aria-current=${this.active?"page":oe}
            >
                ${t}
            </button>
        `}},kn.styles=$e`
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
    `,kn);ze([B()],jn.prototype,"href",void 0);ze([B({type:Boolean,reflect:!0})],jn.prototype,"active",void 0);ze([B({type:Boolean,reflect:!0})],jn.prototype,"disabled",void 0);ze([B({reflect:!0})],jn.prototype,"orientation",void 0);jn=ze([Re("mfp-nav-item")],jn);var tt=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let dd=0;var Zt;let Ke=(Zt=class extends ve{constructor(){super(),this.size="md",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.required=!1,this._id=`mfp-select-${++dd}`,this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onSlotChange=t=>{const n=t.target,r=this._selectEl;if(!r)return;const o=this.value;r.querySelectorAll("[data-mfp-cloned]").forEach(i=>i.remove());const s=n.assignedNodes({flatten:!0}).filter(i=>i.nodeType===Node.ELEMENT_NODE&&(i.tagName==="OPTION"||i.tagName==="OPTGROUP"));for(const i of s){const a=i.cloneNode(!0);a.setAttribute("data-mfp-cloned",""),r.appendChild(a)}r.value=o},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please select an option."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,r=`${n}-hint`,o=`${n}-error`,s=t?o:this.hint?r:void 0;return ie`
            ${this.label?ie`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?ie`<span class="required" aria-hidden="true">*</span>`:oe}
                  </label>`:oe}
            <div part="control" class="control ${t?"invalid":""}">
                <select
                    id=${n}
                    part="select"
                    .value=${this.value}
                    name=${this.name}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    aria-invalid=${t?"true":"false"}
                    aria-describedby=${s??oe}
                    @change=${this._onChange}
                >
                    ${this.placeholder?ie`<option value="" disabled selected hidden data-mfp-placeholder>
                              ${this.placeholder}
                          </option>`:oe}
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
            ${t?ie`<p part="error" id=${o} class="error" role="alert">${this.error}</p>`:this.hint?ie`<p part="hint" id=${r} class="hint">${this.hint}</p>`:oe}
        `}},Zt.styles=$e`
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
    `,Zt.formAssociated=!0,Zt);tt([B({reflect:!0})],Ke.prototype,"size",void 0);tt([B()],Ke.prototype,"value",void 0);tt([B()],Ke.prototype,"name",void 0);tt([B()],Ke.prototype,"label",void 0);tt([B()],Ke.prototype,"placeholder",void 0);tt([B()],Ke.prototype,"hint",void 0);tt([B()],Ke.prototype,"error",void 0);tt([B({type:Boolean,reflect:!0})],Ke.prototype,"disabled",void 0);tt([B({type:Boolean,reflect:!0})],Ke.prototype,"required",void 0);tt([ad("select")],Ke.prototype,"_selectEl",void 0);Ke=tt([Re("mfp-select")],Ke);var Os=function(e,t,n,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Nn;let Kr=(Nn=class extends ve{constructor(){super(...arguments),this.size="md",this.label="Loading"}render(){return ie`<div class="ring" role="status" aria-label=${this.label}></div>`}},Nn.styles=$e`
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
    `,Nn);Os([B({reflect:!0})],Kr.prototype,"size",void 0);Os([B()],Kr.prototype,"label",void 0);Kr=Os([Re("mfp-spinner")],Kr);const hd=`/*
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
`,pd=`/*
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
`,md=`/*
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
`,gd=`/*
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
`,vd=`/*
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
`,bd=`/*
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
`,Bl="mfp-theme",Mi="mfp-active-theme",Wr={blue:{label:"Blue",css:hd},emerald:{label:"Emerald",css:pd},orange:{label:"Orange",css:gd},sand:{label:"Sand",css:vd},terracotta:{label:"Terracotta",css:bd},navy:{label:"Navy",css:md}},yd="navy",Di={portfolio:"navy",warm:"terracotta",earth:"sand"};function Fl(){const e=localStorage.getItem(Bl);return e&&Di[e]?Di[e]:e&&e in Wr?e:yd}function Hl(e){if(!(e in Wr))return;let t=document.getElementById(Mi);t||(t=document.createElement("style"),t.id=Mi,document.head.appendChild(t)),t.textContent=Wr[e].css,localStorage.setItem(Bl,e)}function _d(){Hl(Fl())}const Ul=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},xd={name:"App",data(){return{currentYear:new Date().getFullYear(),themes:Wr,activeTheme:Fl(),navLinks:[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/resume",label:"Resume"},{to:"/portfolio",label:"Projects"},{to:"/python",label:"Python"},{to:"/data",label:"Data Analysis"}]}},methods:{go(e){this.$route.path!==e&&this.$router.push(e)},onThemeChange(e){var n;const t=(n=e.detail)==null?void 0:n.value;t&&(Hl(t),this.activeTheme=t)},syncNavHeight(){var t;const e=(t=this.$refs.navBar)==null?void 0:t.offsetHeight;e&&document.documentElement.style.setProperty("--site-nav-height",`${e}px`)}},mounted(){this.syncNavHeight(),this._navResizeObserver=new ResizeObserver(()=>this.syncNavHeight()),this._navResizeObserver.observe(this.$refs.navBar)},beforeUnmount(){var e;(e=this._navResizeObserver)==null||e.disconnect()}},wd={ref:"navBar",sticky:"",variant:"brand"},Ed=["active","onClick"],Ad={slot:"actions",class:"navbar-actions"},Cd=["active"],Sd={class:"theme-group"},$d=["value"],Rd=["value"],Od={variant:"brand"},Td={class:"footer-copy"};function Pd(e,t,n,r,o,s){const i=Fo("router-link"),a=Fo("router-view");return Ve(),un("div",{class:eo(["app-shell",{"route-resume":e.$route.path==="/resume"}])},[he("mfp-nav-bar",wd,[me(i,{slot:"brand",to:"/",class:"brand-link"},{default:bt(()=>[...t[2]||(t[2]=[El("Melissa Freundschuh-Pula",-1)])]),_:1}),(Ve(!0),un(Ae,null,Gs(o.navLinks,l=>(Ve(),un("mfp-nav-item",{key:l.to,active:e.$route.path===l.to,onClick:u=>s.go(l.to)},Sr(l.label),9,Ed))),128)),he("div",Ad,[he("mfp-nav-item",{active:e.$route.path==="/contact",onClick:t[0]||(t[0]=l=>s.go("/contact"))},"Contact",8,Cd),he("label",Sd,[t[3]||(t[3]=he("span",{class:"theme-label"},"Theme:",-1)),he("mfp-select",{class:"theme-switcher",size:"sm","aria-label":"Theme",value:o.activeTheme,onChange:t[1]||(t[1]=(...l)=>s.onThemeChange&&s.onThemeChange(...l))},[(Ve(!0),un(Ae,null,Gs(o.themes,(l,u)=>(Ve(),un("option",{key:u,value:u},Sr(l.label),9,Rd))),128))],40,$d)])])],512),me(a,null,{default:bt(({Component:l})=>[me(mu,{name:"fade",mode:"out-in"},{default:bt(()=>[(Ve(),ur(Uf,null,{fallback:bt(()=>[...t[4]||(t[4]=[he("div",{class:"route-loading"},[he("mfp-spinner",{size:"lg",label:"Loading page"})],-1)])]),default:bt(()=>[(Ve(),ur(gf(l)))]),_:2},1024))]),_:2},1024)]),_:1}),he("mfp-footer",Od,[he("span",Td,"© "+Sr(o.currentYear)+" Melissa Freundschuh-Pula",1),t[5]||(t[5]=Zf('<div class="footer-links"><a href="https://github.com/melissapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a><a href="mailto:melissa_m_24@yahoo.com" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a></div>',1))])],2)}const kd=Ul(xd,[["render",Pd]]),Nd="modulepreload",Id=function(e){return"/"+e},Li={},Ut=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(n.map(l=>{if(l=Id(l),l in Li)return;Li[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Nd,u||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const hn=typeof document<"u";function Vl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Md(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Vl(e.default)}const ne=Object.assign;function Oo(e,t){const n={};for(const r in t){const o=t[r];n[r]=et(o)?o.map(e):e(o)}return n}const sr=()=>{},et=Array.isArray;function zi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ql=/#/g,Dd=/&/g,Ld=/\//g,zd=/=/g,jd=/\?/g,Gl=/\+/g,Bd=/%5B/g,Fd=/%5D/g,Kl=/%5E/g,Hd=/%60/g,Wl=/%7B/g,Ud=/%7C/g,Jl=/%7D/g,Vd=/%20/g;function Ts(e){return e==null?"":encodeURI(""+e).replace(Ud,"|").replace(Bd,"[").replace(Fd,"]")}function qd(e){return Ts(e).replace(Wl,"{").replace(Jl,"}").replace(Kl,"^")}function Zo(e){return Ts(e).replace(Gl,"%2B").replace(Vd,"+").replace(ql,"%23").replace(Dd,"%26").replace(Hd,"`").replace(Wl,"{").replace(Jl,"}").replace(Kl,"^")}function Gd(e){return Zo(e).replace(zd,"%3D")}function Kd(e){return Ts(e).replace(ql,"%23").replace(jd,"%3F")}function Wd(e){return Kd(e).replace(Ld,"%2F")}function br(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Jd=/\/$/,Yd=e=>e.replace(Jd,"");function To(e,t,n="/"){let r,o={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=t.slice(0,l),s=t.slice(l,a>0?a:t.length),o=e(s.slice(1))),a>=0&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=eh(r??t,n),{fullPath:r+s+i,path:r,query:o,hash:br(i)}}function Qd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ji(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Zd(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Bn(t.matched[r],n.matched[o])&&Yl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Bn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Yl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Xd(e[n],t[n]))return!1;return!0}function Xd(e,t){return et(e)?Bi(e,t):et(t)?Bi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Bi(e,t){return et(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function eh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i).join("/")}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Xo=function(e){return e.pop="pop",e.push="push",e}({}),Po=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function th(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Yd(e)}const nh=/^[^#]+#/;function rh(e,t){return e.replace(nh,"#")+t}function oh(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fo=()=>({left:window.scrollX,top:window.scrollY});function sh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=oh(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fi(e,t){return(history.state?history.state.position-t:-1)+e}const es=new Map;function ih(e,t){es.set(e,t)}function ah(e){const t=es.get(e);return es.delete(e),t}function lh(e){return typeof e=="string"||e&&typeof e=="object"}function Ql(e){return typeof e=="string"||typeof e=="symbol"}let pe=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Zl=Symbol("");pe.MATCHER_NOT_FOUND+"",pe.NAVIGATION_GUARD_REDIRECT+"",pe.NAVIGATION_ABORTED+"",pe.NAVIGATION_CANCELLED+"",pe.NAVIGATION_DUPLICATED+"";function Fn(e,t){return ne(new Error,{type:e,[Zl]:!0},t)}function ht(e,t){return e instanceof Error&&Zl in e&&(t==null||!!(e.type&t))}const ch=["params","query","hash"];function fh(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of ch)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function uh(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace(Gl," "),s=o.indexOf("="),i=br(s<0?o:o.slice(0,s)),a=s<0?null:br(o.slice(s+1));if(i in t){let l=t[i];et(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function Hi(e){let t="";for(let n in e){const r=e[n];if(n=Gd(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(et(r)?r.map(o=>o&&Zo(o)):[r&&Zo(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function dh(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=et(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const hh=Symbol(""),Ui=Symbol(""),Ps=Symbol(""),Xl=Symbol(""),ts=Symbol("");function Jn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Pt(e,t,n,r,o,s=i=>i()){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Fn(pe.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?l(p):lh(p)?l(Fn(pe.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(i&&r.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),a())},f=s(()=>e.call(r&&r.instances[o],t,n,u));let c=Promise.resolve(f);e.length<3&&(c=c.then(u)),c.catch(p=>l(p))})}function ko(e,t,n,r,o=s=>s()){const s=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Vl(l)){const u=(l.__vccOpts||l)[t];u&&s.push(Pt(u,n,r,i,a,o))}else{let u=l();s.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const c=Md(f)?f.default:f;i.mods[a]=f,i.components[a]=c;const p=(c.__vccOpts||c)[t];return p&&Pt(p,n,r,i,a,o)()}))}}return s}function ph(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(u=>Bn(u,a))?r.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(u=>Bn(u,l))||o.push(l))}return[n,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let mh=()=>location.protocol+"//"+location.host;function ec(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let i=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),ji(a,"")}return ji(n,e)+r+o}function gh(e,t,n,r){let o=[],s=[],i=null;const a=({state:p})=>{const m=ec(e,location),x=n.value,C=t.value;let H=0;if(p){if(n.value=m,t.value=p,i&&i===x){i=null;return}H=C?p.position-C.position:0}else r(m);o.forEach(k=>{k(n.value,x,{delta:H,type:Xo.pop,direction:H?H>0?Po.forward:Po.back:Po.unknown})})};function l(){i=n.value}function u(p){o.push(p);const m=()=>{const x=o.indexOf(p);x>-1&&o.splice(x,1)};return s.push(m),m}function f(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ne({},p.state,{scroll:fo()}),"")}}function c(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:c}}function Vi(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?fo():null}}function vh(e){const{history:t,location:n}=window,r={value:ec(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,f){const c=e.indexOf("#"),p=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+l:mh()+e+l;try{t[f?"replaceState":"pushState"](u,"",p),o.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function i(l,u){s(l,ne({},t.state,Vi(o.value.back,l,o.value.forward,!0),u,{position:o.value.position}),!0),r.value=l}function a(l,u){const f=ne({},o.value,t.state,{forward:l,scroll:fo()});s(f.current,f,!0),s(l,ne({},Vi(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:o,push:a,replace:i}}function bh(e){e=th(e);const t=vh(e),n=gh(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=ne({location:"",base:e,go:r,createHref:rh.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function yh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),bh(e)}let Gt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var be=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(be||{});const _h={type:Gt.Static,value:""},xh=/[a-zA-Z0-9_]/;function wh(e){if(!e)return[[]];if(e==="/")return[[_h]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=be.Static,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,l,u="",f="";function c(){u&&(n===be.Static?s.push({type:Gt.Static,value:u}):n===be.Param||n===be.ParamRegExp||n===be.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Gt.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==be.ParamRegExp){r=n,n=be.EscapeNext;continue}switch(n){case be.Static:l==="/"?(u&&c(),i()):l===":"?(c(),n=be.Param):p();break;case be.EscapeNext:p(),n=r;break;case be.Param:l==="("?n=be.ParamRegExp:xh.test(l)?p():(c(),n=be.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case be.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=be.ParamRegExpEnd:f+=l;break;case be.ParamRegExpEnd:c(),n=be.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===be.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),c(),i(),o}const qi="[^/]+?",Eh={sensitive:!1,strict:!1,start:!0,end:!0};var Te=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Te||{});const Ah=/[.+*?^${}()[\]/\\]/g;function Ch(e,t){const n=ne({},Eh,t),r=[];let o=n.start?"^":"";const s=[];for(const u of e){const f=u.length?[]:[Te.Root];n.strict&&!u.length&&(o+="/");for(let c=0;c<u.length;c++){const p=u[c];let m=Te.Segment+(n.sensitive?Te.BonusCaseSensitive:0);if(p.type===Gt.Static)c||(o+="/"),o+=p.value.replace(Ah,"\\$&"),m+=Te.Static;else if(p.type===Gt.Param){const{value:x,repeatable:C,optional:H,regexp:k}=p;s.push({name:x,repeatable:C,optional:H});const O=k||qi;if(O!==qi){m+=Te.BonusCustomRegExp;try{`${O}`}catch(N){throw new Error(`Invalid custom RegExp for param "${x}" (${O}): `+N.message)}}let M=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;c||(M=H&&u.length<2?`(?:/${M})`:"/"+M),H&&(M+="?"),o+=M,m+=Te.Dynamic,H&&(m+=Te.BonusOptional),C&&(m+=Te.BonusRepeatable),O===".*"&&(m+=Te.BonusWildcard)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Te.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const f=u.match(i),c={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",x=s[p-1];c[x.name]=m&&x.repeatable?m.split("/"):m}return c}function l(u){let f="",c=!1;for(const p of e){(!c||!f.endsWith("/"))&&(f+="/"),c=!1;for(const m of p)if(m.type===Gt.Static)f+=m.value;else if(m.type===Gt.Param){const{value:x,repeatable:C,optional:H}=m,k=x in u?u[x]:"";if(et(k)&&!C)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const O=et(k)?k.join("/"):k;if(!O)if(H)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):c=!0);else throw new Error(`Missing required param "${x}"`);f+=O}}return f||"/"}return{re:i,score:r,keys:s,parse:a,stringify:l}}function Sh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Te.Static+Te.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Te.Static+Te.Segment?1:-1:0}function tc(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=Sh(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(Gi(r))return 1;if(Gi(o))return-1}return o.length-r.length}function Gi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $h={strict:!1,end:!0,sensitive:!1};function Rh(e,t,n){const r=Ch(wh(e.path),n),o=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Oh(e,t){const n=[],r=new Map;t=zi($h,t);function o(c){return r.get(c)}function s(c,p,m){const x=!m,C=Wi(c);C.aliasOf=m&&m.record;const H=zi(t,c),k=[C];if("alias"in c){const N=typeof c.alias=="string"?[c.alias]:c.alias;for(const T of N)k.push(Wi(ne({},C,{components:m?m.record.components:C.components,path:T,aliasOf:m?m.record:C})))}let O,M;for(const N of k){const{path:T}=N;if(p&&T[0]!=="/"){const L=p.record.path,K=L[L.length-1]==="/"?"":"/";N.path=p.record.path+(T&&K+T)}if(O=Rh(N,p,H),m?m.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),x&&c.name&&!Ji(O)&&i(c.name)),nc(O)&&l(O),C.children){const L=C.children;for(let K=0;K<L.length;K++)s(L[K],O,m&&m.children[K])}m=m||O}return M?()=>{i(M)}:sr}function i(c){if(Ql(c)){const p=r.get(c);p&&(r.delete(c),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(c);p>-1&&(n.splice(p,1),c.record.name&&r.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return n}function l(c){const p=kh(c,n);n.splice(p,0,c),c.record.name&&!Ji(c)&&r.set(c.record.name,c)}function u(c,p){let m,x={},C,H;if("name"in c&&c.name){if(m=r.get(c.name),!m)throw Fn(pe.MATCHER_NOT_FOUND,{location:c});H=m.record.name,x=ne(Ki(p.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),c.params&&Ki(c.params,m.keys.map(M=>M.name))),C=m.stringify(x)}else if(c.path!=null)C=c.path,m=n.find(M=>M.re.test(C)),m&&(x=m.parse(C),H=m.record.name);else{if(m=p.name?r.get(p.name):n.find(M=>M.re.test(p.path)),!m)throw Fn(pe.MATCHER_NOT_FOUND,{location:c,currentLocation:p});H=m.record.name,x=ne({},p.params,c.params),C=m.stringify(x)}const k=[];let O=m;for(;O;)k.unshift(O.record),O=O.parent;return{name:H,path:C,params:x,matched:k,meta:Ph(k)}}e.forEach(c=>s(c));function f(){n.length=0,r.clear()}return{addRoute:s,resolve:u,removeRoute:i,clearRoutes:f,getRoutes:a,getRecordMatcher:o}}function Ki(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Wi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Th(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Th(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ph(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function kh(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;tc(e,t[s])<0?r=s:n=s+1}const o=Nh(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function Nh(e){let t=e;for(;t=t.parent;)if(nc(t)&&tc(e,t)===0)return t}function nc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Yi(e){const t=yt(Ps),n=yt(Xl),r=Ye(()=>{const l=gn(e.to);return t.resolve(l)}),o=Ye(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],c=n.matched;if(!f||!c.length)return-1;const p=c.findIndex(Bn.bind(null,f));if(p>-1)return p;const m=Qi(l[u-2]);return u>1&&Qi(f)===m&&c[c.length-1].path!==m?c.findIndex(Bn.bind(null,l[u-2])):p}),s=Ye(()=>o.value>-1&&zh(n.params,r.value.params)),i=Ye(()=>o.value>-1&&o.value===n.matched.length-1&&Yl(n.params,r.value.params));function a(l={}){if(Lh(l)){const u=t[gn(e.replace)?"replace":"push"](gn(e.to)).catch(sr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ye(()=>r.value.href),isActive:s,isExactActive:i,navigate:a}}function Ih(e){return e.length===1?e[0]:e}const Mh=Ka({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Yi,setup(e,{slots:t}){const n=no(Yi(e)),{options:r}=yt(Ps),o=Ye(()=>({[Zi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&Ih(t.default(n));return e.custom?s:xs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Dh=Mh;function Lh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function zh(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!et(o)||o.length!==r.length||r.some((s,i)=>s.valueOf()!==o[i].valueOf()))return!1}return!0}function Qi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Zi=(e,t,n)=>e??t??n,jh=Ka({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=yt(ts),o=Ye(()=>e.route||r.value),s=yt(Ui,0),i=Ye(()=>{let u=gn(s);const{matched:f}=o.value;let c;for(;(c=f[u])&&!c.components;)u++;return u}),a=Ye(()=>o.value.matched[i.value]);$r(Ui,Ye(()=>i.value+1)),$r(hh,a),$r(ts,o);const l=Hc();return Rr(()=>[l.value,a.value,e.name],([u,f,c],[p,m,x])=>{f&&(f.instances[c]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!Bn(f,m)||!p)&&(f.enterCallbacks[c]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=o.value,f=e.name,c=a.value,p=c&&c.components[f];if(!p)return Xi(n.default,{Component:p,route:u});const m=c.props[f],x=m?m===!0?u.params:typeof m=="function"?m(u):m:null,H=xs(p,ne({},x,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(c.instances[f]=null)},ref:l}));return Xi(n.default,{Component:H,route:u})||H}}});function Xi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Bh=jh;function Fh(e){const t=Oh(e.routes,e),n=e.parseQuery||uh,r=e.stringifyQuery||Hi,o=e.history,s=Jn(),i=Jn(),a=Jn(),l=Uc($t);let u=$t;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Oo.bind(null,y=>""+y),c=Oo.bind(null,Wd),p=Oo.bind(null,br);function m(y,I){let R,z;return Ql(y)?(R=t.getRecordMatcher(y),z=I):z=y,t.addRoute(z,R)}function x(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function C(){return t.getRoutes().map(y=>y.record)}function H(y){return!!t.getRecordMatcher(y)}function k(y,I){if(I=ne({},I||l.value),typeof y=="string"){const g=To(n,y,I.path),v=t.resolve({path:g.path},I),_=o.createHref(g.fullPath);return ne(g,v,{params:p(v.params),hash:br(g.hash),redirectedFrom:void 0,href:_})}let R;if(y.path!=null)R=ne({},y,{path:To(n,y.path,I.path).path});else{const g=ne({},y.params);for(const v in g)g[v]==null&&delete g[v];R=ne({},y,{params:c(g)}),I.params=c(I.params)}const z=t.resolve(R,I),Q=y.hash||"";z.params=f(p(z.params));const d=Qd(r,ne({},y,{hash:qd(Q),path:z.path})),h=o.createHref(d);return ne({fullPath:d,hash:Q,query:r===Hi?dh(y.query):y.query||{}},z,{redirectedFrom:void 0,href:h})}function O(y){return typeof y=="string"?To(n,y,l.value.path):ne({},y)}function M(y,I){if(u!==y)return Fn(pe.NAVIGATION_CANCELLED,{from:I,to:y})}function N(y){return K(y)}function T(y){return N(ne(O(y),{replace:!0}))}function L(y,I){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:z}=R;let Q=typeof z=="function"?z(y,I):z;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=O(Q):{path:Q},Q.params={}),ne({query:y.query,hash:y.hash,params:Q.path!=null?{}:y.params},Q)}}function K(y,I){const R=u=k(y),z=l.value,Q=y.state,d=y.force,h=y.replace===!0,g=L(R,z);if(g)return K(ne(O(g),{state:typeof g=="object"?ne({},Q,g.state):Q,force:d,replace:h}),I||R);const v=R;v.redirectedFrom=I;let _;return!d&&Zd(r,z,R)&&(_=Fn(pe.NAVIGATION_DUPLICATED,{to:v,from:z}),nt(z,z,!0,!1)),(_?Promise.resolve(_):q(v,z)).catch(b=>ht(b)?ht(b,pe.NAVIGATION_GUARD_REDIRECT)?b:Ct(b):X(b,v,z)).then(b=>{if(b){if(ht(b,pe.NAVIGATION_GUARD_REDIRECT))return K(ne({replace:h},O(b.to),{state:typeof b.to=="object"?ne({},Q,b.to.state):Q,force:d}),I||v)}else b=S(v,z,!0,h,Q);return J(v,z,b),b})}function te(y,I){const R=M(y,I);return R?Promise.reject(R):Promise.resolve()}function D(y){const I=ln.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(y):y()}function q(y,I){let R;const[z,Q,d]=ph(y,I);R=ko(z.reverse(),"beforeRouteLeave",y,I);for(const g of z)g.leaveGuards.forEach(v=>{R.push(Pt(v,y,I))});const h=te.bind(null,y,I);return R.push(h),He(R).then(()=>{R=[];for(const g of s.list())R.push(Pt(g,y,I));return R.push(h),He(R)}).then(()=>{R=ko(Q,"beforeRouteUpdate",y,I);for(const g of Q)g.updateGuards.forEach(v=>{R.push(Pt(v,y,I))});return R.push(h),He(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(et(g.beforeEnter))for(const v of g.beforeEnter)R.push(Pt(v,y,I));else R.push(Pt(g.beforeEnter,y,I));return R.push(h),He(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=ko(d,"beforeRouteEnter",y,I,D),R.push(h),He(R))).then(()=>{R=[];for(const g of i.list())R.push(Pt(g,y,I));return R.push(h),He(R)}).catch(g=>ht(g,pe.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function J(y,I,R){a.list().forEach(z=>D(()=>z(y,I,R)))}function S(y,I,R,z,Q){const d=M(y,I);if(d)return d;const h=I===$t,g=hn?history.state:{};R&&(z||h?o.replace(y.fullPath,ne({scroll:h&&g&&g.scroll},Q)):o.push(y.fullPath,Q)),l.value=y,nt(y,I,R,h),Ct()}let W;function de(){W||(W=o.listen((y,I,R)=>{if(!Lt.listening)return;const z=k(y),Q=L(z,Lt.currentRoute.value);if(Q){K(ne(Q,{replace:!0,force:!0}),z).catch(sr);return}u=z;const d=l.value;hn&&ih(Fi(d.fullPath,R.delta),fo()),q(z,d).catch(h=>ht(h,pe.NAVIGATION_ABORTED|pe.NAVIGATION_CANCELLED)?h:ht(h,pe.NAVIGATION_GUARD_REDIRECT)?(K(ne(O(h.to),{force:!0}),z).then(g=>{ht(g,pe.NAVIGATION_ABORTED|pe.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Xo.pop&&o.go(-1,!1)}).catch(sr),Promise.reject()):(R.delta&&o.go(-R.delta,!1),X(h,z,d))).then(h=>{h=h||S(z,d,!1),h&&(R.delta&&!ht(h,pe.NAVIGATION_CANCELLED)?o.go(-R.delta,!1):R.type===Xo.pop&&ht(h,pe.NAVIGATION_ABORTED|pe.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),J(z,d,h)}).catch(sr)}))}let we=Jn(),ae=Jn(),Y;function X(y,I,R){Ct(y);const z=ae.list();return z.length?z.forEach(Q=>Q(y,I,R)):console.error(y),Promise.reject(y)}function ft(){return Y&&l.value!==$t?Promise.resolve():new Promise((y,I)=>{we.add([y,I])})}function Ct(y){return Y||(Y=!y,de(),we.list().forEach(([I,R])=>y?R(y):I()),we.reset()),y}function nt(y,I,R,z){const{scrollBehavior:Q}=e;if(!hn||!Q)return Promise.resolve();const d=!R&&ah(Fi(y.fullPath,0))||(z||!R)&&history.state&&history.state.scroll||null;return Mr().then(()=>Q(y,I,d)).then(h=>h&&sh(h)).catch(h=>X(h,y,I))}const ke=y=>o.go(y);let an;const ln=new Set,Lt={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:H,getRoutes:C,resolve:k,options:e,push:N,replace:T,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:ae.add,isReady:ft,install(y){y.component("RouterLink",Dh),y.component("RouterView",Bh),y.config.globalProperties.$router=Lt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(l)}),hn&&!an&&l.value===$t&&(an=!0,N(o.location).catch(z=>{}));const I={};for(const z in $t)Object.defineProperty(I,z,{get:()=>l.value[z],enumerable:!0});y.provide(Ps,Lt),y.provide(Xl,Pa(I)),y.provide(ts,l);const R=y.unmount;ln.add(y),y.unmount=function(){ln.delete(y),ln.size<1&&(u=$t,W&&W(),W=null,l.value=$t,an=!1,Y=!1),R()}}};function He(y){return y.reduce((I,R)=>I.then(()=>D(R)),Promise.resolve())}return Lt}const Hh="/assets/Family-TJUrK4ZO.jpeg",Uh={name:"Home"},Vh={size:"xl",class:"home-page"},qh={class:"hero-grid"},Gh={class:"hero-text"},Kh={class:"mt-lg hero-actions"},Wh=["onClick"],Jh=["onClick"],Yh=["onClick"];function Qh(e,t,n,r,o,s){const i=Fo("router-link");return Ve(),un("mfp-container",Vh,[he("div",qh,[t[3]||(t[3]=he("div",{class:"hero-image text-center"},[he("img",{src:Hh,class:"img-fluid rounded shadow",style:{"max-height":"calc(100vh - 120px)","object-fit":"contain"},alt:"Melissa with her wife and four kids"})],-1)),he("div",Gh,[t[0]||(t[0]=he("h1",{class:"hero-name"},"Melissa Freundschuh-Pula",-1)),t[1]||(t[1]=he("h4",{class:"hero-title mt-sm"},"Full-Stack Software Engineer",-1)),t[2]||(t[2]=he("p",{class:"hero-intro mt-md",style:{color:"#2c3e50"}}," Six-plus years building enterprise web apps by day and live products on the side. Wife, mom of four, Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper. ",-1)),he("div",Kh,[me(i,{to:"/portfolio",custom:""},{default:bt(({navigate:a})=>[he("mfp-button",{variant:"primary",onClick:a},"See Projects",8,Wh)]),_:1}),me(i,{to:"/resume",custom:""},{default:bt(({navigate:a})=>[he("mfp-button",{variant:"secondary",onClick:a},"Resume",8,Jh)]),_:1}),me(i,{to:"/contact",custom:""},{default:bt(({navigate:a})=>[he("mfp-button",{variant:"secondary",onClick:a},"Get In Touch",8,Yh)]),_:1})])])])])}const Zh=Ul(Uh,[["render",Qh],["__scopeId","data-v-3b823210"]]),Xh=[{path:"/",name:"Home",component:Zh,meta:{title:"Home"}},{path:"/about",name:"About",component:()=>Ut(()=>import("./about-betJleqO.js"),__vite__mapDeps([0,1])),meta:{title:"About"}},{path:"/resume",name:"Resume",component:()=>Ut(()=>import("./resume-BopXiw5s.js"),__vite__mapDeps([2,3])),meta:{title:"Resume"}},{path:"/portfolio",name:"Portfolio",component:()=>Ut(()=>import("./portfolio-DGdPdxqa.js"),__vite__mapDeps([4,5,6,7])),meta:{title:"Projects"}},{path:"/python",name:"PythonCode",component:()=>Ut(()=>import("./pythonCode-CESMRrnD.js"),__vite__mapDeps([8,9,10,5,6,11])),meta:{title:"Python"}},{path:"/data",name:"DataAnalysis",component:()=>Ut(()=>import("./dataAnalysis-C8Hw8KFK.js"),__vite__mapDeps([12,9,10,5,6,13])),meta:{title:"Data Analysis"}},{path:"/contact",name:"Contact",component:()=>Ut(()=>import("./contact-D_GVRemT.js"),__vite__mapDeps([14,15])),meta:{title:"Contact"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Ut(()=>import("./notFound-CLyCVVDW.js"),__vite__mapDeps([16,17])),meta:{title:"Page Not Found"}}],ea="Melissa Freundschuh-Pula",ks=Fh({history:yh(),routes:Xh});ks.afterEach(e=>{var n;const t=(n=e.meta)==null?void 0:n.title;document.title=t?`${t} | ${ea}`:ea});const ep=(e,t={})=>new Promise((n,r)=>{if(typeof document>"u")return;const o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");if(s.async=!0,s.src=e,s.defer=t.defer,t.preconnectOrigin){const i=document.createElement("link");i.href=t.preconnectOrigin,i.rel="preconnect",o.appendChild(i)}o.appendChild(s),s.onload=n,s.onerror=r}),ns=e=>typeof e=="function",No=e=>e&&typeof e=="object"&&!Array.isArray(e),rs=(e,...t)=>{if(!t.length)return e;const n=t.shift();if(!(!No(e)||!No(n))){for(const r in n)No(n[r])?(e[r]||Object.assign(e,{[r]:{}}),rs(e[r],n[r])):Object.assign(e,{[r]:n[r]});return rs(e,...t)}},uo=()=>!(typeof window>"u"||typeof document>"u"),ta=(e,t=!0)=>{},tp=(e={})=>(ta('Missing "appName" property inside the plugin options.',e.app_name==null),ta('Missing "name" property in the route.',e.screen_name==null),e);function np(e="",t=""){const n=e.split("/"),r=t.split("/");return n[0]===""&&t[t.length-1]==="/"&&n.shift(),r.join("/")+n.join("/")}const rp=()=>({bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}});let rc={};const op=(e={})=>{const t=rp();rc=rs(t,e)},Fe=()=>rc,rn=(...e)=>{const{globalObjectName:t}=Fe();!uo()||typeof window[t]>"u"||window[t](...e)},Ns=(...e)=>{const{config:t,includes:n}=Fe();if(rn("config",t.id,...e),Array.isArray(n))for(const r of n)rn("config",r.id,...e)},na=(e,t)=>{uo()&&(window[`ga-disable-${e}`]=t)},oc=(e=!0)=>{const{config:t,includes:n}=Fe();if(na(t.id,e),Array.isArray(n))for(const r of n)na(r.id,e)},sc=()=>{oc(!0)},sp=()=>{oc(!1)},sn=(e,t={})=>{const{includes:n,defaultGroupName:r}=Fe();t.send_to==null&&Array.isArray(n)&&n.length&&(t.send_to=n.map(o=>o.id).concat(r)),rn("event",e,t)};let ic;const ip=e=>{ic=e},Is=()=>ic,ac=e=>{if(!uo())return;let t;if(typeof e=="string")t={page_path:e};else if(e.path||e.fullPath){const{pageTrackerUseFullPath:n,pageTrackerPrependBase:r}=Fe(),o=Is(),s=o==null?void 0:o.options.base,i=n?e.fullPath:e.path;t={...e.name&&{page_title:e.name},page_path:r?np(i,s):i}}else t=e;t.page_location==null&&(t.page_location=window.location.href),t.send_page_view==null&&(t.send_page_view=!0),sn("page_view",t)},lc=e=>{const{appName:t}=Fe();if(!e)return;let n;typeof e=="string"?n={screen_name:e}:n=e,n.app_name=n.app_name||t,sn("screen_view",n)},ap=(...e)=>{sn("exception",...e)},lp=e=>{Ns("linker",e)},cp=e=>{sn("timing_complete",e)},fp=(...e)=>{rn("set",...e)},up=(...e)=>{sn("refund",...e)},dp=e=>{sn("purchase",e)},hp=e=>{Ns({custom_map:e})},pp=Object.freeze(Object.defineProperty({__proto__:null,config:Ns,customMap:hp,event:sn,exception:ap,linker:lp,optIn:sp,optOut:sc,pageview:ac,purchase:dp,query:rn,refund:up,screenview:lc,set:fp,time:cp},Symbol.toStringTag,{value:"Module"})),mp=e=>{e.config.globalProperties.$gtag=pp},ra=e=>({send_page_view:!1,...e}),cc=()=>{const{config:e,includes:t}=Fe();if(rn("config",e.id,ra(e.params)),Array.isArray(t))for(const n of t)rn("config",n.id,ra(n.params))},oa=(e={},t={})=>{const{appName:n,pageTrackerTemplate:r,pageTrackerScreenviewEnabled:o,pageTrackerSkipSamePath:s}=Fe();if(s&&e.path===t.path)return;let i=e;if(ns(r)?i=r(e,t):o&&(i=tp({app_name:n,screen_name:e.name})),o){lc(i);return}ac(i)},sa=e=>{const{pageTrackerExcludedRoutes:t}=Fe();return t.includes(e.path)||t.includes(e.name)},gp=()=>{const{onBeforeTrack:e,onAfterTrack:t}=Fe(),n=Is();n.isReady().then(()=>{Mr().then(()=>{const{currentRoute:r}=n;cc(),!sa(r.value)&&oa(r.value)}),n.afterEach((r,o)=>{Mr().then(()=>{sa(r)||(ns(e)&&e(r,o),oa(r,o),ns(t)&&t(r,o))})})})},vp=()=>{if(!uo())return;const{enabled:e,globalObjectName:t,globalDataLayerName:n}=Fe();return window[t]==null&&(window[n]=window[n]||[],window[t]=function(){window[n].push(arguments)}),window[t]("js",new Date),e||sc(),window[t]},bp=()=>{const{onReady:e,onError:t,globalObjectName:n,globalDataLayerName:r,config:o,customResourceURL:s,customPreconnectOrigin:i,deferScriptLoad:a,pageTrackerEnabled:l,disableScriptLoad:u}=Fe(),f=!!(l&&Is());if(vp(),f?gp():cc(),!u)return ep(`${s}?id=${o.id}&l=${r}`,{preconnectOrigin:i,defer:a}).then(()=>{e&&e(window[n])}).catch(c=>(t&&t(c),c))},yp=(e,t,n)=>{mp(e),op(t),ip(n),Fe().bootstrap&&bp()};_d();const Ms=zu(kd);Ms.use(ks);Ms.use(yp,{config:{id:"G-ZP2LCLVZ2X",params:{send_page_view:!1}}},ks);Ms.mount("#app");export{Ae as F,Ul as _,Zf as a,he as b,un as c,me as d,Gs as e,Ya as f,Qa as g,wp as h,El as i,Hc as j,_p as k,ur as l,gf as m,eo as n,Ve as o,xp as p,Ap as q,Fo as r,Sr as t,Ep as v,bt as w};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-v3HM_KLX.js","assets/about-Cv7wZ9gz.css","assets/resume-C0EgV8-5.js","assets/resume-B9YLrSan.css","assets/portfolio-Bu5CNV82.js","assets/ProjectCard-Bv0Z2DPn.js","assets/ProjectCard-hspO4fu2.css","assets/portfolio-mVxGKgnE.css","assets/pythonCode-BLMB3L2a.js","assets/CodeBlock-C7c0M_g6.js","assets/CodeBlock-fWrA0MWl.css","assets/pythonCode-DV3yPXuB.css","assets/dataAnalysis-C1F87TIH.js","assets/dataAnalysis-CUgbq-Wg.css","assets/contact-D5REz2kz.js","assets/contact-DfWt5Jhp.css","assets/notFound-yjzyaCi6.js","assets/notFound-Dapkiv2U.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eo(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},pn=[],ct=()=>{},ta=()=>!1,Gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),to=e=>e.startsWith("onUpdate:"),be=Object.assign,no=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},sc=Object.prototype.hasOwnProperty,re=(e,t)=>sc.call(e,t),U=Array.isArray,mn=e=>Kr(e)==="[object Map]",na=e=>Kr(e)==="[object Set]",V=e=>typeof e=="function",ge=e=>typeof e=="string",Et=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",ra=e=>(fe(e)||V(e))&&V(e.then)&&V(e.catch),sa=Object.prototype.toString,Kr=e=>sa.call(e),oc=e=>Kr(e).slice(8,-1),oa=e=>Kr(e)==="[object Object]",ro=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wn=eo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ic=/-\w/g,Ge=Wr(e=>e.replace(ic,t=>t.slice(1).toUpperCase())),ac=/\B([A-Z])/g,Mt=Wr(e=>e.replace(ac,"-$1").toLowerCase()),Jr=Wr(e=>e.charAt(0).toUpperCase()+e.slice(1)),cs=Wr(e=>e?`on${Jr(e)}`:""),Nt=(e,t)=>!Object.is(e,t),fs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ia=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},lc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},aa=e=>{const t=ge(e)?Number(e):NaN;return isNaN(t)?e:t};let Mo;const Yr=()=>Mo||(Mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function so(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ge(r)?dc(r):so(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(ge(e)||fe(e))return e}const cc=/;(?![^(]*\))/g,fc=/:([^]+)/,uc=/\/\*[^]*?\*\//g;function dc(e){const t={};return e.replace(uc,"").split(cc).forEach(n=>{if(n){const r=n.split(fc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qr(e){let t="";if(ge(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=Qr(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const hc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pc=eo(hc);function la(e){return!!e||e===""}const ca=e=>!!(e&&e.__v_isRef===!0),Er=e=>ge(e)?e:e==null?"":U(e)||fe(e)&&(e.toString===sa||!V(e.toString))?ca(e)?Er(e.value):JSON.stringify(e,fa,2):String(e),fa=(e,t)=>ca(t)?fa(e,t.value):mn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[us(r,o)+" =>"]=s,n),{})}:na(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>us(n))}:Et(t)?us(t):fe(t)&&!U(t)&&!oa(t)?String(t):t,us=(e,t="")=>{var n;return Et(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class mc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){this._on>0&&--this._on===0&&(Ie=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function gc(){return Ie}let ce;const ds=new WeakSet;class ua{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&Ie.active&&Ie.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ds.has(this)&&(ds.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ha(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Do(this),pa(this);const t=ce,n=Qe;ce=this,Qe=!0;try{return this.fn()}finally{ma(this),ce=t,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ao(t);this.deps=this.depsTail=void 0,Do(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ds.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ts(this)&&this.run()}get dirty(){return Ts(this)}}let da=0,Jn,Yn;function ha(e,t=!1){if(e.flags|=8,t){e.next=Yn,Yn=e;return}e.next=Jn,Jn=e}function oo(){da++}function io(){if(--da>0)return;if(Yn){let t=Yn;for(Yn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Jn;){let t=Jn;for(Jn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function pa(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ma(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ao(r),vc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ts(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ga(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ga(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===rr)||(e.globalVersion=rr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ts(e))))return;e.flags|=2;const t=e.dep,n=ce,r=Qe;ce=e,Qe=!0;try{pa(e);const s=e.fn(e._value);(t.version===0||Nt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ce=n,Qe=r,ma(e),e.flags&=-3}}function ao(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)ao(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function vc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Qe=!0;const va=[];function _t(){va.push(Qe),Qe=!1}function xt(){const e=va.pop();Qe=e===void 0?!0:e}function Do(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let rr=0;class bc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!Qe||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new bc(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,ba(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(t){this.version++,rr++,this.notify(t)}notify(t){oo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{io()}}}function ba(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ba(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ps=new WeakMap,Kt=Symbol(""),ks=Symbol(""),sr=Symbol("");function Ee(e,t,n){if(Qe&&ce){let r=Ps.get(e);r||Ps.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new lo),s.map=r,s.key=n),s.track()}}function gt(e,t,n,r,s,o){const i=Ps.get(e);if(!i){rr++;return}const a=l=>{l&&l.trigger()};if(oo(),t==="clear")i.forEach(a);else{const l=U(e),u=l&&ro(n);if(l&&n==="length"){const f=Number(r);i.forEach((c,p)=>{(p==="length"||p===sr||!Et(p)&&p>=f)&&a(c)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(sr)),t){case"add":l?u&&a(i.get("length")):(a(i.get(Kt)),mn(e)&&a(i.get(ks)));break;case"delete":l||(a(i.get(Kt)),mn(e)&&a(i.get(ks)));break;case"set":mn(e)&&a(i.get(Kt));break}}io()}function cn(e){const t=ee(e);return t===e?t:(Ee(t,"iterate",sr),qe(e)?t:t.map(Ze))}function Zr(e){return Ee(e=ee(e),"iterate",sr),e}function Rt(e,t){return wt(e)?Pn(Wt(e)?Ze(t):t):Ze(t)}const yc={__proto__:null,[Symbol.iterator](){return hs(this,Symbol.iterator,e=>Rt(this,e))},concat(...e){return cn(this).concat(...e.map(t=>U(t)?cn(t):t))},entries(){return hs(this,"entries",e=>(e[1]=Rt(this,e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(r=>Rt(this,r)),arguments)},find(e,t){return ut(this,"find",e,t,n=>Rt(this,n),arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,n=>Rt(this,n),arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return ps(this,"includes",e)},indexOf(...e){return ps(this,"indexOf",e)},join(e){return cn(this).join(e)},lastIndexOf(...e){return ps(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return Hn(this,"pop")},push(...e){return Hn(this,"push",e)},reduce(e,...t){return Lo(this,"reduce",e,t)},reduceRight(e,...t){return Lo(this,"reduceRight",e,t)},shift(){return Hn(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return Hn(this,"splice",e)},toReversed(){return cn(this).toReversed()},toSorted(e){return cn(this).toSorted(e)},toSpliced(...e){return cn(this).toSpliced(...e)},unshift(...e){return Hn(this,"unshift",e)},values(){return hs(this,"values",e=>Rt(this,e))}};function hs(e,t,n){const r=Zr(e),s=r[t]();return r!==e&&!qe(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const _c=Array.prototype;function ut(e,t,n,r,s,o){const i=Zr(e),a=i!==e&&!qe(e),l=i[t];if(l!==_c[t]){const c=l.apply(e,o);return a?Ze(c):c}let u=n;i!==e&&(a?u=function(c,p){return n.call(this,Rt(e,c),p,e)}:n.length>2&&(u=function(c,p){return n.call(this,c,p,e)}));const f=l.call(i,u,r);return a&&s?s(f):f}function Lo(e,t,n,r){const s=Zr(e);let o=n;return s!==e&&(qe(e)?n.length>3&&(o=function(i,a,l){return n.call(this,i,a,l,e)}):o=function(i,a,l){return n.call(this,i,Rt(e,a),l,e)}),s[t](o,...r)}function ps(e,t,n){const r=ee(e);Ee(r,"iterate",sr);const s=r[t](...n);return(s===-1||s===!1)&&uo(n[0])?(n[0]=ee(n[0]),r[t](...n)):s}function Hn(e,t,n=[]){_t(),oo();const r=ee(e)[t].apply(e,n);return io(),xt(),r}const xc=eo("__proto__,__v_isRef,__isVue"),ya=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Et));function wc(e){Et(e)||(e=String(e));const t=ee(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class _a{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?kc:Aa:o?Ea:wa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=U(t);if(!s){let l;if(i&&(l=yc[n]))return l;if(n==="hasOwnProperty")return wc}const a=Reflect.get(t,n,Se(t)?t:r);if((Et(n)?ya.has(n):xc(n))||(s||Ee(t,"get",n),o))return a;if(Se(a)){const l=i&&ro(n)?a:a.value;return s&&fe(l)?Is(l):l}return fe(a)?s?Is(a):Xr(a):a}}class xa extends _a{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];const i=U(t)&&ro(n);if(!this._isShallow){const u=wt(o);if(!qe(r)&&!wt(r)&&(o=ee(o),r=ee(r)),!i&&Se(o)&&!Se(r))return u||(o.value=r),!0}const a=i?Number(n)<t.length:re(t,n),l=Reflect.set(t,n,r,Se(t)?t:s);return t===ee(s)&&(a?Nt(r,o)&&gt(t,"set",n,r):gt(t,"add",n,r)),l}deleteProperty(t,n){const r=re(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&gt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Et(n)||!ya.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",U(t)?"length":Kt),Reflect.ownKeys(t)}}class Ec extends _a{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ac=new xa,Cc=new Ec,Sc=new xa(!0);const Ns=e=>e,yr=e=>Reflect.getPrototypeOf(e);function $c(e,t,n){return function(...r){const s=this.__v_raw,o=ee(s),i=mn(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=s[e](...r),f=n?Ns:t?Pn:Ze;return!t&&Ee(o,"iterate",l?ks:Kt),be(Object.create(u),{next(){const{value:c,done:p}=u.next();return p?{value:c,done:p}:{value:a?[f(c[0]),f(c[1])]:f(c),done:p}}})}}function _r(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Rc(e,t){const n={get(s){const o=this.__v_raw,i=ee(o),a=ee(s);e||(Nt(s,a)&&Ee(i,"get",s),Ee(i,"get",a));const{has:l}=yr(i),u=t?Ns:e?Pn:Ze;if(l.call(i,s))return u(o.get(s));if(l.call(i,a))return u(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&Ee(ee(s),"iterate",Kt),s.size},has(s){const o=this.__v_raw,i=ee(o),a=ee(s);return e||(Nt(s,a)&&Ee(i,"has",s),Ee(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=ee(a),u=t?Ns:e?Pn:Ze;return!e&&Ee(l,"iterate",Kt),a.forEach((f,c)=>s.call(o,u(f),u(c),i))}};return be(n,e?{add:_r("add"),set:_r("set"),delete:_r("delete"),clear:_r("clear")}:{add(s){!t&&!qe(s)&&!wt(s)&&(s=ee(s));const o=ee(this);return yr(o).has.call(o,s)||(o.add(s),gt(o,"add",s,s)),this},set(s,o){!t&&!qe(o)&&!wt(o)&&(o=ee(o));const i=ee(this),{has:a,get:l}=yr(i);let u=a.call(i,s);u||(s=ee(s),u=a.call(i,s));const f=l.call(i,s);return i.set(s,o),u?Nt(o,f)&&gt(i,"set",s,o):gt(i,"add",s,o),this},delete(s){const o=ee(this),{has:i,get:a}=yr(o);let l=i.call(o,s);l||(s=ee(s),l=i.call(o,s)),a&&a.call(o,s);const u=o.delete(s);return l&&gt(o,"delete",s,void 0),u},clear(){const s=ee(this),o=s.size!==0,i=s.clear();return o&&gt(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$c(s,e,t)}),n}function co(e,t){const n=Rc(e,t);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,o)}const Oc={get:co(!1,!1)},Tc={get:co(!1,!0)},Pc={get:co(!0,!1)};const wa=new WeakMap,Ea=new WeakMap,Aa=new WeakMap,kc=new WeakMap;function Nc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ic(e){return e.__v_skip||!Object.isExtensible(e)?0:Nc(oc(e))}function Xr(e){return wt(e)?e:fo(e,!1,Ac,Oc,wa)}function Ca(e){return fo(e,!1,Sc,Tc,Ea)}function Is(e){return fo(e,!0,Cc,Pc,Aa)}function fo(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Ic(e);if(o===0)return e;const i=s.get(e);if(i)return i;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Wt(e){return wt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function wt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function uo(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function zc(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&ia(e,"__v_skip",!0),e}const Ze=e=>fe(e)?Xr(e):e,Pn=e=>fe(e)?Is(e):e;function Se(e){return e?e.__v_isRef===!0:!1}function Mc(e){return Sa(e,!1)}function Dc(e){return Sa(e,!0)}function Sa(e,t){return Se(e)?e:new Lc(e,t)}class Lc{constructor(t,n){this.dep=new lo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ee(t),this._value=n?t:Ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||qe(t)||wt(t);t=r?t:ee(t),Nt(t,n)&&(this._rawValue=t,this._value=r?t:Ze(t),this.dep.trigger())}}function gn(e){return Se(e)?e.value:e}const Bc={get:(e,t,n)=>t==="__v_raw"?e:gn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function $a(e){return Wt(e)?e:new Proxy(e,Bc)}class jc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new lo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return ha(this,!0),!0}get value(){const t=this.dep.track();return ga(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Fc(e,t,n=!1){let r,s;return V(e)?r=e:(r=e.get,s=e.set),new jc(r,s,n)}const xr={},Tr=new WeakMap;let Vt;function Hc(e,t=!1,n=Vt){if(n){let r=Tr.get(n);r||Tr.set(n,r=[]),r.push(e)}}function Uc(e,t,n=ae){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=n,u=N=>s?N:qe(N)||s===!1||s===0?vt(N,1):vt(N);let f,c,p,m,x=!1,C=!1;if(Se(e)?(c=()=>e.value,x=qe(e)):Wt(e)?(c=()=>u(e),x=!0):U(e)?(C=!0,x=e.some(N=>Wt(N)||qe(N)),c=()=>e.map(N=>{if(Se(N))return N.value;if(Wt(N))return u(N);if(V(N))return l?l(N,2):N()})):V(e)?t?c=l?()=>l(e,2):e:c=()=>{if(p){_t();try{p()}finally{xt()}}const N=Vt;Vt=f;try{return l?l(e,3,[m]):e(m)}finally{Vt=N}}:c=ct,t&&s){const N=c,T=s===!0?1/0:s;c=()=>vt(N(),T)}const H=gc(),k=()=>{f.stop(),H&&H.active&&no(H.effects,f)};if(o&&t){const N=t;t=(...T)=>{N(...T),k()}}let O=C?new Array(e.length).fill(xr):xr;const z=N=>{if(!(!(f.flags&1)||!f.dirty&&!N))if(t){const T=f.run();if(s||x||(C?T.some((D,K)=>Nt(D,O[K])):Nt(T,O))){p&&p();const D=Vt;Vt=f;try{const K=[T,O===xr?void 0:C&&O[0]===xr?[]:O,m];O=T,l?l(t,3,K):t(...K)}finally{Vt=D}}}else f.run()};return a&&a(z),f=new ua(c),f.scheduler=i?()=>i(z,!1):z,m=N=>Hc(N,!1,f),p=f.onStop=()=>{const N=Tr.get(f);if(N){if(l)l(N,4);else for(const T of N)T();Tr.delete(f)}},t?r?z(!0):O=f.run():i?i(z.bind(null,!0),!0):f.run(),k.pause=f.pause.bind(f),k.resume=f.resume.bind(f),k.stop=k,k}function vt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Se(e))vt(e.value,t,n);else if(U(e))for(let r=0;r<e.length;r++)vt(e[r],t,n);else if(na(e)||mn(e))e.forEach(r=>{vt(r,t,n)});else if(oa(e)){for(const r in e)vt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&vt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gr(e,t,n,r){try{return r?e(...r):e()}catch(s){vr(s,t,n)}}function Xe(e,t,n,r){if(V(e)){const s=gr(e,t,n,r);return s&&ra(s)&&s.catch(o=>{vr(o,t,n)}),s}if(U(e)){const s=[];for(let o=0;o<e.length;o++)s.push(Xe(e[o],t,n,r));return s}}function vr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ae;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,l,u)===!1)return}a=a.parent}if(o){_t(),gr(o,null,10,[e,l,u]),xt();return}}Vc(e,n,s,r,i)}function Vc(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Oe=[];let at=-1;const vn=[];let Ot=null,fn=0;const Ra=Promise.resolve();let Pr=null;function kr(e){const t=Pr||Ra;return e?t.then(this?e.bind(this):e):t}function qc(e){let t=at+1,n=Oe.length;for(;t<n;){const r=t+n>>>1,s=Oe[r],o=or(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function ho(e){if(!(e.flags&1)){const t=or(e),n=Oe[Oe.length-1];!n||!(e.flags&2)&&t>=or(n)?Oe.push(e):Oe.splice(qc(t),0,e),e.flags|=1,Oa()}}function Oa(){Pr||(Pr=Ra.then(Pa))}function zs(e){U(e)?vn.push(...e):Ot&&e.id===-1?Ot.splice(fn+1,0,e):e.flags&1||(vn.push(e),e.flags|=1),Oa()}function Bo(e,t,n=at+1){for(;n<Oe.length;n++){const r=Oe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Oe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ta(e){if(vn.length){const t=[...new Set(vn)].sort((n,r)=>or(n)-or(r));if(vn.length=0,Ot){Ot.push(...t);return}for(Ot=t,fn=0;fn<Ot.length;fn++){const n=Ot[fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,fn=0}}const or=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Pa(e){try{for(at=0;at<Oe.length;at++){const t=Oe[at];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),gr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;at<Oe.length;at++){const t=Oe[at];t&&(t.flags&=-2)}at=-1,Oe.length=0,Ta(),Pr=null,(Oe.length||vn.length)&&Pa()}}let _e=null,ka=null;function Nr(e){const t=_e;return _e=e,ka=e&&e.type.__scopeId||null,t}function bt(e,t=_e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Mr(-1);const o=Nr(t);let i;try{i=e(...s)}finally{Nr(o),r._d&&Mr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function up(e,t){if(_e===null)return e;const n=ss(_e),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,a,l=ae]=t[s];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&vt(i),r.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function Lt(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(_t(),Xe(l,n,8,[e.el,a,e,t]),xt())}}function Ar(e,t){if(Ce){let n=Ce.provides;const r=Ce.parent&&Ce.parent.provides;r===n&&(n=Ce.provides=Object.create(r)),n[e]=t}}function yt(e,t,n=!1){const r=bl();if(r||yn){let s=yn?yn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}const Gc=Symbol.for("v-scx"),Kc=()=>yt(Gc);function Cr(e,t,n){return Na(e,t,n)}function Na(e,t,n=ae){const{immediate:r,deep:s,flush:o,once:i}=n,a=be({},n),l=t&&r||!t&&o!=="post";let u;if(cr){if(o==="sync"){const m=Kc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=ct,m.resume=ct,m.pause=ct,m}}const f=Ce;a.call=(m,x,C)=>Xe(m,f,x,C);let c=!1;o==="post"?a.scheduler=m=>{Ne(m,f&&f.suspense)}:o!=="sync"&&(c=!0,a.scheduler=(m,x)=>{x?m():ho(m)}),a.augmentJob=m=>{t&&(m.flags|=4),c&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const p=Uc(e,t,a);return cr&&(u?u.push(p):l&&p()),p}function Wc(e,t,n){const r=this.proxy,s=ge(e)?e.includes(".")?Ia(r,e):()=>r[e]:e.bind(r,r);let o;V(t)?o=t:(o=t.handler,n=t);const i=br(this),a=Na(s,o.bind(r),n);return i(),a}function Ia(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Jc=Symbol("_vte"),za=e=>e.__isTeleport,mt=Symbol("_leaveCb"),wr=Symbol("_enterCb");function Yc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Va(()=>{e.isMounted=!0}),qa(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],Ma={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},Da=e=>{const t=e.subTree;return t.component?Da(t.component):t},Qc={name:"BaseTransition",props:Ma,setup(e,{slots:t}){const n=bl(),r=Yc();return()=>{const s=t.default&&ja(t.default(),!0);if(!s||!s.length)return;const o=La(s),i=ee(e),{mode:a}=i;if(r.isLeaving)return ms(o);const l=jo(o);if(!l)return ms(o);let u=Ms(l,i,r,n,c=>u=c);l.type!==ye&&ir(l,u);let f=n.subTree&&jo(n.subTree);if(f&&f.type!==ye&&!lt(f,l)&&Da(n).type!==ye){let c=Ms(f,i,r,n);if(ir(f,c),a==="out-in"&&l.type!==ye)return r.isLeaving=!0,c.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave,f=void 0},ms(o);a==="in-out"&&l.type!==ye?c.delayLeave=(p,m,x)=>{const C=Ba(r,f);C[String(f.key)]=f,p[mt]=()=>{m(),p[mt]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{x(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return o}}};function La(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ye){t=n;break}}return t}const Zc=Qc;function Ba(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ms(e,t,n,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:p,onLeave:m,onAfterLeave:x,onLeaveCancelled:C,onBeforeAppear:H,onAppear:k,onAfterAppear:O,onAppearCancelled:z}=t,N=String(e.key),T=Ba(n,e),D=(M,q)=>{M&&Xe(M,r,9,q)},K=(M,q)=>{const J=q[1];D(M,q),U(M)?M.every(S=>S.length<=1)&&J():M.length<=1&&J()},te={mode:i,persisted:a,beforeEnter(M){let q=l;if(!n.isMounted)if(o)q=H||l;else return;M[mt]&&M[mt](!0);const J=T[N];J&&lt(e,J)&&J.el[mt]&&J.el[mt](),D(q,[M])},enter(M){let q=u,J=f,S=c;if(!n.isMounted)if(o)q=k||u,J=O||f,S=z||c;else return;let W=!1;const ue=M[wr]=we=>{W||(W=!0,we?D(S,[M]):D(J,[M]),te.delayedLeave&&te.delayedLeave(),M[wr]=void 0)};q?K(q,[M,ue]):ue()},leave(M,q){const J=String(e.key);if(M[wr]&&M[wr](!0),n.isUnmounting)return q();D(p,[M]);let S=!1;const W=M[mt]=ue=>{S||(S=!0,q(),ue?D(C,[M]):D(x,[M]),M[mt]=void 0,T[J]===e&&delete T[J])};T[J]=e,m?K(m,[M,W]):W()},clone(M){const q=Ms(M,t,n,r,s);return s&&s(q),q}};return te}function ms(e){if(es(e))return e=zt(e),e.children=null,e}function jo(e){if(!es(e))return za(e.type)&&e.children?La(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function ir(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ir(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ja(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Ae?(i.patchFlag&128&&s++,r=r.concat(ja(i.children,t,a))):(t||i.type!==ye)&&r.push(a!=null?zt(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Fa(e,t){return V(e)?be({name:e.name},t,{setup:e}):e}function Ha(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ir=new WeakMap;function Qn(e,t,n,r,s=!1){if(U(e)){e.forEach((x,C)=>Qn(x,t&&(U(t)?t[C]:t),n,r,s));return}if(bn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qn(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?ss(r.component):r.el,i=s?null:o,{i:a,r:l}=e,u=t&&t.r,f=a.refs===ae?a.refs={}:a.refs,c=a.setupState,p=ee(c),m=c===ae?ta:x=>re(p,x);if(u!=null&&u!==l){if(Fo(t),ge(u))f[u]=null,m(u)&&(c[u]=null);else if(Se(u)){u.value=null;const x=t;x.k&&(f[x.k]=null)}}if(V(l))gr(l,a,12,[i,f]);else{const x=ge(l),C=Se(l);if(x||C){const H=()=>{if(e.f){const k=x?m(l)?c[l]:f[l]:l.value;if(s)U(k)&&no(k,o);else if(U(k))k.includes(o)||k.push(o);else if(x)f[l]=[o],m(l)&&(c[l]=f[l]);else{const O=[o];l.value=O,e.k&&(f[e.k]=O)}}else x?(f[l]=i,m(l)&&(c[l]=i)):C&&(l.value=i,e.k&&(f[e.k]=i))};if(i){const k=()=>{H(),Ir.delete(e)};k.id=-1,Ir.set(e,k),Ne(k,n)}else Fo(e),H()}}}function Fo(e){const t=Ir.get(e);t&&(t.flags|=8,Ir.delete(e))}Yr().requestIdleCallback;Yr().cancelIdleCallback;const bn=e=>!!e.type.__asyncLoader,es=e=>e.type.__isKeepAlive;function Xc(e,t){Ua(e,"a",t)}function ef(e,t){Ua(e,"da",t)}function Ua(e,t,n=Ce){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ts(t,r,n),n){let s=n.parent;for(;s&&s.parent;)es(s.parent.vnode)&&tf(r,t,n,s),s=s.parent}}function tf(e,t,n,r){const s=ts(t,e,r,!0);Ga(()=>{no(r[t],s)},n)}function ts(e,t,n=Ce,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{_t();const a=br(n),l=Xe(t,n,e,i);return a(),xt(),l});return r?s.unshift(o):s.push(o),o}}const At=e=>(t,n=Ce)=>{(!cr||e==="sp")&&ts(e,(...r)=>t(...r),n)},nf=At("bm"),Va=At("m"),rf=At("bu"),sf=At("u"),qa=At("bum"),Ga=At("um"),of=At("sp"),af=At("rtg"),lf=At("rtc");function cf(e,t=Ce){ts("ec",e,t)}const Ka="components";function Ds(e,t){return Ja(Ka,e,!0,t)||e}const Wa=Symbol.for("v-ndc");function ff(e){return ge(e)?Ja(Ka,e,!1)||e:e||Wa}function Ja(e,t,n=!0,r=!1){const s=_e||Ce;if(s){const o=s.type;{const a=tu(o,!1);if(a&&(a===t||a===Ge(t)||a===Jr(Ge(t))))return o}const i=Ho(s[e]||o[e],t)||Ho(s.appContext[e],t);return!i&&r?o:i}}function Ho(e,t){return e&&(e[t]||e[Ge(t)]||e[Jr(Ge(t))])}function Uo(e,t,n,r){let s;const o=n,i=U(e);if(i||ge(e)){const a=i&&Wt(e);let l=!1,u=!1;a&&(l=!qe(e),u=wt(e),e=Zr(e)),s=new Array(e.length);for(let f=0,c=e.length;f<c;f++)s[f]=t(l?u?Pn(Ze(e[f])):Ze(e[f]):e[f],f,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const f=a[l];s[l]=t(e[f],f,l,o)}}else s=[];return s}function dp(e,t,n={},r,s){if(_e.ce||_e.parent&&bn(_e.parent)&&_e.parent.ce){const u=Object.keys(n).length>0;return n.name=t,Ve(),lr(Ae,null,[me("slot",n,r)],u?-2:64)}let o=e[t];o&&o._c&&(o._d=!1),Ve();const i=o&&Ya(o(n)),a=n.key||i&&i.key,l=lr(Ae,{key:(a&&!Et(a)?a:`_${t}`)+(!i&&r?"_fb":"")},i||[],i&&e._===1?64:-2);return o&&o._c&&(o._d=!0),l}function Ya(e){return e.some(t=>Nn(t)?!(t.type===ye||t.type===Ae&&!Ya(t.children)):!0)?e:null}const Ls=e=>e?yl(e)?ss(e):Ls(e.parent):null,Zn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ls(e.parent),$root:e=>Ls(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Za(e),$forceUpdate:e=>e.f||(e.f=()=>{ho(e.update)}),$nextTick:e=>e.n||(e.n=kr.bind(e.proxy)),$watch:e=>Wc.bind(e)}),gs=(e,t)=>e!==ae&&!e.__isScriptSetup&&re(e,t),uf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(gs(r,t))return i[t]=1,r[t];if(s!==ae&&re(s,t))return i[t]=2,s[t];if(re(o,t))return i[t]=3,o[t];if(n!==ae&&re(n,t))return i[t]=4,n[t];Bs&&(i[t]=0)}}const u=Zn[t];let f,c;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ae&&re(n,t))return i[t]=4,n[t];if(c=l.config.globalProperties,re(c,t))return c[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return gs(s,t)?(s[t]=n,!0):r!==ae&&re(r,t)?(r[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:i}},a){let l;return!!(n[a]||e!==ae&&a[0]!=="$"&&re(e,a)||gs(t,a)||re(o,a)||re(r,a)||re(Zn,a)||re(s.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Vo(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Bs=!0;function df(e){const t=Za(e),n=e.proxy,r=e.ctx;Bs=!1,t.beforeCreate&&qo(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:u,created:f,beforeMount:c,mounted:p,beforeUpdate:m,updated:x,activated:C,deactivated:H,beforeDestroy:k,beforeUnmount:O,destroyed:z,unmounted:N,render:T,renderTracked:D,renderTriggered:K,errorCaptured:te,serverPrefetch:M,expose:q,inheritAttrs:J,components:S,directives:W,filters:ue}=t;if(u&&hf(u,r,null),i)for(const Y in i){const X=i[Y];V(X)&&(r[Y]=X.bind(n))}if(s){const Y=s.call(n,n);fe(Y)&&(e.data=Xr(Y))}if(Bs=!0,o)for(const Y in o){const X=o[Y],ft=V(X)?X.bind(n,n):V(X.get)?X.get.bind(n,n):ct,Ct=!V(X)&&V(X.set)?X.set.bind(n):ct,nt=Ye({get:ft,set:Ct});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Te=>nt.value=Te})}if(a)for(const Y in a)Qa(a[Y],r,n,Y);if(l){const Y=V(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(X=>{Ar(X,Y[X])})}f&&qo(f,e,"c");function ie(Y,X){U(X)?X.forEach(ft=>Y(ft.bind(n))):X&&Y(X.bind(n))}if(ie(nf,c),ie(Va,p),ie(rf,m),ie(sf,x),ie(Xc,C),ie(ef,H),ie(cf,te),ie(lf,D),ie(af,K),ie(qa,O),ie(Ga,N),ie(of,M),U(q))if(q.length){const Y=e.exposed||(e.exposed={});q.forEach(X=>{Object.defineProperty(Y,X,{get:()=>n[X],set:ft=>n[X]=ft,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===ct&&(e.render=T),J!=null&&(e.inheritAttrs=J),S&&(e.components=S),W&&(e.directives=W),M&&Ha(e)}function hf(e,t,n=ct){U(e)&&(e=js(e));for(const r in e){const s=e[r];let o;fe(s)?"default"in s?o=yt(s.from||r,s.default,!0):o=yt(s.from||r):o=yt(s),Se(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function qo(e,t,n){Xe(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qa(e,t,n,r){let s=r.includes(".")?Ia(n,r):()=>n[r];if(ge(e)){const o=t[e];V(o)&&Cr(s,o)}else if(V(e))Cr(s,e.bind(n));else if(fe(e))if(U(e))e.forEach(o=>Qa(o,t,n,r));else{const o=V(e.handler)?e.handler.bind(n):t[e.handler];V(o)&&Cr(s,o,e)}}function Za(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(u=>zr(l,u,i,!0)),zr(l,t,i)),fe(t)&&o.set(t,l),l}function zr(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&zr(e,o,n,!0),s&&s.forEach(i=>zr(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=pf[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const pf={data:Go,props:Ko,emits:Ko,methods:Kn,computed:Kn,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Kn,directives:Kn,watch:gf,provide:Go,inject:mf};function Go(e,t){return t?e?function(){return be(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function mf(e,t){return Kn(js(e),js(t))}function js(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $e(e,t){return e?[...new Set([].concat(e,t))]:t}function Kn(e,t){return e?be(Object.create(null),e,t):t}function Ko(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:be(Object.create(null),Vo(e),Vo(t??{})):t}function gf(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=$e(e[r],t[r]);return n}function Xa(){return{app:null,config:{isNativeTag:ta,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vf=0;function bf(e,t){return function(r,s=null){V(r)||(r=be({},r)),s!=null&&!fe(s)&&(s=null);const o=Xa(),i=new WeakSet,a=[];let l=!1;const u=o.app={_uid:vf++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:ru,get config(){return o.config},set config(f){},use(f,...c){return i.has(f)||(f&&V(f.install)?(i.add(f),f.install(u,...c)):V(f)&&(i.add(f),f(u,...c))),u},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),u},component(f,c){return c?(o.components[f]=c,u):o.components[f]},directive(f,c){return c?(o.directives[f]=c,u):o.directives[f]},mount(f,c,p){if(!l){const m=u._ceVNode||me(r,s);return m.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),e(m,f,p),l=!0,u._container=f,f.__vue_app__=u,ss(m.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Xe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(f,c){return o.provides[f]=c,u},runWithContext(f){const c=yn;yn=u;try{return f()}finally{yn=c}}};return u}}let yn=null;const yf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ge(t)}Modifiers`]||e[`${Mt(t)}Modifiers`];function _f(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let s=n;const o=t.startsWith("update:"),i=o&&yf(r,t.slice(7));i&&(i.trim&&(s=n.map(f=>ge(f)?f.trim():f)),i.number&&(s=n.map(lc)));let a,l=r[a=cs(t)]||r[a=cs(Ge(t))];!l&&o&&(l=r[a=cs(Mt(t))]),l&&Xe(l,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Xe(u,e,6,s)}}const xf=new WeakMap;function el(e,t,n=!1){const r=n?xf:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!V(e)){const l=u=>{const f=el(u,t,!0);f&&(a=!0,be(i,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(fe(e)&&r.set(e,null),null):(U(o)?o.forEach(l=>i[l]=null):be(i,o),fe(e)&&r.set(e,i),i)}function ns(e,t){return!e||!Gr(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,Mt(t))||re(e,t))}function Wo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:u,renderCache:f,props:c,data:p,setupState:m,ctx:x,inheritAttrs:C}=e,H=Nr(e);let k,O;try{if(n.shapeFlag&4){const N=s||r,T=N;k=Je(u.call(T,N,f,c,m,p,x)),O=a}else{const N=t;k=Je(N.length>1?N(c,{attrs:a,slots:i,emit:l}):N(c,null)),O=t.props?a:Ef(a)}}catch(N){Xn.length=0,vr(N,e,1),k=me(ye)}let z=k;if(O&&C!==!1){const N=Object.keys(O),{shapeFlag:T}=z;N.length&&T&7&&(o&&N.some(to)&&(O=Af(O,o)),z=zt(z,O,!1,!0))}return n.dirs&&(z=zt(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&ir(z,n.transition),k=z,Nr(H),k}function wf(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(Nn(s)){if(s.type!==ye||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Ef=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gr(n))&&((t||(t={}))[n]=e[n]);return t},Af=(e,t)=>{const n={};for(const r in e)(!to(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Cf(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Jo(r,i,u):!!i;if(l&8){const f=t.dynamicProps;for(let c=0;c<f.length;c++){const p=f[c];if(i[p]!==r[p]&&!ns(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Jo(r,i,u):!0:!!i;return!1}function Jo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!ns(n,o))return!0}return!1}function po({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const tl={},nl=()=>Object.create(tl),rl=e=>Object.getPrototypeOf(e)===tl;function Sf(e,t,n,r=!1){const s={},o=nl();e.propsDefaults=Object.create(null),sl(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ca(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function $f(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=ee(s),[l]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let p=f[c];if(ns(e.emitsOptions,p))continue;const m=t[p];if(l)if(re(o,p))m!==o[p]&&(o[p]=m,u=!0);else{const x=Ge(p);s[x]=Fs(l,a,x,m,e,!1)}else m!==o[p]&&(o[p]=m,u=!0)}}}else{sl(e,t,s,o)&&(u=!0);let f;for(const c in a)(!t||!re(t,c)&&((f=Mt(c))===c||!re(t,f)))&&(l?n&&(n[c]!==void 0||n[f]!==void 0)&&(s[c]=Fs(l,a,c,void 0,e,!0)):delete s[c]);if(o!==a)for(const c in o)(!t||!re(t,c))&&(delete o[c],u=!0)}u&&gt(e.attrs,"set","")}function sl(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Wn(l))continue;const u=t[l];let f;s&&re(s,f=Ge(l))?!o||!o.includes(f)?n[f]=u:(a||(a={}))[f]=u:ns(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,i=!0)}if(o){const l=ee(n),u=a||ae;for(let f=0;f<o.length;f++){const c=o[f];n[c]=Fs(s,l,c,u[c],e,!re(u,c))}}return i}function Fs(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=re(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&V(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=br(s);r=u[n]=l.call(null,t),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}const Rf=new WeakMap;function ol(e,t,n=!1){const r=n?Rf:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!V(e)){const f=c=>{l=!0;const[p,m]=ol(c,t,!0);be(i,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!l)return fe(e)&&r.set(e,pn),pn;if(U(o))for(let f=0;f<o.length;f++){const c=Ge(o[f]);Yo(c)&&(i[c]=ae)}else if(o)for(const f in o){const c=Ge(f);if(Yo(c)){const p=o[f],m=i[c]=U(p)||V(p)?{type:p}:be({},p),x=m.type;let C=!1,H=!0;if(U(x))for(let k=0;k<x.length;++k){const O=x[k],z=V(O)&&O.name;if(z==="Boolean"){C=!0;break}else z==="String"&&(H=!1)}else C=V(x)&&x.name==="Boolean";m[0]=C,m[1]=H,(C||re(m,"default"))&&a.push(c)}}const u=[i,a];return fe(e)&&r.set(e,u),u}function Yo(e){return e[0]!=="$"&&!Wn(e)}const mo=e=>e==="_"||e==="_ctx"||e==="$stable",go=e=>U(e)?e.map(Je):[Je(e)],Of=(e,t,n)=>{if(t._n)return t;const r=bt((...s)=>go(t(...s)),n);return r._c=!1,r},il=(e,t,n)=>{const r=e._ctx;for(const s in e){if(mo(s))continue;const o=e[s];if(V(o))t[s]=Of(s,o,r);else if(o!=null){const i=go(o);t[s]=()=>i}}},al=(e,t)=>{const n=go(t);e.slots.default=()=>n},ll=(e,t,n)=>{for(const r in t)(n||!mo(r))&&(e[r]=t[r])},Tf=(e,t,n)=>{const r=e.slots=nl();if(e.vnode.shapeFlag&32){const s=t._;s?(ll(r,t,n),n&&ia(r,"_",s,!0)):il(t,r)}else t&&al(e,t)},Pf=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=ae;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:ll(s,t,n):(o=!t.$stable,il(t,s)),i=t}else t&&(al(e,t),i={default:1});if(o)for(const a in s)!mo(a)&&i[a]==null&&delete s[a]},Ne=Hf;function kf(e){return Nf(e)}function Nf(e,t){const n=Yr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:u,setElementText:f,parentNode:c,nextSibling:p,setScopeId:m=ct,insertStaticContent:x}=e,C=(d,h,g,v=null,_=null,b=null,$=void 0,A=null,E=!!h.dynamicChildren)=>{if(d===h)return;d&&!lt(d,h)&&(v=y(d),Te(d,_,b,!0),d=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:w,ref:F,shapeFlag:P}=h;switch(w){case rs:H(d,h,g,v);break;case ye:k(d,h,g,v);break;case Sr:d==null&&O(h,g,v,$);break;case Ae:S(d,h,g,v,_,b,$,A,E);break;default:P&1?T(d,h,g,v,_,b,$,A,E):P&6?W(d,h,g,v,_,b,$,A,E):(P&64||P&128)&&w.process(d,h,g,v,_,b,$,A,E,L)}F!=null&&_?Qn(F,d&&d.ref,b,h||d,!h):F==null&&d&&d.ref!=null&&Qn(d.ref,null,b,d,!0)},H=(d,h,g,v)=>{if(d==null)r(h.el=a(h.children),g,v);else{const _=h.el=d.el;h.children!==d.children&&u(_,h.children)}},k=(d,h,g,v)=>{d==null?r(h.el=l(h.children||""),g,v):h.el=d.el},O=(d,h,g,v)=>{[d.el,d.anchor]=x(d.children,h,g,v,d.el,d.anchor)},z=({el:d,anchor:h},g,v)=>{let _;for(;d&&d!==h;)_=p(d),r(d,g,v),d=_;r(h,g,v)},N=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},T=(d,h,g,v,_,b,$,A,E)=>{if(h.type==="svg"?$="svg":h.type==="math"&&($="mathml"),d==null)D(h,g,v,_,b,$,A,E);else{const w=d.el&&d.el._isVueCE?d.el:null;try{w&&w._beginPatch(),M(d,h,_,b,$,A,E)}finally{w&&w._endPatch()}}},D=(d,h,g,v,_,b,$,A)=>{let E,w;const{props:F,shapeFlag:P,transition:B,dirs:G}=d;if(E=d.el=i(d.type,b,F&&F.is,F),P&8?f(E,d.children):P&16&&te(d.children,E,null,v,_,vs(d,b),$,A),G&&Lt(d,null,v,"created"),K(E,d,d.scopeId,$,v),F){for(const le in F)le!=="value"&&!Wn(le)&&o(E,le,null,F[le],b,v);"value"in F&&o(E,"value",null,F.value,b),(w=F.onVnodeBeforeMount)&&it(w,v,d)}G&&Lt(d,null,v,"beforeMount");const Z=If(_,B);Z&&B.beforeEnter(E),r(E,h,g),((w=F&&F.onVnodeMounted)||Z||G)&&Ne(()=>{w&&it(w,v,d),Z&&B.enter(E),G&&Lt(d,null,v,"mounted")},_)},K=(d,h,g,v,_)=>{if(g&&m(d,g),v)for(let b=0;b<v.length;b++)m(d,v[b]);if(_){let b=_.subTree;if(h===b||dl(b.type)&&(b.ssContent===h||b.ssFallback===h)){const $=_.vnode;K(d,$,$.scopeId,$.slotScopeIds,_.parent)}}},te=(d,h,g,v,_,b,$,A,E=0)=>{for(let w=E;w<d.length;w++){const F=d[w]=A?Tt(d[w]):Je(d[w]);C(null,F,h,g,v,_,b,$,A)}},M=(d,h,g,v,_,b,$)=>{const A=h.el=d.el;let{patchFlag:E,dynamicChildren:w,dirs:F}=h;E|=d.patchFlag&16;const P=d.props||ae,B=h.props||ae;let G;if(g&&Bt(g,!1),(G=B.onVnodeBeforeUpdate)&&it(G,g,h,d),F&&Lt(h,d,g,"beforeUpdate"),g&&Bt(g,!0),(P.innerHTML&&B.innerHTML==null||P.textContent&&B.textContent==null)&&f(A,""),w?q(d.dynamicChildren,w,A,g,v,vs(h,_),b):$||X(d,h,A,null,g,v,vs(h,_),b,!1),E>0){if(E&16)J(A,P,B,g,_);else if(E&2&&P.class!==B.class&&o(A,"class",null,B.class,_),E&4&&o(A,"style",P.style,B.style,_),E&8){const Z=h.dynamicProps;for(let le=0;le<Z.length;le++){const oe=Z[le],Pe=P[oe],ke=B[oe];(ke!==Pe||oe==="value")&&o(A,oe,Pe,ke,_,g)}}E&1&&d.children!==h.children&&f(A,h.children)}else!$&&w==null&&J(A,P,B,g,_);((G=B.onVnodeUpdated)||F)&&Ne(()=>{G&&it(G,g,h,d),F&&Lt(h,d,g,"updated")},v)},q=(d,h,g,v,_,b,$)=>{for(let A=0;A<h.length;A++){const E=d[A],w=h[A],F=E.el&&(E.type===Ae||!lt(E,w)||E.shapeFlag&198)?c(E.el):g;C(E,w,F,null,v,_,b,$,!0)}},J=(d,h,g,v,_)=>{if(h!==g){if(h!==ae)for(const b in h)!Wn(b)&&!(b in g)&&o(d,b,h[b],null,_,v);for(const b in g){if(Wn(b))continue;const $=g[b],A=h[b];$!==A&&b!=="value"&&o(d,b,A,$,_,v)}"value"in g&&o(d,"value",h.value,g.value,_)}},S=(d,h,g,v,_,b,$,A,E)=>{const w=h.el=d?d.el:a(""),F=h.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:B,slotScopeIds:G}=h;G&&(A=A?A.concat(G):G),d==null?(r(w,g,v),r(F,g,v),te(h.children||[],g,F,_,b,$,A,E)):P>0&&P&64&&B&&d.dynamicChildren&&d.dynamicChildren.length===B.length?(q(d.dynamicChildren,B,g,_,b,$,A),(h.key!=null||_&&h===_.subTree)&&cl(d,h,!0)):X(d,h,g,F,_,b,$,A,E)},W=(d,h,g,v,_,b,$,A,E)=>{h.slotScopeIds=A,d==null?h.shapeFlag&512?_.ctx.activate(h,g,v,$,E):ue(h,g,v,_,b,$,E):we(d,h,E)},ue=(d,h,g,v,_,b,$)=>{const A=d.component=Yf(d,v,_);if(es(d)&&(A.ctx.renderer=L),Qf(A,!1,$),A.asyncDep){if(_&&_.registerDep(A,ie,$),!d.el){const E=A.subTree=me(ye);k(null,E,h,g),d.placeholder=E.el}}else ie(A,d,h,g,_,b,$)},we=(d,h,g)=>{const v=h.component=d.component;if(Cf(d,h,g))if(v.asyncDep&&!v.asyncResolved){Y(v,h,g);return}else v.next=h,v.update();else h.el=d.el,v.vnode=h},ie=(d,h,g,v,_,b,$)=>{const A=()=>{if(d.isMounted){let{next:P,bu:B,u:G,parent:Z,vnode:le}=d;{const st=fl(d);if(st){P&&(P.el=le.el,Y(d,P,$)),st.asyncDep.then(()=>{d.isUnmounted||A()});return}}let oe=P,Pe;Bt(d,!1),P?(P.el=le.el,Y(d,P,$)):P=le,B&&fs(B),(Pe=P.props&&P.props.onVnodeBeforeUpdate)&&it(Pe,Z,P,le),Bt(d,!0);const ke=Wo(d),rt=d.subTree;d.subTree=ke,C(rt,ke,c(rt.el),y(rt),d,_,b),P.el=ke.el,oe===null&&po(d,ke.el),G&&Ne(G,_),(Pe=P.props&&P.props.onVnodeUpdated)&&Ne(()=>it(Pe,Z,P,le),_)}else{let P;const{el:B,props:G}=h,{bm:Z,m:le,parent:oe,root:Pe,type:ke}=d,rt=bn(h);Bt(d,!1),Z&&fs(Z),!rt&&(P=G&&G.onVnodeBeforeMount)&&it(P,oe,h),Bt(d,!0);{Pe.ce&&Pe.ce._def.shadowRoot!==!1&&Pe.ce._injectChildStyle(ke);const st=d.subTree=Wo(d);C(null,st,g,v,d,_,b),h.el=st.el}if(le&&Ne(le,_),!rt&&(P=G&&G.onVnodeMounted)){const st=h;Ne(()=>it(P,oe,st),_)}(h.shapeFlag&256||oe&&bn(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&Ne(d.a,_),d.isMounted=!0,h=g=v=null}};d.scope.on();const E=d.effect=new ua(A);d.scope.off();const w=d.update=E.run.bind(E),F=d.job=E.runIfDirty.bind(E);F.i=d,F.id=d.uid,E.scheduler=()=>ho(F),Bt(d,!0),w()},Y=(d,h,g)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,$f(d,h.props,v,g),Pf(d,h.children,g),_t(),Bo(d),xt()},X=(d,h,g,v,_,b,$,A,E=!1)=>{const w=d&&d.children,F=d?d.shapeFlag:0,P=h.children,{patchFlag:B,shapeFlag:G}=h;if(B>0){if(B&128){Ct(w,P,g,v,_,b,$,A,E);return}else if(B&256){ft(w,P,g,v,_,b,$,A,E);return}}G&8?(F&16&&He(w,_,b),P!==w&&f(g,P)):F&16?G&16?Ct(w,P,g,v,_,b,$,A,E):He(w,_,b,!0):(F&8&&f(g,""),G&16&&te(P,g,v,_,b,$,A,E))},ft=(d,h,g,v,_,b,$,A,E)=>{d=d||pn,h=h||pn;const w=d.length,F=h.length,P=Math.min(w,F);let B;for(B=0;B<P;B++){const G=h[B]=E?Tt(h[B]):Je(h[B]);C(d[B],G,g,null,_,b,$,A,E)}w>F?He(d,_,b,!0,!1,P):te(h,g,v,_,b,$,A,E,P)},Ct=(d,h,g,v,_,b,$,A,E)=>{let w=0;const F=h.length;let P=d.length-1,B=F-1;for(;w<=P&&w<=B;){const G=d[w],Z=h[w]=E?Tt(h[w]):Je(h[w]);if(lt(G,Z))C(G,Z,g,null,_,b,$,A,E);else break;w++}for(;w<=P&&w<=B;){const G=d[P],Z=h[B]=E?Tt(h[B]):Je(h[B]);if(lt(G,Z))C(G,Z,g,null,_,b,$,A,E);else break;P--,B--}if(w>P){if(w<=B){const G=B+1,Z=G<F?h[G].el:v;for(;w<=B;)C(null,h[w]=E?Tt(h[w]):Je(h[w]),g,Z,_,b,$,A,E),w++}}else if(w>B)for(;w<=P;)Te(d[w],_,b,!0),w++;else{const G=w,Z=w,le=new Map;for(w=Z;w<=B;w++){const De=h[w]=E?Tt(h[w]):Je(h[w]);De.key!=null&&le.set(De.key,w)}let oe,Pe=0;const ke=B-Z+1;let rt=!1,st=0;const Fn=new Array(ke);for(w=0;w<ke;w++)Fn[w]=0;for(w=G;w<=P;w++){const De=d[w];if(Pe>=ke){Te(De,_,b,!0);continue}let ot;if(De.key!=null)ot=le.get(De.key);else for(oe=Z;oe<=B;oe++)if(Fn[oe-Z]===0&&lt(De,h[oe])){ot=oe;break}ot===void 0?Te(De,_,b,!0):(Fn[ot-Z]=w+1,ot>=st?st=ot:rt=!0,C(De,h[ot],g,null,_,b,$,A,E),Pe++)}const No=rt?zf(Fn):pn;for(oe=No.length-1,w=ke-1;w>=0;w--){const De=Z+w,ot=h[De],Io=h[De+1],zo=De+1<F?Io.el||ul(Io):v;Fn[w]===0?C(null,ot,g,zo,_,b,$,A,E):rt&&(oe<0||w!==No[oe]?nt(ot,g,zo,2):oe--)}}},nt=(d,h,g,v,_=null)=>{const{el:b,type:$,transition:A,children:E,shapeFlag:w}=d;if(w&6){nt(d.component.subTree,h,g,v);return}if(w&128){d.suspense.move(h,g,v);return}if(w&64){$.move(d,h,g,L);return}if($===Ae){r(b,h,g);for(let P=0;P<E.length;P++)nt(E[P],h,g,v);r(d.anchor,h,g);return}if($===Sr){z(d,h,g);return}if(v!==2&&w&1&&A)if(v===0)A.beforeEnter(b),r(b,h,g),Ne(()=>A.enter(b),_);else{const{leave:P,delayLeave:B,afterLeave:G}=A,Z=()=>{d.ctx.isUnmounted?s(b):r(b,h,g)},le=()=>{b._isLeaving&&b[mt](!0),P(b,()=>{Z(),G&&G()})};B?B(b,Z,le):le()}else r(b,h,g)},Te=(d,h,g,v=!1,_=!1)=>{const{type:b,props:$,ref:A,children:E,dynamicChildren:w,shapeFlag:F,patchFlag:P,dirs:B,cacheIndex:G}=d;if(P===-2&&(_=!1),A!=null&&(_t(),Qn(A,null,g,d,!0),xt()),G!=null&&(h.renderCache[G]=void 0),F&256){h.ctx.deactivate(d);return}const Z=F&1&&B,le=!bn(d);let oe;if(le&&(oe=$&&$.onVnodeBeforeUnmount)&&it(oe,h,d),F&6)Dt(d.component,g,v);else{if(F&128){d.suspense.unmount(g,v);return}Z&&Lt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,g,L,v):w&&!w.hasOnce&&(b!==Ae||P>0&&P&64)?He(w,h,g,!1,!0):(b===Ae&&P&384||!_&&F&16)&&He(E,h,g),v&&an(d)}(le&&(oe=$&&$.onVnodeUnmounted)||Z)&&Ne(()=>{oe&&it(oe,h,d),Z&&Lt(d,null,h,"unmounted")},g)},an=d=>{const{type:h,el:g,anchor:v,transition:_}=d;if(h===Ae){ln(g,v);return}if(h===Sr){N(d);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:$,delayLeave:A}=_,E=()=>$(g,b);A?A(d.el,b,E):E()}else b()},ln=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Dt=(d,h,g)=>{const{bum:v,scope:_,job:b,subTree:$,um:A,m:E,a:w}=d;Qo(E),Qo(w),v&&fs(v),_.stop(),b&&(b.flags|=8,Te($,d,h,g)),A&&Ne(A,h),Ne(()=>{d.isUnmounted=!0},h)},He=(d,h,g,v=!1,_=!1,b=0)=>{for(let $=b;$<d.length;$++)Te(d[$],h,g,v,_)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[Jc];return g?p(g):h};let I=!1;const R=(d,h,g)=>{let v;d==null?h._vnode&&(Te(h._vnode,null,null,!0),v=h._vnode.component):C(h._vnode||null,d,h,null,null,null,g),h._vnode=d,I||(I=!0,Bo(v),Ta(),I=!1)},L={p:C,um:Te,m:nt,r:an,mt:ue,mc:te,pc:X,pbc:q,n:y,o:e};return{render:R,hydrate:void 0,createApp:bf(R)}}function vs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Bt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function If(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function cl(e,t,n=!1){const r=e.children,s=t.children;if(U(r)&&U(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Tt(s[o]),a.el=i.el),!n&&a.patchFlag!==-2&&cl(i,a)),a.type===rs&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=o+(e.type===Ae?1:0)),a.type===ye&&!a.el&&(a.el=i.el)}}function zf(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<u?o=a+1:i=a;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function fl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:fl(t)}function Qo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ul(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ul(t.subTree):null}const dl=e=>e.__isSuspense;let Hs=0;const Mf={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,o,i,a,l,u){if(e==null)Lf(t,n,r,s,o,i,a,l,u);else{if(o&&o.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}Bf(e,t,n,r,s,i,a,l,u)}},hydrate:jf,normalize:Ff},Df=Mf;function ar(e,t){const n=e.props&&e.props[t];V(n)&&n()}function Lf(e,t,n,r,s,o,i,a,l){const{p:u,o:{createElement:f}}=l,c=f("div"),p=e.suspense=hl(e,s,r,t,c,n,o,i,a,l);u(null,p.pendingBranch=e.ssContent,c,null,r,p,o,i),p.deps>0?(ar(e,"onPending"),ar(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,o,i),_n(p,e.ssFallback)):p.resolve(!1,!0)}function Bf(e,t,n,r,s,o,i,a,{p:l,um:u,o:{createElement:f}}){const c=t.suspense=e.suspense;c.vnode=t,t.el=e.el;const p=t.ssContent,m=t.ssFallback,{activeBranch:x,pendingBranch:C,isInFallback:H,isHydrating:k}=c;if(C)c.pendingBranch=p,lt(C,p)?(l(C,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0?c.resolve():H&&(k||(l(x,m,n,r,s,null,o,i,a),_n(c,m)))):(c.pendingId=Hs++,k?(c.isHydrating=!1,c.activeBranch=C):u(C,s,c),c.deps=0,c.effects.length=0,c.hiddenContainer=f("div"),H?(l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0?c.resolve():(l(x,m,n,r,s,null,o,i,a),_n(c,m))):x&&lt(x,p)?(l(x,p,n,r,s,c,o,i,a),c.resolve(!0)):(l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0&&c.resolve()));else if(x&&lt(x,p))l(x,p,n,r,s,c,o,i,a),_n(c,p);else if(ar(t,"onPending"),c.pendingBranch=p,p.shapeFlag&512?c.pendingId=p.component.suspenseId:c.pendingId=Hs++,l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0)c.resolve();else{const{timeout:O,pendingId:z}=c;O>0?setTimeout(()=>{c.pendingId===z&&c.fallback(m)},O):O===0&&c.fallback(m)}}function hl(e,t,n,r,s,o,i,a,l,u,f=!1){const{p:c,m:p,um:m,n:x,o:{parentNode:C,remove:H}}=u;let k;const O=Uf(e);O&&t&&t.pendingBranch&&(k=t.pendingId,t.deps++);const z=e.props?aa(e.props.timeout):void 0,N=o,T={vnode:e,parent:t,parentComponent:n,namespace:i,container:r,hiddenContainer:s,deps:0,pendingId:Hs++,timeout:typeof z=="number"?z:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(D=!1,K=!1){const{vnode:te,activeBranch:M,pendingBranch:q,pendingId:J,effects:S,parentComponent:W,container:ue,isInFallback:we}=T;let ie=!1;T.isHydrating?T.isHydrating=!1:D||(ie=M&&q.transition&&q.transition.mode==="out-in",ie&&(M.transition.afterLeave=()=>{J===T.pendingId&&(p(q,ue,o===N?x(M):o,0),zs(S),we&&te.ssFallback&&(te.ssFallback.el=null))}),M&&(C(M.el)===ue&&(o=x(M)),m(M,W,T,!0),!ie&&we&&te.ssFallback&&Ne(()=>te.ssFallback.el=null,T)),ie||p(q,ue,o,0)),_n(T,q),T.pendingBranch=null,T.isInFallback=!1;let Y=T.parent,X=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...S),X=!0;break}Y=Y.parent}!X&&!ie&&zs(S),T.effects=[],O&&t&&t.pendingBranch&&k===t.pendingId&&(t.deps--,t.deps===0&&!K&&t.resolve()),ar(te,"onResolve")},fallback(D){if(!T.pendingBranch)return;const{vnode:K,activeBranch:te,parentComponent:M,container:q,namespace:J}=T;ar(K,"onFallback");const S=x(te),W=()=>{T.isInFallback&&(c(null,D,q,S,M,null,J,a,l),_n(T,D))},ue=D.transition&&D.transition.mode==="out-in";ue&&(te.transition.afterLeave=W),T.isInFallback=!0,m(te,M,null,!0),ue||W()},move(D,K,te){T.activeBranch&&p(T.activeBranch,D,K,te),T.container=D},next(){return T.activeBranch&&x(T.activeBranch)},registerDep(D,K,te){const M=!!T.pendingBranch;M&&T.deps++;const q=D.vnode.el;D.asyncDep.catch(J=>{vr(J,D,0)}).then(J=>{if(D.isUnmounted||T.isUnmounted||T.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:S}=D;Vs(D,J),q&&(S.el=q);const W=!q&&D.subTree.el;K(D,S,C(q||D.subTree.el),q?null:x(D.subTree),T,i,te),W&&(S.placeholder=null,H(W)),po(D,S.el),M&&--T.deps===0&&T.resolve()})},unmount(D,K){T.isUnmounted=!0,T.activeBranch&&m(T.activeBranch,n,D,K),T.pendingBranch&&m(T.pendingBranch,n,D,K)}};return T}function jf(e,t,n,r,s,o,i,a,l){const u=t.suspense=hl(t,r,n,e.parentNode,document.createElement("div"),null,s,o,i,a,!0),f=l(e,u.pendingBranch=t.ssContent,n,u,o,i);return u.deps===0&&u.resolve(!1,!0),f}function Ff(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Zo(r?n.default:n),e.ssFallback=r?Zo(n.fallback):me(ye)}function Zo(e){let t;if(V(e)){const n=kn&&e._c;n&&(e._d=!1,Ve()),e=e(),n&&(e._d=!0,t=ze,pl())}return U(e)&&(e=wf(e)),e=Je(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Hf(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):zs(e)}function _n(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,po(r,s))}function Uf(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Ae=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),ye=Symbol.for("v-cmt"),Sr=Symbol.for("v-stc"),Xn=[];let ze=null;function Ve(e=!1){Xn.push(ze=e?null:[])}function pl(){Xn.pop(),ze=Xn[Xn.length-1]||null}let kn=1;function Mr(e,t=!1){kn+=e,e<0&&ze&&t&&(ze.hasOnce=!0)}function ml(e){return e.dynamicChildren=kn>0?ze||pn:null,pl(),kn>0&&ze&&ze.push(e),e}function un(e,t,n,r,s,o){return ml(he(e,t,n,r,s,o,!0))}function lr(e,t,n,r,s){return ml(me(e,t,n,r,s,!0))}function Nn(e){return e?e.__v_isVNode===!0:!1}function lt(e,t){return e.type===t.type&&e.key===t.key}const gl=({key:e})=>e??null,$r=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||Se(e)||V(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function he(e,t=null,n=null,r=0,s=null,o=e===Ae?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gl(t),ref:t&&$r(t),scopeId:ka,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return a?(vo(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),kn>0&&!i&&ze&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ze.push(l),l}const me=Vf;function Vf(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Wa)&&(e=ye),Nn(e)){const a=zt(e,t,!0);return n&&vo(a,n),kn>0&&!o&&ze&&(a.shapeFlag&6?ze[ze.indexOf(e)]=a:ze.push(a)),a.patchFlag=-2,a}if(nu(e)&&(e=e.__vccOpts),t){t=qf(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=Qr(a)),fe(l)&&(uo(l)&&!U(l)&&(l=be({},l)),t.style=so(l))}const i=ge(e)?1:dl(e)?128:za(e)?64:fe(e)?4:V(e)?2:0;return he(e,t,n,r,s,i,o,!0)}function qf(e){return e?uo(e)||rl(e)?be({},e):e:null}function zt(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,u=t?Kf(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&gl(u),ref:t&&t.ref?n&&o?U(o)?o.concat($r(t)):[o,$r(t)]:$r(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&ir(f,l.clone(f)),f}function vl(e=" ",t=0){return me(rs,null,e,t)}function Gf(e,t){const n=me(Sr,null,e);return n.staticCount=t,n}function hp(e="",t=!1){return t?(Ve(),lr(ye,null,e)):me(ye,null,e)}function Je(e){return e==null||typeof e=="boolean"?me(ye):U(e)?me(Ae,null,e.slice()):Nn(e)?Tt(e):me(rs,null,String(e))}function Tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zt(e)}function vo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),vo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!rl(t)?t._ctx=_e:s===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[vl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Qr([t.class,r.class]));else if(s==="style")t.style=so([t.style,r.style]);else if(Gr(s)){const o=t[s],i=r[s];i&&o!==i&&!(U(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function it(e,t,n,r=null){Xe(e,t,7,[n,r])}const Wf=Xa();let Jf=0;function Yf(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Wf,o={uid:Jf++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new mc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ol(r,s),emitsOptions:el(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=_f.bind(null,o),e.ce&&e.ce(o),o}let Ce=null;const bl=()=>Ce||_e;let Dr,Us;{const e=Yr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Dr=t("__VUE_INSTANCE_SETTERS__",n=>Ce=n),Us=t("__VUE_SSR_SETTERS__",n=>cr=n)}const br=e=>{const t=Ce;return Dr(e),e.scope.on(),()=>{e.scope.off(),Dr(t)}},Xo=()=>{Ce&&Ce.scope.off(),Dr(null)};function yl(e){return e.vnode.shapeFlag&4}let cr=!1;function Qf(e,t=!1,n=!1){t&&Us(t);const{props:r,children:s}=e.vnode,o=yl(e);Sf(e,r,o,t),Tf(e,s,n||t);const i=o?Zf(e,t):void 0;return t&&Us(!1),i}function Zf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,uf);const{setup:r}=n;if(r){_t();const s=e.setupContext=r.length>1?eu(e):null,o=br(e),i=gr(r,e,0,[e.props,s]),a=ra(i);if(xt(),o(),(a||e.sp)&&!bn(e)&&Ha(e),a){if(i.then(Xo,Xo),t)return i.then(l=>{Vs(e,l)}).catch(l=>{vr(l,e,0)});e.asyncDep=i}else Vs(e,i)}else _l(e)}function Vs(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=$a(t)),_l(e)}function _l(e,t,n){const r=e.type;e.render||(e.render=r.render||ct);{const s=br(e);_t();try{df(e)}finally{xt(),s()}}}const Xf={get(e,t){return Ee(e,"get",""),e[t]}};function eu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Xf),slots:e.slots,emit:e.emit,expose:t}}function ss(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy($a(zc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zn)return Zn[n](e)},has(t,n){return n in t||n in Zn}})):e.proxy}function tu(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function nu(e){return V(e)&&"__vccOpts"in e}const Ye=(e,t)=>Fc(e,t,cr);function bo(e,t,n){try{Mr(-1);const r=arguments.length;return r===2?fe(t)&&!U(t)?Nn(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nn(n)&&(n=[n]),me(e,t,n))}finally{Mr(1)}}const ru="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qs;const ei=typeof window<"u"&&window.trustedTypes;if(ei)try{qs=ei.createPolicy("vue",{createHTML:e=>e})}catch{}const xl=qs?e=>qs.createHTML(e):e=>e,su="http://www.w3.org/2000/svg",ou="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,ti=pt&&pt.createElement("template"),iu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?pt.createElementNS(su,e):t==="mathml"?pt.createElementNS(ou,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{ti.innerHTML=xl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=ti.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},St="transition",Un="animation",fr=Symbol("_vtc"),wl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},au=be({},Ma,wl),lu=e=>(e.displayName="Transition",e.props=au,e),cu=lu((e,{slots:t})=>bo(Zc,fu(e),t)),jt=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},ni=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function fu(e){const t={};for(const S in e)S in wl||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=i,appearToClass:f=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,x=uu(s),C=x&&x[0],H=x&&x[1],{onBeforeEnter:k,onEnter:O,onEnterCancelled:z,onLeave:N,onLeaveCancelled:T,onBeforeAppear:D=k,onAppear:K=O,onAppearCancelled:te=z}=t,M=(S,W,ue,we)=>{S._enterCancelled=we,Ft(S,W?f:a),Ft(S,W?u:i),ue&&ue()},q=(S,W)=>{S._isLeaving=!1,Ft(S,c),Ft(S,m),Ft(S,p),W&&W()},J=S=>(W,ue)=>{const we=S?K:O,ie=()=>M(W,S,ue);jt(we,[W,ie]),ri(()=>{Ft(W,S?l:o),dt(W,S?f:a),ni(we)||si(W,r,C,ie)})};return be(t,{onBeforeEnter(S){jt(k,[S]),dt(S,o),dt(S,i)},onBeforeAppear(S){jt(D,[S]),dt(S,l),dt(S,u)},onEnter:J(!1),onAppear:J(!0),onLeave(S,W){S._isLeaving=!0;const ue=()=>q(S,W);dt(S,c),S._enterCancelled?(dt(S,p),ai(S)):(ai(S),dt(S,p)),ri(()=>{S._isLeaving&&(Ft(S,c),dt(S,m),ni(N)||si(S,r,H,ue))}),jt(N,[S,ue])},onEnterCancelled(S){M(S,!1,void 0,!0),jt(z,[S])},onAppearCancelled(S){M(S,!0,void 0,!0),jt(te,[S])},onLeaveCancelled(S){q(S),jt(T,[S])}})}function uu(e){if(e==null)return null;if(fe(e))return[bs(e.enter),bs(e.leave)];{const t=bs(e);return[t,t]}}function bs(e){return aa(e)}function dt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[fr]||(e[fr]=new Set)).add(t)}function Ft(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[fr];n&&(n.delete(t),n.size||(e[fr]=void 0))}function ri(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let du=0;function si(e,t,n,r){const s=e._endId=++du,o=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=hu(e,t);if(!i)return r();const u=i+"end";let f=0;const c=()=>{e.removeEventListener(u,p),o()},p=m=>{m.target===e&&++f>=l&&c()};setTimeout(()=>{f<l&&c()},a+1),e.addEventListener(u,p)}function hu(e,t){const n=window.getComputedStyle(e),r=x=>(n[x]||"").split(", "),s=r(`${St}Delay`),o=r(`${St}Duration`),i=oi(s,o),a=r(`${Un}Delay`),l=r(`${Un}Duration`),u=oi(a,l);let f=null,c=0,p=0;t===St?i>0&&(f=St,c=i,p=o.length):t===Un?u>0&&(f=Un,c=u,p=l.length):(c=Math.max(i,u),f=c>0?i>u?St:Un:null,p=f?f===St?o.length:l.length:0);const m=f===St&&/\b(?:transform|all)(?:,|$)/.test(r(`${St}Property`).toString());return{type:f,timeout:c,propCount:p,hasTransform:m}}function oi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ii(n)+ii(e[r])))}function ii(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ai(e){return(e?e.ownerDocument:document).body.offsetHeight}function pu(e,t,n){const r=e[fr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Lr=Symbol("_vod"),El=Symbol("_vsh"),pp={name:"show",beforeMount(e,{value:t},{transition:n}){e[Lr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Vn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Vn(e,!0),r.enter(e)):r.leave(e,()=>{Vn(e,!1)}):Vn(e,t))},beforeUnmount(e,{value:t}){Vn(e,t)}};function Vn(e,t){e.style.display=t?e[Lr]:"none",e[El]=!t}const mu=Symbol(""),gu=/(?:^|;)\s*display\s*:/;function vu(e,t,n){const r=e.style,s=ge(n);let o=!1;if(n&&!s){if(t)if(ge(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Rr(r,a,"")}else for(const i in t)n[i]==null&&Rr(r,i,"");for(const i in n)i==="display"&&(o=!0),Rr(r,i,n[i])}else if(s){if(t!==n){const i=r[mu];i&&(n+=";"+i),r.cssText=n,o=gu.test(n)}}else t&&e.removeAttribute("style");Lr in e&&(e[Lr]=o?r.display:"",e[El]&&(r.display="none"))}const li=/\s*!important$/;function Rr(e,t,n){if(U(n))n.forEach(r=>Rr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bu(e,t);li.test(n)?e.setProperty(Mt(r),n.replace(li,""),"important"):e[r]=n}}const ci=["Webkit","Moz","ms"],ys={};function bu(e,t){const n=ys[t];if(n)return n;let r=Ge(t);if(r!=="filter"&&r in e)return ys[t]=r;r=Jr(r);for(let s=0;s<ci.length;s++){const o=ci[s]+r;if(o in e)return ys[t]=o}return t}const fi="http://www.w3.org/1999/xlink";function ui(e,t,n,r,s,o=pc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n):n==null||o&&!la(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Et(n)?String(n):n)}function di(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?xl(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=la(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function yu(e,t,n,r){e.addEventListener(t,n,r)}function _u(e,t,n,r){e.removeEventListener(t,n,r)}const hi=Symbol("_vei");function xu(e,t,n,r,s=null){const o=e[hi]||(e[hi]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=wu(t);if(r){const u=o[t]=Cu(r,s);yu(e,a,u,l)}else i&&(_u(e,a,i,l),o[t]=void 0)}}const pi=/(?:Once|Passive|Capture)$/;function wu(e){let t;if(pi.test(e)){t={};let r;for(;r=e.match(pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let _s=0;const Eu=Promise.resolve(),Au=()=>_s||(Eu.then(()=>_s=0),_s=Date.now());function Cu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xe(Su(r,n.value),t,5,[r])};return n.value=e,n.attached=Au(),n}function Su(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const mi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$u=(e,t,n,r,s,o)=>{const i=s==="svg";t==="class"?pu(e,r,i):t==="style"?vu(e,n,r):Gr(t)?to(t)||xu(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ru(e,t,r,i))?(di(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ui(e,t,r,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ge(r))?di(e,Ge(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ui(e,t,r,i))};function Ru(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&mi(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mi(t)&&ge(n)?!1:t in e}const Ou={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},mp=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const o=Mt(s.key);if(t.some(i=>i===o||Ou[i]===o))return e(s)})},Tu=be({patchProp:$u},iu);let gi;function Pu(){return gi||(gi=kf(Tu))}const ku=(...e)=>{const t=Pu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Iu(r);if(!s)return;const o=t._component;!V(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,Nu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Nu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Iu(e){return ge(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=globalThis,yo=Or.ShadowRoot&&(Or.ShadyCSS===void 0||Or.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_o=Symbol(),vi=new WeakMap;let Al=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==_o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(yo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=vi.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&vi.set(n,t))}return t}toString(){return this.cssText}};const zu=e=>new Al(typeof e=="string"?e:e+"",void 0,_o),Be=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,o)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new Al(n,e,_o)},Mu=(e,t)=>{if(yo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=Or.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},bi=yo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return zu(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Du,defineProperty:Lu,getOwnPropertyDescriptor:Bu,getOwnPropertyNames:ju,getOwnPropertySymbols:Fu,getPrototypeOf:Hu}=Object,It=globalThis,yi=It.trustedTypes,Uu=yi?yi.emptyScript:"",xs=It.reactiveElementPolyfillSupport,er=(e,t)=>e,Br={toAttribute(e,t){switch(t){case Boolean:e=e?Uu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},xo=(e,t)=>!Du(e,t),_i={attribute:!0,type:String,converter:Br,reflect:!1,useDefault:!1,hasChanged:xo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),It.litPropertyMetadata??(It.litPropertyMetadata=new WeakMap);let dn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=_i){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&Lu(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:o}=Bu(this.prototype,t)??{get(){return this[n]},set(i){this[n]=i}};return{get:s,set(i){const a=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_i}static _$Ei(){if(this.hasOwnProperty(er("elementProperties")))return;const t=Hu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(er("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(er("properties"))){const n=this.properties,r=[...ju(n),...Fu(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(bi(s))}else t!==void 0&&n.push(bi(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Br).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){var o,i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=r.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Br;this._$Em=s;const u=l.fromAttribute(n,a.type);this[s]=u??((i=this._$Ej)==null?void 0:i.get(s))??u,this._$Em=null}}requestUpdate(t,n,r,s=!1,o){var i;if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??xo)(o,n)||r.useDefault&&r.reflect&&o===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:o},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??n??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:a}=i,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};dn.elementStyles=[],dn.shadowRootOptions={mode:"open"},dn[er("elementProperties")]=new Map,dn[er("finalized")]=new Map,xs==null||xs({ReactiveElement:dn}),(It.reactiveElementVersions??(It.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=globalThis,xi=e=>e,jr=tr.trustedTypes,wi=jr?jr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Cl="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,Sl="?"+kt,Vu=`<${Sl}>`,Xt=document,ur=()=>Xt.createComment(""),dr=e=>e===null||typeof e!="object"&&typeof e!="function",wo=Array.isArray,qu=e=>wo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ws=`[ 	
\f\r]`,qn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ei=/-->/g,Ai=/>/g,Ht=RegExp(`>|${ws}(?:([^\\s"'>=/]+)(${ws}*=${ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ci=/'/g,Si=/"/g,$l=/^(?:script|style|textarea|title)$/i,Rl=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),de=Rl(1),$i=Rl(2),In=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),Ri=new WeakMap,qt=Xt.createTreeWalker(Xt,129);function Ol(e,t){if(!wo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return wi!==void 0?wi.createHTML(t):t}const Gu=(e,t)=>{const n=e.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",i=qn;for(let a=0;a<n;a++){const l=e[a];let u,f,c=-1,p=0;for(;p<l.length&&(i.lastIndex=p,f=i.exec(l),f!==null);)p=i.lastIndex,i===qn?f[1]==="!--"?i=Ei:f[1]!==void 0?i=Ai:f[2]!==void 0?($l.test(f[2])&&(s=RegExp("</"+f[2],"g")),i=Ht):f[3]!==void 0&&(i=Ht):i===Ht?f[0]===">"?(i=s??qn,c=-1):f[1]===void 0?c=-2:(c=i.lastIndex-f[2].length,u=f[1],i=f[3]===void 0?Ht:f[3]==='"'?Si:Ci):i===Si||i===Ci?i=Ht:i===Ei||i===Ai?i=qn:(i=Ht,s=void 0);const m=i===Ht&&e[a+1].startsWith("/>")?" ":"";o+=i===qn?l+Vu:c>=0?(r.push(u),l.slice(0,c)+Cl+l.slice(c)+kt+m):l+kt+(c===-2?a:m)}return[Ol(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let Gs=class Tl{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let o=0,i=0;const a=t.length-1,l=this.parts,[u,f]=Gu(t,n);if(this.el=Tl.createElement(u,r),qt.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=qt.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Cl)){const p=f[i++],m=s.getAttribute(c).split(kt),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:x[2],strings:m,ctor:x[1]==="."?Wu:x[1]==="?"?Ju:x[1]==="@"?Yu:os}),s.removeAttribute(c)}else c.startsWith(kt)&&(l.push({type:6,index:o}),s.removeAttribute(c));if($l.test(s.tagName)){const c=s.textContent.split(kt),p=c.length-1;if(p>0){s.textContent=jr?jr.emptyScript:"";for(let m=0;m<p;m++)s.append(c[m],ur()),qt.nextNode(),l.push({type:2,index:++o});s.append(c[p],ur())}}}else if(s.nodeType===8)if(s.data===Sl)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(kt,c+1))!==-1;)l.push({type:7,index:o}),c+=kt.length-1}o++}}static createElement(t,n){const r=Xt.createElement("template");return r.innerHTML=t,r}};function zn(e,t,n=e,r){var i,a;if(t===In)return t;let s=r!==void 0?(i=n._$Co)==null?void 0:i[r]:n._$Cl;const o=dr(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=s:n._$Cl=s),s!==void 0&&(t=zn(e,s._$AS(e,t.values),s,r)),t}class Ku{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??Xt).importNode(n,!0);qt.currentNode=s;let o=qt.nextNode(),i=0,a=0,l=r[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new Eo(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new Qu(o,this,t)),this._$AV.push(u),l=r[++a]}i!==(l==null?void 0:l.index)&&(o=qt.nextNode(),i++)}return qt.currentNode=Xt,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}let Eo=class Pl{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=zn(this,t,n),dr(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==In&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):qu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&dr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Xt.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Gs.createElement(Ol(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(n);else{const i=new Ku(s,this),a=i.u(this.options);i.p(n),this.T(a),this._$AH=i}}_$AC(t){let n=Ri.get(t.strings);return n===void 0&&Ri.set(t.strings,n=new Gs(t)),n}k(t){wo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const o of t)s===n.length?n.push(r=new Pl(this.O(ur()),this.O(ur()),this,this.options)):r=n[s],r._$AI(o),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t!==this._$AB;){const s=xi(t).nextSibling;xi(t).remove(),t=s}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},os=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,o){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(t,n=this,r,s){const o=this.strings;let i=!1;if(o===void 0)t=zn(this,t,n,0),i=!dr(t)||t!==this._$AH&&t!==In,i&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=zn(this,a[r+l],n,l),u===In&&(u=this._$AH[l]),i||(i=!dr(u)||u!==this._$AH[l]),u===se?t=se:t!==se&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}i&&!s&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Wu=class extends os{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}};class Ju extends os{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}let Yu=class extends os{constructor(t,n,r,s,o){super(t,n,r,s,o),this.type=5}_$AI(t,n=this){if((t=zn(this,t,n,0)??se)===In)return;const r=this._$AH,s=t===se&&r!==se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==se&&(r===se||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class Qu{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){zn(this,t)}}const Es=tr.litHtmlPolyfillSupport;Es==null||Es(Gs,Eo),(tr.litHtmlVersions??(tr.litHtmlVersions=[])).push("3.3.3");const Zu=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=s=new Eo(t.insertBefore(ur(),o),o,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=globalThis;let xe=class extends dn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zu(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return In}};var ea;xe._$litElement$=!0,xe.finalized=!0,(ea=Jt.litElementHydrateSupport)==null||ea.call(Jt,{LitElement:xe});const As=Jt.litElementPolyfillSupport;As==null||As({LitElement:xe});(Jt.litElementVersions??(Jt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xu={attribute:!0,type:String,converter:Br,reflect:!1,hasChanged:xo},ed=(e=Xu,t,n)=>{const{kind:r,metadata:s}=n;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:i}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,l,e,!0,a)},init(a){return a!==void 0&&this.C(i,void 0,e,a),a}}}if(r==="setter"){const{name:i}=n;return function(a){const l=this[i];t.call(this,a),this.requestUpdate(i,l,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function j(e){return(t,n)=>typeof n=="object"?ed(e,t,n):((r,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,r),i?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function td(e,t){return(n,r,s)=>{const o=i=>{var a;return((a=i.renderRoot)==null?void 0:a.querySelector(e))??null};return kl(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ao(e){return(t,n)=>{const{slot:r,selector:s}=e??{},o="slot"+(r?`[name=${r}]`:":not([name])");return kl(t,n,{get(){var l;const i=(l=this.renderRoot)==null?void 0:l.querySelector(o),a=(i==null?void 0:i.assignedElements(e))??[];return s===void 0?a:a.filter(u=>u.matches(s))}})}}var sn=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},xn;let Fr=(xn=class extends xe{constructor(){super(),this.exclusive=!1,this._onToggle=t=>{if(!this.exclusive)return;const n=t.target;if(n.open)for(const r of this._items)r!==n&&r.open&&(r.open=!1)},this.addEventListener("mfp-accordion-toggle",this._onToggle)}render(){return de`<slot></slot>`}},xn.styles=Be`
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
    `,xn);sn([j({type:Boolean})],Fr.prototype,"exclusive",void 0);sn([Ao({selector:"mfp-accordion-item"})],Fr.prototype,"_items",void 0);Fr=sn([je("mfp-accordion")],Fr);var wn;let hr=(wn=class extends xe{constructor(){super(...arguments),this.label="",this.open=!1,this.disabled=!1,this._onToggle=t=>{const n=t.target;this.open!==n.open&&(this.open=n.open),this.dispatchEvent(new CustomEvent("mfp-accordion-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})),this.dispatchEvent(new CustomEvent("mfp-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}}))}}render(){return de`
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
        `}},wn.styles=Be`
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
    `,wn);sn([j()],hr.prototype,"label",void 0);sn([j({type:Boolean,reflect:!0})],hr.prototype,"open",void 0);sn([j({type:Boolean,reflect:!0})],hr.prototype,"disabled",void 0);hr=sn([je("mfp-accordion-item")],hr);var is=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},En;let pr=(En=class extends xe{constructor(){super(...arguments),this.variant="neutral",this.size="sm",this.outlined=!1}render(){return de`<slot></slot>`}},En.styles=Be`
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
    `,En);is([j({reflect:!0})],pr.prototype,"variant",void 0);is([j({reflect:!0})],pr.prototype,"size",void 0);is([j({type:Boolean,reflect:!0})],pr.prototype,"outlined",void 0);pr=is([je("mfp-badge")],pr);var Bn=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Yt;let en=(Yt=class extends xe{constructor(){super(),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this._onClick=()=>{var t,n;this.disabled||this.loading||(this.type==="submit"?(t=this.form)==null||t.requestSubmit():this.type==="reset"&&((n=this.form)==null||n.reset()))},this._internals=this.attachInternals()}get form(){return this._internals.form}render(){const t=this.disabled||this.loading;return de`
            <button
                type="button"
                ?disabled=${t}
                aria-busy=${this.loading?"true":"false"}
                part="button"
                @click=${this._onClick}
            >
                ${this.loading?de`<span class="spinner" aria-hidden="true"></span>`:""}
                <slot></slot>
            </button>
        `}},Yt.formAssociated=!0,Yt.styles=Be`
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
    `,Yt);Bn([j({reflect:!0})],en.prototype,"variant",void 0);Bn([j({reflect:!0})],en.prototype,"size",void 0);Bn([j({type:Boolean,reflect:!0})],en.prototype,"disabled",void 0);Bn([j({type:Boolean,reflect:!0})],en.prototype,"loading",void 0);Bn([j()],en.prototype,"type",void 0);en=Bn([je("mfp-button")],en);var Co=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},An;let Hr=(An=class extends xe{constructor(){super(...arguments),this.variant="default",this.padding="default",this._onSlotChange=t=>{const n=t.target,r=n.parentElement;if(!r)return;n.assignedNodes({flatten:!0}).length>0?r.removeAttribute("data-empty"):r.setAttribute("data-empty","")}}render(){return de`
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
        `}},An.styles=Be`
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
    `,An);Co([j({reflect:!0})],Hr.prototype,"variant",void 0);Co([j({reflect:!0})],Hr.prototype,"padding",void 0);Hr=Co([je("mfp-card")],Hr);var Nl=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Cn;let Ks=(Cn=class extends xe{constructor(){super(...arguments),this.variant="default"}render(){return de` <footer class="inner" part="inner"><slot></slot></footer> `}},Cn.styles=Be`
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
    `,Cn);Nl([j({reflect:!0})],Ks.prototype,"variant",void 0);Ks=Nl([je("mfp-footer")],Ks);var jn=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Sn;let tn=(Sn=class extends xe{constructor(){super(...arguments),this.variant="ghost",this.size="md",this.disabled=!1,this.type="button",this.label=""}render(){return this.label||console.warn("<mfp-icon-button> requires a `label` attribute for accessibility"),de`
            <button
                type=${this.type}
                ?disabled=${this.disabled}
                aria-label=${this.label}
                part="button"
            >
                <slot></slot>
            </button>
        `}},Sn.styles=Be`
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
    `,Sn);jn([j({reflect:!0})],tn.prototype,"variant",void 0);jn([j({reflect:!0})],tn.prototype,"size",void 0);jn([j({type:Boolean,reflect:!0})],tn.prototype,"disabled",void 0);jn([j()],tn.prototype,"type",void 0);jn([j()],tn.prototype,"label",void 0);tn=jn([je("mfp-icon-button")],tn);var We=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let nd=0;var Qt;let Le=(Qt=class extends xe{constructor(){super(),this.size="md",this.type="text",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.readonly=!1,this.required=!1,this._id=`mfp-input-${++nd}`,this._onInput=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please fill out this field."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,r=`${n}-hint`,s=`${n}-error`,o=t?s:this.hint?r:void 0;return de`
            ${this.label?de`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?de`<span class="required" aria-hidden="true">*</span>`:se}
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
            ${t?de`<p part="error" id=${s} class="error" role="alert">${this.error}</p>`:this.hint?de`<p part="hint" id=${r} class="hint">${this.hint}</p>`:se}
        `}},Qt.styles=Be`
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
    `,Qt.formAssociated=!0,Qt);We([j({reflect:!0})],Le.prototype,"size",void 0);We([j()],Le.prototype,"type",void 0);We([j()],Le.prototype,"value",void 0);We([j()],Le.prototype,"name",void 0);We([j()],Le.prototype,"label",void 0);We([j()],Le.prototype,"placeholder",void 0);We([j()],Le.prototype,"hint",void 0);We([j()],Le.prototype,"error",void 0);We([j({type:Boolean,reflect:!0})],Le.prototype,"disabled",void 0);We([j({type:Boolean,reflect:!0})],Le.prototype,"readonly",void 0);We([j({type:Boolean,reflect:!0})],Le.prototype,"required",void 0);Le=We([je("mfp-input")],Le);var Me=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},$n;let nn=($n=class extends xe{constructor(){super(...arguments),this.sticky=!1,this.variant="default",this.breakpoint=768,this.menuOpen=!1,this._isCollapsed=!1,this._onResize=t=>{if(!this.breakpoint)return;const n=t[0];n&&this._setCollapsed(n.contentRect.width<this.breakpoint)},this._onDocumentClick=t=>{this.menuOpen&&(t.composedPath().includes(this)||(this.menuOpen=!1))},this._onKeyDown=t=>{var n;t.key==="Escape"&&this.menuOpen&&(this.menuOpen=!1,(n=this.renderRoot.querySelector(".menu-toggle"))==null||n.focus())},this._onToggleClick=()=>{this.menuOpen=!this.menuOpen},this._onMenuClick=t=>{if(!this.menuOpen)return;t.target.closest("mfp-nav-item")&&(this.menuOpen=!1)},this._onSlotChange=()=>{this._syncOrientation(this._isCollapsed?"vertical":"horizontal")}}_syncOrientation(t){for(const n of this._items)n.orientation=t}_setCollapsed(t){t!==this._isCollapsed&&(this._isCollapsed=t,this.toggleAttribute("data-collapsed",t),this._syncOrientation(t?"vertical":"horizontal"),t||(this.menuOpen=!1))}firstUpdated(){this._syncOrientation("horizontal")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(this._onResize),this._ro.observe(this),document.addEventListener("click",this._onDocumentClick),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._ro)==null||t.disconnect(),document.removeEventListener("click",this._onDocumentClick),document.removeEventListener("keydown",this._onKeyDown)}render(){return de`
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
                        ${this.menuOpen?$i`
                                  <g transform="rotate(45 12 12)">
                                      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  </g>
                                  <g transform="rotate(-45 12 12)">
                                      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  </g>
                              `:$i`
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
        `}},$n.styles=Be`
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
            border: 1px solid transparent;
            border-radius: var(--size-radius-md, 8px);
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
            outline: 2px solid var(--color-brand-primary, #2563eb);
            outline-offset: 2px;
        }

        .menu-toggle svg {
            width: 22px;
            height: 22px;
        }

        ::slotted([slot='brand']) {
            font-size: var(--font-size-lg, 18px);
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
            border-top: 1px solid var(--color-border-default, #e5e7eb);
            box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
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
    `,$n);Me([j({type:Boolean,reflect:!0})],nn.prototype,"sticky",void 0);Me([j({reflect:!0})],nn.prototype,"variant",void 0);Me([j({type:Number})],nn.prototype,"breakpoint",void 0);Me([j({type:Boolean,reflect:!0,attribute:"menu-open"})],nn.prototype,"menuOpen",void 0);Me([Ao({selector:"mfp-nav-item"})],nn.prototype,"_items",void 0);nn=Me([je("mfp-nav-bar")],nn);var Rn;let Ur=(Rn=class extends xe{constructor(){super(...arguments),this.variant="default",this._onItemsSlotChange=()=>this._syncOrientation(),this._onNamedSlotChange=t=>{const n=t.target,r=n.parentElement;if(!r)return;const s=n.assignedNodes({flatten:!0}).length>0;r.toggleAttribute("data-empty",!s)}}_syncOrientation(){for(const t of this._items)t.orientation="vertical"}firstUpdated(){this._syncOrientation()}render(){return de`
            <div class="header" part="header" data-empty>
                <slot name="header" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
            <nav class="items" aria-label="Side navigation">
                <slot @slotchange=${this._onItemsSlotChange}></slot>
            </nav>
            <div class="footer" part="footer" data-empty>
                <slot name="footer" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
        `}},Rn.styles=Be`
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
    `,Rn);Me([j({reflect:!0})],Ur.prototype,"variant",void 0);Me([Ao({selector:"mfp-nav-item"})],Ur.prototype,"_items",void 0);Ur=Me([je("mfp-side-nav")],Ur);var On;let Mn=(On=class extends xe{constructor(){super(...arguments),this.href="",this.active=!1,this.disabled=!1,this.orientation="horizontal",this._onClick=t=>{this.disabled&&(t.preventDefault(),t.stopPropagation())}}render(){const t=de`
            <slot name="icon"></slot>
            <span class="label"><slot></slot></span>
        `;return this.href?de`
                <a
                    part="link"
                    href=${this.href}
                    aria-current=${this.active?"page":se}
                    aria-disabled=${this.disabled?"true":se}
                    @click=${this._onClick}
                >
                    ${t}
                </a>
            `:de`
            <button
                type="button"
                part="link"
                ?disabled=${this.disabled}
                aria-current=${this.active?"page":se}
            >
                ${t}
            </button>
        `}},On.styles=Be`
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
    `,On);Me([j()],Mn.prototype,"href",void 0);Me([j({type:Boolean,reflect:!0})],Mn.prototype,"active",void 0);Me([j({type:Boolean,reflect:!0})],Mn.prototype,"disabled",void 0);Me([j({reflect:!0})],Mn.prototype,"orientation",void 0);Mn=Me([je("mfp-nav-item")],Mn);var tt=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let rd=0;var Zt;let Ke=(Zt=class extends xe{constructor(){super(),this.size="md",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.required=!1,this._id=`mfp-select-${++rd}`,this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onSlotChange=t=>{const n=t.target,r=this._selectEl;if(!r)return;const s=this.value;r.querySelectorAll("[data-mfp-cloned]").forEach(i=>i.remove());const o=n.assignedNodes({flatten:!0}).filter(i=>i.nodeType===Node.ELEMENT_NODE&&(i.tagName==="OPTION"||i.tagName==="OPTGROUP"));for(const i of o){const a=i.cloneNode(!0);a.setAttribute("data-mfp-cloned",""),r.appendChild(a)}r.value=s},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please select an option."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,r=`${n}-hint`,s=`${n}-error`,o=t?s:this.hint?r:void 0;return de`
            ${this.label?de`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?de`<span class="required" aria-hidden="true">*</span>`:se}
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
                    ${this.placeholder?de`<option value="" disabled selected hidden data-mfp-placeholder>
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
            ${t?de`<p part="error" id=${s} class="error" role="alert">${this.error}</p>`:this.hint?de`<p part="hint" id=${r} class="hint">${this.hint}</p>`:se}
        `}},Zt.styles=Be`
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
    `,Zt.formAssociated=!0,Zt);tt([j({reflect:!0})],Ke.prototype,"size",void 0);tt([j()],Ke.prototype,"value",void 0);tt([j()],Ke.prototype,"name",void 0);tt([j()],Ke.prototype,"label",void 0);tt([j()],Ke.prototype,"placeholder",void 0);tt([j()],Ke.prototype,"hint",void 0);tt([j()],Ke.prototype,"error",void 0);tt([j({type:Boolean,reflect:!0})],Ke.prototype,"disabled",void 0);tt([j({type:Boolean,reflect:!0})],Ke.prototype,"required",void 0);tt([td("select")],Ke.prototype,"_selectEl",void 0);Ke=tt([je("mfp-select")],Ke);var So=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Tn;let Vr=(Tn=class extends xe{constructor(){super(...arguments),this.size="md",this.label="Loading"}render(){return de`<div class="ring" role="status" aria-label=${this.label}></div>`}},Tn.styles=Be`
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
    `,Tn);So([j({reflect:!0})],Vr.prototype,"size",void 0);So([j()],Vr.prototype,"label",void 0);Vr=So([je("mfp-spinner")],Vr);const sd=`/*
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
`,od=`/*
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
`,id=`/*
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
`,ad=`/*
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
`,ld=`/*
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
`,cd=`/*
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
`,Il="mfp-theme",Oi="mfp-active-theme",qr={blue:{label:"Blue",css:sd},emerald:{label:"Emerald",css:od},orange:{label:"Orange",css:ad},sand:{label:"Sand",css:ld},terracotta:{label:"Terracotta",css:cd},navy:{label:"Navy",css:id}},fd="navy",Ti={portfolio:"navy",warm:"terracotta",earth:"sand"};function zl(){const e=localStorage.getItem(Il);return e&&Ti[e]?Ti[e]:e&&e in qr?e:fd}function Ml(e){if(!(e in qr))return;let t=document.getElementById(Oi);t||(t=document.createElement("style"),t.id=Oi,document.head.appendChild(t)),t.textContent=qr[e].css,localStorage.setItem(Il,e)}function ud(){Ml(zl())}const Dl=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},dd={name:"App",data(){return{currentYear:new Date().getFullYear(),themes:qr,activeTheme:zl(),navLinks:[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/resume",label:"Resume"},{to:"/portfolio",label:"Projects"},{to:"/python",label:"Python"},{to:"/data",label:"Data Analysis"}]}},methods:{go(e){this.$route.path!==e&&this.$router.push(e)},onThemeChange(e){var n;const t=(n=e.detail)==null?void 0:n.value;t&&(Ml(t),this.activeTheme=t)},syncNavHeight(){var t;const e=(t=this.$refs.navBar)==null?void 0:t.offsetHeight;e&&document.documentElement.style.setProperty("--site-nav-height",`${e}px`)}},mounted(){this.syncNavHeight(),this._navResizeObserver=new ResizeObserver(()=>this.syncNavHeight()),this._navResizeObserver.observe(this.$refs.navBar)},beforeUnmount(){var e;(e=this._navResizeObserver)==null||e.disconnect()}},hd={ref:"navBar",sticky:"",variant:"brand"},pd=["active","onClick"],md={slot:"actions",class:"navbar-actions"},gd=["active"],vd={class:"theme-group"},bd=["value"],yd=["value"],_d={variant:"brand"},xd={class:"footer-copy"};function wd(e,t,n,r,s,o){const i=Ds("router-link"),a=Ds("router-view");return Ve(),un("div",{class:Qr(["h-100 m-0 p-0",{"route-resume":e.$route.path==="/resume"}])},[he("mfp-nav-bar",hd,[me(i,{slot:"brand",to:"/",class:"brand-link"},{default:bt(()=>[...t[2]||(t[2]=[vl("Melissa Freundschuh-Pula",-1)])]),_:1}),(Ve(!0),un(Ae,null,Uo(s.navLinks,l=>(Ve(),un("mfp-nav-item",{key:l.to,active:e.$route.path===l.to,onClick:u=>o.go(l.to)},Er(l.label),9,pd))),128)),he("div",md,[he("mfp-nav-item",{active:e.$route.path==="/contact",onClick:t[0]||(t[0]=l=>o.go("/contact"))},"Contact",8,gd),he("label",vd,[t[3]||(t[3]=he("span",{class:"theme-label"},"Theme:",-1)),he("mfp-select",{class:"theme-switcher",size:"sm","aria-label":"Theme",value:s.activeTheme,onChange:t[1]||(t[1]=(...l)=>o.onThemeChange&&o.onThemeChange(...l))},[(Ve(!0),un(Ae,null,Uo(s.themes,(l,u)=>(Ve(),un("option",{key:u,value:u},Er(l.label),9,yd))),128))],40,bd)])])],512),me(a,null,{default:bt(({Component:l})=>[me(cu,{name:"fade",mode:"out-in"},{default:bt(()=>[(Ve(),lr(Df,null,{fallback:bt(()=>[...t[4]||(t[4]=[he("div",{class:"route-loading"},[he("mfp-spinner",{size:"lg",label:"Loading page"})],-1)])]),default:bt(()=>[(Ve(),lr(ff(l)))]),_:2},1024))]),_:2},1024)]),_:1}),he("mfp-footer",_d,[he("span",xd,"© "+Er(s.currentYear)+" Melissa Freundschuh-Pula",1),t[5]||(t[5]=Gf('<div class="footer-links"><a href="https://github.com/melissapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a><a href="mailto:melissa_m_24@yahoo.com" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a></div>',1))])],2)}const Ed=Dl(dd,[["render",wd]]),Ad="modulepreload",Cd=function(e){return"/"+e},Pi={},Ut=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=Cd(l),l in Pi)return;Pi[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Ad,u||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const hn=typeof document<"u";function Ll(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Sd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ll(e.default)}const ne=Object.assign;function Cs(e,t){const n={};for(const r in t){const s=t[r];n[r]=et(s)?s.map(e):e(s)}return n}const nr=()=>{},et=Array.isArray;function ki(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Bl=/#/g,$d=/&/g,Rd=/\//g,Od=/=/g,Td=/\?/g,jl=/\+/g,Pd=/%5B/g,kd=/%5D/g,Fl=/%5E/g,Nd=/%60/g,Hl=/%7B/g,Id=/%7C/g,Ul=/%7D/g,zd=/%20/g;function $o(e){return e==null?"":encodeURI(""+e).replace(Id,"|").replace(Pd,"[").replace(kd,"]")}function Md(e){return $o(e).replace(Hl,"{").replace(Ul,"}").replace(Fl,"^")}function Ws(e){return $o(e).replace(jl,"%2B").replace(zd,"+").replace(Bl,"%23").replace($d,"%26").replace(Nd,"`").replace(Hl,"{").replace(Ul,"}").replace(Fl,"^")}function Dd(e){return Ws(e).replace(Od,"%3D")}function Ld(e){return $o(e).replace(Bl,"%23").replace(Td,"%3F")}function Bd(e){return Ld(e).replace(Rd,"%2F")}function mr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const jd=/\/$/,Fd=e=>e.replace(jd,"");function Ss(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=t.slice(0,l),o=t.slice(l,a>0?a:t.length),s=e(o.slice(1))),a>=0&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=qd(r??t,n),{fullPath:r+o+i,path:r,query:s,hash:mr(i)}}function Hd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ni(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ud(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Dn(t.matched[r],n.matched[s])&&Vl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Dn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Vd(e[n],t[n]))return!1;return!0}function Vd(e,t){return et(e)?Ii(e,t):et(t)?Ii(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ii(e,t){return et(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function qd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Js=function(e){return e.pop="pop",e.push="push",e}({}),$s=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Gd(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Fd(e)}const Kd=/^[^#]+#/;function Wd(e,t){return e.replace(Kd,"#")+t}function Jd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const as=()=>({left:window.scrollX,top:window.scrollY});function Yd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Jd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function zi(e,t){return(history.state?history.state.position-t:-1)+e}const Ys=new Map;function Qd(e,t){Ys.set(e,t)}function Zd(e){const t=Ys.get(e);return Ys.delete(e),t}function Xd(e){return typeof e=="string"||e&&typeof e=="object"}function ql(e){return typeof e=="string"||typeof e=="symbol"}let pe=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Gl=Symbol("");pe.MATCHER_NOT_FOUND+"",pe.NAVIGATION_GUARD_REDIRECT+"",pe.NAVIGATION_ABORTED+"",pe.NAVIGATION_CANCELLED+"",pe.NAVIGATION_DUPLICATED+"";function Ln(e,t){return ne(new Error,{type:e,[Gl]:!0},t)}function ht(e,t){return e instanceof Error&&Gl in e&&(t==null||!!(e.type&t))}const eh=["params","query","hash"];function th(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of eh)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function nh(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(jl," "),o=s.indexOf("="),i=mr(o<0?s:s.slice(0,o)),a=o<0?null:mr(s.slice(o+1));if(i in t){let l=t[i];et(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function Mi(e){let t="";for(let n in e){const r=e[n];if(n=Dd(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(et(r)?r.map(s=>s&&Ws(s)):[r&&Ws(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function rh(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=et(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const sh=Symbol(""),Di=Symbol(""),Ro=Symbol(""),Kl=Symbol(""),Qs=Symbol("");function Gn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Pt(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Ln(pe.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?l(p):Xd(p)?l(Ln(pe.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),a())},f=o(()=>e.call(r&&r.instances[s],t,n,u));let c=Promise.resolve(f);e.length<3&&(c=c.then(u)),c.catch(p=>l(p))})}function Rs(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Ll(l)){const u=(l.__vccOpts||l)[t];u&&o.push(Pt(u,n,r,i,a,s))}else{let u=l();o.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const c=Sd(f)?f.default:f;i.mods[a]=f,i.components[a]=c;const p=(c.__vccOpts||c)[t];return p&&Pt(p,n,r,i,a,s)()}))}}return o}function oh(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(u=>Dn(u,a))?r.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(u=>Dn(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ih=()=>location.protocol+"//"+location.host;function Wl(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),Ni(a,"")}return Ni(n,e)+r+s}function ah(e,t,n,r){let s=[],o=[],i=null;const a=({state:p})=>{const m=Wl(e,location),x=n.value,C=t.value;let H=0;if(p){if(n.value=m,t.value=p,i&&i===x){i=null;return}H=C?p.position-C.position:0}else r(m);s.forEach(k=>{k(n.value,x,{delta:H,type:Js.pop,direction:H?H>0?$s.forward:$s.back:$s.unknown})})};function l(){i=n.value}function u(p){s.push(p);const m=()=>{const x=s.indexOf(p);x>-1&&s.splice(x,1)};return o.push(m),m}function f(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ne({},p.state,{scroll:as()}),"")}}function c(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:c}}function Li(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?as():null}}function lh(e){const{history:t,location:n}=window,r={value:Wl(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,u,f){const c=e.indexOf("#"),p=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+l:ih()+e+l;try{t[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function i(l,u){o(l,ne({},t.state,Li(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function a(l,u){const f=ne({},s.value,t.state,{forward:l,scroll:as()});o(f.current,f,!0),o(l,ne({},Li(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:a,replace:i}}function ch(e){e=Gd(e);const t=lh(e),n=ah(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=ne({location:"",base:e,go:r,createHref:Wd.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function fh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ch(e)}let Gt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var ve=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(ve||{});const uh={type:Gt.Static,value:""},dh=/[a-zA-Z0-9_]/;function hh(e){if(!e)return[[]];if(e==="/")return[[uh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=ve.Static,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,l,u="",f="";function c(){u&&(n===ve.Static?o.push({type:Gt.Static,value:u}):n===ve.Param||n===ve.ParamRegExp||n===ve.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Gt.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==ve.ParamRegExp){r=n,n=ve.EscapeNext;continue}switch(n){case ve.Static:l==="/"?(u&&c(),i()):l===":"?(c(),n=ve.Param):p();break;case ve.EscapeNext:p(),n=r;break;case ve.Param:l==="("?n=ve.ParamRegExp:dh.test(l)?p():(c(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ve.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=ve.ParamRegExpEnd:f+=l;break;case ve.ParamRegExpEnd:c(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),c(),i(),s}const Bi="[^/]+?",ph={sensitive:!1,strict:!1,start:!0,end:!0};var Re=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Re||{});const mh=/[.+*?^${}()[\]/\\]/g;function gh(e,t){const n=ne({},ph,t),r=[];let s=n.start?"^":"";const o=[];for(const u of e){const f=u.length?[]:[Re.Root];n.strict&&!u.length&&(s+="/");for(let c=0;c<u.length;c++){const p=u[c];let m=Re.Segment+(n.sensitive?Re.BonusCaseSensitive:0);if(p.type===Gt.Static)c||(s+="/"),s+=p.value.replace(mh,"\\$&"),m+=Re.Static;else if(p.type===Gt.Param){const{value:x,repeatable:C,optional:H,regexp:k}=p;o.push({name:x,repeatable:C,optional:H});const O=k||Bi;if(O!==Bi){m+=Re.BonusCustomRegExp;try{`${O}`}catch(N){throw new Error(`Invalid custom RegExp for param "${x}" (${O}): `+N.message)}}let z=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;c||(z=H&&u.length<2?`(?:/${z})`:"/"+z),H&&(z+="?"),s+=z,m+=Re.Dynamic,H&&(m+=Re.BonusOptional),C&&(m+=Re.BonusRepeatable),O===".*"&&(m+=Re.BonusWildcard)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Re.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(i),c={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",x=o[p-1];c[x.name]=m&&x.repeatable?m.split("/"):m}return c}function l(u){let f="",c=!1;for(const p of e){(!c||!f.endsWith("/"))&&(f+="/"),c=!1;for(const m of p)if(m.type===Gt.Static)f+=m.value;else if(m.type===Gt.Param){const{value:x,repeatable:C,optional:H}=m,k=x in u?u[x]:"";if(et(k)&&!C)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const O=et(k)?k.join("/"):k;if(!O)if(H)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):c=!0);else throw new Error(`Missing required param "${x}"`);f+=O}}return f||"/"}return{re:i,score:r,keys:o,parse:a,stringify:l}}function vh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Re.Static+Re.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Re.Static+Re.Segment?1:-1:0}function Jl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=vh(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(ji(r))return 1;if(ji(s))return-1}return s.length-r.length}function ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const bh={strict:!1,end:!0,sensitive:!1};function yh(e,t,n){const r=gh(hh(e.path),n),s=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function _h(e,t){const n=[],r=new Map;t=ki(bh,t);function s(c){return r.get(c)}function o(c,p,m){const x=!m,C=Hi(c);C.aliasOf=m&&m.record;const H=ki(t,c),k=[C];if("alias"in c){const N=typeof c.alias=="string"?[c.alias]:c.alias;for(const T of N)k.push(Hi(ne({},C,{components:m?m.record.components:C.components,path:T,aliasOf:m?m.record:C})))}let O,z;for(const N of k){const{path:T}=N;if(p&&T[0]!=="/"){const D=p.record.path,K=D[D.length-1]==="/"?"":"/";N.path=p.record.path+(T&&K+T)}if(O=yh(N,p,H),m?m.alias.push(O):(z=z||O,z!==O&&z.alias.push(O),x&&c.name&&!Ui(O)&&i(c.name)),Yl(O)&&l(O),C.children){const D=C.children;for(let K=0;K<D.length;K++)o(D[K],O,m&&m.children[K])}m=m||O}return z?()=>{i(z)}:nr}function i(c){if(ql(c)){const p=r.get(c);p&&(r.delete(c),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(c);p>-1&&(n.splice(p,1),c.record.name&&r.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return n}function l(c){const p=Eh(c,n);n.splice(p,0,c),c.record.name&&!Ui(c)&&r.set(c.record.name,c)}function u(c,p){let m,x={},C,H;if("name"in c&&c.name){if(m=r.get(c.name),!m)throw Ln(pe.MATCHER_NOT_FOUND,{location:c});H=m.record.name,x=ne(Fi(p.params,m.keys.filter(z=>!z.optional).concat(m.parent?m.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),c.params&&Fi(c.params,m.keys.map(z=>z.name))),C=m.stringify(x)}else if(c.path!=null)C=c.path,m=n.find(z=>z.re.test(C)),m&&(x=m.parse(C),H=m.record.name);else{if(m=p.name?r.get(p.name):n.find(z=>z.re.test(p.path)),!m)throw Ln(pe.MATCHER_NOT_FOUND,{location:c,currentLocation:p});H=m.record.name,x=ne({},p.params,c.params),C=m.stringify(x)}const k=[];let O=m;for(;O;)k.unshift(O.record),O=O.parent;return{name:H,path:C,params:x,matched:k,meta:wh(k)}}e.forEach(c=>o(c));function f(){n.length=0,r.clear()}return{addRoute:o,resolve:u,removeRoute:i,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Fi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Hi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:xh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function xh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ui(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function wh(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function Eh(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;Jl(e,t[o])<0?r=o:n=o+1}const s=Ah(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Ah(e){let t=e;for(;t=t.parent;)if(Yl(t)&&Jl(e,t)===0)return t}function Yl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Vi(e){const t=yt(Ro),n=yt(Kl),r=Ye(()=>{const l=gn(e.to);return t.resolve(l)}),s=Ye(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],c=n.matched;if(!f||!c.length)return-1;const p=c.findIndex(Dn.bind(null,f));if(p>-1)return p;const m=qi(l[u-2]);return u>1&&qi(f)===m&&c[c.length-1].path!==m?c.findIndex(Dn.bind(null,l[u-2])):p}),o=Ye(()=>s.value>-1&&Oh(n.params,r.value.params)),i=Ye(()=>s.value>-1&&s.value===n.matched.length-1&&Vl(n.params,r.value.params));function a(l={}){if(Rh(l)){const u=t[gn(e.replace)?"replace":"push"](gn(e.to)).catch(nr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ye(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function Ch(e){return e.length===1?e[0]:e}const Sh=Fa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Vi,setup(e,{slots:t}){const n=Xr(Vi(e)),{options:r}=yt(Ro),s=Ye(()=>({[Gi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Ch(t.default(n));return e.custom?o:bo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),$h=Sh;function Rh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Oh(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!et(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function qi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gi=(e,t,n)=>e??t??n,Th=Fa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=yt(Qs),s=Ye(()=>e.route||r.value),o=yt(Di,0),i=Ye(()=>{let u=gn(o);const{matched:f}=s.value;let c;for(;(c=f[u])&&!c.components;)u++;return u}),a=Ye(()=>s.value.matched[i.value]);Ar(Di,Ye(()=>i.value+1)),Ar(sh,a),Ar(Qs,s);const l=Mc();return Cr(()=>[l.value,a.value,e.name],([u,f,c],[p,m,x])=>{f&&(f.instances[c]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!Dn(f,m)||!p)&&(f.enterCallbacks[c]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,f=e.name,c=a.value,p=c&&c.components[f];if(!p)return Ki(n.default,{Component:p,route:u});const m=c.props[f],x=m?m===!0?u.params:typeof m=="function"?m(u):m:null,H=bo(p,ne({},x,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(c.instances[f]=null)},ref:l}));return Ki(n.default,{Component:H,route:u})||H}}});function Ki(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ph=Th;function kh(e){const t=_h(e.routes,e),n=e.parseQuery||nh,r=e.stringifyQuery||Mi,s=e.history,o=Gn(),i=Gn(),a=Gn(),l=Dc($t);let u=$t;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Cs.bind(null,y=>""+y),c=Cs.bind(null,Bd),p=Cs.bind(null,mr);function m(y,I){let R,L;return ql(y)?(R=t.getRecordMatcher(y),L=I):L=y,t.addRoute(L,R)}function x(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function C(){return t.getRoutes().map(y=>y.record)}function H(y){return!!t.getRecordMatcher(y)}function k(y,I){if(I=ne({},I||l.value),typeof y=="string"){const g=Ss(n,y,I.path),v=t.resolve({path:g.path},I),_=s.createHref(g.fullPath);return ne(g,v,{params:p(v.params),hash:mr(g.hash),redirectedFrom:void 0,href:_})}let R;if(y.path!=null)R=ne({},y,{path:Ss(n,y.path,I.path).path});else{const g=ne({},y.params);for(const v in g)g[v]==null&&delete g[v];R=ne({},y,{params:c(g)}),I.params=c(I.params)}const L=t.resolve(R,I),Q=y.hash||"";L.params=f(p(L.params));const d=Hd(r,ne({},y,{hash:Md(Q),path:L.path})),h=s.createHref(d);return ne({fullPath:d,hash:Q,query:r===Mi?rh(y.query):y.query||{}},L,{redirectedFrom:void 0,href:h})}function O(y){return typeof y=="string"?Ss(n,y,l.value.path):ne({},y)}function z(y,I){if(u!==y)return Ln(pe.NAVIGATION_CANCELLED,{from:I,to:y})}function N(y){return K(y)}function T(y){return N(ne(O(y),{replace:!0}))}function D(y,I){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:L}=R;let Q=typeof L=="function"?L(y,I):L;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=O(Q):{path:Q},Q.params={}),ne({query:y.query,hash:y.hash,params:Q.path!=null?{}:y.params},Q)}}function K(y,I){const R=u=k(y),L=l.value,Q=y.state,d=y.force,h=y.replace===!0,g=D(R,L);if(g)return K(ne(O(g),{state:typeof g=="object"?ne({},Q,g.state):Q,force:d,replace:h}),I||R);const v=R;v.redirectedFrom=I;let _;return!d&&Ud(r,L,R)&&(_=Ln(pe.NAVIGATION_DUPLICATED,{to:v,from:L}),nt(L,L,!0,!1)),(_?Promise.resolve(_):q(v,L)).catch(b=>ht(b)?ht(b,pe.NAVIGATION_GUARD_REDIRECT)?b:Ct(b):X(b,v,L)).then(b=>{if(b){if(ht(b,pe.NAVIGATION_GUARD_REDIRECT))return K(ne({replace:h},O(b.to),{state:typeof b.to=="object"?ne({},Q,b.to.state):Q,force:d}),I||v)}else b=S(v,L,!0,h,Q);return J(v,L,b),b})}function te(y,I){const R=z(y,I);return R?Promise.reject(R):Promise.resolve()}function M(y){const I=ln.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(y):y()}function q(y,I){let R;const[L,Q,d]=oh(y,I);R=Rs(L.reverse(),"beforeRouteLeave",y,I);for(const g of L)g.leaveGuards.forEach(v=>{R.push(Pt(v,y,I))});const h=te.bind(null,y,I);return R.push(h),He(R).then(()=>{R=[];for(const g of o.list())R.push(Pt(g,y,I));return R.push(h),He(R)}).then(()=>{R=Rs(Q,"beforeRouteUpdate",y,I);for(const g of Q)g.updateGuards.forEach(v=>{R.push(Pt(v,y,I))});return R.push(h),He(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(et(g.beforeEnter))for(const v of g.beforeEnter)R.push(Pt(v,y,I));else R.push(Pt(g.beforeEnter,y,I));return R.push(h),He(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=Rs(d,"beforeRouteEnter",y,I,M),R.push(h),He(R))).then(()=>{R=[];for(const g of i.list())R.push(Pt(g,y,I));return R.push(h),He(R)}).catch(g=>ht(g,pe.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function J(y,I,R){a.list().forEach(L=>M(()=>L(y,I,R)))}function S(y,I,R,L,Q){const d=z(y,I);if(d)return d;const h=I===$t,g=hn?history.state:{};R&&(L||h?s.replace(y.fullPath,ne({scroll:h&&g&&g.scroll},Q)):s.push(y.fullPath,Q)),l.value=y,nt(y,I,R,h),Ct()}let W;function ue(){W||(W=s.listen((y,I,R)=>{if(!Dt.listening)return;const L=k(y),Q=D(L,Dt.currentRoute.value);if(Q){K(ne(Q,{replace:!0,force:!0}),L).catch(nr);return}u=L;const d=l.value;hn&&Qd(zi(d.fullPath,R.delta),as()),q(L,d).catch(h=>ht(h,pe.NAVIGATION_ABORTED|pe.NAVIGATION_CANCELLED)?h:ht(h,pe.NAVIGATION_GUARD_REDIRECT)?(K(ne(O(h.to),{force:!0}),L).then(g=>{ht(g,pe.NAVIGATION_ABORTED|pe.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Js.pop&&s.go(-1,!1)}).catch(nr),Promise.reject()):(R.delta&&s.go(-R.delta,!1),X(h,L,d))).then(h=>{h=h||S(L,d,!1),h&&(R.delta&&!ht(h,pe.NAVIGATION_CANCELLED)?s.go(-R.delta,!1):R.type===Js.pop&&ht(h,pe.NAVIGATION_ABORTED|pe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),J(L,d,h)}).catch(nr)}))}let we=Gn(),ie=Gn(),Y;function X(y,I,R){Ct(y);const L=ie.list();return L.length?L.forEach(Q=>Q(y,I,R)):console.error(y),Promise.reject(y)}function ft(){return Y&&l.value!==$t?Promise.resolve():new Promise((y,I)=>{we.add([y,I])})}function Ct(y){return Y||(Y=!y,ue(),we.list().forEach(([I,R])=>y?R(y):I()),we.reset()),y}function nt(y,I,R,L){const{scrollBehavior:Q}=e;if(!hn||!Q)return Promise.resolve();const d=!R&&Zd(zi(y.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return kr().then(()=>Q(y,I,d)).then(h=>h&&Yd(h)).catch(h=>X(h,y,I))}const Te=y=>s.go(y);let an;const ln=new Set,Dt={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:H,getRoutes:C,resolve:k,options:e,push:N,replace:T,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:ie.add,isReady:ft,install(y){y.component("RouterLink",$h),y.component("RouterView",Ph),y.config.globalProperties.$router=Dt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(l)}),hn&&!an&&l.value===$t&&(an=!0,N(s.location).catch(L=>{}));const I={};for(const L in $t)Object.defineProperty(I,L,{get:()=>l.value[L],enumerable:!0});y.provide(Ro,Dt),y.provide(Kl,Ca(I)),y.provide(Qs,l);const R=y.unmount;ln.add(y),y.unmount=function(){ln.delete(y),ln.size<1&&(u=$t,W&&W(),W=null,l.value=$t,an=!1,Y=!1),R()}}};function He(y){return y.reduce((I,R)=>I.then(()=>M(R)),Promise.resolve())}return Dt}const Nh="/assets/Family-TJUrK4ZO.jpeg",Ih={name:"Home"},zh={class:"container-fluid mt-0 pt-0"},Mh={class:"row align-items-center justify-content-center",style:{"min-height":"calc(100vh - var(--site-nav-height, 56px))","background-color":"#f0f2f5",overflow:"hidden"}},Dh={class:"col-12 col-md-6 col-lg-5 ps-md-5 mt-4 mt-md-0"},Lh={class:"mt-4 hero-actions"},Bh=["onClick"],jh=["onClick"],Fh=["onClick"];function Hh(e,t,n,r,s,o){const i=Ds("router-link");return Ve(),un("div",zh,[he("div",Mh,[t[3]||(t[3]=he("div",{class:"col-12 col-md-6 col-lg-5 text-center"},[he("img",{src:Nh,class:"img-fluid rounded shadow",style:{"max-height":"calc(100vh - 120px)","object-fit":"contain"},alt:"Melissa with her wife and four kids"})],-1)),he("div",Dh,[t[0]||(t[0]=he("h1",{class:"hero-name"},"Melissa Freundschuh-Pula",-1)),t[1]||(t[1]=he("h4",{class:"hero-title mt-2"},"Full-Stack Software Engineer",-1)),t[2]||(t[2]=he("p",{class:"hero-intro mt-3",style:{color:"#2c3e50"}}," Six-plus years building enterprise web apps by day and live products on the side. Wife, mom of four, Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper. ",-1)),he("div",Lh,[me(i,{to:"/portfolio",custom:""},{default:bt(({navigate:a})=>[he("mfp-button",{variant:"primary",onClick:a},"See Projects",8,Bh)]),_:1}),me(i,{to:"/resume",custom:""},{default:bt(({navigate:a})=>[he("mfp-button",{variant:"secondary",onClick:a},"Resume",8,jh)]),_:1}),me(i,{to:"/contact",custom:""},{default:bt(({navigate:a})=>[he("mfp-button",{variant:"secondary",onClick:a},"Get In Touch",8,Fh)]),_:1})])])])])}const Uh=Dl(Ih,[["render",Hh],["__scopeId","data-v-d133ff9c"]]),Vh=[{path:"/",name:"Home",component:Uh,meta:{title:"Home"}},{path:"/about",name:"About",component:()=>Ut(()=>import("./about-v3HM_KLX.js"),__vite__mapDeps([0,1])),meta:{title:"About"}},{path:"/resume",name:"Resume",component:()=>Ut(()=>import("./resume-C0EgV8-5.js"),__vite__mapDeps([2,3])),meta:{title:"Resume"}},{path:"/portfolio",name:"Portfolio",component:()=>Ut(()=>import("./portfolio-Bu5CNV82.js"),__vite__mapDeps([4,5,6,7])),meta:{title:"Projects"}},{path:"/python",name:"PythonCode",component:()=>Ut(()=>import("./pythonCode-BLMB3L2a.js"),__vite__mapDeps([8,9,10,5,6,11])),meta:{title:"Python"}},{path:"/data",name:"DataAnalysis",component:()=>Ut(()=>import("./dataAnalysis-C1F87TIH.js"),__vite__mapDeps([12,9,10,5,6,13])),meta:{title:"Data Analysis"}},{path:"/contact",name:"Contact",component:()=>Ut(()=>import("./contact-D5REz2kz.js"),__vite__mapDeps([14,15])),meta:{title:"Contact"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Ut(()=>import("./notFound-yjzyaCi6.js"),__vite__mapDeps([16,17])),meta:{title:"Page Not Found"}}],Wi="Melissa Freundschuh-Pula",Oo=kh({history:fh(),routes:Vh});Oo.afterEach(e=>{var n;const t=(n=e.meta)==null?void 0:n.title;document.title=t?`${t} | ${Wi}`:Wi});const qh=(e,t={})=>new Promise((n,r)=>{if(typeof document>"u")return;const s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.defer=t.defer,t.preconnectOrigin){const i=document.createElement("link");i.href=t.preconnectOrigin,i.rel="preconnect",s.appendChild(i)}s.appendChild(o),o.onload=n,o.onerror=r}),Zs=e=>typeof e=="function",Os=e=>e&&typeof e=="object"&&!Array.isArray(e),Xs=(e,...t)=>{if(!t.length)return e;const n=t.shift();if(!(!Os(e)||!Os(n))){for(const r in n)Os(n[r])?(e[r]||Object.assign(e,{[r]:{}}),Xs(e[r],n[r])):Object.assign(e,{[r]:n[r]});return Xs(e,...t)}},ls=()=>!(typeof window>"u"||typeof document>"u"),Ji=(e,t=!0)=>{},Gh=(e={})=>(Ji('Missing "appName" property inside the plugin options.',e.app_name==null),Ji('Missing "name" property in the route.',e.screen_name==null),e);function Kh(e="",t=""){const n=e.split("/"),r=t.split("/");return n[0]===""&&t[t.length-1]==="/"&&n.shift(),r.join("/")+n.join("/")}const Wh=()=>({bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}});let Ql={};const Jh=(e={})=>{const t=Wh();Ql=Xs(t,e)},Fe=()=>Ql,rn=(...e)=>{const{globalObjectName:t}=Fe();!ls()||typeof window[t]>"u"||window[t](...e)},To=(...e)=>{const{config:t,includes:n}=Fe();if(rn("config",t.id,...e),Array.isArray(n))for(const r of n)rn("config",r.id,...e)},Yi=(e,t)=>{ls()&&(window[`ga-disable-${e}`]=t)},Zl=(e=!0)=>{const{config:t,includes:n}=Fe();if(Yi(t.id,e),Array.isArray(n))for(const r of n)Yi(r.id,e)},Xl=()=>{Zl(!0)},Yh=()=>{Zl(!1)},on=(e,t={})=>{const{includes:n,defaultGroupName:r}=Fe();t.send_to==null&&Array.isArray(n)&&n.length&&(t.send_to=n.map(s=>s.id).concat(r)),rn("event",e,t)};let ec;const Qh=e=>{ec=e},Po=()=>ec,tc=e=>{if(!ls())return;let t;if(typeof e=="string")t={page_path:e};else if(e.path||e.fullPath){const{pageTrackerUseFullPath:n,pageTrackerPrependBase:r}=Fe(),s=Po(),o=s==null?void 0:s.options.base,i=n?e.fullPath:e.path;t={...e.name&&{page_title:e.name},page_path:r?Kh(i,o):i}}else t=e;t.page_location==null&&(t.page_location=window.location.href),t.send_page_view==null&&(t.send_page_view=!0),on("page_view",t)},nc=e=>{const{appName:t}=Fe();if(!e)return;let n;typeof e=="string"?n={screen_name:e}:n=e,n.app_name=n.app_name||t,on("screen_view",n)},Zh=(...e)=>{on("exception",...e)},Xh=e=>{To("linker",e)},ep=e=>{on("timing_complete",e)},tp=(...e)=>{rn("set",...e)},np=(...e)=>{on("refund",...e)},rp=e=>{on("purchase",e)},sp=e=>{To({custom_map:e})},op=Object.freeze(Object.defineProperty({__proto__:null,config:To,customMap:sp,event:on,exception:Zh,linker:Xh,optIn:Yh,optOut:Xl,pageview:tc,purchase:rp,query:rn,refund:np,screenview:nc,set:tp,time:ep},Symbol.toStringTag,{value:"Module"})),ip=e=>{e.config.globalProperties.$gtag=op},Qi=e=>({send_page_view:!1,...e}),rc=()=>{const{config:e,includes:t}=Fe();if(rn("config",e.id,Qi(e.params)),Array.isArray(t))for(const n of t)rn("config",n.id,Qi(n.params))},Zi=(e={},t={})=>{const{appName:n,pageTrackerTemplate:r,pageTrackerScreenviewEnabled:s,pageTrackerSkipSamePath:o}=Fe();if(o&&e.path===t.path)return;let i=e;if(Zs(r)?i=r(e,t):s&&(i=Gh({app_name:n,screen_name:e.name})),s){nc(i);return}tc(i)},Xi=e=>{const{pageTrackerExcludedRoutes:t}=Fe();return t.includes(e.path)||t.includes(e.name)},ap=()=>{const{onBeforeTrack:e,onAfterTrack:t}=Fe(),n=Po();n.isReady().then(()=>{kr().then(()=>{const{currentRoute:r}=n;rc(),!Xi(r.value)&&Zi(r.value)}),n.afterEach((r,s)=>{kr().then(()=>{Xi(r)||(Zs(e)&&e(r,s),Zi(r,s),Zs(t)&&t(r,s))})})})},lp=()=>{if(!ls())return;const{enabled:e,globalObjectName:t,globalDataLayerName:n}=Fe();return window[t]==null&&(window[n]=window[n]||[],window[t]=function(){window[n].push(arguments)}),window[t]("js",new Date),e||Xl(),window[t]},cp=()=>{const{onReady:e,onError:t,globalObjectName:n,globalDataLayerName:r,config:s,customResourceURL:o,customPreconnectOrigin:i,deferScriptLoad:a,pageTrackerEnabled:l,disableScriptLoad:u}=Fe(),f=!!(l&&Po());if(lp(),f?ap():rc(),!u)return qh(`${o}?id=${s.id}&l=${r}`,{preconnectOrigin:i,defer:a}).then(()=>{e&&e(window[n])}).catch(c=>(t&&t(c),c))},fp=(e,t,n)=>{ip(e),Jh(t),Qh(n),Fe().bootstrap&&cp()};ud();const ko=ku(Ed);ko.use(Oo);ko.use(fp,{config:{id:"G-ZP2LCLVZ2X",params:{send_page_view:!1}}},Oo);ko.mount("#app");export{Ae as F,Dl as _,he as a,Gf as b,un as c,me as d,Uo as e,Va as f,qa as g,hp as h,vl as i,Mc as j,up as k,lr as l,ff as m,Qr as n,Ve as o,dp as p,mp as q,Ds as r,Er as t,pp as v,bt as w};

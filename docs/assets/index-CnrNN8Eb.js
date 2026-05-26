const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-CH8nEv83.js","assets/about-BdgtuSV_.css","assets/resume-c_3znO3k.js","assets/resume-BCGVtwTf.css","assets/portfolio-CBPuCuyy.js","assets/portfolio-CPN2TqFT.css","assets/pythonCode-BixTgXPH.js","assets/CodeBlock-DfhVjK0m.js","assets/CodeBlock-fWrA0MWl.css","assets/pythonCode-C7dhrRAO.css","assets/dataAnalysis--1liZzSb.js","assets/dataAnalysis-DPHuvlJp.css","assets/contact-Cqn3yiDR.js","assets/contact-CklT2K0j.css","assets/notFound-CJdFK4nN.js","assets/notFound-B5RUNLfv.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eo(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},hn=[],ct=()=>{},Xi=()=>!1,Gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),to=e=>e.startsWith("onUpdate:"),be=Object.assign,no=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ec=Object.prototype.hasOwnProperty,re=(e,t)=>ec.call(e,t),U=Array.isArray,pn=e=>Wr(e)==="[object Map]",ea=e=>Wr(e)==="[object Set]",V=e=>typeof e=="function",pe=e=>typeof e=="string",Mt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",ta=e=>(fe(e)||V(e))&&V(e.then)&&V(e.catch),na=Object.prototype.toString,Wr=e=>na.call(e),tc=e=>Wr(e).slice(8,-1),ra=e=>Wr(e)==="[object Object]",ro=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gn=eo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},nc=/-\w/g,Ve=qr(e=>e.replace(nc,t=>t.slice(1).toUpperCase())),rc=/\B([A-Z])/g,zt=qr(e=>e.replace(rc,"-$1").toLowerCase()),Kr=qr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ls=qr(e=>e?`on${Kr(e)}`:""),Nt=(e,t)=>!Object.is(e,t),cs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},sa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},sc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},oa=e=>{const t=pe(e)?Number(e):NaN;return isNaN(t)?e:t};let zo;const Yr=()=>zo||(zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function so(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=pe(r)?lc(r):so(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(pe(e)||fe(e))return e}const oc=/;(?![^(]*\))/g,ic=/:([^]+)/,ac=/\/\*[^]*?\*\//g;function lc(e){const t={};return e.replace(ac,"").split(oc).forEach(n=>{if(n){const r=n.split(ic);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Jr(e){let t="";if(pe(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=Jr(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fc=eo(cc);function ia(e){return!!e||e===""}const aa=e=>!!(e&&e.__v_isRef===!0),wr=e=>pe(e)?e:e==null?"":U(e)||fe(e)&&(e.toString===na||!V(e.toString))?aa(e)?wr(e.value):JSON.stringify(e,la,2):String(e),la=(e,t)=>aa(t)?la(e,t.value):pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[fs(r,o)+" =>"]=s,n),{})}:ea(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fs(n))}:Mt(t)?fs(t):fe(t)&&!U(t)&&!ra(t)?String(t):t,fs=(e,t="")=>{var n;return Mt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class uc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dc(){return Ne}let ce;const us=new WeakSet;class ca{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,us.has(this)&&(us.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ua(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Do(this),da(this);const t=ce,n=Je;ce=this,Je=!0;try{return this.fn()}finally{ha(this),ce=t,Je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ao(t);this.deps=this.depsTail=void 0,Do(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?us.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Os(this)&&this.run()}get dirty(){return Os(this)}}let fa=0,Wn,qn;function ua(e,t=!1){if(e.flags|=8,t){e.next=qn,qn=e;return}e.next=Wn,Wn=e}function oo(){fa++}function io(){if(--fa>0)return;if(qn){let t=qn;for(qn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Wn;){let t=Wn;for(Wn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function da(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ha(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ao(r),hc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Os(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function pa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===tr)||(e.globalVersion=tr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Os(e))))return;e.flags|=2;const t=e.dep,n=ce,r=Je;ce=e,Je=!0;try{da(e);const s=e.fn(e._value);(t.version===0||Nt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ce=n,Je=r,ha(e),e.flags&=-3}}function ao(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)ao(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function hc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Je=!0;const ma=[];function _t(){ma.push(Je),Je=!1}function xt(){const e=ma.pop();Je=e===void 0?!0:e}function Do(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let tr=0;class pc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!Je||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new pc(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,ga(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(t){this.version++,tr++,this.notify(t)}notify(t){oo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{io()}}}function ga(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ga(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ts=new WeakMap,qt=Symbol(""),Ps=Symbol(""),nr=Symbol("");function we(e,t,n){if(Je&&ce){let r=Ts.get(e);r||Ts.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new lo),s.map=r,s.key=n),s.track()}}function gt(e,t,n,r,s,o){const i=Ts.get(e);if(!i){tr++;return}const a=l=>{l&&l.trigger()};if(oo(),t==="clear")i.forEach(a);else{const l=U(e),u=l&&ro(n);if(l&&n==="length"){const f=Number(r);i.forEach((c,p)=>{(p==="length"||p===nr||!Mt(p)&&p>=f)&&a(c)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(nr)),t){case"add":l?u&&a(i.get("length")):(a(i.get(qt)),pn(e)&&a(i.get(Ps)));break;case"delete":l||(a(i.get(qt)),pn(e)&&a(i.get(Ps)));break;case"set":pn(e)&&a(i.get(qt));break}}io()}function ln(e){const t=ee(e);return t===e?t:(we(t,"iterate",nr),Ue(e)?t:t.map(Qe))}function Qr(e){return we(e=ee(e),"iterate",nr),e}function $t(e,t){return wt(e)?On(Kt(e)?Qe(t):t):Qe(t)}const mc={__proto__:null,[Symbol.iterator](){return ds(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return ln(this).concat(...e.map(t=>U(t)?ln(t):t))},entries(){return ds(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(r=>$t(this,r)),arguments)},find(e,t){return ut(this,"find",e,t,n=>$t(this,n),arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,n=>$t(this,n),arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return hs(this,"includes",e)},indexOf(...e){return hs(this,"indexOf",e)},join(e){return ln(this).join(e)},lastIndexOf(...e){return hs(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return Bn(this,"pop")},push(...e){return Bn(this,"push",e)},reduce(e,...t){return Lo(this,"reduce",e,t)},reduceRight(e,...t){return Lo(this,"reduceRight",e,t)},shift(){return Bn(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return Bn(this,"splice",e)},toReversed(){return ln(this).toReversed()},toSorted(e){return ln(this).toSorted(e)},toSpliced(...e){return ln(this).toSpliced(...e)},unshift(...e){return Bn(this,"unshift",e)},values(){return ds(this,"values",e=>$t(this,e))}};function ds(e,t,n){const r=Qr(e),s=r[t]();return r!==e&&!Ue(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const gc=Array.prototype;function ut(e,t,n,r,s,o){const i=Qr(e),a=i!==e&&!Ue(e),l=i[t];if(l!==gc[t]){const c=l.apply(e,o);return a?Qe(c):c}let u=n;i!==e&&(a?u=function(c,p){return n.call(this,$t(e,c),p,e)}:n.length>2&&(u=function(c,p){return n.call(this,c,p,e)}));const f=l.call(i,u,r);return a&&s?s(f):f}function Lo(e,t,n,r){const s=Qr(e);let o=n;return s!==e&&(Ue(e)?n.length>3&&(o=function(i,a,l){return n.call(this,i,a,l,e)}):o=function(i,a,l){return n.call(this,i,$t(e,a),l,e)}),s[t](o,...r)}function hs(e,t,n){const r=ee(e);we(r,"iterate",nr);const s=r[t](...n);return(s===-1||s===!1)&&uo(n[0])?(n[0]=ee(n[0]),r[t](...n)):s}function Bn(e,t,n=[]){_t(),oo();const r=ee(e)[t].apply(e,n);return io(),xt(),r}const vc=eo("__proto__,__v_isRef,__isVue"),va=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mt));function bc(e){Mt(e)||(e=String(e));const t=ee(this);return we(t,"has",e),t.hasOwnProperty(e)}class ba{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Rc:wa:o?xa:_a).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=U(t);if(!s){let l;if(i&&(l=mc[n]))return l;if(n==="hasOwnProperty")return bc}const a=Reflect.get(t,n,Ae(t)?t:r);if((Mt(n)?va.has(n):vc(n))||(s||we(t,"get",n),o))return a;if(Ae(a)){const l=i&&ro(n)?a:a.value;return s&&fe(l)?Is(l):l}return fe(a)?s?Is(a):Zr(a):a}}class ya extends ba{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];const i=U(t)&&ro(n);if(!this._isShallow){const u=wt(o);if(!Ue(r)&&!wt(r)&&(o=ee(o),r=ee(r)),!i&&Ae(o)&&!Ae(r))return u||(o.value=r),!0}const a=i?Number(n)<t.length:re(t,n),l=Reflect.set(t,n,r,Ae(t)?t:s);return t===ee(s)&&(a?Nt(r,o)&&gt(t,"set",n,r):gt(t,"add",n,r)),l}deleteProperty(t,n){const r=re(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&gt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Mt(n)||!va.has(n))&&we(t,"has",n),r}ownKeys(t){return we(t,"iterate",U(t)?"length":qt),Reflect.ownKeys(t)}}class yc extends ba{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const _c=new ya,xc=new yc,wc=new ya(!0);const Ns=e=>e,br=e=>Reflect.getPrototypeOf(e);function Ec(e,t,n){return function(...r){const s=this.__v_raw,o=ee(s),i=pn(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=s[e](...r),f=n?Ns:t?On:Qe;return!t&&we(o,"iterate",l?Ps:qt),be(Object.create(u),{next(){const{value:c,done:p}=u.next();return p?{value:c,done:p}:{value:a?[f(c[0]),f(c[1])]:f(c),done:p}}})}}function yr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ac(e,t){const n={get(s){const o=this.__v_raw,i=ee(o),a=ee(s);e||(Nt(s,a)&&we(i,"get",s),we(i,"get",a));const{has:l}=br(i),u=t?Ns:e?On:Qe;if(l.call(i,s))return u(o.get(s));if(l.call(i,a))return u(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&we(ee(s),"iterate",qt),s.size},has(s){const o=this.__v_raw,i=ee(o),a=ee(s);return e||(Nt(s,a)&&we(i,"has",s),we(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=ee(a),u=t?Ns:e?On:Qe;return!e&&we(l,"iterate",qt),a.forEach((f,c)=>s.call(o,u(f),u(c),i))}};return be(n,e?{add:yr("add"),set:yr("set"),delete:yr("delete"),clear:yr("clear")}:{add(s){!t&&!Ue(s)&&!wt(s)&&(s=ee(s));const o=ee(this);return br(o).has.call(o,s)||(o.add(s),gt(o,"add",s,s)),this},set(s,o){!t&&!Ue(o)&&!wt(o)&&(o=ee(o));const i=ee(this),{has:a,get:l}=br(i);let u=a.call(i,s);u||(s=ee(s),u=a.call(i,s));const f=l.call(i,s);return i.set(s,o),u?Nt(o,f)&&gt(i,"set",s,o):gt(i,"add",s,o),this},delete(s){const o=ee(this),{has:i,get:a}=br(o);let l=i.call(o,s);l||(s=ee(s),l=i.call(o,s)),a&&a.call(o,s);const u=o.delete(s);return l&&gt(o,"delete",s,void 0),u},clear(){const s=ee(this),o=s.size!==0,i=s.clear();return o&&gt(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ec(s,e,t)}),n}function co(e,t){const n=Ac(e,t);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,o)}const Cc={get:co(!1,!1)},Sc={get:co(!1,!0)},$c={get:co(!0,!1)};const _a=new WeakMap,xa=new WeakMap,wa=new WeakMap,Rc=new WeakMap;function Oc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tc(e){return e.__v_skip||!Object.isExtensible(e)?0:Oc(tc(e))}function Zr(e){return wt(e)?e:fo(e,!1,_c,Cc,_a)}function Ea(e){return fo(e,!1,wc,Sc,xa)}function Is(e){return fo(e,!0,xc,$c,wa)}function fo(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Tc(e);if(o===0)return e;const i=s.get(e);if(i)return i;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Kt(e){return wt(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function wt(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function uo(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Pc(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&sa(e,"__v_skip",!0),e}const Qe=e=>fe(e)?Zr(e):e,On=e=>fe(e)?Is(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function Nc(e){return Aa(e,!1)}function Ic(e){return Aa(e,!0)}function Aa(e,t){return Ae(e)?e:new kc(e,t)}class kc{constructor(t,n){this.dep=new lo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ee(t),this._value=n?t:Qe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ue(t)||wt(t);t=r?t:ee(t),Nt(t,n)&&(this._rawValue=t,this._value=r?t:Qe(t),this.dep.trigger())}}function mn(e){return Ae(e)?e.value:e}const Mc={get:(e,t,n)=>t==="__v_raw"?e:mn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ae(s)&&!Ae(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ca(e){return Kt(e)?e:new Proxy(e,Mc)}class zc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new lo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return ua(this,!0),!0}get value(){const t=this.dep.track();return pa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Dc(e,t,n=!1){let r,s;return V(e)?r=e:(r=e.get,s=e.set),new zc(r,s,n)}const _r={},Or=new WeakMap;let Vt;function Lc(e,t=!1,n=Vt){if(n){let r=Or.get(n);r||Or.set(n,r=[]),r.push(e)}}function Bc(e,t,n=ae){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=n,u=I=>s?I:Ue(I)||s===!1||s===0?vt(I,1):vt(I);let f,c,p,m,x=!1,C=!1;if(Ae(e)?(c=()=>e.value,x=Ue(e)):Kt(e)?(c=()=>u(e),x=!0):U(e)?(C=!0,x=e.some(I=>Kt(I)||Ue(I)),c=()=>e.map(I=>{if(Ae(I))return I.value;if(Kt(I))return u(I);if(V(I))return l?l(I,2):I()})):V(e)?t?c=l?()=>l(e,2):e:c=()=>{if(p){_t();try{p()}finally{xt()}}const I=Vt;Vt=f;try{return l?l(e,3,[m]):e(m)}finally{Vt=I}}:c=ct,t&&s){const I=c,T=s===!0?1/0:s;c=()=>vt(I(),T)}const H=dc(),N=()=>{f.stop(),H&&H.active&&no(H.effects,f)};if(o&&t){const I=t;t=(...T)=>{I(...T),N()}}let O=C?new Array(e.length).fill(_r):_r;const M=I=>{if(!(!(f.flags&1)||!f.dirty&&!I))if(t){const T=f.run();if(s||x||(C?T.some((D,q)=>Nt(D,O[q])):Nt(T,O))){p&&p();const D=Vt;Vt=f;try{const q=[T,O===_r?void 0:C&&O[0]===_r?[]:O,m];O=T,l?l(t,3,q):t(...q)}finally{Vt=D}}}else f.run()};return a&&a(M),f=new ca(c),f.scheduler=i?()=>i(M,!1):M,m=I=>Lc(I,!1,f),p=f.onStop=()=>{const I=Or.get(f);if(I){if(l)l(I,4);else for(const T of I)T();Or.delete(f)}},t?r?M(!0):O=f.run():i?i(M.bind(null,!0),!0):f.run(),N.pause=f.pause.bind(f),N.resume=f.resume.bind(f),N.stop=N,N}function vt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ae(e))vt(e.value,t,n);else if(U(e))for(let r=0;r<e.length;r++)vt(e[r],t,n);else if(ea(e)||pn(e))e.forEach(r=>{vt(r,t,n)});else if(ra(e)){for(const r in e)vt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&vt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(e,t,n,r){try{return r?e(...r):e()}catch(s){gr(s,t,n)}}function Ze(e,t,n,r){if(V(e)){const s=mr(e,t,n,r);return s&&ta(s)&&s.catch(o=>{gr(o,t,n)}),s}if(U(e)){const s=[];for(let o=0;o<e.length;o++)s.push(Ze(e[o],t,n,r));return s}}function gr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ae;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,l,u)===!1)return}a=a.parent}if(o){_t(),mr(o,null,10,[e,l,u]),xt();return}}jc(e,n,s,r,i)}function jc(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const $e=[];let it=-1;const gn=[];let Rt=null,cn=0;const Sa=Promise.resolve();let Tr=null;function Pr(e){const t=Tr||Sa;return e?t.then(this?e.bind(this):e):t}function Fc(e){let t=it+1,n=$e.length;for(;t<n;){const r=t+n>>>1,s=$e[r],o=rr(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function ho(e){if(!(e.flags&1)){const t=rr(e),n=$e[$e.length-1];!n||!(e.flags&2)&&t>=rr(n)?$e.push(e):$e.splice(Fc(t),0,e),e.flags|=1,$a()}}function $a(){Tr||(Tr=Sa.then(Oa))}function ks(e){U(e)?gn.push(...e):Rt&&e.id===-1?Rt.splice(cn+1,0,e):e.flags&1||(gn.push(e),e.flags|=1),$a()}function Bo(e,t,n=it+1){for(;n<$e.length;n++){const r=$e[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;$e.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ra(e){if(gn.length){const t=[...new Set(gn)].sort((n,r)=>rr(n)-rr(r));if(gn.length=0,Rt){Rt.push(...t);return}for(Rt=t,cn=0;cn<Rt.length;cn++){const n=Rt[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,cn=0}}const rr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Oa(e){try{for(it=0;it<$e.length;it++){const t=$e[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;it<$e.length;it++){const t=$e[it];t&&(t.flags&=-2)}it=-1,$e.length=0,Ra(),Tr=null,($e.length||gn.length)&&Oa()}}let ze=null,Ta=null;function Nr(e){const t=ze;return ze=e,Ta=e&&e.type.__scopeId||null,t}function bt(e,t=ze,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Mr(-1);const o=Nr(t);let i;try{i=e(...s)}finally{Nr(o),r._d&&Mr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function ip(e,t){if(ze===null)return e;const n=rs(ze),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,a,l=ae]=t[s];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&vt(i),r.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function Lt(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(_t(),Ze(l,n,8,[e.el,a,e,t]),xt())}}function Er(e,t){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[e]=t}}function yt(e,t,n=!1){const r=ml();if(r||vn){let s=vn?vn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}const Hc=Symbol.for("v-scx"),Uc=()=>yt(Hc);function Ar(e,t,n){return Pa(e,t,n)}function Pa(e,t,n=ae){const{immediate:r,deep:s,flush:o,once:i}=n,a=be({},n),l=t&&r||!t&&o!=="post";let u;if(ar){if(o==="sync"){const m=Uc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=ct,m.resume=ct,m.pause=ct,m}}const f=Ee;a.call=(m,x,C)=>Ze(m,f,x,C);let c=!1;o==="post"?a.scheduler=m=>{Pe(m,f&&f.suspense)}:o!=="sync"&&(c=!0,a.scheduler=(m,x)=>{x?m():ho(m)}),a.augmentJob=m=>{t&&(m.flags|=4),c&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const p=Bc(e,t,a);return ar&&(u?u.push(p):l&&p()),p}function Vc(e,t,n){const r=this.proxy,s=pe(e)?e.includes(".")?Na(r,e):()=>r[e]:e.bind(r,r);let o;V(t)?o=t:(o=t.handler,n=t);const i=vr(this),a=Pa(s,o.bind(r),n);return i(),a}function Na(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gc=Symbol("_vte"),Ia=e=>e.__isTeleport,mt=Symbol("_leaveCb"),xr=Symbol("_enterCb");function Wc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ha(()=>{e.isMounted=!0}),Ua(()=>{e.isUnmounting=!0}),e}const He=[Function,Array],ka={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},Ma=e=>{const t=e.subTree;return t.component?Ma(t.component):t},qc={name:"BaseTransition",props:ka,setup(e,{slots:t}){const n=ml(),r=Wc();return()=>{const s=t.default&&La(t.default(),!0);if(!s||!s.length)return;const o=za(s),i=ee(e),{mode:a}=i;if(r.isLeaving)return ps(o);const l=jo(o);if(!l)return ps(o);let u=Ms(l,i,r,n,c=>u=c);l.type!==ye&&sr(l,u);let f=n.subTree&&jo(n.subTree);if(f&&f.type!==ye&&!lt(f,l)&&Ma(n).type!==ye){let c=Ms(f,i,r,n);if(sr(f,c),a==="out-in"&&l.type!==ye)return r.isLeaving=!0,c.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave,f=void 0},ps(o);a==="in-out"&&l.type!==ye?c.delayLeave=(p,m,x)=>{const C=Da(r,f);C[String(f.key)]=f,p[mt]=()=>{m(),p[mt]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{x(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return o}}};function za(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ye){t=n;break}}return t}const Kc=qc;function Da(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ms(e,t,n,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:p,onLeave:m,onAfterLeave:x,onLeaveCancelled:C,onBeforeAppear:H,onAppear:N,onAfterAppear:O,onAppearCancelled:M}=t,I=String(e.key),T=Da(n,e),D=(z,G)=>{z&&Ze(z,r,9,G)},q=(z,G)=>{const Y=G[1];D(z,G),U(z)?z.every(S=>S.length<=1)&&Y():z.length<=1&&Y()},te={mode:i,persisted:a,beforeEnter(z){let G=l;if(!n.isMounted)if(o)G=H||l;else return;z[mt]&&z[mt](!0);const Y=T[I];Y&&lt(e,Y)&&Y.el[mt]&&Y.el[mt](),D(G,[z])},enter(z){let G=u,Y=f,S=c;if(!n.isMounted)if(o)G=N||u,Y=O||f,S=M||c;else return;let K=!1;const ue=z[xr]=xe=>{K||(K=!0,xe?D(S,[z]):D(Y,[z]),te.delayedLeave&&te.delayedLeave(),z[xr]=void 0)};G?q(G,[z,ue]):ue()},leave(z,G){const Y=String(e.key);if(z[xr]&&z[xr](!0),n.isUnmounting)return G();D(p,[z]);let S=!1;const K=z[mt]=ue=>{S||(S=!0,G(),ue?D(C,[z]):D(x,[z]),z[mt]=void 0,T[Y]===e&&delete T[Y])};T[Y]=e,m?q(m,[z,K]):K()},clone(z){const G=Ms(z,t,n,r,s);return s&&s(G),G}};return te}function ps(e){if(Xr(e))return e=kt(e),e.children=null,e}function jo(e){if(!Xr(e))return Ia(e.type)&&e.children?za(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function sr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,sr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function La(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Me?(i.patchFlag&128&&s++,r=r.concat(La(i.children,t,a))):(t||i.type!==ye)&&r.push(a!=null?kt(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Ba(e,t){return V(e)?be({name:e.name},t,{setup:e}):e}function ja(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ir=new WeakMap;function Kn(e,t,n,r,s=!1){if(U(e)){e.forEach((x,C)=>Kn(x,t&&(U(t)?t[C]:t),n,r,s));return}if(Yn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Kn(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?rs(r.component):r.el,i=s?null:o,{i:a,r:l}=e,u=t&&t.r,f=a.refs===ae?a.refs={}:a.refs,c=a.setupState,p=ee(c),m=c===ae?Xi:x=>re(p,x);if(u!=null&&u!==l){if(Fo(t),pe(u))f[u]=null,m(u)&&(c[u]=null);else if(Ae(u)){u.value=null;const x=t;x.k&&(f[x.k]=null)}}if(V(l))mr(l,a,12,[i,f]);else{const x=pe(l),C=Ae(l);if(x||C){const H=()=>{if(e.f){const N=x?m(l)?c[l]:f[l]:l.value;if(s)U(N)&&no(N,o);else if(U(N))N.includes(o)||N.push(o);else if(x)f[l]=[o],m(l)&&(c[l]=f[l]);else{const O=[o];l.value=O,e.k&&(f[e.k]=O)}}else x?(f[l]=i,m(l)&&(c[l]=i)):C&&(l.value=i,e.k&&(f[e.k]=i))};if(i){const N=()=>{H(),Ir.delete(e)};N.id=-1,Ir.set(e,N),Pe(N,n)}else Fo(e),H()}}}function Fo(e){const t=Ir.get(e);t&&(t.flags|=8,Ir.delete(e))}Yr().requestIdleCallback;Yr().cancelIdleCallback;const Yn=e=>!!e.type.__asyncLoader,Xr=e=>e.type.__isKeepAlive;function Yc(e,t){Fa(e,"a",t)}function Jc(e,t){Fa(e,"da",t)}function Fa(e,t,n=Ee){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(es(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Xr(s.parent.vnode)&&Qc(r,t,n,s),s=s.parent}}function Qc(e,t,n,r){const s=es(t,e,r,!0);Va(()=>{no(r[t],s)},n)}function es(e,t,n=Ee,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{_t();const a=vr(n),l=Ze(t,n,e,i);return a(),xt(),l});return r?s.unshift(o):s.push(o),o}}const Et=e=>(t,n=Ee)=>{(!ar||e==="sp")&&es(e,(...r)=>t(...r),n)},Zc=Et("bm"),Ha=Et("m"),Xc=Et("bu"),ef=Et("u"),Ua=Et("bum"),Va=Et("um"),tf=Et("sp"),nf=Et("rtg"),rf=Et("rtc");function sf(e,t=Ee){es("ec",e,t)}const Ga="components";function zs(e,t){return qa(Ga,e,!0,t)||e}const Wa=Symbol.for("v-ndc");function of(e){return pe(e)?qa(Ga,e,!1)||e:e||Wa}function qa(e,t,n=!0,r=!1){const s=ze||Ee;if(s){const o=s.type;{const a=Qf(o,!1);if(a&&(a===t||a===Ve(t)||a===Kr(Ve(t))))return o}const i=Ho(s[e]||o[e],t)||Ho(s.appContext[e],t);return!i&&r?o:i}}function Ho(e,t){return e&&(e[t]||e[Ve(t)]||e[Kr(Ve(t))])}function Uo(e,t,n,r){let s;const o=n,i=U(e);if(i||pe(e)){const a=i&&Kt(e);let l=!1,u=!1;a&&(l=!Ue(e),u=wt(e),e=Qr(e)),s=new Array(e.length);for(let f=0,c=e.length;f<c;f++)s[f]=t(l?u?On(Qe(e[f])):Qe(e[f]):e[f],f,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const f=a[l];s[l]=t(e[f],f,l,o)}}else s=[];return s}const Ds=e=>e?gl(e)?rs(e):Ds(e.parent):null,Jn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ds(e.parent),$root:e=>Ds(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ya(e),$forceUpdate:e=>e.f||(e.f=()=>{ho(e.update)}),$nextTick:e=>e.n||(e.n=Pr.bind(e.proxy)),$watch:e=>Vc.bind(e)}),ms=(e,t)=>e!==ae&&!e.__isScriptSetup&&re(e,t),af={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(ms(r,t))return i[t]=1,r[t];if(s!==ae&&re(s,t))return i[t]=2,s[t];if(re(o,t))return i[t]=3,o[t];if(n!==ae&&re(n,t))return i[t]=4,n[t];Ls&&(i[t]=0)}}const u=Jn[t];let f,c;if(u)return t==="$attrs"&&we(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ae&&re(n,t))return i[t]=4,n[t];if(c=l.config.globalProperties,re(c,t))return c[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return ms(s,t)?(s[t]=n,!0):r!==ae&&re(r,t)?(r[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:i}},a){let l;return!!(n[a]||e!==ae&&a[0]!=="$"&&re(e,a)||ms(t,a)||re(o,a)||re(r,a)||re(Jn,a)||re(s.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Vo(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ls=!0;function lf(e){const t=Ya(e),n=e.proxy,r=e.ctx;Ls=!1,t.beforeCreate&&Go(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:u,created:f,beforeMount:c,mounted:p,beforeUpdate:m,updated:x,activated:C,deactivated:H,beforeDestroy:N,beforeUnmount:O,destroyed:M,unmounted:I,render:T,renderTracked:D,renderTriggered:q,errorCaptured:te,serverPrefetch:z,expose:G,inheritAttrs:Y,components:S,directives:K,filters:ue}=t;if(u&&cf(u,r,null),i)for(const J in i){const X=i[J];V(X)&&(r[J]=X.bind(n))}if(s){const J=s.call(n,n);fe(J)&&(e.data=Zr(J))}if(Ls=!0,o)for(const J in o){const X=o[J],ft=V(X)?X.bind(n,n):V(X.get)?X.get.bind(n,n):ct,At=!V(X)&&V(X.set)?X.set.bind(n):ct,tt=Ye({get:ft,set:At});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Re=>tt.value=Re})}if(a)for(const J in a)Ka(a[J],r,n,J);if(l){const J=V(l)?l.call(n):l;Reflect.ownKeys(J).forEach(X=>{Er(X,J[X])})}f&&Go(f,e,"c");function ie(J,X){U(X)?X.forEach(ft=>J(ft.bind(n))):X&&J(X.bind(n))}if(ie(Zc,c),ie(Ha,p),ie(Xc,m),ie(ef,x),ie(Yc,C),ie(Jc,H),ie(sf,te),ie(rf,D),ie(nf,q),ie(Ua,O),ie(Va,I),ie(tf,z),U(G))if(G.length){const J=e.exposed||(e.exposed={});G.forEach(X=>{Object.defineProperty(J,X,{get:()=>n[X],set:ft=>n[X]=ft,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===ct&&(e.render=T),Y!=null&&(e.inheritAttrs=Y),S&&(e.components=S),K&&(e.directives=K),z&&ja(e)}function cf(e,t,n=ct){U(e)&&(e=Bs(e));for(const r in e){const s=e[r];let o;fe(s)?"default"in s?o=yt(s.from||r,s.default,!0):o=yt(s.from||r):o=yt(s),Ae(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function Go(e,t,n){Ze(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ka(e,t,n,r){let s=r.includes(".")?Na(n,r):()=>n[r];if(pe(e)){const o=t[e];V(o)&&Ar(s,o)}else if(V(e))Ar(s,e.bind(n));else if(fe(e))if(U(e))e.forEach(o=>Ka(o,t,n,r));else{const o=V(e.handler)?e.handler.bind(n):t[e.handler];V(o)&&Ar(s,o,e)}}function Ya(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(u=>kr(l,u,i,!0)),kr(l,t,i)),fe(t)&&o.set(t,l),l}function kr(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&kr(e,o,n,!0),s&&s.forEach(i=>kr(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=ff[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const ff={data:Wo,props:qo,emits:qo,methods:Vn,computed:Vn,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Vn,directives:Vn,watch:df,provide:Wo,inject:uf};function Wo(e,t){return t?e?function(){return be(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function uf(e,t){return Vn(Bs(e),Bs(t))}function Bs(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Vn(e,t){return e?be(Object.create(null),e,t):t}function qo(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:be(Object.create(null),Vo(e),Vo(t??{})):t}function df(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=Ce(e[r],t[r]);return n}function Ja(){return{app:null,config:{isNativeTag:Xi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hf=0;function pf(e,t){return function(r,s=null){V(r)||(r=be({},r)),s!=null&&!fe(s)&&(s=null);const o=Ja(),i=new WeakSet,a=[];let l=!1;const u=o.app={_uid:hf++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Xf,get config(){return o.config},set config(f){},use(f,...c){return i.has(f)||(f&&V(f.install)?(i.add(f),f.install(u,...c)):V(f)&&(i.add(f),f(u,...c))),u},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),u},component(f,c){return c?(o.components[f]=c,u):o.components[f]},directive(f,c){return c?(o.directives[f]=c,u):o.directives[f]},mount(f,c,p){if(!l){const m=u._ceVNode||ge(r,s);return m.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),e(m,f,p),l=!0,u._container=f,f.__vue_app__=u,rs(m.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Ze(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(f,c){return o.provides[f]=c,u},runWithContext(f){const c=vn;vn=u;try{return f()}finally{vn=c}}};return u}}let vn=null;const mf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${zt(t)}Modifiers`];function gf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let s=n;const o=t.startsWith("update:"),i=o&&mf(r,t.slice(7));i&&(i.trim&&(s=n.map(f=>pe(f)?f.trim():f)),i.number&&(s=n.map(sc)));let a,l=r[a=ls(t)]||r[a=ls(Ve(t))];!l&&o&&(l=r[a=ls(zt(t))]),l&&Ze(l,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ze(u,e,6,s)}}const vf=new WeakMap;function Qa(e,t,n=!1){const r=n?vf:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!V(e)){const l=u=>{const f=Qa(u,t,!0);f&&(a=!0,be(i,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(fe(e)&&r.set(e,null),null):(U(o)?o.forEach(l=>i[l]=null):be(i,o),fe(e)&&r.set(e,i),i)}function ts(e,t){return!e||!Gr(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,zt(t))||re(e,t))}function Ko(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:u,renderCache:f,props:c,data:p,setupState:m,ctx:x,inheritAttrs:C}=e,H=Nr(e);let N,O;try{if(n.shapeFlag&4){const I=s||r,T=I;N=Ke(u.call(T,I,f,c,m,p,x)),O=a}else{const I=t;N=Ke(I.length>1?I(c,{attrs:a,slots:i,emit:l}):I(c,null)),O=t.props?a:yf(a)}}catch(I){Qn.length=0,gr(I,e,1),N=ge(ye)}let M=N;if(O&&C!==!1){const I=Object.keys(O),{shapeFlag:T}=M;I.length&&T&7&&(o&&I.some(to)&&(O=_f(O,o)),M=kt(M,O,!1,!0))}return n.dirs&&(M=kt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&sr(M,n.transition),N=M,Nr(H),N}function bf(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(ir(s)){if(s.type!==ye||s.children==="v-if"){if(n)return;n=s}}else return}return n}const yf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gr(n))&&((t||(t={}))[n]=e[n]);return t},_f=(e,t)=>{const n={};for(const r in e)(!to(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xf(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Yo(r,i,u):!!i;if(l&8){const f=t.dynamicProps;for(let c=0;c<f.length;c++){const p=f[c];if(i[p]!==r[p]&&!ts(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Yo(r,i,u):!0:!!i;return!1}function Yo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!ts(n,o))return!0}return!1}function po({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Za={},Xa=()=>Object.create(Za),el=e=>Object.getPrototypeOf(e)===Za;function wf(e,t,n,r=!1){const s={},o=Xa();e.propsDefaults=Object.create(null),tl(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ea(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ef(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=ee(s),[l]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let p=f[c];if(ts(e.emitsOptions,p))continue;const m=t[p];if(l)if(re(o,p))m!==o[p]&&(o[p]=m,u=!0);else{const x=Ve(p);s[x]=js(l,a,x,m,e,!1)}else m!==o[p]&&(o[p]=m,u=!0)}}}else{tl(e,t,s,o)&&(u=!0);let f;for(const c in a)(!t||!re(t,c)&&((f=zt(c))===c||!re(t,f)))&&(l?n&&(n[c]!==void 0||n[f]!==void 0)&&(s[c]=js(l,a,c,void 0,e,!0)):delete s[c]);if(o!==a)for(const c in o)(!t||!re(t,c))&&(delete o[c],u=!0)}u&&gt(e.attrs,"set","")}function tl(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Gn(l))continue;const u=t[l];let f;s&&re(s,f=Ve(l))?!o||!o.includes(f)?n[f]=u:(a||(a={}))[f]=u:ts(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,i=!0)}if(o){const l=ee(n),u=a||ae;for(let f=0;f<o.length;f++){const c=o[f];n[c]=js(s,l,c,u[c],e,!re(u,c))}}return i}function js(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=re(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&V(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=vr(s);r=u[n]=l.call(null,t),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===zt(n))&&(r=!0))}return r}const Af=new WeakMap;function nl(e,t,n=!1){const r=n?Af:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!V(e)){const f=c=>{l=!0;const[p,m]=nl(c,t,!0);be(i,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!l)return fe(e)&&r.set(e,hn),hn;if(U(o))for(let f=0;f<o.length;f++){const c=Ve(o[f]);Jo(c)&&(i[c]=ae)}else if(o)for(const f in o){const c=Ve(f);if(Jo(c)){const p=o[f],m=i[c]=U(p)||V(p)?{type:p}:be({},p),x=m.type;let C=!1,H=!0;if(U(x))for(let N=0;N<x.length;++N){const O=x[N],M=V(O)&&O.name;if(M==="Boolean"){C=!0;break}else M==="String"&&(H=!1)}else C=V(x)&&x.name==="Boolean";m[0]=C,m[1]=H,(C||re(m,"default"))&&a.push(c)}}const u=[i,a];return fe(e)&&r.set(e,u),u}function Jo(e){return e[0]!=="$"&&!Gn(e)}const mo=e=>e==="_"||e==="_ctx"||e==="$stable",go=e=>U(e)?e.map(Ke):[Ke(e)],Cf=(e,t,n)=>{if(t._n)return t;const r=bt((...s)=>go(t(...s)),n);return r._c=!1,r},rl=(e,t,n)=>{const r=e._ctx;for(const s in e){if(mo(s))continue;const o=e[s];if(V(o))t[s]=Cf(s,o,r);else if(o!=null){const i=go(o);t[s]=()=>i}}},sl=(e,t)=>{const n=go(t);e.slots.default=()=>n},ol=(e,t,n)=>{for(const r in t)(n||!mo(r))&&(e[r]=t[r])},Sf=(e,t,n)=>{const r=e.slots=Xa();if(e.vnode.shapeFlag&32){const s=t._;s?(ol(r,t,n),n&&sa(r,"_",s,!0)):rl(t,r)}else t&&sl(e,t)},$f=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=ae;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:ol(s,t,n):(o=!t.$stable,rl(t,s)),i=t}else t&&(sl(e,t),i={default:1});if(o)for(const a in s)!mo(a)&&i[a]==null&&delete s[a]},Pe=Lf;function Rf(e){return Of(e)}function Of(e,t){const n=Yr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:u,setElementText:f,parentNode:c,nextSibling:p,setScopeId:m=ct,insertStaticContent:x}=e,C=(d,h,g,v=null,_=null,b=null,$=void 0,A=null,E=!!h.dynamicChildren)=>{if(d===h)return;d&&!lt(d,h)&&(v=y(d),Re(d,_,b,!0),d=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:w,ref:j,shapeFlag:P}=h;switch(w){case ns:H(d,h,g,v);break;case ye:N(d,h,g,v);break;case Cr:d==null&&O(h,g,v,$);break;case Me:S(d,h,g,v,_,b,$,A,E);break;default:P&1?T(d,h,g,v,_,b,$,A,E):P&6?K(d,h,g,v,_,b,$,A,E):(P&64||P&128)&&w.process(d,h,g,v,_,b,$,A,E,L)}j!=null&&_?Kn(j,d&&d.ref,b,h||d,!h):j==null&&d&&d.ref!=null&&Kn(d.ref,null,b,d,!0)},H=(d,h,g,v)=>{if(d==null)r(h.el=a(h.children),g,v);else{const _=h.el=d.el;h.children!==d.children&&u(_,h.children)}},N=(d,h,g,v)=>{d==null?r(h.el=l(h.children||""),g,v):h.el=d.el},O=(d,h,g,v)=>{[d.el,d.anchor]=x(d.children,h,g,v,d.el,d.anchor)},M=({el:d,anchor:h},g,v)=>{let _;for(;d&&d!==h;)_=p(d),r(d,g,v),d=_;r(h,g,v)},I=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},T=(d,h,g,v,_,b,$,A,E)=>{if(h.type==="svg"?$="svg":h.type==="math"&&($="mathml"),d==null)D(h,g,v,_,b,$,A,E);else{const w=d.el&&d.el._isVueCE?d.el:null;try{w&&w._beginPatch(),z(d,h,_,b,$,A,E)}finally{w&&w._endPatch()}}},D=(d,h,g,v,_,b,$,A)=>{let E,w;const{props:j,shapeFlag:P,transition:B,dirs:W}=d;if(E=d.el=i(d.type,b,j&&j.is,j),P&8?f(E,d.children):P&16&&te(d.children,E,null,v,_,gs(d,b),$,A),W&&Lt(d,null,v,"created"),q(E,d,d.scopeId,$,v),j){for(const le in j)le!=="value"&&!Gn(le)&&o(E,le,null,j[le],b,v);"value"in j&&o(E,"value",null,j.value,b),(w=j.onVnodeBeforeMount)&&ot(w,v,d)}W&&Lt(d,null,v,"beforeMount");const Z=Tf(_,B);Z&&B.beforeEnter(E),r(E,h,g),((w=j&&j.onVnodeMounted)||Z||W)&&Pe(()=>{w&&ot(w,v,d),Z&&B.enter(E),W&&Lt(d,null,v,"mounted")},_)},q=(d,h,g,v,_)=>{if(g&&m(d,g),v)for(let b=0;b<v.length;b++)m(d,v[b]);if(_){let b=_.subTree;if(h===b||cl(b.type)&&(b.ssContent===h||b.ssFallback===h)){const $=_.vnode;q(d,$,$.scopeId,$.slotScopeIds,_.parent)}}},te=(d,h,g,v,_,b,$,A,E=0)=>{for(let w=E;w<d.length;w++){const j=d[w]=A?Ot(d[w]):Ke(d[w]);C(null,j,h,g,v,_,b,$,A)}},z=(d,h,g,v,_,b,$)=>{const A=h.el=d.el;let{patchFlag:E,dynamicChildren:w,dirs:j}=h;E|=d.patchFlag&16;const P=d.props||ae,B=h.props||ae;let W;if(g&&Bt(g,!1),(W=B.onVnodeBeforeUpdate)&&ot(W,g,h,d),j&&Lt(h,d,g,"beforeUpdate"),g&&Bt(g,!0),(P.innerHTML&&B.innerHTML==null||P.textContent&&B.textContent==null)&&f(A,""),w?G(d.dynamicChildren,w,A,g,v,gs(h,_),b):$||X(d,h,A,null,g,v,gs(h,_),b,!1),E>0){if(E&16)Y(A,P,B,g,_);else if(E&2&&P.class!==B.class&&o(A,"class",null,B.class,_),E&4&&o(A,"style",P.style,B.style,_),E&8){const Z=h.dynamicProps;for(let le=0;le<Z.length;le++){const oe=Z[le],Oe=P[oe],Te=B[oe];(Te!==Oe||oe==="value")&&o(A,oe,Oe,Te,_,g)}}E&1&&d.children!==h.children&&f(A,h.children)}else!$&&w==null&&Y(A,P,B,g,_);((W=B.onVnodeUpdated)||j)&&Pe(()=>{W&&ot(W,g,h,d),j&&Lt(h,d,g,"updated")},v)},G=(d,h,g,v,_,b,$)=>{for(let A=0;A<h.length;A++){const E=d[A],w=h[A],j=E.el&&(E.type===Me||!lt(E,w)||E.shapeFlag&198)?c(E.el):g;C(E,w,j,null,v,_,b,$,!0)}},Y=(d,h,g,v,_)=>{if(h!==g){if(h!==ae)for(const b in h)!Gn(b)&&!(b in g)&&o(d,b,h[b],null,_,v);for(const b in g){if(Gn(b))continue;const $=g[b],A=h[b];$!==A&&b!=="value"&&o(d,b,A,$,_,v)}"value"in g&&o(d,"value",h.value,g.value,_)}},S=(d,h,g,v,_,b,$,A,E)=>{const w=h.el=d?d.el:a(""),j=h.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:B,slotScopeIds:W}=h;W&&(A=A?A.concat(W):W),d==null?(r(w,g,v),r(j,g,v),te(h.children||[],g,j,_,b,$,A,E)):P>0&&P&64&&B&&d.dynamicChildren&&d.dynamicChildren.length===B.length?(G(d.dynamicChildren,B,g,_,b,$,A),(h.key!=null||_&&h===_.subTree)&&il(d,h,!0)):X(d,h,g,j,_,b,$,A,E)},K=(d,h,g,v,_,b,$,A,E)=>{h.slotScopeIds=A,d==null?h.shapeFlag&512?_.ctx.activate(h,g,v,$,E):ue(h,g,v,_,b,$,E):xe(d,h,E)},ue=(d,h,g,v,_,b,$)=>{const A=d.component=Wf(d,v,_);if(Xr(d)&&(A.ctx.renderer=L),qf(A,!1,$),A.asyncDep){if(_&&_.registerDep(A,ie,$),!d.el){const E=A.subTree=ge(ye);N(null,E,h,g),d.placeholder=E.el}}else ie(A,d,h,g,_,b,$)},xe=(d,h,g)=>{const v=h.component=d.component;if(xf(d,h,g))if(v.asyncDep&&!v.asyncResolved){J(v,h,g);return}else v.next=h,v.update();else h.el=d.el,v.vnode=h},ie=(d,h,g,v,_,b,$)=>{const A=()=>{if(d.isMounted){let{next:P,bu:B,u:W,parent:Z,vnode:le}=d;{const rt=al(d);if(rt){P&&(P.el=le.el,J(d,P,$)),rt.asyncDep.then(()=>{d.isUnmounted||A()});return}}let oe=P,Oe;Bt(d,!1),P?(P.el=le.el,J(d,P,$)):P=le,B&&cs(B),(Oe=P.props&&P.props.onVnodeBeforeUpdate)&&ot(Oe,Z,P,le),Bt(d,!0);const Te=Ko(d),nt=d.subTree;d.subTree=Te,C(nt,Te,c(nt.el),y(nt),d,_,b),P.el=Te.el,oe===null&&po(d,Te.el),W&&Pe(W,_),(Oe=P.props&&P.props.onVnodeUpdated)&&Pe(()=>ot(Oe,Z,P,le),_)}else{let P;const{el:B,props:W}=h,{bm:Z,m:le,parent:oe,root:Oe,type:Te}=d,nt=Yn(h);Bt(d,!1),Z&&cs(Z),!nt&&(P=W&&W.onVnodeBeforeMount)&&ot(P,oe,h),Bt(d,!0);{Oe.ce&&Oe.ce._def.shadowRoot!==!1&&Oe.ce._injectChildStyle(Te);const rt=d.subTree=Ko(d);C(null,rt,g,v,d,_,b),h.el=rt.el}if(le&&Pe(le,_),!nt&&(P=W&&W.onVnodeMounted)){const rt=h;Pe(()=>ot(P,oe,rt),_)}(h.shapeFlag&256||oe&&Yn(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&Pe(d.a,_),d.isMounted=!0,h=g=v=null}};d.scope.on();const E=d.effect=new ca(A);d.scope.off();const w=d.update=E.run.bind(E),j=d.job=E.runIfDirty.bind(E);j.i=d,j.id=d.uid,E.scheduler=()=>ho(j),Bt(d,!0),w()},J=(d,h,g)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,Ef(d,h.props,v,g),$f(d,h.children,g),_t(),Bo(d),xt()},X=(d,h,g,v,_,b,$,A,E=!1)=>{const w=d&&d.children,j=d?d.shapeFlag:0,P=h.children,{patchFlag:B,shapeFlag:W}=h;if(B>0){if(B&128){At(w,P,g,v,_,b,$,A,E);return}else if(B&256){ft(w,P,g,v,_,b,$,A,E);return}}W&8?(j&16&&Fe(w,_,b),P!==w&&f(g,P)):j&16?W&16?At(w,P,g,v,_,b,$,A,E):Fe(w,_,b,!0):(j&8&&f(g,""),W&16&&te(P,g,v,_,b,$,A,E))},ft=(d,h,g,v,_,b,$,A,E)=>{d=d||hn,h=h||hn;const w=d.length,j=h.length,P=Math.min(w,j);let B;for(B=0;B<P;B++){const W=h[B]=E?Ot(h[B]):Ke(h[B]);C(d[B],W,g,null,_,b,$,A,E)}w>j?Fe(d,_,b,!0,!1,P):te(h,g,v,_,b,$,A,E,P)},At=(d,h,g,v,_,b,$,A,E)=>{let w=0;const j=h.length;let P=d.length-1,B=j-1;for(;w<=P&&w<=B;){const W=d[w],Z=h[w]=E?Ot(h[w]):Ke(h[w]);if(lt(W,Z))C(W,Z,g,null,_,b,$,A,E);else break;w++}for(;w<=P&&w<=B;){const W=d[P],Z=h[B]=E?Ot(h[B]):Ke(h[B]);if(lt(W,Z))C(W,Z,g,null,_,b,$,A,E);else break;P--,B--}if(w>P){if(w<=B){const W=B+1,Z=W<j?h[W].el:v;for(;w<=B;)C(null,h[w]=E?Ot(h[w]):Ke(h[w]),g,Z,_,b,$,A,E),w++}}else if(w>B)for(;w<=P;)Re(d[w],_,b,!0),w++;else{const W=w,Z=w,le=new Map;for(w=Z;w<=B;w++){const ke=h[w]=E?Ot(h[w]):Ke(h[w]);ke.key!=null&&le.set(ke.key,w)}let oe,Oe=0;const Te=B-Z+1;let nt=!1,rt=0;const Ln=new Array(Te);for(w=0;w<Te;w++)Ln[w]=0;for(w=W;w<=P;w++){const ke=d[w];if(Oe>=Te){Re(ke,_,b,!0);continue}let st;if(ke.key!=null)st=le.get(ke.key);else for(oe=Z;oe<=B;oe++)if(Ln[oe-Z]===0&&lt(ke,h[oe])){st=oe;break}st===void 0?Re(ke,_,b,!0):(Ln[st-Z]=w+1,st>=rt?rt=st:nt=!0,C(ke,h[st],g,null,_,b,$,A,E),Oe++)}const Io=nt?Pf(Ln):hn;for(oe=Io.length-1,w=Te-1;w>=0;w--){const ke=Z+w,st=h[ke],ko=h[ke+1],Mo=ke+1<j?ko.el||ll(ko):v;Ln[w]===0?C(null,st,g,Mo,_,b,$,A,E):nt&&(oe<0||w!==Io[oe]?tt(st,g,Mo,2):oe--)}}},tt=(d,h,g,v,_=null)=>{const{el:b,type:$,transition:A,children:E,shapeFlag:w}=d;if(w&6){tt(d.component.subTree,h,g,v);return}if(w&128){d.suspense.move(h,g,v);return}if(w&64){$.move(d,h,g,L);return}if($===Me){r(b,h,g);for(let P=0;P<E.length;P++)tt(E[P],h,g,v);r(d.anchor,h,g);return}if($===Cr){M(d,h,g);return}if(v!==2&&w&1&&A)if(v===0)A.beforeEnter(b),r(b,h,g),Pe(()=>A.enter(b),_);else{const{leave:P,delayLeave:B,afterLeave:W}=A,Z=()=>{d.ctx.isUnmounted?s(b):r(b,h,g)},le=()=>{b._isLeaving&&b[mt](!0),P(b,()=>{Z(),W&&W()})};B?B(b,Z,le):le()}else r(b,h,g)},Re=(d,h,g,v=!1,_=!1)=>{const{type:b,props:$,ref:A,children:E,dynamicChildren:w,shapeFlag:j,patchFlag:P,dirs:B,cacheIndex:W}=d;if(P===-2&&(_=!1),A!=null&&(_t(),Kn(A,null,g,d,!0),xt()),W!=null&&(h.renderCache[W]=void 0),j&256){h.ctx.deactivate(d);return}const Z=j&1&&B,le=!Yn(d);let oe;if(le&&(oe=$&&$.onVnodeBeforeUnmount)&&ot(oe,h,d),j&6)Dt(d.component,g,v);else{if(j&128){d.suspense.unmount(g,v);return}Z&&Lt(d,null,h,"beforeUnmount"),j&64?d.type.remove(d,h,g,L,v):w&&!w.hasOnce&&(b!==Me||P>0&&P&64)?Fe(w,h,g,!1,!0):(b===Me&&P&384||!_&&j&16)&&Fe(E,h,g),v&&on(d)}(le&&(oe=$&&$.onVnodeUnmounted)||Z)&&Pe(()=>{oe&&ot(oe,h,d),Z&&Lt(d,null,h,"unmounted")},g)},on=d=>{const{type:h,el:g,anchor:v,transition:_}=d;if(h===Me){an(g,v);return}if(h===Cr){I(d);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:$,delayLeave:A}=_,E=()=>$(g,b);A?A(d.el,b,E):E()}else b()},an=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Dt=(d,h,g)=>{const{bum:v,scope:_,job:b,subTree:$,um:A,m:E,a:w}=d;Qo(E),Qo(w),v&&cs(v),_.stop(),b&&(b.flags|=8,Re($,d,h,g)),A&&Pe(A,h),Pe(()=>{d.isUnmounted=!0},h)},Fe=(d,h,g,v=!1,_=!1,b=0)=>{for(let $=b;$<d.length;$++)Re(d[$],h,g,v,_)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[Gc];return g?p(g):h};let k=!1;const R=(d,h,g)=>{let v;d==null?h._vnode&&(Re(h._vnode,null,null,!0),v=h._vnode.component):C(h._vnode||null,d,h,null,null,null,g),h._vnode=d,k||(k=!0,Bo(v),Ra(),k=!1)},L={p:C,um:Re,m:tt,r:on,mt:ue,mc:te,pc:X,pbc:G,n:y,o:e};return{render:R,hydrate:void 0,createApp:pf(R)}}function gs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Bt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Tf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function il(e,t,n=!1){const r=e.children,s=t.children;if(U(r)&&U(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Ot(s[o]),a.el=i.el),!n&&a.patchFlag!==-2&&il(i,a)),a.type===ns&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=o+(e.type===Me?1:0)),a.type===ye&&!a.el&&(a.el=i.el)}}function Pf(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<u?o=a+1:i=a;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function al(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:al(t)}function Qo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ll(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ll(t.subTree):null}const cl=e=>e.__isSuspense;let Fs=0;const Nf={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,o,i,a,l,u){if(e==null)kf(t,n,r,s,o,i,a,l,u);else{if(o&&o.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}Mf(e,t,n,r,s,i,a,l,u)}},hydrate:zf,normalize:Df},If=Nf;function or(e,t){const n=e.props&&e.props[t];V(n)&&n()}function kf(e,t,n,r,s,o,i,a,l){const{p:u,o:{createElement:f}}=l,c=f("div"),p=e.suspense=fl(e,s,r,t,c,n,o,i,a,l);u(null,p.pendingBranch=e.ssContent,c,null,r,p,o,i),p.deps>0?(or(e,"onPending"),or(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,o,i),bn(p,e.ssFallback)):p.resolve(!1,!0)}function Mf(e,t,n,r,s,o,i,a,{p:l,um:u,o:{createElement:f}}){const c=t.suspense=e.suspense;c.vnode=t,t.el=e.el;const p=t.ssContent,m=t.ssFallback,{activeBranch:x,pendingBranch:C,isInFallback:H,isHydrating:N}=c;if(C)c.pendingBranch=p,lt(C,p)?(l(C,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0?c.resolve():H&&(N||(l(x,m,n,r,s,null,o,i,a),bn(c,m)))):(c.pendingId=Fs++,N?(c.isHydrating=!1,c.activeBranch=C):u(C,s,c),c.deps=0,c.effects.length=0,c.hiddenContainer=f("div"),H?(l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0?c.resolve():(l(x,m,n,r,s,null,o,i,a),bn(c,m))):x&&lt(x,p)?(l(x,p,n,r,s,c,o,i,a),c.resolve(!0)):(l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0&&c.resolve()));else if(x&&lt(x,p))l(x,p,n,r,s,c,o,i,a),bn(c,p);else if(or(t,"onPending"),c.pendingBranch=p,p.shapeFlag&512?c.pendingId=p.component.suspenseId:c.pendingId=Fs++,l(null,p,c.hiddenContainer,null,s,c,o,i,a),c.deps<=0)c.resolve();else{const{timeout:O,pendingId:M}=c;O>0?setTimeout(()=>{c.pendingId===M&&c.fallback(m)},O):O===0&&c.fallback(m)}}function fl(e,t,n,r,s,o,i,a,l,u,f=!1){const{p:c,m:p,um:m,n:x,o:{parentNode:C,remove:H}}=u;let N;const O=Bf(e);O&&t&&t.pendingBranch&&(N=t.pendingId,t.deps++);const M=e.props?oa(e.props.timeout):void 0,I=o,T={vnode:e,parent:t,parentComponent:n,namespace:i,container:r,hiddenContainer:s,deps:0,pendingId:Fs++,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(D=!1,q=!1){const{vnode:te,activeBranch:z,pendingBranch:G,pendingId:Y,effects:S,parentComponent:K,container:ue,isInFallback:xe}=T;let ie=!1;T.isHydrating?T.isHydrating=!1:D||(ie=z&&G.transition&&G.transition.mode==="out-in",ie&&(z.transition.afterLeave=()=>{Y===T.pendingId&&(p(G,ue,o===I?x(z):o,0),ks(S),xe&&te.ssFallback&&(te.ssFallback.el=null))}),z&&(C(z.el)===ue&&(o=x(z)),m(z,K,T,!0),!ie&&xe&&te.ssFallback&&Pe(()=>te.ssFallback.el=null,T)),ie||p(G,ue,o,0)),bn(T,G),T.pendingBranch=null,T.isInFallback=!1;let J=T.parent,X=!1;for(;J;){if(J.pendingBranch){J.effects.push(...S),X=!0;break}J=J.parent}!X&&!ie&&ks(S),T.effects=[],O&&t&&t.pendingBranch&&N===t.pendingId&&(t.deps--,t.deps===0&&!q&&t.resolve()),or(te,"onResolve")},fallback(D){if(!T.pendingBranch)return;const{vnode:q,activeBranch:te,parentComponent:z,container:G,namespace:Y}=T;or(q,"onFallback");const S=x(te),K=()=>{T.isInFallback&&(c(null,D,G,S,z,null,Y,a,l),bn(T,D))},ue=D.transition&&D.transition.mode==="out-in";ue&&(te.transition.afterLeave=K),T.isInFallback=!0,m(te,z,null,!0),ue||K()},move(D,q,te){T.activeBranch&&p(T.activeBranch,D,q,te),T.container=D},next(){return T.activeBranch&&x(T.activeBranch)},registerDep(D,q,te){const z=!!T.pendingBranch;z&&T.deps++;const G=D.vnode.el;D.asyncDep.catch(Y=>{gr(Y,D,0)}).then(Y=>{if(D.isUnmounted||T.isUnmounted||T.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:S}=D;Vs(D,Y),G&&(S.el=G);const K=!G&&D.subTree.el;q(D,S,C(G||D.subTree.el),G?null:x(D.subTree),T,i,te),K&&(S.placeholder=null,H(K)),po(D,S.el),z&&--T.deps===0&&T.resolve()})},unmount(D,q){T.isUnmounted=!0,T.activeBranch&&m(T.activeBranch,n,D,q),T.pendingBranch&&m(T.pendingBranch,n,D,q)}};return T}function zf(e,t,n,r,s,o,i,a,l){const u=t.suspense=fl(t,r,n,e.parentNode,document.createElement("div"),null,s,o,i,a,!0),f=l(e,u.pendingBranch=t.ssContent,n,u,o,i);return u.deps===0&&u.resolve(!1,!0),f}function Df(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Zo(r?n.default:n),e.ssFallback=r?Zo(n.fallback):ge(ye)}function Zo(e){let t;if(V(e)){const n=Tn&&e._c;n&&(e._d=!1,at()),e=e(),n&&(e._d=!0,t=Ie,ul())}return U(e)&&(e=bf(e)),e=Ke(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Lf(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):ks(e)}function bn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,po(r,s))}function Bf(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Me=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),ye=Symbol.for("v-cmt"),Cr=Symbol.for("v-stc"),Qn=[];let Ie=null;function at(e=!1){Qn.push(Ie=e?null:[])}function ul(){Qn.pop(),Ie=Qn[Qn.length-1]||null}let Tn=1;function Mr(e,t=!1){Tn+=e,e<0&&Ie&&t&&(Ie.hasOnce=!0)}function dl(e){return e.dynamicChildren=Tn>0?Ie||hn:null,ul(),Tn>0&&Ie&&Ie.push(e),e}function fn(e,t,n,r,s,o){return dl(me(e,t,n,r,s,o,!0))}function Hs(e,t,n,r,s){return dl(ge(e,t,n,r,s,!0))}function ir(e){return e?e.__v_isVNode===!0:!1}function lt(e,t){return e.type===t.type&&e.key===t.key}const hl=({key:e})=>e??null,Sr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||Ae(e)||V(e)?{i:ze,r:e,k:t,f:!!n}:e:null);function me(e,t=null,n=null,r=0,s=null,o=e===Me?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hl(t),ref:t&&Sr(t),scopeId:Ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ze};return a?(vo(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),Tn>0&&!i&&Ie&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ie.push(l),l}const ge=jf;function jf(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Wa)&&(e=ye),ir(e)){const a=kt(e,t,!0);return n&&vo(a,n),Tn>0&&!o&&Ie&&(a.shapeFlag&6?Ie[Ie.indexOf(e)]=a:Ie.push(a)),a.patchFlag=-2,a}if(Zf(e)&&(e=e.__vccOpts),t){t=Ff(t);let{class:a,style:l}=t;a&&!pe(a)&&(t.class=Jr(a)),fe(l)&&(uo(l)&&!U(l)&&(l=be({},l)),t.style=so(l))}const i=pe(e)?1:cl(e)?128:Ia(e)?64:fe(e)?4:V(e)?2:0;return me(e,t,n,r,s,i,o,!0)}function Ff(e){return e?uo(e)||el(e)?be({},e):e:null}function kt(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,u=t?Uf(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&hl(u),ref:t&&t.ref?n&&o?U(o)?o.concat(Sr(t)):[o,Sr(t)]:Sr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&sr(f,l.clone(f)),f}function pl(e=" ",t=0){return ge(ns,null,e,t)}function Hf(e,t){const n=ge(Cr,null,e);return n.staticCount=t,n}function ap(e="",t=!1){return t?(at(),Hs(ye,null,e)):ge(ye,null,e)}function Ke(e){return e==null||typeof e=="boolean"?ge(ye):U(e)?ge(Me,null,e.slice()):ir(e)?Ot(e):ge(ns,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function vo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),vo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!el(t)?t._ctx=ze:s===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),r&64?(n=16,t=[pl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Uf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Jr([t.class,r.class]));else if(s==="style")t.style=so([t.style,r.style]);else if(Gr(s)){const o=t[s],i=r[s];i&&o!==i&&!(U(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function ot(e,t,n,r=null){Ze(e,t,7,[n,r])}const Vf=Ja();let Gf=0;function Wf(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Vf,o={uid:Gf++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nl(r,s),emitsOptions:Qa(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=gf.bind(null,o),e.ce&&e.ce(o),o}let Ee=null;const ml=()=>Ee||ze;let zr,Us;{const e=Yr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};zr=t("__VUE_INSTANCE_SETTERS__",n=>Ee=n),Us=t("__VUE_SSR_SETTERS__",n=>ar=n)}const vr=e=>{const t=Ee;return zr(e),e.scope.on(),()=>{e.scope.off(),zr(t)}},Xo=()=>{Ee&&Ee.scope.off(),zr(null)};function gl(e){return e.vnode.shapeFlag&4}let ar=!1;function qf(e,t=!1,n=!1){t&&Us(t);const{props:r,children:s}=e.vnode,o=gl(e);wf(e,r,o,t),Sf(e,s,n||t);const i=o?Kf(e,t):void 0;return t&&Us(!1),i}function Kf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,af);const{setup:r}=n;if(r){_t();const s=e.setupContext=r.length>1?Jf(e):null,o=vr(e),i=mr(r,e,0,[e.props,s]),a=ta(i);if(xt(),o(),(a||e.sp)&&!Yn(e)&&ja(e),a){if(i.then(Xo,Xo),t)return i.then(l=>{Vs(e,l)}).catch(l=>{gr(l,e,0)});e.asyncDep=i}else Vs(e,i)}else vl(e)}function Vs(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Ca(t)),vl(e)}function vl(e,t,n){const r=e.type;e.render||(e.render=r.render||ct);{const s=vr(e);_t();try{lf(e)}finally{xt(),s()}}}const Yf={get(e,t){return we(e,"get",""),e[t]}};function Jf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Yf),slots:e.slots,emit:e.emit,expose:t}}function rs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ca(Pc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jn)return Jn[n](e)},has(t,n){return n in t||n in Jn}})):e.proxy}function Qf(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Zf(e){return V(e)&&"__vccOpts"in e}const Ye=(e,t)=>Dc(e,t,ar);function bo(e,t,n){try{Mr(-1);const r=arguments.length;return r===2?fe(t)&&!U(t)?ir(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ir(n)&&(n=[n]),ge(e,t,n))}finally{Mr(1)}}const Xf="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gs;const ei=typeof window<"u"&&window.trustedTypes;if(ei)try{Gs=ei.createPolicy("vue",{createHTML:e=>e})}catch{}const bl=Gs?e=>Gs.createHTML(e):e=>e,eu="http://www.w3.org/2000/svg",tu="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,ti=pt&&pt.createElement("template"),nu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?pt.createElementNS(eu,e):t==="mathml"?pt.createElementNS(tu,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{ti.innerHTML=bl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=ti.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ct="transition",jn="animation",lr=Symbol("_vtc"),yl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ru=be({},ka,yl),su=e=>(e.displayName="Transition",e.props=ru,e),ou=su((e,{slots:t})=>bo(Kc,iu(e),t)),jt=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},ni=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function iu(e){const t={};for(const S in e)S in yl||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=i,appearToClass:f=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,x=au(s),C=x&&x[0],H=x&&x[1],{onBeforeEnter:N,onEnter:O,onEnterCancelled:M,onLeave:I,onLeaveCancelled:T,onBeforeAppear:D=N,onAppear:q=O,onAppearCancelled:te=M}=t,z=(S,K,ue,xe)=>{S._enterCancelled=xe,Ft(S,K?f:a),Ft(S,K?u:i),ue&&ue()},G=(S,K)=>{S._isLeaving=!1,Ft(S,c),Ft(S,m),Ft(S,p),K&&K()},Y=S=>(K,ue)=>{const xe=S?q:O,ie=()=>z(K,S,ue);jt(xe,[K,ie]),ri(()=>{Ft(K,S?l:o),dt(K,S?f:a),ni(xe)||si(K,r,C,ie)})};return be(t,{onBeforeEnter(S){jt(N,[S]),dt(S,o),dt(S,i)},onBeforeAppear(S){jt(D,[S]),dt(S,l),dt(S,u)},onEnter:Y(!1),onAppear:Y(!0),onLeave(S,K){S._isLeaving=!0;const ue=()=>G(S,K);dt(S,c),S._enterCancelled?(dt(S,p),ai(S)):(ai(S),dt(S,p)),ri(()=>{S._isLeaving&&(Ft(S,c),dt(S,m),ni(I)||si(S,r,H,ue))}),jt(I,[S,ue])},onEnterCancelled(S){z(S,!1,void 0,!0),jt(M,[S])},onAppearCancelled(S){z(S,!0,void 0,!0),jt(te,[S])},onLeaveCancelled(S){G(S),jt(T,[S])}})}function au(e){if(e==null)return null;if(fe(e))return[vs(e.enter),vs(e.leave)];{const t=vs(e);return[t,t]}}function vs(e){return oa(e)}function dt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[lr]||(e[lr]=new Set)).add(t)}function Ft(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[lr];n&&(n.delete(t),n.size||(e[lr]=void 0))}function ri(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let lu=0;function si(e,t,n,r){const s=e._endId=++lu,o=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=cu(e,t);if(!i)return r();const u=i+"end";let f=0;const c=()=>{e.removeEventListener(u,p),o()},p=m=>{m.target===e&&++f>=l&&c()};setTimeout(()=>{f<l&&c()},a+1),e.addEventListener(u,p)}function cu(e,t){const n=window.getComputedStyle(e),r=x=>(n[x]||"").split(", "),s=r(`${Ct}Delay`),o=r(`${Ct}Duration`),i=oi(s,o),a=r(`${jn}Delay`),l=r(`${jn}Duration`),u=oi(a,l);let f=null,c=0,p=0;t===Ct?i>0&&(f=Ct,c=i,p=o.length):t===jn?u>0&&(f=jn,c=u,p=l.length):(c=Math.max(i,u),f=c>0?i>u?Ct:jn:null,p=f?f===Ct?o.length:l.length:0);const m=f===Ct&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ct}Property`).toString());return{type:f,timeout:c,propCount:p,hasTransform:m}}function oi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ii(n)+ii(e[r])))}function ii(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ai(e){return(e?e.ownerDocument:document).body.offsetHeight}function fu(e,t,n){const r=e[lr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Dr=Symbol("_vod"),_l=Symbol("_vsh"),lp={name:"show",beforeMount(e,{value:t},{transition:n}){e[Dr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Fn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Fn(e,!0),r.enter(e)):r.leave(e,()=>{Fn(e,!1)}):Fn(e,t))},beforeUnmount(e,{value:t}){Fn(e,t)}};function Fn(e,t){e.style.display=t?e[Dr]:"none",e[_l]=!t}const uu=Symbol(""),du=/(?:^|;)\s*display\s*:/;function hu(e,t,n){const r=e.style,s=pe(n);let o=!1;if(n&&!s){if(t)if(pe(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&$r(r,a,"")}else for(const i in t)n[i]==null&&$r(r,i,"");for(const i in n)i==="display"&&(o=!0),$r(r,i,n[i])}else if(s){if(t!==n){const i=r[uu];i&&(n+=";"+i),r.cssText=n,o=du.test(n)}}else t&&e.removeAttribute("style");Dr in e&&(e[Dr]=o?r.display:"",e[_l]&&(r.display="none"))}const li=/\s*!important$/;function $r(e,t,n){if(U(n))n.forEach(r=>$r(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=pu(e,t);li.test(n)?e.setProperty(zt(r),n.replace(li,""),"important"):e[r]=n}}const ci=["Webkit","Moz","ms"],bs={};function pu(e,t){const n=bs[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return bs[t]=r;r=Kr(r);for(let s=0;s<ci.length;s++){const o=ci[s]+r;if(o in e)return bs[t]=o}return t}const fi="http://www.w3.org/1999/xlink";function ui(e,t,n,r,s,o=fc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n):n==null||o&&!ia(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Mt(n)?String(n):n)}function di(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?bl(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ia(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function mu(e,t,n,r){e.addEventListener(t,n,r)}function gu(e,t,n,r){e.removeEventListener(t,n,r)}const hi=Symbol("_vei");function vu(e,t,n,r,s=null){const o=e[hi]||(e[hi]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=bu(t);if(r){const u=o[t]=xu(r,s);mu(e,a,u,l)}else i&&(gu(e,a,i,l),o[t]=void 0)}}const pi=/(?:Once|Passive|Capture)$/;function bu(e){let t;if(pi.test(e)){t={};let r;for(;r=e.match(pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let ys=0;const yu=Promise.resolve(),_u=()=>ys||(yu.then(()=>ys=0),ys=Date.now());function xu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ze(wu(r,n.value),t,5,[r])};return n.value=e,n.attached=_u(),n}function wu(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const mi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Eu=(e,t,n,r,s,o)=>{const i=s==="svg";t==="class"?fu(e,r,i):t==="style"?hu(e,n,r):Gr(t)?to(t)||vu(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Au(e,t,r,i))?(di(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ui(e,t,r,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!pe(r))?di(e,Ve(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ui(e,t,r,i))};function Au(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&mi(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mi(t)&&pe(n)?!1:t in e}const Cu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cp=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const o=zt(s.key);if(t.some(i=>i===o||Cu[i]===o))return e(s)})},Su=be({patchProp:Eu},nu);let gi;function $u(){return gi||(gi=Rf(Su))}const Ru=(...e)=>{const t=$u().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Tu(r);if(!s)return;const o=t._component;!V(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,Ou(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Ou(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Tu(e){return pe(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=globalThis,yo=Rr.ShadowRoot&&(Rr.ShadyCSS===void 0||Rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_o=Symbol(),vi=new WeakMap;let xl=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==_o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(yo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=vi.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&vi.set(n,t))}return t}toString(){return this.cssText}};const Pu=e=>new xl(typeof e=="string"?e:e+"",void 0,_o),Le=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,o)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new xl(n,e,_o)},Nu=(e,t)=>{if(yo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=Rr.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},bi=yo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Pu(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Iu,defineProperty:ku,getOwnPropertyDescriptor:Mu,getOwnPropertyNames:zu,getOwnPropertySymbols:Du,getPrototypeOf:Lu}=Object,It=globalThis,yi=It.trustedTypes,Bu=yi?yi.emptyScript:"",_s=It.reactiveElementPolyfillSupport,Zn=(e,t)=>e,Lr={toAttribute(e,t){switch(t){case Boolean:e=e?Bu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},xo=(e,t)=>!Iu(e,t),_i={attribute:!0,type:String,converter:Lr,reflect:!1,useDefault:!1,hasChanged:xo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),It.litPropertyMetadata??(It.litPropertyMetadata=new WeakMap);let un=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=_i){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&ku(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:o}=Mu(this.prototype,t)??{get(){return this[n]},set(i){this[n]=i}};return{get:s,set(i){const a=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_i}static _$Ei(){if(this.hasOwnProperty(Zn("elementProperties")))return;const t=Lu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Zn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zn("properties"))){const n=this.properties,r=[...zu(n),...Du(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(bi(s))}else t!==void 0&&n.push(bi(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Lr).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){var o,i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=r.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Lr;this._$Em=s;const u=l.fromAttribute(n,a.type);this[s]=u??((i=this._$Ej)==null?void 0:i.get(s))??u,this._$Em=null}}requestUpdate(t,n,r,s=!1,o){var i;if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??xo)(o,n)||r.useDefault&&r.reflect&&o===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:o},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??n??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:a}=i,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};un.elementStyles=[],un.shadowRootOptions={mode:"open"},un[Zn("elementProperties")]=new Map,un[Zn("finalized")]=new Map,_s==null||_s({ReactiveElement:un}),(It.reactiveElementVersions??(It.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn=globalThis,xi=e=>e,Br=Xn.trustedTypes,wi=Br?Br.createPolicy("lit-html",{createHTML:e=>e}):void 0,wl="$lit$",Pt=`lit$${Math.random().toFixed(9).slice(2)}$`,El="?"+Pt,ju=`<${El}>`,Xt=document,cr=()=>Xt.createComment(""),fr=e=>e===null||typeof e!="object"&&typeof e!="function",wo=Array.isArray,Fu=e=>wo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",xs=`[ 	
\f\r]`,Hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ei=/-->/g,Ai=/>/g,Ht=RegExp(`>|${xs}(?:([^\\s"'>=/]+)(${xs}*=${xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ci=/'/g,Si=/"/g,Al=/^(?:script|style|textarea|title)$/i,Hu=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),de=Hu(1),Pn=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),$i=new WeakMap,Gt=Xt.createTreeWalker(Xt,129);function Cl(e,t){if(!wo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return wi!==void 0?wi.createHTML(t):t}const Uu=(e,t)=>{const n=e.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",i=Hn;for(let a=0;a<n;a++){const l=e[a];let u,f,c=-1,p=0;for(;p<l.length&&(i.lastIndex=p,f=i.exec(l),f!==null);)p=i.lastIndex,i===Hn?f[1]==="!--"?i=Ei:f[1]!==void 0?i=Ai:f[2]!==void 0?(Al.test(f[2])&&(s=RegExp("</"+f[2],"g")),i=Ht):f[3]!==void 0&&(i=Ht):i===Ht?f[0]===">"?(i=s??Hn,c=-1):f[1]===void 0?c=-2:(c=i.lastIndex-f[2].length,u=f[1],i=f[3]===void 0?Ht:f[3]==='"'?Si:Ci):i===Si||i===Ci?i=Ht:i===Ei||i===Ai?i=Hn:(i=Ht,s=void 0);const m=i===Ht&&e[a+1].startsWith("/>")?" ":"";o+=i===Hn?l+ju:c>=0?(r.push(u),l.slice(0,c)+wl+l.slice(c)+Pt+m):l+Pt+(c===-2?a:m)}return[Cl(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let Ws=class Sl{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let o=0,i=0;const a=t.length-1,l=this.parts,[u,f]=Uu(t,n);if(this.el=Sl.createElement(u,r),Gt.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=Gt.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(wl)){const p=f[i++],m=s.getAttribute(c).split(Pt),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:x[2],strings:m,ctor:x[1]==="."?Gu:x[1]==="?"?Wu:x[1]==="@"?qu:ss}),s.removeAttribute(c)}else c.startsWith(Pt)&&(l.push({type:6,index:o}),s.removeAttribute(c));if(Al.test(s.tagName)){const c=s.textContent.split(Pt),p=c.length-1;if(p>0){s.textContent=Br?Br.emptyScript:"";for(let m=0;m<p;m++)s.append(c[m],cr()),Gt.nextNode(),l.push({type:2,index:++o});s.append(c[p],cr())}}}else if(s.nodeType===8)if(s.data===El)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(Pt,c+1))!==-1;)l.push({type:7,index:o}),c+=Pt.length-1}o++}}static createElement(t,n){const r=Xt.createElement("template");return r.innerHTML=t,r}};function Nn(e,t,n=e,r){var i,a;if(t===Pn)return t;let s=r!==void 0?(i=n._$Co)==null?void 0:i[r]:n._$Cl;const o=fr(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=s:n._$Cl=s),s!==void 0&&(t=Nn(e,s._$AS(e,t.values),s,r)),t}class Vu{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??Xt).importNode(n,!0);Gt.currentNode=s;let o=Gt.nextNode(),i=0,a=0,l=r[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new Eo(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new Ku(o,this,t)),this._$AV.push(u),l=r[++a]}i!==(l==null?void 0:l.index)&&(o=Gt.nextNode(),i++)}return Gt.currentNode=Xt,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}let Eo=class $l{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Nn(this,t,n),fr(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==Pn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Fu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&fr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Xt.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ws.createElement(Cl(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(n);else{const i=new Vu(s,this),a=i.u(this.options);i.p(n),this.T(a),this._$AH=i}}_$AC(t){let n=$i.get(t.strings);return n===void 0&&$i.set(t.strings,n=new Ws(t)),n}k(t){wo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const o of t)s===n.length?n.push(r=new $l(this.O(cr()),this.O(cr()),this,this.options)):r=n[s],r._$AI(o),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t!==this._$AB;){const s=xi(t).nextSibling;xi(t).remove(),t=s}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},ss=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,o){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(t,n=this,r,s){const o=this.strings;let i=!1;if(o===void 0)t=Nn(this,t,n,0),i=!fr(t)||t!==this._$AH&&t!==Pn,i&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=Nn(this,a[r+l],n,l),u===Pn&&(u=this._$AH[l]),i||(i=!fr(u)||u!==this._$AH[l]),u===se?t=se:t!==se&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}i&&!s&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Gu=class extends ss{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}};class Wu extends ss{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}let qu=class extends ss{constructor(t,n,r,s,o){super(t,n,r,s,o),this.type=5}_$AI(t,n=this){if((t=Nn(this,t,n,0)??se)===Pn)return;const r=this._$AH,s=t===se&&r!==se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==se&&(r===se||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class Ku{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Nn(this,t)}}const ws=Xn.litHtmlPolyfillSupport;ws==null||ws(Ws,Eo),(Xn.litHtmlVersions??(Xn.litHtmlVersions=[])).push("3.3.3");const Yu=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=s=new Eo(t.insertBefore(cr(),o),o,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=globalThis;let _e=class extends un{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yu(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Pn}};var Zi;_e._$litElement$=!0,_e.finalized=!0,(Zi=Yt.litElementHydrateSupport)==null||Zi.call(Yt,{LitElement:_e});const Es=Yt.litElementPolyfillSupport;Es==null||Es({LitElement:_e});(Yt.litElementVersions??(Yt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ju={attribute:!0,type:String,converter:Lr,reflect:!1,hasChanged:xo},Qu=(e=Ju,t,n)=>{const{kind:r,metadata:s}=n;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:i}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,l,e,!0,a)},init(a){return a!==void 0&&this.C(i,void 0,e,a),a}}}if(r==="setter"){const{name:i}=n;return function(a){const l=this[i];t.call(this,a),this.requestUpdate(i,l,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function F(e){return(t,n)=>typeof n=="object"?Qu(e,t,n):((r,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,r),i?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rl=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zu(e,t){return(n,r,s)=>{const o=i=>{var a;return((a=i.renderRoot)==null?void 0:a.querySelector(e))??null};return Rl(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ao(e){return(t,n)=>{const{slot:r,selector:s}=e??{},o="slot"+(r?`[name=${r}]`:":not([name])");return Rl(t,n,{get(){var l;const i=(l=this.renderRoot)==null?void 0:l.querySelector(o),a=(i==null?void 0:i.assignedElements(e))??[];return s===void 0?a:a.filter(u=>u.matches(s))}})}}var rn=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},yn;let jr=(yn=class extends _e{constructor(){super(),this.exclusive=!1,this._onToggle=t=>{if(!this.exclusive)return;const n=t.target;if(n.open)for(const r of this._items)r!==n&&r.open&&(r.open=!1)},this.addEventListener("mfp-accordion-toggle",this._onToggle)}render(){return de`<slot></slot>`}},yn.styles=Le`
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
    `,yn);rn([F({type:Boolean})],jr.prototype,"exclusive",void 0);rn([Ao({selector:"mfp-accordion-item"})],jr.prototype,"_items",void 0);jr=rn([Be("mfp-accordion")],jr);var _n;let ur=(_n=class extends _e{constructor(){super(...arguments),this.label="",this.open=!1,this.disabled=!1,this._onToggle=t=>{const n=t.target;this.open!==n.open&&(this.open=n.open),this.dispatchEvent(new CustomEvent("mfp-accordion-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}})),this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,composed:!0,detail:{open:this.open}}))}}render(){return de`
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
        `}},_n.styles=Le`
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
    `,_n);rn([F()],ur.prototype,"label",void 0);rn([F({type:Boolean,reflect:!0})],ur.prototype,"open",void 0);rn([F({type:Boolean,reflect:!0})],ur.prototype,"disabled",void 0);ur=rn([Be("mfp-accordion-item")],ur);var os=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},xn;let dr=(xn=class extends _e{constructor(){super(...arguments),this.variant="neutral",this.size="sm",this.outlined=!1}render(){return de`<slot></slot>`}},xn.styles=Le`
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
    `,xn);os([F({reflect:!0})],dr.prototype,"variant",void 0);os([F({reflect:!0})],dr.prototype,"size",void 0);os([F({type:Boolean,reflect:!0})],dr.prototype,"outlined",void 0);dr=os([Be("mfp-badge")],dr);var zn=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Jt;let en=(Jt=class extends _e{constructor(){super(),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this._onClick=()=>{var t,n;this.disabled||this.loading||(this.type==="submit"?(t=this.form)==null||t.requestSubmit():this.type==="reset"&&((n=this.form)==null||n.reset()))},this._internals=this.attachInternals()}get form(){return this._internals.form}render(){const t=this.disabled||this.loading;return de`
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
        `}},Jt.formAssociated=!0,Jt.styles=Le`
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
    `,Jt);zn([F({reflect:!0})],en.prototype,"variant",void 0);zn([F({reflect:!0})],en.prototype,"size",void 0);zn([F({type:Boolean,reflect:!0})],en.prototype,"disabled",void 0);zn([F({type:Boolean,reflect:!0})],en.prototype,"loading",void 0);zn([F()],en.prototype,"type",void 0);en=zn([Be("mfp-button")],en);var Co=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},wn;let Fr=(wn=class extends _e{constructor(){super(...arguments),this.variant="default",this.padding="default",this._onSlotChange=t=>{const n=t.target,r=n.parentElement;if(!r)return;n.assignedNodes({flatten:!0}).length>0?r.removeAttribute("data-empty"):r.setAttribute("data-empty","")}}render(){return de`
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
        `}},wn.styles=Le`
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
    `,wn);Co([F({reflect:!0})],Fr.prototype,"variant",void 0);Co([F({reflect:!0})],Fr.prototype,"padding",void 0);Fr=Co([Be("mfp-card")],Fr);var Ol=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},En;let qs=(En=class extends _e{constructor(){super(...arguments),this.variant="default"}render(){return de` <footer class="inner" part="inner"><slot></slot></footer> `}},En.styles=Le`
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
    `,En);Ol([F({reflect:!0})],qs.prototype,"variant",void 0);qs=Ol([Be("mfp-footer")],qs);var Dn=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},An;let tn=(An=class extends _e{constructor(){super(...arguments),this.variant="ghost",this.size="md",this.disabled=!1,this.type="button",this.label=""}render(){return this.label||console.warn("<mfp-icon-button> requires a `label` attribute for accessibility"),de`
            <button
                type=${this.type}
                ?disabled=${this.disabled}
                aria-label=${this.label}
                part="button"
            >
                <slot></slot>
            </button>
        `}},An.styles=Le`
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
    `,An);Dn([F({reflect:!0})],tn.prototype,"variant",void 0);Dn([F({reflect:!0})],tn.prototype,"size",void 0);Dn([F({type:Boolean,reflect:!0})],tn.prototype,"disabled",void 0);Dn([F()],tn.prototype,"type",void 0);Dn([F()],tn.prototype,"label",void 0);tn=Dn([Be("mfp-icon-button")],tn);var We=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let Xu=0;var Qt;let De=(Qt=class extends _e{constructor(){super(),this.size="md",this.type="text",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.readonly=!1,this.required=!1,this._id=`mfp-input-${++Xu}`,this._onInput=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please fill out this field."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,r=`${n}-hint`,s=`${n}-error`,o=t?s:this.hint?r:void 0;return de`
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
        `}},Qt.styles=Le`
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
    `,Qt.formAssociated=!0,Qt);We([F({reflect:!0})],De.prototype,"size",void 0);We([F()],De.prototype,"type",void 0);We([F()],De.prototype,"value",void 0);We([F()],De.prototype,"name",void 0);We([F()],De.prototype,"label",void 0);We([F()],De.prototype,"placeholder",void 0);We([F()],De.prototype,"hint",void 0);We([F()],De.prototype,"error",void 0);We([F({type:Boolean,reflect:!0})],De.prototype,"disabled",void 0);We([F({type:Boolean,reflect:!0})],De.prototype,"readonly",void 0);We([F({type:Boolean,reflect:!0})],De.prototype,"required",void 0);De=We([Be("mfp-input")],De);var qe=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Cn;let hr=(Cn=class extends _e{constructor(){super(...arguments),this.sticky=!1,this.variant="default",this._onSlotChange=()=>this._syncOrientation()}_syncOrientation(){for(const t of this._items)t.orientation="horizontal"}firstUpdated(){this._syncOrientation()}render(){return de`
            <nav class="bar" aria-label="Main">
                <div class="brand"><slot name="brand"></slot></div>
                <div class="nav" role="navigation">
                    <slot @slotchange=${this._onSlotChange}></slot>
                </div>
                <div class="actions"><slot name="actions"></slot></div>
            </nav>
        `}},Cn.styles=Le`
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
    `,Cn);qe([F({type:Boolean,reflect:!0})],hr.prototype,"sticky",void 0);qe([F({reflect:!0})],hr.prototype,"variant",void 0);qe([Ao({selector:"mfp-nav-item"})],hr.prototype,"_items",void 0);hr=qe([Be("mfp-nav-bar")],hr);var Sn;let Hr=(Sn=class extends _e{constructor(){super(...arguments),this.variant="default",this._onItemsSlotChange=()=>this._syncOrientation(),this._onNamedSlotChange=t=>{const n=t.target,r=n.parentElement;if(!r)return;const s=n.assignedNodes({flatten:!0}).length>0;r.toggleAttribute("data-empty",!s)}}_syncOrientation(){for(const t of this._items)t.orientation="vertical"}firstUpdated(){this._syncOrientation()}render(){return de`
            <div class="header" part="header" data-empty>
                <slot name="header" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
            <nav class="items" aria-label="Side navigation">
                <slot @slotchange=${this._onItemsSlotChange}></slot>
            </nav>
            <div class="footer" part="footer" data-empty>
                <slot name="footer" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
        `}},Sn.styles=Le`
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
    `,Sn);qe([F({reflect:!0})],Hr.prototype,"variant",void 0);qe([Ao({selector:"mfp-nav-item"})],Hr.prototype,"_items",void 0);Hr=qe([Be("mfp-side-nav")],Hr);var $n;let In=($n=class extends _e{constructor(){super(...arguments),this.href="",this.active=!1,this.disabled=!1,this.orientation="horizontal",this._onClick=t=>{this.disabled&&(t.preventDefault(),t.stopPropagation())}}render(){const t=de`
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
        `}},$n.styles=Le`
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
    `,$n);qe([F()],In.prototype,"href",void 0);qe([F({type:Boolean,reflect:!0})],In.prototype,"active",void 0);qe([F({type:Boolean,reflect:!0})],In.prototype,"disabled",void 0);qe([F({reflect:!0})],In.prototype,"orientation",void 0);In=qe([Be("mfp-nav-item")],In);var et=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let ed=0;var Zt;let Ge=(Zt=class extends _e{constructor(){super(),this.size="md",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.required=!1,this._id=`mfp-select-${++ed}`,this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onSlotChange=t=>{const n=t.target,r=this._selectEl;if(!r)return;const s=this.value;r.querySelectorAll("[data-mfp-cloned]").forEach(i=>i.remove());const o=n.assignedNodes({flatten:!0}).filter(i=>i.nodeType===Node.ELEMENT_NODE&&(i.tagName==="OPTION"||i.tagName==="OPTGROUP"));for(const i of o){const a=i.cloneNode(!0);a.setAttribute("data-mfp-cloned",""),r.appendChild(a)}r.value=s},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please select an option."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,r=`${n}-hint`,s=`${n}-error`,o=t?s:this.hint?r:void 0;return de`
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
        `}},Zt.styles=Le`
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
    `,Zt.formAssociated=!0,Zt);et([F({reflect:!0})],Ge.prototype,"size",void 0);et([F()],Ge.prototype,"value",void 0);et([F()],Ge.prototype,"name",void 0);et([F()],Ge.prototype,"label",void 0);et([F()],Ge.prototype,"placeholder",void 0);et([F()],Ge.prototype,"hint",void 0);et([F()],Ge.prototype,"error",void 0);et([F({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0);et([F({type:Boolean,reflect:!0})],Ge.prototype,"required",void 0);et([Zu("select")],Ge.prototype,"_selectEl",void 0);Ge=et([Be("mfp-select")],Ge);var So=function(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},Rn;let Ur=(Rn=class extends _e{constructor(){super(...arguments),this.size="md",this.label="Loading"}render(){return de`<div class="ring" role="status" aria-label=${this.label}></div>`}},Rn.styles=Le`
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
    `,Rn);So([F({reflect:!0})],Ur.prototype,"size",void 0);So([F()],Ur.prototype,"label",void 0);Ur=So([Be("mfp-spinner")],Ur);const td=`/*
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
`,nd=`/*
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
`,rd=`/*
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
`,sd=`/*
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
`,od=`/*
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
`,Tl="mfp-theme",Ri="mfp-active-theme",Vr={blue:{label:"Blue (default)",css:td},warm:{label:"Warm",css:nd},orange:{label:"Orange",css:rd},earth:{label:"Earth",css:sd},portfolio:{label:"Portfolio (navy)",css:od}},id="portfolio";function Pl(){const e=localStorage.getItem(Tl);return e&&e in Vr?e:id}function Nl(e){if(!(e in Vr))return;let t=document.getElementById(Ri);t||(t=document.createElement("style"),t.id=Ri,document.head.appendChild(t)),t.textContent=Vr[e].css,localStorage.setItem(Tl,e)}function ad(){Nl(Pl())}const Il=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},ld={name:"App",data(){return{currentYear:new Date().getFullYear(),themes:Vr,activeTheme:Pl(),navLinks:[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/resume",label:"Resume"},{to:"/portfolio",label:"Projects"},{to:"/python",label:"Python"},{to:"/data",label:"Data Analysis"}]}},methods:{go(e){this.$route.path!==e&&this.$router.push(e)},onThemeChange(e){var n;const t=(n=e.detail)==null?void 0:n.value;t&&(Nl(t),this.activeTheme=t)},syncNavHeight(){var t;const e=(t=this.$refs.navBar)==null?void 0:t.offsetHeight;e&&document.documentElement.style.setProperty("--site-nav-height",`${e}px`)}},mounted(){this.syncNavHeight(),this._navResizeObserver=new ResizeObserver(()=>this.syncNavHeight()),this._navResizeObserver.observe(this.$refs.navBar)},beforeUnmount(){var e;(e=this._navResizeObserver)==null||e.disconnect()}},cd={ref:"navBar",sticky:"",variant:"brand"},fd=["active","onClick"],ud={slot:"actions",class:"navbar-actions"},dd=["active"],hd=["value"],pd=["value"],md={variant:"brand"},gd={class:"footer-copy"};function vd(e,t,n,r,s,o){const i=zs("router-link"),a=zs("router-view");return at(),fn("div",{class:Jr(["h-100 m-0 p-0",{"route-resume":e.$route.path==="/resume"}])},[me("mfp-nav-bar",cd,[ge(i,{slot:"brand",to:"/",class:"brand-link"},{default:bt(()=>[...t[2]||(t[2]=[pl("Melissa Freundschuh-Pula",-1)])]),_:1}),(at(!0),fn(Me,null,Uo(s.navLinks,l=>(at(),fn("mfp-nav-item",{key:l.to,active:e.$route.path===l.to,onClick:u=>o.go(l.to)},wr(l.label),9,fd))),128)),me("div",ud,[me("mfp-nav-item",{active:e.$route.path==="/contact",onClick:t[0]||(t[0]=l=>o.go("/contact"))},"Contact",8,dd),me("mfp-select",{class:"theme-switcher",size:"sm","aria-label":"Theme",value:s.activeTheme,onChange:t[1]||(t[1]=(...l)=>o.onThemeChange&&o.onThemeChange(...l))},[(at(!0),fn(Me,null,Uo(s.themes,(l,u)=>(at(),fn("option",{key:u,value:u},wr(l.label),9,pd))),128))],40,hd)])],512),ge(a,null,{default:bt(({Component:l})=>[ge(ou,{name:"fade",mode:"out-in"},{default:bt(()=>[(at(),Hs(If,null,{fallback:bt(()=>[...t[3]||(t[3]=[me("div",{class:"route-loading"},[me("mfp-spinner",{size:"lg",label:"Loading page"})],-1)])]),default:bt(()=>[(at(),Hs(of(l)))]),_:2},1024))]),_:2},1024)]),_:1}),me("mfp-footer",md,[me("span",gd,"© "+wr(s.currentYear)+" Melissa Freundschuh-Pula",1),t[4]||(t[4]=Hf('<div class="footer-links"><a href="https://github.com/melissapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a><a href="mailto:melissa_m_24@yahoo.com" aria-label="Email"><i class="fas fa-envelope"></i></a></div>',1))])],2)}const bd=Il(ld,[["render",vd]]),yd="modulepreload",_d=function(e){return"/"+e},Oi={},Ut=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=_d(l),l in Oi)return;Oi[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":yd,u||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const dn=typeof document<"u";function kl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&kl(e.default)}const ne=Object.assign;function As(e,t){const n={};for(const r in t){const s=t[r];n[r]=Xe(s)?s.map(e):e(s)}return n}const er=()=>{},Xe=Array.isArray;function Ti(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Ml=/#/g,wd=/&/g,Ed=/\//g,Ad=/=/g,Cd=/\?/g,zl=/\+/g,Sd=/%5B/g,$d=/%5D/g,Dl=/%5E/g,Rd=/%60/g,Ll=/%7B/g,Od=/%7C/g,Bl=/%7D/g,Td=/%20/g;function $o(e){return e==null?"":encodeURI(""+e).replace(Od,"|").replace(Sd,"[").replace($d,"]")}function Pd(e){return $o(e).replace(Ll,"{").replace(Bl,"}").replace(Dl,"^")}function Ks(e){return $o(e).replace(zl,"%2B").replace(Td,"+").replace(Ml,"%23").replace(wd,"%26").replace(Rd,"`").replace(Ll,"{").replace(Bl,"}").replace(Dl,"^")}function Nd(e){return Ks(e).replace(Ad,"%3D")}function Id(e){return $o(e).replace(Ml,"%23").replace(Cd,"%3F")}function kd(e){return Id(e).replace(Ed,"%2F")}function pr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Md=/\/$/,zd=e=>e.replace(Md,"");function Cs(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=t.slice(0,l),o=t.slice(l,a>0?a:t.length),s=e(o.slice(1))),a>=0&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=jd(r??t,n),{fullPath:r+o+i,path:r,query:s,hash:pr(i)}}function Dd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Pi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ld(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&kn(t.matched[r],n.matched[s])&&jl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function jl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Bd(e[n],t[n]))return!1;return!0}function Bd(e,t){return Xe(e)?Ni(e,t):Xe(t)?Ni(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ni(e,t){return Xe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function jd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ys=function(e){return e.pop="pop",e.push="push",e}({}),Ss=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Fd(e){if(!e)if(dn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zd(e)}const Hd=/^[^#]+#/;function Ud(e,t){return e.replace(Hd,"#")+t}function Vd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const is=()=>({left:window.scrollX,top:window.scrollY});function Gd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Vd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ii(e,t){return(history.state?history.state.position-t:-1)+e}const Js=new Map;function Wd(e,t){Js.set(e,t)}function qd(e){const t=Js.get(e);return Js.delete(e),t}function Kd(e){return typeof e=="string"||e&&typeof e=="object"}function Fl(e){return typeof e=="string"||typeof e=="symbol"}let he=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Hl=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function Mn(e,t){return ne(new Error,{type:e,[Hl]:!0},t)}function ht(e,t){return e instanceof Error&&Hl in e&&(t==null||!!(e.type&t))}const Yd=["params","query","hash"];function Jd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Yd)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Qd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(zl," "),o=s.indexOf("="),i=pr(o<0?s:s.slice(0,o)),a=o<0?null:pr(s.slice(o+1));if(i in t){let l=t[i];Xe(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function ki(e){let t="";for(let n in e){const r=e[n];if(n=Nd(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Xe(r)?r.map(s=>s&&Ks(s)):[r&&Ks(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Zd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Xd=Symbol(""),Mi=Symbol(""),Ro=Symbol(""),Ul=Symbol(""),Qs=Symbol("");function Un(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Mn(he.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?l(p):Kd(p)?l(Mn(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),a())},f=o(()=>e.call(r&&r.instances[s],t,n,u));let c=Promise.resolve(f);e.length<3&&(c=c.then(u)),c.catch(p=>l(p))})}function $s(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(kl(l)){const u=(l.__vccOpts||l)[t];u&&o.push(Tt(u,n,r,i,a,s))}else{let u=l();o.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const c=xd(f)?f.default:f;i.mods[a]=f,i.components[a]=c;const p=(c.__vccOpts||c)[t];return p&&Tt(p,n,r,i,a,s)()}))}}return o}function eh(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(u=>kn(u,a))?r.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(u=>kn(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let th=()=>location.protocol+"//"+location.host;function Vl(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),Pi(a,"")}return Pi(n,e)+r+s}function nh(e,t,n,r){let s=[],o=[],i=null;const a=({state:p})=>{const m=Vl(e,location),x=n.value,C=t.value;let H=0;if(p){if(n.value=m,t.value=p,i&&i===x){i=null;return}H=C?p.position-C.position:0}else r(m);s.forEach(N=>{N(n.value,x,{delta:H,type:Ys.pop,direction:H?H>0?Ss.forward:Ss.back:Ss.unknown})})};function l(){i=n.value}function u(p){s.push(p);const m=()=>{const x=s.indexOf(p);x>-1&&s.splice(x,1)};return o.push(m),m}function f(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ne({},p.state,{scroll:is()}),"")}}function c(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:c}}function zi(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?is():null}}function rh(e){const{history:t,location:n}=window,r={value:Vl(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,u,f){const c=e.indexOf("#"),p=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+l:th()+e+l;try{t[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function i(l,u){o(l,ne({},t.state,zi(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function a(l,u){const f=ne({},s.value,t.state,{forward:l,scroll:is()});o(f.current,f,!0),o(l,ne({},zi(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:a,replace:i}}function sh(e){e=Fd(e);const t=rh(e),n=nh(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=ne({location:"",base:e,go:r,createHref:Ud.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function oh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),sh(e)}let Wt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var ve=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(ve||{});const ih={type:Wt.Static,value:""},ah=/[a-zA-Z0-9_]/;function lh(e){if(!e)return[[]];if(e==="/")return[[ih]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=ve.Static,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,l,u="",f="";function c(){u&&(n===ve.Static?o.push({type:Wt.Static,value:u}):n===ve.Param||n===ve.ParamRegExp||n===ve.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Wt.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==ve.ParamRegExp){r=n,n=ve.EscapeNext;continue}switch(n){case ve.Static:l==="/"?(u&&c(),i()):l===":"?(c(),n=ve.Param):p();break;case ve.EscapeNext:p(),n=r;break;case ve.Param:l==="("?n=ve.ParamRegExp:ah.test(l)?p():(c(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ve.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=ve.ParamRegExpEnd:f+=l;break;case ve.ParamRegExpEnd:c(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),c(),i(),s}const Di="[^/]+?",ch={sensitive:!1,strict:!1,start:!0,end:!0};var Se=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Se||{});const fh=/[.+*?^${}()[\]/\\]/g;function uh(e,t){const n=ne({},ch,t),r=[];let s=n.start?"^":"";const o=[];for(const u of e){const f=u.length?[]:[Se.Root];n.strict&&!u.length&&(s+="/");for(let c=0;c<u.length;c++){const p=u[c];let m=Se.Segment+(n.sensitive?Se.BonusCaseSensitive:0);if(p.type===Wt.Static)c||(s+="/"),s+=p.value.replace(fh,"\\$&"),m+=Se.Static;else if(p.type===Wt.Param){const{value:x,repeatable:C,optional:H,regexp:N}=p;o.push({name:x,repeatable:C,optional:H});const O=N||Di;if(O!==Di){m+=Se.BonusCustomRegExp;try{`${O}`}catch(I){throw new Error(`Invalid custom RegExp for param "${x}" (${O}): `+I.message)}}let M=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;c||(M=H&&u.length<2?`(?:/${M})`:"/"+M),H&&(M+="?"),s+=M,m+=Se.Dynamic,H&&(m+=Se.BonusOptional),C&&(m+=Se.BonusRepeatable),O===".*"&&(m+=Se.BonusWildcard)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Se.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(i),c={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",x=o[p-1];c[x.name]=m&&x.repeatable?m.split("/"):m}return c}function l(u){let f="",c=!1;for(const p of e){(!c||!f.endsWith("/"))&&(f+="/"),c=!1;for(const m of p)if(m.type===Wt.Static)f+=m.value;else if(m.type===Wt.Param){const{value:x,repeatable:C,optional:H}=m,N=x in u?u[x]:"";if(Xe(N)&&!C)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const O=Xe(N)?N.join("/"):N;if(!O)if(H)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):c=!0);else throw new Error(`Missing required param "${x}"`);f+=O}}return f||"/"}return{re:i,score:r,keys:o,parse:a,stringify:l}}function dh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Se.Static+Se.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Se.Static+Se.Segment?1:-1:0}function Gl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=dh(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Li(r))return 1;if(Li(s))return-1}return s.length-r.length}function Li(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hh={strict:!1,end:!0,sensitive:!1};function ph(e,t,n){const r=uh(lh(e.path),n),s=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function mh(e,t){const n=[],r=new Map;t=Ti(hh,t);function s(c){return r.get(c)}function o(c,p,m){const x=!m,C=ji(c);C.aliasOf=m&&m.record;const H=Ti(t,c),N=[C];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const T of I)N.push(ji(ne({},C,{components:m?m.record.components:C.components,path:T,aliasOf:m?m.record:C})))}let O,M;for(const I of N){const{path:T}=I;if(p&&T[0]!=="/"){const D=p.record.path,q=D[D.length-1]==="/"?"":"/";I.path=p.record.path+(T&&q+T)}if(O=ph(I,p,H),m?m.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),x&&c.name&&!Fi(O)&&i(c.name)),Wl(O)&&l(O),C.children){const D=C.children;for(let q=0;q<D.length;q++)o(D[q],O,m&&m.children[q])}m=m||O}return M?()=>{i(M)}:er}function i(c){if(Fl(c)){const p=r.get(c);p&&(r.delete(c),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(c);p>-1&&(n.splice(p,1),c.record.name&&r.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return n}function l(c){const p=bh(c,n);n.splice(p,0,c),c.record.name&&!Fi(c)&&r.set(c.record.name,c)}function u(c,p){let m,x={},C,H;if("name"in c&&c.name){if(m=r.get(c.name),!m)throw Mn(he.MATCHER_NOT_FOUND,{location:c});H=m.record.name,x=ne(Bi(p.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),c.params&&Bi(c.params,m.keys.map(M=>M.name))),C=m.stringify(x)}else if(c.path!=null)C=c.path,m=n.find(M=>M.re.test(C)),m&&(x=m.parse(C),H=m.record.name);else{if(m=p.name?r.get(p.name):n.find(M=>M.re.test(p.path)),!m)throw Mn(he.MATCHER_NOT_FOUND,{location:c,currentLocation:p});H=m.record.name,x=ne({},p.params,c.params),C=m.stringify(x)}const N=[];let O=m;for(;O;)N.unshift(O.record),O=O.parent;return{name:H,path:C,params:x,matched:N,meta:vh(N)}}e.forEach(c=>o(c));function f(){n.length=0,r.clear()}return{addRoute:o,resolve:u,removeRoute:i,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Bi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ji(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Fi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vh(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function bh(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;Gl(e,t[o])<0?r=o:n=o+1}const s=yh(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function yh(e){let t=e;for(;t=t.parent;)if(Wl(t)&&Gl(e,t)===0)return t}function Wl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Hi(e){const t=yt(Ro),n=yt(Ul),r=Ye(()=>{const l=mn(e.to);return t.resolve(l)}),s=Ye(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],c=n.matched;if(!f||!c.length)return-1;const p=c.findIndex(kn.bind(null,f));if(p>-1)return p;const m=Ui(l[u-2]);return u>1&&Ui(f)===m&&c[c.length-1].path!==m?c.findIndex(kn.bind(null,l[u-2])):p}),o=Ye(()=>s.value>-1&&Ah(n.params,r.value.params)),i=Ye(()=>s.value>-1&&s.value===n.matched.length-1&&jl(n.params,r.value.params));function a(l={}){if(Eh(l)){const u=t[mn(e.replace)?"replace":"push"](mn(e.to)).catch(er);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ye(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function _h(e){return e.length===1?e[0]:e}const xh=Ba({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Hi,setup(e,{slots:t}){const n=Zr(Hi(e)),{options:r}=yt(Ro),s=Ye(()=>({[Vi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&_h(t.default(n));return e.custom?o:bo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),wh=xh;function Eh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ah(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function Ui(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Vi=(e,t,n)=>e??t??n,Ch=Ba({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=yt(Qs),s=Ye(()=>e.route||r.value),o=yt(Mi,0),i=Ye(()=>{let u=mn(o);const{matched:f}=s.value;let c;for(;(c=f[u])&&!c.components;)u++;return u}),a=Ye(()=>s.value.matched[i.value]);Er(Mi,Ye(()=>i.value+1)),Er(Xd,a),Er(Qs,s);const l=Nc();return Ar(()=>[l.value,a.value,e.name],([u,f,c],[p,m,x])=>{f&&(f.instances[c]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!kn(f,m)||!p)&&(f.enterCallbacks[c]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,f=e.name,c=a.value,p=c&&c.components[f];if(!p)return Gi(n.default,{Component:p,route:u});const m=c.props[f],x=m?m===!0?u.params:typeof m=="function"?m(u):m:null,H=bo(p,ne({},x,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(c.instances[f]=null)},ref:l}));return Gi(n.default,{Component:H,route:u})||H}}});function Gi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sh=Ch;function $h(e){const t=mh(e.routes,e),n=e.parseQuery||Qd,r=e.stringifyQuery||ki,s=e.history,o=Un(),i=Un(),a=Un(),l=Ic(St);let u=St;dn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=As.bind(null,y=>""+y),c=As.bind(null,kd),p=As.bind(null,pr);function m(y,k){let R,L;return Fl(y)?(R=t.getRecordMatcher(y),L=k):L=y,t.addRoute(L,R)}function x(y){const k=t.getRecordMatcher(y);k&&t.removeRoute(k)}function C(){return t.getRoutes().map(y=>y.record)}function H(y){return!!t.getRecordMatcher(y)}function N(y,k){if(k=ne({},k||l.value),typeof y=="string"){const g=Cs(n,y,k.path),v=t.resolve({path:g.path},k),_=s.createHref(g.fullPath);return ne(g,v,{params:p(v.params),hash:pr(g.hash),redirectedFrom:void 0,href:_})}let R;if(y.path!=null)R=ne({},y,{path:Cs(n,y.path,k.path).path});else{const g=ne({},y.params);for(const v in g)g[v]==null&&delete g[v];R=ne({},y,{params:c(g)}),k.params=c(k.params)}const L=t.resolve(R,k),Q=y.hash||"";L.params=f(p(L.params));const d=Dd(r,ne({},y,{hash:Pd(Q),path:L.path})),h=s.createHref(d);return ne({fullPath:d,hash:Q,query:r===ki?Zd(y.query):y.query||{}},L,{redirectedFrom:void 0,href:h})}function O(y){return typeof y=="string"?Cs(n,y,l.value.path):ne({},y)}function M(y,k){if(u!==y)return Mn(he.NAVIGATION_CANCELLED,{from:k,to:y})}function I(y){return q(y)}function T(y){return I(ne(O(y),{replace:!0}))}function D(y,k){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:L}=R;let Q=typeof L=="function"?L(y,k):L;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=O(Q):{path:Q},Q.params={}),ne({query:y.query,hash:y.hash,params:Q.path!=null?{}:y.params},Q)}}function q(y,k){const R=u=N(y),L=l.value,Q=y.state,d=y.force,h=y.replace===!0,g=D(R,L);if(g)return q(ne(O(g),{state:typeof g=="object"?ne({},Q,g.state):Q,force:d,replace:h}),k||R);const v=R;v.redirectedFrom=k;let _;return!d&&Ld(r,L,R)&&(_=Mn(he.NAVIGATION_DUPLICATED,{to:v,from:L}),tt(L,L,!0,!1)),(_?Promise.resolve(_):G(v,L)).catch(b=>ht(b)?ht(b,he.NAVIGATION_GUARD_REDIRECT)?b:At(b):X(b,v,L)).then(b=>{if(b){if(ht(b,he.NAVIGATION_GUARD_REDIRECT))return q(ne({replace:h},O(b.to),{state:typeof b.to=="object"?ne({},Q,b.to.state):Q,force:d}),k||v)}else b=S(v,L,!0,h,Q);return Y(v,L,b),b})}function te(y,k){const R=M(y,k);return R?Promise.reject(R):Promise.resolve()}function z(y){const k=an.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function G(y,k){let R;const[L,Q,d]=eh(y,k);R=$s(L.reverse(),"beforeRouteLeave",y,k);for(const g of L)g.leaveGuards.forEach(v=>{R.push(Tt(v,y,k))});const h=te.bind(null,y,k);return R.push(h),Fe(R).then(()=>{R=[];for(const g of o.list())R.push(Tt(g,y,k));return R.push(h),Fe(R)}).then(()=>{R=$s(Q,"beforeRouteUpdate",y,k);for(const g of Q)g.updateGuards.forEach(v=>{R.push(Tt(v,y,k))});return R.push(h),Fe(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(Xe(g.beforeEnter))for(const v of g.beforeEnter)R.push(Tt(v,y,k));else R.push(Tt(g.beforeEnter,y,k));return R.push(h),Fe(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=$s(d,"beforeRouteEnter",y,k,z),R.push(h),Fe(R))).then(()=>{R=[];for(const g of i.list())R.push(Tt(g,y,k));return R.push(h),Fe(R)}).catch(g=>ht(g,he.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function Y(y,k,R){a.list().forEach(L=>z(()=>L(y,k,R)))}function S(y,k,R,L,Q){const d=M(y,k);if(d)return d;const h=k===St,g=dn?history.state:{};R&&(L||h?s.replace(y.fullPath,ne({scroll:h&&g&&g.scroll},Q)):s.push(y.fullPath,Q)),l.value=y,tt(y,k,R,h),At()}let K;function ue(){K||(K=s.listen((y,k,R)=>{if(!Dt.listening)return;const L=N(y),Q=D(L,Dt.currentRoute.value);if(Q){q(ne(Q,{replace:!0,force:!0}),L).catch(er);return}u=L;const d=l.value;dn&&Wd(Ii(d.fullPath,R.delta),is()),G(L,d).catch(h=>ht(h,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?h:ht(h,he.NAVIGATION_GUARD_REDIRECT)?(q(ne(O(h.to),{force:!0}),L).then(g=>{ht(g,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Ys.pop&&s.go(-1,!1)}).catch(er),Promise.reject()):(R.delta&&s.go(-R.delta,!1),X(h,L,d))).then(h=>{h=h||S(L,d,!1),h&&(R.delta&&!ht(h,he.NAVIGATION_CANCELLED)?s.go(-R.delta,!1):R.type===Ys.pop&&ht(h,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Y(L,d,h)}).catch(er)}))}let xe=Un(),ie=Un(),J;function X(y,k,R){At(y);const L=ie.list();return L.length?L.forEach(Q=>Q(y,k,R)):console.error(y),Promise.reject(y)}function ft(){return J&&l.value!==St?Promise.resolve():new Promise((y,k)=>{xe.add([y,k])})}function At(y){return J||(J=!y,ue(),xe.list().forEach(([k,R])=>y?R(y):k()),xe.reset()),y}function tt(y,k,R,L){const{scrollBehavior:Q}=e;if(!dn||!Q)return Promise.resolve();const d=!R&&qd(Ii(y.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return Pr().then(()=>Q(y,k,d)).then(h=>h&&Gd(h)).catch(h=>X(h,y,k))}const Re=y=>s.go(y);let on;const an=new Set,Dt={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:H,getRoutes:C,resolve:N,options:e,push:I,replace:T,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:ie.add,isReady:ft,install(y){y.component("RouterLink",wh),y.component("RouterView",Sh),y.config.globalProperties.$router=Dt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>mn(l)}),dn&&!on&&l.value===St&&(on=!0,I(s.location).catch(L=>{}));const k={};for(const L in St)Object.defineProperty(k,L,{get:()=>l.value[L],enumerable:!0});y.provide(Ro,Dt),y.provide(Ul,Ea(k)),y.provide(Qs,l);const R=y.unmount;an.add(y),y.unmount=function(){an.delete(y),an.size<1&&(u=St,K&&K(),K=null,l.value=St,on=!1,J=!1),R()}}};function Fe(y){return y.reduce((k,R)=>k.then(()=>z(R)),Promise.resolve())}return Dt}const Rh="/assets/Family-TJUrK4ZO.jpeg",Oh={name:"Home"},Th={class:"container-fluid mt-0 pt-0"},Ph={class:"row align-items-center justify-content-center",style:{"min-height":"calc(100vh - var(--site-nav-height, 56px))","background-color":"#f0f2f5",overflow:"hidden"}},Nh={class:"col-12 col-md-6 col-lg-5 ps-md-5 mt-4 mt-md-0"},Ih={class:"mt-4 hero-actions"},kh=["onClick"],Mh=["onClick"],zh=["onClick"];function Dh(e,t,n,r,s,o){const i=zs("router-link");return at(),fn("div",Th,[me("div",Ph,[t[3]||(t[3]=me("div",{class:"col-12 col-md-6 col-lg-5 text-center"},[me("img",{src:Rh,class:"img-fluid rounded shadow",style:{"max-height":"calc(100vh - 120px)","object-fit":"contain"},alt:"Melissa with her wife and four kids"})],-1)),me("div",Nh,[t[0]||(t[0]=me("h1",{class:"hero-name",style:{color:"#1a2744"}},"Melissa Freundschuh-Pula",-1)),t[1]||(t[1]=me("h4",{class:"hero-title mt-2",style:{color:"#1a2744"}},"Full-Stack Software Engineer",-1)),t[2]||(t[2]=me("p",{class:"hero-intro mt-3",style:{color:"#2c3e50"}}," Six-plus years building enterprise web apps by day and live products on the side. Wife, mom of four, Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper. ",-1)),me("div",Ih,[ge(i,{to:"/portfolio",custom:""},{default:bt(({navigate:a})=>[me("mfp-button",{variant:"primary",onClick:a},"See Projects",8,kh)]),_:1}),ge(i,{to:"/resume",custom:""},{default:bt(({navigate:a})=>[me("mfp-button",{variant:"secondary",onClick:a},"Resume",8,Mh)]),_:1}),ge(i,{to:"/contact",custom:""},{default:bt(({navigate:a})=>[me("mfp-button",{variant:"secondary",onClick:a},"Get In Touch",8,zh)]),_:1})])])])])}const Lh=Il(Oh,[["render",Dh],["__scopeId","data-v-644187e5"]]),Bh=[{path:"/",name:"Home",component:Lh,meta:{title:"Home"}},{path:"/about",name:"About",component:()=>Ut(()=>import("./about-CH8nEv83.js"),__vite__mapDeps([0,1])),meta:{title:"About"}},{path:"/resume",name:"Resume",component:()=>Ut(()=>import("./resume-c_3znO3k.js"),__vite__mapDeps([2,3])),meta:{title:"Resume"}},{path:"/portfolio",name:"Portfolio",component:()=>Ut(()=>import("./portfolio-CBPuCuyy.js"),__vite__mapDeps([4,5])),meta:{title:"Projects"}},{path:"/python",name:"PythonCode",component:()=>Ut(()=>import("./pythonCode-BixTgXPH.js"),__vite__mapDeps([6,7,8,9])),meta:{title:"Python"}},{path:"/data",name:"DataAnalysis",component:()=>Ut(()=>import("./dataAnalysis--1liZzSb.js"),__vite__mapDeps([10,7,8,11])),meta:{title:"Data Analysis"}},{path:"/contact",name:"Contact",component:()=>Ut(()=>import("./contact-Cqn3yiDR.js"),__vite__mapDeps([12,13])),meta:{title:"Contact"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Ut(()=>import("./notFound-CJdFK4nN.js"),__vite__mapDeps([14,15])),meta:{title:"Page Not Found"}}],Wi="Melissa Freundschuh-Pula",Oo=$h({history:oh(),routes:Bh});Oo.afterEach(e=>{var n;const t=(n=e.meta)==null?void 0:n.title;document.title=t?`${t} | ${Wi}`:Wi});const jh=(e,t={})=>new Promise((n,r)=>{if(typeof document>"u")return;const s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.defer=t.defer,t.preconnectOrigin){const i=document.createElement("link");i.href=t.preconnectOrigin,i.rel="preconnect",s.appendChild(i)}s.appendChild(o),o.onload=n,o.onerror=r}),Zs=e=>typeof e=="function",Rs=e=>e&&typeof e=="object"&&!Array.isArray(e),Xs=(e,...t)=>{if(!t.length)return e;const n=t.shift();if(!(!Rs(e)||!Rs(n))){for(const r in n)Rs(n[r])?(e[r]||Object.assign(e,{[r]:{}}),Xs(e[r],n[r])):Object.assign(e,{[r]:n[r]});return Xs(e,...t)}},as=()=>!(typeof window>"u"||typeof document>"u"),qi=(e,t=!0)=>{},Fh=(e={})=>(qi('Missing "appName" property inside the plugin options.',e.app_name==null),qi('Missing "name" property in the route.',e.screen_name==null),e);function Hh(e="",t=""){const n=e.split("/"),r=t.split("/");return n[0]===""&&t[t.length-1]==="/"&&n.shift(),r.join("/")+n.join("/")}const Uh=()=>({bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}});let ql={};const Vh=(e={})=>{const t=Uh();ql=Xs(t,e)},je=()=>ql,nn=(...e)=>{const{globalObjectName:t}=je();!as()||typeof window[t]>"u"||window[t](...e)},To=(...e)=>{const{config:t,includes:n}=je();if(nn("config",t.id,...e),Array.isArray(n))for(const r of n)nn("config",r.id,...e)},Ki=(e,t)=>{as()&&(window[`ga-disable-${e}`]=t)},Kl=(e=!0)=>{const{config:t,includes:n}=je();if(Ki(t.id,e),Array.isArray(n))for(const r of n)Ki(r.id,e)},Yl=()=>{Kl(!0)},Gh=()=>{Kl(!1)},sn=(e,t={})=>{const{includes:n,defaultGroupName:r}=je();t.send_to==null&&Array.isArray(n)&&n.length&&(t.send_to=n.map(s=>s.id).concat(r)),nn("event",e,t)};let Jl;const Wh=e=>{Jl=e},Po=()=>Jl,Ql=e=>{if(!as())return;let t;if(typeof e=="string")t={page_path:e};else if(e.path||e.fullPath){const{pageTrackerUseFullPath:n,pageTrackerPrependBase:r}=je(),s=Po(),o=s==null?void 0:s.options.base,i=n?e.fullPath:e.path;t={...e.name&&{page_title:e.name},page_path:r?Hh(i,o):i}}else t=e;t.page_location==null&&(t.page_location=window.location.href),t.send_page_view==null&&(t.send_page_view=!0),sn("page_view",t)},Zl=e=>{const{appName:t}=je();if(!e)return;let n;typeof e=="string"?n={screen_name:e}:n=e,n.app_name=n.app_name||t,sn("screen_view",n)},qh=(...e)=>{sn("exception",...e)},Kh=e=>{To("linker",e)},Yh=e=>{sn("timing_complete",e)},Jh=(...e)=>{nn("set",...e)},Qh=(...e)=>{sn("refund",...e)},Zh=e=>{sn("purchase",e)},Xh=e=>{To({custom_map:e})},ep=Object.freeze(Object.defineProperty({__proto__:null,config:To,customMap:Xh,event:sn,exception:qh,linker:Kh,optIn:Gh,optOut:Yl,pageview:Ql,purchase:Zh,query:nn,refund:Qh,screenview:Zl,set:Jh,time:Yh},Symbol.toStringTag,{value:"Module"})),tp=e=>{e.config.globalProperties.$gtag=ep},Yi=e=>({send_page_view:!1,...e}),Xl=()=>{const{config:e,includes:t}=je();if(nn("config",e.id,Yi(e.params)),Array.isArray(t))for(const n of t)nn("config",n.id,Yi(n.params))},Ji=(e={},t={})=>{const{appName:n,pageTrackerTemplate:r,pageTrackerScreenviewEnabled:s,pageTrackerSkipSamePath:o}=je();if(o&&e.path===t.path)return;let i=e;if(Zs(r)?i=r(e,t):s&&(i=Fh({app_name:n,screen_name:e.name})),s){Zl(i);return}Ql(i)},Qi=e=>{const{pageTrackerExcludedRoutes:t}=je();return t.includes(e.path)||t.includes(e.name)},np=()=>{const{onBeforeTrack:e,onAfterTrack:t}=je(),n=Po();n.isReady().then(()=>{Pr().then(()=>{const{currentRoute:r}=n;Xl(),!Qi(r.value)&&Ji(r.value)}),n.afterEach((r,s)=>{Pr().then(()=>{Qi(r)||(Zs(e)&&e(r,s),Ji(r,s),Zs(t)&&t(r,s))})})})},rp=()=>{if(!as())return;const{enabled:e,globalObjectName:t,globalDataLayerName:n}=je();return window[t]==null&&(window[n]=window[n]||[],window[t]=function(){window[n].push(arguments)}),window[t]("js",new Date),e||Yl(),window[t]},sp=()=>{const{onReady:e,onError:t,globalObjectName:n,globalDataLayerName:r,config:s,customResourceURL:o,customPreconnectOrigin:i,deferScriptLoad:a,pageTrackerEnabled:l,disableScriptLoad:u}=je(),f=!!(l&&Po());if(rp(),f?np():Xl(),!u)return jh(`${o}?id=${s.id}&l=${r}`,{preconnectOrigin:i,defer:a}).then(()=>{e&&e(window[n])}).catch(c=>(t&&t(c),c))},op=(e,t,n)=>{tp(e),Vh(t),Wh(n),je().bootstrap&&sp()};ad();const No=Ru(bd);No.use(Oo);No.use(op,{config:{id:"G-ZP2LCLVZ2X",params:{send_page_view:!1}}},Oo);No.mount("#app");export{Me as F,Il as _,me as a,Hf as b,fn as c,ge as d,Uo as e,Ha as f,Ua as g,ap as h,pl as i,Nc as j,ip as k,cp as l,Hs as m,Jr as n,at as o,of as p,zs as r,wr as t,lp as v,bt as w};

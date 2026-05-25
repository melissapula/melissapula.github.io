const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-D-DbvN-E.js","assets/about-DpmJhWcr.css","assets/resume-FRpmVf5Y.js","assets/resume-BsPdJ-Ub.css","assets/portfolio-D3b6mxb3.js","assets/portfolio-B67dPeLl.css","assets/pythonCode-P4MjAlTK.js","assets/python-Cr8W1jsp.js","assets/python-xUpPpDMJ.css","assets/pythonCode-hIBgR2nI.css","assets/dataAnalysis-T7gHuZiG.js","assets/dataAnalysis-AY0or3jQ.css","assets/contact-DlUUI8oi.js","assets/contact-Bs1beZIv.css","assets/notFound-nkWRT9oo.js","assets/notFound-E74QhhxE.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},fn=[],ot=()=>{},Bo=()=>!1,Is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Hr=e=>e.startsWith("onUpdate:"),ve=Object.assign,Ur=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Da=Object.prototype.hasOwnProperty,re=(e,t)=>Da.call(e,t),H=Array.isArray,dn=e=>Ns(e)==="[object Map]",zo=e=>Ns(e)==="[object Set]",U=e=>typeof e=="function",ge=e=>typeof e=="string",Nt=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",Fo=e=>(de(e)||U(e))&&U(e.then)&&U(e.catch),jo=Object.prototype.toString,Ns=e=>jo.call(e),La=e=>Ns(e).slice(8,-1),Ho=e=>Ns(e)==="[object Object]",Vr=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dn=jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ks=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ba=/-\w/g,He=ks(e=>e.replace(Ba,t=>t.slice(1).toUpperCase())),za=/\B([A-Z])/g,kt=ks(e=>e.replace(za,"-$1").toLowerCase()),Ms=ks(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ys=ks(e=>e?`on${Ms(e)}`:""),Pt=(e,t)=>!Object.is(e,t),Js=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Uo=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Fa=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Vo=e=>{const t=ge(e)?Number(e):NaN;return isNaN(t)?e:t};let xi;const Ds=()=>xi||(xi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ge(s)?Va(s):Gr(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(ge(e)||de(e))return e}const ja=/;(?![^(]*\))/g,Ha=/:([^]+)/,Ua=/\/\*[^]*?\*\//g;function Va(e){const t={};return e.replace(Ua,"").split(ja).forEach(n=>{if(n){const s=n.split(Ha);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ls(e){let t="";if(ge(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const s=Ls(e[n]);s&&(t+=s+" ")}else if(de(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ga="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wa=jr(Ga);function Go(e){return!!e||e===""}const Wo=e=>!!(e&&e.__v_isRef===!0),mr=e=>ge(e)?e:e==null?"":H(e)||de(e)&&(e.toString===jo||!U(e.toString))?Wo(e)?mr(e.value):JSON.stringify(e,qo,2):String(e),qo=(e,t)=>Wo(t)?qo(e,t.value):dn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Qs(s,i)+" =>"]=r,n),{})}:zo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Qs(n))}:Nt(t)?Qs(t):de(t)&&!H(t)&&!Ho(t)?String(t):t,Qs=(e,t="")=>{var n;return Nt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class qa{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){this._on>0&&--this._on===0&&(Ie=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ka(){return Ie}let fe;const Zs=new WeakSet;class Ko{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&Ie.active&&Ie.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zs.has(this)&&(Zs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ei(this),Qo(this);const t=fe,n=qe;fe=this,qe=!0;try{return this.fn()}finally{Zo(this),fe=t,qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kr(t);this.deps=this.depsTail=void 0,Ei(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vr(this)&&this.run()}get dirty(){return vr(this)}}let Yo=0,Ln,Bn;function Jo(e,t=!1){if(e.flags|=8,t){e.next=Bn,Bn=e;return}e.next=Ln,Ln=e}function Wr(){Yo++}function qr(){if(--Yo>0)return;if(Bn){let t=Bn;for(Bn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ln;){let t=Ln;for(Ln=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Qo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Zo(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Kr(s),Ya(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function vr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Xo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Xo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Wn)||(e.globalVersion=Wn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!vr(e))))return;e.flags|=2;const t=e.dep,n=fe,s=qe;fe=e,qe=!0;try{Qo(e);const r=e.fn(e._value);(t.version===0||Pt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{fe=n,qe=s,Zo(e),e.flags&=-3}}function Kr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Kr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ya(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let qe=!0;const el=[];function vt(){el.push(qe),qe=!1}function bt(){const e=el.pop();qe=e===void 0?!0:e}function Ei(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let Wn=0;class Ja{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!qe||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new Ja(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,tl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=s)}return n}trigger(t){this.version++,Wn++,this.notify(t)}notify(t){Wr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qr()}}}function tl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)tl(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const br=new WeakMap,Gt=Symbol(""),yr=Symbol(""),qn=Symbol("");function Ee(e,t,n){if(qe&&fe){let s=br.get(e);s||br.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Yr),r.map=s,r.key=n),r.track()}}function pt(e,t,n,s,r,i){const o=br.get(e);if(!o){Wn++;return}const l=a=>{a&&a.trigger()};if(Wr(),t==="clear")o.forEach(l);else{const a=H(e),f=a&&Vr(n);if(a&&n==="length"){const u=Number(s);o.forEach((c,p)=>{(p==="length"||p===qn||!Nt(p)&&p>=u)&&l(c)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),f&&l(o.get(qn)),t){case"add":a?f&&l(o.get("length")):(l(o.get(Gt)),dn(e)&&l(o.get(yr)));break;case"delete":a||(l(o.get(Gt)),dn(e)&&l(o.get(yr)));break;case"set":dn(e)&&l(o.get(Gt));break}}qr()}function ln(e){const t=te(e);return t===e?t:(Ee(t,"iterate",qn),je(e)?t:t.map(Ye))}function Bs(e){return Ee(e=te(e),"iterate",qn),e}function wt(e,t){return yt(e)?xn(Wt(e)?Ye(t):t):Ye(t)}const Qa={__proto__:null,[Symbol.iterator](){return Xs(this,Symbol.iterator,e=>wt(this,e))},concat(...e){return ln(this).concat(...e.map(t=>H(t)?ln(t):t))},entries(){return Xs(this,"entries",e=>(e[1]=wt(this,e[1]),e))},every(e,t){return at(this,"every",e,t,void 0,arguments)},filter(e,t){return at(this,"filter",e,t,n=>n.map(s=>wt(this,s)),arguments)},find(e,t){return at(this,"find",e,t,n=>wt(this,n),arguments)},findIndex(e,t){return at(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return at(this,"findLast",e,t,n=>wt(this,n),arguments)},findLastIndex(e,t){return at(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return at(this,"forEach",e,t,void 0,arguments)},includes(...e){return er(this,"includes",e)},indexOf(...e){return er(this,"indexOf",e)},join(e){return ln(this).join(e)},lastIndexOf(...e){return er(this,"lastIndexOf",e)},map(e,t){return at(this,"map",e,t,void 0,arguments)},pop(){return Pn(this,"pop")},push(...e){return Pn(this,"push",e)},reduce(e,...t){return Ai(this,"reduce",e,t)},reduceRight(e,...t){return Ai(this,"reduceRight",e,t)},shift(){return Pn(this,"shift")},some(e,t){return at(this,"some",e,t,void 0,arguments)},splice(...e){return Pn(this,"splice",e)},toReversed(){return ln(this).toReversed()},toSorted(e){return ln(this).toSorted(e)},toSpliced(...e){return ln(this).toSpliced(...e)},unshift(...e){return Pn(this,"unshift",e)},values(){return Xs(this,"values",e=>wt(this,e))}};function Xs(e,t,n){const s=Bs(e),r=s[t]();return s!==e&&!je(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Za=Array.prototype;function at(e,t,n,s,r,i){const o=Bs(e),l=o!==e&&!je(e),a=o[t];if(a!==Za[t]){const c=a.apply(e,i);return l?Ye(c):c}let f=n;o!==e&&(l?f=function(c,p){return n.call(this,wt(e,c),p,e)}:n.length>2&&(f=function(c,p){return n.call(this,c,p,e)}));const u=a.call(o,f,s);return l&&r?r(u):u}function Ai(e,t,n,s){const r=Bs(e);let i=n;return r!==e&&(je(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,wt(e,l),a,e)}),r[t](i,...s)}function er(e,t,n){const s=te(e);Ee(s,"iterate",qn);const r=s[t](...n);return(r===-1||r===!1)&&Zr(n[0])?(n[0]=te(n[0]),s[t](...n)):r}function Pn(e,t,n=[]){vt(),Wr();const s=te(e)[t].apply(e,n);return qr(),bt(),s}const Xa=jr("__proto__,__v_isRef,__isVue"),nl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Nt));function ec(e){Nt(e)||(e=String(e));const t=te(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class sl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?uc:ll:i?ol:il).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=H(t);if(!r){let a;if(o&&(a=Qa[n]))return a;if(n==="hasOwnProperty")return ec}const l=Reflect.get(t,n,we(t)?t:s);if((Nt(n)?nl.has(n):Xa(n))||(r||Ee(t,"get",n),i))return l;if(we(l)){const a=o&&Vr(n)?l:l.value;return r&&de(a)?xr(a):a}return de(l)?r?xr(l):zs(l):l}}class rl extends sl{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=H(t)&&Vr(n);if(!this._isShallow){const f=yt(i);if(!je(s)&&!yt(s)&&(i=te(i),s=te(s)),!o&&we(i)&&!we(s))return f||(i.value=s),!0}const l=o?Number(n)<t.length:re(t,n),a=Reflect.set(t,n,s,we(t)?t:r);return t===te(r)&&(l?Pt(s,i)&&pt(t,"set",n,s):pt(t,"add",n,s)),a}deleteProperty(t,n){const s=re(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&pt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Nt(n)||!nl.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",H(t)?"length":Gt),Reflect.ownKeys(t)}}class tc extends sl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const nc=new rl,sc=new tc,rc=new rl(!0);const _r=e=>e,ls=e=>Reflect.getPrototypeOf(e);function ic(e,t,n){return function(...s){const r=this.__v_raw,i=te(r),o=dn(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,f=r[e](...s),u=n?_r:t?xn:Ye;return!t&&Ee(i,"iterate",a?yr:Gt),ve(Object.create(f),{next(){const{value:c,done:p}=f.next();return p?{value:c,done:p}:{value:l?[u(c[0]),u(c[1])]:u(c),done:p}}})}}function as(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function oc(e,t){const n={get(r){const i=this.__v_raw,o=te(i),l=te(r);e||(Pt(r,l)&&Ee(o,"get",r),Ee(o,"get",l));const{has:a}=ls(o),f=t?_r:e?xn:Ye;if(a.call(o,r))return f(i.get(r));if(a.call(o,l))return f(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Ee(te(r),"iterate",Gt),r.size},has(r){const i=this.__v_raw,o=te(i),l=te(r);return e||(Pt(r,l)&&Ee(o,"has",r),Ee(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,a=te(l),f=t?_r:e?xn:Ye;return!e&&Ee(a,"iterate",Gt),l.forEach((u,c)=>r.call(i,f(u),f(c),o))}};return ve(n,e?{add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear")}:{add(r){!t&&!je(r)&&!yt(r)&&(r=te(r));const i=te(this);return ls(i).has.call(i,r)||(i.add(r),pt(i,"add",r,r)),this},set(r,i){!t&&!je(i)&&!yt(i)&&(i=te(i));const o=te(this),{has:l,get:a}=ls(o);let f=l.call(o,r);f||(r=te(r),f=l.call(o,r));const u=a.call(o,r);return o.set(r,i),f?Pt(i,u)&&pt(o,"set",r,i):pt(o,"add",r,i),this},delete(r){const i=te(this),{has:o,get:l}=ls(i);let a=o.call(i,r);a||(r=te(r),a=o.call(i,r)),l&&l.call(i,r);const f=i.delete(r);return a&&pt(i,"delete",r,void 0),f},clear(){const r=te(this),i=r.size!==0,o=r.clear();return i&&pt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ic(r,e,t)}),n}function Jr(e,t){const n=oc(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const lc={get:Jr(!1,!1)},ac={get:Jr(!1,!0)},cc={get:Jr(!0,!1)};const il=new WeakMap,ol=new WeakMap,ll=new WeakMap,uc=new WeakMap;function fc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dc(e){return e.__v_skip||!Object.isExtensible(e)?0:fc(La(e))}function zs(e){return yt(e)?e:Qr(e,!1,nc,lc,il)}function al(e){return Qr(e,!1,rc,ac,ol)}function xr(e){return Qr(e,!0,sc,cc,ll)}function Qr(e,t,n,s,r){if(!de(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=dc(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Wt(e){return yt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function Zr(e){return e?!!e.__v_raw:!1}function te(e){const t=e&&e.__v_raw;return t?te(t):e}function hc(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&Uo(e,"__v_skip",!0),e}const Ye=e=>de(e)?zs(e):e,xn=e=>de(e)?xr(e):e;function we(e){return e?e.__v_isRef===!0:!1}function pc(e){return cl(e,!1)}function gc(e){return cl(e,!0)}function cl(e,t){return we(e)?e:new mc(e,t)}class mc{constructor(t,n){this.dep=new Yr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:te(t),this._value=n?t:Ye(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||je(t)||yt(t);t=s?t:te(t),Pt(t,n)&&(this._rawValue=t,this._value=s?t:Ye(t),this.dep.trigger())}}function hn(e){return we(e)?e.value:e}const vc={get:(e,t,n)=>t==="__v_raw"?e:hn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return we(r)&&!we(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function ul(e){return Wt(e)?e:new Proxy(e,vc)}class bc{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Yr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Jo(this,!0),!0}get value(){const t=this.dep.track();return Xo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yc(e,t,n=!1){let s,r;return U(e)?s=e:(s=e.get,r=e.set),new bc(s,r,n)}const cs={},bs=new WeakMap;let Ht;function _c(e,t=!1,n=Ht){if(n){let s=bs.get(n);s||bs.set(n,s=[]),s.push(e)}}function xc(e,t,n=ae){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:a}=n,f=N=>r?N:je(N)||r===!1||r===0?gt(N,1):gt(N);let u,c,p,g,x=!1,C=!1;if(we(e)?(c=()=>e.value,x=je(e)):Wt(e)?(c=()=>f(e),x=!0):H(e)?(C=!0,x=e.some(N=>Wt(N)||je(N)),c=()=>e.map(N=>{if(we(N))return N.value;if(Wt(N))return f(N);if(U(N))return a?a(N,2):N()})):U(e)?t?c=a?()=>a(e,2):e:c=()=>{if(p){vt();try{p()}finally{bt()}}const N=Ht;Ht=u;try{return a?a(e,3,[g]):e(g)}finally{Ht=N}}:c=ot,t&&r){const N=c,P=r===!0?1/0:r;c=()=>gt(N(),P)}const j=Ka(),I=()=>{u.stop(),j&&j.active&&Ur(j.effects,u)};if(i&&t){const N=t;t=(...P)=>{N(...P),I()}}let T=C?new Array(e.length).fill(cs):cs;const M=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(t){const P=u.run();if(r||x||(C?P.some((L,W)=>Pt(L,T[W])):Pt(P,T))){p&&p();const L=Ht;Ht=u;try{const W=[P,T===cs?void 0:C&&T[0]===cs?[]:T,g];T=P,a?a(t,3,W):t(...W)}finally{Ht=L}}}else u.run()};return l&&l(M),u=new Ko(c),u.scheduler=o?()=>o(M,!1):M,g=N=>_c(N,!1,u),p=u.onStop=()=>{const N=bs.get(u);if(N){if(a)a(N,4);else for(const P of N)P();bs.delete(u)}},t?s?M(!0):T=u.run():o?o(M.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function gt(e,t=1/0,n){if(t<=0||!de(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,we(e))gt(e.value,t,n);else if(H(e))for(let s=0;s<e.length;s++)gt(e[s],t,n);else if(zo(e)||dn(e))e.forEach(s=>{gt(s,t,n)});else if(Ho(e)){for(const s in e)gt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&gt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(e,t,n,s){try{return s?e(...s):e()}catch(r){is(r,t,n)}}function Je(e,t,n,s){if(U(e)){const r=rs(e,t,n,s);return r&&Fo(r)&&r.catch(i=>{is(i,t,n)}),r}if(H(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Je(e[i],t,n,s));return r}}function is(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let l=t.parent;const a=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,a,f)===!1)return}l=l.parent}if(i){vt(),rs(i,null,10,[e,a,f]),bt();return}}Ec(e,n,r,s,o)}function Ec(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const $e=[];let rt=-1;const pn=[];let Ct=null,an=0;const fl=Promise.resolve();let ys=null;function _s(e){const t=ys||fl;return e?t.then(this?e.bind(this):e):t}function Ac(e){let t=rt+1,n=$e.length;for(;t<n;){const s=t+n>>>1,r=$e[s],i=Kn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Xr(e){if(!(e.flags&1)){const t=Kn(e),n=$e[$e.length-1];!n||!(e.flags&2)&&t>=Kn(n)?$e.push(e):$e.splice(Ac(t),0,e),e.flags|=1,dl()}}function dl(){ys||(ys=fl.then(pl))}function Er(e){H(e)?pn.push(...e):Ct&&e.id===-1?Ct.splice(an+1,0,e):e.flags&1||(pn.push(e),e.flags|=1),dl()}function wi(e,t,n=rt+1){for(;n<$e.length;n++){const s=$e[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;$e.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function hl(e){if(pn.length){const t=[...new Set(pn)].sort((n,s)=>Kn(n)-Kn(s));if(pn.length=0,Ct){Ct.push(...t);return}for(Ct=t,an=0;an<Ct.length;an++){const n=Ct[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ct=null,an=0}}const Kn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function pl(e){try{for(rt=0;rt<$e.length;rt++){const t=$e[rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),rs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;rt<$e.length;rt++){const t=$e[rt];t&&(t.flags&=-2)}rt=-1,$e.length=0,hl(),ys=null,($e.length||pn.length)&&pl()}}let Me=null,gl=null;function xs(e){const t=Me;return Me=e,gl=e&&e.type.__scopeId||null,t}function xe(e,t=Me,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ws(-1);const i=xs(t);let o;try{o=e(...r)}finally{xs(i),s._d&&ws(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ep(e,t){if(Me===null)return e;const n=Vs(Me),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,a=ae]=t[r];i&&(U(i)&&(i={mounted:i,updated:i}),i.deep&&gt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return e}function Dt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(vt(),Je(a,n,8,[e.el,l,e,t]),bt())}}function fs(e,t){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[e]=t}}function mt(e,t,n=!1){const s=Xl();if(s||gn){let r=gn?gn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&U(t)?t.call(s&&s.proxy):t}}const wc=Symbol.for("v-scx"),Cc=()=>mt(wc);function ds(e,t,n){return ml(e,t,n)}function ml(e,t,n=ae){const{immediate:s,deep:r,flush:i,once:o}=n,l=ve({},n),a=t&&s||!t&&i!=="post";let f;if(Zn){if(i==="sync"){const g=Cc();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=ot,g.resume=ot,g.pause=ot,g}}const u=Ae;l.call=(g,x,C)=>Je(g,u,x,C);let c=!1;i==="post"?l.scheduler=g=>{Oe(g,u&&u.suspense)}:i!=="sync"&&(c=!0,l.scheduler=(g,x)=>{x?g():Xr(g)}),l.augmentJob=g=>{t&&(g.flags|=4),c&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=xc(e,t,l);return Zn&&(f?f.push(p):a&&p()),p}function Sc(e,t,n){const s=this.proxy,r=ge(e)?e.includes(".")?vl(s,e):()=>s[e]:e.bind(s,s);let i;U(t)?i=t:(i=t.handler,n=t);const o=os(this),l=ml(r,i.bind(s),n);return o(),l}function vl(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const $c=Symbol("_vte"),bl=e=>e.__isTeleport,ht=Symbol("_leaveCb"),us=Symbol("_enterCb");function Rc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $l(()=>{e.isMounted=!0}),Rl(()=>{e.isUnmounting=!0}),e}const ze=[Function,Array],yl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},_l=e=>{const t=e.subTree;return t.component?_l(t.component):t},Tc={name:"BaseTransition",props:yl,setup(e,{slots:t}){const n=Xl(),s=Rc();return()=>{const r=t.default&&Al(t.default(),!0);if(!r||!r.length)return;const i=xl(r),o=te(e),{mode:l}=o;if(s.isLeaving)return tr(i);const a=Ci(i);if(!a)return tr(i);let f=Ar(a,o,s,n,c=>f=c);a.type!==ye&&Yn(a,f);let u=n.subTree&&Ci(n.subTree);if(u&&u.type!==ye&&!it(u,a)&&_l(n).type!==ye){let c=Ar(u,o,s,n);if(Yn(u,c),l==="out-in"&&a.type!==ye)return s.isLeaving=!0,c.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave,u=void 0},tr(i);l==="in-out"&&a.type!==ye?c.delayLeave=(p,g,x)=>{const C=El(s,u);C[String(u.key)]=u,p[ht]=()=>{g(),p[ht]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{x(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function xl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ye){t=n;break}}return t}const Pc=Tc;function El(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Ar(e,t,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:f,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:p,onLeave:g,onAfterLeave:x,onLeaveCancelled:C,onBeforeAppear:j,onAppear:I,onAfterAppear:T,onAppearCancelled:M}=t,N=String(e.key),P=El(n,e),L=(D,V)=>{D&&Je(D,s,9,V)},W=(D,V)=>{const Y=V[1];L(D,V),H(D)?D.every(S=>S.length<=1)&&Y():D.length<=1&&Y()},ne={mode:o,persisted:l,beforeEnter(D){let V=a;if(!n.isMounted)if(i)V=j||a;else return;D[ht]&&D[ht](!0);const Y=P[N];Y&&it(e,Y)&&Y.el[ht]&&Y.el[ht](),L(V,[D])},enter(D){let V=f,Y=u,S=c;if(!n.isMounted)if(i)V=I||f,Y=T||u,S=M||c;else return;let q=!1;const he=D[us]=_e=>{q||(q=!0,_e?L(S,[D]):L(Y,[D]),ne.delayedLeave&&ne.delayedLeave(),D[us]=void 0)};V?W(V,[D,he]):he()},leave(D,V){const Y=String(e.key);if(D[us]&&D[us](!0),n.isUnmounting)return V();L(p,[D]);let S=!1;const q=D[ht]=he=>{S||(S=!0,V(),he?L(C,[D]):L(x,[D]),D[ht]=void 0,P[Y]===e&&delete P[Y])};P[Y]=e,g?W(g,[D,q]):q()},clone(D){const V=Ar(D,t,n,s,r);return r&&r(V),V}};return ne}function tr(e){if(Fs(e))return e=It(e),e.children=null,e}function Ci(e){if(!Fs(e))return bl(e.type)&&e.children?xl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&U(n.default))return n.default()}}function Yn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Yn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Al(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Fe?(o.patchFlag&128&&r++,s=s.concat(Al(o.children,t,l))):(t||o.type!==ye)&&s.push(l!=null?It(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function wl(e,t){return U(e)?ve({name:e.name},t,{setup:e}):e}function Cl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Es=new WeakMap;function zn(e,t,n,s,r=!1){if(H(e)){e.forEach((x,C)=>zn(x,t&&(H(t)?t[C]:t),n,s,r));return}if(Fn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&zn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Vs(s.component):s.el,o=r?null:i,{i:l,r:a}=e,f=t&&t.r,u=l.refs===ae?l.refs={}:l.refs,c=l.setupState,p=te(c),g=c===ae?Bo:x=>re(p,x);if(f!=null&&f!==a){if(Si(t),ge(f))u[f]=null,g(f)&&(c[f]=null);else if(we(f)){f.value=null;const x=t;x.k&&(u[x.k]=null)}}if(U(a))rs(a,l,12,[o,u]);else{const x=ge(a),C=we(a);if(x||C){const j=()=>{if(e.f){const I=x?g(a)?c[a]:u[a]:a.value;if(r)H(I)&&Ur(I,i);else if(H(I))I.includes(i)||I.push(i);else if(x)u[a]=[i],g(a)&&(c[a]=u[a]);else{const T=[i];a.value=T,e.k&&(u[e.k]=T)}}else x?(u[a]=o,g(a)&&(c[a]=o)):C&&(a.value=o,e.k&&(u[e.k]=o))};if(o){const I=()=>{j(),Es.delete(e)};I.id=-1,Es.set(e,I),Oe(I,n)}else Si(e),j()}}}function Si(e){const t=Es.get(e);t&&(t.flags|=8,Es.delete(e))}Ds().requestIdleCallback;Ds().cancelIdleCallback;const Fn=e=>!!e.type.__asyncLoader,Fs=e=>e.type.__isKeepAlive;function Oc(e,t){Sl(e,"a",t)}function Ic(e,t){Sl(e,"da",t)}function Sl(e,t,n=Ae){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(js(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Fs(r.parent.vnode)&&Nc(s,t,n,r),r=r.parent}}function Nc(e,t,n,s){const r=js(t,e,s,!0);Tl(()=>{Ur(s[t],r)},n)}function js(e,t,n=Ae,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{vt();const l=os(n),a=Je(t,n,e,o);return l(),bt(),a});return s?r.unshift(i):r.push(i),i}}const _t=e=>(t,n=Ae)=>{(!Zn||e==="sp")&&js(e,(...s)=>t(...s),n)},kc=_t("bm"),$l=_t("m"),Mc=_t("bu"),Dc=_t("u"),Rl=_t("bum"),Tl=_t("um"),Lc=_t("sp"),Bc=_t("rtg"),zc=_t("rtc");function Fc(e,t=Ae){js("ec",e,t)}const Pl="components";function wr(e,t){return Il(Pl,e,!0,t)||e}const Ol=Symbol.for("v-ndc");function jc(e){return ge(e)?Il(Pl,e,!1)||e:e||Ol}function Il(e,t,n=!0,s=!1){const r=Me||Ae;if(r){const i=r.type;{const l=Nu(i,!1);if(l&&(l===t||l===He(t)||l===Ms(He(t))))return i}const o=$i(r[e]||i[e],t)||$i(r.appContext[e],t);return!o&&s?i:o}}function $i(e,t){return e&&(e[t]||e[He(t)]||e[Ms(He(t))])}function Hc(e,t,n,s){let r;const i=n,o=H(e);if(o||ge(e)){const l=o&&Wt(e);let a=!1,f=!1;l&&(a=!je(e),f=yt(e),e=Bs(e)),r=new Array(e.length);for(let u=0,c=e.length;u<c;u++)r[u]=t(a?f?xn(Ye(e[u])):Ye(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(de(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,f=l.length;a<f;a++){const u=l[a];r[a]=t(e[u],u,a,i)}}else r=[];return r}const Cr=e=>e?ea(e)?Vs(e):Cr(e.parent):null,jn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cr(e.parent),$root:e=>Cr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>kl(e),$forceUpdate:e=>e.f||(e.f=()=>{Xr(e.update)}),$nextTick:e=>e.n||(e.n=_s.bind(e.proxy)),$watch:e=>Sc.bind(e)}),nr=(e,t)=>e!==ae&&!e.__isScriptSetup&&re(e,t),Uc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(nr(s,t))return o[t]=1,s[t];if(r!==ae&&re(r,t))return o[t]=2,r[t];if(re(i,t))return o[t]=3,i[t];if(n!==ae&&re(n,t))return o[t]=4,n[t];Sr&&(o[t]=0)}}const f=jn[t];let u,c;if(f)return t==="$attrs"&&Ee(e.attrs,"get",""),f(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(n!==ae&&re(n,t))return o[t]=4,n[t];if(c=a.config.globalProperties,re(c,t))return c[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return nr(r,t)?(r[t]=n,!0):s!==ae&&re(s,t)?(s[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let a;return!!(n[l]||e!==ae&&l[0]!=="$"&&re(e,l)||nr(t,l)||re(i,l)||re(s,l)||re(jn,l)||re(r.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ri(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Sr=!0;function Vc(e){const t=kl(e),n=e.proxy,s=e.ctx;Sr=!1,t.beforeCreate&&Ti(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:f,created:u,beforeMount:c,mounted:p,beforeUpdate:g,updated:x,activated:C,deactivated:j,beforeDestroy:I,beforeUnmount:T,destroyed:M,unmounted:N,render:P,renderTracked:L,renderTriggered:W,errorCaptured:ne,serverPrefetch:D,expose:V,inheritAttrs:Y,components:S,directives:q,filters:he}=t;if(f&&Gc(f,s,null),o)for(const J in o){const ee=o[J];U(ee)&&(s[J]=ee.bind(n))}if(r){const J=r.call(n,n);de(J)&&(e.data=zs(J))}if(Sr=!0,i)for(const J in i){const ee=i[J],lt=U(ee)?ee.bind(n,n):U(ee.get)?ee.get.bind(n,n):ot,xt=!U(ee)&&U(ee.set)?ee.set.bind(n):ot,Xe=We({get:lt,set:xt});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Re=>Xe.value=Re})}if(l)for(const J in l)Nl(l[J],s,n,J);if(a){const J=U(a)?a.call(n):a;Reflect.ownKeys(J).forEach(ee=>{fs(ee,J[ee])})}u&&Ti(u,e,"c");function le(J,ee){H(ee)?ee.forEach(lt=>J(lt.bind(n))):ee&&J(ee.bind(n))}if(le(kc,c),le($l,p),le(Mc,g),le(Dc,x),le(Oc,C),le(Ic,j),le(Fc,ne),le(zc,L),le(Bc,W),le(Rl,T),le(Tl,N),le(Lc,D),H(V))if(V.length){const J=e.exposed||(e.exposed={});V.forEach(ee=>{Object.defineProperty(J,ee,{get:()=>n[ee],set:lt=>n[ee]=lt,enumerable:!0})})}else e.exposed||(e.exposed={});P&&e.render===ot&&(e.render=P),Y!=null&&(e.inheritAttrs=Y),S&&(e.components=S),q&&(e.directives=q),D&&Cl(e)}function Gc(e,t,n=ot){H(e)&&(e=$r(e));for(const s in e){const r=e[s];let i;de(r)?"default"in r?i=mt(r.from||s,r.default,!0):i=mt(r.from||s):i=mt(r),we(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Ti(e,t,n){Je(H(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nl(e,t,n,s){let r=s.includes(".")?vl(n,s):()=>n[s];if(ge(e)){const i=t[e];U(i)&&ds(r,i)}else if(U(e))ds(r,e.bind(n));else if(de(e))if(H(e))e.forEach(i=>Nl(i,t,n,s));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&ds(r,i,e)}}function kl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(f=>As(a,f,o,!0)),As(a,t,o)),de(t)&&i.set(t,a),a}function As(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&As(e,i,n,!0),r&&r.forEach(o=>As(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Wc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Wc={data:Pi,props:Oi,emits:Oi,methods:Mn,computed:Mn,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Mn,directives:Mn,watch:Kc,provide:Pi,inject:qc};function Pi(e,t){return t?e?function(){return ve(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function qc(e,t){return Mn($r(e),$r(t))}function $r(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?ve(Object.create(null),e,t):t}function Oi(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ve(Object.create(null),Ri(e),Ri(t??{})):t}function Kc(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const s in t)n[s]=Ce(e[s],t[s]);return n}function Ml(){return{app:null,config:{isNativeTag:Bo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yc=0;function Jc(e,t){return function(s,r=null){U(s)||(s=ve({},s)),r!=null&&!de(r)&&(r=null);const i=Ml(),o=new WeakSet,l=[];let a=!1;const f=i.app={_uid:Yc++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Mu,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(f,...c)):U(u)&&(o.add(u),u(f,...c))),f},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),f},component(u,c){return c?(i.components[u]=c,f):i.components[u]},directive(u,c){return c?(i.directives[u]=c,f):i.directives[u]},mount(u,c,p){if(!a){const g=f._ceVNode||oe(s,r);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(g,u,p),a=!0,f._container=u,u.__vue_app__=f,Vs(g.component)}},onUnmount(u){l.push(u)},unmount(){a&&(Je(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,c){return i.provides[u]=c,f},runWithContext(u){const c=gn;gn=f;try{return u()}finally{gn=c}}};return f}}let gn=null;const Qc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${He(t)}Modifiers`]||e[`${kt(t)}Modifiers`];function Zc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ae;let r=n;const i=t.startsWith("update:"),o=i&&Qc(s,t.slice(7));o&&(o.trim&&(r=n.map(u=>ge(u)?u.trim():u)),o.number&&(r=n.map(Fa)));let l,a=s[l=Ys(t)]||s[l=Ys(He(t))];!a&&i&&(a=s[l=Ys(kt(t))]),a&&Je(a,e,6,r);const f=s[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Je(f,e,6,r)}}const Xc=new WeakMap;function Dl(e,t,n=!1){const s=n?Xc:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!U(e)){const a=f=>{const u=Dl(f,t,!0);u&&(l=!0,ve(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(de(e)&&s.set(e,null),null):(H(i)?i.forEach(a=>o[a]=null):ve(o,i),de(e)&&s.set(e,o),o)}function Hs(e,t){return!e||!Is(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,kt(t))||re(e,t))}function Ii(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:a,render:f,renderCache:u,props:c,data:p,setupState:g,ctx:x,inheritAttrs:C}=e,j=xs(e);let I,T;try{if(n.shapeFlag&4){const N=r||s,P=N;I=Ge(f.call(P,N,u,c,g,p,x)),T=l}else{const N=t;I=Ge(N.length>1?N(c,{attrs:l,slots:o,emit:a}):N(c,null)),T=t.props?l:tu(l)}}catch(N){Hn.length=0,is(N,e,1),I=oe(ye)}let M=I;if(T&&C!==!1){const N=Object.keys(T),{shapeFlag:P}=M;N.length&&P&7&&(i&&N.some(Hr)&&(T=nu(T,i)),M=It(M,T,!1,!0))}return n.dirs&&(M=It(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Yn(M,n.transition),I=M,xs(j),I}function eu(e,t=!0){let n;for(let s=0;s<e.length;s++){const r=e[s];if(Qn(r)){if(r.type!==ye||r.children==="v-if"){if(n)return;n=r}}else return}return n}const tu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Is(n))&&((t||(t={}))[n]=e[n]);return t},nu=(e,t)=>{const n={};for(const s in e)(!Hr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function su(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:a}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ni(s,o,f):!!o;if(a&8){const u=t.dynamicProps;for(let c=0;c<u.length;c++){const p=u[c];if(o[p]!==s[p]&&!Hs(f,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ni(s,o,f):!0:!!o;return!1}function Ni(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!Hs(n,i))return!0}return!1}function ei({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ll={},Bl=()=>Object.create(Ll),zl=e=>Object.getPrototypeOf(e)===Ll;function ru(e,t,n,s=!1){const r={},i=Bl();e.propsDefaults=Object.create(null),Fl(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:al(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function iu(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=te(r),[a]=e.propsOptions;let f=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let c=0;c<u.length;c++){let p=u[c];if(Hs(e.emitsOptions,p))continue;const g=t[p];if(a)if(re(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const x=He(p);r[x]=Rr(a,l,x,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{Fl(e,t,r,i)&&(f=!0);let u;for(const c in l)(!t||!re(t,c)&&((u=kt(c))===c||!re(t,u)))&&(a?n&&(n[c]!==void 0||n[u]!==void 0)&&(r[c]=Rr(a,l,c,void 0,e,!0)):delete r[c]);if(i!==l)for(const c in i)(!t||!re(t,c))&&(delete i[c],f=!0)}f&&pt(e.attrs,"set","")}function Fl(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(Dn(a))continue;const f=t[a];let u;r&&re(r,u=He(a))?!i||!i.includes(u)?n[u]=f:(l||(l={}))[u]=f:Hs(e.emitsOptions,a)||(!(a in s)||f!==s[a])&&(s[a]=f,o=!0)}if(i){const a=te(n),f=l||ae;for(let u=0;u<i.length;u++){const c=i[u];n[c]=Rr(r,a,c,f[c],e,!re(f,c))}}return o}function Rr(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=re(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&U(a)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const u=os(r);s=f[n]=a.call(null,t),u()}}else s=a;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===kt(n))&&(s=!0))}return s}const ou=new WeakMap;function jl(e,t,n=!1){const s=n?ou:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let a=!1;if(!U(e)){const u=c=>{a=!0;const[p,g]=jl(c,t,!0);ve(o,p),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return de(e)&&s.set(e,fn),fn;if(H(i))for(let u=0;u<i.length;u++){const c=He(i[u]);ki(c)&&(o[c]=ae)}else if(i)for(const u in i){const c=He(u);if(ki(c)){const p=i[u],g=o[c]=H(p)||U(p)?{type:p}:ve({},p),x=g.type;let C=!1,j=!0;if(H(x))for(let I=0;I<x.length;++I){const T=x[I],M=U(T)&&T.name;if(M==="Boolean"){C=!0;break}else M==="String"&&(j=!1)}else C=U(x)&&x.name==="Boolean";g[0]=C,g[1]=j,(C||re(g,"default"))&&l.push(c)}}const f=[o,l];return de(e)&&s.set(e,f),f}function ki(e){return e[0]!=="$"&&!Dn(e)}const ti=e=>e==="_"||e==="_ctx"||e==="$stable",ni=e=>H(e)?e.map(Ge):[Ge(e)],lu=(e,t,n)=>{if(t._n)return t;const s=xe((...r)=>ni(t(...r)),n);return s._c=!1,s},Hl=(e,t,n)=>{const s=e._ctx;for(const r in e){if(ti(r))continue;const i=e[r];if(U(i))t[r]=lu(r,i,s);else if(i!=null){const o=ni(i);t[r]=()=>o}}},Ul=(e,t)=>{const n=ni(t);e.slots.default=()=>n},Vl=(e,t,n)=>{for(const s in t)(n||!ti(s))&&(e[s]=t[s])},au=(e,t,n)=>{const s=e.slots=Bl();if(e.vnode.shapeFlag&32){const r=t._;r?(Vl(s,t,n),n&&Uo(s,"_",r,!0)):Hl(t,s)}else t&&Ul(e,t)},cu=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=ae;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Vl(r,t,n):(i=!t.$stable,Hl(t,r)),o=t}else t&&(Ul(e,t),o={default:1});if(i)for(const l in r)!ti(l)&&o[l]==null&&delete r[l]},Oe=_u;function uu(e){return fu(e)}function fu(e,t){const n=Ds();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:f,setElementText:u,parentNode:c,nextSibling:p,setScopeId:g=ot,insertStaticContent:x}=e,C=(d,h,m,v=null,_=null,b=null,$=void 0,w=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!it(d,h)&&(v=y(d),Re(d,_,b,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:E,ref:F,shapeFlag:O}=h;switch(E){case Us:j(d,h,m,v);break;case ye:I(d,h,m,v);break;case hs:d==null&&T(h,m,v,$);break;case Fe:S(d,h,m,v,_,b,$,w,A);break;default:O&1?P(d,h,m,v,_,b,$,w,A):O&6?q(d,h,m,v,_,b,$,w,A):(O&64||O&128)&&E.process(d,h,m,v,_,b,$,w,A,B)}F!=null&&_?zn(F,d&&d.ref,b,h||d,!h):F==null&&d&&d.ref!=null&&zn(d.ref,null,b,d,!0)},j=(d,h,m,v)=>{if(d==null)s(h.el=l(h.children),m,v);else{const _=h.el=d.el;h.children!==d.children&&f(_,h.children)}},I=(d,h,m,v)=>{d==null?s(h.el=a(h.children||""),m,v):h.el=d.el},T=(d,h,m,v)=>{[d.el,d.anchor]=x(d.children,h,m,v,d.el,d.anchor)},M=({el:d,anchor:h},m,v)=>{let _;for(;d&&d!==h;)_=p(d),s(d,m,v),d=_;s(h,m,v)},N=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),r(d),d=m;r(h)},P=(d,h,m,v,_,b,$,w,A)=>{if(h.type==="svg"?$="svg":h.type==="math"&&($="mathml"),d==null)L(h,m,v,_,b,$,w,A);else{const E=d.el&&d.el._isVueCE?d.el:null;try{E&&E._beginPatch(),D(d,h,_,b,$,w,A)}finally{E&&E._endPatch()}}},L=(d,h,m,v,_,b,$,w)=>{let A,E;const{props:F,shapeFlag:O,transition:z,dirs:G}=d;if(A=d.el=o(d.type,b,F&&F.is,F),O&8?u(A,d.children):O&16&&ne(d.children,A,null,v,_,sr(d,b),$,w),G&&Dt(d,null,v,"created"),W(A,d,d.scopeId,$,v),F){for(const ue in F)ue!=="value"&&!Dn(ue)&&i(A,ue,null,F[ue],b,v);"value"in F&&i(A,"value",null,F.value,b),(E=F.onVnodeBeforeMount)&&st(E,v,d)}G&&Dt(d,null,v,"beforeMount");const Z=du(_,z);Z&&z.beforeEnter(A),s(A,h,m),((E=F&&F.onVnodeMounted)||Z||G)&&Oe(()=>{E&&st(E,v,d),Z&&z.enter(A),G&&Dt(d,null,v,"mounted")},_)},W=(d,h,m,v,_)=>{if(m&&g(d,m),v)for(let b=0;b<v.length;b++)g(d,v[b]);if(_){let b=_.subTree;if(h===b||Kl(b.type)&&(b.ssContent===h||b.ssFallback===h)){const $=_.vnode;W(d,$,$.scopeId,$.slotScopeIds,_.parent)}}},ne=(d,h,m,v,_,b,$,w,A=0)=>{for(let E=A;E<d.length;E++){const F=d[E]=w?St(d[E]):Ge(d[E]);C(null,F,h,m,v,_,b,$,w)}},D=(d,h,m,v,_,b,$)=>{const w=h.el=d.el;let{patchFlag:A,dynamicChildren:E,dirs:F}=h;A|=d.patchFlag&16;const O=d.props||ae,z=h.props||ae;let G;if(m&&Lt(m,!1),(G=z.onVnodeBeforeUpdate)&&st(G,m,h,d),F&&Dt(h,d,m,"beforeUpdate"),m&&Lt(m,!0),(O.innerHTML&&z.innerHTML==null||O.textContent&&z.textContent==null)&&u(w,""),E?V(d.dynamicChildren,E,w,m,v,sr(h,_),b):$||ee(d,h,w,null,m,v,sr(h,_),b,!1),A>0){if(A&16)Y(w,O,z,m,_);else if(A&2&&O.class!==z.class&&i(w,"class",null,z.class,_),A&4&&i(w,"style",O.style,z.style,_),A&8){const Z=h.dynamicProps;for(let ue=0;ue<Z.length;ue++){const ie=Z[ue],Te=O[ie],Pe=z[ie];(Pe!==Te||ie==="value")&&i(w,ie,Te,Pe,_,m)}}A&1&&d.children!==h.children&&u(w,h.children)}else!$&&E==null&&Y(w,O,z,m,_);((G=z.onVnodeUpdated)||F)&&Oe(()=>{G&&st(G,m,h,d),F&&Dt(h,d,m,"updated")},v)},V=(d,h,m,v,_,b,$)=>{for(let w=0;w<h.length;w++){const A=d[w],E=h[w],F=A.el&&(A.type===Fe||!it(A,E)||A.shapeFlag&198)?c(A.el):m;C(A,E,F,null,v,_,b,$,!0)}},Y=(d,h,m,v,_)=>{if(h!==m){if(h!==ae)for(const b in h)!Dn(b)&&!(b in m)&&i(d,b,h[b],null,_,v);for(const b in m){if(Dn(b))continue;const $=m[b],w=h[b];$!==w&&b!=="value"&&i(d,b,w,$,_,v)}"value"in m&&i(d,"value",h.value,m.value,_)}},S=(d,h,m,v,_,b,$,w,A)=>{const E=h.el=d?d.el:l(""),F=h.anchor=d?d.anchor:l("");let{patchFlag:O,dynamicChildren:z,slotScopeIds:G}=h;G&&(w=w?w.concat(G):G),d==null?(s(E,m,v),s(F,m,v),ne(h.children||[],m,F,_,b,$,w,A)):O>0&&O&64&&z&&d.dynamicChildren&&d.dynamicChildren.length===z.length?(V(d.dynamicChildren,z,m,_,b,$,w),(h.key!=null||_&&h===_.subTree)&&Gl(d,h,!0)):ee(d,h,m,F,_,b,$,w,A)},q=(d,h,m,v,_,b,$,w,A)=>{h.slotScopeIds=w,d==null?h.shapeFlag&512?_.ctx.activate(h,m,v,$,A):he(h,m,v,_,b,$,A):_e(d,h,A)},he=(d,h,m,v,_,b,$)=>{const w=d.component=Ru(d,v,_);if(Fs(d)&&(w.ctx.renderer=B),Tu(w,!1,$),w.asyncDep){if(_&&_.registerDep(w,le,$),!d.el){const A=w.subTree=oe(ye);I(null,A,h,m),d.placeholder=A.el}}else le(w,d,h,m,_,b,$)},_e=(d,h,m)=>{const v=h.component=d.component;if(su(d,h,m))if(v.asyncDep&&!v.asyncResolved){J(v,h,m);return}else v.next=h,v.update();else h.el=d.el,v.vnode=h},le=(d,h,m,v,_,b,$)=>{const w=()=>{if(d.isMounted){let{next:O,bu:z,u:G,parent:Z,vnode:ue}=d;{const tt=Wl(d);if(tt){O&&(O.el=ue.el,J(d,O,$)),tt.asyncDep.then(()=>{d.isUnmounted||w()});return}}let ie=O,Te;Lt(d,!1),O?(O.el=ue.el,J(d,O,$)):O=ue,z&&Js(z),(Te=O.props&&O.props.onVnodeBeforeUpdate)&&st(Te,Z,O,ue),Lt(d,!0);const Pe=Ii(d),et=d.subTree;d.subTree=Pe,C(et,Pe,c(et.el),y(et),d,_,b),O.el=Pe.el,ie===null&&ei(d,Pe.el),G&&Oe(G,_),(Te=O.props&&O.props.onVnodeUpdated)&&Oe(()=>st(Te,Z,O,ue),_)}else{let O;const{el:z,props:G}=h,{bm:Z,m:ue,parent:ie,root:Te,type:Pe}=d,et=Fn(h);Lt(d,!1),Z&&Js(Z),!et&&(O=G&&G.onVnodeBeforeMount)&&st(O,ie,h),Lt(d,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Pe);const tt=d.subTree=Ii(d);C(null,tt,m,v,d,_,b),h.el=tt.el}if(ue&&Oe(ue,_),!et&&(O=G&&G.onVnodeMounted)){const tt=h;Oe(()=>st(O,ie,tt),_)}(h.shapeFlag&256||ie&&Fn(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Oe(d.a,_),d.isMounted=!0,h=m=v=null}};d.scope.on();const A=d.effect=new Ko(w);d.scope.off();const E=d.update=A.run.bind(A),F=d.job=A.runIfDirty.bind(A);F.i=d,F.id=d.uid,A.scheduler=()=>Xr(F),Lt(d,!0),E()},J=(d,h,m)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,iu(d,h.props,v,m),cu(d,h.children,m),vt(),wi(d),bt()},ee=(d,h,m,v,_,b,$,w,A=!1)=>{const E=d&&d.children,F=d?d.shapeFlag:0,O=h.children,{patchFlag:z,shapeFlag:G}=h;if(z>0){if(z&128){xt(E,O,m,v,_,b,$,w,A);return}else if(z&256){lt(E,O,m,v,_,b,$,w,A);return}}G&8?(F&16&&Be(E,_,b),O!==E&&u(m,O)):F&16?G&16?xt(E,O,m,v,_,b,$,w,A):Be(E,_,b,!0):(F&8&&u(m,""),G&16&&ne(O,m,v,_,b,$,w,A))},lt=(d,h,m,v,_,b,$,w,A)=>{d=d||fn,h=h||fn;const E=d.length,F=h.length,O=Math.min(E,F);let z;for(z=0;z<O;z++){const G=h[z]=A?St(h[z]):Ge(h[z]);C(d[z],G,m,null,_,b,$,w,A)}E>F?Be(d,_,b,!0,!1,O):ne(h,m,v,_,b,$,w,A,O)},xt=(d,h,m,v,_,b,$,w,A)=>{let E=0;const F=h.length;let O=d.length-1,z=F-1;for(;E<=O&&E<=z;){const G=d[E],Z=h[E]=A?St(h[E]):Ge(h[E]);if(it(G,Z))C(G,Z,m,null,_,b,$,w,A);else break;E++}for(;E<=O&&E<=z;){const G=d[O],Z=h[z]=A?St(h[z]):Ge(h[z]);if(it(G,Z))C(G,Z,m,null,_,b,$,w,A);else break;O--,z--}if(E>O){if(E<=z){const G=z+1,Z=G<F?h[G].el:v;for(;E<=z;)C(null,h[E]=A?St(h[E]):Ge(h[E]),m,Z,_,b,$,w,A),E++}}else if(E>z)for(;E<=O;)Re(d[E],_,b,!0),E++;else{const G=E,Z=E,ue=new Map;for(E=Z;E<=z;E++){const ke=h[E]=A?St(h[E]):Ge(h[E]);ke.key!=null&&ue.set(ke.key,E)}let ie,Te=0;const Pe=z-Z+1;let et=!1,tt=0;const Tn=new Array(Pe);for(E=0;E<Pe;E++)Tn[E]=0;for(E=G;E<=O;E++){const ke=d[E];if(Te>=Pe){Re(ke,_,b,!0);continue}let nt;if(ke.key!=null)nt=ue.get(ke.key);else for(ie=Z;ie<=z;ie++)if(Tn[ie-Z]===0&&it(ke,h[ie])){nt=ie;break}nt===void 0?Re(ke,_,b,!0):(Tn[nt-Z]=E+1,nt>=tt?tt=nt:et=!0,C(ke,h[nt],m,null,_,b,$,w,A),Te++)}const bi=et?hu(Tn):fn;for(ie=bi.length-1,E=Pe-1;E>=0;E--){const ke=Z+E,nt=h[ke],yi=h[ke+1],_i=ke+1<F?yi.el||ql(yi):v;Tn[E]===0?C(null,nt,m,_i,_,b,$,w,A):et&&(ie<0||E!==bi[ie]?Xe(nt,m,_i,2):ie--)}}},Xe=(d,h,m,v,_=null)=>{const{el:b,type:$,transition:w,children:A,shapeFlag:E}=d;if(E&6){Xe(d.component.subTree,h,m,v);return}if(E&128){d.suspense.move(h,m,v);return}if(E&64){$.move(d,h,m,B);return}if($===Fe){s(b,h,m);for(let O=0;O<A.length;O++)Xe(A[O],h,m,v);s(d.anchor,h,m);return}if($===hs){M(d,h,m);return}if(v!==2&&E&1&&w)if(v===0)w.beforeEnter(b),s(b,h,m),Oe(()=>w.enter(b),_);else{const{leave:O,delayLeave:z,afterLeave:G}=w,Z=()=>{d.ctx.isUnmounted?r(b):s(b,h,m)},ue=()=>{b._isLeaving&&b[ht](!0),O(b,()=>{Z(),G&&G()})};z?z(b,Z,ue):ue()}else s(b,h,m)},Re=(d,h,m,v=!1,_=!1)=>{const{type:b,props:$,ref:w,children:A,dynamicChildren:E,shapeFlag:F,patchFlag:O,dirs:z,cacheIndex:G}=d;if(O===-2&&(_=!1),w!=null&&(vt(),zn(w,null,m,d,!0),bt()),G!=null&&(h.renderCache[G]=void 0),F&256){h.ctx.deactivate(d);return}const Z=F&1&&z,ue=!Fn(d);let ie;if(ue&&(ie=$&&$.onVnodeBeforeUnmount)&&st(ie,h,d),F&6)Mt(d.component,m,v);else{if(F&128){d.suspense.unmount(m,v);return}Z&&Dt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,m,B,v):E&&!E.hasOnce&&(b!==Fe||O>0&&O&64)?Be(E,h,m,!1,!0):(b===Fe&&O&384||!_&&F&16)&&Be(A,h,m),v&&rn(d)}(ue&&(ie=$&&$.onVnodeUnmounted)||Z)&&Oe(()=>{ie&&st(ie,h,d),Z&&Dt(d,null,h,"unmounted")},m)},rn=d=>{const{type:h,el:m,anchor:v,transition:_}=d;if(h===Fe){on(m,v);return}if(h===hs){N(d);return}const b=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:$,delayLeave:w}=_,A=()=>$(m,b);w?w(d.el,b,A):A()}else b()},on=(d,h)=>{let m;for(;d!==h;)m=p(d),r(d),d=m;r(h)},Mt=(d,h,m)=>{const{bum:v,scope:_,job:b,subTree:$,um:w,m:A,a:E}=d;Mi(A),Mi(E),v&&Js(v),_.stop(),b&&(b.flags|=8,Re($,d,h,m)),w&&Oe(w,h),Oe(()=>{d.isUnmounted=!0},h)},Be=(d,h,m,v=!1,_=!1,b=0)=>{for(let $=b;$<d.length;$++)Re(d[$],h,m,v,_)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),m=h&&h[$c];return m?p(m):h};let k=!1;const R=(d,h,m)=>{let v;d==null?h._vnode&&(Re(h._vnode,null,null,!0),v=h._vnode.component):C(h._vnode||null,d,h,null,null,null,m),h._vnode=d,k||(k=!0,wi(v),hl(),k=!1)},B={p:C,um:Re,m:Xe,r:rn,mt:he,mc:ne,pc:ee,pbc:V,n:y,o:e};return{render:R,hydrate:void 0,createApp:Jc(R)}}function sr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Lt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function du(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gl(e,t,n=!1){const s=e.children,r=t.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=St(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Gl(o,l)),l.type===Us&&(l.patchFlag!==-1?l.el=o.el:l.__elIndex=i+(e.type===Fe?1:0)),l.type===ye&&!l.el&&(l.el=o.el)}}function hu(e){const t=e.slice(),n=[0];let s,r,i,o,l;const a=e.length;for(s=0;s<a;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<f?i=l+1:o=l;f<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Wl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Wl(t)}function Mi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ql(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ql(t.subTree):null}const Kl=e=>e.__isSuspense;let Tr=0;const pu={name:"Suspense",__isSuspense:!0,process(e,t,n,s,r,i,o,l,a,f){if(e==null)mu(t,n,s,r,i,o,l,a,f);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}vu(e,t,n,s,r,o,l,a,f)}},hydrate:bu,normalize:yu},gu=pu;function Jn(e,t){const n=e.props&&e.props[t];U(n)&&n()}function mu(e,t,n,s,r,i,o,l,a){const{p:f,o:{createElement:u}}=a,c=u("div"),p=e.suspense=Yl(e,r,s,t,c,n,i,o,l,a);f(null,p.pendingBranch=e.ssContent,c,null,s,p,i,o),p.deps>0?(Jn(e,"onPending"),Jn(e,"onFallback"),f(null,e.ssFallback,t,n,s,null,i,o),mn(p,e.ssFallback)):p.resolve(!1,!0)}function vu(e,t,n,s,r,i,o,l,{p:a,um:f,o:{createElement:u}}){const c=t.suspense=e.suspense;c.vnode=t,t.el=e.el;const p=t.ssContent,g=t.ssFallback,{activeBranch:x,pendingBranch:C,isInFallback:j,isHydrating:I}=c;if(C)c.pendingBranch=p,it(C,p)?(a(C,p,c.hiddenContainer,null,r,c,i,o,l),c.deps<=0?c.resolve():j&&(I||(a(x,g,n,s,r,null,i,o,l),mn(c,g)))):(c.pendingId=Tr++,I?(c.isHydrating=!1,c.activeBranch=C):f(C,r,c),c.deps=0,c.effects.length=0,c.hiddenContainer=u("div"),j?(a(null,p,c.hiddenContainer,null,r,c,i,o,l),c.deps<=0?c.resolve():(a(x,g,n,s,r,null,i,o,l),mn(c,g))):x&&it(x,p)?(a(x,p,n,s,r,c,i,o,l),c.resolve(!0)):(a(null,p,c.hiddenContainer,null,r,c,i,o,l),c.deps<=0&&c.resolve()));else if(x&&it(x,p))a(x,p,n,s,r,c,i,o,l),mn(c,p);else if(Jn(t,"onPending"),c.pendingBranch=p,p.shapeFlag&512?c.pendingId=p.component.suspenseId:c.pendingId=Tr++,a(null,p,c.hiddenContainer,null,r,c,i,o,l),c.deps<=0)c.resolve();else{const{timeout:T,pendingId:M}=c;T>0?setTimeout(()=>{c.pendingId===M&&c.fallback(g)},T):T===0&&c.fallback(g)}}function Yl(e,t,n,s,r,i,o,l,a,f,u=!1){const{p:c,m:p,um:g,n:x,o:{parentNode:C,remove:j}}=f;let I;const T=xu(e);T&&t&&t.pendingBranch&&(I=t.pendingId,t.deps++);const M=e.props?Vo(e.props.timeout):void 0,N=i,P={vnode:e,parent:t,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:Tr++,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(L=!1,W=!1){const{vnode:ne,activeBranch:D,pendingBranch:V,pendingId:Y,effects:S,parentComponent:q,container:he,isInFallback:_e}=P;let le=!1;P.isHydrating?P.isHydrating=!1:L||(le=D&&V.transition&&V.transition.mode==="out-in",le&&(D.transition.afterLeave=()=>{Y===P.pendingId&&(p(V,he,i===N?x(D):i,0),Er(S),_e&&ne.ssFallback&&(ne.ssFallback.el=null))}),D&&(C(D.el)===he&&(i=x(D)),g(D,q,P,!0),!le&&_e&&ne.ssFallback&&Oe(()=>ne.ssFallback.el=null,P)),le||p(V,he,i,0)),mn(P,V),P.pendingBranch=null,P.isInFallback=!1;let J=P.parent,ee=!1;for(;J;){if(J.pendingBranch){J.effects.push(...S),ee=!0;break}J=J.parent}!ee&&!le&&Er(S),P.effects=[],T&&t&&t.pendingBranch&&I===t.pendingId&&(t.deps--,t.deps===0&&!W&&t.resolve()),Jn(ne,"onResolve")},fallback(L){if(!P.pendingBranch)return;const{vnode:W,activeBranch:ne,parentComponent:D,container:V,namespace:Y}=P;Jn(W,"onFallback");const S=x(ne),q=()=>{P.isInFallback&&(c(null,L,V,S,D,null,Y,l,a),mn(P,L))},he=L.transition&&L.transition.mode==="out-in";he&&(ne.transition.afterLeave=q),P.isInFallback=!0,g(ne,D,null,!0),he||q()},move(L,W,ne){P.activeBranch&&p(P.activeBranch,L,W,ne),P.container=L},next(){return P.activeBranch&&x(P.activeBranch)},registerDep(L,W,ne){const D=!!P.pendingBranch;D&&P.deps++;const V=L.vnode.el;L.asyncDep.catch(Y=>{is(Y,L,0)}).then(Y=>{if(L.isUnmounted||P.isUnmounted||P.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:S}=L;Ir(L,Y),V&&(S.el=V);const q=!V&&L.subTree.el;W(L,S,C(V||L.subTree.el),V?null:x(L.subTree),P,o,ne),q&&(S.placeholder=null,j(q)),ei(L,S.el),D&&--P.deps===0&&P.resolve()})},unmount(L,W){P.isUnmounted=!0,P.activeBranch&&g(P.activeBranch,n,L,W),P.pendingBranch&&g(P.pendingBranch,n,L,W)}};return P}function bu(e,t,n,s,r,i,o,l,a){const f=t.suspense=Yl(t,s,n,e.parentNode,document.createElement("div"),null,r,i,o,l,!0),u=a(e,f.pendingBranch=t.ssContent,n,f,i,o);return f.deps===0&&f.resolve(!1,!0),u}function yu(e){const{shapeFlag:t,children:n}=e,s=t&32;e.ssContent=Di(s?n.default:n),e.ssFallback=s?Di(n.fallback):oe(ye)}function Di(e){let t;if(U(e)){const n=En&&e._c;n&&(e._d=!1,Rt()),e=e(),n&&(e._d=!0,t=Ne,Jl())}return H(e)&&(e=eu(e)),e=Ge(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function _u(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Er(e)}function mn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:s}=e;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,ei(s,r))}function xu(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Fe=Symbol.for("v-fgt"),Us=Symbol.for("v-txt"),ye=Symbol.for("v-cmt"),hs=Symbol.for("v-stc"),Hn=[];let Ne=null;function Rt(e=!1){Hn.push(Ne=e?null:[])}function Jl(){Hn.pop(),Ne=Hn[Hn.length-1]||null}let En=1;function ws(e,t=!1){En+=e,e<0&&Ne&&t&&(Ne.hasOnce=!0)}function Ql(e){return e.dynamicChildren=En>0?Ne||fn:null,Jl(),En>0&&Ne&&Ne.push(e),e}function ps(e,t,n,s,r,i){return Ql(X(e,t,n,s,r,i,!0))}function Pr(e,t,n,s,r){return Ql(oe(e,t,n,s,r,!0))}function Qn(e){return e?e.__v_isVNode===!0:!1}function it(e,t){return e.type===t.type&&e.key===t.key}const Zl=({key:e})=>e??null,gs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||we(e)||U(e)?{i:Me,r:e,k:t,f:!!n}:e:null);function X(e,t=null,n=null,s=0,r=null,i=e===Fe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zl(t),ref:t&&gs(t),scopeId:gl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Me};return l?(si(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=ge(n)?8:16),En>0&&!o&&Ne&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ne.push(a),a}const oe=Eu;function Eu(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Ol)&&(e=ye),Qn(e)){const l=It(e,t,!0);return n&&si(l,n),En>0&&!i&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(e)]=l:Ne.push(l)),l.patchFlag=-2,l}if(ku(e)&&(e=e.__vccOpts),t){t=Au(t);let{class:l,style:a}=t;l&&!ge(l)&&(t.class=Ls(l)),de(a)&&(Zr(a)&&!H(a)&&(a=ve({},a)),t.style=Gr(a))}const o=ge(e)?1:Kl(e)?128:bl(e)?64:de(e)?4:U(e)?2:0;return X(e,t,n,s,r,o,i,!0)}function Au(e){return e?Zr(e)||zl(e)?ve({},e):e:null}function It(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:a}=e,f=t?Cu(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Zl(f),ref:t&&t.ref?n&&i?H(i)?i.concat(gs(t)):[i,gs(t)]:gs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Yn(u,a.clone(u)),u}function ft(e=" ",t=0){return oe(Us,null,e,t)}function wu(e,t){const n=oe(hs,null,e);return n.staticCount=t,n}function tp(e="",t=!1){return t?(Rt(),Pr(ye,null,e)):oe(ye,null,e)}function Ge(e){return e==null||typeof e=="boolean"?oe(ye):H(e)?oe(Fe,null,e.slice()):Qn(e)?St(e):oe(Us,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function si(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),si(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!zl(t)?t._ctx=Me:r===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),s&64?(n=16,t=[ft(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cu(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ls([t.class,s.class]));else if(r==="style")t.style=Gr([t.style,s.style]);else if(Is(r)){const i=t[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function st(e,t,n,s=null){Je(e,t,7,[n,s])}const Su=Ml();let $u=0;function Ru(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Su,i={uid:$u++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jl(s,r),emitsOptions:Dl(s,r),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Zc.bind(null,i),e.ce&&e.ce(i),i}let Ae=null;const Xl=()=>Ae||Me;let Cs,Or;{const e=Ds(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Cs=t("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Or=t("__VUE_SSR_SETTERS__",n=>Zn=n)}const os=e=>{const t=Ae;return Cs(e),e.scope.on(),()=>{e.scope.off(),Cs(t)}},Li=()=>{Ae&&Ae.scope.off(),Cs(null)};function ea(e){return e.vnode.shapeFlag&4}let Zn=!1;function Tu(e,t=!1,n=!1){t&&Or(t);const{props:s,children:r}=e.vnode,i=ea(e);ru(e,s,i,t),au(e,r,n||t);const o=i?Pu(e,t):void 0;return t&&Or(!1),o}function Pu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Uc);const{setup:s}=n;if(s){vt();const r=e.setupContext=s.length>1?Iu(e):null,i=os(e),o=rs(s,e,0,[e.props,r]),l=Fo(o);if(bt(),i(),(l||e.sp)&&!Fn(e)&&Cl(e),l){if(o.then(Li,Li),t)return o.then(a=>{Ir(e,a)}).catch(a=>{is(a,e,0)});e.asyncDep=o}else Ir(e,o)}else ta(e)}function Ir(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:de(t)&&(e.setupState=ul(t)),ta(e)}function ta(e,t,n){const s=e.type;e.render||(e.render=s.render||ot);{const r=os(e);vt();try{Vc(e)}finally{bt(),r()}}}const Ou={get(e,t){return Ee(e,"get",""),e[t]}};function Iu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ou),slots:e.slots,emit:e.emit,expose:t}}function Vs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ul(hc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in jn)return jn[n](e)},has(t,n){return n in t||n in jn}})):e.proxy}function Nu(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function ku(e){return U(e)&&"__vccOpts"in e}const We=(e,t)=>yc(e,t,Zn);function ri(e,t,n){try{ws(-1);const s=arguments.length;return s===2?de(t)&&!H(t)?Qn(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qn(n)&&(n=[n]),oe(e,t,n))}finally{ws(1)}}const Mu="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nr;const Bi=typeof window<"u"&&window.trustedTypes;if(Bi)try{Nr=Bi.createPolicy("vue",{createHTML:e=>e})}catch{}const na=Nr?e=>Nr.createHTML(e):e=>e,Du="http://www.w3.org/2000/svg",Lu="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,zi=dt&&dt.createElement("template"),Bu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?dt.createElementNS(Du,e):t==="mathml"?dt.createElementNS(Lu,e):n?dt.createElement(e,{is:n}):dt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{zi.innerHTML=na(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=zi.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Et="transition",On="animation",Xn=Symbol("_vtc"),sa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zu=ve({},yl,sa),Fu=e=>(e.displayName="Transition",e.props=zu,e),ju=Fu((e,{slots:t})=>ri(Pc,Hu(e),t)),Bt=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},Fi=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function Hu(e){const t={};for(const S in e)S in sa||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:f=o,appearToClass:u=l,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,x=Uu(r),C=x&&x[0],j=x&&x[1],{onBeforeEnter:I,onEnter:T,onEnterCancelled:M,onLeave:N,onLeaveCancelled:P,onBeforeAppear:L=I,onAppear:W=T,onAppearCancelled:ne=M}=t,D=(S,q,he,_e)=>{S._enterCancelled=_e,zt(S,q?u:l),zt(S,q?f:o),he&&he()},V=(S,q)=>{S._isLeaving=!1,zt(S,c),zt(S,g),zt(S,p),q&&q()},Y=S=>(q,he)=>{const _e=S?W:T,le=()=>D(q,S,he);Bt(_e,[q,le]),ji(()=>{zt(q,S?a:i),ct(q,S?u:l),Fi(_e)||Hi(q,s,C,le)})};return ve(t,{onBeforeEnter(S){Bt(I,[S]),ct(S,i),ct(S,o)},onBeforeAppear(S){Bt(L,[S]),ct(S,a),ct(S,f)},onEnter:Y(!1),onAppear:Y(!0),onLeave(S,q){S._isLeaving=!0;const he=()=>V(S,q);ct(S,c),S._enterCancelled?(ct(S,p),Gi(S)):(Gi(S),ct(S,p)),ji(()=>{S._isLeaving&&(zt(S,c),ct(S,g),Fi(N)||Hi(S,s,j,he))}),Bt(N,[S,he])},onEnterCancelled(S){D(S,!1,void 0,!0),Bt(M,[S])},onAppearCancelled(S){D(S,!0,void 0,!0),Bt(ne,[S])},onLeaveCancelled(S){V(S),Bt(P,[S])}})}function Uu(e){if(e==null)return null;if(de(e))return[rr(e.enter),rr(e.leave)];{const t=rr(e);return[t,t]}}function rr(e){return Vo(e)}function ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Xn]||(e[Xn]=new Set)).add(t)}function zt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Xn];n&&(n.delete(t),n.size||(e[Xn]=void 0))}function ji(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Vu=0;function Hi(e,t,n,s){const r=e._endId=++Vu,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=Gu(e,t);if(!o)return s();const f=o+"end";let u=0;const c=()=>{e.removeEventListener(f,p),i()},p=g=>{g.target===e&&++u>=a&&c()};setTimeout(()=>{u<a&&c()},l+1),e.addEventListener(f,p)}function Gu(e,t){const n=window.getComputedStyle(e),s=x=>(n[x]||"").split(", "),r=s(`${Et}Delay`),i=s(`${Et}Duration`),o=Ui(r,i),l=s(`${On}Delay`),a=s(`${On}Duration`),f=Ui(l,a);let u=null,c=0,p=0;t===Et?o>0&&(u=Et,c=o,p=i.length):t===On?f>0&&(u=On,c=f,p=a.length):(c=Math.max(o,f),u=c>0?o>f?Et:On:null,p=u?u===Et?i.length:a.length:0);const g=u===Et&&/\b(?:transform|all)(?:,|$)/.test(s(`${Et}Property`).toString());return{type:u,timeout:c,propCount:p,hasTransform:g}}function Ui(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Vi(n)+Vi(e[s])))}function Vi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Gi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Wu(e,t,n){const s=e[Xn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ss=Symbol("_vod"),ra=Symbol("_vsh"),np={name:"show",beforeMount(e,{value:t},{transition:n}){e[Ss]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):In(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),In(e,!0),s.enter(e)):s.leave(e,()=>{In(e,!1)}):In(e,t))},beforeUnmount(e,{value:t}){In(e,t)}};function In(e,t){e.style.display=t?e[Ss]:"none",e[ra]=!t}const qu=Symbol(""),Ku=/(?:^|;)\s*display\s*:/;function Yu(e,t,n){const s=e.style,r=ge(n);let i=!1;if(n&&!r){if(t)if(ge(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ms(s,l,"")}else for(const o in t)n[o]==null&&ms(s,o,"");for(const o in n)o==="display"&&(i=!0),ms(s,o,n[o])}else if(r){if(t!==n){const o=s[qu];o&&(n+=";"+o),s.cssText=n,i=Ku.test(n)}}else t&&e.removeAttribute("style");Ss in e&&(e[Ss]=i?s.display:"",e[ra]&&(s.display="none"))}const Wi=/\s*!important$/;function ms(e,t,n){if(H(n))n.forEach(s=>ms(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ju(e,t);Wi.test(n)?e.setProperty(kt(s),n.replace(Wi,""),"important"):e[s]=n}}const qi=["Webkit","Moz","ms"],ir={};function Ju(e,t){const n=ir[t];if(n)return n;let s=He(t);if(s!=="filter"&&s in e)return ir[t]=s;s=Ms(s);for(let r=0;r<qi.length;r++){const i=qi[r]+s;if(i in e)return ir[t]=i}return t}const Ki="http://www.w3.org/1999/xlink";function Yi(e,t,n,s,r,i=Wa(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ki,t.slice(6,t.length)):e.setAttributeNS(Ki,t,n):n==null||i&&!Go(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Nt(n)?String(n):n)}function Ji(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?na(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Go(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function Qu(e,t,n,s){e.addEventListener(t,n,s)}function Zu(e,t,n,s){e.removeEventListener(t,n,s)}const Qi=Symbol("_vei");function Xu(e,t,n,s,r=null){const i=e[Qi]||(e[Qi]={}),o=i[t];if(s&&o)o.value=s;else{const[l,a]=ef(t);if(s){const f=i[t]=sf(s,r);Qu(e,l,f,a)}else o&&(Zu(e,l,o,a),i[t]=void 0)}}const Zi=/(?:Once|Passive|Capture)$/;function ef(e){let t;if(Zi.test(e)){t={};let s;for(;s=e.match(Zi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):kt(e.slice(2)),t]}let or=0;const tf=Promise.resolve(),nf=()=>or||(tf.then(()=>or=0),or=Date.now());function sf(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Je(rf(s,n.value),t,5,[s])};return n.value=e,n.attached=nf(),n}function rf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Xi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,of=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Wu(e,s,o):t==="style"?Yu(e,n,s):Is(t)?Hr(t)||Xu(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lf(e,t,s,o))?(Ji(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yi(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ge(s))?Ji(e,He(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Yi(e,t,s,o))};function lf(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xi(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xi(t)&&ge(n)?!1:t in e}const af={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sp=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=kt(r.key);if(t.some(o=>o===i||af[o]===i))return e(r)})},cf=ve({patchProp:of},Bu);let eo;function uf(){return eo||(eo=uu(cf))}const ff=(...e)=>{const t=uf().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=hf(s);if(!r)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,df(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function df(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hf(e){return ge(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vs=globalThis,ii=vs.ShadowRoot&&(vs.ShadyCSS===void 0||vs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oi=Symbol(),to=new WeakMap;let ia=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==oi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ii&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=to.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&to.set(n,t))}return t}toString(){return this.cssText}};const pf=e=>new ia(typeof e=="string"?e:e+"",void 0,oi),tn=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new ia(n,e,oi)},gf=(e,t)=>{if(ii)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),r=vs.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=n.cssText,e.appendChild(s)}},no=ii?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return pf(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mf,defineProperty:vf,getOwnPropertyDescriptor:bf,getOwnPropertyNames:yf,getOwnPropertySymbols:_f,getPrototypeOf:xf}=Object,Ot=globalThis,so=Ot.trustedTypes,Ef=so?so.emptyScript:"",lr=Ot.reactiveElementPolyfillSupport,Un=(e,t)=>e,$s={toAttribute(e,t){switch(t){case Boolean:e=e?Ef:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},li=(e,t)=>!mf(e,t),ro={attribute:!0,type:String,converter:$s,reflect:!1,useDefault:!1,hasChanged:li};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ot.litPropertyMetadata??(Ot.litPropertyMetadata=new WeakMap);let cn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ro){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,n);r!==void 0&&vf(this.prototype,t,r)}}static getPropertyDescriptor(t,n,s){const{get:r,set:i}=bf(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const l=r==null?void 0:r.call(this);i==null||i.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ro}static _$Ei(){if(this.hasOwnProperty(Un("elementProperties")))return;const t=xf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Un("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Un("properties"))){const n=this.properties,s=[...yf(n),..._f(n)];for(const r of s)this.createProperty(r,n[r])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,r]of n)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const r=this._$Eu(n,s);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)n.unshift(no(r))}else t!==void 0&&n.push(no(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gf(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostConnected)==null?void 0:s.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostDisconnected)==null?void 0:s.call(n)})}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){var i;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:$s).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,n){var i,o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const l=s.getPropertyOptions(r),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:$s;this._$Em=r;const f=a.fromAttribute(n,l.type);this[r]=f??((o=this._$Ej)==null?void 0:o.get(r))??f,this._$Em=null}}requestUpdate(t,n,s,r=!1,i){var o;if(t!==void 0){const l=this.constructor;if(r===!1&&(i=this[t]),s??(s=l.getPropertyOptions(t)),!((s.hasChanged??li)(i,n)||s.useDefault&&s.reflect&&i===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:r,wrapped:i},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:l}=o,a=this[i];l!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};cn.elementStyles=[],cn.shadowRootOptions={mode:"open"},cn[Un("elementProperties")]=new Map,cn[Un("finalized")]=new Map,lr==null||lr({ReactiveElement:cn}),(Ot.reactiveElementVersions??(Ot.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=globalThis,io=e=>e,Rs=Vn.trustedTypes,oo=Rs?Rs.createPolicy("lit-html",{createHTML:e=>e}):void 0,oa="$lit$",Tt=`lit$${Math.random().toFixed(9).slice(2)}$`,la="?"+Tt,Af=`<${la}>`,Qt=document,es=()=>Qt.createComment(""),ts=e=>e===null||typeof e!="object"&&typeof e!="function",ai=Array.isArray,wf=e=>ai(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ar=`[ 	
\f\r]`,Nn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lo=/-->/g,ao=/>/g,Ft=RegExp(`>|${ar}(?:([^\\s"'>=/]+)(${ar}*=${ar}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),co=/'/g,uo=/"/g,aa=/^(?:script|style|textarea|title)$/i,Cf=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),be=Cf(1),An=Symbol.for("lit-noChange"),ce=Symbol.for("lit-nothing"),fo=new WeakMap,Ut=Qt.createTreeWalker(Qt,129);function ca(e,t){if(!ai(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return oo!==void 0?oo.createHTML(t):t}const Sf=(e,t)=>{const n=e.length-1,s=[];let r,i=t===2?"<svg>":t===3?"<math>":"",o=Nn;for(let l=0;l<n;l++){const a=e[l];let f,u,c=-1,p=0;for(;p<a.length&&(o.lastIndex=p,u=o.exec(a),u!==null);)p=o.lastIndex,o===Nn?u[1]==="!--"?o=lo:u[1]!==void 0?o=ao:u[2]!==void 0?(aa.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=Ft):u[3]!==void 0&&(o=Ft):o===Ft?u[0]===">"?(o=r??Nn,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,f=u[1],o=u[3]===void 0?Ft:u[3]==='"'?uo:co):o===uo||o===co?o=Ft:o===lo||o===ao?o=Nn:(o=Ft,r=void 0);const g=o===Ft&&e[l+1].startsWith("/>")?" ":"";i+=o===Nn?a+Af:c>=0?(s.push(f),a.slice(0,c)+oa+a.slice(c)+Tt+g):a+Tt+(c===-2?l:g)}return[ca(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let kr=class ua{constructor({strings:t,_$litType$:n},s){let r;this.parts=[];let i=0,o=0;const l=t.length-1,a=this.parts,[f,u]=Sf(t,n);if(this.el=ua.createElement(f,s),Ut.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=Ut.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(oa)){const p=u[o++],g=r.getAttribute(c).split(Tt),x=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:x[2],strings:g,ctor:x[1]==="."?Rf:x[1]==="?"?Tf:x[1]==="@"?Pf:Gs}),r.removeAttribute(c)}else c.startsWith(Tt)&&(a.push({type:6,index:i}),r.removeAttribute(c));if(aa.test(r.tagName)){const c=r.textContent.split(Tt),p=c.length-1;if(p>0){r.textContent=Rs?Rs.emptyScript:"";for(let g=0;g<p;g++)r.append(c[g],es()),Ut.nextNode(),a.push({type:2,index:++i});r.append(c[p],es())}}}else if(r.nodeType===8)if(r.data===la)a.push({type:2,index:i});else{let c=-1;for(;(c=r.data.indexOf(Tt,c+1))!==-1;)a.push({type:7,index:i}),c+=Tt.length-1}i++}}static createElement(t,n){const s=Qt.createElement("template");return s.innerHTML=t,s}};function wn(e,t,n=e,s){var o,l;if(t===An)return t;let r=s!==void 0?(o=n._$Co)==null?void 0:o[s]:n._$Cl;const i=ts(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,n,s)),s!==void 0?(n._$Co??(n._$Co=[]))[s]=r:n._$Cl=r),r!==void 0&&(t=wn(e,r._$AS(e,t.values),r,s)),t}class $f{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??Qt).importNode(n,!0);Ut.currentNode=r;let i=Ut.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let f;a.type===2?f=new ci(i,i.nextSibling,this,t):a.type===1?f=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(f=new Of(i,this,t)),this._$AV.push(f),a=s[++l]}o!==(a==null?void 0:a.index)&&(i=Ut.nextNode(),o++)}return Ut.currentNode=Qt,r}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let ci=class fa{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,s,r){this.type=2,this._$AH=ce,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=wn(this,t,n),ts(t)?t===ce||t==null||t===""?(this._$AH!==ce&&this._$AR(),this._$AH=ce):t!==this._$AH&&t!==An&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wf(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ce&&ts(this._$AH)?this._$AA.nextSibling.data=t:this.T(Qt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=kr.createElement(ca(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(n);else{const o=new $f(r,this),l=o.u(this.options);o.p(n),this.T(l),this._$AH=o}}_$AC(t){let n=fo.get(t.strings);return n===void 0&&fo.set(t.strings,n=new kr(t)),n}k(t){ai(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,r=0;for(const i of t)r===n.length?n.push(s=new fa(this.O(es()),this.O(es()),this,this.options)):s=n[r],s._$AI(i),r++;r<n.length&&(this._$AR(s&&s._$AB.nextSibling,r),n.length=r)}_$AR(t=this._$AA.nextSibling,n){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,n);t!==this._$AB;){const r=io(t).nextSibling;io(t).remove(),t=r}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},Gs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,r,i){this.type=1,this._$AH=ce,this._$AN=void 0,this.element=t,this.name=n,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ce}_$AI(t,n=this,s,r){const i=this.strings;let o=!1;if(i===void 0)t=wn(this,t,n,0),o=!ts(t)||t!==this._$AH&&t!==An,o&&(this._$AH=t);else{const l=t;let a,f;for(t=i[0],a=0;a<i.length-1;a++)f=wn(this,l[s+a],n,a),f===An&&(f=this._$AH[a]),o||(o=!ts(f)||f!==this._$AH[a]),f===ce?t=ce:t!==ce&&(t+=(f??"")+i[a+1]),this._$AH[a]=f}o&&!r&&this.j(t)}j(t){t===ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Rf=class extends Gs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ce?void 0:t}};class Tf extends Gs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ce)}}let Pf=class extends Gs{constructor(t,n,s,r,i){super(t,n,s,r,i),this.type=5}_$AI(t,n=this){if((t=wn(this,t,n,0)??ce)===An)return;const s=this._$AH,r=t===ce&&s!==ce||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==ce&&(s===ce||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class Of{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){wn(this,t)}}const cr=Vn.litHtmlPolyfillSupport;cr==null||cr(kr,ci),(Vn.litHtmlVersions??(Vn.litHtmlVersions=[])).push("3.3.3");const If=(e,t,n)=>{const s=(n==null?void 0:n.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const i=(n==null?void 0:n.renderBefore)??null;s._$litPart$=r=new ci(t.insertBefore(es(),i),i,void 0,n??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=globalThis;let Ke=class extends cn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=If(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return An}};var Lo;Ke._$litElement$=!0,Ke.finalized=!0,(Lo=qt.litElementHydrateSupport)==null||Lo.call(qt,{LitElement:Ke});const ur=qt.litElementPolyfillSupport;ur==null||ur({LitElement:Ke});(qt.litElementVersions??(qt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nf={attribute:!0,type:String,converter:$s,reflect:!1,hasChanged:li},kf=(e=Nf,t,n)=>{const{kind:s,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),s==="accessor"){const{name:o}=n;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(s==="setter"){const{name:o}=n;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,e,!0,l)}}throw Error("Unsupported decorator location: "+s)};function K(e){return(t,n)=>typeof n=="object"?kf(e,t,n):((s,r,i)=>{const o=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),o?Object.getOwnPropertyDescriptor(r,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mf=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Df(e,t){return(n,s,r)=>{const i=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(e))??null};return Mf(n,s,{get(){return i(this)}})}}var Ws=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},vn;let ns=(vn=class extends Ke{constructor(){super(...arguments),this.variant="neutral",this.size="sm",this.outlined=!1}render(){return be`<slot></slot>`}},vn.styles=tn`
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
    `,vn);Ws([K({reflect:!0})],ns.prototype,"variant",void 0);Ws([K({reflect:!0})],ns.prototype,"size",void 0);Ws([K({type:Boolean,reflect:!0})],ns.prototype,"outlined",void 0);ns=Ws([nn("mfp-badge")],ns);var $n=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},Kt;let Zt=(Kt=class extends Ke{constructor(){super(),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button",this._onClick=()=>{var t,n;this.disabled||this.loading||(this.type==="submit"?(t=this.form)==null||t.requestSubmit():this.type==="reset"&&((n=this.form)==null||n.reset()))},this._internals=this.attachInternals()}get form(){return this._internals.form}render(){const t=this.disabled||this.loading;return be`
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
        `}},Kt.formAssociated=!0,Kt.styles=tn`
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
    `,Kt);$n([K({reflect:!0})],Zt.prototype,"variant",void 0);$n([K({reflect:!0})],Zt.prototype,"size",void 0);$n([K({type:Boolean,reflect:!0})],Zt.prototype,"disabled",void 0);$n([K({type:Boolean,reflect:!0})],Zt.prototype,"loading",void 0);$n([K()],Zt.prototype,"type",void 0);Zt=$n([nn("mfp-button")],Zt);var ui=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},bn;let Ts=(bn=class extends Ke{constructor(){super(...arguments),this.variant="default",this.padding="default",this._onSlotChange=t=>{const n=t.target,s=n.parentElement;if(!s)return;n.assignedNodes({flatten:!0}).length>0?s.removeAttribute("data-empty"):s.setAttribute("data-empty","")}}render(){return be`
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
        `}},bn.styles=tn`
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
    `,bn);ui([K({reflect:!0})],Ts.prototype,"variant",void 0);ui([K({reflect:!0})],Ts.prototype,"padding",void 0);Ts=ui([nn("mfp-card")],Ts);var Rn=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},yn;let Xt=(yn=class extends Ke{constructor(){super(...arguments),this.variant="ghost",this.size="md",this.disabled=!1,this.type="button",this.label=""}render(){return this.label||console.warn("<mfp-icon-button> requires a `label` attribute for accessibility"),be`
            <button
                type=${this.type}
                ?disabled=${this.disabled}
                aria-label=${this.label}
                part="button"
            >
                <slot></slot>
            </button>
        `}},yn.styles=tn`
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
    `,yn);Rn([K({reflect:!0})],Xt.prototype,"variant",void 0);Rn([K({reflect:!0})],Xt.prototype,"size",void 0);Rn([K({type:Boolean,reflect:!0})],Xt.prototype,"disabled",void 0);Rn([K()],Xt.prototype,"type",void 0);Rn([K()],Xt.prototype,"label",void 0);Xt=Rn([nn("mfp-icon-button")],Xt);var Ve=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Lf=0;var Yt;let De=(Yt=class extends Ke{constructor(){super(),this.size="md",this.type="text",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.readonly=!1,this.required=!1,this._id=`mfp-input-${++Lf}`,this._onInput=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please fill out this field."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,s=`${n}-hint`,r=`${n}-error`,i=t?r:this.hint?s:void 0;return be`
            ${this.label?be`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?be`<span class="required" aria-hidden="true">*</span>`:ce}
                  </label>`:ce}
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
                    aria-describedby=${i??ce}
                    @input=${this._onInput}
                    @change=${this._onChange}
                />
                <slot name="suffix"></slot>
            </div>
            ${t?be`<p part="error" id=${r} class="error" role="alert">${this.error}</p>`:this.hint?be`<p part="hint" id=${s} class="hint">${this.hint}</p>`:ce}
        `}},Yt.styles=tn`
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
    `,Yt.formAssociated=!0,Yt);Ve([K({reflect:!0})],De.prototype,"size",void 0);Ve([K()],De.prototype,"type",void 0);Ve([K()],De.prototype,"value",void 0);Ve([K()],De.prototype,"name",void 0);Ve([K()],De.prototype,"label",void 0);Ve([K()],De.prototype,"placeholder",void 0);Ve([K()],De.prototype,"hint",void 0);Ve([K()],De.prototype,"error",void 0);Ve([K({type:Boolean,reflect:!0})],De.prototype,"disabled",void 0);Ve([K({type:Boolean,reflect:!0})],De.prototype,"readonly",void 0);Ve([K({type:Boolean,reflect:!0})],De.prototype,"required",void 0);De=Ve([nn("mfp-input")],De);var Ze=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Bf=0;var Jt;let Ue=(Jt=class extends Ke{constructor(){super(),this.size="md",this.value="",this.name="",this.label="",this.placeholder="",this.hint="",this.error="",this.disabled=!1,this.required=!1,this._id=`mfp-select-${++Bf}`,this._onChange=t=>{const n=t.target;this.value=n.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:n.value}}))},this._onSlotChange=t=>{const n=t.target,s=this._selectEl;if(!s)return;const r=this.value;s.querySelectorAll("[data-mfp-cloned]").forEach(o=>o.remove());const i=n.assignedNodes({flatten:!0}).filter(o=>o.nodeType===Node.ELEMENT_NODE&&(o.tagName==="OPTION"||o.tagName==="OPTGROUP"));for(const o of i){const l=o.cloneNode(!0);l.setAttribute("data-mfp-cloned",""),s.appendChild(l)}s.value=r},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},"Please select an option."):this._internals.setValidity({})}willUpdate(t){(t.has("value")||t.has("required")||t.has("error"))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){const t=this.error.length>0,n=this._id,s=`${n}-hint`,r=`${n}-error`,i=t?r:this.hint?s:void 0;return be`
            ${this.label?be`<label part="label" for=${n}>
                      ${this.label}
                      ${this.required?be`<span class="required" aria-hidden="true">*</span>`:ce}
                  </label>`:ce}
            <div part="control" class="control ${t?"invalid":""}">
                <select
                    id=${n}
                    part="select"
                    .value=${this.value}
                    name=${this.name}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    aria-invalid=${t?"true":"false"}
                    aria-describedby=${i??ce}
                    @change=${this._onChange}
                >
                    ${this.placeholder?be`<option value="" disabled selected hidden data-mfp-placeholder>
                              ${this.placeholder}
                          </option>`:ce}
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
            ${t?be`<p part="error" id=${r} class="error" role="alert">${this.error}</p>`:this.hint?be`<p part="hint" id=${s} class="hint">${this.hint}</p>`:ce}
        `}},Jt.styles=tn`
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
    `,Jt.formAssociated=!0,Jt);Ze([K({reflect:!0})],Ue.prototype,"size",void 0);Ze([K()],Ue.prototype,"value",void 0);Ze([K()],Ue.prototype,"name",void 0);Ze([K()],Ue.prototype,"label",void 0);Ze([K()],Ue.prototype,"placeholder",void 0);Ze([K()],Ue.prototype,"hint",void 0);Ze([K()],Ue.prototype,"error",void 0);Ze([K({type:Boolean,reflect:!0})],Ue.prototype,"disabled",void 0);Ze([K({type:Boolean,reflect:!0})],Ue.prototype,"required",void 0);Ze([Df("select")],Ue.prototype,"_selectEl",void 0);Ue=Ze([nn("mfp-select")],Ue);var fi=function(e,t,n,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},_n;let Ps=(_n=class extends Ke{constructor(){super(...arguments),this.size="md",this.label="Loading"}render(){return be`<div class="ring" role="status" aria-label=${this.label}></div>`}},_n.styles=tn`
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
    `,_n);fi([K({reflect:!0})],Ps.prototype,"size",void 0);fi([K()],Ps.prototype,"label",void 0);Ps=fi([nn("mfp-spinner")],Ps);const zf=`/*
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
`,Ff=`/*
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
`,jf=`/*
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
`,Hf=`/*
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
`,Uf=`/*
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
`,da="mfp-theme",ho="mfp-active-theme",Os={blue:{label:"Blue (default)",css:zf},warm:{label:"Warm",css:Ff},orange:{label:"Orange",css:jf},earth:{label:"Earth",css:Hf},portfolio:{label:"Portfolio (navy)",css:Uf}},Vf="portfolio";function ha(){const e=localStorage.getItem(da);return e&&e in Os?e:Vf}function pa(e){if(!(e in Os))return;let t=document.getElementById(ho);t||(t=document.createElement("style"),t.id=ho,document.head.appendChild(t)),t.textContent=Os[e].css,localStorage.setItem(da,e)}function Gf(){pa(ha())}const ga=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Wf={name:"App",data(){return{collapse:!1,currentYear:new Date().getFullYear(),themes:Os,activeTheme:ha()}},methods:{closeAll(){this.collapse=!1},onThemeChange(e){var n;const t=(n=e.detail)==null?void 0:n.value;t&&(pa(t),this.activeTheme=t)}}},qf={class:"h-100 m-0 p-0"},Kf={class:"navbar navbar-expand-lg navbar-dark sticky-top",style:{"background-color":"#1a2744"}},Yf={class:"container-fluid"},Jf={class:"navbar-nav me-auto"},Qf={class:"nav-item"},Zf={class:"nav-item"},Xf={class:"nav-item"},ed={class:"nav-item"},td={class:"nav-item"},nd={class:"nav-item"},sd={class:"navbar-nav ms-auto align-items-lg-center"},rd={class:"nav-item"},id={class:"nav-item theme-switcher"},od=["value"],ld=["value"],ad={class:"site-footer"},cd={class:"container-fluid d-flex flex-wrap justify-content-between align-items-center px-4"},ud={class:"footer-copy"};function fd(e,t,n,s,r,i){const o=wr("router-link"),l=wr("router-view");return Rt(),ps("div",qf,[X("nav",Kf,[X("div",Yf,[oe(o,{class:"navbar-brand",to:"/"},{default:xe(()=>[...t[2]||(t[2]=[ft("Melissa Freundschuh-Pula",-1)])]),_:1}),X("button",{class:"navbar-toggler",type:"button",onClick:t[0]||(t[0]=a=>r.collapse=!r.collapse),"aria-label":"Toggle navigation"},[...t[3]||(t[3]=[X("i",{class:"fas fa-bars",style:{color:"white","font-size":"1.25rem"}},null,-1)])]),X("div",{class:Ls(["collapse navbar-collapse",{show:r.collapse}])},[X("ul",Jf,[X("li",Qf,[oe(o,{to:"/",class:"nav-link",onClick:i.closeAll},{default:xe(()=>[...t[4]||(t[4]=[ft("Home",-1)])]),_:1},8,["onClick"])]),X("li",Zf,[oe(o,{to:"/about",class:"nav-link",onClick:i.closeAll},{default:xe(()=>[...t[5]||(t[5]=[ft("About",-1)])]),_:1},8,["onClick"])]),X("li",Xf,[oe(o,{to:"/resume",class:"nav-link",onClick:i.closeAll},{default:xe(()=>[...t[6]||(t[6]=[ft("Resume",-1)])]),_:1},8,["onClick"])]),X("li",ed,[oe(o,{to:"/portfolio",class:"nav-link",onClick:i.closeAll},{default:xe(()=>[...t[7]||(t[7]=[ft("Projects",-1)])]),_:1},8,["onClick"])]),X("li",td,[oe(o,{to:"/python",class:"nav-link",onClick:i.closeAll},{default:xe(()=>[...t[8]||(t[8]=[ft("Python",-1)])]),_:1},8,["onClick"])]),X("li",nd,[oe(o,{to:"/data",class:"nav-link",onClick:i.closeAll},{default:xe(()=>[...t[9]||(t[9]=[ft("Data Analysis",-1)])]),_:1},8,["onClick"])])]),X("ul",sd,[X("li",rd,[oe(o,{to:"/contact",class:"nav-link",onClick:i.closeAll},{default:xe(()=>[...t[10]||(t[10]=[ft("Contact",-1)])]),_:1},8,["onClick"])]),X("li",id,[X("mfp-select",{size:"sm","aria-label":"Theme",value:r.activeTheme,onChange:t[1]||(t[1]=(...a)=>i.onThemeChange&&i.onThemeChange(...a))},[(Rt(!0),ps(Fe,null,Hc(r.themes,(a,f)=>(Rt(),ps("option",{key:f,value:f},mr(a.label),9,ld))),128))],40,od)])])],2)])]),oe(l,null,{default:xe(({Component:a})=>[oe(ju,{name:"fade",mode:"out-in"},{default:xe(()=>[(Rt(),Pr(gu,null,{fallback:xe(()=>[...t[11]||(t[11]=[X("div",{class:"route-loading"},[X("mfp-spinner",{size:"lg",label:"Loading page"})],-1)])]),default:xe(()=>[(Rt(),Pr(jc(a)))]),_:2},1024))]),_:2},1024)]),_:1}),X("footer",ad,[X("div",cd,[X("span",ud,"© "+mr(r.currentYear)+" Melissa Freundschuh-Pula",1),t[12]||(t[12]=wu('<div class="footer-links"><a href="https://github.com/melissapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a><a href="mailto:melissa_m_24@yahoo.com" aria-label="Email"><i class="fas fa-envelope"></i></a></div>',1))])])])}const dd=ga(Wf,[["render",fd]]),hd="modulepreload",pd=function(e){return"/"+e},po={},jt=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(a=>{if(a=pd(a),a in po)return;po[a]=!0;const f=a.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":hd,f||(c.as="script"),c.crossOrigin="",c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),f)return new Promise((p,g)=>{c.addEventListener("load",p),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const un=typeof document<"u";function ma(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function gd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ma(e.default)}const se=Object.assign;function fr(e,t){const n={};for(const s in t){const r=t[s];n[s]=Qe(r)?r.map(e):e(r)}return n}const Gn=()=>{},Qe=Array.isArray;function go(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const va=/#/g,md=/&/g,vd=/\//g,bd=/=/g,yd=/\?/g,ba=/\+/g,_d=/%5B/g,xd=/%5D/g,ya=/%5E/g,Ed=/%60/g,_a=/%7B/g,Ad=/%7C/g,xa=/%7D/g,wd=/%20/g;function di(e){return e==null?"":encodeURI(""+e).replace(Ad,"|").replace(_d,"[").replace(xd,"]")}function Cd(e){return di(e).replace(_a,"{").replace(xa,"}").replace(ya,"^")}function Mr(e){return di(e).replace(ba,"%2B").replace(wd,"+").replace(va,"%23").replace(md,"%26").replace(Ed,"`").replace(_a,"{").replace(xa,"}").replace(ya,"^")}function Sd(e){return Mr(e).replace(bd,"%3D")}function $d(e){return di(e).replace(va,"%23").replace(yd,"%3F")}function Rd(e){return $d(e).replace(vd,"%2F")}function ss(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Td=/\/$/,Pd=e=>e.replace(Td,"");function dr(e,t,n="/"){let s,r={},i="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(s=t.slice(0,a),i=t.slice(a,l>0?l:t.length),r=e(i.slice(1))),l>=0&&(s=s||t.slice(0,l),o=t.slice(l,t.length)),s=kd(s??t,n),{fullPath:s+i+o,path:s,query:r,hash:ss(o)}}function Od(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function mo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Id(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Cn(t.matched[s],n.matched[r])&&Ea(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ea(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Nd(e[n],t[n]))return!1;return!0}function Nd(e,t){return Qe(e)?vo(e,t):Qe(t)?vo(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function vo(e,t){return Qe(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function kd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Dr=function(e){return e.pop="pop",e.push="push",e}({}),hr=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Md(e){if(!e)if(un){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pd(e)}const Dd=/^[^#]+#/;function Ld(e,t){return e.replace(Dd,"#")+t}function Bd(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const qs=()=>({left:window.scrollX,top:window.scrollY});function zd(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Bd(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function bo(e,t){return(history.state?history.state.position-t:-1)+e}const Lr=new Map;function Fd(e,t){Lr.set(e,t)}function jd(e){const t=Lr.get(e);return Lr.delete(e),t}function Hd(e){return typeof e=="string"||e&&typeof e=="object"}function Aa(e){return typeof e=="string"||typeof e=="symbol"}let pe=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const wa=Symbol("");pe.MATCHER_NOT_FOUND+"",pe.NAVIGATION_GUARD_REDIRECT+"",pe.NAVIGATION_ABORTED+"",pe.NAVIGATION_CANCELLED+"",pe.NAVIGATION_DUPLICATED+"";function Sn(e,t){return se(new Error,{type:e,[wa]:!0},t)}function ut(e,t){return e instanceof Error&&wa in e&&(t==null||!!(e.type&t))}const Ud=["params","query","hash"];function Vd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Ud)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Gd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(ba," "),i=r.indexOf("="),o=ss(i<0?r:r.slice(0,i)),l=i<0?null:ss(r.slice(i+1));if(o in t){let a=t[o];Qe(a)||(a=t[o]=[a]),a.push(l)}else t[o]=l}return t}function yo(e){let t="";for(let n in e){const s=e[n];if(n=Sd(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(s)?s.map(r=>r&&Mr(r)):[s&&Mr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Wd(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Qe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const qd=Symbol(""),_o=Symbol(""),hi=Symbol(""),Ca=Symbol(""),Br=Symbol("");function kn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $t(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,a)=>{const f=p=>{p===!1?a(Sn(pe.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?a(p):Hd(p)?a(Sn(pe.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),l())},u=i(()=>e.call(s&&s.instances[r],t,n,f));let c=Promise.resolve(u);e.length<3&&(c=c.then(f)),c.catch(p=>a(p))})}function pr(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const l in o.components){let a=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(ma(a)){const f=(a.__vccOpts||a)[t];f&&i.push($t(f,n,s,o,l,r))}else{let f=a();i.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const c=gd(u)?u.default:u;o.mods[l]=u,o.components[l]=c;const p=(c.__vccOpts||c)[t];return p&&$t(p,n,s,o,l,r)()}))}}return i}function Kd(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(f=>Cn(f,l))?s.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(f=>Cn(f,a))||r.push(a))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Yd=()=>location.protocol+"//"+location.host;function Sa(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),mo(l,"")}return mo(n,e)+s+r}function Jd(e,t,n,s){let r=[],i=[],o=null;const l=({state:p})=>{const g=Sa(e,location),x=n.value,C=t.value;let j=0;if(p){if(n.value=g,t.value=p,o&&o===x){o=null;return}j=C?p.position-C.position:0}else s(g);r.forEach(I=>{I(n.value,x,{delta:j,type:Dr.pop,direction:j?j>0?hr.forward:hr.back:hr.unknown})})};function a(){o=n.value}function f(p){r.push(p);const g=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(se({},p.state,{scroll:qs()}),"")}}function c(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:a,listen:f,destroy:c}}function xo(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?qs():null}}function Qd(e){const{history:t,location:n}=window,s={value:Sa(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,f,u){const c=e.indexOf("#"),p=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+a:Yd()+e+a;try{t[u?"replaceState":"pushState"](f,"",p),r.value=f}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(a,f){i(a,se({},t.state,xo(r.value.back,a,r.value.forward,!0),f,{position:r.value.position}),!0),s.value=a}function l(a,f){const u=se({},r.value,t.state,{forward:a,scroll:qs()});i(u.current,u,!0),i(a,se({},xo(s.value,a,null),{position:u.position+1},f),!1),s.value=a}return{location:s,state:r,push:l,replace:o}}function Zd(e){e=Md(e);const t=Qd(e),n=Jd(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=se({location:"",base:e,go:s,createHref:Ld.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Xd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Zd(e)}let Vt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var me=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(me||{});const eh={type:Vt.Static,value:""},th=/[a-zA-Z0-9_]/;function nh(e){if(!e)return[[]];if(e==="/")return[[eh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=me.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,a,f="",u="";function c(){f&&(n===me.Static?i.push({type:Vt.Static,value:f}):n===me.Param||n===me.ParamRegExp||n===me.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Vt.Param,value:f,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==me.ParamRegExp){s=n,n=me.EscapeNext;continue}switch(n){case me.Static:a==="/"?(f&&c(),o()):a===":"?(c(),n=me.Param):p();break;case me.EscapeNext:p(),n=s;break;case me.Param:a==="("?n=me.ParamRegExp:th.test(a)?p():(c(),n=me.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case me.ParamRegExp:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=me.ParamRegExpEnd:u+=a;break;case me.ParamRegExpEnd:c(),n=me.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===me.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),c(),o(),r}const Eo="[^/]+?",sh={sensitive:!1,strict:!1,start:!0,end:!0};var Se=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Se||{});const rh=/[.+*?^${}()[\]/\\]/g;function ih(e,t){const n=se({},sh,t),s=[];let r=n.start?"^":"";const i=[];for(const f of e){const u=f.length?[]:[Se.Root];n.strict&&!f.length&&(r+="/");for(let c=0;c<f.length;c++){const p=f[c];let g=Se.Segment+(n.sensitive?Se.BonusCaseSensitive:0);if(p.type===Vt.Static)c||(r+="/"),r+=p.value.replace(rh,"\\$&"),g+=Se.Static;else if(p.type===Vt.Param){const{value:x,repeatable:C,optional:j,regexp:I}=p;i.push({name:x,repeatable:C,optional:j});const T=I||Eo;if(T!==Eo){g+=Se.BonusCustomRegExp;try{`${T}`}catch(N){throw new Error(`Invalid custom RegExp for param "${x}" (${T}): `+N.message)}}let M=C?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;c||(M=j&&f.length<2?`(?:/${M})`:"/"+M),j&&(M+="?"),r+=M,g+=Se.Dynamic,j&&(g+=Se.BonusOptional),C&&(g+=Se.BonusRepeatable),T===".*"&&(g+=Se.BonusWildcard)}u.push(g)}s.push(u)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=Se.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(f){const u=f.match(o),c={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",x=i[p-1];c[x.name]=g&&x.repeatable?g.split("/"):g}return c}function a(f){let u="",c=!1;for(const p of e){(!c||!u.endsWith("/"))&&(u+="/"),c=!1;for(const g of p)if(g.type===Vt.Static)u+=g.value;else if(g.type===Vt.Param){const{value:x,repeatable:C,optional:j}=g,I=x in f?f[x]:"";if(Qe(I)&&!C)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const T=Qe(I)?I.join("/"):I;if(!T)if(j)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):c=!0);else throw new Error(`Missing required param "${x}"`);u+=T}}return u||"/"}return{re:o,score:s,keys:i,parse:l,stringify:a}}function oh(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Se.Static+Se.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Se.Static+Se.Segment?1:-1:0}function $a(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=oh(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ao(s))return 1;if(Ao(r))return-1}return r.length-s.length}function Ao(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lh={strict:!1,end:!0,sensitive:!1};function ah(e,t,n){const s=ih(nh(e.path),n),r=se(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function ch(e,t){const n=[],s=new Map;t=go(lh,t);function r(c){return s.get(c)}function i(c,p,g){const x=!g,C=Co(c);C.aliasOf=g&&g.record;const j=go(t,c),I=[C];if("alias"in c){const N=typeof c.alias=="string"?[c.alias]:c.alias;for(const P of N)I.push(Co(se({},C,{components:g?g.record.components:C.components,path:P,aliasOf:g?g.record:C})))}let T,M;for(const N of I){const{path:P}=N;if(p&&P[0]!=="/"){const L=p.record.path,W=L[L.length-1]==="/"?"":"/";N.path=p.record.path+(P&&W+P)}if(T=ah(N,p,j),g?g.alias.push(T):(M=M||T,M!==T&&M.alias.push(T),x&&c.name&&!So(T)&&o(c.name)),Ra(T)&&a(T),C.children){const L=C.children;for(let W=0;W<L.length;W++)i(L[W],T,g&&g.children[W])}g=g||T}return M?()=>{o(M)}:Gn}function o(c){if(Aa(c)){const p=s.get(c);p&&(s.delete(c),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(c);p>-1&&(n.splice(p,1),c.record.name&&s.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function l(){return n}function a(c){const p=dh(c,n);n.splice(p,0,c),c.record.name&&!So(c)&&s.set(c.record.name,c)}function f(c,p){let g,x={},C,j;if("name"in c&&c.name){if(g=s.get(c.name),!g)throw Sn(pe.MATCHER_NOT_FOUND,{location:c});j=g.record.name,x=se(wo(p.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),c.params&&wo(c.params,g.keys.map(M=>M.name))),C=g.stringify(x)}else if(c.path!=null)C=c.path,g=n.find(M=>M.re.test(C)),g&&(x=g.parse(C),j=g.record.name);else{if(g=p.name?s.get(p.name):n.find(M=>M.re.test(p.path)),!g)throw Sn(pe.MATCHER_NOT_FOUND,{location:c,currentLocation:p});j=g.record.name,x=se({},p.params,c.params),C=g.stringify(x)}const I=[];let T=g;for(;T;)I.unshift(T.record),T=T.parent;return{name:j,path:C,params:x,matched:I,meta:fh(I)}}e.forEach(c=>i(c));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:f,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:r}}function wo(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Co(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:uh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function uh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function So(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fh(e){return e.reduce((t,n)=>se(t,n.meta),{})}function dh(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;$a(e,t[i])<0?s=i:n=i+1}const r=hh(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function hh(e){let t=e;for(;t=t.parent;)if(Ra(t)&&$a(e,t)===0)return t}function Ra({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function $o(e){const t=mt(hi),n=mt(Ca),s=We(()=>{const a=hn(e.to);return t.resolve(a)}),r=We(()=>{const{matched:a}=s.value,{length:f}=a,u=a[f-1],c=n.matched;if(!u||!c.length)return-1;const p=c.findIndex(Cn.bind(null,u));if(p>-1)return p;const g=Ro(a[f-2]);return f>1&&Ro(u)===g&&c[c.length-1].path!==g?c.findIndex(Cn.bind(null,a[f-2])):p}),i=We(()=>r.value>-1&&bh(n.params,s.value.params)),o=We(()=>r.value>-1&&r.value===n.matched.length-1&&Ea(n.params,s.value.params));function l(a={}){if(vh(a)){const f=t[hn(e.replace)?"replace":"push"](hn(e.to)).catch(Gn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:We(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function ph(e){return e.length===1?e[0]:e}const gh=wl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$o,setup(e,{slots:t}){const n=zs($o(e)),{options:s}=mt(hi),r=We(()=>({[To(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[To(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&ph(t.default(n));return e.custom?i:ri("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),mh=gh;function vh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bh(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Qe(r)||r.length!==s.length||s.some((i,o)=>i.valueOf()!==r[o].valueOf()))return!1}return!0}function Ro(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const To=(e,t,n)=>e??t??n,yh=wl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=mt(Br),r=We(()=>e.route||s.value),i=mt(_o,0),o=We(()=>{let f=hn(i);const{matched:u}=r.value;let c;for(;(c=u[f])&&!c.components;)f++;return f}),l=We(()=>r.value.matched[o.value]);fs(_o,We(()=>o.value+1)),fs(qd,l),fs(Br,r);const a=pc();return ds(()=>[a.value,l.value,e.name],([f,u,c],[p,g,x])=>{u&&(u.instances[c]=f,g&&g!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),f&&u&&(!g||!Cn(u,g)||!p)&&(u.enterCallbacks[c]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=r.value,u=e.name,c=l.value,p=c&&c.components[u];if(!p)return Po(n.default,{Component:p,route:f});const g=c.props[u],x=g?g===!0?f.params:typeof g=="function"?g(f):g:null,j=ri(p,se({},x,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(c.instances[u]=null)},ref:a}));return Po(n.default,{Component:j,route:f})||j}}});function Po(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const _h=yh;function xh(e){const t=ch(e.routes,e),n=e.parseQuery||Gd,s=e.stringifyQuery||yo,r=e.history,i=kn(),o=kn(),l=kn(),a=gc(At);let f=At;un&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fr.bind(null,y=>""+y),c=fr.bind(null,Rd),p=fr.bind(null,ss);function g(y,k){let R,B;return Aa(y)?(R=t.getRecordMatcher(y),B=k):B=y,t.addRoute(B,R)}function x(y){const k=t.getRecordMatcher(y);k&&t.removeRoute(k)}function C(){return t.getRoutes().map(y=>y.record)}function j(y){return!!t.getRecordMatcher(y)}function I(y,k){if(k=se({},k||a.value),typeof y=="string"){const m=dr(n,y,k.path),v=t.resolve({path:m.path},k),_=r.createHref(m.fullPath);return se(m,v,{params:p(v.params),hash:ss(m.hash),redirectedFrom:void 0,href:_})}let R;if(y.path!=null)R=se({},y,{path:dr(n,y.path,k.path).path});else{const m=se({},y.params);for(const v in m)m[v]==null&&delete m[v];R=se({},y,{params:c(m)}),k.params=c(k.params)}const B=t.resolve(R,k),Q=y.hash||"";B.params=u(p(B.params));const d=Od(s,se({},y,{hash:Cd(Q),path:B.path})),h=r.createHref(d);return se({fullPath:d,hash:Q,query:s===yo?Wd(y.query):y.query||{}},B,{redirectedFrom:void 0,href:h})}function T(y){return typeof y=="string"?dr(n,y,a.value.path):se({},y)}function M(y,k){if(f!==y)return Sn(pe.NAVIGATION_CANCELLED,{from:k,to:y})}function N(y){return W(y)}function P(y){return N(se(T(y),{replace:!0}))}function L(y,k){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:B}=R;let Q=typeof B=="function"?B(y,k):B;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=T(Q):{path:Q},Q.params={}),se({query:y.query,hash:y.hash,params:Q.path!=null?{}:y.params},Q)}}function W(y,k){const R=f=I(y),B=a.value,Q=y.state,d=y.force,h=y.replace===!0,m=L(R,B);if(m)return W(se(T(m),{state:typeof m=="object"?se({},Q,m.state):Q,force:d,replace:h}),k||R);const v=R;v.redirectedFrom=k;let _;return!d&&Id(s,B,R)&&(_=Sn(pe.NAVIGATION_DUPLICATED,{to:v,from:B}),Xe(B,B,!0,!1)),(_?Promise.resolve(_):V(v,B)).catch(b=>ut(b)?ut(b,pe.NAVIGATION_GUARD_REDIRECT)?b:xt(b):ee(b,v,B)).then(b=>{if(b){if(ut(b,pe.NAVIGATION_GUARD_REDIRECT))return W(se({replace:h},T(b.to),{state:typeof b.to=="object"?se({},Q,b.to.state):Q,force:d}),k||v)}else b=S(v,B,!0,h,Q);return Y(v,B,b),b})}function ne(y,k){const R=M(y,k);return R?Promise.reject(R):Promise.resolve()}function D(y){const k=on.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function V(y,k){let R;const[B,Q,d]=Kd(y,k);R=pr(B.reverse(),"beforeRouteLeave",y,k);for(const m of B)m.leaveGuards.forEach(v=>{R.push($t(v,y,k))});const h=ne.bind(null,y,k);return R.push(h),Be(R).then(()=>{R=[];for(const m of i.list())R.push($t(m,y,k));return R.push(h),Be(R)}).then(()=>{R=pr(Q,"beforeRouteUpdate",y,k);for(const m of Q)m.updateGuards.forEach(v=>{R.push($t(v,y,k))});return R.push(h),Be(R)}).then(()=>{R=[];for(const m of d)if(m.beforeEnter)if(Qe(m.beforeEnter))for(const v of m.beforeEnter)R.push($t(v,y,k));else R.push($t(m.beforeEnter,y,k));return R.push(h),Be(R)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),R=pr(d,"beforeRouteEnter",y,k,D),R.push(h),Be(R))).then(()=>{R=[];for(const m of o.list())R.push($t(m,y,k));return R.push(h),Be(R)}).catch(m=>ut(m,pe.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function Y(y,k,R){l.list().forEach(B=>D(()=>B(y,k,R)))}function S(y,k,R,B,Q){const d=M(y,k);if(d)return d;const h=k===At,m=un?history.state:{};R&&(B||h?r.replace(y.fullPath,se({scroll:h&&m&&m.scroll},Q)):r.push(y.fullPath,Q)),a.value=y,Xe(y,k,R,h),xt()}let q;function he(){q||(q=r.listen((y,k,R)=>{if(!Mt.listening)return;const B=I(y),Q=L(B,Mt.currentRoute.value);if(Q){W(se(Q,{replace:!0,force:!0}),B).catch(Gn);return}f=B;const d=a.value;un&&Fd(bo(d.fullPath,R.delta),qs()),V(B,d).catch(h=>ut(h,pe.NAVIGATION_ABORTED|pe.NAVIGATION_CANCELLED)?h:ut(h,pe.NAVIGATION_GUARD_REDIRECT)?(W(se(T(h.to),{force:!0}),B).then(m=>{ut(m,pe.NAVIGATION_ABORTED|pe.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Dr.pop&&r.go(-1,!1)}).catch(Gn),Promise.reject()):(R.delta&&r.go(-R.delta,!1),ee(h,B,d))).then(h=>{h=h||S(B,d,!1),h&&(R.delta&&!ut(h,pe.NAVIGATION_CANCELLED)?r.go(-R.delta,!1):R.type===Dr.pop&&ut(h,pe.NAVIGATION_ABORTED|pe.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),Y(B,d,h)}).catch(Gn)}))}let _e=kn(),le=kn(),J;function ee(y,k,R){xt(y);const B=le.list();return B.length?B.forEach(Q=>Q(y,k,R)):console.error(y),Promise.reject(y)}function lt(){return J&&a.value!==At?Promise.resolve():new Promise((y,k)=>{_e.add([y,k])})}function xt(y){return J||(J=!y,he(),_e.list().forEach(([k,R])=>y?R(y):k()),_e.reset()),y}function Xe(y,k,R,B){const{scrollBehavior:Q}=e;if(!un||!Q)return Promise.resolve();const d=!R&&jd(bo(y.fullPath,0))||(B||!R)&&history.state&&history.state.scroll||null;return _s().then(()=>Q(y,k,d)).then(h=>h&&zd(h)).catch(h=>ee(h,y,k))}const Re=y=>r.go(y);let rn;const on=new Set,Mt={currentRoute:a,listening:!0,addRoute:g,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:j,getRoutes:C,resolve:I,options:e,push:N,replace:P,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:le.add,isReady:lt,install(y){y.component("RouterLink",mh),y.component("RouterView",_h),y.config.globalProperties.$router=Mt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>hn(a)}),un&&!rn&&a.value===At&&(rn=!0,N(r.location).catch(B=>{}));const k={};for(const B in At)Object.defineProperty(k,B,{get:()=>a.value[B],enumerable:!0});y.provide(hi,Mt),y.provide(Ca,al(k)),y.provide(Br,a);const R=y.unmount;on.add(y),y.unmount=function(){on.delete(y),on.size<1&&(f=At,q&&q(),q=null,a.value=At,rn=!1,J=!1),R()}}};function Be(y){return y.reduce((k,R)=>k.then(()=>D(R)),Promise.resolve())}return Mt}const Eh="/assets/Family-TJUrK4ZO.jpeg",Ah={name:"Home"},wh={class:"container-fluid mt-0 pt-0"},Ch={class:"row align-items-center justify-content-center",style:{"min-height":"calc(100vh - 56px)","background-color":"#f8f9fa",overflow:"hidden"}},Sh={class:"col-12 col-md-6 col-lg-5 ps-md-5 mt-4 mt-md-0"},$h={class:"mt-4 hero-actions"},Rh=["onClick"],Th=["onClick"],Ph=["onClick"];function Oh(e,t,n,s,r,i){const o=wr("router-link");return Rt(),ps("div",wh,[X("div",Ch,[t[3]||(t[3]=X("div",{class:"col-12 col-md-6 col-lg-5 text-center"},[X("img",{src:Eh,class:"img-fluid rounded shadow",style:{"max-height":"calc(100vh - 120px)","object-fit":"contain"},alt:"Melissa with her wife and four kids"})],-1)),X("div",Sh,[t[0]||(t[0]=X("h1",{class:"hero-name",style:{color:"#1a2744"}},"Melissa Freundschuh-Pula",-1)),t[1]||(t[1]=X("h4",{class:"hero-title mt-2",style:{color:"#1a2744"}},"Full-Stack Software Engineer",-1)),t[2]||(t[2]=X("p",{class:"hero-intro mt-3",style:{color:"#2c3e50"}}," Six-plus years building enterprise web apps by day and live products on the side. Wife, mom of four, Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper. ",-1)),X("div",$h,[oe(o,{to:"/portfolio",custom:""},{default:xe(({navigate:l})=>[X("mfp-button",{variant:"primary",onClick:l},"See Projects",8,Rh)]),_:1}),oe(o,{to:"/resume",custom:""},{default:xe(({navigate:l})=>[X("mfp-button",{variant:"secondary",onClick:l},"Resume",8,Th)]),_:1}),oe(o,{to:"/contact",custom:""},{default:xe(({navigate:l})=>[X("mfp-button",{variant:"secondary",onClick:l},"Get In Touch",8,Ph)]),_:1})])])])])}const Ih=ga(Ah,[["render",Oh],["__scopeId","data-v-522c59a5"]]),Nh=[{path:"/",name:"Home",component:Ih,meta:{title:"Home"}},{path:"/about",name:"About",component:()=>jt(()=>import("./about-D-DbvN-E.js"),__vite__mapDeps([0,1])),meta:{title:"About"}},{path:"/resume",name:"Resume",component:()=>jt(()=>import("./resume-FRpmVf5Y.js"),__vite__mapDeps([2,3])),meta:{title:"Resume"}},{path:"/portfolio",name:"Portfolio",component:()=>jt(()=>import("./portfolio-D3b6mxb3.js"),__vite__mapDeps([4,5])),meta:{title:"Projects"}},{path:"/python",name:"PythonCode",component:()=>jt(()=>import("./pythonCode-P4MjAlTK.js"),__vite__mapDeps([6,7,8,9])),meta:{title:"Python"}},{path:"/data",name:"DataAnalysis",component:()=>jt(()=>import("./dataAnalysis-T7gHuZiG.js"),__vite__mapDeps([10,7,8,11])),meta:{title:"Data Analysis"}},{path:"/contact",name:"Contact",component:()=>jt(()=>import("./contact-DlUUI8oi.js"),__vite__mapDeps([12,13])),meta:{title:"Contact"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>jt(()=>import("./notFound-nkWRT9oo.js"),__vite__mapDeps([14,15])),meta:{title:"Page Not Found"}}],Oo="Melissa Freundschuh-Pula",pi=xh({history:Xd(),routes:Nh});pi.afterEach(e=>{var n;const t=(n=e.meta)==null?void 0:n.title;document.title=t?`${t} | ${Oo}`:Oo});const kh=(e,t={})=>new Promise((n,s)=>{if(typeof document>"u")return;const r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");if(i.async=!0,i.src=e,i.defer=t.defer,t.preconnectOrigin){const o=document.createElement("link");o.href=t.preconnectOrigin,o.rel="preconnect",r.appendChild(o)}r.appendChild(i),i.onload=n,i.onerror=s}),zr=e=>typeof e=="function",gr=e=>e&&typeof e=="object"&&!Array.isArray(e),Fr=(e,...t)=>{if(!t.length)return e;const n=t.shift();if(!(!gr(e)||!gr(n))){for(const s in n)gr(n[s])?(e[s]||Object.assign(e,{[s]:{}}),Fr(e[s],n[s])):Object.assign(e,{[s]:n[s]});return Fr(e,...t)}},Ks=()=>!(typeof window>"u"||typeof document>"u"),Io=(e,t=!0)=>{},Mh=(e={})=>(Io('Missing "appName" property inside the plugin options.',e.app_name==null),Io('Missing "name" property in the route.',e.screen_name==null),e);function Dh(e="",t=""){const n=e.split("/"),s=t.split("/");return n[0]===""&&t[t.length-1]==="/"&&n.shift(),s.join("/")+n.join("/")}const Lh=()=>({bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}});let Ta={};const Bh=(e={})=>{const t=Lh();Ta=Fr(t,e)},Le=()=>Ta,en=(...e)=>{const{globalObjectName:t}=Le();!Ks()||typeof window[t]>"u"||window[t](...e)},gi=(...e)=>{const{config:t,includes:n}=Le();if(en("config",t.id,...e),Array.isArray(n))for(const s of n)en("config",s.id,...e)},No=(e,t)=>{Ks()&&(window[`ga-disable-${e}`]=t)},Pa=(e=!0)=>{const{config:t,includes:n}=Le();if(No(t.id,e),Array.isArray(n))for(const s of n)No(s.id,e)},Oa=()=>{Pa(!0)},zh=()=>{Pa(!1)},sn=(e,t={})=>{const{includes:n,defaultGroupName:s}=Le();t.send_to==null&&Array.isArray(n)&&n.length&&(t.send_to=n.map(r=>r.id).concat(s)),en("event",e,t)};let Ia;const Fh=e=>{Ia=e},mi=()=>Ia,Na=e=>{if(!Ks())return;let t;if(typeof e=="string")t={page_path:e};else if(e.path||e.fullPath){const{pageTrackerUseFullPath:n,pageTrackerPrependBase:s}=Le(),r=mi(),i=r==null?void 0:r.options.base,o=n?e.fullPath:e.path;t={...e.name&&{page_title:e.name},page_path:s?Dh(o,i):o}}else t=e;t.page_location==null&&(t.page_location=window.location.href),t.send_page_view==null&&(t.send_page_view=!0),sn("page_view",t)},ka=e=>{const{appName:t}=Le();if(!e)return;let n;typeof e=="string"?n={screen_name:e}:n=e,n.app_name=n.app_name||t,sn("screen_view",n)},jh=(...e)=>{sn("exception",...e)},Hh=e=>{gi("linker",e)},Uh=e=>{sn("timing_complete",e)},Vh=(...e)=>{en("set",...e)},Gh=(...e)=>{sn("refund",...e)},Wh=e=>{sn("purchase",e)},qh=e=>{gi({custom_map:e})},Kh=Object.freeze(Object.defineProperty({__proto__:null,config:gi,customMap:qh,event:sn,exception:jh,linker:Hh,optIn:zh,optOut:Oa,pageview:Na,purchase:Wh,query:en,refund:Gh,screenview:ka,set:Vh,time:Uh},Symbol.toStringTag,{value:"Module"})),Yh=e=>{e.config.globalProperties.$gtag=Kh},ko=e=>({send_page_view:!1,...e}),Ma=()=>{const{config:e,includes:t}=Le();if(en("config",e.id,ko(e.params)),Array.isArray(t))for(const n of t)en("config",n.id,ko(n.params))},Mo=(e={},t={})=>{const{appName:n,pageTrackerTemplate:s,pageTrackerScreenviewEnabled:r,pageTrackerSkipSamePath:i}=Le();if(i&&e.path===t.path)return;let o=e;if(zr(s)?o=s(e,t):r&&(o=Mh({app_name:n,screen_name:e.name})),r){ka(o);return}Na(o)},Do=e=>{const{pageTrackerExcludedRoutes:t}=Le();return t.includes(e.path)||t.includes(e.name)},Jh=()=>{const{onBeforeTrack:e,onAfterTrack:t}=Le(),n=mi();n.isReady().then(()=>{_s().then(()=>{const{currentRoute:s}=n;Ma(),!Do(s.value)&&Mo(s.value)}),n.afterEach((s,r)=>{_s().then(()=>{Do(s)||(zr(e)&&e(s,r),Mo(s,r),zr(t)&&t(s,r))})})})},Qh=()=>{if(!Ks())return;const{enabled:e,globalObjectName:t,globalDataLayerName:n}=Le();return window[t]==null&&(window[n]=window[n]||[],window[t]=function(){window[n].push(arguments)}),window[t]("js",new Date),e||Oa(),window[t]},Zh=()=>{const{onReady:e,onError:t,globalObjectName:n,globalDataLayerName:s,config:r,customResourceURL:i,customPreconnectOrigin:o,deferScriptLoad:l,pageTrackerEnabled:a,disableScriptLoad:f}=Le(),u=!!(a&&mi());if(Qh(),u?Jh():Ma(),!f)return kh(`${i}?id=${r.id}&l=${s}`,{preconnectOrigin:o,defer:l}).then(()=>{e&&e(window[n])}).catch(c=>(t&&t(c),c))},Xh=(e,t,n)=>{Yh(e),Bh(t),Fh(n),Le().bootstrap&&Zh()};Gf();const vi=ff(dd);vi.use(pi);vi.use(Xh,{config:{id:"G-ZP2LCLVZ2X",params:{send_page_view:!1}}},pi);vi.mount("#app");export{Xl as A,_s as B,We as C,hc as D,Fe as F,ga as _,X as a,wu as b,ps as c,oe as d,Hc as e,ep as f,$l as g,Rl as h,tp as i,ft as j,pc as k,sp as l,Pr as m,Ls as n,Rt as o,jc as p,wl as q,wr as r,ds as s,mr as t,Cu as u,np as v,xe as w,hn as x,Gr as y,gc as z};

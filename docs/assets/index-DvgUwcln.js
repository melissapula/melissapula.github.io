const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-Dy6MYZ1U.js","assets/about-B08TmYq_.css","assets/resume-CkFaVn1N.js","assets/resume-CjpI8O3T.css","assets/portfolio-CBZEnOvs.js","assets/ProjectCard-BY3vNnLv.js","assets/ProjectCard-xfSEuFWS.css","assets/portfolio-CuhbxmQU.css","assets/pythonCode-Qfzyobq9.js","assets/ProjectShell-RHsUyUZc.js","assets/ProjectShell-DUzVJuM7.css","assets/pythonCode-B4GonwOu.css","assets/dataAnalysis-C1x3aOFV.js","assets/dataAnalysis-CO1bjD4Z.css","assets/contact-BxpPCaK2.js","assets/contact-DaKEcVqF.css","assets/notFound-B2U6glBh.js","assets/notFound-DUhJcPpK.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ee=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},te=/-\w/g,E=ee(e=>e.replace(te,e=>e.slice(1).toUpperCase())),ne=/\B([A-Z])/g,D=ee(e=>e.replace(ne,`-$1`).toLowerCase()),re=ee(e=>e.charAt(0).toUpperCase()+e.slice(1)),ie=ee(e=>e?`on${re(e)}`:``),O=(e,t)=>!Object.is(e,t),ae=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},k=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},oe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},se=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,e=>e.startsWith(`/*`)?``:e).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function he(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=he(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ge=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,_e=e(ge);ge+``;function ve(e){return!!e||e===``}function ye(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=Ce(e[i],t[i],n);return r}function be(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&Ce(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function xe(e,t,n){let r=f(e),i=f(t);if(r||i||(r=p(e),i=p(t),r||i))return r&&i?be(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!Ce(e[r],t[r],n))return!1}return String(e)===String(t)}function Se(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function Ce(e,t,n){if(e===t)return!0;let r=m(e),i=m(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=_(e),i=_(t),r||i?e===t:(r=d(e),i=d(t),r||i?r&&i?Se(e,t,n,ye):!1:(r=v(e),i=v(t),r||i?!r||!i?!1:Se(e,t,n,xe):String(e)===String(t))))}var we=e=>!!(e&&e.__v_isRef===!0),Te=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?we(e)?Te(e.value):JSON.stringify(e,Ee,2):String(e),Ee=(e,t)=>we(t)?Ee(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[De(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>De(e))}:_(t)?De(t):v(t)&&!d(t)&&!C(t)?String(t):t,De=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,A,Oe=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&A&&(A.active?(this.parent=A,this.index=(A.scopes||(A.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=A;try{return A=this,e()}finally{A=t}}}on(){++this._on===1&&(this.prevScope=A,A=this)}off(){if(this._on>0&&--this._on===0){if(A===this)A=this.prevScope;else{let e=A;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ke(){return A}var j,Ae=new WeakSet,je=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A&&(A.active?A.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ae.has(this)&&(Ae.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Je(this),Re(this);let e=j,t=We;j=this,We=!0;try{return this.fn()}finally{ze(this),j=e,We=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)He(e);this.deps=this.depsTail=void 0,Je(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ae.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Be(this)&&this.run()}get dirty(){return Be(this)}},Me=0,Ne,Pe;function Fe(e,t=!1){if(e.flags|=8,t){e.next=Pe,Pe=e;return}e.next=Ne,Ne=e}function Ie(){Me++}function Le(){if(--Me>0)return;if(Pe){let e=Pe;for(Pe=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ne;){let t=Ne;for(Ne=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Re(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ze(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),He(r),Ue(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Be(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ve(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ve(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ye)||(e.globalVersion=Ye,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Be(e))))return;e.flags|=2;let t=e.dep,n=j,r=We;j=e,We=!0;try{Re(e);let n=e.fn(e._value);(t.version===0||O(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{j=n,We=r,ze(e),e.flags&=-3}}function He(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)He(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ue(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var We=!0,Ge=[];function Ke(){Ge.push(We),We=!1}function qe(){let e=Ge.pop();We=e===void 0||e}function Je(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=j;j=void 0;try{t()}finally{j=e}}}var Ye=0,Xe=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ze=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!j||!We||j===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==j)t=this.activeLink=new Xe(j,this),j.deps?(t.prevDep=j.depsTail,j.depsTail.nextDep=t,j.depsTail=t):j.deps=j.depsTail=t,Qe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=j.depsTail,t.nextDep=void 0,j.depsTail.nextDep=t,j.depsTail=t,j.deps===t&&(j.deps=e)}return t}trigger(e){this.version++,Ye++,this.notify(e)}notify(e){Ie();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Le()}}};function Qe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Qe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var $e=new WeakMap,et=Symbol(``),tt=Symbol(``),nt=Symbol(``);function M(e,t,n){if(We&&j){let t=$e.get(e);t||$e.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ze),r.map=t,r.key=n),r.track()}}function rt(e,t,n,r,i,a){let o=$e.get(e);if(!o){Ye++;return}let s=e=>{e&&e.trigger()};if(Ie(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===nt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(nt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(et)),f(e)&&s(o.get(tt)));break;case`delete`:i||(s(o.get(et)),f(e)&&s(o.get(tt)));break;case`set`:f(e)&&s(o.get(et))}}Le()}function it(e){let t=N(e);return t===e||(M(t,`iterate`,nt),Ut(e))?t:Ht(e)?Vt(e)?t.map(e=>qt(Kt(e))):t.map(qt):t.map(Kt)}function at(e){return M(e=N(e),`iterate`,nt),e}function ot(e,t){return Ht(e)?qt(Vt(e)?Kt(t):t):Kt(t)}var st={__proto__:null,[Symbol.iterator](){return ct(this,Symbol.iterator,e=>ot(this,e))},concat(...e){return it(this).concat(...e.map(e=>d(e)?it(e):e))},entries(){return ct(this,`entries`,e=>(e[1]=ot(this,e[1]),e))},every(e,t){return ut(this,`every`,e,t,void 0,arguments)},filter(e,t){return ut(this,`filter`,e,t,e=>e.map(e=>ot(this,e)),arguments)},find(e,t){return ut(this,`find`,e,t,e=>ot(this,e),arguments)},findIndex(e,t){return ut(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ut(this,`findLast`,e,t,e=>ot(this,e),arguments)},findLastIndex(e,t){return ut(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ut(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ft(this,`includes`,e)},indexOf(...e){return ft(this,`indexOf`,e)},join(e){return it(this).join(e)},lastIndexOf(...e){return ft(this,`lastIndexOf`,e)},map(e,t){return ut(this,`map`,e,t,void 0,arguments)},pop(){return pt(this,`pop`)},push(...e){return pt(this,`push`,e)},reduce(e,...t){return dt(this,`reduce`,e,t)},reduceRight(e,...t){return dt(this,`reduceRight`,e,t)},shift(){return pt(this,`shift`)},some(e,t){return ut(this,`some`,e,t,void 0,arguments)},splice(...e){return pt(this,`splice`,e)},toReversed(){return it(this).toReversed()},toSorted(e){return it(this).toSorted(e)},toSpliced(...e){return it(this).toSpliced(...e)},unshift(...e){return pt(this,`unshift`,e)},values(){return ct(this,`values`,e=>ot(this,e))}};function ct(e,t,n){let r=at(e),i=r[t]();return r!==e&&!Ut(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var lt=Array.prototype;function ut(e,t,n,r,i,a){let o=at(e),s=o!==e&&!Ut(e),c=o[t];if(c!==lt[t]){let t=c.apply(e,a);return s?Kt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,ot(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function dt(e,t,n,r){let i=at(e),a=i!==e&&!Ut(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=ot(e,t)),n.call(this,t,ot(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?ot(e,c):c}function ft(e,t,n){let r=N(e);M(r,`iterate`,nt);let i=r[t](...n);return(i===-1||i===!1)&&Wt(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function pt(e,t,n=[]){Ke(),Ie();let r=N(e)[t].apply(e,n);return Le(),qe(),r}var mt=e(`__proto__,__v_isRef,__isVue`),ht=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function gt(e){_(e)||(e=String(e));let t=N(this);return M(t,`has`,e),t.hasOwnProperty(e)}var _t=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ft:Pt:i?Nt:Mt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=st[t]))return e;if(t===`hasOwnProperty`)return gt}let o=Reflect.get(e,t,P(e)?e:n);if((_(t)?ht.has(t):mt(t))||(r||M(e,`get`,t),i))return o;if(P(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?zt(e):e}return v(o)?r?zt(o):Lt(o):o}},vt=class extends _t{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Ht(i);if(!Ut(n)&&!Ht(n)&&(i=N(i),n=N(n)),!a&&P(i)&&!P(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,P(e)?e:r);return e===N(r)&&s&&(o?O(n,i)&&rt(e,`set`,t,n,i):rt(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&rt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!ht.has(t))&&M(e,`has`,t),n}ownKeys(e){return M(e,`iterate`,d(e)?`length`:et),Reflect.ownKeys(e)}},yt=class extends _t{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},bt=new vt,xt=new yt,St=new vt(!0),Ct=e=>e,wt=e=>Reflect.getPrototypeOf(e);function Tt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?Ct:t?qt:Kt;return!t&&M(a,`iterate`,l?tt:et),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Et(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Dt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(O(n,a)&&M(i,`get`,n),M(i,`get`,a));let{has:o}=wt(i),s=t?Ct:e?qt:Kt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&M(N(t),`iterate`,et),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(O(t,i)&&M(r,`has`,t),M(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?Ct:e?qt:Kt;return!e&&M(o,`iterate`,et),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Et(`add`),set:Et(`set`),delete:Et(`delete`),clear:Et(`clear`)}:{add(e){let n=N(this),r=wt(n),i=N(e),a=!t&&!Ut(e)&&!Ht(e)?i:e;return r.has.call(n,a)||O(e,a)&&r.has.call(n,e)||O(i,a)&&r.has.call(n,i)||(n.add(a),rt(n,`add`,a,a)),this},set(e,n){!t&&!Ut(n)&&!Ht(n)&&(n=N(n));let r=N(this),{has:i,get:a}=wt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?O(n,s)&&rt(r,`set`,e,n,s):rt(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=wt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&rt(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&rt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Tt(r,e,t)}),n}function Ot(e,t){let n=Dt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var kt={get:Ot(!1,!1)},At={get:Ot(!1,!0)},jt={get:Ot(!0,!1)},Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap;function It(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Lt(e){return Ht(e)?e:Bt(e,!1,bt,kt,Mt)}function Rt(e){return Bt(e,!1,St,At,Nt)}function zt(e){return Bt(e,!0,xt,jt,Pt)}function Bt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=It(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Vt(e){return Ht(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function Ut(e){return!!(e&&e.__v_isShallow)}function Wt(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function Gt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&k(e,`__v_skip`,!0),e}var Kt=e=>v(e)?Lt(e):e,qt=e=>v(e)?zt(e):e;function P(e){return e?e.__v_isRef===!0:!1}function Jt(e){return Xt(e,!1)}function Yt(e){return Xt(e,!0)}function Xt(e,t){return P(e)?e:new Zt(e,t)}var Zt=class{constructor(e,t){this.dep=new Ze,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ut(e)||Ht(e);e=n?e:N(e),O(e,t)&&(this._rawValue=e,this._value=n?e:Kt(e),this.dep.trigger())}};function Qt(e){return P(e)?e.value:e}var $t={get:(e,t,n)=>t===`__v_raw`?e:Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return P(i)&&!P(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function en(e){return Vt(e)?e:new Proxy(e,$t)}var tn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ze(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ye-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return Fe(this,!0),!0}get value(){let e=this.dep.track();return Ve(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function nn(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new tn(r,i,n)}var rn={},an=new WeakMap,on=void 0;function sn(e,t=!1,n=on){if(n){let t=an.get(n);t||an.set(n,t=[]),t.push(e)}}function cn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Ut(e)||o===!1||o===0?ln(e,1):ln(e),m,g,_,v,y=!1,b=!1;if(P(e)?(g=()=>e.value,y=Ut(e)):Vt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Vt(e)||Ut(e)),g=()=>e.map(e=>{if(P(e))return e.value;if(Vt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ke();try{_()}finally{qe()}}let t=on;on=m;try{return f?f(e,3,[v]):e(v)}finally{on=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>ln(e(),t)}let x=ke(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(rn):rn,w=e=>{if(m.flags&1&&(m.dirty||e)){if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>O(e,C[t])):O(t,C))){_&&_();let e=on;on=m;try{let e=[t,C===rn?void 0:b&&C[0]===rn?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{on=e}}}else m.run()}};return u&&u(w),m=new je(g),m.scheduler=l?()=>l(w,!1):w,v=e=>sn(e,!1,m),_=m.onStop=()=>{let e=an.get(m);if(e){if(f)f(e,4);else for(let t of e)t();an.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function ln(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,P(e))ln(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)ln(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{ln(e,t,n)});else if(C(e)){for(let r in e)ln(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ln(e[r],t,n)}return e}function un(e,t,n,r){try{return r?e(...r):e()}catch(e){fn(e,t,n)}}function dn(e,t,n,r){if(h(e)){let i=un(e,t,n,r);return i&&y(i)&&i.catch(e=>{fn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(dn(e[a],t,n,r));return i}}function fn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ke(),un(o,null,10,[e,i,a]),qe();return}}pn(e,r,a,i,s)}function pn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var F=[],mn=-1,hn=[],gn=null,_n=0,vn=Promise.resolve(),yn=null;function bn(e){let t=yn||vn;return e?t.then(this?e.bind(this):e):t}function xn(e){let t=mn+1,n=F.length;for(;t<n;){let r=t+n>>>1,i=F[r],a=Dn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Sn(e){if(!(e.flags&1)){let t=Dn(e),n=F[F.length-1];!n||!(e.flags&2)&&t>=Dn(n)?F.push(e):F.splice(xn(t),0,e),e.flags|=1,Cn()}}function Cn(){yn||=vn.then(On)}function wn(e){if(!d(e))gn&&e.id===-1?gn.splice(_n+1,0,e):e.flags&1||(hn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)hn.push(e[t]);Cn()}function Tn(e,t,n=mn+1){for(;n<F.length;n++){let t=F[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;F.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function En(e){if(hn.length){let e=[...new Set(hn)].sort((e,t)=>Dn(e)-Dn(t));if(hn.length=0,gn){for(let t=0;t<e.length;t++)gn.push(e[t]);return}for(gn=e,_n=0;_n<gn.length;_n++){let e=gn[_n];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}gn=null,_n=0}}var Dn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function On(e){try{for(mn=0;mn<F.length;mn++){let e=F[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),un(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<F.length;mn++){let e=F[mn];e&&(e.flags&=-2)}mn=-1,F.length=0,En(e),yn=null,(F.length||hn.length)&&On(e)}}var I=null,kn=null;function An(e){let t=I;return I=e,kn=e&&e.type.__scopeId||null,t}function jn(e,t=I,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ma(-1);let i=An(t),a=la.length,o;try{o=e(...n)}finally{for(let e=la.length;e>a;e--)fa();An(i),r._d&&ma(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mn(e,n){if(I===null)return e;let r=Ya(I),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&ln(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Nn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ke(),dn(c,n,8,[e.el,s,e,t]),qe())}}function Pn(e,t){if(U){let n=U.provides,r=U.parent&&U.parent.provides;r===n&&(n=U.provides=Object.create(r)),n[e]=t}}function Fn(e,t,n=!1){let r=Ia();if(r||oi){let i=oi?oi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var In=Symbol.for(`v-scx`),Ln=()=>Fn(In);function Rn(e,t,n){return zn(e,t,n)}function zn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Ha){if(c===`sync`){let e=Ln();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=U;u.call=(e,t,n)=>dn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{R(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():Sn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=cn(e,n,u);return Ha&&(f?f.push(h):d&&h()),h}function Bn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Vn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=za(this),s=zn(i,a.bind(r),n);return o(),s}function Vn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Hn=Symbol(`_vte`),Un=e=>e.__isTeleport,Wn=Symbol(`_leaveCb`),Gn=Symbol(`_enterCb`);function Kn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return br(()=>{e.isMounted=!0}),Cr(()=>{e.isUnmounting=!0}),e}var qn=[Function,Array],Jn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qn,onEnter:qn,onAfterEnter:qn,onEnterCancelled:qn,onBeforeLeave:qn,onLeave:qn,onAfterLeave:qn,onLeaveCancelled:qn,onBeforeAppear:qn,onAppear:qn,onAfterAppear:qn,onAppearCancelled:qn},Yn=e=>{let t=e.subTree;return t.component?Yn(t.component):t},Xn={name:`BaseTransition`,props:Jn,setup(e,{slots:t}){let n=Ia(),r=Kn();return()=>{let i=t.default&&ir(t.default(),!0),a=i&&i.length?Zn(i):n.subTree?Da():void 0;if(!a)return;let o=N(e),{mode:s}=o;if(r.isLeaving)return tr(a);let c=nr(a);if(!c)return tr(a);let l=er(c,o,r,n,e=>l=e);c.type!==B&&rr(c,l);let u=n.subTree&&nr(n.subTree);if(u&&u.type!==B&&!ya(u,c)&&Yn(n).type!==B){let e=er(u,o,r,n);if(rr(u,e),s===`out-in`&&c.type!==B)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},tr(a);s===`in-out`&&c.type!==B?e.delayLeave=(e,t,n)=>{let i=$n(r,u);i[String(u.key)]=u,e[Wn]=()=>{t(),e[Wn]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Zn(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==B){t=n;break}}return t}var Qn=Xn;function $n(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function er(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=$n(n,e),C=(e,t)=>{e&&dn(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=_||c;else return}t[Wn]&&t[Wn](!0);let i=S[x];i&&ya(e,i)&&i.el[Wn]&&i.el[Wn](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=f;if(!n.isMounted){if(a)r=v||l,i=y||u,o=b||f;else return}let s=!1;t[Gn]=e=>{s||(s=!0,C(e?o:i,[t]),T.delayedLeave&&T.delayedLeave(),t[Gn]=void 0)};let c=t[Gn].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[Gn]&&t[Gn](!0),n.isUnmounting)return r();C(p,[t]);let a=!1;t[Wn]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[Wn]=void 0,S[i]===e&&delete S[i])};let o=t[Wn].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=er(e,t,n,r,i);return i&&i(a),a}};return T}function tr(e){if(fr(e))return e=wa(e),e.children=null,e}function nr(e){if(!fr(e))return Un(e.type)&&e.children?Zn(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function rr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;rr(Un(n.type)&&nr(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ir(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===z?(o.patchFlag&128&&i++,r=r.concat(ir(o.children,t,s))):(t||o.type!==B)&&r.push(s==null?o:wa(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function ar(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function or(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function sr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var cr=new WeakMap;function lr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>lr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(dr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&lr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?Ya(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=N(v),b=v===t?i:e=>!sr(_,e)&&u(y,e),x=(e,t)=>!(t&&sr(_,t));if(m!=null&&m!==p){if(ur(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(P(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))un(p,f,12,[l,_]);else{let t=g(p),n=P(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),cr.delete(e)};t.id=-1,cr.set(e,t),R(t,r)}else ur(e),i()}}}function ur(e){let t=cr.get(e);t&&(t.flags|=8,cr.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var dr=e=>!!e.type.__asyncLoader,fr=e=>e.type.__isKeepAlive;function pr(e,t){hr(e,`a`,t)}function mr(e,t){hr(e,`da`,t)}function hr(e,t,n=U){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(_r(t,r,n),n){let e=n.parent;for(;e&&e.parent;)fr(e.parent.vnode)&&gr(r,t,n,e),e=e.parent}}function gr(e,t,n,r){let i=_r(t,e,r,!0);wr(()=>{c(r[t],i)},n)}function _r(e,t,n=U,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ke();let i=za(n),a=dn(t,n,e,r);return i(),qe(),a};return r?i.unshift(a):i.push(a),a}}var vr=e=>(t,n=U)=>{(!Ha||e===`sp`)&&_r(e,(...e)=>t(...e),n)},yr=vr(`bm`),br=vr(`m`),xr=vr(`bu`),Sr=vr(`u`),Cr=vr(`bum`),wr=vr(`um`),Tr=vr(`sp`),Er=vr(`rtg`),Dr=vr(`rtc`);function Or(e,t=U){_r(`ec`,e,t)}var kr=`components`;function Ar(e,t){return Nr(kr,e,!0,t)||e}var jr=Symbol.for(`v-ndc`);function Mr(e){return g(e)?Nr(kr,e,!1)||e:e||jr}function Nr(e,t,n=!0,r=!1){let i=I||U;if(i){let n=i.type;if(e===kr){let e=Xa(n,!1);if(e&&(e===t||e===E(t)||e===re(E(t))))return n}let a=Pr(i[e]||n[e],t)||Pr(i.appContext[e],t);return!a&&r?n:a}}function Pr(e,t){return e&&(e[t]||e[E(t)]||e[re(E(t))])}function Fr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Vt(e),r=!1,s=!1;n&&(r=!Ut(e),s=Ht(e),e=at(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?qt(Kt(e[n])):Kt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Ir(e,t,n,r,i,a){if(n??={},I.ce||I.parent&&dr(I.parent)&&I.parent.ce){let e=a!=null&&n.key==null?s({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),da(),_a(z,null,[H(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let c=la.length;da();let l;try{let i=o&&Lr(o(n)),s=n.key||a||i&&i.key;l=_a(z,{key:(s&&!_(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=la.length;e>c;e--)fa();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+`-s`]),l}function Lr(e){return e.some(e=>!va(e)||!(e.type===B||e.type===z&&!Lr(e.children)))?e:null}var Rr=e=>e?Va(e)?Ya(e):Rr(e.parent):null,zr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rr(e.parent),$root:e=>Rr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Jr(e),$forceUpdate:e=>e.f||=()=>{Sn(e.update)},$nextTick:e=>e.n||=bn.bind(e.proxy),$watch:e=>Bn.bind(e)}),Br=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Vr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Br(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Ur&&(s[n]=0)}let d=zr[n],f,p;if(d)return n===`$attrs`&&M(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Br(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Br(n,c)||u(o,c)||u(i,c)||u(zr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Hr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Ur=!0;function Wr(e){let t=Jr(e),n=e.proxy,i=e.ctx;Ur=!1,t.beforeCreate&&Kr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:ee,renderTriggered:te,errorCaptured:E,serverPrefetch:ne,expose:D,inheritAttrs:re,components:ie,directives:O,filters:ae}=t;if(u&&Gr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Lt(t))}if(Ur=!0,o)for(let e in o){let t=o[e],a=Qa({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)qr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Pn(t,e[t])})}f&&Kr(f,e,`c`);function k(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(k(yr,p),k(br,m),k(xr,g),k(Sr,_),k(pr,y),k(mr,b),k(Or,E),k(Dr,ee),k(Er,te),k(Cr,S),k(wr,w),k(Tr,ne),d(D)){if(D.length){let t=e.exposed||={};D.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}T&&e.render===r&&(e.render=T),re!=null&&(e.inheritAttrs=re),ie&&(e.components=ie),O&&(e.directives=O),ne&&or(e)}function Gr(e,t,n=r){d(e)&&(e=$r(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Fn(r.from||n,r.default,!0):Fn(r.from||n):Fn(r),P(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Kr(e,t,n){dn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function qr(e,t,n,r){let i=r.includes(`.`)?Vn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Rn(i,n)}else if(h(e))Rn(i,e.bind(n));else if(v(e)){if(d(e))e.forEach(e=>qr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Rn(i,r,e)}}}function Jr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Yr(c,e,o,!0)),Yr(c,t,o)),v(t)&&a.set(t,c),c}function Yr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Yr(e,a,n,!0),i&&i.forEach(t=>Yr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Xr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Xr={data:Zr,props:ti,emits:ti,methods:ei,computed:ei,beforeCreate:L,created:L,beforeMount:L,mounted:L,beforeUpdate:L,updated:L,beforeDestroy:L,beforeUnmount:L,destroyed:L,unmounted:L,activated:L,deactivated:L,errorCaptured:L,serverPrefetch:L,components:ei,directives:ei,watch:ni,provide:Zr,inject:Qr};function Zr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Qr(e,t){return ei($r(e),$r(t))}function $r(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function L(e,t){return e?[...new Set([].concat(e,t))]:t}function ei(e,t){return e?s(Object.create(null),e,t):t}function ti(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Hr(e),Hr(t??{})):t}function ni(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=L(e[r],t[r]);return n}function ri(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var ii=0;function ai(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=ri(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:ii++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:eo,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||H(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Ya(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(dn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=oi;oi=l;try{return e()}finally{oi=t}}};return l}}var oi=null,si=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${E(t)}Modifiers`]||e[`${D(t)}Modifiers`];function ci(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&si(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=a.map(oe)));let c,l=i[c=ie(n)]||i[c=ie(E(n))];!l&&o&&(l=i[c=ie(D(n))]),l&&dn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,dn(u,e,6,a)}}var li=new WeakMap;function ui(e,t,n=!1){let r=n?li:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=ui(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function di(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,D(t))||u(e,t))}function fi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=An(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Oa(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Oa(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:mi(c)}}catch(t){la.length=0,fn(t,e,1),v=H(B)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=hi(y,a)),b=wa(b,y,!1,!0))}return n.dirs&&(b=wa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&rr(Un(b.type)&&nr(b)||b,n.transition),v=b,An(_),v}function pi(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(va(r)){if(r.type!==B||r.children===`v-if`){if(n)return;n=r}}else return}return n}var mi=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},hi=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_i(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(vi(o,r,n)&&!di(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||_i(r,o,l):!!o;return!1}function _i(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(vi(t,e,a)&&!di(n,a))return!0}return!1}function vi(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!Ce(r,i):r!==i}function yi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var bi={},xi=()=>Object.create(bi),Si=e=>Object.getPrototypeOf(e)===bi;function Ci(e,t,n,r=!1){let i={},a=xi();e.propsDefaults=Object.create(null),Ti(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Rt(i):e.type.props?i:a,e.attrs=a}function wi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(di(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=E(o);i[t]=Ei(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Ti(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=D(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Ei(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&rt(e.attrs,`set`,``)}function Ti(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=E(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:di(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=N(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=Ei(a,n,s,i[s],e,!u(i,s))}}return s}function Ei(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=za(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===D(n))&&(r=!0))}return r}var Di=new WeakMap;function Oi(e,r,i=!1){let a=i?Di:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=Oi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=E(c[e]);ki(n)&&(l[n]=t)}else if(c)for(let e in c){let t=E(e);if(ki(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ki(e){return e[0]!==`$`&&!T(e)}var Ai=e=>e===`_`||e===`_ctx`||e===`$stable`,ji=e=>d(e)?e.map(Oa):[Oa(e)],Mi=(e,t,n)=>{if(t._n)return t;let r=jn((...e)=>ji(t(...e)),n);return r._c=!1,r},Ni=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Ai(n))continue;let i=e[n];if(h(i))t[n]=Mi(n,i,r);else if(i!=null){let e=ji(i);t[n]=()=>e}}},Pi=(e,t)=>{let n=ji(t);e.slots.default=()=>n},Fi=(e,t,n)=>{for(let r in t)(n||!Ai(r))&&(e[r]=t[r])},Ii=(e,t,n)=>{let r=e.slots=xi();if(e.vnode.shapeFlag&32){let e=t._;e?(Fi(r,t,n),n&&k(r,`_`,e,!0)):Ni(t,r)}else t&&Pi(e,t)},Li=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:Fi(a,n,r):(o=!n.$stable,Ni(n,a)),s=n}else n&&(Pi(e,n),s={default:1});if(o)for(let e in a)!Ai(e)&&s[e]==null&&delete a[e]},R=ia;function Ri(e){return zi(e)}function zi(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,r,i=null,a=null,o=null,s=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!ya(e,t)&&(i=ye(e),me(e,a,o,!0),e=null),t.patchFlag===-2&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===n&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case sa:y(e,t,r,i);break;case B:b(e,t,r,i);break;case ca:e??x(t,r,i,s);break;case z:ie(e,t,r,i,a,o,s,c,l);break;default:f&1?w(e,t,r,i,a,o,s,c,l):f&6?O(e,t,r,i,a,o,s,c,l):(f&64||f&128)&&u.process(e,t,r,i,a,o,s,c,l,Se)}d!=null&&a?lr(d,e&&e.ref,o,t||e,!t):d==null&&e&&e.ref!=null&&lr(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,Bi(e,a),s,u),_&&Nn(e,null,r,`created`),te(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Ma(f,r,e)}_&&Nn(e,null,r,`beforeMount`);let v=Hi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&R(()=>{try{f&&Ma(f,r,e),v&&g.enter(d),_&&Nn(e,null,r,`mounted`)}finally{}},i)},te=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ji(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;te(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?ka(e[l]):Oa(e[l]);v(null,c,t,n,r,i,a,o,s)}},ne=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Vi(r,!1),(g=h.onVnodeBeforeUpdate)&&Ma(g,r,n,e),f&&Nn(n,e,r,`beforeUpdate`),r&&Vi(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?D(e.dynamicChildren,d,l,r,i,Bi(n,a),o):s||ue(e,n,l,null,r,i,Bi(n,a),o,!1),u>0){if(u&16)re(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&re(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&R(()=>{g&&Ma(g,r,n,e),f&&Nn(n,e,r,`updated`)},i)},D=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===z||!ya(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},re=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ie=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(D(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Ui(e,t,!0)):ue(e,t,n,f,i,a,s,c,l)},O=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):k(t,n,r,i,a,o,c):oe(e,t,c)},k=(e,t,n,r,i,a,o)=>{let s=e.component=Fa(e,r,i);if(fr(e)&&(s.ctx.renderer=Se),Ua(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,se,o),!e.el){let r=s.subTree=H(B);b(null,r,t,n),e.placeholder=r.el}}else se(s,e,t,n,i,a,o)},oe=(e,t,n)=>{let r=t.component=e.component;if(gi(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,ce(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},se=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Gi(e);if(n){t&&(t.el=c.el,ce(e,t,o)),n.asyncDep.then(()=>{R(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Vi(e,!1),t?(t.el=c.el,ce(e,t,o)):t=c,n&&ae(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Ma(d,s,t,c),Vi(e,!0);let f=fi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ye(p),e,i,a),t.el=f.el,u===null&&yi(e,f.el),r&&R(r,i),(d=t.props&&t.props.onVnodeUpdated)&&R(()=>Ma(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=dr(t);if(Vi(e,!1),l&&ae(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Ma(o,d,t),Vi(e,!0),s&&we){let t=()=>{e.subTree=fi(e),we(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=fi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&R(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;R(()=>Ma(o,d,e),i)}(t.shapeFlag&256||d&&dr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&R(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new je(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Sn(u),Vi(e,!0),l()},ce=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,wi(e,t.props,r,n),Li(e,t.children,n),Ke(),Tn(e),qe()},ue=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}if(f&256){de(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},de=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?ka(t[p]):Oa(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ve(e,a,o,!0,!1,f):E(t,r,i,a,o,s,c,l,f)},fe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?ka(t[u]):Oa(t[u]);if(ya(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?ka(t[p]):Oa(t[p]);if(ya(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?ka(t[u]):Oa(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)me(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ka(t[u]):Oa(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){me(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&ya(n,t[_])){i=_;break}i===void 0?me(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Wi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||qi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?pe(n,r,p,2):_--)}}},pe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){pe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Se);return}if(c===z){o(a,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===ca){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[Wn]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),R(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Wn];a._isLeaving&&a[Wn](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},me=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(Ke(),lr(s,null,n,e,!0),qe()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!dr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Ma(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Nn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Se,r):l&&!l.hasOnce&&(a!==z||d>0&&d&64)?ve(l,t,n,!1,!0):(a===z&&d&384||!i&&u&16)&&ve(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&R(()=>{_&&Ma(_,t,e),h&&Nn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===z){ge(n,r);return}if(t===ca){C(e),i&&!i.persisted&&i.afterLeave&&i.afterLeave();return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ki(c),Ki(l),r&&ae(r),i.stop(),a?(a.flags|=8,me(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,me(o,e,t,n)),s&&R(s,t),R(()=>{e.isUnmounted=!0},t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)me(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Hn];return n?h(n):t},be=!1,xe=(e,t,n)=>{let r;e==null?t._vnode&&(me(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,be||=(be=!0,Tn(r),En(),!1)},Se={p:v,um:me,m:pe,r:he,mt:k,mc:E,pc:ue,pbc:D,n:ye,o:e},Ce,we;return i&&([Ce,we]=i(Se)),{render:xe,hydrate:Ce,createApp:ai(xe,Ce)}}function Bi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Vi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ui(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=ka(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Ui(t,a)),a.type===sa&&(a.patchFlag===-1&&(a=i[e]=ka(a)),a.el=t.el),a.type===B&&!a.el&&(a.el=t.el)}}function Wi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Gi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gi(t)}function Ki(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function qi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?qi(t.subTree):null}var Ji=e=>e.__isSuspense,Yi=0,Xi={name:`Suspense`,__isSuspense:!0,process(e,t,n,r,i,a,o,s,c,l){if(e==null)Qi(t,n,r,i,a,o,s,c,l);else{if(a&&a.deps>0&&!e.suspense.isInFallback&&!a.isHydrating){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}$i(e,t,n,r,i,o,s,c,l)}},hydrate:ta,normalize:na};function Zi(e,t){let n=e.props&&e.props[t];h(n)&&n()}function Qi(e,t,n,r,i,a,o,s,c){let{p:l,o:{createElement:u}}=c,d=u(`div`),f=e.suspense=ea(e,i,r,t,d,n,a,o,s,c);l(null,f.pendingBranch=e.ssContent,d,null,r,f,a,o),f.deps>0?(Zi(e,`onPending`),Zi(e,`onFallback`),l(null,e.ssFallback,t,n,r,null,a,o),aa(f,e.ssFallback)):f.resolve(!1,!0)}function $i(e,t,n,r,i,a,o,s,{p:c,um:l,o:{createElement:u}}){let d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;let f=t.ssContent,p=t.ssFallback,{activeBranch:m,pendingBranch:h,isInFallback:g,isHydrating:_}=d;if(h)d.pendingBranch=f,ya(h,f)?(d.deps++,c(h,f,_?n:d.hiddenContainer,null,i,d,a,o,s),d.deps--,d.deps<=0?d.resolve():g&&!_&&!d.isFallbackMountPending&&(c(m,p,n,r,i,null,a,o,s),aa(d,p))):(d.pendingId=Yi++,_?(d.isHydrating=!1,d.activeBranch=h):l(h,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u(`div`),g?(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0?d.resolve():d.isFallbackMountPending||(c(m,p,n,r,i,null,a,o,s),aa(d,p))):m&&ya(m,f)?(c(m,f,n,r,i,d,a,o,s),d.resolve(!0)):(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0&&d.resolve()));else if(m&&ya(m,f))c(m,f,n,r,i,d,a,o,s),aa(d,f);else if(Zi(t,`onPending`),d.pendingBranch=f,d.pendingId=f.shapeFlag&512?f.component.suspenseId:Yi++,c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0)d.resolve();else{let{timeout:e,pendingId:t}=d;e>0?setTimeout(()=>{d.pendingId===t&&d.fallback(p)},e):e===0&&d.fallback(p)}}function ea(e,t,n,r,i,a,o,s,c,l,u=!1){let{p:d,m:f,um:p,n:m,o:{parentNode:h,remove:g}}=l,_,v=oa(e);v&&t&&t.pendingBranch&&(_=t.pendingId,t.deps++);let y=e.props?se(e.props.timeout):void 0,b=a,x={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:i,deps:0,pendingId:Yi++,timeout:typeof y==`number`?y:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){let{vnode:r,activeBranch:i,pendingBranch:o,pendingId:s,effects:c,parentComponent:l,container:u,isInFallback:d}=x,g=!1;if(x.isHydrating)x.isHydrating=!1;else if(!e){g=i&&o.transition&&o.transition.mode===`out-in`;let e=!1;g&&(i.transition.afterLeave=()=>{s===x.pendingId&&(f(o,u,a===b&&!e?m(i):a,0),wn(c),d&&r.ssFallback&&(r.ssFallback.el=null))}),i&&!x.isFallbackMountPending&&(h(i.el)===u&&(a=m(i),e=!0),p(i,l,x,!0),!g&&d&&r.ssFallback&&R(()=>r.ssFallback.el=null,x)),g||f(o,u,a,0)}x.isFallbackMountPending=!1,aa(x,o),x.pendingBranch=null,x.isInFallback=!1;let y=x.parent,S=!1;for(;y;){if(y.pendingBranch){for(let e=0;e<c.length;e++)y.effects.push(c[e]);S=!0;break}y=y.parent}!S&&!g&&wn(c),x.effects=[],v&&t&&t.pendingBranch&&_===t.pendingId&&(_=void 0,t.deps--,t.deps===0&&!n&&t.resolve()),Zi(r,`onResolve`)},fallback(e){if(!x.pendingBranch)return;let{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:a}=x;Zi(t,`onFallback`);let o=m(n),l=()=>{if(x.isFallbackMountPending=!1,!x.isInFallback)return;let e=x.vnode.ssFallback;d(null,e,i,o,r,null,a,s,c),aa(x,e)},u=e.transition&&e.transition.mode===`out-in`;u&&(x.isFallbackMountPending=!0,n.transition.afterLeave=l),x.isInFallback=!0,p(n,r,null,!0),u||l()},move(e,t,n){x.activeBranch&&f(x.activeBranch,e,t,n),x.container=e},next(){return x.activeBranch&&m(x.activeBranch)},registerDep(e,t,n){let r=!!x.pendingBranch;r&&x.deps++;let i=e.vnode.el;e.asyncDep.catch(t=>{fn(t,e,0)}).then(a=>{if(e.isUnmounted||x.isUnmounted||x.pendingId!==e.suspenseId)return;if(Ba(),i&&!e.scope.active){r&&--x.deps===0&&x.resolve();return}e.asyncResolved=!0;let{vnode:s}=e;Ga(e,a,!1),i&&(s.el=i);let c=!i&&e.subTree.el;t(e,s,h(i||e.subTree.el),i?null:m(e.subTree),x,o,n),c&&(s.placeholder=null,g(c)),yi(e,s.el),r&&--x.deps===0&&x.resolve()})},unmount(e,t){x.isUnmounted=!0,x.activeBranch&&p(x.activeBranch,n,e,t),x.pendingBranch&&p(x.pendingBranch,n,e,t)}};return x}function ta(e,t,n,r,i,a,o,s,c){let l=t.suspense=ea(t,r,n,e.parentNode,document.createElement(`div`),null,i,a,o,s,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,a,o);return l.deps===0&&l.resolve(!1,!0),u}function na(e){let{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=ra(r?n.default:n),e.ssFallback=r?ra(n.fallback):H(B)}function ra(e){let t;if(h(e)){let n=pa&&e._c;n&&(e._d=!1,da()),e=e(),n&&(e._d=!0,t=ua,fa())}return d(e)&&(e=pi(e)),e=Oa(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(t=>t!==e)),e}function ia(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):wn(e)}function aa(e,t){e.activeBranch=t;let{vnode:n,parentComponent:r}=e,i=t.el;for(;!i&&t.component;)t=t.component.subTree,i=t.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,yi(r,i))}function oa(e){let t=e.props&&e.props.suspensible;return t!=null&&t!==!1}var z=Symbol.for(`v-fgt`),sa=Symbol.for(`v-txt`),B=Symbol.for(`v-cmt`),ca=Symbol.for(`v-stc`),la=[],ua=null;function da(e=!1){la.push(ua=e?null:[])}function fa(){la.pop(),ua=la[la.length-1]||null}var pa=1;function ma(e,t=!1){pa+=e,e<0&&ua&&t&&(ua.hasOnce=!0)}function ha(e){return e.dynamicChildren=pa>0?ua||n:null,fa(),pa>0&&ua&&ua.push(e),e}function ga(e,t,n,r,i,a){return ha(V(e,t,n,r,i,a,!0))}function _a(e,t,n,r,i){return ha(H(e,t,n,r,i,!0))}function va(e){return e?e.__v_isVNode===!0:!1}function ya(e,t){return e.type===t.type&&e.key===t.key}var ba=({key:e})=>e??null,xa=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||P(e)||h(e)?{i:I,r:e,k:t,f:!!n}:e);function V(e,t=null,n=null,r=0,i=null,a=e===z?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ba(t),ref:t&&xa(t),scopeId:kn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:I};return s?(Aa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),pa>0&&!o&&ua&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ua.push(c),c}var H=Sa;function Sa(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===jr)&&(e=B),va(e)){let r=wa(e,t,!0);return n&&Aa(r,n),pa>0&&!a&&ua&&(r.shapeFlag&6?ua[ua.indexOf(e)]=r:ua.push(r)),r.patchFlag=-2,r}if(Za(e)&&(e=e.__vccOpts),t){t=Ca(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=he(e)),v(n)&&(Wt(n)&&!d(n)&&(n=s({},n)),t.style=ue(n))}let o=g(e)?1:Ji(e)?128:Un(e)?64:v(e)?4:h(e)?2:0;return V(e,t,n,r,i,o,a,!0)}function Ca(e){return e?Wt(e)||Si(e)?s({},e):e:null}function wa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ja(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ba(l),ref:t&&t.ref?n&&a?d(a)?a.concat(xa(t)):[a,xa(t)]:xa(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==z?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wa(e.ssContent),ssFallback:e.ssFallback&&wa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&rr(u,c.clone(u)),u}function Ta(e=` `,t=0){return H(sa,null,e,t)}function Ea(e,t){let n=H(ca,null,e);return n.staticCount=t,n}function Da(e=``,t=!1){return t?(da(),_a(B,null,e)):H(B,null,e)}function Oa(e){return e==null||typeof e==`boolean`?H(B):d(e)?H(z,null,e.slice()):va(e)?ka(e):H(sa,null,String(e))}function ka(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wa(e)}function Aa(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Aa(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Si(t)?t._ctx=I:r===3&&I&&(I.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(h(t)){if(r&65){Aa(e,{default:t});return}t={default:t,_ctx:I},n=32}else t=String(t),r&64?(n=16,t=[Ta(t)]):n=8;e.children=t,e.shapeFlag|=n}function ja(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=he([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Ma(e,t,n,r=null){dn(e,t,7,[n,r])}var Na=ri(),Pa=0;function Fa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Na,o={uid:Pa++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oe(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oi(i,a),emitsOptions:ui(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=ci.bind(null,o),e.ce&&e.ce(o),o}var U=null,Ia=()=>U||I,La,Ra;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};La=t(`__VUE_INSTANCE_SETTERS__`,e=>U=e),Ra=t(`__VUE_SSR_SETTERS__`,e=>Ha=e)}var za=e=>{let t=U;return La(e),e.scope.on(),()=>{e.scope.off(),La(t)}},Ba=()=>{U&&U.scope.off(),La(null)};function Va(e){return e.vnode.shapeFlag&4}var Ha=!1;function Ua(e,t=!1,n=!1){t&&Ra(t);let{props:r,children:i}=e.vnode,a=Va(e);Ci(e,r,a,t),Ii(e,i,n||t);let o=a?Wa(e,t):void 0;return t&&Ra(!1),o}function Wa(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vr);let{setup:r}=n;if(r){Ke();let n=e.setupContext=r.length>1?Ja(e):null,i=za(e),a=un(r,e,0,[e.props,n]),o=y(a);if(qe(),i(),(o||e.sp)&&!dr(e)&&or(e),o){if(a.then(Ba,Ba),t)return a.then(n=>{Ra(!0);try{Ga(e,n,t)}finally{Ra(!1)}}).catch(t=>{fn(t,e,0)});e.asyncDep=a}else Ga(e,a,t)}else Ka(e,t)}function Ga(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=en(t)),Ka(e,n)}function Ka(e,t,n){let i=e.type;e.render||=i.render||r;{let t=za(e);Ke();try{Wr(e)}finally{qe(),t()}}}var qa={get(e,t){return M(e,`get`,``),e[t]}};function Ja(e){return{attrs:new Proxy(e.attrs,qa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Ya(e){return e.exposed?e.exposeProxy||=new Proxy(en(Gt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zr)return zr[n](e)},has(e,t){return t in e||t in zr}}):e.proxy}function Xa(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function Za(e){return h(e)&&`__vccOpts`in e}var Qa=(e,t)=>nn(e,t,Ha);function $a(e,t,n){try{ma(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?va(t)?H(e,null,[t]):H(e,t):H(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&va(n)&&(n=[n]),H(e,t,n))}finally{ma(1)}}var eo=`3.5.43`,to=void 0,no=typeof window<`u`&&window.trustedTypes;if(no)try{to=no.createPolicy(`vue`,{createHTML:e=>e})}catch{}var ro=to?e=>to.createHTML(e):e=>e,io=`http://www.w3.org/2000/svg`,ao=`http://www.w3.org/1998/Math/MathML`,oo=typeof document<`u`?document:null,so=oo&&oo.createElement(`template`),co={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?oo.createElementNS(io,e):t===`mathml`?oo.createElementNS(ao,e):n?oo.createElement(e,{is:n}):oo.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>oo.createTextNode(e),createComment:e=>oo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>oo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{so.innerHTML=ro(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=so.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},lo=`transition`,uo=`animation`,fo=Symbol(`_vtc`),po={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mo=s({},Jn,po),ho=(e=>(e.displayName=`Transition`,e.props=mo,e))((e,{slots:t})=>$a(Qn,vo(e),t)),go=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},_o=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function vo(e){let t={};for(let n in e)n in po||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=yo(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,ee=(e,t,n,r)=>{e._enterCancelled=r,So(e,t?d:c),So(e,t?u:o),n&&n()},te=(e,t)=>{e._isLeaving=!1,So(e,f),So(e,m),So(e,p),t&&t()},E=e=>(t,n)=>{let i=e?w:y,o=()=>ee(t,e,n);go(i,[t,o]),Co(()=>{So(t,e?l:a),xo(t,e?d:c),_o(i)||To(t,r,g,o)})};return s(t,{onBeforeEnter(e){go(v,[e]),xo(e,a),xo(e,o)},onBeforeAppear(e){go(C,[e]),xo(e,l),xo(e,u)},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>te(e,t);xo(e,f),e._enterCancelled?(xo(e,p),ko(e)):(ko(e),xo(e,p)),Co(()=>{e._isLeaving&&(So(e,f),xo(e,m),_o(x)||To(e,r,_,n))}),go(x,[e,n])},onEnterCancelled(e){ee(e,!1,void 0,!0),go(b,[e])},onAppearCancelled(e){ee(e,!0,void 0,!0),go(T,[e])},onLeaveCancelled(e){te(e),go(S,[e])}})}function yo(e){if(e==null)return null;if(v(e))return[bo(e.enter),bo(e.leave)];{let t=bo(e);return[t,t]}}function bo(e){return se(e)}function xo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[fo]||(e[fo]=new Set)).add(t)}function So(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[fo];n&&(n.delete(t),n.size||(e[fo]=void 0))}function Co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var wo=0;function To(e,t,n,r){let i=e._endId=++wo,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=Eo(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function Eo(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${lo}Delay`),a=r(`${lo}Duration`),o=Do(i,a),s=r(`${uo}Delay`),c=r(`${uo}Duration`),l=Do(s,c),u=null,d=0,f=0;t===lo?o>0&&(u=lo,d=o,f=a.length):t===uo?l>0&&(u=uo,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?lo:uo:null,f=u?u===lo?a.length:c.length:0);let p=u===lo&&/\b(?:transform|all)(?:,|$)/.test(r(`${lo}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Do(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Oo(t)+Oo(e[n])))}function Oo(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function ko(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ao(e,t,n){let r=e[fo];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var jo=Symbol(`_vod`),Mo=Symbol(`_vsh`),No={name:`show`,beforeMount(e,{value:t},{transition:n}){e[jo]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Po(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Po(e,!0),r.enter(e)):r.leave(e,()=>{Po(e,!1)}):Po(e,t))},beforeUnmount(e,{value:t}){Po(e,t)}};function Po(e,t){e.style.display=t?e[jo]:`none`,e[Mo]=!t}var Fo=Symbol(``),Io=/(?:^|;)\s*display\s*:/;function Lo(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t){if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??zo(r,t,``)}else for(let e in t)n[e]??zo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?zo(r,i,``):Uo(e,i,!g(t)&&t?t[i]:void 0,o)||zo(r,i,o)}}else if(i){if(t!==n){let e=r[Fo];e&&(n+=`;`+e),r.cssText=n,a=Io.test(n)}}else t&&e.removeAttribute(`style`);jo in e&&(e[jo]=a?r.display:``,e[Mo]&&(r.display=`none`))}var Ro=/\s*!important$/;function zo(e,t,n){if(d(n))n.forEach(n=>zo(e,t,n));else if(n??=``,t.startsWith(`--`))Ro.test(n)?e.setProperty(t,n.replace(Ro,``),`important`):e.setProperty(t,n);else{let r=Ho(e,t);Ro.test(n)?e.setProperty(D(r),n.replace(Ro,``),`important`):e[r]=n}}var Bo=[`Webkit`,`Moz`,`ms`],Vo={};function Ho(e,t){let n=Vo[t];if(n)return n;let r=E(t);if(r!==`filter`&&r in e)return Vo[t]=r;r=re(r);for(let n=0;n<Bo.length;n++){let i=Bo[n]+r;if(i in e)return Vo[t]=i}return t}function Uo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Wo=`http://www.w3.org/1999/xlink`;function Go(e,t,n,r,i,a=_e(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Wo,t.slice(6,t.length)):e.setAttributeNS(Wo,t,n):n==null||a&&!ve(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ko(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?ro(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ve(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function qo(e,t,n,r){e.addEventListener(t,n,r)}function Jo(e,t,n,r){e.removeEventListener(t,n,r)}var Yo=Symbol(`_vei`);function Xo(e,t,n,r,i=null){let a=e[Yo]||(e[Yo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=$o(t);r?qo(e,n,a[t]=rs(r,i),s):o&&(Jo(e,n,o,s),a[t]=void 0)}}var Zo=/(Once|Passive|Capture)$/,Qo=/^on:?(?:Once|Passive|Capture)$/;function $o(e){let t,n;for(;(n=e.match(Zo))&&!Qo.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):D(e.slice(2)),t]}var es=0,ts=Promise.resolve(),ns=()=>es||=(ts.then(()=>es=0),Date.now());function rs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&dn(e,t,5,a)}}else dn(r,t,5,[e])};return n.value=e,n.attached=ns(),n}var is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,as=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Ao(e,r,c):t===`style`?Lo(e,n,r):a(t)?o(t)||Xo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):os(e,t,r,c))?(Ko(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Go(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ss(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ko(e,E(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Go(e,t,r,c))};function os(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&is(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return is(t)&&g(n)?!1:t in e}function ss(e,t){let n=e._def.props;if(!n)return!1;let r=E(t);return Array.isArray(n)?n.some(e=>E(e)===r):Object.keys(n).some(e=>E(e)===r)}var cs={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},ls=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=D(n.key);if(t.some(e=>e===r||cs[e]===r))return e(n)}))},us=s({patchProp:as},co),ds;function fs(){return ds||=Ri(us)}var ps=((...e)=>{let t=fs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=hs(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,ms(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function ms(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function hs(e){return g(e)?document.querySelector(e):e}var gs=globalThis,_s=gs.ShadowRoot&&(gs.ShadyCSS===void 0||gs.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,vs=Symbol(),ys=new WeakMap,bs=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==vs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(_s&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ys.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ys.set(t,e))}return e}toString(){return this.cssText}},xs=e=>new bs(typeof e==`string`?e:e+``,void 0,vs),W=(e,...t)=>new bs(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,vs),Ss=(e,t)=>{if(_s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=gs.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Cs=_s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return xs(t)})(e):e,{is:ws,defineProperty:Ts,getOwnPropertyDescriptor:Es,getOwnPropertyNames:Ds,getOwnPropertySymbols:Os,getPrototypeOf:ks}=Object,As=globalThis,js=As.trustedTypes,Ms=js?js.emptyScript:``,Ns=As.reactiveElementPolyfillSupport,Ps=(e,t)=>e,Fs={toAttribute(e,t){switch(t){case Boolean:e=e?Ms:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Is=(e,t)=>!ws(e,t),Ls={attribute:!0,type:String,converter:Fs,reflect:!1,useDefault:!1,hasChanged:Is};Symbol.metadata??=Symbol(`metadata`),As.litPropertyMetadata??=new WeakMap;var Rs=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ls){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ts(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Es(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ls}static _$Ei(){if(this.hasOwnProperty(Ps(`elementProperties`)))return;let e=ks(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ps(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ps(`properties`))){let e=this.properties,t=[...Ds(e),...Os(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Cs(e))}else e!==void 0&&t.push(Cs(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ss(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Fs:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Fs:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Is)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Rs.elementStyles=[],Rs.shadowRootOptions={mode:`open`},Rs[Ps(`elementProperties`)]=new Map,Rs[Ps(`finalized`)]=new Map,Ns?.({ReactiveElement:Rs}),(As.reactiveElementVersions??=[]).push(`2.1.2`);var zs=globalThis,Bs=e=>e,Vs=zs.trustedTypes,Hs=Vs?Vs.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Us=`$lit$`,Ws=`lit$${Math.random().toFixed(9).slice(2)}$`,Gs=`?`+Ws,Ks=`<${Gs}>`,qs=document,Js=()=>qs.createComment(``),Ys=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Xs=Array.isArray,Zs=e=>Xs(e)||typeof e?.[Symbol.iterator]==`function`,Qs=`[ 	
\f\r]`,$s=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ec=/-->/g,tc=/>/g,nc=RegExp(`>|${Qs}(?:([^\\s"'>=/]+)(${Qs}*=${Qs}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),rc=/'/g,ic=/"/g,ac=/^(?:script|style|textarea|title)$/i,oc=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),G=oc(1),sc=oc(2),cc=Symbol.for(`lit-noChange`),K=Symbol.for(`lit-nothing`),lc=new WeakMap,uc=qs.createTreeWalker(qs,129);function dc(e,t){if(!Xs(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Hs===void 0?t:Hs.createHTML(t)}var fc=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=$s;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===$s?c[1]===`!--`?o=ec:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=nc):(ac.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=nc):o=tc:o===nc?c[0]===`>`?(o=i??$s,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?nc:c[3]===`"`?ic:rc):o===ic||o===rc?o=nc:o===ec||o===tc?o=$s:(o=nc,i=void 0);let d=o===nc&&e[t+1].startsWith(`/>`)?` `:``;a+=o===$s?n+Ks:l>=0?(r.push(s),n.slice(0,l)+Us+n.slice(l)+Ws+d):n+Ws+(l===-2?t:d)}return[dc(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},pc=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=fc(t,n);if(this.el=e.createElement(l,r),uc.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=uc.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Us)){let t=u[o++],n=i.getAttribute(e).split(Ws),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?vc:r[1]===`?`?yc:r[1]===`@`?bc:_c}),i.removeAttribute(e)}else e.startsWith(Ws)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ac.test(i.tagName)){let e=i.textContent.split(Ws),t=e.length-1;if(t>0){i.textContent=Vs?Vs.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Js()),uc.nextNode(),c.push({type:2,index:++a});i.append(e[t],Js())}}}else if(i.nodeType===8){if(i.data===Gs)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ws,e+1))!==-1;)c.push({type:7,index:a}),e+=Ws.length-1}}a++}}static createElement(e,t){let n=qs.createElement(`template`);return n.innerHTML=e,n}};function mc(e,t,n=e,r){if(t===cc)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ys(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=mc(e,i._$AS(e,t.values),i,r)),t}var hc=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??qs).importNode(t,!0);uc.currentNode=r;let i=uc.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new gc(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new xc(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=uc.nextNode(),a++)}return uc.currentNode=qs,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},gc=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=mc(this,e,t),Ys(e)?e===K||e==null||e===``?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==cc&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Zs(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&Ys(this._$AH)?this._$AA.nextSibling.data=e:this.T(qs.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=pc.createElement(dc(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new hc(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=lc.get(e.strings);return t===void 0&&lc.set(e.strings,t=new pc(e)),t}k(t){Xs(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Js()),this.O(Js()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Bs(e).nextSibling;Bs(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},_c=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=mc(this,e,t,0),a=!Ys(e)||e!==this._$AH&&e!==cc,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=mc(this,r[n+o],t,o),s===cc&&(s=this._$AH[o]),a||=!Ys(s)||s!==this._$AH[o],s===K?e=K:e!==K&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},vc=class extends _c{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}},yc=class extends _c{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}},bc=class extends _c{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=mc(this,e,t,0)??K)===cc)return;let n=this._$AH,r=e===K&&n!==K||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==K&&(n===K||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xc=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){mc(this,e)}},Sc=zs.litHtmlPolyfillSupport;Sc?.(pc,gc),(zs.litHtmlVersions??=[]).push(`3.3.3`);var Cc=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new gc(t.insertBefore(Js(),e),e,void 0,n??{})}return i._$AI(e),i},wc=globalThis,q=class extends Rs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cc(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return cc}};q._$litElement$=!0,q.finalized=!0,wc.litElementHydrateSupport?.({LitElement:q});var Tc=wc.litElementPolyfillSupport;Tc?.({LitElement:q}),(wc.litElementVersions??=[]).push(`4.2.2`);var J=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Ec={attribute:!0,type:String,converter:Fs,reflect:!1,hasChanged:Is},Dc=(e=Ec,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Y(e){return(t,n)=>typeof n==`object`?Dc(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var Oc=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function kc(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Oc(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Oc(n,r,{get(){return a(this)}})}}function Ac(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return Oc(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter(e=>e.matches(i))}})}}var jc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mc=class extends q{static{this.styles=W`
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
    `}constructor(){super(),this.exclusive=!1,this._onToggle=e=>{if(!this.exclusive)return;let t=e.target;if(t.open)for(let e of this._items)e!==t&&e.open&&(e.open=!1)},this.addEventListener(`mfp-accordion-toggle`,this._onToggle)}render(){return G`<slot></slot>`}};jc([Y({type:Boolean})],Mc.prototype,`exclusive`,void 0),jc([Ac({selector:`mfp-accordion-item`})],Mc.prototype,`_items`,void 0),Mc=jc([J(`mfp-accordion`)],Mc);var Nc=class extends q{constructor(){super(...arguments),this.label=``,this.open=!1,this.disabled=!1,this._onToggle=e=>{let t=e.target;this.open!==t.open&&(this.open=t.open),this.dispatchEvent(new CustomEvent(`mfp-accordion-toggle`,{bubbles:!0,composed:!0,detail:{open:this.open}})),this.dispatchEvent(new CustomEvent(`mfp-toggle`,{bubbles:!0,composed:!0,detail:{open:this.open}}))}}static{this.styles=W`
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
    `}render(){return G`
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
        `}};jc([Y()],Nc.prototype,`label`,void 0),jc([Y({type:Boolean,reflect:!0})],Nc.prototype,`open`,void 0),jc([Y({type:Boolean,reflect:!0})],Nc.prototype,`disabled`,void 0),Nc=jc([J(`mfp-accordion-item`)],Nc);var Pc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fc=class extends q{constructor(){super(...arguments),this.variant=`neutral`,this.size=`sm`,this.outlined=!1}static{this.styles=W`
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
    `}render(){return G`<slot></slot>`}};Pc([Y({reflect:!0})],Fc.prototype,`variant`,void 0),Pc([Y({reflect:!0})],Fc.prototype,`size`,void 0),Pc([Y({type:Boolean,reflect:!0})],Fc.prototype,`outlined`,void 0),Fc=Pc([J(`mfp-badge`)],Fc);var Ic=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Lc=class extends q{static{this.formAssociated=!0}constructor(){super(),this.variant=`primary`,this.size=`md`,this.disabled=!1,this.loading=!1,this.type=`button`,this._onClick=()=>{this.disabled||this.loading||(this.type===`submit`?this.form?.requestSubmit():this.type===`reset`&&this.form?.reset())},this._internals=this.attachInternals()}get form(){return this._internals.form}static{this.styles=W`
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
    `}render(){return G`
            <button
                type="button"
                ?disabled=${this.disabled||this.loading}
                aria-busy=${this.loading?`true`:`false`}
                part="button"
                @click=${this._onClick}
            >
                ${this.loading?G`<span class="spinner" aria-hidden="true"></span>`:``}
                <slot></slot>
            </button>
        `}};Ic([Y({reflect:!0})],Lc.prototype,`variant`,void 0),Ic([Y({reflect:!0})],Lc.prototype,`size`,void 0),Ic([Y({type:Boolean,reflect:!0})],Lc.prototype,`disabled`,void 0),Ic([Y({type:Boolean,reflect:!0})],Lc.prototype,`loading`,void 0),Ic([Y()],Lc.prototype,`type`,void 0),Lc=Ic([J(`mfp-button`)],Lc);var Rc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zc=class extends q{constructor(){super(...arguments),this.variant=`default`,this.padding=`default`,this._onSlotChange=e=>{let t=e.target,n=t.parentElement;n&&(t.assignedNodes({flatten:!0}).length>0?n.removeAttribute(`data-empty`):n.setAttribute(`data-empty`,``))}}static{this.styles=W`
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
    `}render(){return G`
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
        `}};Rc([Y({reflect:!0})],zc.prototype,`variant`,void 0),Rc([Y({reflect:!0})],zc.prototype,`padding`,void 0),zc=Rc([J(`mfp-card`)],zc);var Bc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vc=class extends q{constructor(){super(...arguments),this.variant=`default`}static{this.styles=W`
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
    `}render(){return G` <footer class="inner" part="inner"><slot></slot></footer> `}};Bc([Y({reflect:!0})],Vc.prototype,`variant`,void 0),Vc=Bc([J(`mfp-footer`)],Vc);var Hc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Uc=class extends q{constructor(){super(...arguments),this.variant=`ghost`,this.size=`md`,this.disabled=!1,this.type=`button`,this.label=``}static{this.styles=W`
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
    `}render(){return this.label||console.warn("<mfp-icon-button> requires a `label` attribute for accessibility"),G`
            <button
                type=${this.type}
                ?disabled=${this.disabled}
                aria-label=${this.label}
                part="button"
            >
                <slot></slot>
            </button>
        `}};Hc([Y({reflect:!0})],Uc.prototype,`variant`,void 0),Hc([Y({reflect:!0})],Uc.prototype,`size`,void 0),Hc([Y({type:Boolean,reflect:!0})],Uc.prototype,`disabled`,void 0),Hc([Y()],Uc.prototype,`type`,void 0),Hc([Y()],Uc.prototype,`label`,void 0),Uc=Hc([J(`mfp-icon-button`)],Uc);var Wc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gc=0,Kc=class extends q{static{this.styles=W`
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
    `}static{this.formAssociated=!0}constructor(){super(),this.size=`md`,this.type=`text`,this.value=``,this.name=``,this.label=``,this.placeholder=``,this.hint=``,this.error=``,this.disabled=!1,this.readonly=!1,this.required=!1,this._id=`mfp-input-${++Gc}`,this._onInput=e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent(`input`,{bubbles:!0,composed:!0,detail:{value:t.value}}))},this._onChange=e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{value:t.value}}))},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},`Please fill out this field.`):this._internals.setValidity({})}willUpdate(e){(e.has(`value`)||e.has(`required`)||e.has(`error`))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){let e=this.error.length>0,t=this._id,n=`${t}-hint`,r=`${t}-error`,i=e?r:this.hint?n:void 0;return G`
            ${this.label?G`<label part="label" for=${t}>
                      ${this.label}
                      ${this.required?G`<span class="required" aria-hidden="true">*</span>`:K}
                  </label>`:K}
            <div part="control" class="control ${e?`invalid`:``}">
                <slot name="prefix"></slot>
                <input
                    id=${t}
                    part="input"
                    type=${this.type}
                    .value=${this.value}
                    name=${this.name}
                    placeholder=${this.placeholder}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-invalid=${e?`true`:`false`}
                    aria-describedby=${i??K}
                    @input=${this._onInput}
                    @change=${this._onChange}
                />
                <slot name="suffix"></slot>
            </div>
            ${e?G`<p part="error" id=${r} class="error" role="alert">${this.error}</p>`:this.hint?G`<p part="hint" id=${n} class="hint">${this.hint}</p>`:K}
        `}};Wc([Y({reflect:!0})],Kc.prototype,`size`,void 0),Wc([Y()],Kc.prototype,`type`,void 0),Wc([Y()],Kc.prototype,`value`,void 0),Wc([Y()],Kc.prototype,`name`,void 0),Wc([Y()],Kc.prototype,`label`,void 0),Wc([Y()],Kc.prototype,`placeholder`,void 0),Wc([Y()],Kc.prototype,`hint`,void 0),Wc([Y()],Kc.prototype,`error`,void 0),Wc([Y({type:Boolean,reflect:!0})],Kc.prototype,`disabled`,void 0),Wc([Y({type:Boolean,reflect:!0})],Kc.prototype,`readonly`,void 0),Wc([Y({type:Boolean,reflect:!0})],Kc.prototype,`required`,void 0),Kc=Wc([J(`mfp-input`)],Kc);var qc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Jc=class extends q{static{this.styles=W`
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
    `}render(){return G`<slot></slot>`}};Jc=qc([J(`mfp-container`)],Jc);var Yc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xc=class extends q{static{this.styles=W`
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
    `}render(){return G`<slot></slot>`}};Xc=Yc([J(`mfp-row`)],Xc);var Zc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qc=class extends q{static{this.styles=W`
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
    `}render(){return G`<slot></slot>`}};Qc=Zc([J(`mfp-col`)],Qc);var $c=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},el=class extends q{constructor(){super(...arguments),this.sticky=!1,this.variant=`default`,this.breakpoint=768,this.menuOpen=!1,this._isCollapsed=!1,this._onResize=e=>{if(!this.breakpoint)return;let t=e[0];t&&this._setCollapsed(t.contentRect.width<this.breakpoint)},this._onDocumentClick=e=>{this.menuOpen&&(e.composedPath().includes(this)||(this.menuOpen=!1))},this._onKeyDown=e=>{e.key===`Escape`&&this.menuOpen&&(this.menuOpen=!1,this.renderRoot.querySelector(`.menu-toggle`)?.focus())},this._onToggleClick=()=>{this.menuOpen=!this.menuOpen},this._onMenuClick=e=>{this.menuOpen&&e.target.closest(`mfp-nav-item`)&&(this.menuOpen=!1)},this._onSlotChange=()=>{this._syncOrientation(this._isCollapsed?`vertical`:`horizontal`)}}static{this.styles=W`
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
    `}_syncOrientation(e){for(let t of this._items)t.orientation=e}_setCollapsed(e){e!==this._isCollapsed&&(this._isCollapsed=e,this.toggleAttribute(`data-collapsed`,e),this._syncOrientation(e?`vertical`:`horizontal`),e||(this.menuOpen=!1))}firstUpdated(){this._syncOrientation(`horizontal`)}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(this._onResize),this._ro.observe(this),document.addEventListener(`click`,this._onDocumentClick),document.addEventListener(`keydown`,this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect(),document.removeEventListener(`click`,this._onDocumentClick),document.removeEventListener(`keydown`,this._onKeyDown)}render(){return G`
            <nav class="bar" aria-label="Main">
                <div class="brand"><slot name="brand"></slot></div>
                <button
                    class="menu-toggle"
                    type="button"
                    part="menu-toggle"
                    aria-label=${this.menuOpen?`Close menu`:`Open menu`}
                    aria-expanded=${this.menuOpen?`true`:`false`}
                    aria-controls="mfp-nav-menu"
                    @click=${this._onToggleClick}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        ${this.menuOpen?sc`
                                  <g transform="rotate(45 12 12)">
                                      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  </g>
                                  <g transform="rotate(-45 12 12)">
                                      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                                  </g>
                              `:sc`
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
        `}};$c([Y({type:Boolean,reflect:!0})],el.prototype,`sticky`,void 0),$c([Y({reflect:!0})],el.prototype,`variant`,void 0),$c([Y({type:Number})],el.prototype,`breakpoint`,void 0),$c([Y({type:Boolean,reflect:!0,attribute:`menu-open`})],el.prototype,`menuOpen`,void 0),$c([Ac({selector:`mfp-nav-item`})],el.prototype,`_items`,void 0),el=$c([J(`mfp-nav-bar`)],el);var tl=class extends q{constructor(){super(...arguments),this.variant=`default`,this._onItemsSlotChange=()=>this._syncOrientation(),this._onNamedSlotChange=e=>{let t=e.target,n=t.parentElement;if(!n)return;let r=t.assignedNodes({flatten:!0}).length>0;n.toggleAttribute(`data-empty`,!r)}}static{this.styles=W`
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
    `}_syncOrientation(){for(let e of this._items)e.orientation=`vertical`}firstUpdated(){this._syncOrientation()}render(){return G`
            <div class="header" part="header" data-empty>
                <slot name="header" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
            <nav class="items" aria-label="Side navigation">
                <slot @slotchange=${this._onItemsSlotChange}></slot>
            </nav>
            <div class="footer" part="footer" data-empty>
                <slot name="footer" @slotchange=${this._onNamedSlotChange}></slot>
            </div>
        `}};$c([Y({reflect:!0})],tl.prototype,`variant`,void 0),$c([Ac({selector:`mfp-nav-item`})],tl.prototype,`_items`,void 0),tl=$c([J(`mfp-side-nav`)],tl);var nl=class extends q{constructor(){super(...arguments),this.href=``,this.active=!1,this.disabled=!1,this.orientation=`horizontal`,this._onClick=e=>{this.disabled&&(e.preventDefault(),e.stopPropagation())}}static{this.styles=W`
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
    `}render(){let e=G`
            <slot name="icon"></slot>
            <span class="label"><slot></slot></span>
        `;return this.href?G`
                <a
                    part="link"
                    href=${this.href}
                    aria-current=${this.active?`page`:K}
                    aria-disabled=${this.disabled?`true`:K}
                    @click=${this._onClick}
                >
                    ${e}
                </a>
            `:G`
            <button
                type="button"
                part="link"
                ?disabled=${this.disabled}
                aria-current=${this.active?`page`:K}
            >
                ${e}
            </button>
        `}};$c([Y()],nl.prototype,`href`,void 0),$c([Y({type:Boolean,reflect:!0})],nl.prototype,`active`,void 0),$c([Y({type:Boolean,reflect:!0})],nl.prototype,`disabled`,void 0),$c([Y({reflect:!0})],nl.prototype,`orientation`,void 0),nl=$c([J(`mfp-nav-item`)],nl);var rl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},il=0,al=class extends q{static{this.styles=W`
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
    `}static{this.formAssociated=!0}constructor(){super(),this.size=`md`,this.value=``,this.name=``,this.label=``,this.placeholder=``,this.hint=``,this.error=``,this.disabled=!1,this.required=!1,this._id=`mfp-select-${++il}`,this._onChange=e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{value:t.value}}))},this._onSlotChange=e=>{let t=e.target,n=this._selectEl;if(!n)return;let r=this.value;n.querySelectorAll(`[data-mfp-cloned]`).forEach(e=>e.remove());let i=t.assignedNodes({flatten:!0}).filter(e=>e.nodeType===Node.ELEMENT_NODE&&(e.tagName===`OPTION`||e.tagName===`OPTGROUP`));for(let e of i){let t=e.cloneNode(!0);t.setAttribute(`data-mfp-cloned`,``),n.appendChild(t)}n.value=r},this._internals=this.attachInternals()}get form(){return this._internals.form}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_syncFormValue(){this._internals.setFormValue(this.value),this.error?this._internals.setValidity({customError:!0},this.error):this.required&&!this.value?this._internals.setValidity({valueMissing:!0},`Please select an option.`):this._internals.setValidity({})}willUpdate(e){(e.has(`value`)||e.has(`required`)||e.has(`error`))&&this._syncFormValue()}connectedCallback(){super.connectedCallback(),this._syncFormValue()}render(){let e=this.error.length>0,t=this._id,n=`${t}-hint`,r=`${t}-error`,i=e?r:this.hint?n:void 0;return G`
            ${this.label?G`<label part="label" for=${t}>
                      ${this.label}
                      ${this.required?G`<span class="required" aria-hidden="true">*</span>`:K}
                  </label>`:K}
            <div part="control" class="control ${e?`invalid`:``}">
                <select
                    id=${t}
                    part="select"
                    .value=${this.value}
                    name=${this.name}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    aria-invalid=${e?`true`:`false`}
                    aria-describedby=${i??K}
                    @change=${this._onChange}
                >
                    ${this.placeholder?G`<option value="" disabled selected hidden data-mfp-placeholder>
                              ${this.placeholder}
                          </option>`:K}
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
            ${e?G`<p part="error" id=${r} class="error" role="alert">${this.error}</p>`:this.hint?G`<p part="hint" id=${n} class="hint">${this.hint}</p>`:K}
        `}};rl([Y({reflect:!0})],al.prototype,`size`,void 0),rl([Y()],al.prototype,`value`,void 0),rl([Y()],al.prototype,`name`,void 0),rl([Y()],al.prototype,`label`,void 0),rl([Y()],al.prototype,`placeholder`,void 0),rl([Y()],al.prototype,`hint`,void 0),rl([Y()],al.prototype,`error`,void 0),rl([Y({type:Boolean,reflect:!0})],al.prototype,`disabled`,void 0),rl([Y({type:Boolean,reflect:!0})],al.prototype,`required`,void 0),rl([kc(`select`)],al.prototype,`_selectEl`,void 0),al=rl([J(`mfp-select`)],al);var ol=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},sl=class extends q{constructor(){super(...arguments),this.size=`md`,this.label=`Loading`}static{this.styles=W`
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
    `}render(){return G`<div class="ring" role="status" aria-label=${this.label}></div>`}};ol([Y({reflect:!0})],sl.prototype,`size`,void 0),ol([Y()],sl.prototype,`label`,void 0),sl=ol([J(`mfp-spinner`)],sl);var cl=`/*
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
`,ll=`/*
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
`,ul=`/*
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
`,dl=`/*
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
`,fl=`/*
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
`,pl=`/*
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
`,ml=`mfp-theme`,hl=`mfp-active-theme`,gl={blue:{label:`Blue`,css:cl},emerald:{label:`Emerald`,css:ll},orange:{label:`Orange`,css:dl},sand:{label:`Sand`,css:fl},terracotta:{label:`Terracotta`,css:pl},navy:{label:`Navy`,css:ul}},_l=`navy`,vl={portfolio:`navy`,warm:`terracotta`,earth:`sand`};function yl(){let e=localStorage.getItem(ml);return e&&vl[e]?vl[e]:e&&e in gl?e:_l}function bl(e){if(!(e in gl))return;let t=document.getElementById(hl);t||(t=document.createElement(`style`),t.id=hl,document.head.appendChild(t)),t.textContent=gl[e].css,localStorage.setItem(ml,e)}function xl(){bl(yl())}var Sl=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Cl={name:`App`,data(){return{currentYear:new Date().getFullYear(),themes:gl,activeTheme:yl(),navLinks:[{to:`/`,label:`Home`},{to:`/about`,label:`About`},{to:`/resume`,label:`Resume`},{to:`/portfolio`,label:`Projects`},{to:`/python`,label:`Python`},{to:`/data`,label:`Data Analysis`}]}},methods:{go(e){this.$route.path!==e&&this.$router.push(e)},onThemeChange(e){let t=e.detail?.value;t&&(bl(t),this.activeTheme=t)},syncNavHeight(){let e=this.$refs.navBar?.offsetHeight;e&&document.documentElement.style.setProperty(`--site-nav-height`,`${e}px`)},syncFooterHeight(){let e=this.$refs.footer?.offsetHeight;e&&document.documentElement.style.setProperty(`--site-footer-height`,`${e}px`)}},mounted(){this.syncNavHeight(),this.syncFooterHeight(),this._navResizeObserver=new ResizeObserver(()=>this.syncNavHeight()),this._navResizeObserver.observe(this.$refs.navBar),this._footerResizeObserver=new ResizeObserver(()=>this.syncFooterHeight()),this._footerResizeObserver.observe(this.$refs.footer)},beforeUnmount(){this._navResizeObserver?.disconnect(),this._footerResizeObserver?.disconnect()}},wl={class:`app-shell`},Tl={ref:`navBar`,sticky:``,variant:`brand`},El=[`active`,`onClick`],Dl={slot:`actions`,class:`navbar-actions`},Ol=[`active`],kl={class:`theme-group`},Al=[`value`],jl=[`value`],Ml={ref:`footer`,variant:`brand`},Nl={class:`footer-copy`};function Pl(e,t,n,r,i,a){let o=Ar(`router-link`),s=Ar(`router-view`);return da(),ga(`div`,wl,[V(`mfp-nav-bar`,Tl,[H(o,{slot:`brand`,to:`/`,class:`brand-link`},{default:jn(()=>[...t[2]||=[Ta(`Melissa Freundschuh-Pula`,-1)]]),_:1}),(da(!0),ga(z,null,Fr(i.navLinks,t=>(da(),ga(`mfp-nav-item`,{key:t.to,active:e.$route.path===t.to,onClick:e=>a.go(t.to)},Te(t.label),9,El))),128)),V(`div`,Dl,[V(`mfp-nav-item`,{active:e.$route.path===`/contact`,onClick:t[0]||=e=>a.go(`/contact`)},`Contact`,8,Ol),V(`label`,kl,[t[3]||=V(`span`,{class:`theme-label`},`Theme:`,-1),V(`mfp-select`,{class:`theme-switcher`,size:`sm`,"aria-label":`Theme`,value:i.activeTheme,onChange:t[1]||=(...e)=>a.onThemeChange&&a.onThemeChange(...e)},[(da(!0),ga(z,null,Fr(i.themes,(e,t)=>(da(),ga(`option`,{key:t,value:t},Te(e.label),9,jl))),128))],40,Al)])])],512),H(s,null,{default:jn(({Component:e})=>[H(ho,{name:`fade`,mode:`out-in`},{default:jn(()=>[(da(),_a(Xi,null,{fallback:jn(()=>[...t[4]||=[V(`div`,{class:`route-loading`},[V(`mfp-spinner`,{size:`lg`,label:`Loading page`})],-1)]]),default:jn(()=>[(da(),_a(Mr(e)))]),_:2},1024))]),_:2},1024)]),_:1}),V(`mfp-footer`,Ml,[V(`span`,Nl,`© `+Te(i.currentYear)+` Melissa Freundschuh-Pula`,1),t[5]||=Ea(`<div class="footer-links"><a href="https://github.com/melissapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a><a href="mailto:melissa_m_24@yahoo.com" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a></div>`,1)],512)])}var Fl=Sl(Cl,[[`render`,Pl]]),Il=typeof document<`u`;function Ll(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Rl(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Ll(e.default)}var X=Object.assign;function zl(e,t){let n={};for(let r in t){let i=t[r];n[r]=Vl(i)?i.map(e):e(i)}return n}var Bl=()=>{},Vl=Array.isArray;function Hl(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Ul=/#/g,Wl=/&/g,Gl=/\//g,Kl=/=/g,ql=/\?/g,Jl=/\+/g,Yl=/%5B/g,Xl=/%5D/g,Zl=/%5E/g,Ql=/%60/g,$l=/%7B/g,eu=/%7C/g,tu=/%7D/g,nu=/%20/g;function ru(e){return e==null?``:encodeURI(``+e).replace(eu,`|`).replace(Yl,`[`).replace(Xl,`]`)}function iu(e){return ru(e).replace($l,`{`).replace(tu,`}`).replace(Zl,`^`)}function au(e){return ru(e).replace(Jl,`%2B`).replace(nu,`+`).replace(Ul,`%23`).replace(Wl,`%26`).replace(Ql,"`").replace($l,`{`).replace(tu,`}`).replace(Zl,`^`)}function ou(e){return au(e).replace(Kl,`%3D`)}function su(e){return ru(e).replace(Ul,`%23`).replace(ql,`%3F`)}function cu(e){return su(e).replace(Gl,`%2F`)}function lu(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var uu=/\/$/,du=e=>e.replace(uu,``);function fu(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=bu(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:lu(o)}}function pu(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function mu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function hu(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&gu(t.matched[r],n.matched[i])&&_u(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gu(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _u(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!vu(e[n],t[n]))return!1;return!0}function vu(e,t){return Vl(e)?yu(e,t):Vl(t)?yu(t,e):e?.valueOf()===t?.valueOf()}function yu(e,t){return Vl(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function bu(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var xu={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Su=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Cu=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function wu(e){if(!e){if(Il){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),du(e)}var Tu=/^[^#]+#/;function Eu(e,t){return e.replace(Tu,`#`)+t}function Du(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Ou=()=>({left:window.scrollX,top:window.scrollY});function ku(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Du(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Au(e,t){return(history.state?history.state.position-t:-1)+e}var ju=new Map;function Mu(e,t){ju.set(e,t)}function Nu(e){let t=ju.get(e);return ju.delete(e),t}function Pu(e){return typeof e==`string`||e&&typeof e==`object`}function Fu(e){return typeof e==`string`||typeof e==`symbol`}var Z=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Iu=Symbol(``);Z.MATCHER_NOT_FOUND,Z.NAVIGATION_GUARD_REDIRECT,Z.NAVIGATION_ABORTED,Z.NAVIGATION_CANCELLED,Z.NAVIGATION_DUPLICATED;function Lu(e,t){return X(Error(),{type:e,[Iu]:!0},t)}function Ru(e,t){return e instanceof Error&&Iu in e&&(t==null||!!(e.type&t))}function zu(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Jl,` `),i=r.indexOf(`=`),a=lu(i<0?r:r.slice(0,i)),o=i<0?null:lu(r.slice(i+1));if(a in t){let e=t[a];Vl(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Bu(e){let t=``;for(let n in e){let r=e[n];if(n=ou(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Vl(r)?r.map(e=>e&&au(e)):[r&&au(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Vu(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Vl(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Hu=Symbol(``),Uu=Symbol(``),Wu=Symbol(``),Gu=Symbol(``),Ku=Symbol(``);function qu(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ju(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Lu(Z.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Pu(e)?c(Lu(Z.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Yu(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(Ll(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Ju(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Rl(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Ju(c,n,r,o,e,i)()}))}}}return a}function Xu(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>gu(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>gu(e,s))||i.push(s))}return[n,r,i]}var Zu=()=>location.protocol+`//`+location.host;function Qu(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),mu(n,``)}return mu(n,e)+r+i}function $u(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Qu(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Su.pop,direction:u?u>0?Cu.forward:Cu.back:Cu.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(X({},e.state,{scroll:Ou()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function ed(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ou():null}}function td(e){let{history:t,location:n}=window,r={value:Qu(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Zu()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,X({},t.state,ed(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=X({},i.value,t.state,{forward:e,scroll:Ou()});a(o.current,o,!0),a(e,X({},ed(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function nd(e){e=wu(e);let t=td(e),n=$u(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=X({location:``,base:e,go:r,createHref:Eu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function rd(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),nd(e)}var id=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Q=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Q||{}),ad={type:id.Static,value:``},od=/[a-zA-Z0-9_]/;function sd(e){if(!e)return[[]];if(e===`/`)return[[ad]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Q.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Q.Static?a.push({type:id.Static,value:l}):n===Q.Param||n===Q.ParamRegExp||n===Q.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:id.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Q.ParamRegExp){r=n,n=Q.EscapeNext;continue}switch(n){case Q.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Q.Param):f();break;case Q.EscapeNext:f(),n=r;break;case Q.Param:c===`(`?n=Q.ParamRegExp:od.test(c)?f():(d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Q.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Q.ParamRegExpEnd:u+=c;break;case Q.ParamRegExpEnd:d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}}return n===Q.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var cd=`[^/]+?`,ld={sensitive:!1,strict:!1,start:!0,end:!0},$=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}($||{}),ud=/[.+*?^${}()[\]/\\]/g;function dd(e,t){let n=X({},ld,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[$.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=$.Segment+(n.sensitive?$.BonusCaseSensitive:0);if(o.type===id.Static)r||(i+=`/`),i+=o.value.replace(ud,`\\$&`),s+=$.Static;else if(o.type===id.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||cd;if(u!==cd){s+=$.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=$.Dynamic,c&&(s+=$.BonusOptional),n&&(s+=$.BonusRepeatable),u===`.*`&&(s+=$.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=$.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===id.Static)n+=e.value;else if(e.type===id.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Vl(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Vl(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function fd(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===$.Static+$.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$.Static+$.Segment?1:-1:0}function pd(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=fd(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(md(r))return 1;if(md(i))return-1}return i.length-r.length}function md(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var hd={strict:!1,end:!0,sensitive:!1};function gd(e,t,n){let r=X(dd(sd(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function _d(e,t){let n=[],r=new Map;t=Hl(hd,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=yd(e);s.aliasOf=r&&r.record;let l=Hl(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(yd(X({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=gd(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!xd(d)&&o(e.name)),Td(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Bl}function o(e){if(Fu(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Cd(e,n);n.splice(t,0,e),e.record.name&&!xd(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Lu(Z.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=X(vd(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&vd(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Lu(Z.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=X({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Sd(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function vd(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function yd(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:bd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function bd(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function xd(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Sd(e){return e.reduce((e,t)=>X(e,t.meta),{})}function Cd(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;pd(e,t[i])<0?r=i:n=i+1}let i=wd(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function wd(e){let t=e;for(;t=t.parent;)if(Td(t)&&pd(e,t)===0)return t}function Td({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ed(e){let t=Fn(Wu),n=Fn(Gu),r=Qa(()=>{let n=Qt(e.to);return t.resolve(n)}),i=Qa(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(gu.bind(null,i));if(o>-1)return o;let s=jd(e[t-2]);return t>1&&jd(i)===s&&a[a.length-1].path!==s?a.findIndex(gu.bind(null,e[t-2])):o}),a=Qa(()=>i.value>-1&&Ad(n.params,r.value.params)),o=Qa(()=>i.value>-1&&i.value===n.matched.length-1&&_u(n.params,r.value.params));function s(n={}){if(kd(n)){let n=t[Qt(e.replace)?`replace`:`push`](Qt(e.to)).catch(Bl);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Qa(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Dd(e){return e.length===1?e[0]:e}var Od=ar({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Ed,setup(e,{slots:t}){let n=Lt(Ed(e)),{options:r}=Fn(Wu),i=Qa(()=>({[Md(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Md(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Dd(t.default(n));return e.custom?r:$a(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function kd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ad(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Vl(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function jd(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Md=(e,t,n)=>e??t??n,Nd=ar({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Fn(Ku),i=Qa(()=>e.route||r.value),a=Fn(Uu,0),o=Qa(()=>{let e=Qt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Qa(()=>i.value.matched[o.value]);Pn(Uu,Qa(()=>o.value+1)),Pn(Hu,s),Pn(Ku,i);let c=Jt();return Rn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!gu(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Pd(n.default,{Component:l,route:r});let u=o.props[a],d=$a(l,X({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Pd(n.default,{Component:d,route:r})||d}}});function Pd(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Fd=Nd;function Id(e){let t=_d(e.routes,e),n=e.parseQuery||zu,r=e.stringifyQuery||Bu,i=e.history,a=qu(),o=qu(),s=qu(),c=Yt(xu),l=xu;Il&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=zl.bind(null,e=>``+e),d=zl.bind(null,cu),f=zl.bind(null,lu);function p(e,n){let r,i;return Fu(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=X({},a||c.value),typeof e==`string`){let r=fu(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return X(r,o,{params:f(o.params),hash:lu(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=X({},e,{path:fu(n,e.path,a.path).path});else{let t=X({},e.params);for(let e in t)t[e]??delete t[e];o=X({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=pu(r,X({},e,{hash:iu(l),path:s.path})),m=i.createHref(p);return X({fullPath:p,hash:l,query:r===Bu?Vu(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?fu(n,e,c.value.path):X({},e)}function y(e,t){if(l!==e)return Lu(Z.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(X(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),X({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(X(v(u),{state:typeof u==`object`?X({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&hu(r,i,n)&&(f=Lu(Z.NAVIGATION_DUPLICATED,{to:d,from:i}),se(i,i,!0,!1)),(f?Promise.resolve(f):ee(d,i)).catch(e=>Ru(e)?Ru(e,Z.NAVIGATION_GUARD_REDIRECT)?e:oe(e):ae(e,d,i)).then(e=>{if(e){if(Ru(e,Z.NAVIGATION_GUARD_REDIRECT))return C(X({replace:s},v(e.to),{state:typeof e.to==`object`?X({},a,e.to.state):a,force:o}),t||d)}else e=E(d,i,!0,s,a);return te(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=ue.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ee(e,t){let n,[r,i,s]=Xu(e,t);n=Yu(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Ju(r,e,t))});let c=w.bind(null,e,t);return n.push(c),fe(n).then(()=>{n=[];for(let r of a.list())n.push(Ju(r,e,t));return n.push(c),fe(n)}).then(()=>{n=Yu(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Ju(r,e,t))});return n.push(c),fe(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Vl(r.beforeEnter))for(let i of r.beforeEnter)n.push(Ju(i,e,t));else n.push(Ju(r.beforeEnter,e,t))}return n.push(c),fe(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Yu(s,`beforeRouteEnter`,e,t,T),n.push(c),fe(n))).then(()=>{n=[];for(let r of o.list())n.push(Ju(r,e,t));return n.push(c),fe(n)}).catch(e=>Ru(e,Z.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function te(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function E(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===xu,l=Il?history.state:{};n&&(r||s?i.replace(e.fullPath,X({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,se(e,t,n,s),oe()}let ne;function D(){ne||=i.listen((e,t,n)=>{if(!de.listening)return;let r=_(e),a=S(r,de.currentRoute.value);if(a){C(X(a,{replace:!0,force:!0}),r).catch(Bl);return}l=r;let o=c.value;Il&&Mu(Au(o.fullPath,n.delta),Ou()),ee(r,o).catch(e=>Ru(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_CANCELLED)?e:Ru(e,Z.NAVIGATION_GUARD_REDIRECT)?(C(X(v(e.to),{force:!0}),r).then(e=>{Ru(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Su.pop&&i.go(-1,!1)}).catch(Bl),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ae(e,r,o))).then(e=>{e||=E(r,o,!1),e&&(n.delta&&!Ru(e,Z.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Su.pop&&Ru(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),te(r,o,e)}).catch(Bl)})}let re=qu(),ie=qu(),O;function ae(e,t,n){oe(e);let r=ie.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function k(){return O&&c.value!==xu?Promise.resolve():new Promise((e,t)=>{re.add([e,t])})}function oe(e){return O||(O=!e,D(),re.list().forEach(([t,n])=>e?n(e):t()),re.reset()),e}function se(t,n,r,i){let{scrollBehavior:a}=e;if(!Il||!a)return Promise.resolve();let o=!r&&Nu(Au(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return bn().then(()=>a(t,n,o)).then(e=>e&&ku(e)).catch(e=>ae(e,t,n))}let ce=e=>i.go(e),le,ue=new Set,de={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ie.add,isReady:k,install(e){e.component(`RouterLink`,Od),e.component(`RouterView`,Fd),e.config.globalProperties.$router=de,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(c)}),Il&&!le&&c.value===xu&&(le=!0,b(i.location).catch(e=>{}));let t={};for(let e in xu)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Wu,de),e.provide(Gu,Rt(t)),e.provide(Ku,c);let n=e.unmount;ue.add(e),e.unmount=function(){ue.delete(e),ue.size<1&&(l=xu,ne&&ne(),ne=null,c.value=xu,le=!1,O=!1),n()}}};function fe(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return de}var Ld=`/assets/Family-TJUrK4ZO.jpeg`,Rd={name:`Home`},zd={size:`xl`,class:`home-page`},Bd={class:`hero-grid`},Vd={class:`hero-text`},Hd={class:`mt-lg hero-actions`},Ud=[`onClick`],Wd=[`onClick`],Gd=[`onClick`];function Kd(e,t,n,r,i,a){let o=Ar(`router-link`);return da(),ga(`mfp-container`,zd,[V(`div`,Bd,[t[3]||=V(`div`,{class:`hero-image text-center`},[V(`img`,{src:Ld,class:`img-fluid rounded shadow`,style:{"max-height":`calc(100vh - 120px - var(--site-footer-height, 64px))`,"object-fit":`contain`},alt:`Melissa with her wife and four kids`})],-1),V(`div`,Vd,[t[0]||=V(`h1`,{class:`hero-name`},`Melissa Freundschuh-Pula`,-1),t[1]||=V(`h4`,{class:`hero-title mt-sm`},`Full-Stack Software Engineer`,-1),t[2]||=V(`p`,{class:`hero-intro mt-md`,style:{color:`#2c3e50`}},` Six-plus years building enterprise web apps, plus live products I ship on my own. Wife, mom of four, Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper. `,-1),V(`div`,Hd,[H(o,{to:`/portfolio`,custom:``},{default:jn(({navigate:e})=>[V(`mfp-button`,{variant:`primary`,onClick:e},`See Projects`,8,Ud)]),_:1}),H(o,{to:`/resume`,custom:``},{default:jn(({navigate:e})=>[V(`mfp-button`,{variant:`secondary`,onClick:e},`Resume`,8,Wd)]),_:1}),H(o,{to:`/contact`,custom:``},{default:jn(({navigate:e})=>[V(`mfp-button`,{variant:`secondary`,onClick:e},`Get In Touch`,8,Gd)]),_:1})])])])])}var qd=Sl(Rd,[[`render`,Kd],[`__scopeId`,`data-v-ef79255b`]]),Jd=`modulepreload`,Yd=function(e){return`/`+e},Xd={},Zd=function(e){return e.pathname.endsWith(`.css`)},Qd=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Yd(t,n);let r=s(t);if(r.href in Xd)return;Xd[r.href]=!0;let i=Zd(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:Jd,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},$d=[{path:`/`,name:`Home`,component:qd,meta:{title:`Home`}},{path:`/about`,name:`About`,component:()=>Qd(()=>import(`./about-Dy6MYZ1U.js`),__vite__mapDeps([0,1])),meta:{title:`About`}},{path:`/resume`,name:`Resume`,component:()=>Qd(()=>import(`./resume-CkFaVn1N.js`),__vite__mapDeps([2,3])),meta:{title:`Resume`}},{path:`/portfolio`,name:`Portfolio`,component:()=>Qd(()=>import(`./portfolio-CBZEnOvs.js`),__vite__mapDeps([4,5,6,7])),meta:{title:`Projects`}},{path:`/python`,name:`PythonCode`,component:()=>Qd(()=>import(`./pythonCode-Qfzyobq9.js`),__vite__mapDeps([8,9,10,5,6,11])),meta:{title:`Python`}},{path:`/data`,name:`DataAnalysis`,component:()=>Qd(()=>import(`./dataAnalysis-C1x3aOFV.js`),__vite__mapDeps([12,9,10,5,6,13])),meta:{title:`Data Analysis`}},{path:`/contact`,name:`Contact`,component:()=>Qd(()=>import(`./contact-BxpPCaK2.js`),__vite__mapDeps([14,15])),meta:{title:`Contact`}},{path:`/:pathMatch(.*)*`,name:`NotFound`,component:()=>Qd(()=>import(`./notFound-B2U6glBh.js`),__vite__mapDeps([16,17])),meta:{title:`Page Not Found`}}],ef=`Melissa Freundschuh-Pula`,tf=Id({history:rd(),routes:$d});tf.afterEach(e=>{let t=e.meta?.title;document.title=t?`${t} | ${ef}`:ef});var nf=(e,t={})=>new Promise((n,r)=>{if(typeof document>`u`)return;let i=document.head||document.getElementsByTagName(`head`)[0],a=document.createElement(`script`);if(a.async=!0,a.src=e,a.defer=t.defer,t.preconnectOrigin){let e=document.createElement(`link`);e.href=t.preconnectOrigin,e.rel=`preconnect`,i.appendChild(e)}i.appendChild(a),a.onload=n,a.onerror=r}),rf=e=>typeof e==`function`,af=e=>e&&typeof e==`object`&&!Array.isArray(e),of=(e,...t)=>{if(!t.length)return e;let n=t.shift();if(af(e)&&af(n)){for(let t in n)af(n[t])?(e[t]||Object.assign(e,{[t]:{}}),of(e[t],n[t])):Object.assign(e,{[t]:n[t]});return of(e,...t)}},sf=()=>typeof window<`u`&&typeof document<`u`,cf=(e={})=>(e.app_name,e.screen_name,e);function lf(e=``,t=``){let n=e.split(`/`),r=t.split(`/`);return n[0]===``&&t[t.length-1]===`/`&&n.shift(),r.join(`/`)+n.join(`/`)}var uf=()=>({bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:`https://www.googletagmanager.com/gtag/js`,customPreconnectOrigin:`https://www.googletagmanager.com`,deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:`dataLayer`,globalObjectName:`gtag`,defaultGroupName:`default`,includes:null,config:{id:null,params:{send_page_view:!1}}}),df={},ff=(e={})=>{df=of(uf(),e)},pf=()=>df,mf=(...e)=>{let{globalObjectName:t}=pf();!sf()||typeof window[t]>`u`||window[t](...e)},hf=(...e)=>{let{config:t,includes:n}=pf();if(mf(`config`,t.id,...e),Array.isArray(n))for(let t of n)mf(`config`,t.id,...e)},gf=(e,t)=>{sf()&&(window[`ga-disable-${e}`]=t)},_f=(e=!0)=>{let{config:t,includes:n}=pf();if(gf(t.id,e),Array.isArray(n))for(let t of n)gf(t.id,e)},vf=()=>{_f(!0)},yf=()=>{_f(!1)},bf=(e,t={})=>{let{includes:n,defaultGroupName:r}=pf();t.send_to==null&&Array.isArray(n)&&n.length&&(t.send_to=n.map(e=>e.id).concat(r)),mf(`event`,e,t)},xf,Sf=e=>{xf=e},Cf=()=>xf,wf=e=>{if(!sf())return;let t;if(typeof e==`string`)t={page_path:e};else if(e.path||e.fullPath){let{pageTrackerUseFullPath:n,pageTrackerPrependBase:r}=pf(),i=Cf()?.options.base,a=n?e.fullPath:e.path;t={...e.name&&{page_title:e.name},page_path:r?lf(a,i):a}}else t=e;t.page_location??(t.page_location=window.location.href),t.send_page_view??(t.send_page_view=!0),bf(`page_view`,t)},Tf=e=>{let{appName:t}=pf();if(!e)return;let n;n=typeof e==`string`?{screen_name:e}:e,n.app_name=n.app_name||t,bf(`screen_view`,n)},Ef=Object.freeze(Object.defineProperty({__proto__:null,config:hf,customMap:e=>{hf({custom_map:e})},event:bf,exception:(...e)=>{bf(`exception`,...e)},linker:e=>{hf(`linker`,e)},optIn:yf,optOut:vf,pageview:wf,purchase:e=>{bf(`purchase`,e)},query:mf,refund:(...e)=>{bf(`refund`,...e)},screenview:Tf,set:(...e)=>{mf(`set`,...e)},time:e=>{bf(`timing_complete`,e)}},Symbol.toStringTag,{value:`Module`})),Df=e=>{e.config.globalProperties.$gtag=Ef},Of=e=>({send_page_view:!1,...e}),kf=()=>{let{config:e,includes:t}=pf();if(mf(`config`,e.id,Of(e.params)),Array.isArray(t))for(let e of t)mf(`config`,e.id,Of(e.params))},Af=(e={},t={})=>{let{appName:n,pageTrackerTemplate:r,pageTrackerScreenviewEnabled:i,pageTrackerSkipSamePath:a}=pf();if(a&&e.path===t.path)return;let o=e;if(rf(r)?o=r(e,t):i&&(o=cf({app_name:n,screen_name:e.name})),i){Tf(o);return}wf(o)},jf=e=>{let{pageTrackerExcludedRoutes:t}=pf();return t.includes(e.path)||t.includes(e.name)},Mf=()=>{let{onBeforeTrack:e,onAfterTrack:t}=pf(),n=Cf();n.isReady().then(()=>{bn().then(()=>{let{currentRoute:e}=n;kf(),!jf(e.value)&&Af(e.value)}),n.afterEach((n,r)=>{bn().then(()=>{jf(n)||(rf(e)&&e(n,r),Af(n,r),rf(t)&&t(n,r))})})})},Nf=()=>{if(!sf())return;let{enabled:e,globalObjectName:t,globalDataLayerName:n}=pf();return window[t]??(window[n]=window[n]||[],window[t]=function(){window[n].push(arguments)}),window[t](`js`,new Date),e||vf(),window[t]},Pf=()=>{let{onReady:e,onError:t,globalObjectName:n,globalDataLayerName:r,config:i,customResourceURL:a,customPreconnectOrigin:o,deferScriptLoad:s,pageTrackerEnabled:c,disableScriptLoad:l}=pf(),u=!!(c&&Cf());if(Nf(),u?Mf():kf(),!l)return nf(`${a}?id=${i.id}&l=${r}`,{preconnectOrigin:o,defer:s}).then(()=>{e&&e(window[n])}).catch(e=>(t&&t(e),e))},Ff=(e,t,n)=>{Df(e),ff(t),Sf(n),pf().bootstrap&&Pf()};xl();var If=ps(Fl);If.use(tf),If.use(Ff,{config:{id:`G-ZP2LCLVZ2X`,params:{send_page_view:!1}}},tf),If.mount(`#app`);export{Te as C,he as S,Ar as _,V as a,Mn as b,ga as c,H as d,Cr as f,Ir as g,Fr as h,z as i,Ea as l,da as m,No as n,_a as o,br as p,ls as r,Da as s,Sl as t,Ta as u,Mr as v,Jt as x,jn as y};
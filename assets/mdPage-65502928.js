import{F as Cn,i as Ct,C as Xf,T as Qf,d as ce,b as Sn,e as nn,f as Xt,g as kr,w as ue,h as wa,j as pn,k,l as m,p as yn,m as Qt,n as Ca,q as D,s as Zf,t as jo,v as Ho,x as dn,y as Ze,z as xt,A as Jf,B as Tn,D as zi,E as Jr,G as Ft,H as li,I as ed,J as Ve,K as wt,L as fr,M as nd,N as td,O as Cs,P as rd,Q as Ss,a as je,R as Ps,o as gt,S as ad,U as Os,c as $t,V as at,W as zo,r as id,X as ui,Y as od,_ as ld,Z as ud}from"./index-4cdad309.js";function Ie(n){return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ie(n)}function sd(n,e){if(Ie(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ie(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function cd(n){var e=sd(n,"string");return Ie(e)==="symbol"?e:String(e)}function B(n,e,t){return e=cd(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Vo(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Vo(Object(t),!0).forEach(function(r){B(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Vo(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ye(){return Ye=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ye.apply(this,arguments)}var fd=function(e){return typeof e=="function"},dd=Array.isArray,vd=function(e){return typeof e=="string"},pd=function(e){return e!==null&&Ie(e)==="object"},hd=/^on[^a-z]/,gd=function(e){return hd.test(e)},As=function(e){var t=Object.create(null);return function(r){var a=t[r];return a||(t[r]=e(r))}},md=/-(\w)/g,Vi=As(function(n){return n.replace(md,function(e,t){return t?t.toUpperCase():""})}),yd=/\B([A-Z])/g,bd=As(function(n){return n.replace(yd,"-$1").toLowerCase()}),xd=Object.prototype.hasOwnProperty,Go=function(e,t){return xd.call(e,t)};function wd(n,e,t,r){var a=n[t];if(a!=null){var i=Go(a,"default");if(i&&r===void 0){var o=a.default;r=a.type!==Function&&fd(o)?o():o}a.type===Boolean&&(!Go(e,t)&&!i?r=!1:r===""&&(r=!0))}return r}function rr(n){return typeof n=="number"?"".concat(n,"px"):n}function dr(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return typeof n=="function"?n(e):n??t}function Pe(){for(var n=[],e=0;e<arguments.length;e++){var t=e<0||arguments.length<=e?void 0:arguments[e];if(t){if(vd(t))n.push(t);else if(dd(t))for(var r=0;r<t.length;r++){var a=Pe(t[r]);a&&n.push(a)}else if(pd(t))for(var i in t)t[i]&&n.push(i)}}return n.join(" ")}var Ts=function(){if(typeof Map<"u")return Map;function n(e,t){var r=-1;return e.some(function(a,i){return a[0]===t?(r=i,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(t){var r=n(this.__entries__,t),a=this.__entries__[r];return a&&a[1]},e.prototype.set=function(t,r){var a=n(this.__entries__,t);~a?this.__entries__[a][1]=r:this.__entries__.push([t,r])},e.prototype.delete=function(t){var r=this.__entries__,a=n(r,t);~a&&r.splice(a,1)},e.prototype.has=function(t){return!!~n(this.__entries__,t)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var a=0,i=this.__entries__;a<i.length;a++){var o=i[a];t.call(r,o[1],o[0])}},e}()}(),si=typeof window<"u"&&typeof document<"u"&&window.document===document,fa=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Cd=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(fa):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}}(),Sd=2;function Pd(n,e){var t=!1,r=!1,a=0;function i(){t&&(t=!1,n()),r&&l()}function o(){Cd(i)}function l(){var u=Date.now();if(t){if(u-a<Sd)return;r=!0}else t=!0,r=!1,setTimeout(o,e);a=u}return l}var Od=20,Ad=["top","right","bottom","left","width","height","size","weight"],Td=typeof MutationObserver<"u",kd=function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Pd(this.refresh.bind(this),Od)}return n.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},n.prototype.removeObserver=function(e){var t=this.observers_,r=t.indexOf(e);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},n.prototype.updateObservers_=function(){var e=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return e.forEach(function(t){return t.broadcastActive()}),e.length>0},n.prototype.connect_=function(){!si||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Td?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!si||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(e){var t=e.propertyName,r=t===void 0?"":t,a=Ad.some(function(i){return!!~r.indexOf(i)});a&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n}(),ks=function(n,e){for(var t=0,r=Object.keys(e);t<r.length;t++){var a=r[t];Object.defineProperty(n,a,{value:e[a],enumerable:!1,writable:!1,configurable:!0})}return n},Gt=function(n){var e=n&&n.ownerDocument&&n.ownerDocument.defaultView;return e||fa},Es=Sa(0,0,0,0);function da(n){return parseFloat(n)||0}function Uo(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return e.reduce(function(r,a){var i=n["border-"+a+"-width"];return r+da(i)},0)}function Ed(n){for(var e=["top","right","bottom","left"],t={},r=0,a=e;r<a.length;r++){var i=a[r],o=n["padding-"+i];t[i]=da(o)}return t}function _d(n){var e=n.getBBox();return Sa(0,0,e.width,e.height)}function Md(n){var e=n.clientWidth,t=n.clientHeight;if(!e&&!t)return Es;var r=Gt(n).getComputedStyle(n),a=Ed(r),i=a.left+a.right,o=a.top+a.bottom,l=da(r.width),u=da(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+i)!==e&&(l-=Uo(r,"left","right")+i),Math.round(u+o)!==t&&(u-=Uo(r,"top","bottom")+o)),!Nd(n)){var s=Math.round(l+i)-e,c=Math.round(u+o)-t;Math.abs(s)!==1&&(l-=s),Math.abs(c)!==1&&(u-=c)}return Sa(a.left,a.top,l,u)}var Id=function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof Gt(n).SVGGraphicsElement}:function(n){return n instanceof Gt(n).SVGElement&&typeof n.getBBox=="function"}}();function Nd(n){return n===Gt(n).document.documentElement}function Dd(n){return si?Id(n)?_d(n):Md(n):Es}function Rd(n){var e=n.x,t=n.y,r=n.width,a=n.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(i.prototype);return ks(o,{x:e,y:t,width:r,height:a,top:t,right:e+r,bottom:a+t,left:e}),o}function Sa(n,e,t,r){return{x:n,y:e,width:t,height:r}}var $d=function(){function n(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Sa(0,0,0,0),this.target=e}return n.prototype.isActive=function(){var e=Dd(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},n}(),Kd=function(){function n(e,t){var r=Rd(t);ks(this,{target:e,contentRect:r})}return n}(),Ld=function(){function n(e,t,r){if(this.activeObservations_=[],this.observations_=new Ts,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return n.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Gt(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new $d(e)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Gt(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new Kd(r.target,r.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n}(),_s=typeof WeakMap<"u"?new WeakMap:new Ts,Ms=function(){function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=kd.getInstance(),r=new Ld(e,t,this);_s.set(this,r)}return n}();["observe","unobserve","disconnect"].forEach(function(n){Ms.prototype[n]=function(){var e;return(e=_s.get(this))[n].apply(e,arguments)}});var Is=function(){return typeof fa.ResizeObserver<"u"?fa.ResizeObserver:Ms}();function Fd(n){if(Array.isArray(n))return n}function Bd(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,i,o,l=[],u=!0,s=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(c){s=!0,a=c}finally{try{if(!u&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw a}}return l}}function ci(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Gi(n,e){if(n){if(typeof n=="string")return ci(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ci(n,e)}}function jd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(n,e){return Fd(n)||Bd(n,e)||Gi(n,e)||jd()}function Hd(n){if(Array.isArray(n))return ci(n)}function zd(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Vd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ge(n){return Hd(n)||zd(n)||Gi(n)||Vd()}var Gd=typeof global=="object"&&global&&global.Object===Object&&global;const Ns=Gd;var Ud=typeof self=="object"&&self&&self.Object===Object&&self,Wd=Ns||Ud||Function("return this")();const Xn=Wd;var qd=Xn.Symbol;const Un=qd;var Ds=Object.prototype,Yd=Ds.hasOwnProperty,Xd=Ds.toString,ar=Un?Un.toStringTag:void 0;function Qd(n){var e=Yd.call(n,ar),t=n[ar];try{n[ar]=void 0;var r=!0}catch{}var a=Xd.call(n);return r&&(e?n[ar]=t:delete n[ar]),a}var Zd=Object.prototype,Jd=Zd.toString;function ev(n){return Jd.call(n)}var nv="[object Null]",tv="[object Undefined]",Wo=Un?Un.toStringTag:void 0;function kt(n){return n==null?n===void 0?tv:nv:Wo&&Wo in Object(n)?Qd(n):ev(n)}function Rs(n,e){return function(t){return n(e(t))}}var rv=Rs(Object.getPrototypeOf,Object);const av=rv;function St(n){return n!=null&&typeof n=="object"}var iv="[object Object]",ov=Function.prototype,lv=Object.prototype,$s=ov.toString,uv=lv.hasOwnProperty,sv=$s.call(Object);function cv(n){if(!St(n)||kt(n)!=iv)return!1;var e=av(n);if(e===null)return!0;var t=uv.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&$s.call(t)==sv}var fv=function(e){return e!=null&&e!==""};const fi=fv;var dv=function(e,t){var r=x({},e);return Object.keys(t).forEach(function(a){var i=r[a];if(i)i.type||i.default?i.default=t[a]:i.def?i.def(t[a]):r[a]={type:i,default:t[a]};else throw new Error("not have ".concat(a," prop"))}),r};const Zt=dv;var vv=function(e){for(var t=Object.keys(e),r={},a={},i={},o=0,l=t.length;o<l;o++){var u=t[o];gd(u)?(r[u[2].toLowerCase()+u.slice(3)]=e[u],a[u]=e[u]):i[u]=e[u]}return{onEvents:a,events:r,extraAttrs:i}},pv=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r={},a=/;(?![^(]*\))/g,i=/:(.+)/;return Ie(e)==="object"?e:(e.split(a).forEach(function(o){if(o){var l=o.split(i);if(l.length>1){var u=t?Vi(l[0].trim()):l[0].trim();r[u]=l[1].trim()}}}),r)},hv=function(e,t){return e[t]!==void 0},Ks=Symbol("skipFlatten"),Kn=function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=Array.isArray(e)?e:[e],a=[];return r.forEach(function(i){Array.isArray(i)?a.push.apply(a,Ge(n(i,t))):i&&i.type===Cn?i.key===Ks?a.push(i):a.push.apply(a,Ge(n(i.children,t))):i&&Ct(i)?t&&!Ui(i)?a.push(i):t||a.push(i):fi(i)&&a.push(i)}),a},gv=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"default",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Ct(e))return e.type===Cn?t==="default"?Kn(e.children):[]:e.children&&e.children[t]?Kn(e.children[t](r)):[];var a=e.$slots[t]&&e.$slots[t](r);return Kn(a)},vr=function(e){for(var t,r=(e==null||(t=e.vnode)===null||t===void 0?void 0:t.el)||e&&(e.$el||e);r&&!r.tagName;)r=r.nextSibling;return r},mv=function(e){var t={};if(e.$&&e.$.vnode){var r=e.$.vnode.props||{};Object.keys(e.$props).forEach(function(l){var u=e.$props[l],s=bd(l);(u!==void 0||s in r)&&(t[l]=u)})}else if(Ct(e)&&Ie(e.type)==="object"){var a=e.props||{},i={};Object.keys(a).forEach(function(l){i[Vi(l)]=a[l]});var o=e.type.props||{};Object.keys(o).forEach(function(l){var u=wd(o,i,l,i[l]);(u!==void 0||l in i)&&(t[l]=u)})}return t},yv=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"default",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=void 0;if(e.$){var o=e[t];if(o!==void 0)return typeof o=="function"&&a?o(r):o;i=e.$slots[t],i=a&&i?i(r):i}else if(Ct(e)){var l=e.props&&e.props[t];if(l!==void 0&&e.props!==null)return typeof l=="function"&&a?l(r):l;e.type===Cn?i=e.children:e.children&&e.children[t]&&(i=e.children[t],i=a&&i?i(r):i)}return Array.isArray(i)&&(i=Kn(i),i=i.length===1?i[0]:i,i=i.length===0?void 0:i),i};function qo(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,t={};return n.$?t=x(x({},t),n.$attrs):t=x(x({},t),n.props),vv(t)[e?"onEvents":"events"]}function bv(n,e){var t=(Ct(n)?n.props:n.$attrs)||{},r=t.style||{};if(typeof r=="string")r=pv(r,e);else if(e&&r){var a={};return Object.keys(r).forEach(function(i){return a[Vi(i)]=r[i]}),a}return r}function Ui(n){return n&&(n.type===Xf||n.type===Cn&&n.children.length===0||n.type===Qf&&n.children.trim()==="")}function Wn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[];return n.forEach(function(t){Array.isArray(t)?e.push.apply(e,Ge(t)):(t==null?void 0:t.type)===Cn?e.push.apply(e,Ge(Wn(t.children))):e.push(t)}),e.filter(function(t){return!Ui(t)})}function ir(n){if(n){var e=Wn(n);return e.length?e:void 0}else return n}function Er(n){return Array.isArray(n)&&n.length===1&&(n=n[0]),n&&n.__v_isVNode&&Ie(n.type)!=="symbol"}function ut(n,e){var t,r,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"default";return(t=e[a])!==null&&t!==void 0?t:(r=n[a])===null||r===void 0?void 0:r.call(n)}const xr=ce({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup:function(e,t){var r=t.slots,a=Sn({width:0,height:0,offsetHeight:0,offsetWidth:0}),i=null,o=null,l=function(){o&&(o.disconnect(),o=null)},u=function(v){var d=e.onResize,p=v[0].target,g=p.getBoundingClientRect(),h=g.width,y=g.height,b=p.offsetWidth,w=p.offsetHeight,O=Math.floor(h),P=Math.floor(y);if(a.width!==O||a.height!==P||a.offsetWidth!==b||a.offsetHeight!==w){var C={width:O,height:P,offsetWidth:b,offsetHeight:w};Ye(a,C),d&&Promise.resolve().then(function(){d(x(x({},C),{},{offsetWidth:b,offsetHeight:w}),p)})}},s=wa(),c=function(){var v=e.disabled;if(v){l();return}var d=vr(s),p=d!==i;p&&(l(),i=d),!o&&d&&(o=new Is(u),o.observe(d))};return nn(function(){c()}),Xt(function(){c()}),kr(function(){l()}),ue(function(){return e.disabled},function(){c()},{flush:"post"}),function(){var f;return(f=r.default)===null||f===void 0?void 0:f.call(r)[0]}}});var Ls=function(e){return setTimeout(e,16)},Fs=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(Ls=function(e){return window.requestAnimationFrame(e)},Fs=function(e){return window.cancelAnimationFrame(e)});var Yo=0,Wi=new Map;function Bs(n){Wi.delete(n)}function Ue(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Yo+=1;var t=Yo;function r(a){if(a===0)Bs(t),n();else{var i=Ls(function(){r(a-1)});Wi.set(t,i)}}return r(e),t}Ue.cancel=function(n){var e=Wi.get(n);return Bs(e),Fs(e)};var _r=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t},Mr=function(e){var t=e;return t.install=function(r){r.component(t.displayName||t.name,e)},e},js=!1;try{var Xo=Object.defineProperty({},"passive",{get:function(){js=!0}});window.addEventListener("testPassive",null,Xo),window.removeEventListener("testPassive",null,Xo)}catch{}const wn=js;function pr(n,e,t,r){if(n&&n.addEventListener){var a=r;a===void 0&&wn&&(e==="touchstart"||e==="touchmove"||e==="wheel")&&(a={passive:!1}),n.addEventListener(e,t,a)}return{remove:function(){n&&n.removeEventListener&&n.removeEventListener(e,t)}}}function xv(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function vn(n,e){if(n==null)return{};var t=xv(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}const wv={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"};var Cv={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};const Sv=Cv;var Pv={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};const Hs=Pv;var Ov={lang:x({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},Sv),timePickerLocale:x({},Hs)};const Qo=Ov;var Pn="${label} is not a valid ${type}",Av={locale:"en",Pagination:wv,DatePicker:Qo,TimePicker:Hs,Calendar:Qo,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Pn,method:Pn,array:Pn,object:Pn,number:Pn,date:Pn,boolean:Pn,integer:Pn,float:Pn,regexp:Pn,email:Pn,url:Pn,hex:Pn},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}};const di=Av,zs=ce({compatConfig:{MODE:3},name:"LocaleReceiver",props:{componentName:String,defaultLocale:{type:[Object,Function]},children:{type:Function}},setup:function(e,t){var r=t.slots,a=pn("localeData",{}),i=k(function(){var l=e.componentName,u=l===void 0?"global":l,s=e.defaultLocale,c=s||di[u||"global"],f=a.antLocale,v=u&&f?f[u]:{};return x(x({},typeof c=="function"?c():c),v||{})}),o=k(function(){var l=a.antLocale,u=l&&l.locale;return l&&l.exist&&!u?di.locale:u});return function(){var l=e.children||r.default,u=a.antLocale;return l==null?void 0:l(i.value,o.value,u)}}});var Vs=function(){var e=bn("empty",{}),t=e.getPrefixCls,r=t("empty-img-default");return m("svg",{class:r,width:"184",height:"152",viewBox:"0 0 184 152"},[m("g",{fill:"none","fill-rule":"evenodd"},[m("g",{transform:"translate(24 31.67)"},[m("ellipse",{class:"".concat(r,"-ellipse"),cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"},null),m("path",{class:"".concat(r,"-path-1"),d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"},null),m("path",{class:"".concat(r,"-path-2"),d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",transform:"translate(13.56)"},null),m("path",{class:"".concat(r,"-path-3"),d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"},null),m("path",{class:"".concat(r,"-path-4"),d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"},null)]),m("path",{class:"".concat(r,"-path-5"),d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"},null),m("g",{class:"".concat(r,"-g"),transform:"translate(149.65 15.383)"},[m("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"},null),m("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"},null)])])])};Vs.PRESENTED_IMAGE_DEFAULT=!0;const Tv=Vs;var Gs=function(){var e=bn("empty",{}),t=e.getPrefixCls,r=t("empty-img-simple");return m("svg",{class:r,width:"64",height:"41",viewBox:"0 0 64 41"},[m("g",{transform:"translate(0 1)",fill:"none","fill-rule":"evenodd"},[m("ellipse",{class:"".concat(r,"-ellipse"),fill:"#F5F5F5",cx:"32",cy:"33",rx:"32",ry:"7"},null),m("g",{class:"".concat(r,"-g"),"fill-rule":"nonzero",stroke:"#D9D9D9"},[m("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"},null),m("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:"#FAFAFA",class:"".concat(r,"-path")},null)])])])};Gs.PRESENTED_IMAGE_SIMPLE=!0;const kv=Gs;function Zo(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function Us(n,e,t){return e&&Zo(n.prototype,e),t&&Zo(n,t),n}function ea(){return(ea=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Ws(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}function qs(n,e){if(n==null)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(a[t]=n[t]);return a}function Jo(n){return((e=n)!=null&&typeof e=="object"&&Array.isArray(e)===!1)==1&&Object.prototype.toString.call(n)==="[object Object]";var e}var Ys=Object.prototype,Xs=Ys.toString,Ev=Ys.hasOwnProperty,Qs=/^\s*function (\w+)/;function el(n){var e,t=(e=n==null?void 0:n.type)!==null&&e!==void 0?e:n;if(t){var r=t.toString().match(Qs);return r?r[1]:""}return""}var Pt=function(n){var e,t;return Jo(n)!==!1&&typeof(e=n.constructor)=="function"&&Jo(t=e.prototype)!==!1&&t.hasOwnProperty("isPrototypeOf")!==!1},_v=function(n){return n},gn=_v,wr=function(n,e){return Ev.call(n,e)},Mv=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n},Ut=Array.isArray||function(n){return Xs.call(n)==="[object Array]"},Wt=function(n){return Xs.call(n)==="[object Function]"},va=function(n){return Pt(n)&&wr(n,"_vueTypes_name")},Zs=function(n){return Pt(n)&&(wr(n,"type")||["_vueTypes_name","validator","default","required"].some(function(e){return wr(n,e)}))};function qi(n,e){return Object.defineProperty(n.bind(e),"__original",{value:n})}function Et(n,e,t){var r;t===void 0&&(t=!1);var a=!0,i="";r=Pt(n)?n:{type:n};var o=va(r)?r._vueTypes_name+" - ":"";if(Zs(r)&&r.type!==null){if(r.type===void 0||r.type===!0||!r.required&&e===void 0)return a;Ut(r.type)?(a=r.type.some(function(f){return Et(f,e,!0)===!0}),i=r.type.map(function(f){return el(f)}).join(" or ")):a=(i=el(r))==="Array"?Ut(e):i==="Object"?Pt(e):i==="String"||i==="Number"||i==="Boolean"||i==="Function"?function(f){if(f==null)return"";var v=f.constructor.toString().match(Qs);return v?v[1]:""}(e)===i:e instanceof r.type}if(!a){var l=o+'value "'+e+'" should be of type "'+i+'"';return t===!1?(gn(l),!1):l}if(wr(r,"validator")&&Wt(r.validator)){var u=gn,s=[];if(gn=function(f){s.push(f)},a=r.validator(e),gn=u,!a){var c=(s.length>1?"* ":"")+s.join(`
* `);return s.length=0,t===!1?(gn(c),a):c}}return a}function kn(n,e){var t=Object.defineProperties(e,{_vueTypes_name:{value:n,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(a){return a!==void 0||this.default?Wt(a)||Et(this,a,!0)===!0?(this.default=Ut(a)?function(){return[].concat(a)}:Pt(a)?function(){return Object.assign({},a)}:a,this):(gn(this._vueTypes_name+' - invalid default value: "'+a+'"'),this):this}}}),r=t.validator;return Wt(r)&&(t.validator=qi(r,t)),t}function qn(n,e){var t=kn(n,e);return Object.defineProperty(t,"validate",{value:function(r){return Wt(this.validator)&&gn(this._vueTypes_name+` - calling .validate() will overwrite the current custom validator function. Validator info:
`+JSON.stringify(this)),this.validator=qi(r,this),this}})}function nl(n,e,t){var r,a,i=(r=e,a={},Object.getOwnPropertyNames(r).forEach(function(f){a[f]=Object.getOwnPropertyDescriptor(r,f)}),Object.defineProperties({},a));if(i._vueTypes_name=n,!Pt(t))return i;var o,l,u=t.validator,s=qs(t,["validator"]);if(Wt(u)){var c=i.validator;c&&(c=(l=(o=c).__original)!==null&&l!==void 0?l:o),i.validator=qi(c?function(f){return c.call(this,f)&&u.call(this,f)}:u,i)}return Object.assign(i,s)}function Pa(n){return n.replace(/^(?!\s*$)/gm,"  ")}var Iv=function(){return qn("any",{})},Nv=function(){return qn("function",{type:Function})},Dv=function(){return qn("boolean",{type:Boolean})},Rv=function(){return qn("string",{type:String})},$v=function(){return qn("number",{type:Number})},Kv=function(){return qn("array",{type:Array})},Lv=function(){return qn("object",{type:Object})},Fv=function(){return kn("integer",{type:Number,validator:function(n){return Mv(n)}})},Bv=function(){return kn("symbol",{validator:function(n){return typeof n=="symbol"}})};function jv(n,e){if(e===void 0&&(e="custom validation failed"),typeof n!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return kn(n.name||"<<anonymous function>>",{validator:function(t){var r=n(t);return r||gn(this._vueTypes_name+" - "+e),r}})}function Hv(n){if(!Ut(n))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var e='oneOf - value should be one of "'+n.join('", "')+'".',t=n.reduce(function(r,a){if(a!=null){var i=a.constructor;r.indexOf(i)===-1&&r.push(i)}return r},[]);return kn("oneOf",{type:t.length>0?t:void 0,validator:function(r){var a=n.indexOf(r)!==-1;return a||gn(e),a}})}function zv(n){if(!Ut(n))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var e=!1,t=[],r=0;r<n.length;r+=1){var a=n[r];if(Zs(a)){if(va(a)&&a._vueTypes_name==="oneOf"){t=t.concat(a.type);continue}if(Wt(a.validator)&&(e=!0),a.type!==!0&&a.type){t=t.concat(a.type);continue}}t.push(a)}return t=t.filter(function(i,o){return t.indexOf(i)===o}),kn("oneOfType",e?{type:t,validator:function(i){var o=[],l=n.some(function(u){var s=Et(va(u)&&u._vueTypes_name==="oneOf"?u.type||null:u,i,!0);return typeof s=="string"&&o.push(s),s===!0});return l||gn("oneOfType - provided value does not match any of the "+o.length+` passed-in validators:
`+Pa(o.join(`
`))),l}}:{type:t})}function Vv(n){return kn("arrayOf",{type:Array,validator:function(e){var t,r=e.every(function(a){return(t=Et(n,a,!0))===!0});return r||gn(`arrayOf - value validation error:
`+Pa(t)),r}})}function Gv(n){return kn("instanceOf",{type:n})}function Uv(n){return kn("objectOf",{type:Object,validator:function(e){var t,r=Object.keys(e).every(function(a){return(t=Et(n,e[a],!0))===!0});return r||gn(`objectOf - value validation error:
`+Pa(t)),r}})}function Wv(n){var e=Object.keys(n),t=e.filter(function(a){var i;return!!(!((i=n[a])===null||i===void 0)&&i.required)}),r=kn("shape",{type:Object,validator:function(a){var i=this;if(!Pt(a))return!1;var o=Object.keys(a);if(t.length>0&&t.some(function(u){return o.indexOf(u)===-1})){var l=t.filter(function(u){return o.indexOf(u)===-1});return gn(l.length===1?'shape - required property "'+l[0]+'" is not defined.':'shape - required properties "'+l.join('", "')+'" are not defined.'),!1}return o.every(function(u){if(e.indexOf(u)===-1)return i._vueTypes_isLoose===!0||(gn('shape - shape definition does not include a "'+u+'" property. Allowed keys: "'+e.join('", "')+'".'),!1);var s=Et(n[u],a[u],!0);return typeof s=="string"&&gn('shape - "'+u+`" property validation error:
 `+Pa(s)),s===!0})}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var Hn=function(){function n(){}return n.extend=function(e){var t=this;if(Ut(e))return e.forEach(function(f){return t.extend(f)}),this;var r=e.name,a=e.validate,i=a!==void 0&&a,o=e.getter,l=o!==void 0&&o,u=qs(e,["name","validate","getter"]);if(wr(this,r))throw new TypeError('[VueTypes error]: Type "'+r+'" already defined');var s,c=u.type;return va(c)?(delete u.type,Object.defineProperty(this,r,l?{get:function(){return nl(r,c,u)}}:{value:function(){var f,v=nl(r,c,u);return v.validator&&(v.validator=(f=v.validator).bind.apply(f,[v].concat([].slice.call(arguments)))),v}})):(s=l?{get:function(){var f=Object.assign({},u);return i?qn(r,f):kn(r,f)},enumerable:!0}:{value:function(){var f,v,d=Object.assign({},u);return f=i?qn(r,d):kn(r,d),d.validator&&(f.validator=(v=d.validator).bind.apply(v,[f].concat([].slice.call(arguments)))),f},enumerable:!0},Object.defineProperty(this,r,s))},Us(n,null,[{key:"any",get:function(){return Iv()}},{key:"func",get:function(){return Nv().def(this.defaults.func)}},{key:"bool",get:function(){return Dv().def(this.defaults.bool)}},{key:"string",get:function(){return Rv().def(this.defaults.string)}},{key:"number",get:function(){return $v().def(this.defaults.number)}},{key:"array",get:function(){return Kv().def(this.defaults.array)}},{key:"object",get:function(){return Lv().def(this.defaults.object)}},{key:"integer",get:function(){return Fv().def(this.defaults.integer)}},{key:"symbol",get:function(){return Bv()}}]),n}();function Js(n){var e;return n===void 0&&(n={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(e=function(t){function r(){return t.apply(this,arguments)||this}return Ws(r,t),Us(r,null,[{key:"sensibleDefaults",get:function(){return ea({},this.defaults)},set:function(a){this.defaults=a!==!1?ea({},a!==!0?a:n):{}}}]),r}(Hn)).defaults=ea({},n),e}Hn.defaults={},Hn.custom=jv,Hn.oneOf=Hv,Hn.instanceOf=Gv,Hn.oneOfType=zv,Hn.arrayOf=Vv,Hn.objectOf=Uv,Hn.shape=Wv,Hn.utils={validate:function(n,e){return Et(e,n,!0)===!0},toType:function(n,e,t){return t===void 0&&(t=!1),t?qn(n,e):kn(n,e)}};(function(n){function e(){return n.apply(this,arguments)||this}return Ws(e,n),e})(Js());var ec=Js({func:void 0,bool:void 0,string:void 0,number:void 0,array:void 0,object:void 0,integer:void 0});ec.extend([{name:"looseBool",getter:!0,type:Boolean,default:void 0},{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VueNode",getter:!0,type:null}]);const X=ec;var qv=["image","description","imageStyle","class"],nc=m(Tv,null,null),tc=m(kv,null,null),Jt=function(e,t){var r,a=t.slots,i=a===void 0?{}:a,o=t.attrs,l=bn("empty",e),u=l.direction,s=l.prefixCls,c=s.value,f=x(x({},e),o),v=f.image,d=v===void 0?nc:v,p=f.description,g=p===void 0?((r=i.description)===null||r===void 0?void 0:r.call(i))||void 0:p,h=f.imageStyle,y=f.class,b=y===void 0?"":y,w=vn(f,qv);return m(zs,{componentName:"Empty",children:function(P){var C,T=typeof g<"u"?g:P.description,M=typeof T=="string"?T:"empty",A=null;return typeof d=="string"?A=m("img",{alt:M,src:d},null):A=d,m("div",x({class:Pe(c,b,(C={},B(C,"".concat(c,"-normal"),d===tc),B(C,"".concat(c,"-rtl"),u.value==="rtl"),C))},w),[m("div",{class:"".concat(c,"-image"),style:h},[A]),T&&m("p",{class:"".concat(c,"-description")},[T]),i.default&&m("div",{class:"".concat(c,"-footer")},[Wn(i.default())])])}},null)};Jt.displayName="AEmpty";Jt.PRESENTED_IMAGE_DEFAULT=nc;Jt.PRESENTED_IMAGE_SIMPLE=tc;Jt.inheritAttrs=!1;Jt.props={prefixCls:String,image:X.any,description:X.any,imageStyle:{type:Object,default:void 0}};const or=Mr(Jt);var Yv=function(e){var t=bn("empty",e),r=t.prefixCls,a=function(o){switch(o){case"Table":case"List":return m(or,{image:or.PRESENTED_IMAGE_SIMPLE},null);case"Select":case"TreeSelect":case"Cascader":case"Transfer":case"Mentions":return m(or,{image:or.PRESENTED_IMAGE_SIMPLE,class:"".concat(r.value,"-small")},null);default:return m(or,null,null)}};return a(e.componentName)};function rc(n){return m(Yv,{componentName:n},null)}var tl={};function Xv(n,e){}function Qv(n,e,t){!e&&!tl[t]&&(n(!1,t),tl[t]=!0)}function ac(n,e){Qv(Xv,n,e)}const Yi=function(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";ac(n,"[antdv: ".concat(e,"] ").concat(t))};var vi="internalMark",na=ce({compatConfig:{MODE:3},name:"ALocaleProvider",props:{locale:{type:Object},ANT_MARK__:String},setup:function(e,t){var r=t.slots;Yi(e.ANT_MARK__===vi,"LocaleProvider","`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");var a=Sn({antLocale:x(x({},e.locale),{},{exist:!0}),ANT_MARK__:vi});return yn("localeData",a),ue(function(){return e.locale},function(){a.antLocale=x(x({},e.locale),{},{exist:!0})},{immediate:!0}),function(){var i;return(i=r.default)===null||i===void 0?void 0:i.call(r)}}});na.install=function(n){return n.component(na.name,na),n};const Zv=Mr(na);_r("bottomLeft","bottomRight","topLeft","topRight");var ic=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=x(e?{name:e,appear:!0,enterFromClass:"".concat(e,"-enter ").concat(e,"-enter-prepare"),enterActiveClass:"".concat(e,"-enter ").concat(e,"-enter-prepare"),enterToClass:"".concat(e,"-enter ").concat(e,"-enter-active"),leaveFromClass:" ".concat(e,"-leave"),leaveActiveClass:"".concat(e,"-leave ").concat(e,"-leave-active"),leaveToClass:"".concat(e,"-leave ").concat(e,"-leave-active")}:{css:!1},t);return r},Jv=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=x(e?{name:e,appear:!0,appearActiveClass:"".concat(e),appearToClass:"".concat(e,"-appear ").concat(e,"-appear-active"),enterFromClass:"".concat(e,"-appear ").concat(e,"-enter ").concat(e,"-appear-prepare ").concat(e,"-enter-prepare"),enterActiveClass:"".concat(e),enterToClass:"".concat(e,"-enter ").concat(e,"-appear ").concat(e,"-appear-active ").concat(e,"-enter-active"),leaveActiveClass:"".concat(e," ").concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-active")}:{css:!1},t);return r};const ep=ce({name:"Notice",inheritAttrs:!1,props:["prefixCls","duration","updateMark","noticeKey","closeIcon","closable","props","onClick","onClose","holder","visible"],setup:function(e,t){var r=t.attrs,a=t.slots,i,o=k(function(){return e.duration===void 0?1.5:e.duration}),l=function(){o.value&&(i=setTimeout(function(){s()},o.value*1e3))},u=function(){i&&(clearTimeout(i),i=null)},s=function(v){v&&v.stopPropagation(),u();var d=e.onClose,p=e.noticeKey;d&&d(p)},c=function(){u(),l()};return nn(function(){l()}),kr(function(){u()}),ue([o,function(){return e.updateMark},function(){return e.visible}],function(f,v){var d=_e(f,3),p=d[0],g=d[1],h=d[2],y=_e(v,3),b=y[0],w=y[1],O=y[2];(p!==b||g!==w||h!==O&&O)&&c()},{flush:"post"}),function(){var f,v,d=e.prefixCls,p=e.closable,g=e.closeIcon,h=g===void 0?(f=a.closeIcon)===null||f===void 0?void 0:f.call(a):g,y=e.onClick,b=e.holder,w=r.class,O=r.style,P="".concat(d,"-notice"),C=Object.keys(r).reduce(function(M,A){return(A.startsWith("data-")||A.startsWith("aria-")||A==="role")&&(M[A]=r[A]),M},{}),T=m("div",x({class:Pe(P,w,B({},"".concat(P,"-closable"),p)),style:O,onMouseenter:u,onMouseleave:l,onClick:y},C),[m("div",{class:"".concat(P,"-content")},[(v=a.default)===null||v===void 0?void 0:v.call(a)]),p?m("a",{tabindex:0,onClick:s,class:"".concat(P,"-close")},[h||m("span",{class:"".concat(P,"-close-x")},null)]):null]);return b?m(Ca,{to:b},{default:function(){return T}}):T}}});var np=["name","getContainer","appContext","prefixCls","rootPrefixCls","transitionName","hasTransitionName"],rl=0,tp=Date.now();function al(){var n=rl;return rl+=1,"rcNotification_".concat(tp,"_").concat(n)}var pi=ce({name:"Notification",inheritAttrs:!1,props:["prefixCls","transitionName","animation","maxCount","closeIcon"],setup:function(e,t){var r=t.attrs,a=t.expose,i=t.slots,o=new Map,l=D([]),u=k(function(){var f=e.prefixCls,v=e.animation,d=v===void 0?"fade":v,p=e.transitionName;return!p&&d&&(p="".concat(f,"-").concat(d)),Jv(p)}),s=function(v,d){var p=v.key||al(),g=x(x({},v),{},{key:p}),h=e.maxCount,y=l.value.map(function(w){return w.notice.key}).indexOf(p),b=l.value.concat();y!==-1?b.splice(y,1,{notice:g,holderCallback:d}):(h&&l.value.length>=h&&(g.key=b[0].notice.key,g.updateMark=al(),g.userPassKey=p,b.shift()),b.push({notice:g,holderCallback:d})),l.value=b},c=function(v){l.value=l.value.filter(function(d){var p=d.notice,g=p.key,h=p.userPassKey,y=h||g;return y!==v})};return a({add:s,remove:c,notices:l}),function(){var f,v,d=e.prefixCls,p=e.closeIcon,g=p===void 0?(f=i.closeIcon)===null||f===void 0?void 0:f.call(i,{prefixCls:d}):p,h=l.value.map(function(b,w){var O=b.notice,P=b.holderCallback,C=w===l.value.length-1?O.updateMark:void 0,T=O.key,M=O.userPassKey,A=O.content,H=x(x(x({prefixCls:d,closeIcon:typeof g=="function"?g({prefixCls:d}):g},O),O.props),{},{key:T,noticeKey:M||T,updateMark:C,onClose:function(L){var R;c(L),(R=O.onClose)===null||R===void 0||R.call(O)},onClick:O.onClick});return P?m("div",{key:T,class:"".concat(d,"-hook-holder"),ref:function(L){typeof T>"u"||(L?(o.set(T,L),P(L,H)):o.delete(T))}},null):m(ep,H,{default:function(){return[typeof A=="function"?A({prefixCls:d}):A]}})}),y=(v={},B(v,d,1),B(v,r.class,!!r.class),v);return m("div",{class:y,style:r.style||{top:"65px",left:"50%"}},[m(Zf,x({tag:"div"},u.value),{default:function(){return[h]}})])}}});pi.newInstance=function(e,t){var r=e||{},a=r.name,i=a===void 0?"notification":a,o=r.getContainer,l=r.appContext,u=r.prefixCls,s=r.rootPrefixCls,c=r.transitionName,f=r.hasTransitionName,v=vn(r,np),d=document.createElement("div");if(o){var p=o();p.appendChild(d)}else document.body.appendChild(d);var g=ce({compatConfig:{MODE:3},name:"NotificationWrapper",setup:function(b,w){var O=w.attrs,P=D();return nn(function(){t({notice:function(T){var M;(M=P.value)===null||M===void 0||M.add(T)},removeNotice:function(T){var M;(M=P.value)===null||M===void 0||M.remove(T)},destroy:function(){jo(null,d),d.parentNode&&d.parentNode.removeChild(d)},component:P})}),function(){var C=An,T=C.getPrefixCls(i,u),M=C.getRootPrefixCls(s,T),A=f?c:"".concat(M,"-").concat(c);return m(mr,x(x({},C),{},{notUpdateGlobalConfig:!0,prefixCls:M}),{default:function(){return[m(pi,x(x({ref:P},O),{},{prefixCls:T,transitionName:A}),null)]}})}}}),h=m(g,v);h.appContext=l||h.appContext,jo(h,d)};const oc=pi;var rp={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};const ap=rp;function cn(n,e){ip(n)&&(n="100%");var t=op(n);return n=e===360?n:Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(String(n*e),10)/100),Math.abs(n-e)<1e-6?1:(e===360?n=(n<0?n%e+e:n%e)/parseFloat(String(e)):n=n%e/parseFloat(String(e)),n)}function Lr(n){return Math.min(1,Math.max(0,n))}function ip(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function op(n){return typeof n=="string"&&n.indexOf("%")!==-1}function lc(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Fr(n){return n<=1?"".concat(Number(n)*100,"%"):n}function bt(n){return n.length===1?"0"+n:String(n)}function lp(n,e,t){return{r:cn(n,255)*255,g:cn(e,255)*255,b:cn(t,255)*255}}function il(n,e,t){n=cn(n,255),e=cn(e,255),t=cn(t,255);var r=Math.max(n,e,t),a=Math.min(n,e,t),i=0,o=0,l=(r+a)/2;if(r===a)o=0,i=0;else{var u=r-a;switch(o=l>.5?u/(2-r-a):u/(r+a),r){case n:i=(e-t)/u+(e<t?6:0);break;case e:i=(t-n)/u+2;break;case t:i=(n-e)/u+4;break}i/=6}return{h:i,s:o,l}}function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*(6*t):t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function up(n,e,t){var r,a,i;if(n=cn(n,360),e=cn(e,100),t=cn(t,100),e===0)a=t,i=t,r=t;else{var o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;r=$a(l,o,n+1/3),a=$a(l,o,n),i=$a(l,o,n-1/3)}return{r:r*255,g:a*255,b:i*255}}function hi(n,e,t){n=cn(n,255),e=cn(e,255),t=cn(t,255);var r=Math.max(n,e,t),a=Math.min(n,e,t),i=0,o=r,l=r-a,u=r===0?0:l/r;if(r===a)i=0;else{switch(r){case n:i=(e-t)/l+(e<t?6:0);break;case e:i=(t-n)/l+2;break;case t:i=(n-e)/l+4;break}i/=6}return{h:i,s:u,v:o}}function sp(n,e,t){n=cn(n,360)*6,e=cn(e,100),t=cn(t,100);var r=Math.floor(n),a=n-r,i=t*(1-e),o=t*(1-a*e),l=t*(1-(1-a)*e),u=r%6,s=[t,o,i,i,l,t][u],c=[l,t,t,o,i,i][u],f=[i,i,l,t,t,o][u];return{r:s*255,g:c*255,b:f*255}}function gi(n,e,t,r){var a=[bt(Math.round(n).toString(16)),bt(Math.round(e).toString(16)),bt(Math.round(t).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function cp(n,e,t,r,a){var i=[bt(Math.round(n).toString(16)),bt(Math.round(e).toString(16)),bt(Math.round(t).toString(16)),bt(fp(r))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function fp(n){return Math.round(parseFloat(n)*255).toString(16)}function ol(n){return On(n)/255}function On(n){return parseInt(n,16)}function dp(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}var mi={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Kt(n){var e={r:0,g:0,b:0},t=1,r=null,a=null,i=null,o=!1,l=!1;return typeof n=="string"&&(n=hp(n)),typeof n=="object"&&(Qn(n.r)&&Qn(n.g)&&Qn(n.b)?(e=lp(n.r,n.g,n.b),o=!0,l=String(n.r).substr(-1)==="%"?"prgb":"rgb"):Qn(n.h)&&Qn(n.s)&&Qn(n.v)?(r=Fr(n.s),a=Fr(n.v),e=sp(n.h,r,a),o=!0,l="hsv"):Qn(n.h)&&Qn(n.s)&&Qn(n.l)&&(r=Fr(n.s),i=Fr(n.l),e=up(n.h,r,i),o=!0,l="hsl"),Object.prototype.hasOwnProperty.call(n,"a")&&(t=n.a)),t=lc(t),{ok:o,format:n.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var vp="[-\\+]?\\d+%?",pp="[-\\+]?\\d*\\.\\d+%?",ot="(?:".concat(pp,")|(?:").concat(vp,")"),Ka="[\\s|\\(]+(".concat(ot,")[,|\\s]+(").concat(ot,")[,|\\s]+(").concat(ot,")\\s*\\)?"),La="[\\s|\\(]+(".concat(ot,")[,|\\s]+(").concat(ot,")[,|\\s]+(").concat(ot,")[,|\\s]+(").concat(ot,")\\s*\\)?"),$n={CSS_UNIT:new RegExp(ot),rgb:new RegExp("rgb"+Ka),rgba:new RegExp("rgba"+La),hsl:new RegExp("hsl"+Ka),hsla:new RegExp("hsla"+La),hsv:new RegExp("hsv"+Ka),hsva:new RegExp("hsva"+La),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function hp(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;var e=!1;if(mi[n])n=mi[n],e=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=$n.rgb.exec(n);return t?{r:t[1],g:t[2],b:t[3]}:(t=$n.rgba.exec(n),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=$n.hsl.exec(n),t?{h:t[1],s:t[2],l:t[3]}:(t=$n.hsla.exec(n),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=$n.hsv.exec(n),t?{h:t[1],s:t[2],v:t[3]}:(t=$n.hsva.exec(n),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=$n.hex8.exec(n),t?{r:On(t[1]),g:On(t[2]),b:On(t[3]),a:ol(t[4]),format:e?"name":"hex8"}:(t=$n.hex6.exec(n),t?{r:On(t[1]),g:On(t[2]),b:On(t[3]),format:e?"name":"hex"}:(t=$n.hex4.exec(n),t?{r:On(t[1]+t[1]),g:On(t[2]+t[2]),b:On(t[3]+t[3]),a:ol(t[4]+t[4]),format:e?"name":"hex8"}:(t=$n.hex3.exec(n),t?{r:On(t[1]+t[1]),g:On(t[2]+t[2]),b:On(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function Qn(n){return!!$n.CSS_UNIT.exec(String(n))}var Fa=function(){function n(e,t){e===void 0&&(e=""),t===void 0&&(t={});var r;if(e instanceof n)return e;typeof e=="number"&&(e=dp(e)),this.originalInput=e;var a=Kt(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=t.format)!==null&&r!==void 0?r:a.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},n.prototype.getLuminance=function(){var e=this.toRgb(),t,r,a,i=e.r/255,o=e.g/255,l=e.b/255;return i<=.03928?t=i/12.92:t=Math.pow((i+.055)/1.055,2.4),o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),l<=.03928?a=l/12.92:a=Math.pow((l+.055)/1.055,2.4),.2126*t+.7152*r+.0722*a},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(e){return this.a=lc(e),this.roundA=Math.round(100*this.a)/100,this},n.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},n.prototype.toHsv=function(){var e=hi(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},n.prototype.toHsvString=function(){var e=hi(this.r,this.g,this.b),t=Math.round(e.h*360),r=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?"hsv(".concat(t,", ").concat(r,"%, ").concat(a,"%)"):"hsva(".concat(t,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var e=il(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},n.prototype.toHslString=function(){var e=il(this.r,this.g,this.b),t=Math.round(e.h*360),r=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?"hsl(".concat(t,", ").concat(r,"%, ").concat(a,"%)"):"hsla(".concat(t,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(e){return e===void 0&&(e=!1),gi(this.r,this.g,this.b,e)},n.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},n.prototype.toHex8=function(e){return e===void 0&&(e=!1),cp(this.r,this.g,this.b,this.a,e)},n.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},n.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(t,", ").concat(r,")"):"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var e=function(t){return"".concat(Math.round(cn(t,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var e=function(t){return Math.round(cn(t,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+gi(this.r,this.g,this.b,!1),t=0,r=Object.entries(mi);t<r.length;t++){var a=r[t],i=a[0],o=a[1];if(e===o)return i}return!1},n.prototype.toString=function(e){var t=!!e;e=e??this.format;var r=!1,a=this.a<1&&this.a>=0,i=!t&&a&&(e.startsWith("hex")||e==="name");return i?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l+=e/100,t.l=Lr(t.l),new n(t)},n.prototype.brighten=function(e){e===void 0&&(e=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new n(t)},n.prototype.darken=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l-=e/100,t.l=Lr(t.l),new n(t)},n.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},n.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},n.prototype.desaturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s-=e/100,t.s=Lr(t.s),new n(t)},n.prototype.saturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s+=e/100,t.s=Lr(t.s),new n(t)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(e){var t=this.toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,new n(t)},n.prototype.mix=function(e,t){t===void 0&&(t=50);var r=this.toRgb(),a=new n(e).toRgb(),i=t/100,o={r:(a.r-r.r)*i+r.r,g:(a.g-r.g)*i+r.g,b:(a.b-r.b)*i+r.b,a:(a.a-r.a)*i+r.a};return new n(o)},n.prototype.analogous=function(e,t){e===void 0&&(e=6),t===void 0&&(t=30);var r=this.toHsl(),a=360/t,i=[this];for(r.h=(r.h-(a*e>>1)+720)%360;--e;)r.h=(r.h+a)%360,i.push(new n(r));return i},n.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new n(e)},n.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var t=this.toHsv(),r=t.h,a=t.s,i=t.v,o=[],l=1/e;e--;)o.push(new n({h:r,s:a,v:i})),i=(i+l)%1;return o},n.prototype.splitcomplement=function(){var e=this.toHsl(),t=e.h;return[this,new n({h:(t+72)%360,s:e.s,l:e.l}),new n({h:(t+216)%360,s:e.s,l:e.l})]},n.prototype.onBackground=function(e){var t=this.toRgb(),r=new n(e).toRgb(),a=t.a+r.a*(1-t.a);return new n({r:(t.r*t.a+r.r*r.a*(1-t.a))/a,g:(t.g*t.a+r.g*r.a*(1-t.a))/a,b:(t.b*t.a+r.b*r.a*(1-t.a))/a,a})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(e){for(var t=this.toHsl(),r=t.h,a=[this],i=360/e,o=1;o<e;o++)a.push(new n({h:(r+o*i)%360,s:t.s,l:t.l}));return a},n.prototype.equals=function(e){return this.toRgbString()===new n(e).toRgbString()},n}(),Br=2,ll=.16,gp=.05,mp=.05,yp=.15,uc=5,sc=4,bp=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function ul(n){var e=n.r,t=n.g,r=n.b,a=hi(e,t,r);return{h:a.h*360,s:a.s,v:a.v}}function jr(n){var e=n.r,t=n.g,r=n.b;return"#".concat(gi(e,t,r,!1))}function xp(n,e,t){var r=t/100,a={r:(e.r-n.r)*r+n.r,g:(e.g-n.g)*r+n.g,b:(e.b-n.b)*r+n.b};return a}function sl(n,e,t){var r;return Math.round(n.h)>=60&&Math.round(n.h)<=240?r=t?Math.round(n.h)-Br*e:Math.round(n.h)+Br*e:r=t?Math.round(n.h)+Br*e:Math.round(n.h)-Br*e,r<0?r+=360:r>=360&&(r-=360),r}function cl(n,e,t){if(n.h===0&&n.s===0)return n.s;var r;return t?r=n.s-ll*e:e===sc?r=n.s+ll:r=n.s+gp*e,r>1&&(r=1),t&&e===uc&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function fl(n,e,t){var r;return t?r=n.v+mp*e:r=n.v-yp*e,r>1&&(r=1),Number(r.toFixed(2))}function Cr(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[],r=Kt(n),a=uc;a>0;a-=1){var i=ul(r),o=jr(Kt({h:sl(i,a,!0),s:cl(i,a,!0),v:fl(i,a,!0)}));t.push(o)}t.push(jr(r));for(var l=1;l<=sc;l+=1){var u=ul(r),s=jr(Kt({h:sl(u,l),s:cl(u,l),v:fl(u,l)}));t.push(s)}return e.theme==="dark"?bp.map(function(c){var f=c.index,v=c.opacity,d=jr(xp(Kt(e.backgroundColor||"#141414"),Kt(t[f]),v*100));return d}):t}var Ba={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},ja={},Ha={};Object.keys(Ba).forEach(function(n){ja[n]=Cr(Ba[n]),ja[n].primary=ja[n][5],Ha[n]=Cr(Ba[n],{theme:"dark",backgroundColor:"#141414"}),Ha[n].primary=Ha[n][5]});var dl=[],lr=[],wp="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function Cp(){var n=document.createElement("style");return n.setAttribute("type","text/css"),n}function Sp(n,e){if(e=e||{},n===void 0)throw new Error(wp);var t=e.prepend===!0?"prepend":"append",r=e.container!==void 0?e.container:document.querySelector("head"),a=dl.indexOf(r);a===-1&&(a=dl.push(r)-1,lr[a]={});var i;return lr[a]!==void 0&&lr[a][t]!==void 0?i=lr[a][t]:(i=lr[a][t]=Cp(),t==="prepend"?r.insertBefore(i,r.childNodes[0]):r.appendChild(i)),n.charCodeAt(0)===65279&&(n=n.substr(1,n.length)),i.styleSheet?i.styleSheet.cssText+=n:i.textContent+=n,i}function vl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Pp(n,a,t[a])})}return n}function Pp(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function pl(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function yi(n,e,t){return t?Ho(n.tag,vl({key:e},t,n.attrs),(n.children||[]).map(function(r,a){return yi(r,"".concat(e,"-").concat(n.tag,"-").concat(a))})):Ho(n.tag,vl({key:e},n.attrs),(n.children||[]).map(function(r,a){return yi(r,"".concat(e,"-").concat(n.tag,"-").concat(a))}))}function cc(n){return Cr(n)[0]}function fc(n){return n?Array.isArray(n)?n:[n]:[]}var Op=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,hl=!1,Ap=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Op;dn(function(){hl||(typeof window<"u"&&window.document&&window.document.documentElement&&Sp(e,{prepend:!0}),hl=!0)})},Tp=["icon","primaryColor","secondaryColor"];function kp(n,e){if(n==null)return{};var t=Ep(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Ep(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function ta(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){_p(n,a,t[a])})}return n}function _p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var gr={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Mp(n){var e=n.primaryColor,t=n.secondaryColor;gr.primaryColor=e,gr.secondaryColor=t||cc(e),gr.calculated=!!t}function Ip(){return ta({},gr)}var er=function(e,t){var r=ta({},e,t.attrs),a=r.icon,i=r.primaryColor,o=r.secondaryColor,l=kp(r,Tp),u=gr;if(i&&(u={primaryColor:i,secondaryColor:o||cc(i)}),Ap(),pl(a),!pl(a))return null;var s=a;return s&&typeof s.icon=="function"&&(s=ta({},s,{icon:s.icon(u.primaryColor,u.secondaryColor)})),yi(s.icon,"svg-".concat(s.name),ta({},l,{"data-icon":s.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};er.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};er.inheritAttrs=!1;er.displayName="IconBase";er.getTwoToneColors=Ip;er.setTwoToneColors=Mp;const Xi=er;function Np(n,e){return Kp(n)||$p(n,e)||Rp(n,e)||Dp()}function Dp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rp(n,e){if(n){if(typeof n=="string")return gl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gl(n,e)}}function gl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function $p(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(n);!(a=(o=t.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(u){i=!0,l=u}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Kp(n){if(Array.isArray(n))return n}function dc(n){var e=fc(n),t=Np(e,2),r=t[0],a=t[1];return Xi.setTwoToneColors({primaryColor:r,secondaryColor:a})}function Lp(){var n=Xi.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var Fp=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function Bp(n,e){return Vp(n)||zp(n,e)||Hp(n,e)||jp()}function jp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hp(n,e){if(n){if(typeof n=="string")return ml(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ml(n,e)}}function ml(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function zp(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(n);!(a=(o=t.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(u){i=!0,l=u}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Vp(n){if(Array.isArray(n))return n}function yl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){bi(n,a,t[a])})}return n}function bi(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Gp(n,e){if(n==null)return{};var t=Up(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Up(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}dc("#1890ff");var nr=function(e,t){var r,a=yl({},e,t.attrs),i=a.class,o=a.icon,l=a.spin,u=a.rotate,s=a.tabindex,c=a.twoToneColor,f=a.onClick,v=Gp(a,Fp),d=(r={anticon:!0},bi(r,"anticon-".concat(o.name),!!o.name),bi(r,i,i),r),p=l===""||l||o.name==="loading"?"anticon-spin":"",g=s;g===void 0&&f&&(g=-1,v.tabindex=g);var h=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,y=fc(c),b=Bp(y,2),w=b[0],O=b[1];return m("span",yl({role:"img","aria-label":o.name},v,{onClick:f,class:d}),[m(Xi,{class:p,icon:o,primaryColor:w,secondaryColor:O,style:h},null)])};nr.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String};nr.displayName="AntdIcon";nr.inheritAttrs=!1;nr.getTwoToneColor=Lp;nr.setTwoToneColor=dc;const an=nr;function bl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Wp(n,a,t[a])})}return n}function Wp(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Qi=function(e,t){var r=bl({},e,t.attrs);return m(an,bl({},r,{icon:ap}),null)};Qi.displayName="LoadingOutlined";Qi.inheritAttrs=!1;const vc=Qi;var qp={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};const Yp=qp;function xl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Xp(n,a,t[a])})}return n}function Xp(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Zi=function(e,t){var r=xl({},e,t.attrs);return m(an,xl({},r,{icon:Yp}),null)};Zi.displayName="ExclamationCircleFilled";Zi.inheritAttrs=!1;const Qp=Zi;var Zp={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"};const Jp=Zp;function wl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){eh(n,a,t[a])})}return n}function eh(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Ji=function(e,t){var r=wl({},e,t.attrs);return m(an,wl({},r,{icon:Jp}),null)};Ji.displayName="CloseCircleFilled";Ji.inheritAttrs=!1;const nh=Ji;var th={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};const rh=th;function Cl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){ah(n,a,t[a])})}return n}function ah(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var eo=function(e,t){var r=Cl({},e,t.attrs);return m(an,Cl({},r,{icon:rh}),null)};eo.displayName="CheckCircleFilled";eo.inheritAttrs=!1;const ih=eo;var oh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const lh=oh;function Sl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){uh(n,a,t[a])})}return n}function uh(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var no=function(e,t){var r=Sl({},e,t.attrs);return m(an,Sl({},r,{icon:lh}),null)};no.displayName="InfoCircleFilled";no.inheritAttrs=!1;const sh=no;var pc=3,hc,mn,ch=1,gc="",mc="move-up",yc=!1,bc=function(){return document.body},xc,wc=!1;function fh(){return ch++}function dh(n){n.top!==void 0&&(hc=n.top,mn=null),n.duration!==void 0&&(pc=n.duration),n.prefixCls!==void 0&&(gc=n.prefixCls),n.getContainer!==void 0&&(bc=n.getContainer,mn=null),n.transitionName!==void 0&&(mc=n.transitionName,mn=null,yc=!0),n.maxCount!==void 0&&(xc=n.maxCount,mn=null),n.rtl!==void 0&&(wc=n.rtl)}function vh(n,e){if(mn){e(mn);return}oc.newInstance({appContext:n.appContext,prefixCls:n.prefixCls||gc,rootPrefixCls:n.rootPrefixCls,transitionName:mc,hasTransitionName:yc,style:{top:hc},getContainer:bc||n.getPopupContainer,maxCount:xc,name:"message"},function(t){if(mn){e(mn);return}mn=t,e(t)})}var Cc={info:sh,success:ih,error:nh,warning:Qp,loading:vc},ph=Object.keys(Cc);function hh(n){var e=n.duration!==void 0?n.duration:pc,t=n.key||fh(),r=new Promise(function(i){var o=function(){return typeof n.onClose=="function"&&n.onClose(),i(!0)};vh(n,function(l){l.notice({key:t,duration:e,style:n.style||{},class:n.class,content:function(s){var c,f=s.prefixCls,v=Cc[n.type],d=v?m(v,null,null):"",p=Pe("".concat(f,"-custom-content"),(c={},B(c,"".concat(f,"-").concat(n.type),n.type),B(c,"".concat(f,"-rtl"),wc===!0),c));return m("div",{class:p},[typeof n.icon=="function"?n.icon():n.icon||d,m("span",null,[typeof n.content=="function"?n.content():n.content])])},onClose:o,onClick:n.onClick})})}),a=function(){mn&&mn.removeNotice(t)};return a.then=function(i,o){return r.then(i,o)},a.promise=r,a}function gh(n){return Object.prototype.toString.call(n)==="[object Object]"&&!!n.content}var pa={open:hh,config:dh,destroy:function(e){if(mn)if(e){var t=mn,r=t.removeNotice;r(e)}else{var a=mn,i=a.destroy;i(),mn=null}}};function mh(n,e){n[e]=function(t,r,a){return gh(t)?n.open(x(x({},t),{},{type:e})):(typeof r=="function"&&(a=r,r=void 0),n.open({content:t,duration:r,type:e,onClose:a}))}}ph.forEach(function(n){return mh(pa,n)});pa.warn=pa.warning;const yh=pa;function Pl(n,e,t,r,a,i,o){try{var l=n[i](o),u=l.value}catch(s){t(s);return}l.done?e(u):Promise.resolve(u).then(r,a)}function bh(n){return function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function o(u){Pl(i,r,a,o,l,"next",u)}function l(u){Pl(i,r,a,o,l,"throw",u)}o(void 0)})}}var xi={},xh={get exports(){return xi},set exports(n){xi=n}},wi={},wh={get exports(){return wi},set exports(n){wi=n}};(function(n){function e(t){return n.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n.exports.__esModule=!0,n.exports.default=n.exports,e(t)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(wh);(function(n){var e=wi.default;function t(){n.exports=t=function(){return r},n.exports.__esModule=!0,n.exports.default=n.exports;var r={},a=Object.prototype,i=a.hasOwnProperty,o=Object.defineProperty||function(I,S,E){I[S]=E.value},l=typeof Symbol=="function"?Symbol:{},u=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function f(I,S,E){return Object.defineProperty(I,S,{value:E,enumerable:!0,configurable:!0,writable:!0}),I[S]}try{f({},"")}catch{f=function(E,N,$){return E[N]=$}}function v(I,S,E,N){var $=S&&S.prototype instanceof g?S:g,U=Object.create($.prototype),Z=new L(N||[]);return o(U,"_invoke",{value:M(I,E,Z)}),U}function d(I,S,E){try{return{type:"normal",arg:I.call(S,E)}}catch(N){return{type:"throw",arg:N}}}r.wrap=v;var p={};function g(){}function h(){}function y(){}var b={};f(b,u,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(R([])));O&&O!==a&&i.call(O,u)&&(b=O);var P=y.prototype=g.prototype=Object.create(b);function C(I){["next","throw","return"].forEach(function(S){f(I,S,function(E){return this._invoke(S,E)})})}function T(I,S){function E($,U,Z,J){var F=d(I[$],I,U);if(F.type!=="throw"){var V=F.arg,Y=V.value;return Y&&e(Y)=="object"&&i.call(Y,"__await")?S.resolve(Y.__await).then(function(j){E("next",j,Z,J)},function(j){E("throw",j,Z,J)}):S.resolve(Y).then(function(j){V.value=j,Z(V)},function(j){return E("throw",j,Z,J)})}J(F.arg)}var N;o(this,"_invoke",{value:function(U,Z){function J(){return new S(function(F,V){E(U,Z,F,V)})}return N=N?N.then(J,J):J()}})}function M(I,S,E){var N="suspendedStart";return function($,U){if(N==="executing")throw new Error("Generator is already running");if(N==="completed"){if($==="throw")throw U;return K()}for(E.method=$,E.arg=U;;){var Z=E.delegate;if(Z){var J=A(Z,E);if(J){if(J===p)continue;return J}}if(E.method==="next")E.sent=E._sent=E.arg;else if(E.method==="throw"){if(N==="suspendedStart")throw N="completed",E.arg;E.dispatchException(E.arg)}else E.method==="return"&&E.abrupt("return",E.arg);N="executing";var F=d(I,S,E);if(F.type==="normal"){if(N=E.done?"completed":"suspendedYield",F.arg===p)continue;return{value:F.arg,done:E.done}}F.type==="throw"&&(N="completed",E.method="throw",E.arg=F.arg)}}}function A(I,S){var E=S.method,N=I.iterator[E];if(N===void 0)return S.delegate=null,E==="throw"&&I.iterator.return&&(S.method="return",S.arg=void 0,A(I,S),S.method==="throw")||E!=="return"&&(S.method="throw",S.arg=new TypeError("The iterator does not provide a '"+E+"' method")),p;var $=d(N,I.iterator,S.arg);if($.type==="throw")return S.method="throw",S.arg=$.arg,S.delegate=null,p;var U=$.arg;return U?U.done?(S[I.resultName]=U.value,S.next=I.nextLoc,S.method!=="return"&&(S.method="next",S.arg=void 0),S.delegate=null,p):U:(S.method="throw",S.arg=new TypeError("iterator result is not an object"),S.delegate=null,p)}function H(I){var S={tryLoc:I[0]};1 in I&&(S.catchLoc=I[1]),2 in I&&(S.finallyLoc=I[2],S.afterLoc=I[3]),this.tryEntries.push(S)}function _(I){var S=I.completion||{};S.type="normal",delete S.arg,I.completion=S}function L(I){this.tryEntries=[{tryLoc:"root"}],I.forEach(H,this),this.reset(!0)}function R(I){if(I){var S=I[u];if(S)return S.call(I);if(typeof I.next=="function")return I;if(!isNaN(I.length)){var E=-1,N=function $(){for(;++E<I.length;)if(i.call(I,E))return $.value=I[E],$.done=!1,$;return $.value=void 0,$.done=!0,$};return N.next=N}}return{next:K}}function K(){return{value:void 0,done:!0}}return h.prototype=y,o(P,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:h,configurable:!0}),h.displayName=f(y,c,"GeneratorFunction"),r.isGeneratorFunction=function(I){var S=typeof I=="function"&&I.constructor;return!!S&&(S===h||(S.displayName||S.name)==="GeneratorFunction")},r.mark=function(I){return Object.setPrototypeOf?Object.setPrototypeOf(I,y):(I.__proto__=y,f(I,c,"GeneratorFunction")),I.prototype=Object.create(P),I},r.awrap=function(I){return{__await:I}},C(T.prototype),f(T.prototype,s,function(){return this}),r.AsyncIterator=T,r.async=function(I,S,E,N,$){$===void 0&&($=Promise);var U=new T(v(I,S,E,N),$);return r.isGeneratorFunction(S)?U:U.next().then(function(Z){return Z.done?Z.value:U.next()})},C(P),f(P,c,"Generator"),f(P,u,function(){return this}),f(P,"toString",function(){return"[object Generator]"}),r.keys=function(I){var S=Object(I),E=[];for(var N in S)E.push(N);return E.reverse(),function $(){for(;E.length;){var U=E.pop();if(U in S)return $.value=U,$.done=!1,$}return $.done=!0,$}},r.values=R,L.prototype={constructor:L,reset:function(S){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!S)for(var E in this)E.charAt(0)==="t"&&i.call(this,E)&&!isNaN(+E.slice(1))&&(this[E]=void 0)},stop:function(){this.done=!0;var S=this.tryEntries[0].completion;if(S.type==="throw")throw S.arg;return this.rval},dispatchException:function(S){if(this.done)throw S;var E=this;function N(V,Y){return Z.type="throw",Z.arg=S,E.next=V,Y&&(E.method="next",E.arg=void 0),!!Y}for(var $=this.tryEntries.length-1;$>=0;--$){var U=this.tryEntries[$],Z=U.completion;if(U.tryLoc==="root")return N("end");if(U.tryLoc<=this.prev){var J=i.call(U,"catchLoc"),F=i.call(U,"finallyLoc");if(J&&F){if(this.prev<U.catchLoc)return N(U.catchLoc,!0);if(this.prev<U.finallyLoc)return N(U.finallyLoc)}else if(J){if(this.prev<U.catchLoc)return N(U.catchLoc,!0)}else{if(!F)throw new Error("try statement without catch or finally");if(this.prev<U.finallyLoc)return N(U.finallyLoc)}}}},abrupt:function(S,E){for(var N=this.tryEntries.length-1;N>=0;--N){var $=this.tryEntries[N];if($.tryLoc<=this.prev&&i.call($,"finallyLoc")&&this.prev<$.finallyLoc){var U=$;break}}U&&(S==="break"||S==="continue")&&U.tryLoc<=E&&E<=U.finallyLoc&&(U=null);var Z=U?U.completion:{};return Z.type=S,Z.arg=E,U?(this.method="next",this.next=U.finallyLoc,p):this.complete(Z)},complete:function(S,E){if(S.type==="throw")throw S.arg;return S.type==="break"||S.type==="continue"?this.next=S.arg:S.type==="return"?(this.rval=this.arg=S.arg,this.method="return",this.next="end"):S.type==="normal"&&E&&(this.next=E),p},finish:function(S){for(var E=this.tryEntries.length-1;E>=0;--E){var N=this.tryEntries[E];if(N.finallyLoc===S)return this.complete(N.completion,N.afterLoc),_(N),p}},catch:function(S){for(var E=this.tryEntries.length-1;E>=0;--E){var N=this.tryEntries[E];if(N.tryLoc===S){var $=N.completion;if($.type==="throw"){var U=$.arg;_(N)}return U}}throw new Error("illegal catch attempt")},delegateYield:function(S,E,N){return this.delegate={iterator:R(S),resultName:E,nextLoc:N},this.method==="next"&&(this.arg=void 0),p}},r}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(xh);var ra=xi(),Ch=ra;try{regeneratorRuntime=ra}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=ra:Function("r","regeneratorRuntime = r")(ra)}const Ol=Ch;var Sh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const Ph=Sh;function Al(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Oh(n,a,t[a])})}return n}function Oh(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var to=function(e,t){var r=Al({},e,t.attrs);return m(an,Al({},r,{icon:Ph}),null)};to.displayName="CheckCircleOutlined";to.inheritAttrs=!1;const Ah=to;var Th={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const kh=Th;function Tl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Eh(n,a,t[a])})}return n}function Eh(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ro=function(e,t){var r=Tl({},e,t.attrs);return m(an,Tl({},r,{icon:kh}),null)};ro.displayName="InfoCircleOutlined";ro.inheritAttrs=!1;const _h=ro;var Mh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"};const Ih=Mh;function kl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Nh(n,a,t[a])})}return n}function Nh(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ao=function(e,t){var r=kl({},e,t.attrs);return m(an,kl({},r,{icon:Ih}),null)};ao.displayName="CloseCircleOutlined";ao.inheritAttrs=!1;const Dh=ao;var Rh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"};const $h=Rh;function El(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Kh(n,a,t[a])})}return n}function Kh(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var io=function(e,t){var r=El({},e,t.attrs);return m(an,El({},r,{icon:$h}),null)};io.displayName="ExclamationCircleOutlined";io.inheritAttrs=!1;const Lh=io;var Fh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"};const Bh=Fh;function _l(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){jh(n,a,t[a])})}return n}function jh(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var oo=function(e,t){var r=_l({},e,t.attrs);return m(an,_l({},r,{icon:Bh}),null)};oo.displayName="CloseOutlined";oo.inheritAttrs=!1;const Sc=oo;var yt={},Pc=4.5,Oc="24px",Ac="24px",Ci="",Tc="topRight",kc=function(){return document.body},Ec=null,Si=!1,_c;function Hh(n){var e=n.duration,t=n.placement,r=n.bottom,a=n.top,i=n.getContainer,o=n.closeIcon,l=n.prefixCls;l!==void 0&&(Ci=l),e!==void 0&&(Pc=e),t!==void 0&&(Tc=t),r!==void 0&&(Ac=typeof r=="number"?"".concat(r,"px"):r),a!==void 0&&(Oc=typeof a=="number"?"".concat(a,"px"):a),i!==void 0&&(kc=i),o!==void 0&&(Ec=o),n.rtl!==void 0&&(Si=n.rtl),n.maxCount!==void 0&&(_c=n.maxCount)}function zh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oc,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ac,r;switch(n){case"top":r={left:"50%",transform:"translateX(-50%)",right:"auto",top:e,bottom:"auto"};break;case"topLeft":r={left:"0px",top:e,bottom:"auto"};break;case"topRight":r={right:"0px",top:e,bottom:"auto"};break;case"bottom":r={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:t};break;case"bottomLeft":r={left:"0px",top:"auto",bottom:t};break;default:r={right:"0px",top:"auto",bottom:t};break}return r}function Vh(n,e){var t=n.prefixCls,r=n.placement,a=r===void 0?Tc:r,i=n.getContainer,o=i===void 0?kc:i,l=n.top,u=n.bottom,s=n.closeIcon,c=s===void 0?Ec:s,f=n.appContext,v=og(),d=v.getPrefixCls,p=d("notification",t||Ci),g="".concat(p,"-").concat(a,"-").concat(Si),h=yt[g];if(h){Promise.resolve(h).then(function(b){e(b)});return}var y=Pe("".concat(p,"-").concat(a),B({},"".concat(p,"-rtl"),Si===!0));oc.newInstance({name:"notification",prefixCls:t||Ci,class:y,style:zh(a,l,u),appContext:f,getContainer:o,closeIcon:function(w){var O=w.prefixCls,P=m("span",{class:"".concat(O,"-close-x")},[dr(c,{},m(Sc,{class:"".concat(O,"-close-icon")},null))]);return P},maxCount:_c,hasTransitionName:!0},function(b){yt[g]=b,e(b)})}var Gh={success:Ah,info:_h,error:Dh,warning:Lh};function Uh(n){var e=n.icon,t=n.type,r=n.description,a=n.message,i=n.btn,o=n.duration===void 0?Pc:n.duration;Vh(n,function(l){l.notice({content:function(s){var c=s.prefixCls,f="".concat(c,"-notice"),v=null;if(e)v=function(){return m("span",{class:"".concat(f,"-icon")},[dr(e)])};else if(t){var d=Gh[t];v=function(){return m(d,{class:"".concat(f,"-icon ").concat(f,"-icon-").concat(t)},null)}}return m("div",{class:v?"".concat(f,"-with-icon"):""},[v&&v(),m("div",{class:"".concat(f,"-message")},[!r&&v?m("span",{class:"".concat(f,"-message-single-line-auto-margin")},null):null,dr(a)]),m("div",{class:"".concat(f,"-description")},[dr(r)]),i?m("span",{class:"".concat(f,"-btn")},[dr(i)]):null])},duration:o,closable:!0,onClose:n.onClose,onClick:n.onClick,key:n.key,style:n.style||{},class:n.class})})}var Sr={open:Uh,close:function(e){Object.keys(yt).forEach(function(t){return Promise.resolve(yt[t]).then(function(r){r.removeNotice(e)})})},config:Hh,destroy:function(){Object.keys(yt).forEach(function(e){Promise.resolve(yt[e]).then(function(t){t.destroy()}),delete yt[e]})}},Wh=["success","info","warning","error"];Wh.forEach(function(n){Sr[n]=function(e){return Sr.open(x(x({},e),{},{type:n}))}});Sr.warn=Sr.warning;const qh=Sr;function lo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Yh="vc-util-key";function Mc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.mark;return e?e.startsWith("data-")?e:"data-".concat(e):Yh}function uo(n){if(n.attachTo)return n.attachTo;var e=document.querySelector("head");return e||document.body}function Ml(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!lo())return null;var r=document.createElement("style");if((e=t.csp)!==null&&e!==void 0&&e.nonce){var a;r.nonce=(a=t.csp)===null||a===void 0?void 0:a.nonce}r.innerHTML=n;var i=uo(t),o=i.firstChild;return t.prepend&&i.prepend?i.prepend(r):t.prepend&&o?i.insertBefore(r,o):i.appendChild(r),r}var Pi=new Map;function Xh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=uo(e);return Array.from(Pi.get(t).children).find(function(r){return r.tagName==="STYLE"&&r.getAttribute(Mc(e))===n})}function Qh(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=uo(t);if(!Pi.has(r)){var a=Ml("",t),i=a.parentNode;Pi.set(r,i),i.removeChild(a)}var o=Xh(e,t);if(o){var l,u;if((l=t.csp)!==null&&l!==void 0&&l.nonce&&o.nonce!==((u=t.csp)===null||u===void 0?void 0:u.nonce)){var s;o.nonce=(s=t.csp)===null||s===void 0?void 0:s.nonce}return o.innerHTML!==n&&(o.innerHTML=n),o}var c=Ml(n,t);return c.setAttribute(Mc(t),e),c}const Vn=function(n,e,t){ac(n,"[ant-design-vue: ".concat(e,"] ").concat(t))};var Zh="-ant-".concat(Date.now(),"-").concat(Math.random());function Jh(n,e){var t={},r=function(c,f){var v=c.clone();return v=(f==null?void 0:f(v))||v,v.toRgbString()},a=function(c,f){var v=new Fa(c),d=Cr(v.toRgbString());t["".concat(f,"-color")]=r(v),t["".concat(f,"-color-disabled")]=d[1],t["".concat(f,"-color-hover")]=d[4],t["".concat(f,"-color-active")]=d[6],t["".concat(f,"-color-outline")]=v.clone().setAlpha(.2).toRgbString(),t["".concat(f,"-color-deprecated-bg")]=d[1],t["".concat(f,"-color-deprecated-border")]=d[3]};if(e.primaryColor){a(e.primaryColor,"primary");var i=new Fa(e.primaryColor),o=Cr(i.toRgbString());o.forEach(function(s,c){t["primary-".concat(c+1)]=s}),t["primary-color-deprecated-l-35"]=r(i,function(s){return s.lighten(35)}),t["primary-color-deprecated-l-20"]=r(i,function(s){return s.lighten(20)}),t["primary-color-deprecated-t-20"]=r(i,function(s){return s.tint(20)}),t["primary-color-deprecated-t-50"]=r(i,function(s){return s.tint(50)}),t["primary-color-deprecated-f-12"]=r(i,function(s){return s.setAlpha(s.getAlpha()*.12)});var l=new Fa(o[0]);t["primary-color-active-deprecated-f-30"]=r(l,function(s){return s.setAlpha(s.getAlpha()*.3)}),t["primary-color-active-deprecated-d-02"]=r(l,function(s){return s.darken(2)})}e.successColor&&a(e.successColor,"success"),e.warningColor&&a(e.warningColor,"warning"),e.errorColor&&a(e.errorColor,"error"),e.infoColor&&a(e.infoColor,"info");var u=Object.keys(t).map(function(s){return"--".concat(n,"-").concat(s,": ").concat(t[s],";")});return`
  :root {
    `.concat(u.join(`
`),`
  }
  `).trim()}function eg(n,e){var t=Jh(n,e);lo()?Qh(t,"".concat(Zh,"-dynamic-theme")):Vn(!1,"ConfigProvider","SSR do not support dynamic theme with css variables.")}var ng=Symbol("GlobalFormContextKey"),tg=function(e){yn(ng,e)},rg=function(){return{getTargetContainer:{type:Function},getPopupContainer:{type:Function},prefixCls:String,getPrefixCls:{type:Function},renderEmpty:{type:Function},transformCellText:{type:Function},csp:{type:Object,default:void 0},input:{type:Object},autoInsertSpaceInButton:{type:Boolean,default:void 0},locale:{type:Object,default:void 0},pageHeader:{type:Object},componentSize:{type:String},direction:{type:String},space:{type:Object},virtual:{type:Boolean,default:void 0},dropdownMatchSelectWidth:{type:[Number,Boolean],default:!0},form:{type:Object,default:void 0},notUpdateGlobalConfig:Boolean}},ag="ant";function Bt(){return An.prefixCls||ag}var Oi=Sn({}),Ic=Sn({}),An=Sn({});Ze(function(){Ye(An,Oi,Ic),An.prefixCls=Bt(),An.getPrefixCls=function(n,e){return e||(n?"".concat(An.prefixCls,"-").concat(n):An.prefixCls)},An.getRootPrefixCls=function(n,e){return n||(An.prefixCls?An.prefixCls:e&&e.includes("-")?e.replace(/^(.*)-[^-]*$/,"$1"):Bt())}});var za,ig=function(e){za&&za(),za=Ze(function(){Ye(Ic,Sn(e)),Ye(An,Sn(e))}),e.theme&&eg(Bt(),e.theme)},og=function(){return{getPrefixCls:function(t,r){return r||(t?"".concat(Bt(),"-").concat(t):Bt())},getRootPrefixCls:function(t,r){return t||(An.prefixCls?An.prefixCls:r&&r.includes("-")?r.replace(/^(.*)-[^-]*$/,"$1"):Bt())}}},mr=ce({compatConfig:{MODE:3},name:"AConfigProvider",inheritAttrs:!1,props:rg(),setup:function(e,t){var r=t.slots,a=function(f,v){var d=e.prefixCls,p=d===void 0?"ant":d;return v||(f?"".concat(p,"-").concat(f):p)},i=function(f){var v=e.renderEmpty||r.renderEmpty||rc;return v(f)},o=function(f,v){var d=e.prefixCls;if(v)return v;var p=d||a("");return f?"".concat(p,"-").concat(f):p},l=Sn(x(x({},e),{},{getPrefixCls:o,renderEmpty:i}));Object.keys(e).forEach(function(c){ue(function(){return e[c]},function(){l[c]=e[c]})}),e.notUpdateGlobalConfig||(Ye(Oi,l),ue(l,function(){Ye(Oi,l)}));var u=k(function(){var c={};if(e.locale){var f,v;c=((f=e.locale.Form)===null||f===void 0?void 0:f.defaultValidateMessages)||((v=di.Form)===null||v===void 0?void 0:v.defaultValidateMessages)||{}}return e.form&&e.form.validateMessages&&(c=x(x({},c),e.form.validateMessages)),c});tg({validateMessages:u}),yn("configProvider",l);var s=function(f){var v;return m(Zv,{locale:e.locale||f,ANT_MARK__:vi},{default:function(){return[(v=r.default)===null||v===void 0?void 0:v.call(r)]}})};return Ze(function(){e.direction&&(yh.config({rtl:e.direction==="rtl"}),qh.config({rtl:e.direction==="rtl"}))}),function(){return m(zs,{children:function(f,v,d){return s(d)}},null)}}}),lg=Sn({getPrefixCls:function(e,t){return t||(e?"ant-".concat(e):"ant")},renderEmpty:rc,direction:"ltr"});mr.config=ig;mr.install=function(n){n.component(mr.name,mr)};const bn=function(n,e){var t=pn("configProvider",lg),r=k(function(){return t.getPrefixCls(n,e.prefixCls)}),a=k(function(){var b;return(b=e.direction)!==null&&b!==void 0?b:t.direction}),i=k(function(){return t.getPrefixCls()}),o=k(function(){return t.autoInsertSpaceInButton}),l=k(function(){return t.renderEmpty}),u=k(function(){return t.space}),s=k(function(){return t.pageHeader}),c=k(function(){return t.form}),f=k(function(){return e.getTargetContainer||t.getTargetContainer}),v=k(function(){return e.getPopupContainer||t.getPopupContainer}),d=k(function(){var b;return(b=e.dropdownMatchSelectWidth)!==null&&b!==void 0?b:t.dropdownMatchSelectWidth}),p=k(function(){return(e.virtual===void 0?t.virtual!==!1:e.virtual!==!1)&&d.value!==!1}),g=k(function(){return e.size||t.componentSize}),h=k(function(){var b;return e.autocomplete||((b=t.input)===null||b===void 0?void 0:b.autocomplete)}),y=k(function(){return t.csp});return{configProvider:t,prefixCls:r,direction:a,size:g,getTargetContainer:f,getPopupContainer:v,space:u,pageHeader:s,form:c,autoInsertSpaceInButton:o,renderEmpty:l,virtual:p,dropdownMatchSelectWidth:d,rootPrefixCls:i,getPrefixCls:t.getPrefixCls,autocomplete:h,csp:y}};function Oa(n,e){for(var t=Ye({},n),r=0;r<e.length;r+=1){var a=e[r];delete t[a]}return t}function Lt(n,e){return n?n.contains(e):!1}var Nc=["moz","ms","webkit"];function ug(){var n=0;return function(e){var t=new Date().getTime(),r=Math.max(0,16-(t-n)),a=window.setTimeout(function(){e(t+r)},r);return n=t+r,a}}function sg(){if(typeof window>"u")return function(){};if(window.requestAnimationFrame)return window.requestAnimationFrame.bind(window);var n=Nc.filter(function(e){return"".concat(e,"RequestAnimationFrame")in window})[0];return n?window["".concat(n,"RequestAnimationFrame")]:ug()}function cg(n){if(typeof window>"u")return null;if(window.cancelAnimationFrame)return window.cancelAnimationFrame(n);var e=Nc.filter(function(t){return"".concat(t,"CancelAnimationFrame")in window||"".concat(t,"CancelRequestAnimationFrame")in window})[0];return e?(window["".concat(e,"CancelAnimationFrame")]||window["".concat(e,"CancelRequestAnimationFrame")]).call(this,n):clearTimeout(n)}var Il=sg(),fg=function(e){return cg(e.id)},dg=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=Date.now();function a(){Date.now()-r>=t?e.call():i.id=Il(a)}var i={id:Il(a)};return i},so={visible:Boolean,prefixCls:String,zIndex:Number,destroyPopupOnHide:Boolean,forceRender:Boolean,animation:[String,Object],transitionName:String,stretch:{type:String},align:{type:Object},point:{type:Object},getRootDomNode:{type:Function},getClassNameFromAlign:{type:Function},onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function},onTouchstart:{type:Function}},vg=x(x({},so),{},{mobile:{type:Object}}),pg=x(x({},so),{},{mask:Boolean,mobile:{type:Object},maskAnimation:String,maskTransitionName:String});function Dc(n){var e=n.prefixCls,t=n.animation,r=n.transitionName;return t?{name:"".concat(e,"-").concat(t)}:r?{name:r}:{}}function Rc(n){var e=n.prefixCls,t=n.visible,r=n.zIndex,a=n.mask,i=n.maskAnimation,o=n.maskTransitionName;if(!a)return null;var l={};return(o||i)&&(l=Dc({prefixCls:e,transitionName:o,animation:i})),m(Qt,x({appear:!0},l),{default:function(){return[xt(m("div",{style:{zIndex:r},class:"".concat(e,"-mask")},null),[[Jf("if"),t]])]}})}Rc.displayName="Mask";const hg=ce({compatConfig:{MODE:3},name:"MobilePopupInner",inheritAttrs:!1,props:vg,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup:function(e,t){var r=t.expose,a=t.slots,i=D();return r({forceAlign:function(){},getElement:function(){return i.value}}),function(){var o,l=e.zIndex,u=e.visible,s=e.prefixCls,c=e.mobile;c=c===void 0?{}:c;var f=c.popupClassName,v=c.popupStyle,d=c.popupMotion,p=d===void 0?{}:d,g=c.popupRender,h=x({zIndex:l},v),y=Kn((o=a.default)===null||o===void 0?void 0:o.call(a));y.length>1&&(y=m("div",{class:"".concat(s,"-content")},[y])),g&&(y=g(y));var b=Pe(s,f);return m(Qt,x({ref:i},p),{default:function(){return[u?m("div",{class:b,style:h},[y]):null]}})}}});var Nl=["measure","align",null,"motion"];const gg=function(n,e){var t=D(null),r=D(),a=D(!1);function i(u){a.value||(t.value=u)}function o(){Ue.cancel(r.value)}function l(u){o(),r.value=Ue(function(){var s=t.value;switch(t.value){case"align":s="motion";break;case"motion":s="stable";break}i(s),u==null||u()})}return ue(n,function(){i("measure")},{immediate:!0,flush:"post"}),nn(function(){ue(t,function(){switch(t.value){case"measure":e();break}t.value&&(r.value=Ue(bh(Ol.mark(function u(){var s,c;return Ol.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:s=Nl.indexOf(t.value),c=Nl[s+1],c&&s!==-1&&i(c);case 3:case"end":return v.stop()}},u)}))))},{immediate:!0,flush:"post"})}),Tn(function(){a.value=!0,o()}),[t,l]},mg=function(n){var e=D({width:0,height:0});function t(a){e.value={width:a.offsetWidth,height:a.offsetHeight}}var r=k(function(){var a={};if(n.value){var i=e.value,o=i.width,l=i.height;n.value.indexOf("height")!==-1&&l?a.height="".concat(l,"px"):n.value.indexOf("minHeight")!==-1&&l&&(a.minHeight="".concat(l,"px")),n.value.indexOf("width")!==-1&&o?a.width="".concat(o,"px"):n.value.indexOf("minWidth")!==-1&&o&&(a.minWidth="".concat(o,"px"))}return a});return[r,t]};function Dl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Rl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Dl(Object(t),!0).forEach(function(r){yg(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Dl(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ai(n){return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ai(n)}function yg(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ur,bg={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function ha(){if(ur!==void 0)return ur;ur="";var n=document.createElement("p").style,e="Transform";for(var t in bg)t+e in n&&(ur=t);return ur}function $c(){return ha()?"".concat(ha(),"TransitionProperty"):"transitionProperty"}function Aa(){return ha()?"".concat(ha(),"Transform"):"transform"}function $l(n,e){var t=$c();t&&(n.style[t]=e,t!=="transitionProperty"&&(n.style.transitionProperty=e))}function Va(n,e){var t=Aa();t&&(n.style[t]=e,t!=="transform"&&(n.style.transform=e))}function xg(n){return n.style.transitionProperty||n.style[$c()]}function wg(n){var e=window.getComputedStyle(n,null),t=e.getPropertyValue("transform")||e.getPropertyValue(Aa());if(t&&t!=="none"){var r=t.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(r[12]||r[4],0),y:parseFloat(r[13]||r[5],0)}}return{x:0,y:0}}var Cg=/matrix\((.*)\)/,Sg=/matrix3d\((.*)\)/;function Pg(n,e){var t=window.getComputedStyle(n,null),r=t.getPropertyValue("transform")||t.getPropertyValue(Aa());if(r&&r!=="none"){var a,i=r.match(Cg);if(i)i=i[1],a=i.split(",").map(function(l){return parseFloat(l,10)}),a[4]=e.x,a[5]=e.y,Va(n,"matrix(".concat(a.join(","),")"));else{var o=r.match(Sg)[1];a=o.split(",").map(function(l){return parseFloat(l,10)}),a[12]=e.x,a[13]=e.y,Va(n,"matrix3d(".concat(a.join(","),")"))}}else Va(n,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}var Og=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,Ir;function Kl(n){var e=n.style.display;n.style.display="none",n.offsetHeight,n.style.display=e}function jt(n,e,t){var r=t;if(Ai(e)==="object"){for(var a in e)e.hasOwnProperty(a)&&jt(n,a,e[a]);return}if(typeof r<"u"){typeof r=="number"&&(r="".concat(r,"px")),n.style[e]=r;return}return Ir(n,e)}function Ag(n){var e,t,r,a=n.ownerDocument,i=a.body,o=a&&a.documentElement;return e=n.getBoundingClientRect(),t=Math.floor(e.left),r=Math.floor(e.top),t-=o.clientLeft||i.clientLeft||0,r-=o.clientTop||i.clientTop||0,{left:t,top:r}}function Kc(n,e){var t=n["page".concat(e?"Y":"X","Offset")],r="scroll".concat(e?"Top":"Left");if(typeof t!="number"){var a=n.document;t=a.documentElement[r],typeof t!="number"&&(t=a.body[r])}return t}function Lc(n){return Kc(n)}function Fc(n){return Kc(n,!0)}function Pr(n){var e=Ag(n),t=n.ownerDocument,r=t.defaultView||t.parentWindow;return e.left+=Lc(r),e.top+=Fc(r),e}function co(n){return n!=null&&n==n.window}function Bc(n){return co(n)?n.document:n.nodeType===9?n:n.ownerDocument}function Tg(n,e,t){var r=t,a="",i=Bc(n);return r=r||i.defaultView.getComputedStyle(n,null),r&&(a=r.getPropertyValue(e)||r[e]),a}var kg=new RegExp("^(".concat(Og,")(?!px)[a-z%]+$"),"i"),Eg=/^(top|right|bottom|left)$/,Ga="currentStyle",Ua="runtimeStyle",pt="left",_g="px";function Mg(n,e){var t=n[Ga]&&n[Ga][e];if(kg.test(t)&&!Eg.test(e)){var r=n.style,a=r[pt],i=n[Ua][pt];n[Ua][pt]=n[Ga][pt],r[pt]=e==="fontSize"?"1em":t||0,t=r.pixelLeft+_g,r[pt]=a,n[Ua][pt]=i}return t===""?"auto":t}typeof window<"u"&&(Ir=window.getComputedStyle?Tg:Mg);function Hr(n,e){return n==="left"?e.useCssRight?"right":n:e.useCssBottom?"bottom":n}function Ll(n){if(n==="left")return"right";if(n==="right")return"left";if(n==="top")return"bottom";if(n==="bottom")return"top"}function Fl(n,e,t){jt(n,"position")==="static"&&(n.style.position="relative");var r=-999,a=-999,i=Hr("left",t),o=Hr("top",t),l=Ll(i),u=Ll(o);i!=="left"&&(r=999),o!=="top"&&(a=999);var s="",c=Pr(n);("left"in e||"top"in e)&&(s=xg(n)||"",$l(n,"none")),"left"in e&&(n.style[l]="",n.style[i]="".concat(r,"px")),"top"in e&&(n.style[u]="",n.style[o]="".concat(a,"px")),Kl(n);var f=Pr(n),v={};for(var d in e)if(e.hasOwnProperty(d)){var p=Hr(d,t),g=d==="left"?r:a,h=c[d]-f[d];p===d?v[p]=g+h:v[p]=g-h}jt(n,v),Kl(n),("left"in e||"top"in e)&&$l(n,s);var y={};for(var b in e)if(e.hasOwnProperty(b)){var w=Hr(b,t),O=e[b]-c[b];b===w?y[w]=v[w]+O:y[w]=v[w]-O}jt(n,y)}function Ig(n,e){var t=Pr(n),r=wg(n),a={x:r.x,y:r.y};"left"in e&&(a.x=r.x+e.left-t.left),"top"in e&&(a.y=r.y+e.top-t.top),Pg(n,a)}function Ng(n,e,t){if(t.ignoreShake){var r=Pr(n),a=r.left.toFixed(0),i=r.top.toFixed(0),o=e.left.toFixed(0),l=e.top.toFixed(0);if(a===o&&i===l)return}t.useCssRight||t.useCssBottom?Fl(n,e,t):t.useCssTransform&&Aa()in document.body.style?Ig(n,e):Fl(n,e,t)}function fo(n,e){for(var t=0;t<n.length;t++)e(n[t])}function jc(n){return Ir(n,"boxSizing")==="border-box"}var Dg=["margin","border","padding"],Ti=-1,Rg=2,ki=1,$g=0;function Kg(n,e,t){var r={},a=n.style,i;for(i in e)e.hasOwnProperty(i)&&(r[i]=a[i],a[i]=e[i]);t.call(n);for(i in e)e.hasOwnProperty(i)&&(a[i]=r[i])}function hr(n,e,t){var r=0,a,i,o;for(i=0;i<e.length;i++)if(a=e[i],a)for(o=0;o<t.length;o++){var l=void 0;a==="border"?l="".concat(a).concat(t[o],"Width"):l=a+t[o],r+=parseFloat(Ir(n,l))||0}return r}var zn={getParent:function(e){var t=e;do t.nodeType===11&&t.host?t=t.host:t=t.parentNode;while(t&&t.nodeType!==1&&t.nodeType!==9);return t}};fo(["Width","Height"],function(n){zn["doc".concat(n)]=function(e){var t=e.document;return Math.max(t.documentElement["scroll".concat(n)],t.body["scroll".concat(n)],zn["viewport".concat(n)](t))},zn["viewport".concat(n)]=function(e){var t="client".concat(n),r=e.document,a=r.body,i=r.documentElement,o=i[t];return r.compatMode==="CSS1Compat"&&o||a&&a[t]||o}});function Bl(n,e,t){var r=t;if(co(n))return e==="width"?zn.viewportWidth(n):zn.viewportHeight(n);if(n.nodeType===9)return e==="width"?zn.docWidth(n):zn.docHeight(n);var a=e==="width"?["Left","Right"]:["Top","Bottom"],i=Math.floor(e==="width"?n.getBoundingClientRect().width:n.getBoundingClientRect().height),o=jc(n),l=0;(i==null||i<=0)&&(i=void 0,l=Ir(n,e),(l==null||Number(l)<0)&&(l=n.style[e]||0),l=Math.floor(parseFloat(l))||0),r===void 0&&(r=o?ki:Ti);var u=i!==void 0||o,s=i||l;return r===Ti?u?s-hr(n,["border","padding"],a):l:u?r===ki?s:s+(r===Rg?-hr(n,["border"],a):hr(n,["margin"],a)):l+hr(n,Dg.slice(r),a)}var Lg={position:"absolute",visibility:"hidden",display:"block"};function jl(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var r,a=e[0];return a.offsetWidth!==0?r=Bl.apply(void 0,e):Kg(a,Lg,function(){r=Bl.apply(void 0,e)}),r}fo(["width","height"],function(n){var e=n.charAt(0).toUpperCase()+n.slice(1);zn["outer".concat(e)]=function(r,a){return r&&jl(r,n,a?$g:ki)};var t=n==="width"?["Left","Right"]:["Top","Bottom"];zn[n]=function(r,a){var i=a;if(i!==void 0){if(r){var o=jc(r);return o&&(i+=hr(r,["padding","border"],t)),jt(r,n,i)}return}return r&&jl(r,n,Ti)}});function Hc(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}var we={getWindow:function(e){if(e&&e.document&&e.setTimeout)return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},getDocument:Bc,offset:function(e,t,r){if(typeof t<"u")Ng(e,t,r||{});else return Pr(e)},isWindow:co,each:fo,css:jt,clone:function(e){var t,r={};for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);var a=e.overflow;if(a)for(t in e)e.hasOwnProperty(t)&&(r.overflow[t]=e.overflow[t]);return r},mix:Hc,getWindowScrollLeft:function(e){return Lc(e)},getWindowScrollTop:function(e){return Fc(e)},merge:function(){for(var e={},t=0;t<arguments.length;t++)we.mix(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},viewportWidth:0,viewportHeight:0};Hc(we,zn);var Wa=we.getParent;function Ei(n){if(we.isWindow(n)||n.nodeType===9)return null;var e=we.getDocument(n),t=e.body,r,a=we.css(n,"position"),i=a==="fixed"||a==="absolute";if(!i)return n.nodeName.toLowerCase()==="html"?null:Wa(n);for(r=Wa(n);r&&r!==t&&r.nodeType!==9;r=Wa(r))if(a=we.css(r,"position"),a!=="static")return r;return null}var Hl=we.getParent;function Fg(n){if(we.isWindow(n)||n.nodeType===9)return!1;var e=we.getDocument(n),t=e.body,r=null;for(r=Hl(n);r&&r!==t&&r!==e;r=Hl(r)){var a=we.css(r,"position");if(a==="fixed")return!0}return!1}function vo(n,e){for(var t={left:0,right:1/0,top:0,bottom:1/0},r=Ei(n),a=we.getDocument(n),i=a.defaultView||a.parentWindow,o=a.body,l=a.documentElement;r;){if((navigator.userAgent.indexOf("MSIE")===-1||r.clientWidth!==0)&&r!==o&&r!==l&&we.css(r,"overflow")!=="visible"){var u=we.offset(r);u.left+=r.clientLeft,u.top+=r.clientTop,t.top=Math.max(t.top,u.top),t.right=Math.min(t.right,u.left+r.clientWidth),t.bottom=Math.min(t.bottom,u.top+r.clientHeight),t.left=Math.max(t.left,u.left)}else if(r===o||r===l)break;r=Ei(r)}var s=null;if(!we.isWindow(n)&&n.nodeType!==9){s=n.style.position;var c=we.css(n,"position");c==="absolute"&&(n.style.position="fixed")}var f=we.getWindowScrollLeft(i),v=we.getWindowScrollTop(i),d=we.viewportWidth(i),p=we.viewportHeight(i),g=l.scrollWidth,h=l.scrollHeight,y=window.getComputedStyle(o);if(y.overflowX==="hidden"&&(g=i.innerWidth),y.overflowY==="hidden"&&(h=i.innerHeight),n.style&&(n.style.position=s),e||Fg(n))t.left=Math.max(t.left,f),t.top=Math.max(t.top,v),t.right=Math.min(t.right,f+d),t.bottom=Math.min(t.bottom,v+p);else{var b=Math.max(g,f+d);t.right=Math.min(t.right,b);var w=Math.max(h,v+p);t.bottom=Math.min(t.bottom,w)}return t.top>=0&&t.left>=0&&t.bottom>t.top&&t.right>t.left?t:null}function Bg(n,e,t,r){var a=we.clone(n),i={width:e.width,height:e.height};return r.adjustX&&a.left<t.left&&(a.left=t.left),r.resizeWidth&&a.left>=t.left&&a.left+i.width>t.right&&(i.width-=a.left+i.width-t.right),r.adjustX&&a.left+i.width>t.right&&(a.left=Math.max(t.right-i.width,t.left)),r.adjustY&&a.top<t.top&&(a.top=t.top),r.resizeHeight&&a.top>=t.top&&a.top+i.height>t.bottom&&(i.height-=a.top+i.height-t.bottom),r.adjustY&&a.top+i.height>t.bottom&&(a.top=Math.max(t.bottom-i.height,t.top)),we.mix(a,i)}function po(n){var e,t,r;if(!we.isWindow(n)&&n.nodeType!==9)e=we.offset(n),t=we.outerWidth(n),r=we.outerHeight(n);else{var a=we.getWindow(n);e={left:we.getWindowScrollLeft(a),top:we.getWindowScrollTop(a)},t=we.viewportWidth(a),r=we.viewportHeight(a)}return e.width=t,e.height=r,e}function zl(n,e){var t=e.charAt(0),r=e.charAt(1),a=n.width,i=n.height,o=n.left,l=n.top;return t==="c"?l+=i/2:t==="b"&&(l+=i),r==="c"?o+=a/2:r==="r"&&(o+=a),{left:o,top:l}}function zr(n,e,t,r,a){var i=zl(e,t[1]),o=zl(n,t[0]),l=[o.left-i.left,o.top-i.top];return{left:Math.round(n.left-l[0]+r[0]-a[0]),top:Math.round(n.top-l[1]+r[1]-a[1])}}function Vl(n,e,t){return n.left<t.left||n.left+e.width>t.right}function Gl(n,e,t){return n.top<t.top||n.top+e.height>t.bottom}function jg(n,e,t){return n.left>t.right||n.left+e.width<t.left}function Hg(n,e,t){return n.top>t.bottom||n.top+e.height<t.top}function Vr(n,e,t){var r=[];return we.each(n,function(a){r.push(a.replace(e,function(i){return t[i]}))}),r}function Gr(n,e){return n[e]=-n[e],n}function Ul(n,e){var t;return/%$/.test(n)?t=parseInt(n.substring(0,n.length-1),10)/100*e:t=parseInt(n,10),t||0}function Wl(n,e){n[0]=Ul(n[0],e.width),n[1]=Ul(n[1],e.height)}function zc(n,e,t,r){var a=t.points,i=t.offset||[0,0],o=t.targetOffset||[0,0],l=t.overflow,u=t.source||n;i=[].concat(i),o=[].concat(o),l=l||{};var s={},c=0,f=!!(l&&l.alwaysByViewport),v=vo(u,f),d=po(u);Wl(i,d),Wl(o,e);var p=zr(d,e,a,i,o),g=we.merge(d,p);if(v&&(l.adjustX||l.adjustY)&&r){if(l.adjustX&&Vl(p,d,v)){var h=Vr(a,/[lr]/gi,{l:"r",r:"l"}),y=Gr(i,0),b=Gr(o,0),w=zr(d,e,h,y,b);jg(w,d,v)||(c=1,a=h,i=y,o=b)}if(l.adjustY&&Gl(p,d,v)){var O=Vr(a,/[tb]/gi,{t:"b",b:"t"}),P=Gr(i,1),C=Gr(o,1),T=zr(d,e,O,P,C);Hg(T,d,v)||(c=1,a=O,i=P,o=C)}c&&(p=zr(d,e,a,i,o),we.mix(g,p));var M=Vl(p,d,v),A=Gl(p,d,v);if(M||A){var H=a;M&&(H=Vr(a,/[lr]/gi,{l:"r",r:"l"})),A&&(H=Vr(a,/[tb]/gi,{t:"b",b:"t"})),a=H,i=t.offset||[0,0],o=t.targetOffset||[0,0]}s.adjustX=l.adjustX&&M,s.adjustY=l.adjustY&&A,(s.adjustX||s.adjustY)&&(g=Bg(p,d,v,s))}return g.width!==d.width&&we.css(u,"width",we.width(u)+g.width-d.width),g.height!==d.height&&we.css(u,"height",we.height(u)+g.height-d.height),we.offset(u,{left:g.left,top:g.top},{useCssRight:t.useCssRight,useCssBottom:t.useCssBottom,useCssTransform:t.useCssTransform,ignoreShake:t.ignoreShake}),{points:a,offset:i,targetOffset:o,overflow:s}}function zg(n,e){var t=vo(n,e),r=po(n);return!t||r.left+r.width<=t.left||r.top+r.height<=t.top||r.left>=t.right||r.top>=t.bottom}function ho(n,e,t){var r=t.target||e,a=po(r),i=!zg(r,t.overflow&&t.overflow.alwaysByViewport);return zc(n,a,t,i)}ho.__getOffsetParent=Ei;ho.__getVisibleRectForElement=vo;function Vg(n,e,t){var r,a,i=we.getDocument(n),o=i.defaultView||i.parentWindow,l=we.getWindowScrollLeft(o),u=we.getWindowScrollTop(o),s=we.viewportWidth(o),c=we.viewportHeight(o);"pageX"in e?r=e.pageX:r=l+e.clientX,"pageY"in e?a=e.pageY:a=u+e.clientY;var f={left:r,top:a,width:0,height:0},v=r>=0&&r<=l+s&&a>=0&&a<=u+c,d=[t.points[0],"cc"];return zc(n,f,Rl(Rl({},t),{},{points:d}),v)}function Yn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,a=n;if(Array.isArray(n)&&(a=Wn(n)[0]),!a)return null;var i=zi(a,e,r);return i.props=t?x(x({},i.props),e):i.props,Yi(Ie(i.props.class)!=="object","class must be string"),i}const Gg=function(n){if(!n)return!1;if(n.offsetParent)return!0;if(n.getBBox){var e=n.getBBox();if(e.width||e.height)return!0}if(n.getBoundingClientRect){var t=n.getBoundingClientRect();if(t.width||t.height)return!0}return!1};function Ug(n,e){return n===e?!0:!n||!e?!1:"pageX"in e&&"pageY"in e?n.pageX===e.pageX&&n.pageY===e.pageY:"clientX"in e&&"clientY"in e?n.clientX===e.clientX&&n.clientY===e.clientY:!1}function Wg(n,e){n!==document.activeElement&&Lt(e,n)&&typeof n.focus=="function"&&n.focus()}function ql(n,e){var t=null,r=null;function a(o){var l=_e(o,1),u=l[0].target;if(document.documentElement.contains(u)){var s=u.getBoundingClientRect(),c=s.width,f=s.height,v=Math.floor(c),d=Math.floor(f);(t!==v||r!==d)&&Promise.resolve().then(function(){e({width:v,height:d})}),t=v,r=d}}var i=new Is(a);return n&&i.observe(n),function(){i.disconnect()}}const qg=function(n,e){var t=!1,r=null;function a(){clearTimeout(r)}function i(o){if(!t||o===!0){if(n()===!1)return;t=!0,a(),r=setTimeout(function(){t=!1},e.value)}else a(),r=setTimeout(function(){t=!1,i()},e.value)}return[i,function(){t=!1,a()}]};function Yg(){this.__data__=[],this.size=0}function go(n,e){return n===e||n!==n&&e!==e}function Ta(n,e){for(var t=n.length;t--;)if(go(n[t][0],e))return t;return-1}var Xg=Array.prototype,Qg=Xg.splice;function Zg(n){var e=this.__data__,t=Ta(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():Qg.call(e,t,1),--this.size,!0}function Jg(n){var e=this.__data__,t=Ta(e,n);return t<0?void 0:e[t][1]}function em(n){return Ta(this.__data__,n)>-1}function nm(n,e){var t=this.__data__,r=Ta(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}function tt(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}tt.prototype.clear=Yg;tt.prototype.delete=Zg;tt.prototype.get=Jg;tt.prototype.has=em;tt.prototype.set=nm;function tm(){this.__data__=new tt,this.size=0}function rm(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function am(n){return this.__data__.get(n)}function im(n){return this.__data__.has(n)}function Ot(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var om="[object AsyncFunction]",lm="[object Function]",um="[object GeneratorFunction]",sm="[object Proxy]";function Vc(n){if(!Ot(n))return!1;var e=kt(n);return e==lm||e==um||e==om||e==sm}var cm=Xn["__core-js_shared__"];const qa=cm;var Yl=function(){var n=/[^.]+$/.exec(qa&&qa.keys&&qa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function fm(n){return!!Yl&&Yl in n}var dm=Function.prototype,vm=dm.toString;function _t(n){if(n!=null){try{return vm.call(n)}catch{}try{return n+""}catch{}}return""}var pm=/[\\^$.*+?()[\]{}|]/g,hm=/^\[object .+?Constructor\]$/,gm=Function.prototype,mm=Object.prototype,ym=gm.toString,bm=mm.hasOwnProperty,xm=RegExp("^"+ym.call(bm).replace(pm,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wm(n){if(!Ot(n)||fm(n))return!1;var e=Vc(n)?xm:hm;return e.test(_t(n))}function Cm(n,e){return n==null?void 0:n[e]}function Mt(n,e){var t=Cm(n,e);return wm(t)?t:void 0}var Sm=Mt(Xn,"Map");const Or=Sm;var Pm=Mt(Object,"create");const Ar=Pm;function Om(){this.__data__=Ar?Ar(null):{},this.size=0}function Am(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var Tm="__lodash_hash_undefined__",km=Object.prototype,Em=km.hasOwnProperty;function _m(n){var e=this.__data__;if(Ar){var t=e[n];return t===Tm?void 0:t}return Em.call(e,n)?e[n]:void 0}var Mm=Object.prototype,Im=Mm.hasOwnProperty;function Nm(n){var e=this.__data__;return Ar?e[n]!==void 0:Im.call(e,n)}var Dm="__lodash_hash_undefined__";function Rm(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Ar&&e===void 0?Dm:e,this}function At(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}At.prototype.clear=Om;At.prototype.delete=Am;At.prototype.get=_m;At.prototype.has=Nm;At.prototype.set=Rm;function $m(){this.size=0,this.__data__={hash:new At,map:new(Or||tt),string:new At}}function Km(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function ka(n,e){var t=n.__data__;return Km(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Lm(n){var e=ka(this,n).delete(n);return this.size-=e?1:0,e}function Fm(n){return ka(this,n).get(n)}function Bm(n){return ka(this,n).has(n)}function jm(n,e){var t=ka(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}function rt(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}rt.prototype.clear=$m;rt.prototype.delete=Lm;rt.prototype.get=Fm;rt.prototype.has=Bm;rt.prototype.set=jm;var Hm=200;function zm(n,e){var t=this.__data__;if(t instanceof tt){var r=t.__data__;if(!Or||r.length<Hm-1)return r.push([n,e]),this.size=++t.size,this;t=this.__data__=new rt(r)}return t.set(n,e),this.size=t.size,this}function st(n){var e=this.__data__=new tt(n);this.size=e.size}st.prototype.clear=tm;st.prototype.delete=rm;st.prototype.get=am;st.prototype.has=im;st.prototype.set=zm;var Vm="__lodash_hash_undefined__";function Gm(n){return this.__data__.set(n,Vm),this}function Um(n){return this.__data__.has(n)}function Tr(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new rt;++e<t;)this.add(n[e])}Tr.prototype.add=Tr.prototype.push=Gm;Tr.prototype.has=Um;function Wm(n,e){for(var t=-1,r=n==null?0:n.length;++t<r;)if(e(n[t],t,n))return!0;return!1}function Gc(n,e){return n.has(e)}var qm=1,Ym=2;function Uc(n,e,t,r,a,i){var o=t&qm,l=n.length,u=e.length;if(l!=u&&!(o&&u>l))return!1;var s=i.get(n),c=i.get(e);if(s&&c)return s==e&&c==n;var f=-1,v=!0,d=t&Ym?new Tr:void 0;for(i.set(n,e),i.set(e,n);++f<l;){var p=n[f],g=e[f];if(r)var h=o?r(g,p,f,e,n,i):r(p,g,f,n,e,i);if(h!==void 0){if(h)continue;v=!1;break}if(d){if(!Wm(e,function(y,b){if(!Gc(d,b)&&(p===y||a(p,y,t,r,i)))return d.push(b)})){v=!1;break}}else if(!(p===g||a(p,g,t,r,i))){v=!1;break}}return i.delete(n),i.delete(e),v}var Xm=Xn.Uint8Array;const Xl=Xm;function Qm(n){var e=-1,t=Array(n.size);return n.forEach(function(r,a){t[++e]=[a,r]}),t}function mo(n){var e=-1,t=Array(n.size);return n.forEach(function(r){t[++e]=r}),t}var Zm=1,Jm=2,e0="[object Boolean]",n0="[object Date]",t0="[object Error]",r0="[object Map]",a0="[object Number]",i0="[object RegExp]",o0="[object Set]",l0="[object String]",u0="[object Symbol]",s0="[object ArrayBuffer]",c0="[object DataView]",Ql=Un?Un.prototype:void 0,Ya=Ql?Ql.valueOf:void 0;function f0(n,e,t,r,a,i,o){switch(t){case c0:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case s0:return!(n.byteLength!=e.byteLength||!i(new Xl(n),new Xl(e)));case e0:case n0:case a0:return go(+n,+e);case t0:return n.name==e.name&&n.message==e.message;case i0:case l0:return n==e+"";case r0:var l=Qm;case o0:var u=r&Zm;if(l||(l=mo),n.size!=e.size&&!u)return!1;var s=o.get(n);if(s)return s==e;r|=Jm,o.set(n,e);var c=Uc(l(n),l(e),r,a,i,o);return o.delete(n),c;case u0:if(Ya)return Ya.call(n)==Ya.call(e)}return!1}function Wc(n,e){for(var t=-1,r=e.length,a=n.length;++t<r;)n[a+t]=e[t];return n}var d0=Array.isArray;const et=d0;function v0(n,e,t){var r=e(n);return et(n)?r:Wc(r,t(n))}function p0(n,e){for(var t=-1,r=n==null?0:n.length,a=0,i=[];++t<r;){var o=n[t];e(o,t,n)&&(i[a++]=o)}return i}function h0(){return[]}var g0=Object.prototype,m0=g0.propertyIsEnumerable,Zl=Object.getOwnPropertySymbols,y0=Zl?function(n){return n==null?[]:(n=Object(n),p0(Zl(n),function(e){return m0.call(n,e)}))}:h0;const b0=y0;function x0(n,e){for(var t=-1,r=Array(n);++t<n;)r[t]=e(t);return r}var w0="[object Arguments]";function Jl(n){return St(n)&&kt(n)==w0}var qc=Object.prototype,C0=qc.hasOwnProperty,S0=qc.propertyIsEnumerable,P0=Jl(function(){return arguments}())?Jl:function(n){return St(n)&&C0.call(n,"callee")&&!S0.call(n,"callee")};const yo=P0;function O0(){return!1}var Yc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,eu=Yc&&typeof module=="object"&&module&&!module.nodeType&&module,A0=eu&&eu.exports===Yc,nu=A0?Xn.Buffer:void 0,T0=nu?nu.isBuffer:void 0,k0=T0||O0;const _i=k0;var E0=9007199254740991,_0=/^(?:0|[1-9]\d*)$/;function bo(n,e){var t=typeof n;return e=e??E0,!!e&&(t=="number"||t!="symbol"&&_0.test(n))&&n>-1&&n%1==0&&n<e}var M0=9007199254740991;function xo(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=M0}var I0="[object Arguments]",N0="[object Array]",D0="[object Boolean]",R0="[object Date]",$0="[object Error]",K0="[object Function]",L0="[object Map]",F0="[object Number]",B0="[object Object]",j0="[object RegExp]",H0="[object Set]",z0="[object String]",V0="[object WeakMap]",G0="[object ArrayBuffer]",U0="[object DataView]",W0="[object Float32Array]",q0="[object Float64Array]",Y0="[object Int8Array]",X0="[object Int16Array]",Q0="[object Int32Array]",Z0="[object Uint8Array]",J0="[object Uint8ClampedArray]",e1="[object Uint16Array]",n1="[object Uint32Array]",ze={};ze[W0]=ze[q0]=ze[Y0]=ze[X0]=ze[Q0]=ze[Z0]=ze[J0]=ze[e1]=ze[n1]=!0;ze[I0]=ze[N0]=ze[G0]=ze[D0]=ze[U0]=ze[R0]=ze[$0]=ze[K0]=ze[L0]=ze[F0]=ze[B0]=ze[j0]=ze[H0]=ze[z0]=ze[V0]=!1;function t1(n){return St(n)&&xo(n.length)&&!!ze[kt(n)]}function r1(n){return function(e){return n(e)}}var Xc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yr=Xc&&typeof module=="object"&&module&&!module.nodeType&&module,a1=yr&&yr.exports===Xc,Xa=a1&&Ns.process,i1=function(){try{var n=yr&&yr.require&&yr.require("util").types;return n||Xa&&Xa.binding&&Xa.binding("util")}catch{}}();const tu=i1;var ru=tu&&tu.isTypedArray,o1=ru?r1(ru):t1;const Qc=o1;var l1=Object.prototype,u1=l1.hasOwnProperty;function s1(n,e){var t=et(n),r=!t&&yo(n),a=!t&&!r&&_i(n),i=!t&&!r&&!a&&Qc(n),o=t||r||a||i,l=o?x0(n.length,String):[],u=l.length;for(var s in n)(e||u1.call(n,s))&&!(o&&(s=="length"||a&&(s=="offset"||s=="parent")||i&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||bo(s,u)))&&l.push(s);return l}var c1=Object.prototype;function f1(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||c1;return n===t}var d1=Rs(Object.keys,Object);const v1=d1;var p1=Object.prototype,h1=p1.hasOwnProperty;function g1(n){if(!f1(n))return v1(n);var e=[];for(var t in Object(n))h1.call(n,t)&&t!="constructor"&&e.push(t);return e}function m1(n){return n!=null&&xo(n.length)&&!Vc(n)}function y1(n){return m1(n)?s1(n):g1(n)}function au(n){return v0(n,y1,b0)}var b1=1,x1=Object.prototype,w1=x1.hasOwnProperty;function C1(n,e,t,r,a,i){var o=t&b1,l=au(n),u=l.length,s=au(e),c=s.length;if(u!=c&&!o)return!1;for(var f=u;f--;){var v=l[f];if(!(o?v in e:w1.call(e,v)))return!1}var d=i.get(n),p=i.get(e);if(d&&p)return d==e&&p==n;var g=!0;i.set(n,e),i.set(e,n);for(var h=o;++f<u;){v=l[f];var y=n[v],b=e[v];if(r)var w=o?r(b,y,v,e,n,i):r(y,b,v,n,e,i);if(!(w===void 0?y===b||a(y,b,t,r,i):w)){g=!1;break}h||(h=v=="constructor")}if(g&&!h){var O=n.constructor,P=e.constructor;O!=P&&"constructor"in n&&"constructor"in e&&!(typeof O=="function"&&O instanceof O&&typeof P=="function"&&P instanceof P)&&(g=!1)}return i.delete(n),i.delete(e),g}var S1=Mt(Xn,"DataView");const Mi=S1;var P1=Mt(Xn,"Promise");const Ii=P1;var O1=Mt(Xn,"Set");const Ht=O1;var A1=Mt(Xn,"WeakMap");const Ni=A1;var iu="[object Map]",T1="[object Object]",ou="[object Promise]",lu="[object Set]",uu="[object WeakMap]",su="[object DataView]",k1=_t(Mi),E1=_t(Or),_1=_t(Ii),M1=_t(Ht),I1=_t(Ni),mt=kt;(Mi&&mt(new Mi(new ArrayBuffer(1)))!=su||Or&&mt(new Or)!=iu||Ii&&mt(Ii.resolve())!=ou||Ht&&mt(new Ht)!=lu||Ni&&mt(new Ni)!=uu)&&(mt=function(n){var e=kt(n),t=e==T1?n.constructor:void 0,r=t?_t(t):"";if(r)switch(r){case k1:return su;case E1:return iu;case _1:return ou;case M1:return lu;case I1:return uu}return e});const cu=mt;var N1=1,fu="[object Arguments]",du="[object Array]",Ur="[object Object]",D1=Object.prototype,vu=D1.hasOwnProperty;function R1(n,e,t,r,a,i){var o=et(n),l=et(e),u=o?du:cu(n),s=l?du:cu(e);u=u==fu?Ur:u,s=s==fu?Ur:s;var c=u==Ur,f=s==Ur,v=u==s;if(v&&_i(n)){if(!_i(e))return!1;o=!0,c=!1}if(v&&!c)return i||(i=new st),o||Qc(n)?Uc(n,e,t,r,a,i):f0(n,e,u,t,r,a,i);if(!(t&N1)){var d=c&&vu.call(n,"__wrapped__"),p=f&&vu.call(e,"__wrapped__");if(d||p){var g=d?n.value():n,h=p?e.value():e;return i||(i=new st),a(g,h,t,r,i)}}return v?(i||(i=new st),C1(n,e,t,r,a,i)):!1}function Zc(n,e,t,r,a){return n===e?!0:n==null||e==null||!St(n)&&!St(e)?n!==n&&e!==e:R1(n,e,t,r,Zc,a)}function $1(n,e){return Zc(n,e)}var K1={align:Object,target:[Object,Function],onAlign:Function,monitorBufferTime:Number,monitorWindowResize:Boolean,disabled:Boolean};function pu(n){return typeof n!="function"?null:n()}function hu(n){return Ie(n)!=="object"||!n?null:n}const L1=ce({compatConfig:{MODE:3},name:"Align",props:K1,emits:["align"],setup:function(e,t){var r=t.expose,a=t.slots,i=D({}),o=D(),l=qg(function(){var g=e.disabled,h=e.target,y=e.align,b=e.onAlign;if(!g&&h&&o.value){var w=o.value,O,P=pu(h),C=hu(h);i.value.element=P,i.value.point=C,i.value.align=y;var T=document,M=T.activeElement;return P&&Gg(P)?O=ho(w,P,y):C&&(O=Vg(w,C,y)),Wg(M,w),b&&O&&b(w,O),!0}return!1},k(function(){return e.monitorBufferTime})),u=_e(l,2),s=u[0],c=u[1],f=D({cancel:function(){}}),v=D({cancel:function(){}}),d=function(){var h=e.target,y=pu(h),b=hu(h);o.value!==v.value.element&&(v.value.cancel(),v.value.element=o.value,v.value.cancel=ql(o.value,s)),(i.value.element!==y||!Ug(i.value.point,b)||!$1(i.value.align,e.align))&&(s(),f.value.element!==y&&(f.value.cancel(),f.value.element=y,f.value.cancel=ql(y,s)))};nn(function(){dn(function(){d()})}),Xt(function(){dn(function(){d()})}),ue(function(){return e.disabled},function(g){g?c():s()},{immediate:!0,flush:"post"});var p=D(null);return ue(function(){return e.monitorWindowResize},function(g){g?p.value||(p.value=pr(window,"resize",s)):p.value&&(p.value.remove(),p.value=null)},{flush:"post"}),kr(function(){f.value.cancel(),v.value.cancel(),p.value&&p.value.remove(),c()}),r({forceAlign:function(){return s(!0)}}),function(){var g=a==null?void 0:a.default();return g?Yn(g[0],{ref:o},!0,!0):null}}}),F1=ce({compatConfig:{MODE:3},name:"PopupInner",inheritAttrs:!1,props:so,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup:function(e,t){var r=t.expose,a=t.attrs,i=t.slots,o=D(),l=D(),u=D(),s=mg(Jr(e,"stretch")),c=_e(s,2),f=c[0],v=c[1],d=function(){e.stretch&&v(e.getRootDomNode())},p=D(!1),g;ue(function(){return e.visible},function(_){clearTimeout(g),_?g=setTimeout(function(){p.value=e.visible}):p.value=!1},{immediate:!0});var h=gg(p,d),y=_e(h,2),b=y[0],w=y[1],O=D(),P=function(){return e.point?e.point:e.getRootDomNode},C=function(){var L;(L=o.value)===null||L===void 0||L.forceAlign()},T=function(L,R){var K=e.getClassNameFromAlign(R),I=u.value;if(u.value!==K&&(u.value=K),b.value==="align"){var S;I!==K?Promise.resolve().then(function(){C()}):w(function(){var E;(E=O.value)===null||E===void 0||E.call(O)}),(S=e.onAlign)===null||S===void 0||S.call(e,L,R)}},M=k(function(){var _=Ie(e.animation)==="object"?e.animation:Dc(e);return["onAfterEnter","onAfterLeave"].forEach(function(L){var R=_[L];_[L]=function(K){w(),b.value="stable",R==null||R(K)}}),_}),A=function(){return new Promise(function(L){O.value=L})};ue([M,b],function(){!M.value&&b.value==="motion"&&w()},{immediate:!0}),r({forceAlign:C,getElement:function(){return l.value.$el||l.value}});var H=k(function(){var _;return!((_=e.align)!==null&&_!==void 0&&_.points&&(b.value==="align"||b.value==="stable"))});return function(){var _,L=e.zIndex,R=e.align,K=e.prefixCls,I=e.destroyPopupOnHide,S=e.onMouseenter,E=e.onMouseleave,N=e.onTouchstart,$=N===void 0?function(){}:N,U=e.onMousedown,Z=b.value,J=[x(x({},f.value),{},{zIndex:L,opacity:Z==="motion"||Z==="stable"||!p.value?null:0,pointerEvents:!p.value&&Z!=="stable"?"none":null}),a.style],F=Kn((_=i.default)===null||_===void 0?void 0:_.call(i,{visible:e.visible}));F.length>1&&(F=m("div",{class:"".concat(K,"-content")},[F]));var V=Pe(K,a.class,u.value),Y=p.value||!e.visible,j=Y?ic(M.value.name,M.value):{};return m(Qt,x(x({ref:l},j),{},{onBeforeEnter:A}),{default:function(){return!I||e.visible?xt(m(L1,{target:P(),key:"popup",ref:o,monitorWindowResize:!0,disabled:H.value,align:R,onAlign:T},{default:function(){return m("div",x(x({class:V,onMouseenter:S,onMouseleave:E,onMousedown:li(U,["capture"])},B({},wn?"onTouchstartPassive":"onTouchstart",li($,["capture"]))),{},{style:J}),[F])}}),[[Ft,p.value]]):null}})}}}),B1=ce({compatConfig:{MODE:3},name:"Popup",inheritAttrs:!1,props:pg,setup:function(e,t){var r=t.attrs,a=t.slots,i=t.expose,o=D(!1),l=D(!1),u=D();return ue([function(){return e.visible},function(){return e.mobile}],function(){o.value=e.visible,e.visible&&e.mobile&&(l.value=!0)},{immediate:!0,flush:"post"}),i({forceAlign:function(){var c;(c=u.value)===null||c===void 0||c.forceAlign()},getElement:function(){var c;return(c=u.value)===null||c===void 0?void 0:c.getElement()}}),function(){var s=x(x(x({},e),r),{},{visible:o.value}),c=l.value?m(hg,x(x({},s),{},{mobile:e.mobile,ref:u}),{default:a.default}):m(F1,x(x({},s),{},{ref:u}),{default:a.default});return m("div",null,[m(Rc,s,null),c])}}});function j1(n,e,t){return t?n[0]===e[0]:n[0]===e[0]&&n[1]===e[1]}function gu(n,e,t){var r=n[e]||{};return x(x({},r),t)}function H1(n,e,t,r){for(var a=t.points,i=Object.keys(n),o=0;o<i.length;o+=1){var l=i[o];if(j1(n[l].points,a,r))return"".concat(e,"-placement-").concat(l)}return""}const z1={methods:{setState:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=typeof e=="function"?e(this.$data,this.$props):e;if(this.getDerivedStateFromProps){var a=this.getDerivedStateFromProps(mv(this),x(x({},this.$data),r));if(a===null)return;r=x(x({},r),a||{})}Ye(this.$data,r),this._.isMounted&&this.$forceUpdate(),dn(function(){t&&t()})},__emit:function(){var e=[].slice.call(arguments,0),t=e[0];t="on".concat(t[0].toUpperCase()).concat(t.substring(1));var r=this.$props[t]||this.$attrs[t];if(e.length&&r)if(Array.isArray(r))for(var a=0,i=r.length;a<i;a++)r[a].apply(r,Ge(e.slice(1)));else r.apply(void 0,Ge(e.slice(1)))}}};var V1=Symbol("TriggerContextKey"),G1=function(e){return e?pn(V1,{setPortal:function(){},popPortal:!1}):{setPortal:function(){},popPortal:!1}},Jc=Symbol("PortalContextKey"),ef=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inTriggerContext:!0};yn(Jc,{inTriggerContext:t.inTriggerContext,shouldRender:k(function(){var r=e||{},a=r.sPopupVisible,i=r.popupRef,o=r.forceRender,l=r.autoDestroy,u=!1;return(a||i||o)&&(u=!0),!a&&l&&(u=!1),u})})},U1=function(){ef({},{inTriggerContext:!1});var e=pn(Jc,{shouldRender:k(function(){return!1}),inTriggerContext:!1});return{shouldRender:k(function(){return e.shouldRender.value||e.inTriggerContext===!1})}};const mu=ce({compatConfig:{MODE:3},name:"Portal",inheritAttrs:!1,props:{getContainer:X.func.isRequired,didUpdate:Function},setup:function(e,t){var r=t.slots,a=!0,i,o=U1(),l=o.shouldRender;ed(function(){a=!1,l.value&&(i=e.getContainer())});var u=ue(l,function(){l.value&&!i&&(i=e.getContainer()),i&&u()});return Xt(function(){dn(function(){if(l.value){var s;(s=e.didUpdate)===null||s===void 0||s.call(e,e)}})}),Tn(function(){i&&i.parentNode&&i.parentNode.removeChild(i)}),function(){if(!l.value)return null;if(a){var s;return(s=r.default)===null||s===void 0?void 0:s.call(r)}return i?m(Ca,{to:i},r):null}}});function yu(){}function W1(){return""}function q1(n){return n?n.ownerDocument:window.document}var Y1=["onClick","onMousedown","onTouchstart","onMouseenter","onMouseleave","onFocus","onBlur","onContextmenu"];const wo=ce({compatConfig:{MODE:3},name:"Trigger",mixins:[z1],inheritAttrs:!1,props:{action:X.oneOfType([X.string,X.arrayOf(X.string)]).def([]),showAction:X.any.def([]),hideAction:X.any.def([]),getPopupClassNameFromAlign:X.any.def(W1),onPopupVisibleChange:Function,afterPopupVisibleChange:X.func.def(yu),popup:X.any,popupStyle:{type:Object,default:void 0},prefixCls:X.string.def("rc-trigger-popup"),popupClassName:X.string.def(""),popupPlacement:String,builtinPlacements:X.object,popupTransitionName:String,popupAnimation:X.any,mouseEnterDelay:X.number.def(0),mouseLeaveDelay:X.number.def(.1),zIndex:Number,focusDelay:X.number.def(0),blurDelay:X.number.def(.15),getPopupContainer:Function,getDocument:X.func.def(q1),forceRender:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},popupAlign:X.object.def(function(){return{}}),popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},maskTransitionName:String,maskAnimation:String,stretch:String,alignPoint:{type:Boolean,default:void 0},autoDestroy:{type:Boolean,default:!1},mobile:Object,getTriggerDOMNode:Function,tryPopPortal:Boolean},setup:function(e){var t=k(function(){var u=e.popupPlacement,s=e.popupAlign,c=e.builtinPlacements;return u&&c?gu(c,u,s):s}),r=G1(e.tryPopPortal),a=r.setPortal,i=r.popPortal,o=D(null),l=function(s){o.value=s};return{popPortal:i,setPortal:a,vcTriggerContext:pn("vcTriggerContext",{}),popupRef:o,setPopupRef:l,triggerRef:D(null),align:t,focusTime:null,clickOutsideHandler:null,contextmenuOutsideHandler1:null,contextmenuOutsideHandler2:null,touchOutsideHandler:null,attachId:null,delayTimer:null,hasPopupMouseDown:!1,preClickTime:null,preTouchTime:null,mouseDownTimeout:null,childOriginEvents:{}}},data:function(){var e=this,t,r=this.$props,a;return this.popupVisible!==void 0?a=!!r.popupVisible:a=!!r.defaultPopupVisible,Y1.forEach(function(i){e["fire".concat(i)]=function(o){e.fireEvents(i,o)}}),(t=this.setPortal)===null||t===void 0||t.call(this,m(mu,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},{default:this.getComponent})),{prevPopupVisible:a,sPopupVisible:a,point:null}},watch:{popupVisible:function(e){e!==void 0&&(this.prevPopupVisible=this.sPopupVisible,this.sPopupVisible=e)}},created:function(){yn("vcTriggerContext",{onPopupMouseDown:this.onPopupMouseDown}),ef(this)},deactivated:function(){this.setPopupVisible(!1)},mounted:function(){var e=this;this.$nextTick(function(){e.updatedCal()})},updated:function(){var e=this;this.$nextTick(function(){e.updatedCal()})},beforeUnmount:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),Ue.cancel(this.attachId)},methods:{updatedCal:function(){var e=this.$props,t=this.$data;if(t.sPopupVisible){var r;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextmenuToShow())&&(r=e.getDocument(this.getRootDomNode()),this.clickOutsideHandler=pr(r,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(r=r||e.getDocument(this.getRootDomNode()),this.touchOutsideHandler=pr(r,"touchstart",this.onDocumentClick,wn?{passive:!1}:!1)),!this.contextmenuOutsideHandler1&&this.isContextmenuToShow()&&(r=r||e.getDocument(this.getRootDomNode()),this.contextmenuOutsideHandler1=pr(r,"scroll",this.onContextmenuClose)),!this.contextmenuOutsideHandler2&&this.isContextmenuToShow()&&(this.contextmenuOutsideHandler2=pr(window,"blur",this.onContextmenuClose))}else this.clearOutsideHandler()},onMouseenter:function(e){var t=this.$props.mouseEnterDelay;this.fireEvents("onMouseenter",e),this.delaySetPopupVisible(!0,t,t?null:e)},onMouseMove:function(e){this.fireEvents("onMousemove",e),this.setPoint(e)},onMouseleave:function(e){this.fireEvents("onMouseleave",e),this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onPopupMouseenter:function(){this.clearDelayTimer()},onPopupMouseleave:function(e){var t;e&&e.relatedTarget&&!e.relatedTarget.setTimeout&&Lt((t=this.popupRef)===null||t===void 0?void 0:t.getElement(),e.relatedTarget)||this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onFocus:function(e){this.fireEvents("onFocus",e),this.clearDelayTimer(),this.isFocusToShow()&&(this.focusTime=Date.now(),this.delaySetPopupVisible(!0,this.$props.focusDelay))},onMousedown:function(e){this.fireEvents("onMousedown",e),this.preClickTime=Date.now()},onTouchstart:function(e){this.fireEvents("onTouchstart",e),this.preTouchTime=Date.now()},onBlur:function(e){Lt(e.target,e.relatedTarget||document.activeElement)||(this.fireEvents("onBlur",e),this.clearDelayTimer(),this.isBlurToHide()&&this.delaySetPopupVisible(!1,this.$props.blurDelay))},onContextmenu:function(e){e.preventDefault(),this.fireEvents("onContextmenu",e),this.setPopupVisible(!0,e)},onContextmenuClose:function(){this.isContextmenuToShow()&&this.close()},onClick:function(e){if(this.fireEvents("onClick",e),this.focusTime){var t;if(this.preClickTime&&this.preTouchTime?t=Math.min(this.preClickTime,this.preTouchTime):this.preClickTime?t=this.preClickTime:this.preTouchTime&&(t=this.preTouchTime),Math.abs(t-this.focusTime)<20)return;this.focusTime=0}this.preClickTime=0,this.preTouchTime=0,this.isClickToShow()&&(this.isClickToHide()||this.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault(),e&&e.domEvent&&e.domEvent.preventDefault();var r=!this.$data.sPopupVisible;(this.isClickToHide()&&!r||r&&this.isClickToShow())&&this.setPopupVisible(!this.$data.sPopupVisible,e)},onPopupMouseDown:function(){var e=this,t=this.vcTriggerContext,r=t===void 0?{}:t;this.hasPopupMouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout(function(){e.hasPopupMouseDown=!1},0),r.onPopupMouseDown&&r.onPopupMouseDown.apply(r,arguments)},onDocumentClick:function(e){if(!(this.$props.mask&&!this.$props.maskClosable)){var t=e.target,r=this.getRootDomNode(),a=this.getPopupDomNode();(!Lt(r,t)||this.isContextMenuOnly())&&!Lt(a,t)&&!this.hasPopupMouseDown&&this.delaySetPopupVisible(!1,.1)}},getPopupDomNode:function(){var e;return((e=this.popupRef)===null||e===void 0?void 0:e.getElement())||null},getRootDomNode:function(){var e=this.$props.getTriggerDOMNode;if(e){var t=vr(this.triggerRef);return vr(e(t))}try{var r=vr(this.triggerRef);if(r)return r}catch{}return vr(this)},handleGetPopupClassFromAlign:function(e){var t=[],r=this.$props,a=r.popupPlacement,i=r.builtinPlacements,o=r.prefixCls,l=r.alignPoint,u=r.getPopupClassNameFromAlign;return a&&i&&t.push(H1(i,o,e,l)),u&&t.push(u(e)),t.join(" ")},getPopupAlign:function(){var e=this.$props,t=e.popupPlacement,r=e.popupAlign,a=e.builtinPlacements;return t&&a?gu(a,t,r):r},getComponent:function(){var e=this,t={};this.isMouseEnterToShow()&&(t.onMouseenter=this.onPopupMouseenter),this.isMouseLeaveToHide()&&(t.onMouseleave=this.onPopupMouseleave),t.onMousedown=this.onPopupMouseDown,t[wn?"onTouchstartPassive":"onTouchstart"]=this.onPopupMouseDown;var r=this.handleGetPopupClassFromAlign,a=this.getRootDomNode,i=this.getContainer,o=this.$attrs,l=this.$props,u=l.prefixCls,s=l.destroyPopupOnHide,c=l.popupClassName,f=l.popupAnimation,v=l.popupTransitionName,d=l.popupStyle,p=l.mask,g=l.maskAnimation,h=l.maskTransitionName,y=l.zIndex,b=l.stretch,w=l.alignPoint,O=l.mobile,P=l.forceRender,C=this.$data,T=C.sPopupVisible,M=C.point,A=x(x({prefixCls:u,destroyPopupOnHide:s,visible:T,point:w?M:null,align:this.align,animation:f,getClassNameFromAlign:r,stretch:b,getRootDomNode:a,mask:p,zIndex:y,transitionName:v,maskAnimation:g,maskTransitionName:h,getContainer:i,class:c,style:d,onAlign:o.onPopupAlign||yu},t),{},{ref:this.setPopupRef,mobile:O,forceRender:P});return m(B1,A,{default:this.$slots.popup||function(){return yv(e,"popup")}})},attachParent:function(e){var t=this;Ue.cancel(this.attachId);var r=this.$props,a=r.getPopupContainer,i=r.getDocument,o=this.getRootDomNode(),l;a?(o||a.length===0)&&(l=a(o)):l=i(this.getRootDomNode()).body,l?l.appendChild(e):this.attachId=Ue(function(){t.attachParent(e)})},getContainer:function(){var e=this.$props,t=e.getDocument,r=t(this.getRootDomNode()).createElement("div");return r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%",this.attachParent(r),r},setPopupVisible:function(e,t){var r=this.alignPoint,a=this.sPopupVisible,i=this.onPopupVisibleChange;this.clearDelayTimer(),a!==e&&(hv(this,"popupVisible")||this.setState({sPopupVisible:e,prevPopupVisible:a}),i&&i(e)),r&&t&&e&&this.setPoint(t)},setPoint:function(e){var t=this.$props.alignPoint;!t||!e||this.setState({point:{pageX:e.pageX,pageY:e.pageY}})},handlePortalUpdate:function(){this.prevPopupVisible!==this.sPopupVisible&&this.afterPopupVisibleChange(this.sPopupVisible)},delaySetPopupVisible:function(e,t,r){var a=this,i=t*1e3;if(this.clearDelayTimer(),i){var o=r?{pageX:r.pageX,pageY:r.pageY}:null;this.delayTimer=dg(function(){a.setPopupVisible(e,o),a.clearDelayTimer()},i)}else this.setPopupVisible(e,r)},clearDelayTimer:function(){this.delayTimer&&(fg(this.delayTimer),this.delayTimer=null)},clearOutsideHandler:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextmenuOutsideHandler1&&(this.contextmenuOutsideHandler1.remove(),this.contextmenuOutsideHandler1=null),this.contextmenuOutsideHandler2&&(this.contextmenuOutsideHandler2.remove(),this.contextmenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},createTwoChains:function(e){var t=function(){},r=qo(this);return this.childOriginEvents[e]&&r[e]?this["fire".concat(e)]:(t=this.childOriginEvents[e]||r[e]||t,t)},isClickToShow:function(){var e=this.$props,t=e.action,r=e.showAction;return t.indexOf("click")!==-1||r.indexOf("click")!==-1},isContextMenuOnly:function(){var e=this.$props.action;return e==="contextmenu"||e.length===1&&e[0]==="contextmenu"},isContextmenuToShow:function(){var e=this.$props,t=e.action,r=e.showAction;return t.indexOf("contextmenu")!==-1||r.indexOf("contextmenu")!==-1},isClickToHide:function(){var e=this.$props,t=e.action,r=e.hideAction;return t.indexOf("click")!==-1||r.indexOf("click")!==-1},isMouseEnterToShow:function(){var e=this.$props,t=e.action,r=e.showAction;return t.indexOf("hover")!==-1||r.indexOf("mouseenter")!==-1},isMouseLeaveToHide:function(){var e=this.$props,t=e.action,r=e.hideAction;return t.indexOf("hover")!==-1||r.indexOf("mouseleave")!==-1},isFocusToShow:function(){var e=this.$props,t=e.action,r=e.showAction;return t.indexOf("focus")!==-1||r.indexOf("focus")!==-1},isBlurToHide:function(){var e=this.$props,t=e.action,r=e.hideAction;return t.indexOf("focus")!==-1||r.indexOf("blur")!==-1},forcePopupAlign:function(){if(this.$data.sPopupVisible){var e;(e=this.popupRef)===null||e===void 0||e.forceAlign()}},fireEvents:function(e,t){this.childOriginEvents[e]&&this.childOriginEvents[e](t);var r=this.$props[e]||this.$attrs[e];r&&r(t)},close:function(){this.setPopupVisible(!1)}},render:function(){var e=this,t=this.$attrs,r=Wn(gv(this)),a=this.$props.alignPoint,i=r[0];this.childOriginEvents=qo(i);var o={key:"trigger"};this.isContextmenuToShow()?o.onContextmenu=this.onContextmenu:o.onContextmenu=this.createTwoChains("onContextmenu"),this.isClickToHide()||this.isClickToShow()?(o.onClick=this.onClick,o.onMousedown=this.onMousedown,o[wn?"onTouchstartPassive":"onTouchstart"]=this.onTouchstart):(o.onClick=this.createTwoChains("onClick"),o.onMousedown=this.createTwoChains("onMousedown"),o[wn?"onTouchstartPassive":"onTouchstart"]=this.createTwoChains("onTouchstart")),this.isMouseEnterToShow()?(o.onMouseenter=this.onMouseenter,a&&(o.onMousemove=this.onMouseMove)):o.onMouseenter=this.createTwoChains("onMouseenter"),this.isMouseLeaveToHide()?o.onMouseleave=this.onMouseleave:o.onMouseleave=this.createTwoChains("onMouseleave"),this.isFocusToShow()||this.isBlurToHide()?(o.onFocus=this.onFocus,o.onBlur=this.onBlur):(o.onFocus=this.createTwoChains("onFocus"),o.onBlur=function(c){c&&(!c.relatedTarget||!Lt(c.target,c.relatedTarget))&&e.createTwoChains("onBlur")(c)});var l=Pe(i&&i.props&&i.props.class,t.class);l&&(o.class=l);var u=Yn(i,x(x({},o),{},{ref:"triggerRef"}),!0,!0);if(this.popPortal)return u;var s=m(mu,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},{default:this.getComponent});return m(Cn,null,[s,u])}});var ge={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=ge.F1&&t<=ge.F12)return!1;switch(t){case ge.ALT:case ge.CAPS_LOCK:case ge.CONTEXT_MENU:case ge.CTRL:case ge.DOWN:case ge.END:case ge.ESC:case ge.HOME:case ge.INSERT:case ge.LEFT:case ge.MAC_FF_META:case ge.META:case ge.NUMLOCK:case ge.NUM_CENTER:case ge.PAGE_DOWN:case ge.PAGE_UP:case ge.PAUSE:case ge.PRINT_SCREEN:case ge.RIGHT:case ge.SHIFT:case ge.UP:case ge.WIN_KEY:case ge.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=ge.ZERO&&e<=ge.NINE||e>=ge.NUM_ZERO&&e<=ge.NUM_MULTIPLY||e>=ge.A&&e<=ge.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&e===0)return!0;switch(e){case ge.SPACE:case ge.QUESTION_MARK:case ge.NUM_PLUS:case ge.NUM_MINUS:case ge.NUM_PERIOD:case ge.NUM_DIVISION:case ge.SEMICOLON:case ge.DASH:case ge.EQUALS:case ge.COMMA:case ge.PERIOD:case ge.SLASH:case ge.APOSTROPHE:case ge.SINGLE_QUOTE:case ge.OPEN_SQUARE_BRACKET:case ge.BACKSLASH:case ge.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const sn=ge;var X1=`accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,Q1=`onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,bu="".concat(X1," ").concat(Q1).split(/[\s\n]+/),Z1="aria-",J1="data-";function xu(n,e){return n.indexOf(e)===0}function nf(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t;e===!1?t={aria:!0,data:!0,attr:!0}:e===!0?t={aria:!0}:t=x({},e);var r={};return Object.keys(n).forEach(function(a){(t.aria&&(a==="role"||xu(a,Z1))||t.data&&xu(a,J1)||t.attr&&(bu.includes(a)||bu.includes(a.toLowerCase())))&&(r[a]=n[a])}),r}var tf=Symbol("OverflowContextProviderKey"),Di=ce({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup:function(e,t){var r=t.slots;return yn(tf,k(function(){return e.value})),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}}),ey=function(){return pn(tf,k(function(){return null}))},ny=["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"],Nt=void 0;const aa=ce({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:X.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:X.any,invalidate:Boolean},setup:function(e,t){var r=t.slots,a=t.expose,i=k(function(){return e.responsive&&!e.display}),o=D();a({itemNodeRef:o});function l(u){e.registerSize(e.itemKey,u)}return kr(function(){l(null)}),function(){var u,s=e.prefixCls,c=e.invalidate,f=e.item,v=e.renderItem,d=e.responsive;e.registerSize,e.itemKey,e.display;var p=e.order,g=e.component,h=g===void 0?"div":g,y=vn(e,ny),b=(u=r.default)===null||u===void 0?void 0:u.call(r),w=v&&f!==Nt?v(f):b,O;c||(O={opacity:i.value?0:1,height:i.value?0:Nt,overflowY:i.value?"hidden":Nt,order:d?p:Nt,pointerEvents:i.value?"none":Nt,position:i.value?"absolute":Nt});var P={};return i.value&&(P["aria-hidden"]=!0),m(xr,{disabled:!d,onResize:function(T){var M=T.offsetWidth;l(M)}},{default:function(){return m(h,x(x(x({class:Pe(!c&&s),style:O},P),y),{},{ref:o}),{default:function(){return[w]}})}})}}});var ty=["component"],ry=["className"],ay=["class"];const iy=ce({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:X.any,title:X.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function}},setup:function(e,t){var r=t.slots,a=t.attrs,i=ey();return function(){if(!i.value){var o,l=e.component,u=l===void 0?"div":l,s=vn(e,ty);return m(u,x(x({},s),a),{default:function(){return[(o=r.default)===null||o===void 0?void 0:o.call(r)]}})}var c=i.value,f=c.className,v=vn(c,ry),d=a.class,p=vn(a,ay);return m(Di,{value:null},{default:function(){return[m(aa,x(x(x({class:Pe(f,d)},v),p),e),r)]}})}}});var oy=["class","style"],rf="responsive",af="invalidate";function ly(n){return"+ ".concat(n.length," ...")}var uy=function(){return{id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:X.any,component:String,itemComponent:X.any,onVisibleChange:Function,ssr:String,onMousedown:Function}},Ea=ce({name:"Overflow",inheritAttrs:!1,props:uy(),emits:["visibleChange"],setup:function(e,t){var r=t.attrs,a=t.emit,i=t.slots,o=k(function(){return e.ssr==="full"}),l=D(null),u=k(function(){return l.value||0}),s=D(new Map),c=D(0),f=D(0),v=D(0),d=D(null),p=D(null),g=k(function(){return p.value===null&&o.value?Number.MAX_SAFE_INTEGER:p.value||0}),h=D(!1),y=k(function(){return"".concat(e.prefixCls,"-item")}),b=k(function(){return Math.max(c.value,f.value)}),w=k(function(){return!!(e.data.length&&e.maxCount===rf)}),O=k(function(){return e.maxCount===af}),P=k(function(){return w.value||typeof e.maxCount=="number"&&e.data.length>e.maxCount}),C=k(function(){var S=e.data;return w.value?l.value===null&&o.value?S=e.data:S=e.data.slice(0,Math.min(e.data.length,u.value/e.itemWidth)):typeof e.maxCount=="number"&&(S=e.data.slice(0,e.maxCount)),S}),T=k(function(){return w.value?e.data.slice(g.value+1):e.data.slice(C.value.length)}),M=function(E,N){var $;return typeof e.itemKey=="function"?e.itemKey(E):($=e.itemKey&&(E==null?void 0:E[e.itemKey]))!==null&&$!==void 0?$:N},A=k(function(){return e.renderItem||function(S){return S}}),H=function(E,N){p.value=E,N||(h.value=E<e.data.length-1,a("visibleChange",E))},_=function(E,N){l.value=N.clientWidth},L=function(E,N){var $=new Map(s.value);N===null?$.delete(E):$.set(E,N),s.value=$},R=function(E,N){c.value=f.value,f.value=N},K=function(E,N){v.value=N},I=function(E){return s.value.get(M(C.value[E],E))};return ue([u,s,f,v,function(){return e.itemKey},C],function(){if(u.value&&b.value&&C.value){var S=v.value,E=C.value.length,N=E-1;if(!E){H(0),d.value=null;return}for(var $=0;$<E;$+=1){var U=I($);if(U===void 0){H($-1,!0);break}if(S+=U,N===0&&S<=u.value||$===N-1&&S+I(N)<=u.value){H(N),d.value=null;break}else if(S+b.value>u.value){H($-1),d.value=S-U-v.value+f.value;break}}e.suffix&&I(0)+v.value>u.value&&(d.value=null)}}),function(){var S=h.value&&!!T.value.length,E=e.itemComponent,N=e.renderRawItem,$=e.renderRawRest,U=e.renderRest,Z=e.prefixCls,J=Z===void 0?"rc-overflow":Z,F=e.suffix,V=e.component,Y=V===void 0?"div":V,j=e.id,ee=e.onMousedown,de=r.class,me=r.style,ye=vn(r,oy),Ee={};d.value!==null&&w.value&&(Ee={position:"absolute",left:"".concat(d.value,"px"),top:0});var ke={prefixCls:y.value,responsive:w.value,component:E,invalidate:O.value},Oe=N?function(Le,xe){var Xe=M(Le,xe);return m(Di,{key:Xe,value:x(x({},ke),{},{order:xe,item:Le,itemKey:Xe,registerSize:L,display:xe<=g.value})},{default:function(){return[N(Le,xe)]}})}:function(Le,xe){var Xe=M(Le,xe);return m(aa,x(x({},ke),{},{order:xe,key:Xe,item:Le,renderItem:A.value,itemKey:Xe,registerSize:L,display:xe<=g.value}),null)},Ne=function(){return null},We={order:S?g.value:Number.MAX_SAFE_INTEGER,className:"".concat(y.value," ").concat(y.value,"-rest"),registerSize:R,display:S};if($)$&&(Ne=function(){return m(Di,{value:x(x({},ke),We)},{default:function(){return[$(T.value)]}})});else{var qe=U||ly;Ne=function(){return m(aa,x(x({},ke),We),{default:function(){return typeof qe=="function"?qe(T.value):qe}})}}var Je=function(){var xe;return m(Y,x({id:j,class:Pe(!O.value&&J,de),style:me,onMousedown:ee},ye),{default:function(){return[C.value.map(Oe),P.value?Ne():null,F&&m(aa,x(x({},ke),{},{order:g.value,class:"".concat(y.value,"-suffix"),registerSize:K,display:!0,style:Ee}),{default:function(){return F}}),(xe=i.default)===null||xe===void 0?void 0:xe.call(i)]}})};return m(xr,{disabled:!w.value,onResize:_},{default:Je})}}});Ea.Item=iy;Ea.RESPONSIVE=rf;Ea.INVALIDATE=af;const br=Ea;function wu(){var n=function e(t){e.current=t};return n}const sy=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var n=navigator.userAgent||navigator.vendor||window.opera;return!!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(n==null?void 0:n.substr(0,4)))};var _a=function(e,t){var r,a=e.height,i=e.offset,o=e.prefixCls,l=e.onInnerResize,u=t.slots,s={},c={display:"flex",flexDirection:"column"};return i!==void 0&&(s={height:"".concat(a,"px"),position:"relative",overflow:"hidden"},c=x(x({},c),{},{transform:"translateY(".concat(i,"px)"),position:"absolute",left:0,right:0,top:0})),m("div",{style:s},[m(xr,{onResize:function(v){var d=v.offsetHeight;d&&l&&l()}},{default:function(){return[m("div",{style:c,class:Pe(B({},"".concat(o,"-holder-inner"),o))},[(r=u.default)===null||r===void 0?void 0:r.call(u)])]}})])};_a.displayName="Filter";_a.inheritAttrs=!1;_a.props={prefixCls:String,height:Number,offset:Number,onInnerResize:Function};const cy=_a;var of=function(e,t){var r,a=e.setRef,i=t.slots,o=Kn((r=i.default)===null||r===void 0?void 0:r.call(i));return o&&o.length?zi(o[0],{ref:a}):o};of.props={setRef:{type:Function,default:function(){}}};const fy=of;var dy=20;function Cu(n){return"touches"in n?n.touches[0].pageY:n.pageY}const vy=ce({compatConfig:{MODE:3},name:"ScrollBar",inheritAttrs:!1,props:{prefixCls:String,scrollTop:Number,scrollHeight:Number,height:Number,count:Number,onScroll:{type:Function},onStartMove:{type:Function},onStopMove:{type:Function}},setup:function(){return{moveRaf:null,scrollbarRef:wu(),thumbRef:wu(),visibleTimeout:null,state:Sn({dragging:!1,pageY:null,startTop:null,visible:!1})}},watch:{scrollTop:{handler:function(){this.delayHidden()},flush:"post"}},mounted:function(){var e,t;(e=this.scrollbarRef.current)===null||e===void 0||e.addEventListener("touchstart",this.onScrollbarTouchStart,wn?{passive:!1}:!1),(t=this.thumbRef.current)===null||t===void 0||t.addEventListener("touchstart",this.onMouseDown,wn?{passive:!1}:!1)},beforeUnmount:function(){this.removeEvents(),clearTimeout(this.visibleTimeout)},methods:{delayHidden:function(){var e=this;clearTimeout(this.visibleTimeout),this.state.visible=!0,this.visibleTimeout=setTimeout(function(){e.state.visible=!1},2e3)},onScrollbarTouchStart:function(e){e.preventDefault()},onContainerMouseDown:function(e){e.stopPropagation(),e.preventDefault()},patchEvents:function(){window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),this.thumbRef.current.addEventListener("touchmove",this.onMouseMove,wn?{passive:!1}:!1),this.thumbRef.current.addEventListener("touchend",this.onMouseUp)},removeEvents:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.scrollbarRef.current.removeEventListener("touchstart",this.onScrollbarTouchStart,wn?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchstart",this.onMouseDown,wn?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchmove",this.onMouseMove,wn?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchend",this.onMouseUp),Ue.cancel(this.moveRaf)},onMouseDown:function(e){var t=this.$props.onStartMove;Ye(this.state,{dragging:!0,pageY:Cu(e),startTop:this.getTop()}),t(),this.patchEvents(),e.stopPropagation(),e.preventDefault()},onMouseMove:function(e){var t=this.state,r=t.dragging,a=t.pageY,i=t.startTop,o=this.$props.onScroll;if(Ue.cancel(this.moveRaf),r){var l=Cu(e)-a,u=i+l,s=this.getEnableScrollRange(),c=this.getEnableHeightRange(),f=c?u/c:0,v=Math.ceil(f*s);this.moveRaf=Ue(function(){o(v)})}},onMouseUp:function(){var e=this.$props.onStopMove;this.state.dragging=!1,e(),this.removeEvents()},getSpinHeight:function(){var e=this.$props,t=e.height,r=e.count,a=t/r*10;return a=Math.max(a,dy),a=Math.min(a,t/2),Math.floor(a)},getEnableScrollRange:function(){var e=this.$props,t=e.scrollHeight,r=e.height;return t-r||0},getEnableHeightRange:function(){var e=this.$props.height,t=this.getSpinHeight();return e-t||0},getTop:function(){var e=this.$props.scrollTop,t=this.getEnableScrollRange(),r=this.getEnableHeightRange();if(e===0||t===0)return 0;var a=e/t;return a*r},showScroll:function(){var e=this.$props,t=e.height,r=e.scrollHeight;return r>t}},render:function(){var e=this.state,t=e.dragging,r=e.visible,a=this.$props.prefixCls,i=this.getSpinHeight()+"px",o=this.getTop()+"px",l=this.showScroll(),u=l&&r;return m("div",{ref:this.scrollbarRef,class:Pe("".concat(a,"-scrollbar"),B({},"".concat(a,"-scrollbar-show"),l)),style:{width:"8px",top:0,bottom:0,right:0,position:"absolute",display:u?void 0:"none"},onMousedown:this.onContainerMouseDown,onMousemove:this.delayHidden},[m("div",{ref:this.thumbRef,class:Pe("".concat(a,"-scrollbar-thumb"),B({},"".concat(a,"-scrollbar-thumb-moving"),t)),style:{width:"100%",height:i,top:o,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:"99px",cursor:"pointer",userSelect:"none"},onMousedown:this.onMouseDown},null)])}});function py(n,e,t,r){var a=new Map,i=new Map,o=D(Symbol("update"));ue(n,function(){o.value=Symbol("update")});var l=0;function u(){l+=1;var c=l;Promise.resolve().then(function(){c===l&&a.forEach(function(f,v){if(f&&f.offsetParent){var d=f.offsetHeight;i.get(v)!==d&&(o.value=Symbol("update"),i.set(v,f.offsetHeight))}})})}function s(c,f){var v=e(c),d=a.get(v);f?(a.set(v,f.$el||f),u()):a.delete(v),!d!=!f&&(f?t==null||t(c):r==null||r(c))}return[s,u,i,o]}function hy(n,e,t,r,a,i,o,l){var u;return function(s){if(s==null){l();return}Ue.cancel(u);var c=e.value,f=r.itemHeight;if(typeof s=="number")o(s);else if(s&&Ie(s)==="object"){var v,d=s.align;"index"in s?v=s.index:v=c.findIndex(function(y){return a(y)===s.key});var p=s.offset,g=p===void 0?0:p,h=function y(b,w){if(!(b<0||!n.value)){var O=n.value.clientHeight,P=!1,C=w;if(O){for(var T=w||d,M=0,A=0,H=0,_=Math.min(c.length,v),L=0;L<=_;L+=1){var R=a(c[L]);A=M;var K=t.get(R);H=A+(K===void 0?f:K),M=H,L===v&&K===void 0&&(P=!0)}var I=n.value.scrollTop,S=null;switch(T){case"top":S=A-g;break;case"bottom":S=H-O+g;break;default:{var E=I+O;A<I?C="top":H>E&&(C="bottom")}}S!==null&&S!==I&&o(S)}u=Ue(function(){P&&i(),y(b-1,C)})}};h(5)}}}var gy=(typeof navigator>"u"?"undefined":Ie(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const my=gy,lf=function(n,e){var t=!1,r=null;function a(){clearTimeout(r),t=!0,r=setTimeout(function(){t=!1},50)}return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i<0&&n.value||i>0&&e.value;return o&&l?(clearTimeout(r),t=!1):(!l||t)&&a(),!t&&l}};function yy(n,e,t,r){var a=0,i=null,o=null,l=!1,u=lf(e,t);function s(f){if(n.value){Ue.cancel(i);var v=f.deltaY;a+=v,o=v,!u(v)&&(my||f.preventDefault(),i=Ue(function(){var d=l?10:1;r(a*d),a=0}))}}function c(f){n.value&&(l=f.detail===o)}return[s,c]}var by=14/15;function xy(n,e,t){var r=!1,a=0,i=null,o=null,l=function(){i&&(i.removeEventListener("touchmove",u),i.removeEventListener("touchend",s))},u=function(d){if(r){var p=Math.ceil(d.touches[0].pageY),g=a-p;a=p,t(g)&&d.preventDefault(),clearInterval(o),o=setInterval(function(){g*=by,(!t(g,!0)||Math.abs(g)<=.1)&&clearInterval(o)},16)}},s=function(){r=!1,l()},c=function(d){l(),d.touches.length===1&&!r&&(r=!0,a=Math.ceil(d.touches[0].pageY),i=d.target,i.addEventListener("touchmove",u,{passive:!1}),i.addEventListener("touchend",s))},f=function(){};nn(function(){document.addEventListener("touchmove",f,{passive:!1}),ue(n,function(v){e.value.removeEventListener("touchstart",c),l(),clearInterval(o),v&&e.value.addEventListener("touchstart",c,{passive:!1})},{immediate:!0})}),Tn(function(){document.removeEventListener("touchmove",f)})}var wy=["prefixCls","height","itemHeight","fullHeight","data","itemKey","virtual","component","onScroll","children","style","class"],Cy=[],Sy={overflowY:"auto",overflowAnchor:"none"};function Py(n,e,t,r,a,i){var o=i.getKey;return n.slice(e,t+1).map(function(l,u){var s=e+u,c=a(l,s,{}),f=o(l);return m(fy,{key:f,setRef:function(d){return r(l,d)}},{default:function(){return[c]}})})}var Oy=ce({compatConfig:{MODE:3},name:"List",inheritAttrs:!1,props:{prefixCls:String,data:X.array,height:Number,itemHeight:Number,fullHeight:{type:Boolean,default:void 0},itemKey:{type:[String,Number,Function],required:!0},component:{type:[String,Object]},virtual:{type:Boolean,default:void 0},children:Function,onScroll:Function,onMousedown:Function,onMouseenter:Function,onVisibleChange:Function},setup:function(e,t){var r=t.expose,a=k(function(){var F=e.height,V=e.itemHeight,Y=e.virtual;return!!(Y!==!1&&F&&V)}),i=k(function(){var F=e.height,V=e.itemHeight,Y=e.data;return a.value&&Y&&V*Y.length>F}),o=Sn({scrollTop:0,scrollMoving:!1}),l=k(function(){return e.data||Cy}),u=Ve([]);ue(l,function(){u.value=wt(l.value).slice()},{immediate:!0});var s=Ve(function(F){});ue(function(){return e.itemKey},function(F){typeof F=="function"?s.value=F:s.value=function(V){return V==null?void 0:V[F]}},{immediate:!0});var c=D(),f=D(),v=D(),d=function(V){return s.value(V)},p={getKey:d};function g(F){var V;typeof F=="function"?V=F(o.scrollTop):V=F;var Y=A(V);c.value&&(c.value.scrollTop=Y),o.scrollTop=Y}var h=py(u,d,null,null),y=_e(h,4),b=y[0],w=y[1],O=y[2],P=y[3],C=Sn({scrollHeight:void 0,start:0,end:0,offset:void 0}),T=D(0);nn(function(){dn(function(){var F;T.value=((F=f.value)===null||F===void 0?void 0:F.offsetHeight)||0})}),Xt(function(){dn(function(){var F;T.value=((F=f.value)===null||F===void 0?void 0:F.offsetHeight)||0})}),ue([a,u],function(){a.value||Ye(C,{scrollHeight:void 0,start:0,end:u.value.length-1,offset:void 0})},{immediate:!0}),ue([a,u,T,i],function(){a.value&&!i.value&&Ye(C,{scrollHeight:T.value,start:0,end:u.value.length-1,offset:void 0})},{immediate:!0}),ue([i,a,function(){return o.scrollTop},u,P,function(){return e.height},T],function(){if(!(!a.value||!i.value)){for(var F=0,V,Y,j,ee=u.value.length,de=u.value,me=o.scrollTop,ye=e.itemHeight,Ee=e.height,ke=me+Ee,Oe=0;Oe<ee;Oe+=1){var Ne=de[Oe],We=d(Ne),qe=O.get(We);qe===void 0&&(qe=ye);var Je=F+qe;V===void 0&&Je>=me&&(V=Oe,Y=F),j===void 0&&Je>ke&&(j=Oe),F=Je}V===void 0&&(V=0,Y=0),j===void 0&&(j=ee-1),j=Math.min(j+1,ee),Ye(C,{scrollHeight:F,start:V,end:j,offset:Y})}},{immediate:!0});var M=k(function(){return C.scrollHeight-e.height});function A(F){var V=F;return Number.isNaN(M.value)||(V=Math.min(V,M.value)),V=Math.max(V,0),V}var H=k(function(){return o.scrollTop<=0}),_=k(function(){return o.scrollTop>=M.value}),L=lf(H,_);function R(F){var V=F;g(V)}function K(F){var V,Y=F.currentTarget.scrollTop;Math.abs(Y-o.scrollTop)>=1&&g(Y),(V=e.onScroll)===null||V===void 0||V.call(e,F)}var I=yy(a,H,_,function(F){g(function(V){var Y=V+F;return Y})}),S=_e(I,2),E=S[0],N=S[1];xy(a,c,function(F,V){return L(F,V)?!1:(E({preventDefault:function(){},deltaY:F}),!0)});function $(F){a.value&&F.preventDefault()}var U=function(){c.value&&(c.value.removeEventListener("wheel",E,wn?{passive:!1}:!1),c.value.removeEventListener("DOMMouseScroll",N),c.value.removeEventListener("MozMousePixelScroll",$))};Ze(function(){dn(function(){c.value&&(U(),c.value.addEventListener("wheel",E,wn?{passive:!1}:!1),c.value.addEventListener("DOMMouseScroll",N),c.value.addEventListener("MozMousePixelScroll",$))})}),Tn(function(){U()});var Z=hy(c,u,O,e,d,w,g,function(){var F;(F=v.value)===null||F===void 0||F.delayHidden()});r({scrollTo:Z});var J=k(function(){var F=null;return e.height&&(F=x(B({},e.fullHeight?"height":"maxHeight",e.height+"px"),Sy),a.value&&(F.overflowY="hidden",o.scrollMoving&&(F.pointerEvents="none"))),F});return ue([function(){return C.start},function(){return C.end},u],function(){if(e.onVisibleChange){var F=u.value.slice(C.start,C.end+1);e.onVisibleChange(F,u.value)}},{flush:"post"}),{state:o,mergedData:u,componentStyle:J,onFallbackScroll:K,onScrollBar:R,componentRef:c,useVirtual:a,calRes:C,collectHeight:w,setInstance:b,sharedConfig:p,scrollBarRef:v,fillerInnerRef:f}},render:function(){var e=this,t=x(x({},this.$props),this.$attrs),r=t.prefixCls,a=r===void 0?"rc-virtual-list":r,i=t.height;t.itemHeight,t.fullHeight,t.data,t.itemKey,t.virtual;var o=t.component,l=o===void 0?"div":o;t.onScroll;var u=t.children,s=u===void 0?this.$slots.default:u,c=t.style,f=t.class,v=vn(t,wy),d=Pe(a,f),p=this.state.scrollTop,g=this.calRes,h=g.scrollHeight,y=g.offset,b=g.start,w=g.end,O=this.componentStyle,P=this.onFallbackScroll,C=this.onScrollBar,T=this.useVirtual,M=this.collectHeight,A=this.sharedConfig,H=this.setInstance,_=this.mergedData;return m("div",x({style:x(x({},c),{},{position:"relative"}),class:d},v),[m(l,{class:"".concat(a,"-holder"),style:O,ref:"componentRef",onScroll:P},{default:function(){return[m(cy,{prefixCls:a,height:h,offset:y,onInnerResize:M,ref:"fillerInnerRef"},{default:function(){return Py(_,b,w,H,s,A)}})]}}),T&&m(vy,{ref:"scrollBarRef",prefixCls:a,scrollTop:p,height:i,scrollHeight:h,count:_.length,onScroll:C,onStartMove:function(){e.state.scrollMoving=!0},onStopMove:function(){e.state.scrollMoving=!1}},null)])}});const Ay=Oy;function Su(n,e){var t=e||{},r=t.defaultValue,a=t.value,i=a===void 0?D():a,o=typeof n=="function"?n():n;i.value!==void 0&&(o=fr(i)),r!==void 0&&(o=typeof r=="function"?r():r);var l=D(o),u=D(o);Ze(function(){var c=i.value!==void 0?i.value:l.value;e.postState&&(c=e.postState(c)),u.value=c});function s(c){var f=u.value;l.value=c,wt(u.value)!==c&&e.onChange&&e.onChange(c,f)}return ue(i,function(){l.value=i.value}),[u,s]}function fn(n){var e=typeof n=="function"?n():n,t=D(e);function r(a){t.value=a}return[t,r]}var Pu=["xxxl","xxl","xl","lg","md","sm","xs"],Wr={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)",xxxl:"(min-width: 2000px)"},ht=new Map,Qa=-1,qr={},Ty={matchHandlers:{},dispatch:function(e){return qr=e,ht.forEach(function(t){return t(qr)}),ht.size>=1},subscribe:function(e){return ht.size||this.register(),Qa+=1,ht.set(Qa,e),e(qr),Qa},unsubscribe:function(e){ht.delete(e),ht.size||this.unregister()},unregister:function(){var e=this;Object.keys(Wr).forEach(function(t){var r=Wr[t],a=e.matchHandlers[r];a==null||a.mql.removeListener(a==null?void 0:a.listener)}),ht.clear()},register:function(){var e=this;Object.keys(Wr).forEach(function(t){var r=Wr[t],a=function(l){var u=l.matches;e.dispatch(x(x({},qr),{},B({},t,u)))},i=window.matchMedia(r);i.addListener(a),e.matchHandlers[r]={mql:i,listener:a},a(i)})}};const Ou=Ty;function Bn(n){var e=Ve();return Ze(function(){e.value=n()},{flush:"sync"}),e}var In={adjustX:1,adjustY:1},Nn=[0,0],uf={left:{points:["cr","cl"],overflow:In,offset:[-4,0],targetOffset:Nn},right:{points:["cl","cr"],overflow:In,offset:[4,0],targetOffset:Nn},top:{points:["bc","tc"],overflow:In,offset:[0,-4],targetOffset:Nn},bottom:{points:["tc","bc"],overflow:In,offset:[0,4],targetOffset:Nn},topLeft:{points:["bl","tl"],overflow:In,offset:[0,-4],targetOffset:Nn},leftTop:{points:["tr","tl"],overflow:In,offset:[-4,0],targetOffset:Nn},topRight:{points:["br","tr"],overflow:In,offset:[0,-4],targetOffset:Nn},rightTop:{points:["tl","tr"],overflow:In,offset:[4,0],targetOffset:Nn},bottomRight:{points:["tr","br"],overflow:In,offset:[0,4],targetOffset:Nn},rightBottom:{points:["bl","br"],overflow:In,offset:[4,0],targetOffset:Nn},bottomLeft:{points:["tl","bl"],overflow:In,offset:[0,4],targetOffset:Nn},leftBottom:{points:["br","bl"],overflow:In,offset:[-4,0],targetOffset:Nn}},ky={prefixCls:String,id:String,overlayInnerStyle:X.any};const Ey=ce({compatConfig:{MODE:3},name:"Content",props:ky,slots:["overlay"],setup:function(e,t){var r=t.slots;return function(){var a;return m("div",{class:"".concat(e.prefixCls,"-inner"),id:e.id,role:"tooltip",style:e.overlayInnerStyle},[(a=r.overlay)===null||a===void 0?void 0:a.call(r)])}}});var _y=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"];function Au(){}const My=ce({compatConfig:{MODE:3},name:"Tooltip",inheritAttrs:!1,props:{trigger:X.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:X.string.def("right"),transitionName:String,animation:X.any,afterVisibleChange:X.func.def(function(){}),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:X.string.def("rc-tooltip"),mouseEnterDelay:X.number.def(.1),mouseLeaveDelay:X.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:X.object.def(function(){return{}}),arrowContent:X.any.def(null),tipId:String,builtinPlacements:X.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function},slots:["arrowContent","overlay"],setup:function(e,t){var r=t.slots,a=t.attrs,i=t.expose,o=D(),l=function(){var v=e.prefixCls,d=e.tipId,p=e.overlayInnerStyle;return[m("div",{class:"".concat(v,"-arrow"),key:"arrow"},[ut(r,e,"arrowContent")]),m(Ey,{key:"content",prefixCls:v,id:d,overlayInnerStyle:p},{overlay:r.overlay})]},u=function(){return o.value.getPopupDomNode()};i({getPopupDomNode:u,triggerDOM:o,forcePopupAlign:function(){var v;return(v=o.value)===null||v===void 0?void 0:v.forcePopupAlign()}});var s=D(!1),c=D(!1);return Ze(function(){var f=e.destroyTooltipOnHide;if(typeof f=="boolean")s.value=f;else if(f&&Ie(f)==="object"){var v=f.keepParent;s.value=v===!0,c.value=v===!1}}),function(){var f=e.overlayClassName,v=e.trigger,d=e.mouseEnterDelay,p=e.mouseLeaveDelay,g=e.overlayStyle,h=e.prefixCls,y=e.afterVisibleChange,b=e.transitionName,w=e.animation,O=e.placement,P=e.align;e.destroyTooltipOnHide;var C=e.defaultVisible,T=vn(e,_y),M=x({},T);e.visible!==void 0&&(M.popupVisible=e.visible);var A=x(x(x({popupClassName:f,prefixCls:h,action:v,builtinPlacements:uf,popupPlacement:O,popupAlign:P,afterPopupVisibleChange:y,popupTransitionName:b,popupAnimation:w,defaultPopupVisible:C,destroyPopupOnHide:s.value,autoDestroy:c.value,mouseLeaveDelay:p,popupStyle:g,mouseEnterDelay:d},M),a),{},{onPopupVisibleChange:e.onVisibleChange||Au,onPopupAlign:e.onPopupAlign||Au,ref:o,popup:l()});return m(wo,A,{default:r.default})}}});_r("success","processing","error","default","warning");var Iy=_r("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");const Ny=function(){return{trigger:[String,Array],visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:{type:Object,default:void 0},overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:{type:Object,default:void 0},builtinPlacements:{type:Object,default:void 0},children:Array,onVisibleChange:Function,"onUpdate:visible":Function}};var Dy={adjustX:1,adjustY:1},Tu={adjustX:0,adjustY:0},Ry=[0,0];function ku(n){return typeof n=="boolean"?n?Dy:Tu:x(x({},Tu),n)}function $y(n){var e=n.arrowWidth,t=e===void 0?4:e,r=n.horizontalArrowShift,a=r===void 0?16:r,i=n.verticalArrowShift,o=i===void 0?8:i,l=n.autoAdjustOverflow,u=n.arrowPointAtCenter,s={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(a+t),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(o+t)]},topRight:{points:["br","tc"],offset:[a+t,-4]},rightTop:{points:["tl","cr"],offset:[4,-(o+t)]},bottomRight:{points:["tr","bc"],offset:[a+t,4]},rightBottom:{points:["bl","cr"],offset:[4,o+t]},bottomLeft:{points:["tl","bc"],offset:[-(a+t),4]},leftBottom:{points:["br","cl"],offset:[-4,o+t]}};return Object.keys(s).forEach(function(c){s[c]=u?x(x({},s[c]),{},{overflow:ku(l),targetOffset:Ry}):x(x({},uf[c]),{},{overflow:ku(l)}),s[c].ignoreShake=!0}),s}function Ky(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=0,t=n.length;e<t;e++)if(n[e]!==void 0)return n[e]}var Ly=function(e,t){var r={},a=x({},e);return t.forEach(function(i){e&&i in e&&(r[i]=e[i],delete a[i])}),{picked:r,omitted:a}},Eu=new RegExp("^(".concat(Iy.join("|"),")(-inverse)?$")),Fy=function(){return x(x({},Ny()),{},{title:X.any})};const By=ce({compatConfig:{MODE:3},name:"ATooltip",inheritAttrs:!1,props:Zt(Fy(),{trigger:"hover",transitionName:"zoom-big-fast",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:["title"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs,o=t.expose,l=bn("tooltip",e),u=l.prefixCls,s=l.getPopupContainer,c=D(Ky([e.visible,e.defaultVisible])),f=D();nn(function(){Yi(e.defaultVisible===void 0,"Tooltip","'defaultVisible' is deprecated, please use 'v-model:visible'")});var v;ue(function(){return e.visible},function(P){Ue.cancel(v),v=Ue(function(){c.value=!!P})});var d=function(){var C,T=(C=e.title)!==null&&C!==void 0?C:r.title;return!T&&T!==0},p=function(C){var T=d();e.visible===void 0&&(c.value=T?!1:C),T||(a("update:visible",C),a("visibleChange",C))},g=function(){return f.value.getPopupDomNode()};o({getPopupDomNode:g,visible:c,forcePopupAlign:function(){var C;return(C=f.value)===null||C===void 0?void 0:C.forcePopupAlign()}});var h=k(function(){var P=e.builtinPlacements,C=e.arrowPointAtCenter,T=e.autoAdjustOverflow;return P||$y({arrowPointAtCenter:C,autoAdjustOverflow:T})}),y=function(C){return C||C===""},b=function(C){var T=C.type;if(Ie(T)==="object"&&C.props&&((T.__ANT_BUTTON===!0||T==="button")&&y(C.props.disabled)||T.__ANT_SWITCH===!0&&(y(C.props.disabled)||y(C.props.loading)))){var M=Ly(bv(C),["position","left","right","top","bottom","float","display","zIndex"]),A=M.picked,H=M.omitted,_=x(x({display:"inline-block"},A),{},{cursor:"not-allowed",lineHeight:1,width:C.props&&C.props.block?"100%":null}),L=x(x({},H),{},{pointerEvents:"none"}),R=Yn(C,{style:L},!0);return m("span",{style:_,class:"".concat(u.value,"-disabled-compatible-wrapper")},[R])}return C},w=function(){var C,T;return(C=e.title)!==null&&C!==void 0?C:(T=r.title)===null||T===void 0?void 0:T.call(r)},O=function(C,T){var M=h.value,A=Object.keys(M).find(function(L){return M[L].points[0]===T.points[0]&&M[L].points[1]===T.points[1]});if(A){var H=C.getBoundingClientRect(),_={top:"50%",left:"50%"};A.indexOf("top")>=0||A.indexOf("Bottom")>=0?_.top="".concat(H.height-T.offset[1],"px"):(A.indexOf("Top")>=0||A.indexOf("bottom")>=0)&&(_.top="".concat(-T.offset[1],"px")),A.indexOf("left")>=0||A.indexOf("Right")>=0?_.left="".concat(H.width-T.offset[0],"px"):(A.indexOf("right")>=0||A.indexOf("Left")>=0)&&(_.left="".concat(-T.offset[0],"px")),C.style.transformOrigin="".concat(_.left," ").concat(_.top)}};return function(){var P,C,T,M=e.openClassName,A=e.color,H=e.overlayClassName,_=(P=Wn((C=r.default)===null||C===void 0?void 0:C.call(r)))!==null&&P!==void 0?P:null;_=_.length===1?_[0]:_;var L=c.value;if(e.visible===void 0&&d()&&(L=!1),!_)return null;var R=b(Er(_)?_:m("span",null,[_])),K=Pe((T={},B(T,M||"".concat(u.value,"-open"),!0),B(T,R.props&&R.props.class,R.props&&R.props.class),T)),I=Pe(H,B({},"".concat(u.value,"-").concat(A),A&&Eu.test(A))),S,E;A&&!Eu.test(A)&&(S={backgroundColor:A},E={"--antd-arrow-background-color":A});var N=x(x(x({},i),e),{},{prefixCls:u.value,getPopupContainer:s.value,builtinPlacements:h.value,visible:L,ref:f,overlayClassName:I,overlayInnerStyle:S,onVisibleChange:p,onPopupAlign:O});return m(My,N,{default:function(){return[c.value?Yn(R,{class:K}):R]},arrowContent:function(){return m("span",{class:"".concat(u.value,"-arrow-content"),style:E},null)},overlay:w})}}}),jy=Mr(By);var Dt={adjustX:1,adjustY:1},Rt=[0,0],Hy={topLeft:{points:["bl","tl"],overflow:Dt,offset:[0,-4],targetOffset:Rt},topCenter:{points:["bc","tc"],overflow:Dt,offset:[0,-4],targetOffset:Rt},topRight:{points:["br","tr"],overflow:Dt,offset:[0,-4],targetOffset:Rt},bottomLeft:{points:["tl","bl"],overflow:Dt,offset:[0,4],targetOffset:Rt},bottomCenter:{points:["tc","bc"],overflow:Dt,offset:[0,4],targetOffset:Rt},bottomRight:{points:["tr","br"],overflow:Dt,offset:[0,4],targetOffset:Rt}};const zy=Hy;var Vy=["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"];const Gy=ce({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:X.string.def("rc-dropdown"),transitionName:String,overlayClassName:X.string.def(""),openClassName:String,animation:X.any,align:X.object,overlayStyle:{type:Object,default:void 0},placement:X.string.def("bottomLeft"),overlay:X.any,trigger:X.oneOfType([X.string,X.arrayOf(X.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:X.array,hideAction:X.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:X.number.def(.15),mouseLeaveDelay:X.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.expose,o=D(!!e.visible);ue(function(){return e.visible},function(p){p!==void 0&&(o.value=p)});var l=D();i({triggerRef:l});var u=function(g){e.visible===void 0&&(o.value=!1),a("overlayClick",g)},s=function(g){e.visible===void 0&&(o.value=g),a("visibleChange",g)},c=function(){var g,h=(g=r.overlay)===null||g===void 0?void 0:g.call(r),y={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:u,getPopupContainer:function(){return l.value.getPopupDomNode()}};return m(Cn,{key:Ks},[e.arrow&&m("div",{class:"".concat(e.prefixCls,"-arrow")},null),Yn(h,y,!1)])},f=k(function(){var p=e.minOverlayWidthMatchTrigger,g=p===void 0?!e.alignPoint:p;return g}),v=function(){var g,h=(g=r.default)===null||g===void 0?void 0:g.call(r);return o.value&&h?Yn(h[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):h},d=k(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var p=e.prefixCls,g=e.arrow,h=e.showAction,y=e.overlayStyle,b=e.trigger,w=e.placement,O=e.align,P=e.getPopupContainer,C=e.transitionName,T=e.animation,M=e.overlayClassName,A=vn(e,Vy);return m(wo,x(x({},A),{},{prefixCls:p,ref:l,popupClassName:Pe(M,B({},"".concat(p,"-show-arrow"),g)),popupStyle:y,builtinPlacements:zy,action:b,showAction:h,hideAction:d.value||[],popupPlacement:w,popupAlign:O,popupTransitionName:C,popupAnimation:T,popupVisible:o.value,stretch:f.value?"minWidth":"",onPopupVisibleChange:s,getPopupContainer:P}),{popup:c,default:v})}}});var Uy={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const Wy=Uy;function _u(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){qy(n,a,t[a])})}return n}function qy(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Co=function(e,t){var r=_u({},e,t.attrs);return m(an,_u({},r,{icon:Wy}),null)};Co.displayName="EllipsisOutlined";Co.inheritAttrs=!1;const sf=Co;function Yy(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Gi(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var r=0,a=function(){};return{s:a,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(s){throw s},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,l;return{s:function(){t=t.call(n)},n:function(){var s=t.next();return i=s.done,s},e:function(s){o=!0,l=s},f:function(){try{!i&&t.return!=null&&t.return()}finally{if(o)throw l}}}}function Xy(n,e,t,r){var a=t?t.call(r,n,e):void 0;if(a!==void 0)return!!a;if(n===e)return!0;if(Ie(n)!=="object"||!n||Ie(e)!=="object"||!e)return!1;var i=Object.keys(n),o=Object.keys(e);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var s=i[u];if(!l(s))return!1;var c=n[s],f=e[s];if(a=t?t.call(r,c,f,s):void 0,a===!1||a===void 0&&c!==f)return!1}return!0}function sr(n,e,t,r){return Xy(wt(n),wt(e),t,r)}var cf=Symbol("menuContextKey"),ff=function(e){yn(cf,e)},ft=function(){return pn(cf)},df=Symbol("ForceRenderKey"),Qy=function(e){yn(df,e)},vf=function(){return pn(df,!1)},pf=Symbol("menuFirstLevelContextKey"),hf=function(e){yn(pf,e)},Zy=function(){return pn(pf,!0)},ga=ce({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,t){var r=t.slots,a=ft(),i=x({},a);return e.mode!==void 0&&(i.mode=Jr(e,"mode")),e.isRootMenu!==void 0&&(i.isRootMenu=Jr(e,"isRootMenu")),e.overflowDisabled!==void 0&&(i.overflowDisabled=Jr(e,"overflowDisabled")),ff(i),function(){var o;return(o=r.default)===null||o===void 0?void 0:o.call(r)}}});const Jy=ff;function eb(n,e,t,r){for(var a=n.length,i=t+(r?1:-1);r?i--:++i<a;)if(e(n[i],i,n))return i;return-1}function nb(n){return n!==n}function tb(n,e,t){for(var r=t-1,a=n.length;++r<a;)if(n[r]===e)return r;return-1}function rb(n,e,t){return e===e?tb(n,e,t):eb(n,nb,t)}function ab(n,e){var t=n==null?0:n.length;return!!t&&rb(n,e,0)>-1}function ib(n,e,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(t(e,n[r]))return!0;return!1}function ob(){}var lb=1/0,ub=Ht&&1/mo(new Ht([,-0]))[1]==lb?function(n){return new Ht(n)}:ob;const sb=ub;var cb=200;function fb(n,e,t){var r=-1,a=ab,i=n.length,o=!0,l=[],u=l;if(t)o=!1,a=ib;else if(i>=cb){var s=e?null:sb(n);if(s)return mo(s);o=!1,a=Gc,u=new Tr}else u=e?[]:l;e:for(;++r<i;){var c=n[r],f=e?e(c):c;if(c=t||c!==0?c:0,o&&f===f){for(var v=u.length;v--;)if(u[v]===f)continue e;e&&u.push(f),l.push(c)}else a(u,f,t)||(u!==l&&u.push(f),l.push(c))}return l}function Za(n){return n&&n.length?fb(n):[]}var db=Symbol("siderCollapsed"),Yr="$$__vc-menu-more__key",gf=Symbol("KeyPathContext"),So=function(){return pn(gf,{parentEventKeys:k(function(){return[]}),parentKeys:k(function(){return[]}),parentInfo:{}})},vb=function(e,t,r){var a=So(),i=a.parentEventKeys,o=a.parentKeys,l=k(function(){return[].concat(Ge(i.value),[e])}),u=k(function(){return[].concat(Ge(o.value),[t])});return yn(gf,{parentEventKeys:l,parentKeys:u,parentInfo:r}),u},mf=Symbol("measure"),Mu=ce({compatConfig:{MODE:3},setup:function(e,t){var r=t.slots;return yn(mf,!0),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}}),Po=function(){return pn(mf,!1)};const pb=vb;function yf(n){var e=ft(),t=e.mode,r=e.rtl,a=e.inlineIndent;return k(function(){return t.value!=="inline"?null:r.value?{paddingRight:"".concat(n.value*a.value,"px")}:{paddingLeft:"".concat(n.value*a.value,"px")}})}var hb=0,gb=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:X.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}};const qt=ce({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:gb(),slots:["icon","title"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs,o=wa(),l=Po(),u=Ie(o.vnode.key)==="symbol"?String(o.vnode.key):o.vnode.key;Vn(Ie(o.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(u),'"` not support Symbol type'));var s="menu_item_".concat(++hb,"_$$_").concat(u),c=So(),f=c.parentEventKeys,v=c.parentKeys,d=ft(),p=d.prefixCls,g=d.activeKeys,h=d.disabled,y=d.changeActiveKeys,b=d.rtl,w=d.inlineCollapsed,O=d.siderCollapsed,P=d.onItemClick,C=d.selectedKeys,T=d.registerMenuInfo,M=d.unRegisterMenuInfo,A=Zy(),H=D(!1),_=k(function(){return[].concat(Ge(v.value),[u])}),L={eventKey:s,key:u,parentEventKeys:f,parentKeys:v,isLeaf:!0};T(s,L),Tn(function(){M(s)}),ue(g,function(){H.value=!!g.value.find(function(V){return V===u})},{immediate:!0});var R=k(function(){return h.value||e.disabled}),K=k(function(){return C.value.includes(u)}),I=k(function(){var V,Y="".concat(p.value,"-item");return V={},B(V,"".concat(Y),!0),B(V,"".concat(Y,"-danger"),e.danger),B(V,"".concat(Y,"-active"),H.value),B(V,"".concat(Y,"-selected"),K.value),B(V,"".concat(Y,"-disabled"),R.value),V}),S=function(Y){return{key:u,eventKey:s,keyPath:_.value,eventKeyPath:[].concat(Ge(f.value),[s]),domEvent:Y,item:x(x({},e),i)}},E=function(Y){if(!R.value){var j=S(Y);a("click",Y),P(j)}},N=function(Y){R.value||(y(_.value),a("mouseenter",Y))},$=function(Y){R.value||(y([]),a("mouseleave",Y))},U=function(Y){if(a("keydown",Y),Y.which===sn.ENTER){var j=S(Y);a("click",Y),P(j)}},Z=function(Y){y(_.value),a("focus",Y)},J=function(Y,j){var ee=m("span",{class:"".concat(p.value,"-title-content")},[j]);return(!Y||Er(j)&&j.type==="span")&&j&&w.value&&A&&typeof j=="string"?m("div",{class:"".concat(p.value,"-inline-collapsed-noicon")},[j.charAt(0)]):ee},F=yf(k(function(){return _.value.length}));return function(){var V,Y,j,ee;if(l)return null;var de=(V=e.title)!==null&&V!==void 0?V:(Y=r.title)===null||Y===void 0?void 0:Y.call(r),me=Kn((j=r.default)===null||j===void 0?void 0:j.call(r)),ye=me.length,Ee=de;typeof de>"u"?Ee=A&&ye?me:"":de===!1&&(Ee="");var ke={title:Ee};!O.value&&!w.value&&(ke.title=null,ke.visible=!1);var Oe={};e.role==="option"&&(Oe["aria-selected"]=K.value);var Ne=ut(r,e,"icon");return m(jy,x(x({},ke),{},{placement:b.value?"left":"right",overlayClassName:"".concat(p.value,"-inline-collapsed-tooltip")}),{default:function(){return[m(br.Item,x(x(x({component:"li"},i),{},{id:e.id,style:x(x({},i.style||{}),F.value),class:[I.value,(ee={},B(ee,"".concat(i.class),!!i.class),B(ee,"".concat(p.value,"-item-only-child"),(Ne?ye+1:ye)===1),ee)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":u,"aria-disabled":e.disabled},Oe),{},{onMouseenter:N,onMouseleave:$,onClick:E,onKeydown:U,onFocus:Z,title:typeof de=="string"?de:void 0}),{default:function(){return[Yn(Ne,{class:"".concat(p.value,"-item-icon")},!1),J(Ne,me)]}})]}})}}});var lt={adjustX:1,adjustY:1},mb={topLeft:{points:["bl","tl"],overflow:lt,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:lt,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:lt,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:lt,offset:[4,0]}},yb={topLeft:{points:["bl","tl"],overflow:lt,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:lt,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:lt,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:lt,offset:[4,0]}},bb={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};const Iu=ce({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,t){var r=t.slots,a=t.emit,i=D(!1),o=ft(),l=o.getPopupContainer,u=o.rtl,s=o.subMenuOpenDelay,c=o.subMenuCloseDelay,f=o.builtinPlacements,v=o.triggerSubMenuAction,d=o.isRootMenu,p=o.forceSubMenuRender,g=o.motion,h=o.defaultMotions,y=o.rootClassName,b=vf(),w=k(function(){return u.value?x(x({},yb),f.value):x(x({},mb),f.value)}),O=k(function(){return bb[e.mode]}),P=D();ue(function(){return e.visible},function(M){Ue.cancel(P.value),P.value=Ue(function(){i.value=M})},{immediate:!0}),Tn(function(){Ue.cancel(P.value)});var C=function(A){a("visibleChange",A)},T=k(function(){var M,A,H=g.value||((M=h.value)===null||M===void 0?void 0:M[e.mode])||((A=h.value)===null||A===void 0?void 0:A.other),_=typeof H=="function"?H():H;return _?ic(_.name,{css:!0}):void 0});return function(){var M=e.prefixCls,A=e.popupClassName,H=e.mode,_=e.popupOffset,L=e.disabled;return m(wo,{prefixCls:M,popupClassName:Pe("".concat(M,"-popup"),B({},"".concat(M,"-rtl"),u.value),A,y.value),stretch:H==="horizontal"?"minWidth":null,getPopupContainer:d.value?l.value:function(R){return R.parentNode},builtinPlacements:w.value,popupPlacement:O.value,popupVisible:i.value,popupAlign:_&&{offset:_},action:L?[]:[v.value],mouseEnterDelay:s.value,mouseLeaveDelay:c.value,onPopupVisibleChange:C,forceRender:b||p.value,popupAnimation:T.value},{popup:r.popup,default:r.default})}}});var bf=function(e,t){var r,a=t.slots,i=t.attrs,o=ft(),l=o.prefixCls,u=o.mode;return m("ul",x(x({},i),{},{class:Pe(l.value,"".concat(l.value,"-sub"),"".concat(l.value,"-").concat(u.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(r=a.default)===null||r===void 0?void 0:r.call(a)])};bf.displayName="SubMenuList";const xf=bf,xb=ce({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,t){var r=t.slots,a=k(function(){return"inline"}),i=ft(),o=i.motion,l=i.mode,u=i.defaultMotions,s=k(function(){return l.value===a.value}),c=D(!s.value),f=k(function(){return s.value?e.open:!1});ue(l,function(){s.value&&(c.value=!1)},{flush:"post"});var v=k(function(){var d,p,g=o.value||((d=u.value)===null||d===void 0?void 0:d[a.value])||((p=u.value)===null||p===void 0?void 0:p.other),h=typeof g=="function"?g():g;return x(x({},h),{},{appear:e.keyPath.length<=1})});return function(){var d;return c.value?null:m(ga,{mode:a.value},{default:function(){return[m(Qt,v.value,{default:function(){return[xt(m(xf,{id:e.id},{default:function(){return[(d=r.default)===null||d===void 0?void 0:d.call(r)]}}),[[Ft,f.value]])]}})]}})}}});var Nu=0,wb=function(){return{icon:X.any,title:X.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,theme:String,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}};const Yt=ce({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:wb(),slots:["icon","title","expandIcon"],setup:function(e,t){var r,a,i=t.slots,o=t.attrs,l=t.emit;hf(!1);var u=Po(),s=wa(),c=Ie(s.vnode.key)==="symbol"?String(s.vnode.key):s.vnode.key;Vn(Ie(s.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(c),'"` not support Symbol type'));var f=fi(c)?c:"sub_menu_".concat(++Nu,"_$$_not_set_key"),v=(r=e.eventKey)!==null&&r!==void 0?r:fi(c)?"sub_menu_".concat(++Nu,"_$$_").concat(c):f,d=So(),p=d.parentEventKeys,g=d.parentInfo,h=d.parentKeys,y=k(function(){return[].concat(Ge(h.value),[f])}),b=D([]),w={eventKey:v,key:f,parentEventKeys:p,childrenEventKeys:b,parentKeys:h};(a=g.childrenEventKeys)===null||a===void 0||a.value.push(v),Tn(function(){if(g.childrenEventKeys){var Re;g.childrenEventKeys.value=(Re=g.childrenEventKeys)===null||Re===void 0?void 0:Re.value.filter(function(Me){return Me!=v})}}),pb(v,f,w);var O=ft(),P=O.prefixCls,C=O.activeKeys,T=O.disabled,M=O.changeActiveKeys,A=O.mode,H=O.inlineCollapsed,_=O.antdMenuTheme,L=O.openKeys,R=O.overflowDisabled,K=O.onOpenChange,I=O.registerMenuInfo,S=O.unRegisterMenuInfo,E=O.selectedSubMenuKeys,N=O.expandIcon,$=c!=null,U=!u&&(vf()||!$);Qy(U),(u&&$||!u&&!$||U)&&(I(v,w),Tn(function(){S(v)}));var Z=k(function(){return"".concat(P.value,"-submenu")}),J=k(function(){return T.value||e.disabled}),F=D(),V=D(),Y=k(function(){return L.value.includes(f)}),j=k(function(){return!R.value&&Y.value}),ee=k(function(){return E.value.includes(f)}),de=D(!1);ue(C,function(){de.value=!!C.value.find(function(Re){return Re===f})},{immediate:!0});var me=function(Me){J.value||(l("titleClick",Me,f),A.value==="inline"&&K(f,!Y.value))},ye=function(Me){J.value||(M(y.value),l("mouseenter",Me))},Ee=function(Me){J.value||(M([]),l("mouseleave",Me))},ke=yf(k(function(){return y.value.length})),Oe=function(Me){A.value!=="inline"&&K(f,Me)},Ne=function(){M(y.value)},We=v&&"".concat(v,"-popup"),qe=k(function(){return Pe(P.value,"".concat(P.value,"-").concat(e.theme||_.value),e.popupClassName)}),Je=function(Me,en){if(!en)return H.value&&!h.value.length&&Me&&typeof Me=="string"?m("div",{class:"".concat(P.value,"-inline-collapsed-noicon")},[Me.charAt(0)]):m("span",{class:"".concat(P.value,"-title-content")},[Me]);var Qe=Er(Me)&&Me.type==="span";return m(Cn,null,[Yn(en,{class:"".concat(P.value,"-item-icon")},!1),Qe?Me:m("span",{class:"".concat(P.value,"-title-content")},[Me])])},Le=k(function(){return A.value!=="inline"&&y.value.length>1?"vertical":A.value}),xe=k(function(){return A.value==="horizontal"?"vertical":A.value}),Xe=k(function(){return Le.value==="horizontal"?"vertical":Le.value}),on=function(){var Me=Z.value,en=ut(i,e,"icon"),Qe=e.expandIcon||i.expandIcon||N.value,xn=Je(ut(i,e,"title"),en);return m("div",{style:ke.value,class:"".concat(Me,"-title"),tabindex:J.value?null:-1,ref:F,title:typeof xn=="string"?xn:null,"data-menu-id":f,"aria-expanded":j.value,"aria-haspopup":!0,"aria-controls":We,"aria-disabled":J.value,onClick:me,onFocus:Ne},[xn,A.value!=="horizontal"&&Qe?Qe(x(x({},e),{},{isOpen:j.value})):m("i",{class:"".concat(Me,"-arrow")},null)])};return function(){var Re;if(u){var Me;return $?(Me=i.default)===null||Me===void 0?void 0:Me.call(i):null}var en=Z.value,Qe=function(){return null};return!R.value&&A.value!=="inline"?Qe=function(){return m(Iu,{mode:Le.value,prefixCls:en,visible:!e.internalPopupClose&&j.value,popupClassName:qe.value,popupOffset:e.popupOffset,disabled:J.value,onVisibleChange:Oe},{default:function(){return[on()]},popup:function(){return m(ga,{mode:Xe.value,isRootMenu:!1},{default:function(){return[m(xf,{id:We,ref:V},{default:i.default})]}})}})}:Qe=function(){return m(Iu,null,{default:on})},m(ga,{mode:xe.value},{default:function(){return[m(br.Item,x(x({component:"li"},o),{},{role:"none",class:Pe(en,"".concat(en,"-").concat(A.value),o.class,(Re={},B(Re,"".concat(en,"-open"),j.value),B(Re,"".concat(en,"-active"),de.value),B(Re,"".concat(en,"-selected"),ee.value),B(Re,"".concat(en,"-disabled"),J.value),Re)),onMouseenter:ye,onMouseleave:Ee,"data-submenu-id":f}),{default:function(){return m(Cn,null,[Qe(),!R.value&&m(xb,{id:We,open:j.value,keyPath:y.value},{default:i.default})])}})]}})}}});function wf(n,e){if(n.classList)return n.classList.contains(e);var t=n.className;return" ".concat(t," ").indexOf(" ".concat(e," "))>-1}function Du(n,e){n.classList?n.classList.add(e):wf(n,e)||(n.className="".concat(n.className," ").concat(e))}function Ru(n,e){if(n.classList)n.classList.remove(e);else if(wf(n,e)){var t=n.className;n.className=" ".concat(t," ").replace(" ".concat(e," ")," ")}}var Cb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:e,appear:t,css:!0,onBeforeEnter:function(a){a.style.height="0px",a.style.opacity="0",Du(a,e)},onEnter:function(a){dn(function(){a.style.height="".concat(a.scrollHeight,"px"),a.style.opacity="1"})},onAfterEnter:function(a){a&&(Ru(a,e),a.style.height=null,a.style.opacity=null)},onBeforeLeave:function(a){Du(a,e),a.style.height="".concat(a.offsetHeight,"px"),a.style.opacity=null},onLeave:function(a){setTimeout(function(){a.style.height="0px",a.style.opacity="0"})},onAfterLeave:function(a){a&&(Ru(a,e),a.style&&(a.style.height=null,a.style.opacity=null))}}};const Cf=Cb;var Sb=function(){return{title:X.any}};const ma=ce({compatConfig:{MODE:3},name:"AMenuItemGroup",inheritAttrs:!1,props:Sb(),slots:["title"],setup:function(e,t){var r=t.slots,a=t.attrs,i=ft(),o=i.prefixCls,l=k(function(){return"".concat(o.value,"-item-group")}),u=Po();return function(){var s,c;return u?(s=r.default)===null||s===void 0?void 0:s.call(r):m("li",x(x({},a),{},{onClick:function(v){return v.stopPropagation()},class:l.value}),[m("div",{title:typeof e.title=="string"?e.title:void 0,class:"".concat(l.value,"-title")},[ut(r,e,"title")]),m("ul",{class:"".concat(l.value,"-list")},[(c=r.default)===null||c===void 0?void 0:c.call(r)])])}}});var Pb=function(){return{prefixCls:String,dashed:Boolean}};const ya=ce({compatConfig:{MODE:3},name:"AMenuDivider",props:Pb(),setup:function(e){var t=bn("menu",e),r=t.prefixCls,a=k(function(){var i;return i={},B(i,"".concat(r.value,"-item-divider"),!0),B(i,"".concat(r.value,"-item-divider-dashed"),!!e.dashed),i});return function(){return m("li",{class:a.value},null)}}});var Ob=["label","children","key","type"];function Ri(n,e,t){return(n||[]).map(function(r,a){if(r&&Ie(r)==="object"){var i=r.label,o=r.children,l=r.key,u=r.type,s=vn(r,Ob),c=l??"tmp-".concat(a),f=t?t.parentKeys.slice():[],v=[],d={eventKey:c,key:c,parentEventKeys:D(f),parentKeys:D(f),childrenEventKeys:D(v),isLeaf:!1};if(o||u==="group"){if(u==="group"){var p=Ri(o,e,t);return m(ma,x(x({key:c},s),{},{title:i}),{default:function(){return[p]}})}e.set(c,d),t&&t.childrenEventKeys.push(c);var g=Ri(o,e,{childrenEventKeys:v,parentKeys:[].concat(f,c)});return m(Yt,x(x({key:c},s),{},{title:i}),{default:function(){return[g]}})}return u==="divider"?m(ya,x({key:c},s),null):(d.isLeaf=!0,e.set(c,d),m(qt,x({key:c},s),{default:function(){return[i]}}))}return null}).filter(function(r){return r})}function Ab(n){var e=Ve([]),t=D(!1),r=Ve(new Map);return ue(function(){return n.items},function(){var a=new Map;t.value=!1,n.items?(t.value=!0,e.value=Ri(n.items,a)):e.value=void 0,r.value=a},{immediate:!0,deep:!0}),{itemsNodes:e,store:r,hasItmes:t}}var Tb=function(){return{id:String,prefixCls:String,items:Array,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},$u=[];const ct=ce({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:Tb(),slots:["expandIcon","overflowedIndicator"],setup:function(e,t){var r=t.slots,a=t.emit,i=t.attrs,o=bn("menu",e),l=o.prefixCls,u=o.direction,s=o.getPrefixCls,c=Ve(new Map),f=pn(db,D(void 0)),v=k(function(){return f.value!==void 0?f.value:e.inlineCollapsed}),d=Ab(e),p=d.itemsNodes,g=D(!1);nn(function(){g.value=!0}),Ze(function(){Vn(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),Vn(!(f.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var h=D([]),y=D([]),b=D({});ue(c,function(){var j={},ee=Yy(c.value.values()),de;try{for(ee.s();!(de=ee.n()).done;){var me=de.value;j[me.key]=me}}catch(ye){ee.e(ye)}finally{ee.f()}b.value=j},{flush:"post"}),Ze(function(){if(e.activeKey!==void 0){var j=[],ee=e.activeKey?b.value[e.activeKey]:void 0;ee&&e.activeKey!==void 0?j=Za([].concat(fr(ee.parentKeys),e.activeKey)):j=[],sr(h.value,j)||(h.value=j)}}),ue(function(){return e.selectedKeys},function(j){j&&(y.value=j.slice())},{immediate:!0,deep:!0});var w=D([]);ue([b,y],function(){var j=[];y.value.forEach(function(ee){var de=b.value[ee];de&&(j=j.concat(fr(de.parentKeys)))}),j=Za(j),sr(w.value,j)||(w.value=j)},{immediate:!0});var O=function(ee){if(e.selectable){var de=ee.key,me=y.value.includes(de),ye;e.multiple?me?ye=y.value.filter(function(ke){return ke!==de}):ye=[].concat(Ge(y.value),[de]):ye=[de];var Ee=x(x({},ee),{},{selectedKeys:ye});sr(ye,y.value)||(e.selectedKeys===void 0&&(y.value=ye),a("update:selectedKeys",ye),me&&e.multiple?a("deselect",Ee):a("select",Ee)),H.value!=="inline"&&!e.multiple&&P.value.length&&R($u)}},P=D([]);ue(function(){return e.openKeys},function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:P.value;sr(P.value,j)||(P.value=j.slice())},{immediate:!0,deep:!0});var C,T=function(ee){clearTimeout(C),C=setTimeout(function(){e.activeKey===void 0&&(h.value=ee),a("update:activeKey",ee[ee.length-1])})},M=k(function(){return!!e.disabled}),A=k(function(){return u.value==="rtl"}),H=D("vertical"),_=D(!1);Ze(function(){(e.mode==="inline"||e.mode==="vertical")&&v.value?(H.value="vertical",_.value=v.value):(H.value=e.mode,_.value=!1)});var L=k(function(){return H.value==="inline"}),R=function(ee){P.value=ee,a("update:openKeys",ee),a("openChange",ee)},K=D(P.value),I=D(!1);ue(P,function(){L.value&&(K.value=P.value)},{immediate:!0}),ue(L,function(){if(!I.value){I.value=!0;return}L.value?P.value=K.value:R($u)},{immediate:!0});var S=k(function(){var j;return j={},B(j,"".concat(l.value),!0),B(j,"".concat(l.value,"-root"),!0),B(j,"".concat(l.value,"-").concat(H.value),!0),B(j,"".concat(l.value,"-inline-collapsed"),_.value),B(j,"".concat(l.value,"-rtl"),A.value),B(j,"".concat(l.value,"-").concat(e.theme),!0),j}),E=k(function(){return s()}),N=k(function(){return{horizontal:{name:"".concat(E.value,"-slide-up")},inline:Cf,other:{name:"".concat(E.value,"-zoom-big")}}});hf(!0);var $=function j(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],de=[],me=c.value;return ee.forEach(function(ye){var Ee=me.get(ye),ke=Ee.key,Oe=Ee.childrenEventKeys;de.push.apply(de,[ke].concat(Ge(j(fr(Oe)))))}),de},U=function(ee){a("click",ee),O(ee)},Z=function(ee,de){var me,ye=((me=b.value[ee])===null||me===void 0?void 0:me.childrenEventKeys)||[],Ee=P.value.filter(function(Oe){return Oe!==ee});if(de)Ee.push(ee);else if(H.value!=="inline"){var ke=$(fr(ye));Ee=Za(Ee.filter(function(Oe){return!ke.includes(Oe)}))}sr(P,Ee)||R(Ee)},J=function(ee,de){c.value.set(ee,de),c.value=new Map(c.value)},F=function(ee){c.value.delete(ee),c.value=new Map(c.value)},V=D(0),Y=k(function(){return e.expandIcon||r.expandIcon?function(j){var ee=e.expandIcon||r.expandIcon;return ee=typeof ee=="function"?ee(j):ee,Yn(ee,{class:"".concat(l.value,"-submenu-expand-icon")},!1)}:null});return Jy({prefixCls:l,activeKeys:h,openKeys:P,selectedKeys:y,changeActiveKeys:T,disabled:M,rtl:A,mode:H,inlineIndent:k(function(){return e.inlineIndent}),subMenuCloseDelay:k(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:k(function(){return e.subMenuOpenDelay}),builtinPlacements:k(function(){return e.builtinPlacements}),triggerSubMenuAction:k(function(){return e.triggerSubMenuAction}),getPopupContainer:k(function(){return e.getPopupContainer}),inlineCollapsed:_,antdMenuTheme:k(function(){return e.theme}),siderCollapsed:f,defaultMotions:k(function(){return g.value?N.value:null}),motion:k(function(){return g.value?e.motion:null}),overflowDisabled:D(void 0),onOpenChange:Z,onItemClick:U,registerMenuInfo:J,unRegisterMenuInfo:F,selectedSubMenuKeys:w,isRootMenu:D(!0),expandIcon:Y,forceSubMenuRender:k(function(){return e.forceSubMenuRender}),rootClassName:k(function(){return""})}),function(){var j,ee,de=p.value||Kn((j=r.default)===null||j===void 0?void 0:j.call(r)),me=V.value>=de.length-1||H.value!=="horizontal"||e.disabledOverflow,ye=H.value!=="horizontal"||e.disabledOverflow?de:de.map(function(ke,Oe){return m(ga,{key:ke.key,overflowDisabled:Oe>V.value},{default:function(){return ke}})}),Ee=((ee=r.overflowedIndicator)===null||ee===void 0?void 0:ee.call(r))||m(sf,null,null);return m(br,x(x({},i),{},{onMousedown:e.onMousedown,prefixCls:"".concat(l.value,"-overflow"),component:"ul",itemComponent:qt,class:[S.value,i.class],role:"menu",id:e.id,data:ye,renderRawItem:function(Oe){return Oe},renderRawRest:function(Oe){var Ne=Oe.length,We=Ne?de.slice(-Ne):null;return m(Cn,null,[m(Yt,{eventKey:Yr,key:Yr,title:Ee,disabled:me,internalPopupClose:Ne===0},{default:function(){return We}}),m(Mu,null,{default:function(){return[m(Yt,{eventKey:Yr,key:Yr,title:Ee,disabled:me,internalPopupClose:Ne===0},{default:function(){return We}})]}})])},maxCount:H.value!=="horizontal"||e.disabledOverflow?br.INVALIDATE:br.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Oe){V.value=Oe}}),{default:function(){return[m(Ca,{to:"body"},{default:function(){return[m("div",{style:{display:"none"},"aria-hidden":!0},[m(Mu,null,{default:function(){return[ye]}})])]}})]}})}}});ct.install=function(n){return n.component(ct.name,ct),n.component(qt.name,qt),n.component(Yt.name,Yt),n.component(ya.name,ya),n.component(ma.name,ma),n};ct.Item=qt;ct.Divider=ya;ct.SubMenu=Yt;ct.ItemGroup=ma;function kb(n,e){for(var t=-1,r=n==null?0:n.length,a=Array(r);++t<r;)a[t]=e(n[t],t,n);return a}var Eb="[object Symbol]";function Ma(n){return typeof n=="symbol"||St(n)&&kt(n)==Eb}var _b=1/0,Ku=Un?Un.prototype:void 0,Lu=Ku?Ku.toString:void 0;function Sf(n){if(typeof n=="string")return n;if(et(n))return kb(n,Sf)+"";if(Ma(n))return Lu?Lu.call(n):"";var e=n+"";return e=="0"&&1/n==-_b?"-0":e}var Mb=/\s/;function Ib(n){for(var e=n.length;e--&&Mb.test(n.charAt(e)););return e}var Nb=/^\s+/;function Db(n){return n&&n.slice(0,Ib(n)+1).replace(Nb,"")}var Fu=0/0,Rb=/^[-+]0x[0-9a-f]+$/i,$b=/^0b[01]+$/i,Kb=/^0o[0-7]+$/i,Lb=parseInt;function Bu(n){if(typeof n=="number")return n;if(Ma(n))return Fu;if(Ot(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Ot(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=Db(n);var t=$b.test(n);return t||Kb.test(n)?Lb(n.slice(2),t?2:8):Rb.test(n)?Fu:+n}function Fb(n){return n==null?"":Sf(n)}function Bb(n){var e=D(),t=D(!1);function r(){for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];t.value||(Ue.cancel(e.value),e.value=Ue(function(){n.apply(void 0,i)}))}return Tn(function(){t.value=!0,Ue.cancel(e.value)}),r}function jb(n){var e=D([]),t=D(typeof n=="function"?n():n),r=Bb(function(){var i=t.value;e.value.forEach(function(o){i=o(i)}),e.value=[],t.value=i});function a(i){e.value.push(i),r()}return[t,a]}const Hb=ce({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var r=t.expose,a=t.attrs,i=D();function o(s){var c;(c=e.tab)!==null&&c!==void 0&&c.disabled||e.onClick(s)}r({domRef:i});function l(s){var c;s.preventDefault(),s.stopPropagation(),e.editable.onEdit("remove",{key:(c=e.tab)===null||c===void 0?void 0:c.key,event:s})}var u=k(function(){var s;return e.editable&&e.closable!==!1&&!((s=e.tab)!==null&&s!==void 0&&s.disabled)});return function(){var s,c,f=e.prefixCls,v=e.id,d=e.active,p=e.tab,g=p.key,h=p.tab,y=p.disabled,b=p.closeIcon,w=e.renderWrapper,O=e.removeAriaLabel,P=e.editable,C=e.onFocus,T="".concat(f,"-tab"),M=m("div",{key:g,ref:i,class:Pe(T,(s={},B(s,"".concat(T,"-with-remove"),u.value),B(s,"".concat(T,"-active"),d),B(s,"".concat(T,"-disabled"),y),s)),style:a.style,onClick:o},[m("div",{role:"tab","aria-selected":d,id:v&&"".concat(v,"-tab-").concat(g),class:"".concat(T,"-btn"),"aria-controls":v&&"".concat(v,"-panel-").concat(g),"aria-disabled":y,tabindex:y?null:0,onClick:function(H){H.stopPropagation(),o(H)},onKeydown:function(H){[sn.SPACE,sn.ENTER].includes(H.which)&&(H.preventDefault(),o(H))},onFocus:C},[typeof h=="function"?h():h]),u.value&&m("button",{type:"button","aria-label":O||"remove",tabindex:0,class:"".concat(T,"-remove"),onClick:function(H){H.stopPropagation(),l(H)}},[(b==null?void 0:b())||((c=P.removeIcon)===null||c===void 0?void 0:c.call(P))||"×"])]);return w?w(M):M}}});var ju={width:0,height:0,left:0,top:0};function zb(n,e){var t=D(new Map);return Ze(function(){for(var r,a=new Map,i=n.value,o=e.value.get((r=i[0])===null||r===void 0?void 0:r.key)||ju,l=o.left+o.width,u=0;u<i.length;u+=1){var s=i[u].key,c=e.value.get(s);if(!c){var f;c=e.value.get((f=i[u-1])===null||f===void 0?void 0:f.key)||ju}var v=a.get(s)||x({},c);v.right=l-v.left-v.width,a.set(s,v)}t.value=new Map(a)}),t}const Pf=ce({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var r=t.expose,a=t.attrs,i=D();return r({domRef:i}),function(){var o=e.prefixCls,l=e.editable,u=e.locale;return!l||l.showAdd===!1?null:m("button",{ref:i,type:"button",class:"".concat(o,"-nav-add"),style:a.style,"aria-label":(u==null?void 0:u.addAriaLabel)||"Add tab",onClick:function(c){l.onEdit("add",{event:c})}},[l.addIcon?l.addIcon():"+"])}}});var Vb={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:X.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const Gb=ce({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:Vb,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var r=t.attrs,a=t.slots,i=fn(!1),o=_e(i,2),l=o[0],u=o[1],s=fn(null),c=_e(s,2),f=c[0],v=c[1],d=function(w){for(var O=e.tabs.filter(function(A){return!A.disabled}),P=O.findIndex(function(A){return A.key===f.value})||0,C=O.length,T=0;T<C;T+=1){P=(P+w+C)%C;var M=O[P];if(!M.disabled){v(M.key);return}}},p=function(w){var O=w.which;if(!l.value){[sn.DOWN,sn.SPACE,sn.ENTER].includes(O)&&(u(!0),w.preventDefault());return}switch(O){case sn.UP:d(-1),w.preventDefault();break;case sn.DOWN:d(1),w.preventDefault();break;case sn.ESC:u(!1);break;case sn.SPACE:case sn.ENTER:f.value!==null&&e.onTabClick(f.value,w);break}},g=k(function(){return"".concat(e.id,"-more-popup")}),h=k(function(){return f.value!==null?"".concat(g.value,"-").concat(f.value):null}),y=function(w,O){w.preventDefault(),w.stopPropagation(),e.editable.onEdit("remove",{key:O,event:w})};return nn(function(){ue(f,function(){var b=document.getElementById(h.value);b&&b.scrollIntoView&&b.scrollIntoView(!1)},{flush:"post",immediate:!0})}),ue(l,function(){l.value||v(null)}),function(){var b,w=e.prefixCls,O=e.id,P=e.tabs,C=e.locale,T=e.mobile,M=e.moreIcon,A=M===void 0?((b=a.moreIcon)===null||b===void 0?void 0:b.call(a))||m(sf,null,null):M,H=e.moreTransitionName,_=e.editable,L=e.tabBarGutter,R=e.rtl,K=e.onTabClick,I="".concat(w,"-dropdown"),S=C==null?void 0:C.dropdownAriaLabel,E=B({},R?"marginRight":"marginLeft",L);P.length||(E.visibility="hidden",E.order=1);var N=Pe(B({},"".concat(I,"-rtl"),R)),$=T?null:m(Gy,{prefixCls:I,trigger:["hover"],visible:l.value,transitionName:H,onVisibleChange:u,overlayClassName:N,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return m(ct,{onClick:function(J){var F=J.key,V=J.domEvent;K(F,V),u(!1)},id:g.value,tabindex:-1,role:"listbox","aria-activedescendant":h.value,selectedKeys:[f.value],"aria-label":S!==void 0?S:"expanded dropdown"},{default:function(){return[P.map(function(J){var F,V,Y=_&&J.closable!==!1&&!J.disabled;return m(qt,{key:J.key,id:"".concat(g.value,"-").concat(J.key),role:"option","aria-controls":O&&"".concat(O,"-panel-").concat(J.key),disabled:J.disabled},{default:function(){return[m("span",null,[typeof J.tab=="function"?J.tab():J.tab]),Y&&m("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(I,"-menu-item-remove"),onClick:function(de){de.stopPropagation(),y(de,J.key)}},[((F=J.closeIcon)===null||F===void 0?void 0:F.call(J))||((V=_.removeIcon)===null||V===void 0?void 0:V.call(_))||"×"])]}})})]}})},default:function(){return m("button",{type:"button",class:"".concat(w,"-nav-more"),style:E,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":g.value,id:"".concat(O,"-more"),"aria-expanded":l.value,onKeydown:p},[A])}});return m("div",{class:Pe("".concat(w,"-nav-operations"),r.class),style:r.style},[$,m(Pf,{prefixCls:w,locale:C,editable:_},null)])}}});var Of=Symbol("tabsContextKey"),Af=function(e){yn(Of,e)},Tf=function(){return pn(Of,{tabs:D([]),prefixCls:D()})};ce({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var r=t.slots;return Af(nd(e)),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}});var Ub=.1,Hu=.01,ia=20,zu=Math.pow(.995,ia);function Wb(n,e){var t=fn(),r=_e(t,2),a=r[0],i=r[1],o=fn(0),l=_e(o,2),u=l[0],s=l[1],c=fn(0),f=_e(c,2),v=f[0],d=f[1],p=fn(),g=_e(p,2),h=g[0],y=g[1],b=D();function w(R){var K=R.touches[0],I=K.screenX,S=K.screenY;i({x:I,y:S}),clearInterval(b.value)}function O(R){if(a.value){R.preventDefault();var K=R.touches[0],I=K.screenX,S=K.screenY,E=I-a.value.x,N=S-a.value.y;e(E,N),i({x:I,y:S});var $=Date.now();d($-u.value),s($),y({x:E,y:N})}}function P(){if(a.value){var R=h.value;if(i(null),y(null),R){var K=R.x/v.value,I=R.y/v.value,S=Math.abs(K),E=Math.abs(I);if(Math.max(S,E)<Ub)return;var N=K,$=I;b.value=setInterval(function(){if(Math.abs(N)<Hu&&Math.abs($)<Hu){clearInterval(b.value);return}N*=zu,$*=zu,e(N*ia,$*ia)},ia)}}}var C=D();function T(R){var K=R.deltaX,I=R.deltaY,S=0,E=Math.abs(K),N=Math.abs(I);E===N?S=C.value==="x"?K:I:E>N?(S=K,C.value="x"):(S=I,C.value="y"),e(-S,-S)&&R.preventDefault()}var M=D({onTouchStart:w,onTouchMove:O,onTouchEnd:P,onWheel:T});function A(R){M.value.onTouchStart(R)}function H(R){M.value.onTouchMove(R)}function _(R){M.value.onTouchEnd(R)}function L(R){M.value.onWheel(R)}nn(function(){var R,K;document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",_,{passive:!1}),(R=n.value)===null||R===void 0||R.addEventListener("touchstart",A,{passive:!1}),(K=n.value)===null||K===void 0||K.addEventListener("wheel",L,{passive:!1})}),Tn(function(){document.removeEventListener("touchmove",H),document.removeEventListener("touchend",_)})}function Vu(n,e){var t=D(n);function r(a){var i=typeof a=="function"?a(t.value):a;i!==t.value&&e(i,t.value),t.value=i}return[t,r]}var qb=function(){var e=D(new Map),t=function(a){return function(i){e.value.set(a,i)}};return td(function(){e.value=new Map}),[t,e]};const Yb=qb;var Xb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qb=/^\w*$/;function Zb(n,e){if(et(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Ma(n)?!0:Qb.test(n)||!Xb.test(n)||e!=null&&n in Object(e)}var Jb="Expected a function";function Oo(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(Jb);var t=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=t.cache;if(i.has(a))return i.get(a);var o=n.apply(this,r);return t.cache=i.set(a,o)||i,o};return t.cache=new(Oo.Cache||rt),t}Oo.Cache=rt;var e2=500;function n2(n){var e=Oo(n,function(r){return t.size===e2&&t.clear(),r}),t=e.cache;return e}var t2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r2=/\\(\\)?/g,a2=n2(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(t2,function(t,r,a,i){e.push(a?i.replace(r2,"$1"):r||t)}),e});const i2=a2;function Ia(n,e){return et(n)?n:Zb(n,e)?[n]:i2(Fb(n))}var o2=1/0;function Ao(n){if(typeof n=="string"||Ma(n))return n;var e=n+"";return e=="0"&&1/n==-o2?"-0":e}function l2(n,e){e=Ia(e,n);for(var t=0,r=e.length;n!=null&&t<r;)n=n[Ao(e[t++])];return t&&t==r?n:void 0}var u2=function(){try{var n=Mt(Object,"defineProperty");return n({},"",{}),n}catch{}}();const ba=u2;function s2(n,e,t){e=="__proto__"&&ba?ba(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}var c2=Object.prototype,f2=c2.hasOwnProperty;function d2(n,e,t){var r=n[e];(!(f2.call(n,e)&&go(r,t))||t===void 0&&!(e in n))&&s2(n,e,t)}function v2(n,e,t,r){if(!Ot(n))return n;e=Ia(e,n);for(var a=-1,i=e.length,o=i-1,l=n;l!=null&&++a<i;){var u=Ao(e[a]),s=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return n;if(a!=o){var c=l[u];s=r?r(c,u,l):void 0,s===void 0&&(s=Ot(c)?c:bo(e[a+1])?[]:{})}d2(l,u,s),l=l[u]}return n}function p2(n,e,t){for(var r=-1,a=e.length,i={};++r<a;){var o=e[r],l=l2(n,o);t(l,o)&&v2(i,Ia(o,n),l)}return i}function h2(n,e){return n!=null&&e in Object(n)}function g2(n,e,t){e=Ia(e,n);for(var r=-1,a=e.length,i=!1;++r<a;){var o=Ao(e[r]);if(!(i=n!=null&&t(n,o)))break;n=n[o]}return i||++r!=a?i:(a=n==null?0:n.length,!!a&&xo(a)&&bo(o,a)&&(et(n)||yo(n)))}function m2(n,e){return n!=null&&g2(n,e,h2)}function y2(n,e){return p2(n,e,function(t,r){return m2(n,r)})}var Gu=Un?Un.isConcatSpreadable:void 0;function b2(n){return et(n)||yo(n)||!!(Gu&&n&&n[Gu])}function kf(n,e,t,r,a){var i=-1,o=n.length;for(t||(t=b2),a||(a=[]);++i<o;){var l=n[i];e>0&&t(l)?e>1?kf(l,e-1,t,r,a):Wc(a,l):r||(a[a.length]=l)}return a}function x2(n){var e=n==null?0:n.length;return e?kf(n,1):[]}function w2(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var Uu=Math.max;function C2(n,e,t){return e=Uu(e===void 0?n.length-1:e,0),function(){for(var r=arguments,a=-1,i=Uu(r.length-e,0),o=Array(i);++a<i;)o[a]=r[e+a];a=-1;for(var l=Array(e+1);++a<e;)l[a]=r[a];return l[e]=t(o),w2(n,this,l)}}function S2(n){return function(){return n}}function P2(n){return n}var O2=ba?function(n,e){return ba(n,"toString",{configurable:!0,enumerable:!1,value:S2(e),writable:!0})}:P2;const A2=O2;var T2=800,k2=16,E2=Date.now;function _2(n){var e=0,t=0;return function(){var r=E2(),a=k2-(r-t);if(t=r,a>0){if(++e>=T2)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}var M2=_2(A2);const I2=M2;function N2(n){return I2(C2(n,void 0,x2),n+"")}var D2=N2(function(n,e){return n==null?{}:y2(n,e)});const Ef=D2;var Wu={width:0,height:0,left:0,top:0,right:0},R2=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:X.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const qu=ce({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:R2(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var r=t.attrs,a=t.slots,i=Tf(),o=i.tabs,l=i.prefixCls,u=D(),s=D(),c=D(),f=D(),v=Yb(),d=_e(v,2),p=d[0],g=d[1],h=k(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),y=Vu(0,function(oe,fe){h.value&&e.onTabScroll&&e.onTabScroll({direction:oe>fe?"left":"right"})}),b=_e(y,2),w=b[0],O=b[1],P=Vu(0,function(oe,fe){!h.value&&e.onTabScroll&&e.onTabScroll({direction:oe>fe?"top":"bottom"})}),C=_e(P,2),T=C[0],M=C[1],A=fn(0),H=_e(A,2),_=H[0],L=H[1],R=fn(0),K=_e(R,2),I=K[0],S=K[1],E=fn(null),N=_e(E,2),$=N[0],U=N[1],Z=fn(null),J=_e(Z,2),F=J[0],V=J[1],Y=fn(0),j=_e(Y,2),ee=j[0],de=j[1],me=fn(0),ye=_e(me,2),Ee=ye[0],ke=ye[1],Oe=jb(new Map),Ne=_e(Oe,2),We=Ne[0],qe=Ne[1],Je=zb(o,We),Le=k(function(){return"".concat(l.value,"-nav-operations-hidden")}),xe=D(0),Xe=D(0);Ze(function(){h.value?e.rtl?(xe.value=0,Xe.value=Math.max(0,_.value-$.value)):(xe.value=Math.min(0,$.value-_.value),Xe.value=0):(xe.value=Math.min(0,F.value-I.value),Xe.value=0)});var on=function(fe){return fe<xe.value?xe.value:fe>Xe.value?Xe.value:fe},Re=D(),Me=fn(),en=_e(Me,2),Qe=en[0],xn=en[1],Fn=function(){xn(Date.now())},ne=function(){clearTimeout(Re.value)},z=function(fe,le){fe(function(be){var Ce=on(be+le);return Ce})};Wb(u,function(oe,fe){if(h.value){if($.value>=_.value)return!1;z(O,oe)}else{if(F.value>=I.value)return!1;z(M,fe)}return ne(),Fn(),!0}),ue(Qe,function(){ne(),Qe.value&&(Re.value=setTimeout(function(){xn(0)},100))});var Q=function(){var fe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,le=Je.value.get(fe)||{width:0,height:0,left:0,right:0,top:0};if(h.value){var be=w.value;e.rtl?le.right<w.value?be=le.right:le.right+le.width>w.value+$.value&&(be=le.right+le.width-$.value):le.left<-w.value?be=-le.left:le.left+le.width>-w.value+$.value&&(be=-(le.left+le.width-$.value)),M(0),O(on(be))}else{var Ce=T.value;le.top<-T.value?Ce=-le.top:le.top+le.height>-T.value+F.value&&(Ce=-(le.top+le.height-F.value)),O(0),M(on(Ce))}},Se=D(0),Be=D(0);Ze(function(){var oe,fe,le,be,Ce,De,He,$e=Je.value;["top","bottom"].includes(e.tabPosition)?(fe="width",Ce=$.value,De=_.value,He=ee.value,le=e.rtl?"right":"left",be=Math.abs(w.value)):(fe="height",Ce=F.value,De=_.value,He=Ee.value,le="top",be=-T.value);var Ke=Ce;De+He>Ce&&De<Ce&&(Ke=Ce-He);var tn=o.value;if(!tn.length){var ln;return ln=[0,0],Se.value=ln[0],Be.value=ln[1],ln}for(var Dn=tn.length,rn=Dn,En=0;En<Dn;En+=1){var _n=$e.get(tn[En].key)||Wu;if(_n[le]+_n[fe]>be+Ke){rn=En-1;break}}for(var Rn=0,hn=Dn-1;hn>=0;hn-=1){var Mn=$e.get(tn[hn].key)||Wu;if(Mn[le]<be){Rn=hn+1;break}}return oe=[Rn,rn],Se.value=oe[0],Be.value=oe[1],oe});var te=function(){var fe,le,be,Ce,De,He=((fe=u.value)===null||fe===void 0?void 0:fe.offsetWidth)||0,$e=((le=u.value)===null||le===void 0?void 0:le.offsetHeight)||0,Ke=((be=f.value)===null||be===void 0?void 0:be.$el)||{},tn=Ke.offsetWidth||0,ln=Ke.offsetHeight||0;U(He),V($e),de(tn),ke(ln);var Dn=(((Ce=s.value)===null||Ce===void 0?void 0:Ce.offsetWidth)||0)-tn,rn=(((De=s.value)===null||De===void 0?void 0:De.offsetHeight)||0)-ln;L(Dn),S(rn),qe(function(){var En=new Map;return o.value.forEach(function(_n){var Rn=_n.key,hn=g.value.get(Rn),Mn=(hn==null?void 0:hn.$el)||hn;Mn&&En.set(Rn,{width:Mn.offsetWidth,height:Mn.offsetHeight,left:Mn.offsetLeft,top:Mn.offsetTop})}),En})},W=k(function(){return[].concat(Ge(o.value.slice(0,Se.value)),Ge(o.value.slice(Be.value+1)))}),G=fn(),q=_e(G,2),se=q[0],he=q[1],ie=k(function(){return Je.value.get(e.activeKey)}),re=D(),Ae=function(){Ue.cancel(re.value)};ue([ie,h,function(){return e.rtl}],function(){var oe={};ie.value&&(h.value?(e.rtl?oe.right=rr(ie.value.right):oe.left=rr(ie.value.left),oe.width=rr(ie.value.width)):(oe.top=rr(ie.value.top),oe.height=rr(ie.value.height))),Ae(),re.value=Ue(function(){he(oe)})}),ue([function(){return e.activeKey},ie,Je,h],function(){Q()},{flush:"post"}),ue([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return o.value}],function(){te()},{flush:"post"});var Te=function(fe){var le=fe.position,be=fe.prefixCls,Ce=fe.extra;if(!Ce)return null;var De=Ce==null?void 0:Ce({position:le});return De?m("div",{class:"".concat(be,"-extra-content")},[De]):null};return Tn(function(){ne(),Ae()}),function(){var oe,fe=e.id,le=e.animated,be=e.activeKey,Ce=e.rtl,De=e.editable,He=e.locale,$e=e.tabPosition,Ke=e.tabBarGutter,tn=e.onTabClick,ln=r.class,Dn=r.style,rn=l.value,En=!!W.value.length,_n="".concat(rn,"-nav-wrap"),Rn,hn,Mn,Dr;h.value?Ce?(hn=w.value>0,Rn=w.value+$.value<_.value):(Rn=w.value<0,hn=-w.value+$.value<_.value):(Mn=T.value<0,Dr=-T.value+F.value<I.value);var It={};$e==="top"||$e==="bottom"?It[Ce?"marginRight":"marginLeft"]=typeof Ke=="number"?"".concat(Ke,"px"):Ke:It.marginTop=typeof Ke=="number"?"".concat(Ke,"px"):Ke;var Rr=o.value.map(function(dt,$r){var vt=dt.key;return m(Hb,{id:fe,prefixCls:rn,key:vt,tab:dt,style:$r===0?void 0:It,closable:dt.closable,editable:De,active:vt===be,removeAriaLabel:He==null?void 0:He.removeAriaLabel,ref:p(vt),onClick:function(Ra){tn(vt,Ra)},onFocus:function(){Q(vt),Fn(),u.value&&(Ce||(u.value.scrollLeft=0),u.value.scrollTop=0)}},a)});return m("div",{role:"tablist",class:Pe("".concat(rn,"-nav"),ln),style:Dn,onKeydown:function(){Fn()}},[m(Te,{position:"left",prefixCls:rn,extra:a.leftExtra},null),m(xr,{onResize:te},{default:function(){return[m("div",{class:Pe(_n,(oe={},B(oe,"".concat(_n,"-ping-left"),Rn),B(oe,"".concat(_n,"-ping-right"),hn),B(oe,"".concat(_n,"-ping-top"),Mn),B(oe,"".concat(_n,"-ping-bottom"),Dr),oe)),ref:u},[m(xr,{onResize:te},{default:function(){return[m("div",{ref:s,class:"".concat(rn,"-nav-list"),style:{transform:"translate(".concat(w.value,"px, ").concat(T.value,"px)"),transition:Qe.value?"none":void 0}},[Rr,m(Pf,{ref:f,prefixCls:rn,locale:He,editable:De,style:x(x({},Rr.length===0?void 0:It),{},{visibility:En?"hidden":null})},null),m("div",{class:Pe("".concat(rn,"-ink-bar"),B({},"".concat(rn,"-ink-bar-animated"),le.inkBar)),style:se.value},null)])]}})])]}}),m(Gb,x(x({},e),{},{removeAriaLabel:He==null?void 0:He.removeAriaLabel,ref:c,prefixCls:rn,tabs:W.value,class:!En&&Le.value}),Ef(a,["moreIcon"])),m(Te,{position:"right",prefixCls:rn,extra:a.rightExtra},null),m(Te,{position:"right",prefixCls:rn,extra:a.tabBarExtraContent},null)])}}}),$2=ce({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Tf(),r=t.tabs,a=t.prefixCls;return function(){var i=e.id,o=e.activeKey,l=e.animated,u=e.tabPosition,s=e.rtl,c=e.destroyInactiveTabPane,f=l.tabPane,v=a.value,d=r.value.findIndex(function(p){return p.key===o});return m("div",{class:"".concat(v,"-content-holder")},[m("div",{class:["".concat(v,"-content"),"".concat(v,"-content-").concat(u),B({},"".concat(v,"-content-animated"),f)],style:d&&f?B({},s?"marginRight":"marginLeft","-".concat(d,"00%")):null},[r.value.map(function(p){return Yn(p.node,{key:p.key,prefixCls:v,tabKey:p.key,id:i,animated:f,active:p.key===o,destroyInactiveTabPane:c})})])])}}});var K2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const L2=K2;function Yu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){F2(n,a,t[a])})}return n}function F2(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var To=function(e,t){var r=Yu({},e,t.attrs);return m(an,Yu({},r,{icon:L2}),null)};To.displayName="PlusOutlined";To.inheritAttrs=!1;const B2=To;var Xu=0,_f=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:X.any}};function j2(n){return n.map(function(e){if(Er(e)){for(var t=x({},e.props||{}),r=0,a=Object.entries(t);r<a.length;r++){var i=_e(a[r],2),o=i[0],l=i[1];delete t[o],t[Cs(o)]=l}var u=e.children||{},s=e.key!==void 0?e.key:void 0,c=t.tab,f=c===void 0?u.tab:c,v=t.disabled,d=t.forceRender,p=t.closable,g=t.animated,h=t.active,y=t.destroyInactiveTabPane;return x(x({key:s},t),{},{node:e,closeIcon:u.closeIcon,tab:f,disabled:v===""||v,forceRender:d===""||d,closable:p===""||p,animated:g===""||g,active:h===""||h,destroyInactiveTabPane:y===""||y})}return null}).filter(function(e){return e})}var H2=ce({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:x(x({},Zt(_f(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots;Vn(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Vn(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Vn(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=bn("tabs",e),o=i.prefixCls,l=i.direction,u=i.size,s=i.rootPrefixCls,c=k(function(){return l.value==="rtl"}),f=k(function(){var K=e.animated,I=e.tabPosition;return K===!1||["left","right"].includes(I)?{inkBar:!1,tabPane:!1}:K===!0?{inkBar:!0,tabPane:!0}:x({inkBar:!0,tabPane:!1},Ie(K)==="object"?K:{})}),v=fn(!1),d=_e(v,2),p=d[0],g=d[1];nn(function(){g(sy())});var h=Su(function(){var K;return(K=e.tabs[0])===null||K===void 0?void 0:K.key},{value:k(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),y=_e(h,2),b=y[0],w=y[1],O=fn(function(){return e.tabs.findIndex(function(K){return K.key===b.value})}),P=_e(O,2),C=P[0],T=P[1];Ze(function(){var K=e.tabs.findIndex(function(S){return S.key===b.value});if(K===-1){var I;K=Math.max(0,Math.min(C.value,e.tabs.length-1)),w((I=e.tabs[K])===null||I===void 0?void 0:I.key)}T(K)});var M=Su(null,{value:k(function(){return e.id})}),A=_e(M,2),H=A[0],_=A[1],L=k(function(){return p.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});nn(function(){e.id||(_("rc-tabs-".concat(Xu)),Xu+=1)});var R=function(I,S){var E;(E=e.onTabClick)===null||E===void 0||E.call(e,I,S);var N=I!==b.value;if(w(I),N){var $;($=e.onChange)===null||$===void 0||$.call(e,I)}};return Af({tabs:k(function(){return e.tabs}),prefixCls:o}),function(){var K,I=e.id,S=e.type,E=e.tabBarGutter,N=e.tabBarStyle,$=e.locale,U=e.destroyInactiveTabPane,Z=e.renderTabBar,J=Z===void 0?a.renderTabBar:Z,F=e.onTabScroll,V=e.hideAdd,Y=e.centered,j={id:H.value,activeKey:b.value,animated:f.value,tabPosition:L.value,rtl:c.value,mobile:p.value},ee;S==="editable-card"&&(ee={onEdit:function(ke,Oe){var Ne,We=Oe.key,qe=Oe.event;(Ne=e.onEdit)===null||Ne===void 0||Ne.call(e,ke==="add"?qe:We,ke)},removeIcon:function(){return m(Sc,null,null)},addIcon:a.addIcon?a.addIcon:function(){return m(B2,null,null)},showAdd:V!==!0});var de,me=x(x({},j),{},{moreTransitionName:"".concat(s.value,"-slide-up"),editable:ee,locale:$,tabBarGutter:E,onTabClick:R,onTabScroll:F,style:N});J?de=J(x(x({},me),{},{DefaultTabBar:qu})):de=m(qu,me,Ef(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var ye=o.value;return m("div",x(x({},r),{},{id:I,class:Pe(ye,"".concat(ye,"-").concat(L.value),(K={},B(K,"".concat(ye,"-").concat(u.value),u.value),B(K,"".concat(ye,"-card"),["card","editable-card"].includes(S)),B(K,"".concat(ye,"-editable-card"),S==="editable-card"),B(K,"".concat(ye,"-centered"),Y),B(K,"".concat(ye,"-mobile"),p.value),B(K,"".concat(ye,"-editable"),S==="editable-card"),B(K,"".concat(ye,"-rtl"),c.value),K),r.class)}),[de,m($2,x(x({destroyInactiveTabPane:U},j),{},{animated:f.value}),null)])}}});const zt=ce({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:Zt(_f(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots,i=t.emit,o=function(u){i("update:activeKey",u),i("change",u)};return function(){var l,u=j2(Kn((l=a.default)===null||l===void 0?void 0:l.call(a)));return m(H2,x(x(x({},Oa(e,["onUpdate:activeKey"])),r),{},{onChange:o,tabs:u}),a)}}});var z2=function(){return{tab:X.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const $i=ce({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:z2(),slots:["closeIcon","tab"],setup:function(e,t){var r=t.attrs,a=t.slots,i=D(e.forceRender);ue([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});var o=k(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var l,u=e.prefixCls,s=e.forceRender,c=e.id,f=e.active,v=e.tabKey;return m("div",{id:c&&"".concat(c,"-panel-").concat(v),role:"tabpanel",tabindex:f?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(v),"aria-hidden":!f,style:[o.value,r.style],class:["".concat(u,"-tabpane"),f&&"".concat(u,"-tabpane-active"),r.class]},[(f||i.value||s)&&((l=a.default)===null||l===void 0?void 0:l.call(a))])}}});zt.TabPane=$i;zt.install=function(n){return n.component(zt.name,zt),n.component($i.name,$i),n};var V2=function(){return lo()&&window.document.documentElement},Xr,G2=function(){if(!V2())return!1;if(Xr!==void 0)return Xr;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),Xr=e.scrollHeight===1,document.body.removeChild(e),Xr};const U2=function(){var n=D(!1);return nn(function(){n.value=G2()}),n};var Mf=Symbol("rowContextKey"),W2=function(e){yn(Mf,e)},q2=function(){return pn(Mf,{gutter:k(function(){}),wrap:k(function(){}),supportFlexGap:k(function(){})})};_r("top","middle","bottom","stretch");_r("start","end","center","space-around","space-between","space-evenly");var Y2=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},X2=ce({compatConfig:{MODE:3},name:"ARow",props:Y2(),setup:function(e,t){var r=t.slots,a=bn("row",e),i=a.prefixCls,o=a.direction,l,u=D({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),s=U2();nn(function(){l=Ou.subscribe(function(d){var p=e.gutter||0;(!Array.isArray(p)&&Ie(p)==="object"||Array.isArray(p)&&(Ie(p[0])==="object"||Ie(p[1])==="object"))&&(u.value=d)})}),Tn(function(){Ou.unsubscribe(l)});var c=k(function(){var d=[void 0,void 0],p=e.gutter,g=p===void 0?0:p,h=Array.isArray(g)?g:[g,void 0];return h.forEach(function(y,b){if(Ie(y)==="object")for(var w=0;w<Pu.length;w++){var O=Pu[w];if(u.value[O]&&y[O]!==void 0){d[b]=y[O];break}}else d[b]=y}),d});W2({gutter:c,supportFlexGap:s,wrap:k(function(){return e.wrap})});var f=k(function(){var d;return Pe(i.value,(d={},B(d,"".concat(i.value,"-no-wrap"),e.wrap===!1),B(d,"".concat(i.value,"-").concat(e.justify),e.justify),B(d,"".concat(i.value,"-").concat(e.align),e.align),B(d,"".concat(i.value,"-rtl"),o.value==="rtl"),d))}),v=k(function(){var d=c.value,p={},g=d[0]!=null&&d[0]>0?"".concat(d[0]/-2,"px"):void 0,h=d[1]!=null&&d[1]>0?"".concat(d[1]/-2,"px"):void 0;return g&&(p.marginLeft=g,p.marginRight=g),s.value?p.rowGap="".concat(d[1],"px"):h&&(p.marginTop=h,p.marginBottom=h),p});return function(){var d;return m("div",{class:f.value,style:v.value},[(d=r.default)===null||d===void 0?void 0:d.call(r)])}}});const Q2=X2;function Z2(n){return typeof n=="number"?"".concat(n," ").concat(n," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(n)?"0 0 ".concat(n):n}var J2=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const ex=ce({compatConfig:{MODE:3},name:"ACol",props:J2(),setup:function(e,t){var r=t.slots,a=q2(),i=a.gutter,o=a.supportFlexGap,l=a.wrap,u=bn("col",e),s=u.prefixCls,c=u.direction,f=k(function(){var d,p=e.span,g=e.order,h=e.offset,y=e.push,b=e.pull,w=s.value,O={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(P){var C,T={},M=e[P];typeof M=="number"?T.span=M:Ie(M)==="object"&&(T=M||{}),O=x(x({},O),{},(C={},B(C,"".concat(w,"-").concat(P,"-").concat(T.span),T.span!==void 0),B(C,"".concat(w,"-").concat(P,"-order-").concat(T.order),T.order||T.order===0),B(C,"".concat(w,"-").concat(P,"-offset-").concat(T.offset),T.offset||T.offset===0),B(C,"".concat(w,"-").concat(P,"-push-").concat(T.push),T.push||T.push===0),B(C,"".concat(w,"-").concat(P,"-pull-").concat(T.pull),T.pull||T.pull===0),B(C,"".concat(w,"-rtl"),c.value==="rtl"),C))}),Pe(w,(d={},B(d,"".concat(w,"-").concat(p),p!==void 0),B(d,"".concat(w,"-order-").concat(g),g),B(d,"".concat(w,"-offset-").concat(h),h),B(d,"".concat(w,"-push-").concat(y),y),B(d,"".concat(w,"-pull-").concat(b),b),d),O)}),v=k(function(){var d=e.flex,p=i.value,g={};if(p&&p[0]>0){var h="".concat(p[0]/2,"px");g.paddingLeft=h,g.paddingRight=h}if(p&&p[1]>0&&!o.value){var y="".concat(p[1]/2,"px");g.paddingTop=y,g.paddingBottom=y}return d&&(g.flex=Z2(d),l.value===!1&&!g.minWidth&&(g.minWidth=0)),g});return function(){var d;return m("div",{class:f.value,style:v.value},[(d=r.default)===null||d===void 0?void 0:d.call(r)])}}}),cr=Mr(Q2),jn=Mr(ex);var nx=zt.TabPane,tx=function(){return{prefixCls:String,title:X.any,extra:X.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:X.any,tabList:{type:Array},tabBarExtraContent:X.any,activeTabKey:String,defaultActiveTabKey:String,cover:X.any,onTabChange:{type:Function}}},rx=ce({compatConfig:{MODE:3},name:"ACard",props:tx(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,t){var r=t.slots,a=bn("card",e),i=a.prefixCls,o=a.direction,l=a.size,u=function(v){var d=v.map(function(p,g){return Ct(p)&&!Ui(p)||!Ct(p)?m("li",{style:{width:"".concat(100/v.length,"%")},key:"action-".concat(g)},[m("span",null,[p])]):null});return d},s=function(v){var d;(d=e.onTabChange)===null||d===void 0||d.call(e,v)},c=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d;return v.forEach(function(p){p&&cv(p.type)&&p.type.__ANT_CARD_GRID&&(d=!0)}),d};return function(){var f,v,d,p,g,h,y,b,w=e.headStyle,O=w===void 0?{}:w,P=e.bodyStyle,C=P===void 0?{}:P,T=e.loading,M=e.bordered,A=M===void 0?!0:M,H=e.type,_=e.tabList,L=e.hoverable,R=e.activeTabKey,K=e.defaultActiveTabKey,I=e.tabBarExtraContent,S=I===void 0?ir((f=r.tabBarExtraContent)===null||f===void 0?void 0:f.call(r)):I,E=e.title,N=E===void 0?ir((v=r.title)===null||v===void 0?void 0:v.call(r)):E,$=e.extra,U=$===void 0?ir((d=r.extra)===null||d===void 0?void 0:d.call(r)):$,Z=e.actions,J=Z===void 0?ir((p=r.actions)===null||p===void 0?void 0:p.call(r)):Z,F=e.cover,V=F===void 0?ir((g=r.cover)===null||g===void 0?void 0:g.call(r)):F,Y=Kn((h=r.default)===null||h===void 0?void 0:h.call(r)),j=i.value,ee=(y={},B(y,"".concat(j),!0),B(y,"".concat(j,"-loading"),T),B(y,"".concat(j,"-bordered"),A),B(y,"".concat(j,"-hoverable"),!!L),B(y,"".concat(j,"-contain-grid"),c(Y)),B(y,"".concat(j,"-contain-tabs"),_&&_.length),B(y,"".concat(j,"-").concat(l.value),l.value),B(y,"".concat(j,"-type-").concat(H),!!H),B(y,"".concat(j,"-rtl"),o.value==="rtl"),y),de=C.padding===0||C.padding==="0px"?{padding:"24px"}:void 0,me=m("div",{class:"".concat(j,"-loading-block")},null),ye=m("div",{class:"".concat(j,"-loading-content"),style:de},[m(cr,{gutter:8},{default:function(){return[m(jn,{span:22},{default:function(){return[me]}})]}}),m(cr,{gutter:8},{default:function(){return[m(jn,{span:8},{default:function(){return[me]}}),m(jn,{span:15},{default:function(){return[me]}})]}}),m(cr,{gutter:8},{default:function(){return[m(jn,{span:6},{default:function(){return[me]}}),m(jn,{span:18},{default:function(){return[me]}})]}}),m(cr,{gutter:8},{default:function(){return[m(jn,{span:13},{default:function(){return[me]}}),m(jn,{span:9},{default:function(){return[me]}})]}}),m(cr,{gutter:8},{default:function(){return[m(jn,{span:4},{default:function(){return[me]}}),m(jn,{span:3},{default:function(){return[me]}}),m(jn,{span:16},{default:function(){return[me]}})]}})]),Ee=R!==void 0,ke=(b={size:"large"},B(b,Ee?"activeKey":"defaultActiveKey",Ee?R:K),B(b,"onChange",s),B(b,"class","".concat(j,"-head-tabs")),b),Oe,Ne=_&&_.length?m(zt,ke,{default:function(){return[_.map(function(xe){var Xe=xe.tab,on=xe.slots,Re=on==null?void 0:on.tab;Vn(!on,"Card","tabList slots is deprecated, Please use `customTab` instead.");var Me=Xe!==void 0?Xe:r[Re]?r[Re](xe):null;return Me=rd(r,"customTab",xe,function(){return[Me]}),m(nx,{tab:Me,key:xe.key,disabled:xe.disabled},null)})]},rightExtra:S?function(){return S}:null}):null;(N||U||Ne)&&(Oe=m("div",{class:"".concat(j,"-head"),style:O},[m("div",{class:"".concat(j,"-head-wrapper")},[N&&m("div",{class:"".concat(j,"-head-title")},[N]),U&&m("div",{class:"".concat(j,"-extra")},[U])]),Ne]));var We=V?m("div",{class:"".concat(j,"-cover")},[V]):null,qe=m("div",{class:"".concat(j,"-body"),style:C},[T?ye:Y]),Je=J&&J.length?m("ul",{class:"".concat(j,"-actions")},[u(J)]):null;return m("div",{class:ee,ref:"cardContainerRef"},[Oe,We,Y&&Y.length?qe:null,Je])}}});const Vt=rx;var ax=function(){return{prefixCls:String,title:X.any,description:X.any,avatar:X.any}};const Ki=ce({compatConfig:{MODE:3},name:"ACardMeta",props:ax(),slots:["title","description","avatar"],setup:function(e,t){var r=t.slots,a=bn("card",e),i=a.prefixCls;return function(){var o=B({},"".concat(i.value,"-meta"),!0),l=ut(r,e,"avatar"),u=ut(r,e,"title"),s=ut(r,e,"description"),c=l?m("div",{class:"".concat(i.value,"-meta-avatar")},[l]):null,f=u?m("div",{class:"".concat(i.value,"-meta-title")},[u]):null,v=s?m("div",{class:"".concat(i.value,"-meta-description")},[s]):null,d=f||v?m("div",{class:"".concat(i.value,"-meta-detail")},[f,v]):null;return m("div",{class:o},[c,d])}}});var ix=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}};const Li=ce({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:ix(),setup:function(e,t){var r=t.slots,a=bn("card",e),i=a.prefixCls,o=k(function(){var l;return l={},B(l,"".concat(i.value,"-grid"),!0),B(l,"".concat(i.value,"-grid-hoverable"),e.hoverable),l});return function(){var l;return m("div",{class:o.value},[(l=r.default)===null||l===void 0?void 0:l.call(r)])}}});Vt.Meta=Ki;Vt.Grid=Li;Vt.install=function(n){return n.component(Vt.name,Vt),n.component(Ki.name,Ki),n.component(Li.name,Li),n};var ox=function(){return Xn.Date.now()};const Ja=ox;var lx="Expected a function",ux=Math.max,sx=Math.min;function cx(n,e,t){var r,a,i,o,l,u,s=0,c=!1,f=!1,v=!0;if(typeof n!="function")throw new TypeError(lx);e=Bu(e)||0,Ot(t)&&(c=!!t.leading,f="maxWait"in t,i=f?ux(Bu(t.maxWait)||0,e):i,v="trailing"in t?!!t.trailing:v);function d(C){var T=r,M=a;return r=a=void 0,s=C,o=n.apply(M,T),o}function p(C){return s=C,l=setTimeout(y,e),c?d(C):o}function g(C){var T=C-u,M=C-s,A=e-T;return f?sx(A,i-M):A}function h(C){var T=C-u,M=C-s;return u===void 0||T>=e||T<0||f&&M>=i}function y(){var C=Ja();if(h(C))return b(C);l=setTimeout(y,g(C))}function b(C){return l=void 0,v&&r?d(C):(r=a=void 0,o)}function w(){l!==void 0&&clearTimeout(l),s=0,r=u=a=l=void 0}function O(){return l===void 0?o:b(Ja())}function P(){var C=Ja(),T=h(C);if(r=arguments,a=this,u=C,T){if(l===void 0)return p(u);if(f)return clearTimeout(l),l=setTimeout(y,e),d(u)}return l===void 0&&(l=setTimeout(y,e)),o}return P.cancel=w,P.flush=O,P}var If=Symbol("TreeContextKey"),fx=ce({compatConfig:{MODE:3},name:"TreeContext",props:{value:{type:Object}},setup:function(e,t){var r=t.slots;return yn(If,k(function(){return e.value})),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}}),ko=function(){return pn(If,k(function(){return{}}))},Nf=Symbol("KeysStateKey"),dx=function(e){yn(Nf,e)},Df=function(){return pn(Nf,{expandedKeys:Ve([]),selectedKeys:Ve([]),loadedKeys:Ve([]),loadingKeys:Ve([]),checkedKeys:Ve([]),halfCheckedKeys:Ve([]),expandedKeysSet:k(function(){return new Set}),selectedKeysSet:k(function(){return new Set}),loadedKeysSet:k(function(){return new Set}),loadingKeysSet:k(function(){return new Set}),checkedKeysSet:k(function(){return new Set}),halfCheckedKeysSet:k(function(){return new Set}),flattenNodes:Ve([])})},vx=function(e){for(var t=e.prefixCls,r=e.level,a=e.isStart,i=e.isEnd,o="".concat(t,"-indent-unit"),l=[],u=0;u<r;u+=1){var s;l.push(m("span",{key:u,class:(s={},B(s,o,!0),B(s,"".concat(o,"-start"),a[u]),B(s,"".concat(o,"-end"),i[u]),s)},null))}return m("span",{"aria-hidden":"true",class:"".concat(t,"-indent")},[l])};const px=vx;var Eo={eventKey:[String,Number],prefixCls:String,title:X.any,data:{type:Object,default:void 0},parent:{type:Object,default:void 0},isStart:{type:Array},isEnd:{type:Array},active:{type:Boolean,default:void 0},onMousemove:{type:Function},isLeaf:{type:Boolean,default:void 0},checkable:{type:Boolean,default:void 0},selectable:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},disableCheckbox:{type:Boolean,default:void 0},icon:X.any,switcherIcon:X.any,domRef:{type:Function}},hx={prefixCls:{type:String},motion:{type:Object},focusable:{type:Boolean},activeItem:{type:Object},focused:{type:Boolean},tabindex:{type:Number},checkable:{type:Boolean},selectable:{type:Boolean},disabled:{type:Boolean},height:{type:Number},itemHeight:{type:Number},virtual:{type:Boolean},onScroll:{type:Function},onKeydown:{type:Function},onFocus:{type:Function},onBlur:{type:Function},onActiveChange:{type:Function},onContextmenu:{type:Function},onListChangeStart:{type:Function},onListChangeEnd:{type:Function}},Rf=function(){return{prefixCls:String,focusable:{type:Boolean,default:void 0},activeKey:[Number,String],tabindex:Number,children:X.any,treeData:{type:Array},fieldNames:{type:Object},showLine:{type:[Boolean,Object],default:void 0},showIcon:{type:Boolean,default:void 0},icon:X.any,selectable:{type:Boolean,default:void 0},expandAction:[String,Boolean],disabled:{type:Boolean,default:void 0},multiple:{type:Boolean,default:void 0},checkable:{type:Boolean,default:void 0},checkStrictly:{type:Boolean,default:void 0},draggable:{type:[Function,Boolean]},defaultExpandParent:{type:Boolean,default:void 0},autoExpandParent:{type:Boolean,default:void 0},defaultExpandAll:{type:Boolean,default:void 0},defaultExpandedKeys:{type:Array},expandedKeys:{type:Array},defaultCheckedKeys:{type:Array},checkedKeys:{type:[Object,Array]},defaultSelectedKeys:{type:Array},selectedKeys:{type:Array},allowDrop:{type:Function},dropIndicatorRender:{type:Function},onFocus:{type:Function},onBlur:{type:Function},onKeydown:{type:Function},onContextmenu:{type:Function},onClick:{type:Function},onDblclick:{type:Function},onScroll:{type:Function},onExpand:{type:Function},onCheck:{type:Function},onSelect:{type:Function},onLoad:{type:Function},loadData:{type:Function},loadedKeys:{type:Array},onMouseenter:{type:Function},onMouseleave:{type:Function},onRightClick:{type:Function},onDragstart:{type:Function},onDragenter:{type:Function},onDragover:{type:Function},onDragleave:{type:Function},onDragend:{type:Function},onDrop:{type:Function},onActiveChange:{type:Function},filterTreeNode:{type:Function},motion:X.any,switcherIcon:X.any,height:Number,itemHeight:Number,virtual:{type:Boolean,default:void 0},direction:{type:String},rootClassName:String,rootStyle:Object}},gx=["eventKey","isLeaf","isStart","isEnd","domRef","active","data","onMousemove","selectable"],Qu="open",Zu="close",mx="---";const Fi=ce({compatConfig:{MODE:3},name:"TreeNode",inheritAttrs:!1,props:Eo,isTreeNode:1,slots:["title","icon","switcherIcon"],setup:function(e,t){var r=t.attrs,a=t.slots,i=t.expose;"slots"in e.data,"treeData slots is deprecated, please use ".concat(Object.keys(e.data.slots||{}).map(function(ne){return"`v-slot:"+ne+"` "}),"instead");var o=D(!1),l=ko(),u=Df(),s=u.expandedKeysSet,c=u.selectedKeysSet,f=u.loadedKeysSet,v=u.loadingKeysSet,d=u.checkedKeysSet,p=u.halfCheckedKeysSet,g=l.value,h=g.dragOverNodeKey,y=g.dropPosition,b=g.keyEntities,w=k(function(){return oa(e.eventKey,{expandedKeysSet:s.value,selectedKeysSet:c.value,loadedKeysSet:f.value,loadingKeysSet:v.value,checkedKeysSet:d.value,halfCheckedKeysSet:p.value,dragOverNodeKey:h,dropPosition:y,keyEntities:b})}),O=Bn(function(){return w.value.expanded}),P=Bn(function(){return w.value.selected}),C=Bn(function(){return w.value.checked}),T=Bn(function(){return w.value.loaded}),M=Bn(function(){return w.value.loading}),A=Bn(function(){return w.value.halfChecked}),H=Bn(function(){return w.value.dragOver}),_=Bn(function(){return w.value.dragOverGapTop}),L=Bn(function(){return w.value.dragOverGapBottom}),R=Bn(function(){return w.value.pos}),K=D(),I=k(function(){var ne=e.eventKey,z=l.value.keyEntities,Q=z[ne]||{},Se=Q.children;return!!(Se||[]).length}),S=k(function(){var ne=e.isLeaf,z=l.value.loadData,Q=I.value;return ne===!1?!1:ne||!z&&!Q||z&&T.value&&!Q}),E=k(function(){return S.value?null:O.value?Qu:Zu}),N=k(function(){var ne=e.disabled,z=l.value.disabled;return!!(z||ne)}),$=k(function(){var ne=e.checkable,z=l.value.checkable;return!z||ne===!1?!1:z}),U=k(function(){var ne=e.selectable,z=l.value.selectable;return typeof ne=="boolean"?ne:z}),Z=k(function(){var ne=e.data,z=e.active,Q=e.checkable,Se=e.disableCheckbox,Be=e.disabled,te=e.selectable;return x(x({active:z,checkable:Q,disableCheckbox:Se,disabled:Be,selectable:te},ne),{},{dataRef:ne,data:ne,isLeaf:S.value,checked:C.value,expanded:O.value,loading:M.value,selected:P.value,halfChecked:A.value})}),J=wa(),F=k(function(){var ne=e.eventKey,z=l.value.keyEntities,Q=z[ne]||{},Se=Q.parent;return x(x({},la(Ye({},e,w.value))),{},{parent:Se})}),V=Sn({eventData:F,eventKey:k(function(){return e.eventKey}),selectHandle:K,pos:R,key:J.vnode.key});i(V);var Y=function(z){var Q=l.value.onNodeDoubleClick;Q(z,F.value)},j=function(z){if(!N.value){var Q=l.value.onNodeSelect;z.preventDefault(),Q(z,F.value)}},ee=function(z){if(!N.value){var Q=e.disableCheckbox,Se=l.value.onNodeCheck;if(!(!$.value||Q)){z.preventDefault();var Be=!C.value;Se(z,F.value,Be)}}},de=function(z){var Q=l.value.onNodeClick;Q(z,F.value),U.value?j(z):ee(z)},me=function(z){var Q=l.value.onNodeMouseEnter;Q(z,F.value)},ye=function(z){var Q=l.value.onNodeMouseLeave;Q(z,F.value)},Ee=function(z){var Q=l.value.onNodeContextMenu;Q(z,F.value)},ke=function(z){var Q=l.value.onNodeDragStart;z.stopPropagation(),o.value=!0,Q(z,V);try{z.dataTransfer.setData("text/plain","")}catch{}},Oe=function(z){var Q=l.value.onNodeDragEnter;z.preventDefault(),z.stopPropagation(),Q(z,V)},Ne=function(z){var Q=l.value.onNodeDragOver;z.preventDefault(),z.stopPropagation(),Q(z,V)},We=function(z){var Q=l.value.onNodeDragLeave;z.stopPropagation(),Q(z,V)},qe=function(z){var Q=l.value.onNodeDragEnd;z.stopPropagation(),o.value=!1,Q(z,V)},Je=function(z){var Q=l.value.onNodeDrop;z.preventDefault(),z.stopPropagation(),o.value=!1,Q(z,V)},Le=function(z){var Q=l.value.onNodeExpand;M.value||Q(z,F.value)},xe=function(){var z=e.data,Q=l.value.draggable;return!!(Q&&(!Q.nodeDraggable||Q.nodeDraggable(z)))},Xe=function(){var z=l.value,Q=z.draggable,Se=z.prefixCls;return Q!=null&&Q.icon?m("span",{class:"".concat(Se,"-draggable-icon")},[Q.icon]):null},on=function(){var z,Q,Se,Be=e.switcherIcon,te=Be===void 0?a.switcherIcon||((z=l.value.slots)===null||z===void 0?void 0:z[(Q=e.data)===null||Q===void 0||(Se=Q.slots)===null||Se===void 0?void 0:Se.switcherIcon]):Be,W=l.value.switcherIcon,G=te||W;return typeof G=="function"?G(Z.value):G},Re=function(){var z=l.value,Q=z.loadData,Se=z.onNodeLoad;M.value||Q&&O.value&&!S.value&&!I.value&&!T.value&&Se(F.value)};nn(function(){Re()}),Xt(function(){Re()});var Me=function(){var z=l.value.prefixCls,Q=on();if(S.value)return Q!==!1?m("span",{class:Pe("".concat(z,"-switcher"),"".concat(z,"-switcher-noop"))},[Q]):null;var Se=Pe("".concat(z,"-switcher"),"".concat(z,"-switcher_").concat(O.value?Qu:Zu));return Q!==!1?m("span",{onClick:Le,class:Se},[Q]):null},en=function(){var z,Q,Se=e.disableCheckbox,Be=l.value.prefixCls,te=N.value,W=$.value;return W?m("span",{class:Pe("".concat(Be,"-checkbox"),C.value&&"".concat(Be,"-checkbox-checked"),!C.value&&A.value&&"".concat(Be,"-checkbox-indeterminate"),(te||Se)&&"".concat(Be,"-checkbox-disabled")),onClick:ee},[(z=(Q=l.value).customCheckable)===null||z===void 0?void 0:z.call(Q)]):null},Qe=function(){var z=l.value.prefixCls;return m("span",{class:Pe("".concat(z,"-iconEle"),"".concat(z,"-icon__").concat(E.value||"docu"),M.value&&"".concat(z,"-icon_loading"))},null)},xn=function(){var z=e.disabled,Q=e.eventKey,Se=l.value,Be=Se.draggable,te=Se.dropLevelOffset,W=Se.dropPosition,G=Se.prefixCls,q=Se.indent,se=Se.dropIndicatorRender,he=Se.dragOverNodeKey,ie=Se.direction,re=Be!==!1,Ae=!z&&re&&he===Q;return Ae?se({dropPosition:W,dropLevelOffset:te,indent:q,prefixCls:G,direction:ie}):null},Fn=function(){var z,Q,Se,Be,te=e.icon,W=te===void 0?a.icon:te,G=e.data,q=a.title||((z=l.value.slots)===null||z===void 0?void 0:z[(Q=e.data)===null||Q===void 0||(Se=Q.slots)===null||Se===void 0?void 0:Se.title])||((Be=l.value.slots)===null||Be===void 0?void 0:Be.title)||e.title,se=l.value,he=se.prefixCls,ie=se.showIcon,re=se.icon,Ae=se.loadData,Te=N.value,oe="".concat(he,"-node-content-wrapper"),fe;if(ie){var le,be,Ce=W||((le=l.value.slots)===null||le===void 0?void 0:le[G==null||(be=G.slots)===null||be===void 0?void 0:be.icon])||re;fe=Ce?m("span",{class:Pe("".concat(he,"-iconEle"),"".concat(he,"-icon__customize"))},[typeof Ce=="function"?Ce(Z.value):Ce]):Qe()}else Ae&&M.value&&(fe=Qe());var De;typeof q=="function"?De=q(Z.value):De=q,De=De===void 0?mx:De;var He=m("span",{class:"".concat(he,"-title")},[De]);return m("span",{ref:K,title:typeof q=="string"?q:"",class:Pe("".concat(oe),"".concat(oe,"-").concat(E.value||"normal"),!Te&&(P.value||o.value)&&"".concat(he,"-node-selected")),onMouseenter:me,onMouseleave:ye,onContextmenu:Ee,onClick:de,onDblclick:Y},[fe,He,xn()])};return function(){var ne,z=x(x({},e),r),Q=z.eventKey,Se=z.isLeaf,Be=z.isStart,te=z.isEnd,W=z.domRef,G=z.active;z.data;var q=z.onMousemove,se=z.selectable,he=vn(z,gx),ie=l.value,re=ie.prefixCls,Ae=ie.filterTreeNode,Te=ie.keyEntities,oe=ie.dropContainerKey,fe=ie.dropTargetKey,le=ie.draggingNodeKey,be=N.value,Ce=nf(he,{aria:!0,data:!0}),De=Te[Q]||{},He=De.level,$e=te[te.length-1],Ke=xe(),tn=!be&&Ke,ln=le===Q,Dn=se!==void 0?{"aria-selected":!!se}:void 0;return m("div",x(x({ref:W,class:Pe(r.class,"".concat(re,"-treenode"),(ne={},B(ne,"".concat(re,"-treenode-disabled"),be),B(ne,"".concat(re,"-treenode-switcher-").concat(O.value?"open":"close"),!Se),B(ne,"".concat(re,"-treenode-checkbox-checked"),C.value),B(ne,"".concat(re,"-treenode-checkbox-indeterminate"),A.value),B(ne,"".concat(re,"-treenode-selected"),P.value),B(ne,"".concat(re,"-treenode-loading"),M.value),B(ne,"".concat(re,"-treenode-active"),G),B(ne,"".concat(re,"-treenode-leaf-last"),$e),B(ne,"".concat(re,"-treenode-draggable"),tn),B(ne,"dragging",ln),B(ne,"drop-target",fe===Q),B(ne,"drop-container",oe===Q),B(ne,"drag-over",!be&&H.value),B(ne,"drag-over-gap-top",!be&&_.value),B(ne,"drag-over-gap-bottom",!be&&L.value),B(ne,"filter-node",Ae&&Ae(F.value)),ne)),style:r.style,draggable:tn,"aria-grabbed":ln,onDragstart:tn?ke:void 0,onDragenter:Ke?Oe:void 0,onDragover:Ke?Ne:void 0,onDragleave:Ke?We:void 0,onDrop:Ke?Je:void 0,onDragend:Ke?qe:void 0,onMousemove:q},Dn),Ce),[m(px,{prefixCls:re,level:He,isStart:Be,isEnd:te},null),Xe(),Me(),en(),Fn()])}}});function Zn(n,e){if(!n)return[];var t=n.slice(),r=t.indexOf(e);return r>=0&&t.splice(r,1),t}function it(n,e){var t=(n||[]).slice();return t.indexOf(e)===-1&&t.push(e),t}function _o(n){return n.split("-")}function $f(n,e){return"".concat(n,"-").concat(e)}function yx(n){return n&&n.type&&n.type.isTreeNode}function bx(n,e){var t=[],r=e[n];function a(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];i.forEach(function(o){var l=o.key,u=o.children;t.push(l),a(u)})}return a(r.children),t}function xx(n){if(n.parent){var e=_o(n.pos);return Number(e[e.length-1])===n.parent.children.length-1}return!1}function wx(n){var e=_o(n.pos);return Number(e[e.length-1])===0}function Ju(n,e,t,r,a,i,o,l,u,s){var c,f=n.clientX,v=n.clientY,d=n.target.getBoundingClientRect(),p=d.top,g=d.height,h=(s==="rtl"?-1:1)*(((a==null?void 0:a.x)||0)-f),y=(h-12)/r,b=l[t.eventKey];if(v<p+g/2){var w=o.findIndex(function(I){return I.key===b.key}),O=w<=0?0:w-1,P=o[O].key;b=l[P]}var C=b.key,T=b,M=b.key,A=0,H=0;if(!u.has(C))for(var _=0;_<y&&xx(b);_+=1)b=b.parent,H+=1;var L=e.eventData,R=b.node,K=!0;return wx(b)&&b.level===0&&v<p+g/2&&i({dragNode:L,dropNode:R,dropPosition:-1})&&b.key===t.eventKey?A=-1:(T.children||[]).length&&u.has(M)?i({dragNode:L,dropNode:R,dropPosition:0})?A=0:K=!1:H===0?y>-1.5?i({dragNode:L,dropNode:R,dropPosition:1})?A=1:K=!1:i({dragNode:L,dropNode:R,dropPosition:0})?A=0:i({dragNode:L,dropNode:R,dropPosition:1})?A=1:K=!1:i({dragNode:L,dropNode:R,dropPosition:1})?A=1:K=!1,{dropPosition:A,dropLevelOffset:H,dropTargetKey:b.key,dropTargetPos:b.pos,dragOverNodeKey:M,dropContainerKey:A===0?null:((c=b.parent)===null||c===void 0?void 0:c.key)||null,dropAllowed:K}}function es(n,e){if(n){var t=e.multiple;return t?n.slice():n.length?[n[0]]:n}}function ei(n){if(!n)return null;var e;if(Array.isArray(n))e={checkedKeys:n,halfCheckedKeys:void 0};else if(Ie(n)==="object")e={checkedKeys:n.checked||void 0,halfCheckedKeys:n.halfChecked||void 0};else return null;return e}function Bi(n,e){var t=new Set;function r(a){if(!t.has(a)){var i=e[a];if(i){t.add(a);var o=i.parent,l=i.node;l.disabled||o&&r(o.key)}}}return(n||[]).forEach(function(a){r(a)}),Ge(t)}var Cx=["title","icon","switcherIcon"];function Nr(n,e){return n??e}function Na(n){var e=n||{},t=e.title,r=e._title,a=e.key,i=e.children,o=t||"title";return{title:o,_title:r||[o],key:a||"key",children:i||"children"}}function ji(n){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=Wn(t);return r.map(function(a){var i,o,l,u;if(!yx(a))return null;for(var s=a.children||{},c=a.key,f={},v=0,d=Object.entries(a.props);v<d.length;v++){var p=_e(d[v],2),g=p[0],h=p[1];f[Cs(g)]=h}var y=f.isLeaf,b=f.checkable,w=f.selectable,O=f.disabled,P=f.disableCheckbox,C={isLeaf:y||y===""||void 0,checkable:b||b===""||void 0,selectable:w||w===""||void 0,disabled:O||O===""||void 0,disableCheckbox:P||P===""||void 0},T=x(x({},f),C),M=f.title,A=M===void 0?(i=s.title)===null||i===void 0?void 0:i.call(s,T):M,H=f.icon,_=H===void 0?(o=s.icon)===null||o===void 0?void 0:o.call(s,T):H,L=f.switcherIcon,R=L===void 0?(l=s.switcherIcon)===null||l===void 0?void 0:l.call(s,T):L,K=vn(f,Cx),I=(u=s.default)===null||u===void 0?void 0:u.call(s),S=x(x({},K),{},{title:A,icon:_,switcherIcon:R,key:c,isLeaf:y},C),E=e(I);return E.length&&(S.children=E),S})}return e(n)}function Sx(n,e,t){var r=Na(t),a=r._title,i=r.key,o=r.children,l=new Set(e===!0?[]:e),u=[];function s(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return c.map(function(v,d){for(var p=$f(f?f.pos:"0",d),g=Nr(v[i],p),h,y=0;y<a.length;y+=1){var b=a[y];if(v[b]!==void 0){h=v[b];break}}var w=x(x({},Oa(v,[].concat(Ge(a),[i,o]))),{},{title:h,key:g,parent:f,pos:p,children:null,data:v,isStart:[].concat(Ge(f?f.isStart:[]),[d===0]),isEnd:[].concat(Ge(f?f.isEnd:[]),[d===c.length-1])});return u.push(w),e===!0||l.has(g)?w.children=s(v[o]||[],w):w.children=[],w})}return s(n),u}function Px(n,e,t){var r={};Ie(t)==="object"?r=t:r={externalGetKey:t},r=r||{};var a=r,i=a.childrenPropName,o=a.externalGetKey,l=a.fieldNames,u=Na(l),s=u.key,c=u.children,f=i||c,v;o?typeof o=="string"?v=function(g){return g[o]}:typeof o=="function"&&(v=function(g){return o(g)}):v=function(g,h){return Nr(g[s],h)};function d(p,g,h,y){var b=p?p[f]:n,w=p?$f(h.pos,g):"0",O=p?[].concat(Ge(y),[p]):[];if(p){var P=v(p,w),C={node:p,index:g,pos:w,key:P,parentPos:h.node?h.pos:null,level:h.level+1,nodes:O};e(C)}b&&b.forEach(function(T,M){d(T,M,{node:p,pos:w,level:h?h.level+1:-1},O)})}d(null)}function Kf(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.initWrapper,r=e.processEntity,a=e.onProcessFinished,i=e.externalGetKey,o=e.childrenPropName,l=e.fieldNames,u=arguments.length>2?arguments[2]:void 0,s=i||u,c={},f={},v={posEntities:c,keyEntities:f};return t&&(v=t(v)||v),Px(n,function(d){var p=d.node,g=d.index,h=d.pos,y=d.key,b=d.parentPos,w=d.level,O=d.nodes,P={node:p,nodes:O,index:g,key:y,pos:h,level:w},C=Nr(y,h);c[h]=P,f[C]=P,P.parent=c[b],P.parent&&(P.parent.children=P.parent.children||[],P.parent.children.push(P)),r&&r(P,v)},{externalGetKey:s,childrenPropName:o,fieldNames:l}),a&&a(v),v}function oa(n,e){var t=e.expandedKeysSet,r=e.selectedKeysSet,a=e.loadedKeysSet,i=e.loadingKeysSet,o=e.checkedKeysSet,l=e.halfCheckedKeysSet,u=e.dragOverNodeKey,s=e.dropPosition,c=e.keyEntities,f=c[n],v={eventKey:n,expanded:t.has(n),selected:r.has(n),loaded:a.has(n),loading:i.has(n),checked:o.has(n),halfChecked:l.has(n),pos:String(f?f.pos:""),parent:f.parent,dragOver:u===n&&s===0,dragOverGapTop:u===n&&s===-1,dragOverGapBottom:u===n&&s===1};return v}function la(n){var e=n.data,t=n.expanded,r=n.selected,a=n.checked,i=n.loaded,o=n.loading,l=n.halfChecked,u=n.dragOver,s=n.dragOverGapTop,c=n.dragOverGapBottom,f=n.pos,v=n.active,d=n.eventKey,p=x(x({dataRef:e},e),{},{expanded:t,selected:r,checked:a,loaded:i,loading:o,halfChecked:l,dragOver:u,dragOverGapTop:s,dragOverGapBottom:c,pos:f,active:v,eventKey:d,key:d});return"props"in p||Object.defineProperty(p,"props",{get:function(){return n}}),p}function Lf(n,e){var t=new Set;return n.forEach(function(r){e.has(r)||t.add(r)}),t}function Ox(n){var e=n||{},t=e.disabled,r=e.disableCheckbox,a=e.checkable;return!!(t||r)||a===!1}function Ax(n,e,t,r){for(var a=new Set(n),i=new Set,o=0;o<=t;o+=1){var l=e.get(o)||new Set;l.forEach(function(f){var v=f.key,d=f.node,p=f.children,g=p===void 0?[]:p;a.has(v)&&!r(d)&&g.filter(function(h){return!r(h.node)}).forEach(function(h){a.add(h.key)})})}for(var u=new Set,s=t;s>=0;s-=1){var c=e.get(s)||new Set;c.forEach(function(f){var v=f.parent,d=f.node;if(!(r(d)||!f.parent||u.has(f.parent.key))){if(r(f.parent.node)){u.add(v.key);return}var p=!0,g=!1;(v.children||[]).filter(function(h){return!r(h.node)}).forEach(function(h){var y=h.key,b=a.has(y);p&&!b&&(p=!1),!g&&(b||i.has(y))&&(g=!0)}),p&&a.add(v.key),g&&i.add(v.key),u.add(v.key)}})}return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(Lf(i,a))}}function Tx(n,e,t,r,a){for(var i=new Set(n),o=new Set(e),l=0;l<=r;l+=1){var u=t.get(l)||new Set;u.forEach(function(v){var d=v.key,p=v.node,g=v.children,h=g===void 0?[]:g;!i.has(d)&&!o.has(d)&&!a(p)&&h.filter(function(y){return!a(y.node)}).forEach(function(y){i.delete(y.key)})})}o=new Set;for(var s=new Set,c=r;c>=0;c-=1){var f=t.get(c)||new Set;f.forEach(function(v){var d=v.parent,p=v.node;if(!(a(p)||!v.parent||s.has(v.parent.key))){if(a(v.parent.node)){s.add(d.key);return}var g=!0,h=!1;(d.children||[]).filter(function(y){return!a(y.node)}).forEach(function(y){var b=y.key,w=i.has(b);g&&!w&&(g=!1),!h&&(w||o.has(b))&&(h=!0)}),g||i.delete(d.key),h&&o.add(d.key),s.add(d.key)}})}return{checkedKeys:Array.from(i),halfCheckedKeys:Array.from(Lf(o,i))}}function ni(n,e,t,r,a,i){var o;i?o=i:o=Ox;var l=new Set(n.filter(function(s){var c=!!t[s];return c})),u;return e===!0?u=Ax(l,a,r,o):u=Tx(l,e.halfCheckedKeys,a,r,o),u}function kx(n){var e=D(0),t=Ve();return Ze(function(){var r=new Map,a=0,i=n.value||{};for(var o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var l=i[o],u=l.level,s=r.get(u);s||(s=new Set,r.set(u,s)),s.add(l),a=Math.max(a,u)}e.value=a,t.value=r}),{maxLevel:e,levelEntities:t}}function Ff(n){if(n==null)throw new TypeError("Cannot destructure "+n)}var Ex=["motion","motionNodes","motionType","active","eventKey"];const _x=ce({compatConfig:{MODE:3},name:"MotionTreeNode",inheritAttrs:!1,props:x(x({},Eo),{},{active:Boolean,motion:Object,motionNodes:{type:Array},onMotionStart:Function,onMotionEnd:Function,motionType:String}),slots:["title","icon","switcherIcon","checkable"],setup:function(e,t){var r=t.attrs,a=t.slots,i=D(!0),o=ko(),l=D(!1),u=k(function(){return e.motion?e.motion:Cf()}),s=function(f,v){if(v==="appear"){var d,p;(d=u.value)===null||d===void 0||(p=d.onAfterEnter)===null||p===void 0||p.call(d,f)}else if(v==="leave"){var g,h;(g=u.value)===null||g===void 0||(h=g.onAfterLeave)===null||h===void 0||h.call(g,f)}l.value||e.onMotionEnd(),l.value=!0};return ue(function(){return e.motionNodes},function(){e.motionNodes&&e.motionType==="hide"&&i.value&&dn(function(){i.value=!1})},{immediate:!0,flush:"post"}),nn(function(){e.motionNodes&&e.onMotionStart()}),Tn(function(){e.motionNodes&&s()}),function(){e.motion;var c=e.motionNodes,f=e.motionType,v=e.active,d=e.eventKey,p=vn(e,Ex);return c?m(Qt,x(x({},u.value),{},{appear:f==="show",onAfterAppear:function(h){return s(h,"appear")},onAfterLeave:function(h){return s(h,"leave")}}),{default:function(){return[xt(m("div",{class:"".concat(o.value.prefixCls,"-treenode-motion")},[c.map(function(h){var y=Ye({},(Ff(h.data),h.data)),b=h.title,w=h.key,O=h.isStart,P=h.isEnd;return delete y.children,m(Fi,x(x({},y),{},{title:b,active:v,data:h.data,key:w,eventKey:w,isStart:O,isEnd:P}),a)})]),[[Ft,i.value]])]}}):m(Fi,x(x({domRef:D,class:r.class,style:r.style},p),{},{active:v,eventKey:d}),a)}}});function Mx(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=n.length,r=e.length;if(Math.abs(t-r)!==1)return{add:!1,key:null};function a(i,o){var l=new Map;i.forEach(function(s){l.set(s,!0)});var u=o.filter(function(s){return!l.has(s)});return u.length===1?u[0]:null}return t<r?{add:!0,key:a(n,e)}:{add:!1,key:a(e,n)}}function ns(n,e,t){var r=n.findIndex(function(l){return l.key===t}),a=n[r+1],i=e.findIndex(function(l){return l.key===t});if(a){var o=e.findIndex(function(l){return l.key===a.key});return e.slice(i+1,o)}return e.slice(i+1)}var Ix=["prefixCls","selectable","checkable","disabled","motion","height","itemHeight","virtual","focusable","activeItem","focused","tabindex","onKeydown","onFocus","onBlur","onListChangeStart","onListChangeEnd"],ts={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Nx=function(){},Tt="RC_TREE_MOTION_".concat(Math.random()),Hi={key:Tt},Bf={key:Tt,level:0,index:0,pos:"0",node:Hi,nodes:[Hi]},rs={parent:null,children:[],pos:Bf.pos,data:Hi,title:null,key:Tt,isStart:[],isEnd:[]};function as(n,e,t,r){return e===!1||!t?n:n.slice(0,Math.ceil(t/r)+1)}function is(n){var e=n.key,t=n.pos;return Nr(e,t)}function Dx(n){for(var e=String(n.key),t=n;t.parent;)t=t.parent,e="".concat(t.key," > ").concat(e);return e}const Rx=ce({compatConfig:{MODE:3},name:"NodeList",inheritAttrs:!1,props:hx,setup:function(e,t){var r=t.expose,a=t.attrs,i=D(),o=D(),l=Df(),u=l.expandedKeys,s=l.flattenNodes;r({scrollTo:function(b){i.value.scrollTo(b)},getIndentWidth:function(){return o.value.offsetWidth}});var c=Ve(s.value),f=Ve([]),v=D(null);function d(){c.value=s.value,f.value=[],v.value=null,e.onListChangeEnd()}var p=ko();ue([function(){return u.value.slice()},s],function(y,b){var w=_e(y,2),O=w[0],P=w[1],C=_e(b,2),T=C[0],M=C[1],A=Mx(T,O);if(A.key!==null){var H=e.virtual,_=e.height,L=e.itemHeight;if(A.add){var R=M.findIndex(function($){var U=$.key;return U===A.key}),K=as(ns(M,P,A.key),H,_,L),I=M.slice();I.splice(R+1,0,rs),c.value=I,f.value=K,v.value="show"}else{var S=P.findIndex(function($){var U=$.key;return U===A.key}),E=as(ns(P,M,A.key),H,_,L),N=P.slice();N.splice(S+1,0,rs),c.value=N,f.value=E,v.value="hide"}}else M!==P&&(c.value=P)}),ue(function(){return p.value.dragging},function(y){y||d()});var g=k(function(){return e.motion===void 0?c.value:s.value}),h=function(){e.onActiveChange(null)};return function(){var y=x(x({},e),a),b=y.prefixCls;y.selectable,y.checkable;var w=y.disabled,O=y.motion,P=y.height,C=y.itemHeight,T=y.virtual,M=y.focusable,A=y.activeItem,H=y.focused,_=y.tabindex,L=y.onKeydown,R=y.onFocus,K=y.onBlur,I=y.onListChangeStart;y.onListChangeEnd;var S=vn(y,Ix);return m(Cn,null,[H&&A&&m("span",{style:ts,"aria-live":"assertive"},[Dx(A)]),m("div",null,[m("input",{style:ts,disabled:M===!1||w,tabindex:M!==!1?_:null,onKeydown:L,onFocus:R,onBlur:K,value:"",onChange:Nx,"aria-label":"for screen reader"},null)]),m("div",{class:"".concat(b,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden"}},[m("div",{class:"".concat(b,"-indent")},[m("div",{ref:o,class:"".concat(b,"-indent-unit")},null)])]),m(Ay,x(x({},Oa(S,["onActiveChange"])),{},{data:g.value,itemKey:is,height:P,fullHeight:!1,virtual:T,itemHeight:C,prefixCls:"".concat(b,"-list"),ref:i,onVisibleChange:function(N,$){var U=new Set(N),Z=$.filter(function(J){return!U.has(J)});Z.some(function(J){return is(J)===Tt})&&d()}}),{default:function(N){var $=N.pos,U=Ye({},(Ff(N.data),N.data)),Z=N.title,J=N.key,F=N.isStart,V=N.isEnd,Y=Nr(J,$);return delete U.key,delete U.children,m(_x,x(x({},U),{},{eventKey:Y,title:Z,active:!!A&&J===A.key,data:N.data,isStart:F,isEnd:V,motion:O,motionNodes:J===Tt?f.value:null,motionType:v.value,onMotionStart:I,onMotionEnd:d,onMousemove:h}),null)}})])}}});function $x(n){var e=n.dropPosition,t=n.dropLevelOffset,r=n.indent,a={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:"".concat(2,"px")};switch(e){case-1:a.top=0,a.left="".concat(-t*r,"px");break;case 1:a.bottom=0,a.left="".concat(-t*r,"px");break;case 0:a.bottom=0,a.left="".concat(r);break}return m("div",{style:a},null)}var Kx=10;const Lx=ce({compatConfig:{MODE:3},name:"Tree",inheritAttrs:!1,slots:["checkable","title","icon","titleRender"],props:Zt(Rf(),{prefixCls:"vc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,expandAction:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:$x,allowDrop:function(){return!0}}),setup:function(e,t){var r=t.attrs,a=t.slots,i=t.expose,o=D(!1),l={},u=D(),s=Ve([]),c=Ve([]),f=Ve([]),v=Ve([]),d=Ve([]),p=Ve([]),g={},h=Sn({draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null}),y=Ve([]);ue([function(){return e.treeData},function(){return e.children}],function(){y.value=e.treeData!==void 0?wt(e.treeData).slice():ji(wt(e.children))},{immediate:!0,deep:!0});var b=Ve({}),w=D(!1),O=D(null),P=D(!1),C=k(function(){return Na(e.fieldNames)}),T=D(),M=null,A=null,H=null,_=k(function(){return{expandedKeysSet:L.value,selectedKeysSet:R.value,loadedKeysSet:K.value,loadingKeysSet:I.value,checkedKeysSet:S.value,halfCheckedKeysSet:E.value,dragOverNodeKey:h.dragOverNodeKey,dropPosition:h.dropPosition,keyEntities:b.value}}),L=k(function(){return new Set(p.value)}),R=k(function(){return new Set(s.value)}),K=k(function(){return new Set(v.value)}),I=k(function(){return new Set(d.value)}),S=k(function(){return new Set(c.value)}),E=k(function(){return new Set(f.value)});Ze(function(){if(y.value){var te=Kf(y.value,{fieldNames:C.value});b.value=x(B({},Tt,Bf),te.keyEntities)}});var N=!1;ue([function(){return e.expandedKeys},function(){return e.autoExpandParent},b],function(te,W){var G=_e(te,2);G[0];var q=G[1],se=_e(W,2);se[0];var he=se[1],ie=p.value;if(e.expandedKeys!==void 0||N&&q!==he)ie=e.autoExpandParent||!N&&e.defaultExpandParent?Bi(e.expandedKeys,b.value):e.expandedKeys;else if(!N&&e.defaultExpandAll){var re=x({},b.value);delete re[Tt],ie=Object.keys(re).map(function(Ae){return re[Ae].key})}else!N&&e.defaultExpandedKeys&&(ie=e.autoExpandParent||e.defaultExpandParent?Bi(e.defaultExpandedKeys,b.value):e.defaultExpandedKeys);ie&&(p.value=ie),N=!0},{immediate:!0});var $=Ve([]);Ze(function(){$.value=Sx(y.value,p.value,C.value)}),Ze(function(){e.selectable&&(e.selectedKeys!==void 0?s.value=es(e.selectedKeys,e):!N&&e.defaultSelectedKeys&&(s.value=es(e.defaultSelectedKeys,e)))});var U=kx(b),Z=U.maxLevel,J=U.levelEntities;Ze(function(){if(e.checkable){var te;if(e.checkedKeys!==void 0?te=ei(e.checkedKeys)||{}:!N&&e.defaultCheckedKeys?te=ei(e.defaultCheckedKeys)||{}:y.value&&(te=ei(e.checkedKeys)||{checkedKeys:c.value,halfCheckedKeys:f.value}),te){var W=te,G=W.checkedKeys,q=G===void 0?[]:G,se=W.halfCheckedKeys,he=se===void 0?[]:se;if(!e.checkStrictly){var ie=ni(q,!0,b.value,Z.value,J.value);q=ie.checkedKeys,he=ie.halfCheckedKeys}c.value=q,f.value=he}}}),Ze(function(){e.loadedKeys&&(v.value=e.loadedKeys)});var F=function(){Ye(h,{dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})},V=function(W){T.value.scrollTo(W)};ue(function(){return e.activeKey},function(){e.activeKey!==void 0&&(O.value=e.activeKey)},{immediate:!0}),ue(O,function(te){dn(function(){te!==null&&V({key:te})})},{immediate:!0,flush:"post"});var Y=function(W){e.expandedKeys===void 0&&(p.value=W)},j=function(){h.draggingNodeKey!==null&&Ye(h,{draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),M=null,H=null},ee=function(W,G){var q=e.onDragend;h.dragOverNodeKey=null,j(),q==null||q({event:W,node:G.eventData}),A=null},de=function te(W){ee(W,null),window.removeEventListener("dragend",te)},me=function(W,G){var q=e.onDragstart,se=G.eventKey,he=G.eventData;A=G,M={x:W.clientX,y:W.clientY};var ie=Zn(p.value,se);h.draggingNodeKey=se,h.dragChildrenKeys=bx(se,b.value),u.value=T.value.getIndentWidth(),Y(ie),window.addEventListener("dragend",de),q&&q({event:W,node:he})},ye=function(W,G){var q=e.onDragenter,se=e.onExpand,he=e.allowDrop,ie=e.direction,re=G.pos,Ae=G.eventKey;if(H!==Ae&&(H=Ae),!A){F();return}var Te=Ju(W,A,G,u.value,M,he,$.value,b.value,L.value,ie),oe=Te.dropPosition,fe=Te.dropLevelOffset,le=Te.dropTargetKey,be=Te.dropContainerKey,Ce=Te.dropTargetPos,De=Te.dropAllowed,He=Te.dragOverNodeKey;if(h.dragChildrenKeys.indexOf(le)!==-1||!De){F();return}if(l||(l={}),Object.keys(l).forEach(function($e){clearTimeout(l[$e])}),A.eventKey!==G.eventKey&&(l[re]=window.setTimeout(function(){if(h.draggingNodeKey!==null){var $e=p.value.slice(),Ke=b.value[G.eventKey];Ke&&(Ke.children||[]).length&&($e=it(p.value,G.eventKey)),Y($e),se&&se($e,{node:G.eventData,expanded:!0,nativeEvent:W})}},800)),A.eventKey===le&&fe===0){F();return}Ye(h,{dragOverNodeKey:He,dropPosition:oe,dropLevelOffset:fe,dropTargetKey:le,dropContainerKey:be,dropTargetPos:Ce,dropAllowed:De}),q&&q({event:W,node:G.eventData,expandedKeys:p.value})},Ee=function(W,G){var q=e.onDragover,se=e.allowDrop,he=e.direction;if(A){var ie=Ju(W,A,G,u.value,M,se,$.value,b.value,L.value,he),re=ie.dropPosition,Ae=ie.dropLevelOffset,Te=ie.dropTargetKey,oe=ie.dropContainerKey,fe=ie.dropAllowed,le=ie.dropTargetPos,be=ie.dragOverNodeKey;h.dragChildrenKeys.indexOf(Te)!==-1||!fe||(A.eventKey===Te&&Ae===0?h.dropPosition===null&&h.dropLevelOffset===null&&h.dropTargetKey===null&&h.dropContainerKey===null&&h.dropTargetPos===null&&h.dropAllowed===!1&&h.dragOverNodeKey===null||F():re===h.dropPosition&&Ae===h.dropLevelOffset&&Te===h.dropTargetKey&&oe===h.dropContainerKey&&le===h.dropTargetPos&&fe===h.dropAllowed&&be===h.dragOverNodeKey||Ye(h,{dropPosition:re,dropLevelOffset:Ae,dropTargetKey:Te,dropContainerKey:oe,dropTargetPos:le,dropAllowed:fe,dragOverNodeKey:be}),q&&q({event:W,node:G.eventData}))}},ke=function(W,G){H===G.eventKey&&!W.currentTarget.contains(W.relatedTarget)&&(F(),H=null);var q=e.onDragleave;q&&q({event:W,node:G.eventData})},Oe=function(W,G){var q,se=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,he=h.dragChildrenKeys,ie=h.dropPosition,re=h.dropTargetKey,Ae=h.dropTargetPos,Te=h.dropAllowed;if(Te){var oe=e.onDrop;if(h.dragOverNodeKey=null,j(),re!==null){var fe=x(x({},oa(re,wt(_.value))),{},{active:((q=z.value)===null||q===void 0?void 0:q.key)===re,data:b.value[re].node});he.indexOf(re);var le=_o(Ae),be={event:W,node:la(fe),dragNode:A?A.eventData:null,dragNodesKeys:[A.eventKey].concat(he),dropToGap:ie!==0,dropPosition:ie+Number(le[le.length-1])};se||oe==null||oe(be),A=null}}},Ne=function(W,G){var q=G.expanded,se=G.key,he=$.value.filter(function(re){return re.key===se})[0],ie=la(x(x({},oa(se,_.value)),{},{data:he.data}));Y(q?Zn(p.value,se):it(p.value,se)),Qe(W,ie)},We=function(W,G){var q=e.onClick,se=e.expandAction;se==="click"&&Ne(W,G),q&&q(W,G)},qe=function(W,G){var q=e.onDblclick,se=e.expandAction;(se==="doubleclick"||se==="dblclick")&&Ne(W,G),q&&q(W,G)},Je=function(W,G){var q=s.value,se=e.onSelect,he=e.multiple,ie=G.selected,re=G[C.value.key],Ae=!ie;Ae?he?q=it(q,re):q=[re]:q=Zn(q,re);var Te=b.value,oe=q.map(function(fe){var le=Te[fe];return le?le.node:null}).filter(function(fe){return fe});e.selectedKeys===void 0&&(s.value=q),se&&se(q,{event:"select",selected:Ae,node:G,selectedNodes:oe,nativeEvent:W})},Le=function(W,G,q){var se=e.checkStrictly,he=e.onCheck,ie=G[C.value.key],re,Ae={event:"check",node:G,checked:q,nativeEvent:W},Te=b.value;if(se){var oe=q?it(c.value,ie):Zn(c.value,ie),fe=Zn(f.value,ie);re={checked:oe,halfChecked:fe},Ae.checkedNodes=oe.map(function($e){return Te[$e]}).filter(function($e){return $e}).map(function($e){return $e.node}),e.checkedKeys===void 0&&(c.value=oe)}else{var le=ni([].concat(Ge(c.value),[ie]),!0,Te,Z.value,J.value),be=le.checkedKeys,Ce=le.halfCheckedKeys;if(!q){var De=new Set(be);De.delete(ie);var He=ni(Array.from(De),{checked:!1,halfCheckedKeys:Ce},Te,Z.value,J.value);be=He.checkedKeys,Ce=He.halfCheckedKeys}re=be,Ae.checkedNodes=[],Ae.checkedNodesPositions=[],Ae.halfCheckedKeys=Ce,be.forEach(function($e){var Ke=Te[$e];if(Ke){var tn=Ke.node,ln=Ke.pos;Ae.checkedNodes.push(tn),Ae.checkedNodesPositions.push({node:tn,pos:ln})}}),e.checkedKeys===void 0&&(c.value=be,f.value=Ce)}he&&he(re,Ae)},xe=function(W){var G=W[C.value.key],q=new Promise(function(se,he){var ie=e.loadData,re=e.onLoad;if(!ie||K.value.has(G)||I.value.has(G))return null;var Ae=ie(W);Ae.then(function(){var Te=it(v.value,G),oe=Zn(d.value,G);re&&re(Te,{event:"load",node:W}),e.loadedKeys===void 0&&(v.value=Te),d.value=oe,se()}).catch(function(Te){var oe=Zn(d.value,G);if(d.value=oe,g[G]=(g[G]||0)+1,g[G]>=Kx){var fe=it(v.value,G);e.loadedKeys===void 0&&(v.value=fe),se()}he(Te)}),d.value=it(d.value,G)});return q.catch(function(){}),q},Xe=function(W,G){var q=e.onMouseenter;q&&q({event:W,node:G})},on=function(W,G){var q=e.onMouseleave;q&&q({event:W,node:G})},Re=function(W,G){var q=e.onRightClick;q&&(W.preventDefault(),q({event:W,node:G}))},Me=function(W){var G=e.onFocus;w.value=!0,G&&G(W)},en=function(W){var G=e.onBlur;w.value=!1,ne(null),G&&G(W)},Qe=function(W,G){var q=p.value,se=e.onExpand,he=e.loadData,ie=G.expanded,re=G[C.value.key];if(!P.value){q.indexOf(re);var Ae=!ie;if(Ae?q=it(q,re):q=Zn(q,re),Y(q),se&&se(q,{node:G,expanded:Ae,nativeEvent:W}),Ae&&he){var Te=xe(G);Te&&Te.then(function(){}).catch(function(oe){var fe=Zn(p.value,re);Y(fe),Promise.reject(oe)})}}},xn=function(){P.value=!0},Fn=function(){setTimeout(function(){P.value=!1})},ne=function(W){var G=e.onActiveChange;O.value!==W&&(e.activeKey!==void 0&&(O.value=W),W!==null&&V({key:W}),G&&G(W))},z=k(function(){return O.value===null?null:$.value.find(function(te){var W=te.key;return W===O.value})||null}),Q=function(W){var G=$.value.findIndex(function(he){var ie=he.key;return ie===O.value});G===-1&&W<0&&(G=$.value.length),G=(G+W+$.value.length)%$.value.length;var q=$.value[G];if(q){var se=q.key;ne(se)}else ne(null)},Se=k(function(){return la(x(x({},oa(O.value,_.value)),{},{data:z.value.data,active:!0}))}),Be=function(W){var G=e.onKeydown,q=e.checkable,se=e.selectable;switch(W.which){case sn.UP:{Q(-1),W.preventDefault();break}case sn.DOWN:{Q(1),W.preventDefault();break}}var he=z.value;if(he&&he.data){var ie=he.data.isLeaf===!1||!!(he.data.children||[]).length,re=Se.value;switch(W.which){case sn.LEFT:{ie&&L.value.has(O.value)?Qe({},re):he.parent&&ne(he.parent.key),W.preventDefault();break}case sn.RIGHT:{ie&&!L.value.has(O.value)?Qe({},re):he.children&&he.children.length&&ne(he.children[0].key),W.preventDefault();break}case sn.ENTER:case sn.SPACE:{q&&!re.disabled&&re.checkable!==!1&&!re.disableCheckbox?Le({},re,!S.value.has(O.value)):!q&&se&&!re.disabled&&re.selectable!==!1&&Je({},re);break}}}G&&G(W)};return i({onNodeExpand:Qe,scrollTo:V,onKeydown:Be,selectedKeys:k(function(){return s.value}),checkedKeys:k(function(){return c.value}),halfCheckedKeys:k(function(){return f.value}),loadedKeys:k(function(){return v.value}),loadingKeys:k(function(){return d.value}),expandedKeys:k(function(){return p.value})}),kr(function(){window.removeEventListener("dragend",de),o.value=!0}),dx({expandedKeys:p,selectedKeys:s,loadedKeys:v,loadingKeys:d,checkedKeys:c,halfCheckedKeys:f,expandedKeysSet:L,selectedKeysSet:R,loadedKeysSet:K,loadingKeysSet:I,checkedKeysSet:S,halfCheckedKeysSet:E,flattenNodes:$}),function(){var te,W=h.draggingNodeKey,G=h.dropLevelOffset,q=h.dropContainerKey,se=h.dropTargetKey,he=h.dropPosition,ie=h.dragOverNodeKey,re=e.prefixCls,Ae=e.showLine,Te=e.focusable,oe=e.tabindex,fe=oe===void 0?0:oe,le=e.selectable,be=e.showIcon,Ce=e.icon,De=Ce===void 0?a.icon:Ce,He=e.switcherIcon,$e=e.draggable,Ke=e.checkable,tn=e.checkStrictly,ln=e.disabled,Dn=e.motion,rn=e.loadData,En=e.filterTreeNode,_n=e.height,Rn=e.itemHeight,hn=e.virtual,Mn=e.dropIndicatorRender,Dr=e.onContextmenu,It=e.onScroll,Rr=e.direction,dt=e.rootClassName,$r=e.rootStyle,vt=r.class,Da=r.style,Ra=nf(x(x({},e),r),{aria:!0,data:!0}),Kr;return $e&&(Ie($e)==="object"?Kr=$e:typeof $e=="function"?Kr={nodeDraggable:$e}:Kr={}),m(fx,{value:{prefixCls:re,selectable:le,showIcon:be,icon:De,switcherIcon:He,draggable:Kr,draggingNodeKey:W,checkable:Ke,customCheckable:a.checkable,checkStrictly:tn,disabled:ln,keyEntities:b.value,dropLevelOffset:G,dropContainerKey:q,dropTargetKey:se,dropPosition:he,dragOverNodeKey:ie,dragging:W!==null,indent:u.value,direction:Rr,dropIndicatorRender:Mn,loadData:rn,filterTreeNode:En,onNodeClick:We,onNodeDoubleClick:qe,onNodeExpand:Qe,onNodeSelect:Je,onNodeCheck:Le,onNodeLoad:xe,onNodeMouseEnter:Xe,onNodeMouseLeave:on,onNodeContextMenu:Re,onNodeDragStart:me,onNodeDragEnter:ye,onNodeDragOver:Ee,onNodeDragLeave:ke,onNodeDragEnd:ee,onNodeDrop:Oe,slots:a}},{default:function(){return[m("div",{role:"tree",class:Pe(re,vt,dt,(te={},B(te,"".concat(re,"-show-line"),Ae),B(te,"".concat(re,"-focused"),w.value),B(te,"".concat(re,"-active-focused"),O.value!==null),te)),style:$r},[m(Rx,x({ref:T,prefixCls:re,style:Da,disabled:ln,selectable:le,checkable:!!Ke,motion:Dn,height:_n,itemHeight:Rn,virtual:hn,focusable:Te,focused:w.value,tabindex:fe,activeItem:z.value,onFocus:Me,onBlur:en,onKeydown:Be,onActiveChange:ne,onListChangeStart:xn,onListChangeEnd:Fn,onContextmenu:Dr,onScroll:It},Ra),null)])]}})}}});var Fx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"};const Bx=Fx;function os(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){jx(n,a,t[a])})}return n}function jx(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Mo=function(e,t){var r=os({},e,t.attrs);return m(an,os({},r,{icon:Bx}),null)};Mo.displayName="FileOutlined";Mo.inheritAttrs=!1;const jf=Mo;var Hx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"minus-square",theme:"outlined"};const zx=Hx;function ls(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Vx(n,a,t[a])})}return n}function Vx(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Io=function(e,t){var r=ls({},e,t.attrs);return m(an,ls({},r,{icon:zx}),null)};Io.displayName="MinusSquareOutlined";Io.inheritAttrs=!1;const Gx=Io;var Ux={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"plus-square",theme:"outlined"};const Wx=Ux;function us(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){qx(n,a,t[a])})}return n}function qx(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var No=function(e,t){var r=us({},e,t.attrs);return m(an,us({},r,{icon:Wx}),null)};No.displayName="PlusSquareOutlined";No.inheritAttrs=!1;const Yx=No;var Xx={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"filled"};const Qx=Xx;function ss(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){Zx(n,a,t[a])})}return n}function Zx(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Do=function(e,t){var r=ss({},e,t.attrs);return m(an,ss({},r,{icon:Qx}),null)};Do.displayName="CaretDownFilled";Do.inheritAttrs=!1;const Jx=Do;function ew(n,e,t,r){var a=r.isLeaf,i=r.expanded,o=r.loading,l=e;if(o)return m(vc,{class:"".concat(n,"-switcher-loading-icon")},null);var u;t&&Ie(t)==="object"&&(u=t.showLeafIcon);var s=null,c="".concat(n,"-switcher-icon");return a?(t&&(Ie(t)==="object"&&!u?s=m("span",{class:"".concat(n,"-switcher-leaf-line")},null):s=m(jf,{class:"".concat(n,"-switcher-line-icon")},null)),s):(s=m(Jx,{class:c},null),t&&(s=i?m(Gx,{class:"".concat(n,"-switcher-line-icon")},null):m(Yx,{class:"".concat(n,"-switcher-line-icon")},null)),typeof e=="function"?l=e(x(x({},r),{},{defaultIcon:s,switcherCls:c})):Er(l)&&(l=zi(l,{class:c})),l||s)}var cs=4;function nw(n){var e,t=n.dropPosition,r=n.dropLevelOffset,a=n.prefixCls,i=n.indent,o=n.direction,l=o===void 0?"ltr":o,u=l==="ltr"?"left":"right",s=l==="ltr"?"right":"left",c=(e={},B(e,u,"".concat(-r*i+cs,"px")),B(e,s,0),e);switch(t){case-1:c.top="".concat(-3,"px");break;case 1:c.bottom="".concat(-3,"px");break;default:c.bottom="".concat(-3,"px"),c[u]="".concat(i+cs,"px");break}return m("div",{style:c,class:"".concat(a,"-drop-indicator")},null)}var Hf=function(){var e=Rf();return x(x({},e),{},{showLine:{type:[Boolean,Object],default:void 0},multiple:{type:Boolean,default:void 0},autoExpandParent:{type:Boolean,default:void 0},checkStrictly:{type:Boolean,default:void 0},checkable:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},defaultExpandAll:{type:Boolean,default:void 0},defaultExpandParent:{type:Boolean,default:void 0},defaultExpandedKeys:{type:Array},expandedKeys:{type:Array},checkedKeys:{type:[Array,Object]},defaultCheckedKeys:{type:Array},selectedKeys:{type:Array},defaultSelectedKeys:{type:Array},selectable:{type:Boolean,default:void 0},loadedKeys:{type:Array},draggable:{type:Boolean,default:void 0},showIcon:{type:Boolean,default:void 0},icon:{type:Function},switcherIcon:X.any,prefixCls:String,replaceFields:{type:Object},blockNode:{type:Boolean,default:void 0},openAnimation:X.any,onDoubleclick:e.onDblclick,"onUpdate:selectedKeys":Function,"onUpdate:checkedKeys":Function,"onUpdate:expandedKeys":Function})};const ua=ce({compatConfig:{MODE:3},name:"ATree",inheritAttrs:!1,props:Zt(Hf(),{checkable:!1,selectable:!0,showIcon:!1,blockNode:!1}),slots:["icon","title","switcherIcon","titleRender"],setup:function(e,t){var r=t.attrs,a=t.expose,i=t.emit,o=t.slots;e.treeData===void 0&&o.default;var l=bn("tree",e),u=l.prefixCls,s=l.direction,c=l.virtual,f=D(),v=function(y){var b;(b=f.value)===null||b===void 0||b.scrollTo(y)};a({treeRef:f,onNodeExpand:function(){for(var y,b=arguments.length,w=new Array(b),O=0;O<b;O++)w[O]=arguments[O];(y=f.value)===null||y===void 0||y.onNodeExpand.apply(y,w)},scrollTo:v,selectedKeys:k(function(){var h;return(h=f.value)===null||h===void 0?void 0:h.selectedKeys}),checkedKeys:k(function(){var h;return(h=f.value)===null||h===void 0?void 0:h.checkedKeys}),halfCheckedKeys:k(function(){var h;return(h=f.value)===null||h===void 0?void 0:h.halfCheckedKeys}),loadedKeys:k(function(){var h;return(h=f.value)===null||h===void 0?void 0:h.loadedKeys}),loadingKeys:k(function(){var h;return(h=f.value)===null||h===void 0?void 0:h.loadingKeys}),expandedKeys:k(function(){var h;return(h=f.value)===null||h===void 0?void 0:h.expandedKeys})}),Ze(function(){Vn(e.replaceFields===void 0,"Tree","`replaceFields` is deprecated, please use fieldNames instead")});var d=function(y,b){i("update:checkedKeys",y),i("check",y,b)},p=function(y,b){i("update:expandedKeys",y),i("expand",y,b)},g=function(y,b){i("update:selectedKeys",y),i("select",y,b)};return function(){var h,y=e.showIcon,b=e.showLine,w=e.switcherIcon,O=w===void 0?o.switcherIcon:w,P=e.icon,C=P===void 0?o.icon:P,T=e.blockNode,M=e.checkable,A=e.selectable,H=e.fieldNames,_=H===void 0?e.replaceFields:H,L=e.motion,R=L===void 0?e.openAnimation:L,K=e.itemHeight,I=K===void 0?28:K,S=e.onDoubleclick,E=e.onDblclick,N=x(x(x({},r),Oa(e,["onUpdate:checkedKeys","onUpdate:expandedKeys","onUpdate:selectedKeys","onDoubleclick"])),{},{showLine:!!b,dropIndicatorRender:nw,fieldNames:_,icon:C,itemHeight:I}),$=o.default?Wn(o.default()):void 0;return m(Lx,x(x({},N),{},{virtual:c.value,motion:R,ref:f,prefixCls:u.value,class:Pe((h={},B(h,"".concat(u.value,"-icon-hide"),!y),B(h,"".concat(u.value,"-block-node"),T),B(h,"".concat(u.value,"-unselectable"),!A),B(h,"".concat(u.value,"-rtl"),s.value==="rtl"),h),r.class),direction:s.value,checkable:M,selectable:A,switcherIcon:function(Z){return ew(u.value,O,b,Z)},onCheck:d,onExpand:p,onSelect:g,onDblclick:E||S,children:$}),x(x({},o),{},{checkable:function(){return m("span",{class:"".concat(u.value,"-checkbox-inner")},null)}}))}}});var tw={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};const rw=tw;function fs(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){aw(n,a,t[a])})}return n}function aw(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Ro=function(e,t){var r=fs({},e,t.attrs);return m(an,fs({},r,{icon:rw}),null)};Ro.displayName="FolderOpenOutlined";Ro.inheritAttrs=!1;const iw=Ro;var ow={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};const lw=ow;function ds(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){uw(n,a,t[a])})}return n}function uw(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var $o=function(e,t){var r=ds({},e,t.attrs);return m(an,ds({},r,{icon:lw}),null)};$o.displayName="FolderOutlined";$o.inheritAttrs=!1;const sw=$o;var Jn;(function(n){n[n.None=0]="None",n[n.Start=1]="Start",n[n.End=2]="End"})(Jn||(Jn={}));function Ko(n,e,t){function r(a){var i=a[e.key],o=a[e.children];t(i,a)!==!1&&Ko(o||[],e,t)}n.forEach(r)}function cw(n){var e=n.treeData,t=n.expandedKeys,r=n.startKey,a=n.endKey,i=n.fieldNames,o=i===void 0?{title:"title",key:"key",children:"children"}:i,l=[],u=Jn.None;if(r&&r===a)return[r];if(!r||!a)return[];function s(c){return c===r||c===a}return Ko(e,o,function(c){if(u===Jn.End)return!1;if(s(c)){if(l.push(c),u===Jn.None)u=Jn.Start;else if(u===Jn.Start)return u=Jn.End,!1}else u===Jn.Start&&l.push(c);return t.indexOf(c)!==-1}),l}function ti(n,e,t){var r=Ge(e),a=[];return Ko(n,t,function(i,o){var l=r.indexOf(i);return l!==-1&&(a.push(o),r.splice(l,1)),!!r.length}),a}var fw=["icon","blockNode"],dw=function(){return x(x({},Hf()),{},{expandAction:{type:[Boolean,String]}})};function vw(n){var e=n.isLeaf,t=n.expanded;return e?m(jf,null,null):t?m(iw,null,null):m(sw,null,null)}const ri=ce({compatConfig:{MODE:3},name:"ADirectoryTree",inheritAttrs:!1,props:Zt(dw(),{showIcon:!0,expandAction:"click"}),slots:["icon","title","switcherIcon","titleRender"],setup:function(e,t){var r,a=t.attrs,i=t.slots,o=t.emit,l=t.expose,u=D(e.treeData||ji(Wn((r=i.default)===null||r===void 0?void 0:r.call(i))));ue(function(){return e.treeData},function(){u.value=e.treeData}),Xt(function(){dn(function(){if(e.treeData===void 0&&i.default){var _;u.value=ji(Wn((_=i.default)===null||_===void 0?void 0:_.call(i)))}})});var s=D(),c=D(),f=k(function(){return Na(e.fieldNames)}),v=D(),d=function(L){var R;(R=v.value)===null||R===void 0||R.scrollTo(L)};l({scrollTo:d,selectedKeys:k(function(){var _;return(_=v.value)===null||_===void 0?void 0:_.selectedKeys}),checkedKeys:k(function(){var _;return(_=v.value)===null||_===void 0?void 0:_.checkedKeys}),halfCheckedKeys:k(function(){var _;return(_=v.value)===null||_===void 0?void 0:_.halfCheckedKeys}),loadedKeys:k(function(){var _;return(_=v.value)===null||_===void 0?void 0:_.loadedKeys}),loadingKeys:k(function(){var _;return(_=v.value)===null||_===void 0?void 0:_.loadingKeys}),expandedKeys:k(function(){var _;return(_=v.value)===null||_===void 0?void 0:_.expandedKeys})});var p=function(){var L=Kf(u.value,{fieldNames:f.value}),R=L.keyEntities,K;return e.defaultExpandAll?K=Object.keys(R):e.defaultExpandParent?K=Bi(e.expandedKeys||e.defaultExpandedKeys||[],R):K=e.expandedKeys||e.defaultExpandedKeys,K},g=D(e.selectedKeys||e.defaultSelectedKeys||[]),h=D(p());ue(function(){return e.selectedKeys},function(){e.selectedKeys!==void 0&&(g.value=e.selectedKeys)},{immediate:!0}),ue(function(){return e.expandedKeys},function(){e.expandedKeys!==void 0&&(h.value=e.expandedKeys)},{immediate:!0});var y=function(L,R){var K=R.isLeaf;K||L.shiftKey||L.metaKey||L.ctrlKey||v.value.onNodeExpand(L,R)},b=cx(y,200,{leading:!0}),w=function(L,R){e.expandedKeys===void 0&&(h.value=L),o("update:expandedKeys",L),o("expand",L,R)},O=function(L,R){var K=e.expandAction;K==="click"&&b(L,R),o("click",L,R)},P=function(L,R){var K=e.expandAction;(K==="dblclick"||K==="doubleclick")&&b(L,R),o("doubleclick",L,R),o("dblclick",L,R)},C=function(L,R){var K=e.multiple,I=R.node,S=R.nativeEvent,E=I[f.value.key],N=x(x({},R),{},{selected:!0}),$=(S==null?void 0:S.ctrlKey)||(S==null?void 0:S.metaKey),U=S==null?void 0:S.shiftKey,Z;K&&$?(Z=L,s.value=E,c.value=Z,N.selectedNodes=ti(u.value,Z,f.value)):K&&U?(Z=Array.from(new Set([].concat(Ge(c.value||[]),Ge(cw({treeData:u.value,expandedKeys:h.value,startKey:E,endKey:s.value,fieldNames:f.value}))))),N.selectedNodes=ti(u.value,Z,f.value)):(Z=[E],s.value=E,c.value=Z,N.selectedNodes=ti(u.value,Z,f.value)),o("update:selectedKeys",Z),o("select",Z,N),e.selectedKeys===void 0&&(g.value=Z)},T=function(L,R){o("update:checkedKeys",L),o("check",L,R)},M=bn("tree",e),A=M.prefixCls,H=M.direction;return function(){var _=Pe("".concat(A.value,"-directory"),B({},"".concat(A.value,"-directory-rtl"),H.value==="rtl"),a.class),L=e.icon,R=L===void 0?i.icon:L,K=e.blockNode,I=K===void 0?!0:K,S=vn(e,fw);return m(ua,x(x(x({},a),{},{icon:R||vw,ref:v,blockNode:I},S),{},{prefixCls:A.value,class:_,expandedKeys:h.value,selectedKeys:g.value,onSelect:C,onClick:O,onDblclick:P,onExpand:w,onCheck:T}),i)}}});var ai=ce(x(x({},Fi),{},{name:"ATreeNode",props:Eo}));const pw=Ye(ua,{DirectoryTree:ri,TreeNode:ai,install:function(e){return e.component(ua.name,ua),e.component(ai.name,ai),e.component(ri.name,ri),e}});const hw=`# 通信岗位单兵装备操作应用手册\r
\r
## 1.350M电台\r
\r
### 1.1设备介绍\r
\r
##### 以海能达350M电台为例进行界面介绍。\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片1.png)\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片2.png)\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片3.png)\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片4.png)\r
### 1.2设备操作\r
\r
#### 1.2.1开关机、音量调整\r
\r
##### 顺时针旋转右上角旋钮，听到“哒”声后，调整音量大小。\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片5.png)\r
\r
#### 1.2.2查看电量\r
\r
##### 电池电量图标显示条数越多，电池电量越足，当电池电量图标显示，\r
\r
##### 表示电量不足，请尽快充电或者更换电池。\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片6.png)\r
\r
#### 1.2.3更换电池\r
\r
##### 拆开电台电池后盖，更换电池。\r
\r
#### 1.2.4连接、佩戴、使用耳机/肩咪\r
\r
##### 使用螺丝刀逆时针旋开电台右侧保护盖，连接耳机/肩咪。\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片7.png)\r
\r
### 1.3呼叫\r
\r
##### 为保证最佳接收音量，发射时麦克风与嘴的距离请保持 2.5 厘米～ 5\r
\r
##### 厘米。集群模式下，终端未登记或未附着时不能发起呼叫。\r
\r
##### 数字呼叫可以基于数字常规系统和数字集群系统对预设的联系人进行\r
\r
##### 组呼或个呼。\r
\r
##### 呼叫可分为：组呼、个呼、全呼、广播呼叫、包容呼叫、电话呼叫、\r
\r
##### 模拟呼叫等。分别为：\r
\r
##### 组呼： 一对多的呼叫。\r
\r
##### 个呼： 一对一的呼叫。\r
\r
##### 全呼： 对当前数字信道上所有联系人发起的呼叫。\r
\r
##### 广播呼叫： 集群模式下一种特殊的组呼。仅主叫可以按住【PTT】键讲\r
\r
##### 话，被叫只能接收语音。广播呼叫需由经销商为终端开启广播呼叫权限。\r
\r
\r
##### 包容呼叫： 集群模式下终端在通话保持过程中，可以邀请新的组呼联\r
\r
##### 系人加入到该通话中。包容呼叫与普通组呼类似，有相同的抢话权和拆线\r
\r
##### 功能。目前包容呼叫仅支持普通组呼。包容呼叫需由经销商为终端开启包\r
\r
##### 容呼叫权限。\r
\r
##### 电话呼叫： 指终端与电话之间的呼叫。中转台连接PSTN/PABX网关\r
\r
##### 设备接入PSTN/PABX系统后，终端通过该中转台与电话进行通信。\r
\r
##### 模拟呼叫： 在模拟信道上发起的呼叫。分为无信令呼叫和和信令呼叫。\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片8.png)\r
\r
### 1.4工作模式切换\r
\r
#### 1.4.1切换方式\r
\r
##### （ 1 ）手动切换。\r
\r
##### 在主菜单中选择“模式 > 手动切换”，再选择终端的常规、集群工作\r
\r
##### 模式。\r
\r
##### 按【立即切换工作模式】快捷键，终端立即切换工作模式。\r
\r
##### （ 2 ）自动切换。\r
\r
##### 为保证信号无覆盖的地区或系统故障时正常通信，您可以开启终端自\r
\r
##### 动切换工作模式功能。\r
\r
##### 在主菜单中选择“模式 > 自动切换”或按【模式自动切换】快捷键，\r
\r
##### LCD显示屏显示 图标，终端将根据信号强度切换模式。\r
\r
\r
#### 1.4.2常规模式\r
\r
##### 当终端切换为常规模式，在相同信道下，可以进行语音或数据通信。\r
\r
##### （ 1 ）选择区域。\r
\r
##### 区域是一个信道组，您可以将具有相同属性的信道列入一个区域中，\r
\r
##### 便于您对现有信道进行有效管理。终端支持 64 个区域，每个区域可以配置\r
\r
##### 256 个信道。可以通过以下两种方式选择区域：\r
\r
##### 进入“区域”菜单后，按【上移】/【下移】键选择所需区域，然后按\r
\r
##### 【确认/菜单】键切换至所选区域。\r
\r
##### 通过【区域上调】/【区域下调】快捷键切换至所选区域。\r
\r
##### （ 2 ）选择信道\r
\r
##### 信道是信号传输的通道。您可以通过以下两种方式选择信道：\r
\r
##### 旋转【信道选择】旋钮选择信道。\r
\r
##### 通过【信道上调】/【信道下调】快捷键切换信道。\r
\r
##### 在主菜单中选择“设置 > 键盘模式 > 信道切换”，可以在待机界面\r
\r
##### 输入信道号切换信道。\r
\r
##### 如果开启了语音播报，终端开机或切换信道时播报信道。\r
\r
#### 1.4.3集群模式\r
\r
##### 当终端切换为集群模式，在基站网络覆盖范围内，登记成功后，可以\r
\r
##### 进行语音或数据通信。\r
\r
##### （ 1 ）登记\r
\r
##### 终端开机后自动开始扫描，以搜索可以登记的基站。扫描时，LCD显\r
\r
##### 示屏上显示“正在扫描，请等待！”和扫描状态图标 ，LED指示灯橙色慢\r
\r
##### 闪，同时伴有扫描提示音。扫描到基站信号后，入网登记。\r
\r
\r
#### 1.4.4模式切换\r
\r
##### 模拟/数字常规模式切换：\r
\r
##### 点击菜单键，选择“模式”选项>手动切换>集群模式。\r
\r
##### 点击菜单键，选择“区域”选项>模拟常规。\r
\r
##### 常规模式下，频点调整至支队二级网频点发起呼叫。\r
\r
##### 集群模式下，群组调整至支队一级网频点发起呼叫 。\r
\r
### 1.5电台写频\r
\r
##### 打开 caps 软件，使用手台写频线将手台与电脑连接，点击读频。在常规设置中，打开数字信道，可对各个数字信道进行频点调整。\r
\r
### 1.6电台接入调音台\r
\r
##### 制作手持台至调音台的输入、输出音频线，将手持台接入调音台。将3.5mm 耳机音频线听筒处切开，通过电烙铁连接大杆接口处，安装完毕后接入调音台进行测试。\r
\r
### 1.7电台中继配置、写频\r
\r
##### 打开 caps 软件，使用中继台写频线将中继台与电脑连接，点击读频。在常规设置中，打开数字信道，可对各个数字信道进行频点调整。\r
\r
\r
### 1.8不同场景电台使用建议\r
\r
![](./通信岗位单兵装备操作应用手册/1.350M电台/图片9.jpg)`,gw=`## 2.调音台\r
\r
### 2.1设备介绍\r
\r
#### 2.1.1调音台的分类\r
\r
##### 调音台按用途分，有现场扩声调音台、舞台返听调音台、录音调音台及电台的播出调音台等。歌舞厅、多功能厅、会场可采用扩声调音台。大中型剧场除采用大型调音台外，还需要配置舞台返听调音台，也可能是多台调音台同时使用。\r
\r
##### 调音台按通道的数量分，有 6 路调音台、 8 路调音台、 10 路调音台、12 路调音台、 16 路调音台、 24 路调音台、 32 路调音台、 96 路调音台等，厅堂扩声通常使用 8 - 24 路调音台。\r
\r
##### 按输出方式分，有双声道输出、双声道+4编组、 6 编组或 8 编组+单声道输出MONO+多路矩阵输出等。多功能厅、礼堂、歌舞厅一般可选用带编组的调音台。\r
\r
##### 按信号的处理方式不同，有数字调音台，模拟调音台和媒体矩阵调音台。数字调音台主要用于录音棚和后期节目制作，可实现音质，音效的精细调节。配音、剪接和长距离传输等功能。\r
\r
#### 2.1.2调音台面板介绍\r
\r
##### 以雅马哈 MG06 MG10调音台为例介绍。\r
\r
![](./通信岗位单兵装备操作应用手册/2.调音台/图片1.png)\r
\r
### 2.2调音台的连接\r
\r
#### 2.2.1调音台连接接口\r
\r
##### TRS高阻线路输入接口：高阻线路输入接口通常采用6.35大三芯立体声插头。常做为大信号高输出阻抗设备的输入接口。音源设备DVD、VCD、MP3设备的输出信号通常采用的是高阻抗信号端口。\r
\r
##### XLR低阻抗话筒信号输入接口，低阻通常采用XLR卡侬接口作为平衡输入，常作为低信号、低输出阻抗的输入端口，目前大部分有线话筒都使用低阻抗信号插口与调音台连接。\r
\r
##### RCA莲花头接口，TAPE录音输入接口通常采用RCA接口。\r
\r
\r
#### 2.2.2调音台按钮功能\r
\r
![](./通信岗位单兵装备操作应用手册/2.调音台/图片2.png)\r
\r
![](./通信岗位单兵装备操作应用手册/2.调音台/图片3.png)\r
\r
![](./通信岗位单兵装备操作应用手册/2.调音台/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/2.调音台/图片5.png)\r
\r
![](./通信岗位单兵装备操作应用手册/2.调音台/图片6.png)\r
\r
![](./通信岗位单兵装备操作应用手册/2.调音台/图片7.png)\r
\r
\r
\r
`,mw=`## 3.POC对讲手机\r
\r
### 3.1POC对讲手机介绍\r
\r
##### POC对讲手机为全网通专业对讲终端，支持PTT对讲，分为普通版和专业防爆版。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片1.png)\r
\r
### 3.2POC操作\r
\r
#### 3.2.1基本操作\r
\r
##### 开关机、音量调整至合适大小。\r
\r
##### 长按开机键，待屏幕震动后手机开机。\r
\r
#### 3.2.2群组选择\r
\r
##### 选择支队指挥群组，发起呼叫。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片2.png)\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片3.png) ![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片4.png)\r
\r
#### 3.2.3查看记录\r
\r
##### 查看支队指挥群组内语音、文字、图片记录。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片5.png) ![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片6.png)\r
\r
#### 3.2.4上传资料\r
\r
##### 在支队指挥群组内上传语音、文字、图片、视频、实时视频\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片7.png)\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片8.png)\r
\r
#### 3.2.5发起呼叫\r
\r
##### 发起和支队指挥中心值守 PoC 手机的临时呼叫。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片9.png)\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片10.png)\r
\r
### 3.3POC管理平台操作\r
\r
#### 3.3.1下载，安装，登陆平台\r
\r
\r
##### （ 1 ）登陆http://221.130.16.40:4480/station/下载组件，安装组件。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片11.png)\r
\r
##### （ 2 ）下载组件\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片12.png)\r
\r
##### （ 3 ）安装组件\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片13.png)\r
\r
##### （ 4 ）组件安装成功后，输入账号密码登陆平台。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片14.png)\r
\r
##### （ 5 ）登陆成功后，进入平台界面。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片15.png)\r
\r
#### 3.3.2创建频道群组\r
\r
##### （ 1 ）点击频道，创建频道。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片16.png)\r
\r
##### （ 2 ）设置频道名称，发言时长，最大排队人数，频道描述介绍。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片17.png)\r
\r
##### （ 3 ）选择需要的组成员拉进频道\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片18.png)\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片19.png)\r
\r
\r
##### （ 4 ）如图所示在需要选择的成员左前方框内勾选，勾选完毕后点击创建频道选项。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片20.png)\r
\r
#### 3.3.3 删除频道群组\r
\r
##### （ 1 ）点选需要删除的频道\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片21.png)\r
\r
##### （ 2 ）点击删除按键\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片22.png)\r
\r
##### （ 3 ）确认删除\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片23.png)\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片24.png)\r
\r
#### 3.3.4查看群组信息\r
\r
##### （ 1 ）点击界面上方报告选项\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片25.png)\r
\r
##### （ 2 ）点选界面左边报告内容，根据需要下载所需视频，图像。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片26.png)\r
\r
#### 3.3.5创建临时会话群组\r
\r
##### （ 1 ）点击界面上方会话选项\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片27.png)\r
\r
##### （ 2 ）点击创建会话选项\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片28.png)\r
\r
##### （ 3 ）设置会话名称\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片29.png)\r
\r
##### （ 4 ）选择需要的组成员拉进频道\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片30.png)\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片31.png)\r
\r
##### （ 5 ）会话群组设置成功，进入对话窗口。\r
\r
![](./通信岗位单兵装备操作应用手册/3.POC对讲手机/图片32.png)\r
\r
`,yw=`## 4.卫星电话\r
\r
### 4.1卫星电话介绍\r
\r
##### 卫星电话是基于卫星通信系统来传输信息的通话器，即卫星中继通话器。我们常用的卫星电话为海事卫星电话、铱星电话、天通卫星电话。\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片1.png)\r
\r
### 4.2海事卫星电话\r
\r
#### 4.2.1基本情况\r
\r
##### 海事卫星，是用于海上和陆地间无线电联络的通信卫星。海事卫星是集全球海上常规通讯、遇险与安全通讯、特殊与战备通讯于一体的实用性高科技产物。\r
\r
##### 传统海事通信采用短波频率，受电离层起伏和大气干扰的严重影响，通信质量和可靠性不高。海事卫星和船站间的上、下行线路采用传播损耗和雨致衰减相当小的L波段（上、下行为1.6/1.5吉赫），对通信十分有利。\r
\r
##### 1976年美国先后发射了 3 颗静止轨道的“海事卫星”，各自定点在西经 15 °（大西洋）、东经 176.5°（太平洋）和东经72.5°（印度洋），组成了全球海事卫星通信网。 1981 年 12 月欧洲空间局发射了更大容量的“欧洲海事通信卫星”。 1983 ～ 1984 年，国际通信卫星组织发射了装有海事通信分系统的“国际通信卫星”V号。国际海事卫星组织成立于 1979年 7 月，总部设在伦敦。它于 1982 年接管了原属美国的“海事卫星”系统的业务，到 1982 年底已拥有 37 个成员国。已使用“欧洲海事通信卫星”和具有海事通信转发器的“国际通信卫星”V号（见“国际通信卫星”）。\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片2.png)\r
\r
##### 海事卫星示意图\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片3.png)\r
\r
##### 海事卫星点波束模式与全球覆盖模式示意图\r
\r
#### 4.2.2功能介绍\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片5.png)\r
\r
#### 4.2.3操作步骤\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片6.png)\r
\r
#### 4.2.4拨打方式\r
\r
##### 拨打手机用户： 拨打手机：0086+手持机号码。\r
\r
##### 例如：手机号 13691269245 ；拨打方式：0086+13691269245。\r
\r
##### 拨打固定电话： 拨打固话：0086+区号（去第一个零）+固定电话号码。\r
\r
##### 例如： 010 - 56531002 ；拨打方式：0086+10+5 6531002 。\r
\r
##### 卫星电话拨打卫星电话。\r
\r
##### 拨打方式（ 1 ）：对方卫星电话号码为 1749 ／ 1349 开头的，则0086 +电话号码 。\r
\r
##### 例如拨打： 1749000111 ；拨打方法：0086+1749000111。\r
\r
##### 拨打方式（ 2 ）：对方卫星电话号码为 870 开头的，则00870+电话号码。\r
\r
##### 例如拨打： 00870776523456 ；拨打方法：00870+776523456。\r
\r
##### 普通电话拨打卫星电话。\r
\r
##### 拨打卫星电话号码为 1749 开头的，则直接拨打号码。\r
\r
##### 例如拨打： 1749000111 ；拨打方法：0+1749000111\r
\r
\r
### 4.3铱星电话\r
\r
#### 4.3.1基本情况\r
\r
##### 铱星系统空间段包括 66 颗低轨道智能化小卫星组成的星座。这 66 颗卫星连网形成可交换数字通信系统。每颗卫星的重量约 700 千克，可提供48 个点波束，寿命为 5 年，采用三轴稳定。\r
\r
##### 与目前使用的静止轨道卫星通信系统相比，铱星主要具有两方面的优势： 一是轨道低，传输速度快，信息损耗小，通信质量大大提高；二是不需要专门的地面接收站，每部卫星移动手持电话都可以与卫星连接，这就使地球上人迹罕至的不毛之地、通信落后的边远地区、自然灾害现场的通信都变得畅通无阻。\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片7.png)\r
\r
#### 4.3.2功能介绍\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片8.png)\r
\r
#### 4.3.3操作步骤\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片9.png)\r
\r
#### 4.3.4拨打方式\r
\r
##### 第一类：铱星电话拨出号码。\r
\r
##### 拨打座机号码： 00+ 国家代码 (如：中国86) + 区号 + 座机电话号码。\r
\r
##### 例如拨打：北京号码 63377451 拨打方式：00 86 10 63377451。\r
\r
##### 拨打手机号码： 00+ 国家代码 (如：中国86) + 手机号码。\r
\r
##### 例如拨打： 13691269245 拨打方式：00 86 13691269245。\r
\r
##### 第二类：拨叫铱星电话。\r
\r
##### 固定电话拨打铱星 ：00+14807682500+12位铱星电话号码，固定电话须开通国际长途权限。\r
\r
##### 注意：先拨00+148***00，等待 2 秒钟，听到提示音（英文）后，再继续拨 12 位铱星电话号码。\r
\r
##### 手机拨打铱星： 00+14807682500+12铱星电话号码，手机须开通国际长途权限。\r
\r
##### 注意：先拨00+148***00，等待 2 秒钟，听到提示音（英文）后，再继续拨 12 位铱星电话号码。\r
\r
##### 铱星电话互相拨打 ：00+12位被叫方铱星电话号码。\r
\r
### 4.4铱星电话\r
\r
#### 4.4.1基本情况\r
\r
##### 天通一号卫星移动通信系统是中国自主研制建设的卫星移动通信系统，由空间段、地面段和用户终端组成。空间段计划由多颗地球同步轨道移动通信卫星组成。\r
\r
##### 分别于 2016 年 8 月、 2020 年 11 月、 2021 年 1 月发射天通一号 01星、 02 星、 03 星。\r
\r
##### 天通一号 01 星覆盖区域主要为中国及周边、中东、非洲等相关地区，以及太平洋、印度洋大部分海域。\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片10.png)\r
\r
#### 4.4.2功能介绍\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片11.png)\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片12.png)\r
\r
#### 4.4.3操作步骤\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片13.png)\r
\r
#### 4.4.4拨打方式\r
\r
##### （ 1 ）拨打手机号码。\r
\r
##### 正常输入需要拨打电话号码，直接进行拨打。\r
\r
### （ 2 ）拨打固定电话号码。\r
\r
##### 区号+固定电话号码，直接进行拨打。\r
\r
\r
### 4.5保障要求\r
\r
##### 到达作业点后，应使用电话值守架固定卫星电话，并连接耳机，注册入网后向指挥部或后方指挥中心报告到场情况和卫星电话号码，便于指挥部或后方指挥中心联系。建议中队均配备电话值守架。\r
\r
##### 大部分卫星电话支持外接天线，一般可吸附在车顶，便于行进间通信。\r
\r
##### 从总队测试的情况看，在比较空旷的道路上，行驶速度到达 100 公里每小时，语音通信正常；在城市中心行驶中存在断线，打不通的问题，周围环境对通话还是存在一定的影响。\r
\r
![](./通信岗位单兵装备操作应用手册/4.卫星电话/图片14.png)\r
`,bw=`## 5.北斗有源终端\r
\r
### 5.1基本情况\r
\r
##### 北斗有源终端是一款支持北斗、GPS双模定位，具备北斗短报文、4G\r
\r
##### 全网通通信能力的移动有源终端，通过北斗卫星导航系统实现位置信息通报和卫星双向收发短报文功能。可以根据客户要求支持蓝牙、WiFi、FM收音、NFC等无线通讯功能，并通过内置4G通信射频模块实现优质的语音通话、高速数据下载和传输。\r
##### 在没有公网网络信号覆盖的地方，可通过北斗短报文实现即时的双向通讯服务。\r
\r
### 5.2设备介绍\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片1.png)\r
\r
### 5.3设备安装\r
\r
### （ 1 ）SIM卡安装和取出。\r
\r
##### 将北斗有源终端翻至背面，拆下后盖 6 颗螺钉，取出电池，找到SIM卡槽的位置，然后将SIM卡完全滑入插槽中并锁紧，在安装时，请确定SIM卡 1 和SIM卡 2 的金属接触片朝向，并请注意切角方向。当需要插入或取出SIM卡时，请先关机，移去其他外部电源和电池，再插入或取出SIM卡。\r
\r
### （ 2 ）TF卡安装和取出。\r
\r
##### 找到TF卡插槽，使TF卡金属触点朝下，将TF卡推入卡槽并锁紧。\r
\r
### （ 3 ）BD卡（北斗卡）安装和取出。\r
\r
##### 找到BD卡插槽，使BD卡金属触点朝下，将BD卡推入卡槽并锁紧。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片2.png)\r
\r
### 5.4设备应用\r
\r
#### 5.4.1软件操作\r
\r
##### （ 1 ）设备开机后打开设备通知下拉栏找到 BD labunch 开关并打开，如下图所示：\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片3.png)\r
\r
##### （ 2 ）退回主界面，打开北斗星聊。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片4.png)\r
\r
##### （ 3 ）进入软件登陆界面后点击跳过进入软件主界面。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片5.png)\r
\r
##### （ 4 ）点击菜单栏进入如下界面。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片6.png)\r
\r
##### （ 5 ）设置设备参数：\r
\r
##### 打开设置，确认北斗通信开关为开启状态。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片7.png)\r
\r
##### （ 6 ）离线地图，在 WiFi 环境下可下载当地离线地图，点击城市列表选择需要下载离线地图的城市，地图自动下载，可在下载管理中查看已下载的城市地图及进度。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片8.png)\r
\r
##### （ 7 ）RDSS 位置上报设置：\r
\r
##### 打开位置上报开关，按照上图填写收方号码：（部局） 458687\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片9.png)\r
\r
##### （ 8 ）一键求助设置\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片10.png)\r
\r
#### 5.4.2短报文发送\r
\r
##### （ 1 ）查看设备信息，看 RDSS、RNSS 是否连接可用。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片11.png)\r
\r
##### （ 2 ）打开消息菜单、选择新建。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片12.png)\r
\r
##### （ 3 ）按下图填写收方号码，及信息，点击发送。\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片13.png)\r
\r
##### （ 4 ）求助消息\r
\r
![](./通信岗位单兵装备操作应用手册/5.北斗有源终端/图片14.png)\r
`,xw=`## 6.单兵图传\r
\r
### 6.1设备介绍\r
\r
##### 以清新5G单兵图传为例，具有高清无线视频图传、北斗/GPS定位、应急调度、集群呼叫、移动办公、业务查询等功能；支持双向对讲、集群呼叫、集群调度；支持5G/4G/3G，移动、联通、电信全部网络模式；支持北斗/GPS定位；可选支持1080P/720P等实时传输，支持高清抓拍；支持蓝牙，可外接蓝牙耳机。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片1.png)\r
\r
##### Sim卡正确是插法：SIM1 缺口朝外（朝右），芯片朝下；SIM2 缺口朝外（朝左），芯片朝上。\r
\r
\r
### 6.2接口说明\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片2.png)\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片3.png)\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片5.png)\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片6.png)\r
\r
### 6.3设备操作\r
\r
##### （ 1 ）开关机，连接充电线进行充电，安装 SIM 卡。\r
\r
##### （ 2 ）架设三脚架，连接、使用摄像机、有线耳机\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片7.png)\r
\r
##### （ 3 ）查看本地图像，对摄像机进行推拉操作（设备自带摄像头的，需切换上传图像源）\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片8.png)\r
\r
### 6.4设备配置\r
\r
#### 6.4.1手机配置助手配置\r
\r
##### (1) 设备正常开机，确认设备处于 AP 模式（OLED 显示屏上有图标显示，如果不是 AP 模式，切换到 AP 模式）（默认出厂是 AP 模式，具体状态可以参考前面屏幕信息状态为准）。\r
\r
##### (2) 打开手机 WIFI 搜索设备 AP，设备 AP 的 SSID 为：AP-11XXXX-YY，例如 AP 的 SSID为：AP- 110002 - 49 ，AP 的密码默认为： 12345678 。\r
\r
##### (3) 在在手机上安装配置助手软件，打开连接设备，按如下步骤操作。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片9.png)\r
\r
##### (4) 确定点击登录后，进入设备功能菜单界面（可以实时浏览视频、网络配置等操作）。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片10.png)\r
\r
##### (5) 按如下步骤就可以配置好设备的平台地址（网络配置-iCVS 平台参数-平台配置-地址设置），接下来就可以通过 iCVS 客户端登录平台进行各种操作。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片11.png)\r
\r
##### (6) WiFi 连接，点击网络配置进入网络配置主界面，按如下步骤操作，输入完接入 WiFi 信息之后连续短按两次开机按键切换首选网络到 WiFi网络。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片12.png)\r
\r
##### (7) 设备配置接入平台后，就可以使用 iCVS 客户端软件登陆进行观看，客户端软件操作具体见客户端操作说明。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片13.png)\r
\r
#### 6.4.2电脑直连配置\r
\r
##### (1) 电脑网口直连设备，或者电脑和设备网口连接到同一局域网下；\r
\r
##### (2) 打开设备配置助手，看是否可以搜到设备（修改电脑或设备 IP，使在同一网段）：\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片14.png)\r
\r
##### (3)打开客户端软件或内置网页，默认 IP 为：192.168.0.8，登录用户名是admin，密码 123456 ）：\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片15.png)\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片16.png)\r
\r
##### (4) 直连设备，点击视频浏览，查看设备实时视频：\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片17.png)\r
\r
##### (5) 直连设备，点击设备管理，修改设备配置（添加平台接入、查看 4G拨号、WiFi 连接等状态，详细参考客户端使用说明书），添加平台接入，格式为 IP:端口（默认为 9988 ）。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片18.png)\r
\r
##### (6) 设备拨号状态查看，击设备管理——4G/3G 查看设备拨号状态：\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片19.png)\r
\r
##### (7) WiFi 连接配置，击设备管理——WiFi 配置 WiFi 连接，扫描 WiFi热点，点中要连接的热点，点击选用，输入接入密码，然后提交刷新连接状态。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片20.png)\r
\r
#### 6.4.3设备热点直连配置设备\r
\r
##### (1) 电脑直连设备 AP 热点，设备 AP 的 SSID 为：AP-11XXXX-YY，例如 AP 的 SSID 为：AP- 110002 - 49 ，AP 的密码默认为： 12345678 。\r
\r
##### (2)打开客户端软件，直连设备（默认 IP 为：192.168.87.1，登录用户名是 admin，密码 123456 ）：\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片21.png)\r
\r
##### (3) 客户端直连查看实时视频和设备配置参考网口直连设备配置。\r
\r
### 6.5修改设备信息。\r
\r
#### 6.5.1修改设备名称\r
\r
##### 修改设备名称、画面叠加文字为部局规范格式。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片22.png)\r
\r
#### 6.5.2调整分辨率\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片23.png)\r
\r
#### 6.5.3调整码流\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片24.png)\r
\r
### 6.6图像采集标准\r
\r
##### 一是明确拍摄主题和主体，并在画面中予以呈现；\r
\r
##### 二是画面保持稳定、不中断，不摇晃、不抖动，“推拉摇移”等操作连贯、平稳；\r
\r
##### 三是校准色彩不偏色，对准焦点不虚焦；\r
\r
##### 四是画面亮度适中、避免逆光，夜间拍摄注意补光；\r
\r
##### 五是设备上线、下线要报告，出现问题及时排除。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片25.png)\r
\r
### 6.7网络切换\r
\r
#### 6.7.1华平单兵网络切换\r
\r
##### （ 1 ）4G公网转卫星网配置\r
\r
##### 将图传设备开机，用网线把图传设备与卫星便携站连接，手机（电脑）连接图传设备无线热点：HDS1400DGB- 6326 ,密码： 12345678 。为确保4G公网、卫星网自由切换，将服务器 1 配置为4G公网，服务器 3配置为卫星网。\r
\r
##### 连接成功后，打开手机（电脑）浏览器，输入网址：192.168.7.1，登录账号：root，密码： 123 ，进入网页后，点击配置→点击服务器设置，更改服务器设置状态设置为启用；\r
\r
##### 服务器3 IP地址（卫星网）：10.200.192.17，服务器端口： 4222 ，设备账户：xzzddb01@js.xf，设备密码： 123 ，设备名称：江苏徐州应急通信保障分队4G单兵 01 ，完成后点击保存；\r
\r
##### 点击网络→网络模式选择优先有线→网络类型更改为静态，IP地址：10.202.11.115，子网掩码：255.255.255.248，默认网关：10.202.11.113，首选DNS：8.8.8.8，备用DNS：8.8.4.4，完成后点击保存。\r
\r
##### 更改完成后，刷新页面查看服务器设置、网络配置，状态是否更改为卫星网配置，如果刷新后配置仍为4G公网配置，则重新更改配置，如果刷新后配置成功，将设备重启，等待图传设备自动接入卫星网。\r
\r
##### （ 2 ）卫星网切换为4G公网\r
\r
##### 将图传设备开机，用网线把图传设备与卫星便携站连接，手机（电脑）连接图传设备无线热点：HDS1400DGB-6326,密码： 12345678 ，连接成功后，打开手机（电脑）浏览器，输入网址：192.168.7.1，登录账号：root，\r
\r
\r
##### 密码： 123 ，进入网页后，点击配置→点击服务器设置，更改服务器设置状态设置为启用；\r
\r
##### 服务器1 IP地址（4G公网）：221.226.106.188，服务器端口： 4222 ，设备账户：xzzddb01@js.xf，设备密码： 123 ，设备名称：江苏徐州应急通信保障分队4G单兵 01 ，完成后点击保存；\r
\r
##### 点击网络→网络模式：如果为单SIM卡，选择所在SIM卡位置（如SIM卡插在 1 上，则优先3G/4G SIM卡 1 ），如果为双SIM卡，选择双卡自动切换，完成后点击保存。\r
\r
##### 更改完成后，刷新页面查看服务器设置、网络配置，状态是否更改为4G公网配置，如果刷新后配置仍为卫星网配置，则重新更改配置，如果刷新后配置成功，将设备重启，等待图传设备自动接入4G公网。\r
\r
##### 如下图所示：\r
##### 卫星网服务器配置（示例）：\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片26.png)\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片27.png)\r
\r
##### 4G公网服务器配置（示例）：\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片28.png)\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片29.png)\r
\r
#### 6.7.2清新互联单兵网络切换\r
\r
##### （ 1 ）4G公网转切换卫星网操作步骤：\r
\r
##### 将图传设备开机，用网线把图传设备与卫星便携站连接，手机（电脑）\r
\r
##### 连接图传设备无线热点：AP-11220C- 65 ，密码： 12345678 ；\r
\r
##### 连接成功后，打开手机配置助手，进入页面后，查看搜索到的AP设备内找到AP-11220C- 65 ，点击进入→登录→输入用户名：admin，密码：123456 后点击登录；\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片30.png)\r
\r
##### 登录成功后，点击列表图传设备名称（江苏徐州应急通信保障分队无人机单兵）进入，点击平台接入→平台地址列表，添加平台地址：卫星网地址为10.32.61.16，端口为 9988 ，点击确认后刷新页面（右上角），退出平台接入页面；\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片31.png)\r
\r
##### 点击网络配置，将IP地址更改为10.202.11.115，点击√，子网掩码更改为255.255.255.248，需点击√，默认网关更改为10.202.11.113，需点击√，更改完毕后刷新页面（右上角）；刷新后确认IP地址、子网掩码、默认网关更改成功，将本页面下拉至底部，点击首选网络，将其更改为使用有线网络，再次刷新页面，确认首选网络是否更改成功。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片32.png)\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片33.png)\r
\r
##### 更改完成后，将设备重启，等待图传设备自动接入卫星网。\r
\r
##### （ 2 ）卫星网切换为4G公网操作步骤：\r
\r
##### 将图传设备开机，用网线把图传设备与卫星便携站连接，手机（电脑）连接图传设备无线热点：AP-11220C- 65 ，密码： 12345678 ；\r
\r
##### 连接成功后，打开手机配置助手，进入页面后，查看搜索到的AP设备内找到AP-11220C- 65 ，点击进入→登录→输入用户名：admin，密码：123456 后点击登录；\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片34.png)\r
\r
##### 登录成功后，点击列表图传设备名称（江苏徐州应急通信保障分队无人机单兵）进入，点击平台接入→平台地址列表，添加平台地址：4G公网地址为221.226.106.189，端口为 9988 ，点击确认后刷新页面（右上角），退出平台接入页面；\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片35.png)\r
\r
##### 点击网络配置，将IP地址更改为192.168.0.8，点击√，子网掩码更改为255.255.255.0，需点击√，默认网关更改为192.168.0.1，需点击√，更改完毕后刷新页面（右上角）；刷新后确认IP地址、子网掩码、默认网关更改成功，将本页面下拉至底部，点击首选网络，将其更改为使用有线网络，再次刷新页面，确认首选网络是否更改成功。\r
\r
![](./通信岗位单兵装备操作应用手册/6.单兵图传/图片36.png)\r
\r
##### 更改完成后，将设备重启，等待图传设备自动接入4G公网。\r
\r
`,ww=`## 7.布控球\r
\r
### 7.1设备基本情况\r
\r
##### 以清新5G智能布控球为例，支持包括 5 G、4G在内的公网进行实时传输，为用户提供超高清、流畅、稳定的视频效果，实现存储、传输、定位、对讲、智能应用等功能。一体化结构设计，防护等级IP66； 100 米红外夜视，可实现日夜布控；支持通过蓝牙通讯，实现双向语音对讲、集群对讲；支持北斗/GPS双模定位；支持5G+4G通信，远程无线视频传输。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片1.png)\r
\r
### 7.2设备操作步骤\r
\r
##### （ 1 ）长按开机键，使设备开机，连接充电器进行充电。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片2.png)\r
\r
##### （ 2 ）架设三脚架，蓝牙配对：\r
\r
##### 在配置助手蓝牙配对界面点击开始配对：按一下蓝牙耳机的配对按键，等待语音提示（蓝牙耳机语音提示配对成功即完成配对），配置助手蓝牙配置状态显示 connected 即配对成功。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片3.png)\r
\r
##### （ 3 ）查看图像。\r
\r
##### 在手机里打开配置助手 APP，查看本地图像，使用手机进行本地推拉摇移。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片4.png)\r
\r
### 7.3布控球设置\r
\r
##### （ 1 ）配置服务器地址，将网线连接设备，使用工具“设备搜索器” 搜索设备。 搜索到设备之后在搜索器界面中单击最右边的设置按钮 ，出现下图的配置界面，给设备分配一个局域网内 IP 地址，使其与电脑在同一网段。例如电脑 IP 地址是 172.23.3.17，网关 172.23.31.1，设备 的 IP地址可以改为 1 72.23.3.X，此处改为 172.23.3.91。点击“确定”即可修改成功。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片5.png)\r
\r
##### （ 2 ）更改好设备 IP 之后，退出设置页面，单击内置网页按钮 ，打开设备内置网页。 对于首次使用的用户来说，要首先下载内置网页插件，安装后才能登录成功。进入内 置网页后用户名： admin，密码： 123456 。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片6.png)\r
\r
##### （ 3 ）在网络配置里，可以选择设置 3G、4G 无线网络，默认自动选择的。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片7.png)\r
\r
##### （ 4 ）选择 3G、4G 网络，可以进行参数配置，设置网络模式、拨号参数、认证方式等。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片8.png)\r
\r
### 7.4修改设备信息\r
\r
#### 7.4.1修改设备名称和时间\r
\r
##### 用电脑登录江苏省消防总队现场图传系统，修改设备名称调整画面叠加文字和时间。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片9.png)\r
\r
#### 7.4.2调整分辨率及流码\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片10.png)\r
\r
### 7.5网络切换\r
\r
#### 7.5.1华平布控球切换\r
\r
##### （ 1 ）4G公网转卫星网操作步骤：\r
\r
##### 为确保4G公网、卫星网自由切换，将服务器 1 配置为4G公网，服务器 3 配置为卫星网。\r
\r
##### 连接成功后，打开手机（电脑）浏览器，输入网址：192.168.7.1，登录账号：root，密码： 123 ，进入网页后，点击配置→点击服务器设置，更改服务器设置状态设置为启用；\r
\r
##### 服务器3 IP地址（卫星网）： 10 .200.192.17，服务器端口： 4222 ，设备账户：xzzhbkq02@js.xf，设备密码： 123 ，设备名称：江苏徐州应急通信保障分队4G布控球 01 ，完成后点击保存；\r
\r
##### 点击网络→网络模式选择优先有线→网络类型更改为静态，IP地址：10.202.11.115，子网掩码：255.255.255.248，默认网关：10.202.11.113，首选DNS：8.8.8.8，备用DNS：8.8.4.4，完成后点击保存。\r
\r
\r
##### 更改完成后，刷新页面查看服务器设置、网络配置，状态是否更改为卫星网配置，如果刷新后配置仍为4G公网配置，则重新更改配置，如果刷新后配置成功，将设备重启，等待图传设备自动接入卫星网。\r
\r
##### （ 2 ）将卫星网切换为4G公网操作步骤：\r
\r
##### 将图传设备开机，用网线把图传设备与卫星便携站连接，手机（电脑）连接图传设备无线热点：HDS1300E-2932,密码： 12345678 ，连接成功后，打开手机（电脑）浏览器，输入网址：192.168.7.1，登录账号：root，密码： 123 ，进入网页后，点击配置→点击服务器设置，更改服务器设置状态设置为启用；\r
\r
##### 服务器1 IP地址（4G公网）：221.226.106.188，服务器端口： 4222 ，设备账户：xzzhbkq02@js.xf，设备密码： 123 ，设备名称：江苏徐州应急通信保障分队4G布控球 01 ，完成后点击保存；\r
##### 点击网络→网络模式：如果为单SIM卡，选择所在SIM卡位置（如SIM卡插在 1 上，则优先3G/4G SIM卡 1 ），如果为双SIM卡，选择双卡自动切换，完成后点击保存。\r
##### 更改完成后，刷新页面查看服务器设置、网络配置，状态是否更改为4G公网配置，如果刷新后配置仍为卫星网配置，则重新更改配置，如果刷新后配置成功，将设备重启，等待图传设备自动接入4G公网。\r
\r
\r
##### 如下图所示：\r
\r
##### 卫星网服务器配置（示例）：\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片11.png)\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片12.png)\r
\r
##### 4G公网服务器配置（示例）：\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片13.png)\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片14.png)\r
\r
#### 7.5.2清新互联布控球切换\r
\r
##### 清新互联布控球4G公网转卫星网配置：\r
\r
##### 架设卫星便携站，卫星便携站成功对星（信噪比到达14db以上）后，向部局申请卫星链路，申请卫星链路电话为： 01083932788 、 01083932789 。\r
\r
**4G公网转切换卫星网操作步骤：**\r
##### 将图传设备开机，用网线把图传设备与卫星便携站连接，手机（电脑）连接图传设备无线热点：AP-12476E- 61 ，密码： 12345678 ；\r
##### 连接成功后，打开手机配置助手，进入页面后，查看搜索到的AP设备内找到AP-12476E- 61 ，点击进入→登录→输入用户名：admin，密码：123456 后点击登录；\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片15.png)\r
\r
##### 登录成功后，点击列表图传设备名称（江苏徐州应急通信保障分队5G布控球 01 ）进入，点击平台接入→平台地址列表，添加平台地址：卫星网地址为10.32.61.16，端口为 9988 ，点击确认后刷新页面（右上角），退出平台接入页面；\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片16.png) ![](./通信岗位单兵装备操作应用手册/7.布控球/图片17.png)\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片18.png)\r
\r
##### 点击网络配置，将IP地址更改为10.202.11.115，点击√，子网掩码更改为255.255.255.248，需点击√，默认网关更改为10.202.11.113，需点击√，更改完毕后刷新页面（右上角）；刷新后确认IP地址、子网掩码、默认网关更改成功，将本页面下拉至底部，点击首选网络，将其更改为使用有线网络，再次刷新页面，确认首选网络是否更改成功。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片19.png)\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片20.png)\r
\r
##### 更改完成后，将设备重启，等待图传设备自动接入卫星网。\r
\r
##### 卫星网切换为4G公网操作步骤：\r
\r
##### 将图传设备开机，用网线把图传设备与卫星便携站连接，手机（电脑）连接图传设备无线热点：AP-11220C- 65 ，密码： 12345678 ；\r
\r
##### 连接成功后，打开手机配置助手，进入页面后，查看搜索到的AP设备内找到AP-11220C- 65 ，点击进入→登录→输入用户名：admin，密码：123456 后点击登录；\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片21.png) ![](./通信岗位单兵装备操作应用手册/7.布控球/图片22.png)\r
\r
##### 登录成功后，点击列表图传设备名称（江苏徐州应急通信保障分队无人机单兵）进入，点击平台接入→平台地址列表，添加平台地址：4G公网地址为221.226.106.189，端口为 9988 ，点击确认后刷新页面（右上角），退出平台接入页面；\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片23.png)\r
\r
##### 点击网络配置，将IP地址更改为192.168.0.8，点击√，子网掩码更改为255.255.255.0，需点击√，默认网关更改为192.168.0.1，需点击√，更改完毕后刷新页面（右上角）；刷新后确认IP地址、子网掩码、默认网关更改成功，将本页面下拉至底部，点击首选网络，将其更改为使用有线网络，再次刷新页面，确认首选网络是否更改成功。\r
\r
![](./通信岗位单兵装备操作应用手册/7.布控球/图片24.png)\r
\r
##### 更改完成后，将设备重启，等待图传设备自动接入4G公网。\r
\r
`,Cw=`## 8.多链路聚合终端\r
\r
### 8.1设备介绍\r
\r
##### 多链路聚合终端是通过捆绑和最大化使用多个可用的连接，如蜂窝网络4G/LTE、卫星、有线罗，提供稳定、高宽带IP链接。 通过网关服务器对视频、音频、数据流进行优化，保障音视频传输不卡顿、不花屏，视频延时小。\r
\r
##### 以华平GP100M- 9 为例，其配备 9 个内置4G模块和有线网络扩展接口，同时4G和有线网络接入。\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片1.png)\r
\r
### 8.2接口说明\r
\r
##### （ 1 ）网口 1 、 2 为 WAN 网口，可通过此接口接驳有线外网或者卫星有线网络；网口 3 、 4 为LAN 网口，可通过此网口提供局域网，为本地指挥终端，笔记本等提供网络\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片2.png)\r
\r
\r
##### （ 2 ）SIM 卡插槽共有 9 组可插入九张不同运行商的 SIM 卡，专网环境按卡槽 123 、 456 、 789 ， 电信、移动、联通为一分组，公网不限。\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片3.png)\r
\r
##### （ 3 ）电源接口如图所示可接 8 - 36V 车载电源。亦可接符合规格的外接电池组\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片4.png)\r
\r
##### （ 4 ）DEBUG 接口用于通过 RS232 串口接计算机对多卡设备进行调试之用\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片5.png)\r
\r
### 8.3后台设置\r
\r
#### 8.3.1WEB管理页面配置\r
\r
##### 浏览器地址栏输入多卡设备 WEB 页面地址：http://10.1.10.25 4\r
##### 用户名：root\r
##### 默认密码： 123\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片6.png)\r
\r
#### 8.3.2WIFI设置\r
\r
##### 在此选项页对 2.4G 和 5G WIFI 的 AP 进行设置：\r
\r
##### 在“热点 ESSID”右侧输入框输入 AP 的 SSID 即用户名。\r
\r
##### 在“热点密码”右侧输入框输入 AP 的热点密码。\r
\r
##### 信道选择自动，保存。\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片7.png)\r
\r
#### 8.3.3网络设置\r
\r
##### 连接网络模式选项 “有线网络模式”、“4G 网络模式”或“有线+4G聚合模式”。\r
\r
##### 多卡网络模式选项“性能优先”冗余传输或“带宽优先”带宽叠加传输。当有线网口 1 、 2 至少有 1 个网口接上行网线时选择“有线网络模式”可联网。\r
\r
##### 设备插有至少一张可有效工作 SIM 卡时选择“4G 网络模式”可联网。\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片8.png)\r
\r
#### 8.3.4有线设置\r
\r
##### 在此页设置有线网络接入口 1 和 2 参数：在“网络类型”右侧下拉菜单选择“动态” 或“静态”\r
\r
##### 当选择“动态”时无需设置地址参数，设备网络地址将由 DHCP 自动分配 IP\r
\r
##### 当选择“静态”时需手动在下面输入正确的“IP 地址”“子网掩码”“默认网关”“首选 DNS”设置完毕后点击 保存设置。\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片9.png)\r
\r
\r
#### 8.3.5查看SIM卡状态与测速\r
\r
##### 点击网络状态，查看所有 SIM 卡卡槽的即时状态及总的上下行带宽\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片10.png)\r
\r
### 8.4应用场景\r
\r
#### 8.4.1现场指挥部\r
\r
##### 为现场指挥部的高清指挥视频终端提供高速、稳定的网络带宽，满足应急指挥调度、视频会议、远程监控等应用。\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片11.png)\r
\r
\r
#### 8.4.2单兵救援\r
\r
##### 为突发事件现场单兵的音视频通信提供高速、稳定的网络带宽，实现高质量的现场视频实时回传和语音对讲。\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片12.png)\r
\r
#### 8.4.3车载图传\r
\r
##### 为应急指挥车辆提供高速、稳定的网络带宽，保障指挥车在行进或灾害现场的高清图像实时传输到指挥中心，并实现双向视频指挥。\r
\r
![](./通信岗位单兵装备操作应用手册/8.多链路聚合终端/图片13.png)\r
`,Sw=`## 9.无人机航拍侦查\r
\r
### 9.1设备准备\r
\r
##### 组装无人机，开展飞行前设备检查\r
\r
![](./通信岗位单兵装备操作应用手册/9.无人机航拍侦查/图片1.png)\r
\r
![](./通信岗位单兵装备操作应用手册/9.无人机航拍侦查/图片2.png)\r
\r
### 9.2无人机飞行操作\r
\r
##### （ 1 ）控制飞机飞至指定建筑进行环绕拍摄\r
\r
![](./通信岗位单兵装备操作应用手册/9.无人机航拍侦查/图片3.png)\r
\r
##### （ 2 ）按要求熟练进行变焦和可见光热成像图像切换\r
\r
![](./通信岗位单兵装备操作应用手册/9.无人机航拍侦查/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/9.无人机航拍侦查/图片5.png)\r
\r
### 9.3上图标记\r
\r
##### 能够对拍摄的照片进行图上标注\r
\r
![](./通信岗位单兵装备操作应用手册/9.无人机航拍侦查/图片6.png)\r
`,Pw=`## 10.机全景图制作\r
\r
### 10.1设备准备\r
\r
##### 组装无人机，开展飞行前设备检查\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片1.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片2.png)\r
\r
### 10.2景图拍摄\r
\r
##### 手动进行无人机全景照片拍摄采集：\r
\r
##### 无人机悬停至指定高度，相机水平 360 °开始旋转拍照，每张照片要预留上一张照片约 1/3 的大小，拍摄一圈(不少于 8 张，每张旋转角度大约45 °)，然后相机向下 30 ° (或 45 °、 60 ° ) 拍摄一圈，最后垂直向下拍摄不少于 1 张画面。\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片3.png)\r
\r
### 10.3全景图合成\r
\r
##### 利用全景合成软件对图形进行全景生成和补天等后期工作。\r
\r
### 10.3.1AutopanoGiga4补天\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片5.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片6.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片7.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片8.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片9.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片10.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片11.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片12.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片13.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片14.png)\r
\r
### 10.3.2AdobePhotoshop补天\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片15.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片16.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片17.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片18.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片19.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片20.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片21.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片22.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片23.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片24.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片25.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片26.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片27.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片28.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片29.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片30.png)\r
\r
### 10.4上图标注\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片31.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片32.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片33.png)\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片34.png)\r
\r
### 10.5全景照片共享\r
\r
![](./通信岗位单兵装备操作应用手册/10.机全景图制作/图片35.png)\r
\r
`,Ow=`## 11.无人机二维正摄影像图制作\r
\r
### 11.1设备准备\r
\r
##### 能够组装无人机，开展飞行前设备检查\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片1.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片2.png)\r
\r
### 11.2素材拍摄\r
\r
##### 打开大疆DJI TERRA软件，完成航线规划并操作无人机进行照片拍摄采集。\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片3.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片5.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片6.png)\r
\r
### 11.3二维图制作\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片7.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片8.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片9.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片10.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片11.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片12.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片13.png)\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片14.png)\r
\r
### 11.4上图标注\r
\r
##### 能够对二维图进行图上标注\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片15.png)\r
\r
### 11.5ARCGIS制作二维对比图参考标准\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片16.png)\r
\r
>底图尺寸：118.9cm*84.1cm\r
\r
\r
##### 主标题： 方正小标宋GBK 黑色 100 号 加粗\r
\r
##### 制作单位及时间： 黑体 黑色 55 号 不加粗\r
\r
##### 照片尺寸：51cm*34cm\r
##### 照片介绍字体：**楷体GB_2312 黑色 50 号 加粗 晕圈 3 大小 填充白色 无轮廊\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片17.png)\r
\r
##### 比例文本字体： 楷体GB_2312 黑色 50 号 加粗 晕圈 3 大小 填充白色 无轮廊\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片18.png)\r
\r
##### 灾害区域字体： 黑体 蓝色 55 号 加粗 晕圈 3 大小 填充白色 无轮廊\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片19.png)\r
\r
##### 受灾地名字体： 黑体 红色 55 号 加粗 晕圈 3 大小 填充白色 无轮廊\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片20.png)\r
\r
##### 未受灾地名字体： 楷体GB_2312 黄色 55 号 加粗 晕圈 3 大小 填充黑色 无轮廊\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片21.png)\r
\r
##### 鹰眼图字体： 楷体GB_2312 黄色 35 号 加粗 晕圈 2 大小 填充黑色无轮廊\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片22.png)\r
\r
##### 经纬度字体： 宋体 黑色 35 号 偏移量 10 磅，需隐藏网格线\r
\r
##### 正射影像图右上角需插入固定指北针，样式见参考图，白色背景\r
\r
##### 正摄影像图和斜摄图需分别插入两处受灾地，受灾类型区域，未受灾地\r
\r
##### 制图单位为： XX总队XX支队应急通信保障分队\r
\r
##### 鹰眼图紧贴卫星图左上角边框，指北针紧贴正摄图右上角边框，图例紧贴正摄图右下角边框，不得超出边框。\r
\r
### 11.6ARCGIS制作力量部署图参考标准\r
\r
##### 底图尺寸： 118.9cm*84.1cm\r
\r
##### 照片尺寸： 105cm*70cm\r
\r
##### 主标题： 方正小标宋GBK 黑色 100 号 加粗\r
\r
##### 受灾区域面积： 红色，黑色边框，边框大小 2 ，透明度60%，\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片23.png)\r
\r
##### 受灾区域面积字体楷体gb_23 12 ， 55 号，红色加粗，晕圈 3 大小，填充白色，小数点 2 位，需换行\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片24.png)\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片25.png)\r
\r
##### 疏散区： 绿色，黑色边框，边框大小 2 ，透明度60%，字体楷体GB_2312绿色 80 号 加粗 晕圈 4 大小 填充黑色 无轮廊，不需测面积\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片26.png)\r
\r
##### 疏散路线： 黑色、箭头在终点， 7 大小，箭头大小 25\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片27.png)\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片28.png)\r
\r
##### 疏散路线文字： 楷体GB_2312黑色 55 号 加粗 晕圈 3 大小 填充白色 无轮廊，小数点 2 位\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片29.png)\r
\r
##### 进攻路线： 红色、箭头在终点， 7 大小，箭头大小 25\r
\r
##### 进攻路线文字： 楷体GB_2312红色 55 号 加粗 晕圈 3 大小 填充白色 无轮廊，小数点 2 位\r
\r
##### 指挥部文字： 楷体GB_2312橙色 80 号 加粗 晕圈 4 大小 填充黑色无轮廊，\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片30.png)\r
\r
##### 指挥部图标点： 双五角星，大小 150 ，内部颜色红色，外部颜色黄色\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片31.png)\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片32.png)\r
\r
##### 图例： 标题黑体， 55 大小，需显示标记区\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片33.png)\r
\r
##### 比例文本字体： 楷体GB_2312 黑色 70 号 加粗 晕圈 3 大小 填充白色 无轮廊\r
\r
![](./通信岗位单兵装备操作应用手册/11.无人机二维正摄影像图制作/图片34.png)\r
\r
##### 经纬度字体： 宋体 黑色 50 号 偏移量 10 磅，需隐藏网格线指北针紧贴正摄图右上角边框，图例紧贴正摄图右下角边框，不得超出边框。\r
\r
##### 制图单位为： XX总队XX支队应急通信保障分队`,Aw=`## 12.无人机三维图制作\r
\r
### 12.1设备准备\r
\r
##### 能够组装无人机，开展飞行前设备检查。\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片1.png)\r
\r
### 12.2图片采集\r
\r
##### 使用大疆DJI TERAA软件完成航线规划并操作无人机进行照片拍摄采集\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片2.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片3.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片5.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片6.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片7.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片8.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片9.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片10.png)\r
\r
### 12.3二维图制作\r
\r
##### 利用大疆DJI TERRA制图软件完成二维图制作\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片11.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片12.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片13.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片14.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片15.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片16.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片17.png)\r
\r
### 12.3长度、面积、体积测量\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片18.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片19.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片20.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片21.png)\r
\r
![](./通信岗位单兵装备操作应用手册/12.无人机三维图制作/图片22.png)`,Tw=`## 13.图像综合管理平台指挥终端\r
\r
### 13.1设备介绍\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片1.png)\r
\r
##### ①终端电源接口\r
\r
##### ②摄像机控制接口\r
\r
##### ③RJ45网络接口\r
\r
##### ④音频输入输出接口\r
\r
##### ⑤视频输出接口\r
\r
##### ⑥USB接口\r
\r
##### ⑦ 视频输入接口\r
\r
### 13.2终端开机界面功能介绍\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片2.png)\r
\r
##### （ 1 ）会议终端：系统登陆\r
\r
##### （ 2 ）Plink：与H323设备进行点对点互通\r
\r
##### （ 3 ）网络设置：本地网络设置\r
\r
##### （ 4 ）文件浏览：文件查看，进行会议录像播放。\r
\r
##### （ 5 ）系统管理：本地升级系统\r
\r
##### （ 6 ）版本信息：查看系统版本\r
\r
### 13.3终端设置\r
\r
##### （ 1 ）记录网络设置内的IP地址、子网掩码、网关。\r
\r
##### （ 2 ）点击会议终端，记录登录框内的服务器地址、登录账号、密码（默认 123 ）\r
\r
##### （ 3 ）点击会议终端，点击左下角选项设置，选择设备终端，记录设备账号和密码（ 123 ）\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片3.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片5.png)\r
\r
### 13.4设备操作\r
\r
#### 13.4.1设备登陆\r
\r
##### （ 1 ）点击“会议终端”。\r
\r
##### （ 2 ）在弹出的登陆窗口中填写服务器地址，登陆账号和密码。\r
\r
##### （ 3 ）点击登陆后进入图像资源浏览界面。\r
\r
##### （ 4 ）登录后右下角弹出“设备上线成功”此时表明此终端已经登录成功。\r
\r
##### （ 5 ）弹出“无效的监控设备账户”错误信息 ，证明设备账号未能登录成功，请检查设备账号输入信息。\r
\r
##### （ 6 ）当登录设备账号提示此错误时，证明此设备账号在其他设备上登陆过，因为设备账号是唯一且绑定MAC地址的，需要到后台解绑序列号。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片6.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片7.png)\r
\r
\r
#### 13.4.2本地音视频预览\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片8.png)\r
\r
#### 13.4.3本地音视频设置菜单\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片9.png)\r
\r
#### 13.4.4本地音视频设置菜单\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片10.png)\r
\r
##### （ 1 ）摄像机：对应三个通道，对应的是终端后面板的三个视频输入接口。\r
\r
##### （ 2 ）分辨率：调整当前摄像机的分辨率，分辨率越高图像越清楚。\r
\r
##### （ 3 ）视频码流：画面质量控制中最重要的参数。同样分辨率下, 码流越大,画面质量就越好。\r
\r
##### （ 4 ）视频预览：预览当前摄像机接入图像。\r
\r
##### （ 5 ）固定参数：编码器选择H.264HP、图像帧率 30 、码流控制专线、图像增强不选、图像去燥勾选。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片11.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片12.jpg)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片13.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片14.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片15.png)\r
\r
#### 13.4.5云台设置\r
\r
##### 点击“云台”按钮后弹出云台控制栏，选中图像后可点击相应位置进行对摄像机远程操作。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片16.png)\r
\r
#### 13.4.6功能栏介绍\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片17.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片18.png)\r
\r
#### 13.4.7组会\r
\r
##### （ 1 ）创建会议分组：右键“常用资源”，添加自定义分组，输入“分组名称”即会议名称。\r
\r
##### （ 2 ）右键会议可召开和删除会议。\r
\r
##### （ 3 ）添加会议人员：在资源树中拖拽人员到分组（只有会议设备才能被拖拽到会议）；\r
\r
##### （ 4 ）自己未加入会议的入会方式：右键召开的会议点击进入会议。\r
\r
##### （ 5 ）右键会议人员可以在会议召开前设置与会者身份或者删除与会人员。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片19.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片19-2.png)\r
\r
##### （ 6 ）点击“模版”按钮设置每个分屏的会议模板，根据不同会议类型选择不同的会议模板。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片20.png)\r
\r
##### （ 7 ）点击“窗口”按钮可以对会议中所有会议窗口属性进行设置，窗口属性可设置无属性、广播音视频、广播音频、广播视频，接收音视频、接收音频和接收视频，主持人点击工具栏中的“属性”按钮，则启动窗口属性。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片21.png)\r
\r
##### （ 8 ）点击“NAV”按钮可以打开NAV屏，在其上面操作效果等同于在模板上直接操作，且可以跨屏进行操作。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片22.png)\r
\r
##### （ 9 ）点击“码流”按钮可以对会议中所有视频码流进行控制，如果要单一对某路图像接收码流，可以右键该路图像选择设定的码流控制。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片23.png)\r
\r
##### （ 10 ）点击工具栏上的“录像”按钮，便可进行会议的录像，也可右键视频窗口菜单“录像”按钮, 可以进行单个通道录像设置录像文件格式，支持AVI和AVMS格式，录像文件保存在终端中，录像文件需要及时导出，不然会影响终端性能。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片24.png)\r
\r
##### （ 11 ）远程录像，点击工具栏上的“远程按钮”，使会议录像录在远程录播服务器上。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片25.png)\r
\r
##### （ 12 ）轮巡：打开左上角资源树右方的【轮询列表】按钮；先点击管理按钮，弹出轮询设置对话框；在轮询设置对话框中，需要先添加轮询标题， 然后可以对右边的相关属性进行设置。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片26.png)\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片27.png)\r
\r
##### （ 13 ）全屏：点击“全屏”按钮使用全屏功能，将不显示工具栏和会议列表，会议模板覆盖整个屏幕如果要覆盖任务栏，则需要在选项中设置。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片28.png)\r
\r
##### （ 14 ）信息：点击“信息”按钮可打开所有视频窗口的音视频信息栏，查看音视频码流和分辨率等信息，大/中/小码流调节按钮、录像按钮和音量调节栏。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片29.png)\r
\r
##### （ 15 ）视频点名：\r
\r
##### 点击“点名”按钮主持人可以设置自动点名，点击工具栏上的“选项”按钮，在打开的【会议设置】对话框中“会议点名”页设置点名结束时间限制和点名间隔时段。\r
\r
##### 视频点名：模拟真实的点名场景，只有被点名人签到后，发起人才会确定该人员到会，并确定点名成功。\r
\r
##### 点击开始点名。在线的用户的相会被单接或广播出来,能够看到像或听到声音。\r
\r
##### 确认后，点击点名成功。一次点名即完成。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片30.png)\r
\r
##### （ 16 ）点击“白板”按钮可打开电子白板，允许会议成员同时绘制图形并键入文本。可以添加白板、画图、键入文本以及使用荧光笔或远程指示器来强调某个项目等功能。可添加图片，如人、车、建筑、其他、地址，并可自定义图像。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片31.png)\r
\r
##### （ 17 ）屏幕共享：点击“屏幕”按钮可共享自己的电脑屏幕到会议模板上，可以使所有会议成员同步看到主持人所做的操作，例如播放的PowerPoint，Word等文档。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片32.png)\r
\r
##### （ 18 ）点击“文档”按钮可以播放数据文档，所有会议参加者都可以看到文档，目前支持.pdf、word（.doc）、excel(.xls)和.ppt格式的文档。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片33.png)\r
\r
##### （ 19 ）点击“文件”按钮可打开文件分发窗口，添加文件进行发送，所有会议中的人员都能收到文件分发，可进行接收、删除和暂停接收操作，并改变文件保存路径、打开保存目录查看已经接收的文件。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片34.png)\r
\r
##### （ 20 ）会议标题：\r
\r
##### 主持人设置会议标题并选择显示会议标题后，所有用户的模板区上方将可以看到会议标题。\r
\r
##### 工具栏上的【菜单】下拉列表中的【会议标题设置】。\r
\r
##### 打开会议标题设置对话框，输入会议标题。\r
\r
##### 工具栏上的【菜单】下拉列表中的【显示会议标题】。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片35.png)\r
\r
##### （ 21 ）会议公告：\r
\r
##### 主持人在公告发布栏输入发布信息，公告发布后以透明窗口形式滚动显示。\r
\r
##### 工具栏上的【菜单】下拉列表中的【公告设置】。\r
\r
##### 打开会议公告设置对话框，输入公告信息。\r
\r
##### 工具栏上的【菜单】下拉列表中的【显示会议公告】。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片36.png)\r
\r
##### （ 22 ）结束会议：点击会议界面右上角“关闭”按钮，在弹出的提示对话框中，勾选“宣布结束，所有人都退出”，点击确定按钮，则会议中所有会议人员都退出此会议，进入到默认登录界面。\r
\r
![](./通信岗位单兵装备操作应用手册/13.图像综合管理平台指挥终端/图片37.png)\r
\r
### 13.5常见故障排除\r
\r
##### （ 1 ）终端CPU耗用过高：点击终端界面左上角速率按钮，选择低速率。\r
\r
##### （ 2 ）指挥终端无法正常开机：\r
\r
##### 确认终端电源是否有电；\r
\r
##### 查看终端开关按钮灯是否亮；\r
\r
##### 查看终端显示输出是否正常。\r
\r
##### （ 3 ）无法听到声音：在本地图像上右击，选择音视频设置，进去后选择音频设置，先测试扬声器声音是否正常，然后在测试麦克风声音是否正常，如果不正常，请依次测试下拉列表选项的音频设备。\r
\r
##### （ 4 ）图像输出：当我们遇到终端输入输出是黑屏，首先我们应该找一台显示器将我们的终端的输出接到显示器上查看，如果显示器输出图像正常则证明终端没有问题，需要排查线材或者矩阵问题。\r
\r
##### （ 5 ）本地图像显示蓝屏或者彩条：在蓝屏或者彩条图像上右击，选择音视频设置，进去后选择视频设置，在摄像 机后面有个下拉列表，切换下摄像机通道后查看本地图像是否正常，如果还是不显示本地图像，需要确定摄像机或者视频连接线是否损坏。\r
`,kw=`## 14.轻型化卫星便携站\r
\r
### 14.1设备介绍\r
\r
##### 轻型化卫星便携站为一体化卫星通信站，设备支持最大2.2Mbps 的信息速率，提供10/100M BASE-T、RS232 接口。整机满足三防要求，防护等级IP65，支持点对点、网状网、星状网等多种组网方式，与视频指挥箱配合，可实现现场图传和音视频双向通信。\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片1.png)\r
\r
### 14.2接口介绍\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片2.png)\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片3.png)\r
\r
### 14.3设备组装\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片5.png)\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片6.png)\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片7.png)\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片8.png)\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片9.png)\r
\r
### 14.4对星入网操作\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片10.png)\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片11.png)\r
\r
![](./通信岗位单兵装备操作应用手册/14.轻型化卫星便携站/图片12.png)\r
`,Ew=`## 15.公网卫星便携站\r
\r
### 15.1设备介绍\r
\r
##### 以BWP500A型便携式卫星通信终端为例，操作人员通过智能手机连接到终端热点后就可以对便携终端进行控制与操作。\r
\r
### 15.2接口介绍\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片1.png)\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片2.png)\r
\r
### 15.3设备组装\r
\r
##### （ 1 ）取出便携终端主机和天线副叶瓣。\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片3.png)\r
\r
##### （ 2 ）依次安装天线副叶瓣，安装左右两侧叶瓣时，先锁紧中间锁扣。一只手按住支撑杆另一只手打开天线到有阻力的位置，并固定。\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片4.png)\r
\r
##### （ 3 ）调整天线支撑杆角度，安装馈源。\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片5.png)\r
\r
##### （ 4 ）连接射频线、电源线。\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片6.png)\r
\r
### 15.4对星入网操作\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片7.png)\r
\r
##### （ 1 ）卫星通 APP 的侧边栏上点击“对准卫星”操作按钮，即可进入对星界面，如左边图所示。界面显示当前接收到的卫星信号强度，且以语音形式实时播报，此外还显示所对卫星的名称，便携终端所在当地经度、当地纬度、天线仰角、天线方位角和天线极化角，用户根据界面显示的方位和俯仰等参数来调节便携终端，完成辅助对星。界面左滑将会出现我们的对星辅助工具如中间图和右边图所示。\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片8.png)\r
\r
##### （ 2 ）终端提供数据通信功能，建立起卫星链路后，便可以通过终端网\r
\r
##### 口进行数据交互\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片9.png)\r
\r
##### （ 3 ）终端提供接入指挥中心网络功能，建立起卫星链路后，可以通过\r
\r
##### 终端的 WIFI 或者有线网口连接接入指挥中心的网络\r
\r
##### （ 4 ）修改移动指挥终端网络配置\r
\r
##### 使用 Ctrl+H，呼出管理员命令提示符，输入“explorer“\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片10.png)\r
\r
##### （ 5 ）打开控制面板，选择“网络与共享中心”，点击“更改适配器选项”\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片11.png)\r
\r
##### （ 6 ）右击“以太网”，选择“属性”\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片12.png)\r
\r
##### （ 7 ）双击“Internet 协议版本 4 （TRC/IP4）\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片13.png)\r
\r
##### （ 8 ）点击“自动获得 IP地址”与“自动获得 DNS 服务器地址”，最后确定。\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片14.png)\r
\r
##### （ 9 ）在移动指挥箱的网络设置中，删掉数据。保存配置即可使用互联网连接终端。\r
\r
![](./通信岗位单兵装备操作应用手册/15.公网卫星便携站/图片15.png)\r
`,_w=`## 16.移动指挥箱\r
\r
### 16.1设备介绍\r
\r
##### 移动指挥箱采用一体化设计，集成了指挥视频终端、摄像头、显示屏、喇叭、麦克风、云台遥杆和电池，支持卫星、4G和wifi等多种网络模式的一键切换。支持外置摄像机，标配的外置摄像机为 20 倍光学变焦，可采集2 公里范围的图像。能够实现定位、应急、视频、云台操作、双向对讲等功能。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片1.png)\r
\r
### 16.2面板接口功能介绍\r
\r
#### 16.2.1上面板介绍\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片2.png)\r
\r
#### 16.2.2下面板介绍\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片3.png)\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片4.png)\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片5.png)\r
\r
### 16.3设备操作\r
\r
#### 16.3.1有线网络连接\r
\r
##### （ 1 ）网线直连方式。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片6.png)\r
\r
##### （ 2 ）本地局域网连接方式。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片7.png)\r
\r
#### 16.3.2wifi热点连接\r
\r
##### 移动指挥箱开机后默认开启状态，通过wifi搜索可发现“ap-xxxxx-xx”格式的网络接入点。例如AP- 122036 - 5E。连接默认密码未12345678.连接成功后，通过“内置网页”即可搜索到设备。配置方式与直连配置方式一样。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片8.png)\r
\r
### 16.4网络访问和参数配置\r
\r
#### 16.4.1通过浏览器访问\r
\r
##### 移动指挥箱支持多种浏览器访问方式，如IE、Chome、 360 等浏览器。以IE为例，基本访问步骤和参数配置如下：\r
##### （ 1 ） 设置安全级别。进入菜单-工具-INTERNET选项-安全-自定义级别，在设置中把activex控件和插件，都改成“启用”或“提示”，安全级别设置为低。为了安全，在预览到视频图像后，把安全设置恢复默认级别。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片9.png)\r
\r
#### 16.4.2内置网页登陆\r
\r
##### 在浏览器输入“192.168.0.8:9988”。对于首次使用的，要首先下载内置网页插件，按照20.4.1操作即可。\r
\r
##### 注意：插件下载完成后，打开插件下载目录，关闭浏览器后进行安装，以免安装失败。\r
\r
##### 安装成功后进行登陆，进入内置网页后，用户名：admin，密码：123456.\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片10.png)\r
\r
### 16.5网络配置。\r
\r
#### 16.5.1有线接入\r
\r
##### 有线接入无需在内置网页上设置，直接在移动指挥箱安装的AVCON软件进行网络配置。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片11.png)\r
\r
#### 16.5.2wifi接入\r
\r
##### 登陆内置网页后，点击 ，点击wifi功能项，勾选“启用wifi”，在ssid中输入无线网账号，在接入密码中输入无线网密码。提交保存，刷新，观察模块状态，直至连接成功。（注：需要先关闭热点功能）\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片12.png)\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片13.png)\r
\r
##### Wifi设置在内置网页设置完成后需要在移动指挥箱上的AVCON软件讲网络设置按照下图设置IP和网关后设备才能正常上网。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片14.png)\r
\r
#### 16.5.34G接入\r
\r
##### 登陆内置网页后，点击 ，进入设备配置。在系统中找到网络配置，下拉，在“首选网络”中，选择“使用4G网络”，提交。\r
\r
##### 点击4G功能项，可以在状态参数中，查看拨号状态，当显示“拨号成功”时，则表示设备已经接入网络。\r
\r
##### 如果使用的sim卡为专网卡，则需要在配置参数中，添加apn、接入号、密码等参数。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片15.png)\r
\r
##### 4G设置在内置网页设置完成后，需要在移动指挥箱上的AVCON软件将网络设置按照下图设置IP和网关后设备才能正常上网。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片16.png)\r
\r
### 16.6移动指挥箱操作\r
\r
##### （ 1 ）移动指挥箱开机后，连接网络，会议终端。\r
\r
##### （ 2 ）进入会议终端后，点击右上角选项，进行语音，视频测试。\r
\r
##### （ 3 ）测试完毕后组会进行音视频指挥调度。\r
\r
![](./通信岗位单兵装备操作应用手册/16.移动指挥箱/图片17.png)\r
`,Mw=`## 17.基于卫星的便携式基站公网通信系统\r
\r
##### 以BWP500A型便携式卫星通信终端为例，操作人员通过智能手机连接到终端热点后就可以对便携终端进行控制与操作。\r
\r
### 17.1系统介绍\r
\r
##### 整套设备可实现快速拆卸安装，拆卸后的各部分组件及装箱便于单兵携带；便携式基站设备连接公网的过程中既可以通过光纤进行有线传输，也可以通过卫星链路实现无线传输；作为专用基站，仅允许获得许可的账号通过该基站连进公网进行通信及数据传输。\r
\r
### 17.2应用场景\r
\r
##### （ 1 ）在人口密集区域进行消防救援时，由于现场人口数量多、密度大，往往会造成通信线路拥塞，使得现场视频、图片无法及时回传至指挥中心。通过专用基站保证消防部队通信设备的使用质量。\r
\r
##### （ 2 ）发生重大自然灾害造成作业现场公网中断、应急通信车等大型设备无法进入时，该套设备可实现单兵携带，深入救援现场腹地；快速安装开通，第一时间恢复现场公网，保障救援现场的通信指挥。\r
\r
### 17.3系统组成\r
\r
##### 基于卫星的便携式基站公网通信系统由三部分组成：便携式基站、便携式卫星站和卫星落地站。整个系统组成框图如下：\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片1.png)\r
\r
### 17.4设备操作\r
\r
#### 17.4.1便携站安装步骤\r
\r
##### 详见公网卫星便携站连接移动指挥箱中公网卫星便携装操作。\r
\r
#### 17.4.2公网基站搭建\r
\r
##### （ 1 ）BBU接口示意图\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片2.png)\r
\r
##### （ 2 ）准备器材（支架、RRU、BBU、光纤线、电源）\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片3.png)\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片4.png)\r
\r
##### （ 3 ）将BBU与RRU用光纤交错连接。（BBU端TX口接RRU端RX口，BBU端RX口接RRU端TX口）\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片5.png)\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片6.png)\r
\r
##### ( 4 ）将RRU挂载至升降支杆上，并连接电源\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片7.png)\r
\r
##### （ 5 ）连接GPS配件至BBU\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片8.png)\r
\r
##### （ 6 ）用网线将卫星便携站与BBU网口连接，最后打开BBU电源开关\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片9.png)\r
\r
##### （ 7 ）开机后，通信终端自动连接至基站，获取中国移动数据信号，便可使用。\r
\r
![](./通信岗位单兵装备操作应用手册/17.基于卫星的便携式基站公网通信系统/图片10.png)\r
\r
### 17.5设备测试\r
\r
##### 在整个系统中，通信设备通过便携式基站进行信号的收发和处理，为避免消防救援现场有线链路受损，通过卫星链路将信号传输至卫星落地站后进入运营商核心网。\r
\r
##### 通过将天线内置于RRU中、设备小型化、定制存储运输容器等手段将整套基站设备进行集成，实现单兵携带，快速组装开通。基站可支持 32 个业务并发用户和 128 个RRC连接态用户，通过运营商网管中心对该基站进行优先级/白名单设置，可实现特定用户优先通过该基站进行通信。伸缩杆可将RRU设备升高至 6 米，经实测基站覆盖半径 250 米。`,Iw=`## 18.窄带自组网中继设备\r
\r
##### 以维德自组网便携基站为例进行操作说明。\r
\r
### 18.1设备介绍\r
\r
#### 18.1.1外部概览及名称\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片1.png)\r
\r
#### 18.1.2操作面板\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片2.png)\r
\r
##### 1 、 ANT 天线接口：模块天线接口。\r
\r
##### 2 、 功能键：对 AK830 便携基站进行功能设置，获取关于 AK830 便携基站的更多信息。 按菜单/确定功能键“□”，表示“进入菜单/确认”，按上调功能键“＜”可向上/向左 移动光标/增加，按下调功能键“＞”可向下/向右移动光标/减少。\r
\r
##### 3 、 OLED 液晶显示屏：采用 OLED 显示屏，功耗低，强光下依然能清晰显示 AK830 便携基 站模块信息。显示内容包括模块状态信息、工作频率、接收信号场强、温度、功率档等 信息。\r
\r
##### 4 、 电池充电接口：充电接口，为 AK830 便携基站充电，额定输入电压+12V。 5.管理接口：采用 Victel 专用写频器可以通过此口连接已安装管理软件的计算机进行 基站参数的设置修改。\r
\r
#### 18.1.3屏幕显示\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片3.png)\r
\r
#### 18.1.4菜单项说明\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片4.png)\r
\r
##### 1 、 功率设置: 高功率可扩大本产品的覆盖范围，发射功率越大，下行覆盖范围越广，用户可根据需要在保证上下行平衡的基础上进行选择；可选范围为 2W～20W，通过左右功能键选择后，点击“□”保存。\r
\r
##### 2 、 频率选择：可切换频率库中预设的模块收发频率。各模式下频率库中最多可预设 32 个频道可供选择。选取频率时，通过左右功能键选择后，点击“□”保存。\r
\r
##### 3 、 修改频率：将当前模块的发射/接收频率进行修改，修改规则自高位向低位；修改完成，须点击“保存”。AK830 本地和链路频率范围均在设备底部标签标出。\r
\r
##### 4 、 色码：本地数字常规模式下，色码生效，链路 V 模式下不生效。根据需要修改当前工作频率的色码，可选色码范围为 0 ～ 15 ，通过左右功能键选择后，按下确认键；修改完成后，点击“□”保存。\r
\r
##### 5 、 跳频类型：本地数字常规模式选择“常规组”，链路 V 模式可选“V3跳组”和“V6 跳组”，若使用电台都是维德电台，选择“V6 跳组”；否则均选择为“V3 跳组”，默认设置为“V3 跳组”。\r
\r
##### 6 、 声码器：设置设备所使用的声码器类型，PDT/自组网选项下有AMBE 和 NVOC 两种声码器可调，每次切换声码器都需要将本地跟链路声码器下的 PDT 和自组网选项全部切换为同一声码器。\r
\r
##### 7 、 转发门限：设置 AK830 便携基站模块的 RSSI 门限和 DQI 门限，当接收到的信号大于门限值时，AK830 便携基站接收信号，做相应的处理；本 AK830 便携基站灵敏-122dBm，标准“RSSI 门限”默认设置为- 130dBm，“DQI”默认设置为 0 ，修改完成， 点击“□”保存。 状态信息：设备模块状态信息界面，用于观察设备接收/发射时隙，各时隙场强以及DQI 值，从上往下依次是 1 - 6 时隙的状态信息，本地数字常规模式下，状态信息只有 1 和 2 时隙有效，链路 V 模式下，状态信息 1 - 6 时隙均有效。点击“□”可返回上一级菜单。\r
\r
##### 8 、 返回：返回主菜单，点击“□”。\r
\r
###### *注意：每次在菜单中修改参数，必须点击“□”返回主界面，然后屏幕显 示“保存参数中”此时必须等待 AK830 便携基站保存参数，才能进行下一 步操作，否则有可能会导致参数丢失，甚至会恢复出厂设置。\r
\r
\r
#### 18.1.5设备性能指标\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片5.png)\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片6.png)\r
\r
\r
#### 18.1.6维德中继本地频率支持频点\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片7.jpg)\r
\r
### 18.2工作原理\r
\r
##### 多个 AK830 自组网基站之间通过链路单频点，采用多级转发的形式，彼此无中心互联，使多个基站共同组成一个大范围的通信覆盖网，配置上可选用 2 - 7 台自组网基站。\r
\r
##### 各基站的覆盖频率均采用相同的单频点，所有参与通信的对讲机均采用相同的频率，可在多个基站的信号重叠覆盖区，可以实现没有同频干扰，话音效果正常清晰。\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片8.png)\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片9.png)\r
\r
### 18.3写频操作\r
\r
##### 1 、 连接 AK0 70 写频盒与写频线，随后将写频线两头分别连接至电脑与AK830 面板管理接口,切勿插反两端 USB 口。\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片10.png)\r
\r
##### 2 、 打开维德写频软件 VictelMs3.9；软件主界面如下图，点击左上角图标打开 STM32 芯片。\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片11.png)\r
\r
##### 3 、 选择数据--模式--自组网。\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片12.png)\r
\r
##### 4 、 选择面板参数--载频一--常规频率，在频率库写入本地频率和频率代号，本地频率为使用的手台终端对应的数字或模拟直通频率，频率代号将会代替该频率显示在主界面上。（每一页要先读取再进行设置，设置完成后点击配置即可完成本页设置及生效。点击下一页进行同样操作。）\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片13.png)\r
\r
##### 注意事项：\r
###### （ 1 ）频率代号最多只能支持写入 5 个汉字（ 10 个字符），本地单频点频率范围为358M-361M。\r
\r
###### （ 2 ）输入“发射频率”、“接收频率”、“色码”、“频率代号”，“是否显示”选择“是”，“代号显示”选择“否”。\r
\r
###### （ 3 ）点击“配置”试当前页码频率保存到设备频率库。\r
\r
###### （ 4 ）切换“当前页码”，可配置 8 页的频率库，最多可写入 32 个频率。\r
\r
##### 5 、 依次点开“面板参数”-“载频二”-“常规频率”界面，在频率库写入链路频率和频率代号，链路频率为使用的指挥手台终端对应的联网频率，频率代号不会出现在主界面上，不需要填写。如下图所示，频率写入方法同上，可配置 32 个频率。（每一页要先读取再进行设置，设置完成后点击配置即可完成本页设置及生效。点击下一页进行同样操作。）\r
\r
### 18.4中继操作\r
\r
##### 1 、功率设置：\r
\r
##### AK830-P 本地/链路最多可支持 32 个频率切换。此处以本地频率选择做示例说明，链路频率选择类同。AK830-P 本地及链路使用频率， 如非需要，请不要更改。本地频率修改范围为： 358 - 361M，链路频率修改范围为： 378 - 381M。\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片14.png)\r
\r
##### 2 、频率选择：\r
\r
##### AK830-P 本地/链路功率均支持 2 - 5 - 10 - 15 - 20W 共 5 个档位，可按键设置，此处以本地功率设置做示例说明，链路的功率设置类同。AK830-P 默认本地链路开启“15W”功率。\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片15.png)\r
\r
###### 注意事项：\r
\r
###### （ 1 ）频率、功率等参数出厂均已做配置，一般无需改动（设备之间链路频点一致）；\r
\r
###### （ 2 ）使用者只需开机，设备会自动锁星、同步、跟踪组网，同时查看“链路模块-状态信息”，锁卫星基站等待显示“Center 30”，非锁星基站等待显示“Hold 30”，且 4个同步参数均变为“YES”后，方可正常工作，此过程一般需等待 3 至 5 分钟；\r
\r
###### （ 3 ）对讲机把频率旋到基站本地对应的频率，就能呼叫。\r
\r
\r
### 18.5简单故障排查\r
\r
##### 1 、中继未起到信号延伸效果\r
\r
##### （ 1 ）安装天线后，设备界面右上角信号电平强度范围约在- 110 至- 120 之间，如安装天线后电平值约为- 130 ，则怀疑天线安装存在问题或者设备天线基座存在问题。\r
\r
##### （ 2 ）检查检查 中继与手台的收发频率以及色码。不匹配时需要重新设置相关参数。\r
\r
##### （ 3 ）检查靠近手台的中继是否在手台的信号覆盖范围。\r
\r
##### 2 、通信距离短\r
\r
##### （ 1 ）检查天线架设高度过低，观察天线架设高度是否达到覆盖要求。\r
\r
##### （ 2 ）检查天线与设备连接的接口是否连接紧密。\r
\r
##### （ 3 ）根据现场情况判断功率设置是否偏低，可适当提高功率。\r
\r
##### （ 4 ）检查是否存在干扰源，需远离干扰源。\r
\r
##### 3 、中继之间互通存在问题\r
\r
##### 确保链路模块使用频点一致后，查看链路模块—状态信息—右键切换界面。\r
\r
![](./通信岗位单兵装备操作应用手册/18.窄带自组网中继设备/图片16.png)\r
`,Nw=`## 19.宽带自组网设备\r
\r
##### 以环创设备为例。\r
\r
### 19.1设备介绍\r
\r
##### UHF自组网设备，是一种接收500MHz~600MHz的无线多跳自组网设备，是一种新型的无线终端接入设备。大量应用于城市火灾、自然灾害事故等救援场景的应急通信。\r
\r
##### （ 1 ）UHF中继站设备同时支持2.4GHz和5.8GHz的WiFi接入，可搭载专网或公网LTE模块，与专网或公网LTE基站相连接，实现上行通信。在户外使用内置电池供电，可连续待机超过 12 小时，工作状态可待机 6 个小时，配备 1 个百兆以太网口，可通过UHF网管平台进行批量管理。\r
##### （ 2 ）UHF手持终端设备支持2.4GHz的WiFi接入，户外使用内置电池供电，可连续待机超过 6 小时，工作状态可待机 4 个小时，配备 1 个百兆以太网口，可通过UHF网管平台进行批量管理。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片1.png)\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片2.png)\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片3.png)\r
\r
### 19.2设备配置\r
\r
#### 19.2.1Web管理页面登录\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片4.png)\r
\r
##### 物理连接:\r
\r
##### ( 1 ）设备启动正常后，将设备的LAN口通过网线与PC直连（也可通过WiFi连接）。\r
##### ( 2 ）将 PC的IP地址配置为 172.16.0.x /24 或 169.167.123.x/24 网段的地址。\r
##### 登录设备:\r
##### ( 1 ）打开浏览器，建议使用IE，在浏览器地址栏输入http://1 7 2.16. 0 .1/ 或\r
http://169.167.123.112。\r
##### ( 2 ）回车后弹出用户名、密码验证界面。\r
##### ( 3 ）输入用户名/密码：admin/admin回车，登录UHF自组网设备。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片5.png)\r
\r
#### 19.2.2别名设置\r
\r
##### 为了多台UHF自组网设备同时使用时方便区分，进入【系统配置--> 别名】，可以设置设备的别名。\r
\r
##### 设置完成后重启生效，可以在“UHF工具箱”中点击“搜索”按钮查找设备。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片6.png)\r
\r
##### 注：输入的内容仅支持英文和数字，点击“设置”只是配置下发并保存，该配置重启^ 生效。\r
\r
#### 19.2.3WiFi无线配置\r
\r
##### ( 1 ）2.4GHz的WiFi信道配置缺省为 11 信道，若需要配置成其他信道，可进入【网络配置--> 无线--> wifi 0 】，选择需要修改的SSID，然后点击【配置】，进入基本设置界面：\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片7.png)\r
\r
##### ( 2 ）若需要配置2.4GHz无线协议模式，可在【高级设置--> 模式】中选择，点击【保存&应用】后，立即生效。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片8.png)\r
\r
##### ( 3 ）5GHz的WiFi（仅中继站支持）信道配置缺省为 165 信道，若需要配置成其他信道，可进入【网络配置--> 无线--> wifi 1 】，选择需要修改的SSID，然后点击【配置】，进入基本设置界面：\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片9.png)\r
\r
##### ( 4 ）若需要配置5GHz无线协议模式，可在【高级设置--> 模式】中选择，点击【保存&应用】后，立即生效。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片10.png)\r
\r
##### (5）2.4GHz或 5 GHz的WiFi若需配置HT模式（频宽设置），可在【高级设置--> HT模式】中选择，点击【保存&应用】后，立即生效。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片11.png)\r
\r
###### 注：2.4GHz信道可选： 1 ~11或自动；\r
###### 2.4GHz的无线协议可选：802.11b/g/gn；\r
###### 5 GHz的无线协议可选：802.11a/g/an；\r
###### 5 GHz信道可选： 149 、 153 、 157 、 161 、 165 ；\r
###### 发射功率可选： 0 ~20dBm（0~100mw）；\r
###### 频宽模式可选： 20 MHz、 40 MHz、 80 MHz；\r
\r
#### 19.2.4WiFi的SSID配置\r
\r
##### ( 1 ）修改ESSID相关参数，需进入【网络配置--> 无线--> 接口配置--> 基本设置】，推荐使用UTF- 8 编码方式、接入点AP模式：\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片12.png)\r
\r
##### ( 2 ）选择【无线安全】，推荐使用WAP-PSK/WPA2-PSK自动加密方式：\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片13.png)\r
\r
#### 19.2.5LTE的接入点配置\r
\r
##### ( 1 ）进入【网络配置-->Ltewan--> Apn】，可以查看当前配置的接入点名称。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片14.png)\r
\r
##### ( 2 ）在【接入点选择】中可以选择接入点名称，默认设置为手动cpe.com，适用于UHF专网主站接入专网LTE的组网。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片15.png)\r
\r
##### ( 3 ）若要使用VPDN拨入公安消防调度网，则需要在【接入点选择】中选择“手动VPDN”，并正确配置VPDN的相关参数，点击设置进行保存，且重启生效。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片16.png)\r
\r
###### 注：只有UHF公网主站支持VPDN的配置，配置前请检查是否在设备卡槽插入了专用的运营商SIM卡；\r
\r
#### 19.2.6LTE信息查询\r
\r
##### 进入【网络配置--> Ltewan --> LTE信息】，可以查看当前LTE连接的状态，包括：连接状态、频段信息、频点信息、小区ID、RSSI、RSRP、RSRQ。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片17.png)\r
\r
###### 注：RSSI：接收的信号强度；\r
###### RSRP：子载波平均接收功率，RSRP<- 10 0dbm表示信号较差；\r
###### RSRQ：LTE参考信号接收质量；\r
\r
\r
#### 19.2.7DHCP服务器配置\r
\r
##### ( 1 ）进入【网络配置--> DHCP服务器】，可以查看DHCP地址池的状态，包括：绑定的接口情况、开始结束地址及租期的情况。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片18.png)\r
\r
##### ( 2 ）点击【配置】即可进入具体参数的配置页面（包括：起始地址、结束地址、租约时间、DNS），配置时请确保LAN口IP与地址池在同一网段，配置完后点击【保存&应用】，即可应用当前DHCP服务。DHCP服务的开启或关闭由主站开关控制\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片19.png)\r
\r
#### 19.2.8UHF通信模块配置\r
\r
##### UHF自组网设备中搭载了500MHz~600MHz的无线多跳射频模块，设备通过UHF通信模块进行自组网通讯，并实现多跳链路。\r
\r
\r
##### 进入【Mesh配置--> 设置】，可以查看或修改当前UHF通信模块的配置，包括：组网模式、中心频点、发射功率、频宽、RTS、空间流、网络标识、模块Mac地址。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片20.png)\r
\r
###### 注：点击“设置”只是配置下发并保存，并不会立即生效。\r
###### 点击“配置并生效”，则配置下发后UHF模块会重启，大概需要等待 1 min，即可使用。\r
\r
#### 19.2.9UHF中心频点设置\r
\r
###### 在【Mesh配置-->频点】中输入希望使用的中心频点，并点击“设置”，重启后生效。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片21.png)\r
\r
###### 注：UHF通信模块的中心频点可以选择 522 MHz~572MHz，最小配置间隔为 1 MHz。\r
\r
#### 19.2.10UHF无线频宽设置\r
\r
##### 在【Mesh配置-->频宽】中选择频宽大小，并点击“设置”，重启后生效。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片22.png)\r
\r
###### 注：频宽配置可以选择20MHz、10MHz、5MHz。\r
\r
#### 19.2.11UHF空间流数设置\r
\r
#####  在【Mesh配置-->空间流】中选择希望使用的空间流数，并点击“设置”，重启后生效。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片23.png)\r
\r
###### 注： 1 x1表示 1 根天线收发， 2 x2表示 2 根天线收发；\r
\r
#### 19.2.12UHF网络标识设置\r
\r
##### 相互连接的几个UHF通信模块，需要具有相同的网络标识。也可通过设置不同的网络标识来划分多个自组网络，多个自组网络是独立的，不会相互关联。在【Mesh配置-->网络标识】中可以输入或修改UHF网络标识，默认为uhf-relay。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片24.png)\r
\r
###### 注：自组网设备使用UHF无线时，只有当UHF通信模块的网络标识、频宽、信道、设备类型等参数一一对应时，设备之间才能正常通信。\r
\r
#### 19.2.13设备重启\r
\r
##### 方法一：冷重启，即关闭UHF自组网设备的右侧的电源开关，等待 1 秒后再次开启。\r
\r
##### 方法二：热重启，即在Web配置页面的右上角，操作完所有配置后，可以点击“重启”，在弹出的确认对话框中点击“确认”设备即自动重启。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片25.png)\r
\r
#### 19.2.14固件升级\r
\r
##### 我们会定期对设备软件进行bug修复和功能更新，发布最新固件版本后，用户可以下载并自行升级.\r
\r
##### 点击【系统配置--> 版本升级】，点击“浏览”，在弹出的对话框中选择下载好的固件版本升级包（格式为 .bin文件）。\r
\r
##### 然后点击“升级版本”，在弹出的对话框中选择“执行”，即对设备进行固件升级。\r
\r
##### UHF自组网设备升级成功后，可进入首页查看版本信息。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片26.png)\r
\r
###### 注：升级大约 2 分钟，请勿断电。升级成功后设备会自动重启。\r
\r
#### 19.2.15备份及恢复出厂\r
\r
##### 登录UHF自组网设备Web页面，点击【系统配置--> 备份/恢复】；\r
\r
##### 备份配置：点击【生成备份】，可备份当前设备的所有配置信息；\r
\r
##### 恢复配置：在PC中选择 .bat格式的配置文件，然后点击【上传备份】，\r
\r
##### 即可恢复之前的配置信息；\r
\r
##### 恢复出厂：点击【执行复位】，并在弹出的确认框中点击确认，即可恢复出厂默认配置；\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片27.png)\r
\r
### 19.3设备操作\r
\r
#### 19.3.1设备使用前检查\r
\r
##### （ 1 ）确认设备型号：SN-R500为中继站，SN-R500-E6为UHF专网主站，SN-R500-EX为UHF公网主站，SN-S500为UHF手持终端；\r
\r
##### （ 2 ）SN-R500-E6检查设备左侧卡槽，是否插入专网LTE指定的SIM卡，并开启了主站开关，如图 2 - 1 所示；\r
\r
##### （ 3 ）SN-R500-EX检查设备左侧卡槽，是否插入公网LTE指定的SIM卡，并开启了主站开关，如图 2 - 1 所示；\r
\r
##### （ 4 ）根据配件说明，检查UHF天线、WiFi天线、LTE天线是否正确接入；\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片28.png)\r
\r
#### 19.3.2现场环境信号扫描\r
\r
##### 由于室外环境复杂，干扰信号较多，无法判断用户处是否处于正常组网和使用的状态，建议在搭建组网环境前，进行信号扫描。操作步骤如下：确保UHF自组网设备的WiFi已经启用，并接上了WiFi天线.在安卓系统为4.0以上的手机中安装了寰创最新发布的“UHF工具箱”apk安装包\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片29.png)\r
\r
#### 19.3.3手机关联UHF设备WiFi\r
\r
##### 在手机中进入【设置--> WLAN】，并打开“WLAN”开关。找到SSID名称为UHF自组网设备的WiFi，点击关联并输入密码，直到显示已连接。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片30.png)\r
\r
###### 注意：中继站 WiFi的默认SSID为UHF-RELAY，手持终端 WiFi的默认SSID为UHF-STA，密码默认 12345678\r
###### 打开“UHF工具箱”APP首页\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片31.png)\r
\r
##### 扫描当前频点空口环境:为了UHF自组网设备在实际使用时，避免频带内的干扰，设备可以对带内的干扰情况进行扫描，包括：空口利用率、干扰率、环境底噪。在APP首页点击“扫频频点”按钮系统会自动对当前工作信道扫描。\r
\r
##### 全频段扫描:有时为了要确定UHF自组网的工作信道，排除周围干扰，往往对整个 517 MHz~572MHz的信道进行全扫描，寻找干扰较少的频段给UHF自组网使用，如图所示全信道扫描的结果：\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片32.png)\r
\r
#### 19.3.4修改自组网频点\r
\r
##### 假设此时全频段的空口环境如图 2 - 13 所示，在557MHz~577MHz频段的空口利用率或空口干扰率较高，此时可能存在干扰，为了让UHF自组网性能发挥最优，我们可以通过“UHF工具箱”修改UHF自组网设备的中心频点，来避开干扰信道。具体操作如下几个步骤：\r
##### 搜索周围设备\r
##### 点击【APP首页--> 设备管理-->“搜索”图标】，搜索到附近相同信道上的UHF自组网设备如图 2 - 15 所示。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片33.png)\r
\r
##### 修改中心频点参数\r
\r
##### 勾选部分设备或全选所有，并点击【设备配置--> 频点信息配置】，输入修改的中心频点，点击【下发】即可。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片34.png)\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片35.png)\r
\r
###### 注意：UHF通信模块的信道可以选择 5 22MHz~572MHz，最小配置间隔为 1 MHz。频宽配置可以选择20MHz、10MHz、5MHz。\r
###### 注意：进行频点修改前，请先确定所有设备是否都被搜索发现，否则有发生设备托管的危险。在进行小队分组时，A队、B队可以使用不同信道，配置时两个队伍的设备请分别开机配置。\r
\r
#### 19.3.5灯态信号显示\r
\r
##### UHF中继站时，可以观察设备上方的“UHF信号指示灯”、“LTE信号指示灯”颜色的变化来选择相应的投放位置，其中“UHF信号指示灯”表示该中继与上一跳设备之间的信号质量，“LTE信号指示灯”表示该主站与LTE基站之间的信号质量。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片36.png)\r
\r
##### 放置中继站时，尽量将设备及其各天线垂直于地面摆放；\r
\r
##### 避免中继站与中继站之间有太多的障碍物（墙面、隔断等）遮挡，可以通过调整天线的方位以及中继站之间的距离来改善信号强度，从而提高自组网的链路质量；\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片37.png)\r
\r
##### UHF手持终端可随身携带，上行通过UHF无线信号与中继站连接，下行通过WiFi或有线与业务终端（如IP摄像头）。和中继站相同：“UHF信号指示灯”表示该设备与上一跳设备之间的信号质量，通常信号灯变黄色即可投放一台中继站（根据实际场景进行调整）。\r
##### 自组网设备应尽量远离：大型雷达站、发射电台、变电站，高压电线，以及震动大或强噪声的环境；不要与大块金属、铁栏杆、墙体等物体靠太近；如表所示，给出了一些室内障碍物对信号衰减的情况，实际操作中可作为参考，适当选择合适位置地点使用UHF自组网设备。\r
\r
![](./通信岗位单兵装备操作应用手册/19.宽带自组网设备/图片38.png)\r
\r
###### 注意：(1)UHF信号指示灯，表示本设备与上一跳设备之间的UHF信号情况。有多条路径选择时，会自动选择最优路径传输。向地下前进时观察此灯，当UHF信号指示灯由绿变橙，即表示需在该区域内增加一台中继站，然后继续前进并重复上一步操作，从而实现多跳自组网。\r
###### (2)LTE信号指示灯，表示UHF专网主站或UHF公网主站与LTE基站之间的信号情况，在地面到地下的入口处，观察LTE信号指示灯由绿变橙，即表示在该区域需放置该UHF主站，从而实现多跳自组网。\r
\r
#### 19.3.6远距离覆盖\r
\r
##### 远距离多跳覆盖的基本原则：\r
\r
##### 避免阴影效应，即中继站与中继站之间尽可能减少障碍物（大型建筑物、高山、树木等）遮挡。可以通过调整天线的方位以及中继站之间的距离来改善信号强度，从而提高自组网的链路质量；\r
\r
##### 中继站天线位置尽可能的架高，这样天线接收或发射的电磁波被阻挡的越少，增益越大，损耗也就越小，覆盖也就越远；\r
\r
##### 可以选择天线专用架杆，在架设天线时应注意地面是否平稳可靠，架杆固定是否稳定不会倒塌，必要时应使用风绳加固，以防止大风大雨天气将天线架杆吹到；\r
\r
##### 应尽量远离：大型雷达站、发射电台、变电站，高压电线，以及强噪声的环境；\r
\r
##### 必要时可选择增益高的全向天线或定向天线进行远距离覆盖；\r
\r
### 19.4常见问题排查\r
\r
##### 1 、 UHF链路不通？\r
\r
##### (1) 查看基站和单兵组网模式是否为自组网模式，频点、频宽、网络标识和功率是否一致。\r
\r
##### 2 、 基站4G公网无法拨上号？\r
\r
##### 先查看基站是否为R500-EX型号，R500-E6基站是不支持公网；\r
\r
##### 查看SIM卡是否插反；如插成功，观察基站上方公网LTE灯态闪烁；\r
\r
##### 查看是否开启设备左侧的主站开关；开启后才能启动拨号功能。\r
\r
##### 3. 手机无法连接基站或者单兵的wifi？\r
\r
##### (1) 先查看WIFI天线是否接上；\r
\r
##### 查看手机连接热点名称是否正确；\r
\r
##### 查看基站的DHCP功能是否开启，开启后才能使得手机分配到地址连接到网络中；\r
\r
##### 4 、 设备WEB页面无法访问？\r
\r
##### 设备网口使用网线与PC连接，在PC的本地网卡上配置静态地址，169.167.123.xx/255.255.255.0或者172.16.0.x/255.255.255. 0 ，然后使用浏览器输入169.167.123.112或者172.16.0.1进入登录页面。\r
\r
##### 5 、 设备与设备之间距离近却信号较弱？\r
\r
##### 在设备开机前先使用app软件对于现有环境扫描，待扫描结束后选取干净频点，在web页面上切换频点后观察信号变化。`,Dw=`## 20.移动作战终端\r
\r
### 20.1加入“中国消防救援”企业\r
\r
##### 开启手机 GPS 定位服务，登录企业微信 APP，加入“中国消防救援”企业。\r
\r
![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片1.png)\r
\r
### 20.2加入作战\r
\r
##### 搜索进入指定灾情，加入作战，上报人员、车辆位置灾情显示栏默认显示最新灾情。点击灾情显示栏进入灾情选择页面。灾情列表显示的是当前消防机构下的所有灾情。\r
\r
##### 点击选中某一个灾情，系统自动返回首页，此时灾情显示栏显示选中灾情的名称。\r
\r
##### 加入作战：选择好灾情后，点击【加入作战】或【加入观战】按钮，参加作战的人员选择加入作战，即纳入该灾情的作战人员名单，并会在实战指挥平台上显示；不参加作战的人员可以通过加入观战查看该灾情信息。\r
\r
![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片2.png)![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片3.png)![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片4.png)\r
\r
### 20.3上报位置\r
\r
##### 在主页选择【上报位置】可以手动上报各类位置，其中选择【车辆位置】，可以手动输入车牌号进行位置上报。\r
\r
![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片5.png)![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片6.png)![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片7.png)\r
\r
### 20.4信息查看\r
\r
##### 在人员列表中是否可以看到加入作战的通信保障队员的基本信息，且在地图上能够看到通信保障队员的位置信息。\r
\r
![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片8.png)![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片9.png)![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片10.png)\r
\r
### 20.5指令发送\r
\r
##### 发送信息、图片、视频等指令信息\r
![](./通信岗位单兵装备操作应用手册/20.移动作战终端/图片11.png)`,Rw=`## 21.手机横拍操\r
\r
### 21.1操作准备\r
\r
##### 根据手机横拍要求下载所需软件：\r
\r
##### ZY play：连接手机进行视屏操作。\r
\r
##### 百度网盘、微信、QQ：按要求上传拍摄视频。\r
\r
##### 今日水印相机：用于视频拍摄增加角标。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片1.png)\r
\r
### 21.2操作步骤\r
\r
#### 21.2.1今日水印相机角标制作\r
\r
##### （ 1 ）手机下载今日水印相机 APP，打开点击左上角三条横线按钮，在弹出的界面点击相机设置按钮。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片2.png)\r
\r
##### （ 2 ）在相机设置里点击右下角官方水印按钮，新弹出的界面选择无水印，设置完毕之后返回相机主界面。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片3.png)\r
\r
\r
##### （ 3 ）点击水印按钮，选择工作栏里工程水印，点击进入编辑水印模板。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片4.png)\r
\r
##### （ 4 ）打开品牌图片按钮，点击进入，在搜索框输入中国消防救援进行搜索。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片5.png)\r
\r
##### （ 5 ）在搜索到的图片中选择高亮满屏的消防救援旗图案，并点击保存。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片6.png)\r
\r
##### （ 6 ）打开工程名称按钮，进入并设置工程名称为“XX 事故救援现场”，点击完成。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片7.png)\r
\r
##### （ 7 ）依次打开拍摄时间、天气、地点、海拔、方位角按钮，拍摄时间设置为“日期+星期”格式，天气设置为“温 度+风向+湿度”格式。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片8.png)\r
\r
##### （ 8 ）打开备注、建设单位按钮，设置备注栏标题改成“任务”，内容为“当前拍摄画面正在执行的任务”，建设单位栏标题改成“制作单位”，内容为“拍摄者单位”。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片9.png)\r
\r
##### （ 9 ）点击左上角改颜色/大小按钮，水印大小设置为标准， 主题色设置为深蓝色，透明度设置为半透明，设置完毕后点 击完成返回主界面进行视频或者图片的拍摄，拍摄完毕后再使用剪映等。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片10.png)\r
\r
#### 21.2.2三轴稳定器使用\r
\r
##### （ 1 ）将手机固定在三轴稳定器（智云 smooth4）上，并调节平衡。（确保在未开机状态下，手机处于平衡状态）\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片11.png)\r
\r
##### （ 2 ）按下开机按钮启动机器，同时设备自动开启。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片12.png)\r
\r
##### （ 3 ）点击今日水印相机，根据拍摄任务对角标进行编辑。\r
\r
##### （ 4 ）选定拍摄区域，将按钮调制 L 档进入全锁定模式，采取定点 360 °环拍，同时按下设备后侧按钮上端进入“疯狗模式”，进行“边拍摄边报告”（视频拍摄时间不得少于 30S）。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片13.png)\r
\r
#### 21.2.3后期视频制作\r
\r
##### （ 1 ）进入剪映，点击左下角剪辑按钮，同时点击开始制作。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片14.png)\r
\r
##### （ 2 ）选择拍摄视频，点击添加。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片15.png)\r
\r
##### （ 3 ）进行视频字幕添加，点击文字，选择识别字幕，点击开始识别，等待完成识别字幕。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片16.png)\r
\r
##### （ 4 ）将时间针选择到要更改文字区域，点击右上角编辑按钮对文字进行编辑，完成后点击√ 保存。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片17.png)\r
\r
##### （ 5 ）选择视频末端剪映水印及片尾，点击删除。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片18.png)\r
\r
##### （ 6 ）点击导出按钮，将视频导出。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片19.png)\r
\r
#### 21.2.4视频上传\r
\r
##### （ 1 ）打开手机公网信号。\r
\r
##### （ 2 ）进入微信，按要求选择上传对话框，点击右下角+，点击相册，选择制作好视频，点击原图，发送。\r
\r
![](./通信岗位单兵装备操作应用手册/21.手机横拍操/图片20.png)`,$w=`## 22.应急微指挥平台\r
\r
### 22.1运动相机直播\r
\r
#### 22.1.1器材准备\r
\r
##### 无线网卡、运动相机、相机支架、DJI Mimo（软件）\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片1.png)\r
\r
#### 22.1.2运动相机直播配置\r
\r
##### 1 、 打开手机连接无线网并同时开启蓝牙\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片2.png)\r
\r
##### 2 、 使用 Mimo 连接 Osmo Action，进入 Mimo 图传界面后选择直播功能，并选择RTMP。\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片3.png)\r
\r
##### 3 、 新增任务\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片4.png)\r
\r
##### 4 、 选择任务类型\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片5.png)\r
\r
##### 5 、 填写任务内容\r
\r
##### 扫码登录（直播设备固定二维码） 按要求填写任务名称、有效日期、有效时间等信息 点击提交\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片6.png)\r
\r
### 22.2无人机直播操作\r
\r
#### 22.2.1器材准备\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片7.png)\r
\r
#### 22.2.2应急智慧机安装\r
\r
##### 安装应急智慧机天线（注意 4G、WIFE 天线与设备端口相对应）\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片8.png)\r
\r
#### 22.2.3设备连接\r
\r
##### 利用 HDMI 线连接应急指挥机与无人机遥控器。\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片9.png)\r
\r
#### 22.2.4设备开启\r
\r
##### 按下开机键\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片10.png)\r
\r
##### 观察显示屏IP，显示出 IP 为设备有 4G 网络\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片11.png)\r
\r
### 22.3应急云播小程序添加任务\r
\r
#### 22.3.1新增任务\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片12.png)\r
\r
#### 22.3.2选择任务类型\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片13.png)\r
\r
#### 22.3.3填写任务内容\r
\r
##### （ 1 ）扫码登录（直播设备固定二维码）\r
\r
##### （ 2 ）按要求填写任务名称、有效日期、\r
\r
##### （ 3 ）有效时间等信息点击提交\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片14.png)\r
\r
### 22.4手机直播操作\r
\r
#### 22.4.1器材准备\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片15.png)\r
\r
#### 22.4.2手机云台连接\r
\r
##### 将手机与云台连接关机状态下，短按一次 M 键查看电量，长按开、关机。\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片16.png)\r
\r
#### 22.4.3手机直播配置\r
\r
![](./通信岗位单兵装备操作应用手册/22.应急微指挥平台/图片17.png)\r
`,Kw=`## 23.常用接口、线材的识别和制作\r
\r
### 23.1网线\r
\r
##### 网线 T568A 和 T568B 线序识别和制作：\r
\r
### 23.1.1器材准备\r
\r
##### 一米长网线两根，网线钳，水晶头，寻线仪。\r
\r
##### T568A 线序为：白绿 绿 白橙 蓝 白蓝 橙 白棕 棕\r
\r
##### T568B 线序为：白橙 橙 白绿 蓝 白蓝 绿 白棕 棕\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-687.jpg)\r
\r
### 23.1.2制作步骤\r
\r
##### 操作人员准备器材，用网线钳将网线外皮拨开，约 2cm，按线序排列、剪齐，插入水晶头，最后用寻线仪测试。\r
\r
## 23.2常见音频接口识别和制作.\r
\r
### 23.2.1音频接口分类\r
\r
##### 常见的音频模拟输入、输出接口有：TRS 接口（大/小三芯）、RCA 莲花头、XLR 卡农口等。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-688.jpg)![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-689.jpg)![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-690.jpg)\r
\r
##### RCA接口:复合视频信号(CVBS)接口，也就是通常所称的RCA接口。RCA俗称莲花插座，又叫AV端子，也称AV 接口，通常都是成对的白色的音频接口和黄色的视频接口，它通常采用RCA(俗称莲花头)进行连接，使用时只需要将带莲花头的标准AV 线缆与相应接口连接起来即可。RCA接头是目前为止最为常见的一种音/视频接线端子。RCA音频端子一般成对地用不同颜色标注：右声道用红色，左声道用黑色或白色。一般来讲，RCA立体声音频线都是左右声道为一组，每声道外观上是一根线。通常都是成对的音频接口右声道(红色)左声道(白色)和视频接口(黄色)。复合视频(Composite)通常采用黄色的RCA(莲花插座)接头。“复合”含义是同一信道中传输亮度和色度信号的模拟信号，但电视机如果不能很好的分离这两种信号，就会出现虚影。音频接口和视频接口成对使用，通常都是白色的音频接口和黄色的视频接口，采用RCA(莲花头)进行连接，使用时只需要将带莲花头的标准AV 线缆与相应接口连接起来即可（但有些需要软件支持）。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-691.jpg)\r
\r
##### 卡农插头（XLR）：卡侬线常用于话筒与调音台；调音台主输出与周边设备（如均衡器、分频器、音箱控制器）；周边设备（均衡器）、分配器或音箱控制器与功放的连接，总之用于卡侬输出、输入设备之间的连接。卡侬输入、输出的音响设备（图 1 ）输出信号端为“卡侬公座”（与母头连接），输入信号端为“卡侬母座”（与公头连接），因此设备连接用的卡侬线为一头为“卡侬公头”另一头为“卡侬母头”的话筒线或音频连接线。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-692.jpg)\r
\r
### 23.2.2卡农制作\r
\r
##### (1) 剥线：\r
\r
##### 在剥线前请将电烙铁通电使之升温。先选择一根话筒线用偏口钳在距离一端约2.5厘米处剥去外层橡胶护套层、拨开屏蔽层、去除棉纱填充物（音频连接线无棉纱填充物），只留下带护套层的两芯及屏蔽层。再用剥线钳或偏口钳在距每根芯的0.5厘米处刨去每根芯线的护套层露出铜质内芯，再用手将屏蔽层拧扎结实。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-693.jpg)\r
\r
##### ( 2 ) 线材粘锡：\r
\r
##### 用电烙铁沾焊锡涂抹在线材的铜质两芯和屏蔽层，屏蔽层涂抹的焊锡与两芯一样即可。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-695.jpg)\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-696.jpg)\r
\r
##### ( 3 ) 拆卡侬头、粘锡：\r
\r
##### 将粘好锡的线材及电烙铁放置一旁趣出一只卡侬头（公、母头都可以），拧下底盖、拆掉线卡及外壳取出内芯。用上面的方法在卡侬头内芯的三个焊接点上粘锡。\r
\r
##### ( 4 ) 焊接：\r
\r
##### 把卡侬头的底盖、线卡套入线材，将“红色护套的芯”与卡侬内芯上的焊接端“ 2 ”焊接；将“白色护套的芯”与卡侬内芯上的焊接端“ 3 ”焊接；将“屏蔽层”与卡侬内芯上的焊接端“ 1 ”焊接。将焊接好的内芯插入卡侬头外壳，插紧线卡，拧上底盖后线材的一端就焊接好了。采用同样的方法焊接线材另一头，如以焊接的是“公头”另一头就焊接“母头”。\r
\r
##### 须注意的是如已焊接好的一端“红色的芯”焊接的是卡侬内芯的焊接点“ 2 ”，那么“红色的芯”另一端的也应焊接在另一端卡侬内芯的“ 2 ”端点上，依此类推。也就是说同一根芯的两端应焊接在两个头的同一焊接点上，卡侬头内芯的焊接端“ 1 ”始终与话筒线或音频连接线的“屏蔽”焊接在一起。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-697.jpg)\r
\r
### 23.2.3TRS制作\r
\r
##### 大三芯头的线材制作方法从剥线到线材、插头焊接点粘锡都是和卡侬线的焊接是相同的。要注意的是在通常情况下大三芯头的“ 1 ”为平衡信号“+”端（热端），“ 2 ”为平衡信号“-”端（冷端），“ 3 ”为平衡信号“屏蔽”端。大三芯焊好后就要固定线材了，大三芯的线材固定卡是与屏蔽端连为一体的。具体方法是将线材束直用尖嘴钳将“固定卡“轻轻弯曲包裹住线材后再用尖嘴钳将固定卡钳紧。因固定卡边缘比较锋利，固定线材时注意不要把各护套层扎破以免形成短路及断路。用同样的方法焊接线材的另一头后线材就焊好了。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-698.jpg)\r
\r
### 23.2.4大二芯和莲花头音频线的制作\r
\r
##### 由于大二芯和莲花头都是两芯的结构（非平衡），话筒线或音频连接线包括屏蔽层共有三个芯，因此在刨线时就与卡侬、大三芯（平衡）的线材有所不同。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-699.jpg)\r
\r
##### (1) 剥线：\r
\r
##### 选择适当长度的线材，用偏口钳或剥线钳在距一端 3 厘米处刨去线材的外部橡套层；剪去棉纱填充物（话筒线）；将屏蔽层挑起露出芯“ 1 ”和芯“ 2 ”。再用偏口钳或剥线钳刨去白色护套芯的白色护套，去除长度与屏蔽层外露的长度相同即可。线材剥好后形成屏蔽层、去除护套层的芯线两根铜线和一根带有护套的芯线共计三根线。\r
\r
##### ( 2 ) 线材的拧结：\r
\r
##### 线材剥好后将去除护套的芯线和屏蔽层拧结在一起，拧结时应拧得结实些尽量不要松散。拧结好的线材形成了两芯的结构。线材拧结的目的是将三芯（两根芯线和一根屏蔽层）改为两芯，以便和两芯的插头（大二芯、莲花头等）焊接。\r
\r
##### ( 3 ) 粘锡\r
\r
##### 线材拧结好后就可以对线材和插头的焊接点进行粘锡了。\r
\r
##### ( 4 ) 焊接\r
\r
##### 焊接前请将大二芯和莲花头的保护弹簧、底盖、护套套在线材上，以免焊接好后无法套上插头的底盖。具体焊接点位如下。\r
\r
##### ( 5 ) 固定\r
\r
##### 线材焊好后请用尖嘴钳将线材固定好并将底盖拧好。\r
\r
##### ( 6 ) 其他\r
\r
##### 其它非平衡线材（大二芯对大二芯、莲花对莲花）的制作没有差别，只是线材的两端插头相同。\r
\r
\r
## 23.3常见视频接口的识别\r
\r
##### VGA 接口也叫 D-Sub 接口。VGA 接口是一种 D 型接口，针数为 15的视频接口，分成三排，每排五个。VGA输出和传递的是模拟信号，信号损失，显示较为模糊。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-700.jpg)\r
\r
##### DVI： DVI接口有两个标准， 25 针和 29 针。直观来说，这两种接口没有区别。DVI接口传输的是数字信号，可以传输大分辨率的视频信号。DVI连接显示器时不用发生转换，所以信号没有损失。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-701.jpg)\r
\r
##### HDMI： HDMI接口传输的也是数字信号，无需在信号传送前进行数/模或者模/数转换，所以在视频质量上和DVI接口传输所实现的效果基本相同。HDMI接口还能够传送音频信号。HDMI有三个接口。主要考虑到设备的需要。如数码相机的体积小，需要小的接口，就使用micro HDMI。三种接口只是在体积上有区别，功能相同。 HDMI 接口可以提供高达5Gbps 的数据传输带宽，可以传送无压缩的音频信号及高分辨率视频信号。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-702.jpg)\r
\r
## 23.4光纤接口的识别\r
\r
##### 常用的光纤接口就 4 种:\r
\r
##### SC 接口，俗称大方头，一般的光猫和光电转换器都是使用这种接口，当前运营商连接用户端都使用这种接口，这种接口插拔方便稳固；\r
\r
##### LC 接口，俗称小方头，一般用于交换路由设备的光模块上，这种接口比较小巧，可以节省空间，但相比大方头、圆头要脆弱得多，容易损坏；\r
\r
##### FC 接口，俗称圆头，接口对接时需要注意对准缺口，然后通过螺纹拧紧、牢固，这种接口是最牢固的，主要用到工程端出口，现在渐渐被大方头替代。\r
\r
##### ST 接口，和 FC 接口相似，区别在于通过挂靠牢固，现在使用得已经很少了。\r
\r
![](./通信岗位单兵装备操作应用手册/23.常用接口、线材的识别和制作/image-703.jpg)`;function zf(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let tr=zf();function Lw(n){tr=n}const Vf=/[&<>"']/,Fw=new RegExp(Vf.source,"g"),Gf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Bw=new RegExp(Gf.source,"g"),jw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vs=n=>jw[n];function un(n,e){if(e){if(Vf.test(n))return n.replace(Fw,vs)}else if(Gf.test(n))return n.replace(Bw,vs);return n}const Hw=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Uf(n){return n.replace(Hw,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const zw=/(^|[^\[])\^/g;function Fe(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(r,a)=>(a=a.source||a,a=a.replace(zw,"$1"),n=n.replace(r,a),t),getRegex:()=>new RegExp(n,e)};return t}const Vw=/[^\w:]/g,Gw=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ps(n,e,t){if(n){let r;try{r=decodeURIComponent(Uf(t)).replace(Vw,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!Gw.test(t)&&(t=Yw(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Qr={},Uw=/^[^:]+:\/*[^/]*$/,Ww=/^([^:]+:)[\s\S]*$/,qw=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Yw(n,e){Qr[" "+n]||(Uw.test(n)?Qr[" "+n]=n+"/":Qr[" "+n]=sa(n,"/",!0)),n=Qr[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(Ww,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(qw,"$1")+e:n+e}const xa={exec:function(){}};function Ln(n){let e=1,t,r;for(;e<arguments.length;e++){t=arguments[e];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}function hs(n,e){const t=n.replace(/\|/g,(i,o,l)=>{let u=!1,s=o;for(;--s>=0&&l[s]==="\\";)u=!u;return u?"|":" |"}),r=t.split(/ \|/);let a=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;a<r.length;a++)r[a]=r[a].trim().replace(/\\\|/g,"|");return r}function sa(n,e,t){const r=n.length;if(r===0)return"";let a=0;for(;a<r;){const i=n.charAt(r-a-1);if(i===e&&!t)a++;else if(i!==e&&t)a++;else break}return n.slice(0,r-a)}function Xw(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let r=0,a=0;for(;a<t;a++)if(n[a]==="\\")a++;else if(n[a]===e[0])r++;else if(n[a]===e[1]&&(r--,r<0))return a;return-1}function Wf(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function gs(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function ms(n,e,t,r){const a=e.href,i=e.title?un(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:t,href:a,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,l}return{type:"image",raw:t,href:a,title:i,text:un(o)}}function Qw(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(a=>{const i=a.match(/^\s+/);if(i===null)return a;const[o]=i;return o.length>=r.length?a.slice(r.length):a}).join(`
`)}class Lo{constructor(e){this.options=e||tr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:sa(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],a=Qw(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:a}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const a=sa(r,"#");(this.options.pedantic||!a||/ $/.test(a))&&(r=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const r=t[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(r);return this.lexer.state.top=a,{type:"blockquote",raw:t[0],tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,a,i,o,l,u,s,c,f,v,d,p,g=t[1].trim();const h=g.length>1,y={type:"list",raw:"",ordered:h,start:h?+g.slice(0,-1):"",loose:!1,items:[]};g=h?`\\d{1,9}\\${g.slice(-1)}`:`\\${g}`,this.options.pedantic&&(g=h?g:"[*+-]");const b=new RegExp(`^( {0,3}${g})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(p=!1,!(!(t=b.exec(e))||this.rules.block.hr.test(e)));){if(r=t[0],e=e.substring(r.length),c=t[2].split(`
`,1)[0].replace(/^\t+/,O=>" ".repeat(3*O.length)),f=e.split(`
`,1)[0],this.options.pedantic?(o=2,d=c.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,d=c.slice(o),o+=t[1].length),u=!1,!c&&/^ *$/.test(f)&&(r+=f+`
`,e=e.substring(f.length+1),p=!0),!p){const O=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),P=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),C=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),T=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(v=e.split(`
`,1)[0],f=v,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(C.test(f)||T.test(f)||O.test(f)||P.test(e)));){if(f.search(/[^ ]/)>=o||!f.trim())d+=`
`+f.slice(o);else{if(u||c.search(/[^ ]/)>=4||C.test(c)||T.test(c)||P.test(c))break;d+=`
`+f}!u&&!f.trim()&&(u=!0),r+=v+`
`,e=e.substring(v.length+1),c=f.slice(o)}}y.loose||(s?y.loose=!0:/\n *\n *$/.test(r)&&(s=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(d),a&&(i=a[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:r,task:!!a,checked:i,loose:!1,text:d}),y.raw+=r}y.items[y.items.length-1].raw=r.trimRight(),y.items[y.items.length-1].text=d.trimRight(),y.raw=y.raw.trimRight();const w=y.items.length;for(l=0;l<w;l++)if(this.lexer.state.top=!1,y.items[l].tokens=this.lexer.blockTokens(y.items[l].text,[]),!y.loose){const O=y.items[l].tokens.filter(C=>C.type==="space"),P=O.length>0&&O.some(C=>/\n.*\n/.test(C.raw));y.loose=P}if(y.loose)for(l=0;l<w;l++)y.items[l].loose=!0;return y}}html(e){const t=this.rules.block.html.exec(e);if(t){const r={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(t[0]):un(t[0]);r.type="paragraph",r.text=a,r.tokens=this.lexer.inline(a)}return r}}def(e){const t=this.rules.block.def.exec(e);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:a,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(t){const r={type:"table",header:hs(t[1]).map(a=>({text:a})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];let a=r.align.length,i,o,l,u;for(i=0;i<a;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(a=r.rows.length,i=0;i<a;i++)r.rows[i]=hs(r.rows[i],r.header.length).map(s=>({text:s}));for(a=r.header.length,o=0;o<a;o++)r.header[o].tokens=this.lexer.inline(r.header[o].text);for(a=r.rows.length,o=0;o<a;o++)for(u=r.rows[o],l=0;l<u.length;l++)u[l].tokens=this.lexer.inline(u[l].text);return r}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:un(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):un(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=sa(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=Xw(t[2],"()");if(o>-1){const u=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,u).trim(),t[3]=""}}let a=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);o&&(a=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(r)?a=a.slice(1):a=a.slice(1,-1)),ms(t,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let a=(r[2]||r[1]).replace(/\s+/g," ");if(a=t[a.toLowerCase()],!a){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return ms(r,a,r[0],this.lexer)}}emStrong(e,t,r=""){let a=this.rules.inline.emStrong.lDelim.exec(e);if(!a||a[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=a[1]||a[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const o=a[0].length-1;let l,u,s=o,c=0;const f=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+o);(a=f.exec(t))!=null;){if(l=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!l)continue;if(u=l.length,a[3]||a[4]){s+=u;continue}else if((a[5]||a[6])&&o%3&&!((o+u)%3)){c+=u;continue}if(s-=u,s>0)continue;u=Math.min(u,u+s+c);const v=e.slice(0,o+a.index+(a[0].length-l.length)+u);if(Math.min(o,u)%2){const p=v.slice(1,-1);return{type:"em",raw:v,text:p,tokens:this.lexer.inlineTokens(p)}}const d=v.slice(2,-2);return{type:"strong",raw:v,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const a=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return a&&i&&(r=r.substring(1,r.length-1)),r=un(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let a,i;return r[2]==="@"?(a=un(this.options.mangle?t(r[1]):r[1]),i="mailto:"+a):(a=un(r[1]),i=a),{type:"link",raw:r[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let a,i;if(r[2]==="@")a=un(this.options.mangle?t(r[0]):r[0]),i="mailto:"+a;else{let o;do o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(o!==r[0]);a=un(r[0]),r[1]==="www."?i="http://"+r[0]:i=r[0]}return{type:"link",raw:r[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let a;return this.lexer.state.inRawBlock?a=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):un(r[0]):r[0]:a=un(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:a}}}}const pe={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:xa,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};pe._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;pe._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;pe.def=Fe(pe.def).replace("label",pe._label).replace("title",pe._title).getRegex();pe.bullet=/(?:[*+-]|\d{1,9}[.)])/;pe.listItemStart=Fe(/^( *)(bull) */).replace("bull",pe.bullet).getRegex();pe.list=Fe(pe.list).replace(/bull/g,pe.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+pe.def.source+")").getRegex();pe._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";pe._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;pe.html=Fe(pe.html,"i").replace("comment",pe._comment).replace("tag",pe._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();pe.paragraph=Fe(pe._paragraph).replace("hr",pe.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pe._tag).getRegex();pe.blockquote=Fe(pe.blockquote).replace("paragraph",pe.paragraph).getRegex();pe.normal=Ln({},pe);pe.gfm=Ln({},pe.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});pe.gfm.table=Fe(pe.gfm.table).replace("hr",pe.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pe._tag).getRegex();pe.gfm.paragraph=Fe(pe._paragraph).replace("hr",pe.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",pe.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pe._tag).getRegex();pe.pedantic=Ln({},pe.normal,{html:Fe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",pe._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Fe(pe.normal._paragraph).replace("hr",pe.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pe.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const ae={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:xa,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:xa,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};ae._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";ae.punctuation=Fe(ae.punctuation).replace(/punctuation/g,ae._punctuation).getRegex();ae.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;ae.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;ae._comment=Fe(pe._comment).replace("(?:-->|$)","-->").getRegex();ae.emStrong.lDelim=Fe(ae.emStrong.lDelim).replace(/punct/g,ae._punctuation).getRegex();ae.emStrong.rDelimAst=Fe(ae.emStrong.rDelimAst,"g").replace(/punct/g,ae._punctuation).getRegex();ae.emStrong.rDelimUnd=Fe(ae.emStrong.rDelimUnd,"g").replace(/punct/g,ae._punctuation).getRegex();ae._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;ae._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;ae._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;ae.autolink=Fe(ae.autolink).replace("scheme",ae._scheme).replace("email",ae._email).getRegex();ae._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;ae.tag=Fe(ae.tag).replace("comment",ae._comment).replace("attribute",ae._attribute).getRegex();ae._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;ae._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;ae._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;ae.link=Fe(ae.link).replace("label",ae._label).replace("href",ae._href).replace("title",ae._title).getRegex();ae.reflink=Fe(ae.reflink).replace("label",ae._label).replace("ref",pe._label).getRegex();ae.nolink=Fe(ae.nolink).replace("ref",pe._label).getRegex();ae.reflinkSearch=Fe(ae.reflinkSearch,"g").replace("reflink",ae.reflink).replace("nolink",ae.nolink).getRegex();ae.normal=Ln({},ae);ae.pedantic=Ln({},ae.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Fe(/^!?\[(label)\]\((.*?)\)/).replace("label",ae._label).getRegex(),reflink:Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ae._label).getRegex()});ae.gfm=Ln({},ae.normal,{escape:Fe(ae.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});ae.gfm.url=Fe(ae.gfm.url,"i").replace("email",ae.gfm._extended_email).getRegex();ae.breaks=Ln({},ae.gfm,{br:Fe(ae.br).replace("{2,}","*").getRegex(),text:Fe(ae.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Zw(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ys(n){let e="",t,r;const a=n.length;for(t=0;t<a;t++)r=n.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class nt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||tr,this.options.tokenizer=this.options.tokenizer||new Lo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:pe.normal,inline:ae.normal};this.options.pedantic?(t.block=pe.pedantic,t.inline=ae.pedantic):this.options.gfm&&(t.block=pe.gfm,this.options.breaks?t.inline=ae.breaks:t.inline=ae.gfm),this.tokenizer.rules=t}static get rules(){return{block:pe,inline:ae}}static lex(e,t){return new nt(t).lex(e)}static lexInline(e,t){return new nt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,u,s)=>u+"    ".repeat(s.length));let r,a,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(r=l.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+r.raw,a.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const u=e.slice(1);let s;this.options.extensions.startBlock.forEach(function(c){s=c.call({lexer:this},u),typeof s=="number"&&s>=0&&(l=Math.min(l,s))}),l<1/0&&l>=0&&(i=e.substring(0,l+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){a=t[t.length-1],o&&a.type==="paragraph"?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(r);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,a,i,o=e,l,u,s;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)c.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+gs("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+gs("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,l.index+l[0].length-2)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(u||(s=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(r=c.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),a=t[t.length-1],a&&r.type==="text"&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),a=t[t.length-1],a&&r.type==="text"&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,o,s)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e,ys)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,ys))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const f=e.slice(1);let v;this.options.extensions.startInline.forEach(function(d){v=d.call({lexer:this},f),typeof v=="number"&&v>=0&&(c=Math.min(c,v))}),c<1/0&&c>=0&&(i=e.substring(0,c+1))}if(r=this.tokenizer.inlineText(i,Zw)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(s=r.raw.slice(-1)),u=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):t.push(r);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class Fo{constructor(e){this.options=e||tr}code(e,t,r){const a=(t||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,a);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+un(a)+'">'+(r?e:un(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:un(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,r,a){if(this.options.headerIds){const i=this.options.headerPrefix+a.slug(r);return`<h${t} id="${i}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,r){const a=t?"ol":"ul",i=t&&r!==1?' start="'+r+'"':"";return"<"+a+i+`>
`+e+"</"+a+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(e=ps(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let a='<a href="'+e+'"';return t&&(a+=' title="'+t+'"'),a+=">"+r+"</a>",a}image(e,t,r){if(e=ps(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let a=`<img src="${e}" alt="${r}"`;return t&&(a+=` title="${t}"`),a+=this.options.xhtml?"/>":">",a}text(e){return e}}class qf{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Yf{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,a=0;if(this.seen.hasOwnProperty(r)){a=this.seen[e];do a++,r=e+"-"+a;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=a,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class Gn{constructor(e){this.options=e||tr,this.options.renderer=this.options.renderer||new Fo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new qf,this.slugger=new Yf}static parse(e,t){return new Gn(t).parse(e)}static parseInline(e,t){return new Gn(t).parseInline(e)}parse(e,t=!0){let r="",a,i,o,l,u,s,c,f,v,d,p,g,h,y,b,w,O,P,C;const T=e.length;for(a=0;a<T;a++){if(d=e[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(C=this.options.extensions.renderers[d.type].call({parser:this},d),C!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){r+=C||"";continue}switch(d.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Uf(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(f="",c="",l=d.header.length,i=0;i<l;i++)c+=this.renderer.tablecell(this.parseInline(d.header[i].tokens),{header:!0,align:d.align[i]});for(f+=this.renderer.tablerow(c),v="",l=d.rows.length,i=0;i<l;i++){for(s=d.rows[i],c="",u=s.length,o=0;o<u;o++)c+=this.renderer.tablecell(this.parseInline(s[o].tokens),{header:!1,align:d.align[o]});v+=this.renderer.tablerow(c)}r+=this.renderer.table(f,v);continue}case"blockquote":{v=this.parse(d.tokens),r+=this.renderer.blockquote(v);continue}case"list":{for(p=d.ordered,g=d.start,h=d.loose,l=d.items.length,v="",i=0;i<l;i++)b=d.items[i],w=b.checked,O=b.task,y="",b.task&&(P=this.renderer.checkbox(w),h?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=P+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=P+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:P}):y+=P),y+=this.parse(b.tokens,h),v+=this.renderer.listitem(y,O,w);r+=this.renderer.list(v,p,g);continue}case"html":{r+=this.renderer.html(d.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(v=d.tokens?this.parseInline(d.tokens):d.text;a+1<T&&e[a+1].type==="text";)d=e[++a],v+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);r+=t?this.renderer.paragraph(v):v;continue}default:{const M='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(M);return}else throw new Error(M)}}}return r}parseInline(e,t){t=t||this.renderer;let r="",a,i,o;const l=e.length;for(a=0;a<l;a++){if(i=e[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=o||"";continue}switch(i.type){case"escape":{r+=t.text(i.text);break}case"html":{r+=t.html(i.text);break}case"link":{r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{r+=t.image(i.href,i.title,i.text);break}case"strong":{r+=t.strong(this.parseInline(i.tokens,t));break}case"em":{r+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{r+=t.codespan(i.text);break}case"br":{r+=t.br();break}case"del":{r+=t.del(this.parseInline(i.tokens,t));break}case"text":{r+=t.text(i.text);break}default:{const u='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(u);return}else throw new Error(u)}}}return r}}function ve(n,e,t){if(typeof n>"u"||n===null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Ln({},ve.defaults,e||{}),Wf(e),t){const a=e.highlight;let i;try{i=nt.lex(n,e)}catch(u){return t(u)}const o=function(u){let s;if(!u)try{e.walkTokens&&ve.walkTokens(i,e.walkTokens),s=Gn.parse(i,e)}catch(c){u=c}return e.highlight=a,u?t(u):t(null,s)};if(!a||a.length<3||(delete e.highlight,!i.length))return o();let l=0;ve.walkTokens(i,function(u){u.type==="code"&&(l++,setTimeout(()=>{a(u.text,u.lang,function(s,c){if(s)return o(s);c!=null&&c!==u.text&&(u.text=c,u.escaped=!0),l--,l===0&&o()})},0))}),l===0&&o();return}function r(a){if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+un(a.message+"",!0)+"</pre>";throw a}try{const a=nt.lex(n,e);if(e.walkTokens){if(e.async)return Promise.all(ve.walkTokens(a,e.walkTokens)).then(()=>Gn.parse(a,e)).catch(r);ve.walkTokens(a,e.walkTokens)}return Gn.parse(a,e)}catch(a){r(a)}}ve.options=ve.setOptions=function(n){return Ln(ve.defaults,n),Lw(ve.defaults),ve};ve.getDefaults=zf;ve.defaults=tr;ve.use=function(...n){const e=ve.defaults.extensions||{renderers:{},childTokens:{}};n.forEach(t=>{const r=Ln({},t);if(r.async=ve.defaults.async||r.async,t.extensions&&(t.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const i=e.renderers[a.name];i?e.renderers[a.name]=function(...o){let l=a.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:e.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[a.level]?e[a.level].unshift(a.tokenizer):e[a.level]=[a.tokenizer],a.start&&(a.level==="block"?e.startBlock?e.startBlock.push(a.start):e.startBlock=[a.start]:a.level==="inline"&&(e.startInline?e.startInline.push(a.start):e.startInline=[a.start]))}a.childTokens&&(e.childTokens[a.name]=a.childTokens)}),r.extensions=e),t.renderer){const a=ve.defaults.renderer||new Fo;for(const i in t.renderer){const o=a[i];a[i]=(...l)=>{let u=t.renderer[i].apply(a,l);return u===!1&&(u=o.apply(a,l)),u}}r.renderer=a}if(t.tokenizer){const a=ve.defaults.tokenizer||new Lo;for(const i in t.tokenizer){const o=a[i];a[i]=(...l)=>{let u=t.tokenizer[i].apply(a,l);return u===!1&&(u=o.apply(a,l)),u}}r.tokenizer=a}if(t.walkTokens){const a=ve.defaults.walkTokens;r.walkTokens=function(i){let o=[];return o.push(t.walkTokens.call(this,i)),a&&(o=o.concat(a.call(this,i))),o}}ve.setOptions(r)})};ve.walkTokens=function(n,e){let t=[];for(const r of n)switch(t=t.concat(e.call(ve,r)),r.type){case"table":{for(const a of r.header)t=t.concat(ve.walkTokens(a.tokens,e));for(const a of r.rows)for(const i of a)t=t.concat(ve.walkTokens(i.tokens,e));break}case"list":{t=t.concat(ve.walkTokens(r.items,e));break}default:ve.defaults.extensions&&ve.defaults.extensions.childTokens&&ve.defaults.extensions.childTokens[r.type]?ve.defaults.extensions.childTokens[r.type].forEach(function(a){t=t.concat(ve.walkTokens(r[a],e))}):r.tokens&&(t=t.concat(ve.walkTokens(r.tokens,e)))}return t};ve.parseInline=function(n,e){if(typeof n>"u"||n===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");e=Ln({},ve.defaults,e||{}),Wf(e);try{const t=nt.lexInline(n,e);return e.walkTokens&&ve.walkTokens(t,e.walkTokens),Gn.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+un(t.message+"",!0)+"</pre>";throw t}};ve.Parser=Gn;ve.parser=Gn.parse;ve.Renderer=Fo;ve.TextRenderer=qf;ve.Lexer=nt;ve.lexer=nt.lex;ve.Tokenizer=Lo;ve.Slugger=Yf;ve.parse=ve;ve.options;ve.setOptions;ve.use;ve.walkTokens;ve.parseInline;Gn.parse;nt.lex;function Zr(n,e,t,r=!1){n&&e&&t&&n.addEventListener(e,t,r)}function ii(n,e,t,r=!1){n&&e&&t&&n.removeEventListener(e,t,r)}function oi(n){let e=!1;return function(...t){e||(e=!0,window.requestAnimationFrame(()=>{n.apply(null,t),e=!1}))}}const bs=window.navigator.userAgent.match(/firefox/i)?"DOMMouseScroll":"mousewheel",xs={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1},Jw="Space",eC="ArrowLeft",nC="ArrowUp",tC="ArrowRight",rC="ArrowDown",aC="Escape",iC={close:'<svg t="1628759850204" viewBox="0 0 1024 1024" width="24" height="24"><path d="M764 215.008L512 467.008 260 215.008q-10.016-8.992-22.496-8.992t-22.016 9.504-9.504 22.016 8.992 22.496l252 252-252 252q-12.992 12.992-8.512 31.008t22.016 22.496 31.488-8.512l252-252 252 252q10.016 8.992 22.496 8.992t22.016-9.504 9.504-22.016-8.992-22.496L556.992 512l252-252q12.992-12.992 8.512-31.008t-22.496-22.496-31.008 8.512z" p-id="3923" fill="#ffffff"></path></svg>',arrowLeft:'<svg t="1628762138411" viewBox="0 0 1024 1024" width="24" height="24"><path d="M608.992 148.992L277.984 489.984q-8.992 8.992-8.992 21.504t8.992 22.496l331.008 340.992q8.992 8 20.992 8t20.992-8.992 8.992-20.992-8.992-20.992l-312-320 312-320q8.992-8.992 8.992-20.992t-8.992-20.992-20.992-8.992-20.992 8z" p-id="5372" fill="#ffffff"></path></svg>',arrowRight:'<svg t="1628762150860" viewBox="0 0 1024 1024" width="24" height="24"><path d="M340.992 148.992q-8.992 10.016-8.992 22.016t8.992 20.992l312 320-312 320q-8.992 8.992-8.992 20.992t8.992 20.992 20.992 8.992 20.992-8l331.008-340.992q8.992-8.992 8.992-22.016t-8.992-22.016L382.976 148.96q-8.992-8-20.992-8t-20.992 8z" p-id="5663" fill="#ffffff"></path></svg>',zoomOut:'<svg t="1628761969296" viewBox="0 0 1024 1024" width="24" height="24"><path d="M796 751.008l124.992 124.992q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-124.992-124.992q-132.992 108.992-295.008 99.488t-280.992-132.512q-114.016-128.992-111.008-291.008t122.016-286.016q124-119.008 286.016-122.016t291.008 111.008q123.008 119.008 132.512 280.992t-99.488 295.008zM480 832q150.016-4 248.992-103.008T832 480q-4-150.016-103.008-248.992T480 128q-150.016 4-248.992 103.008T128 480q4 150.016 103.008 248.992T480 832z m-128-384h256q14.016 0 23.008 8.992T640 480t-8.992 23.008T608 512h-256q-14.016 0-23.008-8.992T320 480t8.992-23.008T352 448z" p-id="4889" fill="#ffffff"></path></svg>',zoomIn:'<svg t="1628761724109" viewBox="0 0 1024 1024" width="24" height="24"><path d="M796 751.008l124.992 124.992q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-124.992-124.992q-132.992 108.992-295.008 99.488t-280.992-132.512q-114.016-128.992-111.008-291.008t122.016-286.016q124-119.008 286.016-122.016t291.008 111.008q123.008 119.008 132.512 280.992t-99.488 295.008zM480 832q150.016-4 248.992-103.008T832 480q-4-150.016-103.008-248.992T480 128q-150.016 4-248.992 103.008T128 480q4 150.016 103.008 248.992T480 832z m-32-384v-96q0-14.016 8.992-23.008T480 320t23.008 8.992T512 352v96h96q14.016 0 23.008 8.992T640 480t-8.992 23.008T608 512h-96v96q0 14.016-8.992 23.008T480 640t-23.008-8.992T448 608v-96h-96q-14.016 0-23.008-8.992T320 480t8.992-23.008T352 448h96z" p-id="4358" fill="#ffffff"></path></svg>',original:'<svg t="1628762365130" viewBox="0 0 1024 1024" width="24" height="24"><path d="M812.992 180.992q26.016 0 43.008 16.992t16.992 43.008v482.016q0 24.992-17.504 42.496t-42.496 17.504H210.976q-24.992 0-42.496-17.504t-17.504-42.496V240.992q0-26.016 16.992-43.008t43.008-16.992h602.016z m0-60.992H210.976q-24 0.992-46.016 10.016t-39.008 26.016-26.496 39.008-9.504 46.016v482.016q0 24 9.504 46.016t26.496 39.008 39.008 26.016 46.016 8.992h602.016q24 0 46.016-8.992t39.008-26.016 26.496-39.008 9.504-46.016V241.056q0-24-9.504-46.016t-26.496-39.008-39.008-26.016-46.016-10.016z m-120 180.992q-12.992 0-21.504 8.992t-8.512 20.992v300.992q0 12.992 8.512 21.504t21.504 8.512 21.504-8.512 8.512-21.504v-300.992q0-12.992-8.512-21.504t-21.504-8.512z m-361.984 0q-12 0-20.992 8.992t-8.992 20.992v300.992q0 12.992 8.512 21.504t21.504 8.512 21.504-8.512 8.512-21.504v-300.992q0-12-8.512-20.992t-21.504-8.992zM512 360.992q-12.992 0.992-21.504 9.504t-8.512 21.504v30.016q0 12 8.512 20.512t21.504 8.512 21.504-8.512 8.512-20.512v-30.016q0-12.992-8.992-21.504t-20.992-9.504zM512 512q-12.992 0-21.504 8.512t-8.512 21.504v30.016q0 12.992 8.512 21.504t21.504 8.512 21.504-8.512 8.512-21.504v-30.016q0-12-8.992-20.992t-20.992-8.992z" p-id="5954" fill="#ffffff"></path></svg>',fullScreen:'<svg t="1628762716543" viewBox="0 0 1024 1024" width="24" height="24"><path d="M160 96h192q14.016 0.992 23.008 10.016t8.992 22.496-8.992 22.496T352 160H160v192q0 14.016-8.992 23.008T128 384t-23.008-8.992T96 352V96h64z m0 832H96v-256q0-14.016 8.992-23.008T128 640t23.008 8.992T160 672v192h192q14.016 0 23.008 8.992t8.992 22.496-8.992 22.496T352 928H160zM864 96h64v256q0 14.016-8.992 23.008T896 384t-23.008-8.992T864 352V160h-192q-14.016 0-23.008-8.992T640 128.512t8.992-22.496T672 96h192z m0 832h-192q-14.016-0.992-23.008-10.016T640 895.488t8.992-22.496T672 864h192v-192q0-14.016 8.992-23.008T896 640t23.008 8.992T928 672v256h-64z" p-id="6683" fill="#ffffff"></path></svg>',refreshLeft:'<svg t="1628762407981" viewBox="0 0 1024 1024" width="24" height="24"><path d="M288.992 296.992h92.992q14.016 0 23.008 8.992t8.992 22.496-8.992 22.496-23.008 10.016H232.992q-14.016-0.992-23.008-10.016t-8.992-22.016V179.968q0-14.016 8.992-23.008t23.008-8.992 23.008 8.992 8.992 23.008v50.016q86.016-76.992 196.512-95.488t217.504 26.496q106.016 48 167.488 142.016t62.496 210.016q-4 163.008-112.512 271.488t-271.488 112.512q-163.008-4-271.488-112.512t-112.512-271.488h64q3.008 136 93.504 226.496t226.496 93.504q136-3.008 226.016-93.504t94.016-226.496q-0.992-100.992-56-180.512t-148-117.504q-94.016-35.008-188.512-13.504T289.024 296.992z" p-id="6197" fill="#ffffff"></path></svg>',refreshRight:'<svg t="1628762417349" viewBox="0 0 1024 1024" width="24" height="24"><path d="M784.992 230.016V180q0-14.016 8.992-23.008t22.496-8.992 22.496 8.992 10.016 23.008v148.992q-0.992 12.992-10.016 22.016t-22.016 10.016h-148.992q-14.016-0.992-23.008-10.016t-8.992-22.496 8.992-22.496 23.008-8.992h92.992q-78.016-82.016-183.488-99.488t-204.512 34.496q-98.016 54.016-140.992 152t-16.992 208q28.992 108 113.504 173.504t196.512 67.488q136-3.008 226.016-93.504t94.016-226.496h64q-4 163.008-112.512 271.488t-271.488 112.512q-163.008-4-271.488-112.512t-112.512-271.488q0.992-116 62.016-210.016t167.008-140.992q107.008-46.016 217.504-27.488t197.504 95.488z" p-id="6440" fill="#ffffff"></path></svg>'};let ws="";var ca=ce({name:"Preview",props:{modelValue:{type:Boolean,defulat:!1},urlList:{type:Array,default:()=>[]},zIndex:{type:Number,default:2e3},hideOnClickModal:{type:Boolean,default:!1},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!0}},emits:["close","switch","update:modelValue"],setup(n,{emit:e}){const t=D(!1),r=D(null),a=D(null),i=D(n.initialIndex),o=D(!0),l=D(n.urlList);let u,s,c;const f=k(()=>l.value.length<=1),v=k(()=>i.value===0),d=k(()=>i.value===l.value.length-1),p=D("original"),g=k(()=>l.value[i.value]),h=D(xs),y=k(()=>{const{scale:A,deg:H,offsetX:_,offsetY:L,enableTransition:R}=h.value,K={transform:`scale(${A}) rotate(${H}deg)`,transition:R?"transform .3s":"",marginLeft:`${_}px`,marginTop:`${L}px`};return p.value==="original"&&(K.maxWidth="100%",K.maxHeight="100%"),K});function b(){u=oi(A=>{switch(A.code){case aC:w();break;case Jw:C(p.value==="original"?"fullscreen":"original");break;case eC:O();break;case nC:T("zoomIn");break;case tC:P();break;case rC:T("zoomOut")}}),s=oi(A=>{T((A.wheelDelta?A.wheelDelta:-A.detail)>0?"zoomIn":"zoomOut",{zoomRate:.015,enableTransition:!1})}),Zr(document,"keydown",u),Zr(document,bs,s),ws=document.body.style.overflow,document.body.style.overflow="hidden",M(),t.value=!0}function w(){ii(document,"keydown",u),ii(document,bs,s),u=null,s=null,document.body.style.overflow=ws,t.value=!1,e("close"),e("update:modelValue",!1)}function O(){if(v.value&&!n.infinite)return;const A=l.value.length;i.value=(i.value-1+A)%A}function P(){if(d.value&&!n.infinite)return;const A=l.value.length;i.value=(i.value+1)%A}function C(A){o.value||(p.value=A,M())}function T(A,H={}){if(o.value)return;const{zoomRate:_,rotateDeg:L,enableTransition:R}={zoomRate:.2,rotateDeg:90,enableTransition:!0,...H};switch(A){case"zoomOut":h.value.scale>.2&&(h.value.scale=parseFloat((h.value.scale-_).toFixed(3)));break;case"zoomIn":h.value.scale=parseFloat((h.value.scale+_).toFixed(3));break;case"clocelise":h.value.deg+=L;break;case"anticlocelise":h.value.deg-=L}h.value.enableTransition=R}function M(){h.value=xs}return nn(()=>{n.modelValue&&b()}),ue(g,()=>{dn(()=>{a.value.complete||(o.value=!0)})}),ue(i,A=>{M(),e("switch",A)}),ue(()=>n.modelValue,A=>{A?b():t.value&&w()}),{wrapper:r,img:a,visible:t,imgPaths:l,index:i,isSingle:f,isFirst:v,isLast:d,imgStyle:y,mode:p,loading:o,ICON_SVG:iC,hide:w,open:function(A){A&&(l.value=Array.isArray(A)?A:[A]),b()},prev:O,next:P,handleImgLoad:function(){o.value&&(o.value=!1)},handleImgError:function(){o.value&&(o.value=!1)},handleMouseDown:function(A){if(o.value||A.button!==0)return;const{offsetX:H,offsetY:_}=h.value,L=A.pageX,R=A.pageY;c=oi(K=>{h.value={...h.value,offsetX:H+K.pageX-L,offsetY:_+K.pageY-R}}),Zr(document,"mousemove",c),Zr(document,"mouseup",()=>{ii(document,"mousemove",c)}),A.preventDefault()},toggleMode:C,handleActions:T}}});Ss("data-v-1e3b54f8");const oC=["innerHTML"],lC=["innerHTML"],uC=["innerHTML"],sC={class:"preview__actions"},cC=["innerHTML"],fC=["innerHTML"],dC=["innerHTML"],vC=["innerHTML"],pC=["innerHTML"],hC=["innerHTML"],gC={class:"preview__canvas"},mC=["src"],yC={key:0,viewBox:"25 25 50 50",class:"infinite-scroll__svg"},bC=[je("circle",{cx:"50",cy:"50",r:"20",class:"infinite-scroll__circle"},null,-1)];Ps();(function(n,e){e===void 0&&(e={});var t=e.insertAt;if(n&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}})(".preview[data-v-1e3b54f8]{position:fixed;top:0;right:0;bottom:0;left:0}.preview__mask[data-v-1e3b54f8]{position:absolute;width:100%;height:100%;top:0;left:0;opacity:.5;background:#000}.preview__btn[data-v-1e3b54f8]{width:44px;height:44px;position:absolute;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:50%;opacity:.8;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgb(96 98 102)}.preview__close[data-v-1e3b54f8]{top:40px;right:40px}.preview__prev[data-v-1e3b54f8]{left:40px}.preview__next[data-v-1e3b54f8],.preview__prev[data-v-1e3b54f8]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.preview__next[data-v-1e3b54f8]{right:40px}.preview__img[data-v-1e3b54f8]{cursor:move;z-index:1}.is-disabled[data-v-1e3b54f8]{cursor:no-drop!important}.preview__actions[data-v-1e3b54f8]{background-color:rgb(96 98 102);position:absolute;z-index:10;left:50%;bottom:30px;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;opacity:.8;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:22px;width:282px;height:44px;padding:0 23px}.preview__icon[data-v-1e3b54f8]{width:24px;height:24px;margin:0 12px}.preview__canvas[data-v-1e3b54f8]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@-webkit-keyframes preview-fade-in-1e3b54f8{0%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes preview-fade-in-1e3b54f8{0%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes preview-fade-out-1e3b54f8{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}}@keyframes preview-fade-out-1e3b54f8{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}}.infinite-scroll__svg[data-v-1e3b54f8]{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:rotate-1e3b54f8 2s linear infinite;animation:rotate-1e3b54f8 2s linear infinite;width:50px;position:absolute;z-index:0}.infinite-scroll__circle[data-v-1e3b54f8]{fill:none;stroke-width:3;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;-webkit-animation:dash-1e3b54f8 1.5s ease-in-out infinite;animation:dash-1e3b54f8 1.5s ease-in-out infinite;stroke:#a5a5a5}@-webkit-keyframes rotate-1e3b54f8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-1e3b54f8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes dash-1e3b54f8{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px}to{stroke-dashoffset:-125px}}@keyframes dash-1e3b54f8{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px}to{stroke-dashoffset:-125px}}"),ca.render=function(n,e,t,r,a,i){return gt(),ad(Ca,{to:"body",disabled:!n.appendToBody},[m(Qt,{name:"preview-fade"},{default:Os(()=>[n.visible?(gt(),$t("div",{key:0,ref:"wrapper",tabindex:-1,class:"preview",style:ui({zIndex:n.zIndex})},[at(" 蒙层 "),je("div",{class:"preview__mask",onClick:e[0]||(e[0]=li(o=>n.hideOnClickModal&&n.hide(),["self"]))}),at(" 关闭按钮 "),je("span",{innerHTML:n.ICON_SVG.close,class:"preview__btn preview__close",onClick:e[1]||(e[1]=(...o)=>n.hide&&n.hide(...o)),title:"关闭"},null,8,oC),at(" 左右箭头 "),n.isSingle?at("v-if",!0):(gt(),$t(Cn,{key:0},[je("span",{onClick:e[2]||(e[2]=(...o)=>n.prev&&n.prev(...o)),class:zo([{"is-disabled":!n.infinite&&n.isFirst},"preview__btn preview__prev"]),innerHTML:n.ICON_SVG.arrowLeft},null,10,lC),je("span",{onClick:e[3]||(e[3]=(...o)=>n.next&&n.next(...o)),class:zo([{"is-disabled":!n.infinite&&n.isLast},"preview__btn preview__next"]),innerHTML:n.ICON_SVG.arrowRight},null,10,uC)],64)),at(" 操作区 "),je("div",sC,[je("span",{innerHTML:n.ICON_SVG.zoomOut,class:"preview__icon",title:"缩小",onClick:e[4]||(e[4]=o=>n.handleActions("zoomOut"))},null,8,cC),je("span",{innerHTML:n.ICON_SVG.zoomIn,class:"preview__icon",title:"放大",onClick:e[5]||(e[5]=o=>n.handleActions("zoomIn"))},null,8,fC),xt(je("span",{innerHTML:n.ICON_SVG.fullScreen,class:"preview__icon",title:"原图",onClick:e[6]||(e[6]=o=>n.toggleMode("fullscreen"))},null,8,dC),[[Ft,n.mode==="original"]]),xt(je("span",{innerHTML:n.ICON_SVG.original,class:"preview__icon",title:"1:1",onClick:e[7]||(e[7]=o=>n.toggleMode("original"))},null,8,vC),[[Ft,n.mode==="fullscreen"]]),je("span",{innerHTML:n.ICON_SVG.refreshLeft,class:"preview__icon",title:"左旋转",onClick:e[8]||(e[8]=o=>n.handleActions("anticlocelise"))},null,8,pC),je("span",{innerHTML:n.ICON_SVG.refreshRight,class:"preview__icon",title:"右旋转",onClick:e[9]||(e[9]=o=>n.handleActions("clocelise"))},null,8,hC)]),at(" 图片展示 "),je("div",gC,[(gt(!0),$t(Cn,null,id(n.imgPaths,(o,l)=>xt((gt(),$t("img",{ref:"img",class:"preview__img",key:o,src:o,style:ui(n.imgStyle),onLoad:e[10]||(e[10]=(...u)=>n.handleImgLoad&&n.handleImgLoad(...u)),onError:e[11]||(e[11]=(...u)=>n.handleImgError&&n.handleImgError(...u)),onMousedown:e[12]||(e[12]=(...u)=>n.handleMouseDown&&n.handleMouseDown(...u))},null,44,mC)),[[Ft,l===n.index]])),128)),n.loading?(gt(),$t("svg",yC,bC)):at("v-if",!0)])],4)):at("v-if",!0)]),_:1})],8,["disabled"])},ca.__scopeId="data-v-1e3b54f8",ca.__file="src/Preview/Preview.vue";const xC={components:{Preview:ca},setup(n){const e=D();let t=D([hw,gw,mw,yw,bw,xw,ww,Cw,Sw,Pw,Ow,Aw,Tw,kw,Ew,_w,Mw,Iw,Nw,Dw,Rw,$w,Kw]);const r=new ve.Renderer;ve.setOptions({renderer:r,gfm:!0,pedantic:!1,sanitize:!1});let a=D(!1),i=D("1.350M电台");const o=od();let l=k(()=>o.state.Page.treeDate),u=D(0),s=D();s.value=ve(t.value[u.value]);function c(p){var g;(g=e.value)==null||g.open(p)}const f=()=>{let g=document.getElementsByClassName("mdBox")[0].getElementsByTagName("img");for(let h=0;h<g.length;h++)g[h].onclick=()=>{c(g[h].src)}},v=p=>{let g="";l.value.forEach((h,y)=>{p===h.title?(u.value=0,g="1.350M电台"):h.children.forEach((b,w)=>{if(p===b.title){u.value=w,g=b.title;return}else b.children.forEach((O,P)=>{if(p===O.title){u.value=w,g=b.title;return}else console.log(),O.children&&O.children.forEach((C,T)=>{if(p===C.title){u.value=w,g=b.title;return}})})}),i.value===g?dn(()=>{let b=p.replace(/\./g,"").toLowerCase().replace(/\s/g,"");document.getElementById(b).scrollIntoView()}):(i.value=g,s.value=ve(t.value[u.value]),dn(()=>{dn(()=>{setTimeout(()=>{f();let b=p.replace(/\./g,"").toLowerCase();document.getElementById(b).scrollIntoView()},200)})}))})},d=(p,g)=>{v(g.node.title),a.value=!1};return nn(()=>{v(i.value),f(),document.getElementsByClassName("ant-card")[0].addEventListener("click",function(g){g.stopPropagation()})}),{markdownTxt:s,onSelect:d,treeData:l,isCard:a,preview:e,page:i}}},wC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADMBJREFUeF7tnQnUtdUUx3/JPI+ReQrJEBkii6zKXGaVOUMtGVvIUNQXWpIhRKtMLVOIUKaiTMkKIYSEzIqIT0lkWL/vO/dz37f3vvcZ9nnuee599lrfete37nn2c87e/+cM++xhI5bStsABwCbp37XGfv4hsDPwg2XPDP8tSwKbA0cDW4x160/A75LujgU+NPpto7FGuwOHTxnLjxIIvl/WmIfeJAncLin/DlMkshdwiG1GANgFOKqiGM9MIDi9YvuhWTcSuE1S/p0qvm434EgBcGXgZOAuFR+02VkJBN+p8czQNJ8Ebp2Uv2XNV2whAPYH9qv5oM1/mkDw7QbPDo/ESeBWSfl1PuDR29cIAKd+l4Am9HPgscAAgibSa//MLZLyt2rI6gwB4Jru+tGUzgYeCQx7gqYSbPbczYFjai7dy990oQD4b7P3L3nql8COwHA6CBBmBRY3BTzO3blC29WanB0FAF/ya+DBwBktOzU8vroEbgJ8Bph21Ksix1MjAeALfwPsAPy4ytuHNrUlcCPgBOD2tZ9c+YF9BYCWvXGrUVveWpzuD/ykLaPh+SUS2BQ4CdDYE0Ea9bYWAKLpI8Eg+D1w33RUjOjsovO4AfAVYLNAQewJHDayBOYAwbnAvQBPCQM1l4D3MqcAnvejaE2y/2wwBcs4Bwj+ANwD8JQwUH0JXA/4BuCRL4o2KF+G45dBuUBwXjqrukEcqLoErpMMbB75omiJ8lcCQC4Q/Bm4Y7qSjBrMPPPxGv57wI0DB3kp5U8CQC4QnJ+WmXMCBzWPrK4J6Hvhrj+KVlT+agDIBYK/pp3sH6NGNmd8rp6Oz9cPHNdE5U8DQC4QrAVuCeilMtD/JXA1wMu16wYKZVXlVwFALhBcALi5cVkYCK4C/Aq4dqAwpiq/KgBygeDvaZ1zRlhk0iHnt4BrfxRVUn4dAOQCwUXJ+dQZYRHpioC2Eqf/KKqs/LoAyAWCiwGPPYJhkejygMdjp/8oqqX8JgDIBYJ/Au6ABcMi0OUAlz5ngCiqrfymAMgFgkuSg+q/oiRSKJ+NAfc/zgBR1Ej5bQCQCwT/Afw6/DuPdJk0y102cHAG8jRx6l3XheV3AXX7leMCSRc1BTWPJLDbynxcLgcC+7QRVERncoDAMfmV/LvN4Ap61lnNfU4kHQzs3ZZhBAByLQfyvUIGwbWVWd3nPedfWPehKe0N6zK8qzVFASAnCDwmuWnqI10D+Etwx98GPCeKZyQAcoLAI+LfogbdER/v8/WFiKQjgD0iGUYDICcINBZFf02RshznpQ+ffpGR9G7g6ZEM5ZUDADlB4E1Z6beI+u17sRNJ7wOeHMlwxCsXAHKCwLty7eclktfcPwvumMkcdg3muYFdTgDkBIEBEsYflES3zRAQ8zHgMTkHmRsAOUGgP4HhaCWQYVrRcZGfBB6Re3BdACAnCAyP/kVuIU3hb1x+dHi8sX8P7WJcXQEgJwjMjhG97laV/d2T337V9lXafR54QJWGEW26BEBOELj+dh2LeG/gaxFKGOPxpRRXGcx2MruuAZATBAa46k7dBd0PUFmRJJjuE8mwCq9ZACAnCMyQFb0ZWy7H7QGn6Ugy/OuekQyr8poVAHKCwE3Zd6sKoGY7E2C4QYskM63dNZJhHV6zBEBOENwNOK2OICq03QnwaBZJ5mYwZG5mNGsA5ATB1sCpQZJ9NPDRIF4jNqbSiUjz0qpbJQAgJwi2SbH1bYRkGjwTaERSEcp3QKUAICcIzFTy1Ybam2vllwaAnCAwZ1HdY9vcK79EAOQEgce3EyvOBAuh/FIBkBMEDwKOnwKChVF+yQDICQIvWSad5RdK+aUDICcIPNMft2wmWDjl9wEAOUFggutPJBAspPL7AoCcINDbxiikHOd8TdLFxzmWZAeYtkHPFYE07b11f9fIY27EXsQy9AkAOWeCukqe1F7la300GVYvqG8AKBkEKl+DU68yoPURACWCQOXrxlWap/LUWaivACgJBCpf20Iv8yH3GQAlgEDl67ptBbVeUt8BMEsQqHztBxZe6C3NAwBmAQKV/7gOnVCzAWxeANAlCOZG+X2yBFb9AnIbi+ZK+fMIgJwzwdwpfwBA1XllfTuDTlz356ou4jztAVSSJdW82Mnlam09REGQO/ikHjRbtJ4nAFj/WOW3Lac6TZzGIAqCuaiVPC8AMEJY5TcpoT5N4Sv9flYCQa4IpCZ9avTMPADAenoqv+vwKkPSnQmicwM0UmTTh/oOABNEGLHTtfJH8rYopk4lvQVBnwFwsxSrl3vNn/ZxmaHE+4Be7gn6CgDzA30q425/mtKX/25auIf18XTQRwBYTFHf/qgS6nWVPam9lVEf2Lf7gb4B4IYpuieqhHqU8kd8LP60HXBmNONc/PoEgBwl1EdWPdPLRJEpYk0h41GxeOoLAMwOag6dyBLqWvN2SRryGBkJgnMBk0hZCLJo6gMAcpRQd8eu8jXtSjluEXUO1T181nkMVwVg6QDIUULdnDwqf3lauRwgMF28NopSMppeCgwlA8AyqpZQNy9wFGmw2XkVH74cILA2oNnL3CAWR6UCwDKq+tq58Ysila/pdlpW0c2Bo4P3BNY5kO85UYOJ4lMiAKwO4g56k6hBJiudwaCabquQl0sGjkZuDI0W2qy0wJHSAHDVtGly7Y8id/s7NvDb19T86WAQWPbG+4tiil6UBACLQ7lZsjRMFOnFY3LHphU8NDydEAwCK4hpzSyi/E0pALhSWh+d/qPII94OgCbaNuQx9IvBIDByeNNUP7hN31o/WwIArA3occnpP4rcQ2wbGKtn+TcNUZF7gn8A1kCKrilYS4azBoAFlJ0KnQGiyF2+Wbejd9wWgDSpcyQIrCYquATDTGiWALA07AWpOmjU4LW6mSJWU2wOsgSshqRIEJhFxNkvurRspfHPCgA5qmi70TNJdBfx+SZ5jgSBNZJdCjuvlTwrADjQyArhWtn0DOryeBUNAqumbwz4tzOaBQCiS6i71vs1anLtmqJBoGwEQWfUNQAuBtz4RZEFJK0XNMszdTQILgLccHZCXQLADZ/GnihyurdS59oohi34RINAQEcaxCYOrSsAOCCPO1F0PqBjqKAqhaJB4Ekm8jJsRTl1AQB35Ro8osgvXhPtTA0oEwYTDQJPNt5JZKPcADBrlibPKPKL95bQdbJUigaBVk3jHrNQTgCYNctpOopUuuuiG8nSyRvIyHpA2YpL5QKA5lg3aFGk0r0omom1rOEgdECJDFb9FmCp2lDKAQBv4TyaRdEl6a7Av30jq5bpGBpF4dVFowEQPfVpGNH+7t++0skpf3BU/09KwSch/CIB4CXJliG9Ws9Ek2ikuTiwa7VZ6U/g9XQUfRZ4SASzKAB4TRq5PrnWezkyT6RnkQ4qUaTPon6OrSgCAK5LRsFEkef7SOeQqH5F8NHHMOTLTZ358Fh0U6P+tQWAtfiMg4siPWd1CZ9n8st9eOAA3ws8pSm/NgD4QuRmJLmF6X+3CGRWE+sRR9E7gN2bMGsKADch1uCLIiNqNe8uEh3VdvpeJqy3As+rK8AmADg2+dnXfdek9tnt3VEdzcDH6ftJgXzfDLygDr+6ADgmYuc51kHDpyNDvuuMvZS27wKeFtiZQ4C9qvKrAwB3nMbWRZFZNErN9BE1xqp8Dm+6hk94wRuBF1Z5eVUAvB94QhWGFdtku9yo+P4Smx0KPDuwY28AXjSNXxUAvAd46jRGNX43u2bkJUmNVxff9E111/ApIzoY2Hu1NtMA4PHiGYFi+2bw5Uhg14ph9TrgxYG9OQh46SR+qwHg7cCzAjtySvClSGDXimP1GuDlgb16LfCylfhNAoDHidpnylU6/OXgy5BA2RTLag3wysDeHQjss5zfSgB4fdUdZMXOnQhsX7Ht0GypBPYH9gsUijPLvuP8lgPAqeIlgS/8XIrPD2S5cKyiQfCq8ZllHAD+sAQdLUV9HLBTSx7D4+slEA2CA0YzywgAXiRojIiijwOPimI28MkCgucCh44AoMPhVkGCNuumqdgGipdA5ExgOp5tBEDk1/8B4Inx4x44jkkgEgTrZoAoS9+RwG6DqjqRQBQIThcAEZEs7wSe2cnQh5eMJBABgvMEgM4YbYIQDwP2HPQyEwm0BcFaAeCFwdRbownDewvw/JkMfXhpxExwvADQtUsXr7pU6bqxLtOhfSMJNJ0J1oyOgR8Edq3x6lVvmGrwGZrGSaAuCI4A9hi3BFZNTvRq4BVx/R44BUqgDgjW6X75XYBXkF4YrESnAaLGfwOVKwHtOv6bZNjTG/nxo+6vdBto5IqFEA07Mk2JThxfHxRfrsYn9EwQGI8oEAyt163Pm1kv6DbQ/wA93yzUBONCqQAAAABJRU5ErkJggg==",CC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAB5VJREFUeF7tnV1oHFUUx/9n0qZCq+1uK6FFMDU7DVgFsWkkilYU2j5U0Ac/QN+Uxp2F2kL7oCAmCPrQQmthZ03RNwU/HhTqgxYUq2gwTUXQCulsbISSEtrOttqCSZq5MunuWkuazUz3Tjbnnrzuvefk/M/vnv2YM2cI8me0AmR09BI8BADDIRAABADDFTA8fKkAAoDhChgevlQAAcAMBdIHvduwGF1KYRMBm4jQohRawuiJMKYUxhRwlAhHMYl+f4f9lwnK8K8APSea07cv2QFLvQKFO+aUVMJpBPSOf3b8IHrWT8xpzwJdxBqAle7QkwFZr5PC/XHyowg/Wyp487zT/nmc/QthD1sA0u7wTiDYX58kWLt8p+1AfWw1lhWWAKQKw9tIBYfrKbUi64lStu2LetpsBFvsAFhZGOpUyvpJh7hEwQPns+0DOmzPl012AKRcb5CADToEVcDxkmN36LA9XzZZAZByi9sJqk+nmArUXXIyh3T6SNI2MwD0nf5KUrhVATYApPPeZhC+SuT0KGzxc/aRRHxpdsIHAPfkXoB2a9arbF7t8511e5LxpdcLIwC8HwA8qFeuqvUffcd+KCFfWt2wAWBlwSsqhTatapWNE2H4fNbOJOFLtw82AKRd728Ay3QLVrZ/yXfsWxPypdUNJwAuAViqVa3/jF/2HTsp2LSGxAiA4ilAtWpVq2qcRnwnszYZX3q9MALg5ABAG/XKVf014JjvrOtMxpdeL2wASOW9PBEcvXJdta4U3FLOziXhS7cPPgBouAJ4I/E5XRnkA0Df8HKaCn4HsEbzqRlVTdbdpe62i5r9JGKeDQChWun8UA/IekOrciro9XPtPVp9JGicFQCr+kZWB1OTgxqrwKjVtLjjXHfrmQRzpNUVKwBCpVLu8MuEoKBDNQUrW3La3tVhe75ssgNA21sBs9JfAY4lANOVoI7fCjh96r++0rAFIAy03B8YdgjdF7PE/kIUdHPrA7xWC9YAhIGu2H9qhbXkSvjNYGdECA4E44t6L+xaeyHivgW1nD0AlWyk88WtoOBxRfTYjW4UCW8EIaW+gbK+9nOZLxdUJmP+s8YA8D99rt4u1mI10fS9gcGUGvPPjo9xvw1sJkbMBCDmaeG4TQDgmNUIMQkAEcTiuFQA4JjVCDEJABHE4rhUAOCY1QgxCQARxOK4VADgmNUIMQkAEcTiuFQA4JjVCDEJABHE4rhUAOCY1QgxCQARxOK41BgAZFLozPjyB0Amhc5auFgDIJNCa79psQVAJoXWTn64giUA9ewIrsjItTOYHQAyKXRuJ7+yihcAPSeaUy3N/XGng9eSLmwaLY1NdHHqHWQFQDpf3A1Se2sl8qZeV7THz2X23ZSNBtrMBoDp/v9brvw654dCxE0C4XTwz6J7udwvwAaA8CufgvVZ3LxG2UcInuLyEAk2AKRdL3w4RNS7f6Lk/dq1B3zH3hV3cyPt4wSATAqNQRYbAGRSaIzsc/ohSCaFCgAyKjYGA/IWEEc0GRYdQzXNW9KujIuPIzGbCpByvbcIeDWOCFH3KODtkmO/FnVfI65nA0C64G2BQjJDHQhb/aydzONpNFPDB4CrD4c+kcRPwZjEei4Pl2YDQHhQ5GJQ9HLBCgDI5eDIBPACIBwNp/GiEKeLQDwbQspR1bcfsCIVzyeIs6sAlXTVsy+Qaz9gqBVbAMLgwv7AAFYhbotY2AJmIcjKpNDIHy0aaIPcGDJrMlhXgGsjD1vGmpZMPKpgbQLQSYQWpTA9KJIIY0phDMAAITg6Nd78LZeWr1pH0RgAaglh6usCgKmZL8ctAAgAhitgePhSAQQAwxUwPHypAAKA4QoYHr5UAAHAcAUMD18qgABguAKGhy8VQAAwUAF5bFw16cZUgOn7BoKgC7A2g9A1I/YK/UBwBJbVz6Xvv9bxZg+APDp2dgRYA1DuEA6fGxz/4dEIermMg5kJBbYA1LczmGdH8HQ3VK33iIX4eqrgPU8KH9Tzf1eEF0pZ+8N62mwEW+wASLve0wA+0STuM75jf6rJ9ryYZQXAqr6R1cHU5CCANZrUHLWaFnec6249o8l+4mZZAZDOD/WArPBDn74/FfT6ufYefQ6StcwGgOXun6kmTPym8fRXMjM6heZ7Ljp3lpJNlR5vbABI54vPgtRHemS6zqqi5/xc5uNEfGl2wgcA13sPwIua9aqYf9937JcS8qXVDSMATg4AtFGrWlXj6pjvrOtMxpdeL4wAKJ4CVKteuSrWacR3MmuT8aXXCyMAvEsAluqVq2r9su/YyxLypdUNJwBkUmgMVNgAIMOiY2Sf07UAmRRqOgBJ/ApY0ZjRr4Fs3gJS7h8PE6a+i3cOou1SaHqk5Nz1fbRdjbmaDQChvCnXGyRgg06pFXC85NgdOn0kaZsZAMXtBNWnU0AF6i45mUM6fSRpmxUAuqsAt9Mf6sUOAJkUGq1+sAMgDL++/YAVQXn2BbIEYPqtoDC8jVRwONp5mHm1TAqth4rzYEMmhdYWnW0FqIYuk0JnpYA/AOXwZVLozBwYA0DtYmjmCgHAzLxXoxYABADDFTA8fKkAAoDhChgevlQAAcBwBQwP/1+sqK6fd1eByAAAAABJRU5ErkJggg==";const Bo=n=>(Ss("data-v-a8b4359c"),n=n(),Ps(),n),SC={class:"mdPage"},PC={class:"cardBox"},OC={class:"cardTop"},AC=Bo(()=>je("h3",null,"目录",-1)),TC=Bo(()=>je("img",{src:wC,alt:""},null,-1)),kC=[TC],EC={class:"catalog"},_C={class:"md"},MC={class:"mdtop"},IC=Bo(()=>je("img",{src:CC,alt:""},null,-1)),NC=[IC],DC=["innerHTML"];function RC(n,e,t,r,a,i){const o=pw,l=Vt,u=ud("preview");return gt(),$t(Cn,null,[je("div",SC,[je("div",{class:"card",style:ui({display:r.isCard?"block":"none"}),onClick:e[1]||(e[1]=()=>{r.isCard=!1})},[m(l,{bordered:!1,style:{width:"330px"}},{default:Os(()=>[je("div",PC,[je("div",OC,[AC,je("div",{class:"cardTopImg",onClick:e[0]||(e[0]=()=>{r.isCard=!1})},kC)]),je("div",EC,[m(o,{"show-icon":"","tree-data":r.treeData,onSelect:r.onSelect},null,8,["tree-data","onSelect"])])])]),_:1})],4),je("div",_C,[je("div",MC,[je("div",{class:"catalogImg",onClick:e[2]||(e[2]=()=>{r.isCard=!0})},NC)]),je("div",{innerHTML:r.markdownTxt,class:"mdBox"},null,8,DC)])]),m(u,{ref:"preview"},null,512)],64)}const LC=ld(xC,[["render",RC],["__scopeId","data-v-a8b4359c"]]);export{LC as default};
